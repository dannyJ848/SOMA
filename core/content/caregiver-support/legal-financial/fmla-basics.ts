/**
 * FMLA Basics - Educational Content
 *
 * Guidance for caregivers on the Family and Medical Leave Act,
 * understanding eligibility, and using leave for caregiving.
 */

import { EducationalContent } from "../../types";

export const fmlaBasics: EducationalContent = {
  id: "caregiver-fmla-basics",
  type: "concept",
  name: "FMLA Basics",
  alternateNames: ["Family and Medical Leave", "Caregiver Leave", "Medical Leave"],

  levels: {
    1: {
      level: 1,
      summary: "FMLA (Family and Medical Leave Act) allows eligible workers to take unpaid time off to care for a seriously ill family member without losing their job.",
      explanation: `The Family and Medical Leave Act can help when you need time off work to care for a loved one.

**What Is FMLA?**
- A federal law
- Allows unpaid time off for family and medical reasons
- Your job is protected while you are away
- Up to 12 weeks in a 12-month period

**Who Can Use FMLA?**
You must work for:
- A company with 50+ employees within 75 miles
- Be employed for at least 12 months
- Have worked 1,250 hours in the past year

**When Can You Use It?**
- Care for spouse with serious health condition
- Care for parent with serious health condition
- Care for child with serious health condition
- Your own serious health condition
- New baby or adoption

**What FMLA Provides**
- Up to 12 weeks unpaid leave
- Same or similar job when you return
- Continued health insurance (you pay your portion)
- Cannot be fired for taking leave

**Important Points**
- Leave is UNPAID (unless you use vacation/sick time)
- You may need to provide medical documentation
- You must give 30 days notice if possible
- Some leave can be taken in smaller chunks

**Steps to Take**
1. Talk to your HR department
2. Get the required forms
3. Have doctor complete medical certification
4. Return forms on time
5. Stay in touch with employer during leave`,
      keyTerms: [
        { term: "FMLA", definition: "Family and Medical Leave Act - federal law providing job-protected leave for family and medical reasons" },
        { term: "serious health condition", definition: "Illness, injury, or condition requiring inpatient care or continuing treatment by a healthcare provider" },
        { term: "job protection", definition: "Right to return to same or equivalent job after FMLA leave" },
      ],
      analogies: [
        "FMLA is like pressing pause on your job - you can stop for a while and come back to where you were.",
        "Think of it as job insurance for family emergencies - it protects your position while you handle important family needs.",
      ],
      examples: [
        "When Maria\"s father had a stroke, she used FMLA to take 8 weeks off to help him through rehabilitation.",
        "Tom uses intermittent FMLA leave to take his wife to her chemotherapy appointments twice a month.",
      ],
    },
    2: {
      level: 2,
      summary: "FMLA provides eligible employees up to 12 weeks of unpaid, job-protected leave annually for qualifying family and medical reasons, with specific eligibility requirements and certification processes.",
      explanation: `**FMLA Eligibility Requirements**

| Requirement | Details |
|-------------|---------|
| Employer size | 50+ employees within 75 miles |
| Employment length | At least 12 months |
| Hours worked | 1,250+ hours in past 12 months |
| Location | At a covered worksite |

**Qualifying Reasons for Leave**

**For Caregivers**
- Care for spouse with serious health condition
- Care for parent with serious health condition
- Care for child (under 18 or incapable of self-care) with serious health condition

**Serious Health Condition Includes**
- Inpatient care
- Incapacity requiring absence from work/school 3+ days with continuing treatment
- Chronic conditions requiring periodic treatment
- Pregnancy-related conditions
- Long-term/permanent incapacity

**Types of Leave**

| Type | How It Works |
|------|--------------|
| Continuous | All 12 weeks at once |
| Intermittent | In separate blocks of time |
| Reduced schedule | Working fewer hours per week |

**Intermittent Leave for Caregiving**
- For medical appointments
- During episodes of serious illness
- Must be medically necessary
- Employer may transfer to different position

**Employee Obligations**

**Notice Requirements**
- 30 days advance notice if foreseeable
- As soon as practicable if unforeseeable
- Follow employer\"s notice procedures

**Medical Certification**
- Complete certification form
- Healthcare provider completes
- Return within 15 days
- May need recertification periodically

**During Leave**
- Maintain health insurance premiums
- May use accrued paid leave
- Follow employer contact requirements
- Cannot work elsewhere (typically)

**Employer Obligations**
- Cannot retaliate
- Must restore to same/equivalent job
- Must maintain benefits
- Provide required notices

**State Laws**
- Some states have additional protections
- May cover smaller employers
- May provide paid leave
- May cover more family members`,
      keyTerms: [
        { term: "intermittent leave", definition: "FMLA leave taken in separate blocks of time rather than all at once" },
        { term: "medical certification", definition: "Form completed by healthcare provider documenting need for FMLA leave" },
        { term: "reduced schedule leave", definition: "FMLA leave reducing usual weekly or daily work schedule" },
        { term: "equivalent position", definition: "Job with same pay, benefits, and working conditions to which employee must be restored" },
      ],
      analogies: ["Intermittent FMLA is like having a flexible pass - you can use your 12 weeks in the pieces that work for your caregiving needs."],
    },
    3: {
      level: 3,
      summary: "FMLA administration requires understanding regulatory requirements, certification processes, employer-employee rights and obligations, and interaction with other leave laws and policies.",
      explanation: `## Regulatory Framework

**Department of Labor Regulations**
- 29 CFR Part 825
- Detailed implementation rules
- Employer and employee rights/obligations
- Enforcement mechanisms

**Coverage Analysis**
| Factor | Covered | Not Covered |
|--------|---------|-------------|
| Private employer 50+ | Yes | Under 50 |
| Public agencies | Yes | N/A |
| Schools | Yes | N/A |
| Joint employer | Counted | Varies |

**Serious Health Condition Definition**
- Inpatient care (hospital, hospice, nursing facility)
- Continuing treatment: 3+ days incapacity with treatment
- Pregnancy or prenatal care
- Chronic conditions
- Permanent/long-term incapacity
- Multiple treatments

## Certification Process

**Initial Certification**
- Form WH-380-F (family member)
- 15 calendar days to return
- Sufficient certification standards
- Employer may request clarification

**Recertification**
- At each leave request (intermittent)
- If circumstances change
- If employer doubts continuing need
- Every 6 months minimum

**Authentication and Clarification**
- Employer may contact provider
- Only through HR (not supervisor)
- Cannot request diagnosis
- Limited to certification matters

## Rights and Obligations

**Employee Rights**
- Job restoration
- Benefits maintenance
- Freedom from retaliation
- Privacy protections

**Employee Obligations**
- Proper notice
- Medical certification
- Recertification compliance
- Following employer policies

**Employer Rights**
- Require certification
- Designate leave
- Request fitness for duty
- Reasonable contact during leave

**Employer Obligations**
- Post required notices
- Provide eligibility notice (5 days)
- Provide rights and responsibilities notice
- Provide designation notice (5 days)

## Interaction with Other Laws

**State FMLA Laws**
- California, New Jersey, New York, etc.
- May be more generous
- May cover additional family members
- May provide paid leave

**ADA Interaction**
- Different eligibility
- Different purposes
- May have overlapping coverage
- Reasonable accommodation considerations

**Workers\" Compensation**
- Can run concurrently
- Different purposes
- Coordination rules

## Common Issues

**Attendance and Discipline**
- Cannot count FMLA absences
- Must apply neutral policies
- Performance standards apply
- Fraud investigation permitted

**Interference and Retaliation**
- Interference: denying FMLA rights
- Retaliation: adverse action for using FMLA
- Remedies available
- Burden of proof issues`,
      keyTerms: [
        { term: "serious health condition", definition: "Regulatory definition requiring inpatient care or continuing treatment for illness, injury, or condition" },
        { term: "WH-380-F", definition: "Department of Labor form for medical certification of family member\"s serious health condition" },
        { term: "designation notice", definition: "Employer notice informing employee whether leave qualifies as FMLA" },
        { term: "interference", definition: "Employer action denying or discouraging exercise of FMLA rights" },
      ],
      clinicalNotes: "Complete FMLA certification forms thoroughly and accurately. Document medical necessity for leave. Specify if intermittent leave needed and expected frequency. Use standard form or equivalent. Maintain patient confidentiality in documentation.",
    },
    4: {
      level: 4,
      summary: "FMLA practice integrates compliance management, coordination with state and local leave laws, litigation avoidance strategies, and emerging paid leave frameworks within employer workforce management.",
      explanation: `## Compliance Management

**Documentation Systems**
- Leave tracking
- Certification management
- Communication records
- Policy documentation

**Risk Areas**
| Risk | Mitigation |
|------|-----------|
| Inconsistent application | Written policies, training |
| Retaliation claims | Documentation, neutral policies |
| Certification issues | Clear procedures, timelines |
| Intermittent abuse | Careful tracking, recertification |

**HR Best Practices**
- Consistent policy application
- Thorough documentation
- Manager training
- Regular audits

## State Leave Law Landscape

**Paid Family Leave States**
- California (PFL)
- New Jersey (FLI)
- New York (PFL)
- Rhode Island (TCI)
- Washington (PFML)
- Massachusetts (PFML)
- Others expanding

**State FMLA Expansions**
- Smaller employer coverage
- Extended family definition
- Longer leave duration
- Domestic violence leave

**Coordination Requirements**
- Run concurrently when possible
- Apply most generous provision
- Track separately
- Different notice requirements

## Litigation Trends

**Common Claims**
- Retaliation
- Interference
- Denial of leave
- Failure to restore

**Evidentiary Issues**
- Timing of adverse action
- Comparator evidence
- Pretext analysis
- Documentation quality

**Damage Awards**
- Back pay
- Front pay
- Liquidated damages
- Attorney fees

## Paid Leave Evolution

**Federal Proposals**
- FAMILY Act proposals
- Build Back Better provisions
- Partisan differences
- Progress limited

**Employer Programs**
- Voluntary paid leave
- Short-term disability integration
- PTO banks
- Competitive advantage

**Trends**
- Paid leave expansion
- Broader family definitions
- Increased enforcement
- Technology solutions

## Workforce Management

**Planning Considerations**
- Coverage during absence
- Cross-training
- Temporary staffing
- Workload redistribution

**Supporting Employees**
- Clear communication
- Flexibility where possible
- Return-to-work planning
- Ongoing accommodation needs

**Metrics and Analysis**
- Leave usage patterns
- Cost analysis
- Productivity impact
- Employee satisfaction`,
      keyTerms: [
        { term: "state paid family leave", definition: "State programs providing wage replacement during family caregiving leave" },
        { term: "FMLA retaliation", definition: "Adverse employment action against employee for exercising FMLA rights" },
        { term: "concurrent leave", definition: "Running FMLA and other leave simultaneously to avoid stacking" },
        { term: "FAMILY Act", definition: "Proposed federal legislation creating national paid family and medical leave" },
        { term: "liquidated damages", definition: "Double damages available in FMLA cases for willful violations" },
      ],
      clinicalNotes: "Understand employer FMLA obligations for appropriate patient advocacy. Complete certification with sufficient detail. Document treatment needs clearly. Address intermittent leave medical necessity. Support patients navigating leave issues.",
    },
    5: {
      level: 5,
      summary: "FMLA research examines policy effectiveness, international comparisons, equity implications, and future policy directions while addressing the intersection of work, caregiving, and health outcomes.",
      explanation: `## Policy Research

**Effectiveness Studies**
- Leave-taking patterns
- Job protection outcomes
- Health effects
- Economic impacts

**Limitations Research**
- Coverage gaps (40% of workers excluded)
- Affordability (unpaid)
- Knowledge gaps
- Enforcement challenges

**Reform Analyses**
- Expansion proposals
- Paid leave integration
- Enforcement enhancement
- Coverage expansion

## International Comparison

**Comparative Frameworks**
| Country | Paid Leave | Duration | Wage Replacement |
|---------|-----------|----------|------------------|
| US (FMLA) | No | 12 weeks | 0% |
| Canada | Yes | 15 weeks | 55% |
| UK | Yes | 18 weeks | Varies |
| Germany | Yes | 10 days/year | 100% |
| Sweden | Yes | 120 days | 80% |

**Lessons from Other Countries**
- Paid leave feasibility
- Financing mechanisms
- Utilization patterns
- Economic effects

## Equity Analysis

**Coverage Disparities**
- Low-wage workers often excluded
- Part-time workers excluded
- Small employer employees excluded
- Gig economy workers excluded

**Utilization Disparities**
- Income effects (cannot afford unpaid)
- Knowledge disparities
- Employer culture
- Gender differences

**Health Disparities**
- Access to caregiving leave
- Caregiver health outcomes
- Care recipient outcomes
- Population health effects

## Economic Research

**Cost-Benefit Analysis**
- Employer costs
- Productivity effects
- Turnover reduction
- Society-level benefits

**Labor Market Effects**
- Employment effects
- Wage effects
- Gender equity
- Career impacts

**Business Case**
- Retention benefits
- Recruitment advantage
- Productivity maintenance
- Employee well-being

## Future Directions

**Policy Development**
- Paid leave expansion
- Coverage expansion
- Enforcement strengthening
- State-federal coordination

**Research Priorities**
- Long-term outcomes
- Policy design optimization
- Implementation effectiveness
- Equity interventions

**Advocacy**
- National paid leave
- Coverage expansion
- Enforcement resources
- Employer engagement

## Implementation Science

**Effective Implementation**
- Clear policies
- Training programs
- Technology solutions
- Consistent application

**Barriers**
- Employer resistance
- Knowledge gaps
- Enforcement limitations
- Resource constraints

**Solutions**
- Education initiatives
- Technical assistance
- Enforcement enhancement
- Best practice sharing`,
      keyTerms: [
        { term: "coverage gap", definition: "Portion of workforce not eligible for FMLA due to employer size, hours, or tenure" },
        { term: "wage replacement", definition: "Percentage of salary paid during leave, zero under federal FMLA" },
        { term: "gig economy exclusion", definition: "Independent contractors and gig workers not covered by FMLA" },
        { term: "paid leave financing", definition: "Mechanisms for funding paid leave including social insurance, employer mandates" },
        { term: "leave utilization", definition: "Patterns of who takes leave and barriers to usage" },
      ],
      clinicalNotes: `Systems implementation:
1. Support patients understanding FMLA rights
2. Complete certifications appropriately
3. Advocate for patient access to leave
4. Understand coverage limitations
5. Research state leave options
6. Support policy advocacy for caregiver leave`,
    },
  },

  media: [
    { id: "fmla-guide", type: "diagram", filename: "fmla-eligibility-guide.svg", title: "FMLA Eligibility Guide", description: "Visual guide to FMLA eligibility and process" },
  ],

  citations: [
    { id: "dol-fmla", type: "website", title: "Family and Medical Leave Act", source: "U.S. Department of Labor", url: "https://www.dol.gov/agencies/whd/fmla" },
    { id: "npwf-fmla", type: "website", title: "FMLA Resources", source: "National Partnership for Women & Families", url: "https://www.nationalpartnership.org/" },
  ],

  crossReferences: [
    { targetId: "caregiver-financial-assistance", targetType: "concept", relationship: "related", label: "Financial Assistance" },
    { targetId: "caregiver-preventing-burnout", targetType: "concept", relationship: "related", label: "Preventing Burnout" },
  ],

  tags: { systems: ["caregiver-support"], topics: ["FMLA", "family leave", "medical leave", "workplace", "caregiver rights"], clinicalRelevance: "high" },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default fmlaBasics;
