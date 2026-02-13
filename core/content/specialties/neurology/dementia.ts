/**
 * Dementia Types - Comprehensive Neurology Content
 *
 * Complete coverage of major dementia subtypes including Alzheimer's,
 * vascular, Lewy body, frontotemporal, and other dementias.
 */

import { EducationalContent } from '../../types';

export const dementiaContent: EducationalContent = {
  id: 'neuro-dementia',
  type: 'condition',
  name: 'Dementia',
  alternateNames: ['Major Neurocognitive Disorder', 'Cognitive Decline', 'Senility'],
  hpoId: 'HP:0000726',

  levels: {
    1: {
      level: 1,
      summary: 'Dementia is not a single disease but a general term for a decline in mental abilities severe enough to interfere with daily life, caused by various brain diseases.',
      explanation: `Dementia describes a group of symptoms affecting memory, thinking, and social abilities severely enough to interfere with daily life. It's not a normal part of aging.

**Common Signs:**
- Memory loss that disrupts daily life
- Difficulty planning or solving problems
- Trouble completing familiar tasks
- Confusion about time or place
- Difficulty with words and conversation
- Misplacing things and losing the ability to retrace steps
- Poor judgment
- Withdrawal from social activities
- Changes in mood and personality

**Major Types:**

*Alzheimer's Disease (Most Common - 60-70%):*
- Gradual memory loss
- Gets worse over time
- Affects thinking and behavior

*Vascular Dementia:*
- Caused by reduced blood flow to the brain
- Often after strokes
- May have stepwise decline

*Lewy Body Dementia:*
- Causes visual hallucinations
- Fluctuating alertness
- Movement problems like Parkinson's

*Frontotemporal Dementia:*
- Changes in personality and behavior
- Language problems
- Often starts younger (age 45-65)

**Important Points:**
- Some causes of dementia symptoms are reversible (vitamin deficiencies, thyroid problems)
- Early diagnosis helps with planning and treatment
- Support is available for patients and caregivers
- Some medications can help with symptoms`,
      keyTerms: [
        { term: 'dementia', definition: 'A decline in mental abilities severe enough to interfere with daily life' },
        { term: 'Alzheimer\'s disease', definition: 'The most common type of dementia, causing progressive memory loss' },
        { term: 'cognitive', definition: 'Related to thinking, reasoning, and memory', pronunciation: 'KOG-ni-tiv' },
      ],
      analogies: [
        'If the brain were a filing cabinet, dementia is like losing more and more files and the ability to organize what remains.',
        'Memory loss in dementia isn\'t like normal forgetting - it\'s like the information was never stored in the first place.',
      ],
      examples: [
        'A person repeatedly asks the same question within minutes, not remembering they already asked.',
        'Someone with dementia gets lost driving to their own home of 30 years.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dementia is classified by underlying pathology (neurodegenerative vs vascular vs other), with Alzheimer\'s disease being most common, each having characteristic clinical features and progression patterns.',
      explanation: `**DSM-5 Major Neurocognitive Disorder Criteria:**
- Significant decline from prior level in one or more cognitive domains
- Cognitive deficits interfere with independence
- Not occurring exclusively during delirium
- Not better explained by another mental disorder

**Cognitive Domains:**
- Complex attention
- Executive function
- Learning and memory
- Language
- Perceptual-motor function
- Social cognition

**Major Types:**

**Alzheimer's Disease (AD):**
- Most common (60-70%)
- Insidious onset, gradual progression
- Early: Episodic memory impairment
- Later: Language, visuospatial, executive decline
- Risk factors: Age, family history, APOE-e4

**Vascular Dementia:**
- Second most common
- Related to cerebrovascular disease
- May be stepwise or gradual
- Executive dysfunction prominent
- Risk factors: HTN, DM, stroke history

**Dementia with Lewy Bodies (DLB):**
- Core features:
  - Fluctuating cognition
  - Recurrent visual hallucinations
  - REM sleep behavior disorder
  - Parkinsonism
- Severe neuroleptic sensitivity

**Frontotemporal Dementia (FTD):**
- Behavioral variant: Personality changes, disinhibition, apathy
- Language variants: Progressive aphasia
- Younger onset (45-65 typical)
- Memory relatively preserved early

**Other Causes:**
- Mixed dementia (AD + vascular)
- Parkinson's disease dementia
- Normal pressure hydrocephalus (reversible)
- Creutzfeldt-Jakob disease (CJD) - rapid

**Reversible Causes to Exclude:**
- Vitamin B12 deficiency
- Hypothyroidism
- Depression (pseudodementia)
- Normal pressure hydrocephalus
- Medication effects
- Infections (syphilis, HIV)`,
      keyTerms: [
        { term: 'episodic memory', definition: 'Memory for personal experiences and events' },
        { term: 'executive function', definition: 'Higher-level thinking including planning, organization, and judgment' },
        { term: 'APOE-e4', definition: 'Gene variant that increases Alzheimer\'s risk', pronunciation: 'APO-ee-ee-four' },
        { term: 'neuroleptic sensitivity', definition: 'Severe reactions to antipsychotic medications' },
      ],
      analogies: [
        'Vascular dementia is like a city losing power to different neighborhoods at different times after storms (strokes) damage the power lines.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dementia evaluation includes cognitive testing, neuroimaging, laboratory workup for reversible causes, and may include CSF biomarkers or PET imaging, with treatment targeting symptoms and modifiable risk factors.',
      explanation: `**Diagnostic Evaluation:**

**Cognitive Assessment:**
- MMSE (Mini-Mental State Exam): 30 points, <24 abnormal
- MoCA (Montreal Cognitive Assessment): More sensitive, <26 abnormal
- Detailed neuropsychological testing for subtle/early cases

**Neuroimaging:**
- MRI brain (preferred):
  - AD: Hippocampal/medial temporal atrophy
  - FTD: Frontal and/or temporal atrophy
  - Vascular: White matter changes, infarcts
  - NPH: Ventricular enlargement out of proportion to atrophy
  - Prion disease: Cortical ribboning (DWI)

**Laboratory Workup:**
- B12, folate
- TSH
- CBC, CMP
- RPR/VDRL (syphilis if indicated)
- HIV (if indicated)
- Consider: Ceruloplasmin (Wilson's), heavy metals

**CSF Biomarkers (Research/Specialist):**
- Amyloid beta-42: Decreased in AD
- Tau: Elevated in AD
- Phospho-tau: Elevated in AD
- 14-3-3 protein: CJD

**Amyloid PET Imaging:**
- Detects brain amyloid deposition
- Positive in AD (and cognitively normal elderly)
- Helps exclude AD when negative
- Medicare coverage with clinical criteria

**Tau PET Imaging:**
- More specific for AD pathology
- Correlates with clinical stage
- Research and clinical use expanding

**Treatment - Alzheimer's Disease:**

*Cholinesterase Inhibitors:*
- Donepezil, rivastigmine, galantamine
- Mild-moderate AD
- Modest symptomatic benefit
- GI side effects common

*Memantine:*
- NMDA receptor antagonist
- Moderate-severe AD
- May combine with cholinesterase inhibitor

*Emerging Disease-Modifying Therapies:*
- Anti-amyloid antibodies (lecanemab, aducanumab)
- Target amyloid plaques
- Modest slowing of progression
- ARIA (edema, microhemorrhage) risk

**Behavioral Management:**
- Non-pharmacologic first
- Avoid antipsychotics if possible (DLB especially)
- If needed: Start low, reassess regularly

**Caregiver Support:**
- Critical component of care
- Resources, respite
- Address burnout`,
      keyTerms: [
        { term: 'MoCA', definition: 'Montreal Cognitive Assessment - sensitive screening for mild cognitive impairment' },
        { term: 'amyloid PET', definition: 'Brain imaging detecting amyloid plaque deposits' },
        { term: 'cholinesterase inhibitor', definition: 'Medication increasing acetylcholine for symptomatic dementia treatment' },
        { term: 'ARIA', definition: 'Amyloid-Related Imaging Abnormalities - edema/hemorrhage with anti-amyloid therapy' },
      ],
      clinicalNotes: 'MoCA more sensitive than MMSE for MCI. Always check B12, TSH. Avoid antipsychotics in DLB. Anti-amyloid therapies require APOE genotyping (ARIA risk with e4).',
    },
    4: {
      level: 4,
      summary: 'Advanced dementia care involves biomarker-confirmed diagnosis, disease-modifying therapy consideration, management of neuropsychiatric symptoms, and coordination of longitudinal care including end-of-life planning.',
      explanation: `**Biomarker-Based Diagnosis (Research Framework):**

*AT(N) Framework:*
- A: Amyloid (PET or CSF)
- T: Tau (PET or CSF p-tau)
- (N): Neurodegeneration (MRI atrophy, FDG-PET, CSF NfL)

*AD Biological Definition:*
- Amyloid positive = AD pathology present
- Clinical syndrome + biomarkers for diagnosis
- Moving toward preclinical detection

**Genetic Considerations:**

*Familial AD (Early-Onset):*
- APP, PSEN1, PSEN2 mutations
- Autosomal dominant
- Consider genetic counseling

*APOE Genotyping:*
- APOE-e4: Increased risk (heterozygote 3x, homozygote 12x)
- APOE-e2: Protective
- Required before anti-amyloid therapy (ARIA risk)

**Disease-Modifying Therapies:**

*Anti-Amyloid Antibodies:*
- Lecanemab: FDA approved (early AD)
  - 27% slowing of decline at 18 months
  - ARIA: 21.5% (e4 higher risk)
  - Requires amyloid PET or CSF confirmation
- Aducanumab: Accelerated approval (controversial)
- Donanemab: Positive phase 3 results

*Patient Selection:*
- MCI due to AD or mild AD dementia
- Confirmed amyloid positivity
- APOE genotyping for risk stratification
- Regular MRI monitoring for ARIA

**Neuropsychiatric Symptoms:**

*Common Symptoms:*
- Apathy (most common)
- Depression
- Anxiety
- Agitation and aggression
- Psychosis (delusions, hallucinations)
- Sleep disturbance

*Management Approach:*
1. Identify and treat underlying causes (pain, infection, medication)
2. Non-pharmacologic interventions first
3. Medications if needed:
   - Depression: SSRIs
   - Agitation: Consider trazodone, buspirone
   - Psychosis: Atypical antipsychotics (black box warning)

**Frontotemporal Dementia Subtypes:**

*Behavioral Variant FTD:*
- Personality change, disinhibition, apathy
- Executive dysfunction
- Preserved memory early
- Gene mutations: C9orf72, MAPT, GRN

*Primary Progressive Aphasia:*
- Semantic variant: Word meaning loss
- Nonfluent variant: Effortful speech
- Logopenic: Word-finding difficulty (often AD)

**Palliative and End-of-Life Care:**
- Early advance care planning
- Goals of care discussions
- Hospice appropriate in advanced disease
- Symptom management focus`,
      keyTerms: [
        { term: 'AT(N) framework', definition: 'Biomarker classification: Amyloid, Tau, Neurodegeneration' },
        { term: 'lecanemab', definition: 'Anti-amyloid monoclonal antibody approved for early Alzheimer\'s' },
        { term: 'C9orf72', definition: 'Most common genetic cause of familial FTD and ALS' },
        { term: 'primary progressive aphasia', definition: 'FTD variants primarily affecting language' },
      ],
      clinicalNotes: 'Biomarker confirmation increasingly standard for AD diagnosis. Anti-amyloid therapy: Confirm amyloid positive, APOE genotype, regular MRI monitoring. FTD: Consider genetics (C9orf72) especially with ALS features.',
    },
    5: {
      level: 5,
      summary: 'Dementia is increasingly understood through protein-based classifications and biomarker staging, enabling precision medicine approaches with disease-modifying therapies targeting specific pathological proteins.',
      explanation: `**Protein-Based Classification:**

*Primary Tauopathies:*
- PSP (4R tau)
- CBD (4R tau)
- Pick's disease (3R tau)
- MAPT mutations (familial FTD)

*Primary Synucleinopathies:*
- DLB
- PD dementia
- MSA (predominantly non-dementia)

*TDP-43 Proteinopathies:*
- Most FTD (non-tau)
- LATE (Limbic-predominant Age-related TDP-43 Encephalopathy)
- ALS with dementia

*Amyloid/Tau (AD):*
- Amyloid drives tau propagation
- Tau better correlates with symptoms
- Sequential progression (Braak staging)

**Biomarker Staging and Trials:**

*Blood-Based Biomarkers:*
- Plasma p-tau181, p-tau217
- Plasma amyloid ratio
- Highly sensitive and specific
- Democratizing diagnosis

*Staging Approaches:*
- A/T staging (early to late)
- NIA-AA Research Framework
- Clinical trials selecting by stage

**Disease-Modifying Therapy Landscape:**

*Anti-Amyloid:*
- Lecanemab, donanemab
- Earlier treatment may be more effective
- Prevention trials ongoing

*Anti-Tau:*
- Multiple antibodies in trials
- ASO approaches
- May complement anti-amyloid

*Other Targets:*
- Inflammation (microglia)
- Synaptic protection
- Mitochondrial function
- Lifestyle interventions (FINGER trial)

**Genetic Therapies:**

*Familial AD:*
- ASOs targeting APP, PSEN
- Gene silencing approaches
- Prevention trials in mutation carriers

*FTD Genetics:*
- C9orf72 ASOs
- GRN replacement/enhancement
- MAPT-targeted approaches

**Precision Medicine:**

*Personalized Risk Assessment:*
- APOE genotype
- Polygenic risk scores
- Lifestyle and vascular risk integration

*Treatment Selection:*
- Biomarker-guided therapy initiation
- ARIA risk stratification
- Genetic subtyping for trials

**Quality and Research:**

*Clinical Care Models:*
- Comprehensive memory centers
- Multidisciplinary teams
- Caregiver inclusion

*Outcome Measures:*
- CDR-SB (Clinical Dementia Rating Sum of Boxes)
- iADRS (integrated AD rating scale)
- Patient-reported outcomes
- Digital biomarkers

*Prevention Trials:*
- A4 Study (preclinical AD)
- DIAN-TU (familial AD)
- FINGER-type multimodal interventions`,
      keyTerms: [
        { term: 'LATE', definition: 'Limbic-predominant Age-related TDP-43 Encephalopathy - newly recognized dementia entity' },
        { term: 'plasma p-tau217', definition: 'Blood-based biomarker highly accurate for AD detection' },
        { term: 'Braak staging', definition: 'Anatomical progression of tau pathology in AD' },
        { term: 'DIAN-TU', definition: 'Dominantly Inherited Alzheimer Network Trial - familial AD prevention' },
      ],
      clinicalNotes: `Advanced concepts:
1. Protein-based classification redefining dementia
2. Blood biomarkers (p-tau217) transforming diagnosis
3. Anti-amyloid therapy: Earlier = better, ARIA monitoring essential
4. LATE (TDP-43) explains some "atypical AD"
5. Genetic testing increasingly important in FTD
6. Prevention trials in at-risk populations ongoing
7. Multimodal lifestyle interventions show promise
8. Caregiver support integral to dementia care`,
    },
  },

  media: [
    {
      id: 'dementia-mri-patterns',
      type: 'image',
      filename: 'dementia_mri_patterns.jpg',
      title: 'MRI Patterns in Dementia Subtypes',
      description: 'AD (hippocampal atrophy), FTD (frontal atrophy), vascular dementia',
    },
    {
      id: 'cognitive-assessment-video',
      type: 'video',
      filename: 'moca_administration.mp4',
      title: 'MoCA Administration',
      description: 'Demonstration of Montreal Cognitive Assessment',
      duration: 600,
    },
  ],

  citations: [
    {
      id: 'aa-criteria-2023',
      type: 'article',
      title: 'Revised criteria for the diagnosis of Alzheimer\'s disease',
      authors: ['NIA-AA Work Group'],
      source: 'Alzheimer\'s & Dementia',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-alzheimers', targetType: 'condition', relationship: 'related', label: 'Alzheimer\'s Disease' },
    { targetId: 'neuro-lewy-body-dementia', targetType: 'condition', relationship: 'related', label: 'Dementia with Lewy Bodies' },
    { targetId: 'neuro-ftd', targetType: 'condition', relationship: 'related', label: 'Frontotemporal Dementia' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'dementia', 'neurodegeneration', 'geriatrics'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'geriatrics', 'psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dementiaContent;
