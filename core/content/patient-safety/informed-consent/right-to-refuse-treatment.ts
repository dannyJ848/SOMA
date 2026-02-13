/**
 * Right to Refuse Treatment
 *
 * Understanding your right to decline medical treatment.
 */

import { EducationalContent } from '../../types';

export const rightToRefuseTreatment: EducationalContent = {
  id: 'concept-right-to-refuse-treatment',
  type: 'concept',
  name: 'Right to Refuse Treatment',
  alternateNames: ['Treatment Refusal', 'Declining Medical Care', 'Patient Autonomy'],

  levels: {
    1: {
      level: 1,
      summary: 'You have the right to say no to medical treatment. Doctors have to respect your choice.',
      explanation: `**Your Right to Say No:**
Even when doctors think a treatment is good for you, you can still say no. This is your right!

**When You Might Say No:**
- The treatment scares you
- You do not think it will help
- You want to try something else first
- Your beliefs do not allow it
- You just do not want it

**What Happens When You Say No:**

*The Doctor Should:*
- Listen to your reasons
- Explain what might happen if you say no
- Respect your decision
- Not make you feel bad
- Offer other options if possible

*You Should:*
- Tell the doctor why you are saying no
- Ask questions about what might happen
- Make sure you understand
- You can change your mind later

**Things to Know:**
- Saying no does not mean the doctor will stop helping you
- You can still get other care
- You can ask for a different treatment
- You can always ask for more time to think

**When It Is Harder to Say No:**
- If saying no would hurt someone else
- If you cannot make decisions for yourself
- In some emergencies

**Remember:**
It is YOUR body and YOUR choice. Good doctors will respect that!`,
      keyTerms: [
        { term: 'refuse', definition: 'To say no to something' },
        { term: 'treatment', definition: 'Medical care to help you get better' },
        { term: 'respect', definition: 'To honor what someone else wants' },
      ],
      analogies: [
        'Refusing treatment is like saying "no thank you" to food you do not want - it is your choice to make.',
        'Your right to refuse is like having the final say about what happens in your own home.',
      ],
      examples: [
        'A patient decides not to have surgery and the doctor explains what to watch for instead.',
        'Someone asks for time to think about a treatment before deciding.',
      ],
    },
    2: {
      level: 2,
      summary: 'The right to refuse treatment is a fundamental patient right. Understanding this right and how to exercise it helps you maintain control over your healthcare.',
      explanation: `**The Foundation of Refusal Rights:**

The right to refuse treatment comes from your right to control what happens to your own body. This is called bodily autonomy.

**Legal Basis:**
- Constitutional protections
- Common law rights
- State statutes
- Professional ethics

**Your Right Includes:**

| You Can Refuse | Even If |
|----------------|---------|
| Surgery | It could save your life |
| Medications | Doctor recommends them |
| Tests | Results might be important |
| Blood transfusions | For religious reasons |
| Life support | At end of life |

**Requirements for Valid Refusal:**

*You Must:*
- Be informed of consequences
- Have decision-making capacity
- Make decision voluntarily
- Not be under undue pressure

**The Process:**

*When You Want to Refuse:*
1. Express your decision clearly
2. Understand what might happen
3. Ask about alternatives
4. You may be asked to sign a form
5. Your care continues in other ways

**What Providers Must Do:**
- Explain risks of refusing
- Document your decision
- Respect your choice
- Offer alternatives
- Continue other care

**Situations with Limitations:**

*Treatment May Proceed Despite Refusal:*
- Imminent danger to others (contagious disease)
- Court-ordered treatment
- Some emergency situations
- When lacking decision-making capacity

*Minors:*
- Parents usually decide for children
- Courts may override for life-saving treatment
- Some exceptions for mature minors

**Against Medical Advice (AMA):**

If you want to leave the hospital against advice:
- You have this right if you have capacity
- Risks will be explained
- You may sign an AMA form
- You can still get follow-up care

**Changing Your Mind:**
- You can agree to treatment you previously refused
- You can withdraw consent during a procedure
- Decisions are not permanent`,
      keyTerms: [
        { term: 'bodily autonomy', definition: 'Your right to control what happens to your own body' },
        { term: 'decision-making capacity', definition: 'Ability to understand and make informed choices' },
        { term: 'against medical advice (AMA)', definition: 'Leaving healthcare setting despite provider recommendation to stay' },
        { term: 'informed refusal', definition: 'Declining treatment after understanding the consequences' },
      ],
      analogies: [
        'Your right to refuse treatment is like having veto power over decisions about your own body.',
      ],
    },
    3: {
      level: 3,
      summary: 'The right to refuse treatment is grounded in constitutional liberty, common law, and bioethics principles, requiring providers to respect patient autonomy while ensuring informed decision-making.',
      explanation: `## Legal and Ethical Framework for Treatment Refusal

**Constitutional Basis:**
- 14th Amendment liberty interests
- Right to privacy
- Religious freedom (1st Amendment)
- Cruzan v. Director (1990) - constitutional right to refuse treatment

**Common Law Foundation:**
- Battery: Unauthorized touching
- Informed consent doctrine
- Self-determination principle

**Elements of Valid Refusal:**

| Element | Assessment |
|---------|------------|
| Information | Consequences understood |
| Capacity | Able to decide |
| Voluntariness | Free from coercion |
| Specificity | Clear what is refused |

**Capacity Standards:**

*Four Abilities:*
1. Understanding relevant information
2. Appreciating situation and consequences
3. Reasoning about options
4. Expressing a choice

*Capacity Considerations:*
- Decision-specific
- May fluctuate
- Not determined by diagnosis alone
- Not determined by outcome of decision

**Provider Obligations:**

*Documentation Requirements:*
- Discussion of risks documented
- Patient understanding noted
- Capacity assessment if relevant
- Decision clearly recorded
- Alternatives offered

*Ongoing Care:*
- Continue non-refused treatments
- Offer alternatives
- Maintain relationship
- Revisit decision if circumstances change

**Special Circumstances:**

| Situation | Approach |
|-----------|----------|
| Religious refusal | Respect, document |
| Psychiatric patient | Capacity assessment |
| Pregnant patient | State interests may apply |
| Minor | Parental authority, state interests |
| Emergency | May proceed if unable to refuse |

**Limitations on Refusal:**

*State Interests:*
- Preserving life
- Preventing suicide
- Protecting third parties
- Maintaining medical profession integrity

*When Courts May Intervene:*
- Minor children
- Pregnant women (varies by jurisdiction)
- Contagious disease public health threat
- Involuntary psychiatric commitment

**Against Medical Advice:**

*Process:*
1. Capacity verification
2. Risk discussion
3. Alternative options
4. Documentation
5. AMA form (optional)
6. Follow-up offered

*Note: AMA does not eliminate insurance coverage despite myths*`,
      keyTerms: [
        { term: 'Cruzan v. Director', definition: 'Supreme Court case recognizing constitutional right to refuse treatment' },
        { term: 'state interests', definition: 'Government concerns that may limit individual rights in some circumstances' },
        { term: 'involuntary commitment', definition: 'Court-ordered psychiatric treatment without patient consent' },
        { term: 'parens patriae', definition: 'State authority to protect those who cannot protect themselves' },
      ],
      clinicalNotes: 'Provider obligation is to ensure informed refusal, not to override patient choice. Documentation should focus on the process of informing, not convincing.',
    },
    4: {
      level: 4,
      summary: 'Treatment refusal rights reflect the balance between autonomy and beneficence, requiring sophisticated assessment of capacity, documentation, and navigation of complex ethical terrain.',
      explanation: `## Comprehensive Treatment Refusal Framework

**Ethical Analysis:**

*Autonomy vs. Beneficence:*
\`\`\`
Patient Choice ←→ Provider Judgment
      ↓                  ↓
  Autonomy          Beneficence
      ↓                  ↓
Refusal Right    Duty to Recommend
      ↓                  ↓
      Informed Refusal
\`\`\`

*When Values Conflict:*
- Respect for persons primary
- Paternalism limited
- Provider conscience rights
- Relationship maintenance

**Capacity Assessment:**

*Structured Approach:*
| Component | Assessment Method |
|-----------|-------------------|
| Understanding | Teach-back, questioning |
| Appreciation | Applying to self |
| Reasoning | Weighing, comparisons |
| Expression | Clear communication |

*Documentation:*
- Specific to decision at hand
- Note clinical circumstances
- Describe assessment method
- Record findings objectively
- Consider consultation if uncertain

**Challenging Scenarios:**

*High-Stakes Refusal:*
- Life-threatening situation
- Clear capacity
- Informed refusal
- Provider distress
- Ethics consultation often helpful

*Fluctuating Capacity:*
- Serial assessments
- Timing of decisions
- Surrogate involvement
- Documentation challenges

*Questionable Voluntariness:*
- Family pressure
- Provider influence
- Financial factors
- Undue influence assessment

**Provider Response:**

*When Patient Refuses:*
1. Understand reasons
2. Address concerns if possible
3. Ensure truly informed
4. Explore alternatives
5. Document thoroughly
6. Respect decision
7. Maintain care relationship

*When Provider Disagrees:*
- Cannot abandon patient
- May transfer care in some cases
- Conscience clause considerations
- Ethics consultation helpful

**System Considerations:**

*Policy Elements:*
- Refusal documentation procedures
- Capacity assessment protocols
- Ethics consultation availability
- Risk management involvement

*Quality Measures:*
- Informed refusal rates
- Documentation compliance
- Ethics consultation utilization
- Patient satisfaction

**Medico-Legal Considerations:**

*Liability Protection:*
- Thorough documentation
- Informed refusal evidence
- Capacity assessment
- Alternatives offered
- Ongoing care provided

*Risk Areas:*
- Inadequate information
- Capacity not assessed
- Coercion or pressure
- Abandonment`,
      keyTerms: [
        { term: 'informed refusal', definition: 'Declining treatment after receiving and understanding relevant information' },
        { term: 'fluctuating capacity', definition: 'Decision-making ability that varies over time' },
        { term: 'undue influence', definition: 'Improper pressure affecting voluntary decision-making' },
        { term: 'conscience clause', definition: 'Legal protection for providers refusing to participate in certain procedures' },
      ],
      clinicalNotes: 'The goal is ensuring truly informed, voluntary, capacitated decisions - not changing the decision. Provider discomfort with patient choices should not translate to coercion.',
    },
    5: {
      level: 5,
      summary: 'Optimal management of treatment refusal integrates legal requirements, ethical principles, clinical judgment, and respect for persons within a framework supporting authentic autonomous choice.',
      explanation: `## Advanced Perspectives on Treatment Refusal

**Theoretical Framework:**

*Autonomy Concepts:*
\`\`\`
Libertarian Autonomy
(Freedom from interference)
         ↓
Kantian Autonomy
(Rational self-legislation)
         ↓
Relational Autonomy
(Context-dependent)
         ↓
Authentic Choice
(Values-consistent)
\`\`\`

**Deep Dive: Capacity Assessment**

*Research Evidence:*
| Finding | Implication |
|---------|-------------|
| Outcome bias exists | Guard against judging by decision |
| Context matters | Assess in optimal conditions |
| Reliability varies | Use structured tools |
| Values inform choice | Cannot judge values as wrong |

*Assessment Tools:*
- MacArthur Competence Assessment Tool (MacCAT)
- Aid to Capacity Evaluation (ACE)
- CURVES for ED settings
- Structured clinical interview

**Complex Ethical Terrain:**

*Contested Scenarios:*
| Scenario | Considerations |
|----------|----------------|
| Jehovah's Witness refusing blood | Deep values, capacity usually clear |
| Anorexia refusing feeding | Capacity may be affected by illness |
| Depressed patient refusing | Distinguish values from disorder |
| Addiction affecting choice | Capacity vs. coercion complexity |

*Resolution Approaches:*
- Ethics consultation
- Psychiatric consultation
- Time and support
- Clarification of values
- Procedural approach

**Health Equity and Refusal:**

*Disparities:*
- Historical distrust affecting refusal
- Cultural factors in decision-making
- Language access issues
- Power imbalances

*Equity-Focused Approach:*
- Cultural humility
- Trust-building
- Community engagement
- Addressing structural factors

**Global and Cultural Perspectives:**

*Variation:*
| Region | Approach |
|--------|----------|
| US | Strong autonomy emphasis |
| Europe | Variable by country |
| Asia | Family-centered models |
| Indigenous | Community considerations |

*Respect for Difference:*
- Understand cultural context
- Avoid assumptions
- Flexible approaches
- Interpreter services

**Research and Evidence:**

*Current Knowledge:*
- Refusal often based on values
- Provider response affects relationship
- Documentation quality varies
- Outcomes data limited

*Knowledge Gaps:*
- Long-term outcomes
- Optimal communication
- Cultural adaptation
- System factors

**Future Directions:**

*Evolution:*
- Greater autonomy emphasis
- Shared decision-making integration
- Technology applications
- Cultural adaptation

*Challenges:*
- Resource constraints
- System pressures
- Provider training
- Policy development

**Ethics Consultation Role:**

*Indications:*
- Stakeholder conflict
- High-stakes decisions
- Capacity uncertainty
- Provider distress
- Novel situations

*Process:*
- Clarify facts
- Identify ethical issues
- Explore options
- Facilitate communication
- Recommend approach`,
      keyTerms: [
        { term: 'relational autonomy', definition: 'Autonomy understood in context of relationships and social conditions' },
        { term: 'MacCAT', definition: 'Structured research tool for capacity assessment' },
        { term: 'outcome bias', definition: 'Tendency to judge capacity based on treatment decision' },
        { term: 'procedural approach', definition: 'Fair process for reaching decisions in complex situations' },
      ],
      clinicalNotes: 'Excellence in managing treatment refusal requires integrating legal requirements with ethical sensitivity and cultural humility. The goal is supporting authentic autonomous choice, not simply respecting any expressed preference.',
    },
  },

  media: [],

  citations: [
    {
      id: 'beauchamp-autonomy',
      type: 'textbook',
      title: 'Principles of Biomedical Ethics',
      authors: ['Beauchamp, T.L.', 'Childress, J.F.'],
      source: 'Oxford University Press',
    },
  ],

  crossReferences: [
    { targetId: 'concept-informed-consent', targetType: 'concept', relationship: 'related', label: 'What Informed Consent Means' },
    { targetId: 'concept-advance-directives', targetType: 'concept', relationship: 'related', label: 'Advance Directives' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['informed-consent', 'patient-rights', 'medical-ethics'],
    clinicalRelevance: 'critical',
    keywords: ['treatment refusal', 'patient autonomy', 'informed refusal', 'medical ethics'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rightToRefuseTreatment;
