/**
 * Neurological Referrals
 *
 * Guidelines for when to refer patients to neurology urgently based on
 * clinical presentation and neurological signs.
 */

import { EducationalContent } from '../../types';

export const neurologicalReferralsContent: EducationalContent = {
  id: 'neurological-referrals',
  type: 'concept',
  name: 'Neurological Referral Criteria',
  alternateNames: ['Neurology Referral Guidelines', 'Nervous System Referral', 'Neuro Referral Criteria'],

  levels: {
    1: {
      level: 1,
      summary: 'Neurological referral criteria tell you when to see a brain and nerve specialist because of serious symptoms affecting the nervous system.',
      explanation: `Sometimes problems with your brain, spine, or nerves need special care from a neurologist - a doctor who specializes in the nervous system. Some symptoms mean you need to see a neurologist soon or even go to the emergency room.

**Go to Emergency Room Immediately For:**

**Signs of Stroke**
- Face drooping on one side
- Arm or leg weakness on one side
- Trouble speaking or understanding
- Sudden severe headache

**First Seizure**
If someone has a seizure for the first time, especially if it lasts more than 5 minutes.

**Sudden Vision Loss**
Losing vision in one or both eyes suddenly.

**Severe Headache With Other Symptoms**
- The "worst headache ever"
- With fever and stiff neck
- With confusion or passing out

**Sudden Confusion or Behavior Changes**
Someone who becomes confused suddenly or acts very differently than normal.

**Severe Weakness or Paralysis**
Sudden inability to move part of the body.

**See a Neurologist Soon (Within Days) For:**

**Headaches That Are Getting Worse**
- New type of headache after age 50
- Headaches that are different from usual
- Headaches that wake you from sleep

**Numbness or Tingling**
That does not go away or is getting worse.

**Tremor or Shaking**
New shaking of hands or other body parts.

**Memory Problems**
Getting worse over time and affecting daily life.

**Dizziness That Keeps Coming Back**
Especially if it affects walking or balance.

**Why Seeing a Specialist Matters:**
- Brain and nerve problems can be complex
- Early treatment works better for many conditions
- Some nerve problems can be stopped or slowed
- Special tests may be needed to find the cause`,
      keyTerms: [
        { term: 'neurologist', definition: 'A doctor who specializes in treating diseases of the brain, spinal cord, and nerves' },
        { term: 'stroke', definition: 'When blood flow to part of the brain is cut off, damaging brain cells' },
        { term: 'seizure', definition: 'Sudden, uncontrolled electrical activity in the brain' },
        { term: 'paralysis', definition: 'Loss of ability to move part of the body' },
      ],
      analogies: [
        'Seeing a neurologist for nerve problems is like seeing a computer specialist for a complex software issue - they have the special training to diagnose and fix intricate system problems.',
        'The nervous system is like the electrical wiring of a house - when there is a problem, you need an electrician (neurologist) to find and fix the issue.',
      ],
      examples: [
        'A person with new tremor in one hand and slowness of movement should see a neurologist to check for Parkinson\'s disease.',
        'Someone with frequent migraines not controlled by regular medicine may benefit from a neurologist\'s specialized treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neurological referral criteria establish appropriate urgency for neurology consultation based on acute neurological symptoms, chronic progressive conditions, and specialized diagnostic or therapeutic needs.',
      explanation: `Neurological conditions range from emergent life-threatening events to chronic progressive disorders. Appropriate referral timing ensures optimal outcomes and efficient resource utilization.

**Emergency Referral (ED Immediately):**

**Acute Stroke:**
- Sudden focal neurological deficits
- FAST symptoms (Face, Arm, Speech, Time)
- Sudden severe headache ("thunderclap")
- Time-sensitive interventions available

**Status Epilepticus:**
- Seizure >5 minutes
- Recurrent seizures without recovery
- Medical emergency

**Acute Vision Loss:**
- Monocular vision loss (amaurosis fugax, optic neuritis)
- Binocular vision loss (stroke, elevated ICP)
- Painful vs. painless

**Acute Spinal Cord Compression:**
- Back pain with neurological deficits
- Saddle anesthesia
- Bowel/bladder dysfunction
- Time-sensitive decompression

**Acute Weakness/Paralysis:**
- Guillain-Barre syndrome (ascending paralysis)
- Myasthenic crisis
- Botulism
- Tick paralysis

**Meningitis/Encephalitis:**
- Fever with headache and altered mental status
- Meningismus
- Seizures

**Urgent Referral (Same Day to 1 Week):**

**New Seizure:**
- First unprovoked seizure
- Abnormal MRI or EEG
- Recurrent provoked seizures

**Severe Headache:**
- Thunderclap headache (rule out SAH first)
- New onset after age 50
- Progressive pattern
- "Worst headache of life"

**Optic Neuritis:**
- Painful vision loss
- Color desaturation
- Uhthoff phenomenon
- MS risk stratification

**Transverse Myelitis:**
- Acute/subacute spinal cord dysfunction
- Sensory level
- Paraparesis/quadriparesis

**Acute Inflammatory Disorders:**
- Acute disseminated encephalomyelitis (ADEM)
- Autoimmune encephalitis
- Suspected CNS vasculitis

**Elective Referral (Within Weeks):**

**Headache Disorders:**
- Migraine refractory to primary care management
- Chronic daily headaches
- Cluster headaches
- Medication overuse headaches

**Movement Disorders:**
- Tremor
- Parkinsonism
- Dystonia
- Tics
- Chorea

**Demyelinating Disease:**
- Multiple sclerosis evaluation
- Clinically isolated syndrome
- Neuromyelitis optica

**Peripheral Neuropathy:**
- Progressive symptoms
- Atypical features
- Diagnostic uncertainty

**Cognitive Disorders:**
- Early onset dementia (<65 years)
- Rapid progression
- Atypical features
- Younger patients

**Epilepsy Management:**
- Recurrent seizures
- Treatment-resistant epilepsy
- Pre-surgical evaluation
- Women of childbearing age

**Sleep Disorders:**
- Narcolepsy
- REM sleep behavior disorder
- Restless legs syndrome (refractory)
- Parasomnias`,
      keyTerms: [
        { term: 'status epilepticus', definition: 'Medical emergency of prolonged or recurrent seizures without recovery', pronunciation: 'ep-ih-LEP-tih-kus' },
        { term: 'amaurosis fugax', definition: 'Temporary monocular vision loss from retinal ischemia', pronunciation: 'am-aw-ROH-sis FOO-gaks' },
        { term: 'Uhthoff phenomenon', definition: 'Worsening of neurological symptoms with heat exposure in MS' },
        { term: 'clinically isolated syndrome', definition: 'First episode of neurological symptoms lasting >24 hours suggestive of demyelination (CIS)' },
        { term: 'neuromyelitis optica', definition: 'Autoimmune disorder affecting optic nerves and spinal cord (NMO)' },
      ],
      analogies: [
        'Neurological referral triage is like triaging phone calls to tech support - system crashes need immediate attention, while software questions can be scheduled.',
        'It is like a car repair shop - a smoking engine needs immediate service, while a scheduled tune-up can wait for an appointment.',
      ],
      examples: [
        'A patient with new optic neuritis (painful vision loss in one eye) needs urgent neurology referral for MS evaluation and treatment.',
        'Someone with chronic migraines not responding to standard treatments can be referred electively for preventive therapy optimization.',
      ],
    },
    3: {
      level: 3,
      summary: 'Neurological referral criteria integrate clinical presentation, disease course, and available interventions to optimize timing of specialist involvement for acute emergencies, subacute conditions, and chronic neurological disorders.',
      explanation: `## Neurological Referral Framework

### Acute Neurological Emergencies

**Stroke System of Care:**

**Triage Decision Points:**
- Last known well time
- Intravenous tPA window (<4.5 hours)
- Mechanical thrombectomy window (<24 hours with imaging selection)
- Severity (NIHSS)
- Imaging findings

**Prehospital Assessment:**
- FAST-ED scale for LVO prediction
- Transport to stroke center
- Notification protocols

**Seizure Management:**

**First Unprovoked Seizure:**
- ED evaluation for reversible causes
- MRI brain (outpatient if stable)
- EEG
- Neurology follow-up for recurrence risk

**Provoked Seizure:**
- Treat underlying cause
- Usually no antiepileptic needed
- Exception: structural lesion, status epilepticus

**Epilepsy Established:**
- Neurology for drug selection
- Monitoring if refractory
- Pre-surgical evaluation if appropriate

**Acute Weakness Differential:**

**Guillain-Barre Syndrome:**
- Ascending weakness
- Areflexia
- Albuminocytologic dissociation
- IVIG or plasmapheresis
- Respiratory monitoring

**Myasthenic Crisis:**
- Respiratory muscle weakness
- Bulbar symptoms
- ICU admission
- IVIG or plasmapheresis
- Avoid certain drugs

**Botulism:**
- Descending paralysis
- Bulbar symptoms
- Autonomic dysfunction
- Antitoxin
- Supportive care

### Subacute Neurological Presentations

**Optic Neuritis:**

**Evaluation:**
- MRI brain and orbits (gadolinium)
- Visual evoked potentials
- CSF analysis if atypical

**Treatment:**
- IV methylprednisolone
- Accelerates recovery (does not change final outcome)
- MS risk counseling

**Transverse Myelitis:**

**Workup:**
- MRI spine
- Brain MRI (rule out MS)
- Aquaporin-4 and MOG antibodies
- Infectious workup
- CSF analysis

**Treatment:**
- High-dose steroids
- Plasma exchange if refractory
- Long-term immunosuppression if NMO

**Autoimmune Encephalitis:**

**Suspicion:**
- Subacute altered mental status
- Seizures
- Movement disorders
- Psychiatric symptoms

**Evaluation:**
- MRI brain
- EEG (extreme delta brush)
- CSF (pleocytosis, oligoclonal bands)
- Autoantibody panel
- Tumor screening

**Treatment:**
- IVIG, steroids, or plasma exchange
- Rituximab or cyclophosphamide if refractory
- Tumor removal if paraneoplastic

### Chronic Neurological Disorders

**Multiple Sclerosis:**

**Diagnosis:**
- McDonald criteria
- Dissemination in space and time
- MRI lesions
- CSF oligoclonal bands

**Referral Indications:**
- Clinically isolated syndrome
- Progressive symptoms
- Treatment decisions
- Pregnancy planning

**Treatment:**
- Disease-modifying therapies
- High-efficacy early for aggressive disease
- Escalation vs. induction approaches

**Parkinson Disease:**

**Diagnosis:**
- Clinical (UK Brain Bank criteria)
- Levodopa response
- DatSCAN if uncertain

**Referral Indications:**
- Classic tremor, bradykinesia, rigidity
- Atypical features (early falls, autonomic failure)
- Young onset
- Motor fluctuations/dyskinesias

**Treatment:**
- Levodopa (gold standard)
- Dopamine agonists (younger patients)
- MAO-B inhibitors
- Deep brain stimulation for motor complications

**Headache Disorders:**

**Migraine:**
- Acute: Triptans, NSAIDs, antiemetics
- Preventive: Beta-blockers, topiramate, CGRP inhibitors
- Refractory: Neuromodulation, CGRP monoclonals

**Cluster Headache:**
- Acute: High-flow oxygen, triptans
- Preventive: Verapamil, lithium
- Refractory: Sphenopalatine ganglion stimulation

**Medication Overuse Headache:**
- Withdrawal of overused medications
- Bridge therapy
- Prevention education

### Peripheral Nervous System

**Peripheral Neuropathy:**

**Indications for Referral:**
- Rapid progression
- Severe pain
- Motor predominant
- Atypical features
- Diagnostic uncertainty

**Workup:**
- Nerve conduction studies/EMG
- Laboratory evaluation
- Nerve biopsy if indicated

**Treatment:**
- Treat underlying cause
- Pain management
- Neuropathy-specific (CIDP: IVIG)

**Myasthenia Gravis:**

**Diagnosis:**
- Fatigable weakness
- Acetylcholine receptor antibodies
- MuSK antibodies if seronegative
- EMG repetitive stimulation
- Chest CT (thymoma)

**Treatment:**
- Pyridostigmine
- Steroids
- Steroid-sparing agents
- Thymectomy if thymoma or generalized AChR+
- IVIG/plasma exchange for crisis

### Specialized Testing

**Electrodiagnostics:**
- Nerve conduction studies
- Electromyography
- Repetitive stimulation
- Single fiber EMG

**Neuroimaging:**
- MRI (brain, spine, orbits)
- MR angiography
- PET (dementia, epilepsy)
- Functional MRI

**Neurophysiology:**
- Electroencephalography (EEG)
- Evoked potentials (VEP, SSEP, BAER)
- Polysomnography
- Long-term monitoring

**CSF Analysis:**
- Cell count and differential
- Protein, glucose
- Oligoclonal bands
- Xanthochromia
- Cytology
- Specific antibody testing

**Neuropsychology:**
- Cognitive assessment
- Dementia evaluation
- Pre-surgical (epilepsy, DBS)
- Forensic evaluation`,
      keyTerms: [
        { term: 'albuminocytologic dissociation', definition: 'Elevated CSF protein with normal cell count; characteristic of GBS' },
        { term: 'McDonald criteria', definition: 'Diagnostic criteria for multiple sclerosis based on dissemination in space and time' },
        { term: 'extreme delta brush', definition: 'EEG pattern seen in anti-NMDA receptor encephalitis' },
        { term: 'CGRP', definition: 'Calcitonin Gene-Related Peptide; target for migraine therapies' },
        { term: 'DatSCAN', definition: 'Nuclear medicine scan assessing dopamine transporters in Parkinson disease' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced neurological referral management requires integration of specialized diagnostic testing, disease-modifying therapies, and multidisciplinary care coordination for complex neurological conditions.',
      explanation: `## Advanced Neurological Care

### Comprehensive Epilepsy Care

**Pre-Surgical Evaluation:**

**Phase I (Non-Invasive):**
- 3T MRI (high-resolution)
- Video-EEG monitoring
- Neuropsychological testing
- Wada test (language/memory)
- FDG-PET (interictal)
- SPECT (ictal vs. interictal)

**Phase II (Invasive):**
- Subdural grids/strips
- Depth electrodes (SEEG)
- Functional mapping
- Seizure localization

**Surgical Options:**
- Resection (lesionectomy, lobectomy)
- Disconnection (corpus callosotomy, hemispherectomy)
- Neuromodulation (VNS, RNS, DBS)
- Laser ablation (LITT)

**Special Populations:**

**Women with Epilepsy:**
- Preconception counseling
- Folic acid supplementation
- AED selection (avoid valproate)
- Contraception interactions
- Pregnancy monitoring

**Elderly with New-Onset Seizure:**
- Stroke most common cause
- Neurodegenerative disease
- Drug interactions
- Fracture risk

### Advanced Multiple Sclerosis Management

**High-Efficacy Therapies:**

**Natalizumab:**
- PML risk stratification (JC virus antibody index)
- Monitoring required
- Highly effective

**Alemtuzumab:**
- Infusion protocol
- Autoimmune complications (thyroid, ITP)
- Monitoring program

**Ocrelizumab:**
- Anti-CD20 monoclonal
- Primary progressive indication
- Infusion every 6 months

**Cladribine:**
- Oral therapy
- Short course
- Lymphocyte monitoring

**Progressive MS:**
- Ocrelizumab (primary progressive)
- Siponimod (secondary progressive, active)
- Symptomatic management
- Rehabilitation focus

**Radiologically Isolated Syndrome:**
- MRI incidental findings
- Risk stratification
- Early treatment consideration

### Movement Disorder Surgery

**Deep Brain Stimulation (DBS):**

**Indications:**
- Parkinson disease (motor fluctuations)
- Essential tremor
- Dystonia
- OCD (approved)
- Epilepsy (approved)

**Target Selection:**
- STN (parkinsonism, medication reduction)
- GPi (parkinsonism, dystonia, less dyskinesia)
- Vim (tremor)

**Programming:**
- Postoperative optimization
- Troubleshooting
- Battery management

**Focused Ultrasound:**
- Tremor (FDA approved)
- Non-invasive
- No hardware
- Irreversible

### Headache Center Care

**Refractory Migraine:**

**Interventions:**
- OnabotulinumtoxinA (chronic migraine)
- CGRP monoclonal antibodies
- Gepants (acute and preventive)
- Ditans (acute)
- Neuromodulation devices

**Inpatient Treatment:**
- DHE protocol
- IV lidocaine
- Steroid bridge
- Refractory status migrainosus

**Occipital Neuralgia:**
- Diagnostic blocks
- Pulsed radiofrequency
- Peripheral nerve stimulation

### Cognitive and Behavioral Neurology

**Dementia Evaluation:**

**Atypical Dementias:**
- Frontotemporal dementia
- Primary progressive aphasia
- Corticobasal degeneration
- Progressive supranuclear palsy
- Creutzfeldt-Jakob disease

**Biomarkers:**
- CSF Abeta42, tau, p-tau
- Amyloid PET
- FDG-PET
- MRI patterns
- Genetic testing (FH, early onset)

**Treatment:**
- Cholinesterase inhibitors
- Memantine
- Symptomatic management
- Clinical trials

**Autoimmune Dementia:**
- Rapid progression
- Psychiatric features
- Seizures
- Autoantibody panel
- Immunotherapy response

### Neuromuscular Disease

**Motor Neuron Disease:**

**ALS Management:**
- Riluzole
- Edaravone
- Symptomatic care
- Non-invasive ventilation
- PEG placement
- Multidisciplinary clinic

**Genetic Testing:**
- SOD1, C9orf72, others
- Family counseling
- Emerging genetic therapies

**Muscular Dystrophies:**
- Genetic diagnosis
- Cardiac monitoring
- Respiratory care
- Disease-specific treatments
- Clinical trials

### Neuro-Oncology

**Primary Brain Tumors:**
- Multidisciplinary team
- Molecular profiling
- Standard of care protocols
- Clinical trials
- Palliative care integration

**Paraneoplastic Syndromes:**
- Autoantibody testing
- Tumor screening
- Immunotherapy
- Oncology coordination

### Neuro-Infectious Disease

**HIV Neurology:**
- Opportunistic infections
- HIV-associated neurocognitive disorder
- ART optimization
- Immune reconstitution

**Prion Diseases:**
- CJD (sporadic, genetic, acquired)
- Diagnostic criteria
- Infection control
- Family counseling
- Research referral`,
      keyTerms: [
        { term: 'PML', definition: 'Progressive Multifocal Leukoencephalopathy; JC virus brain infection risk with some MS therapies' },
        { term: 'radiologically isolated syndrome', definition: 'MRI findings suggestive of MS without clinical symptoms (RIS)' },
        { term: 'SEEG', definition: 'Stereoelectroencephalography; depth electrode monitoring for epilepsy surgery' },
        { term: 'LITT', definition: 'Laser Interstitial Thermal Therapy; minimally invasive lesion ablation' },
        { term: 'gepant', definition: 'Class of CGRP receptor antagonists for migraine treatment' },
      ],
      clinicalNotes: 'The field of neurology has been transformed by disease-modifying therapies in multiple sclerosis and migraine, and by advanced surgical interventions for epilepsy and movement disorders. Multidisciplinary care and patient selection for these interventions are critical.',
    },
    5: {
      level: 5,
      summary: 'Expert-level neurological referral practice encompasses precision neurology, advanced neuroimaging interpretation, neuroimmunology therapeutics, and integration of emerging technologies in neurological care.',
      explanation: `## Expert-Level Neurological Care

### Precision Neurology

**Genomic Medicine:**

**Diagnostic Testing:**
- Whole exome sequencing
- Whole genome sequencing
- Panel testing for specific phenotypes
- Pharmacogenomics

**Therapeutic Applications:**
- Spinal muscular atrophy (nusinersen, onasemnogene)
- Hereditary ATTR amyloidosis (patisiran, inotersen)
- Huntington disease (tominersen trials)
- Duchenne muscular dystrophy (gene therapy trials)

**Variant Interpretation:**
- ACMG guidelines
- Variant of uncertain significance
- Functional studies
- Family segregation

### Advanced Neuroimaging

**7 Tesla MRI:**
- Ultra-high field imaging
- Cortical lesion detection in MS
- Hippocampal subfield analysis
- Vascular imaging

**Quantitative MRI:**
- Volumetrics (brain, hippocampus)
- Diffusion tensor imaging (DTI)
- Magnetization transfer
- Myelin water fraction

**Molecular Imaging:**
- Amyloid PET
- Tau PET
- Dopamine transporter imaging
- TSPO (neuroinflammation)

**Functional Imaging:**
- Resting state fMRI
- Task-based fMRI (pre-surgical)
- Arterial spin labeling (perfusion)
- MR spectroscopy

### Neuroimmunology Advances

**MOG Antibody Disease:**
- Distinct from MS and NMO
- Optic neuritis, myelitis, ADEM-like
- Relapsing course
- Immunotherapy responsive

**GFAP Astrocytopathy:**
- Autoimmune meningoencephalitis
- Perivascular radial enhancement
- Immunotherapy responsive

**Checkpoint Inhibitor Toxicity:**
- Neurological complications
- Hypophysitis
- Myasthenia gravis
- Encephalitis
- Guillain-Barre syndrome

### Neuromodulation

**Next-Generation Devices:**

**Responsive Neurostimulation (RNS):**
- Closed-loop seizure detection
- Direct cortical stimulation
- Learning algorithms

**DBS Innovations:**
- Directional leads
- Current steering
- Sensing capabilities
- Adaptive stimulation

**Spinal Cord Stimulation:**
- High-frequency
- Burst stimulation
- Dorsal root ganglion
- Pain disorders

**Non-Invasive Stimulation:**
- TMS for depression, migraine
- tDCS for rehabilitation
- VNS (non-invasive)
- Trigeminal nerve stimulation

### Neurocritical Care

**Multimodal Monitoring:**

**Invasive:**
- Intracranial pressure
- Brain tissue oxygen
- Cerebral microdialysis
- Continuous EEG

**Non-Invasive:**
- Transcranial Doppler
- Near-infrared spectroscopy
- Pupillometry
- Automated neuro checks

**Targeted Temperature Management:**
- Post-cardiac arrest
- Neuroprotection trials
- Fever prevention

**Neuroprognostication:**
- Multimodal assessment
- Delayed evaluation
- Standardized protocols
- Family communication

### Neurotherapeutics Pipeline

**Antisense Oligonucleotides:**
- Mechanism: Target specific mRNA
- SOD1 ALS (tofersen)
- Huntington disease
- Hereditary ataxias

**Gene Therapy:**
- AAV vectors
- Spinal muscular atrophy
- Hemophilia B (neurological implications)
- Parkinson disease (GDNF, AADC)

**Stem Cell Therapy:**
- Mesenchymal stem cells
- Neural stem cells
- Clinical trials ongoing
- Safety and efficacy evaluation

**Immunotherapy:**
- CAR-T for CNS lymphoma
- Checkpoint inhibitors
- Monoclonal antibodies
- B cell depletion

### Research Frontiers

**Biomarkers:**
- Neurofilament light chain (NfL)
- GFAP
- S100B
- Blood-based biomarkers
- Point-of-care testing

**Digital Biomarkers:**
- Wearable sensors
- Smartphone assessments
- Voice analysis
- Gait analysis
- Sleep monitoring

**Artificial Intelligence:**
- Imaging interpretation
- EEG reading
- Outcome prediction
- Drug discovery
- Clinical decision support

### Global Neurology

**Capacity Building:**
- Training programs
- Telemedicine networks
- Essential medicines
- Diagnostics access

**Neglected Tropical Diseases:**
- Cysticercosis
- Schistosomiasis
- Trypanosomiasis
- Leprosy

**Stroke Systems:**
- Global burden
- Low-resource settings
- Task shifting
- Mobile technology

### Education and Training

**Neurology Education:**
- Competency-based training
- Simulation
- Interprofessional education
- Lifelong learning

**Quality Improvement:**
- Registries
- Outcomes measurement
- Care pathways
- Patient safety

**Advocacy:**
- Research funding
- Workforce development
- Public awareness
- Health policy`,
      keyTerms: [
        { term: 'precision neurology', definition: 'Tailoring neurological diagnosis and treatment based on individual genetic, molecular, and clinical characteristics' },
        { term: 'neurofilament light chain', definition: 'Blood and CSF biomarker of axonal injury (NfL)' },
        { term: 'antisense oligonucleotide', definition: 'Synthetic nucleic acid that binds to specific mRNA to modulate protein expression' },
        { term: 'CAR-T', definition: 'Chimeric Antigen Receptor T-cell therapy; immune-based treatment' },
        { term: 'ACMG', definition: 'American College of Medical Genetics and Genomics; variant interpretation guidelines' },
      ],
      clinicalNotes: `Expert neurological practice requires:
1. Integration of advanced diagnostics and therapeutics
2. Multidisciplinary collaboration
3. Precision medicine approaches
4. Clinical trial availability
5. Quality improvement focus
6. Global health perspective

Neurology is undergoing rapid transformation with disease-modifying therapies, advanced surgical interventions, and precision medicine approaches changing outcomes for many previously untreatable conditions.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ahn-acute-therapy-guidelines',
      type: 'article',
      title: 'Practice Guideline Process Checklist: Acute Therapy',
      authors: ['American Headache Society'],
      source: 'Headache',
    },
    {
      id: 'nmo-spectrum-disorders',
      type: 'article',
      title: 'The Spectrum of Neuromyelitis Optica: A Clinical Review',
      authors: ['Wingerchuk DM', 'et al.'],
      source: 'Nature Reviews Neurology',
    },
    {
      id: 'neurosurgery-epilepsy',
      type: 'article',
      title: 'Practice Guidelines for Epilepsy Surgery',
      authors: ['Engel J', 'et al.'],
      source: 'Neurology',
    },
  ],

  crossReferences: [
    { targetId: 'cardiac-referral-criteria', targetType: 'concept', relationship: 'sibling', label: 'Cardiac Referral Criteria' },
    { targetId: 'oncologic-urgencies', targetType: 'concept', relationship: 'sibling', label: 'Oncologic Urgencies' },
    { targetId: 'psychiatric-emergencies', targetType: 'concept', relationship: 'sibling', label: 'Psychiatric Emergencies' },
    { targetId: 'neurological-red-flags', targetType: 'concept', relationship: 'related', label: 'Neurological Red Flags' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'clinical-reasoning', 'referral'],
    keywords: ['neurology', 'referral', 'seizure', 'stroke', 'headache', 'MS', 'urgent'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neurologicalReferralsContent;
