/**
 * Global Childhood Immunization
 *
 * Educational content about childhood vaccination programs worldwide,
 * including schedules, coverage, and the global effort to protect children.
 */

import { EducationalContent } from '../../types';

export const CHILDHOOD_IMMUNIZATION_GLOBAL: EducationalContent = {
  id: 'childhood-immunization-global',
  type: 'concept',
  name: 'Global Childhood Immunization',
  alternateNames: ['Pediatric Vaccination', 'Child Immunization Programs', 'EPI'],

  levels: {
    1: {
      level: 1,
      summary: 'Childhood immunization means giving vaccines to babies and children to protect them from dangerous diseases. Around the world, vaccination programs save millions of children\'s lives every year.',
      explanation: `Vaccines are one of the best ways to keep children healthy! When babies are born, they need protection from many diseases, and vaccines provide that shield.

**Why Do Children Need Vaccines?**
- Babies are born with some protection from their mothers, but it fades
- Children's immune systems are still learning to fight diseases
- Many childhood diseases can be very serious or even deadly
- Vaccines teach the body to fight diseases safely

**Vaccines Children Usually Get:**

**In the First Year:**
- Hepatitis B - protects the liver
- DTP - protects against diphtheria, tetanus, and whooping cough
- Polio - prevents paralysis
- Hib - prevents meningitis
- Pneumococcal - prevents lung infections and meningitis
- Rotavirus - prevents severe diarrhea

**At 1-2 Years:**
- Measles, Mumps, Rubella (MMR) - prevents these three diseases
- Varicella - prevents chickenpox

**How Vaccines Have Helped:**
- Smallpox is completely gone because of vaccines
- Polio has almost disappeared
- Measles deaths have dropped by more than 70%
- Millions of children are saved every year

**Why Some Children Don't Get Vaccines:**
- They live far from health clinics
- Their families don't have money for healthcare
- Some parents don't know about vaccines
- Wars and disasters interrupt vaccine programs
- Vaccines need to be kept cold, which is hard in some places

**What's Being Done:**
- Free vaccines for children in most countries
- Health workers go to villages and remote areas
- Organizations like UNICEF help deliver vaccines worldwide`,
      keyTerms: [
        { term: 'immunization', definition: 'Getting a vaccine to become protected against a disease' },
        { term: 'vaccination', definition: 'The act of giving or receiving a vaccine' },
        { term: 'booster', definition: 'An extra vaccine dose given later to make sure protection stays strong' },
      ],
      analogies: [
        'Vaccines are like an instruction manual for your immune system - they show it how to recognize and fight diseases.',
        'Getting vaccines on schedule is like building a strong fortress, one brick at a time.',
      ],
      examples: [
        'In 1980, over 2 million children died from measles each year. Now, thanks to vaccines, that number has dropped to less than 150,000.',
        'The polio vaccine has prevented millions of children from being paralyzed.',
      ],
    },
    2: {
      level: 2,
      summary: 'Global childhood immunization programs, anchored by the Expanded Programme on Immunization (EPI), aim to protect all children with essential vaccines. Coverage has increased dramatically since 1974 but gaps remain, with 14 million "zero-dose" children receiving no vaccines.',
      explanation: `The World Health Organization's Expanded Programme on Immunization (EPI), launched in 1974, has transformed child health globally. From less than 5% coverage initially, approximately 84% of children now receive basic vaccines.

**Core Childhood Vaccines:**

**WHO-Recommended Schedule:**
| Age | Vaccines |
|-----|----------|
| Birth | BCG, Hepatitis B (birth dose) |
| 6 weeks | DTP1, Hib1, PCV1, Polio1, Rotavirus1 |
| 10 weeks | DTP2, Hib2, PCV2, Polio2, Rotavirus2 |
| 14 weeks | DTP3, Hib3, PCV3, Polio3 |
| 9 months | Measles1, Yellow fever* |
| 15-18 months | Measles2, DTP booster |

*In endemic areas

**Global Coverage Statistics (2022):**
| Vaccine | Global Coverage |
|---------|----------------|
| DTP3 | 84% |
| Measles first dose | 83% |
| Hepatitis B birth dose | 45% |
| Rotavirus (complete) | 49% |
| PCV3 | 53% |

**Children Not Reached:**

**Zero-Dose Children:**
- 14.3 million children received no DTP doses (2022)
- Often the poorest and most marginalized
- Live in remote areas, urban slums, or conflict zones
- Concentrated in specific countries and communities

**Under-Immunized Children:**
- 6.8 million didn't complete their primary series
- Started but dropped out
- May have partial protection

**Where Gaps Exist:**
- Sub-Saharan Africa: 25% of zero-dose children
- South Asia: Major concentration
- Conflict zones (Yemen, Syria, Afghanistan)
- Urban slums and mobile populations

**Key Organizations:**

**Gavi, the Vaccine Alliance:**
- Funds vaccines for 57 poorest countries
- Has helped vaccinate over 1 billion children since 2000
- Supports new vaccine introduction

**UNICEF:**
- Largest vaccine buyer worldwide (2+ billion doses/year)
- Supports delivery and cold chain
- Community mobilization

**WHO:**
- Sets global policy and standards
- Technical guidance
- Disease surveillance

**Challenges:**

**Supply Chain:**
- Keeping vaccines cold (2-8°C)
- Reaching remote areas
- Managing stock levels

**Health System:**
- Healthcare worker shortages
- Training and supervision
- Data management

**Demand:**
- Vaccine hesitancy
- Access barriers
- Awareness gaps`,
      keyTerms: [
        { term: 'EPI', definition: 'Expanded Programme on Immunization - WHO program to deliver vaccines to all children', pronunciation: 'ee-pee-eye' },
        { term: 'zero-dose children', definition: 'Children who have never received any routine vaccines' },
        { term: 'Gavi', definition: 'Global vaccine alliance that funds vaccines for poor countries', pronunciation: 'GAH-vee' },
        { term: 'DTP3', definition: 'Third dose of diphtheria-tetanus-pertussis vaccine - key coverage indicator' },
      ],
      analogies: [
        'The EPI is like a global safety net for children - it aims to catch every child and protect them from disease.',
      ],
    },
    3: {
      level: 3,
      summary: 'Global childhood immunization operates through national programs supported by international architecture including WHO policy guidance, Gavi financing, and UNICEF procurement. Achieving universal coverage requires addressing structural barriers, health system gaps, and demand-side challenges.',
      explanation: `Childhood immunization exemplifies global health collaboration, with dramatic achievements and persistent challenges. The architecture involves policy, financing, procurement, and delivery systems working in concert.

**Immunization Program Components:**

**1. Policy and Standards:**
- WHO SAGE recommendations
- National Immunization Technical Advisory Groups (NITAGs)
- Schedule adaptation to local epidemiology
- Quality and safety standards

**2. Financing:**
| Source | Role |
|--------|------|
| Gavi | Co-financing for LICs/LMICs |
| Domestic budgets | Primary funding in MICs/HICs |
| World Bank | Health system support |
| Bilateral aid | Program support |

Gavi financing model:
- Full support for lowest-income countries
- Co-financing increases as countries develop
- Transition to domestic financing

**3. Procurement and Supply:**
- UNICEF Supply Division: largest buyer
- WHO prequalification ensures quality
- Market shaping for price reduction
- Security of supply

**4. Delivery:**
- Fixed-site (health facilities)
- Outreach (mobile teams)
- Campaigns (supplementary immunization activities)
- School-based (older children)

**Vaccine-Specific Considerations:**

**Oral Polio Vaccine (OPV):**
- Type 2 withdrawn due to VAPP risk
- bOPV (types 1 and 3) continuing
- nOPV2 for outbreak response
- IPV introduction for program security

**Rotavirus:**
- Two WHO-prequalified vaccines (Rotarix, RotaTeq)
- Age restrictions (efficacy and intussusception risk)
- Impact on diarrheal mortality

**Pneumococcal Conjugate Vaccine (PCV):**
- Major impact on pneumonia and meningitis
- Multiple products (PCV10, PCV13, PCV15, PCV20)
- Serotype replacement monitoring

**Coverage Equity Analysis:**

**Within-Country Disparities:**
- Wealth quintile gradients (poorest vs. richest)
- Urban-rural gaps
- Geographic (subnational variation)
- Gender differences

**Determinants Framework (Tanahashi):**
1. Availability (services exist)
2. Accessibility (can be reached)
3. Acceptability (culturally appropriate)
4. Contact (actually accessed)
5. Effectiveness (quality of service)

**Monitoring and Surveillance:**

**Coverage Monitoring:**
- Administrative data (doses/target population)
- Household surveys (DHS, MICS)
- Coverage quality indicators

**Disease Surveillance:**
- Case-based surveillance for VPDs
- Laboratory confirmation
- AFP surveillance for polio
- Measles/rubella surveillance

**Adverse Events Following Immunization (AEFI):**
- Passive surveillance systems
- Causality assessment
- Safety signal detection
- Response to safety concerns`,
      keyTerms: [
        { term: 'NITAG', definition: 'National Immunization Technical Advisory Group - expert body advising national policy', pronunciation: 'NYE-tag' },
        { term: 'WHO prequalification', definition: 'Process ensuring vaccines meet international quality, safety, and efficacy standards' },
        { term: 'supplementary immunization activity', definition: 'Mass campaign to vaccinate target population beyond routine services', pronunciation: 'SIA' },
        { term: 'Tanahashi framework', definition: 'Model describing determinants of health service coverage' },
      ],
      clinicalNotes: 'Use every clinical contact as opportunity for vaccination. Check records and offer catch-up. Report AEFI through appropriate channels. Address parental concerns with evidence-based information.',
    },
    4: {
      level: 4,
      summary: 'Childhood immunization programs navigate complex interactions between vaccine immunobiology, epidemiological transitions, health system capacity, and sociopolitical contexts. Achieving IA2030 targets requires systems strengthening, reaching zero-dose children, and adapting to changing landscapes.',
      explanation: `**Strategic Framework: Immunization Agenda 2030**

**Impact Goals:**
- Mortality: 50 million lives saved 2021-2030
- Morbidity: Reduced disease burden
- Access: All people benefit from vaccines

**Coverage Goals:**
- 90% national coverage for essential vaccines
- 80% coverage in every district
- Reduction in zero-dose children

**Equity Goal:**
- 50% reduction in number of zero-dose children

**Programmatic Analysis:**

**Reaching Every Child:**
| Strategy | Target Population |
|----------|------------------|
| Strengthened routine | Accessible areas |
| Outreach | Remote/periodic access |
| Campaigns | Immunity gaps |
| Periodic intensification | Underserved areas |

**Zero-Dose Identification:**
- Geographic analysis (GIS mapping)
- Microplanning with community input
- Civil registration linkage
- Real-time monitoring

**Life-Course Approach:**
- Beyond infancy: boosters, school-age, adolescent vaccines
- HPV integration for adolescent girls
- Adult immunization continuity

**Advanced Immunological Considerations:**

**Schedule Optimization:**
- Maternal antibody interference (younger ages)
- Immunological maturity (response quality)
- Epidemiological necessity (age of disease risk)
- Program feasibility

**Co-administration:**
- Most vaccines can be given simultaneously
- Separate injection sites
- Some exceptions (specific timing requirements)

**Immunocompromised Children:**
- Live vaccines generally contraindicated
- Inactivated vaccines may have reduced response
- Special schedules for HIV-exposed/infected
- Post-transplant revaccination

**Program Quality:**

**Effective Coverage Concept:**
Coverage × Quality × Efficacy = Effective Coverage

Quality dimensions:
- Vaccine potency (cold chain)
- Correct dose and route
- Appropriate age/interval
- Documentation

**Supply Chain Excellence:**
- Effective Vaccine Management (EVM) assessment
- Cold chain equipment optimization
- Stock management systems
- Waste management

**Data for Action:**

**Coverage Quality:**
- Administrative vs. survey data discrepancies
- Denominators accuracy
- Lot quality assurance sampling (LQAS)
- GIS-enabled monitoring

**Disease Impact:**
- Incidence trends post-introduction
- Impact evaluations
- Cost-effectiveness analysis
- Serological surveys

**Outbreak Response:**

**Measles Outbreaks:**
- Rapid response teams
- Case investigation
- Ring vaccination
- Supplementary immunization activities

**cVDPV Outbreaks:**
- nOPV2 deployment
- Mop-up campaigns
- Enhanced surveillance
- International coordination

**Health System Integration:**
- Primary health care alignment
- Community health worker role
- Integration with nutrition, MNCH
- Digital health opportunities`,
      keyTerms: [
        { term: 'zero-dose', definition: 'Children who have not received any routine vaccines, often the most marginalized' },
        { term: 'effective coverage', definition: 'Coverage adjusted for quality and vaccine efficacy' },
        { term: 'microplanning', definition: 'Detailed planning at local level identifying every child and strategies to reach them' },
        { term: 'EVM', definition: 'Effective Vaccine Management - comprehensive supply chain assessment tool' },
      ],
      clinicalNotes: 'Adapt schedules to catch-up needs. Consider epidemiological context for prioritization. Ensure proper storage and handling. Counsel on expected reactions and when to seek care.',
    },
    5: {
      level: 5,
      summary: 'Global childhood immunization operates within complex adaptive systems shaped by scientific advances, implementation science insights, political economy dynamics, and evolving health governance. Achieving transformation requires systems thinking, equity focus, and adaptive strategies.',
      explanation: `**Systems Perspective on Childhood Immunization:**

**Complex Adaptive System Properties:**
- Multiple interacting agents (governments, donors, communities)
- Non-linear dynamics (coverage-disease-behavior feedback)
- Emergence (unintended consequences of interventions)
- Path dependence (historical trajectories shape options)

**Implications:**
- Need for adaptive management
- Local context matters
- Standardized approaches have limits
- Monitoring and learning essential

**Implementation Science:**

**Coverage Determinants Research:**
- Demand-side vs. supply-side barriers
- Individual, interpersonal, community, system factors
- Context-mechanism-outcome configurations

**Evidence-Based Strategies:**
| Strategy | Evidence Level | Effect Size |
|----------|---------------|-------------|
| Reminder/recall | High | Moderate |
| Community health workers | Moderate | Moderate |
| Cash transfers | Moderate | Small-moderate |
| Facility-based strategies | High | Variable |
| Mass media | Low-moderate | Small |

**Implementation Outcomes:**
- Reach, adoption, implementation, maintenance
- Fidelity vs. adaptation balance
- Scaling and sustainability

**Political Economy:**

**Global Governance:**
- WHO normative role (recommendations, standards)
- Gavi as innovative financing mechanism
- UNICEF market power
- Civil society advocacy
- Industry interests

**National Determinants:**
- Political will and leadership
- Governance capacity
- Fiscal space
- Decentralization dynamics

**Sub-National:**
- District health team capacity
- Community ownership
- Provider motivation
- Accountability relationships

**Equity Analysis:**

**Intersecting Inequities:**
- Gender, wealth, geography, ethnicity intersect
- Structural determinants of coverage
- Commercial determinants (marketing, prices)
- Climate and environmental factors

**Pro-Equity Strategies:**
- Universal vs. targeted approaches
- Conditional vs. unconditional support
- Community engagement models
- Social protection linkages

**Research Frontiers:**

**Novel Vaccines:**
- Malaria (RTS,S/AS01 and R21/Matrix-M)
- RSV (maternal and pediatric)
- Improved TB vaccines
- Next-generation pertussis

**Delivery Innovations:**
- Microarray patches
- Controlled-release formulations
- Thermostable vaccines
- Combination vaccines

**Digital Health:**
- Electronic immunization registries
- AI for coverage prediction
- Blockchain for supply chain
- Mobile health engagement

**Future Trajectories:**

**Optimistic Scenario:**
- IA2030 targets achieved
- Zero-dose children reached
- New vaccines protecting against more diseases
- Resilient systems weathering shocks

**Concerning Trends:**
- Vaccine hesitancy expansion
- Climate disruptions
- Pandemic impact persistence
- Funding uncertainties

**Transformative Opportunities:**
- Primary health care strengthening
- Universal health coverage linkage
- Pandemic preparedness integration
- Community-centered design

**Ethical Considerations:**

**Key Issues:**
- Mandates and autonomy
- Priority setting with limited resources
- Research ethics (trials in children)
- Addressing root causes vs. biomedical fix

**Frameworks:**
- Rights-based approach (right to health)
- Capabilities approach (what children can be and do)
- Social justice (equity focus)
- Intergenerational justice`,
      keyTerms: [
        { term: 'complex adaptive system', definition: 'System with many interacting components that evolve and self-organize' },
        { term: 'implementation science', definition: 'Study of methods to promote systematic uptake of evidence-based practices' },
        { term: 'political economy', definition: 'Analysis of how political and economic factors shape policy and programs' },
        { term: 'intersecting inequities', definition: 'Multiple disadvantages combining to create compounded vulnerability' },
      ],
      clinicalNotes: 'Advocate for immunization at policy levels. Engage in quality improvement. Contribute to surveillance and research. Address social determinants affecting patients\' vaccine access.',
    },
  },

  media: [
    {
      id: 'epi-schedule-infographic',
      type: 'diagram',
      filename: 'who-epi-schedule.svg',
      title: 'WHO Recommended Immunization Schedule',
      description: 'Visual representation of childhood vaccine timing',
    },
    {
      id: 'zero-dose-map',
      type: 'diagram',
      filename: 'zero-dose-children-map.svg',
      title: 'Distribution of Zero-Dose Children',
      description: 'Global map showing concentration of unvaccinated children',
    },
  ],

  citations: [
    {
      id: 'who-immunization-data',
      type: 'website',
      title: 'WHO/UNICEF Estimates of National Immunization Coverage',
      source: 'World Health Organization',
      url: 'https://www.who.int/teams/immunization-vaccines-and-biologicals/immunization-analysis-and-insights/global-monitoring/data-statistics-and-graphics',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'gavi-progress-report',
      type: 'website',
      title: 'Gavi Progress Report',
      source: 'Gavi, the Vaccine Alliance',
      url: 'https://www.gavi.org/progress-report',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'vaccine-preventable-overview', targetType: 'topic', relationship: 'parent', label: 'Vaccine-Preventable Diseases' },
    { targetId: 'vaccine-equity', targetType: 'topic', relationship: 'sibling', label: 'Vaccine Equity' },
    { targetId: 'child-health-global', targetType: 'topic', relationship: 'related', label: 'Child Health Global' },
  ],

  tags: {
    systems: ['public-health', 'immune-system'],
    topics: ['global-health', 'pediatrics', 'immunization'],
    keywords: ['childhood vaccines', 'EPI', 'immunization coverage', 'Gavi', 'zero-dose'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
