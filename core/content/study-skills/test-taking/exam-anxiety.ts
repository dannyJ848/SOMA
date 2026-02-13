/**
 * Exam Anxiety - Understanding and Managing Test-Related Stress
 *
 * Educational content covering the causes, effects, and management
 * strategies for examination anxiety in medical students.
 */

import { EducationalContent } from '../../types';

export const examAnxiety: EducationalContent = {
  id: 'education-exam-anxiety',
  type: 'concept',
  name: 'Exam Anxiety Management',
  alternateNames: ['Test Anxiety', 'Performance Anxiety', 'Examination Stress'],

  levels: {
    1: {
      level: 1,
      summary: 'Test anxiety is when you feel very nervous about taking exams. Many students feel this way. Learning to manage these feelings can help you do better on tests.',
      explanation: `## What is Test Anxiety?

Test anxiety is when you feel really worried or scared about taking a test. Almost everyone feels a little nervous before a big test, but some people feel so nervous that it's hard to think clearly.

## Signs of Test Anxiety

**How your body might feel:**
- Butterflies in your stomach
- Heart beating fast
- Sweaty hands
- Feeling sick
- Headaches

**How your mind might feel:**
- Worried thoughts
- Going "blank" during the test
- Hard to focus
- Negative thoughts about yourself

## Why Does It Happen?

Test anxiety can happen because:
- You're afraid of failing
- You didn't study enough
- You've had bad test experiences before
- You put a lot of pressure on yourself
- The test feels really important

## Ways to Feel Better

**Before the Test:**
- Study well so you feel prepared
- Get a good night's sleep
- Eat a healthy breakfast
- Tell yourself positive things

**During the Test:**
- Take deep breaths
- Start with easy questions
- Focus on one question at a time
- Don't worry about other people finishing

**Breathing Exercise:**
1. Breathe in slowly for 4 counts
2. Hold for 4 counts
3. Breathe out slowly for 4 counts
4. Repeat 3-4 times

## Remember

- It's normal to feel nervous
- Some nervousness can actually help you focus
- You can learn to manage these feelings
- Ask for help if anxiety is too much`,
      keyTerms: [
        { term: 'test anxiety', definition: 'Feeling very nervous or worried before and during tests' },
        { term: 'deep breathing', definition: 'Slow, controlled breathing that helps calm your body and mind' },
        { term: 'positive self-talk', definition: 'Saying encouraging things to yourself to feel more confident' },
      ],
      analogies: [
        'Test anxiety is like stage fright for actors - it\'s common and can be managed with practice.',
        'Deep breathing is like hitting the pause button when your mind is racing too fast.',
        'Some nervousness before a test is like butterflies before a game - it shows you care and can help you perform.',
      ],
      examples: [
        'Before a math test, a student takes five deep breaths, tells themselves "I studied and I\'m ready," and starts with the easiest problems.',
        'A student who feels their heart racing during a test pauses, does a quick breathing exercise, and feels calmer.',
      ],
      patientCounselingPoints: [
        'Many medical students experience test anxiety - it\'s a common challenge',
        'Learning to manage stress during tests helps prepare future doctors for stressful clinical situations',
      ],
    },

    2: {
      level: 2,
      summary: 'Test anxiety is a type of performance anxiety that can impair cognitive function during examinations. Understanding its causes and implementing evidence-based management strategies can significantly improve test performance.',
      explanation: `## Understanding Test Anxiety

Test anxiety is a psychological condition where excessive worry about examinations impairs performance. It affects approximately 25-40% of students.

## Components of Test Anxiety

**Cognitive Component:**
- Worry and negative thoughts
- Self-doubt
- Fear of failure
- Memory blocks
- Difficulty concentrating

**Physiological Component:**
- Increased heart rate
- Sweating
- Nausea
- Muscle tension
- Headaches

**Behavioral Component:**
- Avoidance (procrastination, skipping tests)
- Poor study habits
- Time mismanagement
- Escape behaviors

## Causes of Test Anxiety

**Individual Factors:**
- Perfectionism
- Low self-efficacy
- Previous negative experiences
- Insufficient preparation
- Poor test-taking skills

**Environmental Factors:**
- High-stakes testing environment
- Parental/social pressure
- Competitive academic settings
- Time pressure

## Effects on Performance

**Cognitive Interference:**
- Working memory capacity reduced
- Difficulty retrieving information
- Impaired concentration
- Reduced processing speed

**The Yerkes-Dodson Law:**
- Moderate arousal optimizes performance
- Too little arousal: Low motivation
- Too much arousal: Anxiety impairs performance

## Management Strategies

**Preparation Strategies:**
| Strategy | Benefit |
|----------|---------|
| Effective studying | Builds confidence |
| Practice tests | Reduces uncertainty |
| Good sleep | Improves cognition |
| Time management | Reduces last-minute stress |

**Cognitive Strategies:**
- Cognitive restructuring (challenging negative thoughts)
- Positive self-talk
- Visualization of success
- Acceptance of some anxiety as normal

**Relaxation Techniques:**
| Technique | How To |
|-----------|--------|
| Deep breathing | Slow, diaphragmatic breaths |
| Progressive muscle relaxation | Tense and release muscle groups |
| Mindfulness | Focus on present moment |
| Grounding | Focus on 5 senses |

**During the Exam:**
- Start with easier questions
- Use planned breaks
- Focus on process, not outcome
- Avoid comparing with others

## When to Seek Help

**Signs you may need additional support:**
- Anxiety significantly impairs performance
- Physical symptoms are severe
- Avoidance behaviors increasing
- Affects daily functioning

**Resources:**
- Academic counseling services
- Mental health professionals
- Study skills programs
- Peer support groups`,
      keyTerms: [
        { term: 'cognitive interference', definition: 'When anxious thoughts disrupt normal mental processing and memory retrieval' },
        { term: 'self-efficacy', definition: 'Belief in one\'s ability to succeed in specific situations' },
        { term: 'cognitive restructuring', definition: 'A technique for identifying and changing negative thought patterns' },
        { term: 'progressive muscle relaxation', definition: 'A relaxation technique involving systematically tensing and releasing muscle groups' },
      ],
      analogies: [
        'Cognitive interference is like static on a radio - the signal (your knowledge) is there, but the static (anxiety) makes it hard to hear.',
        'The Yerkes-Dodson curve is like a volume dial - some is good, but too much makes everything worse.',
        'Progressive muscle relaxation is like releasing the tension on a stretched rubber band.',
      ],
      examples: [
        'A student notices they\'re thinking "I\'m going to fail," replaces it with "I\'ve prepared well and will do my best," and feels their anxiety decrease.',
        'Before entering the testing room, a student does progressive muscle relaxation, tensing and releasing their shoulders, then hands, then legs.',
      ],
      patientCounselingPoints: [
        'Test anxiety is treatable - effective strategies exist',
        'Learning anxiety management helps with stress in clinical settings too',
      ],
    },

    3: {
      level: 3,
      summary: 'Test anxiety involves cognitive, physiological, and behavioral components that interfere with examination performance. Evidence-based interventions include cognitive-behavioral strategies, relaxation techniques, and study skills training. Understanding anxiety mechanisms enables targeted management.',
      explanation: `## Test Anxiety: Mechanisms and Management

Test anxiety is a form of performance anxiety characterized by excessive worry, physiological arousal, and behavioral responses that impair test performance.

## Theoretical Models

**Interference Model:**
- Anxiety diverts cognitive resources
- Working memory capacity devoted to worry
- Less capacity available for test tasks
- Performance decrements proportional to anxiety

**Processing Efficiency Theory:**
| Normal State | Anxious State |
|-------------|---------------|
| Full WM available | WM partially occupied |
| Efficient processing | Inefficient processing |
| Automatic retrieval | Effortful retrieval |

**Attentional Control Theory:**
- Anxiety impairs attentional control
- Increased stimulus-driven attention
- Decreased goal-directed attention
- Difficulty ignoring task-irrelevant information

## Neurobiological Basis

**HPA Axis Activation:**
- Cortisol release during stress
- Acute cortisol: May enhance encoding
- Chronic cortisol: Impairs retrieval
- Individual differences in response

**Amygdala-Prefrontal Interactions:**
- Amygdala: Threat detection
- Prefrontal cortex: Executive control
- Anxiety: Amygdala dominance
- Effective regulation: PFC modulation

## Assessment Methods

**Self-Report Measures:**
| Instrument | Use |
|------------|-----|
| Test Anxiety Inventory (TAI) | Research standard |
| Cognitive Test Anxiety Scale | Cognitive component |
| State-Trait Anxiety Inventory | General anxiety |

**Behavioral Indicators:**
- Test performance patterns
- Study behavior analysis
- Avoidance behavior monitoring
- Time-on-task metrics

## Evidence-Based Interventions

**Cognitive-Behavioral Therapy:**
1. Psychoeducation about anxiety
2. Cognitive restructuring
3. Exposure to anxiety-provoking situations
4. Behavioral skills training
5. Relapse prevention

**Efficacy Data:**
| Intervention | Effect Size |
|--------------|-------------|
| CBT | d = 0.6-0.8 |
| Relaxation | d = 0.4-0.6 |
| Study skills | d = 0.3-0.5 |
| Combined | d = 0.7-0.9 |

**Specific Techniques:**

**Cognitive Restructuring:**
| Distorted Thought | Rational Response |
|-------------------|-------------------|
| "I'll definitely fail" | "I've prepared; I'll do my best" |
| "Everyone else is smarter" | "I can only control my performance" |
| "This test determines my future" | "This is one test among many" |

**Systematic Desensitization:**
1. Create anxiety hierarchy
2. Learn relaxation response
3. Pair relaxation with anxiety cues
4. Progress through hierarchy

## Test-Day Management

**Pre-Test Protocol:**
- Adequate sleep (7-8 hours)
- Light, balanced meal
- Arrive early
- Brief relaxation exercise
- Positive self-statements

**During-Test Strategies:**
| Situation | Strategy |
|-----------|----------|
| Rising anxiety | Deep breathing, grounding |
| Mental block | Skip, return later |
| Negative thoughts | Thought stopping, replacement |
| Time pressure | Prioritize, stay present |

## Individual Differences

**Factors Affecting Response to Intervention:**
- Baseline anxiety level
- Anxiety subtype (cognitive vs. somatic)
- Previous intervention experience
- Concurrent stressors
- Personality factors

## Medical School Context

**Unique Stressors:**
- High-stakes examinations
- Competitive environment
- Volume of material
- Professional identity formation

**Adaptive vs. Maladaptive Anxiety:**
- Some anxiety motivates study
- Distinguishing helpful from harmful
- Finding optimal arousal level`,
      keyTerms: [
        { term: 'working memory', definition: 'The cognitive system responsible for temporarily holding and manipulating information' },
        { term: 'attentional control', definition: 'The ability to direct and maintain attention on task-relevant information' },
        { term: 'HPA axis', definition: 'Hypothalamic-pituitary-adrenal axis - the neuroendocrine system regulating stress response' },
        { term: 'systematic desensitization', definition: 'A behavioral therapy technique using gradual exposure paired with relaxation' },
        { term: 'cognitive restructuring', definition: 'Identifying and challenging irrational thoughts to reduce emotional distress' },
      ],
      analogies: [
        'Working memory during anxiety is like a computer with too many programs open - less processing power for the task at hand.',
        'The HPA axis is like an alarm system - helpful when there\'s a real threat, but problematic when it keeps going off unnecessarily.',
        'Systematic desensitization is like gradually entering a cold pool rather than jumping in - allowing adjustment at each step.',
      ],
      examples: [
        'A student identifies the thought "I always fail important tests," examines evidence (passed many tests), and replaces it with "I\'ve succeeded before and can succeed again."',
        'Using systematic desensitization, a student practices relaxation while imagining exam scenarios of increasing intensity over several weeks.',
      ],
      patientCounselingPoints: [
        'Test anxiety has well-studied, effective treatments',
        'The coping skills learned for test anxiety transfer to other stressful situations in medicine',
      ],
    },

    4: {
      level: 4,
      summary: 'Graduate-level understanding of test anxiety encompasses neurobiological mechanisms, validated assessment instruments, and evidence-based interventions. Cognitive-behavioral approaches demonstrate robust efficacy. Individual assessment guides tailored treatment planning.',
      explanation: `## Advanced Test Anxiety Framework

Expert understanding of test anxiety requires integration of cognitive neuroscience, clinical psychology, and educational research.

## Cognitive Neuroscience Perspective

**Neural Circuitry of Anxiety:**
| Structure | Function in Anxiety |
|-----------|---------------------|
| Amygdala | Threat detection, fear response |
| ACC | Error monitoring, conflict detection |
| DLPFC | Executive control, working memory |
| Hippocampus | Memory formation/retrieval |
| Insula | Interoceptive awareness |

**Anxiety-Performance Interaction:**
- Prefrontal cortex activity decreases under anxiety
- Amygdala activity increases
- Hippocampal-dependent retrieval impaired
- Default mode network intrusions

**Stress Hormones:**
| Hormone | Acute Effect | Chronic Effect |
|---------|-------------|----------------|
| Cortisol | Enhanced encoding | Impaired retrieval |
| Norepinephrine | Arousal, attention | Hypervigilance |
| CRH | Fight-or-flight | Anxiety sensitization |

## Diagnostic Assessment

**Differential Diagnosis:**
- Generalized anxiety disorder
- Specific phobia
- Social anxiety (if public performance)
- ADHD (attention symptoms)
- Depression (with concentration symptoms)

**Assessment Battery:**
| Domain | Measures |
|--------|----------|
| Test anxiety | TAI, CTAS, WEQ |
| General anxiety | STAI, BAI |
| Depression | BDI, PHQ-9 |
| Study skills | LASSI |
| Test-taking | TTS |

## Treatment Planning

**Stepped Care Model:**
| Level | Intervention |
|-------|-------------|
| 1 | Psychoeducation, self-help |
| 2 | Group skills training |
| 3 | Individual CBT |
| 4 | Intensive treatment, medication |

**Treatment Matching:**
| Anxiety Profile | Primary Intervention |
|-----------------|---------------------|
| Cognitive predominant | Cognitive restructuring |
| Somatic predominant | Relaxation training |
| Skills deficit | Study/test-taking skills |
| Avoidance | Exposure therapy |

## Advanced Interventions

**Acceptance and Commitment Therapy (ACT):**
- Acceptance of anxiety rather than control
- Defusion from anxious thoughts
- Present-moment awareness
- Values-directed action

**Mindfulness-Based Interventions:**
- Mindfulness-Based Stress Reduction
- Non-judgmental awareness
- Emotion regulation
- Reduced rumination

**Biofeedback:**
| Type | Application |
|------|-------------|
| HRV biofeedback | Autonomic regulation |
| EMG biofeedback | Muscle tension awareness |
| Neurofeedback | Brain wave training |

## Pharmacological Considerations

**Evidence for Medications:**
| Agent | Evidence | Use |
|-------|----------|-----|
| Beta-blockers | Moderate | Somatic symptoms |
| SSRIs | Strong for GAD | Chronic anxiety |
| Benzodiazepines | Short-term only | Acute severe anxiety |

**Considerations:**
- Cognitive side effects
- Performance impacts
- Dependency concerns
- Academic regulations

## Performance Optimization

**Pre-Competition Psychology:**
| Technique | Application |
|-----------|-------------|
| Mental rehearsal | Visualize successful performance |
| Arousal regulation | Optimal performance zone |
| Self-talk scripts | Pre-prepared coping statements |
| Routine development | Consistent pre-test protocol |

**Resilience Building:**
- Exposure to challenging situations
- Failure tolerance development
- Growth mindset cultivation
- Support system utilization

## Institutional Approaches

**Prevention Programs:**
- Early identification screening
- Orientation workshops
- Peer support programs
- Faculty awareness training

**Accommodations:**
- Extended time (with documentation)
- Separate testing room
- Breaks during testing
- Modified testing conditions

## Research Directions

**Emerging Areas:**
- Precision treatment matching
- Technology-assisted interventions
- Neuroscience-informed approaches
- Prevention science`,
      keyTerms: [
        { term: 'anterior cingulate cortex', definition: 'Brain region involved in error monitoring and emotional regulation' },
        { term: 'heart rate variability biofeedback', definition: 'Training to increase autonomic flexibility by controlling heart rate patterns' },
        { term: 'Acceptance and Commitment Therapy', definition: 'Third-wave CBT approach emphasizing acceptance and values-based action' },
        { term: 'stepped care', definition: 'Treatment model providing least intensive intervention first, stepping up as needed' },
        { term: 'defusion', definition: 'ACT technique of separating oneself from thoughts to reduce their impact' },
      ],
      analogies: [
        'The amygdala-PFC interaction is like a horse and rider - anxiety is when the horse takes over from the rider.',
        'ACT approach is like learning to surf rather than stop the waves - working with anxiety rather than against it.',
        'HRV biofeedback is like learning to shift gears smoothly - training flexibility in autonomic response.',
        'Stepped care is like a ladder - start low and climb only as high as needed.',
      ],
      examples: [
        'A student with primarily somatic anxiety symptoms receives HRV biofeedback training, learning to activate parasympathetic response before and during tests.',
        'Through ACT, a student learns to notice "I\'m having the thought that I\'ll fail" rather than "I\'ll fail," reducing thought fusion and anxiety.',
      ],
      patientCounselingPoints: [
        'Treatment selection should match the specific anxiety profile',
        'Multiple evidence-based options exist for different presentations',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional mastery of test anxiety integrates neurobiological mechanisms, precision assessment, and individualized treatment algorithms. Expert clinicians select interventions based on anxiety phenotype, monitor treatment response, and contribute to advancing intervention science.',
      explanation: `## Professional Test Anxiety Framework

Expert management of test anxiety requires integration of neuroscience, clinical assessment, and evidence-based practice.

## Neurobiological Deep Dive

**Amygdala-PFC Dynamics:**
| Condition | Amygdala | PFC | Performance |
|-----------|----------|-----|-------------|
| Optimal | Moderate | Active | Best |
| Under-aroused | Low | Moderate | Decreased |
| Over-aroused | High | Suppressed | Impaired |

**Genetic Factors:**
- Serotonin transporter polymorphism (5-HTTLPR)
- COMT Val158Met (catecholamine metabolism)
- BDNF Val66Met (neuroplasticity)
- Gene × environment interactions

**Neuroplasticity and Treatment:**
- CBT associated with PFC changes
- Mindfulness increases PFC-amygdala connectivity
- Learning new responses strengthens regulatory circuits
- Treatment changes brain function

## Precision Assessment

**Multimethod Evaluation:**
| Method | Data |
|--------|------|
| Self-report | Subjective experience |
| Behavioral | Performance patterns |
| Psychophysiological | Autonomic response |
| Neuroimaging | Brain activity (research) |

**Anxiety Phenotyping:**
| Phenotype | Characteristics | Primary Treatment |
|-----------|-----------------|-------------------|
| Cognitive worry | Rumination, catastrophizing | Cognitive therapy |
| Somatic arousal | Physical symptoms | Relaxation, biofeedback |
| Avoidant | Procrastination, escape | Exposure therapy |
| Mixed | Multiple components | Combined approach |

## Advanced Intervention Science

**Mechanism-Based Treatment:**
| Target | Mechanism | Intervention |
|--------|-----------|--------------|
| Attention bias | Threat focus | Attention bias modification |
| Interpretation bias | Catastrophizing | Cognitive reappraisal |
| Autonomic dysregulation | Sympathetic dominance | HRV biofeedback |
| Avoidance | Negative reinforcement | Exposure |

**Third-Wave Approaches:**
| Approach | Key Features |
|----------|--------------|
| ACT | Acceptance, defusion, values |
| MBSR | Present-moment awareness |
| CFT | Self-compassion, threat system |
| MCT | Meta-worry targeting |

**Technology-Enhanced Interventions:**
- Computer-based CBT
- Virtual reality exposure
- Smartphone apps
- Biofeedback devices
- AI-assisted personalization

## Treatment Algorithms

**Initial Assessment → Treatment Selection:**
1. Severity assessment (mild/moderate/severe)
2. Phenotype identification
3. Comorbidity evaluation
4. Patient preference assessment
5. Treatment matching

**Response Monitoring:**
| Timepoint | Assessment |
|-----------|------------|
| Baseline | Full battery |
| Session-by-session | Brief symptom measure |
| Midtreatment | Progress evaluation |
| Termination | Outcome assessment |
| Follow-up | Maintenance check |

## Resilience Science

**Protective Factors:**
| Factor | Description |
|--------|-------------|
| Cognitive flexibility | Ability to reappraise |
| Self-efficacy | Belief in capability |
| Social support | Available resources |
| Emotion regulation | Managing affect |
| Growth mindset | Viewing challenge as growth |

**Resilience-Building Interventions:**
- Stress inoculation training
- Challenge appraisal training
- Social support enhancement
- Success experience accumulation

## Systems-Level Approaches

**Educational Institution Interventions:**
| Level | Intervention |
|-------|-------------|
| Universal | Wellness curriculum, stress management |
| Selective | At-risk student programs |
| Indicated | Treatment for symptomatic students |

**Medical School Context:**
- High-stakes exam culture
- Competitive environment management
- Well-being curriculum integration
- Faculty development

## Research and Scholarship

**Priority Research Areas:**
- Precision treatment matching
- Mechanism studies
- Prevention science
- Technology integration
- Long-term outcomes

**Translational Applications:**
- Laboratory to clinical practice
- Efficacy to effectiveness studies
- Implementation science
- Dissemination strategies`,
      keyTerms: [
        { term: 'attention bias modification', definition: 'Computerized training to redirect attention away from threat-related stimuli' },
        { term: 'metacognitive therapy', definition: 'Approach targeting beliefs about thinking processes rather than thought content' },
        { term: 'compassion-focused therapy', definition: 'Therapy targeting self-criticism through cultivation of self-compassion' },
        { term: 'stress inoculation training', definition: 'Building resilience through graduated exposure to manageable stressors' },
        { term: 'implementation science', definition: 'Study of methods to promote integration of research findings into practice' },
      ],
      clinicalNotes: `Expert perspective on test anxiety management:

1. **Phenotype-Guided Treatment:** Identify the primary anxiety presentation (cognitive, somatic, avoidant) and match treatment accordingly. Generic approaches are less effective than targeted ones.

2. **Mechanism Focus:** Target the underlying mechanism (attention bias, interpretation bias, avoidance) rather than just symptoms. This produces more durable change.

3. **Comorbidity Consideration:** Assess for depression, ADHD, and general anxiety. Comorbid conditions require integrated treatment planning.

4. **Medication Role:** Pharmacotherapy is an adjunct, not first-line. Beta-blockers may help somatic symptoms; SSRIs for chronic severe anxiety with careful attention to side effects.

5. **Third-Wave Integration:** ACT and mindfulness approaches offer alternatives when cognitive restructuring is insufficient. Acceptance strategies particularly useful for persistent anxiety.

6. **Technology Leverage:** Evidence-based apps and computer programs can extend treatment. Consider as supplements to, not replacements for, clinical care.

7. **System-Level Thinking:** Individual treatment occurs within educational systems. Advocate for institutional changes that reduce unnecessary stress while maintaining rigor.

8. **Resilience Building:** Beyond symptom reduction, build capacity for future stress. Stress inoculation and success experiences create lasting protection.

9. **Cultural Sensitivity:** Anxiety expression and help-seeking vary culturally. Adapt assessment and treatment approaches accordingly.

10. **Outcome Tracking:** Use systematic outcome measurement. Data-driven practice improves results and identifies non-responders early.`,
    },
  },

  media: [
    {
      id: 'anxiety-performance-curve',
      type: 'diagram',
      filename: 'anxiety-performance-curve.svg',
      title: 'Yerkes-Dodson Anxiety-Performance Curve',
      description: 'Illustration of the relationship between arousal and performance',
    },
    {
      id: 'anxiety-management-techniques',
      type: 'diagram',
      filename: 'anxiety-management-techniques.svg',
      title: 'Anxiety Management Techniques',
      description: 'Visual guide to relaxation and cognitive techniques',
    },
  ],

  citations: [
    {
      id: 'test-anxiety-review',
      type: 'article',
      title: 'Test Anxiety: The State of the Art',
      authors: ['Zeidner, M.'],
      source: 'Springer Science',
      accessedDate: '2025-01-28',
    },
    {
      id: 'cbt-test-anxiety-meta-analysis',
      type: 'article',
      title: 'Cognitive-Behavioral Therapy for Test Anxiety: A Meta-Analysis',
      source: 'Educational Psychology Review',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-test-taking-strategies', targetType: 'concept', relationship: 'related', label: 'Test-Taking Strategies' },
    { targetId: 'education-effective-study-methods', targetType: 'concept', relationship: 'related', label: 'Effective Study Methods' },
    { targetId: 'mental-health-anxiety-disorders', targetType: 'condition', relationship: 'related', label: 'Anxiety Disorders' },
  ],

  tags: {
    systems: ['medical-education', 'mental-health'],
    topics: ['test anxiety', 'performance anxiety', 'stress management', 'cognitive-behavioral therapy'],
    keywords: ['exam stress', 'test anxiety', 'performance optimization', 'anxiety management', 'relaxation techniques'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default examAnxiety;
