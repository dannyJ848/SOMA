/**
 * What Informed Consent Means
 *
 * Understanding the concept and importance of informed consent in healthcare.
 */

import { EducationalContent } from '../../types';

export const whatInformedConsentMeans: EducationalContent = {
  id: 'concept-informed-consent',
  type: 'concept',
  name: 'What Informed Consent Means',
  alternateNames: ['Medical Consent', 'Consent to Treatment', 'Patient Consent'],

  levels: {
    1: {
      level: 1,
      summary: 'Before doctors do something to help you, they explain it and ask if it is okay. This is called informed consent.',
      explanation: `**What Is Informed Consent?**
Informed consent means doctors tell you what they want to do and you get to say yes or no.

**What Doctors Should Tell You:**
- What they want to do
- Why they want to do it
- How it might help you
- What could go wrong
- What else you could do instead

**Your Rights:**
- You can ask questions
- You can say yes
- You can say no
- You can change your mind
- You can take time to decide

**When You Need to Give Consent:**
- Before surgery
- Before some tests
- Before taking certain medicines
- Before treatments

**How to Give Consent:**
- Listen to the explanation
- Ask questions until you understand
- Think about it
- Sign a form if you agree

**Important Words:**

| Word | What It Means |
|------|---------------|
| Consent | Saying yes |
| Informed | Having the information you need |
| Procedure | Something doctors do to help you |
| Risks | Things that could go wrong |

**Remember:**
It is your body and your choice! Never feel rushed to say yes. It is okay to ask for more time or more information.`,
      keyTerms: [
        { term: 'consent', definition: 'Saying yes or giving permission' },
        { term: 'informed', definition: 'Having all the information you need to make a decision' },
        { term: 'risks', definition: 'Things that could possibly go wrong' },
      ],
      analogies: [
        'Informed consent is like reading the rules before playing a game - you should know what you are getting into.',
        'Giving consent is like agreeing to let someone borrow something - they ask, explain how they will use it, and you decide.',
      ],
      examples: [
        'A doctor explains a surgery, including what could go wrong, and asks if you want to have it done.',
        'A patient asks questions about a procedure until they feel comfortable saying yes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Informed consent is the process of understanding and agreeing to a medical treatment or procedure after receiving complete information about it.',
      explanation: `**The Informed Consent Process:**

Informed consent is more than just signing a form - it is a conversation between you and your healthcare provider.

**Required Elements:**

| Element | What You Should Learn |
|---------|----------------------|
| Nature | What the procedure involves |
| Purpose | Why it is recommended |
| Benefits | How it may help you |
| Risks | What could go wrong |
| Alternatives | Other options available |
| Questions | Answers to your concerns |

**Types of Consent:**

*Explicit/Written:*
- Signed consent forms
- Required for surgery, invasive procedures
- Documents the conversation

*Implied:*
- Actions that indicate agreement
- Example: Extending arm for blood draw
- Used for routine, low-risk procedures

*Verbal:*
- Spoken agreement
- May be documented by provider
- Used for some medications and treatments

**Your Rights in the Consent Process:**

- Receive information in language you understand
- Have an interpreter if needed
- Take time to consider
- Ask questions
- Involve family members
- Refuse or withdraw consent

**Key Questions to Ask:**

- "What exactly will happen during this procedure?"
- "What are the most common risks?"
- "What are the most serious risks?"
- "What happens if I do not have this procedure?"
- "What are my other options?"
- "What is the recovery like?"

**When Consent May Be Different:**

*Emergency:*
- May proceed without consent if life-threatening
- Consent obtained when possible

*Minors:*
- Parent/guardian consent usually required
- Some exceptions (emancipated minors, certain treatments)

*Incapacity:*
- Surrogate decision-maker may consent
- Advance directives may guide decisions

**Red Flags:**
- Feeling pressured to sign quickly
- Not getting answers to questions
- Being told "just sign here"
- Not understanding the information`,
      keyTerms: [
        { term: 'explicit consent', definition: 'Clear, direct agreement, usually in writing' },
        { term: 'implied consent', definition: 'Agreement indicated by actions rather than words' },
        { term: 'surrogate decision-maker', definition: 'Person authorized to make decisions for someone who cannot' },
        { term: 'capacity', definition: 'Ability to understand information and make decisions' },
      ],
      analogies: [
        'Informed consent is like reading product reviews and specifications before making a major purchase - you want to know what you are getting.',
      ],
    },
    3: {
      level: 3,
      summary: 'Informed consent is a legal and ethical requirement ensuring patients make voluntary decisions based on adequate information about proposed treatments and their alternatives.',
      explanation: `## Informed Consent: Legal and Ethical Framework

**Legal Foundation:**

*Historical Development:*
- Schloendorff v. Society of NY Hospital (1914) - bodily self-determination
- Salgo v. Leland Stanford (1957) - termed "informed consent"
- Canterbury v. Spence (1972) - reasonable patient standard

*Legal Requirements:*
| Element | Standard |
|---------|----------|
| Disclosure | Material risks, benefits, alternatives |
| Understanding | Patient comprehension |
| Voluntariness | Free from coercion |
| Capacity | Ability to decide |
| Authorization | Express agreement |

**Disclosure Standards:**

*Professional Standard:*
- What a reasonable physician would disclose
- Traditional approach
- Physician determines adequacy

*Patient-Centered Standard:*
- What a reasonable patient would want to know
- Modern trend
- Patient perspective emphasized

**Capacity Assessment:**

*Four Abilities:*
1. Understanding - Grasping the information
2. Appreciation - Applying to own situation
3. Reasoning - Weighing options
4. Expression - Communicating a choice

*Capacity Considerations:*
- Decision-specific
- May fluctuate
- Not all-or-nothing
- Should be reassessed if changes

**Special Circumstances:**

| Situation | Approach |
|-----------|----------|
| Emergency | Implied consent for life-saving treatment |
| Minors | Parent/guardian consent; mature minor doctrine |
| Incapacity | Surrogate/healthcare proxy |
| Research | Additional IRB requirements |
| Therapeutic privilege | Limited exception for harm from disclosure |

**Documentation Requirements:**

*Consent Form Elements:*
- Procedure description
- Risks and benefits
- Alternatives including no treatment
- Patient questions addressed
- Signatures and witnesses
- Date and time

*Medical Record:*
- Consent discussion documented
- Patient understanding noted
- Questions and answers
- Decision-making process

**Shared Decision-Making Integration:**

\`\`\`
Provider Expertise + Patient Values = Shared Decision
         ↓               ↓                   ↓
Medical Options    Preferences/Goals    Informed Consent
\`\`\``,
      keyTerms: [
        { term: 'Canterbury standard', definition: 'Reasonable patient standard for disclosure requirements' },
        { term: 'therapeutic privilege', definition: 'Limited exception allowing withholding of information that would harm patient' },
        { term: 'shared decision-making', definition: 'Collaborative process integrating provider expertise and patient values' },
        { term: 'material risk', definition: 'Risk that would influence a reasonable persons decision' },
      ],
      clinicalNotes: 'Most states have adopted or moved toward the patient-centered (reasonable patient) standard for disclosure. Documentation should reflect the discussion, not just the signature.',
    },
    4: {
      level: 4,
      summary: 'Informed consent integrates legal requirements, ethical principles, and communication science within a framework emphasizing patient autonomy and shared decision-making.',
      explanation: `## Comprehensive Informed Consent Framework

**Ethical Principles:**

*Autonomy:*
- Self-determination
- Respect for persons
- Right to decide about own body
- Foundation of informed consent

*Beneficence and Non-maleficence:*
- Balance with patient choice
- Provider obligations
- Paternalism vs. autonomy tension

**Legal Analysis:**

*Elements of Valid Consent:*
| Element | Assessment |
|---------|------------|
| Disclosure | Adequate information provided |
| Comprehension | Patient understood |
| Voluntariness | No coercion or manipulation |
| Competence | Decision-making capacity |
| Authorization | Express agreement |

*Liability Considerations:*
- Lack of consent: Battery
- Inadequate consent: Negligence
- Documentation importance
- Causation requirements

**Communication Science:**

*Effective Disclosure:*
- Plain language
- Visual aids
- Teach-back confirmation
- Question encouragement
- Adequate time

*Barriers to Understanding:*
| Barrier | Mitigation |
|---------|------------|
| Health literacy | Plain language, visuals |
| Language | Professional interpreters |
| Cognitive impairment | Simplified info, surrogates |
| Emotional distress | Support, time, pacing |
| Time pressure | Adequate scheduling |

**Decision Aids:**

*Evidence-Based Tools:*
- Provide balanced information
- Clarify values
- Improve knowledge
- Reduce decisional conflict
- Support shared decision-making

*Implementation:*
- Integrate into workflow
- Train providers
- Measure outcomes
- Update regularly

**Special Populations:**

*Pediatric Consent:*
| Age | Approach |
|-----|----------|
| Young children | Parental consent, child assent |
| Adolescents | Increasing autonomy consideration |
| Emancipated minors | May consent independently |
| Mature minors | State-specific provisions |

*Diminished Capacity:*
- Sliding scale of scrutiny
- Supported decision-making
- Best interest standards
- Surrogate selection hierarchy

**Quality Improvement:**

*Metrics:*
- Patient comprehension
- Documentation compliance
- Adverse event correlation
- Patient satisfaction
- Shared decision-making measures

*Improvement Strategies:*
- Consent form redesign
- Provider training
- Decision aid implementation
- Time allocation
- Culture change`,
      keyTerms: [
        { term: 'decision aid', definition: 'Tool designed to help patients make informed choices' },
        { term: 'decisional conflict', definition: 'Uncertainty about which course of action to take' },
        { term: 'sliding scale', definition: 'Higher scrutiny for higher-risk decisions' },
        { term: 'supported decision-making', definition: 'Assistance that enables individuals to make their own choices' },
      ],
      clinicalNotes: 'Consent is a process, not an event. Quality improvement efforts should focus on the conversation and understanding, not just form completion. Decision aids improve consent quality when properly implemented.',
    },
    5: {
      level: 5,
      summary: 'Optimal informed consent practice integrates ethical principles, legal requirements, communication science, and patient engagement within an evolving framework addressing emerging challenges.',
      explanation: `## Advanced Perspectives on Informed Consent

**Theoretical Foundations:**

*Autonomy Framework:*
\`\`\`
Libertarian Autonomy
(Freedom from interference)
         ↓
Relational Autonomy
(Context-dependent)
         ↓
Authentic Choice
(Aligned with values)
\`\`\`

*Evolving Understanding:*
- Beyond information transfer
- Incorporating emotions
- Recognizing context
- Addressing power dynamics

**Consent Process Science:**

*Research Evidence:*
| Finding | Implication |
|---------|-------------|
| Poor recall | Need for reinforcement |
| Risk perception bias | Framing effects |
| Numeracy challenges | Visual presentation |
| Decision fatigue | Timing considerations |
| Social influence | Family involvement |

*Process Optimization:*
- Staged information delivery
- Multiple modalities
- Confirmation strategies
- Ongoing consent

**Emerging Challenges:**

*Genomic Medicine:*
- Incidental findings
- Family implications
- Uncertainty communication
- Evolving knowledge

*AI in Healthcare:*
- Algorithm transparency
- Decision support consent
- Liability questions
- Patient understanding

*Digital Health:*
- App permissions
- Data sharing
- Privacy implications
- Terms of service

**Health Equity Considerations:**

*Disparities in Consent:*
- Health literacy gaps
- Language access
- Cultural considerations
- Historical distrust
- Power imbalances

*Equity Interventions:*
- Universal precautions approach
- Professional interpreters
- Community engagement
- Trust-building
- Structural changes

**Global Perspectives:**

*International Variation:*
| Region | Approach |
|--------|----------|
| US | Patient-centered disclosure |
| UK | Montgomery standard |
| Developing nations | Variable frameworks |
| Research | International guidelines |

*Harmonization Efforts:*
- Declaration of Helsinki
- ICH-GCP guidelines
- UNESCO bioethics
- WHO guidance

**Future Directions:**

*Technology Integration:*
- Interactive consent platforms
- Video explanations
- Personalized information
- Real-time comprehension assessment

*Process Evolution:*
- Ongoing consent model
- Dynamic consent for research
- AI-assisted disclosure
- Patient-generated content

*Cultural Transformation:*
- Partnership model
- Shared accountability
- Embedded in care culture
- Quality focus

**Research Frontiers:**

*Current Investigations:*
- Optimal disclosure methods
- Technology effectiveness
- Equity interventions
- Outcome measurement

*Knowledge Gaps:*
- Long-term understanding
- Decision regret factors
- Cultural adaptation
- Implementation science`,
      keyTerms: [
        { term: 'relational autonomy', definition: 'Autonomy understood in context of relationships and social conditions' },
        { term: 'dynamic consent', definition: 'Ongoing, updateable consent particularly for research' },
        { term: 'Montgomery standard', definition: 'UK legal standard emphasizing material risks to particular patient' },
        { term: 'ongoing consent', definition: 'Continuous process of information sharing and choice throughout care' },
      ],
      clinicalNotes: 'Informed consent continues to evolve with technology and cultural expectations. The trajectory is toward more personalized, ongoing, and partnership-based approaches. Organizations should prepare for increasing expectations around transparency and patient engagement.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ama-informed-consent',
      type: 'website',
      title: 'Informed Consent',
      source: 'American Medical Association Code of Medical Ethics',
      url: 'https://www.ama-assn.org/delivering-care/ethics/informed-consent',
    },
  ],

  crossReferences: [
    { targetId: 'concept-questions-to-ask-consent', targetType: 'concept', relationship: 'related', label: 'Questions to Ask Before Consent' },
    { targetId: 'concept-right-to-refuse-treatment', targetType: 'concept', relationship: 'related', label: 'Right to Refuse Treatment' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['informed-consent', 'patient-rights', 'medical-ethics'],
    clinicalRelevance: 'critical',
    keywords: ['informed consent', 'medical consent', 'patient autonomy', 'shared decision-making'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default whatInformedConsentMeans;
