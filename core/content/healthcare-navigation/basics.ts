/**
 * Healthcare System Basics - Comprehensive Educational Content
 *
 * Helps patients understand how the healthcare system works,
 * including different types of facilities, providers, and care pathways.
 */

import { EducationalContent } from '../types';

export const healthcareBasicsContent: EducationalContent = {
  id: 'topic-healthcare-system-basics',
  type: 'topic',
  name: 'Healthcare System Basics',
  nameEs: 'Fundamentos del Sistema de Salud',
  alternateNames: ['Understanding Healthcare', 'Healthcare System Overview', 'Navigating Healthcare'],

  levels: {
    1: {
      level: 1,
      summary: 'The healthcare system is like a big team of people and places working together to help you stay healthy and treat you when you are sick.',
      explanation: `Think of the healthcare system as a network of helpers and places that keep you healthy. It's similar to how schools have different people who do different jobs - teachers, principals, nurses - healthcare has many helpers too.

**Types of Healthcare Places:**

**Doctor's Office (Primary Care):**
- This is your "home base" for healthcare
- You go here for check-ups, shots, and when you feel sick
- Your primary care doctor knows your whole health story
- Like having a family friend who helps keep you healthy

**Urgent Care:**
- Open when regular doctors are closed (evenings and weekends)
- For problems that need help soon but aren't emergencies
- Like a "walk-in" helper for smaller injuries or illnesses
- Examples: sore throat, small cuts, sprained ankle

**Emergency Room (ER):**
- Only for very serious or life-threatening problems
- Open 24 hours a day, every day
- For things like chest pain, trouble breathing, bad injuries
- Like a hospital for emergencies that can't wait

**Hospital:**
- Big building where you stay overnight if you're very sick
- Has special equipment and many doctors
- Nurses and doctors watch over you day and night

**Who Helps You:**

- **Doctors** - Lead your healthcare team
- **Nurses** - Give care, medicine, and teach you about your health
- **Receptionists** - Schedule appointments and answer phones
- **Specialists** - Doctors who know a lot about one body part or disease

**Your Healthcare Team:**
The most important member is YOU! You help by telling your team how you feel, asking questions, and following their advice.`,
      keyTerms: [
        { term: 'primary care', definition: 'Your main doctor who takes care of your everyday health needs' },
        { term: 'specialist', definition: 'A doctor who focuses on one specific area of health, like heart problems or skin issues' },
        { term: 'urgent care', definition: 'A place to go when you need help soon but it is not an emergency' },
        { term: 'emergency', definition: 'A very serious medical problem that needs immediate help to save a life or prevent harm' },
        { term: 'referral', definition: 'A note from your doctor that sends you to see a specialist' },
      ],
      analogies: [
        'Your primary care doctor is like a teacher who knows you well and helps you learn. A specialist is like a tutor who helps with one specific subject.',
        'The healthcare system is like a police department - there are regular officers (primary care), detectives (specialists), and emergency responders (ER) who all help in different ways.',
      ],
      examples: [
        'You have a bad cough and fever. Call your primary care doctor first.',
        'You cut your finger deeply on a Sunday evening. Go to urgent care.',
        'Your friend cannot breathe and has chest pain. Call 911 and go to the ER.',
      ],
      patientCounselingPoints: [
        'Keep your primary care doctor\'s phone number saved in your phone',
        'Know which urgent care centers are near your home',
        'Create a list of your medicines and allergies to show doctors',
        'Don\'t be afraid to ask questions - your healthcare team wants to help you understand',
      ],
    },
    2: {
      level: 2,
      summary: 'The healthcare system includes various types of facilities and providers who work together to provide preventive care, treat illness, and manage chronic conditions.',
      explanation: `## Healthcare System Overview

The healthcare system is organized into levels of care based on the severity and urgency of your health needs. Understanding this system helps you get the right care at the right place.

## Types of Care Facilities

### Primary Care
**Your Medical Home:**
- **Family Medicine**: Care for all ages, from babies to grandparents
- **Internal Medicine**: Care for adults (18+), focusing on internal organs and diseases
- **Pediatrics**: Care for children and teenagers
- **Obstetrics/Gynecology (OB/GYN)**: Women's health, pregnancy care

**What They Do:**
- Annual check-ups and physical exams
- Vaccinations and immunizations
- Screening tests (blood pressure, cholesterol, etc.)
- Treating common illnesses (colds, flu, infections)
- Managing ongoing conditions like diabetes or high blood pressure
- Referring you to specialists when needed

### Urgent Care Centers
**For Problems That Need Prompt Attention:**
- Open extended hours (evenings, weekends, holidays)
- No appointment needed (walk-in)
- Less expensive than the ER
- Staff can treat many non-life-threatening conditions

**Appropriate for Urgent Care:**
- Minor injuries (sprains, small cuts that might need stitches)
- Fever, sore throat, ear pain
- urinary tract infections
- X-rays for simple injuries
- Vomiting, diarrhea, or dehydration

**NOT for Urgent Care:**
- Chest pain or pressure
- Difficulty breathing
- Severe abdominal pain
- Signs of stroke
- Major injuries

### Emergency Departments (ED/ER)
**For Life-Threatening Conditions:**
- Open 24/7 for true emergencies
- Staffed by emergency medicine specialists
- Has advanced equipment and resources
- More expensive - save for true emergencies

**Go to the ER or Call 911 for:**
- Heart attack (chest pain, pressure, squeezing)
- Stroke (face drooping, arm weakness, speech difficulty)
- Severe bleeding
- Difficulty breathing or choking
- Head injury with passing out or confusion
- Sudden severe pain
- Severe burns or large wounds
- Poisoning or overdose

### Hospitals
**Inpatient Care:**
- For serious illness or surgery requiring overnight stay
- Have many types of doctors, nurses, and specialists
- Provide 24-hour nursing care and monitoring
- Have advanced diagnostic equipment (CT scans, MRIs, operating rooms)

**Types of Hospitals:**
- **Community hospitals**: Serve local areas
- **Teaching hospitals**: Train new doctors, often at universities
- **Specialty hospitals**: Focus on specific care (children's, cancer, rehabilitation)
- **Critical access hospitals**: Small hospitals in rural areas

## Your Healthcare Providers

### Doctors/Physicians
- **MD (Medical Doctor)**: Completed medical school and residency
- **DO (Doctor of Osteopathic Medicine)**: Similar to MD but with extra training in the musculoskeletal system
- **Primary Care Physician (PCP)**: Your main doctor
- **Specialist**: Doctor with advanced training in one area

### Advanced Practice Providers
- **Nurse Practitioner (NP)**: Nurse with advanced training, can prescribe medicine
- **Physician Assistant (PA)**: Healthcare professional who works with doctors

### Nurses
- **Registered Nurse (RN)**: Provides direct care, education, and coordinates your care
- **Nurse Practitioner (NP)**: Advanced practice, can diagnose and treat
- **LPN/LVN**: Licensed practical/vocational nurse

### Other Team Members
- **Pharmacist**: Medicine experts
- **Physical/Occupational Therapist**: Help you recover movement and function
- **Social Worker**: Helps with resources, support, and planning
- **Medical Assistant**: Helps with office visits and basic care

## How Care Connects

**Preventive Care** (staying healthy)
- Regular check-ups with your PCP
- Screenings and vaccines
- Healthy lifestyle guidance

**Primary Care** (everyday health needs)
- Your first contact for most problems
- Coordinates referrals to specialists

**Specialty Care** (expert care for specific problems)
- Referred by your PCP
- For complex or specific conditions

**Emergency Care** (life-threatening problems)
- Direct access without referral
- For severe or dangerous conditions`,
      keyTerms: [
        { term: 'primary care physician (PCP)', definition: 'A doctor who provides general healthcare and coordinates your overall medical care', pronunciation: 'primary care physician' },
        { term: 'referral', definition: 'A formal request from your primary care doctor for you to see a specialist' },
        { term: 'specialist', definition: 'A physician who has completed additional training in a specific area of medicine' },
        { term: 'preventive care', definition: 'Healthcare that focuses on preventing disease before it occurs' },
        { term: 'inpatient', definition: 'Care that requires an overnight stay in a hospital' },
        { term: 'outpatient', definition: 'Care that does not require an overnight hospital stay' },
        { term: 'triage', definition: 'The process of determining which patients need treatment first based on how sick they are', pronunciation: 'TREE-ahj' },
      ],
      analogies: [
        'Think of healthcare like a school system: your PCP is like your homeroom teacher who knows you best, specialists are like subject experts (like a math or art teacher), and the ER is like the principal\'s office for serious problems.',
        'Your PCP is the quarterback of your healthcare team - they call the plays and coordinate everyone else.',
      ],
      patientCounselingPoints: [
        'Choose a PCP you feel comfortable with and see them regularly, not just when you are sick',
        'Always carry a list of your current medications, allergies, and medical conditions',
        'Know the locations of the nearest urgent care and emergency department',
        'Ask if your doctor offers portal access for viewing test results and sending messages',
        'Bring a list of questions to each appointment',
      ],
    },
    3: {
      level: 3,
      summary: 'The United States healthcare system comprises multiple interconnected components including payers, providers, and facilities organized to deliver care across a continuum from prevention to acute intervention.',
      explanation: `## Healthcare System Structure

### System Components

**Payers (Insurance):**
- Private insurance (employer-sponsored, marketplace plans)
- Public insurance (Medicare, Medicaid, VA, CHIP)
- Self-pay (uninsured)

**Providers:**
- Physicians and advanced practice providers
- Hospitals and health systems
- Post-acute care facilities
- Diagnostic and therapeutic services

**Patients:**
- Consumers of healthcare services
- Increasing emphasis on patient engagement and shared decision-making

## Levels of Care

### 1. Preventive Care
**Primary Prevention:** Prevent disease before it occurs
- Immunizations
- Health education
- Lifestyle modifications

**Secondary Prevention:** Early detection and intervention
- Screening tests (mammography, colonoscopy)
- Regular health assessments
- Risk factor identification

**Tertiary Prevention:** Manage established disease
- Disease management programs
- Rehabilitation
- Complication prevention

### 2. Primary Care
**The Foundation of Healthcare:**
- First-contact care for undiagnosed problems
- Comprehensive and continuous care over time
- Coordination of specialty care
- Patient advocacy and health promotion

**Primary Care Models:**
- **PCMH (Patient-Centered Medical Home)**: Care team led by PCP, coordinated care
- **FQHC (Federally Qualified Health Center)**: Community-based, sliding scale fees
- **Concierge Medicine**: Retainer-based practice with enhanced access

### 3. Specialty Care
**Consultative and Focused Care:**
- Cardiology, gastroenterology, neurology, etc.
- Procedure-based specialties (surgery, cardiology interventions)
- Organ-based specialties (dermatology, ophthalmology)

**Access:**
- Requires referral from primary care (insurance requirement)
- Direct access for certain specialties (OB/GYN, ophthalmology, dermatology)

### 4. Acute Care
**Hospital-Based Services:**
- Emergency departments
- Inpatient wards
- Intensive care units
- Operating rooms
- Diagnostic services (imaging, laboratory)

### 5. Post-Acute Care
**Transitional and Recovery Services:**
- Skilled nursing facilities (SNF)
- Inpatient rehabilitation facilities (IRF)
- Long-term acute care hospitals (LTACH)
- Home health care
- Palliative and hospice care

## Healthcare Delivery Models

**Fee-for-Service (Traditional):**
- Providers paid for each service delivered
- No incentive for care coordination
- Declining model

**Value-Based Care:**
- Payment based on outcomes and quality
- Emphasis on preventive care and care coordination
- Includes ACOs (Accountable Care Organizations), bundled payments

**Integrated Delivery Systems:**
- Large organizations combining payers and providers
- Examples: Kaiser Permanente, Geisinger
- Coordinated care across settings

## Key Healthcare System Concepts

**Continuity of Care:**
- Consistent care over time
- Information transfer between providers
- Seamless transitions between care settings

**Care Coordination:**
- Organizing care activities and sharing information
- Involves multiple providers and settings
- Critical for patients with complex needs

**Medical Home:**
- Primary care setting that is:
  - Accessible
  - Continuous
  - Comprehensive
  - Patient-centered
  - Coordinated
  - Committed to quality and safety

**Electronic Health Records (EHR):**
- Digital version of patient's medical record
- Allows information sharing between providers
- Patient portals for access to personal health information`,
      keyTerms: [
        { term: 'PCMH', definition: 'Patient-Centered Medical Home - a care model where a team of healthcare professionals work together to provide coordinated, comprehensive primary care' },
        { term: 'FQHC', definition: 'Federally Qualified Health Center - community-based healthcare organizations that receive federal funds to provide primary care in underserved areas' },
        { term: 'value-based care', definition: 'Healthcare delivery model in which providers are paid based on patient health outcomes rather than for each service performed' },
        { term: 'ACO', definition: 'Accountable Care Organization - group of healthcare providers that agree to be accountable for quality and cost of care for a defined population' },
        { term: 'care coordination', definition: 'Deliberate organization of patient care activities between two or more participants involved in a patient\'s care' },
        { term: 'continuity of care', definition: 'The degree to which a series of discrete healthcare events is experienced as coherent and connected' },
        { term: 'EHR', definition: 'Electronic Health Record - digital version of a patient\'s medical history maintained by the provider over time' },
      ],
      clinicalNotes: 'Understanding the healthcare system is essential for navigating care effectively. The emphasis on value-based care and care coordination aims to improve quality while reducing costs, but can create complexity for patients to navigate.',
      patientCounselingPoints: [
        'Establish care with a primary care provider who can serve as your healthcare advocate and coordinator',
        'Use patient portals to access test results, track appointments, and communicate with providers',
        'Keep personal health records including medications, allergies, immunizations, and major medical events',
        'Understand your insurance coverage, including deductibles, copays, and prior authorization requirements',
      ],
    },
    4: {
      level: 4,
      summary: 'The US healthcare system is a complex, multi-payer framework characterized by fragmented care delivery, variable access, and ongoing reform efforts aimed at improving quality while controlling costs.',
      explanation: `## US Healthcare System Structure

### System Characteristics

**Multi-Payer System:**
- Mixed public-private financing
- No universal coverage
- Significant administrative complexity
- Wide variation in benefit design

**Key Stakeholders:**
- Patients/consumers
- Payers (insurers, employers, government)
- Providers (physicians, hospitals, health systems)
- Pharmaceutical industry
- Regulators (government agencies)

**Major Public Payers:**
1. **Medicare**: Federal program for age ≥65, certain disabilities, ESRD
   - Part A: Hospital insurance
   - Part B: Medical insurance
   - Part C: Medicare Advantage (private)
   - Part D: Prescription drug coverage

2. **Medicaid**: Joint federal-state program for low-income individuals
   - Means-tested eligibility
   - State-specific benefit design
   - CHIP for children

3. **VA Health Administration**: For veterans
4. **TRICARE**: For military members and families

### Healthcare Delivery Organizations

**Physician Practices:**
- Solo practice (declining)
- Group practice
- Hospital-employed physicians (increasing trend)
- Academic practices

**Hospitals and Health Systems:**
- Community hospitals
- Academic medical centers
- For-profit systems
- Non-profit systems
- Public hospitals

**Vertical Integration:**
- Hospitals employing physicians
- Insurers acquiring provider groups
- Health system expansion into post-acute care

### Models of Care Delivery

**Accountable Care Organizations (ACOs):**
- Groups of providers accepting responsibility for costs and quality
- Shared savings if quality targets met
- Medicare ACO programs, commercial ACOs

**Bundled Payments:**
- Single payment for episode of care
- Includes hospital, physician, post-acute care
- Risk assumed by providers
- Examples: CJR (joint replacement), BPCI (multiple procedures)

**Capitation:**
- Fixed payment per patient per period
- Provider assumes utilization risk
- Incentivizes prevention and care coordination

### Access and Disparities

**Social Determinants of Health:**
- Economic stability
- Education access and quality
- Healthcare access and quality
- Neighborhood and built environment
- Social and community context

**Healthcare Disparities:**
- Racial/ethnic disparities in outcomes and access
- Geographic disparities (rural vs urban)
- Socioeconomic disparities
- Contributing factors: systemic, provider, patient factors

### Healthcare Quality

**IOM (National Academy of Medicine) Aims:**
1. Safe: Avoid injuries to patients
2. Effective: Provide evidence-based care
3. Patient-centered: Honor individual preferences
4. Timely: Reduce waits and delays
5. Efficient: Avoid waste
6. Equitable: Close gaps in quality

**Quality Measures:**
- Process measures: Did you do the right thing?
- Outcome measures: Did the patient get better?
- Patient experience measures: Was the patient satisfied?
- Structural measures: Is the system capable?

**Value:**
- Value = Quality / Cost
- High-value care: Benefits outweigh harms and costs
- Low-value care: Little benefit relative to cost/harm

### Healthcare Reform

**Affordable Care Act (ACA) Provisions:**
- Insurance expansion (Medicaid, exchanges)
- Pre-existing condition protections
- Essential health benefits
- Preventive services without cost-sharing
- Accountable Care Organizations
- Hospital value-based purchasing

**Current Trends:**
- Shift from fee-for-service to value-based payment
- Emphasis on population health
- Telehealth expansion
- Price transparency requirements
- Prior authorization reform efforts`,
      keyTerms: [
        { term: 'fee-for-service', definition: 'Payment model where providers are reimbursed for each specific service performed, incentivizing volume over value' },
        { term: 'bundled payment', definition: 'Single payment covering all services for an episode of care, incentivizing coordination and efficiency' },
        { term: 'capitation', definition: 'Payment method where providers receive fixed amount per patient per time period regardless of services rendered' },
        { term: 'social determinants of health', definition: 'Conditions in which people are born, grow, live, work, and age that affect health outcomes' },
        { term: 'health disparity', definition: 'A particular type of health difference that is closely linked with social, economic, and/or environmental disadvantage' },
        { term: 'prior authorization', definition: 'Insurance requirement that provider obtain approval before certain services or medications will be covered' },
      ],
      clinicalNotes: `Healthcare system complexity often leads to fragmentation of care. As a clinician, you must:
1. Understand system barriers to adherence and engagement
2. Help patients navigate insurance and access issues
3. Coordinate care across multiple providers and settings
4. Recognize and address social determinants affecting health
5. Practice cost-conscious, high-value care`,
      patientCounselingPoints: [
        'I can help connect you with social workers or case managers if you are having trouble affording medications or navigating insurance',
        'Bring your insurance card to every visit and understand your coverage',
        'Ask about generic alternatives to expensive brand medications',
        'Use emergency services appropriately - urgent concerns can often be managed in urgent care or our office at lower cost',
      ],
    },
    5: {
      level: 5,
      summary: 'Mastery of healthcare system navigation requires understanding organizational structure, payment models, regulatory frameworks, and strategies to optimize care delivery while minimizing administrative burden and improving patient outcomes.',
      explanation: `## Advanced Healthcare System Concepts

### Policy and Regulatory Framework

**Major Legislation:**
- **ACA (2010)**: Insurance expansion, quality initiatives, delivery system reform
- **MACRA (2015)**: MIPS and APM pathways for physician payment
- **HIPAA (1996)**: Privacy and security of health information
- **HITECH (2009)**: EHR incentives, meaningful use
- **No Surprises Act (2022)**: Balance billing protection

**Regulatory Bodies:**
- CMS (Centers for Medicare & Medicaid Services)
- Joint Commission (hospital accreditation)
- state medical boards (licensure)
- state insurance departments

### Quality Improvement Infrastructure

**Learning Healthcare System:**
- Data-driven continuous improvement
- Implementation science
- Real-world evidence generation
- PDSA cycles (Plan-Do-Study-Act)

**Quality Measurement:**
- HEDIS (payor measures)
- CAHPS (patient experience)
- Hospital Compare (CMS measures)
- Physician Compare (CMS measures)
- Specialty-specific registries

**Pay-for-Performance:**
- Hospital Value-Based Purchasing (VBP)
- Hospital Readmissions Reduction Program (HRRP)
- Hospital-Acquired Condition (HAC) Reduction Program
- Merit-based Incentive Payment System (MIPS)

### Alternative Payment Models

**Risk-Based Arrangements:**
- Two-sided risk (shared savings/losses)
- One-sided risk (shared savings only)
- Population-based payment
- Global budgets
- Primary care capitation

**Advanced APMs:**
- MSSP ACOs (Medicare Shared Savings Program)
- Next Generation ACOs
- Comprehensive Primary Care Initiative (CPCI)
- Bundled Payments for Care Improvement (BPCI) Advanced
- Direct Contracting/REACH

### Digital Health and Transformation

**Telehealth:**
- Synchronous video visits
- Asynchronous e-visits
- Remote patient monitoring
- Payment parity (state laws)
- Interstate licensure compacts

**Digital Health Tools:**
- Patient portals and PHRs
- Mobile health apps
- Wearable devices
- AI/ML applications
- Predictive analytics

**Interoperability:**
- ONC Health IT Certification Program
- FHIR (Fast Healthcare Interoperability Resources)
- Information blocking provisions (Cures Act)
- TEFCA (Trusted Exchange Framework and Common Agreement)

### Population Health

**Risk Stratification:**
- Claims-based risk models (HCC, DxCG)
- Electronic health record risk prediction
- Social needs screening
- Comprehensive risk assessment

**Care Management:**
- High-risk care management
- Complex care management
- Transitional care management
- Chronic care management
- Behavioral health integration

**Social Interventions:**
- Screening for social determinants (PRAPARE)
- Community health workers
- Medical-legal partnerships
- Food prescribing programs
- Housing and transportation assistance

### Patient Navigation and Advocacy

**Professional Roles:**
- Patient navigators (cancer, chronic disease)
- Community health workers
- Care managers
- Patient advocates

**System Navigation Strategies:**
1. Care coordination across settings
2. Medication reconciliation
3. Test result tracking and follow-up
4. Specialist appointment coordination
5. Insurance and financial counseling

### Health Literacy and Communication

**Teach-Back Method:**
- Ask patient to explain in own words
- Confirm understanding
- Identify gaps
- Re-teach as needed

**Universal Precautions:**
- Assume all patients have limited health literacy
- Use plain language
- Limit to 3 key points
- Confirm understanding with teach-back

### Shared Decision Making

**Framework:**
1. Team talk: Involve patient and family
2. Option talk: Present all reasonable options
3. Decision talk: Help patient deliberate
4. Decision aid: Use tools when available

**Decision Aids:**
- Present options with outcomes
- Include probabilities and uncertainties
- Clarify patient values and preferences
- Available for many preference-sensitive decisions

### Professional Responsibilities

**Cost-Conscious Care:**
- Discuss costs with patients
- Choose high-value interventions
- Avoid low-value care (Choosing Wisely)
- Consider patient financial burden
- Prescribe generic when appropriate

**Prior Authorization:**
- Evidence-based criteria
- Gold-carding (exemption for high-performing physicians)
- Electronic prior authorization
- Burden reduction efforts

**Documentation:**
- Clinical reasoning
- Medical necessity
- Coordination of care
- Shared decision making
- Patient education provided`,
      keyTerms: [
        { term: 'MACRA', definition: 'Medicare Access and CHIP Reauthorization Act - 2015 law changing Medicare physician payment to quality-based system' },
        { term: 'MIPS', definition: 'Merit-based Incentive Payment System - Medicare payment program combining quality, cost, improvement activities, and promoting interoperability' },
        { term: 'APM', definition: 'Alternative Payment Model - payment approach other than fee-for-service, includes ACOs and bundled payments' },
        { term: 'HEDIS', definition: 'Healthcare Effectiveness Data and Information Set - tool used by >90% of health plans to measure performance' },
        { term: 'teach-back method', definition: 'Communication technique where patient explains understanding in own words to confirm comprehension' },
        { term: 'shared decision making', definition: 'Collaborative process where clinician and patient work together to make decisions based on evidence and patient preferences' },
        { term: 'health literacy', definition: 'Degree to which individuals can obtain, process, and understand basic health information needed to make appropriate health decisions' },
        { term: 'TEFCA', definition: 'Trusted Exchange Framework and Common Agreement - federal framework for health information exchange' },
      ],
      clinicalNotes: `As clinicians, we must:
1. Practice system-aware care - recognize how system factors impact patient outcomes
2. Engage in quality improvement - contribute to measurement and improvement efforts
3. Advocate for patients - help navigate system barriers, access resources, address social needs
4. Practice cost-conscious care - consider financial burden alongside clinical effectiveness
5. Use shared decision making - especially for preference-sensitive decisions
6. Improve health literacy - use plain language, teach-back, limit to 2-3 key points
7. Leverage technology - EHR tools, patient portals, telehealth appropriately
8. Build relationships with care teams - across specialties, primary care, social work

Remember: Our role extends beyond the clinical encounter to help patients navigate the complex healthcare environment.`,
    },
  },

  media: [
    {
      id: 'healthcare-system-flowchart',
      type: 'diagram',
      filename: 'healthcare-system-flowchart.svg',
      title: 'Healthcare System Navigation Flowchart',
      description: 'Visual guide to choosing appropriate care level and navigating between providers',
    },
  ],

  citations: [
    {
      id: 'healthcare-gov',
      type: 'website',
      title: 'Understanding the Healthcare System',
      source: 'Healthcare.gov',
      url: 'https://www.healthcare.gov/',
    },
    {
      id: 'iom-2001',
      type: 'article',
      title: 'Crossing the Quality Chasm: A New Health System for the 21st Century',
      authors: ['Institute of Medicine'],
      source: 'National Academy Press',
    },
    {
      id: 'aha-guide',
      type: 'website',
      title: 'Understanding Your Healthcare Options',
      source: 'American Hospital Association',
      url: 'https://www.aha.org',
    },
  ],

  crossReferences: [
    { targetId: 'topic-insurance-basics', targetType: 'topic', relationship: 'related', label: 'Insurance Basics' },
    { targetId: 'topic-finding-providers', targetType: 'topic', relationship: 'related', label: 'Finding Providers' },
    { targetId: 'topic-emergency-vs-urgent', targetType: 'topic', relationship: 'related', label: 'Emergency vs Urgent Care' },
    { targetId: 'topic-advocacy', targetType: 'topic', relationship: 'related', label: 'Self-Advocacy in Healthcare' },
  ],

  tags: {
    systems: ['healthcare-navigation'],
    topics: ['healthcare system', 'primary care', 'healthcare access', 'care coordination'],
    keywords: ['healthcare navigation', 'insurance', 'primary care', 'specialist', 'urgent care', 'emergency'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default healthcareBasicsContent;
