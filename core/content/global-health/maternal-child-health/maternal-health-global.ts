/**
 * Global Maternal Health
 *
 * Educational content about maternal health worldwide, including
 * pregnancy, childbirth, and postpartum care from a global perspective.
 */

import { EducationalContent } from '../../types';

export const MATERNAL_HEALTH_GLOBAL: EducationalContent = {
  id: 'maternal-health-global',
  type: 'concept',
  name: 'Global Maternal Health',
  alternateNames: ['Maternal Health Worldwide', 'Global Pregnancy Care', 'Safe Motherhood'],

  levels: {
    1: {
      level: 1,
      summary: 'Global maternal health is about keeping mothers healthy during pregnancy and childbirth. Around the world, many women still face dangers when having babies, especially in poor countries.',
      explanation: `Having a baby should be a happy time, but for many women around the world, it can be dangerous. Global maternal health focuses on making pregnancy and childbirth safe for all women.

**Why Is This Important?**
- About 800 women die every day from problems during pregnancy or childbirth
- Most of these deaths could be prevented with good healthcare
- 95% of these deaths happen in poor countries

**What Makes Pregnancy Dangerous?**

**Major Causes of Death:**
- Heavy bleeding after giving birth
- High blood pressure during pregnancy
- Infections after childbirth
- Problems during labor that are not handled properly
- Unsafe abortions

**Why Some Women Don't Get Good Care:**
- No hospital or clinic nearby
- Can't afford healthcare
- Not enough doctors or midwives
- Traditions that keep women from seeking help
- Poor roads and no transportation

**What Helps Keep Mothers Safe:**

**During Pregnancy:**
- Regular checkups to catch problems early
- Good nutrition
- Taking vitamins (especially iron and folic acid)
- Getting vaccines (like tetanus)

**During Birth:**
- Having a skilled person help (doctor, nurse, or trained midwife)
- Clean equipment and environment
- Being able to get to a hospital if there's an emergency

**After Birth:**
- Checking on the mother in the weeks after birth
- Treatment for infections or bleeding
- Support for breastfeeding
- Family planning help

**Good News:**
- Maternal deaths have decreased by about 34% since 2000
- More women are getting prenatal care
- More births happen with skilled helpers`,
      keyTerms: [
        { term: 'maternal health', definition: 'The health of women during pregnancy, childbirth, and the period after giving birth' },
        { term: 'midwife', definition: 'A trained person who helps women during pregnancy and birth' },
        { term: 'prenatal care', definition: 'Medical care during pregnancy to keep mother and baby healthy' },
      ],
      analogies: [
        'Maternal health care is like having a safety net - it catches problems before they become dangerous.',
        'A skilled birth attendant is like a trained lifeguard - they know what to do if something goes wrong.',
      ],
      examples: [
        'In some African countries, a woman is 100 times more likely to die in childbirth than in Europe.',
        'Simple things like clean hands and clean instruments can prevent deadly infections.',
      ],
    },
    2: {
      level: 2,
      summary: 'Global maternal health encompasses care during pregnancy, childbirth, and the postpartum period. While maternal mortality has declined significantly, approximately 287,000 women still die annually from pregnancy-related causes, with vast inequities between regions.',
      explanation: `Maternal health remains a critical global health priority, reflecting both health system capacity and broader social determinants. Despite progress, preventable maternal deaths persist.

**Maternal Mortality Statistics:**

**Global Burden (2020):**
- 287,000 maternal deaths worldwide
- Maternal mortality ratio (MMR): 223 per 100,000 live births
- 95% of deaths in low and lower-middle-income countries

**Regional Disparities:**
| Region | MMR (per 100,000 live births) |
|--------|------------------------------|
| Sub-Saharan Africa | 545 |
| South Asia | 136 |
| Latin America | 88 |
| Europe | 10 |
| Australia/NZ | 6 |

**Causes of Maternal Death:**
| Cause | Percentage |
|-------|-----------|
| Hemorrhage (bleeding) | 27% |
| Hypertensive disorders | 14% |
| Sepsis (infection) | 11% |
| Unsafe abortion | 8% |
| Embolism | 3% |
| Indirect causes | 28% |

**The Three Delays Model:**

Many maternal deaths result from delays:

**1. Delay in Deciding to Seek Care:**
- Not recognizing danger signs
- Cultural beliefs
- Decision-making power
- Past negative experiences

**2. Delay in Reaching Care:**
- Distance to facilities
- Transportation availability
- Cost of transport
- Road conditions

**3. Delay in Receiving Adequate Care:**
- Lack of skilled staff
- Shortage of supplies/equipment
- Poor quality of care
- Communication barriers

**Continuum of Maternal Care:**

**Before Pregnancy:**
- Family planning
- Folic acid supplementation
- Treatment of existing conditions
- Nutrition optimization

**During Pregnancy (Antenatal Care):**
- WHO recommends 8+ contacts
- Screening for complications
- Preventive treatments
- Birth preparedness

**During Childbirth:**
- Skilled birth attendance
- Emergency obstetric care available
- Clean delivery practices
- Active management of third stage

**After Birth (Postnatal Care):**
- Assessment for complications
- Breastfeeding support
- Family planning
- Mental health screening

**Effective Interventions:**
- Skilled birth attendance
- Emergency obstetric care
- Magnesium sulfate for eclampsia
- Oxytocin for hemorrhage
- Antibiotics for sepsis
- Blood transfusion availability`,
      keyTerms: [
        { term: 'maternal mortality ratio', definition: 'Number of maternal deaths per 100,000 live births', pronunciation: 'MMR' },
        { term: 'skilled birth attendant', definition: 'Trained health professional (doctor, nurse, midwife) who can manage normal births and recognize complications' },
        { term: 'postpartum', definition: 'The period after childbirth, typically considered six weeks', pronunciation: 'post-PAR-tum' },
        { term: 'eclampsia', definition: 'Life-threatening seizures during pregnancy from high blood pressure', pronunciation: 'eh-KLAMP-see-ah' },
      ],
      analogies: [
        'The three delays are like three hurdles women must jump over to get life-saving care - removing any one helps, but removing all three saves the most lives.',
      ],
    },
    3: {
      level: 3,
      summary: 'Global maternal health encompasses reproductive, maternal, newborn health across the life course, with mortality and morbidity driven by clinical complications, health system deficits, and social determinants. Evidence-based interventions exist but coverage gaps persist, requiring health systems strengthening and equity-focused approaches.',
      explanation: `Maternal health must be understood within the broader reproductive, maternal, newborn, child, and adolescent health (RMNCAH) continuum, with mortality representing the "tip of the iceberg" of maternal morbidity burden.

**Epidemiology of Maternal Mortality and Morbidity:**

**Mortality Trends:**
- MMR declined 34% from 2000-2020 (342 to 223/100,000)
- SDG target: <70/100,000 by 2030 (off track)
- ~118,000 COVID-related excess maternal deaths (2020-2021)

**Maternal Morbidity:**
For every death, approximately 20-30 women experience:
- Severe acute maternal morbidity ("near miss")
- Long-term morbidity (fistula, prolapse, incontinence)
- Mental health conditions
- Disability

**Clinical Pathophysiology:**

**Obstetric Hemorrhage:**
- Primary: Uterine atony, placenta previa/accreta, trauma
- Treatment: Uterotonics, surgery, blood products
- Prevention: Active management of third stage of labor (AMTSL)

**Hypertensive Disorders:**
- Pre-eclampsia: Hypertension + proteinuria/organ dysfunction
- Eclampsia: Seizures
- HELLP syndrome
- Management: Magnesium sulfate, antihypertensives, delivery

**Maternal Sepsis:**
- Risk factors: Prolonged rupture of membranes, cesarean, anemia
- Common pathogens: E. coli, Group B Strep, Staphylococcus
- Key: Early recognition and treatment

**Quality of Care Framework:**

**WHO Quality of Care Framework:**

*Provision of Care:*
- Evidence-based practices
- Actionable information systems
- Functional referral systems

*Experience of Care:*
- Effective communication
- Respect and dignity
- Emotional support

**Signal Functions for Emergency Obstetric Care:**

**Basic EmONC (7 functions):**
1. Parenteral antibiotics
2. Parenteral uterotonics
3. Parenteral anticonvulsants
4. Manual removal of placenta
5. Removal of retained products
6. Assisted vaginal delivery
7. Neonatal resuscitation

**Comprehensive EmONC (add 2):**
8. Blood transfusion
9. Cesarean section

**Facility Benchmarks:**
- 5 EmONC facilities per 500,000 population
- At least 1 comprehensive EmONC facility
- Met need for EmONC services

**Respectful Maternity Care:**

Growing recognition of mistreatment in facilities:
- Physical abuse
- Non-consented care
- Non-confidential care
- Non-dignified care
- Discrimination
- Abandonment of care

**Measurement:**

**Key Indicators:**
| Indicator | Target |
|-----------|--------|
| Skilled birth attendance | >90% |
| ANC 4+ visits | >90% |
| Institutional delivery | Increasing |
| C-section rate | 10-15% |
| Met need for EmONC | >80% |

**Maternal Death Surveillance and Response (MDSR):**
- Every death reviewed
- Identify avoidable factors
- Implement recommendations
- Track progress`,
      keyTerms: [
        { term: 'near miss', definition: 'Woman who nearly died but survived a severe complication during pregnancy, delivery, or postpartum' },
        { term: 'EmONC', definition: 'Emergency Obstetric and Newborn Care - life-saving interventions', pronunciation: 'ee-MONK' },
        { term: 'AMTSL', definition: 'Active Management of Third Stage of Labor - protocol to prevent postpartum hemorrhage' },
        { term: 'MDSR', definition: 'Maternal Death Surveillance and Response - system to review and learn from every death' },
      ],
      clinicalNotes: 'Recognize danger signs requiring referral: severe headache, visual changes, severe abdominal pain, heavy bleeding, fever, decreased fetal movement. AMTSL should be standard practice. Document and report all maternal deaths and near misses.',
    },
    4: {
      level: 4,
      summary: 'Maternal health reflects the intersection of biomedical, health systems, and social determinants, with persistent mortality driven by failures across multiple levels. Contemporary approaches emphasize quality improvement, respectful care, and addressing structural inequities while leveraging evidence from implementation science.',
      explanation: `**Systems Analysis of Maternal Mortality:**

**Ecological Framework:**
| Level | Determinants | Interventions |
|-------|-------------|---------------|
| Individual | Knowledge, autonomy, nutrition | Education, empowerment |
| Household | Decision-making, resources | Cash transfers, community mobilization |
| Community | Norms, transport, support | Birth preparedness, transport schemes |
| Health system | Access, quality, coverage | Facility strengthening, workforce |
| Policy | Financing, governance, laws | Policy change, accountability |

**Quality of Care Research:**

**Lancet Global Health Commission Findings:**
- Poor quality care contributes to 60% of amenable deaths
- Effective coverage (access x quality) far lower than crude coverage
- Quality failures include omission and commission

**Quality Measurement:**
| Domain | Example Indicators |
|--------|-------------------|
| Structure | Staff competency, equipment availability |
| Process | Partograph use, AMTSL adherence |
| Outcome | Case fatality rates, patient satisfaction |

**Clinical Practice Variations:**
- C-section: From <5% (unmet need) to >50% (overuse)
- Episiotomy rates highly variable
- Labor induction practices differ
- Pain management availability

**Implementation Science in Maternal Health:**

**Effective Implementation Strategies:**
- Clinical mentorship programs
- Facility-based quality improvement collaboratives
- Audit and feedback systems
- Simulation training for emergencies
- mHealth for decision support

**Scale-Up Challenges:**
- Fidelity vs. adaptation tensions
- Sustainability after project end
- Health system strengthening vs. vertical programs
- Cost-effectiveness considerations

**Maternal Health and Social Determinants:**

**Gender and Power:**
- Women's decision-making authority
- Gender-based violence and maternal outcomes
- Male involvement (benefits and risks)
- Women's property rights and economic autonomy

**Structural Violence:**
- Racialized maternal mortality (US, Brazil)
- Migrant and refugee maternal health
- Indigenous populations' outcomes
- Conflict and displacement effects

**Economic Factors:**
- Out-of-pocket expenditures
- Catastrophic health spending
- Conditional cash transfer programs
- Health insurance coverage

**Global Policy Framework:**

**Strategies for Ending Preventable Maternal Mortality (EPMM):**
1. Strengthen health systems
2. Ensure universal access to reproductive health services
3. Address inequities
4. Improve data collection and use
5. Accountability at all levels

**Financing:**
- Global Financing Facility (GFF)
- Domestic resource mobilization
- Results-based financing
- Insurance mechanisms

**Emerging Issues:**

**Climate Change:**
- Heat exposure and pregnancy outcomes
- Food insecurity
- Displacement
- Health system disruptions

**COVID-19 Impact:**
- Service disruptions
- Excess maternal mortality
- Healthcare worker infections
- Health system resilience

**Technology:**
- Telemedicine for ANC
- AI for risk prediction
- Point-of-care diagnostics
- Electronic medical records`,
      keyTerms: [
        { term: 'effective coverage', definition: 'Proportion of population receiving quality health services, accounting for both access and quality' },
        { term: 'Global Financing Facility', definition: 'World Bank partnership mechanism for reproductive, maternal, newborn, child, and adolescent health financing' },
        { term: 'results-based financing', definition: 'Payment mechanisms that tie funding to achievement of health outcomes or outputs' },
        { term: 'structural violence', definition: 'Social structures that systematically harm or disadvantage certain groups' },
      ],
      clinicalNotes: 'Engage with quality improvement initiatives. Consider social determinants affecting patients. Practice respectful maternity care. Document complications and outcomes for surveillance. Advocate for health system strengthening.',
    },
    5: {
      level: 5,
      summary: 'Maternal health exemplifies the intersection of biomedical complexity, health systems science, political economy, and social justice, requiring transformative approaches that address structural determinants while implementing evidence-based clinical and system interventions. Contemporary frameworks emphasize accountability, decolonization, and centering women\'s experiences.',
      explanation: `**Theoretical Frameworks:**

**Human Rights Framework:**
- Right to life, health, non-discrimination
- State obligations: respect, protect, fulfill
- Accountability mechanisms
- International human rights law applications

**Reproductive Justice:**
- Beyond choice to capability
- Right to have/not have children
- Right to parent in safe environments
- Intersectionality of oppressions

**Health Systems Strengthening:**
- Building blocks framework
- Systems thinking approaches
- Resilience concepts
- Learning health systems

**Epidemiological Deep Dive:**

**Risk Stratification:**
| Factor | Relative Risk |
|--------|--------------|
| Previous cesarean | 2-10x (for various outcomes) |
| Multiple gestation | 2-5x |
| Pre-existing diabetes | 2-4x |
| Hypertensive history | 3-5x |
| Anemia (severe) | 3-4x |
| Adolescent pregnancy | 1.5-3x |
| Grand multiparity | 2-4x |

**Confidential Enquiry Methods:**
- United Kingdom MBRRACE-UK model
- Beyond boundaries (BBB) approach
- FIGO LOGIC (Low-middle Income Obstetrics and Gynaecology Initiative for Care)
- Comprehensive cause attribution

**Implementation Science Research:**

**Determinants of Effective Care:**

*CFIR (Consolidated Framework for Implementation Research):*
- Intervention characteristics
- Inner setting (facility)
- Outer setting (policy, context)
- Individual characteristics
- Process of implementation

**Effective Strategies Evidence:**
| Strategy | Evidence Level | Context |
|----------|---------------|---------|
| Mentorship | Moderate | Low-resource |
| Simulation | High | All settings |
| Audit/feedback | Moderate | Facility-based |
| QI collaboratives | Moderate | Health systems |
| Task shifting | Moderate | Workforce shortage |

**Political Economy Analysis:**

**Global Governance:**
- WHO normative leadership
- UNFPA mandate
- UNICEF programming
- Development partner landscape
- Civil society advocacy

**Financing Dynamics:**
- Aid effectiveness debates
- Domestic vs. external funding
- Private sector role
- Insurance expansion

**Power and Voice:**
- LMIC leadership emergence
- Community accountability
- Social movements (e.g., #NigeriaCares)
- Women's health advocates

**Decolonizing Maternal Health:**

**Colonial Legacies:**
- Health system structures
- Professional training paradigms
- Research priorities and methods
- Language and knowledge

**Decolonization Approaches:**
- Local leadership and ownership
- Indigenous knowledge integration
- Shifting resource flows
- Research equity

**Emerging Science:**

**Precision Maternal Medicine:**
- Genomic risk prediction
- Metabolomic biomarkers
- AI risk models
- Personalized care pathways

**Technology Innovation:**
- E-partographs
- Remote monitoring
- Diagnostic devices
- Decision support systems

**Research Priorities:**

**Key Questions:**
1. How to achieve quality at scale?
2. What enables respectful care consistently?
3. How to address structural determinants effectively?
4. What innovations improve outcomes in low-resource settings?
5. How to achieve accountability for maternal health?

**Methods:**
- Pragmatic trials
- Implementation science
- Mixed methods
- Health systems research
- Participatory action research

**Future Trajectories:**

**Toward 2030:**
- SDG target achievement unlikely globally
- Wide variation by country/region
- Quality agenda maturing
- Rights-based approaches expanding

**Transformative Potential:**
- Primary health care strengthening
- Universal health coverage expansion
- Gender equality advances
- Community-led accountability`,
      keyTerms: [
        { term: 'reproductive justice', definition: 'Framework centering bodily autonomy, right to have or not have children, and to parent in safe environments' },
        { term: 'confidential enquiry', definition: 'Systematic review of maternal deaths to identify avoidable factors and improve care' },
        { term: 'CFIR', definition: 'Consolidated Framework for Implementation Research - model for analyzing implementation determinants' },
        { term: 'precision maternal medicine', definition: 'Individualized risk prediction and care based on genetic and biomarker profiles' },
      ],
      clinicalNotes: 'Integrate evidence-based practices while adapting to context. Engage with accountability mechanisms. Support decolonization of maternal health approaches. Contribute to research and quality improvement. Center women\'s experiences and preferences.',
    },
  },

  media: [
    {
      id: 'maternal-mortality-map',
      type: 'diagram',
      filename: 'maternal-mortality-ratio-global.svg',
      title: 'Global Maternal Mortality Ratio',
      description: 'World map showing maternal mortality rates by country',
    },
    {
      id: 'three-delays-model',
      type: 'diagram',
      filename: 'three-delays-model.svg',
      title: 'The Three Delays Model',
      description: 'Diagram showing factors contributing to maternal mortality',
    },
  ],

  citations: [
    {
      id: 'who-maternal-mortality',
      type: 'website',
      title: 'Maternal mortality',
      source: 'World Health Organization',
      url: 'https://www.who.int/news-room/fact-sheets/detail/maternal-mortality',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'lancet-maternal-health',
      type: 'article',
      title: 'Maternal Health Lancet Series',
      source: 'The Lancet',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'child-health-global', targetType: 'topic', relationship: 'sibling', label: 'Child Health Global' },
    { targetId: 'nutrition-global', targetType: 'topic', relationship: 'sibling', label: 'Global Nutrition' },
    { targetId: 'health-disparities-overview', targetType: 'topic', relationship: 'related', label: 'Health Disparities' },
  ],

  tags: {
    systems: ['reproductive', 'public-health'],
    topics: ['global-health', 'maternal-health', 'womens-health'],
    keywords: ['maternal mortality', 'pregnancy', 'childbirth', 'EmONC', 'safe motherhood'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
