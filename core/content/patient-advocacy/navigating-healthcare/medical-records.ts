/**
 * Managing Your Medical Records
 *
 * Understanding your rights to access medical records, how to request
 * them, and keeping organized health information for better care.
 */

import { EducationalContent } from '../../types';

export const MEDICAL_RECORDS: EducationalContent = {
  id: 'patient-advocacy-medical-records',
  type: 'topic',
  name: 'Managing Your Medical Records',
  alternateNames: ['Health Information Management', 'Personal Health Records', 'Medical Documentation'],

  levels: {
    1: {
      level: 1,
      summary: 'Your medical records are papers and files about your health that you have a right to see and keep, like a health diary that doctors write in.',
      explanation: `Think of medical records as your health story - everything that happens with your health gets written down.

**What Are Medical Records?**

Medical records include:
- Notes from doctor visits
- Results from tests (blood tests, X-rays)
- List of your medicines
- Allergies you have
- Surgeries or treatments you've had
- Vaccinations (shots) you've received

**Your Rights:**
- You have the RIGHT to see your medical records
- You have the RIGHT to get copies of your records
- You can ask to fix mistakes in your records

**Why Keep Your Own Copies?**
- You don't have to remember everything
- New doctors can see your health history
- You can share information with family if needed
- Helps prevent mistakes in your care

**Tips for Managing Records:**
- Keep all your health papers in one folder
- Bring important papers to doctor visits
- Write down what happens at each appointment
- Ask for copies of important test results`,
      keyTerms: [
        { term: 'medical records', definition: 'All the written information about your health and medical care' },
        { term: 'test results', definition: 'The answers from medical tests like blood tests or X-rays' },
        { term: 'allergies', definition: 'Things that make you sick or cause a reaction, like certain foods or medicines' },
        { term: 'vaccination', definition: 'A shot that protects you from getting certain diseases', pronunciation: 'vak-si-NAY-shun' },
      ],
      analogies: [
        'Your medical records are like a report card that shows your health history over time.',
        'Think of keeping your own health folder like keeping a scrapbook of your life - but for your health instead of memories.',
      ],
      examples: [
        'If you go to a new doctor, having your records means they know about past problems without you having to remember everything.',
        'Keeping a list of medicines helps doctors make sure new medicines won\'t cause problems with ones you already take.',
      ],
      patientCounselingPoints: [
        'Always keep a list of your medicines in your wallet',
        'After any test, ask "How will I get the results?"',
        'Keep emergency numbers with your medical information',
      ],
    },
    2: {
      level: 2,
      summary: 'You have the legal right to access your medical records, request copies, and correct errors. Keeping organized personal health records improves your care and safety.',
      explanation: `Your medical records contain all the information about your health and healthcare. Understanding how to access and manage these records is an important part of being an engaged patient.

**What's in Your Medical Records:**

*Clinical Information:*
- Doctor visit notes (progress notes)
- Hospital discharge summaries
- Operative/procedure reports
- Consultation reports from specialists

*Test Results:*
- Lab results (blood tests, urine tests)
- Imaging reports (X-rays, CT scans, MRIs)
- Pathology reports (biopsy results)
- Diagnostic test results (EKG, pulmonary function, etc.)

*Medications:*
- Current medication list
- Past medications
- Allergies and adverse reactions
- Immunization records

*Administrative Information:*
- Consent forms
- Insurance information
- Advance directives
- Authorization for release of information

**Your Legal Rights (HIPAA):**

Under federal law, you have the right to:
- **See your records**: Request access within 30 days (one extension allowed)
- **Get copies**: Reasonable cost-based fee allowed
- **Request corrections**: If you believe information is wrong
- **Get a list of disclosures**: Who your information was shared with
- **Request communication by alternative means**: Like email instead of mail
- **Limit certain disclosures**: For services paid fully out-of-pocket

**How to Request Your Records:**

1. **Identify where records are located**: Each doctor/hospital has separate records
2. **Submit a written request**: Most facilities have a form
3. **Show identification**: To protect your privacy
4. **Pay any fees**: Usually per page for copies
5. **Specify what you want**: Entire record or specific documents

**Creating Your Personal Health Record:**

*Options:*
- **Paper folder**: Simple, portable, no technology needed
- **Computer file**: Word document or spreadsheet
- **Phone apps**: Many health apps available
- **Online patient portals**: Offered by many healthcare systems

*What to Include:*
- Personal information (name, birth date, blood type)
- Emergency contacts
- Medication list (name, dose, how often taken, why taken)
- Allergies (medications, foods, latex, etc.)
- Major illnesses and surgeries with dates
- Family health history
- Immunization record
- Advance directives

**Red Flags to Watch For:**
- Errors in medication lists or dosages
- Allergies not recorded
- Wrong information about past surgeries
- Someone else's information mixed in

**For Family Caregivers:**
- You may need legal authority to access records (power of attorney, guardianship)
- Each facility may require separate documentation
- Consider using portable medical summaries for emergency visits`,
      keyTerms: [
        { term: 'HIPAA', definition: 'Federal law that protects your health information and gives you rights to access it', pronunciation: 'HIP-uh' },
        { term: 'patient portal', definition: 'Secure website where you can view your medical records and communicate with doctors' },
        { term: 'advance directive', definition: 'Legal document telling doctors what medical care you want if you can\'t speak for yourself' },
        { term: 'discharge summary', definition: 'Document summarizing what happened during a hospital stay' },
        { term: 'personal health record', definition: 'Health information that you keep and manage yourself', pronunciation: 'PHR' },
      ],
      analogies: [
        'Requesting medical records is like asking for a transcript from school - you have a right to see everything that\'s recorded about you.',
      ],
      examples: [
        'If you\'re seeing a new specialist, bringing your records can prevent having to repeat tests you\'ve already had.',
        'Some patient portals let you see test results as soon as they\'re available, sometimes before your doctor has reviewed them.',
      ],
      patientCounselingPoints: [
        'Request records after important tests or hospital stays while they\'re fresh',
        'Keep both paper and digital copies if possible (backup)',
        'Update your personal record after every doctor visit',
        'Share emergency information with family members',
      ],
    },
    3: {
      level: 3,
      summary: 'HIPAA guarantees patients the right to access, amend, and control protected health information. Effective management of personal health records enhances care coordination and reduces medical errors.',
      explanation: `**Legal Framework for Medical Records Access:**

*HIPAA Privacy Rule:*
- Gives individuals rights over their protected health information (PHI)
- Sets limits on who can see your health information
- Applies to most healthcare providers, health plans, and clearinghouses
- Limited right to access psychotherapy notes and information compiled for legal proceedings

*HITECH Act Enhancements:*
- Increased penalties for violations
- Breach notification requirements
- Greater rights for patients
- Expanded enforcement

**Types of Medical Records:**

*Documentation by Source:*
- **Physician documentation**: Progress notes, consult notes, admission notes
- **Nursing documentation**: Assessments, care plans, interventions
- **Ancillary services**: Lab reports, radiology reports, pathology reports
- **Operative reports**: Detailed description of surgical procedures
- **Discharge summaries**: Comprehensive summary of hospitalization

*Electronic Health Record (EHR) Components:*
- Clinical documentation (notes, diagnoses)
- Medication lists and prescribing
- Laboratory and imaging results
- Problem lists and health maintenance
- Clinical decision support tools

**Access Request Process:**

*Standard Procedure:*
1. Submit written request to Health Information Management (HIM) department
2. Provider must respond within 30 days (one 30-day extension permitted)
3. Records must be provided in requested format if reasonable
4. Fees may be charged for labor, supplies, postage, and preparation

*Fees Allowed:*
- Labor costs for copying: $0.01 - $1.00 per page (varies by state)
- Supplies: Paper, CD/DVD, USB drive
- Postage if mailing
- Electronic copy: No labor fee if patient uses portal
- No fee for first copy if transferring to new provider

*Denial Scenarios:*
- Psychotherapy notes (special protection)
- Information compiled for legal proceedings
- Certain research information (waiver of authorization)
- Information that could cause harm to patient or others

**Personal Health Record (PHR) Management:**

*Essential Elements:*
1. **Identification**: Name, date of birth, PHN (if applicable)
2. **Emergency information**: Emergency contacts, blood type, organ donor status
3. **Medications**: Prescriptions, OTC medications, supplements
4. **Allergies**: Medications, foods, environmental, latex
5. **Medical problems**: Diagnoses with dates of onset
6. **Surgeries/procedures**: Dates, locations, outcomes
7. **Immunizations**: Type, date
8. **Family history**: Hereditary conditions
9. **Advance care planning**: Living will, healthcare proxy

**Amending Medical Records:**

*Request Process:*
- Submit written request with reason for amendment
- Provider must respond within 60 days
- If denied, you may write a statement of disagreement
- Your statement must be included in future disclosures

**Special Considerations:**

*Mental Health Records:*
- Psychotherapy notes have additional protections
- State laws may provide additional privacy
- Substance use treatment has special confidentiality (42 CFR Part 2)

*Genetic Information:*
- GINA (Genetic Information Nondiscrimination Act) protections
- Extra protections for genetic test results

*Minors' Records:*
- Parents generally access minors' records
- Some states grant minors privacy for certain services
- Emancipated minors control their own records`,
      keyTerms: [
        { term: 'PHI', definition: 'Protected Health Information - individually identifiable health information', pronunciation: 'P-H-I' },
        { term: 'HITECH Act', definition: 'Health Information Technology for Economic and Clinical Health Act - expanded HIPAA protections' },
        { term: 'psychotherapy notes', definition: 'Personal notes recorded by mental health providers during counseling sessions' },
        { term: 'GINA', definition: 'Genetic Information Nondiscrimination Act - protects against genetic discrimination' },
        { term: '42 CFR Part 2', definition: 'Federal regulation protecting confidentiality of substance use disorder treatment records' },
      ],
      clinicalNotes: 'Up to 80% of medical records contain errors when patients are asked to review them. Most errors are in medication lists, allergies, or past medical history. Patients who actively review and correct their records experience fewer medical errors.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive health information management requires understanding legal rights, utilizing health information technology, maintaining accurate personal records, and actively participating in documentation accuracy to optimize care quality.',
      explanation: `**Advanced Medical Record Concepts:**

*Clinical Documentation:**
- **SOAP notes**: Subjective, Objective, Assessment, Plan format for clinical encounters
- **Problem-oriented medical record (POMR)**: Organized by problems rather than chronology
- **Narrative vs. structured documentation**: Free text vs. discrete data fields
- **Clinical documentation improvement (CDI)**: Processes to enhance documentation quality

*Electronic Health Record Architecture:*
- **Coded data**: ICD-10, CPT, LOINC, SNOMED CT
- **Interoperability standards**: HL7, FHIR, DICOM
- **Health Information Exchange (HIE)**: Regional and national networks
- **Patient-generated health data (PGHD)**: Wearables, home monitoring, patient-reported outcomes

**Comprehensive Record Review:**

*Common Documentation Errors:*
- Medication discrepancies (dose, frequency, indication)
- Unnoted allergies (especially non-drug allergies)
- Incomplete problem lists (resolved problems not deactivated)
- Duplicate records (multiple records for same patient)
- Template-generated nonsense (copy-paste errors)
- Attribution errors (information attributed to wrong provider)

*Medication Reconciliation:*
- **Best possible medication history (BPMH)**: Systematic process for creating accurate medication list
- **Reconciliation points**: Transitions of care, discharge, specialist visits
- **Discrepancy types**: Omission, commission, duplication, unclear dose
- **Electronic reconciliation tools**: EHR features comparing lists

**Health Information Exchange:**

*Types of Exchange:*
- **Directed exchange**: Point-to-point secure transmission
- **Query-based exchange**: Request for information from another provider
- **Consumer-mediated exchange**: Patient-controlled sharing

*Barriers to Exchange:*
- Technical: Incompatible systems, lack of standards adoption
- Financial: Cost of interfaces, lack of payment for information exchange
- Privacy: HIPAA concerns, state privacy law variations
- Competitive: Hospitals reluctant to share patients with competitors

**Advanced PHR Management:**

*Digital PHR Platforms:*
- **Tethered PHR**: Connected to specific healthcare organization EHR
- **Untethered PHR**: Standalone patient-controlled platform
- **Smartphone health apps**: Integration with EHRs (Apple Health, Google Fit)
- **Wearable integration**: Continuous data streams from devices

*Data Elements for Comprehensive PHR:*
- Structured data (problems, medications, allergies)
- Unstructured documents (consult notes, operative reports)
- Images (radiology, dermatology, endoscopy)
- Genomic data (when available)
- Patient-generated data (symptoms, home measurements)

**Special Populations and Records:**

*Complex Patients:*
- Fragmented care requires consolidation of multiple records
- Longitudinal records critical for care coordination
- Medication lists may have 10+ medications requiring careful reconciliation

*Pediatric Patients:*
- Birth history, developmental milestones
- Immunization record for school entry
- Growth charts
- Parental rights evolve with patient age

*Geriatric Patients:*
- Complete medication list including OTCs
- Advanced care planning documents
- Functional and cognitive assessments
- Family history increasingly relevant

**Legal and Ethical Considerations:**

*Medical Record Amendment vs. Correction:*
- **Amendment**: Addendum to original record (original remains visible)
- **Correction**: Changing incorrect information (limited circumstances)
- Providers may deny amendment requests if documentation is accurate and complete

*Record Retention:*
- Varies by state (typically 7-10 years for adults)
- Longer for minors (until age of majority + specified period)
- Federal requirements for Medicare/Medicaid
- Special rules for certain records (radiology, psychiatric)

*Third-party Access:*
- Insurance companies: With authorization
- Legal proceedings: Subpoena may compel disclosure
- Law enforcement: Limited circumstances
- Public health: Reportable conditions
- Research: De-identified data or with specific authorization`,
      keyTerms: [
        { term: 'SOAP notes', definition: 'Structured medical documentation format: Subjective, Objective, Assessment, Plan' },
        { term: 'LOINC', definition: 'Logical Observation Identifiers Names and Codes - standard for lab test identification' },
        { term: 'FHIR', definition: 'Fast Healthcare Interoperability Resources - modern standard for health data exchange' },
        { term: 'medication reconciliation', definition: 'Systematic comparison of medication lists across sources to ensure accuracy' },
        { term: 'patient-generated health data', definition: 'Health data created, recorded, or gathered by patients', pronunciation: 'PGHD' },
      ],
      clinicalNotes: 'Studies show that when patients actively review and correct their medical records, the accuracy of medication lists improves from approximately 50% to over 90%. Improved accuracy correlates with reduced adverse drug events and better care coordination.',
    },
    5: {
      level: 5,
      summary: 'Optimal health information management requires sophisticated integration of clinical documentation standards, interoperability frameworks, patient engagement technologies, and quality improvement processes to achieve truly patient-centered, data-driven care.',
      explanation: `**Frontiers of Medical Record Management:**

*Learning Health Systems:*
- Continuous documentation improvement through audit and feedback
- Real-time clinical decision support integrated into documentation workflow
- Patient-reported outcome measures (PROMs) integrated into EHR
- Genomic data integration for precision medicine

*Advanced Interoperability:**

*FHIR (Fast Healthcare Interoperability Resources):*
- Modern API-based standard for health information exchange
- Resources for clinical, administrative, and financial data
- SMART on FHIR: Apps that run on FHIR data
- Bulk Data Export: Patient-friendly data export capability

*Health Information Exchange Networks:*
- **National HIE**: eHealth Exchange, CommonWell Health Alliance
- **Regional HIEs**: State and local health information organizations
- **Enterprise HIEs**: Single health system across multiple facilities
- **Community HIEs**: Competing organizations in geographic area

**Artificial Intelligence in Documentation:**

*Ambient Documentation:*
- AI listens to clinical encounters and generates documentation
- Reduces clinician documentation burden (pajama time)
- Increases patient-clinician eye contact
- Risks: Hallucinations, bias, accuracy concerns

*NLP for Record Review:*
- Automated identification of documentation gaps
- Quality measure abstraction from clinical notes
- Sepsis and deterioration detection from documentation patterns
- Medication discrepancy detection

**Emerging Documentation Models:**

*Shared Documentation:*
- Patients contribute to their own records
- Patient visit notes (After Visit Summaries)
- OpenNotes: Patients access full clinician visit notes
- Shared decision-making documentation

*Team-Based Documentation:*
- Medical scribes (human and AI)
- Team documentation: Each member documents their contribution
- Documentation by exception: Only note deviations from normal
- Snapshot documentation: Population-level templates

**Privacy and Security Considerations:**

*Cybersecurity Threats:*
- Ransomware attacks on healthcare systems
- PHI theft and sale on dark web
- Business associate compliance
- Blockchain for audit trails?

*21st Century Cures Act:**
- Information blocking prohibition
- Patients can access all electronically available PHI
- API access requirement for patient data
- Exceptions only for privacy, security, harm

**Special Documentation Domains:**

*Social Determinants of Health (SDOH):*
- Z-codes for social needs (IADPA format)
- Housing instability, food insecurity, transportation
- Documentation requirements for value-based payment
- Community resource referral documentation

*Longitudinal Records:*
- Problem list remains active across all encounters
- Allergies and medications update in real-time
- Family history accessible across entire health system
- Life course health documentation

**Global Perspectives:**

*EHR Adoption Patterns:*
- US: Near universal hospital adoption, variable ambulatory
- Europe: National systems (NHS, Denmark, Estonia)
- Challenges: Fragmentation, usability, clinician burden

*International Standards:*
- ICD-11: WHO standard for diagnostic coding
- SNOMED CT: Comprehensive clinical terminology
- HL7/FHIR: Interoperability standards
- OpenEHR: Open-source EHR architecture

**Future Directions:**

*Patient as Data Controller:*
- Patient-controlled API access to their data
- Data donation to research registries
- Granular consent for data use
- Monetization of personal health data

*Computable Phenotypes:*
- Algorithms that identify patients with specific characteristics
- Used for clinical research and quality improvement
- Depends on structured, coded documentation
- Natural language processing extracting data from notes

*Documentation Quality Metrics:*
- Note bloat: Excessive copying/pasting
- Attribution accuracy: Who documented what
- Clinical concordance: Documentation matches actual care
- Patient-generated vs. clinician-generated data balance`,
      keyTerms: [
        { term: 'SMART on FHIR', definition: 'Substitutable Medical Applications and Reusable Technology on Fast Healthcare Interoperability Resources' },
        { term: 'Information blocking', definition: 'Practice of interfering with access, exchange, or use of electronic health information' },
        { term: 'IADPA', definition: 'International Agreement on the Development of Pharmaceutical Applications - format for SDOH' },
        { term: 'computable phenotypes', definition: 'Algorithmically identifiable patient characteristics from clinical data' },
        { term: 'OpenNotes', definition: 'Movement to give patients access to clinician visit notes' },
      ],
      clinicalNotes: 'The 21st Century Cures Act (2021) created a new paradigm: patients must have access to all electronically available health information without delay. "Information blocking" is now prohibited with limited exceptions. This represents the most significant expansion of patient access to medical records in history.',
    },
  },

  media: [
    {
      id: 'medical-records-checklist-1',
      type: 'diagram',
      filename: 'personal-health-record-checklist.svg',
      title: 'Personal Health Record Checklist',
      description: 'Essential elements for maintaining comprehensive personal health records',
    },
  ],

  citations: [
    {
      id: 'hhs-hipaa',
      type: 'website',
      title: 'HIPAA Privacy Rule and Your Right to Access Your Medical Records',
      source: 'U.S. Department of Health & Human Services',
      url: 'https://www.hhs.gov/hipaa/for-individuals/medical-records/index.html',
      license: 'Public Domain',
    },
    {
      id: 'cures-act',
      type: 'website',
      title: '21st Century Cures Act: Interoperability, Information Blocking, and the ONC Health IT Certification Program',
      source: 'Office of the National Coordinator for Health IT',
      url: 'https://www.healthit.gov/topic/21st-century-cures-act',
      license: 'Public Domain',
    },
    {
      id: 'opennotes',
      type: 'website',
      title: 'OpenNotes',
      source: 'OpenNotes',
      url: 'https://www.opennotes.org/',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'patient-advocacy-healthcare-coordination', targetType: 'topic', relationship: 'related', label: 'Healthcare Coordination' },
    { targetId: 'patient-advocacy-privacy-rights', targetType: 'topic', relationship: 'related', label: 'Privacy Rights' },
  ],

  tags: {
    topics: ['patient-advocacy', 'health-information', 'patient-rights'],
    keywords: ['medical records', 'HIPAA', 'personal health record', 'health information'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
