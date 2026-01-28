/**
 * Teach-Back Method - Confirming Patient Understanding
 */

import { EducationalContent } from '../../types';

export const teachBackCommunication: EducationalContent = {
  id: 'health-literacy-communication-teach-back',
  type: 'concept',
  name: 'Teach-Back Method for Communication',
  alternateNames: ['Show-Me Method', 'Closing the Loop'],

  levels: {
    1: {
      level: 1,
      summary: 'Teach-back is when your doctor asks you to explain what you learned in your own words.',
      explanation: `**What is Teach-Back?**

After your doctor explains something, they might say: "Can you tell me in your own words what you are going to do?"

This helps BOTH of you make sure the information was clear!

**Remember:** Teach-back is NOT a test of you. It is a tool to make sure you got the information you need.`,
      keyTerms: [
        { term: 'teach-back', definition: 'When a doctor asks you to repeat information in your own words' },
        { term: 'understanding', definition: 'Knowing what something means and what to do' },
      ],
      analogies: ['Teach-back is like when a coach shows you how to throw a ball, then watches you try it'],
      examples: ['Nurse asks: Can you tell me when you will take your pill?'],
      patientCounselingPoints: ['Teach-back helps YOU, not just the doctor', 'It is okay to ask for more explanation'],
    },
    2: {
      level: 2,
      summary: 'Teach-back confirms patient understanding through having them explain information back.',
      explanation: `## What is Teach-Back?

1. Provider explains important health information
2. Provider asks patient to explain it back in their own words
3. Provider re-teaches any unclear information
4. Cycle continues until understanding is confirmed

## Key Principle

It is About the Provider, Not the Patient - frame it as checking YOUR explanation was clear.`,
      keyTerms: [
        { term: 'teach-back method', definition: 'Technique where patients repeat information to verify understanding' },
        { term: 'closing the loop', definition: 'Completing the communication cycle' },
      ],
      patientCounselingPoints: ['You can use teach-back yourself by summarizing what you heard'],
    },
    3: {
      level: 3,
      summary: 'Teach-back is a validated technique that improves understanding and reduces readmissions.',
      explanation: `## Evidence Base

- Reduces 30-day hospital readmissions by 12-30%
- Improves medication adherence
- Enhances recall of discharge instructions

## Implementation Steps

1. Plan key points (limit to 3-5 messages)
2. Explain clearly using plain language
3. Assess with teach-back using open-ended questions
4. Re-teach unclear portions
5. Confirm understanding`,
      keyTerms: [
        { term: 'chunk and check', definition: 'Providing information in small pieces with teach-back after each' },
        { term: 'plain language', definition: 'Communication that audience can understand the first time' },
      ],
      clinicalNotes: 'Document teach-back in EHR. Train all patient-facing staff.',
    },
    4: {
      level: 4,
      summary: 'Teach-back is a core health literacy intervention with robust evidence base.',
      explanation: `## Research Evidence

- Consistent improvement in comprehension
- Reduction in hospitalizations (OR 0.7-0.8)
- Project RED showed 30% reduction in rehospitalizations

## Implementation Science

Barriers: Time pressures, lack of training, skepticism
Strategies: Training workshops, EHR integration, team-based approaches`,
      keyTerms: [
        { term: 'Project RED', definition: 'Re-Engineered Discharge program using teach-back' },
        { term: 'fidelity', definition: 'Degree to which intervention is delivered as intended' },
      ],
      clinicalNotes: 'Build teach-back into discharge workflows and EHR templates.',
    },
    5: {
      level: 5,
      summary: 'Teach-back represents a critical patient safety intervention and standard of care.',
      explanation: `## Evidence Synthesis

Meta-analyses show consistent positive effects on comprehension across diverse populations.

## Implementation Frameworks

RE-AIM: Reach all patients, demonstrate Effectiveness, ensure Adoption, support Implementation, maintain over time.

## Policy Integration

- HCAHPS communication domains
- CMS Hospital Readmissions Reduction Program
- Joint Commission patient communication standards`,
      keyTerms: [
        { term: 'RE-AIM framework', definition: 'Framework assessing Reach, Effectiveness, Adoption, Implementation, Maintenance' },
        { term: 'health literate organization', definition: 'Organization that facilitates navigation and use of services' },
      ],
      clinicalNotes: 'System priorities: Leadership commitment, training, EHR integration, quality metrics.',
    },
  },

  media: [],
  citations: [{ id: 'ahrq-teachback', type: 'website', title: 'Use the Teach-Back Method', source: 'AHRQ' }],
  crossReferences: [{ targetId: 'health-literacy-basics', targetType: 'concept', relationship: 'parent', label: 'Health Literacy Basics' }],
  tags: { systems: ['communication-skills'], topics: ['health literacy', 'teach-back'], keywords: ['teach-back', 'closing the loop'], clinicalRelevance: 'critical' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default teachBackCommunication;
