/**
 * Cognitive Rehabilitation - Comprehensive Educational Content
 *
 * Covers cognitive rehabilitation approaches in occupational therapy including
 * assessment, remediation, and compensatory strategies for cognitive impairments.
 */

import { EducationalContent } from '../../types';

export const cognitiveRehabilitation: EducationalContent = {
  id: 'rehab-cognitive-rehabilitation',
  type: 'concept',
  name: 'Cognitive Rehabilitation',
  alternateNames: ['Cognitive Therapy', 'Brain Training', 'Cognitive Remediation'],

  levels: {
    1: {
      level: 1,
      summary: 'Cognitive rehabilitation helps improve thinking skills like memory, attention, and problem-solving after brain injury or illness.',
      explanation: `Cognitive rehabilitation is therapy that helps your brain work better. When someone has a brain injury, stroke, or other condition affecting their thinking, cognitive rehabilitation can help.

**What thinking skills does it help?**
- **Memory**: Remembering things like appointments or where you put your keys
- **Attention**: Focusing on tasks without getting distracted
- **Problem-solving**: Figuring out how to handle new situations
- **Organization**: Planning your day and keeping things in order

**How does it work?**
Therapists use two main approaches:
1. **Practice exercises**: Like exercise for your brain to make it stronger
2. **Tricks and tools**: Learning new ways to remember things, like using calendars or notes

**Who can benefit?**
- People who had a stroke
- People with brain injuries
- People with memory problems
- People with attention difficulties

The brain can learn and change throughout life. With practice and the right strategies, many people see real improvements in their daily thinking skills.`,
      keyTerms: [
        { term: 'cognitive rehabilitation', definition: 'Therapy that helps improve thinking skills like memory and attention' },
        { term: 'memory', definition: 'The ability to remember information' },
        { term: 'attention', definition: 'The ability to focus on something without getting distracted' },
        { term: 'problem-solving', definition: 'The ability to figure out solutions to challenges' },
      ],
      analogies: [
        'Cognitive rehabilitation is like physical therapy for your brain - just as exercises strengthen muscles, brain exercises can strengthen thinking skills.',
        'Using memory strategies is like having a backup system - if your mental "hard drive" has trouble, you can use external "flash drives" like notes and calendars.',
      ],
      examples: [
        'After a stroke, someone learns to use a daily planner to remember appointments.',
        'A person with attention problems practices focusing exercises and learns to work in a quiet environment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cognitive rehabilitation combines restorative exercises to improve underlying cognitive abilities with compensatory strategies to work around deficits for improved daily functioning.',
      explanation: `Cognitive rehabilitation is a systematic intervention designed to improve cognitive functioning after brain injury, stroke, or neurological conditions. Occupational therapists play a key role in helping patients apply cognitive skills to everyday activities.

**Cognitive Domains Addressed:**

| Domain | Examples of Deficits | Impact on Daily Life |
|--------|---------------------|---------------------|
| Attention | Difficulty focusing, easily distracted | Can't complete tasks, misses information |
| Memory | Forgetting appointments, losing items | Disrupts routines, safety concerns |
| Executive Function | Poor planning, impulsivity | Difficulty with complex tasks, decision-making |
| Processing Speed | Slow thinking, delayed responses | Trouble keeping up with conversations |
| Visuospatial | Getting lost, spatial awareness issues | Navigation problems, dressing difficulties |

**Two Main Approaches:**

**1. Restorative (Remediation)**
- Exercises designed to improve underlying cognitive abilities
- Based on neuroplasticity - the brain's ability to change
- Repetitive practice to strengthen neural pathways
- Examples: attention training tasks, memory drills

**2. Compensatory (Adaptation)**
- Strategies to work around cognitive deficits
- External aids: calendars, smartphones, checklists
- Environmental modifications: labels, organization systems
- Internal strategies: mnemonics, visualization techniques

**The Rehabilitation Process:**
1. **Assessment**: Testing to identify specific cognitive strengths and weaknesses
2. **Goal Setting**: Identifying meaningful activities affected by cognitive problems
3. **Intervention**: Combination of exercises and strategy training
4. **Generalization**: Practicing skills in real-world situations
5. **Outcome Measurement**: Tracking improvement in daily activities`,
      keyTerms: [
        { term: 'neuroplasticity', definition: 'The brain\'s ability to reorganize and form new connections, allowing for learning and recovery' },
        { term: 'executive function', definition: 'Higher-level cognitive skills including planning, organizing, and decision-making' },
        { term: 'compensatory strategies', definition: 'Techniques and tools used to work around cognitive deficits' },
        { term: 'restorative approach', definition: 'Treatment aimed at improving underlying cognitive abilities through practice' },
        { term: 'processing speed', definition: 'How quickly the brain takes in, understands, and responds to information' },
      ],
      analogies: [
        'Restorative therapy is like repairing a damaged road - working to restore the original pathway. Compensatory therapy is like building a detour - finding an alternative route to the destination.',
        'External memory aids are like training wheels - they provide support while the person develops confidence and skill.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cognitive rehabilitation integrates evidence-based restorative and compensatory interventions within occupation-based frameworks, addressing specific cognitive domains while promoting generalization to meaningful daily activities.',
      explanation: `## Theoretical Foundations

**Neuroplasticity Principles:**
- Experience-dependent plasticity
- Use-it-or-lose-it principle
- Specificity of training effects
- Intensity and repetition requirements
- Salience and meaning enhance learning

**Models Guiding Practice:**

**Toglia Dynamic Interactional Model:**
- Processing strategies and self-monitoring
- Task and environmental context
- Metacognition (awareness of cognitive abilities)
- Transfer of learning across contexts

**Quadraphonic Approach:**
- Macro perspective (functional cognition)
- Micro perspective (subskills)
- Process-specific training
- Strategy training integration

## Assessment Approaches

**Standardized Cognitive Assessments:**

| Assessment | Domain | Format |
|------------|--------|--------|
| Montreal Cognitive Assessment (MoCA) | Global cognition | Screening |
| Trail Making Test A & B | Attention, executive function | Timed test |
| Rey Auditory Verbal Learning Test | Verbal memory | Word list recall |
| Behavioral Inattention Test | Unilateral neglect | Multiple subtests |
| Executive Function Performance Test | Executive function in ADL | Observation |

**Functional Cognitive Assessment:**
- Performance in natural contexts
- Error pattern analysis
- Strategy use observation
- Self-awareness evaluation

## Intervention by Cognitive Domain

**Attention:**
- Attention Process Training (APT)
- Environmental modifications
- Pacing strategies
- Task simplification

**Memory:**
- Spaced retrieval training
- Errorless learning
- External aids training
- Visual imagery techniques

**Executive Function:**
- Goal Management Training
- Problem-solving training
- Metacognitive strategy instruction
- Time pressure management

## Evidence-Based Interventions

**Strong Evidence:**
- Attention training post-stroke
- External memory aids for moderate-severe memory impairment
- Metacognitive strategy training for TBI

**Moderate Evidence:**
- Errorless learning for memory
- Goal Management Training for executive dysfunction
- Dual-task training

## Generalization and Transfer

**Challenges:**
- Skills learned in clinic may not transfer to home
- Context-dependent learning
- Variable performance across settings

**Strategies:**
- Train in multiple contexts
- Gradually increase complexity
- Involve caregivers
- Practice in natural environments`,
      keyTerms: [
        { term: 'metacognition', definition: 'Awareness and understanding of one\'s own cognitive processes, including recognizing limitations' },
        { term: 'errorless learning', definition: 'Training approach that prevents errors during learning to enhance memory encoding' },
        { term: 'spaced retrieval', definition: 'Memory training technique using gradually increasing intervals between practice' },
        { term: 'attention process training', definition: 'Hierarchical program targeting different attention components' },
        { term: 'goal management training', definition: 'Structured intervention teaching steps for completing complex tasks' },
        { term: 'unilateral neglect', definition: 'Failure to attend to stimuli on one side of space, usually after right hemisphere stroke' },
      ],
      clinicalNotes: 'Awareness of deficits is critical for treatment success. Patients with poor awareness may not use compensatory strategies consistently. Address awareness before strategy training. Involve family/caregivers in reinforcing strategies across settings.',
    },
    4: {
      level: 4,
      summary: 'Cognitive rehabilitation employs precision assessment, individualized intervention protocols, and systematic generalization strategies to address complex cognitive presentations while integrating psychosocial factors and caregiver involvement.',
      explanation: `## Advanced Assessment Framework

**Comprehensive Evaluation Battery:**

*Attention Components (Sohlberg & Mateer Model):*
- Focused attention: Paced Auditory Serial Addition Test (PASAT)
- Sustained attention: Continuous Performance Tests
- Selective attention: Stroop Test
- Alternating attention: Trail Making B
- Divided attention: Dual-task paradigms

*Memory Systems:*
- Working memory: Digit Span, N-back tasks
- Episodic memory: RAVLT, CVLT-II
- Prospective memory: Memory for Intentions Test
- Procedural memory: Motor sequence learning

*Executive Functions:*
- Planning: Tower of London
- Inhibition: Go/No-Go tasks
- Cognitive flexibility: Wisconsin Card Sort
- Self-monitoring: naturalistic observation

**Awareness Assessment:**
- Questionnaire discrepancies (self vs. informant)
- Prediction-performance comparisons
- On-line awareness during tasks
- Intellectual vs. emergent awareness

## Specialized Intervention Protocols

**Attention Process Training-3 (APT-3):**
- Hierarchical attention training
- Five attention levels targeted
- Generalization tasks included
- Home program components

**Goal-Plan-Do-Check (CO-OP):**
- Global cognitive strategy
- Domain-specific strategy discovery
- Guided discovery approach
- Self-monitoring emphasis

**Multicontext Treatment Approach:**
- Self-awareness training
- Strategy training across tasks
- Multiple environments
- Generalization measurement

**Technology-Assisted Interventions:**
- Computerized cognitive training programs
- Smartphone reminder apps
- GPS navigation aids
- Smart home technology

## Complex Case Considerations

**Dual Diagnosis:**
- Cognitive impairment + depression/anxiety
- Substance abuse history
- Pre-existing learning disabilities
- Multiple trauma factors

**Awareness Spectrum:**

| Awareness Level | Presentation | Intervention Focus |
|-----------------|--------------|-------------------|
| Intact | Accurate self-assessment | Strategy training |
| Emergent | Recognizes problems in context | Feedback enhancement |
| Anticipatory | Knows but doesn't predict | Structured self-monitoring |
| Absent | Denies deficits | Environmental management |

## Caregiver Integration

**Family Education:**
- Cognitive deficit explanations
- Strategy reinforcement training
- Cueing techniques
- Environmental setup

**Burden Management:**
- Realistic expectations
- Respite planning
- Support resources
- Long-term planning

## Outcome Measurement

**Levels of Outcome:**
1. Impairment: Cognitive test scores
2. Activity: Functional task performance
3. Participation: Real-world role function
4. Quality of life: Patient/family satisfaction

**Ecological Validity:**
- Real-world relevance of measures
- Naturalistic assessment
- Goal attainment scaling
- Participation measures`,
      keyTerms: [
        { term: 'ecological validity', definition: 'Degree to which assessment results predict real-world functioning' },
        { term: 'prospective memory', definition: 'Remembering to carry out intended actions in the future' },
        { term: 'working memory', definition: 'Temporary storage and manipulation of information for complex tasks' },
        { term: 'emergent awareness', definition: 'Recognition of deficits when experiencing them in the moment' },
        { term: 'multicontext approach', definition: 'Treatment framework emphasizing transfer through practice across varied contexts' },
        { term: 'goal attainment scaling', definition: 'Individualized outcome measurement based on patient-specific goals' },
      ],
      clinicalNotes: 'Treatment intensity matters - higher doses generally produce better outcomes. Consider fatigue management for patients with reduced cognitive endurance. Technology can enhance intervention but requires careful matching to patient abilities and preferences.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cognitive rehabilitation integrates neuroimaging biomarkers, precision intervention matching, telerehabilitation delivery, and implementation science to optimize outcomes across clinical populations and healthcare settings.',
      explanation: `## Precision Cognitive Rehabilitation

**Biomarker Integration:**
- Structural MRI for lesion-deficit mapping
- Functional connectivity patterns
- Diffusion tensor imaging for white matter integrity
- EEG markers of attention and processing

**Phenotyping for Treatment Selection:**
- Cognitive profile clustering
- Learning potential assessment
- Awareness classification
- Comorbidity patterns

**Predictive Modeling:**
- Machine learning outcome prediction
- Treatment response identification
- Optimal intensity determination
- Time-course modeling

## Emerging Intervention Approaches

**Transcranial Stimulation:**
- tDCS combined with cognitive training
- TMS for attention networks
- Mechanism enhancement
- Optimal stimulation parameters

**Virtual Reality Applications:**
- Immersive ADL simulation
- Attention training environments
- Executive function scenarios
- Ecological assessment

**Neurofeedback:**
- EEG-based attention training
- Self-regulation enhancement
- Personalized protocols
- Real-time feedback

**Computerized Training Programs:**
- Adaptive difficulty
- Large dose delivery
- Home-based implementation
- Engagement optimization

## Telerehabilitation Models

**Synchronous Delivery:**
- Video-based cognitive training
- Real-time strategy coaching
- Remote assessment modifications
- Caregiver involvement

**Asynchronous Components:**
- Computerized home programs
- Smartphone-based practice
- Automated performance monitoring
- Periodic clinician review

**Hybrid Models:**
- Combination of in-person and remote
- Intensive clinic training + home maintenance
- Telehealth check-ins
- Remote caregiver support

## Implementation Science

**Evidence-Practice Gaps:**
- Underutilization of proven interventions
- Variation in practice patterns
- Knowledge translation barriers
- Resource limitations

**Implementation Strategies:**
- Clinical decision support tools
- Training and consultation
- Audit and feedback
- Champion identification

**Sustainability Considerations:**
- Workforce capacity
- Reimbursement models
- Technology infrastructure
- Quality monitoring

## Population-Specific Advances

**Stroke Cognitive Rehabilitation:**
- Timing optimization
- Domain-specific protocols
- Integration with motor rehab
- Long-term maintenance

**Traumatic Brain Injury:**
- Severity-stratified approaches
- Awareness intervention protocols
- Vocational integration
- Community reintegration

**Mild Cognitive Impairment:**
- Compensatory strategy training
- Lifestyle modification
- Caregiver preparation
- Monitoring protocols

## Research Frontiers

**Mechanism Studies:**
- Neural correlates of recovery
- Active ingredients of interventions
- Optimal training parameters
- Individual difference factors

**Comparative Effectiveness:**
- Head-to-head intervention trials
- Real-world effectiveness
- Cost-effectiveness analyses
- Long-term outcomes

**Personalized Medicine:**
- Biomarker-guided treatment
- Genetic factors in plasticity
- Optimal timing windows
- Precision dosing

## Future Directions

**Artificial Intelligence:**
- Automated assessment
- Adaptive intervention delivery
- Progress prediction
- Treatment recommendation

**Integration with Other Therapies:**
- Exercise and cognition
- Sleep intervention
- Mood management
- Medication optimization`,
      keyTerms: [
        { term: 'transcranial direct current stimulation', definition: 'Non-invasive brain stimulation delivering weak electrical current to modulate neural activity' },
        { term: 'neurofeedback', definition: 'Training technique providing real-time feedback on brain activity to promote self-regulation' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices in clinical settings' },
        { term: 'precision rehabilitation', definition: 'Approach matching treatment to individual characteristics based on biomarkers and phenotypes' },
        { term: 'telerehabilitation', definition: 'Delivery of rehabilitation services via telecommunications technology' },
        { term: 'lesion-deficit mapping', definition: 'Relating brain injury locations to specific cognitive impairments' },
      ],
      clinicalNotes: `Key advances shaping cognitive rehabilitation:
1. Neuroimaging can inform treatment planning and prognosis
2. Technology expands access but requires attention to digital literacy
3. Precision approaches promise better treatment matching
4. Implementation science addresses evidence-practice gaps
5. Telehealth maintains gains and expands access
6. Integration with other therapies enhances outcomes
7. Caregiver involvement remains critical for generalization`,
    },
  },

  media: [
    {
      id: 'cognitive-domains-diagram',
      type: 'diagram',
      filename: 'cognitive-domains-diagram.svg',
      title: 'Cognitive Domains in Rehabilitation',
      description: 'Visual representation of attention, memory, and executive function domains',
    },
  ],

  citations: [
    {
      id: 'cicerone-cognitive-rehab',
      type: 'article',
      title: 'Evidence-Based Cognitive Rehabilitation: Systematic Review',
      authors: ['Cicerone, K.D.', 'et al.'],
      source: 'Archives of Physical Medicine and Rehabilitation',
    },
    {
      id: 'toglia-dynamic-model',
      type: 'textbook',
      title: 'Dynamic Interactional Model of Cognition',
      authors: ['Toglia, J.P.'],
      source: 'AOTA Press',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-stroke-cognitive-rehab', targetType: 'topic', relationship: 'related', label: 'Stroke Cognitive Rehabilitation' },
    { targetId: 'rehab-occupational-therapy-principles', targetType: 'topic', relationship: 'parent', label: 'OT Principles' },
  ],

  tags: {
    systems: ['neurological'],
    topics: ['rehabilitation', 'cognitive', 'brain injury', 'stroke'],
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

export default cognitiveRehabilitation;
