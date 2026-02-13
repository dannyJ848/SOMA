/**
 * ALS - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const als: EducationalContent = {
  id: 'condition-als',
  type: 'condition',
  name: 'Amyotrophic Lateral Sclerosis',
  nameEs: 'Esclerosis Lateral Amiotrófica',
  alternateNames: ['ALS', 'Lou Gehrig Disease', 'Motor Neuron Disease', 'Charcot Disease'],
  hpoId: 'HP:0007193',

  levels: {
    1: {
      level: 1,
      summary: 'ALS is a disease that causes muscle weakness and paralysis because nerve cells that control muscles gradually die.',
      explanation: `Amyotrophic lateral sclerosis (ALS) is a serious disease that affects the nerves that control muscles. Over time, these nerve cells die, and muscles become weak.

**What happens in ALS:**
- Nerve cells (motor neurons) in the brain and spinal cord die
- Without signals from nerves, muscles get weak
- Muscles shrink (atrophy) and stop working

**Early symptoms:**
- Weakness in hands or feet
- Difficulty walking or using hands
- Slurred speech or trouble swallowing
- Muscle cramps or twitching (fasciculations)
- Stiff muscles

**Progression:**
- Weakness spreads to other muscles
- Eventually affects breathing muscles
- Does not affect thinking or personality (usually)
- Progresses at different rates in different people

**Who gets ALS:**
- Usually ages 40-70
- Men slightly more than women
- Most cases are random (not inherited)
- About 5-10% run in families (familial ALS)

**Treatment:**
- No cure yet, but treatments can help
- Medications can slow progression slightly
- Many supportive therapies available
- Focus on quality of life

**Important:** ALS does not usually affect thinking, senses (sight, hearing, touch), or bladder/bowel control.`,
      keyTerms: [
        { term: 'ALS', definition: 'A disease that causes nerve cells controlling muscles to die' },
        { term: 'atrophy', definition: 'Wasting away or shrinkage of muscles' },
        { term: 'fasciculations', definition: 'Small muscle twitches visible under the skin' },
      ],
      analogies: ['In ALS, motor neurons are like electrical wires that get cut—without the connection, muscles cannot receive the signals to work and slowly waste away.'],
      examples: ['A 55-year-old man notices his hand feels weak and has trouble gripping things, then sees small muscle twitches in his arm and leg.'],
    },
    2: {
      level: 2,
      summary: 'ALS is a fatal neurodegenerative disease characterized by progressive loss of upper and lower motor neurons, resulting in muscle weakness, atrophy, and eventual respiratory failure.',
      explanation: `## Pathophysiology

**Motor neuron degeneration:**
- **Upper motor neurons:** In motor cortex, corticospinal tracts
- **Lower motor neurons:** In brainstem, spinal cord anterior horn
- **Both systems affected:** Combination of UMN and LMN signs

**Pathologic findings:**
- Muscle atrophy from denervation
- Spinal motor neuron loss
- Corticospinal tract degeneration (lateral sclerosis)
- Astrocytosis (gliosis)

**Bunina bodies:** Cytoplasmic inclusions in remaining motor neurons

## Clinical Features

**LMN signs (flaccid):**
- Muscle weakness
- Atrophy
- Fasciculations
- Hyporeflexia/areflexia
- Flaccid tone

**UMN signs (spastic):**
- Spasticity
- Hyperreflexia
- Babinski sign (extensor plantar response)
- Hoffmann sign
- Pseudobulbar affect (emotional lability)

**Typical presentations:**
- **Limb onset (70%):** Arm or leg weakness
- **Bulbar onset (25%):** Dysarthria, dysphagia
- **Respiratory onset (rare):** Respiratory failure as first sign

**Clinical pearls:**
- Sensation is completely preserved
- Eye movements spared until late
- Bowel/bladder function preserved
- Cognitive impairment in ~50% (mild)
- Frontotemporal dementia in ~15%

## Diagnosis
- **Clinical diagnosis:** No definitive test
- Requires UMN + LMN signs in ≥1 body region
- Exclusion of mimics (see below)
- EMG/NCS to confirm denervation
- Exclude structural disease with MRI`,
      keyTerms: [
        { term: 'upper motor neuron', definition: 'Neurons from motor cortex; damage causes spasticity and hyperreflexia' },
        { term: 'lower motor neuron', definition: 'Neurons from spinal cord/brainstem; damage causes weakness, atrophy, fasciculations' },
        { term: 'pseudobulbar affect', definition: 'Inappropriate or exaggerated emotional responses (pseudobulbar crying/laughing)' },
      ],
    },
    3: {
      level: 3,
      summary: 'ALS diagnosis requires identifying both UMN and LMN signs while excluding mimics, with management focused on riluzole, edaravone, multidisciplinary care, and respiratory support.',
      explanation: `## Diagnostic Criteria (Revised El Escorial)

**Definite ALS:** UMN + LMN signs in 3 regions
**Probable ALS:** UMN + LMN signs in 2 regions
**Possible ALS:** UMN + LMN signs in 1 region
**Suspected ALS:** LMN signs in 2-3 regions only

**Regions:**
- Bulbar (face, tongue, swallowing)
- Cervical (arms)
- Thoracic (trunk, abdominal muscles)
- Lumbosacral (legs)

## Electrodiagnosis

**EMG findings:**
- Fibrillation potentials, positive sharp waves (denervation)
- Fasciculation potentials
- Large motor unit potentials (reinnervation)
- Reduced recruitment pattern

**NCS findings:**
- Normal sensory studies (key for diagnosis)
- Normal or slightly reduced motor amplitudes
- Normal conduction velocities

**Key pearl:** Normal sensory studies confirm motor neuron disease.

## Differential Diagnosis (ALS Mimics)

**Cervical spondylosis:**
- Neck pain, sensory changes
- MRI findings
- EMG can help distinguish

**Multifocal motor neuropathy (MMN):**
- Conduction block on NCS
- GM1 antibodies
- Responds to IVIG

**Kennedy disease (SBMA):**
- X-linked spinal bulbar muscular atrophy
- Androgen receptor mutation
- Gynecomastia, sensory involvement
- Slower progression

**Inclusion body myositis:**
- Muscle biopsy shows rimmed vacuoles
- Distal weakness, quadriceps involvement
- Asymmetric

**Post-polio syndrome:**
- History of polio
- New weakness after stable period

## Treatment

**Disease-modifying:**
- **Riluzole (1995):** 2-3 month survival benefit
- **Edaravone (2017):** Slows decline in early ALS
- **Sodium phenylbutyrate/taurursodiol (2022):** Modest benefit

**Respiratory management:**
- Non-invasive ventilation (NIV) improves survival
- Treat sleep-disordered breathing
- Mechanical ventilation consideration

**Nutritional support:**
- PEG tube when swallowing impaired
- Maintains weight and nutrition

**Multidisciplinary care:**
- Physical therapy (maintain mobility, prevent contractures)
- Occupational therapy (assistive devices)
- Speech therapy (communication, swallowing)
- Palliative care involvement`,
      keyTerms: [
        { term: 'El Escorial criteria', definition: 'Diagnostic criteria for ALS based on UMN/LMN distribution' },
        { term: 'denervation', definition: 'Loss of nerve supply to muscle, causing atrophy and abnormal electrical activity' },
        { term: 'reinnervation', definition: 'Remaining nerves sprouting to take over for lost nerves' },
      ],
      clinicalNotes: 'Riluzole is started at diagnosis. Edaravone requires early initiation and monitoring of renal function. Non-invasive ventilation is the single most important intervention for survival—initiate when FVC <50% or symptomatic.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive ALS care addresses genetic testing, communication alternatives, dysphagia management, spasticity treatment, pseudobulbar affect, and end-of-life planning with palliative focus.',
      explanation: `## Genetic Testing and Counseling

**Genetic causes (10% familial, 10% seemingly sporadic with mutation):**
- **C9orf72 expansion:** Most common (40% of familial, 7% sporadic)
- **SOD1 mutation:** 12-20% of familial
- **FUS, TARDBP (TDP-43):** Less common
- **Other:** OPTN, VCP, UBQLN2, etc.

**Who to test:**
- All familial cases
- Consider in sporadic (especially young onset)
- C9orf72 testing for cognitive/behavioral features
- Pre-test counseling essential

**Implications:**
- Prognosis varies by mutation (SOD1 may have better response to new therapies)
- Family planning considerations
- Eligibility for clinical trials

## Symptom Management

**Communication:**
- Low-tech: Communication boards, alphabet boards
- High-tech: Eye-tracking devices, text-to-speech
- Speech therapy: Augmentative and alternative communication (AAC)

**Dysphagia:**
- Diet modification (thickened liquids)
- Speech therapy: Swallowing techniques, compensatory strategies
- PEG tube when:
  - Weight loss >10%
  - Recurrent aspiration
  - Mealtime duration >30 min
  - FVC <50%

**Excess saliva (sialorrhea):**
- Amitriptyline, glycopyrrolate, scopolamine
- Atropine eye drops orally
- Botulinum toxin to salivary glands

**Pseudobulbar affect:**
- Dextromethorphan/quinidine (Nuedexta)
- SSRIs, TCAs may help

**Cramps and spasticity:**
- Baclofen, tizanidine
- Quinine sulfate (for cramps)
- Physical therapy, stretching

**Pain:**
- Musculoskeletal from immobility
- NSAIDs, acetaminophen
- Avoid opioids if possible

## Respiratory Management

**Monitoring:**
- FVC (forced vital capacity) every 3 months
- SNIP (sniff nasal inspiratory pressure)
- Overnight oximetry

**Interventions:**
- **NIV (non-invasive ventilation):** Standard of care
- **Cough assist device:** Mechanical insufflation-exsufflation
- **Tracheostomy:** Consider for long-term ventilation

## End-of-Life Care

**Hospice:**
- Eligibility when FVC <30% or significant decline
- Focus on comfort

**Advance care planning:**
- Discuss ventilation preferences early
- Artificial nutrition and hydration decisions
- Goals of care discussions`,
      keyTerms: [
        { term: 'C9orf72', definition: 'Most common genetic cause of ALS; hexanucleotide repeat expansion' },
        { term: 'SOD1', definition: 'Superoxide dismutase 1 gene; first discovered genetic cause of ALS' },
        { term: 'PEG tube', definition: 'Percutaneous endoscopic gastrostomy tube for feeding' },
      ],
      clinicalNotes: 'C9orf72 patients have higher risk of FTD and may have extrapyramidal features. SOD1 patients may benefit from antisense therapy (tofersen). PEG tube placement should be done before respiratory compromise (FVC >50%).',
    },
    5: {
      level: 5,
      summary: 'Emerging ALS therapies include antisense oligonucleotides, gene silencing approaches, neuroprotective strategies, stem cell therapies, and precision medicine targeting specific genetic and molecular subtypes.',
      explanation: `## Precision Medicine Approaches

**Antisense oligonucleotides (ASOs):**
- **Tofersen (SOD1):** Accelerated approval (2023)
  - Reduces SOD1 protein
  - Slows decline in SOD1-ALS
  - CSF administration
- **Tominersen (C9orf72):** Phase 3 ongoing
- **WVE-004 (C9orf72):** Intrathecal ASO in trials

**Gene therapy:**
- **AAV delivery:** Gene silencing or replacement
- **CRISPR approaches:** Preclinical

## Novel Mechanisms

**TARDBP (TDP-43) targeting:**
- Small molecules preventing aggregation
- Immunotherapy approaches

**FUS targeting:**
- Small molecule modulators
- ASOs in development

**RNA processing modulation:**
- **Stathmin-2:** Microtubule regulator reduced in ALS
- **ATXN2 intermediate repeats:** Risk factor; antisense therapy in trials

**Neuroinflammation:**
- **Masitinib:** Tyrosine kinase inhibitor; microglial modulation
- **Rasagiline:** MAO-B inhibitor with neuroprotection
- **Sodium phenylbutyrate/taurursodiol:** Approved as Relyvrio; modest benefit

## Cellular Therapies

**Stem cell approaches:**
- **Mesenchymal stem cells:** Neuroprotection, immunomodulation
- **Neural progenitor cells:** Replace lost neurons
- **Astrocyte replacement:** Support motor neuron survival

**Gene-corrected motor neurons:**
- iPSC-derived cells
- Patient-specific therapy

## Biomarker Development

**Neurofilament light chain (NfL):**
- CSF and blood levels correlate with disease progression
- Predicts survival
- May serve as surrogate endpoint

**Imaging biomarkers:**
- DTI for corticospinal tract integrity
- MR spectroscopy
- PET ligands for microglial activation

**Genetic biomarkers:**
- Polygenic risk scores
- Mutation-specific prognosis

## Emerging Clinical Trial Designs

**Adaptive platform trials:**
- **HEALEY ALS Platform Trial:** Multiple interventions, shared placebo
- Accelerates drug development
- Patient-centric design

**Biomarker-enriched trials:**
- Selecting patients based on NfL levels
- Genotype-specific trials

**Real-world evidence:**
- PRO-ACT database
- International ALS registries
- Natural history controls

## Future Directions
- Combination therapy approaches
- Earlier intervention (pre-symptomatic in gene carriers)
- Personalized medicine based on genotype and biomarkers
- Neuroprotection and neurorestoration strategies`,
      keyTerms: [
        { term: 'ASO', definition: 'Antisense oligonucleotide; gene-silencing therapy' },
        { term: 'tofersen', definition: 'ASO therapy for SOD1-ALS; FDA approved 2023' },
        { term: 'DTI', definition: 'Diffusion tensor imaging; MRI technique to assess white matter integrity' },
      ],
      clinicalNotes: 'Tofersen represents first genetically-targeted ALS therapy. NfL is becoming standard biomarker for prognosis and trial endpoints. Platform trial design has accelerated ALS research significantly.',
    },
  },

  media: [],
  citations: [
    { id: 'el-escorial-1998', type: 'article', title: 'El Escorial Revisited: Revised Criteria for Diagnosis of ALS', source: 'Amyotrophic Lateral Sclerosis' },
    { id: 'aan-als-2022', type: 'article', title: 'AAN Practice Parameter Update: ALS Care', source: 'Neurology' },
  ],
  crossReferences: [
    { targetId: 'condition-frontotemporal-dementia', targetType: 'condition', relationship: 'related', label: 'Frontotemporal Dementia' },
    { targetId: 'condition-spinal-muscular-atrophy', targetType: 'condition', relationship: 'related', label: 'Spinal Muscular Atrophy' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['neurology', 'neuromuscular'],
    keywords: ['ALS', 'amyotrophic lateral sclerosis', 'motor neuron disease', 'riluzole', 'edaravone'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'medicine'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default als;
