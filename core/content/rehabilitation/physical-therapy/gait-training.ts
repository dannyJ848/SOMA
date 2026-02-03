/**
 * Gait Training - Comprehensive Educational Content
 *
 * Covers walking rehabilitation including gait analysis, assistive device
 * training, and condition-specific gait interventions.
 */

import { EducationalContent } from '../../types';

export const gaitTraining: EducationalContent = {
  id: 'rehab-gait-training',
  type: 'concept',
  name: 'Gait Training',
  alternateNames: ['Walking Training', 'Ambulation Training', 'Locomotor Training'],

  levels: {
    1: {
      level: 1,
      summary: 'Gait training helps you learn to walk safely again after an injury, surgery, or illness.',
      explanation: `Gait training is like learning to walk all over again. When something happens to your body that makes walking difficult - like a broken leg, a stroke, or surgery - a physical therapist helps you walk safely and correctly.

**Why might you need gait training?**
- You had surgery on your leg or hip
- You had a stroke that made one side weak
- You've been in bed for a long time and feel unsteady
- You use a walker or cane and want to use it safely
- Your balance isn't what it used to be

**What happens during gait training?**

**Step 1: Assessment**
The therapist watches how you walk and figures out what needs help.

**Step 2: Practice**
You practice walking with the therapist's help. They might:
- Hold onto you or use a special belt for safety
- Have you walk on flat surfaces first, then stairs
- Use mirrors so you can see how you're walking
- Have you walk between parallel bars for support

**Step 3: Using Equipment**
If you need help walking, the therapist teaches you to use:
- A cane (for a little support)
- A walker (for more support)
- Crutches (after leg injuries)

**Tips for safe walking:**
- Take your time - don't rush
- Look where you're going
- Wear good, supportive shoes
- Remove rugs and clutter at home
- Use handrails on stairs

Walking is something most of us learn as toddlers and never think about. But if you get hurt or sick, gait training helps you walk safely again!`,
      keyTerms: [
        { term: 'gait', definition: 'The way you walk, including your steps and balance' },
        { term: 'gait training', definition: 'Exercises and practice to help you walk better and safer' },
        { term: 'assistive device', definition: 'Equipment like a cane or walker that helps you walk' },
        { term: 'balance', definition: 'Your ability to stay steady and not fall while standing or walking' },
      ],
      analogies: [
        'Gait training is like learning to ride a bike again after years without practice - you have to re-learn the movements step by step.',
        'Using a walker is like having training wheels for walking - it gives you extra support while you build confidence.',
      ],
      examples: [
        'After getting a new hip, you learn to walk with a walker first, then a cane, then on your own.',
        'If you had a stroke, you practice lifting your weak leg high enough so you don\'t trip.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gait training involves systematic assessment of walking patterns and targeted interventions to improve walking ability, safety, and independence following injury, surgery, or neurological conditions.',
      explanation: `Gait training is a fundamental component of physical therapy that focuses on restoring or improving walking ability. The process involves analyzing how someone walks, identifying problems, and using specific exercises and techniques to improve walking patterns.

**Components of Normal Gait:**

*Gait Cycle:*
The gait cycle is one complete stride (heel strike to next heel strike of same foot):
- Stance phase (60%): foot is on the ground
- Swing phase (40%): foot is in the air

*Key Events:*
1. Initial contact (heel strike)
2. Loading response (weight acceptance)
3. Midstance (single limb support)
4. Terminal stance (heel off)
5. Pre-swing (toe off)
6. Initial swing
7. Mid-swing
8. Terminal swing

**Common Gait Problems:**

| Problem | Description | Common Causes |
|---------|-------------|---------------|
| Antalgic gait | Shortened stance on painful side | Pain in leg/hip |
| Trendelenburg | Hip drops on non-stance side | Weak hip abductors |
| Steppage gait | High knee lift to clear foot | Foot drop |
| Shuffling gait | Short steps, feet barely lift | Parkinson's disease |
| Ataxic gait | Wide base, uncoordinated | Cerebellar problems |

**Gait Training Interventions:**

**1. Pre-Gait Activities**
Before walking practice:
- Weight shifting exercises
- Balance training
- Strengthening weak muscles
- Standing tolerance building

**2. Assisted Walking Practice**
- Parallel bars (most support)
- Walker
- Crutches
- Cane
- Independent walking

**3. Assistive Device Selection**
- Standard walker: maximum stability
- Rolling walker: easier forward movement
- Quad cane: more stability than standard cane
- Standard cane: minimal support needed

**4. Weight-Bearing Status**
After surgery or fracture:
- Non-weight-bearing (NWB): no weight on affected leg
- Toe-touch weight-bearing (TTWB): foot down for balance only
- Partial weight-bearing (PWB): 25-50% of body weight
- Weight-bearing as tolerated (WBAT): as much as comfortable
- Full weight-bearing (FWB): normal weight on leg

**5. Environment Progression**
- Flat, even surfaces
- Uneven terrain
- Ramps and inclines
- Stairs
- Curbs
- Community settings`,
      keyTerms: [
        { term: 'gait cycle', definition: 'One complete stride from heel strike to next heel strike of the same foot' },
        { term: 'stance phase', definition: 'The portion of gait when the foot is in contact with the ground (about 60%)' },
        { term: 'swing phase', definition: 'The portion of gait when the foot is in the air (about 40%)' },
        { term: 'Trendelenburg gait', definition: 'Walking pattern where hip drops on the side of the swinging leg due to weak hip muscles', pronunciation: 'tren-DEL-en-berg' },
        { term: 'antalgic gait', definition: 'Limping pattern to avoid pain', pronunciation: 'an-TAL-jik' },
        { term: 'weight-bearing status', definition: 'How much body weight you\'re allowed to put on your leg after injury or surgery' },
      ],
      analogies: [
        'The gait cycle is like a clock - each phase happens at a predictable time, and if one part is off, the whole cycle is affected.',
        'Progressing through assistive devices is like learning to swim - you start with flotation devices and gradually use less support.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gait training integrates biomechanical analysis, neuromuscular control principles, and task-specific practice using evidence-based assessment tools and intervention progressions across various pathological conditions.',
      explanation: `## Gait Biomechanics

**Spatial Parameters:**
- Step length: distance from one foot contact to opposite foot contact
- Stride length: distance covered in one gait cycle (two steps)
- Step width: lateral distance between feet
- Toe out angle: foot progression angle

**Temporal Parameters:**
- Cadence: steps per minute (normal: 100-120)
- Velocity: speed of walking (normal: 1.2-1.4 m/s)
- Stance time: duration of stance phase
- Double support time: both feet on ground (increased with instability)

**Kinematics by Joint:**

| Phase | Hip | Knee | Ankle |
|-------|-----|------|-------|
| Initial contact | 30° flexion | 0-5° flexion | Neutral |
| Loading response | 30° → 20° flexion | 15-20° flexion | Plantarflexion |
| Midstance | 20° → 0° flexion | 5° flexion | Dorsiflexion |
| Terminal stance | 10-20° extension | 5° flexion | Dorsiflexion → PF |
| Pre-swing | 0° → 10° flexion | 40° flexion | 20° plantarflexion |
| Swing | 15-30° flexion | 60° → 0° flexion | Neutral |

**Kinetics:**
- Ground reaction forces
- Joint moments and powers
- Muscle activation patterns
- Energy expenditure

## Gait Assessment Tools

**Observational Analysis:**
- Rancho Los Amigos Observational Gait Analysis
- Systematic observation by phase
- Identification of deviations

**Functional Outcome Measures:**
- 10-Meter Walk Test (10MWT): gait speed
- 6-Minute Walk Test (6MWT): endurance
- Timed Up and Go (TUG): functional mobility
- Dynamic Gait Index (DGI): gait adaptability
- Functional Gait Assessment (FGA): postural stability during walking

**Instrumented Analysis:**
- 3D motion capture
- Force plates
- EMG
- Inertial measurement units (IMUs)

## Condition-Specific Gait Patterns

**Stroke Hemiplegic Gait:**
- Circumduction: lateral swing of affected leg
- Hip hiking: elevation of pelvis to clear foot
- Decreased stance time on affected side
- Reduced velocity and cadence

**Parkinson's Disease:**
- Shuffling steps
- Reduced arm swing
- Festination (involuntary acceleration)
- Freezing of gait
- Flexed posture

**Lower Extremity Amputation:**
- Transtibial: relatively normal pattern possible
- Transfemoral: vaulting, hip hiking, lateral trunk lean
- Energy cost increases with amputation level

**Vestibular Dysfunction:**
- Wide base of support
- Slow velocity
- Difficulty with head turns during walking

## Intervention Strategies

**Motor Learning Approaches:**
- Task-specific practice: actual walking
- High repetition: maximize practice trials
- Variable practice: different surfaces, speeds, directions
- Feedback fading: decrease external feedback over time

**Body Weight Supported Treadmill Training (BWSTT):**
- Harness support reduces body weight
- Allows earlier walking practice
- Progressive weight bearing
- Treadmill speed progression

**Overground Training with Assistive Devices:**

*Gait Pattern with Walker:*
1. Advance walker
2. Step with weaker leg
3. Step with stronger leg
4. Repeat

*Gait Pattern with Cane (COAL):*
- Cane Opposite Affected Leg
- Cane and affected leg advance together
- Step through with unaffected leg

**Stair Training:**
- Ascending: stronger leg leads ("up with the good")
- Descending: weaker leg leads ("down with the bad")
- Railings and assistive devices as needed`,
      keyTerms: [
        { term: 'cadence', definition: 'Number of steps per minute', pronunciation: 'KAY-dens' },
        { term: 'gait velocity', definition: 'Speed of walking, typically measured in meters per second' },
        { term: 'circumduction', definition: 'Semicircular swing of the leg during gait to compensate for inability to flex', pronunciation: 'sir-kum-DUK-shun' },
        { term: 'body weight supported treadmill training', definition: 'Gait training using harness to reduce weight bearing while walking on treadmill' },
        { term: 'festination', definition: 'Involuntary acceleration of walking seen in Parkinson\'s disease', pronunciation: 'fes-tih-NAY-shun' },
        { term: 'kinematics', definition: 'Description of movement including joint angles and positions', pronunciation: 'kin-eh-MAT-iks' },
      ],
      clinicalNotes: 'Gait speed is considered a "sixth vital sign" - speeds below 0.8 m/s are associated with increased fall risk and decreased community ambulation. TUG >14 seconds indicates high fall risk. Training should be task-specific - practice actual walking rather than isolated exercises when possible.',
    },
    4: {
      level: 4,
      summary: 'Gait rehabilitation integrates neuroplasticity principles, motor control theory, condition-specific protocols, and technology-enhanced interventions within evidence-based clinical pathways addressing walking dysfunction across the continuum of care.',
      explanation: `## Neurophysiology of Gait

**Central Pattern Generators (CPGs):**
- Spinal circuits capable of generating rhythmic locomotor output
- Modulated by supraspinal input and sensory feedback
- Basis for locomotor training approaches
- Activated by appropriate afferent input

**Motor Control Hierarchy:**
- Spinal level: reflexes, CPGs
- Brainstem: postural control, rhythmic modulation
- Cerebellum: coordination, error correction
- Basal ganglia: movement scaling, automaticity
- Cortex: voluntary control, adaptation

**Sensory Contributions:**
- Proprioceptive: joint position, muscle length
- Cutaneous: ground contact information
- Vestibular: head position, spatial orientation
- Visual: environmental navigation

## Advanced Gait Assessment

**3D Gait Analysis Interpretation:**
- Kinematic graphs interpretation
- Kinetic (moment, power) analysis
- EMG timing and amplitude
- Gait Deviation Index (GDI)
- Movement Analysis Profile

**Clinical Reasoning Framework:**
1. Identify deviation (what is abnormal)
2. Determine phase (when it occurs)
3. Hypothesize cause (why it occurs)
4. Plan intervention (how to address)

**Predictive Measures:**
- Gait speed predicting:
  - Hospitalization risk (<0.6 m/s)
  - Community ambulation ability (0.8 m/s threshold)
  - Fall risk (<0.7 m/s)
  - Mortality (each 0.1 m/s decrease increases risk)

## Technology-Enhanced Interventions

**Robotic Gait Training:**
- Exoskeletons (Lokomat, Ekso, ReWalk)
- End-effector devices (Gait Trainer)
- High repetition delivery
- Consistent kinematic patterns
- Evidence: comparable to conventional training intensity-matched

**Virtual Reality:**
- Immersive treadmill environments
- Dual-task training scenarios
- Motivation enhancement
- Real-world simulation

**Functional Electrical Stimulation (FES):**
- FES-assisted walking for foot drop
- Multichannel FES for patterned activation
- Surface vs. implanted systems
- Neuroprosthetic vs. therapeutic effect

**Biofeedback Systems:**
- Real-time kinematic feedback
- Auditory cueing (metronome)
- Visual feedback (mirrors, video)
- Force/pressure feedback

## Condition-Specific Protocols

**Post-Stroke Gait Rehabilitation:**

*Evidence-Based Approaches:*
- Task-specific training: strongest evidence
- BWSTT: equivalent to overground training
- FES for foot drop: therapeutic benefit
- Robotic: intensity-dependent effects

*Intervention Progression:*
1. Pre-gait: weight shifting, standing balance
2. Supported walking: parallel bars, BWSTT
3. Assisted overground: devices, manual assist
4. Independent walking: variable conditions
5. Community mobility: complex environments

**Parkinson's Disease:**

*Cueing Strategies:*
- Auditory: metronome, rhythmic music
- Visual: floor markers, laser lines
- Attentional: focus on stride length

*Evidence-Based Interventions:*
- Cueing: reduces freezing, improves velocity
- High-intensity exercise: disease-modifying potential
- Dance (tango): improved balance and gait
- LSVT-BIG: amplitude-focused training

**Post-Amputation:**

*Prosthetic Gait Training:*
- Component familiarization
- Weight shifting and balance
- Stepping strategies
- Gait symmetry training
- Energy conservation techniques

## Dual-Task Training

**Cognitive-Motor Interference:**
- Walking + cognitive task = decreased performance
- Prioritization strategies vary by condition
- Fall risk indicator

**Training Approaches:**
- Progressive dual-task exposure
- Variable secondary task difficulty
- Attention allocation training
- Task automaticity development`,
      keyTerms: [
        { term: 'central pattern generator', definition: 'Spinal neural circuits capable of generating rhythmic locomotor output without supraspinal input', pronunciation: 'CPG' },
        { term: 'Gait Deviation Index', definition: 'Single score summarizing overall gait abnormality from 3D analysis' },
        { term: 'cognitive-motor interference', definition: 'Decrease in motor and/or cognitive performance when tasks are performed simultaneously' },
        { term: 'LSVT-BIG', definition: 'Amplitude-focused treatment program for Parkinson\'s disease' },
        { term: 'neuroprosthesis', definition: 'Device replacing lost motor function through electrical stimulation', pronunciation: 'nur-oh-PROS-thee-sis' },
        { term: 'end-effector robot', definition: 'Robotic device that moves the foot through gait pattern while body is supported' },
      ],
      clinicalNotes: 'Intensity matters: higher intensity training produces better outcomes across conditions. Task-specific training (actual walking) produces superior results compared to impairment-focused exercises. Dual-task training is essential for community ambulation. Consider patient cognitive status when selecting intervention complexity.',
    },
    5: {
      level: 5,
      summary: 'Contemporary gait rehabilitation integrates precision assessment, mechanism-based interventions, emerging technologies, and implementation science within healthcare systems to optimize functional walking outcomes across populations.',
      explanation: `## Precision Gait Rehabilitation

**Phenotyping Walking Dysfunction:**
- Biomechanical phenotypes: kinematic patterns
- Physiological phenotypes: energy expenditure, capacity
- Neural phenotypes: lesion location, connectivity
- Behavioral phenotypes: activity levels, participation

**Predictive Modeling:**
- Machine learning for outcome prediction
- Baseline factors identifying responders
- Treatment selection algorithms
- Personalized intervention pathways

**Biomarker Integration:**
- Neuroimaging: CST integrity, lesion overlap
- Neurophysiology: MEP presence, H-reflex
- Blood biomarkers: BDNF, inflammatory markers
- Genetic factors affecting recovery

## Emerging Technologies

**Brain-Computer Interface (BCI) Integration:**
- EEG-controlled exoskeletons
- Cortical motor imagery training
- Closed-loop stimulation systems
- Emerging clinical applications

**Advanced Exoskeletons:**
- Powered assist vs. full control
- Intent detection algorithms
- Community-use designs
- Cost-accessibility considerations

**Wearable Monitoring:**
- Continuous gait assessment
- Real-world performance capture
- Activity monitoring
- Remote rehabilitation support

**Transcranial Stimulation:**
- tDCS augmenting gait training
- TMS for motor cortex priming
- Optimal timing and parameters
- Combined with physical therapy

## Implementation Science

**Evidence-Practice Gaps:**
- Intensity deficits in clinical practice
- Limited technology access
- Training and competency barriers
- Healthcare system constraints

**Implementation Strategies:**
- Clinical decision support tools
- Protocol standardization
- Quality improvement initiatives
- Outcome tracking systems

**Healthcare System Integration:**
- Continuum of care pathways
- Transitions: acute → rehab → community
- Telerehabilitation integration
- Value-based care alignment

## Population-Specific Considerations

**Pediatric Gait Training:**
- Developmental considerations
- Cerebral palsy specific protocols
- Growth-related adaptations
- Family-centered approaches

**Geriatric Gait Training:**
- Frailty considerations
- Fall prevention emphasis
- Cognitive impairment adaptations
- Multi-morbidity management

**Athletic Return to Sport:**
- Sport-specific demands
- Cutting, pivoting, sprinting
- Biomechanical screening
- Performance optimization

## Research Frontiers

**Mechanistic Research:**
- Optimal stimulation of CPGs
- Neuroplasticity enhancement
- Compensation vs. restoration
- Critical windows for intervention

**Clinical Trials:**
- Comparative effectiveness
- Dose-response optimization
- Technology evaluation
- Implementation studies

**Outcomes Research:**
- Patient-reported outcomes
- Participation measures
- Long-term follow-up
- Real-world effectiveness

## Healthcare Economics

**Cost-Effectiveness:**
- Technology cost-benefit analysis
- Intensity-outcome-cost modeling
- Prevention of secondary complications
- Return on investment calculations

**Access and Equity:**
- Geographic disparities
- Socioeconomic barriers
- Technology availability
- Health equity considerations

## Clinical Expert Integration

**Complex Case Management:**
- Multi-system involvement
- Treatment resistance
- Psychosocial complexity
- Resource limitations

**Interprofessional Collaboration:**
- Orthotist/prosthetist coordination
- Neurologist consultation
- Physiatry integration
- Nursing and aide training

**Advanced Clinical Reasoning:**
- Hypothesis generation and testing
- Outcome prediction
- Treatment modification
- Discharge planning

## Future Directions

**Personalized Medicine:**
- Genetic profiling for treatment selection
- Biomarker-guided intensity
- AI-assisted decision making
- Adaptive protocols

**Technology Evolution:**
- Next-generation exoskeletons
- Implantable stimulation systems
- Augmented reality training
- Home-based robotics

**Healthcare System:**
- Value-based gait rehabilitation
- Quality metrics development
- Best practice dissemination
- Policy implications`,
      keyTerms: [
        { term: 'brain-computer interface', definition: 'System enabling direct communication between brain activity and external devices' },
        { term: 'corticospinal tract integrity', definition: 'Structural and functional preservation of the main motor pathway from brain to spinal cord' },
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor - protein supporting neuroplasticity and motor learning' },
        { term: 'motor evoked potential', definition: 'Electrical response recorded from muscles following transcranial stimulation of motor cortex' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices into routine care' },
        { term: 'phenotyping', definition: 'Classification of patients by observable characteristics to guide treatment selection' },
      ],
      clinicalNotes: `Key principles for advanced gait rehabilitation practice:
1. Assessment should capture multiple domains: biomechanical, physiological, neural, behavioral
2. Technology augments but doesn't replace skilled clinical reasoning
3. Intensity and task-specificity remain fundamental regardless of technology
4. Individual response variation requires outcome monitoring and treatment adjustment
5. Healthcare system factors impact feasibility of evidence-based practice
6. Interprofessional collaboration essential for complex cases
7. Research-practice integration requires active effort`,
    },
  },

  media: [
    {
      id: 'gait-cycle-phases-diagram',
      type: 'diagram',
      filename: 'gait-cycle-phases-diagram.svg',
      title: 'Gait Cycle Phases',
      description: 'Visual representation of stance and swing phases with key events',
    },
    {
      id: 'assistive-device-progression',
      type: 'diagram',
      filename: 'assistive-device-progression.svg',
      title: 'Assistive Device Progression',
      description: 'Hierarchy of assistive devices from maximum to minimum support',
    },
  ],

  citations: [
    {
      id: 'perry-gait-analysis',
      type: 'textbook',
      title: 'Gait Analysis: Normal and Pathological Function',
      authors: ['Perry, J.', 'Burnfield, J.M.'],
      source: 'SLACK Incorporated',
    },
    {
      id: 'gage-gait-analysis',
      type: 'textbook',
      title: 'The Identification and Treatment of Gait Problems in Cerebral Palsy',
      authors: ['Gage, J.R.', 'Schwartz, M.H.', 'Koop, S.E.', 'Novacheck, T.F.'],
      source: 'Mac Keith Press',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-physical-therapy-principles', targetType: 'topic', relationship: 'parent', label: 'Physical Therapy Principles' },
    { targetId: 'rehab-mobility-aids-overview', targetType: 'topic', relationship: 'related', label: 'Mobility Aids' },
    { targetId: 'rehab-stroke-rehabilitation-overview', targetType: 'topic', relationship: 'related', label: 'Stroke Rehabilitation' },
  ],

  tags: {
    systems: ['musculoskeletal', 'neurological'],
    topics: ['rehabilitation', 'gait', 'walking', 'mobility'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gaitTraining;
