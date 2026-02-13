/**
 * Global Child Health
 *
 * Educational content about child health worldwide, including under-5 mortality,
 * major causes of child death, and interventions to improve child survival.
 */

import { EducationalContent } from '../../types';

export const CHILD_HEALTH_GLOBAL: EducationalContent = {
  id: 'child-health-global',
  type: 'concept',
  name: 'Global Child Health',
  alternateNames: ['Child Health Worldwide', 'Pediatric Global Health', 'Child Survival'],

  levels: {
    1: {
      level: 1,
      summary: 'Global child health focuses on keeping children around the world healthy and alive. While things have gotten much better, millions of children still die each year from diseases that could be prevented or treated.',
      explanation: `Children are the most vulnerable people in the world. They can get very sick from diseases that adults easily survive. Global child health is about protecting children everywhere.

**The Good News:**
- In 1990, about 12 million children died before age 5
- By 2022, that number dropped to about 5 million
- This means millions more children are surviving!

**What Still Kills Children:**

**For Newborn Babies (first month):**
- Being born too early (premature)
- Problems during birth (not getting enough oxygen)
- Serious infections

**For Older Babies and Young Children:**
- Pneumonia (lung infection)
- Diarrhea
- Malaria (from mosquito bites)
- Measles (vaccine-preventable)
- Malnutrition (not enough healthy food)

**Why Do Children Die?**
- Many families can't afford doctors or medicine
- Clinics are too far away
- Parents don't always know the danger signs
- Clean water and nutritious food aren't available
- Vaccines don't reach all children

**What Saves Children's Lives:**

**Prevention:**
- Vaccines (especially for measles, pneumonia, rotavirus)
- Bed nets to prevent malaria
- Clean water and hand washing
- Breastfeeding
- Good nutrition

**Treatment:**
- Oral rehydration for diarrhea (special drink with salt and sugar)
- Antibiotics for pneumonia
- Malaria medicine
- Getting sick children to clinics quickly

**Where Most Deaths Happen:**
- Sub-Saharan Africa and South Asia have the most child deaths
- Poor communities everywhere have higher death rates
- Rural areas often have worse outcomes than cities`,
      keyTerms: [
        { term: 'under-5 mortality', definition: 'Deaths of children before their fifth birthday' },
        { term: 'pneumonia', definition: 'A serious lung infection that makes it hard to breathe' },
        { term: 'oral rehydration', definition: 'A special drink that replaces fluids lost from diarrhea' },
      ],
      analogies: [
        'Think of child health like building a protective wall - vaccines, nutrition, and clean water are all bricks that keep children safe.',
        'Treating childhood diseases early is like putting out a small fire before it becomes a big one.',
      ],
      examples: [
        'A simple mixture of sugar, salt, and water (oral rehydration solution) has saved millions of children from dying of diarrhea.',
        'Sleeping under a bed net can prevent a child from getting malaria, a disease that kills over 600,000 children each year.',
      ],
    },
    2: {
      level: 2,
      summary: 'Global child health addresses mortality and morbidity among children under 5, with approximately 5 million deaths annually. Major causes include neonatal conditions, pneumonia, diarrhea, and malaria, with malnutrition underlying many deaths. Proven interventions exist but coverage gaps persist.',
      explanation: `Child survival has improved dramatically over recent decades, but significant challenges remain. Understanding the causes of child mortality guides intervention priorities.

**Under-5 Mortality Statistics (2022):**
- 5 million deaths annually
- Under-5 mortality rate (U5MR): 37 per 1,000 live births
- 2.3 million neonatal deaths (first 28 days)
- Nearly half of deaths in sub-Saharan Africa

**Age Distribution of Deaths:**
| Age Group | Percentage of U5 Deaths |
|-----------|------------------------|
| Neonatal (0-27 days) | 47% |
| 1-11 months | 26% |
| 1-4 years | 27% |

**Leading Causes of Death:**

**Neonatal:**
- Preterm birth complications: 35%
- Birth asphyxia/trauma: 24%
- Neonatal sepsis: 15%
- Congenital anomalies: 11%
- Other: 15%

**Post-Neonatal (1-59 months):**
- Pneumonia: 14% of U5 deaths
- Diarrhea: 9%
- Malaria: 5%
- Measles: 1%
- Other infections and injuries

**Role of Malnutrition:**
Undernutrition is an underlying cause in ~45% of all child deaths:
- Wasting (low weight for height)
- Stunting (low height for age)
- Micronutrient deficiencies (vitamin A, zinc, iron)

**High-Impact Interventions:**

**Preventive:**
| Intervention | Deaths Averted |
|-------------|---------------|
| Breastfeeding promotion | 13% of U5 deaths |
| Pneumococcal vaccine | Significant pneumonia reduction |
| Rotavirus vaccine | 50% reduction in severe diarrhea |
| ITNs for malaria | 50% reduction in malaria deaths |

**Treatment:**
| Intervention | Impact |
|-------------|--------|
| ORS + zinc for diarrhea | 93% of deaths preventable |
| Antibiotics for pneumonia | 30% reduction in mortality |
| ACTs for malaria | Highly effective treatment |

**Integrated Management of Childhood Illness (IMCI):**
WHO/UNICEF strategy addressing:
- Case management guidelines
- Health system strengthening
- Community and family practices

**Coverage Gaps:**
| Intervention | Global Coverage |
|-------------|----------------|
| Exclusive breastfeeding (0-6 mo) | 44% |
| ORS for diarrhea | 44% |
| Care-seeking for pneumonia | 66% |
| Vitamin A supplementation | 64% |`,
      keyTerms: [
        { term: 'under-5 mortality rate', definition: 'Probability of dying between birth and age 5, per 1,000 live births', pronunciation: 'U5MR' },
        { term: 'neonatal', definition: 'Relating to the first 28 days of life', pronunciation: 'nee-oh-NAY-tal' },
        { term: 'IMCI', definition: 'Integrated Management of Childhood Illness - comprehensive approach to child health' },
        { term: 'wasting', definition: 'Acute malnutrition indicated by low weight-for-height' },
      ],
      analogies: [
        'IMCI is like having a complete toolbox for child health - instead of just one tool, health workers have everything they need to address multiple problems.',
      ],
    },
    3: {
      level: 3,
      summary: 'Child health epidemiology reveals concentration of mortality in the neonatal period and among the poorest populations. Effective interventions spanning the continuum of care from pregnancy through childhood exist, but achieving universal coverage requires health systems strengthening and addressing social determinants.',
      explanation: `Global child health has evolved from vertical disease programs to integrated approaches addressing the continuum of care. Understanding mortality patterns and intervention effectiveness guides strategy.

**Epidemiological Transitions:**

**Historical Decline:**
- U5MR declined from 93 (1990) to 37 (2022) per 1,000
- Annual rate of reduction: 2.3% (accelerated from 1.8%)
- SDG target: <25 per 1,000 by 2030

**Geographic Concentration:**
- Sub-Saharan Africa: 50% of global child deaths
- South Asia: 28%
- 5 countries account for 50%+ of deaths (India, Nigeria, Pakistan, DRC, Ethiopia)

**Wealth Quintile Gradients:**
- Children in poorest 20% twice as likely to die as richest 20%
- Gradients steeper in some countries
- Urban poor increasingly vulnerable

**Continuum of Care:**

**Pre-Pregnancy:**
- Folic acid supplementation
- Family planning
- Adolescent health

**Pregnancy:**
- Antenatal care (8+ contacts)
- Tetanus immunization
- Prevention/treatment of malaria in pregnancy
- Nutrition supplementation

**Birth:**
- Skilled birth attendance
- Essential newborn care
- Resuscitation capability

**Postnatal:**
- Early breastfeeding initiation
- Thermal care
- Infection prevention
- Postnatal visits

**Infancy/Childhood:**
- Immunization
- Nutrition (exclusive breastfeeding, complementary feeding)
- Integrated case management
- Growth monitoring

**Cause-Specific Interventions:**

**Pneumonia:**
- Prevention: Vaccination (PCV, Hib), breastfeeding, nutrition, zinc
- Treatment: Case identification, amoxicillin, oxygen, referral
- Challenge: Appropriate antibiotic access, bacterial resistance

**Diarrhea:**
- Prevention: WASH, rotavirus vaccine, breastfeeding, zinc supplementation
- Treatment: ORS, zinc, continued feeding, antibiotics for dysentery
- Challenge: Persistent diarrhea, ORS coverage

**Malaria:**
- Prevention: ITNs, IRS, seasonal malaria chemoprevention, RTS,S vaccine
- Treatment: ACTs, severe malaria management, rectal artesunate
- Challenge: Resistance, access, diagnosis

**Newborn Conditions:**
- Preterm: Kangaroo mother care, antenatal steroids, surfactant
- Asphyxia: Resuscitation, therapeutic hypothermia (where available)
- Sepsis: Early recognition, antibiotics, supportive care

**Service Delivery Platforms:**

**Facility-Based:**
- ANC contacts
- Facility delivery
- Pediatric outpatient
- Inpatient care

**Community-Based:**
- Community health workers
- Integrated community case management (iCCM)
- Nutrition programs
- WASH interventions

**Campaign-Based:**
- Immunization campaigns
- Vitamin A supplementation
- Mass drug administration
- ITN distribution

**Quality of Care:**

**Effective Coverage Concept:**
Access alone insufficient; quality determines impact.

**Quality Gaps:**
| Domain | Example Gaps |
|--------|-------------|
| Assessment | Incomplete examination |
| Classification | Misdiagnosis |
| Treatment | Wrong drug/dose |
| Counseling | Inadequate advice |
| Referral | Delayed or absent |`,
      keyTerms: [
        { term: 'continuum of care', definition: 'Integrated care spanning pre-pregnancy through childhood, linking home, community, and facility' },
        { term: 'iCCM', definition: 'Integrated Community Case Management - community health workers treating pneumonia, diarrhea, malaria' },
        { term: 'kangaroo mother care', definition: 'Skin-to-skin contact for newborns, especially preterm, improving survival and breastfeeding' },
        { term: 'effective coverage', definition: 'Access to services multiplied by quality of care received' },
      ],
      clinicalNotes: 'Use IMCI guidelines for systematic assessment. Identify danger signs requiring referral. Counsel on home care and follow-up. Ensure immunization status checked at every contact. Address underlying nutritional status.',
    },
    4: {
      level: 4,
      summary: 'Child health improvements require addressing the complex interplay of biomedical interventions, health systems capacity, and social determinants. Contemporary approaches emphasize life-course perspectives, quality of care, equity focus, and integration across the continuum of care.',
      explanation: `**Systems Analysis of Child Mortality:**

**Determinants Framework:**
| Level | Factors | Interventions |
|-------|---------|---------------|
| Distal | Poverty, education, gender | Social protection, education policy |
| Intermediate | Food security, WASH, housing | Nutrition programs, infrastructure |
| Proximal | Care practices, health access | Behavior change, service delivery |
| Biomedical | Infection, malnutrition | Clinical interventions |

**Countdown to 2030 Framework:**
Monitoring coverage across continuum:
- Reproductive health
- Maternal health
- Newborn health
- Child health
- Nutrition
- WASH

**Lives Saved Tool (LiST):**
- Models intervention impact on mortality
- Guides priority-setting
- Estimates lives saved by scale-up

**Clinical Science Updates:**

**Neonatal Care:**

*Small and Sick Newborn Care:*
- Neonatal intensive care expansion in LMICs
- Appropriate technology solutions
- Oxygen and CPAP access
- Surfactant availability

*Kangaroo Mother Care (KMC):*
- WHO recommends for all newborns <2000g
- Community-initiated KMC expanding
- Immediate KMC (at birth) evidence growing

*Neonatal Resuscitation:*
- Helping Babies Breathe program
- Basic resuscitation at every birth
- Quality and sustainability challenges

**Childhood Illness:**

*Pneumonia Management:*
- Pulse oximetry for severity assessment
- Amoxicillin dispersible tablets
- Community case management expansion
- Bacterial etiology shifting post-PCV

*Diarrhea:*
- Low-osmolarity ORS standard
- Zinc for all episodes
- Rotavirus vaccine impact
- Persistent diarrhea management

*Malaria:*
- ACT effectiveness monitoring
- Seasonal malaria chemoprevention scale-up
- RTS,S/AS01 vaccine introduction
- R21/Matrix-M higher efficacy

**Nutrition Integration:**

**Addressing Undernutrition:**
| Condition | Prevalence | Intervention |
|-----------|-----------|--------------|
| Stunting | 22% globally | First 1000 days nutrition |
| Wasting | 6.7% globally | CMAM (community management of acute malnutrition) |
| Micronutrient deficiency | Variable | Supplementation, fortification |

**Infant and Young Child Feeding:**
- Early initiation (<1 hour): 47% coverage
- Exclusive breastfeeding (0-6 months): 44% coverage
- Minimum dietary diversity: Low in many settings

**Implementation Science:**

**Scale-Up Strategies:**
- Integration vs. vertical programs debate
- Task shifting to CHWs
- Digital health applications
- Quality improvement approaches

**Sustainability:**
- Domestic financing transitions
- Health system resilience
- Community ownership
- Policy sustainability

**Emerging Issues:**

**Non-Communicable Diseases in Children:**
- Childhood obesity rising
- Diabetes Type 1 management
- Asthma in LMIC urban areas
- Cancer care access

**Climate and Child Health:**
- Heat exposure vulnerability
- Food security impacts
- Water and sanitation
- Infectious disease patterns

**Conflict and Displacement:**
- 400+ million children in conflict zones
- Refugee child health needs
- Health system destruction
- Mental health impacts`,
      keyTerms: [
        { term: 'LiST', definition: 'Lives Saved Tool - model estimating impact of intervention scale-up on mortality' },
        { term: 'CMAM', definition: 'Community-based Management of Acute Malnutrition - outpatient treatment of severe acute malnutrition' },
        { term: 'first 1000 days', definition: 'Period from conception to age 2, critical window for nutrition and development' },
        { term: 'Helping Babies Breathe', definition: 'Simplified neonatal resuscitation training program for low-resource settings' },
      ],
      clinicalNotes: 'Integrate nutrition assessment in all child contacts. Consider pulse oximetry for pneumonia severity. Follow updated case management guidelines. Address developmental milestones alongside survival. Document outcomes for quality improvement.',
    },
    5: {
      level: 5,
      summary: 'Child health improvement requires addressing structural determinants, strengthening health systems, and implementing evidence-based interventions at scale with quality. Transformative approaches emphasize equity, integration with primary health care and UHC, and addressing emerging challenges including NCDs, climate, and conflict.',
      explanation: `**Theoretical Frameworks:**

**Life-Course Approach:**
- Developmental origins of health and disease (DOHaD)
- Early childhood development
- Intergenerational transmission
- Critical and sensitive periods

**Health Systems Thinking:**
- Complex adaptive systems
- Feedback loops
- Emergence
- Resilience

**Political Economy:**
- Power and priority-setting
- Financing dynamics
- Global governance
- Country ownership

**Advanced Epidemiology:**

**Risk Factor Analysis (GBD 2019):**
| Risk Factor | Attributable U5 Deaths |
|-------------|----------------------|
| Child and maternal malnutrition | 1.4 million |
| Unsafe water, sanitation, handwashing | 330,000 |
| Air pollution | 240,000 |
| Non-exclusive breastfeeding | 230,000 |

**Concentration Curves:**
- Poorest quintile bears disproportionate mortality
- Slope index and concentration index measurement
- Within-country variation exceeds between-country
- Urban poor increasingly at risk

**Precision Public Health:**
- Geospatial analysis for targeting
- Small area estimation
- Risk prediction models
- Adaptive targeting strategies

**Implementation Science:**

**Context-Mechanism-Outcome Configurations:**
What works, for whom, under what conditions?

**Effective Strategies:**
| Strategy | Evidence | Context |
|----------|----------|---------|
| CHW programs | Strong | Community-based care |
| QI collaboratives | Moderate | Facility improvement |
| Conditional cash transfers | Moderate | Demand-side barriers |
| mHealth | Emerging | Various applications |

**Scale and Sustainability:**
- Horizontal vs. vertical integration
- Domestic financing transition
- Human resources sustainability
- Political sustainability

**Global Architecture:**

**Key Actors:**
- WHO (normative guidance)
- UNICEF (programming, procurement)
- Global Fund (malaria, other)
- Gavi (immunization)
- World Bank (financing)
- Bilateral partners
- Civil society

**Partnerships:**
- Every Woman Every Child
- Partnership for Maternal, Newborn, and Child Health
- Child Health and Mortality Prevention Surveillance (CHAMPS)

**Research Frontiers:**

**Diagnostics:**
- Point-of-care tests
- Multiplex pathogen detection
- Hypoxemia screening
- Malnutrition biomarkers

**Therapeutics:**
- New antibiotics for resistant infections
- Simplified regimens
- Novel formulations
- Adjunctive therapies

**Vaccines:**
- RSV vaccines
- Improved rotavirus vaccines
- Group B Streptococcus
- Typhoid conjugate scale-up

**Delivery Innovation:**
- AI-assisted diagnosis
- Digital decision support
- Drone delivery
- Telemedicine

**Future Trajectories:**

**Toward SDG Achievement:**
- 2/3 of countries off-track for U5MR target
- Differential progress by cause
- Newborn mortality gap
- Quality imperative

**Emerging Challenges:**
- Pandemic preparedness
- Climate adaptation
- Urban health
- Mental health integration

**Transformative Opportunities:**
- UHC and PHC strengthening
- Early childhood development integration
- Digital health systems
- Community-centered design

**Ethical Considerations:**

**Research Ethics:**
- Trials in children
- Vulnerable population protections
- Community engagement
- Benefit sharing

**Priority-Setting:**
- Who decides priorities?
- Trade-offs in resource allocation
- Rights-based approaches
- Disability perspectives`,
      keyTerms: [
        { term: 'DOHaD', definition: 'Developmental Origins of Health and Disease - theory that early life exposures affect lifelong health', pronunciation: 'DOH-had' },
        { term: 'precision public health', definition: 'Using data to target interventions to populations most likely to benefit' },
        { term: 'Every Woman Every Child', definition: 'UN Secretary-General\'s global movement for women\'s, children\'s, and adolescents\' health' },
        { term: 'context-mechanism-outcome', definition: 'Realist evaluation approach examining how interventions work in different contexts' },
      ],
      clinicalNotes: 'Engage with research and quality improvement. Advocate for child health priorities. Consider developmental alongside survival outcomes. Integrate care across health system levels. Address social determinants affecting patients.',
    },
  },

  media: [
    {
      id: 'under5-mortality-trends',
      type: 'diagram',
      filename: 'under5-mortality-trends.svg',
      title: 'Global Under-5 Mortality Trends',
      description: 'Graph showing decline in child mortality from 1990 to present',
    },
    {
      id: 'causes-child-death',
      type: 'diagram',
      filename: 'causes-child-death-pie.svg',
      title: 'Causes of Under-5 Deaths',
      description: 'Pie chart showing distribution of causes of child mortality',
    },
  ],

  citations: [
    {
      id: 'unicef-child-mortality',
      type: 'website',
      title: 'Levels and Trends in Child Mortality',
      source: 'UN Inter-agency Group for Child Mortality Estimation',
      url: 'https://childmortality.org/',
      license: 'Open Access',
    },
    {
      id: 'lancet-child-survival',
      type: 'article',
      title: 'Child survival and the SDGs',
      source: 'The Lancet',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'maternal-health-global', targetType: 'topic', relationship: 'sibling', label: 'Maternal Health Global' },
    { targetId: 'nutrition-global', targetType: 'topic', relationship: 'sibling', label: 'Global Nutrition' },
    { targetId: 'childhood-immunization-global', targetType: 'topic', relationship: 'related', label: 'Childhood Immunization' },
  ],

  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'pediatrics', 'child-survival'],
    keywords: ['child mortality', 'under-5', 'IMCI', 'neonatal', 'pneumonia', 'diarrhea'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
