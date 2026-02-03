/**
 * Neurodegenerative Diseases - Pathology Educational Content
 *
 * Detailed coverage of Alzheimer's disease, Parkinson's disease, and related
 * neurodegenerative conditions including pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const neurodegenerative: EducationalContent = {
  id: 'pathology-neurodegenerative-detailed',
  type: 'condition',
  name: 'Neurodegenerative Diseases',
  alternateNames: ['Alzheimer Disease', 'Parkinson Disease', 'Neurodegenerative Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Neurodegenerative diseases cause brain cells to slowly stop working and die over time, leading to problems with memory, movement, or thinking.',
      explanation: `Neurodegenerative diseases are conditions where brain cells gradually break down and die. This process happens slowly over months to years. The two most common are Alzheimer's disease (affects memory) and Parkinson's disease (affects movement).

**Alzheimer's Disease:**

**What Happens:**
- Brain cells that store memories start dying
- Abnormal proteins build up in the brain
- The brain slowly shrinks over time

**Symptoms (in order):**
1. **Early Stage:**
   - Forgetting recent events
   - Repeating questions
   - Misplacing items

2. **Middle Stage:**
   - Forgetting names of family members
   - Getting lost in familiar places
   - Needing help with daily activities

3. **Late Stage:**
   - Cannot communicate
   - Need full-time care
   - May not recognize loved ones

**Risk Factors:**
- Age (most common after 65)
- Family history
- Certain genes (like APOE4)

**Parkinson's Disease:**

**What Happens:**
- Brain cells that control movement die
- A chemical called dopamine decreases
- Movement becomes difficult

**Main Symptoms (the "4 cardinal signs"):**
1. **Tremor** - Shaking, especially at rest
2. **Rigidity** - Stiff muscles
3. **Bradykinesia** - Slow movement
4. **Postural instability** - Balance problems (later)

**Other Symptoms:**
- Soft voice
- Small handwriting
- Shuffling walk
- Constipation
- Sleep problems

**Important Points:**
- Neither disease is contagious
- They are different from normal aging
- Treatments can help manage symptoms
- Research is ongoing for cures

**When to See a Doctor:**
- Memory problems affecting daily life
- New tremor or stiffness
- Changes in walking or balance
- Personality changes

Early diagnosis helps plan for the future and get the best treatment.`,
      keyTerms: [
        { term: 'Alzheimer disease', definition: 'A brain disease that slowly destroys memory and thinking skills' },
        { term: 'Parkinson disease', definition: 'A brain disease that causes tremor, stiffness, and slow movement' },
        { term: 'dopamine', definition: 'A brain chemical needed for normal movement' },
        { term: 'tremor', definition: 'Involuntary shaking of a body part' },
        { term: 'dementia', definition: 'Loss of memory and thinking abilities severe enough to affect daily life' },
      ],
      analogies: [
        'Alzheimer disease is like files being slowly deleted from a computer - eventually the computer cannot function.',
        'Parkinson disease is like a car running low on oil - the engine does not run smoothly and movements become jerky.',
        'Brain cells dying in these diseases is like lights going out in a building one by one.',
      ],
      examples: [
        'A grandmother who keeps asking the same question over and over may have early Alzheimer disease.',
        'A retired teacher whose hand shakes when resting and who walks with small shuffling steps may have Parkinson disease.',
        'A 75-year-old who gets lost driving to a store they have visited for 30 years should be evaluated for dementia.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neurodegenerative diseases are characterized by progressive neuronal loss and protein aggregation, with Alzheimer disease affecting cognition through amyloid and tau pathology, and Parkinson disease affecting movement through dopaminergic cell loss.',
      explanation: `**Alzheimer Disease (AD):**

**Epidemiology:**
| Factor | Details |
|--------|---------|
| Prevalence | Most common dementia (60-70%) |
| Age | Risk doubles every 5 years after 65 |
| Sex | More common in females |
| Genetics | APOE4 increases risk 3-12x |

**Pathological Hallmarks:**
| Finding | Composition | Location |
|---------|-------------|----------|
| Senile plaques | Amyloid-beta (Abeta) | Extracellular |
| Neurofibrillary tangles | Hyperphosphorylated tau | Intracellular |
| Neuronal loss | - | Hippocampus, cortex |
| Synaptic loss | - | Correlates with cognition |

**Amyloid Cascade:**
\`\`\`
Amyloid precursor protein (APP)
↓ (Beta and gamma secretase cleavage)
Amyloid-beta peptides (Abeta40, Abeta42)
↓
Oligomer formation (toxic species)
↓
Plaque deposition
↓
Neuronal dysfunction and death
\`\`\`

**Clinical Stages:**
| Stage | MMSE Score | Features |
|-------|------------|----------|
| Mild (early) | 21-26 | Memory loss, word-finding difficulty |
| Moderate | 10-20 | ADL impairment, behavioral changes |
| Severe | <10 | Total dependence, minimal communication |

**Diagnosis:**
- Clinical criteria (NIA-AA)
- Cognitive testing (MMSE, MoCA)
- Biomarkers (CSF Abeta, tau; amyloid PET)
- MRI (hippocampal atrophy, rule out other causes)

**Parkinson Disease (PD):**

**Epidemiology:**
| Factor | Details |
|--------|---------|
| Prevalence | 1% over age 60 |
| Age of onset | Usually 55-65 |
| Sex | More common in males |
| Risk factors | Pesticides, head trauma, genetics |

**Pathological Features:**
| Finding | Details |
|---------|---------|
| Lewy bodies | Alpha-synuclein inclusions |
| Dopaminergic loss | Substantia nigra pars compacta |
| Neuromelanin loss | Visible pallor of substantia nigra |
| Braak staging | Progression from brainstem upward |

**Cardinal Motor Features (TRAP):**
| Sign | Description |
|------|-------------|
| Tremor | Resting tremor (4-6 Hz), "pill-rolling" |
| Rigidity | Cogwheel or lead-pipe |
| Akinesia/Bradykinesia | Slowness, reduced amplitude |
| Postural instability | Late feature, falls |

**Non-Motor Features:**
| Category | Symptoms |
|----------|----------|
| Autonomic | Constipation, orthostatic hypotension |
| Psychiatric | Depression, anxiety, hallucinations |
| Cognitive | Executive dysfunction, dementia (late) |
| Sleep | REM sleep behavior disorder, insomnia |
| Sensory | Hyposmia (early), pain |

**Diagnosis:**
- Clinical criteria (MDS)
- DaTscan (dopamine transporter imaging)
- Exclusion of mimics
- Response to levodopa (supportive)

**Other Neurodegenerative Diseases:**

**Dementia with Lewy Bodies (DLB):**
- Dementia with visual hallucinations
- Fluctuating cognition
- Parkinsonism
- REM sleep behavior disorder
- Sensitivity to antipsychotics

**Frontotemporal Dementia (FTD):**
- Behavioral variant: Personality changes, disinhibition
- Language variants: Nonfluent or semantic aphasia
- Younger onset (45-65)
- May overlap with ALS

**Progressive Supranuclear Palsy (PSP):**
- Vertical gaze palsy
- Early falls (backward)
- Axial rigidity > limb
- Poor levodopa response`,
      keyTerms: [
        { term: 'amyloid-beta', definition: 'Protein fragment that accumulates in plaques in Alzheimer disease' },
        { term: 'tau', definition: 'Microtubule-associated protein that forms tangles in Alzheimer disease' },
        { term: 'Lewy body', definition: 'Intracellular inclusion of alpha-synuclein in Parkinson disease and DLB' },
        { term: 'substantia nigra', definition: 'Midbrain region producing dopamine; degenerates in Parkinson disease' },
        { term: 'bradykinesia', definition: 'Slowness of movement; cardinal feature of Parkinson disease' },
      ],
      analogies: [
        'The amyloid cascade is like a clogged drain - proteins accumulate and eventually block brain function.',
        'Loss of dopamine in Parkinson disease is like a factory losing its workers - production slows down.',
        'Braak staging shows how alpha-synuclein spreads like an infection from the gut/brainstem upward to the cortex.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advanced understanding of neurodegeneration includes molecular mechanisms of protein aggregation, genetic contributions, biomarker development, and current pharmacological and non-pharmacological management strategies.',
      explanation: `**Molecular Mechanisms:**

**Protein Aggregation:**
\`\`\`
Normal protein
↓ (Stress, mutation, aging)
Misfolded protein
↓
Oligomers (toxic species)
↓
Fibrils
↓
Insoluble aggregates (plaques, tangles, Lewy bodies)
\`\`\`

**Prion-Like Propagation:**
| Disease | Protein | Evidence |
|---------|---------|----------|
| AD | Tau, possibly Abeta | Braak staging, injection models |
| PD | Alpha-synuclein | Braak staging, graft studies |
| ALS | TDP-43, SOD1 | Spinal cord progression |

**Genetic Factors:**

**Alzheimer Disease:**
| Gene | Type | Mechanism |
|------|------|-----------|
| APP | Early-onset, autosomal dominant | Increased Abeta production |
| PSEN1, PSEN2 | Early-onset, autosomal dominant | Gamma-secretase dysfunction |
| APOE4 | Risk factor | Impaired Abeta clearance |
| TREM2 | Risk factor | Microglial dysfunction |

**Parkinson Disease:**
| Gene | Type | Mechanism |
|------|------|-----------|
| SNCA | Autosomal dominant | Alpha-synuclein overexpression |
| LRRK2 | Autosomal dominant | Kinase dysfunction |
| PARK2 (Parkin) | Autosomal recessive | Mitophagy impairment |
| PINK1 | Autosomal recessive | Mitochondrial dysfunction |
| GBA | Risk factor | Lysosomal dysfunction |

**Biomarkers:**

**Alzheimer Disease Biomarkers:**
| Biomarker | Source | Interpretation |
|-----------|--------|----------------|
| Abeta42/40 | CSF, plasma | Low = amyloid pathology |
| P-tau181/217 | CSF, plasma | Elevated = tau pathology |
| Total tau | CSF | Elevated = neuronal injury |
| Amyloid PET | Imaging | Positive = amyloid plaques |
| Tau PET | Imaging | Shows tangle distribution |
| NfL | CSF, plasma | Elevated = neurodegeneration |

**ATN Classification:**
\`\`\`
A: Amyloid biomarker (positive/negative)
T: Tau biomarker (positive/negative)
N: Neurodegeneration biomarker (positive/negative)

Examples:
A+T+N+ = AD with neurodegeneration
A+T-N- = Preclinical AD (amyloid only)
A-T-N+ = Non-AD neurodegeneration
\`\`\`

**Parkinson Disease Biomarkers:**
| Biomarker | Source | Utility |
|-----------|--------|---------|
| DaTscan | SPECT | Confirms dopaminergic deficit |
| Alpha-synuclein SAA | CSF | Research, diagnosis |
| Skin biopsy | Tissue | Phosphorylated synuclein |
| MIBG cardiac scan | SPECT | Cardiac denervation |

**Treatment - Alzheimer Disease:**

**Symptomatic Therapies:**
| Class | Examples | Mechanism |
|-------|----------|-----------|
| Cholinesterase inhibitors | Donepezil, rivastigmine, galantamine | Increase ACh |
| NMDA antagonist | Memantine | Reduce excitotoxicity |
| Combination | Memantine + donepezil | Additive benefit |

**Disease-Modifying (Anti-Amyloid):**
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Lecanemab | Anti-Abeta antibody | FDA approved |
| Donanemab | Anti-Abeta antibody | FDA approved |
| Aducanumab | Anti-Abeta antibody | FDA approved (controversial) |

**Treatment - Parkinson Disease:**

**Dopaminergic Therapies:**
| Class | Examples | Notes |
|-------|----------|-------|
| Levodopa | Carbidopa/levodopa | Most effective, motor complications |
| Dopamine agonists | Pramipexole, ropinirole, rotigotine | Less motor complications, more psychiatric |
| MAO-B inhibitors | Selegiline, rasagiline, safinamide | Adjunctive, mild efficacy |
| COMT inhibitors | Entacapone, opicapone | Extend levodopa effect |
| Amantadine | Amantadine ER | Dyskinesia treatment |

**Non-Pharmacological:**
\`\`\`
AD:
- Cognitive stimulation
- Physical exercise
- Caregiver support
- Environmental modifications
- Safety planning

PD:
- Physical therapy
- LSVT LOUD (speech)
- Exercise (boxing, dance, tai chi)
- Occupational therapy
- Nutrition counseling
\`\`\``,
      keyTerms: [
        { term: 'ATN framework', definition: 'Biomarker classification for AD: Amyloid, Tau, Neurodegeneration' },
        { term: 'seed amplification assay', definition: 'Technique to detect minute amounts of aggregated protein' },
        { term: 'levodopa', definition: 'Dopamine precursor; most effective treatment for PD motor symptoms' },
        { term: 'cholinesterase inhibitor', definition: 'Drug that increases acetylcholine; used in AD treatment' },
        { term: 'ARIA', definition: 'Amyloid-related imaging abnormalities; complication of anti-amyloid therapy' },
      ],
      clinicalNotes: 'Anti-amyloid antibodies (lecanemab, donanemab) show modest clinical benefit with ARIA risk, requiring MRI monitoring. Biomarker confirmation of AD pathology is increasingly important for treatment selection. In PD, levodopa remains the most effective therapy but motor complications develop in 50% by 5 years. GBA mutation carriers with PD may have faster progression and warrant genetic counseling.',
    },
    4: {
      level: 4,
      summary: 'Expert-level understanding encompasses clinical trial interpretation, complex management scenarios, device-aided therapies for Parkinson disease, and emerging therapeutic targets across neurodegenerative diseases.',
      explanation: `**Clinical Trial Interpretation:**

**Anti-Amyloid Trials:**
\`\`\`
Lecanemab (Clarity AD):
- 27% slowing of cognitive decline (CDR-SB)
- Amyloid reduction >70%
- ARIA-E 12.6%, ARIA-H 17.3%
- 18-month trial

Donanemab (TRAILBLAZER-ALZ 2):
- 35% slowing in intermediate tau group
- Amyloid clearance to PET-negative
- ARIA-E 24%, ARIA-H 31.4%
- Treatment cessation upon clearance

Clinical Significance Debate:
- Statistical vs clinical meaningfulness
- 0.45 point difference on 18-point CDR-SB
- Individual variability
- Need for longer-term data
\`\`\`

**ARIA Management:**
| Type | Appearance | Management |
|------|------------|------------|
| ARIA-E | Vasogenic edema | Hold treatment, monitor |
| ARIA-H microhemorrhage | Small bleeds | May continue cautiously |
| ARIA-H superficial siderosis | Sulcal blood | Hold treatment |
| Symptomatic ARIA | Headache, confusion | Consider steroids |

**Complex PD Management:**

**Motor Complications:**
\`\`\`
Wearing-Off:
- Shorten levodopa dosing intervals
- Add COMT inhibitor (entacapone, opicapone)
- Add MAO-B inhibitor
- Switch to extended-release formulations

Dyskinesia:
- Reduce individual levodopa doses
- Add amantadine ER
- Consider device-aided therapy

On-Off Fluctuations:
- Complex patterns
- Often require device-aided therapy
\`\`\`

**Device-Aided Therapies:**

**Deep Brain Stimulation (DBS):**
| Target | Indications | Notes |
|--------|-------------|-------|
| STN | Motor fluctuations | Medication reduction possible |
| GPi | Motor fluctuations, dyskinesia | May not reduce medications |
| VIM | Tremor-dominant | Less effect on bradykinesia |

\`\`\`
DBS Candidate Selection:
- Clear levodopa responsiveness
- Motor complications despite optimization
- No significant cognitive impairment
- Realistic expectations
- Age typically <70-75
\`\`\`

**Continuous Infusion Therapies:**
| Therapy | Route | Advantages |
|---------|-------|------------|
| Carbidopa-levodopa enteral (Duopa) | J-tube | Continuous dopaminergic stimulation |
| Apomorphine subcutaneous | Pump | Rescue and continuous options |
| Foslevodopa-foscarbidopa (Produodopa) | SC pump | No J-tube needed |

**Parkinson Disease Dementia vs DLB:**
| Feature | PDD | DLB |
|---------|-----|-----|
| Motor-cognitive timing | Motor > 1 year before dementia | Dementia within 1 year of motor |
| Hallucinations | Later | Early and prominent |
| Fluctuations | Less prominent | Core feature |
| Levodopa response | Good | Variable |

**Advanced Dementia Management:**

**Behavioral Symptoms:**
| Symptom | First-line | Notes |
|---------|------------|-------|
| Agitation | Non-pharmacological | Environmental, caregiver |
| Depression | SSRIs | Avoid anticholinergics |
| Psychosis | Reduce antiPD drugs (PD); pimavanserin | Avoid typical antipsychotics |
| Apathy | Methylphenidate (if severe) | Often under-recognized |

**End-of-Life Considerations:**
\`\`\`
Goals of Care:
- Early advance care planning
- Hospice eligibility criteria
- Comfort-focused approach
- Caregiver support

Prognostication:
- FAST stage 7c for AD hospice eligibility
- PD: Complex, often multi-morbidity
\`\`\`

**Emerging Therapeutic Targets:**

**Tau-Targeted Therapies:**
| Approach | Examples | Status |
|----------|----------|--------|
| Anti-tau antibodies | Semorinemab, zagotenemab | Mixed results |
| Tau aggregation inhibitors | Methylene blue derivatives | Early trials |
| Antisense oligonucleotides | BIIB080 (ION363) | Phase 1-2 |

**Alpha-Synuclein Approaches:**
| Approach | Examples | Status |
|----------|----------|--------|
| Anti-synuclein antibodies | Prasinezumab, cinpanemab | Phase 2, mixed results |
| Synuclein aggregation inhibitors | Multiple | Early development |
| GBA modulators | Venglustat, ambroxol | Phase 2 |

**Gene Therapy:**
\`\`\`
Parkinson Disease:
- AAV-AADC (aromatic amino acid decarboxylase)
- AAV-GAD (glutamic acid decarboxylase)
- AAV-GDNF (neurotrophic factor)

Approach:
- Stereotactic injection
- Gene product expression in target
- Single procedure, lasting effect
\`\`\``,
      keyTerms: [
        { term: 'deep brain stimulation', definition: 'Implanted electrodes delivering electrical pulses to brain targets' },
        { term: 'STN', definition: 'Subthalamic nucleus; common DBS target for PD' },
        { term: 'CDR-SB', definition: 'Clinical Dementia Rating Sum of Boxes; outcome measure in AD trials' },
        { term: 'pimavanserin', definition: '5-HT2A inverse agonist for PD psychosis without worsening motor symptoms' },
        { term: 'FAST staging', definition: 'Functional Assessment Staging; measures AD progression and hospice eligibility' },
      ],
      clinicalNotes: 'Anti-amyloid antibodies require careful patient selection (early disease, biomarker confirmation) and monitoring (baseline and serial MRI). In PD, DBS is transformative for appropriate candidates but patient selection is critical. Pimavanserin is the only FDA-approved treatment for PD psychosis and does not worsen motor symptoms. Palliative care should be integrated early in neurodegenerative disease management.',
    },
    5: {
      level: 5,
      summary: 'Expert-level knowledge encompasses molecular classification systems, precision medicine approaches, novel biomarker interpretation, cutting-edge therapeutics, and direction of specialized neurodegenerative disease programs.',
      explanation: `**Molecular Classification:**

**Alzheimer Disease Subtypes:**
\`\`\`
Biomarker-Defined AD (NIA-AA 2018):
- AD based on biomarkers, not symptoms
- Enables diagnosis in preclinical stage
- Framework for prevention trials

Pathological Subtypes:
- Typical AD: Limbic-predominant tangle distribution
- Hippocampal-sparing AD: Cortical predominant
- Limbic-predominant AD: Hippocampal only

Clinical-Pathological Subtypes:
- Amnestic (typical)
- Posterior cortical atrophy (visual)
- Logopenic variant PPA (language)
- Behavioral/dysexecutive variant
\`\`\`

**Primary Age-Related Tauopathy (PART):**
- NFTs without significant amyloid
- Common in elderly
- Limited cognitive impact
- Not true AD

**Parkinson Disease Molecular Subtypes:**
\`\`\`
Genetic Subtyping:
- LRRK2-PD: May be slower, tremor-dominant
- GBA-PD: Faster progression, cognitive decline
- PRKN/PINK1-PD: Young onset, slow progression

Prodromal PD (MDS Criteria):
- REM sleep behavior disorder
- Hyposmia
- Constipation
- Depression
- Substantia nigra hyperechogenicity
- DAT imaging positive
\`\`\`

**Precision Medicine Approaches:**

**Genetic Stratification:**
| Gene | Therapeutic Implications |
|------|-------------------------|
| APOE4 (AD) | Higher ARIA risk, biomarker selection |
| LRRK2 (PD) | LRRK2 kinase inhibitors in trials |
| GBA (PD) | GCase modulators (ambroxol) |
| PSEN mutations (AD) | Anti-amyloid trials, family screening |

**Biomarker-Guided Treatment:**
\`\`\`
Anti-Amyloid Therapy Selection:
- Confirm A+T+N+ status
- Assess APOE4 status (ARIA risk)
- Appropriate disease stage (mild cognitive impairment to mild AD)
- MRI surveillance protocol

PD Precision Approaches:
- GBA mutation testing
- Alpha-synuclein SAA for diagnosis
- Genetic counseling for hereditary forms
\`\`\`

**Novel Biomarker Interpretation:**

**Blood-Based Biomarkers:**
| Biomarker | Platform | Use |
|-----------|----------|-----|
| Plasma Abeta42/40 | Mass spec, Simoa | Screening for amyloid |
| Plasma p-tau217 | Simoa, Elecsys | Highly specific for AD |
| Plasma GFAP | Simoa | Astrocyte activation |
| Serum NfL | Simoa | Neurodegeneration, progression |

\`\`\`
p-tau217 Performance:
- AUC 0.96 for AD vs non-AD
- Correlates with tau PET
- Rising in preclinical stages
- May guide anti-amyloid treatment
\`\`\`

**Fluid Biomarker Cascade:**
\`\`\`
Preclinical AD:
1. Amyloid (CSF, plasma) - earliest change
2. P-tau rises
3. NfL increases
4. Cognitive symptoms

Clinical Utility:
- Blood test screening
- CSF for confirmation
- PET for visualization
- Staging disease progression
\`\`\`

**Cutting-Edge Therapeutics:**

**CRISPR/Gene Editing:**
| Target | Application | Status |
|--------|-------------|--------|
| APP reduction | Lower Abeta production | Preclinical |
| SNCA silencing | Reduce synuclein | Preclinical |
| LRRK2 silencing | Target kinase | Early development |

**Cell Therapy:**
\`\`\`
Dopaminergic Cell Replacement:
- Fetal cell transplants (historical)
- iPSC-derived DA neurons
- STEM-PD trial ongoing
- Challenges: Integration, dyskinesia, rejection

MSC Therapy:
- Immunomodulatory
- Neuroprotective factors
- Multiple trials in ALS, PD
- Modest effects to date
\`\`\`

**Antisense Oligonucleotides:**
| Target | Disease | Status |
|--------|---------|--------|
| Tau (MAPT) | AD, FTD, PSP | Phase 1-2 |
| SNCA | PD, MSA | Phase 1 |
| C9orf72 | ALS/FTD | Phase 1-2 |
| SOD1 | ALS | FDA approved (tofersen) |

**Program Direction:**

**Specialized Center Components:**
\`\`\`
Multidisciplinary Team:
- Movement disorder specialists
- Cognitive neurologists
- Neuropsychologists
- PT/OT/SLP
- Social work
- Genetic counselors
- Research coordinators
- Palliative care

Clinical Infrastructure:
- Infusion center (anti-amyloid, DBS programming)
- Research biorepository
- Clinical trials unit
- Telemedicine capacity
\`\`\`

**Quality Metrics:**
| Metric | Target |
|--------|--------|
| Time to diagnosis | Reduce delay |
| Biomarker-confirmed diagnosis | Increasing proportion |
| Clinical trial enrollment | Access to novel therapies |
| Care coordination | Multidisciplinary visits |
| Advance care planning | Early documentation |

**Research Frontiers:**

**Prevention Trials:**
\`\`\`
AD Prevention:
- A4 Study: Anti-amyloid in preclinical AD
- DIAN-TU: Autosomal dominant mutation carriers
- AHEAD Study: Very early intervention

PD Prevention:
- PPMI cohort for trial-ready populations
- GBA mutation carriers as target
- RBD cohorts (prodromal PD)
\`\`\`

**Digital and Remote Monitoring:**
| Technology | Application |
|------------|-------------|
| Smartphone cognitive tests | Longitudinal tracking |
| Wearable sensors | Gait, falls, bradykinesia |
| Voice analysis | PD and cognitive screening |
| AI-assisted analysis | Pattern recognition, prediction |`,
      keyTerms: [
        { term: 'PART', definition: 'Primary age-related tauopathy; NFTs without significant amyloid' },
        { term: 'p-tau217', definition: 'Phosphorylated tau species highly specific for AD on blood testing' },
        { term: 'iPSC', definition: 'Induced pluripotent stem cell; reprogrammed cells for disease modeling and therapy' },
        { term: 'tofersen', definition: 'Antisense oligonucleotide for SOD1-ALS; first genetically-targeted ALS therapy' },
        { term: 'prodromal PD', definition: 'Pre-motor PD with non-motor features and positive biomarkers' },
      ],
      clinicalNotes: 'Plasma p-tau217 is transforming AD diagnostics with high accuracy matching CSF biomarkers. Anti-amyloid therapy requires systematic infrastructure (infusion, MRI surveillance, genetic testing). Prodromal PD identification enables prevention trials. Specialized centers must integrate clinical care, research, and education. Palliative care and advance care planning should begin at diagnosis. Genetic testing in movement disorders is increasingly standard, with therapeutic implications for LRRK2 and GBA carriers.',
    },
  },

  media: [
    {
      id: 'brain-pathology',
      type: 'image',
      filename: 'neurodegenerative-pathology.jpg',
      title: 'Neurodegenerative Pathology',
      description: 'Microscopic images of amyloid plaques, neurofibrillary tangles, and Lewy bodies',
    },
    {
      id: 'parkinsons-diagram',
      type: 'diagram',
      filename: 'parkinsons-pathway.png',
      title: 'Dopaminergic Pathway in PD',
      description: 'Nigrostriatal pathway and dopamine loss in Parkinson disease',
    },
  ],

  citations: [
    {
      id: 'jack-atn-framework',
      type: 'article',
      title: 'NIA-AA Research Framework: Toward a Biological Definition of Alzheimer\'s Disease',
      authors: ['Jack, C.R. Jr.'],
      source: 'Alzheimers Dement',
    },
    {
      id: 'postuma-pd-criteria',
      type: 'article',
      title: 'MDS Clinical Diagnostic Criteria for Parkinson\'s Disease',
      authors: ['Postuma, R.B.'],
      source: 'Movement Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'pathology-demyelinating-diseases', targetType: 'condition', relationship: 'related', label: 'Demyelinating Diseases' },
    { targetId: 'clinical-neurological-exam', targetType: 'concept', relationship: 'see-also', label: 'Neurological Examination' },
    { targetId: 'physiology-neurotransmitters', targetType: 'process', relationship: 'related', label: 'Neurotransmitters' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pathology', 'neurology', 'psychiatry'],
    keywords: ['Alzheimer', 'Parkinson', 'dementia', 'neurodegeneration', 'amyloid', 'alpha-synuclein', 'dopamine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry', 'medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neurodegenerative;
