/**
 * World Health Organization Overview
 */

import { EducationalContent } from '../../types';

export const WHO_OVERVIEW: EducationalContent = {
  id: 'who-overview',
  type: 'concept',
  name: 'World Health Organization Overview',
  alternateNames: ['WHO', 'UN Health Agency'],

  levels: {
    1: {
      level: 1,
      summary: 'The World Health Organization (WHO) is the United Nations agency responsible for international public health. It helps all countries work together to improve health worldwide.',
      explanation: `**What Is WHO?**
The World Health Organization is like the world's doctor - it helps countries prevent and treat diseases, and makes sure everyone can access healthcare.

**What Does WHO Do?**
- Sets health standards and guidelines
- Tracks diseases around the world
- Responds to health emergencies
- Helps countries build stronger health systems
- Promotes vaccines and medicines for everyone

**Key Achievements:**
- Led the campaign that eliminated smallpox
- Works to end polio
- Coordinates responses to outbreaks like COVID-19, Ebola
- Creates guidelines doctors use worldwide

**WHO Facts:**
- Founded in 1948
- Headquarters in Geneva, Switzerland
- 194 member countries
- Works in every country in the world`,
      keyTerms: [
        { term: 'WHO', definition: 'World Health Organization - the UN agency for global health' },
        { term: 'international health regulations', definition: 'Rules countries follow to prevent disease spread between nations' },
      ],
      analogies: ['WHO is like a global health coordinator, making sure all countries work together when disease threatens.'],
      examples: ['When COVID-19 emerged, WHO helped coordinate the global response and shared information between countries.'],
    },
    2: {
      level: 2,
      summary: 'WHO is the directing and coordinating authority on international health within the UN system. It provides leadership, shapes research agendas, sets norms, and provides technical support to countries.',
      explanation: `**WHO's Core Functions:**
1. Leadership on global health matters
2. Shaping the research agenda
3. Setting norms and standards
4. Articulating ethical policy options
5. Providing technical support to countries
6. Monitoring and assessing health trends

**Structure:**
- World Health Assembly (194 countries)
- Executive Board
- Director-General
- Six Regional Offices
- 150+ Country Offices

**Key Programs:**
- Health Emergencies Programme
- Universal Health Coverage
- Essential Medicines
- Disease Control Programs
- Health Data and Statistics

**Financing:**
- Assessed contributions (member dues)
- Voluntary contributions
- ~$6 billion budget (2022-2023)
- 80%+ from voluntary sources`,
      keyTerms: [
        { term: 'World Health Assembly', definition: 'Annual meeting of all WHO member states - the supreme decision-making body' },
        { term: 'normative function', definition: 'WHO\'s role in setting international health standards and guidelines' },
      ],
      analogies: ['WHO acts like a health ministry for the whole world, coordinating across countries.'],
    },
    3: {
      level: 3,
      summary: 'WHO exercises its constitutional mandate through normative, technical, and convening functions. It sets global health priorities, develops guidelines, coordinates emergency response, and supports health systems strengthening.',
      explanation: `**Constitutional Mandate:**
"The attainment by all peoples of the highest possible level of health"

**Functions:**

**Normative:**
- International Health Regulations (IHR 2005)
- Framework Convention on Tobacco Control (FCTC)
- Guidelines and standards
- Essential medicines and diagnostics lists

**Technical:**
- Country support
- Capacity building
- Research coordination
- Surveillance systems

**Convening:**
- World Health Assembly
- Expert committees
- Multi-stakeholder initiatives
- Partnerships

**Key Instruments:**
| Instrument | Purpose |
|-----------|---------|
| IHR | Prevent international disease spread |
| FCTC | Tobacco control |
| Guidelines | Clinical and public health standards |
| Prequalification | Medicine/vaccine quality assurance |

**Priority Areas (13th GPW):**
- Universal health coverage
- Health emergencies
- Healthier populations`,
      keyTerms: [
        { term: 'IHR', definition: 'International Health Regulations - binding agreement for health emergencies' },
        { term: 'prequalification', definition: 'WHO process ensuring medicines/vaccines meet quality standards' },
        { term: 'GPW', definition: 'General Programme of Work - WHO\'s strategic plan' },
      ],
      clinicalNotes: 'WHO guidelines inform clinical practice globally. Essential medicines list guides formularies.',
    },
    4: {
      level: 4,
      summary: 'WHO operates within complex global health governance landscape, balancing member state interests, donor priorities, and technical mandates. Reform efforts address financing, governance, and emergency response capacity.',
      explanation: `**Governance Challenges:**

**Financing:**
- Dependence on voluntary contributions
- Earmarked vs. flexible funding
- Sustainable financing proposals
- Resource mobilization

**Authority:**
- Limited enforcement mechanisms
- Sovereign state primacy
- Normative vs. operational tension
- Competing mandates

**Reform Initiatives:**
- Financing reforms
- Emergency response strengthening
- Governance reform proposals
- WHO transformation agenda

**Critical Analysis:**
- Power dynamics in priority-setting
- Donor influence
- Private sector engagement
- Global South voice

**COVID-19 Experience:**
- IHR implementation challenges
- Information sharing delays
- COVAX coordination
- Pandemic treaty negotiations`,
      keyTerms: [
        { term: 'earmarked funding', definition: 'Contributions designated for specific purposes' },
        { term: 'flexible funding', definition: 'Unrestricted contributions WHO can allocate as needed' },
      ],
      clinicalNotes: 'Understand WHO\'s role in guideline development. Engage with consultation processes.',
    },
    5: {
      level: 5,
      summary: 'WHO embodies tensions in global health governance between sovereignty and supranational authority, technical expertise and political interests, and competing visions of health as security vs. right. Reform debates shape future global health architecture.',
      explanation: `**Theoretical Analysis:**

**Global Governance:**
- Multilateralism challenges
- Geopolitical tensions
- Legitimacy questions
- Accountability gaps

**Critical Perspectives:**
- North-South dynamics
- Colonial legacies
- Biomedical bias
- Civil society role

**Reform Debates:**

**Pandemic Treaty:**
- Binding vs. voluntary
- Equity provisions
- Sovereignty concerns
- Industry role

**WHO Strengthening:**
- Financing reform
- Authority expansion
- Regional structure
- Private sector engagement

**Future Scenarios:**
- Strengthened WHO with more authority
- Fragmented global health governance
- Regional health security focus
- Alternative models`,
      keyTerms: [
        { term: 'global health governance', definition: 'Collective action to address health issues requiring cooperation' },
        { term: 'pandemic treaty', definition: 'Proposed international agreement on pandemic preparedness and response' },
      ],
      clinicalNotes: 'Engage with WHO reform processes. Understand governance affects health outcomes.',
    },
  },

  media: [],
  citations: [
    {
      id: 'who-constitution',
      type: 'website',
      title: 'Constitution of the World Health Organization',
      source: 'World Health Organization',
      url: 'https://www.who.int/about/governance/constitution',
      license: 'Open Access',
    },
  ],
  crossReferences: [
    { targetId: 'cdc-global-health', targetType: 'topic', relationship: 'sibling', label: 'CDC Global Health' },
    { targetId: 'global-health-partnerships', targetType: 'topic', relationship: 'sibling', label: 'Global Health Partnerships' },
    { targetId: 'global-health-challenges', targetType: 'topic', relationship: 'related', label: 'Global Health Challenges' },
  ],
  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'health-policy', 'organizations'],
    keywords: ['WHO', 'World Health Organization', 'global health governance', 'UN'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
