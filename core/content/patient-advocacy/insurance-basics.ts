/**
 * Insurance Basics - Comprehensive Educational Content
 *
 * Covers fundamental concepts of health insurance, how it works,
 * types of plans, and how to use insurance effectively.
 */

import { EducationalContent } from '../types';

export const insuranceBasics: EducationalContent = {
  id: 'concept-insurance-basics',
  type: 'concept',
  name: 'Insurance Basics',
  alternateNames: ['Health Insurance', 'Medical Insurance', 'Healthcare Coverage'],

  levels: {
    1: {
      level: 1,
      summary: 'Health insurance helps pay for doctor visits and medicine so families don\'t have to pay for everything themselves.',
      explanation: `Health insurance is like a helper that pays for some of your doctor visits and medicine. Here's how it works:

**What is Health Insurance?**

Imagine you have a piggy bank, but instead of saving for a toy, many people put money in together to help pay for each other's doctor visits. That's kind of how insurance works!

- Families pay some money each month (like paying for a gym membership)
- When someone gets sick or hurt, the insurance helps pay the doctor bills
- This way, people don't have to pay thousands of dollars all at once

**The Insurance Card:**

When you go to the doctor, you bring an insurance card. It's like a special pass that tells the doctor's office that your insurance will help pay.

**What Insurance Covers:**

- Doctor visits for checkups
- Medicine when you're sick
- Hospital stays if you're really sick
- Vaccines to keep you healthy

**Why It's Important:**

Without insurance, going to the doctor or hospital can cost a LOT of money. Insurance helps families afford the care they need to stay healthy!`,
      keyTerms: [
        { term: 'insurance', definition: 'A plan that helps pay for doctor visits and medicine' },
        { term: 'premium', definition: 'Money your family pays each month to have insurance' },
        { term: 'insurance card', definition: 'A card you show at the doctor to prove you have insurance' },
        { term: 'coverage', definition: 'What your insurance will help pay for' },
      ],
      analogies: [
        'Insurance is like a classroom where everyone brings in a dollar, so there\'s enough money to help anyone who needs supplies.',
        'Having insurance is like being part of a team where everyone chips in so anyone who gets hurt can get help.',
      ],
      examples: [
        'When you go for a checkup, your parent shows the insurance card and insurance pays most of the bill.',
        'If you need glasses, insurance might help pay for them so your family doesn\'t pay the full price.',
      ],
    },
    2: {
      level: 2,
      summary: 'Health insurance spreads the cost of healthcare among many people, requiring members to pay premiums, deductibles, and copays while the insurer covers a significant portion of medical expenses.',
      explanation: `## How Health Insurance Works

### Basic Concept

Health insurance is a contract between you and an insurance company. You pay regular fees, and in exchange, the insurance company helps pay your medical bills.

### Key Terms You Need to Know

**Premium:**
The amount you pay monthly to maintain your insurance, whether you use healthcare or not.

**Deductible:**
The amount you pay out of pocket before insurance starts covering costs. For example, with a $1,000 deductible, you pay the first $1,000 of your healthcare bills for the year.

**Copay:**
A fixed amount you pay for specific services. For example, $25 for a doctor visit or $15 for a prescription.

**Coinsurance:**
A percentage of costs you share with insurance after meeting your deductible. For example, you pay 20% and insurance pays 80%.

**Out-of-Pocket Maximum:**
The most you'll pay in a year. Once you hit this limit, insurance pays 100% of covered services.

### Types of Insurance Plans

- **Employer-sponsored**: Your parent's job provides insurance
- **Individual/Marketplace**: Purchased through healthcare.gov
- **Medicare**: For people 65+ or with disabilities
- **Medicaid**: For people with limited income
- **CHIP**: Children's Health Insurance Program

### In-Network vs. Out-of-Network

- **In-network**: Doctors who have agreements with your insurance (less expensive)
- **Out-of-network**: Doctors without agreements (more expensive or not covered)

### Using Your Insurance

1. Find in-network providers
2. Show your insurance card at appointments
3. Pay your copay at the visit
4. Insurance is billed for the rest
5. You may receive an Explanation of Benefits (not a bill)`,
      keyTerms: [
        { term: 'premium', definition: 'Monthly payment to maintain insurance coverage' },
        { term: 'deductible', definition: 'Amount you pay before insurance starts covering costs' },
        { term: 'copay', definition: 'Fixed amount paid for a specific healthcare service' },
        { term: 'coinsurance', definition: 'Percentage of costs you pay after meeting your deductible' },
        { term: 'out-of-pocket maximum', definition: 'The most you\'ll pay for covered services in a year' },
      ],
      analogies: [
        'A deductible is like paying for the first few pages of copies at a copy shop before getting a discount on the rest.',
        'The out-of-pocket maximum is like a safety net - no matter how much healthcare you need, you won\'t fall below it financially.',
      ],
    },
    3: {
      level: 3,
      summary: 'Health insurance involves complex interactions between plan structures (HMO, PPO, EPO, HDHP), cost-sharing mechanisms, network configurations, and regulatory requirements that shape access to and affordability of healthcare.',
      explanation: `## Insurance Plan Structures

### Plan Types Comparison

| Feature | HMO | PPO | EPO | HDHP |
|---------|-----|-----|-----|------|
| Network | Strict | Flexible | Strict | Varies |
| PCP Required | Yes | No | Usually | Varies |
| Referrals Needed | Yes | No | No | Varies |
| Out-of-Network | Emergency only | Covered (higher cost) | Emergency only | Varies |
| Premiums | Lower | Higher | Moderate | Lower |
| Deductibles | Lower | Lower | Moderate | Higher |

### High-Deductible Health Plans (HDHP)

**Characteristics:**
- Lower premiums
- Higher deductibles (minimum $1,600 individual, $3,200 family in 2024)
- HSA-eligible (Health Savings Account)
- Preventive care covered before deductible

**Health Savings Accounts (HSA):**
- Triple tax advantage (contributions, growth, qualified withdrawals)
- Funds roll over year to year
- Portable if you change jobs
- Can be used for qualified medical expenses

### Cost-Sharing Mechanics

**Deductible Application:**
- Individual vs. family deductibles
- Embedded vs. aggregate family deductibles
- Service-specific deductibles

**Cost-Sharing Example:**
1. You have a $1,000 deductible, 20% coinsurance, $5,000 out-of-pocket max
2. Surgery costs $10,000
3. You pay: $1,000 (deductible) + $1,800 (20% of remaining $9,000) = $2,800
4. Insurance pays: $7,200

### Network Considerations

**Provider Networks:**
- Contracted rates with in-network providers
- Balance billing protection
- Network adequacy requirements
- Continuity of care provisions

**Tiered Networks:**
- Some plans have preferred providers with lower cost-sharing
- Quality and cost considerations
- Center of Excellence designations

### Regulatory Framework

**Essential Health Benefits (ACA):**
1. Ambulatory patient services
2. Emergency services
3. Hospitalization
4. Maternity and newborn care
5. Mental health and substance use services
6. Prescription drugs
7. Rehabilitative services
8. Laboratory services
9. Preventive and wellness services
10. Pediatric services (including dental and vision)

**Consumer Protections:**
- No lifetime or annual limits on essential benefits
- Pre-existing condition coverage required
- Dependent coverage to age 26
- Appeals process for denials`,
      keyTerms: [
        { term: 'Essential Health Benefits', definition: 'Ten categories of services that ACA-compliant plans must cover' },
        { term: 'Health Savings Account (HSA)', definition: 'Tax-advantaged account for medical expenses, available with HDHPs' },
        { term: 'balance billing', definition: 'When an out-of-network provider bills you for the difference between their charge and insurance payment' },
        { term: 'network adequacy', definition: 'Regulatory requirement that insurance networks include sufficient providers to meet member needs' },
      ],
      clinicalNotes: 'Healthcare providers should understand patients\' insurance structures to help with care coordination and address potential cost barriers. Prior authorization requirements vary significantly by plan.',
    },
    4: {
      level: 4,
      summary: 'Health insurance encompasses sophisticated actuarial risk pooling, regulatory compliance (ACA, ERISA, state law), cost containment strategies, and market dynamics that significantly impact healthcare access, utilization, and financial protection.',
      explanation: `## Insurance Economics and Regulation

### Risk Pooling Principles

**Actuarial Considerations:**
- Adverse selection and risk adjustment
- Community rating vs. experience rating
- Risk corridors and reinsurance (ACA provisions)
- Stop-loss insurance for self-funded plans

**Premium Development:**
- Claims experience analysis
- Administrative cost loading
- Profit margin
- Regulatory constraints on medical loss ratio

### Regulatory Framework

**Federal Regulations:**
| Law | Key Provisions |
|-----|----------------|
| ACA | Essential benefits, rating rules, exchanges |
| ERISA | Self-funded plan regulation, fiduciary duties |
| HIPAA | Portability, privacy protections |
| Mental Health Parity | Equal coverage for mental health |
| No Surprises Act | Surprise billing protection |

**State Insurance Regulation:**
- Mandated benefits (beyond ACA)
- Rate review processes
- Consumer protection enforcement
- Network adequacy standards

### Coverage Determinations

**Medical Necessity:**
- Plan definitions vary
- Evidence-based criteria (InterQual, MCG)
- Clinical guidelines application
- Prior authorization processes

**Utilization Management:**
- Prospective review (prior authorization)
- Concurrent review (inpatient)
- Retrospective review (claim audits)
- Step therapy requirements

### Cost Containment Strategies

**Provider Payment:**
- Fee schedules and allowable amounts
- Bundled payments
- Capitation arrangements
- Value-based contracts

**Member Cost-Sharing:**
- Tiered cost-sharing (generic vs. brand drugs)
- Reference pricing
- Narrow network incentives
- Wellness program rewards/penalties

### Appeals and Grievances

**Internal Appeals:**
- Expedited (urgent) vs. standard timelines
- Clinical peer review requirements
- Medical director decision authority

**External Review:**
- Independent Review Organization (IRO)
- State insurance department involvement
- Federal external review for some plans

### Special Populations

**Medicaid:**
- Federal-state partnership
- Managed care models
- Expansion populations (ACA)
- Covered services variation

**Medicare:**
- Traditional Medicare (Parts A, B, D)
- Medicare Advantage (Part C)
- Supplemental coverage (Medigap)
- Dual-eligible considerations`,
      keyTerms: [
        { term: 'adverse selection', definition: 'Tendency of higher-risk individuals to be more likely to purchase insurance' },
        { term: 'medical loss ratio', definition: 'Percentage of premium dollars spent on claims and quality improvement (ACA requires 80-85%)' },
        { term: 'ERISA', definition: 'Employee Retirement Income Security Act - federal law governing employer-sponsored benefit plans' },
        { term: 'utilization management', definition: 'Techniques insurers use to manage healthcare utilization and costs' },
      ],
      clinicalNotes: 'Understanding insurance authorization processes is essential for treatment planning. Document medical necessity clearly. Know appeal rights and processes when coverage is denied.',
    },
    5: {
      level: 5,
      summary: 'Health insurance requires integration of health economics, policy analysis, regulatory compliance, and practical strategies for navigating coverage complexities while advocating for appropriate care access and patient financial protection.',
      explanation: `## Health Insurance Market Dynamics

### Market Structure

**Commercial Market Segments:**
- Large group (100+ employees)
- Small group (under 100)
- Individual market (Marketplace and off-exchange)
- Association Health Plans
- Short-term limited duration plans

**Market Concentration:**
- Increasing insurer consolidation
- Market power implications
- Provider network negotiations
- Premium competition dynamics

### Policy Evolution

**ACA Implementation:**
- Coverage expansion outcomes
- Marketplace stability challenges
- State innovation waivers (Section 1332)
- Ongoing legal challenges

**Emerging Policy:**
- Public option proposals
- Medicare buy-in considerations
- Single-payer advocacy
- State-based reforms

### Value-Based Insurance Design (VBID)

**Principles:**
- Align cost-sharing with clinical value
- Reduce barriers to high-value care
- Increase cost-sharing for low-value care
- Consider patient-specific value

**Applications:**
| Intervention | VBID Approach |
|--------------|---------------|
| High-value preventive | Zero cost-sharing |
| Chronic disease medications | Reduced copays |
| Low-value imaging | Higher cost-sharing |
| Centers of Excellence | Reduced deductible |

### Coverage Navigation Strategies

**Enrollment:**
- Open enrollment periods
- Special enrollment qualifying events
- Subsidy eligibility (Premium Tax Credits, CSR)
- Medicaid presumptive eligibility

**Plan Selection:**
- Total cost of care analysis
- Network adequacy assessment
- Formulary review
- Provider disruption evaluation

**Coverage Optimization:**
- HSA contribution strategies
- FSA utilization planning
- Out-of-pocket tracking
- End-of-year decision-making

### Advocacy and System Change

**Patient Financial Advocacy:**
- Assistance program identification
- Payment plan negotiation
- Financial toxicity screening
- Coverage appeal support

**Policy Advocacy:**
- Transparency initiatives
- Surprise billing prevention
- Network adequacy enforcement
- Essential benefit protection

### Future Considerations

**Technology Impact:**
- Digital health coverage
- Telehealth reimbursement evolution
- AI in utilization management
- Consumer-facing tools

**Coverage Innovation:**
- Outcomes-based contracts
- Episode-based coverage
- Integrated care models
- Social determinants integration

**Health Equity:**
- Coverage disparities
- Cultural accessibility
- Language access requirements
- Addressing structural barriers`,
      keyTerms: [
        { term: 'value-based insurance design', definition: 'Insurance structure that aligns cost-sharing with clinical value of services' },
        { term: 'Section 1332 waiver', definition: 'State innovation waiver allowing states to modify ACA requirements while maintaining coverage standards' },
        { term: 'financial toxicity', definition: 'Financial distress and burden from out-of-pocket healthcare costs' },
        { term: 'presumptive eligibility', definition: 'Temporary Medicaid coverage while full application is processed' },
      ],
      clinicalNotes: `Implementation priorities:
1. Screen patients for coverage and financial concerns
2. Connect patients with financial counselors and assistance programs
3. Understand prior authorization requirements for treatments
4. Document medical necessity thoroughly for appeals
5. Consider cost when discussing treatment options (shared decision-making)
6. Advocate for coverage of appropriate care
7. Stay informed on policy changes affecting patients
8. Support enrollment assistance for uninsured patients`,
    },
  },

  media: [
    {
      id: 'insurance-terms-infographic',
      type: 'diagram',
      filename: 'insurance-basics-terms.svg',
      title: 'Health Insurance Terms Explained',
      description: 'Visual guide to understanding key health insurance terms',
    },
  ],

  citations: [
    {
      id: 'healthcare-gov',
      type: 'website',
      title: 'How Health Insurance Works',
      source: 'HealthCare.gov',
      url: 'https://www.healthcare.gov/how-insurance-works/',
      accessedDate: '2026-01-24',
    },
    {
      id: 'kff-health-insurance',
      type: 'website',
      title: 'Health Insurance 101',
      source: 'Kaiser Family Foundation',
      url: 'https://www.kff.org/health-policy-101/',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-healthcare-navigation', targetType: 'concept', relationship: 'related', label: 'Healthcare Navigation' },
    { targetId: 'concept-patient-bill-of-rights', targetType: 'concept', relationship: 'related', label: 'Patient Bill of Rights' },
  ],

  tags: {
    systems: ['healthcare-system'],
    topics: ['patient-advocacy', 'health-insurance', 'healthcare-policy', 'healthcare-access'],
    keywords: ['health insurance', 'coverage', 'premium', 'deductible', 'copay', 'HMO', 'PPO'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default insuranceBasics;
