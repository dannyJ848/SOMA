/**
 * Stroke Cognitive Rehabilitation - Comprehensive Educational Content
 *
 * Covers cognitive rehabilitation approaches following stroke.
 */

import { EducationalContent } from '../../types';

export const strokeCognitiveRehab: EducationalContent = {
  id: 'rehab-stroke-cognitive-rehab',
  type: 'concept',
  name: 'Stroke Cognitive Rehabilitation',
  alternateNames: ['Cognitive Therapy After Stroke', 'Post-Stroke Cognitive Recovery'],

  levels: {
    1: {
      level: 1,
      summary: 'After a stroke, some people have trouble thinking, remembering, or paying attention. Special exercises can help the brain get better at these things.',
      explanation: `A stroke can affect more than just moving your body. It can also change how you think, remember things, or pay attention.

**What problems can happen?**
- Trouble remembering things
- Hard to pay attention or concentrate
- Difficulty solving problems
- Getting confused easily
- Taking longer to think or respond

**How can therapy help?**
Just like physical therapy helps your muscles, cognitive therapy helps your brain:
- Memory games and exercises
- Practice paying attention
- Learning tricks to remember things
- Breaking big tasks into smaller steps

**What can you do?**
- Use calendars and to-do lists
- Keep a routine
- Take breaks when tired
- Practice brain exercises
- Be patient with yourself

**Good news!**
Many people improve over time with practice and the right help.`,
      keyTerms: [
        { term: 'cognitive', definition: 'Related to thinking, memory, and attention' },
        { term: 'concentration', definition: 'The ability to focus on something' },
        { term: 'memory', definition: 'The ability to remember information' },
      ],
      analogies: [
        'Cognitive therapy is like training your brain the same way you would train your muscles at the gym.',
        'Using memory tricks is like leaving yourself breadcrumbs to find your way back.',
      ],
      examples: [
        'Using a pill organizer to remember medications.',
        'Setting phone reminders for important appointments.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cognitive rehabilitation after stroke targets specific deficits in attention, memory, executive function, and other domains using restorative exercises and compensatory strategies.',
      explanation: `Cognitive impairment affects about one-third of stroke survivors and significantly impacts daily functioning and quality of life.

**Common Cognitive Domains Affected:**

**Attention:**
- Difficulty concentrating
- Easily distracted
- Trouble doing two things at once

**Memory:**
- Forgetting recent events
- Difficulty learning new information
- May need reminders for tasks

**Executive Function:**
- Problem-solving difficulties
- Poor planning and organization
- Trouble starting or finishing tasks
- Impaired judgment

**Processing Speed:**
- Thinking more slowly
- Taking longer to respond
- Mental fatigue

**Visuospatial Skills:**
- Trouble judging distances
- Getting lost easily
- Difficulty with puzzles or maps

**Rehabilitation Approaches:**

**Restorative:**
- Computer-based cognitive training
- Paper-and-pencil exercises
- Attention training programs
- Memory drills

**Compensatory:**
- External aids (calendars, alarms, notes)
- Internal strategies (mnemonics, visualization)
- Environmental modifications
- Routine establishment

**Metacognitive:**
- Self-monitoring training
- Error awareness
- Strategy selection

**The Role of Different Therapists:**
- Occupational therapist: Daily living strategies
- Speech-language pathologist: Language and cognitive-communication
- Neuropsychologist: Assessment and targeted interventions`,
      keyTerms: [
        { term: 'executive function', definition: 'Higher-level thinking skills like planning, organizing, and decision-making' },
        { term: 'compensatory strategies', definition: 'Techniques that work around a deficit rather than directly improving it' },
        { term: 'processing speed', definition: 'How quickly the brain can take in and respond to information' },
        { term: 'visuospatial', definition: 'The ability to understand and use visual and spatial information' },
      ],
      analogies: [
        'Compensatory strategies are like using a calculator when you cannot do math in your head.',
        'Executive function is like the brain\'s CEO - it makes decisions and keeps everything organized.',
      ],
    },
    3: {
      level: 3,
      summary: 'Post-stroke cognitive rehabilitation applies neuropsychological principles through domain-specific interventions, with evidence strongest for attention training and compensatory memory strategies.',
      explanation: `## Vascular Cognitive Impairment

**Spectrum:**
- Post-stroke cognitive impairment (PSCI)
- Vascular mild cognitive impairment
- Vascular dementia

**Prevalence:**
- 30-50% of stroke survivors have cognitive impairment
- Risk of dementia increased 3-fold after stroke
- Contributes significantly to disability

## Assessment

**Screening Tools:**
- Montreal Cognitive Assessment (MoCA)
- Mini-Mental State Examination (MMSE)
- Telephone Interview for Cognitive Status

**Comprehensive Neuropsychological Battery:**
- Attention: Trail Making Test, Digit Span
- Memory: Rey Auditory Verbal Learning Test, Brief Visuospatial Memory Test
- Executive function: Wisconsin Card Sorting, Stroop Test
- Language: Boston Naming Test, verbal fluency
- Visuospatial: Rey Complex Figure, line bisection

## Domain-Specific Interventions

**Attention:**
- Attention Process Training (APT)
- Time Pressure Management
- Dual-task training
- Evidence: Moderate support for direct training

**Memory:**
- Errorless learning techniques
- Spaced retrieval training
- External memory aids (strongest evidence)
- Internal strategies (imagery, association)
- Evidence: Compensatory approaches more effective than drill

**Executive Function:**
- Goal Management Training
- Problem Solving Therapy
- Time pressure management
- Self-monitoring training
- Evidence: Emerging support for metacognitive approaches

**Hemispatial Neglect:**
- Visual scanning training
- Prism adaptation therapy
- Limb activation techniques
- Transcranial stimulation (experimental)

## Factors Affecting Cognitive Recovery

**Stroke-Related:**
- Lesion location (strategic areas: thalamus, hippocampus)
- Stroke volume
- White matter hyperintensity burden
- Recurrent stroke

**Patient-Related:**
- Pre-stroke cognitive reserve
- Education level
- Age
- Cardiovascular risk factors
- Depression

## Pharmacological Approaches

**Cholinesterase Inhibitors:**
- Donepezil, rivastigmine, galantamine
- Some evidence in vascular cognitive impairment
- Not FDA-approved for post-stroke use

**Other Medications:**
- Memantine (limited evidence)
- Antidepressants for comorbid depression
- Stimulants for attention (limited evidence)`,
      keyTerms: [
        { term: 'vascular cognitive impairment', definition: 'Cognitive decline resulting from cerebrovascular disease' },
        { term: 'errorless learning', definition: 'Training approach that prevents errors during learning to strengthen correct responses' },
        { term: 'Goal Management Training', definition: 'Structured program teaching monitoring and management of goals in daily life' },
        { term: 'hemispatial neglect', definition: 'Failure to attend to stimuli on one side of space, usually left side after right hemisphere stroke' },
      ],
      clinicalNotes: 'The MoCA is more sensitive than MMSE for detecting post-stroke cognitive impairment, particularly for attention and executive function deficits common after stroke. A score <26 suggests cognitive impairment requiring further assessment.',
    },
    4: {
      level: 4,
      summary: 'Cognitive rehabilitation after stroke requires individualized approaches based on neuropsychological profiles, with treatment targeting specific neural substrates and incorporating principles of learning, transfer, and generalization.',
      explanation: `## Neuroanatomical Correlates

**Strategic Infarct Locations:**
- Thalamus (memory, attention)
- Caudate nucleus (executive function)
- Angular gyrus (semantic processing)
- Hippocampus (memory consolidation)
- Prefrontal cortex (executive function)

**Network Disruption:**
- Default mode network dysfunction
- Executive control network impairment
- Salience network alterations
- Structural disconnection effects

## Advanced Assessment

**Process-Based Analysis:**
- Not just what is impaired but how
- Error pattern analysis
- Strategy use evaluation
- Ecological validity considerations

**Functional Assessment:**
- Multiple Errands Test
- Executive Function Performance Test
- Assessment of daily functioning
- Caregiver reports

## Treatment Mechanisms

**Principles of Cognitive Rehabilitation:**
1. Restorative: Rebuild impaired function through exercise
2. Compensatory: External aids and internal strategies
3. Adaptive: Modify environment and tasks
4. Metacognitive: Improve awareness and self-regulation

**Transfer and Generalization:**
- Near transfer: Similar tasks improve
- Far transfer: Different real-world tasks improve
- Limited evidence for far transfer
- Ecological training approaches

## Evidence Synthesis

| Domain | Intervention | Evidence Level |
|--------|--------------|----------------|
| Attention | Direct training (APT) | Moderate |
| Memory | External aids | Strong |
| Memory | Internal strategies | Moderate |
| Executive | Goal Management Training | Moderate |
| Neglect | Prism adaptation | Moderate |
| Processing speed | Strategy training | Limited |

## Integrated Approaches

**Cognitive-Communication:**
- Language and cognitive overlap
- Functional communication goals
- Conversation partner training
- Reading and writing rehabilitation

**Cognitive-Motor:**
- Dual-task training
- Cognitive demands in physical rehabilitation
- Virtual reality combining cognitive and motor

**Psychosocial Integration:**
- Depression treatment
- Anxiety management
- Adjustment counseling
- Family education

## Technology Applications

**Computerized Cognitive Training:**
- Standardized dosing
- Adaptive difficulty
- Feedback provision
- Limited transfer evidence

**Assistive Technology:**
- Smartphone applications
- GPS for navigation
- Smart home systems
- Voice-activated assistants

**Virtual Reality:**
- Ecological task simulation
- Immersive attention training
- Executive function scenarios`,
      keyTerms: [
        { term: 'strategic infarct', definition: 'Stroke in location disproportionately affecting cognition relative to size' },
        { term: 'ecological validity', definition: 'Extent to which assessment or intervention reflects real-world functioning' },
        { term: 'Attention Process Training', definition: 'Hierarchical attention training program targeting sustained, selective, alternating, and divided attention' },
        { term: 'near vs far transfer', definition: 'Improvement on similar vs different tasks following training' },
      ],
      clinicalNotes: 'Post-stroke depression occurs in approximately 30% of stroke survivors and significantly worsens cognitive outcomes. Screening and treatment for depression should be integral to cognitive rehabilitation programs.',
    },
    5: {
      level: 5,
      summary: 'Post-stroke cognitive rehabilitation research is advancing toward precision approaches incorporating neuroimaging biomarkers, neuromodulation augmentation, and adaptive computerized interventions to enhance neural substrate-targeted recovery.',
      explanation: `## Biomarkers and Prediction

**Neuroimaging Predictors:**
- White matter hyperintensity burden
- Strategic lesion location
- Network connectivity measures
- Structural reserve (brain volume)

**Genetic Factors:**
- APOE e4 allele and dementia risk
- BDNF polymorphisms and plasticity
- Inflammatory gene variants
- Catechol-O-methyltransferase (COMT)

**Composite Risk Models:**
- Combined clinical and imaging predictors
- Machine learning approaches
- Dynamic prediction updating

## Augmentation Strategies

**Non-Invasive Brain Stimulation:**
- tDCS for attention and neglect
- rTMS for aphasia and neglect
- Theta burst stimulation
- Timing relative to behavioral training

**Pharmacological Enhancement:**
- Acetylcholinesterase inhibitors with training
- Memantine for vascular impairment
- Dopaminergic agents for attention
- Modafinil for fatigue and attention

**Aerobic Exercise:**
- Cardiovascular fitness and cognition
- BDNF upregulation
- Cerebrovascular reserve
- Combined exercise and cognitive training

## Emerging Interventions

**Intensive Cognitive Rehabilitation:**
- Higher doses than typical
- Inpatient programs
- Residential rehabilitation
- Evidence for dose-response relationship

**Dual Neuromodulation:**
- Combining tDCS with rTMS
- Bilateral stimulation approaches
- Personalized target selection

**Adaptive Computerized Training:**
- Artificial intelligence for difficulty adjustment
- Personalized training protocols
- Real-time performance feedback
- Gamification for engagement

## Methodological Advances

**Trial Design Challenges:**
- Heterogeneity of cognitive impairment
- Appropriate control conditions
- Outcome measure selection
- Duration and intensity optimization

**Outcome Measures:**
- Neuroimaging outcomes
- Functional measures
- Quality of life
- Participation outcomes

**Implementation Considerations:**
- Therapist training requirements
- Cost-effectiveness
- Scalability (technology-based)
- Long-term maintenance

## Prevention Paradigm

**Primary Prevention:**
- Stroke prevention
- Cardiovascular risk management
- Cognitive reserve building

**Secondary Prevention:**
- Recurrent stroke prevention
- Risk factor modification
- Cognitive engagement promotion

**Tertiary Prevention:**
- Dementia prevention after stroke
- Long-term cognitive monitoring
- Lifestyle interventions

## Unresolved Questions

**Key Research Priorities:**
- Optimal timing of intervention
- Dose-response relationships
- Transfer and generalization mechanisms
- Personalized treatment selection
- Long-term outcomes and maintenance
- Cost-effectiveness across settings`,
      keyTerms: [
        { term: 'cognitive reserve', definition: 'Brain\'s resilience to damage based on lifetime cognitive experiences and neural efficiency' },
        { term: 'precision cognitive rehabilitation', definition: 'Individualized treatment selection based on biomarkers and phenotypic characteristics' },
        { term: 'vascular dementia', definition: 'Progressive cognitive decline caused by cerebrovascular disease' },
        { term: 'dual neuromodulation', definition: 'Combining multiple brain stimulation techniques to enhance treatment effects' },
      ],
      clinicalNotes: 'The APOE e4 allele, present in approximately 15% of the population, increases risk of post-stroke dementia. While genetic testing is not routine, awareness of this risk factor may inform intensity of cognitive rehabilitation and secondary prevention efforts.',
    },
  },

  media: [
    {
      id: 'cognitive-domains-diagram',
      type: 'diagram',
      filename: 'cognitive-domains.svg',
      title: 'Cognitive Domains Affected by Stroke',
      description: 'Visual representation of cognitive functions that may be impaired after stroke',
    },
  ],

  citations: [
    {
      id: 'cicerone-cognitive-rehab-review',
      type: 'article',
      title: 'Evidence-Based Cognitive Rehabilitation: Updated Review of the Literature',
      authors: ['Cicerone, K.D.', 'et al.'],
      source: 'Archives of Physical Medicine and Rehabilitation',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-stroke-rehabilitation-overview', targetType: 'topic', relationship: 'parent', label: 'Stroke Rehabilitation Overview' },
    { targetId: 'rehab-cognitive-rehabilitation', targetType: 'topic', relationship: 'related', label: 'Cognitive Rehabilitation' },
  ],

  tags: {
    systems: ['neurological'],
    topics: ['rehabilitation', 'stroke', 'cognition', 'neuropsychology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default strokeCognitiveRehab;
