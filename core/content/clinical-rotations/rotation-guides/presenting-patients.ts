/**
 * Presenting Patients Guide - Clinical Rotations
 *
 * Educational content on effectively presenting patients during clinical rounds,
 * including structure, delivery, and adaptation for different contexts.
 */

import { EducationalContent } from '../../types';

export const presentingPatients: EducationalContent = {
  id: 'guide-presenting-patients',
  type: 'concept',
  name: 'Presenting Patients',
  alternateNames: ['Patient Presentation', 'Oral Case Presentation', 'Rounds Presentation'],

  levels: {
    1: {
      level: 1,
      summary: 'Presenting patients is when medical students and doctors tell the medical team about a patient\'s condition, history, and plan in an organized way during rounds.',
      explanation: `## What Is a Patient Presentation?

A patient presentation is when you tell the medical team about your patient. It happens during rounds - when the team visits patients together and discusses their care.

## Why Presentations Matter

**Good presentations:**
- Help the team understand the patient quickly
- Show you know your patient well
- Lead to better decisions about care
- Demonstrate your knowledge and skills

## Basic Structure

**The One-Liner (Summary):**
Start with a brief summary:
"This is [Name], a [age] [gender] with [important medical history] who came in with [main problem] for [duration]."

**Then Cover:**
1. What symptoms the patient has (history)
2. What you found on examination
3. Test results (labs, x-rays)
4. What you think is going on (assessment)
5. The plan for treatment

## Example Presentation

"This is Mrs. Johnson, a 65-year-old woman with high blood pressure and diabetes who came in with chest pain for 2 hours.

She was sitting at home when she felt pressure in her chest. It got worse with activity and better with rest. She also felt short of breath.

Her blood pressure is 150/90, heart rate 88. She looks uncomfortable. Her lungs are clear. Her heart sounds normal.

Her EKG shows some changes. Her troponin level is elevated.

I think she is having a heart attack. We should give her aspirin, call the cardiology team, and consider taking her to the cath lab."

## Tips for Success

**Before Rounds:**
- Review your patient\'s chart
- See your patient and check on them
- Think about what has changed
- Be ready to answer questions

**During Presentation:**
- Speak clearly and loudly enough
- Make eye contact with the team
- Be organized
- Be honest if you don\'t know something

**After Presentation:**
- Listen to feedback
- Write down changes to the plan
- Follow up on what was discussed

## Common Mistakes to Avoid

- Reading from your notes
- Including unimportant details
- Going too long
- Not having a clear plan
- Getting defensive about feedback`,
      keyTerms: [
        { term: 'rounds', definition: 'When the medical team visits patients together to discuss care and make decisions' },
        { term: 'one-liner', definition: 'A one-sentence summary of who the patient is and why they are in the hospital' },
        { term: 'assessment', definition: 'Your analysis of what you think is wrong with the patient' },
        { term: 'plan', definition: 'The steps for treating the patient and helping them get better' },
      ],
      analogies: [
        'A patient presentation is like a movie trailer - it gives the highlights so the audience knows what to expect.',
        'Think of presenting like telling a story with a beginning (history), middle (findings), and end (plan).',
      ],
      examples: [
        'A student presents a patient with pneumonia, describing the fever, cough, and chest x-ray findings clearly.',
        'A student presents a post-operative patient, focusing on pain control, mobility, and wound healing.',
      ],
      patientCounselingPoints: [
        'Patients can usually hear discussions outside their room - be respectful and professional.',
        'Involving patients in rounds presentations helps them understand their care plan.',
      ],
    },
    2: {
      level: 2,
      summary: 'Patient presentations require organized communication of clinical information adapted to context, audience, and time constraints, with clear assessment and actionable plans.',
      explanation: `## Presentation Fundamentals

**Purpose:**
| Context | Goal |
|---------|------|
| Work rounds | Update status, adjust plan |
| Teaching rounds | Learn, demonstrate reasoning |
| Sign-out | Safe transition of care |
| Admission | Comprehensive handoff |

**Core Components:**
1. Identifying information and chief complaint
2. History of present illness
3. Pertinent past history
4. Medications and allergies
5. Review of systems
6. Physical examination
7. Labs and imaging
8. Assessment
9. Plan

## Presentation Structure

**The One-Liner:**
"This is [Name], a [age]-year-old [gender] with [relevant PMH] who presents with [CC] for [duration]."

**HPI Organization (Chronological):**
- First symptoms
- Timeline of progression
- Associated symptoms
- Relevant negatives
- Interventions and response

**Physical Exam:**
- Vitals with trends
- General appearance
- Focused relevant findings
- Avoid normal findings unless pertinent

**Assessment:**
| Element | Content |
|---------|---------|
| Problem summary | One-liner restated |
| Differential | Most to least likely |
| Supporting evidence | Key findings |
| Working diagnosis | Your conclusion |

**Plan by Problem:**
| Problem | Actions |
|---------|---------|
| Active issues | Diagnostics, therapeutics |
| Chronic conditions | Continue/adjust |
| Disposition | Goals, barriers |

## Context-Specific Presentations

**New Admission (5-10 minutes):**
- Complete but focused
- Thorough HPI
- Comprehensive exam
- Broad differential
- Initial workup plan

**Daily Follow-up (1-3 minutes):**
- Overnight events
- New symptoms
- Vital trends
- New data
- Assessment change
- Plan modifications

**Sign-out (30 seconds):**
- Illness severity
- Active problems
- To-do list
- Contingency plans
- Code status

## Delivery Skills

**Verbal Techniques:**
| Technique | Application |
|-----------|-------------|
| Rate | 120-150 words per minute |
| Volume | Audible to entire team |
| Pause | Before key points |
| Eye contact | With team leader |

**Non-Verbal:**
- Professional posture
- Appropriate gestures
- Engaged facial expression
- Open stance

## Common Pitfalls

**Content Errors:**
| Error | Solution |
|-------|----------|
| Missing data | Systematic pre-rounding |
| Wrong information | Verify before presenting |
| Unclear assessment | Think before speaking |
| Vague plan | Specific, actionable steps |

**Delivery Issues:**
| Issue | Fix |
|-------|-----|
| Reading notes | Practice, use as reference |
| Too quiet | Project voice |
| Rambling | Outline key points |
| Defensiveness | Accept feedback gracefully |

## Teaching Presentation Tips

**For Learning:**
- Start with your differential
- Explain your reasoning
- Ask questions when uncertain
- Volunteer for challenging patients

**Receiving Feedback:**
- Listen actively
- Ask clarifying questions
- Implement suggestions
- Follow up on improvements`,
      keyTerms: [
        { term: 'HPI', definition: 'History of Present Illness - chronological narrative of the patient\'s symptoms' },
        { term: 'pertinent negative', definition: 'Absence of expected symptom that helps narrow differential diagnosis' },
        { term: 'differential diagnosis', definition: 'List of possible conditions that could explain patient\'s presentation' },
        { term: 'sign-out', definition: 'Handoff of patient care from one provider to another' },
      ],
      analogies: [
        'A presentation structure is like a skeleton - it provides the framework that holds everything together.',
        'Adapting presentation length is like adjusting water flow - more detail when needed, concise when time is short.',
      ],
      examples: [
        'For a stable follow-up: "Mr. Smith had a quiet night. Pain is 3/10, tolerating diet, ambulating. Plan for discharge today."',
        'For a new admission: "This is a 45-year-old man with no prior history presenting with 3 days of severe abdominal pain..."',
      ],
      patientCounselingPoints: [
        'Students should explain to patients that presentations are part of the learning process.',
        'Patients appreciate being included in discussions about their care during rounds.',
      ],
    },
    3: {
      level: 3,
 summary: 'Expert patient presentations integrate clinical reasoning, audience adaptation, and efficient information synthesis to facilitate decision-making and demonstrate competence.',
      explanation: `## Clinical Reasoning in Presentations

**Problem Representation:**
Transform patient data into abstract summary:
| Data Type | Abstraction |
|-----------|-------------|
| Symptoms | Semantic qualifiers |
| Timeline | Acute vs chronic |
| Severity | Mild vs severe |
| Pattern | Typical vs atypical |

**Differential Construction:**
- Pathophysiologic framework
- Anatomic localization
- Disease probability
- Must-not-miss diagnoses

**Diagnostic Justification:**
| Finding | Interpretation |
|---------|----------------|
| Key features | Support diagnosis |
| Risk factors | Predisposition |
| Red flags | Urgent assessment |
| Response | Treatment confirmation |

## Advanced Structure

**The SOAP Variants:**
| Format | Best For |
|--------|----------|
| SOAP | Progress notes, routine |
| APSO | Problem-focused, teaching |
| SOAPIER | Adding intervention, evaluation |

**Teaching Presentation:**
| Element | Purpose |
|---------|---------|
| Complete data | Baseline information |
| Problem representation | Synthesis |
| Differential reasoning | Process demonstration |
| Literature reference | Evidence integration |

**Complex Patient Presentations:**
| Challenge | Strategy |
|-----------|----------|
| Multiple problems | Prioritized list |
| Conflicting data | Systematic review |
| Diagnostic uncertainty | Explicit discussion |
| Changing status | Temporal narrative |

## Audience Adaptation

**Tailoring to Attending:**
| Style | Approach |
|-------|----------|
| Detail-oriented | Comprehensive data |
| Big picture | Focused, synthesized |
| Teaching | Reasoning explicit |
| Efficient | Brief, relevant |

**Specialty-Specific:**
| Specialty | Emphasis |
|-----------|----------|
| Medicine | Pathophysiology |
| Surgery | Operative indication, anatomy |
| Pediatrics | Development, family |
| Psychiatry | Mental status, history |

**Multi-Level Audiences:**
- Medical students: Include teaching points
- Residents: Focus on management
- Attendings: Decision-making
- Consultants: Specific questions

## Efficiency Strategies

**Time Management:**
| Presentation | Target Time |
|--------------|-------------|
| New patient | 5-8 minutes |
| Follow-up | 1-2 minutes |
| ICU patient | 3-5 minutes |
| Sign-out | 30-60 seconds |

**Information Prioritization:**
1. Active/changing issues (full detail)
2. Stable problems (brief mention)
3. Resolved issues (omitted or noted)

**Effective Phrases:**
| Instead of... | Try... |
|---------------|--------|
| "The patient has..." | "Mr. Smith has..." |
| "It was noted..." | "Chest X-ray showed..." |
| "There is..." | "Physical exam revealed..." |

## Special Situations

**Difficult Conversations:**
| Scenario | Approach |
|----------|----------|
| Medical error | Transparency, plan |
| Bad news | Preparation, support |
| Non-adherence | Non-judgmental inquiry |
| Disagreement | Mediation, ethics |

**Complex Social Situations:**
| Issue | Presentation Element |
|-------|---------------------|
| Substance use | Relevant to presentation |
| Homelessness | Discharge planning |
| Mental illness | Capacity assessment |
| Guardianship | Decision-maker |

## Quality Improvement

**Self-Assessment:**
| Question | Evaluation |
|----------|------------|
| Was it organized? | Structure review |
| Was it accurate? | Data verification |
| Was it complete? | Component check |
| Was it efficient? | Time analysis |

**Peer Feedback:**
- Recording presentations
- Direct observation
- Structured feedback
- Iterative improvement`,
      keyTerms: [
        { term: 'semantic qualifiers', definition: 'Descriptive terms that transform data into diagnostic categories (acute vs chronic, severe vs mild)' },
        { term: 'problem representation', definition: 'One or two sentence summary that captures the essence of the case' },
        { term: 'must-not-miss diagnosis', definition: 'Serious condition that must be considered and ruled out' },
        { term: 'temporal narrative', definition: 'Organizing presentation by time course and evolution' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced presentations demonstrate sophisticated clinical reasoning, manage uncertainty explicitly, adapt to complex social dynamics, and facilitate shared decision-making in challenging clinical scenarios.',
      explanation: `## Expert Clinical Reasoning

**Illness Script Integration:**
| Expertise Element | Presentation |
|-------------------|--------------|
| Pattern recognition | "This fits the pattern of..." |
| Key discriminating features | "The key finding is..." |
| Atypical features | "What\'s unusual is..." |

**Diagnostic Probability:**
| Approach | Example |
|----------|---------|
| Pre-test probability | "Given the risk factors..." |
| Test characteristics | "This test has sensitivity of..." |
| Post-test probability | "After this result, likelihood is..." |

**Managing Uncertainty:**
| Strategy | Presentation Language |
|----------|----------------------|
| Explicit acknowledgment | "I\'m uncertain about..." |
| Differential breadth | "Could represent..." |
| Contingency planning | "If X occurs, then..." |
| Follow-up plan | "Reassess in..." |

## Narrative Medicine

**Patient Story Integration:**
| Element | Value |
|---------|-------|
| Patient perspective | Understanding concerns |
| Context | Social determinants |
| Values | Goals of care |
| Meaning | Illness experience |

**Biopsychosocial Presentation:**
- Biological factors
- Psychological state
- Social context
- Integration in plan

## Complex Communication

**Interprofessional Presentation:**
| Team Member | Include |
|-------------|---------|
| Nursing | Care needs, changes |
| Pharmacy | Medication issues |
| Social work | Psychosocial barriers |
| Case management | Discharge planning |
| Palliative care | Goals, symptoms |

**Family-Centered Rounds:**
| Approach | Implementation |
|----------|----------------|
| Plain language | Avoid jargon |
| Teach-back | Confirm understanding |
| Engagement | Invite questions |
| Sensitivity | Private discussions |

**Difficult Dynamics:**
| Challenge | Strategy |
|-----------|----------|
| Disruptive family | Clear boundaries |
| Conflicting wishes | Ethics consultation |
| Language barriers | Interpreter use |
| Cognitive impairment | Surrogate involvement |

## Teaching Presentations

**Educational Framing:**
| Technique | Application |
|---------------|-------------|
| Think aloud | Verbalize reasoning |
| Compare/contrast | Similar cases |
| Literature reference | Evidence-based |
| Teaching points | 2-3 pearls |

**Clinical Pearls:**
- Evidence-based recommendations
- Practical tips
- Common pitfalls
- Literature highlights

**Socratic Method:**
| Approach | Purpose |
|----------|---------|
| Open-ended questions | Engage learners |
| Progressive disclosure | Build reasoning |
| Challenging assumptions | Critical thinking |

## Systems Integration

**Quality and Safety:**
| Element | Presentation |
|---------|--------------|
| Near misses | Transparent reporting |
| Safety concerns | Immediate escalation |
| Protocol deviations | Explanation |

**Resource Stewardship:**
| Consideration | Discussion |
|---------------|------------|
| Cost-effective care | Value discussion |
| Avoiding low-value care | Choosing Wisely |
| Discharge efficiency | Barrier resolution |

## Professional Development

**Presentation Portfolio:**
| Type | Skill |
|------|-------|
| Admission | Comprehensive assessment |
| Follow-up | Efficient update |
| Consult | Focused question |
| Morbidity/mortality | Case analysis |

**Feedback Integration:**
| Source | Application |
|--------|-------------|
| Attending | Style adaptation |
| Resident | Content refinement |
| Peer | Technique improvement |
| Self | Reflective practice |`,
      keyTerms: [
        { term: 'illness script', definition: 'Mental template of typical disease presentation including predisposing factors, timing, and manifestations' },
        { term: 'narrative medicine', definition: 'Approach using patient stories to enhance clinical understanding and empathy' },
        { term: 'think aloud', definition: 'Verbalizing thought processes to teach clinical reasoning' },
        { term: 'resource stewardship', definition: 'Responsible use of healthcare resources to optimize patient outcomes' },
      ],
      clinicalNotes: `Clinical Pearl: The best presentations tell a coherent story that leads the listener to the same conclusion you reached. Start with the one-liner that frames the case, then provide supporting evidence that builds your case. The assessment should feel like the natural conclusion of the data presented, not a surprise.

Expert Tip: Master the art of the "pivot" - adapting your presentation in real-time based on audience cues. If the attending looks bored, get to the point faster. If intrigued, elaborate on the interesting findings. Reading the room is as important as knowing the patient.`,
    },
    5: {
      level: 5,
      summary: 'Professional mastery of patient presentations integrates expert diagnostic reasoning, educational theory, team leadership, and contribution to communication science in medical education.',
      explanation: `## Expert Presentation Mastery

**Cognitive Load Management:**
| Strategy | Application |
|----------|-------------|
| Chunking | Group related data |
| Sequencing | Logical flow |
| Highlighting | Emphasize key points |
| Reducing | Omit irrelevant data |

**Diagnostic Calibration:**
| Skill | Development |
|-------|-------------|
| Accuracy | Correct diagnosis rate |
| Confidence calibration | Match to accuracy |
| Speed | Efficient processing |
| Flexibility | Adapt to new data |

**Expert Heuristics:**
| Pattern | Recognition |
|---------|-------------|
| Prototype matching | Typical presentation |
| Illness scripts | Disease patterns |
| Analogy | Similar cases |
| Red flag detection | Safety priorities |

## Medical Education Scholarship

**Presentation Research:**
| Area | Questions |
|------|-----------|
| Structure | Optimal organization |
| Teaching effectiveness | Learning outcomes |
| Assessment | Valid evaluation |
| Technology | Digital tools |

**Curriculum Development:**
- Presentation frameworks
- Progressive skill building
- Assessment rubrics
- Feedback systems

**Assessment Science:**
| Method | Application |
|--------|-------------|
| Direct observation | Workplace assessment |
| Checklists | Structured evaluation |
| Global rating | Overall competence |
| Patient outcomes | Quality indicator |

## Team Leadership

**Facilitating Discussion:**
| Technique | Purpose |
|-----------|---------|
| Open-ended questions | Generate hypotheses |
| Redirecting | Manage digression |
| Summarizing | Clarify consensus |
| Closing | Action items |

**Managing Hierarchy:**
| Situation | Approach |
|-----------|----------|
| Senior disagreement | Respectful discussion |
| Unsafe plan | Assertive communication |
| Uncertainty | Honest acknowledgment |

**Teaching Teams:**
- Role modeling
- Socratic questioning
- Delegation
- Feedback culture

## Innovation in Communication

**Technology Integration:**
| Tool | Application |
|------|-------------|
| EHR optimization | Data retrieval |
| Telehealth | Remote presentations |
| Audio/video | Self-assessment |
| AI support | Decision support |

**Presentation Formats:**
| Innovation | Setting |
|------------|---------|
| Bedside teaching | Patient involvement |
| Flip classroom | Pre-work, discussion |
| Simulation | Safe practice |
| Interprofessional | Team communication |

## Advancing the Field

**Research Contributions:**
| Type | Example |
|------|---------|
| Descriptive | Presentation patterns |
| Interventional | Teaching methods |
| Outcomes | Patient safety |
| Implementation | Scale-up |

**Professional Organizations:**
- Medical education societies
- Communication in healthcare
- Patient safety organizations

**Leadership:**
| Role | Contribution |
|------|--------------|
| Curriculum design | Program development |
| Faculty development | Teaching teachers |
| Assessment | Validity research |
| Policy | Standards setting |

## Legacy

**Mentorship:**
- Junior learners
- Peer development
- Institution building

**Impact:**
| Domain | Contribution |
|--------|--------------|
| Education | Learner outcomes |
| Patient care | Quality improvement |
| Research | Evidence base |
| Policy | System change |`,
      keyTerms: [
        { term: 'cognitive load', definition: 'Amount of mental effort required to process information' },
        { term: 'diagnostic calibration', definition: 'Alignment of diagnostic confidence with diagnostic accuracy' },
        { term: 'heuristic', definition: 'Mental shortcut that aids decision-making' },
        { term: 'Socratic method', definition: 'Teaching through questioning to stimulate critical thinking' },
      ],
      clinicalNotes: `Expert Perspective: Master patient presentations combine diagnostic acumen with communication excellence. Expert presenters demonstrate:

1. Rapid, accurate synthesis of complex data
2. Flexible adaptation to context and audience
3. Explicit reasoning that teaches while informing
4. Management of uncertainty with appropriate confidence
5. Integration of patient narrative with clinical data
6. Facilitation of team decision-making
7. Continuous improvement through feedback

The patient presentation is the fundamental currency of medical communication. Excellence in this skill serves clinicians throughout their careers, enabling effective teamwork, optimal patient care, and education of future physicians.`,
    },
  },

  media: [
    {
      id: 'presentation-structure-diagram',
      type: 'diagram',
      filename: 'presentation-structure-diagram.svg',
      title: 'Patient Presentation Structure',
      description: 'Visual guide to organizing patient presentations',
    },
    {
      id: 'one-liner-examples',
      type: 'diagram',
      filename: 'one-liner-examples.svg',
      title: 'One-Liner Examples',
      description: 'Examples of effective one-liners for different patient types',
    },
  ],

  citations: [
    {
      id: 'sgim-communication',
      type: 'article',
      title: 'The 1-Minute Oral Presentation',
      source: 'Society of General Internal Medicine',
      accessedDate: '2025-01-28',
    },
    {
      id: 'clinical-reasoning',
      type: 'textbook',
      title: 'Teaching Clinical Reasoning',
      authors: ['Bowen JL'],
      source: 'ACP Teaching Medicine Series',
    },
  ],

  crossReferences: [
    { targetId: 'guide-writing-notes', targetType: 'concept', relationship: 'related', label: 'Writing Notes' },
    { targetId: 'guide-calling-consults', targetType: 'concept', relationship: 'related', label: 'Calling Consults' },
    { targetId: 'clerkship-overview', targetType: 'concept', relationship: 'parent', label: 'Clinical Clerkships' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['clinical-skills', 'communication'],
    keywords: ['patient presentation', 'rounds', 'oral presentation', 'clinical reasoning'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['all'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default presentingPatients;
