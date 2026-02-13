/**
 * Well-Man Visit
 *
 * Comprehensive education on preventive health care specific to men.
 */

import { EducationalContent } from '../../types';

export const WELL_MAN_VISIT: EducationalContent = {
  id: 'concept-well-man-visit',
  type: 'concept',
  name: 'Well-Man Visit',
  alternateNames: ['Mens health exam', 'Male preventive health', 'Mens wellness visit'],

  levels: {
    1: {
      level: 1,
      summary: 'A well-man visit is a health checkup that focuses on preventive care and health issues that are important for men.',
      explanation: `Men often avoid going to the doctor, but regular checkups are important for finding health problems early.

**What Is Included:**
- Blood pressure and cholesterol check
- Diabetes screening
- Discussion of prostate health
- Testicular exam education
- Cardiovascular risk assessment
- Mental health screening

**Why It Matters:**
- Men have shorter life expectancy than women
- Many conditions are preventable or treatable
- Early detection saves lives`,
      keyTerms: [
        { term: 'prostate', definition: 'A gland in men that can develop problems with age' },
        { term: 'cardiovascular risk', definition: 'Chance of having heart disease or stroke' },
      ],
      analogies: ['Think of a well-man visit as preventive maintenance for your health.'],
      examples: ['At his well-man visit, Dave learned his cholesterol was high and started lifestyle changes.'],
    },
    2: {
      level: 2,
      summary: 'Well-man visits address mens higher rates of cardiovascular disease, lower healthcare utilization, and specific screening considerations including prostate cancer and abdominal aortic aneurysm.',
      explanation: `**Key Focus Areas:**

*Cardiovascular Health:*
- Blood pressure screening
- Lipid screening
- Diabetes screening
- Risk calculation (PCE)

*Cancer Screening:*
- PSA: Shared decision-making ages 55-69
- Colorectal cancer starting at 45
- Lung cancer (if smoking history)

*AAA Screening:*
- One-time ultrasound
- Men 65-75 who have ever smoked

*Mental Health:*
- Depression screening
- Suicide risk (higher in men)
- Substance use assessment`,
      keyTerms: [
        { term: 'PSA', definition: 'Prostate-specific antigen; blood test for prostate cancer screening' },
        { term: 'AAA', definition: 'Abdominal aortic aneurysm; bulge in main abdominal artery' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Evidence-based mens preventive care emphasizes cardiovascular risk reduction, shared decision-making for prostate cancer screening, and addressing behavioral risk factors including higher rates of tobacco and alcohol use.',
      explanation: `**Screening Recommendations:**

*Cardiovascular:*
- Lipid screening from age 35 (earlier with risk factors)
- BP screening annually
- Diabetes screening per USPSTF

*Cancer:*
- PSA: Grade C - Discuss risks/benefits ages 55-69
- Colorectal: Grade A - Starting at 45
- Lung: Grade B - If eligible (smoking history)

*AAA:*
- Grade B: Men 65-75 ever smoked
- One-time ultrasound

*Behavioral:*
- Tobacco screening and cessation
- Alcohol misuse screening
- Depression screening`,
      keyTerms: [
        { term: 'shared decision-making', definition: 'Discussion of options with patient before screening/treatment decisions' },
      ],
      analogies: [],
      clinicalNotes: 'Document PSA shared decision-making discussion. Screen for alcohol misuse. Address barriers to care for men. Include mental health screening.',
    },
    4: {
      level: 4,
      summary: 'Addressing mens health disparities requires understanding masculinity norms affecting healthcare seeking, integrating mental health and suicide prevention, and providing accessible, non-judgmental care environments.',
      explanation: `**Barriers to Mens Health:**

*Masculinity and Healthcare:*
- Traditional norms discourage help-seeking
- Symptom minimization
- Avoidance of vulnerability

*Mental Health:*
- Underdiagnosis of depression
- Suicide rate 4x higher in men
- Substance use as coping

*Disparities:*
- Life expectancy gap
- Higher occupational hazards
- Later presentation for care

*Solutions:*
- Male-friendly care environments
- Workplace health programs
- Normalizing health-seeking
- Addressing specific barriers`,
      keyTerms: [
        { term: 'toxic masculinity', definition: 'Harmful aspects of traditional male roles that negatively affect health behaviors' },
      ],
      analogies: [],
      clinicalNotes: 'Create welcoming environment for men. Screen for depression and suicide risk. Address substance use. Consider workplace health partnerships.',
    },
    5: {
      level: 5,
      summary: 'Future mens health initiatives integrate precision approaches to prostate cancer detection, address intersectionality of mens health disparities, and leverage technology and novel care delivery models to improve engagement.',
      explanation: `**Emerging Approaches:**

*Prostate Cancer:*
- MRI before biopsy
- Biomarkers (PHI, 4Kscore)
- Genomic classifiers
- Active surveillance optimization

*Cardiovascular:*
- CAC scoring for risk refinement
- Polygenic risk scores
- Lp(a) screening

*Technology:*
- Telehealth for increased access
- Wearable devices
- Digital health interventions

*Health Equity:*
- Racial disparities in prostate cancer mortality
- Access issues
- Culturally competent care`,
      keyTerms: [
        { term: 'active surveillance', definition: 'Monitoring low-risk prostate cancer without immediate treatment' },
      ],
      analogies: [],
      clinicalNotes: 'Consider MRI in prostate cancer workup. Address racial disparities in prostate cancer. Use technology to improve engagement. Integrate mental health into visits.',
    },
  },

  media: [],
  citations: [
    {
      id: 'uspstf-recommendations',
      type: 'website',
      title: 'USPSTF Recommendations',
      source: 'US Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/',
      accessedDate: '2025-01-24',
    },
  ],
  crossReferences: [
    { targetId: 'concept-psa-screening', targetType: 'concept', relationship: 'related', label: 'PSA Screening' },
    { targetId: 'concept-cardiovascular-screening', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Screening' },
  ],
  tags: {
    systems: ['multiple'],
    topics: ['preventive medicine', 'mens health'],
    keywords: ['mens health', 'PSA', 'cardiovascular', 'preventive care', 'well-man'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
