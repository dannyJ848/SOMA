/**
 * HPV Testing
 *
 * Comprehensive coverage of HPV testing for cervical cancer screening
 * including test types, interpretation, and clinical applications.
 */

import { EducationalContent } from '../../../types';

export const hpvTestingContent: EducationalContent = {
  id: 'obgyn-screening-hpv-testing',
  type: 'topic',
  name: 'HPV Testing',
  alternateNames: ['HPV DNA Test', 'Human Papillomavirus Testing', 'High-Risk HPV Test'],

  levels: {
    1: {
      level: 1,
      summary: 'HPV testing checks for the virus that causes cervical cancer and helps decide who needs further testing.',
      explanation: `HPV (Human Papillomavirus) testing is an important part of cervical cancer prevention.

**What HPV testing tells us:**
- Whether you have a high-risk HPV infection
- Which HPV types you have (sometimes)
- Your risk of developing cervical cancer

**Important facts about HPV:**
- Very common - most sexually active people get it
- Usually goes away on its own
- Only some types cause cancer (high-risk types)
- Can be present without any symptoms

**Who should get HPV testing:**
- Women age 30 and older (with or instead of Pap)
- Women 25+ (can be used as primary test)
- To follow up an abnormal Pap smear (any age)

**Understanding results:**

*HPV Negative:*
- Very reassuring
- Low risk of cervical problems
- Can wait longer between tests

*HPV Positive:*
- Does NOT mean you have cancer
- Means you need closer monitoring
- Further tests may be recommended

**Remember:**
- You still need HPV testing even if vaccinated
- A positive test is common and usually not serious`,
      keyTerms: [
        { term: 'HPV', definition: 'Human Papillomavirus; a common virus that can cause cervical cancer' },
        { term: 'high-risk HPV', definition: 'Types of HPV that can lead to cancer (like types 16 and 18)' },
        { term: 'negative', definition: 'No high-risk HPV was found in the sample' },
      ],
      analogies: [
        'HPV testing is like checking if someone has been exposed to a potentially harmful virus - most people clear it naturally, but knowing helps us watch more closely if needed.',
      ],
      examples: [
        'A 35-year-old woman has a negative HPV test along with her normal Pap - she can safely wait 5 years before her next cervical screening.',
      ],
    },
    2: {
      level: 2,
      summary: 'HPV testing detects high-risk HPV types (especially 16 and 18) using DNA or mRNA methods, offering higher sensitivity than cytology for detecting cervical precancer.',
      explanation: `**HPV Types:**

*High-Risk (Oncogenic):*
- HPV 16: Causes ~50% of cervical cancers
- HPV 18: Causes ~20% of cervical cancers
- Others: 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 68

*Low-Risk (Non-Oncogenic):*
- HPV 6, 11: Cause genital warts
- Not tested in cervical screening

**Testing Methods:**

*HPV DNA Tests:*
- Detect viral DNA
- Most common method
- Examples: cobas, Aptima (also mRNA)

*HPV mRNA Tests:*
- Detect E6/E7 mRNA (oncogene expression)
- May indicate transforming infection
- Example: Aptima

**Test Performance:**

| Measure | HPV Test | Cytology |
|---------|----------|----------|
| Sensitivity for CIN 2+ | ~95% | ~55% |
| Specificity | ~90% | ~95% |
| NPV | Very high | High |

*Key Point:* HPV test is more sensitive but less specific than Pap

**Clinical Applications:**

*Primary Screening:*
- Ages 25-65 (ACS guideline)
- Every 5 years if negative
- Triage positive results

*Co-testing:*
- HPV + Pap together
- Ages 30-65
- Every 5 years if both negative

*Reflex Testing:*
- Done on ASC-US Pap results
- Guides need for colposcopy

*Surveillance:*
- After CIN treatment
- HPV negative = low recurrence risk

**HPV Genotyping:**
- Identifies specific HPV type
- HPV 16/18 = higher risk (immediate colposcopy)
- Other HR types = can follow up`,
      keyTerms: [
        { term: 'HPV genotyping', definition: 'Testing that identifies which specific HPV type is present' },
        { term: 'sensitivity', definition: 'Ability of test to correctly identify those with disease' },
        { term: 'NPV', definition: 'Negative predictive value; how confidently a negative result rules out disease' },
      ],
    },
    3: {
      level: 3,
      summary: 'HPV testing platforms offer varying capabilities including pooled versus individual genotyping, and clinical application requires understanding test characteristics and appropriate use in different populations.',
      explanation: `**FDA-Approved HPV Tests:**

| Test | Method | Genotyping | Primary Screening |
|------|--------|------------|-------------------|
| cobas HPV | DNA | HPV 16, 18, other HR | Yes |
| Aptima | mRNA | HPV 16, 18/45, other HR | Yes |
| Onclarity | DNA | Extended genotyping | Yes |
| Hybrid Capture 2 | DNA | Pooled HR only | No |
| Cervista | DNA | HPV 16/18, other HR | No |

**Test Characteristics:**

*cobas HPV:*
- Reports HPV 16, 18 individually
- Pools other HR types
- FDA approved for primary screening

*Aptima:*
- Detects E6/E7 mRNA
- May be more specific
- HPV 16, 18/45, other HR

*Onclarity:*
- Extended genotyping (14 types)
- Individual reporting
- Risk stratification potential

**Clinical Considerations:**

*HPV 16/18 Positive:*
- Highest risk for CIN 3+
- Proceed to colposcopy regardless of cytology
- Immediate risk ~10%

*Other HR HPV Positive, NILM Cytology:*
- Lower immediate risk
- 1-year repeat OR colposcopy
- Risk-based management

*HPV Negative:*
- Very reassuring
- 5-year interval appropriate
- Risk <0.5% for CIN 3+ at 5 years

**Age Considerations:**

*Age <30:*
- High transient infection rate
- HPV testing can lead to overtreatment
- Use for triage of ASC-US only

*Age 30+:*
- Persistent infection more likely
- Co-testing or primary HPV appropriate
- Balance sensitivity and specificity

**Extended Genotyping:**

*Potential Benefits:*
- Risk stratification beyond 16/18
- HPV 31, 33, 45, 52, 58 higher risk than others
- May guide surveillance intervals

*Current Status:*
- Research ongoing
- Not yet standard of care
- May inform future guidelines`,
      keyTerms: [
        { term: 'E6/E7 mRNA', definition: 'HPV oncogene transcripts; presence indicates active transforming infection' },
        { term: 'pooled testing', definition: 'HPV test that detects multiple types together without specifying which' },
        { term: 'extended genotyping', definition: 'Identification of individual HPV types beyond just 16/18' },
      ],
      clinicalNotes: 'The high sensitivity and NPV of HPV testing makes it ideal for primary screening - a negative test is very reassuring. However, in younger women, transient infections make HPV testing less useful for screening.',
    },
    4: {
      level: 4,
      summary: 'HPV testing implementation requires balancing test selection, clinical workflow integration, patient communication, and quality assurance while adapting to evolving guidelines.',
      explanation: `**Implementation Considerations:**

*Laboratory Selection:*
- FDA-approved test required
- Consider primary screening approval status
- Genotyping capabilities
- Turnaround time
- Cost

*Workflow Integration:*
- Reflex testing protocols
- Result reporting
- EMR integration
- Follow-up algorithms

**Patient Communication:**

*HPV Positive Results:*
- Normalize (very common infection)
- Explain difference from cancer
- Describe next steps
- Address relationship concerns
- Provide written materials

*Challenges:*
- Stigma of STI
- Partner disclosure questions
- Anxiety about cancer
- Understanding persistence concept

**HPV Testing in Special Populations:**

*HIV-Positive Women:*
- Higher HPV prevalence
- More persistent infection
- Consider more frequent testing
- HPV testing useful

*Post-Hysterectomy:*
- If vaginal cuff intact: May test vaginal samples
- For CIN 2+ history: Continue surveillance
- For benign indication: Usually no HPV testing needed

*Self-Collected Samples:*
- Similar sensitivity to provider-collected
- May improve screening uptake
- Validated for HPV DNA testing
- Not FDA-approved for cytology

**Quality Assurance:**

*Internal QC:*
- Daily controls
- Beta-globin/cellular adequacy
- Batch monitoring

*External QA:*
- Proficiency testing
- CAP/CLIA requirements
- Inter-laboratory comparisons

**Cost-Effectiveness:**

*Primary HPV vs. Cytology:*
- Fewer tests over lifetime
- Higher per-test cost
- Overall similar or lower costs
- Potentially better outcomes

*Implementation Factors:*
- Test costs
- Colposcopy rates
- Cancer prevented
- Quality of life`,
      keyTerms: [
        { term: 'beta-globin', definition: 'Human gene used as internal control to verify adequate sampling' },
        { term: 'self-collection', definition: 'Patient-collected vaginal sample for HPV testing' },
        { term: 'reflex protocol', definition: 'Automatic additional testing based on initial result' },
      ],
      clinicalNotes: 'Effective patient communication about HPV results is critical. Many patients are distressed by positive results - emphasize that HPV is common, usually clears, and that positive results mean we are successfully monitoring their health.',
    },
    5: {
      level: 5,
      summary: 'The future of HPV testing includes self-collection scale-up, point-of-care testing, integration with molecular triage markers, and adaptation to post-vaccination epidemiology.',
      explanation: `**Self-Collection Expansion:**

*Evidence:*
- Equivalent sensitivity for CIN 2+
- Improved screening uptake in under-screened
- WHO recommendation for screening programs
- US implementation expanding

*Implementation:*
- Clinic-provided vs. mail-in kits
- Patient instructions
- Sample stability
- Result communication

*Challenges:*
- Insurance coverage
- Integration with care
- Follow-up of positives
- Quality assurance

**Point-of-Care Testing:**

*Platforms:*
- GeneXpert HPV
- careHPV
- Cepheid

*Applications:*
- Low-resource settings
- Immediate results
- Screen-and-treat
- Mobile clinics

*Future:*
- More rapid turnaround
- Integration with triage
- Smartphone-based
- Cost reduction

**Molecular Triage:**

*HPV-Positive Triage Options:*
- Cytology (current standard)
- HPV 16/18 genotyping
- p16/Ki-67 dual stain
- Methylation markers
- Combinations

*Methylation Markers:*
- FAM19A4, CADM1
- Host genome changes
- High specificity
- May reduce colposcopy

*Future:*
- Multi-marker panels
- Risk prediction algorithms
- Personalized screening intervals

**Post-Vaccination Era:**

*Changing Epidemiology:*
- Declining HPV 16/18
- Type replacement (minimal)
- Lower prevalence overall
- Screening efficiency questions

*Implications:*
- Lower positive predictive value
- Longer intervals may be safe
- Algorithm modifications
- Cost-effectiveness recalculation

**Global Perspective:**

*WHO Elimination Strategy:*
- HPV testing cornerstone
- Self-collection key
- Screen-and-treat approaches
- 70% women screened goal

*Implementation Science:*
- Health systems integration
- Training requirements
- Quality assurance systems
- Sustainable financing`,
      keyTerms: [
        { term: 'GeneXpert HPV', definition: 'Point-of-care HPV testing platform with rapid results' },
        { term: 'screen-and-treat', definition: 'Single-visit approach with immediate treatment of positives' },
        { term: 'type replacement', definition: 'Theoretical concern that non-vaccine types might increase; not observed clinically' },
      ],
      clinicalNotes: 'Self-collection may be the most impactful innovation for increasing screening coverage. Evidence shows it is effective and acceptable to patients. Integration into healthcare systems is the key implementation challenge.',
    },
  },

  media: [
    {
      id: 'hpv-types',
      type: 'diagram',
      filename: 'hpv-types-risk.svg',
      title: 'HPV Types and Cancer Risk',
      description: 'Visual showing high-risk vs low-risk HPV types',
    },
  ],

  citations: [
    {
      id: 'hpv-testing-guidelines',
      type: 'article',
      title: 'Use of Primary HPV Testing for Cervical Cancer Screening',
      source: 'American Cancer Society',
      authors: ['Fontham ETH', 'Wolf AMD', 'Church TR'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-screening-cervical', targetType: 'topic', relationship: 'parent', label: 'Cervical Cancer Screening' },
    { targetId: 'obgyn-screening-pap-smear', targetType: 'topic', relationship: 'sibling', label: 'Pap Smear' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['screening', 'HPV', 'cervical cancer'],
    keywords: ['HPV testing', 'HPV DNA', 'genotyping', 'cervical screening'],
    clinicalRelevance: 'high',
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
