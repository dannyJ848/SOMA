/**
 * Annual Physical Exam
 *
 * Comprehensive education on annual wellness visits and preventive health examinations.
 */

import { EducationalContent } from '../../types';

export const ANNUAL_PHYSICAL_EXAM: EducationalContent = {
  id: 'concept-annual-physical-exam',
  type: 'concept',
  name: 'Annual Physical Exam',
  alternateNames: ['Annual wellness visit', 'Yearly checkup', 'Preventive health exam'],

  levels: {
    1: {
      level: 1,
      summary: 'An annual physical exam is a yearly visit to your doctor to check your overall health and catch problems early.',
      explanation: `A yearly checkup helps you stay healthy by finding problems before they become serious. Even if you feel fine, regular checkups are important.

**What Happens at Your Checkup:**
- Review your health history
- Check vital signs (blood pressure, weight, heart rate)
- Physical examination
- Discuss any health concerns
- Order appropriate screening tests
- Update vaccinations

**Why It Matters:**
- Catch health problems early
- Update important screenings
- Build a relationship with your doctor
- Get personalized health advice`,
      keyTerms: [
        { term: 'physical exam', definition: 'When a doctor checks your body for signs of health or illness' },
        { term: 'vital signs', definition: 'Basic body measurements like blood pressure, temperature, and heart rate' },
      ],
      analogies: ['An annual checkup is like a car tune-up - regular maintenance keeps everything running smoothly.'],
      examples: ['At his annual exam, John discovered his blood pressure was elevated, allowing him to make changes before it caused problems.'],
    },
    2: {
      level: 2,
      summary: 'The annual wellness visit combines evidence-based screening recommendations, risk factor assessment, and preventive counseling tailored to age, sex, and individual risk factors.',
      explanation: `Annual examinations serve as opportunities for comprehensive health assessment, screening implementation, and health behavior counseling.

**Components:**

*Health Assessment:*
- Review of medications
- Family history update
- Social history (smoking, alcohol)
- Mental health screening

*Physical Examination:*
- General appearance
- Vital signs
- Head, eyes, ears, nose, throat
- Cardiovascular examination
- Pulmonary examination
- Abdominal examination
- Musculoskeletal assessment
- Neurological screening

*Age-Appropriate Screenings:*
- Blood pressure (all adults)
- Lipid panel (per guidelines)
- Diabetes screening (if indicated)
- Cancer screenings (per guidelines)
- Osteoporosis (women 65+)

*Counseling:*
- Diet and exercise
- Tobacco cessation
- Alcohol moderation
- Injury prevention`,
      keyTerms: [
        { term: 'wellness visit', definition: 'Preventive care visit focused on health maintenance rather than treating illness' },
        { term: 'risk assessment', definition: 'Evaluating factors that increase chance of disease' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Evidence-based periodic health examination integrates USPSTF recommendations, risk stratification tools, and shared decision-making to maximize preventive care value while avoiding unnecessary testing.',
      explanation: `**Evidence-Based Approach:**

The comprehensive "head-to-toe" annual physical has limited evidence for benefit in asymptomatic adults. Modern approach focuses on evidence-based screenings and counseling.

*Supported Interventions (USPSTF A/B):*
- Blood pressure screening
- Lipid screening (age-specific)
- Diabetes screening (if overweight)
- Cancer screenings (per guidelines)
- Depression screening
- Tobacco/alcohol screening

*Less Supported:*
- Complete blood count (asymptomatic)
- Comprehensive metabolic panel (asymptomatic)
- Urinalysis (asymptomatic non-pregnant)
- EKG (asymptomatic, average risk)

**Shared Decision-Making:**
- Prostate cancer screening
- Lung cancer screening eligibility
- Breast cancer screening (40-49)
- Aspirin for primary prevention`,
      keyTerms: [
        { term: 'periodic health examination', definition: 'Evidence-based approach to preventive care visits' },
        { term: 'overdiagnosis', definition: 'Detection of conditions that would never cause symptoms or harm' },
      ],
      analogies: [],
      clinicalNotes: 'Focus on evidence-based interventions. Document shared decision-making discussions. Update immunizations. Address behavioral risk factors.',
    },
    4: {
      level: 4,
      summary: 'Optimizing preventive care delivery requires integration of population health management, electronic health record decision support, and addressing social determinants while balancing comprehensive assessment against evidence-based selectivity.',
      explanation: `**Modern Preventive Care:**

*EHR Integration:*
- Automated screening reminders
- Health maintenance alerts
- Population health dashboards
- Quality metric tracking

*Medicare Annual Wellness Visit:*
- Health Risk Assessment
- Detection of cognitive impairment
- Review of functional ability
- Personalized prevention plan
- Advance care planning

*Value-Based Care:*
- Quality metrics drive reimbursement
- Preventive care incentivized
- Care coordination emphasis
- Population health management

*Social Determinants:*
- Food insecurity screening
- Housing stability
- Transportation barriers
- Social isolation
- Health literacy assessment`,
      keyTerms: [
        { term: 'Medicare Annual Wellness Visit', definition: 'Medicare-covered preventive visit with specific required elements' },
        { term: 'social determinants of health', definition: 'Non-medical factors affecting health outcomes' },
      ],
      analogies: [],
      clinicalNotes: 'Leverage EHR tools for screening reminders. Address social determinants. Document cognitive screening. Complete advance care planning.',
    },
    5: {
      level: 5,
      summary: 'Future preventive care models integrate precision medicine approaches, AI-driven risk prediction, remote monitoring technologies, and health equity frameworks to personalize prevention while addressing implementation gaps across diverse populations.',
      explanation: `**Evolving Paradigms:**

*Precision Prevention:*
- Genomic risk assessment
- Polygenic risk scores
- Pharmacogenomics
- Personalized screening intervals

*Technology Integration:*
- Wearable devices data
- Remote patient monitoring
- AI-assisted risk prediction
- Digital health assessments

*Implementation Science:*
- Quality improvement methods
- Addressing disparities
- Team-based care models
- Community partnerships

*Future Directions:*
- Multi-cancer early detection tests
- Liquid biopsy integration
- Microbiome assessment
- Continuous health monitoring`,
      keyTerms: [
        { term: 'precision prevention', definition: 'Tailoring preventive interventions based on individual genetic and phenotypic characteristics' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices' },
      ],
      analogies: [],
      clinicalNotes: 'Stay current with evolving evidence. Consider emerging technologies. Address health equity. Personalize prevention based on individual risk.',
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
    { targetId: 'concept-age-appropriate-screening-schedules', targetType: 'concept', relationship: 'related', label: 'Age-Appropriate Screening' },
  ],
  tags: {
    systems: ['multiple'],
    topics: ['preventive medicine', 'primary care'],
    keywords: ['annual exam', 'physical', 'wellness visit', 'preventive care'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
