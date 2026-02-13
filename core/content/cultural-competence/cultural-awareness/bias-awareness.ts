// Using custom content structure for cultural competence modules


export const biasAwarenessContent = {
  id: 'bias-awareness',
  title: 'Bias Awareness',
  category: 'cultural-awareness',
  description: 'Recognizing and addressing implicit biases in healthcare practice.',
  levels: [
    {
      level: 1,
      title: 'Understanding Implicit Bias',
      description: 'Learn what implicit bias is and how it affects healthcare.',
      keyPoints: [
        'Definition of implicit bias',
        'Automatic vs. conscious thoughts',
        'Impact on clinical decision-making',
        'Universality of implicit bias'
      ],
      content: `
Implicit bias refers to unconscious associations or attitudes that affect our understanding, actions, and decisions.

**Key Characteristics:**

- **Unconscious**: Operates below awareness
- **Automatic**: Happens quickly without intentional thought
- **Universal**: Everyone has implicit biases
- **Malleable**: Can be changed with awareness and effort

**How It Forms:**
Implicit biases develop through:
- Life experiences and exposure
- Media representations
- Social and cultural conditioning
- Institutional structures

**Impact in Healthcare:**

Implicit bias affects:
- Pain assessment and treatment
- Diagnostic decisions
- Treatment recommendations
- Communication style
- Patient trust and satisfaction

**Research Findings:**
- Black patients are 40% less likely to receive pain medication than white patients
- Women's heart attacks are often misdiagnosed
- Non-English speakers receive less preventive care
- Overweight patients report more negative encounters

**Important:**
Having implicit bias doesn't make someone a bad person. What matters is awareness and active effort to counteract its effects.

Acknowledging bias is the first step toward providing equitable care.
      `,
      reflectionQuestions: [
        'What is one thing you learned about implicit bias that surprised you?',
        'Why is it important to understand that everyone has implicit bias?',
        'How might implicit bias affect your clinical practice?'
      ]
    },
    {
      level: 2,
      title: 'Types of Healthcare Bias',
      description: 'Explore common forms of bias that affect healthcare delivery.',
      keyPoints: [
        'Racial and ethnic bias',
        'Gender bias',
        'Age bias',
        'Weight bias and others'
      ],
      content: `
Understanding different types of bias helps recognize their impact on patient care.

**Racial and Ethnic Bias:**

Examples:
- Assuming certain groups are non-compliant
- Underestimating pain in patients of color
- Providing less information to minority patients
- Stereotyping about health behaviors

Impact: Black Americans have higher mortality rates for most conditions, even when controlling for income and education.

**Gender Bias:**

Examples:
- Dismissing women's pain as emotional
- Attributing symptoms to anxiety rather than physical causes
- Taking men's symptoms more seriously
- Longer diagnostic timelines for women

Impact: Women are diagnosed with heart disease 7-10 years later than men, on average.

**Age Bias (Ageism):**

Examples:
- Talking down to older patients
- Assuming symptoms are "just normal aging"
- Not offering aggressive treatment to elderly patients
- Excluding older adults from clinical conversations

Impact: Ageism is associated with worse health outcomes and shorter lifespan.

**Weight Bias:**

Examples:
- Blaming all health issues on weight
- Providing less thorough exams for heavier patients
- Assuming lack of willpower or motivation
- Negative attitudes and demeanor

Impact: Patients with obesity often delay or avoid healthcare due to stigma.

**Other Common Biases:**
- **LGBTQ+ bias**: Assumptions about sexual behavior or gender identity
- **Language bias**: Treating non-native speakers as less intelligent
- **Socioeconomic bias**: Judgments about lifestyle or priorities
- **Ability bias**: Underestimating quality of life for disabled patients
- **Religious bias**: Assumptions about health beliefs

**Intersectionality:**
Patients may face multiple overlapping biases that compound their experience of healthcare.
      `,
      reflectionQuestions: [
        'Which types of bias are most common in your specialty or setting?',
        'How might intersecting identities affect a patient\'s experience?',
        'Have you observed any of these biases in your workplace?'
      ],
      exercises: [
        'Identify three types of bias most relevant to your patient population',
        'Reflect on a recent patient interaction where bias may have played a role',
        'Research one health disparity affecting a population you serve'
      ]
    },
    {
      level: 3,
      title: 'Recognizing Personal Bias',
      description: 'Develop skills to identify your own implicit biases.',
      keyPoints: [
        'Self-assessment tools',
        'Pattern recognition',
        'Trigger identification',
        'Feedback-seeking'
      ],
      content: `
Recognizing personal bias requires intentional self-awareness and ongoing assessment.

**Implicit Association Tests (IAT):**

The Harvard IAT measures automatic associations between concepts:
- Race and weapons
- Gender and science/career
- Weight and good/bad
- Sexuality and straight/gay
- Many others available

Taking IATs can reveal biases you didn't know you had.

**Pattern Recognition:**

Look for patterns in your practice:
- Which patients do you feel most comfortable with?
- Which patients do you spend more/less time with?
- Whose pain do you treat more aggressively?
- Whose questions do you dismiss?
- Whose non-adherence do you accept vs. challenge?

**Identifying Triggers:**

Common bias triggers:
- Time pressure
- Complex patients
- Communication barriers
- Behaviors that seem unfamiliar
- Patients who question recommendations

**Seeking Feedback:**

Ask colleagues to observe you:
- "Did you notice any patterns in how I interacted with different patients?"
- "Do I spend equal time with all patients?"
- "Are there communication patterns I should address?"

**Daily Awareness Practice:**

After each patient encounter, ask:
1. What assumptions did I make?
2. Did I treat this patient differently than others?
3. What made me feel positively or negatively about this interaction?
4. Would my approach change if the patient were a different race, gender, or size?

**Warning:**
The goal is not to eliminate bias entirely (impossible) but to increase awareness and create strategies to counteract bias effects.
      `,
      reflectionQuestions: [
        'What patterns have you noticed in your own patient interactions?',
        'When are you most likely to make quick judgments about patients?',
        'How comfortable are you with the idea that you have biases?'
      ],
      exercises: [
        'Complete 3 Harvard Implicit Association Tests',
        'Keep a bias awareness journal for 2 weeks',
        'Ask a trusted colleague for feedback on potential bias patterns',
        'Identify your top 5 bias triggers'
      ]
    },
    {
      level: 4,
      title: 'Countering Bias in Practice',
      description: 'Learn strategies to mitigate the impact of bias on clinical decisions.',
      keyPoints: [
        'Interruption techniques',
        'Decision-making protocols',
        'Standardized approaches',
        'Accountability systems'
      ],
      content: `
Once aware of bias, you can develop strategies to counteract its effects on clinical care.

**Bias Interruption Techniques:**

1. **Pause Before Decisions**
   - Take 10 seconds before prescribing or diagnosing
   - Ask: "Would I make the same decision if this patient were white/male/thin?"
   - Consider alternative explanations

2. **Evidence-Based Guidelines**
   - Use standardized protocols when available
   - Check clinical guidelines before subjective decisions
   - Avoid "clinical intuition" for high-stakes decisions

3. **Data-Driven Assessment**
   - Use objective measures (scores, tests) rather than impressions
   - Document justification for subjective assessments
   - Consider diagnostic checklists for complex cases

4. **Perspective-Taking**
   - "What would I want if this were my family member?"
   - "What concerns might this patient have that I'm not addressing?"

**Structural Strategies:**

1. **Decision Support Tools**
   - Clinical pathways that reduce subjectivity
   - Electronic health record alerts
   - Standardized order sets

2. **Second Opinions**
   - Routinely consult colleagues for complex cases
   - Case conferences with diverse perspectives
   - Implicit bias consultation teams

3. **Communication Practices**
   - Use scripts for difficult conversations
   - Teach-back method for all patients
   - Standardized discharge instructions

4. **Environment Changes**
   - Diverse imagery in waiting areas
   - Multilingual materials readily available
   - Staff diversity and training

**Accountability Mechanisms:**

- Regular review of practice patterns by demographic
- Peer observation and feedback
- Patient outcome tracking by groups
- Anonymous reporting systems

**Example Protocol for Pain Management:**
1. Use standardized pain scale for all patients
2. Document objective findings
3. Follow medication guidelines regardless of patient characteristics
4. Reassess and document response
5. If undertreating, explicitly consider why

Remember: You can't eliminate bias, but you can change how it affects your practice.
      `,
      reflectionQuestions: [
        'Which bias counter-strategies feel most feasible in your practice?',
        'What barriers exist to implementing bias-interruption techniques?',
        'How can you hold yourself accountable for equitable care?'
      ],
      exercises: [
        'Create a personal "bias interruption checklist" for clinical decisions',
        'Practice the "pause technique" for one week',
        'Implement one standardized protocol in your practice',
        'Identify an accountability partner for bias awareness'
      ]
    },
    {
      level: 5,
      title: 'Creating Anti-Bias Systems',
      description: 'Develop institutional approaches to address bias at the system level.',
      keyPoints: [
        'Organizational assessment',
        'Policy development',
        'Training programs',
        'Quality improvement'
      ],
      content: `
Addressing bias requires organizational commitment and systemic approaches beyond individual practice.

**Organizational Assessment:**

1. **Data Analysis**
   - Review outcomes by race, ethnicity, gender, language
   - Analyze patient experience scores by demographic
   - Track referral patterns and diagnostic timelines
   - Monitor staffing and promotion diversity

2. **Policy Review**
   - Examine existing policies for bias implications
   - Identify gaps in equitable care protocols
   - Assess diversity and inclusion policies
   - Review hiring and promotion practices

3. **Culture Assessment**
   - Survey staff on belonging and inclusion
   - Assess leadership diversity
   - Evaluate reporting and accountability systems
   - Understand patient community perceptions

**System-Level Interventions:**

1. **Standardized Protocols**
   - Develop evidence-based clinical pathways
   - Create bias-interruption checklists
   - Implement diagnostic decision support
   - Standardize treatment across demographic groups

2. **Diverse Workforce Development**
   - Pipeline programs for underrepresented groups
   - Bias training for all staff (including leadership)
   - Mentorship and sponsorship programs
   - Inclusive hiring and promotion practices

3. **Community Partnerships**
   - Engage community advisory boards
   - Partner with local cultural organizations
   - Conduct community health assessments
   - Co-design programs with community input

4. **Quality Improvement**
   - Equity dashboards and public reporting
   - Disparities quality improvement projects
   - Regular equity audits
   - Accountability metrics tied to outcomes

**Training Program Design:**

Effective bias training should:
- Be ongoing, not one-time
- Include all staff levels
- Focus on skill-building, not just awareness
- Provide safe practice opportunities
- Include accountability mechanisms
- Be evaluated for effectiveness

**Implementation Framework:**

1. **Assess**: Understand current state and disparities
2. **Commit**: Leadership publicly prioritizes equity
3. **Educate**: Train all staff on bias and mitigation
4. **Standardize**: Implement evidence-based protocols
5. **Measure**: Track equity metrics and outcomes
6. **Improve**: Continuous quality improvement

**Success Metrics:**

- Reduced outcome disparities
- Improved patient satisfaction across groups
- Increased workforce diversity
- Higher staff cultural humility scores
- Reduced bias incident reports

Organizations that systematically address bias see improved outcomes for all patients, not just marginalized groups.

Creating anti-bias systems is ongoing work, not a one-time initiative.
      `,
      reflectionQuestions: [
        'What is your organization currently doing to address bias?',
        'Where are the biggest gaps in equity efforts?',
        'What role can you play in advancing anti-bias systems?'
      ],
      exercises: [
        'Conduct an organizational equity assessment',
        'Propose a bias-interruption protocol for your department',
        'Design a bias training program for your setting',
        'Develop equity metrics for your organization'
      ]
    }
  ]
};
