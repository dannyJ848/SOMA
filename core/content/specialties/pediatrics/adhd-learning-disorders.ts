import { EducationalContent } from '../../types';

export const adhdAndLearningDisorders: EducationalContent = {
  id: 'pediatrics-adhd-learning',
  type: 'concept',
  name: 'ADHD and Learning Disorders',
  alternateNames: ['Attention Deficit Hyperactivity Disorder', 'Learning Disabilities', 'Neurodevelopmental Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'ADHD is when a child has trouble paying attention, staying still, or thinking before acting. Learning disorders make certain school subjects very hard, even for smart kids.',
      explanation: `Some children have brains that work differently. This doesn't mean they're not smart - they just need different kinds of help!

**What Is ADHD?**

ADHD stands for Attention Deficit Hyperactivity Disorder. Kids with ADHD have one or more of these challenges:

**1. Inattention (trouble paying attention):**
- Mind wanders during class
- Makes careless mistakes
- Loses things often (backpack, homework)
- Gets distracted easily
- Forgets to do chores or homework

**2. Hyperactivity (too much energy):**
- Can't sit still, squirms in seat
- Runs around when supposed to be quiet
- Talks excessively
- Always "on the go"

**3. Impulsivity (acting without thinking):**
- Blurts out answers before question is finished
- Has trouble waiting their turn
- Interrupts others
- Makes decisions without thinking about consequences

**Three Types of ADHD:**
- **Mostly Inattentive:** Trouble focusing (used to be called "ADD")
- **Mostly Hyperactive/Impulsive:** Can't sit still, acts without thinking
- **Combined:** Both types together (most common)

**What Are Learning Disorders?**

Learning disorders make it very hard to learn specific skills, even though the child is trying hard and is intelligent.

**Common Types:**
- **Dyslexia:** Trouble reading (mixing up letters, slow reading)
- **Dysgraphia:** Trouble writing (messy handwriting, hard to put thoughts on paper)
- **Dyscalculia:** Trouble with math (numbers get mixed up, hard to understand concepts)

**Important to Know:**
- These are NOT caused by being lazy or not trying
- They're not related to how smart someone is
- With the right help, kids can do very well!

**How Can These Be Helped?**

**For ADHD:**
- Structure and routines at home and school
- Breaking tasks into smaller pieces
- Positive rewards for good behavior
- Medication (when recommended by doctor)
- Exercise helps a lot!

**For Learning Disorders:**
- Special teaching methods
- Extra time on tests
- Tutoring
- Technology tools (audiobooks, speech-to-text)

**When to Get Help:**
- Struggling much more than classmates
- Behavior problems at home and school
- Falling behind despite trying hard
- Teachers express concerns`,
      keyTerms: [
        { term: 'ADHD', definition: 'A condition where the brain has trouble with attention, activity level, and self-control' },
        { term: 'inattention', definition: 'Difficulty focusing and paying attention to tasks' },
        { term: 'hyperactivity', definition: 'Excessive movement and energy, trouble sitting still' },
        { term: 'learning disorder', definition: 'A condition that makes specific academic skills (reading, writing, math) very difficult' },
        { term: 'dyslexia', definition: 'A learning disorder that affects reading ability' },
      ],
      analogies: [
        'ADHD is like having a TV that keeps changing channels on its own - it\'s hard to stay on one thing.',
        'A learning disorder is like having a great engine but a different kind of fuel system - you need the right fuel to run well.',
        'Medication for ADHD is like glasses for your eyes - it helps the brain focus better.',
      ],
      examples: [
        'A child with ADHD might be very smart but still forget their homework almost every day.',
        'A child with dyslexia might be great at math and sports but struggle to read as fast as their classmates.',
      ],
    },
    2: {
      level: 2,
      summary: 'ADHD is a neurodevelopmental disorder characterized by persistent inattention, hyperactivity, and impulsivity, while specific learning disorders involve unexpected difficulties in academic skill acquisition despite adequate intelligence and instruction.',
      explanation: `Understanding ADHD and learning disorders requires knowledge of diagnostic criteria and evidence-based interventions.

**ADHD - Clinical Features:**

**DSM-5 Criteria:**
- 6+ symptoms of inattention and/or hyperactivity-impulsivity
- Symptoms present before age 12
- Present in 2+ settings (home, school, etc.)
- Clear interference with functioning
- Not explained by another mental disorder

**Inattention Symptoms (6+ needed):**
1. Fails to give close attention, makes careless mistakes
2. Difficulty sustaining attention
3. Doesn't seem to listen when spoken to
4. Fails to follow through on instructions
5. Difficulty organizing tasks
6. Avoids tasks requiring sustained mental effort
7. Loses things necessary for tasks
8. Easily distracted
9. Forgetful in daily activities

**Hyperactivity-Impulsivity Symptoms (6+ needed):**
1. Fidgets, squirms in seat
2. Leaves seat when expected to stay
3. Runs/climbs inappropriately
4. Unable to play quietly
5. "On the go" or "driven by a motor"
6. Talks excessively
7. Blurts out answers
8. Difficulty waiting turn
9. Interrupts or intrudes on others

**Presentations:**
- Predominantly Inattentive
- Predominantly Hyperactive-Impulsive
- Combined

**Evaluation:**

*Clinical Interview:*
- Developmental history
- Symptoms in multiple settings
- Rule out other causes

*Rating Scales:*
- Vanderbilt Assessment Scales (parent and teacher)
- Conners Rating Scales
- ADHD Rating Scale-5

*Additional Evaluation:*
- Academic performance review
- Vision and hearing screening
- Consider psychological testing if learning problems

**Treatment:**

**Behavioral Therapy:**
- Parent training in behavior management
- Organizational skills training
- Classroom accommodations (504 plan or IEP)
- Should be first-line for preschoolers

**Medication:**

| Class | Examples | Key Points |
|-------|----------|------------|
| Stimulants | Methylphenidate (Ritalin, Concerta), Amphetamines (Adderall, Vyvanse) | First-line, 70-80% response rate |
| Non-stimulants | Atomoxetine (Strattera), Guanfacine (Intuniv), Clonidine (Kapvay) | Alternative if stimulants ineffective/contraindicated |

*Stimulant Monitoring:*
- Height, weight (growth suppression possible)
- Blood pressure, heart rate
- Sleep, appetite
- Tics

**Specific Learning Disorders:**

**Types (DSM-5):**
- With impairment in reading (dyslexia)
- With impairment in written expression (dysgraphia)
- With impairment in mathematics (dyscalculia)

**Characteristics:**
- Unexpected difficulty despite adequate instruction
- Achievement significantly below expected for age/intelligence
- Interferes with academic performance

**Dyslexia:**
- Affects 5-17% of children
- Difficulty with phonological processing
- Problems with word decoding, fluency, spelling
- Reading comprehension may be affected

**Evaluation:**
- Comprehensive psychoeducational testing
- Achievement testing (WIAT, WJ-IV)
- Cognitive testing (WISC-V)
- Discrepancy model vs. response to intervention (RTI)

**Management:**
- Specialized reading instruction (Orton-Gillingham approach)
- Classroom accommodations
- IEP or 504 plan
- Assistive technology

**Comorbidity:**
- ADHD + Learning Disorder: 30-50% overlap
- ADHD + Anxiety: Common
- ADHD + ODD: 40-60%
- Must screen for and treat comorbidities`,
      keyTerms: [
        { term: 'DSM-5', definition: 'Diagnostic and Statistical Manual of Mental Disorders; standard classification of mental disorders' },
        { term: 'stimulant medication', definition: 'First-line ADHD medications (methylphenidate, amphetamines) that improve focus by increasing dopamine' },
        { term: 'dyslexia', definition: 'Specific learning disorder affecting reading; involves phonological processing difficulties' },
        { term: 'IEP', definition: 'Individualized Education Program; legally binding document outlining special education services' },
        { term: '504 plan', definition: 'Accommodations plan under Section 504 for students who don\'t qualify for IEP' },
      ],
      analogies: [
        'Stimulant medication might seem counterintuitive, but it\'s like turning up the volume on the "focus" part of the brain, which actually helps calm things down.',
        'Behavioral therapy is like building muscles - it takes practice and repetition to strengthen good habits.',
      ],
    },
    3: {
      level: 3,
      summary: 'ADHD involves executive function deficits related to prefrontal cortical dysfunction and catecholamine dysregulation, while specific learning disorders reflect neurological differences in processing pathways, requiring comprehensive evaluation and multimodal treatment.',
      explanation: `Evidence-based evaluation and treatment of ADHD and learning disorders integrates neuroscience with clinical practice.

**Neurobiological Basis of ADHD:**

**Executive Function Model:**
- ADHD as disorder of executive functions
- Working memory deficits
- Inhibitory control impairment
- Cognitive flexibility challenges
- Planning and organization difficulties

**Brain Regions Involved:**
- Prefrontal cortex: Executive functions, attention
- Basal ganglia: Motor control, habit formation
- Cerebellum: Timing, coordination
- Anterior cingulate: Attention allocation

**Neuroimaging Findings:**
- Reduced prefrontal cortical volume
- Delayed cortical maturation (approximately 3 years)
- Altered functional connectivity
- Reduced activation during attention tasks

**Neurotransmitter Systems:**
- Dopamine: Reward, motivation, attention
- Norepinephrine: Arousal, alertness
- Both systems hypoactive in ADHD

**Comprehensive ADHD Evaluation:**

**AAP Guidelines (2019 Update):**
- Use DSM-5 criteria
- Information from multiple sources (parent, teacher, child)
- Validated rating scales
- Screen for comorbid conditions
- Rule out medical/environmental causes

**Differential Diagnosis:**

| Condition | Distinguishing Features |
|-----------|-------------------------|
| Anxiety | Worry-driven inattention, somatic symptoms |
| Depression | Mood symptoms, anhedonia |
| Sleep disorders | Fatigue-driven symptoms, improve with sleep |
| Hearing/vision | Specific sensory deficits |
| Substance use | Adolescent onset, other signs |
| Trauma/PTSD | Hypervigilance, avoidance |
| Intellectual disability | Global deficits |

**Medical Workup:**
- Vision and hearing screening
- Thyroid function if indicated
- Sleep evaluation (sleep disorders common)
- No routine EKG needed unless cardiac history/symptoms

**Pharmacotherapy - Detailed:**

**Stimulants:**

*Methylphenidate Products:*
- Immediate release: 3-4 hour duration
- Intermediate (SR, ER): 6-8 hours
- Long-acting (Concerta, Quillivant XR): 10-12 hours
- Transdermal (Daytrana): 9-12 hours

*Amphetamine Products:*
- Mixed amphetamine salts (Adderall): IR or XR
- Lisdexamfetamine (Vyvanse): Prodrug, 12+ hours
- Dextroamphetamine (Dexedrine)

*Dosing Strategy:*
- Start low, titrate slowly
- Methylphenidate: Start 5 mg BID or equivalent long-acting
- Amphetamines: Start 5 mg daily or equivalent
- Titrate to response (most respond at moderate doses)

*Side Effects:*
- Decreased appetite, weight loss
- Sleep disturbance
- Headache, stomachache
- Mood lability, irritability
- Tics (may unmask or worsen)
- Rare: Cardiovascular events, psychosis

**Non-Stimulants:**

| Medication | Mechanism | Advantages | Considerations |
|------------|-----------|------------|----------------|
| Atomoxetine | NRI | No abuse potential, 24h coverage, helps anxiety | 4-6 weeks to full effect, GI side effects |
| Guanfacine ER | α2A agonist | Helps hyperactivity/impulsivity, tics | Sedation, hypotension |
| Clonidine ER | α2 agonist | Helps sleep, aggression | More sedation than guanfacine |
| Viloxazine | NRI | Newer option, helps anxiety | Limited long-term data |

**Specific Learning Disorders - Neurobiological Basis:**

**Dyslexia:**
- Phonological processing deficit
- Left temporoparietal dysfunction
- Reduced activation in angular gyrus, Wernicke's area
- Genetic contribution (DCDC2, KIAA0319 genes)

**Components of Reading:**
- Phonemic awareness: Identifying/manipulating sounds
- Phonics: Sound-letter correspondence
- Fluency: Accurate, automatic reading
- Vocabulary: Word knowledge
- Comprehension: Understanding meaning

**Evidence-Based Reading Interventions:**
- Orton-Gillingham: Structured, multisensory, phonics-based
- Wilson Reading System
- Lindamood-Bell
- Must be systematic and explicit

**School-Based Services:**

**IDEA (Individuals with Disabilities Education Act):**
- Free appropriate public education (FAPE)
- Requires specific learning disability or other health impairment (ADHD)
- Results in IEP with goals and services

**Section 504:**
- Civil rights law requiring accommodations
- Lower threshold than IDEA
- No specialized instruction, but accommodations

**Common Accommodations:**
- Extended time on tests
- Preferential seating
- Reduced homework load
- Breaks
- Audiobooks, text-to-speech
- Calculator use for dyscalculia`,
      keyTerms: [
        { term: 'executive function', definition: 'Higher-order cognitive skills including working memory, inhibitory control, and cognitive flexibility' },
        { term: 'phonological processing', definition: 'Ability to perceive and manipulate sounds in language; core deficit in dyslexia' },
        { term: 'prodrug', definition: 'Medication that is converted to active form in the body; lisdexamfetamine is prodrug of amphetamine' },
        { term: 'IDEA', definition: 'Individuals with Disabilities Education Act; federal law ensuring special education services' },
      ],
      clinicalNotes: 'Before starting stimulants, assess for: personal/family history of sudden death or cardiac problems, current cardiac symptoms, history of tics or Tourette syndrome, current substance abuse or high risk. EKG is not routinely required but should be obtained if cardiac concerns.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of ADHD involves recognition of its neurobiological heterogeneity, genetic architecture, and extended phenotype across the lifespan, while precision approaches to treatment selection and management of complex comorbidities optimize outcomes.',
      explanation: `Complex ADHD and learning disorder management requires integration of neuroscience, genetics, and precision medicine approaches.

**Genetic and Neurobiological Heterogeneity:**

**ADHD Genetics:**
- Heritability: 70-80%
- Polygenic architecture (many small effect variants)
- GWAS hits: DAT1, DRD4, DRD5, SNAP25
- Rare CNVs in some cases
- Gene-environment interaction important

**Neuroimaging Subtypes:**
- Hypoactive prefrontal type
- Reward circuit dysfunction type
- Default mode network interference type
- Cerebellar timing dysfunction type

**Extended ADHD Phenotype:**

*Emotional Dysregulation:*
- Not in DSM criteria but highly prevalent
- Irritability, frustration intolerance
- Emotional impulsivity
- Deficient emotional self-regulation (DESR)

*Sluggish Cognitive Tempo (SCT):*
- Daydreaming, mental fogginess
- Slow processing speed
- May be distinct from ADHD inattentive presentation
- Less responsive to stimulants

*ADHD and Sleep:*
- Delayed sleep phase common
- Sleep onset insomnia frequent
- May mimic or worsen ADHD symptoms
- Consider sleep evaluation if symptoms persist

**Complex Comorbidity Management:**

**ADHD + Anxiety:**
- Occurs in 25-50%
- Can worsen with stimulants
- Consider non-stimulants (atomoxetine, guanfacine) first
- Combination with SSRI if needed

**ADHD + Depression:**
- Screen carefully (overlap symptoms)
- May need to treat both
- Atomoxetine may help both
- Stimulants don't worsen depression in most

**ADHD + Autism Spectrum Disorder:**
- DSM-5 allows dual diagnosis
- Stimulants help ADHD symptoms but may be less tolerated
- Start very low, titrate slowly
- Consider guanfacine

**ADHD + Tic Disorder:**
- Stimulants do NOT cause tics but may unmask
- Can use stimulants with careful monitoring
- Alpha-agonists (guanfacine, clonidine) help both
- Atomoxetine safe option

**ADHD + Substance Use:**
- Untreated ADHD increases SUD risk
- Treating ADHD reduces SUD risk
- Long-acting formulations preferred
- Monitor closely; consider non-stimulants if high risk

**Medication Optimization:**

**Inadequate Response to First Stimulant:**
1. Optimize dose (may need higher than initial)
2. Try different delivery mechanism (IR vs. ER)
3. Try different stimulant class (MPH to amphetamine or vice versa)
4. Add non-stimulant (guanfacine ER)
5. Consider non-stimulant monotherapy

**Combination Therapy:**
- Stimulant + guanfacine: Augments effect, helps sleep/irritability
- Stimulant + atomoxetine: Extended coverage
- Morning long-acting + afternoon booster

**Preschool ADHD (Age 4-5):**
- Behavioral therapy first-line (AAP)
- Methylphenidate if behavioral therapy insufficient
- Lower starting doses (2.5 mg)
- More side effects common

**Adult ADHD Transition:**
- Symptoms persist in 60-70%
- Presentation may shift (less hyperactivity)
- Functional impairment continues
- Transition planning important

**Learning Disorders - Advanced Concepts:**

**Reading Network Dysfunction:**
- Posterior reading system: Word form area, temporoparietal
- Anterior system: Broca's area, articulation
- Dyslexia: Underactivation of posterior system

**Intervention Response Predictors:**
- Rapid automatized naming (RAN)
- Phonemic awareness
- Letter knowledge
- Earlier intervention = better outcomes

**Mathematics Learning Disability:**
- Number sense deficits
- Intraparietal sulcus dysfunction
- Number line estimation impaired
- May benefit from concrete manipulatives

**Twice-Exceptional Students:**
- Gifted + learning disability
- Often missed due to compensation
- May underachieve despite high ability
- Needs both enrichment and remediation

**Psychoeducational Assessment:**

**Comprehensive Evaluation:**
- Cognitive: Full Scale IQ, working memory, processing speed
- Achievement: Reading (decoding, fluency, comprehension), math, writing
- Processing: Phonological, visual-spatial, executive
- Behavioral: ADHD, anxiety, depression screens

**Pattern Analysis:**
- Processing speed/working memory deficits common in ADHD
- Specific phonological deficits in dyslexia
- Math fact fluency deficits in dyscalculia

**Qualification Criteria:**
- IDEA: Adverse educational impact
- Discrepancy model largely replaced by RTI
- Pattern of strengths and weaknesses (PSW) model emerging`,
      keyTerms: [
        { term: 'sluggish cognitive tempo', definition: 'Presentation with mental fogginess, daydreaming, and slow processing; may be distinct from ADHD' },
        { term: 'deficient emotional self-regulation', definition: 'Emotional dysregulation component of ADHD including irritability and low frustration tolerance' },
        { term: 'twice-exceptional', definition: 'Students who are both gifted and have a disability such as learning disorder or ADHD' },
        { term: 'response to intervention', definition: 'Model identifying learning disabilities based on response to evidence-based instruction tiers' },
      ],
      clinicalNotes: 'Combining stimulants with alpha-agonists is safe and effective when monotherapy insufficient. Guanfacine ER can help with emotional dysregulation and sleep. For ADHD + anxiety, start with atomoxetine or guanfacine rather than stimulants.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of ADHD reflects advances in neuroimaging, genetics, and developmental psychopathology, while precision medicine approaches leverage biomarkers and machine learning for treatment optimization, and novel therapeutics target specific pathophysiological mechanisms.',
      explanation: `State-of-the-art ADHD and learning disorder science integrates multiple disciplines toward precision approaches.

**Precision Medicine in ADHD:**

**Biomarker Research:**

*Neuroimaging Biomarkers:*
- Functional connectivity patterns distinguish subtypes
- Default mode network interference correlates with symptoms
- White matter tract integrity predicts treatment response
- Not yet clinically applicable

*Neurophysiological Markers:*
- EEG theta/beta ratio elevated in some ADHD
- FDA-cleared EEG system (NEBA) as diagnostic aid
- Limited clinical utility currently

*Genetic Markers:*
- Pharmacogenomic testing (CYP2D6 for atomoxetine)
- Polygenic risk scores under development
- COMT genotype may influence stimulant response

**Machine Learning Applications:**
- Diagnostic prediction from clinical data
- Treatment response prediction
- Natural language processing of clinical notes
- Multimodal data integration

**Novel Therapeutics:**

**Emerging Medications:**

| Agent | Mechanism | Status | Notes |
|-------|-----------|--------|-------|
| Centanafadine | Triple reuptake inhibitor | Phase 3 | DA/NE/5-HT |
| Mazindol | DA/NE reuptake inhibitor | Phase 2 | Wake-promoting |
| AR-19 | Glutamate modulator | Early trials | Novel mechanism |
| Dasotraline | DA/NE reuptake inhibitor | Development paused | Long half-life |

**Non-Pharmacological Innovations:**

*Neurofeedback:*
- Training self-regulation of brain activity
- Mixed evidence; some RCT support
- Time-intensive
- May help some individuals

*Transcranial Direct Current Stimulation (tDCS):*
- Non-invasive brain stimulation
- Targets prefrontal cortex
- Research stage in children
- Safety and efficacy being established

*Digital Therapeutics:*
- EndeavorRx (AKL-T01): FDA-cleared video game for ADHD
- Targets attention through adaptive difficulty
- Adjunctive to standard treatment
- Modest effect sizes

*Cognitive Training:*
- Working memory training programs (Cogmed)
- Effects may not generalize
- Not recommended as primary treatment

**ADHD Across the Lifespan:**

**Developmental Trajectory:**
- Hyperactivity decreases with age
- Inattention more persistent
- Executive dysfunction continues
- Emotional dysregulation may increase

**Adult ADHD Manifestations:**
- Time management difficulties
- Relationship problems
- Occupational underachievement
- Financial difficulties
- Higher accident rates

**Long-Term Outcomes:**
- Increased risk: SUD, accidents, incarceration
- Lower educational attainment
- Treatment improves outcomes
- Protective factors: High IQ, supportive family

**Pharmacogenomics:**

**CYP Metabolism:**
- CYP2D6: Metabolizes atomoxetine
- Poor metabolizers: Higher levels, more side effects
- Ultrarapid metabolizers: May need higher doses
- Testing available but not routinely recommended

**Pharmacodynamic Variants:**
- DAT1: Variable repeat affects stimulant response
- COMT: Met/Met may respond better to amphetamines
- DRD4: 7-repeat associated with poorer response

**Learning Disorders - Neuroscience Update:**

**Reading Network Plasticity:**
- Intervention normalizes brain activation patterns
- Early intervention produces greater normalization
- Compensatory pathways develop with treatment

**Genetics of Dyslexia:**
- Multiple genes identified (DCDC2, KIAA0319, ROBO1, DYX1C1)
- Neuronal migration and axon guidance genes
- Genetic testing not yet clinically useful

**Intervention Neuroscience:**
- fMRI shows changed activation after intervention
- White matter changes with reading instruction
- Structural brain changes possible with intervention

**Math Disability Research:**
- Parietal cortex number processing
- Frontoparietal attention networks
- Number sense training shows promise

**Systems Approaches:**

**School-Based Mental Health:**
- Integrated behavioral health
- Universal screening
- Tiered intervention systems
- Teacher training in behavior management

**Technology-Enhanced Interventions:**
- Adaptive learning platforms
- Speech-to-text for writing difficulties
- Text-to-speech for reading
- Organizational apps and reminders

**Implementation Science:**
- Evidence-based practice dissemination
- Fidelity monitoring
- Quality improvement in ADHD care
- Reducing disparities in diagnosis and treatment

**Future Directions:**

*Precision Diagnostics:*
- Multimodal biomarker panels
- Objective computerized testing
- Machine learning diagnostic support

*Precision Treatment:*
- Biomarker-guided medication selection
- Individualized stimulant dosing
- Targeted non-pharmacological interventions

*Prevention:*
- Early identification in preschool
- Preventive interventions
- Addressing environmental risk factors

*Neurodiversity Framework:*
- Recognizing ADHD strengths
- Environmental accommodation vs. "treatment"
- Self-advocacy and empowerment
- Shared decision-making`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Aggregate genetic score combining effects of many variants to predict disease risk or treatment response' },
        { term: 'digital therapeutics', definition: 'Software-based interventions designed to treat medical conditions; EndeavorRx FDA-cleared for ADHD' },
        { term: 'neurofeedback', definition: 'Training technique providing real-time feedback of brain activity to promote self-regulation' },
        { term: 'default mode network', definition: 'Brain network active during rest/daydreaming; inappropriate activation during tasks associated with ADHD' },
        { term: 'neurodiversity', definition: 'Framework viewing neurological differences as natural human variation rather than solely as disorders' },
      ],
      clinicalNotes: `**Current Practice Pearls:**
- EndeavorRx (prescription video game) FDA-cleared as ADHD adjunctive treatment for ages 8-12
- Pharmacogenomic testing for CYP2D6 can guide atomoxetine dosing but is not routinely recommended
- Viloxazine (Qelbree) is newer non-stimulant option approved for children and adolescents
- Long-acting stimulants preferred over short-acting for adherence and abuse potential
- Address sleep problems (common in ADHD) as they can worsen symptoms and treatment response`,
    },
  },

  media: [
    {
      id: 'adhd-evaluation-flowchart',
      type: 'diagram',
      filename: 'adhd-evaluation-flowchart.svg',
      title: 'ADHD Evaluation and Treatment Flowchart',
      description: 'Clinical algorithm for ADHD diagnosis and stepwise treatment',
    },
    {
      id: 'learning-disorders-types',
      type: 'diagram',
      filename: 'learning-disorders-types.svg',
      title: 'Specific Learning Disorders Overview',
      description: 'Types of learning disorders and their key features',
    },
  ],
  citations: [
    {
      id: 'aap-adhd-2019',
      type: 'article',
      title: 'Clinical Practice Guideline for the Diagnosis, Evaluation, and Treatment of ADHD in Children and Adolescents',
      authors: ['Wolraich ML', 'Hagan JF', 'Allan C'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2019-2528',
    },
    {
      id: 'dsm-5',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition',
      source: 'American Psychiatric Association',
    },
    {
      id: 'nelson-adhd',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      authors: ['Kliegman RM', 'St. Geme JW'],
      source: 'Elsevier',
      chapter: 'Attention-Deficit/Hyperactivity Disorder',
    },
  ],
  crossReferences: [
    { targetId: 'pediatrics-developmental-milestones', targetType: 'topic', relationship: 'related', label: 'Developmental Milestones' },
    { targetId: 'psychiatry-adhd', targetType: 'topic', relationship: 'related', label: 'Adult ADHD' },
    { targetId: 'nervous-system', targetType: 'system', relationship: 'related', label: 'Nervous System' },
  ],
  tags: {
    systems: ['nervous'],
    topics: ['pediatrics', 'psychiatry', 'neurodevelopment', 'education'],
    keywords: ['ADHD', 'attention', 'hyperactivity', 'learning disability', 'dyslexia', 'stimulants', 'executive function'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'psychiatry'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default adhdAndLearningDisorders;
