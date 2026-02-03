/**
 * Preventive Care for LGB Patients - Inclusive Screening and Prevention
 */

import { EducationalContent } from '../../types';

export const preventiveCareLgb: EducationalContent = {
  id: 'lgbtq-preventive-care-lgb',
  type: 'concept',
  name: 'Preventive Care for LGB Patients',
  alternateNames: ['LGB Screening Guidelines', 'Sexual Minority Preventive Health'],

  levels: {
    1: {
      level: 1,
      summary: 'Lesbian, gay, and bisexual people need the same preventive care as everyone else, plus some screenings based on their specific needs.',
      explanation: `**Everyone Needs:**

- Regular checkups with a doctor
- Age-appropriate cancer screenings
- Vaccinations
- Mental health check-ins
- Blood pressure and cholesterol checks

**Some Additional Considerations:**

- HIV and STI testing if sexually active
- HPV vaccination (important for all genders)
- Cervical cancer screening for those with a cervix
- Anal cancer screening for some gay and bisexual men
- Mental health screening (due to higher rates of depression/anxiety)

**Finding the Right Provider:**

Look for a healthcare provider who:
- Is knowledgeable about LGBTQ+ health
- Makes you feel comfortable being open
- Does not make assumptions about your life
- Asks appropriate questions respectfully

**Being Open with Your Doctor:**

Being honest about your relationships and behaviors helps your doctor recommend the right tests and prevention.`,
      keyTerms: [
        { term: 'preventive care', definition: 'Healthcare focused on preventing disease rather than treating it' },
        { term: 'screening', definition: 'Tests to find health problems early, before you have symptoms' },
        { term: 'HPV', definition: 'Human papillomavirus - a virus that can cause certain cancers' },
      ],
      analogies: ['Preventive care is like car maintenance - regular check-ups prevent bigger problems later'],
      examples: ['A gay man discusses his sexual health with his doctor and gets recommended HIV testing and HPV vaccination'],
      patientCounselingPoints: ['All standard preventive care applies to you', 'Being open helps get the right recommendations'],
    },
    2: {
      level: 2,
      summary: 'LGB patients require standard preventive care plus tailored recommendations based on anatomy, behaviors, and identity-related health risks.',
      explanation: `## Standard Preventive Care

All guidelines apply regardless of sexual orientation:
- Blood pressure screening
- Lipid/cholesterol screening
- Diabetes screening
- Colorectal cancer screening
- Breast cancer screening (mammography)
- Cervical cancer screening (Pap test)
- Immunizations

## Sexual Health Screening

**HIV Testing:**
- Recommended at least annually for MSM
- More frequently with multiple partners
- PrEP consideration for those at risk

**STI Screening:**
- Based on sites of exposure (genital, oral, rectal)
- Syphilis, gonorrhea, chlamydia
- Frequency based on risk factors

**HPV-Related:**
- HPV vaccination through age 26 (up to 45 in some cases)
- Anal Pap screening for high-risk MSM
- Cervical Pap screening for those with a cervix

## Mental Health

**Screening:**
- Depression and anxiety screening
- Substance use screening
- Suicidality assessment when indicated

**Protective Factors:**
- Social support assessment
- Community connection
- Family acceptance`,
      keyTerms: [
        { term: 'PrEP', definition: 'Pre-exposure prophylaxis - medication to prevent HIV infection' },
        { term: 'anal Pap test', definition: 'Screening test for anal cancer, similar to cervical Pap test' },
        { term: 'MSM', definition: 'Men who have sex with men - behavioral category for health recommendations' },
      ],
      patientCounselingPoints: ['All standard screenings apply', 'Sexual health screening based on your specific situation'],
    },
    3: {
      level: 3,
      summary: 'Evidence-based preventive care for LGB populations requires attention to population-specific risks and barriers to accessing care.',
      explanation: `## Evidence-Based Guidelines

**HIV Prevention:**
- USPSTF: Screen all adolescents and adults 15-65
- MSM: At least annual testing, consider more frequent
- PrEP indicated for substantial risk

**Anal Cancer Screening:**
- No USPSTF recommendation yet
- Expert guidance for HIV+ MSM
- Emerging recommendations for HIV- MSM with high-risk behaviors

**Cervical Cancer (WSW):**
- Same screening recommendations apply
- Dispel myth that lesbians don't need Pap tests
- HPV transmission occurs with any sexual contact

## Addressing Barriers

**Healthcare Access:**
- LGBTQ+ affirming providers
- Insurance coverage issues
- Cost barriers
- Geographic access

**Patient Factors:**
- Prior negative healthcare experiences
- Fear of disclosure
- Lower rates of having regular provider
- Health literacy variations

## Implementation Strategies

**Clinical Environment:**
- Inclusive intake forms
- SOGI data collection
- Non-judgmental history taking
- Privacy protections`,
      keyTerms: [
        { term: 'USPSTF', definition: 'US Preventive Services Task Force - issues screening recommendations' },
        { term: 'WSW', definition: 'Women who have sex with women - behavioral category for health guidance' },
        { term: 'SOGI', definition: 'Sexual orientation and gender identity data collection' },
      ],
      clinicalNotes: 'Don\'t make assumptions. Ask about behaviors to guide screening. Create affirming environment.',
    },
    4: {
      level: 4,
      summary: 'Optimizing preventive care for LGB populations requires system-level approaches to address disparities in access and quality.',
      explanation: `## System-Level Strategies

**Data Collection:**
- SOGI collection in EHR
- Quality measurement stratification
- Disparity identification
- Improvement targeting

**Provider Training:**
- LGBTQ+ health competency
- Communication skills
- Implicit bias awareness
- Ongoing education

**Care Delivery:**
- Proactive outreach
- Population health management
- Gap closure interventions
- Community partnerships

## Quality Measurement

**Disparities in Preventive Care:**
- Lower mammography rates in some WSW
- Lower cervical cancer screening in WSW
- Variable HIV/STI testing rates
- Mental health treatment gaps

**Improvement Opportunities:**
- Track rates by SOGI
- Set improvement targets
- Implement interventions
- Monitor progress

## Special Populations

**Bisexual Individuals:**
- Often experience greater disparities
- Provider assumptions about identity
- Specific screening needs

**Older LGB Adults:**
- Historical trauma considerations
- May not disclose identity
- Social isolation concerns
- Specific health needs`,
      keyTerms: [
        { term: 'population health management', definition: 'Proactive care for defined patient population' },
        { term: 'gap closure', definition: 'Interventions to address gaps in preventive care completion' },
        { term: 'EHR', definition: 'Electronic health record - digital patient medical record' },
      ],
      clinicalNotes: 'Collect SOGI data. Monitor preventive care rates by population. Address identified disparities.',
    },
    5: {
      level: 5,
      summary: 'Achieving health equity in preventive care for LGB populations requires evidence-based guidelines, system transformation, and ongoing research.',
      explanation: `## Guidelines and Evidence

**Current State:**
- Most guidelines do not address LGB specifically
- Emerging LGB-focused recommendations
- Need for population-specific evidence

**Research Priorities:**
- Intervention effectiveness
- Screening optimization
- Implementation strategies
- Cost-effectiveness

## Healthcare System Transformation

**Affirming Care Standards:**
- Accreditation requirements
- Quality metrics inclusion
- Provider credentialing
- Patient experience measurement

**Workforce Development:**
- Training requirements
- Continuing education
- Specialty expertise
- Community health worker roles

## Policy Considerations

**Coverage:**
- PrEP coverage
- Mental health parity
- Non-discrimination protections
- Essential health benefits

**Structural Factors:**
- Community health center support
- Workforce diversity
- Research funding
- Data infrastructure

## Health Equity Imperative

**Goals:**
- Eliminate preventive care disparities
- Achieve affirming care everywhere
- Address structural barriers
- Promote population health

**Intersectionality:**
- LGBTQ+ people of color
- Rural populations
- Low-income individuals
- Multiple marginalized identities`,
      keyTerms: [
        { term: 'mental health parity', definition: 'Requirement for equal coverage of mental and physical health' },
        { term: 'affirming care standards', definition: 'Requirements for LGBTQ+ competent healthcare' },
        { term: 'structural barriers', definition: 'System-level factors that impede access to care' },
      ],
      clinicalNotes: 'Advocate for affirming care standards. Support research. Address intersectionality in care.',
    },
  },

  media: [],
  citations: [{ id: 'uspstf-prevention', type: 'website', title: 'USPSTF Recommendations', source: 'USPSTF' }],
  crossReferences: [{ targetId: 'lgbtq-lgb-health-disparities', targetType: 'concept', relationship: 'sibling', label: 'LGB Health Disparities' }],
  tags: { systems: ['sexual-minority-health'], topics: ['preventive care', 'screening'], keywords: ['prevention', 'screening', 'LGB'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default preventiveCareLgb;
