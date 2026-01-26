/**
 * Suicidal Ideation - Patient Education Content
 *
 * Education about recognizing and responding to suicidal thoughts.
 */

import { EducationalContent } from '../../types';

export const suicidalIdeationContent: EducationalContent = {
  id: 'mental-health-suicidal-ideation',
  type: 'topic',
  name: 'Suicidal Ideation',
  alternateNames: ['Suicidal Thoughts', 'Suicidality'],

  levels: {
    1: {
      level: 1,
      summary: 'Suicidal thoughts are more common than people realize and are a sign that you need help. If you or someone you know is having these thoughts, please reach out - help is available and effective.',
      explanation: `**If You Are Having Suicidal Thoughts:**

**You are not alone.** Many people have thoughts of suicide at some point. These thoughts are a sign you need support, not a sign of weakness.

**Please reach out for help:**
- 988 Suicide & Crisis Lifeline: Call or text 988
- Crisis Text Line: Text HOME to 741741
- Go to your nearest emergency room
- Tell someone you trust

**Important Facts:**

- Suicidal thoughts are treatable
- Most people who get help do NOT die by suicide
- Having these thoughts does NOT mean you will act on them
- Treatment works
- Things CAN get better

**Warning Signs:**

- Talking about wanting to die or kill oneself
- Looking for ways to kill oneself
- Talking about feeling hopeless or having no reason to live
- Talking about feeling trapped or in unbearable pain
- Talking about being a burden to others
- Increasing use of alcohol or drugs
- Acting anxious or agitated
- Withdrawing from activities
- Isolating from family and friends
- Sleeping too much or too little
- Giving away prized possessions
- Saying goodbye to people

**What to Do:**

*If you are having these thoughts:*
- Tell someone - a friend, family member, doctor, or counselor
- Call 988 or text HOME to 741741
- Remove access to means of harm (medications, weapons)
- Do not be alone
- Avoid alcohol and drugs

*If someone tells you they are suicidal:*
- Take it seriously
- Listen without judgment
- Ask directly: "Are you thinking about suicide?"
- Help them connect with support (call 988 together)
- Do not leave them alone if they are in immediate danger
- Call 911 if there is immediate risk

**Remember:**
- Suicidal feelings are temporary, even if they do not feel that way
- You matter
- Help is available
- Recovery is possible`,
      keyTerms: [
        { term: 'suicidal ideation', definition: 'Thoughts about ending one\'s own life' },
        { term: '988', definition: 'The National Suicide Prevention Lifeline number' },
        { term: 'crisis', definition: 'A time of intense difficulty when someone needs immediate help' },
      ],
      analogies: [
        'Suicidal thoughts are like a storm - they feel overwhelming but they do pass.',
        'Reaching out for help is like opening a door when you are trapped - it lets light in.',
        'The crisis line is like a lifeguard - there to help when you are struggling.',
      ],
      examples: [
        'Someone feeling overwhelmed might call 988 and talk to a trained counselor who helps them feel less alone.',
        'A friend who notices someone withdrawing might ask directly if they are okay and help them get support.',
        'A person who gets help during a crisis often looks back and feels grateful they reached out.',
      ],
    },
    2: {
      level: 2,
      summary: 'Suicidal ideation ranges from passive thoughts to active planning. Risk assessment considers multiple factors. Safety planning, means restriction, and connection to care are key interventions. Most people with suicidal thoughts do not die by suicide, especially with treatment.',
      explanation: `**Understanding Suicidal Ideation:**

Suicidal ideation refers to thoughts about suicide, ranging from fleeting considerations to detailed planning. It is a symptom that requires assessment and intervention.

**Types of Suicidal Ideation:**

*Passive Suicidal Ideation:*
- Wishing to be dead
- Wishing to not wake up
- Not actively planning
- Still requires attention and care

*Active Suicidal Ideation:*
- Thoughts of killing oneself
- May include methods, timing, location
- With or without intent to act
- Requires more intensive intervention

**Risk Factors:**

*Historical:*
- Previous suicide attempt (strongest predictor)
- Family history of suicide
- History of trauma or abuse
- Previous psychiatric hospitalization

*Clinical:*
- Depression, bipolar disorder, schizophrenia
- Substance use disorders
- Anxiety disorders
- Personality disorders (especially borderline)
- Chronic pain or medical illness

*Psychosocial:*
- Recent loss or rejection
- Social isolation
- Relationship problems
- Financial or legal problems
- Access to lethal means
- Exposure to suicide (contagion)

**Protective Factors:**

- Social support and connection
- Reasons for living
- Responsibility to others (children, pets)
- Fear of death or dying
- Religious/spiritual beliefs
- Engaged in treatment
- Problem-solving skills

**Warning Signs:**

- Talking about suicide or wanting to die
- Looking for methods
- Giving away possessions
- Saying goodbye
- Increasing substance use
- Reckless behavior
- Extreme mood swings
- Hopelessness
- Rage or seeking revenge
- Feeling trapped
- Withdrawing from activities
- Changes in sleep

**Intervention:**

*Safety Planning:*
1. Recognize warning signs
2. Use internal coping strategies
3. Reach out to people and places for distraction
4. Contact family or friends for support
5. Contact professionals or crisis services
6. Restrict access to lethal means

*Means Restriction:*
- Reduce access to firearms
- Limit medication access
- Barriers at locations
- Significantly reduces risk

*Connection to Care:*
- Crisis intervention
- Mental health treatment
- Follow-up contact
- Continuity of care`,
      keyTerms: [
        { term: 'passive ideation', definition: 'Thoughts of wishing to be dead without active planning' },
        { term: 'active ideation', definition: 'Thoughts of killing oneself, possibly with plan or intent' },
        { term: 'safety planning', definition: 'Structured plan for coping with suicidal thoughts' },
        { term: 'means restriction', definition: 'Reducing access to methods of suicide' },
        { term: 'protective factors', definition: 'Things that reduce suicide risk' },
      ],
      analogies: [
        'Safety planning is like having a fire escape plan - you hope you never need it but it saves lives.',
        'Means restriction is like putting a fence at the edge of a cliff - it gives time for the crisis to pass.',
      ],
    },
    3: {
      level: 3,
      summary: 'Suicide risk assessment evaluates ideation, plan, intent, access to means, and protective factors. Columbia-Suicide Severity Rating Scale (C-SSRS) provides structured assessment. Interventions follow risk level: safety planning, means restriction, intensive outpatient, or hospitalization.',
      explanation: `**Risk Assessment Framework:**

**Key Assessment Domains:**

*Suicidal Ideation:*
- Frequency, duration, intensity
- Passive vs active
- Controllability

*Plan:*
- Specificity (method, time, place)
- Lethality of method
- Availability of means
- Preparatory behaviors

*Intent:*
- Desire to die
- Reasons for wanting to die
- Reasons for living
- Expectation of acting on thoughts

*Capability:*
- Previous attempts (strongest predictor)
- Self-harm history
- Exposure to death
- Pain tolerance

**Columbia-Suicide Severity Rating Scale (C-SSRS):**

*Ideation Categories:*
1. Wish to be dead
2. Non-specific active suicidal thoughts
3. Active suicidal ideation with any methods
4. Active suicidal ideation with some intent
5. Active suicidal ideation with specific plan and intent

*Behavior Categories:*
- Actual attempt
- Interrupted attempt
- Aborted attempt
- Preparatory behavior

**Risk Stratification:**

*Low Risk:*
- Passive ideation only
- No plan or intent
- Protective factors present
- Able to safety plan
- Intervention: Outpatient, safety planning

*Moderate Risk:*
- Active ideation without plan
- Some risk factors
- Some protective factors
- May be able to engage in safety planning
- Intervention: Intensive outpatient, close follow-up

*High Risk:*
- Active ideation with plan/intent
- Recent attempt or preparatory behavior
- Access to means
- Limited protective factors
- Poor engagement with safety planning
- Intervention: Consider hospitalization

**Interventions by Level:**

*Safety Planning Intervention:*
- Structured, collaborative process
- Stanley-Brown Safety Plan
- Warning signs, coping, support contacts
- Reasons for living
- Means restriction discussion
- Evidence-based

*Means Restriction:*
- Discuss with patient and family
- Firearms: Remove or secure
- Medications: Limit quantities
- Temporary storage with trusted person
- 90% of attempters do not die by suicide later if they survive

*Crisis Intervention:*
- Same-day access
- Crisis hotlines
- Mobile crisis teams
- Emergency department evaluation

*Hospitalization:*
- When outpatient unsafe
- Acute stabilization
- Voluntary preferred when possible
- Involuntary when necessary for safety

**Documentation:**

- Risk and protective factors
- Mental status examination
- Collaborative safety plan
- Disposition and rationale
- Follow-up arrangements`,
      keyTerms: [
        { term: 'C-SSRS', definition: 'Columbia-Suicide Severity Rating Scale - standardized assessment tool' },
        { term: 'Stanley-Brown Safety Plan', definition: 'Evidence-based safety planning template' },
        { term: 'lethality', definition: 'How likely a method is to result in death' },
        { term: 'preparatory behavior', definition: 'Actions taken in preparation for a suicide attempt' },
        { term: 'capability', definition: 'Acquired ability to engage in self-harm' },
      ],
      clinicalNotes: 'Always assess access to means, especially firearms. Previous attempt is strongest risk factor. Safety planning is collaborative, not a contract. Hospitalization is for stabilization, not treatment. Ensure follow-up within 24-72 hours after ED visit or hospitalization.',
    },
    4: {
      level: 4,
      summary: 'Suicide risk involves the intersection of suicidal desire, capability, and reduced connectedness. Assessment integrates multiple frameworks (interpersonal theory, fluid vulnerability). Evidence-based interventions include safety planning, caring contacts, means restriction, and DBT. Risk is dynamic and requires ongoing monitoring.',
      explanation: `**Theoretical Frameworks:**

**Interpersonal Theory of Suicide (Joiner):**

*Three Factors Required:*
1. Thwarted belongingness (isolation, burden)
2. Perceived burdensomeness
3. Acquired capability (ability to enact lethal self-harm)

*Capability Acquired Through:*
- Repeated exposure to pain
- Habituation to fear of death
- Previous self-harm
- Traumatic experiences

**Fluid Vulnerability Theory:**

*Suicide Risk as Dynamic:*
- Baseline vulnerability
- Acute perturbations
- Hopelessness as key cognitive factor
- Risk changes over time (hours, days)

**Three-Step Theory (Klonsky):**

1. Pain + Hopelessness → Ideation
2. Pain + Hopelessness + Low connectedness → Strong ideation
3. Strong ideation + Capacity → Attempt

**Assessment Integration:**

*Comprehensive Assessment:*
- Static factors (history)
- Dynamic factors (current state)
- Warning signs (acute changes)
- Precipitants
- Protective factors
- Formulation integrating all

*Risk Formulation:*
- Move beyond "low/moderate/high"
- Individualized narrative
- What factors are driving risk?
- What would need to change?

**Evidence-Based Interventions:**

*Safety Planning Intervention (SPI):*
- Stanley-Brown template
- Six steps collaboratively developed
- Shown to reduce suicidal behavior
- Brief intervention with lasting effects

*Caring Contacts:*
- Brief, non-demanding check-ins
- Letters, calls, texts after discharge
- Reduces suicide deaths
- Low cost, high impact

*Means Restriction Counseling:*
- Lethal means counseling
- Collaborative discussion with patient/family
- Reduces suicide deaths
- Particularly important for firearms

*Dialectical Behavior Therapy:*
- Strongest evidence for reducing self-harm/attempts
- Specifically targets suicidality
- Behavioral chain analysis
- Skills training

*Cognitive Therapy for Suicide Prevention:*
- Targets hopelessness, cognitive distortions
- Safety planning component
- Reduces reattempts

*Collaborative Assessment and Management of Suicidality (CAMS):*
- Therapeutic framework
- Collaborative approach
- Suicide Status Form
- Ongoing assessment and treatment

**Special Considerations:**

*Transition Points:*
- Discharge from ED or hospital is high-risk period
- First week post-discharge critical
- Caring contacts and follow-up essential

*Youth:*
- Developmental considerations
- Family involvement
- School coordination
- Safety planning adapted

*Chronic Suicidality:*
- Different approach than acute crisis
- DBT, long-term treatment
- Reduce crisis-oriented interventions
- Building a life worth living`,
      keyTerms: [
        { term: 'thwarted belongingness', definition: 'Feeling of not being connected to others' },
        { term: 'perceived burdensomeness', definition: 'Belief that one is a burden to others' },
        { term: 'acquired capability', definition: 'Ability to overcome fear and pain to attempt suicide' },
        { term: 'caring contacts', definition: 'Brief check-in communications shown to reduce suicide' },
        { term: 'CAMS', definition: 'Collaborative Assessment and Management of Suicidality framework' },
      ],
      clinicalNotes: 'Risk is dynamic - assess at every visit. Discharge from inpatient or ED is high-risk transition. Lethal means counseling (especially firearms) is evidence-based. DBT has strongest evidence for reducing suicide attempts. Caring contacts are simple and effective. Safety planning is collaborative, not administrative.',
    },
    5: {
      level: 5,
      summary: 'Contemporary suicidology integrates biological markers, predictive analytics, and precision prevention. Machine learning models attempt real-time risk prediction. Ketamine and other rapid-acting treatments address acute suicidality. Implementation science focuses on disseminating evidence-based interventions and addressing systemic barriers.',
      explanation: `**Biological Perspectives:**

*Neurobiological Factors:*
- Serotonergic system alterations
- HPA axis dysregulation
- Prefrontal cortex dysfunction
- Inflammation markers
- Genetic factors (heritability ~40%)

*Potential Biomarkers:*
- Cortisol, BDNF, inflammatory cytokines
- CSF metabolites
- Neuroimaging patterns
- None validated for clinical use

*Pharmacological Targets:*
- Ketamine/esketamine: Rapid reduction in suicidal ideation
- Clozapine: Reduces suicide in schizophrenia
- Lithium: Reduces suicide in mood disorders
- Targeted treatments being explored

**Predictive Analytics:**

*Machine Learning Approaches:*
- EHR-based prediction models
- Identify high-risk individuals
- Sensitivity/specificity challenges
- Implementation questions

*Limitations:*
- False positives
- Base rate problem
- Ethical concerns
- Clinical utility unclear
- Cannot replace clinical assessment

**Rapid-Acting Treatments:**

*Ketamine/Esketamine:*
- Rapid reduction in suicidal ideation (hours)
- FDA indication for MDD with suicidality (esketamine)
- Bridge during high-risk periods
- Not a standalone treatment

*ECT:*
- Rapid efficacy for severe depression
- Can reduce suicidality quickly
- Consider for high-risk patients

**Zero Suicide Framework:**

*Health System Approach:*
- Leadership commitment
- Training workforce
- Identifying at-risk individuals
- Engaging patients in treatment
- Evidence-based care
- Care transitions
- Data-driven improvement

*Implementation:*
- System-wide approach
- Not individual provider responsibility
- Culture change
- Quality improvement

**Prevention Strategies:**

*Universal:*
- Public education
- Media guidelines
- Means restriction policies
- School-based programs

*Selective:*
- High-risk groups
- Veterans, LGBTQ+ youth
- Targeted outreach
- Gatekeeper training

*Indicated:*
- Individuals with risk factors
- Following attempt
- Care transitions

**Workforce Development:**

*Training Needs:*
- Assessment skills
- Treatment competencies
- Self-care (provider distress)
- Interprofessional collaboration

*Lived Experience:*
- Involving those with lived experience
- Peer support roles
- Reducing stigma
- Authenticity in programs

**Research Priorities:**

*Prediction:*
- Better risk assessment
- Transition from static to dynamic models
- Real-time monitoring

*Intervention:*
- Brief interventions
- Technology-delivered
- Scalable approaches
- Precision prevention

*Implementation:*
- Disseminating evidence-based practices
- Overcoming barriers
- Sustainable models
- Reducing disparities

**Ethical Considerations:**

*Autonomy vs Safety:*
- Least restrictive interventions
- Collaborative approach
- Involuntary treatment
- Rights and dignity

*Means Restriction:*
- Balancing rights
- Public health approach
- Policy implications

*Prediction Tools:*
- Privacy concerns
- Discrimination risks
- Informed consent`,
      keyTerms: [
        { term: 'Zero Suicide', definition: 'Health system framework for suicide prevention' },
        { term: 'gatekeeper training', definition: 'Training community members to recognize and respond to suicide risk' },
        { term: 'postvention', definition: 'Support for those affected after a suicide' },
        { term: 'precision prevention', definition: 'Matching prevention strategies to individual risk profiles' },
        { term: 'lived experience', definition: 'Personal history of suicidal thoughts or attempts' },
      ],
      clinicalNotes: `Current best practices:
- Safety planning is evidence-based
- Caring contacts reduce suicide after ED visits
- Lethal means counseling essential
- DBT most effective for chronic suicidality
- Transition points require extra attention

Emerging approaches:
- Ketamine for acute suicidality
- Zero Suicide health system approach
- Machine learning prediction (research)
- Technology-delivered interventions

Key challenges:
- Prediction remains difficult
- Disseminating evidence-based care
- Care transitions
- Addressing disparities`,
    },
  },

  media: [
    {
      id: 'safety-planning-template',
      type: 'diagram',
      filename: 'safety_plan.svg',
      title: 'Safety Planning Steps',
      description: 'The six steps of the Stanley-Brown Safety Planning Intervention',
    },
  ],

  citations: [
    {
      id: 'c-ssrs-reference',
      type: 'article',
      title: 'The Columbia-Suicide Severity Rating Scale',
      authors: ['Posner K', 'et al'],
      source: 'American Journal of Psychiatry',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-depression', targetType: 'condition', relationship: 'related', label: 'Depression' },
    { targetId: 'mental-health-crisis-resources', targetType: 'topic', relationship: 'see-also', label: 'Crisis Resources' },
    { targetId: 'mental-health-safety-planning', targetType: 'topic', relationship: 'see-also', label: 'Safety Planning' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'crisis'],
    keywords: ['suicide', 'suicidal ideation', 'crisis', 'safety planning', '988'],
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

export default suicidalIdeationContent;
