/**
 * Opioid Medications - Comprehensive Guide
 *
 * Detailed coverage of opioid analgesics, pharmacology, safe prescribing,
 * monitoring, and management of opioid-related complications.
 */

import { EducationalContent } from '../types';
import { PainMedication } from './types';

export const opioidMedications: PainMedication[] = [
  {
    genericName: 'Morphine',
    brandNames: ['MS Contin', 'Kadian', 'Roxanol', 'MSIR'],
    class: 'Opioid analgesic',
    subclass: 'Strong opioid (natural)',
    mechanismOfAction: 'Mu-opioid receptor agonist in CNS and peripheral tissue; activates descending inhibitory pathways; alters pain perception and emotional response',
    indications: ['Moderate-severe acute pain', 'Chronic cancer pain', 'Chronic non-cancer pain (selected cases)', 'Dyspnea (palliative)', 'Post-operative pain'],
    contraindications: ['Significant respiratory depression', 'Acute/severe bronchial asthma without monitoring', 'Paralytic ileus', 'Known hypersensitivity'],
    commonDosing: 'Opioid-naive: IR 5-15mg PO q4h; ER: Start after stable IR dose established',
    maxDailyDose: 'No ceiling - titrate to effect vs. side effects',
    sideEffects: {
      common: ['Constipation (>90%)', 'Nausea/vomiting', 'Sedation', 'Pruritus', 'Urinary retention', 'Dry mouth'],
      serious: ['Respiratory depression', 'Hypotension', 'Physical dependence', 'Addiction', 'QT prolongation (high doses)'],
    },
    drugInteractions: ['Benzodiazepines (respiratory depression)', 'Other CNS depressants', 'MAO inhibitors', 'Anticholinergics', 'Muscle relaxants'],
    specialPopulations: [
      { population: 'Renal impairment', consideration: 'M6G (active) and M3G accumulate - reduce dose, extend interval, consider alternative' },
      { population: 'Hepatic impairment', consideration: 'Increased bioavailability - reduce dose' },
      { population: 'Elderly', consideration: 'Increased sensitivity - start low, titrate slowly' },
      { population: 'Pregnancy', consideration: 'Neonatal withdrawal syndrome risk' },
    ],
    monitoringRequired: ['Respiratory rate', 'Sedation level', 'Pain scores', 'Bowel function', 'Signs of misuse'],
    blackBoxWarning: 'Addiction, abuse, misuse risk. Life-threatening respiratory depression. Accidental ingestion can be fatal. Neonatal opioid withdrawal syndrome. Concurrent benzodiazepines: serious risk of death.',
    deaSchedule: 'II',
    costCategory: 'low',
  },
  {
    genericName: 'Oxycodone',
    brandNames: ['OxyContin', 'Roxicodone', 'Oxaydo'],
    class: 'Opioid analgesic',
    subclass: 'Strong opioid (semi-synthetic)',
    mechanismOfAction: 'Mu and kappa opioid receptor agonist',
    indications: ['Moderate-severe pain', 'Chronic pain requiring around-the-clock opioid (ER formulations)'],
    contraindications: ['Significant respiratory depression', 'GI obstruction (ER forms)', 'Acute/severe asthma without monitoring'],
    commonDosing: 'Opioid-naive: IR 5-10mg PO q4-6h; ER: 10mg q12h (only after tolerance established)',
    maxDailyDose: 'No ceiling - titrate to effect',
    sideEffects: {
      common: ['Constipation', 'Nausea', 'Somnolence', 'Dizziness', 'Pruritus', 'Headache'],
      serious: ['Respiratory depression', 'Hypotension', 'Addiction', 'Seizures (rare)', 'QT prolongation (high doses)'],
    },
    drugInteractions: ['Benzodiazepines', 'CYP3A4 inhibitors (increased levels)', 'CYP2D6 inhibitors', 'CNS depressants'],
    specialPopulations: [
      { population: 'Hepatic impairment', consideration: 'Start with 1/3 to 1/2 usual dose' },
      { population: 'Renal impairment', consideration: 'Reduce dose; less accumulation than morphine' },
      { population: 'CYP2D6 poor metabolizers', consideration: 'May have reduced analgesia (oxymorphone formation)' },
    ],
    monitoringRequired: ['Respiratory status', 'Pain control', 'Sedation', 'Signs of misuse', 'PMP check'],
    blackBoxWarning: 'Same as morphine. ER/LA forms: Only for opioid-tolerant patients; swallow whole - crushing/chewing can be fatal.',
    deaSchedule: 'II',
    costCategory: 'moderate',
  },
  {
    genericName: 'Hydromorphone',
    brandNames: ['Dilaudid', 'Exalgo'],
    class: 'Opioid analgesic',
    subclass: 'Strong opioid (semi-synthetic)',
    mechanismOfAction: 'Mu-opioid receptor agonist; approximately 5-7x more potent than morphine',
    indications: ['Moderate-severe pain', 'Alternative when morphine not tolerated', 'Renal impairment (preferred over morphine)'],
    contraindications: ['Same as other opioids'],
    commonDosing: 'Opioid-naive: 1-2mg PO q4-6h or 0.2-0.6mg IV/SC q2-3h',
    maxDailyDose: 'No ceiling - titrate to effect',
    sideEffects: {
      common: ['Same as morphine'],
      serious: ['Same as morphine - respiratory depression primary concern'],
    },
    drugInteractions: ['Same as other opioids'],
    specialPopulations: [
      { population: 'Renal impairment', consideration: 'Preferred over morphine - less active metabolite accumulation' },
      { population: 'Elderly', consideration: 'May be better tolerated than morphine' },
    ],
    monitoringRequired: ['Same as other opioids'],
    blackBoxWarning: 'Same class warnings. Exalgo (ER): Only for opioid-tolerant; high risk if crushed/injected.',
    deaSchedule: 'II',
    costCategory: 'moderate',
  },
  {
    genericName: 'Fentanyl',
    brandNames: ['Duragesic (patch)', 'Actiq (lozenge)', 'Fentora (buccal)', 'Subsys (sublingual spray)', 'Abstral', 'Lazanda'],
    class: 'Opioid analgesic',
    subclass: 'Strong opioid (synthetic)',
    mechanismOfAction: 'Highly selective mu-opioid receptor agonist; 50-100x more potent than morphine; highly lipophilic',
    indications: ['Transdermal: Chronic pain in opioid-tolerant', 'Transmucosal: Breakthrough cancer pain in opioid-tolerant', 'IV: Anesthesia, procedural sedation, acute severe pain'],
    contraindications: ['Opioid-naive patients (transdermal/transmucosal)', 'Acute/intermittent pain (transdermal)', 'Significant respiratory compromise'],
    commonDosing: 'Patch: 12-25 mcg/hr q72h (requires prior opioid tolerance); Transmucosal: Individually titrated starting at lowest dose',
    maxDailyDose: 'No ceiling - titrate to effect',
    sideEffects: {
      common: ['Constipation', 'Nausea', 'Somnolence', 'Application site reactions (patch)', 'Headache'],
      serious: ['Respiratory depression', 'Fatal overdose', 'QT prolongation', 'Severe hypotension', 'Addiction'],
    },
    drugInteractions: ['CYP3A4 inhibitors (fatal overdose risk)', 'Benzodiazepines', 'Heat exposure increases patch absorption'],
    specialPopulations: [
      { population: 'Fever/heat exposure', consideration: 'Increased patch absorption - potentially fatal' },
      { population: 'Cachectic patients', consideration: 'Altered pharmacokinetics - unpredictable' },
      { population: 'Mucositis', consideration: 'Increased transmucosal absorption' },
    ],
    monitoringRequired: ['Respiratory status', 'Patch adherence', 'Signs of toxicity', 'Temperature/fever'],
    blackBoxWarning: 'Transdermal: Fatal in opioid-non-tolerant; heat increases absorption. Transmucosal: Only for breakthrough cancer pain in opioid-tolerant; NOT for acute pain. CYP3A4 inhibitors: Fatal overdose. REMS program for transmucosal.',
    deaSchedule: 'II',
    costCategory: 'high',
  },
  {
    genericName: 'Methadone',
    brandNames: ['Dolophine', 'Methadose'],
    class: 'Opioid analgesic',
    subclass: 'Strong opioid (synthetic)',
    mechanismOfAction: 'Mu-opioid receptor agonist + NMDA receptor antagonist + norepinephrine/serotonin reuptake inhibition',
    indications: ['Chronic pain (experienced prescribers)', 'Opioid use disorder (maintenance)', 'Cancer pain'],
    contraindications: ['Significant respiratory depression', 'Acute/severe asthma', 'QT prolongation/risk factors'],
    commonDosing: 'Pain: Start 2.5mg PO q8-12h (complex titration); OUD: 20-30mg daily initially, titrate',
    maxDailyDose: 'Varies - requires experienced prescriber',
    sideEffects: {
      common: ['Constipation', 'Nausea', 'Sedation', 'Diaphoresis', 'Dizziness'],
      serious: ['Respiratory depression (delayed, prolonged)', 'QT prolongation', 'Torsades de pointes', 'Death during initiation', 'Addiction'],
    },
    drugInteractions: ['QT prolonging drugs', 'CYP3A4 inducers/inhibitors', 'CYP2B6 variants affect levels', 'Benzodiazepines'],
    specialPopulations: [
      { population: 'QT prolongation risk', consideration: 'ECG at baseline and during titration' },
      { population: 'Hepatic impairment', consideration: 'Prolonged half-life - caution' },
      { population: 'Elderly', consideration: 'Higher risk - start very low, titrate slowly' },
    ],
    monitoringRequired: ['ECG (baseline, titration)', 'Respiratory status (especially days 3-7)', 'Pain control', 'QTc interval'],
    blackBoxWarning: 'QT prolongation, serious arrhythmias, death. Peak respiratory depression later than peak analgesia - deaths during conversion/initiation. Only prescribers experienced with methadone should use for pain. OUD: Only certified treatment programs.',
    deaSchedule: 'II',
    costCategory: 'low',
  },
  {
    genericName: 'Buprenorphine',
    brandNames: ['Buprenex', 'Butrans (patch)', 'Belbuca (buccal)', 'Suboxone (with naloxone)', 'Sublocade (injection)'],
    class: 'Opioid analgesic',
    subclass: 'Partial mu-agonist',
    mechanismOfAction: 'Partial mu-opioid agonist, kappa antagonist; ceiling effect on respiratory depression; high receptor affinity',
    indications: ['Opioid use disorder', 'Chronic pain (Butrans, Belbuca)', 'Acute pain (Buprenex)'],
    contraindications: ['Significant respiratory depression', 'Acute/severe asthma'],
    commonDosing: 'Butrans patch: 5-20 mcg/hr weekly; Belbuca: 75-900 mcg buccal BID; SL for OUD: 8-24mg daily',
    maxDailyDose: 'Patch: 20 mcg/hr; Buccal: 900 mcg BID',
    sideEffects: {
      common: ['Nausea', 'Headache', 'Constipation', 'Dizziness', 'Somnolence', 'Application site reactions'],
      serious: ['Respiratory depression (less than full agonists)', 'Hepatotoxicity', 'Dependence', 'Precipitated withdrawal if given to opioid-dependent patient'],
    },
    drugInteractions: ['Benzodiazepines', 'CYP3A4 inhibitors', 'Other CNS depressants'],
    specialPopulations: [
      { population: 'Hepatic impairment', consideration: 'Reduce dose, monitor LFTs' },
      { population: 'Opioid-dependent patients', consideration: 'Can precipitate withdrawal - wait for mild withdrawal before initiating' },
    ],
    monitoringRequired: ['Respiratory status', 'LFTs periodically', 'Pain control', 'Signs of misuse'],
    blackBoxWarning: 'Addiction, abuse, misuse. Respiratory depression (especially with benzodiazepines). Accidental exposure can be fatal. Neonatal withdrawal.',
    deaSchedule: 'III',
    costCategory: 'high',
  },
];

export const opioidMedicationsContent: EducationalContent = {
  id: 'pain-opioid-medications',
  type: 'concept',
  name: 'Opioid Medications',
  alternateNames: ['Narcotic Analgesics', 'Opioid Analgesics', 'Narcotic Pain Medications'],

  levels: {
    1: {
      level: 1,
      summary: 'Opioids are strong prescription pain medicines used for severe pain. They work well but must be used carefully because they can cause dependence and serious side effects.',
      explanation: `Opioids are powerful pain medicines that doctors prescribe for serious pain, like after surgery or for cancer. They include medicines like morphine, oxycodone, and hydrocodone.

**How They Work:**
- They attach to special spots in your brain and body called opioid receptors
- This changes how you feel pain
- They also can make you feel calm or even euphoric

**When Doctors Prescribe Them:**
- After major surgery
- For cancer pain
- For severe injuries
- Sometimes for very bad chronic pain when other medicines don't work

**Important Safety Information:**

**Side Effects:**
- Constipation (almost everyone gets this)
- Feeling drowsy or sleepy
- Nausea (usually goes away after a few days)
- Itching
- Confusion (especially in elderly)

**Serious Dangers:**
- Breathing can slow down dangerously, especially when starting or increasing dose
- You can become dependent (your body needs them to feel normal)
- Risk of addiction (you can't stop even when you want to)
- Mixing with alcohol or sleeping pills can be deadly

**Rules for Safe Use:**
- Take exactly as prescribed
- Don't share with others
- Store safely away from children
- Don't drink alcohol while taking them
- Tell your doctor about all other medicines you take`,
      keyTerms: [
        { term: 'opioid', definition: 'Strong pain medicine that works on special receptors in the brain' },
        { term: 'dependence', definition: 'When your body gets used to a medicine and you feel sick without it' },
        { term: 'prescription', definition: 'Written order from a doctor for a medicine' },
      ],
      analogies: [
        'Opioids are like a fire extinguisher for pain - very effective in emergencies, but you don\'t want to use it for every small flame.',
        'The opioid receptor is like a lock, and the opioid medicine is the key that fits perfectly to turn off pain signals.',
      ],
      examples: [
        'After a major surgery, you might need morphine in the hospital and then pills at home for a few days.',
        'Someone with cancer might take long-acting opioids to stay comfortable.',
      ],
    },
    2: {
      level: 2,
      summary: 'Opioids are mu-receptor agonists used for moderate-severe pain, requiring careful patient selection, monitoring for respiratory depression, management of side effects, and assessment for misuse potential.',
      explanation: `**Types of Opioids:**

*By Potency:*
| Strength | Examples | Uses |
|----------|----------|------|
| Weak | Codeine, Tramadol | Mild-moderate pain |
| Strong | Morphine, Oxycodone, Hydromorphone | Moderate-severe pain |
| Very Strong | Fentanyl, Methadone | Severe chronic pain, anesthesia |

*By Duration:*
- Immediate-release (IR): Works quickly, lasts 4-6 hours
- Extended-release (ER): Lasts 8-24 hours for constant pain control

**Key Principles of Prescribing:**

1. **Start Low, Go Slow**: Begin with low doses and increase gradually
2. **Assess Pain and Function**: Measure both pain relief AND ability to do activities
3. **Monitor Carefully**: Watch for side effects and signs of misuse
4. **Set Expectations**: Clear discussion about goals and risks

**Common Side Effects and Management:**

| Side Effect | Frequency | Management |
|-------------|-----------|------------|
| Constipation | >90% | Start laxatives immediately (no tolerance develops) |
| Nausea | 30-60% | Usually temporary; antiemetics if needed |
| Sedation | 20-40% | Often improves; adjust dose if severe |
| Pruritus | 10-30% | Antihistamines; consider opioid rotation |
| Urinary retention | 5-20% | More common in elderly; monitor |

**Red Flags for Misuse:**
- Requesting early refills
- Lost/stolen prescriptions repeatedly
- Doctor shopping
- Escalating doses without discussion
- Crushing or injecting pills

**Converting Between Opioids:**

*Equianalgesic Doses (approximate):*
| Drug | Oral (mg) | IV (mg) |
|------|-----------|---------|
| Morphine | 30 | 10 |
| Oxycodone | 20 | - |
| Hydromorphone | 6 | 1.5 |

When switching opioids, reduce calculated dose by 25-50% due to incomplete cross-tolerance.`,
      keyTerms: [
        { term: 'equianalgesic', definition: 'Doses of different opioids that provide equal pain relief' },
        { term: 'cross-tolerance', definition: 'Tolerance to one opioid partially applies to others' },
        { term: 'extended-release', definition: 'Formulation that releases medicine slowly over hours' },
        { term: 'opioid rotation', definition: 'Switching from one opioid to another to improve effect or reduce side effects' },
      ],
      patientCounselingPoints: [
        'Take constipation prevention seriously - start a laxative from day one',
        'Never take more than prescribed, and never share your medication',
        'Do not drink alcohol or take sleeping pills while on opioids',
        'Store medication securely; lock up around children',
        'Dispose of unused medication properly at take-back programs',
      ],
    },
    3: {
      level: 3,
      summary: 'Opioid pharmacology involves mu-receptor-mediated analgesia with distinct pharmacokinetic profiles, requiring individualized dosing, equianalgesic conversions, side effect prevention, and structured monitoring for misuse using validated tools.',
      explanation: `**Opioid Receptor Pharmacology:**

*Receptor Types and Effects:*
| Receptor | Primary Effects | Agonists |
|----------|-----------------|----------|
| Mu (MOP) | Analgesia, euphoria, respiratory depression, constipation | Morphine, fentanyl, oxycodone |
| Kappa (KOP) | Analgesia (spinal), dysphoria, sedation | Butorphanol, pentazocine |
| Delta (DOP) | Analgesia, mood modulation | (endogenous enkephalins) |

*Signal Transduction:*
- G-protein coupled receptors (Gi/o)
- Decrease cAMP
- Open K+ channels (hyperpolarization)
- Close Ca2+ channels (reduced neurotransmitter release)
- Descending inhibition activation

**Pharmacokinetic Comparison:**

| Drug | Bioavail. | T1/2 | Metabolism | Active Metabolites |
|------|-----------|------|------------|-------------------|
| Morphine | 25-30% | 2-3h | Glucuronidation | M6G (analgesic), M3G (neuroexcitatory) |
| Oxycodone | 60-87% | 3-5h | CYP3A4, CYP2D6 | Oxymorphone (minor) |
| Hydromorphone | 24% | 2-3h | Glucuronidation | Minimal |
| Fentanyl | 92% (TM), var (TD) | 3-7h | CYP3A4 | Norfentanyl (inactive) |
| Methadone | 80-90% | 8-59h | CYP3A4, 2B6 | Minimal |

**Respiratory Depression Physiology:**
- Mu-receptor mediated in brainstem
- Blunted CO2 response (primary)
- Blunted hypoxic response
- Risk factors: Sleep apnea, obesity, concurrent sedatives, opioid-naive
- Peak risk: 2-4 hours post-dose (IR), days 3-5 during initiation (methadone)

**Opioid-Induced Constipation (OIC):**
- Mechanism: Mu receptors in enteric nervous system
- Decreased peristalsis, increased fluid absorption, increased sphincter tone
- No tolerance develops - requires ongoing treatment
- Treatment ladder:
  1. Stimulant + stool softener (senna/docusate)
  2. Add osmotic (PEG, lactulose)
  3. PAMORA (methylnaltrexone, naloxegol, naldemedine)

**Opioid Conversion Practical Approach:**

*Step 1:* Calculate current total daily dose
*Step 2:* Convert to oral morphine equivalents (MME)
*Step 3:* Calculate equianalgesic dose of new opioid
*Step 4:* Reduce by 25-50% for incomplete cross-tolerance
*Step 5:* Divide into appropriate dosing intervals

*Example:*
Patient on oxycodone 20mg PO q6h (80mg/day)
→ 80mg oxycodone = 120mg oral morphine
→ Converting to hydromorphone: 120mg morphine = 24mg hydromorphone
→ Reduce by 25-50%: 12-18mg hydromorphone daily
→ Divide: 4-6mg PO q8h

**Monitoring Framework (CDC):**

*Before initiating:*
- Check PMP (Prescription Monitoring Program)
- Assess risk (ORT, SOAPP-R)
- Baseline pain/function assessment
- Discuss risks, benefits, expectations
- Consider urine drug testing

*Ongoing:*
- Reassess at 1-4 weeks initially
- Check PMP each prescription
- Periodic UDT (risk-stratified)
- Assess "4 A's": Analgesia, Activity, Adverse effects, Aberrant behavior`,
      keyTerms: [
        { term: 'M6G', definition: 'Morphine-6-glucuronide - active metabolite with analgesic properties that accumulates in renal failure' },
        { term: 'PAMORA', definition: 'Peripherally Acting Mu-Opioid Receptor Antagonist - treats constipation without affecting analgesia' },
        { term: 'MME', definition: 'Morphine Milligram Equivalents - standardized measure to compare opioid doses' },
        { term: 'PMP', definition: 'Prescription Monitoring Program - state database of controlled substance prescriptions' },
      ],
      clinicalNotes: 'Always calculate opioid doses in MME for risk assessment. CDC identifies increased overdose risk at >50 MME/day and advises careful justification above 90 MME/day. Never rely solely on conversion tables - patient response varies significantly.',
    },
    4: {
      level: 4,
      summary: 'Advanced opioid therapeutics encompasses receptor subtype pharmacology, pharmacogenomics, tolerance/hyperalgesia mechanisms, complex conversions including methadone, multimodal opioid-sparing strategies, and evidence-based approaches to opioid tapering.',
      explanation: `**Mu-Receptor Molecular Pharmacology:**

*Receptor Subtypes:*
- MOR-1 with multiple splice variants
- Different variants show distinct agonist responses
- May explain individual variation in opioid response
- OPRM1 A118G polymorphism affects:
  - Receptor binding affinity
  - Beta-endorphin response
  - Opioid dose requirements

*Biased Agonism:*
- G-protein vs. beta-arrestin signaling
- Beta-arrestin linked to respiratory depression, constipation
- Oliceridine (Olinvyk): G-protein biased agonist, less respiratory depression
- Ongoing research into biased ligands

**Pharmacogenomics:**

*CYP2D6 and Opioid Metabolism:*
| Phenotype | Prevalence | Codeine Effect | Tramadol Effect |
|-----------|------------|----------------|-----------------|
| Poor metabolizer | 5-10% | Minimal efficacy | Reduced efficacy |
| Extensive (normal) | 65-80% | Normal response | Normal response |
| Ultra-rapid | 1-10% | Toxicity risk | Increased effect |

*Clinical Implications:*
- Codeine: Contraindicated in ultra-rapid metabolizers (deaths in children)
- Tramadol: Variable response by CYP2D6 status
- Oxycodone: CYP2D6 forms active metabolite (minor contribution)
- CPIC guidelines available for codeine, tramadol

**Opioid Tolerance Mechanisms:**

*Cellular:*
- Receptor phosphorylation (GRK-mediated)
- Beta-arrestin recruitment and internalization
- Decreased receptor density (downregulation)
- Reduced G-protein coupling

*Neural Circuit:*
- Altered reward circuitry
- Increased glutamatergic transmission
- NMDA receptor upregulation
- Glial activation

*Clinical Features:*
- Dose escalation required for same effect
- Develops at different rates for different effects
- Tolerance to analgesia, euphoria, sedation, respiratory depression
- NO tolerance to constipation, miosis

**Opioid-Induced Hyperalgesia (OIH):**

*Mechanism:*
- Central sensitization via NMDA receptors
- Glial activation releasing pro-inflammatory cytokines
- Dynorphin upregulation
- Descending facilitation from RVM

*Clinical Features:*
- Pain worsening despite opioid increase
- Diffuse, poorly localized pain
- Allodynia, hyperalgesia on exam
- Improves with opioid reduction

*Management:*
- Opioid taper or rotation
- NMDA antagonist (ketamine, methadone)
- Gabapentinoids
- Multimodal approach

**Complex Opioid Conversions:**

*Methadone Conversion (must be experienced):*
- Incomplete cross-tolerance particularly pronounced
- NMDA antagonist effect provides additional analgesia
- Long, variable half-life (8-59 hours)

*Stoplight Approach (not universal):*
| Prior MME | Conversion Ratio (oral morphine:methadone) |
|-----------|-------------------------------------------|
| <100 | 3:1 |
| 100-300 | 5:1 |
| 300-500 | 10:1 |
| 500-1000 | 12:1 |
| >1000 | 15:1 or higher |

*Critical Points:*
- Never convert directly at calculated dose
- Divide into q8h dosing (not q12h initially)
- Titrate slowly (increases every 5-7 days)
- ECG monitoring for QTc prolongation

**Opioid Tapering:**

*Indications:*
- No improvement in pain/function
- Opioid-related adverse effects
- Aberrant behavior
- Patient request
- High-risk situations

*Tapering Protocol:*
- Gradual: 10% per week to month
- May need to slow as dose decreases
- Manage withdrawal symptoms
- Intensive support and monitoring
- Alternative pain strategies concurrent

*Withdrawal Management:*
- Clonidine: Autonomic symptoms
- Loperamide: Diarrhea
- NSAIDs/acetaminophen: Pain
- Short-term sleep aids
- Psychological support

**Naloxone for Overdose Reversal:**

*Dosing:*
- IV/IM/SC: 0.4-2mg, repeat q2-3min PRN
- Intranasal: 4mg, repeat if needed
- Goal: Restore breathing, not full reversal

*Considerations:*
- Half-life shorter than most opioids - patient may re-sedate
- Observe minimum 4 hours (longer for ER opioids, methadone)
- May precipitate withdrawal - dose carefully
- Co-prescribe with high-risk patients`,
      keyTerms: [
        { term: 'biased agonism', definition: 'Receptor activation favoring specific signaling pathways (G-protein vs. beta-arrestin)' },
        { term: 'CPIC', definition: 'Clinical Pharmacogenetics Implementation Consortium - develops gene-based drug dosing guidelines' },
        { term: 'OIH', definition: 'Opioid-Induced Hyperalgesia - paradoxical pain increase from opioid use' },
        { term: 'GRK', definition: 'G-protein-coupled Receptor Kinase - phosphorylates receptors leading to desensitization' },
      ],
      clinicalNotes: 'Methadone conversions are high-risk and should only be performed by experienced prescribers. The long half-life means steady state takes 5-7 days, and deaths typically occur in the first week of initiation or dose increase. Always recheck QTc if dose increases or interacting drugs added.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art opioid therapeutics integrates precision medicine through pharmacogenomics, novel biased-agonist compounds, abuse-deterrent technologies, comprehensive REMS requirements, and evolving evidence on chronic pain efficacy balanced against societal opioid crisis considerations.',
      explanation: `**Precision Opioid Medicine:**

*Pharmacogenomic Implementation:*
- CPIC guidelines: Codeine, tramadol, and hydrocodone based on CYP2D6
- OPRM1 A118G: Higher doses needed for analgesia (Asn40Asp variant)
- COMT Val158Met: Affects pain sensitivity and opioid response
- ABCB1: P-glycoprotein polymorphisms affect CNS penetration

*Point-of-Care Testing:*
- Rapid genotyping platforms emerging
- Cost-effectiveness improving
- EHR integration with CDS

**Novel Opioid Therapeutics:**

*Oliceridine (Olinvyk):*
- G-protein biased mu-agonist
- FDA approved 2020 for acute pain
- Reduced respiratory depression in trials
- Less nausea, constipation
- DEA Schedule II
- Role: IV alternative to morphine/fentanyl

*Pipeline Compounds:*
- Other biased agonists in development
- Peripheral-restricted opioids (for inflammation without CNS effects)
- Kappa agonists without dysphoria
- Dual mu-agonist/SNRI compounds

**Abuse-Deterrent Formulations (ADF):**

*Technologies:*
- Physical/chemical barriers (hard to crush)
- Agonist/antagonist combinations
- Aversion (irritant if manipulated)
- Delivery system (prodrug activation)

*Examples:*
| Product | Technology | Characteristics |
|---------|------------|-----------------|
| OxyContin (reformulated) | Physical/chemical | Gelling if dissolved |
| Targiniq ER | Agonist/antagonist | Oxycodone + naloxone |
| Embeda | Sequestered antagonist | Morphine + naltrexone core |
| Xtampza ER | Microsphere | Oxycodone, hard to abuse |

*Evidence:*
- Reduces diversion and IV abuse
- May shift to heroin/fentanyl use
- Cost considerations
- Not abuse-proof, only deterrent

**Regulatory Framework:**

*FDA REMS:*
- Extended-Release and Long-Acting Opioid REMS
- Prescriber education required
- Patient counseling requirements
- Transmucosal fentanyl has separate REMS

*CDC Guidelines 2022:*
- Nonopioid therapy preferred for chronic pain
- If opioids: Start low, immediate-release, short duration
- >50 MME: Increased risk, careful justification
- >90 MME: Generally avoid; re-evaluate if already on
- No benzodiazepine co-prescribing without clear indication

*State Regulations:*
- PMP checking requirements (mandatory in most states)
- Prescribing limits (especially acute pain)
- Continuing education mandates
- Informed consent documentation

**Chronic Non-Cancer Pain Evidence:**

*SPACE Trial (2018):*
- Opioids vs. nonopioids for chronic back/OA pain
- 12 months: No difference in function
- Pain slightly worse with opioids
- More adverse effects with opioids

*Cochrane Reviews:*
- Short-term efficacy for chronic pain
- Long-term benefits unproven
- NNT ~6 for moderate improvement
- High discontinuation rates

*Clinical Implications:*
- Opioids not first-line for chronic pain
- Trial of alternatives before opioids
- Time-limited trials with clear goals
- Frequent reassessment

**Population Health Considerations:**

*Opioid Crisis Data:*
- Peak overdose deaths in 2022
- Shift from prescription to illicit fentanyl
- Polysubstance involvement common
- Disparities in access to treatment

*Harm Reduction Integration:*
- Naloxone co-prescribing (required by many states)
- Medication-assisted treatment accessibility
- Syringe services programs
- Drug checking services

**Clinical Decision Framework:**

*Before Initiating Opioids:*
1. Comprehensive pain evaluation
2. Nonopioid/nonpharmacologic trials
3. Risk-benefit discussion (document)
4. Check PMP
5. Consider UDT
6. Set functional goals
7. Establish monitoring plan
8. Discuss exit strategy

*Ongoing Management:*
1. Regular reassessment (1-4 week initially, then monthly-quarterly)
2. PMP check each prescription
3. Periodic UDT (risk-stratified)
4. Document 4 A's
5. Consider opioid trial if no improvement
6. Naloxone prescription for at-risk patients

*Warning Signs Requiring Action:*
- Functional decline despite dose increases
- Aberrant behaviors
- Positive for non-prescribed substances
- Refusing non-opioid treatments
- Overdose events
- New risk factors (benzodiazepines, SUD)`,
      keyTerms: [
        { term: 'ADF', definition: 'Abuse-Deterrent Formulation - technology designed to resist manipulation for abuse' },
        { term: 'SPACE Trial', definition: 'Landmark RCT showing opioids no better than nonopioids for chronic back/OA pain' },
        { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy - FDA program ensuring drug benefits outweigh risks' },
        { term: 'biased agonist', definition: 'Drug selectively activating certain receptor signaling pathways over others' },
      ],
      clinicalNotes: 'The shift in overdose deaths from prescription opioids to illicit fentanyl does not eliminate prescriber responsibility. Appropriate prescribing, risk assessment, and offering treatment for OUD remain critical. Consider buprenorphine for patients with chronic pain and concurrent opioid use disorder - it treats both conditions.',
    },
  },

  media: [
    {
      id: 'opioid-receptor-diagram',
      type: 'diagram',
      filename: 'opioid-receptors.svg',
      title: 'Opioid Receptor Types and Signaling',
      description: 'Mu, kappa, and delta receptor locations and effects',
    },
    {
      id: 'equianalgesic-chart',
      type: 'diagram',
      filename: 'equianalgesic-table.svg',
      title: 'Opioid Equianalgesic Conversion Chart',
      description: 'Reference table for opioid dose conversions',
    },
    {
      id: 'opioid-metabolism-pathways',
      type: 'diagram',
      filename: 'opioid-metabolism.svg',
      title: 'Opioid Metabolism Pathways',
      description: 'CYP450 and glucuronidation pathways for major opioids',
    },
  ],

  citations: [
    {
      id: 'cdc-2022-guidelines',
      type: 'article',
      title: 'CDC Clinical Practice Guideline for Prescribing Opioids for Pain',
      authors: ['Dowell D', 'Ragan KR', 'Jones CM', 'Baldwin GT', 'Chou R'],
      source: 'MMWR Recommendations and Reports',
      chapter: '71(3):1-95',
      accessedDate: '2025-01-24',
    },
    {
      id: 'space-trial-2018',
      type: 'article',
      title: 'Effect of Opioid vs Nonopioid Medications on Pain-Related Function',
      authors: ['Krebs EE', 'Gravely A', 'Nugent S', 'et al.'],
      source: 'JAMA',
      chapter: '319(9):872-882',
      accessedDate: '2025-01-24',
    },
    {
      id: 'uptodate-opioids',
      type: 'website',
      title: 'Cancer pain management with opioids: Optimizing analgesia',
      source: 'UpToDate',
      url: 'https://www.uptodate.com',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'pain-who-ladder', targetType: 'topic', relationship: 'parent', label: 'WHO Pain Ladder' },
    { targetId: 'pain-non-opioid-analgesics', targetType: 'topic', relationship: 'sibling', label: 'Non-Opioid Analgesics' },
    { targetId: 'pain-assessment-scales', targetType: 'topic', relationship: 'related', label: 'Pain Assessment' },
    { targetId: 'pain-chronic-syndrome', targetType: 'condition', relationship: 'see-also', label: 'Chronic Pain Syndrome' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pain management', 'pharmacology', 'opioid prescribing', 'controlled substances'],
    keywords: ['opioid', 'morphine', 'oxycodone', 'fentanyl', 'methadone', 'buprenorphine', 'equianalgesic', 'opioid use disorder'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'anesthesiology', 'psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
