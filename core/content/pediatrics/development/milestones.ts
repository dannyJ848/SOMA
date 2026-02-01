/**
 * Developmental Milestones
 *
 * Comprehensive educational content on pediatric developmental milestones
 * covering motor, language, cognitive, and social-emotional domains from
 * birth through school age with screening tools and red flags.
 */

import { EducationalContent } from '../../types';

export const MILESTONES: EducationalContent = {
  id: 'pediatrics-dev-milestones',
  type: 'topic',
  name: 'Developmental Milestones',
  nameEs: 'Hitos del Desarrollo',
  alternateNames: [
    'Child development milestones',
    'Developmental screening',
    'Pediatric developmental assessment',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Children learn new skills as they grow, like smiling, talking, and walking. Doctors check these skills at every visit to make sure your child is on track.',
      explanation: `As babies and children grow, they learn new skills called "milestones." These are things most children can do by a certain age. Every child is different, but knowing what to expect helps parents and doctors spot problems early.

**First Year of Life**
- **2 months:** Smiles at people, coos, follows objects with eyes
- **4 months:** Reaches for toys, laughs, holds head steady
- **6 months:** Sits with support, babbles, responds to own name
- **9 months:** Sits alone, pulls to stand, says "mama/dada" (not specific)
- **12 months:** Takes first steps, says 1-2 words, uses pincer grasp

**Toddler Years (1-3 years)**
- **15 months:** Walks alone, says 3-5 words, stacks 2 blocks
- **18 months:** Runs, says 10+ words, feeds self with spoon
- **2 years:** Kicks a ball, says 2-word phrases, follows simple instructions
- **3 years:** Rides tricycle, says 3-word sentences, plays with other children

**Preschool (3-5 years)**
- **4 years:** Hops on one foot, tells stories, draws a person with 3 parts
- **5 years:** Skips, counts to 10, dresses without help

**When to Talk to Your Doctor**
- Not smiling by 2 months
- Not babbling by 9 months
- Not walking by 18 months
- Not speaking 2-word phrases by 2 years
- Losing skills they once had at any age`,
      keyTerms: [
        {
          term: 'milestone',
          definition:
            'A skill or behavior that most children can do by a certain age, like walking or talking',
        },
        {
          term: 'developmental delay',
          definition:
            'When a child takes longer than expected to reach milestones compared to other children the same age',
        },
        {
          term: 'screening',
          definition:
            'A quick check done by a doctor to see if a child is developing on track',
        },
      ],
      analogies: [
        'Milestones are like checkpoints in a video game. Most kids reach them in a similar order, but some take a little longer on one level before zooming through the next.',
        'Development is like building a tower of blocks. Each new skill is stacked on top of the ones before it.',
      ],
      patientCounselingPoints: [
        'Every child develops at their own pace. Milestones show the typical range, not an exact schedule.',
        'If your child is not meeting milestones, early help (like therapy) can make a big difference.',
        'Talk to your baby often, read books, and play together. These activities boost development.',
        'Ask your pediatrician about developmental screening at every well-child visit.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Developmental milestones are organized into four domains (gross motor, fine motor, language, social-emotional) and monitored through standardized screening tools at well-child visits.',
      explanation: `**Domains of Development**

| Domain | Description | Examples |
|--------|-------------|---------|
| Gross Motor | Large body movements | Rolling, sitting, walking, running |
| Fine Motor | Small hand/finger movements | Grasping, pincer grip, drawing, writing |
| Language | Understanding and using words | Babbling, first words, sentences |
| Social-Emotional | Relating to others, self-regulation | Smiling, stranger anxiety, sharing |

**Key Milestones by Age**

*Newborn to 6 Months:*
| Age | Gross Motor | Fine Motor | Language | Social |
|-----|------------|------------|----------|--------|
| 2 mo | Lifts head 45 degrees | Opens/closes hands | Coos, vowel sounds | Social smile |
| 4 mo | Rolls front to back | Reaches and grasps | Laughs, squeals | Enjoys social play |
| 6 mo | Sits with support | Transfers objects hand to hand | Babbles consonants | Stranger anxiety begins |

*6-12 Months:*
| Age | Gross Motor | Fine Motor | Language | Social |
|-----|------------|------------|----------|--------|
| 9 mo | Sits independently, crawls | Pincer grasp developing | "Mama/dada" nonspecific | Separation anxiety, waves bye |
| 12 mo | Pulls to stand, cruises | Mature pincer grasp | 1-2 specific words | Points to show interest |

*12-36 Months:*
| Age | Gross Motor | Fine Motor | Language | Social |
|-----|------------|------------|----------|--------|
| 15 mo | Walks independently | Stacks 2 blocks | 3-5 words | Imitates activities |
| 18 mo | Runs clumsily | Stacks 3-4 blocks, scribbles | 10-25 words | Parallel play |
| 24 mo | Walks up stairs (2 feet/step) | Stacks 6 blocks, turns pages | 50+ words, 2-word phrases | Begins pretend play |
| 36 mo | Rides tricycle, jumps | Copies a circle | 3-word sentences, 75% intelligible | Cooperative play begins |

**Screening Tools**
- **ASQ-3 (Ages and Stages Questionnaire):** Parent-completed questionnaire, used at 9, 18, 30 months
- **M-CHAT-R/F (Modified Checklist for Autism in Toddlers):** Autism-specific screen at 18 and 24 months
- **Denver II (DDST-II):** Office-based comprehensive screen

**Red Flags (Refer Immediately)**
- No social smile by 3 months
- No babbling by 12 months
- No words by 16 months
- No 2-word phrases by 24 months
- Any loss of previously acquired skills at any age
- Persistent lack of eye contact or social engagement`,
      keyTerms: [
        {
          term: 'gross motor',
          definition:
            'Development of large muscle movements including rolling, sitting, crawling, walking, and running',
        },
        {
          term: 'fine motor',
          definition:
            'Development of small, precise hand and finger movements including grasping, pincer grip, and drawing',
        },
        {
          term: 'ASQ-3',
          definition:
            'Ages and Stages Questionnaire; a parent-completed developmental screening tool used at well-child visits',
        },
        {
          term: 'M-CHAT-R/F',
          definition:
            'Modified Checklist for Autism in Toddlers, Revised with Follow-Up; standard autism screening tool used at 18 and 24 months',
        },
        {
          term: 'regression',
          definition:
            'Loss of previously acquired developmental skills, which is always a red flag requiring immediate evaluation',
        },
      ],
      analogies: [
        'The four developmental domains are like four lanes on a highway. A child might speed ahead in one lane while taking their time in another, and that can be completely normal.',
        'Screening tools are like a quick health snapshot. They do not diagnose a problem but flag children who need a closer look.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Developmental assessment requires understanding neuromaturational sequences, validated screening instruments, diagnostic evaluations, and early intervention under IDEA Part C and Part B.',
      explanation: `**Neuromaturational Sequences**

Motor development follows predictable patterns reflecting central nervous system maturation:
- **Cephalocaudal progression:** Head control before trunk control before lower extremity control
- **Proximal-to-distal progression:** Shoulder control before hand control
- **Gross-to-fine progression:** Whole-hand grasp before pincer grasp
- **Primitive reflexes** (Moro, ATNR, palmar grasp) must integrate by 4-6 months for voluntary movements to emerge

*Primitive Reflex Timeline:*
| Reflex | Appears | Disappears |
|--------|---------|-----------|
| Moro | Birth | 3-6 months |
| ATNR (Fencing) | Birth | 4-6 months |
| Palmar grasp | Birth | 4-6 months |
| Rooting | Birth | 3-4 months |
| Babinski | Birth | 12-24 months |
| Parachute | 8-9 months | Persists |
| Landau | 3 months | 12-24 months |

Persistence of primitive reflexes beyond expected age suggests upper motor neuron pathology (e.g., cerebral palsy).

**Language Development Norms**
| Age | Receptive | Expressive |
|-----|-----------|-----------|
| 6 months | Responds to name, localizes sound | Babbles (consonant-vowel combinations) |
| 12 months | Follows one-step commands with gesture | 1-2 words, uses gestures (pointing, waving) |
| 18 months | Points to body parts, follows commands without gesture | 10-25 words, jargoning |
| 24 months | Follows 2-step commands | 50+ words, 2-word phrases, 50% intelligible |
| 36 months | Understands prepositions | 200+ words, 3-word sentences, 75% intelligible |
| 48 months | Follows 3-step commands | Complex sentences, tells stories, 100% intelligible |

*Rule of thumb:* Intelligibility = age in years x 25% (by 4 years = 100% intelligible to strangers)

**AAP Screening Recommendations**
| Visit | Developmental Screen | Autism Screen |
|-------|---------------------|---------------|
| 9 months | ASQ-3 or PEDS | - |
| 18 months | ASQ-3 or PEDS | M-CHAT-R/F |
| 24 months | - | M-CHAT-R/F |
| 30 months | ASQ-3 or PEDS | - |

**Diagnostic Evaluation Pathway**
Failed screen leads to comprehensive evaluation:
1. Developmental pediatrician or psychologist assessment
2. Standardized diagnostic tools: Bayley-4, Mullen Scales, ADOS-2 (autism)
3. Hearing and vision testing (always obtain)
4. Genetic testing if dysmorphic features or global delay (chromosomal microarray, fragile X)
5. MRI if abnormal neurological exam, microcephaly/macrocephaly, or regression

**Early Intervention (IDEA)**
| Part | Ages | Provider |
|------|------|----------|
| Part C | Birth-3 years | State early intervention program |
| Part B, Section 619 | 3-5 years | School district preschool services |
| Part B | 5-21 years | Public school special education |

**Cognitive Development (Piaget Stages)**
| Stage | Age | Key Features |
|-------|-----|-------------|
| Sensorimotor | 0-2 years | Object permanence (8-12 months), cause-effect |
| Preoperational | 2-7 years | Symbolic play, egocentrism, magical thinking |
| Concrete Operational | 7-11 years | Conservation, logical reasoning about concrete objects |
| Formal Operational | 11+ years | Abstract reasoning, hypothetical thinking |`,
      keyTerms: [
        {
          term: 'cephalocaudal',
          definition:
            'Head-to-tail pattern of neuromaturational development where head control is achieved before trunk and extremity control',
        },
        {
          term: 'primitive reflexes',
          definition:
            'Brainstem-mediated reflexes present at birth (Moro, ATNR, palmar grasp) that normally integrate by 4-6 months; persistence suggests upper motor neuron lesion',
        },
        {
          term: 'IDEA',
          definition:
            'Individuals with Disabilities Education Act; federal law ensuring early intervention (Part C, birth-3) and special education services (Part B, 3-21)',
        },
        {
          term: 'Bayley-4',
          definition:
            'Bayley Scales of Infant and Toddler Development, 4th edition; gold standard developmental assessment for children 1-42 months',
        },
        {
          term: 'ADOS-2',
          definition:
            'Autism Diagnostic Observation Schedule, 2nd edition; standardized observational assessment for autism diagnosis',
        },
        {
          term: 'object permanence',
          definition:
            'Understanding that objects continue to exist when out of sight; emerges around 8-12 months during the sensorimotor stage',
        },
      ],
      clinicalNotes:
        'Always obtain hearing and vision testing when evaluating developmental delay. Language delay is the most common presenting concern, and hearing loss must be excluded first. Regression at any age warrants urgent evaluation (consider Rett syndrome, metabolic disorders, epileptic encephalopathies). Refer to early intervention simultaneously with diagnostic evaluation, not after.',
    },
    4: {
      level: 4,
      summary:
        'Advanced developmental assessment integrates neuroplasticity principles, genetic and metabolic etiologies, neuroimaging, standardized diagnostic batteries, and evidence-based intervention models.',
      explanation: `**Neurobiological Basis of Development**

Brain development follows a predictable sequence:
1. **Neurulation** (3-4 weeks gestation)
2. **Neuronal proliferation** (2-4 months gestation)
3. **Neuronal migration** (3-5 months gestation)
4. **Organization** (5 months gestation to years postnatal): dendritic arborization, synaptogenesis, synaptic pruning
5. **Myelination** (birth to 20+ years): posterior to anterior, sensory before motor

*Critical and Sensitive Periods:*
| Domain | Critical Period | Clinical Implication |
|--------|----------------|---------------------|
| Vision | 0-6 months | Amblyopia from untreated strabismus |
| Language | 0-5 years | Cochlear implant optimal before 12 months |
| Motor | 0-2 years | Early PT/OT maximizes plasticity |
| Executive function | Adolescence | Prefrontal cortex last to mature |

**Etiologies of Global Developmental Delay (GDD)**
| Category | Examples | Workup |
|----------|----------|--------|
| Genetic | Trisomy 21, Fragile X, Rett syndrome, microdeletion/duplication | Chromosomal microarray (CMA), fragile X testing |
| Metabolic | PKU, hypothyroidism, mucopolysaccharidoses | Newborn screen review, thyroid function, urine organic acids, plasma amino acids |
| Structural | Periventricular leukomalacia, cortical malformation | MRI brain |
| Infectious | Congenital CMV, congenital Zika, HIV | TORCH screen, CMV urine PCR |
| Environmental | Fetal alcohol spectrum, lead poisoning | Exposure history, lead level |
| Idiopathic | ~40% of GDD cases | Whole exome sequencing (WES) if initial workup negative |

**Standardized Diagnostic Instruments**
| Tool | Ages | Domains | Time |
|------|------|---------|------|
| Bayley-4 | 1-42 months | Cognitive, motor, language, adaptive, social-emotional | 30-90 min |
| Mullen Scales | 0-68 months | Visual reception, fine motor, expressive/receptive language | 15-60 min |
| ADOS-2 | 12 months-adult | Autism diagnostic (social, communication, RRBs) | 40-60 min |
| Vineland-3 | 0-90 years | Adaptive behavior | 20-60 min |
| Griffiths III | 0-6 years | Locomotor, eye-hand, language, personal-social, performance | 45-90 min |

**Evidence-Based Intervention Models**
| Approach | Population | Evidence Level |
|----------|-----------|---------------|
| ESDM (Early Start Denver Model) | Autism, 12-48 months | RCT evidence for IQ and adaptive gains |
| ABA (Applied Behavior Analysis) | Autism | Strongest evidence base, 20-40 hrs/week |
| NDBI (Naturalistic Developmental Behavioral) | Autism | Growing RCT evidence |
| NICU follow-up programs | Preterm infants | Reduces developmental sequelae |
| Parent-mediated (Hanen, JASPER) | Language/autism | Moderate evidence |

**Genetic Testing Algorithm (ACMG 2023)**
1. First-tier: Chromosomal microarray (CMA) + Fragile X (if male or family history)
2. Second-tier: Gene panel (based on phenotype) or whole exome sequencing (WES)
3. Third-tier: Whole genome sequencing (WGS) if WES non-diagnostic
4. Diagnostic yield: CMA ~15-20%, WES ~30-40% of previously undiagnosed GDD`,
      keyTerms: [
        {
          term: 'neuroplasticity',
          definition:
            'The developing brain\'s ability to reorganize neural connections in response to experience or injury; basis for early intervention effectiveness',
        },
        {
          term: 'global developmental delay',
          definition:
            'Significant delay (>2 SD below mean) in two or more developmental domains in a child under 5 years; precursor term to intellectual disability',
        },
        {
          term: 'chromosomal microarray',
          definition:
            'First-tier genetic test for GDD/ID detecting copy number variants at higher resolution than karyotype; diagnostic yield 15-20%',
        },
        {
          term: 'ESDM',
          definition:
            'Early Start Denver Model; evidence-based early autism intervention integrating ABA with developmental and relationship-based approaches',
        },
        {
          term: 'synaptic pruning',
          definition:
            'Activity-dependent elimination of underused synaptic connections during postnatal brain development; peaks in adolescence for prefrontal cortex',
        },
        {
          term: 'periventricular leukomalacia',
          definition:
            'White matter injury near lateral ventricles, most common brain injury of prematurity, leading to spastic diplegia cerebral palsy',
          pronunciation: 'per-ih-ven-TRIK-yoo-lar loo-koh-mah-LAY-shuh',
        },
      ],
      clinicalNotes:
        'Whole exome sequencing is increasingly used as second-tier for unexplained GDD with 30-40% diagnostic yield. Never delay early intervention while awaiting genetic diagnosis. Consider SMA in any floppy infant with weakness and preserved alertness. Newborn screening and gene therapy (onasemnogene) have transformed SMA outcomes.',
    },
    5: {
      level: 5,
      summary:
        'Expert developmental pediatrics integrates advances in genomics, neuroimaging biomarkers, precision intervention, and health disparities research to optimize neurodevelopmental outcomes.',
      explanation: `**Genomic Advances in Developmental Disorders**

*Whole Genome Sequencing:*
| Study | N | Diagnostic Yield | Key Finding |
|-------|---|------------------|-------------|
| 100,000 Genomes Project (UK) | 13,449 | 25% | Noncoding variants identified in ~5% |
| DDD (Deciphering Dev. Disorders) | 13,612 | 42% | 60 novel genes identified |
| ACMG Reanalysis Guidelines | - | +10-15% on reanalysis | Recommend reanalysis every 1-3 years |

*Gene Therapy and Precision Medicine:*
| Disorder | Gene | Therapy | Outcome |
|----------|------|---------|---------|
| SMA Type 1 | SMN1 | Onasemnogene (Zolgensma) | Motor milestones achieved when treated pre-symptomatically |
| Rett Syndrome | MECP2 | Trofinetide (approved 2023) | First FDA-approved treatment |
| Angelman Syndrome | UBE3A | ASO therapy, gene reactivation | Phase 2 trials |
| Fragile X | FMR1 | mGluR5 antagonists, GABA-B agonists | Clinical trials ongoing |
| AADC Deficiency | DDC | Eladocagene exuparvovec | EU approved, FDA under review |

**Neuroimaging Biomarkers**

*Functional Connectivity MRI (fcMRI):*
- Altered default mode network in autism detectable by 6 months
- Functional connectivity patterns may predict autism diagnosis before behavioral symptoms
- Research tool; not yet clinical standard

*Diffusion Tensor Imaging (DTI):*
- White matter tract integrity correlates with motor outcomes in preterm infants
- Reduced fractional anisotropy in corticospinal tract predicts cerebral palsy
- Predictive models: DTI + General Movements Assessment (Prechtl) = 98% sensitivity for CP by 3 months corrected age

**Developmental Surveillance Controversies**

*2022 CDC Milestone Revisions:*
| Change | Rationale | Controversy |
|--------|-----------|-------------|
| Independent walking expected by 18 months | Aligns with referral threshold | May over-refer normal variants |
| Added social-emotional milestones | Broader developmental model | Screening tool sensitivity concerns |

*Screening Tool Performance:*
| Tool | Sensitivity | Specificity | PPV | Limitation |
|------|------------|-------------|-----|-----------|
| ASQ-3 | 70-90% | 76-91% | Variable | May miss mild delay |
| M-CHAT-R/F | 85% (with follow-up) | 99% | 48% | High false-positive without follow-up |
| PEDS | 74-79% | 70-80% | Variable | Parent concern-based |

**Health Disparities in Developmental Screening**
| Finding | Evidence |
|---------|----------|
| Black children diagnosed with autism 1-2 years later than White children | Mandell et al., Pediatrics |
| Hispanic children less likely to receive developmental screening | Guerrero et al., 2022 |
| Low-income families less likely to access early intervention | Rosenberg et al., 2013 |

*Multilingual Development:*
- Bilingual children may have smaller vocabulary per language but comparable total vocabulary
- Language milestones should be assessed across ALL languages spoken
- Bilingualism does NOT cause language delay

**Predictive Models and Machine Learning**
- EEG-based biomarkers at 3 months predicting autism at 18 months
- Eye-tracking measures of social attention as early markers
- Wearable sensor data quantifying motor development
- EHR algorithms identifying children at risk for missed diagnoses
- Integration of multi-modal data (genetic + imaging + behavioral) for prognostication`,
      keyTerms: [
        {
          term: 'General Movements Assessment',
          definition:
            'Prechtl method evaluating spontaneous movement patterns; absence of fidgety movements at 3 months corrected age is the strongest early predictor of cerebral palsy (sensitivity 98%)',
        },
        {
          term: 'trofinetide',
          definition:
            'First FDA-approved treatment for Rett syndrome (2023); synthetic analog of insulin-like growth factor-1 tripeptide modulating neuroinflammation and synaptic function',
        },
        {
          term: 'DDD Study',
          definition:
            'Deciphering Developmental Disorders; large-scale genomic study identifying novel developmental disorder genes through trio WES in over 13,000 families',
        },
        {
          term: 'functional connectivity MRI',
          definition:
            'Advanced neuroimaging measuring correlated activity between brain regions at rest; altered patterns in autism may be detectable before behavioral symptoms',
        },
        {
          term: 'Heckman model',
          definition:
            'Economic framework demonstrating highest returns on investment for earliest childhood interventions, with $7-12 return per dollar invested',
        },
      ],
      clinicalNotes: `**Expert Integration:**
- General Movements Assessment combined with MRI DTI at 3 months corrected age provides the earliest and most accurate prediction of cerebral palsy.
- Reanalyze previously negative exome sequencing results every 1-3 years as new gene-disease associations are discovered.
- Trofinetide for Rett syndrome is a paradigm shift, but clinical improvement is modest. Set realistic expectations with families.
- Address screening disparities proactively by implementing universal screening protocols and providing tools in multiple languages.
- Machine learning approaches to developmental prediction are promising but not yet clinically validated.`,
    },
  },

  media: [
    {
      id: 'milestones-timeline-infographic',
      type: 'diagram',
      filename: 'developmental-milestones-timeline.svg',
      title: 'Developmental Milestones Timeline',
      description:
        'Visual timeline of gross motor, fine motor, language, and social milestones from birth to 5 years',
    },
    {
      id: 'primitive-reflexes-diagram',
      type: 'diagram',
      filename: 'primitive-reflexes-integration.svg',
      title: 'Primitive Reflexes Timeline',
      description:
        'Diagram showing appearance and integration timeline of primitive reflexes',
    },
  ],

  citations: [
    {
      id: 'aap-developmental-surveillance',
      type: 'article',
      title:
        'Identifying Infants and Young Children With Developmental Disorders in the Medical Home',
      authors: ['Council on Children with Disabilities'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2006-1231',
    },
    {
      id: 'cdc-milestones-2022',
      type: 'website',
      title: 'CDC Learn the Signs. Act Early. Milestone Checklists',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      id: 'nelson-development',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      authors: ['Kliegman, R.M.', 'St. Geme, J.W.'],
      source: 'Elsevier',
      chapter: 'Growth, Development, and Behavior',
      license: 'Proprietary',
    },
  ],

  crossReferences: [
    {
      targetId: 'pediatrics-growth-charts',
      targetType: 'concept',
      relationship: 'sibling',
      label: 'Growth Charts',
    },
    {
      targetId: 'pediatrics-newborn-screening',
      targetType: 'topic',
      relationship: 'related',
      label: 'Newborn Screening',
    },
    {
      targetId: 'pediatrics-common-conditions',
      targetType: 'topic',
      relationship: 'related',
      label: 'Common Pediatric Conditions',
    },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pediatrics', 'developmental pediatrics', 'neurology', 'genetics'],
    keywords: [
      'milestones',
      'developmental delay',
      'screening',
      'ASQ',
      'M-CHAT',
      'autism',
      'cerebral palsy',
      'early intervention',
      'IDEA',
      'primitive reflexes',
      'language development',
      'motor development',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family medicine', 'psychiatry'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
