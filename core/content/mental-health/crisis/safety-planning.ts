/**
 * Safety Planning - Patient Education Content
 */

import { EducationalContent } from '../../types';

export const safetyPlanningContent: EducationalContent = {
  id: 'mental-health-safety-planning',
  type: 'topic',
  name: 'Safety Planning',
  alternateNames: ['Safety Plan', 'Crisis Plan', 'Suicide Safety Plan'],

  levels: {
    1: {
      level: 1,
      summary: 'A safety plan is a personal guide for coping with suicidal thoughts. It lists warning signs, coping strategies, and people to contact when you need help.',
      explanation: `**What Is a Safety Plan?**

A safety plan is a written list of steps you can take when you have suicidal thoughts or feel a crisis coming on. You create it when you are feeling calm, so it is ready when you need it.

**The Six Steps:**

**Step 1: Warning Signs**
What thoughts, feelings, or situations tell you a crisis may be developing?
- Example: "When I start thinking I'm a burden to everyone"
- Example: "When I stop sleeping for several nights"

**Step 2: Internal Coping Strategies**
Things you can do on your own to take your mind off problems:
- Going for a walk
- Listening to music
- Taking a shower
- Deep breathing exercises
- Playing with a pet

**Step 3: People and Places That Provide Distraction**
Social contacts and places that help distract from problems:
- Going to a coffee shop
- Calling a friend to chat (not about the crisis)
- Going to the gym
- Visiting a library or park

**Step 4: People I Can Ask for Help**
People you can tell you are struggling and ask for support:
- Family members
- Friends
- Neighbors
- Clergy

**Step 5: Professionals and Agencies to Contact**
- Therapist's name and number
- Psychiatrist's name and number
- 988 Suicide & Crisis Lifeline (call or text)
- Crisis Text Line: Text HOME to 741741
- Local emergency room

**Step 6: Making the Environment Safe**
Reducing access to things that could be used for self-harm:
- Giving medications to someone else to hold
- Removing or securing firearms
- Removing sharp objects

**Using Your Safety Plan:**

- Keep it where you can find it (phone, wallet, refrigerator)
- Go through the steps in order
- If one step does not work, move to the next
- Review and update it regularly
- Share it with people you trust`,
      keyTerms: [
        { term: 'safety plan', definition: 'A written plan of steps to take during a suicidal crisis' },
        { term: 'warning signs', definition: 'Thoughts or feelings that signal a crisis may be coming' },
        { term: 'coping strategies', definition: 'Things you can do to feel better or distract yourself' },
        { term: 'means restriction', definition: 'Reducing access to things that could be used for self-harm' },
      ],
      analogies: [
        'A safety plan is like a fire escape plan - you make it before you need it so you know what to do in an emergency.',
        'Going through your safety plan steps is like climbing a ladder - if one rung does not hold, move to the next one.',
      ],
      examples: [
        'Someone notices they are isolating (warning sign) and goes for a walk listening to upbeat music (coping strategy).',
        'A person calls a friend to chat about a TV show (distraction) rather than sitting alone with their thoughts.',
        'When coping strategies are not enough, someone texts their therapist or calls 988.',
      ],
    },
    2: {
      level: 2,
      summary: 'The Stanley-Brown Safety Planning Intervention is an evidence-based brief intervention that reduces suicidal behavior. It includes six steps: warning signs, internal coping, social distraction, social support, professional resources, and means restriction.',
      explanation: `**Stanley-Brown Safety Planning Intervention:**

This is a specific, evidence-based safety planning approach with research showing it reduces suicide attempts and ED visits.

**Step 1: Warning Signs**

Identify personal indicators that a crisis may be developing:
- Thoughts: "I'm worthless," "No one cares"
- Feelings: Overwhelming sadness, numbness, rage
- Behaviors: Isolating, not eating, drinking more
- Situations: Being alone, anniversary dates, after conflicts

*Why It Matters:* Early recognition allows intervention before crisis escalates.

**Step 2: Internal Coping Strategies**

Things you can do alone without contacting anyone:
- Physical activity (walking, exercise)
- Relaxation (breathing, meditation)
- Distraction (TV, games, hobbies)
- Self-soothing (shower, music, aromatherapy)
- Grounding techniques

*Key Point:* Have multiple options that work for you.

**Step 3: People and Social Settings for Distraction**

Contact with others or places to go - NOT to discuss the crisis:
- Casual social contacts
- Public places
- Activities with others

*Purpose:* Social contact and change of environment can interrupt crisis.

**Step 4: People I Can Ask for Help**

People you can tell you are struggling:
- Family members (list specific names)
- Friends (list specific names)
- Others you trust

*Include:* Name, phone number, how they can help.

**Step 5: Professionals and Agencies**

Professional resources to contact:
- Primary clinician/therapist
- Psychiatrist
- 988 Suicide & Crisis Lifeline
- Crisis Text Line (text HOME to 741741)
- Local crisis services
- Emergency services (911, ED)

*Include:* Names, numbers, addresses.

**Step 6: Making the Environment Safe**

Lethal means counseling:
- Discuss access to firearms
- Secure medications
- Remove or restrict access to means
- Involve trusted others in securing environment

*Evidence:* Means restriction significantly reduces suicide.

**Implementation:**

- Complete collaboratively (not assigned as homework)
- Review and update regularly
- Keep accessible (phone, wallet, posted)
- Share with support people
- Practice using it`,
      keyTerms: [
        { term: 'Stanley-Brown', definition: 'The evidence-based safety planning intervention' },
        { term: 'lethal means counseling', definition: 'Discussion of reducing access to methods of suicide' },
        { term: 'grounding techniques', definition: 'Methods to stay connected to the present moment' },
        { term: 'brief intervention', definition: 'A short-term, focused therapeutic approach' },
      ],
      analogies: [
        'Steps 1-3 are like using a fire extinguisher before calling the fire department.',
        'The safety plan is a ladder with six rungs - keep climbing until you are safe.',
      ],
    },
    3: {
      level: 3,
      summary: 'Safety Planning Intervention (SPI) is a brief evidence-based intervention reducing suicide attempts by 50%. Collaborative completion is key. Each step has therapeutic rationale. Integration with treatment and follow-up enhances effectiveness.',
      explanation: `**Evidence Base:**

*Research Findings:*
- Randomized controlled trial showed 50% reduction in suicide attempts
- Reduces ED visits for suicidal ideation
- Works across settings (ED, outpatient, inpatient)
- Brief intervention (20-45 minutes)
- Can be delivered by various professionals

*Study Population:*
- Adults with suicidal ideation or attempt
- ED-based studies
- Military populations
- Varied settings

**Therapeutic Process:**

*Collaborative Development:*
- Clinician and patient work together
- Not homework or form to fill out
- Discussion enhances engagement
- Personalizes each step

*Therapeutic Relationship:*
- Empathic engagement
- Non-judgmental
- Collaborative stance
- Instills hope

**Step-by-Step Rationale:**

*Step 1 - Warning Signs:*
- Increases self-awareness
- Enables early intervention
- Identifies personal triggers
- Personalized to individual

*Step 2 - Internal Coping:*
- Self-efficacy building
- Delay strategies
- Tolerating distress
- Skills already possessed

*Step 3 - Social Distraction:*
- Reduces isolation
- Environmental change
- Natural supports
- Low barrier contacts

*Step 4 - Social Support:*
- Identifying trusted others
- Reducing isolation
- Specific people and contact info
- Different from Step 3 (here, discussing crisis is okay)

*Step 5 - Professional Resources:*
- Crisis services access
- Continuity of care
- Professional backup
- 24/7 options

*Step 6 - Means Restriction:*
- Evidence-based suicide prevention
- Collaborative discussion
- Involves support network
- Reduces impulsive access

**Integration with Care:**

*ED Implementation:*
- Complete before discharge
- Warm handoff to follow-up
- Copy to outpatient provider
- Caring contacts after

*Outpatient Use:*
- Review at each visit
- Update as needed
- Crisis management tool
- Part of ongoing treatment

**Training:**

*Who Can Deliver:*
- Mental health professionals
- Physicians
- Nurses
- Crisis counselors
- Trained paraprofessionals

*Training Requirements:*
- Specific training recommended
- Fidelity matters
- Collaborative approach essential`,
      keyTerms: [
        { term: 'SPI', definition: 'Safety Planning Intervention - the evidence-based protocol' },
        { term: 'collaborative', definition: 'Working together rather than prescribing' },
        { term: 'warm handoff', definition: 'Direct connection to next provider' },
        { term: 'fidelity', definition: 'Delivering intervention as intended' },
      ],
      clinicalNotes: 'Complete safety plan collaboratively, not as homework. Review and update at subsequent visits. Means restriction discussion is essential. Ensure follow-up contact and connection to care. Training improves effectiveness.',
    },
    4: {
      level: 4,
      summary: 'Safety planning mechanisms involve crisis response interruption, cognitive restructuring, social support activation, and means restriction. Implementation requires training, system support, and follow-up integration. Adaptations exist for specific populations.',
      explanation: `**Mechanisms of Action:**

*Crisis Interruption:*
- Early warning recognition
- Delay between impulse and action
- Alternative responses
- Problem-solving activation

*Cognitive Mechanisms:*
- Shifting focus from suicidal thoughts
- Identifying reasons for living
- Building self-efficacy
- Hope instillation

*Social Connection:*
- Reducing isolation
- Activating support
- Normalizing help-seeking
- Social regulation of emotion

*Behavioral Activation:*
- Engagement in positive activities
- Environmental change
- Breaking rumination cycles

**Lethal Means Counseling:**

*Evidence:*
- Reduction in firearm access reduces suicide
- Especially important given impulsivity
- Time between decision and attempt often <10 minutes
- Surviving attempt associated with not dying by suicide later

*Approach:*
- Non-judgmental discussion
- Explore access to all means
- Collaborative problem-solving
- Involve trusted others
- Temporary storage options

*Firearms Specifically:*
- Most lethal method
- Ask about access
- Options: Remove, lock, store elsewhere
- Involve family member
- Respect rights while ensuring safety

**Special Populations:**

*Adolescents:*
- Parent/guardian involvement
- Developmentally appropriate
- School coordination
- Digital access (apps)

*Older Adults:*
- May have different warning signs
- Social isolation consideration
- Medical comorbidity
- Caregiver involvement

*Veterans:*
- VA safety planning initiatives
- Firearm access discussion
- Military culture awareness
- Peer support

*Chronic Suicidality:*
- Long-term use of safety plan
- Integration with DBT
- Building a life worth living focus
- Reduce crisis-oriented responses

**System Implementation:**

*ED Implementation:*
- Universal screening (C-SSRS)
- Safety planning for positive screen
- Means counseling
- Follow-up contact
- Caring contacts protocol

*Outpatient:*
- Develop with new patients at risk
- Review regularly
- Update with changes
- Share with support system

*Inpatient:*
- Complete before discharge
- Review and personalize
- Ensure continuity
- Coordinate with outpatient

**Quality Improvement:**

*Metrics:*
- Completion rates
- Fidelity to protocol
- Patient satisfaction
- Outcome tracking

*Training:*
- Initial training
- Ongoing supervision
- Fidelity checks
- Booster training`,
      keyTerms: [
        { term: 'lethal means counseling', definition: 'Evidence-based discussion of reducing access to suicide methods' },
        { term: 'temporal restriction', definition: 'Putting time and space between impulse and means' },
        { term: 'universal screening', definition: 'Screening all patients for suicide risk' },
        { term: 'caring contacts', definition: 'Brief follow-up messages shown to reduce suicide' },
      ],
      clinicalNotes: 'Lethal means counseling is essential - especially discuss firearms. Safety planning is most effective when done collaboratively. System implementation improves reach. Follow-up contact post-discharge critical. Adapt for population while maintaining core elements.',
    },
    5: {
      level: 5,
      summary: 'Contemporary safety planning research explores digital delivery, optimization of components, integration with other interventions, and implementation science. Technology-enhanced approaches and personalization aim to improve effectiveness and reach.',
      explanation: `**Research Developments:**

*Component Analysis:*
- Which elements most effective?
- Optimal ordering
- Minimum effective dose
- Personalization factors

*Comparative Effectiveness:*
- SPI vs other interventions
- Combinations (SPI + caring contacts)
- Cost-effectiveness
- Implementation contexts

**Technology-Enhanced Safety Planning:**

*Apps:*
- MY3 app
- Safety Plan app
- Integration with smartphones
- Accessibility features
- Privacy considerations

*Digital Features:*
- Automatic reminders
- Location-based suggestions
- Emergency contact integration
- Crisis line connection
- Mood tracking integration

*Research Questions:*
- Digital vs paper equivalence
- Engagement patterns
- Optimal features
- Privacy and safety

**Implementation Science:**

*Adoption:*
- Training programs
- System integration
- Workflow incorporation
- EMR documentation

*Sustainability:*
- Ongoing training
- Supervision models
- Quality assurance
- Funding mechanisms

*Scaling:*
- National initiatives (Zero Suicide)
- Health system adoption
- Community settings
- Global adaptation

**Personalization:**

*Individual Tailoring:*
- Cultural adaptation
- Developmental stage
- Cognitive capacity
- Personal preferences

*Adaptive Approaches:*
- Machine learning for personalization
- Real-time adjustment
- Predictive analytics
- Research stage

**Integration with Other Interventions:**

*With Psychotherapy:*
- DBT safety planning
- CBT for suicide prevention
- CAMS integration

*With Pharmacotherapy:*
- Ketamine and safety planning
- Medication optimization
- Rapid-acting treatments

*With System Interventions:*
- Caring contacts
- Warm handoff
- Follow-up protocols
- Care transitions

**Future Directions:**

*Research Priorities:*
- Mechanism studies
- Optimization trials
- Technology evaluation
- Implementation research

*Practice Development:*
- Training innovation
- Quality metrics
- System redesign
- Equity focus

**Global Perspectives:**

*Adaptation:*
- Cultural adaptation
- Resource-limited settings
- Different crisis systems
- Language considerations

*WHO Guidance:*
- Brief interventions for suicide
- Task-shifting approaches
- Scalable models`,
      keyTerms: [
        { term: 'MY3', definition: 'Smartphone app for safety planning' },
        { term: 'adaptive intervention', definition: 'Treatment that adjusts based on individual response' },
        { term: 'task-shifting', definition: 'Training non-specialists to deliver interventions' },
        { term: 'Zero Suicide', definition: 'Health system approach to suicide prevention' },
      ],
      clinicalNotes: `Current best practices:
- Collaborative completion essential
- Lethal means counseling included
- Follow-up contact enhances effectiveness
- Review and update regularly

Emerging approaches:
- Digital safety planning tools
- Integration with other interventions
- System-level implementation
- Personalization research

Key challenges:
- Ensuring fidelity
- Maintaining engagement
- Long-term use
- Adapting for diverse populations`,
    },
  },

  media: [],

  citations: [
    {
      id: 'stanley-brown-spi',
      type: 'article',
      title: 'Safety Planning Intervention: A Brief Intervention to Mitigate Suicide Risk',
      authors: ['Stanley B', 'Brown GK'],
      source: 'Cognitive and Behavioral Practice',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-suicidal-ideation', targetType: 'topic', relationship: 'related', label: 'Suicidal Ideation' },
    { targetId: 'mental-health-crisis-resources', targetType: 'topic', relationship: 'related', label: 'Crisis Resources' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'crisis', 'suicide-prevention'],
    keywords: ['safety planning', 'suicide prevention', 'crisis intervention', 'means restriction'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default safetyPlanningContent;
