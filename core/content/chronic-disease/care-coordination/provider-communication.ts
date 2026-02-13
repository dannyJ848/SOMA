/**
 * Provider Communication - Care Coordination
 *
 * Effective communication strategies between patients
 * and their healthcare providers for better chronic disease management.
 */

import { EducationalContent } from "../../types";

export const PROVIDER_COMMUNICATION: EducationalContent = {
  id: "chronic-disease-provider-communication",
  type: "concept",
  name: "Provider Communication",
  alternateNames: ["Doctor-patient communication", "Healthcare communication", "Patient-provider dialogue"],

  levels: {
    1: {
      level: 1,
      summary: "Good communication with your doctor helps you get better care. Learning to ask questions, share information, and understand your treatment makes a big difference in your health.",
      explanation: `**Why Is Talking to Your Doctor Important?**
When you and your doctor communicate well, you get better care. Your doctor can only help if they know what is going on with you!

**Before Your Appointment:**
Get ready by:
- Writing down your symptoms
- Making a list of your questions
- Bringing all your medicine bottles or a list
- Writing down what has changed since your last visit

**During Your Appointment:**
*Ask Questions:*
- What is wrong with me?
- What caused this?
- What tests do I need?
- What are my treatment options?
- What are the side effects?
- When should I come back?

*Share Information:*
- Tell them all your symptoms, even embarrassing ones
- Mention all medicines you take (including vitamins)
- Share if you are having trouble with your treatment
- Let them know about stress or changes at home

**If You Do Not Understand:**
It is okay to say:
- "Can you explain that again?"
- "I do not understand. Can you use simpler words?"
- "Can you write that down for me?"

**After Your Appointment:**
- Make sure you understand what to do next
- Know when to call if you have problems
- Schedule any follow-up appointments
- Pick up any new prescriptions

**Tip:** Bring a family member or friend to help you listen and remember what the doctor says.`,
      keyTerms: [
        { term: "appointment", definition: "A scheduled time to see your doctor or healthcare provider" },
        { term: "symptoms", definition: "Things you feel or notice that tell you something might be wrong with your health" },
        { term: "treatment", definition: "What you do to get better, like taking medicine or changing your diet" },
      ],
      analogies: [
        "Talking to your doctor is like working with a mechanic on your car - the more you tell them about the problem, the better they can fix it.",
        "Your appointment is like a two-way street. Information needs to flow both ways for things to work well.",
      ],
      examples: [
        "Before seeing her doctor, Rosa writes down that her new medicine makes her dizzy and asks if there is a different one she can try.",
        "Tom brings his wife to his appointment so she can help him remember the doctor instructions about his diet.",
      ],
    },
    2: {
      level: 2,
      summary: "Effective patient-provider communication involves preparation, active participation during visits, and clear follow-through. Strong communication skills lead to better health outcomes and greater satisfaction with care.",
      explanation: `**The Importance of Good Communication:**

Research shows that effective patient-provider communication leads to:
- Better understanding of your condition
- Improved medication adherence
- Earlier detection of problems
- Higher satisfaction with care
- Better health outcomes

**Preparing for Appointments:**

*Organize Your Information:*
1. **Symptom diary** - Track symptoms, when they occur, severity
2. **Medication list** - All prescriptions, over-the-counter, supplements
3. **Question list** - Prioritize your most important concerns
4. **Test results** - Bring copies of recent labs or imaging
5. **Health history updates** - New diagnoses, hospitalizations, procedures

*Set Your Goals:*
- What do you most want to accomplish at this visit?
- What concerns are most important to address?
- What information do you need to manage your condition?

**During the Appointment:**

*Be an Active Participant:*
- Share your goals for the visit upfront
- Describe symptoms specifically (location, intensity, duration, triggers)
- Be honest about challenges with your treatment plan
- Ask clarifying questions
- Take notes or ask for written instructions

*Key Questions to Ask:*
| Topic | Questions |
|-------|-----------|
| Diagnosis | What is my condition? How serious is it? |
| Tests | Why do I need this test? What will results tell us? |
| Treatment | What are my options? What are the benefits and risks? |
| Medications | How do I take this? What side effects should I watch for? |
| Follow-up | What warning signs need immediate attention? When should I return? |

**Communication Techniques:**

*Teach-Back Method:*
Repeat back what you heard to confirm understanding:
"So you want me to take the new pill in the morning with food, is that right?"

*Speak Up:*
- If you disagree or have concerns, say so respectfully
- If you cannot follow a recommendation, explain why
- If something is not working, let your provider know

**Using Technology:**

- **Patient portals** - Message your doctor, view test results
- **Telehealth** - Video visits for convenience
- **Health apps** - Share data from symptom trackers or wearables
- **Email/messaging** - For non-urgent questions

**Overcoming Barriers:**

*If you have language barriers:*
- Request an interpreter
- Ask for translated materials
- Use patient portal translation features

*If you feel rushed:*
- Start with your most important concern
- Ask for a longer appointment if needed
- Request a follow-up call or message`,
      keyTerms: [
        { term: "teach-back method", definition: "Confirming understanding by repeating information back to your provider in your own words" },
        { term: "patient portal", definition: "A secure website where you can message your doctor, view test results, and manage appointments" },
        { term: "shared decision-making", definition: "Working together with your provider to make healthcare choices that fit your values and preferences" },
        { term: "health literacy", definition: "The ability to understand health information and use it to make good decisions" },
      ],
      analogies: [
        "Preparing for a doctor visit is like preparing for a job interview - the more prepared you are, the better the outcome.",
      ],
    },
    3: {
      level: 3,
      summary: "Patient-provider communication is a bidirectional process involving information exchange, relationship building, and shared decision-making. Evidence-based communication techniques improve adherence, outcomes, and patient experience in chronic disease management.",
      explanation: `**Communication in Chronic Disease Care:**

Chronic disease management requires ongoing communication that differs from acute care encounters:
- Longitudinal relationship development
- Complex treatment regimen discussions
- Behavior change conversations
- Psychosocial support
- Care coordination across providers

**Communication Frameworks:**

*Calgary-Cambridge Guide Elements:*
1. Initiating the session
2. Gathering information
3. Physical examination
4. Explanation and planning
5. Closing the session

*Patient-Centered Communication:*
- Exploring the patient perspective
- Understanding the patient context
- Reaching shared understanding
- Shared decision-making
- Enhancing the relationship

**Evidence-Based Techniques:**

*Motivational Interviewing:*
- Express empathy
- Develop discrepancy
- Roll with resistance
- Support self-efficacy

*Teach-Back/Show-Me:*
- Assesses comprehension
- Identifies gaps in understanding
- Improves retention
- Closes the loop on education

*Ask-Tell-Ask:*
1. Ask what patient already knows
2. Tell information in digestible chunks
3. Ask patient to reflect on what they heard

**Shared Decision-Making Process:**

| Step | Patient Role | Provider Role |
|------|--------------|---------------|
| 1 | Express preferences, values | Present options objectively |
| 2 | Ask questions | Explain benefits and risks |
| 3 | Consider options | Provide decision support tools |
| 4 | Express choice | Respect patient autonomy |
| 5 | Partner in plan | Implement chosen approach |

**Health Literacy Considerations:**

*Universal Precautions Approach:*
- Assume all patients may have difficulty
- Use plain language consistently
- Limit information to essential points
- Use visual aids and demonstrations
- Confirm understanding before proceeding

*Communication Strategies for Low Health Literacy:*
- Avoid medical jargon
- Use "living room" language
- Chunk information into small pieces
- Prioritize key messages
- Provide written materials at appropriate reading level

**Technology-Mediated Communication:**

*Asynchronous Messaging:*
- Patient portals and secure messaging
- Appropriate use cases and limitations
- Response time expectations
- Documentation considerations

*Telehealth Communication:*
- Adapting communication for video
- Building rapport remotely
- Physical exam limitations
- Technology barriers

**Measuring Communication Quality:**

*Patient Experience Measures:*
- CAHPS (Consumer Assessment of Healthcare Providers and Systems)
- Communication-specific items
- Interpersonal relationship assessment`,
      keyTerms: [
        { term: "motivational interviewing", definition: "A patient-centered counseling approach that helps resolve ambivalence about behavior change" },
        { term: "shared decision-making", definition: "Collaborative process where patients and providers work together to make healthcare decisions based on evidence and patient preferences" },
        { term: "health literacy", definition: "The capacity to obtain, process, and understand basic health information needed to make appropriate health decisions" },
        { term: "CAHPS", definition: "Consumer Assessment of Healthcare Providers and Systems; standardized patient experience surveys" },
      ],
      clinicalNotes: "Teach-back should be used for all critical information, especially medication instructions and warning signs. Document shared decision-making conversations and patient preferences. Consider health literacy screening for patients with complex regimens.",
    },
    4: {
      level: 4,
      summary: "Advanced patient-provider communication integrates relationship-centered care principles, evidence-based communication skill training, and systems-level interventions to optimize therapeutic alliance, treatment adherence, and health outcomes in chronic disease populations.",
      explanation: `**Theoretical Foundations:**

*Relationship-Centered Care:*
Key relationships in healthcare:
- Patient-practitioner relationship
- Practitioner-practitioner relationships
- Community-practice relationships
- Relationship with self

*Biopsychosocial Model:*
Communication must address:
- Biological (disease, symptoms, treatment)
- Psychological (emotions, coping, mental health)
- Social (family, work, resources)

**Communication Skill Domains:**

*Content Skills:*
- Information gathering
- Information giving
- Explanation and planning
- Decision support

*Process Skills:*
- Questioning techniques
- Active listening
- Facilitative responses
- Structuring the consultation

*Perceptual Skills:*
- Emotional intelligence
- Clinical intuition
- Contextual awareness
- Metacognition

**Advanced Communication Techniques:**

*Addressing Emotions:*
NURSE framework:
- Name the emotion
- Understand and validate
- Respect the patient
- Support the patient
- Explore further

*Difficult Conversations:*
SPIKES protocol for serious news:
1. Setting - privacy, time
2. Perception - what patient understands
3. Invitation - how much they want to know
4. Knowledge - share information clearly
5. Emotions - respond with empathy
6. Strategy and Summary - next steps

**Communication in Specific Contexts:**

*Medication Communication:*
- Indication and benefit
- Dosing and timing
- Expected side effects
- Warning signs
- Importance of adherence

*Behavior Change Discussions:*
- Assess readiness for change
- Explore ambivalence
- Build motivation
- Develop action plans
- Address barriers

*Goals of Care Conversations:*
- Elicit values and preferences
- Discuss prognosis
- Explore treatment options
- Document decisions
- Revisit over time

**Systems-Level Communication:**

*Care Team Communication:*
- Structured handoffs (I-PASS, SBAR)
- Interprofessional rounds
- Care conferences
- Documentation standards

*Transitions of Care:*
- Discharge communication
- Follow-up scheduling
- Medication reconciliation
- Warm handoffs

**Quality Improvement:**

*Communication Skill Training:*
- Standardized patient simulations
- Video review and feedback
- Objective Structured Clinical Examinations (OSCEs)
- Continuous professional development

*Organizational Interventions:*
- Workflow redesign for communication time
- EHR optimization
- Patient communication training
- Family engagement initiatives`,
      keyTerms: [
        { term: "relationship-centered care", definition: "Healthcare approach emphasizing the importance of all relationships in the healthcare process" },
        { term: "emotional intelligence", definition: "Ability to recognize, understand, and manage emotions in oneself and others" },
        { term: "SPIKES protocol", definition: "Six-step framework for delivering serious news: Setting, Perception, Invitation, Knowledge, Emotions, Strategy" },
        { term: "I-PASS", definition: "Standardized handoff framework: Illness severity, Patient summary, Action list, Situation awareness, Synthesis" },
        { term: "therapeutic alliance", definition: "Collaborative relationship between patient and provider that contributes to treatment effectiveness" },
      ],
      clinicalNotes: "Communication skills can be learned and improved with training and feedback. Consider recording encounters (with permission) for self-reflection. Address communication barriers proactively. Organizational culture significantly impacts communication quality.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art patient-provider communication integrates precision communication approaches, digital health tools, and implementation science to deliver personalized, culturally responsive, and equity-focused communication that optimizes chronic disease outcomes across diverse populations.",
      explanation: `**Evolution of Communication Science:**

Communication research has evolved from studying isolated skills to understanding communication as a complex, dynamic system influenced by:
- Individual characteristics
- Relational history
- Organizational context
- Cultural factors
- Technological mediation
- Power dynamics

**Precision Communication:**

*Tailored Approaches:*
- Personality-matched communication styles
- Cultural adaptation of techniques
- Literacy-appropriate information design
- Condition-specific communication needs
- Individual preference assessment

*AI-Assisted Communication:*
- Natural language processing of patient narratives
- Sentiment analysis for emotional cues
- Communication coaching tools
- Personalized patient education content
- Chatbot-assisted information delivery

**Health Equity in Communication:**

*Structural Barriers:*
- Time constraints in visits
- Interpreter availability
- Language-concordant providers
- Digital divide in technology access
- Health literacy disparities

*Culturally Responsive Communication:*
- Cultural humility training
- Community engagement in content development
- Addressing historical mistrust
- Intersectionality awareness
- Implicit bias recognition

**Digital Communication Innovations:**

*Synchronous Technologies:*
- Video visit optimization
- Remote patient monitoring integration
- Real-time language translation
- Virtual interpreters
- Augmented reality demonstrations

*Asynchronous Innovations:*
- AI-enabled patient portals
- Conversational agents for education
- Multimedia health information
- Interactive decision aids
- Automated follow-up systems

**Measurement and Quality Science:**

*Communication Outcome Measures:*
- Patient activation measures
- Decisional conflict scales
- Medication understanding assessments
- Concordance measures
- Patient-reported experience

*Implementation Outcomes:*
- Adoption of communication tools
- Fidelity to training
- Sustainability of interventions
- Spread across settings
- Equity in implementation

**Research Frontiers:**

*Emerging Areas:*
- Microexpression and nonverbal communication analysis
- Physiological markers of rapport
- Communication across distributed care teams
- Patient-generated health data in conversations
- Precision health communication

*Methodological Advances:*
- Conversation analysis techniques
- Sequence analysis of interactions
- Multi-level modeling of communication
- Mixed methods integration
- Patient-partnered research

**Implementation Science:**

*Barriers to Communication Training:*
- Time and resource constraints
- Competing priorities
- Skill degradation without reinforcement
- Organizational culture
- Resistance to change

*Facilitators of Improvement:*
- Leadership commitment
- Protected training time
- Performance feedback
- Peer coaching models
- EHR integration of tools

**Future Directions:**

*Personalized Communication:*
- Genomics-informed risk communication
- Behavioral phenotyping for tailoring
- Adaptive communication systems
- Continuous feedback loops

*System Transformation:*
- Value-based payment for communication
- Communication-focused quality measures
- Patient partnership in design
- Community-integrated care models

*Technology Integration:*
- Ambient listening for documentation
- Virtual reality for empathy training
- Predictive analytics for communication needs
- Interoperable communication platforms`,
      keyTerms: [
        { term: "precision communication", definition: "Tailoring communication approaches based on individual patient characteristics, preferences, and context" },
        { term: "cultural humility", definition: "Lifelong commitment to self-evaluation and self-critique regarding cultural awareness and power imbalances" },
        { term: "health equity", definition: "The attainment of the highest level of health for all people, requiring addressing social determinants" },
        { term: "implementation science", definition: "Study of methods to promote the integration of research findings into routine healthcare practice" },
        { term: "patient activation", definition: "Patient knowledge, skills, and confidence for managing their health and healthcare" },
      ],
      clinicalNotes: "Communication quality measurement should be routine, not exceptional. Address equity explicitly in communication improvement efforts. Technology should augment, not replace, human connection. Consider the full communication ecosystem including care team, family, and community. Sustainable improvement requires organizational commitment and resources.",
    },
  },

  media: [
    {
      id: "question-list-template",
      type: "diagram",
      filename: "appointment-question-list.pdf",
      title: "Appointment Question List Template",
      description: "Printable template for patients to prepare questions for healthcare visits",
    },
    {
      id: "communication-techniques",
      type: "diagram",
      filename: "communication-techniques.svg",
      title: "Patient-Provider Communication Techniques",
      description: "Visual guide to effective communication strategies",
    },
  ],

  citations: [
    {
      id: "ahrq-health-literacy",
      type: "website",
      title: "Health Literacy Universal Precautions Toolkit",
      source: "Agency for Healthcare Research and Quality",
      url: "https://www.ahrq.gov/health-literacy/improve/precautions/index.html",
    },
    {
      id: "sdm-resource",
      type: "article",
      title: "Shared Decision Making",
      source: "JAMA Patient Page",
    },
  ],

  crossReferences: [
    { targetId: "chronic-disease-care-team", targetType: "topic", relationship: "related", label: "Care Team" },
    { targetId: "chronic-disease-self-advocacy", targetType: "topic", relationship: "related", label: "Self-Advocacy" },
    { targetId: "chronic-disease-specialist-visits", targetType: "topic", relationship: "related", label: "Specialist Visits" },
  ],

  tags: {
    systems: ["general health"],
    topics: ["care coordination", "chronic disease", "patient education"],
    keywords: ["patient communication", "doctor communication", "health literacy", "shared decision-making"],
    clinicalRelevance: "high",
  },

  createdAt: "2025-01-24T00:00:00.000Z",
  updatedAt: "2025-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
  contributors: ["Biological Self Content Team"],
};
