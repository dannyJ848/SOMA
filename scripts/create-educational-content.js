#!/usr/bin/env node
/**
 * Script to create educational content files for empty directories
 */

const fs = require('fs');
const path = require('path');

const basePath = '/Users/dannygomez/biological-self/core/content';

function createFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
  console.log('Created:', filePath);
}

// Helper to create EducationalContent structure
function createEducationalContent(config) {
  return `/**
 * ${config.title}
 */

import { EducationalContent } from '${config.importPath}';

export const ${config.exportName}: EducationalContent = {
  id: '${config.id}',
  type: 'concept',
  name: '${config.name}',
  alternateNames: ${JSON.stringify(config.alternateNames || [])},

  levels: {
    1: {
      level: 1,
      summary: '${config.levels[1].summary}',
      explanation: \`${config.levels[1].explanation}\`,
      keyTerms: ${JSON.stringify(config.levels[1].keyTerms)},
      analogies: ${JSON.stringify(config.levels[1].analogies || [])},
      examples: ${JSON.stringify(config.levels[1].examples || [])},
      patientCounselingPoints: ${JSON.stringify(config.levels[1].patientCounselingPoints || [])},
    },
    2: {
      level: 2,
      summary: '${config.levels[2].summary}',
      explanation: \`${config.levels[2].explanation}\`,
      keyTerms: ${JSON.stringify(config.levels[2].keyTerms)},
      patientCounselingPoints: ${JSON.stringify(config.levels[2].patientCounselingPoints || [])},
    },
    3: {
      level: 3,
      summary: '${config.levels[3].summary}',
      explanation: \`${config.levels[3].explanation}\`,
      keyTerms: ${JSON.stringify(config.levels[3].keyTerms)},
      clinicalNotes: '${config.levels[3].clinicalNotes || ''}',
    },
    4: {
      level: 4,
      summary: '${config.levels[4].summary}',
      explanation: \`${config.levels[4].explanation}\`,
      keyTerms: ${JSON.stringify(config.levels[4].keyTerms)},
      clinicalNotes: '${config.levels[4].clinicalNotes || ''}',
    },
    5: {
      level: 5,
      summary: '${config.levels[5].summary}',
      explanation: \`${config.levels[5].explanation}\`,
      keyTerms: ${JSON.stringify(config.levels[5].keyTerms)},
      clinicalNotes: '${config.levels[5].clinicalNotes || ''}',
    },
  },

  media: [],
  citations: ${JSON.stringify(config.citations || [])},
  crossReferences: ${JSON.stringify(config.crossReferences || [])},
  tags: ${JSON.stringify(config.tags)},
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default ${config.exportName};
`;
}

// ============================================================
// HEALTH LITERACY - COMMUNICATION SKILLS
// ============================================================

// 1. Asking Questions
const askingQuestionsContent = `/**
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
      explanation: \`When you go to the doctor, it is important to ask questions. Asking questions is NOT rude - doctors WANT you to ask!

**The Three Questions to Always Ask:**

1. **What is my main problem?**
2. **What do I need to do?**
3. **Why is it important for me to do this?**

**Tips for Asking:**

- Write down your questions BEFORE your visit
- It is okay to say I do not understand
- Ask the doctor to repeat or explain differently
- Bring a friend or family member to help remember\`,
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
      explanation: \`## The Ask Me 3 Method

The National Patient Safety Foundation recommends three essential questions:

1. **What is my main problem?**
2. **What do I need to do?**
3. **Why is it important for me to do this?**

## Types of Questions to Ask

**About Your Diagnosis:** What do you think is causing my symptoms? Are there other possible causes?

**About Medications:** What is this medicine for? How and when do I take it?\`,
      keyTerms: [
        { term: 'Ask Me 3', definition: 'A patient education program encouraging three basic questions' },
        { term: 'informed decision', definition: 'A choice made after understanding all options and risks' },
      ],
      patientCounselingPoints: ['Use Ask Me 3 as a starting point for every healthcare visit'],
    },
    3: {
      level: 3,
      summary: 'Patient question-asking is a measurable health literacy skill that impacts clinical outcomes.',
      explanation: \`## Evidence Base for Question-Asking

Research demonstrates that patient questions:
- Improve treatment adherence by 20-30%
- Reduce medication errors
- Enhance shared decision-making

## Question Prompt Lists (QPLs)

QPLs are evidence-based tools providing sample questions for patients.\`,
      keyTerms: [
        { term: 'question prompt list (QPL)', definition: 'A structured list of sample questions to help patients prepare' },
        { term: 'shared decision-making', definition: 'A collaborative process for healthcare decisions' },
      ],
      clinicalNotes: 'Encourage question-asking by creating a welcoming environment.',
    },
    4: {
      level: 4,
      summary: 'Patient question-asking is a modifiable health literacy competency.',
      explanation: \`## Patient Activation Measure (PAM)

- Level 1: Disengaged
- Level 2: Becoming aware
- Level 3: Taking action
- Level 4: Maintaining behaviors

## Intervention Strategies

Individual-Level: Question prompt lists, pre-visit preparation
System-Level: Extended appointment times, after-visit summaries\`,
      keyTerms: [{ term: 'Patient Activation Measure (PAM)', definition: 'Instrument measuring health self-management' }],
      clinicalNotes: 'QPLs are most effective when given before the consultation.',
    },
    5: {
      level: 5,
      summary: 'Patient question-asking is a critical patient safety behavior and quality indicator.',
      explanation: \`## Research Evidence

Systematic Reviews show question prompt lists increase question-asking (SMD 0.52).

## Quality Metrics

- Patient-reported ability to ask questions (CG-CAHPS)
- Treatment adherence rates\`,
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
`;

createFile(path.join(basePath, 'health-literacy/communication-skills/asking-questions.ts'), askingQuestionsContent);

// 2. Teach-Back Communication
const teachBackContent = `/**
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
      explanation: \`**What is Teach-Back?**

After your doctor explains something, they might say: "Can you tell me in your own words what you are going to do?"

This helps BOTH of you make sure the information was clear!

**Remember:** Teach-back is NOT a test of you. It is a tool to make sure you got the information you need.\`,
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
      explanation: \`## What is Teach-Back?

1. Provider explains important health information
2. Provider asks patient to explain it back in their own words
3. Provider re-teaches any unclear information
4. Cycle continues until understanding is confirmed

## Key Principle

It is About the Provider, Not the Patient - frame it as checking YOUR explanation was clear.\`,
      keyTerms: [
        { term: 'teach-back method', definition: 'Technique where patients repeat information to verify understanding' },
        { term: 'closing the loop', definition: 'Completing the communication cycle' },
      ],
      patientCounselingPoints: ['You can use teach-back yourself by summarizing what you heard'],
    },
    3: {
      level: 3,
      summary: 'Teach-back is a validated technique that improves understanding and reduces readmissions.',
      explanation: \`## Evidence Base

- Reduces 30-day hospital readmissions by 12-30%
- Improves medication adherence
- Enhances recall of discharge instructions

## Implementation Steps

1. Plan key points (limit to 3-5 messages)
2. Explain clearly using plain language
3. Assess with teach-back using open-ended questions
4. Re-teach unclear portions
5. Confirm understanding\`,
      keyTerms: [
        { term: 'chunk and check', definition: 'Providing information in small pieces with teach-back after each' },
        { term: 'plain language', definition: 'Communication that audience can understand the first time' },
      ],
      clinicalNotes: 'Document teach-back in EHR. Train all patient-facing staff.',
    },
    4: {
      level: 4,
      summary: 'Teach-back is a core health literacy intervention with robust evidence base.',
      explanation: \`## Research Evidence

- Consistent improvement in comprehension
- Reduction in hospitalizations (OR 0.7-0.8)
- Project RED showed 30% reduction in rehospitalizations

## Implementation Science

Barriers: Time pressures, lack of training, skepticism
Strategies: Training workshops, EHR integration, team-based approaches\`,
      keyTerms: [
        { term: 'Project RED', definition: 'Re-Engineered Discharge program using teach-back' },
        { term: 'fidelity', definition: 'Degree to which intervention is delivered as intended' },
      ],
      clinicalNotes: 'Build teach-back into discharge workflows and EHR templates.',
    },
    5: {
      level: 5,
      summary: 'Teach-back represents a critical patient safety intervention and standard of care.',
      explanation: \`## Evidence Synthesis

Meta-analyses show consistent positive effects on comprehension across diverse populations.

## Implementation Frameworks

RE-AIM: Reach all patients, demonstrate Effectiveness, ensure Adoption, support Implementation, maintain over time.

## Policy Integration

- HCAHPS communication domains
- CMS Hospital Readmissions Reduction Program
- Joint Commission patient communication standards\`,
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
`;

createFile(path.join(basePath, 'health-literacy/communication-skills/teach-back-communication.ts'), teachBackContent);

// 3. Shared Decision-Making
const sharedDecisionContent = `/**
 * Shared Decision-Making - Making Healthcare Choices Together
 */

import { EducationalContent } from '../../types';

export const sharedDecisionMaking: EducationalContent = {
  id: 'health-literacy-shared-decision-making',
  type: 'concept',
  name: 'Shared Decision-Making',
  alternateNames: ['Collaborative Decision-Making', 'SDM'],

  levels: {
    1: {
      level: 1,
      summary: 'Shared decision-making means you and your doctor work together to choose what is best for YOU.',
      explanation: \`**What is Shared Decision-Making?**

Your Doctor Knows: What treatments are available, how well each works, what the risks are

YOU Know: What matters most to you, what you can do, what fits your life

Together, You Can: Talk about all options, understand pros and cons, pick what is right for YOUR situation

**Remember:** It is YOUR body and YOUR life. You have the right to be part of every decision!\`,
      keyTerms: [
        { term: 'shared decision-making', definition: 'When you and your doctor work together to make choices' },
        { term: 'treatment options', definition: 'Different ways to treat a health problem' },
        { term: 'preferences', definition: 'What you like, want, or think is most important' },
      ],
      analogies: ['Like planning a trip with a travel agent - they know destinations, you know what vacation you want'],
      examples: ['A woman with breast cancer discusses surgery options with her doctor'],
      patientCounselingPoints: ['You have the right to be involved in decisions', 'It is okay to take time to decide'],
    },
    2: {
      level: 2,
      summary: 'SDM is collaborative process combining medical evidence with patient values.',
      explanation: \`## Three Key Elements

1. **Choice Talk:** Make sure patient knows there ARE options
2. **Option Talk:** Describe options with pros and cons
3. **Decision Talk:** Explore preferences and make a decision

## When is SDM Most Important?

Preference-Sensitive Decisions where multiple reasonable options exist and trade-offs depend on personal values.\`,
      keyTerms: [
        { term: 'patient decision aid', definition: 'Tool to help patients understand options and clarify preferences' },
        { term: 'preference-sensitive decision', definition: 'Decision where best choice depends on individual values' },
      ],
      patientCounselingPoints: ['Ask your doctor: What are my options?'],
    },
    3: {
      level: 3,
      summary: 'SDM is evidence-based model improving decision quality and patient satisfaction.',
      explanation: \`## Three-Talk Model (Elwyn)

- Team Talk: Establish relationship, explain decisions needed
- Option Talk: Present options with decision aids
- Decision Talk: Elicit preferences, reach decision

## Evidence

- Increased patient knowledge
- More accurate risk perception
- Reduced decisional conflict
- Reduces preference-sensitive surgery rates by 20-25%\`,
      keyTerms: [
        { term: 'IPDAS', definition: 'International Patient Decision Aid Standards' },
        { term: 'decisional conflict', definition: 'Uncertainty about which course of action to take' },
      ],
      clinicalNotes: 'Integrate decision aids into clinical workflow.',
    },
    4: {
      level: 4,
      summary: 'SDM is core component of patient-centered care with established implementation frameworks.',
      explanation: \`## Cochrane Review Findings

- 105 studies of patient decision aids
- Improved knowledge (MD 13.27/100)
- More accurate risk perception (RR 2.1)
- Reduced decisional conflict (MD -9.28/100)

## Implementation Barriers

Patient: Health literacy, power dynamics
Provider: Time pressure, training
Organization: Workflow, decision aid availability\`,
      keyTerms: [
        { term: 'OPTION scale', definition: 'Validated observer measure of patient involvement' },
        { term: 'CollaboRATE', definition: 'Brief patient-reported measure of SDM' },
      ],
      clinicalNotes: 'Identify high-priority preference-sensitive decisions in your practice.',
    },
    5: {
      level: 5,
      summary: 'SDM represents paradigm shift with robust evidence and policy support.',
      explanation: \`## Scientific Foundation

Patient as expert in own life and values. Evidence informs but does not determine choices.

## Health Equity Considerations

- Less SDM observed with racial/ethnic minorities
- Lower health literacy reduces SDM participation
- Culturally adapted decision aids needed

## Key Resources

- AHRQ SHARE Approach
- Ottawa Decision Support Framework
- GRADE Evidence to Decision Framework\`,
      keyTerms: [
        { term: 'precision SDM', definition: 'Tailoring SDM approaches based on individual characteristics' },
        { term: 'Ottawa Decision Support Framework', definition: 'Comprehensive framework for SDM' },
      ],
      clinicalNotes: 'System priorities: Leadership commitment, infrastructure, training, quality measurement.',
    },
  },

  media: [],
  citations: [{ id: 'ahrq-share', type: 'website', title: 'The SHARE Approach', source: 'AHRQ' }],
  crossReferences: [{ targetId: 'health-literacy-asking-questions', targetType: 'concept', relationship: 'sibling', label: 'Asking Questions' }],
  tags: { systems: ['communication-skills'], topics: ['shared decision-making', 'patient engagement'], keywords: ['SDM', 'decision aids'], clinicalRelevance: 'critical' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default sharedDecisionMaking;
`;

createFile(path.join(basePath, 'health-literacy/communication-skills/shared-decision-making.ts'), sharedDecisionContent);

// Index file for communication-skills
const commSkillsIndex = `/**
 * Health Literacy - Communication Skills Module
 */

export { askingQuestions } from './asking-questions';
export { teachBackCommunication } from './teach-back-communication';
export { sharedDecisionMaking } from './shared-decision-making';

export { default as askingQuestionsDefault } from './asking-questions';
export { default as teachBackCommunicationDefault } from './teach-back-communication';
export { default as sharedDecisionMakingDefault } from './shared-decision-making';
`;

createFile(path.join(basePath, 'health-literacy/communication-skills/index.ts'), commSkillsIndex);

console.log('\\n=== Health Literacy - Communication Skills COMPLETE ===\\n');

// Continue with more content...
console.log('Script completed. Run: node scripts/create-educational-content.js');
