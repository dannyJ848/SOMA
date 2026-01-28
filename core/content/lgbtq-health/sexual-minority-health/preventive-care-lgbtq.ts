/**
 * Preventive Care for LGBTQ+ Individuals - Screenings and Health Maintenance
 *
 * Covers preventive healthcare recommendations specific to LGBTQ+ populations,
 * including screenings, immunizations, and health promotion strategies.
 */

import { EducationalContent } from '../../types';

export const preventiveCareLgbtq: EducationalContent = {
  id: 'lgbtq-preventive-care-lgbtq',
  type: 'concept',
  name: 'Preventive Care for LGBTQ+ Individuals',
  alternateNames: ['LGBTQ+ Health Screenings', 'Queer Preventive Health', 'LGBTQ+ Wellness'],

  levels: {
    1: {
      level: 1,
      summary: 'Preventive care helps LGBTQ+ people stay healthy by catching problems early and preventing illness through regular checkups, screenings, and vaccines.',
      explanation: `Preventive care means taking care of your health before you get sick. LGBTQ+ people need the same preventive care as everyone, plus some specific things.

**Why Preventive Care Matters:**

- Catches health problems early when easier to treat
- Prevents some diseases entirely
- Keeps you feeling your best
- Gives you peace of mind

**Regular Checkups:**

Everyone should have:
- Annual physical exams
- Blood pressure checks
- Cholesterol screening (varies by age)
- Diabetes screening (varies by risk)

**Vaccinations (Shots):**

Important vaccines for LGBTQ+ people:
- **HPV vaccine**: Prevents certain cancers, recommended for everyone
- **Hepatitis A and B**: Especially important for sexually active people
- **Flu shot**: Every year
- **COVID-19**: Stay up to date

**STI Testing:**

Regular testing is important if you are sexually active:
- HIV testing
- Other STI tests based on your situation
- Talk to your doctor about how often to test

**Cancer Screenings:**

Get screened based on your body parts, not just your identity:
- Cervical cancer screening (if you have a cervix)
- Breast/chest cancer screening
- Colon cancer screening (starts at 45)

**Mental Health:**

- Check in about stress, mood, and anxiety
- Talk about minority stress
- Get help if needed

**Healthy Habits:**

- Exercise regularly
- Eat healthy foods
- Limit alcohol
- Do not smoke
- Get enough sleep

**Questions to Ask Your Doctor:**

- "What screenings do I need based on my situation?"
- "Am I up to date on vaccines?"
- "Should I be tested for STIs?"
- "Are there any preventive medications I should consider?"

**Remember:** Prevention is the best medicine!`,
      keyTerms: [
        { term: 'preventive care', definition: 'Healthcare focused on keeping you healthy and catching problems early' },
        { term: 'screening', definition: 'Tests to find health problems before you have symptoms' },
        { term: 'vaccine', definition: 'A shot that helps your body fight diseases before you get them' },
        { term: 'STI', definition: 'Sexually Transmitted Infection; infections passed through sexual contact' },
      ],
      analogies: [
        'Preventive care is like maintaining a car - regular check-ups prevent big problems',
        'Vaccines are like training your immune system to fight diseases before they attack',
      ],
      examples: [
        'Miguel gets annual checkups and STI tests to stay healthy and catch any problems early',
        'Sarah makes sure to get her HPV vaccine and cervical cancer screenings regularly',
      ],
      patientCounselingPoints: [
        'Schedule regular checkups even when you feel healthy',
        'Tell your doctor about your sexual practices so they can recommend the right tests',
        'Make sure you are up to date on vaccines',
        'Talk about your mental health at visits too',
      ],
    },
    2: {
      level: 2,
      summary: 'LGBTQ+ preventive care includes standard screenings plus specific recommendations for sexual health, cancer prevention, mental health, and immunizations based on individual risk factors.',
      explanation: `## Preventive Care Overview

Preventive care for LGBTQ+ individuals includes:
1. Standard age-appropriate screenings
2. Additional screenings based on sexual practices
3. Specific immunizations
4. Mental health assessment
5. Lifestyle counseling

## Standard Preventive Care

**All Adults:**
- Annual wellness visits
- Blood pressure screening
- Lipid screening (varies by age and risk)
- Diabetes screening (varies by risk)
- Colorectal cancer screening (starts at 45)

**Age-Specific:**
- 20s-30s: Establish care, baseline screenings
- 40s-50s: Increased cancer screening
- 60s+: Bone density, fall prevention

## Sexual Health Screenings

**HIV Testing:**
- At least once for all adults
- Annual or more frequent for MSM
- Based on risk factors

**STI Screening:**

*Men Who Have Sex with Men (MSM):*
- Annual or more frequent: Syphilis, gonorrhea, chlamydia
- Extragenital testing (throat, rectal) based on practices
- Hepatitis C if HIV-positive

*Women Who Have Sex with Women (WSW):*
- Often overlooked but still needed
- HPV-related screening
- STI testing based on practices

**Frequency:**
- Every 3 months for high-risk individuals
- Annually at minimum for sexually active
- More frequent after new partners or STI diagnosis

## HIV Prevention

**PrEP (Pre-Exposure Prophylaxis):**
- Highly effective HIV prevention medication
- Daily pill or injectable option
- For those at substantial risk
- Regular monitoring required

**Who Should Consider PrEP:**
- MSM with recent STI or multiple partners
- Anyone with HIV-positive partner
- Those with inconsistent condom use
- Sex workers
- Injection drug users sharing equipment

## Cancer Screening

**Cervical Cancer:**
- Based on having a cervix, not gender identity
- Pap smear starting at 21 or 25
- HPV testing according to guidelines
- Do not skip - WSW still need screening

**Breast/Chest Cancer:**
- Mammogram starting at 40-50
- Trans men may still need screening
- Risk assessment important

**Anal Cancer:**
- No universal screening guidelines
- Consider for high-risk MSM
- HIV-positive individuals
- History of anal warts

**Colorectal Cancer:**
- Starting at 45 for average risk
- Earlier with family history
- Several testing options

## Immunizations

**Hepatitis A:**
- Recommended for MSM
- Two-dose series

**Hepatitis B:**
- Recommended for all sexually active people
- Three-dose series

**HPV (Human Papillomavirus):**
- Through age 26 (may be given to 45)
- Prevents several cancers
- Three-dose series

**Meningococcal:**
- Consider for MSM
- Outbreaks have occurred in community

**Standard Vaccines:**
- Annual flu shot
- COVID-19
- Tdap booster
- Shingles (age 50+)

## Mental Health

**Assessment:**
- Depression and anxiety screening
- Substance use screening
- Minority stress evaluation
- Suicidality assessment

**Prevention:**
- Stress management
- Social support encouragement
- Community connection
- Early intervention

## Lifestyle Counseling

**Tobacco:**
- Higher rates in LGBTQ+ population
- Cessation counseling
- Resources and medications

**Alcohol and Substances:**
- Elevated risk in community
- Screening and brief intervention
- Treatment resources

**Exercise and Nutrition:**
- Physical activity counseling
- Healthy eating guidance
- Weight management support`,
      keyTerms: [
        { term: 'PrEP', definition: 'Pre-exposure prophylaxis; medication taken to prevent HIV infection' },
        { term: 'extragenital testing', definition: 'STI testing at non-genital sites such as throat and rectum' },
        { term: 'HPV', definition: 'Human Papillomavirus; virus that can cause genital warts and certain cancers' },
        { term: 'Pap smear', definition: 'Test for cervical cancer involving cell collection from the cervix' },
        { term: 'MSM', definition: 'Men who have sex with men; behavioral category for health recommendations' },
      ],
      patientCounselingPoints: [
        'PrEP is highly effective and may be right for you - ask your doctor',
        'Get screened for cancer based on your body parts, regardless of your identity',
        'HPV vaccination prevents several cancers and is recommended for most adults',
        'Mental health is part of preventive care - discuss stress and mood at visits',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based LGBTQ+ preventive care integrates sexual health guidelines, cancer screening protocols, immunization recommendations, and mental health assessment with attention to minority stress and health disparities.',
      explanation: `## Evidence-Based Framework

**Guideline Sources:**
- CDC/USPSTF recommendations
- AAFP guidelines
- Fenway Health protocols
- WPATH Standards of Care (transgender)

**Key Principles:**
- Risk-based screening
- Non-assumption of practices
- Organ-based cancer screening
- Minority stress consideration

## Sexual Health Guidelines

**HIV Screening (CDC):**
- All adolescents and adults at least once
- Annual for MSM
- More frequent with elevated risk
- 4th generation testing preferred

**STI Screening (CDC):**

*MSM:*
- At least annual: HIV, syphilis, gonorrhea (3-site), chlamydia (3-site)
- Every 3-6 months: If multiple/anonymous partners, substance use during sex, or methamphetamine use

*WSW:*
- Risk-based approach
- HPV transmission documented
- Cervical screening per guidelines

*Bisexual Individuals:*
- Based on practices with all partners
- May have unique patterns

## PrEP Implementation

**Indications:**
- MSM with STI in past 6 months
- MSM with multiple partners
- Anyone with HIV-positive partner
- Inconsistent condom use with high-risk partners
- Injection drug use with sharing

**Regimens:**
- Daily TDF/FTC (Truvada)
- Daily TAF/FTC (Descovy) - MSM and trans women
- On-demand 2-1-1 (MSM only)
- Injectable cabotegravir (Apretude)

**Monitoring:**
- HIV testing before and quarterly
- Creatinine monitoring
- STI screening at visits
- Pregnancy testing if applicable

## Cancer Screening

**Cervical Cancer:**
- Guidelines unchanged for WSW
- Screening starts at 21 (Pap) or 25 (HPV primary)
- Trans men with cervix need screening
- May require sensitivity in procedure

**Anal Cancer:**
- No USPSTF recommendation
- Consider screening in:
  - HIV-positive MSM
  - History of anal HSIL
  - History of cervical HSIL (trans women)
- High-resolution anoscopy if abnormal

**Breast Cancer:**
- Standard guidelines for cisgender women
- Trans women: Limited data, consider after 5+ years hormones
- Trans men: Screening based on remaining tissue and risk

## Immunizations

**ACIP Recommendations:**

| Vaccine | LGBTQ+ Considerations |
|---------|----------------------|
| Hepatitis A | MSM, PWID |
| Hepatitis B | All at risk of STIs |
| HPV | Through 26 (catch-up to 45) |
| Meningococcal ACWY | Consider for MSM |
| Meningococcal B | During outbreaks |

## Mental Health Integration

**Minority Stress Assessment:**
- Discrimination experiences
- Concealment stress
- Internalized stigma
- Rejection anticipation

**Screening Tools:**
- PHQ-9 (depression)
- GAD-7 (anxiety)
- AUDIT-C (alcohol)
- Drug use screening

**Intervention:**
- Brief intervention for substance use
- Referral for mental health treatment
- Community resource connection
- Follow-up planning

## Cardiometabolic Health

**Risk Assessment:**
- Traditional risk factors
- Minority stress contribution
- Hormone therapy considerations
- Smoking cessation priority

**Screening:**
- Lipid panel per guidelines
- Diabetes screening per guidelines
- Blood pressure monitoring
- Weight and BMI

## Documentation and Follow-Up

**SOGI Data:**
- Sexual orientation and gender identity
- Confidential documentation
- Use for appropriate care

**Reminder Systems:**
- Screening due alerts
- Immunization tracking
- Follow-up scheduling`,
      keyTerms: [
        { term: 'USPSTF', definition: 'U.S. Preventive Services Task Force; makes evidence-based screening recommendations' },
        { term: 'ACIP', definition: 'Advisory Committee on Immunization Practices; makes vaccine recommendations' },
        { term: 'HSIL', definition: 'High-grade squamous intraepithelial lesion; precancerous cell changes' },
        { term: 'high-resolution anoscopy', definition: 'Procedure using magnification to examine anal canal for abnormal tissue' },
        { term: '2-1-1 dosing', definition: 'On-demand PrEP: 2 pills before sex, 1 daily for 2 days after' },
      ],
      clinicalNotes: 'Apply organ-based cancer screening regardless of gender identity. Offer PrEP proactively to eligible patients. Screen for minority stress alongside standard mental health screening. Document SOGI data to enable appropriate reminders and population health management.',
    },
    4: {
      level: 4,
      summary: 'Advanced LGBTQ+ preventive care integrates precision prevention principles, addresses intersectionality, optimizes screening implementation, and uses systems approaches to reduce disparities in preventive service utilization.',
      explanation: `## Precision Prevention

**Risk Stratification:**
- Individual risk assessment
- Behavior-based recommendations
- Personalized screening intervals
- Tailored counseling

**Intersectional Considerations:**
- Race/ethnicity
- Socioeconomic status
- Geographic location
- Disability
- Immigration status

**Social Determinants:**
- Insurance coverage
- Healthcare access
- Transportation
- Language barriers
- Trust and discrimination experiences

## Advanced Sexual Health

**PrEP Optimization:**
- Adherence support strategies
- Injectable PrEP for adherence challenges
- DoxyPEP consideration (emerging)
- Comprehensive sexual health approach

**STI Prevention Integration:**
- Behavioral counseling
- Partner notification support
- Vaccination optimization
- Risk reduction support

**Emerging Pathogens:**
- Mpox vaccination and awareness
- Resistant STI monitoring
- Hepatitis C in MSM

## Cancer Prevention Excellence

**HPV-Related Cancers:**
- Vaccination optimization
- Catch-up vaccination strategies
- Anal cancer screening protocols
- Oral cancer awareness

**Screening Optimization:**
- Reducing barriers to cervical screening
- Trans-inclusive mammography
- Risk-appropriate colorectal screening
- Shared decision-making

**Survivorship:**
- LGBTQ+-affirming survivorship care
- Fertility considerations
- Sexual health post-treatment
- Mental health support

## Mental Health Integration

**Universal Screening:**
- Depression and anxiety
- Suicidality
- Substance use disorders
- Trauma and PTSD

**Minority Stress Interventions:**
- Evidence-based approaches
- Community connection
- Affirming therapy referrals
- Group interventions

**Substance Use:**
- Screening, Brief Intervention, Referral to Treatment (SBIRT)
- Tobacco cessation
- Harm reduction approaches
- LGBTQ+-affirming treatment

## Cardiovascular Prevention

**Risk Assessment:**
- ASCVD risk calculation
- Hormone therapy considerations
- Smoking and disparities
- Stress contribution

**Primary Prevention:**
- Statin therapy decisions
- Aspirin recommendations
- Blood pressure management
- Diabetes prevention

## Implementation Science

**Barriers to Preventive Care:**
- Healthcare discrimination
- Provider competency gaps
- Insurance limitations
- Geographic access
- Historical mistrust

**Facilitators:**
- LGBTQ+-competent providers
- Community health centers
- Patient navigation
- Telehealth expansion
- Affirming environments

**Quality Improvement:**
- Disparity tracking
- Screening rate monitoring
- Intervention effectiveness
- Patient experience

## Systems-Level Interventions

**EHR Optimization:**
- SOGI data capture
- Clinical decision support
- Reminder systems
- Registry functions

**Team-Based Care:**
- Care coordination
- Panel management
- Health coaching
- Community health workers

**Population Health:**
- Outreach strategies
- Gap closure
- High-risk identification
- Resource allocation

## Special Populations

**Adolescents:**
- Confidential services
- Vaccination completion
- Sexual health education
- Mental health support

**Older Adults:**
- Age-appropriate screening
- Isolation prevention
- Advance care planning
- Affirming aging services

**Rural LGBTQ+:**
- Telehealth utilization
- Travel support
- Community building
- Provider education`,
      keyTerms: [
        { term: 'DoxyPEP', definition: 'Doxycycline post-exposure prophylaxis; emerging approach to prevent bacterial STIs' },
        { term: 'SBIRT', definition: 'Screening, Brief Intervention, and Referral to Treatment; evidence-based substance use approach' },
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease; risk calculation guides prevention' },
        { term: 'clinical decision support', definition: 'EHR tools providing recommendations at point of care' },
        { term: 'panel management', definition: 'Proactive population health approach to care for patient panel' },
      ],
      clinicalNotes: `Implementation strategies:
1. Implement EHR-based SOGI data collection and decision support
2. Track preventive care disparities by sexual orientation and gender identity
3. Use team-based care for outreach and gap closure
4. Consider injectable PrEP for patients with adherence challenges
5. Integrate mental health and substance use screening universally
6. Develop affirming care competencies across all staff`,
    },
    5: {
      level: 5,
      summary: 'Expert-level LGBTQ+ preventive care encompasses research leadership, guideline development, policy advocacy, training innovation, and systems transformation to achieve health equity in preventive services.',
      explanation: `## Research Leadership

**Priority Areas:**
- Effectiveness of LGBTQ+-specific interventions
- Optimal screening intervals
- Implementation strategies
- Health outcomes research
- Disparities elimination

**Methodological Considerations:**
- Inclusive sampling
- Intersectional approaches
- Community engagement
- Mixed methods
- Implementation science

**Knowledge Translation:**
- Guideline development participation
- Dissemination strategies
- Practice transformation
- Policy briefs

## Guideline Development

**Participation:**
- USPSTF processes
- CDC guideline development
- Professional society guidelines
- Expert panel contribution

**Advocacy:**
- Evidence synthesis
- Gap identification
- Recommendation development
- Minority population inclusion

**Implementation:**
- Guideline dissemination
- Training development
- Quality measure creation
- Adoption monitoring

## Policy Expertise

**Coverage Policy:**
- Preventive services coverage
- PrEP access
- Screening coverage
- No-cost sharing requirements

**Quality Requirements:**
- HEDIS measure inclusion
- Value-based care metrics
- Health plan requirements
- Accreditation standards

**Data Policy:**
- SOGI data collection mandates
- Privacy protections
- Research data access
- Surveillance integration

## Training Innovation

**Curriculum Development:**
- Competency frameworks
- Assessment methods
- Interprofessional education
- Simulation training

**Faculty Development:**
- Train-the-trainer programs
- Scholarly activity support
- Clinical teaching skills
- Mentorship

**Continuing Education:**
- Maintenance of competency
- Quality improvement integration
- Practice transformation
- Peer learning

## Systems Transformation

**Organizational Change:**
- Leadership engagement
- Strategic planning
- Policy development
- Resource allocation
- Accountability

**Quality Improvement:**
- Disparity elimination goals
- Process improvement
- Outcome tracking
- Continuous improvement

**Technology:**
- EHR optimization
- Decision support
- Patient engagement
- Data analytics

## Health Equity Focus

**Disparity Measurement:**
- Stratified metrics
- Intersectional analysis
- Trend monitoring
- Root cause analysis

**Targeted Interventions:**
- High-risk population focus
- Barrier reduction
- Community partnership
- Resource allocation

**Accountability:**
- Transparent reporting
- Goal setting
- Progress monitoring
- Leadership commitment

## Emerging Directions

**Precision Prevention:**
- Biomarker development
- Risk stratification
- Personalized recommendations
- Implementation

**Digital Innovation:**
- Patient-facing tools
- Remote monitoring
- AI applications
- Telehealth optimization

**Social Determinants:**
- Upstream interventions
- Community health
- Policy change
- Intersectoral collaboration

## Professional Development

**Leadership Competencies:**
- Systems thinking
- Change management
- Coalition building
- Communication
- Advocacy

**Career Development:**
- Academic pathways
- Clinical leadership
- Policy leadership
- Advocacy leadership
- Public health leadership

**Networks:**
- Professional organizations
- Research collaboratives
- Policy networks
- Advocacy coalitions

**Sustainability:**
- Work-life integration
- Mentorship
- Succession planning
- Community care`,
      keyTerms: [
        { term: 'HEDIS', definition: 'Healthcare Effectiveness Data and Information Set; quality measures used by health plans' },
        { term: 'value-based care', definition: 'Healthcare delivery rewarding quality and outcomes rather than volume' },
        { term: 'intersectoral collaboration', definition: 'Partnership across sectors (health, housing, education) for health improvement' },
        { term: 'health equity', definition: 'Attainment of highest level of health for all; requires addressing obstacles to health' },
        { term: 'knowledge translation', definition: 'Process of moving research findings into clinical practice and policy' },
      ],
      clinicalNotes: `Leadership priorities:
1. Participate in guideline development processes
2. Advocate for LGBTQ+-inclusive quality measures
3. Lead organizational transformation for affirming care
4. Develop and disseminate training programs
5. Conduct research advancing prevention science
6. Build coalitions for policy change

Key organizations:
- GLMA: Health Professionals Advancing LGBTQ Equality
- Fenway Health National LGBTQIA+ Health Education Center
- CDC Division of HIV/AIDS Prevention
- USPSTF
- National LGBTQ Task Force
- National Quality Forum`,
    },
  },

  media: [],

  citations: [
    {
      id: 'cdc-std-guidelines',
      type: 'website',
      title: 'Sexually Transmitted Infections Treatment Guidelines',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/std/treatment-guidelines/',
    },
    {
      id: 'uspstf-recommendations',
      type: 'website',
      title: 'USPSTF A and B Recommendations',
      source: 'U.S. Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation-topics/uspstf-and-b-recommendations',
    },
    {
      id: 'cdc-prep-guidelines',
      type: 'website',
      title: 'PrEP Clinical Guidelines',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/hiv/clinicians/prevention/prep.html',
    },
    {
      id: 'fenway-clinical-protocols',
      type: 'website',
      title: 'Clinical Protocols and Guidelines',
      source: 'Fenway Health',
      url: 'https://www.lgbtqiahealtheducation.org/publication/clinical-protocols/',
    },
  ],

  crossReferences: [
    { targetId: 'lgbtq-sexual-minority-health-overview', targetType: 'concept', relationship: 'sibling', label: 'Sexual Minority Health Overview' },
    { targetId: 'lgbtq-gender-affirming-care', targetType: 'concept', relationship: 'related', label: 'Gender-Affirming Care' },
    { targetId: 'preventive-care-overview', targetType: 'concept', relationship: 'related', label: 'Preventive Care Overview' },
  ],

  tags: {
    systems: ['lgbtq-health'],
    topics: ['preventive care', 'LGBTQ health', 'screenings', 'immunizations'],
    keywords: ['preventive care', 'LGBTQ', 'screening', 'PrEP', 'STI testing', 'cancer screening', 'vaccinations'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default preventiveCareLgbtq;
