/**
 * Patient-Provider Communication - Effective Healthcare Communication Skills
 *
 * Covers strategies for communicating with healthcare providers, asking questions,
 * sharing information, and building therapeutic relationships.
 */

import { EducationalContent } from '../../types';

export const patientProviderCommunication: EducationalContent = {
  id: 'health-literacy-patient-provider-communication',
  type: 'concept',
  name: 'Patient-Provider Communication',
  alternateNames: ['Talking to Your Doctor', 'Healthcare Communication', 'Doctor-Patient Communication'],

  levels: {
    1: {
      level: 1,
      summary: 'Learning to talk with your doctor helps you get better care and feel more confident about your health.',
      explanation: `Going to the doctor can feel scary or confusing. But when you can talk well with your doctor, you get better care!

**Before Your Visit:**

1. **Write down your questions** - It is easy to forget when you are nervous
2. **Make a list of your medicines** - Include vitamins and supplements
3. **Write down your symptoms** - When did they start? What makes them better or worse?
4. **Bring someone with you** - They can help remember what the doctor says

**During Your Visit:**

1. **Tell the truth** - Even if it is embarrassing, your doctor needs accurate information
2. **Ask questions** - There are no dumb questions about your health
3. **Say if you do not understand** - Ask the doctor to explain in simpler words
4. **Take notes** - Or ask if you can record the conversation

**Good Questions to Ask:**

- "What is my diagnosis?"
- "What are my treatment options?"
- "What are the risks and benefits?"
- "When should I come back?"
- "What should I do if I feel worse?"

**After Your Visit:**

1. **Review your notes** - Make sure you understand what to do
2. **Follow the plan** - Take medicines as directed
3. **Call if you have questions** - It is okay to call the office later

**Remember:** Your doctor is there to help you. Speaking up is not rude - it is smart!`,
      keyTerms: [
        { term: 'diagnosis', definition: 'The name of the health problem the doctor thinks you have' },
        { term: 'treatment', definition: 'What you do to get better, like medicine or therapy' },
        { term: 'symptoms', definition: 'Signs that something is wrong with your body, like pain or fever' },
      ],
      analogies: [
        'Talking to your doctor is like working with a mechanic - they need to know exactly what is wrong to fix it',
        'Your doctor is like a guide on a hiking trail - they know the path, but you need to tell them how you are feeling',
      ],
      examples: [
        'Maria wrote down "my stomach hurts after meals" and the doctor figured out she needed to avoid certain foods',
        'James brought his wife to help remember the doctor instructions about his new medicine',
      ],
      patientCounselingPoints: [
        'Write down questions before your appointment',
        'Tell your doctor about ALL medicines you take, including vitamins and herbs',
        'It is okay to ask the doctor to slow down or repeat something',
        'Bring a family member or friend to help listen and take notes',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective patient-provider communication involves preparation, active participation, clear information exchange, and collaborative decision-making to optimize health outcomes.',
      explanation: `## Why Communication Matters

Good communication with healthcare providers:
- Leads to more accurate diagnoses
- Improves treatment adherence
- Increases patient satisfaction
- Reduces medical errors
- Improves health outcomes

## Preparing for Healthcare Visits

**Information to Gather:**
- Current symptoms and their timeline
- Complete medication list (prescription, OTC, supplements)
- Past medical and surgical history
- Family health history
- Allergies and adverse reactions
- Questions and concerns

**Practical Preparation:**
- Arrive early to complete paperwork
- Bring insurance information
- Bring a support person if helpful
- Prepare a written list of questions

## Effective Communication Strategies

**Ask Questions:**
- Use open-ended questions: "Can you tell me more about...?"
- Clarify terminology: "What does that medical term mean?"
- Understand options: "What are my choices for treatment?"
- Learn about outcomes: "What should I expect?"

**Share Information:**
- Be honest about symptoms, even embarrassing ones
- Report all medications and supplements
- Describe lifestyle factors (diet, exercise, stress)
- Mention any barriers to following treatment

**Confirm Understanding:**
- Summarize what you heard: "So you are saying I should..."
- Ask for written instructions
- Request teach-back: "Can I repeat back what I should do?"
- Clarify follow-up steps

## The SBAR Method

A structured communication format:
- **S**ituation: What is happening now?
- **B**ackground: What led to this?
- **A**ssessment: What do you think is going on?
- **R**ecommendation/Request: What would you like to happen?

## Shared Decision-Making

**Key Elements:**
1. The provider explains options
2. You share your values and preferences
3. Together, you choose the best approach

**Questions for Shared Decisions:**
- What are my options?
- What are the benefits and risks of each?
- How likely are the benefits and risks?
- What happens if I wait or do nothing?
- What would you recommend for someone like me?

## Overcoming Communication Barriers

**Language Barriers:**
- Request a professional interpreter (not family members)
- Use translated materials
- Ask for written translations

**Time Constraints:**
- Prioritize your most important concerns
- Be concise but complete
- Ask for additional time or follow-up if needed

**Emotional Barriers:**
- It is okay to express fear or concern
- Ask for support resources
- Request time to process difficult information

**Health Literacy:**
- Ask for plain language explanations
- Request written materials
- Use teach-back to confirm understanding`,
      keyTerms: [
        { term: 'shared decision-making', definition: 'A process where patients and providers work together to make healthcare choices' },
        { term: 'informed consent', definition: 'Agreeing to treatment after understanding the risks, benefits, and alternatives' },
        { term: 'teach-back', definition: 'Repeating information in your own words to confirm understanding' },
        { term: 'SBAR', definition: 'Communication format: Situation, Background, Assessment, Recommendation' },
        { term: 'adherence', definition: 'Following through with agreed-upon treatment plans' },
      ],
      patientCounselingPoints: [
        'Use the SBAR format to organize your thoughts before appointments',
        'Practice shared decision-making by asking about options and expressing your preferences',
        'Request an interpreter if English is not your first language - do not rely on family members',
        'Use teach-back by saying "Let me make sure I understand..." and summarizing the plan',
      ],
    },
    3: {
      level: 3,
      summary: 'Patient-provider communication encompasses verbal and nonverbal exchanges, health literacy accommodation, shared decision-making frameworks, and culturally responsive care to achieve patient-centered outcomes.',
      explanation: `## Communication Models in Healthcare

**Patient-Centered Communication:**
- Explores patient's perspective (ideas, concerns, expectations)
- Seeks to understand whole person
- Finds common ground
- Involves patient in management

**Calgary-Cambridge Model:**
1. Initiating the session
2. Gathering information
3. Physical examination
4. Explanation and planning
5. Closing the session

**Motivational Interviewing:**
- Express empathy
- Develop discrepancy
- Roll with resistance
- Support self-efficacy
- OARS: Open questions, Affirmations, Reflections, Summaries

## Health Literacy-Informed Communication

**Universal Precautions Approach:**
- Assume all patients may have difficulty understanding
- Use plain language consistently
- Limit to 2-3 key points
- Use teach-back universally

**Clear Communication Strategies:**
- Chunk and check: Small pieces, verify understanding
- Use analogies and demonstrations
- Provide written summaries
- Use visual aids when appropriate

**Numeracy Accommodations:**
- Use natural frequencies (3 out of 100)
- Consistent denominators
- Visual representations
- Avoid complex statistics

## Shared Decision-Making

**SHARE Approach (AHRQ):**
- **S**eek patient participation
- **H**elp patient explore options
- **A**ssess patient values and preferences
- **R**each a decision
- **E**valuate the decision

**Decision Aids:**
- Provide balanced information
- Clarify values
- Support deliberation
- Reduce decisional conflict

**Preference-Sensitive Decisions:**
- Multiple reasonable options exist
- Choice depends on patient values
- Examples: Cancer screening, chronic disease management

## Cultural Responsiveness

**Cultural Humility:**
- Self-reflection on biases
- Patient as expert in their experience
- Lifelong learning orientation
- Institutional accountability

**Language Access:**
- Professional interpreters for LEP patients
- Avoid family members as interpreters
- Telephone and video interpretation services
- Translated materials

**Cross-Cultural Communication:**
- Ask about cultural factors in health decisions
- Respect diverse health beliefs
- Explore traditional practices
- Negotiate culturally appropriate plans

## Challenging Communication Situations

**Breaking Bad News:**
- SPIKES protocol: Setting, Perception, Invitation, Knowledge, Emotions, Strategy/Summary
- Allow time for processing
- Address emotions
- Plan next steps

**Medication Reconciliation:**
- Use brown bag method
- Ask about all substances
- Clarify actual use vs. prescribed
- Address barriers to adherence

**Goals of Care Conversations:**
- Explore understanding of illness
- Elicit values and priorities
- Discuss prognosis honestly
- Make recommendations based on goals

## Documentation and Follow-Up

**After-Visit Summaries:**
- Plain language
- Action items clearly stated
- Contact information
- Follow-up appointments

**Patient Portals:**
- Access to records
- Messaging capability
- Health literacy considerations in design
- Digital divide awareness`,
      keyTerms: [
        { term: 'motivational interviewing', definition: 'Collaborative conversation style strengthening patient motivation and commitment to change' },
        { term: 'cultural humility', definition: 'Ongoing self-reflection and critique of power imbalances in cross-cultural interactions' },
        { term: 'decision aid', definition: 'Tool helping patients understand options and clarify values for preference-sensitive decisions' },
        { term: 'SPIKES protocol', definition: 'Framework for delivering bad news: Setting, Perception, Invitation, Knowledge, Emotions, Strategy' },
        { term: 'limited English proficiency', definition: 'Individuals who do not speak English as their primary language and have limited ability to read, write, or understand English' },
      ],
      clinicalNotes: 'Document communication approaches used (e.g., interpreter, teach-back confirmed). Note patient preferences for communication and decision-making involvement. Ensure after-visit summaries are at appropriate literacy level.',
    },
    4: {
      level: 4,
      summary: 'Advanced patient-provider communication integrates communication science, behavioral theory, and systems thinking to address complex interactions, health disparities, and institutional barriers to effective healthcare communication.',
      explanation: `## Communication Science in Healthcare

**Theoretical Foundations:**
- Uncertainty Management Theory: How patients and providers handle medical uncertainty
- Communication Accommodation Theory: Adjusting communication to partner
- Relational Communication: Relationship-building in medical encounters
- Health Behavior Theories: TPB, HBM, Social Cognitive Theory

**Message Effects:**
- Framing effects on decisions
- Gain vs. loss framing
- Narrative vs. statistical evidence
- Emotional appeals appropriateness

**Nonverbal Communication:**
- Physician immediacy behaviors
- Patient reading of nonverbal cues
- Cultural variations
- Technology interference

## Advanced Shared Decision-Making

**SDM Competency Framework:**
- Knowledge transfer
- Values clarification
- Deliberation support
- Decision implementation

**Measuring SDM Quality:**
- OPTION scale (observational)
- SDM-Q-9 (patient report)
- CollaboRATE (brief measure)
- Decision quality measures

**SDM Challenges:**
- Time constraints
- Uncertainty in evidence
- Prognostic ambiguity
- Value-sensitive decisions with limited data

**SDM in Specific Contexts:**
- Pediatrics: Triadic communication
- Geriatrics: Capacity, surrogates
- Mental health: Capacity fluctuations
- Emergency: Time-limited decisions

## Communication for Behavior Change

**MI in Depth:**
- Spirit: Partnership, acceptance, compassion, evocation
- Processes: Engaging, focusing, evoking, planning
- Change talk recognition and elicitation
- Sustain talk management

**Self-Management Support:**
- Goal setting techniques
- Action planning
- Problem-solving
- Follow-up and accountability

**Difficult Conversations:**
- Nonadherence discussions
- Substance use conversations
- Weight and lifestyle
- End-of-life planning

## Health Disparities in Communication

**Implicit Bias Effects:**
- Nonverbal communication differences
- Information sharing variations
- Participatory decision-making gaps
- Trust implications

**Structural Barriers:**
- Time constraints in safety-net settings
- Interpreter availability
- Material accessibility
- Follow-up capacity

**Addressing Disparities:**
- Training in cultural responsiveness
- Implicit bias awareness
- Language access programs
- Community health worker integration

## Team Communication

**Interprofessional Communication:**
- TeamSTEPPS framework
- Structured handoffs (I-PASS, SBAR)
- Safety communication (CUS: Concerned, Uncomfortable, Stop)
- Huddles and debriefs

**Care Coordination:**
- Transition communication
- Referral communication
- Information sharing across settings
- Patient role in coordination

**Electronic Communication:**
- Patient portal messaging
- Telemedicine communication
- Asynchronous communication
- E-consults between providers

## Teaching Communication Skills

**Training Methods:**
- Standardized patients
- Role play
- Observed clinical encounters
- Video review
- Feedback and coaching

**Assessment:**
- Direct observation
- OSCEs
- Patient feedback
- Peer assessment

**Maintaining Skills:**
- Continuing education
- Peer coaching
- Reflection practices
- Quality improvement data`,
      keyTerms: [
        { term: 'implicit bias', definition: 'Unconscious attitudes or stereotypes affecting understanding, actions, and decisions' },
        { term: 'TeamSTEPPS', definition: 'Team Strategies and Tools to Enhance Performance and Patient Safety; evidence-based teamwork system' },
        { term: 'OPTION scale', definition: 'Observational measure of patient involvement in decision-making during consultations' },
        { term: 'gain framing', definition: 'Presenting information in terms of benefits gained rather than losses avoided' },
        { term: 'I-PASS', definition: 'Structured handoff framework: Illness severity, Patient summary, Action list, Situation awareness, Synthesis by receiver' },
      ],
      clinicalNotes: `Communication improvement strategies:
1. Regular review of patient satisfaction data
2. Direct observation with feedback
3. Standardized patient encounters for practice
4. Peer coaching programs
5. Video review of actual encounters (with consent)
6. Integration of communication metrics into quality improvement`,
    },
    5: {
      level: 5,
      summary: 'Expert-level patient-provider communication encompasses mastery of complex communication scenarios, leadership in communication quality improvement, health systems approaches to communication enhancement, and research translation into practice.',
      explanation: `## Communication Excellence

**Expert Communication Competencies:**
- Adaptive expertise: Adjusting approach to unique situations
- Metacognitive awareness: Monitoring own communication
- Repair strategies: Recovering from communication failures
- Cultural humility mastery

**Complex Scenario Management:**
- Prognostic communication uncertainty
- Multi-morbidity discussions
- Family conflict navigation
- Cross-cultural end-of-life care
- Disclosure of medical errors

**Communication in Crisis:**
- Pandemic communication
- Mass casualty events
- Institutional crisis communication
- Media interactions

## Systems Approach to Communication

**Organizational Health Literacy:**
- Ten attributes of health literate organizations
- Environmental design for communication
- Workflow optimization
- Training infrastructure
- Quality monitoring systems

**Technology Integration:**
- EHR design for communication
- Patient portal optimization
- AI-assisted communication tools
- Telehealth best practices
- Remote patient monitoring communication

**Policy Implications:**
- Language access requirements
- Informed consent regulations
- Documentation standards
- Patient experience measurement

## Communication Quality Improvement

**Measurement Frameworks:**
- CAHPS surveys
- Patient experience data
- Communication-specific measures
- Outcome correlations

**Improvement Methodologies:**
- PDSA cycles for communication
- Root cause analysis for failures
- Positive deviance studies
- Implementation science approaches

**Sustainability:**
- Integration into culture
- Leadership commitment
- Continuous training
- Accountability structures

## Communication Research Translation

**Evidence-Based Communication:**
- Synthesizing communication research
- Translating evidence to practice
- Context adaptation
- Implementation strategies

**Research Gaps:**
- Digital communication effectiveness
- Long-term skill retention
- System-level interventions
- Equity-focused approaches

**Future Directions:**
- AI in communication support
- Precision communication
- Virtual reality training
- Genomics communication
- Global health applications

## Leadership in Communication

**Teaching Excellence:**
- Curriculum development
- Faculty development
- Assessment innovation
- Competency frameworks

**Institutional Change:**
- Building communication culture
- Resource advocacy
- Policy development
- Cross-department collaboration

**Quality and Safety:**
- Communication failure analysis
- Disclosure and apology programs
- Patient safety reporting systems
- Learning health system integration

## Ethical Dimensions

**Communication Ethics:**
- Truth-telling complexities
- Therapeutic privilege limitations
- Surrogate communication
- Pediatric assent and consent

**Equity and Justice:**
- Addressing systemic bias
- Advocacy for language access
- Health literacy as equity issue
- Social determinants communication

**Professional Development:**
- Burnout and communication
- Compassion cultivation
- Resilience building
- Work-life integration

## Special Populations

**Pediatric Communication:**
- Developmental stage adaptation
- Family-centered communication
- Transition to adult care
- Adolescent confidentiality

**Geriatric Communication:**
- Sensory accommodation
- Cognitive screening and adaptation
- Caregiver inclusion
- Goals of care across settings

**Serious Illness Communication:**
- Serious illness conversation guide
- Palliative care communication
- Bereavement support
- Legacy-building conversations

**Mental Health Integration:**
- Trauma-informed communication
- Suicide risk communication
- Psychiatric advance directives
- Recovery-oriented language`,
      keyTerms: [
        { term: 'adaptive expertise', definition: 'Ability to apply knowledge flexibly to novel situations beyond routine application' },
        { term: 'CAHPS', definition: 'Consumer Assessment of Healthcare Providers and Systems; standardized surveys measuring patient experience' },
        { term: 'therapeutic privilege', definition: 'Ethical concept allowing withholding information if disclosure would cause harm; increasingly limited' },
        { term: 'serious illness conversation guide', definition: 'Structured approach to discussing goals and values with seriously ill patients (VitalTalk/Ariadne Labs)' },
        { term: 'organizational health literacy', definition: 'Degree to which organizations implement policies and practices facilitating patient understanding and navigation' },
      ],
      clinicalNotes: `Key resources for communication excellence:
1. VitalTalk: Serious illness communication training
2. Motivational Interviewing Network of Trainers (MINT)
3. Academy of Communication in Healthcare
4. AHRQ Health Literacy Toolkit
5. TeamSTEPPS training programs

Leadership opportunities:
- Lead communication skills training
- Develop institutional communication standards
- Implement patient experience improvement initiatives
- Conduct communication research
- Advocate for policy supporting effective communication`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ahrq-share',
      type: 'website',
      title: 'The SHARE Approach',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/health-literacy/professional-training/shared-decision/index.html',
    },
    {
      id: 'vitaltalk',
      type: 'website',
      title: 'VitalTalk',
      source: 'VitalTalk',
      url: 'https://www.vitaltalk.org/',
    },
    {
      id: 'motivational-interviewing',
      type: 'textbook',
      title: 'Motivational Interviewing: Helping People Change',
      authors: ['Miller, W.R.', 'Rollnick, S.'],
      source: 'Guilford Press',
    },
    {
      id: 'teamstepps',
      type: 'website',
      title: 'TeamSTEPPS',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/teamstepps/index.html',
    },
  ],

  crossReferences: [
    { targetId: 'health-literacy-basics', targetType: 'concept', relationship: 'parent', label: 'Health Literacy Basics' },
    { targetId: 'health-literacy-health-advocacy', targetType: 'concept', relationship: 'sibling', label: 'Health Advocacy' },
    { targetId: 'health-literacy-teach-back', targetType: 'concept', relationship: 'related', label: 'Teach-Back Method' },
  ],

  tags: {
    systems: ['health-literacy'],
    topics: ['communication', 'patient-provider relationship', 'shared decision-making', 'health literacy'],
    keywords: ['communication', 'doctor-patient', 'shared decision-making', 'motivational interviewing', 'teach-back', 'SBAR'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default patientProviderCommunication;
