/**
 * Huntington Disease - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const huntington: EducationalContent = {
  id: 'condition-huntington-disease',
  type: 'condition',
  name: 'Huntington Disease',
  nameEs: 'Enfermedad de Huntington',
  alternateNames: ['HD', 'Huntington Chorea', 'Huntington\'s Disease'],
  hpoId: 'HP:0001268',

  levels: {
    1: {
      level: 1,
      summary: 'Huntington disease is an inherited brain disorder that causes uncontrolled movements, emotional problems, and loss of thinking ability. Symptoms usually appear between ages 30 and 50.',
      explanation: `Huntington disease (HD) is a genetic condition that causes progressive breakdown of nerve cells in the brain. It affects a person ability to move, think, and feel emotions.

**What causes HD:**
- Caused by a change in a single gene
- A parent with HD has a 50% chance of passing it to each child
- The change causes damage to brain cells over time

**Main symptoms:**
- Uncontrolled movements (chorea)
- Difficulty walking and keeping balance
- Trouble speaking and swallowing
- Memory and thinking problems
- Depression and mood changes
- Personality changes

**How it progresses:**
- Symptoms usually start between ages 30-50
- Slowly gets worse over 10-25 years
- Eventually affects all daily activities
- Eventually requires full-time care

**Treatment:**
- No cure yet
- Medicines can help control movements
- Therapy helps with speech and swallowing
- Support for emotional challenges
- Research continues on new treatments

**Genetic testing:**
- Can test for HD before symptoms start
- Difficult decision for many families
- Genetic counseling recommended`,
      keyTerms: [
        { term: 'chorea', definition: 'Involuntary, dance-like movements that are a hallmark of Huntington disease' },
        { term: 'inherited', definition: 'Passed down from parents to children through genes' },
        { term: 'genetic counseling', definition: 'Discussion with a specialist about inherited conditions and testing' },
      ],
      analogies: [
        'Huntington disease is like a computer program with a glitch—the instructions for brain cells gradually become corrupted, causing the system to malfunction over time.',
        'Think of HD like a book with a typo that gets worse. A single spelling error in the gene causes the brain is message to become increasingly garbled.',
      ],
      examples: [
        'A 40-year-old man develops fidgety movements and mood swings. His father had similar symptoms. Genetic testing confirms Huntington disease.',
        'A woman whose mother died of HD considers genetic testing to learn if she inherited the condition.',
      ],
      patientCounselingPoints: [
        'If you have a family history of HD, consider genetic counseling before testing.',
        'Build a support network of family, friends, and healthcare providers.',
        'Plan for the future while you can still make decisions.',
        'Maintain physical activity as long as possible—it may help slow symptoms.',
        'Address mental health needs—depression is common and treatable.',
      ],
    },
    2: {
      level: 2,
      summary: 'Huntington disease is an autosomal dominant neurodegenerative disorder caused by CAG trinucleotide repeat expansion in the HTT gene, leading to progressive motor, cognitive, and psychiatric symptoms.',
      explanation: `## Genetics

**HTT Gene and CAG Repeats:**
- Gene: HTT (huntingtin) on chromosome 4
- Mutation: CAG trinucleotide repeat expansion
- Normal: ≤26 repeats
- Intermediate: 27-35 repeats (unstable, not HD)
- Reduced penetrance: 36-39 repeats
- Full penetrance: ≥40 repeats

**Inheritance:**
- Autosomal dominant
- 50% chance of inheriting from affected parent
- Anticipation: Expands in successive generations
- Paternal transmission: Larger expansions

**Genetic Anticipation:**
- CAG repeats expand when passed to child
- Earlier onset in next generation
- More severe disease
- Especially with paternal transmission

## Clinical Features

**Motor Symptoms:**
- Chorea (involuntary movements)
- Dystonia (sustained muscle contractions)
- Bradykinesia (slow movement)
- Dysarthria (speech difficulty)
- Dysphagia (swallowing difficulty)
- Gait disturbance, falls

**Cognitive Symptoms:**
- Executive dysfunction
- slowed thinking
- Memory problems
- Poor judgment
- Difficulty planning
- Loss of initiative

**Psychiatric Symptoms:**
- Depression (most common)
- Anxiety
- Irritability, aggression
- Apathy
- Obsessive-compulsive traits
- Psychosis (less common)

## Disease Course

**Early Stage:**
- Subtle motor changes
- Mood changes, irritability
- Mild cognitive slowing
- Can still work and drive

**Middle Stage:**
- More obvious chorea
- Difficulty with daily activities
- Work becomes impossible
- Driving unsafe
- Needs some assistance

**Late Stage:**
- Severe chorea → rigidity
- Minimal speech
- Bedbound or wheelchair
- Complete dependence
- Dysphagia severe

**Age of Onset:**
- Juvenile HD: <20 years (usually paternal inheritance)
- Typical: 30-50 years
- Late onset: >60 years

**Life Expectancy:**
- 15-20 years after onset
- Earlier onset = faster progression
- Pneumonia common cause of death
- Suicide risk increased

## Diagnosis

**Clinical Criteria:**
- Progressive motor symptoms
- Family history (usually)
- Excluded other causes

**Genetic Testing:**
- Definitive diagnosis
- Counts CAG repeats
- Available for symptomatic and asymptomatic
- Requires genetic counseling

**Predictive Testing:**
- For at-risk asymptomatic individuals
- Structured protocol required
- Counseling before and after
- Confidentiality issues

**Neuroimaging:**
- MRI: Caudate atrophy
- CT: Caudate and putamen atrophy
- PET: Hypometabolism in basal ganglia
- Not diagnostic but supportive`,
      keyTerms: [
        { term: 'autosomal dominant', definition: 'Inheritance pattern where one copy of abnormal gene causes disease' },
        { term: 'CAG repeat', definition: 'Sequence of three DNA bases repeated multiple times; expanded in HD' },
        { term: 'anticipation', definition: 'Earlier onset and increased severity in successive generations' },
        { term: 'caudate atrophy', definition: 'Shrinkage of the caudate nucleus in the brain, characteristic of HD' },
      ],
      analogies: [
        'The CAG repeat is like a stutter in the genetic code—the more repeats, the more severe the stutter, and the earlier symptoms appear.',
      ],
      clinicalNotes: 'Suicide risk is significantly elevated in HD. Screen all patients for depression and suicidal ideation. Genetic testing of asymptomatic individuals should only occur in the context of comprehensive genetic counseling.',
    },
    3: {
      level: 3,
      summary: 'Huntington disease management includes symptomatic treatment of chorea (tetrabenazine, deutetrabenazine), psychiatric management (antidepressants, antipsychotics), cognitive support, and multidisciplinary care for progressive disability.',
      explanation: `## Motor Symptom Management

**Chorea Treatment:**

**VMAT2 Inhibitors:**
- Tetrabenazine (Xenazine): 12.5-100 mg daily in 3 divided doses
- Deutetrabenazine (Austedo): 6-48 mg daily in 2 divided doses
- Both reduce chorea effectively
- Side effects: depression, sedation, parkinsonism

**Other Options:**
- Atypical antipsychotics: Olanzapine, risperidone
- Typical antipsychotics: Haloperidol (less preferred)
- Amantadine: May help chorea
- Levodopa: For parkinsonism in late HD

**Dystonia Management:**
- Botulinum toxin injections
- Muscle relaxants
- Deep brain stimulation (experimental)

**Gait and Balance:**
- Physical therapy
- Assistive devices
- Fall prevention
- Home safety assessment

## Psychiatric Management

**Depression:**
- SSRI first line: Citalopram, sertraline, escitalopram
- SNRI: Venlafaxine, duloxetine
- Mirtazapine: For weight loss, insomnia
- Monitor for suicidality

**Anxiety:**
- SSRIs
- Benzodiazepines: Short-term use
- Buspirone: Long-term option

**Irritability and Aggression:**
- Atypical antipsychotics: Olanzapine, quetiapine
- Mood stabilizers: Valproate
- SSRI: Sometimes effective

**Psychosis:**
- Atypical antipsychotics
- Avoid high-potency typicals
- Monitor for side effects

**Obsessive-Compulsive Features:**
- SSRIs first line
- CBT for compulsions
- Atypical antipsychotics for severe

## Cognitive and Behavioral Support

**Cognitive Interventions:**
- Cognitive stimulation
- Memory strategies
- Routine and structure
- Simplify instructions
- Written reminders

**Behavioral Issues:**
- Consistent environment
- Reduce stimulation
- Behavioral interventions
- Pharmacologic when needed

**Speech and Swallowing:**
- Speech therapy assessment
- Dietary modifications
- Thickened liquids
- Feeding tube consideration (late stage)

## Multidisciplinary Care

**Team Members:**
- Neurologist (movement disorders specialist)
- Psychiatrist
- Genetic counselor
- Social worker
- Physical therapist
- Occupational therapist
- Speech therapist
- Dietitian
- Psychologist

**Care Coordination:**
- HD clinic if available
- Regular follow-up
- Advance care planning
- Support groups
- Respite care for caregivers

## Nutrition and Weight Management

**Weight Loss:**
- Common in HD
- High-calorie diet
- Small, frequent meals
- Liquid supplements
- Monitor weight weekly

**Dysphagia Management:**
- Speech therapy evaluation
- Modified diet textures
- Swallowing techniques
- Feeding tube when necessary

## Reproductive Counseling

**Family Planning:**
- 50% transmission risk
- Options: natural conception, PGD, adoption, donor gametes
- Decision-making is personal
- Non-directive counseling

**Preimplantation Genetic Diagnosis (PGD):**
- IVF with genetic testing
- Select embryos without HD mutation
- Allows biological children without HD
- Expensive, not guaranteed

**Prenatal Testing:**
- CVS (10-12 weeks)
- Amniocentesis (15-20 weeks)
- Decision about continuation

## Juvenile Huntington Disease

**Presentation:**
- <20 years old
- More likely paternal transmission
- Very large CAG repeats (>60)
- Different features

**Symptoms:**
- Dystonia > chorea
- Seizures
- Rapid decline
- Behavioral problems
- Learning difficulties

**Prognosis:**
- Faster progression
- Shorter survival
- Poorer response to treatment`,
      keyTerms: [
        { term: 'VMAT2 inhibitor', definition: 'Drug that blocks vesicular monoamine transporter 2; reduces dopamine availability to treat chorea' },
        { term: 'PGD', definition: 'Preimplantation genetic diagnosis; testing embryos for HD before implantation' },
        { term: 'CVS', definition: 'Chorionic villus sampling; prenatal test for HD' },
      ],
      clinicalNotes: 'Tetrabenazine and deutetrabenazine are FDA-approved for chorea in HD. Monitor for depression when prescribing these medications. All patients with HD should be screened for depression and suicidal ideation at every visit.',
    },
    4: {
      level: 4,
      summary: 'Advanced HD management addresses weight loss with nutritional interventions, treatment of refractory psychiatric symptoms, management of severe dysphagia with feeding tubes, and consideration of deep brain stimulation for intractable chorea.',
      explanation: `## Nutrition and Metabolism

**Pathophysiology of Weight Loss:**
- Hypermetabolic state
- Increased energy expenditure at rest
- Chorea increases calorie burn
- Dysphagia limits intake
- Oropharyngeal incoordination

**Nutritional Assessment:**
- BMI and weight trends
- Calorie needs estimation
- Swallowing evaluation (VFSS, FEES)
- Micronutrient levels

**Interventions:**
- High-calorie diet (3000+ kcal/day)
- Oral nutritional supplements
- Behavioral strategies for eating
- Speech therapy for swallowing
- Dietitian involvement

**Feeding Tube Considerations:**
- PEG tube when weight loss severe
- Improves nutrition and survival
- Does NOT prolong inevitable decline
- Timing: individual decision
- Social and ethical considerations

## Psychiatric Complications

**Treatment-Resistant Depression:**
- Combination pharmacotherapy
- ECT: Effective for HD depression
- TMS: Limited data
- Closer monitoring needed

**Severe Aggression:**
- Atypical antipsychotics
- Mood stabilizers
- Beta-blockers (propranolol)
- Consider environmental factors
- Safety of patient and caregivers

**Psychosis Management:**
- Atypical antipsychotics first
- Clozapine: Refractory cases
- Monitor for metabolic syndrome
- Watch for neuroleptic sensitivity

**Suicide Prevention:**
- High lifetime risk (25% attempt)
- Risk factors: depression, younger age
- Screen at every visit
- Crisis planning
- Remove firearms

## Deep Brain Stimulation (DBS)

**Targets:**
- Globus pallidus interna (GPi)
- Subthalamic nucleus (STN)
- Centromedian/parafascicular thalamus

**Indications:**
- Medically refractory chorea
- Severe dystonia
- Carefully selected patients

**Outcomes:**
- Chorea reduction
- Variable functional benefit
- Does NOT improve cognition
- Does NOT slow progression
- May help with quality of life

**Limitations:**
- Not disease-modifying
- Surgical risks
- Hardware complications
- Programming needed
- Expensive

## Sleep Disorders

**Common Issues:**
- Insomnia
- REM sleep behavior disorder
- Periodic limb movements
- Sleep apnea

**Management:**
- Sleep hygiene
- Treat apnea if present
- Melatonin for circadian rhythm
- Clonazepam for RBD
- Limit sedating daytime meds

## Seizures

**Juvenile HD:**
- Seizures common in JHD
- Treat with standard AEDs
- Avoid phenytoin (worsens chorea)

**Adult HD:**
- Seizures less common
- May occur in late stages
- Standard treatment

## Palliative Care

**Early Integration:**
- Not just end-of-life
- Symptom management focus
- Goals of care discussions
- Advance directives

**End-of-Life Care:**
- Dysphagia management: feeding tube vs comfort feeding
- Hospice appropriate in late stages
- Focus on comfort
- Support for family
- Bereavement support

**Common Symptoms at End of Life:**
- Severe dysphagia
- Contractures
- Communication difficulties
- Recurrent infections
- Pain (can be assessed)`,
      keyTerms: [
        { term: 'PEG tube', definition: 'Percutaneous endoscopic gastrostomy tube; feeding tube placed through abdominal wall' },
        { term: 'GPi', definition: 'Globus pallidus interna; target for DBS in HD' },
        { term: 'ECT', definition: 'Electroconvulsive therapy; effective for treatment-resistant depression in HD' },
      ],
      clinicalNotes: 'Weight loss is common and multifactorial in HD. Early involvement of speech therapy and nutrition is essential. PEG tube placement should be discussed before severe dysphagia develops. Suicide prevention is crucial—screen at every visit.',
    },
    5: {
      level: 5,
      summary: 'Contemporary HD research focuses on huntingtin-lowering therapies including antisense oligonucleotides, RNA interference, and gene editing approaches, along with neuroprotective strategies and biomarker development for clinical trials.',
      explanation: `## Disease-Modifying Therapies

**Antisense Oligonucleotides (ASO):**
- Tominersen (RG6042): Intrathecal administration
- Phase I/II showed dose-dependent HTT lowering
- Phase III (GENERATION HD1) stopped for futility
- Lessons: Earlier intervention may be needed
- New generation ASOs in development

**RNA Interference (RNAi):**
- AMT-130: AAV5-miHTT (uniQure)
- One-time intrastriatal injection
- Ongoing phase I/II trials
- Durable huntingtin lowering in animal models

**CRISPR/Cas9 Gene Editing:**
- Permanent inactivation of mutant HTT
- Ex vivo and in vivo approaches
- Off-target effects concern
- Delivery challenges
- Preclinical stage

**Small Molecule Splice Modulators:**
- Promote exon skipping
- Reduce toxic huntingtin
- Oral administration possible
- Early clinical trials

## Pathogenesis Insights

**Huntingtin Protein Function:**
- Normal huntingtin: Important for neuronal health
- Mutant huntingtin: Toxic gain-of-function
- Also loss of normal function
- Affects multiple cellular processes

**Cellular Mechanisms:**
- Transcriptional dysregulation
- Mitochondrial dysfunction
- Impaired axonal transport
- Synaptic dysfunction
- Excitotoxicity
- Proteostasis failure

**Protein Aggregation:**
- Mutant huntingtin forms inclusions
- Intraneuronal inclusions: Hallmark
- Correlation with toxicity debated
- May be protective (sequestration)

## Biomarker Development

**Neurofilament Light Chain (NfL):**
- Marker of neuronal injury
- Elevated in presymptomatic carriers
- Correlates with disease burden
- Predicts progression
- Accessible in CSF and blood

**Imaging Biomarkers:**
- Volumetric MRI: Striatal atrophy
- Diffusion tensor imaging: White matter changes
- Functional MRI: Network connectivity
- PET: Metabolic changes

**Cognitive and Motor Biomarkers:**
- Quantitative motor measures
- Digital phenotyping
- Cognitive composite scores
- Predict clinical onset

## Genetic Modifiers

**Genes Influencing Age of Onset:**
- DNA repair genes important
- FAN1, MSH3, PMS2, RRAS2
- Explain some variability
- Potential therapeutic targets

**Phenotypic Variability:**
- Same CAG repeat: Different onset
- Environmental factors?
- Other genetic factors
- Epigenetic modifications

## Clinical Trial Design

**Challenges:**
- Slow progression
- Small patient population
- Heterogeneous presentation
- Placebo effects in trials

**Solutions:**
- Enrichment strategies
- Composite endpoints
- Biomarker-driven
- Adaptive designs
- Natural history data

**Trial Endpoints:**
- Total Functional Capacity (TFC)
- UHDRS (Unified HD Rating Scale)
- Motor scores
- Cognitive composites
- Biomarker changes

## Emerging Therapeutics

**Neuroprotective Strategies:**
- CREB activators
- PPAR-gamma agonists
- Mitochondrial enhancers
- Antioxidants (largely disappointing)

**Symptomatic Innovations:**
- Selective dopamine depletion
- Novel VMAT2 inhibitors
- Non-pharmacologic interventions

**Gene Silencing 2.0:**
- Allele-specific approaches
- SNPs linked to expanded allele
- CRISPR base editing
- Trans-splicing

## Presymptomatic Management

**Predictive Testing Protocols:**
- Multi-session counseling
- Neurological and psychological assessment
- Support person required
- Post-test follow-up
- Confidentiality protection

**At-Risk Research:**
- PREDICT-HD study
- Track-HD study
- HD-COPE
- Identify earliest changes

**Intervention Timing:**
- When to treat pre-HD?
- Biomarker thresholds?
- Risk/benefit considerations`,
      keyTerms: [
        { term: 'ASO', definition: 'Antisense oligonucleotide; synthetic strand of DNA that binds to target RNA' },
        { term: 'NfL', definition: 'Neurofilament light chain; protein released from damaged neurons, biomarker in HD' },
        { term: 'allele-specific', definition: 'Therapy targeting only mutant huntingtin while sparing normal protein' },
        { term: 'TFC', definition: 'Total Functional Capacity; measure of functional ability in HD (13-0 scale)' },
      ],
      clinicalNotes: 'The field is moving toward earlier intervention in HD, ideally in premanifest stages. Biomarkers like NfL show promise for tracking disease and measuring treatment response. Tominersen phase III trial failed, but provided important lessons about timing and dosing. Gene silencing remains the most promising disease-modifying approach.',
    },
  },

  media: [],
  citations: [
    { id: 'hsga-guidelines', type: 'website', title: 'Huntington Study Group Guidelines', source: 'Huntington Study Group' },
    { id: 'efa-2021', type: 'article', title: 'European Huntington Association Guidelines', source: 'Journal of Huntington\'s Disease' },
  ],
  crossReferences: [
    { targetId: 'condition-parkinsons', targetType: 'condition', relationship: 'related', label: 'Parkinson Disease' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['neurology', 'genetics', 'movement disorders'],
    keywords: ['huntington disease', 'chorea', 'CAG repeat', 'huntingtin', 'genetic testing', 'autosomal dominant'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'psychiatry'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default huntington;
