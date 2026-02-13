/**
 * Acute vs Chronic Pain - Fundamentals
 *
 * Understanding the fundamental differences between acute and chronic pain,
 * their mechanisms, clinical implications, and treatment approaches.
 */

import { EducationalContent } from '../types';

export const acuteVsChronicPain: EducationalContent = {
  id: 'pain-acute-vs-chronic',
  type: 'concept',
  name: 'Acute vs Chronic Pain',
  alternateNames: ['Pain Duration Classification', 'Temporal Pain Classification'],

  levels: {
    1: {
      level: 1,
      summary: 'Acute pain is short-term pain that warns you of injury, while chronic pain lasts a long time and may not have an obvious cause.',
      explanation: `Pain is your body's way of telling you something is wrong. There are two main types based on how long they last:

**Acute Pain** is like an alarm bell:
- Starts suddenly when you get hurt
- Goes away as you heal
- Examples: stubbed toe, paper cut, dental work
- Usually lasts days to weeks

**Chronic Pain** is different:
- Lasts for months or even years
- May continue even after an injury heals
- Sometimes there's no clear reason for it
- Examples: ongoing back pain, arthritis pain

The good news is that both types of pain can be treated, but they often need different approaches.`,
      keyTerms: [
        { term: 'acute', definition: 'Something that starts suddenly and lasts a short time' },
        { term: 'chronic', definition: 'Something that lasts for a long time, usually more than 3 months' },
        { term: 'healing', definition: 'The process of your body fixing damage and getting better' },
      ],
      analogies: [
        'Acute pain is like a fire alarm that goes off when there\'s a fire and stops when the fire is out. Chronic pain is like a broken alarm that keeps ringing even when there\'s no fire.',
        'Think of acute pain as a text message alert - it comes, tells you something, then goes away. Chronic pain is like a phone notification that keeps popping up over and over.',
      ],
      examples: [
        'Breaking your arm causes acute pain that gets better as the bone heals.',
        'Someone with chronic back pain might hurt every day for years, even without a new injury.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acute pain serves a protective function with clear onset and resolution, while chronic pain persists beyond normal healing time and involves complex changes in the nervous system.',
      explanation: `**Acute Pain:**
- Duration: Usually less than 3-6 months
- Purpose: Protective warning signal
- Cause: Usually clear (injury, surgery, infection)
- Response: Normal nervous system response
- Treatment: Address the cause, use pain medicine temporarily
- Outcome: Resolves as healing occurs

**Chronic Pain:**
- Duration: More than 3-6 months
- Purpose: No longer protective; becomes the problem itself
- Cause: May or may not have an ongoing cause
- Response: Changes in how nerves process pain signals
- Treatment: Multiple approaches often needed
- Outcome: May require long-term management

**Key Differences in the Body:**
1. Acute pain uses normal pain pathways
2. Chronic pain involves "sensitization" - the nervous system becomes more sensitive
3. Chronic pain often affects sleep, mood, and daily activities
4. Psychological factors play a bigger role in chronic pain

**Why This Matters:**
- Treating chronic pain like acute pain often doesn't work
- Early treatment of acute pain may help prevent it from becoming chronic
- Chronic pain treatment focuses on function and quality of life, not just pain relief`,
      keyTerms: [
        { term: 'sensitization', definition: 'When nerves become more sensitive to pain signals over time', pronunciation: 'sen-si-ti-ZAY-shun' },
        { term: 'protective', definition: 'Serving to protect the body from further harm' },
        { term: 'multimodal treatment', definition: 'Using different types of treatments together for better results' },
      ],
      analogies: [
        'Acute pain is like a security guard alerting you to an intruder. Chronic pain is like a security system that\'s been triggered so many times it now goes off at the slightest movement.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acute pain involves nociceptive transmission serving a physiological warning function, while chronic pain represents pathological neural plasticity with peripheral and central sensitization mechanisms.',
      explanation: `**Pathophysiology of Acute Pain:**

Acute pain follows a predictable pathway:
1. **Transduction**: Tissue damage activates nociceptors (pain receptors)
2. **Transmission**: Action potentials travel via A-delta and C fibers
3. **Modulation**: Descending pathways can enhance or inhibit signals
4. **Perception**: Cortical processing creates conscious pain experience

Inflammatory mediators (prostaglandins, bradykinin, substance P) sensitize nociceptors, causing increased pain sensitivity at the injury site (primary hyperalgesia).

**Pathophysiology of Chronic Pain:**

Chronic pain involves maladaptive neuroplasticity:

*Peripheral Sensitization:*
- Decreased threshold of nociceptors
- Increased response to stimuli
- Spontaneous firing of nerve fibers

*Central Sensitization:*
- Enhanced synaptic transmission in spinal cord
- Reduced descending inhibition
- Expansion of receptive fields
- Wind-up phenomenon (temporal summation)

*Structural Changes:*
- Dorsal horn neuron reorganization
- Glial cell activation
- Changes in brain gray matter
- Altered cortical processing

**Clinical Manifestations:**

| Feature | Acute Pain | Chronic Pain |
|---------|------------|--------------|
| Allodynia | Rare | Common |
| Hyperalgesia | Localized | Widespread possible |
| Autonomic signs | Present | Often absent |
| Anxiety | Common | Depression more common |
| Disability | Temporary | May be permanent |

**Transition from Acute to Chronic:**
- Occurs in 10-20% of surgical patients
- Risk factors: Severe acute pain, psychological factors, genetic predisposition
- Critical period for prevention: First 3 months`,
      keyTerms: [
        { term: 'nociceptor', definition: 'Sensory nerve ending that detects potentially harmful stimuli', pronunciation: 'NOH-si-sep-tor' },
        { term: 'central sensitization', definition: 'Enhanced responsiveness of central nervous system neurons to normal or subthreshold stimuli' },
        { term: 'allodynia', definition: 'Pain from a stimulus that doesn\'t normally cause pain (like light touch)', pronunciation: 'al-oh-DIN-ee-uh' },
        { term: 'hyperalgesia', definition: 'Increased pain response to a normally painful stimulus', pronunciation: 'hy-per-al-JEE-zee-uh' },
        { term: 'neuroplasticity', definition: 'The ability of the nervous system to change its structure and function' },
      ],
      clinicalNotes: 'Aggressive treatment of acute pain, especially post-surgical, may reduce chronic pain development. Consider multimodal analgesia and regional anesthesia techniques.',
    },
    4: {
      level: 4,
      summary: 'Chronic pain represents a disease state with distinct neurobiological mechanisms including altered gene expression, epigenetic modifications, neuroimmune interactions, and reorganization of pain processing networks at spinal and supraspinal levels.',
      explanation: `**Molecular Mechanisms of Pain Chronification:**

*Ion Channel Alterations:*
- Upregulation of Nav1.7, Nav1.8 sodium channels in DRG neurons
- Increased TRPV1 expression (heat/capsaicin receptor)
- Downregulation of potassium channels (decreased inhibition)
- NMDA receptor phosphorylation enhancing excitability

*Synaptic Plasticity:*
- Long-term potentiation (LTP) at C-fiber synapses
- Increased AMPA receptor insertion (similar to learning/memory)
- Loss of GABAergic/glycinergic inhibition
- Sprouting of A-beta fibers into lamina II (normally C-fiber territory)

*Glial Activation:*
- Microglia release TNF-alpha, IL-1beta, IL-6
- Astrocyte proliferation and CCL2 release
- ATP-P2X4/P2X7 signaling cascade
- Disrupted glutamate homeostasis

**Supraspinal Changes:**

*Cortical Reorganization:*
- Somatosensory cortex remapping
- Decreased gray matter in prefrontal cortex, thalamus, ACC
- Enhanced connectivity in pain matrix
- Altered default mode network activity

*Descending Modulation Failure:*
- Decreased serotonergic inhibition from RVM
- Reduced noradrenergic input from locus coeruleus
- Shift from "off-cells" to "on-cells" in RVM
- Impaired conditioned pain modulation

**Neuroendocrine-Immune Interactions:**
- HPA axis dysregulation
- Elevated cortisol initially, then blunted response
- Pro-inflammatory cytokine elevation
- Immune cell infiltration to DRG

**Genetic and Epigenetic Factors:**

*Identified Polymorphisms:*
- COMT Val158Met (catecholamine metabolism)
- SCN9A (Nav1.7) - gain/loss of function variants
- GCH1 (tetrahydrobiopterin synthesis)
- OPRM1 (mu-opioid receptor)

*Epigenetic Modifications:*
- DNA methylation at promoter regions
- Histone acetylation changes
- MicroRNA dysregulation (miR-21, miR-146a)

**Clinical Phenotyping:**

Quantitative Sensory Testing (QST) can identify sensory profiles:
1. Sensory loss phenotype (deafferentation)
2. Thermal hyperalgesia phenotype
3. Mechanical hyperalgesia phenotype
4. Sensory gain without loss phenotype

These phenotypes may predict treatment response and guide mechanism-based therapy.`,
      keyTerms: [
        { term: 'wind-up', definition: 'Progressive increase in dorsal horn neuron firing with repeated C-fiber stimulation; NMDA-mediated' },
        { term: 'conditioned pain modulation', definition: 'Endogenous pain inhibition measured by "pain inhibits pain" paradigm; reduced in chronic pain' },
        { term: 'COMT', definition: 'Catechol-O-methyltransferase; enzyme affecting catecholamine levels; polymorphisms affect pain sensitivity' },
        { term: 'RVM', definition: 'Rostral ventromedial medulla; key structure in descending pain modulation with on, off, and neutral cells' },
      ],
      clinicalNotes: 'QST phenotyping is increasingly used in research and specialized centers to guide treatment. Loss of conditioned pain modulation predicts poor response to opioids and suggests need for agents targeting descending inhibition (SNRIs, tramadol).',
    },
    5: {
      level: 5,
      summary: 'Contemporary pain neuroscience integrates precision medicine approaches with mechanistic phenotyping, biomarker development, and targeted interventions addressing specific pathophysiological processes in the transition from acute to chronic pain.',
      explanation: `**Precision Pain Medicine Paradigm:**

The field is shifting from symptom-based to mechanism-based treatment:

*Stratified Treatment Approaches:*
1. **Nociceptive-predominant**: NSAIDs, acetaminophen, physical therapy
2. **Inflammatory-predominant**: Targeted anti-cytokine therapy, disease-modifying agents
3. **Neuropathic-predominant**: Calcium channel ligands, sodium channel blockers, SNRIs
4. **Nociplastic-predominant**: Central acting agents, neuromodulation, multimodal rehabilitation

**Emerging Biomarkers:**

*Imaging Biomarkers:*
- fMRI brain signatures (Neurologic Pain Signature, NPS)
- PET imaging of glial activation (TSPO ligands)
- Spinal cord fMRI
- DTI changes in white matter tracts

*Blood-Based Biomarkers:*
- Pro-inflammatory cytokine panels
- MicroRNA profiles
- Metabolomics signatures
- BDNF levels

*Electrophysiological:*
- Contact heat evoked potentials (CHEPs)
- Laser evoked potentials (LEPs)
- EEG-based pain prediction algorithms

**Transition Prevention Strategies:**

*Perioperative Optimization:*
- ERAS protocols with multimodal analgesia
- Transitional pain services (TPS)
- Preoperative psychological screening
- Ketamine infusions (NMDA antagonism)
- Regional anesthesia techniques

*High-Risk Patient Identification:*
- Opioid Risk Tool, SOAPP-R
- Pain Catastrophizing Scale
- Anxiety/depression screening
- Prior chronic pain conditions
- Preoperative opioid use

**Novel Therapeutic Targets:**

*Approved/Late-Stage Development:*
- CGRP antagonists (migraine paradigm)
- Nav1.7 inhibitors (genetic validation)
- NGF antibodies (tanezumab - regulatory issues)
- TRPV1 antagonists (thermoregulation challenges)

*Emerging Approaches:*
- Gene therapy (HSV-mediated delivery)
- Optogenetic modulation (preclinical)
- CAR-T cells targeting pain
- Stem cell-derived analgesics
- Glial-targeted therapies

**Implementation Science Considerations:**

*Guidelines Integration:*
- CDC opioid prescribing guidelines
- State prescription monitoring programs
- Insurance prior authorization barriers
- Access to multimodal care

*Value-Based Pain Care:*
- PROMIS measures for outcomes tracking
- Patient-reported outcomes integration
- Functional restoration focus
- Opioid reduction as quality metric

**Current Research Priorities (NIH HEAL Initiative):**
1. Development of non-addictive pain treatments
2. Biomarker validation for chronic pain prediction
3. Implementation of evidence-based multimodal care
4. Health disparities in pain management
5. Pediatric to adult pain transition

**Clinical Pearls:**
- 5-15% of surgical patients develop chronic post-surgical pain
- Strongest predictors: Preoperative pain, psychological distress, severe acute postoperative pain
- TPS programs reduce opioid consumption and chronic pain development
- Mechanism-based phenotyping improves NNT for treatments from ~7 to ~3`,
      keyTerms: [
        { term: 'nociplastic pain', definition: 'IASP term for pain arising from altered nociception despite no clear tissue or nerve damage; includes fibromyalgia, IBS' },
        { term: 'TSPO', definition: 'Translocator protein; microglial marker used in PET imaging to visualize neuroinflammation' },
        { term: 'Transitional Pain Service', definition: 'Specialized perioperative service targeting high-risk patients to prevent chronic postsurgical pain' },
        { term: 'HEAL Initiative', definition: 'NIH Helping to End Addiction Long-term; major federal initiative addressing opioid crisis and pain' },
      ],
      clinicalNotes: 'Current best practice involves multimodal analgesia, early identification of high-risk patients, and transitional pain services for complex cases. The opioid crisis has accelerated development of non-opioid alternatives, but access remains uneven. Telemedicine pain management expanded during COVID-19 and may improve access to specialized care.',
    },
  },

  media: [
    {
      id: 'acute-chronic-comparison-diagram',
      type: 'diagram',
      filename: 'acute-vs-chronic-pain.svg',
      title: 'Acute vs Chronic Pain Comparison',
      description: 'Visual comparison of acute and chronic pain pathways and characteristics',
    },
    {
      id: 'central-sensitization-diagram',
      type: 'diagram',
      filename: 'central-sensitization.svg',
      title: 'Central Sensitization Mechanisms',
      description: 'Illustration of peripheral and central sensitization processes',
    },
  ],

  citations: [
    {
      id: 'iasp-taxonomy-2020',
      type: 'article',
      title: 'The revised International Association for the Study of Pain definition of pain',
      authors: ['Raja SN', 'Carr DB', 'Cohen M', 'et al.'],
      source: 'Pain',
      chapter: '161(9):1976-1982',
      url: 'https://doi.org/10.1097/j.pain.0000000000001939',
      accessedDate: '2025-01-24',
    },
    {
      id: 'woolf-2011',
      type: 'article',
      title: 'Central sensitization: Implications for the diagnosis and treatment of pain',
      authors: ['Woolf CJ'],
      source: 'Pain',
      chapter: '152(3 Suppl):S2-15',
      accessedDate: '2025-01-24',
    },
    {
      id: 'uptodate-chronic-pain',
      type: 'website',
      title: 'Evaluation of chronic non-cancer pain in adults',
      source: 'UpToDate',
      url: 'https://www.uptodate.com',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'pain-assessment-scales', targetType: 'topic', relationship: 'related', label: 'Pain Assessment Scales' },
    { targetId: 'pain-who-ladder', targetType: 'topic', relationship: 'related', label: 'WHO Pain Ladder' },
    { targetId: 'pain-neuropathic', targetType: 'condition', relationship: 'see-also', label: 'Neuropathic Pain' },
    { targetId: 'pain-chronic-syndrome', targetType: 'condition', relationship: 'see-also', label: 'Chronic Pain Syndrome' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pain management', 'neurology', 'pathophysiology'],
    keywords: ['acute pain', 'chronic pain', 'central sensitization', 'nociception', 'pain chronification'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology', 'anesthesiology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
