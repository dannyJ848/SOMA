/**
 * Occupational Therapy Principles - Comprehensive Educational Content
 *
 * Covers the fundamental principles of occupational therapy including
 * meaningful activity, client-centered practice, and functional independence.
 */

import { EducationalContent } from '../../types';

export const occupationalTherapyPrinciples: EducationalContent = {
  id: 'rehab-occupational-therapy-principles',
  type: 'concept',
  name: 'Occupational Therapy Principles',
  alternateNames: ['OT Fundamentals', 'Occupational Therapy Basics'],

  levels: {
    1: {
      level: 1,
      summary: 'Occupational therapy helps you do the everyday activities that matter to you, like getting dressed, cooking, or working.',
      explanation: `Occupational therapy (OT) helps people do the things they need and want to do every day. In OT, "occupation" doesn't just mean your job - it means all the activities that "occupy" your time and give your life meaning.

**What activities does OT help with?**

**Self-Care (taking care of yourself):**
- Getting dressed
- Bathing and grooming
- Eating and feeding yourself
- Using the bathroom

**Home Activities:**
- Cooking meals
- Cleaning
- Doing laundry
- Managing money

**Work and School:**
- Using a computer
- Writing
- Job tasks
- Studying

**Fun and Leisure:**
- Hobbies you enjoy
- Playing with children or grandchildren
- Sports and exercise
- Social activities

**How does OT help?**
An occupational therapist looks at what you're having trouble doing and finds ways to help you:
- Practice doing activities in new ways
- Build up strength and coordination
- Use special tools or equipment
- Change how your home is set up
- Break activities into easier steps

**The OT believes:**
- Doing meaningful activities helps you heal
- You are the expert on your own life
- Everyone deserves to do the things they love
- There's always a way to adapt and succeed

Occupational therapists help people of all ages - from babies to elderly adults - live life to the fullest!`,
      keyTerms: [
        { term: 'occupational therapy', definition: 'Treatment that helps you do everyday activities that are important to you' },
        { term: 'occupation', definition: 'Any activity that takes up your time, including self-care, work, and fun activities' },
        { term: 'self-care', definition: 'Activities like bathing, dressing, and eating that you do to take care of yourself' },
        { term: 'activities of daily living', definition: 'Basic everyday tasks like getting dressed, eating, and bathing' },
      ],
      analogies: [
        'An occupational therapist is like a life coach for daily activities - they help you find the best way to do the things that matter to you.',
        'OT is like having a personal problem-solver who looks at what\'s hard for you and finds creative solutions.',
      ],
      examples: [
        'After a stroke, an OT helps you learn to button your shirt with one hand.',
        'If arthritis makes cooking painful, an OT shows you easier ways to prepare meals and special tools to use.',
      ],
    },
    2: {
      level: 2,
      summary: 'Occupational therapy is a client-centered profession that enables participation in meaningful daily activities (occupations) through therapeutic intervention, environmental modification, and adaptive strategies.',
      explanation: `Occupational therapy (OT) is a healthcare profession focused on helping people participate in the activities (occupations) that give their lives meaning. OTs work with people across the lifespan who have physical, cognitive, sensory, or mental health challenges.

**Core Philosophy of OT:**

**1. Occupation as Therapy**
- Engagement in meaningful activity promotes health and healing
- "Doing" is fundamental to human well-being
- Activities have physical, cognitive, social, and emotional components

**2. Client-Centered Practice**
- The client is the center of all decisions
- Interventions reflect client priorities and values
- Collaborative goal-setting between therapist and client

**3. Holistic Approach**
- Considers the whole person, not just the diagnosis
- Addresses physical, cognitive, emotional, and social aspects
- Considers environmental and contextual factors

**Categories of Occupation:**

| Category | Examples |
|----------|----------|
| Activities of Daily Living (ADL) | Bathing, dressing, eating, toileting, grooming |
| Instrumental ADL (IADL) | Cooking, cleaning, shopping, finances, medication management |
| Work/Productivity | Employment, volunteering, education |
| Leisure | Hobbies, sports, social activities |
| Rest and Sleep | Sleep preparation, sleep participation |
| Social Participation | Community, family, friendships |

**The OT Process:**

**1. Evaluation**
- Occupational profile: understanding client's life and priorities
- Analysis of occupational performance
- Identifying strengths and barriers

**2. Intervention**
- Creating/promoting: health promotion activities
- Establishing/restoring: remediation of skills
- Maintaining: preserving capabilities
- Modifying: adapting activities or environment
- Preventing: addressing risk factors

**3. Outcomes**
- Measuring progress toward goals
- Client satisfaction with participation
- Quality of life improvements

**OT Practice Areas:**
- Pediatrics: developmental delays, autism, school function
- Physical rehabilitation: stroke, injury, surgery recovery
- Mental health: coping skills, life skills, recovery
- Geriatrics: aging in place, dementia care
- Hand therapy: upper extremity rehabilitation
- Work rehabilitation: return to employment`,
      keyTerms: [
        { term: 'ADL', definition: 'Activities of Daily Living - basic self-care tasks like dressing, bathing, eating', pronunciation: 'A-D-L' },
        { term: 'IADL', definition: 'Instrumental Activities of Daily Living - complex tasks like cooking, finances, shopping', pronunciation: 'I-A-D-L' },
        { term: 'client-centered practice', definition: 'Approach where treatment priorities are determined by the client\'s values and goals' },
        { term: 'occupational profile', definition: 'Summary of client\'s occupational history, patterns, and priorities' },
        { term: 'occupational performance', definition: 'The ability to carry out activities of daily life' },
      ],
      analogies: [
        'OT is like being a detective and inventor combined - first figuring out what\'s making activities hard, then creating solutions.',
        'The occupational profile is like a biography of your daily life - it tells the therapist who you are and what matters to you.',
      ],
    },
    3: {
      level: 3,
      summary: 'Occupational therapy practice integrates theoretical models, evidence-based assessment, and occupation-based intervention within the Occupational Therapy Practice Framework to optimize engagement, participation, and quality of life.',
      explanation: `## Theoretical Foundations

**Occupational Therapy Practice Framework (OTPF-4):**
The official document guiding OT practice, addressing:
- Domain: what OTs address
- Process: how OTs deliver services

**Key OT Models:**

**Model of Human Occupation (MOHO):**
- Volition: motivation and values
- Habituation: roles and routines
- Performance capacity: underlying abilities
- Environment: physical and social context

**Person-Environment-Occupation (PEO) Model:**
- Occupational performance as the intersection of:
  - Person factors
  - Environmental factors
  - Occupation demands
- "Fit" determines successful performance

**Canadian Model of Occupational Performance and Engagement (CMOP-E):**
- Spirituality at the core
- Person: cognitive, affective, physical components
- Environment: physical, institutional, cultural, social
- Occupation: self-care, productivity, leisure

## Assessment Approaches

**Top-Down vs. Bottom-Up:**
- Top-down: start with occupational performance, then identify underlying factors
- Bottom-up: assess components (strength, cognition), then address occupation
- Current evidence favors top-down approach

**Standardized Assessments:**

| Assessment | Domain | Format |
|------------|--------|--------|
| Canadian Occupational Performance Measure (COPM) | Client priorities | Interview |
| Assessment of Motor and Process Skills (AMPS) | ADL performance | Observation |
| Functional Independence Measure (FIM) | ADL/mobility | Rating scale |
| Montreal Cognitive Assessment (MoCA) | Cognition | Performance |
| Kohlman Evaluation of Living Skills (KELS) | IADL | Task-based |

**Activity Analysis:**
Systematic breakdown of activity demands:
- Objects and properties used
- Space demands
- Social demands
- Sequencing and timing
- Required body functions
- Required body structures

## Intervention Approaches

**Occupation-Based Intervention:**
- Using actual occupations as therapeutic medium
- Real-world context preferred
- Meaningful to client

**Preparatory Activities:**
- Exercise, modalities, splinting
- Prepares client for occupation
- Should lead to occupation-based practice

**Compensatory/Adaptive Strategies:**
- Modify task demands
- Modify environment
- Assistive technology
- Alternative methods

**Remediation/Restoration:**
- Address underlying impairments
- Improve component skills
- Transfer to occupation

## Frames of Reference

**Biomechanical:**
- Address ROM, strength, endurance
- Applicable to musculoskeletal conditions
- Structural stability required

**Rehabilitative/Compensatory:**
- Adapt task or environment
- Work around deficits
- Focus on function despite impairment

**Neurodevelopmental/Motor Control:**
- Facilitate normal movement patterns
- Inhibit abnormal patterns
- Task-specific practice

**Cognitive/Cognitive-Behavioral:**
- Address thought patterns
- Develop coping strategies
- Behavioral modification

## Documentation

**SOAP Format:**
- Subjective: client report
- Objective: measurable observations
- Assessment: clinical interpretation
- Plan: next steps

**Goal Writing:**
- Client-centered
- Occupation-focused
- Measurable
- Time-bound`,
      keyTerms: [
        { term: 'OTPF', definition: 'Occupational Therapy Practice Framework - official document guiding OT domain and process', pronunciation: 'O-T-P-F' },
        { term: 'MOHO', definition: 'Model of Human Occupation - theoretical model addressing volition, habituation, and performance', pronunciation: 'MO-ho' },
        { term: 'activity analysis', definition: 'Systematic breakdown of activity demands to guide intervention planning' },
        { term: 'top-down assessment', definition: 'Approach beginning with occupational performance before examining underlying components' },
        { term: 'COPM', definition: 'Canadian Occupational Performance Measure - interview assessing client-identified priorities' },
        { term: 'frame of reference', definition: 'Theoretical structure guiding evaluation and intervention approaches' },
      ],
      clinicalNotes: 'Contemporary evidence strongly supports occupation-based intervention over preparatory activities alone. The COPM provides excellent client-centered goals. Activity analysis is fundamental to grading and adapting interventions. Document progress using functional, occupation-based outcomes.',
    },
    4: {
      level: 4,
      summary: 'Occupational therapy integrates occupation science, evidence-based assessment tools, and specialized intervention protocols within client-centered frameworks to address complex occupational challenges across populations and practice settings.',
      explanation: `## Occupation Science

**Foundational Concepts:**
- Occupation as determinant of health
- Occupational justice: right to meaningful occupation
- Occupational deprivation: barriers to occupation
- Occupational balance: healthy distribution of occupations

**Occupational Transitions:**
- Life stages and role changes
- Illness/injury occupational disruption
- Recovery and adaptation processes
- Occupational identity reconstruction

## Advanced Assessment

**Ecological Assessment:**
- Observation in natural contexts
- Environment-occupation-person fit analysis
- Real-world performance vs. clinical performance

**Complex Assessment Batteries:**

*Neurological:*
- Cognitive: MoCA, LOTCA, Trail Making
- Perceptual: MVPT, Motor-Free Visual Perception
- Executive function: Executive Function Performance Test

*Hand/Upper Extremity:*
- Purdue Pegboard
- Jebsen-Taylor Hand Function Test
- Nine-Hole Peg Test
- Grip/pinch dynamometry

*Driving:*
- Occupational Therapy Driver Off-Road Assessment (OT-DORA)
- On-road evaluation

**Performance-Based Assessment:**
- Executive Function Performance Test (EFPT)
- Assessment of Motor and Process Skills (AMPS)
- Performance Assessment of Self-Care Skills (PASS)

## Specialized Intervention Protocols

**Constraint-Induced Movement Therapy (CIMT):**
- Restraint of less-affected limb
- Intensive practice with affected limb
- Structured practice 6 hours/day for 2 weeks
- Transfer package for real-world use
- Strong evidence for stroke upper extremity

**Cognitive Orientation to Daily Occupational Performance (CO-OP):**
- Global strategy: Goal-Plan-Do-Check
- Domain-specific strategies
- Guided discovery
- Evidence for stroke, TBI, developmental coordination disorder

**Sensory Integration (Ayres Sensory Integration):**
- Specific fidelity criteria
- Child-directed
- Just-right challenge
- Adaptive response
- Rich sensory environment

**Lifestyle Redesign:**
- Developed for healthy aging
- Didactic and experiential components
- Occupational self-analysis
- Evidence from Well Elderly Studies

## Population-Specific Practice

**Stroke Rehabilitation:**
- Upper extremity recovery emphasis
- ADL training
- Cognition and perception intervention
- Driving evaluation
- Return to work/roles

**Traumatic Brain Injury:**
- Cognitive rehabilitation
- Behavioral management
- Community reintegration
- Vocational rehabilitation

**Spinal Cord Injury:**
- ADL with adaptive equipment
- Wheelchair skills
- Home/vehicle modification
- Attendant training

**Hand Therapy:**
- CHT credential requirements
- Splinting and orthotic fabrication
- Manual therapy techniques
- Work simulation

**Mental Health:**
- Recovery model orientation
- Life skills training
- Social skills groups
- Vocational support

## Assistive Technology

**Assessment Process:**
- HAAT model: Human Activity Assistive Technology
- Matching person and technology
- Training and follow-up

**Categories:**
- Low-tech: built-up handles, reachers
- Mid-tech: powered mobility, environmental controls
- High-tech: smart home, speech generating devices

## Ethical Considerations

**Autonomy and Self-Determination:**
- Respect client choices
- Support informed decision-making
- Cultural competence

**Justice:**
- Access to services
- Advocacy for occupational rights
- Addressing disparities`,
      keyTerms: [
        { term: 'occupational science', definition: 'Academic discipline studying humans as occupational beings' },
        { term: 'occupational justice', definition: 'Concept that all people have the right to engage in meaningful occupations' },
        { term: 'CIMT', definition: 'Constraint-Induced Movement Therapy - intensive upper extremity rehabilitation with restraint of less-affected arm' },
        { term: 'CO-OP', definition: 'Cognitive Orientation to Daily Occupational Performance - cognitive strategy approach using Goal-Plan-Do-Check' },
        { term: 'CHT', definition: 'Certified Hand Therapist - advanced credential for hand/upper extremity therapists' },
        { term: 'HAAT model', definition: 'Human Activity Assistive Technology model guiding AT assessment and selection' },
      ],
      clinicalNotes: 'CIMT has strong evidence for chronic stroke (>6 months) but requires high intensity and client motivation. CO-OP is effective across diagnoses when clients can participate in problem-solving. Assistive technology decisions should prioritize user acceptance and practical factors alongside functional benefit.',
    },
    5: {
      level: 5,
      summary: 'Contemporary occupational therapy integrates precision assessment, emerging intervention approaches, telehealth delivery, and implementation science within healthcare systems while advancing occupational justice and participation equity.',
      explanation: `## Evolving Theoretical Frameworks

**Transactional Perspectives:**
- Occupation as transaction between person-context-time
- Dynamic, emergent occupational performance
- Temporal dimensions of occupation
- Occupational consciousness

**Complexity Science Applications:**
- Non-linear recovery patterns
- Emergence in rehabilitation
- Adaptive systems thinking
- Implications for intervention timing

## Precision OT Practice

**Assessment Precision:**
- Standardized assessment selection algorithms
- Normative data application
- Minimally important difference interpretation
- Outcome prediction models

**Intervention Precision:**
- Phenotyping for treatment selection
- Dose-response optimization
- Responder identification
- Personalized intervention pathways

**Technology Integration:**
- Wearable sensors for activity monitoring
- Computer-adaptive testing
- AI-assisted treatment planning
- Virtual/augmented reality assessment

## Emerging Intervention Approaches

**Telehealth OT:**
- Synchronous and asynchronous delivery
- Home-based assessment advantages
- Technology literacy considerations
- Evidence for effectiveness

**mHealth Applications:**
- Smartphone-based interventions
- Reminder and tracking systems
- Gamification of rehabilitation
- Remote monitoring

**Brain-Computer Interface:**
- Upper extremity rehabilitation
- Cognitive rehabilitation applications
- Emerging evidence base
- Accessibility considerations

**Virtual Reality:**
- ADL simulation
- Cognitive training
- Upper extremity rehabilitation
- Home and community simulation

## Healthcare System Integration

**Value-Based Care:**
- Outcome measurement requirements
- Cost-effectiveness evidence
- Episode-of-care models
- Quality metrics

**Interprofessional Practice:**
- Role clarity and overlap
- Collaborative care models
- Communication strategies
- Shared decision-making

**Care Transitions:**
- Acute to rehabilitation
- Inpatient to community
- Role in care coordination
- Discharge planning

## Research Frontiers

**Implementation Science:**
- Evidence-practice gaps in OT
- Implementation strategy research
- Sustainment of evidence-based practice
- Scale-up considerations

**Occupation Science Advancement:**
- Occupation and health relationships
- Occupational transition studies
- Cultural occupation research
- Temporal occupation patterns

**Intervention Research:**
- Mechanism studies
- Dose-response relationships
- Comparative effectiveness
- Real-world effectiveness

## Occupational Justice and Equity

**Health Disparities:**
- Access to OT services
- Cultural responsiveness
- Socioeconomic factors
- Geographic disparities

**Global OT Practice:**
- WHO Rehabilitation 2030
- International classification alignment
- Resource-limited settings
- Task-shifting considerations

**Policy Advocacy:**
- Reimbursement advocacy
- Practice act protection
- Health policy engagement
- Professional representation

## Professional Development

**Specialty Certification:**
- AOTA Board Certifications
- BCG: Gerontology
- BCP: Pediatrics
- BCMH: Mental Health
- BCW: Work/Industry
- SCDCM: Driving/Community Mobility

**Doctoral Education:**
- Clinical doctorate (OTD)
- Research doctorate (PhD)
- Practice-scholar model
- Leadership development

**Lifelong Learning:**
- Evidence-based practice skills
- Emerging area development
- Interprofessional competence
- Cultural humility

## Future Directions

**Technology Evolution:**
- AI-enhanced assessment
- Robotics integration
- Smart home applications
- Personalized digital interventions

**Practice Expansion:**
- Primary care integration
- Population health
- Prevention emphasis
- Community-based practice

**Workforce Development:**
- Addressing shortages
- Diversity enhancement
- Rural/underserved access
- International mobility`,
      keyTerms: [
        { term: 'transactional perspective', definition: 'View of occupation as dynamic transaction between person, context, and time rather than static phenomenon' },
        { term: 'precision rehabilitation', definition: 'Approach matching intervention characteristics to individual patient phenotypes for optimized outcomes' },
        { term: 'implementation science', definition: 'Study of methods to promote integration of evidence-based practices into routine clinical care' },
        { term: 'occupational deprivation', definition: 'External circumstances preventing engagement in necessary or meaningful occupations' },
        { term: 'mHealth', definition: 'Mobile health - healthcare delivery and monitoring via mobile devices' },
        { term: 'task-shifting', definition: 'Strategy of delegating tasks to less specialized workers to increase service access' },
      ],
      clinicalNotes: `Key contemporary considerations:
1. Telehealth has demonstrated effectiveness but requires attention to digital access and literacy
2. Implementation science provides frameworks for closing evidence-practice gaps
3. Occupational justice lens reveals systemic barriers to participation
4. Technology integration must be balanced with human-centered care
5. Value-based care requires robust outcome measurement
6. Interprofessional collaboration essential for complex patient needs
7. Global perspective enriches practice while recognizing contextual differences`,
    },
  },

  media: [
    {
      id: 'ot-process-diagram',
      type: 'diagram',
      filename: 'ot-process-diagram.svg',
      title: 'Occupational Therapy Process',
      description: 'Flowchart showing evaluation, intervention, and outcomes in OT',
    },
    {
      id: 'peo-model-diagram',
      type: 'diagram',
      filename: 'peo-model-diagram.svg',
      title: 'Person-Environment-Occupation Model',
      description: 'Venn diagram showing interaction of person, environment, and occupation',
    },
  ],

  citations: [
    {
      id: 'aota-otpf',
      type: 'article',
      title: 'Occupational Therapy Practice Framework: Domain and Process (4th ed.)',
      authors: ['American Occupational Therapy Association'],
      source: 'American Journal of Occupational Therapy',
    },
    {
      id: 'kielhofner-moho',
      type: 'textbook',
      title: 'Model of Human Occupation: Theory and Application',
      authors: ['Taylor, R.R.'],
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-adl-training', targetType: 'topic', relationship: 'child', label: 'ADL Training' },
    { targetId: 'rehab-cognitive-rehabilitation', targetType: 'topic', relationship: 'child', label: 'Cognitive Rehabilitation' },
    { targetId: 'rehab-home-modifications', targetType: 'topic', relationship: 'child', label: 'Home Modifications' },
  ],

  tags: {
    systems: ['neurological', 'musculoskeletal'],
    topics: ['rehabilitation', 'occupational therapy', 'ADL', 'independence'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default occupationalTherapyPrinciples;
