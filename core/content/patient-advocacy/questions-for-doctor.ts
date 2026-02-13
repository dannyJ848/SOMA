/**
 * Questions for Doctor - Comprehensive Educational Content
 *
 * Covers how to prepare for doctor visits, what questions to ask,
 * and how to communicate effectively with healthcare providers.
 */

import { EducationalContent } from '../types';

export const questionsForDoctor: EducationalContent = {
  id: 'concept-questions-for-doctor',
  type: 'concept',
  name: 'Questions for Doctor',
  alternateNames: ['Talking to Your Doctor', 'Doctor Visit Preparation', 'Patient-Provider Communication'],

  levels: {
    1: {
      level: 1,
      summary: 'It\'s important to ask questions when you go to the doctor so you understand how to stay healthy.',
      explanation: `When you visit the doctor, it's okay - and really good! - to ask questions. Doctors want to help you understand your health.

**Why Ask Questions?**

- You learn more about your body
- You understand why you take medicine
- You feel less worried or scared
- You can help take care of yourself better

**Good Questions to Ask:**

1. "Why do I need this medicine?"
2. "Will this hurt?"
3. "When will I feel better?"
4. "What should I do if I still feel sick?"
5. "Is there anything I shouldn't do while I'm getting better?"

**Tips for Talking to the Doctor:**

- It's okay to say if you don't understand something
- Ask the doctor to explain things again if needed
- You can bring a list of questions written down
- Tell the truth about how you feel - doctors are there to help, not judge

**Before Your Visit:**

- Think about what's been bothering you
- Remember when it started
- Think of questions you want to ask
- Have a parent or guardian help you remember things

Remember: There are no silly questions! Doctors want you to ask so they can help you better.`,
      keyTerms: [
        { term: 'symptoms', definition: 'Signs that show you might be sick, like a cough or fever' },
        { term: 'diagnosis', definition: 'What the doctor thinks is making you feel unwell' },
        { term: 'treatment', definition: 'What the doctor suggests to help you get better' },
        { term: 'side effects', definition: 'Other things that might happen when you take medicine' },
      ],
      analogies: [
        'Asking questions at the doctor is like asking questions in class - it helps you learn and shows you\'re paying attention.',
        'Preparing for a doctor visit is like preparing for a test - when you\'re ready, it goes better.',
      ],
      examples: [
        'If the doctor says you have an ear infection, you might ask "What caused it?" and "How can I stop it from happening again?"',
        'If you need to take medicine for a week, ask "What happens if I miss a day?"',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective communication with healthcare providers involves preparing questions, sharing accurate information, understanding diagnoses and treatments, and participating actively in healthcare decisions.',
      explanation: `## Preparing for Your Doctor Visit

### Before the Appointment

**Gather Information:**
- List current medications (including vitamins and supplements)
- Note any symptoms (when they started, how often, what makes them better or worse)
- Write down questions you want to ask
- Bring relevant medical records if seeing a new provider

**Key Questions to Consider:**

**About Your Condition:**
- What is my diagnosis?
- What caused this condition?
- Will it get better on its own?
- Is it contagious?

**About Treatment:**
- What are my treatment options?
- What are the benefits and risks of each option?
- What happens if I don't get treatment?
- Are there lifestyle changes that could help?

**About Medications:**
- What is this medication for?
- How do I take it and for how long?
- What are the common side effects?
- Are there foods or other medications to avoid?

**About Follow-Up:**
- Do I need to come back?
- What warning signs should I watch for?
- Who should I call if I have questions or problems?
- When should I expect to feel better?

### During the Appointment

**Communicate Clearly:**
- Describe symptoms accurately
- Be honest about lifestyle factors (diet, exercise, smoking, alcohol)
- Mention all medications, including over-the-counter drugs
- Share family medical history if relevant

**Ensure Understanding:**
- Take notes or bring someone to help remember
- Ask the doctor to repeat or explain anything unclear
- Use "teach-back": explain in your own words to confirm understanding
- Ask for written instructions or educational materials

### After the Appointment

- Review notes and instructions
- Fill prescriptions and understand how to take them
- Schedule follow-up appointments
- Call with questions that arise later`,
      keyTerms: [
        { term: 'teach-back method', definition: 'Confirming understanding by explaining what you learned in your own words' },
        { term: 'chief complaint', definition: 'The main reason for your doctor visit' },
        { term: 'medication reconciliation', definition: 'Reviewing all medications to ensure they are correct and safe together' },
        { term: 'follow-up', definition: 'A later appointment to check on your condition or treatment' },
      ],
      analogies: [
        'Preparing questions for the doctor is like preparing for a job interview - being prepared helps you get better results.',
        'The teach-back method is like explaining a recipe to someone - if you can explain it, you probably understand it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Patient-provider communication is a core competency in healthcare quality, involving shared decision-making, health literacy considerations, and evidence-based communication frameworks that improve outcomes and satisfaction.',
      explanation: `## Communication Frameworks

### Shared Decision-Making

**Core Elements:**
- Present evidence-based options
- Discuss benefits, risks, and uncertainties
- Explore patient values and preferences
- Reach collaborative decision

**SHARE Approach (AHRQ):**
1. **S**eek patient participation
2. **H**elp patients explore options
3. **A**ssess patient values
4. **R**each a decision together
5. **E**valuate the decision

### Health Literacy Integration

**Universal Precautions:**
- Assume all patients may have difficulty understanding
- Use plain language (avoid jargon)
- Limit information (3-5 key points)
- Use "chunk and check" method
- Provide written reinforcement

**Question Scripts:**
| Goal | Suggested Phrasing |
|------|-------------------|
| Understand diagnosis | "Can you explain my condition in everyday terms?" |
| Clarify treatment | "What are all my options, including doing nothing?" |
| Assess evidence | "How confident are you that this treatment will help?" |
| Understand risks | "What are the most common and most serious risks?" |
| Plan next steps | "What exactly should I do when I leave today?" |

### AHRQ Question Builder

**Before Your Visit:**
- Primary concern or goal
- Symptom history and timeline
- Medication list
- Insurance and cost concerns
- Family/support considerations

**Essential Questions by Visit Type:**

**New Diagnosis:**
- What is the condition and what causes it?
- How will it affect my daily life?
- What are all treatment options?
- What is the expected prognosis?

**Treatment Decision:**
- What are benefits, risks, and side effects?
- What happens if I choose not to treat?
- How will we know if treatment is working?
- What are the costs involved?

**Follow-Up:**
- Is my condition improving as expected?
- Should we adjust the treatment plan?
- What warning signs should prompt earlier contact?
- When should I return?

### Cultural Considerations

**Communication Adaptations:**
- Interpreter use for language barriers
- Family involvement preferences
- Cultural health beliefs and practices
- Health literacy assessment
- Trust-building approaches`,
      keyTerms: [
        { term: 'shared decision-making', definition: 'Collaborative process where clinicians and patients make healthcare decisions together' },
        { term: 'health literacy', definition: 'Ability to obtain, process, and understand basic health information for appropriate decisions' },
        { term: 'teach-back method', definition: 'Technique to confirm understanding by having patients explain information in their own words' },
        { term: 'chunk and check', definition: 'Communication technique of presenting small amounts of information and confirming understanding before continuing' },
      ],
      clinicalNotes: 'Use teach-back routinely to confirm patient understanding. Provide written after-visit summaries. Use decision aids for preference-sensitive decisions. Consider health literacy in all patient communication.',
    },
    4: {
      level: 4,
      summary: 'Patient-provider communication encompasses evidence-based communication skills, shared decision-making science, health literacy strategies, and measurement approaches that drive quality improvement in clinical encounters.',
      explanation: `## Evidence Base for Patient Communication

### Outcomes of Effective Communication

**Research Findings:**
- Improved medication adherence
- Better symptom management
- Higher patient satisfaction
- Reduced malpractice risk
- More appropriate healthcare utilization
- Better chronic disease outcomes

### Communication Skills Training

**Core Competencies:**
| Skill | Description | Training Approach |
|-------|-------------|-------------------|
| Relationship building | Rapport, empathy, trust | Standardized patients |
| Information gathering | Complete, accurate history | OSCEs |
| Explanation | Clear, tailored information | Video review |
| Shared decisions | Elicit values, discuss options | Decision aid use |
| Enabling behavior | Motivation, activation | MI techniques |

**Motivational Interviewing:**
- Express empathy
- Develop discrepancy
- Roll with resistance
- Support self-efficacy
- OARS technique (Open questions, Affirmations, Reflections, Summaries)

### Decision Aid Implementation

**Characteristics of Effective Aids:**
- Balanced presentation of options
- Quantitative risk information
- Values clarification exercises
- Patient testimonials (diverse)
- Plain language and visuals

**International Patient Decision Aid Standards (IPDAS):**
- Content criteria
- Development process criteria
- Effectiveness evaluation

### Health Literacy Assessment

**Screening Tools:**
- Single-item literacy screener (SILS)
- Newest Vital Sign (NVS)
- REALM (Rapid Estimate of Adult Literacy in Medicine)
- TOFHLA (Test of Functional Health Literacy in Adults)

**Universal Precautions Implementation:**
- Environmental assessment
- Verbal communication standards
- Written materials review (readability, design)
- Technology accessibility
- Staff training and culture

### Quality Measurement

**Patient Experience Surveys:**
- CAHPS (Consumer Assessment of Healthcare Providers and Systems)
- HCAHPS (Hospital CAHPS)
- Communication composite scores

**Measurement Domains:**
- Provider listened carefully
- Provider explained things clearly
- Provider spent enough time
- Provider showed respect
- Involvement in decisions

### Special Communication Contexts

**Goals of Care Conversations:**
- Serious illness communication
- Advance care planning
- Prognosis disclosure
- Treatment limitation discussions

**Delivering Bad News:**
- SPIKES protocol
- Preparation and setting
- Patient perception assessment
- Information sharing
- Emotional response support
- Strategy and summary`,
      keyTerms: [
        { term: 'OSCE', definition: 'Objective Structured Clinical Examination - standardized patient encounters used for assessment' },
        { term: 'motivational interviewing', definition: 'Patient-centered counseling approach to address ambivalence about behavior change' },
        { term: 'decision aid', definition: 'Tool that helps patients participate in decisions by providing information about options and clarifying values' },
        { term: 'SPIKES protocol', definition: 'Framework for delivering bad news: Setting, Perception, Invitation, Knowledge, Emotions, Strategy' },
      ],
      clinicalNotes: 'Incorporate communication skills training into professional development. Use standardized patients for practice. Implement decision aids for preference-sensitive conditions. Monitor CAHPS scores and address opportunities.',
    },
    5: {
      level: 5,
      summary: 'Patient-provider communication requires integration of communication science, shared decision-making evidence, health literacy research, quality measurement, and system design to create healthcare encounters that optimize information exchange, partnership, and outcomes.',
      explanation: `## Communication Science Integration

### Theoretical Frameworks

**Patient-Centered Communication:**
- Exploration of disease and illness experience
- Understanding whole person
- Finding common ground
- Incorporating prevention and health promotion
- Enhancing patient-physician relationship
- Being realistic about resources and time

**Health Behavior Theories:**
- Health Belief Model applications
- Self-efficacy and behavior change
- Stages of Change integration
- Social cognitive theory

### Advanced Shared Decision-Making

**Preference-Sensitive Decisions:**
| Condition | Decision Context | Key Trade-offs |
|-----------|------------------|----------------|
| Early prostate cancer | Treatment choice | Side effects vs. survival |
| Stable angina | PCI vs. medical management | Symptom relief vs. procedure risk |
| Atrial fibrillation | Anticoagulation | Stroke vs. bleeding risk |
| Breast cancer | Surgery extent | Cosmesis vs. local control |
| End-stage illness | ICU admission | Quality vs. quantity of life |

**Implementation Science:**
- Adoption determinants
- Implementation strategies
- Sustainability factors
- De-implementation of paternalistic approaches

### System-Level Optimization

**Communication Infrastructure:**
- Adequate visit time
- Interpreter services integration
- Technology support (portal messaging, telehealth)
- After-visit summary quality
- Care coordination communication

**Workflow Integration:**
- Pre-visit planning
- Agenda setting
- Decision aid deployment
- Electronic health record documentation
- Team-based communication

### Measurement and Improvement

**Comprehensive Assessment:**
| Domain | Measures | Data Source |
|--------|----------|-------------|
| Patient experience | CAHPS composites | Surveys |
| Communication behaviors | Roter Interaction Analysis | Audio/video |
| Decision quality | Decision conflict | Pre/post instruments |
| Health literacy response | Clear communication index | Audit |
| Outcomes | Adherence, outcomes | EHR, claims |

**Quality Improvement Approaches:**
- Plan-Do-Study-Act cycles
- Communication coaching
- Patient feedback integration
- Peer observation and feedback
- Standardized patient calibration

### Emerging Directions

**Technology-Enhanced Communication:**
- Patient-facing portals
- Secure messaging optimization
- Virtual visit communication
- AI-assisted communication support
- Digital decision aids

**Equity and Inclusion:**
- Implicit bias training
- Culturally responsive communication
- Language access optimization
- Disability accommodation
- LGBTQ+ affirming approaches

**Research Frontiers:**
- Precision communication (tailoring to individual)
- Team-based communication optimization
- Caregiver communication needs
- Digital communication modalities
- Implementation science applications`,
      keyTerms: [
        { term: 'preference-sensitive decisions', definition: 'Healthcare choices where the best option depends on patient values and preferences, not just clinical evidence' },
        { term: 'Roter Interaction Analysis System', definition: 'Validated method for coding and analyzing medical dialogue' },
        { term: 'decision conflict', definition: 'Uncertainty about which course of action to take when choice involves risk or trade-offs' },
        { term: 'implicit bias', definition: 'Unconscious attitudes or stereotypes that affect understanding, actions, and decisions' },
      ],
      clinicalNotes: `Implementation priorities:
1. Conduct communication skills assessment and targeted training
2. Implement decision aids for preference-sensitive conditions
3. Apply universal health literacy precautions
4. Monitor and respond to patient experience survey results
5. Ensure interpreter services are easily accessible
6. Create workflows that support agenda-setting and time management
7. Train teams in implicit bias recognition
8. Optimize EHR documentation to support communication continuity`,
    },
  },

  media: [
    {
      id: 'questions-checklist',
      type: 'diagram',
      filename: 'doctor-visit-questions.svg',
      title: 'Questions to Ask Your Doctor',
      description: 'Checklist of important questions for doctor visits',
    },
  ],

  citations: [
    {
      id: 'ahrq-questions-doctor',
      type: 'website',
      title: 'Questions to Ask Your Doctor',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/questions/index.html',
      accessedDate: '2026-01-24',
    },
    {
      id: 'nih-communication',
      type: 'website',
      title: 'Talking With Your Doctor',
      source: 'National Institutes of Health',
      url: 'https://www.nih.gov/institutes-nih/nih-office-director/office-communications-public-liaison/clear-communication',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-informed-consent', targetType: 'concept', relationship: 'related', label: 'Informed Consent' },
    { targetId: 'concept-patient-bill-of-rights', targetType: 'concept', relationship: 'related', label: 'Patient Bill of Rights' },
  ],

  tags: {
    systems: ['healthcare-system'],
    topics: ['patient-advocacy', 'communication', 'healthcare-quality', 'patient-education'],
    keywords: ['doctor visit', 'questions for doctor', 'patient communication', 'shared decision-making', 'health literacy'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default questionsForDoctor;
