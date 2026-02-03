/**
 * Education and Health
 */

import { EducationalContent } from '../../types';

export const EDUCATION_AND_HEALTH: EducationalContent = {
  id: 'education-and-health',
  type: 'concept',
  name: 'Education and Health',
  alternateNames: ['Educational Attainment and Health', 'Literacy and Health'],

  levels: {
    1: {
      level: 1,
      summary: 'People with more education tend to be healthier and live longer. Education helps people make better health choices and get better jobs.',
      explanation: `Education affects health in many ways:
- Learn about healthy habits
- Get better jobs with health insurance
- Understand medical information
- Make informed decisions

**Facts:**
- People with college degrees live 5+ years longer
- Mothers with more education have healthier children`,
      keyTerms: [
        { term: 'health literacy', definition: 'Ability to understand and use health information' },
        { term: 'educational attainment', definition: 'Highest level of education completed' },
      ],
      analogies: ['Education is like a key that opens many doors to better health opportunities.'],
      examples: ['Understanding nutrition labels helps people make healthier food choices.'],
    },
    2: {
      level: 2,
      summary: 'Education is strongly associated with health outcomes through pathways including health literacy, economic opportunity, cognitive skills, and social networks. Each additional year of education improves health.',
      explanation: `**Pathways:**
- Economic (income, occupation, insurance)
- Cognitive (problem-solving, planning)
- Social (networks, resources)
- Psychological (control, efficacy)

**Evidence:**
| Outcome | Effect of Education |
|---------|-------------------|
| Mortality | 2-3% reduction per year |
| Chronic disease | Lower rates |
| Health behaviors | Better choices |`,
      keyTerms: [
        { term: 'human capital', definition: 'Skills and knowledge that contribute to productivity' },
        { term: 'self-efficacy', definition: 'Belief in one\'s ability to succeed' },
      ],
      analogies: ['Education builds health like compound interest - benefits accumulate over time.'],
    },
    3: {
      level: 3,
      summary: 'Education affects health through multiple mechanisms including cognitive development, human capital, and psychosocial resources. Effects operate across the life course and across generations.',
      explanation: `**Mechanisms:**
| Mechanism | Effect |
|-----------|--------|
| Cognitive | Problem-solving, information processing |
| Economic | Income, occupation, benefits |
| Social | Networks, resources, norms |
| Psychological | Control, self-efficacy, future orientation |

**Life Course:**
- Early childhood education has lasting effects
- Educational trajectories shape health trajectories
- Intergenerational transmission`,
      keyTerms: [
        { term: 'health literacy', definition: 'Capacity to obtain, process, and understand health information' },
        { term: 'cognitive reserve', definition: 'Brain\'s ability to compensate for damage' },
      ],
      clinicalNotes: 'Assess health literacy. Use plain language. Confirm understanding.',
    },
    4: {
      level: 4,
      summary: 'Educational inequalities reflect broader social stratification. Policy interventions improving educational access and quality have demonstrated health benefits, supporting education as a structural determinant.',
      explanation: `**Policy Evidence:**
| Intervention | Evidence |
|-------------|----------|
| Early childhood education | Improved health trajectories |
| School quality | Long-term health effects |
| Higher education access | Mortality reduction |

**Critical Analysis:**
- Education quality matters, not just quantity
- Credentialism vs. skill
- Screening vs. human capital`,
      keyTerms: [
        { term: 'educational gradient', definition: 'Stepwise relationship between education and health' },
        { term: 'credentialism', definition: 'Reliance on credentials rather than demonstrated ability' },
      ],
      clinicalNotes: 'Support educational attainment. Connect families with resources.',
    },
    5: {
      level: 5,
      summary: 'Education-health relationships reflect broader systems of social reproduction and stratification. Critical analysis examines how educational systems perpetuate or reduce inequalities.',
      explanation: `**Critical Perspectives:**
- Social reproduction theory
- Credential inflation
- Hidden curriculum
- Educational equity vs. equality

**Transformation:**
- Universal quality education
- Life-long learning
- Community education
- Critical pedagogy`,
      keyTerms: [
        { term: 'social reproduction', definition: 'How social inequalities are passed across generations' },
        { term: 'cultural capital', definition: 'Non-financial assets that promote social mobility' },
      ],
      clinicalNotes: 'Advocate for educational equity. Support patient education.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'sdoh-overview', targetType: 'topic', relationship: 'parent', label: 'SDOH Overview' },
  ],
  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'social-determinants', 'education'],
    keywords: ['education', 'health literacy', 'social determinants'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
