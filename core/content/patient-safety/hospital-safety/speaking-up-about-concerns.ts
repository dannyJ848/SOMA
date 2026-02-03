/**
 * Speaking Up About Concerns
 *
 * Empowering patients to voice safety concerns in healthcare settings.
 */

import { EducationalContent } from '../../types';

export const speakingUpAboutConcerns: EducationalContent = {
  id: 'concept-speaking-up-about-concerns',
  type: 'concept',
  name: 'Speaking Up About Concerns',
  alternateNames: ['Patient Advocacy', 'Voicing Concerns', 'Patient Empowerment'],

  levels: {
    1: {
      level: 1,
      summary: 'If something seems wrong with your care, it is okay and important to say something. Your voice helps keep you safe.',
      explanation: `**Why Speaking Up Matters:**
You know your own body best! If something feels wrong or you have a question, it is important to tell someone. Speaking up can prevent mistakes and keep you safe.

**When to Speak Up:**
- If you feel pain or something is not right
- If you do not understand what is happening
- If you think there might be a mistake
- If someone does not wash their hands
- If you are worried about anything

**How to Speak Up:**

*What to Say:*
- "I have a question about..."
- "Something does not feel right..."
- "Can you explain that to me?"
- "I am worried about..."
- "I think there might be a mistake..."

*Who to Tell:*
- Your nurse
- Your doctor
- A family member who can help
- Any staff member

**It's Not Rude to Ask:**
Healthcare workers want you to ask questions! They would rather you speak up than have something go wrong.

**If You Feel Scared:**
- Bring a family member or friend to help
- Write down your questions
- Ask to speak to someone in charge
- Remember: Your safety is the most important thing

**Remember:**
You are the most important member of your healthcare team!`,
      keyTerms: [
        { term: 'speak up', definition: 'To say something when you have a question or concern' },
        { term: 'healthcare team', definition: 'All the people helping take care of you, including doctors, nurses, and you!' },
        { term: 'advocate', definition: 'Someone who speaks up for you or helps you speak up' },
      ],
      analogies: [
        'Speaking up is like raising your hand in class - it helps everyone learn and keeps things going right.',
        'You are like the captain of your own ship - you need to tell the crew if something seems wrong.',
      ],
      examples: [
        'A patient notices their medicine looks different than usual and asks the nurse about it.',
        'Someone asks the doctor to explain the treatment plan in simpler words.',
      ],
    },
    2: {
      level: 2,
      summary: 'Patients who speak up about concerns contribute to their safety. Learning effective communication strategies empowers you to be an active participant in your care.',
      explanation: `**The Importance of Speaking Up:**

Research shows that patients who speak up have better outcomes. Healthcare workers welcome questions and concerns - they help catch errors before harm occurs.

**Situations That Warrant Speaking Up:**

| Concern | Why It Matters |
|---------|----------------|
| Medication looks different | Could be wrong drug |
| Staff not washing hands | Infection risk |
| Allergies not confirmed | Allergic reaction risk |
| Identity not verified | Wrong-patient error |
| Something does not feel right | Early warning sign |

**Effective Communication Strategies:**

*Be Specific:*
- Instead of: "Something is wrong"
- Say: "My arm where the IV is feels hot and looks red"

*Use "I" Statements:*
- "I am concerned about..."
- "I noticed that..."
- "I do not understand..."

*Ask Questions:*
- "Can you help me understand why...?"
- "What should I expect from this treatment?"
- "Is it normal to feel this way?"

**The Two-Challenge Rule:**
If your concern is not addressed:
1. State your concern clearly
2. If dismissed, restate it more assertively
3. If still unresolved, escalate to a supervisor

**Overcoming Barriers:**

*Common Fears:*
- "I do not want to be a bother"
- "They are the experts"
- "They might get upset"

*Remember:*
- Your safety is the priority
- Questions are expected and welcomed
- You have the right to understand your care
- Healthcare workers are human and can make mistakes

**Using an Advocate:**
- Ask a family member or friend to help
- They can take notes and ask questions
- Designate someone to speak for you if needed
- Patient advocates are available at most hospitals

**If Your Concern Is Not Addressed:**
- Ask to speak with a charge nurse or supervisor
- Contact patient relations or patient advocate
- Know the chain of command
- Document your concerns`,
      keyTerms: [
        { term: 'patient advocate', definition: 'Hospital staff member who helps patients resolve concerns' },
        { term: 'two-challenge rule', definition: 'Asserting a concern at least twice to ensure it is heard' },
        { term: 'chain of command', definition: 'The order of people to contact when escalating a concern' },
        { term: 'assertive communication', definition: 'Speaking up clearly and respectfully while maintaining your position' },
      ],
      analogies: [
        'Speaking up is like being a co-pilot - you help the team navigate safely by pointing out what you see.',
      ],
    },
    3: {
      level: 3,
      summary: 'Patient engagement through speaking up represents a critical safety intervention. Understanding communication frameworks and escalation pathways optimizes effectiveness.',
      explanation: `## Speaking Up: A Patient Safety Intervention

**Evidence Base:**
- AHRQ research supports patient engagement in safety
- Speaking up can prevent errors before they reach patients
- Joint Commission includes patient involvement in safety goals
- Psychological safety principles apply to patients too

**Communication Frameworks:**

*SBAR for Patients:*
| Element | Patient Application |
|---------|---------------------|
| Situation | What is happening |
| Background | Relevant history |
| Assessment | What you think |
| Recommendation | What you need |

*Example:*
- S: "I am having increasing pain in my incision"
- B: "I had surgery yesterday and the pain was controlled until an hour ago"
- A: "I am worried it might be infected because it looks red"
- R: "Could someone please check it?"

**Barriers to Speaking Up:**

*Patient Barriers:*
- Fear of being labeled "difficult"
- Deference to authority
- Health literacy challenges
- Language barriers
- Cultural norms
- Physical limitations

*System Barriers:*
- Time pressure
- Hierarchy
- Dismissive responses
- Lack of mechanisms

**Strategies to Overcome Barriers:**

*Individual:*
- Prepare questions in advance
- Bring an advocate
- Use "I" statements
- Be specific and concrete
- Document concerns

*Ask for Support:*
- Request interpreter services
- Ask for written information
- Utilize patient advocates
- Request family meetings

**Escalation Pathway:**

\`\`\`
Direct Care Provider (nurse, resident)
            ↓
Charge Nurse / Attending Physician
            ↓
Patient Relations / Patient Advocate
            ↓
Nursing Supervisor / Medical Director
            ↓
Hospital Administration
            ↓
External Resources (state health dept, Joint Commission)
\`\`\`

**Rapid Response Systems:**
- Many hospitals allow patients/families to call rapid response
- Used when concerns about significant clinical change
- Brings additional expertise to bedside
- Examples: Condition H, Patient and Family Activated Response

**Documentation:**
- Keep notes of conversations
- Record names and times
- Document concerns in writing if needed
- Request copies of medical records`,
      keyTerms: [
        { term: 'SBAR', definition: 'Communication framework: Situation, Background, Assessment, Recommendation' },
        { term: 'psychological safety', definition: 'Feeling safe to speak up without fear of negative consequences' },
        { term: 'rapid response team', definition: 'Hospital team that can be called for urgent patient concerns' },
        { term: 'Condition H', definition: 'Program allowing patients/families to directly call for help when concerned' },
      ],
      clinicalNotes: 'Healthcare organizations increasingly recognize patient and family engagement in safety. Systems that support speaking up have better safety cultures and outcomes.',
    },
    4: {
      level: 4,
      summary: 'Patient engagement in safety requires systematic approaches including organizational culture, communication training, escalation systems, and patient empowerment strategies.',
      explanation: `## Organizational Approach to Patient Voice in Safety

**Theoretical Foundation:**

*High-Reliability Principles:*
- Preoccupation with failure
- Reluctance to simplify
- Sensitivity to operations
- Commitment to resilience
- Deference to expertise (including patient expertise)

*Psychological Safety Framework:*
- Applies to patients as well as staff
- Safety to speak up without retribution
- Concerns welcomed and addressed
- Learning from near-misses

**Patient Activation Research:**

*Patient Activation Measure (PAM):*
- Level 1: May not believe patient role is important
- Level 2: Lacks confidence and knowledge
- Level 3: Beginning to take action
- Level 4: Maintaining behaviors under stress

*Interventions to Increase Activation:*
- Education and information
- Skill building
- Partnership approaches
- Removing barriers

**System Design for Patient Voice:**

*Structural Elements:*
- Clear escalation pathways
- Patient-activated rapid response
- Real-time feedback mechanisms
- Patient advisory councils
- Complaint resolution processes

*Communication Training:*
- Teach-back method
- Ask Me 3 program
- Speak Up initiatives
- Health literacy tools

**Family Engagement:**

*Family Presence:*
- During procedures
- During rounds
- During emergencies
- 24/7 visitation policies

*Family as Safety Partners:*
- Additional observers
- Continuity of information
- Advocacy role
- Post-discharge support

**Measuring Patient Voice:**

| Metric | Method |
|--------|--------|
| Patient experience | HCAHPS surveys |
| Speaking up frequency | Patient reports |
| Concern resolution | Complaint tracking |
| Safety reporting | Patient safety reports |
| Engagement | PAM scores |

**Addressing Power Dynamics:**

*Healthcare Hierarchy:*
- Traditional doctor-patient dynamic
- Nurse-patient power imbalance
- Institutional authority
- Patient vulnerability during illness

*Mitigation Strategies:*
- Explicit invitation to speak up
- Validation of concerns
- Closing the loop on feedback
- Non-defensive response training

**Special Populations:**

| Population | Considerations |
|------------|----------------|
| Elderly | Cognitive status, deference |
| Pediatric | Parent/child dynamics |
| Mental health | Therapeutic relationship |
| End of life | Family role, vulnerability |
| Limited English | Interpreter access |`,
      keyTerms: [
        { term: 'Patient Activation Measure', definition: 'Tool measuring patient knowledge, skills, and confidence in self-management' },
        { term: 'HCAHPS', definition: 'Hospital Consumer Assessment of Healthcare Providers and Systems - patient experience survey' },
        { term: 'Ask Me 3', definition: 'Patient education program focusing on three essential questions' },
        { term: 'teach-back', definition: 'Communication technique verifying understanding by having patient explain in own words' },
      ],
      clinicalNotes: 'Organizations with strong patient engagement in safety demonstrate better outcomes across quality metrics. Leadership support and staff training are essential for authentic patient partnership.',
    },
    5: {
      level: 5,
      summary: 'Optimal patient safety engagement integrates organizational culture, evidence-based communication practices, technology, and patient partnership within a learning health system framework.',
      explanation: `## Patient Engagement in Safety: Advanced Perspectives

**Evidence Synthesis:**

*Patient Engagement Impact:*
- Associated with reduced HAIs
- Improves medication safety
- Enhances diagnostic accuracy
- Reduces readmissions
- Improves patient experience

*Implementation Research:*
- Context matters significantly
- Staff attitudes are critical
- Patient characteristics influence uptake
- System supports essential

**Co-Design and Co-Production:**

\`\`\`
Traditional Model          Partnership Model

Provider ───→ Patient     Provider ←──→ Patient
  (Passive)                 (Active Partner)
                                 ↓
                          Co-designed Care
                                 ↓
                          Improved Outcomes
\`\`\`

*Co-Design Elements:*
- Patient advisory councils
- Patient safety committee membership
- Policy development involvement
- Quality improvement participation
- Research partnership

**Technology-Enabled Engagement:**

*Current Applications:*
- Patient portals with secure messaging
- Real-time feedback systems
- Mobile health applications
- Patient-reported outcome measures
- Video visit capabilities

*Emerging Technologies:*
- AI-assisted symptom monitoring
- Predictive analytics for patient deterioration
- Voice-enabled reporting
- Remote monitoring integration

**Health Equity Considerations:**

*Disparities in Speaking Up:*
- Socioeconomic factors
- Health literacy levels
- Language barriers
- Cultural differences
- Historical distrust

*Equity-Focused Interventions:*
- Universal precautions for health literacy
- Language access services
- Cultural humility training
- Community health worker programs
- Trust-building initiatives

**Global Perspectives:**

*WHO Patient Safety:*
- World Patient Safety Day
- Global Patient Safety Challenges
- Medication Without Harm initiative
- Patient engagement emphasis

*International Variations:*
- Cultural context differences
- Healthcare system influences
- Resource considerations
- Policy frameworks

**Learning Health System Integration:**

\`\`\`
Patient-Reported Data
         ↓
    EHR Integration
         ↓
Analytics and Learning ← Research Findings
         ↓
 Improved Care Delivery
         ↓
  Patient Feedback
         ↓
Continuous Improvement
\`\`\`

**Research Frontiers:**

*Current Investigations:*
- Optimal engagement strategies
- Technology effectiveness
- Equity interventions
- Implementation science
- Outcome measurement

*Knowledge Gaps:*
- Long-term sustainability
- Cost-effectiveness
- Scalability across settings
- Vulnerable population approaches

**Policy and Regulatory Landscape:**

*Accreditation Standards:*
- Joint Commission patient/family engagement
- CMS patient safety conditions
- State regulations
- Professional standards

*Quality Measurement:*
- Patient experience measures
- Patient-reported outcomes
- Safety culture inclusion
- Engagement metrics

**Future Directions:**

*System Evolution:*
- Patient as full safety partner
- Real-time co-monitoring
- Shared health records
- Patient-led safety initiatives

*Cultural Transformation:*
- From compliance to partnership
- Authentic engagement
- Power redistribution
- Mutual accountability`,
      keyTerms: [
        { term: 'co-design', definition: 'Collaborative design process involving patients in creating healthcare solutions' },
        { term: 'learning health system', definition: 'Healthcare system that continuously improves through data and evidence integration' },
        { term: 'patient-reported outcome', definition: 'Health outcome reported directly by patients without interpretation' },
        { term: 'health equity', definition: 'Attainment of highest level of health for all people through addressing social determinants' },
        { term: 'patient safety culture', definition: 'Shared values and behaviors that prioritize safety in healthcare organizations' },
      ],
      clinicalNotes: 'Authentic patient engagement in safety requires fundamental culture change, not just programs. Success requires addressing power dynamics, ensuring equity, and creating systems that support patient voice at all levels.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ahrq-speak-up',
      type: 'website',
      title: 'Questions Are the Answer',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/patients-consumers/patient-involvement/ask-your-doctor/index.html',
    },
  ],

  crossReferences: [
    { targetId: 'concept-talking-to-your-doctor', targetType: 'concept', relationship: 'related', label: 'Talking to Your Doctor' },
    { targetId: 'concept-understanding-your-rights', targetType: 'concept', relationship: 'related', label: 'Understanding Your Rights' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['patient-advocacy', 'communication', 'patient-empowerment'],
    clinicalRelevance: 'critical',
    keywords: ['speak up', 'patient voice', 'safety concerns', 'patient engagement'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default speakingUpAboutConcerns;
