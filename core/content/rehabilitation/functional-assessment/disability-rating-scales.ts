/**
 * Disability Rating Scales - Educational Content
 */

import { EducationalContent } from '../../types';

export const disabilityRatingScales: EducationalContent = {
  id: 'rehab-disability-rating-scales',
  type: 'concept',
  name: 'Disability Rating Scales',
  alternateNames: ['Impairment Ratings', 'Disability Assessment Tools'],

  levels: {
    1: { level: 1, summary: 'Disability rating scales measure how much a condition affects your ability to function and work.', explanation: 'These scales help doctors and insurers understand the impact of health conditions on daily life and work.', keyTerms: [{ term: 'disability rating', definition: 'A measurement of how much a condition limits function' }, { term: 'impairment', definition: 'Loss of body function or structure' }], analogies: ['A disability rating is like a score showing how much a condition affects what you can do.'], examples: ['Getting a disability rating after a back injury to determine benefits.'] },
    2: { level: 2, summary: 'Disability rating scales use standardized criteria to quantify impairment for medical, legal, and insurance purposes.', explanation: 'Various systems exist for rating disability:\n\n**AMA Guides:**\n- Most widely used in US\n- Organ system-based\n- Whole person impairment percentage\n\n**Social Security:**\n- Listing of impairments\n- Residual functional capacity\n- Vocational factors\n\n**VA Rating System:**\n- Combined ratings\n- Service-connected disabilities\n\n**Workers Compensation:**\n- Varies by state\n- Often uses AMA Guides', keyTerms: [{ term: 'AMA Guides', definition: 'American Medical Association Guides to Impairment Rating' }, { term: 'whole person impairment', definition: 'Percentage representing overall impact on function' }, { term: 'residual functional capacity', definition: 'What you can still do despite limitations' }], analogies: ['Disability rating systems are like standardized grading systems for measuring impact of health conditions.'] },
    3: { level: 3, summary: 'Impairment rating follows systematic evaluation of objective findings using standardized criteria while distinguishing between impairment (medical) and disability (functional/legal).', explanation: '## Key Distinctions\n\n- **Impairment**: Anatomic/physiologic abnormality (medical)\n- **Disability**: Inability to perform activities (functional)\n- **Handicap**: Disadvantage in social role (societal)\n\n## AMA Guides Methodology\n\n**Principles:**\n- Based on objective findings\n- Maximum medical improvement required\n- Organ-specific chapters\n- Diagnosis-based impairment (DBI)\n- Functional-based impairment adjustments\n\n**Rating Process:**\n1. Diagnosis confirmation\n2. Class assignment\n3. Grade modifiers\n4. Net adjustment\n5. Final rating\n\n## Common Scales by System\n\n| System | Scales Used |\n|--------|-------------|\n| Spine | ROM, DBI |\n| Neurological | Sensory/motor loss |\n| Extremity | ROM, strength, amputation |\n| Mental | Functional limitations |', keyTerms: [{ term: 'maximum medical improvement', definition: 'Point where condition is stable and unlikely to improve significantly' }, { term: 'diagnosis-based impairment', definition: 'AMA Guides method assigning impairment based on diagnosis' }], clinicalNotes: 'Impairment ratings require the condition to be at maximum medical improvement (MMI). Ratings done before MMI may be inaccurate.' },
    4: { level: 4, summary: 'Advanced impairment rating integrates multiple methodologies, addresses complex cases, and navigates differences between rating systems for accurate and defensible opinions.', explanation: '## Complex Cases\n\n**Multiple Impairments:**\n- Combined values chart\n- Not additive (1 - (1-a)(1-b))\n- Hierarchy considerations\n\n**Pre-existing Conditions:**\n- Apportionment\n- Aggravation vs. new injury\n- Documentation requirements\n\n**Chronic Pain:**\n- Controversial area\n- Pain chapter in AMA Guides 6th\n- Subjective nature challenges\n\n## System Differences\n\n**Workers Comp vs. AMA:**\n- State-specific schedules\n- Different philosophies\n- Legal requirements\n\n**VA vs. AMA:**\n- Different rating criteria\n- Combined ratings method differs\n- Service-connection focus', keyTerms: [{ term: 'apportionment', definition: 'Dividing impairment between pre-existing and new conditions' }, { term: 'combined values', definition: 'Method of combining multiple impairment ratings' }], clinicalNotes: 'Multiple impairments are combined using the Combined Values Chart, not added. This recognizes that second impairment affects a already-impaired whole person.' },
    5: { level: 5, summary: 'Contemporary disability evaluation research explores functional outcome integration, objectivity enhancement, and policy implications of impairment rating methodologies.', explanation: '## Research Issues\n\n**Validity:**\n- Correlation with function\n- Predictive value\n- Inter-rater reliability\n- Criterion validity\n\n**Methodological:**\n- Objectivity limitations\n- Subjectivity in application\n- Cultural factors\n- Evolution of guides\n\n## Policy Implications\n\n**Disability Systems:**\n- Costs and benefits\n- Return to work incentives\n- Access and equity\n- International comparisons\n\n## Future Directions\n\n- Function-based systems\n- Technology for objectivity\n- Standardization\n- Global approaches (ICF)', keyTerms: [{ term: 'inter-rater reliability', definition: 'Consistency of ratings between different evaluators' }], clinicalNotes: 'Impairment ratings have modest correlation with actual functional disability. Function-based approaches are being explored to better capture real-world impact.' },
  },

  media: [],
  citations: [],
  crossReferences: [{ targetId: 'rehab-functional-assessment-overview', targetType: 'topic', relationship: 'parent', label: 'Functional Assessment Overview' }],
  tags: { systems: ['functional'], topics: ['rehabilitation', 'disability', 'impairment rating'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default disabilityRatingScales;
