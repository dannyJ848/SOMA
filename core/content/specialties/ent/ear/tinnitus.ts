/**
 * Tinnitus - Comprehensive Educational Content
 *
 * Covers tinnitus pathophysiology, types, evaluation, and management.
 */

import { EducationalContent } from '../../../types';

export const tinnitus: EducationalContent = {
  id: 'ent-tinnitus',
  type: 'condition',
  name: 'Tinnitus',
  alternateNames: ['Ringing in Ears', 'Ear Ringing', 'Phantom Sound Perception'],

  levels: {
    1: {
      level: 1,
      summary: 'Tinnitus is when you hear sounds like ringing, buzzing, or humming in your ears that nobody else can hear.',
      explanation: `Have you ever noticed a ringing sound in your ears after being somewhere very loud, like a concert? That's tinnitus! For most people, it goes away quickly, but some people hear these sounds all the time.

**What Does Tinnitus Sound Like?**
People describe tinnitus in different ways:
- Ringing (like a bell)
- Buzzing (like a bee)
- Humming (like a refrigerator)
- Whooshing (like wind or waves)
- Clicking

**Why Does It Happen?**
Tinnitus often happens when:
- You've been around loud noises
- You have earwax blocking your ear
- You're stressed or tired
- You have hearing loss
- You take certain medicines

**Important Things to Know:**
- Tinnitus is very common - millions of people have it
- It's usually not dangerous
- There are ways to make it less bothersome
- If you hear sounds in only one ear, tell a doctor`,
      keyTerms: [
        { term: 'tinnitus', definition: 'Hearing sounds in your ears when there is no actual sound happening' },
        { term: 'ringing', definition: 'A high-pitched sound like a bell that some people hear with tinnitus' },
        { term: 'hearing loss', definition: 'When you cannot hear sounds as well as you used to' },
      ],
      analogies: [
        'Tinnitus is like your ears playing their own radio station that only you can hear.',
        'It is like when a computer fan keeps running even after you turn off the computer - your ears keep making a sound when there is no real sound.',
      ],
      examples: [
        'After a loud concert, you might hear ringing for a few hours - that is temporary tinnitus.',
        'Some people hear a constant buzzing sound that has been there for years.',
      ],
    },
    2: {
      level: 2,
      summary: 'Tinnitus is the perception of sound without an external acoustic stimulus, commonly experienced as ringing, buzzing, or humming, and often associated with hearing loss or noise exposure.',
      explanation: `Tinnitus affects about 10-15% of adults and can significantly impact quality of life. Understanding its causes helps with management.

**Types of Tinnitus:**

1. **Subjective Tinnitus** (most common - 95%):
   - Only the patient can hear the sound
   - Related to hearing pathway dysfunction
   - Often associated with hearing loss

2. **Objective Tinnitus** (rare - 5%):
   - Sound can be heard by examiner
   - Has a physical source (blood vessels, muscles)
   - Often described as pulsatile or clicking

**Common Causes:**

*Ear-Related:*
- Noise-induced hearing loss
- Age-related hearing loss (presbycusis)
- Earwax impaction
- Ear infections
- Meniere's disease

*Other Medical Causes:*
- High blood pressure
- Medications (aspirin, certain antibiotics)
- Head or neck injuries
- Temporomandibular joint (TMJ) problems

**How It Develops:**
When the inner ear is damaged (especially the hair cells that sense sound), the brain may generate phantom sounds to compensate for the missing input.

**Evaluation:**
- Hearing test (audiogram)
- Physical examination of ears
- Blood pressure check
- Sometimes imaging (if pulsatile or one-sided)

**Management:**
- Treat underlying causes
- Hearing aids (if hearing loss present)
- Sound therapy (masking the tinnitus)
- Counseling and stress management`,
      keyTerms: [
        { term: 'subjective tinnitus', definition: 'Tinnitus that only the patient can hear, without an external sound source', pronunciation: 'sub-JEK-tiv TIN-ih-tus' },
        { term: 'objective tinnitus', definition: 'Tinnitus that can be heard by an examiner, caused by actual sounds in the body' },
        { term: 'pulsatile tinnitus', definition: 'Tinnitus that beats in rhythm with the heartbeat, often caused by blood vessel issues' },
        { term: 'presbycusis', definition: 'Age-related hearing loss that commonly occurs in older adults', pronunciation: 'prez-bee-KYOO-sis' },
        { term: 'sound therapy', definition: 'Using external sounds to reduce the perception or annoyance of tinnitus' },
      ],
      analogies: [
        'Subjective tinnitus is like a crossed wire in your hearing system - the brain gets signals that are not real sounds.',
        'Pulsatile tinnitus is like hearing your own heartbeat amplified through a stethoscope in your ear.',
      ],
    },
    3: {
      level: 3,
      summary: 'Tinnitus represents aberrant neural activity in the auditory pathway, typically arising from peripheral deafferentation leading to maladaptive central plasticity, with management focusing on habituation and addressing underlying conditions.',
      explanation: `Tinnitus is a complex phenomenon involving peripheral and central auditory system dysfunction.

**Pathophysiology:**

1. **Peripheral Mechanisms:**
   - Outer hair cell damage reduces cochlear output
   - Spontaneous activity in damaged hair cells
   - Altered firing patterns in auditory nerve fibers
   - Discordant damage between inner and outer hair cells

2. **Central Mechanisms:**
   - Reduced inhibition in dorsal cochlear nucleus
   - Increased spontaneous firing in central auditory pathway
   - Tonotopic map reorganization
   - Cross-modal plasticity
   - Limbic system involvement (emotional response)

**Classification by Etiology:**

*Otologic:*
- Sensorineural hearing loss (most common)
- Noise-induced, presbycusis, ototoxic
- Meniere's disease (fluctuating, with vertigo)
- Acoustic neuroma (unilateral, progressive)
- Otosclerosis

*Neurologic:*
- Head trauma
- Multiple sclerosis
- Cerebrovascular disease

*Somatic:*
- TMJ dysfunction
- Cervical spine pathology
- Muscle tension (tensor tympani, stapedius)

*Vascular (objective, pulsatile):*
- Arteriovenous malformations
- Dural fistulas
- Glomus tumors
- Carotid stenosis
- Benign intracranial hypertension

**Workup:**

*Essential:*
- Complete audiometry with tympanometry
- Speech discrimination testing
- Tinnitus pitch and loudness matching
- Medical history focusing on medications, noise exposure

*When Indicated:*
- MRI internal auditory canals (asymmetric hearing loss, unilateral tinnitus)
- MRA/CTA (pulsatile tinnitus)
- Blood work (metabolic causes)

**Evidence-Based Management:**

1. **Hearing Aids:**
   - First-line for tinnitus with hearing loss
   - Amplification reduces perceived tinnitus

2. **Cognitive Behavioral Therapy (CBT):**
   - Best evidence for reducing tinnitus distress
   - Changes cognitive and emotional response

3. **Tinnitus Retraining Therapy (TRT):**
   - Combines counseling with sound therapy
   - Goal is habituation over 12-24 months

4. **Sound Therapy Options:**
   - Masking devices
   - Notched music therapy
   - White noise generators`,
      keyTerms: [
        { term: 'deafferentation', definition: 'Loss of sensory input to the central nervous system, triggering maladaptive neural changes' },
        { term: 'tonotopic reorganization', definition: 'Changes in the frequency mapping of auditory cortex following hearing loss' },
        { term: 'tinnitus retraining therapy', definition: 'Habituation-based treatment combining directive counseling and low-level sound therapy' },
        { term: 'glomus tumor', definition: 'Paraganglioma of the middle ear or jugular foramen causing pulsatile tinnitus' },
        { term: 'habituation', definition: 'Decreased response to tinnitus over time through neural adaptation' },
      ],
      clinicalNotes: 'Red flags requiring urgent workup: unilateral tinnitus, pulsatile tinnitus, associated neurological symptoms, sudden onset with hearing loss. Acoustic neuroma must be ruled out with MRI for unilateral or asymmetric tinnitus.',
    },
    4: {
      level: 4,
      summary: 'Tinnitus pathogenesis involves cochlear deafferentation triggering homeostatic plasticity in central auditory circuits, with hyperactivity mediated by decreased GABAergic inhibition and increased glutamatergic drive, modulated by non-auditory networks including limbic and attention systems.',
      explanation: `Contemporary understanding of tinnitus integrates peripheral triggers with central neuroplasticity and network-level dysfunction.

**Neurophysiological Mechanisms:**

1. **Cochlear Pathology:**
   - Hair cell loss creates "edge frequencies"
   - Hidden hearing loss (synaptopathy without threshold shift)
   - Type I spiral ganglion neuron degeneration
   - Reduced cochlear output = deafferentation signal

2. **Dorsal Cochlear Nucleus (DCN):**
   - First central station with multisensory integration
   - Fusiform cells show increased spontaneous activity
   - Reduced glycinergic/GABAergic inhibition
   - Somatosensory inputs can modulate tinnitus

3. **Inferior Colliculus and Thalamus:**
   - Burst firing patterns emerge
   - Thalamocortical dysrhythmia
   - Altered oscillatory patterns (gamma, theta)

4. **Auditory Cortex:**
   - Tonotopic map plasticity at lesion edge
   - Hyperactivity in deafferented regions
   - Cross-frequency coupling changes

5. **Non-Auditory Networks:**
   - Limbic system: emotional valence, distress
   - Prefrontal cortex: attention, awareness
   - Insula: interoceptive processing
   - Default mode network: resting-state changes

**Neurotransmitter Changes:**
- Decreased GABA (disinhibition)
- Increased glutamate (excitotoxicity risk)
- Altered serotonin, dopamine (mood effects)
- Neuroinflammation (microglial activation)

**Advanced Diagnostics:**

*Functional Imaging:*
- fMRI: Identifies hyperactive auditory regions
- PET: Metabolic changes in auditory and limbic areas
- MEG: Altered oscillatory dynamics

*Electrophysiology:*
- ABR: Normal in most subjective tinnitus
- Extended high-frequency audiometry
- OAEs: May be normal despite tinnitus

**Emerging Therapeutics:**

1. **Neuromodulation:**
   - Transcranial magnetic stimulation (rTMS)
   - Transcranial direct current stimulation (tDCS)
   - Vagus nerve stimulation paired with sound
   - Bimodal stimulation (auditory + somatosensory)

2. **Pharmacological Targets:**
   - GABA agonists
   - NMDA receptor modulators
   - Potassium channel openers
   - Currently no FDA-approved medications

3. **Precision Medicine Approaches:**
   - Tinnitus subtyping by etiology
   - Biomarker development
   - Individualized treatment protocols

**Tinnitus Questionnaires:**
- Tinnitus Handicap Inventory (THI)
- Tinnitus Functional Index (TFI)
- Visual analog scales for loudness, annoyance`,
      keyTerms: [
        { term: 'thalamocortical dysrhythmia', definition: 'Abnormal oscillatory patterns between thalamus and cortex proposed to underlie tinnitus perception' },
        { term: 'hidden hearing loss', definition: 'Cochlear synaptopathy causing suprathreshold hearing difficulties despite normal audiogram thresholds' },
        { term: 'fusiform cells', definition: 'Principal output neurons of dorsal cochlear nucleus implicated in tinnitus generation' },
        { term: 'bimodal stimulation', definition: 'Treatment approach combining auditory and somatosensory stimulation to reduce tinnitus' },
        { term: 'homeostatic plasticity', definition: 'Neural adaptation to maintain stable activity levels, which may become maladaptive in tinnitus' },
      ],
      clinicalNotes: 'Tinnitus severity correlates poorly with audiometric findings. Many patients with severe tinnitus have mild hearing loss, while those with profound loss may have minimal tinnitus. Limbic involvement explains why distress levels vary dramatically between patients with similar tinnitus characteristics.',
    },
    5: {
      level: 5,
      summary: 'Tinnitus research advances focus on identifying neural biomarkers for subtyping, developing targeted neuromodulation protocols, investigating regenerative therapies for cochlear synaptopathy, and applying network neuroscience to understand the distributed brain changes underlying chronic tinnitus.',
      explanation: `State-of-the-art tinnitus research integrates basic neuroscience with clinical trials and precision medicine approaches.

**Current Research Frontiers:**

1. **Cochlear Synaptopathy and Hidden Hearing Loss:**
   - Noise exposure damages ribbon synapses before hair cells
   - Normal thresholds but reduced suprathreshold responses
   - EHF audiometry and ABR wave I amplitude as biomarkers
   - May represent pre-clinical phase of tinnitus
   - Neurotrophin therapy (NT-3) regenerates synapses in animal models

2. **Neural Oscillations and Connectivity:**
   - Resting-state fMRI: Altered connectivity in auditory, attention, distress networks
   - EEG/MEG: Gamma and alpha oscillation changes
   - Graph theory: Small-world network disruption
   - Potential biomarkers for treatment response

3. **Precision Neuromodulation:**

   *Transcranial Magnetic Stimulation (rTMS):*
   - Low-frequency (1 Hz) to auditory cortex
   - Variable outcomes in trials
   - Responder identification remains challenging
   - Theta-burst protocols under investigation

   *Bimodal Stimulation:*
   - Paired auditory and somatosensory (trigeminal/cervical)
   - Targets DCN plasticity mechanisms
   - Lenire device (CE marked, emerging evidence)
   - Timing-dependent plasticity approach

   *Vagus Nerve Stimulation (VNS):*
   - Paired with frequency-specific sounds
   - Targets cholinergic modulation of plasticity
   - FDA breakthrough device designation
   - Requires implanted device currently

4. **Pharmacotherapy Pipeline:**

   | Target | Compound | Mechanism | Status |
   |--------|----------|-----------|--------|
   | Kv7 channels | Retigabine analogs | Reduce hyperexcitability | Preclinical |
   | GABA-A | Selective modulators | Restore inhibition | Phase II |
   | NMDA | D-cycloserine | Enhance extinction | Phase II |
   | KCNQ | Ezogabine | Hyperpolarization | Trials halted |
   | 5-HT | Various | Modulate serotonergic tone | Mixed results |

5. **Regenerative Approaches:**
   - Progenitor cell differentiation
   - Gene therapy for hair cell regeneration
   - Synaptic regeneration with neurotrophins
   - May address root cause in some patients

**Clinical Trial Considerations:**

- Heterogeneity: Need for subtyping
- Placebo effects: Strong in tinnitus trials
- Outcome measures: THI vs TFI vs objective measures
- Duration: Acute vs chronic tinnitus differ
- Habituation: Natural history confounds

**Multidisciplinary Management Model:**

| Component | Provider | Intervention |
|-----------|----------|--------------|
| Audiologic | Audiologist | Hearing aids, sound therapy |
| Psychological | Psychologist | CBT, ACT, mindfulness |
| Medical | Otologist | Rule out treatable causes |
| Vestibular | PT | When concurrent vestibular symptoms |
| Sleep | Sleep medicine | Insomnia management |

**Prognosis Factors:**

*Better Outcomes:*
- Shorter duration
- Lower distress levels
- Treatable underlying cause
- Good social support
- Active coping strategies

*Poorer Outcomes:*
- Chronic duration (>2 years)
- Psychiatric comorbidity
- Catastrophizing
- Secondary gain issues
- Poor sleep`,
      keyTerms: [
        { term: 'ribbon synapse', definition: 'Specialized synapses between hair cells and spiral ganglion neurons; vulnerable to noise damage in synaptopathy' },
        { term: 'graph theory', definition: 'Mathematical framework for analyzing brain network topology in tinnitus research' },
        { term: 'theta-burst stimulation', definition: 'Patterned TMS protocol delivering bursts of stimulation for enhanced plasticity effects' },
        { term: 'acceptance and commitment therapy (ACT)', definition: 'Mindfulness-based therapy focusing on psychological flexibility in chronic conditions including tinnitus' },
        { term: 'timing-dependent plasticity', definition: 'Neural plasticity dependent on precise timing relationships between stimuli, exploited in bimodal therapy' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. Always rule out acoustic neuroma with MRI for unilateral or asymmetric tinnitus
2. Pulsatile tinnitus workup: CTA/MRA head and neck, consider IIH especially in young overweight women
3. Sudden tinnitus with sudden SNHL is otologic emergency - treat with steroids
4. CBT has best evidence for reducing tinnitus distress; no medication is FDA-approved
5. Hearing aids are first-line when hearing loss is present - even mild
6. Many patients improve with reassurance and education alone (demystification)
7. Avoid overinvestigation of typical subjective tinnitus with normal symmetric audiogram`,
    },
  },

  media: [
    {
      id: 'tinnitus-pathways',
      type: 'diagram',
      filename: 'tinnitus-neural-pathways.svg',
      title: 'Tinnitus Neural Pathways',
      description: 'Diagram showing central auditory pathway changes in tinnitus',
    },
    {
      id: 'tinnitus-workup',
      type: 'diagram',
      filename: 'tinnitus-workup-algorithm.svg',
      title: 'Tinnitus Evaluation Algorithm',
      description: 'Clinical decision tree for tinnitus workup',
    },
  ],

  citations: [
    {
      id: 'cummings-tinnitus',
      type: 'textbook',
      title: 'Tinnitus and Hyperacusis',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: '156',
    },
    {
      id: 'baguley-tinnitus',
      type: 'textbook',
      title: 'Tinnitus: A Multidisciplinary Approach',
      authors: ['Baguley D', 'McFerran D', 'Hall D'],
      source: 'Wiley-Blackwell',
    },
  ],

  crossReferences: [
    { targetId: 'ent-ear-anatomy', targetType: 'structure', relationship: 'related', label: 'Ear Anatomy' },
    { targetId: 'ent-hearing-loss', targetType: 'condition', relationship: 'related', label: 'Hearing Loss' },
    { targetId: 'ent-vertigo', targetType: 'condition', relationship: 'related', label: 'Vertigo' },
  ],

  tags: {
    systems: ['auditory', 'nervous'],
    topics: ['otology', 'audiology', 'neurotology'],
    keywords: ['tinnitus', 'ringing', 'hearing', 'phantom sound', 'auditory cortex'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tinnitus;
