/**
 * Parkinson Disease - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const parkinsons: EducationalContent = {
  id: 'condition-parkinsons',
  type: 'condition',
  name: 'Parkinson Disease',
  alternateNames: ['Parkinson Disease', 'PD', 'Paralysis Agitans', 'Idiopathic Parkinsonism'],
  hpoId: 'HP:0001300',

  levels: {
    1: {
      level: 1,
      summary: 'Parkinson disease is a brain disorder that causes shaking, stiffness, and difficulty with walking, balance, and coordination.',
      explanation: `Parkinson disease (PD) is a condition that mainly affects movement. It happens when brain cells that make dopamine are slowly destroyed.

**Key symptoms:**
- Tremor (shaking), usually at rest
- Stiff muscles (rigidity)
- Slow movement (bradykinesia)
- Balance and walking problems

**Other symptoms:**
- Soft voice
- Small handwriting
- Loss of smell
- Sleep problems
- Depression and anxiety
- Digestive issues (constipation)

**Progression:**
- Symptoms start gradually, often on one side
- Slowly worsens over years
- Each person is different
- Treatment helps manage symptoms

**Who gets PD:**
- Usually starts after age 60
- Men more than women
- Can run in families
- Environmental factors may play a role

**Treatments:**
- Medications to replace dopamine
- Physical therapy
- Exercise (very important)
- Sometimes brain surgery

**Important:** PD is not fatal itself, but complications can be serious. Many people live for years with good treatment.`,
      keyTerms: [
        { term: 'dopamine', definition: 'A brain chemical that helps control movement' },
        { term: 'tremor', definition: 'Rhythmic shaking of a body part' },
        { term: 'rigidity', definition: 'Stiffness or inflexibility of muscles' },
      ],
      analogies: ['The brain in Parkinson disease is like a car running out of fuel—dopamine is the fuel that allows smooth movement.'],
      examples: ['A 65-year-old man notices his right hand shakes when resting, his writing has become smaller, and he feels stiff when getting out of a chair.'],
    },
    2: {
      level: 2,
      summary: 'Parkinson disease is a neurodegenerative disorder characterized by loss of dopaminergic neurons in the substantia nigra, leading to motor symptoms of tremor, rigidity, bradykinesia, and postural instability.',
      explanation: `## Pathophysiology
- **Dopamine deficiency:** Loss of substantia nigra pars compacta neurons
- **Alpha-synuclein accumulation:** Lewy bodies form
- **Basal ganglia dysfunction:** Altered motor circuits
- **Neuroinflammation:** Contributes to progression

## Cardinal Motor Signs (TRAP)

**Tremor:**
- "Pill-rolling" resting tremor
- 4-6 Hz frequency
- Usually begins unilaterally
- Improves with voluntary movement

**Rigidity:**
- Lead-pipe (constant) or cogwheel (intermittent)
- Increased muscle tone
- Affects all limbs

**Akinesia/Bradykinesia:**
- Slowness of movement
- Difficulty initiating movement
- Decreased facial expression (masked facies)
- Reduced arm swing

**Postural Instability:**
- Balance problems
- Stooped posture
- Shuffling gait (festination)
- Falls (later in disease)

## Non-Motor Symptoms
- **Autonomic:** Constipation, orthostatic hypotension, sexual dysfunction
- **Cognitive:** Mild cognitive impairment, dementia (later)
- **Psychiatric:** Depression, anxiety, psychosis
- **Sensory:** Hyposmia (loss of smell), pain
- **Sleep:** REM sleep behavior disorder, insomnia

## Diagnosis
- **Clinical diagnosis:** No definitive test
- Based on motor examination
- UK Brain Bank Criteria or MDS criteria
- DaTscan can support diagnosis (differentiates from essential tremor)
- Exclusion of other causes`,
      keyTerms: [
        { term: 'substantia nigra', definition: 'Brain region that produces dopamine; degenerates in PD' },
        { term: 'Lewy bodies', definition: 'Abnormal protein deposits found in brains of PD patients' },
        { term: 'bradykinesia', definition: 'Slowness of movement; cardinal feature of PD' },
        { term: 'DaTscan', definition: 'Imaging test showing dopamine transporter density in brain' },
      ],
    },
    3: {
      level: 3,
      summary: 'Parkinson disease management includes dopaminergic medications (levodopa, dopamine agonists), MAO-B inhibitors, anticholinergics, and advanced therapies such as deep brain stimulation for motor complications.',
      explanation: `## Pharmacologic Treatment

**Levodopa (most effective):**
- Combined with carbidopa (prevents peripheral conversion)
- Gold standard for motor symptoms
- Sinemet (carbidopa/levodopa)
- Immediate and extended-release formulations

**Motor Complications of Levodopa:**
- **Wearing off:** Effects shorten over time
- **Dyskinesias:** Involuntary movements at peak dose
- **On-off phenomena:** Unpredictable fluctuations
- Typically after 3-5 years of treatment

**Dopamine Agonists:**
- Pramipexole, ropinirole, rotigotine
- Longer half-life than levodopa
- Used early in disease or as adjunct
- Side effects: hallucinations, sleep attacks, impulse control disorders

**MAO-B Inhibitors:**
- Selegiline, rasagiline, safinamide
- Mild symptomatic benefit
- May slow progression (controversial)
- Safinamide also helps dyskinesia

**COMT Inhibitors:**
- Entacapone, opicapone
- Extend levodopa effect
- Used as adjunct

**Anticholinergics:**
- Benztropine, trihexyphenidyl
- Useful for tremor
- Avoid in elderly (cognitive side effects)

**Amantadine:**
- Mild symptomatic benefit
- Reduces levodopa-induced dyskinesia

## Advanced Therapies

**Deep Brain Stimulation (DBS):**
- Targets: STN, GPi, VIM
- For motor fluctuations, dyskinesia, tremor
- Requires good cognitive status

**Levodopa-Carbidopa Intestinal Gel (LCIG):**
- Continuous intestinal infusion
- For severe motor fluctuations

**Subcutaneous Therapies:**
- Apomorphine injection (rescue)
- Foslevodopa-foscarbidopa (subcutaneous infusion)`,
      keyTerms: [
        { term: 'wearing off', definition: 'Return of symptoms before next levodopa dose' },
        { term: 'dyskinesia', definition: 'Involuntary movements caused by levodopa' },
        { term: 'STN', definition: 'Subthalamic nucleus; DBS target for PD' },
        { term: 'GPi', definition: 'Globus pallidus internus; DBS target for PD' },
      ],
      clinicalNotes: 'Levodopa is started when symptoms interfere with daily activities—no benefit to delaying. Younger patients (<65) may start with dopamine agonist to delay levodopa complications. Screen for impulse control disorders on dopamine agonists.',
    },
    4: {
      level: 4,
      summary: 'Complex PD management addresses non-motor symptoms, psychosis management, cognitive impairment, autonomic dysfunction, and individualized selection of advanced therapies based on phenotype and comorbidities.',
      explanation: `## Non-Motor Symptom Management

**Cognitive Impairment/Dementia:**
- Cholinesterase inhibitors (rivastigmine approved)
- Avoid anticholinergics
- Pimavanserin for Parkinson psychosis

**Psychosis:**
- First: Reduce PD medications if possible
- Pimavanserin (serotonin inverse agonist)
- Quetiapine (lower EPS risk)
- Clozapine (requires monitoring)
- Avoid typical antipsychotics

**Depression:**
- SSRIs, SNRIs
- Pramipexole may help (antidepressant effect)

**Orthostatic Hypotension:**
- Fludrocortisone, midodrine
- Droxidopa
- Compression stockings, increased salt/fluid

**Sialorrhea (drooling):**
- Glycopyrrolate, atropine drops
- Botulinum toxin to salivary glands

## DBS Patient Selection

**Ideal candidates:**
- Good levodopa response (predicts DBS response)
- Motor fluctuations, dyskinesia, or refractory tremor
- Preserved cognition (MMSE >24)
- No significant psychiatric comorbidity
- Realistic expectations

**Target selection:**
- **STN:** Most common, allows medication reduction, more dyskinesia control
- **GPi:** Better for dyskinesia, no cognitive effects
- **VIM:** For tremor-dominant PD

## Atypical Parkinsonism

**Exclude before PD diagnosis:**
- **Multiple system atrophy (MSA):** Autonomic features, cerebellar signs
- **Progressive supranuclear palsy (PSP):** Vertical gaze palsy, early falls
- **Corticobasal degeneration (CBD):** Asymmetric cortical signs, apraxia
- **Dementia with Lewy bodies (DLB):** Cognitive symptoms before motor

**Red flags for atypical:**
- Poor response to levodopa
- Early cognitive decline
- Early autonomic dysfunction
- Symmetrical onset
- Rapid progression
- Supranuclear gaze palsy

## Disease Modifying Therapies
**None proven yet, but under investigation:**
- MAO-B inhibitors may have mild effect
- Exercise may slow progression
- Coenzyme Q10 (negative in trials)
- Gene therapies in development`,
      keyTerms: [
        { term: 'pimavanserin', definition: 'Selective serotonin inverse agonist for Parkinson psychosis without motor worsening' },
        { term: 'orthostatic hypotension', definition: 'Blood pressure drop upon standing; common autonomic PD symptom' },
        { term: 'MSA', definition: 'Multiple system atrophy; atypical parkinsonism with poor prognosis' },
      ],
      clinicalNotes: 'Cognitive impairment is the main predictor of nursing home placement in PD. Pimavanserin allows psychosis treatment without worsening motor symptoms. Always consider atypical parkinsonism when levodopa response is poor.',
    },
    5: {
      level: 5,
      summary: 'Advanced PD care encompasses precision medicine approaches, novel disease-modifying strategies, alpha-synuclein immunotherapy, neuroprotective agents, and personalized device-based therapies targeting individual phenotypes.',
      explanation: `## Precision Medicine in PD

**Genetic subtypes:**
- **LRRK2:** Most common genetic form; trials of LRRK2 inhibitors
- **GBA:** Glucocerebrosidase mutation; more rapid progression, cognitive decline
- **SNCA:** Alpha-synuclein multiplication; early onset
- **PRKN, PINK1, DJ-1:** Recessive forms; younger onset, excellent levodopa response

**Phenotype-directed therapy:**
- **Tremor-dominant:** VIM DBS, anticholinergics
- **PIGD (postural instability/gait difficulty):** STN or GPi DBS, physical therapy emphasis
- **Rapid progression:** Consider atypical parkinsonism

## Disease-Modifying Strategies

**Alpha-synuclein immunotherapy:**
- **Prasinezumab, cinpanemab:** Monoclonal antibodies
- **Affitopes:** Peptide-based vaccines
- Phase 2/3 trials ongoing

**LRRK2 inhibitors:**
- DNL151, DNL201
- Target most common genetic PD
- May help sporadic PD too

**GLP-1 agonists:**
- **Exenatide, lixisenatide:** Diabetes drugs with neuroprotective properties
- Small studies show slowed progression
- Phase 3 trials in progress

**UCB0599:** Small molecule alpha-synuclein aggregation inhibitor

## Novel Therapeutic Targets

**Mitochondrial function:**
- Coenzyme Q10 (negative in large trials)
- Nicotinamide riboside (NR)
- Iron chelation (deferiprone)

**Neuroinflammation:**
- NLRP3 inflammasome inhibitors
- Microglial modulators

**Lysosomal function:**
- Ambroxol (increases GCase activity)
- Sphingolipid pathway modulators

## Advanced Device Therapies

**Adaptive DBS:**
- Closed-loop systems
- Sense brain activity, adjust stimulation
- Reduce side effects, battery use

**Focused ultrasound:**
- MR-guided ablation
- Non-invasive alternative to DBS
- Unilateral thalamotomy for tremor

**Gene therapy:**
- **AADC gene therapy:** Enhances levodopa conversion
- **GAD gene therapy:** Increases GABA production
- **Neurturin (CERE-120):** Neurotrophic factor (negative in trials)

## Biomarkers for Progression
- **DaTscan:** Tracks dopamine loss
- **CSF alpha-synuclein:** Inconsistent results
- **Blood NfL:** Predicts progression
- **Glucocerebrosidase activity:** Predicts cognitive decline
- **MRI neuromelanin:** SN integrity assessment

## Prodromal Detection
- **REM sleep behavior disorder:** Strong predictor
- **Hyposmia:** Early marker
- **Constipation:** May precede motor by years
- **DAT imaging in at-risk:** Detects preclinical disease`,
      keyTerms: [
        { term: 'LRRK2', definition: 'Gene mutation causing autosomal dominant PD; target for precision therapy' },
        { term: 'GBA', definition: 'Glucocerebrosidase gene; risk factor for PD with more rapid progression' },
        { term: 'adaptive DBS', definition: 'Closed-loop deep brain stimulation that adjusts based on brain activity' },
        { term: 'prodromal', definition: 'Early phase of disease before classic symptoms appear' },
      ],
      clinicalNotes: 'LRRK2 inhibitors may be first precision medicine approach for PD. GLP-1 agonists show promise for neuroprotection. REM sleep behavior disorder is strongest prodromal marker—90% develop synucleinopathy within 10 years.',
    },
  },

  media: [],
  citations: [
    { id: 'mds-pd-2015', type: 'article', title: 'MDS Clinical Diagnostic Criteria for Parkinson Disease', source: 'Movement Disorders' },
    { id: 'aan-pd-2021', type: 'article', title: 'AAN Guidelines for Treatment of Parkinson Disease', source: 'Neurology' },
  ],
  crossReferences: [
    { targetId: 'condition-essential-tremor', targetType: 'condition', relationship: 'related', label: 'Essential Tremor' },
    { targetId: 'condition-msa', targetType: 'condition', relationship: 'related', label: 'Multiple System Atrophy' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['neurology', 'movement disorders'],
    keywords: ['parkinson', 'PD', 'dopamine', 'levodopa', 'deep brain stimulation', 'DBS'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'medicine'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default parkinsons;
