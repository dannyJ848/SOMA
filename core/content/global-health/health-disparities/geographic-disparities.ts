/**
 * Geographic Health Disparities
 *
 * Educational content about health differences based on geographic location.
 */

import { EducationalContent } from '../../types';

export const GEOGRAPHIC_DISPARITIES: EducationalContent = {
  id: 'geographic-disparities',
  type: 'concept',
  name: 'Geographic Health Disparities',
  alternateNames: ['Regional Health Differences', 'Place-Based Health Inequities'],

  levels: {
    1: {
      level: 1,
      summary: 'Where you live affects how healthy you are and how long you live. People in some countries and neighborhoods have much better health than others.',
      explanation: `Your address can predict your health more than almost anything else. This is called geographic disparity.

**Between Countries:**
- Life expectancy ranges from 54 years (some African countries) to 85+ years (Japan, Switzerland)
- A baby born in a wealthy country is 15 times more likely to survive than one born in a poor country
- Some diseases exist only in certain parts of the world

**Urban vs. Rural:**
- Cities often have more hospitals and doctors
- Rural areas may be far from healthcare
- But cities can have pollution and overcrowding

**Within Cities:**
- Rich neighborhoods vs. poor neighborhoods
- Some areas have clean parks, others have pollution
- Access to healthy food varies by neighborhood

**Why Location Matters:**
- Healthcare availability
- Clean water and sanitation
- Air quality
- Safe places to exercise
- Access to healthy food
- Jobs and income opportunities`,
      keyTerms: [
        { term: 'geographic disparity', definition: 'Differences in health based on where people live' },
        { term: 'urban', definition: 'Related to cities and towns' },
        { term: 'rural', definition: 'Related to countryside areas, usually far from cities' },
      ],
      analogies: [
        'Your zip code can be more important for your health than your genetic code.',
      ],
      examples: [
        'In some US cities, life expectancy can differ by 20+ years between neighborhoods just a few miles apart.',
      ],
    },
    2: {
      level: 2,
      summary: 'Geographic disparities in health manifest at multiple scales - global, national, regional, and local. These reflect differential distribution of resources, exposures, and opportunities shaped by historical and ongoing processes.',
      explanation: `Place matters for health through multiple pathways including healthcare access, environmental exposures, and social conditions.

**Global Scale:**
| Region | Life Expectancy | U5MR (per 1,000) |
|--------|-----------------|------------------|
| Sub-Saharan Africa | 61 | 74 |
| South Asia | 70 | 37 |
| Latin America | 76 | 14 |
| Europe | 78 | 5 |
| North America | 79 | 6 |

**Urban-Rural Divide:**

**LMICs:**
- Urban health often better (more services)
- But urban poor may be worse off
- Rural areas underserved

**HICs:**
- Urban advantages in specialty care
- Rural challenges: workforce, distance
- Some rural areas surprisingly healthy

**Neighborhood Effects:**

**Mechanisms:**
- Physical environment (pollution, green space)
- Food environment (supermarkets vs. fast food)
- Healthcare availability
- Social environment (cohesion, crime)
- Economic opportunity

**Drivers:**
- Historical policies (redlining, zoning)
- Current investment patterns
- Transportation infrastructure
- Political representation`,
      keyTerms: [
        { term: 'neighborhood effect', definition: 'How characteristics of a neighborhood independently affect resident health' },
        { term: 'food desert', definition: 'Area with limited access to affordable, nutritious food' },
        { term: 'healthcare deserts', definition: 'Geographic areas with insufficient healthcare services' },
      ],
      analogies: [
        'A food desert is like living near an oasis you can\'t drink from - stores exist but healthy options don\'t.',
      ],
    },
    3: {
      level: 3,
      summary: 'Geographic disparities emerge from spatial distribution of resources and risks, shaped by political economy and historical processes. Analysis requires understanding of place-based mechanisms and multi-level determinants.',
      explanation: `Geographic health disparities operate through contextual effects independent of individual characteristics.

**Conceptual Framework:**

**Compositional Effects:**
- Who lives where
- Individual characteristics of residents
- Selection and migration

**Contextual Effects:**
- Place characteristics themselves
- Physical environment
- Social environment
- Service environment

**Measurement Approaches:**

**Spatial Analysis:**
- GIS mapping
- Spatial clustering
- Travel time analysis
- Access scores

**Multi-Level Modeling:**
- Separating individual and area effects
- Cross-level interactions
- Random slopes models

**Healthcare Access:**

| Component | Dimensions |
|-----------|-----------|
| Availability | Facilities, providers, services |
| Accessibility | Distance, travel time, transport |
| Affordability | Costs, insurance, financial protection |
| Acceptability | Cultural, linguistic appropriateness |
| Accommodation | Hours, appointments, wait times |

**Policy Implications:**
- Facility placement
- Telemedicine
- Mobile health services
- Workforce distribution
- Transportation support`,
      keyTerms: [
        { term: 'compositional effect', definition: 'Health differences due to who lives in an area' },
        { term: 'contextual effect', definition: 'Health differences due to area characteristics themselves' },
        { term: 'spatial clustering', definition: 'Geographic concentration of health outcomes' },
      ],
      clinicalNotes: 'Consider patient geography in care planning. Address transportation barriers. Use telemedicine where appropriate. Connect with community resources.',
    },
    4: {
      level: 4,
      summary: 'Geographic disparities are produced through political-economic processes including development patterns, investment decisions, and policy choices. Addressing them requires spatial justice approaches.',
      explanation: `**Political Economy of Place:**

**Historical Production:**
- Colonial extraction
- Industrialization patterns
- Segregation policies
- Disinvestment cycles

**Contemporary Processes:**
- Globalization effects
- Urban development
- Climate change impacts
- Technology access

**Spatial Justice:**

**Concepts:**
- Right to the city
- Environmental justice
- Transportation equity
- Service equity

**Interventions:**
| Level | Approaches |
|-------|-----------|
| Policy | Zoning reform, investment targeting |
| Health system | Facility location, outreach |
| Community | Place-based initiatives |

**Evidence for Interventions:**
- Area-based initiatives
- HOPE VI housing
- Community development
- Health in all policies`,
      keyTerms: [
        { term: 'spatial justice', definition: 'Fair distribution of resources and opportunities across geography' },
        { term: 'disinvestment', definition: 'Withdrawal of investment from areas, leading to decline' },
        { term: 'place-based initiatives', definition: 'Interventions targeting specific geographic areas' },
      ],
      clinicalNotes: 'Engage with community health needs assessments. Support place-based interventions. Advocate for equitable resource distribution.',
    },
    5: {
      level: 5,
      summary: 'Geographic disparities exemplify how space is socially produced, reflecting power relations and requiring transformation of spatial organization of society. Analysis integrates critical geography, epidemiology, and political economy.',
      explanation: `**Theoretical Integration:**

**Critical Geography:**
- Space as social product
- Scale politics
- Territorial stigma
- Relational place

**Planetary Health:**
- Climate and geography
- Urbanization
- Land use change
- Ecosystem health

**Research Frontiers:**
- Big data and mobility
- Precision public health
- Planetary health geography
- Decolonial approaches

**Transformation:**
- Spatial democracy
- Community ownership
- Reparative development
- Climate justice`,
      keyTerms: [
        { term: 'socially produced space', definition: 'Understanding that geographic space is created through social processes' },
        { term: 'territorial stigma', definition: 'Negative social reputation attached to particular places' },
        { term: 'precision public health', definition: 'Using data to target interventions to specific populations/places' },
      ],
      clinicalNotes: 'Integrate spatial analysis. Advocate for spatial justice. Support community-led development.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'health-disparities-overview', targetType: 'topic', relationship: 'parent', label: 'Health Disparities Overview' },
    { targetId: 'economic-disparities', targetType: 'topic', relationship: 'sibling', label: 'Economic Disparities' },
  ],

  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'health-equity', 'geography'],
    keywords: ['geographic disparities', 'urban health', 'rural health', 'spatial justice'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
