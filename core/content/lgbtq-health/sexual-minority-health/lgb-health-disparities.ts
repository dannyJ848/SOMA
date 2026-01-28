/**
 * LGB Health Disparities - Understanding Health Inequities Affecting Sexual Minorities
 */

import { EducationalContent } from '../../types';

export const lgbHealthDisparities: EducationalContent = {
  id: 'lgbtq-lgb-health-disparities',
  type: 'concept',
  name: 'LGB Health Disparities',
  alternateNames: ['Sexual Minority Health Disparities', 'LGBQ Health Inequities'],

  levels: {
    1: {
      level: 1,
      summary: 'Lesbian, gay, and bisexual people sometimes face extra health challenges because of discrimination and barriers to care.',
      explanation: `**What Are Health Disparities?**

Health disparities are differences in health between groups of people. LGB (lesbian, gay, bisexual) people may face health differences because of:

- Stress from discrimination
- Difficulty finding welcoming healthcare
- Fear of being judged by doctors
- Less social support in some cases

**Common Health Concerns:**

- Higher rates of depression and anxiety
- Higher rates of smoking and substance use
- Sometimes delayed or avoided medical care
- Some cancers may be found later

**What Can Help:**

- Finding an affirming healthcare provider
- Connecting with supportive community
- Open communication with your doctor
- Mental health support when needed

**You Deserve Good Care:**

Everyone deserves healthcare that respects who they are. If you do not feel respected, it is okay to find a different provider.`,
      keyTerms: [
        { term: 'health disparity', definition: 'A difference in health outcomes between groups of people' },
        { term: 'discrimination', definition: 'Unfair treatment of people based on who they are' },
        { term: 'affirming care', definition: 'Healthcare that respects and supports your identity' },
      ],
      analogies: ['Health disparities are like an unfair race where some people start further behind - we need to fix the unfair start'],
      examples: ['A gay man delays getting care because he had a bad experience with a judgmental doctor in the past'],
      patientCounselingPoints: ['You deserve respectful care', 'Finding an affirming provider can make a big difference'],
    },
    2: {
      level: 2,
      summary: 'LGB populations experience elevated rates of certain health conditions, largely due to minority stress and barriers to affirming healthcare.',
      explanation: `## Key Health Disparities

**Mental Health:**
- Higher rates of depression, anxiety, suicidality
- Related to minority stress and discrimination
- Exacerbated by family rejection
- Protective factors include community connection

**Substance Use:**
- Higher rates of tobacco use
- Higher rates of alcohol use
- Higher rates of other substance use
- Related to minority stress and social factors

**Cancer:**
- Some cancers diagnosed at later stages
- Lower rates of cancer screening
- Specific risks (e.g., HPV-related cancers in MSM)

**Sexual Health:**
- HIV disproportionately affects MSM
- STI prevention needs
- Access to appropriate care

## Minority Stress Model

**Stressors:**
- Discrimination experiences
- Expectations of rejection
- Hiding/concealing identity
- Internalized stigma

**Outcomes:**
- Mental health effects
- Health behaviors
- Healthcare avoidance
- Chronic stress physiology`,
      keyTerms: [
        { term: 'minority stress', definition: 'Chronic stress from stigma, prejudice, and discrimination faced by minority groups' },
        { term: 'MSM', definition: 'Men who have sex with men - a behavioral category used in health research' },
        { term: 'internalized stigma', definition: 'When negative societal attitudes become internalized as self-beliefs' },
      ],
      patientCounselingPoints: ['Community connection can protect mental health', 'Screening is important - find a provider you can be open with'],
    },
    3: {
      level: 3,
      summary: 'LGB health disparities result from multilevel factors including individual experiences, healthcare system barriers, and structural stigma.',
      explanation: `## Epidemiological Evidence

**National Data Sources:**
- NHIS, BRFSS include sexual orientation
- Consistent disparities documented
- Variability by age, race, gender

**Mental Health:**
- 2-3x higher rates of depression
- 1.5-2x higher anxiety disorders
- 2-4x higher suicidal ideation
- Youth particularly affected

**Chronic Disease:**
- Higher rates of obesity in some populations
- Cardiovascular risk factors elevated
- Some evidence of faster aging

## Multilevel Determinants

**Individual:**
- Minority stress processes
- Coping resources and resilience
- Healthcare-seeking behavior

**Interpersonal:**
- Family acceptance/rejection
- Social support networks
- Relationship recognition

**Healthcare System:**
- Provider knowledge and attitudes
- Affirming environment
- Access barriers

**Structural:**
- Legal protections (or lack thereof)
- Policy environment
- Community resources`,
      keyTerms: [
        { term: 'BRFSS', definition: 'Behavioral Risk Factor Surveillance System - CDC population health survey' },
        { term: 'structural stigma', definition: 'Societal conditions and policies that disadvantage minority groups' },
        { term: 'resilience', definition: 'Ability to adapt and thrive despite adversity' },
      ],
      clinicalNotes: 'Screen for minority stress effects. Create affirming environment. Connect with community resources.',
    },
    4: {
      level: 4,
      summary: 'Addressing LGB health disparities requires multilevel interventions targeting individual, healthcare, and structural factors.',
      explanation: `## Intervention Approaches

**Individual Level:**
- Affirmative mental health treatment
- Resilience building
- Health behavior interventions
- Peer support programs

**Healthcare System:**
- Provider training (cultural humility)
- Inclusive intake and documentation
- Affirming physical environment
- Non-discrimination policies

**Community:**
- LGBTQ+ community centers
- Support groups
- Health education programs
- Social support enhancement

**Structural:**
- Non-discrimination laws
- Marriage equality effects
- Conversion therapy bans
- Healthcare coverage policies

## Research Evidence

**Effective Interventions:**
- Affirmative cognitive-behavioral therapy
- Minority stress interventions
- Provider training programs
- Policy change impacts

**Gaps:**
- Limited intervention research
- Bisexual-specific approaches
- Older adult populations
- Intersectionality`,
      keyTerms: [
        { term: 'affirmative therapy', definition: 'Mental health treatment that affirms and supports LGBTQ+ identities' },
        { term: 'cultural humility', definition: 'Ongoing self-reflection and learning about diverse identities' },
        { term: 'conversion therapy', definition: 'Discredited practice attempting to change sexual orientation - harmful and banned in many jurisdictions' },
      ],
      clinicalNotes: 'Implement affirming practices. Train staff in cultural humility. Address both individual and structural factors.',
    },
    5: {
      level: 5,
      summary: 'Eliminating LGB health disparities requires comprehensive approaches addressing minority stress, healthcare access, and health equity.',
      explanation: `## Research Priorities

**Healthy People 2030:**
- Reduce LGB disparities
- Improve data collection
- Increase affirming providers
- Address intersectionality

**Key Research Gaps:**
- Mechanism studies
- Intervention effectiveness
- Life course approaches
- Policy impact evaluation

## Healthcare System Transformation

**Affirming Care Standards:**
- SOGI data collection
- Non-discrimination policies
- Provider competency requirements
- Quality measurement

**Health Equity Focus:**
- LGB disparities in quality metrics
- Targeted improvement initiatives
- Accountability mechanisms

## Policy and Structural Change

**Legal Protections:**
- Non-discrimination laws
- Marriage equality health effects
- Religious exemption concerns
- Insurance coverage parity

**Social Determinants:**
- Housing security
- Employment protections
- Educational settings
- Community safety

## Intersectionality

**Multiple Identities:**
- Race/ethnicity intersections
- Socioeconomic factors
- Disability
- Age-related concerns

**Compounded Disparities:**
- LGBTQ+ people of color
- Rural LGBTQ+ populations
- Older LGBTQ+ adults`,
      keyTerms: [
        { term: 'SOGI', definition: 'Sexual Orientation and Gender Identity - demographic data collection' },
        { term: 'intersectionality', definition: 'How multiple identities combine to create unique experiences and disparities' },
        { term: 'health equity', definition: 'Everyone having fair opportunity to achieve full health potential' },
      ],
      clinicalNotes: 'Collect SOGI data. Address intersectionality. Advocate for protective policies.',
    },
  },

  media: [],
  citations: [{ id: 'hp2030-lgbtq', type: 'website', title: 'Healthy People 2030 - LGBT', source: 'ODPHP' }],
  crossReferences: [{ targetId: 'lgbtq-preventive-care-lgb', targetType: 'concept', relationship: 'sibling', label: 'LGB Preventive Care' }],
  tags: { systems: ['sexual-minority-health'], topics: ['health disparities', 'LGBTQ health'], keywords: ['LGB', 'disparities', 'minority stress'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default lgbHealthDisparities;
