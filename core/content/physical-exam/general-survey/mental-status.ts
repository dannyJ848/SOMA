/**
 * Mental Status Examination
 *
 * Comprehensive content on mental status assessment including level of consciousness,
 * orientation, cognition, and psychiatric evaluation.
 */

import { EducationalContent } from '../../types';

export const mentalStatus: EducationalContent = {
  id: 'physical-exam-general-survey-mental-status',
  type: 'concept',
  name: 'Mental Status Examination',
  alternateNames: ['MSE', 'Mental Status Exam', 'Cognitive Assessment'],

  levels: {
    1: {
      level: 1,
      summary: 'The mental status exam checks how well your brain is working by looking at your alertness, memory, and thinking.',
      explanation: `When doctors check your mental status, they're making sure your brain is working properly. This helps them understand if there might be a problem.

**What Doctors Check:**

**1. Are you awake and alert?**
- Wide awake and responding normally
- Sleepy but can be woken up
- Hard to wake up
- Unconscious (won't wake up)

**2. Do you know where you are?**
- What's your name?
- Where are you right now?
- What day/date is it?
- What's happening?

**3. How is your memory?**
- Can you remember what happened today?
- Can you remember things from long ago?
- Can you remember three words the doctor just told you?

**4. How is your thinking?**
- Can you follow a conversation?
- Can you do simple math in your head?
- Can you name common objects?

**5. How are you feeling?**
- Are you happy, sad, worried, or angry?
- Do your emotions make sense for the situation?

**Why It Matters:**
Changes in mental status can be a sign of:
- Infection (especially in older people)
- Problems with blood sugar or oxygen
- Medication side effects
- Brain problems (stroke, injury)
- Mental health conditions`,
      keyTerms: [
        { term: 'mental status', definition: 'How well your brain is working, including being awake, thinking, and remembering' },
        { term: 'orientation', definition: 'Knowing who you are, where you are, and what time it is' },
        { term: 'alert', definition: 'Being wide awake and aware of your surroundings' },
        { term: 'confused', definition: 'Having trouble thinking clearly or knowing what\'s happening' },
      ],
      analogies: [
        'Your brain is like a computer - the mental status exam checks if all the programs are running correctly.',
        'Orientation is like GPS for your mind - it helps you know where and when you are.',
      ],
      examples: [
        'A doctor might ask you to remember three words (like "apple, table, penny") and then ask you to repeat them later.',
        'Being asked to spell "WORLD" backwards helps check attention and concentration.',
      ],
    },
    2: {
      level: 2,
      summary: 'The mental status examination systematically assesses level of consciousness, orientation, attention, memory, language, and mood to identify neurological or psychiatric pathology.',
      explanation: `## Components of Mental Status Examination

**1. Level of Consciousness (LOC)**
| Level | Description |
|-------|-------------|
| Alert | Awake, aware, responds appropriately |
| Lethargic | Drowsy, easily aroused, may drift off |
| Obtunded | Difficult to arouse, confused when awake |
| Stuporous | Requires vigorous stimulation to arouse |
| Comatose | Unarousable, no purposeful response |

**Glasgow Coma Scale (GCS):**
| Component | Response | Score |
|-----------|----------|-------|
| Eye Opening | Spontaneous / To voice / To pain / None | 4/3/2/1 |
| Verbal | Oriented / Confused / Inappropriate / Incomprehensible / None | 5/4/3/2/1 |
| Motor | Obeys / Localizes / Withdraws / Flexion / Extension / None | 6/5/4/3/2/1 |

Total: 3-15 (≤8 = severe, 9-12 = moderate, 13-15 = mild)

**2. Orientation**
- Person: Name, age, date of birth
- Place: Location (building, city, state)
- Time: Date, day, month, year, season
- Situation: Why they're being examined

**3. Attention and Concentration**
- Serial 7s: Count backward from 100 by 7s
- WORLD backwards
- Digit span: Repeat 5-7 digits forward, 4-5 backward
- Months backwards

**4. Memory**
| Type | Assessment |
|------|------------|
| Immediate | Repeat 3 words immediately |
| Short-term | Recall 3 words after 5 minutes |
| Long-term | Historical facts, personal history |

**5. Language**
- Fluency: Spontaneous speech quality
- Comprehension: Follow commands
- Repetition: Repeat phrases
- Naming: Identify objects
- Reading and writing

**6. Executive Function**
- Clock drawing test
- Abstract reasoning (proverbs, similarities)
- Judgment and insight

**7. Mood and Affect**
| Term | Definition |
|------|------------|
| Mood | Sustained emotional state (patient report) |
| Affect | Observable emotional expression |
| Congruent | Affect matches mood and situation |
| Flat | Little emotional expression |
| Labile | Rapidly changing emotions |

## Screening Tools

**Mini-Mental State Examination (MMSE):**
- 30 points total
- <24: Suggests cognitive impairment
- Assesses: Orientation, memory, attention, language, visuospatial

**Montreal Cognitive Assessment (MoCA):**
- 30 points total
- <26: Suggests cognitive impairment
- More sensitive for mild cognitive impairment
- Tests executive function more thoroughly`,
      keyTerms: [
        { term: 'Glasgow Coma Scale', definition: 'Standardized scoring system for level of consciousness based on eye, verbal, and motor responses' },
        { term: 'MMSE', definition: 'Mini-Mental State Examination; standardized cognitive screening tool (30 points)' },
        { term: 'orientation', definition: 'Awareness of person, place, time, and situation' },
        { term: 'affect', definition: 'Observable emotional expression, distinct from internally experienced mood' },
        { term: 'executive function', definition: 'Higher-order cognitive abilities including planning, judgment, and abstract reasoning' },
      ],
    },
    3: {
      level: 3,
      summary: 'Mental status assessment requires understanding of neuroanatomical correlates, standardized testing protocols, and differentiation between delirium, dementia, and psychiatric disorders.',
      explanation: `## Neuroanatomical Correlates

**Arousal and Attention:**
- Reticular activating system (brainstem → thalamus → cortex)
- Right parietal lobe (sustained attention)
- Frontal lobes (selective attention)

**Memory Systems:**
| Type | Neuroanatomy | Example Deficit |
|------|--------------|-----------------|
| Working memory | Prefrontal cortex | Difficulty following multi-step instructions |
| Episodic (explicit) | Hippocampus, medial temporal | Amnesia (new learning) |
| Semantic | Temporal neocortex | Word-finding difficulty |
| Procedural (implicit) | Basal ganglia, cerebellum | Motor skill deficits |

**Language:**
| Area | Location | Deficit |
|------|----------|---------|
| Broca's | Left inferior frontal | Non-fluent aphasia |
| Wernicke's | Left posterior superior temporal | Fluent aphasia, comprehension deficit |
| Arcuate fasciculus | Connecting pathway | Conduction aphasia (repetition deficit) |
| Angular gyrus | Left parietal | Alexia, agraphia |

**Executive Function:**
- Prefrontal cortex (dorsolateral: planning; orbitofrontal: judgment)
- Anterior cingulate (motivation, error monitoring)

## Delirium vs. Dementia

| Feature | Delirium | Dementia |
|---------|----------|----------|
| Onset | Acute (hours to days) | Insidious (months to years) |
| Course | Fluctuating | Progressive, stable |
| Attention | Impaired (hallmark) | Usually preserved early |
| Consciousness | Altered | Clear (until late) |
| Reversibility | Usually reversible | Usually irreversible |
| Duration | Days to weeks | Permanent |

**Confusion Assessment Method (CAM) for Delirium:**
1. Acute onset and fluctuating course AND
2. Inattention AND
3. Disorganized thinking OR altered level of consciousness

**Delirium Etiologies (I WATCH DEATH):**
- Infection
- Withdrawal
- Acute metabolic
- Trauma
- CNS pathology
- Hypoxia
- Deficiencies (B12, thiamine)
- Endocrinopathies
- Acute vascular
- Toxins/drugs
- Heavy metals

## Standardized Cognitive Assessment

**Montreal Cognitive Assessment (MoCA) Components:**
| Domain | Test | Points |
|--------|------|--------|
| Visuospatial/Executive | Trail making B, cube copy, clock | 5 |
| Naming | Lion, rhinoceros, camel | 3 |
| Attention | Digit span, vigilance, serial 7s | 6 |
| Language | Sentence repetition, fluency | 3 |
| Abstraction | Similarities | 2 |
| Delayed recall | 5 words at 5 minutes | 5 |
| Orientation | Date, place | 6 |

**MMSE Limitations:**
- Ceiling effects (may miss mild impairment)
- Educational/cultural bias
- Limited executive function testing
- Not sensitive to early Alzheimer's

## Aphasia Classification

| Type | Fluency | Comprehension | Repetition | Location |
|------|---------|---------------|------------|----------|
| Broca's | Non-fluent | Intact | Impaired | Frontal |
| Wernicke's | Fluent | Impaired | Impaired | Temporal |
| Conduction | Fluent | Intact | Impaired | Arcuate fasciculus |
| Global | Non-fluent | Impaired | Impaired | Large MCA |
| Transcortical motor | Non-fluent | Intact | Intact | Frontal (ACA watershed) |
| Transcortical sensory | Fluent | Impaired | Intact | Temporal-parietal (PCA) |
| Anomic | Fluent | Intact | Intact | Angular gyrus |

## Neglect and Agnosia

**Hemispatial Neglect:**
- Usually right parietal lesion
- Ignores left side of space
- Tests: Line bisection, cancellation tasks, clock drawing

**Agnosia Types:**
| Type | Description | Location |
|------|-------------|----------|
| Visual object | Cannot recognize objects by sight | Bilateral occipitotemporal |
| Prosopagnosia | Cannot recognize faces | Right fusiform gyrus |
| Anosognosia | Unawareness of deficit | Right parietal |
| Autotopagnosia | Cannot identify body parts | Left parietal |`,
      keyTerms: [
        { term: 'CAM', definition: 'Confusion Assessment Method; validated tool for delirium diagnosis requiring acute onset with attention impairment' },
        { term: 'Broca aphasia', definition: 'Non-fluent aphasia with intact comprehension from left inferior frontal lesion' },
        { term: 'Wernicke aphasia', definition: 'Fluent aphasia with impaired comprehension from left posterior temporal lesion' },
        { term: 'hemispatial neglect', definition: 'Failure to attend to one side of space, usually left side from right parietal lesion' },
        { term: 'anosognosia', definition: 'Unawareness of one\'s own deficit, commonly seen with right hemisphere strokes' },
      ],
      clinicalNotes: 'In elderly patients with acute confusion, always consider delirium over dementia. The fluctuating course and attention impairment distinguish delirium and represent a medical emergency.',
    },
    4: {
      level: 4,
      summary: 'Advanced mental status assessment integrates neuropsychological testing, neuroimaging correlates, and differentiation of neurodegenerative disorders to guide diagnosis and management.',
      explanation: `## Advanced Cognitive Assessment

### Neuropsychological Domains and Tests

**Attention and Processing Speed:**
| Test | Description | Interpretation |
|------|-------------|----------------|
| Trail Making A | Connect numbered circles | Processing speed |
| Digit Symbol Coding | Symbol substitution | Processing speed, attention |
| Continuous Performance Test | Sustained vigilance | ADHD, frontal dysfunction |

**Executive Function:**
| Test | Description | Dysfunction Suggests |
|------|-------------|---------------------|
| Trail Making B | Alternating numbers/letters | Frontal/executive |
| Wisconsin Card Sorting | Rule learning, set shifting | Frontal lobe |
| Stroop Test | Inhibition of automatic response | Frontal/anterior cingulate |
| Tower Tests | Planning, sequencing | Dorsolateral prefrontal |
| Verbal fluency | Word generation (phonemic/semantic) | Frontal/temporal |

**Memory Assessment:**
| Test | Measures | Pattern in AD |
|------|----------|---------------|
| Rey Auditory Verbal Learning | Verbal learning/memory | Rapid forgetting, poor recognition |
| Rey Complex Figure | Visuospatial memory | Encoding deficit |
| Logical Memory (WMS) | Narrative memory | Impaired delayed recall |
| Boston Naming Test | Naming/semantic | Word-finding difficulty |

### Dementia Subtypes

**Alzheimer's Disease:**
- Memory predominant (hippocampal)
- Progressive language/visuospatial decline
- Biomarkers: Amyloid PET, CSF Aβ42↓, tau↑
- MRI: Medial temporal atrophy, posterior cortical atrophy variant

**Frontotemporal Dementia:**
| Variant | Features | Atrophy Pattern |
|---------|----------|-----------------|
| Behavioral (bvFTD) | Disinhibition, apathy, loss of empathy | Frontal, anterior temporal |
| Semantic (svPPA) | Word comprehension loss | Left anterior temporal |
| Nonfluent (nfvPPA) | Effortful speech, agrammatism | Left posterior frontal |

**Lewy Body Dementia:**
- Visual hallucinations (detailed, formed)
- Parkinsonism
- REM sleep behavior disorder
- Cognitive fluctuations
- Severe neuroleptic sensitivity

**Vascular Cognitive Impairment:**
- Stepwise decline or insidious progression
- Executive/attention > memory
- Neuroimaging: Strategic infarcts, white matter disease
- Risk factors: Hypertension, diabetes, smoking

### Differential Diagnosis by Pattern

**Memory-Predominant:**
1. Alzheimer's disease
2. Hippocampal sclerosis
3. Herpes encephalitis
4. Korsakoff syndrome

**Executive-Predominant:**
1. Vascular dementia
2. Frontotemporal dementia
3. Normal pressure hydrocephalus
4. Progressive supranuclear palsy

**Language-Predominant:**
1. Primary progressive aphasia
2. Left hemisphere stroke
3. Alzheimer's (logopenic variant)

**Visuospatial-Predominant:**
1. Posterior cortical atrophy
2. Lewy body dementia
3. Corticobasal degeneration

### Delirium - Advanced Concepts

**Pathophysiology:**
- Cholinergic deficit (anticholinergic drugs precipitate)
- Dopaminergic excess (antipsychotics treat)
- Neuroinflammation (cytokines, BBB disruption)
- Neurotransmitter imbalances (GABA, glutamate)

**Subtypes:**
| Type | Features | Recognition |
|------|----------|-------------|
| Hyperactive | Agitation, hallucinations | Usually recognized |
| Hypoactive | Lethargy, withdrawal | Often missed |
| Mixed | Fluctuates between both | Most common |

**Risk Factors:**
- Pre-existing cognitive impairment (strongest predictor)
- Age >65
- Severe illness
- Sensory impairment
- Polypharmacy
- Infection, surgery, ICU admission

### Coma Assessment

**Brainstem Reflexes:**
| Reflex | Tests | Level |
|--------|-------|-------|
| Pupillary | Light response | Midbrain |
| Corneal | Blink to touch | Pons (V/VII) |
| Oculocephalic | Doll's eyes | Pons (MLF) |
| Oculovestibular | Cold calorics | Pons (vestibular) |
| Gag | Pharyngeal stimulation | Medulla (IX/X) |
| Cough | Tracheal stimulation | Medulla (X) |

**Herniation Syndromes:**
| Type | Findings | Mechanism |
|------|----------|-----------|
| Uncal | Ipsilateral pupil dilation, contralateral hemiparesis | CN III compression |
| Central | Bilateral small pupils → midposition fixed | Diencephalon → brainstem |
| Tonsillar | Respiratory arrest, cardiovascular collapse | Brainstem compression |

### Psychiatric Assessment

**Full MSE Components:**
1. Appearance: Grooming, attire, hygiene
2. Behavior: Psychomotor activity, cooperation
3. Speech: Rate, rhythm, volume, tone
4. Mood and Affect: Subjective vs. observed
5. Thought Process: Linear, tangential, loose associations
6. Thought Content: Delusions, obsessions, suicidal ideation
7. Perceptions: Hallucinations (modality)
8. Cognition: Orientation, memory, attention
9. Insight: Awareness of illness
10. Judgment: Decision-making capacity`,
      keyTerms: [
        { term: 'executive function', definition: 'Higher-order cognitive processes including planning, inhibition, cognitive flexibility, mediated by prefrontal cortex' },
        { term: 'frontotemporal dementia', definition: 'Degenerative dementia affecting frontal and temporal lobes; behavioral, semantic, or nonfluent variants' },
        { term: 'posterior cortical atrophy', definition: 'Alzheimer variant with prominent visuospatial/visual processing deficits from posterior cortical involvement' },
        { term: 'hypoactive delirium', definition: 'Delirium subtype with lethargy and decreased responsiveness; frequently unrecognized' },
        { term: 'uncal herniation', definition: 'Brain herniation through tentorial notch causing ipsilateral pupil dilation from CN III compression' },
      ],
      clinicalNotes: 'Hypoactive delirium is the most commonly missed subtype. Any acute change from baseline cognition warrants delirium workup regardless of agitation level.',
    },
    5: {
      level: 5,
      summary: 'Expert-level mental status assessment encompasses advanced neuroimaging interpretation, biomarker integration, capacity evaluation, and management of complex neurobehavioral disorders.',
      explanation: `## Advanced Neuroimaging in Cognitive Disorders

### Structural MRI Patterns

**Alzheimer's Disease:**
- Medial temporal lobe atrophy (MTA score 0-4)
- Posterior cingulate/precuneus atrophy
- Posterior cortical atrophy pattern: Occipitoparietal
- GCA (global cortical atrophy) scale

**Frontotemporal Dementia:**
- bvFTD: Frontal > temporal, often asymmetric
- svPPA: Left > right anterior temporal ("knife-edge" gyri)
- nfvPPA: Left posterior frontal, insula

**Vascular Cognitive Impairment:**
- Fazekas scale for white matter hyperintensities
- Strategic infarcts: Thalamus, caudate, angular gyrus
- Microbleeds on susceptibility-weighted imaging

**Lewy Body Dementia:**
- Relative hippocampal sparing vs. AD
- Midbrain atrophy (hummingbird sign in PSP)
- DaTscan: Reduced striatal uptake

### Molecular Imaging

**Amyloid PET (Florbetapir, Florbetaben, Flutemetamol):**
- Detects fibrillar amyloid-β plaques
- Positive in AD, some cognitively normal elderly
- Negative: Rules out AD pathology with high NPV

**Tau PET (Flortaucipir):**
- Detects neurofibrillary tangles
- Correlates with cognitive stage better than amyloid
- Patterns distinguish AD from FTLD-tau

**FDG-PET:**
- Posterior temporoparietal hypometabolism: AD
- Frontal hypometabolism: FTD
- Occipital hypometabolism: DLB

### CSF Biomarkers

| Biomarker | AD Pattern | Significance |
|-----------|------------|--------------|
| Aβ42 | Decreased | Amyloid deposition |
| Total tau | Increased | Neurodegeneration |
| Phospho-tau | Increased | Tangle formation |
| Aβ42/40 ratio | Decreased | More specific than Aβ42 alone |
| NfL | Increased | Axonal damage (non-specific) |

**AT(N) Classification:**
- A: Amyloid (PET or CSF Aβ42)
- T: Tau (PET or CSF p-tau)
- N: Neurodegeneration (MRI, FDG-PET, CSF t-tau)
- Example: A+T+N+ = Alzheimer's disease

### Capacity Evaluation

**Medical Decision-Making Capacity:**
Four abilities (MacArthur criteria):
1. Understanding: Comprehend relevant information
2. Appreciation: Apply information to own situation
3. Reasoning: Weigh options, consider consequences
4. Expression: Communicate a choice

**Assessment Tools:**
- MacCAT-T (MacArthur Competence Assessment Tool - Treatment)
- Aid to Capacity Evaluation (ACE)
- Mini-Mental State Exam (insufficient alone)

**Capacity vs. Competency:**
| Term | Definition | Who Determines |
|------|------------|----------------|
| Capacity | Clinical assessment of abilities | Clinician |
| Competency | Legal determination | Court |

### Delirium Prevention and Management

**HELP (Hospital Elder Life Program):**
- Orientation protocols
- Sleep enhancement
- Early mobilization
- Vision/hearing optimization
- Hydration protocols

**Pharmacologic Management:**
| Situation | Approach |
|-----------|----------|
| Prevention | Avoid deliriogenic medications, optimize physiology |
| Agitation (severe) | Low-dose haloperidol or quetiapine |
| Alcohol withdrawal | Benzodiazepines (CIWA protocol) |
| Parkinson's/DLB | Quetiapine (avoid typical antipsychotics) |

**ICU Delirium:**
- ABCDEF bundle implementation
- Daily awakening trials
- Spontaneous breathing trials
- Coordinated pain management
- Delirium monitoring (CAM-ICU)
- Early mobility
- Family engagement

### Neurobehavioral Syndromes

**Frontal Lobe Syndromes:**
| Syndrome | Location | Features |
|----------|----------|----------|
| Dorsolateral | DLPFC | Executive dysfunction, poor planning |
| Orbitofrontal | OFC | Disinhibition, impulsivity, personality change |
| Medial/Cingulate | ACC | Apathy, abulia, akinetic mutism |

**Aprosodia:**
- Right hemisphere dysfunction
- Flat emotional expression and comprehension
- May mimic depression

**Environmental Dependency:**
- Frontal damage
- Utilization behavior (compulsive use of objects)
- Imitation behavior

### Prognostication in Disorders of Consciousness

**Persistent Vegetative State:**
- Wakefulness without awareness
- Preserved sleep-wake cycles
- No purposeful behavior

**Minimally Conscious State:**
- Inconsistent but reproducible awareness
- Following commands intermittently
- Possible improvement trajectory

**Brain Death Determination:**
- Coma (GCS 3)
- Absent brainstem reflexes
- No respiratory drive (apnea test)
- Known irreversible cause
- Confirmatory testing if clinical exam limited

**Prognostic Markers (Post-Cardiac Arrest):**
| Finding | Timing | Prognosis |
|---------|--------|-----------|
| Bilateral absent pupillary reflex | ≥72h | Poor |
| Bilateral absent corneal reflex | ≥72h | Poor |
| Status myoclonus | ≤72h | Poor (with caveats) |
| SSEP absent N20 | ≥24h | Poor |
| NSE >33 μg/L | 24-72h | Poor (assay-dependent) |
| Burst suppression (EEG) | After rewarming | Poor |

### Research and Emerging Directions

**Blood-Based Biomarkers:**
- Plasma Aβ42/40 ratio
- Plasma p-tau181, p-tau217
- NfL (neurofilament light chain)
- GFAP (glial fibrillary acidic protein)

**Digital Cognitive Assessment:**
- Smartphone-based testing
- Continuous monitoring
- Early detection of decline

**Disease-Modifying Therapies:**
- Anti-amyloid antibodies (lecanemab, aducanumab)
- Tau-targeting therapies (trials ongoing)
- Inflammation-targeting approaches`,
      keyTerms: [
        { term: 'AT(N) classification', definition: 'Biomarker-based framework for Alzheimer\'s characterizing Amyloid, Tau, and Neurodegeneration status' },
        { term: 'MacArthur criteria', definition: 'Four abilities assessed in medical decision-making capacity: understanding, appreciation, reasoning, expression' },
        { term: 'minimally conscious state', definition: 'Disorder of consciousness with inconsistent but reproducible evidence of awareness' },
        { term: 'HELP protocol', definition: 'Hospital Elder Life Program; multicomponent delirium prevention intervention' },
        { term: 'plasma p-tau', definition: 'Blood-based biomarker of tau phosphorylation correlating with Alzheimer pathology' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Amyloid PET negative essentially rules out Alzheimer's disease as cause of dementia
2. Capacity is task-specific and can fluctuate - reassess with changed clinical status
3. Hypoactive delirium has worse outcomes than hyperactive - screen all elderly hospital patients
4. Brain death determination requires known irreversible cause and exclusion of confounders
5. Blood-based biomarkers (p-tau217) may soon replace CSF for AD screening
6. DaTscan distinguishes DLB from AD with high sensitivity and specificity
7. For ICU delirium, dexmedetomidine may have advantages over benzodiazepines`,
    },
  },

  media: [
    {
      id: 'gcs-chart',
      type: 'diagram',
      filename: 'gcs-chart.svg',
      title: 'Glasgow Coma Scale',
      description: 'Scoring components for eye, verbal, and motor responses',
    },
    {
      id: 'moca-form',
      type: 'diagram',
      filename: 'moca-assessment.svg',
      title: 'MoCA Assessment',
      description: 'Montreal Cognitive Assessment domains and scoring',
    },
  ],

  citations: [
    {
      id: 'inouye-delirium',
      type: 'article',
      title: 'Delirium in Elderly People',
      authors: ['Inouye, S.K.', 'Westendorp, R.G.', 'Saczynski, J.S.'],
      source: 'The Lancet',
    },
    {
      id: 'strub-black',
      type: 'textbook',
      title: 'The Mental Status Examination in Neurology',
      authors: ['Strub, R.L.', 'Black, F.W.'],
      source: 'F.A. Davis Company',
    },
  ],

  crossReferences: [
    { targetId: 'physical-exam-general-survey-overview', targetType: 'topic', relationship: 'parent', label: 'General Survey' },
    { targetId: 'system-nervous', targetType: 'system', relationship: 'related', label: 'Nervous System' },
    { targetId: 'condition-delirium', targetType: 'condition', relationship: 'related', label: 'Delirium' },
    { targetId: 'condition-dementia', targetType: 'condition', relationship: 'related', label: 'Dementia' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physical-examination', 'neurology', 'psychiatry', 'geriatrics'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'neurology', 'medicine', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default mentalStatus;
