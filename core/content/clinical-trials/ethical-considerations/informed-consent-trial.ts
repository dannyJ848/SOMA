import { ClinicalTrialsContent } from '../types';

export const informedConsentTrialContent: ClinicalTrialsContent = {
  id: 'informed-consent-trial',
  title: 'Informed Consent in Clinical Trials',
  category: 'clinical-trials',
  levels: [
    {
      level: 1,
      title: 'Introduction to Informed Consent',
      content: `
# Introduction to Informed Consent

Informed consent is one of the most important ethical requirements in clinical research. It ensures that people understand what they're agreeing to before participating in a clinical trial.

## What Is Informed Consent?

Informed consent is a process that:
- Explains the study clearly
- Describes potential risks and benefits
- Answers all questions
- Ensures voluntary participation
- Obtains written agreement

## Key Elements

**Information**: Participants must receive all relevant information about the study

**Understanding**: The information must be understandable to the participant

**Voluntariness**: Participation must be completely voluntary, without pressure or coercion

**Documentation**: Written consent is obtained and documented

## Why It Matters

Informed consent respects:
- **Autonomy**: Your right to make decisions about your body
- **Dignity**: Treating you as a person, not a research subject
- **Transparency**: Being honest about what participation means

## Your Rights

During informed consent, you should be told:
- The purpose of the study
- What will happen to you
- Potential risks and benefits
- That participation is voluntary
- That you can withdraw at any time

## Remember

Informed consent is not just signing a form. It's an ongoing process throughout the study.
      `,
      keyPoints: [
        'Informed consent ensures participants understand what they agree to',
        'Key elements are information, understanding, voluntariness, and documentation',
        'It respects autonomy, dignity, and transparency',
        'Informed consent is an ongoing process, not just a signature'
      ],
      vocabulary: [
        { term: 'Informed Consent', definition: 'A process ensuring voluntary and informed agreement to participate' },
        { term: 'Autonomy', definition: 'The right to make decisions about oneself' },
        { term: 'Voluntary', definition: 'Given freely without pressure or coercion' }
      ]
    },
    {
      level: 2,
      title: 'Essential Elements of Informed Consent',
      content: `
# Essential Elements of Informed Consent

## Required Information

According to regulatory requirements, participants must be informed about:

### 1. Study Purpose and Procedures

- Why the research is being done
- What will happen during participation
- Which procedures are experimental
- Expected duration of participation

### 2. Risks and Benefits

**Risks**:
- Physical risks (side effects, complications)
- Psychological risks (anxiety, stress)
- Social risks (stigma, discrimination)
- Economic risks (costs, time off work)

**Benefits**:
- Possible direct benefits to participant
- Benefits to society
- Benefits to scientific knowledge
- Payment for participation (if applicable)

### 3. Alternatives

- Standard treatment options
- Other available treatments
- No treatment option
- Why this research approach is being used

### 4. Confidentiality

- What information will be collected
- How it will be protected
- Who will have access
- Limits to confidentiality
- Publication plans (de-identified)

### 5. Compensation and Treatment

- Payment for participation (if applicable)
- Medical care for research-related injuries
- Who pays for treatment of complications
- Insurance information

### 6. Contact Information

- Who to contact with questions
- Who to contact for rights information
- Emergency contact information

### 7. Voluntary Nature

- Participation is completely voluntary
- Refusal will involve no penalty
- Can withdraw at any time
- Withdrawal will not affect care

## The Consent Form

The consent form is a document that:
- Is written in understandable language
- Is at an appropriate reading level
- Is available in the participant's language
- Is signed and dated by both participant and researcher
- Is given to the participant to keep
      `,
      keyPoints: [
        'Participants must be informed about purpose, procedures, risks, and benefits',
        'Alternatives to participation must be explained',
        'Confidentiality protections and compensation details are required',
        'The voluntary nature of participation must be emphasized'
      ],
      vocabulary: [
        { term: 'Research-Related Injury', definition: 'Harm directly caused by participation in research' },
        { term: 'De-identified', definition: 'Data with personal information removed' },
        { term: 'Standard Treatment', definition: 'The usual or accepted treatment for a condition' }
      ]
    },
    {
      level: 3,
      title: 'The Informed Consent Process',
      content: `
# The Informed Consent Process

## It's More Than a Signature

Informed consent is an ongoing process, not a one-time event:

### Initial Discussion

**Setting**:
- Private, comfortable environment
- Adequate time for discussion
- No pressure to decide immediately
- Family members welcome if desired

**Content**:
- Full explanation of study
- Opportunity to ask questions
- Discussion of alternatives
- Assessment of understanding

### Assessment of Understanding

Before obtaining consent, the research team should ensure understanding by:

- Asking open-ended questions
- Asking participant to explain the study in their own words
- Clarifying any misconceptions
- Re-explaining confusing points

**Example questions**:
- "Can you tell me what this study is about?"
- "What do you see as the main risks of participating?"
- "What will happen if you decide to stop participating?"

### Documentation

**Written Consent Form**:
- Signed and dated by participant
- Signed and dated by researcher
- Copy given to participant
- Original kept in study records

**Special Cases**:

- **Minors**: Parent/guardian consent + child assent
- **Illiterate**: Witness attests to oral consent
- **Emergency**: Exception from informed consent (EFIC) in specific circumstances

### Ongoing Consent

Consent continues throughout the study:

**Re-consent may be needed for**:
- Significant new information
- Protocol changes affecting participants
- New safety information
- Long trials with extended participation

**Continuing respect for autonomy**:
- Remind participants of withdrawal right
- Update on study progress if desired
- Respect withdrawal decision without penalty

## Special Considerations

### Vulnerable Populations

**Additional protections needed for**:
- Children and adolescents
- Pregnant women
- Individuals with cognitive impairment
- Economically or educationally disadvantaged
- Subordinate relationships (students, employees)

### Electronic Informed Consent (eConsent)

**Growing acceptance of**:
- Electronic signatures
- Video presentations
- Interactive modules
- Remote consent process

**Benefits**:
- Improved understanding
- Consistent presentation
- Documentation of comprehension
- Remote participation possible

**Requirements**:
- Must meet all regulatory requirements
- Verify participant identity
- Secure signature capture
- Audit trail maintained
      `,
      keyPoints: [
        'Informed consent is an ongoing process, not just signing a form',
        'Understanding must be assessed before obtaining consent',
        'Special considerations apply to vulnerable populations',
        'Electronic consent methods are increasingly accepted'
      ],
      vocabulary: [
        { term: 'Assent', definition: 'Affirmative agreement from minors who cannot legally give consent' },
        { term: 'EFIC', definition: 'Exception from Informed Consent - for emergency research' },
        { term: 'eConsent', definition: 'Electronic informed consent using digital methods' }
      ]
    },
    {
      level: 4,
      title: 'Legal and Regulatory Framework',
      content: `
# Legal and Regulatory Framework for Informed Consent

## Historical Context

### Nuremberg Code (1947)

**Response to**: Nazi medical experiments

**Key Principles**:
- Voluntary consent essential
- Free from coercion
- Person must have legal capacity
- Able to exercise free power of choice
- Sufficient knowledge and comprehension

### Declaration of Helsinki (1964, most recent 2022)

**World Medical Association statement**:

**Key Requirements**:
- Informed consent mandatory
- Research subjects must be informed of rights
- Well-being of individual takes precedence
- Ethical review required

### Belmont Report (1979)

**Identified three basic ethical principles**:

1. **Respect for Persons**
   - Autonomy
   - Protection of persons with diminished autonomy

2. **Beneficence**
   - Maximize possible benefits
   - Minimize possible harms

3. **Justice**
   - Fair distribution of research benefits and burdens

## U.S. Regulations

### Common Rule (45 CFR 46)

**Applies to**: Most federally funded research

**Key Requirements**:
- IRB review and approval
- Informed consent required
- Additional protections for vulnerable populations
- Waivers possible under specific conditions

### FDA Regulations (21 CFR 50)

**Applies to**: FDA-regulated research (drugs, devices)

**Key Requirements**:
- Informed consent elements specified
- Consent form must be FDA-approved
- Additional requirements for certain studies
- Exception for emergency research

## International Standards

### ICH E6 Good Clinical Practice (GCP)

**International standard**:

**Consent Requirements**:
- Compliant with Declaration of Helsinki
- Obtained by qualified personnel
- Documented in writing
- Ongoing process
- Non-coercive environment

### GDPR and Privacy

**European data protection**:

**Impact on consent**:
- Explicit consent required for data processing
- Right to data access
- Right to data deletion
- Data portability
- Clear privacy notice required

## Waivers and Alterations

### Waiver of Informed Consent

**Possible when**:
- Minimal risk research
- Could not practicably be conducted without waiver
- Does not adversely affect rights
- Critical knowledge would be lost
- Debriefing provided when appropriate

**Examples**:
- Retrospective chart review
- Some observational studies
- Some public health surveillance

### Exception from Informed Consent (EFIC)

**Emergency Research**:
- Life-threatening situation
- No available standard treatment
- Cannot obtain consent (patient unable, surrogate unavailable)
- Intervention must be tested in emergency
- Community consultation required
- Public disclosure required
- Opt-out mechanism when possible

## Documentation Requirements

### Written Consent Form Must Include

**Required Elements**:
- Statement that study involves research
- Purpose and duration
- Procedures
- Risks and benefits
- Alternatives
- Confidentiality statement
- Compensation for injury (if applicable)
- Contact information
- Voluntary participation statement
- Signature blocks

### Additional Elements When Applicable

- Additional costs
- Early withdrawal consequences
- New information contact
- Significant new findings
- Approximate number of participants

### Record Retention

- HIPAA requires 6 years after last IRB approval
- FDA requires 2 years after last IND approval (whichever later)
- GCP requires records available for inspection
      `,
      keyPoints: [
        'Nuremberg Code, Belmont Report, and Helsinki Declaration form the ethical foundation',
        'Common Rule and FDA regulations govern informed consent in the U.S.',
        'International standards require compliance with GCP guidelines',
        'Waivers are possible under specific, regulated circumstances'
      ],
      vocabulary: [
        { term: 'Common Rule', definition: 'U.S. federal regulation protecting human research subjects' },
        { term: 'GCP', definition: 'Good Clinical Practice - international quality standard' },
        { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act - protects health information' }
      ]
    },
    {
      level: 5,
      title: 'Advanced Topics in Informed Consent',
      content: `
# Advanced Topics in Informed Consent

## Consent for Genetic Research

### Special Considerations

**Unique Aspects**:
- Genetic information is inherently identifiable
- Results may impact family members
- Incidental findings possible
- Long-term implications
- Potential for discrimination

**Additional Requirements**:
- Explanation of genetic nature
- Discussion of implications for relatives
- Plan for return of results
- Data sharing plans
- Protections against genetic discrimination

### Return of Results

**Considerations**:
- Which results will be returned?
- Clinically actionable vs. research findings
- Incidental findings
- How and when will results be shared?
- Who will disclose results?
- Genetic counseling implications

**Categories of Findings**:
- Clinically actionable findings
- Variants of uncertain significance (VUS)
- Carrier status
- Pharmacogenomic implications
- Incidental findings

## Consent for Data Sharing and Biobanking

### Broad Consent

**Concept**:
- Consent for future unspecified research
- Often used for biobanking
- Allows use of samples/data for multiple studies

**Requirements**:
- Clear explanation of broad nature
- Examples of possible research areas
- Governance mechanisms
- Right to withdraw
- Data protection measures

**Challenges**:
- Truly informed?
- Withdrawal mechanisms complex
- Public acceptance varies
- Regulatory differences internationally

### Dynamic Consent

**Emerging Approach**:
- Ongoing engagement with participants
- Digital platforms for communication
- Participants choose preferences for each study
- Can be updated over time

**Benefits**:
- More truly informed
- Greater participant control
- Increased trust
- Adaptability

**Challenges**:
- Infrastructure requirements
- Participant burden
- Logistical complexity

## Consent in Pragmatic Trials

### The Tension

**Pragmatic Goal**:
- Test in real-world conditions
- Minimal disruption to usual care
- Broad eligibility

**Consent Challenges**:
- Traditional consent may exclude some
- May not be feasible for all interventions
- May affect generalizability

### Approaches

**Opt-Out Consent**:
- Participants notified of research
- Can decline participation
- Assumed consent unless refusal
- Acceptable in some jurisdictions for minimal risk research

**Cluster Randomized Consent**:
- Consent at cluster level
- Individual consent may or may not be required
- Complex ethical considerations

**Waiver/Alteration**:
- IRB may waive for certain pragmatic trials
- Minimal risk determination
- Practicability argument
- Must meet regulatory criteria

## Consent in Low-Resource Settings

### Challenges

**Literacy**:
- Consent forms too complex
- Multiple languages needed
- Oral consent common

**Infrastructure**:
- Limited technology for eConsent
- Witness requirements may be difficult
- Storage of consent forms

**Cultural Context**:
- Community decision-making
- Family involvement
- Different views on autonomy

### Solutions

- Simplified consent forms
- Pictorial consent aids
- Community engagement
- Cultural adaptation
- Use of community health workers
- Ongoing relationship building

## Therapeutic Misconception

### Definition

The belief that research is designed to benefit the individual participant, rather than to generate generalizable knowledge

### Contributing Factors

- Research conducted in clinical settings
- By treating physicians
- With therapeutic intent
- Using investigational treatments

### Mitigation Strategies

- Clear explanation of research purpose
- Emphasis on differences between research and treatment
- Discussion of uncertainties
- Clarification that primary goal is knowledge generation
- Ongoing reinforcement during trial

### Impact

- May compromise voluntariness
- May affect risk-benefit assessment
- May lead to unrealistic expectations
- May undermine true informed consent

## Measuring Consent Understanding

### Why Measure?

- Cannot ensure valid consent without understanding
- High risk of inadequate comprehension
- Regulatory expectations
- Ethical imperative

### Methods

**Quiz/Testing**:
- Multiple choice questions
- True/false questions
- Open-ended questions
- Teach-back method

**Structured Tools**:
- MacArthur Competence Assessment Tool
- Understanding Consent Questionnaire
- Quality of Informed Consent (QuIC) instrument

**Best Practices**:
- Use in early development
- Identify problem areas
- Improve consent process
- Not punitive

## Withdrawal and Data Use

### Right to Withdraw

**Clarification Needed**:
- What happens to data already collected?
- Can data be deleted?
- What about biological samples?
- What about aggregate data?

**Possible Approaches**:
- Withdraw from further participation
- Data retained but not used
- Data deleted (if practicable)
- Samples destroyed
- Different options for different elements

**Ethical Considerations**:
- Scientific validity
- Rights of other participants
- Analysis of already collected data
- Pragmatic considerations

**Best Practice**:
- Specify at time of consent
- Allow participant to choose
- Clearly communicate options
- Respect participant choice
      `,
      keyPoints: [
        'Genetic research requires special consent considerations for family implications',
        'Broad consent for biobanking raises important questions about truly informed consent',
        'Pragmatic trials present unique challenges for traditional consent models',
        'Therapeutic misconception remains a significant ethical challenge'
      ],
      vocabulary: [
        { term: 'Incidental Finding', definition: 'Unintended discovery of potential clinical significance' },
        { term: 'Therapeutic Misconception', definition: 'Belief that research is primarily designed to benefit participants' },
        { term: 'VUS', definition: 'Variant of Uncertain Significance - genetic finding with unclear clinical meaning' }
      ]
    }
  ]
};
