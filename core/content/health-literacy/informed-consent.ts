/**
 * Informed Consent - Ensuring Patient Understanding
 *
 * Covers ensuring understanding during informed consent process,
 * using health literacy principles to support truly informed decisions.
 */

import { EducationalContent } from '../types';

export const informedConsentContent: EducationalContent = {
  id: 'health-literacy-informed-consent',
  type: 'topic',
  name: 'Informed Consent and Health Literacy',
  alternateNames: [
    'Informed Consent Communication',
    'Ensuring Consent Understanding',
    'Patient Decision Making'
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Informed consent means patients truly understand their medical choices before agreeing to treatment. Clear communication helps patients make the best decisions for their health.',
      explanation: `What is Informed Consent?

Informed consent means:
1. Patient understands the procedure or treatment
2. Patient knows the benefits and risks
3. Patient knows about other choices
4. Patient makes the choice freely

Why Understanding Matters:

When patients truly understand:
- They make choices that match their values
- They feel more confident about decisions
- They know what to expect
- They have better outcomes

Helping Patients Understand:

Use Simple Words:
- Instead of "adverse reaction" say "side effect" or "problem"
- Instead of "intervention" say "treatment" or "procedure"
- Instead of "contraindication" say "reason not to do this"

Give Small Amounts at a Time:
- Explain one thing at a time
- Check understanding before continuing
- Focus on 2-3 most important points

Ask Them to Explain Back:
- "Can you tell me in your own words what we discussed?"
- If they explain correctly, great!
- If they're confused, explain again in different words

Use Pictures When Helpful:
- Draw diagrams to explain procedures
- Show pictures of what will happen
- Use simple charts to show risks

Key Information Every Patient Needs:

1. What will be done? (The procedure or treatment)
2. Why is it needed? (How it helps)
3. What are the benefits? (What good things might happen)
4. What are the risks? (What problems might happen)
5. Are there other choices? (Including doing nothing)
6. What if we do nothing? (What happens then)

Remember: Just signing a form doesn't mean the patient understands. It's your job to make sure they TRULY understand before they agree!`,

      keyTerms: [
        {
          term: 'Informed Consent',
          definition: 'Process where patient learns about and understands a medical treatment before agreeing to it.'
        },
        {
          term: 'Benefits',
          definition: 'The good things that could happen from a treatment.'
        },
        {
          term: 'Risks',
          definition: 'The bad things that could happen from a treatment.'
        },
        {
          term: 'Alternatives',
          definition: 'Other choices for treatment.'
        }
      ],

      analogies: [
        'Informed consent is like agreeing to buy something after understanding what it is, what it costs, and what else you could buy instead.',
        'Signing a consent form without understanding is like signing a contract you haven\'t read.'
      ],

      examples: [
        'A surgeon should explain: "This surgery fixes your back problem. The benefit is less pain. The risks are infection or bleeding. Other choices include physical therapy or medicine."'
      ],

      patientCounselingPoints: [
        'Always explain procedures in plain language.',
        'Use teach-back to confirm understanding.',
        'Allow plenty of time for questions.',
        'Never rush the consent process.'
      ]
    },

    2: {
      level: 2,
      summary: 'Informed consent requires ensuring patient comprehension through clear communication, teach-back confirmation, and adequate time for decision-making.',
      explanation: `What is Informed Consent?

Legal and Ethical Requirements:
- Patient receives information about treatment
- Patient understands the information
- Patient makes voluntary decision
- Patient has capacity to decide

The Consent Form is Not Enough:
- Signing doesn't mean understanding
- Form is documentation, not the process
- True consent requires comprehension
- Ongoing process, not one-time event

Core Elements of Informed Consent

Essential Information:

1. Diagnosis: What is the condition?
2. Proposed treatment: What will be done?
3. Purpose: How will it help?
4. Risks: What could go wrong?
5. Benefits: What are the expected good outcomes?
6. Alternatives: What else could we do?
7. Consequences of no treatment: What happens if we do nothing?

Communication Challenges

Common Problems:

Medical Jargon:
- "possible adverse reactions" becomes "side effects to watch for"
- "therapeutic intervention" becomes "treatment"
- "contraindicated" becomes "not recommended for you"

Overwhelming Information:
- Too much information at once
- Written forms too complex
- Not enough time to process
- Stressed patients can't focus

Time Pressure:
- Patient feels rushed
- No time for questions
- Feeling pressured to decide
- Can't discuss with family

Effective Strategies

Use Plain Language:
- Simple, familiar words
- Short sentences
- Active voice ("We will..." not "The procedure will be...")
- Concrete examples

Teach-Back Method:
- "Can you tell me in your own words what this procedure involves?"
- "What are the main risks we discussed?"
- "What will happen if you choose not to have this done?"
- Continue until patient understands correctly

Chunking Information:
- Break into small sections
- Check understanding after each section
- Let patient ask questions
- Don't move on until they understand

Use Visual Aids:
- Anatomical models
- Drawings and diagrams
- Before/after pictures when relevant
- Charts showing risks

Confirming Understanding

What to Check:

Purpose:
- "What problem is this procedure fixing?"

Risks:
- "What are the main risks you're concerned about?"
- "What would make you call us after the procedure?"

Benefits:
- "How do you hope this will help you?"

Alternatives:
- "What other options do you remember?"

Decision:
- "What are you thinking about your decision so far?"

Special Considerations

Limited English Proficiency:
- Use professional medical interpreters
- NOT family members (especially children)
- Written materials in patient's language
- Extra time for questions

Limited Health Literacy:
- Very simple language
- Focus on 2-3 key points
- Heavy use of visual aids
- Multiple teach-back cycles
- Written summary in plain language

Anxiety and Stress:
- Acknowledge emotions
- Allow extra time
- May need to discuss multiple times
- Support person presence helps

Emergencies:
- May need to act quickly
- Still need to communicate clearly
- Document why consent was expedited
- Full discussion when possible

Shared Decision Making

Informed Consent as Collaboration:
- Not just getting signature
- Helping patient make best choice for them
- Respecting patient values
- Partnership in decision-making

Patient Values:
- "What matters most to you?"
- "What are you hoping for?"
- "What worries you the most?"
- These guide the recommendation`,

      keyTerms: [
        {
          term: 'Informed Consent',
          definition: 'Process ensuring patient understands and agrees to medical treatment.',
          pronunciation: 'in-FORMD kun-SENT'
        },
        {
          term: 'Capacity',
          definition: 'Ability to understand information and make decisions.'
        },
        {
          term: 'Voluntary',
          definition: 'Free from coercion or pressure.'
        },
        {
          term: 'Therapeutic Privilege',
          definition: 'Withholding information believed to be harmful to patient (generally not acceptable).'
        },
        {
          term: 'Shared Decision Making',
          definition: 'Collaborative process where clinician and patient make decisions together.'
        }
      ],

      analogies: [
        'Informed consent is like a contract where both sides understand and agree to the terms.',
        'Using medical jargon in consent is like reading legal terms without explanation.'
      ],

      patientCounselingPoints: [
        'Assume patients don\'t understand until they prove otherwise with teach-back.',
        'Use the "chunk and check" method.',
        'Provide written summary at appropriate reading level.',
        'Allow time to discuss with family.'
      ]
    },

    3: {
      level: 3,
      summary: 'Effective informed consent requires a patient-centered communication approach with plain language, teach-back confirmation, and adequate time for comprehension and decision-making.',
      explanation: `Legal and Ethical Framework

Legal Requirements:
- Disclosure of material information
- Patient comprehension
- Voluntary consent
- Patient capacity
- Documentation

Ethical Principles:
- Autonomy: Respect patient's right to decide
- Beneficence: Act in patient's best interest
- Non-maleficence: Do no harm
- Justice: Fair distribution of risks and benefits

Beyond the Signature:
- The signed form documents the process
- True consent requires understanding
- Ongoing dialogue, not one-time event
- Patient can withdraw consent anytime

Elements of Disclosure

What Must Be Disclosed:

1. Nature of the procedure: What will be done
2. Risks: Material risks (even rare ones if serious)
3. Benefits: Expected outcomes
4. Alternatives: All reasonable options
5. Consequences of refusing: What happens without treatment
6. Uncertainty: When outcomes are uncertain

Material Risk Standard:
- What a reasonable person would want to know
- What this particular patient would want to know
- Not just "common" risks
- Includes benefits that are uncertain

Communication Challenges

Barriers to Understanding:

Medical Jargon:
- Technical terminology unfamiliar to patients
- Latin phrases (e.g., "NPO," "stat," "PRN")
- Acronyms without explanation
- Abstract concepts

Numeracy Issues:
- Risk statistics (1%, 1 in 100)
- Probability concepts
- Comparing risks
- Understanding uncertainty

Cognitive Load:
- Too much information at once
- Stress and anxiety impair processing
- Pain or illness affects concentration
- Multiple treatment options complex

Evidence-Based Communication

Plain Language Principles:
- Use familiar words
- Keep sentences short (15 words or less)
- One idea per sentence
- Active voice
- Explain necessary medical terms

Teach-Back for Consent:
- "What did we discuss as the main benefits?"
- "What risks are you most concerned about?"
- "What other options do you remember?"
- "What happens if you decide not to do this?"
- "What questions do you still have?"

Use Visual Aids:
- Anatomical models
- Procedure diagrams
- Risk icon arrays
- Before/after comparisons
- Decision aids

Risk Communication

Presenting Risks Effectively:

Format Matters:
- Use natural frequencies: "10 out of 100 people"
- Not just percentages: "10% risk"
- Provide context: "This is about the same risk as..."
- Include timeframe: "Within 30 days of surgery"

Addressing Risk Magnitude:
- Common vs. rare
- Minor vs. major
- Temporary vs. permanent
- Treatable vs. not treatable

Balanced Presentation:
- Benefits AND risks
- Certainty and uncertainty
- Short-term and long-term effects
- Comparison to alternatives (including no treatment)

Shared Decision Making

Integration with Informed Consent:

Three-Talk Model:
1. Team Talk: Build relationship, explore patient's experience
2. Option Talk: Present options using decision aids
3. Decision Talk: Support deliberation and decision

Decision Aids:
- Present balanced information
- Use plain language and visuals
- Help patients clarify values
- Prepare patients for discussion

Special Populations

Limited Health Literacy:
- Simplify all materials to 5th-8th grade level
- Use visual aids extensively
- Limit to 2-3 key points per discussion
- Multiple teach-back cycles
- Extra time for processing

Limited English Proficiency:
- Professional interpreters (NOT family members)
- Translated consent forms
- Visual aids that transcend language
- Cultural mediation when appropriate
- Extra time for questions

Cognitive Impairment:
- Assess capacity (not literacy)
- Simplify communication
- Involve legally authorized representative
- Ensure understanding is genuine
- Document capacity assessment

Emergency Situations:
- May need to act quickly
- Document urgency
- Treat until patient can participate
- Full consent discussion when possible
- Life-threatening situations exception

Documentation

Essential Documentation:

1. Information discussed
2. Materials provided
3. Questions asked and answered
4. Teach-back confirmation of understanding
5. Patient's decision
6. Who was present

Sample Note:
"Informed consent for colonoscopy discussed with patient. Explained procedure using diagram. Covered benefits (detect cancer/polyps), risks (bleeding, perforation), alternatives (flexible sigmoidoscopy, no screening, CT colonography). Patient understood alternatives and consequences of refusal. Teach-back confirms understanding of main risks and benefits. Patient verbalized understanding and agreed to proceed. Patient signed consent form."

Quality Improvement

Measuring Consent Quality:
- Patient understanding assessments
- Time spent in consent process
- Teach-back documentation rates
- Materials reading level assessments
- Patient satisfaction with consent process`,

      keyTerms: [
        {
          term: 'Material Risk',
          definition: 'Risk that a reasonable person would consider significant in decision making.'
        },
        {
          term: 'Therapeutic Privilege',
          definition: 'Withholding information from patient believed to be harmful (generally rejected).'
        },
        {
          term: 'Decision Aid',
          definition: 'Tool providing balanced information to help patients make informed choices.'
        },
        {
          term: 'Capacity',
          definition: 'Patient ability to understand information and use it to make decision.'
        },
        {
          term: 'Natural Frequencies',
          definition: 'Expressing probability as "X out of Y" rather than percentage.'
        }
      ],

      clinicalNotes: `Key principles:

1. Informed consent is a process, not a form
2. Use plain language - avoid medical jargon
3. Always confirm understanding with teach-back
4. Discuss benefits, risks, and alternatives
5. Allow time for questions and deliberation
6. Include consequences of refusing treatment
7. Document the discussion, not just the signature
8. Respect patient's right to decide or refuse`
    },

    4: {
      level: 4,
      summary: 'Informed consent requires systematic application of health literacy principles, including plain language, teach-back confirmation, visual aids, and adequate time for patient deliberation.',
      explanation: `Comprehensive Framework

The Informed Consent Process:

Pre-Visit Preparation:
- Educational materials provided beforehand
- Decision aids sent in advance
- Family members encouraged to attend
- Questions invited before visit

During Visit:
- Build rapport and assess understanding
- Elicit patient's understanding and concerns
- Provide information in manageable chunks
- Use teach-back to confirm each chunk
- Address questions and concerns
- Allow time for deliberation

Decision and Documentation:
- Confirm understanding before obtaining signature
- Document the discussion, not just signature
- Provide copy of consent document
- Plan for follow-up communication

Advanced Communication Techniques

Eliciting-Providing-Eliciting:
- Elicit: "What do you know about this procedure?"
- Provide: Fill gaps with plain language explanation
- Elicit: "What questions do you have now?"

Ask-Tell-Ask:
- Ask: "What would you like to know?"
- Tell: Provide information
- Ask: "What did you hear me say?"

Motivational Interviewing Elements:
- Elicit values and preferences
- Explore ambivalence
- Support autonomy
- Help patient weigh options

Risk Communication in Depth

Principles of Effective Risk Communication:

1. Use Absolute Risk:
   - "1 out of 100" rather than "1%"
   - Contextualize with familiar risks
   - Show both positive and negative framing

2. Use Visual Displays:
   - Icon arrays (100 people with affected highlighted)
   - Risk ladders comparing to familiar risks
   - Bar charts showing comparisons

3. Provide Context:
   - Compare to everyday risks
   - Show timeframe clearly
   - Distinguish short-term vs long-term
   - Compare to alternatives (including no treatment)

4. Address Uncertainty:
   - When outcomes uncertain, say so
   - Explain what we don't know
   - Distinguish individual from population risk
   - Discuss confidence in estimates

Special Risk Communication Challenges:

Rare but Serious Risks:
- Even if rare (1 in 10,000), disclose if serious
- Use "1 out of 10,000 people" format
- Provide context (compare to familiar risks)
- Acknowledge difficulty understanding very small numbers

Common but Minor Risks:
- Don't minimize because common
- Explain what to expect
- Distinguish temporary from permanent
- Provide management strategies

Uncertain Risks:
- Acknowledge when we don't know
- Explain why uncertain
- Provide best available estimates
- Discuss ongoing learning

Decision Aids

Evidence-Based Decision Aid Components:

1. Information:
   - Plain language description of condition
   - Treatment options with outcomes
   - Probabilities of benefits and harms
   - Quality of life considerations

2. Values Clarification:
   - Exercises to identify priorities
   - What matters most to patient
   - Trade-off considerations
   - Scenarios for reflection

3. Guidance:
   - How to weigh options
   - How to talk with family
   - How to communicate with provider
   - Steps in decision-making process

Types of Decision Aids:
- Printed booklets
- Video presentations
- Interactive web tools
- Audio recordings
- Pictorial summaries

Special Situations

Research Consent:

Additional Considerations:
- Purpose of research
- Voluntary nature (can withdraw anytime)
- Alternative treatments available
- Compensation for injury
- Confidentiality protections
- Contact information for questions
- Separate consent and assent processes

Research vs. Treatment:
- Clarify difference
- Explain randomization
- Placebo when applicable
- Blinding when applicable
- Uncertainty about which is better

Pediatric Consent:
- Parental permission for treatment
- Child assent when appropriate (age 7+)
- Age-appropriate explanations
- Include child in discussion as developmentally appropriate

Emergency Research:
- Waiver of consent when life-threatening
- Community consultation beforehand
- Public disclosure beforehand
- Oversight by IRB
- Withdrawal option once enrolled

Genetic Testing Consent:
- Implications for family members
- Incidental findings
- Insurance and employment implications
- Genetic discrimination protections
- Uncertainty of some findings

Quality Assessment

Measuring Consent Quality:

Process Measures:
- Time spent in consent discussion
- Teach-back use
- Materials provided at appropriate reading level
- Interpreter used when needed
- Questions encouraged and answered

Outcome Measures:
- Patient understanding (validated tools)
- Patient satisfaction with process
- Feeling informed and supported
- Decisional conflict scores
- Decision regret scores

System-Level Improvements:
- Standardized consent forms (plain language)
- Consent form readability assessment
- Staff training in communication
- Teach-back protocol implementation
- Decision aid availability
- Documentation templates

Legal Considerations

Medical Liability:
- Inadequate consent can lead to liability
- Documentation crucial
- "Material risks" standard varies by state
- "Reasonable patient" vs "reasonable physician" standard
- Special rules for research, emergencies, minors

Documentation Best Practices:
- Note what information was provided
- Document materials given
- Record teach-back confirmation
- Note specific questions and answers
- Document patient's expressed understanding
- Note who was present

When Consent Is Refused:
- Respect patient's decision
- Document refusal and discussion
- Ensure understanding of consequences
- Offer to discuss again later
- Don't withhold care except for the refused procedure`,

      keyTerms: [
        {
          term: 'Decision Aid',
          definition: 'Tool providing balanced information to support informed decision making.'
        },
        {
          term: 'Assent',
          definition: 'Affirmative agreement from minor who cannot legally give consent.'
        },
        {
          term: 'Decisional Conflict',
          definition: 'Personal uncertainty about course of action.'
        },
        {
          term: 'Material Risk',
          definition: 'Risk that reasonable person would consider significant in decision.'
        },
        {
          term: 'Incidental Findings',
          definition: 'Unrelated findings discovered during testing or research.'
        }
      ],

      clinicalNotes: `Evidence-based consent practices:

1. Use universal precautions approach - ensure understanding for all patients
2. Simplify language to 5th-8th grade level
3. Use teach-back to confirm understanding of key elements
4. Provide balanced information on benefits, risks, and alternatives
5. Use visual aids for risk communication
6. Allow adequate time for questions and deliberation
7. Document the discussion thoroughly
8. Respect patient's right to refuse or withdraw consent

Remember: A signed form does not equal informed consent. True consent requires genuine understanding.`
    },

    5: {
      level: 5,
      summary: 'Informed consent requires systematic integration of health literacy principles, shared decision-making, evidence-based risk communication, and continuous quality improvement to ensure ethical patient-centered care.',
      explanation: `Theoretical Foundations

Ethical Framework:

Beauchamp and Childress Principles:
- Autonomy: Primary consideration
- Beneficence: Promoting patient's good
- Non-maleficence: Avoiding harm
- Justice: Fair distribution

Respect for Persons:
- Treat patients as autonomous agents
- Protect those with diminished autonomy
- Disclosure enables autonomous choice
- Understanding required for valid consent

Communication Theory:

Shared Decision Making Model:
- Clinician provides evidence-based options
- Patient provides values and preferences
- Together they reach agreement
- Not simply "signing a form"

Three-Talk Model:
1. Team talk: Build partnership, explore illness experience
2. Option talk: Provide options, support deliberation
3. Decision talk: Support decision-making

Evidence-Based Consent Process

Systematic Review Findings:

Interventions That Improve Understanding:
- Extended discussions (effect size 0.4-0.6)
- Written materials at appropriate reading level
- Use of decision aids (0.3-0.5)
- Teach-back method (0.5-0.7)
- Multimedia materials (0.3-0.4)

What Doesn't Work:
- Simply providing longer consent forms
- Using technical language to be "precise"
- One-way information delivery
- Rushed discussions

Effective Risk Communication:
- Natural frequencies (X out of 100) > percentages
- Icon arrays > text alone
- Balanced presentation (benefits + harms)
- Contextual comparisons
- Visual displays

Advanced Risk Communication

Cognitive Bias Considerations:

Affect Heuristic:
- Emotional responses dominate risk assessment
- Dread risks overestimated
- Familiar risks underestimated
- Mitigate with balanced information

Framing Effects:
- Survival vs mortality framing matters
- Losses loom larger than gains
- Present both perspectives when possible
- Check understanding of framing

Optimism Bias:
- Patients underestimate personal risks
- "Other people, not me"
- Provide concrete statistics
- Use personalized risk when possible

Anchoring:
- First information received heavily influences
- Be careful with initial statistics
- Present balanced information from start
- Avoid overemphasis on any single outcome

Numeracy in Consent:
- Many patients struggle with probability concepts
- Use natural frequencies consistently
- Provide visual aids for numbers
- Check numerical understanding with teach-back
- Avoid complex statistics unless necessary

Special Contexts

Surgical Consent:

Key Elements:
- Detailed explanation of procedure
- Specific risks for this patient
- Expected recovery process
- Alternatives with pros/cons
- Surgeon-specific outcomes when available

Enhanced Recovery:
- Preoperative education improves outcomes
- Setting expectations reduces complications
- Mental preparation affects recovery
- Anxiety reduction important

Medical Procedures:

Endoscopy, cardiac catheterization, etc.:
- Conscious sedation risks
- Specific procedure risks
- Alternatives including watchful waiting
- Expected benefits and timeline

Emergency Medicine:

Special Challenges:
- Time constraints
- Patient distress
- Pain and anxiety
- Incomplete information

Approach:
- Simplify to essential information
- Focus on immediate risks and benefits
- Full consent when situation stabilizes
- Document why consent was expedited

Clinical Research:

Additional Considerations:
- Research vs treatment distinction
- Randomization explanation
- Placebo use when applicable
- Withdrawal rights
- Confidentiality protections
- Compensation for research-related injury
- Conflict of interest disclosure

Research Ethics:
- Equitable selection
- Scientific validity
- Favorable risk-benefit ratio
- Independent review
- Informed consent
- Respect for enrolled subjects

Implementation Science

CFIR Application:

Intervention:
- Evidence strength for plain language consent
- Relative advantage (better outcomes, less liability)
- Adaptability to local context
- Complexity can be reduced with standardization
- Design quality matters

Outer Setting:
- Patient expectations for involvement
- Regulatory requirements
- Community norms
- Liability environment

Inner Setting:
- Organizational culture (paternalistic vs patient-centered)
- Readiness for change
- Available resources
- Leadership support

Characteristics of Individuals:
- Provider beliefs about patient understanding
- Communication skills
- Comfort with shared decision making
- Time pressure perceptions

Process:
- Planning and preparation
- Engaging stakeholders
- Executing implementation
- Reflecting and evaluating
- Continuous improvement

Quality Improvement Approaches:

Plan-Do-Study-Act:
- Identify consent quality gaps
- Implement targeted interventions
- Measure outcomes (understanding, satisfaction)
- Refine approach

Standardized Protocols:
- Consent form templates
- Discussion checklists
- Teach-back scripts
- Risk communication visuals

Health Equity Considerations

Disparities in Consent Process:
- Less time spent with minority patients
- Less information provided to low-SES patients
- Interpreter use inconsistent
- Cultural differences in decision-making
- Trust issues affect willingness to proceed

Mitigation Strategies:
- Standardize consent processes
- Monitor time spent by patient characteristics
- Ensure interpreter availability
- Provide culturally appropriate materials
- Build trust through partnership
- Train staff in implicit bias

Cultural Competence:
- Family involvement varies by culture
- Decision-making authority varies
- Health beliefs vary
- Communication styles differ
- Religious considerations

Professional Training

Curriculum Components:

Knowledge:
- Legal requirements for informed consent
- Evidence on communication effectiveness
- Health literacy prevalence and impact
- Cognitive biases affecting decisions
- Cultural variations in decision-making

Skills:
- Plain language communication
- Teach-back method
- Shared decision making
- Risk communication techniques
- Motivational interviewing basics

Attitudes:
- Respect for patient autonomy
- Value of shared decision making
- Universal precautions for health literacy
- Cultural humility
- Commitment to patient understanding

Assessment:
- Direct observation of consent discussions
- OSCE stations
- Patient feedback
- Documentation review
- Quality metrics

Research Directions

Gaps in Evidence:
- Optimal consent process for different procedures
- Best methods for confirming understanding
- Long-term effects of improved consent
- Cost-effectiveness of enhanced consent
- Technology applications

Emerging Areas:
- Multimedia consent presentations
- Interactive e-consent platforms
- AI-assisted plain language generation
- Virtual reality procedure demonstrations
- Real-time understanding assessment

Implementation Research:
- Spread of effective practices
- Sustainability strategies
- Context-specific adaptations
- Policy interventions
- System-level change strategies`,

      keyTerms: [
        {
          term: 'Autonomy',
          definition: 'Patient right to self-determination in medical decision-making.'
        },
        {
          term: 'Beneficence',
          definition: 'Ethical obligation to act in patient best interest.'
        },
        {
          term: 'Non-maleficence',
          definition: 'Ethical obligation to do no harm.'
        },
        {
          term: 'Justice',
          definition: 'Ethical obligation to distribute benefits and burdens fairly.'
        },
        {
          term: 'Shared Decision Making',
          definition: 'Collaborative process incorporating evidence, clinician expertise, and patient values.'
        },
        {
          term: 'Decisional Conflict',
          definition: 'State of uncertainty about which option to choose.'
        }
      ],

      clinicalNotes: `System-level implementation requires:

1. Organizational commitment to patient-centered consent
2. Plain language consent forms (5th-8th grade level)
3. Staff training in communication techniques
4. Standardized consent process protocols
5. Teach-back documentation expectations
6. Decision aids for common decisions
7. Quality metrics and monitoring
8. Regular audit and feedback

Core principle: Informed consent is a communication process, not a signature on a form. The goal is genuine patient understanding, not legal protection.`
    }
  },

  media: [],
  citations: [
    {
      id: 'coiado-informed-consent-review',
      type: 'article',
      title: 'Interventions to improve informed consent for patients undergoing surgical healthcare procedures',
      authors: ['Coiado, J.', 'Ali, M.', 'Hill, A.', 'et al.'],
      source: 'Cochrane Database of Systematic Reviews',
    },
    {
      id: 'stacey-decision-aids',
      type: 'article',
      title: 'Decision aids for people facing health treatment or screening decisions',
      authors: ['Stacey, D.', 'Légaré, F.', 'Lewis, K.', 'et al.'],
      source: 'Cochrane Database of Systematic Reviews'
    },
    {
      id: 'aha-informed-consent',
      type: 'website',
      title: 'Informed Consent',
      source: 'American Medical Association Journal of Ethics',
      url: 'https://journalofethics.ama-assn.org/topic/informed-consent'
    },
    {
      id: 'ocr-informed-consent',
      type: 'website',
      title: 'Informed Consent Requirements',
      source: 'Office for Civil Rights, U.S. Department of Health and Human Services',
      url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/informed-consent/'
    }
  ],
  crossReferences: [
    {
      targetId: 'health-literacy-teach-back',
      targetType: 'topic',
      relationship: 'related',
      label: 'Teach-Back Method'
    },
    {
      targetId: 'health-literacy-assessing-literacy',
      targetType: 'topic',
      relationship: 'related',
      label: 'Health Literacy Assessment'
    },
    {
      targetId: 'health-literacy-discharge-instructions',
      targetType: 'topic',
      relationship: 'related',
      label: 'Discharge Instructions'
    }
  ],
  tags: {
    systems: ['communication-skills', 'ethics'],
    topics: ['health-literacy', 'informed-consent', 'shared-decision-making', 'risk-communication', 'patient-rights'],
    keywords: ['informed consent', 'shared decision making', 'risk communication', 'patient understanding', 'ethics'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'ethics']
    }
  },

  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z',
  version: 1,
  status: 'published',
  contributors: ['Medical Education Team']
};

// Export with alias for index.ts compatibility
export { informedConsentContent as informedConsent };
export default informedConsentContent;
