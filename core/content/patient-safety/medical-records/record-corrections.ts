import { EducationalContent } from '../../types';

export const recordCorrectionsContent: EducationalContent = {
  id: 'record-corrections',
  type: 'concept',
      name: 'Correcting Medical Records',
  nameEs: 'Corrección de Registros Médicos',
  alternateNames: ['Medical Record Amendments', 'Record Errors', 'Health Information Correction'],
  levels: {
    1: {
      level: 1,
      summary: 'If you find a mistake in your medical records, you have the right to ask for a correction. This keeps your health information accurate.',
      explanation: `## Fixing Mistakes in Your Medical Records

If you find a mistake in your medical records, you have the right to ask for a correction. This keeps your health information accurate.

### Common Mistakes

- Wrong name or birthdate
- Incorrect medications listed
- Wrong diagnosis
- Missing information
- Information about another patient

### How to Request a Correction

1. Find the error in your records
2. Contact your doctor\'s office
3. Ask for a correction form
4. Explain what is wrong and why
5. Provide proof if you have it

### What Happens Next

- They must respond within 60 days
- They may agree and fix it
- They may refuse if they disagree
- If refused, you can add your own statement

### If They Refuse

You can:
- Add a statement explaining your view
- File a complaint with the government
- Tell other providers about the dispute

### Why Accuracy Matters

- Correct treatment decisions
- Insurance coverage
- Employment (in some cases)
- Future medical care

### Keep Copies

Always keep copies of:
- Your correction request
- Their response
- Any statements you add`,
      keyTerms: [
        { term: 'Amendment', definition: 'Correction or change to a record' },
        { term: 'Statement of disagreement', definition: 'Your written explanation if correction denied' },
        { term: 'Attestation', definition: 'Official statement that something is true' },
        { term: 'HIPAA', definition: 'Law that includes right to request corrections' }
      ],
      analogies: [
        'Correcting your medical record is like fixing an error on your credit report'
      ],
      examples: [
        'A patient notices the wrong birthdate and requests it be corrected',
        'Someone finds they are listed as having an allergy they do not have'
      ]
    },
    2: {
      level: 2,
      summary: 'HIPAA grants patients the right to request amendments to their medical records. Providers must respond within 60 days and, if denying the request, must provide a written explanation and allow a statement of disagreement.',
      explanation: `## Requesting Record Amendments

HIPAA grants patients the right to request amendments to their medical records. Providers must respond within 60 days and, if denying the request, must provide a written explanation and allow a statement of disagreement.

### The Amendment Process

**Making the Request:**
- Must be in writing
- Specify what is incorrect
- Explain why it should be changed
- Submit to provider\'s privacy officer

**Provider Response Options:**
1. Accept and make correction
2. Accept but append rather than delete
3. Deny the request

**Timeline:**
- 60 days to respond
- One 30-day extension allowed with notice
- Must explain if extension needed

### Grounds for Denial

**Permitted Reasons:**
- Information was not created by this provider
- Information is accurate and complete
- Information is not part of designated record set
- Provider believes request is frivolous

**Not Permitted:**
- Disagreement with clinical judgment
- Retaliation for complaint
- Convenience

### Statement of Disagreement

**If Denied, You May:**
- Submit statement of disagreement
- Provider must include it in record
- Provider may submit rebuttal
- Future disclosures include both

**Limited Rebuttal Length:**
- Provider\'s rebuttal must be reasonable length
- Cannot overwhelm patient\'s statement
- Both kept permanently

### Linkage to Other Records

**Notification Requirements:**
- Provider must notify relevant parties of correction
- Must request they update their copies
- Applies to organizations that received the information
- Does not apply if impractical

**Historical Records:**
- Original may be retained with addendum
- Some systems show correction history
- Legal record must show what was originally there

### Practical Tips

**Strong Requests:**
- Be specific about error
- Provide documentation
- Professional tone
- Follow up if no response

**Documentation to Provide:**
- Other medical records
- Pharmacy records
- Insurance documents
- Legal documents`,
      keyTerms: [
        { term: 'Amendment', definition: 'Request to change health information' },
        { term: 'Privacy officer', definition: 'Person responsible for HIPAA compliance' },
        { term: 'Designated record set', definition: 'Group of records subject to amendment' },
        { term: 'Addendum', definition: 'Addition to original record' }
      ],
      analogies: [
        'A statement of disagreement is like writing a letter to the editor when you disagree with an article'
      ],
      examples: [
        'A patient proves they never had a surgery listed in their record',
        'Someone requests correction of incorrect family history that could affect genetic counseling'
      ]
    },
    3: {
      level: 3,
      summary: 'Medical record correction involves complex determinations about accuracy versus clinical judgment. While factual errors can be corrected, disagreements about interpretation, diagnosis, or treatment decisions generally cannot be amended through the HIPAA process.',
      explanation: `## What Can and Cannot Be Changed

Medical record correction involves complex determinations about accuracy versus clinical judgment. While factual errors can be corrected, disagreements about interpretation, diagnosis, or treatment decisions generally cannot be amended through the HIPAA process.

### Factual Errors (Can Be Corrected)

**Administrative Information:**
- Name, date of birth, contact information
- Dates of service
- Insurance information
- Emergency contact

**Demographics:**
- Marital status
- Employment
- Language preferences

**Objective Facts:**
- Medication names and doses
- Test dates
- Procedures performed
- Vital signs recorded

### Clinical Judgment (Cannot Be Corrected)

**Diagnostic Opinions:**
- Diagnoses (even if disputed)
- Differential diagnoses
- Clinical impressions

**Treatment Decisions:**
- Why a treatment was chosen
- Clinical rationale
- Professional judgment

**Subjective Assessments:**
- Patient behavior observations
- Appearance descriptions
- Adherence judgments

### Special Categories

**Mental Health:**
- Psychotherapy notes have special protections
- May not be accessible for amendment
- Provider determines if part of record set

**Alcohol and Drug Treatment:**
- 42 CFR Part 2 protections
- Separate consent requirements
- May limit amendment process

**Research Records:**
- May be temporarily excluded
- Must be restored to record set
- Different timeline may apply

### Correction Methods

**Replacement:**
- Delete incorrect information
- Insert correct information
- Original may be archived

**Addendum/Annotation:**
- Keep original
- Add correction note
- Shows what was originally documented

**Strike-Through:**
- Line through incorrect text
- Date and initial
- Add corrected information

### Legal and Clinical Implications

**Legal Records:**
- May be evidence in litigation
- Original documentation important
- Corrections must be transparent

**Clinical Care:**
- Accuracy affects future treatment
- Disagreements may indicate need for second opinion
- Trust in patient-provider relationship

**Fraud Considerations:**
- Changing records to conceal error may be fraud
- Legitimate corrections are protected
- Documentation of reason for change`,
      keyTerms: [
        { term: 'Clinical judgment', definition: 'Professional medical decision-making' },
        { term: 'Factual error', definition: 'Incorrect objective information' },
        { term: 'Annotation', definition: 'Note added to explain or correct' },
        { term: 'Transparency', definition: 'Clear documentation of changes' }
      ]
    },
    4: {
      level: 4,
      summary: 'Healthcare organizations must have formal amendment procedures, including privacy officer oversight, tracking systems, and staff training. Integration with HIEs and payer records adds complexity to ensuring corrections propagate throughout the healthcare ecosystem.',
      explanation: `## Organizational Amendment Processes

Healthcare organizations must have formal amendment procedures, including privacy officer oversight, tracking systems, and staff training. Integration with HIEs and payer records adds complexity to ensuring corrections propagate throughout the healthcare ecosystem.

### Required Procedures

**Privacy Officer Role:**
- Receive amendment requests
- Evaluate validity
- Coordinate response
- Track outcomes

**Documentation Requirements:**
- Log of all requests
- Response tracking
- Outcome documentation
- Denial justification

**Staff Training:**
- Front desk procedures
- HIM department processes
- Clinical staff awareness
- Escalation protocols

### Amendment Workflow

**Receipt:**
- Log request immediately
- Send acknowledgment
- Begin 60-day clock
- Assign to appropriate staff

**Evaluation:**
- Review original documentation
- Consult with originating provider
- Determine if factual error
- Decide response

**Implementation:**
- Make correction in all systems
- Notify affected departments
- Update all copies
- Document action taken

**Notification:**
- Inform patient of outcome
- If accepted, send confirmation
- If denied, explain process for disagreement
- Notify known recipients of information

### HIE and Exchange Implications

**Health Information Exchanges:**
- Must have amendment policies
- Propagation of corrections
- Audit of previous recipients
- Technical challenges

**Payer Records:**
- Insurance company records
- Workers compensation
- Disability determinations
- Notification requirements

**Pharmacy Records:**
- Medication history
- Allergy documentation
- Dispensing records
- Coordination needed

### Technology Considerations

**EHR Capabilities:**
- Amendment functionality
- Audit trails
- Version control
- Alert systems

**Interoperability:**
- FHIR amendment resources
- Propagation standards
- Record locator services
- Attribution of corrections

**Challenges:**
- Legacy systems
- Multiple EHRs
- Data warehouses
- Archived records`,
      keyTerms: [
        { term: 'HIE', definition: 'Health information exchange' },
        { term: 'HIM', definition: 'Health information management' },
        { term: 'Version control', definition: 'Tracking different versions of records' },
        { term: 'Audit trail', definition: 'Record of who accessed and changed data' }
      ],
      clinicalNotes: 'Organizations must track amendment requests through to completion. Corrections in EHR must propagate to data warehouses and analytics. Provider-initiated amendments should follow same documentation standards as patient requests. Amendment workflow often reveals data quality issues worth systematic improvement.'
    },
    5: {
      level: 5,
      summary: 'Medical record accuracy intersects with patient safety, legal liability, and data integrity for research and AI applications. Blockchain and distributed ledger technologies offer potential solutions for immutable audit trails while patient matching improvements reduce identity-related errors.',
      explanation: `## Advanced Topics in Record Accuracy

Medical record accuracy intersects with patient safety, legal liability, and data integrity for research and AI applications. Blockchain and distributed ledger technologies offer potential solutions for immutable audit trails while patient matching improvements reduce identity-related errors.

### Data Integrity and Quality

**Data Governance:**
- Data quality standards
- Validation rules
- Master patient index
- Duplicate record management

**Patient Matching:**
- Probabilistic matching
- Biometric identifiers
- Universal patient identifiers (political barriers)
- Record linkage accuracy

**Duplicate Records:**
- 10-20% duplication rate in large systems
- Safety risks
- Merge processes
- Ongoing monitoring

### Legal and Risk Management

**Medical-Legal Implications:**
- Spoliation concerns
- Metadata preservation
- Legal hold procedures
- E-discovery considerations

**Correction vs Alteration:**
- Legitimate corrections permitted
- Fraudulent alterations prohibited
- Documentation distinguishes
- Criminal penalties for fraud

**Risk Management Review:**
- Serious errors flagged
- Quality improvement opportunities
- Provider education
- System improvements

### Research and Secondary Use

**Data Warehouses:**
- Amendment propagation
- Historical preservation
- Versioning strategies
- Research impact

**AI and Machine Learning:**
- Training data quality
- Bias from errors
- Correction of training sets
- Model retraining needs

**Registries:**
- Clinical registries
- Quality reporting
- Public health surveillance
- Amendment requirements

### Emerging Technologies

**Blockchain:**
- Immutable audit trail
- Distributed consensus
- Smart contracts for access
- Identity management

**Distributed Ledgers:**
- Patient-controlled amendments
- Consent management
- Cross-organizational synchronization
- Technical standards needed

**Federated Learning:**
- AI training without data sharing
- Local correction impact
- Global model updates
- Privacy preservation

### Policy and Standards

**ONC Rules:**
- Information blocking
- Amendment provisions
- Patient access requirements
- Certification criteria

**Industry Standards:**
- HL7 FHIR amendments
- IHE profiles
- NIST guidelines
- Implementation guides

**International:**
- GDPR right to rectification
- Global data quality initiatives
- Cross-border challenges
- Harmonization efforts

### Best Practices

**Prevention:**
- Input validation
- Real-time verification
- Patient portals for review
- Duplicate prevention

**Detection:**
- Data quality monitoring
- Patient feedback
- Analytics for anomalies
- Regular audits

**Correction:**
- Timely response
- Transparent process
- Propagation tracking
- Patient communication`,
      keyTerms: [
        { term: 'Master patient index', definition: 'Database linking patient records across system' },
        { term: 'Spoliation', definition: 'Destruction of evidence' },
        { term: 'Federated learning', definition: 'Machine learning without centralizing data' },
        { term: 'Probabilistic matching', definition: 'Matching records using likelihood algorithms' }
      ],
      clinicalNotes: 'Patient matching errors cause significant record errors - biometrics may help. Blockchain for amendments remains experimental - scalability concerns persist. AI training data quality critical - errors propagate to models. Data warehouses must track corrections to maintain analytics validity. Spoliation concerns require careful policies on record retention and correction documentation.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'medical-records'],
    keywords: ['medical records', 'corrections', 'amendments', 'HIPAA', 'record accuracy']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
