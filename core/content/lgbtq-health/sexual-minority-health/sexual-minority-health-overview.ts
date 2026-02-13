/**
 * Sexual Minority Health Overview - Health Considerations for LGB+ Individuals
 *
 * Covers health disparities, unique health needs, affirming care, and strategies
 * for optimizing health outcomes for lesbian, gay, bisexual, and other sexual minority individuals.
 */

import { EducationalContent } from '../../types';

export const sexualMinorityHealthOverview: EducationalContent = {
  id: 'lgbtq-sexual-minority-health-overview',
  type: 'concept',
  name: 'Sexual Minority Health Overview',
  alternateNames: ['LGB Health', 'Sexual Minority Healthcare', 'Gay and Lesbian Health'],

  levels: {
    1: {
      level: 1,
      summary: 'Sexual minority individuals (lesbian, gay, bisexual) may face unique health challenges, but with understanding and supportive care, they can live healthy lives.',
      explanation: `Sexual minority people are attracted to people of the same gender or multiple genders. Understanding their health needs helps provide better care.

**Who Are Sexual Minorities?**

- **Lesbian**: Women attracted to women
- **Gay**: People attracted to the same gender (often men attracted to men)
- **Bisexual**: People attracted to more than one gender
- **Other terms**: Queer, pansexual, asexual, and others

**Why Does This Matter for Health?**

Sexual minority people may face:
- Stress from discrimination or hiding their identity
- Difficulty finding doctors who understand their needs
- Some specific health considerations

**Health Needs:**

*For Everyone:*
- Regular checkups
- Vaccinations
- Mental health care
- Healthy lifestyle habits

*Specific Considerations:*
- STI screening based on sexual practices
- Cancer screenings appropriate for anatomy
- Mental health support for discrimination stress
- Substance use awareness

**What is Affirming Care?**

Affirming care means:
- Healthcare providers who respect your identity
- Not making assumptions about relationships or practices
- Asking respectful questions
- Providing appropriate screenings

**Finding Good Healthcare:**

- Look for LGBTQ+-friendly providers
- Be open about identity if comfortable (helps get appropriate care)
- Ask questions about provider experience with LGBTQ+ patients
- Community health centers often have experience

**Being Healthy:**

- Get regular checkups
- Talk openly with your doctor
- Stay connected with supportive people
- Take care of mental health
- Know your risk factors

**Remember:** You deserve healthcare that respects who you are.`,
      keyTerms: [
        { term: 'sexual orientation', definition: 'Who you are attracted to romantically or physically' },
        { term: 'sexual minority', definition: 'People whose sexual orientation is not heterosexual (straight)' },
        { term: 'affirming care', definition: 'Healthcare that respects and supports your identity' },
        { term: 'STI', definition: 'Sexually Transmitted Infection; infections passed through sexual contact' },
      ],
      analogies: [
        'Sexual orientation is like handedness - it is a natural part of who you are',
        'Finding an affirming provider is like finding a good coach - you need someone who understands and supports you',
      ],
      examples: [
        'Maria is a lesbian and found a doctor who respects her relationship and provides appropriate screenings',
        'Carlos is bisexual and his doctor asks respectful questions about his partners to provide the best care',
      ],
      patientCounselingPoints: [
        'You can share your sexual orientation with your doctor if comfortable - it helps them provide better care',
        'Ask about screenings and preventive care specific to your needs',
        'Finding an LGBTQ+-friendly provider can make healthcare more comfortable',
        'Your identity is not a health problem - discrimination and stress can affect health',
      ],
    },
    2: {
      level: 2,
      summary: 'Sexual minority health encompasses unique health disparities, preventive care needs, and affirming care practices to address the health needs of lesbian, gay, bisexual, and other sexual minority individuals.',
      explanation: `## Understanding Sexual Minority Health

**Sexual Minority Categories:**
- Lesbian: Women attracted to women
- Gay: Same-gender attraction (often men attracted to men)
- Bisexual: Attraction to more than one gender
- Other identities: Pansexual, queer, asexual spectrum, fluid, questioning

**Sexual Orientation vs. Behavior:**
- Identity (how someone identifies)
- Attraction (who someone is attracted to)
- Behavior (who someone has sex with)
- These do not always align

## Health Disparities

**Mental Health:**
- Higher rates of depression, anxiety
- Increased suicidality
- Related to minority stress, not orientation itself

**Substance Use:**
- Higher rates of tobacco, alcohol, drugs
- Related to stress and social factors

**Cancer:**
- Lower cancer screening rates
- Some populations at higher risk for certain cancers

**Cardiovascular:**
- Some disparities in cardiovascular health
- Related to stress and risk factors

## Preventive Care

**For All Sexual Minorities:**
- Annual wellness visits
- Age-appropriate cancer screenings
- Immunizations (including HPV, Hep A/B)
- Mental health screening
- Substance use screening

**STI Screening (Based on Practices):**
- HIV screening
- Syphilis, gonorrhea, chlamydia
- Site-specific testing (oral, rectal, genital)
- Frequency based on risk factors

**Men Who Have Sex with Men (MSM):**
- More frequent STI screening
- PrEP consideration
- Anal cancer awareness
- Hepatitis vaccination

**Women Who Have Sex with Women (WSW):**
- May skip cervical cancer screening inappropriately
- HPV transmission occurs between women
- Breast cancer screening
- Appropriate STI screening

## Affirming Healthcare

**Provider Behaviors:**
- Use inclusive language
- Avoid assumptions about partners
- Ask about sexual practices appropriately
- Use correct pronouns/terms
- Create welcoming environment

**Intake and Forms:**
- Sexual orientation questions
- Gender-neutral relationship terms
- "Partners" vs. "husband/wife"
- Confidentiality assurance

**Clinical Approach:**
- Comprehensive sexual history
- Non-judgmental communication
- Appropriate screenings
- Mental health attention

## Finding Affirming Care

**Resources:**
- LGBTQ+ health center directories
- Community recommendations
- Questions to ask potential providers
- Telehealth options expanding access

**Questions for Providers:**
- "Do you have experience with LGBTQ+ patients?"
- "How do you create a welcoming environment?"
- "What training have you received?"

## Support and Resources

- LGBTQ+ community centers
- Support groups
- Online communities
- Mental health resources`,
      keyTerms: [
        { term: 'MSM', definition: 'Men who have sex with men; behavioral category regardless of identity' },
        { term: 'WSW', definition: 'Women who have sex with women; behavioral category regardless of identity' },
        { term: 'PrEP', definition: 'Pre-exposure prophylaxis; medication to prevent HIV' },
        { term: 'minority stress', definition: 'Additional stress from discrimination and stigma experienced by minorities' },
        { term: 'HPV', definition: 'Human papillomavirus; can cause genital warts and certain cancers' },
      ],
      patientCounselingPoints: [
        'Discuss your sexual practices openly with your provider for appropriate preventive care',
        'PrEP can significantly reduce HIV risk for those with risk factors',
        'Mental health screening is important - minority stress affects well-being',
        'Cancer screenings should be based on anatomy and risk factors, not just identity',
      ],
    },
    3: {
      level: 3,
      summary: 'Sexual minority health requires understanding of minority stress frameworks, epidemiological patterns, evidence-based preventive care, and culturally competent care delivery to address documented health disparities.',
      explanation: `## Health Disparities Framework

**Minority Stress Theory:**
- Distal stressors: Discrimination, victimization, rejection
- Proximal stressors: Concealment, internalized stigma, rejection anticipation
- Mediators: Coping, social support
- Outcomes: Physical and mental health

**Social Determinants:**
- Healthcare access and discrimination
- Employment discrimination
- Housing instability
- Social support networks
- Legal protections

## Epidemiology

**Mental Health:**
- Depression: 1.5-2x higher rates
- Anxiety: Significantly elevated
- Suicide attempts: 2-3x higher
- Bisexual individuals: Often highest rates

**Substance Use:**
- Tobacco: 1.5-2x higher rates
- Alcohol misuse: Elevated
- Drug use: Elevated
- Important to address in clinical care

**Sexual Health:**
- HIV: MSM account for majority of new infections
- STIs: Elevated rates in MSM
- WSW: May have unmet screening needs
- Bisexual individuals: Unique patterns

**Cancer:**
- Cervical: WSW may have lower screening rates
- Anal: MSM at elevated risk
- Breast: Possible elevated risk in some groups
- Lung: Related to tobacco disparities

**Cardiovascular:**
- Some evidence of elevated risk
- Related to traditional risk factors + minority stress
- Tobacco contribution

## Clinical Care

**Sexual History:**
- 5 Ps: Partners, Practices, Protection, Past STIs, Pregnancy plans
- Non-judgmental approach
- Site-specific assessment
- Frequency assessment

**Preventive Care Guidelines:**

*HIV Screening:*
- All adults at least once
- Annual or more frequent for MSM
- More frequent with multiple partners or STI diagnosis

*STI Screening (MSM):*
- Annual or more frequent based on risk
- Extragenital testing (pharyngeal, rectal)
- Syphilis, gonorrhea, chlamydia
- Hepatitis C if HIV+

*Cancer Screening:*
- Cervical: Based on anatomy, regardless of identity
- Anal: Consider in high-risk MSM (no consensus guideline)
- Breast: Standard guidelines; consider elevated risk
- Colorectal: Standard guidelines

**PrEP:**
- Indications for MSM and others at risk
- Daily or on-demand options
- Monitoring requirements
- Access and adherence support

## Mental Health

**Assessment:**
- Minority stress evaluation
- Discrimination experiences
- Concealment patterns
- Support systems

**Intervention:**
- Affirming therapy
- Minority stress-focused approaches
- Community connection
- Substance use treatment

## Affirming Practice

**Environmental Factors:**
- Inclusive signage and materials
- Non-discrimination policies
- Staff training
- EHR capacity for SOGI data

**Clinical Competencies:**
- Cultural humility
- Non-judgmental approach
- Appropriate screening
- Resource knowledge

**Special Populations:**
- Bisexual individuals: Unique stressors
- Older adults: Historical context
- People of color: Intersectionality
- Rural populations: Access barriers`,
      keyTerms: [
        { term: '5 Ps', definition: 'Sexual history framework: Partners, Practices, Protection, Past STIs, Pregnancy plans' },
        { term: 'SOGI', definition: 'Sexual Orientation and Gender Identity; data collection in healthcare' },
        { term: 'extragenital testing', definition: 'STI testing at non-genital sites (pharynx, rectum)' },
        { term: 'cultural humility', definition: 'Lifelong commitment to self-evaluation and addressing power imbalances' },
        { term: 'concealment', definition: 'Hiding sexual orientation; associated with psychological distress' },
      ],
      clinicalNotes: 'Collect SOGI data in a respectful, confidential manner. Use the 5 Ps for comprehensive sexual history. Screen for minority stress and mental health. Provide PrEP counseling based on risk assessment. Ensure cancer screening based on anatomy, not identity. Create affirming environment through training and policies.',
    },
    4: {
      level: 4,
      summary: 'Advanced sexual minority health care integrates minority stress theory with clinical practice, addresses intersectionality, and requires systems-level interventions to eliminate health disparities through evidence-based, culturally responsive care.',
      explanation: `## Advanced Minority Stress Framework

**Psychological Mediation:**
- Cognitive appraisal processes
- Emotion regulation
- Coping mechanisms
- Identity management

**Biological Pathways:**
- HPA axis dysregulation
- Inflammatory markers
- Allostatic load
- Telomere effects

**Intersectionality:**
- Race/ethnicity
- Socioeconomic status
- Disability
- Immigration status
- Geographic location

**Resilience Factors:**
- Community connectedness
- Identity pride
- Social support
- Affirming environments

## Clinical Evidence

**PrEP Evidence:**
- iPrEx, PROUD, IPERGAY trials
- >90% efficacy with adherence
- 2-1-1 on-demand dosing (MSM)
- Injectable PrEP (cabotegravir)

**Mental Health Interventions:**
- LGBT-affirmative CBT evidence base
- Minority stress-focused approaches
- Group interventions
- Community-level interventions

**Substance Use:**
- Adapted treatments
- Minority stress focus
- Community context
- Harm reduction

## Specialized Populations

**Bisexual Health:**
- Bi-specific disparities
- Bi erasure effects
- Unique minority stress
- Research underrepresentation

**Older Adults:**
- Historical trauma
- Concealment history
- Isolation risks
- Healthcare discrimination

**Youth:**
- Coming out support
- Family acceptance
- School environment
- Mental health focus

**People of Color:**
- Intersecting oppressions
- Cultural considerations
- Community-specific resources
- Healthcare mistrust

## Systems-Level Considerations

**SOGI Data Collection:**
- Two-step gender questions
- Sexual orientation options
- Privacy protections
- Data use policies
- EHR integration

**Quality Measurement:**
- Disparity tracking
- Patient experience
- Preventive care metrics
- Mental health screening

**Organizational Competency:**
- Leadership commitment
- Policy development
- Training programs
- Community partnerships
- Accountability mechanisms

## Research and Evidence Gaps

**Understudied Areas:**
- Long-term health outcomes
- Lesbian/WSW health
- Bisexual-specific research
- Intersectional approaches
- Intervention effectiveness

**Methodological Issues:**
- Sampling challenges
- Identity vs. behavior
- Longitudinal data
- Intersectionality capture

## Policy and Advocacy

**Healthcare Policy:**
- Non-discrimination protections
- Insurance coverage
- Data collection mandates
- Quality requirements

**Public Health:**
- Targeted interventions
- Community engagement
- Funding priorities
- Surveillance systems

## Training and Education

**Competency Development:**
- Knowledge
- Attitudes
- Skills
- Ongoing education

**Medical Education:**
- Curriculum integration
- Clinical exposure
- Assessment methods
- Faculty development

## Emerging Areas

**Digital Health:**
- Apps for PrEP adherence
- Mental health interventions
- Community connection
- Privacy considerations

**Precision Prevention:**
- Risk stratification
- Tailored interventions
- Biomarker development
- Implementation`,
      keyTerms: [
        { term: 'allostatic load', definition: 'Cumulative physiological wear and tear from chronic stress' },
        { term: 'bi erasure', definition: 'Tendency to ignore or deny bisexual identity or experiences' },
        { term: 'iPrEx', definition: 'Landmark clinical trial demonstrating PrEP efficacy in MSM' },
        { term: 'cabotegravir', definition: 'Injectable PrEP medication given every two months' },
        { term: 'two-step gender question', definition: 'Asking both sex assigned at birth and current gender identity' },
      ],
      clinicalNotes: `Advanced clinical approaches:
1. Apply intersectional lens to patient assessment
2. Consider biological pathways of minority stress
3. Offer injectable PrEP as alternative for adherence challenges
4. Address bi-specific disparities when relevant
5. Implement SOGI data collection systematically
6. Track quality metrics for disparity identification
7. Engage in organizational competency development`,
    },
    5: {
      level: 5,
      summary: 'Expert-level sexual minority health encompasses research leadership, policy expertise, training innovation, and systems transformation to eliminate health disparities through science, advocacy, and institutional change.',
      explanation: `## Research Leadership

**Priority Research Areas:**
- Long-term cohort studies
- Intervention effectiveness
- Implementation science
- Intersectionality methods
- Biomarker development

**Methodological Innovation:**
- Community-engaged approaches
- Mixed methods integration
- Digital data collection
- Administrative data linkage
- Intersectional analysis

**Translation:**
- Guideline development participation
- Practice recommendation synthesis
- Dissemination strategies
- Implementation frameworks

## Policy Expertise

**Policy Analysis:**
- Health policy effects
- Coverage disparities
- Discrimination protections
- Data collection mandates

**Advocacy:**
- Evidence synthesis
- Legislative engagement
- Coalition building
- Media communication

**Regulatory:**
- Quality measure development
- Accreditation standards
- Surveillance systems
- Research funding

## Training Innovation

**Curriculum Development:**
- Competency frameworks
- Assessment methods
- Longitudinal integration
- Interprofessional education

**Faculty Development:**
- Train-the-trainer programs
- Scholarly activity support
- Clinical supervision models
- Mentorship structures

**Continuing Education:**
- Maintenance of competency
- New evidence integration
- Practice transformation
- Quality improvement

## Systems Transformation

**Organizational Change:**
- Leadership engagement
- Policy and procedure development
- EHR optimization
- Quality measurement
- Community accountability

**Network Development:**
- Referral systems
- Specialty access
- Community partnership
- Telehealth integration

**Quality Improvement:**
- Disparity tracking
- Root cause analysis
- Intervention testing
- Sustainability planning

## Special Expertise Areas

**HIV Prevention:**
- PrEP implementation science
- Combination prevention
- Status-neutral approaches
- Community engagement

**Cancer Prevention:**
- Screening optimization
- Risk assessment
- Survivorship care
- Disparities research

**Mental Health:**
- Intervention development
- Implementation science
- Workforce development
- Integration models

**Substance Use:**
- Treatment adaptation
- Harm reduction
- Community context
- Recovery support

## Global Perspectives

**International Context:**
- Legal environment effects
- Healthcare access
- Community responses
- Research priorities

**Global Health Equity:**
- Resource considerations
- Culturally appropriate interventions
- Advocacy strategies
- Research collaboration

## Future Directions

**Precision Health:**
- Risk stratification
- Biomarker application
- Personalized prevention
- Treatment optimization

**Technology:**
- Digital interventions
- AI applications
- Data science
- Privacy protection

**Social Determinants:**
- Structural interventions
- Policy change
- Community development
- Intersectoral collaboration

## Professional Development

**Leadership Skills:**
- Strategic planning
- Coalition building
- Communication
- Change management

**Career Paths:**
- Academic leadership
- Clinical leadership
- Policy leadership
- Advocacy leadership
- Public health leadership

**Sustainability:**
- Work-life integration
- Mentorship networks
- Professional organizations
- Succession planning`,
      keyTerms: [
        { term: 'status-neutral approach', definition: 'HIV prevention framework treating HIV-positive and -negative individuals similarly in care continuum' },
        { term: 'combination prevention', definition: 'Using multiple HIV prevention strategies simultaneously for maximum effect' },
        { term: 'structural intervention', definition: 'Intervention targeting social, economic, or political structures to improve health' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices into routine care' },
        { term: 'intersectoral collaboration', definition: 'Partnership across different sectors (health, housing, education) to address determinants' },
      ],
      clinicalNotes: `Leadership priorities:
1. Lead research advancing sexual minority health evidence
2. Develop policy positions and engage in advocacy
3. Create and disseminate training programs
4. Build organizational competency infrastructure
5. Establish quality metrics and accountability
6. Partner with communities in all work

Key organizations:
- GLMA: Health Professionals Advancing LGBTQ Equality
- Fenway Health National LGBTQIA+ Health Education Center
- Williams Institute
- National LGBTQ Task Force
- CDC Division of HIV/AIDS Prevention
- NIH Sexual and Gender Minority Research Office`,
    },
  },

  media: [],

  citations: [
    {
      id: 'iom-lgbt-health',
      type: 'article',
      title: 'The Health of Lesbian, Gay, Bisexual, and Transgender People: Building a Foundation for Better Understanding',
      source: 'Institute of Medicine',
    },
    {
      id: 'healthy-people-lgbt',
      type: 'website',
      title: 'LGBT Health',
      source: 'Healthy People 2030',
      url: 'https://health.gov/healthypeople/objectives-and-data/browse-objectives/lgbt',
    },
    {
      id: 'cdc-lgbtq-health',
      type: 'website',
      title: 'LGBTQ+ Health',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/lgbthealth/',
    },
    {
      id: 'fenway-clinical-guidelines',
      type: 'website',
      title: 'Clinical Guidelines for Sexual and Gender Minority Health',
      source: 'Fenway Health',
      url: 'https://www.lgbtqiahealtheducation.org/',
    },
  ],

  crossReferences: [
    { targetId: 'lgbtq-preventive-care-lgbtq', targetType: 'concept', relationship: 'sibling', label: 'LGBTQ Preventive Care' },
    { targetId: 'lgbtq-mental-health-lgbtq', targetType: 'concept', relationship: 'related', label: 'LGBTQ Mental Health' },
    { targetId: 'sexual-health-sti-prevention', targetType: 'concept', relationship: 'related', label: 'STI Prevention' },
  ],

  tags: {
    systems: ['lgbtq-health'],
    topics: ['sexual minority health', 'LGB health', 'preventive care', 'health disparities'],
    keywords: ['sexual minority', 'LGB', 'gay health', 'lesbian health', 'bisexual health', 'PrEP', 'affirming care'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default sexualMinorityHealthOverview;
