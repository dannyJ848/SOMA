/**
 * Health Disparities Overview
 *
 * Educational content about health disparities and inequities worldwide.
 */

import { EducationalContent } from '../../types';

export const HEALTH_DISPARITIES_OVERVIEW: EducationalContent = {
  id: 'health-disparities-overview',
  type: 'concept',
  name: 'Health Disparities Overview',
  alternateNames: ['Health Inequities', 'Health Inequalities', 'Health Gaps'],

  levels: {
    1: {
      level: 1,
      summary: 'Health disparities are unfair differences in health between groups of people. Some people get sicker and die younger than others simply because of where they live, how much money they have, or their race or ethnicity.',
      explanation: `Not everyone has the same chance to be healthy. Health disparities are unfair differences in health that shouldn't exist.

**Examples of Health Disparities:**
- People in poor countries live 20+ years less than people in rich countries
- In the same city, life expectancy can differ by 15+ years between neighborhoods
- Some racial groups are more likely to die from certain diseases
- Children from poor families get sick more often

**Why Do These Differences Exist?**
- Access to healthcare (some people can't afford doctors)
- Quality of care (some get better treatment than others)
- Living conditions (clean water, safe housing, healthy food)
- Working conditions (dangerous jobs, low pay)
- Education (knowing how to stay healthy)
- Discrimination (unfair treatment)

**This Is Not Just About Being Unlucky:**
These differences follow patterns - the same groups are usually worse off:
- Poor people vs. rich people
- Racial minorities vs. majority groups
- Women in some situations
- People in rural areas
- People with disabilities

**Why Does This Matter?**
- Everyone deserves a chance to be healthy
- These differences can be fixed
- It's not fair that where you're born determines how long you live
- Healthy people make healthy communities and countries

**What Can Help:**
- Making healthcare affordable for everyone
- Improving living conditions in poor areas
- Treating everyone equally regardless of background
- Giving everyone access to education`,
      keyTerms: [
        { term: 'health disparity', definition: 'An unfair difference in health between groups of people' },
        { term: 'inequality', definition: 'When things are not equal or the same between groups' },
        { term: 'discrimination', definition: 'Treating people unfairly because of their race, gender, or other characteristics' },
      ],
      analogies: [
        'Health disparities are like a race where some people start way behind the starting line - they have to work much harder just to catch up.',
        'It\'s like having a ladder to success, but some people\'s ladders have broken rungs.',
      ],
      examples: [
        'A baby born in Japan can expect to live to 84, while a baby born in Sierra Leone may only live to 54.',
        'In the United States, Black women are 3 times more likely to die during pregnancy than white women.',
      ],
    },
    2: {
      level: 2,
      summary: 'Health disparities are systematic, avoidable differences in health outcomes associated with social, economic, demographic, or geographic characteristics. They reflect inequities in the conditions that shape health and access to healthcare.',
      explanation: `Health disparities are not random variations but patterned differences that follow social gradients. Understanding these patterns is essential for addressing them.

**Dimensions of Health Disparities:**

**Socioeconomic:**
- Income and wealth
- Education
- Occupation
- Social class

**Geographic:**
- Urban vs. rural
- Regional variations
- Country-level differences
- Neighborhood effects

**Demographic:**
- Race and ethnicity
- Gender
- Age
- Disability status

**Global Health Disparities:**

| Indicator | High-Income | Low-Income |
|-----------|-------------|------------|
| Life expectancy | 80+ years | 55-65 years |
| Under-5 mortality | 5/1,000 | 70+/1,000 |
| Maternal mortality | 10/100,000 | 500+/100,000 |
| TB mortality | Rare | 50+/100,000 |

**Within-Country Disparities:**

Even in wealthy countries:
- Racial/ethnic gaps in mortality
- Education-mortality gradient
- Income-health gradient
- Rural-urban differences

**Health Equity vs. Equality:**

**Equality:** Everyone gets the same thing
**Equity:** Everyone gets what they need to have fair opportunity

Example: Free healthcare is equal, but equity might require extra support for hard-to-reach populations.

**Social Gradient in Health:**
Health follows a gradient across society - each step up the socioeconomic ladder brings better health. This isn't just a gap between rich and poor.

**Causes of Health Disparities:**

**Proximal (Direct):**
- Healthcare access and quality
- Health behaviors
- Biological factors

**Intermediate:**
- Living conditions
- Working conditions
- Social circumstances

**Distal (Root):**
- Economic policies
- Social policies
- Political context
- Historical factors

**Addressing Disparities:**
- Universal health coverage
- Social protection
- Education access
- Anti-discrimination policies
- Community investment`,
      keyTerms: [
        { term: 'health equity', definition: 'Everyone has a fair and just opportunity to be as healthy as possible' },
        { term: 'social gradient', definition: 'The pattern where health improves at each step up the socioeconomic ladder' },
        { term: 'social determinants', definition: 'Conditions in which people are born, grow, work, and live that shape health' },
        { term: 'avoidable mortality', definition: 'Deaths that could be prevented with effective healthcare or public health' },
      ],
      analogies: [
        'The social gradient is like a staircase where each step represents better health - the goal is to raise everyone up, not just help those at the bottom.',
      ],
    },
    3: {
      level: 3,
      summary: 'Health disparities arise from structural determinants that create differential exposure to risk factors and access to health-promoting resources. The "causes of the causes" framework highlights how social position shapes pathways to health and disease across the life course.',
      explanation: `Health disparities are produced and maintained through complex social, economic, and political mechanisms that operate across multiple levels and time scales.

**Conceptual Framework:**

**Structural Determinants:**
- Socioeconomic and political context
- Governance
- Macroeconomic policies
- Social policies
- Public policies
- Culture and societal values

**Social Position:**
- Social class
- Gender
- Ethnicity/race
- Education
- Income/wealth
- Occupation

**Intermediary Determinants:**
- Material circumstances
- Psychosocial factors
- Behavioral factors
- Biological factors
- Health system

**Measuring Disparities:**

**Absolute Measures:**
- Rate difference (exposed - unexposed)
- Risk difference
- Slope index of inequality (SII)

**Relative Measures:**
- Rate ratio (exposed/unexposed)
- Relative index of inequality (RII)
- Concentration index

**Example Analysis:**
| Group | Mortality Rate | Absolute Diff | Relative Ratio |
|-------|---------------|---------------|----------------|
| Richest quintile | 50/100,000 | Reference | Reference |
| Poorest quintile | 150/100,000 | 100/100,000 | 3.0 |

**Life Course Perspective:**

**Critical Period Model:**
- Exposures during sensitive periods have lasting effects
- Example: Early childhood nutrition and adult health

**Accumulation Model:**
- Disadvantages accumulate over life
- Each additional risk factor compounds

**Chains of Risk:**
- One disadvantage leads to another
- Social causation pathways

**Pathways to Disparities:**

**Healthcare Access:**
- Insurance coverage gaps
- Geographic availability
- Financial barriers
- Transportation

**Healthcare Quality:**
- Differential treatment
- Provider bias
- Communication barriers
- Care coordination

**Exposure to Risks:**
- Environmental hazards
- Occupational risks
- Neighborhood effects
- Food environments

**Protective Factors:**
- Social support
- Economic resources
- Education
- Political power

**Intersectionality:**
Multiple dimensions of disadvantage interact:
- Race + class + gender
- Multiplicative not just additive effects
- Context-specific manifestations`,
      keyTerms: [
        { term: 'structural determinants', definition: 'Fundamental social, economic, and political mechanisms that create social stratification' },
        { term: 'life course approach', definition: 'Framework examining how exposures across life stages shape health' },
        { term: 'intersectionality', definition: 'How multiple social identities (race, class, gender) interact to create unique experiences' },
        { term: 'concentration index', definition: 'Measure of socioeconomic inequality in health, ranging from -1 to +1' },
      ],
      clinicalNotes: 'Assess social circumstances affecting patient health. Consider how social position shapes disease risk and healthcare access. Address structural barriers. Advocate for equity-focused policies.',
    },
    4: {
      level: 4,
      summary: 'Health disparities are produced by structural violence and maintained through institutional mechanisms. Analysis requires examining power relations, historical context, and the political economy of health. Interventions span policy, health systems, and community empowerment.',
      explanation: `**Structural Violence Framework:**

Health disparities as a form of structural violence - systematic ways social structures harm or disadvantage individuals.

**Historical Context:**
- Colonial legacies
- Slavery and its sequelae
- Segregation policies
- Immigration policies
- Genocide and displacement

**Contemporary Mechanisms:**
| Domain | Mechanism | Health Impact |
|--------|-----------|---------------|
| Economic | Wage inequality, wealth gaps | Material deprivation |
| Political | Voter suppression, underrepresentation | Policy neglect |
| Legal | Mass incarceration, immigration enforcement | Healthcare access |
| Educational | School funding disparities | Health literacy |
| Residential | Redlining, environmental racism | Exposure to hazards |

**Empirical Evidence:**

**Racial Disparities (US example):**
- Black-white mortality gap: 74,000 excess deaths/year
- Infant mortality: 2.3x higher for Black infants
- Maternal mortality: 3x higher for Black women
- COVID-19 mortality: 2x higher for Black population

**Explaining Disparities:**
- Socioeconomic factors account for portion but not all
- "Weathering" hypothesis - cumulative stress
- Discrimination effects (chronic stress, acute events)
- Residential segregation

**Policy Approaches:**

**Upstream:**
- Income redistribution
- Educational investment
- Housing policy
- Environmental justice

**Midstream:**
- Healthcare access expansion
- Workplace protections
- Community development
- Food security programs

**Downstream:**
- Targeted healthcare programs
- Health education
- Screening programs
- Case management

**Health System Interventions:**

**Organizational:**
- Workforce diversity
- Cultural competency
- Implicit bias training
- Community health workers

**Care Delivery:**
- Patient navigation
- Language services
- Health literacy approaches
- Equity-focused quality improvement

**Accountability:**

**Monitoring:**
- Stratified data collection
- Equity indicators
- Regular reporting

**Accountability Mechanisms:**
- Accreditation standards
- Payment incentives
- Legal requirements
- Community engagement`,
      keyTerms: [
        { term: 'structural violence', definition: 'Social structures that systematically harm or disadvantage certain groups' },
        { term: 'weathering', definition: 'Hypothesis that chronic stress from discrimination causes premature aging and health decline' },
        { term: 'environmental racism', definition: 'Disproportionate location of environmental hazards in minority communities' },
        { term: 'redlining', definition: 'Historical practice of denying services to residents of certain areas based on race' },
      ],
      clinicalNotes: 'Recognize structural factors affecting patients. Screen for social needs. Connect with resources. Participate in equity-focused quality improvement. Advocate for policy change.',
    },
    5: {
      level: 5,
      summary: 'Health disparities are produced and reproduced through complex interactions of structural determinants, requiring analysis of power, political economy, and historical context. Transformation requires addressing root causes while implementing evidence-based interventions, centering affected communities, and building accountability.',
      explanation: `**Theoretical Frameworks:**

**Political Economy of Health:**
- Capitalism and health
- Welfare state regimes
- Neoliberalism effects
- Globalization impacts

**Critical Race Theory Applied:**
- Racism as structural
- Colorblind ideology limitations
- Interest convergence
- Intersectionality

**Postcolonial Health:**
- Colonial structures persist
- Knowledge production
- Global health as neo-colonialism
- Indigenous health frameworks

**Research Methodologies:**

**Epidemiologic:**
- Decomposition methods
- Mediation analysis
- Causal inference approaches
- Multi-level modeling

**Qualitative:**
- Lived experience
- Community-based participatory
- Photovoice
- Critical ethnography

**Mixed Methods:**
- Intervention development
- Implementation research
- Policy analysis

**Intervention Evidence:**

**Policy Interventions:**
| Intervention | Evidence | Impact |
|-------------|----------|--------|
| Minimum wage | Moderate | Improved health |
| EITC | Strong | Reduced low birth weight |
| Medicaid expansion | Strong | Reduced mortality |
| Housing vouchers | Moderate | Improved mental health |

**Healthcare Interventions:**
| Intervention | Evidence |
|-------------|----------|
| Patient navigation | Moderate |
| Community health workers | Strong |
| Implicit bias training | Limited |
| Quality improvement | Variable |

**Political Dimensions:**

**Power Analysis:**
- Who sets the agenda?
- Whose knowledge counts?
- Who benefits from status quo?
- What are change levers?

**Social Movements:**
- Health as civil right
- Environmental justice
- Reproductive justice
- Disability rights

**Future Directions:**

**Research:**
- Structural intervention evaluation
- Implementation in context
- Community-driven research
- Accountability mechanisms

**Practice:**
- Health equity in all policies
- Anti-racist practice
- Community power building
- Reparative approaches

**Transformation:**
- Universal programs with equity lens
- Wealth redistribution
- Democratic participation
- Decolonization`,
      keyTerms: [
        { term: 'political economy of health', definition: 'Analysis of how economic and political systems shape population health' },
        { term: 'interest convergence', definition: 'Theory that advances for marginalized groups occur when aligned with dominant group interests' },
        { term: 'reparative justice', definition: 'Approaches addressing historical harms through repair and restoration' },
        { term: 'decomposition methods', definition: 'Statistical techniques separating disparities into component causes' },
      ],
      clinicalNotes: 'Engage with structural analysis. Participate in advocacy. Center community voice. Practice cultural humility. Support system transformation.',
    },
  },

  media: [],
  citations: [
    {
      id: 'who-health-equity',
      type: 'website',
      title: 'Health Equity',
      source: 'World Health Organization',
      url: 'https://www.who.int/health-topics/health-equity',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
  ],

  crossReferences: [
    { targetId: 'geographic-disparities', targetType: 'topic', relationship: 'child', label: 'Geographic Disparities' },
    { targetId: 'economic-disparities', targetType: 'topic', relationship: 'child', label: 'Economic Disparities' },
    { targetId: 'sdoh-overview', targetType: 'topic', relationship: 'related', label: 'Social Determinants of Health' },
  ],

  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'health-equity', 'social-justice'],
    keywords: ['health disparities', 'health equity', 'inequalities', 'social determinants'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
