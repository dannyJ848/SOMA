/**
 * Board Exam Overview - Comprehensive Guide to Medical Board Examinations
 *
 * Educational content covering the landscape of medical board examinations,
 * certification processes, and maintenance of certification.
 */

import { EducationalContent } from '../../types';

export const boardExamOverview: EducationalContent = {
  id: 'education-board-exam-overview',
  type: 'concept',
  name: 'Medical Board Exam Overview',
  alternateNames: ['Board Certification', 'Medical Boards', 'Specialty Certification', 'Board Examinations'],

  levels: {
    1: {
      level: 1,
      summary: 'Board exams are tests that doctors take to prove they are experts in their specialty. Passing these tests shows patients and hospitals that a doctor has been specially trained.',
      explanation: `## What Are Board Exams?

Board exams are special tests that doctors take after finishing their training. They prove that a doctor is an expert in a certain area of medicine.

## Why Do Doctors Take Them?

- To show they have special knowledge and skills
- To get jobs at hospitals
- To prove they keep learning and improving
- To help patients find qualified doctors

## Different Types of Board Exams

Just like there are different subjects in school, there are different medical specialties:
- **Internal Medicine** - doctors for adults
- **Pediatrics** - doctors for children
- **Surgery** - doctors who do operations
- **Family Medicine** - doctors for the whole family
- **Psychiatry** - doctors for mental health

Each specialty has its own board exam.

## When Do Doctors Take Board Exams?

Doctors take board exams after they finish:
1. Medical school (4 years)
2. Residency training (3-7 more years)

## What Happens After Passing?

When doctors pass, they are "board certified." This means:
- They have proven expertise
- They can put special letters after their name
- Patients can trust their qualifications

## Keeping Certification

Doctors must keep learning and sometimes take more tests to stay certified. This makes sure they keep up with new medical discoveries.`,
      keyTerms: [
        { term: 'board certified', definition: 'A doctor who has passed special exams to prove expertise in their medical specialty' },
        { term: 'specialty', definition: 'A specific area of medicine that a doctor focuses on, like surgery or pediatrics' },
        { term: 'residency', definition: 'The training period after medical school where doctors learn their specialty' },
      ],
      analogies: [
        'Board certification is like getting a black belt in martial arts - it shows you have mastered the skills in your area.',
        'Board exams are like the final test after years of training to prove you are ready to practice independently.',
        'Different specialty boards are like different professional licenses - a plumber, electrician, and carpenter each need their own certification.',
      ],
      examples: [
        'A doctor finishes three years of pediatrics residency and then takes the pediatric board exam to become a board-certified pediatrician.',
        'A patient looking for a new heart doctor checks if they are "board certified in cardiology."',
      ],
      patientCounselingPoints: [
        'When a doctor is board certified, it means they passed rigorous exams proving their expertise',
        'You can ask if your doctor is board certified to learn about their qualifications',
      ],
    },

    2: {
      level: 2,
      summary: 'Medical board certification involves passing specialty-specific examinations after residency training. The American Board of Medical Specialties (ABMS) oversees 24 specialty boards that certify physicians and ensure ongoing competence.',
      explanation: `## Medical Board Certification System

Board certification is a voluntary credentialing process that demonstrates a physician has met standards beyond basic medical licensure.

## The ABMS System

The American Board of Medical Specialties (ABMS) coordinates certification for 24 member boards covering 40+ specialties:

**Major Boards:**
| Board | Specialties Covered |
|-------|---------------------|
| Internal Medicine | IM, cardiology, gastroenterology, etc. |
| Surgery | General surgery, subspecialties |
| Pediatrics | General pediatrics, subspecialties |
| Family Medicine | Primary care |
| Emergency Medicine | Emergency medicine |
| Psychiatry & Neurology | Psychiatry, neurology |

## Certification Requirements

**Initial Certification:**
1. Graduate from accredited medical school
2. Complete accredited residency program
3. Pass written examination
4. Some specialties: pass oral examination

**Examination Format:**
- Multiple choice questions
- Case-based scenarios
- Knowledge application questions
- Computer-based testing

## Subspecialty Certification

After primary board certification, physicians can pursue additional subspecialty certification:

**Example pathways:**
- Internal Medicine → Cardiology → Interventional Cardiology
- Surgery → Vascular Surgery
- Pediatrics → Pediatric Cardiology

## Maintenance of Certification (MOC)

Board certification is not permanent. Physicians must maintain certification through:
- **Continuing education:** Learning activities
- **Self-assessment:** Practice improvement modules
- **Periodic examination:** Usually every 10 years
- **Licensure:** Maintaining medical license

## Why Certification Matters

**For physicians:**
- Career advancement
- Hospital privileges
- Insurance panel participation
- Professional recognition

**For patients:**
- Quality assurance
- Credential verification
- Confidence in expertise

## Osteopathic Board Certification

DO physicians (osteopathic) can certify through:
- American Osteopathic Association (AOA) boards
- ABMS boards (increasingly common)
- Single accreditation system now combines pathways

## Verification

Board certification can be verified:
- ABMS Certification Matters website
- Individual specialty board websites
- Hospital credentialing offices`,
      keyTerms: [
        { term: 'ABMS', definition: 'American Board of Medical Specialties - the organization that oversees 24 medical specialty certification boards' },
        { term: 'Maintenance of Certification', definition: 'Ongoing requirements to keep board certification current, including education and periodic testing' },
        { term: 'subspecialty', definition: 'A more focused area within a medical specialty, requiring additional training and certification' },
        { term: 'hospital privileges', definition: 'Permission granted to a physician to practice and admit patients at a specific hospital' },
      ],
      analogies: [
        'ABMS is like the umbrella organization for all specialty certifications, similar to how NCAA oversees college sports.',
        'Subspecialty certification is like getting an advanced degree after your basic degree - more specialized training for focused expertise.',
        'MOC is like renewing a professional license - you have to prove you are still current in your field.',
      ],
      examples: [
        'After completing a cardiology fellowship, a physician takes the cardiovascular disease board exam to become a board-certified cardiologist.',
        'A family medicine physician completes MOC requirements every five years to maintain board certification.',
      ],
      patientCounselingPoints: [
        'Board certification shows your doctor has passed rigorous standards beyond basic medical licensing',
        'You can verify your doctor\'s board certification status online through official websites',
      ],
    },

    3: {
      level: 3,
      summary: 'Board certification through ABMS member boards validates specialty expertise beyond state licensure. The multi-component certification and MOC process ensures initial competence and ongoing professional development. Understanding board requirements is essential for career planning.',
      explanation: `## Comprehensive Board Certification Framework

Board certification represents the highest level of professional credentialing in medical specialties, validating expertise beyond minimum licensure requirements.

## ABMS Member Boards

**24 Specialty Boards:**
1. Allergy and Immunology
2. Anesthesiology
3. Colon and Rectal Surgery
4. Dermatology
5. Emergency Medicine
6. Family Medicine
7. Internal Medicine
8. Medical Genetics and Genomics
9. Neurological Surgery
10. Nuclear Medicine
11. Obstetrics and Gynecology
12. Ophthalmology
13. Orthopaedic Surgery
14. Otolaryngology
15. Pathology
16. Pediatrics
17. Physical Medicine and Rehabilitation
18. Plastic Surgery
19. Preventive Medicine
20. Psychiatry and Neurology
21. Radiology
22. Surgery
23. Thoracic Surgery
24. Urology

## Certification Pathways

**Standard Pathway:**
| Step | Requirement |
|------|-------------|
| 1 | Medical degree (MD/DO) |
| 2 | USMLE/COMLEX passage |
| 3 | ACGME-accredited residency |
| 4 | Board eligibility |
| 5 | Board examination |
| 6 | Certification award |

**Time-Limited Certification:**
- Most certifications valid for 10 years
- Continuous certification model emerging
- Specialty-specific requirements vary

## Examination Structure

**Typical Components:**
| Format | Content |
|--------|---------|
| Written exam | Multiple choice, computer-based |
| Oral exam | Case presentations (some specialties) |
| Practice pathway | Documentation of clinical work |

**Question Types:**
- Single best answer
- Extended matching
- Sequential management
- Multimedia (images, audio)

**Exam Frequency:**
- Initial certification: Once
- Recertification: Every 10 years (varies)
- Continuous assessment: Annual options emerging

## Maintenance of Certification (MOC)

**ABMS MOC Framework:**
| Part | Component | Purpose |
|------|-----------|---------|
| 1 | Professional standing | Active license |
| 2 | Lifelong learning | CME, self-assessment |
| 3 | Assessment of knowledge | Periodic exam |
| 4 | Improvement in practice | QI activities |

**Evolution of MOC:**
- Traditional: 10-year recertification exam
- Emerging: Continuous certification with annual activities
- Options: Longitudinal assessment instead of high-stakes exam

## Strategic Considerations

**Timing Decisions:**
- Take boards as soon as eligible
- Performance typically highest near training completion
- Career flexibility affected by certification status

**Preparation Resources:**
- Specialty-specific question banks
- Board review courses
- MOC preparation programs
- Self-assessment tools

**Failed Examination:**
- Retake typically permitted
- Waiting period may apply
- Additional preparation recommended
- Career impact considerations

## Subspecialty Certification

**Fellowship Training:**
- 1-3 additional years
- Subspecialty board eligibility
- Additional examination

**Common Subspecialty Pathways:**
| Primary Board | Subspecialties |
|--------------|----------------|
| Internal Medicine | Cardiology, GI, Pulm/CCM, etc. |
| Surgery | Trauma, Vascular, Surgical Critical Care |
| Pediatrics | Cardiology, Neonatology, etc. |

## Administrative Aspects

**Fees:**
- Initial certification: $1,500-3,000+
- Annual MOC fees: $200-500
- Recertification exam: $1,500-2,500

**Documentation:**
- Verification letters
- Online verification systems
- Hospital credentialing support`,
      keyTerms: [
        { term: 'board eligibility', definition: 'Status of meeting requirements to take a board certification exam, typically after completing residency' },
        { term: 'continuous certification', definition: 'Emerging model replacing periodic high-stakes exams with ongoing assessment and education activities' },
        { term: 'ACGME', definition: 'Accreditation Council for Graduate Medical Education - accredits residency and fellowship programs' },
        { term: 'CME', definition: 'Continuing Medical Education - ongoing learning activities required for licensure and certification' },
        { term: 'QI activities', definition: 'Quality Improvement activities - systematic efforts to improve healthcare delivery' },
      ],
      analogies: [
        'Board eligibility is like qualifying for a championship tournament - you have to complete the regular season (residency) first.',
        'Continuous certification is like subscription software updates instead of buying new versions every few years.',
        'The four parts of MOC are like maintaining a professional portfolio with different dimensions of competence.',
      ],
      examples: [
        'A new internal medicine graduate becomes board-eligible upon completing residency and has two years to pass the initial certification exam.',
        'A surgeon participates in annual MOC activities including self-assessment modules and quality improvement projects to maintain certification.',
      ],
      patientCounselingPoints: [
        'Board certified physicians have demonstrated expertise beyond minimum licensing requirements',
        'Maintenance of certification ensures physicians stay current with medical advances',
      ],
    },

    4: {
      level: 4,
      summary: 'Board certification validates specialty competence through ABMS-coordinated examinations and maintenance requirements. The evolving MOC framework balances accountability with physician engagement. Strategic preparation and career integration optimize certification outcomes.',
      explanation: `## Advanced Board Certification Concepts

Board certification operates within a complex ecosystem of credentialing, professional development, and healthcare quality assurance.

## Psychometric Foundations

**Examination Development:**
- Job/practice analysis defines content
- Item writing by subject matter experts
- Pilot testing and psychometric analysis
- Standard setting (cut score determination)

**Validity Evidence:**
| Type | Description |
|------|-------------|
| Content | Covers relevant knowledge domain |
| Criterion | Correlates with performance measures |
| Construct | Measures intended competencies |

**Reliability Metrics:**
- Internal consistency (Cronbach's alpha)
- Test-retest reliability
- Decision consistency
- Standard error of measurement

## Competency-Based Framework

**ABMS Core Competencies (aligned with ACGME):**
1. Patient Care and Procedural Skills
2. Medical Knowledge
3. Practice-Based Learning and Improvement
4. Interpersonal and Communication Skills
5. Professionalism
6. Systems-Based Practice

**Assessment Integration:**
- Written exams: Primarily medical knowledge
- Oral exams: Clinical reasoning, communication
- Practice pathway: Systems, professionalism

## MOC Evolution and Controversies

**Traditional Model Criticisms:**
- High-stakes testing stress
- Practice relevance questioned
- Time and cost burden
- Limited evidence of patient outcomes impact

**Reform Initiatives:**
- Continuous certification options
- Longitudinal assessment
- Practice-relevant activities
- Reduced administrative burden

**Current Options:**
| Board | Assessment Model |
|-------|------------------|
| Internal Medicine | Traditional or ABIM Knowledge Check-In |
| Family Medicine | Continuous with performance improvement |
| Emergency Medicine | ConCert examination |
| Pediatrics | MOCA-Peds longitudinal option |

## Strategic Examination Preparation

**High-Yield Approaches:**
| Strategy | Evidence |
|----------|----------|
| Question practice | Strong |
| Spaced repetition | Strong |
| Board review courses | Moderate |
| Textbook reading | Weak |
| Peer study groups | Variable |

**Timeline Optimization:**
- Begin 3-6 months before exam
- Increase intensity in final weeks
- Practice under test conditions
- Strategic rest before exam

## Subspecialty Certification Dynamics

**Career Implications:**
- Required for many academic positions
- Expected for certain practice settings
- Credential for referral patterns
- Billing/coding considerations

**Multiple Certifications:**
- Permitted to hold multiple subspecialty certifications
- Time-limited nature requires ongoing commitment
- Strategic decisions about which to maintain

## Practice-Based Certification Pathways

**For Non-Standard Pathways:**
- Practice pathway options
- Portfolio-based assessment
- Demonstrated competence through practice

**International Medical Graduates:**
- Additional documentation requirements
- Verification of training equivalence
- Same examination standards

## Institutional Implications

**Credentialing Requirements:**
- Most hospitals require board certification or eligibility
- Time limits for achieving certification
- Re-credentialing includes verification

**Insurance Panels:**
- Preferred provider status often requires certification
- Payer quality metrics may include certification
- Reimbursement implications

## Quality and Outcomes

**Evidence Base:**
| Finding | Strength |
|---------|----------|
| Certified physicians have more knowledge | Moderate |
| Certification correlates with process measures | Moderate |
| Certification improves patient outcomes | Limited |

**Ongoing Research:**
- Validity of certification assessments
- Impact of MOC on quality
- Optimal assessment methods
- Cost-effectiveness analysis`,
      keyTerms: [
        { term: 'psychometric analysis', definition: 'Statistical analysis of test properties including difficulty, discrimination, and reliability' },
        { term: 'standard setting', definition: 'Process of determining the passing score (cut score) for an examination' },
        { term: 'longitudinal assessment', definition: 'Ongoing evaluation over time rather than single high-stakes testing' },
        { term: 'practice pathway', definition: 'Certification route based on documented clinical practice rather than traditional residency' },
        { term: 'credentialing', definition: 'Process of verifying qualifications for hospital privileges or insurance participation' },
      ],
      analogies: [
        'Standard setting is like determining where to set the high jump bar - too low fails to differentiate, too high excludes qualified performers.',
        'Longitudinal assessment is like tracking student progress throughout a semester rather than a single final exam.',
        'The shift in MOC models is like moving from periodic car inspections to continuous vehicle monitoring systems.',
      ],
      examples: [
        'A hospitalist chooses the ABIM Knowledge Check-In option, answering 500 questions over 5 years instead of a single 10-hour recertification exam.',
        'A pediatric intensivist maintains dual board certification in pediatrics and pediatric critical care medicine, requiring separate MOC activities for each.',
      ],
      patientCounselingPoints: [
        'Board certification standards are developed through rigorous processes to ensure physician competence',
        'Ongoing certification requirements help ensure physicians maintain current knowledge',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert understanding of board certification encompasses psychometric principles, competency frameworks, MOC evolution, and health policy implications. Strategic engagement optimizes career trajectory while contributing to professional standards and patient safety.',
      explanation: `## Expert-Level Board Certification Framework

Board certification at the professional level requires understanding the scientific, policy, and practical dimensions of this credentialing system.

## Assessment Science

**Modern Test Theory:**
| Approach | Application |
|----------|-------------|
| Classical Test Theory | Item difficulty, discrimination |
| Item Response Theory | Adaptive testing, equating |
| Generalizability Theory | Multiple facets of measurement |

**Examination Quality Metrics:**
- Reliability coefficient target: >0.90
- Standard error of measurement implications
- Classification accuracy at cut score
- Bias analysis across groups

**Standard Setting Methods:**
| Method | Description |
|--------|-------------|
| Angoff | Expert item-level judgments |
| Bookmark | Ordered items, cut point |
| Borderline group | Performance of borderline candidates |
| Contrasting groups | Known groups comparison |

## Competency-Based Medical Education Integration

**Miller's Pyramid:**
1. Knows (knowledge)
2. Knows how (competence)
3. Shows how (performance)
4. Does (action)

**Assessment Method Matching:**
| Level | Methods |
|-------|---------|
| Knows | Written exams |
| Knows how | Written, oral exams |
| Shows how | OSCE, simulation |
| Does | Workplace-based assessment |

## MOC Policy Analysis

**Stakeholder Perspectives:**
| Stakeholder | Interest |
|-------------|----------|
| Boards | Quality, revenue, relevance |
| Physicians | Time, cost, value |
| Hospitals | Credentialing, quality |
| Patients | Safety, trust |
| Payers | Quality metrics, cost |

**Evidence Gaps:**
- Limited RCT evidence for MOC impact
- Association vs. causation challenges
- Confounding by physician selection
- Outcome measurement complexity

**Reform Trajectories:**
- Reduced high-stakes testing burden
- Practice-relevant assessment
- Technology-enabled continuous assessment
- Portfolio-based evaluation

## Health Policy Dimensions

**Regulatory Landscape:**
| Entity | Role |
|--------|------|
| State medical boards | Licensure |
| ABMS | Certification standards |
| ACGME | Training accreditation |
| CMS | Payment policies |
| TJC | Hospital accreditation |

**Certification vs. Licensure:**
| Aspect | Licensure | Certification |
|--------|-----------|---------------|
| Authority | State | Private board |
| Requirement | Mandatory | Voluntary |
| Scope | Minimum competence | Excellence |
| Focus | Public protection | Professional standards |

## Career Strategy Integration

**Early Career:**
- Prioritize initial certification
- Plan subspecialty pathway
- Build academic portfolio
- Establish practice patterns

**Mid-Career:**
- Maintain strategic certifications
- Consider leadership roles
- Balance MOC with practice demands
- Explore assessment innovation

**Late Career:**
- Succession planning
- Mentor emerging physicians
- Consider board service
- Phase certification obligations

## Quality Improvement Connection

**Board Certification as QI:**
- Standards development
- Performance measurement
- Continuous improvement cycle
- Outcomes accountability

**Integration with Value-Based Care:**
- Quality metrics alignment
- Payer incentives
- Public reporting
- Patient safety initiatives

## Global Perspectives

**International Comparisons:**
| Country | System |
|---------|--------|
| USA | ABMS certification |
| Canada | Royal College |
| UK | GMC with specialty colleges |
| Australia | College fellowships |

**Mutual Recognition:**
- Limited credential portability
- Specialty-specific agreements
- Examination reciprocity rare
- Practice restrictions common

## Future Directions

**Technology Integration:**
- AI-enhanced assessment
- Simulation-based evaluation
- Real-world performance data
- Continuous learning platforms

**Anticipated Changes:**
- Reduced time burden
- Greater practice relevance
- Patient outcome integration
- Flexible assessment pathways`,
      keyTerms: [
        { term: 'Item Response Theory', definition: 'Statistical framework for developing and analyzing tests that accounts for both person ability and item characteristics' },
        { term: 'Miller\'s Pyramid', definition: 'Framework describing levels of clinical competence from knows to does' },
        { term: 'standard error of measurement', definition: 'The standard deviation of errors around a true score, indicating measurement precision' },
        { term: 'value-based care', definition: 'Healthcare delivery model emphasizing quality outcomes relative to cost' },
      ],
      clinicalNotes: `Expert perspective on board certification:

1. **Strategic Timing:** Take initial certifications as soon as eligible. Performance typically peaks near training completion. Delays risk knowledge decay and career complications.

2. **MOC Reality:** MOC is imperfect but not optional. Engage strategically - choose activities aligned with practice interests and professional development goals.

3. **Multiple Certifications:** Maintaining multiple subspecialty certifications is demanding. Evaluate career necessity versus burden for each.

4. **Reform Participation:** Physician input shapes certification evolution. Participate in pilot programs, surveys, and policy discussions to influence future directions.

5. **Documentation:** Keep meticulous records of CME, QI activities, and certification status. Credentialing requests often come with tight timelines.

6. **Career Flexibility:** Board certification affects career mobility. Lapsed certification can limit opportunities even for experienced physicians.

7. **Scholarly Contribution:** Consider contributing to board activities - item writing, standard setting, and governance. These roles develop leadership skills and influence standards.

8. **Evidence Limitation:** Acknowledge the limited evidence linking certification to patient outcomes. The value lies in standardization, professional development, and accountability mechanisms.

9. **International Mobility:** Certification is not easily portable internationally. Plan ahead if considering practice in other countries.

10. **Cost-Benefit:** Board certification and MOC represent significant investments. Evaluate costs against career benefits and professional obligations in your specific context.`,
    },
  },

  media: [
    {
      id: 'abms-board-structure',
      type: 'diagram',
      filename: 'abms-board-structure.svg',
      title: 'ABMS Board Structure',
      description: 'Organization chart of ABMS member boards and specialties',
    },
    {
      id: 'moc-framework',
      type: 'diagram',
      filename: 'moc-framework.svg',
      title: 'Maintenance of Certification Framework',
      description: 'Visual representation of MOC components and requirements',
    },
  ],

  citations: [
    {
      id: 'abms-overview',
      type: 'website',
      title: 'About ABMS Board Certification',
      source: 'American Board of Medical Specialties',
      url: 'https://www.abms.org/board-certification/',
      accessedDate: '2025-01-28',
    },
    {
      id: 'moc-evidence-review',
      type: 'article',
      title: 'Maintenance of Certification and Its Association with Healthcare Quality',
      source: 'Journal of the American Medical Association',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-specialty-boards', targetType: 'concept', relationship: 'related', label: 'Specialty Board Details' },
    { targetId: 'education-usmle-step1-overview', targetType: 'concept', relationship: 'related', label: 'USMLE Step 1 Overview' },
    { targetId: 'education-usmle-step2-overview', targetType: 'concept', relationship: 'related', label: 'USMLE Step 2 Overview' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['board certification', 'ABMS', 'medical credentialing', 'MOC', 'specialty certification'],
    keywords: ['board exams', 'certification', 'medical boards', 'ABMS', 'maintenance of certification', 'physician credentialing'],
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

export default boardExamOverview;
