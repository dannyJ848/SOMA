/**
 * Understanding Health Insurance
 *
 * Essential knowledge for navigating health insurance coverage.
 */

import { EducationalContent } from '../../types';

export const understandingHealthInsurance: EducationalContent = {
  id: 'concept-understanding-health-insurance',
  type: 'concept',
  name: 'Understanding Health Insurance',
  alternateNames: ['Health Coverage Basics', 'Insurance 101', 'Health Plan Navigation'],

  levels: {
    1: {
      level: 1,
      summary: 'Health insurance helps pay for your medical care. Understanding it helps you get the care you need.',
      explanation: `**What Is Health Insurance?**
Health insurance is a way to help pay for doctor visits, medicine, and hospital stays. Instead of paying the full cost yourself, your insurance helps cover it.

**How It Works:**
- You pay some money each month (premium)
- When you need care, insurance helps pay
- You might pay a small part (copay or coinsurance)
- Insurance pays the bigger part

**Important Words to Know:**

| Word | What It Means |
|------|---------------|
| Premium | Monthly payment for insurance |
| Copay | Small amount you pay at visits |
| Deductible | Amount you pay before insurance helps |
| In-network | Doctors who work with your insurance |

**Using Your Insurance:**

*Before Going to the Doctor:*
- Make sure the doctor takes your insurance
- Bring your insurance card
- Know if you need a referral

*At the Doctor:*
- Show your card
- Pay your copay
- Insurance handles the rest

**Common Questions:**

*"Why did I get a bill?"*
- You might owe part of the cost
- You might not have met your deductible yet
- The doctor might not be in your network

*"What if I cannot afford it?"*
- Ask about payment plans
- Ask if there is financial help
- There might be less expensive options

**Remember:**
It is okay to ask questions about your insurance. The office staff can help explain things!`,
      keyTerms: [
        { term: 'health insurance', definition: 'A plan that helps pay for medical care' },
        { term: 'premium', definition: 'The monthly payment for your insurance' },
        { term: 'copay', definition: 'A small fixed amount you pay when you visit the doctor' },
      ],
      analogies: [
        'Health insurance is like a membership club for healthcare - you pay to join, and the club helps with the big costs.',
        'A copay is like paying a small cover charge - you pay a little, and the rest is covered.',
      ],
      examples: [
        'A patient pays a $25 copay at the doctor, and insurance covers the rest of the $150 visit.',
        'Someone checks if their new doctor is in-network before making an appointment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Health insurance involves cost-sharing arrangements including premiums, deductibles, and copays. Understanding plan types and network rules helps you maximize your coverage.',
      explanation: `**Types of Health Insurance:**

| Type | Key Feature |
|------|-------------|
| HMO | Need referrals, in-network only |
| PPO | More flexibility, higher cost |
| EPO | In-network only, no referrals |
| HDPP | Lower premiums, higher deductible |

**Cost-Sharing Explained:**

*Premium:*
- Monthly payment for coverage
- Pay whether you use care or not
- Lower premiums often mean higher out-of-pocket costs

*Deductible:*
- Amount you pay before insurance kicks in
- Resets each plan year
- Preventive care often exempt

*Copay/Coinsurance:*
- Copay: Fixed amount (e.g., $30)
- Coinsurance: Percentage (e.g., 20%)
- You pay after deductible met

*Out-of-Pocket Maximum:*
- Most you pay in a year
- Insurance pays 100% after reaching this

**Understanding Your Network:**

*In-Network:*
- Doctors with insurance agreements
- Lower costs for you
- Insurance covers more

*Out-of-Network:*
- No agreement with insurance
- Higher costs
- May not be covered at all (HMO/EPO)

**Key Documents:**

| Document | What It Tells You |
|----------|-------------------|
| Summary of Benefits | Overview of coverage |
| Explanation of Benefits (EOB) | What was paid for a visit |
| Insurance Card | Your ID and key information |
| Provider Directory | In-network doctors |

**Before Getting Care:**

*Questions to Ask:*
- Is this doctor in my network?
- Do I need a referral?
- Is prior authorization required?
- What will my cost be?

**When You Get a Bill:**

*Check:*
- Does it match your EOB?
- Was the provider in-network?
- Was the service coded correctly?
- Have you met your deductible?

**Getting Help:**
- Call the number on your insurance card
- Ask your employer's HR department
- Use patient advocates at hospitals`,
      keyTerms: [
        { term: 'HMO', definition: 'Health Maintenance Organization - requires in-network care and referrals' },
        { term: 'PPO', definition: 'Preferred Provider Organization - more flexibility at higher cost' },
        { term: 'deductible', definition: 'Amount you pay before insurance begins covering costs' },
        { term: 'out-of-pocket maximum', definition: 'Most you will pay in a year after which insurance covers 100%' },
      ],
      analogies: [
        'Your deductible is like a threshold - once you cross it, insurance starts sharing the cost.',
      ],
    },
    3: {
      level: 3,
      summary: 'Health insurance navigation requires understanding plan structures, cost-sharing mechanisms, coverage requirements, and patient rights under federal and state regulations.',
      explanation: `## Health Insurance Framework

**Plan Structure:**

*Cost-Sharing Components:*
\`\`\`
Premium (Monthly) → Deductible → Copay/Coinsurance → Out-of-Pocket Max
                         ↓                 ↓                 ↓
                    Pay First        Share Costs       Insurance 100%
\`\`\`

**Regulatory Framework:**

*Affordable Care Act Protections:*
- Essential health benefits required
- No lifetime/annual limits on essential benefits
- Preexisting conditions covered
- Preventive care without cost-sharing
- Children covered to age 26
- Out-of-pocket maximum limits

*State Regulations:*
- Additional benefit mandates
- Network adequacy requirements
- Consumer protection laws
- Rate review processes

**Plan Types Deep Dive:**

| Plan | Network | Referrals | Out-of-Network |
|------|---------|-----------|----------------|
| HMO | Required | Required | Not covered |
| PPO | Preferred | Not required | Covered (higher cost) |
| EPO | Required | Not required | Not covered |
| POS | Primary care | For specialists | Partial coverage |

**Coverage Categories:**

*Essential Health Benefits:*
1. Ambulatory patient services
2. Emergency services
3. Hospitalization
4. Maternity and newborn care
5. Mental health and substance use
6. Prescription drugs
7. Rehabilitative services
8. Laboratory services
9. Preventive and wellness
10. Pediatric services

**Prior Authorization:**

*When Required:*
- Non-emergency hospitalizations
- Specialty procedures
- Certain medications
- Durable medical equipment
- Some imaging studies

*Process:*
1. Provider submits request
2. Insurance reviews medical necessity
3. Approval or denial issued
4. Appeal if denied

**Cost Calculation:**

*Example: $10,000 procedure*
| Element | Amount |
|---------|--------|
| Deductible remaining | $1,000 |
| Coinsurance (20%) | $1,800 |
| Your cost | $2,800 |
| Insurance pays | $7,200 |

**Billing Issues:**

*Common Problems:*
- Surprise billing
- Balance billing
- Coding errors
- Out-of-network at in-network facility
- Coordination of benefits issues

*No Surprises Act (2022):*
- Protection from surprise bills
- Emergency services at in-network rates
- Balance billing restrictions`,
      keyTerms: [
        { term: 'essential health benefits', definition: 'Categories of services health plans must cover under ACA' },
        { term: 'prior authorization', definition: 'Insurance approval required before receiving certain services' },
        { term: 'balance billing', definition: 'Provider billing patient for difference between charge and insurance payment' },
        { term: 'No Surprises Act', definition: 'Federal law protecting patients from unexpected out-of-network bills' },
      ],
      clinicalNotes: 'Insurance complexity can create barriers to care. Healthcare providers should help patients understand coverage and navigate authorization requirements.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive health insurance literacy requires understanding market dynamics, regulatory requirements, plan design variations, and strategies for optimizing coverage utilization.',
      explanation: `## Advanced Health Insurance Navigation

**Market Segments:**

*Coverage Types:*
| Segment | Source | Regulation |
|---------|--------|------------|
| Employer | Company-sponsored | ERISA, ACA |
| Individual | Marketplace, direct | ACA |
| Medicare | Federal (65+, disabled) | CMS |
| Medicaid | State/federal (income-based) | CMS, state |
| CHIP | State/federal (children) | CMS, state |

**Plan Design Incentives:**

*High-Deductible Health Plans:*
- Lower premiums
- HSA eligibility
- Consumer-directed care
- Financial risk transfer

*Tiered Networks:*
- Different cost-sharing by tier
- Quality/cost considerations
- Steerage incentives

*Value-Based Designs:*
- Lower costs for high-value services
- Higher costs for low-value care
- Chronic condition management incentives

**Utilization Management:**

*Pre-Service Review:*
| Type | Purpose |
|------|---------|
| Prior Authorization | Verify medical necessity |
| Precertification | Confirm coverage |
| Predetermination | Cost estimate |

*Concurrent Review:*
- Ongoing hospitalization review
- Continued stay authorization
- Level of care assessment

*Retrospective Review:*
- Post-service audit
- Appropriateness review
- Payment adjustment

**Appeals and Grievances:**

*Internal Appeal:*
1. Written request
2. Different reviewer
3. 30-day decision (standard)
4. 72-hour decision (urgent)

*External Review:*
- Independent third party
- Available after internal denial
- Binding decision
- State or federal process

**Financial Assistance:**

*Options:*
| Type | Eligibility |
|------|-------------|
| Premium subsidies | Marketplace income-based |
| Cost-sharing reductions | Marketplace silver plans |
| Hospital charity care | Facility-specific |
| Manufacturer assistance | Drug-specific |
| State programs | Varies |

**Coordination of Benefits:**

*Primary vs. Secondary:*
- Birthday rule for dependents
- Medicare Secondary Payer rules
- Workers' compensation primary
- Auto insurance for MVA

**Quality Metrics:**

*Plan Evaluation:*
- Star ratings
- HEDIS measures
- Consumer satisfaction
- Network adequacy
- Accreditation status`,
      keyTerms: [
        { term: 'ERISA', definition: 'Employee Retirement Income Security Act - governs employer-sponsored plans' },
        { term: 'HSA', definition: 'Health Savings Account - tax-advantaged account for medical expenses' },
        { term: 'external review', definition: 'Independent review of insurance denial by third party' },
        { term: 'coordination of benefits', definition: 'Process determining which insurance pays first when multiple coverage exists' },
      ],
      clinicalNotes: 'Understanding plan design helps patients make informed choices during enrollment. Provider offices should have resources for prior authorization and appeals.',
    },
    5: {
      level: 5,
      summary: 'Expert health insurance navigation integrates policy understanding, market dynamics, regulatory framework, and advocacy skills within an evolving healthcare financing landscape.',
      explanation: `## Health Insurance: Systems Perspective

**Policy Landscape:**

*Coverage Evolution:*
\`\`\`
Pre-ACA (Variable)
       ↓
ACA Implementation (2010-2014)
       ↓
Market Stabilization
       ↓
Current Challenges
       ↓
Future Directions
\`\`\`

**Market Dynamics:**

*Stakeholder Interests:*
| Stakeholder | Goals |
|-------------|-------|
| Insurers | Risk management, margins |
| Providers | Reimbursement, volume |
| Employers | Cost containment, retention |
| Patients | Access, affordability |
| Government | Coverage, cost, quality |

*Cost Drivers:*
- Healthcare prices
- Utilization patterns
- Administrative costs
- Technology and drugs
- Chronic disease prevalence

**Regulatory Complexity:**

*Federal Oversight:*
- CMS (Medicare, Medicaid, Marketplace)
- DOL (ERISA plans)
- Treasury (tax issues)
- HHS (ACA provisions)

*State Authority:*
- Insurance commissioner
- Benefit mandates
- Network requirements
- Rate review
- Consumer protection

**Quality and Value:**

*Measurement Systems:*
| System | Focus |
|--------|-------|
| Star Ratings | Medicare Advantage |
| HEDIS | Clinical quality |
| CAHPS | Patient experience |
| Accreditation | Organizational standards |

*Value-Based Arrangements:*
- Pay-for-performance
- Bundled payments
- Shared savings
- Capitation
- Reference pricing

**Health Equity:**

*Disparities:*
- Coverage gaps
- Network adequacy
- Benefit design
- Administrative barriers
- Health literacy

*Equity Interventions:*
- Medicaid expansion
- Marketplace subsidies
- Community outreach
- Language access
- Culturally competent navigation

**Future Directions:**

*Policy Options:*
| Option | Features |
|--------|----------|
| Medicare expansion | Lower eligibility age |
| Public option | Government plan competition |
| Medicare for All | Single-payer model |
| Market reforms | Enhanced ACA |

*Technology Impact:*
- AI in utilization management
- Price transparency tools
- Digital navigation
- Interoperability requirements

**Patient Advocacy:**

*Strategies:*
- Appeal all denials
- Document everything
- Know your rights
- Seek assistance
- Engage regulators when needed

*Resources:*
- State insurance commissioner
- Health insurance ombudsman
- Patient advocacy organizations
- Legal aid
- Navigator programs`,
      keyTerms: [
        { term: 'public option', definition: 'Government-sponsored insurance plan competing with private insurers' },
        { term: 'reference pricing', definition: 'Setting a fixed amount insurance will pay for a service' },
        { term: 'health insurance ombudsman', definition: 'Official who helps consumers resolve insurance issues' },
        { term: 'navigator program', definition: 'Certified counselors helping consumers enroll in coverage' },
      ],
      clinicalNotes: 'Healthcare financing continues to evolve rapidly. Patients benefit from understanding the system while advocating for changes that improve access and affordability.',
    },
  },

  media: [],

  citations: [
    {
      id: 'healthcare-gov-basics',
      type: 'website',
      title: 'Health Insurance Basics',
      source: 'HealthCare.gov',
      url: 'https://www.healthcare.gov/glossary/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-prior-authorization', targetType: 'concept', relationship: 'related', label: 'Prior Authorization' },
    { targetId: 'concept-appeals-process', targetType: 'concept', relationship: 'related', label: 'Appeals Process' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['health-insurance', 'healthcare-navigation', 'patient-advocacy'],
    clinicalRelevance: 'high',
    keywords: ['health insurance', 'coverage', 'deductible', 'copay', 'network'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default understandingHealthInsurance;
