/**
 * Collaborative Practice - Working Together Across Health Professions
 */

import { EducationalContent } from '../../types';

export const collaborativePractice: EducationalContent = {
  id: 'interprofessional-collaborative-practice',
  type: 'concept',
  name: 'Interprofessional Collaborative Practice',
  alternateNames: ['IPC', 'Team-Based Practice', 'Collaborative Care'],

  levels: {
    1: {
      level: 1,
      summary: 'Collaborative practice means different healthcare professionals work together as a team to give you the best care possible.',
      explanation: `**What is Collaborative Practice?**

Instead of each healthcare worker doing their job alone, collaborative practice means they work together, share information, and make decisions as a team.

**What It Looks Like:**

- Your doctor, nurse, and pharmacist talk to each other about your care
- Team meetings discuss your treatment plan
- Everyone shares their expertise
- You are included as part of the team

**Benefits for You:**

- Fewer errors and mix-ups
- Care that considers all parts of your health
- Better communication
- More people watching out for you

**Your Role:**

You are the most important member of the team! Share your preferences, ask questions, and participate in decisions.`,
      keyTerms: [
        { term: 'collaborative practice', definition: 'Healthcare professionals working together to provide coordinated care' },
        { term: 'healthcare team', definition: 'All the people from different professions who help care for you' },
        { term: 'shared decision-making', definition: 'When patients and providers make healthcare choices together' },
      ],
      analogies: ['A healthcare team is like an orchestra - different instruments work together to create beautiful music'],
      examples: ['The doctor, nurse, pharmacist, and social worker meet together to plan Marias discharge from the hospital'],
      patientCounselingPoints: ['You are part of the team', 'Your preferences and goals matter in every decision'],
    },
    2: {
      level: 2,
      summary: 'Interprofessional collaborative practice optimizes health outcomes by leveraging the unique skills of multiple professions.',
      explanation: `## Defining Collaborative Practice

**WHO Definition:**
Multiple health workers from different professional backgrounds provide comprehensive services by working with patients, families, carers, and communities.

**Key Elements:**
- Multiple disciplines
- Shared goals
- Coordinated effort
- Patient/family centeredness
- Clear communication
- Mutual respect

## IPEC Competency Domains

**1. Values/Ethics:**
- Patient-centered care
- Respect for team members
- Cultural competence
- Ethical practice

**2. Roles/Responsibilities:**
- Understanding own role
- Understanding others roles
- Appropriate scope utilization

**3. Interprofessional Communication:**
- Clear, effective communication
- Active listening
- Timely information sharing

**4. Teams and Teamwork:**
- Team functioning
- Shared leadership
- Conflict management
- Quality improvement`,
      keyTerms: [
        { term: 'IPEC', definition: 'Interprofessional Education Collaborative - organization defining competencies' },
        { term: 'interprofessional', definition: 'Involving multiple health professions working together' },
        { term: 'team competencies', definition: 'Skills needed for effective team functioning' },
      ],
      patientCounselingPoints: ['Ask team members to explain their role', 'Make sure team members are communicating with each other'],
    },
    3: {
      level: 3,
      summary: 'Interprofessional collaborative practice requires competency development, structural supports, and organizational commitment.',
      explanation: `## Evidence for Team-Based Care

**Research Findings:**
- Improved patient outcomes
- Reduced healthcare utilization
- Enhanced patient satisfaction
- Better provider satisfaction
- Cost-effectiveness in many settings

**Effective Team Characteristics:**
- Clear goals and roles
- Strong communication
- Mutual trust and respect
- Shared leadership
- Continuous improvement

## Interprofessional Education (IPE)

**Purpose:**
Prepare students and practitioners for collaborative practice

**Core Curriculum:**
- Team-based learning
- Simulation experiences
- Clinical IPE
- Case-based discussions

**Barriers:**
- Scheduling across disciplines
- Faculty development
- Assessment challenges
- Accreditation alignment

## Practice Implementation

**Structural Elements:**
- Co-location when possible
- Shared records access
- Communication systems
- Team meetings/huddles

**Cultural Elements:**
- Leadership support
- Psychological safety
- Professional respect
- Learning orientation`,
      keyTerms: [
        { term: 'interprofessional education', definition: 'When students from different health professions learn together' },
        { term: 'psychological safety', definition: 'Environment where team members feel safe to speak up' },
        { term: 'co-location', definition: 'Team members working in the same physical space' },
      ],
      clinicalNotes: 'Support IPE initiatives. Build team structures. Model collaborative behaviors.',
    },
    4: {
      level: 4,
      summary: 'Effective interprofessional practice requires addressing system barriers, team dynamics, and measurement challenges.',
      explanation: `## Team Science

**Input-Process-Output Model:**
- Inputs: Team composition, resources, culture
- Processes: Communication, coordination, conflict management
- Outputs: Patient outcomes, team outcomes, system outcomes

**Team Cognition:**
- Shared mental models
- Transactive memory
- Collective situational awareness

## Barriers to Collaboration

**Professional:**
- Professional silos
- Scope of practice boundaries
- Hierarchy and power gradients
- Professional identity

**Organizational:**
- Separate payment systems
- Physical separation
- Time constraints
- Competing priorities

**Educational:**
- Discipline-specific training
- Limited IPE
- Differing professional cultures

## Measurement

**Team Functioning:**
- Team climate surveys
- Collaboration assessments
- Communication audits

**Outcomes:**
- Quality measures
- Patient experience
- Efficiency metrics
- Staff satisfaction`,
      keyTerms: [
        { term: 'team science', definition: 'Study of how teams function and improve' },
        { term: 'shared mental model', definition: 'Common understanding among team members about goals and processes' },
        { term: 'professional silos', definition: 'Isolation of different professions preventing collaboration' },
      ],
      clinicalNotes: 'Address barriers systematically. Measure team functioning. Apply team science principles.',
    },
    5: {
      level: 5,
      summary: 'Interprofessional collaborative practice is essential for healthcare quality and safety, requiring policy support and system transformation.',
      explanation: `## Policy Framework

**WHO Framework for Action:**
- Strengthen health systems through IPC
- National action plans
- Supportive legislation
- Financing mechanisms

**US Context:**
- IPEC competencies as standard
- Accreditation requirements
- Payment reform incentives
- Workforce development

## Transformation Strategies

**Education:**
- IPE in all health professions curricula
- Continuing interprofessional development
- Faculty development
- Assessment innovation

**Practice:**
- Team-based care models
- Collaborative practice agreements
- Integrated delivery systems
- Telehealth team approaches

**Policy:**
- Scope of practice reform
- Payment model innovation
- Workforce planning
- Quality measurement

## Research Priorities

**Evidence Gaps:**
- Optimal team composition
- IPE long-term impact
- Implementation strategies
- Cost-effectiveness

## Health Equity

**Team-Based Equity:**
- Diverse team composition
- Cultural competence
- Language access
- Community engagement`,
      keyTerms: [
        { term: 'WHO Framework for Action', definition: 'International guidance on IPE and collaborative practice' },
        { term: 'collaborative practice agreement', definition: 'Formal agreement defining interprofessional working relationships' },
        { term: 'integrated delivery system', definition: 'Healthcare organization coordinating care across settings' },
      ],
      clinicalNotes: 'Advocate for policy support. Implement team-based models. Address equity in team practice.',
    },
  },

  media: [],
  citations: [{ id: 'ipec-competencies', type: 'website', title: 'IPEC Core Competencies', source: 'IPEC' }],
  crossReferences: [{ targetId: 'interprofessional-care-coordination', targetType: 'concept', relationship: 'sibling', label: 'Care Coordination' }],
  tags: { systems: ['team-based-care'], topics: ['collaborative practice', 'interprofessional'], keywords: ['teams', 'collaboration', 'IPEC'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default collaborativePractice;
