/**
 * Living Donation - Educational Content
 *
 * Education on living organ donation including eligibility, risks,
 * benefits, evaluation process, and paired exchange programs.
 */

import { EducationalContent } from '../types';

export const livingDonation: EducationalContent = {
  id: 'process-living-donation',
  type: 'process',
  name: 'Living Donation',
  alternateNames: ['Living Organ Donation', 'Living Donor Transplant', 'LDKT'],

  levels: {
    1: {
      level: 1,
      summary: 'Living donation is when a healthy person donates an organ or part of an organ to help someone who needs a transplant.',
      explanation: `Sometimes a healthy person can give one of their organs to someone who needs it. This is called living donation.

**What Organs Can Be Donated While Alive?**
- **Kidney**: We have two kidneys but can live healthy lives with just one
- **Part of the Liver**: The liver can grow back, so a piece can be shared
- **Part of a Lung**: In rare cases, part of a lung can be donated

**Who Can Be a Living Donor?**
- Adults who are healthy
- People who want to help without being pressured
- Usually family members or close friends, but sometimes strangers too

**Why Choose Living Donation?**
- The recipient does not have to wait as long for an organ
- The surgery can be planned at the best time
- The organ usually works better because it was healthy when donated

**Is It Safe?**
- Donors go through many tests to make sure they are healthy enough
- Like all surgeries, there are some risks
- Most donors recover well and live normal, healthy lives

**What Happens After Donation?**
- Donors need time to recover (a few weeks to a few months)
- Regular check-ups to make sure they stay healthy
- Many donors feel good knowing they helped save a life`,
      keyTerms: [
        { term: 'living donor', definition: 'A healthy person who gives an organ or part of an organ while alive' },
        { term: 'donation', definition: 'Giving something to help someone else without expecting anything in return' },
        { term: 'recovery', definition: 'The time it takes to heal after surgery' },
      ],
      analogies: [
        'Donating a kidney is like sharing half of your lunch - you still have enough to be full, and someone else who was hungry gets to eat too.',
      ],
      examples: [
        'A mom donated one of her kidneys to her daughter who had kidney failure, and now both are living healthy lives.',
      ],
    },
    2: {
      level: 2,
      summary: 'Living donation involves careful evaluation to ensure donor safety, provides advantages over deceased donation, and includes options like paired exchange when direct donation is not possible.',
      explanation: `**Types of Living Donation**

**Directed Donation**
- Donating to a specific person you know
- Usually family or close friends

**Non-Directed (Altruistic) Donation**
- Donating to a stranger in need
- Starts paired exchange chains

**Paired Exchange**
- When donor and recipient are not compatible
- Swap with another incompatible pair
- Allows more people to get transplants

**Organs That Can Be Donated**
| Organ | What Is Donated | Recovery Time |
|-------|-----------------|---------------|
| Kidney | One whole kidney | 4-6 weeks |
| Liver | Right or left lobe | 6-8 weeks |
| Lung | One lobe (rare) | 6-8 weeks |

**Advantages of Living Donation**
1. Shorter wait time for recipient
2. Better organ quality (healthy donor)
3. Surgery can be scheduled
4. Better long-term outcomes
5. Living donor kidney lasts longer than deceased donor kidney

**Donor Evaluation Process**
1. Blood type testing
2. Medical history review
3. Physical examination
4. Blood and urine tests
5. Imaging (CT scan of organ)
6. Psychological evaluation
7. Meeting with independent donor advocate

**Potential Risks**
- Surgical complications (bleeding, infection)
- Pain and recovery time
- Small long-term health risks
- Emotional challenges

**Donor Protections**
- Separate medical team from recipient
- Independent donor advocate
- Can stop the process at any time
- Follow-up care requirements`,
      keyTerms: [
        { term: 'paired exchange', definition: 'Swapping donors between two or more incompatible pairs to enable transplants' },
        { term: 'altruistic donor', definition: 'Someone who donates an organ to a stranger without expecting anything in return' },
        { term: 'donor advocate', definition: 'A person who ensures the donor understands risks and is not pressured' },
        { term: 'directed donation', definition: 'Donating specifically to someone you know' },
      ],
    },
    3: {
      level: 3,
      summary: 'Living donor transplantation requires comprehensive donor evaluation, informed consent processes, understanding of short and long-term risks, and may utilize paired kidney exchange programs to overcome biological incompatibilities.',
      explanation: `## Living Donor Evaluation

**Medical Evaluation Components**

**Compatibility Testing**
- ABO blood type compatibility
- HLA typing and crossmatch
- DSA (donor-specific antibody) assessment

**General Health Assessment**
- Complete metabolic panel
- CBC, coagulation studies
- Lipid panel, HbA1c
- Infectious disease screening (HIV, HBV, HCV, CMV, EBV)
- Urinalysis and 24-hour urine collection
- Chest X-ray, EKG

**Organ-Specific Testing**

Kidney Donors:
- GFR measurement (nuclear medicine or iothalamate clearance)
- CT angiogram of kidneys
- Assessment of renal anatomy (vessels, collecting system)

Liver Donors:
- Liver function tests
- CT/MRI volumetry
- Assessment of vascular anatomy
- Liver biopsy if indicated

**Psychosocial Evaluation**
- Motivation assessment
- Coercion screening
- Psychiatric history
- Social support assessment
- Financial impact evaluation

## Informed Consent

**UNOS Donor Requirements**
- Must be legally competent
- Willing to donate
- Free of coercion
- Medically and psychosocially suitable
- Fully informed of risks and benefits

**Key Disclosure Elements**
- Surgical risks and potential complications
- Short and long-term medical risks
- Psychological risks
- Financial considerations
- Alternative options for recipient
- Right to withdraw at any time

## Surgical Approaches

**Laparoscopic Donor Nephrectomy**
- Standard of care for kidney donation
- 3-4 small incisions
- Shorter recovery than open surgery
- Hand-assisted or pure laparoscopic

**Living Donor Hepatectomy**
- Right lobe (larger, for adult recipients)
- Left lateral segment (smaller, for pediatric recipients)
- Open surgery typically required
- Higher risk than nephrectomy

## Paired Kidney Exchange

**Types of Exchanges**
- 2-way swap: Two incompatible pairs trade donors
- 3-way or larger chains: Multiple pairs
- Non-directed donor chains: Altruistic donor initiates

**Matching Algorithms**
- Optimizes number of transplants
- Considers HLA matching, geographic distance
- National programs: UNOS, National Kidney Registry, APKD

**Desensitization vs. PKE**
- PKE preferred when compatible match available
- Desensitization for highly sensitized without PKE match
- Some centers combine approaches`,
      keyTerms: [
        { term: 'laparoscopic nephrectomy', definition: 'Minimally invasive surgical technique for kidney removal using small incisions' },
        { term: 'PKE', definition: 'Paired Kidney Exchange - program matching incompatible pairs for donor swaps' },
        { term: 'non-directed donor', definition: 'Altruistic donor who gives to anyone in need, not a specific person' },
        { term: 'GFR', definition: 'Glomerular Filtration Rate - measure of kidney function' },
      ],
      clinicalNotes: 'Living donor evaluation must be conducted by a team independent of the recipient team. The ILDA (independent living donor advocate) role is mandated by UNOS to protect donor interests.',
    },
    4: {
      level: 4,
      summary: 'Living donor outcomes research informs risk-benefit discussions, while advanced exchange programs and novel desensitization approaches expand transplant access for sensitized patients.',
      explanation: `## Long-Term Donor Outcomes

**Kidney Donor Outcomes**

Mortality:
- Perioperative mortality: 0.03% (3 in 10,000)
- Long-term mortality: No increase compared to matched healthy controls

Kidney Function:
- GFR decreases ~25-30% immediately post-donation
- Compensatory hypertrophy restores to ~65-70% baseline
- Long-term kidney function generally stable

ESRD Risk:
- Absolute risk remains low (~90/10,000 over 15 years)
- Relative risk increased compared to matched controls
- Muzaale et al. JAMA 2014: 30.8/10,000 vs 3.9/10,000

Other Health Outcomes:
- Hypertension risk may be slightly increased
- Preeclampsia risk in subsequent pregnancies
- Gout risk may be slightly increased

**Liver Donor Outcomes**

Mortality:
- Right lobe: ~0.2-0.5%
- Left lobe/left lateral: <0.1%

Complications:
- Biliary complications: 5-10%
- Bleeding, infection, pulmonary
- Liver regenerates to ~90% by 3 months

## Donor Selection Criteria

**UNOS Living Donor Candidate Requirements**

Kidney:
- Age 18 or older (some centers 21)
- GFR >80 mL/min (varies by age)
- BMI <35 (most centers)
- No significant proteinuria
- No uncontrolled hypertension or diabetes
- Normal kidney anatomy (acceptable variants)

Liver:
- Similar age/general health requirements
- Sufficient future liver remnant (>30-35%)
- Favorable anatomy for safe resection
- Absence of steatosis (usually <10%)

## Advanced Exchange Programs

**UNOS Kidney Paired Donation Program**
- National matching runs
- Bridge donor concept for short chains
- Non-simultaneous extended altruistic donor (NEAD) chains

**National Kidney Registry**
- Largest exchange program
- Optimizes for chain length and efficiency
- Voucher program for future donation credit

**Advanced Incompatible Transplantation**

Desensitization Protocols:
- Plasmapheresis to remove antibodies
- IVIG for immunomodulation
- Rituximab for B-cell depletion
- Bortezomib for plasma cell targeting

Combined Desensitization + PKE:
- Pairs with weak DSA may desensitize
- Expands options for highly sensitized

## Regulatory and Ethical Framework

**NOTA (National Organ Transplant Act)**
- Prohibits valuable consideration for organs
- Allows reasonable expenses

**Donor Financial Considerations**
- Lost wages during recovery
- Travel and lodging
- Childcare and other expenses
- Living donor assistance programs

**UNOS Living Donor Policy Requirements**
- Independent living donor advocate (ILDA)
- Psychosocial evaluation
- Minimum 6-month follow-up (2-year recommended)
- Reporting of donor complications`,
      keyTerms: [
        { term: 'compensatory hypertrophy', definition: 'Enlargement of remaining kidney to increase function after donation' },
        { term: 'NEAD chain', definition: 'Non-simultaneous extended altruistic donor chain - long exchange chain initiated by altruistic donor' },
        { term: 'ILDA', definition: 'Independent Living Donor Advocate - mandated role to protect donor interests' },
        { term: 'future liver remnant', definition: 'Portion of liver remaining after donation, must be sufficient for donor safety' },
      ],
      clinicalNotes: 'Donor candidate informed consent should include absolute risk data (not just relative risk) and comparison to healthy non-donor populations. Long-term follow-up is essential for outcomes monitoring.',
    },
    5: {
      level: 5,
      summary: 'Contemporary living donation research addresses optimization of donor outcomes, equity in access, global policy variations, and emerging technologies including paired exchange optimization algorithms and ABO-incompatible protocols.',
      explanation: `## Donor Outcomes Research

**Long-Term Follow-Up Studies**

Living Kidney Donor Cohorts:
- RELIVE (Renal and Lung Living Donors Evaluation) Study
- Norwegian national cohort studies
- Challenges: Control group selection, survivor bias

Meta-Analyses:
- Systematic reviews confirm low absolute ESRD risk
- Cardiovascular outcomes data still evolving
- Need for standardized outcome reporting

**Risk Prediction**

Pre-donation Risk Calculators:
- Online tools estimate post-donation ESRD risk
- Incorporate age, sex, race, GFR, BMI, BP
- Support informed decision-making

Biomarker Development:
- Kidney injury biomarkers
- Proteomic signatures of risk
- Genetic factors (APOL1 in African ancestry donors)

## Equity Considerations

**Disparities in Living Donation**
- Lower rates in Black, Hispanic populations
- Socioeconomic barriers (lost wages, insurance)
- Geographic access disparities

**APOL1 Genetic Variants**
- High-risk genotypes in African ancestry individuals
- Associated with increased ESRD risk post-donation
- Ethical debates on genetic testing for donors
- KDIGO position: Discuss but not mandate testing

**Policy Interventions**
- Living donor protection legislation
- Insurance protections for donors
- Removing financial disincentives
- Community education and outreach

## Global Perspectives

**International Variation**

Organ Trafficking Prevention:
- Istanbul Declaration principles
- Prohibition of organ sales
- Protection of vulnerable populations

Living Donation Rates by Country:
- High: Netherlands, Norway, US, South Korea
- Lower: UK, Germany, France
- Variable policies on non-directed donation

Regulation Variation:
- Age limits vary internationally
- Genetic relationship requirements (some countries)
- Non-directed donation acceptance varies

## Advanced Incompatibility Strategies

**ABO-Incompatible Transplantation**

Pediatric Experience:
- A2 donors to B recipients
- Lower rejection rates than adult
- Successful without desensitization in young children

Adult Protocols:
- Plasmapheresis to reduce anti-A/B titers
- Rituximab, splenectomy (historical)
- Outcomes approaching ABO-compatible

**HLA-Incompatible Transplantation**

Risk Stratification:
- DSA strength (MFI levels)
- Number of DSA
- Class I vs. Class II
- Memory B-cell response

Protocol Approaches:
- Low DSA: May proceed with enhanced monitoring
- Moderate DSA: Desensitization
- Strong DSA: Consider PKE instead

## Paired Exchange Optimization

**Algorithmic Approaches**

Optimization Objectives:
- Maximize number of transplants
- Optimize HLA matching
- Minimize logistics complexity
- Balance efficiency and equity

Graph Theory Applications:
- Finding cycles in compatibility graphs
- Chain optimization
- NP-hard problem requiring heuristics

**Emerging Concepts**

Global Kidney Exchange:
- International paired exchange
- Ethical framework development
- Pilot programs ongoing

Voucher Programs:
- Advanced donation with future credit
- Enable young donors for older recipients
- National Kidney Registry voucher system`,
      keyTerms: [
        { term: 'APOL1', definition: 'Gene variant associated with increased kidney disease risk, common in African ancestry individuals' },
        { term: 'Istanbul Declaration', definition: 'International ethical framework opposing organ trafficking and commercialism' },
        { term: 'graph theory', definition: 'Mathematical approach used to optimize matching in paired exchange programs' },
        { term: 'Global Kidney Exchange', definition: 'International paired exchange program addressing scarcity in multiple countries' },
      ],
      clinicalNotes: `Research priorities:
1. Long-term donor outcomes with diverse cohort representation
2. APOL1 genetic testing implementation and counseling protocols
3. Equity interventions to increase living donation in underserved communities
4. Global paired exchange program development and ethical oversight
5. Biomarker development for early risk identification`,
    },
  },

  media: [
    {
      id: 'living-donation-process',
      type: 'diagram',
      filename: 'living-donation-process.svg',
      title: 'Living Donation Process',
      description: 'Step-by-step visualization of the living donor evaluation and donation process',
    },
  ],

  citations: [
    {
      id: 'kdigo-living-donor',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline on the Evaluation and Care of Living Kidney Donors',
      source: 'Transplantation',
      url: 'https://kdigo.org',
    },
    {
      id: 'optn-living-donor',
      type: 'website',
      title: 'OPTN Living Donation Resources',
      source: 'UNOS/OPTN',
      url: 'https://optn.transplant.hrsa.gov/learn/about-transplantation/living-donation/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-organ-transplant-basics', targetType: 'concept', relationship: 'parent', label: 'Transplant Basics' },
    { targetId: 'process-transplant-evaluation', targetType: 'process', relationship: 'related', label: 'Transplant Evaluation' },
    { targetId: 'process-waitlist-allocation', targetType: 'process', relationship: 'related', label: 'Waitlist and Allocation' },
  ],

  tags: {
    systems: ['transplant-medicine'],
    topics: ['living donation', 'kidney donation', 'paired exchange', 'donor safety'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default livingDonation;
