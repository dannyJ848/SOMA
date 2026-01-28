/**
 * Neurodegeneration - Pathology Educational Content
 *
 * Mechanisms and pathology of neurodegenerative diseases including
 * Alzheimer disease, Parkinson disease, and related disorders.
 */

import { EducationalContent } from '../../types';

export const neurodegeneration: EducationalContent = {
  id: 'pathology-neurodegeneration',
  type: 'condition',
  name: 'Neurodegeneration',
  alternateNames: ['Neurodegenerative Diseases', 'Proteinopathies', 'Neurodegenerative Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Neurodegeneration is when brain cells slowly break down and die over time, leading to problems with memory, movement, or thinking.',
      explanation: `Neurodegeneration means that brain cells (neurons) are gradually damaged and dying. This process happens slowly over months or years, unlike sudden brain damage from stroke or injury.

**What Happens in Neurodegenerative Diseases:**

1. **Brain Cells Stop Working Properly**
   - Cells cannot process proteins correctly
   - Waste products build up inside cells
   - Cells become unhealthy and stressed

2. **Abnormal Clumps Form**
   - Proteins clump together in wrong shapes
   - These clumps are called aggregates
   - They can spread from cell to cell

3. **Cells Die Over Time**
   - Neurons slowly lose function
   - Brain areas shrink (atrophy)
   - Functions controlled by those areas fail

**Common Types:**

- **Alzheimer Disease**: Problems with memory first
- **Parkinson Disease**: Problems with movement first
- **ALS**: Problems with muscle control
- **Huntington Disease**: Movement, thinking, and mood problems

**Why It Happens:**

- Sometimes runs in families (genetic)
- Sometimes happens with aging
- Sometimes linked to environmental factors
- Often the exact cause is unknown

**What Can Be Done:**

- There is no cure yet, but treatments can help symptoms
- Research is looking for ways to stop or slow the damage
- Early diagnosis helps with planning care
- Exercise and healthy lifestyle may help reduce risk

Think of it like a factory where machines slowly break down - at first production slows, then eventually stops completely.`,
      keyTerms: [
        { term: 'neurodegeneration', definition: 'The progressive loss of structure or function of neurons' },
        { term: 'protein aggregate', definition: 'Clumps of proteins that build up abnormally in cells' },
        { term: 'atrophy', definition: 'Shrinkage of tissue or organ due to cell loss' },
        { term: 'neuron', definition: 'A nerve cell that carries messages in the brain and body' },
        { term: 'dementia', definition: 'Loss of memory, thinking, and reasoning abilities' },
      ],
      analogies: [
        'Neurodegeneration is like a slow-motion movie of a building crumbling - it happens gradually over time.',
        'Protein aggregates are like clogged pipes - they stop the normal flow of cell processes.',
        'The brain areas affected are like specific departments in a company - when one fails, its specific functions are lost.',
      ],
      examples: [
        'In Alzheimer disease, memory areas of the brain shrink first, causing forgetfulness.',
        'In Parkinson disease, movement control cells die, causing tremor and stiffness.',
        'Some families have genes that make neurodegeneration more likely to happen.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neurodegenerative diseases are characterized by progressive neuronal loss, protein misfolding and aggregation, and regional brain atrophy, with distinct clinical and pathological features for each disease.',
      explanation: `**Common Features of Neurodegeneration:**

**Pathological Hallmarks:**
- Selective neuronal vulnerability (specific cell types affected)
- Intracellular or extracellular protein aggregates
- Progressive brain atrophy on imaging
- Glial activation and neuroinflammation
- Synaptic dysfunction precedes cell death

**Mechanisms:**
- Protein misfolding and aggregation
- Impaired protein clearance (autophagy, proteasome)
- Mitochondrial dysfunction
- Oxidative stress
- Excitotoxicity

**Major Neurodegenerative Diseases:**

**Alzheimer Disease (AD):**
- Clinical: Progressive dementia (memory loss first)
- Pathology: Amyloid plaques, neurofibrillary tangles
- Proteins: Amyloid-beta (Abeta), tau
- Affected areas: Hippocampus, cortex, limbic system
- Risk factors: Age, APOE4, family history

**Parkinson Disease (PD):**
- Clinical: Tremor, bradykinesia, rigidity, postural instability
- Pathology: Lewy bodies, loss of substantia nigra neurons
- Protein: Alpha-synuclein
- Affected areas: Substantia nigra, other brainstem nuclei
- Risk factors: Age, pesticides, head trauma

**Amyotrophic Lateral Sclerosis (ALS):**
- Clinical: Mixed upper and lower motor neuron signs
- Pathology: Loss of motor neurons, Bunina bodies
- Proteins: TDP-43 (most cases), SOD1 (familial)
- Affected areas: Motor cortex, brainstem, spinal cord
- Risk factors: Age, genetic mutations (C9orf72, SOD1)

**Huntington Disease (HD):**
- Clinical: Chorea, cognitive decline, psychiatric symptoms
- Pathology: Striatal atrophy (caudate > putamen)
- Protein: Mutant huntingtin (polyglutamine expansion)
- Genetic: Autosomal dominant, CAG repeat expansion
- Affected areas: Striatum, cortex

**Frontotemporal Dementia (FTD):**
- Clinical: Personality/behavior changes OR language deficits
- Pathology: Frontotemporal atrophy
- Proteins: Tau (FTLD-tau) or TDP-43 (FTLD-TDP)
- Subtypes: Behavioral variant, PPA (nonfluent, semantic)

**Protein Classification (Proteinopathies):**

**Amyloidopathies:**
- Alzheimer disease (Abeta)
- Prion diseases (PrP)

**Tauopathies:**
- Alzheimer disease
- Progressive supranuclear palsy
- Corticobasal degeneration
- Pick disease
- Chronic traumatic encephalopathy

**Synucleinopathies:**
- Parkinson disease
- Dementia with Lewy bodies
- Multiple system atrophy

**TDP-43 Proteinopathies:**
- ALS
- Frontotemporal lobar degeneration
- Limbic-predominant age-related TDP-43 encephalopathy (LATE)`,
      keyTerms: [
        { term: 'proteinopathy', definition: 'Disease caused by abnormal protein folding and aggregation' },
        { term: 'amyloid plaque', definition: 'Extracellular deposit of amyloid-beta protein in Alzheimer disease' },
        { term: 'Lewy body', definition: 'Intracytoplasmic inclusion of alpha-synuclein in Parkinson disease' },
        { term: 'selective vulnerability', definition: 'Pattern where specific neuron types are preferentially affected' },
        { term: 'prion', definition: 'Infectious protein that can induce misfolding in normal proteins' },
      ],
      analogies: [
        'Protein aggregation is like a stack of papers that gets crumpled and blocks the office hallway - normal traffic cannot get through.',
        'Neurodegenerative spread is like a forest fire jumping from tree to tree - pathology propagates along connected pathways.',
        'Selective vulnerability is like certain car models having the same part fail - specific cell types share vulnerabilities.',
      ],
    },
    3: {
      level: 3,
      summary: 'Neurodegenerative diseases involve complex molecular mechanisms including protein aggregation pathways, prion-like propagation, genetic risk factors, and cellular stress responses that converge on neuronal death.',
      explanation: `**Protein Aggregation Mechanisms:**

**Amyloid-Beta in Alzheimer Disease:**
- APP processing by beta and gamma secretases
- Abeta42 more aggregation-prone than Abeta40
- Oligomer formation (toxic species)
- Fibril formation and plaque deposition
- Seed amplification assays

**Tau Pathology:**
- Hyperphosphorylation disrupts microtubule binding
- Conformational changes promote aggregation
- Paired helical filaments (PHF)
- Neurofibrillary tangles
- Braak staging of spread

**Alpha-Synuclein:**
- Native function in synaptic vesicle trafficking
- Misfolding and aggregation
- Lewy bodies and Lewy neurites
- Prion-like spreading
- Peripheral autonomic involvement

**TDP-43 Proteinopathy:**
- Nuclear depletion, cytoplasmic aggregation
- RNA binding protein dysfunction
- Multiple cellular stress responses
- C9orf72 repeat expansion mechanism

**Prion-Like Mechanisms:**

**Propagation Models:**
- Templating: Misfolded proteins induce misfolding in normal proteins
- Direct cell-to-cell transfer
- Release and uptake mechanisms
- Network spread along anatomical connections
- Experimental evidence in animal models

**Clinical Implications:**
- Staging systems based on pathology spread
- Therapeutic targeting of propagation
- Biomarker development
- Disease-modifying strategies

**Genetic Factors:**

**Alzheimer Disease:**
- Early-onset: APP, PSEN1, PSEN2 (autosomal dominant)
- Late-onset: APOE4 (strongest genetic risk factor)
- GWAS: TREM2, CLU, CR1, BIN1, etc.

**Parkinson Disease:**
- SNCA, LRRK2, PARK2 (parkin), PINK1, DJ-1
- GBA mutations increase risk
- Mitochondrial dysfunction pathways

**ALS/FTD:**
- C9orf72 hexanucleotide repeat expansion (most common)
- SOD1 (autosomal dominant and recessive)
- TARDBP, FUS, TBK1, etc.
- TDP-43 proteinopathy in most cases

**Cellular Mechanisms:**

**Mitochondrial Dysfunction:**
- Reduced ATP production
- Increased reactive oxygen species
- Mitophagy impairment
- PINK1/Parkin pathway

**Lysosomal and Autophagy Dysfunction:**
- Impaired protein degradation
- Accumulation of autophagosomes
- TFEB dysfunction
- LRRK2 and endolysosomal trafficking

**Neuroinflammation:**
- Microglial activation
- Astrogliosis
- Cytokine release
- TREM2 function in microglia
- Complement cascade and synapse elimination

**Synaptic Dysfunction:**
- Early event in all neurodegenerative diseases
- Synapse loss correlates with cognitive decline
- Synaptic protein alterations
- Network dysfunction`,
      keyTerms: [
        { term: 'prion-like propagation', definition: 'Spread of protein aggregates by templated misfolding' },
        { term: 'secretase', definition: 'Enzyme that cleaves APP to produce amyloid-beta' },
        { term: 'TREM2', definition: 'Microglial receptor; variants increase Alzheimer risk' },
        { term: 'mitophagy', definition: 'Selective autophagy of damaged mitochondria' },
        { term: 'seed amplification', definition: 'Assay detecting minute amounts of aggregated protein' },
      ],
      clinicalNotes: 'The "prion-like" spread hypothesis explains the stereotyped progression of neurodegenerative pathology. Braak staging for PD and AD demonstrates pathology beginning in specific vulnerable regions and spreading predictably. This has therapeutic implications - interventions may need to target early stages before widespread involvement.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of neurodegeneration encompasses biomarker development, clinical trial endpoints, mixed pathologies, and emerging disease-modifying therapeutic approaches targeting specific molecular mechanisms.',
      explanation: `**Biomarker Development:**

**Alzheimer Disease Biomarkers:**

**CSF Biomarkers:**
- Abeta42: Decreased in AD (sensitivity ~85-90%)
- Total tau: Elevated (neuronal injury)
- Phosphorylated tau (p-tau181, p-tau217): Elevated (tangle pathology)
- Abeta42/40 ratio improves specificity
- Neurogranin, SNAP-25: Synaptic markers

**Imaging Biomarkers:**
- Amyloid PET: PIB, florbetapir, flutemetamol, florbetaben
- Tau PET: Flortaucipir (AV-1451), PI-2620, MK-6240
- FDG PET: Hypometabolism in affected regions
- MRI: Hippocampal and cortical atrophy

**Blood Biomarkers (Emerging):**
- Plasma Abeta42/40 ratio
- Plasma p-tau181, p-tau217, p-tau231
- Neurofilament light chain (NfL): General neurodegeneration
- GFAP: Astrocyte activation
- High sensitivity assays (Simoa, IP-MS)

**Parkinson Disease Biomarkers:**
- CSF alpha-synuclein (decreased, but not specific)
- Alpha-synuclein seed amplification assay (SAA)
- Dopamine transporter imaging (DaTscan)
- Skin biopsy for alpha-synuclein
- REM sleep behavior disorder as prodromal marker

**ALS Biomarkers:**
- Neurofilament light chain (prognostic)
- p75 neurotrophin receptor
- TDP-43 in CSF (research)
- EMG progression measures

**Clinical Trial Considerations:**

**Therapeutic Targets:**
- Amyloid-beta immunotherapy: Aduhelm, lecanemab, donanemab
- BACE inhibitors (discontinued - lack of efficacy)
- Anti-tau antibodies
- Anti-synuclein antibodies
- Antisense oligonucleotides (SOD1, C9orf72)

**Trial Design Issues:**
- Preclinical vs symptomatic trials
- Biomarker-enriched populations
- Composite cognitive endpoints
- Delayed start designs
- Adaptive trial designs

**Regulatory Considerations:**
- Surrogate endpoints vs clinical benefit
- Accelerated approval pathways
- Biomarker qualification

**Mixed Pathologies:**

**Common Findings:**
- AD pathology + vascular dementia
- AD + Lewy body pathology
- AD + TDP-43 (LATE)
- Multiple pathologies additive effect on cognition
- Pure pathologies uncommon in elderly

**Clinical Implications:**
- Heterogeneous clinical presentations
- Variable treatment responses
- Diagnostic challenges
- Prognostic uncertainty

**Atypical Presentations:**

**Atypical Alzheimer Disease:**
- Posterior cortical atrophy (visual variant)
- Logopenic aphasia (language variant)
- Behavioral/dysexecutive variant
- Corticobasal syndrome
- Early age of onset presentations

**Atypical Parkinson Disease:**
- Akinetic-rigid type
- Tremor-dominant type
- Young-onset Parkinson disease
- Parkinson-plus syndromes

**Differential Diagnosis:**
- Normal pressure hydrocephalus
- Vascular cognitive impairment
- Autoimmune encephalitis
- Psychiatric disorders
- Medication effects

**Disease-Modifying Strategies:**

**Immunotherapy:**
- Active immunization (vaccines)
- Passive monoclonal antibodies
- Microglial modulation
- Clearance enhancement

**Small Molecule Approaches:**
- Aggregation inhibitors
- Enhancers of clearance
- Mitochondrial enhancers
- Anti-inflammatory agents

**Gene and Cell Therapy:**
- AAV-mediated gene delivery
- CRISPR gene editing
- Stem cell transplantation
- Trophic factor delivery (GDNF, CDNF)`,
      keyTerms: [
        { term: 'amyloid PET', definition: 'Imaging using radioligands binding to amyloid deposits' },
        { term: 'Simoa', definition: 'Single molecule array; ultrasensitive protein detection technology' },
        { term: 'LATE', definition: 'Limbic-predominant age-related TDP-43 encephalopathy' },
        { term: 'DaTscan', definition: 'Dopamine transporter imaging using ioflupane I-123' },
        { term: 'antisense oligonucleotide', definition: 'Synthetic nucleic acid that modulates gene expression' },
      ],
      clinicalNotes: 'The recent FDA approval of amyloid-lowering antibodies (lecanemab, donanemab) represents a milestone in Alzheimer therapeutics. These drugs show modest slowing of cognitive decline but carry risks of ARIA (amyloid-related imaging abnormalities). Patient selection, monitoring protocols, and biomarker requirements are evolving.',
    },
    5: {
      level: 5,
      summary: 'Expert-level neurodegeneration knowledge encompasses molecular classification systems, advanced biomarker interpretation, clinical-pathological correlation studies, and translational research bridging basic mechanisms to clinical practice.',
      explanation: `**Molecular Classification Systems:**

**Neuropathological Diagnostic Criteria:**

**Alzheimer Disease (NIA-AA 2018):**
- A: Amyloid biomarker (CSF or PET)
- T: Tau biomarker (CSF or PET)
- N: Neurodegeneration (MRI, FDG, CSF total tau)
- ATN framework for research classification
- Staging independent of cognitive status

**Parkinson Disease:**
- Braak staging (1-6) based on alpha-synuclein distribution
- Clinical-biological construct
- Prodromal PD criteria
- GBAtalk classification

**FTLD Pathological Subtypes:**
- FTLD-tau: PSP, CBD, Pick, AGD, multiple system tauopathy
- FTLD-TDP: Types A, B, C, D, E, F
- FTLD-FUS: aFTLD-U, nFTLD-U, BIBD, NIFID
- FTLD-UPS, FTLD-CHMP2B (rare)

**Prion Disease Classification:**
- Sporadic CJD (MM1, MV1, VV2, etc. by PRNP codon 129)
- Genetic (familial) forms
- Acquired (iatrogenic, variant CJD)
- Biomarker: RT-QuIC, CSF 14-3-3

**Advanced Biomarker Interpretation:**

**Amyloid PET Quantification:**
- Centiloid scale standardization
- SUVR (standardized uptake value ratio)
- Visual read vs quantitative
- Longitudinal tracking
- Regional uptake patterns

**CSF Interpretation:**
- Assay standardization (certified reference materials)
- Pre-analytical variables
- Cut-off optimization
- Ratio calculations
- Biomarker combinations

**Blood-Based Biomarkers:**
- Mass spectrometry vs immunoassay platforms
- Pre-analytical stability
- Diagnostic performance characteristics
- Screening applications
- Monitoring treatment effects

**Clinical-Pathological Correlation:**

**Longitudinal Clinicopathological Studies:**
- Religious Orders Study (ROS)
- Rush Memory and Aging Project (MAP)
- Cognitive reserve concepts
- Pathology-cognition discordance

**Mixed Pathology Analysis:**
- Contribution quantification
- Interaction effects
- Additive vs synergistic
- Age-related accumulation

**Diagnostic Accuracy Studies:**
- Clinical vs autopsy diagnosis
- Biomarker prediction of pathology
- Diagnostic criteria evolution
- Incidental pathology frequency

**Translational Research:**

**Induced Pluripotent Stem Cells (iPSC):**
- Patient-derived neurons
- Disease modeling
- Drug screening platforms
- Genome editing correction

**Animal Models:**
- Transgenic mice (APP/PS1, Tau, Synuclein)
- Non-human primates
- Model limitations
- Therapeutic prediction validity

**Organoid Models:**
- Brain organoids
- Region-specific differentiation
- Vascularization improvements
- Immune cell integration

**Emerging Research Areas:**

**Systems Biology Approaches:**
- Multi-omics integration
- Network analysis
- Protein-protein interaction networks
- Disease module identification

**Artificial Intelligence:**
- Imaging pattern recognition
- Multimodal data integration
- Predictive modeling
- Drug repurposing

**Gut-Brain Axis:**
- Microbiome alterations
- Enteric nervous system
- Vagus nerve signaling
- Alpha-synuclein gut origin hypothesis

**Clinical Trial Innovation:**

**Platform Trials:**
- Multiple interventions
- Master protocol designs
- Adaptive randomization
- Shared control arms

**Remote Assessments:**
- Digital biomarkers
- Smartphone-based testing
- Wearable sensors
- Virtual trial participation

**Prevention Trials:**
- A4 study (asymptomatic at risk)
- DIAN-TU (dominantly inherited AD)
- Parkinson progression markers initiative
- Primary prevention designs`,
      keyTerms: [
        { term: 'ATN framework', definition: 'Biomarker classification for Alzheimer disease: Amyloid, Tau, Neurodegeneration' },
        { term: 'centiloid scale', definition: 'Standardized quantification scale for amyloid PET' },
        { term: 'RT-QuIC', definition: 'Real-time quaking-induced conversion; sensitive prion detection assay' },
        { term: 'cognitive reserve', definition: 'Brain resilience allowing function despite pathology' },
        { term: 'platform trial', definition: 'Clinical trial design testing multiple interventions with shared infrastructure' },
      ],
      clinicalNotes: 'Expert diagnostic approach: In patients with cognitive impairment, consider mixed pathologies. Pure AD or pure Lewy body dementia is less common than mixed AD+Lewy body or AD+vascular pathology. The ATN biomarker framework allows diagnosis independent of clinical symptoms - an individual can have AD pathology (A+T+) without cognitive impairment (cognitive reserve), or cognitive impairment without AD pathology (non-AD dementia).',
    },
  },

  media: [
    {
      id: 'neurodegeneration-mri',
      type: 'image',
      filename: 'brain-atrophy-comparison.jpg',
      title: 'Brain Atrophy Patterns',
      description: 'MRI comparisons showing atrophy patterns in different neurodegenerative diseases',
    },
  ],

  citations: [
    {
      id: 'jack-atn',
      type: 'article',
      title: 'NIA-AA Research Framework: Toward a Biological Definition of Alzheimer\'s Disease',
      authors: ['Jack, C.R. Jr.'],
      source: 'Alzheimers and Dementia',
    },
    {
      id: 'hardy-amyloid',
      type: 'article',
      title: 'The Amyloid Hypothesis of Alzheimer\'s Disease: Progress and Problems',
      authors: ['Hardy, J.'],
      source: 'Science',
    },
  ],

  crossReferences: [
    { targetId: 'pathology-cns-infections', targetType: 'condition', relationship: 'related', label: 'CNS Infections' },
    { targetId: 'pathology-brain-tumors', targetType: 'condition', relationship: 'related', label: 'Brain Tumors' },
    { targetId: 'clinical-neurological-exam', targetType: 'concept', relationship: 'see-also', label: 'Neurological Examination' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pathology', 'neurodegeneration', 'neurology'],
    keywords: ['neurodegeneration', 'Alzheimer', 'Parkinson', 'ALS', 'proteinopathy', 'dementia'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neurodegeneration;
