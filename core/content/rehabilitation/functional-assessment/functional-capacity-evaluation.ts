/**
 * Functional Capacity Evaluation - Educational Content
 */

import { EducationalContent } from '../../types';

export const functionalCapacityEvaluation: EducationalContent = {
  id: 'rehab-functional-capacity-evaluation',
  type: 'concept',
  name: 'Functional Capacity Evaluation',
  alternateNames: ['FCE', 'Physical Capacity Evaluation', 'Work Capacity Evaluation'],

  levels: {
    1: { level: 1, summary: 'A functional capacity evaluation (FCE) tests how much physical work you can safely do.', explanation: 'An FCE measures your ability to do work-related physical tasks safely.', keyTerms: [{ term: 'FCE', definition: 'Test measuring ability to perform physical work tasks' }], analogies: ['An FCE is like a physical fitness test for work activities.'], examples: ['Lifting tests during an FCE to see how much weight you can handle safely.'] },
    2: { level: 2, summary: 'FCE is a standardized evaluation of physical abilities using functional tasks to determine work capacity and safe activity levels.', explanation: 'FCEs objectively measure physical function for return-to-work and disability decisions.\n\n**Components:**\n- Material handling (lifting, carrying, pushing, pulling)\n- Positional tolerance (sitting, standing, walking)\n- Movement abilities (bending, reaching, climbing)\n- Hand function (gripping, manipulating)\n\n**Uses:**\n- Return-to-work decisions\n- Disability determination\n- Treatment planning\n- Job matching', keyTerms: [{ term: 'material handling', definition: 'Physical activities involving moving objects' }, { term: 'positional tolerance', definition: 'Ability to maintain body positions over time' }], analogies: ['FCE provides a detailed map of your physical abilities and limitations.'] },
    3: { level: 3, summary: 'FCE uses standardized protocols and validity indicators to assess work-related physical capacity while distinguishing between maximum effort and self-limited performance.', explanation: '## FCE Components\n\n**Standardized Protocols:**\n- Isernhagen Work Systems\n- EPIC Lift Capacity\n- Blankenship System\n- ERGOS Work Simulator\n\n**Validity Indicators:**\n- Consistency of effort\n- Heart rate correlation\n- Coefficient of variation\n- Observational signs\n\n**Test Categories:**\n| Category | Examples |\n|----------|----------|\n| Material handling | Floor-to-waist lift, carrying |\n| Positional | Sustained sitting, standing |\n| Mobility | Walking, climbing, balancing |\n| Upper extremity | Grip, manipulation |\n\n**Interpretation:**\n- Match to job demands\n- DOL physical demand levels\n- Restrictions and accommodations', keyTerms: [{ term: 'validity indicators', definition: 'Signs suggesting whether effort was maximal' }, { term: 'DOL physical demand levels', definition: 'Department of Labor classification from sedentary to very heavy' }], clinicalNotes: 'Validity indicators help identify whether performance reflects true capacity or submaximal effort due to pain, fear, or other factors.' },
    4: { level: 4, summary: 'Advanced FCE interpretation integrates biomechanical analysis, psychosocial factors, and job matching to inform complex return-to-work and disability decisions.', explanation: '## Biomechanical Analysis\n\n**Lifting Analysis:**\n- NIOSH lifting equation\n- Spinal loading estimates\n- Safety margins\n\n**Psychosocial Integration:**\n- Fear-avoidance beliefs\n- Pain catastrophizing\n- Self-efficacy\n- Motivation factors\n\n**Job Matching:**\n- Job demands analysis\n- Essential functions\n- Accommodation potential\n- Transitional duty options\n\n**Legal Considerations:**\n- ADA requirements\n- Workers compensation\n- Disability determination\n- Report writing', keyTerms: [{ term: 'NIOSH lifting equation', definition: 'Formula calculating recommended weight limits for lifting' }, { term: 'job demands analysis', definition: 'Systematic description of physical and cognitive job requirements' }], clinicalNotes: 'FCE should be one component of return-to-work decision-making, not the sole determinant. Psychosocial factors significantly influence work outcomes.' },
    5: { level: 5, summary: 'Contemporary FCE research addresses predictive validity, technology integration, and evidence-based protocols to improve reliability and utility in return-to-work and disability contexts.', explanation: '## Research Directions\n\n**Validity Studies:**\n- Predictive validity for return to work\n- Criterion validity\n- Test-retest reliability\n- Cross-cultural adaptation\n\n**Technology:**\n- Sensor-based measurement\n- Real-world monitoring\n- Simulation environments\n- Data analytics\n\n**Implementation:**\n- Protocol standardization\n- Training requirements\n- Quality assurance\n- Cost-effectiveness', keyTerms: [{ term: 'predictive validity', definition: 'Ability of test to predict future outcomes like return to work' }], clinicalNotes: 'Evidence for FCE predictive validity for return to work is moderate. Combining FCE with psychosocial assessment improves prediction.' },
  },

  media: [],
  citations: [],
  crossReferences: [{ targetId: 'rehab-return-to-work-planning', targetType: 'topic', relationship: 'related', label: 'Return to Work Planning' }],
  tags: { systems: ['musculoskeletal'], topics: ['rehabilitation', 'work', 'assessment', 'disability'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default functionalCapacityEvaluation;
