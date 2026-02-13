import { EducationalContent } from '../../types';

export const developmentalMilestones: EducationalContent = {
  id: 'pediatrics-developmental-milestones',
  type: 'concept',
  name: 'Developmental Milestones by Age',
  alternateNames: ['Child Development Stages', 'Growth Milestones', 'Pediatric Development'],

  levels: {
    1: {
      level: 1,
      summary: 'Children learn new skills at certain ages, like sitting, walking, and talking, which help doctors and parents track healthy development.',
      explanation: `As babies and children grow, they learn new skills in a predictable order. These skills are called "developmental milestones" - like checkpoints that show your child is developing well.

**There are four main areas of development:**

1. **Motor Skills (Movement)**
   - Gross motor: Big movements like rolling, sitting, crawling, walking
   - Fine motor: Small movements like grasping, picking up small objects, drawing

2. **Language and Communication**
   - Making sounds, saying words, forming sentences
   - Understanding what others say to them

3. **Social and Emotional**
   - Smiling, playing with others, sharing
   - Understanding feelings

4. **Cognitive (Thinking)**
   - Problem-solving, learning, understanding cause and effect

**Key Milestones by Age:**

*By 2 months:* Smiles, follows faces with eyes, coos
*By 4 months:* Holds head up, laughs, reaches for toys
*By 6 months:* Sits with support, babbles, recognizes familiar faces
*By 9 months:* Sits alone, crawls, says "mama/dada" (without meaning)
*By 12 months:* Pulls to stand, waves bye-bye, says 1-2 words with meaning
*By 18 months:* Walks alone, says several words, points to show things
*By 2 years:* Runs, says 2-word sentences, plays alongside other children
*By 3 years:* Climbs well, speaks in sentences, plays with others

**Remember:** Every child develops at their own pace. Some are early walkers but late talkers, or vice versa. Talk to your doctor if you have concerns.`,
      keyTerms: [
        { term: 'developmental milestone', definition: 'A skill or behavior most children can do by a certain age' },
        { term: 'gross motor', definition: 'Big body movements like walking, running, and jumping' },
        { term: 'fine motor', definition: 'Small, precise movements like picking up small objects or drawing' },
        { term: 'cognitive', definition: 'Related to thinking, learning, and understanding' },
      ],
      analogies: [
        'Developmental milestones are like leveling up in a video game - each level unlocks new abilities, and while some kids move faster through certain levels, everyone follows a similar path.',
        'Think of development like building a tower - you need to stack the bottom blocks (basic skills) before you can add the top ones (complex skills).',
      ],
      examples: [
        'A 6-month-old who can sit with support but not yet crawl is right on track.',
        'A 15-month-old who walks holding furniture but doesn\'t walk independently yet is within the normal range.',
      ],
    },
    2: {
      level: 2,
      summary: 'Developmental milestones are age-specific abilities in motor, language, cognitive, and social-emotional domains that help healthcare providers identify normal development and screen for delays.',
      explanation: `Developmental milestones represent the acquisition of skills across multiple domains at predictable ages, though with normal variation.

**Domains of Development:**

1. **Gross Motor Development**
   - 2 months: Lifts head when prone
   - 4 months: Rolls over, supports on forearms
   - 6 months: Sits with support, begins tripod sitting
   - 9 months: Sits independently, begins crawling
   - 12 months: Pulls to stand, cruises along furniture
   - 15 months: Walks independently
   - 18 months: Runs stiffly, climbs stairs with support
   - 2 years: Runs well, kicks ball, walks up stairs
   - 3 years: Pedals tricycle, jumps in place

2. **Fine Motor Development**
   - 3 months: Hands open, bats at objects
   - 6 months: Transfers objects between hands, raking grasp
   - 9 months: Pincer grasp developing
   - 12 months: Mature pincer grasp, releases objects
   - 18 months: Stacks 2-3 blocks, scribbles
   - 2 years: Stacks 6 blocks, vertical lines
   - 3 years: Copies circle, uses scissors

3. **Language Development**
   - 2 months: Cooing
   - 4-6 months: Babbling (consonant sounds)
   - 9 months: "Mama/dada" nonspecific
   - 12 months: 1-2 words with meaning
   - 15 months: 3-5 words, points to body parts
   - 18 months: 10-25 words, follows simple commands
   - 2 years: 50+ words, 2-word phrases
   - 3 years: 3-word sentences, strangers understand 75%

4. **Social-Emotional Development**
   - 2 months: Social smile
   - 6 months: Stranger anxiety begins
   - 9 months: Separation anxiety peaks
   - 12 months: Plays pat-a-cake, waves
   - 18 months: Parallel play, temper tantrums
   - 2 years: Plays alongside peers, imitates adults
   - 3 years: Interactive play, shares with prompting

**Red Flags Requiring Evaluation:**
- No social smile by 3 months
- Not reaching for objects by 5 months
- No babbling by 9 months
- No words by 16 months
- No 2-word phrases by 2 years
- Loss of previously acquired skills at any age`,
      keyTerms: [
        { term: 'gross motor', definition: 'Large muscle movements including walking, running, and balance' },
        { term: 'fine motor', definition: 'Small muscle control for precise movements like grasping and writing' },
        { term: 'pincer grasp', definition: 'Using thumb and index finger to pick up small objects; develops around 9-12 months' },
        { term: 'stranger anxiety', definition: 'Fear of unfamiliar people developing around 6-8 months; a normal milestone' },
        { term: 'parallel play', definition: 'Playing alongside but not interactively with other children; typical at 18-24 months' },
      ],
      analogies: [
        'Development is like a recipe where ingredients must be added in order - you can\'t frost a cake before it\'s baked.',
        'Milestones are like checkpoints on a journey - some travelers move faster, but most follow the same route.',
      ],
    },
    3: {
      level: 3,
      summary: 'Developmental surveillance using standardized milestone assessments enables early identification of neurodevelopmental disorders, with understanding of primitive reflex integration and age-appropriate screening tools guiding clinical decision-making.',
      explanation: `Pediatric developmental assessment requires systematic surveillance integrated with standardized screening tools.

**Developmental Surveillance Framework:**

**Primitive Reflexes and Motor Development:**

*Primitive Reflexes (should disappear):*
- Moro reflex: Birth to 3-6 months
- Rooting reflex: Birth to 4 months
- Palmar grasp: Birth to 4-6 months
- Tonic neck reflex (ATNR): Birth to 4-6 months
- Stepping reflex: Birth to 2 months
- Babinski reflex: Birth to 12-24 months

*Protective reflexes (should develop):*
- Parachute reflex: Develops at 8-9 months
- Lateral propping: Develops at 6-7 months

**Detailed Milestone Assessment:**

*Motor Development Sequence:*
- Head control: Prone head lift (2 mo) → no head lag (4 mo)
- Sitting: Tripod sit (5-6 mo) → independent sitting (7-8 mo)
- Mobility: Rolling (4-6 mo) → crawling (7-10 mo) → cruising (9-12 mo) → walking (12-15 mo)
- Advanced motor: Running (18-24 mo) → jumping (24-30 mo) → skipping (4-5 years)

*Language Development Patterns:*
- Receptive language precedes expressive language
- First words typically: 10-14 months
- Vocabulary explosion: 18-24 months
- Grammar emergence: 2-3 years
- By age 4: 1,500-2,000 word vocabulary, complex sentences

*Cognitive Milestones (Piaget's Stages):*
- Sensorimotor (0-2 years): Object permanence by 8-9 months
- Preoperational (2-7 years): Symbolic play, egocentrism
- Concrete operational (7-11 years): Conservation, logical thinking
- Formal operational (11+ years): Abstract reasoning

**Screening Tools:**

*General Developmental Screening:*
- Ages and Stages Questionnaire (ASQ-3): Parent-completed, 2-66 months
- Parents' Evaluation of Developmental Status (PEDS): Parent interview
- Denver Developmental Screening Test (DDST-II)

*Autism-Specific Screening:*
- Modified Checklist for Autism in Toddlers (M-CHAT-R/F): 16-30 months
- AAP recommends screening at 18 and 24 months

**Risk Factors for Developmental Delay:**
- Prematurity (adjust age for first 2 years)
- Low birth weight
- Perinatal complications (hypoxia, infection)
- Genetic conditions
- Environmental deprivation
- Family history of developmental disorders`,
      keyTerms: [
        { term: 'primitive reflex', definition: 'Automatic motor response present at birth that should integrate/disappear by specific ages' },
        { term: 'object permanence', definition: 'Understanding that objects continue to exist when out of sight; develops around 8-9 months' },
        { term: 'developmental surveillance', definition: 'Ongoing process of monitoring development at every well-child visit' },
        { term: 'corrected age', definition: 'Chronological age minus weeks of prematurity; used for milestone assessment in preterm infants' },
        { term: 'ASQ-3', definition: 'Ages and Stages Questionnaire; validated parent-report developmental screening tool' },
      ],
      clinicalNotes: 'AAP recommends developmental screening at 9, 18, and 30 months, with autism-specific screening at 18 and 24 months. Refer for early intervention if delays identified - earlier intervention leads to better outcomes.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive developmental assessment integrates neuromaturation principles, standardized psychometric evaluations, and understanding of neurodevelopmental trajectories to guide early intervention and diagnostic formulation for conditions like ASD, intellectual disability, and cerebral palsy.',
      explanation: `Advanced developmental assessment requires integration of neurobiological principles with clinical assessment strategies.

**Neurobiological Basis of Development:**

*Brain Development Timeline:*
- Neural tube formation: 3-4 weeks gestation
- Neuronal proliferation: 3-4 months gestation
- Neuronal migration: 3-5 months gestation
- Organization (synaptogenesis): 6 months gestation - years postnatal
- Myelination: 2nd trimester - 2 years (continues into adulthood)

*Synaptic Pruning:*
- Synaptic density peaks at 1-2 years
- Experience-dependent pruning refines neural circuits
- "Use it or lose it" - environmental stimulation crucial

*Critical/Sensitive Periods:*
- Vision: First 6 months critical
- Language: First 5 years most plastic
- Attachment: First 2 years foundational

**Differential Diagnosis of Developmental Delay:**

*Global Developmental Delay (GDD):*
- Significant delay (2+ SD below mean) in 2+ domains
- Age <5 years (after 5, term "intellectual disability" used if confirmed)
- Workup: Genetic testing (CMA, fragile X), metabolic studies, neuroimaging

*Motor Delay Differential:*
- Central causes: Cerebral palsy, genetic syndromes
- Peripheral causes: Spinal muscular atrophy, muscular dystrophy
- Metabolic: Mitochondrial disorders

*Language Delay Differential:*
- Hearing impairment (always evaluate)
- Autism spectrum disorder
- Language disorder (specific language impairment)
- Global developmental delay/intellectual disability
- Environmental deprivation

*Autism Spectrum Disorder Criteria (DSM-5):*
- Persistent deficits in social communication/interaction
- Restricted, repetitive patterns of behavior/interests
- Symptoms present in early developmental period
- Specify: With/without intellectual impairment, language impairment
- Severity levels 1-3

**Comprehensive Assessment Components:**

*Developmental Evaluation:*
- Bayley Scales of Infant Development (BSID-4): 1-42 months
- Griffiths Mental Development Scales
- Mullen Scales of Early Learning

*Cognitive Assessment:*
- Wechsler Preschool and Primary Scale of Intelligence (WPPSI): 2.5-7 years
- Stanford-Binet Intelligence Scales

*Adaptive Functioning:*
- Vineland Adaptive Behavior Scales
- Adaptive Behavior Assessment System (ABAS)

*Autism-Specific Assessment:*
- Autism Diagnostic Observation Schedule (ADOS-2): Gold standard
- Autism Diagnostic Interview-Revised (ADI-R)

**Cerebral Palsy Classification:**
- Spastic (80%): Unilateral (hemiplegia) or bilateral (diplegia, quadriplegia)
- Dyskinetic (15%): Dystonia, choreoathetosis
- Ataxic (5%)
- GMFCS levels I-V for functional classification

**Early Intervention Principles:**
- Neuroplasticity highest in early years
- Evidence supports early intensive intervention for ASD
- Family-centered, individualized approaches
- IDEA Part C: Birth-3 early intervention services`,
      keyTerms: [
        { term: 'global developmental delay', definition: 'Significant delays in 2+ developmental domains in children <5 years; requires comprehensive evaluation' },
        { term: 'chromosomal microarray (CMA)', definition: 'First-line genetic test for developmental delay; detects copy number variants' },
        { term: 'GMFCS', definition: 'Gross Motor Function Classification System; 5-level severity scale for cerebral palsy' },
        { term: 'neuroplasticity', definition: 'Brain\'s ability to reorganize and form new neural connections; highest in early childhood' },
        { term: 'ADOS-2', definition: 'Autism Diagnostic Observation Schedule; standardized diagnostic assessment for ASD' },
      ],
      clinicalNotes: 'Workup for unexplained GDD typically includes: CMA (15-20% yield), fragile X testing (males), metabolic studies if concerning features, and MRI if focal findings or regression. Early intervention should not wait for diagnosis - refer when delay is identified.',
    },
    5: {
      level: 5,
      summary: 'Contemporary developmental pediatrics integrates genomic medicine, biomarker research, and precision intervention approaches while considering epigenetic influences, gene-environment interactions, and emerging therapies targeting specific neurodevelopmental pathways.',
      explanation: `State-of-the-art developmental assessment and intervention reflects advances in genetics, neuroscience, and intervention science.

**Genomic Medicine in Developmental Disorders:**

*Diagnostic Odyssey Evolution:*
- Traditional approach: Clinical diagnosis → targeted testing
- Current paradigm: Exome/genome sequencing as early diagnostic tool
- Diagnostic yield:
  * CMA: 15-20%
  * Exome sequencing: Additional 25-40%
  * Genome sequencing: Emerging first-line for selected cases

*Genetic Architecture of Neurodevelopmental Disorders:*
- Rare de novo variants: Major contributor to ASD, ID, epileptic encephalopathies
- Copy number variants: 15-20% of ASD, ID
- Recurrent syndromes: 16p11.2 deletion/duplication, 22q11.2, 15q11-13
- Oligogenic inheritance emerging understanding

*Actionable Genetic Diagnoses:*
- PKU, biotinidase deficiency: Dietary intervention
- Creatine deficiency syndromes: Supplementation
- Tuberous sclerosis: mTOR inhibitors
- SYNGAP1: Antisense oligonucleotide trials
- SCN2A, SCN8A: Precision medicine with sodium channel modulators

**Biomarkers in Development:**

*Neuroimaging Biomarkers:*
- DTI: White matter tract development
- Functional MRI: Connectivity patterns
- Surface-based morphometry: Cortical development

*Emerging Blood-Based Biomarkers:*
- Metabolomic signatures in ASD
- Inflammatory markers in neurodevelopmental disorders
- Neurotrophic factors (BDNF) in development

*Eye-Tracking Technology:*
- Reduced attention to social stimuli in ASD detectable in infancy
- Potential screening tool for high-risk populations

**Advanced Intervention Approaches:**

*Evidence-Based Early Intervention:*
- Early Start Denver Model (ESDM): Naturalistic developmental behavioral intervention
- JASPER: Joint attention, symbolic play engagement
- PECS, AAC: Augmentative communication strategies
- Parent-mediated interventions: Pivotal Response Treatment

*Pharmacological Approaches:*
- No FDA-approved medications for core ASD symptoms
- Irritability: Risperidone, aripiprazole (FDA-approved)
- Attention: Methylphenidate (consideration after behavioral interventions)
- Emerging: Intranasal oxytocin (research stage)
- Vasopressin trials ongoing

*Novel Therapeutic Targets:*
- Glutamatergic modulation
- GABAergic signaling
- Oxytocin/vasopressin pathways
- Gut-brain axis interventions (microbiome research)

**Epigenetics and Environmental Influences:**

*Prenatal Exposures:*
- Valproate: Known teratogen, increased ASD risk
- Maternal immune activation: Infection, autoimmune disease
- Maternal metabolic conditions: Diabetes, obesity

*Postnatal Environment:*
- Severe deprivation studies (Romanian orphan studies)
- Toxic stress and ACEs impact brain development
- Protective factors: Responsive caregiving, enriched environment

**Prognosis and Outcome Prediction:**

*Factors Affecting Outcomes:*
- Baseline cognitive ability
- Language development by age 5
- Early intervention intensity
- Family resources and support

*Contemporary Understanding:*
- Neurodiversity framework gaining traction
- Shift from "normalization" to support and accommodation
- Importance of autistic self-advocacy in research and practice

**Future Directions:**
- Gene therapy for monogenic causes
- Brain-computer interfaces for communication
- AI-assisted developmental monitoring
- Precision medicine based on genetic/biomarker profiling`,
      keyTerms: [
        { term: 'exome sequencing', definition: 'Genetic test analyzing protein-coding regions (~1.5% of genome); 25-40% diagnostic yield in unexplained DD/ID' },
        { term: 'mTOR pathway', definition: 'Mammalian target of rapamycin signaling; dysregulated in tuberous sclerosis, targetable with sirolimus/everolimus' },
        { term: 'ESDM', definition: 'Early Start Denver Model; evidence-based intensive early intervention combining ABA and developmental approaches' },
        { term: 'neurodiversity', definition: 'Framework viewing neurological differences as natural human variation rather than pathology' },
        { term: 'precision medicine', definition: 'Tailoring treatment based on individual genetic, biomarker, and phenotypic characteristics' },
      ],
      clinicalNotes: `**Current Best Practices:**
- Genome-wide approaches increasingly first-line for unexplained developmental disorders
- Early intensive behavioral intervention remains cornerstone for ASD (25+ hours/week associated with better outcomes)
- Family-centered care essential; parent training improves outcomes
- Transition planning should begin in adolescence for adult services
- Screen for co-occurring conditions (anxiety, ADHD, sleep disorders, GI issues in ASD)`,
    },
  },

  media: [
    {
      id: 'developmental-milestones-chart',
      type: 'diagram',
      filename: 'developmental-milestones-chart.svg',
      title: 'Developmental Milestones by Age',
      description: 'Visual chart showing expected milestones from birth to 5 years across developmental domains',
    },
    {
      id: 'primitive-reflexes-diagram',
      type: 'diagram',
      filename: 'primitive-reflexes.svg',
      title: 'Primitive Reflexes',
      description: 'Illustration of primitive reflexes and their expected integration timeline',
    },
  ],
  citations: [
    {
      id: 'aap-bright-futures',
      type: 'textbook',
      title: 'Bright Futures: Guidelines for Health Supervision of Infants, Children, and Adolescents',
      authors: ['American Academy of Pediatrics'],
      source: 'American Academy of Pediatrics',
      chapter: 'Developmental Surveillance and Screening',
    },
    {
      id: 'nelson-pediatrics',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      authors: ['Kliegman RM', 'St. Geme JW', 'Blum NJ'],
      source: 'Elsevier',
      chapter: 'Developmental-Behavioral Pediatrics',
    },
    {
      id: 'cdc-milestones',
      type: 'website',
      title: 'CDC Learn the Signs. Act Early.',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/ncbddd/actearly/',
    },
  ],
  crossReferences: [
    { targetId: 'pediatrics-well-child-visits', targetType: 'topic', relationship: 'related', label: 'Well-Child Visits' },
    { targetId: 'pediatrics-adhd-learning', targetType: 'topic', relationship: 'related', label: 'ADHD and Learning Disorders' },
    { targetId: 'nervous-system', targetType: 'system', relationship: 'related', label: 'Nervous System' },
  ],
  tags: {
    systems: ['nervous'],
    topics: ['pediatrics', 'development', 'neurodevelopment', 'screening'],
    keywords: ['milestones', 'development', 'autism', 'developmental delay', 'early intervention', 'infant', 'toddler', 'child'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default developmentalMilestones;
