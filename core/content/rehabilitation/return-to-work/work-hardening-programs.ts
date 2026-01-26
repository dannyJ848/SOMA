/**
 * Work Hardening Programs - Educational Content
 */

import { EducationalContent } from '../../types';

export const workHardeningPrograms: EducationalContent = {
  id: 'rehab-work-hardening-programs',
  type: 'concept',
  name: 'Work Hardening Programs',
  alternateNames: ['Work Conditioning', 'Industrial Rehabilitation'],

  levels: {
    1: { level: 1, summary: 'Work hardening programs help injured workers build up strength and endurance to safely return to their jobs.', explanation: 'If you have been out of work due to injury, work hardening helps prepare your body for the physical demands of your job.', keyTerms: [{ term: 'work hardening', definition: 'Intensive program preparing injured workers to return to work' }, { term: 'work simulation', definition: 'Practicing job tasks in a therapy setting' }], analogies: ['Work hardening is like training camp for returning to your job after an injury.'], examples: ['A construction worker practices lifting, climbing, and carrying in therapy before returning to work.'] },
    2: { level: 2, summary: 'Work hardening is an intensive, job-specific rehabilitation program using real or simulated work tasks to restore physical capacity, productivity, and work behaviors.', explanation: '**Components:**\n- Physical conditioning\n- Work simulation\n- Productivity improvement\n- Work behavior training\n\n**Work Hardening vs. Work Conditioning:**\n| Work Conditioning | Work Hardening |\n|-------------------|----------------|\n| General physical reconditioning | Job-specific simulation |\n| Single discipline | Multidisciplinary |\n| 2-4 hours/day | 4-8 hours/day |\n| Shorter duration | 4-8 weeks typical |\n\n**Goals:**\n- Achieve job demands\n- Improve work tolerance\n- Develop safe work habits\n- Build confidence', keyTerms: [{ term: 'work tolerance', definition: 'Ability to sustain work activities for required duration' }, { term: 'work behaviors', definition: 'Habits and attitudes needed for successful employment' }, { term: 'productivity', definition: 'Amount and quality of work output' }], analogies: ['Work conditioning builds general fitness; work hardening trains for your specific job.'] },
    3: { level: 3, summary: 'Work hardening programs are interdisciplinary, goal-directed interventions using real or simulated work tasks in a structured environment to restore physical function, work tolerance, and worker role behaviors.', explanation: '## Program Standards (CARF)\n\n**Requirements:**\n- Interdisciplinary team\n- Job-specific focus\n- Real/simulated work\n- Productivity emphasis\n- Full day programming\n\n## Components\n\n**Physical:**\n- Strength and flexibility\n- Cardiovascular conditioning\n- Body mechanics\n- Ergonomic training\n\n**Functional:**\n- Work simulation activities\n- Task progression\n- Productivity measurement\n- Safety practices\n\n**Behavioral:**\n- Attendance and punctuality\n- Work pacing\n- Pain management\n- Psychosocial adjustment\n\n## Outcome Measures\n\n- Return to work rate\n- Time to RTW\n- Functional capacity gains\n- Productivity levels\n- Sustainability', keyTerms: [{ term: 'CARF', definition: 'Commission on Accreditation of Rehabilitation Facilities' }, { term: 'body mechanics', definition: 'Proper movement patterns to prevent injury' }], clinicalNotes: 'CARF accreditation requires programs to meet specific standards including interdisciplinary team, job-specific focus, and outcome tracking.' },
    4: { level: 4, summary: 'Advanced work hardening integrates functional restoration principles, psychological components, and employer engagement to achieve sustainable return to work for complex cases.', explanation: '## Functional Restoration\n\n**Philosophy:**\n- Physical deconditioning addressed\n- Psychological barriers identified\n- Function over pain focus\n- Quota-based progression\n\n**Psychological Components:**\n- Fear-avoidance management\n- Pain coping skills\n- Self-efficacy building\n- Cognitive-behavioral techniques\n\n## Employer Integration\n\n- Worksite evaluation\n- Transitional duty planning\n- Supervisor communication\n- Job modification\n\n## Complex Cases\n\n- Chronic pain\n- Multiple barriers\n- Failed prior RTW\n- Comorbid conditions', keyTerms: [{ term: 'functional restoration', definition: 'Comprehensive program addressing physical and psychological barriers to function' }, { term: 'quota-based progression', definition: 'Advancing based on set goals rather than pain' }], clinicalNotes: 'Functional restoration approaches treat chronic disability as a deconditioning syndrome requiring physical and psychological intervention.' },
    5: { level: 5, summary: 'Contemporary work hardening research addresses program effectiveness, optimal components, and integration with workplace-based interventions.', explanation: '## Evidence Base\n\n- Moderate evidence for RTW improvement\n- Cost-effectiveness demonstrated\n- Optimal intensity uncertain\n- Active components identified\n\n## Innovation\n\n- Technology integration\n- Remote components\n- Workplace-embedded programs\n- Preventive applications\n\n## Future Directions\n\n- Precision approaches\n- Component optimization\n- Healthcare integration\n- Policy alignment', keyTerms: [{ term: 'workplace-embedded', definition: 'Rehabilitation occurring at the actual workplace' }], clinicalNotes: 'Evidence supports work hardening for improving RTW outcomes, though optimal program characteristics continue to be refined.' },
  },

  media: [],
  citations: [],
  crossReferences: [{ targetId: 'rehab-return-to-work-planning', targetType: 'topic', relationship: 'parent', label: 'Return to Work Planning' }],
  tags: { systems: ['musculoskeletal'], topics: ['rehabilitation', 'work', 'industrial'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default workHardeningPrograms;
