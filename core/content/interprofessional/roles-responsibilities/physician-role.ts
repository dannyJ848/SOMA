/**
 * Physician Role - The Role of Physicians in Healthcare Teams
 */

import { EducationalContent } from '../../types';

export const physicianRole: EducationalContent = {
  id: 'interprofessional-physician-role',
  type: 'concept',
  name: 'Physician Role in Healthcare Teams',
  alternateNames: ['Doctor Role', 'Physician Responsibilities'],

  levels: {
    1: {
      level: 1,
      summary: 'Physicians are doctors who diagnose illnesses, prescribe treatments, and lead parts of your healthcare team.',
      explanation: `**What Do Physicians Do?**

- Figure out what is wrong (diagnose)
- Prescribe medicines and treatments
- Perform procedures and surgeries
- Order and interpret tests
- Coordinate with other team members

**Types of Physicians:**

- **Primary Care:** Your main doctor for regular checkups and common problems
- **Specialists:** Doctors who focus on one area (heart, skin, bones, etc.)
- **Surgeons:** Doctors who perform operations

**Working with Your Physician:**

- Share all your symptoms and concerns
- Ask questions you do not understand
- Follow the treatment plan or discuss alternatives
- Keep your appointments`,
      keyTerms: [
        { term: 'physician', definition: 'A doctor who has completed medical school and training' },
        { term: 'diagnosis', definition: 'Identifying what illness or condition a patient has' },
        { term: 'specialist', definition: 'A doctor who focuses on one area of medicine' },
      ],
      analogies: ['A physician is like the captain of a ship - they guide the direction while working with the whole crew'],
      examples: ['Dr. Smith examines Maria, orders blood tests, and prescribes medicine for her thyroid'],
      patientCounselingPoints: ['Your doctor is part of a team working for you', 'Always share your concerns and questions'],
    },
    2: {
      level: 2,
      summary: 'Physicians provide medical diagnosis, treatment, and oversight while collaborating with interprofessional team members.',
      explanation: `## Physician Training Pathway

**Medical Education:**
- Medical school (MD or DO): 4 years
- Residency training: 3-7 years
- Fellowship (subspecialty): 1-3 years
- Board certification

**Scope of Practice:**
- Medical diagnosis
- Prescriptive authority (full)
- Procedural privileges
- Medical decision-making
- Supervision of some team members

## Physician Specialties

**Primary Care:**
- Family Medicine
- Internal Medicine
- Pediatrics
- Obstetrics/Gynecology (for some)

**Medical Specialties:**
- Cardiology, Pulmonology, Gastroenterology
- Neurology, Endocrinology, Rheumatology
- Infectious Disease, Oncology

**Surgical Specialties:**
- General Surgery, Orthopedics
- Neurosurgery, Cardiothoracic
- Urology, Otolaryngology

## Team Leadership Role

- Medical decision-making authority
- Supervision and collaboration
- Care plan oversight
- Legal responsibility for care`,
      keyTerms: [
        { term: 'attending physician', definition: 'Fully trained physician with ultimate responsibility for patient care' },
        { term: 'residency', definition: 'Supervised training after medical school in a specialty' },
        { term: 'board certification', definition: 'Credential showing completion of training and passing specialty exams' },
      ],
      patientCounselingPoints: ['Ask about your physicians specialty and training', 'Understand who on the team makes different decisions'],
    },
    3: {
      level: 3,
      summary: 'Physicians have unique competencies in diagnosis and medical management while functioning within collaborative interprofessional teams.',
      explanation: `## Core Physician Competencies

**ACGME Core Competencies:**
- Patient Care
- Medical Knowledge
- Practice-Based Learning
- Interpersonal Communication Skills
- Professionalism
- Systems-Based Practice

**Diagnostic Expertise:**
- Clinical reasoning and decision-making
- Integration of history, exam, and tests
- Differential diagnosis generation
- Uncertainty management

## Interprofessional Collaboration

**Physician as Team Member:**
- Collaborative rather than hierarchical
- Shared decision-making with team
- Respect for others expertise
- Communication across disciplines

**Supervisory Responsibilities:**
- Medical students and residents
- Advanced practice providers
- Care coordination oversight

## Practice Settings

**Employed vs Independent:**
- Hospital employed
- Private practice
- Academic medicine
- Government/VA system

**Reimbursement:**
- Fee-for-service
- Value-based care
- Capitation models`,
      keyTerms: [
        { term: 'ACGME', definition: 'Accreditation Council for Graduate Medical Education - sets training standards' },
        { term: 'clinical reasoning', definition: 'Process of thinking through diagnostic and treatment decisions' },
        { term: 'differential diagnosis', definition: 'List of possible conditions that could explain symptoms' },
      ],
      clinicalNotes: 'Model collaborative practice. Engage in interprofessional education. Support team-based care.',
    },
    4: {
      level: 4,
      summary: 'Physician practice is evolving toward collaborative care models while maintaining core diagnostic and leadership responsibilities.',
      explanation: `## Evolving Physician Role

**Traditional Model:**
- Autonomous decision-maker
- Hierarchical authority
- Individual accountability
- Solo or small group practice

**Contemporary Model:**
- Collaborative team member
- Shared leadership
- Team accountability
- Integrated practice systems

## Scope of Practice Dynamics

**Team-Based Care:**
- Physician-led teams
- Advanced practice provider collaboration
- Task delegation and supervision
- Scope optimization

**Practice Authority:**
- Medical diagnosis (physician domain)
- Treatment decision-making (collaborative)
- Prescriptive authority (shared in some states)
- Procedural privileges (credential-based)

## Quality and Accountability

**Physician Quality Measures:**
- MIPS (Merit-Based Incentive Payment System)
- Board MOC (Maintenance of Certification)
- Peer review
- Patient outcomes

**Professional Accountability:**
- Medical board licensure
- Hospital credentialing
- Malpractice liability
- Ethical obligations`,
      keyTerms: [
        { term: 'MIPS', definition: 'Medicare quality program affecting physician reimbursement' },
        { term: 'MOC', definition: 'Maintenance of Certification - ongoing competency requirements' },
        { term: 'credentialing', definition: 'Process of verifying qualifications to practice' },
      ],
      clinicalNotes: 'Embrace team-based care. Lead with collaboration. Focus on quality outcomes.',
    },
    5: {
      level: 5,
      summary: 'Physician leadership in healthcare systems requires balancing clinical expertise, team collaboration, and system stewardship.',
      explanation: `## Physician Leadership

**Clinical Leadership:**
- Quality and safety oversight
- Clinical program development
- Peer leadership and mentorship
- Practice innovation

**Administrative Leadership:**
- Medical director roles
- Committee leadership
- Policy development
- Resource stewardship

## Workforce Considerations

**Supply and Distribution:**
- Physician shortages in some areas
- Specialty maldistribution
- Rural and underserved access
- Diversity and inclusion

**Burnout and Wellbeing:**
- High burnout rates
- System factors (EHR burden, administrative)
- Individual and organizational interventions
- Culture change needs

## Future of Physician Practice

**Technology Impact:**
- AI in diagnosis
- Telehealth expansion
- Digital health integration
- Automation of tasks

**Care Model Evolution:**
- Value-based care
- Population health
- Precision medicine
- Team-based primary care

## Health Equity Role

- Addressing disparities
- Cultural competency
- Social determinants awareness
- Advocacy and policy`,
      keyTerms: [
        { term: 'physician burnout', definition: 'State of exhaustion and disengagement affecting physician wellbeing' },
        { term: 'value-based care', definition: 'Payment model rewarding quality outcomes rather than volume' },
        { term: 'population health', definition: 'Health outcomes of a defined group and their distribution' },
      ],
      clinicalNotes: 'Lead system improvement. Address burnout proactively. Champion health equity.',
    },
  },

  media: [],
  citations: [{ id: 'acgme-competencies', type: 'website', title: 'ACGME Core Competencies', source: 'ACGME' }],
  crossReferences: [{ targetId: 'interprofessional-nursing-role', targetType: 'concept', relationship: 'sibling', label: 'Nursing Role' }],
  tags: { systems: ['roles-responsibilities'], topics: ['physician role', 'medical practice'], keywords: ['physician', 'doctor', 'medical'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default physicianRole;
