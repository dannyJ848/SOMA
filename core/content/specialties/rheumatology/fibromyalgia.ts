import { EducationalContent } from '../../types';

export const fibromyalgiaContent: EducationalContent = {
  id: 'condition-fibromyalgia',
  type: 'condition',
  name: 'Fibromyalgia',
  alternateNames: ['Fibromyalgia syndrome', 'FMS', 'Fibrositis'],
  hpoId: 'HP:0033041',

  levels: {
    1: {
      level: 1,
      summary: 'Fibromyalgia is a condition that causes widespread pain throughout your body, along with fatigue, sleep problems, and other symptoms, without any visible damage to your muscles or joints.',
      explanation: `Fibromyalgia is a real condition where your nervous system processes pain signals differently, making you more sensitive to pain throughout your body.

**What it feels like:**
- Widespread aching pain in muscles and joints
- Pain moves around or is present in many areas
- Feeling exhausted even after sleeping
- Waking up tired, not refreshed
- "Fibro fog" - trouble thinking clearly or remembering

**Other common symptoms:**
- Headaches
- Sleep that doesn't feel restful
- Sensitivity to cold, noise, or bright lights
- Numbness or tingling in hands and feet
- Belly problems (like irritable bowel syndrome)
- Feeling anxious or depressed

**Important facts:**
- Tests (blood tests, X-rays) are usually normal
- There's no damage to your muscles or joints
- The problem is in how your brain processes pain signals
- It's a real medical condition, not "in your head"
- It's very common, especially in women

**Who gets fibromyalgia:**
- Women more often than men (7 to 1)
- Usually develops between ages 30-50
- Can run in families
- Often starts after physical trauma, infection, or stress

**What helps:**
- Regular gentle exercise (very important!)
- Good sleep habits
- Medications for pain and sleep
- Reducing stress
- Physical therapy
- Support groups and education

**The good news:**
While there's no cure, many people learn to manage their symptoms well and lead active, fulfilling lives with the right combination of treatments.`,
      keyTerms: [
        { term: 'fibromyalgia', definition: 'A condition causing widespread body pain and tenderness, along with fatigue and other symptoms' },
        { term: 'chronic pain', definition: 'Pain that lasts for months or years' },
        { term: 'fatigue', definition: 'Feeling very tired and lacking energy, even after rest' },
        { term: 'fibro fog', definition: 'Difficulty thinking clearly, concentrating, or remembering things' },
      ],
      analogies: [
        'In fibromyalgia, the brain\'s "volume control" for pain is turned up too high, making normal signals feel painful.',
        'Think of it like a smoke detector that\'s too sensitive - it goes off even when there\'s no real fire.',
      ],
      examples: [
        'A woman who has muscle pain all over, feels exhausted despite sleeping, and has trouble concentrating at work',
        'Someone whose doctor can\'t find anything wrong on tests, but the pain is very real',
        'A person whose pain gets worse during stressful times',
      ],
    },
    2: {
      level: 2,
      summary: 'Fibromyalgia is a chronic widespread pain syndrome characterized by central sensitization, presenting with diffuse musculoskeletal pain, fatigue, sleep disturbance, and cognitive dysfunction without peripheral tissue pathology.',
      explanation: `Fibromyalgia is the prototype of central sensitization syndromes, affecting 2-4% of the population, with a strong female predominance.

**Pathophysiology:**
- Central sensitization: Augmented pain processing in CNS
- No peripheral tissue inflammation or damage
- Alterations in neurotransmitters and pain pathways
- Not a psychiatric condition, but often comorbid

**Core Features:**

1. **Chronic Widespread Pain:**
   - Present ≥3 months
   - Affects multiple body regions
   - Often described as deep muscular aching
   - May include burning, throbbing sensations
   - Waxes and wanes but never completely absent

2. **Fatigue:**
   - Profound, often more disabling than pain
   - Not relieved by rest
   - Waking unrefreshed
   - Post-exertional malaise

3. **Sleep Disturbance:**
   - Non-restorative sleep (key feature)
   - Difficulty falling/staying asleep
   - Alpha-delta sleep anomaly on EEG
   - High rates of sleep disorders (sleep apnea, restless legs)

4. **Cognitive Dysfunction ("Fibro Fog"):**
   - Difficulty concentrating
   - Memory problems
   - Mental fatigue
   - Word-finding difficulties

**Associated Symptoms:**
- Headaches (tension, migraine)
- Irritable bowel syndrome (30-70%)
- Irritable bladder
- Temporomandibular disorder
- Paresthesias
- Restless legs syndrome
- Sensitivity to noise, light, odors, temperature

**Comorbid Conditions:**
- Depression and anxiety (common but not causative)
- Autoimmune diseases (fibromyalgia can coexist)
- Chronic fatigue syndrome (significant overlap)
- Migraine

**Diagnosis:**

*2016 ACR Criteria (Modified):*
- Widespread pain index (WPI) ≥7 AND symptom severity score (SSS) ≥5, OR
- WPI 4-6 AND SSS ≥9
- Symptoms present ≥3 months
- No other disorder explaining the pain

No specific diagnostic test - diagnosis is clinical.

*Workup to Exclude Other Conditions:*
- CBC, CMP (anemia, thyroid, metabolic)
- TSH (hypothyroidism can mimic)
- ESR/CRP (should be normal)
- Vitamin D
- Consider RF, ANA only if clinical features suggest

**Treatment:**

*Non-Pharmacologic (First-Line):*
- Aerobic exercise (most evidence)
- Cognitive behavioral therapy
- Sleep hygiene
- Patient education
- Stress reduction

*Pharmacologic:*
- Duloxetine (SNRI) - FDA approved
- Milnacipran (SNRI) - FDA approved
- Pregabalin (alpha-2-delta ligand) - FDA approved
- Amitriptyline (TCA) - helps sleep and pain
- Cyclobenzaprine (muscle relaxant)

*Avoid:*
- Opioids (not effective, can worsen)
- NSAIDs (limited efficacy)
- Benzodiazepines (worsen fatigue, cognition)`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Heightened sensitivity of the central nervous system to pain signals', pronunciation: 'SEN-sih-tih-ZAY-shun' },
        { term: 'widespread pain index', definition: 'Measure of pain distribution across body regions used in fibromyalgia diagnosis' },
        { term: 'alpha-2-delta ligand', definition: 'Drug class (pregabalin, gabapentin) that modulates calcium channels involved in pain transmission' },
        { term: 'non-restorative sleep', definition: 'Sleep that doesn\'t provide refreshment; waking tired despite adequate hours' },
        { term: 'SNRI', definition: 'Serotonin-norepinephrine reuptake inhibitor; drug class effective for fibromyalgia (duloxetine, milnacipran)' },
      ],
      analogies: [
        'Central sensitization is like turning up the volume on the nervous system - normal signals become amplified into pain.',
        'Fibromyalgia is like the pain alarm system being stuck on "high alert" mode.',
      ],
    },
    3: {
      level: 3,
      summary: 'Fibromyalgia is a nociplastic pain condition characterized by central sensitization, with augmented CNS pain processing, altered neurotransmitter function, and disrupted descending inhibitory modulation, managed multimodally with exercise, CBT, and centrally-acting medications.',
      explanation: `Fibromyalgia represents the prototype of central or "nociplastic" pain, distinct from nociceptive and neuropathic pain.

**Pain Classification:**

1. **Nociceptive Pain:** Tissue damage activating peripheral nociceptors (e.g., OA, RA)
2. **Neuropathic Pain:** Nervous system lesion or disease (e.g., diabetic neuropathy)
3. **Nociplastic Pain:** Altered nociception without tissue damage or nervous system lesion (fibromyalgia)

**Pathophysiology:**

1. **Central Sensitization:**
   - Augmented temporal summation ("wind-up")
   - Reduced diffuse noxious inhibitory control (DNIC)
   - Expanded receptive fields
   - Central "volume control" set too high

2. **Neuroimaging Findings:**
   - Increased activation of pain matrix (fMRI)
   - Altered brain connectivity
   - Decreased gray matter in pain-processing regions
   - Changes in default mode network

3. **Neurotransmitter Abnormalities:**
   - Elevated substance P in CSF (3x normal)
   - Elevated glutamate
   - Decreased serotonin, norepinephrine, dopamine
   - Decreased descending inhibitory tone

4. **Neuroendocrine Changes:**
   - HPA axis dysregulation
   - Growth hormone deficiency
   - Low cortisol awakening response

5. **Peripheral Contributions:**
   - Small fiber neuropathy in subset
   - Reduced small fiber density on skin biopsy
   - Peripheral sensitization may initiate process

**Risk Factors and Triggers:**

*Predisposing:*
- Female sex
- Genetics (family clustering, 50% heritability)
- Early life adversity/trauma
- Personality traits (catastrophizing)

*Precipitating:*
- Physical trauma (MVA, surgery)
- Infection (viral illness)
- Psychological stress
- Autoimmune disease onset

**Differential Diagnosis:**

*Must exclude:*
- Hypothyroidism
- Inflammatory arthritis (RA, PMR)
- Myopathies (inflammatory, metabolic)
- Systemic diseases (SLE, Sjogren's)
- Vitamin D deficiency
- Sleep apnea

*Often coexists with:*
- Rheumatoid arthritis
- Osteoarthritis
- SLE
- Sjogren syndrome
- These patients have fibromyalgia ON TOP of their disease

**2016 ACR Diagnostic Criteria:**

*Widespread Pain Index (WPI):*
- Count of painful areas (0-19)
- Regions: jaw, chest, abdomen, upper/lower back, shoulders, upper/lower arms, hips, upper/lower legs, neck

*Symptom Severity Score (SSS):*
- Fatigue (0-3)
- Waking unrefreshed (0-3)
- Cognitive symptoms (0-3)
- Somatic symptoms (0-3)
- Total 0-12

*Criteria Met If:*
- WPI ≥7 and SSS ≥5, OR
- WPI 4-6 and SSS ≥9
- Generalized pain (≥4/5 regions)
- Symptoms ≥3 months
- Diagnosis valid regardless of other conditions

**Treatment Approach:**

*Evidence-Based Non-Pharmacologic:*
- Aerobic exercise: Best evidence (moderate intensity, 20-30 min, 2-3x/week)
- Strength training: Beneficial
- CBT: Reduces pain catastrophizing, improves function
- Mindfulness-based stress reduction
- Sleep hygiene
- Patient education (reduces healthcare utilization)

*FDA-Approved Medications:*
- Duloxetine 60 mg: NNT ~8 for 30% pain reduction
- Milnacipran 100-200 mg: Similar efficacy
- Pregabalin 300-450 mg: NNT ~11-12

*Other Medications (Off-Label):*
- Amitriptyline 25-50 mg: Helps pain, sleep
- Cyclobenzaprine 10-30 mg: Helps sleep
- Gabapentin: Similar to pregabalin

*Medications to Avoid:*
- Opioids: Worsen outcomes, hyperalgesia
- NSAIDs: Minimal efficacy (no inflammation)
- Corticosteroids: Not indicated
- Benzodiazepines: Worsen fatigue, cognition

*Combination Approach:*
- Usually need multimodal therapy
- Combine exercise + medication + CBT
- Set realistic expectations`,
      keyTerms: [
        { term: 'nociplastic pain', definition: 'Pain arising from altered nociceptive function without clear evidence of actual or threatened tissue damage (IASP term replacing "central sensitization syndrome")' },
        { term: 'temporal summation', definition: 'Progressively increasing pain perception with repeated stimuli of constant intensity; enhanced in fibromyalgia' },
        { term: 'DNIC', definition: 'Diffuse noxious inhibitory control; pain-inhibits-pain mechanism that is deficient in fibromyalgia' },
        { term: 'substance P', definition: 'Neuropeptide involved in pain transmission; elevated in CSF of fibromyalgia patients' },
        { term: 'catastrophizing', definition: 'Cognitive style of magnifying pain threat, feeling helpless, and ruminating; associated with worse fibromyalgia outcomes' },
      ],
      clinicalNotes: 'Fibromyalgia can coexist with inflammatory conditions (RA, SLE) - don\'t attribute all symptoms to the inflammatory disease. Opioids worsen fibromyalgia outcomes and should be avoided. Exercise is the most effective intervention but must be introduced gradually. Small fiber neuropathy found in 40-50% of fibromyalgia patients on skin biopsy.',
    },
    4: {
      level: 4,
      summary: 'Fibromyalgia pathophysiology involves CNS augmentation of pain processing through altered neurotransmitter function, deficient descending inhibitory modulation, glial cell activation, and neuroplastic changes, with emerging understanding of peripheral contributions including small fiber pathology and neuroinflammation.',
      explanation: `**Advanced Neurobiology:**

1. **Central Pain Processing Abnormalities:**

   *Ascending Pain Facilitation:*
   - Enhanced glutamatergic transmission
   - NMDA receptor hypersensitivity
   - Increased substance P, CGRP
   - Elevated inflammatory cytokines in CNS

   *Deficient Descending Inhibition:*
   - Reduced serotonergic tone
   - Reduced noradrenergic tone
   - Impaired DNIC (conditioned pain modulation)
   - Opioid system dysfunction

   *Neuroplasticity:*
   - Gray matter changes in pain regions
   - Altered functional connectivity
   - Increased connectivity between insula and default mode network
   - Predictive of symptoms

2. **Neurotransmitter Dysregulation:**

   *Elevated in CSF:*
   - Substance P (3x normal)
   - Glutamate
   - NGF (nerve growth factor)
   - Brain-derived neurotrophic factor

   *Reduced:*
   - Serotonin metabolites
   - Norepinephrine metabolites
   - Dopamine metabolites
   - Endogenous opioid activity

3. **Glial Cell Involvement:**

   *Microglia Activation:*
   - PET imaging with TSPO ligands shows neuroinflammation
   - Activated microglia in pain processing regions
   - Release pro-inflammatory cytokines
   - Amplify central sensitization

   *Astrocyte Dysfunction:*
   - Impaired glutamate clearance
   - Altered blood-brain barrier
   - Contribute to neuroinflammation

4. **Peripheral Contributions:**

   *Small Fiber Neuropathy:*
   - Reduced intraepidermal nerve fiber density (IENFD) in 40-50%
   - Abnormal sudomotor function
   - May explain peripheral symptoms
   - Chicken or egg question

   *Peripheral Sensitization:*
   - Muscle nociceptor sensitization
   - Altered muscle metabolism
   - Ischemia hypothesis
   - Contributes to central sensitization

5. **Genetic and Epigenetic Factors:**

   *Candidate Genes:*
   - COMT (catecholamine metabolism)
   - SLC6A4 (serotonin transporter)
   - HTR2A (serotonin receptor)
   - ADRB2 (adrenergic receptor)
   - TRPV1 (pain receptor)

   *Epigenetics:*
   - DNA methylation changes
   - microRNA alterations
   - Environmental influences on gene expression
   - Potential for transgenerational effects

6. **Neuroendocrine Dysfunction:**

   *HPA Axis:*
   - Blunted cortisol awakening response
   - Altered diurnal cortisol patterns
   - Reduced cortisol response to stress
   - May reflect chronic stress adaptation

   *Growth Hormone:*
   - Low IGF-1 levels in some patients
   - GH deficiency linked to poor sleep
   - GH treatment studied (limited use)

   *Autonomic Dysfunction:*
   - Reduced heart rate variability
   - Orthostatic intolerance
   - Sympathetic hyperactivity

**Emerging Biomarkers:**

*Objective Measures Being Studied:*
- fMRI connectivity patterns
- Quantitative sensory testing profiles
- Small fiber density on skin biopsy
- Serum inflammatory markers
- microRNA signatures
- TSPO-PET neuroinflammation

**Treatment Mechanisms:**

*Duloxetine/Milnacipran (SNRIs):*
- Increase serotonin and norepinephrine
- Enhance descending inhibitory tone
- Central mechanism of action
- Effect on mood helps but not sole mechanism

*Pregabalin/Gabapentin:*
- Alpha-2-delta calcium channel ligands
- Reduce glutamate release
- Decrease excitatory neurotransmission
- Modulate central sensitization

*Amitriptyline:*
- Multiple mechanisms (SNRI, antihistamine, anticholinergic)
- Improves sleep architecture
- Reduces substance P (theoretical)

*Exercise:*
- Increases endogenous opioids
- Normalizes HPA axis
- Reduces neuroinflammation
- Improves descending modulation
- Most effective intervention

**Clinical Phenotypes:**

*Subgroup Identification:*
- "Central pain" predominant
- "Peripheral" (small fiber neuropathy) phenotype
- "Mood/cognitive" predominant
- May have treatment implications

**Investigational Therapies:**

*In Development:*
- Low-dose naltrexone (microglial modulation)
- Sodium oxybate (improves deep sleep)
- Cannabinoids (endocannabinoid system)
- Memantine (NMDA antagonist)
- Transcranial magnetic stimulation
- Transcranial direct current stimulation`,
      keyTerms: [
        { term: 'conditioned pain modulation', definition: 'Modern term for DNIC; the phenomenon where pain inhibits pain through descending pathways; deficient in fibromyalgia', pronunciation: 'CPM' },
        { term: 'IENFD', definition: 'Intraepidermal nerve fiber density; reduced on skin biopsy in patients with small fiber neuropathy including fibromyalgia subset' },
        { term: 'TSPO', definition: 'Translocator protein; marker of microglial activation used in PET imaging to detect neuroinflammation' },
        { term: 'COMT', definition: 'Catechol-O-methyltransferase; enzyme involved in dopamine/norepinephrine metabolism; polymorphisms associated with pain sensitivity' },
        { term: 'low-dose naltrexone', definition: 'Off-label use of opioid antagonist at 1-5mg for fibromyalgia; proposed mechanism is microglial modulation' },
      ],
      clinicalNotes: 'PET imaging studies show evidence of neuroinflammation in fibromyalgia patients. Low-dose naltrexone (3-4.5 mg) is gaining interest for its potential microglial effects but remains experimental. Small fiber neuropathy subset may respond differently to treatment - consider skin biopsy in selected patients. Sodium oxybate (Xyrem) improves sleep and pain but DEA scheduling limits use.',
    },
    5: {
      level: 5,
      summary: 'Fibromyalgia represents nociplastic pain arising from complex CNS-peripheral interactions including glial cell activation, altered neurotransmitter homeostasis, deficient descending modulation, and peripheral small fiber pathology, with emerging precision medicine approaches targeting specific pathophysiologic phenotypes and neuroinflammatory mechanisms.',
      explanation: `**Precision Medicine in Fibromyalgia:**

1. **Phenotype Identification:**

   *Clinical Subgroups:*

   Central Sensitization Predominant:
   - High temporal summation
   - Deficient CPM
   - Responds to central-acting medications
   - May respond to neuromodulation

   Small Fiber Neuropathy Phenotype:
   - Reduced IENFD on biopsy
   - Neuropathic pain descriptors
   - Autonomic symptoms
   - May benefit from treatments targeting peripheral nerves

   High Inflammation Phenotype:
   - Elevated cytokines
   - Microglial activation on imaging
   - May respond to anti-inflammatory approaches
   - Overlaps with autoimmune patients

   Affective/Sleep Predominant:
   - Major mood component
   - Sleep disorders driving symptoms
   - Prioritize treating these domains
   - CBT, sleep optimization

2. **Quantitative Sensory Testing (QST):**

   *Measures:*
   - Pain thresholds (mechanical, thermal)
   - Temporal summation (wind-up)
   - Conditioned pain modulation (CPM)
   - Pressure pain thresholds

   *Clinical Utility:*
   - May predict treatment response
   - Identifies pro-nociceptive vs anti-nociceptive deficit
   - Research tool primarily
   - Potential for personalized treatment

3. **Neuroimaging Biomarkers:**

   *fMRI Findings:*
   - Increased insular activation
   - Altered connectivity patterns
   - Default mode network changes
   - May predict treatment response

   *TSPO-PET:*
   - Neuroinflammation visualization
   - Increased binding in fibromyalgia
   - Potential therapeutic target
   - Research stage

4. **Treatment Algorithm (Evidence-Based):**

   *First-Line (All Patients):*
   - Patient education (validates condition)
   - Aerobic exercise (gradual, moderate intensity)
   - Sleep hygiene optimization

   *Pharmacologic Choice Based on Phenotype:*

   Pain-predominant:
   - Pregabalin or duloxetine
   - Combination if needed

   Sleep-predominant:
   - Amitriptyline or cyclobenzaprine
   - Consider sleep study

   Mood-predominant:
   - Duloxetine (dual benefit)
   - Add psychotherapy

   Fatigue-predominant:
   - Milnacipran (less sedating)
   - Address sleep, screen for disorders

   *Refractory Cases:*
   - Combination pharmacotherapy
   - Intensive multidisciplinary program
   - Consider clinical trials
   - Address comorbidities

5. **Emerging Therapeutic Approaches:**

   *Low-Dose Naltrexone (LDN):*
   - Doses 1-5 mg (typically 4.5 mg)
   - Proposed mechanism: TLR4 antagonism, microglial modulation
   - Small trials show benefit
   - Well-tolerated
   - Off-label use growing

   *Sodium Oxybate (Xyrem/Xywav):*
   - GABA-B agonist
   - Improves slow-wave sleep
   - Reduces pain and fatigue
   - FDA not approved for fibromyalgia
   - Schedule III controlled substance limits use

   *Cannabinoids:*
   - Endocannabinoid system dysfunction in FM
   - CBD, THC, nabilone studied
   - Mixed evidence
   - Legal considerations vary

   *Neuromodulation:*
   - Transcranial magnetic stimulation (TMS)
   - Transcranial direct current stimulation (tDCS)
   - Targeting DLPFC, motor cortex
   - FDA cleared for some pain conditions
   - Variable accessibility

   *Anti-inflammatory Strategies:*
   - Based on neuroinflammation evidence
   - Low-dose naltrexone (microglial)
   - Minocycline (studied but unclear benefit)
   - Future targeted approaches

6. **Comorbidity Management:**

   *Sleep Disorders:*
   - Screen for sleep apnea (high prevalence)
   - Treat restless legs syndrome
   - Address insomnia separately
   - Sleep study if suspected

   *Mental Health:*
   - Depression/anxiety present in 30-50%
   - Treat independently (not just as "fibromyalgia symptom")
   - CBT effective for both

   *Overlapping Pain Conditions:*
   - IBS, TMJ, chronic headache
   - Central sensitization syndrome overlap
   - May need condition-specific treatment

   *Inflammatory Diseases:*
   - Fibromyalgia often coexists with RA, SLE, Sjogren's
   - Treat underlying disease adequately
   - Don't attribute all symptoms to inflammation

7. **Outcomes and Prognosis:**

   *Natural History:*
   - Symptoms fluctuate but rarely remit completely
   - 25% improve significantly over time
   - 50% stable
   - 25% worsen

   *Predictors of Poor Outcome:*
   - High catastrophizing
   - Low self-efficacy
   - Ongoing stressors
   - Opioid use
   - Disability status

   *Improving Outcomes:*
   - Self-management education
   - Exercise adherence
   - Multimodal approach
   - Realistic expectations

8. **Research Directions:**

   *Understanding Mechanisms:*
   - Autoimmunity hypothesis (some studies show IgG transfer symptoms)
   - Microbiome-gut-brain axis
   - Neuroinflammation targeting
   - Genetic/epigenetic markers

   *Treatment Development:*
   - Glial-targeting agents
   - Novel NMDA modulators
   - Precision medicine trials
   - Device-based neuromodulation`,
      keyTerms: [
        { term: 'TLR4', definition: 'Toll-like receptor 4; pattern recognition receptor on microglia that may be antagonized by low-dose naltrexone' },
        { term: 'central sensitization syndrome', definition: 'Umbrella term for conditions sharing CNS pain augmentation: fibromyalgia, IBS, TMJ, chronic headache, chronic fatigue syndrome' },
        { term: 'DLPFC', definition: 'Dorsolateral prefrontal cortex; target for TMS in pain modulation' },
        { term: 'sodium oxybate', definition: 'GABA-B agonist that induces slow-wave sleep; studied but not FDA-approved for fibromyalgia' },
        { term: 'endocannabinoid deficiency', definition: 'Hypothesis that fibromyalgia and related conditions result from inadequate endocannabinoid signaling' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- Fibromyalgia is a nociplastic pain condition (not inflammatory, not neuropathic)
- Diagnosis is clinical - labs should be normal (ESR, CRP, RF, ANA if no clinical indication)
- Three FDA-approved drugs: duloxetine, milnacipran, pregabalin
- Exercise is the most effective treatment intervention
- Opioids worsen fibromyalgia outcomes (central sensitization, hyperalgesia)
- Can coexist with inflammatory diseases (RA, SLE) - don't miss both diagnoses
- Small fiber neuropathy found in 40-50% of fibromyalgia patients
- Tender points no longer required for diagnosis (2016 criteria use WPI/SSS)
- Central sensitization explains why pain "moves around" and why stress worsens symptoms
- NSAIDs have minimal efficacy (no peripheral inflammation to target)`,
    },
  },

  media: [
    {
      id: 'fibro-pain-regions',
      type: 'diagram',
      filename: 'fibromyalgia-wpi-regions.svg',
      title: 'Widespread Pain Index Regions',
      description: 'Body diagram showing the 19 regions assessed in the WPI',
    },
    {
      id: 'central-sensitization',
      type: 'diagram',
      filename: 'central-sensitization-diagram.svg',
      title: 'Central Sensitization Mechanism',
      description: 'Diagram showing altered pain processing in fibromyalgia',
    },
  ],
  citations: [
    {
      id: 'clauw-2014',
      type: 'article',
      title: 'Fibromyalgia: A Clinical Review',
      authors: ['Clauw DJ'],
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2014.3266',
    },
    {
      id: 'wolfe-2016',
      type: 'article',
      title: '2016 Revisions to the 2010/2011 Fibromyalgia Diagnostic Criteria',
      authors: ['Wolfe F', 'Clauw DJ', 'Fitzcharles MA', 'et al.'],
      source: 'Seminars in Arthritis and Rheumatism',
      url: 'https://doi.org/10.1016/j.semarthrit.2016.08.012',
    },
  ],
  crossReferences: [
    { targetId: 'condition-chronic-fatigue-syndrome', targetType: 'condition', relationship: 'related', label: 'Chronic Fatigue Syndrome' },
    { targetId: 'condition-irritable-bowel-syndrome', targetType: 'condition', relationship: 'related', label: 'Irritable Bowel Syndrome' },
    { targetId: 'system-nervous', targetType: 'system', relationship: 'parent', label: 'Nervous System' },
  ],
  tags: {
    systems: ['nervous', 'musculoskeletal'],
    topics: ['rheumatology', 'pain medicine', 'neurology'],
    keywords: ['fibromyalgia', 'chronic pain', 'central sensitization', 'nociplastic pain', 'widespread pain'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'psychiatry'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fibromyalgiaContent;
