/**
 * Writing Notes Guide - Clinical Rotations
 *
 * Educational content on clinical documentation including H&P, progress notes,
 * and effective medical record communication.
 */

import { EducationalContent } from '../../types';

export const writingNotes: EducationalContent = {
  id: 'guide-writing-notes',
  type: 'concept',
  name: 'Writing Notes',
  alternateNames: ['Clinical Documentation', 'Medical Record', 'Charting'],

  levels: {
    1: {
      level: 1,
      summary: 'Medical notes are written records that document patient care, including symptoms, examination findings, test results, and treatment plans in the patient\'s chart.',
      explanation: `## What Are Medical Notes?

Medical notes are written records that healthcare providers create to document patient care. They go in the patient\'s medical chart (now usually electronic) and tell the story of the patient\'s care.

## Why Notes Matter

**Good notes:**
- Help everyone on the team understand the patient
- Create a legal record of care
- Help with billing
- Support continuity when providers change
- Serve as teaching tools

## Types of Notes

**Common Note Types:**
1. **H&P (History and Physical)** - When a patient is admitted
2. **Progress Notes** - Daily updates on how the patient is doing
3. **Procedure Notes** - When a procedure is done
4. **Discharge Summary** - When the patient leaves the hospital
5. **Consult Notes** - When a specialist gives their opinion

## Parts of a Note

**Most Notes Include:**
1. **Date and Time** - When you wrote the note
2. **Who You Are** - Your name and role
3. **What the Patient Says** - Symptoms and concerns
4. **What You Found** - Examination results
5. **Test Results** - Labs, x-rays, other tests
6. **What You Think** - Your assessment
7. **The Plan** - What you will do

## Tips for Good Notes

**Write Notes That:**
- Are organized and easy to read
- Include only important information
- Use clear, simple language
- Are honest and accurate
- Are written soon after seeing the patient

**Avoid:**
- Copying from other notes without checking
- Using unclear abbreviations
- Including personal opinions
- Being vague or incomplete

## Common Note Formats

**SOAP Format:**
- **S** - Subjective (what the patient says)
- **O** - Objective (what you find and test results)
- **A** - Assessment (what you think is going on)
- **P** - Plan (what you will do)

## Privacy and Legal Issues

**Important Rules:**
- Only write information relevant to patient care
- Never share passwords or access others\' charts inappropriately
- Remember that patients can request to see their notes
- Notes can be used in legal proceedings

## Tips for Students

- Read notes written by residents and attendings to learn
- Ask for feedback on your notes
- Practice being clear and concise
- Learn your institution\'s electronic health record system`,
      keyTerms: [
        { term: 'H&P', definition: 'History and Physical - comprehensive note written when a patient is admitted to the hospital' },
        { term: 'progress note', definition: 'Daily documentation of a patient\'s condition and care plan' },
        { term: 'medical chart', definition: 'The complete record of a patient\'s medical care and history' },
        { term: 'SOAP note', definition: 'A format for organizing notes: Subjective, Objective, Assessment, Plan' },
      ],
      analogies: [
        'A medical note is like a diary entry about a patient\'s care - it captures what happened at a specific moment.',
        'Good documentation is like a trail of breadcrumbs - it helps anyone follow the path of patient care.',
      ],
      examples: [
        'A student writes a daily progress note on a patient with pneumonia, documenting improved breathing and plan for discharge.',
        'A student documents a complete H&P for a new patient, including history of diabetes and physical examination findings.',
      ],
      patientCounselingPoints: [
        'Patients increasingly have access to their medical notes - write with this in mind.',
        'Clear documentation helps patients understand their care when they read their records.',
      ],
    },
    2: {
      level: 2,
      summary: 'Clinical documentation requires organized, accurate recording of patient encounters using standardized formats, with attention to legal, billing, and communication requirements.',
      explanation: `## Documentation Fundamentals

**Purpose of Documentation:**
| Purpose | Description |
|---------|-------------|
| Communication | Share information among providers |
| Legal | Record of care provided |
| Billing | Justify charges and reimbursement |
| Quality | Monitor and improve care |
| Education | Teaching and learning |
| Research | Data for studies |

**Documentation Principles:**
- Timely (document promptly)
- Accurate (factual, verified)
- Complete (all required elements)
- Legible (clear and readable)
- Objective (facts, not opinions)

## Note Types and Structure

**History and Physical (H&P):**
| Section | Content |
|---------|---------|
| Chief Complaint | Patient\'s words |
| HPI | Chronological narrative |
| PMH/PSH | Past medical and surgical |
| Medications | Current meds with doses |
| Allergies | Reactions documented |
| Family History | Relevant conditions |
| Social History | Occupation, habits |
| ROS | System review |
| Physical Exam | Organized, thorough |
| Labs/Imaging | Pertinent results |
| Assessment | Problem list |
| Plan | By problem |

**Progress Notes:**

*SOAP Format:*
| Component | Content |
|-----------|---------|
| Subjective | Patient symptoms, concerns |
| Objective | Vitals, exam, labs |
| Assessment | Problem status |
| Plan | Continued management |

*APSO Format (alternative):*
- Assessment first for efficiency

**Procedure Notes:**
| Element | Description |
|---------|-------------|
| Indication | Why performed |
| Consent | Documentation |
| Procedure | Step-by-step |
| Findings | What was seen |
| Complications | Any issues |
| Specimens | What sent |
| Post-procedure care | Instructions |

**Discharge Summary:**
| Section | Content |
|---------|---------|
| Admission reason | Why admitted |
| Hospital course | Summary of stay |
| Discharge condition | Status at discharge |
| Discharge meds | List with instructions |
| Follow-up | Appointments needed |
| Pending results | Tests to follow |

## Electronic Health Records

**EHR Navigation:**
| Task | Skill |
|------|-------|
| Note templates | Efficient use |
| Smart phrases | Customization |
| Order entry | Correct placement |
| Results review | Organization |
| Inbox management | Prioritization |

**Copy-Forward Cautions:**
- Update all information
- Verify accuracy
- Add new developments
- Remove outdated plans
- Sign and date appropriately

## Billing Documentation

**E/M Coding Elements:**
| Component | Requirements |
|-----------|--------------|
| History | HPI, ROS, PMH |
| Exam | Body areas/systems |
| Medical decision-making | Complexity |

**Key Documentation for Billing:**
- Time spent (if using time-based coding)
- Medical necessity
- Complexity of problems
- Data reviewed
- Risk of complications

## Efficiency Strategies

**Time Management:**
| Strategy | Implementation |
|----------|----------------|
| Dot phrases | Pre-written templates |
| Voice recognition | Dictation tools |
| Mobile apps | Off-site documentation |
| Batch processing | Group similar tasks |

**Quality Checks:**
| Check | Action |
|-------|--------|
| Patient identification | Verify name, DOB |
| Date/time | Correct entry |
| Consistency | Align with orders |
| Completeness | Required elements |

## Student Documentation

**Learning Approach:**
| Stage | Focus |
|-------|-------|
| Observation | Read attending notes |
| Drafting | Write with supervision |
| Co-signature | Attending review |
| Independence | Progressive autonomy |

**Student Note Requirements:**
- Clearly identify as student
- Supervisor attestation
- Cannot bill independently
- Educational purpose documented`,
      keyTerms: [
        { term: 'EHR', definition: 'Electronic Health Record - digital version of patient\'s paper chart' },
        { term: 'E/M coding', definition: 'Evaluation and Management coding for billing based on complexity' },
        { term: 'copy-forward', definition: 'Copying information from previous notes - requires careful review' },
        { term: 'attestation', definition: 'Attending physician\'s review and confirmation of student documentation' },
      ],
      analogies: [
        'A well-written note is like a good news article - it has a headline (CC), story (HPI), facts (objective), analysis (assessment), and next steps (plan).',
        'Documentation is like recording a concert - you capture the essential performance without every single note.',
      ],
      examples: [
        'A SOAP progress note: S - Patient reports pain 4/10; O - Vitals stable, incision clean; A - Post-op day 2, improving; P - Continue PT, discharge planning.',
        'An H&P for chest pain includes detailed cardiac risk factors, thorough cardiovascular exam, and EKG interpretation.',
      ],
      patientCounselingPoints: [
        'Medical records increasingly include patient-friendly language to improve understanding.',
        'Patients have the right to request corrections to their medical records if errors are found.',
      ],
    },
    3: {
      level: 3,
      summary: 'Expert clinical documentation integrates efficient information synthesis, appropriate detail level, regulatory compliance, and effective use of electronic systems to support patient care and communication.',
      explanation: `## Advanced Documentation

**Information Synthesis:**
| Skill | Application |
|-------|-------------|
| Data filtering | Include relevant, exclude noise |
| Pattern recognition | Trends over time |
| Prioritization | Most important first |
| Context integration | Social, psychological |

**Assessment Quality:**
| Element | Quality Indicator |
|---------|-----------------|
| Problem list | Complete, prioritized |
| Differential | When appropriate |
| Reasoning | Evidence-based |
| Status | Changing vs stable |

**Plan Specificity:**
| Component | Example |
|-----------|---------|
| Diagnostics | Specific tests |
| Therapeutics | Drug, dose, route |
| Monitoring | Parameters, frequency |
| Consults | Specific question |
| Patient education | Topics covered |

## Documentation by Setting

**Inpatient:**
| Note Type | Frequency | Focus |
|-----------|-----------|-------|
| Admission H&P | Once | Comprehensive |
| Progress notes | Daily | Changes, response |
| Consult notes | As needed | Specific expertise |
| Procedure notes | Per procedure | Details |
| Discharge summary | At discharge | Summary, plan |

**Outpatient:**
| Visit Type | Documentation |
|------------|---------------|
| Acute | Focused HPI, exam |
| Chronic | Status, adjustments |
| Preventive | Screening, counseling |
| Procedure | Technique, findings |

**Emergency Department:**
| Element | Importance |
|---------|------------|
| Chief complaint | Patient\'s words |
| HPI | Relevant details |
| Decision-making | Risk stratification |
| Disposition | Admission vs discharge |

## EHR Optimization

**Advanced Features:**
| Feature | Use |
|---------|-----|
| Smart lists | Problem lists, meds |
| Calculators | Risk scores |
| Decision support | Alerts, reminders |
| Patient portals | Shared notes |
| Registries | Population health |

**Interoperability:**
- Health information exchange
- Cross-system records
- Patient-controlled data
- Care coordination

## Legal and Regulatory

**HIPAA Compliance:**
| Requirement | Documentation |
|-------------|---------------|
| Minimum necessary | Limit access |
| Access logs | Track viewing |
| Release forms | Disclosure consent |
| Patient rights | Access, amendments |

**Malpractice Protection:**
| Strategy | Implementation |
|----------|----------------|
| Timely documentation | Document promptly |
| Objective facts | Avoid opinions |
| Informed consent | Document discussion |
| Non-adherence | Document counseling |
| Follow-up | Clear instructions |

**Regulatory Requirements:**
- Meaningful Use / MIPS
- Quality reporting
- Core measures
- Patient safety

## Quality Documentation

**Data Integrity:**
| Issue | Prevention |
|-------|------------|
| Copy-paste errors | Review and update |
| Template errors | Customization |
| Autopopulation | Verification |
| Outdated information | Regular review |

**Clarity Standards:**
| Standard | Example |
|----------|---------|
| Precise language | "2-cm erythematous lesion" vs "red spot" |
| Quantified data | Specific numbers |
| Temporal clarity | Exact timing |
| Attribution | Source of information |

## Communication Through Notes

**Interprofessional Notes:**
| Audience | Consideration |
|----------|---------------|
| Consultants | Specific question |
| Nursing | Care needs |
| Pharmacy | Medication issues |
| Social work | Discharge barriers |
| Patients | Open notes awareness |

**Handoff Documentation:**
- I-PASS elements
- Anticipatory guidance
- Contingency plans
- Contact information

## Teaching Documentation

**Educational Notes:**
| Element | Purpose |
|---------|---------|
| Differential reasoning | Demonstrate thinking |
| Literature reference | Evidence-based |
| Self-assessment | Reflection |
| Learning issues | Knowledge gaps |

**Feedback Integration:**
- Preceptor comments
- Iterative improvement
- Portfolio development`,
      keyTerms: [
        { term: 'information synthesis', definition: 'Integrating multiple data sources into coherent clinical understanding' },
        { term: 'interoperability', definition: 'Ability of different systems to exchange and use health information' },
        { term: 'minimum necessary', definition: 'HIPAA principle limiting disclosure to minimum needed for purpose' },
        { term: 'open notes', definition: 'Practice of sharing clinical notes with patients through portals' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced clinical documentation demonstrates sophisticated integration of clinical reasoning, regulatory compliance, quality improvement, and ethical considerations to support optimal patient care.',
      explanation: `## Clinical Reasoning Documentation

**Diagnostic Reasoning:**
| Element | Documentation |
|---------|---------------|
| Hypothesis generation | Initial differential |
| Data gathering | Targeted testing |
| Pattern recognition | Illness scripts |
| Probabilistic reasoning | Risk assessment |
| Working diagnosis | Supporting evidence |

**Uncertainty Documentation:**
| Strategy | Language |
|----------|----------|
| Explicit uncertainty | "Uncertain etiology" |
| Differential maintained | "Cannot rule out..." |
| Contingency plans | "If X, then Y" |
| Follow-up specified | "Reassess in..." |

**Complex Patients:**
| Challenge | Approach |
|-----------|----------|
| Multiple problems | Prioritized list |
| Conflicting data | Analysis of discrepancy |
| Changing status | Temporal documentation |
| Diagnostic delays | Reasoning evolution |

## Quality and Safety

**Safety Documentation:**
| Event | Documentation |
|-------|---------------|
| Near miss | Transparent reporting |
| Adverse event | Factual description |
| Disclosure | Patient communication |
| System issues | Improvement suggestions |

**Quality Metrics:**
| Domain | Documentation |
|--------|---------------|
| Process | Protocol adherence |
| Outcome | Results tracking |
| Patient experience | Communication |
| Cost | Value documentation |

**High-Value Care:**
| Strategy | Note Content |
|----------|--------------|
| Avoiding low-value care | Rationale for not testing |
| Resource stewardship | Cost consideration |
| Choosing Wisely | Guideline reference |

## Regulatory and Compliance

**Advanced Compliance:**
| Area | Requirements |
|------|--------------|
| MACRA/MIPS | Quality measures |
| HEDIS | Performance metrics |
| Joint Commission | Documentation standards |
| CMS conditions | Participation rules |

**Audit Preparedness:**
| Type | Documentation |
|------|---------------|
| Coding audits | Level justification |
| Medical necessity | Clinical reasoning |
| Compliance | Policy adherence |
| Quality | Outcome data |

## Ethical Documentation

**Ethical Considerations:**
| Issue | Approach |
|-------|----------|
| Honesty | Accurate representation |
| Objectivity | Avoid bias |
| Respect | Dignified language |
| Confidentiality | Protected information |

**Difficult Situations:**
| Scenario | Documentation |
|----------|---------------|
| Non-adherence | Non-judgmental, counseling |
| Difficult patient | Behavioral descriptions |
| Errors | Disclosure, remediation |
| End-of-life | Goals, preferences |

## Advanced EHR Use

**Clinical Decision Support:**
| Feature | Application |
|---------|-------------|
| Alerts | Override documentation |
| Reminders | Action taken |
| Order sets | Customization |
| Guidelines | Integration |

**Analytics and Population Health:**
- Registry documentation
- Risk stratification
- Care gap identification
- Reporting accuracy

## Teaching and Scholarship

**Educational Documentation:**
| Approach | Example |
|----------|---------|
| Think aloud | Reasoning explicit |
| Evidence-based | Literature cited |
| Reflective | Self-assessment |

**Quality Improvement:**
| Activity | Documentation |
|----------|---------------|
| Chart review | Systematic findings |
| Audit feedback | Response |
| Process improvement | Changes made |`,
      keyTerms: [
        { term: 'illness script', definition: 'Mental template connecting patient presentations to diseases' },
        { term: 'MACRA', definition: 'Medicare Access and CHIP Reauthorization Act - quality payment program' },
        { term: 'HEDIS', definition: 'Healthcare Effectiveness Data and Information Set - quality measures' },
        { term: 'clinical decision support', definition: 'Electronic tools providing guidance at point of care' },
      ],
      clinicalNotes: `Clinical Pearl: Documentation serves multiple masters - patient care, legal protection, billing, and quality improvement. The best notes balance comprehensiveness with efficiency, serving immediate clinical needs while providing longitudinal record value. Remember that your notes may be read by many others including consultants, patients, and potentially legal reviewers.

Expert Tip: Develop your own documentation style that is both efficient and thorough. Use templates and smart phrases wisely, but always personalize and verify. The goal is notes that help patient care first, satisfy regulatory requirements second, and protect legally third.`,
    },
    5: {
      level: 5,
      summary: 'Professional mastery of clinical documentation integrates expert clinical reasoning, informatics leadership, quality science, and contribution to advancing documentation standards and patient safety.',
      explanation: `## Documentation Expertise

**Cognitive Documentation:**
| Expertise Level | Characteristics |
|-----------------|-----------------|
| Pattern recognition | Rapid synthesis |
| Prioritization | Key information first |
| Context integration | Holistic understanding |
| Efficiency | Minimal words, maximum meaning |

**Diagnostic Documentation:**
| Skill | Application |
|-------|-------------|
| Calibration | Match detail to complexity |
| Flexibility | Adapt to context |
| Teaching | Educational value |
| Quality | Safety contribution |

## Medical Informatics

**EHR Design:**
| Element | Consideration |
|---------|---------------|
| Usability | Clinician workflow |
| Safety | Error prevention |
| Efficiency | Time optimization |
| Interoperability | Data exchange |

**Clinical Documentation Improvement (CDI):**
| Activity | Impact |
|----------|--------|
| Query practice | Clarification |
| Education | Awareness |
| Technology | Support tools |
| Analytics | Monitoring |

**Artificial Intelligence:**
| Application | Status |
|-------------|--------|
| Voice recognition | Mature |
| NLP processing | Advancing |
| Documentation support | Emerging |
| Decision support | Integrated |

## Quality Science

**Documentation Quality:**
| Dimension | Measurement |
|-----------|-------------|
| Completeness | Required elements |
| Accuracy | Correct information |
| Timeliness | Prompt documentation |
| Accessibility | Usability |

**Patient Safety:**
| Contribution | Mechanism |
|--------------|-----------|
| Communication | Information transfer |
| Decision support | Guidance |
| Monitoring | Tracking |
| Learning | Error analysis |

## Leadership and Policy

**Documentation Leadership:**
| Role | Responsibilities |
|------|------------------|
| EHR governance | Design decisions |
| Policy development | Standards setting |
| Education | Training programs |
| Quality oversight | Monitoring |

**Professional Standards:**
| Organization | Contribution |
|--------------|--------------|
| AMA | Policy |
| Specialty societies | Guidelines |
| Health systems | Implementation |
| Regulators | Requirements |

## Advancing the Field

**Research:**
| Area | Questions |
|------|-----------|
| Documentation burden | Solutions |
| EHR usability | Improvement |
| Patient outcomes | Correlation |
| Efficiency | Optimization |

**Innovation:**
| Innovation | Application |
|------------|-------------|
| Ambient documentation | Automated capture |
| Natural language | Processing |
| Predictive analytics | Risk identification |
| Patient engagement | Shared notes |

## Legacy

**Education:**
- Documentation curriculum
- Competency assessment
- Mentorship

**Improvement:**
| Domain | Contribution |
|--------|--------------|
| Patient care | Quality |
| Efficiency | Time savings |
| Safety | Error reduction |
| Satisfaction | Provider wellness |`,
      keyTerms: [
        { term: 'clinical documentation improvement', definition: 'Process of ensuring clinical documentation accurately reflects care provided' },
        { term: 'natural language processing', definition: 'AI technology for extracting meaning from clinical text' },
        { term: 'ambient documentation', definition: 'Technology that automatically documents clinical encounters' },
        { term: 'documentation burden', definition: 'Time and effort required for clinical documentation' },
      ],
      clinicalNotes: `Expert Perspective: Clinical documentation is at an inflection point with technology transformation. Expert documenters demonstrate:

1. Rapid synthesis of complex clinical data
2. Efficient use of electronic tools
3. Balanced attention to clinical, regulatory, and legal requirements
4. Clear communication across professional boundaries
5. Support for quality and safety
6. Adaptability to evolving technology
7. Contribution to system improvement

The future of documentation likely includes significant automation, but clinical judgment in determining what to document and how to synthesize information remains a core physician competency. Embrace technology while maintaining the human elements of clinical reasoning and communication.`,
    },
  },

  media: [
    {
      id: 'soap-note-template',
      type: 'diagram',
      filename: 'soap-note-template.svg',
      title: 'SOAP Note Template',
      description: 'Structure of a SOAP format progress note',
    },
    {
      id: 'hp-structure',
      type: 'diagram',
      filename: 'hp-structure.svg',
      title: 'History and Physical Structure',
      description: 'Components of a comprehensive H&P note',
    },
  ],

  citations: [
    {
      id: 'aaa-documentation',
      type: 'website',
      title: 'Documentation Guidelines',
      source: 'American Medical Association',
      accessedDate: '2025-01-28',
    },
    {
      id: 'open-notes',
      type: 'website',
      title: 'OpenNotes Movement',
      source: 'OpenNotes',
      url: 'https://www.opennotes.org',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'guide-presenting-patients', targetType: 'concept', relationship: 'related', label: 'Presenting Patients' },
    { targetId: 'guide-pre-rounding', targetType: 'concept', relationship: 'related', label: 'Pre-Rounding' },
    { targetId: 'clinical-documentation', targetType: 'concept', relationship: 'related', label: 'Clinical Documentation' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['clinical-skills', 'documentation'],
    keywords: ['medical record', 'charting', 'documentation', 'EHR', 'SOAP note'],
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

export default writingNotes;
