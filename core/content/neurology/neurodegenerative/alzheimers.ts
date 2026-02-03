/**
 * Alzheimer Disease - In-Depth Neurology Content
 *
 * Comprehensive coverage of Alzheimer disease pathophysiology, diagnosis,
 * biomarkers, pharmacotherapy, and emerging disease-modifying therapies.
 */

import { EducationalContent } from '../../types';

export const alzheimersContent: EducationalContent = {
  id: 'neuro-alzheimers-depth',
  type: 'condition',
  name: 'Alzheimer Disease',
  nameEs: 'Enfermedad de Alzheimer',
  alternateNames: ['AD', 'Alzheimer Dementia', 'Senile Dementia of the Alzheimer Type'],
  hpoId: 'HP:0002511',

  levels: {
    1: {
      level: 1,
      summary:
        'Alzheimer disease is the most common cause of dementia, gradually destroying memory and thinking skills over many years.',
      explanation: `## What Is Alzheimer Disease?

Alzheimer disease is a brain disease that slowly destroys memory, thinking ability, and eventually the ability to carry out simple daily tasks. It is the most common cause of dementia in older adults.

## How It Affects the Brain

- Abnormal proteins build up in the brain over many years
- These proteins damage and kill brain cells
- The brain actually shrinks as cells die
- Memory areas of the brain are affected first

## Stages of Alzheimer Disease

**Early (Mild):**
- Forgetting recent events or conversations
- Losing things more often
- Trouble finding the right words
- Difficulty planning or organizing

**Middle (Moderate):**
- Forgetting personal history and important events
- Getting confused about what day or season it is
- Needing help with daily tasks like dressing
- Personality and behavior changes
- Wandering and getting lost

**Late (Severe):**
- Cannot communicate clearly
- Needs full-time help with all daily activities
- Cannot recognize family members
- Loss of physical abilities (walking, swallowing)

## Risk Factors

- **Age**: Biggest risk factor (risk doubles every 5 years after age 65)
- **Family history**: Having a parent or sibling with Alzheimer raises your risk
- **Genetics**: Certain genes increase risk (especially APOE e4)
- **Heart health**: High blood pressure, diabetes, high cholesterol
- **Head injuries**: Repeated head trauma increases risk

## What Can Help

- Medications can temporarily improve symptoms but do not cure the disease
- Staying mentally and socially active may help slow decline
- Regular exercise benefits brain health
- Managing heart health risk factors is important
- New treatments targeting the brain proteins are being studied`,

      keyTerms: [
        { term: 'Alzheimer disease', definition: 'A brain disease that slowly destroys memory and thinking ability' },
        { term: 'dementia', definition: 'A general term for severe problems with memory, thinking, and daily activities', pronunciation: 'deh-MEN-shah' },
        { term: 'brain cells', definition: 'Tiny building blocks of the brain called neurons' },
      ],
      analogies: [
        'Alzheimer is like a slow-burning fire in the brain - it starts in one area (memory) and gradually spreads to destroy more and more.',
        'The protein buildup in Alzheimer is like plaque clogging pipes - eventually nothing can flow properly.',
        'Memory loss in Alzheimer is like a library where books are being removed from the shelves one by one, starting with the newest.',
      ],
      examples: [
        'A grandmother starts asking the same questions repeatedly and forgetting appointments she just made.',
        'A retired professor can no longer manage his finances or remember how to drive to familiar places.',
        'A woman in the late stages no longer recognizes her own children and needs help with all daily activities.',
      ],
      patientCounselingPoints: [
        'Alzheimer disease is not a normal part of aging - if you notice memory problems, see your doctor.',
        'Early diagnosis allows for better planning and access to treatments that may help symptoms.',
        'Caregivers need support too - look into local Alzheimer Association resources.',
        'Stay physically active, socially engaged, and manage heart health to support brain health.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Alzheimer disease is characterized by progressive cortical atrophy with amyloid plaques and neurofibrillary tangles, presenting as insidious memory loss followed by language, visuospatial, and executive dysfunction.',
      explanation: `## Epidemiology

- Most common neurodegenerative disease; 60-80% of dementia cases
- Prevalence: ~10% over age 65; ~33% over age 85
- 6+ million Americans currently affected
- Leading cause of disability and dependence in elderly

## Pathology

**Amyloid Plaques:**
- Extracellular deposits of beta-amyloid (Abeta) protein
- Abeta42 is the most pathogenic form
- Produced by cleavage of amyloid precursor protein (APP) by beta and gamma secretases
- Accumulate 15-20 years before symptoms

**Neurofibrillary Tangles (NFTs):**
- Intracellular aggregates of hyperphosphorylated tau protein
- Tau normally stabilizes microtubules in neurons
- When hyperphosphorylated, tau detaches and forms tangles
- Correlates better with cognitive decline than amyloid burden

**Neuron Loss and Atrophy:**
- Begins in entorhinal cortex and hippocampus (memory)
- Spreads to temporal, parietal, then frontal cortices
- Cholinergic neurons in nucleus basalis of Meynert especially vulnerable

## Clinical Presentation

**Typical (Amnestic):**
- Insidious onset, gradual progression
- Episodic memory loss (cannot form new memories)
- Preserved remote memories early on
- Word-finding difficulty (anomia)
- Visuospatial dysfunction (getting lost, trouble with construction)
- Executive dysfunction (planning, judgment)

**Atypical Variants:**
- *Logopenic variant*: Progressive aphasia with word-finding pauses
- *Posterior cortical atrophy*: Visual processing deficits (Benson syndrome)
- *Frontal variant*: Behavioral changes, executive dysfunction
- *Early-onset AD* (<65): More likely atypical, faster progression

## Diagnosis

**Clinical Assessment:**
- Detailed cognitive testing: MoCA, MMSE, neuropsychological battery
- Functional assessment: ADLs and IADLs
- Informant history essential (patients may lack insight)

**Imaging:**
- MRI: Medial temporal lobe atrophy (hippocampal volume loss)
- FDG-PET: Temporoparietal hypometabolism
- Amyloid PET: Detects amyloid plaques (positive 15+ years before symptoms)
- Tau PET: Correlates with clinical severity

**Biomarkers (AT(N) Framework):**
- A: Amyloid (CSF Abeta42 low, amyloid PET positive)
- T: Tau (CSF phospho-tau elevated, tau PET positive)
- N: Neurodegeneration (MRI atrophy, FDG-PET, CSF total tau)

## Staging

- **Preclinical**: Biomarker positive, no symptoms
- **MCI due to AD**: Mild cognitive impairment with positive biomarkers
- **Dementia due to AD**: Functional impairment with positive biomarkers`,

      keyTerms: [
        { term: 'amyloid plaques', definition: 'Clumps of beta-amyloid protein that build up between brain cells in Alzheimer disease' },
        { term: 'neurofibrillary tangles', definition: 'Twisted fibers of tau protein inside brain cells that interfere with cell function' },
        { term: 'hippocampus', definition: 'Brain structure essential for forming new memories; affected early in Alzheimer', pronunciation: 'hip-oh-KAM-pus' },
        { term: 'MCI', definition: 'Mild Cognitive Impairment - memory problems beyond normal aging but not yet dementia' },
        { term: 'APOE e4', definition: 'A gene variant that increases risk of developing Alzheimer disease' },
      ],
      analogies: [
        'Amyloid plaques are like gum on a circuit board - they interfere with connections between brain cells.',
        'Tau tangles are like a highway system where all the lane markers have been erased - traffic (signals) cannot flow properly.',
        'The spread of Alzheimer through the brain follows a pattern like a wildfire - it starts in one region and predictably spreads to connected areas.',
      ],
      examples: [
        'A 72-year-old with 3 years of progressive memory loss has hippocampal atrophy on MRI and positive amyloid PET - diagnosed with Alzheimer dementia.',
        'A 68-year-old with mild forgetfulness scores 22/30 on MoCA and has elevated CSF phospho-tau - diagnosed with MCI due to AD.',
        'A 58-year-old presents with progressive difficulty reading and recognizing faces - posterior cortical atrophy variant of AD.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Alzheimer disease diagnosis relies on the AT(N) biomarker framework, with treatment including cholinesterase inhibitors, memantine, and emerging anti-amyloid monoclonal antibodies for early-stage disease.',
      explanation: `## Pathophysiology in Detail

**Amyloid Cascade Hypothesis:**
1. APP (chromosome 21) cleaved by beta-secretase (BACE1) then gamma-secretase
2. Produces Abeta40 (more common) and Abeta42 (more pathogenic, aggregation-prone)
3. Abeta42 monomers aggregate into oligomers, protofibrils, and fibrils
4. Oligomers are most toxic form - disrupt synapses
5. Plaques may be a sink for toxic oligomers
6. Amyloid triggers tau phosphorylation and spreading

**Tau Pathology (Braak Staging):**
- Stage I-II: Entorhinal cortex (transentorhinal)
- Stage III-IV: Hippocampus and limbic structures
- Stage V-VI: Neocortex (widespread)
- Tau spreading follows neural connectivity (prion-like propagation)

**Cholinergic Hypothesis:**
- Loss of cholinergic neurons in nucleus basalis of Meynert
- Acetylcholine deficit correlates with cognitive symptoms
- Basis for cholinesterase inhibitor therapy

**Neuroinflammation:**
- Microglial activation around plaques
- Complement activation
- TREM2 gene variants increase risk (impair microglial phagocytosis)
- Astrocyte reactivity

## Genetics

**Early-Onset AD (1-5% of cases):**
- APP mutations (chromosome 21): Autosomal dominant
- PSEN1 (chromosome 14): Most common genetic cause of early-onset AD
- PSEN2 (chromosome 1): Rare, variable penetrance
- Down syndrome (trisomy 21): Extra copy of APP; virtually all develop AD pathology by 40

**Late-Onset AD (Sporadic):**
- APOE e4: Most significant genetic risk factor
  - Heterozygous (e3/e4): 3x risk
  - Homozygous (e4/e4): 12x risk
  - APOE e2: Protective
- Additional risk loci: BIN1, CLU, PICALM, CR1, TREM2, SORL1

## Pharmacotherapy

**Cholinesterase Inhibitors (Mild-Moderate AD):**
- Donepezil (Aricept): 5-10 mg daily, once daily dosing
- Rivastigmine (Exelon): Oral or transdermal patch; also inhibits butyrylcholinesterase
- Galantamine (Razadyne): Also modulates nicotinic receptors
- Side effects: GI (nausea, diarrhea, anorexia), bradycardia, vivid dreams
- Modest symptomatic benefit; does not alter disease progression

**Memantine (Moderate-Severe AD):**
- NMDA receptor antagonist
- Dose: Titrate to 10 mg BID or 28 mg ER daily
- Can be combined with cholinesterase inhibitor
- Reduces excitotoxicity from glutamate excess
- Modest benefit in later stages

**Anti-Amyloid Monoclonal Antibodies:**
- *Lecanemab (Leqembi)*: Anti-Abeta protofibril antibody
  - CLARITY-AD: 27% slowing of cognitive decline over 18 months
  - FDA approved for early AD (MCI or mild dementia with confirmed amyloid)
  - IV infusion every 2 weeks
  - ARIA monitoring required (see below)
- *Donanemab*: Anti-Abeta plaque antibody
  - TRAILBLAZER-ALZ 2: 35% slowing in intermediate tau subgroup
  - Treatment to amyloid clearance then stop
  - FDA approved for early AD
- *Aducanumab (Aduhelm)*: Controversial accelerated approval, limited adoption

**ARIA (Amyloid-Related Imaging Abnormalities):**
- ARIA-E: Edema/effusion (vasogenic edema)
- ARIA-H: Hemorrhage (microhemorrhages, superficial siderosis)
- Risk factors: APOE e4 homozygosity, anticoagulation use
- Monitoring: Serial MRI (baseline, then regular intervals)
- Most cases asymptomatic; severe cases may require treatment interruption

## Non-Pharmacological Management

- Cognitive stimulation therapy
- Physical exercise (30 min/day, 5 days/week)
- Music therapy, art therapy
- Caregiver education and support
- Safety measures: Driving evaluation, wandering prevention, medication management
- Advance directives and legal planning early in disease`,

      keyTerms: [
        { term: 'amyloid cascade hypothesis', definition: 'Theory that accumulation of beta-amyloid protein initiates the pathological cascade in Alzheimer disease' },
        { term: 'Braak staging', definition: 'System describing the anatomical progression of tau pathology through the brain in AD' },
        { term: 'cholinesterase inhibitor', definition: 'Drug that increases acetylcholine by blocking its breakdown enzyme; treats AD symptoms' },
        { term: 'lecanemab', definition: 'Anti-amyloid antibody that slows cognitive decline in early Alzheimer disease' },
        { term: 'ARIA', definition: 'Amyloid-Related Imaging Abnormalities - brain swelling or bleeding seen on MRI during anti-amyloid therapy' },
        { term: 'APOE e4', definition: 'Apolipoprotein E epsilon 4 allele; strongest genetic risk factor for late-onset Alzheimer disease' },
      ],
      clinicalNotes:
        'Lecanemab and donanemab represent the first disease-modifying therapies for AD. Candidates must have confirmed amyloid (PET or CSF) and early-stage disease (MCI or mild dementia). APOE genotyping is recommended before starting anti-amyloid therapy due to ARIA risk. Serial MRI monitoring is mandatory during treatment.',
    },

    4: {
      level: 4,
      summary:
        'Advanced Alzheimer management requires integration of fluid and imaging biomarkers for precision diagnosis, understanding of ARIA pathophysiology, and comprehensive care planning across disease stages.',
      explanation: `## Advanced Biomarker Interpretation

**CSF Biomarkers:**
- Abeta42: Decreased (sequestered in plaques); Abeta42/40 ratio improves specificity
- Phospho-tau 181 (p-tau181): Elevated; reflects tangle pathology
- Phospho-tau 217 (p-tau217): Higher sensitivity/specificity than p-tau181
- Total tau (t-tau): Elevated; reflects neurodegeneration (less specific)
- Neurofilament light (NfL): Elevated; non-specific neurodegeneration marker

**Blood-Based Biomarkers (Emerging):**
- Plasma p-tau217: Best-performing blood biomarker
  - Sensitivity/specificity >90% for amyloid positivity
  - Commercially available (PrecivityAD2)
  - May reduce need for PET or lumbar puncture
- Plasma p-tau181: Good performance, slightly less accurate
- Plasma Abeta42/40 ratio: Moderate accuracy
- Plasma GFAP: Reflects astrocyte activation

**Amyloid PET:**
- Tracers: Florbetapir (Amyvid), Florbetaben (Neuraceq), Flutemetamol (Vizamyl)
- Positive: Diffuse cortical binding
- Appropriate use criteria: Atypical presentation, young onset, uncertain diagnosis
- Now required to confirm amyloid before anti-amyloid therapy

**Tau PET:**
- Tracer: Flortaucipir (Tauvid) - FDA approved
- Binding pattern correlates with Braak stage and clinical severity
- Helps differentiate AD from non-AD tauopathies
- Useful for prognosis and clinical trial enrollment

## ARIA Management in Detail

**ARIA-E (Edema):**
- Incidence: 12-35% with anti-amyloid antibodies
- Usually occurs in first 3-6 months
- Most cases (>75%) asymptomatic, detected on surveillance MRI
- Symptoms: Headache, confusion, visual changes, seizures (rare)
- Management: Hold drug, repeat MRI in 1-3 months, resume if resolved

**ARIA-H (Hemorrhage):**
- Microhemorrhages: Small foci on GRE/SWI
- Superficial siderosis: Linear hemorrhage along cortical surface
- APOE e4/e4: Highest risk (~35% ARIA-E with lecanemab)
- Pre-treatment MRI: Exclude >4 microhemorrhages or superficial siderosis

**Risk Mitigation:**
- APOE genotyping before treatment (inform risk discussion)
- Baseline MRI with SWI sequence
- Monitor MRI: Before 5th, 7th, and 14th infusions (lecanemab protocol)
- Avoid concurrent anticoagulation if possible
- Hold for symptomatic ARIA; dose adjustment protocols vary by drug

## Differential Diagnosis of Dementia

**Key Differentials:**
- *Lewy Body Dementia*: Visual hallucinations, parkinsonism, REM sleep behavior disorder, fluctuating cognition
- *Frontotemporal Dementia*: Behavioral changes (bvFTD) or language variants (PPA) earlier than memory loss; younger onset
- *Vascular Dementia*: Stepwise decline, vascular risk factors, strategic infarcts or white matter disease
- *Normal Pressure Hydrocephalus*: Triad of gait apraxia, urinary incontinence, dementia (wet, wobbly, wacky)
- *Chronic Traumatic Encephalopathy*: History of repetitive head trauma

**Distinguishing Features:**
- AD: Amnestic, temporoparietal atrophy, positive amyloid/tau biomarkers
- Neuropsychological testing pattern helps differentiate
- Always evaluate for reversible causes: B12, thyroid, depression, medications

## Comprehensive Care Planning

**Early Stage:**
- Cognitive rehabilitation and compensatory strategies
- Driving assessment and planning
- Financial and legal planning (power of attorney, advance directives)
- Clinical trial eligibility assessment

**Middle Stage:**
- In-home safety assessment
- Structured activities and routines
- Behavioral symptom management (avoid antipsychotics if possible)
- Caregiver respite and support groups

**Late Stage:**
- Palliative care and comfort-focused goals
- Dysphagia management and aspiration prevention
- Skin care and contracture prevention
- Hospice referral when appropriate`,

      keyTerms: [
        { term: 'p-tau217', definition: 'Phosphorylated tau 217 - emerging as most accurate blood biomarker for Alzheimer disease' },
        { term: 'ARIA-E', definition: 'Amyloid-Related Imaging Abnormality - Edema: brain swelling during anti-amyloid treatment' },
        { term: 'Braak staging', definition: 'Neuropathological staging of tau pathology progression from entorhinal cortex to neocortex' },
        { term: 'flortaucipir', definition: 'FDA-approved tau PET tracer for imaging neurofibrillary tangle burden in vivo' },
        { term: 'normal pressure hydrocephalus', definition: 'Potentially reversible dementia from impaired CSF absorption causing gait, cognition, and urinary symptoms' },
      ],
      clinicalNotes:
        'Plasma p-tau217 is transforming AD diagnosis by enabling blood-based screening before PET or lumbar puncture. APOE genotyping before anti-amyloid therapy is essential for ARIA risk counseling. Always exclude reversible causes of dementia (B12, TSH, depression, medications) before attributing to AD. Tau PET is the best in vivo correlate of clinical severity.',
    },

    5: {
      level: 5,
      summary:
        'Frontier Alzheimer research focuses on combination disease-modifying therapies, tau-targeting agents, neuroinflammation modulators, digital biomarkers, and precision medicine approaches guided by genetic and proteomic profiling.',
      explanation: `## Disease-Modifying Therapy Landscape

**Anti-Amyloid Antibodies - Current State:**
- Lecanemab: Targets soluble protofibrils; CLARITY-AD showed 27% slowing
- Donanemab: Targets N3pG amyloid; TRAILBLAZER-ALZ 2 showed 35% slowing in intermediate tau group
- Clinical significance debate: ~0.45 CDR-SB point difference over 18 months
- Combination approach: Anti-amyloid + anti-tau may be necessary
- Patient selection: Earliest stages benefit most; amyloid + intermediate tau optimal for donanemab

**Anti-Tau Therapies (Pipeline):**
- Tau immunotherapy: Semorinemab, zagotenemab (targeting extracellular tau spreading)
- Tau aggregation inhibitors: Methylene blue derivatives
- ASO (antisense oligonucleotides): MAPT-targeting ASOs reduce tau production
  - IONIS-MAPTRx: Intrathecal delivery, Phase 1/2
- Tau PET-guided therapy: Treat only when tau begins spreading

**BACE Inhibitors:**
- Multiple failures (verubecestat, atabecestat, lanabecestat)
- Cognitive worsening observed (BACE processes other substrates)
- Concept not dead: Earlier intervention or lower doses being explored

**Neuroinflammation Targets:**
- TREM2 agonists: Enhance microglial clearance of amyloid
- CD33 antagonists: Reduce microglial inhibition
- Complement inhibitors: Reduce synapse elimination
- AL002 (anti-TREM2): Phase 2 in early AD

**Other Emerging Approaches:**
- GLP-1 receptor agonists (semaglutide): Neuroprotective signal in diabetes trials; AD trials initiated
- Gene therapy: AAV-delivered anti-amyloid antibodies (intrathecal)
- Focused ultrasound: BBB opening for drug delivery
- Stem cell therapy: Limited data, proof-of-concept stage

## Precision Medicine in AD

**Genetic Risk Stratification:**
- Polygenic risk scores (PRS): Combine multiple risk loci
- APOE-stratified treatment: e4 homozygotes may need different ARIA monitoring or dosing
- Protective variants: APOE-Christchurch (R136S) - resistance to autosomal dominant AD
- APOE e4-targeting therapies under development (gene editing, antisense)

**Proteomic and Metabolomic Biomarkers:**
- Multi-panel blood tests combining p-tau217, GFAP, NfL, Abeta42/40
- SOMAscan proteomics: Identify novel biomarkers
- Metabolomic signatures: Bile acid and lipid metabolism alterations

**Digital Biomarkers:**
- Smartphone-based cognitive assessments (continuous monitoring)
- Gait analysis via wearable sensors
- Speech pattern analysis (AI-based detection)
- Sleep architecture changes (reduced slow-wave sleep predicts amyloid accumulation)
- Passive monitoring: Keystroke dynamics, GPS patterns

## Prevention Trials

**Primary Prevention:**
- A4 Study (Anti-Amyloid Treatment in Asymptomatic Alzheimer): Solanezumab in preclinical AD
  - Completed: No significant cognitive benefit
- AHEAD 3-45: Lecanemab in preclinical AD (amyloid-positive, no symptoms)
- API (Alzheimer's Prevention Initiative): PSEN1 E280A carriers in Colombia
- DIAN-TU: Autosomal dominant AD mutation carriers

**Lifestyle and Risk Factor Modification:**
- Lancet Commission 2024: 14 modifiable risk factors account for ~45% of dementia
  - Education, hearing loss, TBI, hypertension, alcohol >21 units/week, obesity
  - Smoking, depression, social isolation, physical inactivity, air pollution
  - Diabetes, unhealthy diet, vision loss
- FINGER trial: Multi-domain lifestyle intervention showed cognitive benefit
- US POINTER: Replicating FINGER in American population
- SPRINT MIND: Intensive BP control (<120) reduced MCI risk by 19%

## Research Controversies

**Amyloid Hypothesis Debate:**
- Amyloid necessary but not sufficient for AD
- Amyloid removal does not reverse established damage
- Tau and inflammation may be more important therapeutic targets
- Prion-like spreading of both amyloid and tau
- Amyloid as initiator vs bystander vs risk factor

**Clinical Trial Design:**
- Moving to prevention trials (preclinical population)
- Adaptive platform trials (DIAN-TU, GBR)
- Surrogate endpoints: Biomarker changes vs clinical outcomes
- Diversity and inclusion: Historically underrepresented populations must be included
- Digital endpoints: Ecological momentary assessment, wearable data

**Access and Health Equity:**
- Anti-amyloid therapies: $26,000+/year; requires PET or CSF testing, infusion centers, MRI monitoring
- Disparities: Black and Hispanic Americans have 1.5-2x AD risk but lower access to specialist care
- Blood-based biomarkers may democratize diagnosis
- Community health worker models for underserved populations`,

      keyTerms: [
        { term: 'protofibrils', definition: 'Intermediate-sized aggregates of amyloid-beta, target of lecanemab, considered highly neurotoxic' },
        { term: 'antisense oligonucleotide', definition: 'Short DNA/RNA strand that reduces production of a target protein by binding its mRNA' },
        { term: 'TREM2', definition: 'Triggering Receptor Expressed on Myeloid cells 2 - microglial receptor critical for amyloid clearance' },
        { term: 'polygenic risk score', definition: 'Combined genetic risk from many common variants, predicting AD susceptibility' },
        { term: 'FINGER trial', definition: 'Finnish Geriatric Intervention Study showing multi-domain lifestyle intervention benefits cognition' },
        { term: 'digital biomarker', definition: 'Measurable physiological or behavioral data collected from digital devices indicating disease status' },
      ],
      clinicalNotes: `Alzheimer disease practice pearls:
1. Plasma p-tau217 is rapidly becoming the first-line screening biomarker
2. Anti-amyloid therapy (lecanemab, donanemab) requires confirmed amyloid and early-stage disease
3. APOE genotype informs ARIA risk: e4/e4 patients need enhanced monitoring
4. Combination therapy (anti-amyloid + anti-tau) is the likely future
5. 14 modifiable risk factors account for ~45% of dementia risk (Lancet 2024)
6. Blood-based biomarkers will democratize AD diagnosis and reduce health disparities
7. Always exclude reversible causes before attributing to AD
8. Early legal and advance planning is critical once diagnosis is established
9. Caregiver support is as important as patient treatment`,
    },
  },

  media: [
    {
      id: 'ad-pathology-diagram',
      type: 'diagram',
      filename: 'alzheimer_plaques_tangles.svg',
      title: 'Amyloid Plaques and Neurofibrillary Tangles',
      description: 'Illustration of extracellular amyloid plaques and intracellular tau tangles in Alzheimer disease',
    },
    {
      id: 'ad-brain-atrophy',
      type: 'image',
      filename: 'alzheimer_brain_atrophy_mri.jpg',
      title: 'Brain Atrophy in Alzheimer Disease',
      description: 'MRI comparison showing hippocampal atrophy and ventricular enlargement in AD vs normal aging',
    },
  ],

  citations: [
    {
      id: 'jack-atn-framework-2018',
      type: 'article',
      title: 'NIA-AA Research Framework: Toward a biological definition of Alzheimers disease',
      authors: ['Jack CR', 'Bennett DA', 'Blennow K'],
      source: 'Alzheimers and Dementia',
      url: 'https://doi.org/10.1016/j.jalz.2018.02.018',
    },
    {
      id: 'van-dyck-lecanemab-2023',
      type: 'article',
      title: 'Lecanemab in Early Alzheimers Disease',
      authors: ['van Dyck CH', 'Swanson CJ', 'Aisen P'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2212948',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-parkinsons-depth', targetType: 'condition', relationship: 'related', label: 'Parkinson Disease' },
    { targetId: 'neuro-hemorrhagic-stroke-depth', targetType: 'condition', relationship: 'related', label: 'Hemorrhagic Stroke (CAA overlap)' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'neurodegenerative', 'dementia', 'cognitive', 'geriatrics'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'psychiatry', 'geriatrics'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default alzheimersContent;
