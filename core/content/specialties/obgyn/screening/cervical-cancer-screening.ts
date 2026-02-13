/**
 * Cervical Cancer Screening
 *
 * Comprehensive coverage of cervical cancer screening guidelines,
 * methods, and management of abnormal results.
 */

import { EducationalContent } from '../../../types';

export const cervicalCancerScreening: EducationalContent = {
  id: 'obgyn-screening-cervical',
  type: 'topic',
  name: 'Cervical Cancer Screening',
  alternateNames: ['Pap Smear Screening', 'Cervical Screening', 'Pap Test Guidelines'],

  levels: {
    1: {
      level: 1,
      summary: 'Cervical cancer screening uses Pap smears and HPV tests to find precancer before it becomes cancer.',
      explanation: `Cervical cancer screening saves lives by finding problems early - before cancer develops.

**When to start and stop:**
- Start at age 21
- Continue until age 65 (if normal results)
- Can stop after 65 if you've had normal screening

**Types of tests:**

*Pap smear:*
- A sample of cells from the cervix
- Looks for abnormal cells
- Done during a pelvic exam

*HPV test:*
- Checks for the virus that causes cervical cancer
- Can be done with Pap or alone
- Recommended starting at age 25-30

**How often:**
- Ages 21-29: Pap smear every 3 years
- Ages 30-65: Pap + HPV every 5 years (preferred), or Pap alone every 3 years

**Important points:**
- You still need screening even with HPV vaccine
- Abnormal results don't mean you have cancer
- Most abnormalities go away on their own
- Follow-up testing may be recommended`,
      keyTerms: [
        { term: 'Pap smear', definition: 'A test where cells are scraped from the cervix to look for abnormalities' },
        { term: 'HPV test', definition: 'A test that checks for the virus that causes most cervical cancers' },
        { term: 'screening', definition: 'Testing to find disease before symptoms appear' },
      ],
      analogies: [
        'Cervical screening is like a smoke detector - it catches problems early before there\'s a fire (cancer).',
      ],
      examples: [
        'A 32-year-old woman with no history of abnormal Paps can have a Pap + HPV test and if normal, doesn\'t need another test for 5 years.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cervical screening guidelines recommend cytology and/or HPV testing at specific intervals based on age, with risk-based management of abnormal results.',
      explanation: `**Current Guidelines (USPSTF/ACS):**

*Ages 21-24:*
- Cytology (Pap) alone every 3 years
- HPV testing not recommended (high transient infection rate)

*Ages 25-29:*
- Cytology every 3 years, OR
- HPV primary testing every 5 years (ACS 2020)

*Ages 30-65:*
- Co-testing (cytology + HPV) every 5 years (preferred), OR
- HPV primary testing every 5 years, OR
- Cytology alone every 3 years

*Age 65+:*
- Can stop if adequate prior screening
- Adequate = 3 consecutive negative cytology OR 2 consecutive negative co-tests in prior 10 years

**Who Needs More Frequent Screening:**
- History of CIN 2+ (continue for 25 years)
- HIV positive
- Immunocompromised
- DES exposure in utero

**Test Results:**

*Cytology:*
- NILM (normal)
- ASC-US (atypical cells)
- LSIL (low-grade changes)
- ASC-H (atypical, cannot exclude high-grade)
- HSIL (high-grade changes)
- AGC (glandular cell abnormalities)

*HPV:*
- Negative
- Positive (may specify HPV 16/18)

**Management of Abnormal Results:**
- Based on risk calculation
- Consider current result + history
- May require repeat testing, colposcopy, or treatment`,
      keyTerms: [
        { term: 'co-testing', definition: 'Performing both Pap smear and HPV test together' },
        { term: 'ASC-US', definition: 'Atypical squamous cells of undetermined significance; mildly abnormal result' },
        { term: 'colposcopy', definition: 'Magnified examination of cervix with directed biopsies' },
      ],
    },
    3: {
      level: 3,
      summary: 'Contemporary cervical screening utilizes risk-based management algorithms (ASCCP 2019) integrating current results with screening history to determine colposcopy referral versus surveillance.',
      explanation: `**ASCCP 2019 Risk-Based Approach:**

*Key Principles:*
- Risk, not result, determines action
- Incorporates current + past results
- Uses clinical action thresholds
- Equal management for equal risk

*Risk Thresholds:*
- <0.15%: Return to routine screening
- 0.15-0.54%: 3-year follow-up
- 0.55-3.9%: 1-year follow-up
- ≥4%: Colposcopy recommended
- ≥25% immediate CIN 3+ risk: Expedited treatment option

**High-Risk Results (Colposcopy):**
- HPV 16/18 positive (any cytology)
- HSIL cytology
- ASC-H cytology
- AGC cytology
- Persistent HPV positive

**Intermediate-Risk (1-Year Return):**
- HPV positive (not 16/18), NILM or ASC-US
- HPV negative LSIL

**Lower-Risk (3-Year or Routine):**
- HPV negative, NILM
- HPV negative, ASC-US

**Special Situations:**

*Unsatisfactory Cytology:*
- HPV positive: Repeat cytology in 2-4 months
- HPV negative: Repeat co-test in 2-4 months

*ASC-US with HPV Unknown:*
- Reflex HPV testing OR
- Repeat cytology in 1 year

*AGC (Glandular Cells):*
- Always colposcopy
- Consider endometrial biopsy (≥35 or abnormal bleeding)
- Higher risk category

**Post-Colposcopy Management:**

*CIN 1:*
- Observation preferred for most
- 1-year surveillance
- Treatment if persistent >2 years

*CIN 2:*
- Treatment OR observation (young, desire fertility)
- Shared decision-making

*CIN 3:*
- Treatment indicated
- LEEP or cone biopsy`,
      keyTerms: [
        { term: 'clinical action thresholds', definition: 'Risk levels that determine clinical management in ASCCP guidelines' },
        { term: 'reflex HPV testing', definition: 'Automatic HPV test performed on cytology sample when ASC-US result' },
        { term: 'expedited treatment', definition: 'Option to treat without biopsy when immediate CIN 3+ risk ≥25%' },
      ],
      clinicalNotes: 'The 2019 ASCCP guidelines shifted to risk-based management. Use risk calculators (online tools available) to determine management. Prior history significantly affects current risk.',
    },
    4: {
      level: 4,
      summary: 'Implementing cervical screening programs requires balancing sensitivity and specificity, minimizing overtreatment, and addressing barriers to screening while integrating primary HPV testing protocols.',
      explanation: `**Primary HPV Testing:**

*ACS 2020 Guideline:*
- HPV-only testing every 5 years ages 25-65
- Acceptable for ages 25-65
- Co-testing and cytology remain options
- Requires FDA-approved HPV test

*Rationale:*
- HPV more sensitive than cytology
- High NPV (negative = very low risk)
- Fewer total tests over lifetime
- May improve detection of adenocarcinoma

*Implementation Challenges:*
- Triage of HPV-positive/cytology-negative
- Patient anxiety with HPV-only result
- Provider workflow changes
- Genotyping availability

**Special Populations:**

*HIV-Positive Women:*
- More aggressive screening
- Cytology annually
- Or co-testing every 3 years
- Continue past age 65

*Immunocompromised:*
- Similar to HIV approach
- Higher risk of progression
- Lower threshold for treatment

*Post-Hysterectomy:*
- If cervix removed and no CIN 2+ history: No screening
- If history of CIN 2+: Continue vaginal screening

*Pregnancy:*
- Can screen during pregnancy
- Defer colposcopy if low-grade
- Defer treatment until postpartum
- High-grade: Colposcopy OK, treatment deferred

**Quality Metrics:**

*Process:*
- Screening rates in target population
- Adequate follow-up of abnormals
- Time to colposcopy
- Appropriate management per guidelines

*Outcome:*
- CIN 2+ detection rate
- Cervical cancer incidence
- Stage at diagnosis

**Overscreening/Overtreatment:**

*Concerns:*
- Screening before age 21
- Screening too frequently
- Treating CIN 1
- Anxiety from HPV diagnosis

*Impact:*
- Unnecessary procedures
- Cervical stenosis/incompetence
- Psychological distress
- Healthcare costs`,
      keyTerms: [
        { term: 'primary HPV testing', definition: 'HPV test alone as initial screening method without concurrent cytology' },
        { term: 'negative predictive value', definition: 'Probability that a negative test truly means no disease; very high for HPV' },
        { term: 'cervical stenosis', definition: 'Narrowing of cervical canal; complication of multiple excisional procedures' },
      ],
      clinicalNotes: 'Primary HPV testing is gaining traction as the preferred approach. The very high NPV of HPV testing means negative results provide strong reassurance. Triage of HPV-positive results remains important to avoid overtreatment.',
    },
    5: {
      level: 5,
      summary: 'Advancing cervical screening requires balancing emerging technologies (self-collection, AI), addressing disparities, and integrating screening with HPV vaccination for optimal cervical cancer prevention.',
      explanation: `**Emerging Technologies:**

*HPV Self-Collection:*
- Patient collects own vaginal sample
- Comparable sensitivity to provider-collected
- Improves screening uptake
- WHO recommended for LMICs
- US implementation expanding

*AI-Assisted Cytology:*
- Computer-assisted image analysis
- Improved sensitivity
- Reduced workload
- FDA-approved systems available

*Methylation Markers:*
- DNA methylation patterns
- May improve triage of HPV-positive
- Research stage

**Vaccination Impact:**

*Effect on Screening:*
- Reduced disease prevalence
- Lower positive predictive value of tests
- Longer screening intervals being studied
- Australia studying less frequent screening

*Future Considerations:*
- Fully vaccinated cohorts entering screening
- Algorithm modifications needed?
- Self-collection expansion
- Simplified protocols

**Global Considerations:**

*WHO Elimination Strategy:*
- 90% girls vaccinated
- 70% women screened
- 90% lesions treated
- Goal: <4 per 100,000

*LMIC Approaches:*
- Visual inspection (VIA)
- Self-collected HPV
- Screen-and-treat protocols
- Point-of-care testing

**Disparities:**

*US Disparities:*
- Lower screening rates in uninsured
- Higher cervical cancer mortality in Black women
- Rural access challenges
- Language barriers

*Interventions:*
- Patient navigation
- Community health workers
- Self-collection options
- Telehealth integration
- Reminder systems

**Research Priorities:**

*Needed Studies:*
- Optimal intervals for HPV testing
- Screening in vaccinated populations
- Risk stratification refinements
- Cost-effectiveness analyses

*Implementation Science:*
- Self-collection uptake
- AI integration
- Workflow optimization
- Quality improvement

**Shared Decision-Making:**

*Key Discussions:*
- Benefits and limitations of screening
- Meaning of abnormal results
- HPV diagnosis implications
- Treatment options and risks
- When to stop screening`,
      keyTerms: [
        { term: 'VIA', definition: 'Visual inspection with acetic acid; low-resource cervical screening method' },
        { term: 'screen-and-treat', definition: 'Offering immediate treatment to screen-positive women in single visit' },
        { term: 'elimination threshold', definition: 'Cervical cancer incidence <4 per 100,000 women per year' },
      ],
      clinicalNotes: 'Self-collection for HPV testing may be the most impactful innovation for improving screening uptake. As vaccination reduces disease prevalence, screening strategies will need to evolve. Addressing disparities in screening and follow-up remains critical.',
    },
  },

  media: [
    {
      id: 'screening-algorithm',
      type: 'diagram',
      filename: 'cervical-screening-algorithm.svg',
      title: 'Cervical Cancer Screening Algorithm',
      description: 'Decision tree for cervical cancer screening by age',
    },
  ],

  citations: [
    {
      id: 'asccp-2019',
      type: 'article',
      title: '2019 ASCCP Risk-Based Management Consensus Guidelines',
      source: 'Journal of Lower Genital Tract Disease',
      authors: ['Perkins RB', 'Guido RS', 'Castle PE'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-screening-pap-smear', targetType: 'topic', relationship: 'child', label: 'Pap Smear' },
    { targetId: 'obgyn-oncology-cervical-cancer', targetType: 'condition', relationship: 'related', label: 'Cervical Cancer' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['screening', 'prevention', 'cervical cancer'],
    keywords: ['Pap smear', 'HPV testing', 'cervical screening', 'colposcopy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
