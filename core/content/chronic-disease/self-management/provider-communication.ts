/**
 * Provider Communication - Self-Management Skills
 *
 * Teaching patients effective communication with healthcare
 * providers for better chronic disease management.
 */

import { EducationalContent } from '../../types';

export const SELF_MANAGEMENT_PROVIDER_COMMUNICATION: EducationalContent = {
  id: 'chronic-disease-self-management-provider-communication',
  type: 'concept',
  name: 'Provider Communication',
  alternateNames: ['Doctor-patient communication', 'Healthcare communication', 'Talking to your doctor'],

  levels: {
    1: {
      level: 1,
      summary: 'Learning how to talk with your doctors and nurses helps you get better care and understand your health.',
      explanation: `**Why Is Talking With Your Doctor Important?**
Good communication helps you:
- Understand your health conditions
- Know how to take care of yourself
- Get the right treatments
- Feel more in control of your health

**Before Your Visit:**

*Get Ready:*
- Write down your questions (put the most important ones first)
- Make a list of your symptoms
- Bring all your medications (or a complete list)
- Bring your symptom diary or health records
- Think about what you want to accomplish at this visit

*Questions to Consider:*
- What is causing my symptoms?
- What are my treatment options?
- What side effects should I watch for?
- When should I call you?

**During Your Visit:**

*Speak Up:*
- Tell your doctor how you really feel
- Ask questions if you don't understand
- Say if you're worried about something
- Be honest about medications (even ones you missed)

*Listen and Learn:*
- Take notes or bring someone to help
- Ask for written instructions
- Repeat back what you heard to make sure you understand
- Ask about resources to learn more

**After Your Visit:**
- Review your notes
- Fill prescriptions right away
- Follow the care plan
- Call if you have questions

**The Teach-Back Method:**
After your doctor explains something, say it back in your own words: "So you're saying I should..." This helps make sure you understood correctly.

**Tip:** It's okay to ask your doctor to slow down or explain things differently!`,
      keyTerms: [
        { term: 'provider', definition: 'A healthcare professional like a doctor, nurse, or specialist who helps with your care' },
        { term: 'care team', definition: 'All the healthcare workers who help take care of you' },
        { term: 'teach-back', definition: 'Repeating information back to your doctor in your own words to make sure you understand' },
      ],
      analogies: [
        'Your doctor is like a health coach - the better you communicate, the better they can help you reach your health goals.',
        'A doctor visit is like a team meeting where you and your doctor work together to plan your care.',
      ],
      examples: [
        'Before her appointment, Lisa writes down three questions about her diabetes medications and brings her blood sugar log.',
        'After the doctor explains a new treatment, Mike says "Let me make sure I understand - I take this pill twice a day with food, right?"',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective provider communication involves preparation, active participation during visits, and follow-through, enabling patients to be partners in their healthcare decisions.',
      explanation: `**The Communication Partnership:**

Healthcare works best when patients and providers work together as partners. This requires clear, honest, two-way communication.

**Preparing for Healthcare Visits:**

*Documentation to Bring:*
- Complete medication list (including supplements and over-the-counter)
- Symptom diary or health tracker data
- List of questions prioritized by importance
- Insurance cards and identification
- Results from tests done elsewhere
- Medical records from other providers

*Information to Have Ready:*
- Changes since last visit
- New symptoms or concerns
- Medication adherence (including missed doses)
- Side effects experienced
- Home monitoring results (blood pressure, blood sugar, weight)

**Communication Techniques:**

*Asking Effective Questions:*
| Instead of | Try |
|------------|-----|
| "Is this serious?" | "What could happen if we don't treat this?" |
| "What do I do?" | "What are my treatment options and their pros/cons?" |
| "Will I be okay?" | "What should I watch for and when should I call?" |

*The SBAR Technique:*
- **S**ituation: What is happening right now
- **B**ackground: Brief relevant history
- **A**ssessment: What you think is going on
- **R**equest: What you need from the provider

*Active Listening:*
- Make eye contact
- Take notes
- Ask clarifying questions
- Summarize what you heard

**Managing Different Communication Scenarios:**

*During Routine Visits:*
- Address most important issues first
- Be specific about symptoms
- Discuss medication adherence honestly
- Ask about preventive care

*During Urgent Situations:*
- Stay calm and focused
- Clearly describe the problem
- Follow advice or go to emergency care
- Document the conversation

*With Specialists:*
- Bring records from primary care
- Understand the referral reason
- Ask how care will be coordinated
- Request copies of reports

**After the Visit:**

*Follow-Through:*
- Review after-visit summary
- Fill prescriptions promptly
- Schedule follow-up appointments
- Complete recommended tests
- Contact office with questions

**Communication Rights:**
- Ask for an interpreter if needed
- Request information in your preferred language
- Ask for explanations in simpler terms
- Seek a second opinion if desired`,
      keyTerms: [
        { term: 'shared decision-making', definition: 'Process where patients and providers work together to make healthcare choices based on evidence and patient preferences' },
        { term: 'health literacy', definition: 'Ability to understand and use health information to make decisions' },
        { term: 'SBAR', definition: 'Communication format: Situation, Background, Assessment, Request' },
        { term: 'after-visit summary', definition: 'Document provided after appointments summarizing what was discussed and next steps' },
      ],
      analogies: [
        'Preparing for a doctor visit is like preparing for an important meeting - having an agenda helps you cover everything that matters.',
      ],
    },
    3: {
      level: 3,
      summary: 'Provider communication in chronic disease management requires health literacy assessment, shared decision-making frameworks, and systematic approaches to information exchange across care settings.',
      explanation: `**Communication in Chronic Care:**

Effective provider communication is central to chronic disease management, influencing adherence, self-management, and outcomes.

**Health Literacy Assessment:**

*Health Literacy Domains:*
- Reading and comprehension
- Numeracy (understanding numbers, dosing)
- Navigation of healthcare system
- Self-advocacy skills

*Assessment Approaches:*
- REALM (Rapid Estimate of Adult Literacy in Medicine)
- TOFHLA (Test of Functional Health Literacy)
- Brief Health Literacy Screen (subjective questions)
- Newest Vital Sign

*Communication Adaptations:*
| Literacy Level | Strategies |
|----------------|------------|
| Low | Plain language, pictures, demonstrations |
| Moderate | Written reinforcement, teach-back |
| High | Detailed information, shared resources |

**Shared Decision-Making Framework:**

*Core Elements:*
1. Define the decision to be made
2. Present options with pros/cons
3. Elicit patient preferences and values
4. Discuss uncertainty and evidence
5. Reach mutual agreement
6. Plan implementation and follow-up

*Decision Aids:*
- Comparison charts
- Risk calculators
- Video explanations
- Interactive tools
- Patient testimonials

**Chronic Care Model Communication:**

*Productive Interactions:*
- Prepared, proactive practice team
- Informed, activated patient
- Structured visit protocols
- Goal-setting conversations
- Action plan development

*Self-Management Support Conversations:*
1. Assess: Current knowledge and behaviors
2. Advise: Clear, personalized recommendations
3. Agree: Collaborative goal-setting
4. Assist: Identify barriers, provide resources
5. Arrange: Follow-up and support

**Care Coordination Communication:**

*Information Sharing:*
- Care summaries between providers
- Medication reconciliation
- Test result communication
- Transition of care documents

*Patient Role:*
- Sharing information across providers
- Tracking appointments and tests
- Reporting changes to all providers
- Maintaining personal health record

**Telehealth Communication:**

*Adapting for Virtual Visits:*
- Test technology beforehand
- Prepare environment (lighting, quiet)
- Have materials ready to show
- Speak clearly, allow pauses
- Summarize and confirm understanding

**Documentation for Communication:**

*Patient-Maintained Records:*
- Medication list (updated regularly)
- Problem list
- Allergy information
- Test results
- Provider contact information

*Communicating Changes:*
- Symptom changes
- Medication changes from other providers
- ER visits or hospitalizations
- New diagnoses`,
      keyTerms: [
        { term: 'health literacy', definition: 'Degree to which individuals can obtain, process, and understand health information needed for decisions' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinicians and patients make healthcare decisions together, considering evidence and patient values' },
        { term: 'teach-back method', definition: 'Technique to confirm patient understanding by asking them to explain information in their own words' },
        { term: 'care coordination', definition: 'Deliberate organization of patient care activities across providers to facilitate appropriate delivery' },
      ],
      clinicalNotes: 'Universal precautions for health literacy assume all patients benefit from clear communication. Use teach-back routinely, not just when literacy concerns are identified. Decision aids improve understanding and reduce decisional conflict.',
    },
    4: {
      level: 4,
      summary: 'Advanced provider communication integrates behavioral theories, motivational techniques, and systems-level approaches to optimize information exchange, shared decision-making, and patient activation in chronic disease management.',
      explanation: `**Theoretical Frameworks:**

*Health Behavior Theories:*
- Social Cognitive Theory (self-efficacy, outcome expectations)
- Theory of Planned Behavior (attitudes, norms, perceived control)
- Transtheoretical Model (stages of change)
- Health Belief Model (perceived susceptibility, benefits, barriers)

*Communication Theory:*
- Relational communication models
- Information processing theory
- Uncertainty management theory
- Narrative medicine

**Motivational Interviewing in Chronic Care:**

*Core Spirit:*
- Partnership (collaboration, not confrontation)
- Acceptance (empathy, autonomy support)
- Compassion (promoting patient welfare)
- Evocation (drawing out patient motivation)

*Key Techniques:*
- Open-ended questions
- Affirmations
- Reflective listening
- Summaries
- Eliciting change talk

*OARS Framework:*
\`\`\`
O - Open Questions: "What concerns you most about your diabetes?"
A - Affirm: "You've done a great job tracking your blood sugars."
R - Reflect: "It sounds like taking multiple medications feels overwhelming."
S - Summarize: "So you're interested in finding simpler ways to manage your health."
\`\`\`

**Patient Activation:**

*Levels of Activation (PAM):*
1. Disengaged and overwhelmed
2. Becoming aware but struggling
3. Taking action
4. Maintaining behaviors and pushing further

*Communication Strategies by Level:*
| PAM Level | Approach |
|-----------|----------|
| 1 | Build trust, reduce overwhelm, small steps |
| 2 | Build knowledge and confidence, problem-solving |
| 3 | Skill-building, action planning, goal-setting |
| 4 | Peer support, self-advocacy, prevent relapse |

**Health Literacy Universal Precautions:**

*Plain Language Principles:*
- Use common words
- Active voice
- Short sentences
- One idea per paragraph
- Define technical terms

*Numeric Communication:*
- Use absolute numbers, not just percentages
- Consistent denominators
- Visual representations
- Put numbers in context

*Teach-Back Protocol:*
1. Explain information clearly
2. Ask patient to explain back
3. Listen for accuracy
4. Re-explain as needed
5. Verify understanding again

**Difficult Conversations:**

*Breaking Bad News (SPIKES):*
- **S**etting up the interview
- **P**erception assessment
- **I**nvitation (how much they want to know)
- **K**nowledge provision
- **E**mpathic response
- **S**trategy and summary

*Addressing Non-Adherence:*
- Non-judgmental exploration
- Understand barriers
- Collaborative problem-solving
- Adjust treatment to patient context

**Systems-Level Communication:**

*EHR Communication Tools:*
- Patient portals
- Secure messaging
- After-visit summaries
- Care gap notifications

*Team-Based Communication:*
- Huddles and handoffs
- Care coordination meetings
- Shared documentation
- Role clarification`,
      keyTerms: [
        { term: 'motivational interviewing', definition: 'Collaborative conversation style strengthening patient motivation and commitment to change' },
        { term: 'patient activation', definition: 'Patient knowledge, skills, and confidence for self-management' },
        { term: 'health literacy universal precautions', definition: 'Simplifying communication for all patients regardless of assessed literacy level' },
        { term: 'SPIKES protocol', definition: 'Framework for delivering difficult medical news: Setting, Perception, Invitation, Knowledge, Empathy, Strategy' },
        { term: 'change talk', definition: 'Patient statements expressing desire, ability, reasons, or need for change' },
      ],
      clinicalNotes: 'Motivational interviewing is effective for behavior change but requires training and practice. Patient activation is a modifiable target for intervention. Numeric risk communication is challenging - use multiple formats (percentages, frequencies, graphics).',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art provider communication leverages precision communication approaches, digital health technologies, and learning health system frameworks to optimize patient-provider interactions and chronic disease outcomes.',
      explanation: `**Evolution of Provider Communication:**

Communication science in healthcare has evolved from didactic information transfer to sophisticated, personalized, multi-channel engagement approaches.

**Precision Communication:**

*Tailored Messaging:*
- Psychographic targeting
- Health literacy matching
- Cultural tailoring
- Stage of change alignment
- Channel preference optimization

*Adaptive Communication:*
\`\`\`
Patient Characteristics
        ↓
Communication Preferences Assessment
        ↓
Message Tailoring Algorithms
        ↓
Channel Selection (portal, text, phone, in-person)
        ↓
Content Personalization
        ↓
Response Monitoring
        ↓
Adaptation Based on Engagement
\`\`\`

**Digital Communication Technologies:**

*Patient Portal Optimization:*
- Plain language after-visit summaries
- Personalized health reminders
- Secure messaging guidelines
- Patient-generated data integration
- Shared care plan visibility

*Conversational AI:*
- Symptom assessment chatbots
- Medication reminder systems
- Pre-visit preparation assistants
- Post-visit question answering
- Health coaching applications

*Natural Language Processing:*
- Patient portal message analysis
- Documentation quality improvement
- Sentiment analysis
- Theme extraction from patient feedback

**Communication Training and Quality:**

*Competency Frameworks:*
- Kalamazoo Consensus Statement
- ACGME communication competencies
- Interprofessional communication standards
- Cultural competency frameworks

*Quality Measurement:*
- CAHPS surveys (patient experience)
- Communication process measures
- Audio/video review and feedback
- Standardized patient assessments

**Health System Communication Infrastructure:**

*Population Health Communication:*
- Outreach campaigns
- Care gap messaging
- Preventive care reminders
- Mass notification systems
- Social media engagement

*Care Coordination Communication:*
- Direct secure messaging between providers
- Shared care plan platforms
- e-Referral systems
- Hospital-community transitions

**Equity in Communication:**

*Language Access:*
- Professional interpreter services
- Multilingual materials
- Technology for language assistance
- Training in interpreter-mediated communication

*Cultural Humility:*
- Recognition of diverse health beliefs
- Flexible communication approaches
- Community engagement
- Structural competency

*Digital Equity:*
- Low-literacy digital interfaces
- Phone-based alternatives
- Community access points
- Device lending programs

**Research Frontiers:**

*Communication Biomarkers:*
- Voice analysis for emotional state
- Linguistic markers of engagement
- Physiological indicators during communication
- Eye-tracking in shared decision-making

*AI-Augmented Communication:*
- Real-time clinician communication support
- Documentation assistance
- Risk communication aids
- Shared decision-making support

**Implementation Science:**

*Scaling Effective Interventions:*
- CFIR (Consolidated Framework for Implementation Research)
- RE-AIM (Reach, Effectiveness, Adoption, Implementation, Maintenance)
- Implementation strategies
- De-implementation of ineffective approaches

*Continuous Improvement:*
- PDSA cycles
- Feedback loops
- Learning health system integration
- Real-world evidence generation

**Ethical Considerations:**

*Informed Consent in Complex Care:*
- Complexity of chronic disease information
- Shared decision-making requirements
- Documentation standards
- Capacity assessment

*Communication Technology Ethics:*
- AI transparency
- Data privacy in digital communication
- Algorithmic bias in messaging
- Patient autonomy in digital engagement`,
      keyTerms: [
        { term: 'precision communication', definition: 'Tailoring health communication to individual patient characteristics, preferences, and contexts' },
        { term: 'conversational AI', definition: 'Natural language processing systems enabling automated patient conversations' },
        { term: 'cultural humility', definition: 'Lifelong process of self-reflection and learning about diverse cultural backgrounds' },
        { term: 'CAHPS', definition: 'Consumer Assessment of Healthcare Providers and Systems; standardized patient experience surveys' },
        { term: 'learning health system', definition: 'System where research and practice are integrated for continuous improvement' },
        { term: 'implementation science', definition: 'Study of methods to promote uptake of evidence-based practices into routine care' },
      ],
      clinicalNotes: 'Communication quality is measurable and improvable through systematic assessment and feedback. Digital communication tools require thoughtful implementation to avoid widening health disparities. AI-augmented communication should support, not replace, human connection. Balance efficiency gains from technology with maintenance of therapeutic relationships.',
    },
  },

  media: [
    {
      id: 'question-list-template',
      type: 'diagram',
      filename: 'doctor-visit-question-template.pdf',
      title: 'Doctor Visit Question List Template',
      description: 'Printable template for preparing questions before appointments',
    },
    {
      id: 'medication-list-template',
      type: 'diagram',
      filename: 'medication-list-template.pdf',
      title: 'Medication List Template',
      description: 'Wallet card for tracking all medications',
    },
  ],

  citations: [
    {
      id: 'teach-back-ahrq',
      type: 'website',
      title: 'Health Literacy Universal Precautions Toolkit',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/health-literacy/improve/precautions/index.html',
    },
    {
      id: 'motivational-interviewing',
      type: 'textbook',
      title: 'Motivational Interviewing: Helping People Change',
      authors: ['Miller WR', 'Rollnick S'],
      source: 'Guilford Press',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-symptom-monitoring', targetType: 'topic', relationship: 'related', label: 'Symptom Monitoring' },
    { targetId: 'chronic-disease-warning-signs', targetType: 'topic', relationship: 'related', label: 'Warning Signs' },
    { targetId: 'chronic-disease-self-advocacy', targetType: 'topic', relationship: 'related', label: 'Self-Advocacy' },
  ],

  tags: {
    systems: ['general health'],
    topics: ['self-management', 'chronic disease', 'patient education', 'communication'],
    keywords: ['doctor communication', 'patient-provider relationship', 'health literacy', 'shared decision-making'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
