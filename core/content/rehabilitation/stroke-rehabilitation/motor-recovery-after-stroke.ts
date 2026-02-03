/**
 * Motor Recovery After Stroke - Comprehensive Educational Content
 *
 * Covers mechanisms and interventions for motor recovery following stroke.
 */

import { EducationalContent } from '../../types';

export const motorRecoveryAfterStroke: EducationalContent = {
  id: 'rehab-motor-recovery-after-stroke',
  type: 'concept',
  name: 'Motor Recovery After Stroke',
  alternateNames: ['Post-Stroke Motor Rehabilitation', 'Movement Recovery After Stroke'],

  levels: {
    1: {
      level: 1,
      summary: 'After a stroke, your brain can learn new ways to control movement through practice and special exercises.',
      explanation: `When a stroke damages part of the brain that controls movement, it can be hard to move your arm, leg, or face. The good news is that your brain is amazing at learning new things!

**How does recovery work?**
Your brain can create new pathways to control movement. This is like finding a new road when the usual one is blocked.

**What helps recovery?**
- **Practice, practice, practice**: The more you try to move, the better your brain gets at it
- **Doing real tasks**: Practicing things you actually want to do (like picking up a cup)
- **Not giving up**: It takes time, but most people see improvement

**Types of exercises:**
- Moving your affected arm and leg
- Practicing standing and walking
- Using both hands together
- Balance exercises

**Remember**: Everyone recovers differently. Some people improve a lot, while others may need to learn new ways to do things.`,
      keyTerms: [
        { term: 'motor', definition: 'Related to movement' },
        { term: 'affected side', definition: 'The side of your body that has trouble moving after stroke' },
        { term: 'recovery', definition: 'Getting better and regaining abilities' },
      ],
      analogies: [
        'Your brain learning new pathways is like a GPS finding an alternate route when the main road is closed.',
        'Practicing movements is like learning to ride a bike - it feels awkward at first but gets easier.',
      ],
      examples: [
        'Someone practices opening and closing their hand 100 times a day to help their brain relearn the movement.',
        'A stroke survivor learns to write with their other hand when their dominant hand does not recover.',
      ],
    },
    2: {
      level: 2,
      summary: 'Motor recovery after stroke depends on the brain\'s ability to reorganize (neuroplasticity), with intensive repetitive practice being key to relearning movements.',
      explanation: `Motor impairment is one of the most common problems after stroke. Recovery happens through a combination of biological healing and learning.

**Stages of Motor Recovery (Brunnstrom):**
1. Flaccidity (no movement)
2. Spasticity develops, synergistic movements appear
3. Voluntary control over synergies
4. Movement outside synergies becomes possible
5. Spasticity decreases, isolated movements
6. Near-normal coordination

**Key Principles of Motor Recovery:**

**Neuroplasticity:**
The brain's ability to change and form new connections. This allows undamaged parts of the brain to take over functions from damaged areas.

**Use It or Lose It:**
Functions not practiced may decline further.

**Use It and Improve It:**
Training specific functions leads to improvement.

**Specificity:**
Practice must be specific to the function you want to improve.

**Repetition:**
Many repetitions are needed to create lasting changes.

**Intensity:**
Higher intensity training leads to better outcomes.

**Evidence-Based Treatments:**
- **Task-specific training**: Practicing real activities
- **Constraint-induced movement therapy (CIMT)**: Restricting the good arm to force use of the affected arm
- **Treadmill training**: Walking on a treadmill, sometimes with body weight support
- **Electrical stimulation**: Using electrical current to help muscles activate

**Factors Affecting Recovery:**
- Stroke severity and location
- Time since stroke
- Age
- Pre-stroke health
- Amount of therapy`,
      keyTerms: [
        { term: 'neuroplasticity', definition: 'The brain\'s ability to form new connections and reorganize itself' },
        { term: 'Brunnstrom stages', definition: 'A classification system describing stages of motor recovery after stroke' },
        { term: 'synergy patterns', definition: 'Involuntary, linked movements that occur together after stroke' },
        { term: 'constraint-induced movement therapy', definition: 'Treatment that restricts the unaffected arm to force use of the affected arm' },
      ],
      analogies: [
        'Neuroplasticity is like the brain building a detour around a roadblock.',
        'Synergies are like when you try to move one finger but others move too - they\'re linked together.',
      ],
    },
    3: {
      level: 3,
      summary: 'Motor recovery after stroke involves both spontaneous biological recovery and experience-dependent plasticity, with outcomes predicted by stroke characteristics and modifiable through intensive, task-specific rehabilitation.',
      explanation: `## Mechanisms of Motor Recovery

**Spontaneous Biological Recovery:**
- Resolution of diaschisis
- Reduction of perilesional edema
- Resolution of ischemic penumbra
- Axonal sprouting
- Dendritic arborization
- Synaptogenesis

**Experience-Dependent Plasticity:**
- Long-term potentiation
- Cortical map reorganization
- Recruitment of alternate pathways
- Ipsilateral motor pathway contribution

## Prediction of Motor Recovery

**PREP Algorithm for Upper Extremity:**
1. SAFE score (Shoulder Abduction, Finger Extension) at day 3
2. Transcranial magnetic stimulation to assess corticospinal tract
3. Predicts recovery potential (excellent, good, limited, poor)

**Proportional Recovery Rule:**
- ~70% of patients recover a fixed proportion of their potential
- Non-fitters show minimal recovery
- Corticospinal tract integrity distinguishes groups

## Evidence-Based Interventions

**Constraint-Induced Movement Therapy (CIMT):**
- Restraint of less-affected limb
- Intensive practice (6+ hours/day in original protocol)
- Shaping and task practice
- Transfer package for real-world use
- Modified CIMT protocols more practical

**Task-Specific Training:**
- Practice of meaningful functional tasks
- Progressive difficulty
- Feedback and reinforcement
- High repetition counts

**Body-Weight Supported Treadmill Training:**
- Harness support for walking
- May include robotic assistance
- Task-specific walking practice
- Evidence mixed for superiority over conventional therapy

**Neuromuscular Electrical Stimulation:**
- Surface electrodes activate muscles
- Can be triggered by EMG or passive
- Improves strength and motor control
- Often combined with task practice

## Spasticity in Motor Recovery

**Pathophysiology:**
- Upper motor neuron syndrome
- Loss of descending inhibition
- Hyperexcitability of stretch reflex

**Impact on Function:**
- Can impede voluntary movement
- May cause pain and contractures
- Can sometimes assist function (leg extension for transfers)

**Management:**
- Stretching and positioning
- Botulinum toxin injection
- Oral medications (baclofen, tizanidine, dantrolene)
- Intrathecal baclofen for severe cases`,
      keyTerms: [
        { term: 'diaschisis', definition: 'Depression of function in brain regions connected to but remote from the lesion', pronunciation: 'dy-AS-kih-sis' },
        { term: 'long-term potentiation', definition: 'Strengthening of synapses based on recent patterns of activity' },
        { term: 'proportional recovery rule', definition: 'Theory that most patients recover a fixed proportion (~70%) of their potential' },
        { term: 'SAFE score', definition: 'Sum of shoulder abduction and finger extension scores used in PREP algorithm' },
      ],
      clinicalNotes: 'The PREP algorithm identifies ~80% of patients who will achieve functional upper limb use and helps set realistic goals. However, it should inform, not limit, therapy - outliers who exceed predictions do exist.',
    },
    4: {
      level: 4,
      summary: 'Motor recovery after stroke is governed by the integrity of the corticospinal tract and the balance between perilesional reorganization and contralesional compensation, with optimal outcomes achieved through biomarker-guided, dose-optimized interventions.',
      explanation: `## Neurobiological Substrates of Recovery

**Corticospinal Tract (CST) Integrity:**
- Primary determinant of upper limb recovery
- Assessed by TMS-evoked motor potentials
- DTI-based fractional anisotropy
- CST lesion load predicts outcomes

**Reorganization Patterns:**
- Perilesional (ipsilesional) M1 recruitment
- Premotor and supplementary motor area compensation
- Contralesional hemisphere contribution
- Brainstem pathway involvement (limited)

**Interhemispheric Dynamics:**
- Balanced inhibition in healthy brain
- Post-stroke imbalance theories
- Hyperexcitability of contralesional M1
- Maladaptive vs. compensatory contralesional activity

## Motor Learning Principles Applied

**Dosing Parameters:**
- Repetitions: 300-800+ per session associated with improvement
- Intensity: Higher intensity yields better outcomes
- Frequency: Distributed practice may be superior
- Duration: Longer programs show more improvement

**Practice Conditions:**
- Random vs. blocked practice
- Variable vs. constant practice
- Part vs. whole task practice
- Mental practice as adjunct

**Feedback Optimization:**
- Knowledge of results vs. knowledge of performance
- Fading feedback schedules
- External vs. internal focus of attention

## Advanced Interventions

**Neuromodulation:**
- Transcranial direct current stimulation (tDCS)
  - Anodal over ipsilesional M1
  - Cathodal over contralesional M1
  - Bilateral montages
- Repetitive TMS (rTMS)
  - Inhibitory protocols to contralesional M1
  - Excitatory protocols to ipsilesional M1
  - Priming effects for motor training

**Robotics:**
- Exoskeletons for upper and lower extremity
- End-effector devices
- High repetition delivery
- Adaptive difficulty algorithms

**Brain-Computer Interface:**
- EEG-based motor imagery detection
- Contingent feedback or stimulation
- Closed-loop rehabilitation systems

## Outcome Measures

**Upper Extremity:**
- Action Research Arm Test (ARAT)
- Fugl-Meyer Upper Extremity (FM-UE)
- Box and Block Test
- Wolf Motor Function Test

**Lower Extremity:**
- 6-Minute Walk Test
- 10-Meter Walk Test (gait speed)
- Timed Up and Go
- Berg Balance Scale
- Functional Ambulation Categories

**MCID Values:**
- FM-UE: 5.25-7.25 points
- ARAT: 5.7 points
- 6MWT: 34.4 meters
- Gait speed: 0.16 m/s`,
      keyTerms: [
        { term: 'CST lesion load', definition: 'Extent of damage to corticospinal tract, often measured by overlap with tract template' },
        { term: 'interhemispheric inhibition', definition: 'Reciprocal inhibition between motor cortices via corpus callosum' },
        { term: 'tDCS', definition: 'Transcranial direct current stimulation - neuromodulation technique using weak electrical current' },
        { term: 'ARAT', definition: 'Action Research Arm Test - 19-item upper extremity function measure' },
      ],
      clinicalNotes: 'Absence of MEP to TMS in the first week predicts poor upper limb recovery with ~95% specificity. These patients should focus on compensatory strategies while still receiving some restorative training, as approximately 5-10% may exceed predictions.',
    },
    5: {
      level: 5,
      summary: 'Contemporary motor recovery research is advancing precision rehabilitation paradigms through multimodal biomarker phenotyping, mechanistically targeted interventions, and adaptive trial designs to optimize individual recovery trajectories.',
      explanation: `## Precision Motor Rehabilitation

**Biomarker Phenotyping:**
- Structural: CST integrity (DTI), lesion characteristics
- Functional: TMS-MEP, fMRI activation patterns
- Genetic: BDNF Val66Met, COMT polymorphisms
- Blood-based: Inflammatory markers, BDNF levels

**Prediction Model Refinement:**
- Machine learning approaches
- Multimodal feature integration
- Dynamic prediction updating
- Individualized recovery trajectories

## Mechanistic Targets

**Enhancing Perilesional Plasticity:**
- Excitatory neuromodulation (anodal tDCS, iTBS)
- Pharmacological augmentation (SSRIs, amphetamines)
- Enriched environments
- Exercise-induced growth factor release

**Modulating Interhemispheric Balance:**
- Inhibitory rTMS to contralesional M1
- Cathodal tDCS to contralesional M1
- Callosal disruption consideration
- Individual response variability

**Targeting Alternate Pathways:**
- Reticulospinal tract training
- Bilateral arm training
- Rhythmic movements
- Gross motor patterns

## Chronicity and Recovery

**Challenging the Plateau:**
- Intensive rehabilitation in chronic stroke
- 90+ hours of therapy showing gains
- Mechanisms of late recovery
- Critical period reopening strategies

**Maintenance of Gains:**
- Home exercise programs
- Community exercise groups
- Technology-assisted monitoring
- Booster therapy sessions

## Novel Approaches

**Stem Cell Therapy:**
- Mesenchymal stem cells
- Neural stem/progenitor cells
- Intracerebral vs. systemic delivery
- Paracrine effects vs. cell replacement

**Gene Therapy:**
- Growth factor gene delivery
- Plasticity gene modulation
- Viral vector approaches
- Safety considerations

**Combination Approaches:**
- rTMS + intensive motor training
- tDCS + robotic therapy
- Pharmacology + behavioral intervention
- Multiple neuromodulation techniques

## Clinical Trial Methodology

**Challenges:**
- Heterogeneity of stroke population
- Dose optimization
- Outcome measure sensitivity
- Spontaneous recovery confounding

**Advanced Designs:**
- Biomarker-stratified randomization
- Adaptive dose-finding
- Sequential multiple assignment randomized trials
- Platform trials with multiple interventions

**Implementation Considerations:**
- Therapist training requirements
- Equipment and resource needs
- Sustainability and scalability
- Cost-effectiveness evidence

## Upper vs. Lower Extremity Recovery

**Differential Recovery:**
- Lower extremity typically recovers better
- Bilateral innervation of proximal leg muscles
- Spinal pattern generators for walking
- Less fine motor control required

**Intervention Differences:**
- Walking recovery prioritized
- Upper limb: greater compensation vs. restoration
- Different technology applications
- Distinct outcome expectations`,
      keyTerms: [
        { term: 'iTBS', definition: 'Intermittent theta burst stimulation - patterned TMS protocol with excitatory effects' },
        { term: 'critical period reopening', definition: 'Pharmacological or other approaches to restore heightened plasticity seen early after stroke' },
        { term: 'reticulospinal tract', definition: 'Brainstem pathway that may compensate for CST damage, especially for proximal movements' },
        { term: 'SMART design', definition: 'Sequential Multiple Assignment Randomized Trial - adaptive design for developing personalized interventions' },
      ],
      clinicalNotes: 'The BDNF Val66Met polymorphism affects activity-dependent BDNF release and may moderate response to motor rehabilitation. Meta-analyses suggest reduced motor learning in Met carriers. This may eventually inform therapy intensity recommendations, though routine genetic testing is not yet standard practice.',
    },
  },

  media: [
    {
      id: 'brunnstrom-stages',
      type: 'diagram',
      filename: 'brunnstrom-stages.svg',
      title: 'Brunnstrom Stages of Motor Recovery',
      description: 'Visual representation of the six stages of motor recovery after stroke',
    },
  ],

  citations: [
    {
      id: 'krakauer-motor-recovery',
      type: 'article',
      title: 'Getting neurorehabilitation right: what can be learned from animal models?',
      authors: ['Krakauer, J.W.'],
      source: 'Neurorehabilitation and Neural Repair',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-stroke-rehabilitation-overview', targetType: 'topic', relationship: 'parent', label: 'Stroke Rehabilitation Overview' },
    { targetId: 'rehab-therapeutic-exercise', targetType: 'topic', relationship: 'related', label: 'Therapeutic Exercise' },
  ],

  tags: {
    systems: ['neurological', 'musculoskeletal'],
    topics: ['rehabilitation', 'stroke', 'motor control', 'neuroplasticity'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default motorRecoveryAfterStroke;
