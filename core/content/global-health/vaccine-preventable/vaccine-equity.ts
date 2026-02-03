/**
 * Vaccine Equity
 *
 * Educational content about equitable access to vaccines globally,
 * addressing disparities and strategies for achieving vaccine equity.
 */

import { EducationalContent } from '../../types';

export const VACCINE_EQUITY: EducationalContent = {
  id: 'vaccine-equity',
  type: 'concept',
  name: 'Vaccine Equity',
  alternateNames: ['Vaccination Equity', 'Immunization Equity', 'Fair Vaccine Access'],

  levels: {
    1: {
      level: 1,
      summary: 'Vaccine equity means making sure everyone in the world has a fair chance to get vaccines, no matter how rich or poor they are, or where they live.',
      explanation: `Vaccines save millions of lives, but not everyone has the same chance to get them. Vaccine equity is about making sure this changes.

**What Is Vaccine Equity?**
It means everyone should have a fair opportunity to be vaccinated - not just people in rich countries or wealthy families.

**Why Don't Some People Get Vaccines?**

**Cost:**
- Vaccines can be expensive
- Poor families may not afford healthcare visits
- Poor countries may not have money for vaccines

**Location:**
- People in remote villages far from clinics
- No roads or transportation
- Health workers don't reach these areas

**Information:**
- Some people don't know about vaccines
- Misinformation spreads fear about vaccines
- Language barriers

**Other Barriers:**
- Wars and conflicts
- Discrimination against certain groups
- Women can't travel alone in some places

**The COVID-19 Lesson:**
When COVID-19 vaccines were developed, rich countries got them first. Many poorer countries had to wait much longer, even though the disease was spreading everywhere.

**Why Equity Matters:**

**For Everyone:**
- Diseases don't stop at borders
- If one country has outbreaks, it affects others
- We're all safer when everyone is protected

**For Fairness:**
- Everyone deserves protection
- Children shouldn't suffer because they were born in a poor country
- Health is a human right

**What Can Help:**
- Sharing vaccines between countries
- Making vaccines affordable
- Sending health workers to hard-to-reach places
- Fighting misinformation with truth`,
      keyTerms: [
        { term: 'equity', definition: 'Fairness - making sure everyone gets what they need to have the same opportunities' },
        { term: 'access', definition: 'Being able to get or use something, like vaccines' },
        { term: 'barrier', definition: 'Something that blocks or makes it harder to do something' },
      ],
      analogies: [
        'Vaccine equity is like making sure everyone gets a piece of cake at a party, not just the kids closest to the cake.',
        'It\'s like building bridges to every village, not just the ones near the highway.',
      ],
      examples: [
        'During COVID-19, some countries had vaccinated most adults while others had barely started.',
        'A child born in a wealthy country is much more likely to get all their vaccines than a child born in a poor country.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vaccine equity refers to the fair distribution of vaccines globally and within countries, ensuring all populations have access regardless of income, geography, or social status. Significant disparities persist between and within countries.',
      explanation: `Vaccine equity is both a moral imperative and a practical necessity for global health security. Despite progress, major inequities persist in vaccine access and coverage.

**Dimensions of Vaccine Inequity:**

**1. Between Countries (Global):**
| Income Group | DTP3 Coverage (2022) |
|--------------|---------------------|
| High-income | 93% |
| Upper-middle-income | 91% |
| Lower-middle-income | 84% |
| Low-income | 72% |

**2. Within Countries:**
- Wealth quintile: Poorest 20% vs. richest 20%
- Geographic: Urban vs. rural
- Gender: Boys vs. girls in some contexts
- Ethnic/racial disparities
- Education levels of caregivers

**COVID-19 Exposed Inequity:**
By end of 2021:
- High-income countries: ~70% vaccinated
- Low-income countries: ~4% vaccinated
- "Vaccine apartheid" widely criticized

**Causes of Inequity:**

**Supply-Side:**
- High vaccine prices
- Limited manufacturing capacity in LMICs
- Intellectual property restrictions
- Supply chain challenges

**Demand-Side:**
- Vaccine hesitancy
- Lack of awareness
- Cultural barriers
- Trust in health systems

**Health System:**
- Weak infrastructure
- Health worker shortages
- Poor cold chain
- Inadequate funding

**Structural:**
- Poverty
- Conflict and instability
- Gender inequality
- Geographic isolation

**Approaches to Vaccine Equity:**

**Global Mechanisms:**
- Gavi: Funds vaccines for poorest countries
- COVAX: Aimed for equitable COVID vaccine distribution
- WHO prequalification: Ensures quality generics

**Pricing Strategies:**
- Tiered pricing by income
- Advance market commitments
- Technology transfer
- Local manufacturing support

**Reaching Underserved:**
- Outreach and mobile services
- Community health workers
- Integrating with other health services
- Removing financial barriers

**Addressing Hesitancy:**
- Community engagement
- Trusted messengers
- Addressing specific concerns
- Combating misinformation`,
      keyTerms: [
        { term: 'vaccine equity', definition: 'Fair access to vaccines for all people regardless of their circumstances' },
        { term: 'COVAX', definition: 'Global initiative for equitable COVID-19 vaccine access' },
        { term: 'tiered pricing', definition: 'Charging different prices based on country income level' },
        { term: 'advance market commitment', definition: 'Guaranteed funding for vaccines to incentivize development for poor countries' },
      ],
      analogies: [
        'The global vaccine system has been like a restaurant where rich customers get served first, even if others arrived earlier and are hungrier.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vaccine equity encompasses fair access, distribution, and uptake of vaccines, requiring attention to structural determinants, health system capacity, and global governance mechanisms. The COVID-19 pandemic highlighted and exacerbated existing inequities while catalyzing new equity-focused initiatives.',
      explanation: `Vaccine equity operates at multiple levels - global (between countries), national (between populations), and individual (between people) - requiring coordinated strategies across all levels.

**Framework for Understanding Vaccine Inequity:**

**Structural Determinants:**
- Global political economy
- Colonial legacies
- Trade and intellectual property regimes
- Geopolitical dynamics

**Intermediate Determinants:**
- Health system strength
- Governance capacity
- Social protection systems
- Civil society engagement

**Proximal Determinants:**
- Service availability
- Geographic access
- Financial access
- Information access
- Social-cultural factors

**Measuring Equity:**

**Coverage Indicators by:**
- Wealth quintile
- Education level
- Urban/rural residence
- Geographic region
- Gender/sex
- Ethnicity/race
- Disability status

**Equity Metrics:**
| Metric | Definition |
|--------|------------|
| Slope Index of Inequality | Absolute difference between highest and lowest groups |
| Concentration Index | Relative measure of inequality distribution |
| Coverage Gap | Difference from universal coverage |

**Global Architecture for Equity:**

**Gavi, the Vaccine Alliance:**
- Supports 57 countries (former 73)
- Co-financing model builds sustainability
- Has helped vaccinate >1 billion children
- Market shaping reduces prices

**COVAX Facility:**
- Aimed to provide 2 billion COVID doses by end 2021
- Actually delivered ~1.9 billion by end 2022
- Critiqued for insufficient equity
- Highlighted structural barriers

**Regional Initiatives:**
- African Vaccine Acquisition Trust (AVAT)
- PAHO Revolving Fund
- Regional manufacturing hubs

**Intellectual Property Debates:**

**TRIPS Waiver Proposal:**
- India/South Africa proposal at WTO (2020)
- Aimed to suspend IP for COVID products
- Lengthy negotiations, limited outcome
- Technology transfer remains limited

**Voluntary Licensing:**
- Medicines Patent Pool
- mRNA technology transfer program
- Limited scale of impact

**Within-Country Equity:**

**Identifying Underserved:**
- Zero-dose children analysis
- Subnational coverage data
- Community-level assessment
- Marginalized population mapping

**Reaching Underserved:**
- Periodic Intensification of Routine Immunization (PIRI)
- Urban immunization strategies
- Gender-responsive approaches
- Integration with social protection

**COVID-19 Lessons:**

**What Worked:**
- Unprecedented R&D speed
- Gavi pivot to COVAX
- Dose sharing mechanisms
- Adaptation of delivery systems

**What Failed:**
- Equitable distribution
- Timely access for LMICs
- Technology transfer
- Coordination efficiency`,
      keyTerms: [
        { term: 'concentration index', definition: 'Statistical measure of how health outcomes are distributed across socioeconomic groups' },
        { term: 'TRIPS', definition: 'Trade-Related Aspects of Intellectual Property Rights - WTO agreement covering vaccine patents' },
        { term: 'PIRI', definition: 'Periodic Intensification of Routine Immunization - approach to reach missed children' },
        { term: 'Medicines Patent Pool', definition: 'UN-backed organization licensing medical technologies for low-income countries' },
      ],
      clinicalNotes: 'Assess barriers to vaccination for individual patients. Advocate for equitable programs. Report coverage gaps in underserved communities. Support outreach to marginalized populations.',
    },
    4: {
      level: 4,
      summary: 'Vaccine equity requires addressing structural inequities in global health governance, pharmaceutical systems, and domestic health policies. Analysis reveals tensions between market mechanisms, sovereign interests, and solidarity principles, with COVID-19 providing crucial evidence for reform.',
      explanation: `**Political Economy of Vaccine Inequity:**

**Global Market Failures:**
- R&D prioritizes profitable markets
- Limited manufacturing diversity
- Concentrated supply chains
- Information asymmetries

**Power Dynamics:**
- High-income country influence in global governance
- Pharmaceutical industry lobbying
- Geopolitical vaccine diplomacy
- Civil society and LMIC advocacy

**Historical Context:**
- Colonial extraction patterns
- Structural adjustment impacts on health systems
- Evolution of global health governance
- Pandemic preparedness failures

**COVID-19 Vaccine Equity Analysis:**

**Timeline of Inequity:**
| Date | HIC Coverage | LIC Coverage |
|------|--------------|--------------|
| Jun 2021 | 40% | <1% |
| Dec 2021 | 70% | 4% |
| Jun 2022 | 75% | 15% |
| Dec 2022 | 80% | 25% |

**Contributing Factors:**
1. Advance purchase agreements by HICs
2. Export restrictions
3. Manufacturing concentration
4. COVAX under-resourcing and structural issues
5. Donation timing (near-expiry)
6. Absorption capacity challenges

**COVAX Architecture Analysis:**
- Self-financing facility vs. AMC
- Governance structure (Gavi-led)
- Procurement competition with bilaterals
- Supply allocation mechanism
- Dose sharing vs. direct purchase
- Last-mile delivery challenges

**Equity-Focused Reforms:**

**Global Level:**

*Pandemic Treaty Negotiations:*
- Pathogen access and benefit sharing
- Equity provisions in R&D
- Manufacturing capacity
- Financing mechanisms

*Regional Manufacturing:*
- Africa CDC partnerships
- mRNA hubs initiative
- Technology transfer platforms
- Workforce development

*Financing Reform:*
- Pandemic Fund (World Bank)
- ACT-Accelerator lessons
- Sustainable financing mechanisms
- Domestic resource mobilization

**National Level:**

*Health System Strengthening:*
- Primary health care investment
- Community health worker programs
- Cold chain expansion
- Data systems improvement

*Equity-Focused Programming:*
- Pro-poor targeting
- Gender-responsive approaches
- Disability-inclusive services
- Indigenous and minority populations

**Analytical Frameworks:**

**Health Equity Frameworks:**
- WHO Commission on Social Determinants
- Intersectionality approaches
- Human rights frameworks
- Capabilities approach

**Implementation Analysis:**
| Level | Key Questions |
|-------|--------------|
| Policy | Who shapes priorities? Who benefits? |
| System | How do resources flow? Where are gaps? |
| Service | Who delivers? Who is reached? |
| Community | Who participates? Whose voice counts? |
| Individual | What barriers exist? What enablers? |

**Metrics and Accountability:**

**Equity Indicators:**
- Coverage ratios (advantaged/disadvantaged)
- Zero-dose tracking
- Timeliness of vaccination
- Full vaccination rates

**Accountability Mechanisms:**
- Independent monitoring
- Civil society oversight
- Parliamentary scrutiny
- Community score cards`,
      keyTerms: [
        { term: 'advance purchase agreements', definition: 'Contracts where buyers commit to purchase products before development complete' },
        { term: 'ACT-Accelerator', definition: 'Access to COVID-19 Tools Accelerator - global collaboration including COVAX' },
        { term: 'benefit sharing', definition: 'Principle that those providing biological resources should share in resulting benefits' },
        { term: 'Pandemic Fund', definition: 'World Bank financial intermediary fund for pandemic preparedness' },
      ],
      clinicalNotes: 'Understand structural factors affecting patient access. Engage in policy advocacy. Support equity-focused research. Document disparities to inform interventions.',
    },
    5: {
      level: 5,
      summary: 'Vaccine equity reflects fundamental tensions in global health governance between sovereignty, solidarity, and market logic. Transformative approaches require addressing root causes of inequity including intellectual property regimes, manufacturing concentration, and colonial legacies while building resilient, equitable systems.',
      explanation: `**Theoretical Perspectives on Vaccine Inequity:**

**Critical Global Health:**
- Pharmaceutical colonialism concept
- Epistemic injustice in knowledge production
- Structural violence frameworks
- Decolonization of global health

**Political Philosophy:**
- Cosmopolitan vs. nationalist obligations
- Fair shares approach (vaccine allocation)
- Prioritarian and utilitarian tensions
- Health as capability

**Economic Analysis:**
- Market failure and public goods theory
- Global public goods for health
- Property rights and innovation incentives
- Just pricing debates

**Systemic Analysis:**

**Pharmaceutical System:**
| Issue | Manifestation | Reform Direction |
|-------|--------------|------------------|
| R&D priorities | Neglect of diseases of poverty | Delinkage models |
| IP regime | Access barriers | Flexibilities, pooling |
| Manufacturing | Geographic concentration | Distributed capacity |
| Supply chains | Fragility, dependencies | Resilience, sovereignty |

**Global Governance:**
- WHO authority and financing constraints
- WTO/TRIPS vs. health priorities
- Gavi/CEPI/COVAX architecture
- Regional bodies' roles

**Research Evidence:**

**COVID-19 Modeling:**
- Lives lost due to inequitable distribution
- Economic costs of delayed global vaccination
- Variant emergence risk from low coverage
- Optimal allocation strategies

**Implementation Research:**
- Effective equity interventions
- Context adaptation
- Scale-up barriers
- Sustainability factors

**Transformative Approaches:**

**Addressing Root Causes:**

*Intellectual Property Reform:*
- Compulsory licensing utilization
- Patent pools and clearinghouses
- Alternative innovation models (prizes, grants)
- Open science approaches

*Manufacturing Diversification:*
- Technology transfer mechanisms
- Regional hubs development
- Workforce capacity building
- Regulatory harmonization

*Governance Reform:*
- WHO strengthening
- Democratic participation
- Civil society role
- Accountability mechanisms

**Equity-Centered Design:**

*Principles:*
- Universal coverage as goal
- Progressive universalism
- Leaving no one behind
- Community leadership

*Practices:*
- Participatory priority-setting
- Equity impact assessment
- Disaggregated data use
- Adaptive management

**Future Scenarios:**

**Business as Usual:**
- Persistent 20-year gaps in vaccine access
- Periodic pandemic inequity repeated
- Market-driven innovation continues
- Incremental reforms

**Transformative Change:**
- Pandemic treaty with equity teeth
- Diversified manufacturing ecosystem
- Alternative IP approaches normalized
- Equity metrics drive decisions

**Emerging Issues:**

**Technology:**
- mRNA platform democratization
- Self-amplifying vaccines
- Thermostable formulations
- Novel delivery methods

**Climate:**
- Cold chain sustainability
- Disease emergence patterns
- Supply chain disruptions
- Climate justice intersections

**Research Agenda:**

**Key Questions:**
1. What governance structures enable equity?
2. How to balance innovation incentives with access?
3. What interventions reach the most marginalized?
4. How to measure equity effectively?
5. How to sustain political will for equity?

**Methods:**
- Mixed methods implementation research
- Political economy analysis
- Community-based participatory research
- Modeling and simulation
- Natural experiments evaluation`,
      keyTerms: [
        { term: 'pharmaceutical colonialism', definition: 'Critical concept describing extractive dynamics in global pharmaceutical systems' },
        { term: 'delinkage', definition: 'Separating R&D costs from product prices to improve access' },
        { term: 'progressive universalism', definition: 'Approach prioritizing disadvantaged while moving toward universal coverage' },
        { term: 'epistemic injustice', definition: 'Unfairness in whose knowledge counts and how it is produced' },
      ],
      clinicalNotes: 'Engage with structural inequity as part of clinical practice. Advocate for system change. Participate in equity-focused research. Build solidarity with global health movements.',
    },
  },

  media: [
    {
      id: 'vaccine-equity-map',
      type: 'diagram',
      filename: 'global-vaccine-coverage-equity.svg',
      title: 'Global Vaccine Coverage by Income Level',
      description: 'Map showing disparities in vaccine coverage globally',
    },
    {
      id: 'covax-timeline',
      type: 'diagram',
      filename: 'covid-vaccine-equity-timeline.svg',
      title: 'COVID-19 Vaccine Distribution Timeline',
      description: 'Showing disparity in vaccination rates between high and low-income countries',
    },
  ],

  citations: [
    {
      id: 'who-equity-immunization',
      type: 'website',
      title: 'Achieving immunization equity',
      source: 'World Health Organization',
      url: 'https://www.who.int/teams/immunization-vaccines-and-biologicals/strategies/ia2030',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'lancet-vaccine-equity',
      type: 'article',
      title: 'COVID-19 vaccine equity',
      source: 'The Lancet',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'vaccine-preventable-overview', targetType: 'topic', relationship: 'parent', label: 'Vaccine-Preventable Diseases' },
    { targetId: 'health-disparities-overview', targetType: 'topic', relationship: 'related', label: 'Health Disparities' },
    { targetId: 'economic-disparities', targetType: 'topic', relationship: 'related', label: 'Economic Disparities' },
    { targetId: 'global-health-partnerships', targetType: 'topic', relationship: 'related', label: 'Global Health Partnerships' },
  ],

  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'immunization', 'health-equity'],
    keywords: ['vaccine equity', 'COVAX', 'access', 'disparities', 'global health justice'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
