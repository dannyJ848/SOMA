/**
 * Developmental Milestones by Age
 *
 * Comprehensive guide to child development across physical, cognitive,
 * language, and social-emotional domains from birth through adolescence.
 */

import { EducationalContent } from '../../types';

export const DEVELOPMENTAL_MILESTONES: EducationalContent = {
  id: 'concept-developmental-milestones',
  type: 'concept',
  name: 'Developmental Milestones by Age',
  alternateNames: ['Child development milestones', 'Developmental screening', 'Growth and development'],

  levels: {
    1: {
      level: 1,
      summary: 'Children learn new skills in a predictable order as they grow. Knowing what to expect helps parents support their child and spot any concerns early.',
      explanation: `Every child grows and learns in their own way, but most children develop skills in a similar order.

**What Are Milestones?**
Milestones are skills most children can do by a certain age - like smiling, rolling over, walking, or talking.

**Birth to 3 Months:**
- Lifts head when on tummy
- Starts to smile at people
- Coos and makes sounds
- Follows moving things with eyes
- Recognizes parents' faces and voices

**4 to 6 Months:**
- Rolls over (front to back, then back to front)
- Laughs and squeals
- Reaches for toys
- Puts things in mouth
- Sits with support

**7 to 12 Months:**
- Sits without help
- Crawls
- Pulls up to stand
- Says "mama" and "dada"
- Waves bye-bye
- Points at things

**1 to 2 Years (Toddler):**
- Walks alone
- Says several words
- Follows simple directions
- Starts to run
- Plays pretend games
- Shows more independence

**2 to 3 Years:**
- Runs well
- Climbs on furniture
- Says 2-3 word sentences
- Sorts shapes and colors
- Plays with other children
- Shows many feelings

**3 to 5 Years (Preschool):**
- Rides a tricycle
- Draws circles and shapes
- Speaks in full sentences
- Counts to 10
- Uses the toilet independently
- Has favorite friends

**5 to 12 Years (School Age):**
- Reads and writes
- Follows complex rules
- Develops hobbies
- Forms strong friendships
- Becomes more independent

**Remember:** Every child is unique! If you have concerns about your child's development, talk to your pediatrician.`,
      keyTerms: [
        { term: 'milestone', definition: 'A skill that most children can do by a certain age' },
        { term: 'development', definition: 'How a child grows and learns new abilities over time' },
        { term: 'pediatrician', definition: 'A doctor who takes care of babies, children, and teenagers' },
      ],
      analogies: [
        'Development is like building a house - you need the foundation before you can add the roof.',
        'Milestones are like checkpoints in a race - everyone reaches them at slightly different times.',
      ],
      examples: [
        'A 9-month-old baby might not walk yet but should be able to sit alone.',
        'A 2-year-old putting two words together like "want milk" is meeting their language milestone.',
      ],
    },
    2: {
      level: 2,
      summary: 'Developmental milestones are specific skills children typically acquire by certain ages. Understanding these helps identify potential delays and supports early intervention when needed.',
      explanation: `**Domains of Development:**

Development occurs across four main areas:
1. **Gross Motor** - Large muscle movements (walking, running)
2. **Fine Motor** - Small muscle movements (grasping, writing)
3. **Language** - Communication and understanding
4. **Social-Emotional** - Relationships and feelings

**Detailed Milestones by Age:**

**Newborn to 2 Months:**
| Domain | Milestone |
|--------|-----------|
| Gross Motor | Lifts head briefly when prone |
| Fine Motor | Hands mostly fisted |
| Language | Coos, startles to sounds |
| Social-Emotional | Fixes on faces, social smile emerging |

**4 Months:**
| Domain | Milestone |
|--------|-----------|
| Gross Motor | Good head control, rolls front to back |
| Fine Motor | Reaches for objects |
| Language | Laughs, turns to sounds |
| Social-Emotional | Enjoys social play |

**6 Months:**
| Domain | Milestone |
|--------|-----------|
| Gross Motor | Sits with support, rolls both ways |
| Fine Motor | Transfers objects hand to hand |
| Language | Babbles (ba-ba, ma-ma) |
| Social-Emotional | Stranger anxiety begins |

**9 Months:**
| Domain | Milestone |
|--------|-----------|
| Gross Motor | Sits alone, crawls |
| Fine Motor | Pincer grasp developing |
| Language | Understands "no," says dada/mama nonspecifically |
| Social-Emotional | Separation anxiety peaks |

**12 Months:**
| Domain | Milestone |
|--------|-----------|
| Gross Motor | Pulls to stand, cruises, may walk |
| Fine Motor | Pincer grasp mature |
| Language | 1-3 words, follows simple commands |
| Social-Emotional | Shows specific attachments |

**18 Months:**
| Domain | Milestone |
|--------|-----------|
| Gross Motor | Walks well, may run |
| Fine Motor | Scribbles, builds 2-block tower |
| Language | 10-25 words, points to body parts |
| Social-Emotional | Parallel play |

**24 Months:**
| Domain | Milestone |
|--------|-----------|
| Gross Motor | Runs, kicks ball, walks up stairs |
| Fine Motor | Builds 6-block tower |
| Language | 50+ words, 2-word sentences |
| Social-Emotional | Defiant phase ("no!") |

**3 Years:**
| Domain | Milestone |
|--------|-----------|
| Gross Motor | Pedals tricycle, alternates feet on stairs |
| Fine Motor | Copies circle, cuts with scissors |
| Language | 3-word sentences, uses pronouns |
| Social-Emotional | Plays with others, takes turns |

**4 Years:**
| Domain | Milestone |
|--------|-----------|
| Gross Motor | Hops on one foot, throws ball overhand |
| Fine Motor | Copies cross and square |
| Language | Tells stories, knows colors |
| Social-Emotional | Imaginative play, has friends |

**5 Years:**
| Domain | Milestone |
|--------|-----------|
| Gross Motor | Skips, good balance |
| Fine Motor | Writes some letters, draws person with 6+ parts |
| Language | Speaks clearly, asks many questions |
| Social-Emotional | Follows rules, wants to please |

**Red Flags for Referral:**
- No social smile by 3 months
- Not reaching for objects by 6 months
- Not sitting independently by 9 months
- No babbling by 12 months
- Not walking by 18 months
- No words by 16 months
- No 2-word phrases by 24 months
- Loss of previously acquired skills at any age`,
      keyTerms: [
        { term: 'gross motor', definition: 'Large muscle movements like walking, running, and jumping' },
        { term: 'fine motor', definition: 'Small muscle movements like grasping, writing, and using utensils' },
        { term: 'stranger anxiety', definition: 'Normal fear of unfamiliar people, typically appearing around 6-8 months' },
        { term: 'parallel play', definition: 'Playing alongside but not directly with other children' },
        { term: 'pincer grasp', definition: 'Using thumb and forefinger to pick up small objects' },
      ],
      analogies: [
        'Development domains are like different subjects in school - children may excel in some and need more time in others.',
      ],
    },
    3: {
      level: 3,
      summary: 'Developmental milestone assessment involves understanding normative development, recognizing variations, identifying concerning patterns, and implementing standardized screening tools to detect delays requiring intervention.',
      explanation: `**Developmental Assessment Framework:**

**Normative Development Principles:**
- Development proceeds in cephalocaudal (head to toe) and proximodistal (center to periphery) directions
- Primitive reflexes must integrate for voluntary movement to emerge
- Skills build sequentially - precursor skills enable more complex abilities
- Wide range of normal exists; focus on patterns rather than single delays

**Primitive Reflexes and Integration:**

| Reflex | Appears | Integrates | Significance if Persistent |
|--------|---------|------------|--------------------------|
| Moro | Birth | 4-6 months | CNS dysfunction |
| ATNR | Birth | 4-6 months | Cerebral palsy indicator |
| Grasp (palmar) | Birth | 3-4 months | Delays fine motor |
| Rooting | Birth | 4 months | Feeding issues |
| Stepping | Birth | 2 months | Returns before walking |
| Parachute | 8-9 months | Persists | Protective; abnormal if absent |

**Detailed Milestone Progression:**

**Gross Motor Sequence:**
1. Head control (2-4 months)
2. Rolling (4-6 months)
3. Sitting (6-8 months)
4. Crawling (7-10 months) - not universal
5. Pulling to stand (9-12 months)
6. Cruising (10-12 months)
7. Walking (12-15 months)
8. Running (18-24 months)

**Language Development:**

| Age | Receptive | Expressive |
|-----|-----------|------------|
| 0-3 mo | Startles to sound | Cooing |
| 4-6 mo | Turns to voice | Babbling (consonants) |
| 9-12 mo | Follows 1-step command | First words, jargoning |
| 12-18 mo | Points to objects on request | 10-25 words |
| 18-24 mo | Follows 2-step commands | 50+ words, 2-word phrases |
| 2-3 yr | Understands most speech | Sentences, strangers understand 75% |
| 3-4 yr | Follows 3-step commands | Complex sentences, asks why |
| 4-5 yr | Understands comparatives | Tells stories, all speech sounds |

**Screening Tools:**

| Tool | Age Range | Administration Time | Domains |
|------|-----------|-------------------|---------|
| ASQ-3 | 1-66 months | 10-15 min | All 5 domains |
| ASQ:SE-2 | 1-72 months | 10-15 min | Social-emotional |
| PEDS | 0-8 years | 2-5 min | Parent concerns screen |
| Denver II | 0-6 years | 20-30 min | All domains (research) |
| M-CHAT-R/F | 16-30 months | 5 min | Autism specific |

**AAP Screening Recommendations:**
- General developmental screening: 9, 18, and 30 months
- Autism-specific screening: 18 and 24 months
- Additional screening whenever concerns arise

**Risk Factors for Developmental Delay:**

*Biological:*
- Prematurity
- Low birth weight
- Neonatal complications
- Genetic conditions
- Prenatal exposures
- Chronic illness

*Environmental:*
- Poverty
- Toxic stress
- Malnutrition
- Lead exposure
- Limited stimulation
- Adverse childhood experiences

**Referral Pathways:**

| Concern | Referral |
|---------|----------|
| Gross/fine motor delay | Early Intervention (0-3), PT/OT |
| Speech delay | Speech-language pathology, audiology |
| Global delay | Developmental pediatrics, genetics |
| Autism concerns | Developmental pediatrics, psychology |
| Regression | Neurology, metabolic workup |`,
      keyTerms: [
        { term: 'cephalocaudal', definition: 'Development progressing from head to toe' },
        { term: 'ATNR', definition: 'Asymmetric tonic neck reflex - "fencing" posture when head turns' },
        { term: 'ASQ-3', definition: 'Ages and Stages Questionnaire - validated developmental screening tool' },
        { term: 'M-CHAT-R/F', definition: 'Modified Checklist for Autism in Toddlers, Revised with Follow-Up' },
        { term: 'jargoning', definition: 'Speech-like vocalizations with varied intonation but no real words' },
      ],
      clinicalNotes: 'Always adjust for prematurity until age 2 (use corrected age). Document developmental surveillance at every well visit. Parents are reliable reporters - take their concerns seriously.',
    },
    4: {
      level: 4,
      summary: 'Advanced developmental assessment requires understanding neurodevelopmental trajectories, recognizing subtle early indicators of specific conditions, interpreting screening results, and coordinating multidisciplinary evaluation and intervention.',
      explanation: `**Neurodevelopmental Trajectories:**

**Brain Development Timeline:**
| Age | Key Development |
|-----|-----------------|
| Prenatal | Neural tube closure (3-4 wk), neuronal migration (3-5 mo) |
| 0-2 years | Synaptogenesis peak, myelination begins |
| 2-10 years | Synaptic pruning, myelination continues |
| Adolescence | Prefrontal cortex maturation, executive function |

**Critical Periods:**
- Vision: 0-6 years (amblyopia risk)
- Language: 0-7 years (optimal acquisition)
- Attachment: 0-3 years (secure base formation)
- Executive function: Develops through adolescence

**Condition-Specific Red Flags:**

**Autism Spectrum Disorder:**
*Early Indicators (12-18 months):*
- Reduced response to name
- Limited joint attention (pointing to share interest)
- Decreased social smiling
- Limited showing of objects
- Atypical eye contact
- Absence of pretend play
- Restricted/repetitive behaviors

*M-CHAT-R/F Interpretation:*
- Low risk (0-2): Rescreen at 24 months
- Medium risk (3-7): Follow-up interview, refer if fails
- High risk (8-20): Immediate referral

**Language Disorders:**
| Type | Characteristics |
|------|-----------------|
| Expressive delay | Comprehension > production; often catches up |
| Mixed receptive-expressive | Worse prognosis, may indicate ASD, ID |
| Social communication disorder | Pragmatic deficits without ASD features |
| Childhood apraxia of speech | Motor planning deficit, limited babbling |

**Motor Disorders:**
*Cerebral Palsy Early Signs:*
- Persistent primitive reflexes
- Early hand preference (<12 months)
- Scissoring or toe-walking
- Asymmetric movements
- Truncal hypotonia with limb hypertonia

*General Movements Assessment:*
- "Fidgety movements" absent at 3-5 months
- High predictive value for CP

**Intellectual Disability:**
- Global delay (all domains) more concerning
- Adaptive function deficits
- May have associated conditions
- Genetic evaluation often indicated

**Evaluation Components:**

**Standardized Assessment Tools:**

| Tool | Age | Measures | Administration |
|------|-----|----------|----------------|
| Bayley-4 | 1-42 mo | Cognitive, language, motor, adaptive, social-emotional | Clinician-administered |
| Mullen | 0-68 mo | Visual reception, fine motor, language | Clinician-administered |
| Vineland-3 | 0-90 yr | Adaptive behavior | Parent interview |
| Griffiths III | 1-72 mo | Development quotients | Clinician-administered |
| ADOS-2 | 12 mo-adult | Autism diagnostic | Clinician-administered |

**Genetic Testing Algorithm:**

*First-Line:*
- Chromosomal microarray (CMA)
- Fragile X (if male or family history)
- Yield: ~15-20% for ID/ASD

*Second-Line:*
- Whole exome sequencing (WES)
- Gene panels for specific phenotypes
- Yield: Additional 25-30%

**Early Intervention:**

*IDEA Part C (0-3 years):*
- Entitlement program
- Services in natural environment
- Individualized Family Service Plan (IFSP)
- Eligibility: Developmental delay or qualifying diagnosis

*IDEA Part B (3-21 years):*
- School district responsibility
- Individualized Education Program (IEP)
- Least restrictive environment

**Evidence-Based Interventions:**

| Condition | Intervention | Evidence Level |
|-----------|--------------|----------------|
| ASD | Applied Behavior Analysis (ABA) | Strong |
| ASD | ESDM (Early Start Denver Model) | Strong |
| Language delay | Speech therapy | Strong |
| Motor delay | PT/OT | Strong |
| Global delay | Comprehensive EI | Moderate |`,
      keyTerms: [
        { term: 'joint attention', definition: 'Sharing focus on an object/event with another person; impaired in autism' },
        { term: 'synaptogenesis', definition: 'Formation of synapses between neurons; peaks in early childhood' },
        { term: 'IFSP', definition: 'Individualized Family Service Plan for early intervention services' },
        { term: 'ADOS-2', definition: 'Autism Diagnostic Observation Schedule, gold-standard autism assessment' },
        { term: 'chromosomal microarray', definition: 'First-line genetic test for developmental delay detecting copy number variants' },
      ],
      clinicalNotes: 'Early identification enables early intervention, which improves outcomes. Parental concerns alone warrant formal evaluation. Consider genetic testing for global delays without clear etiology.',
    },
    5: {
      level: 5,
      summary: 'Pediatric developmental assessment integrates advances in neuroscience, genetics, and intervention science to optimize outcomes through precision approaches, biomarker identification, and systemic coordination of care delivery.',
      explanation: `**Precision Developmental Medicine:**

**Genetic Underpinnings of Development:**

*Monogenic Causes of Developmental Delay:*
| Gene | Condition | Phenotype |
|------|-----------|-----------|
| FMR1 | Fragile X | ID, ASD, characteristic facies |
| MECP2 | Rett syndrome | Regression, hand stereotypies |
| SHANK3 | Phelan-McDermid | ID, ASD, hypotonia |
| CHD8 | ASD risk | Macrocephaly, ID, ASD |
| DYRK1A | ID | Microcephaly, feeding issues |

*Copy Number Variants:*
| CNV | Prevalence | Phenotype |
|-----|------------|-----------|
| 22q11.2 deletion | 1:4,000 | CHD, palate, psychiatric |
| 15q11-13 (PWS/AS) | 1:15,000 | Imprinting disorders |
| 16p11.2 deletion | 1:1,000 in ASD | ASD, macrocephaly |
| 1q21.1 duplication | Variable | ID, ASD, congenital anomalies |

**Biomarkers for Developmental Conditions:**

*Research Biomarkers (not yet clinical):*
| Biomarker | Condition | Status |
|-----------|-----------|--------|
| Eye tracking | ASD | Promising, research use |
| EEG patterns | ASD, epilepsy | Emerging |
| Metabolomics | Inborn errors | Clinical for some |
| Brain MRI volumetrics | Various | Research |
| Infant motor tracking | CP | Promising |

**Neurodevelopmental Outcome Predictors:**

*Preterm Infant Outcomes:*
| Gestational Age | CP Risk | ID Risk | ASD Risk |
|-----------------|---------|---------|----------|
| 23-24 weeks | 15-20% | 35-40% | 8-10% |
| 25-26 weeks | 8-12% | 20-25% | 6-8% |
| 27-28 weeks | 5-8% | 15-20% | 5-7% |
| 29-32 weeks | 3-5% | 10-15% | 3-5% |
| 33-36 weeks | 1-2% | 5-8% | 2-3% |

*MRI Predictors in Preterm Infants:*
- White matter injury (PVL) → CP
- IVH grade III-IV → Cognitive impairment
- Cerebellar hemorrhage → Motor/cognitive issues
- Thinning of corpus callosum → Cognitive outcomes

**Intervention Science:**

*Mechanisms of Early Intervention Efficacy:*
- Experience-dependent neuroplasticity
- Sensitive period optimization
- Caregiver-mediated intervention
- Activity-dependent development
- Environmental enrichment effects

*Intervention Intensity Research:*
| Intervention | Intensity Studied | Outcomes |
|--------------|-------------------|----------|
| ABA | 25-40 hr/week | IQ, adaptive gains |
| ESDM | 15-25 hr/week | Language, social |
| PT for CP | Varied | Motor function |
| Constraint therapy | Intensive (21 day) | Upper extremity function |

*Implementation Challenges:*
- Workforce shortages
- Geographic disparities
- Funding limitations
- Family capacity
- Service coordination

**Systems-Level Considerations:**

*Care Coordination Models:*
| Model | Features | Evidence |
|-------|----------|----------|
| Medical home | Primary care coordination | Strong |
| Care navigator | Dedicated coordination support | Moderate |
| Integrated care | Co-located services | Emerging |
| Telehealth | Remote access | Expanding evidence |

*Quality Metrics:*
- Time to diagnosis
- Time to intervention
- Family satisfaction
- Functional outcomes
- Healthcare utilization

**Research Frontiers:**

*Emerging Diagnostic Approaches:*
- Machine learning for developmental screening
- Digital phenotyping
- Automated video analysis
- Wearable sensors for motor assessment
- Virtual reality assessment

*Therapeutic Advances:*
- Targeted pharmacotherapy for genetic conditions
- Gene therapy trials (Rett, Fragile X)
- Brain stimulation approaches
- Robotics-assisted therapy
- Parent-mediated telehealth interventions

**Disparities in Developmental Care:**

*Access Disparities:*
| Factor | Impact |
|--------|--------|
| Race/ethnicity | Later ASD diagnosis, less EI access |
| Income | Reduced access to specialists |
| Geography | Rural areas lack services |
| Insurance | Coverage gaps for therapy |
| Language | Screening tool validity, communication |

*Strategies to Address:*
- Universal screening programs
- Culturally validated tools
- Community health worker models
- School-based services
- Policy advocacy`,
      keyTerms: [
        { term: 'experience-dependent plasticity', definition: 'Brain changes driven by environmental input; basis for intervention efficacy' },
        { term: 'copy number variant', definition: 'Deletion or duplication of chromosomal segments detectable by microarray' },
        { term: 'PVL', definition: 'Periventricular leukomalacia; white matter injury in preterm infants associated with CP' },
        { term: 'ESDM', definition: 'Early Start Denver Model; naturalistic behavioral intervention for ASD' },
        { term: 'digital phenotyping', definition: 'Using technology to capture behavioral data for developmental assessment' },
      ],
      clinicalNotes: `**Practice Integration:**
- Systematic screening at recommended ages
- Low threshold for evaluation given intervention benefits
- Genetic testing increasingly valuable
- Family-centered care approach
- Address disparities through outreach
- Stay current on intervention evidence
- Coordinate with schools and EI
- Longitudinal monitoring through transitions`,
    },
  },

  media: [
    {
      id: 'milestone-chart',
      type: 'diagram',
      filename: 'developmental-milestones-chart.svg',
      title: 'Developmental Milestones by Age',
      description: 'Visual timeline of expected developmental milestones from birth to 5 years',
    },
  ],

  citations: [
    {
      id: 'cdc-milestones',
      type: 'website',
      title: 'CDC Developmental Milestones',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/',
      accessedDate: '2025-01-24',
    },
    {
      id: 'aap-screening',
      type: 'article',
      title: 'Promoting Optimal Development: Identifying Infants and Young Children With Developmental Disorders',
      authors: ['Council on Children With Disabilities'],
      source: 'Pediatrics',
      url: 'https://publications.aap.org/pediatrics/article/145/1/e20193449/36971/',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-growth-charts', targetType: 'concept', relationship: 'related', label: 'Growth Charts' },
    { targetId: 'concept-well-child-visits', targetType: 'concept', relationship: 'related', label: 'Well-Child Visits' },
    { targetId: 'concept-autism-spectrum-disorder', targetType: 'condition', relationship: 'related', label: 'Autism Spectrum Disorder' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pediatrics', 'development', 'screening', 'neurodevelopment'],
    keywords: ['milestones', 'developmental delay', 'early intervention', 'ASQ', 'autism screening'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
