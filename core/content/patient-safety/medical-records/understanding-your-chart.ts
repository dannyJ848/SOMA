/**
 * Understanding Your Medical Chart
 *
 * Learning to read and interpret your medical records.
 */

import { EducationalContent } from '../../types';

export const understandingYourChart: EducationalContent = {
  id: 'concept-understanding-your-chart',
  type: 'concept',
  name: 'Understanding Your Medical Chart',
  alternateNames: ['Reading Your Medical Records', 'Medical Chart Interpretation', 'Health Record Literacy'],

  levels: {
    1: {
      level: 1,
      summary: 'Your medical chart has important information about your health. Learning to read it helps you understand your care.',
      explanation: `**What Is a Medical Chart?**
A medical chart is like a special notebook that doctors and nurses use to keep track of your health. It has information about:
- Your health problems
- Medicines you take
- Tests you have had
- What happened at doctor visits

**Parts of Your Chart:**

*Personal Information:*
- Your name and birthday
- Your address and phone number
- Emergency contact
- Allergies

*Visit Notes:*
- Why you came to the doctor
- What the doctor found
- What the doctor thinks is wrong
- The plan to help you

*Test Results:*
- Blood tests
- X-rays
- Other tests

*Medicines:*
- What medicines you take
- How much to take
- How often to take them

**Words You Might See:**

| Word | What It Means |
|------|---------------|
| Diagnosis | What the doctor thinks is wrong |
| Treatment | How they will help you |
| Prescription | Medicine the doctor ordered |
| Vital signs | Things like temperature and blood pressure |

**Why Read Your Chart?**
- To remember what happened at visits
- To make sure everything is correct
- To share with other doctors
- To understand your health better`,
      keyTerms: [
        { term: 'medical chart', definition: 'The written record of your health information' },
        { term: 'diagnosis', definition: 'What the doctor thinks is causing your health problem' },
        { term: 'vital signs', definition: 'Measurements like temperature, heart rate, and blood pressure' },
      ],
      analogies: [
        'Your medical chart is like a diary about your health that helps doctors remember everything about you.',
        'Reading your chart is like reading the instructions for taking care of yourself.',
      ],
      examples: [
        'A patient reads their chart and sees their blood pressure was 120/80, which is normal.',
        'Someone checks their chart to remember what medicine they were prescribed.',
      ],
    },
    2: {
      level: 2,
      summary: 'Understanding your medical chart enables you to be an informed participant in your care. Learning common sections, terminology, and how to interpret findings empowers you.',
      explanation: `**Structure of Medical Records:**

*Standard Sections:*
| Section | Contents |
|---------|----------|
| Demographics | Personal information, contacts |
| Problem List | Active and past diagnoses |
| Medications | Current prescriptions |
| Allergies | Drug and other allergies |
| History | Past medical, surgical, family, social |
| Visit Notes | Documentation of encounters |
| Results | Labs, imaging, procedures |
| Immunizations | Vaccine history |

**Understanding Visit Notes:**

*SOAP Format:*
- **S**ubjective: What you told the doctor
- **O**bjective: What the doctor found on exam
- **A**ssessment: What the doctor thinks is going on
- **P**lan: What will be done next

*Example:*
> S: Patient reports headache for 3 days, worse in morning
> O: BP 130/85, no neurological deficits
> A: Tension headache, likely stress-related
> P: Ibuprofen as needed, stress management, follow up in 2 weeks if not improved

**Reading Lab Results:**

*Key Elements:*
- Test name
- Your result
- Reference range (normal values)
- Flag (H for high, L for low)

*Common Tests:*
| Test | What It Measures | Normal Range (varies) |
|------|------------------|----------------------|
| WBC | White blood cells (infection fighters) | 4,500-11,000 |
| Hemoglobin | Oxygen-carrying protein | 12-17 g/dL |
| Glucose | Blood sugar | 70-100 mg/dL fasting |
| Creatinine | Kidney function | 0.7-1.3 mg/dL |

**Medical Abbreviations:**

| Abbreviation | Meaning |
|--------------|---------|
| Hx | History |
| Dx | Diagnosis |
| Tx | Treatment |
| Rx | Prescription |
| PRN | As needed |
| BID | Twice daily |
| QD | Once daily |
| PO | By mouth |

**Understanding Imaging Reports:**

*Structure:*
- Technique (how study was done)
- Findings (what was seen)
- Impression (conclusion)

**Questions to Ask:**
- "Can you explain this finding to me?"
- "Is this result normal for me?"
- "What does this abbreviation mean?"
- "Should I be concerned about this?"`,
      keyTerms: [
        { term: 'SOAP note', definition: 'Standard format for medical documentation: Subjective, Objective, Assessment, Plan' },
        { term: 'reference range', definition: 'Normal values for a lab test' },
        { term: 'problem list', definition: 'List of your active and past medical conditions' },
        { term: 'impression', definition: 'The doctors conclusion or interpretation' },
      ],
      analogies: [
        'Reference ranges are like speed limits - they show you what is normal, but your doctor considers the whole picture.',
      ],
    },
    3: {
      level: 3,
      summary: 'Medical record literacy involves understanding documentation standards, clinical terminology, and the ability to interpret findings within appropriate clinical context.',
      explanation: `## Medical Record Interpretation

**Documentation Standards:**

*Note Types:*
| Type | Purpose | Content |
|------|---------|---------|
| H&P | History and Physical | Comprehensive evaluation |
| Progress Note | Daily updates | Interval changes, plan |
| Discharge Summary | Hospital summary | Course, instructions |
| Procedure Note | Document intervention | Technique, findings |
| Consultation | Specialist evaluation | Expert opinion |

**Clinical Terminology:**

*Prefixes and Suffixes:*
| Affix | Meaning | Example |
|-------|---------|---------|
| -itis | Inflammation | Appendicitis |
| -ectomy | Surgical removal | Appendectomy |
| -osis | Condition | Stenosis |
| -pathy | Disease | Neuropathy |
| hyper- | Too much | Hypertension |
| hypo- | Too little | Hypoglycemia |

*Anatomical Terms:*
| Term | Meaning |
|------|---------|
| Anterior | Front |
| Posterior | Back |
| Superior | Above |
| Inferior | Below |
| Lateral | Side |
| Medial | Middle |

**Interpreting Lab Results:**

*Beyond Reference Ranges:*
- Trends over time
- Individual baseline
- Clinical context
- Inter-test relationships
- Timing factors

*Common Panels:*
| Panel | Includes | Assesses |
|-------|----------|----------|
| BMP | Na, K, Cl, CO2, BUN, Cr, Glucose | Electrolytes, kidney |
| CMP | BMP + liver tests, protein | Metabolic function |
| CBC | WBC, RBC, Hgb, Hct, Platelets | Blood cells |
| Lipid | Total, LDL, HDL, Triglycerides | Cardiovascular risk |

**Understanding Imaging:**

*Report Structure:*
1. Clinical indication
2. Technique/protocol
3. Comparison studies
4. Findings (organized by structure)
5. Impression/conclusion

*Common Terminology:*
| Term | Meaning |
|------|---------|
| Unremarkable | Normal |
| Within normal limits | Normal |
| No acute findings | Nothing urgent |
| Cannot exclude | Might be present |
| Clinical correlation | Context needed |

**Diagnosis Coding:**

*ICD-10 Codes:*
- Standard diagnosis classification
- Used for billing and statistics
- Each diagnosis has unique code
- Understanding helps track conditions

**Medication Documentation:**

*Elements:*
- Drug name (generic and brand)
- Dose and frequency
- Route of administration
- Indication
- Prescriber
- Start date`,
      keyTerms: [
        { term: 'H&P', definition: 'History and Physical - comprehensive evaluation documentation' },
        { term: 'BMP', definition: 'Basic Metabolic Panel - common blood chemistry tests' },
        { term: 'ICD-10', definition: 'International Classification of Diseases - standard diagnosis coding' },
        { term: 'clinical correlation', definition: 'Recommendation to interpret findings in context of patient symptoms' },
      ],
      clinicalNotes: 'Patients who understand their records can better participate in care decisions. However, medical interpretation requires context that patients may not have - encourage questions.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive medical record literacy requires understanding documentation requirements, clinical reasoning patterns, and the interplay between various record components.',
      explanation: `## Advanced Medical Record Interpretation

**Documentation Framework:**

*Legal and Regulatory Context:*
- Medical-legal documentation
- Billing compliance
- Quality measure capture
- Accreditation requirements
- Meaningful use attestation

*Documentation Quality Elements:*
| Element | Purpose |
|---------|---------|
| Accuracy | Factual correctness |
| Completeness | All relevant information |
| Timeliness | Documented promptly |
| Legibility | Readable and clear |
| Consistency | No contradictions |

**Clinical Reasoning in Documentation:**

*Differential Diagnosis:*
- List of possible diagnoses
- Ordered by likelihood
- Evidence for/against each
- Plan to distinguish

*Assessment Complexity:*
| Complexity Level | Features |
|------------------|----------|
| Low | Single, self-limited problem |
| Moderate | Multiple chronic conditions |
| High | Acute on chronic, diagnostic uncertainty |

**Understanding Clinical Decision-Making:**

*Evidence Documentation:*
- Clinical guidelines referenced
- Shared decision-making noted
- Risk-benefit discussions
- Patient preferences documented

*Care Coordination:*
- Handoff documentation
- Transition notes
- Care team communication
- Referral information

**Advanced Result Interpretation:**

*Laboratory:*
- Delta checks (change from prior)
- Critical values
- Interfering factors
- Specimen issues

*Pathology:*
- Gross description
- Microscopic findings
- Immunohistochemistry
- Molecular testing
- Final diagnosis

*Radiology:*
- Modality-specific findings
- BIRADS, TIRADS (standardized reporting)
- Incidental findings management
- Comparison to prior studies

**Specialty Documentation:**

*Operative Reports:*
- Preoperative diagnosis
- Postoperative diagnosis
- Procedure details
- Findings
- Complications
- Specimens

*Procedure Notes:*
- Indication
- Consent
- Technique
- Findings
- Complications

**Health Information Technology:**

*EHR Features:*
- Problem-oriented record
- Clinical decision support
- Order sets
- Templates
- Copy/paste concerns

*Data Quality Issues:*
- Template-driven documentation
- Cut-and-paste errors
- Auto-populated data
- Version control`,
      keyTerms: [
        { term: 'differential diagnosis', definition: 'List of possible diagnoses being considered' },
        { term: 'delta check', definition: 'Comparison of current result to prior value' },
        { term: 'critical value', definition: 'Lab result requiring immediate notification' },
        { term: 'BIRADS', definition: 'Breast Imaging Reporting and Data System - standardized mammogram reporting' },
      ],
      clinicalNotes: 'EHR documentation presents both opportunities and challenges for patient understanding. Template-driven notes may be comprehensive but lack narrative clarity. Patient education on navigating EHR-generated documents is valuable.',
    },
    5: {
      level: 5,
      summary: 'Expert medical record literacy encompasses understanding documentation as a communication tool, quality artifact, and legal document within evolving healthcare systems.',
      explanation: `## Medical Documentation Science

**Documentation as Communication:**

\`\`\`
Clinical Encounter
       ↓
Documentation → Multiple Audiences
                     ↓
Patient ←→ Care Team ←→ Payers ←→ Legal ←→ Quality
                     ↓
               Shared Understanding
\`\`\`

**Evolution of Medical Records:**

*Historical:*
- Physician-centric narrative
- Paper-based
- Limited access
- Illegibility

*Current:*
- Team-based documentation
- Electronic
- Patient accessible
- Standardized elements

*Future:*
- AI-augmented
- Real-time capture
- Patient co-authored
- Ambient documentation

**Documentation Quality Science:**

*Measures:*
| Dimension | Assessment |
|-----------|------------|
| Completeness | All required elements |
| Accuracy | Factual correctness |
| Consistency | Internal coherence |
| Timeliness | Prompt documentation |
| Readability | Comprehensible |

*Improvement Strategies:*
- Standardized templates
- Clinical documentation improvement (CDI)
- Provider education
- Audit and feedback
- Technology optimization

**Patient-Centered Documentation:**

*OpenNotes Movement:*
- Transparency philosophy
- Research evidence
- Implementation experience
- Patient benefits
- Provider adaptation

*Patient Contributions:*
- Pre-visit questionnaires
- Patient-reported outcomes
- Symptom tracking
- Goal documentation

**Health Equity in Documentation:**

*Bias Recognition:*
- Language choices
- Stigmatizing terminology
- Implicit bias in notes
- Historical documentation practices

*Improvement:*
- Terminology guidelines
- Bias awareness training
- Patient review for accuracy
- Standardized language

**Legal and Regulatory Framework:**

*Documentation Purposes:*
- Clinical communication
- Legal record
- Billing justification
- Quality measurement
- Research source

*Risks:*
- Malpractice discovery
- Billing fraud liability
- Privacy breaches
- Documentation burden

**Interoperability and Standards:**

*Documentation Standards:*
- CDA (Clinical Document Architecture)
- FHIR DocumentReference
- HL7 message formats
- IHE document sharing

*Challenges:*
- Semantic interoperability
- Document vs. discrete data
- Unstructured text
- Context preservation

**Future Directions:**

*Technology Evolution:*
- Ambient clinical intelligence
- Natural language processing
- Automated summarization
- Voice documentation
- AI quality review

*Paradigm Shifts:*
- Continuous vs. episodic documentation
- Patient as author
- Team documentation
- Real-world data emphasis`,
      keyTerms: [
        { term: 'clinical documentation improvement', definition: 'Programs to enhance documentation accuracy and completeness' },
        { term: 'ambient clinical intelligence', definition: 'AI systems that document from natural clinical conversations' },
        { term: 'CDA', definition: 'Clinical Document Architecture - standard for clinical document exchange' },
        { term: 'semantic interoperability', definition: 'Ability to exchange and use information with shared meaning' },
        { term: 'stigmatizing terminology', definition: 'Language in documentation that may perpetuate bias or discrimination' },
      ],
      clinicalNotes: 'Documentation serves multiple masters - clinical, legal, financial, quality. Patients benefit from understanding these various purposes. The future points toward patient co-authorship and AI assistance while addressing documentation burden.',
    },
  },

  media: [],

  citations: [
    {
      id: 'opennotes-research',
      type: 'website',
      title: 'OpenNotes: Patients and Clinicians on the Same Page',
      source: 'OpenNotes Initiative',
      url: 'https://www.opennotes.org/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-accessing-your-records', targetType: 'concept', relationship: 'related', label: 'Accessing Your Records' },
    { targetId: 'concept-correcting-record-errors', targetType: 'concept', relationship: 'related', label: 'Correcting Record Errors' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['medical-records', 'health-literacy', 'patient-education'],
    clinicalRelevance: 'high',
    keywords: ['medical chart', 'health records', 'documentation', 'SOAP notes'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default understandingYourChart;
