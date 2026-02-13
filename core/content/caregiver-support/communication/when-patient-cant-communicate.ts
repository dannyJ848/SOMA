/**
 * When Patient Can't Communicate - Educational Content
 *
 * Guidance for caregivers on communicating with and advocating for
 * patients who have difficulty expressing themselves.
 */

import { EducationalContent } from "../../types";

export const whenPatientCantCommunicate: EducationalContent = {
  id: "caregiver-when-patient-cant-communicate",
  type: "concept",
  name: "When Patient Can\"t Communicate",
  alternateNames: [
    "Communication Barriers",
    "Non-Verbal Patient Care",
    "Surrogate Communication",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Sometimes patients cannot tell you what they need due to illness, injury, or cognitive changes, requiring caregivers to find other ways to understand and help them.",
      explanation: `When someone cannot speak or express their needs clearly, it can be frustrating for everyone. But there are still ways to communicate and provide good care.

**Why Communication May Be Difficult**
- Stroke affecting speech
- Advanced dementia
- Being on a breathing machine
- Severe illness or sedation
- Brain injury
- End-stage disease

**Ways to Understand Their Needs**

**Watch for Signs**
- Facial expressions (grimacing, frowning)
- Body movements (restlessness, guarding)
- Sounds (moaning, crying)
- Changes in breathing
- Appetite changes
- Sleep changes

**Try Different Methods**
- Ask yes/no questions
- Use pictures or boards
- Try hand squeezes for answers
- Watch where they look
- Notice what calms or upsets them

**Meeting Basic Needs**
Always consider if they might be:
- In pain
- Hungry or thirsty
- Too hot or cold
- Need to use bathroom
- Uncomfortable (position, clothing)
- Scared or anxious

**Being Their Voice**
- Share their history and preferences with medical staff
- Remind staff of who they were before illness
- Advocate for their comfort
- Make decisions they would have wanted
- Bring familiar items and photos

**Getting Help**
- Ask about speech therapy evaluation
- Learn about communication devices
- Talk to the healthcare team about options
- Get support for yourself too`,
      keyTerms: [
        {
          term: "non-verbal communication",
          definition:
            "Ways of communicating without words, like facial expressions and body movements",
        },
        {
          term: "surrogate",
          definition:
            "A person who speaks for and makes decisions for someone who cannot speak for themselves",
        },
        {
          term: "advocate",
          definition:
            "To speak up for someone\"s needs and wishes",
        },
      ],
      analogies: [
        "Communication without words is like being a detective - you look for clues in behavior, expressions, and body language.",
        "Think of yourself as a translator - you help the medical team understand what your loved one cannot say.",
      ],
      examples: [
        "When her mom with advanced dementia moans during diaper changes, Maria learned this means she needs to go slower and use warmer water.",
        "Tom keeps a card in his dad\"s hospital room listing his preferences, like loving music and hating cold rooms.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Caring for patients who cannot communicate requires assessing non-verbal cues, using alternative communication methods, making surrogate decisions, and advocating for their comfort and preferences.",
      explanation: `**Causes of Communication Barriers**

| Condition | Communication Impact | Approach |
|-----------|---------------------|----------|
| Aphasia (stroke) | Cannot speak or understand | Speech therapy, communication boards |
| Advanced dementia | Limited verbal ability | Simple language, non-verbal cues |
| Intubation | Cannot speak | Writing, gestures, communication boards |
| Coma/sedation | No response | Assume they may hear, talk to them |
| End-stage disease | Weakness, confusion | Simple questions, comfort focus |

**Assessing Non-Verbal Communication**

**Pain Indicators**
- Facial grimacing
- Frowning or tense forehead
- Moaning or crying
- Restlessness
- Guarding body parts
- Changes in vital signs
- Withdrawal when touched

**Emotional Cues**
- Eye contact or avoidance
- Reaching or pulling away
- Muscle tension
- Facial expressions
- Breathing patterns
- Tears

**Communication Strategies**

**Simple Verbal**
- Speak slowly and clearly
- Use short sentences
- Ask yes/no questions
- Give time to respond
- Repeat if needed

**Non-Verbal Methods**
| Method | How to Use |
|--------|-----------|
| Communication board | Point to pictures/words |
| Writing | Paper and pen if able |
| Gestures | Thumbs up/down |
| Eye tracking | Look at choices |
| Hand signals | Squeeze for yes |
| Alphabet board | Spell out words |

**Surrogate Decision-Making**

**Your Role**
- Speak for them based on their known wishes
- Consider what they would have wanted
- Not what you want for them
- Share their values with medical team
- Participate in care decisions

**Gathering Information**
- Review advance directives
- Remember past conversations
- Consider their values and beliefs
- Consult other family members
- Ask "What would they say?"

**Advocating for Comfort**
- Ensure pain is assessed and treated
- Request comfort measures
- Maintain familiar routines
- Bring personal items
- Play favorite music
- Provide touch and presence`,
      keyTerms: [
        {
          term: "aphasia",
          definition:
            "Language disorder affecting speaking, understanding, reading, or writing due to brain damage",
        },
        {
          term: "intubation",
          definition:
            "Having a breathing tube in the throat, preventing speech",
        },
        {
          term: "communication board",
          definition:
            "Tool with pictures, letters, or words that patients can point to for communication",
        },
        {
          term: "surrogate decision-making",
          definition:
            "Making healthcare decisions for someone who cannot decide for themselves",
        },
      ],
      analogies: [
        "Being a surrogate is like being their voice - you speak the words they cannot say based on what you know about them.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Care for non-communicative patients requires validated pain assessment tools, augmentative communication methods, substituted judgment principles, and attention to the personhood of patients who cannot self-advocate.",
      explanation: `## Pain Assessment in Non-Communicative Patients

**Validated Tools**
| Tool | Population | Components |
|------|------------|------------|
| PAINAD | Dementia | Breathing, vocalization, facial expression, body language, consolability |
| CPOT | ICU/intubated | Facial expression, body movements, muscle tension, ventilator compliance |
| Abbey Pain Scale | Nursing home | Vocalization, facial expression, body language, behavioral/physiological changes |
| FLACC | Pediatric, cognitively impaired | Face, legs, activity, cry, consolability |

**Systematic Assessment**
1. Observe at rest
2. Observe during care/movement
3. Note changes from baseline
4. Trial of analgesia if pain suspected
5. Reassess after intervention

## Augmentative and Alternative Communication

**Low-Tech Options**
- Communication boards (pictures, words)
- Alphabet boards for spelling
- Writing tools
- Gesture systems
- Eye gaze boards

**High-Tech Options**
- Speech-generating devices
- Eye-tracking devices
- Tablets with communication apps
- Switch-activated devices
- Brain-computer interfaces (emerging)

**Speech-Language Pathology Role**
- Assessment of communication abilities
- Recommendation of appropriate systems
- Training for patient and caregivers
- Ongoing modification

## Surrogate Decision-Making Framework

**Substituted Judgment Standard**
- What would the patient decide if able?
- Based on known wishes
- Values and beliefs
- Previous statements
- Consistent with their goals

**Best Interests Standard**
- When wishes unknown
- Weighing benefits and burdens
- Quality of life considerations
- Medical recommendations

**Supported Decision-Making**
- Maximizing patient participation
- Using residual communication ability
- Involving patient to extent possible
- Respecting fluctuating capacity

## Personhood and Dignity

**Preserving Identity**
- Learning their life story
- Using their name and preferences
- Displaying meaningful photos
- Playing preferred music
- Maintaining grooming preferences
- Involving in conversations

**Communication Approaches**
- Speak to them, not about them
- Explain what you are doing
- Assume they may understand
- Provide orientation cues
- Offer choices when possible

**Environmental Considerations**
- Familiar objects
- Comfortable temperature
- Appropriate lighting
- Minimizing unnecessary noise
- Privacy protection

## Documentation

**Communication Plan**
- Effective communication methods
- Behavioral indicators
- Comfort preferences
- Known wishes
- Decision-making authority

**Care Preferences**
- Pain management approach
- Comfort measures
- Daily care routines
- Family involvement preferences
- End-of-life wishes if documented`,
      keyTerms: [
        {
          term: "PAINAD",
          definition:
            "Pain Assessment in Advanced Dementia scale, validated tool for assessing pain in non-verbal dementia patients",
        },
        {
          term: "augmentative and alternative communication (AAC)",
          definition:
            "Methods and devices that supplement or replace speech for people with communication impairments",
        },
        {
          term: "substituted judgment",
          definition:
            "Standard requiring surrogates to decide as the patient would have, based on known wishes and values",
        },
        {
          term: "best interests standard",
          definition:
            "Decision-making approach when patient wishes unknown, weighing benefits and burdens",
        },
      ],
      clinicalNotes:
        "Use validated pain assessment tools for non-verbal patients. Refer to speech-language pathology for communication assessment. Document communication methods and preferences. Support surrogate decision-makers. Maintain focus on patient personhood and dignity.",
    },
    4: {
      level: 4,
      summary:
        "Evidence-based care for non-communicative patients integrates validated assessment instruments, communication technology research, decision-making ethics, and quality metrics for surrogate support and patient-centered care.",
      explanation: `## Pain Assessment Evidence

**Tool Validation**
- PAINAD: good reliability, sensitivity to change
- CPOT: validated in ICU, detects pain during procedures
- Abbey: suitable for nursing home, moderate reliability
- No gold standard for non-communicative pain

**Implementation Challenges**
- Training requirements
- Time constraints
- Integration into workflow
- EHR documentation

**Quality Improvement**
- Pain assessment rates
- Treatment response
- Comfort measures
- Family satisfaction

## Communication Technology Research

**AAC Outcomes**
- Improved communication in selected populations
- Training intensity matters
- Family involvement critical
- Barriers to implementation

**Emerging Technologies**
- Brain-computer interfaces (research)
- Eye-tracking advancement
- AI-assisted interpretation
- Personalized device programming

**Implementation Considerations**
- Individual assessment essential
- Training for all users
- Device maintenance
- Cost and coverage issues

## Surrogate Decision-Making Research

**Surrogate Accuracy**
- Studies show moderate agreement with patient preferences
- Better for treatments previously discussed
- Values more stable than treatment preferences
- Need for better preparation

**Surrogate Burden**
- Decision-making distress documented
- Guilt and regret common
- Long-term psychological impact
- Support interventions needed

**Intervention Evidence**
- Communication aids improve understanding
- Decision aids reduce conflict
- Support programs show benefit
- Prepare surrogates early

## Ethical Framework

**Principles**
- Respect for persons (personhood)
- Beneficence (doing good)
- Non-maleficence (avoiding harm)
- Justice (fair treatment)
- Autonomy (honoring prior wishes)

**Challenges**
- Unknown preferences
- Conflicting family views
- Medical uncertainty
- Resource limitations
- Cultural considerations

**Clinical Ethics Resources**
- Ethics consultation
- Hospital ethics committees
- Palliative care teams
- Social work support

## Quality Metrics

**Patient-Centered**
- Pain assessment completion
- Comfort care provided
- Communication plan documented
- Preferences honored

**Surrogate-Centered**
- Surrogate identification
- Information provided
- Support offered
- Satisfaction measured

**System-Level**
- Staff training completion
- Protocol adherence
- Communication device availability
- Ethics consultation access`,
      keyTerms: [
        {
          term: "CPOT",
          definition:
            "Critical-Care Pain Observation Tool, validated behavioral pain assessment for ICU patients",
        },
        {
          term: "brain-computer interface",
          definition:
            "Emerging technology allowing direct communication from brain activity to external devices",
        },
        {
          term: "surrogate burden",
          definition:
            "Psychological distress experienced by those making decisions for incapacitated patients",
        },
        {
          term: "decisional regret",
          definition:
            "Distress about past decisions, common in surrogate decision-makers",
        },
        {
          term: "clinical ethics consultation",
          definition:
            "Expert guidance for resolving ethical dilemmas in patient care",
        },
      ],
      clinicalNotes:
        "Implement validated pain assessment for all non-communicative patients. Ensure access to communication devices and speech-language pathology. Support surrogate decision-makers with information and emotional support. Document communication plans. Access ethics consultation for complex cases.",
    },
    5: {
      level: 5,
      summary:
        "Research on care for non-communicative patients examines consciousness science, communication technology development, surrogate support interventions, and policy frameworks while addressing equity in access to assessment and communication resources.",
      explanation: `## Consciousness Research

**Disorders of Consciousness**
- Coma, vegetative state, minimally conscious state
- Assessment challenges
- Misdiagnosis rates
- Implications for care

**Covert Awareness**
- fMRI and EEG research
- Detection of awareness in some "unresponsive" patients
- Ethical and clinical implications
- Communication potential

**Prognostication**
- Prediction of recovery
- Biomarkers under investigation
- Implications for decision-making
- Uncertainty communication

## Communication Technology Development

**Current State**
- AAC access gaps
- Technology limitations
- Training challenges
- Cost barriers

**Emerging Technologies**
- Neural interfaces research
- AI-assisted communication
- Personalized AAC systems
- Integration with environment

**Implementation Science**
- Adoption barriers
- Training models
- Sustainability
- Equity considerations

## Surrogate Support Research

**Intervention Development**
- Preparation programs
- Decision aids
- Support during decision-making
- Post-decision support

**Outcomes Research**
- Surrogate psychological outcomes
- Decision quality
- Goal-concordant care
- Family satisfaction

**Implementation**
- Healthcare system integration
- Training for providers
- Resource allocation
- Quality measurement

## Policy Framework

**Decision-Making Authority**
- Surrogate consent laws
- Hierarchy of decision-makers
- Healthcare proxy
- Court-appointed guardians

**Communication Access**
- Insurance coverage for AAC
- Medicare/Medicaid policy
- Advocacy efforts
- Research funding

**End-of-Life**
- Advance directive legislation
- POLST programs
- Withdrawal of treatment laws
- Futility and conscience

## Health Equity

**Disparities**
- Access to AAC technology
- Pain assessment quality
- Decision-making support
- Palliative care access

**Vulnerable Populations**
- Cognitive impairment
- Communication disorders
- Limited English proficiency
- Limited family support

**Interventions**
- Technology access programs
- Cultural adaptation
- Interpreter services
- Community partnerships

## Future Directions

**Research Priorities**
- Consciousness assessment
- Communication technology
- Surrogate support
- Equity interventions

**Emerging Approaches**
- AI interpretation of behavior
- Precision medicine in prognostication
- Personalized communication systems
- Family support innovation

**Policy Advocacy**
- AAC coverage expansion
- Decision support standards
- Research funding
- Rights protection`,
      keyTerms: [
        {
          term: "minimally conscious state",
          definition:
            "Condition of severely impaired consciousness with some evidence of awareness",
        },
        {
          term: "covert awareness",
          definition:
            "Evidence of consciousness in patients who appear unresponsive, detected by neuroimaging",
        },
        {
          term: "neural interface",
          definition:
            "Technology connecting brain activity directly to external devices for communication or control",
        },
        {
          term: "AAC access",
          definition:
            "Ability to obtain and use augmentative and alternative communication devices and services",
        },
        {
          term: "surrogate preparation",
          definition:
            "Interventions helping potential decision-makers understand their role before crises",
        },
      ],
      clinicalNotes: `Systems implementation:
1. Implement validated assessment tools for pain and communication
2. Ensure access to AAC evaluation and devices
3. Develop surrogate support programs
4. Address equity in communication technology access
5. Integrate ethics consultation resources
6. Research emerging consciousness assessment methods`,
    },
  },

  media: [
    {
      id: "non-verbal-communication-guide",
      type: "diagram",
      filename: "non-verbal-cues-assessment.svg",
      title: "Assessing Non-Verbal Cues",
      description: "Visual guide to interpreting behavior in non-communicative patients",
    },
  ],

  citations: [
    {
      id: "painad-tool",
      type: "article",
      title: "Development and Psychometric Evaluation of the PAINAD Scale",
      source: "Journal of the American Medical Directors Association",
    },
    {
      id: "asha-aac",
      type: "website",
      title: "Augmentative and Alternative Communication",
      source: "American Speech-Language-Hearing Association",
      url: "https://www.asha.org/public/speech/disorders/aac/",
    },
  ],

  crossReferences: [
    {
      targetId: "caregiver-difficult-conversations",
      targetType: "concept",
      relationship: "related",
      label: "Difficult Conversations",
    },
    {
      targetId: "caregiver-healthcare-proxy",
      targetType: "concept",
      relationship: "related",
      label: "Healthcare Proxy",
    },
    {
      targetId: "caregiver-caring-for-dementia-patients",
      targetType: "concept",
      relationship: "related",
      label: "Caring for Dementia Patients",
    },
  ],

  tags: {
    systems: ["caregiver-support"],
    topics: [
      "communication",
      "non-verbal",
      "surrogate decision-making",
      "pain assessment",
      "advocacy",
    ],
    clinicalRelevance: "critical",
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default whenPatientCantCommunicate;
