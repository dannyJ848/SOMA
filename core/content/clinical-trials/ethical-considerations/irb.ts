import { ClinicalTrialsContent } from '../types';

export const irbContent: ClinicalTrialsContent = {
  id: 'irb',
  title: 'Institutional Review Boards (IRB)',
  category: 'clinical-trials',
  levels: [
    {
      level: 1,
      title: 'Introduction to IRBs',
      content: `
# Introduction to Institutional Review Boards (IRB)

An Institutional Review Board (IRB) is a group of people who review and monitor research involving humans. Their job is to protect the rights and welfare of research participants.

## What Is an IRB?

An IRB is a committee that:
- Reviews research before it starts
- Approves, requires changes to, or disapproves research
- Monitors research while it's ongoing
- Ensures participant protections are in place

## Why Do IRBs Exist?

IRBs exist because history has shown that human research can harm people if not properly conducted. Past research abuses led to requirements for ethical review.

**Key Purpose**: To ensure that research respects:
- The dignity and rights of participants
- The safety of participants
- Ethical principles and regulations

## What IRBs Review

IRBs review all human research to ensure:
- Risks to participants are minimized
- Risks are reasonable compared to potential benefits
- Selection of participants is fair
- Informed consent will be obtained
- Privacy and confidentiality are protected
- The research has scientific merit

## Common Names

IRBs may be called:
- IRB (Institutional Review Board)
- EC (Ethics Committee)
- REC (Research Ethics Committee)

All refer to similar committees that protect research participants.

## For Participants

IRB approval means:
- Someone independent reviewed the research
- Ethical concerns were addressed
- Participant protections are in place
- The research can proceed ethically

This doesn't mean the research is risk-free, but that risks have been carefully considered.
      `,
      keyPoints: [
        'IRBs review and monitor research involving human participants',
        'Their purpose is to protect participant rights and welfare',
        'They review risks, benefits, fairness, consent, and privacy',
        'IRB approval indicates ethical protections are in place'
      ],
      vocabulary: [
        { term: 'IRB', definition: 'Institutional Review Board - committee that reviews human research' },
        { term: 'Ethics Committee', definition: 'Another term for IRB, commonly used internationally' },
        { term: 'Human Subjects Research', definition: 'Research that involves living human beings as participants' }
      ]
    },
    {
      level: 2,
      title: 'IRB Composition and Responsibilities',
      content: `
# IRB Composition and Responsibilities

## Who Serves on an IRB?

IRB committees are diverse to ensure comprehensive review:

### Required Members

**Scientific Members**:
- Researchers with expertise in relevant fields
- Understand research methods and design

**Non-Scientific Members**:
- Community representatives
- May not have scientific background
- Bring community perspective

**Members Not Affiliated with the Institution**:
- Independent members
- Not employed by the research institution
- Represent community interests

### Additional Expertise (as needed)

- Prisoner advocate (for prisoner research)
- Children's advocate (for pediatric research)
- Vulnerable population representatives
- Legal experts
- Ethicists
- Specialized medical experts

### Typical IRB Size

- Minimum of 5 members (federal requirement)
- Often 10-20 members
- Adequate diversity of expertise and perspectives

## IRB Responsibilities

### Initial Review

**Before research begins, IRB reviews**:
- Research protocol (study plan)
- Informed consent documents
- Recruitment materials
- Investigator brochure
- Data collection tools
- Any participant materials

### Categories of Review

**Full Board Review**:
- More than minimal risk research
- Reviewed at convened meeting
- Majority approval required
- Quorum requirements met

**Exempt Review**:
- Research exempt from regulations
- Still requires IRB determination
- Categories defined in regulations
- Examples: some educational tests, surveys

**Expedited Review**:
- Minimal risk research
- Reviewed by one IRB member
- Categories specified in regulations
- Examples: blood draws, medical record review

### Ongoing Responsibilities

**Continuing Review**:
- Periodic re-review of ongoing research
- Typically at least annually
- More frequent for high-risk research
- Can require modifications or stop research

**Monitoring**:
- Review of protocol deviations
- Review of adverse events
- Review of unanticipated problems
- Assess compliance with approved protocol

### Modifications

**Any changes require prior IRB approval**:
- Protocol changes
- Consent form changes
- Recruitment changes
- Addition of new procedures

**Exceptions**:
- Changes to eliminate immediate hazard
- Must be reported promptly

## IRB Decisions

**Approval**: Research can proceed as approved

**Modifications Required**: Changes must be made before approval

**Disapproval**: Research cannot proceed (can be resubmitted)

**Deferred**: More information needed
      `,
      keyPoints: [
        'IRBs include scientific, non-scientific, and unaffiliated members',
        'Categories of review are full board, expedited, and exempt',
        'IRBs conduct initial review, continuing review, and review modifications',
        'IRBs can approve, require modifications, defer, or disapprove research'
      ],
      vocabulary: [
        { term: 'Minimal Risk', definition: 'Risk no greater than daily life or routine physical/psychological tests' },
        { term: 'Protocol', definition: 'The detailed written plan for conducting research' },
        { term: 'Continuing Review', definition: 'Periodic IRB review of ongoing research' }
      ]
    },
    {
      level: 3,
      title: 'IRB Review Criteria and Process',
      content: `
# IRB Review Criteria and Process

## Federal Criteria for Approval

According to federal regulations (45 CFR 46.111), an IRB must approve research only if ALL of the following criteria are met:

### 1. Risks to Participants

**Risks are minimized** by:
- Using procedures consistent with sound research design
- Using procedures already being performed for diagnostic/therapeutic purposes
- Conducting research at sites convenient to participants

**Risks are reasonable** in relation to:
- Anticipated benefits (if any) to participants
- Expected knowledge to be gained
- Importance of the knowledge

### 2. Selection of Participants

Selection is:
- Equitable
- Fair distribution of burdens and benefits
- Appropriate to the research goals
- Not based on vulnerability or convenience alone

### 3. Informed Consent

- Adequate informed consent will be sought
- Appropriate to the research
- Understood by participants
- Properly documented

### 4. Safety Monitoring

- Adequate provisions for monitoring data
- Ensures participant safety
- Protects privacy
- Detects adverse events early

### 5. Privacy and Confidentiality

- Privacy of participants is protected
- Confidentiality of data is maintained
- Data security measures in place
- Privacy protections appropriate to the research

## The IRB Review Process

### Submission

**Researcher submits**:
- Protocol (study plan)
- Consent documents
- Recruitment materials
- Investigator brochure (for drug/device trials)
- Investigator's brochure (for industry-sponsored trials)
- Additional materials as required

### Initial Review

**Administrator reviews**:
- Completeness of submission
- Correct review category
- Required elements present
- Assigns to primary and secondary reviewers

### Committee Review

**Primary reviewer**:
- Detailed review of materials
- Presents to committee
- Recommends action

**Committee discussion**:
- All members can ask questions
- Concerns raised and addressed
- Expertise from various perspectives
- Motion made for action

### Determination

**Possible outcomes**:
- Approval
- Approval with stipulations/modifications
- Deferred (more information needed)
- Disapproval

**Documentation**:
- Minutes of meeting
- Determination letter to investigator
- Stipulations clearly specified
- Deadline for response

## Special Categories of Research

### Vulnerable Populations

**Additional protections for**:
- Children
- Prisoners
- Individuals with impaired decision-making capacity
- Economically or educationally disadvantaged
- Pregnant women and fetuses

**Additional considerations**:
- Are additional safeguards included?
- Is inclusion justified?
- Are risks minimized?
- Is consent process appropriate?

### Expedited Review Categories

**Eligible research**:
- Minimal risk
- Collections from healthy adults
- Moderate interventions with minimal risk
- Analysis of existing data/specimens

**Examples**:
- Blood draws (amount limits)
- Voice recordings
- Moderate exercise tests
- Medical record review
- Existing data/specimens analysis

### Exempt Categories

**Not actually exempt from review**:
- IRB must determine exemption
- Categories specified in regulations
- Common categories:
  - Educational research
  - Tests, surveys, interviews (some)
  - Benign behavioral interventions
  - Secondary analysis of existing data

## Continuing Review

### When Required

- At least annually
- More frequent if higher risk
- Based on protocol-specified timeline

### Process

- Progress report submitted
- Adverse events reviewed
- Enrollment status reviewed
- Risk-benefit reassessment
- May require modifications or suspension

### Outcomes

- Continue as is
- Continue with modifications
- Suspend enrollment
- Terminate study
      `,
      keyPoints: [
        'Federal regulations specify eight criteria that must all be met for approval',
        'Review involves submission, initial review, committee discussion, and determination',
        'Vulnerable populations receive additional protection',
        'Continuing review occurs at least annually'
      ],
      vocabulary: [
        { term: 'Equitable Selection', definition: 'Fair distribution of research benefits and burdens' },
        { term: 'Stipulations', definition: 'Required changes specified by IRB before approval' },
        { term: 'Deferred', definition: 'IRB decision that more information is needed' }
      ]
    },
    {
      level: 4,
      title: 'IRB Operations and Systems',
      content: `
# IRB Operations and Systems

## Types of IRB Organizations

### Institutional IRB

**Affiliated with single institution**:
- Hospital or university-based
- Reviews research at that institution
- Knowledgeable about local context
- May have limited capacity

### Central/Commercial IRB

**Independent review organizations**:
- Review for multiple sites
- Specialize in IRB review
- Often for multi-site trials
- Can accelerate start-up

### Reliance Arrangements

**One IRB reviews for multiple sites**:
- Reduces administrative burden
- Single IRB (sIRB) requirement for NIH-funded multi-site research
- Reliance agreements establish roles
- Local IRB may rely on reviewing IRB

## IRB Meeting Structure

### Convened Meetings

**Frequency**: Usually monthly, sometimes more often

**Quorum**: Majority of members must be present
- Including at least one non-scientist
- Including at least one unaffiliated member

**Agenda**:
- Call to order
- Conflict of interest declarations
- Review of minutes
- Continuing review
- Initial review (primary research agenda)
- New business

### Review Format

**Primary reviewer presents**:
- Summary of protocol
- Key ethical issues
- Risks and benefits
- Consent concerns
- Recommendation

**Committee discussion**:
- Questions for primary reviewer
- Concerns raised
- Expert opinions
- Motion made

### Voting

**Requirements**:
- Motion and second required
- Only voting members vote
- Member with conflict must leave room during discussion and vote
- Majority needed to approve

**Member with Conflict**:
- Cannot participate in review
- Cannot be present for discussion
- Cannot vote

## IRB Systems and Documentation

### Registration

**Federal requirement**:
- Register with OHRP
- Renew registration every 3 years
- Submit member list
- Submit written procedures

### Written Procedures

**Required policies for**:
- Membership
- Meeting procedures
- Review categories
- Decision-making
- Reporting requirements
- Record retention
- Conflicts of interest

### Records

**IRB must retain**:
- Meeting minutes
- Protocols and consent documents
- Correspondence
- Determinations
- Continuing review records
- Adverse event reports
- Deviation reports

**Retention period**:
- Minimum 3 years after research completion
- Often longer per institutional policy
- FDA requires different periods (2 years after IND approval)

## IRB Communication

### With Investigators

**Pre-review discussions**:
- Clarify requirements
- Answer questions
- Suggest modifications

**During review**:
- Requests for clarification
- Additional information needed
- Pre-meeting questions

**After determination**:
- Approval letters
- Stipulations/modifications
- Deferral letters
- Disapproval letters with rationale

### With Institutions

**Reporting**:
- Adverse event reporting
- Non-compliance
- Suspensions/terminations
- Federal reporting requirements

**OHRP reporting**:
- Unanticipated problems
- Serious non-compliance
- Suspensions/terminations
- IRB deviations

## IRB Quality Improvement

### Federal Oversight

**OHRP (Office for Human Research Protections)**:
- Evaluates compliance
- Responds to complaints
- Conducts site visits
- Provides guidance

**FDA**:
- Bioresearch monitoring (BIMO) program
- Inspections
- Enforcement actions

### Self-Assessment

**IRBs should assess**:
- Consistency of review
- Timeliness of review
- Quality of minutes
- Member education
- Process efficiency

### External Accreditation

**AAHRPP (Association for the Accreditation of Human Research Protection Programs)**:
- Voluntary accreditation
- Demonstrates commitment to quality
- Rigorous standards
- Increasingly common
      `,
      keyPoints: [
        'IRBs can be institutional, central/commercial, or use reliance arrangements',
        'Meetings require quorum including non-scientist and unaffiliated members',
        'Comprehensive documentation and record retention are required',
        'Quality improvement occurs through oversight, self-assessment, and accreditation'
      ],
      vocabulary: [
        { term: 'Quorum', definition: 'Minimum number of members required for official business' },
        { term: 'OHRP', definition: 'Office for Human Research Protections - oversees human research protection' },
        { term: 'AAHRPP', definition: 'Organization that accredits human research protection programs' }
      ]
    },
    {
      level: 5,
      title: 'Advanced IRB Topics and Contemporary Issues',
      content: `
# Advanced IRB Topics and Contemporary Issues

## Single IRB (sIRB) Mandate

### NIH Policy (2018)

**Requirement**: Multi-site research funded by NIH must use single IRB

**Rationale**:
- Reduce administrative burden
- Improve efficiency
- Accelerate research start-up
- Reduce duplication

**Implementation**:
- One IRB reviews for all sites
- Relying IRBs cede review
- Reliance agreements required
- Local considerations addressed

### Impact and Challenges

**Benefits**:
- Faster study initiation
- Reduced administrative costs
- More consistent review
- Centralized communication

**Challenges**:
- Loss of local context
- Institutional resistance
- Complex reliance agreements
- Local compliance concerns
- Financial arrangements

## Reliance Models

### Federal Wide Assurance (FWA) Reliance

**Options for institutions**:
- Rely on another institution's IRB
- Serve as IRB of record for others
- Participate in a reliance network

### Central IRBs

**Commercial options**:
- Advarra
- WIRB (Western IRB)
- Quorum Review
- Many others

**Considerations**:
- Cost structures
- Expertise in specific areas
- Turnaround time
- Quality of review

### Smart IRB Reliance

**NIH initiative**:
- Reliance agreement toolkit
- Standardized language
- Streamlined process
- Automatic reciprocity options

## IRB Review of Complex Studies

### Adaptive Design Trials

**Review challenges**:
- Protocols change based on interim data
- Pre-specified modifications
- Statistical complexity
- Safety monitoring

**IRB considerations**:
- Understanding design
- Approving flexible protocol
- Data monitoring committee role
- Safety monitoring procedures

### Pragmatic Trials

**Review challenges**:
- Broad eligibility
- Minimal interventions
- Data collection from EHR
- Potential waivers of consent

**IRB considerations**:
- Level of risk determination
- Consent waiver justification
- Privacy protections
- Data security

### Registries and Biobanks

**Review challenges**:
- Future unspecified research
- Broad consent
- Data sharing
- Return of results

**IRB considerations**:
- Broad consent process
- Governance structure
- Data sharing plans
- Return of results policy

## IRB Review of Social-Behavioral Research

### Different Risk Profile

**Risks often**:
- Psychological
- Social
- Economic
- Legal
- Reputational

**Less frequently**:
- Physical harm

### Special Considerations

**Privacy**:
- Sensitive information
- Potential for identification
- Social media research
- Online data collection

**Deception**:
- When scientifically justified
- Debriefing procedures
- Waiver of consent elements
- Potential harm

**Community-Based Research**:
- Community engagement
- Community-level consent
- Individual consent
- Cultural considerations

## Research With Limited Benefit

### Phase I Trials

**Characteristics**:
- Often no direct benefit
- Healthy volunteers
- First-in-human
- Safety focus

**IRB considerations**:
- Risk justification
- Payment for participation
- Inclusion of healthy volunteers
- Escalation schemes

### Healthy Volunteer Research

**Ethical concerns**:
- Risk without direct benefit
- Payment coerciveness
- Vulnerable populations
- Justice considerations

**IRB considerations**:
- Risk-benefit assessment
- Payment justification
- Inclusion/exclusion criteria
- Avoiding exploitation

## Emergency Research

### Exception from Informed Consent (EFIC)

**FDA regulation (21 CFR 50.24)**:

**Requirements**:
- Life-threatening condition
- Available treatments unproven or unsatisfactory
- Research cannot be done with consent
- Participation could benefit subject
- Community consultation
- Public disclosure
- Independent Data Monitoring Committee

**IRB role**:
- Approve EFIC use
- Review community consultation plan
- Ensure public disclosure
- Monitor safety

## Emerging Issues

### Artificial Intelligence in Research

**IRB considerations**:
- Algorithmic bias
- Privacy and data protection
- Transparency with participants
- Automated decision-making

### Social Media Research

**IRB considerations**:
- Public vs. private data
- Expectations of privacy
- Terms of service
- Data scraping

### Citizen Science Research

**IRB considerations**:
- Participant as researcher roles
- Level of involvement
- Consent processes
- Data ownership

### Research During Public Health Emergencies

**IRB considerations**:
- Expedited review
- Balance between science and urgency
- Use of unproven interventions
- Compassionate use protocols

## IRB Workload and Resource Challenges

### Increasing Demand

**Factors**:
- More research being conducted
- More complex studies
- Increasing regulatory requirements
- Limited resources

### Strategies

**Technology**:
- Electronic submission systems
- Online tracking
- Remote meeting options
- Automated workflows

**Efficiency**:
- Standardized templates
- Pre-review processes
- Member specialization
- Researcher education

**Risk-Based Approach**:
- More effort on higher-risk research
- Streamlined processes for lower-risk
- Proportionate review

### Future Directions

**Centralization**:
- Continued single IRB adoption
- Regional IRBs
- Specialized IRBs

**Innovation**:
- Artificial intelligence support
- Dynamic consent platforms
- Streamlined reliance
- Proportionate oversight
      `,
      keyPoints: [
        'Single IRB mandate for NIH-funded multi-site research has changed IRB landscape',
        'Complex study designs present unique review challenges',
        'Social-behavioral research has different risk profiles requiring specialized review',
        'Emerging issues like AI and social media present novel ethical questions'
      ],
      vocabulary: [
        { term: 'sIRB', definition: 'Single IRB - one IRB reviews for multiple research sites' },
        { term: 'FWA', definition: 'Federal Wide Assurance - agreement between institution and HHS' },
        { term: 'EFIC', definition: 'Exception from Informed Consent - for emergency research' }
      ]
    }
  ]
};
