/**
 * Prescription Assistance Programs - Comprehensive Educational Content
 *
 * Explains how to afford medications including patient assistance programs,
 * $4 generics, 340B Drug Pricing Program, GoodRx, manufacturer coupons,
 * NeedyMeds, RxAssist, state pharmaceutical assistance programs, and
 * insulin cap programs.
 */

import { EducationalContent } from '../types';

export const prescriptionAssistanceContent: EducationalContent = {
  id: 'topic-prescription-assistance',
  type: 'topic',
  name: 'Prescription Assistance Programs',
  nameEs: 'Programas de Asistencia para Medicamentos',
  alternateNames: ['Medication Assistance', 'Drug Discount Programs', 'Rx Assistance', 'Affordable Medications'],

  levels: {
    1: {
      level: 1,
      summary: 'There are many programs that can help you pay for your medicines. Some medicines can cost just $4, and there are special programs from drug companies, stores, and the government that can lower your costs or give you medicine for free.',
      explanation: `Medicines can be very expensive, but there are many ways to pay less. Even if you do not have insurance, you can often find help.

**Generic Medicines - Your Best Friend for Savings:**

- A generic medicine has the same active ingredient as the brand-name version
- It works the same way and is just as safe
- It can cost 80-90% LESS than the brand name
- Example: Lipitor (brand) costs $300+ per month. Atorvastatin (generic) costs $4-$15
- Always ask your doctor: "Is there a generic version?"

**$4 Generic Programs:**

- Many pharmacies sell common generic medicines for just $4 for a 30-day supply
- Some offer 90-day supplies for $10
- Stores like Walmart, Costco, Kroger, and others have these programs
- No insurance needed - anyone can use them
- Covers hundreds of common medicines for diabetes, blood pressure, cholesterol, infections, and more
- Think of it like a dollar menu for medicines

**Prescription Discount Cards and Apps:**

**GoodRx:**
- Free app or website that shows you the lowest price at pharmacies near you
- Works like a coupon - show the pharmacist the discount code
- Can save 50-80% on many medicines
- No sign-up fee and no insurance needed
- Available at most major pharmacies

**Other Discount Programs:**
- RxSaver
- SingleCare
- Amazon Pharmacy (for Prime members)
- Costco pharmacy (membership not required for pharmacy)
- Mark Cuban Cost Plus Drugs (costplusdrugs.com)

**Patient Assistance Programs (PAPs):**

- Free or very low-cost medicines directly from the drug company that makes them
- Most major drug companies have these programs
- Usually for people without insurance or with high costs
- You apply with your doctor's help
- Medicines are shipped to your doctor's office or your home
- Can save hundreds or thousands of dollars per month

**How to Apply for Patient Assistance Programs:**
1. Ask your doctor or pharmacist about programs for your specific medicine
2. Visit NeedyMeds.org to search by medicine name
3. Visit the drug company's website for their assistance program
4. Fill out the application (usually needs income information and a doctor's signature)
5. Wait for approval (usually 2-4 weeks)
6. Receive your medicine

**Help with Insulin:**

- Insulin can be very expensive - some types cost over $300 per vial
- New laws cap insulin copays at $35 per month for many insurance plans
- Walmart ReliOn insulin: available over the counter for about $25 per vial
- Manufacturer programs:
  - Lilly Insulin Value Program: $35 per month for Lilly insulins
  - Novo Nordisk PAP: free insulin for qualifying patients
  - Sanofi Patient Connection: free insulin for qualifying patients
- GetInsulin.org helps connect you to programs

**Hospital and Clinic Pharmacies:**

- Community health centers (FQHCs) often have pharmacies with lower prices
- They use a special program called 340B that gets them lower prices on medicines
- These savings are often passed on to you
- Ask if your clinic has an on-site pharmacy

**State Programs:**

- Many states have programs to help pay for medicines
- Especially for seniors and people with disabilities
- Some states offer programs even if you have Medicare
- Visit Medicare.gov or call 1-800-MEDICARE to learn about Extra Help for Part D

**Tips to Save Money on Medicines:**

1. **Always ask about generics** - they work the same and cost much less
2. **Compare prices** - use GoodRx or call several pharmacies to compare
3. **Ask about 90-day supplies** - often cheaper per pill than 30-day supplies
4. **Use mail-order pharmacy** - can save money on maintenance medicines
5. **Split pills** - your doctor may prescribe a higher dose to split (only with doctor approval!)
6. **Never skip doses** to save money - talk to your doctor about cheaper options first

**Important Warning:**
Never buy medicines from unknown online pharmacies. They may be fake, contaminated, or dangerous. Only use pharmacies licensed in the United States.`,
      keyTerms: [
        { term: 'generic medicine', definition: 'A medicine that has the same active ingredient as the brand-name version but costs much less' },
        { term: 'patient assistance program (PAP)', definition: 'A program from drug companies that provides free or low-cost medicines to people who cannot afford them' },
        { term: 'GoodRx', definition: 'A free app and website that helps you find the lowest prices on prescriptions at pharmacies near you' },
        { term: '$4 generics', definition: 'Programs at many pharmacies that sell common generic medicines for just $4 for a 30-day supply' },
        { term: 'insulin', definition: 'A medicine that people with diabetes need to control their blood sugar' },
        { term: '340B', definition: 'A government program that helps certain clinics buy medicines at a lower price so they can charge patients less' },
      ],
      analogies: [
        'Generic medicines are like store-brand cereal - the ingredients and nutrition are the same as the name brand, but the price is much lower.',
        'GoodRx works like a coupon clipper for prescriptions - it finds the best deal at pharmacies near you so you do not have to call around.',
        'Patient assistance programs are like scholarships for medicine - the drug companies help pay for your medication if you qualify based on your income.',
      ],
      examples: [
        'Maria takes metformin for diabetes. Instead of paying $45 at her regular pharmacy, she uses the $4 generic program at Walmart and pays only $4 for a month\'s supply.',
        'John needs a brand-name medicine that costs $500 per month. He applies for the manufacturer\'s patient assistance program and receives the medicine for free.',
        'Sarah checks GoodRx before filling her prescription and finds that the same medicine costs $15 at one pharmacy and $85 at another just two miles away.',
        'Mr. Garcia needs insulin that costs $300 per vial. Through the Lilly Insulin Value Program, he gets his monthly insulin for $35 total.',
      ],
      patientCounselingPoints: [
        'Always ask your doctor if there is a generic version of your medicine that costs less',
        'Check GoodRx or similar apps before every prescription fill - prices change frequently',
        'If you cannot afford a medicine, tell your doctor - they can often find alternatives or help you apply for assistance',
        'Community health center pharmacies often have the lowest prices thanks to the 340B program',
        'If you take insulin, ask about the $35 copay cap and manufacturer assistance programs',
        'Never stop taking medicine because of cost without talking to your doctor first - there are almost always options to help',
      ],
    },
    2: {
      level: 2,
      summary: 'Multiple pathways exist to reduce prescription medication costs, including generic substitution, $4 generic programs, prescription discount cards, manufacturer patient assistance programs, the 340B Drug Pricing Program, state pharmaceutical assistance programs, and federal insulin cost caps. Understanding these options enables informed decision-making about medication affordability.',
      explanation: `## Strategies for Affordable Medications

### Generic Medications

**FDA Approval Process:**
- Generic drugs must prove bioequivalence to the brand-name drug
- Same active ingredient, dosage form, strength, and route of administration
- FDA requires same safety and efficacy standards
- May differ in inactive ingredients (fillers, binders, colors)
- Average savings: 80-85% less than brand-name equivalents

**When Generics Are Available:**
- After brand-name drug patent expires (typically 7-12 years after approval)
- After FDA-granted exclusivity periods end
- Multiple generic manufacturers may compete, further lowering prices
- "Authorized generics" are made by the brand manufacturer and marketed under generic name

**Therapeutic Alternatives:**
- Different drug in the same class that treats the same condition
- Example: If atorvastatin doesn't work well, rosuvastatin or simvastatin may be alternatives
- May not be bioequivalent but are therapeutically equivalent
- Switching requires doctor's prescription
- Can be much cheaper if one drug is generic and another is still brand-only

### $4 Generic Programs

**How They Work:**
- Major pharmacy chains offer select generic drugs at $4/30 days or $10/90 days
- List of available medications varies by store
- No insurance required - cash price program
- Some programs require enrollment (free)
- Typically covers 300-500+ generic medications

**Common Medications on $4 Lists:**

| Category | Example Medications |
|----------|-------------------|
| Diabetes | Metformin, glipizide, glyburide |
| Blood pressure | Lisinopril, amlodipine, losartan, hydrochlorothiazide |
| Cholesterol | Atorvastatin, simvastatin, pravastatin |
| Antibiotics | Amoxicillin, azithromycin, ciprofloxacin, doxycycline |
| Mental health | Fluoxetine, sertraline, citalopram, buspirone |
| Pain/inflammation | Ibuprofen, naproxen, meloxicam |
| Thyroid | Levothyroxine |
| Asthma/COPD | Albuterol (nebulizer solution) |

**Major Participating Pharmacies:**
- Walmart ($4/$10 program)
- Kroger/affiliated stores
- Costco (no membership needed for pharmacy)
- Publix (free antibiotics and select medications)
- Meijer (free antibiotics, metformin, prenatal vitamins)

### Prescription Discount Programs

**GoodRx:**
- Aggregates prices from participating pharmacies
- Provides free coupons/discount codes
- GoodRx Gold subscription ($9.99/month) offers deeper discounts
- Accepted at 70,000+ pharmacies nationwide
- Average savings: 50-80% on most prescriptions
- Privacy note: GoodRx shares de-identified data with advertisers (FTC action 2023)

**Cost Plus Drugs (Mark Cuban):**
- Online pharmacy model: drug cost + 15% margin + $5 pharmacist fee + $5 shipping
- Transparent pricing model
- Growing formulary of generic medications
- No insurance needed
- Mail-order delivery
- Significant savings on many medications

**Amazon Pharmacy:**
- Prime members: discounts on generic and brand-name drugs
- RxPass: $5/month for unlimited generic medications (Prime members)
- Price comparison tool
- Free delivery for Prime members
- Integrates with insurance or offers cash prices

**SingleCare:**
- Free prescription savings card
- Accepted at 35,000+ pharmacies
- Some savings may exceed GoodRx for specific drugs
- No personal information required

### Patient Assistance Programs (PAPs)

**How PAPs Work:**
- Pharmaceutical manufacturers offer free or deeply discounted medications
- Each manufacturer has its own program with different requirements
- Generally available to uninsured or underinsured patients
- Income eligibility: typically below 200-400% FPL (varies by program)
- Medications provided at no cost or very low copay

**Application Process:**
1. Identify the manufacturer of your medication
2. Visit manufacturer website or use NeedyMeds/RxAssist to find program
3. Complete application form
4. Provider co-signature usually required
5. Submit proof of income and insurance status
6. Approval timeline: 2-6 weeks typically
7. Medications delivered to provider office, pharmacy, or patient home
8. Renewal required (annually or semi-annually)

**Major PAP Resources:**

| Resource | What It Does | Website |
|----------|-------------|---------|
| NeedyMeds | Database of 5,000+ PAPs and assistance programs | needymeds.org |
| RxAssist | Comprehensive database of patient assistance programs | rxassist.org |
| Medicine Assistance Tool (MAT) | PhRMA-sponsored search tool | medicineassistancetool.org |
| BenefitsCheckUp | NCOA tool for seniors finding assistance | benefitscheckup.org |
| Patient Advocate Foundation | Copay assistance and case management | patientadvocate.org |

### Insulin Affordability Programs

**Federal Insulin Provisions (Inflation Reduction Act, 2022):**
- $35/month copay cap for insulin under Medicare Part D (effective 2023)
- $35/month copay cap for insulin under Medicare Part B
- Applies to all insulin products covered by Medicare
- Private insurance caps vary by state

**Manufacturer Programs:**

| Manufacturer | Program | Savings |
|-------------|---------|---------|
| Eli Lilly | Insulin Value Program | $35/month per insulin (insured and uninsured) |
| Novo Nordisk | Patient Assistance Program | Free insulin for qualifying uninsured patients |
| Novo Nordisk | Immediate Supply | Free 90-day supply for patients in crisis |
| Sanofi | Insulins VALYOU Savings | $35/month for uninsured patients |
| Sanofi | Patient Connection | Free insulin for qualifying patients |

**Over-the-Counter Options:**
- Walmart ReliOn insulin (Novo Nordisk manufactured): ~$25/vial
- Available without prescription in most states
- Includes NPH and Regular insulin
- NOT equivalent to modern rapid-acting or long-acting analogs
- Should only be used under medical supervision
- Appropriate for some patients but not all diabetes management plans

**Biosimilar Insulin:**
- Biosimilar versions of insulin products entering market
- Semglee (biosimilar Lantus): available as interchangeable biosimilar
- Additional biosimilars expected
- May reduce costs through market competition

### 340B Drug Pricing Program

**Patient Impact:**
- FQHCs and other 340B entities purchase drugs at steep discounts
- Savings may be passed directly to patients through:
  - Lower copays and cash prices
  - Free medications for qualifying patients
  - Expanded pharmacy services
- Contract pharmacies may also offer 340B pricing

### State Pharmaceutical Assistance Programs (SPAPs)

**Overview:**
- Many states operate programs to help residents afford medications
- Eligibility, benefits, and structure vary widely by state
- Some supplement Medicare Part D coverage
- Some cover specific conditions or populations
- Medicare.gov maintains a list of SPAPs by state

**Examples:**
- New York: EPIC (Elderly Pharmaceutical Insurance Coverage)
- Pennsylvania: PACE/PACENET (older adults)
- New Jersey: Pharmaceutical Assistance to the Aged and Disabled (PAAD)
- Connecticut: ConnPACE
- Various states with programs for specific conditions (HIV, cancer)

### Medicare Extra Help (Low-Income Subsidy)

**What It Provides:**
- Reduced Medicare Part D premiums
- Reduced or eliminated deductibles
- Reduced copays (as low as $0-$4.50 for generics)
- No coverage gap (donut hole)

**Eligibility:**
- Income below 150% FPL
- Limited resources (savings, investments)
- Automatically eligible if: receiving Medicaid, SSI, or Medicare Savings Program

### Additional Cost-Saving Strategies

**Pill Splitting:**
- Some medications can be prescribed at double the dose and split
- Saves approximately 50% on cost
- Only appropriate for certain medications (scored tablets)
- Never split capsules, extended-release, or enteric-coated medications
- Always discuss with your doctor and pharmacist first

**Mail-Order Pharmacy:**
- 90-day supplies often cheaper than 3 x 30-day supplies
- Convenient home delivery
- Insurance plans often have preferred mail-order pharmacy
- Auto-refill programs reduce missed doses

**Manufacturer Copay Cards:**
- For insured patients with high copays on brand-name drugs
- Reduce copay to $0-$25 for eligible patients
- Cannot be used with Medicare or Medicaid (federal anti-kickback statute)
- May reset annually
- Not available for all medications`,
      keyTerms: [
        { term: 'bioequivalence', definition: 'FDA standard requiring generic drugs to perform the same as the brand-name version in the body' },
        { term: 'patient assistance program (PAP)', definition: 'Manufacturer-sponsored program providing free or discounted medications to eligible patients based on income and insurance status' },
        { term: 'biosimilar', definition: 'A biologic medication that is highly similar to an already approved biologic drug, with no clinically meaningful differences' },
        { term: 'formulary', definition: 'A list of prescription drugs covered by an insurance plan, organized by tier with different copay levels' },
        { term: 'Extra Help (LIS)', definition: 'Medicare program that helps people with limited income and resources pay for Part D prescription drug costs' },
        { term: 'SPAP', definition: 'State Pharmaceutical Assistance Program - state-run programs that help residents pay for prescription medications' },
      ],
      analogies: [
        'A formulary is like a restaurant menu - your insurance plan covers the items on the menu, and some items (preferred generics) are cheaper than others (specialty drugs).',
        'Biosimilars are like generic versions of biologic drugs - they are not identical copies but are close enough to work the same way in your body.',
      ],
      patientCounselingPoints: [
        'Always compare prices across pharmacies using GoodRx or similar tools - the same drug can vary by hundreds of dollars between pharmacies',
        'Patient assistance programs take time to process - apply early and ask your doctor for samples to bridge the gap',
        'If you take insulin under Medicare, the $35 monthly cap is automatic - you do not need to apply',
        'Some $4 generic programs also cover 90-day supplies for $10, which is more convenient for maintenance medications',
        'If a discount card price is lower than your insurance copay, ask the pharmacist to run it as a cash price instead',
        'Medicare Extra Help can save thousands of dollars annually on Part D costs - apply through Social Security Administration or Medicare.gov',
      ],
    },
    3: {
      level: 3,
      summary: 'Prescription affordability involves a complex ecosystem of manufacturer patient assistance programs, federal programs (340B, Medicare Extra Help), state pharmaceutical assistance programs, generic substitution strategies, discount aggregator platforms, insulin-specific legislation, and evolving biosimilar competition. Effective medication cost management requires understanding formulary design, therapeutic alternatives, and the regulatory frameworks governing drug pricing and assistance programs.',
      explanation: `## Prescription Assistance: Systems and Regulatory Framework

### Drug Pricing Fundamentals

**Pricing Terminology:**

| Term | Definition | Who Sees This Price? |
|------|-----------|---------------------|
| WAC (Wholesale Acquisition Cost) | Manufacturer list price to wholesalers | Hospitals, pharmacies (before discounts) |
| AWP (Average Wholesale Price) | Benchmark for reimbursement (~20% above WAC) | Insurance companies, PBMs |
| AMP (Average Manufacturer Price) | Average price to retail pharmacies | Medicaid rebate calculations |
| ASP (Average Sales Price) | Average price including discounts/rebates | Medicare Part B drug reimbursement |
| MAC (Maximum Allowable Cost) | PBM-set ceiling for generic reimbursement | Pharmacies (reimbursement cap) |
| 340B Ceiling Price | AMP minus URA | 340B covered entities |
| Best Price | Lowest price to any commercial customer | Medicaid rebate calculation floor |

**Pricing Pipeline:**
- Manufacturer sets WAC
- Wholesaler purchases at WAC (minus discounts)
- Pharmacy purchases from wholesaler
- Insurance/PBM reimburses pharmacy based on contracted rate
- Patient pays copay/coinsurance
- Manufacturer pays rebates to PBM (passed partially to plan)
- Net price after rebates significantly lower than list price for many drugs

### Generic Drug Economics

**Patent and Exclusivity Landscape:**
- New Chemical Entity (NCE): 5 years data exclusivity
- Patent term: 20 years from filing (can extend with Patent Term Restoration)
- Orphan drug exclusivity: 7 years
- Pediatric exclusivity: additional 6 months
- 180-day first-to-file generic exclusivity (Paragraph IV challenge)
- Orange Book listings and patent certification requirements

**Authorized Generics:**
- Brand manufacturer markets own product as generic
- Can launch during 180-day exclusivity period
- Erodes first-to-file generic's market share
- Controversial practice: reduces incentive for generic challenges

**Complex Generics:**
- Locally-acting drugs (inhalers, topicals, ophthalmics)
- Require additional bioequivalence demonstrations
- Higher development costs and barriers to entry
- FDA Complex Generic Drug Product Development program

**Generic Utilization Rates:**
- US generic dispensing rate: approximately 90% of prescriptions
- Generic share of spending: approximately 18% of total drug spending
- Significant per-prescription savings but brand drugs drive spending
- Pharmacy benefit designs incentivize generic use (lower copay tiers)

### Patient Assistance Programs: Detailed Analysis

**Program Types:**

| Type | Funding Source | Eligibility | Mechanism |
|------|--------------|-------------|-----------|
| Manufacturer PAP | Drug company | Income-based, uninsured | Free drug supply |
| Copay assistance | Drug company | Commercially insured | Copay card/voucher |
| Foundation assistance | Independent nonprofit | Income-based, any insurance | Copay/premium support |
| Government programs | Federal/state | Income/program specific | Direct benefit |

**Manufacturer PAP Landscape:**
- >300 pharmaceutical manufacturers offer PAPs
- NeedyMeds database: 5,000+ individual programs
- Income thresholds: typically 200-500% FPL
- Enrollment: 10-14 million patients annually (estimate)
- Total value: billions in free medications annually
- Programs vary: some straightforward, some complex multi-step processes

**Independent Copay Assistance Foundations:**
- Patient Access Network (PAN) Foundation
- HealthWell Foundation
- Patient Advocate Foundation
- Chronic Disease Fund
- Disease-specific foundations (NKF, ACS, etc.)
- Funded by manufacturers but operate independently
- Can assist Medicare patients (unlike copay cards)
- Subject to OIG guidance on bona fide independent charity requirements

**Anti-Kickback Statute Implications:**
- Manufacturer copay assistance to Medicare/Medicaid patients generally prohibited
- Considered inducement to select covered drug
- Independent charitable foundations permitted under OIG advisory opinions
- Requirements: financial independence, broad disease-category funding, no manufacturer influence over individual patients
- FTC and OIG scrutiny increasing

### 340B Program: Medication Access

**Covered Entity Drug Acquisition:**
- 340B ceiling price: AMP minus URA
  - Branded drugs: Greater of 23.1% x AMP or AMP minus Best Price
  - Generics/OTC: 13% x AMP
  - Additional penny pricing for excessive price increases (Medicaid CPI-U rebate)
- Actual savings vary by drug: 25-50% typical, up to 80-90% for some branded drugs

**Patient Benefit Mechanisms:**
- Direct: Reduced patient copays and cash prices at entity pharmacy
- Indirect: 340B savings fund expanded services, free medication programs
- Contract pharmacy: 340B pricing available at contracted retail locations
- Variation: Some entities pass full savings, others retain for operations

**340B and Insurance Interaction:**
- Insured patients: 340B entity may reduce copay beyond insurance benefit
- Uninsured patients: 340B cash price significantly below retail
- Medicaid patients: Duplicate discount prohibition applies
- Medicare Part B: 340B hospitals receive reduced ASP+6% reimbursement (sequestration adjusted)
- Medicare Part D: 340B covered entities may dispense at 340B acquisition cost

### Insulin-Specific Policy Landscape

**Inflation Reduction Act (IRA) Provisions:**
- Section 11401: $35/month insulin copay cap under Medicare Part D (effective 1/1/2023)
- Section 11402: Insulin covered in Part D coverage gap at discounted price
- Section 11407: Medicare Part B insulin coinsurance eliminated
- Applies to all covered insulin products (pens, vials, biosimilars)

**State Insulin Copay Cap Laws:**
- Over 20 states have enacted insulin copay cap legislation
- Cap amounts vary: $25-$100/month depending on state
- Applicability varies: some states cover all insurance types, some only state-regulated plans
- Emergency supply laws: many states require pharmacies to dispense short-term insulin supply in emergencies

**Biosimilar Insulin Competition:**
- Semglee (insulin glargine-yfgn): first interchangeable insulin biosimilar
- Rezvoglar (insulin glargine-aglr): biosimilar to Lantus
- Insulin lispro-aabc (Lyumjev), insulin aspart biosimilars in development
- CMS and FDA policies promoting biosimilar adoption
- Physician and patient education critical for biosimilar uptake
- Interchangeability designation allows pharmacy-level substitution

### Medicare Part D: Structural Changes

**Inflation Reduction Act Redesign (phased implementation):**
- 2024: $35 insulin copay cap, vaccine cost sharing eliminated
- 2025: $2,000 annual out-of-pocket cap, Medicare Drug Price Negotiation Program begins
- Drug price negotiation: CMS negotiates prices for select high-cost Part D drugs
- First 10 drugs selected for negotiation (2026 effective prices)
- Manufacturer inflation rebates: penalties for price increases above CPI-U

**Extra Help/Low-Income Subsidy:**
- Full subsidy: income <135% FPL and resources below threshold
- Partial subsidy: income 135-150% FPL and resources below threshold
- 2024 expansion: Full subsidy threshold increased to 150% FPL
- Benefits: zero/low copays, no deductible, no coverage gap

### Specialty Drug Affordability

**Specialty Drug Challenges:**
- Average annual cost: $84,000+ (2023)
- Often no generic/biosimilar alternative
- Complex molecules (biologics, gene therapies, cell therapies)
- Specialty pharmacy distribution requirements
- Prior authorization and step therapy common
- Patient cost-sharing can be thousands per year even with insurance

**Specialty Assistance Programs:**
- Manufacturer PAPs often robust for specialty drugs
- Specialty pharmacy copay assistance programs
- Foundation copay assistance
- Accumulators and maximizers: some plans exclude copay assistance from deductible/OOP calculations
- State laws addressing accumulator adjustment programs

### Pharmacy Benefit Design Impact

**Formulary Structure:**

| Tier | Drug Type | Typical Copay | Patient Impact |
|------|----------|---------------|----------------|
| 1 | Preferred generic | $0-$15 | Lowest cost |
| 2 | Non-preferred generic | $15-$30 | Low cost |
| 3 | Preferred brand | $30-$60 | Moderate cost |
| 4 | Non-preferred brand | $60-$100+ | High cost |
| 5 | Specialty | 20-33% coinsurance | Very high cost |

**Utilization Management:**
- Prior authorization: Require approval before dispensing
- Step therapy: Must try preferred drug first
- Quantity limits: Cap on units dispensed per fill
- Specialty pharmacy requirements: Must use designated pharmacy
- Impact on patient access and medication adherence`,
      keyTerms: [
        { term: 'WAC (Wholesale Acquisition Cost)', definition: 'The manufacturer\'s published list price to wholesalers, often used as a starting point for drug pricing calculations' },
        { term: 'AMP (Average Manufacturer Price)', definition: 'The average price paid to manufacturers by wholesalers for drugs distributed to retail pharmacies, used in Medicaid rebate and 340B calculations' },
        { term: 'accumulator adjustment', definition: 'Insurance plan policy where manufacturer copay assistance does not count toward deductible or out-of-pocket maximum' },
        { term: 'interchangeable biosimilar', definition: 'A biosimilar drug that FDA has determined can be substituted at the pharmacy level without prescriber intervention' },
        { term: 'Inflation Reduction Act (IRA)', definition: 'Federal law (2022) that includes Medicare drug price negotiation, $35 insulin cap, $2,000 OOP cap, and manufacturer inflation rebates' },
        { term: 'specialty drug', definition: 'High-cost medications, often biologics, used to treat complex or chronic conditions, typically requiring special handling or administration' },
      ],
      clinicalNotes: 'Medication cost is the primary driver of non-adherence. Clinicians should routinely assess affordability at each visit and proactively offer alternatives. Prescribing formulary-preferred generics, utilizing 340B pharmacies, initiating PAP applications, and leveraging discount programs can dramatically improve adherence and clinical outcomes. Document medication cost barriers in the medical record to support financial assistance applications.',
      patientCounselingPoints: [
        'Generic drugs are required by the FDA to be bioequivalent to brand-name drugs - they are safe and effective alternatives',
        'The Inflation Reduction Act now caps insulin at $35/month for Medicare patients and introduces a $2,000 annual out-of-pocket maximum for Part D',
        'Check if your pharmacy participates in the 340B program - it can significantly reduce medication costs',
        'Patient assistance programs from manufacturers can provide expensive medications at no cost - ask your provider to help you apply',
        'If your insurance plan uses an accumulator adjustment, manufacturer copay cards may not reduce your out-of-pocket spending - ask your plan',
        'Compare cash prices using discount cards against your insurance copay - sometimes the cash price is lower',
      ],
    },
    4: {
      level: 4,
      summary: 'Prescription drug affordability in the U.S. is shaped by complex interactions between manufacturer pricing strategies, PBM formulary management, federal programs (340B, Medicare Part D LIS, IRA drug price negotiation), state-level interventions (copay caps, SPAPs), and the evolving biosimilar market. Policy analysis reveals persistent tensions between pharmaceutical innovation incentives, market competition, access to essential medications, and healthcare cost containment.',
      explanation: `## Prescription Assistance: Advanced Policy Analysis

### Drug Pricing Economics

**Pharmaceutical Supply Chain Value Flow:**
- Manufacturer sets WAC and negotiates with wholesalers, PBMs, GPOs
- Wholesaler adds margin (typically 1-5% of WAC) and distributes to pharmacies
- PBM negotiates formulary placement in exchange for manufacturer rebates
- Rebates: 20-50% of WAC for competitive therapeutic classes
- Net price (after rebates) significantly lower than list price
- Patient cost-sharing often based on list price, not net price
- Spread pricing: PBM reimburses pharmacy less than it charges plan sponsor

**Rebate Economy:**
- Total manufacturer rebates: ~$200 billion annually (2022 estimate)
- Flow: Manufacturer to PBM to health plan (partial pass-through)
- Impact: Creates incentive for higher list prices with higher rebates
- PBM retained share: variable and controversial
- Point-of-sale rebate proposals: redirect savings to patient at pharmacy counter
- IRA negotiated prices will be net of rebates (maximum fair price)

**PBM Market Concentration:**
- Three PBMs control ~80% of market: CVS Caremark, Express Scripts (Cigna), OptumRx (UnitedHealth)
- Vertical integration: PBM + insurer + pharmacy chain + specialty pharmacy
- Competition concerns: FTC investigation and litigation
- Transparency: limited visibility into PBM contract terms and rebate pass-through

### Inflation Reduction Act: Drug Pricing Provisions

**Medicare Drug Price Negotiation:**
- CMS authority to negotiate prices for select high-cost Part D and Part B drugs
- Selection criteria: single-source drugs, high Medicare spending, no generic/biosimilar competition
- Negotiation process:
  1. CMS identifies eligible drugs
  2. CMS publishes selected drugs
  3. Manufacturer provides cost and revenue data
  4. CMS makes initial offer (based on statutory ceiling)
  5. Negotiation period (up to 3 counteroffers)
  6. Maximum Fair Price (MFP) established
  7. MFP effective 2 years after selection
- Ceiling prices: Based on years since FDA approval
  - Small molecule (9-11 years post-approval): 75% of non-FAMP
  - Small molecule (12-15 years): 65%
  - Small molecule (16+ years): 40%
  - Biological (13-15 years): 65%
  - Biological (16+ years): 40%
- Excise tax for non-compliance (up to 1900% of daily revenue)
- Phase-in: 10 drugs for 2026, 15 drugs for 2027, 15 drugs for 2028, 20 drugs for 2029+

**Industry Legal Challenges:**
- Multiple lawsuits challenging IRA negotiation provisions
- Constitutional arguments: takings, due process, compelled speech, excessive fines
- Federal court decisions: mixed results, generally upholding CMS authority
- Outcome will shape future drug pricing policy

**$2,000 Out-of-Pocket Cap (Effective 2025):**
- Restructured Part D benefit design:
  - Deductible phase: up to $590 (2025)
  - Initial coverage: 25% coinsurance
  - No more coverage gap (donut hole eliminated)
  - $2,000 OOP cap, then catastrophic coverage
- Manufacturer discount: 10% in initial coverage, 20% in catastrophic phase
- Federal reinsurance: 20% in catastrophic phase
- Plan liability: 65% in initial coverage, 40% in catastrophic phase, 60% above catastrophic
- Smoothing option: patients can spread OOP costs over 12 months

**Manufacturer Inflation Rebates:**
- Applies to Medicare Part D and Part B drugs
- If price increases exceed CPI-U inflation rate, manufacturer pays rebate to CMS
- Rebate = (units x (current price - inflation-adjusted baseline price))
- Creates direct constraint on annual price increases
- Does not apply to new drugs or generic/biosimilar market entries

### 340B Program: Policy Complexity

**Program Economics:**
- Total 340B program purchases: estimated $53+ billion (2022)
- Covered entity savings: difference between 340B price and reimbursement received
- Generates margin that supports safety-net operations
- Hospital 340B savings increasingly scrutinized
- FQHC 340B savings critical for pharmacy operations and patient assistance

**Contract Pharmacy Dispute:**
- Background: 2010 HRSA guidance expanded contract pharmacy to unlimited arrangements
- 2020-present: Major manufacturers restrict contract pharmacy 340B sales
  - Require claims-level data submission
  - Limit to single contract pharmacy per entity
  - Some refuse to honor 340B pricing at contract pharmacies entirely
- HRSA position: Manufacturers must honor 340B pricing at all contract pharmacies
- Litigation: Multiple federal circuit decisions (split among circuits)
- ADR process: HRSA administrative dispute resolution
- Impact: Disproportionate effect on FQHCs and rural entities without in-house pharmacies

**340B Integrity and Reform Proposals:**
- HRSA proposed omnibus rule (withdrawn/reissued)
- Congressional proposals:
  - SUSTAIN 340B Act: transparency requirements
  - 340B PATIENTS Act: patient definition clarity
  - 340B ACCESS Act: protecting contract pharmacy access
- Key reform areas:
  - Definition of "patient"
  - Contract pharmacy oversight
  - Hospital eligibility criteria (charity care thresholds)
  - Reporting requirements for 340B savings
  - Duplicate discount prevention

### State-Level Prescription Drug Policy

**State Drug Pricing Laws:**
- Transparency laws: manufacturer reporting of price increases, costs, profits
- Affordability boards: state-level drug cost review and spending caps
  - Colorado Prescription Drug Affordability Board (first in US)
  - Maryland, Oregon, Washington, others following
  - Upper payment limit (UPL) setting authority
- PBM regulation: spread pricing bans, rebate pass-through requirements, MAC appeal rights
- Importation programs: state-level Canadian drug importation (FDA-approved pathway, Florida first)

**State Copay Cap Laws:**
- Insulin: 20+ states with copay caps ($25-$100/month)
- Diabetes supplies: some states include glucose monitors, test strips
- Asthma inhalers: emerging copay cap legislation
- EpiPen: some states mandate coverage and cap costs
- Scope limitations: state caps only apply to state-regulated plans (not ERISA self-funded)

### Specialty Drug Affordability Crisis

**Cost Trajectory:**
- Specialty drugs: ~2% of prescriptions, ~55% of drug spending
- Gene therapies: single-dose pricing $500,000-$3.5 million (Hemgenix, Zolgensma, Casgevy)
- Cell therapies: $300,000-$500,000 per course (CAR-T)
- Annual biologic costs: $30,000-$100,000+ for chronic conditions

**Access Mechanisms:**
- REMS (Risk Evaluation and Mitigation Strategy): restricted distribution
- Specialty pharmacy networks: limited dispensing channels
- Buy-and-bill: provider purchases and administers (Part B)
- Copay assistance: manufacturer and foundation programs
- Outcomes-based contracts: performance-based pricing arrangements

**Gene Therapy Financing:**
- Novel payment models needed for curative therapies with high upfront costs
- Outcomes-based payment: spread cost over time based on therapeutic success
- Installment payments: amortize cost over multiple years
- Reinsurance mechanisms: federal or private reinsurance for catastrophic drug costs
- CMS demonstration projects exploring novel payment approaches

### Medication Adherence and Cost

**Economic Evidence:**
- Medication non-adherence costs US healthcare system $100-$300 billion annually
- Higher cost-sharing associated with reduced adherence
- Value-Based Insurance Design (VBID): reducing cost-sharing for high-value medications improves adherence
- RAND Corporation findings: lower copays for chronic disease medications improve adherence and reduce ER visits and hospitalizations

**Interventions That Work:**
- Copay reduction/elimination for essential medications
- Generic incentive programs
- Medication therapy management (MTM)
- Integrated pharmacy-clinic models
- Automatic refill programs
- Text/app reminders
- 90-day fills vs. 30-day
- Health literacy-appropriate counseling`,
      keyTerms: [
        { term: 'MFP (Maximum Fair Price)', definition: 'The negotiated price under the IRA Medicare Drug Price Negotiation Program, serving as the ceiling for Medicare spending on selected drugs' },
        { term: 'non-FAMP (non-Federal Average Manufacturer Price)', definition: 'The weighted average price of a drug sold to non-federal purchasers, used as the baseline for IRA negotiation ceiling prices' },
        { term: 'spread pricing', definition: 'PBM practice of reimbursing pharmacies less than the amount charged to the plan sponsor, retaining the difference as profit' },
        { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy - FDA-required safety program for certain medications that may restrict distribution and require monitoring' },
        { term: 'UPL (Upper Payment Limit)', definition: 'A maximum price for prescription drugs set by state affordability boards, capping what purchasers in the state pay' },
        { term: 'outcomes-based contract', definition: 'A pharmaceutical purchasing arrangement where pricing or rebates are tied to real-world clinical outcomes of the drug' },
      ],
      clinicalNotes: `Advanced considerations for prescribing clinicians and pharmacy leadership:

1. **Formulary awareness**: Develop familiarity with your patients' most common formularies. Prescribing formulary-preferred agents avoids prior authorization delays and reduces patient cost.

2. **340B stewardship**: At 340B entities, prescribing decisions affect program revenue. While clinical judgment must drive prescribing, choosing 340B-eligible outpatient drugs when clinically equivalent supports the entity's mission.

3. **Biosimilar prescribing**: Actively prescribe interchangeable biosimilars when available. Patient education about biosimilar safety and efficacy is essential for uptake. Pharmacy-level substitution for interchangeable biosimilars can occur without prescriber intervention.

4. **PAP workflow integration**: Build patient assistance program screening and application into clinical workflows. Dedicated staff (financial counselors, patient navigators) improve PAP enrollment rates.

5. **IRA implications**: Monitor which drugs are selected for Medicare negotiation and how Maximum Fair Prices affect treatment algorithms. Manufacturer responses (pipeline shifts, pricing strategy changes) will evolve over time.

6. **Cost transparency**: Use available tools (EHR-integrated real-time benefit check, GoodRx integration) to provide patients with cost information at the point of prescribing.`,
      patientCounselingPoints: [
        'The IRA fundamentally changes Medicare Part D - a $2,000 annual out-of-pocket cap takes effect in 2025',
        'Manufacturer copay cards cannot be used by Medicare or Medicaid patients - but independent copay assistance foundations may help',
        'If your plan uses an accumulator adjustment, manufacturer assistance may not count toward your deductible or OOP max',
        'Biosimilar insulins and biologics offer the same clinical benefit at potentially lower cost - ask your provider about switching',
        'State prescription drug affordability boards are emerging as a new tool for cost control - advocacy can influence which drugs are reviewed',
        'For specialty drugs costing thousands per month, exhaust all assistance options: manufacturer PAP, copay foundations, 340B, state programs',
      ],
    },
    5: {
      level: 5,
      summary: 'Prescription drug affordability sits at the nexus of pharmaceutical pricing economics, PBM intermediation, federal regulatory intervention (IRA drug price negotiation, 340B, Medicaid Drug Rebate Program), insurance benefit design, state-level affordability initiatives, and clinical practice patterns. Expert analysis reveals structural misalignments between innovation incentives, competitive market dynamics, cost containment policy, and equitable patient access, with the IRA representing the most significant federal intervention in drug pricing since the Medicaid Drug Rebate Act of 1990.',
      explanation: `## Prescription Assistance: Expert-Level Analysis

### Pharmaceutical Economics: Structural Analysis

**Innovation-Access Tension:**
- Pharmaceutical R&D costs: estimated $1-2.6 billion per approved drug (Tufts CSDD, disputed)
- Patent protection enables monopoly pricing to recoup investment
- Counter-argument: much foundational research publicly funded (NIH)
- International reference pricing: US pays highest prices globally
- US prices subsidize global pharmaceutical innovation (or excess profits - perspective-dependent)

**Market Failure Analysis:**
- Prescription drugs exhibit classic market failure characteristics:
  - Information asymmetry (patients cannot evaluate drugs independently)
  - Principal-agent problem (physician prescribes, patient/insurer pays)
  - Moral hazard (insurance insulates from full cost)
  - Monopoly power (patent protection, regulatory barriers to entry)
  - Opaque pricing (list price vs. net price disconnect)
- Intervention rationale: Multiple market failures justify policy intervention

**PBM Economics:**
- Three-firm concentration: CVS Caremark, Express Scripts, OptumRx control ~80% of lives
- Vertical integration concerns:
  - CVS: pharmacy + PBM + insurer (Aetna) + primary care (Oak Street/Signify)
  - UnitedHealth: insurer + PBM (OptumRx) + provider (Optum Health)
  - Cigna: insurer + PBM (Express Scripts) + specialty pharmacy (Accredo)
- FTC investigation: focus on rebate negotiations, formulary design, pharmacy reimbursement
- Reform proposals: PBM fiduciary duty, rebate pass-through mandates, spread pricing prohibition

### IRA Drug Price Negotiation: Deep Analysis

**Selection Methodology:**
- Part D drugs eligible for negotiation: single-source, FDA-approved 7+ years (small molecule) or 11+ years (biologic), no generic/biosimilar competition, above Medicare spending thresholds
- First 10 drugs selected (for 2026 prices): Eliquis, Jardiance, Xarelto, Januvia, Farxiga, Entresto, Enbrel, Imbruvica, Stelara, NovoLog (as announced 2023)
- Estimated Medicare savings: $1.5 billion in first year (CBO projection)

**Negotiation Framework:**
- CMS must consider: manufacturer R&D costs, production costs, therapeutic alternatives, federal financial support, clinical benefit, market data
- Ceiling price based on non-FAMP and years since approval
- Manufacturer must provide proprietary cost/revenue data
- CMS initial offer cannot exceed ceiling
- Up to 3 rounds of negotiation
- If no agreement: excise tax up to 1900% of U.S. drug revenue (practically compulsory)

**Industry Response and Adaptation:**
- Pipeline shifts: potential impact on investment in drugs likely to face negotiation
- Pricing strategies: higher launch prices to maximize pre-negotiation revenue
- Lifecycle management: accelerated line extensions, reformulations
- Biologics vs. small molecules: longer exclusivity period for biologics may shift R&D investment
- Portfolio optimization: divest drugs nearing negotiation eligibility

**Econometric Modeling:**
- CBO estimates: $237 billion in federal savings over 10 years from IRA drug pricing provisions
- Industry estimates of innovation impact: 25-50 fewer drugs over next 20 years (PhRMA-cited studies)
- Independent analyses: more modest innovation impact, with most R&D driven by expected global revenue
- Key variables: elasticity of R&D investment to US revenue, global vs. domestic revenue share, therapeutic area profitability

### Biosimilar Market Dynamics

**Biosimilar Adoption Barriers:**
- Physician education and comfort level with biosimilar prescribing
- Patient switching anxiety (nocebo effect documented in studies)
- Manufacturer rebate walls: brand manufacturers offer high rebates to maintain formulary position
- Rebate trap: brand rebate may make net price lower than biosimilar, despite higher list price
- Patent litigation (patent thickets, evergreening)
- FDA interchangeability standard: rigorous but important for pharmacy-level substitution

**Biosimilar Competition and Pricing:**
- First biosimilar typically enters at 15-30% discount to reference product
- With additional competitors, discounts reach 40-80%
- Interchangeability designation accelerates uptake
- Humira biosimilar market (2023-present): 8+ biosimilars, significant price reductions
- Insulin biosimilars: emerging but impactful

**Policy Interventions for Biosimilar Uptake:**
- CMS shared savings incentives for Part B biosimilar use
- IRA provisions encouraging biosimilar adoption in Part D
- State substitution laws (most states allow pharmacy-level interchangeable biosimilar substitution)
- Provider education and clinical decision support

### 340B Program: Expert Analysis

**Structural Challenges:**
- Program designed for safety-net entities (1992) has grown beyond original intent
- Hospital participation growth: disproportionate share hospitals account for majority of 340B purchases
- Many 340B hospitals located in affluent areas, raising questions about target population reach
- Contract pharmacy growth: from ~6,000 arrangements (2010) to ~50,000+ (2022)
- Limited HRSA authority: statute provides limited regulatory tools

**Economic Research Findings:**
- GAO (2018): No comprehensive data on how 340B savings benefit patients
- OIG (2020): Contract pharmacy arrangements generate significant revenue for entities
- AJMC/Health Affairs studies: mixed evidence on association between 340B status and charity care provision
- 340B entities argue: Savings support overall mission, including uncompensated care, workforce, infrastructure
- Critics: Lack of transparency makes accountability impossible

**FQHC-Specific 340B Issues:**
- FQHCs rely on 340B for pharmacy program viability
- Contract pharmacy essential for FQHCs without in-house pharmacies
- Manufacturer restrictions disproportionately impact FQHCs
- HRSA enforcement actions on behalf of FQHCs (mixed judicial outcomes)
- Proposed exemptions for FQHCs from contract pharmacy restrictions

### Medicaid Drug Rebate Program Interaction

**MDRP Fundamentals:**
- Manufacturers must participate in MDRP to have drugs covered by Medicaid
- Statutory rebate: Greater of 23.1% x AMP (branded) or AMP minus Best Price
- Additional rebate for price increases above CPI-U inflation
- Generic rebate: 13% x AMP
- Significant savings for Medicaid programs ($50+ billion annually in rebates)

**340B/MDRP Duplicate Discount:**
- Statute prohibits both 340B discount and Medicaid rebate on same drug unit
- Identification challenge: determining at point of dispensing whether 340B or Medicaid rebate applies
- State approaches:
  - Carve-out: 340B drugs excluded from Medicaid managed care encounter
  - Carve-in: 340B drugs included in MCO capitation, entity provides claims data
- Compliance burden on covered entities, PBMs, and state Medicaid agencies
- CMS regulation: Covered entities must submit claims identifying 340B drugs

### Global Drug Pricing Policy Comparison

**International Reference Pricing Models:**
- HTA (Health Technology Assessment): UK (NICE), Canada (CADTH/pCODR), Australia (PBAC)
- Cost-effectiveness thresholds: ICER/$QALY calculations inform formulary decisions
- External reference pricing: Country prices referenced to basket of peer countries
- US unique: No systematic HTA-based coverage determination for Medicare

**ICER (Institute for Clinical and Economic Review):**
- US-based independent HTA organization
- Value assessments published for major drug launches and price increases
- Evidence-based price benchmarks increasingly cited by payers
- No binding authority but growing influence on formulary decisions
- Controversial: industry opposition, patient advocacy concerns about QALY-based rationing

### Future of Prescription Drug Policy

**Emerging Payment Models:**
- Subscription/Netflix models for high-cost drugs (Louisiana hepatitis C model)
- Outcomes-based contracts with outcomes tracking and rebates for non-response
- Indication-based pricing: different price for different therapeutic indications
- Gene therapy annuity models: spread payment over time with performance guarantees
- International procurement: multi-national purchasing collaboratives

**Technology-Enabled Affordability:**
- AI-driven formulary optimization
- Real-time benefit check at point of prescribing (NCPDP standard)
- Blockchain for supply chain transparency and rebate tracking
- Predictive analytics for patient adherence intervention
- Digital therapeutics as drug alternatives or complements

**Policy Trajectory:**
- IRA implementation and potential expansion (more drugs, lower ceilings, Part B extension)
- State affordability board proliferation
- PBM reform legislation (bipartisan momentum)
- 340B modernization
- International importation expansion
- Biosimilar uptake acceleration
- Potential universal drug coverage proposals`,
      keyTerms: [
        { term: 'QALY (Quality-Adjusted Life Year)', definition: 'A measure of health outcome that combines length and quality of life, used in cost-effectiveness analysis to assess the value of medical interventions' },
        { term: 'ICER', definition: 'Institute for Clinical and Economic Review - independent US-based organization conducting health technology assessments and publishing evidence-based drug price benchmarks' },
        { term: 'rebate wall', definition: 'Strategy where brand manufacturers offer large rebates to PBMs to maintain formulary position and block biosimilar/generic uptake despite higher list prices' },
        { term: 'patent thicket', definition: 'Strategy of filing multiple overlapping patents on a drug or biologic to extend market exclusivity and delay generic/biosimilar competition' },
        { term: 'Best Price', definition: 'The lowest price available from a manufacturer to any commercial customer, excluding certain government prices, used as a floor in Medicaid rebate calculations' },
        { term: 'CPI-U penalty', definition: 'Additional rebate under Medicaid Drug Rebate Program (and IRA inflation rebates) when manufacturer price increases exceed the consumer price index for all urban consumers' },
      ],
      clinicalNotes: `Expert clinical-policy interface considerations:

1. **IRA negotiation impact on formularies**: As Maximum Fair Prices take effect, formulary placement for negotiated drugs will shift. Monitor how plans adjust formulary tiering and utilization management for negotiated vs. non-negotiated alternatives.

2. **Biosimilar prescribing leadership**: Clinicians should lead biosimilar adoption by education, shared decision-making, and institutional protocol development. The evidence for biosimilar clinical equivalence is robust; overcoming the nocebo effect requires proactive patient communication.

3. **340B prescribing ethics**: At 340B entities, the intersection of clinical prescribing and institutional revenue creates potential conflicts. Establish clear prescribing guidelines that prioritize clinical evidence while acknowledging the role of 340B revenue in supporting safety-net operations.

4. **Real-time benefit check adoption**: Advocate for EHR integration of real-time benefit check (RTBC) tools that provide patient-specific cost information at the point of prescribing. This reduces prescription abandonment and improves adherence.

5. **Cost-effectiveness literacy**: Clinicians should develop familiarity with ICER assessments and comparative effectiveness evidence to make value-informed prescribing decisions. This is not rationing - it is evidence-based resource stewardship.

6. **Policy engagement**: Clinicians' voices are powerful in drug pricing policy debates. Participate in professional organization advocacy, provide public comment on CMS rulemaking, and share clinical perspectives on how drug costs affect patient outcomes.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'needymeds',
      type: 'website',
      title: 'NeedyMeds - Patient Assistance Programs Database',
      source: 'NeedyMeds, Inc.',
      url: 'https://www.needymeds.org/',
    },
    {
      id: 'cms-ira-drug-negotiation',
      type: 'website',
      title: 'Medicare Drug Price Negotiation Program',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/inflation-reduction-act-and-medicare/medicare-drug-price-negotiation',
    },
    {
      id: 'fda-generics',
      type: 'website',
      title: 'Generic Drugs: Questions and Answers',
      source: 'U.S. Food and Drug Administration',
      url: 'https://www.fda.gov/drugs/frequently-asked-questions-popular-topics/generic-drugs-questions-answers',
    },
    {
      id: 'kff-drug-costs',
      type: 'website',
      title: 'Key Facts About the Prescription Drug Provisions in the Inflation Reduction Act',
      source: 'Kaiser Family Foundation',
      url: 'https://www.kff.org/medicare/fact-sheet/key-facts-about-the-prescription-drug-provisions-in-the-inflation-reduction-act/',
    },
  ],

  crossReferences: [
    { targetId: 'topic-insurance-basics', targetType: 'topic', relationship: 'related', label: 'Health Insurance Basics' },
    { targetId: 'topic-free-low-cost-clinics', targetType: 'topic', relationship: 'related', label: 'Free and Low-Cost Clinics' },
    { targetId: 'topic-community-health-centers', targetType: 'topic', relationship: 'related', label: 'Community Health Centers (FQHCs)' },
  ],

  tags: {
    systems: ['healthcare-navigation'],
    topics: ['prescription drugs', 'medication costs', 'patient assistance', '340B', 'insulin affordability', 'generic drugs'],
    keywords: ['PAP', 'GoodRx', 'NeedyMeds', 'generic', 'biosimilar', 'formulary', 'IRA', '340B', 'copay assistance'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default prescriptionAssistanceContent;
