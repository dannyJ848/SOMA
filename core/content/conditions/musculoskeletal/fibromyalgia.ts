/**
 * Fibromyalgia - Comprehensive Educational Content
 *
 * Covers chronic widespread pain syndrome pathophysiology and management.
 */

import { EducationalContent } from '../../types';

export const fibromyalgia: EducationalContent = {
  id: 'condition-fibromyalgia',
  type: 'condition',
  name: 'Fibromyalgia',
  alternateNames: ['Fibromyalgia Syndrome', 'FMS', 'Chronic Widespread Pain'],
  hpoId: 'HP:0030960',

  levels: {
    1: {
      level: 1,
      summary: 'Fibromyalgia is a condition that causes widespread pain throughout the body, along with fatigue and sleep problems.',
      explanation: `Fibromyalgia is a long-term condition that causes pain all over the body. People with fibromyalgia often feel tired and have trouble sleeping.

**Main symptoms:**
- Pain throughout the body
- Fatigue (feeling very tired)
- Sleep problems
- Memory and concentration issues ("fibro fog")
- Headaches
- Depression or anxiety

**What happens in fibromyalgia:**
- The brain processes pain signals differently
- Normal touches may feel painful
- Pain signals are amplified
- Not caused by damage to muscles or joints

**Who gets fibromyalgia:**
- More common in women
- Can occur at any age
- Often starts after physical trauma, infection, or stress
- May run in families

**Treatment:**
- Exercise and physical therapy
- Stress management
- Good sleep habits
- Medications for pain and mood
- Cognitive behavioral therapy

**Important facts:**
- Not an autoimmune disease
- Not caused by inflammation
- Does not damage joints or organs
- Can be managed with treatment`,
      keyTerms: [
        { term: 'chronic pain', definition: 'Pain that lasts for months or longer' },
        { term: 'widespread pain', definition: 'Pain occurring on both sides of the body and above and below the waist' },
        { term: 'fibro fog', definition: 'Memory and concentration problems associated with fibromyalgia' },
        { term: 'central sensitization', definition: 'Increased sensitivity to pain signals in the brain and spinal cord' },
      ],
      analogies: [
        'Fibromyalgia is like a stereo with the volume turned up too high - normal signals feel much stronger than they should.',
        'Think of pain signals as whispers; in fibromyalgia, the brain turns those whispers into shouts.',
      ],
      examples: [
        'A person who feels achy all over, sleeps poorly, and has difficulty concentrating may have fibromyalgia.',
        'Someone who develops widespread pain after a car accident or viral illness may have triggered fibromyalgia.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fibromyalgia is a chronic pain disorder characterized by widespread musculoskeletal pain, fatigue, sleep disturbance, and cognitive difficulties, associated with central sensitization and altered pain processing rather than peripheral tissue pathology.',
      explanation: `## Diagnostic Criteria (ACR 2016)

**Requirements:**
- Widespread pain index (WPI) >=7 and symptom severity (SS) scale >=5
- OR WPI 3-6 and SS scale >=9
- Symptoms present at similar level for >=3 months
- No other disorder explaining the pain

**Widespread Pain Index (0-19):**
- Check painful areas: shoulder, arm, jaw, neck, back, chest, abdomen, hip, leg
- 19 possible sites

**Symptom Severity Scale (0-12):**
- Fatigue
- Waking unrefreshed
- Cognitive symptoms
- Somatic symptoms (headache, IBS, numbness)

## Pathophysiology

**Central sensitization:**
- Decreased pain threshold
- Amplified pain signals in CNS
- Allodynia (pain from non-painful stimuli)
- Hyperalgesia (increased pain from painful stimuli)

**Neurotransmitter abnormalities:**
- Elevated substance P (CSF)
- Reduced serotonin, norepinephrine, dopamine
- Altered endogenous opioid activity

**HPA axis dysfunction:**
- Abnormal cortisol patterns
- Stress response alterations

**Sleep abnormalities:**
- Disrupted sleep architecture
- Reduced slow-wave sleep
- Alpha intrusion during deep sleep

## Associated Symptoms

**Cognitive ("fibro fog"):**
- Memory problems
- Difficulty concentrating
- Word-finding difficulties
- Reduced processing speed

**Somatic:**
- Headaches/migraines
- Temporomandibular disorder
- Irritable bowel syndrome
- Interstitial cystitis
- Restless legs syndrome

**Psychological:**
- Depression (20-80%)
- Anxiety disorders
- PTSD
- Reduced quality of life

**Other:**
- Morning stiffness
- Numbness/tingling
- Sensitivity to light, sound, temperature`,
      keyTerms: [
        { term: 'allodynia', definition: 'Pain from stimuli that are not normally painful' },
        { term: 'hyperalgesia', definition: 'Increased sensitivity to painful stimuli' },
        { term: 'substance P', definition: 'Neuropeptide involved in pain transmission; elevated in fibromyalgia' },
        { term: 'alpha-delta sleep', definition: 'Sleep pattern with intrusion of wakeful brain waves during deep sleep' },
      ],
      analogies: [
        'The pain processing system in fibromyalgia is like a faulty car alarm that goes off at the slightest touch.',
        'Fibromyalgia involves broken volume controls for pain - the brain cannot turn down the pain signals.',
      ],
    },
    3: {
      level: 3,
      summary: 'Fibromyalgia involves complex neurobiological changes including altered descending pain inhibition, neuroinflammatory changes, small fiber neuropathy in subsets, and genetic susceptibility, requiring multimodal management targeting central pain mechanisms.',
      explanation: `## Neurobiology

### Descending Pain Modulation
**Normal pathway:**
- Periaqueductal gray (PAG) and rostral ventromedial medulla (RVM)
- Descending pathways release serotonin and norepinephrine
- Inhibit spinal cord pain transmission

**In fibromyalgia:**
- Reduced descending inhibition
- Impaired conditioned pain modulation
- Dysfunctional "diffuse noxious inhibitory control"
- Genetic variants in COMT, serotonin transporter

### Neuroimaging Findings
**fMRI studies:**
- Increased activation in pain-processing regions
- Insula, anterior cingulate, prefrontal cortex
- Reduced deactivation in default mode network
- Functional connectivity alterations

**Structural changes:**
- Reduced gray matter in some studies
- Correlates with disease duration
- May be reversible with treatment

### Small Fiber Neuropathy
- Subset of fibromyalgia patients
- Reduced intraepidermal nerve fiber density
- Positive skin biopsy
- Suggests peripheral component in some

### Neuroinflammation
- Activated microglia (imaging)
- Elevated inflammatory cytokines
- Mast cell activation
- Links to immune dysfunction theories

## Comorbidities

**Autoimmune rheumatic diseases:**
- Rheumatoid arthritis
- Lupus
- Sjogren syndrome
- Fibromyalgia often coexists

**Mood disorders:**
- Major depression
- Generalized anxiety disorder
- High suicide risk in some studies

**Other pain syndromes:**
- Chronic fatigue syndrome (overlap)
- Myofascial pain syndrome
- Chronic pelvic pain
- Vulvodynia

## Evaluation

**Laboratory workup (to exclude other conditions):**
- CBC, CMP
- ESR, CRP (usually normal)
- Thyroid function (TSH)
- Vitamin D
- CK if muscle symptoms
- Consider celiac serology

**Sleep evaluation:**
- Sleep study if sleep apnea suspected
- Restless legs assessment

**Mental health screening:**
- PHQ-9 for depression
- GAD-7 for anxiety
- PTSD screening if indicated

## Pharmacologic Management

**FDA-approved agents:**
- **Pregabalin** (Lyrica)
  - Calcium channel alpha2-delta ligand
  - 300-450 mg/day divided
  - Side effects: dizziness, weight gain, edema

- **Duloxetine** (Cymbalta)
  - SNRI
  - 60 mg daily
  - Side effects: nausea, dry mouth

- **Milnacipran** (Savella)
  - SNRI
  - Titrate to 100 mg/day
  - Side effects: nausea, hypertension

**Off-label options:**
- Amitriptyline (TCA, often first-line)
- Cyclobenzaprine (muscle relaxant)
- Tramadol (for flares)
- Gabapentin

**Avoid:**
- Opioids (generally ineffective)
- NSAIDs (limited benefit)
- Systemic corticosteroids`,
      keyTerms: [
        { term: 'conditioned pain modulation', definition: 'Ability of one pain stimulus to inhibit another; impaired in fibromyalgia' },
        { term: 'COMT', definition: 'Catechol-O-methyltransferase; enzyme metabolizing catecholamines' },
        { term: 'small fiber neuropathy', definition: 'Damage to small unmyelinated nerve fibers; present in subset of fibromyalgia' },
        { term: 'SNRI', definition: 'Serotonin-norepinephrine reuptake inhibitor; class of antidepressants useful in fibromyalgia' },
      ],
      clinicalNotes: 'Fibromyalgia is a diagnosis of exclusion; rule out inflammatory and endocrine causes. Tender points no longer required for diagnosis. Treat comorbid depression and sleep disorders. Patient education about central pain mechanisms is crucial.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of fibromyalgia includes recognition as a biopsychosocial disorder with significant genetic contribution, overlap with other central sensitivity syndromes, evidence-based non-pharmacologic interventions, and strategies for managing refractory cases.',
      explanation: `## Genetics and Epigenetics

**Family aggregation:**
- First-degree relatives at increased risk
- Genetic heritability ~50%

**Candidate genes:**
- Serotonin system (5-HT2A, 5-HT3, SERT)
- Catecholamines (COMT, ADRB2)
- Dopamine (DRD4)
- Cannabinoid receptors (CNR1)
- Opioid receptors (OPRM1)

**Epigenetic changes:**
- DNA methylation patterns
- May explain environmental triggers
- Reversible potential

## Central Sensitivity Syndromes

**Overlapping conditions:**
- Fibromyalgia
- Chronic fatigue syndrome
- Irritable bowel syndrome
- Temporomandibular disorder
- Tension-type headache
- Myofascial pain syndrome
- Multiple chemical sensitivity
- Interstitial cystitis

**Common mechanisms:**
- Central sensitization
- Dysautonomia
- Neuroendocrine dysfunction
- Shared genetic factors

**Clinical implications:**
- Patient may have multiple diagnoses
- Similar treatments often effective
- High healthcare utilization

## Non-Pharmacologic Treatment

### Exercise Therapy
**Most effective intervention:**
- Aerobic exercise (low impact)
- Strength training
- Tai chi, yoga
- Gradual progression crucial
- Water-based exercise

**Mechanism:**
- Improves descending inhibition
- Releases endorphins
- Improves sleep
- Reduces deconditioning

### Cognitive Behavioral Therapy (CBT)
- Pain coping strategies
- Activity pacing
- Sleep hygiene
- Address catastrophizing
- Acceptance-based approaches

### Mind-Body Therapies
- Mindfulness-based stress reduction (MBSR)
- Biofeedback
- Guided imagery
- Hypnosis
- Meditation

### Other Evidence-Based Approaches
**Acupuncture:**
- Mixed evidence but many patients benefit
- May modulate central pain processing

**Manual therapy:**
- Massage
- Myofascial release
- Chiropractic

### Sleep Optimization
- Sleep hygiene education
- CBT for insomnia (CBT-I)
- Treat sleep apnea
- Consider sleep medications
- Consistent schedule

## Patient Education

**Key points:**
- Real disease with biological basis
- Not "in your head"
- No joint/muscle damage
- Self-management is crucial
- Realistic goals (improvement, not cure)

**Self-management strategies:**
- Pacing activities
- Stress management
- Sleep optimization
- Regular gentle exercise
- Heat therapy

## Refractory Fibromyalgia

**Assessment:**
- Confirm diagnosis
- Address comorbidities
- Medication adherence
- Substance use
- Psychosocial stressors
- Secondary gain issues

**Advanced interventions:**
- Pain rehabilitation programs
- Interdisciplinary clinics
- Low-dose naltrexone (experimental)
- Ketamine infusions (limited evidence)
- Medical cannabis (variable laws/evidence)

**Prognosis:**
- Variable course
- Some improve significantly
- Others have persistent symptoms
- Early intervention better
- Multimodal approach most effective`,
      keyTerms: [
        { term: 'biopsychosocial model', definition: 'Framework considering biological, psychological, and social factors in disease' },
        { term: 'pain catastrophizing', definition: 'Negative cognitive and emotional response to pain; magnification, rumination, helplessness' },
        { term: 'dysautonomia', definition: 'Dysfunction of the autonomic nervous system' },
        { term: 'activity pacing', definition: 'Balancing activity and rest to avoid overexertion and deconditioning' },
      ],
      clinicalNotes: 'Exercise is the most effective treatment for fibromyalgia. CBT and MBSR have strong evidence. Avoid opioids; they are generally ineffective and risky. Address comorbid mood disorders. Multidisciplinary pain programs for refractory cases.',
    },
    5: {
      level: 5,
      summary: 'Frontier fibromyalgia research includes brain network analysis using advanced neuroimaging, immunological and microbiome connections, personalized medicine approaches based on phenotyping, and novel neuromodulation techniques for treatment-resistant cases.',
      explanation: `## Advanced Neuroimaging

### Resting-State fMRI
**Default mode network (DMN):**
- Aberrant connectivity in fibromyalgia
- Correlates with pain intensity
- Potential treatment monitoring biomarker

**Salience network:**
- Hyperconnectivity with pain network
- Predicts pain sensitivity

**Machine learning:**
- Pattern recognition for diagnosis
- Predicting treatment response
- Individual pain phenotyping

### PET Imaging
**TSPO ligands:**
- Microglial activation marker
- Evidence of neuroinflammation
- Potential therapeutic target

**Endogenous opioids:**
- Mu-opioid receptor availability
- Reduced in some pain conditions

### Functional Connectivity
- Dysregulated pain networks
- Sensorimotor cortex changes
- Thalamic connectivity alterations

## Neuroimmune Connections

### Mast Cell Activation
- Elevated mast cells in tissues
- Release histamine, cytokines, nerve growth factor
- May contribute to symptoms
- Mast cell stabilizers (ketotifen) investigational

### Autoimmune Mechanisms
- Antibodies against autonomic receptors (some studies)
- Immune complex deposition
- Overlap with autoimmune disease

### Gut-Brain Axis
**Microbiome alterations:**
- Reduced diversity
- Dysbiosis patterns
- Gut permeability ("leaky gut")

**Therapeutic implications:**
- Probiotics investigational
- Dietary modifications
- Fecal transplant (experimental)

## Personalized Medicine Approaches

### Phenotyping
**Mechanism-based subgroups:**
- Central sensitization predominant
- Peripheral pain generators
- Mood-cognitive predominant
- Sleep dysfunction predominant

**Treatment matching:**
- Tailor to dominant mechanism
- Precision pharmacology
- Individualized exercise programs

### Biomarker Development
**Potential markers:**
- miRNA signatures
- Cytokine profiles
- Genetic risk scores
- Neuroimaging phenotypes

**Goals:**
- Diagnosis
- Treatment selection
- Response monitoring

## Novel Therapeutics

### Low-Dose Naltrexone (LDN)
- 1.5-4.5 mg nightly
- Mechanism: transient opioid blockade -> endorphin increase
- Anti-inflammatory effects
- Evidence growing but limited

### Neuromodulation
**TMS (transcranial magnetic stimulation):**
- Motor cortex stimulation
- Mixed evidence in fibromyalgia
- Non-invasive

**tDCS (transcranial direct current stimulation):**
- Modulates cortical excitability
- Home devices available
- Variable protocols

**Spinal cord stimulation:**
- Limited evidence
- Case reports of benefit

### Cannabinoids
**Medical cannabis:**
- Variable legality
- Limited RCT evidence
- Patient-reported benefit common
- THC:CBD combinations

**Nabilone:**
- Synthetic cannabinoid
- Some evidence for pain and sleep
- CNS side effects

## Future Directions

### Digital Therapeutics
- Smartphone-based CBT
- Wearable activity monitoring
- AI-guided pacing
- Virtual reality for pain/distraction

### Neuroplasticity-Based Interventions
- Targeting maladaptive plasticity
- Graded motor imagery
- Mirror therapy
- Sensory re-education

### Immune-Targeted Therapy
- Anti-inflammatory approaches
- Mast cell stabilizers
- Minocycline (microglial inhibitor)
- IVIG (case reports)

### Research Priorities
- Mechanism stratification
- Objective biomarkers
- Predicting treatment response
- Long-term outcomes
- Cost-effectiveness studies

## Public Health Perspective

**Economic burden:**
- High direct medical costs
- Indirect costs (disability, lost productivity)
- Major cause of chronic disability

**Healthcare utilization:**
- Frequent doctor visits
- Multiple specialists
- Invasive testing (often unnecessary)
- Emergency department visits

**Improving care:**
- Education of providers
- Multidisciplinary clinics
- Early diagnosis
- Evidence-based treatments
- Reducing stigma`,
      keyTerms: [
        { term: 'TSPO', definition: 'Translocator protein; marker of microglial activation' },
        { term: 'LDN', definition: 'Low-dose naltrexone; off-label treatment with growing interest' },
        { term: 'tDCS', definition: 'Transcranial direct current stimulation; non-invasive brain stimulation' },
        { term: 'central sensitivity', definition: 'Increased responsiveness of central pain processing circuits' },
      ],
      clinicalNotes: 'Neuroimaging research supports the biological reality of fibromyalgia. Microglial activation suggests potential for anti-inflammatory approaches. Personalized treatment based on phenotyping is the future direction. TMS and tDCS are promising neuromodulation options.',
    },
  },

  media: [
    {
      id: 'fibromyalgia-pain-areas',
      type: 'diagram',
      filename: 'fibromyalgia-pain-sites.svg',
      title: 'Fibromyalgia Pain Distribution',
      description: 'Common areas of pain in fibromyalgia',
    },
  ],

  citations: [
    {
      id: 'acr-fibromyalgia-2016',
      type: 'article',
      title: '2016 Revisions to the 2010/2011 Fibromyalgia Diagnostic Criteria',
      source: 'Arthritis and Rheumatology',
    },
  ],

  crossReferences: [
    { targetId: 'condition-chronic-fatigue', targetType: 'condition', relationship: 'related', label: 'Chronic Fatigue Syndrome' },
  ],

  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['rheumatology', 'pain medicine'],
    keywords: ['fibromyalgia', 'chronic pain', 'central sensitization', 'widespread pain'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default fibromyalgia;
