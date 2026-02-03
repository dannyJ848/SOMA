/**
 * Correcting Errors in Medical Records
 *
 * Understanding your right to request corrections to inaccurate health information.
 */

import { EducationalContent } from '../../types';

export const correctingRecordErrors: EducationalContent = {
  id: 'concept-correcting-record-errors',
  type: 'concept',
  name: 'Correcting Errors in Medical Records',
  alternateNames: ['Medical Record Amendments', 'Health Record Corrections', 'Fixing Record Mistakes'],

  levels: {
    1: {
      level: 1,
      summary: 'Sometimes medical records have mistakes. You can ask to have them fixed!',
      explanation: `**Why Records Might Have Mistakes:**
Doctors and nurses are very careful, but sometimes mistakes happen:
- Your name might be spelled wrong
- The wrong medicine might be listed
- A date might be wrong
- Information about you might be incorrect

**Types of Mistakes:**
- Wrong personal information (name, birthday)
- Wrong allergy listed
- Medicine you do not take
- Test result that belongs to someone else
- Something that did not happen

**How to Fix a Mistake:**

*Step 1: Find the Mistake*
- Read your records carefully
- Compare to what you know is true
- Write down what is wrong

*Step 2: Tell Someone*
- Talk to your doctor's office
- Explain what is wrong
- Ask them to fix it

*Step 3: Put It in Writing*
- Write a letter or fill out a form
- Say what is wrong
- Say what should be correct

**Why Fixing Mistakes Matters:**
- Doctors need correct information to help you
- Wrong allergies could be dangerous
- Wrong information might affect your care

**Remember:**
It is okay to ask for corrections! You are helping your doctors help you better.`,
      keyTerms: [
        { term: 'error', definition: 'A mistake or something that is wrong' },
        { term: 'correction', definition: 'Fixing something that was wrong' },
        { term: 'medical record', definition: 'Written information about your health care' },
      ],
      analogies: [
        'Fixing a mistake in your medical record is like fixing a typo in a report - you want the information to be correct.',
        'Your medical record is like your health story - you want to make sure it tells the truth about you.',
      ],
      examples: [
        'A patient notices the record says they are allergic to penicillin, but they are not. They ask to have it corrected.',
        'Someone sees the wrong birthday in their records and asks the office to fix it.',
      ],
    },
    2: {
      level: 2,
      summary: 'HIPAA gives you the right to request amendments to your medical records when they contain incorrect information. Understanding the process helps you advocate for accurate records.',
      explanation: `**Your Right to Request Amendments:**

Under HIPAA, you have the right to ask for corrections to your medical records if you believe information is inaccurate or incomplete.

**What Can Be Corrected:**

| Can Request Amendment | Cannot Usually Amend |
|----------------------|---------------------|
| Factual errors | Accurate clinical opinions |
| Wrong demographics | Correctly documented observations |
| Incorrect diagnoses | Provider's medical judgment |
| Missing information | Psychotherapy notes |
| Duplicate records | Legal records |

**The Amendment Process:**

*Step 1: Identify the Error*
- Review your records carefully
- Note specific inaccuracies
- Gather supporting documentation

*Step 2: Submit Written Request*
- Contact the health information department
- Use their amendment request form
- Be specific about what is wrong
- Explain what should be correct
- Include supporting documents if available

*Step 3: Wait for Response*
- Provider has 60 days to respond
- May extend by 30 days with notice
- Must provide written decision

**Possible Outcomes:**

*If Accepted:*
- Record will be corrected
- You may be notified
- Others who received incorrect info may be notified

*If Denied:*
- Provider must explain why
- You can submit a statement of disagreement
- Your statement becomes part of the record
- You can file a complaint

**Reasons for Denial:**
- Information is accurate and complete
- Information was not created by that provider
- Information is not part of designated record set
- Information is not available for your access

**Tips for Success:**
- Be specific and clear
- Provide evidence when possible
- Focus on factual errors
- Keep copies of all requests
- Follow up if no response`,
      keyTerms: [
        { term: 'amendment', definition: 'A correction or addition to your medical record' },
        { term: 'statement of disagreement', definition: 'Your written response if an amendment request is denied' },
        { term: 'designated record set', definition: 'The group of records covered by HIPAA amendment rights' },
      ],
      analogies: [
        'Requesting an amendment is like asking a teacher to correct a wrong grade - you provide evidence and they review it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Medical record amendment rights under HIPAA provide a formal process for correcting inaccurate information while recognizing limitations on modifying clinical documentation.',
      explanation: `## Medical Record Amendment Framework

**HIPAA Amendment Requirements:**

*45 CFR 164.526:*
- Right to request amendment
- Written request required
- Applies to designated record set
- Provider response timelines
- Appeal process

**Designated Record Set:**

*Included:*
- Medical records
- Billing records
- Enrollment/payment records
- Other records used for decisions about individuals

*May Be Excluded:*
- Psychotherapy notes
- Information for legal proceedings
- Research records (certain circumstances)
- Information from other sources

**Amendment vs. Correction:**

| Amendment | Correction |
|-----------|------------|
| Patient-requested | Provider-initiated |
| HIPAA regulated | Internal policy |
| Formal process | May be informal |
| 60-day timeline | Variable |
| Appeal rights | Variable |

**Processing Amendment Requests:**

*Evaluation Criteria:*
1. Is information in designated record set?
2. Is information actually inaccurate?
3. Can requesting party request amendment?
4. Was information created by this provider?

*Documentation:*
- Original entry preserved
- Amendment linked to original
- Audit trail maintained
- Amendment clearly marked

**Clinical Judgment Considerations:**

*Generally Not Amendable:*
- Provider observations
- Clinical assessments
- Diagnostic impressions
- Treatment decisions
- Professional opinions

*Exception Approach:*
- Patient addendum allowed
- Different perspective documented
- Clinical context preserved

**Appeal and Complaint Process:**

*If Denied:*
1. Submit statement of disagreement
2. Provider may respond
3. Both become part of record
4. Future disclosures include both

*External Options:*
- File complaint with HHS OCR
- State health department
- Facility grievance process

**Special Circumstances:**

| Situation | Consideration |
|-----------|---------------|
| Multiple providers | Request to creating provider |
| Deceased patients | Personal representative rights |
| Minors | Parent/guardian authority |
| Mental health | Additional protections may apply |`,
      keyTerms: [
        { term: '45 CFR 164.526', definition: 'HIPAA regulation establishing amendment rights' },
        { term: 'audit trail', definition: 'Record of changes made to documentation' },
        { term: 'OCR', definition: 'Office for Civil Rights - enforces HIPAA' },
        { term: 'addendum', definition: 'Additional information added to existing documentation' },
      ],
      clinicalNotes: 'The distinction between factual error and clinical judgment is critical. Providers should not amend accurate clinical observations but should acknowledge patient perspective through addenda.',
    },
    4: {
      level: 4,
      summary: 'Medical record integrity requires balancing patient rights to accurate records with clinical documentation principles and legal requirements for maintaining the evidentiary record.',
      explanation: `## Medical Record Integrity and Amendments

**Principles of Medical Record Integrity:**

*Documentation Principles:*
| Principle | Application |
|-----------|-------------|
| Accuracy | Factually correct |
| Completeness | All relevant information |
| Timeliness | Documented promptly |
| Authentication | Author identified |
| Immutability | Original preserved |

*Amendment Principles:*
- Do not alter original documentation
- Addenda clearly identified
- Date and author of amendment
- Link to original entry
- Audit trail maintained

**Legal Considerations:**

*Medical Record as Legal Document:*
- Evidence in litigation
- Basis for billing
- Regulatory compliance
- Quality measurement

*Amendment Impact:*
- Original entry preserved
- Amendment discoverable
- Timeline documented
- Author responsibility

**EHR Amendment Management:**

*Technical Requirements:*
- Amendment linking
- Version control
- Audit logging
- Access controls
- Reporting capabilities

*Workflow Considerations:*
- Request routing
- Review process
- Decision documentation
- Notification systems
- Disclosure management

**Quality and Safety Implications:**

*Error Types:*
| Type | Risk | Amendment Priority |
|------|------|-------------------|
| Wrong patient | High | Immediate |
| Allergy error | High | Urgent |
| Medication error | High | Urgent |
| Demographic error | Medium | Standard |
| Documentation error | Variable | Context-dependent |

*Safety Integration:*
- Amendment requests as safety signals
- Root cause analysis
- System improvement
- Training needs

**Organizational Policies:**

*Required Elements:*
- Amendment request process
- Evaluation criteria
- Timeline management
- Decision documentation
- Appeal procedures
- Record retention

*Staff Training:*
- HIPAA requirements
- Documentation standards
- Amendment processing
- Clinical judgment boundaries

**Measuring Amendment Activity:**

*Metrics:*
| Metric | Purpose |
|--------|---------|
| Request volume | Workload, potential issues |
| Approval rate | Policy consistency |
| Timeliness | Compliance |
| Denial reasons | Pattern identification |
| Complaints | Process effectiveness |

**Complex Scenarios:**

*Disputed Clinical Assessment:*
- Document patient perspective
- Maintain clinical documentation
- Consider addendum
- Offer second opinion option

*Error Affecting Multiple Records:*
- Trace all affected documents
- Coordinate corrections
- Notify relevant parties
- Document comprehensively`,
      keyTerms: [
        { term: 'document integrity', definition: 'Maintaining accuracy and trustworthiness of medical records' },
        { term: 'version control', definition: 'System tracking changes to documents over time' },
        { term: 'authentication', definition: 'Verification of document author and approval' },
        { term: 'late entry', definition: 'Documentation added after the usual timeframe' },
      ],
      clinicalNotes: 'Organizations should view amendment requests as quality signals. High volumes or patterns in requests may indicate documentation or process issues requiring system-level intervention.',
    },
    5: {
      level: 5,
      summary: 'Optimal medical record management integrates patient rights, clinical documentation science, legal requirements, and quality improvement within a framework supporting both accuracy and integrity.',
      explanation: `## Advanced Medical Record Governance

**Framework Integration:**

\`\`\`
Patient Rights
      ↓
Amendment Request → Documentation Standards
      ↓                    ↓
Evaluation     →    Clinical Integrity
      ↓                    ↓
Decision       →    Legal Compliance
      ↓                    ↓
Implementation →    Quality Improvement
\`\`\`

**Documentation Science:**

*Evidence-Based Practices:*
- Structured documentation
- Template design
- Decision support integration
- Error prevention systems
- Quality feedback loops

*Emerging Approaches:*
- AI-assisted documentation
- Natural language processing
- Automated accuracy checking
- Real-time validation

**Health Information Governance:**

*Governance Framework:*
| Domain | Responsibility |
|--------|----------------|
| Data quality | Accuracy, completeness |
| Privacy | HIPAA compliance |
| Security | Protection |
| Retention | Lifecycle management |
| Access | Appropriate use |

*Amendment Governance:*
- Policy oversight
- Process standardization
- Metrics and reporting
- Continuous improvement
- Stakeholder engagement

**Patient Partnership:**

*Engagement Strategies:*
- Proactive record review
- Patient-reported data integration
- Pre-visit verification
- Ongoing accuracy checks
- Patient portal features

*Co-Production Model:*
\`\`\`
Provider Documentation
         ↓
Patient Review and Input
         ↓
Collaborative Verification
         ↓
Accurate, Complete Record
\`\`\`

**Health Equity Considerations:**

*Access Barriers:*
- Health literacy
- Language access
- Digital divide
- Trust issues
- Time constraints

*Equity Interventions:*
- Plain language materials
- Interpreter services
- Multiple access channels
- Patient advocacy support
- Community partnerships

**Research and Evidence:**

*Current Knowledge:*
- Patient-identified errors are valid
- Access improves accuracy
- Engagement improves outcomes
- System design matters

*Knowledge Gaps:*
- Optimal amendment processes
- Technology effectiveness
- Long-term outcomes
- Implementation science

**Future Directions:**

*Technology Evolution:*
- Real-time error detection
- Patient-contributed data
- Blockchain for integrity
- AI quality assurance

*Policy Evolution:*
- Interoperability requirements
- Patient access expansion
- Accountability mechanisms
- Quality linkages

**Global Perspectives:**

*International Approaches:*
| Region | Approach |
|--------|----------|
| US | HIPAA amendment rights |
| EU | GDPR rectification right |
| UK | Subject access requests |
| Australia | Privacy Act provisions |

*Harmonization:*
- Cross-border records
- International standards
- Privacy frameworks
- Quality standards`,
      keyTerms: [
        { term: 'health information governance', definition: 'Framework for managing health information assets' },
        { term: 'GDPR rectification', definition: 'European Union right to correction of personal data' },
        { term: 'co-production', definition: 'Collaborative creation involving patients and providers' },
        { term: 'information lifecycle', definition: 'Stages of information from creation to disposition' },
      ],
      clinicalNotes: 'The future of medical records points toward patient co-authorship and real-time accuracy verification. Organizations should prepare for increased patient engagement in record accuracy while maintaining clinical documentation integrity.',
    },
  },

  media: [],

  citations: [
    {
      id: 'hhs-amendment-guidance',
      type: 'website',
      title: 'Individuals Right to Access their Health Information',
      source: 'U.S. Department of Health and Human Services',
      url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html',
    },
  ],

  crossReferences: [
    { targetId: 'concept-accessing-your-records', targetType: 'concept', relationship: 'related', label: 'Accessing Your Records' },
    { targetId: 'concept-understanding-your-chart', targetType: 'concept', relationship: 'related', label: 'Understanding Your Chart' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['medical-records', 'patient-rights', 'health-information'],
    clinicalRelevance: 'high',
    keywords: ['medical records', 'amendments', 'corrections', 'HIPAA'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default correctingRecordErrors;
