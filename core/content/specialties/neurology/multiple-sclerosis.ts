/**
 * Multiple Sclerosis - Comprehensive Neurology Content
 *
 * Complete coverage of MS including pathophysiology, subtypes,
 * diagnosis, disease-modifying therapies, and symptom management.
 */

import { EducationalContent } from '../../types';

export const multipleSclerosisContent: EducationalContent = {
  id: 'neuro-multiple-sclerosis',
  type: 'condition',
  name: 'Multiple Sclerosis',
  alternateNames: ['MS', 'Disseminated Sclerosis'],
  hpoId: 'HP:0002180',

  levels: {
    1: {
      level: 1,
      summary: 'Multiple sclerosis (MS) is a disease where the body\'s immune system attacks the protective covering of nerve fibers, causing problems with vision, movement, and sensation.',
      explanation: `Multiple sclerosis is a disease of the brain and spinal cord (the central nervous system). In MS, the immune system mistakenly attacks the protective coating around nerve fibers.

**What Happens:**
- Nerve fibers are covered by a protective layer called myelin (like insulation on a wire)
- In MS, the immune system attacks this myelin
- This causes "short circuits" in the nervous system
- Symptoms depend on which nerves are affected

**Common Symptoms:**
- Vision problems (blurry vision, double vision, eye pain)
- Numbness or tingling in limbs
- Weakness in arms or legs
- Balance problems
- Fatigue (very common)
- Difficulty thinking or concentrating

**Types of MS:**
- *Relapsing-Remitting*: Symptoms come and go in "attacks"
- *Progressive*: Symptoms gradually worsen over time

**Who Gets MS:**
- Usually starts between ages 20-40
- More common in women
- More common in northern regions
- Not directly inherited but some genetic risk

**Important Points:**
- MS is not contagious
- Many effective treatments are available
- Many people with MS live full, active lives
- Early treatment is important`,
      keyTerms: [
        { term: 'multiple sclerosis', definition: 'A disease where the immune system attacks the protective coating of nerves' },
        { term: 'myelin', definition: 'The protective covering around nerve fibers, like insulation on a wire', pronunciation: 'MY-uh-lin' },
        { term: 'relapse', definition: 'A flare-up of MS symptoms lasting at least 24 hours' },
      ],
      analogies: [
        'Myelin is like the plastic coating on electrical wires. When it\'s damaged, the signals don\'t travel properly.',
        'MS relapses are like electrical shorts - they happen when the insulation (myelin) is damaged.',
      ],
      examples: [
        'A young woman notices blurry vision in one eye and numbness in her hand that comes and goes over weeks - these could be early signs of MS.',
        'Someone experiences weakness in their legs during a flare-up, but it improves after treatment with steroids.',
      ],
    },
    2: {
      level: 2,
      summary: 'Multiple sclerosis is an autoimmune demyelinating disease of the CNS characterized by inflammatory lesions disseminated in time and space, presenting with relapsing or progressive courses.',
      explanation: `**Pathophysiology:**
- Autoimmune attack on CNS myelin
- T cells and B cells involved
- Blood-brain barrier breakdown
- Demyelination, axonal damage, gliosis
- "Plaques" form in white matter

**Clinical Subtypes:**

*Relapsing-Remitting MS (RRMS) - 85%:*
- Discrete attacks (relapses) with recovery
- Stable between attacks
- May convert to secondary progressive

*Secondary Progressive MS (SPMS):*
- Follows RRMS
- Gradual worsening with/without relapses
- Typically develops after 10-20 years

*Primary Progressive MS (PPMS) - 15%:*
- Gradual progression from onset
- No distinct relapses
- Equal gender distribution
- Older age at onset

**Common Presentations:**

*Optic Neuritis:*
- Unilateral vision loss
- Pain with eye movement
- Central scotoma
- Often first MS presentation

*Transverse Myelitis:*
- Spinal cord inflammation
- Sensory level
- Weakness, bowel/bladder dysfunction

*Brainstem Syndromes:*
- Internuclear ophthalmoplegia (INO)
- Diplopia, vertigo
- Facial numbness

*Sensory Symptoms:*
- Numbness, tingling
- Lhermitte's sign (electric sensation down spine with neck flexion)

**Diagnosis:**

*McDonald Criteria (2017):*
- Dissemination in space (DIS): Lesions in ≥2 CNS areas
- Dissemination in time (DIT): New lesion on follow-up MRI OR simultaneous enhancing + non-enhancing lesions
- Exclude alternative diagnoses

*MRI Findings:*
- T2/FLAIR hyperintense lesions
- Periventricular, juxtacortical, infratentorial, spinal cord
- "Dawson's fingers" (periventricular)
- Gadolinium enhancement = acute inflammation

*CSF:*
- Oligoclonal bands (>90% of MS)
- Elevated IgG index
- Normal or mildly elevated protein`,
      keyTerms: [
        { term: 'demyelination', definition: 'Loss of the myelin sheath around nerve fibers' },
        { term: 'optic neuritis', definition: 'Inflammation of the optic nerve causing vision loss and eye pain' },
        { term: 'dissemination in time', definition: 'Evidence of lesions developing at different times' },
        { term: 'oligoclonal bands', definition: 'Antibodies in CSF supporting MS diagnosis' },
      ],
      analogies: [
        'Dissemination in space and time is like having crimes in different locations at different times - it establishes a pattern.',
      ],
    },
    3: {
      level: 3,
      summary: 'MS treatment involves acute relapse management with corticosteroids and disease-modifying therapies (DMTs) categorized by efficacy, with escalation based on breakthrough disease activity.',
      explanation: `**Acute Relapse Treatment:**

*Corticosteroids:*
- IV methylprednisolone 1g daily x 3-5 days
- Hastens recovery, doesn't affect long-term outcome
- Oral equivalent (prednisone 1250mg) may be alternative
- Not needed for mild sensory relapses

*Plasmapheresis:*
- For steroid-refractory severe relapses
- 5-7 exchanges
- Especially useful for severe myelitis

**Disease-Modifying Therapies:**

*Platform/Moderate Efficacy:*
- Interferons (beta-1a, beta-1b)
- Glatiramer acetate
- Teriflunomide
- Dimethyl fumarate
- ~30% reduction in relapse rate

*High Efficacy:*
- Natalizumab: Alpha-4 integrin antibody (PML risk)
- Fingolimod: S1P receptor modulator
- Ocrelizumab: Anti-CD20 (RRMS and PPMS)
- Ofatumumab: Anti-CD20 (subcutaneous)
- Alemtuzumab: Anti-CD52 (significant risks)
- Cladribine: Oral, pulsed dosing

*Approved for PPMS:*
- Ocrelizumab (only DMT for PPMS)

**Treatment Strategy:**

*Treat-to-Target:*
- Goal: No evidence of disease activity (NEDA)
- NEDA-3: No relapses, no progression, no new MRI lesions
- NEDA-4: Adds brain volume loss

*Escalation vs Early Intensive:*
- Traditional: Start moderate efficacy, escalate if needed
- Early intensive: Start high efficacy in aggressive disease
- Consider patient factors, risk tolerance

**Monitoring:**
- MRI brain (and spinal cord if indicated) every 6-12 months
- Clinical assessments
- JC virus antibody (natalizumab)
- Labs as required by specific DMT

**Symptom Management:**

*Fatigue:*
- Exercise, energy conservation
- Amantadine, modafinil

*Spasticity:*
- Baclofen, tizanidine
- Botulinum toxin for focal spasticity
- Intrathecal baclofen for severe cases

*Bladder:*
- Anticholinergics for urgency
- Intermittent catheterization if needed

*Pain:*
- Neuropathic pain meds (gabapentin, pregabalin)
- Trigeminal neuralgia: Carbamazepine

*Walking/Mobility:*
- Physical therapy
- Dalfampridine (improves walking speed in some)`,
      keyTerms: [
        { term: 'disease-modifying therapy', definition: 'Treatment that reduces MS relapses and disease progression' },
        { term: 'NEDA', definition: 'No Evidence of Disease Activity - treatment goal in MS' },
        { term: 'natalizumab', definition: 'High-efficacy MS therapy targeting alpha-4 integrin' },
        { term: 'PML', definition: 'Progressive Multifocal Leukoencephalopathy - rare brain infection risk with some MS therapies' },
      ],
      clinicalNotes: 'High-efficacy DMTs increasingly used early. Monitor JCV antibody with natalizumab. Ocrelizumab is only DMT for PPMS. Treat-to-target approach (NEDA) guides therapy.',
    },
    4: {
      level: 4,
      summary: 'Advanced MS management involves personalized DMT selection based on efficacy, safety, and patient factors, with recognition of emerging biomarkers and distinction from MS mimics.',
      explanation: `**DMT Selection Factors:**

*Efficacy Considerations:*
- Baseline disease activity
- Prognostic factors (age, MRI burden, brainstem involvement)
- Prior treatment response
- Early vs established disease

*Safety/Tolerability:*
- PML risk (natalizumab, fingolimod, dimethyl fumarate)
- Infection risk (anti-CD20 therapies)
- Autoimmunity (alemtuzumab)
- Cardiac effects (fingolimod first dose)
- Pregnancy considerations

*Patient Factors:*
- Administration route preference
- Monitoring burden tolerance
- Family planning
- Comorbidities

**Progressive MS Treatment:**

*SPMS:*
- Siponimod: S1P modulator for active SPMS
- Anti-CD20 therapies for active SPMS
- Limited options for non-active progressive

*PPMS:*
- Ocrelizumab: 24% reduction in progression
- Earlier, more active disease benefits most
- Symptomatic management remains crucial

**MS Mimics and Differential:**

*Neuromyelitis Optica Spectrum Disorder (NMOSD):*
- AQP4 antibody positive
- Severe optic neuritis, longitudinally extensive transverse myelitis
- Area postrema syndrome
- Different treatment (rituximab, eculizumab, satralizumab)
- MS DMTs may worsen

*MOG Antibody Disease:*
- MOG-IgG positive
- Optic neuritis, ADEM-like presentation
- Often monophasic or relapsing
- Treatment differs from MS

*CNS Vasculitis:*
- Headache, encephalopathy, strokes
- Angiography, biopsy for diagnosis

*Neurosarcoidosis:*
- Leptomeningeal enhancement
- Systemic involvement
- Biopsy for diagnosis

**Biomarkers:**

*Neurofilament Light (NfL):*
- Marker of neuroaxonal damage
- Serum levels correlate with activity
- May guide treatment decisions
- Emerging clinical utility

*Brain Atrophy:*
- Accelerated in MS
- Measured on serial MRI
- Included in NEDA-4
- Reflects neurodegeneration

**Special Populations:**

*Pregnancy:*
- Most DMTs discontinued
- Some continued if high activity (natalizumab, anti-CD20)
- Postpartum relapse risk
- Breastfeeding considerations

*Pediatric MS:*
- Higher relapse rate
- More inflammatory
- Treatment options evolving
- Fingolimod FDA-approved 10+

*Radiologically Isolated Syndrome:*
- Incidental MS-like lesions
- High conversion risk
- Consider treatment in some`,
      keyTerms: [
        { term: 'NMOSD', definition: 'Neuromyelitis optica spectrum disorder - MS mimic requiring different treatment' },
        { term: 'AQP4', definition: 'Aquaporin-4 - antibody target in NMOSD' },
        { term: 'neurofilament light', definition: 'Biomarker of neuroaxonal damage in MS' },
        { term: 'siponimod', definition: 'S1P modulator approved for active SPMS' },
      ],
      clinicalNotes: 'Check AQP4 and MOG antibodies if atypical features. NfL emerging as monitoring biomarker. Consider early high-efficacy therapy for active disease. NMOSD treatments differ from MS - don\'t use MS DMTs.',
    },
    5: {
      level: 5,
      summary: 'MS pathogenesis involves complex immune mechanisms including B cells, CNS-compartmentalized inflammation, and progressive neurodegeneration, driving development of remyelinating and neuroprotective strategies.',
      explanation: `**Advanced Immunopathology:**

*B Cell Role:*
- Antigen presentation to T cells
- Antibody production (oligoclonal bands)
- Cytokine production
- Explains anti-CD20 efficacy
- Meningeal B cell follicles in progressive MS

*CNS-Compartmentalized Inflammation:*
- Chronic inflammation behind closed BBB
- Meningeal inflammation drives cortical pathology
- Slowly expanding lesions
- Less responsive to peripherally acting DMTs

*Smoldering Lesions:*
- Iron rim lesions on 7T MRI
- Chronic active inflammation
- Associated with progression
- Potential treatment target

**Progressive MS Pathophysiology:**

*Mechanisms:*
- Oxidative stress
- Mitochondrial dysfunction
- Iron accumulation
- Exhausted remyelination capacity
- Age-related immune changes

*Therapeutic Challenges:*
- Blood-brain barrier limits drug access
- Compartmentalized inflammation
- Neurodegeneration vs inflammation

**Emerging Therapies:**

*Bruton's Tyrosine Kinase (BTK) Inhibitors:*
- CNS-penetrant
- Target both B cells and microglia
- Multiple phase 3 trials
- Tolebrutinib, fenebrutinib, evobrutinib

*Remyelination Strategies:*
- Clemastine (antihistamine, remyelinating effects)
- Anti-LINGO-1 (opicinumab)
- Autologous stem cell transplant

*Neuroprotection:*
- Simvastatin (PPMS trials)
- Ibudilast
- Alpha-lipoic acid
- Biotin (high-dose)

**Autologous HSCT:**
- High-intensity chemotherapy + stem cell rescue
- High efficacy in selected patients
- Aggressive RRMS with failed DMTs
- Significant risks (mortality ~1%)
- MIST trial positive results

**Precision Medicine:**

*Biomarker-Guided Treatment:*
- NfL for monitoring
- Kappa free light chains
- MRI volumetrics
- Machine learning for prognosis

*Genetic Factors:*
- HLA-DRB1*15:01 major risk allele
- >200 other variants identified
- Pharmacogenomics emerging

**Clinical Trials Landscape:**

*Active Areas:*
- BTK inhibitors (progressive MS)
- Remyelinating agents
- Neuroprotective strategies
- Combination therapies
- Biomarker-defined subgroups

*Trial Design Evolution:*
- Composite endpoints
- Patient-reported outcomes
- Digital biomarkers
- Real-world evidence

**Quality of Care:**

*Comprehensive MS Care:*
- Multidisciplinary approach
- Neuropsychology integration
- Rehabilitation services
- Mental health support
- Career and family planning

*Outcome Measures:*
- EDSS (traditional but limited)
- MSFC (composite)
- Patient-reported outcomes
- Brain health metrics`,
      keyTerms: [
        { term: 'BTK inhibitor', definition: 'Bruton\'s tyrosine kinase inhibitor - CNS-penetrant emerging MS therapy' },
        { term: 'iron rim lesion', definition: 'MRI feature of chronic active, slowly expanding lesion' },
        { term: 'smoldering inflammation', definition: 'Chronic, compartmentalized CNS inflammation in progressive MS' },
        { term: 'HSCT', definition: 'Hematopoietic stem cell transplant - aggressive treatment for MS' },
      ],
      clinicalNotes: `Advanced concepts:
1. B cell therapies (anti-CD20) among most effective
2. Progressive MS: CNS-compartmentalized inflammation key
3. BTK inhibitors: CNS-penetrant, targeting microglia
4. Iron rim lesions: Biomarker of progression
5. NfL: Actionable biomarker emerging
6. HSCT: Option for aggressive RRMS
7. Remyelination therapies in development
8. Comprehensive care improves outcomes beyond DMTs`,
    },
  },

  media: [
    {
      id: 'ms-mri-lesions',
      type: 'image',
      filename: 'ms_mri_lesions.jpg',
      title: 'MS MRI Findings',
      description: 'Periventricular lesions, Dawson\'s fingers, spinal cord lesions',
    },
    {
      id: 'ms-pathology',
      type: 'diagram',
      filename: 'ms_demyelination.svg',
      title: 'MS Demyelination Pathology',
      description: 'Comparison of normal myelin and demyelinated nerve fibers',
    },
  ],

  citations: [
    {
      id: 'mcdonald-criteria-2017',
      type: 'article',
      title: '2017 revisions of the McDonald criteria for MS diagnosis',
      authors: ['Thompson AJ', 'Banwell BL', 'Barkhof F'],
      source: 'Lancet Neurology',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-optic-neuritis', targetType: 'condition', relationship: 'related', label: 'Optic Neuritis' },
    { targetId: 'neuro-nmosd', targetType: 'condition', relationship: 'related', label: 'Neuromyelitis Optica' },
    { targetId: 'neuro-transverse-myelitis', targetType: 'condition', relationship: 'related', label: 'Transverse Myelitis' },
  ],

  tags: {
    systems: ['nervous', 'immune'],
    topics: ['neurology', 'autoimmune', 'demyelinating'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default multipleSclerosisContent;
