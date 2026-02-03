/**
 * Neuropathic Pain - Comprehensive Guide
 *
 * Pain arising from damage or dysfunction of the somatosensory nervous system.
 * Distinct mechanisms and treatment approaches from nociceptive pain.
 */

import { EducationalContent } from '../types';
import { PainMedication } from './types';

export const neuropathicPainMedications: PainMedication[] = [
  {
    genericName: 'Gabapentin',
    brandNames: ['Neurontin', 'Gralise', 'Horizant'],
    class: 'Anticonvulsant',
    subclass: 'Gabapentinoid',
    mechanismOfAction: 'Binds to alpha-2-delta subunit of voltage-gated calcium channels, reducing excitatory neurotransmitter release',
    indications: ['Postherpetic neuralgia', 'Diabetic peripheral neuropathy', 'Fibromyalgia (off-label)', 'Neuropathic pain (general)'],
    contraindications: ['Hypersensitivity'],
    commonDosing: 'Start 100-300mg at bedtime, titrate to 300-1200mg TID over 1-2 weeks',
    maxDailyDose: '3600mg (1800mg in elderly, renal impairment)',
    sideEffects: {
      common: ['Somnolence', 'Dizziness', 'Peripheral edema', 'Ataxia', 'Fatigue', 'Weight gain'],
      serious: ['Suicidal ideation (class warning)', 'Angioedema', 'Respiratory depression (with opioids)', 'Drug reaction with eosinophilia'],
    },
    drugInteractions: ['CNS depressants (additive sedation)', 'Opioids (respiratory depression)', 'Antacids (reduce absorption)'],
    specialPopulations: [
      { population: 'Renal impairment', consideration: 'Renally cleared - reduce dose based on CrCl' },
      { population: 'Elderly', consideration: 'Start low, slower titration, fall risk' },
    ],
    monitoringRequired: ['Renal function', 'Sedation', 'Suicidality', 'Edema'],
    deaSchedule: 'V',
    costCategory: 'low',
  },
  {
    genericName: 'Pregabalin',
    brandNames: ['Lyrica', 'Lyrica CR'],
    class: 'Anticonvulsant',
    subclass: 'Gabapentinoid',
    mechanismOfAction: 'Same as gabapentin - alpha-2-delta calcium channel binding; more potent, linear pharmacokinetics',
    indications: ['Diabetic peripheral neuropathy', 'Postherpetic neuralgia', 'Fibromyalgia', 'Spinal cord injury pain', 'Neuropathic pain'],
    contraindications: ['Hypersensitivity'],
    commonDosing: 'Start 75mg BID or 50mg TID, titrate to 150-300mg BID',
    maxDailyDose: '600mg (300mg for fibromyalgia)',
    sideEffects: {
      common: ['Dizziness', 'Somnolence', 'Peripheral edema', 'Weight gain', 'Dry mouth', 'Blurred vision'],
      serious: ['Angioedema', 'Suicidal ideation', 'Thrombocytopenia', 'Rhabdomyolysis (rare)', 'HF exacerbation'],
    },
    drugInteractions: ['CNS depressants', 'Opioids', 'Thiazolidinediones (edema)'],
    specialPopulations: [
      { population: 'Renal impairment', consideration: 'Reduce dose proportionally to CrCl' },
      { population: 'Heart failure', consideration: 'May worsen edema - use caution' },
    ],
    monitoringRequired: ['Renal function', 'Edema', 'Weight', 'Platelet count (if symptoms)'],
    deaSchedule: 'V',
    costCategory: 'moderate',
  },
  {
    genericName: 'Duloxetine',
    brandNames: ['Cymbalta'],
    class: 'Antidepressant',
    subclass: 'SNRI',
    mechanismOfAction: 'Serotonin and norepinephrine reuptake inhibition; enhances descending inhibitory pain pathways',
    indications: ['Diabetic peripheral neuropathy', 'Fibromyalgia', 'Chronic musculoskeletal pain', 'Major depressive disorder', 'Generalized anxiety disorder'],
    contraindications: ['MAO inhibitor use (within 14 days)', 'Uncontrolled narrow-angle glaucoma', 'Severe renal impairment', 'Heavy alcohol use'],
    commonDosing: 'Start 30mg daily x 1-2 weeks, then 60mg daily',
    maxDailyDose: '120mg (60mg typical for pain)',
    sideEffects: {
      common: ['Nausea', 'Dry mouth', 'Constipation', 'Fatigue', 'Decreased appetite', 'Hyperhidrosis', 'Sexual dysfunction'],
      serious: ['Serotonin syndrome', 'Hepatotoxicity', 'Suicidal ideation', 'Hypertensive crisis (if with MAOIs)', 'Severe discontinuation syndrome'],
    },
    drugInteractions: ['MAO inhibitors (contraindicated)', 'SSRIs (serotonin syndrome)', 'Tramadol', 'CYP1A2/2D6 inhibitors'],
    specialPopulations: [
      { population: 'Hepatic impairment', consideration: 'Avoid in substantial impairment' },
      { population: 'Renal impairment', consideration: 'Avoid if CrCl <30' },
    ],
    monitoringRequired: ['Blood pressure', 'LFTs', 'Mood/suicidality', 'Discontinuation symptoms'],
    blackBoxWarning: 'Increased suicidal thinking and behavior in children, adolescents, and young adults',
    deaSchedule: 'unscheduled',
    costCategory: 'low',
  },
  {
    genericName: 'Amitriptyline',
    brandNames: ['Elavil'],
    class: 'Antidepressant',
    subclass: 'Tricyclic antidepressant (TCA)',
    mechanismOfAction: 'Serotonin and norepinephrine reuptake inhibition; sodium channel blockade; NMDA receptor antagonism',
    indications: ['Neuropathic pain (off-label)', 'Migraine prophylaxis (off-label)', 'Fibromyalgia (off-label)', 'Depression'],
    contraindications: ['Recent MI', 'MAO inhibitor use', 'Cardiac conduction abnormalities', 'Urinary retention'],
    commonDosing: 'Start 10-25mg at bedtime, titrate by 10-25mg weekly; typical pain dose 25-75mg',
    maxDailyDose: '150mg (for pain, lower doses typically used)',
    sideEffects: {
      common: ['Sedation', 'Dry mouth', 'Constipation', 'Urinary retention', 'Weight gain', 'Orthostatic hypotension', 'Blurred vision'],
      serious: ['Cardiac arrhythmias', 'QT prolongation', 'Seizures', 'Overdose toxicity (narrow therapeutic window)', 'Suicidal ideation'],
    },
    drugInteractions: ['MAO inhibitors', 'QT-prolonging drugs', 'Anticholinergics', 'CNS depressants', 'CYP2D6 inhibitors'],
    specialPopulations: [
      { population: 'Elderly', consideration: 'Beers criteria - avoid if possible due to anticholinergic effects' },
      { population: 'Cardiac disease', consideration: 'ECG before starting; avoid in conduction abnormalities' },
    ],
    monitoringRequired: ['ECG in at-risk patients', 'Orthostatic BP', 'Anticholinergic effects', 'Mood'],
    blackBoxWarning: 'Suicidality in young patients',
    deaSchedule: 'unscheduled',
    costCategory: 'low',
  },
  {
    genericName: 'Capsaicin',
    brandNames: ['Zostrix', 'Qutenza (8% patch)'],
    class: 'Topical analgesic',
    subclass: 'TRPV1 agonist',
    mechanismOfAction: 'Activates then desensitizes TRPV1 receptors on C-fiber nociceptors; depletes substance P',
    indications: ['Postherpetic neuralgia', 'Diabetic neuropathy', 'Peripheral neuropathic pain', 'Arthritis (OTC strengths)'],
    contraindications: ['Hypersensitivity', 'Broken skin', 'Near eyes/mucous membranes'],
    commonDosing: 'OTC: 0.025-0.1% cream TID-QID; Rx patch: 8% applied x 60 min (feet) to 90 min (other sites)',
    maxDailyDose: 'N/A - topical',
    sideEffects: {
      common: ['Application site burning/pain', 'Erythema', 'Pruritus'],
      serious: ['Hypertensive crisis (8% patch)', 'Severe skin reactions', 'Inhalation hazard during application'],
    },
    drugInteractions: ['Minimal systemic absorption - few interactions'],
    specialPopulations: [
      { population: '8% patch application', consideration: 'Requires healthcare setting; pretreat with topical anesthetic' },
    ],
    monitoringRequired: ['Blood pressure during 8% application', 'Skin reactions'],
    deaSchedule: 'unscheduled',
    costCategory: 'moderate',
  },
  {
    genericName: 'Lidocaine',
    brandNames: ['Lidoderm patch', 'ZTlido'],
    class: 'Topical anesthetic',
    subclass: 'Sodium channel blocker',
    mechanismOfAction: 'Blocks voltage-gated sodium channels, reducing ectopic impulse generation in peripheral nerves',
    indications: ['Postherpetic neuralgia', 'Localized neuropathic pain'],
    contraindications: ['Hypersensitivity to amide anesthetics', 'Damaged skin at application site'],
    commonDosing: 'Apply up to 3 patches for 12 hours on, 12 hours off',
    maxDailyDose: '3 patches/12 hours',
    sideEffects: {
      common: ['Application site reactions', 'Skin irritation', 'Erythema'],
      serious: ['Systemic toxicity if overused or applied to damaged skin', 'Methemoglobinemia (rare)'],
    },
    drugInteractions: ['Class I antiarrhythmics (additive cardiac effects if systemic absorption)'],
    specialPopulations: [
      { population: 'Hepatic impairment', consideration: 'Minimal systemic absorption, but caution with extensive use' },
    ],
    monitoringRequired: ['Skin condition', 'Signs of systemic toxicity'],
    deaSchedule: 'unscheduled',
    costCategory: 'moderate',
  },
];

export const neuropathicPain: EducationalContent = {
  id: 'pain-neuropathic',
  type: 'condition',
  name: 'Neuropathic Pain',
  alternateNames: ['Nerve Pain', 'Neurogenic Pain', 'Neuropathy Pain'],

  levels: {
    1: {
      level: 1,
      summary: 'Neuropathic pain is pain caused by damage to your nerves. It often feels like burning, tingling, or electric shocks and needs different medicines than regular pain.',
      explanation: `Normally, nerves carry messages from your body to your brain. When nerves get damaged or don't work right, they can send pain signals even when nothing is hurting you.

**What Causes Nerve Damage:**
- Diabetes (very common)
- Shingles (virus that damages nerves)
- Injuries or surgery
- Chemotherapy
- Pinched nerves
- Some diseases

**What Neuropathic Pain Feels Like:**

Many people describe it as:
- Burning or fire-like
- Electric shocks or shooting pain
- Tingling or "pins and needles"
- Numbness with pain
- Pain from light touch (like clothing hurts)

**Why Regular Pain Medicine Often Doesn't Work:**

Regular pain pills like ibuprofen or even strong painkillers often don't help much because:
- The problem is in the nerve itself
- Different chemicals in the brain are involved
- We need medicines that calm overactive nerves

**Medicines That Help:**
- Some medicines used for seizures (they calm nerves)
- Some antidepressants (they block pain signals)
- Numbing patches or creams
- Sometimes pain medicines are added

**Living with Neuropathic Pain:**
- It often takes time to find the right treatment
- Several medicines together may work best
- Physical therapy can help
- The pain can improve with proper treatment`,
      keyTerms: [
        { term: 'neuropathic', definition: 'Related to problems with nerves', pronunciation: 'noor-oh-PATH-ik' },
        { term: 'tingling', definition: 'A prickling feeling, like "pins and needles"' },
        { term: 'numbness', definition: 'Loss of feeling in part of your body' },
      ],
      analogies: [
        'Damaged nerves are like frayed electrical wires that send wrong signals or sparks when they shouldn\'t.',
        'Neuropathic pain is like a fire alarm that keeps going off even when there\'s no fire - the system itself is broken.',
      ],
      examples: [
        'A person with diabetes might feel burning pain in their feet, especially at night.',
        'Someone who had shingles might have pain in the area of the rash long after it heals.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neuropathic pain results from nerve damage affecting the somatosensory system, characterized by positive symptoms (burning, shooting pain) and negative symptoms (numbness), requiring specific pharmacotherapy targeting nerve excitability.',
      explanation: `**Definition:**
Pain caused by a lesion or disease of the somatosensory nervous system (IASP definition). Can be peripheral or central in origin.

**Common Causes:**

*Peripheral:*
| Cause | Examples |
|-------|----------|
| Metabolic | Diabetic neuropathy |
| Infectious | Postherpetic neuralgia, HIV |
| Toxic | Chemotherapy, alcohol |
| Traumatic | Nerve injury, surgery |
| Compressive | Carpal tunnel, radiculopathy |

*Central:*
- Stroke (thalamic pain syndrome)
- Multiple sclerosis
- Spinal cord injury

**Characteristic Symptoms:**

*Positive Symptoms (nerve overactivity):*
- Burning pain
- Electric shock-like pain
- Shooting/lancinating pain
- Allodynia (pain from non-painful stimuli)
- Hyperalgesia (increased pain to painful stimuli)

*Negative Symptoms (nerve damage):*
- Numbness
- Decreased sensation
- Weakness

**Screening Tools:**
- DN4 (Douleur Neuropathique 4): >4 points suggests neuropathic
- painDETECT: Self-administered questionnaire
- LANSS: Leeds Assessment of Neuropathic Symptoms

**First-Line Treatments:**

| Drug Class | Examples | Starting Dose |
|------------|----------|---------------|
| Gabapentinoids | Gabapentin, Pregabalin | 100-300mg, 75mg |
| SNRIs | Duloxetine | 30mg |
| TCAs | Amitriptyline | 10-25mg |
| Topicals | Lidocaine patch, Capsaicin | Apply to area |

**Treatment Principles:**
1. Start one medication, low dose
2. Titrate slowly to effect/tolerance
3. Allow 2-4 weeks at therapeutic dose before judging
4. Consider combinations if single agent inadequate
5. Set realistic expectations (30-50% reduction is success)
6. Treat comorbid anxiety, depression, sleep disorders

**Why Standard Analgesics Are Less Effective:**
- NSAIDs: No effect on nerve-generated pain
- Acetaminophen: Minimal benefit
- Opioids: Modest effect, not first-line due to risks`,
      keyTerms: [
        { term: 'allodynia', definition: 'Pain caused by a stimulus that normally doesn\'t cause pain (e.g., light touch)', pronunciation: 'al-oh-DIN-ee-uh' },
        { term: 'hyperalgesia', definition: 'Increased pain response to a normally painful stimulus', pronunciation: 'hy-per-al-JEE-zee-uh' },
        { term: 'lancinating', definition: 'Sharp, cutting, or stabbing pain, like a knife', pronunciation: 'LAN-sin-ay-ting' },
        { term: 'postherpetic neuralgia', definition: 'Nerve pain persisting after shingles rash heals' },
      ],
      analogies: [
        'The alpha-2-delta calcium channel that gabapentinoids target is like a volume control - blocking it turns down the nerve\'s pain signal volume.',
      ],
    },
    3: {
      level: 3,
      summary: 'Neuropathic pain pathophysiology involves peripheral sensitization, ectopic discharge, central sensitization, and loss of inhibition, requiring mechanism-targeted pharmacotherapy with gabapentinoids, SNRIs, or TCAs as first-line agents.',
      explanation: `**Pathophysiological Mechanisms:**

*Peripheral Mechanisms:*
1. **Ectopic Discharge**: Damaged neurons fire spontaneously
   - Upregulation of sodium channels (Nav1.3, Nav1.7, Nav1.8)
   - Decreased potassium channel expression
   - Results in spontaneous pain, paresthesias

2. **Peripheral Sensitization**:
   - Lowered activation threshold
   - Increased response to stimuli
   - Inflammatory mediator release (NGF, TNF-alpha)

*Central Mechanisms:*
1. **Central Sensitization**:
   - Wind-up phenomenon (temporal summation)
   - Long-term potentiation at spinal synapses
   - NMDA receptor activation
   - Expansion of receptive fields

2. **Disinhibition**:
   - Loss of GABAergic interneurons
   - Reduced descending inhibition
   - Microglial activation

*Structural Changes:*
- A-beta fiber sprouting into lamina II
- Dorsal horn reorganization
- Thalamic and cortical plasticity

**Pharmacotherapy - Mechanism-Based Approach:**

*Calcium Channel Ligands (Gabapentinoids):*
- Target: Alpha-2-delta subunit of VGCC
- Reduce calcium influx → decreased neurotransmitter release
- NNT: 6-8 for 50% pain reduction
- Dose-dependent effect, linear PK (pregabalin)

*SNRIs:*
- Enhance descending noradrenergic/serotonergic inhibition
- Duloxetine NNT: ~6 for DPN
- Also treats common comorbidities (depression, anxiety)

*TCAs:*
- Multiple mechanisms: SNRI + sodium channel block + NMDA antagonism
- More side effects limit use
- Nortriptyline, desipramine: Less anticholinergic than amitriptyline
- NNT: 3-4 (most effective, but tolerability issues)

*Topical Agents:*
- Lidocaine 5% patch: Sodium channel blockade locally
- Capsaicin 8% patch: TRPV1 desensitization, defunctionalization
- Limited systemic effects - good for localized pain

*Second-Line Options:*
- Tramadol: SNRI + weak mu-agonist
- Strong opioids: Modest efficacy, reserve for refractory
- Carbamazepine/Oxcarbazepine: First-line for trigeminal neuralgia only

**Treatment Algorithm:**

Step 1: First-line monotherapy (gabapentinoid, SNRI, or TCA)
Step 2: If partial response, add second first-line agent
Step 3: Consider tramadol or topicals as adjunct
Step 4: Referral to pain specialist; consider strong opioid, interventions

**Special Syndromes:**

*Trigeminal Neuralgia:*
- Carbamazepine first-line (NNT ~2)
- Oxcarbazepine alternative
- Microvascular decompression for refractory

*Complex Regional Pain Syndrome:*
- Physical/occupational therapy essential
- Gabapentinoids, bisphosphonates, ketamine
- Sympathetic blocks
- Spinal cord stimulation

*Postherpetic Neuralgia:*
- Prevention: Shingrix vaccine
- Treatment: Gabapentinoids, lidocaine patch, capsaicin patch`,
      keyTerms: [
        { term: 'ectopic discharge', definition: 'Abnormal nerve firing from sites other than normal nerve endings' },
        { term: 'VGCC', definition: 'Voltage-Gated Calcium Channels - target of gabapentinoids' },
        { term: 'wind-up', definition: 'Progressive increase in spinal neuron firing with repetitive C-fiber input' },
        { term: 'NNT', definition: 'Number Needed to Treat - patients needed to treat for one to achieve outcome' },
      ],
      clinicalNotes: 'Combination therapy with medications from different classes is often more effective than monotherapy. Common effective combinations: gabapentinoid + SNRI, gabapentinoid + TCA, or first-line agent + topical. Always titrate slowly and set realistic expectations (30-50% reduction is meaningful).',
    },
    4: {
      level: 4,
      summary: 'Neuropathic pain involves complex neuroplastic changes including ion channel remodeling, glial activation, epigenetic modifications, and altered descending modulation, informing phenotype-based treatment strategies and emerging targeted therapeutics.',
      explanation: `**Molecular Mechanisms:**

*Ion Channel Remodeling:*

Sodium Channels:
| Channel | Change | Consequence |
|---------|--------|-------------|
| Nav1.3 | Upregulated | Ectopic firing, hyperexcitability |
| Nav1.7 | Gain-of-function polymorphisms | Inherited pain syndromes |
| Nav1.8 | Redistribution | Altered threshold |

- Nav1.7: Validated target (congenital insensitivity to pain = LOF mutations)
- Selective Nav1.7 inhibitors in development

Calcium Channels:
- Alpha-2-delta-1 subunit overexpression in DRG and spinal cord
- Drives gabapentinoid efficacy
- Also involved in synaptogenesis (Thrombospondin binding)

Potassium Channels:
- Downregulation increases excitability
- KCNQ (Kv7) channels: Retigabine mechanism (withdrawn due to side effects)

*Glial Activation:*

Microglia:
- P2X4/P2X7 receptor activation by ATP from damaged neurons
- Release TNF-alpha, IL-1beta, IL-6, BDNF
- BDNF causes disinhibition via KCC2 downregulation
- Shift of GABA from inhibitory to excitatory

Astrocytes:
- Glutamate transporter dysfunction
- CCL2 (MCP-1) release
- Gap junction-mediated spread

Satellite Glial Cells (DRG):
- Coupling to sensory neurons
- Paracrine sensitization

*Epigenetic Changes:*
- Histone acetylation/deacetylation
- DNA methylation at pain gene promoters
- MicroRNA dysregulation (miR-21, miR-183)
- Long-lasting changes maintaining chronic pain

**Phenotypic Characterization (QST-Based):**

| Phenotype | Features | Suggested Mechanism | Treatment Implication |
|-----------|----------|---------------------|----------------------|
| Sensory loss | Reduced detection thresholds | Deafferentation | TCAs, SCS |
| Thermal hyperalgesia | Increased heat pain | Sensitized C-fibers | Capsaicin |
| Mechanical hyperalgesia | Allodynia, dynamic allodynia | Central sensitization | Gabapentinoids |
| Mixed | Multiple abnormalities | Combined mechanisms | Combination therapy |

**Advanced Pharmacology:**

*Gabapentinoid Binding Site:*
- Alpha-2-delta-1 >>> alpha-2-delta-2 selectivity
- Trafficking to membrane required for effect
- Explains delayed onset of action
- TSP (thrombospondin) interaction relevant

*SNRI Dose-Response:*
- Duloxetine 60mg = 120mg for most pain conditions
- Noradrenergic effect more important than serotonergic for pain
- Milnacipran: 1:3 NE:5-HT ratio (vs. duloxetine 10:1)

*TCA Comparative Pharmacology:*
| TCA | NE Reuptake | 5-HT Reuptake | Anticholinergic |
|-----|-------------|---------------|-----------------|
| Amitriptyline | ++ | +++ | ++++ |
| Nortriptyline | +++ | + | ++ |
| Desipramine | +++ | + | + |

**Emerging Therapies:**

*Approved:*
- Capsaicin 8% patch (Qutenza): Single application, 3-month effect
- High-frequency (10 kHz) SCS: Paresthesia-free, opioid-sparing

*In Development:*
- Nav1.7 inhibitors (genetic validation from SCN9A channelopathies)
- TRPV1 antagonists (thermal dysregulation challenges)
- NGF antibodies (tanezumab - safety signals)
- Glial modulators

*Interventional:*
- Spinal cord stimulation (dorsal column, DRG)
- Peripheral nerve stimulation
- Intrathecal drug delivery
- Nerve blocks (diagnostic and therapeutic)

**Complex Regional Pain Syndrome (CRPS):**

Diagnostic Criteria (Budapest):
- Continuing pain disproportionate to event
- 3 of 4 symptom categories (sensory, vasomotor, sudomotor, motor)
- 2 of 4 sign categories at examination
- No other diagnosis explains findings

Treatment:
- Aggressive physical/occupational therapy
- Gabapentinoids, bisphosphonates (early)
- Sympathetic blocks, ketamine infusions
- Spinal cord stimulation (best evidence in interventional)`,
      keyTerms: [
        { term: 'KCC2', definition: 'Potassium-chloride cotransporter 2 - maintains chloride gradient for GABA inhibition; downregulated in neuropathic pain' },
        { term: 'SCN9A', definition: 'Gene encoding Nav1.7 sodium channel; mutations cause pain syndromes or insensitivity' },
        { term: 'Budapest criteria', definition: 'Diagnostic criteria for Complex Regional Pain Syndrome' },
        { term: 'DRG stimulation', definition: 'Neuromodulation targeting dorsal root ganglion for focal neuropathic pain' },
      ],
      clinicalNotes: 'Phenotype-based treatment selection is an emerging paradigm. Patients with predominant sensory loss may respond better to TCAs and SCS, while those with prominent allodynia may respond better to gabapentinoids. QST profiling is increasingly available at specialized pain centers.',
    },
    5: {
      level: 5,
      summary: 'Contemporary neuropathic pain management integrates precision phenotyping, pharmacogenomics, mechanism-based drug selection, neuromodulation advances, and novel therapeutic targets addressing specific pathophysiological pathways.',
      explanation: `**Precision Medicine in Neuropathic Pain:**

*Phenotype-Treatment Matching:*

German Research Network (DFNS) Findings:
- 6 QST phenotypes identified
- Cluster analysis of neuropathic pain patients
- Phenotype predicts treatment response

| Phenotype | Predominant Feature | Suggested First-Line |
|-----------|---------------------|---------------------|
| L1 - Sensory loss | Thermal hypoesthesia | TCA, oxycodone |
| L2 - Thermal hyperalgesia | Heat pain sensitivity | Capsaicin 8%, lidocaine |
| L3 - Mechanical hyperalgesia | Dynamic allodynia | Gabapentinoids |
| G1 - Sensory gain | Enhanced all modalities | Combination therapy |

*Pharmacogenomic Considerations:*
- CYP2D6: Affects TCA metabolism (amitriptyline, nortriptyline)
- CYP2D6: Tramadol prodrug activation
- SCN9A variants: May predict response to sodium channel blockers

**Ion Channel-Targeted Therapeutics:**

*Nav1.7 (SCN9A) - Validated Target:*
- LOF mutations: Congenital insensitivity to pain
- GOF mutations: Erythromelalgia, paroxysmal extreme pain disorder
- Multiple programs: Selective inhibitors in Phase II/III
- Challenge: Achieving selectivity over other Nav isoforms

*Nav1.8 (SCN10A):*
- Expressed primarily in peripheral sensory neurons
- VX-150 (Vertex): Phase II for small fiber neuropathy
- Potentially better safety than Nav1.7 (less cardiac/CNS)

*TRPV1 Modulators:*
- Capsaicin 8% (Qutenza): Approved, defunctionalizes nociceptors
- TRPV1 antagonists: Hyperthermia limited development
- TRPV1 PAMs (positive allosteric modulators): Emerging approach

**Glial-Targeted Therapies:**

*Current:*
- Propentofylline: Glial inhibitor, positive Phase II data, not developed
- Ibudilast: PDE inhibitor, trials in various pain conditions
- Minocycline: Microglial inhibitor, mixed results

*Emerging:*
- P2X7 receptor antagonists
- Toll-like receptor (TLR4) modulators
- CSF1R inhibitors

**Neuromodulation Advances:**

*Spinal Cord Stimulation:*
- Conventional (tonic): 40-80 Hz, paresthesia-based
- High-frequency (HF10): 10 kHz, paresthesia-free, FDA approved
- Burst: 500 Hz bursts, paresthesia-free
- Closed-loop: ECAP-controlled (Saluda, Abbott)
- DRG stimulation: Focal neuropathies (Abbot Proclaim)

*Evidence Hierarchy:*
| Condition | Evidence Level | NNT |
|-----------|---------------|-----|
| CRPS | High | ~3 |
| Failed back surgery | Moderate-High | ~2.5-3 |
| Painful DPN | Emerging | Under study |
| PHN | Limited | Case series |

*Peripheral Nerve Stimulation:*
- Non-surgical options (StimRouter, SPRINT)
- Occipital neuralgia, mononeuropathies

**Novel Drug Targets:**

*Approved/Late Stage:*
- NGF antibodies (tanezumab): Effective, safety signals (RPOA)
- CGRP antibodies/gepants: Migraine paradigm

*Investigational:*
- NMDA antagonists (intrathecal, topical)
- Nicotinic agonists (ABT-894)
- Neurotrophin modulators
- Gene therapy (HSV-mediated enkephalin delivery)
- ASO (antisense oligonucleotide) against Nav1.7

**Combination Strategies:**

*Evidence-Based Combinations:*
| Combination | Evidence | Comment |
|-------------|----------|---------|
| Gabapentinoid + SNRI | Good | Synergistic, different mechanisms |
| Gabapentinoid + TCA | Moderate | Watch sedation |
| Oral + Topical | Moderate | Adds local effect |
| Gabapentinoid + Opioid | Moderate | Opioid-sparing, but risk |

*Emerging:*
- Multimodal combinations with neuromodulation
- Ketamine infusion + maintenance therapy
- Intensive interdisciplinary programs

**Diagnostic and Monitoring Advances:**

*Biomarkers:*
- Skin biopsy: Intraepidermal nerve fiber density (IENFD)
- Corneal confocal microscopy: Small fiber assessment
- Evoked potentials: LEP, CHEP
- MR neurography: Structural nerve imaging

*Response Prediction:*
- QST phenotypes
- Conditioned pain modulation (CPM)
- Psychological profiles (catastrophizing)
- Machine learning algorithms in development

**Guidelines Synthesis (NeuPSIG 2015, Updated):**

*First-Line:*
- Gabapentinoids (pregabalin, gabapentin)
- SNRIs (duloxetine, venlafaxine)
- TCAs (amitriptyline, nortriptyline)

*Second-Line:*
- Tramadol
- Capsaicin 8% patch
- Lidocaine patch (PHN)

*Third-Line:*
- Strong opioids
- Botulinum toxin A (focal neuropathic)
- Combination therapy

*Exceptions:*
- Trigeminal neuralgia: Carbamazepine/oxcarbazepine first
- CRPS: Physical therapy paramount; bisphosphonates early
- HIV neuropathy: Capsaicin 8%, limited TCA/gabapentinoid evidence`,
      keyTerms: [
        { term: 'DFNS', definition: 'German Research Network on Neuropathic Pain - developed standardized QST protocols' },
        { term: 'ECAP', definition: 'Evoked Compound Action Potential - used in closed-loop SCS systems' },
        { term: 'IENFD', definition: 'Intraepidermal Nerve Fiber Density - gold standard for small fiber neuropathy diagnosis' },
        { term: 'NeuPSIG', definition: 'Neuropathic Pain Special Interest Group of IASP - publishes treatment guidelines' },
        { term: 'RPOA', definition: 'Rapidly Progressing Osteoarthritis - adverse effect seen with NGF antibodies' },
      ],
      clinicalNotes: 'The future of neuropathic pain treatment lies in phenotype-based therapy selection, validated biomarkers, and novel mechanism-based therapeutics. Current best practice involves early aggressive treatment, multimodal approaches, and referral to specialized pain centers for refractory cases. Neuromodulation, particularly SCS for CRPS and failed back surgery syndrome, has strong evidence and should be considered before chronic opioid therapy.',
    },
  },

  media: [
    {
      id: 'neuropathic-pain-mechanisms',
      type: 'diagram',
      filename: 'neuropathic-mechanisms.svg',
      title: 'Neuropathic Pain Mechanisms',
      description: 'Peripheral and central sensitization pathways',
    },
    {
      id: 'neuropathic-treatment-algorithm',
      type: 'diagram',
      filename: 'neuropathic-treatment-algorithm.svg',
      title: 'Neuropathic Pain Treatment Algorithm',
      description: 'Stepwise approach to pharmacotherapy',
    },
  ],

  citations: [
    {
      id: 'neupig-2015',
      type: 'article',
      title: 'Pharmacotherapy for neuropathic pain in adults: a systematic review and meta-analysis',
      authors: ['Finnerup NB', 'Attal N', 'Haroutounian S', 'et al.'],
      source: 'Lancet Neurology',
      chapter: '14(2):162-173',
      accessedDate: '2025-01-24',
    },
    {
      id: 'iasp-neuropathic-def',
      type: 'website',
      title: 'Neuropathic Pain',
      source: 'IASP',
      url: 'https://www.iasp-pain.org/resources/topics/neuropathic-pain/',
      accessedDate: '2025-01-24',
    },
    {
      id: 'uptodate-neuropathic',
      type: 'website',
      title: 'Overview of the treatment of chronic non-cancer pain',
      source: 'UpToDate',
      url: 'https://www.uptodate.com',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'pain-acute-vs-chronic', targetType: 'topic', relationship: 'related', label: 'Acute vs Chronic Pain' },
    { targetId: 'pain-interventional-procedures', targetType: 'topic', relationship: 'see-also', label: 'Interventional Procedures' },
    { targetId: 'pain-chronic-syndrome', targetType: 'condition', relationship: 'related', label: 'Chronic Pain Syndrome' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pain management', 'neurology', 'pharmacology'],
    keywords: ['neuropathic pain', 'nerve pain', 'gabapentin', 'pregabalin', 'duloxetine', 'allodynia', 'central sensitization'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
