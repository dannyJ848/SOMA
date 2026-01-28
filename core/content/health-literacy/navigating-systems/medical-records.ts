/**
 * Medical Records - Understanding and Accessing Your Health Records
 */

import { EducationalContent } from '../../types';

export const medicalRecords: EducationalContent = {
  id: 'health-literacy-medical-records',
  type: 'concept',
  name: 'Understanding Medical Records',
  alternateNames: ['Health Records', 'Patient Records Access'],

  levels: {
    1: {
      level: 1,
      summary: 'Your medical records contain important information about your health, and you have the right to see them.',
      explanation: `**What Are Medical Records?**

Medical records are files that contain information about your health, including:
- Your health history
- Test results
- Medications you take
- Notes from doctor visits
- Immunizations (shots)

**Your Rights:**

- You have the RIGHT to see your medical records
- You can get copies of your records
- You can ask to fix mistakes in your records

**How to Get Your Records:**

1. Ask your doctor or clinic for a copy
2. Use the patient portal (website) if available
3. Fill out a request form if needed
4. There may be a small fee for paper copies`,
      keyTerms: [
        { term: 'medical records', definition: 'Files containing all your health information' },
        { term: 'patient portal', definition: 'A secure website where you can see your health information' },
        { term: 'health history', definition: 'Information about your past illnesses and treatments' },
      ],
      analogies: ['Your medical record is like a diary of your health - it keeps track of everything'],
      examples: ['Maria logs into her patient portal to see her blood test results'],
      patientCounselingPoints: ['You have the right to see your records', 'Ask about patient portal access'],
    },
    2: {
      level: 2,
      summary: 'Understanding your medical records empowers you to participate actively in your healthcare.',
      explanation: `## Components of Medical Records

**Clinical Notes:** Provider documentation of visits
**Problem List:** Ongoing health conditions
**Medication List:** Current and past medications
**Lab Results:** Blood tests and other laboratory values
**Imaging Reports:** X-rays, CT scans, MRI results
**Immunization Records:** Vaccines received

## Accessing Your Records

**Patient Portals:** Online access through health system website
**Medical Records Department:** Request paper or electronic copies
**Health Information Exchange:** Records shared between providers
**Personal Health Records:** Apps to consolidate your information

## Understanding Your Records

- Vital signs: Blood pressure, heart rate, temperature
- Lab results: Values with reference ranges
- Diagnoses: ICD codes and descriptions
- Medications: Drug names, doses, instructions`,
      keyTerms: [
        { term: 'problem list', definition: 'List of ongoing health conditions in your record' },
        { term: 'health information exchange', definition: 'System for sharing records between healthcare organizations' },
        { term: 'ICD code', definition: 'Standardized code for diagnoses used in medical records' },
      ],
      patientCounselingPoints: ['Review your records for accuracy', 'Keep your own personal health record'],
    },
    3: {
      level: 3,
      summary: 'Patient access to medical records is a right protected by law and an essential component of patient engagement.',
      explanation: `## Legal Framework

**HIPAA (Health Insurance Portability and Accountability Act):**
- Right to access your records
- Right to request corrections
- Right to accounting of disclosures
- Organizations must respond within 30 days

**21st Century Cures Act:**
- Information blocking prohibited
- Electronic access required
- Patient access to clinical notes (OpenNotes)

## Record Content

**Clinical Documentation:**
- History and physical exams
- Progress notes
- Consultation reports
- Operative reports
- Discharge summaries

**Diagnostic Information:**
- Laboratory results with reference ranges
- Pathology reports
- Radiology reports
- Procedure results

## Patient Engagement

- Active record review improves safety
- Identify errors and omissions
- Prepare for appointments
- Share information between providers`,
      keyTerms: [
        { term: 'HIPAA', definition: 'Federal law protecting health information privacy and granting access rights' },
        { term: 'OpenNotes', definition: 'Movement for transparent sharing of clinical notes with patients' },
        { term: 'information blocking', definition: 'Practices that prevent appropriate access to health information' },
      ],
      clinicalNotes: 'Encourage portal enrollment. Explain how to request records and corrections.',
    },
    4: {
      level: 4,
      summary: 'Health information management is evolving toward patient-centered interoperability and transparency.',
      explanation: `## Interoperability Landscape

**FHIR (Fast Healthcare Interoperability Resources):**
- Modern data standard enabling app access
- Patient-mediated exchange
- API-based health information sharing

**USCDI (US Core Data for Interoperability):**
- Standardized data elements for exchange
- Expanding over time
- Foundation for information sharing

## OpenNotes Evidence

- 80%+ of patients who read notes report benefits
- Improved medication adherence
- Better appointment preparation
- Enhanced safety through error detection
- Minimal increase in patient anxiety

## Privacy and Security

**Patient Rights:**
- Access, amendment, accounting of disclosures
- Restriction requests
- Complaint processes

**Security Considerations:**
- Authentication for portal access
- Proxy access for caregivers
- Audit logging of record access`,
      keyTerms: [
        { term: 'FHIR', definition: 'Modern standard for exchanging healthcare information electronically' },
        { term: 'USCDI', definition: 'Standardized set of health data elements for nationwide exchange' },
        { term: 'proxy access', definition: 'Authorized access to patient portal by caregiver or family member' },
      ],
      clinicalNotes: 'Support portal adoption. Ensure notes are written with patient access in mind.',
    },
    5: {
      level: 5,
      summary: 'Health information policy is advancing toward patient-centered data liquidity and meaningful use.',
      explanation: `## Policy Evolution

**21st Century Cures Act Implementation:**
- Information blocking penalties
- Patient access to all EHI
- API requirements for certified EHRs
- Price transparency integration

**TEFCA (Trusted Exchange Framework):**
- Nationwide network for health information exchange
- Common agreement for data sharing
- Query-based and patient-mediated exchange

## Research and Quality

**Real-World Data:**
- EHR data for research and quality improvement
- Patient-contributed data integration
- AI/ML applications requiring data access

**Quality Measurement:**
- Electronic clinical quality measures (eCQMs)
- Automated data extraction
- Reduced documentation burden

## Equity Considerations

- Digital divide affects portal access
- Language barriers in documentation
- Health literacy and record comprehension
- Proxy access for vulnerable populations

## Future Directions

- Unified patient records across systems
- Patient data ownership models
- AI-assisted record summarization
- Integration with consumer health devices`,
      keyTerms: [
        { term: 'TEFCA', definition: 'Federal framework for nationwide health information exchange' },
        { term: 'electronic health information', definition: 'All health information in electronic form' },
        { term: 'eCQMs', definition: 'Electronic clinical quality measures extracted from EHR data' },
      ],
      clinicalNotes: 'Participate in interoperability initiatives. Advocate for patient data access and equity.',
    },
  },

  media: [],
  citations: [{ id: 'hhs-hipaa', type: 'website', title: 'Your Health Information Rights', source: 'HHS.gov' }],
  crossReferences: [{ targetId: 'health-literacy-insurance-basics', targetType: 'concept', relationship: 'related', label: 'Insurance Basics' }],
  tags: { systems: ['navigating-systems'], topics: ['medical records', 'health information'], keywords: ['records', 'patient portal', 'HIPAA'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default medicalRecords;
