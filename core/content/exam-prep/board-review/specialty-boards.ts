/**
 * Specialty Boards - Guide to Individual Medical Specialty Certifications
 *
 * Educational content covering specific medical specialty boards,
 * their requirements, examination formats, and preparation strategies.
 */

import { EducationalContent } from '../../types';

export const specialtyBoards: EducationalContent = {
  id: 'education-specialty-boards',
  type: 'concept',
  name: 'Medical Specialty Boards',
  alternateNames: ['Specialty Certification', 'Board Specialties', 'Medical Specialty Exams'],

  levels: {
    1: {
      level: 1,
      summary: 'Different types of doctors take different board exams based on their specialty. Just like there are different subjects in school, there are different areas of medicine with their own tests.',
      explanation: `## Different Types of Medical Specialties

Medicine has many different specialty areas. Each area has its own board exam.

## Major Specialty Areas

**Internal Medicine**
- Doctors for adults
- Treat diseases like diabetes, heart problems
- Work in offices and hospitals

**Surgery**
- Doctors who do operations
- Fix problems inside the body
- Work in operating rooms

**Pediatrics**
- Doctors for babies and children
- Give shots and checkups
- Help kids grow up healthy

**Family Medicine**
- Doctors for the whole family
- See patients of all ages
- Know a little about everything

**Emergency Medicine**
- Doctors in emergency rooms
- Handle accidents and urgent problems
- Work fast in emergencies

**Psychiatry**
- Doctors for mental health
- Help with feelings and thinking
- Treat depression and anxiety

## How Doctors Choose Their Specialty

Doctors choose based on:
- What they enjoy doing
- What type of patients they want to help
- Where they want to work
- How they like to solve problems

## Training for Each Specialty

After medical school, doctors train for 3-7 more years depending on their specialty:
- Family medicine: 3 years
- Internal medicine: 3 years
- Surgery: 5 years
- Brain surgery: 7 years`,
      keyTerms: [
        { term: 'specialty', definition: 'A specific area of medicine that a doctor focuses on and becomes an expert in' },
        { term: 'residency', definition: 'The training period after medical school when doctors learn their specialty' },
        { term: 'board exam', definition: 'A test doctors take to prove they are experts in their specialty' },
      ],
      analogies: [
        'Medical specialties are like positions on a sports team - each player has a specific role and skills.',
        'Choosing a specialty is like choosing a major in college - you focus on what interests you most.',
        'The different board exams are like different professional certifications - a pilot license is different from a diving certification.',
      ],
      examples: [
        'A doctor who loves working with babies decides to specialize in pediatrics and takes the pediatric board exam.',
        'Someone interested in fixing broken bones becomes an orthopedic surgeon and trains for 5 years before their board exam.',
      ],
      patientCounselingPoints: [
        'Your doctor chose their specialty because they have special interest and training in that area',
        'Different specialists work together to give you complete care',
      ],
    },

    2: {
      level: 2,
      summary: 'Each medical specialty has its own certifying board with specific requirements, examination formats, and maintenance programs. Understanding these differences helps in career planning and professional development.',
      explanation: `## Overview of Major Specialty Boards

Each specialty has unique training and certification requirements.

## Primary Care Specialties

**American Board of Internal Medicine (ABIM)**
- Training: 3 years internal medicine residency
- Exam: 10-hour computer-based test
- Content: Adult medical diseases, diagnosis, management
- Subspecialties: Cardiology, gastroenterology, pulmonology, etc.

**American Board of Family Medicine (ABFM)**
- Training: 3 years family medicine residency
- Exam: One-day computer-based test
- Content: All ages, prevention, common conditions
- Focus: Continuity of care, community health

**American Board of Pediatrics (ABP)**
- Training: 3 years pediatrics residency
- Exam: Two-day examination
- Content: Newborn through adolescent care
- Subspecialties: Neonatology, pediatric cardiology, etc.

## Surgical Specialties

**American Board of Surgery (ABS)**
- Training: 5 years general surgery
- Exams: Written qualifying exam + oral certifying exam
- Content: Surgical decision-making, procedures, complications
- Subspecialties: Trauma, vascular, surgical critical care

**American Board of Orthopaedic Surgery (ABOS)**
- Training: 5 years orthopedic surgery
- Exams: Written + oral examinations
- Content: Musculoskeletal conditions, procedures
- Subspecialties: Sports medicine, spine, trauma

## Other Major Specialties

**American Board of Emergency Medicine (ABEM)**
- Training: 3-4 years emergency medicine
- Exam: Computer-based test
- Content: Emergency presentations, procedures
- Focus: Acute care, resuscitation

**American Board of Psychiatry and Neurology (ABPN)**
- Psychiatry: 4 years residency
- Neurology: 4 years residency
- Separate examinations for each
- Subspecialties: Child psychiatry, vascular neurology

**American Board of Anesthesiology (ABA)**
- Training: 4 years anesthesiology
- Exams: Written (BASIC, ADVANCED) + Applied exam
- Content: Perioperative care, pain management
- Staged examination format

## Exam Formats

| Board | Written Exam | Oral Exam | Other |
|-------|-------------|-----------|-------|
| ABIM | Yes | No | Knowledge Check-In option |
| ABFM | Yes | No | Continuous certification |
| ABS | Qualifying exam | Certifying exam | Case lists |
| ABEM | Yes | Oral option | ConCert exam |

## Key Differences by Specialty

**Duration:** 3 years (primary care) to 7 years (neurosurgery)
**Oral exams:** Surgical specialties often require oral examination
**Practice requirement:** Some require documented cases/procedures
**Maintenance:** All require ongoing certification activities`,
      keyTerms: [
        { term: 'qualifying exam', definition: 'The initial written examination that qualifies a candidate to take the oral certifying examination' },
        { term: 'certifying exam', definition: 'The oral examination administered after passing the qualifying exam in surgical specialties' },
        { term: 'fellowship', definition: 'Additional training after residency for subspecialty certification' },
        { term: 'case list', definition: 'Documentation of surgical cases required for board certification in surgical specialties' },
      ],
      analogies: [
        'The written and oral exam combination in surgery is like a two-part driving test - written rules and behind-the-wheel demonstration.',
        'Subspecialty fellowships are like graduate school after college - more specialized training in a focused area.',
        'Different exam formats reflect the nature of each specialty - surgeons demonstrate practical skills, internists show broad knowledge.',
      ],
      examples: [
        'A general surgery resident takes the ABS Qualifying Exam in their final year of residency, then takes the Oral Certifying Exam after completing training.',
        'An internal medicine resident interested in cardiology plans for 3 years of residency followed by 3 years of cardiology fellowship.',
      ],
      patientCounselingPoints: [
        'Specialists complete years of additional training focused specifically on their area of medicine',
        'Board certification in a specialty indicates your doctor has passed rigorous specialty-specific examinations',
      ],
    },

    3: {
      level: 3,
      summary: 'Specialty board certification involves distinct pathways for each discipline with specific training requirements, examination structures, and maintenance programs. Strategic understanding of these requirements enables effective career planning and preparation.',
      explanation: `## Comprehensive Specialty Board Analysis

Each ABMS member board has unique certification requirements reflecting specialty-specific competencies.

## Internal Medicine and Subspecialties

**ABIM Primary Certification:**
- Eligibility: ACGME-accredited residency completion
- Exam: 240 questions, 10 hours
- Pass rate: ~90% first-time takers
- Content: 60% diagnosis, 25% management, 15% health maintenance

**ABIM Subspecialties:**
| Subspecialty | Fellowship | Exam Format |
|--------------|------------|-------------|
| Cardiology | 3 years | 200 questions |
| Gastroenterology | 3 years | 200 questions |
| Pulmonary/Critical Care | 3 years | 200 questions each |
| Nephrology | 2 years | 200 questions |
| Infectious Disease | 2 years | 200 questions |
| Oncology | 3 years | 200 questions |
| Rheumatology | 2 years | 200 questions |

**ABIM MOC Options:**
- Traditional 10-year exam
- Knowledge Check-In (quarterly questions over 5 years)
- Both require CME and licensure

## Surgical Boards

**ABS General Surgery:**
- Qualifying Exam (QE): 300 MCQs, required to sit for CE
- Certifying Exam (CE): 3 sessions, 30-minute standardized oral scenarios
- Case log requirement: Minimum case numbers
- Pass rates: QE ~75%, CE ~80%

**Surgical Subspecialties:**
| Subspecialty | Additional Training | Exam Format |
|--------------|---------------------|-------------|
| Vascular Surgery | 2 years | Written + oral |
| Surgical Critical Care | 1 year | Written |
| Pediatric Surgery | 2 years | Written + oral |
| Complex General Surgical Oncology | 2 years | Written |

## Emergency Medicine

**ABEM Certification:**
- Pathways: EM residency (3-4 years) or combined programs
- Initial exam: 305 items over two sessions
- Content: Comprehensive emergency presentations
- ConCert format: High-stakes every 10 years with continuous options

**EM Subspecialties:**
- Pediatric Emergency Medicine
- Medical Toxicology
- Sports Medicine
- EMS/Prehospital Medicine

## Pediatrics

**ABP General Pediatrics:**
- Exam: ~200 questions over two days
- Content: Development, disease, behavioral health
- MOCA-Peds: Continuous certification option

**Pediatric Subspecialties:**
| Subspecialty | Fellowship | Certification |
|--------------|------------|---------------|
| Neonatology | 3 years | ABP subspecialty exam |
| Pediatric Cardiology | 3 years | ABP subspecialty exam |
| Pediatric Critical Care | 3 years | ABP subspecialty exam |
| Developmental-Behavioral | 3 years | ABP subspecialty exam |

## Anesthesiology

**ABA Staged Examination:**
- BASIC Exam: Early in CA-1 year, computer-based
- ADVANCED Exam: After CA-2, computer-based
- Applied Exam: After residency, standardized oral
- Must pass all three for certification

**Anesthesiology Subspecialties:**
- Critical Care Medicine
- Pain Medicine
- Pediatric Anesthesiology
- Cardiac Anesthesiology

## Psychiatry and Neurology

**ABPN Structure:**
- Psychiatry and Neurology are separate certifications
- Each requires 4-year residency
- Added qualifications available (e.g., addiction psychiatry)

**Subspecialties:**
| Psychiatry | Neurology |
|------------|-----------|
| Child & Adolescent | Vascular Neurology |
| Geriatric | Neurocritical Care |
| Addiction | Epilepsy |
| Consultation-Liaison | Clinical Neurophysiology |

## Strategic Preparation

**Common Elements:**
1. Content review (question banks, review courses)
2. Practice examinations
3. Oral exam practice (if applicable)
4. Time management skills
5. Stress management

**Specialty-Specific Preparation:**
| Specialty | Key Resources |
|-----------|---------------|
| Internal Medicine | MKSAP, UWorld |
| Surgery | SCORE curriculum, practice orals |
| Emergency Medicine | EM:RAP, in-training exams |
| Anesthesiology | OpenAnesthesia, TrueLearn |`,
      keyTerms: [
        { term: 'MKSAP', definition: 'Medical Knowledge Self-Assessment Program - ABIM\'s comprehensive internal medicine review resource' },
        { term: 'case log', definition: 'Documentation of surgical procedures performed during training, required for board certification' },
        { term: 'in-training exam', definition: 'Annual examination for residents to assess progress and predict board performance' },
        { term: 'ConCert', definition: 'Continuous Certification - ABEM\'s ongoing certification program' },
        { term: 'added qualification', definition: 'Additional certification in a focused area within a primary specialty' },
      ],
      analogies: [
        'The ABA staged examination is like a driver\'s license progression - permit, road test, then full license.',
        'MKSAP for internists is like the comprehensive study guide that covers everything you need to know.',
        'In-training exams are like practice SATs - they show where you stand before the real test.',
      ],
      examples: [
        'A PGY-2 anesthesiology resident takes the BASIC exam, then studies for ADVANCED exam in PGY-3, with the Applied exam scheduled for after graduation.',
        'A general surgery chief resident prepares for oral boards by practicing mock scenarios with attendings, presenting cases under timed conditions.',
      ],
      patientCounselingPoints: [
        'Doctors in different specialties undergo distinct but equally rigorous certification processes',
        'Board certification requirements are designed to ensure competence specific to each field of medicine',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced understanding of specialty boards encompasses examination psychometrics, competency assessment frameworks, and strategic preparation approaches. Each board balances standardization with specialty-specific validity to ensure practitioner competence.',
      explanation: `## Advanced Specialty Board Examination Analysis

Expert-level understanding of specialty boards requires analysis of examination design, competency frameworks, and performance optimization.

## Examination Psychometrics by Board

**ABIM Examination Design:**
- Blueprint based on practice analysis
- Items contributed by practicing physicians
- Cognitive levels: Recall, interpretation, problem-solving
- Cut score: Modified Angoff method
- Reliability: Cronbach's alpha >0.90

**Surgical Board Oral Examination Design:**
| Component | Purpose |
|-----------|---------|
| Standardized cases | Ensure fairness |
| Multiple examiners | Reduce bias |
| Structured scoring | Reliability |
| Realistic scenarios | Validity |

**ABA Staged Examination Rationale:**
- BASIC: Foundational knowledge, early identification of gaps
- ADVANCED: Applied knowledge, clinical decision-making
- Applied: Integrated clinical management, communication

## Competency Assessment Across Boards

**ACGME Competency Integration:**
| Competency | Written Exam | Oral Exam |
|------------|-------------|-----------|
| Patient Care | Direct | Direct |
| Medical Knowledge | Direct | Direct |
| Practice-Based Learning | Indirect | Indirect |
| Communication | Indirect | Direct |
| Professionalism | Indirect | Direct |
| Systems-Based Practice | Indirect | Direct |

## High-Stakes Examination Preparation

**Internal Medicine Boards:**
- Timeline: 6 months preparation typical
- Resources: MKSAP, UWorld, board review courses
- Strategy: Content review + question practice
- Self-assessment: ABIM practice exam

**Surgical Oral Examination:**
- Mock orals: Essential preparation
- Case presentation skills: Structured approach
- Critical thinking: Complication management
- Communication: Clear, organized responses

**Performance Predictors:**
| Factor | Correlation with Success |
|--------|-------------------------|
| In-training exam score | Strong |
| Residency program reputation | Moderate |
| Question bank performance | Strong |
| Study time (threshold effect) | Moderate |

## Failed Examination Management

**Failure Rates:**
| Board | First-Time Pass Rate |
|-------|---------------------|
| ABIM | ~90% |
| ABS QE | ~75% |
| ABS CE | ~80% |
| ABEM | ~85% |
| ABA Applied | ~85% |

**Retake Policies:**
- Most allow unlimited retakes
- Waiting period typically 6-12 months
- Additional fees apply
- Continuing education during waiting period

**Remediation Strategies:**
1. Score report analysis
2. Targeted content review
3. Question bank focus
4. Formal board preparation course
5. Peer support and tutoring

## Subspecialty Certification Dynamics

**Strategic Timing:**
- Take subspecialty boards during or soon after fellowship
- Knowledge peaks at end of training
- Some allow exam before fellowship completion

**Dual Certification Considerations:**
- Some hold multiple subspecialty certifications
- Each requires separate MOC activities
- Time and cost burden substantial

## Practice Pathway Options

**Alternative Certification Routes:**
- Practice pathway for non-traditional training
- International medical graduate pathways
- Combined training program recognition

**Requirements:**
- Documented clinical practice
- Case documentation
- Attestation letters
- May still require examination

## MOC Variation by Specialty

| Board | MOC Model | Options |
|-------|-----------|---------|
| ABIM | Traditional or longitudinal | Knowledge Check-In |
| ABFM | Continuous | Staged activities |
| ABP | Traditional or MOCA-Peds | Longitudinal option |
| ABS | Traditional with recertification exam | Case documentation |
| ABEM | ConCert | Modular options |

## Quality and Outcomes Research

**Evidence Base:**
| Finding | Strength |
|---------|----------|
| Board scores predict in-training performance | Moderate |
| Certification associated with quality measures | Weak-Moderate |
| MOC participation improves outcomes | Limited |

**Ongoing Studies:**
- Validity of oral examination formats
- Predictive value of longitudinal assessment
- Impact of specialty-specific MOC activities`,
      keyTerms: [
        { term: 'modified Angoff method', definition: 'Standard-setting procedure where experts estimate the probability of a borderline candidate answering each item correctly' },
        { term: 'in-training examination', definition: 'Annual specialty-specific examination for residents that predicts board performance' },
        { term: 'practice analysis', definition: 'Study of what physicians actually do in practice, used to develop examination blueprints' },
        { term: 'cognitive levels', definition: 'Classification of thinking required for test items from recall through analysis and synthesis' },
      ],
      analogies: [
        'The modified Angoff method is like asking expert coaches to predict how a borderline player would perform on each drill.',
        'Practice analysis for exam blueprints is like surveying practicing architects to determine what a licensing exam should cover.',
        'The staged ABA exam progression is like earning pilot ratings - private, instrument, commercial - each building on the last.',
      ],
      examples: [
        'A candidate who fails the ABS Oral Certifying Exam reviews their score report, finding weakness in trauma management, and focuses preparation on that area for retake.',
        'An internal medicine physician chooses the ABIM Knowledge Check-In, answering 30 questions quarterly rather than sitting for a 10-year exam.',
      ],
      patientCounselingPoints: [
        'Board certification processes use sophisticated methods to ensure fair and valid assessment of physician competence',
        'Different specialties have developed certification approaches suited to their specific practice requirements',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional-level specialty board expertise integrates examination science, policy analysis, and strategic career management. Understanding board governance, assessment validity, and the evolving certification landscape enables leadership in professional standards.',
      explanation: `## Expert Specialty Board Framework

Expert engagement with specialty boards encompasses governance, psychometric science, policy development, and strategic professional involvement.

## Board Governance and Policy

**ABMS Governance:**
- Board of Directors includes specialty board representatives
- Policy committees address standards, MOC, public accountability
- Specialty boards maintain autonomy within framework

**Specialty Board Structure:**
| Component | Function |
|-----------|----------|
| Board of Directors | Governance, strategy |
| Examination Committee | Test development |
| MOC Committee | Certification maintenance |
| Credentials Committee | Candidate verification |

**Policy Evolution:**
- Standards review cycles
- Stakeholder input processes
- Evidence-based decision making
- Public accountability requirements

## Examination Science Deep Dive

**Validity Framework:**
| Evidence | Description | How Assessed |
|----------|-------------|--------------|
| Content | Domain coverage | Practice analysis alignment |
| Response process | Consistent conditions | Standardized administration |
| Internal structure | Coherent measurement | Factor analysis, reliability |
| Relations | Expected correlations | Criterion validity studies |
| Consequences | Intended outcomes | Impact studies |

**Reliability Analysis:**
- Generalizability theory applications
- Decision studies for pass/fail
- Standard error at cut score
- Inter-rater reliability (oral exams)

**Item Development Pipeline:**
1. Practice analysis identifies domains
2. Item writers create items
3. Editorial review and revision
4. Field testing and psychometric analysis
5. Selection for operational forms
6. Post-exam analysis and refinement

## Oral Examination Science

**Structured Clinical Examination:**
- Standardized scenarios improve reliability
- Multiple sampling (cases, examiners) essential
- Rater training reduces variability
- Structured scoring rubrics

**Oral Exam Psychometrics:**
| Metric | Target |
|--------|--------|
| Inter-rater reliability | >0.80 |
| Cases needed | 6-8 minimum |
| Session duration | 2-3 hours |
| Passing standard | Criterion-referenced |

## Performance Assessment Integration

**Workplace-Based Assessment:**
- Some boards incorporating practice data
- Case logs as competency evidence
- Quality metrics integration
- Patient outcomes data (emerging)

**Multi-Source Assessment:**
| Source | Information |
|--------|-------------|
| Examination | Knowledge, reasoning |
| Case documentation | Procedural competence |
| Peer review | Professionalism |
| Patient feedback | Communication |

## Career Strategy Integration

**Board Leadership Opportunities:**
- Item writing: Develop questions for exams
- Examiner: Conduct oral examinations
- Committee service: Policy development
- Governance: Board leadership

**Professional Development Value:**
| Activity | Benefit |
|----------|---------|
| Item writing | Content mastery, networking |
| Examining | Assessment skills, peer learning |
| Committee service | Policy influence, leadership |
| Governance | Strategic direction, professional recognition |

## Health Policy Implications

**Value-Based Care Integration:**
- Some payers tie certification to quality programs
- Public reporting of board certification
- Hospital privileging requirements
- Malpractice considerations

**Regulatory Landscape:**
| Entity | Board Certification Role |
|--------|-------------------------|
| CMS | Quality program requirements |
| State boards | Licensure (not required) |
| Hospitals | Credentialing standard |
| Insurers | Panel participation |

## International Perspectives

**Credential Recognition:**
- Limited mutual recognition agreements
- Specialty-specific arrangements
- Examination equivalence rare
- Practice pathway options

**Comparative Systems:**
| Country | System | Board Role |
|---------|--------|-----------|
| USA | ABMS certification | Voluntary excellence |
| Canada | Royal College | Required for specialists |
| UK | GMC + colleges | Regulatory + professional |
| Australia | Colleges | Professional recognition |

## Future Directions

**Assessment Innovation:**
- AI-enhanced item development
- Adaptive testing implementation
- Simulation integration
- Real-world performance data

**Anticipated Changes:**
- Reduced high-stakes testing burden
- Greater practice relevance
- Technology-enabled continuous assessment
- Patient outcomes integration

**Research Priorities:**
- Certification validity studies
- MOC impact research
- Assessment method optimization
- Outcome prediction improvement`,
      keyTerms: [
        { term: 'generalizability theory', definition: 'Statistical framework for analyzing multiple sources of measurement error in assessment' },
        { term: 'criterion-referenced standard', definition: 'Passing standard based on defined competency level rather than comparison to other candidates' },
        { term: 'decision study', definition: 'Analysis determining optimal test design for reliable pass/fail decisions' },
        { term: 'practice analysis', definition: 'Systematic study of what physicians do in practice to inform examination content' },
      ],
      clinicalNotes: `Expert perspective on specialty boards:

1. **Strategic Engagement:** Consider involvement in board activities beyond being a candidate. Item writing, examining, and committee service provide professional development and influence standards.

2. **Examination Science:** Understanding how examinations are developed and validated provides insight into preparation strategies. Focus on blueprint domains, not peripheral content.

3. **Oral Examination Reality:** Success requires both clinical knowledge and examination skills. Practice structured case presentations under timed conditions.

4. **Failure Response:** Board examination failure is not career-ending. Systematic analysis of performance gaps and targeted remediation lead to success.

5. **MOC Evolution:** Participate in new certification models (Knowledge Check-In, continuous certification) to shape their development. Physician input influences future requirements.

6. **Multiple Certifications:** Strategically decide which subspecialty certifications to pursue and maintain based on career goals and practice requirements.

7. **Policy Awareness:** Board certification policy affects practice. Engage with specialty societies and boards to advocate for evidence-based, physician-friendly requirements.

8. **International Mobility:** If considering international practice, research certification requirements early. Pathways vary significantly and may require additional training or examination.

9. **Quality Integration:** Board certification increasingly connects to quality and value-based care. Position certification activities as professional development, not mere compliance.

10. **Leadership Development:** Board governance experience develops leadership skills transferable to other professional roles. Consider specialty board service as career development.`,
    },
  },

  media: [
    {
      id: 'specialty-board-map',
      type: 'diagram',
      filename: 'specialty-board-map.svg',
      title: 'Medical Specialty Board Map',
      description: 'Visual guide to ABMS member boards and their subspecialties',
    },
    {
      id: 'board-exam-timeline',
      type: 'diagram',
      filename: 'board-exam-timeline.svg',
      title: 'Board Certification Timeline',
      description: 'Typical timeline from medical school through specialty certification',
    },
  ],

  citations: [
    {
      id: 'abms-specialty-list',
      type: 'website',
      title: 'ABMS Member Boards',
      source: 'American Board of Medical Specialties',
      url: 'https://www.abms.org/member-boards/',
      accessedDate: '2025-01-28',
    },
    {
      id: 'specialty-exam-formats',
      type: 'article',
      title: 'Assessment in Medical Specialty Certification',
      source: 'Academic Medicine',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-board-exam-overview', targetType: 'concept', relationship: 'parent', label: 'Board Exam Overview' },
    { targetId: 'education-usmle-step2-overview', targetType: 'concept', relationship: 'related', label: 'USMLE Step 2 Overview' },
    { targetId: 'education-clerkship-overview', targetType: 'concept', relationship: 'related', label: 'Clinical Clerkship Overview' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['specialty boards', 'medical certification', 'ABMS', 'residency', 'fellowship'],
    keywords: ['specialty certification', 'board exams', 'ABIM', 'ABS', 'ABP', 'medical specialties'],
    clinicalRelevance: 'high',
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

export default specialtyBoards;
