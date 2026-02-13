/**
 * Parkinson's Disease - Comprehensive Neurology Content
 *
 * Complete coverage of Parkinson's disease including pathophysiology,
 * diagnosis, treatment, and related movement disorders.
 */

import { EducationalContent } from '../../types';

export const parkinsonsContent: EducationalContent = {
  id: 'neuro-parkinsons-disease',
  type: 'condition',
  name: 'Parkinson\'s Disease',
  alternateNames: ['PD', 'Paralysis Agitans', 'Parkinsonism', 'Shaking Palsy'],
  hpoId: 'HP:0001300',

  levels: {
    1: {
      level: 1,
      summary: 'Parkinson\'s disease is a brain condition that causes tremors, stiffness, and slow movement because of the loss of cells that make a chemical called dopamine.',
      explanation: `Parkinson's disease affects the part of your brain that controls movement. It happens because certain brain cells die and stop making a chemical messenger called dopamine.

**Main Symptoms (the "Triad"):**
- **Tremor**: Shaking, often in hands - worse at rest
- **Slowness**: Takes longer to do movements (called bradykinesia)
- **Stiffness**: Muscles feel tight and rigid

**Other Common Signs:**
- Small handwriting
- Soft voice
- Shuffling walk with small steps
- Trouble with balance
- Face shows less expression (masked face)

**What Causes It:**
- The exact cause is unknown in most cases
- Brain cells that make dopamine die
- Usually affects people over age 60
- Rare genetic forms exist

**How It Progresses:**
- Symptoms usually start on one side
- Gradually spreads to both sides
- Slowly worsens over years
- Medications help control symptoms

**Important to Know:**
- Not the same as Alzheimer's (memory is usually normal early on)
- Not contagious
- Many people live well with PD for many years
- Treatment helps manage symptoms`,
      keyTerms: [
        { term: 'Parkinson\'s disease', definition: 'A brain condition causing tremor, stiffness, and slow movement' },
        { term: 'dopamine', definition: 'A chemical in the brain that helps control movement', pronunciation: 'DOH-puh-meen' },
        { term: 'tremor', definition: 'Involuntary shaking of part of the body' },
      ],
      analogies: [
        'Dopamine is like the oil in an engine - without enough of it, movements become stiff and slow.',
        'The tremor is like a car engine idling roughly when not moving, but running more smoothly when driving (the tremor often improves with action).',
      ],
      examples: [
        'A person notices their hand shakes when resting in their lap but stops when they reach for something.',
        'Someone\'s family notices they walk more slowly and take smaller steps than before.',
      ],
    },
    2: {
      level: 2,
      summary: 'Parkinson\'s disease is a neurodegenerative disorder characterized by loss of dopaminergic neurons in the substantia nigra, causing motor (tremor, bradykinesia, rigidity) and non-motor symptoms.',
      explanation: `**Pathophysiology:**
- Loss of dopaminergic neurons in the substantia nigra pars compacta
- Lewy bodies (alpha-synuclein aggregates) are the pathologic hallmark
- Symptoms appear after ~60-80% of dopamine neurons are lost

**Cardinal Motor Features:**

*Tremor:*
- "Pill-rolling" rest tremor (4-6 Hz)
- Usually asymmetric at onset
- Decreases with action
- May involve legs, jaw, less often head

*Bradykinesia:*
- Slowness of movement
- Decrement with repetitive movements
- Difficulty initiating movement
- Reduced arm swing while walking

*Rigidity:*
- "Lead-pipe" rigidity (constant resistance)
- "Cogwheel" rigidity (superimposed tremor)
- Present throughout range of motion

*Postural Instability:*
- Develops later in disease
- Pull test abnormality
- Risk of falls

**Non-Motor Features:**
- Hyposmia (decreased smell) - often precedes motor symptoms
- Constipation
- REM sleep behavior disorder
- Depression and anxiety
- Cognitive impairment (late)
- Orthostatic hypotension
- Urinary symptoms

**Diagnosis:**
- Clinical (no definitive test)
- Asymmetric onset
- Resting tremor
- Response to dopaminergic therapy
- Imaging: DaTscan (dopamine transporter SPECT) can support diagnosis

**Differential Diagnosis:**
- Essential tremor (action tremor, family history)
- Drug-induced parkinsonism (antipsychotics)
- Vascular parkinsonism
- Atypical parkinsonisms (PSP, MSA, CBD)`,
      keyTerms: [
        { term: 'substantia nigra', definition: 'Brain region whose dopamine neurons degenerate in Parkinson\'s', pronunciation: 'sub-STAN-shuh NY-gruh' },
        { term: 'Lewy bodies', definition: 'Abnormal protein clumps found in Parkinson\'s brain cells' },
        { term: 'bradykinesia', definition: 'Slowness of movement - cardinal feature of PD', pronunciation: 'brad-ee-kin-EE-zhuh' },
        { term: 'DaTscan', definition: 'Imaging test showing dopamine transporter levels in the brain' },
      ],
      analogies: [
        'The substantia nigra is like a factory that produces dopamine. In Parkinson\'s, the factory workers (neurons) gradually die.',
      ],
    },
    3: {
      level: 3,
      summary: 'Parkinson\'s treatment involves dopaminergic therapy (levodopa, dopamine agonists, MAO-B inhibitors), with management of motor fluctuations, dyskinesias, and non-motor symptoms.',
      explanation: `**Pharmacological Treatment:**

**Levodopa (+ Carbidopa):**
- Most effective medication
- Converted to dopamine in the brain
- Carbidopa prevents peripheral conversion
- Start low, titrate slowly
- Side effects: Nausea, orthostatic hypotension
- Long-term: Motor fluctuations, dyskinesias

**Dopamine Agonists:**
- Pramipexole, ropinirole, rotigotine (patch)
- Less motor fluctuations than levodopa
- More side effects: Impulse control disorders, sedation, hallucinations
- Often used in younger patients

**MAO-B Inhibitors:**
- Selegiline, rasagiline, safinamide
- Block dopamine breakdown
- Mild symptomatic benefit
- May have neuroprotective effects (unproven)

**COMT Inhibitors:**
- Entacapone, opicapone, tolcapone
- Extend levodopa effect
- Add-on to reduce "off" time
- Tolcapone: hepatotoxicity risk

**Anticholinergics:**
- Trihexyphenidyl, benztropine
- Mainly for tremor
- Avoid in elderly (cognitive side effects)

**Amantadine:**
- Antidyskinetic effect
- Mild symptomatic benefit
- Extended-release for dyskinesias

**Motor Complications:**

*Wearing Off:*
- Benefit wears off before next dose
- Management: More frequent dosing, add COMT inhibitor

*On-Off Fluctuations:*
- Unpredictable response
- Management: Adjunctive therapies, consider DBS

*Dyskinesias:*
- Involuntary choreiform movements
- Peak-dose dyskinesias most common
- Management: Reduce levodopa, add amantadine

**Deep Brain Stimulation (DBS):**
- Target: Subthalamic nucleus or globus pallidus
- Indicated for motor fluctuations despite optimal medical therapy
- Reduces off time, improves tremor
- Does not halt progression

**Non-Motor Management:**
- Depression: SSRIs
- Psychosis: Reduce dopaminergics, pimavanserin, clozapine
- Orthostatic hypotension: Midodrine, fludrocortisone
- Constipation: Fiber, stool softeners
- RBD: Melatonin, clonazepam`,
      keyTerms: [
        { term: 'levodopa', definition: 'Dopamine precursor - most effective PD medication' },
        { term: 'dyskinesia', definition: 'Involuntary writhing movements, complication of levodopa therapy', pronunciation: 'dis-kin-EE-zhuh' },
        { term: 'wearing off', definition: 'Return of symptoms before next levodopa dose due' },
        { term: 'DBS', definition: 'Deep brain stimulation - surgical treatment for motor fluctuations' },
      ],
      clinicalNotes: 'Levodopa remains most effective treatment. Young-onset: consider dopamine agonist to delay levodopa. DBS for motor fluctuations despite medical optimization. Pimavanserin for PD psychosis without worsening motor symptoms.',
    },
    4: {
      level: 4,
      summary: 'Advanced Parkinson\'s management requires recognition of non-motor phenotypes, personalized therapy selection, device-aided treatments, and management of atypical features suggesting alternative diagnoses.',
      explanation: `**Prodromal Parkinson\'s:**

*Risk Markers:*
- REM sleep behavior disorder (70-80% convert)
- Hyposmia
- Constipation
- Depression
- Reduced dopamine transporter imaging
- Genetic risk factors

*Alpha-Synuclein Research:*
- Skin, gut, CSF detection
- Biomarker development
- Future disease-modifying trials

**Motor Subtypes:**

*Tremor-Dominant:*
- Better prognosis
- Slower progression
- Better levodopa response

*Postural Instability Gait Disorder (PIGD):*
- More motor complications
- Higher dementia risk
- Poorer prognosis

**Advanced Therapies:**

*Deep Brain Stimulation:*
- STN vs GPi targets
- STN: Greater medication reduction
- GPi: Better for dyskinesias
- Consideration of patient goals

*Continuous Infusion:*
- Levodopa-carbidopa intestinal gel (Duopa)
- Continuous jejunal infusion
- Reduces fluctuations
- Requires PEG-J tube

*Subcutaneous Apomorphine:*
- Rescue for severe off periods
- Continuous infusion available (some countries)

**Atypical Parkinsonism (Red Flags):**

*Progressive Supranuclear Palsy (PSP):*
- Vertical gaze palsy
- Early falls (backward)
- Symmetric onset
- Poor levodopa response

*Multiple System Atrophy (MSA):*
- Cerebellar features (MSA-C)
- Autonomic failure (orthostatic, urinary)
- Symmetric
- Poor levodopa response

*Corticobasal Degeneration (CBD):*
- Asymmetric
- Apraxia, alien limb
- Cortical sensory loss
- Dystonia

*Dementia with Lewy Bodies (DLB):*
- Dementia before/within 1 year of parkinsonism
- Visual hallucinations
- Fluctuating cognition
- REM sleep behavior disorder

**Genetics:**
- LRRK2: Most common genetic cause (autosomal dominant)
- GBA: Common risk factor
- SNCA: Alpha-synuclein mutations
- PRKN, PINK1, DJ-1: Early-onset recessive forms`,
      keyTerms: [
        { term: 'prodromal', definition: 'Early phase before typical motor symptoms appear', pronunciation: 'pro-DROH-mul' },
        { term: 'PSP', definition: 'Progressive Supranuclear Palsy - atypical parkinsonism with vertical gaze palsy' },
        { term: 'MSA', definition: 'Multiple System Atrophy - parkinsonism with autonomic and cerebellar features' },
        { term: 'LRRK2', definition: 'Most common gene mutation in familial Parkinson\'s' },
      ],
      clinicalNotes: 'Red flags for atypical parkinsonism: Early falls, symmetric onset, poor levodopa response, vertical gaze palsy, severe autonomic dysfunction, early dementia. DLB: Dementia before/within 1 year of motor symptoms.',
    },
    5: {
      level: 5,
      summary: 'Parkinson\'s disease is increasingly understood as a systemic alpha-synucleinopathy with gut-brain axis involvement, driving development of disease-modifying therapies targeting alpha-synuclein and emerging biomarkers.',
      explanation: `**Pathophysiology - Advanced Concepts:**

*Alpha-Synuclein Spread:*
- Prion-like propagation
- Braak staging hypothesis
- Peripheral to central spread (gut-brain axis)
- Tissue-based synuclein detection emerging

*Gut-Brain Connection:*
- Constipation precedes motor symptoms
- Vagal transmission hypothesis
- Microbiome alterations
- Appendectomy and PD risk (controversial)

*Mitochondrial Dysfunction:*
- PINK1/Parkin pathway
- Complex I deficiency
- Oxidative stress
- Calcium dysregulation

**Biomarkers in Development:**

*Alpha-Synuclein Seeding Assays:*
- RT-QuIC, PMCA
- CSF, skin, gut detection
- High sensitivity/specificity
- Diagnostic and trial applications

*Neuroimaging:*
- DAT SPECT/PET
- Neuromelanin MRI
- Alpha-synuclein PET tracers (in development)

*Fluid Biomarkers:*
- CSF alpha-synuclein species
- NfL (progression marker)
- DJ-1, urate

**Disease-Modifying Trials:**

*Alpha-Synuclein Targeting:*
- Immunotherapy (prasinezumab, cinpanemab)
- Small molecules
- Antisense oligonucleotides
- Active immunization

*GBA Pathway:*
- GCase activators
- Substrate reduction therapy
- Ambroxol (repurposed)

*Other Targets:*
- Leucine-rich repeat kinase 2 (LRRK2) inhibitors
- Ursodeoxycholic acid
- Nilotinib (c-Abl inhibitor)

*Regenerative Approaches:*
- Dopamine neuron transplantation
- Stem cell therapy
- Gene therapy (AAV-AADC, AAV-GDNF)

**Clinical Trial Design:**
- Delayed-start designs
- Prodromal populations
- Alpha-synuclein seeding as enrichment
- Digital biomarkers

**Precision Medicine:**

*Genetic Subtyping:*
- LRRK2: Kinase inhibitor targets
- GBA: Glucocerebrosidase enhancement
- SNCA: Antisense approaches

*Personalized Treatment:*
- Motor subtype considerations
- Non-motor phenotyping
- Genetic testing increasingly routine

**Palliative Care Integration:**
- Goals of care discussions
- Caregiver support
- Hospice timing
- Quality of life focus

**Quality Metrics:**
- Motor fluctuations control
- Falls rate
- Caregiver burden
- Quality of life (PDQ-39)
- Appropriate therapy escalation`,
      keyTerms: [
        { term: 'Braak staging', definition: 'Hypothesis of progressive alpha-synuclein spread through the nervous system' },
        { term: 'RT-QuIC', definition: 'Real-time quaking-induced conversion - alpha-synuclein seeding assay' },
        { term: 'GBA', definition: 'Glucocerebrosidase gene - common genetic risk factor for PD' },
        { term: 'prasinezumab', definition: 'Anti-alpha-synuclein monoclonal antibody in clinical trials' },
      ],
      clinicalNotes: `Emerging paradigms:
1. PD as systemic alpha-synucleinopathy, not just brain disease
2. Prodromal detection via RBD, hyposmia, constipation
3. Alpha-synuclein seeding assays approaching clinical use
4. Disease-modifying trials ongoing (alpha-syn, GBA, LRRK2)
5. Genetic testing guides therapy and prognosis
6. Palliative care integration improves outcomes
7. Digital biomarkers for remote monitoring
8. Personalized medicine based on genetics and phenotype`,
    },
  },

  media: [
    {
      id: 'pd-pathways',
      type: 'diagram',
      filename: 'basal_ganglia_pd.svg',
      title: 'Basal Ganglia Pathways in PD',
      description: 'Direct and indirect pathways showing dopamine depletion effects',
    },
    {
      id: 'tremor-video',
      type: 'video',
      filename: 'parkinsons_tremor.mp4',
      title: 'Parkinson\'s Rest Tremor',
      description: 'Demonstration of rest tremor vs action tremor',
      duration: 120,
    },
  ],

  citations: [
    {
      id: 'mds-criteria-2015',
      type: 'article',
      title: 'MDS clinical diagnostic criteria for Parkinson\'s disease',
      authors: ['Postuma RB', 'Berg D', 'Stern M'],
      source: 'Movement Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-movement-disorders', targetType: 'topic', relationship: 'parent', label: 'Movement Disorders' },
    { targetId: 'neuro-essential-tremor', targetType: 'condition', relationship: 'related', label: 'Essential Tremor' },
    { targetId: 'neuro-lewy-body-dementia', targetType: 'condition', relationship: 'related', label: 'Dementia with Lewy Bodies' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'movement disorders', 'neurodegeneration'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'geriatrics'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default parkinsonsContent;
