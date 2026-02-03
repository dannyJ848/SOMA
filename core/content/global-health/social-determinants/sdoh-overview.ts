/**
 * Social Determinants of Health Overview
 *
 * Educational content about the social conditions that shape health.
 */

import { EducationalContent } from '../../types';

export const SDOH_OVERVIEW: EducationalContent = {
  id: 'sdoh-overview',
  type: 'concept',
  name: 'Social Determinants of Health Overview',
  alternateNames: ['SDOH', 'Social Factors and Health', 'Conditions for Health'],

  levels: {
    1: {
      level: 1,
      summary: 'Social determinants of health are the conditions where people are born, grow, live, work, and age that affect their health. Things like income, education, and neighborhood have a bigger impact on health than healthcare alone.',
      explanation: `Your health isn't just about doctors and medicine. The conditions of your daily life matter even more.

**Key Social Determinants:**
- Where you live
- Your job and income
- Your education
- Access to healthy food
- Safe housing
- Clean water and air
- Social support and community

**Why These Matter:**
Healthcare only accounts for about 20% of what determines health. The other 80% comes from:
- Social and economic factors (40%)
- Health behaviors (30%)
- Physical environment (10%)

**Examples:**
- Children from families with more education tend to be healthier
- Living near green spaces improves mental health
- Job stress and insecurity harm physical health
- Strong social connections help people live longer`,
      keyTerms: [
        { term: 'social determinants', definition: 'The conditions in which people live that affect their health' },
        { term: 'upstream factors', definition: 'Root causes that happen before someone gets sick' },
      ],
      analogies: [
        'Social determinants are like the soil that plants grow in - the best seeds won\'t thrive in poor soil.',
      ],
      examples: [
        'Two people with the same disease may have different outcomes based on whether they have stable housing and income.',
      ],
    },
    2: {
      level: 2,
      summary: 'Social determinants of health (SDOH) are the non-medical factors influencing health outcomes. They include economic stability, education, healthcare access, neighborhood environment, and social context, operating through multiple pathways to shape disease risk and health outcomes.',
      explanation: `The WHO defines SDOH as "conditions in which people are born, grow, work, live, and age, and the wider set of forces and systems shaping daily life."

**Framework (Healthy People 2030):**

**Economic Stability:**
- Employment
- Income
- Expenses
- Debt
- Medical bills
- Support

**Education Access and Quality:**
- Literacy
- Early childhood education
- High school graduation
- Higher education
- Language

**Healthcare Access:**
- Insurance
- Providers
- Services
- Quality

**Neighborhood and Environment:**
- Housing
- Transportation
- Safety
- Parks
- Air and water quality

**Social and Community Context:**
- Social integration
- Support systems
- Community engagement
- Discrimination
- Stress

**Evidence:**
| Factor | % Contribution to Health |
|--------|-------------------------|
| Social/economic | 40% |
| Health behaviors | 30% |
| Clinical care | 20% |
| Physical environment | 10% |`,
      keyTerms: [
        { term: 'SDOH', definition: 'Social Determinants of Health - non-medical factors affecting health', pronunciation: 'S-D-O-H' },
        { term: 'health behaviors', definition: 'Actions individuals take that affect health (diet, exercise, smoking)' },
        { term: 'social cohesion', definition: 'The strength of relationships and sense of solidarity in communities' },
      ],
      analogies: [
        'SDOH are like the current of a river - individual swimmers can fight it, but the current largely determines where people end up.',
      ],
    },
    3: {
      level: 3,
      summary: 'SDOH operate through structural and intermediary determinants that create differential exposure to risk factors. The conceptual framework distinguishes structural factors (socioeconomic position) from intermediary factors (living conditions) that directly affect health.',
      explanation: `**WHO Commission Framework:**

**Structural Determinants:**
- Governance
- Macroeconomic policies
- Social policies (labor, housing, land)
- Public policies (education, health)
- Culture and societal values

**Social Position:**
- Social class
- Gender
- Ethnicity
- Education
- Income
- Occupation

**Intermediary Determinants:**
- Material circumstances
- Psychosocial circumstances
- Behavioral factors
- Biological factors
- Health system

**Pathways:**

**Material:**
- Housing quality
- Working conditions
- Consumption (food, etc.)
- Physical environment

**Psychosocial:**
- Stressful circumstances
- Social support
- Coping resources

**Behavioral:**
- Nutrition
- Physical activity
- Tobacco/alcohol
- Healthcare seeking

**Health System:**
- Access
- Affordability
- Quality
- Responsiveness`,
      keyTerms: [
        { term: 'structural determinants', definition: 'Fundamental social mechanisms that generate social stratification' },
        { term: 'intermediary determinants', definition: 'Conditions that flow from social position and directly affect health' },
        { term: 'material circumstances', definition: 'Physical living and working conditions' },
      ],
      clinicalNotes: 'Screen for social needs at clinical encounters. Use validated screening tools. Connect patients with community resources.',
    },
    4: {
      level: 4,
      summary: 'SDOH are produced by political, economic, and social forces that create inequitable distribution of power and resources. Addressing them requires action on structural determinants, health in all policies approaches, and health system responses.',
      explanation: `**Political Economy of SDOH:**

**Macro-Level Forces:**
- Economic globalization
- Political systems
- Welfare state regimes
- Power relations

**Evidence for Structural Action:**

**Policy Interventions:**
| Sector | Intervention | Health Impact |
|--------|-------------|---------------|
| Income | Cash transfers | Improved health |
| Housing | Housing support | Reduced mortality |
| Education | Early childhood | Long-term health |
| Employment | Job quality | Mental health |

**Health in All Policies:**
- Health impact assessment
- Intersectoral action
- Accountability mechanisms

**Health System Response:**
- Social needs screening
- Community health workers
- Integrated care
- Advocacy role`,
      keyTerms: [
        { term: 'Health in All Policies', definition: 'Approach to ensure health implications considered in all policy decisions' },
        { term: 'social prescribing', definition: 'Linking patients with non-medical community support' },
        { term: 'health impact assessment', definition: 'Process to evaluate potential health effects of policies or projects' },
      ],
      clinicalNotes: 'Integrate social care. Advocate for Health in All Policies. Participate in community health improvement.',
    },
    5: {
      level: 5,
      summary: 'SDOH reflect fundamental organization of society requiring analysis of power, political economy, and historical context. Transformation requires addressing root causes while implementing evidence-based interventions, building social movements, and challenging commercial determinants.',
      explanation: `**Critical Perspectives:**

**Power and SDOH:**
- Political determinants of health
- Commercial determinants
- Corporate power
- Social movements

**Intersectionality:**
- Multiple identities interact
- Systems of oppression
- Unique experiences

**Research Frontiers:**
- Causal inference
- Complex interventions
- Policy evaluation
- Community-engaged

**Transformation:**
- Structural change
- Democratic participation
- Community power
- System redesign`,
      keyTerms: [
        { term: 'political determinants of health', definition: 'How political systems and decisions shape health' },
        { term: 'commercial determinants', definition: 'How private sector activities affect population health' },
        { term: 'community power', definition: 'Collective capacity of communities to influence decisions' },
      ],
      clinicalNotes: 'Engage with structural advocacy. Support community organizing. Challenge commercial determinants.',
    },
  },

  media: [],
  citations: [
    {
      id: 'who-sdoh-commission',
      type: 'website',
      title: 'Commission on Social Determinants of Health',
      source: 'World Health Organization',
      url: 'https://www.who.int/health-topics/social-determinants-of-health',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
  ],

  crossReferences: [
    { targetId: 'poverty-and-health', targetType: 'topic', relationship: 'child', label: 'Poverty and Health' },
    { targetId: 'education-and-health', targetType: 'topic', relationship: 'child', label: 'Education and Health' },
    { targetId: 'environment-and-health', targetType: 'topic', relationship: 'child', label: 'Environment and Health' },
    { targetId: 'health-disparities-overview', targetType: 'topic', relationship: 'related', label: 'Health Disparities' },
  ],

  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'social-determinants', 'health-equity'],
    keywords: ['SDOH', 'social determinants', 'upstream factors', 'health equity'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
