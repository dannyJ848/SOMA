/**
 * Psychotherapy Types - Patient Education Content
 *
 * Comprehensive education about different types of psychotherapy
 * including CBT, DBT, psychodynamic, and other evidence-based approaches.
 */

import { EducationalContent } from '../../types';

export const psychotherapyTypesContent: EducationalContent = {
  id: 'mental-health-psychotherapy-types',
  type: 'topic',
  name: 'Psychotherapy Types',
  alternateNames: ['Talk Therapy', 'Counseling', 'Therapy Types', 'CBT', 'DBT'],

  levels: {
    1: {
      level: 1,
      summary: 'Psychotherapy (talk therapy) helps you understand and change thoughts, feelings, and behaviors that cause problems. Different types work best for different issues.',
      explanation: `**What Is Psychotherapy?**

Psychotherapy, or "talk therapy," is treatment that helps people with mental health challenges. You work with a trained therapist to understand your problems and develop better ways of coping.

**Common Types of Therapy:**

**Cognitive Behavioral Therapy (CBT):**
- Focuses on how thoughts affect feelings and behaviors
- Helps you identify and change negative thinking patterns
- Teaches practical skills you can use daily
- Works well for: anxiety, depression, OCD, PTSD

**Dialectical Behavior Therapy (DBT):**
- Combines CBT with mindfulness
- Teaches skills for managing intense emotions
- Helps with relationships and distress tolerance
- Works well for: borderline personality disorder, self-harm, emotion problems

**Psychodynamic Therapy:**
- Explores how past experiences affect current problems
- Focuses on relationships and unconscious patterns
- Helps understand why you feel and act certain ways
- Works well for: depression, relationship issues, personality patterns

**Supportive Therapy:**
- Provides emotional support and encouragement
- Helps with coping during difficult times
- Less structured, more conversational
- Works well for: life transitions, stress, adjustment

**Group Therapy:**
- Meet with others who have similar challenges
- Share experiences and support each other
- Learn from how others cope
- Often combined with individual therapy

**What to Expect:**
- Sessions usually last 45-60 minutes
- Weekly meetings are common
- Length of treatment varies (weeks to years)
- It takes time and effort, but it works

**Finding Help:**
- Ask your doctor for referrals
- Check if your insurance covers therapy
- Many therapists offer sliding scale fees
- Online/telehealth options are available`,
      keyTerms: [
        { term: 'psychotherapy', definition: 'Treatment through talking with a trained mental health professional' },
        { term: 'CBT', definition: 'Cognitive Behavioral Therapy - focuses on changing unhelpful thoughts and behaviors' },
        { term: 'DBT', definition: 'Dialectical Behavior Therapy - teaches skills for emotions and relationships' },
        { term: 'therapist', definition: 'A trained professional who provides psychotherapy' },
      ],
      analogies: [
        'Therapy is like having a skilled guide on a difficult hiking trail - they help you navigate and build your own strength.',
        'CBT is like debugging your brain\'s software - finding and fixing the glitches in your thinking.',
        'Going to therapy is like going to the gym for your mind - it takes regular effort to build mental strength.',
      ],
      examples: [
        'In CBT for anxiety, you might learn to challenge the thought "everyone is judging me" with evidence-based thinking.',
        'In DBT, you might practice mindfulness exercises when feeling overwhelmed instead of self-harming.',
        'In psychodynamic therapy, you might discover that your relationship patterns connect to early family experiences.',
      ],
    },
    2: {
      level: 2,
      summary: 'Evidence-based psychotherapies include CBT, DBT, psychodynamic therapy, interpersonal therapy, and others. Each has specific techniques and is suited to particular conditions. Therapeutic alliance is key across all modalities.',
      explanation: `**Understanding Psychotherapy:**

Psychotherapy involves treatment of mental health conditions through psychological methods. Different therapy types use different techniques, but all rely on a trusting therapeutic relationship.

**Cognitive Behavioral Therapy (CBT):**
*Principles:*
- Thoughts, feelings, and behaviors are interconnected
- Changing thoughts can change feelings and behaviors
- Focus on present problems and practical solutions
- Time-limited (typically 12-20 sessions)

*Techniques:*
- Cognitive restructuring (challenging negative thoughts)
- Behavioral experiments
- Exposure therapy
- Activity scheduling
- Problem-solving

*Evidence Base:*
- Strong evidence for depression, anxiety disorders, OCD, PTSD
- Many variations: CBT-I (insomnia), CBT-E (eating disorders)

**Dialectical Behavior Therapy (DBT):**
*Components:*
- Individual therapy
- Skills group (weekly)
- Phone coaching
- Consultation team for therapists

*Skill Modules:*
- Mindfulness: Being present without judgment
- Distress Tolerance: Surviving crises without making things worse
- Emotion Regulation: Understanding and managing emotions
- Interpersonal Effectiveness: Maintaining relationships while asserting needs

*Evidence Base:*
- Gold standard for borderline personality disorder
- Also for self-harm, suicidal behavior, emotional dysregulation

**Psychodynamic Therapy:**
*Principles:*
- Unconscious processes affect behavior
- Past relationships shape current patterns
- Insight leads to change
- Therapeutic relationship is central

*Techniques:*
- Free association
- Dream analysis
- Transference interpretation
- Working through defenses

*Variations:*
- Brief psychodynamic therapy (time-limited)
- Long-term psychodynamic therapy
- Mentalization-based treatment (MBT)
- Transference-focused therapy (TFP)

**Interpersonal Therapy (IPT):**
*Focus Areas:*
- Grief
- Role transitions
- Interpersonal disputes
- Interpersonal deficits

*Evidence Base:*
- Strong for depression
- Also eating disorders, PTSD

**Other Therapies:**
- Acceptance and Commitment Therapy (ACT): Mindfulness + values-based action
- EMDR: For trauma, uses bilateral stimulation
- Exposure and Response Prevention (ERP): For OCD
- Motivational Interviewing: For ambivalence about change
- Family therapy: Works with family system`,
      keyTerms: [
        { term: 'cognitive restructuring', definition: 'Identifying and changing unhelpful thought patterns' },
        { term: 'therapeutic alliance', definition: 'The collaborative relationship between therapist and client' },
        { term: 'transference', definition: 'When feelings about past relationships are directed at the therapist' },
        { term: 'mindfulness', definition: 'Paying attention to the present moment without judgment' },
        { term: 'exposure therapy', definition: 'Gradually facing feared situations to reduce anxiety' },
      ],
      analogies: [
        'Cognitive restructuring is like being a detective investigating your own thoughts - checking for evidence.',
        'The therapeutic alliance is like a secure base from which to explore difficult territory.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based psychotherapies have distinct theoretical frameworks, techniques, and indications. CBT targets cognitive distortions and maladaptive behaviors; DBT addresses emotion dysregulation; psychodynamic therapy addresses unconscious conflicts. Common factors contribute significantly to outcomes.',
      explanation: `**Theoretical Frameworks:**

**Cognitive Behavioral Therapy:**
*Cognitive Model:*
- Automatic thoughts → Emotions → Behaviors
- Core beliefs (schemas) underlie automatic thoughts
- Cognitive distortions: All-or-nothing thinking, catastrophizing, mind-reading
- Behavioral patterns maintain problems

*Techniques:*
- Thought records/diaries
- Behavioral experiments
- Socratic questioning
- Activity scheduling/behavioral activation
- Graded exposure hierarchies

*Adaptations:*
- CBT for insomnia (CBT-I): Sleep restriction, stimulus control
- CBT-E (enhanced): Transdiagnostic for eating disorders
- Trauma-focused CBT: For PTSD, includes exposure
- Individual, group, guided self-help, digital formats

**Dialectical Behavior Therapy:**
*Biosocial Theory:*
- Biological vulnerability to emotion dysregulation
- + Invalidating environment
- = Emotion regulation deficits

*Dialectical Principles:*
- Balance acceptance and change
- Balance validation and problem-solving
- Dialectical synthesis of opposing positions

*Treatment Hierarchy:*
1. Life-threatening behaviors
2. Therapy-interfering behaviors
3. Quality-of-life interfering behaviors
4. Skills generalization

*Skills Training:*
- Mindfulness (core): Wise mind, observe, describe, participate
- Distress Tolerance: TIPP, distract, self-soothe, radical acceptance
- Emotion Regulation: Identify emotions, opposite action, ABC
- Interpersonal Effectiveness: DEAR MAN, GIVE, FAST

**Psychodynamic Therapy:**
*Key Concepts:*
- Unconscious mental processes
- Defense mechanisms
- Transference and countertransference
- Repetition compulsion
- Working alliance

*Short-Term Psychodynamic (STPP):*
- Time-limited (12-40 sessions)
- Focus on specific conflict/pattern
- Active therapist stance

*Specialized Approaches:*
- MBT: Focus on mentalizing (understanding mental states)
- TFP: Focus on transference patterns
- Panic-Focused Psychodynamic: For panic disorder

**Interpersonal Therapy:**
*Structure:*
- Phase 1: Assessment, psychoeducation
- Phase 2: Work on interpersonal focus area
- Phase 3: Termination, consolidation

*Four Focus Areas:*
- Grief (complicated bereavement)
- Role transitions (life changes)
- Role disputes (conflicts)
- Interpersonal deficits (social isolation)

**Exposure-Based Therapies:**
- Prolonged Exposure (PE): For PTSD
- ERP: For OCD
- Exposure principle: Fear decreases with prolonged, repeated exposure

**Common Factors:**

Research shows therapy outcomes depend significantly on:
- Therapeutic alliance (strongest predictor)
- Therapist empathy
- Client expectations
- Therapist competence
- Factors common across therapies`,
      keyTerms: [
        { term: 'automatic thoughts', definition: 'Quick, spontaneous thoughts that influence emotions' },
        { term: 'core beliefs', definition: 'Deep-seated beliefs about self, others, and world' },
        { term: 'DEAR MAN', definition: 'DBT acronym for assertive communication skills' },
        { term: 'mentalizing', definition: 'Understanding behavior in terms of mental states' },
        { term: 'common factors', definition: 'Therapeutic elements shared across therapy types' },
      ],
      clinicalNotes: 'Match therapy type to diagnosis and patient preference. CBT has strongest evidence base across conditions. DBT specifically indicated for BPD and chronic suicidality. Alliance quality predicts outcomes more than specific technique. Consider patient readiness and ability to engage with specific modalities.',
    },
    4: {
      level: 4,
      summary: 'Psychotherapy mechanisms involve cognitive change, emotional processing, behavioral learning, and relational experiences. Neuroimaging shows therapy-induced brain changes. Treatment selection increasingly considers mediators, moderators, and personalized matching. Integration of therapies is common in practice.',
      explanation: `**Mechanisms of Change:**

**Cognitive Mechanisms:**
- Decentering: Stepping back from thoughts
- Cognitive flexibility
- Reappraisal capacity
- Metacognitive awareness
- Reduction of cognitive distortions

**Emotional Mechanisms:**
- Emotional processing
- Affect regulation capacity
- Distress tolerance
- Corrective emotional experiences
- Exposure and habituation

**Behavioral Mechanisms:**
- Extinction learning
- Behavioral activation
- Skills acquisition
- Response prevention
- Reinforcement patterns

**Relational Mechanisms:**
- Corrective relational experience
- Attachment security
- Epistemic trust
- Internalization of therapist functions

**Neurobiological Changes:**

*CBT for Depression/Anxiety:*
- Reduced amygdala reactivity
- Increased prefrontal activity
- Improved prefrontal-amygdala connectivity
- Changes parallel medication effects

*DBT:*
- Amygdala changes with treatment
- Improved prefrontal regulation
- Insula activity changes

*Psychodynamic:*
- Default mode network changes
- Prefrontal changes
- Limited neuroimaging research

**Treatment Selection:**

*Mediators (How it works):*
- Cognitive change in CBT
- Skill acquisition in DBT
- Insight in psychodynamic

*Moderators (For whom):*
- Severity
- Comorbidity
- Preference
- Cognitive capacity
- Attachment style

*Predictors of Response:*
- Alliance quality
- Homework compliance (CBT)
- Skill use (DBT)
- Patient expectations

**Integrative Approaches:**

*Technical Integration:*
- Combining techniques from different therapies
- Common in practice
- Eclectic approach

*Theoretical Integration:*
- Assimilative integration
- Common factors framework
- Transtheoretical approaches

*Sequential Integration:*
- Different therapies for different phases
- Stabilization → Processing → Integration

**Specialized Applications:**

*Third-Wave CBT:*
- ACT: Acceptance, defusion, values, committed action
- MBCT: Mindfulness-Based Cognitive Therapy for depression relapse
- CFT: Compassion-Focused Therapy

*Trauma-Focused:*
- PE: Imaginal and in vivo exposure
- CPT: Cognitive processing of trauma
- EMDR: Bilateral stimulation during processing

*Couples/Family:*
- Emotionally Focused Therapy (EFT)
- Behavioral couples therapy
- Family-based treatment (FBT for eating disorders)

**Format Considerations:**

*Individual vs Group:*
- Individual: More personalized
- Group: Universality, interpersonal learning, cost-effective

*Intensity:*
- Standard weekly
- Intensive (daily)
- Briefer interventions

*Delivery Mode:*
- In-person
- Telehealth (equivalent outcomes for many conditions)
- Guided self-help
- Digital therapeutics`,
      keyTerms: [
        { term: 'decentering', definition: 'Ability to view thoughts as mental events rather than reality' },
        { term: 'corrective emotional experience', definition: 'New emotional experience that challenges old patterns' },
        { term: 'mediator', definition: 'Variable that explains how treatment works' },
        { term: 'moderator', definition: 'Variable that predicts for whom treatment works' },
        { term: 'assimilative integration', definition: 'Integrating techniques into a home theoretical framework' },
      ],
      clinicalNotes: 'Alliance is key across modalities - repair ruptures actively. Homework compliance predicts CBT outcomes. Consider stepped care - start with lower intensity, step up if needed. Patient preference affects outcomes. Trauma work may require stabilization first.',
    },
    5: {
      level: 5,
      summary: 'Contemporary psychotherapy research focuses on mechanisms, precision treatment matching, technology-enhanced delivery, and transdiagnostic approaches. Process-based therapy and RDoC framework inform personalized treatment. Implementation science addresses dissemination gaps.',
      explanation: `**Precision Psychotherapy:**

*Treatment Matching:*
- Aptitude-treatment interactions
- Algorithmic matching (research)
- Stratified care models
- Baseline predictors

*Examples:*
- High reactivity → Behavior therapy first
- Cognitive capacity → Standard vs simplified CBT
- Attachment style → Therapy relationship emphasis
- Preference matching improves engagement

*Personalized Advantage Index:*
- Statistical approach to matching
- Patient-specific outcome prediction
- Research stage

**Process-Based Therapy:**

*Framework:*
- Focus on change processes, not diagnoses
- Target mechanisms directly
- Personalized functional analysis
- Draws from multiple traditions

*Core Processes:*
- Cognition
- Affect
- Attention
- Self
- Motivation
- Overt behavior

**Technology-Enhanced:**

*Digital Therapeutics:*
- Computerized CBT programs
- Smartphone apps
- Virtual reality exposure
- AI-enhanced interventions
- Adjuncts to therapy or standalone

*Examples:*
- Woebot, Wysa (CBT chatbots)
- PTSD Coach (VA app)
- VR for phobias, PTSD
- EMA for real-time intervention

*Telehealth:*
- Equivalent outcomes for many conditions
- Increased access
- Pandemic acceleration
- Here to stay

**Transdiagnostic Approaches:**

*Unified Protocol (Barlow):*
- Targets emotional disorders broadly
- Core components: Mindful emotion awareness, cognitive flexibility, countering emotional behaviors
- Evidence across anxiety and mood disorders

*Emotion Regulation Focus:*
- Across diagnoses
- Common mechanism
- Skills-based interventions

*RDoC Framework:*
- Dimensional approach
- Negative valence systems (fear, distress)
- Positive valence systems (reward)
- Cognitive systems
- Social processes
- Arousal/regulatory systems
- Matches interventions to systems

**Implementation Science:**

*Dissemination Challenges:*
- Evidence-practice gap
- Training accessibility
- Fidelity maintenance
- Sustainability

*Solutions:*
- Training protocols
- Supervision models
- Measurement-feedback systems
- Task-shifting (training non-specialists)

*Stepped Care:*
- Low-intensity first (self-help, groups)
- Step up based on response
- Efficient resource use

**Emerging Directions:**

*Psychedelic-Assisted Therapy:*
- Psilocybin for depression, end-of-life
- MDMA for PTSD
- Ketamine integration
- Requires therapeutic context

*Process Research:*
- Moment-to-moment analysis
- Microanalytic methods
- Identifying change moments
- Machine learning applications

*Prevention:*
- Targeting risk factors
- School-based programs
- Digital interventions for at-risk
- Early intervention

*Training:*
- Deliberate practice models
- Competency-based training
- Technology-assisted training
- Global mental health capacity`,
      keyTerms: [
        { term: 'process-based therapy', definition: 'Targeting change mechanisms rather than diagnoses' },
        { term: 'Personalized Advantage Index', definition: 'Statistical method for predicting individual treatment response' },
        { term: 'Unified Protocol', definition: 'Transdiagnostic CBT for emotional disorders' },
        { term: 'RDoC', definition: 'Research Domain Criteria - dimensional framework for psychopathology' },
        { term: 'task-shifting', definition: 'Training non-specialists to deliver psychological interventions' },
      ],
      clinicalNotes: `Current best practices:
- Match therapy to diagnosis and patient factors
- Monitor progress with measures
- Address alliance and ruptures
- Consider stepped care

Emerging developments:
- Precision matching
- Digital therapeutics integration
- Transdiagnostic protocols
- Psychedelic-assisted therapy

Key challenges:
- Access to evidence-based treatments
- Training and supervision capacity
- Maintaining fidelity at scale
- Personalization without complexity`,
    },
  },

  media: [
    {
      id: 'therapy-types-comparison',
      type: 'diagram',
      filename: 'psychotherapy_types.svg',
      title: 'Types of Psychotherapy',
      description: 'Comparison of major psychotherapy approaches and their applications',
    },
  ],

  citations: [
    {
      id: 'apa-practice-guidelines',
      type: 'article',
      title: 'APA Practice Guidelines for Psychotherapy',
      authors: ['American Psychological Association'],
      source: 'APA',
      url: 'https://www.apa.org/practice/guidelines',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-depression', targetType: 'condition', relationship: 'see-also', label: 'Depression' },
    { targetId: 'mental-health-anxiety-disorders', targetType: 'condition', relationship: 'see-also', label: 'Anxiety Disorders' },
    { targetId: 'mental-health-psychiatric-medications', targetType: 'topic', relationship: 'related', label: 'Psychiatric Medications' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'psychotherapy'],
    keywords: ['psychotherapy', 'CBT', 'DBT', 'therapy', 'counseling', 'talk therapy'],
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

export default psychotherapyTypesContent;
