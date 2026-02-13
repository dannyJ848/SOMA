/**
 * Goals of Care Conversations - Educational Content
 *
 * Comprehensive content on having meaningful conversations about
 * care goals with patients and families facing serious illness.
 */

import { EducationalContent } from '../../types';

export const goalsOfCareConversations: EducationalContent = {
  id: 'concept-goals-of-care',
  type: 'concept',
  name: 'Goals of Care Conversations',
  alternateNames: ['Care Planning Discussions', 'Goals of Care Meetings', 'Care Conferences'],

  levels: {
    1: {
      level: 1,
      summary: 'Goals of care conversations are talks between you, your family, and your healthcare team about what matters most to you and what kind of care you want.',
      explanation: `**What Are Goals of Care Conversations?**

When you have a serious illness, it is important to talk about what matters most to you. These conversations help your doctors and nurses understand:
- What is most important to you in life
- What you hope for from your medical care
- What you would not want to happen
- Who should make decisions if you cannot

**Why Are These Conversations Important?**

- They help your care team know what kind of care you want
- They make sure your family understands your wishes
- They help everyone work together to give you the best care
- They can reduce worry about the future

**What Happens During These Conversations?**

Your care team might ask you questions like:
- What do you understand about your illness?
- What are you hoping for?
- What are you worried about?
- If your health gets worse, what would be most important to you?
- Are there treatments you would or would not want?

**Who Is Involved?**

- You (the patient)
- Your family or close friends (if you want them there)
- Your doctors and nurses
- Sometimes a social worker or chaplain

**Tips for These Conversations**

- It is okay to ask questions
- It is okay to say you need time to think
- You can change your mind later
- Write down what is most important to you
- Bring someone you trust for support`,
      keyTerms: [
        { term: 'goals of care', definition: 'What you hope to get from your medical treatment and what matters most to you' },
        { term: 'care team', definition: 'All the doctors, nurses, and other helpers working together to take care of you' },
        { term: 'decision-maker', definition: 'The person who makes choices about your care if you cannot speak for yourself' },
      ],
      analogies: [
        'A goals of care conversation is like planning a road trip - you decide where you want to go and how you want to get there, and your healthcare team helps figure out the best route.',
        'Think of it like ordering at a restaurant - the doctor explains what is available, but you choose what you want based on what matters to you.',
      ],
      examples: [
        'A grandmother with heart disease might say her goal is to be well enough to attend her granddaughter\'s wedding next month.',
        'Someone might decide that being at home with family is more important than being in the hospital for treatments that might not help.',
      ],
    },
    2: {
      level: 2,
      summary: 'Goals of care conversations involve exploring patient values, understanding prognosis, and aligning medical care with what matters most to patients and families.',
      explanation: `## Understanding Goals of Care

### Purpose of Goals of Care Conversations

These discussions help:
- Clarify patient values and priorities
- Share information about illness and prognosis
- Align medical treatments with patient goals
- Reduce unwanted interventions
- Improve quality of life
- Support families in decision-making

### Key Elements of the Conversation

**1. Understanding the Current Situation**
- What does the patient know about their illness?
- What do they want to know?
- What is the medical team's understanding of prognosis?

**2. Exploring Values and Goals**
- What gives life meaning?
- What activities are most important?
- What are hopes and fears?
- What would be unacceptable to live with?

**3. Discussing Treatment Options**
- What treatments are available?
- What are the benefits and burdens?
- What is the likelihood of success?
- How do options align with goals?

**4. Making Decisions**
- What does the patient want to do?
- Who should be involved in decisions?
- What should happen if the situation changes?

### Common Goals Patients Express

| Goal | Example |
|------|---------|
| Cure or control disease | "I want to beat this cancer" |
| Extend life | "I want as much time as possible" |
| Maintain function | "I want to stay independent" |
| Comfort | "I want to be pain-free" |
| Quality time | "I want meaningful time with family" |
| Avoid suffering | "I don't want to suffer" |
| Die peacefully | "When the time comes, I want to go peacefully" |

### Timing of Conversations

Goals of care should be discussed:
- At diagnosis of serious illness
- When illness progresses
- After hospitalization or major health change
- When prognosis changes
- When treatments are no longer working
- Regularly as part of ongoing care

### Who Should Be Involved?

- Primary physician or oncologist
- Palliative care team
- Patient and chosen family/friends
- Interpreter if needed
- Social worker or chaplain as appropriate`,
      keyTerms: [
        { term: 'prognosis', definition: 'The expected course and outcome of an illness', pronunciation: 'prog-NOH-sis' },
        { term: 'values', definition: 'What matters most to a person and guides their decisions' },
        { term: 'shared decision-making', definition: 'A process where patients and providers work together to make healthcare decisions' },
        { term: 'surrogate', definition: 'A person designated to make healthcare decisions if the patient cannot', pronunciation: 'SUR-uh-git' },
      ],
      analogies: [
        'Goals of care conversations are like getting a GPS to work - you need to tell it your destination before it can find the best route.',
      ],
    },
    3: {
      level: 3,
      summary: 'Goals of care discussions require structured communication techniques, prognostic disclosure skills, and the ability to guide patients through complex medical decision-making while respecting autonomy and addressing emotional needs.',
      explanation: `## Goals of Care: Clinical Framework

### Communication Frameworks

**REMAP Protocol**
A structured approach for goals of care conversations:

1. **R - Reframe**: Why today's conversation is important
2. **E - Expect Emotion**: Respond to emotional cues
3. **M - Map out patient values**: Explore what matters most
4. **A - Align with values**: Match recommendations to values
5. **P - Plan**: Create a care plan that reflects goals

**NURSE Statements for Emotion**
- **N - Naming**: "It sounds like you're feeling scared"
- **U - Understanding**: "I can see why you would feel that way"
- **R - Respecting**: "You've been so strong through all of this"
- **S - Supporting**: "I will be with you every step of the way"
- **E - Exploring**: "Tell me more about what's worrying you"

### Prognostic Disclosure

**Best Practices**
- Ask permission: "Would it be helpful to talk about what to expect?"
- Use ranges, not specific timeframes
- Acknowledge uncertainty
- Frame in terms of function and quality of life
- Check understanding

**Prognostic Awareness Spectrum**
- Full awareness: Patient understands prognosis and implications
- Partial awareness: Knows serious but not extent
- Denial: Unable to acknowledge prognosis
- Variable: Understanding fluctuates with circumstances

### Addressing Common Challenges

**When Patient Wants "Everything Done"**
- Explore what "everything" means
- Understand underlying fears
- Clarify which treatments align with goals
- Address code status separately from other decisions

**When Family Disagrees with Patient**
- Support patient autonomy
- Explore family concerns
- Facilitate family meeting
- Clarify decisional capacity

**Prognostic Uncertainty**
- Acknowledge limits of prediction
- Use "hope for the best, prepare for the worst"
- Plan for multiple scenarios
- Focus on what is known

### Goals of Care Documentation

**Key Elements to Document**
- Patient understanding of illness
- Values and priorities discussed
- Goals of care identified
- Treatment preferences
- Code status
- Healthcare proxy information
- Next steps and follow-up plan

### Quality Metrics

- Proportion with documented goals of care
- Timing of conversation relative to death
- Alignment of care with documented goals
- Patient/family satisfaction with communication
- Code status discussions`,
      keyTerms: [
        { term: 'REMAP', definition: 'Communication framework for goals of care: Reframe, Expect emotion, Map values, Align, Plan' },
        { term: 'prognostic awareness', definition: 'Patient\'s understanding of their illness trajectory and expected outcomes' },
        { term: 'decisional capacity', definition: 'Ability to understand, appreciate, reason about, and express a healthcare decision' },
        { term: 'code status', definition: 'Documentation of patient wishes regarding CPR and resuscitation' },
      ],
      clinicalNotes: 'Goals of care conversations should be framed around patient values, not lists of interventions. Use "I wish" statements to express empathy while sharing difficult news. Document the conversation, not just the decision. Schedule follow-up as goals may change.',
    },
    4: {
      level: 4,
      summary: 'Advanced goals of care practice requires mastery of complex communication scenarios, management of decisional capacity issues, family dynamics navigation, and system-level implementation of goals of care processes.',
      explanation: `## Advanced Communication Techniques

### Complex Scenarios

**Surrogate Decision-Making**
When patients lack capacity:
- Identify appropriate surrogate (legal hierarchy)
- Guide toward substituted judgment, not surrogate preferences
- Use "if [patient] could see themselves now, what would they say?"
- Address surrogate guilt and burden

**Navigating Family Conflict**
- Identify the conflict: informational, values, relational
- Hold family meeting with clear structure
- Focus on patient values and wishes
- Manage strong emotions
- Consider palliative care team or ethics consultation

**Cultural Considerations**
- Family-centered vs. individual decision-making
- Truth-telling preferences
- Religious and spiritual beliefs about illness and death
- Use of interpreters for language and culture
- Avoid stereotyping; ask the patient

**Transitions in Goals of Care**
- Curative to palliative intent
- Active treatment to comfort-focused
- Home to hospice
- Manage grief inherent in transitions

### Decisional Capacity

**Assessment Components**
1. Understanding: Comprehends information
2. Appreciation: Applies to own situation
3. Reasoning: Can weigh options
4. Expression: Can communicate a choice

**Capacity is:**
- Decision-specific
- Time-variable
- Not equivalent to diagnosis
- Assessed by treating physician (not psychiatry unless complex)

**When Capacity is Uncertain**
- Optimize conditions (pain, delirium, etc.)
- Assess specific decision, not globally
- Consider psychiatry or ethics consultation
- Document assessment clearly

### System Implementation

**Goals of Care Programs**

*Triggered Discussions*
- EMR-based triggers (ICU admission, new metastatic cancer)
- Readmission within 30 days
- Performance status decline
- High-risk diagnoses

*Quality Improvement*
- Audit documentation rates
- Measure timing (e.g., within 24h of ICU)
- Track goal-concordant care
- Staff education and coaching

**Conversation Quality Metrics**
- Time spent in conversation
- Depth of values elicitation
- Emotional responsiveness
- Decision clarity achieved

### Documentation Standards

**Structured Note Elements**
1. Context (why discussion occurred)
2. Participants
3. Patient understanding of illness
4. Prognostic awareness
5. Values and goals elicited
6. Treatment preferences discussed
7. Code status
8. Proxy/surrogate identified
9. Plan and follow-up

**EHR Integration**
- Standardized templates
- Orders reflecting goals
- Visible alerts for existing documentation
- Portability across care settings

### Communication Training

**Simulation-Based Education**
- Standardized patients
- Role-play with feedback
- Video review
- Competency assessment

**Key Skills to Develop**
- Delivering serious news
- Responding to emotion
- Eliciting values
- Making recommendations
- Managing conflict`,
      keyTerms: [
        { term: 'substituted judgment', definition: 'Making decisions based on what the patient would have wanted, not what others think is best' },
        { term: 'surrogate decision-maker', definition: 'Person authorized to make healthcare decisions for an incapacitated patient' },
        { term: 'goal-concordant care', definition: 'Care that aligns with patient\'s stated goals, values, and preferences' },
        { term: 'triggered goals of care', definition: 'Prompts in the healthcare system that initiate goals discussions based on clinical criteria' },
      ],
      clinicalNotes: 'Master the art of "I wish" and "I worry" statements. Recognize that family conflict often stems from grief, guilt, or past relationships. Assess capacity carefully before invoking surrogate - many patients retain capacity. Build EMR-based systems to trigger and document goals of care.',
    },
    5: {
      level: 5,
      summary: 'Expert-level goals of care practice encompasses leadership in communication training, health system quality initiatives, research contributions, policy advocacy, and management of the most complex clinical and ethical scenarios.',
      explanation: `## Expert Communication Practice

### Complex Ethical Scenarios

**Requests for Non-Beneficial Treatment**
- Explore underlying values and fears
- Clarify meaning of "futility" (physiologic vs. value-based)
- Offer time-limited trials
- Consider ethics consultation
- Document discussions thoroughly
- Know institutional policies

**Medical Aid in Dying**
In jurisdictions where legal:
- Understand eligibility criteria
- Respond to inquiries non-judgmentally
- Explore reasons for request
- Optimize palliative care first
- Know referral processes
- Conscientious objection considerations

**Pediatric Goals of Care**
- Developmental considerations for assent
- Family-centered decision-making
- School and peer considerations
- Sibling support
- Perinatal palliative care

**Goals of Care for Dementia**
- Advance care planning while capacity intact
- Managing uncertainty of trajectory
- Surrogate decision-making principles
- POLST for end-stage dementia

### Research and Evidence

**Serious Illness Conversation Guide**
Ariadne Labs evidence-based framework:
1. Set up the conversation
2. Assess understanding and preferences
3. Share prognosis (if appropriate)
4. Explore key topics (fears, goals, tradeoffs)
5. Close and document

**Evidence Base**
- Randomized trials show improved goal-concordant care
- Better quality of life for patients and caregivers
- Reduced intensity of end-of-life care
- No difference in survival
- Reduced costs

**Outcome Measures**
- Goal Concordant Care Index
- FAMCARE Scale
- Quality of Communication Questionnaire
- End-of-Life Care Preferences

### Health System Leadership

**Building a Goals of Care Program**
1. Stakeholder engagement (leadership, clinicians, patients)
2. Process mapping and gap analysis
3. EMR integration and documentation standards
4. Training curriculum development
5. Quality metrics and reporting
6. Culture change strategies
7. Sustainability planning

**Training Program Design**
- Didactic foundations
- Skill-based workshops with role-play
- Simulated patient encounters
- Observed clinical encounters with feedback
- Ongoing coaching and booster sessions
- Train-the-trainer models

**Quality Metrics Portfolio**
- Process: Documentation rates, timing, completeness
- Outcome: Goal-concordant care, intensity of end-of-life care
- Experience: Patient and family satisfaction
- Balancing: Not postponing appropriate care

### Policy and Advocacy

**Systems Issues**
- Payment models that support time for conversations
- EMR interoperability for care preferences
- Scope of practice for facilitators (nurses, social workers)
- Community-based advance care planning

**National Initiatives**
- Serious Illness Care Program (Ariadne Labs)
- Respecting Choices
- The Conversation Project
- Hospice eligibility reform

### Workforce Development

**Who Conducts Goals of Care?**
- Primary palliative care: All clinicians, basic skills
- Specialty palliative care: Complex cases, training/support
- Trained facilitators: Nurses, social workers with specific training

**Competency Frameworks**
- AAHPM competencies
- Communication skills milestones
- Hospice Medical Director certification

### Future Directions

**Technology and Innovation**
- AI-assisted prognostication
- Decision aids and tools
- Telehealth for goals of care
- Patient-facing preparation resources

**Research Priorities**
- Implementation science
- Equity in goals of care access
- Surrogate decision-making support
- Communication training effectiveness
- EMR documentation optimization`,
      keyTerms: [
        { term: 'Serious Illness Conversation Guide', definition: 'Evidence-based communication framework developed by Ariadne Labs' },
        { term: 'goal-concordant care index', definition: 'Measure of alignment between documented goals and care received' },
        { term: 'primary palliative care', definition: 'Basic palliative care skills provided by all clinicians' },
        { term: 'time-limited trial', definition: 'Agreement to try an intervention for defined period with planned reassessment' },
      ],
      clinicalNotes: `Expert-level practice considerations:
1. Lead communication training programs using simulation and coaching
2. Build health system infrastructure for goals of care documentation and tracking
3. Develop quality metrics for goal-concordant care
4. Advocate for policies supporting time for conversations
5. Contribute to research on communication effectiveness
6. Mentor and develop next generation of communicators
7. Navigate most complex ethical scenarios with grace and wisdom`,
    },
  },

  media: [
    {
      id: 'goals-of-care-framework',
      type: 'diagram',
      filename: 'goals-of-care-framework.svg',
      title: 'Goals of Care Conversation Framework',
      description: 'Visual guide to conducting goals of care conversations',
    },
    {
      id: 'remap-protocol',
      type: 'diagram',
      filename: 'remap-protocol.svg',
      title: 'REMAP Communication Protocol',
      description: 'The REMAP framework for goals of care discussions',
    },
  ],

  citations: [
    {
      id: 'bernacki-serious-illness',
      type: 'article',
      title: 'Development of the Serious Illness Care Program',
      authors: ['Bernacki, R.', 'Block, S.D.'],
      source: 'BMJ Supportive & Palliative Care',
      url: 'https://doi.org/10.1136/bmjspcare-2015-000872',
    },
    {
      id: 'back-remap',
      type: 'article',
      title: 'REMAP: A Framework for Goals of Care Conversations',
      authors: ['Back, A.L.', 'Arnold, R.M.'],
      source: 'VitalTalk',
      url: 'https://www.vitaltalk.org/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-advance-directives', targetType: 'concept', relationship: 'related', label: 'Advance Directives' },
    { targetId: 'concept-palliative-vs-hospice', targetType: 'concept', relationship: 'related', label: 'Palliative vs Hospice Care' },
    { targetId: 'concept-quality-of-life', targetType: 'concept', relationship: 'related', label: 'Quality of Life Focus' },
  ],

  tags: {
    systems: ['palliative-care', 'communication'],
    topics: ['goals of care', 'shared decision-making', 'advance care planning', 'serious illness'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default goalsOfCareConversations;
