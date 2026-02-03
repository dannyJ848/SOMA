/**
 * Goals of Care - Educational Content
 *
 * Comprehensive content on defining and documenting care goals
 * for patients with serious illness.
 */

import { EducationalContent } from '../../types';

export const goalsCare: EducationalContent = {
  id: 'concept-goals-care',
  type: 'concept',
  name: 'Goals of Care',
  alternateNames: ['Care Goals', 'Treatment Goals', 'Care Objectives'],

  levels: {
    1: {
      level: 1,
      summary: 'Goals of care are what you and your healthcare team decide is most important for your care based on what matters most to you.',
      explanation: `**What Are Goals of Care?**

Goals of care are the things that matter most to you about your medical treatment. They help your doctors and nurses know how to take care of you in the way that fits you best.

**Examples of Care Goals**

- "I want to be as comfortable as possible"
- "I want to live as long as possible, even if it means being in the hospital"
- "I want to be able to talk with my family"
- "I want to stay at home rather than go to the hospital"
- "I want to be able to walk and do things for myself"

**Why Goals of Care Matter**

- They help your medical team give you the right care
- They make sure treatments match what you want
- They help your family understand your wishes
- They can prevent treatments you do not want

**How Are Goals of Care Decided?**

1. You think about what matters most to you
2. You talk with your family
3. You talk with your doctors and nurses
4. Together, you write down your goals
5. Your care team makes a plan based on these goals

**Can Goals Change?**

Yes! Your goals of care can change:
- When your health changes
- When you learn more about your illness
- When your feelings about treatments change
- Whenever you want to discuss them

It is important to talk about goals of care regularly, not just once.`,
      keyTerms: [
        { term: 'goals of care', definition: 'What matters most to you about your medical care and treatment' },
        { term: 'care team', definition: 'The doctors, nurses, and other healthcare workers who help take care of you' },
        { term: 'treatment', definition: 'Medical care given to help with an illness or health problem' },
      ],
      analogies: [
        'Goals of care are like a destination on a trip - once you know where you want to go, you can plan the best way to get there.',
        'Think of goals of care like setting priorities in your life - they help decide what comes first when making choices.',
      ],
      examples: [
        'A person with advanced heart disease might say their goal is "stay comfortable at home" rather than "do everything possible to extend life."',
        'Someone recovering from surgery might have a goal of "being able to walk up stairs" which guides their physical therapy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Goals of care represent patient-centered priorities that guide medical decision-making and treatment planning through structured conversations about values and preferences.',
      explanation: `## Understanding Goals of Care

### Definition

Goals of care are the overarching aims that guide medical treatment decisions. They emerge from conversations about:
- What quality of life means to the patient
- What outcomes are most important
- What trade-offs are acceptable
- What makes life worth living

### Categories of Care Goals

**Life-Extension Goals**
- Prolong life as long as possible
- Pursue all potentially curative treatments
- Accept burdensome interventions for chance of longer life

**Quality of Life Goals**
- Maintain independence and function
- Preserve cognitive abilities
- Remain comfortable and free from suffering
- Stay at home rather than hospital

**Specific Functional Goals**
- Attend a special event (wedding, graduation)
- Complete a meaningful project
- Maintain ability to communicate
- Return to a favorite activity

### Goals vs. Treatments

It is important to distinguish goals from specific treatments:

| Goals | Treatments |
|-------|------------|
| "Stay comfortable" | Morphine, oxygen positioning |
| "Live as long as possible" | ICU admission, ventilation |
| "Be at home with family" | Home-based care, hospice |
| "Maintain independence" | Physical therapy, adaptive equipment |

### The Goals Conversation

Key elements of discussing goals:
1. Understand patient's illness understanding
2. Explore what matters most
3. Discuss prognosis realistically
4. Identify acceptable trade-offs
5. Document goals in medical record

### When to Discuss Goals

- At diagnosis of serious illness
- Before major treatments or procedures
- When health status changes significantly
- Before hospital discharge planning
- When treatments are not working
- Regularly as condition evolves

### Documenting Goals

Medical records should include:
- Patient's stated goals
- Understanding of illness
- Preferences for future care
- Code status
- Who is involved in decisions`,
      keyTerms: [
        { term: 'patient-centered', definition: 'Focused on the patient\'s values, preferences, and needs' },
        { term: 'prognosis', definition: 'The expected course and outcome of an illness', pronunciation: 'prog-NOH-sis' },
        { term: 'trade-offs', definition: 'Giving up one thing to get another - accepting burdens for benefits' },
        { term: 'code status', definition: 'Documentation about whether to perform CPR if heart stops' },
      ],
      analogies: [
        'Goals of care are like the foundation of a house - everything built upon them depends on this base.',
        'Setting goals of care is like planning a project - you need to know what success looks like before you start.',
      ],
    },
    3: {
      level: 3,
      summary: 'Goals of care discussions require structured communication approaches, alignment of treatment plans with patient values, documentation standards, and integration with advance care planning.',
      explanation: `## Goals of Care: Clinical Practice

### Communication Framework

**Setting Up the Conversation**
- Choose appropriate setting and participants
- Allocate adequate time (often 30+ minutes)
- Ensure patient has decision-making capacity
- Have family present if patient desires

**Key Questions to Explore**
- "What is your understanding of your illness?"
- "What are your goals if time is short?"
- "What are your biggest fears?"
- "What makes life worth living for you?"
- "What would you consider unacceptable quality of life?"
- "What are you hoping for?"

### Goal Elicitation Framework

**SPIKES for Goals**
1. **S**etting: Arrange appropriate environment
2. **P**erception: Assess patient understanding
3. **I**nvitation: Ask permission to discuss goals
4. **K**nowledge: Share medical information
5. **E**mpathy: Respond to emotions
6. **S**trategy: Make care plan aligned with goals

### Categories of Goals

**Medical Care Goals**
- Curative/life-prolonging
- Disease-focused but not curative
- Symptom management/comfort-focused
- Hospital avoidance
- Home death

**Functional Goals**
- Maintain specific activities
- Preserve independence
- Communication ability
- Cognitive preservation

**Existential Goals**
- Life completion
- Relationship repair
- Spiritual preparation
- Legacy creation

### Documentation Standards

**Goals Documentation Should Include**
- Patient articulated goals
- Prognostic understanding
- Treatment preferences aligned with goals
- Interventions patient would/wouldn't want
- Limits on interventions
- Plan for reassessment

**Electronic Health Record Elements**
- Structured goals field
- Free text for nuance
- Orders reflecting goals
- Visible to all care team members

### Aligning Treatment with Goals

**Matching Interventions to Goals**

| Goal | Appropriate Interventions |
|------|---------------------------|
| Life extension | Full ICU care, ventilation, dialysis |
| Comfort focus | Symptom management, avoid hospitalization |
| Function maintenance | Rehab, therapy, adaptive equipment |
| Home focus | Home health, home IV, avoid admission unless needed |

### Common Challenges

**Unclear Goals**
- Explore values further
- Present scenarios
- Use decision aids
- Time-limited trials

**Conflicting Goals**
- Different family members
- Patient vs. family wishes
- Short-term vs. long-term goals
- Quality vs. quantity priorities

**Evolving Goals**
- Regular reassessment
- Document changes
- Update care plan
- Realign treatments`,
      keyTerms: [
        { term: 'decision-making capacity', definition: 'Ability to understand, appreciate, reason, and communicate about healthcare decisions' },
        { term: 'time-limited trial', definition: 'Agreement to try treatment for defined period with plan to reassess' },
        { term: 'prognostic understanding', definition: 'Patient\'s grasp of their illness trajectory and expected outcome' },
        { term: 'structured goals field', definition: 'Designated section in EHR for documenting care goals' },
      ],
      clinicalNotes: 'Goals conversations are ongoing processes, not one-time events. Use SPIKES or similar frameworks. Always document goals explicitly - do not assume they are understood. Reassess goals regularly and after any significant change in condition. Align orders with documented goals.',
    },
    4: {
      level: 4,
      summary: 'Advanced goals of care practice involves managing complex family dynamics, navigating uncertainty, reconciling conflicting goals, leading interdisciplinary teams, and implementing system-level approaches to goal-concordant care.',
      explanation: `## Advanced Goals of Care Practice

### Complex Clinical Scenarios

**Conflicting Family Wishes**
- Identify source of conflict (values, information, grief)
- Hold family conference with clear agenda
- Focus on patient values and known wishes
- Consider ethics consultation
- Document discussions thoroughly

**Goals That Seem Unrealistic**
- Explore underlying values, not just requests
- Negotiate modified goals
- Time-limited trials with clear endpoints
- Evidence-based prognosis communication
- Avoid "non-beneficial treatment" where possible

**Patient Without Capacity or Clear Goals**
- Review existing advance directives
- Consult designated healthcare proxy
- Apply substituted judgment standard
- Use best interests standard if values unknown
- Consider default surrogate hierarchy

### Prognostic Communication

**Delivering Difficult Prognosis**
- Ask permission to discuss
- Acknowledge uncertainty
- Use ranges, not specific predictions
- Frame in functional terms
- Check understanding
- Allow emotional response

**Prognostic Awareness**
- Full awareness: Understands and accepts prognosis
- Partial awareness: Knows serious but not extent
- Unaware: Does not grasp seriousness
- Fluctuating: Awareness varies over time

**When Prognosis is Unclear**
- Share what is known
- Acknowledge uncertainty honestly
- Plan for multiple scenarios
- Focus on what matters regardless of timeframe

### Interdisciplinary Approach

**Team Roles in Goals Work**
- Physicians: Medical information, prognosis
- Nurses: Day-to-day symptom and functional assessment
- Social work: Family dynamics, resources, goals facilitation
- Chaplaincy: Spiritual/existential support
- Therapists: Functional assessment and rehabilitation potential

**Team Communication**
- Regular goals discussions
- Consistent messaging to patient/family
- Documentation in shared EHR
- Team conferences for complex cases

### System Implementation

**Triggers for Goals Conversations**
- EMR-based prompts for:
  - ICU admission
  - New metastatic cancer diagnosis
  - Hospital readmission within 30 days
  - Progressive decline in function
  - Persistent symptoms despite treatment

**Quality Metrics**
- Goals documented within 48h of admission
- Goals updated with status changes
- Goal-concordant care at end of life
- Family satisfaction with communication
- Time in goals discussions

**Standardized Documentation**
- Goals template in EHR
- Orders linked to goals
- Goals visible across settings
- Reassessment prompts

### Special Populations

**Dementia**
- Discuss goals while capacity intact
- Focus on quality of life, not just length
- Consider feeding tube decisions carefully
- Anticipate loss of decision-making capacity

**End-Stage Organ Failure**
- Discuss before crisis (ICU, intubation)
- Address dialysis goals for kidney failure
- Discuss device decisions for heart failure
- Plan for acute exacerbations

**Pediatrics**
- Involve age-appropriate patient
- Family-centered decision-making
- Developmental considerations
- School and peer issues

**Serious Mental Illness**
- Assess capacity carefully
- Consider psychiatric advance directives
- Balance symptom management with autonomy
- May involve guardianship`,
      keyTerms: [
        { term: 'substituted judgment', definition: 'Making decisions based on what the patient would want, not what others think is best' },
        { term: 'best interests standard', definition: 'Making decisions based on what would benefit the patient most when their wishes are unknown' },
        { term: 'default surrogate hierarchy', definition: 'Legal order of who can make decisions if no proxy named' },
        { term: 'goal-concordant care', definition: 'Medical care aligned with patient\'s stated goals and values' },
      ],
      clinicalNotes: 'Goals work is ongoing, not one-time. Document goals explicitly and link to treatment plans. Support surrogates carrying heavy emotional burden. Use team approach - goals conversations should not fall solely on physicians. Recognize prognostic uncertainty and communicate it honestly.',
    },
    5: {
      level: 5,
      summary: 'Expert-level goals of care practice encompasses leadership in communication training, research on goal-concordant care outcomes, health system design, policy advocacy, and advancing the evidence base for serious illness care.',
      explanation: `## Expert Practice in Goals of Care

### Research and Evidence

**Goal-Concordant Care Measurement**
- Chart review methods
- Caregiver reports
- clinician assessment
- Patient-reported (rare, due to death)

**Impact of Goals Discussions**
- Randomized trials show:
  - Increased goal-concordant care
  - Reduced non-beneficial treatments
  - Improved quality of life
  - Better bereavement outcomes
  - No impact on survival
  - Possible cost reduction

**Outcome Measures**
- FAMCARE Scale
- Quality of End-of-Life Care (QEOLC)
- Goal-Concordant Care Index
- Caregiver Satisfaction

**Gaps in Evidence**
- Optimal timing of conversations
- Best conversation frameworks
- Facilitator effectiveness
- Longitudinal impact
- Cost-effectiveness

### Health System Leadership

**Building a Goals Program**
1. Assess current state (audit, stakeholder input)
2. Design intervention (EMR, training, processes)
3. Implement with pilot testing
4. Measure outcomes
5. Scale and sustain
6. Continuous improvement

**Quality Improvement**
- PDSA cycles
- Audit and feedback
- Benchmarking
- Best practice dissemination

**EMR Optimization**
- Structured data entry
- Decision support
- Visibility across settings
- Interoperability challenges
- Patient access to goals documentation

### Communication Training

**Training Methodologies**
- Didactic content
- Skills practice with role-play
- Simulation with standardized patients
- Real-patient observation
- Coaching and feedback
- Train-the-trainer models

**Competency Assessment**
- Direct observation
- Standardized patient assessment
- Patient/family feedback
- Self-assessment
- 360-degree feedback

**Sustaining Skills**
- Booster sessions
- Coaching programs
- Communities of practice
- Ongoing feedback

### Policy and Advocacy

**Payment Reform**
- Current billing for time-limited conversations
- Value-based payment incentives
- ACP billing codes (99497, 99498)
- Bundled payments including goals work

**Regulatory Considerations**
- CMS quality measures
- Joint Commission standards
- State regulations
- Documentation requirements

**Access and Equity**
- Disparities in goals discussions
- Language access
- Cultural tailoring
- Community engagement
- Underserved populations

### Future Directions

**Technology**
- Video recording of conversations
- AI-assisted documentation
- Patient portals for goals
- Virtual reality for training
- Telehealth for remote goals discussions

**Research Priorities**
- Implementation science
- Comparative effectiveness of approaches
- Equity in access
- Surrogate decision support
- Pediatric goals of care
- Measurement development

**Integration with Other Initiatives**
- Serious Illness Care Program
- Respecting Choices
- The Conversation Project
- VitalTalk

### Ethical Considerations

**Resource Allocation**
- Goals of care in context of limited resources
- Cost-effectiveness considerations
- Justice implications
- Access to expensive life-prolonging treatments

**Medical Futility**
- Definition challenges
- Process vs. outcome definitions
- Value-laden language
- Ethics committee role
- Fair process essential

**Clinician Moral Distress**
- When providing care not aligned with goals
- When goals unclear
- System constraints
- Support for clinicians

### Global Perspectives

**Variations in Goals Communication**
- Cultural differences in truth-telling
- Family-centered vs. individual decision-making
- Religious influences
- Healthcare system differences

**Cross-Cultural Adaptation**
- Framework translation
- Cultural competence
- Language access
- Community engagement`,
      keyTerms: [
        { term: 'PDSA cycle', definition: 'Plan-Do-Study-Act methodology for quality improvement' },
        { term: 'ACP billing codes', definition: 'Medicare codes 99497/99498 for advance care planning discussions' },
        { term: 'medical futility', definition: 'Treatment that cannot achieve the patient\'s goals' },
        { term: 'moral distress', definition: 'Psychological distress when constraints prevent doing what is right' },
      ],
      clinicalNotes: `Expert-level practice:
1. Lead serious illness care programs
2. Train clinicians in goals conversations
3. Research to advance evidence base
4. Advocate for payment and policy reforms
5. Address disparities in access and quality
6. Develop and implement quality metrics
7. Support clinician well-being in this demanding work`,
    },
  },

  media: [
    {
      id: 'goals-framework',
      type: 'diagram',
      filename: 'goals-of-care-framework.svg',
      title: 'Goals of Care Framework',
      description: 'Structured approach to goals of care conversations',
    },
  ],

  citations: [
    {
      id: 'bernacki-serious-illness',
      type: 'article',
      title: 'Serious Illness Care Program: Randomized Trial',
      authors: ['Bernacki, R.', 'Block, S.D.'],
      source: 'BMJ Supportive & Palliative Care',
      url: 'https://doi.org/10.1136/bmjspcare-2015-000872',
    },
    {
      id: 'you-communication',
      type: 'article',
      title: 'Communication About Serious Illness Care Goals',
      authors: ['You, J.J.', 'Singer, P.A.'],
      source: 'JAMA',
      url: 'https://jamanetwork.com/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-goals-of-care', targetType: 'concept', relationship: 'related', label: 'Goals of Care Conversations' },
    { targetId: 'concept-advance-directives', targetType: 'concept', relationship: 'related', label: 'Advance Directives' },
    { targetId: 'concept-palliative-vs-hospice', targetType: 'concept', relationship: 'related', label: 'Palliative vs Hospice' },
  ],

  tags: {
    systems: ['palliative-care', 'communication'],
    topics: ['goals of care', 'shared decision-making', 'advance care planning', 'communication'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default goalsCare;
