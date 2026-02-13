/**
 * Team-Based Care Overview
 *
 * Comprehensive education on interprofessional team-based care models,
 * principles, and implementation in healthcare settings.
 */

import { EducationalContent } from '../../types';

export const TEAM_BASED_CARE_OVERVIEW: EducationalContent = {
  id: 'interprofessional-team-based-care-overview',
  type: 'concept',
  name: 'Team-Based Care Overview',
  alternateNames: ['Interprofessional care teams', 'Collaborative care', 'Healthcare teams', 'Team-based healthcare'],

  levels: {
    1: {
      level: 1,
      summary: 'Team-based care means different healthcare workers work together to take care of you and give you the best possible care.',
      explanation: `When you visit the doctor or go to a hospital, many different people help take care of you. These people work as a team to make sure you get the best care.

**Who Might Be on Your Healthcare Team:**

*Doctors:*
- Diagnose problems and prescribe medicines
- Lead treatment decisions
- May be specialists in certain areas

*Nurses:*
- Give medications and treatments
- Check your vital signs
- Teach you about your health
- Coordinate your care

*Pharmacists:*
- Make sure your medicines are safe
- Explain how to take medications
- Check for drug interactions

*Other Team Members:*
- Physical therapists: Help you move better
- Social workers: Help with emotional needs and resources
- Dietitians: Help with nutrition
- Medical assistants: Take vital signs, help with appointments

**How Team-Based Care Helps You:**

*Better Communication:*
- Everyone shares information about your health
- Nothing falls through the cracks
- You do not have to repeat your story

*More Complete Care:*
- Different experts see different things
- You get help for all your needs
- Problems are caught earlier

*Safer Care:*
- Double-checking reduces mistakes
- Team members watch out for each other
- Better planning for your care

**What You Can Expect:**
- Meeting different healthcare workers
- Team members talking to each other about you
- Everyone working toward the same goals
- Care that fits your needs

**Your Role on the Team:**
- You are the most important team member
- Share your concerns and questions
- Tell the team what matters to you
- Follow the care plan you create together

**Remember:**
Everyone on your healthcare team wants to help you be as healthy as possible. Do not hesitate to ask questions or share your thoughts with any team member.`,
      keyTerms: [
        { term: 'healthcare team', definition: 'A group of different healthcare workers who work together to take care of patients' },
        { term: 'coordinate', definition: 'To organize and work together so everyone knows what to do' },
        { term: 'care plan', definition: 'A written guide for your healthcare that the team creates with you' },
      ],
      analogies: [
        'A healthcare team is like a sports team - each player has a special position, but they all work together to win the game (your health).',
        'Think of your care team like a pit crew in racing - everyone has a specific job, and together they keep the car (you) running smoothly.',
      ],
      examples: [
        'Mrs. Johnson has diabetes. Her doctor manages her medications, her nurse teaches her about blood sugar, the dietitian helps with meal planning, and the pharmacist explains her insulin. Together, they help her stay healthy.',
      ],
      patientCounselingPoints: [
        'You are the most important member of your healthcare team',
        'Ask questions to any team member you see',
        'Make sure to share your health goals with the team',
        'It is okay to ask who is on your team and what each person does',
      ],
    },
    2: {
      level: 2,
      summary: 'Team-based care is a structured approach where healthcare professionals from different disciplines collaborate to provide comprehensive, patient-centered care, improving outcomes and efficiency.',
      explanation: `Team-based care has become a cornerstone of modern healthcare delivery. It brings together professionals with different expertise to address the complex needs of patients.

**Definition:**
Team-based care involves two or more healthcare professionals working collaboratively with patients and families to deliver comprehensive healthcare services.

**Core Principles:**

*Shared Goals:*
- Team has common objectives
- Patient outcomes are central
- Quality improvement focus

*Clear Roles:*
- Each member has defined responsibilities
- Overlap minimized
- Full scope of practice utilized

*Mutual Trust:*
- Respect for each profession's expertise
- Open to input from all members
- Psychological safety

*Effective Communication:*
- Regular information sharing
- Structured handoffs
- Documentation accessible to all

*Measurable Outcomes:*
- Track quality metrics
- Patient satisfaction
- Team performance

**Team Composition:**

*Core Team Members:*
| Role | Primary Functions |
|------|-------------------|
| Physician | Diagnosis, treatment planning, medical decisions |
| Nurse (RN) | Care coordination, patient education, clinical care |
| Medical Assistant | Vital signs, rooming, documentation support |
| Pharmacist | Medication management, drug interactions |

*Extended Team:*
- Physical/Occupational therapists
- Social workers
- Dietitians
- Mental health professionals
- Community health workers
- Care coordinators

**Benefits of Team-Based Care:**

*For Patients:*
- More comprehensive care
- Better chronic disease management
- Improved access (see team, not just doctor)
- Better outcomes (lower mortality, fewer complications)

*For Providers:*
- Reduced burnout (shared workload)
- Professional satisfaction
- Improved work-life balance
- Learning from colleagues

*For Healthcare Systems:*
- Increased efficiency
- Cost reduction
- Better quality metrics
- Improved patient satisfaction

**Team-Based Care Models:**

*Primary Care:*
- Patient-Centered Medical Home (PCMH)
- Team includes physician, nurse, MA, care coordinator
- Panel management
- Proactive care

*Specialty Care:*
- Multidisciplinary clinics (oncology, diabetes)
- Disease-specific teams
- Comprehensive evaluations

*Inpatient Care:*
- Rounding teams
- Rapid response teams
- Discharge planning teams

*Mental Health:*
- Collaborative care model
- Integrated behavioral health
- Care manager, psychiatrist, PCP

**Challenges:**

*Implementation:*
- Role clarity
- Team training
- Workflow redesign
- Technology support

*Sustainability:*
- Reimbursement models
- Space and resources
- Turnover and team stability

**Success Factors:**
- Leadership support
- Team training (together)
- Clear communication protocols
- Shared EHR access
- Regular team meetings
- Performance feedback`,
      keyTerms: [
        { term: 'interprofessional collaboration', definition: 'Healthcare workers from different professions working together to provide care' },
        { term: 'PCMH', definition: 'Patient-Centered Medical Home; team-based primary care model focused on comprehensive, coordinated care' },
        { term: 'scope of practice', definition: 'The services a healthcare professional is allowed to provide based on their training and licensure' },
        { term: 'care coordination', definition: 'Organizing patient care activities to ensure appropriate delivery of services' },
        { term: 'panel management', definition: 'Population-level approach to managing a group of patients assigned to a care team' },
      ],
      analogies: [
        'A healthcare team is like an orchestra - each instrument (profession) plays a different part, but together they create beautiful music (excellent care).',
      ],
    },
    3: {
      level: 3,
      summary: 'Interprofessional team-based care integrates evidence-based team science principles, including TeamSTEPPS competencies and collaborative practice frameworks, to optimize patient outcomes, enhance safety, and improve efficiency across healthcare delivery settings.',
      explanation: `**Theoretical Foundations:**

*Team Science:*
- Adapted from aviation and military
- High-reliability organizations
- Crew Resource Management principles
- Error reduction through teamwork

*Interprofessional Education Collaborative (IPEC) Competencies:*
1. Values/Ethics: Mutual respect, shared values
2. Roles/Responsibilities: Understanding scope and expertise
3. Interprofessional Communication: Effective information exchange
4. Teams and Teamwork: Collaborative practice

**TeamSTEPPS Framework:**

*Core Competencies:*
| Competency | Description |
|------------|-------------|
| Leadership | Coordinate team, assign tasks, evaluate performance |
| Situation Monitoring | Awareness of team activities and patient status |
| Mutual Support | Assistance, feedback, conflict resolution |
| Communication | Structured, complete information exchange |

*Key Tools:*
- SBAR: Situation, Background, Assessment, Recommendation
- CUS: Concerned, Uncomfortable, Safety issue
- Two-Challenge Rule: Escalation pathway
- Huddles: Brief team check-ins
- Debriefs: Post-event learning

**Evidence for Team-Based Care:**

*Outcomes Research:*
- Reduced mortality (ICU teams, rapid response)
- Fewer medical errors
- Lower readmission rates
- Better chronic disease control
- Improved patient satisfaction

*Specific Evidence:*
- Collaborative care for depression: 50% better outcomes
- Pharmacist-led hypertension: 8-10 mmHg improvement
- Nurse care coordination: 20% reduced readmissions
- Multidisciplinary rounds: 30% shorter ICU stays

**Team Structure and Function:**

*High-Functioning Team Characteristics:*
- Shared mental models
- Psychological safety
- Closed-loop communication
- Cross-monitoring
- Adaptability

*Team Development Stages (Tuckman):*
1. Forming: Team comes together
2. Storming: Conflict and role negotiation
3. Norming: Establish working patterns
4. Performing: High-functioning collaboration
5. Adjourning: Team dissolution/reform

**Care Delivery Models:**

*Patient-Centered Medical Home (PCMH):*
- NCQA recognition standards
- Team-based care principle
- Care coordination
- Enhanced access
- Quality improvement

*Collaborative Care Model (Behavioral Health):*
- Care manager: Systematic follow-up
- Consulting psychiatrist: Caseload review
- PCP: Primary clinical relationship
- Registry-based population management
- Measurement-based care

*Interprofessional Chronic Care:*
- Diabetes teams
- Heart failure clinics
- Oncology tumor boards
- Transplant teams

**Implementation Science:**

*Key Success Factors:*
- Leadership commitment
- Interprofessional training (together)
- Workflow redesign
- Technology enablement
- Performance feedback
- Sustainable financing

*Common Barriers:*
- Professional silos
- Hierarchical culture
- Reimbursement challenges
- Space constraints
- Turnover

*Implementation Strategies:*
- Champion identification
- Pilot testing
- Rapid cycle improvement
- Spread and scale

**Quality and Safety:**

*Team-Based Safety Practices:*
- Structured communication (SBAR)
- Standardized handoffs
- Situation awareness
- Speaking up for safety
- Debriefing

*Quality Metrics:*
- Clinical outcomes
- Patient experience
- Team functioning
- Efficiency measures
- Burnout/satisfaction

**Education and Training:**

*Interprofessional Education (IPE):*
- Learning with, from, and about other professions
- Simulation-based training
- Collaborative clinical experiences
- Competency assessment

*Team Training Programs:*
- TeamSTEPPS
- AHRQ Team Training
- Simulation centers
- Quality improvement collaboratives`,
      keyTerms: [
        { term: 'TeamSTEPPS', definition: 'Team Strategies and Tools to Enhance Performance and Patient Safety; evidence-based teamwork training program' },
        { term: 'SBAR', definition: 'Situation-Background-Assessment-Recommendation; structured communication tool' },
        { term: 'shared mental model', definition: 'Common understanding among team members about goals, roles, and expectations' },
        { term: 'psychological safety', definition: 'Team environment where members feel safe to speak up without fear of punishment or humiliation' },
        { term: 'closed-loop communication', definition: 'Communication confirmed by receiver repeating back information' },
      ],
      clinicalNotes: 'Implement TeamSTEPPS tools (SBAR, huddles, debriefs) for structured communication. Foster psychological safety for speaking up. Address team development needs at different stages. Track team performance metrics alongside clinical outcomes.',
    },
    4: {
      level: 4,
      summary: 'Advanced team-based care integrates implementation science frameworks, high-reliability organization principles, value-based care alignment, and systems engineering approaches to transform healthcare delivery while addressing workforce sustainability, equity implications, and evolving care models.',
      explanation: `**Implementation Science for Teams:**

*Frameworks:*
- Consolidated Framework for Implementation Research (CFIR)
- RE-AIM: Reach, Effectiveness, Adoption, Implementation, Maintenance
- Implementation Outcome Framework

*Adaptation vs Fidelity:*
- Core components vs adaptable periphery
- Context-specific modification
- Maintain mechanism of action
- Balance standardization and flexibility

**High-Reliability Organization (HRO) Principles:**

*Applied to Healthcare Teams:*
| HRO Principle | Team Application |
|---------------|------------------|
| Preoccupation with failure | Proactive safety culture |
| Reluctance to simplify | Comprehensive assessment |
| Sensitivity to operations | Real-time situation monitoring |
| Commitment to resilience | Contingency planning |
| Deference to expertise | Flattened hierarchy for safety |

*Just Culture:*
- Distinguish human error, at-risk behavior, reckless behavior
- Support learning from errors
- Appropriate accountability
- Psychological safety foundational

**Value-Based Care Alignment:**

*Team-Based Care Economics:*
- Fee-for-service: Challenges (who bills?)
- Capitation: Supports team (shared resources)
- Bundled payments: Team incentivized for episode
- Shared savings: Population health alignment

*Team-Based Care and ACOs:*
- Care coordination required
- Panel management essential
- Chronic disease management
- Quality metrics achievement
- Cost reduction through prevention

*ROI Evidence:*
- PCMH: Varied results, context-dependent
- Collaborative care: Cost-effective for depression
- Pharmacist integration: ~$5-8 return per $1 invested
- Care coordination: Reduced ED/hospital costs

**Workforce Considerations:**

*Team Composition Optimization:*
- Skill mix analysis
- Full scope of practice utilization
- Task delegation algorithms
- Workforce supply considerations

*Burnout Mitigation:*
- Team-based care reduces individual burden
- Shared responsibility and support
- Professional connection and meaning
- Work-life integration

*Training Pipeline:*
- Interprofessional education expansion
- Team-based residency training
- Continuing education for existing workforce
- Leadership development

**Health Equity and Teams:**

*Community Health Workers:*
- Bridge to communities
- Cultural congruence
- Social determinants assessment
- Trusted relationships

*Equity-Focused Team Design:*
- Diverse team composition
- Language concordance
- Community engagement
- Address access barriers
- Monitor disparities

**Technology and Teams:**

*EHR Team Functions:*
- Shared documentation
- Team-based inboxes
- Panel management tools
- Quality dashboards

*Telehealth Teams:*
- Virtual care coordination
- Remote monitoring integration
- Hybrid care models
- Team communication platforms

*AI/ML Support:*
- Risk stratification for team outreach
- Clinical decision support
- Automated tasks
- Predictive analytics

**Emerging Models:**

*Dyad and Triad Leadership:*
- Physician-administrator dyads
- Physician-nurse-administrator triads
- Shared accountability
- Complementary expertise

*Microsystems Approach:*
- Clinical microsystem as unit of quality
- Small, focused teams
- Improvement at the front lines
- Link to mesosystem and macrosystem

*Virtual Teams:*
- Geographically distributed
- Asynchronous collaboration
- Digital-first workflows
- Maintaining team cohesion

**Quality Improvement Integration:**

*Team-Based QI:*
- PDSA cycles as team activity
- Data-driven improvement
- Frontline engagement
- Rapid learning

*Learning Health Systems:*
- Continuous data capture
- Evidence generation
- Implementation of learning
- Teams as knowledge generators

**Research Priorities:**

1. Optimal team composition by setting
2. Training effectiveness
3. Sustainability over time
4. Equity impact
5. Technology integration
6. Emerging models evaluation`,
      keyTerms: [
        { term: 'CFIR', definition: 'Consolidated Framework for Implementation Research; meta-framework for implementation science' },
        { term: 'HRO', definition: 'High-reliability organization; organization that operates in complex, high-hazard domains with very low error rates' },
        { term: 'just culture', definition: 'Approach distinguishing human error from negligent behavior, promoting learning over blame' },
        { term: 'clinical microsystem', definition: 'Smallest replicable unit of healthcare delivery, including the clinical team and patient population' },
        { term: 'community health worker', definition: 'Frontline public health worker from the community served, providing culturally appropriate care' },
      ],
      clinicalNotes: 'Apply HRO principles to team safety practices. Align team structure with value-based care incentives. Include community health workers for equity focus. Use implementation science frameworks for sustainable change. Monitor team well-being alongside patient outcomes.',
    },
    5: {
      level: 5,
      summary: 'Expert team-based care practice requires mastery of team science, organizational transformation leadership, health systems engineering, policy advocacy, and translational research to advance interprofessional collaborative practice as the default model for healthcare delivery.',
      explanation: `**Team Science Advanced Concepts:**

*Shared Cognition:*
- Team mental models
- Transactive memory systems
- Collective intelligence
- Cognitive load distribution

*Team Dynamics Research:*
| Construct | Measurement | Impact |
|-----------|-------------|--------|
| Cohesion | Surveys, observation | Performance |
| Psychological safety | Climate surveys | Innovation, learning |
| Conflict | Behavioral coding | Variable (task vs relationship) |
| Trust | Behavioral indicators | Coordination quality |

*Team Performance Measurement:*
- Direct observation
- Simulation-based assessment
- Survey instruments
- Process metrics
- Outcome linkage

**Organizational Transformation:**

*Interprofessional Practice as Default:*
- Structural integration
- Governance realignment
- Culture transformation
- Resource reallocation

*Change Management:*
- Kotter's 8 steps
- ADKAR model
- Organizational readiness
- Stakeholder engagement

*Scaling Strategies:*
- Pilot to spread
- Learning collaboratives
- Practice facilitation
- Policy levers

**Systems Engineering for Teams:**

*Human Factors Engineering:*
- Workflow analysis
- Cognitive task analysis
- Error proofing
- Design thinking

*Process Improvement:*
- Lean principles
- Six Sigma
- Value stream mapping
- Constraint identification

*Technology Integration:*
- User-centered design
- Interoperability
- Automation
- Decision support

**Policy and Advocacy:**

*Scope of Practice:*
- Full practice authority
- Collaborative practice agreements
- Interstate compacts
- Supervision requirements

*Payment Reform:*
- Team-based billing codes
- Incident-to billing limitations
- Shared savings programs
- Global payments

*Regulatory Considerations:*
- Credentialing
- Privileging
- Quality reporting
- Liability

**Translational Research:**

*Research Gaps:*
1. Optimal team composition
2. Training effectiveness
3. Implementation strategies
4. Sustainability factors
5. Equity impact
6. Technology optimization

*Research Methods:*
- Cluster randomized trials
- Stepped-wedge designs
- Mixed methods
- Implementation science approaches
- Health services research

*Dissemination:*
- Practice-based research networks
- Learning health systems
- Knowledge translation
- Policy briefs

**Global Perspectives:**

*International Models:*
| Country | Model | Key Features |
|---------|-------|--------------|
| UK | Multidisciplinary teams | Integrated NHS |
| Netherlands | Primary care teams | Practice nurses |
| Brazil | Family health teams | Community focus |
| Cuba | Policlinicos | Comprehensive teams |

*WHO Framework for IPE and Collaborative Practice:*
- Education transformation
- Practice transformation
- Systems transformation
- Global competencies

**Future Directions:**

*Evolving Team Structures:*
- Extended teams including patients
- Virtual and hybrid teams
- AI as team member
- Agile team formation

*Education Evolution:*
- IPE curriculum integration
- Simulation advances
- Competency-based assessment
- Longitudinal development

*Research Frontiers:*
- Team neuroscience
- Collective intelligence
- Human-AI teaming
- Precision team design

**Clinical Excellence Framework:**

*Team Member:*
- Master interprofessional competencies
- Model collaborative behavior
- Contribute expertise fully
- Support team learning

*Team Leader:*
- Create psychological safety
- Optimize team composition
- Facilitate effective meetings
- Manage conflict constructively
- Drive performance improvement

*Organizational Leader:*
- Champion team-based care
- Align structures and incentives
- Develop workforce
- Measure and improve
- Advocate externally

*Scholar/Educator:*
- Advance team science
- Train next generation
- Evaluate innovations
- Disseminate knowledge

**Key Principles for Excellence:**

*For Teams:*
- Patient at center
- Clear roles with flexibility
- Structured communication
- Continuous improvement
- Mutual support

*For Organizations:*
- Leadership commitment
- Resource investment
- Culture of collaboration
- Data-driven management
- Sustainability focus

*For Policy:*
- Support scope of practice
- Align payment incentives
- Fund education transformation
- Enable research
- Reduce barriers`,
      keyTerms: [
        { term: 'transactive memory system', definition: 'Collective memory system where team members know who knows what, enabling efficient knowledge retrieval' },
        { term: 'collective intelligence', definition: 'Shared or group intelligence emerging from collaboration that exceeds individual capabilities' },
        { term: 'human factors engineering', definition: 'Discipline applying knowledge about human capabilities and limitations to system design' },
        { term: 'practice-based research network', definition: 'Group of primary care practices working together to conduct research on questions arising from practice' },
        { term: 'stepped-wedge design', definition: 'Cluster randomized trial where all clusters eventually receive the intervention at different time points' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Lead interprofessional team development and training
- Champion organizational transformation to team-based models
- Apply systems engineering to optimize team workflows
- Advocate for policy changes supporting team-based care
- Contribute to team science research and knowledge generation
- Mentor emerging team leaders across professions
- Model interprofessional values and behaviors
- Drive quality improvement through team-based approaches
- Address health equity through team composition and practice
- Sustain team excellence through measurement and continuous improvement`,
    },
  },

  media: [
    {
      id: 'team-based-care-model',
      type: 'diagram',
      filename: 'team-based-care-model.svg',
      title: 'Team-Based Care Model Overview',
      description: 'Diagram showing the structure and relationships in a healthcare team',
    },
  ],

  citations: [
    {
      id: 'ipec-2016',
      type: 'website',
      title: 'Core Competencies for Interprofessional Collaborative Practice: 2016 Update',
      source: 'Interprofessional Education Collaborative',
      url: 'https://www.ipecollaborative.org/',
      accessedDate: '2025-01-28',
    },
    {
      id: 'teamstepps-ahrq',
      type: 'website',
      title: 'TeamSTEPPS 2.0',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/teamstepps/',
      accessedDate: '2025-01-28',
    },
    {
      id: 'nap-healthcare-teams',
      type: 'textbook',
      title: 'Measuring the Impact of Interprofessional Education on Collaborative Practice and Patient Outcomes',
      authors: ['Institute of Medicine'],
      source: 'National Academies Press',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'interprofessional-care-coordination', targetType: 'concept', relationship: 'child', label: 'Care Coordination' },
    { targetId: 'interprofessional-communication', targetType: 'concept', relationship: 'child', label: 'Interprofessional Communication' },
    { targetId: 'concept-patient-safety', targetType: 'concept', relationship: 'related', label: 'Patient Safety' },
  ],

  tags: {
    systems: ['interprofessional'],
    topics: ['healthcare delivery', 'team science', 'patient safety', 'quality improvement'],
    keywords: ['team-based care', 'interprofessional', 'collaborative practice', 'TeamSTEPPS', 'PCMH'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
