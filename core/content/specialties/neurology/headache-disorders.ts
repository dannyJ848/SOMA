/**
 * Headache Disorders - Comprehensive Neurology Content
 *
 * Complete coverage of primary and secondary headache disorders including
 * migraine, tension-type, cluster, and secondary causes.
 */

import { EducationalContent } from '../../types';

export const migraineContent: EducationalContent = {
  id: 'neuro-migraine',
  type: 'condition',
  name: 'Migraine',
  alternateNames: ['Migraine Headache', 'Classic Migraine', 'Common Migraine'],
  hpoId: 'HP:0002076',

  levels: {
    1: {
      level: 1,
      summary: 'Migraine is a type of severe headache that often comes with nausea, sensitivity to light, and sometimes visual changes.',
      explanation: `A migraine is more than just a bad headache. It's a neurological condition that can affect your whole body.

**What It Feels Like:**
- Throbbing or pulsing pain, usually on one side
- Pain that gets worse with movement
- Feeling sick to your stomach
- Being bothered by lights and sounds
- Some people see flashing lights or zigzag lines before the headache (called an "aura")

**Common Triggers:**
- Stress
- Not enough sleep
- Certain foods (chocolate, cheese, alcohol)
- Bright lights or loud sounds
- Hormonal changes (menstrual periods)
- Weather changes

**What Helps:**
- Resting in a dark, quiet room
- Pain medications (taken early)
- Cold compresses
- Prevention: Regular sleep, avoiding triggers

**Important to Know:**
Migraines can last from 4 hours to 3 days. They're common - about 1 in 7 people get them, and they're more common in women.`,
      keyTerms: [
        { term: 'migraine', definition: 'A type of severe, recurring headache with other symptoms like nausea and light sensitivity' },
        { term: 'aura', definition: 'Warning signs before a migraine, like seeing flashing lights or feeling tingling', pronunciation: 'OR-uh' },
        { term: 'trigger', definition: 'Something that can cause a migraine to start' },
      ],
      analogies: [
        'A migraine is like a storm in your brain - there are warning signs, then the storm hits, and eventually it passes.',
        'Triggers are like matches - different things can spark a migraine in different people.',
      ],
      examples: [
        'A student notices flashing lights in their vision, then develops a pounding headache on one side with nausea - this is migraine with aura.',
        'A woman gets severe headaches around her period that make her want to lie down in a dark room - these are menstrual migraines.',
      ],
    },
    2: {
      level: 2,
      summary: 'Migraine is a primary headache disorder characterized by recurrent episodes of moderate-to-severe unilateral pulsating headache with photophobia, phonophobia, and nausea, lasting 4-72 hours.',
      explanation: `**Classification (ICHD-3):**

**Migraine Without Aura (~75%)**
- At least 5 attacks fulfilling criteria
- Duration: 4-72 hours
- At least 2 of: Unilateral, pulsating, moderate-severe intensity, aggravated by activity
- At least 1 of: Nausea/vomiting, photophobia and phonophobia

**Migraine With Aura (~25%)**
- At least 2 attacks with aura
- Aura: Fully reversible visual, sensory, or speech symptoms
- At least 3 of: One symptom spreading over ≥5 min, two or more symptoms in succession, each symptom lasts 5-60 min, at least one unilateral, followed by headache within 60 min

**Phases of Migraine:**
1. *Prodrome* (hours to 2 days before): Mood changes, food cravings, yawning, neck stiffness
2. *Aura* (if present): Visual, sensory, or language symptoms
3. *Headache phase*: The main attack
4. *Postdrome*: "Migraine hangover" - fatigue, difficulty concentrating

**Types of Aura:**
- *Visual* (most common): Scintillating scotoma, fortification spectra, photopsia
- *Sensory*: Tingling, numbness (often face and hand)
- *Language*: Word-finding difficulty

**Common Triggers:**
- Stress (or stress letdown)
- Sleep disturbance
- Hormonal changes
- Foods: Alcohol, aged cheese, MSG, nitrates
- Environmental: Bright lights, strong odors, weather
- Medication overuse`,
      keyTerms: [
        { term: 'photophobia', definition: 'Sensitivity to light', pronunciation: 'foh-toh-FOH-bee-uh' },
        { term: 'phonophobia', definition: 'Sensitivity to sound', pronunciation: 'foh-noh-FOH-bee-uh' },
        { term: 'prodrome', definition: 'Warning symptoms hours to days before migraine', pronunciation: 'PROH-drohm' },
        { term: 'scotoma', definition: 'A blind spot or area of reduced vision', pronunciation: 'sko-TOH-muh' },
      ],
      analogies: [
        'The aura is like a wave of abnormal electrical activity spreading across the brain surface.',
        'Migraine triggers are like filling a bucket - different factors add up until it overflows into a headache.',
      ],
    },
    3: {
      level: 3,
      summary: 'Migraine pathophysiology involves cortical spreading depression, trigeminal activation, and CGRP release, with treatment targeting acute attacks (triptans, NSAIDs) and prevention (beta-blockers, anticonvulsants, CGRP antagonists).',
      explanation: `**Pathophysiology:**

*Cortical Spreading Depression (CSD):*
- Wave of neuronal depolarization spreading across cortex
- Followed by suppression of activity
- Underlies the aura phenomenon
- May trigger downstream trigeminal activation

*Trigeminovascular System:*
- Trigeminal nerve innervates meninges and blood vessels
- Activation releases CGRP, substance P
- Causes neurogenic inflammation and vasodilation
- Pain signals transmitted to brainstem

*CGRP (Calcitonin Gene-Related Peptide):*
- Elevated during migraine attacks
- Powerful vasodilator
- Key target for new medications
- Infusion can trigger migraine in susceptible individuals

**Acute Treatment:**

*First-line:*
- NSAIDs: Ibuprofen, naproxen, aspirin
- Acetaminophen (mild attacks)
- Triptans: Sumatriptan, rizatriptan, eletriptan
  - 5-HT1B/1D agonists
  - Vasoconstriction + neuronal inhibition
  - Contraindicated in cardiovascular disease

*Second-line:*
- Gepants (CGRP antagonists): Ubrogepant, rimegepant
- Ditans (5-HT1F agonists): Lasmiditan
- Antiemetics: Metoclopramide, prochlorperazine

*Rescue:*
- DHE (dihydroergotamine)
- Corticosteroids (status migrainosus)

**Preventive Treatment (≥4 headache days/month):**

*Oral medications:*
- Beta-blockers: Propranolol, metoprolol
- Antidepressants: Amitriptyline, venlafaxine
- Anticonvulsants: Topiramate, valproate
- ARBs: Candesartan

*CGRP monoclonal antibodies:*
- Erenumab (receptor), fremanezumab, galcanezumab, eptinezumab (ligand)
- Monthly or quarterly injections
- Well-tolerated, effective

*Neurotoxin:*
- OnabotulinumtoxinA for chronic migraine (≥15 days/month)

**Red Flags (Secondary Causes):**
- Thunderclap onset
- Neurologic deficits
- Fever
- Immunocompromised
- New after age 50
- Papilledema`,
      keyTerms: [
        { term: 'cortical spreading depression', definition: 'Wave of neuronal depolarization across cortex causing aura' },
        { term: 'CGRP', definition: 'Calcitonin gene-related peptide - neuropeptide central to migraine pathophysiology' },
        { term: 'triptan', definition: '5-HT1B/1D agonist for acute migraine treatment' },
        { term: 'status migrainosus', definition: 'Debilitating migraine lasting >72 hours' },
      ],
      clinicalNotes: 'Take triptans early for best effect. Avoid triptans in cardiovascular disease. Gepants and ditans are newer options without vasoconstrictive effects.',
    },
    4: {
      level: 4,
      summary: 'Advanced migraine management requires phenotyping attacks, addressing medication overuse, and utilizing precision treatments including CGRP-targeted therapies and neuromodulation devices.',
      explanation: `**Migraine Phenotyping:**

*Episodic vs Chronic:*
- Episodic: <15 headache days/month
- Chronic: ≥15 days/month with ≥8 migraine days for >3 months
- Transformation often occurs with medication overuse

*Vestibular Migraine:*
- Vertigo or dizziness with migraine features
- May occur without headache
- Diagnosis of exclusion

*Hemiplegic Migraine:*
- Motor weakness during aura
- Familial: FHM1 (CACNA1A), FHM2 (ATP1A2), FHM3 (SCN1A)
- Sporadic form exists
- Avoid triptans (controversial)

*Migraine with Brainstem Aura:*
- Previously "basilar migraine"
- Dysarthria, vertigo, tinnitus, diplopia, ataxia
- Decreased consciousness possible

**Medication Overuse Headache:**
- >10-15 days/month of acute medication use
- Triptans, combination analgesics, opioids: >10 days
- NSAIDs: >15 days
- Treatment: Withdrawal + preventive initiation
- Bridge therapy may help

**Advanced Preventive Strategies:**

*CGRP Pathway Targeting:*
- Monoclonal antibodies: 50% responder rate ~50%
- Select based on frequency, tolerability
- May take 3 months for full effect
- Consider switching if inadequate response

*Neuromodulation:*
- sTMS (single-pulse transcranial magnetic stimulation)
- eTNS (external trigeminal nerve stimulation)
- nVNS (noninvasive vagus nerve stimulation)
- Cefaly device (supraorbital stimulation)

*Nerve Blocks:*
- Greater occipital nerve block
- Sphenopalatine ganglion block
- May provide weeks of relief

**Comorbidities:**
- Depression/anxiety: Consider SNRIs
- Hypertension: Beta-blockers, ARBs
- Epilepsy: Topiramate, valproate
- Obesity: Topiramate (weight-neutral/loss)
- Insomnia: Amitriptyline

**Special Populations:**

*Pregnancy:*
- Most medications contraindicated
- Acetaminophen relatively safe
- Metoclopramide for nausea
- Magnesium, riboflavin for prevention

*Menstrual Migraine:*
- Perimenstrual prophylaxis (frovatriptan, naproxen)
- Hormonal strategies
- Extended-cycle OCP`,
      keyTerms: [
        { term: 'medication overuse headache', definition: 'Chronic headache from frequent use of acute treatments' },
        { term: 'vestibular migraine', definition: 'Migraine variant with prominent vertigo/dizziness' },
        { term: 'gepant', definition: 'Small molecule CGRP receptor antagonist' },
        { term: 'ditan', definition: '5-HT1F agonist without vasoconstrictive properties' },
      ],
      clinicalNotes: 'CGRP mAbs are first-line for chronic migraine without medication overuse. For medication overuse, withdrawal is essential. Consider neuromodulation for medication-intolerant patients.',
    },
    5: {
      level: 5,
      summary: 'Precision migraine care integrates genetic susceptibility, biomarkers, novel therapeutics targeting CGRP/PACAP pathways, and multidisciplinary approaches for refractory disease.',
      explanation: `**Migraine Genetics and Biomarkers:**

*Common Migraine GWAS:*
- >100 susceptibility loci identified
- Enrichment in vascular and neuronal genes
- Individual variants have small effects
- Polygenic risk scores emerging

*Familial Hemiplegic Migraine:*
- FHM1: CACNA1A (P/Q calcium channel)
- FHM2: ATP1A2 (Na+/K+ ATPase)
- FHM3: SCN1A (voltage-gated sodium channel)
- Functional channelopathies

*Potential Biomarkers:*
- CGRP levels (elevated interictally in chronic)
- PACAP (pituitary adenylate cyclase-activating polypeptide)
- Genetic predictors of drug response (in development)

**Novel Therapeutic Targets:**

*PACAP/PAC1 Pathway:*
- PACAP38 triggers migraine
- PAC1 receptor antagonists in development
- May help CGRP non-responders

*Potassium Channels:*
- KCNK18 (TRESK) mutations linked to migraine
- Potential therapeutic target

*Delta Opioid Receptors:*
- Peripheral activation may abort attacks
- Avoids central opioid effects

**Refractory Migraine Management:**

*Definition:*
- Failure of ≥3 preventive classes
- Including ≥1 CGRP-targeted therapy
- Adequate trial duration (2-3 months)

*Advanced Interventions:*
- Combination prevention (e.g., CGRP mAb + oral)
- Inpatient DHE protocol
- Ketamine infusions (experimental)
- Psilocybin (research)

*Surgical Options (last resort):*
- Occipital nerve stimulation
- Peripheral nerve decompression (controversial)
- Deep brain stimulation (investigational)

**Migraine and Vascular Risk:**

*Stroke Risk:*
- Migraine with aura: RR 2.0 for ischemic stroke
- Especially in women <45 on estrogen-containing contraceptives
- Smoking compounds risk
- No increased risk for migraine without aura

*Patent Foramen Ovale:*
- Higher prevalence in migraine with aura
- PFO closure does not reduce migraine (trials negative)
- Paradoxical embolism consideration

**Quality and Outcomes:**

*Headache Impact Test (HIT-6):*
- Validated patient-reported outcome
- Scores ≥60 indicate severe impact

*MIDAS (Migraine Disability Assessment):*
- Days lost to migraine in past 3 months
- Guides treatment intensity

*50% Responder Rate:*
- Standard outcome for preventive trials
- Reduction in monthly migraine days

**Future Directions:**
- Precision medicine based on genetics/biomarkers
- Combination biologic strategies
- Novel neuromodulation approaches
- Psychedelic research (psilocybin cluster studies)`,
      keyTerms: [
        { term: 'PACAP', definition: 'Pituitary adenylate cyclase-activating polypeptide - emerging migraine target' },
        { term: 'MIDAS', definition: 'Migraine Disability Assessment Scale' },
        { term: 'polygenic risk score', definition: 'Aggregate genetic risk from many common variants' },
        { term: 'refractory migraine', definition: 'Migraine failing multiple preventive medication classes' },
      ],
      clinicalNotes: `Current clinical pearls:
1. CGRP mAbs work best in high-frequency episodic and chronic migraine
2. Gepants can be used for both acute and preventive treatment
3. Avoid estrogen-containing contraceptives in migraine with aura (stroke risk)
4. Medication overuse is the most common cause of chronic daily headache
5. Neuromodulation devices offer drug-free options
6. Consider comorbidities when choosing preventive therapy
7. Refractory cases may benefit from combination approaches
8. Always screen for red flags suggesting secondary cause`,
    },
  },

  media: [
    {
      id: 'migraine-aura-examples',
      type: 'image',
      filename: 'migraine_aura_visual.jpg',
      title: 'Visual Aura Phenomena',
      description: 'Scintillating scotoma, fortification spectra visualization',
    },
    {
      id: 'migraine-pathophysiology',
      type: 'diagram',
      filename: 'migraine_pathophysiology.svg',
      title: 'Migraine Pathophysiology',
      description: 'Cortical spreading depression and trigeminovascular activation',
    },
  ],

  citations: [
    {
      id: 'ichd-3',
      type: 'article',
      title: 'The International Classification of Headache Disorders, 3rd edition',
      authors: ['Headache Classification Committee'],
      source: 'Cephalalgia',
      url: 'https://ichd-3.org/',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-tension-headache', targetType: 'condition', relationship: 'related', label: 'Tension-Type Headache' },
    { targetId: 'neuro-cluster-headache', targetType: 'condition', relationship: 'related', label: 'Cluster Headache' },
    { targetId: 'neuro-headache-meds', targetType: 'topic', relationship: 'see-also', label: 'Headache Medications' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'headache', 'pain'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const tensionHeadacheContent: EducationalContent = {
  id: 'neuro-tension-headache',
  type: 'condition',
  name: 'Tension-Type Headache',
  alternateNames: ['Tension Headache', 'Stress Headache', 'TTH'],
  hpoId: 'HP:0002315',

  levels: {
    1: {
      level: 1,
      summary: 'Tension-type headache is the most common type of headache, causing mild to moderate pain that feels like a tight band around your head.',
      explanation: `Tension-type headaches are the headaches most people get from time to time. They're usually not as severe as migraines.

**What It Feels Like:**
- Pressure or tightness around your head
- Like wearing a tight hat or having a band around your head
- Pain on both sides of your head
- Doesn't throb like a migraine
- No nausea or vomiting
- Doesn't get worse with movement

**Common Causes:**
- Stress
- Tight muscles in your head, neck, and shoulders
- Poor posture (especially from computer use)
- Not drinking enough water
- Skipping meals
- Eye strain
- Poor sleep

**What Helps:**
- Over-the-counter pain relievers
- Relaxation and stress management
- Stretching your neck and shoulders
- Taking breaks from screens
- Getting enough sleep
- Drinking plenty of water

**When to Worry:**
Most tension headaches are not serious. See a doctor if headaches are very frequent, very severe, or change in character.`,
      keyTerms: [
        { term: 'tension-type headache', definition: 'A common headache with mild-to-moderate pain that feels like pressure or tightness' },
        { term: 'bilateral', definition: 'Affecting both sides', pronunciation: 'by-LAT-er-ul' },
      ],
      analogies: [
        'A tension headache feels like a headband that\'s too tight around your head.',
        'Stress and muscle tension build up like pressure in a balloon until you get a headache.',
      ],
      examples: [
        'After a stressful day at work hunched over a computer, you feel a dull, pressing headache on both sides of your head.',
        'A student gets headaches every afternoon after hours of studying in the same position.',
      ],
    },
    2: {
      level: 2,
      summary: 'Tension-type headache is a primary headache disorder characterized by bilateral, non-pulsating, mild-to-moderate pain without nausea or significant photophobia/phonophobia.',
      explanation: `**ICHD-3 Classification:**

**Episodic TTH:**
- *Infrequent*: <1 day/month
- *Frequent*: 1-14 days/month for >3 months

**Chronic TTH:**
- ≥15 days/month for >3 months

**Diagnostic Criteria:**
- Duration: 30 minutes to 7 days
- At least 2 of:
  - Bilateral
  - Pressing/tightening (non-pulsating)
  - Mild-to-moderate intensity
  - Not aggravated by routine activity
- Both of:
  - No nausea or vomiting
  - No more than one of photophobia or phonophobia

**Subtypes:**
- With pericranial tenderness
- Without pericranial tenderness

**Pathophysiology:**
- Peripheral mechanism: Myofascial tenderness
- Central mechanism: Sensitization in chronic TTH
- Overlap with migraine likely

**Triggers:**
- Psychological: Stress, anxiety, depression
- Physical: Poor posture, jaw clenching, eye strain
- Environmental: Insufficient sleep, irregular meals
- Cervical: Neck problems

**Differential Diagnosis:**
- Migraine without aura
- Cervicogenic headache
- Medication overuse headache
- Secondary causes (rare)`,
      keyTerms: [
        { term: 'pericranial', definition: 'Around the skull - referring to scalp and neck muscles', pronunciation: 'per-ee-KRAY-nee-ul' },
        { term: 'myofascial', definition: 'Relating to muscle and the connective tissue covering it', pronunciation: 'my-oh-FASH-ul' },
        { term: 'cervicogenic', definition: 'Originating from the neck', pronunciation: 'ser-vik-oh-JEN-ik' },
      ],
      analogies: [
        'Episodic TTH is like occasional stress knots, while chronic TTH is like a persistently tense muscle that never fully relaxes.',
      ],
    },
    3: {
      level: 3,
      summary: 'Tension-type headache involves peripheral myofascial and central sensitization mechanisms, with treatment focusing on acute analgesics and preventive measures including amitriptyline.',
      explanation: `**Pathophysiology:**

*Peripheral Mechanism:*
- Increased pericranial muscle tenderness
- Myofascial trigger points
- Sensitized peripheral nociceptors

*Central Mechanism (Chronic TTH):*
- Central sensitization
- Decreased pain thresholds
- Reduced descending inhibition
- Neuroplastic changes

**Assessment:**
- Headache diary
- Pericranial muscle palpation
- Posture and ergonomic evaluation
- Screen for psychiatric comorbidity
- Rule out secondary causes

**Acute Treatment:**
- NSAIDs: Ibuprofen, naproxen (first-line)
- Acetaminophen (mild attacks)
- Aspirin
- Combination analgesics (limited use - overuse risk)

*Limitations:*
- Avoid opioids
- Limit acute medication to <10-15 days/month
- Caffeine-containing combinations: Risk of overuse

**Preventive Treatment (Frequent/Chronic):**

*First-line:*
- Amitriptyline 10-75mg at bedtime
- Evidence strongest among preventives

*Second-line:*
- Other TCAs: Nortriptyline
- SSRIs/SNRIs: Mirtazapine, venlafaxine
- Evidence weaker than amitriptyline

*Non-pharmacologic:*
- Cognitive behavioral therapy
- Relaxation training
- Biofeedback
- Physical therapy
- Acupuncture (some evidence)
- Stress management

**Medication Overuse Considerations:**
- Common cause of chronic daily headache
- Withdrawal + preventive initiation
- Education is key`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Increased excitability of central neurons leading to amplified pain responses' },
        { term: 'trigger points', definition: 'Hyperirritable spots in muscle that refer pain when compressed' },
        { term: 'descending inhibition', definition: 'Brain pathways that normally suppress pain signals' },
      ],
      clinicalNotes: 'Amitriptyline is first-line preventive for chronic TTH. Start low (10-25mg) and titrate. Consider comorbid depression/anxiety when choosing therapy.',
    },
    4: {
      level: 4,
      summary: 'Chronic tension-type headache management requires addressing central sensitization through multimodal therapy combining pharmacologic prevention, physical therapy, and behavioral interventions.',
      explanation: `**Central Sensitization Assessment:**

*Clinical Features:*
- Allodynia: Pain from normally non-painful stimuli
- Hyperalgesia: Increased pain from painful stimuli
- Reduced pain thresholds
- Expanded pain referral zones

*Contributing Factors:*
- Sleep disorders
- Depression and anxiety
- Catastrophizing
- Medication overuse

**Differential Diagnosis:**

*Overlap Syndromes:*
- Chronic migraine (≥50% overlap)
- New daily persistent headache
- Hemicrania continua

*Secondary Causes to Exclude:*
- Medication overuse headache
- Cervical spine disease
- Intracranial hyper/hypotension
- Sleep apnea
- TMJ dysfunction
- Giant cell arteritis (age >50)

**Multimodal Treatment Strategy:**

*Pharmacologic:*
- Amitriptyline: 10-75mg, NNT ~3-5
- Consider comorbidities
- Trial duration: 2-3 months minimum

*Physical Therapy:*
- Cervical and postural exercises
- Manual therapy
- Trigger point release
- Ergonomic modification

*Behavioral:*
- CBT for chronic pain
- Relaxation training
- Stress management
- Sleep hygiene

*Procedural:*
- Trigger point injections
- Occipital nerve blocks (if overlap with migraine)
- Dry needling

**Refractory Cases:**
- Re-evaluate diagnosis
- Address psychiatric comorbidity
- Consider headache specialty referral
- Multidisciplinary pain approach

**Prognosis:**
- Episodic: Generally good
- Chronic: May persist, but multimodal therapy improves outcomes
- Some evolve to/from chronic migraine`,
      keyTerms: [
        { term: 'allodynia', definition: 'Pain from stimuli not normally painful (e.g., light touch)', pronunciation: 'al-oh-DIN-ee-uh' },
        { term: 'hyperalgesia', definition: 'Exaggerated pain response to painful stimuli', pronunciation: 'hy-per-al-JEE-zhuh' },
        { term: 'catastrophizing', definition: 'Tendency to magnify or ruminate on pain experience' },
      ],
      clinicalNotes: 'Chronic TTH often coexists with chronic migraine. Multimodal approach is essential. Address sleep, mood, and posture. Avoid opioids and limit acute medication use.',
    },
    5: {
      level: 5,
      summary: 'Tension-type headache represents a spectrum from peripheral myofascial dysfunction to central pain processing abnormalities, requiring individualized treatment based on chronicity and underlying mechanisms.',
      explanation: `**Neuroimaging and Pathophysiology:**

*Structural Studies:*
- Generally normal in primary TTH
- Some studies show decreased gray matter
- Importance of excluding secondary causes

*Functional Studies:*
- Altered pain processing networks
- Decreased descending modulation
- Overlap with fibromyalgia findings

**Genetic Factors:**
- Heritability ~40-50% for chronic TTH
- Shared genetic architecture with migraine
- No specific genes identified

**Biomarkers (Research):**
- Serotonin levels
- Nitric oxide markers
- Cytokines
- Not clinically validated

**Advanced Management:**

*Botulinum Toxin:*
- Evidence weaker than for chronic migraine
- May benefit selected patients with pericranial muscle involvement
- Not FDA-approved for TTH

*Neuromodulation:*
- Limited evidence in TTH
- May consider if migraine overlap
- eTNS, sTMS

*Emerging Approaches:*
- Targeted trigger point treatments
- Virtual reality for relaxation
- Digital therapeutics

**Controversies:**

*TTH vs Migraine Spectrum:*
- Significant clinical and genetic overlap
- Some consider same disorder
- Treatment overlap

*Role of Muscle Contraction:*
- Original theory (muscle contraction headache)
- EMG studies inconsistent
- Central mechanisms now emphasized

**Quality Metrics:**
- Headache frequency
- Headache intensity (0-10)
- Disability (HIT-6)
- Medication use days
- Quality of life

**Clinical Pearls:**
1. Screen for medication overuse in all frequent headache
2. Amitriptyline remains most evidence-based preventive
3. Multimodal approach superior to medication alone
4. Address comorbid depression, anxiety, sleep disorders
5. Consider overlap with chronic migraine
6. Re-evaluate diagnosis if treatment-refractory`,
      keyTerms: [
        { term: 'descending modulation', definition: 'Brain systems that regulate pain signal transmission at spinal level' },
        { term: 'digital therapeutics', definition: 'Evidence-based software interventions for medical conditions' },
        { term: 'HIT-6', definition: 'Headache Impact Test - 6 item validated disability measure' },
      ],
      clinicalNotes: `Clinical approach:
1. Differentiate episodic vs chronic
2. Identify and address triggers
3. Screen for medication overuse
4. Consider comorbidities
5. Episodic: Acute treatment + lifestyle
6. Chronic: Add preventive (amitriptyline first-line)
7. Multimodal for best outcomes
8. Re-evaluate if refractory`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ichd-3-tth',
      type: 'article',
      title: 'Tension-type headache - ICHD-3 criteria',
      source: 'Cephalalgia',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-migraine', targetType: 'condition', relationship: 'related', label: 'Migraine' },
    { targetId: 'neuro-cluster-headache', targetType: 'condition', relationship: 'related', label: 'Cluster Headache' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'headache', 'pain'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const clusterHeadacheContent: EducationalContent = {
  id: 'neuro-cluster-headache',
  type: 'condition',
  name: 'Cluster Headache',
  alternateNames: ['Cluster Attack', 'Suicide Headache', 'Trigeminal Autonomic Cephalalgia'],
  hpoId: 'HP:0041120',

  levels: {
    1: {
      level: 1,
      summary: 'Cluster headache is an extremely severe headache that occurs in clusters or groups, causing intense pain around one eye with watering eyes and a stuffy nose.',
      explanation: `Cluster headaches are one of the most painful conditions known. They get their name because they come in clusters - periods of frequent attacks.

**What It Feels Like:**
- Excruciating pain around one eye (often described as "worst pain imaginable")
- Always on the same side during a cluster period
- Pain is stabbing, burning, or piercing
- Attacks last 15 minutes to 3 hours
- Can happen 1-8 times per day during a cluster

**Associated Symptoms (same side):**
- Watery or red eye
- Droopy eyelid
- Runny or stuffy nose
- Sweating on forehead/face
- Restlessness - can't stay still

**Cluster Patterns:**
- *Cluster period*: Weeks to months of daily attacks
- *Remission*: Months to years without attacks
- Often occur at same time each day (often at night)
- Often occur same time each year (seasonal)

**Key Differences from Migraine:**
- Shorter duration
- Cannot lie still - need to pace or rock
- Autonomic symptoms (eye/nose) prominent
- More common in men`,
      keyTerms: [
        { term: 'cluster headache', definition: 'Extremely severe headache occurring in clusters with eye watering and nose symptoms' },
        { term: 'cluster period', definition: 'Weeks to months when attacks occur regularly' },
        { term: 'remission', definition: 'Time between cluster periods with no attacks' },
      ],
      analogies: [
        'The pain of cluster headache has been compared to a hot poker being pushed through your eye.',
        'Cluster periods are like seasons - attacks come and go in predictable patterns.',
      ],
      examples: [
        'A man wakes at 2 AM every night for weeks with searing pain behind his right eye, with tearing and nose stuffiness on that side.',
        'Someone paces the floor and rocks during attacks because lying still makes the pain worse.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cluster headache is a trigeminal autonomic cephalalgia causing severe unilateral orbital/temporal pain with ipsilateral cranial autonomic features, occurring in attack patterns.',
      explanation: `**Classification:**

**Trigeminal Autonomic Cephalalgias (TACs):**
- Cluster headache (most common TAC)
- Paroxysmal hemicrania
- SUNCT/SUNA
- Hemicrania continua

**Episodic vs Chronic:**
- *Episodic*: Cluster periods lasting 7 days to 1 year, separated by remissions ≥3 months
- *Chronic*: Attacks for >1 year without remission ≥3 months

**ICHD-3 Criteria:**
- At least 5 attacks fulfilling:
  - Severe unilateral orbital/supraorbital/temporal pain lasting 15-180 minutes
  - Either or both:
    - At least one ipsilateral: conjunctival injection, lacrimation, nasal congestion, rhinorrhea, forehead sweating, miosis, ptosis, eyelid edema
    - Sense of restlessness or agitation
  - Frequency: One every other day to 8 per day

**Epidemiology:**
- Prevalence: ~0.1%
- Male:female 3-4:1
- Onset typically 20-40 years
- Strong circadian and circannual periodicity

**Triggers (during cluster):**
- Alcohol
- Nitrates
- Strong odors
- Sleep disturbance

**Pathophysiology (basic):**
- Hypothalamic activation (circadian clock)
- Trigeminal nerve activation
- Parasympathetic outflow (autonomic features)`,
      keyTerms: [
        { term: 'trigeminal autonomic cephalalgia', definition: 'Group of headaches with trigeminal pain and cranial autonomic symptoms' },
        { term: 'conjunctival injection', definition: 'Redness of the eye from dilated blood vessels' },
        { term: 'ptosis', definition: 'Drooping of the eyelid', pronunciation: 'TOH-sis' },
        { term: 'circadian', definition: 'Following a roughly 24-hour cycle' },
      ],
      analogies: [
        'The hypothalamus acts like a biological clock that triggers attacks at specific times.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cluster headache treatment requires high-flow oxygen and triptans for acute attacks, with verapamil as first-line preventive during cluster periods.',
      explanation: `**Pathophysiology:**

*Hypothalamic Involvement:*
- Posterior hypothalamus activated during attacks
- Explains circadian/circannual rhythmicity
- Gray matter volume changes

*Trigeminal-Autonomic Reflex:*
- Trigeminal afferents → trigeminal nucleus caudalis
- Reflex activation of parasympathetic outflow
- Superior salivatory nucleus → sphenopalatine ganglion
- Results in lacrimation, rhinorrhea, conjunctival injection

*Sympathetic Involvement:*
- Horner syndrome (partial): ptosis, miosis
- Carotid plexus involvement

**Acute Treatment:**

*First-line:*
- High-flow oxygen: 12-15 L/min via non-rebreather mask, 15-20 min
  - Effective in 78% within 15 minutes
  - Safe, no contraindications
- Sumatriptan subcutaneous 6mg (most rapid)
  - Effective in 10-15 minutes
  - Can use up to 2x/day
- Zolmitriptan nasal spray 5mg

*Second-line:*
- Intranasal lidocaine
- Oral triptans (slower onset)

**Transitional Treatment (bridge to prevention):**
- Prednisone taper: 60-80mg x 5 days, taper over 2-3 weeks
- Greater occipital nerve block
- Useful for rapid control while verapamil takes effect

**Preventive Treatment:**

*First-line:*
- Verapamil: 240-960mg/day in divided doses
  - Start 80mg TID, titrate every 2 weeks
  - Requires ECG monitoring (heart block risk)
  - May need high doses

*Second-line:*
- Lithium: 600-1200mg/day (monitor levels)
- Topiramate
- Melatonin 10mg at night

*Surgical (refractory):*
- Occipital nerve stimulation
- Sphenopalatine ganglion stimulation
- Deep brain stimulation (hypothalamus)

**Lifestyle:**
- Absolute alcohol avoidance during cluster
- Maintain regular sleep schedule
- Avoid known triggers`,
      keyTerms: [
        { term: 'high-flow oxygen', definition: '12-15 L/min via non-rebreather mask for acute cluster attack' },
        { term: 'sphenopalatine ganglion', definition: 'Parasympathetic relay responsible for autonomic symptoms in cluster' },
        { term: 'transitional therapy', definition: 'Short-term treatment to bridge while preventive takes effect' },
      ],
      clinicalNotes: 'Prescribe home oxygen (12-15 L/min) for all cluster patients. Subcutaneous sumatriptan is fastest acute treatment. Verapamil requires ECG monitoring for heart block.',
    },
    4: {
      level: 4,
      summary: 'Advanced cluster headache management involves differentiating TAC subtypes, utilizing neuromodulation, and managing refractory cases with specialized interventions.',
      explanation: `**Differential Diagnosis of TACs:**

| Feature | Cluster | Paroxysmal Hemicrania | SUNCT/SUNA |
|---------|---------|----------------------|------------|
| Duration | 15-180 min | 2-30 min | 1-600 sec |
| Frequency | 1-8/day | 5-40/day | 3-200/day |
| Gender | M > F | F > M | M > F |
| Response | O2, triptans | Indomethacin | Lamotrigine |

*Paroxysmal Hemicrania:*
- Absolute response to indomethacin (diagnostic)
- Shorter, more frequent attacks
- "Indomethacin-responsive TAC"

*SUNCT/SUNA:*
- Very brief attacks (seconds to minutes)
- Very high frequency
- Triggered by cutaneous stimuli
- Treatment: Lamotrigine, topiramate

*Hemicrania Continua:*
- Continuous baseline with exacerbations
- Indomethacin-responsive

**Advanced Diagnostics:**
- MRI brain with contrast (exclude secondary causes)
- Pituitary lesions can mimic cluster
- Cavernous sinus pathology
- Consider indomethacin trial if atypical

**Neuromodulation Options:**

*Non-invasive:*
- Vagus nerve stimulation (gammaCore)
- Sphenopalatine ganglion stimulation (Pulsante)
- Supraorbital stimulation

*Invasive (refractory):*
- Occipital nerve stimulation
- Sphenopalatine ganglion stimulation (implanted)
- Deep brain stimulation (posterior hypothalamus)

**Refractory Cluster Headache:**

*Definition:*
- Failure of ≥3 preventive trials
- Including verapamil at adequate dose
- Adequate trial duration

*Management:*
- Combination prevention
- Neuromodulation
- Consider psilocybin (emerging evidence)
- Headache specialty center referral

**Special Considerations:**

*Chronic Cluster:*
- More difficult to treat
- Higher doses often needed
- Consider combination therapy
- Earlier neuromodulation referral

*Secondary Cluster-like:*
- Pituitary adenoma
- Arteriovenous malformation
- Cavernous sinus mass
- Must image all patients`,
      keyTerms: [
        { term: 'SUNCT', definition: 'Short-lasting Unilateral Neuralgiform headache with Conjunctival injection and Tearing' },
        { term: 'SUNA', definition: 'Short-lasting Unilateral Neuralgiform headache with Autonomic symptoms' },
        { term: 'gammaCore', definition: 'Non-invasive vagus nerve stimulator for cluster treatment' },
        { term: 'indomethacin-responsive', definition: 'TACs that respond absolutely to indomethacin (diagnostic)' },
      ],
      clinicalNotes: 'Always MRI to exclude secondary cause. Try indomethacin if atypical features. Consider SUNCT/SUNA if very brief attacks. Neuromodulation for refractory cases.',
    },
    5: {
      level: 5,
      summary: 'Cluster headache involves hypothalamic-trigeminal-autonomic circuitry with emerging targets including CGRP, PACAP, and psilocybin, alongside advanced neuromodulation strategies.',
      explanation: `**Advanced Pathophysiology:**

*Hypothalamic Network:*
- Posterior hypothalamus: "Cluster generator"
- PET/fMRI show activation during attacks
- Connections to trigeminal nucleus, autonomic nuclei
- Circadian regulation disrupted

*CGRP and PACAP:*
- CGRP elevated during attacks
- PACAP elevated interictally
- Both can trigger attacks
- Therapeutic targets (antibodies in trials)

*Genetics:*
- Familial clustering (5-20%)
- HCRTR2 gene variants
- CLOCK gene polymorphisms
- Complex polygenic

**Emerging Therapeutics:**

*CGRP Pathway:*
- Galcanezumab: FDA approved for episodic cluster
- First CGRP antibody for cluster
- Other CGRP mAbs in trials

*Psilocybin and Psychedelics:*
- Patient-reported efficacy
- Clinical trials ongoing
- May reset hypothalamic circuitry
- Single dose may abort cluster period

*Other Novel Targets:*
- PACAP antagonists
- Orexin receptor modulators
- Somatostatin analogs

**Neuromodulation Evidence:**

*Occipital Nerve Stimulation:*
- Largest evidence base in cluster
- 60-80% responder rate
- Both episodic and chronic

*Sphenopalatine Ganglion Stimulation:*
- On-demand treatment
- Pathway 1/2 trials positive
- Dual acute and preventive effects

*Deep Brain Stimulation:*
- Posterior hypothalamus target
- Reserved for most refractory
- Risk of serious complications
- Variable outcomes

**Quality and Outcomes:**

*Attack-based outcomes:*
- Pain-free at 15 minutes
- Attack severity reduction

*Period-based outcomes:*
- Attack frequency reduction
- Cluster period duration
- Remission induction

*Disability:*
- Cluster headache scales (CHQ)
- Quality of life measures
- Work productivity

**Clinical Pearls:**
1. Oxygen is first-line acute treatment - prescribe for all patients
2. Subcutaneous sumatriptan fastest pharmacologic acute option
3. Verapamil requires ECG monitoring - titrate to high doses if needed
4. Steroids bridge to prevention but limit duration
5. Alcohol absolutely prohibited during cluster period
6. MRI mandatory to exclude secondary cause
7. Galcanezumab FDA-approved for episodic cluster
8. Consider psilocybin for refractory cases (clinical trial or supervised use)`,
      keyTerms: [
        { term: 'HCRTR2', definition: 'Hypocretin receptor 2 gene - associated with cluster headache' },
        { term: 'orexin', definition: 'Hypothalamic neuropeptide regulating arousal and feeding - potential target' },
        { term: 'galcanezumab', definition: 'CGRP monoclonal antibody FDA-approved for episodic cluster headache' },
      ],
      clinicalNotes: `Expert approach:
1. Confirm diagnosis (ICHD-3 criteria)
2. MRI brain to exclude secondary
3. Acute: Oxygen + sumatriptan SC
4. Transitional: Steroids + nerve block
5. Preventive: Verapamil (monitor ECG)
6. Refractory: Consider galcanezumab, neuromodulation
7. Emerging: Psilocybin clinical trials`,
    },
  },

  media: [
    {
      id: 'cluster-autonomic-features',
      type: 'image',
      filename: 'cluster_autonomic_features.jpg',
      title: 'Cluster Headache Autonomic Features',
      description: 'Ptosis, miosis, lacrimation, conjunctival injection',
    },
  ],

  citations: [
    {
      id: 'may-cluster-2020',
      type: 'article',
      title: 'Cluster headache: Pathophysiology and treatment',
      authors: ['May A'],
      source: 'Lancet Neurology',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-migraine', targetType: 'condition', relationship: 'related', label: 'Migraine' },
    { targetId: 'neuro-trigeminal-neuralgia', targetType: 'condition', relationship: 'related', label: 'Trigeminal Neuralgia' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'headache', 'pain', 'emergency'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const headacheDisordersContent = {
  migraine: migraineContent,
  tensionType: tensionHeadacheContent,
  cluster: clusterHeadacheContent,
};

export default headacheDisordersContent;
