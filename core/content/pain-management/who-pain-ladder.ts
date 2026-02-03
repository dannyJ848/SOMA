/**
 * WHO Pain Ladder - Stepwise Approach to Pain Management
 *
 * The World Health Organization's analgesic ladder provides a framework
 * for rational pain management based on severity.
 */

import { EducationalContent } from '../types';
import { WHOPainLadderStep, PainMedication } from './types';

const step1Medications: PainMedication[] = [
  {
    genericName: 'Acetaminophen',
    brandNames: ['Tylenol', 'Panadol'],
    class: 'Non-opioid analgesic',
    subclass: 'Para-aminophenol derivative',
    mechanismOfAction: 'Inhibits central COX enzymes and activates descending serotonergic pathways; exact mechanism incompletely understood',
    indications: ['Mild pain', 'Fever', 'Osteoarthritis', 'Headache'],
    contraindications: ['Severe hepatic impairment', 'Chronic alcohol use (relative)'],
    commonDosing: '325-1000mg every 4-6 hours',
    maxDailyDose: '3000-4000mg (lower in elderly, liver disease)',
    sideEffects: {
      common: ['Rare at therapeutic doses'],
      serious: ['Hepatotoxicity with overdose', 'Acute liver failure'],
    },
    drugInteractions: ['Warfarin (may increase INR)', 'Alcohol (hepatotoxicity risk)'],
    specialPopulations: [
      { population: 'Hepatic impairment', consideration: 'Reduce dose, max 2g/day' },
      { population: 'Chronic alcohol use', consideration: 'Max 2g/day' },
    ],
    deaSchedule: 'unscheduled',
    costCategory: 'low',
  },
  {
    genericName: 'Ibuprofen',
    brandNames: ['Advil', 'Motrin'],
    class: 'NSAID',
    subclass: 'Propionic acid derivative',
    mechanismOfAction: 'Non-selective COX-1/COX-2 inhibition, reducing prostaglandin synthesis',
    indications: ['Mild-moderate pain', 'Inflammation', 'Fever', 'Dysmenorrhea'],
    contraindications: ['Active GI bleeding', 'Severe renal impairment', 'Third trimester pregnancy', 'CABG perioperative'],
    commonDosing: '200-400mg every 4-6 hours',
    maxDailyDose: '3200mg (1200mg OTC)',
    sideEffects: {
      common: ['GI upset', 'Dyspepsia', 'Headache'],
      serious: ['GI bleeding', 'Cardiovascular events', 'Acute kidney injury', 'Bronchospasm in aspirin-sensitive asthma'],
    },
    drugInteractions: ['Aspirin (cardioprotection interference)', 'Anticoagulants', 'ACE inhibitors', 'Lithium'],
    specialPopulations: [
      { population: 'Elderly', consideration: 'Increased GI and renal risk - use lowest dose, shortest duration' },
      { population: 'CKD', consideration: 'Avoid if eGFR <30' },
    ],
    blackBoxWarning: 'Increased risk of serious cardiovascular thrombotic events, MI, and stroke. Increased risk of serious GI adverse events.',
    deaSchedule: 'unscheduled',
    costCategory: 'low',
  },
];

const step2Medications: PainMedication[] = [
  {
    genericName: 'Tramadol',
    brandNames: ['Ultram', 'ConZip'],
    class: 'Opioid analgesic',
    subclass: 'Atypical/weak opioid',
    mechanismOfAction: 'Weak mu-opioid agonist plus norepinephrine and serotonin reuptake inhibition',
    indications: ['Moderate pain', 'Chronic pain in opioid-naive patients'],
    contraindications: ['Seizure disorder', 'MAO inhibitor use', 'Concurrent serotonergic drugs (risk)', 'Severe respiratory depression'],
    commonDosing: '50-100mg every 4-6 hours',
    maxDailyDose: '400mg (300mg in elderly)',
    sideEffects: {
      common: ['Nausea', 'Dizziness', 'Constipation', 'Headache', 'Somnolence'],
      serious: ['Seizures', 'Serotonin syndrome', 'Respiratory depression', 'Dependence'],
    },
    drugInteractions: ['SSRIs/SNRIs (serotonin syndrome)', 'MAO inhibitors', 'CYP2D6 inhibitors', 'CYP3A4 inhibitors'],
    specialPopulations: [
      { population: 'CYP2D6 poor metabolizers', consideration: 'Reduced efficacy' },
      { population: 'CYP2D6 ultra-rapid metabolizers', consideration: 'Increased toxicity risk' },
    ],
    monitoringRequired: ['Seizure risk', 'Serotonin syndrome signs'],
    blackBoxWarning: 'Risk of addiction, abuse, misuse. Life-threatening respiratory depression. Accidental ingestion, especially in children, can be fatal.',
    deaSchedule: 'IV',
    costCategory: 'low',
  },
  {
    genericName: 'Codeine',
    brandNames: ['Various combinations'],
    class: 'Opioid analgesic',
    subclass: 'Weak opioid/prodrug',
    mechanismOfAction: 'Prodrug converted to morphine by CYP2D6; mu-opioid receptor agonist',
    indications: ['Mild-moderate pain', 'Cough suppression'],
    contraindications: ['CYP2D6 ultra-rapid metabolizers', 'Children <12 for any use', 'Children <18 post-tonsillectomy', 'Respiratory depression'],
    commonDosing: '15-60mg every 4-6 hours',
    maxDailyDose: '360mg',
    sideEffects: {
      common: ['Constipation', 'Nausea', 'Drowsiness', 'Dizziness'],
      serious: ['Respiratory depression', 'Dependence', 'Death in ultra-rapid metabolizers'],
    },
    drugInteractions: ['CYP2D6 inhibitors (reduced efficacy)', 'CNS depressants', 'MAO inhibitors'],
    specialPopulations: [
      { population: 'CYP2D6 ultra-rapid metabolizers', consideration: 'Contraindicated - rapid morphine conversion' },
      { population: 'CYP2D6 poor metabolizers', consideration: 'Minimal efficacy - consider alternative' },
    ],
    monitoringRequired: ['Respiratory status', 'Pain control'],
    blackBoxWarning: 'Deaths in children receiving codeine following tonsillectomy and/or adenoidectomy. Contraindicated in children <12.',
    deaSchedule: 'II',
    costCategory: 'low',
  },
];

const step3Medications: PainMedication[] = [
  {
    genericName: 'Morphine',
    brandNames: ['MS Contin', 'Kadian', 'Roxanol'],
    class: 'Opioid analgesic',
    subclass: 'Strong opioid',
    mechanismOfAction: 'Mu-opioid receptor agonist in CNS and periphery',
    indications: ['Moderate-severe pain', 'Cancer pain', 'Post-operative pain', 'Dyspnea (palliative)'],
    contraindications: ['Respiratory depression', 'Paralytic ileus', 'Acute/severe bronchial asthma without monitoring'],
    commonDosing: 'IR: 15-30mg every 4 hours; ER: 15-30mg every 8-12 hours (opioid-naive)',
    maxDailyDose: 'No ceiling - titrate to effect vs. side effects',
    sideEffects: {
      common: ['Constipation', 'Nausea/vomiting', 'Sedation', 'Pruritus', 'Urinary retention'],
      serious: ['Respiratory depression', 'Hypotension', 'Physical dependence', 'Addiction'],
    },
    drugInteractions: ['Benzodiazepines', 'Other CNS depressants', 'MAO inhibitors', 'Muscle relaxants'],
    specialPopulations: [
      { population: 'Renal impairment', consideration: 'Active metabolite (M6G) accumulates - reduce dose, extend interval' },
      { population: 'Elderly', consideration: 'Start low, titrate slowly - increased sensitivity' },
    ],
    monitoringRequired: ['Respiratory rate', 'Pain scores', 'Sedation', 'Bowel function'],
    blackBoxWarning: 'Risk of addiction, abuse, misuse. Life-threatening respiratory depression. Concurrent benzodiazepines: serious risks of death.',
    deaSchedule: 'II',
    costCategory: 'low',
  },
  {
    genericName: 'Oxycodone',
    brandNames: ['OxyContin', 'Roxicodone', 'Percocet (with acetaminophen)'],
    class: 'Opioid analgesic',
    subclass: 'Strong opioid',
    mechanismOfAction: 'Mu and kappa opioid receptor agonist',
    indications: ['Moderate-severe pain', 'Cancer pain', 'Chronic pain (extended-release)'],
    contraindications: ['Significant respiratory depression', 'GI obstruction (ER forms)', 'Acute/severe bronchial asthma'],
    commonDosing: 'IR: 5-15mg every 4-6 hours; ER: 10mg every 12 hours (opioid-naive)',
    maxDailyDose: 'No ceiling - titrate to effect',
    sideEffects: {
      common: ['Constipation', 'Nausea', 'Somnolence', 'Dizziness', 'Pruritus'],
      serious: ['Respiratory depression', 'Hypotension', 'Addiction', 'QT prolongation (high doses)'],
    },
    drugInteractions: ['Benzodiazepines', 'CYP3A4 inhibitors/inducers', 'CNS depressants'],
    specialPopulations: [
      { population: 'Hepatic impairment', consideration: 'Start with 1/3 to 1/2 usual dose' },
      { population: 'Elderly', consideration: 'Start low - increased plasma concentrations' },
    ],
    monitoringRequired: ['Respiratory status', 'Pain control', 'Signs of misuse'],
    blackBoxWarning: 'Addiction, abuse, misuse risk. Life-threatening respiratory depression. Accidental exposure can be fatal. Concurrent benzodiazepines: risk of death.',
    deaSchedule: 'II',
    costCategory: 'moderate',
  },
  {
    genericName: 'Fentanyl',
    brandNames: ['Duragesic (patch)', 'Actiq (lozenge)', 'Sublimaze (IV)'],
    class: 'Opioid analgesic',
    subclass: 'Strong opioid (synthetic)',
    mechanismOfAction: 'Highly selective mu-opioid receptor agonist, 50-100x more potent than morphine',
    indications: ['Severe chronic pain (patch)', 'Breakthrough cancer pain (transmucosal)', 'Anesthesia/procedural sedation (IV)'],
    contraindications: ['Opioid-naive patients (transdermal)', 'Acute/intermittent pain', 'Significant respiratory compromise'],
    commonDosing: 'Patch: 12-25mcg/hr every 72 hours (NOT for opioid-naive); Transmucosal: individually titrated',
    maxDailyDose: 'No ceiling - titrate to effect',
    sideEffects: {
      common: ['Constipation', 'Nausea', 'Somnolence', 'Application site reactions (patch)'],
      serious: ['Respiratory depression', 'Fatal overdose', 'QT prolongation', 'Addiction'],
    },
    drugInteractions: ['CYP3A4 inhibitors (fatal overdose risk)', 'Benzodiazepines', 'Heat exposure (increased absorption from patch)'],
    specialPopulations: [
      { population: 'Fever/heat exposure', consideration: 'Increased absorption from patch - potentially fatal' },
      { population: 'Cachectic patients', consideration: 'Altered pharmacokinetics - start low' },
    ],
    monitoringRequired: ['Respiratory status', 'Patch adherence', 'Signs of toxicity'],
    blackBoxWarning: 'Transdermal: fatal in opioid non-tolerant. Transmucosal: only for opioid-tolerant cancer patients. CYP3A4 inhibitors can cause fatal overdose.',
    deaSchedule: 'II',
    costCategory: 'high',
  },
];

export const whoPainLadderSteps: WHOPainLadderStep[] = [
  {
    step: 1,
    painSeverity: 'Mild pain (1-3/10)',
    medicationClasses: ['Non-opioid analgesics', 'NSAIDs', 'Acetaminophen'],
    examples: step1Medications,
    adjuvants: ['Antidepressants', 'Anticonvulsants', 'Topical agents', 'Corticosteroids'],
    principles: [
      'Start with non-opioid analgesics',
      'Consider underlying cause',
      'Add adjuvants for specific pain types',
      'Regular dosing often better than PRN',
    ],
    whenToStepUp: [
      'Pain not adequately controlled despite optimal dosing',
      'Cannot tolerate Step 1 medications',
      'Functional impairment persists',
    ],
  },
  {
    step: 2,
    painSeverity: 'Mild to moderate pain (4-6/10)',
    medicationClasses: ['Weak opioids', 'Combination products', 'Continue non-opioids'],
    examples: step2Medications,
    adjuvants: ['Same as Step 1, continue if indicated'],
    principles: [
      'Add weak opioid to non-opioid',
      'Combination products provide dual mechanism',
      'Continue non-opioids for additive effect',
      'Genetic testing may guide codeine/tramadol use',
    ],
    whenToStepUp: [
      'Maximum doses reached without relief',
      'Pain severity increases',
      'Dose-limiting side effects',
    ],
  },
  {
    step: 3,
    painSeverity: 'Moderate to severe pain (7-10/10)',
    medicationClasses: ['Strong opioids', 'Continue non-opioids and adjuvants'],
    examples: step3Medications,
    adjuvants: ['Continue Step 1-2 adjuvants', 'Interventional procedures', 'Bisphosphonates for bone pain'],
    principles: [
      'Strong opioids have no ceiling effect',
      'Titrate to effect vs. side effects',
      'Continue non-opioids for opioid-sparing',
      'Breakthrough dosing: 10-15% of total daily dose',
      'Address side effects proactively (constipation, nausea)',
    ],
    whenToStepUp: [
      'Consider interventional procedures',
      'Neuromodulation for refractory pain',
      'Intrathecal drug delivery',
    ],
  },
];

export const whoPainLadder: EducationalContent = {
  id: 'pain-who-ladder',
  type: 'concept',
  name: 'WHO Pain Ladder',
  alternateNames: ['WHO Analgesic Ladder', 'Three-Step Ladder', 'WHO Cancer Pain Relief'],

  levels: {
    1: {
      level: 1,
      summary: 'The WHO Pain Ladder is like climbing stairs - you start with gentle pain medicines and move to stronger ones only if needed.',
      explanation: `The World Health Organization created a simple plan to help doctors treat pain. It works like climbing a ladder with 3 steps:

**Step 1 - Mild Pain:**
- Medicine you can buy at the store (like Tylenol or Advil)
- Good for headaches, minor aches, small injuries
- Usually very safe when used correctly

**Step 2 - Medium Pain:**
- Mild prescription pain medicine
- Combined with Step 1 medicines
- For pain that simple medicines don't fix

**Step 3 - Strong Pain:**
- Stronger prescription pain medicine
- For serious pain like cancer or after major surgery
- Doctors monitor closely

**Important Rules:**
- Start at the bottom (Step 1) for most pain
- Only go up a step if the lower step isn't working
- You can go back down when pain gets better
- Sometimes you add helper medicines for specific types of pain

This system was created to make sure everyone gets the right amount of pain medicine - not too little, not too much.`,
      keyTerms: [
        { term: 'analgesic', definition: 'A medicine that relieves pain', pronunciation: 'an-ul-JEE-zik' },
        { term: 'over-the-counter', definition: 'Medicine you can buy without a prescription' },
        { term: 'prescription', definition: 'Medicine that requires a doctor\'s order' },
      ],
      analogies: [
        'The pain ladder is like using tools - you don\'t need a chainsaw to cut paper, but you do need it for a big tree. Match the tool to the job.',
        'Think of it like turning up the volume slowly - you start low and only turn it up if you need to.',
      ],
      examples: [
        'A headache usually needs Step 1 (like Tylenol). You wouldn\'t start with strong medicine.',
        'Someone with cancer pain might need Step 3 medicine to be comfortable.',
      ],
    },
    2: {
      level: 2,
      summary: 'The WHO Pain Ladder provides a stepwise approach to pain management: non-opioids for mild pain, weak opioids for moderate pain, and strong opioids for severe pain, with adjuvants at any step.',
      explanation: `**Background:**
Created in 1986 by the WHO for cancer pain, now applied broadly. Provides rational, evidence-based framework for pain treatment.

**The Three Steps:**

| Step | Pain Level | Medications | Examples |
|------|------------|-------------|----------|
| 1 | Mild (1-3/10) | Non-opioid ± adjuvant | Acetaminophen, NSAIDs |
| 2 | Moderate (4-6/10) | Weak opioid + non-opioid ± adjuvant | Codeine, Tramadol |
| 3 | Severe (7-10/10) | Strong opioid ± non-opioid ± adjuvant | Morphine, Oxycodone |

**Key Principles:**
1. **By the clock**: Regular dosing, not just when pain spikes
2. **By the mouth**: Oral route preferred when possible
3. **By the ladder**: Start appropriate to pain severity
4. **For the individual**: Tailor to each patient
5. **With attention to detail**: Address side effects, psychosocial factors

**Adjuvant Medications** (used at any step):
- Antidepressants (for neuropathic pain)
- Anticonvulsants (for nerve pain)
- Corticosteroids (for inflammation, swelling)
- Muscle relaxants (for muscle spasm)
- Topical agents (for localized pain)

**Moving Up the Ladder:**
- When current step fails despite optimal dosing
- When pain worsens significantly
- Skip steps for severe pain (don't make patients wait)

**Common Mistakes:**
- Staying on Step 1 too long when pain is clearly severe
- Skipping non-opioids at higher steps (they still help!)
- Forgetting adjuvants that target the pain mechanism`,
      keyTerms: [
        { term: 'adjuvant', definition: 'A helper medication that enhances pain relief or treats specific pain types', pronunciation: 'AD-joo-vant' },
        { term: 'by the clock', definition: 'Taking pain medicine on a regular schedule, not just when pain flares' },
        { term: 'ceiling effect', definition: 'Maximum effect a drug can produce - increasing dose beyond this doesn\'t help' },
        { term: 'opioid-sparing', definition: 'Using non-opioids to reduce the amount of opioid needed' },
      ],
      analogies: [
        'Adjuvant medications are like special tools in your toolbox - you add the right one for the specific job at hand.',
      ],
    },
    3: {
      level: 3,
      summary: 'The WHO three-step analgesic ladder stratifies pharmacotherapy by pain intensity, emphasizing multimodal analgesia, regular dosing, oral administration when possible, and individualized adjuvant therapy based on pain mechanism.',
      explanation: `**Evidence and Updates:**

The original 1986 WHO ladder demonstrated 70-90% efficacy for cancer pain when applied correctly. Modern modifications:

1. **Fourth Step**: Interventional procedures, neuromodulation
2. **Bidirectional Ladder**: Move down as well as up
3. **Elevator Concept**: Skip steps for severe pain

**Step 1: Non-Opioid Analgesics**

*Acetaminophen:*
- MOA: Central COX inhibition, serotonergic pathway activation
- Max: 3-4g/day (2g in liver disease, elderly)
- Pearl: Hepatotoxicity is dose-related and preventable

*NSAIDs:*
- MOA: COX-1/COX-2 inhibition → decreased prostaglandins
- GI protection: Consider PPI if risk factors present
- CV risk: All NSAIDs carry black box warning
- Celecoxib: COX-2 selective, lower GI risk but similar CV risk

**Step 2: Weak Opioids**

*Tramadol:*
- Dual mechanism: Weak mu-agonist + SNRI
- Advantages: Lower constipation, less respiratory depression
- Risks: Seizures, serotonin syndrome
- CYP2D6 polymorphism affects response

*Codeine:*
- Prodrug → morphine via CYP2D6
- Highly variable metabolism
- FDA: Contraindicated in children <12

**Step 3: Strong Opioids**

*Selection Considerations:*
- Morphine: Gold standard, reference drug
- Oxycodone: Less nausea, available in combinations
- Hydromorphone: Renal safer than morphine (less M6G)
- Fentanyl: Patches for stable chronic pain, transmucosal for breakthrough
- Methadone: Complex pharmacology, specialist use

*Equianalgesic Dosing (approximate):*
| Opioid | Oral (mg) | Parenteral (mg) |
|--------|-----------|-----------------|
| Morphine | 30 | 10 |
| Oxycodone | 20 | N/A |
| Hydromorphone | 6 | 1.5 |
| Fentanyl | N/A | 0.1 (100 mcg) |

**Adjuvant Medications by Indication:**

| Condition | First-line Adjuvant |
|-----------|---------------------|
| Neuropathic pain | Gabapentin, pregabalin, duloxetine, TCAs |
| Bone pain | NSAIDs, bisphosphonates, corticosteroids |
| Visceral pain | Anticholinergics, octreotide |
| Muscle spasm | Cyclobenzaprine, baclofen, tizanidine |
| Inflammation | Corticosteroids |

**Opioid Side Effect Management:**
- Constipation: Prophylactic laxatives for ALL patients (tolerance doesn't develop)
- Nausea: Usually transient, antiemetics PRN first 1-2 weeks
- Sedation: Usually improves, consider dose adjustment or rotation
- Pruritus: Antihistamines, consider rotation`,
      keyTerms: [
        { term: 'equianalgesic', definition: 'Doses of different opioids that provide equivalent pain relief', pronunciation: 'ee-kwee-an-al-JEE-zik' },
        { term: 'opioid rotation', definition: 'Switching from one opioid to another to improve efficacy or reduce side effects' },
        { term: 'breakthrough pain', definition: 'Transient flare of pain despite around-the-clock medication' },
        { term: 'M6G', definition: 'Morphine-6-glucuronide - active metabolite that accumulates in renal failure' },
      ],
      clinicalNotes: 'When rotating opioids, reduce the equianalgesic dose by 25-50% to account for incomplete cross-tolerance. Methadone conversions are complex and require specialist expertise due to variable half-life and NMDA receptor effects.',
    },
    4: {
      level: 4,
      summary: 'Contemporary application of the WHO ladder incorporates mechanism-based adjuvant selection, pharmacogenomic considerations, multimodal analgesia principles, and recognition of its limitations in non-cancer pain where a biopsychosocial approach is essential.',
      explanation: `**Pharmacogenomics in Opioid Selection:**

*CYP2D6 Status:*
- Poor metabolizers (5-10%): Codeine/tramadol ineffective, hydrocodone reduced
- Ultra-rapid metabolizers (1-10%): Codeine toxicity risk, increased tramadol effect
- Clinical: Consider CYP2D6 testing or avoid prodrugs

*OPRM1 A118G Polymorphism:*
- Associated with reduced morphine analgesia
- May require 30-50% higher doses
- More common in Asian populations

*COMT Val158Met:*
- Met/Met: Higher pain sensitivity, better opioid response
- Val/Val: Lower pain sensitivity, may need higher doses

**Advanced Multimodal Analgesia:**

*Mechanistic Rationale:*
1. Peripheral sensitization → NSAIDs, local anesthetics
2. Ascending transmission → Opioids, gabapentinoids
3. Central sensitization → NMDA antagonists (ketamine, methadone)
4. Descending modulation → SNRIs, TCAs, alpha-2 agonists

*Evidence-Based Combinations:*
- Opioid + gabapentinoid: Synergistic, opioid-sparing
- NSAID + opioid: Additive, reduces opioid requirement by 20-40%
- Low-dose ketamine + opioid: Prevents tolerance, treats hyperalgesia

**Limitations of the WHO Ladder:**

*In Chronic Non-Cancer Pain:*
- Opioids less effective long-term
- Tolerance, hyperalgesia, addiction risks
- Functional outcomes often not improved
- Should integrate with rehabilitation, psychology

*Gaps in Original Model:*
- Doesn't address interventional options
- No guidance on opioid tapering
- Limited psychosocial consideration
- Breakthrough pain management underdeveloped

**Modern Modifications:**

*Fourth Step - Interventional:*
- Nerve blocks, epidurals
- Radiofrequency ablation
- Spinal cord stimulation
- Intrathecal drug delivery

*Bidirectional Movement:*
- Taper when pain controlled
- Opioid rotation for tolerance
- De-escalation protocols

**Opioid Stewardship Principles:**

*Initiation:*
- Lowest effective dose
- Short-acting initially
- Clear expectations and goals
- Exit strategy defined

*Monitoring:*
- Prescription monitoring program (PMP)
- Urine drug testing
- Functional outcomes, not just pain scores
- Aberrant behavior assessment

*Thresholds of Concern (CDC):*
- >50 MME/day: Increased overdose risk
- >90 MME/day: Avoid or carefully justify
- Concurrent benzodiazepines: Strong caution

**Opioid-Induced Hyperalgesia (OIH):**
- Paradoxical increased pain with opioid use
- Mechanism: NMDA receptor activation, glial activation
- Signs: Diffuse pain worsening, allodynia
- Management: Taper opioid, NMDA antagonist, rotation to methadone`,
      keyTerms: [
        { term: 'MME', definition: 'Morphine Milligram Equivalents - standardized measure comparing opioid doses' },
        { term: 'OIH', definition: 'Opioid-Induced Hyperalgesia - paradoxical increased pain sensitivity from opioids' },
        { term: 'PMP', definition: 'Prescription Monitoring Program - state databases tracking controlled substance prescribing' },
        { term: 'NMDA antagonist', definition: 'N-methyl-D-aspartate receptor blocker; prevents central sensitization (e.g., ketamine, methadone)' },
      ],
      clinicalNotes: 'CDC guidelines recommend non-pharmacologic and non-opioid therapies as first-line for chronic pain. When opioids are used, start low, go slow, and use the lowest effective dose. Always check the PMP before initiating and periodically during treatment.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pain pharmacotherapy transcends the traditional WHO ladder paradigm through precision medicine approaches incorporating pharmacogenomics, mechanism-based treatment algorithms, comprehensive risk stratification, and integration with interdisciplinary non-pharmacologic interventions.',
      explanation: `**Evolution Beyond the WHO Ladder:**

*IASP 2019 Chronic Pain Classification:*
- Chronic primary pain (nociplastic)
- Chronic cancer-related pain
- Chronic post-surgical/trauma pain
- Chronic neuropathic pain
- Chronic secondary headache
- Chronic visceral pain
- Chronic musculoskeletal pain

Each category requires tailored approach beyond simple intensity-based stepping.

**Precision Analgesic Selection:**

*Phenotype-Guided Therapy:*
| QST Phenotype | Mechanism | Preferred Agent |
|---------------|-----------|-----------------|
| Thermal hyperalgesia | Sensitized C-fibers | Capsaicin, lidocaine |
| Mechanical hyperalgesia | Central sensitization | SNRIs, gabapentinoids |
| Sensory loss | Denervation | TCAs, SCS |
| Normal sensory | Nociceptive | NSAIDs, opioids |

*Pharmacogenomic Implementation:*
- CPIC guidelines for codeine, tramadol
- Emerging guidance for opioid selection
- Cost-effectiveness improving
- Point-of-care testing emerging

**Novel Targets and Emerging Therapies:**

*Approved/Late-Stage:*
- CGRP antagonists (gepants): Migraine model
- NGF antibodies (tanezumab): OA, CLBP (regulatory issues)
- Nav1.7 inhibitors: Genetic validation from channelopathies
- Selective COX-2 inhibitors: GI-sparing

*Investigational:*
- TRPV1 antagonists: Thermoregulation challenges
- Selective sodium channel blockers (Nav1.8)
- Glial inhibitors (propentofylline, ibudilast)
- Gene therapy for overexpression of enkephalins
- CRISPR-based sodium channel modification

**Opioid-Free and Opioid-Minimization Strategies:**

*ERAS (Enhanced Recovery After Surgery):*
- Preoperative: Education, optimization, gabapentinoid loading
- Intraoperative: Regional anesthesia, ketamine, lidocaine infusion
- Postoperative: Multimodal, early mobilization, opioid protocols
- Outcomes: 30-50% reduction in opioid use, faster recovery

*Chronic Pain Multimodal:*
- First-line: Physical therapy, CBT, exercise
- Adjuvant medications: SNRIs, gabapentinoids
- Interventional: Targeted injections, neuromodulation
- Opioids: Reserved, time-limited, monitored

**Risk Stratification and Monitoring:**

*Validated Instruments:*
- ORT (Opioid Risk Tool): Quick screen
- SOAPP-R: Detailed risk assessment
- COMM: Current Opioid Misuse Measure (ongoing monitoring)
- DIRE: Diagnosis, Intractability, Risk, Efficacy score

*Urine Drug Testing:*
- Baseline and periodic (risk-stratified frequency)
- Immunoassay screening with confirmatory GC/MS
- Interpretation: Understand metabolites, false positives
- Unexpected results: Conversation, not punishment

*Integration with PDMP:*
- Check before initiation and periodically
- Interstate data sharing improving
- Identify concerning patterns
- Delegate to staff where legally permitted

**Value-Based Pain Care:**

*Outcomes Measurement:*
- PROMIS domains (pain, function, sleep, mood)
- PEG (Pain, Enjoyment, General activity)
- Functional restoration metrics
- Return to work/activity

*Quality Metrics:*
- Opioid prescribing benchmarks
- Naloxone co-prescribing rates
- Functional improvement at 6 months
- PDMP utilization rates

**Current Guidelines Integration:**

*CDC 2022 Updates:*
- Nonpharmacologic and nonopioid therapy preferred
- If opioids: Lowest effective dose, IR initially
- >90 MME: Strong justification required
- Benzodiazepine avoidance
- Regular reassessment of benefits vs. risks

*FDA REMS (Risk Evaluation and Mitigation Strategy):*
- Prescriber education mandatory
- Patient counseling requirements
- Naloxone considerations

**Future Directions:**

1. AI-assisted treatment selection
2. Biomarker-guided opioid dosing
3. Abuse-deterrent formulation refinement
4. Real-world data analytics for safety signals
5. Integration of digital therapeutics
6. Pharmacogenomic CDS in EHR`,
      keyTerms: [
        { term: 'CPIC', definition: 'Clinical Pharmacogenetics Implementation Consortium - develops guidelines for genetic testing in drug selection' },
        { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy - FDA program ensuring benefits outweigh risks' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery - multimodal protocols reducing opioid use and improving outcomes' },
        { term: 'CDS', definition: 'Clinical Decision Support - EHR tools guiding treatment selection' },
        { term: 'COMM', definition: 'Current Opioid Misuse Measure - validated monitoring instrument' },
      ],
      clinicalNotes: 'The future of pain pharmacotherapy lies in mechanism-based, phenotype-guided treatment selection rather than intensity-based stepping. Comprehensive risk stratification, functional outcome tracking, and opioid stewardship are essential components of responsible prescribing. Consider referral to multidisciplinary pain programs for complex chronic pain.',
    },
  },

  media: [
    {
      id: 'who-ladder-diagram',
      type: 'diagram',
      filename: 'who-pain-ladder.svg',
      title: 'WHO Three-Step Analgesic Ladder',
      description: 'Visual representation of the WHO pain ladder with medication examples',
    },
    {
      id: 'equianalgesic-chart',
      type: 'diagram',
      filename: 'equianalgesic-dosing.svg',
      title: 'Opioid Equianalgesic Conversion Chart',
      description: 'Reference chart for opioid dose conversions',
    },
  ],

  citations: [
    {
      id: 'who-1986',
      type: 'website',
      title: 'Cancer Pain Relief',
      source: 'World Health Organization',
      url: 'https://apps.who.int/iris/handle/10665/43944',
      accessedDate: '2025-01-24',
    },
    {
      id: 'cdc-2022-opioid',
      type: 'article',
      title: 'CDC Clinical Practice Guideline for Prescribing Opioids for Pain',
      authors: ['Dowell D', 'Ragan KR', 'Jones CM', 'Baldwin GT', 'Chou R'],
      source: 'MMWR Recommendations and Reports',
      chapter: '71(3):1-95',
      accessedDate: '2025-01-24',
    },
    {
      id: 'uptodate-who-ladder',
      type: 'website',
      title: 'Cancer pain management with opioids: Optimizing analgesia',
      source: 'UpToDate',
      url: 'https://www.uptodate.com',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'pain-acute-vs-chronic', targetType: 'topic', relationship: 'related', label: 'Acute vs Chronic Pain' },
    { targetId: 'pain-assessment-scales', targetType: 'topic', relationship: 'related', label: 'Pain Assessment' },
    { targetId: 'pain-opioid-medications', targetType: 'topic', relationship: 'child', label: 'Opioid Medications' },
    { targetId: 'pain-non-opioid-analgesics', targetType: 'topic', relationship: 'child', label: 'Non-Opioid Analgesics' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pain management', 'pharmacology', 'oncology', 'palliative care'],
    keywords: ['WHO ladder', 'analgesic ladder', 'opioid prescribing', 'multimodal analgesia', 'cancer pain'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'oncology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
