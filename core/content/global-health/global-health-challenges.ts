/**
 * Major Global Health Challenges
 *
 * Overview of the most pressing health issues affecting populations worldwide,
 * providing context for understanding global health priorities.
 */

import { EducationalContent } from '../types';

export const GLOBAL_HEALTH_CHALLENGES: EducationalContent = {
  id: 'global-health-challenges',
  type: 'concept',
  name: 'Major Global Health Challenges',
  alternateNames: ['Global Health Priorities', 'World Health Issues', 'International Health Challenges'],

  levels: {
    1: {
      level: 1,
      summary: 'Global health challenges are health problems that affect many people around the world and need countries to work together to solve them.',
      explanation: `People all around the world face health problems. Some of these problems are so big that one country can't fix them alone - countries need to work together!

**The Biggest Health Challenges:**

1. **Diseases that spread from person to person** - Like colds and flu, but much more serious. Examples include tuberculosis and HIV.

2. **Diseases from mosquitoes and other bugs** - Malaria is spread by mosquitoes and makes millions of people sick every year.

3. **Not having enough healthy food** - Many children don't get enough good food to grow strong and healthy.

4. **Clean water and bathrooms** - Billions of people don't have clean water to drink or safe bathrooms, which spreads diseases.

5. **Heart disease and diabetes** - These used to be mainly in rich countries, but now they're everywhere.

6. **Having babies safely** - In some places, having a baby is still dangerous for mothers and newborns.

**Why It Matters:**
- What happens in one country can affect people everywhere
- When we help others stay healthy, we help ourselves too
- Everyone deserves a chance to be healthy, no matter where they live`,
      keyTerms: [
        { term: 'global health', definition: 'Health issues that affect people in many different countries around the world' },
        { term: 'infectious disease', definition: 'Sicknesses that can spread from one person to another' },
        { term: 'epidemic', definition: 'When a disease spreads quickly to many people in an area' },
      ],
      analogies: [
        'Global health is like a team sport - every country has to play their part, and we all win or lose together.',
        'Diseases don\'t need passports - they can travel from country to country just like people do.',
      ],
      examples: [
        'When COVID-19 started spreading, it quickly went from one country to every country in the world.',
        'Organizations like the United Nations help countries work together to vaccinate children everywhere.',
      ],
    },
    2: {
      level: 2,
      summary: 'Global health challenges include infectious disease outbreaks, chronic disease epidemics, maternal and child health issues, and environmental health threats that require international cooperation to address.',
      explanation: `Global health refers to health issues that transcend national boundaries and require coordinated action from multiple countries. These challenges affect billions of people and shape health priorities worldwide.

**Major Categories of Global Health Challenges:**

**1. Infectious Diseases**
- **HIV/AIDS**: ~38 million people living with HIV globally
- **Tuberculosis**: ~10 million new cases annually, leading infectious disease killer
- **Malaria**: ~250 million cases per year, mostly in sub-Saharan Africa
- **Emerging diseases**: COVID-19, Ebola, Zika show how new diseases can spread rapidly

**2. Maternal and Child Health**
- ~300,000 women die annually from pregnancy-related causes
- ~5 million children under 5 die each year, many from preventable causes
- Malnutrition contributes to nearly half of all child deaths

**3. Non-Communicable Diseases (NCDs)**
- Heart disease, stroke, cancer, diabetes, chronic respiratory diseases
- Cause 74% of all deaths worldwide
- Rising rapidly in low and middle-income countries

**4. Environmental and Social Factors**
- 2 billion people lack safe drinking water
- Air pollution contributes to 7 million deaths annually
- Climate change threatens food security and spreads disease vectors

**5. Health System Weaknesses**
- Many countries lack adequate healthcare workers
- Essential medicines unavailable in many regions
- Weak disease surveillance systems

**Why These Are "Global" Challenges:**
- Diseases spread across borders through travel and trade
- Shared environmental threats like climate change
- Economic interdependence means health crises affect everyone
- Solutions require sharing resources and knowledge`,
      keyTerms: [
        { term: 'pandemic', definition: 'A disease outbreak that spreads across multiple countries or continents', pronunciation: 'pan-DEM-ik' },
        { term: 'non-communicable disease', definition: 'Chronic conditions that are not spread from person to person, like heart disease or diabetes' },
        { term: 'health equity', definition: 'The principle that everyone should have a fair opportunity to be as healthy as possible' },
        { term: 'disease surveillance', definition: 'Systems for monitoring and tracking disease outbreaks' },
        { term: 'health systems', definition: 'All the organizations, institutions, and resources focused on delivering health care' },
      ],
      analogies: [
        'Global health is like cybersecurity - a weakness anywhere can become a threat everywhere.',
      ],
    },
    3: {
      level: 3,
      summary: 'The global health landscape is characterized by a dual burden of persistent infectious diseases and rising non-communicable diseases, compounded by health system fragility, social determinants of health, and emerging threats including antimicrobial resistance and climate change.',
      explanation: `Global health challenges represent complex, interconnected problems that require multisectoral and international collaboration. Understanding these challenges provides context for health policy, resource allocation, and individual health decisions.

**The Epidemiologic Transition and Double Burden:**

Many low and middle-income countries (LMICs) face a "double burden" of disease:
- Persistent burden of infectious diseases (TB, malaria, HIV, diarrheal diseases)
- Rising epidemic of NCDs (cardiovascular disease, diabetes, cancer)
- Limited health system capacity to address both simultaneously

**Leading Global Health Challenges by Impact:**

**Infectious Diseases:**
| Disease | Annual Deaths | Key Populations |
|---------|--------------|-----------------|
| Tuberculosis | 1.3 million | HIV-positive, malnourished, imprisoned |
| HIV/AIDS | 650,000 | Sub-Saharan Africa, key populations |
| Malaria | 620,000 | Children <5 in Africa (95% of deaths) |
| Hepatitis B/C | 1.1 million | Injection drug users, high-prevalence regions |

**Non-Communicable Diseases:**
- Cardiovascular disease: 17.9 million deaths/year (leading cause globally)
- Cancer: 10 million deaths/year
- Chronic respiratory diseases: 4 million deaths/year
- Diabetes: 1.5 million deaths/year (plus complications)

**Maternal and Child Health:**
- Maternal mortality ratio: 223 per 100,000 live births globally (>500 in some regions)
- Under-5 mortality: 37 per 1,000 live births globally
- Neonatal mortality accounts for 47% of under-5 deaths
- Leading causes: preterm birth, birth asphyxia, infections, malnutrition

**Emerging and Cross-Cutting Threats:**

1. **Antimicrobial Resistance (AMR)**
   - 1.27 million deaths directly attributable to AMR (2019)
   - Threatens to undermine modern medicine
   - Drug-resistant TB, malaria, HIV emerging

2. **Climate Change and Health**
   - Expanding range of disease vectors
   - Heat-related mortality
   - Food and water insecurity
   - Climate-sensitive diseases

3. **Health System Resilience**
   - Health worker shortages (18 million deficit by 2030)
   - Supply chain vulnerabilities exposed by COVID-19
   - Universal Health Coverage (UHC) remains distant goal

**Frameworks for Action:**
- Sustainable Development Goals (SDGs), particularly SDG 3 (Good Health and Well-being)
- Universal Health Coverage as organizing principle
- Primary Health Care strengthening
- One Health approach (human-animal-environment interface)`,
      keyTerms: [
        { term: 'epidemiologic transition', definition: 'The shift in disease patterns from infectious to chronic diseases as countries develop', pronunciation: 'ep-ih-dee-mee-oh-LOJ-ik' },
        { term: 'double burden of disease', definition: 'When a population faces high rates of both infectious diseases and non-communicable diseases simultaneously' },
        { term: 'antimicrobial resistance', definition: 'When bacteria, viruses, or parasites evolve to resist the drugs designed to kill them' },
        { term: 'Universal Health Coverage', definition: 'Ensuring all people have access to needed health services without financial hardship' },
        { term: 'One Health', definition: 'An approach recognizing the interconnection of human, animal, and environmental health' },
      ],
      clinicalNotes: 'Understanding global health patterns helps clinicians: (1) assess travel-related illness risk, (2) consider imported infectious diseases in differential diagnosis, (3) recognize how social determinants affect patient health, (4) practice cultural humility with diverse patient populations.',
    },
    4: {
      level: 4,
      summary: 'Contemporary global health challenges reflect the intersection of epidemiologic, demographic, and environmental transitions, with persistent inequities driven by structural determinants, and emerging threats that test the resilience of health systems and international health governance frameworks.',
      explanation: `**Structural Analysis of Global Health Challenges:**

The current global health landscape must be understood through multiple intersecting transitions:

**1. Epidemiologic Transition**
Omran's classic model describes the shift from infectious to chronic disease dominance, but the reality is more complex:
- **Age of pestilence and famine** (high mortality, infectious diseases)
- **Age of receding pandemics** (declining mortality, emerging chronic diseases)
- **Age of degenerative diseases** (NCDs dominate)
- **Counter-transition**: Emergence of new infectious diseases (HIV, COVID-19)
- **Polarized transition**: Coexistence of patterns within countries (urban vs. rural)

**2. Demographic Transition**
- Population aging creates new demands (dementia, multimorbidity)
- Urbanization (68% will live in cities by 2050)
- Migration and displacement (100+ million forcibly displaced)

**3. Environmental Transition**
- Anthropogenic climate change
- Biodiversity loss increasing zoonotic spillover risk
- Environmental degradation affecting food and water security

**Quantifying the Challenge - Global Burden of Disease:**

| Metric | Definition | Leading Causes |
|--------|------------|----------------|
| DALY (Disability-Adjusted Life Year) | Years of healthy life lost | Ischemic heart disease, neonatal disorders, stroke |
| YLL (Years of Life Lost) | Premature mortality | Ischemic heart disease, neonatal disorders, stroke |
| YLD (Years Lived with Disability) | Morbidity burden | Low back pain, headache disorders, depressive disorders |

**Leading Risk Factors (GBD 2019):**
1. High systolic blood pressure
2. Tobacco use
3. Dietary risks
4. Air pollution
5. High fasting plasma glucose
6. High BMI
7. Child and maternal malnutrition

**Health System Challenges:**

*Human Resources for Health:*
- WHO estimates 4.45 health workers per 1,000 population needed for UHC
- 83 countries below this threshold
- Maldistribution between urban and rural areas
- Brain drain from LMICs to high-income countries

*Essential Medicines Access:*
- 2 billion people lack access to essential medicines
- TRIPS flexibilities for public health underutilized
- Supply chain vulnerabilities

*Financing:*
- 100+ million pushed into extreme poverty by health expenditures annually
- Domestic resource mobilization insufficient in many LMICs
- Development assistance for health shifting (COVID-19 disruption)

**Emerging Threats Requiring Novel Responses:**

*Pandemic Preparedness:*
- COVID-19 exposed gaps in surveillance, response capacity, and equity
- Pandemic treaty negotiations ongoing
- ACT-Accelerator model for countermeasure access

*Antimicrobial Resistance:*
- Estimated 10 million annual deaths by 2050 if unaddressed
- New antibiotic development insufficient
- Stewardship programs essential but under-implemented

*Infodemic and Health Misinformation:*
- Erosion of vaccine confidence
- Challenge for public health communication
- Social media amplification

**Governance Frameworks:**
- International Health Regulations (IHR 2005)
- Framework Convention on Tobacco Control (FCTC)
- Global Health Security Agenda
- Global Fund, Gavi, PEPFAR as financing mechanisms`,
      keyTerms: [
        { term: 'DALY', definition: 'Disability-Adjusted Life Year - metric combining years of life lost to premature death and years lived with disability', pronunciation: 'DAL-ee' },
        { term: 'zoonotic spillover', definition: 'When pathogens jump from animal hosts to infect humans' },
        { term: 'TRIPS flexibilities', definition: 'Legal provisions in WTO agreements allowing countries to override patents for public health needs' },
        { term: 'International Health Regulations', definition: 'Binding international law for preventing and responding to public health emergencies' },
        { term: 'countermeasures', definition: 'Vaccines, therapeutics, diagnostics used in outbreak response' },
      ],
      clinicalNotes: 'The GBD provides data to inform clinical priority-setting and policy. Understanding risk factor attribution helps design prevention strategies. Health system constraints in LMICs affect feasibility of treatment recommendations developed in high-resource settings.',
    },
    5: {
      level: 5,
      summary: 'Global health operates at the intersection of complex adaptive systems involving epidemiologic dynamics, political economy, health systems architecture, and international relations, with contemporary challenges requiring transdisciplinary approaches and reformed global health governance.',
      explanation: `**Theoretical Frameworks for Global Health:**

Global health has evolved from tropical medicine and international health to a field that explicitly addresses health equity and the political, economic, and social determinants of health at a global scale.

**Conceptual Evolution:**
- Colonial/tropical medicine (19th-early 20th century): Disease control in colonies
- International health (mid-20th century): Nation-state focused, vertical programs
- Global health (21st century): Transnational, equity-focused, multisectoral

**Political Economy of Global Health:**

*Structural Determinants:*
- Global trade and investment rules affecting health
- Debt burdens constraining health spending in LMICs
- Tax avoidance reducing domestic resource mobilization
- Climate justice and health equity linkages

*Power Dynamics in Global Health Governance:*
- WHO reform debates (financing, authority, composition)
- Geopolitical tensions affecting multilateral cooperation
- Role of philanthropic foundations (e.g., Gates Foundation)
- Corporate influence on health policy
- Civil society and social movements

**Health Systems Science Perspective:**

*Building Blocks (WHO Framework):*
1. Service delivery
2. Health workforce
3. Health information systems
4. Access to essential medicines
5. Financing
6. Leadership/governance

*Systems Thinking Approaches:*
- Feedback loops (positive/negative)
- Emergent properties
- Path dependency
- Complexity science applications

*Primary Health Care as Foundation:*
- Alma-Ata Declaration (1978) renewed relevance
- Comprehensive vs. selective PHC debates
- Community health worker programs
- Social participation in health

**Current Research Frontiers:**

*Implementation Science:*
- Context adaptation frameworks (CFIR, RE-AIM)
- Scale-up and sustainability
- Deimplementation of low-value care
- Learning health systems

*Data and Digital Health:*
- Routine health information systems (DHIS2)
- Civil registration and vital statistics
- Artificial intelligence applications
- Digital health equity concerns

*Planetary Health:*
- Anthropocene health impacts
- Commercial determinants of health
- Planetary boundaries and safe operating space
- Co-benefits of climate and health interventions

**Critical Perspectives on Global Health:**

*Decolonizing Global Health:*
- Power imbalances in research partnerships
- Knowledge production and epistemic justice
- Local vs. global priority-setting
- Reparative approaches

*Health Security vs. Health Equity Tensions:*
- Securitization of health
- Border control measures
- Equity in countermeasure access
- Mutual obligations and solidarity

*Metrics and What Gets Counted:*
- Limitations of DALY methodology
- Whose values in health valuation?
- Data colonialism concerns
- Beyond biomedical outcomes

**Looking Forward - Key Debates:**

1. **Pandemic Treaty**: Binding instrument for pandemic PPR? Pathogen access and benefit sharing?
2. **WHO Reform**: Increased assessed contributions? Emergency powers?
3. **UHC Achievement**: Financing mechanisms? Essential packages?
4. **AMR**: How to incentivize antibiotic development? Global surveillance?
5. **Climate and Health**: Adaptation vs. mitigation? Loss and damage?

**Clinical Implications:**
Understanding these systemic factors helps clinicians:
- Advocate for policies affecting patient health
- Engage with health system strengthening
- Practice global health ethics
- Contribute to health equity through clinical and advocacy roles`,
      keyTerms: [
        { term: 'political economy of health', definition: 'Analysis of how political and economic systems shape health and healthcare' },
        { term: 'planetary health', definition: 'Field examining the health of human civilization and the natural systems on which it depends' },
        { term: 'implementation science', definition: 'Study of methods to promote the adoption and integration of evidence-based practices into routine settings' },
        { term: 'epistemic justice', definition: 'Fairness in knowledge production, validation, and whose knowledge counts' },
        { term: 'health securitization', definition: 'Framing health issues as security threats, with implications for response approaches' },
      ],
      clinicalNotes: 'Clinicians can engage with global health through: (1) Participating in guideline adaptation for local contexts, (2) Contributing to health system improvement initiatives, (3) Advocating for structural changes affecting health equity, (4) Ethical engagement with global health research and practice, (5) Understanding how global dynamics affect local patient populations.',
    },
  },

  media: [
    {
      id: 'global-health-challenges-map',
      type: 'diagram',
      filename: 'global-disease-burden-map.svg',
      title: 'Global Disease Burden by Region',
      description: 'World map showing major health challenges by WHO region',
    },
    {
      id: 'sdg3-targets',
      type: 'diagram',
      filename: 'sdg3-health-targets.svg',
      title: 'SDG 3 Health Targets',
      description: 'Visual overview of Sustainable Development Goal 3 targets',
    },
  ],

  citations: [
    {
      id: 'gbd-2019',
      type: 'article',
      title: 'Global burden of 369 diseases and injuries in 204 countries and territories, 1990-2019',
      authors: ['GBD 2019 Diseases and Injuries Collaborators'],
      source: 'The Lancet',
      url: 'https://www.thelancet.com/gbd',
      license: 'Open Access',
    },
    {
      id: 'who-world-health-statistics',
      type: 'website',
      title: 'World Health Statistics',
      source: 'World Health Organization',
      url: 'https://www.who.int/data/gho',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'lancet-commission-global-health',
      type: 'article',
      title: 'Global Health 2035: A World Converging Within a Generation',
      source: 'The Lancet',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'infectious-diseases-worldwide', targetType: 'topic', relationship: 'child', label: 'Infectious Diseases Worldwide' },
    { targetId: 'ncd-epidemic', targetType: 'topic', relationship: 'child', label: 'NCD Epidemic' },
    { targetId: 'sdoh-overview', targetType: 'topic', relationship: 'related', label: 'Social Determinants of Health' },
    { targetId: 'who-overview', targetType: 'topic', relationship: 'see-also', label: 'World Health Organization' },
  ],

  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'epidemiology', 'health-policy'],
    keywords: ['global health', 'disease burden', 'health equity', 'SDGs', 'universal health coverage'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
