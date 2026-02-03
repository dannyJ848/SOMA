/**
 * How to Talk to Your Doctor
 *
 * Effective communication strategies for productive medical appointments.
 */

import { EducationalContent } from '../../types';

export const talkingToYourDoctor: EducationalContent = {
  id: 'concept-talking-to-your-doctor',
  type: 'concept',
  name: 'How to Talk to Your Doctor',
  alternateNames: ['Doctor Communication', 'Patient-Provider Communication', 'Medical Appointment Communication'],

  levels: {
    1: {
      level: 1,
      summary: 'Talking to your doctor is like having a conversation with a helper who wants to keep you healthy.',
      explanation: `Going to the doctor can feel scary, but remember: your doctor wants to help you! Here's how to have a good talk with them.

**Before You Go:**
- Write down what's bothering you
- Write down any questions you have
- Bring a list of medicines you take
- Bring a parent or friend if you want help

**When You're There:**
- Tell the doctor what's wrong in your own words
- Be honest - doctors won't judge you
- Say if something hurts and show them where
- Ask questions if you don't understand something

**Good Things to Say:**
- "My tummy hurts right here" (point to the spot)
- "I've felt tired for about a week"
- "I don't understand - can you explain that again?"
- "Is there anything I should do at home?"

**Remember:**
- There are no silly questions
- It's okay to say "I don't know"
- You can ask them to write things down for you
- You can bring notes to read from

**Why Talking Matters:**
When you tell your doctor exactly how you feel, they can figure out how to help you better. It's like giving them clues to solve a puzzle!`,
      keyTerms: [
        { term: 'doctor', definition: 'A person trained to help keep you healthy and help you feel better when you\'re sick' },
        { term: 'appointment', definition: 'A scheduled time to see your doctor' },
        { term: 'symptom', definition: 'Something you feel that tells you something might be wrong, like pain or feeling tired' },
      ],
      analogies: [
        'Talking to your doctor is like telling a coach what hurts so they can help you play better.',
        'Your doctor is like a detective - the more clues you give them about how you feel, the better they can solve the mystery of what\'s wrong.',
      ],
      examples: [
        'A child might say: "My ear has been hurting for two days, especially at night."',
        'Someone might ask: "Will this medicine make me sleepy?"',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective doctor-patient communication involves preparation, honest symptom reporting, and active participation in your healthcare.',
      explanation: `Good communication with your doctor is a skill that improves your healthcare. Here's how to make the most of your appointments.

**Preparation is Key:**
1. **List your concerns** - Write down symptoms, questions, and topics to discuss
2. **Prioritize** - Start with your most important concern
3. **Gather information** - Bring medication lists, test results, and insurance cards
4. **Consider a companion** - A friend or family member can help you remember information

**During the Appointment:**

*Be Specific About Symptoms:*
- When did it start?
- Where exactly does it hurt?
- How bad is it on a scale of 1-10?
- What makes it better or worse?
- Is it constant or does it come and go?

*Be Honest:*
- Mention all medications, including vitamins and supplements
- Discuss lifestyle habits (diet, exercise, smoking, alcohol)
- Share family medical history
- Don't hide embarrassing symptoms - doctors have seen it all

*Ask Questions:*
- "What do you think is causing this?"
- "What are my treatment options?"
- "What are the risks and benefits?"
- "When should I follow up?"
- "What symptoms should prompt me to call?"

**After the Appointment:**
- Review your notes or ask for a summary
- Make sure you understand your instructions
- Schedule follow-up appointments
- Fill prescriptions promptly

**If You're Confused:**
It's completely acceptable to say:
- "Can you explain that in simpler terms?"
- "I'm not sure I understood - could you repeat that?"
- "Can you write that down for me?"

**Building a Good Relationship:**
- Be punctual for appointments
- Cancel in advance if you can't make it
- Follow through on recommendations
- Communicate between visits if problems arise`,
      keyTerms: [
        { term: 'symptoms', definition: 'Changes in your body or how you feel that may indicate a health problem' },
        { term: 'medication list', definition: 'A complete list of all drugs, vitamins, and supplements you take' },
        { term: 'follow-up', definition: 'A return visit to check on your progress or continue treatment' },
        { term: 'chief complaint', definition: 'Your main reason for visiting the doctor' },
      ],
      analogies: [
        'Think of your doctor visit like a team meeting - you and your doctor are working together toward the same goal: your health.',
      ],
    },
    3: {
      level: 3,
      summary: 'Patient-physician communication requires structured preparation, accurate symptom characterization using clinical frameworks, and shared decision-making to optimize diagnostic accuracy and treatment adherence.',
      explanation: `## The Science of Medical Communication

Effective patient-physician communication directly impacts diagnostic accuracy, treatment outcomes, and patient satisfaction. Research shows that patients who communicate well with their doctors have better health outcomes.

## Structured Approach to Symptom Reporting

**Use the OLDCARTS Framework:**
| Element | Question to Answer |
|---------|-------------------|
| **O**nset | When did it start? |
| **L**ocation | Where is it? |
| **D**uration | How long does it last? |
| **C**haracter | What does it feel like? |
| **A**ggravating factors | What makes it worse? |
| **R**elieving factors | What makes it better? |
| **T**iming | When does it occur? |
| **S**everity | How bad is it (1-10)? |

**Example Application:**
Instead of: "I have headaches"
Say: "I've been having throbbing headaches on the right side of my head for two weeks. They last about 4 hours, get worse with bright light, and improve with ibuprofen. The pain is about 7 out of 10."

## Medication Communication

**Always Disclose:**
- Prescription medications (name, dose, frequency)
- Over-the-counter medications
- Vitamins and supplements
- Herbal remedies
- Medications prescribed by other doctors

**Medication Reconciliation Questions:**
- Are you taking medications exactly as prescribed?
- Have you missed any doses?
- Have you stopped any medications?
- Have you noticed any side effects?

## Shared Decision-Making

Modern healthcare emphasizes collaboration:

1. **Doctor provides:** Medical expertise, treatment options, risks/benefits
2. **Patient provides:** Values, preferences, lifestyle considerations
3. **Together:** Make informed decisions about care

**Questions That Enable Shared Decision-Making:**
- "What are my options?"
- "What are the pros and cons of each option?"
- "What would happen if I chose to wait and see?"
- "How do you think this fits with my situation?"

## Communication Barriers and Solutions

| Barrier | Solution |
|---------|----------|
| Time pressure | Prioritize concerns, arrive prepared |
| Medical jargon | Ask for explanations in plain language |
| Embarrassment | Remember confidentiality; doctors are non-judgmental |
| Fear | Voice concerns; ask about prognosis honestly |
| Cultural differences | Ask for interpreter if needed; express preferences |

## Documentation for Your Records

Keep a personal health journal including:
- Symptom diary (dates, severity, triggers)
- Questions before appointments
- Notes from appointments
- Medication changes
- Test results`,
      keyTerms: [
        { term: 'OLDCARTS', definition: 'Mnemonic for symptom characterization: Onset, Location, Duration, Character, Aggravating factors, Relieving factors, Timing, Severity' },
        { term: 'shared decision-making', definition: 'Collaborative process where patients and providers make healthcare decisions together' },
        { term: 'medication reconciliation', definition: 'Process of comparing all medications a patient is taking to ensure safety and accuracy' },
        { term: 'therapeutic alliance', definition: 'Collaborative relationship between patient and healthcare provider built on trust' },
      ],
      clinicalNotes: 'Studies show that patients who actively participate in medical discussions and ask questions have significantly better adherence to treatment plans and improved health outcomes.',
    },
    4: {
      level: 4,
      summary: 'Optimal patient-physician communication integrates health literacy assessment, motivational interviewing principles, and structured communication frameworks to enhance diagnostic accuracy, shared decision-making, and therapeutic alliance.',
      explanation: `## Communication as Clinical Intervention

Patient-physician communication is not merely procedural - it constitutes a therapeutic intervention with measurable outcomes. Meta-analyses demonstrate that effective communication correlates with:
- Improved diagnostic accuracy
- Enhanced treatment adherence
- Reduced malpractice claims
- Better patient satisfaction scores
- Improved clinical outcomes

## Advanced Symptom Communication Frameworks

### Comprehensive History Elements

**History of Present Illness (HPI) Components:**
A complete symptom description should address:
1. Chief complaint with duration
2. OLDCARTS characterization
3. Associated symptoms
4. Pertinent positives and negatives
5. Impact on function and quality of life
6. Previous evaluations and treatments
7. Patient's concerns and attributions

**Example of Comprehensive Presentation:**
"I've had progressive shortness of breath over three months. Initially it occurred only with climbing two flights of stairs, but now I notice it walking on flat ground. I also have a dry cough, especially at night. I haven't had fever, chest pain, or leg swelling. I quit smoking 10 years ago after 20 pack-years. My father had emphysema. I'm worried this might be something serious like cancer."

### Sensitive Topic Communication

**Discussing Stigmatized Topics:**
- Mental health symptoms
- Substance use
- Sexual health
- Domestic violence
- Financial barriers to care

**Approach:** Use normalizing language and open-ended questions
- "Many people experience..."
- "It's common for patients to have concerns about..."
- "What concerns do you have about...?"

## Navigating Complex Consultations

### Multiple Providers
When seeing multiple specialists:
- Maintain updated medication and problem lists
- Understand each provider's role
- Ensure communication between providers
- Designate a primary coordinator (usually PCP)

### Chronic Disease Management
- Partner with your care team
- Understand your disease trajectory
- Know your target metrics (A1C, blood pressure, etc.)
- Recognize warning signs requiring urgent contact

### Emergency Situations
Communicate efficiently:
- State the most critical symptom first
- Mention relevant medical history
- List current medications, especially blood thinners
- Identify allergies

## Health Literacy and Communication Barriers

### Assess Your Own Health Literacy
Can you:
- Read and understand prescription labels?
- Calculate medication doses?
- Interpret test results?
- Navigate insurance requirements?

### Strategies for Complex Information
- Ask for written materials
- Request drawings or diagrams
- Teach-back: Repeat instructions in your own words
- Bring an advocate to appointments
- Record conversations (with permission)

## Cultural Competency in Communication

### Patient Responsibilities
- Express cultural or religious preferences
- Request interpreters when needed
- Discuss traditional/alternative remedies
- Communicate preferred decision-making style (individual vs. family)

### Addressing Communication Breakdowns
If you feel unheard:
- "I don't feel we're on the same page about this"
- "I have concerns I don't think I've adequately expressed"
- "Could we revisit this decision?"
- Consider seeking a second opinion if needed`,
      keyTerms: [
        { term: 'therapeutic alliance', definition: 'Collaborative relationship between patient and provider characterized by mutual trust, agreed-upon goals, and shared understanding' },
        { term: 'teach-back method', definition: 'Communication technique where patients repeat information in their own words to verify understanding' },
        { term: 'pertinent positives/negatives', definition: 'Presence or absence of symptoms that help narrow the differential diagnosis' },
        { term: 'health literacy', definition: 'Capacity to obtain, process, and understand basic health information needed to make appropriate health decisions' },
        { term: 'motivational interviewing', definition: 'Patient-centered communication approach that enhances intrinsic motivation for behavior change' },
      ],
      clinicalNotes: 'Patients who demonstrate higher levels of activation (knowledge, skills, and confidence in self-management) have better outcomes across multiple chronic conditions. Communication skills training for patients can improve activation levels.',
    },
    5: {
      level: 5,
      summary: 'Expert patient-provider communication encompasses understanding consultation dynamics, navigating multi-disciplinary care, advocating within healthcare systems, and applying evidence-based communication strategies to optimize shared decision-making and health outcomes.',
      explanation: `## Evidence Base for Patient Communication

### Measurable Outcomes
Research demonstrates that communication quality predicts:
- **Diagnostic accuracy:** Better history-taking reduces diagnostic error by 20-30%
- **Adherence:** Effective communication improves medication adherence by 20%
- **Outcomes:** Collaborative communication associated with improved HbA1c, blood pressure control
- **Safety:** Clear communication reduces adverse events
- **Cost:** Improved communication reduces unnecessary testing and ED visits

### Communication and Diagnostic Error
Studies from the AHRQ Patient Safety Network show:
- 80% of diagnostic errors involve history-taking failures
- Patient-contributed factors include incomplete symptom disclosure and health literacy barriers
- Structured communication reduces these errors

## Advanced Communication Frameworks

### SPIKES Protocol Adaptation (For Receiving Difficult News)

While SPIKES was designed for clinicians delivering bad news, patients can prepare:

| Step | Patient Application |
|------|---------------------|
| **S**etting | Choose appropriate environment; bring support person |
| **P**erception | Understand what you already know/suspect |
| **I**nvitation | Decide how much information you want |
| **K**nowledge | Prepare for information; take notes |
| **E**motions | Acknowledge your feelings; take breaks if needed |
| **S**ummary | Clarify next steps; schedule follow-up |

### Navigating Diagnostic Uncertainty

When diagnosis is unclear:
- Understand the differential diagnosis
- Ask about probability of each condition
- Discuss watchful waiting vs. additional testing
- Establish clear follow-up triggers
- Request documentation of reasoning

**Key Questions:**
- "What are the most likely explanations?"
- "What are you most concerned about ruling out?"
- "What would change your thinking?"
- "When and why should I return?"

## Multi-Disciplinary Care Navigation

### Complex Care Coordination
Modern healthcare often involves:
- Primary care physician
- Multiple specialists
- Allied health professionals
- Care coordinators
- Insurance case managers

**Patient Strategies:**
- Maintain a personal health record (PHR)
- Designate a primary point of contact
- Request care conferences for complex decisions
- Use patient portals to track communications
- Document all recommendations and conflicts

### Managing Conflicting Recommendations
When specialists disagree:
- Seek clarification from each
- Request joint consultation or conference
- Involve PCP as coordinator
- Consider independent second opinion
- Make values-based decision with full information

## System-Level Advocacy

### Understanding Healthcare Quality
Patients can assess quality through:
- Hospital Compare (Medicare)
- Physician Compare
- Leapfrog Hospital Safety Grades
- State health department data
- Accreditation status (Joint Commission)

### Navigating Patient Safety Events

If you experience a medical error:
1. Document what happened
2. Request incident report
3. Ask for Root Cause Analysis (RCA) findings if applicable
4. Utilize patient advocacy/ombudsman services
5. Understand disclosure and apology policies
6. Know your rights regarding compensation

### Regulatory and Legal Frameworks
- HIPAA rights (access, amendment, accounting)
- EMTALA protections
- State patient bill of rights
- Informed consent requirements
- Advance directive recognition

## Communication in Specialized Contexts

### Telemedicine Communication
- Ensure technical setup (lighting, audio, camera)
- Have vital signs ready if possible
- Prepare medication and symptom lists
- Understand limitations of virtual exam
- Know when in-person visit is needed

### Hospital Communication
- Identify care team members and roles
- Request nurse present for physician rounds
- Use whiteboards for team communication
- Clarify plan daily
- Understand discharge criteria

### End-of-Life Communication
- Clarify goals of care
- Understand prognosis honestly
- Discuss quality vs. quantity of life
- Complete advance directives
- Designate healthcare proxy
- Consider palliative care consultation

## Building Long-Term Provider Relationships

### Therapeutic Continuity
- Maintain consistent primary care relationship
- Share personal context and values
- Communicate preferences for communication style
- Provide feedback on care experience
- Address concerns directly before changing providers`,
      keyTerms: [
        { term: 'patient activation', definition: 'Knowledge, skills, and confidence a patient has in managing their own health and healthcare' },
        { term: 'care coordination', definition: 'Deliberate organization of patient care activities between multiple participants to facilitate appropriate delivery of healthcare services' },
        { term: 'root cause analysis (RCA)', definition: 'Systematic process for identifying contributing factors to adverse events to prevent recurrence' },
        { term: 'patient safety event', definition: 'Event or circumstance that resulted or could result in unnecessary harm to a patient' },
        { term: 'therapeutic continuity', definition: 'Ongoing relationship between patient and provider over time that enhances care quality' },
        { term: 'diagnostic uncertainty', definition: 'Clinical situation where definitive diagnosis cannot be established, requiring probabilistic reasoning and watchful waiting' },
      ],
      clinicalNotes: `Key communication competencies for patients:
1. Structured symptom presentation using OLDCARTS or similar frameworks
2. Medication reconciliation at every visit
3. Teach-back confirmation of understanding
4. Documentation of discussions and decisions
5. Escalation pathways for concerns
6. Understanding of diagnostic uncertainty and follow-up triggers
7. Advance directive completion and communication
8. Health system navigation skills including appeals and advocacy`,
    },
  },

  media: [],

  citations: [
    {
      id: 'street-communication',
      type: 'article',
      title: 'How does communication heal? Pathways linking clinician-patient communication to health outcomes',
      authors: ['Street, R.L. Jr', 'Makoul, G.', 'Arora, N.K.', 'Epstein, R.M.'],
      source: 'Patient Education and Counseling',
      url: 'https://pubmed.ncbi.nlm.nih.gov/19027238/',
    },
    {
      id: 'ahrq-communication',
      type: 'website',
      title: 'Questions Are the Answer',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/patients-consumers/patient-involvement/ask-your-doctor/index.html',
    },
  ],

  crossReferences: [
    { targetId: 'concept-asking-questions-effectively', targetType: 'concept', relationship: 'related', label: 'Asking Questions Effectively' },
    { targetId: 'concept-health-literacy-basics', targetType: 'concept', relationship: 'related', label: 'Health Literacy Basics' },
    { targetId: 'concept-chief-complaint', targetType: 'concept', relationship: 'related', label: 'Chief Complaint' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['communication', 'patient-advocacy', 'healthcare-navigation'],
    clinicalRelevance: 'critical',
    keywords: ['doctor communication', 'patient-provider relationship', 'medical appointment', 'health communication'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default talkingToYourDoctor;
