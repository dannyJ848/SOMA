import { EducationalContent } from '../../../types';

export const physicalTherapyContent: EducationalContent = {
  id: 'ortho-physical-therapy',
  type: 'topic',
  name: 'Physical Therapy',
  alternateNames: ['PT', 'Physiotherapy', 'Physical rehabilitation', 'Therapeutic exercise'],
  hpoId: 'HP:0001288',

  levels: {
    1: {
      level: 1,
      summary: 'Physical therapy uses exercises, stretches, and hands-on techniques to help people recover from injuries, surgery, or health conditions that affect their ability to move.',
      explanation: `Physical therapy helps your body heal and get stronger after injury or surgery. Physical therapists are trained experts who teach you exercises and use special techniques to reduce pain and improve movement.

**What Physical Therapists Do:**

*Assessment:*
- Check how well you move
- Measure your strength
- Identify problem areas
- Create a plan just for you

*Treatment Methods:*
- Exercises (stretching, strengthening)
- Hands-on techniques (massage, joint movement)
- Heat and ice
- Electrical stimulation
- Ultrasound therapy
- Education about your condition

**When Physical Therapy Helps:**

*After Injuries:*
- Sprains and strains
- Broken bones (after they heal)
- Sports injuries
- Car accidents

*After Surgery:*
- Joint replacement
- Knee or shoulder surgery
- Back surgery
- Rotator cuff repair

*For Ongoing Conditions:*
- Arthritis
- Back pain
- Balance problems
- Chronic pain

**What to Expect:**

*First Visit:*
- Questions about your problem
- Physical examination
- Movement tests
- Discussion of goals
- Starting a treatment plan

*Typical Session:*
- Warm-up exercises
- Specific treatments
- Exercises for home
- Usually 30-60 minutes
- May go 2-3 times per week

**Home Exercise Program:**
- Exercises to do between visits
- Key to recovery
- Written instructions and pictures
- Should be done daily
- Tell therapist if exercises are too hard or easy

**Tips for Success:**
- Be consistent with exercises
- Communicate with your therapist
- Don't push through severe pain
- Attend all appointments
- Be patient - healing takes time

**Results:**
- Less pain
- Better movement
- Stronger muscles
- Return to activities you enjoy
- Tools to prevent future problems`,
      keyTerms: [
        { term: 'physical therapy', definition: 'Treatment that uses exercises and hands-on techniques to improve movement and reduce pain' },
        { term: 'range of motion', definition: 'How far you can move a joint in different directions' },
        { term: 'home exercise program', definition: 'Exercises prescribed by your therapist to do at home between visits' },
        { term: 'strengthening exercise', definition: 'Exercises that make your muscles stronger' },
      ],
      analogies: [
        'Physical therapy is like having a coach who helps you retrain your body after it\'s been sidelined.',
        'Your muscles are like rubber bands - stretching keeps them flexible, and strengthening makes them more resilient.',
        'Home exercises are like homework - doing them regularly is what makes the real difference.',
      ],
      examples: [
        'Someone recovering from knee replacement learning to walk normally again.',
        'An athlete doing shoulder exercises after rotator cuff surgery.',
        'A person with back pain learning core strengthening and proper lifting techniques.',
      ],
    },
    2: {
      level: 2,
      summary: 'Physical therapy encompasses evaluation-based treatment planning, therapeutic exercise, manual therapy, and modalities to restore function, reduce pain, and prevent disability across musculoskeletal conditions.',
      explanation: `Physical therapy is a cornerstone of musculoskeletal care, providing non-operative treatment and post-operative rehabilitation.

**Evaluation:**

*Subjective Assessment:*
- Chief complaint
- History of present illness
- Pain characteristics (location, intensity, timing)
- Functional limitations
- Goals and expectations

*Objective Assessment:*
- Observation (posture, gait, movement patterns)
- Range of motion (active, passive)
- Strength testing (manual muscle testing)
- Special tests (specific to condition)
- Functional testing

*Standardized Measures:*
- Visual Analog Scale (VAS) for pain
- DASH, LEFS, ODI (region-specific)
- Timed tests (sit-to-stand, gait speed)

**Therapeutic Exercise:**

*Types:*
- Range of motion (passive, active-assisted, active)
- Stretching (static, dynamic, PNF)
- Strengthening (isometric, isotonic, isokinetic)
- Endurance training
- Balance and proprioception
- Functional exercises

*Progression:*
- Start with pain-free range
- Progress resistance gradually
- Increase complexity over time
- Sport/activity-specific training

**Manual Therapy:**

*Joint Mobilization:*
- Graded I-IV (Maitland)
- Improve joint mobility
- Reduce pain

*Soft Tissue Techniques:*
- Massage
- Myofascial release
- Trigger point therapy
- Instrument-assisted (IASTM)

*Manipulation:*
- High-velocity, low-amplitude thrust
- Requires specialized training

**Modalities:**

*Thermal:*
- Heat: Increases blood flow, relaxes muscles
- Cold: Reduces inflammation, numbs pain

*Electrical:*
- TENS: Pain modulation
- NMES: Muscle activation
- Iontophoresis: Drug delivery

*Ultrasound:*
- Deep heating
- Tissue healing (limited evidence)

**Condition-Specific Approaches:**

*Post-Operative:*
- Protocol-based progression
- Protect healing tissues
- Restore ROM before strength
- Functional milestones

*Back Pain:*
- Core stabilization
- McKenzie method (directional preference)
- Manual therapy
- Education and self-management

*Shoulder:*
- Rotator cuff strengthening
- Scapular stabilization
- Progressive loading

*Knee:*
- Quadriceps strengthening
- Patellar mobilization
- Gait training

**Outcomes:**
- Pain reduction
- Improved function
- Return to activity
- Patient satisfaction
- Prevention of recurrence`,
      keyTerms: [
        { term: 'manual muscle testing', definition: 'Standardized strength assessment graded 0-5' },
        { term: 'joint mobilization', definition: 'Skilled passive movement of joint to improve mobility and reduce pain' },
        { term: 'TENS', definition: 'Transcutaneous Electrical Nerve Stimulation; electrical pain modulation' },
        { term: 'PNF stretching', definition: 'Proprioceptive Neuromuscular Facilitation; contract-relax stretching technique' },
        { term: 'isometric exercise', definition: 'Muscle contraction without joint movement' },
        { term: 'McKenzie method', definition: 'Directional preference exercise approach for spine; repeated movements' },
      ],
      analogies: [
        'Joint mobilization is like oiling a squeaky hinge to help it move more smoothly.',
        'The progression from passive to active exercises is like gradually taking off training wheels.',
        'Core stabilization exercises build your natural back support like a built-in brace.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based physical therapy integrates best available research, clinical expertise, and patient values to guide treatment selection, with emphasis on active interventions and patient education.',
      explanation: `Contemporary physical therapy practice emphasizes evidence-based active treatment approaches with measurable outcomes.

**Evidence-Based Practice:**

*Hierarchy of Evidence:*
- Systematic reviews/meta-analyses
- Randomized controlled trials
- Cohort studies
- Case series/reports
- Expert opinion

*Clinical Practice Guidelines:*
- APTA Clinical Practice Guidelines
- Condition-specific recommendations
- Grade of evidence considerations

**Movement System Approach:**

*Principles:*
- Identify movement dysfunction
- Link impairments to functional limitations
- Address underlying cause, not just symptoms
- Movement is medicine

*Regional Interdependence:*
- Distant regions affect symptomatic area
- Hip weakness → knee pain
- Thoracic mobility → shoulder function
- Treat the kinetic chain

**Pain Science:**

*Neurophysiology:*
- Peripheral sensitization
- Central sensitization
- Pain ≠ tissue damage
- Biopsychosocial model

*Education:*
- Pain neuroscience education (PNE)
- Reduces fear-avoidance
- Improves outcomes
- Evidence-based approach

**Manual Therapy Evidence:**

*Effectiveness:*
- Short-term pain relief
- Combined with exercise > alone
- Patient preference matters
- Specific technique less important than skill

*Mechanisms:*
- Neurophysiological effects
- Not structural changes
- Context and therapeutic alliance

**Exercise Prescription:**

*Dosing Parameters:*
- Frequency: 2-3x/week supervised, daily HEP
- Intensity: Based on tissue tolerance
- Time: Progressive duration
- Type: Condition-specific

*Principles:*
- Specificity
- Progressive overload
- Individualization
- Reversibility

**Outcome Measures:**

*Domains:*
- Pain intensity
- Physical function
- Disability
- Quality of life
- Patient satisfaction

*Common Instruments:*
| Region | Measure |
|--------|---------|
| Spine | ODI, NDI, RMDQ |
| Lower extremity | LEFS, KOOS, HOOS |
| Upper extremity | DASH, QuickDASH |
| General | SF-36, EQ-5D |

*MCID Values:*
- VAS: 2cm
- ODI: 10-12 points
- DASH: 10-15 points

**Specific Conditions:**

*Low Back Pain:*
- Exercise therapy strongest evidence
- Manual therapy adjunct
- Education essential
- Avoid passive modalities long-term

*Rotator Cuff Disease:*
- Supervised exercise effective
- Progressive loading
- Manual therapy for stiffness
- Surgery not always superior

*Knee OA:*
- Exercise as effective as surgery (meniscus)
- Land and aquatic options
- Weight management
- Pacing and self-management

*ACL Rehabilitation:*
- Criteria-based progression
- Return to sport 9+ months
- Neuromuscular training
- Psychological readiness`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Amplified central nervous system response to normal input; pain disproportionate to tissue state' },
        { term: 'pain neuroscience education', definition: 'Teaching patients about pain mechanisms to reduce fear and improve outcomes' },
        { term: 'regional interdependence', definition: 'Concept that dysfunction in one body region affects distant regions' },
        { term: 'MCID', definition: 'Minimal Clinically Important Difference; smallest meaningful change to patients' },
        { term: 'ODI', definition: 'Oswestry Disability Index; standard low back pain outcome measure' },
        { term: 'therapeutic alliance', definition: 'Working relationship between therapist and patient affecting outcomes' },
      ],
      clinicalNotes: 'Exercise therapy has strongest evidence for most musculoskeletal conditions. Manual therapy effective short-term but should be combined with active treatment. Pain neuroscience education improves outcomes for chronic pain. Specific manual therapy technique matters less than overall approach and therapeutic relationship.',
    },
    4: {
      level: 4,
      summary: 'Advanced physical therapy practice addresses complex patients, post-operative protocols, dry needling, and integration with orthopedic surgical care to optimize outcomes.',
      explanation: `Specialized physical therapy requires expertise in complex clinical presentations, advanced techniques, and surgical rehabilitation.

**Post-Operative Rehabilitation:**

*Principles:*
- Protect healing tissues
- Restore motion before strength
- Progress based on tissue healing
- Criteria-based advancement

*ACL Reconstruction:*
| Phase | Goals | Timeline |
|-------|-------|----------|
| 1 | ROM, quad activation | 0-6 weeks |
| 2 | Strength, gait | 6-12 weeks |
| 3 | Running, agility | 3-6 months |
| 4 | Sport-specific | 6-9 months |
| 5 | Return to sport | 9+ months |

*Return Criteria:*
- Limb symmetry index >90%
- Single-leg hop tests
- Psychological readiness (ACL-RSI)
- Quality of movement

*Rotator Cuff Repair:*
- Sling immobilization initially
- Passive ROM only early (protect repair)
- Active ROM ~6 weeks
- Strengthening ~12 weeks
- Full activity 6 months

*Total Joint:*
- Early mobilization (day of surgery)
- Weight bearing as tolerated
- ROM goals (knee: 0-90 by 2 weeks)
- Outpatient PT 2-3x/week
- Home program essential

**Advanced Techniques:**

*Dry Needling:*
- Intramuscular needle insertion
- Trigger point treatment
- State-dependent scope of practice
- Evidence: Short-term pain relief

*Blood Flow Restriction:*
- Tourniquet during exercise
- Low-load strength gains
- Post-operative applications
- Growing evidence base

*Instrument-Assisted Soft Tissue:*
- Graston, ASTYM
- Scar mobilization
- Limited evidence
- Patient tolerance varies

**Complex Patients:**

*Chronic Pain:*
- Biopsychosocial approach
- Pain neuroscience education
- Graded exposure
- Functional restoration

*Failed Surgery:*
- Identify structural vs. non-structural
- Address yellow flags
- Multidisciplinary care
- Realistic expectations

*Comorbidities:*
- Cardiovascular considerations
- Diabetes (healing, neuropathy)
- Obesity (load modifications)
- Mental health integration

**Clinical Reasoning:**

*Hypothesis Generation:*
- Pattern recognition
- Cluster of findings
- Differential diagnosis
- Rule out serious pathology

*Treatment Selection:*
- Match treatment to mechanism
- Patient preferences
- Prognosis consideration
- Shared decision-making

**Outcomes Optimization:**

*Adherence Strategies:*
- Simplify HEP
- Patient education
- Goal setting
- Self-efficacy building

*Discharge Planning:*
- Independence with program
- Maintenance exercises
- Prevention strategies
- Return precautions

**Interdisciplinary Care:**

*Communication:*
- Surgeon updates
- Precautions and protocols
- Progress reporting
- Concerns escalation

*Team Approach:*
- Physical therapy
- Occupational therapy
- Athletic training
- Psychology
- Nursing`,
      keyTerms: [
        { term: 'dry needling', definition: 'Intramuscular needle insertion targeting trigger points or dysfunctional tissue' },
        { term: 'blood flow restriction', definition: 'Training with proximal tourniquet to achieve strength gains with lower loads' },
        { term: 'limb symmetry index', definition: 'Comparison of involved to uninvolved limb performance; target >90%' },
        { term: 'ACL-RSI', definition: 'ACL Return to Sport after Injury scale; psychological readiness measure' },
        { term: 'graded exposure', definition: 'Systematic, progressive exposure to feared movements or activities' },
        { term: 'yellow flags', definition: 'Psychosocial risk factors for chronic pain and disability' },
      ],
      clinicalNotes: 'ACL return-to-sport criteria should include psychological readiness, not just strength. Post-rotator cuff repair: Protect the repair - early strengthening risks re-tear. Blood flow restriction allows strengthening at lower loads - useful post-operatively. Complex chronic pain requires multidisciplinary approach, not just more PT.',
    },
    5: {
      level: 5,
      summary: 'Contemporary physical therapy research encompasses precision rehabilitation, technology integration, prevention science, and health system optimization with emphasis on patient-centered outcomes.',
      explanation: `State-of-the-art physical therapy integrates emerging science, technology, and value-based care principles.

**Precision Rehabilitation:**

*Subgrouping:*
- Treatment-based classification
- Clinical prediction rules
- Match patient to treatment
- Improve response rates

*Example - Low Back Pain:*
- Manipulation responders (CPR)
- Stabilization responders
- Specific exercise directions
- Traction responders (limited)

*Biomarkers:*
- Imaging findings correlation
- Inflammatory markers
- Muscle characteristics
- Genetic factors (research)

**Technology Integration:**

*Wearables:*
- Activity monitoring
- Movement quality assessment
- Biofeedback
- Remote monitoring

*Virtual Reality:*
- Pain distraction
- Motor learning
- Fear of movement
- Growing evidence

*Telehealth:*
- Remote evaluation
- Exercise supervision
- Expanded access
- COVID acceleration

*Apps and Digital Tools:*
- Home exercise programs
- Patient education
- Outcome tracking
- Adherence support

**Movement Analysis:**

*Biomechanics:*
- Motion capture
- Force plates
- EMG analysis
- Real-time feedback

*Clinical Applications:*
- Running gait analysis
- Landing mechanics
- Injury risk identification
- Performance optimization

**Prevention:**

*Primary Prevention:*
- Injury prevention programs
- FIFA 11+, PEP programs
- Workplace ergonomics
- Fall prevention

*Secondary Prevention:*
- Post-injury risk reduction
- Movement retraining
- Neuromuscular training
- Education

*Effectiveness:*
- ACL injury reduction 50-70%
- Fall prevention programs effective
- Cost-effective interventions

**Research Frontiers:**

*Mechanobiology:*
- Loading effects on tissue
- Optimal loading parameters
- Tissue adaptation
- Healing optimization

*Neuroplasticity:*
- Motor learning
- Central reorganization
- Chronic pain treatment
- Skill acquisition

*Implementation Science:*
- Evidence-practice gap
- Barriers and facilitators
- Dissemination strategies
- Behavior change

**Healthcare System:**

*Value-Based Care:*
- Outcomes measurement
- Cost-effectiveness
- Episode-based payment
- Quality metrics

*Direct Access:*
- PT without physician referral
- Evidence of safety
- Cost savings
- State variation

*Practice Models:*
- Outpatient clinics
- Hospital-based
- Home health
- Sports/performance
- Industrial/occupational

**Workforce:**

*Specialization:*
- Board certification (OCS, SCS, NCS)
- Residency/fellowship training
- Advanced practice

*Interprofessional:*
- Team-based care
- Shared decision-making
- Communication skills
- Role clarity

**Patient-Centered Care:**

*Shared Decision-Making:*
- Patient preferences
- Treatment options
- Risks and benefits
- Informed consent

*Health Literacy:*
- Clear communication
- Teach-back method
- Written materials
- Cultural competency

*Patient Engagement:*
- Active participation
- Self-management
- Goal setting
- Health behavior change`,
      keyTerms: [
        { term: 'clinical prediction rule', definition: 'Combination of findings predicting treatment response or prognosis' },
        { term: 'mechanobiology', definition: 'Study of how mechanical forces affect biological tissue adaptation and healing' },
        { term: 'implementation science', definition: 'Study of methods to promote uptake of research findings into routine practice' },
        { term: 'direct access', definition: 'Patient ability to receive PT without physician referral' },
        { term: 'OCS', definition: 'Orthopedic Clinical Specialist; board certification in orthopedic PT' },
        { term: 'neuroplasticity', definition: 'Brain\'s ability to reorganize neural pathways; basis for motor learning' },
      ],
      clinicalNotes: `**Key Evidence:**
- Exercise therapy effective for most MSK conditions
- Manual therapy as adjunct, not standalone
- Active > passive approaches long-term
- Patient education improves outcomes
- Prevention programs work (50-70% ACL reduction)

**Emerging Practice:**
- Telehealth expanding access
- Wearables for monitoring
- Blood flow restriction gaining evidence
- Precision rehabilitation promising

**System Considerations:**
- Direct access safe and cost-effective
- Value-based care driving outcomes focus
- Specialization improves care
- Implementation gap remains challenge`,
    },
  },

  media: [
    {
      id: 'therapeutic-exercise-progression',
      type: 'diagram',
      filename: 'exercise-progression.svg',
      title: 'Therapeutic Exercise Progression',
      description: 'ROM to strength to function to sport-specific',
    },
    {
      id: 'manual-therapy-grades',
      type: 'diagram',
      filename: 'mobilization-grades.svg',
      title: 'Joint Mobilization Grades',
      description: 'Maitland grades I-IV and their applications',
    },
  ],
  citations: [
    {
      id: 'apta-guidelines',
      type: 'article',
      title: 'APTA Clinical Practice Guidelines',
      source: 'American Physical Therapy Association',
      url: 'https://www.apta.org/',
      license: 'Copyright APTA',
    },
    {
      id: 'jospt-articles',
      type: 'article',
      title: 'Journal of Orthopaedic & Sports Physical Therapy',
      source: 'JOSPT',
      url: 'https://www.jospt.org/',
      license: 'Copyright JOSPT',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-rehabilitation-principles', targetType: 'topic', relationship: 'sibling', label: 'Rehabilitation Principles' },
    { targetId: 'ortho-sports-injuries', targetType: 'condition', relationship: 'related', label: 'Sports Injuries' },
    { targetId: 'ortho-back-pain', targetType: 'condition', relationship: 'related', label: 'Back Pain' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['rehabilitation', 'physical therapy', 'orthopedics', 'sports medicine'],
    keywords: ['physical therapy', 'rehabilitation', 'exercise', 'manual therapy', 'recovery'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: false, nbme: false, shelf: [] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default physicalTherapyContent;
