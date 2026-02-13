/**
 * Epilepsy - Comprehensive Educational Content
 *
 * Covers seizure types, epilepsies, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const epilepsy: EducationalContent = {
  id: 'condition-epilepsy',
  type: 'condition',
  name: 'Epilepsy',
  nameEs: 'Epilepsia',
  alternateNames: ['Seizure Disorder', 'Epileptic Syndrome', 'Convulsive Disorder'],
  hpoId: 'HP:0001250',

  levels: {
    1: {
      level: 1,
      summary: 'Epilepsy is a brain disorder that causes recurring seizures, which are sudden bursts of electrical activity in the brain.',
      explanation: `Epilepsy is a condition where people have repeated seizures. A seizure is like a sudden electrical storm in the brain that can affect how a person moves, feels, or acts.

**What is a seizure:**
- Sudden burst of electrical activity in the brain
- Can cause shaking, staring, confusion
- Usually lasts seconds to minutes
- Brain cells fire abnormally

**Two main types of seizures:**

**Focal seizures:**
- Start in one area of the brain
- Person may be aware or confused
- Can cause unusual sensations or movements

**Generalized seizures:**
- Affect both sides of the brain
- Can cause loss of consciousness
- May involve whole body stiffening and jerking

**What causes epilepsy:**
- Often unknown
- Brain injury or infection
- Stroke
- Brain tumor
- Genetic factors
- Developmental problems

**Treatment:**
- Anti-seizure medications
- Special diet (ketogenic diet)
- Surgery in some cases
- Devices that help prevent seizures
- Most people can control seizures with treatment`,
      keyTerms: [
        { term: 'seizure', definition: 'A sudden burst of electrical activity in the brain' },
        { term: 'epilepsy', definition: 'A condition of having recurrent unprovoked seizures' },
        { term: 'brain waves', definition: 'Electrical signals in the brain' },
        { term: 'anti-seizure medication', definition: 'Medicine that helps prevent seizures' },
      ],
      analogies: [
        'A seizure is like an electrical storm in the brain - normal circuits get overwhelmed by sudden activity.',
        'Think of the brain as an orchestra; a seizure is when all instruments play loud and chaotic instead of coordinated music.',
      ],
      examples: [
        'A child who suddenly stares blankly and smacks lips may be having an absence seizure.',
        'A person who falls, stiffens, and shakes may be having a generalized tonic-clonic seizure.',
      ],
    },
    2: {
      level: 2,
      summary: 'Epilepsy is a chronic neurological disorder characterized by recurrent unprovoked seizures due to abnormal hypersynchronous neuronal activity, with classification based on seizure type, etiology, and epilepsy syndrome.',
      explanation: `## Definition and Classification

**ILAE 2017 Definition:**
- At least two unprovoked seizures occurring >24 hours apart
- One unprovoked seizure with high recurrence risk (60%+ over 10 years)
- Diagnosis of epilepsy syndrome

**Classification by onset:**

**Focal onset seizures:**
- Originate in one hemisphere
- With intact awareness (simple partial)
- With impaired awareness (complex partial)
- Evolving to bilateral (secondary generalized)

**Generalized onset seizures:**
- Engage both hemispheres from onset
- Tonic-clonic (grand mal)
- Absence (petit mal)
- Myoclonic
- Atonic (drop attacks)
- Tonic
- Clonic

**Unknown onset:**
- Motor (tonic-clonic, epileptic spasms)
- Non-motor (behavior arrest)

## Seizure Types in Detail

**Focal aware (simple partial):**
- Consciousness preserved
- Motor, sensory, autonomic, or psychic symptoms
- Jacksonian march (spread along motor cortex)

**Focal impaired awareness (complex partial):**
- Altered consciousness
- Automatisms (lip smacking, fumbling)
- Post-ictal confusion

**Absence seizures:**
- Brief loss of awareness (seconds)
- No post-ictal confusion
- 3 Hz spike-and-wave on EEG
- Childhood onset

**Tonic-clonic seizures:**
- Tonic phase: Stiffening, cry, cyanosis
- Clonic phase: Rhythmic jerking
- Post-ictal: Confusion, headache, fatigue

**Myoclonic seizures:**
- Brief, shock-like jerks
- Preserved awareness
- Morning predominance (JME)

## Etiology

**Structural:**
- Stroke (most common in adults)
- Traumatic brain injury
- Brain tumors
- Hippocampal sclerosis
- Cortical dysplasia
- Neurocysticercosis (global)

**Genetic:**
- Channelopathies (SCN1A, KCNQ2)
- Epilepsy syndromes
- Often familial

**Infectious:**
- Meningitis, encephalitis
- Brain abscess
- HIV, neurocysticercosis

**Metabolic:**
- Hypoglycemia, hyponatremia
- Hypocalcemia
- Inborn errors of metabolism

**Immune:**
- Autoimmune encephalitis
- Limbic encephalitis

## Evaluation

**History:**
- Semiology (what the seizure looks like)
- Triggers, prodrome, post-ictal state
- Family history
- Developmental history

**EEG:**
- Routine EEG (30-60 min)
- Sleep-deprived EEG
- Ambulatory EEG (24-72 hr)
- Video-EEG monitoring (inpatient)

**Imaging:**
- MRI brain (high-resolution epilepsy protocol)
- CT (emergency setting)
- PET, SPECT for localization

**Laboratory:**
- Metabolic panel, glucose
- CBC, LFTs
- Lumbar puncture if infection suspected`,
      keyTerms: [
        { term: 'ILAE', definition: 'International League Against Epilepsy; classification authority' },
        { term: 'automatisms', definition: 'Repetitive, purposeless behaviors during seizures' },
        { term: 'post-ictal', definition: 'Period after a seizure' },
        { term: ' Jacksonian march', definition: 'Sequential spread of seizure activity along motor cortex' },
      ],
      analogies: [
        'Focal seizures are like a fire starting in one room; generalized seizures are like the whole house catching fire at once.',
        'The EEG is like listening to the brain\'s electrical symphony; seizures show up as chaotic noise.',
      ],
    },
    3: {
      level: 3,
      summary: 'Epilepsy involves abnormal neuronal hypersynchrony from ion channel dysfunction, network abnormalities, or structural lesions, with pharmacologic management based on seizure type and mechanism, requiring understanding of drug pharmacokinetics and drug interactions.',
      explanation: `## Pathophysiology

### Neuronal Excitability
**Normal balance:**
- Excitation (glutamate, AMPA, NMDA receptors)
- Inhibition (GABA-A receptors)
- Ion channels (Na+, K+, Ca2+, Cl-)

**In epilepsy:**
- Enhanced excitation or reduced inhibition
- Aberrant network synchronization
- Kindling (progressive seizure facilitation)
- Neural circuit reorganization

### Mechanisms by Etiology
**Channelopathies:**
- SCN1A (Dravet syndrome) - GABAergic interneuron dysfunction
- KCNQ2 (BFNC) - M-current reduction
- CACNA1A (episodic ataxia, epilepsy)

**Structural lesions:**
- Hippocampal sclerosis (neuronal loss, mossy fiber sprouting)
- Cortical dysplasia (malformed cortex, balloon cells)
- Tumors (peritumoral changes)

## Pharmacology

### First-Line Agents by Seizure Type
| Seizure Type | First-Line | Mechanism |
|--------------|------------|-----------|
| Focal | Lamotrigine, levetiracetam | Na+ channel, SV2A |
| Generalized T-C | Valproate, lamotrigine | Multiple, Na+ channel |
| Absence | Ethosuximide, valproate | T-type Ca2+ channel |
| Myoclonic | Valproate, levetiracetam | Multiple, SV2A |

### Mechanisms of Action
**Sodium channel blockers:**
- Carbamazepine, oxcarbazepine, lamotrigine, phenytoin
- Block voltage-gated Na+ channels, prevent sustained firing

**GABA enhancers:**
- Benzodiazepines, phenobarbital
- Increase GABA-A receptor activity

**Calcium channel blockers:**
- Ethosuximide (T-type)
- Gabapentin, pregabalin (alpha2-delta)

**SV2A binding:**
- Levetiracetam, brivaracetam
- Unique mechanism, broad spectrum

**Multiple mechanisms:**
- Valproate (Na+ channels, GABA, T-type Ca2+)
- Topiramate (multiple)

### Pharmacokinetic Considerations
- Enzyme inducers (carbamazepine, phenytoin) - affect other drugs
- Enzyme inhibitors (valproate)
- Protein binding (phenytoin)
- Need for therapeutic drug monitoring

## Treatment Approach

### Monotherapy vs Polytherapy
- Start with one drug appropriate for seizure type
- Increase to therapeutic dose or intolerance
- If fails, second monotherapy before combination
- Polytherapy when necessary

### Refractory Epilepsy
- Failure of two appropriate AEDs
- 30-40% of patients
- Evaluate for epilepsy surgery candidacy

### Special Considerations
**Women of childbearing potential:**
- Valproate teratogenicity (neural tube defects, neurodevelopmental)
- Folic acid supplementation
- Enzyme-inducing drugs and oral contraceptives

**Elderly:**
- Metabolism changes
- Drug interactions
- Cognitive side effects

**Liver/kidney disease:**
- Dose adjustments needed`,
      keyTerms: [
        { term: 'kindling', definition: 'Progressive lowering of seizure threshold with repeated stimulation' },
        { term: 'SV2A', definition: 'Synaptic vesicle protein 2A; target of levetiracetam' },
        { term: 'channelopathy', definition: 'Disease caused by ion channel dysfunction' },
        { term: 'refractory epilepsy', definition: 'Failure to respond to two appropriately chosen anti-seizure drugs' },
      ],
      clinicalNotes: 'Match AED to seizure type. Valproate contraindicated in pregnancy. Check for drug interactions, especially with enzyme inducers. Therapeutic drug monitoring useful for phenytoin, carbamazepine. Evaluate for surgery if refractory.',
    },
    4: {
      level: 4,
      summary: 'Advanced epilepsy management involves surgical evaluation for refractory cases, dietary therapies including ketogenic diet, neuromodulation devices, and recognition of epilepsy syndromes with specific prognostic and treatment implications.',
      explanation: `## Epilepsy Surgery

### Pre-Surgical Evaluation
**Phase I (non-invasive):**
- Video-EEG monitoring (seizure localization)
- High-resolution MRI
- Neuropsychological testing
- fMRI for language/motor mapping
- Psychiatric evaluation

**Phase II (invasive):**
- Subdural grids/strips
- Depth electrodes (stereo-EEG)
- Cortical stimulation mapping

### Surgical Procedures
**Resective:**
- Anterior temporal lobectomy (most common)
- Lesionectomy
- Corticectomy
- Hemispherectomy

**Disconnective:**
- Corpus callosotomy
- Multiple subpial transections
- Vagus nerve stimulation (VNS) - also neuromodulation

**Outcomes:**
- Temporal lobe epilepsy: 60-80% seizure-free
- Extra-temporal: 40-60% seizure-free
- Predictors: MRI lesion concordant with EEG

## Dietary Therapies

### Ketogenic Diet
**Mechanism:**
- Mimics fasting metabolism
- Ketone bodies provide alternative fuel
- Reduces neuronal excitability
- Multiple proposed mechanisms

**Indications:**
- Children with refractory epilepsy
- GLUT1 deficiency, pyruvate dehydrogenase deficiency
- Adults increasingly using

**Ratio:**
- Classic: 4:1 or 3:1 fat:carb+protein
- Modified Atkins, LGIT alternatives

**Side effects:**
- Constipation, kidney stones
- Growth concerns in children
- Hyperlipidemia
- Nutrient deficiencies

## Neuromodulation

### Vagus Nerve Stimulation (VNS)
- Intermittent left vagus nerve stimulation
- 50% responder rate (not seizure-free)
- Side effects: Voice alteration, cough
- Magnet swipe for seizure clusters

### Responsive Neurostimulation (RNS)
- Implanted device with intracranial electrodes
- Detects and responds to seizure patterns
- For bilateral or eloquent cortex foci
- Reduces seizure frequency over time

### Deep Brain Stimulation (DBS)
- Anterior thalamic nucleus or centromedian thalamus
- Bilateral stimulation
- For refractory focal epilepsy

## Epilepsy Syndromes

### Infantile Spasms (West Syndrome)
- Triad: Spasms, hypsarrhythmia, developmental regression
- Onset <1 year
- Urgent treatment (ACTH, vigabatrin)
- Poor prognosis if untreated

### Lennox-Gastaut Syndrome
- Multiple seizure types (tonic, atonic, atypical absence)
- Slow spike-and-wave on EEG
- Intellectual disability
- Refractory, lifelong

### Dravet Syndrome
- SCN1A mutation
- Prolonged febrile seizures in infancy
- Multiple seizure types, refractory
- Developmental decline
- Avoid sodium channel blockers

### Juvenile Myoclonic Epilepsy
- Adolescent onset
- Myoclonic jerks on awakening
- Generalized T-C seizures
- Absence seizures
- Lifelong, good response to valproate

### Benign Rolandic Epilepsy
- Childhood onset, remits by adolescence
- Focal seizures with facial involvement
- Centrotemporal spikes on EEG
- Usually normal development

### Rasmussen Encephalitis
- Progressive unihemispheric inflammation
- Refractory focal seizures, epilepsia partialis continua
- Hemiparesis, cognitive decline
- Treatment: Immunotherapy, hemispherectomy

## Status Epilepticus

**Definition:**
- 5 minutes of continuous seizure OR
- Recurrent without recovery between

**Types:**
- Convulsive (generalized T-C)
- Non-convulsive (coma, subtle movements)
- Focal status

**Treatment (established):**
- Lorazepam 0.1 mg/kg IV
- OR diazepam 10-20 mg IV
- OR midazolam IM (pre-hospital)

**Refractory:**
- Levetiracetam, fosphenytoin, or valproate
- Intubation and anesthetic agents if needed

**Super-refractory:**
- >24 hours or recurrence after weaning anesthesia
- Poor prognosis
- Pentobarbital, ketamine, hypothermia`,
      keyTerms: [
        { term: 'hippocampal sclerosis', definition: 'Neuronal loss and gliosis in hippocampus; common cause of TLE' },
        { term: 'hypsarrhythmia', definition: 'Chaotic high-voltage EEG pattern seen in infantile spasms' },
        { term: 'stereo-EEG', definition: 'Stereoelectroencephalography; depth electrode recording' },
        { term: 'Rasmussen encephalitis', definition: 'Progressive unihemispheric inflammatory disorder causing refractory epilepsy' },
      ],
      clinicalNotes: 'Surgery evaluation for refractory epilepsy should occur early. Infantile spasms require urgent treatment. Ketogenic diet is effective in GLUT1 deficiency. VNS responder rate improves over years. SCN1A mutations (Dravet) contraindicate sodium channel blockers.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge epilepsy care includes gene-specific therapies for genetic epilepsies, minimally invasive surgical techniques like laser ablation and focused ultrasound, advanced neuroimaging with machine learning for localization, and immunotherapy for autoimmune epilepsies.',
      explanation: `## Precision Medicine in Epilepsy

### Gene-Specific Therapies
**SCN1A (Dravet syndrome):**
- Avoid sodium channel blockers
- Fenfluramine approved (enhances serotonin)
- Cannabidiol (Epidiolex) effective
- Stiripentol (adjunctive)

**KCNQ2 (BFNC, DEE):**
- Retigabine analogue (ezogabine withdrawn, new agents in development)
- Potassium channel opener

**TSC1/TSC2 (tuberous sclerosis):**
- Everolimus (mTOR inhibitor)
- Reduces seizure frequency
- Also treats SEGAs, angiofibromas

**DEPDC5, NPRL2/3 (GATOR1 complex):**
- mTOR pathway-related focal epilepsies
- Potential mTOR inhibitor targets

### Cannabinoids in Epilepsy
**Epidiolex (purified CBD):**
- FDA-approved for Dravet and Lennox-Gastaut
- Mechanism: TRPV1, GPR55, others
- Dose-related liver enzyme elevation

**Artisanal CBD:**
- Variable composition
- Potential THC effects
- Quality control concerns

## Minimally Invasive Surgery

### Laser Interstitial Thermal Therapy (LITT)
- MRI-guided laser ablation
- Real-time thermal monitoring
- Minimally invasive, shorter recovery
- For small, well-circumscribed lesions
- Mesial temporal sclerosis, small tumors, cortical dysplasia

### MRI-Guided Focused Ultrasound (MRgFUS)
- Non-invasive thermal ablation
- Thalamotomy for essential tremor approved
- Epilepsy applications investigational
- Corpus callosotomy, amygdalohippocampectomy

### Stereo-EEG-Guided Resection
- Minimally invasive depth electrodes
- Precise localization without craniotomy
- Tailored resection or ablation

## Advanced Neuroimaging

### 7 Tesla MRI
- Higher resolution than 3T
- Better visualization of cortical dysplasia
- Detects subtle hippocampal abnormalities
- Hippocampal subfield analysis

### Functional Imaging
**fMRI:**
- Language and motor mapping
- Memory lateralization
- Resting-state connectivity

**PET:**
- FDG-PET (interictal hypometabolism)
- Specialized tracers (flumazenil, FMZ)

**SPECT:**
- Ictal SPECT (injection during seizure)
- SISCOM (subtracted ictal-interictal)

### Machine Learning Applications
- Seizure detection and prediction
- Automated EEG analysis
- MRI lesion detection
- Surgical outcome prediction
- Personalized treatment algorithms

## Autoimmune Epilepsy

### Syndromes
- Anti-NMDA receptor encephalitis
- Anti-LGI1 encephalitis (faciobrachial dystonic seizures)
- Anti-GABAB receptor encephalitis
- Anti-CASPR2 encephalitis
- Limbic encephalitis

### Clinical Features
- Subacute onset
- Memory deficits, psychiatric symptoms
- Seizures often refractory to AEDs
- CSF pleocytosis, oligoclonal bands
- MRI mesial temporal T2 hyperintensity

### Treatment
- Immunotherapy first-line:
  - High-dose steroids
  - IVIG
  - Plasma exchange
  - Rituximab, cyclophosphamide for refractory
- Search for underlying tumor (paraneoplastic)
- AEDs adjunctive

## Future Directions

### Closed-Loop Stimulation
- Next-generation RNS
- Predictive algorithms
- Prevent rather than respond

### Optogenetics
- Light-controlled neuronal activity
- Preclinical for now
- Precise circuit modulation

### Stem Cell Therapy
- GABAergic interneuron transplantation
- Experimental in animal models
- Potential for focal epilepsy

### Biomarkers
- Inflammatory markers
- MicroRNA signatures
- Predicting SUDEP risk
- Treatment response prediction

### Telemedicine and Digital Health
- Remote seizure monitoring
- Wearable devices
- Artificial intelligence applications
- Improved access to specialized care`,
      keyTerms: [
        { term: 'LITT', definition: 'Laser interstitial thermal therapy; minimally invasive ablation' },
        { term: 'mTOR', definition: 'Mammalian target of rapamycin; pathway implicated in genetic epilepsies' },
        { term: 'SISCOM', definition: 'Subtracted ictal SPECT co-registered to MRI; localization technique' },
        { term: 'SUDEP', definition: 'Sudden unexpected death in epilepsy' },
      ],
      clinicalNotes: 'Gene-specific therapies are transforming genetic epilepsy care. Fenfluramine represents a mechanism-based approach for Dravet. LITT is replacing open surgery for appropriate lesions. Autoimmune epilepsy requires prompt immunotherapy - test for antibodies in subacute onset. Machine learning is revolutionizing EEG analysis and surgical planning.',
    },
  },

  media: [
    {
      id: 'seizure-classification',
      type: 'diagram',
      filename: 'seizure-classification.svg',
      title: 'ILAE Seizure Classification',
      description: 'Flowchart of seizure types by onset',
    },
  ],

  citations: [
    {
      id: 'ilae-classification-2017',
      type: 'article',
      title: 'ILAE Classification of the Epilepsies',
      authors: ['Scheffer IE', 'Berkovic S'],
      source: 'Epilepsia',
    },
  ],

  crossReferences: [
    { targetId: 'condition-stroke', targetType: 'condition', relationship: 'related', label: 'Stroke' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'neurosurgery'],
    keywords: ['epilepsy', 'seizure', 'convulsion', 'anti-epileptic', 'EEG'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default epilepsy;
