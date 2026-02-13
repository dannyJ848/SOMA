/**
 * Prior Authorization
 *
 * Understanding the pre-approval process for healthcare services.
 */

import { EducationalContent } from '../../types';

export const priorAuthorization: EducationalContent = {
  id: 'concept-prior-authorization',
  type: 'concept',
  name: 'Prior Authorization',
  alternateNames: ['Pre-authorization', 'Pre-certification', 'Prior Approval'],

  levels: {
    1: {
      level: 1,
      summary: 'Sometimes your insurance needs to approve a treatment before you can get it. This is called prior authorization.',
      explanation: `**What Is Prior Authorization?**
Prior authorization means your insurance company needs to say "okay" before you can get certain treatments or medicines. They want to make sure the treatment is needed.

**When Is It Required?**
- Some expensive medicines
- Certain tests or scans
- Some surgeries
- Hospital stays that are not emergencies
- Special equipment

**How It Works:**

*Step 1:* Your doctor decides you need a treatment
*Step 2:* The doctor's office asks your insurance for approval
*Step 3:* Insurance reviews the request
*Step 4:* Insurance says yes or no
*Step 5:* If yes, you can get the treatment

**What You Can Do:**
- Ask if prior authorization is needed
- Help your doctor's office with information
- Follow up to check on the status
- Ask about alternatives if denied

**If It Is Denied:**
- Ask why it was denied
- Your doctor can appeal
- There might be a different option
- You can ask for another review

**Important Tips:**
- Prior authorization can take time
- Plan ahead for scheduled treatments
- Emergency care usually does not need prior authorization
- Keep records of all communications

**Remember:**
Prior authorization is to check if treatment is necessary. It is not about whether you deserve care!`,
      keyTerms: [
        { term: 'prior authorization', definition: 'Getting approval from insurance before receiving certain treatments' },
        { term: 'approval', definition: 'When insurance says yes to covering something' },
        { term: 'denial', definition: 'When insurance says no to covering something' },
      ],
      analogies: [
        'Prior authorization is like getting permission from a parent before buying something expensive - they want to make sure it is really needed.',
        'It is like calling ahead to make a reservation - you need to plan ahead to make sure there is a spot for you.',
      ],
      examples: [
        'A patient needs an MRI and their doctor\'s office gets approval from insurance first.',
        'Someone is prescribed a new medicine and finds out it needs prior authorization.',
      ],
    },
    2: {
      level: 2,
      summary: 'Prior authorization is an insurance requirement to verify medical necessity before covering certain treatments. Understanding the process helps prevent delays in care.',
      explanation: `**Understanding Prior Authorization:**

Prior authorization (PA) is a cost-control measure used by insurers to ensure treatments are medically necessary before agreeing to pay for them.

**Common Services Requiring PA:**

| Category | Examples |
|----------|----------|
| Medications | Brand-name drugs, specialty medications |
| Imaging | MRI, CT scans, PET scans |
| Procedures | Non-emergency surgery, specialty treatments |
| Equipment | Wheelchairs, CPAP machines |
| Services | Physical therapy, home health |

**The Process:**

*1. Initiation:*
- Provider identifies need for PA
- Gathers clinical information
- Submits request to insurer

*2. Review:*
- Insurance reviews against criteria
- May request more information
- Clinical reviewer evaluates

*3. Decision:*
- Approval: Proceed with treatment
- Denial: Reason provided
- Partial approval: Some elements covered

**Timeframes:**

| Request Type | Standard | Urgent |
|--------------|----------|--------|
| Decision deadline | 15 days typical | 24-72 hours |
| Varies by | State, plan type | Medical urgency |

**Your Role:**

*Be Proactive:*
- Ask if PA is needed before scheduling
- Provide requested information promptly
- Follow up on pending requests
- Keep track of authorization numbers

*If Denied:*
- Understand the reason
- Ask about alternative treatments
- Request reconsideration
- Pursue formal appeal

**Problems That Can Occur:**

| Issue | Solution |
|-------|----------|
| Delays | Follow up frequently |
| Denial | Appeal or alternative |
| Expired authorization | Re-request before service |
| Wrong information | Correct and resubmit |

**Emergency Exception:**
- Emergency care does not require PA
- Retroactive review may occur
- Focus on stabilization first`,
      keyTerms: [
        { term: 'medical necessity', definition: 'Determination that treatment is appropriate for the condition' },
        { term: 'utilization review', definition: 'Process of evaluating the appropriateness of healthcare services' },
        { term: 'step therapy', definition: 'Requirement to try less expensive treatments before more expensive ones' },
        { term: 'authorization number', definition: 'Reference number confirming insurance approval' },
      ],
      analogies: [
        'Prior authorization is like a workplace expense approval - you need to justify why it is needed before it is approved.',
      ],
    },
    3: {
      level: 3,
      summary: 'Prior authorization involves clinical criteria review, regulatory requirements, and patient advocacy to navigate utilization management while ensuring timely access to necessary care.',
      explanation: `## Prior Authorization Framework

**Purpose and Controversy:**

*Stated Goals:*
- Ensure appropriate utilization
- Reduce unnecessary care
- Control costs
- Promote evidence-based medicine

*Criticisms:*
- Care delays
- Administrative burden
- Denial of necessary care
- Provider burnout
- Patient harm

**Regulatory Framework:**

*State Laws:*
- Timeline requirements
- Transparency mandates
- Continuity protections
- Appeal rights

*Federal Requirements:*
- Medicare Advantage standards
- Medicaid managed care rules
- ACA provisions
- No Surprises Act implications

**Clinical Criteria:**

*Common Sources:*
| Source | Type |
|--------|------|
| InterQual | Clinical decision support |
| MCG | Evidence-based guidelines |
| Plan-specific | Custom criteria |
| Specialty society | Professional guidelines |

*Review Elements:*
- Diagnosis
- Failed alternatives
- Clinical documentation
- Evidence base
- Plan benefits

**Process Flow:**

\`\`\`
Treatment Need Identified
           ↓
PA Required Check
           ↓
Request Submission → Additional Info Request
           ↓                    ↓
      Initial Review    ← Information Provided
           ↓
    Decision Issued
    ↓            ↓
 Approved      Denied
    ↓            ↓
 Proceed      Appeal
\`\`\`

**Appeals Process:**

*Internal Appeal:*
1. Written request within deadline
2. Additional documentation
3. Different reviewer required
4. Decision timeline applies

*External Review:*
- Available for final denials
- Independent reviewer
- Binding decision
- State or federal process

**Patient Advocacy:**

*Strategies:*
- Understand denial reasons
- Request peer-to-peer review
- Gather supporting documentation
- Know deadline requirements
- Escalate when appropriate

**Reform Efforts:**

*Gold Card Programs:*
- Exemptions for high-performing providers
- Reduced PA requirements
- Quality-based determination

*Legislative Initiatives:*
- Timeline mandates
- Transparency requirements
- Continuity protections
- Electronic PA standards`,
      keyTerms: [
        { term: 'InterQual', definition: 'Clinical decision support criteria used for utilization review' },
        { term: 'peer-to-peer review', definition: 'Discussion between treating physician and insurance medical director' },
        { term: 'gold card', definition: 'Exemption from PA for providers meeting quality thresholds' },
        { term: 'external review', definition: 'Independent review of PA denial by third party' },
      ],
      clinicalNotes: 'PA burden has increased substantially. Providers should have efficient processes and patients should be prepared for potential delays. Reform efforts aim to reduce administrative burden while maintaining appropriate oversight.',
    },
    4: {
      level: 4,
      summary: 'Prior authorization management requires integration of clinical documentation, regulatory compliance, appeals expertise, and system-level advocacy to optimize patient access while navigating utilization management.',
      explanation: `## Comprehensive Prior Authorization Management

**Utilization Management Context:**

*UM Continuum:*
\`\`\`
Pre-Service (PA) → Concurrent Review → Retrospective Review
        ↓                 ↓                    ↓
   Approval          Continued Stay         Audit
        ↓                 ↓                    ↓
    Service            Adjustment           Payment
\`\`\`

**Clinical Documentation:**

*Key Elements:*
| Element | Purpose |
|---------|---------|
| Diagnosis | Medical necessity basis |
| History | Failed alternatives |
| Clinical findings | Current status |
| Plan rationale | Why this treatment |
| Evidence | Supporting literature |

*Documentation Quality:*
- Specific and detailed
- Addresses criteria
- Timely submission
- Complete information

**Denial Management:**

*Denial Types:*
| Type | Cause | Response |
|------|-------|----------|
| Administrative | Process error | Correct and resubmit |
| Clinical | Not medically necessary | Appeal with documentation |
| Benefit | Not covered service | Plan change or alternative |

*Appeal Success Factors:*
- New clinical information
- Criteria directly addressed
- Peer-to-peer discussion
- Literature support
- Patient-specific factors

**Provider Strategies:**

*Process Optimization:*
- Dedicated PA staff
- Electronic submission
- Tracking systems
- Template documentation
- Escalation protocols

*Clinical Strategies:*
- Step therapy completion
- Prior treatment documentation
- Alternative preparation
- Specialty society support

**Patient Engagement:**

*Education:*
- PA process understanding
- Timeline expectations
- Role in appeals
- Alternative options

*Documentation:*
| Item | Purpose |
|------|---------|
| Authorization numbers | Service verification |
| Denial letters | Appeal basis |
| Communication records | Process tracking |
| Timeline documentation | Compliance |

**Regulatory Advocacy:**

*Reform Priorities:*
- Electronic PA standards
- Timeline mandates
- Transparency requirements
- Gold card expansion
- Continuity protections

*Stakeholder Engagement:*
- Professional societies
- Patient advocacy groups
- State insurance commissioners
- Legislative outreach

**Quality Metrics:**

*PA Performance:*
| Metric | Purpose |
|--------|---------|
| Approval rate | Process effectiveness |
| Denial rate | Access concerns |
| Appeal success | System fairness |
| Turnaround time | Timeliness |
| Patient impact | Care delays |`,
      keyTerms: [
        { term: 'concurrent review', definition: 'Ongoing evaluation of appropriateness during hospitalization' },
        { term: 'retrospective review', definition: 'Post-service evaluation of medical necessity' },
        { term: 'step therapy', definition: 'Requirement to try preferred medications before others' },
        { term: 'fail first', definition: 'Same as step therapy - must fail one treatment before trying another' },
      ],
      clinicalNotes: 'PA burden significantly impacts healthcare delivery. Organizations should track PA performance and engage in reform advocacy. Patient communication about PA delays and alternatives is essential.',
    },
    5: {
      level: 5,
      summary: 'Optimal prior authorization navigation integrates clinical excellence, regulatory expertise, technology solutions, and policy advocacy within an evolving healthcare delivery and financing landscape.',
      explanation: `## Prior Authorization: Systems Perspective

**Industry Context:**

*Scale of PA:*
- Billions of PA requests annually
- Hours per PA request
- Provider burnout contributor
- Patient care delays
- Administrative cost burden

*Stakeholder Perspectives:*
| Stakeholder | View |
|-------------|------|
| Insurers | Cost control, appropriateness |
| Providers | Burden, care delays |
| Patients | Access barriers |
| Policymakers | Balance needed |

**Evidence Base:**

*Research Findings:*
- PA associated with care delays
- Adverse events documented
- Treatment abandonment occurs
- Provider burden substantial
- Limited evidence of cost savings

*Knowledge Gaps:*
- Outcomes impact
- Optimal criteria
- Technology effectiveness
- Reform outcomes

**Technology Solutions:**

*Electronic PA (ePA):*
\`\`\`
EHR Integration
       ↓
Automated Criteria Check
       ↓
Electronic Submission → Real-time Adjudication
       ↓
Tracking and Notification
\`\`\`

*NCPDP SCRIPT Standards:*
- Electronic prescription PA
- Pharmacy integration
- Real-time processing
- Industry adoption

**Reform Landscape:**

*State Initiatives:*
| State | Reform |
|-------|--------|
| Texas | Gold card law |
| Others | Timeline requirements |
| Various | Transparency mandates |

*Federal Action:*
- CMS Interoperability Rule
- Medicare Advantage reforms
- No Surprises Act implications
- Electronic PA requirements

**Alternative Models:**

*Prospective Approaches:*
- Gold card programs
- Provider profiling
- Network selection
- Value-based exemptions

*Post-Service Models:*
- Retrospective review only
- Statistical sampling
- Provider accountability
- Quality metrics

**Health Equity:**

*Disparities:*
- Access impact varies
- Language barriers in appeals
- Health literacy challenges
- Resource differences

*Equity Interventions:*
- Assistance programs
- Language access
- Community support
- Advocacy resources

**Future Directions:**

*Technology Evolution:*
- AI-assisted review
- Real-time determination
- Clinical integration
- Interoperability

*Policy Evolution:*
- Continued reform efforts
- Standardization
- Transparency requirements
- Accountability measures

**Patient Advocacy:**

*Effective Strategies:*
| Strategy | Application |
|----------|-------------|
| Documentation | Complete records |
| Escalation | Appropriate channels |
| External review | When indicated |
| Regulatory complaint | Pattern issues |
| Public advocacy | Systemic change |

*Resources:*
- State insurance commissioner
- Patient advocate organizations
- Legal aid services
- Media attention (appropriate cases)`,
      keyTerms: [
        { term: 'electronic prior authorization', definition: 'Technology-enabled PA process integrated with EHR systems' },
        { term: 'NCPDP SCRIPT', definition: 'Standard for electronic prescription and PA transactions' },
        { term: 'provider profiling', definition: 'Evaluating provider practice patterns for PA exemptions' },
        { term: 'interoperability rule', definition: 'CMS requirements for health data exchange and PA automation' },
      ],
      clinicalNotes: 'PA reform is a major healthcare policy priority. Technology solutions are advancing but implementation lags. Patient advocacy and provider engagement in reform efforts are essential for meaningful change.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ama-prior-auth',
      type: 'website',
      title: 'Prior Authorization and Utilization Management Reform',
      source: 'American Medical Association',
      url: 'https://www.ama-assn.org/practice-management/sustainability/prior-authorization',
    },
  ],

  crossReferences: [
    { targetId: 'concept-understanding-health-insurance', targetType: 'concept', relationship: 'related', label: 'Understanding Health Insurance' },
    { targetId: 'concept-appeals-process', targetType: 'concept', relationship: 'related', label: 'Appeals Process' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['health-insurance', 'healthcare-navigation', 'utilization-management'],
    clinicalRelevance: 'high',
    keywords: ['prior authorization', 'pre-authorization', 'insurance approval', 'medical necessity'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default priorAuthorization;
