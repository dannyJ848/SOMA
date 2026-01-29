import { EducationalContent } from '../../types';

export const understandingBillsContent: EducationalContent = {
  id: 'understanding-bills',
  type: 'concept',
  name: 'Understanding Medical Bills',
  alternateNames: ['Medical Billing', 'Healthcare Costs', 'Medical Charges'],
  levels: {
    1: {
      level: 1,
      summary: 'Medical bills can be confusing. Learning to read them helps you catch mistakes and understand what you are paying for.',
      explanation: `## Understanding Your Medical Bills

Medical bills can be confusing. Learning to read them helps you catch mistakes and understand what you are paying for.

### Key Parts of a Bill

- **Services**: What care you received
- **Charges**: The full price before insurance
- **Adjustments**: Discounts your insurance negotiated
- **Insurance paid**: What insurance covered
- **You owe**: Your remaining balance

### Common Terms

- **Deductible**: Amount you pay before insurance helps
- **Copay**: Fixed amount you pay for a visit
- **Coinsurance**: Percentage you pay after deductible

### Check for Errors

- Wrong dates or services
- Double charges for same thing
- Services you did not receive
- Wrong insurance information

### If You Cannot Pay

- Ask about payment plans
- Check if you qualify for financial aid
- Ask for an itemized bill to review charges`,
      keyTerms: [
        { term: 'Deductible', definition: 'Amount you pay before insurance starts paying' },
        { term: 'Copay', definition: 'Fixed fee you pay at time of service' },
        { term: 'Coinsurance', definition: 'Percentage of cost you share with insurance' },
        { term: 'Itemized bill', definition: 'Detailed list of each charge' }
      ],
      analogies: [
        'A medical bill is like a restaurant receipt showing each item you ordered'
      ],
      examples: [
        'Checking that you were not charged for a test that was cancelled',
        'Comparing your bill to the explanation of benefits from insurance'
      ]
    },
    2: {
      level: 2,
      summary: 'Medical billing involves multiple documents including bills, explanation of benefits, and statements. Understanding how these relate helps you verify charges and resolve discrepancies.',
      explanation: `## Medical Billing Documents

Medical billing involves multiple documents including bills, explanation of benefits, and statements. Understanding how these relate helps you verify charges and resolve discrepancies.

### Types of Documents

**Medical Bill:**
- From the healthcare provider
- Lists services and charges
- Shows payments and adjustments
- States amount you owe

**Explanation of Benefits (EOB):**
- From your insurance company
- Explains what was covered and why
- Shows deductible and coinsurance applied
- Not a bill, but helps understand billing

**Statement:**
- Summary of account activity
- May combine multiple visits
- Shows current balance

### Understanding Charges

**Hospital Charges:**
- Room and board
- Procedures and surgeries
- Medications and supplies
- Professional fees (doctors)

**Professional Fees:**
- Doctor services
- May be billed separately from hospital
- Different providers bill separately

### Common Billing Issues

- **Upcoding**: Charging for more expensive service than provided
- **Unbundling**: Charging separately for items that should be together
- **Duplicate billing**: Same service charged twice
- **Balance billing**: Provider billing difference between charge and insurance payment

### Steps to Review

1. Compare bill to EOB
2. Request itemized bill if needed
3. Verify services match your visit
4. Check insurance was billed correctly
5. Question any discrepancies`,
      keyTerms: [
        { term: 'Explanation of Benefits', definition: 'Insurance document explaining coverage' },
        { term: 'Upcoding', definition: 'Billing for more expensive service than performed' },
        { term: 'Unbundling', definition: 'Billing separately for related services' },
        { term: 'Balance billing', definition: 'Billing patient for costs beyond insurance payment' }
      ],
      analogies: [
        'EOB is like a report card showing how your insurance graded each charge'
      ],
      examples: [
        'A patient discovers they were charged for a private room when they stayed in a shared room',
        'Insurance denies coverage for a service deemed not medically necessary'
      ]
    },
    3: {
      level: 3,
      summary: 'Medical billing uses standardized codes including CPT for procedures, ICD for diagnoses, and DRG for hospital stays. Understanding these codes helps patients verify accurate billing and identify errors.',
      explanation: `## Medical Coding and Billing

Medical billing uses standardized codes including CPT for procedures, ICD for diagnoses, and DRG for hospital stays. Understanding these codes helps patients verify accurate billing and identify errors.

### Coding Systems

**CPT Codes (Current Procedural Terminology):**
- Five-digit codes for procedures and services
- Describe what was done during visit
- Examples: 99213 (office visit), 36415 (blood draw)
- Each code has specific requirements

**ICD-10 Codes (International Classification of Diseases):**
- Diagnosis codes justifying medical necessity
- Alphanumeric format (e.g., E11.9 for Type 2 diabetes)
- Must support services billed

**HCPCS Codes:**
- Supplies, drugs, and services not in CPT
- Two levels: Level I (CPT) and Level II (supplies)

**DRG (Diagnosis-Related Group):**
- For hospital inpatient stays
- Single payment for entire hospitalization
- Based on primary diagnosis and procedures

### The Billing Process

1. **Service Provided**: Doctor documents visit
2. **Coding**: Trained coder assigns appropriate codes
3. **Charge Entry**: Dollar amounts assigned to codes
4. **Claim Submission**: Sent to insurance electronically
5. **Adjudication**: Insurance reviews and processes
6. **Payment**: Insurance pays portion
7. **Patient Billing**: Remaining balance billed to patient

### Identifying Errors

**Common Coding Errors:**
- Wrong code for service provided
- Upcoding to more complex visit
- Missing modifier for special circumstances
- Incorrect diagnosis code

**Red Flags:**
- Services on days you were not there
- Procedures you do not remember
- Multiple charges for same service
- Charges much higher than expected

### Appeals Process

If insurance denies coverage:
1. Review denial reason on EOB
2. Gather supporting documentation
3. File formal appeal with insurance
4. Request external review if needed
5. Contact state insurance commissioner if unresolved`,
      keyTerms: [
        { term: 'CPT code', definition: 'Code describing medical procedures' },
        { term: 'ICD-10 code', definition: 'International classification of disease codes' },
        { term: 'DRG', definition: 'Diagnosis-related group for hospital payment' },
        { term: 'Adjudication', definition: 'Insurance process of reviewing claims' },
        { term: 'Modifier', definition: 'Code indicating special circumstances' }
      ]
    },
    4: {
      level: 4,
      summary: 'Medical billing complexity stems from multiple stakeholders including providers, payers, and patients. Revenue cycle management, contract negotiations, and regulatory requirements create a system where transparency and accuracy require active patient engagement.',
      explanation: `## Healthcare Billing System

Medical billing complexity stems from multiple stakeholders including providers, payers, and patients. Revenue cycle management, contract negotiations, and regulatory requirements create a system where transparency and accuracy require active patient engagement.

### Revenue Cycle Management

**Front End:**
- Patient registration and insurance verification
- Prior authorization for services
- Eligibility verification
- Point-of-service collections

**Mid Cycle:**
- Clinical documentation
- Charge capture and coding
- Claim scrubbing and submission
- Denial management

**Back End:**
- Payment posting
- Accounts receivable follow-up
- Patient collections
- Reporting and analysis

### Payer Contracts

**Fee-for-Service:**
- Payment per procedure or visit
- Negotiated rates between provider and payer
- Chargemaster prices often inflated
- Actual payment based on contracts

**Value-Based Payments:**
- Bundled payments for episodes of care
- Shared savings programs
- Quality metrics affecting reimbursement
- Risk-sharing arrangements

### Surprise Billing Issues

**Out-of-Network Charges:**
- Emergency services at out-of-network facilities
- Out-of-network providers at in-network hospitals
- Air ambulance services
- No Surprises Act protections (2022)

**Ground Ambulance:**
- Often not covered by No Surprises Act
- High out-of-pocket costs
- Limited state regulations

### Patient Financial Advocacy

**Hospital Financial Counselors:**
- Screen for eligibility for assistance
- Set up payment plans
- Apply for charity care
- Connect to Medicaid if eligible

**Financial Assistance Programs:**
- Charity care for uninsured/underinsured
- Sliding scale discounts
- Federal 340B drug pricing
- State-specific programs

### Billing Compliance

**False Claims Act:**
- Prohibits submitting false claims
- Qui tam whistleblower provisions
- Penalties for upcoding and unbundling

**Stark Law and Anti-Kickback:**
- Prevents self-referral for financial gain
- Prohibits inducements for referrals
- Safe harbors for legitimate arrangements`,
      keyTerms: [
        { term: 'Chargemaster', definition: 'Hospital list price for services' },
        { term: 'Revenue cycle', definition: 'Process from patient registration to payment' },
        { term: 'Prior authorization', definition: 'Insurance approval before service' },
        { term: 'No Surprises Act', definition: 'Federal law protecting against surprise bills' },
        { term: 'Qui tam', definition: 'Whistleblower lawsuit provision' }
      ],
      clinicalNotes: 'Patients should request good faith estimates for scheduled procedures under No Surprises Act. Financial counseling before elective procedures can identify assistance programs. Hospital chargemaster prices often 3-5x Medicare rates; actual patient responsibility varies by insurance contract.'
    },
    5: {
      level: 5,
      summary: 'Healthcare pricing transparency initiatives and billing reform aim to empower consumer decision-making. Price transparency rules, hospital transparency mandates, and all-payer claims databases represent evolving efforts to address market failures in healthcare pricing.',
      explanation: `## Healthcare Pricing and Transparency

Healthcare pricing transparency initiatives and billing reform aim to empower consumer decision-making. Price transparency rules, hospital transparency mandates, and all-payer claims databases represent evolving efforts to address market failures in healthcare pricing.

### Federal Transparency Requirements

**Hospital Price Transparency Rule (2021):**
- Machine-readable files of all charges
- Display of 300 shoppable services
- Consumer-friendly format required
- Enforcement through civil monetary penalties

**Transparency in Coverage Rule (2022-2024):**
- Machine-readable files for plans
- Cost estimator tools for members
- In-network rates and out-of-network allowed amounts
- Phased implementation by plan size

### Price Variation

**Geographic Variation:**
- Same procedure costs 2-5x different across markets
- Driven by market concentration
- Teaching hospitals often higher costs
- Cost of living adjustments insufficient

**Within-Market Variation:**
- Same procedure 2-3x different within city
- Little correlation with quality
- Facility fees drive hospital-based costs

### Alternative Payment Models

**Direct Primary Care:**
- Membership model bypassing insurance
- Monthly fee for comprehensive care
- Reduced administrative overhead
- Transparent pricing for services

**Cash-Pay Options:**
- Often lower than insurance-negotiated rates
- Surgery centers offering bundled prices
- Imaging centers with published prices
- Pharmacy discount programs

### All-Payer Claims Databases (APCDs)

**Purpose:**
- Aggregate claims data across payers
- Enable price and quality comparison
- Support policy analysis
- Currently in about 20 states

**Challenges:**
- ERISA preemption issues
- Self-insured plan participation
- Data standardization
- Privacy concerns

### Future Directions

**Reference Pricing:**
- Set maximum payment for procedures
- Patients pay difference if exceed reference
- Used by CalPERS and others
- Significant cost savings demonstrated

**Global Budgeting:**
- Maryland all-payer model
- Hospital revenue cap based on population
- Reduces volume-driven incentives
- Being tested in other states

### International Comparison

**Price Differences:**
- US prices 2-5x higher than other developed countries
- Administrative costs significantly higher
- Pharmaceutical prices notably elevated
- Medical device costs inflated

### Policy Considerations

**Market-Based Solutions:**
- Consumer-directed health plans
- High-deductible health plans
- Health savings accounts
- Limited evidence of cost control

**Regulatory Approaches:**
- All-payer rate setting
- Global budgeting
- Price caps on pharmaceuticals
- Rate review for insurance premiums`,
      keyTerms: [
        { term: 'All-payer rate setting', definition: 'Government setting prices for all insurers' },
        { term: 'Reference pricing', definition: 'Maximum payment amount for given service' },
        { term: 'Chargemaster', definition: 'Comprehensive list of hospital prices' },
        { term: 'Global budgeting', definition: 'Fixed revenue cap for hospitals' },
        { term: 'Cost-sharing', definition: 'Patient portion of healthcare costs' }
      ],
      clinicalNotes: 'Hospital price transparency compliance remains low (~30%). Reference pricing models show 10-20% savings on targeted procedures. All-payer rate setting associated with lower healthcare spending growth. Direct primary care growing but limited integration with specialty care.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'healthcare-navigation'],
    keywords: ['medical bills', 'insurance', 'billing', 'healthcare costs', 'transparency']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
