/**
 * Seizure Types - In-Depth Neurology Content
 *
 * Comprehensive coverage of seizure classification (ILAE 2017), clinical features,
 * EEG correlates, and approach to new-onset seizure evaluation.
 */

import { EducationalContent } from '../../types';

export const seizureTypesContent: EducationalContent = {
  id: 'neuro-seizure-types',
  type: 'condition',
  name: 'Seizure Types',
  nameEs: 'Tipos de Convulsiones',
  alternateNames: ['Seizure Classification', 'Epileptic Seizures', 'Convulsive Disorders'],
  hpoId: 'HP:0001250',

  levels: {
    1: {
      level: 1,
      summary:
        'A seizure is a sudden burst of abnormal electrical activity in the brain that can cause changes in movement, sensation, behavior, or consciousness.',
      explanation: `## What Is a Seizure?

A seizure happens when brain cells send out sudden, uncontrolled electrical signals. This can affect how you move, feel, think, or act for a short time. Seizures can look very different depending on which part of the brain is affected.

## Types of Seizures

**Focal Seizures (start in one area of the brain):**
- *Aware*: You stay awake and alert but may have unusual feelings, movements, or sensations
  - Arm or leg twitching on one side
  - Strange tastes, smells, or visual changes
  - A feeling of fear or deja vu
- *Impaired awareness*: You become confused or zone out
  - Staring blankly
  - Lip smacking, hand rubbing, or picking at clothes
  - Cannot respond to people during the seizure

**Generalized Seizures (affect the whole brain at once):**
- *Tonic-clonic (grand mal)*: The most dramatic type
  - Body stiffens (tonic phase), then shakes rhythmically (clonic phase)
  - Loss of consciousness, may bite tongue or lose bladder control
  - Usually lasts 1-3 minutes
- *Absence (petit mal)*: Brief staring spells
  - Lasts only seconds
  - Most common in children
  - Person may blink rapidly or smack lips
- *Myoclonic*: Quick, brief muscle jerks
- *Atonic*: Sudden loss of muscle tone, causing falls ("drop attacks")

## What to Do if Someone Has a Seizure

- Stay calm and time the seizure
- Clear the area of dangerous objects
- Turn the person on their side (recovery position)
- Do NOT put anything in their mouth
- Call 911 if the seizure lasts more than 5 minutes or they do not wake up

## When to See a Doctor

- First-time seizure (always needs evaluation)
- Seizures happening more often
- Seizure lasting longer than 5 minutes
- Seizure in water or while pregnant`,

      keyTerms: [
        { term: 'seizure', definition: 'A sudden burst of abnormal electrical activity in the brain' },
        { term: 'epilepsy', definition: 'A brain condition where a person has repeated seizures', pronunciation: 'EP-ih-lep-see' },
        { term: 'tonic-clonic', definition: 'A type of seizure where the body stiffens and then shakes' },
        { term: 'absence seizure', definition: 'A brief seizure causing staring and unresponsiveness, common in children' },
      ],
      analogies: [
        'A seizure is like an electrical storm in the brain - normal signals are disrupted by a sudden surge of activity.',
        'A focal seizure is like a short circuit in one room of a house, while a generalized seizure is like the whole house losing power.',
        'An absence seizure is like the brain hitting a pause button for a few seconds.',
      ],
      examples: [
        'A child stares blankly for 10 seconds during class, then snaps back as if nothing happened - this is an absence seizure.',
        'A man falls to the ground, his body stiffens and then shakes for 2 minutes - this is a tonic-clonic seizure.',
        'A woman suddenly smells something burning that no one else smells, then her right arm starts twitching - this is a focal seizure.',
      ],
      patientCounselingPoints: [
        'If this is your first seizure, you need a full medical evaluation to find the cause.',
        'Keep a seizure diary recording what happened before, during, and after each seizure.',
        'Do not drive until cleared by your doctor - there are legal requirements for seizure-free periods.',
        'Wear a medical alert bracelet so others know how to help you.',
      ],
    },

    2: {
      level: 2,
      summary:
        'The ILAE 2017 classification organizes seizures by onset (focal, generalized, unknown), level of awareness, and motor vs non-motor manifestations, replacing older terminology.',
      explanation: `## ILAE 2017 Seizure Classification

**Focal Onset (one hemisphere):**

*Focal Aware (previously Simple Partial):*
- Consciousness preserved throughout
- Motor: Clonic, tonic, myoclonic movements (contralateral to focus)
- Sensory: Paresthesias, visual, auditory, olfactory, gustatory auras
- Autonomic: Flushing, pallor, tachycardia, GI sensation (epigastric rising)
- Cognitive/emotional: Deja vu, fear, anxiety, forced thinking

*Focal Impaired Awareness (previously Complex Partial):*
- Impaired consciousness/awareness during event
- Most common origin: Temporal lobe (60-70%)
- Automatisms: Lip smacking, chewing, hand rubbing, picking movements
- Post-ictal confusion typical (minutes to hours)

*Focal to Bilateral Tonic-Clonic (previously Secondary Generalized):*
- Starts focal, then spreads to both hemispheres
- Focal onset may be brief (aura) before bilateral convulsion
- Important to identify focal onset for treatment and surgery planning

**Generalized Onset (both hemispheres simultaneously):**

*Motor:*
- Tonic-clonic: Bilateral stiffening then rhythmic jerking; most common emergency presentation
- Tonic: Sustained stiffening only
- Clonic: Rhythmic jerking only
- Myoclonic: Brief, shock-like muscle jerks
- Myoclonic-tonic-clonic: Myoclonic jerks preceding tonic-clonic
- Atonic: Sudden loss of muscle tone ("drop attacks")

*Non-Motor:*
- Typical absence: 3 Hz spike-and-wave; brief staring; childhood onset
- Atypical absence: Slower spike-and-wave (<2.5 Hz); less abrupt onset/offset; associated with intellectual disability
- Myoclonic absence: Absence with rhythmic myoclonic jerking

## Epilepsy Syndromes (Selected)

**Childhood:**
- *Childhood Absence Epilepsy*: Age 4-10, typical absences, 3 Hz spike-wave, remits in 60-70%
- *Juvenile Myoclonic Epilepsy (JME)*: Adolescent onset, myoclonic jerks (morning), tonic-clonic seizures, lifelong treatment usually needed
- *Benign Rolandic Epilepsy*: Age 3-13, nocturnal focal motor seizures, centrotemporal spikes, excellent prognosis

**Adult:**
- *Temporal Lobe Epilepsy*: Most common focal epilepsy; mesial temporal sclerosis, hippocampal atrophy, often drug-resistant

## Evaluation of New-Onset Seizure

**History:**
- Detailed description from witness
- Prodromal symptoms, aura
- Duration, progression, post-ictal features
- Provoking factors: Sleep deprivation, alcohol, medications, fever

**Labs:**
- Glucose, electrolytes (Na, Ca, Mg), renal/liver function
- Toxicology screen
- Prolactin (elevated post-tonic-clonic; helps distinguish from non-epileptic events)

**Imaging:**
- MRI brain with epilepsy protocol (thin cuts through hippocampi, FLAIR, T2)
- CT head in acute setting (rule out hemorrhage, mass)

**EEG:**
- Routine 30-min EEG: ~50% sensitivity for interictal epileptiform discharges
- Prolonged or sleep-deprived EEG: Increases yield
- Video-EEG monitoring: Gold standard for seizure characterization`,

      keyTerms: [
        { term: 'focal seizure', definition: 'Seizure originating from one hemisphere of the brain' },
        { term: 'generalized seizure', definition: 'Seizure affecting both hemispheres from onset' },
        { term: 'automatism', definition: 'Repetitive, purposeless movements during a seizure (lip smacking, hand picking)', pronunciation: 'aw-TOM-ah-tiz-um' },
        { term: 'post-ictal', definition: 'Period of confusion and drowsiness after a seizure', pronunciation: 'post-IK-tal' },
        { term: 'interictal', definition: 'Between seizures - the period when EEG may show abnormal discharges without clinical seizures' },
        { term: 'JME', definition: 'Juvenile Myoclonic Epilepsy - common epilepsy syndrome with morning myoclonus and generalized seizures' },
      ],
      analogies: [
        'Focal seizures are like a fire starting in one room and possibly spreading, while generalized seizures are like the entire building lighting up at once.',
        'An aura is like an early warning alarm before the main event.',
        'Automatisms are like the brain running on autopilot during a seizure - performing repetitive actions without conscious control.',
      ],
      examples: [
        'A 25-year-old describes morning myoclonic jerks causing him to drop his coffee, followed by a tonic-clonic seizure - classic JME.',
        'A 40-year-old has episodes of epigastric rising sensation, deja vu, then stares and picks at her clothes for 2 minutes - focal impaired awareness seizure from temporal lobe.',
        'A 7-year-old has brief staring spells 30 times per day with 3 Hz spike-wave on EEG - childhood absence epilepsy.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Seizure evaluation integrates clinical semiology with EEG findings and neuroimaging to determine seizure type, epilepsy syndrome, and etiology, guiding treatment selection and surgical candidacy.',
      explanation: `## EEG Correlates of Seizure Types

**Focal Seizures:**
- Interictal: Focal sharp waves or spikes in the region of onset
- Ictal: Rhythmic theta or alpha activity evolving in frequency and distribution
- Temporal lobe: Anterior temporal sharp waves (F7/F8, T3/T4)
- Frontal lobe: Often difficult to capture; may need invasive monitoring

**Generalized Seizures:**
- Tonic-clonic: Generalized polyspike-and-wave, then rhythmic slowing
- Absence: Bilateral synchronous 3 Hz spike-and-wave (typical) or <2.5 Hz (atypical)
- Myoclonic: Generalized polyspike-and-wave bursts
- JME: 4-6 Hz generalized polyspike-and-wave, photosensitivity common

**Important EEG Patterns:**
- Hypsarrhythmia: Chaotic high-amplitude pattern in infantile spasms (West syndrome)
- Burst suppression: Alternating bursts of activity and flat periods (severe encephalopathy)
- Periodic lateralized epileptiform discharges (PLEDs/LPDs): Structural lesion, herpes encephalitis
- Generalized periodic discharges (GPDs): Metabolic, CJD, status epilepticus

## Seizure Semiology and Localization

**Temporal Lobe:**
- Aura: Epigastric rising, deja vu, fear, olfactory hallucinations
- Ictal: Oral automatisms, hand automatisms, contralateral dystonic posturing
- Post-ictal: Confusion, aphasia (dominant temporal), amnesia

**Frontal Lobe:**
- Brief, frequent, often nocturnal
- Bizarre motor behavior (hypermotor, bicycling legs, fencing posture)
- Minimal post-ictal confusion
- Can mimic psychogenic non-epileptic events

**Parietal Lobe:**
- Sensory aura: Contralateral tingling, numbness
- May spread to motor cortex (Jacksonian march)

**Occipital Lobe:**
- Visual aura: Elementary (flashes, colors) vs formed hallucinations
- Eye deviation, nystagmus
- Ictal blindness

## Status Epilepticus

**Definition:**
- Seizure lasting >5 minutes (tonic-clonic) or repeated seizures without recovery
- Medical emergency: Mortality 10-20%

**Management Protocol:**
1. **0-5 min**: ABCs, IV access, glucose, thiamine
2. **5-20 min (Emergent)**: Benzodiazepines
   - Lorazepam 0.1 mg/kg IV (max 4mg, repeat once)
   - Midazolam 10mg IM if no IV access
   - Diazepam 0.15 mg/kg IV
3. **20-40 min (Established)**: Second-line agent
   - Fosphenytoin/phenytoin 20 mg PE/kg IV
   - Levetiracetam 60 mg/kg IV (max 4500 mg)
   - Valproate 40 mg/kg IV
   - ESETT trial: All three equally effective
4. **>40 min (Refractory)**: Continuous infusion
   - Midazolam drip, propofol, or pentobarbital
   - Continuous EEG monitoring
   - Goal: Burst suppression
5. **Super-refractory (>24 hours despite treatment):**
   - Ketamine infusion
   - Immunotherapy if suspected autoimmune
   - Consider therapeutic hypothermia, ketogenic diet

## Psychogenic Non-Epileptic Events (PNEE)

- Also called functional seizures or psychogenic non-epileptic seizures (PNES)
- 20-30% of patients in epilepsy monitoring units
- Features suggesting PNEE:
  - Eyes closed during event (epileptic seizures: eyes open)
  - Waxing and waning intensity
  - Pelvic thrusting, side-to-side head movement
  - Prolonged duration (>5 minutes)
  - Retained awareness during bilateral convulsive movements
  - No post-ictal confusion
  - Normal EEG during event
- Diagnosis: Video-EEG capturing typical event
- Treatment: Psychotherapy (CBT), not AEDs`,

      keyTerms: [
        { term: 'status epilepticus', definition: 'Continuous seizure lasting >5 minutes or repeated seizures without recovery - a medical emergency' },
        { term: 'spike-and-wave', definition: 'EEG pattern showing a spike followed by a slow wave; hallmark of generalized epilepsy' },
        { term: 'Jacksonian march', definition: 'Sequential spreading of seizure activity along the motor strip, causing progressive clonic movements' },
        { term: 'PNEE', definition: 'Psychogenic Non-Epileptic Events - seizure-like episodes of psychological origin with normal EEG' },
        { term: 'ESETT trial', definition: 'Established Status Epilepticus Treatment Trial showing equal efficacy of fosphenytoin, levetiracetam, and valproate' },
      ],
      clinicalNotes:
        'Status epilepticus is a neurological emergency requiring immediate benzodiazepine treatment - do not wait for EEG. The ESETT trial showed fosphenytoin, levetiracetam, and valproate are equally effective as second-line agents. PNEE (functional seizures) are diagnosed on video-EEG; patients should NOT be treated with AEDs. Closed eyes during a convulsive event strongly suggest PNEE.',
    },

    4: {
      level: 4,
      summary:
        'Advanced seizure evaluation employs invasive EEG monitoring, advanced neuroimaging, and genetic testing to identify surgical candidates and guide precision therapy in drug-resistant epilepsy.',
      explanation: `## Drug-Resistant Epilepsy

**Definition:**
- Failure of two appropriately chosen and tolerated AED trials (monotherapy or combination)
- Affects ~30% of epilepsy patients
- Should be referred for comprehensive epilepsy center evaluation

**Presurgical Evaluation:**

*Phase I (Non-Invasive):*
- Video-EEG: Capture habitual seizures, define onset zone
- High-resolution MRI (3T): Epilepsy protocol with volumetric analysis
- PET-FDG: Interictal hypometabolism in epileptogenic zone
- Ictal SPECT: Hyperperfusion at seizure onset (SISCOM: subtraction analysis)
- Neuropsychological testing: Lateralize language and memory
- Wada test (intracarotid amobarbital): Lateralize language/memory (being replaced by fMRI)
- MEG (magnetoencephalography): Localizes interictal spikes in 3D

*Phase II (Invasive):*
- Stereo-EEG (sEEG): Depth electrodes placed stereotactically
  - Preferred in most centers; bilateral and deep structure access
  - Lower morbidity than subdural grids
- Subdural grid/strip electrodes: Cortical surface recording
  - Better for cortical mapping (language, motor)
  - Higher morbidity (infection, mass effect)

**Surgical Options:**

*Resective Surgery:*
- Anterior temporal lobectomy: Best outcomes for mesial temporal sclerosis
  - Seizure-free rate: 60-80% at 1 year
  - Engel Class I (seizure-free): 58-65% at 2 years
  - Risk: Memory decline (dominant temporal), visual field cut
- Lesionectomy: For discrete lesions (tumors, cavernomas, FCD)
- Hemispherectomy: Severe unilateral disease (Rasmussen encephalitis, hemimegalencephaly)

*Disconnection Surgery:*
- Corpus callosotomy: For drop attacks (atonic/tonic seizures)
  - Palliative, not curative
  - Risk: Disconnection syndrome

*Neuromodulation:*
- VNS (Vagus Nerve Stimulation): 50% seizure reduction in ~50% of patients
- RNS (Responsive Neurostimulation): Closed-loop stimulation at seizure focus
  - LONG-TERM results: Median 75% seizure reduction at 9 years
- DBS of anterior nucleus of thalamus: SANTE trial; ~70% reduction at 7 years

*Minimally Invasive:*
- Laser interstitial thermal therapy (LITT/MRgLITT): MRI-guided laser ablation
  - For mesial temporal sclerosis, hypothalamic hamartoma
  - Shorter recovery, less memory impact than open surgery
  - Seizure-free rates slightly lower than open surgery (~55-60%)
- Stereotactic radiosurgery: For small lesions

## Genetic Epilepsies

**Channelopathies:**
- SCN1A (Nav1.1): Dravet syndrome - severe myoclonic epilepsy of infancy
  - Avoid sodium channel blockers (worsen seizures)
  - Fenfluramine and cannabidiol (Epidiolex) FDA-approved
- SCN2A, SCN8A: Neonatal/infantile seizures
- KCNQ2/3: Benign familial neonatal epilepsy
- KCNT1: Epilepsy of infancy with migrating focal seizures

**mTOR Pathway:**
- TSC1/TSC2: Tuberous sclerosis complex
  - Cortical tubers, subependymal giant cell astrocytoma (SEGA)
  - Everolimus (mTOR inhibitor): Reduces seizure frequency
- DEPDC5: Focal epilepsy with variable foci

**Precision Therapy Examples:**
- SCN1A (Dravet): Avoid carbamazepine/phenytoin; use valproate, clobazam, stiripentol, fenfluramine, cannabidiol
- KCNQ2: Sodium channel blockers beneficial (opposite of SCN1A)
- PRRT2: Carbamazepine highly effective
- GLUT1 deficiency: Ketogenic diet (bypass glucose transporter defect)
- TSC: mTOR inhibitors (everolimus)

## Autoimmune Epilepsy

- Anti-NMDA receptor encephalitis: Young women, psychiatric symptoms, seizures, movement disorder, autonomic instability
- Anti-LGI1: Faciobrachial dystonic seizures, hyponatremia, memory impairment
- Anti-CASPR2: Morvan syndrome, neuromyotonia, seizures
- Treatment: Immunotherapy (steroids, IVIG, plasma exchange, rituximab) rather than AEDs alone`,

      keyTerms: [
        { term: 'drug-resistant epilepsy', definition: 'Failure of two appropriately chosen antiseizure medications to achieve sustained seizure freedom' },
        { term: 'stereo-EEG', definition: 'Invasive EEG using depth electrodes placed stereotactically to localize seizure onset zone' },
        { term: 'anterior temporal lobectomy', definition: 'Surgical removal of anterior temporal lobe; most effective surgery for mesial temporal sclerosis epilepsy' },
        { term: 'RNS', definition: 'Responsive Neurostimulation - closed-loop brain stimulator that detects and interrupts seizures' },
        { term: 'Dravet syndrome', definition: 'Severe childhood epilepsy from SCN1A mutation; worsened by sodium channel blockers' },
        { term: 'LITT', definition: 'Laser Interstitial Thermal Therapy - minimally invasive MRI-guided laser ablation for epilepsy' },
      ],
      clinicalNotes:
        'Drug-resistant epilepsy (failure of 2 AEDs) should prompt referral to a comprehensive epilepsy center. Anterior temporal lobectomy achieves seizure freedom in 60-80% for mesial temporal sclerosis. Genetic testing is essential in early-onset epilepsy - results change treatment in 30%+ of cases. Anti-NMDA receptor encephalitis is treatable with immunotherapy - always consider in young patients with new seizures and psychiatric symptoms.',
    },

    5: {
      level: 5,
      summary:
        'Frontier epilepsy care integrates genomic precision medicine, advanced network-based surgical planning, novel neuromodulation strategies, and gene therapy approaches for intractable seizure disorders.',
      explanation: `## Precision Medicine in Epilepsy

**Genetic Testing Paradigm:**
- Epilepsy gene panels (100-500+ genes) or whole exome/genome sequencing
- Diagnostic yield: 25-50% in early-onset epilepsy
- Actionable findings in ~30%: Change AED choice, add precision therapy, avoid harmful drugs
- Pharmacogenomics: HLA-B*15:02 testing before carbamazepine (SJS risk in Asian populations)

**Antisense Oligonucleotides (ASOs):**
- SCN1A (Dravet): MONARCH Study - STK-001 upregulates SCN1A expression
  - Targets the root cause (haploinsufficiency) rather than symptoms
- SCN8A: ASO to reduce gain-of-function channel activity
- Patient-specific ASOs: Milasen (N-of-1 trial for CLN7 disease)

**Gene Therapy:**
- AAV-mediated gene replacement for monogenic epilepsies
- Challenges: CNS delivery, immune response, appropriate expression levels
- CRISPR-based approaches: Editing pathogenic variants in neurons (preclinical)
- Chemogenetic approaches: DREADDs for on-demand seizure suppression

## Network-Based Epilepsy Surgery

**Epilepsy as a Network Disease:**
- Seizures arise from and propagate through networks, not just focal zones
- Network nodes: Seizure onset zone, early propagation zone, symptomatogenic zone
- High-frequency oscillations (HFOs, 80-500 Hz): Biomarkers of epileptogenic tissue
  - Better localization than traditional interictal spikes
  - HFO-guided resection improves surgical outcomes

**Advanced Imaging for Surgical Planning:**
- 7T MRI: Detects subtle focal cortical dysplasia invisible on 3T
- SEEG-guided radiofrequency thermocoagulation: Minimally invasive ablation at electrode contacts
- Tractography (DTI): Identifies white matter tracts to avoid during surgery
- Functional MRI: Language and memory lateralization (replacing Wada test)
- Electrical source imaging (ESI): Localizes EEG sources in 3D

**Emerging Surgical Concepts:**
- Stereo-EEG-guided responsive surgery: Combine sEEG with RNS placement
- Network-targeted surgery: Disconnect pathological networks rather than resect
- Bi-hemispheric sEEG: Better characterize bilateral-onset seizures
- Robot-assisted sEEG: Improved accuracy, shorter procedure times

## Novel Neuromodulation

**Closed-Loop Systems:**
- RNS long-term data: Progressive improvement over years (neuroplasticity)
- Next-gen RNS: More channels, cloud connectivity, AI-based detection
- Chronic ambulatory EEG with real-time seizure forecasting

**External Neuromodulation:**
- Transcranial magnetic stimulation (TMS): Limited evidence for focal epilepsy
- Transcranial direct current stimulation (tDCS): Adjunctive in drug-resistant epilepsy
- External trigeminal nerve stimulation (eTNS): Monarch device, FDA-cleared

**Novel Targets:**
- Cerebellar stimulation: Targeting dentate nucleus
- Hippocampal stimulation: For temporal lobe epilepsy
- Centromedian thalamic DBS: For Lennox-Gastaut syndrome (ESTEL trial)

## Emerging Pharmacotherapy

**Recently Approved:**
- Cenobamate (Xcopri): Dual mechanism (Na+ channel modulation + GABA modulation)
  - Most effective new AED in drug-resistant focal epilepsy
  - Seizure freedom in 21% (Phase 3)
  - Requires slow titration (DRESS risk)
- Fenfluramine (Fintepla): Serotonin-based; Dravet and Lennox-Gastaut
- Ganaxolone: Neurosteroid (GABA-A modulation); CDKL5 deficiency

**Pipeline:**
- Soticlestat (OV935): Cholesterol 24-hydroxylase inhibitor; Dravet and Lennox-Gastaut
- Padsevonil: Novel dual mechanism (SV2 + BZ site)
- Vorinostat: Histone deacetylase inhibitor for progressive myoclonus epilepsy
- Antisense therapies: Multiple targets in development

## Seizure Forecasting and Digital Health

**Wearable Devices:**
- Wrist-based seizure detection (Embrace2/Empatica): Detects tonic-clonic seizures
- Smart watches: Heart rate variability, electrodermal activity
- Behind-the-ear EEG (SensorDot): Continuous ambulatory monitoring
- Subcutaneous EEG (UNEEG): 24/7 monitoring for seizure counting

**Seizure Forecasting:**
- Cyclic patterns in epilepsy: Circadian, multiday, and monthly cycles
- Machine learning algorithms: Predict seizure-prone periods
- Pro-ictal state identification: Enable preemptive therapy adjustments
- NeuroVista: Demonstrated feasibility of implanted forecasting systems

**Patient-Reported Digital Tools:**
- Seizure diary apps (Seizure Tracker, EpiDiary)
- Medication adherence monitoring
- Telemedicine for epilepsy management
- Patient portals for data sharing with care teams`,

      keyTerms: [
        { term: 'high-frequency oscillations', definition: 'Brain electrical activity at 80-500 Hz that marks epileptogenic tissue more precisely than standard EEG patterns' },
        { term: 'antisense oligonucleotide', definition: 'Short nucleic acid that targets specific mRNA to modify gene expression; potential therapy for genetic epilepsies' },
        { term: 'cenobamate', definition: 'Dual-mechanism AED (sodium channel + GABA) with highest seizure-freedom rates among new antiseizure medications' },
        { term: 'DREADD', definition: 'Designer Receptors Exclusively Activated by Designer Drugs - chemogenetic tool for on-demand neural circuit control' },
        { term: 'seizure forecasting', definition: 'Using cyclic patterns and machine learning to predict periods of high seizure risk' },
        { term: '7T MRI', definition: 'Ultra-high-field MRI that detects subtle cortical malformations invisible on standard 3T scanners' },
      ],
      clinicalNotes: `Seizure types practice pearls:
1. Cenobamate is the most effective new AED for drug-resistant focal epilepsy (21% seizure-free rate)
2. Genetic testing yields actionable results in ~30% of early-onset epilepsy cases
3. HFOs (80-500 Hz) on intracranial EEG improve surgical outcome prediction
4. 7T MRI detects focal cortical dysplasia missed by 3T in up to 30% of MRI-negative cases
5. ASOs targeting SCN1A represent a root-cause therapy for Dravet syndrome
6. RNS shows progressive improvement over years, suggesting neuroplasticity
7. Network-based surgical planning is replacing lesion-based approaches
8. HLA-B*15:02 testing before carbamazepine is mandatory in at-risk populations
9. Seizure forecasting based on cyclic patterns is becoming clinically feasible`,
    },
  },

  media: [
    {
      id: 'seizure-classification-diagram',
      type: 'diagram',
      filename: 'ilae_2017_seizure_classification.svg',
      title: 'ILAE 2017 Seizure Classification',
      description: 'Flowchart showing focal onset, generalized onset, and unknown onset seizure classification',
    },
    {
      id: 'eeg-patterns',
      type: 'image',
      filename: 'eeg_seizure_patterns.jpg',
      title: 'EEG Patterns in Different Seizure Types',
      description: '3 Hz spike-and-wave (absence), temporal sharp waves (focal), and polyspike-and-wave (myoclonic)',
    },
  ],

  citations: [
    {
      id: 'fisher-ilae-2017',
      type: 'article',
      title: 'Operational classification of seizure types by the International League Against Epilepsy',
      authors: ['Fisher RS', 'Cross JH', 'French JA'],
      source: 'Epilepsia',
      url: 'https://doi.org/10.1111/epi.13670',
    },
    {
      id: 'kapur-dre-surgery-2019',
      type: 'article',
      title: 'Epilepsy surgery in drug-resistant epilepsy: a systematic review and meta-analysis',
      authors: ['Jobst BC', 'Cascino GD'],
      source: 'Epilepsia',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-anticonvulsant-therapy', targetType: 'topic', relationship: 'related', label: 'Anticonvulsant Therapy' },
    { targetId: 'neuro-ischemic-stroke-depth', targetType: 'condition', relationship: 'see-also', label: 'Ischemic Stroke (post-stroke seizures)' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'epilepsy', 'seizures', 'EEG', 'neurosurgery'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'pediatrics', 'emergency'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default seizureTypesContent;
