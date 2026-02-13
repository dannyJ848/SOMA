/**
 * Finding the Right Doctor
 *
 * Guidance on selecting healthcare providers, understanding credentials,
 * and building effective doctor-patient relationships.
 */

import { EducationalContent } from '../../types';

export const FINDING_DOCTOR: EducationalContent = {
  id: 'patient-advocacy-finding-doctor',
  type: 'topic',
  name: 'Finding the Right Doctor',
  alternateNames: ['Choosing a Doctor', 'Selecting a Healthcare Provider'],

  levels: {
    1: {
      level: 1,
      summary: 'Finding the right doctor is like finding a good teacher - someone who listens, explains things clearly, and helps you understand your health.',
      explanation: `Think of your doctor as a partner in your health journey. Just like you'd want a teacher who explains things in a way you understand, you want a doctor who:

**What to Look For:**
- Someone who listens to your questions
- Takes time to explain things in simple words
- Makes you feel comfortable sharing concerns
- Seems to care about you as a person

**Where to Start:**
- Ask family and friends for recommendations
- Check if your insurance covers the doctor
- Look for doctors near your home or work

**Red Flags to Watch For:**
- Rushes through appointments
- Doesn't answer your questions
- Makes you feel scared or uncomfortable
- Dismisses your concerns

Remember: It's okay to meet with a few doctors before choosing one. You want someone you can trust!`,
      keyTerms: [
        { term: 'primary care doctor', definition: 'A doctor who sees you for general health problems and can send you to specialists if needed' },
        { term: 'specialist', definition: 'A doctor who focuses on one specific area of health, like heart problems or skin conditions' },
        { term: 'referral', definition: 'A note from your primary doctor that lets you see a specialist' },
        { term: 'credentials', definition: 'The training and certificates that show a doctor is qualified' },
      ],
      analogies: [
        'Finding a doctor is like finding a good mechanic - you want someone trustworthy who explains what needs to be fixed and why.',
        'Your primary care doctor is like a homeroom teacher - they know you well and can help direct you to other helpers when needed.',
      ],
      examples: [
        'If you have diabetes, your primary care doctor can help manage it, but might also send you to an eye doctor (specialist) to check your vision.',
        'A doctor who says "Let me make sure I understand your concern" is showing they care about what you have to say.',
      ],
      patientCounselingPoints: [
        'Write down your questions before your appointment so you don\'t forget',
        'Bring a list of all medicines you take',
        'It\'s okay to bring a friend or family member for support',
      ],
    },
    2: {
      level: 2,
      summary: 'Choosing the right healthcare provider involves checking their credentials, experience, communication style, and ensuring they accept your insurance.',
      explanation: `Finding the right doctor is an important step in managing your health. A good doctor-patient relationship can lead to better health outcomes and a more positive healthcare experience.

**Types of Doctors to Consider:**

*Primary Care Providers:*
- **Family Medicine**: Treats patients of all ages
- **Internal Medicine**: Treats adults (similar to family medicine but doesn't see children)
- **Pediatrician**: Treats children and adolescents
- **OB-GYN**: Specializes in women's health
- **Nurse Practitioner (NP) / Physician Assistant (PA)**: Can provide primary care with oversight from a doctor

**What to Research:**

1. **Credentials**: Look for "Board Certified" - means the doctor has passed advanced tests in their specialty
2. **Experience**: How many years have they practiced? Do they often treat conditions like yours?
3. **Hospital Affiliation**: Which hospitals can admit you if needed?
4. **Reviews**: Patient reviews can reveal communication style and office atmosphere
5. **Insurance**: Call the office to confirm they accept your insurance plan

**Questions to Ask at First Visit:**
- "How do you handle test results?"
- "Can I reach you with questions between appointments?"
- "What's your approach to treatment?"
- "Do you use electronic health records I can access?"

**When to Consider Switching:**
- Persistent communication problems
- Frequent scheduling issues
- Disrespectful treatment
- You don't feel heard or your concerns are dismissed`,
      keyTerms: [
        { term: 'board certified', definition: 'A doctor who has completed extra training and passed exams in a specialty area' },
        { term: 'primary care provider', definition: 'Your main doctor for general health needs, checkups, and coordinating care' },
        { term: 'hospital affiliation', definition: 'The hospital(s) where a doctor can admit and treat patients' },
        { term: 'electronic health record', definition: 'A digital version of your medical chart that doctors use to track your health', pronunciation: 'EHR' },
      ],
      analogies: [
        'Board certification is like a stamp of approval - it shows the doctor has gone above and beyond basic requirements.',
      ],
      examples: [
        'A doctor with "MD FACP" after their name means they\'re a Medical Doctor and a Fellow of the American College of Physicians - a sign of extra achievement.',
        'If you have a heart condition, you might want a cardiologist who has treated many patients with your specific condition.',
      ],
      patientCounselingPoints: [
        'Most insurance websites have a "Find a Doctor" tool to search for in-network providers',
        'The first appointment is a chance to see if the doctor is a good fit for you',
        'You can change doctors if you\'re not satisfied - it\'s your right as a patient',
      ],
    },
    3: {
      level: 3,
      summary: 'Selecting a physician involves verifying board certification, evaluating practice patterns, assessing communication compatibility, and confirming logistical factors like insurance acceptance and appointment availability.',
      explanation: `The physician selection process requires systematic evaluation of multiple factors to ensure an effective therapeutic alliance.

**Credential Verification:**

*Medical Degrees:*
- **MD (Doctor of Medicine)**: Allopathic physician trained at US medical schools
- **DO (Doctor of Osteopathic Medicine)**: Equivalent training with additional focus on musculoskeletal system and holistic approach
- Both are fully licensed physicians with identical practice rights

*Board Certification:*
- Administered by American Board of Medical Specialties (ABMS) member boards
- Indicates completion of residency training + passing comprehensive written and oral exams
- Requires Maintenance of Certification (MOC) every 2-10 years
- Can be verified at CertificationMatters.org

**Practice Types:**

| Setting | Advantages | Considerations |
|---------|------------|----------------|
| Private Practice | Longer appointments, personal care | May have limited resources |
| Hospital-Based | Access to specialists and technology | Shorter appointment times |
| Academic/Teaching | Latest treatments, research protocols | Residents may provide care |
| Community Health Center | Sliding scale fees, comprehensive services | Longer wait times |

**Evaluating Physician Quality:**

*Objective Measures:*
- State medical license lookup (disciplinary actions)
- Hospital quality metrics (if applicable)
- Patient satisfaction scores (CAHPS surveys)
- Volume-outcome relationship (high volume for specific procedures often correlates with better outcomes)

*Subjective Assessment:*
- Shared decision-making style
- Cultural competence and language abilities
- Responsiveness to patient preferences
- Willingness to discuss second opinions

**Red Flags Requiring Caution:**
- History of malpractice judgments
- Multiple disciplinary actions
- Revoked or restricted medical license
- Pattern of complaints about communication

**Insurance Network Considerations:**
- In-network vs. out-of-network cost differences
- Prior authorization requirements
- Referral policies for specialists
- Cost-sharing (copayments, deductibles)`,
      keyTerms: [
        { term: 'therapeutic alliance', definition: 'The collaborative relationship between patient and healthcare provider that supports treatment goals' },
        { term: 'allopathic', definition: 'The mainstream medical approach (MD) that uses conventional treatments to fight disease', pronunciation: 'al-oh-PATH-ik' },
        { term: 'osteopathic', definition: 'Medical approach (DO) emphasizing whole-person care and the musculoskeletal system', pronunciation: 'oss-tee-oh-PATH-ik' },
        { term: 'Maintenance of Certification', definition: 'Ongoing process of learning and testing to maintain board certification', pronunciation: 'MOC' },
        { term: 'CAHPS', definition: 'Consumer Assessment of Healthcare Providers and Systems - standardized patient surveys', pronunciation: 'CAPS' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinician and patient work together to make healthcare decisions' },
      ],
      clinicalNotes: 'Board certification in primary care specialties (Family Medicine, Internal Medicine, Pediatrics) has been associated with higher quality care in some studies. However, certification status alone should not be the sole selection criterion.',
    },
    4: {
      level: 4,
      summary: 'Physician selection incorporates evidence-based assessment of training quality, clinical competence metrics, practice characteristics, and patient-provider communication effectiveness to optimize healthcare outcomes.',
      explanation: `**Evidence-Based Provider Selection:**

*Training Quality Indicators:*
- Residency program accreditation (ACGME)
- Fellowship training in subspecialty areas
- Research publications and academic appointments
- CME (Continuing Medical Education) hours completed annually

*Clinical Competence Assessment:*
- **Publicly Reported Quality Metrics**:
  - CMS Physician Compare reports for Medicare providers
  - State Physician Profiling websites
  - HealthGrades, Leapfrog Group data
- **Volume-Outcome Relationships**:
  - Surgical procedures: Higher procedural volume correlates with lower complications
  - Complex conditions: Specialists with disease-specific experience have better outcomes
- **Adherence to Evidence-Based Guidelines**:
  - Preventive screening compliance
  - Appropriate prescribing patterns
  - Avoidance of low-value services (Choosing Wisely criteria)

**Communication and Interpersonal Skills:**

The Patient-Centered Medical Home (PCMH) model emphasizes:
- **Physician empathy**: Measured by Jefferson Scale of Physician Empathy; higher empathy correlates with better clinical outcomes and adherence
- **Shared decision-making**: Use of decision aids for preference-sensitive conditions
- **Health literacy adaptation**: Ability to tailor communication to patient comprehension level

**Practice System Factors:**

*Continuity of Care:*
- Higher continuity associated with lower hospitalization rates and costs
- Measured by UPC (Usual Provider of Care) index
- Patients seeing same provider over time build trust and improve outcomes

*Care Coordination:*
- Electronic health record interoperability
- Care management for complex patients
- Integration with specialists and community resources

**Special Considerations:**

*For Patients with Chronic Conditions:*
- Disease-specific certification (e.g., Certified Diabetes Educator)
- Participation in disease registries and quality improvement
- Multidisciplinary team access (nurse coordinators, dietitians, social workers)

*For Surgical Procedures:*
- Surgeon volume and specialization
- Hospital volume and Leapfrog safety scores
- Surgical outcome reporting (NSQIP participant hospitals)

*For Underserved Populations:*
- Cultural competence training
- Language concordance (language-matched providers)
- Community health center integration with social services

**Potential Biases in Selection:**
- Online ratings often reflect service experience rather than clinical quality
- Physician gender may affect communication style recommendations
- Racial/ethnic concordance can improve communication and satisfaction for minority patients`,
      keyTerms: [
        { term: 'ACGME', definition: 'Accreditation Council for Graduate Medical Education - oversees residency training programs' },
        { term: 'Choosing Wisely', definition: 'Campaign to reduce unnecessary medical tests and procedures' },
        { term: 'Patient-Centered Medical Home', definition: 'Care model emphasizing comprehensive, coordinated, primary care with a personal physician', pronunciation: 'PCMH' },
        { term: 'health literacy', definition: 'The ability to obtain, process, and understand basic health information needed to make appropriate health decisions' },
        { term: 'cultural competence', definition: 'The ability of healthcare providers to understand and respond effectively to cultural differences' },
        { term: 'NSQIP', definition: 'National Surgical Quality Improvement Program - tracks surgical outcomes' },
      ],
      clinicalNotes: 'Studies show that physician communication style significantly impacts patient outcomes. The "Net Promoter Score" for physicians correlates more strongly with communication skills than with clinical outcomes. However, both should be considered when selecting a provider.',
    },
    5: {
      level: 5,
      summary: 'Optimal physician selection integrates objective quality metrics, subjective compatibility assessment, and system-level factors to establish a therapeutic partnership that maximizes health outcomes while aligning with patient values and preferences.',
      explanation: `**Advanced Considerations in Physician Selection:**

*Quality Metric Limitations:*
- Public reporting often lacks risk adjustment for patient complexity
- Surgeon scorecards may miss outcomes from uninsured patients
- "Gaming" of quality metrics (e.g., avoiding high-risk patients)
- Time lag between care delivery and public reporting

*Assessment Frameworks:*

The **Stanford Physician Selection Framework** incorporates:
1. **Structural factors**: Training, certification, practice setting
2. **Process factors**: Communication, care coordination, guideline adherence
3. **Outcome factors**: Mortality, complications, patient-reported outcomes

*Advanced Metrics:*
- **Mortality and readmission rates** (risk-adjusted)
- **Patient-Reported Outcome Measures (PROMs)**: Condition-specific quality of life measures
- **Composite quality scores**: Combining multiple measures into single rating
- **Peer review status**: Quality assessments from other physicians

**Special Populations:**

*Complex Multimorbidity:*
- Generalist approach often superior to multiple subspecialists
- Comprehensive geriatric assessment principles
- Deprescribing expertise to reduce polypharmacy

*Rare Diseases:*
- Expertise at academic medical centers with dedicated programs
- Participation in clinical trials and research registries
- Collaboration with patient advocacy organizations

*Precision Medicine Needs:*
- Access to genetic testing and interpretation
- Pharmacogenomic expertise
- Molecular tumor board participation (for oncology)

**Telemedicine Considerations:**
- Interstate licensure requirements
- Asynchronous vs. synchronous visit appropriateness
- Digital health literacy requirements
- Platform security and HIPAA compliance

**Contractual and Legal Considerations:**
- Employment model (employed vs. private practice)
- Productivity pressure and visit length constraints
- Non-compete clauses affecting continuity
- Surprise billing protection requirements (No Surprises Act)

**Quality Improvement Resources:**
- CMS Physician Compare: physiciancompare.cms.gov
- State medical board disciplinary actions
- American Board of Medical Specialties verification
- Leapfrog Group hospital safety grades
- ProPublica Surgeon Scorecard (with limitations noted)

**Red Flags Requiring Deeper Investigation:**
- Outlier billing patterns (fraud potential)
- Industry payments (OpenPayments database)
- Frequent malpractice claims
- Restricted license with monitoring requirements

**Future Directions:**
- AI-powered physician matching based on clinical profiles
- Direct outcome reporting at individual physician level
- Patient-generated data integration into performance assessment`,
      keyTerms: [
        { term: 'risk adjustment', definition: 'Statistical method to account for differences in patient complexity when comparing outcomes' },
        { term: 'patient-reported outcome measures', definition: 'Standardized questionnaires measuring health status from patient perspective', pronunciation: 'PROMs' },
        { term: 'polypharmacy', definition: 'Use of multiple medications, especially in older adults, increasing risk of adverse effects' },
        { term: 'No Surprises Act', definition: '2022 federal law protecting patients from unexpected medical bills from out-of-network providers' },
        { term: 'OpenPayments', definition: 'CMS database tracking financial relationships between industry and healthcare providers' },
      ],
      clinicalNotes: 'The "cherry-picking" phenomenon refers to physicians or hospitals selecting low-risk patients to improve publicly reported outcomes. Patients with complex conditions should ask specifically about experience managing cases similar to theirs, not just overall quality scores.',
    },
  },

  media: [
    {
      id: 'finding-doctor-checklist-1',
      type: 'diagram',
      filename: 'doctor-selection-checklist.svg',
      title: 'Doctor Selection Checklist',
      description: 'Visual checklist for evaluating potential healthcare providers',
    },
  ],

  citations: [
    {
      id: 'abms-certification',
      type: 'website',
      title: 'Certification Matters',
      source: 'American Board of Medical Specialties',
      url: 'https://www.certificationmatters.org/',
      license: 'Copyrighted',
    },
    {
      id: 'cms-physician-compare',
      type: 'website',
      title: 'Physician Compare',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.medicare.gov/care-compare/',
      license: 'Public Domain',
    },
    {
      id: 'choosing-wisely',
      type: 'website',
      title: 'Choosing Wisely',
      source: 'American Board of Internal Medicine Foundation',
      url: 'https://www.choosingwisely.org/',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'patient-advocacy-second-opinion', targetType: 'topic', relationship: 'related', label: 'Getting a Second Opinion' },
    { targetId: 'patient-advocacy-healthcare-coordination', targetType: 'topic', relationship: 'related', label: 'Healthcare Coordination' },
  ],

  tags: {
    topics: ['patient-advocacy', 'healthcare-navigation'],
    keywords: ['finding doctor', 'choosing physician', 'primary care', 'doctor-patient relationship'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
