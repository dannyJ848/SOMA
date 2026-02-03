import { ClinicalTrialsContent } from '../types';

export const enrollingTrialsContent: ClinicalTrialsContent = {
  id: 'enrolling-trials',
  title: 'Finding and Enrolling in Clinical Trials',
  category: 'clinical-trials',
  levels: [
    {
      level: 1,
      title: 'Introduction to Finding Clinical Trials',
      content: `
# Finding Clinical Trials

Clinical trials are research studies that test new treatments. Finding the right trial can be an important step in accessing cutting-edge medical care.

## Why Look for Clinical Trials?

**Potential Benefits**:
- Access to new treatments before they're widely available
- Close medical monitoring
- Contribution to medical knowledge
- Possible alternative when standard treatments haven't worked

**Important Considerations**:
- Not all trials have a treatment group (some have placebo)
- There may be side effects
- Participation requires time and commitment
- Insurance may not cover all costs

## Where to Find Clinical Trials

### ClinicalTrials.gov

The largest database of clinical trials worldwide:
- Lists studies from around the world
- Includes both U.S. and international trials
- Free and publicly accessible
- Updated regularly

### Other Sources

- **Research institutions**: Hospitals and universities conducting research
- **Patient advocacy groups**: Organizations focused on specific conditions
- **Doctors and specialists**: May know about relevant trials
- **Online patient communities**: Others with similar conditions

## Basic Search Tips

When searching for trials, you'll need to know:
- Your condition or disease
- Your location (or willingness to travel)
- Basic health information
- Current treatments

## What to Consider

Before enrolling, think about:
- Time commitment required
- Number of study visits
- Location of the study site
- Potential risks and benefits
- Costs and insurance coverage

## Remember

Participation is always voluntary. You can leave a clinical trial at any time, for any reason.
      `,
      keyPoints: [
        'ClinicalTrials.gov is the largest database of clinical trials worldwide',
        'Finding the right trial requires knowing your condition and location',
        'Participation involves time commitment and potential costs',
        'Participation is always voluntary'
      ],
      vocabulary: [
        { term: 'ClinicalTrials.gov', definition: 'The largest database of clinical trials worldwide' },
        { term: 'Placebo', definition: 'An inactive substance that looks like real treatment' },
        { term: 'Advocacy Group', definition: 'Organization that supports people with a specific condition' }
      ]
    },
    {
      level: 2,
      title: 'How to Search for Clinical Trials',
      content: `
# How to Search for Clinical Trials

## Using ClinicalTrials.gov

### Getting Started

**Website**: https://clinicaltrials.gov

**Basic search**:
1. Enter your condition or disease name
2. Optionally enter your location
3. Click search
4. Review results

### Understanding the Search Results

Each trial listing shows:
- **Study title**: Official name of the study
- **Status**: Recruiting, not yet recruiting, active, completed
- **Condition**: What condition is being studied
- **Interventions**: Treatments being tested
- **Location**: Where the study is taking place

### Refining Your Search

**Filter by status**:
- "Recruiting" - actively looking for participants
- "Not yet recruiting" - will open soon
- "Active, not recruiting" - ongoing but not adding participants
- "Completed" - finished

**Filter by location**:
- Enter city, state, or country
- Set maximum distance
- Consider multiple sites

**Other filters**:
- Study results (with or without results)
- Study type
- Age groups
- Gender
- Sponsor

## Understanding Trial Information

### Key Sections of a Trial Listing

**Brief Summary**: Overview of the study purpose

**Detailed Description**: Full study description including:
- Background
- Study design
- Procedures

**Eligibility Criteria**: Who can and cannot participate

**Contacts and Locations**: Where and how to get more information

## Reading Eligibility Criteria

### Inclusion Criteria

Requirements you must meet to participate:
- Age range
- Diagnosis confirmation
- Disease stage or characteristics
- Health status
- Previous treatments

### Exclusion Criteria

Factors that prevent participation:
- Other medical conditions
- Current medications
- Previous treatments
- Pregnancy or breastfeeding
- Specific laboratory values

## Preparing for Contact

Before contacting a study site, have ready:
- Your medical history
- Current medications
- Previous treatments for your condition
- Questions about the study
- Insurance information

## Questions to Ask

When you contact a study site:
- Is the study still enrolling?
- What does participation involve?
- How long does the study last?
- What are the potential risks and benefits?
- Will I receive the active treatment or placebo?
- What costs will I incur?
- Who do I contact with questions?
      `,
      keyPoints: [
        'ClinicalTrials.gov allows filtering by status, location, and other criteria',
        'Eligibility criteria include both inclusion and exclusion requirements',
        'Understanding trial listings involves reviewing multiple sections',
        'Prepare questions and information before contacting study sites'
      ],
      vocabulary: [
        { term: 'Inclusion Criteria', definition: 'Requirements that must be met to participate in a study' },
        { term: 'Exclusion Criteria', definition: 'Factors that prevent someone from participating in a study' },
        { term: 'Study Site', definition: 'Location where a clinical trial is conducted' }
      ]
    },
    {
      level: 3,
      title: 'Evaluating Clinical Trials',
      content: `
# Evaluating Clinical Trials

## Assessing Trial Quality

### Phase of the Trial

Earlier phases:
- **Phase I**: Safety testing, small number of participants
- **Phase II**: Effectiveness testing, moderate number of participants

Later phases:
- **Phase III**: Large-scale testing, more evidence of effectiveness
- **Phase IV**: Post-approval monitoring

**Considerations**:
- Earlier phases may have more uncertainty
- Later phases have more safety data
- Phase III trials are often considered the "gold standard"

### Study Design

**Randomized**:
- Participants assigned by chance to different treatments
- Reduces bias
- Considered higher quality

**Controlled**:
- Has a comparison group
- Placebo or active control
- Better able to determine effectiveness

**Blinded**:
- Participants and/or researchers don't know treatment assignment
- Reduces bias in assessment
- Double-blind is highest quality

### Sample Size

**Larger trials**:
- More statistical power
- More reliable results
- Better ability to detect effects

**Smaller trials**:
- May be preliminary
- Results less definitive
- More common in early phases or rare diseases

## Understanding Risks and Benefits

### Potential Benefits

**Direct benefits** (not guaranteed):
- Access to new treatment
- Better outcomes than standard care
- More frequent monitoring

**Indirect benefits**:
- Contribution to science
- Helping others with similar conditions
- Learning more about your condition

### Potential Risks

**Treatment risks**:
- Unknown side effects
- Treatment may not work
- May be worse than standard care

**Study risks**:
- Additional tests and procedures
- Time commitment
- Travel requirements
- Placebo possibility

**Financial risks**:
- Costs not covered by insurance
- Time off work
- Travel expenses

## Evaluating the Sponsor and Investigator

### Sponsor Types

**Industry sponsors**:
- Pharmaceutical or device companies
- Have resources for well-conducted trials
- May have commercial interests

**Government sponsors**:
- NIH, other agencies
- Public interest focus
- May address under-researched areas

**Academic sponsors**:
- Universities and research institutions
- Often investigator-initiated
- May address niche questions

### Investigator Experience

**Questions to consider**:
- Has the investigator conducted trials before?
- Do they have expertise in this condition?
- Is the research center experienced?
- What is the track record of the site?

## Understanding Study Results

### Previous Trials

Look for information about:
- Earlier phases of this treatment
- Similar treatments
- Results in animal studies
- Results in laboratory studies

### Published Literature

**Places to search**:
- PubMed (pubmed.gov)
- Medical journals
- Conference abstracts
- Research institution websites

**What to look for**:
- Previous results with this treatment
- Safety information
- Effectiveness data
- Expert opinions

## Red Flags

Be cautious if:
- You're pressured to enroll
- All risks are downplayed
- Benefits are guaranteed
- Costs aren't clearly explained
- The study sounds too good to be true
- Contact information is missing or vague
- The study isn't registered appropriately
      `,
      keyPoints: [
        'Trial quality depends on phase, design, and sample size',
        'Understanding risks and benefits is essential before enrollment',
        'Sponsor and investigator experience can affect trial quality',
        'Be aware of red flags when evaluating trials'
      ],
      vocabulary: [
        { term: 'Randomized', definition: 'Participants assigned to treatment groups by chance' },
        { term: 'Sample Size', definition: 'The number of participants in a study' },
        { term: 'Investigator', definition: 'The person in charge of conducting a clinical trial' }
      ]
    },
    {
      level: 4,
      title: 'The Enrollment Process',
      content: `
# The Clinical Trial Enrollment Process

## Initial Contact

### Making Contact

**Methods**:
- Phone call to study site
- Email through trial listing
- Online form submission
- Referral from healthcare provider

**Be prepared to provide**:
- Name and contact information
- Basic health information
- Current medications
- Reason for interest in the study

### Pre-Screening

**Purpose**: Initial assessment of potential eligibility

**What happens**:
- Basic questions about your condition
- Questions about medical history
- Questions about current treatments
- Assessment of initial interest

**Possible outcomes**:
- Proceed to screening
- Not eligible (reason provided)
- Referred to another study

## Screening Visit

### Purpose of Screening

Confirm that you:
- Meet all eligibility criteria
- Understand the study
- Are willing to participate
- Can safely participate

### What to Expect

**Tests and procedures**:
- Physical examination
- Blood tests
- Imaging studies
- Heart function tests
- Questionnaires about health and quality of life

**Discussions**:
- Detailed study explanation
- Consent process
- Time commitment discussion
- Questions and answers

### Informed Consent

**The consent document**:
- Explains all study procedures
- Describes risks and benefits
- Explains alternatives
- Outlines your rights as a participant

**The consent process**:
- Receive the consent document
- Time to read and consider
- Opportunity to ask questions
- Document signed by both you and researcher

**Remember**: Signing consent doesn't obligate you to participate. It documents that you understand and agree.

## Eligibility Determination

### Review Process

**After screening**:
- Test results reviewed
- Eligibility confirmed
- Final decision made by investigator

**Possible outcomes**:
- Eligible and proceed
- Not eligible (specific reason)
- Deferred (need more information)

### Common Reasons for Ineligibility

**Medical reasons**:
- Lab values outside range
- Other medical conditions
- Current medications
- Previous treatments

**Procedural reasons**:
- Unable to commit time
- Cannot attend required visits
- Transportation issues

## Randomization

### If Randomized

**Assignment to treatment group**:
- Usually done after screening
- May be done at enrollment visit
- Done by chance (like flipping a coin)
- Neither you nor your doctor chooses

**Possible groups**:
- Active treatment
- Placebo (inactive treatment)
- Active comparator (other treatment)
- Different doses of treatment

**Blinding**:
- You may not know which group you're in
- Your doctor may not know
- Designed to reduce bias

## Baseline Assessment

### What's Measured

Before starting treatment:
- Current health status
- Disease characteristics
- Baseline symptoms
- Quality of life
- Laboratory values

**Purpose**:
- Establish starting point
- Allow comparison to later measurements
- Document your health before treatment

## Beginning the Study

### First Treatment Visit

**What happens**:
- Study treatment administered
- Instructions provided
- Side effect monitoring discussed
- Emergency contact information provided
- Next visit scheduled

**What you should know**:
- How to take the treatment
- What side effects to watch for
- Who to contact with questions
- When to return for next visit
- What to do in an emergency
      `,
      keyPoints: [
        'Enrollment involves initial contact, pre-screening, and screening visits',
        'Screening includes tests and the informed consent process',
        'Eligibility is determined after all screening information is reviewed',
        'Randomization assigns treatment by chance, not by choice'
      ],
      vocabulary: [
        { term: 'Screening', definition: 'Process of determining if someone meets eligibility criteria' },
        { term: 'Baseline Assessment', definition: 'Initial evaluation before treatment begins' },
        { term: 'Eligibility Determination', definition: 'Final decision on whether someone can participate' }
      ]
    },
    {
      level: 5,
      title: 'Special Considerations and Challenges',
      content: `
# Special Considerations in Clinical Trial Enrollment

## Geographic and Access Considerations

### Distance to Study Site

**Challenges**:
- Travel time and costs
- Transportation needs
- Accommodation for multi-day visits
- Time away from work and family

**Solutions**:
- Look for local trials first
- Consider trials with fewer visits
- Ask about travel reimbursement
- Explore virtual/remote participation options

### Multi-Center Trials

**Advantages**:
- More location options
- May have site closer to you
- Larger total sample size
- More generalizable results

**Considerations**:
- Each site may have different investigator
- Enrollment may vary by site
- Site-specific factors may affect experience

## Financial Considerations

### Understanding Costs

**Research-related costs** (usually covered):
- Study drug/device
- Research procedures and tests
- Additional monitoring

**Standard care costs** (often billed to insurance):
- Standard medical care
- Routine tests
- Hospital stays
- Usual treatments

**Participant costs** (often not covered):
- Travel
- Parking
- Meals
- Time off work
- Childcare

### Insurance Coverage

**Questions to ask**:
- Does my insurance cover standard care costs?
- Will there be out-of-pocket expenses?
- Are any costs covered by the study?
- Is there financial assistance available?

### Clinical Research Billing

**Complexities**:
- Medicare coverage rules for trials
- Private insurance variability
- State requirements differ
- Billing errors common

**Recommendations**:
- Get cost information in writing
- Contact insurance before enrolling
- Understand what you'll owe
- Ask about financial assistance

## Timing and Life Considerations

### Duration of Participation

**Consider**:
- How long will the study last?
- How many visits are required?
- How long is each visit?
- Are there overnight stays?

**Life impact**:
- Work schedule
- Family responsibilities
- Other commitments
- Special events or plans

### Visit Scheduling

**Flexibility**:
- Are visits scheduled or flexible?
- What about missed visits?
- Make-up visit options
- Rescheduling policies

## Special Populations

### Pediatric Trials

**Additional considerations**:
- Parent/guardian consent required
- Child assent (when age-appropriate)
- Long-term effects more concerning
- Dosing and safety issues

**Finding pediatric trials**:
- Pediatric-specific sites
- Children's hospitals
- Academic medical centers

### Geriatric Trials

**Additional considerations**:
- Multiple medications
- Comorbid conditions
- Transportation challenges
- Cognitive changes

**Questions to ask**:
- Will other medications be affected?
- Are there age restrictions?
- Is assistance available?

### Pregnant and Breastfeeding

**Special concerns**:
- Most trials exclude pregnancy
- Potential fetal risks
- Breastfeeding considerations
- Strict contraception requirements

**Finding options**:
- Some trials specifically include pregnant women
- Pregnancy registries
- Postpartum trials

## Expanding Access (Compassionate Use)

### What Is Expanded Access?

Use of investigational treatment outside of clinical trial:
- For serious or immediately life-threatening conditions
- When no comparable alternative available
- When patient cannot enroll in trial
- When patient benefit likely outweighs risks

### Requirements

**Patient**:
- Serious or life-threatening condition
- No acceptable alternative treatment
- Cannot enroll in existing trial
- Doctor agrees to supervise treatment

**Product**:
- Evidence of potential benefit
- No unacceptable risk
- Available for expanded access

**Company**:
- Willing to provide access
- Adequate supply
- Monitoring capabilities

### How to Access

**Process**:
- Discuss with treating physician
- Physician contacts company
- IRB approval required
- FDA approval required (for U.S.)
- Consent process

**Challenges**:
- Not guaranteed
- May be expensive
- Insurance may not cover
- Limited availability

## Withdrawing from a Trial

### Your Rights

**You can withdraw**:
- At any time
- For any reason
- Without penalty
- Without affecting your medical care

### Process

**Discuss with study team**:
- Reason for withdrawal
- Medical concerns
- Follow-up care needs
- Data use preferences

**Options**:
- No further study participation
- No further study treatment but continued follow-up
- Withdraw consent for data use

### Considerations

**Medical care**:
- Alternative treatments
- Transition plan
- Follow-up schedule
- Ongoing monitoring needs

**Data**:
- Data already collected may still be used
- Specify preferences for future data use
- Understand implications for study results
      `,
      keyPoints: [
        'Geographic and financial factors significantly impact trial participation',
        'Understanding costs and insurance coverage is essential before enrolling',
        'Special populations have unique considerations and challenges',
        'Expanded access provides an option for some who cannot enroll in trials'
      ],
      vocabulary: [
        { term: 'Multi-Center Trial', definition: 'Study conducted at multiple locations' },
        { term: 'Expanded Access', definition: 'Use of investigational treatment outside clinical trials for seriously ill patients' },
        { term: 'Assent', definition: 'Affirmative agreement from minors who cannot legally give consent' }
      ]
    }
  ]
};
