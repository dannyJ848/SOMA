/**
 * Environment and Health
 */

import { EducationalContent } from '../../types';

export const ENVIRONMENT_AND_HEALTH: EducationalContent = {
  id: 'environment-and-health',
  type: 'concept',
  name: 'Environment and Health',
  alternateNames: ['Environmental Health', 'Planetary Health'],

  levels: {
    1: {
      level: 1,
      summary: 'The environment around us - the air we breathe, water we drink, and places we live - has a huge impact on our health. Pollution and climate change are making people sick.',
      explanation: `Environmental factors affecting health:
- Air pollution (causes lung and heart disease)
- Water contamination
- Toxic chemicals
- Climate change
- Noise
- Access to green spaces

**Facts:**
- Air pollution causes 7 million deaths per year
- Climate change is the greatest health threat of the 21st century`,
      keyTerms: [
        { term: 'environmental health', definition: 'How the environment affects human health' },
        { term: 'air pollution', definition: 'Harmful substances in the air' },
        { term: 'climate change', definition: 'Long-term changes in temperature and weather patterns' },
      ],
      analogies: ['The environment is like the water fish swim in - if it\'s polluted, everyone gets sick.'],
      examples: ['Children who grow up near highways have more asthma due to air pollution.'],
    },
    2: {
      level: 2,
      summary: 'Environmental factors contribute to approximately 25% of the global disease burden. Major environmental health risks include air pollution, water and sanitation, chemical exposures, and climate change.',
      explanation: `**Environmental Disease Burden:**
| Factor | Annual Deaths |
|--------|--------------|
| Air pollution (outdoor) | 4.2 million |
| Air pollution (indoor) | 3.8 million |
| Unsafe water/sanitation | 1.4 million |
| Climate change | 250,000+ |

**Climate Change and Health:**
- Heat-related illness
- Infectious disease spread
- Food and water insecurity
- Air quality
- Mental health
- Displacement`,
      keyTerms: [
        { term: 'particulate matter', definition: 'Tiny particles in air that can penetrate lungs', pronunciation: 'PM2.5, PM10' },
        { term: 'WASH', definition: 'Water, Sanitation, and Hygiene' },
        { term: 'environmental justice', definition: 'Fair treatment regardless of race in environmental policy' },
      ],
      analogies: ['Climate change is a threat multiplier - it makes every health problem worse.'],
    },
    3: {
      level: 3,
      summary: 'Environmental health operates through direct exposures (pollution, toxins) and indirect pathways (ecosystem disruption, climate). Environmental justice highlights inequitable distribution of environmental burdens.',
      explanation: `**Pathways:**
| Type | Examples | Health Effects |
|------|----------|----------------|
| Air | PM2.5, ozone, NO2 | Respiratory, cardiovascular |
| Water | Pathogens, chemicals | Infectious, toxic |
| Soil | Heavy metals, pesticides | Neurotoxicity, cancer |
| Climate | Heat, extreme weather | Multiple systems |

**Environmental Justice:**
- Minority communities bear disproportionate burden
- Industrial facility placement
- Climate vulnerability
- Policy voice`,
      keyTerms: [
        { term: 'environmental burden', definition: 'Cumulative environmental exposures affecting health' },
        { term: 'planetary health', definition: 'Health of human civilization and its supporting natural systems' },
      ],
      clinicalNotes: 'Take environmental history. Consider exposures in differential. Connect with environmental health resources.',
    },
    4: {
      level: 4,
      summary: 'Environmental health challenges are produced by economic systems prioritizing extraction and growth. Solutions require transformation of energy, food, and economic systems within planetary boundaries.',
      explanation: `**Political Economy:**
- Externalization of environmental costs
- Regulatory capture
- International environmental governance
- Just transition

**Interventions:**
| Level | Approach |
|-------|----------|
| Policy | Regulation, carbon pricing |
| Infrastructure | Clean energy, WASH |
| Healthcare | Screening, treatment |
| Community | Environmental justice advocacy |`,
      keyTerms: [
        { term: 'planetary boundaries', definition: 'Earth system limits within which humanity can safely operate' },
        { term: 'just transition', definition: 'Shift to sustainable economy that is fair to workers and communities' },
      ],
      clinicalNotes: 'Advocate for environmental policy. Reduce healthcare environmental footprint.',
    },
    5: {
      level: 5,
      summary: 'Environmental health reflects fundamental tensions between economic systems and ecological limits. Planetary health framework recognizes human health depends on flourishing natural systems, requiring civilizational transformation.',
      explanation: `**Planetary Health:**
- Anthropocene
- Ecosystem services
- Tipping points
- Civilizational risk

**Transformation:**
- Degrowth/steady-state economics
- Regenerative systems
- Indigenous knowledge
- Intergenerational justice`,
      keyTerms: [
        { term: 'Anthropocene', definition: 'Proposed geological epoch defined by human impact on Earth' },
        { term: 'ecosystem services', definition: 'Benefits humans derive from ecosystems' },
      ],
      clinicalNotes: 'Engage with climate health advocacy. Consider ecological context of health.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'sdoh-overview', targetType: 'topic', relationship: 'parent', label: 'SDOH Overview' },
  ],
  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'environmental-health', 'climate-change'],
    keywords: ['environment', 'pollution', 'climate change', 'planetary health'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
