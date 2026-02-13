/**
 * Economic Health Disparities
 *
 * Educational content about health differences based on economic status.
 */

import { EducationalContent } from '../../types';

export const ECONOMIC_DISPARITIES: EducationalContent = {
  id: 'economic-disparities',
  type: 'concept',
  name: 'Economic Health Disparities',
  alternateNames: ['Socioeconomic Health Inequalities', 'Income-Related Health Gaps'],

  levels: {
    1: {
      level: 1,
      summary: 'People with less money tend to be sicker and die younger than wealthy people. This is one of the biggest and most unfair differences in health worldwide.',
      explanation: `Money affects health in many ways. People who are poor face more health problems throughout their lives.

**How Poverty Affects Health:**
- Can't afford doctors or medicine
- Live in polluted or unsafe areas
- Work dangerous jobs
- Have less healthy food options
- More stress and worry
- Less education about health

**The Numbers:**
- Poor people die 10-15 years younger than rich people
- Children in poor families get sick more often
- Poor countries have much worse health outcomes

**It's Not Just About Being Very Poor:**
At every level of income, people with more money are healthier than those with less. This creates a "ladder" of health.

**Breaking the Cycle:**
- Free or affordable healthcare
- Better schools
- Higher minimum wages
- Social support programs
- Safe, affordable housing`,
      keyTerms: [
        { term: 'poverty', definition: 'Having very little money or few possessions' },
        { term: 'income', definition: 'Money earned from work or other sources' },
        { term: 'socioeconomic status', definition: 'A person\'s position in society based on income, education, and job' },
      ],
      analogies: [
        'The income-health gradient is like climbing a mountain - the higher you go economically, the better the view for your health.',
      ],
      examples: [
        'A child born to poor parents is twice as likely to die before age 5 compared to a child born to wealthy parents in the same country.',
      ],
    },
    2: {
      level: 2,
      summary: 'Socioeconomic status is one of the strongest predictors of health outcomes. The relationship follows a gradient, with health improving at each step up the economic ladder. This reflects differential access to resources and exposure to risks.',
      explanation: `Economic circumstances shape health through multiple pathways including material conditions, psychosocial factors, and healthcare access.

**The Social Gradient:**
Health improves incrementally at each socioeconomic level - not just a gap between rich and poor.

**Evidence:**
| Income Quintile | Relative Mortality |
|-----------------|-------------------|
| Top 20% | 1.0 (reference) |
| 2nd | 1.2 |
| 3rd | 1.4 |
| 4th | 1.7 |
| Bottom 20% | 2.0+ |

**Pathways:**

**Material:**
- Housing quality
- Nutrition
- Healthcare access
- Safe environments

**Psychosocial:**
- Chronic stress
- Control and autonomy
- Social support
- Status anxiety

**Behavioral:**
- Smoking rates higher
- Less physical activity
- Diet quality
- Healthcare seeking

**Healthcare:**
- Insurance coverage
- Access to care
- Quality of care
- Preventive services

**Global Dimensions:**
- Between-country wealth gaps
- Within-country inequalities
- Globalization effects
- Economic crises impact`,
      keyTerms: [
        { term: 'social gradient', definition: 'The stepwise relationship between socioeconomic position and health' },
        { term: 'material deprivation', definition: 'Lack of basic resources and living conditions' },
        { term: 'relative deprivation', definition: 'Feeling worse off compared to others, regardless of absolute level' },
      ],
      analogies: [
        'The social gradient shows health is like a escalator - everyone on higher steps has better outcomes than those below.',
      ],
    },
    3: {
      level: 3,
      summary: 'Economic disparities in health reflect structural socioeconomic positioning that shapes life chances. The gradient persists across contexts and outcomes, operating through material, psychosocial, and behavioral pathways with cumulative effects across the life course.',
      explanation: `**Theoretical Frameworks:**

**Fundamental Cause Theory:**
SES embodies access to resources that can be used to avoid disease or minimize consequences:
- Knowledge
- Money
- Power
- Prestige
- Social connections

**Why "Fundamental":**
- Relationship persists across diseases and risk factors
- When one mechanism is addressed, others emerge
- Historical consistency

**Life Course Accumulation:**
Disadvantages accumulate:
- Childhood poverty effects
- Educational pathways
- Occupational trajectories
- Retirement resources

**Measurement:**
| Indicator | Captures |
|-----------|----------|
| Income | Material resources |
| Education | Knowledge, credentials |
| Occupation | Prestige, control, exposure |
| Wealth | Accumulated resources |

**Mechanisms:**

**Stress Pathway:**
- Allostatic load
- Cortisol dysregulation
- Inflammatory markers
- Telomere shortening

**Healthcare Pathway:**
- Insurance coverage gaps
- Undertreatment
- Quality differences
- Care navigation

**Intervention Points:**
- Income support
- Healthcare access
- Early childhood
- Community investment`,
      keyTerms: [
        { term: 'fundamental cause', definition: 'Social condition that affects health through multiple, replaceable mechanisms' },
        { term: 'allostatic load', definition: 'Cumulative physiological burden from chronic stress', pronunciation: 'al-oh-STAT-ik' },
        { term: 'social mobility', definition: 'Movement between socioeconomic positions' },
      ],
      clinicalNotes: 'Screen for social needs. Connect with financial assistance. Consider socioeconomic context in treatment planning.',
    },
    4: {
      level: 4,
      summary: 'Economic health disparities are produced by political-economic systems generating inequality. Addressing them requires understanding of capitalism, welfare states, and policy levers while implementing evidence-based interventions.',
      explanation: `**Political Economy:**

**Inequality Production:**
- Labor market structures
- Taxation policies
- Wealth accumulation
- Social protection

**Welfare State Effects:**
| Regime Type | Health Equity |
|-------------|---------------|
| Social democratic | Better |
| Conservative | Moderate |
| Liberal | Worse |
| Developing | Variable |

**Neoliberalism and Health:**
- Deregulation
- Privatization
- Austerity
- Precarious work

**Policy Evidence:**

**Effective Interventions:**
| Policy | Evidence |
|--------|----------|
| Minimum wage | Moderate |
| EITC/tax credits | Strong |
| Cash transfers | Strong |
| Social insurance | Strong |
| Healthcare expansion | Strong |

**Mechanisms:**
- Direct material effects
- Stress reduction
- Healthcare access
- Capability enhancement

**Implementation:**
- Political feasibility
- Targeting vs. universal
- Administrative efficiency
- Unintended consequences`,
      keyTerms: [
        { term: 'welfare state regime', definition: 'Typology of how governments provide social protection' },
        { term: 'austerity', definition: 'Government policies reducing public spending, often during crises' },
        { term: 'cash transfers', definition: 'Direct money payments to individuals or families' },
      ],
      clinicalNotes: 'Advocate for social policies. Connect patients with benefits. Document social determinants.',
    },
    5: {
      level: 5,
      summary: 'Economic health disparities reflect fundamental organization of society under capitalism. Transformation requires addressing wealth concentration, labor relations, and social reproduction alongside healthcare interventions, within frameworks of economic and health justice.',
      explanation: `**Critical Analysis:**

**Capitalism and Health:**
- Class as social relation
- Exploitation and alienation
- Commodification of health
- Reserve army of labor

**Accumulation by Dispossession:**
- Privatization
- Financialization
- Debt and health
- Extraction

**Intersections:**
- Race and class
- Gender and work
- Migration and precarity

**Alternative Frameworks:**

**Economic Democracy:**
- Worker ownership
- Participatory budgeting
- Community wealth building

**Universal Basic:**
- Income
- Services
- Healthcare

**Research Agenda:**
- Structural interventions
- Natural experiments
- Comparative policy
- Power analysis

**Transformation:**
- Redistribution
- Recognition
- Representation
- Reparation`,
      keyTerms: [
        { term: 'commodification', definition: 'Treating something as a good to be bought and sold' },
        { term: 'economic democracy', definition: 'Economic systems with democratic control over production' },
        { term: 'universal basic income', definition: 'Unconditional cash payment to all citizens' },
      ],
      clinicalNotes: 'Engage with economic justice advocacy. Support alternative models. Center community voice.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'health-disparities-overview', targetType: 'topic', relationship: 'parent', label: 'Health Disparities Overview' },
    { targetId: 'poverty-and-health', targetType: 'topic', relationship: 'related', label: 'Poverty and Health' },
  ],

  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'health-equity', 'economics'],
    keywords: ['economic disparities', 'poverty', 'income', 'social gradient', 'socioeconomic status'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
