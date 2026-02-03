/**
 * EEG Basics - Clinical Educational Content
 *
 * Fundamentals of electroencephalography including normal patterns,
 * abnormal findings, and clinical applications.
 */

import { EducationalContent } from '../../types';

export const eegBasics: EducationalContent = {
  id: 'clinical-eeg-basics',
  type: 'concept',
  name: 'EEG Basics',
  alternateNames: ['Electroencephalography', 'Brain Wave Testing', 'EEG Fundamentals'],

  levels: {
    1: {
      level: 1,
      summary: 'EEG is a test that records the electrical activity of your brain using small sensors placed on your scalp.',
      explanation: `EEG stands for Electroencephalogram. It is a test that measures the electrical signals your brain makes. These signals show how active your brain is and can help doctors find problems.

**What EEG Measures:**

Your brain cells (neurons) communicate using tiny electrical signals. An EEG can "listen" to these signals through your skull using small metal discs called electrodes placed on your head.

**Why Doctors Use EEG:**

1. **Check for Seizures**
   - Seizures cause unusual electrical patterns
   - EEG can show where seizures start
   - Helps decide treatment

2. **Check Brain Activity**
   - See if someone is having a stroke
   - Check brain function after head injury
   - Monitor during surgery

3. **Diagnose Sleep Problems**
   - Shows different sleep stages
   - Finds problems like sleep apnea

4. **Check for Brain Death**
   - Confirms no brain activity

**What Happens During an EEG:**

1. **Getting Ready**
   - Small sensors attach to your scalp
   - No needles or pain involved
   - Hair may need to be washed after

2. **During the Test**
   - Lie down and relax
   - Keep eyes open, then closed
   - May breathe fast for a short time
   - May see flashing lights

3. **How Long It Takes**
   - Routine EEG: 20-40 minutes
   - Sleep-deprived EEG: longer
   - Sometimes need to stay overnight

**What the Lines Mean:**

The EEG shows wavy lines on a screen. 
- Calm lines mean relaxed brain
- Fast, spiky lines can mean seizure activity
- Slow waves can mean sleep or brain problems

The test is safe and painless!`,
      keyTerms: [
        { term: 'EEG', definition: 'Electroencephalogram; a test that records brain electrical activity' },
        { term: 'electrode', definition: 'Small sensor that detects electrical signals from the brain' },
        { term: 'seizure', definition: 'A sudden burst of abnormal electrical activity in the brain' },
        { term: 'neuron', definition: 'Brain cell that sends and receives electrical signals' },
        { term: 'brain wave', definition: 'The electrical pattern made by brain activity' },
      ],
      analogies: [
        'EEG is like listening to a big crowd - you can tell if they are calm, excited, or having an argument.',
        'Brain waves are like radio stations - different frequencies for different activities.',
        'An EEG electrode is like a microphone picking up sounds from a concert hall.',
      ],
      examples: [
        'During sleep, the EEG shows slow, rolling waves.',
        'When awake with eyes closed, the EEG shows fast alpha waves.',
        'During a seizure, the EEG shows sudden sharp spikes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Electroencephalography records spontaneous electrical activity from cerebral cortex via scalp electrodes, used primarily for seizure detection and classification, with characteristic waveforms for different states of consciousness.',
      explanation: `**Principles of EEG:**

**Physics of EEG Recording:**
- Measures postsynaptic potentials (primarily excitatory)
- Synchronized activity of thousands of neurons required
- Signals attenuated by skull and scalp (amplitude 10-100 microvolts)
- Frequency range: 0.5-70 Hz typically analyzed

**Electrode Placement (10-20 System):**
- Standardized positions based on skull landmarks
- "10-20" refers to distances between electrodes (10% or 20% of total distance)
- Letters indicate brain region: F (frontal), C (central), P (parietal), O (occipital), T (temporal)
- Numbers: Odd = left hemisphere, Even = right hemisphere
- "z" = midline (e.g., Fz, Cz, Pz)

**Normal EEG Waveforms:**

**Alpha Waves (8-13 Hz):**
- Posterior dominant rhythm
- Present with eyes closed, relaxed wakefulness
- Attenuates with eye opening or mental activity
- Amplitude 20-100 microvolts

**Beta Waves (13-30 Hz):**
- Frontal and central regions
- Present during alert, active thinking
- Low amplitude (5-20 microvolts)
- Enhanced by benzodiazepines, barbiturates

**Theta Waves (4-7 Hz):**
- Normal in children and drowsy adults
- Frontal midline theta with concentration
- Pathological if focal or excessive

**Delta Waves (0.5-4 Hz):**
- Normal in deep sleep (slow-wave sleep)
- Pathological in awake adults (indicates brain dysfunction)
- High amplitude (20-200 microvolts)

**Clinical Applications:**

**Seizure Disorders:**
- Confirm diagnosis of epilepsy
- Classify seizure type
- Localize seizure focus for surgery
- Monitor anti-epileptic drug efficacy

**Other Indications:**
- Altered mental status (encephalopathy)
- Brain death determination
- Sleep disorders (polysomnography)
- Confusion with psychiatric disorders

**Activation Procedures:**
- Hyperventilation: Provokes absence seizures, focal discharges
- Photic stimulation: Provokes photosensitive epilepsy
- Sleep deprivation: Increases epileptiform activity yield
- Sleep recording: Many seizures occur during sleep

**EEG Interpretation Basics:**

**Background Activity:**
- Symmetry between hemispheres
- Posterior dominant rhythm (PDR)
- Reactivity to stimuli
- State-appropriate patterns

**Abnormal Patterns:**
- Slowing: Focal or generalized
- Epileptiform discharges: Spikes, sharp waves
- Asymmetry: Amplitude or frequency differences
- Suppression: Absent activity`,
      keyTerms: [
        { term: '10-20 system', definition: 'International standard for electrode placement on the scalp' },
        { term: 'postsynaptic potential', definition: 'Voltage change in a neuron after neurotransmitter binding' },
        { term: 'epileptiform', definition: 'Wave patterns suggesting epilepsy or seizure tendency' },
        { term: 'amplitude', definition: 'Height of the EEG wave; indicates signal strength' },
        { term: 'frequency', definition: 'Number of wave cycles per second (Hz)' },
      ],
      analogies: [
        'Different EEG wave frequencies are like different speeds on a car - alpha is cruising, beta is racing, delta is idling.',
        'The 10-20 system is like a GPS grid for the scalp - precise, standardized locations.',
        'Hyperventilation activation is like revving an engine to see if it stalls - stresses the system to reveal problems.',
      ],
    },
    3: {
      level: 3,
      summary: 'EEG interpretation requires understanding of normal variants, age-specific patterns, and characteristic abnormalities including seizure patterns, encephalopathic changes, and focal structural lesions.',
      explanation: `**Age-Related EEG Patterns:**

**Neonatal EEG:**
- Discontinuous pattern (trace alternant)
- Delta brushes (premature infants)
- Development of sleep-wake cycling
- Gestational age assessment

**Infant EEG:**
- Delta slowing prominent
- Posterior slow waves of youth
- Sleep spindles develop 2-3 months
- Vertex waves, K-complexes by 5-6 months

**Childhood EEG:**
- Posterior dominant rhythm 8 Hz by age 3
- Reaches adult 10 Hz by puberty
- Lambda waves (occipital positive sharp waves with visual scanning)
- Hyperventilation response (high amplitude slowing)

**Adolescent/Adult:**
- Stable 10 Hz posterior dominant rhythm
- Mu rhythm (central alpha, attenuates with movement)
- Frontal sleep spindles 12-14 Hz
- Vertex sharp waves

**Normal Variants (Not Abnormal):**

**Benign Epileptiform Variants:**
- Rhythmic mid-temporal theta (psychomotor variant)
- Subclinical rhythmic EEG discharge of adults (SREDA)
- 6 Hz spike-and-wave (phantom spike-and-wave)
- Wicket spikes (temporal, arciform)
- Benign sporadic sleep spikes (BSSS)

**Other Normal Variants:**
- Breach rhythm (over skull defects)
- Small sharp spikes (SSS)
- 14 and 6 Hz positive bursts

**Seizure Patterns:**

**Focal Seizures:**
- Focal rhythmic activity evolving in frequency/amplitude
- May spread (Jacksonian march)
- Post-ictal slowing

**Absence Seizures:**
- 3 Hz spike-and-wave discharge
- Generalized, bilateral synchronous
- Abrupt onset and offset
- Hyperventilation precipitates

**Generalized Tonic-Clonic:**
- Pre-ictal: Possible epileptiform activity
- Tonic phase: Low-voltage fast activity
- Clonic phase: Spike-and-wave complexes slowing
- Post-ictal: Suppression, then slowing

**Myoclonic Seizures:**
- Polyspike-and-wave complexes
- Generalized or multifocal
- Brief (<1 second)

**Atonic Seizures:**
- Polyspike-and-wave or spike-and-wave
- Loss of tone correlates with spike

**Encephalopathic Patterns:**

**Generalized Slowing:**
- Non-specific metabolic/toxic encephalopathy
- Frequency correlates with severity
- Triphasic waves (hepatic/renal encephalopathy)

**Periodic Patterns:**
- Periodic lateralized epileptiform discharges (PLEDs): Herpes encephalitis, stroke
- Periodic generalized epileptiform discharges: CJD, anoxic injury
- Burst suppression: Severe encephalopathy, anesthesia

**Alpha Coma:**
- Alpha frequency activity frontally, not reactive
- Pontine/midbrain lesions
- Anoxic encephalopathy (poor prognosis)

**Focal Abnormalities:**

**Structural Lesions:**
- Focal slowing over lesion
- Asymmetry of amplitude/frequency
- Continuous focal slow waves suggest structural lesion

**Post-Seizure (Todd Paralysis):**
- Focal slowing after seizure
- Gradual resolution over hours

**Interictal Epileptiform Discharges:**
- Spikes (<70 ms duration)
- Sharp waves (70-200 ms duration)
- Spike-and-wave complexes
- Location suggests seizure focus`,
      keyTerms: [
        { term: 'spike', definition: 'Brief EEG transient (<70 ms) with sharp peak; epileptiform' },
        { term: 'sharp wave', definition: 'EEG transient 70-200 ms duration; epileptiform' },
        { term: 'PLEDs', definition: 'Periodic lateralized epileptiform discharges; suggests acute focal lesion' },
        { term: 'triphasic waves', definition: 'Three-phase waves seen in metabolic encephalopathy' },
        { term: 'interictal', definition: 'Period between seizures' },
      ],
      clinicalNotes: 'A normal EEG does not exclude epilepsy. Up to 50% of patients with epilepsy have normal routine EEGs. Sleep-deprived EEG or prolonged monitoring increases yield. Conversely, epileptiform discharges can be seen in 1-2% of the general population without epilepsy.',
    },
    4: {
      level: 4,
      summary: 'Advanced EEG interpretation includes recognition of ICU patterns, quantitative EEG analysis, epilepsy surgical evaluation, and differentiation of seizures from mimics.',
      explanation: `**ICU EEG Monitoring:**

**Indications for Continuous EEG (cEEG):**
- Diagnosis of non-convulsive seizures (NCSz)
- Diagnosis of non-convulsive status epilepticus (NCSE)
- Monitoring after convulsive status epilepticus
- Assessment of therapeutic coma
- Detection of cerebral ischemia (vasospasm monitoring)

**Non-Convulsive Seizures:**
- 20-30% of comatose ICU patients
- Risk factors: Acute brain injury, sepsis, prior seizures
- Manifestations: Subtle twitching, nystagmus, autonomic changes
- Requires cEEG for diagnosis

**Periodic Patterns in ICU:**
- SIRPIDs (Stimulus-induced rhythmic, periodic, or ictal discharges)
- BIPLEDs (Bilateral independent PLEDs)
- GPEDs (Generalized periodic epileptiform discharges)
- 2 Hz burst suppression for therapeutic hypothermia

**Lateralized Periodic Discharges (LPDs):**
- Formerly PLEDs
- Acute destructive lesions
- High risk of seizures (>80%)
- Treat if associated with clinical change

**Quantitative EEG (qEEG):**

**Trend Analysis:**
- Compressed spectral array
- Density spectral array
- Amplitude-integrated EEG (aEEG)
- Color density spectral array (CDSA)

**Automated Detection:**
- Seizure detection algorithms
- Ictal-interictal continuum assessment
- Ischemia detection (alpha/delta ratio)
- Burst suppression ratio

**Applications:**
- Screen for seizures in high-risk patients
- Monitor cerebral ischemia
- Guide titration of sedation
- Prognostication after cardiac arrest

**Epilepsy Surgery Evaluation:**

**Phase I Monitoring:**
- Scalp video-EEG monitoring
- Capture habitual seizures
- Correlation of semiology with EEG
- Interictal epileptiform discharges localization

**Phase II Monitoring (Invasive):**
- Subdural grids/strips
- Depth electrodes (SEEG)
- Precise localization of seizure onset
- Functional mapping (cortical stimulation)

**Ictal EEG Patterns:**
- Low-voltage fast activity (tonic phase)
- Rhythmic theta/alpha evolution
- Localized vs regional vs hemispheric onset
- Post-ictal slowing confirms seizure

**Wada Test (Intracarotid Amobarbital):**
- Determine language dominance
- Assess memory function
- Predict post-surgical memory risk

**Seizure Mimics:**

**Psychogenic Non-Epileptic Seizures (PNES):**
- No EEG change during typical events
- Gradual onset/offset
- Eye closure resistance
- Asynchronous movements
- Emotional triggers common

**Syncope:**
- Diffuse slowing, then suppression
- Myoclonic activity possible
- Recovery with return of background

**Movement Disorders:**
- Tremor: Regular rhythmic activity (not epileptiform)
- Myoclonus: Correlated with myogenic artifact
- Tics: Normal EEG during movements

**Parasomnias:**
- Sleepwalking, night terrors: Stage N3 sleep
- REM behavior disorder: REM sleep without atonia
- Normal background for sleep stage`,
      keyTerms: [
        { term: 'non-convulsive status epilepticus', definition: 'Continuous or near-continuous seizure activity without convulsions' },
        { term: 'SIRPIDs', definition: 'Stimulus-induced rhythmic periodic or ictal discharges' },
        { term: 'cortical stimulation mapping', definition: 'Electrical stimulation to identify eloquent cortex before surgery' },
        { term: 'Wada test', definition: 'Test of language and memory function via intracarotid injection' },
        { term: 'SEEG', definition: 'Stereoelectroencephalography; depth electrode recording' },
      ],
      clinicalNotes: 'Status epilepticus definition: 5 minutes or more of continuous seizure activity, or recurrent seizures without recovery between. In ICU, always consider NCSE in unexplained altered mental status. Response to benzodiazepine trial supports diagnosis but lack of response does not exclude it.',
    },
    5: {
      level: 5,
      summary: 'Expert EEG practice includes invasive monitoring techniques, brain-computer interfaces, high-density EEG, source localization, and emerging applications in neuromodulation and closed-loop systems.',
      explanation: `**Advanced EEG Technologies:**

**High-Density EEG:**
- 128-256 channel recordings
- Better spatial resolution
- Source localization algorithms
- Cortical mapping applications

**Magnetoencephalography (MEG) Integration:**
- Magnetic fields from neural activity
- Better detection of tangential sources
- Combined EEG-MEG source analysis
- Pre-surgical localization

**Source Localization:**
- Dipole modeling
- Distributed source imaging (LORETA, MNE)
- fMRI-EEG integration
- Individual head modeling (MRI-based)

**Invasive EEG Techniques:**

**Stereoelectroencephalography (SEEG):**
- Depth electrodes via burr holes
- 3D sampling of epileptogenic zone
- Bilateral independent sampling
- Lower morbidity than craniotomy

**Electrocorticography (ECoG):**
- Subdural grid/strip electrodes
- High spatial resolution
- Real-time functional mapping
- Resection under ECoG guidance

**Responsive Neurostimulation (RNS):**
- Implanted device with electrodes
- Continuous monitoring
- Responsive stimulation to abort seizures
- Long-term data collection

**Brain-Computer Interfaces:**

**Signal Processing:**
- Feature extraction (power bands, ERPs)
- Classification algorithms
- Adaptive learning
- Real-time decoding

**Applications:**
- Motor prosthetics (cursor, robotic arm control)
- Communication devices for locked-in syndrome
- Neurofeedback training
- Rehabilitation after stroke

**Evoked Potentials:**

**Visual Evoked Potentials (VEP):**
- P100 latency (normally <100 ms)
- Delayed in optic neuritis (MS)
- Pattern-reversal vs flash stimuli

**Brainstem Auditory Evoked Potentials (BAEP):**
- Waves I-V representing auditory pathway
- Wave I: Cochlear nerve
- Wave III: Superior olivary complex
- Wave V: Inferior colliculus
- Used for hearing assessment, intraoperative monitoring

**Somatosensory Evoked Potentials (SSEP):**
- N20 (cortex), P37 (lower extremity)
- Spinal cord monitoring during surgery
- Prognosis after hypoxic brain injury

**Motor Evoked Potentials (MEP):**
- Transcranial magnetic stimulation
- Corticospinal tract assessment
- Intraoperative monitoring

**Emerging Applications:**

**Closed-Loop Neuromodulation:**
- Detection of seizure onset
- Automatic responsive stimulation
- RNS (NeuroPace), DBS for epilepsy
- Closed-loop DBS for Parkinson disease

**Sleep Medicine Advances:**
- Home sleep EEG monitoring
- Wearable EEG devices
- Automated sleep staging algorithms
- Consumer-grade sleep trackers validation

**Neonatal Neurocritical Care:**
- Amplitude-integrated EEG (aEEG)
- Seizure burden quantification
- Prognosis after HIE (hypoxic-ischemic encephalopathy)
- Cooling protocol monitoring

**Machine Learning in EEG:**
- Automated seizure detection
- Artifact rejection algorithms
- Pattern recognition for diagnosis
- Prediction of seizures (pre-ictal state)
- Big data approaches to epilepsy genetics

**Research Frontiers:**

**Single-Unit Recording:**
- Microelectrode arrays
- Unit activity alongside field potentials
- High-frequency oscillations (HFOs)
- Ripple and fast ripple activity

**Optogenetics:**
- Light-activated ion channels
- Causal testing of circuit function
- Combined with EEG recording

**Transcranial Electrical Stimulation:**
- tDCS, tACS concurrent with EEG
- Network modulation assessment
- Plasticity induction monitoring

**Clinical Practice Optimization:**

**Tele-EEG:**
- Remote EEG interpretation
- Rural access to expertise
- Quality assurance programs
- Automated pre-screening

**Workflow Efficiency:**
- Automated montage reformatting
- Computer-aided detection
- Structured reporting
- Integration with EMR systems`,
      keyTerms: [
        { term: 'SEEG', definition: 'Stereoelectroencephalography; invasive depth electrode recording' },
        { term: 'high-frequency oscillations', definition: 'EEG activity >80 Hz; ripple (80-250 Hz) and fast ripple (250-500 Hz)' },
        { term: 'responsive neurostimulation', definition: 'Implanted device that detects and responds to seizure activity' },
        { term: 'LORETA', definition: 'Low-resolution electromagnetic tomography; source localization method' },
        { term: 'electrocorticography', definition: 'EEG recorded directly from brain surface via subdural electrodes' },
      ],
      clinicalNotes: 'Expert tips: (1) High-frequency oscillations (ripples and fast ripples) on invasive recordings mark the epileptogenic zone. (2) In SEEG, the "hypersynchronous" onset pattern suggests a focal onset amenable to resection. (3) For brain-computer interfaces, motor imagery produces event-related desynchronization (ERD) in mu and beta bands over sensorimotor cortex. (4) In cardiac arrest prognostication, absent SSEP N20 at 24 hours strongly predicts poor outcome, but beware of sedation effects.',
    },
  },

  media: [
    {
      id: 'eeg-patterns',
      type: 'diagram',
      filename: 'eeg-waveform-patterns.jpg',
      title: 'EEG Waveform Patterns',
      description: 'Normal and abnormal EEG patterns with frequency analysis',
    },
  ],

  citations: [
    {
      id: 'fisch-eeg',
      type: 'textbook',
      title: 'Fisch and Spehlmann\'s EEG Primer',
      authors: ['Fisch, B.J.'],
      source: 'Elsevier',
    },
    {
      id: 'aeesm-guidelines',
      type: 'article',
      title: 'ACNS Standardized Critical Care EEG Terminology',
      source: 'Journal of Clinical Neurophysiology',
    },
  ],

  crossReferences: [
    { targetId: 'clinical-neurological-exam', targetType: 'concept', relationship: 'related', label: 'Neurological Examination' },
    { targetId: 'clinical-lumbar-puncture', targetType: 'concept', relationship: 'related', label: 'Lumbar Puncture' },
    { targetId: 'physiology-action-potentials', targetType: 'concept', relationship: 'see-also', label: 'Action Potentials' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['clinical', 'diagnostics', 'neurophysiology'],
    keywords: ['EEG', 'electroencephalography', 'seizure', 'epilepsy', 'brain waves'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default eegBasics;
