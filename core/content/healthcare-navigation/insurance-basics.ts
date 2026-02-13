/**
 * Health Insurance Basics - Comprehensive Educational Content
 *
 * Explains health insurance concepts including coverage types, deductibles,
 * copays, networks, and how to choose and use insurance effectively.
 */

import { EducationalContent } from '../types';

export const insuranceBasicsContent: EducationalContent = {
  id: 'topic-insurance-basics',
  type: 'topic',
  name: 'Health Insurance Basics',
  nameEs: 'Fundamentos del Seguro de Salud',
  alternateNames: ['Understanding Insurance', 'Insurance Coverage', 'Health Insurance Guide'],

  levels: {
    1: {
      level: 1,
      summary: 'Health insurance is a plan that helps pay for your medical care. You pay a monthly fee, and the insurance helps pay for doctor visits, medicines, and hospital stays when you need them.',
      explanation: `Think of health insurance like a membership that helps you pay for healthcare. You pay a set amount each month (called a premium), and when you need medical care, the insurance company pays part of the cost.

**How Insurance Works:**

**Premium:**
- The amount you pay each month to have insurance
- Like paying for Netflix or a gym membership
- You pay this even if you don't use healthcare that month

**Deductible:**
- The amount you pay for healthcare before insurance starts helping
- Like eating at a restaurant - you pay the first part, then someone else helps with the rest
- Example: If your deductible is $1,000, you pay the first $1,000 of medical bills each year

**Copay:**
- A set amount you pay for each doctor visit or prescription
- Example: $25 for each doctor visit, $10 for generic medicine
- You pay this at each visit

**Coinsurance:**
- A percentage of costs you pay after meeting your deductible
- Example: You pay 20%, insurance pays 80%

**Out-of-Pocket Maximum:**
- The MOST you will pay in a year
- After you reach this amount, insurance pays 100%
- Protects you from very high medical bills

**Network:**

**In-Network:**
- Doctors and hospitals that have an agreement with your insurance
- Costs you less money
- Your insurance has negotiated lower prices with them

**Out-of-Network:**
- Doctors and hospitals NOT in your insurance plan
- Costs you more money
- Sometimes insurance won't pay at all

**Types of Insurance:**

**Private Insurance:**
- From insurance companies
- Often through your job
- Different plans with different costs

**Government Insurance:**
- Medicare: For people age 65+ and some younger people with disabilities
- Medicaid: For people with limited income
- CHIP: For children in families that can't afford private insurance

**Why Have Insurance?**

1. **Protects your money** - One big illness could cost thousands of dollars without insurance
2. **Helps you stay healthy** - Most plans cover check-ups and shots for free
3. **Required by law** - Most people must have health insurance or pay a penalty

**Remember:**
No insurance plan covers everything. Read your plan or call your insurance company to understand what is covered.`,
      keyTerms: [
        { term: 'premium', definition: 'The amount you pay each month for your insurance' },
        { term: 'deductible', definition: 'The amount you pay for healthcare before insurance starts to pay' },
        { term: 'copay', definition: 'A fixed amount you pay for each medical service or prescription' },
        { term: 'network', definition: 'The doctors, hospitals, and other providers that work with your insurance plan' },
        { term: 'in-network', definition: 'Providers who have an agreement with your insurance and cost you less' },
        { term: 'out-of-pocket maximum', definition: 'The most you have to pay for covered services in a year' },
      ],
      analogies: [
        'Insurance is like car insurance for your body - you hope you won\'t need it, but you\'re glad to have it if something happens.',
        'Your deductible is like an entrance fee at an amusement park - once you pay it, the insurance helps cover the rest of the rides.',
      ],
      examples: [
        'You have a $25 copay for doctor visits. You visit the doctor and pay $25 at the office. Insurance pays the rest.',
        'Your deductible is $500. You break your leg and the bill is $5,000. You pay $500, then insurance helps with the rest.',
        'You reach your $6,000 out-of-pocket maximum after having surgery. Any more covered care you need that year is free.',
      ],
      patientCounselingPoints: [
        'Keep your insurance card with you or have a photo on your phone',
        'Know your deductible and copay amounts before you get care',
        'Always check if a doctor is in-network before your appointment',
        'Ask about generic medicines - they usually cost less than brand names',
        'Call your insurance company if you don\'t understand your bill',
      ],
    },
    2: {
      level: 2,
      summary: 'Health insurance helps manage healthcare costs through premiums, deductibles, copays, and coinsurance. Understanding these terms and your plan\'s network is essential for making informed healthcare decisions.',
      explanation: `## Health Insurance Fundamentals

Health insurance is a contract between you and an insurance company that helps pay for medical expenses. Understanding key terms helps you choose and use your plan effectively.

## Key Insurance Terms

### Premium
The amount you pay monthly, quarterly, or annually for coverage
- Pay regardless of whether you use healthcare
- Lower premium usually means higher out-of-pocket costs when you need care
- Higher premium usually means lower out-of-pocket costs

### Deductible
Amount you pay for covered services before insurance starts paying

**Examples:**
- $500 deductible: You pay first $500, then insurance starts
- $2,000 deductible: You pay first $2,000, then insurance starts
- Some services (like preventive care) don't count toward deductible

### Copayment (Copay)
Fixed amount you pay for specific services

**Typical Copays:**
- Primary care visit: $20-40
- Specialist visit: $30-60
- Emergency room: $150-500 (often waived if admitted)
- Generic prescription: $5-20
- Brand prescription: $30-60

### Coinsurance
Percentage you pay for covered services after meeting deductible

**Common Coinsurance:**
- 80/20: Insurance pays 80%, you pay 20%
- 90/10: Insurance pays 90%, you pay 10%
- 70/30: Insurance pays 70%, you pay 30%

### Out-of-Pocket Maximum
The most you pay for covered services in a plan year
- Includes deductible, copays, and coinsurance
- Does NOT include premiums
- Once reached, insurance pays 100% of covered services

## Understanding Networks

### In-Network Providers
Doctors, hospitals, and facilities with contracts with your insurance
- Negotiated, lower rates
- Your costs are lower
- Claims processed automatically

### Out-of-Network Providers
Providers without contracts with your insurance
- Higher costs
- You pay difference between billed charge and allowed amount (balance billing)
- Some plans don't cover out-of-network care at all
- Prior authorization often required

### Network Types

**HMO (Health Maintenance Organization):**
- Usually must stay in-network
- Usually need referrals for specialists
- Lower out-of-pocket costs
- Must choose a primary care provider

**PPO (Preferred Provider Organization):**
- Can see out-of-network providers (costs more)
- No referrals needed
- Higher out-of-pocket costs
- More flexibility

**EPO (Exclusive Provider Organization):**
- Must use in-network providers
- No referral needed
- Like HMO but less restricted

**POS (Point of Service):**
- Mix of HMO and PPO
- Can use out-of-network but costs more
- Referrals needed for in-network specialists

## What Insurance Covers

### Essential Health Benefits (ACA Plans)
All individual and small group plans must cover:
- Ambulatory services (outpatient care)
- Emergency services
- Hospitalization
- Pregnancy, maternity, and newborn care
- Mental health and substance use disorder services
- Prescription drugs
- Rehabilitative services
- Laboratory services
- Preventive and wellness services
- Pediatric services (including oral and vision)

### Preventive Care (Usually Free)
- Annual check-ups
- Vaccinations
- Cancer screenings (mammograms, colonoscopies)
- Blood pressure, cholesterol, diabetes screenings
- Well-child visits

### Common Exclusions
- Cosmetic procedures
- Experimental treatments
- Out-of-network care (some plans)
- Certain brand drugs (if generic available)

## Types of Health Plans

### Metal Levels (Marketplace Plans)

**Bronze (60% actuarial value):**
- Lowest premiums, highest deductibles
- Insurance pays ~60%, you pay ~40%
- Good for healthy people who don't expect much care

**Silver (70% actuarial value):**
- Moderate premiums and deductibles
- Insurance pays ~70%, you pay ~30%
- Qualify for cost-sharing reductions if eligible

**Gold (80% actuarial value):**
- Higher premiums, lower deductibles
- Insurance pays ~80%, you pay ~20%
- Good if you expect regular medical care

**Platinum (90% actuarial value):**
- Highest premiums, lowest deductibles
- Insurance pays ~90%, you pay ~10%
- Good for those with many medical needs

### HDHP and HSA

**High-Deductible Health Plan (HDHP):**
- Higher deductible but lower premium
- Can be paired with Health Savings Account (HSA)
- Preventive care usually covered before deductible

**Health Savings Account (HSA):**
- Tax-free savings account for medical expenses
- You own the account (money rolls over)
- Can be used for qualified medical expenses
- Triple tax advantage: contributions tax-free, growth tax-free, withdrawals tax-free for medical expenses

### Government Insurance

**Medicare:**
- For people 65+, some younger with disabilities
- Part A: Hospital insurance (usually free if you worked and paid taxes)
- Part B: Medical insurance (monthly premium)
- Part C: Medicare Advantage (private plans)
- Part D: Prescription drug coverage

**Medicaid:**
- For people with limited income
- Income and asset requirements vary by state
- Very low out-of-pocket costs
- Benefits vary by state

**CHIP:**
- Children's Health Insurance Program
- For children in families earning too much for Medicaid but can't afford private insurance

## Using Your Insurance

### Before Getting Care
- Check if provider is in-network
- Understand what your plan covers
- Ask about prior authorization if needed
- Know your costs (deductible, copay)

### At the Doctor's Office
- Present insurance card
- Pay your copay
- Ask about costs of recommended treatments

### Receiving Bills
- Explanation of Benefits (EOB): Not a bill! Shows what insurance paid
- Actual bill: What you owe
- Call if charges seem wrong

### Appealing Decisions
- If insurance denies coverage, you can appeal
- Follow appeal process in your plan documents
- Many denials are reversed on appeal`,
      keyTerms: [
        { term: 'premium', definition: 'The fixed amount you pay for your health insurance every month' },
        { term: 'deductible', definition: 'The amount you pay for healthcare services before your insurance plan starts paying' },
        { term: 'copayment (copay)', definition: 'A fixed amount you pay for a covered healthcare service, usually when you receive the service' },
        { term: 'coinsurance', definition: 'Your share of the costs of a covered healthcare service, calculated as a percentage' },
        { term: 'out-of-pocket maximum', definition: 'The most you have to pay for covered services in a plan year' },
        { term: 'in-network', definition: 'Healthcare providers that have contracted with your insurance plan to provide services at a discount' },
        { term: 'prior authorization', definition: 'Approval from your health plan before you get a service or fill a prescription' },
        { term: 'EOB', definition: 'Explanation of Benefits - a statement from your insurance showing what they paid for medical services' },
      ],
      analogies: [
        'Think of your out-of-pocket maximum as a ceiling on your healthcare costs - once you hit it, your insurance takes over completely.',
        'Insurance networks are like discount clubs - the insurance company has negotiated lower prices with certain providers.',
      ],
      patientCounselingPoints: [
        'Review your Summary of Benefits and Coverage (SBC) when choosing a plan',
        'Always confirm a provider is in-network before scheduling an appointment - networks change',
        'Use in-network labs and imaging facilities to avoid surprise bills',
        'Ask about generic alternatives to expensive brand-name medications',
        'Keep receipts for medical expenses if you have an HSA or for tax deductions',
        'Call your insurance company to understand a bill before paying if anything seems wrong',
      ],
    },
    3: {
      level: 3,
      summary: 'Health insurance contracts define financial responsibility through premiums, deductibles, copayments, coinsurance, and out-of-pocket maximums. Understanding plan types, networks, and coverage rules enables optimal healthcare utilization and cost management.',
      explanation: `## Health Insurance Structure and Mechanics

### Financial Responsibility Framework

**Cost-Sharing Components:**

1. **Premium**: Periodic payment for coverage, paid regardless of utilization
2. **Deductible**: Patient pays first $X of covered expenses annually
3. **Copay**: Fixed amount per service (may not apply to deductible)
4. **Coinsurance**: Percentage of costs after deductible
5. **Out-of-Pocket Maximum**: Annual limit on patient cost-sharing

### Actuarial Value and Metal Levels

**Definition:**
Percentage of total average costs for covered benefits that plan pays

**Metal Tiers:**
| Level | Actuarial Value | Patient Pays | Typical Use Case |
|-------|----------------|--------------|------------------|
| Bronze | 60% | 40% | Healthy, low utilization |
| Silver | 70% | 30% | Moderate utilization, eligible for CSR |
| Gold | 80% | 20% | Regular healthcare needs |
| Platinum | 90% | 10% | High utilization, chronic conditions |

**Cost-Sharing Reductions (CSR):**
- Available for Silver plans with income 100-250% FPL
- Reduce deductibles, copays, coinsurance
- Can make Silver plan value equivalent to Gold or Platinum

### Provider Networks

**Network Adequacy:**
- Insurers must ensure sufficient access
- Standards vary by state
- Includes geographic distribution, specialties, wait times

**Provider Contracting:**
- Providers agree to discounted rates (allowed amount)
- Balance billing restricted for in-network care
- No Surprises Act (2022) limits surprise billing for emergencies and some out-of-network care at in-network facilities

**Network Types Compared:**

| Feature | HMO | PPO | EPO | POS |
|---------|-----|-----|-----|-----|
| Referrals required | Yes | No | No | Yes |
| Out-of-network covered | No | Yes | No | Yes |
| Premium | Lower | Higher | Lower | Moderate |
| Deductible | Lower | Higher | Higher | Moderate |

### Coverage Determinations

**Medical Necessity:**
- Services must be medically necessary to be covered
- Definition varies by plan but generally:
  - Appropriate for condition
  - Consistent with standards of practice
  - Not primarily for convenience

**Prior Authorization:**
- Utilization management tool
- Required for certain services, medications, procedures
- Can delay care
- Bypass provisions for urgent situations
- Can be appealed if denied

**Step Therapy:**
- Requires trying less expensive treatment first
- Common for prescription drugs
- Exceptions process available

### Enrollment Periods

**Open Enrollment:**
- Annual period to enroll or change plans
- ACA Marketplace: Nov 1 - Jan 15 (most states)
- Employer plans: varies by employer

**Special Enrollment Period:**
- Triggered by qualifying life events:
  - Marriage, divorce, having a baby
  - Losing other coverage
  - Moving to new area
  - Changes in income

### Prescription Drug Coverage

**Formulary Tiers:**
- Tier 1: Generic (lowest copay)
- Tier 2: Preferred brand
- Tier 3: Non-preferred brand
- Tier 4: Specialty drugs (highest copay)

**Cost Management Tools:**
- Prior authorization
- Step therapy
- Quantity limits
- Mandatory generic substitution

### Coordination of Benefits

**Multiple Insurance Coverage:**
- Primary payer pays first
- Secondary payer coordinates benefits
- Prevents duplicate payments
- Birthday rule for dependent children

### Continuation Coverage

**COBRA:**
- Continue employer coverage after leaving job
- Employee pays full premium + 2% admin fee
- Available up to 18-36 months
- Expensive but maintains coverage

### Consumer-Directed Health Plans

**HSA-Eligible HDHP:**
- Minimum deductible (2024): $1,600 individual / $3,200 family
- Maximum out-of-pocket: $8,050 individual / $16,100 family
- Preventive care exempt from deductible
- Can pair with HSA

**HSA Benefits:**
- Triple tax advantage
- Employer contributions allowed
- Portable (you keep it if you change jobs)
- No use-it-or-lose-it provision

**FSA (Flexible Spending Account):**
- Use-it-or-lose-it (with some carryover options)
- Not portable
- Lower contribution limits
- Can be used with any health plan

### Claims and Appeals

**Explanation of Benefits (EOB):**
- Not a bill
- Shows: services, provider charges, allowed amount, what insurance paid, what you owe
- Review for accuracy

**Appeal Rights:**
- Internal appeal: Insurance company reviews its decision
- External appeal: Independent reviewer decides
- Many denials are successfully appealed
- Time limits apply (typically 180 days)

### Common Coverage Gaps

**Typically NOT Covered:**
- Cosmetic procedures
- Experimental/investigational treatments
- Long-term care
- Dental and vision (separate policies usually needed)
- Non-covered prescription drugs
- Out-of-network care (some plans)`,
      keyTerms: [
        { term: 'actuarial value', definition: 'Percentage of average total cost of covered benefits that a health plan pays' },
        { term: 'cost-sharing reduction (CSR)', definition: 'Discounts that lower the amount you have to pay for deductibles, copayments, and coinsurance' },
        { term: 'formulary', definition: 'List of prescription drugs covered by a health plan, typically organized into tiers' },
        { term: 'COBRA', definition: 'Law allowing continued health coverage from employer-sponsored plan after job loss or other qualifying events' },
        { term: 'medical necessity', definition: 'Healthcare services or supplies needed to diagnose or treat an illness or injury' },
        { term: 'balance billing', definition: 'When out-of-network provider bills patient for difference between their charge and insurance payment' },
        { term: 'allowed amount', definition: 'Maximum amount a plan will pay for a covered service' },
      ],
      clinicalNotes: 'Insurance coverage affects access to care. As clinicians, we must be aware of coverage implications when recommending treatments and help patients navigate prior authorization requirements when needed.',
      patientCounselingPoints: [
        'Review your Summary of Benefits and Coverage (SBC) to understand your plan',
        'Check your insurer\'s website or call to confirm provider network status',
        'Use in-network providers and facilities to minimize out-of-pocket costs',
        'Ask about prior authorization requirements before scheduling procedures',
        'For expensive medications, ask if there are lower-cost alternatives or assistance programs',
        'Appeal any denial you believe is incorrect - many are overturned',
      ],
    },
    4: {
      level: 4,
      summary: 'Health insurance represents a complex risk-pooling mechanism with financial and utilization controls implemented through network design, cost-sharing, coverage determinations, and utilization management protocols.',
      explanation: `## Health Insurance Economics and Policy

### Insurance Fundamentals

**Risk Pooling:**
- Large pool shares risk of high-cost events
- Premiums fund claims pool
- Adverse selection: Sick people more likely to buy insurance
- Risk adjustment compensates plans for sicker populations

**Moral Hazard:**
- Insurance coverage increases healthcare utilization
- Cost-sharing intended to discourage unnecessary care
- Challenge: balancing access with appropriate utilization

### Insurance Market Structure

**Commercial Insurers:**
- For-profit: UnitedHealth, Anthem, Cigna, Aetna
- Non-profit: Kaiser (integrated), Blues plans
- Medicaid managed care: Centene, Molina
- Medicare Advantage: UnitedHealth, Humana, Aetna, CVS/Aetna

**Market Concentration:**
- Increasing consolidation
- Local markets often highly concentrated
- Can reduce competition and increase premiums
- Vertical integration (insurers owning providers, PBMs, etc.)

### Affordable Care Act Provisions

**Insurance Market Reforms:**
- Guaranteed issue: Cannot deny coverage for pre-existing conditions
- Community rating: Limited rating factors (age, location, tobacco)
- Essential health benefits required
- Annual and lifetime limits prohibited
- Medical loss ratio: 80-85% of premiums must go to healthcare

**Individual Mandate:**
- Federal penalty eliminated 2019
- Some states have individual mandates
- Enforcement through tax penalty

**Risk Corridors, Reinsurance, Risk Adjustment:**
- Transitional programs to stabilize markets
- Risk adjustment continues
- Transfers funds from plans with healthy enrollees to plans with sick enrollees

### Utilization Management

**Prior Authorization:**
- Purpose: Ensure medical necessity, appropriate use
- Criticisms: administrative burden, delays care, overrides clinician judgment
- Trends: Gold carding (exemption for high-performing providers), electronic prior authorization
- No Surprises Act requires transparency

**Step Therapy:**
- Requires trial of preferred treatment first
- Exceptions: medical necessity, previous failure, contraindications
- More common for medications than procedures

**Network Adequacy Standards:**
- Maximum distance/time to providers
- Wait time standards
- Specialty availability
- Varies by state and plan type

### Provider Reimbursement

**Fee-for-Service:**
- Payment per service provided
- Incentivizes volume
- Declining in favor of value-based payment

**Capitation:**
- Fixed payment per enrollee per period
- Provider assumes utilization risk
- Can incentivize under-utilization

**Bundled Payments:**
- Single payment for episode of care
- Includes hospital, physician, post-acute
- Provider assumes efficiency risk

**Value-Based Arrangements:**
- Link payment to quality and outcomes
- Pay-for-performance
- Shared savings/shared risk
- Accountable Care Organizations

### Drug Coverage and Pricing

**Pharmacy Benefit Management (PBM):**
- Intermediate between insurers and drug manufacturers
- Formulary management
- Rebate negotiations
- Vertical consolidation (insurers owning PBMs)

**Formulary Design:**
- Tiered copays/coinsurance
- Prior authorization
- Step therapy
- Quantity limits

**Drug Pricing Factors:**
- List price (gross price)
- Net price (after rebates)
- Patient out-of-pocket varies by plan design

### Medicare Program Structure

**Traditional Medicare (Parts A and B):**
- Fee-for-service
- No network (any provider accepting Medicare)
- No out-of-pocket maximum
- Medigap supplements available

**Medicare Advantage (Part C):**
- Private plans contract with Medicare
- Must provide at least Part A/B benefits
- Usually includes drug coverage (Part D)
- Has out-of-pocket maximum
- May include extra benefits (vision, hearing, dental)

**Medicare Payment Systems:**
- Hospital: DRGs (diagnosis-related groups) - fixed payment per admission
- Physician: RVUs (relative value units)
- Post-acute: bundled payments, per diem rates

### Medicaid Program Features

**Joint Federal-State Program:**
- Federal matching funds (FMAP) varies by state income
- State flexibility within federal requirements
- Expansion population (138% FPL) vs traditional Medicaid

**Benefits:**
- Mandatory benefits set by federal government
- Optional benefits vary by state
- Very low out-of-pocket costs

### Cost-Sharing and Value-Based Insurance Design

**Value-Based Insurance Design (VBID):**
- Align patient cost-sharing with clinical value
- Low or no cost for high-value services
- Higher cost for low-value services
- Medicare Advantage VBID demonstration

**Reference Pricing:**
- Employer/insurer sets maximum payment for service
- Patient pays difference if chooses more expensive option
- Used for surgery, imaging, drugs

### Transparency Initiatives

**Price Transparency Requirements:**
- Hospitals must publish negotiated rates
- Insurers must allow cost estimation tools
- Shoppable services required transparency

**Quality Transparency:**
- Hospital Compare, Physician Compare
- Star ratings for Medicare Advantage plans
- State report cards

### Policy Debates

**Public Option:**
- Government-run plan competing with private
- Could increase competition and lower premiums
- Concerns about crowding out private plans

**Medicare for All / Single Payer:**
- Government covers all residents
- Eliminates underinsurance, simplifies administration
- Cost estimates vary widely
- Political feasibility challenges

**Surprise Billing:**
- No Surprises Act (2022) addressed:
  - Emergency services at in-network facilities
  - Out-of-network air ambulance
  - Balance billing prohibited in these situations
  - Independent dispute resolution process`,
      keyTerms: [
        { term: 'adverse selection', definition: 'Tendency for higher-risk individuals to seek insurance coverage while lower-risk individuals avoid it' },
        { term: 'moral hazard', definition: 'Increased utilization of healthcare services because insurance reduces the financial consequences' },
        { term: 'medical loss ratio', definition: 'Percentage of premium revenues spent on clinical services and quality improvement' },
        { term: 'risk adjustment', definition: 'Process of transferring funds from plans with healthier enrollees to plans with sicker enrollees' },
        { term: 'PBM', definition: 'Pharmacy Benefit Manager - intermediary that manages prescription drug benefits' },
        { term: 'DRG', definition: 'Diagnosis-Related Group - classification system for hospital payments, fixed payment per admission' },
        { term: 'RVU', definition: 'Relative Value Unit - measure of work used for Medicare physician payment' },
        { term: 'FMAP', definition: 'Federal Medical Assistance Percentage - federal share of Medicaid funding, varies by state' },
      ],
      clinicalNotes: `Insurance considerations affect clinical decision-making:
1. Prior authorization can delay or alter treatment plans
2. Formulary restrictions affect medication choices
3. Network limitations affect referral options
4. High deductible may affect patient adherence

Clinicians should:
- Consider insurance status when developing treatment plans
- Help patients navigate prior authorization
- Prescribe formulary-preferred medications when appropriate
- Discuss costs with patients
- Assist with appeals when coverage denied`,
      patientCounselingPoints: [
        'When choosing a plan, consider your expected healthcare needs for the coming year',
        'Review the formulary if you take regular medications to ensure they\'re covered',
        'Understand your network: which hospitals and specialists are in-network?',
        'For high-cost procedures, ask about payment plans or financial assistance',
        'Keep records of all communications with insurance regarding coverage decisions',
        'Appeal any denial - include letter of medical necessity from your provider',
      ],
    },
    5: {
      level: 5,
      summary: 'Health insurance represents a complex intersection of healthcare financing, risk management, regulatory policy, and clinical practice. Mastery requires understanding actuarial principles, reimbursement models, utilization management, and the impact on patient care.',
      explanation: `## Advanced Health Insurance Concepts

### Actuarial and Risk Management

**Risk Adjustment Methodology:**
- Hierarchical Condition Category (HCC) model for Medicare Advantage
- RxHCC for prescription drug risk adjustment
- Diagnosis-based risk scores predict expected costs
- Risk scores used for:
  - Plan payments (Medicare Advantage, ACA exchanges)
  - Provider profiling
  - Quality adjustment

**Adverse Selection and Death Spiral:**
- Insurers cannot predict individual health needs
- Community rating + guaranteed issue requires risk adjustment
- Without risk adjustment, sicker enrollees drive up premiums, healthier leave
- Risk mitigation through:
  - Risk adjustment payments
  - Open enrollment periods
  - Individual mandate (historically)

**Moral Hazard and Price Elasticity:**
- Empirical estimates of demand elasticity ~ -0.2
- Higher cost-sharing reduces utilization
- Reduces both appropriate AND inappropriate care
- Income effects: cost-sharing burdens low-income patients more

### Reimbursement Mechanisms

**Hospital Payment:**
- **Inpatient**: DRGs (Diagnosis-Related Groups)
  - Fixed payment by diagnosis
  - Adjusted for severity, comorbidities, teaching status, wages, case mix
  - Incentivizes efficiency, creates incentive for upcoding
- **Outpatient**: APCs (Ambulatory Payment Classifications)
  - Similar structure to DRGs
  - Device-intensive procedures have separate payment

**Physician Payment:**
- **RVU System**:
  - Work RVU: relative effort, skill, time
  - Practice expense RVU: overhead costs
  - Malpractice RVU: liability costs
  - Conversion factor translates RVUs to dollars
  - Geographic adjustment
- **Primary Care Bonus**: Enhanced payments for primary care
- **Bundled Payments**: Episode-based payment

**Post-Acute Care:**
- SNF: per diem (daily rate)
- Home Health: 30-day episodes
- Hospice: per diem

### Medicare Program Details

**Medicare Trust Funds:**
- HI (Hospital Insurance): Part A, projected insolvency
- SMI (Supplementary Medical Insurance): Part B/D, general revenue

**Medicare Advantage Payments:**
- Benchmark = county-level capitation rate
- Bid = plan's estimated cost
- Rebate = difference if bid < benchmark
- Risk adjustment based on HCCs
- Quality bonus payments

**Medicare Part D:**
- Gap (donut hole) largely closed by ACA
- Coverage phases: deductible, initial coverage, gap, catastrophic
- Manufacturer discounts in gap
- IRR (Individual Replacement Rate) calculation

### Medicaid Program

**Eligibility Pathways:**
- Categorical: children, pregnant women, parents, elderly, disabled
- Magnitude of income threshold varies
- Expansion under ACA: all adults <138% FPL
- CHIP for children above Medicaid thresholds

**Financing:**
- FMAP (Federal Medical Assistance Percentage)
- Ranges 50-83% based on state per capita income
- Enhanced FMAP for expansion population
- Maintenance of Effort (MOE) requirements

### Private Insurance Market Dynamics

**Market Concentration:**
- Herfindahl-Hirschman Index (HHI) used to assess competition
- Highly concentrated in many metropolitan areas
- Consolidation: insurer-insurer mergers, provider-insurer vertical integration

**Product Design:**
- Stop-loss insurance for self-funded employers
- Level-funded plans
- Reference pricing
- Narrow networks
- High-deductible plans with HSAs

### Pharmacy Benefits and Drug Pricing

**Supply Chain:**
- Manufacturer sets list price
- PBM negotiates rebates
- Insurer receives rebate, lowers net cost
- Patient often pays based on list price
- Rebates often not passed to patients at point of sale

**Pricing Strategies:**
- Pharmacy Benefit Managers: formularies, rebates, prior auth, step therapy
- Manufacturer copay assistance: helps patients but can increase premiums
- Step therapy protocols
- Prior authorization

**Value-Based Arrangements for Drugs:**
- Outcomes-based contracts
- Indication-specific pricing
- Subscription models (e.g., gene therapies)

### Policy Considerations

**Coverage Decisions:**
- Evidence reviews: What evidence is sufficient?
- Cost-effectiveness: Should cost be considered?
- Comparative effectiveness: Head-to-head trials
- Real-world evidence: When is it sufficient?

**Access vs Affordability:**
- Broad coverage requires mandatory participation
- Affordability requires subsidies or single-payer
- Trade-offs: premiums vs cost-sharing vs network breadth

**Value-Based Insurance Design (VBID):**
- Align patient incentives with clinical value
- Low copays for high-value care
- High copays for low-value care
- Examples: statins, diabetes medications, primary care

**Surprise Billing Legislation:**
- No Surprises Act (2022)
- Independent Dispute Resolution (IDR) process
- Arbitration between insurer and provider
- Qualifying payment amount (QPA) as benchmark

### International Comparisons

**Multi-payer systems:**
- Germany, Switzerland, Netherlands
- Similar to US but with:
  - Universal coverage mandate
  - Standard benefits
  - Price regulation
  - Risk adjustment

**Single-payer systems:**
- Canada, UK, Taiwan, others
- Government financing
- Benefits:
  - Universal coverage
  - Lower administrative costs
  - Price negotiation power
  - No underinsurance
- Challenges:
  - Wait times
  - Limited choice
  - Cost control

### Future Directions

**Telehealth Coverage:**
- Expanded during COVID-19
- Some provisions made permanent
- Interstate licensure compact
- Payment parity

**Social Determinants Coverage:**
- Housing, nutrition, transportation
- Medicaid waivers
- Accountable Health Communities
- ICD-10 Z codes for social needs

**Artificial Intelligence:**
- Prior authorization automation
- Claims processing
- Fraud detection
- Care management`,
      keyTerms: [
        { term: 'HCC', definition: 'Hierarchical Condition Category - risk adjustment model using diagnoses to predict healthcare costs' },
        { term: 'DRG', definition: 'Diagnosis-Related Group - classification system for hospital payments, fixed payment per admission' },
        { term: 'RVU', definition: 'Relative Value Unit - measure of work used for Medicare physician payment, accounts for work, practice expense, and malpractice' },
        { term: 'FMAP', definition: 'Federal Medical Assistance Percentage - federal share of Medicaid funding, varies by state income' },
        { term: 'IDR', definition: 'Independent Dispute Resolution - arbitration process for surprise billing disputes under No Surprises Act' },
        { term: 'QPA', definition: 'Qualifying Payment Amount - benchmark median contracted rate for surprise billing arbitration' },
        { term: 'IRR', definition: 'Individual Replacement Rate - Medicare measure of drug plan quality and cost performance' },
      ],
      clinicalNotes: `For clinicians, insurance considerations impact:
1. Treatment selection: formularies, prior authorization, medical necessity
2. Care coordination: network limitations, referral requirements
3. Patient adherence: cost-sharing, pharmacy benefits
4. Administrative burden: documentation, prior auth, appeals

Best practices:
- Discuss costs with patients
- Prescribe formulary-preferred agents when appropriate
- Help navigate prior authorization efficiently
- Provide letters of medical necessity
- Assist with appeals when coverage denied
- Consider patient\'s insurance coverage when developing treatment plans
- Be familiar with common coverage requirements in your specialty`,
    },
  },

  media: [
    {
      id: 'insurance-cost-structure',
      type: 'diagram',
      filename: 'insurance-cost-structure.svg',
      title: 'Insurance Cost Structure Diagram',
      description: 'Visual breakdown of premiums, deductibles, copays, and out-of-pocket maximum',
    },
    {
      id: 'insurance-plan-types',
      type: 'diagram',
      filename: 'insurance-plan-types.svg',
      title: 'Health Plan Types Comparison',
      description: 'Comparison of HMO, PPO, EPO, and POS plan features',
    },
  ],

  citations: [
    {
      id: 'healthcare-gov',
      type: 'website',
      title: 'Health Insurance Marketplace',
      source: 'Healthcare.gov',
      url: 'https://www.healthcare.gov/',
    },
    {
      id: 'kaiser-family-foundation',
      type: 'website',
      title: 'Health Insurance Coverage of the Total Population',
      source: 'Kaiser Family Foundation',
      url: 'https://www.kff.org/health-reform/fact-sheet/summary-of-the-affordable-care-act/',
    },
    {
      id: 'medicare-gov',
      type: 'website',
      title: 'Medicare Coverage',
      source: 'Medicare.gov',
      url: 'https://www.medicare.gov/',
    },
  ],

  crossReferences: [
    { targetId: 'topic-healthcare-system-basics', targetType: 'topic', relationship: 'related', label: 'Healthcare System Basics' },
    { targetId: 'topic-appointments', targetType: 'topic', relationship: 'related', label: 'Appointments and Preparation' },
  ],

  tags: {
    systems: ['healthcare-navigation'],
    topics: ['insurance', 'healthcare costs', 'coverage', 'Medicare', 'Medicaid'],
    keywords: ['premium', 'deductible', 'copay', 'in-network', 'prior authorization'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default insuranceBasicsContent;
