/**
 * Well-Woman Visit
 *
 * Comprehensive education on preventive health care specific to women.
 */

import { EducationalContent } from '../../types';

export const WELL_WOMAN_VISIT: EducationalContent = {
  id: 'concept-well-woman-visit',
  type: 'concept',
  name: 'Well-Woman Visit',
  alternateNames: ['Womens health exam', 'GYN checkup', 'Preventive womens health'],

  levels: {
    1: {
      level: 1,
      summary: 'A well-woman visit is a yearly health checkup for women that includes screenings and discussions about health topics important to women.',
      explanation: `The well-woman visit focuses on health issues specific to women at different life stages.

**What Is Included:**
- General health assessment
- Breast examination
- Pelvic examination (when indicated)
- Pap smear (cervical cancer screening)
- Discussion of contraception, menstrual issues, menopause
- Breast cancer screening recommendations
- Bone health assessment

**When to Go:**
- Once a year is recommended
- Start at age 21 or when sexually active`,
      keyTerms: [
        { term: 'Pap smear', definition: 'Test to check for cervical cancer' },
        { term: 'pelvic exam', definition: 'Examination of female reproductive organs' },
      ],
      analogies: ['A well-woman visit is like a specialized checkup designed for womens unique health needs.'],
      examples: ['At her well-woman visit, Maria discussed birth control options and had her Pap smear.'],
    },
    2: {
      level: 2,
      summary: 'Well-woman visits integrate age-appropriate cancer screenings, reproductive health counseling, and preventive services addressing the unique health needs of women across the lifespan.',
      explanation: `**Age-Specific Components:**

*Ages 21-39:*
- Cervical cancer screening (Pap, HPV)
- Contraception counseling
- STI screening
- Breast awareness education

*Ages 40-64:*
- Mammography
- Continued cervical screening
- Perimenopause/menopause counseling
- Cardiovascular risk assessment

*Ages 65+:*
- Bone density screening
- May discontinue cervical screening if adequate prior
- Breast cancer screening discussion`,
      keyTerms: [
        { term: 'mammography', definition: 'X-ray imaging of the breast for cancer screening' },
        { term: 'perimenopause', definition: 'Transition period before menopause' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Evidence-based well-woman care integrates USPSTF and ACOG recommendations for cervical and breast cancer screening, intimate partner violence screening, and reproductive life planning within a patient-centered framework.',
      explanation: `**Screening Recommendations:**

*Cervical Cancer:*
- Age 21-29: Pap every 3 years
- Age 30-65: Pap + HPV every 5 years or Pap alone every 3 years
- >65: Discontinue if adequate prior screening

*Breast Cancer:*
- Age 40-74: Mammography every 1-2 years
- Earlier/more frequent if high risk

*Other Screenings:*
- Intimate partner violence
- Depression
- Chlamydia/gonorrhea (sexually active <25)
- HIV
- Hepatitis B and C

*Preconception Counseling:*
- Folic acid supplementation
- Chronic disease optimization
- Medication review
- Genetic screening discussion`,
      keyTerms: [
        { term: 'ACOG', definition: 'American College of Obstetricians and Gynecologists' },
        { term: 'preconception counseling', definition: 'Health optimization before pregnancy' },
      ],
      analogies: [],
      clinicalNotes: 'Screen for IPV in private setting. Document cervical screening history. Assess contraceptive needs. Consider genetic counseling for family history.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive well-woman care addresses health disparities, integrates precision medicine approaches to breast cancer risk assessment, and incorporates evolving guidance on menopause management and cardiovascular risk specific to women.',
      explanation: `**Advanced Topics:**

*Breast Cancer Risk Assessment:*
- Tyrer-Cuzick model
- Consider MRI if lifetime risk >20%
- BRCA testing criteria

*Cardiovascular Risk in Women:*
- Pregnancy complications as risk factors
- Preeclampsia, gestational diabetes
- Premature menopause

*Menopause Management:*
- Hormone therapy: Window of opportunity
- Non-hormonal alternatives
- Genitourinary syndrome of menopause

*Health Disparities:*
- Higher maternal mortality in Black women
- Cervical cancer disparities
- Access to care issues`,
      keyTerms: [
        { term: 'genitourinary syndrome of menopause', definition: 'Urogenital symptoms related to estrogen deficiency' },
        { term: 'window of opportunity', definition: 'Optimal timing for hormone therapy initiation' },
      ],
      analogies: [],
      clinicalNotes: 'Assess breast cancer risk with validated tools. Consider pregnancy history in CVD risk. Address health disparities in practice.',
    },
    5: {
      level: 5,
      summary: 'Future well-woman care integrates precision prevention, genomic risk assessment, and health equity frameworks while addressing evolving understanding of sex-specific disease manifestations and treatment responses.',
      explanation: `**Emerging Paradigms:**

*Precision Approaches:*
- Polygenic risk scores for breast cancer
- Pharmacogenomics for menopause therapy
- Personalized screening intervals

*Sex-Specific Medicine:*
- Different CVD presentations
- Drug metabolism differences
- Autoimmune disease predominance

*Health Equity:*
- Addressing maternal mortality crisis
- Reducing cervical cancer disparities
- Improving access to care

*Technology Integration:*
- Wearable devices for cycle tracking
- Telehealth for contraception
- Remote mammography interpretation`,
      keyTerms: [
        { term: 'sex-specific medicine', definition: 'Recognition that diseases manifest and respond to treatment differently based on sex' },
      ],
      analogies: [],
      clinicalNotes: 'Stay current with evolving breast cancer screening guidance. Address health equity. Consider sex-specific disease presentations.',
    },
  },

  media: [],
  citations: [
    {
      id: 'acog-well-woman',
      type: 'website',
      title: 'Well-Woman Visit',
      source: 'American College of Obstetricians and Gynecologists',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/10/well-woman-visit',
      accessedDate: '2025-01-24',
    },
  ],
  crossReferences: [
    { targetId: 'concept-mammogram-screening', targetType: 'concept', relationship: 'related', label: 'Mammogram Screening' },
    { targetId: 'concept-pap-smear-screening', targetType: 'concept', relationship: 'related', label: 'Pap Smear Screening' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['preventive medicine', 'gynecology', 'womens health'],
    keywords: ['well-woman', 'Pap smear', 'mammogram', 'womens health', 'preventive care'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['obstetrics and gynecology', 'family medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
