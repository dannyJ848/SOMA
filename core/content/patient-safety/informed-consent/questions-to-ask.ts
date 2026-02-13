/**
 * Questions to Ask Before Giving Consent
 *
 * Essential questions to ensure you are fully informed before agreeing to treatment.
 */

import { EducationalContent } from '../../types';

export const questionsToAskBeforeConsent: EducationalContent = {
  id: 'concept-questions-to-ask-consent',
  type: 'concept',
  name: 'Questions to Ask Before Giving Consent',
  alternateNames: ['Consent Questions', 'Pre-Procedure Questions', 'Treatment Decision Questions'],

  levels: {
    1: {
      level: 1,
      summary: 'Before you say yes to a treatment, you should ask questions to make sure you understand what will happen.',
      explanation: `**Why Ask Questions?**
Asking questions helps you:
- Understand what will happen
- Know what could go wrong
- Make the best choice for you
- Feel more comfortable

**Important Questions to Ask:**

*About the Treatment:*
- "What exactly will you do?"
- "Why do I need this?"
- "How will this help me?"

*About Risks:*
- "What could go wrong?"
- "How often do problems happen?"
- "What would you do if something goes wrong?"

*About Other Choices:*
- "What else could we do instead?"
- "What if I do nothing?"
- "Can we wait and see?"

*About What Comes After:*
- "How will I feel afterward?"
- "How long will it take to recover?"
- "What should I watch for at home?"

**Easy Questions to Remember:**

| Question | Why It Helps |
|----------|-------------|
| What is this? | Helps you understand the treatment |
| Why do I need it? | Makes sure it is necessary |
| What are the risks? | Helps you know what could happen |
| What are my choices? | Shows you have options |

**Remember:**
- There are no silly questions
- You can ask as many as you need
- You can bring someone to help you ask
- Write down the answers`,
      keyTerms: [
        { term: 'treatment', definition: 'Something doctors do to help you feel better' },
        { term: 'risks', definition: 'Things that could go wrong' },
        { term: 'options', definition: 'Different choices you could make' },
      ],
      analogies: [
        'Asking questions before consent is like asking about the rules before playing a new game - you need to know what you are agreeing to.',
        'Questions are like a flashlight - they help you see clearly before you make a decision.',
      ],
      examples: [
        'A patient asks "What will happen if I do not have this surgery?" before deciding.',
        'Someone asks the doctor to explain the risks in simpler words until they understand.',
      ],
    },
    2: {
      level: 2,
      summary: 'Asking comprehensive questions before giving consent ensures you have the information needed to make an informed decision about your healthcare.',
      explanation: `**Framework for Consent Questions:**

Use these categories to make sure you have asked about everything important:

**Understanding the Procedure:**
- What exactly will be done?
- Who will perform it?
- How long will it take?
- Will I be awake or asleep?
- Where will it be done?

**Benefits and Goals:**
- What problem does this address?
- How likely is it to work?
- How much improvement can I expect?
- When will I see results?
- What happens if it does not work?

**Risks and Complications:**

| Question | Why Ask |
|----------|---------|
| What are the common risks? | These happen more often |
| What are the serious risks? | These are more dangerous |
| What are the rare risks? | Uncommon but possible |
| Who is at higher risk? | Factors specific to you |
| How are complications treated? | What happens if problems occur |

**Alternatives:**
- What are my other options?
- What are the pros and cons of each?
- What if I do nothing or wait?
- Is there a less invasive option?
- Can we try something else first?

**Practical Considerations:**
- What is the recovery like?
- When can I return to normal activities?
- What restrictions will I have?
- Will I need help at home?
- What follow-up is needed?

**Cost and Logistics:**
- Is this covered by insurance?
- What will my out-of-pocket costs be?
- How soon does this need to be done?
- Are there scheduling options?

**Provider Questions:**
- How often do you perform this procedure?
- What are your outcomes/complication rates?
- What is your training and experience?

**Red Flags:**
- Reluctance to answer questions
- Pressure to decide quickly
- Dismissive responses
- Inconsistent information`,
      keyTerms: [
        { term: 'complication', definition: 'A problem that develops during or after a medical procedure' },
        { term: 'prognosis', definition: 'The expected outcome or course of a condition' },
        { term: 'invasive', definition: 'A procedure that involves entering the body' },
        { term: 'informed decision', definition: 'A choice made after understanding all relevant information' },
      ],
      analogies: [
        'Asking questions before consent is like doing research before making a big purchase - you want to understand what you are getting.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive questioning before consent incorporates clinical, practical, and values-based considerations to support truly informed decision-making.',
      explanation: `## Structured Approach to Consent Questions

**Clinical Information Domains:**

*Diagnosis and Indication:*
| Question | Purpose |
|----------|---------|
| Why is this recommended for me? | Understand rationale |
| How certain is the diagnosis? | Assess diagnostic confidence |
| Is additional testing needed first? | Clarify workup completeness |
| What happens without treatment? | Understand natural history |

*Procedure Details:*
- Step-by-step description
- Duration and setting
- Anesthesia type
- Team members involved
- Technology used

*Outcomes Data:*
| Metric | Questions |
|--------|-----------|
| Success rate | How often does this work? |
| Complication rate | How often do problems occur? |
| Mortality rate | Is there a risk of death? |
| Long-term outcomes | How long do results last? |

**Risk Communication:**

*Risk Characterization:*
- Common vs. rare
- Mild vs. serious
- Temporary vs. permanent
- Reversible vs. irreversible
- Specific to you vs. general

*Personalized Risk Assessment:*
- "Given my specific situation, what is my risk?"
- "Do I have any factors that increase my risk?"
- "How does my overall health affect outcomes?"

**Alternative Analysis:**

*For Each Option:*
1. What does it involve?
2. Risks and benefits
3. Success rate
4. Recovery/lifestyle impact
5. Cost implications
6. Availability

*Watchful Waiting:*
- Criteria for intervention
- Monitoring plan
- Warning signs
- Timeline

**Values Clarification:**

*Questions to Ask Yourself:*
- What outcomes matter most to me?
- What risks am I unwilling to accept?
- How does this fit my life circumstances?
- What are my goals for treatment?

**Shared Decision-Making Questions:**

- "What would you recommend for someone like me?"
- "What would you do if you were in my situation?"
- "What do most patients choose?"
- "Is there anything else you think I should consider?"

**Quality and Safety Questions:**

- Facility accreditation
- Provider volume and outcomes
- Safety protocols
- Emergency preparedness`,
      keyTerms: [
        { term: 'risk stratification', definition: 'Assessment of individual risk based on personal factors' },
        { term: 'natural history', definition: 'How a condition progresses without treatment' },
        { term: 'values clarification', definition: 'Process of identifying what matters most to you' },
        { term: 'watchful waiting', definition: 'Monitoring a condition without immediate intervention' },
      ],
      clinicalNotes: 'Patients who ask questions and engage in shared decision-making have better outcomes and satisfaction. Providers should welcome and encourage questions.',
    },
    4: {
      level: 4,
      summary: 'Expert-level consent questioning integrates evidence-based information seeking, quality assessment, and values-based decision-making within a shared decision-making framework.',
      explanation: `## Advanced Consent Questioning Framework

**Evidence-Based Questions:**

*Evaluating Quality of Evidence:*
| Question | Assessment |
|----------|------------|
| What studies support this treatment? | Evidence base |
| How strong is the evidence? | Quality of data |
| Are there guidelines? | Consensus recommendations |
| Is this standard of care? | Practice norms |

*Understanding Statistics:*
- Absolute vs. relative risk
- Number needed to treat (NNT)
- Number needed to harm (NNH)
- Confidence intervals
- Study population applicability

**Provider Quality Assessment:**

*Individual Provider:*
- Board certification
- Fellowship training
- Procedure volume
- Outcome data
- Patient reviews

*Facility Assessment:*
- Accreditation status
- Safety record
- Volume for procedure
- ICU capabilities
- Rescue capacity

**Risk-Benefit Integration:**

\`\`\`
Benefits                     Risks
    ↓                          ↓
Probability × Magnitude   Probability × Severity
    ↓                          ↓
         Expected Value
              ↓
    Compared to Alternatives
              ↓
        Personal Values
              ↓
          Decision
\`\`\`

**Complex Decision Scenarios:**

*Preference-Sensitive Decisions:*
- Multiple clinically appropriate options
- Outcomes depend on patient values
- Require careful deliberation
- Decision aids beneficial

*Uncertainty Management:*
- "How much uncertainty is there?"
- "What might we learn with time?"
- "Can the decision be reversed?"
- "What is the worst-case scenario?"

**System Navigation:**

*Second Opinion Questions:*
- When is a second opinion valuable?
- How to obtain without damaging relationship
- Insurance coverage
- Time constraints

*Prior Authorization:*
- Is prior authorization required?
- What happens if denied?
- Appeals process
- Timing implications

**Documentation Considerations:**

- Request copy of consent discussion
- Document questions asked
- Note understanding of key points
- Record decision rationale

**Support Integration:**

*Care Partners:*
- Involving family/friends
- Assigning decision support role
- Post-procedure help
- Long-term considerations

*Resources:*
- Patient education materials
- Decision aids
- Support groups
- Additional consultations`,
      keyTerms: [
        { term: 'number needed to treat', definition: 'Number of patients who must be treated for one to benefit' },
        { term: 'preference-sensitive decision', definition: 'Decision where outcomes depend significantly on patient values' },
        { term: 'decision aid', definition: 'Tool designed to help patients make informed choices' },
        { term: 'absolute risk', definition: 'Actual probability of an event occurring' },
      ],
      clinicalNotes: 'Patient questioning improves decision quality. Providers should view questions as opportunities for engagement rather than challenges. Decision aids can structure the questioning process.',
    },
    5: {
      level: 5,
      summary: 'Optimal consent questioning reflects sophisticated understanding of evidence, individual risk assessment, system factors, and integration with personal values and circumstances.',
      explanation: `## Comprehensive Consent Questioning

**Advanced Evidence Appraisal:**

*Critical Analysis Questions:*
| Domain | Questions |
|--------|-----------|
| Study design | RCT vs. observational? |
| Population | Similar to me? |
| Outcomes | Meaningful measures? |
| Bias | Potential sources? |
| Applicability | Real-world relevance? |

*Understanding Treatment Effects:*
\`\`\`
Treatment Effect
       ↓
Average Effect ←→ Individual Variation
       ↓
Heterogeneity of Response
       ↓
Personal Prediction Factors
       ↓
My Expected Outcome
\`\`\`

**Precision Medicine Questions:**

- Does my genetic profile affect treatment?
- Are there biomarkers predicting response?
- Is this treatment personalized to me?
- What determines who responds?

**Quality Metrics Deep Dive:**

*Surgeon/Proceduralist:*
- Case volume for this procedure
- Risk-adjusted outcomes
- Complications experience
- Morbidity and mortality data
- Improvement trends

*System Quality:*
- CMS star ratings
- Leapfrog grades
- Accreditation findings
- Public reporting data
- Sentinel events

**Innovation and Research:**

- Is this experimental or established?
- Are there newer alternatives?
- Clinical trials available?
- Research institution advantages?
- Early adoption considerations?

**Health Equity Considerations:**

*Questions to Consider:*
- Are outcomes different for people like me?
- Are there disparities in care quality?
- Access and affordability issues?
- Cultural considerations?

**Long-Term Implications:**

*Future Planning:*
- Effect on future treatment options?
- Reversibility considerations?
- Long-term surveillance needs?
- Quality of life implications?
- Life planning integration?

**System and Policy:**

*Navigation Questions:*
| Area | Questions |
|------|-----------|
| Insurance | Coverage, prior auth, appeals |
| Timing | Urgency, scheduling |
| Location | Where to have procedure |
| Support | Coordination, follow-up |

**Decision Science Integration:**

*Cognitive Considerations:*
- Am I in the right state to decide?
- Do I need more time?
- Am I understanding statistics correctly?
- Are emotions affecting judgment?

*Decision Quality:*
- Have I considered all options?
- Do I understand key tradeoffs?
- Does this align with my values?
- Would I make this choice again?

**Documentation and Preparation:**

*Before the Procedure:*
- Written summary of discussion
- Key points documented
- Questions and answers recorded
- Emergency contacts identified
- Support system prepared

*For Complex Decisions:*
- Decision diary
- Values exercise completed
- Family discussion documented
- Decision rationale clear`,
      keyTerms: [
        { term: 'heterogeneity of treatment effect', definition: 'Variation in treatment response across different patients' },
        { term: 'risk-adjusted outcomes', definition: 'Outcomes accounting for patient complexity differences' },
        { term: 'precision medicine', definition: 'Treatment tailored based on individual characteristics' },
        { term: 'decision quality', definition: 'Extent to which decision reflects informed, values-consistent choice' },
      ],
      clinicalNotes: 'Expert patients ask questions that integrate evidence, quality, personal values, and system factors. Supporting this level of engagement requires provider time and skill but leads to better decision quality and outcomes.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ahrq-questions',
      type: 'website',
      title: 'Questions to Ask Your Doctor',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/patients-consumers/patient-involvement/ask-your-doctor/index.html',
    },
  ],

  crossReferences: [
    { targetId: 'concept-informed-consent', targetType: 'concept', relationship: 'related', label: 'What Informed Consent Means' },
    { targetId: 'concept-talking-to-your-doctor', targetType: 'concept', relationship: 'related', label: 'Talking to Your Doctor' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['informed-consent', 'patient-communication', 'shared-decision-making'],
    clinicalRelevance: 'critical',
    keywords: ['consent questions', 'patient questions', 'informed decision', 'shared decision-making'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default questionsToAskBeforeConsent;
