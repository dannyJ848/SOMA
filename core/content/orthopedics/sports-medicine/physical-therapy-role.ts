import { EducationalContent } from '../../types';

export const physicalTherapyRoleContent: EducationalContent = {
  id: 'ortho-patient-physical-therapy-role',
  type: 'topic',
  name: 'The Role of Physical Therapy',
  alternateNames: ['PT in sports medicine', 'Physical therapist role', 'Rehabilitation therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Physical therapists are healthcare professionals who help you recover from injuries, reduce pain, and get back to your normal activities through exercise and hands-on treatment.',
      explanation: `Physical therapists (PTs) are movement experts who help people recover from injuries and stay active. They work with you to get better without relying only on medication or surgery.

**What Physical Therapists Do:**
- Evaluate your injury and movement
- Create a personalized treatment plan
- Guide you through exercises
- Use hands-on techniques to reduce pain
- Teach you how to prevent future injuries

**Common Treatments:**

*Exercise:*
- Stretching to improve flexibility
- Strengthening exercises for weak muscles
- Balance and coordination training
- Activity-specific exercises

*Hands-On Therapy:*
- Massage and soft tissue work
- Joint mobilization (gentle movement)
- Manual stretching

*Other Treatments:*
- Ice and heat
- Electrical stimulation
- Ultrasound
- Taping and bracing

**When to See a Physical Therapist:**
- After an injury (sprain, strain, fracture)
- Following surgery
- For ongoing pain that limits activity
- To prevent injuries if you are at risk
- To improve performance in sports

**What to Expect at Your First Visit:**
- Discussion of your injury and goals
- Physical examination and tests
- Explanation of findings
- Treatment plan development
- Starting some exercises or treatments

**Your Role in Recovery:**
- Attend scheduled appointments
- Do your home exercises
- Communicate with your PT about progress
- Ask questions if you don't understand
- Be patient - healing takes time`,
      keyTerms: [
        { term: 'physical therapist', definition: 'Healthcare professional who helps restore movement and reduce pain' },
        { term: 'range of motion', definition: 'How far a joint can move in different directions' },
        { term: 'home exercise program', definition: 'Exercises your PT gives you to do at home between visits' },
      ],
      analogies: [
        'A physical therapist is like a personal trainer for your injury - guiding you safely back to health.',
        'PT exercises are like homework - doing them consistently helps you get better faster.',
      ],
      examples: [
        'After knee surgery, a PT helps you regain strength and walk normally again.',
        'For a shoulder injury, a PT teaches exercises to restore movement and strength.',
      ],
    },
    2: {
      level: 2,
      summary: 'Physical therapy integrates assessment, manual therapy, therapeutic exercise, and patient education to restore function, reduce pain, and facilitate safe return to activity following orthopedic injuries.',
      explanation: `Physical therapy is a cornerstone of musculoskeletal care, providing non-surgical treatment and rehabilitation.

**Physical Therapy Evaluation:**

*Components:*
- History: Injury mechanism, symptoms, goals
- Observation: Posture, movement patterns
- Palpation: Tenderness, swelling, tissue quality
- Range of motion: Active and passive
- Strength: Manual muscle testing, functional strength
- Special tests: Injury-specific assessments
- Functional assessment: Sport or activity-related

**Treatment Approaches:**

*Manual Therapy:*
- Joint mobilization: Improving joint movement
- Soft tissue mobilization: Reducing muscle tension
- Manipulation: High-velocity techniques (some PTs)
- Stretching: Assisted flexibility work

*Therapeutic Exercise:*
- ROM exercises: Restore movement
- Strengthening: Progressive resistance
- Proprioception: Balance and position sense
- Neuromuscular control: Movement coordination
- Cardiovascular: Maintain or improve fitness

*Modalities:*
- Ice/heat: Pain and inflammation management
- Electrical stimulation: Pain relief, muscle activation
- Ultrasound: Deep heating (evidence limited)
- Laser therapy: Emerging evidence

**Physical Therapy by Condition:**

| Condition | Key PT Interventions |
|-----------|---------------------|
| ACL reconstruction | ROM, quad strength, neuromuscular training |
| Rotator cuff | Strengthening, scapular stability, mobility |
| Back pain | Core stabilization, flexion/extension exercises |
| Ankle sprain | Balance, strength, proprioception |
| Hip replacement | Gait training, strength, ROM |

**Progression Principles:**
- Start with controlled, pain-free movement
- Progress resistance and complexity gradually
- Add sport-specific activities when ready
- Use objective criteria for progression
- Individualize based on response

**Frequency and Duration:**
- Acute injuries: 2-3 times per week
- Chronic conditions: 1-2 times per week
- Typical course: 6-12 weeks for most injuries
- Longer for surgical recovery (3-12 months)
- Home program critical for success`,
      keyTerms: [
        { term: 'manual therapy', definition: 'Hands-on treatment techniques used by physical therapists' },
        { term: 'proprioception', definition: 'Awareness of joint position and movement in space', pronunciation: 'pro-pree-oh-SEP-shun' },
        { term: 'therapeutic exercise', definition: 'Prescribed exercises designed to restore function' },
        { term: 'neuromuscular control', definition: 'Coordination between nervous system and muscles for movement' },
      ],
      analogies: [
        'Manual therapy is like a mechanic fine-tuning an engine - improving how parts move together.',
        'Proprioception training is like recalibrating GPS - restoring your body\'s position awareness.',
      ],
    },
    3: {
      level: 3,
      summary: 'Physical therapy in orthopedics and sports medicine employs evidence-based assessment, targeted interventions addressing impairments and functional limitations, and outcome-driven treatment progression.',
      explanation: `Contemporary physical therapy integrates best available evidence with clinical expertise and patient values.

**Assessment Framework:**

*ICF Model:*
- Body functions/structures: Impairments (strength, ROM, pain)
- Activities: Functional limitations (walking, lifting)
- Participation: Activity restrictions (work, sport, recreation)
- Environmental/personal factors: Context

*Objective Assessment:*
- Goniometry: Joint angles
- Dynamometry: Strength quantification
- Functional tests: Hop tests, Y-balance, FMS
- Patient-reported outcomes: DASH, LEFS, KOOS

**Evidence-Based Interventions:**

*Strong Evidence:*
- Exercise therapy for most MSK conditions
- Manual therapy combined with exercise
- Patient education and self-management
- Neuromuscular training for injury prevention

*Moderate Evidence:*
- Dry needling for pain
- Blood flow restriction training
- Instrument-assisted soft tissue mobilization
- Taping (short-term effects)

*Limited/Mixed Evidence:*
- Therapeutic ultrasound
- TENS for chronic pain
- Some modalities in isolation

**Condition-Specific Protocols:**

*ACL Reconstruction:*
- Phases: Immediate post-op, early rehab, strengthening, return-to-sport
- Key goals: Full extension early, quad activation, progressive loading
- Timeline: 9-12 months to sport
- Criteria-based progression essential

*Rotator Cuff:*
- Tendinopathy: Load management, progressive strengthening
- Repair: Protection phase, then progressive strengthening
- Key: Scapular control, kinetic chain
- Timeline varies by tear size and repair type

*Lumbar Spine:*
- Exercise more effective than passive modalities
- McKenzie: Directional preference
- Motor control: Deep stabilizers
- Graded activity approach
- Address psychosocial factors

**Outcome Measurement:**

*Patient-Reported Outcomes:*
- Disease-specific: KOOS, DASH, ODI
- Generic: SF-36, EQ-5D
- Track over time to guide treatment

*Performance-Based:*
- Functional tests
- Strength ratios
- Return-to-sport testing

**Clinical Reasoning:**
- Hypothesis-driven assessment
- Treatment directed at identified impairments
- Re-assessment guides progression
- Modify approach based on response`,
      keyTerms: [
        { term: 'ICF model', definition: 'International Classification of Functioning; framework for understanding disability' },
        { term: 'KOOS', definition: 'Knee Injury and Osteoarthritis Outcome Score; patient-reported measure' },
        { term: 'McKenzie method', definition: 'Assessment and treatment approach using directional preference' },
        { term: 'blood flow restriction', definition: 'Training technique using partial vascular occlusion to enhance adaptation' },
      ],
      clinicalNotes: 'Physical therapy outcomes are optimized when treatment is individualized to patient impairments, functional goals, and response to intervention. Passive modalities alone are generally inferior to active exercise-based approaches.',
    },
    4: {
      level: 4,
      summary: 'Advanced physical therapy practice integrates sophisticated assessment, evidence-based treatment selection, technology-enhanced interventions, and outcome-driven care within multidisciplinary orthopedic and sports medicine teams.',
      explanation: `Expert-level physical therapy requires integration of advanced assessment, clinical reasoning, and collaborative practice.

**Advanced Assessment:**

*Quantitative movement analysis:*
- 2D video analysis: Accessible, useful for major deviations
- 3D motion capture: Gold standard, research/elite settings
- Inertial measurement units: Wearable, field-based
- Force plates: Ground reaction forces, loading patterns

*Strength assessment:*
- Isokinetic dynamometry: Multiple speeds, eccentric/concentric
- Hand-held dynamometry: Standardized, practical
- Force plates: Rate of force development, asymmetry
- Functional tests: Hop tests, Y-balance

*Neuromuscular assessment:*
- EMG: Muscle activation patterns
- Proprioception testing: Joint position sense
- Reactive testing: Response to perturbation

**Advanced Interventions:**

*Blood Flow Restriction (BFR):*
- Partial vascular occlusion during exercise
- Allows muscle gains with lower loads
- Useful post-surgery or with load restrictions
- Growing evidence base

*Dry Needling:*
- Trigger point treatment
- Neuromuscular effects
- Adjunct to exercise
- Moderate evidence

*Neuromuscular Electrical Stimulation:*
- Muscle activation when volitional control limited
- Post-surgical quad activation
- Combined with volitional exercise

**Technology Integration:**

*Rehabilitation technology:*
- Anti-gravity treadmills: Early weight-bearing activities
- Robotic devices: Repetitive task training
- Virtual reality: Return-to-sport preparation
- Biofeedback: Real-time movement feedback

*Wearable monitoring:*
- Activity tracking
- Load monitoring
- Recovery assessment
- Home exercise compliance

**Evidence Application:**

*Clinical prediction rules:*
- Ottawa ankle rules: Need for imaging
- Treatment-based classification: LBP subgroups
- Prognostic indicators: Recovery prediction

*Outcome prediction:*
- Identify patients likely to respond
- Stratify treatment intensity
- Guide referral decisions

**Collaborative Practice:**

*Multidisciplinary team:*
- Physicians: Diagnosis, medical management
- Physical therapists: Rehabilitation
- Athletic trainers: Sport-specific progression
- Psychologists: Mental aspects of recovery
- Coaches: Return-to-performance

*Communication:*
- Shared documentation
- Regular team meetings
- Consistent messaging to athlete
- Coordinated progression

**Quality and Outcomes:**

*Metrics:*
- Patient-reported outcomes
- Functional achievement
- Return-to-sport rates
- Re-injury rates
- Patient satisfaction

*Continuous improvement:*
- Track outcomes
- Identify best practices
- Protocol refinement
- Research integration`,
      keyTerms: [
        { term: 'clinical prediction rule', definition: 'Tool using clinical findings to predict diagnosis, prognosis, or treatment response' },
        { term: 'anti-gravity treadmill', definition: 'Treadmill using air pressure to reduce body weight during walking/running' },
        { term: 'BFR training', definition: 'Blood flow restriction training; exercise with partial vascular occlusion' },
        { term: 'treatment-based classification', definition: 'System categorizing patients to guide intervention selection' },
      ],
      clinicalNotes: 'Advanced practice requires not only technical skills but also clinical reasoning to select appropriate interventions, modify based on patient response, and collaborate effectively within healthcare teams.',
    },
    5: {
      level: 5,
      summary: 'Contemporary physical therapy integrates precision assessment, personalized treatment algorithms, advanced technologies, and data-driven practice within an evidence-based, patient-centered framework.',
      explanation: `Expert physical therapy practice requires synthesis of evolving evidence, technology integration, and systems-level thinking.

**Precision Rehabilitation:**

*Individualized assessment:*
- Comprehensive impairment profiling
- Movement quality analysis
- Psychological screening
- Contextual factors assessment

*Personalized treatment:*
- Algorithm-based protocols with individualization
- Response-based progression
- Patient preference integration
- Goal-oriented planning

*Biomarker-informed care (emerging):*
- Tissue healing markers
- Recovery indicators
- Load response assessment

**Technology-Enhanced Practice:**

*Assessment technology:*
- Markerless motion capture
- AI-powered movement analysis
- Wearable kinematics
- Remote assessment capability

*Treatment technology:*
- Exoskeletons and robotics
- Virtual reality environments
- Haptic feedback systems
- Gamification platforms

*Monitoring and feedback:*
- Real-time biofeedback
- Home exercise tracking
- Load monitoring integration
- Telehealth platforms

**Evidence Synthesis:**

*Levels of evidence:*
- Systematic reviews and meta-analyses informing practice
- Clinical practice guidelines
- Expert consensus statements
- Implementation of research findings

*Evolving evidence:*
- BFR: Growing support for various indications
- Eccentric training: Strong evidence for tendinopathy
- Motor control: Specific indications identified
- Manual therapy: Adjunct role, not standalone

**Systems Approach:**

*Care coordination:*
- Integrated care pathways
- Standardized protocols with flexibility
- Communication systems
- Outcome tracking

*Quality improvement:*
- Practice pattern analysis
- Benchmarking outcomes
- Identifying variation
- Implementing best practices

*Value-based care:*
- Outcomes relative to cost
- Efficient resource utilization
- Patient experience
- Population health

**Research and Innovation:**

*Current research priorities:*
- Optimal rehabilitation dosing
- Personalized medicine approaches
- Technology integration
- Prevention science
- Long-term outcomes

*Implementation science:*
- Research-to-practice gap
- Barriers and facilitators
- Scaling effective interventions
- Sustainable practice change

**Professional Development:**

*Specialization:*
- Board certification (SCS, OCS)
- Fellowship training
- Continuing education
- Mentorship

*Leadership:*
- Quality improvement initiatives
- Protocol development
- Research participation
- Education of others

*Advocacy:*
- Direct access
- Practice scope
- Healthcare policy
- Patient interests`,
      keyTerms: [
        { term: 'precision rehabilitation', definition: 'Individualized treatment based on comprehensive patient profiling' },
        { term: 'SCS', definition: 'Sports Certified Specialist; board certification in sports physical therapy' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of research findings into practice' },
        { term: 'value-based care', definition: 'Healthcare model emphasizing quality outcomes relative to costs' },
      ],
      clinicalNotes: `**Key Practice Principles:**

1. **Assessment drives treatment:**
   - Comprehensive evaluation
   - Identify modifiable impairments
   - Establish baseline metrics
   - Track progress objectively

2. **Evidence-based selection:**
   - Exercise therapy foundational
   - Manual therapy as adjunct
   - Passive modalities limited role
   - Technology to enhance, not replace

3. **Patient-centered care:**
   - Shared goal setting
   - Education and self-management
   - Preference integration
   - Psychological considerations

4. **Outcome-driven practice:**
   - Measurable goals
   - Regular reassessment
   - Modify based on response
   - Track long-term outcomes

5. **Collaborative approach:**
   - Multidisciplinary communication
   - Coordinated care
   - Appropriate referral
   - Team-based decisions`,
    },
  },

  media: [
    {
      id: 'pt-interventions',
      type: 'diagram',
      filename: 'physical-therapy-interventions.svg',
      title: 'Physical Therapy Interventions',
      description: 'Overview of physical therapy treatment approaches',
    },
  ],
  citations: [
    {
      id: 'apta-guide',
      type: 'website',
      title: 'Guide to Physical Therapist Practice',
      source: 'American Physical Therapy Association',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-physical-therapy-expectations', targetType: 'topic', relationship: 'related', label: 'PT Expectations' },
    { targetId: 'ortho-patient-return-to-activity', targetType: 'topic', relationship: 'related', label: 'Return to Activity' },
    { targetId: 'ortho-patient-home-exercises', targetType: 'topic', relationship: 'related', label: 'Home Exercises' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['physical therapy', 'rehabilitation', 'sports medicine'],
    keywords: ['physical therapy', 'PT', 'rehabilitation', 'exercise therapy'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: false, nbme: false, shelf: [] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default physicalTherapyRoleContent;
