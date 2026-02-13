import type { EducationalContent } from '../../types';

export const patientCenteredTeams: EducationalContent = {
  id: 'patient-centered-teams',
  type: 'concept',
  name: 'Patient-Centered Teams',
  alternateNames: ['Patient-Focused Care Teams', 'Collaborative Patient Care', 'Patient Partnership'],

  levels: {
    1: {
      level: 1,
      summary: 'Patient-centered teams are healthcare groups that focus on the patient\'s needs, preferences, and values when making care decisions.',
      explanation: `**What is a Patient-Centered Team?**

A patient-centered team is a group of healthcare workers who:
- Put the patient at the center of all decisions
- Listen to what the patient wants
- Include the patient in planning care
- Work together to help the patient

**Who is on the Team?**

The team includes:
- Doctors and nurses
- Therapists and specialists
- The patient
- The patient\'s family or caregivers

**How Teams Work Together:**

**They Share Information:**
- Talk to each other about the patient
- Share test results and notes
- Make sure everyone knows the plan

**They Ask the Patient:**
- What are your goals?
- What matters most to you?
- What worries you?
- What has worked before?

**They Support Each Other:**
- Each person has a special role
- They help each other
- They focus on the patient\'s needs

**Why This Matters:**

When teams work this way:
- Patients are happier
- Care is safer
- Patients follow the plan better
- Health outcomes improve`,
      keyTerms: [
        { term: 'patient-centered', definition: 'Care that focuses on the patient\'s needs, preferences, and values' },
        { term: 'care team', definition: 'A group of healthcare workers who work together to care for a patient' },
        { term: 'shared decision-making', definition: 'When patients and providers make healthcare decisions together' },
      ],
      analogies: ['A patient-centered team is like a sports team where the patient is the captain and everyone plays a role to help them win'],
      examples: ['A team meets with a patient to discuss treatment options and chooses the one that fits the patient\'s lifestyle best'],
      patientCounselingPoints: ['You are an important member of your healthcare team', 'Your opinions and goals matter in your care decisions', 'Ask questions and share what is important to you'],
    },
    2: {
      level: 2,
      summary: 'Patient-centered teams integrate the patient as an active participant in care planning, with providers coordinating to deliver personalized, respectful care.',
      explanation: `## Core Principles

**Respect for Patient Values:**
- Care aligns with patient preferences
- Cultural beliefs are honored
- Personal goals guide treatment
- Autonomy is supported

**Coordination and Integration:**
- Seamless care across settings
- Clear communication among providers
- Reduced fragmentation
- Single care plan

**Information and Education:**
- Patients receive understandable information
- Health literacy is accommodated
- Teaching uses multiple methods
- Questions are encouraged

**Physical Comfort:**
- Pain management
- Environmental comfort
- Support for daily activities
- Attention to privacy

**Emotional Support:**
- Addressing fears and anxieties
- Support for families
- Mental health attention
- Spiritual care when desired

## The Team Approach

**Team Composition:**
- Primary provider (physician, NP, PA)
- Nursing staff
- Specialists as needed
- Allied health professionals
- Pharmacists
- Social workers
- Care coordinators
- Patient and family

**Team Functions:**
- Collaborative goal-setting
- Shared care planning
- Coordinated implementation
- Joint monitoring
- Mutual support

## Patient Engagement

**Levels of Engagement:**

**Information Sharing:**
- Patient receives information
- One-way communication
- Basic level of engagement

**Consultation:**
- Patient opinions sought
- Feedback incorporated
- Greater involvement

**Partnership:**
- Equal decision-making
- Shared responsibility
- Highest engagement level

**Strategies for Engagement:**
- Teach-back method
- Decision aids
- Goal elicitation
- Regular check-ins
- Accessible communication`,
      keyTerms: [
        { term: 'patient engagement', definition: 'The level of patient involvement in their own healthcare decisions and management' },
        { term: 'health literacy', definition: 'The ability to obtain, process, and understand basic health information' },
        { term: 'care plan', definition: 'A written plan that outlines a patient\'s health goals and the steps to achieve them' },
      ],
      analogies: ['Patient-centered care is like a GPS - the patient chooses the destination and the team helps navigate the best route'],
      examples: ['A diabetes care team includes the patient in setting blood sugar targets based on their daily routine and preferences'],
      patientCounselingPoints: ['Ask to be included in care planning discussions', 'Share your goals and what matters to you', 'Bring a list of questions to appointments'],
    },
    3: {
      level: 3,
      summary: 'Patient-centered teams are an evidence-based approach to care delivery that improves quality, safety, and patient experience through collaborative practice.',
      explanation: `## Evidence Base

**Research Findings:**
- Improved patient satisfaction scores
- Better health outcomes
- Reduced hospitalizations
- Enhanced medication adherence
- Lower healthcare costs
- Improved provider satisfaction

**Institute of Medicine:**
Patient-centeredness is one of six aims for healthcare improvement:
- Safe
- Effective
- Patient-centered
- Timely
- Efficient
- Equitable

## Patient-Centered Medical Home (PCMH)

**Key Features:**
- Personal physician relationship
- Team-based care
- Whole-person orientation
- Care coordination
- Quality and safety focus
- Enhanced access
- Payment reform support

**Team-Based Elements:**
- Expanded access to care team
- Group visits
- Care coordination
- Health coaching
- Self-management support

## Implementation Strategies

**Structural Changes:**
- Redesigned care teams
- New roles (health coaches, navigators)
- Team huddles
- Shared workspaces

**Process Changes:**
- Agenda-setting with patients
- Collaborative care planning
- Team documentation
- Patient portal engagement

**Training Requirements:**
- Team communication skills
- Patient engagement techniques
- Cultural competency
- Shared decision-making

## Measurement

**Patient Experience:**
- CAHPS surveys
- Patient-reported outcomes
- Activation measures
- Relationship quality

**Clinical Outcomes:**
- Disease-specific measures
- Functional status
- Quality of life
- Utilization metrics

**Process Measures:**
- Shared decision-making documentation
- Care plan development
- Patient goal-setting
- Team communication`,
      keyTerms: [
        { term: 'Patient-Centered Medical Home', definition: 'Care delivery model organized around patient needs with team-based approach' },
        { term: 'CAHPS', definition: 'Consumer Assessment of Healthcare Providers and Systems - standardized patient survey' },
        { term: 'patient activation', definition: 'Patient\'s knowledge, skills, and confidence for managing their health' },
      ],
      clinicalNotes: 'Implement team huddles. Use patient agendas. Document shared decision-making. Measure patient experience.',
    },
    4: {
      level: 4,
      summary: 'Effective patient-centered teams require sophisticated coordination mechanisms, role clarity, and systematic approaches to engaging diverse patient populations.',
      explanation: `## Team Dynamics

**Role Clarity:**
- Clear scope of practice
- Complementary skills
- Overlapping competencies for flexibility
- Shared accountability

**Communication Structures:**
- Daily team huddles
- Pre-visit planning
- Real-time messaging
- Shared documentation

**Decision-Making:**
- Clinical decisions: Provider-led with input
- Care plan decisions: Collaborative
- Self-management decisions: Patient-led with support
- Escalation protocols for disagreements

## Care Coordination

**Proactive Planning:**
- Risk stratification
- Predictive analytics
- Pre-visit preparation
- Gap closure initiatives

**Transitions Management:**
- Handoff protocols
- Warm handoffs
- Patient navigation
- Follow-up systems

**Information Flow:**
- EHR optimization
- Patient-generated data
- Registries and panels
- Population management tools

## Addressing Health Disparities

**Cultural Humility:**
- Self-reflection
- Lifelong learning
- Patient as expert on their experience
- Institutional accountability

**Language Access:**
- Professional interpretation
- Translated materials
- Bilingual staff
- Technology support

**Social Determinants:**
- Screening protocols
- Resource navigation
- Community partnerships
- Advocacy

## Special Populations

**Chronic Disease:**
- Self-management education
- Peer support
- Telehealth monitoring
- Medication optimization

**Mental Health Integration:**
- Collaborative care models
- Behavioral health consultation
- Destigmatization
- Whole-person approach

**Geriatrics:**
- Caregiver inclusion
- Functional focus
- Advance care planning
- Frailty considerations

**Pediatrics:**
- Family-centered approach
- Developmental considerations
- School coordination
- Transition to adult care`,
      keyTerms: [
        { term: 'collaborative care model', definition: 'Integrated approach to mental health care in primary care settings' },
        { term: 'health disparities', definition: 'Preventable differences in health outcomes among different groups' },
        { term: 'risk stratification', definition: 'Categorizing patients by risk level to allocate resources appropriately' },
      ],
      clinicalNotes: 'Establish clear team roles. Implement proactive care coordination. Address health disparities intentionally. Tailor approaches to population needs.',
    },
    5: {
      level: 5,
      summary: 'Patient-centered teams represent a fundamental transformation in healthcare delivery requiring organizational redesign, payment reform, and continuous innovation to fully realize their potential.',
      explanation: `## Organizational Transformation

**Leadership and Culture:**
- Executive commitment to patient-centeredness
- Psychological safety for teams
- Learning organization mindset
- Patient voice in governance

**Workforce Development:**
- Interprofessional education
- Team training
- Communication competencies
- Adaptive reserve

**Physical Environment:**
- Team workspaces
- Patient-friendly design
- Technology integration
- Privacy considerations

## Payment and Policy

**Alternative Payment Models:**
- Capitation
- Bundled payments
- Shared savings
- Pay for performance

**Value-Based Contracting:**
- Total cost of care accountability
- Quality metric alignment
- Patient experience weighting
- Health equity measures

**Policy Support:**
- Scope of practice reform
- Telehealth expansion
- Health information exchange
- Anti-discrimination enforcement

## Innovation Frontiers

**Artificial Intelligence:**
- Predictive risk stratification
- Natural language processing
- Decision support
- Workflow optimization

**Digital Health:**
- Remote monitoring
- Patient-facing apps
- Wearables integration
- Asynchronous care

**Community Integration:**
- Accountable health communities
- Social prescribing
- Community health workers
- Addressing unmet social needs

## Implementation Science

**Complex Intervention Framework:**
- Context assessment
- Stakeholder engagement
- Iterative adaptation
- Sustainability planning

**Measurement Challenges:**
- Attribution of outcomes
- Long-term follow-up
- Cost-effectiveness
- Implementation fidelity

**Spread and Scale:**
- Learning networks
- Best practice sharing
- Policy alignment
- Continuous innovation

## Future Directions

**Precision Health:**
- Genomics integration
- Personalized medicine
- Risk prediction
- Tailored interventions

**Patient and Family Partnership:**
- Co-design of care
- Patient advisory councils
- Experience-based co-design
- Authentic engagement

**Global Health:**
- Adaptation to low-resource settings
- Community health worker models
- Task shifting
- Universal health coverage alignment`,
      keyTerms: [
        { term: 'accountable health communities', definition: 'Models that address social needs through healthcare and community partnership' },
        { term: 'social prescribing', definition: 'Connecting patients to non-medical community resources for health improvement' },
        { term: 'experience-based co-design', definition: 'Methodology involving patients and staff in redesigning services based on experiences' },
      ],
      clinicalNotes: 'Transform care through organizational commitment. Engage in payment reform. Embrace innovation thoughtfully. Center patient voice in all improvement efforts.',
    },
  },

  media: [],
  citations: [
    { id: 'iom-crossing', type: 'textbook', title: 'Crossing the Quality Chasm', source: 'Institute of Medicine' },
    { id: 'pcmh-eval', type: 'article', title: 'Patient-Centered Medical Home Evaluation', source: 'Annals of Family Medicine' }
  ],
  crossReferences: [
    { targetId: 'care-coordination', targetType: 'concept', relationship: 'related', label: 'Care Coordination' },
    { targetId: 'transitions-of-care', targetType: 'concept', relationship: 'related', label: 'Transitions of Care' }
  ],
  tags: {
    systems: [],
    topics: ['interprofessional', 'patient-centered care', 'quality'],
    keywords: ['patient-centered', 'team-based care', 'shared decision-making', 'PCMH'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};

export default patientCenteredTeams;
