/**
 * Nursing Role - The Role of Nurses in Healthcare Teams
 */

import { EducationalContent } from '../../types';

export const nursingRole: EducationalContent = {
  id: 'interprofessional-nursing-role',
  type: 'concept',
  name: 'Nursing Role in Healthcare Teams',
  alternateNames: ['Nurse Responsibilities', 'RN Role'],

  levels: {
    1: {
      level: 1,
      summary: 'Nurses provide hands-on care, monitor your health, give medications, and are often your most frequent contact in healthcare.',
      explanation: `**What Do Nurses Do?**

- Give medications and treatments
- Monitor your health (vital signs, symptoms)
- Educate you about your health
- Advocate for your needs
- Coordinate your care
- Provide comfort and support

**Types of Nurses:**

- **RN (Registered Nurse):** Completed nursing program and passed licensing exam
- **LPN/LVN:** Licensed practical/vocational nurse with focused training
- **NP (Nurse Practitioner):** Advanced practice nurse who can diagnose and prescribe
- **CNS (Clinical Nurse Specialist):** Expert nurse in specialized area

**How Nurses Help You:**

- They spend the most time with you
- They explain things in understandable ways
- They watch for changes in your condition
- They are your voice on the care team`,
      keyTerms: [
        { term: 'registered nurse (RN)', definition: 'A nurse who completed nursing school and passed the NCLEX exam' },
        { term: 'nurse practitioner', definition: 'An advanced practice nurse who can diagnose and prescribe medications' },
        { term: 'patient advocate', definition: 'Someone who speaks up for the patients needs and wishes' },
      ],
      analogies: ['Nurses are like the glue of healthcare - they connect everything and everyone together'],
      examples: ['Nurse Johnson checks Marias vital signs, gives her morning medications, and explains her discharge instructions'],
      patientCounselingPoints: ['Ask your nurse questions - they are there to help', 'Tell your nurse if something does not feel right'],
    },
    2: {
      level: 2,
      summary: 'Nurses provide comprehensive patient care, serving as coordinators, educators, and advocates within healthcare teams.',
      explanation: `## Nursing Education Pathways

**Entry-Level:**
- ADN (Associate Degree in Nursing): 2 years
- BSN (Bachelor of Science in Nursing): 4 years
- Direct-entry MSN: For those with prior degrees

**Advanced Practice:**
- MSN or DNP required
- Specialization (NP, CNS, CNM, CRNA)
- National certification
- State licensure for practice

## Nursing Scope of Practice

**Core Functions:**
- Assessment and monitoring
- Care planning and implementation
- Medication administration
- Patient and family education
- Care coordination
- Documentation

**Advanced Practice:**
- Diagnosis and treatment
- Prescriptive authority
- Order tests and interpret results
- Independent or collaborative practice

## Key Nursing Roles

**Direct Care:**
- Bedside/staff nurse
- Charge nurse
- Float pool

**Specialized:**
- ICU, ED, OR, Labor and Delivery
- Oncology, Pediatrics, Geriatrics
- Wound care, Infection control

**Leadership:**
- Nurse manager
- Director of nursing
- Chief Nursing Officer`,
      keyTerms: [
        { term: 'BSN', definition: 'Bachelor of Science in Nursing - 4-year degree' },
        { term: 'scope of practice', definition: 'Activities a nurse is legally permitted to perform' },
        { term: 'charge nurse', definition: 'Nurse responsible for unit operations during a shift' },
      ],
      patientCounselingPoints: ['Different nurses have different training and roles', 'APRNs can often provide primary care'],
    },
    3: {
      level: 3,
      summary: 'Professional nursing encompasses independent, dependent, and interdependent functions within evidence-based collaborative practice.',
      explanation: `## Nursing Process

**ADPIE:**
- Assessment: Collecting patient data
- Diagnosis: Identifying nursing problems
- Planning: Setting goals and interventions
- Implementation: Carrying out the plan
- Evaluation: Assessing outcomes

## Professional Nursing Practice

**Standards of Practice (ANA):**
- Assessment through evaluation (nursing process)
- Evidence-based practice
- Quality improvement
- Communication and collaboration
- Leadership and education
- Ethics and resource utilization

**Nursing Diagnosis:**
- NANDA-I taxonomy
- Different from medical diagnosis
- Focuses on patient response to health problems
- Guides nursing interventions

## Interprofessional Collaboration

**Nursing Contributions:**
- 24/7 patient presence and monitoring
- Care coordination expertise
- Patient advocacy
- Communication hub for team
- Discharge planning

**Team Communication:**
- SBAR reporting
- Shift handoffs
- Rounds participation
- Rapid response activation`,
      keyTerms: [
        { term: 'nursing process', definition: 'Systematic approach to patient care: assess, diagnose, plan, implement, evaluate' },
        { term: 'NANDA-I', definition: 'Organization developing standardized nursing diagnosis terminology' },
        { term: 'nursing diagnosis', definition: 'Clinical judgment about patient response to health conditions' },
      ],
      clinicalNotes: 'Value nursing assessment and judgment. Include nurses as full team partners. Support nursing expertise.',
    },
    4: {
      level: 4,
      summary: 'Nursing practice is defined by professional standards, regulatory frameworks, and evolving scope aligned with healthcare transformation.',
      explanation: `## Regulatory Framework

**Licensure:**
- State board of nursing
- NCLEX examination
- Compact licensure (NLC)
- Scope defined by Nurse Practice Act

**Credentialing:**
- Certification (ANCC, specialty boards)
- Hospital privileging
- Competency validation

## Workforce Dynamics

**Supply and Demand:**
- Nursing shortage patterns
- Education capacity
- Retention challenges
- Geographic maldistribution

**Work Environment:**
- Nurse-patient ratios
- Magnet recognition
- Healthy work environment standards
- Burnout and turnover

## Quality and Safety

**Nurse-Sensitive Indicators:**
- Falls and pressure injuries
- Infection rates
- Patient satisfaction
- Mortality and rescue

**Safety Culture:**
- Speaking up
- Error reporting
- Just culture
- Continuous improvement

## Advanced Practice Evolution

**Full Practice Authority:**
- State-by-state variation
- Independent practice models
- Collaborative agreements
- Scope optimization`,
      keyTerms: [
        { term: 'Nurse Practice Act', definition: 'State law defining nursing scope of practice' },
        { term: 'nurse-sensitive indicators', definition: 'Quality measures reflecting nursing care impact' },
        { term: 'Magnet recognition', definition: 'ANCC designation for nursing excellence' },
      ],
      clinicalNotes: 'Support full practice authority. Address nurse staffing as quality issue. Build healthy work environments.',
    },
    5: {
      level: 5,
      summary: 'Nursing is central to healthcare quality and safety, requiring investment in workforce, practice environment, and professional development.',
      explanation: `## Nursing Leadership

**System Leadership:**
- C-suite representation
- Board participation
- Quality governance
- Strategic planning

**Clinical Leadership:**
- Unit-based councils
- Practice innovation
- Evidence-based practice
- Mentorship

## Research and Evidence

**Nursing Research:**
- Clinical outcomes
- Care delivery models
- Patient experience
- Workforce science

**Knowledge Translation:**
- Evidence-based practice models
- Implementation science
- Quality improvement integration

## Policy Priorities

**Workforce:**
- Education funding
- Residency programs
- Retention strategies
- Diversity initiatives

**Practice:**
- Scope of practice reform
- Telehealth regulations
- Reimbursement equity

## Future of Nursing

**IOM Future of Nursing:**
- Practice to full extent of education
- Higher levels of education
- Full partners in redesign
- Effective workforce planning

**Emerging Roles:**
- Care coordination
- Population health
- Informatics
- Virtual care`,
      keyTerms: [
        { term: 'Future of Nursing', definition: 'IOM/NAM initiative establishing nursing priorities for healthcare transformation' },
        { term: 'nurse residency', definition: 'Structured transition program for new graduate nurses' },
        { term: 'full practice authority', definition: 'APRNs practicing without physician oversight requirements' },
      ],
      clinicalNotes: 'Invest in nursing workforce. Support nurse leadership. Implement Future of Nursing recommendations.',
    },
  },

  media: [],
  citations: [{ id: 'ana-standards', type: 'website', title: 'Nursing: Scope and Standards of Practice', source: 'ANA' }],
  crossReferences: [{ targetId: 'interprofessional-physician-role', targetType: 'concept', relationship: 'sibling', label: 'Physician Role' }],
  tags: { systems: ['roles-responsibilities'], topics: ['nursing role', 'nursing practice'], keywords: ['nurse', 'nursing', 'RN'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default nursingRole;
