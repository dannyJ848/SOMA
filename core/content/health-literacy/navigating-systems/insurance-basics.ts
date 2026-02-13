import { EducationalContent } from '../../types';

export const insuranceBasics: EducationalContent = {
  id: 'insurance-basics',
  type: 'concept',
  name: 'Health Insurance Basics',
  alternateNames: ['Health Coverage', 'Medical Insurance', 'Insurance Fundamentals', 'Healthcare Financing'],
  
  levels: {
    1: {
      level: 1,
      summary: 'How health insurance helps pay for medical care and what basic terms mean.',
      explanation: `Health insurance helps you pay for doctor visits, medicines, and hospital care. You pay a monthly amount (premium) to have insurance. When you need care, insurance pays part of the cost. You may also pay a small amount when you get care (copay). Understanding these basics helps you use your insurance and avoid unexpected bills.`,
      keyTerms: [
        { term: 'premium', definition: 'The amount you pay each month for insurance coverage' },
        { term: 'copay', definition: 'A fixed amount you pay for a medical service when you receive it' },
        { term: 'deductible', definition: 'The amount you pay for health care before insurance starts paying' }
      ],
      analogies: [
        'Car insurance: Just like car insurance helps pay for car repairs after an accident, health insurance helps pay for medical care when you are sick or injured'
      ],
      examples: [
        'Paying $20 copay when visiting the doctor',
        'Meeting your $1,000 deductible before insurance covers hospital costs',
        'Paying $200 monthly premium for family coverage'
      ]
    },
    2: {
      level: 2,
      summary: 'Understanding key health insurance components including premiums, deductibles, copayments, coinsurance, and out-of-pocket maximums.',
      explanation: `Health insurance is a contract between you and an insurance company that helps cover medical expenses. Understanding how insurance works helps you choose plans, budget for healthcare costs, and avoid surprise bills.

Key insurance terms:

Premium:
- Monthly payment to keep your insurance active
- Paid regardless of whether you use medical services
- Employer may pay part or all of your premium

Deductible:
- Amount you pay out-of-pocket before insurance coverage begins
- Resets annually (usually January 1st)
- Preventive care often covered before deductible is met
- Lower premium plans usually have higher deductibles

Copayment (copay):
- Fixed amount paid for specific services (e.g., $25 for office visit)
- Paid at time of service
- Does not count toward deductible

Coinsurance:
- Percentage of costs you pay after meeting deductible
- Example: 20% coinsurance means insurance pays 80%, you pay 20%
- Continues until you reach out-of-pocket maximum

Out-of-pocket maximum:
- Most you will pay in a year for covered services
- Includes deductible, copays, and coinsurance
- Once reached, insurance pays 100% of covered costs
- Does not include premiums or out-of-network costs

Network types:
- HMO: Health Maintenance Organization - requires primary care referral for specialists
- PPO: Preferred Provider Organization - more flexibility, higher cost for out-of-network
- EPO: Exclusive Provider Organization - no referrals needed, no out-of-network coverage
- POS: Point of Service - hybrid of HMO and PPO

Covered services:
- Essential health benefits required by law
- Preventive care (usually free)
- Prescription drugs
- Emergency services
- Mental health and substance abuse treatment`,
      keyTerms: [
        { term: 'premium', definition: 'Regular payment to maintain insurance coverage' },
        { term: 'deductible', definition: 'Amount paid before insurance begins covering costs' },
        { term: 'copayment', definition: 'Fixed fee for a specific medical service' },
        { term: 'coinsurance', definition: 'Percentage of costs shared between you and insurance after deductible' },
        { term: 'out-of-pocket maximum', definition: 'Annual limit on what you pay for covered services' },
        { term: 'in-network', definition: 'Providers who have contracts with your insurance company' }
      ],
      analogies: [
        'Gym membership: Premium is like a gym membership fee you pay monthly. Deductible is like a check-in fee you pay first before using premium equipment. Copay is like paying for a personal training session each time'
      ],
      examples: [
        'Scenario 1: You have a $1,000 deductible and 20% coinsurance. You have surgery costing $5,000. You pay $1,000 (deductible) + $800 (20% of remaining $4,000) = $1,800 total.',
        'Scenario 2: You reach your $6,000 out-of-pocket maximum in August. For the rest of the year, insurance pays 100% of covered medical costs.',
        'Scenario 3: Your plan has $30 specialist copay. You see a cardiologist four times. You pay $30 x 4 = $120 in copays, regardless of what the insurance pays.'
      ]
    },
    3: {
      level: 3,
      summary: 'A comprehensive overview of health insurance mechanisms, plan types, cost-sharing structures, and strategies for optimizing coverage and managing healthcare expenses.',
      explanation: `Health insurance functions as a risk-pooling mechanism that protects individuals from catastrophic medical expenses while promoting access to preventive and routine care. Understanding the structural components of insurance enables informed plan selection and effective navigation of healthcare financing.

Insurance Plan Categories:

Metal tiers (Affordable Care Act):
- Bronze: Insurance pays 60%, you pay 40% (lowest premiums, highest out-of-pocket)
- Silver: Insurance pays 70%, you pay 30% (most popular, cost-sharing reductions available)
- Gold: Insurance pays 80%, you pay 20% (higher premiums, lower out-of-pocket)
- Platinum: Insurance pays 90%, you pay 10% (highest premiums, lowest out-of-pocket)

Plan types and structures:

HMO (Health Maintenance Organization):
- Requires selection of primary care physician (PCP)
- PCP referrals required for specialist visits
- No coverage for out-of-network care (except emergencies)
- Lower premiums and predictable costs
- Emphasis on preventive care and care coordination

PPO (Preferred Provider Organization):
- No PCP or referrals required
- Coverage for out-of-network care at higher cost
- Higher premiums than HMOs
- Greater flexibility in provider choice
- Deductibles often separate for in-network and out-of-network

EPO (Exclusive Provider Organization):
- No PCP or referrals required
- No coverage for out-of-network care (except emergencies)
- Mid-range premiums
- Balance of flexibility and cost control

POS (Point of Service):
- PCP required but out-of-network coverage available
- Higher costs for out-of-network care
- Hybrid structure combining HMO and PPO features

High-Deductible Health Plans (HDHP):
- Lower premiums with higher deductibles (minimum $1,400 individual, $2,800 family)
- Paired with Health Savings Accounts (HSA)
- Suitable for healthy individuals with emergency savings
- Preventive care covered pre-deductible

Cost-sharing mechanisms:

Actuarial value calculations:
- Percentage of total average costs covered by plan
- Based on standard population, individual experience varies
- Metal tiers standardized by actuarial value

Cost-sharing reductions (CSRs):
- Available for incomes 100-250% of federal poverty level
- Lower out-of-pocket costs on Silver plans
- Enhance actuarial value to Gold or Platinum levels

Essential health benefits:
- Ambulatory patient services
- Emergency services
- Hospitalization
- Pregnancy and newborn care
- Mental health and substance use services
- Prescription drugs
- Rehabilitative services
- Laboratory services
- Preventive and wellness services
- Pediatric services (including dental and vision)

Claims process:
1. Provider submits claim to insurance
2. Insurance processes claim and determines payment
3. Explanation of Benefits (EOB) sent to patient
4. Patient receives bill for remaining balance
5. Appeal process available for denied claims`,
      keyTerms: [
        { term: 'actuarial value', definition: 'The percentage of average costs that a plan will cover for standard population' },
        { term: 'HSA', definition: 'Health Savings Account - tax-advantaged savings account for medical expenses' },
        { term: 'cost-sharing reduction', definition: 'Discount that lowers out-of-pocket costs for eligible individuals' },
        { term: 'explanation of benefits', definition: 'Statement from insurance showing what was paid and what patient owes' },
        { term: 'formulary', definition: 'List of prescription drugs covered by insurance plan' },
        { term: 'prior authorization', definition: 'Approval required from insurance before certain services are covered' }
      ]
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of health insurance policy design, regulatory frameworks, cost containment strategies, and patient advocacy in complex coverage scenarios.',
      explanation: `Health insurance operates within a complex regulatory environment shaped by federal and state legislation, market dynamics, and healthcare delivery system structures. Sophisticated navigation requires understanding policy mechanisms, regulatory protections, and strategies for coverage optimization.

Regulatory Framework:

Affordable Care Act (ACA) provisions:
- Individual mandate (penalty eliminated at federal level, some states maintain)
- Guaranteed issue: Cannot deny coverage for pre-existing conditions
- Essential health benefits standardization
- Age rating bands (3:1 ratio maximum)
- Medical loss ratio requirements (80-85% of premiums spent on care)
- State and federal marketplaces (exchanges)

Medicare and Medicaid:
- Medicare: Federal program for 65+ and disabled (Parts A-D)
- Medicaid: State-federal program for low-income populations
- Dual eligibility: Individuals qualifying for both programs
- Medicare Advantage: Private plans managing Medicare benefits
- Medicaid expansion under ACA (varies by state)

Employer-sponsored insurance:
- ERISA regulations for self-funded plans
- COBRA continuation coverage
- HIPAA portability protections
- Cadillac tax (implementation delayed/repealed)

Cost Containment and Management:

Pharmacy benefit management:
- Formulary tiers (generic, preferred brand, non-preferred brand, specialty)
- Step therapy requirements
- Quantity limits
- Specialty pharmacy programs
- Biosimilar substitution policies

Utilization management:
- Prior authorization for expensive procedures and medications
- Concurrent review for inpatient care
- Retrospective review for medical necessity
- Case management for complex conditions

Reference-based pricing:
- Payment based on Medicare rates plus percentage
- Surprise billing protections
- Balance billing limitations

Patient Financial Advocacy:

Billing and cost estimation:
- Good faith estimates for scheduled services (No Surprises Act)
- Hospital price transparency requirements
- Insurance cost estimation tools
- Financial assistance policies (charity care)

Appeals and grievances:
- Internal appeals through insurance plan
- External review by independent entities
- State insurance commissioner complaints
- ERISA claims procedures

Surprise billing protections (No Surprises Act):
- Emergency services at out-of-network facilities
- Out-of-network providers at in-network facilities
- Air ambulance services
- Independent dispute resolution process

Advanced Plan Selection Strategies:

Total cost estimation:
- Premium + estimated out-of-pocket costs
- Scenario modeling (low, medium, high utilization)
- Prescription drug cost calculations
- Provider network adequacy assessment

Special enrollment periods:
- Qualifying life events (marriage, birth, loss of coverage)
- Complex application issues
- Medicaid/CHIP continuous eligibility
- Marketplace special enrollment

Alternative coverage options:
- Healthcare sharing ministries
- Short-term limited duration plans
- Association health plans
- Direct primary care arrangements
- Concierge medicine models

International considerations:
- Expatriate health insurance
- Travel medical insurance
- Repatriation coverage
- Cross-border care arrangements`,
      keyTerms: [
        { term: 'medical loss ratio', definition: 'Percentage of premium dollars spent on medical care versus administrative costs' },
        { term: 'prior authorization', definition: 'Pre-approval requirement from insurer before service is covered' },
        { term: 'balance billing', definition: 'Billing patient for difference between provider charge and insurance payment' },
        { term: 'No Surprises Act', definition: 'Federal law protecting against unexpected out-of-network medical bills' },
        { term: 'ERISA', definition: 'Employee Retirement Income Security Act - governs employer-sponsored health plans' },
        { term: 'Medicare Part D', definition: 'Prescription drug coverage component of Medicare' }
      ],
      clinicalNotes: `Clinical Pearl: When patients express concern about medication costs, check their formulary status. A therapeutically equivalent medication on a lower tier may be equally effective at substantially lower patient cost.

Documentation Tip: Note insurance barriers affecting care: "Patient reports inability to afford prescribed medication; discussed formulary alternatives with pharmacy. Prior authorization required for specialist referral per HMO plan."

Patient Advocacy: Providers can support patients by:
- Providing diagnosis and procedure codes for insurance inquiries
- Writing letters of medical necessity for prior authorizations
- Referring to patient financial services for charity care screening
- Suggesting manufacturer assistance programs for expensive medications
- Documenting medical necessity for appeals`
    },
    5: {
      level: 5,
      summary: 'Expert-level analysis of health insurance policy, health economics, system design, and the intersection of insurance structures with health outcomes, disparities, and healthcare reform.',
      explanation: `Health insurance represents a critical interface between healthcare financing and population health, with profound implications for access, quality, equity, and cost. Advanced analysis requires understanding health economics, policy mechanisms, and the structural determinants of insurance effectiveness.

Health Economics and Insurance Theory:

Risk pooling and adverse selection:
- Asymmetric information in insurance markets
- Death spirals from adverse selection
- Risk adjustment mechanisms
- Mandates and penalties for risk pool stability
- Actuarial fairness vs social solidarity

Moral hazard and utilization:
- Ex-post moral hazard: Overconsumption when insured
- Ex-ante moral hazard: Risk-taking behavior when protected
- Cost-sharing as demand management
- Value-based insurance design
- Reference pricing effects on utilization

Health insurance and health outcomes:
- Oregon Health Insurance Experiment findings
- Medicaid expansion outcome studies
- Medicare coverage and mortality
- Underinsurance and health outcomes
- Cost-related nonadherence effects

Policy Analysis and Reform:

Universal coverage models:
- Single-payer (Canada, proposed Medicare for All)
- National health service (UK NHS)
- Multi-payer with universal coverage (Germany, France)
- Mandated private insurance (Switzerland, ACA model)
- Mixed public-private systems

Medicare policy challenges:
- Part D donut hole and catastrophic coverage
- Sustainable growth rate and physician payment
- Medicare Advantage coding intensity
- Medigap supplemental coverage
- Long-term care financing gap

Medicaid policy issues:
- State variation in eligibility and benefits
- Work requirements (blocked by courts)
- Provider reimbursement and access
- Managed care quality oversight
- Expansion state vs non-expansion outcomes

Employer-sponsored insurance trends:
- Declining offer rates among small employers
- Cost-shifting to employees
- High-deductible plan growth
- Self-insurance trends
- Private exchange adoption

Health Disparities and Equity:

Insurance-related disparities:
- Uninsurance and underinsurance by race/ethnicity
- Geographic disparities in marketplace competition
- Language access in insurance processes
- Health literacy barriers to enrollment
- Immigrant eligibility restrictions

Coverage expansion effects:
- ACA coverage gains by demographic group
- Medicaid expansion and health equity
- Marketplace access in underserved areas
- Community health center funding relationships
- Safety net hospital financial stress

Value-Based Insurance Design:

VBID principles:
- Reduce barriers to high-value services
- Increase cost-sharing for low-value care
- Align patient incentives with evidence
- Account for patient heterogeneity

Implementation challenges:
- Defining high and low value
- Clinical nuance and exceptions
- Health equity implications
- Administrative complexity
- Evidence updating

Innovation and Future Directions:

Technology-enabled insurance:
- Telehealth coverage and parity laws
- Remote patient monitoring reimbursement
- Digital therapeutics coverage policies
- AI-powered utilization management
- Blockchain for claims processing

Alternative payment models:
- Accountable care organizations
- Bundled payments
- Patient-centered medical homes
- Direct contracting between employers and providers
- Medicare Advantage value-based arrangements

Global health insurance:
- Universal health coverage initiatives
- National health insurance in developing countries
- Social health insurance models
- Community-based health insurance
- Microinsurance innovations

Research methodologies:
- Natural experiments from policy changes
- Regression discontinuity designs
- Difference-in-differences analysis
- Discrete choice experiments for plan selection
- Health technology assessment integration`,
      keyTerms: [
        { term: 'adverse selection', definition: 'Tendency of higher-risk individuals to purchase insurance, raising costs for all' },
        { term: 'moral hazard', definition: 'Changed behavior when protected from consequences, leading to increased utilization' },
        { term: 'risk adjustment', definition: 'Payment modification based on enrollee health status to compensate for adverse selection' },
        { term: 'value-based insurance design', definition: 'Structuring cost-sharing to encourage high-value services and discourage low-value care' },
        { term: 'underinsurance', definition: 'Having insurance but with inadequate protection against costs or access limitations' },
        { term: 'Oregon Health Insurance Experiment', definition: 'Randomized controlled trial of Medicaid expansion effects using lottery allocation' }
      ],
      clinicalNotes: `Systems Thinking: Insurance structures profoundly influence clinical practice. Consider:
- How prior authorization requirements affect treatment timelines
- How narrow networks limit referral options
- How cost-sharing affects medication adherence
- How coverage gaps create emergency department utilization
- How documentation requirements affect clinical workflow

Quality Improvement: Healthcare organizations can optimize insurance navigation through:
- Financial navigation services embedded in care teams
- Automated prior authorization workflows
- Real-time insurance verification
- Patient-facing cost estimation tools
- Community resource referrals for uninsurance

Policy Engagement: Clinicians can contribute to insurance policy through:
- Professional organization advocacy on coverage issues
- Public comment on proposed regulations
- Research on coverage policy effects
- Testimony on insurance barriers to care
- Clinical practice guideline development considering cost`
    }
  },
  
  media: [],
  
  citations: [
    { id: 'finkelstein-2012', type: 'article', authors: ['Finkelstein A'], title: 'The Oregon Health Insurance Experiment: evidence from the first year', source: 'Quarterly Journal of Economics' },
    { id: 'sommers-2017', type: 'article', authors: ['Sommers BD'], title: 'Health insurance coverage and health - what the recent evidence tells us', source: 'New England Journal of Medicine' },
    { id: 'emanuel-2018', type: 'article', authors: ['Emanuel EJ'], title: 'The cost of coverage: consumer-directed healthcare and the marginalisation of the unhealthy', source: 'Lancet' },
    { id: 'chernew-2007', type: 'article', authors: ['Chernew ME'], title: 'Value-based insurance design', source: 'Health Affairs' }
  ],
  
  crossReferences: [
    { targetId: 'finding-providers', targetType: 'concept', relationship: 'related', label: 'Finding Providers' },
    { targetId: 'care-coordination', targetType: 'concept', relationship: 'related', label: 'Care Coordination' },
    { targetId: 'shared-decision-making', targetType: 'concept', relationship: 'related', label: 'Shared Decision Making' }
  ],
  
  tags: {
    systems: ['health-system'],
    topics: ['patient-education'],
    keywords: ['health insurance', 'coverage', 'premiums', 'deductible', 'copay', 'healthcare costs', 'ACA']
  },
  
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
