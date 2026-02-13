/**
 * Poverty and Health
 */

import { EducationalContent } from '../../types';

export const POVERTY_AND_HEALTH: EducationalContent = {
  id: 'poverty-and-health',
  type: 'concept',
  name: 'Poverty and Health',
  alternateNames: ['Economic Disadvantage and Health', 'Income and Health'],

  levels: {
    1: {
      level: 1,
      summary: 'Poverty makes people sick, and sickness can make people poor. This creates a cycle that is hard to escape without help.',
      explanation: `Being poor affects health in many ways:
- Can't afford food, medicine, or doctors
- Live in unsafe housing
- Work dangerous jobs
- Experience more stress

**The Poverty-Health Cycle:**
1. Poverty leads to poor health (bad nutrition, no healthcare)
2. Poor health leads to poverty (can't work, medical bills)
3. The cycle continues across generations`,
      keyTerms: [
        { term: 'poverty', definition: 'Not having enough money for basic needs' },
        { term: 'poverty trap', definition: 'When being poor creates conditions that keep people poor' },
      ],
      analogies: ['Poverty and illness spin together like a wheel, each making the other worse.'],
      examples: ['A family cannot afford medicine, so a parent cannot work, so they become poorer.'],
    },
    2: {
      level: 2,
      summary: 'Poverty is strongly associated with worse health outcomes through multiple pathways including material deprivation, psychosocial stress, and limited healthcare access. Bidirectional causation creates poverty traps.',
      explanation: `**Pathways from Poverty to Health:**
- Material deprivation (housing, food, medicine)
- Health behaviors (limited choices)
- Psychosocial stress (chronic, toxic)
- Healthcare barriers
- Environmental exposures

**Global Poverty and Health:**
- 700+ million in extreme poverty (<$2.15/day)
- Poverty associated with 2-5x higher mortality
- Children in poverty face lifelong health effects`,
      keyTerms: [
        { term: 'extreme poverty', definition: 'Living on less than $2.15 per day (World Bank definition)' },
        { term: 'toxic stress', definition: 'Prolonged activation of stress response without buffering support' },
      ],
      analogies: ['Poverty acts like a chronic illness itself, constantly undermining health.'],
    },
    3: {
      level: 3,
      summary: 'Poverty operates as a fundamental cause of disease through multiple, replaceable mechanisms. It creates differential exposure to risks, differential vulnerability, and differential consequences of illness.',
      explanation: `**Fundamental Cause Theory:**
Poverty affects health through access to resources:
- Knowledge, money, power, prestige, social connections
- When one pathway closes, others open

**Mechanisms:**
| Pathway | Effect |
|---------|--------|
| Material | Housing, nutrition, medicine |
| Psychosocial | Chronic stress, allostatic load |
| Behavioral | Limited healthy choices |
| Healthcare | Access, quality, timeliness |

**Life Course Effects:**
Childhood poverty has lasting effects on:
- Brain development
- Educational attainment
- Adult health trajectories`,
      keyTerms: [
        { term: 'fundamental cause', definition: 'Factor that affects health through multiple, replaceable mechanisms' },
        { term: 'differential vulnerability', definition: 'How same exposure has different effects based on social position' },
      ],
      clinicalNotes: 'Screen for material hardship. Connect with financial assistance. Consider social context in care planning.',
    },
    4: {
      level: 4,
      summary: 'Poverty is produced by political-economic systems and requires structural interventions. Evidence supports cash transfers, social protection, and healthcare coverage expansion.',
      explanation: `**Political Economy:**
- Poverty not natural but produced
- Policy choices matter
- Welfare states vary in effects

**Evidence for Interventions:**
| Intervention | Evidence | Health Impact |
|-------------|----------|---------------|
| Cash transfers | Strong | Improved child health |
| Social protection | Strong | Reduced mortality |
| Healthcare coverage | Strong | Improved access, outcomes |`,
      keyTerms: [
        { term: 'social protection', definition: 'Policies preventing and alleviating poverty and vulnerability' },
        { term: 'conditional cash transfer', definition: 'Payment contingent on behaviors like school attendance' },
      ],
      clinicalNotes: 'Advocate for social protection. Document social determinants. Support policy advocacy.',
    },
    5: {
      level: 5,
      summary: 'Poverty and health intersect with broader systems of inequality requiring analysis of capitalism, colonialism, and structural violence. Transformation requires addressing root causes alongside immediate needs.',
      explanation: `**Critical Analysis:**
- Poverty as structural violence
- Colonial legacies
- Global economic order
- Commercial determinants

**Transformation:**
- Redistribution
- Reparations
- Economic democracy
- Community ownership`,
      keyTerms: [
        { term: 'structural violence', definition: 'How social structures harm people systematically' },
        { term: 'economic democracy', definition: 'Democratic control over economic decisions' },
      ],
      clinicalNotes: 'Engage with structural advocacy. Support community power building.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'sdoh-overview', targetType: 'topic', relationship: 'parent', label: 'SDOH Overview' },
    { targetId: 'economic-disparities', targetType: 'topic', relationship: 'related', label: 'Economic Disparities' },
  ],
  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'social-determinants', 'poverty'],
    keywords: ['poverty', 'income', 'economic', 'social determinants'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
