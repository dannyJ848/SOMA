/**
 * What Is Informed Consent - Patient Safety Educational Content
 *
 * Explains the fundamental principles and process of informed consent
 * in healthcare settings.
 */

import { EducationalContent } from '../../types';

export const whatIsInformedConsentContent: EducationalContent = {
  id: 'patient-safety-what-is-informed-consent',
  type: 'concept',
  name: 'What Is Informed Consent',
  alternateNames: ['Informed Consent Process', 'Medical Consent', 'Treatment Consent'],

  levels: {
    1: {
      level: 1,
      summary: 'Informed consent means you understand your medical care before agreeing to it. It helps you make choices that are right for you.',
      explanation: `What Is Informed Consent?

Informed consent means:
1. You understand what the doctor wants to do
2. You know the good things that could happen
3. You know the bad things that could happen
4. You know about other choices
5. You agree freely without pressure

Why Informed Consent Matters

When you truly understand:
- You can make the best choice for you
- You know what to expect
- You feel more confident
- You are part of your own care team

What Your Doctor Should Tell You

1. What is wrong (your diagnosis)
2. What treatment they suggest
3. How the treatment helps
4. What could go wrong (risks)
5. Other ways to treat the problem
6. What happens if you do nothing

You Can Ask Questions

Do not be afraid to ask:
- "Can you explain that again?"
- "What does that word mean?"
- "Are there other choices?"
- "What would you do if it were you?"
- "Can I have time to think about it?"

You Can Say No

Remember:
- You can refuse any treatment
- You can change your mind later
- You can get a second opinion
- It is your body and your choice

The Consent Form

A consent form:
- Shows you were told the information
- Shows you agreed
- Does NOT replace the conversation
- You should understand before you sign

If You Do Not Understand

Tell your doctor:
- "I do not understand"
- "Please use simpler words"
- "Can you write this down for me?"
- "I want someone else here to help me understand"

Your doctor should explain until you feel comfortable with your decision.`,

      keyTerms: [
        { term: 'informed consent', definition: 'Agreement to treatment after understanding what will happen' },
        { term: 'diagnosis', definition: 'The name for what is wrong with your health' },
        { term: 'treatment', definition: 'Medical care to help you get better' },
        { term: 'risk', definition: 'Something bad that could happen' },
        { term: 'benefit', definition: 'Something good that could happen' }
      ],

      analogies: [
        'Informed consent is like agreeing to let someone fix your car after they explain what is broken and what they will do.',
        'It is like signing a permission slip for a school field trip - you need to know where your child is going and what they will do.'
      ],

      examples: [
        'Before surgery, your doctor explains the operation, how it helps, and possible problems like infection.',
        'Your doctor suggests a new medicine and explains side effects so you can decide if benefits are worth the risks.',
        'You are asked to join a research study. They explain it is experimental and you might get a placebo instead of real treatment.'
      ]
    },

    2: {
      level: 2,
      summary: 'Informed consent is a process ensuring patients understand and voluntarily agree to medical treatment after receiving complete information about benefits, risks, and alternatives.',
      explanation: `Understanding Informed Consent

Informed consent is both an ethical obligation and a legal requirement in healthcare. It represents respect for patient autonomy and ensures patients can make informed decisions about their care.

Elements of Informed Consent

Required Information:
- Nature of the proposed treatment or procedure
- Purpose and expected benefits
- Material risks and potential complications
- Reasonable alternatives (including no treatment)
- Consequences of refusing treatment
- Prognosis with and without treatment

Process Requirements:
- Disclosure in understandable language
- Opportunity to ask questions
- Assessment of patient understanding
- Voluntary agreement without coercion
- Documentation of the process

Legal Foundation

The concept emerged from case law establishing that:
- Patients have the right to self-determination
- Physicians must disclose material information
- Failure to obtain proper consent can constitute battery or negligence
- Standards vary by jurisdiction (professional vs patient standard)

Capacity and Consent

For consent to be valid, the patient must have capacity:
- Ability to understand relevant information
- Appreciation of the situation and consequences
- Ability to reason through options
- Ability to communicate a choice

If capacity is impaired:
- Surrogate decision-maker may be needed
- Emergency exceptions may apply
- Assessment of decision-making ability required

Special Situations

Emergency Care:
- Implied consent when patient cannot consent
- Life-threatening situations
- Attempt to obtain consent from surrogate when possible

Therapeutic Privilege:
- Rare exception where disclosure might harm patient
- Generally discouraged
- Must be carefully documented

Waiver:
- Patient may choose not to be informed
- Must be voluntary and documented
- General waiver not valid for specific procedures

Obtaining Consent

Best Practices:
- Begin with open discussion
- Use plain language
- Provide written materials
- Use teach-back to confirm understanding
- Allow time for questions
- Include family if patient wishes
- Document the conversation

Documentation:
- What was discussed
- Questions asked and answered
- Patient understanding confirmed
- Decision made voluntarily
- Signature obtained

Revoking Consent

Patients have the right to:
- Withdraw consent at any time
- Change their mind after initially agreeing
- Refuse even previously agreed-to treatment
- Leave against medical advice (with understanding of risks)

Electronic Consent

Modern approaches include:
- Electronic signature capture
- Video explanations
- Interactive decision aids
- Remote consent processes
- Digital documentation

Cultural Considerations

Communication styles vary:
- Family-centered decision-making
- Language barriers
- Health literacy levels
- Trust in medical system
- Religious or cultural beliefs

Respecting diversity:
- Use professional interpreters
- Adapt to cultural preferences
- Respect family involvement wishes
- Be aware of health literacy
- Address barriers to understanding`,

      keyTerms: [
        { term: 'informed consent', definition: 'Process ensuring patient understands and voluntarily agrees to medical intervention' },
        { term: 'capacity', definition: 'Ability to understand information and make decisions' },
        { term: 'material information', definition: 'Information a reasonable person would need for decision-making' },
        { term: 'surrogate', definition: 'Person authorized to make decisions for someone else' },
        { term: 'therapeutic privilege', definition: 'Withholding information believed to be harmful to patient' },
        { term: 'autonomy', definition: 'Right to self-determination and personal decision-making' }
      ],

      analogies: [
        'Informed consent is like a contract where both parties understand and agree to terms.',
        'It is similar to reading terms of service before accepting - you should understand what you are agreeing to.'
      ],

      examples: [
        'A patient scheduled for knee replacement receives information about the procedure, anesthesia risks, recovery time, alternatives like injections or physical therapy, and chooses to proceed.',
        'Before chemotherapy, a cancer patient learns about side effects including hair loss, nausea, and infection risk, and discusses these with family before consenting.',
        'A patient with appendicitis in severe pain consents to emergency surgery after a brief explanation of the risks of delay and the surgical procedure.'
      ]
    },

    3: {
      level: 3,
      summary: 'Informed consent is a process grounded in bioethical principles and legal requirements, requiring disclosure, comprehension, voluntariness, and capacity for valid patient authorization.',
      explanation: `Foundations of Informed Consent

Ethical Framework:

The Belmont Report principles:
- Respect for persons (autonomy)
- Beneficence (maximizing benefit, minimizing harm)
- Justice (fair distribution of benefits and burdens)

Beauchamp and Childress Four Principles:
- Autonomy: Self-determination and informed consent
- Beneficence: Acting in patient's best interest
- Non-maleficence: Avoiding harm
- Justice: Fairness in healthcare distribution

Legal Standards

Disclosure Standards:
- Professional practice standard: What reasonable physician would disclose
- Materiality standard: What reasonable patient would want to know
- Subjective standard: What this specific patient wants to know
- Causation requirement: Would different disclosure have changed decision?

Legal Actions for Consent Violations:
- Battery: Touching without consent (no consent obtained)
- Negligence: Failure to meet disclosure standard (inadequate consent)
- Fraud: Intentional misrepresentation

Informed Consent Process

Step 1: Information Disclosure
- Diagnosis and prognosis
- Nature and purpose of treatment
- Risks and benefits (material risks)
- Alternatives and their risks/benefits
- Consequences of no treatment
- Uncertainty about outcomes

Step 2: Comprehension Assessment
- Patient understanding of information
- Health literacy considerations
- Language barriers
- Cognitive factors
- Use of teach-back method

Step 3: Capacity Evaluation
- Understanding of relevant information
- Appreciation of situation and consequences
- Reasoning ability
- Communication of choice
- Consistency over time

Step 4: Voluntariness Confirmation
- Absence of coercion
- Absence of undue influence
- Absence of manipulation
- Time for deliberation
- Opportunity for questions

Step 5: Authorization
- Explicit agreement
- Signature documentation
- Right to withdraw
- Ongoing process, not single event

Special Populations

Pediatric Consent:
- Parental permission required
- Child assent when appropriate (typically age 7+)
- Age-appropriate explanation
- Best interest standard
- Mature minor exceptions

Research Consent:
- Additional requirements beyond clinical care
- Voluntary participation emphasized
- Right to withdraw anytime
- Distinction between research and treatment
- Institutional Review Board oversight

Vulnerable Populations:
- Cognitively impaired adults
- Prisoners
- Economically disadvantaged
- Emergency situations
- Pregnant women/fetuses

Capacity Assessment

Components of Capacity:
- Understanding: Grasping relevant facts
- Appreciation: Recognizing situation applies to self
- Reasoning: Comparing options using consequences
- Expression of choice: Communicating decision

Capacity vs Competence:
- Capacity: Clinical determination of decision-making ability
- Competence: Legal status determined by court

Assessment Tools:
- MacArthur Competency Assessment Tool
- Mini-Mental State Examination
- Slides for Assessment of Capacity
- Clinical interview

Presumption of Capacity:
- Adults presumed competent unless evidence otherwise
- Capacity is decision-specific
- Capacity can fluctuate
- Assessment required when concern exists

Documentation Requirements

Elements to Document:
- Information provided
- Questions and answers
- Assessment of understanding
- Confirmation of voluntariness
- Capacity assessment if indicated
- Patient decision
- Signature and date

Electronic Documentation:
- Electronic health record integration
- Electronic signature standards
- Audit trails
- Version control
- Accessibility requirements

Shared Decision-Making

Integration with Consent:
- Evidence-based option presentation
- Patient values elicitation
- Decision support tools
- Partnership approach
- Documentation of shared decision

Decision Aids:
- Evidence-based information
- Risk presentation
- Values clarification
- Preparation for consultation
- Improved decision quality

Emerging Issues

Genomic Consent:
- Incidental findings
- Family implications
- Re-contact for new findings
- Variant reclassification
- Data sharing

Digital Health Consent:
- Telehealth specific considerations
- Remote monitoring
- Artificial intelligence use
- Data analytics
- Privacy implications

Global Variations

Cultural Differences:
- Family-centered vs individual autonomy
- Truth-telling practices
- Role of community elders
- Religious considerations
- Gender dynamics

Legal Variations:
- Civil law vs common law traditions
- Religious law influence
- National healthcare systems
- Resource constraints
- Enforcement mechanisms`,

      keyTerms: [
        { term: 'material risk', definition: 'Risk that a reasonable person would consider significant in decision-making' },
        { term: 'assent', definition: 'Affirmative agreement from a minor who cannot legally consent' },
        { term: 'decisional capacity', definition: 'Clinical ability to make a specific healthcare decision' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinician and patient make decisions together' },
        { term: 'therapeutic misconception', definition: 'Failure to distinguish research from treatment' },
        { term: 'incidental finding', definition: 'Unrelated discovery made during testing for another purpose' }
      ]
    },

    4: {
      level: 4,
      summary: 'Informed consent requires systematic application of disclosure, comprehension assessment, and voluntariness verification. Understanding capacity assessment and special situations optimizes the consent process.',
      explanation: `Comprehensive Informed Consent Framework

The Consent Process in Practice:

Pre-Visit Preparation:
- Educational materials provided in advance
- Decision aids distributed
- Family members invited to participate
- Questions solicited beforehand
- Language and accessibility needs assessed

The Clinical Encounter:
- Rapport building and agenda setting
- Assessment of baseline understanding
- Information disclosure in manageable chunks
- Comprehension checking throughout
- Values and preferences exploration
- Decision support and deliberation time
- Authorization and documentation

Post-Decision:
- Copy of consent document provided
- Plan for follow-up questions
- Opportunity to withdraw restated
- Coordination of next steps

Advanced Communication Techniques

Eliciting-Providing-Eliciting:
- Elicit: "What is your understanding of your condition?"
- Provide: Information filling gaps
- Elicit: "What questions do you have now?"

Ask-Tell-Ask:
- Ask: "What would help you decide?"
- Tell: Relevant information
- Ask: "What are you thinking now?"

Chunk and Check:
- Break information into small segments
- Check understanding after each chunk
- Proceed based on comprehension
- Back up if confusion evident

Risk Communication in Consent

Effective Risk Presentation:
- Use absolute risk (X out of 100) not just relative risk
- Provide visual displays when possible
- Use natural frequencies
- Contextualize with familiar risks
- Present both positive and negative framing

Addressing Uncertainty:
- Acknowledge when evidence is limited
- Distinguish known from unknown
- Explain confidence intervals conceptually
- Discuss individual vs population risk

Addressing Rare Risks:
- Disclose serious risks even if rare
- Use "1 out of X" format
- Provide context for understanding
- Acknowledge difficulty grasping small numbers

Capacity Assessment in Depth

Structured Assessment:
- Understanding of disclosed information
- Appreciation of personal relevance
- Reasoning through options
- Expressing stable choice

Tools and Instruments:
- MacCAT-T (treatment)
- MacCAT-CR (clinical research)
- Hopkins Competency Assessment Test
- Capacity to Consent to Treatment Instrument
- Aid to Capacity Evaluation

Red Flags for Impaired Capacity:
- Inability to understand disclosed information
- Fixed false beliefs about condition
- Random or impulsive choices
- Inability to state reasons
- Fluctuating decisions without new information

Supporting Capacity:
- Simplify information
- Use visual aids
- Provide extra time
- Minimize distractions
- Treat reversible causes
- Repeat assessment

Surrogate Decision-Making

Hierarchy (varies by jurisdiction):
1. Advance directive (durable power of attorney)
2. Court-appointed guardian
3. Spouse or domestic partner
4. Adult children
5. Parents
6. Adult siblings
7. Other relatives
8. Close friends

Standards for Surrogates:
- Substituted judgment (patient wishes known)
- Best interest (wishes unknown)
- Reasonable person standard

Limitations and Challenges:
- Family disagreement
- Uncertainty about patient wishes
- Conflict of interest
- Emotional burden
- Guilt and grief reactions

Special Consent Situations

Research Consent:
- Purpose of research explained
- Voluntary nature emphasized
- Randomization explained
- Placebo use disclosed
- Right to withdraw stated
- Compensation for injury
- Privacy protections

Surgical Consent:
- Specific procedure details
- Surgeon experience disclosure
- Anesthesia risks
- Blood product risks
- Specific complications
- Recovery expectations

Blood Transfusion Consent:
- Risks of transfusion
- Alternatives (autologous, cell saver)
- Religious objections
- Jehovah's Witness considerations
- Minor transfusion cases

Mental Health Treatment:
- Involuntary treatment standards
- Capacity in psychiatric illness
- Treatment over objection
- Emergency medication
- Rights of hospitalized patients

Documentation Excellence

Comprehensive Documentation:
- Nature of discussion
- Information provided
- Questions and responses
- Understanding confirmed
- Voluntariness verified
- Capacity assessed
- Decision documented
- Signature obtained

Quality Indicators:
- Time spent in discussion
- Use of decision aids
- Comprehension verification
- Patient questions documented
- Cultural accommodations noted

Electronic Consent Systems:
- Integration with EHR
- Version control
- Audit trails
- Accessibility compliance
- Security protections

Quality Improvement

Measuring Consent Quality:
- Patient understanding assessments
- Decisional conflict scores
- Decision regret measures
- Satisfaction with process
- Documentation audits

Process Improvement:
- Standardized consent forms
- Simplified language
- Visual aids development
- Staff training programs
- Patient feedback integration

Legal Risk Management:
- Documentation completeness
- Material risk disclosure
- Capacity assessment
- Surrogate authority verification
- Refusal documentation`,

      keyTerms: [
        { term: 'natural frequency', definition: 'Expressing probability as X out of Y rather than percentage' },
        { term: 'substituted judgment', definition: 'Making decision based on what patient would have wanted' },
        { term: 'decisional conflict', definition: 'Personal uncertainty about which course of action to take' },
        { term: 'MacCAT', definition: 'MacArthur Competency Assessment Tool - structured capacity evaluation' },
        { term: 'IRB', definition: 'Institutional Review Board - ethics committee for research oversight' },
        { term: 'advance directive', definition: 'Legal document specifying healthcare wishes for future incapacity' }
      ],

      clinicalNotes: `Obtaining truly informed consent requires time and skill. Best practices include:
- Assume patients do not understand until teach-back confirms otherwise
- Use plain language consistently
- Provide decision aids when available
- Allow adequate time for questions and deliberation
- Document the conversation, not just the signature
- Respect the right to refuse or withdraw consent
- Re-visit consent if circumstances change

For complex decisions, consider multiple discussions. For high-risk procedures, ensure patients understand potential serious outcomes. Cultural sensitivity and health literacy accommodation are essential.`
    },

    5: {
      level: 5,
      summary: 'Informed consent represents the practical application of autonomy and respect for persons in clinical practice, requiring sophisticated communication skills, systematic processes, and continuous quality improvement.',
      explanation: `Expert-Level Informed Consent Practice

Theoretical Foundations:

Philosophical Bases:
- Kantian autonomy and respect for persons
- Mill's harm principle
- Relational autonomy (feminist ethics)
- Communitarian perspectives
- Cultural variations in autonomy concepts

Legal Evolution:
- Historical paternalism
- Salgo v. Leland Stanford (1957) - patient right to know
- Canterbury v. Spence (1972) - reasonable patient standard
- Truman v. Thomas (1980) - informed refusal
- Modern informed consent doctrine

Consent as Process vs Event:
- Ongoing dialogue, not single transaction
- Revisiting as circumstances change
- Continuous right to withdraw
- Documentation of process
- Quality of conversation matters most

Advanced Communication Science

Health Literacy and Consent:
- Universal precautions approach
- Plain language standards (5th-8th grade)
- Teach-back effectiveness evidence
- Impact on understanding and outcomes
- Reducing disparities

Numeracy in Risk Communication:
- Many patients struggle with probabilities
- Icon arrays improve understanding
- Natural frequencies superior to percentages
- Absolute risk more informative than relative
- Framing effects influence decisions

Cognitive Biases in Decision-Making:
- Optimism bias ("not me")
- Affect heuristic (emotional responses)
- Anchoring (first information dominates)
- Availability (easily recalled examples)
- Mitigation strategies in consent

Cultural Competence in Consent:
- Individual vs family-centered decision-making
- Truth-telling variations
- Role of community elders
- Gender dynamics
- Religious and spiritual considerations
- Language and interpreter use

Specialized Consent Scenarios

Surgical Consent Excellence:
- Procedure-specific risk disclosure
- Surgeon-specific outcomes when available
- Enhanced recovery protocols
- Prehabilitation expectations
- Specific complication rates
- Recovery milestones

Genomic Consent Complexity:
- Incidental findings management
- Variant of uncertain significance
- Family communication obligations
- Re-contact policies
- Data sharing and biobanks
- Return of results over time
- Commercial testing implications

Research Consent Challenges:
- Therapeutic misconception prevention
- Phase I trial realities
- Randomization understanding
- Placebo acceptance
- Genetic research implications
- Data sharing and future use
- International research ethics

Emergency and Urgent Consent:
- Implied consent doctrine limits
- Surrogate availability
- Time-limited interventions
- Documentation of urgency
- Follow-up when capacity returns
- Ethics consultation for uncertainty

Capacity and Vulnerability

Neurocognitive Disorders:
- Dementia and fluctuating capacity
- Executive function impairments
- Anosognosia (lack of insight)
- Supported decision-making
- Advance care planning value

Psychiatric Illness:
- Depression and decision-making
- Psychosis and false beliefs
- Mania and impulsivity
- Treatment over objection standards
- Capacity restoration attempts

Developmental Disabilities:
- Assessing understanding
- Supported decision-making models
- Guardian roles
- Self-advocacy support
- Rights protection

Pediatric and Adolescent Consent:
- Evolving capacity concepts
- Gillick competence (UK)
- Mature minor doctrine (US)
- Assent vs consent
- Parental authority limits
- Refusal of life-saving treatment

System-Level Implementation

Organizational Infrastructure:
- Consent policy development
- Standardized procedures
- Training and competency
- Quality monitoring
- Technology integration
- Patient feedback mechanisms

Electronic Consent Systems:
- EHR integration
- Video consent capabilities
- Remote consent processes
- Decision aid integration
- Audit trails
- Accessibility compliance

Quality Metrics:
- Process measures (time, materials)
- Outcome measures (understanding, satisfaction)
- Documentation audits
- Patient experience surveys
- Legal claims review

Implementation Science:
- Spread of evidence-based practices
- Barrier identification
- Stakeholder engagement
- Continuous improvement
- Sustainability planning

Research Frontiers

Decision Quality Measurement:
- Decisional conflict scales
- Decision regret instruments
- Knowledge assessment tools
- Values-concordance evaluation
- Outcome correlation studies

Decision Support Innovation:
- Interactive digital tools
- Personalized risk calculators
- Values clarification exercises
- Artificial intelligence applications
- Virtual reality explanations

Understudied Populations:
- Limited health literacy
- Limited English proficiency
- Cognitive impairment
- Serious mental illness
- Substance use disorders
- End-of-life decisions

Policy and Ethics

Regulatory Framework:
- Common Rule revisions
- FDA informed consent requirements
- HIPAA research provisions
- State law variations
- International harmonization

Emerging Ethical Issues:
- Artificial intelligence in consent
- Predictive analytics
- Big data and privacy
- Gene editing
- Neurotechnologies
- Artificial gametes

Health Equity:
- Disparities in consent quality
- Access to decision support
- Cultural adaptation needs
- Interpreter quality
- Trust and historical trauma
- Structural competency

Professional Development

Consent Skills Training:
- Communication skills curricula
- Simulation-based practice
- Direct observation and feedback
- Health literacy training
- Cultural competence development

Assessment Methods:
- OSCE stations
- Standardized patient encounters
- Chart review
- Patient feedback
- Peer review

Maintenance of Competency:
- Continuing education
- Practice audit
- Quality improvement participation
- Patient advisory input
- Interprofessional learning

Global Health Context

Resource-Limited Settings:
- Consent challenges with limited time
- Literacy barriers
- Traditional healing integration
- Community engagement
- Research ethics

Humanitarian Emergencies:
- Disaster research ethics
- Trauma care consent
- Resource triage
- Vulnerable population protection
- Community consultation

Universal Health Coverage:
- Financial informed consent
- Cost transparency
- Value communication
- Rationing considerations
- Equity implications`,

      keyTerms: [
        { term: 'anosognosia', definition: 'Lack of awareness of one\'s own illness or condition' },
        { term: 'therapeutic misconception', definition: 'Participant failure to appreciate research differs from treatment' },
        { term: 'variant of uncertain significance', definition: 'Genetic variant with unknown clinical impact' },
        { term: 'supported decision-making', definition: 'Accommodations enabling person with disability to make own decisions' },
        { term: 'Gillick competence', definition: 'UK standard for minor consent based on understanding, not age' },
        { term: 'structural competency', definition: 'Capacity to recognize and respond to health effects of social structures' }
      ],

      clinicalNotes: `Excellence in informed consent requires continuous attention to communication quality, patient understanding, and ethical practice. Key success factors:
- Organizational commitment to patient-centered consent
- Adequate time allocation for consent discussions
- Training in health literacy and cultural competence
- Integration of decision support tools
- Quality monitoring and feedback
- Responsiveness to patient concerns
- Adaptation to emerging technologies and ethical challenges

Consent quality reflects organizational culture and individual provider skill. Investment in consent process improvement benefits patients, providers, and institutions through better decisions, improved satisfaction, and reduced risk.`
    }
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: [],
    topics: ['patient-safety'],
    keywords: ['informed consent', 'patient autonomy', 'medical ethics', 'capacity']
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
