/**
 * Demyelinating Diseases - Pathology Educational Content
 *
 * Multiple sclerosis and related demyelinating conditions including
 * pathophysiology, clinical features, diagnosis, and treatment.
 */

import { EducationalContent } from '../../types';

export const demyelinatingDiseases: EducationalContent = {
  id: 'pathology-demyelinating-diseases',
  type: 'condition',
  name: 'Demyelinating Diseases',
  alternateNames: ['Multiple Sclerosis', 'MS', 'Demyelination', 'White Matter Disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Demyelinating diseases damage the protective coating (myelin) around nerve fibers, causing problems with how the brain and body communicate.',
      explanation: `Demyelinating diseases are conditions where the protective covering around nerves gets damaged. This covering is called myelin, and it helps nerve signals travel quickly and efficiently.

**What Is Myelin?**

Think of myelin like the plastic insulation around electrical wires. Just as insulation protects wires and helps electricity flow smoothly, myelin:
- Protects nerve fibers
- Helps signals travel faster
- Keeps signals from getting mixed up

**Multiple Sclerosis (MS) - The Most Common:**

MS is when the body's immune system mistakenly attacks myelin in the brain and spinal cord.

**What Happens:**
1. The immune system attacks myelin
2. This creates areas of damage called "lesions" or "plaques"
3. Nerve signals slow down or get blocked
4. This causes various symptoms depending on where the damage is

**Common Symptoms:**
- Blurred vision or double vision
- Numbness or tingling in arms or legs
- Weakness in muscles
- Balance problems
- Fatigue (feeling very tired)
- Difficulty thinking or remembering

**Patterns of MS:**
- **Relapsing-Remitting**: Symptoms come and go in "attacks"
- **Progressive**: Symptoms gradually get worse over time

**Other Demyelinating Conditions:**
- Some happen after infections
- Some affect children more
- Some only affect certain parts of the nervous system

**Why It Matters:**
- MS usually starts in young adults (20-40 years old)
- More common in women
- More common in areas farther from the equator
- Not contagious - you cannot catch it from someone

**Treatment:**
- Medications can reduce attacks and slow the disease
- Physical therapy helps with strength and balance
- There is no cure yet, but treatments are improving

Living with MS is challenging, but many people continue active lives with proper treatment and support.`,
      keyTerms: [
        { term: 'myelin', definition: 'The protective coating around nerve fibers that helps signals travel faster' },
        { term: 'multiple sclerosis', definition: 'A disease where the immune system attacks the myelin in the brain and spinal cord' },
        { term: 'lesion', definition: 'An area of damage or abnormality in tissue' },
        { term: 'relapse', definition: 'When symptoms of a disease return or get worse after a period of improvement' },
        { term: 'immune system', definition: 'The body\'s defense system that normally fights infections' },
      ],
      analogies: [
        'Myelin is like the rubber coating on electrical wires - without it, signals short-circuit and do not travel properly.',
        'MS lesions are like potholes on a highway - they slow down or block traffic (nerve signals).',
        'Relapsing-remitting MS is like having a cold that comes and goes, while progressive MS is like a cold that never fully goes away.',
      ],
      examples: [
        'A 25-year-old woman has an episode of blurred vision that gets better after a few weeks, then months later has numbness in her legs - this pattern suggests MS.',
        'A person with MS might have more trouble walking when they get hot because heat temporarily worsens nerve conduction.',
        'Someone may first notice MS when they have sudden vision loss in one eye that improves over weeks.',
      ],
    },
    2: {
      level: 2,
      summary: 'Demyelinating diseases involve immune-mediated destruction of myelin, leading to impaired nerve conduction with characteristic clinical presentations, MRI findings, and CSF abnormalities.',
      explanation: `**Myelin and Myelination:**

**Central Nervous System (CNS) Myelin:**
- Produced by oligodendrocytes
- Each oligodendrocyte myelinates multiple axon segments
- Enables saltatory conduction (signal jumping between nodes)

**Peripheral Nervous System (PNS) Myelin:**
- Produced by Schwann cells
- One Schwann cell myelinates one segment
- Different proteins than CNS myelin

**Multiple Sclerosis:**

**Epidemiology:**
| Factor | Details |
|--------|---------|
| Age of onset | 20-40 years typically |
| Sex ratio | 3:1 female to male |
| Geography | Higher prevalence away from equator |
| Genetics | HLA-DRB1*15:01 association |

**Pathophysiology:**
1. Autoimmune T-cell activation against myelin antigens
2. T-cells cross blood-brain barrier
3. Local inflammation with macrophage recruitment
4. Myelin destruction (demyelination)
5. Oligodendrocyte damage
6. Axonal injury (later stages)
7. Remyelination attempts (often incomplete)

**Clinical Phenotypes:**
| Type | Description | Percentage |
|------|-------------|------------|
| Relapsing-remitting (RRMS) | Attacks with recovery | 85% at onset |
| Secondary progressive (SPMS) | RRMS evolving to progression | 50% of RRMS by 15 years |
| Primary progressive (PPMS) | Gradual worsening from start | 10-15% |
| Progressive-relapsing | Progressive with superimposed attacks | Rare |

**Common Presentations:**
| Syndrome | Description |
|----------|-------------|
| Optic neuritis | Unilateral vision loss, pain with eye movement |
| Transverse myelitis | Sensory level, weakness, bladder dysfunction |
| Brainstem syndrome | Diplopia, vertigo, dysarthria |
| Cerebellar syndrome | Ataxia, tremor, nystagmus |
| Sensory symptoms | Numbness, tingling, Lhermitte sign |

**Lhermitte Sign:**
- Electric shock sensation down spine with neck flexion
- Suggests cervical cord involvement
- Not specific to MS

**Diagnostic Criteria (McDonald 2017):**

**Dissemination in Space (DIS):**
- Lesions in 2+ of 4 CNS areas:
  - Periventricular
  - Cortical/juxtacortical
  - Infratentorial
  - Spinal cord

**Dissemination in Time (DIT):**
- New T2 or enhancing lesion on follow-up MRI, OR
- Simultaneous gadolinium-enhancing and non-enhancing lesions

**CSF Findings:**
- Oligoclonal bands (positive in ~95% of MS)
- Elevated IgG index
- Normal or mildly elevated protein
- Normal glucose

**MRI Findings:**
| Sequence | Finding |
|----------|---------|
| T2/FLAIR | Hyperintense lesions |
| T1 | "Black holes" (chronic lesions with axon loss) |
| T1 + gadolinium | Enhancing lesions (active inflammation) |
| Spinal cord | Partial cord lesions, < 2 segments |

**Differential Diagnosis:**
- Neuromyelitis optica spectrum disorder (NMOSD)
- Acute disseminated encephalomyelitis (ADEM)
- Systemic lupus erythematosus
- Neurosarcoidosis
- Lyme disease
- Vitamin B12 deficiency`,
      keyTerms: [
        { term: 'oligodendrocyte', definition: 'Glial cell that produces myelin in the central nervous system' },
        { term: 'saltatory conduction', definition: 'Rapid nerve signal conduction by jumping between nodes of Ranvier' },
        { term: 'oligoclonal bands', definition: 'Distinct immunoglobulin bands in CSF indicating intrathecal antibody production' },
        { term: 'dissemination', definition: 'Spread of lesions in space (different CNS areas) or time (different occasions)' },
        { term: 'Lhermitte sign', definition: 'Electric shock sensation down spine with neck flexion, suggesting cervical cord disease' },
      ],
      analogies: [
        'Oligodendrocytes are like insulation contractors - each one coats segments of multiple wires (axons).',
        'The McDonald criteria work like a detective requiring evidence from multiple crime scenes (DIS) at different times (DIT).',
        'Gadolinium enhancement shows active inflammation like a hot spot on a thermal camera.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advanced understanding of demyelinating diseases includes immunopathogenesis, spectrum of demyelinating conditions, biomarkers, and current treatment paradigms targeting different aspects of MS pathophysiology.',
      explanation: `**Immunopathogenesis of MS:**

**Peripheral Immune Activation:**
\`\`\`
Environmental trigger + Genetic susceptibility
↓
Peripheral T-cell activation
↓
Th1 and Th17 cell differentiation
↓
Breakdown of BBB integrity
↓
T-cell and B-cell CNS infiltration
↓
Microglial activation
↓
Myelin and oligodendrocyte attack
↓
Demyelination + Axonal injury
\`\`\`

**Key Immune Players:**
| Cell Type | Role |
|-----------|------|
| CD4+ Th1 | IFN-gamma production, macrophage activation |
| CD4+ Th17 | IL-17 production, BBB disruption |
| CD8+ T cells | Direct cytotoxicity to oligodendrocytes |
| B cells | Antibody production, antigen presentation |
| Macrophages/microglia | Phagocytosis, cytokine release |
| Regulatory T cells | Suppression (impaired in MS) |

**Target Antigens:**
- Myelin basic protein (MBP)
- Myelin oligodendrocyte glycoprotein (MOG)
- Proteolipid protein (PLP)
- Molecular mimicry with pathogens (EBV hypothesis)

**Spectrum of Demyelinating Diseases:**

**Neuromyelitis Optica Spectrum Disorder (NMOSD):**
| Feature | NMOSD | MS |
|---------|-------|-----|
| Antibody | AQP4-IgG (70%) | Negative |
| Optic neuritis | Severe, bilateral | Milder, unilateral |
| Myelitis | Longitudinally extensive (>3 segments) | Short segment |
| Brain lesions | Periventricular, hypothalamic | Dawson fingers |
| CSF | Neutrophils, no OCB | Lymphocytes, OCB+ |
| Prognosis | Attacks more severe | More recoverable |
| Treatment | Different DMTs | Standard MS DMTs |

**MOG Antibody Disease (MOGAD):**
- Anti-MOG antibodies
- Optic neuritis (often bilateral)
- ADEM-like presentations
- Better prognosis than AQP4-NMOSD
- May be monophasic or relapsing

**Acute Disseminated Encephalomyelitis (ADEM):**
- Post-infectious or post-vaccination
- Children > adults
- Multifocal demyelination
- Encephalopathy present
- Usually monophasic
- Large, bilateral lesions

**Biomarkers in MS:**

**CSF Biomarkers:**
| Marker | Utility |
|--------|---------|
| Oligoclonal bands | Diagnosis (>95% sensitivity) |
| IgG index | Intrathecal synthesis |
| Neurofilament light (NfL) | Axonal damage, activity |
| CXCL13 | B-cell activity |
| Chitinase 3-like 1 | Progression prediction |

**Serum Biomarkers:**
| Marker | Utility |
|--------|---------|
| Serum NfL | Disease activity, treatment response |
| Anti-JCV antibody | PML risk with natalizumab |
| AQP4-IgG | NMOSD diagnosis |
| MOG-IgG | MOGAD diagnosis |

**Disease-Modifying Therapies (DMTs):**

**Platform/Moderate Efficacy:**
| Drug | Mechanism | Route |
|------|-----------|-------|
| Interferon beta | Immunomodulation | Injectable |
| Glatiramer acetate | Th2 shift | Injectable |
| Teriflunomide | Pyrimidine synthesis inhibitor | Oral |
| Dimethyl fumarate | Nrf2 activation | Oral |

**High Efficacy:**
| Drug | Mechanism | Route |
|------|-----------|-------|
| Natalizumab | Anti-alpha-4 integrin | IV infusion |
| Ocrelizumab | Anti-CD20 | IV infusion |
| Ofatumumab | Anti-CD20 | SC injection |
| Alemtuzumab | Anti-CD52 | IV infusion |
| Cladribine | Purine analogue | Oral (pulsed) |

**Treatment Strategy:**
\`\`\`
Early High-Efficacy Treatment (EHT) vs Escalation:

EHT Approach:
- Start with high-efficacy DMT
- Better long-term outcomes in studies
- Risk of serious adverse events

Escalation Approach:
- Start with platform therapy
- Escalate if breakthrough disease
- Lower initial risk

No Evidence of Disease Activity (NEDA):
- No relapses
- No MRI activity
- No disability progression
\`\`\``,
      keyTerms: [
        { term: 'AQP4-IgG', definition: 'Aquaporin-4 antibody; diagnostic biomarker for neuromyelitis optica spectrum disorder' },
        { term: 'neurofilament light', definition: 'Neuronal cytoskeletal protein released with axonal damage; biomarker of disease activity' },
        { term: 'MOG antibody', definition: 'Myelin oligodendrocyte glycoprotein antibody defining a distinct demyelinating disease' },
        { term: 'NEDA', definition: 'No Evidence of Disease Activity; composite treatment goal in MS' },
        { term: 'high-efficacy therapy', definition: 'DMTs with greater relapse reduction but potentially higher risks' },
      ],
      clinicalNotes: 'The distinction between MS, NMOSD, and MOGAD is critical because treatments differ and some MS therapies may worsen NMOSD. Serum NfL is increasingly used to monitor treatment response. Early high-efficacy therapy may improve long-term outcomes but requires careful risk-benefit discussion. Anti-CD20 therapies have become first-line for many patients given high efficacy and tolerability.',
    },
    4: {
      level: 4,
      summary: 'Expert-level understanding encompasses advanced pathological classification, prognostic stratification, personalized treatment selection, management of treatment complications, and emerging therapeutic targets.',
      explanation: `**Pathological Classification:**

**MS Lesion Types (Kuhlmann Classification):**
| Type | Features |
|------|----------|
| Active | Macrophages throughout, ongoing demyelination |
| Mixed active/inactive | Macrophages at rim, inactive center |
| Inactive | No macrophages, gliotic scar |
| Remyelinated (shadow plaque) | Thin myelin, less intense myelin staining |

**Lesion Evolution:**
\`\`\`
Initial Inflammation
↓
Active demyelination (macrophage activity)
↓
Rim activity (smoldering lesion)
↓
Chronic inactive (gliotic scar) OR
↓
Remyelination (shadow plaque)
\`\`\`

**Progressive MS Mechanisms:**
- Compartmentalized inflammation (meningeal follicles)
- Microglial/astrocyte activation
- Oxidative stress
- Mitochondrial dysfunction
- Neurodegeneration independent of acute inflammation

**Cortical Pathology:**
| Type | Location |
|------|----------|
| Type I | Leukocortical (WM/GM junction) |
| Type II | Intracortical |
| Type III | Subpial (from meninges) |
| Type IV | Spanning entire cortical width |

**Prognostic Stratification:**

**Poor Prognostic Factors:**
\`\`\`
Clinical:
- Older age at onset
- Male sex
- Motor or sphincter symptoms at onset
- Incomplete attack recovery
- High early relapse rate
- PPMS phenotype

MRI:
- High T2 lesion load
- Spinal cord lesions
- Brain atrophy
- T1 black holes

Biomarkers:
- High serum NfL
- CSF NfL levels
- OCB presence (predicts conversion)
\`\`\`

**BREMS and MSSS:**
- Bayesian Risk Estimate for Multiple Sclerosis (BREMS)
- Multiple Sclerosis Severity Score (MSSS)
- Aid prognostic counseling

**Personalized Treatment Selection:**

**High-Efficacy Therapy Indications:**
- High relapse rate
- Poor prognostic features
- Significant disability early
- Active MRI despite treatment
- Patient preference/lifestyle

**Risk Stratification for Natalizumab:**
| Risk Factor | PML Risk |
|-------------|----------|
| JCV Ab negative | Very low (~0) |
| JCV Ab+, no prior IS, <2 years | Low (~0.1/1000) |
| JCV Ab+, prior IS, >2 years | High (11/1000) |
| High index value (>1.5) | Higher risk |

**Ocrelizumab Considerations:**
- Hepatitis B screening
- Live vaccine contraindication
- Infection risk
- Malignancy surveillance
- Hypogammaglobulinemia monitoring

**Treatment Complications:**

**Natalizumab-Associated PML:**
\`\`\`
Risk Mitigation:
- JCV antibody testing every 6 months
- Extended interval dosing
- MRI surveillance
- Clinical vigilance

PML Presentation:
- Subacute cognitive, behavioral, motor changes
- Asymmetric; distinct from MS relapse
- MRI: Expanding subcortical lesion

IRIS (after drug cessation):
- Paradoxical worsening
- Inflammation in PML lesion
- May require steroids, plasma exchange
\`\`\`

**Anti-CD20 Infections:**
- Respiratory infections common
- Hypogammaglobulinemia monitoring
- Enteroviral meningoencephalitis
- COVID-19 vaccine response reduced

**Pregnancy and MS:**

**Planning:**
- Discuss before conception
- Wash-out periods vary by DMT
- Compatible DMTs: Glatiramer acetate, interferons
- Avoid: Teriflunomide, fingolimod (rebound), anti-CD20

**During Pregnancy:**
- Reduced relapse rate (especially 3rd trimester)
- Most DMTs discontinued

**Postpartum:**
- Increased relapse risk
- Early DMT restart
- Breastfeeding considerations

**Emerging Therapeutics:**

**BTK Inhibitors:**
| Agent | Target |
|-------|--------|
| Tolebrutinib | CNS-penetrant BTK inhibitor |
| Fenebrutinib | BTK inhibitor |
| Evobrutinib | BTK inhibitor |

**Remyelination Strategies:**
\`\`\`
Approaches:
- Anti-LINGO-1 antibody (opicinumab)
- Clemastine (muscarinic antagonist)
- Thyroid hormone analogs
- Oligodendrocyte precursor cell transplantation

Challenges:
- Hostile lesion environment
- Axonal damage limiting benefit
- Outcome measures
\`\`\`

**Neuroprotection:**
- Simvastatin (PPMS trials)
- Ibudilast (phosphodiesterase inhibitor)
- Lipoic acid (antioxidant)`,
      keyTerms: [
        { term: 'smoldering lesion', definition: 'Chronic active MS lesion with ongoing rim inflammation' },
        { term: 'PML', definition: 'Progressive multifocal leukoencephalopathy; JC virus brain infection' },
        { term: 'IRIS', definition: 'Immune reconstitution inflammatory syndrome; paradoxical worsening after PML treatment' },
        { term: 'BTK inhibitor', definition: 'Bruton tyrosine kinase inhibitor; emerging therapy targeting B cells and microglia' },
        { term: 'shadow plaque', definition: 'MS lesion with evidence of remyelination' },
      ],
      clinicalNotes: 'PML risk management with natalizumab requires systematic JCV antibody monitoring and clear patient counseling. Anti-CD20 therapies have become preferred high-efficacy options for many patients. Progressive MS treatment remains challenging; siponimod (SPMS) and ocrelizumab (PPMS) have modest efficacy. BTK inhibitors represent the next generation, potentially addressing compartmentalized inflammation and microglial activity.',
    },
    5: {
      level: 5,
      summary: 'Expert-level knowledge encompasses research frontiers in MS pathogenesis, advanced biomarker interpretation, clinical trial design, emerging treatments, and direction of specialized MS programs.',
      explanation: `**Advanced Pathogenesis Research:**

**EBV Hypothesis:**
\`\`\`
Evidence:
- Near 100% MS patients EBV seropositive
- Infectious mononucleosis increases MS risk 2-3x
- EBV nuclear antigens in B cells within MS lesions
- Longitudinal military study: Seroconversion precedes MS

Mechanisms:
- Molecular mimicry (EBV proteins vs myelin)
- EBV-infected B cells as antigen-presenting cells
- Chronic EBV-driven B-cell activation
- EBNA1 antibodies cross-react with GlialCAM

Implications:
- EBV vaccines for MS prevention
- Antiviral approaches
- Anti-CD20 efficacy may relate to EBV-infected B cells
\`\`\`

**Gut Microbiome:**
| Finding | Significance |
|---------|--------------|
| Altered microbiome composition | Possible disease trigger/modifier |
| Segmented filamentous bacteria | Th17 induction |
| Short-chain fatty acids | Treg induction (protective) |
| Fecal microbiota transplant | Clinical trials ongoing |

**Metabolic Factors:**
\`\`\`
Obesity and MS:
- Childhood obesity increases risk
- Adipokines promote inflammation
- Vitamin D interactions

Mitochondrial Dysfunction:
- Oxidative stress in lesions
- Energy failure in demyelinated axons
- Virtual hypoxia hypothesis
- Target for neuroprotection
\`\`\`

**Advanced Biomarker Interpretation:**

**Serum Neurofilament Light (sNfL):**
\`\`\`
Clinical Utility:
- Correlates with MRI activity
- Predicts disability progression
- Monitors treatment response
- Age-adjusted reference ranges

Interpretation Caveats:
- Elevated in many CNS conditions
- Age-dependent reference values
- Assay standardization ongoing
- Threshold definitions vary
\`\`\`

**Advanced Imaging Biomarkers:**
| Technique | Measure |
|-----------|---------|
| MTR | Myelin content estimation |
| DTI | Axonal integrity, tractography |
| Volumetrics | Brain atrophy (annualized rate) |
| PET imaging | Microglial activation (TSPO) |
| OCT | RNFL thickness (axonal loss) |

**Composite Endpoints:**
\`\`\`
CDP12 vs CDP24:
- Confirmed disability progression 12 vs 24 weeks
- 24 weeks more stringent, less noise
- PIRA vs relapse-associated worsening

NEDA-3 vs NEDA-4:
- NEDA-3: No relapses, no MRI activity, no progression
- NEDA-4: NEDA-3 + brain atrophy rate < 0.4%/year

Treatment Target Evolution:
- From relapse prevention to NEDA
- To NEDA + biomarker normalization
- To brain health optimization
\`\`\`

**Clinical Trial Design:**

**Progressive MS Trials:**
\`\`\`
Challenges:
- Slow progression
- Heterogeneous population
- Sensitive outcome measures needed
- Trial duration requirements

Novel Designs:
- Biomarker-enriched populations
- Neurofilament as endpoint
- Composite outcomes
- Adaptive designs
\`\`\`

**Remyelination Trial Design:**
| Element | Consideration |
|---------|---------------|
| Patient selection | Lesions with remyelination potential |
| Outcome measures | MTR, VEP latency, DTI |
| Duration | Long enough for remyelination |
| Lesion age | Chronic vs acute |

**Research Frontiers:**

**Cell Therapies:**
\`\`\`
Hematopoietic Stem Cell Transplant (HSCT):
- "Immune reset"
- High efficacy in aggressive RRMS
- Significant upfront risk
- Long-term data emerging

Mesenchymal Stem Cells:
- Immunomodulatory
- Neuroprotective potential
- Multiple trials ongoing
- Route and dose optimization

Oligodendrocyte Precursors:
- Direct cell replacement
- Experimental stage
- Hostile lesion environment challenges
\`\`\`

**Precision Medicine:**
| Approach | Application |
|----------|-------------|
| Pharmacogenomics | DMT selection (limited current use) |
| Biomarker stratification | High vs low NfL treatment approach |
| Imaging phenotypes | Treatment response prediction |
| Genetic risk profiles | Research stratification |

**MS Program Direction:**

**Comprehensive MS Center Model:**
\`\`\`
Components:
- Neurology MS specialists
- Neuro-ophthalmology
- Neuroradiology expertise
- Neuropsychology
- Physical/occupational therapy
- Social work
- Research programs
- Clinical trials infrastructure

Quality Metrics:
- DMT initiation rates
- Time to treatment
- Relapse management
- MRI surveillance adherence
- Patient-reported outcomes
\`\`\`

**Telemedicine Integration:**
- Remote monitoring
- Video visits for stable patients
- Wearable devices (gait, activity)
- Digital cognitive testing
- Enhanced access

**Future Directions:**
\`\`\`
Prevention:
- EBV vaccination
- Vitamin D supplementation
- Obesity prevention
- Identify pre-clinical MS

Cure Approaches:
- Immune reset (HSCT refinement)
- Antigen-specific tolerance
- Combined remyelination + neuroprotection
- Gene therapy
\`\`\``,
      keyTerms: [
        { term: 'PIRA', definition: 'Progression independent of relapse activity; disability worsening without identified relapse' },
        { term: 'RNFL', definition: 'Retinal nerve fiber layer; measured by OCT as marker of axonal loss' },
        { term: 'TSPO PET', definition: 'Translocator protein PET imaging; marker of microglial activation' },
        { term: 'HSCT', definition: 'Hematopoietic stem cell transplant; immune reset therapy for MS' },
        { term: 'MTR', definition: 'Magnetization transfer ratio; MRI measure correlating with myelin content' },
      ],
      clinicalNotes: 'The EBV hypothesis has gained substantial support and may lead to preventive vaccines. Serum NfL is moving into clinical practice for treatment monitoring. PIRA has emerged as a key driver of long-term disability, highlighting the importance of both anti-inflammatory and neuroprotective strategies. HSCT remains an option for aggressive disease but requires careful patient selection. BTK inhibitors and remyelinating therapies represent the next wave of research targets.',
    },
  },

  media: [
    {
      id: 'ms-mri',
      type: 'image',
      filename: 'ms-mri-lesions.jpg',
      title: 'MS MRI Findings',
      description: 'T2 FLAIR and gadolinium-enhanced images showing typical MS lesions',
    },
    {
      id: 'demyelination-diagram',
      type: 'diagram',
      filename: 'demyelination-process.png',
      title: 'Demyelination Process',
      description: 'Illustration of myelin damage and its effects on nerve conduction',
    },
  ],

  citations: [
    {
      id: 'thompson-ms-criteria',
      type: 'article',
      title: 'Diagnosis of Multiple Sclerosis: 2017 Revisions of the McDonald Criteria',
      authors: ['Thompson, A.J.'],
      source: 'Lancet Neurology',
    },
    {
      id: 'reich-ms-pathology',
      type: 'article',
      title: 'Multiple Sclerosis',
      authors: ['Reich, D.S.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'pathology-neurodegeneration', targetType: 'condition', relationship: 'related', label: 'Neurodegeneration' },
    { targetId: 'physiology-action-potentials', targetType: 'process', relationship: 'see-also', label: 'Action Potentials' },
    { targetId: 'clinical-neurological-exam', targetType: 'concept', relationship: 'related', label: 'Neurological Examination' },
  ],

  tags: {
    systems: ['nervous', 'immune'],
    topics: ['pathology', 'autoimmune', 'neurology'],
    keywords: ['multiple sclerosis', 'demyelination', 'myelin', 'oligodendrocyte', 'NMOSD', 'MOG'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default demyelinatingDiseases;
