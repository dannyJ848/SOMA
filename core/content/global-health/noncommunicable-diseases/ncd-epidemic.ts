/**
 * The NCD Epidemic
 *
 * Educational content about the global epidemic of noncommunicable diseases,
 * including cardiovascular disease, cancer, diabetes, and chronic respiratory diseases.
 */

import { EducationalContent } from '../../types';

export const NCD_EPIDEMIC: EducationalContent = {
  id: 'ncd-epidemic',
  type: 'concept',
  name: 'The Global NCD Epidemic',
  alternateNames: ['Noncommunicable Disease Burden', 'Chronic Disease Epidemic', 'NCD Crisis'],

  levels: {
    1: {
      level: 1,
      summary: 'Noncommunicable diseases (NCDs) are chronic illnesses that you can\'t catch from another person. Diseases like heart disease, cancer, and diabetes now kill more people than all other causes combined.',
      explanation: `NCDs are diseases that develop slowly over time and last a long time. Unlike a cold or flu, you can't catch them from someone else.

**The Four Main NCDs:**

**1. Heart Disease and Stroke**
- The #1 killer in the world
- Happens when blood vessels get clogged or damaged
- Can cause heart attacks and strokes

**2. Cancer**
- When cells in the body grow out of control
- Many different types (lung, breast, colon, etc.)
- Second leading cause of death worldwide

**3. Diabetes**
- Body can't control blood sugar properly
- Can damage eyes, kidneys, nerves, and heart
- Getting much more common everywhere

**4. Chronic Respiratory Diseases**
- Long-term lung problems
- Includes COPD (often from smoking) and asthma
- Makes it hard to breathe

**Why Are NCDs Increasing?**

**Changes in How We Live:**
- Eating more processed and fast food
- Less physical activity
- More sitting and screen time
- More stress

**Harmful Substances:**
- Tobacco use (cigarettes cause many NCDs)
- Too much alcohol
- Air pollution

**Living Longer:**
- As fewer people die young from infections, more live long enough to develop NCDs

**The Numbers Are Scary:**
- NCDs cause 41 million deaths per year
- That's 74% of all deaths worldwide
- 77% of NCD deaths are in low and middle-income countries

**What Can Help:**
- Not smoking (or quitting)
- Eating healthy foods
- Exercising regularly
- Limiting alcohol
- Regular health checkups`,
      keyTerms: [
        { term: 'noncommunicable disease', definition: 'A disease that cannot spread from person to person, develops over time' },
        { term: 'chronic disease', definition: 'A health condition that lasts a long time and often can\'t be cured completely' },
        { term: 'epidemic', definition: 'When a disease affects many more people than expected' },
      ],
      analogies: [
        'NCDs are like slow leaks in a pipe - they don\'t cause a sudden flood, but over time they cause serious damage.',
        'Risk factors are like adding weights to a scale - each one makes it more likely the scale will tip toward disease.',
      ],
      examples: [
        'Smoking can lead to lung cancer, heart disease, and COPD - three different NCDs from one habit.',
        'Type 2 diabetes was once called "adult-onset diabetes" but now even teenagers get it because of unhealthy diets and lack of exercise.',
      ],
    },
    2: {
      level: 2,
      summary: 'NCDs are chronic conditions that cause 74% of global deaths annually. The four main NCDs - cardiovascular diseases, cancers, chronic respiratory diseases, and diabetes - share common risk factors including tobacco use, unhealthy diet, physical inactivity, and harmful alcohol use.',
      explanation: `The global NCD epidemic represents a major shift in disease patterns, with chronic diseases now the leading cause of death and disability worldwide.

**Global NCD Burden:**

**Deaths (2019):**
| NCD Category | Annual Deaths | % of All Deaths |
|--------------|---------------|-----------------|
| Cardiovascular | 17.9 million | 32% |
| Cancer | 10 million | 18% |
| Chronic respiratory | 4.1 million | 7% |
| Diabetes | 1.5 million | 3% |

**Additional Burden:**
- 15 million "premature" deaths (30-69 years)
- Major cause of disability
- Economic costs: $47 trillion projected 2011-2030

**Shared Risk Factors:**

**Behavioral:**
| Risk Factor | Contribution |
|-------------|-------------|
| Tobacco use | 8 million deaths/year |
| Unhealthy diet | 11 million deaths/year |
| Physical inactivity | 3.2 million deaths/year |
| Harmful alcohol | 3 million deaths/year |

**Metabolic:**
- High blood pressure
- Overweight/obesity
- High blood sugar
- High cholesterol

**The Epidemiological Transition:**
Countries progress through stages:
1. Age of pestilence and famine (infections dominate)
2. Age of receding pandemics
3. Age of degenerative diseases (NCDs emerge)
4. Age of delayed degenerative diseases
5. Age of emerging infections (new pattern)

**NCDs in Low and Middle-Income Countries:**
- 77% of NCD deaths occur in LMICs
- "Double burden" of infections AND NCDs
- Younger age of NCD death
- Less access to prevention and treatment

**Why NCDs Spread:**

**Globalization:**
- Spread of tobacco, fast food, processed food
- Marketing of unhealthy products
- Urbanization and sedentary jobs

**Demographic Changes:**
- Population aging
- Urbanization
- Economic development

**Commercial Determinants:**
- Tobacco industry marketing
- Food industry practices
- Alcohol industry promotion

**Prevention Approaches:**

**Population-Level:**
- Tobacco taxes and regulations
- Salt reduction programs
- Sugar-sweetened beverage taxes
- Urban planning for physical activity

**Individual-Level:**
- Screening programs
- Lifestyle counseling
- Medication for risk factors
- Disease management programs`,
      keyTerms: [
        { term: 'epidemiological transition', definition: 'Shift in disease patterns from infectious to chronic diseases as countries develop', pronunciation: 'ep-ih-dee-mee-oh-LOJ-ih-kal' },
        { term: 'risk factor', definition: 'Something that increases the chance of developing a disease' },
        { term: 'premature mortality', definition: 'Death before age 70, considered avoidable for many NCDs' },
        { term: 'double burden', definition: 'When populations face both infectious diseases and NCDs simultaneously' },
      ],
      analogies: [
        'The epidemiological transition is like a country\'s disease "playlist" changing - infectious disease "hits" get replaced by NCD "tracks" as the country develops.',
      ],
    },
    3: {
      level: 3,
      summary: 'The global NCD epidemic reflects epidemiologic and demographic transitions, with modifiable risk factors driving the majority of premature mortality. Addressing NCDs requires health systems strengthening for prevention and management alongside policy interventions targeting commercial determinants.',
      explanation: `NCDs have emerged as the dominant global health challenge, requiring fundamental shifts in health systems and policy approaches designed primarily for acute and infectious diseases.

**Epidemiology of NCDs:**

**Global Burden of Disease Framework:**
- NCDs: 74% of deaths, 63% of DALYs
- Leading causes: Ischemic heart disease, stroke, COPD, lung cancer, diabetes
- YLD (morbidity) increasingly important vs. YLL (mortality)

**Risk Factor Attribution (GBD 2019):**
| Risk Factor | Attributable Deaths | % of All Deaths |
|-------------|--------------------|-----------------|
| High systolic BP | 10.8 million | 19% |
| Tobacco | 8.7 million | 15% |
| Dietary risks | 8 million | 14% |
| Air pollution | 6.7 million | 12% |
| High fasting glucose | 6.5 million | 11% |
| High BMI | 5 million | 9% |

**WHO "Best Buys":**

Cost-effective interventions recommended:
| Intervention | Cost per DALY |
|-------------|---------------|
| Tobacco taxes | Very cost-effective |
| Salt reduction | Very cost-effective |
| Polypill for CVD risk | Cost-effective |
| Hepatitis B vaccination | Cost-effective |
| HPV vaccination | Cost-effective |
| Aspirin for acute MI | Very cost-effective |

**Health Systems Response:**

**Package of Essential NCD Interventions (WHO PEN):**
- Cardiovascular risk assessment
- Hypertension management
- Diabetes management
- Asthma/COPD management
- Referral criteria
- Essential medicines list

**Integration with Primary Health Care:**
- Task-shifting to non-physician providers
- Community-based care models
- Self-management support
- Technology-enabled care

**Continuity of Care Challenges:**
- Chronic care models vs. acute care design
- Medication access and adherence
- Follow-up and monitoring
- Care coordination

**Policy Framework:**

**WHO Global Action Plan on NCDs:**
Nine voluntary targets by 2025:
1. 25% reduction in premature NCD mortality
2. 10% reduction in harmful alcohol use
3. 10% reduction in physical inactivity
4. 30% reduction in salt intake
5. 30% reduction in tobacco use
6. 25% reduction in hypertension
7. Halt rise in diabetes/obesity
8. 50% coverage of drug therapy for CVD risk
9. 80% availability of essential NCD medicines/technologies

**Commercial Determinants:**
- Tobacco industry interference
- Ultra-processed food marketing
- Alcohol industry self-regulation failures
- Industry-funded research influence

**Regulatory Approaches:**
- FCTC for tobacco control
- Front-of-package labeling
- Marketing restrictions (children)
- Fiscal policies (taxes)

**NCDs and Sustainable Development:**

**SDG 3.4 Target:**
By 2030, reduce by one-third premature mortality from NCDs

**Broader SDG Linkages:**
- SDG 2: Food systems
- SDG 11: Urban planning
- SDG 12: Sustainable consumption
- SDG 13: Climate action`,
      keyTerms: [
        { term: 'DALYs', definition: 'Disability-Adjusted Life Years - measure combining years of life lost and years lived with disability', pronunciation: 'DAL-eez' },
        { term: 'WHO Best Buys', definition: 'Cost-effective interventions recommended for NCD prevention and control' },
        { term: 'PEN', definition: 'Package of Essential NCD interventions - WHO protocol for primary care' },
        { term: 'FCTC', definition: 'Framework Convention on Tobacco Control - international treaty for tobacco control' },
      ],
      clinicalNotes: 'Assess cardiovascular risk using validated tools (HEARTS, WHO/ISH charts). Implement lifestyle counseling systematically. Follow evidence-based protocols for hypertension and diabetes. Ensure essential NCD medicines available.',
    },
    4: {
      level: 4,
      summary: 'The NCD epidemic emerges from complex interactions of demographic, epidemiologic, and nutrition transitions amplified by commercial determinants and health system inadequacies. Effective response requires multi-sectoral policy action, health systems transformation, and addressing structural determinants of NCD risk.',
      explanation: `**Transitions Framework:**

**Demographic Transition:**
- Falling fertility and mortality
- Population aging
- Urbanization (68% urban by 2050)
- Migration patterns

**Epidemiologic Transition:**
| Stage | Disease Pattern | Examples |
|-------|----------------|----------|
| 1 | Pestilence/famine | Historical |
| 2 | Receding pandemics | Some LICs |
| 3 | Degenerative diseases | Most MICs |
| 4 | Delayed degenerative | HICs |
| 5 | Emergent infections | Global |

**Nutrition Transition:**
- Traditional diets → Western diets
- Increased processed foods
- Sugar-sweetened beverages
- Decreased physical activity
- Double burden of malnutrition

**Political Economy of NCDs:**

**Commercial Determinants:**
| Industry | Mechanisms |
|----------|-----------|
| Tobacco | Marketing, lobbying, litigation, science manipulation |
| Food/beverage | Marketing to children, portion sizes, reformulation resistance |
| Alcohol | Self-regulation, sponsorship, availability expansion |

**Framework Convention on Tobacco Control (FCTC):**
- Price and tax measures (Art. 6)
- Smoke-free policies (Art. 8)
- Health warnings (Art. 11)
- Advertising bans (Art. 13)
- Industry interference (Art. 5.3)

**Policy Coherence:**
- Health in All Policies approach
- Trade agreements and health
- Agricultural policy alignment
- Urban planning integration

**Health Systems for NCDs:**

**Care Delivery Transformation:**

*Chronic Care Model:*
- Community resources
- Health system organization
- Self-management support
- Delivery system design
- Decision support
- Clinical information systems

*Implementation Challenges:*
- Financing (insurance, out-of-pocket)
- Workforce (training, retention)
- Medicines/technologies access
- Quality assurance
- Data systems

**Evidence for Interventions:**

**Population-Level:**
| Intervention | Effect | Implementation |
|-------------|--------|----------------|
| Tobacco taxes | -4% smoking per 10% price increase | >75% of countries |
| Smoke-free laws | -10-20% smoking | Variable |
| Salt reduction | -2 mmHg per 1g reduction | <5 countries achieved |
| SSB taxes | -10-20% consumption | 50+ jurisdictions |

**Health Service-Level:**
| Intervention | NNT | Effect |
|-------------|-----|--------|
| Statins (secondary) | 39 | Prevent 1 major CV event/5 years |
| Antihypertensives | 67-100 | Prevent 1 major CV event/5 years |
| Metformin | - | 31% RRR microvascular complications |
| Aspirin (acute MI) | 42 | Prevent 1 death/1 month |

**Implementation Gaps:**
- Hypertension control: <20% in many LMICs
- Diabetes control: Highly variable
- Cancer screening: Limited in LMICs
- Secondary prevention: Major gaps

**Emerging Issues:**

**Air Pollution:**
- 6.7 million deaths annually
- Household and ambient
- Cardiovascular and respiratory effects
- Climate co-benefits

**Mental Health:**
- NCD-mental health comorbidities
- Depression and CVD/diabetes
- Integration in NCD care
- Often neglected in policy

**NCDs in Humanitarian Settings:**
- Conflict disrupts chronic care
- Refugee NCD burden
- Access to essential medicines
- Continuity challenges`,
      keyTerms: [
        { term: 'Health in All Policies', definition: 'Approach that systematically considers health implications of all policy decisions' },
        { term: 'Chronic Care Model', definition: 'Evidence-based framework for redesigning care for chronic conditions' },
        { term: 'NNT', definition: 'Number Needed to Treat - patients treated to prevent one adverse outcome' },
        { term: 'commercial determinants', definition: 'Private sector activities affecting health outcomes at population level' },
      ],
      clinicalNotes: 'Implement systematic CVD risk assessment. Use fixed-dose combinations where appropriate. Address medication adherence barriers. Screen for mental health comorbidities. Engage in quality improvement.',
    },
    5: {
      level: 5,
      summary: 'The NCD epidemic represents a complex adaptive system challenge requiring transformation across sectors - from reorienting health systems for chronic care to implementing policies addressing commercial determinants, within broader frameworks addressing structural violence, planetary health, and health equity.',
      explanation: `**Theoretical Frameworks:**

**Complex Systems:**
- NCDs as emergent properties of complex systems
- Feedback loops (e.g., obesity → diabetes → further weight gain)
- Non-linear dynamics
- Tipping points and path dependence

**Structural Violence:**
- Poverty and NCD risk
- Racialized health outcomes
- Gender dimensions
- Occupation exposures

**Planetary Health:**
- Climate-NCD connections
- Sustainable food systems
- Air pollution
- Co-benefits framework

**Advanced Epidemiology:**

**Lifecourse Epidemiology:**
- DOHaD (Developmental Origins of Health and Disease)
- Critical/sensitive periods
- Accumulation of risk
- Social chains of risk

**Mendelian Randomization:**
- Causal inference for risk factors
- Examples: LDL, blood pressure, BMI
- Genetic instruments

**High-Resolution Epidemiology:**
- Geospatial analysis
- Temporal patterns
- Social network effects
- Environmental exposures

**Health Systems Research:**

**Implementation Science:**
- Determinants of implementation
- Adaptation vs. fidelity
- Sustainability
- Scale-up strategies

**Learning Health Systems:**
- Continuous improvement cycles
- Data-driven decision-making
- Practice-based evidence
- Pragmatic trials

**Precision Public Health:**
- Risk stratification
- Targeted interventions
- Digital phenotyping
- Predictive analytics

**Political Economy Analysis:**

**Global Governance:**
- WHO role and limitations
- UN High-Level Meetings
- Multi-stakeholder tensions
- Industry engagement debates

**Policy Process:**
- Agenda setting
- Policy formulation
- Implementation fidelity
- Evaluation and revision

**Accountability Mechanisms:**
- NCD Progress Monitor
- Civil society role
- Country accountability
- Corporate accountability

**Research Frontiers:**

**Etiology:**
- Microbiome and cardiometabolic disease
- Inflammation pathways
- Gene-environment interactions
- Exposome concept

**Prevention:**
- Precision prevention
- Digital health interventions
- Behavioral economics applications
- Environmental modifications

**Treatment:**
- Polypill approaches
- mHealth for management
- Artificial intelligence in care
- Health system innovations

**Future Scenarios:**

**Optimistic:**
- SDG 3.4 achieved
- Health systems transformed
- Commercial determinants addressed
- Equity improved

**Concerning:**
- Continued rise in LMICs
- Climate impacts worsen burden
- Commercial interests prevail
- Health systems overwhelmed

**Transformation Pathways:**

**Health System:**
- PHC reorientation
- Integration of services
- Community-based care
- Digital transformation

**Multi-Sectoral:**
- Whole-of-government approaches
- Fiscal policy coherence
- Regulatory frameworks
- Urban and food system redesign

**Research Agenda:**

**Priority Questions:**
1. How to achieve policy change against industry opposition?
2. What health system models work for chronic care?
3. How to address commercial determinants effectively?
4. What interventions reduce inequities?
5. How to achieve sustainable behavioral change?

**Methods:**
- Natural experiments
- Implementation research
- Policy analysis
- Systems modeling
- Participatory research`,
      keyTerms: [
        { term: 'lifecourse epidemiology', definition: 'Study of how exposures across life stages affect disease risk' },
        { term: 'Mendelian randomization', definition: 'Using genetic variants to estimate causal effects of modifiable exposures' },
        { term: 'learning health system', definition: 'System in which evidence generation is embedded in care delivery' },
        { term: 'exposome', definition: 'Totality of environmental exposures from conception onwards' },
      ],
      clinicalNotes: 'Engage with quality improvement and research. Advocate for policy change. Consider lifecourse approach. Address social determinants. Contribute to health system transformation.',
    },
  },

  media: [
    {
      id: 'ncd-deaths-pie',
      type: 'diagram',
      filename: 'ncd-deaths-global.svg',
      title: 'Global Deaths by NCD Category',
      description: 'Pie chart showing distribution of NCD deaths',
    },
    {
      id: 'ncd-risk-factors',
      type: 'diagram',
      filename: 'ncd-risk-factors-framework.svg',
      title: 'NCD Risk Factors Framework',
      description: 'Diagram showing behavioral, metabolic, and environmental risk factors',
    },
  ],

  citations: [
    {
      id: 'who-ncd-global',
      type: 'website',
      title: 'Noncommunicable diseases',
      source: 'World Health Organization',
      url: 'https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'lancet-ncd-commission',
      type: 'article',
      title: 'Lancet Taskforce on NCDs and Economics',
      source: 'The Lancet',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'cardiovascular-disease-global', targetType: 'topic', relationship: 'child', label: 'Cardiovascular Disease Global' },
    { targetId: 'diabetes-global', targetType: 'topic', relationship: 'child', label: 'Diabetes Global' },
    { targetId: 'cancer-global', targetType: 'topic', relationship: 'child', label: 'Cancer Global' },
    { targetId: 'mental-health-global', targetType: 'topic', relationship: 'child', label: 'Mental Health Global' },
  ],

  tags: {
    systems: ['cardiovascular', 'public-health'],
    topics: ['global-health', 'noncommunicable-diseases', 'chronic-disease'],
    keywords: ['NCD', 'chronic disease', 'cardiovascular', 'cancer', 'diabetes', 'risk factors'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
