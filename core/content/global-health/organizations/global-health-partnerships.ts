/**
 * Global Health Partnerships
 */

import { EducationalContent } from '../../types';

export const GLOBAL_HEALTH_PARTNERSHIPS: EducationalContent = {
  id: 'global-health-partnerships',
  type: 'concept',
  name: 'Global Health Partnerships',
  alternateNames: ['Public-Private Partnerships', 'Global Health Initiatives'],

  levels: {
    1: {
      level: 1,
      summary: 'Global health partnerships bring together governments, international organizations, charities, and companies to solve health problems that no single group could fix alone.',
      explanation: `**Why Partnerships?**
Big health problems need big solutions. Partnerships combine:
- Government funding and authority
- UN agency expertise
- Charity resources
- Company knowledge and products

**Major Global Health Partnerships:**

**Gavi, the Vaccine Alliance:**
- Provides vaccines to poor countries
- Has helped vaccinate over 1 billion children
- Partners: Governments, WHO, UNICEF, World Bank, Gates Foundation, vaccine makers

**The Global Fund:**
- Fights AIDS, tuberculosis, and malaria
- Has saved 50+ million lives
- Funds programs in 100+ countries

**Gates Foundation:**
- Largest private foundation
- Funds vaccines, diseases of poverty, health innovation

**How They Help:**
- Make medicines affordable
- Deliver healthcare to remote areas
- Train health workers
- Fight specific diseases`,
      keyTerms: [
        { term: 'global health partnership', definition: 'Organizations combining resources to address health challenges' },
        { term: 'public-private partnership', definition: 'Collaboration between governments and private organizations' },
      ],
      analogies: ['Global health partnerships are like a team of specialists combining their skills to treat a difficult patient.'],
      examples: ['Gavi negotiates lower vaccine prices so poor countries can afford to protect their children.'],
    },
    2: {
      level: 2,
      summary: 'Global health partnerships emerged in the late 1990s-2000s to address specific health challenges through multi-stakeholder collaboration. Major partnerships include Gavi, Global Fund, and product development partnerships.',
      explanation: `**Partnership Landscape:**

| Partnership | Focus | Founded | Impact |
|-------------|-------|---------|--------|
| Gavi | Vaccines | 2000 | 1B+ children vaccinated |
| Global Fund | AIDS, TB, malaria | 2002 | 50M+ lives saved |
| PEPFAR | HIV/AIDS | 2003 | 25M on treatment |
| Unitaid | Access to medicines | 2006 | Market shaping |
| CEPI | Epidemic preparedness | 2017 | COVID vaccines |

**Types of Partnerships:**

**Financing Mechanisms:**
- Gavi, Global Fund
- Pool and distribute funds
- Results-based approaches

**Product Development:**
- IAVI (HIV vaccines)
- TB Alliance
- DNDi (neglected diseases)
- Develop drugs/vaccines for poor populations

**Advocacy/Coordination:**
- Roll Back Malaria
- Stop TB Partnership
- Every Woman Every Child

**Governance:**
- Multi-stakeholder boards
- Civil society participation
- Recipient country voice`,
      keyTerms: [
        { term: 'Gavi', definition: 'Vaccine alliance providing immunization to poor countries', pronunciation: 'GAH-vee' },
        { term: 'Global Fund', definition: 'Partnership financing AIDS, TB, and malaria programs' },
        { term: 'product development partnership', definition: 'Organization developing medicines for neglected diseases' },
      ],
      analogies: ['PDPs fill the gap where pharmaceutical companies won\'t go - developing drugs for diseases of the poor.'],
    },
    3: {
      level: 3,
      summary: 'Global health partnerships represent innovative governance mechanisms addressing market failures and coordination challenges. They demonstrate impact while raising questions about fragmentation, accountability, and sustainability.',
      explanation: `**Partnership Models:**

**Financing:**
- Pooled funding from donors
- Results-based financing
- Co-financing mechanisms
- Innovative finance (Unitaid, IFFIm)

**Product Development:**
| PDP | Disease | Products |
|-----|---------|----------|
| DNDi | Neglected diseases | Fexinidazole, others |
| MMV | Malaria | Artemisinin combinations |
| FIND | Diagnostics | TB, HIV tests |

**Market Shaping:**
- Advance Market Commitments
- Volume guarantees
- Tiered pricing
- Pooled procurement

**Evidence of Impact:**

**Gavi:**
- 150+ vaccine introductions
- $15 saved for every $1 invested
- 75% coverage DTP3 → 81%

**Global Fund:**
- TB deaths down 40%
- Malaria deaths down 44%
- 25M AIDS deaths averted

**Critiques:**
- Fragmentation
- Donor-driven priorities
- Sustainability questions
- Accountability gaps`,
      keyTerms: [
        { term: 'advance market commitment', definition: 'Guaranteed funding to incentivize vaccine development' },
        { term: 'market shaping', definition: 'Interventions to improve supply and reduce prices' },
        { term: 'innovative financing', definition: 'Novel mechanisms to generate global health funds' },
      ],
      clinicalNotes: 'Understand how partnerships affect medicine and vaccine availability. Engage with program implementation.',
    },
    4: {
      level: 4,
      summary: 'Global health partnerships operate within complex political economy, balancing donor interests, country ownership, and health impact. Evaluation reveals both achievements and persistent challenges in governance, equity, and sustainability.',
      explanation: `**Political Economy:**

**Drivers:**
- Market failure for diseases of poverty
- Coordination failures
- Donor preferences
- Private sector engagement

**Governance Challenges:**
- Accountability to whom?
- Board composition
- Civil society voice
- Recipient country ownership

**Evaluation Evidence:**

**What Works:**
- Focused mandates
- Results orientation
- Technical expertise
- Resource mobilization

**Challenges:**
- Verticalization
- Health system impact
- Transaction costs
- Sustainability

**Reform Directions:**
- Country platforms
- Health systems strengthening
- Alignment with UHC
- Transition planning`,
      keyTerms: [
        { term: 'verticalization', definition: 'Disease-specific programs operating separately from health systems' },
        { term: 'transition', definition: 'Process of countries graduating from external support' },
      ],
      clinicalNotes: 'Consider program context in clinical practice. Engage with transition planning.',
    },
    5: {
      level: 5,
      summary: 'Global health partnerships reflect broader trends in global governance toward networked, multi-stakeholder arrangements. Critical analysis examines power dynamics, legitimacy, and implications for health sovereignty and equity.',
      explanation: `**Critical Analysis:**

**Power Dynamics:**
- Donor influence
- Foundation power
- Private sector role
- LMIC voice

**Legitimacy Questions:**
- Democratic accountability
- Representation
- Transparency
- Community engagement

**Alternative Models:**
- South-South cooperation
- Regional initiatives
- Country-led platforms
- Community ownership

**Future Directions:**
- Pandemic preparedness
- Climate and health
- UHC integration
- Decolonization

**Research Agenda:**
- Governance effectiveness
- Health system impact
- Equity analysis
- Accountability mechanisms`,
      keyTerms: [
        { term: 'health sovereignty', definition: 'Countries\' right and capacity to determine own health policies' },
        { term: 'South-South cooperation', definition: 'Development assistance between developing countries' },
      ],
      clinicalNotes: 'Engage critically with partnership programs. Support country ownership. Advocate for equity.',
    },
  },

  media: [],
  citations: [
    {
      id: 'gavi',
      type: 'website',
      title: 'Gavi, the Vaccine Alliance',
      source: 'Gavi',
      url: 'https://www.gavi.org/',
      license: 'Open Access',
    },
    {
      id: 'global-fund',
      type: 'website',
      title: 'The Global Fund',
      source: 'The Global Fund to Fight AIDS, Tuberculosis and Malaria',
      url: 'https://www.theglobalfund.org/',
      license: 'Open Access',
    },
  ],
  crossReferences: [
    { targetId: 'who-overview', targetType: 'topic', relationship: 'sibling', label: 'WHO Overview' },
    { targetId: 'cdc-global-health', targetType: 'topic', relationship: 'sibling', label: 'CDC Global Health' },
    { targetId: 'vaccine-equity', targetType: 'topic', relationship: 'related', label: 'Vaccine Equity' },
  ],
  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'health-policy', 'organizations'],
    keywords: ['Gavi', 'Global Fund', 'partnerships', 'global health governance'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
