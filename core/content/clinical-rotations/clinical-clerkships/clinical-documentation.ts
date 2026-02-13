/**
 * Clinical Documentation - Medical Record Writing Skills
 *
 * Educational content covering clinical documentation including
 * history and physicals, progress notes, and medical record writing.
 */

import { EducationalContent } from '../../types';

export const clinicalDocumentation: EducationalContent = {
  id: 'education-clinical-documentation',
  type: 'concept',
  name: 'Clinical Documentation',
  alternateNames: ['Medical Charting', 'Medical Records', 'Clinical Notes', 'Medical Documentation'],

  levels: {
    1: {
      level: 1,
      summary: 'Clinical documentation is writing down information about patients in their medical record. Good notes help doctors remember what happened and communicate with other healthcare workers.',
      explanation: `## What is Clinical Documentation?

Clinical documentation is how doctors and nurses write down information about patients. It's like keeping a detailed diary of a patient's health.

## Why Documentation Matters

**Important because it:**
- Helps doctors remember patient details
- Lets other caregivers know what happened
- Creates a record if needed later
- Helps get paid for medical services

## Types of Medical Notes

**1. Admission Note (H&P)**
When a patient first arrives:
- Why are they here?
- What happened?
- Past health history
- Exam findings
- What we think is wrong
- Treatment plan

**2. Progress Notes**
Daily updates:
- How is the patient doing?
- Any changes?
- What's the plan today?

**3. Discharge Summary**
When the patient leaves:
- Why they were here
- What was done
- What medicines to take
- When to follow up

## The SOAP Note

A common way to organize notes:

**S - Subjective:** What the patient says
- "I have a headache"
- "The pain is getting better"

**O - Objective:** What you observe/measure
- Vital signs (temperature, blood pressure)
- Exam findings

**A - Assessment:** What you think is happening
- Diagnosis
- How the patient is doing

**P - Plan:** What you will do
- Tests to order
- Medicines to give
- Follow-up plans

## Good Documentation Tips

- Write clearly
- Be accurate
- Include important information
- Don't write things that aren't true
- Sign and date your notes`,
      keyTerms: [
        { term: 'H&P', definition: 'History and Physical - a complete note when a patient first arrives' },
        { term: 'SOAP note', definition: 'A way to organize notes: Subjective, Objective, Assessment, Plan' },
        { term: 'progress note', definition: 'A daily note about how a patient is doing' },
        { term: 'discharge summary', definition: 'A note summarizing a patient\'s hospital stay when they leave' },
      ],
      analogies: [
        'The medical record is like a patient\'s health diary - it tells their whole story.',
        'SOAP notes are like a recipe format - they organize information so everyone can follow.',
        'Documentation is like taking good notes in class - you need it later and others may read it.',
      ],
      examples: [
        'A doctor writes a SOAP note: S: "Pain is better today." O: Temperature 98.6F. A: Improving pneumonia. P: Continue antibiotics.',
        'When a patient goes home, the doctor writes a discharge summary explaining what happened and what the patient should do.',
      ],
      patientCounselingPoints: [
        'Your medical records contain important information about your health history',
        'Good documentation helps ensure consistent care from different providers',
      ],
    },

    2: {
      level: 2,
      summary: 'Clinical documentation includes history and physical examinations, progress notes, procedure notes, and discharge summaries. Effective documentation is essential for communication, continuity of care, legal protection, and billing compliance.',
      explanation: `## Clinical Documentation Fundamentals

Clinical documentation serves multiple purposes: communication among providers, legal record, billing justification, and quality measurement.

## Types of Clinical Notes

**History and Physical (H&P):**
| Section | Content |
|---------|---------|
| Chief Complaint | Why the patient came |
| HPI | History of present illness |
| PMH | Past medical history |
| Medications | Current medications |
| Allergies | Drug and other allergies |
| Family History | Relevant family conditions |
| Social History | Lifestyle factors |
| ROS | Review of systems |
| Physical Exam | Examination findings |
| Assessment | Diagnoses/problems |
| Plan | Treatment plan |

**Progress Notes (SOAP):**
| Component | Content |
|-----------|---------|
| Subjective | Patient's symptoms, concerns |
| Objective | Vitals, exam, labs, imaging |
| Assessment | Problem list, analysis |
| Plan | For each problem |

**Procedure Notes:**
- Indication
- Consent obtained
- Procedure performed
- Complications
- Patient condition after

**Discharge Summary:**
- Admission diagnosis
- Hospital course
- Procedures performed
- Discharge diagnosis
- Discharge medications
- Follow-up instructions

## The History of Present Illness (HPI)

**OLDCARTS Framework:**
| Element | Description |
|---------|-------------|
| Onset | When did it start? |
| Location | Where is it? |
| Duration | How long does it last? |
| Character | What does it feel like? |
| Aggravating | What makes it worse? |
| Relieving | What makes it better? |
| Timing | When does it occur? |
| Severity | How bad is it (1-10)? |

## Progress Note Best Practices

**Daily Note Structure:**
1. Date and time
2. Patient identification
3. SOAP format
4. Problem-based organization
5. Signature and credentials

**Documentation Quality:**
| Do | Don't |
|----|-------|
| Be specific | Be vague |
| Document what you see | Copy previous notes blindly |
| Use objective language | Use judgmental terms |
| Include pertinent negatives | Only positive findings |
| Sign and date | Leave unsigned |

## Medical Abbreviations

**Common Abbreviations:**
| Abbreviation | Meaning |
|--------------|---------|
| CC | Chief complaint |
| HPI | History of present illness |
| PMH | Past medical history |
| ROS | Review of systems |
| PE | Physical examination |
| A/P | Assessment and plan |
| Dx | Diagnosis |
| Tx | Treatment |
| Rx | Prescription |
| q | Every |
| BID | Twice daily |
| PRN | As needed |

## Legal Considerations

**Documentation Principles:**
- If it wasn't documented, it wasn't done
- Document in real-time when possible
- Never alter records retroactively
- Corrections should be transparent
- Maintain confidentiality

## Electronic Health Records (EHR)

**Benefits:**
- Legibility
- Accessibility
- Template efficiency
- Decision support

**Challenges:**
- Copy-paste errors
- Note bloat
- Template limitations
- Time demands`,
      keyTerms: [
        { term: 'OLDCARTS', definition: 'A mnemonic for characterizing symptoms: Onset, Location, Duration, Character, Aggravating, Relieving, Timing, Severity' },
        { term: 'pertinent negative', definition: 'Absence of a symptom or finding that would be expected if a particular diagnosis were present' },
        { term: 'review of systems', definition: 'A systematic series of questions covering each body system' },
        { term: 'EHR', definition: 'Electronic Health Record - digital version of a patient\'s medical chart' },
      ],
      analogies: [
        'The HPI is like a detective report - it tells the story of what brought the patient in.',
        'Pertinent negatives are like a detective noting that there was no sign of forced entry - the absence is informative.',
        'SOAP notes are like a template for telling the patient\'s story consistently.',
        'EHR is like going from paper files to a database - more efficient but with new challenges.',
      ],
      examples: [
        'An HPI for chest pain: "54-year-old male with 2-hour history of substernal chest pressure radiating to the left arm, associated with diaphoresis, 8/10 severity, not relieved by rest."',
        'A progress note assessment: "1. NSTEMI - troponins trending down, continue heparin, plan for cath tomorrow. 2. HTN - BP controlled on current regimen."',
      ],
      patientCounselingPoints: [
        'Your medical record is a legal document that documents all care you receive',
        'You have the right to request copies of your medical records',
      ],
    },

    3: {
      level: 3,
      summary: 'Clinical documentation integrates patient narratives, clinical findings, and medical reasoning into standardized formats. Effective notes communicate clearly, support billing compliance, provide legal protection, and facilitate continuity of care. EHR systems present both opportunities and challenges for documentation quality.',
      explanation: `## Clinical Documentation Framework

Clinical documentation serves as the primary communication tool among healthcare providers, a legal record, and the basis for billing and quality measurement.

## Documentation Purposes

| Purpose | Requirements |
|---------|--------------|
| Communication | Clear, complete, timely |
| Legal record | Accurate, contemporaneous |
| Billing | Sufficient detail for coding |
| Quality | Measurable, reportable |

## Advanced H&P Structure

**Chief Complaint:**
- Patient's words when possible
- Brief, focused

**HPI Narrative:**
- Chronological story
- Include pertinent positives and negatives
- Semantic qualifiers (timing, severity)
- Associated symptoms
- Previous workup and treatment

**Problem-Specific ROS:**
| System | Relevant Questions |
|--------|-------------------|
| Constitutional | Fever, weight change |
| HEENT | Vision, hearing, throat |
| Cardiovascular | Chest pain, edema |
| Respiratory | Dyspnea, cough |
| GI | Nausea, bowel changes |
| GU | Urinary symptoms |
| Neuro | Weakness, sensory changes |

**Physical Examination Documentation:**
- Complete vs. focused
- Abnormal findings detailed
- Normal findings noted appropriately
- Objective description

## Assessment and Plan Quality

**Problem-Based Organization:**
1. List all active problems
2. Each problem gets assessment
3. Each problem gets specific plan
4. Priority order typically

**Assessment Elements:**
- Diagnosis or differential
- Severity assessment
- Response to treatment
- Prognosis when relevant

**Plan Components:**
- Diagnostic studies
- Therapeutic interventions
- Consultations
- Patient education
- Follow-up

## Progress Note Excellence

**Daily Note Quality:**
| Element | Best Practice |
|---------|---------------|
| Subjective | Specific patient quotes |
| Objective | Today's data, changes |
| Assessment | Analysis, not just diagnosis |
| Plan | Specific, actionable |

**Avoiding Common Errors:**
| Error | Consequence | Prevention |
|-------|-------------|------------|
| Copy-paste | Inaccuracy | Review and edit |
| Note bloat | Buried information | Concise writing |
| Incomplete | Missed communication | Checklists |
| Delayed | Inaccuracy | Real-time documentation |

## Specialty-Specific Documentation

**Surgical Notes:**
- Procedure note required
- Pre-op and post-op documented
- Complications noted
- Consent documented

**Psychiatric Notes:**
- Mental status examination
- Safety assessment
- Capacity evaluation
- Treatment plan

**Obstetric Notes:**
- Prenatal course
- Labor progress
- Delivery details
- Newborn status

## EHR Optimization

**Template Use:**
| Approach | Benefit | Risk |
|----------|---------|------|
| Use templates | Efficiency | Generic notes |
| Customize | Specificity | Time |
| Hybrid | Balance | Requires skill |

**Documentation Efficiency:**
- Smart phrases
- Voice recognition
- Structured data
- Template customization

## Billing Documentation

**Level of Service:**
- History complexity
- Examination extent
- Medical decision making
- Total time (as of 2021)

**Documentation Requirements:**
| Element | Documentation |
|---------|---------------|
| Chief complaint | Required |
| HPI | Elements documented |
| ROS | Systems reviewed |
| PFSH | Relevant history |
| Exam | Systems examined |
| MDM | Complexity evident |

## Legal Protection

**Risk Mitigation:**
- Document contemporaneously
- Be factual, objective
- Document patient decisions
- Include informed consent
- Note complications and response

**Corrections:**
- Never delete or alter
- Addendum for additions
- Correction notation if error
- Date and sign corrections`,
      keyTerms: [
        { term: 'semantic qualifiers', definition: 'Descriptive terms that add precision to clinical descriptions (e.g., timing, severity, character)' },
        { term: 'medical decision making', definition: 'The complexity of establishing a diagnosis and/or selecting a management option, used in billing' },
        { term: 'addendum', definition: 'A supplemental note added to the medical record after the original documentation' },
        { term: 'smart phrase', definition: 'Pre-built text templates in EHR systems that can be inserted with abbreviated commands' },
      ],
      analogies: [
        'Medical decision making is like showing your work in math - the documentation should reveal your thinking process.',
        'An addendum is like a postscript to a letter - additional information added after the main message.',
        'Smart phrases are like keyboard shortcuts - they speed up repetitive tasks but shouldn\'t replace thoughtful writing.',
        'The medical record is like a court transcript - it should accurately capture what happened.',
      ],
      examples: [
        'A complete HPI: "Mrs. Smith is a 68-year-old woman with COPD who presents with 3 days of worsening dyspnea. She describes increased frequency of rescue inhaler use from 2x/day to 6-8x/day. Associated with productive cough with green sputum and low-grade fever. Denies chest pain, hemoptysis, or leg swelling. Has not had similar episodes in the past year. No recent sick contacts or travel."',
        'A problem-based assessment: "#1 COPD exacerbation, likely infectious given purulent sputum - start prednisone burst, azithromycin, continue maintenance inhalers. #2 Hypertension - hold lisinopril given acute illness, monitor. #3 T2DM - continue home regimen, may need adjustment with steroids."',
      ],
      patientCounselingPoints: [
        'Clinical documentation enables coordination among all providers involved in your care',
        'Accurate documentation is essential for both clinical care and insurance coverage',
      ],
    },

    4: {
      level: 4,
      summary: 'Graduate-level documentation integrates clinical reasoning, communication science, and regulatory requirements. Expert documentation demonstrates medical decision making, supports accurate coding, provides legal protection, and facilitates quality measurement while avoiding common pitfalls of EHR systems.',
      explanation: `## Advanced Clinical Documentation Framework

Expert documentation requires integration of clinical reasoning, communication principles, regulatory requirements, and EHR optimization.

## Documentation as Clinical Reasoning

**Demonstrating Thought Process:**
| Element | What It Shows |
|---------|---------------|
| Differential diagnosis | Breadth of consideration |
| Evidence cited | Basis for conclusions |
| Rationale for plan | Reasoning for decisions |
| Contingencies | Anticipatory thinking |

**Assessment Quality Markers:**
- Synthesis, not just listing
- Explanation of reasoning
- Response to therapy noted
- Prognosis considered
- Uncertainty acknowledged

## Communication Excellence

**Audience Awareness:**
| Reader | Needs |
|--------|-------|
| Covering physician | Key findings, plan |
| Consultant | Specific question |
| Primary care | Summary, follow-up |
| Patient | Understandable explanation |

**Information Hierarchy:**
1. Most important first
2. Problem prioritization
3. Key data highlighted
4. Action items clear

## Regulatory Compliance

**CMS Documentation Guidelines:**
| Year | Major Change |
|------|--------------|
| 1995/1997 | E/M documentation guidelines |
| 2021 | Time-based or MDM-based |

**Medical Decision Making (MDM):**
| Level | Diagnoses | Data | Risk |
|-------|-----------|------|------|
| Straightforward | 1 minor | Minimal | Minimal |
| Low | 2+ minor or 1 stable | Limited | Low |
| Moderate | 1+ chronic worsening | Moderate | Moderate |
| High | 1 acute/chronic threat | Extensive | High |

**Time-Based Documentation:**
- Document total time
- Counseling/coordination activities
- Date of service

## EHR Optimization Strategies

**Efficiency Without Sacrifice:**
| Strategy | Implementation |
|----------|----------------|
| Templates | Customize for your practice |
| Smart text | Personal library |
| Voice recognition | Dictation when efficient |
| Shortcuts | Learn system capabilities |

**Avoiding EHR Pitfalls:**
| Pitfall | Prevention |
|---------|------------|
| Copy-forward errors | Review and update |
| Note bloat | Edit for relevance |
| Template limitations | Customize and supplement |
| Lost information | Structured searching |

## Legal Documentation Principles

**Malpractice Considerations:**
| Principle | Application |
|-----------|-------------|
| Contemporaneous | Document at time of care |
| Complete | Include relevant information |
| Objective | Avoid judgmental language |
| Honest | Never falsify |

**High-Risk Situations:**
- Informed consent documentation
- Patient non-compliance documentation
- Adverse event documentation
- Communication documentation

## Quality Documentation

**Quality Measure Support:**
| Measure Type | Documentation Need |
|--------------|-------------------|
| Process | Intervention documented |
| Outcome | Result documented |
| Structure | Capability documented |

**Structured Data Entry:**
- Problem list maintenance
- Medication reconciliation
- Allergy verification
- Preventive care documentation

## Teaching Documentation

**For Students:**
| Skill | Teaching Method |
|-------|-----------------|
| Structure | Templates with feedback |
| Content | Review and revise |
| Efficiency | Model, practice |
| Reasoning | Discussion, comparison |

**Attestation:**
- Review student notes
- Agree/edit assessment and plan
- Sign with appropriate statement
- Meet billing requirements

## Handoff Documentation

**Sign-Out Elements:**
| Component | Content |
|-----------|---------|
| Patient ID | Name, location, team |
| Summary | Key issues |
| To-dos | Pending items |
| Contingencies | If-then plans |
| Code status | Resuscitation preferences |

**I-PASS Framework:**
- Illness severity
- Patient summary
- Action list
- Situation awareness
- Synthesis by receiver`,
      keyTerms: [
        { term: 'E/M coding', definition: 'Evaluation and Management coding - the system for billing clinical visits based on documentation' },
        { term: 'attestation', definition: 'Supervising physician\'s statement confirming review and agreement with student documentation' },
        { term: 'I-PASS', definition: 'Standardized handoff framework: Illness severity, Patient summary, Action list, Situation awareness, Synthesis' },
        { term: 'note bloat', definition: 'Excessive documentation length reducing clarity, often from copy-paste or templates' },
        { term: 'structured data', definition: 'Information entered in defined fields allowing systematic retrieval and analysis' },
      ],
      analogies: [
        'MDM documentation is like showing your work in math - the complexity of your reasoning should be evident.',
        'Note bloat is like filler words in writing - it obscures the important message.',
        'I-PASS handoffs are like relay race exchanges - structured to ensure nothing is dropped.',
        'Attestation is like co-signing a check - you\'re taking responsibility for what\'s documented.',
      ],
      examples: [
        'A high-complexity MDM documentation: "The differential for this patient\'s acute kidney injury includes prerenal (hypovolemia from vomiting), intrinsic (ATN from hypotension, AIN from NSAIDs), and postrenal (unlikely given normal bladder scan). Given the clinical picture of volume depletion with recent hypotension and bland sediment, ATN is most likely. Will pursue conservative management with fluid resuscitation; if no improvement in 48h, will consider nephrology consultation and possible biopsy."',
        'An I-PASS handoff: "This is Mr. Jones in room 512, who I would characterize as sick. He\'s a 72M with CHF who presented with acute on chronic systolic heart failure, now on IV diuresis. Tonight: check 8pm BMP for K, continue Lasix at 40 IV q8h, goal -1-2L. If BP drops below 90 or urine output less than 30cc/hr, call me. He is full code."',
      ],
      patientCounselingPoints: [
        'Documentation quality directly affects care coordination and safety',
        'Healthcare regulations require thorough documentation for appropriate billing',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional documentation mastery integrates clinical expertise, communication science, regulatory knowledge, and EHR optimization. Expert clinicians produce documentation that demonstrates reasoning, supports accurate coding, provides legal protection, facilitates quality measurement, and serves as teaching tools.',
      explanation: `## Professional Clinical Documentation Mastery

Expert-level clinical documentation synthesizes clinical reasoning, communication principles, regulatory requirements, and system optimization.

## Documentation as Professional Tool

**Multiple Functions:**
| Function | Optimization |
|----------|--------------|
| Communication | Clear, audience-appropriate |
| Legal record | Complete, accurate, contemporaneous |
| Billing support | Sufficient detail, appropriate level |
| Quality data | Structured, measurable |
| Teaching | Demonstrates reasoning |
| Research | Retrievable, standardized |

## Clinical Reasoning Documentation

**Diagnostic Reasoning:**
| Element | Documentation |
|---------|---------------|
| Problem representation | Concise summary |
| Differential | Prioritized list |
| Evidence | Supporting/refuting findings |
| Synthesis | Most likely diagnosis |
| Uncertainty | Acknowledged appropriately |

**Therapeutic Reasoning:**
| Element | Documentation |
|---------|---------------|
| Goals | Clearly stated |
| Options | Considered alternatives |
| Selection | Rationale for choice |
| Monitoring | Parameters defined |
| Contingencies | If-then plans |

## Advanced EHR Optimization

**System Mastery:**
| Capability | Application |
|------------|-------------|
| Templates | Customized, efficient |
| Macros | Personal library |
| Order sets | Streamlined ordering |
| Decision support | Appropriately utilized |
| Analytics | Quality monitoring |

**Documentation Workflow:**
| Phase | Optimization |
|-------|--------------|
| Pre-visit | Preparation, review |
| Visit | Real-time entry |
| Post-visit | Completion, signing |
| Follow-up | Result review, action |

## Regulatory Mastery

**Compliance Framework:**
| Regulation | Documentation Requirement |
|------------|--------------------------|
| CMS | E/M documentation |
| HIPAA | Privacy, security |
| TJC | Quality measures |
| Meaningful Use | Certified EHR use |

**Audit Preparedness:**
- Documentation supports billing
- Medical necessity evident
- Contemporaneous records
- Consistent with standards

## Legal Protection Excellence

**Documentation Practices:**
| Principle | Implementation |
|-----------|----------------|
| Accuracy | Verify facts before documenting |
| Completeness | All relevant information |
| Objectivity | Factual, non-judgmental |
| Timeliness | As close to real-time as possible |
| Honesty | Never falsify |

**High-Risk Documentation:**
| Situation | Documentation Needs |
|-----------|---------------------|
| Informed consent | Discussion documented |
| Refusal of care | Competence, risks explained |
| Adverse events | Timeline, response, disclosure |
| Disagreements | Communication documented |

## Quality and Safety

**Documentation for Quality:**
| Initiative | Documentation Role |
|------------|-------------------|
| Core measures | Process documentation |
| HEDIS | Preventive care records |
| Patient safety | Event reporting |
| Peer review | Case documentation |

**Safety Documentation:**
- Medication reconciliation
- Allergy verification
- Fall risk assessment
- Infection prevention

## Teaching Through Documentation

**Educational Value:**
| Learner | Documentation Benefit |
|---------|----------------------|
| Students | Models reasoning |
| Residents | Templates for learning |
| Colleagues | Knowledge sharing |
| Self | Reflection, improvement |

**Feedback on Documentation:**
- Specific, constructive
- Reasoning focus
- Efficiency guidance
- Role modeling

## Future Directions

**Emerging Trends:**
| Trend | Impact |
|-------|--------|
| AI scribes | Efficiency potential |
| Natural language processing | Structured extraction |
| Voice recognition | Workflow change |
| Patient access | Transparency expectations |
| Open Notes | Patient engagement |

**Adaptation Strategies:**
- Technology adoption
- Workflow evolution
- Standards compliance
- Quality focus`,
      keyTerms: [
        { term: 'problem representation', definition: 'A concise summary of a case that captures key clinical features for pattern matching' },
        { term: 'semantic qualifiers', definition: 'Descriptive terms that add clinical precision to documentation' },
        { term: 'meaningful use', definition: 'Federal standards for certified EHR technology use' },
        { term: 'Open Notes', definition: 'Movement and practice of sharing clinical notes with patients' },
        { term: 'AI scribes', definition: 'Artificial intelligence tools that assist with documentation by transcribing and structuring clinical encounters' },
      ],
      clinicalNotes: `Expert perspective on clinical documentation:

1. **Audience Awareness:** Every note has multiple readers - colleagues, consultants, patients, lawyers, billers, and future self. Write for all of them.

2. **Reasoning Visible:** The value of documentation is showing your thinking, not just recording data. Your assessment should demonstrate clinical reasoning.

3. **Efficiency vs. Quality:** Template efficiency shouldn't sacrifice note quality. The best documentation is both efficient and meaningful.

4. **Legal Perspective:** "If it wasn't documented, it wasn't done" is legal reality. Document clinical decision-making, especially for high-risk situations.

5. **EHR Pitfalls:** Copy-forward errors cause harm. Every note should be reviewed and updated; automated text is never a substitute for clinical judgment.

6. **Note Bloat:** More is not better. Lengthy notes bury important information. Edit for relevance and clarity.

7. **Billing Reality:** Documentation supports billing. Understand MDM levels and document to support the level of service provided.

8. **Teaching Opportunity:** Good documentation teaches. Students learn reasoning by reading well-written notes.

9. **Patient Engagement:** Open Notes means patients read what you write. Document professionally and transparently.

10. **Continuous Improvement:** Your documentation should improve throughout your career. Seek feedback, reflect on quality, and adapt to changing standards.`,
    },
  },

  media: [
    {
      id: 'soap-note-template',
      type: 'diagram',
      filename: 'soap-note-template.svg',
      title: 'SOAP Note Structure',
      description: 'Visual guide to SOAP note organization',
    },
    {
      id: 'hp-structure',
      type: 'diagram',
      filename: 'hp-structure.svg',
      title: 'History and Physical Structure',
      description: 'Comprehensive H&P documentation framework',
    },
  ],

  citations: [
    {
      id: 'cms-documentation-guidelines',
      type: 'website',
      title: 'E/M Documentation Guidelines',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/PhysicianFeeSched/PFS-Federal-Regulation-Notices-Items/CMS-1734-F',
      accessedDate: '2025-01-28',
    },
    {
      id: 'stetson-2012',
      type: 'article',
      title: 'Assessing Electronic Note Quality Using the Physician Documentation Quality Instrument',
      authors: ['Stetson, P.D.', 'et al.'],
      source: 'Journal of the American Medical Informatics Association',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-clerkship-overview', targetType: 'concept', relationship: 'parent', label: 'Clinical Clerkship Overview' },
    { targetId: 'education-step2-clinical-skills', targetType: 'concept', relationship: 'related', label: 'Clinical Skills Development' },
    { targetId: 'clinical-reasoning-basics', targetType: 'concept', relationship: 'related', label: 'Clinical Reasoning' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['clinical documentation', 'medical records', 'EHR', 'SOAP notes', 'H&P'],
    keywords: ['documentation', 'charting', 'medical records', 'progress notes', 'EHR', 'SOAP', 'H&P'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default clinicalDocumentation;
