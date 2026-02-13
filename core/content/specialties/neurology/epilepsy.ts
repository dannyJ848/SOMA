/**
 * Epilepsy and Seizures - Comprehensive Neurology Content
 *
 * Complete coverage of seizure types, epilepsy syndromes, workup,
 * treatment, and status epilepticus management.
 */

import { EducationalContent } from '../../types';

export const epilepsyContent: EducationalContent = {
  id: 'neuro-epilepsy',
  type: 'condition',
  name: 'Epilepsy and Seizures',
  alternateNames: ['Seizure Disorder', 'Convulsions', 'Epileptic Disorder'],
  hpoId: 'HP:0001250',

  levels: {
    1: {
      level: 1,
      summary: 'A seizure is a sudden burst of abnormal electrical activity in the brain that can cause changes in movement, sensation, awareness, or behavior.',
      explanation: `Your brain cells normally communicate using tiny electrical signals. A seizure happens when many brain cells fire at once in an abnormal, excessive way.

**What Can Happen During a Seizure:**
- Shaking or jerking movements (convulsions)
- Staring spells - seeming "zoned out"
- Confusion or strange sensations
- Loss of consciousness
- Strange movements like lip smacking or picking at clothes

**Two Main Categories:**
- **Focal (partial)**: Starts in one area of the brain
- **Generalized**: Affects the whole brain from the start

**Common Types:**
- *Tonic-clonic* (grand mal): Stiffening, then jerking, loss of consciousness
- *Absence* (petit mal): Brief staring spells, common in children
- *Focal aware*: Person stays awake but has strange sensations or movements

**What is Epilepsy?**
Epilepsy is when someone has a tendency to have repeated seizures. It's diagnosed when someone has:
- Two or more unprovoked seizures, OR
- One seizure with a high chance of more

**What to Do If Someone Has a Seizure:**
- Stay calm
- Keep them safe from injury
- Put them on their side
- Don't put anything in their mouth
- Time the seizure
- Call 911 if it lasts more than 5 minutes`,
      keyTerms: [
        { term: 'seizure', definition: 'A sudden burst of abnormal electrical activity in the brain causing changes in movement or awareness' },
        { term: 'epilepsy', definition: 'A condition where someone has a tendency to have repeated seizures' },
        { term: 'convulsion', definition: 'Uncontrolled shaking movements during a seizure' },
      ],
      analogies: [
        'A seizure is like an electrical storm in the brain - too many brain cells firing at once.',
        'Normal brain activity is like an orchestra playing in harmony. During a seizure, it\'s like all the musicians playing different songs loudly at the same time.',
      ],
      examples: [
        'A child suddenly stares blankly for 10 seconds, then continues what they were doing - this is an absence seizure.',
        'An adult falls down, stiffens, then shakes for 2 minutes and is confused afterward - this is a tonic-clonic seizure.',
      ],
    },
    2: {
      level: 2,
      summary: 'Seizures are classified as focal (arising from one hemisphere) or generalized (bilateral onset), with multiple subtypes, and epilepsy is diagnosed based on recurrence risk and etiology.',
      explanation: `**Seizure Classification (ILAE 2017):**

**Focal Onset:**
- Starts in networks limited to one hemisphere
- *Aware* (formerly simple partial): Consciousness preserved
- *Impaired awareness* (formerly complex partial): Consciousness affected
- Motor onset or non-motor onset
- Can evolve to bilateral tonic-clonic

*Focal Symptoms by Location:*
- Temporal lobe: Aura (déjà vu, fear), automatisms, memory impairment
- Frontal lobe: Motor features, brief, nocturnal
- Parietal lobe: Sensory symptoms
- Occipital lobe: Visual phenomena

**Generalized Onset:**
- Bilateral networks from onset
- *Motor:*
  - Tonic-clonic: Stiffening → jerking → postictal confusion
  - Tonic: Stiffening only
  - Clonic: Jerking only
  - Myoclonic: Brief shock-like jerks
  - Atonic: Sudden loss of muscle tone (drop attacks)
- *Non-motor:*
  - Absence: Brief staring with behavioral arrest

**Unknown Onset:**
- Insufficient information to classify

**Epilepsy Classification:**
1. *Focal epilepsies*
2. *Generalized epilepsies*
3. *Combined generalized and focal*
4. *Unknown*

**Etiology:**
- Structural (lesions, malformations)
- Genetic (channelopathies, mutations)
- Infectious (encephalitis, neurocysticercosis)
- Metabolic (electrolyte abnormalities)
- Immune (autoimmune encephalitis)
- Unknown

**Seizure Mimics:**
- Syncope (fainting)
- Psychogenic nonepileptic seizures
- Migraine with aura
- Movement disorders
- Sleep disorders`,
      keyTerms: [
        { term: 'focal seizure', definition: 'Seizure arising from one brain hemisphere' },
        { term: 'generalized seizure', definition: 'Seizure involving both hemispheres from onset' },
        { term: 'postictal', definition: 'The period of confusion and recovery after a seizure', pronunciation: 'post-IK-tul' },
        { term: 'aura', definition: 'Warning symptoms before a seizure, actually the seizure beginning' },
      ],
      analogies: [
        'Focal seizures are like a fire starting in one room. Generalized seizures are like a fire breaking out everywhere at once.',
      ],
    },
    3: {
      level: 3,
      summary: 'Epilepsy workup includes EEG, neuroimaging, and etiology-specific testing, with treatment based on seizure type, syndrome, and individual factors.',
      explanation: `**Initial Evaluation:**

**History:**
- Detailed seizure semiology
- Witnesses essential
- Triggers, prodrome, aura
- Postictal state
- Prior seizures
- Risk factors: Head trauma, stroke, family history

**Diagnostic Testing:**

*EEG (Electroencephalography):*
- Routine: 20-30 minutes
- Sensitivity ~50% for single study
- Sleep-deprived EEG increases yield
- Ambulatory EEG: Extended monitoring
- Video-EEG: Gold standard for characterization

*Neuroimaging:*
- MRI brain with epilepsy protocol
- 3T preferred
- Sequences: T1, T2, FLAIR, high-resolution T2 coronal
- May identify structural cause in 15-30%

*Laboratory:*
- Basic metabolic panel, glucose
- Drug levels if on AEDs
- Consider: Prolactin (within 20 min of seizure)
- Lumbar puncture if infection/inflammation suspected

**First Seizure Management:**
- Treat underlying cause if identified
- Start AED if:
  - High recurrence risk (abnormal EEG, abnormal MRI, nocturnal seizure)
  - Recurrence risk >60%
  - Patient preference
- Driving restrictions (state-specific)

**Anti-Seizure Medications (ASMs):**

*Broad-spectrum (focal and generalized):*
- Levetiracetam
- Valproate
- Lamotrigine
- Topiramate

*Focal-onset preferred:*
- Carbamazepine
- Oxcarbazepine
- Lacosamide
- Phenytoin

*Absence seizures:*
- Ethosuximide (first-line for absence only)
- Valproate
- Lamotrigine

*Avoid in generalized epilepsies:*
- Carbamazepine, phenytoin (may worsen)

**Treatment Approach:**
- Start with one drug (monotherapy)
- Titrate to effect or side effects
- If fails, try second monotherapy or add-on
- ~60-70% controlled with first or second drug`,
      keyTerms: [
        { term: 'semiology', definition: 'The detailed description of seizure features and progression' },
        { term: 'EEG', definition: 'Electroencephalography - recording of brain electrical activity' },
        { term: 'interictal', definition: 'Between seizures', pronunciation: 'in-ter-IK-tul' },
        { term: 'ASM', definition: 'Anti-seizure medication (preferred term over AED)' },
      ],
      clinicalNotes: 'EEG within 24-48 hours of seizure increases yield. MRI essential to evaluate for structural cause. Avoid carbamazepine/phenytoin in generalized epilepsies.',
    },
    4: {
      level: 4,
      summary: 'Refractory epilepsy requires comprehensive evaluation for surgical candidacy, device therapy, and consideration of autoimmune and genetic etiologies.',
      explanation: `**Drug-Resistant Epilepsy:**
- Definition: Failure of 2 appropriate ASMs at adequate doses
- Affects ~30% of epilepsy patients
- Refer to comprehensive epilepsy center

**Pre-Surgical Evaluation:**

*Phase 1 (Non-invasive):*
- Prolonged video-EEG monitoring
- High-resolution 3T MRI
- Neuropsychological testing
- FDG-PET (hypometabolism at seizure focus)
- MEG (magnetoencephalography)
- Ictal SPECT

*Phase 2 (Invasive):*
- Intracranial EEG (SEEG or subdural grids)
- Functional mapping
- Wada test (language/memory lateralization)

**Surgical Options:**

*Resective Surgery:*
- Anterior temporal lobectomy: 60-80% seizure-free
- Lesionectomy for MRI-visible lesions
- Extratemporal resections

*Disconnective Surgery:*
- Corpus callosotomy (drop attacks)
- Hemispherectomy (hemispheric syndromes)

*Ablative Procedures:*
- Laser interstitial thermal therapy (LITT)
- Stereotactic radiosurgery

**Device Therapy:**

*Vagus Nerve Stimulation (VNS):*
- Implanted generator, left vagus nerve electrode
- Palliative: ~50% have ≥50% reduction
- May improve over years
- Magnet activation for acute seizures

*Responsive Neurostimulation (RNS):*
- Closed-loop system
- Detects and responds to seizure activity
- For focal epilepsy with 1-2 foci

*Deep Brain Stimulation (DBS):*
- Anterior thalamic nucleus target
- For focal epilepsy
- SANTE trial evidence

**Special Considerations:**

*Autoimmune Epilepsy:*
- Consider if: Subacute onset, memory impairment, psychiatric features
- Antibodies: LGI1, CASPR2, NMDA-R, GAD65
- Immunotherapy may be effective

*Genetic Epilepsies:*
- SCN1A (Dravet syndrome)
- KCNQ2 (benign familial neonatal)
- SLC2A1 (GLUT1 deficiency)
- Targeted therapies emerging

*SUDEP (Sudden Unexpected Death in Epilepsy):*
- Leading cause of death in epilepsy
- Risk factors: Generalized tonic-clonic seizures, nocturnal seizures, suboptimal control
- Discuss with all patients`,
      keyTerms: [
        { term: 'drug-resistant epilepsy', definition: 'Failure of 2 appropriate anti-seizure medications' },
        { term: 'SEEG', definition: 'Stereo-electroencephalography - invasive monitoring with depth electrodes' },
        { term: 'VNS', definition: 'Vagus Nerve Stimulation - implantable device for epilepsy' },
        { term: 'SUDEP', definition: 'Sudden Unexpected Death in Epilepsy' },
      ],
      clinicalNotes: 'Drug-resistant epilepsy (failing 2 ASMs) should prompt referral to epilepsy center. Surgical evaluation can lead to seizure freedom in selected patients. SUDEP counseling is essential.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive epilepsy care integrates precision medicine approaches, advanced surgical techniques, immunotherapy for autoimmune etiologies, and management of comorbidities and status epilepticus.',
      explanation: `**Status Epilepticus Management:**

*Definition:*
- Generalized convulsive: ≥5 minutes of continuous seizure or repeated seizures without recovery
- Non-convulsive: EEG-confirmed ongoing seizure activity

*Phases of Treatment:*

*Emergent (0-5 min):*
- Stabilize (ABCs), IV access, labs, glucose
- Lorazepam 4mg IV (or diazepam, midazolam)
- Repeat benzodiazepine once if needed

*Urgent (5-20 min):*
- If seizure continues after 2 benzodiazepine doses
- Levetiracetam 60mg/kg IV, OR
- Fosphenytoin 20mg PE/kg IV, OR
- Valproate 40mg/kg IV

*Refractory (20-60 min):*
- Third-line ASM, OR
- Continuous infusion (propofol, midazolam, ketamine)
- Continuous EEG monitoring
- ICU admission

*Super-refractory:*
- Continues ≥24 hours despite anesthetics
- Consider: Ketamine, immunotherapy, ketogenic diet, surgery
- Mortality 20-35%

**Precision Medicine:**

*Genetic Testing:*
- Next-generation sequencing panels
- Whole exome/genome sequencing
- Pharmacogenomics (HLA-B*1502 for carbamazepine)

*Targeted Therapies:*
- Dravet (SCN1A): Avoid sodium channel blockers
- Fenfluramine, cannabidiol (Epidiolex)
- KCNQ2: Sodium channel blockers may help
- SLC2A1 (GLUT1): Ketogenic diet

*Antisense Oligonucleotides:*
- SCN1A (Dravet)
- Disease-modifying potential

**Autoimmune Epilepsy:**

*Syndromes:*
- Anti-NMDA receptor encephalitis
- Anti-LGI1 encephalitis
- Anti-GAD65 encephalitis

*Workup:*
- Serum and CSF autoantibody panels
- MRI (mesial temporal changes)
- FDG-PET (hypermetabolism)

*Treatment:*
- First-line: Steroids, IVIG, plasmapheresis
- Second-line: Rituximab, cyclophosphamide
- May require prolonged immunotherapy

**Comorbidities:**

*Psychiatric:*
- Depression (25-50%)
- Anxiety (30%)
- Screen and treat

*Cognitive:*
- Memory impairment common
- ASM effects (topiramate, phenobarbital)
- Neuropsychological monitoring

*Bone Health:*
- Enzyme-inducing ASMs reduce vitamin D
- Increased fracture risk
- Vitamin D supplementation

**Women and Epilepsy:**
- Catamenial epilepsy (perimenstrual worsening)
- Teratogenicity: Valproate contraindicated in pregnancy
- Preconception counseling essential
- Folic acid supplementation
- Breastfeeding generally safe

**Quality Metrics:**
- Seizure freedom rate
- ASM side effect burden
- Quality of life (QOLIE-31)
- Appropriate surgery referral
- SUDEP counseling documented`,
      keyTerms: [
        { term: 'status epilepticus', definition: 'Continuous seizure ≥5 minutes or repeated seizures without recovery' },
        { term: 'super-refractory status', definition: 'Status epilepticus continuing ≥24 hours despite anesthetics' },
        { term: 'Dravet syndrome', definition: 'Severe epilepsy caused by SCN1A mutations' },
        { term: 'catamenial epilepsy', definition: 'Epilepsy with seizure clustering around menstrual periods' },
      ],
      clinicalNotes: `Clinical pearls:
1. Status epilepticus: Give benzodiazepine immediately, then second agent
2. Drug-resistant epilepsy: Refer to epilepsy center after 2 failed ASMs
3. Avoid valproate in women of childbearing potential
4. Carbamazepine contraindicated in generalized epilepsies
5. Consider autoimmune etiology in subacute onset with memory/psych changes
6. SUDEP risk discussion is standard of care
7. Genetic testing guides precision treatment
8. Ketogenic diet effective in selected syndromes`,
    },
  },

  media: [
    {
      id: 'eeg-seizure-patterns',
      type: 'diagram',
      filename: 'eeg_seizure_patterns.svg',
      title: 'EEG Seizure Patterns',
      description: 'Normal EEG, focal onset, generalized 3Hz spike-wave',
    },
    {
      id: 'seizure-types-video',
      type: 'video',
      filename: 'seizure_types.mp4',
      title: 'Seizure Semiology',
      description: 'Video examples of different seizure types',
      duration: 600,
    },
  ],

  citations: [
    {
      id: 'ilae-classification-2017',
      type: 'article',
      title: 'Operational classification of seizure types by the ILAE',
      authors: ['Fisher RS', 'Cross JH', 'French JA'],
      source: 'Epilepsia',
      url: 'https://doi.org/10.1111/epi.13670',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-status-epilepticus', targetType: 'condition', relationship: 'related', label: 'Status Epilepticus' },
    { targetId: 'neuro-anticonvulsants', targetType: 'topic', relationship: 'see-also', label: 'Anticonvulsant Medications' },
    { targetId: 'neuro-eeg', targetType: 'topic', relationship: 'see-also', label: 'EEG Interpretation' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'epilepsy', 'emergency'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'pediatrics'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default epilepsyContent;
