/**
 * Gait Assessment - Physical Examination
 */

import { EducationalContent } from '../../types';

export const gaitAssessment: EducationalContent = {
  id: 'musculoskeletal-gait-assessment',
  type: 'process',
  name: 'Gait Assessment',
  alternateNames: ['Walking Analysis', 'Ambulation Assessment', 'Locomotion Exam'],

  levels: {
    1: {
      level: 1,
      summary: 'Gait assessment watches how you walk to check for problems with balance, coordination, strength, or pain.',
      explanation: `## Watching How You Walk

Gait assessment is when a doctor watches how you walk. Your walking pattern can tell a lot about your muscles, nerves, balance, and joints.

### Normal Walking Has Steps

A normal walk has two main phases:

**Stance phase:**
- When your foot is on the ground
- Supports your body weight
- About 60% of walking cycle

**Swing phase:**
- When your foot is moving forward through the air
- About 40% of walking cycle

### What Doctors Look For

**While standing:**
- Is posture upright?
- Are shoulders level?
- Is weight evenly distributed?

**While walking:**
- Step length (are steps equal?)
- Speed
- Arm swing (should move opposite legs)
- Balance
- Need for assistive devices

### Common Walking Problems

**Limping:**
- Usually means pain in one leg
- People avoid putting weight on the painful side
- Step is shorter on painful side

**Shuffling:**
- Feet slide along floor
- Common in Parkinson disease
- Small steps

**Dragging a foot:**
- Cannot lift foot properly
- May catch toe on ground
- Called "foot drop"

**Wide-based walking:**
- Feet placed far apart
- Trying to improve balance
- Seen in balance problems

**Unsteady walking:**
- Sways or veers to one side
- May need to hold walls
- Balance or coordination problem

### Why Gait Assessment Matters

Walking problems can be caused by:
- Pain in legs or back
- Weak muscles
- Nerve problems
- Balance issues
- Joint problems
- Brain or spine conditions

Finding the cause helps doctors plan treatment to improve walking and prevent falls.`,

      keyTerms: [
        { term: 'gait', definition: 'The way a person walks' },
        { term: 'stance phase', definition: 'Part of walking when foot is on ground' },
        { term: 'swing phase', definition: 'Part of walking when foot is moving through air' },
        { term: 'foot drop', definition: 'Inability to lift the front part of the foot' },
        { term: 'base of support', definition: 'Area between the feet that supports the body' },
      ],

      analogies: [
        'Normal walking is like a pendulum - smooth back-and-forth motion.',
        'Arm swing is like a counterweight - it balances the body as we walk.',
        'A wide-based gait is like a table with legs spread wide - more stable but not normal.',
      ],

      examples: [
        'A person with hip pain may lean away from the painful side when walking.',
        'Someone with foot drop may lift their knee high to avoid dragging the foot.',
        'A person with balance problems may walk with feet far apart for stability.',
      ],

      patientCounselingPoints: [
        'Wear your usual walking shoes for the exam.',
        'Walk at your normal comfortable speed.',
        'Use your cane or walker if you normally use one.',
        'Tell your doctor if you have fallen recently.',
      ],
    },

    2: {
      level: 2,
      summary: 'Gait analysis systematically evaluates the walking cycle to identify musculoskeletal, neurological, and balance abnormalities that affect mobility.',
      explanation: `## Phases of the Gait Cycle

### Stance Phase (60%)

**Heel Strike (Initial Contact):**
- Heel contacts ground
- Knee extended
- Hip flexed 30 degrees

**Loading Response:**
- Weight transferred to limb
- Knee flexes 15 degrees
- Shock absorption

**Mid-Stance:**
- Body over stationary foot
- Knee extends
- Hip extends to neutral

**Terminal Stance:**
- Heel rises
- Body moves ahead of foot
- Opposite leg in swing

**Pre-Swing:**
- Toe pushes off
- Knee flexes
- Propulsion

### Swing Phase (40%)

**Initial Swing (Acceleration):**
- Foot clears ground
- Knee flexes to 60 degrees
- Hip flexes

**Mid-Swing:**
- Thigh advances
- Knee extends slightly
- Foot clears floor

**Terminal Swing (Deceleration):**
- Leg extends
- Prepares for heel strike
- Knee extends

### Observation Checklist

**Head and Trunk:**
- Upright posture
- Minimal vertical/horizontal displacement
- Head stable

**Upper Extremities:**
- Alternating arm swing
- Equal bilaterally
- Opposite to leg movement

**Pelvis:**
- Level
- 5-degree transverse rotation
- 5-degree frontal tilt

**Hips:**
- 30-degree flexion at heel strike
- Extension to 10 degrees in stance

**Knees:**
- Flex to 15 in loading
- Extend in mid-stance
- Flex to 60 in swing

**Ankles:**
- Neutral at heel strike
- Plantarflex to 15 in loading
- Dorsiflex in stance
- Plantarflex in push-off

### Common Abnormal Gaits

| Gait | Description | Cause |
|------|-------------|-------|
| Antalgic | Shortened stance on painful side | Pain |
| Trendelenburg | Pelvic drop on swing side | Hip abductor weakness |
| Steppage | High knee lift | Foot drop |
| Scissor | Legs cross midline | Spasticity |
| Ataxic | Unsteady, wide-based | Cerebellar disease |
| Festinating | Short, accelerating steps | Parkinson disease |
| Waddling | Bilateral Trendelenburg | Proximal muscle weakness |
| Spastic | Stiff, circumduction | Upper motor neuron |`,

      keyTerms: [
        { term: 'antalgic gait', definition: 'Limping to avoid pain' },
        { term: 'Trendelenburg gait', definition: 'Pelvic drop from hip abductor weakness' },
        { term: 'circumduction', definition: 'Swinging leg outward in semicircle' },
        { term: 'festination', definition: 'Short, increasingly rapid steps' },
        { term: 'ataxia', definition: 'Uncoordinated movement' },
      ],

      analogies: [
        'Normal gait is like a well-oiled machine - smooth and efficient.',
        'The Trendelenburg gait is like a sinking ship - the weak side drops.',
      ],

      examples: [
        'Trendelenburg gait suggests gluteus medius weakness or hip pathology.',
        'Steppage gait indicates L4-5 radiculopathy or common peroneal neuropathy.',
        'Festinating gait with small steps suggests Parkinson disease.',
      ],

      clinicalNotes: 'Always observe gait on level surface, adequate lighting, and without shoes if possible.',
    },

    3: {
      level: 3,
      summary: 'Advanced gait analysis identifies specific neurological and orthopedic pathologies through specialized testing maneuvers.',
      explanation: `## Specialized Gait Testing

### Tandem Walking
- Walk heel-to-toe in straight line
- Tests balance and cerebellar function
- Abnormal in ataxia, intoxication

### Romberg Test
- Stand with feet together
- Close eyes
- Increased sway with eyes closed suggests sensory ataxia (proprioception loss)
- Sways with eyes open suggests cerebellar ataxia

### Walking on Heels
- Tests L4-5 (ankle dorsiflexion)
- Abnormal in foot drop

### Walking on Toes
- Tests S1-2 (ankle plantarflexion)
- Abnormal in calf weakness

### Pull Test (Retropulsion)
- Patient walks in place
- Examiner pulls shoulders back
- Tests postural reflexes
- Abnormal in Parkinson disease (falls backward)

### Timed Up and Go (TUG)
- Rise from chair
- Walk 3 meters
- Turn
- Return to chair
- Sit
- >12 seconds indicates fall risk

### Detailed Gait Analysis

**Muscle Weakness Patterns:**

| Weakness | Gait Finding |
|----------|--------------|
| Hip flexors | Decreased step length, trunk lurch |
| Hip extensors | Trunk flexion at heel strike |
| Hip abductors | Trendelenburg gait |
| Knee extensors | Knee buckling, hyperextension |
| Knee flexors | Decreased push-off |
| Ankle dorsiflexors | Steppage gait |
| Ankle plantarflexors | Decreased push-off, flat foot |

**Neurological Gaits:**

**Spastic Hemiparetic:**
- Arm flexed, adducted
- Leg extended, circumducted
- Toe drag
- Upper motor neuron lesion

**Diplegic (Scissoring):**
- Bilateral spasticity
- Legs cross midline
- Toe walking
- Cerebral palsy

**Myopathic (Waddling):**
- Bilateral Trendelenburg
- Excessive lordosis
- Proximal muscle weakness

**Sensory Ataxic:**
- Wide base
- Stomping quality
- Worse with eyes closed (Romberg)
- Loss of proprioception

**Cerebellar Ataxic:**
- Wide base
- Unsteady, lurching
- Worse with eyes open
- Dysmetria

**Parkinsonian:**
- Stooped posture
- Short, shuffling steps
- Decreased arm swing
- Festination
- En bloc turning`,

      keyTerms: [
        { term: 'dysmetria', definition: 'Inability to judge distance or range' },
        { term: 'en bloc turning', definition: 'Turning with multiple small steps' },
        { term: 'retropulsion', definition: 'Tendency to fall backward' },
        { term: 'proprioception', definition: 'Sense of body position in space' },
        { term: 'lordosis', definition: 'Inward curve of lower back' },
      ],

      analogies: [
        'Tandem walking is like walking on a tightrope - it tests fine balance control.',
        'The Romberg test is like standing with eyes closed - you rely on inner sense of position.',
      ],

      examples: [
        'Positive Romberg with eyes closed suggests vitamin B12 deficiency or diabetic neuropathy.',
        'Heel-toe ataxia suggests cerebellar or dorsal column disease.',
        'Pull test positive in Parkinson disease - patient falls backward.',
      ],

      clinicalNotes: 'TUG test >12 seconds or inability to complete indicates increased fall risk and need for intervention.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of gait assessment with fall risk evaluation, rehabilitation planning, and complex neurological diagnosis.',
      explanation: `## Fall Risk Assessment

**Risk Factors:**
- Previous falls
- Gait/balance abnormalities
- Lower extremity weakness
- Visual impairment
- Cognitive impairment
- Medications (sedatives, antihypertensives)
- Environmental hazards

**Assessment Tools:**
- Tinetti Balance and Gait Evaluation
- Berg Balance Scale
- Functional Gait Assessment
- Dynamic Gait Index

**Interventions:**
- Strength and balance exercises
- Home safety modifications
- Medication review
- Vision correction
- Assistive devices
- Footwear optimization

### Clinical Patterns

**Parkinson Disease:**
- Resting tremor
- Bradykinesia
- Rigidity
- Postural instability (late)
- Shuffling, festinating gait
- Reduced arm swing
- En bloc turning

**Normal Pressure Hydrocephalus:**
- Magnetic gait (feet stick to floor)
- Cognitive decline
- Urinary incontinence
- Wet, wobbly, wacky
- Ventriculoperitoneal shunt may help

**Vascular Parkinsonism:**
- Lower body Parkinsonism
- Gait disorder prominent
- Less upper body involvement
- Poor levodopa response

**Hydrocephalus:**
- Magnetic gait
- Difficulty initiating
- Wide-based
- Cognitive changes

### Geriatric Considerations

**Multifactorial Gait Disorders:**
- Multiple contributing factors
- Sensory deficits
- Weakness
- Pain
- Fear of falling
- Deconditioning

**Fear of Falling:**
- Self-fulfilling prophecy
- Causes gait changes
- Leads to deconditioning
- Intervention: confidence building, exercise

### Rehabilitation Applications

**Gait Training:**
- Parallel bars
- Body-weight supported treadmill
- Cueing strategies (visual, auditory)
- Assistive device selection

**Orthotics:**
- AFO for foot drop
- KAFO for knee instability
- Tone-reducing orthoses

**Functional Electrical Stimulation:**
- Peroneal nerve stimulator
- Improves foot clearance
- Alternative to AFO`,

      keyTerms: [
        { term: 'Tinetti', definition: 'Balance and gait assessment tool' },
        { term: 'bradykinesia', definition: 'Slowness of movement' },
        { term: 'AFO', definition: 'Ankle-foot orthosis' },
        { term: 'magnetic gait', definition: 'Feet seem to stick to floor' },
      ],

      clinicalNotes: 'Fear of falling is as predictive of future falls as actual falls - address with education and exercise.',
    },

    5: {
      level: 5,
      summary: 'Expert gait analysis using advanced technologies and evidence-based interventions for complex mobility disorders.',
      explanation: `## Advanced Gait Analysis

**3D Motion Capture:**
- Multiple cameras
- Reflective markers
- Joint angles, velocities
- Temporal-spatial parameters
- Research and clinical applications

**Force Plates:**
- Ground reaction forces
- Center of pressure
- Balance assessment
- Weight-bearing symmetry

**EMG During Gait:**
- Muscle activation patterns
- Timing of muscle firing
- Pathological patterns
- Biofeedback training

**Inertial Sensors:**
- Wearable accelerometers/gyroscopes
- Real-world gait assessment
- Long-term monitoring
- Fall detection

**Pressure Mapping:**
- In-shoe pressure systems
- Plantar pressure distribution
- Foot mechanics
- Orthotic prescription aid

## Evidence-Based Interventions

**Parkinson Disease:**
- Cueing strategies (visual, auditory)
- Rhythmic auditory stimulation
- Treadmill training with body weight support
- Levodopa optimization
- DBS for medication-resistant

**Stroke Rehabilitation:**
- Task-specific training
- Body-weight supported treadmill
- Functional electrical stimulation
- Robotic exoskeletons
- Constraint-induced movement

**Prosthetic Gait Training:**
- Socket fitting optimization
- Gait analysis for alignment
- Energy storage feet
- Microprocessor knees
- Running prostheses

### Research Applications

**Biomarker Discovery:**
- Early disease detection
- Disease progression tracking
- Treatment response
- Fall prediction algorithms

**Artificial Intelligence:**
- Automated gait analysis
- Machine learning classification
- Remote monitoring
- Predictive analytics

**Virtual Reality:**
- Gait training environments
- Obstacle negotiation
- Balance training
- Engaging rehabilitation`,

      keyTerms: [
        { term: 'center of pressure', definition: 'Point of ground reaction force application' },
        { term: 'rhythmic auditory stimulation', definition: 'Using music/metronome to improve gait' },
        { term: 'DBS', definition: 'Deep brain stimulation' },
        { term: 'constraint-induced movement', definition: 'Therapy forcing use of affected limb' },
      ],

      clinicalNotes: 'Wearable sensors allow gait assessment in real-world environments, providing more ecologically valid data than laboratory testing.',
    },
  },

  media: [],

  citations: [
    {
      id: 'perry-gait',
      type: 'textbook',
      title: 'Gait Analysis: Normal and Pathological Function',
      source: 'Slack Incorporated',
    },
  ],

  crossReferences: [
    { targetId: 'musculoskeletal-joint-examination', targetType: 'process', relationship: 'sibling', label: 'Joint Examination' },
    { targetId: 'neurological-gait', targetType: 'topic', relationship: 'related', label: 'Neurological Gait Disorders' },
  ],

  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['physical-examination', 'rehabilitation'],
    keywords: ['gait', 'walking', 'balance', 'falls'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gaitAssessment;
