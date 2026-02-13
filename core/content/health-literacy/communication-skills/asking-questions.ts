/**
 * Asking Questions - How to Get Information from Healthcare Providers
 */

import { EducationalContent } from '../../types';

export const askingQuestions: EducationalContent = {
  id: 'health-literacy-asking-questions',
  type: 'concept',
  name: 'Asking Questions in Healthcare Settings',
  alternateNames: ['How to Ask Your Doctor Questions', 'Patient Question Strategies'],

  levels: {
    1: {
      level: 1,
      summary: 'Learning how to ask good questions helps you understand your health and get the care you need.',
      explanation: `When you go to the doctor, it is important to ask questions. Asking questions is NOT rude - doctors WANT you to ask!

**The Three Questions to Always Ask:**

1. **What is my main problem?**
2. **What do I need to do?**
3. **Why is it important for me to do this?**

**Tips for Asking:**

- Write down your questions BEFORE your visit
- It is okay to say I do not understand
- Ask the doctor to repeat or explain differently
- Bring a friend or family member to help remember`,
      keyTerms: [
        { term: 'diagnosis', definition: 'The name of what is wrong with you or your health problem' },
        { term: 'treatment', definition: 'What the doctor wants you to do to get better' },
        { term: 'healthcare team', definition: 'All the people helping with your care' },
      ],
      analogies: ['Asking questions at the doctor is like asking a teacher to explain homework - it helps you do better!'],
      examples: ['Maria writes down Why do I feel tired before her visit so she does not forget to ask'],
      patientCounselingPoints: ['Write down your questions before your appointment', 'It is always okay to say I do not understand'],
    },
    2: {
      level: 2,
      summary: 'Effective question-asking improves healthcare communication and treatment understanding.',
      explanation: `## The Ask Me 3 Method

The National Patient Safety Foundation recommends three essential questions:

1. **What is my main problem?**
2. **What do I need to do?**
3. **Why is it important for me to do this?**

## Types of Questions to Ask

**About Your Diagnosis:** What do you think is causing my symptoms? Are there other possible causes?

**About Medications:** What is this medicine for? How and when do I take it?`,
      keyTerms: [
        { term: 'Ask Me 3', definition: 'A patient education program encouraging three basic questions' },
        { term: 'informed decision', definition: 'A choice made after understanding all options and risks' },
      ],
      patientCounselingPoints: ['Use Ask Me 3 as a starting point for every healthcare visit'],
    },
    3: {
      level: 3,
      summary: 'Patient question-asking is a measurable health literacy skill that impacts clinical outcomes.',
      explanation: `## Evidence Base for Question-Asking

Research demonstrates that patient questions:
- Improve treatment adherence by 20-30%
- Reduce medication errors
- Enhance shared decision-making

## Question Prompt Lists (QPLs)

QPLs are evidence-based tools providing sample questions for patients.`,
      keyTerms: [
        { term: 'question prompt list (QPL)', definition: 'A structured list of sample questions to help patients prepare' },
        { term: 'shared decision-making', definition: 'A collaborative process for healthcare decisions' },
      ],
      clinicalNotes: 'Encourage question-asking by creating a welcoming environment.',
    },
    4: {
      level: 4,
      summary: 'Patient question-asking is a modifiable health literacy competency.',
      explanation: `## Patient Activation Measure (PAM)

- Level 1: Disengaged
- Level 2: Becoming aware
- Level 3: Taking action
- Level 4: Maintaining behaviors

## Intervention Strategies

Individual-Level: Question prompt lists, pre-visit preparation
System-Level: Extended appointment times, after-visit summaries`,
      keyTerms: [{ term: 'Patient Activation Measure (PAM)', definition: 'Instrument measuring health self-management' }],
      clinicalNotes: 'QPLs are most effective when given before the consultation.',
    },
    5: {
      level: 5,
      summary: 'Patient question-asking is a critical patient safety behavior and quality indicator.',
      explanation: `## Research Evidence

Systematic Reviews show question prompt lists increase question-asking (SMD 0.52).

## Quality Metrics

- Patient-reported ability to ask questions (CG-CAHPS)
- Treatment adherence rates`,
      keyTerms: [
        { term: 'HCAHPS', definition: 'Hospital Consumer Assessment of Healthcare Providers and Systems' },
        { term: 'CG-CAHPS', definition: 'Clinician and Group CAHPS for outpatient settings' },
      ],
      clinicalNotes: 'Integrate QPLs into EHR, train staff, track as quality metric.',
    },
  },

  media: [],
  citations: [{ id: 'askme3-npsf', type: 'website', title: 'Ask Me 3', source: 'National Patient Safety Foundation' }],
  crossReferences: [{ targetId: 'health-literacy-teach-back', targetType: 'concept', relationship: 'related', label: 'Teach-Back Method' }],
  tags: { systems: ['communication-skills'], topics: ['health literacy'], keywords: ['asking questions', 'Ask Me 3'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default askingQuestions;
