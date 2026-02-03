/**
 * Finding and Choosing Healthcare Providers - Comprehensive Educational Content
 *
 * Guides patients through selecting appropriate healthcare providers,
 * including primary care doctors, specialists, and evaluating credentials.
 */

import { EducationalContent } from '../types';

export const findingProvidersContent: EducationalContent = {
  id: 'topic-finding-providers',
  type: 'topic',
  name: 'Finding and Choosing Healthcare Providers',
  alternateNames: ['Choosing a Doctor', 'Finding a Specialist', 'Selecting Healthcare Providers'],

  levels: {
    1: {
      level: 1,
      summary: 'Finding the right doctor is important for your health. You can ask friends, check with your insurance, or look online to find doctors who can help you.',
      explanation: `Just like finding the right teacher or coach helps you learn better, finding the right doctor helps you stay healthier. Your doctor is an important partner in taking care of your health.

**Types of Doctors:**

**Primary Care Doctor:**
- This is your main doctor
- Sees you for check-ups and when you are sick
- Knows your whole health story
- Helps you find specialists if you need one

**Specialist:**
- A doctor who is an expert in one area
- Examples: heart doctor, skin doctor, baby doctor
- You usually need a referral from your primary care doctor

**How to Find a Doctor:**

**Ask People You Trust:**
- Family and friends
- Other doctors you have seen
- Teachers or school nurses

**Use Your Insurance:**
- Call the number on your insurance card
- Check your insurance company website
- They will tell you which doctors accept your insurance

**Check Online:**
- Many hospitals have websites with doctor profiles
- Some websites show patient reviews

**What to Look For:**

**Office Location:**
- Is the office close to your home or work?
- Is there parking?
- Can you get there by bus or train?

**Office Hours:**
- Are they open when you are free?
- Do they have early morning or evening hours?
- Are they open on weekends?

**Doctor's Experience:**
- How long have they been a doctor?
- Do they treat people like you?
- Do they speak your language?

**Is the Doctor a Good Match?**

At your first visit, think about:
- Do they listen to you?
- Do they explain things clearly?
- Do they answer your questions?
- Do you feel comfortable with them?

**Red Flags - Maybe Look for a Different Doctor:**
- They rush through your visit
- They don't answer your questions
- They make you feel bad about asking things
- They don't seem to listen to your concerns

**Remember:**
You can change doctors if you aren't happy. Finding the right doctor may take a few tries, and that is okay.`,
      keyTerms: [
        { term: 'primary care doctor', definition: 'Your main doctor who takes care of your everyday health needs' },
        { term: 'specialist', definition: 'A doctor who is an expert in one specific area of medicine' },
        { term: 'referral', definition: 'A note from your primary care doctor that lets you see a specialist' },
        { term: 'credentials', definition: 'A doctor\'s education, training, and qualifications' },
        { term: 'in-network', definition: 'Doctors and hospitals that have an agreement with your insurance company' },
      ],
      analogies: [
        'Finding a doctor is like finding a good hair stylist - sometimes you need to try a few before you find one who understands exactly what you need.',
        'Your primary care doctor is like your family\'s general contractor - they coordinate everything and bring in specialists (like electricians or plumbers) when needed.',
      ],
      examples: [
        'You need a doctor for regular check-ups. Look for a family medicine doctor or internal medicine doctor near your home.',
        'Your child needs a doctor. Look for a pediatrician (children\'s doctor) in your insurance network.',
        'You have bad eczema. Your primary care doctor refers you to a dermatologist (skin specialist).',
      ],
      patientCounselingPoints: [
        'Make sure the doctor accepts your insurance before you make an appointment',
        'Think about whether you prefer a male or female doctor',
        'Check if the doctor speaks your language or has interpreters available',
        'Consider whether the office is easy for you to get to',
        'Trust your feelings - if you don\'t feel comfortable, it\'s okay to find someone else',
      ],
    },
    2: {
      level: 2,
      summary: 'Choosing healthcare providers involves considering factors such as insurance coverage, credentials, experience, communication style, and logistical factors like location and availability.',
      explanation: `## Finding the Right Healthcare Provider

Your relationship with your healthcare provider is one of the most important factors in your health outcomes. Take time to choose thoughtfully.

## Types of Primary Care Providers

### Family Medicine
- Cares for patients of all ages (birth through geriatrics)
- Provides comprehensive care for the whole family
- Understands family health dynamics
- Can be convenient for families

### Internal Medicine
- Specializes in adult healthcare (ages 18+)
- Focuses on prevention and treatment of adult diseases
- Additional training in complex, multi-system diseases
- Often coordinates care for adults with multiple chronic conditions

### Pediatrics
- Specializes in children and adolescents (birth to age 18-21)
- Training in childhood development and pediatric diseases
- Understands children\'s unique health needs
- Often have child-friendly offices

### Obstetrics/Gynecology (OB/GYN)
- Women\'s health specialists
- Pregnancy and childbirth care
- Reproductive health
- Many women also use OB/GYNs as primary care providers

### Nurse Practitioners (NP) and Physician Assistants (PA)
- Advanced training beyond nursing
- Can diagnose, treat, and prescribe medications
- Often have more time for appointments
- Work closely with physicians

## Steps to Find a Provider

### Step 1: Check Your Insurance Network

**Why It Matters:**
- In-network providers have agreed-upon rates with your insurance
- You pay less out of pocket
- Insurance may not cover out-of-network care

**How to Check:**
- Call the number on your insurance card
- Use your insurance company\'s website or app
- Ask the provider\'s office when you call

### Step 2: Research Provider Credentials

**Board Certification:**
- Means the doctor has completed specialized training
- Passed rigorous exams in their specialty
- Requires ongoing education to maintain
- You can verify at certificationmatters.org

**Education and Training:**
- Medical school (4 years after college)
- Residency (3-7 years of specialized training)
- Fellowship (additional training for sub-specialties)

**Experience:**
- Years in practice
- Number of procedures performed (for proceduralists)
- Special expertise or research interests

### Step 3: Consider Practical Factors

**Location and Office Hours:**
- Is the office conveniently located?
- Do hours work with your schedule?
- Is parking available or is it accessible by public transit?
- What is the typical wait time for appointments?

**Hospital Affiliation:**
- Which hospital(s) does the provider use?
- Is that hospital in your network?
- Is it a hospital you would want to go to if needed?

**Language and Communication:**
- Does the provider speak your preferred language?
- Are interpretation services available?
- Does the office offer portal access for email communication?

### Step 4: Gather Recommendations

**Good Sources:**
- Friends and family (but remember, their needs may differ from yours)
- Other healthcare providers you trust
- Hospital referral lines
- Online reviews (take with a grain of salt - bias exists)

**Questions to Ask:**
- Who do you see for your own healthcare?
- What do you like about this provider?
- Would you recommend them for someone like me?

### Step 5: Meet and Evaluate

**The First Visit:**

Ask yourself:
- Did the provider listen to my concerns?
- Did they explain things in a way I could understand?
- Did they answer all my questions?
- Did I feel rushed or respected?
- Did they involve me in decisions about my care?

**Red Flags:**
- Dismissive of your concerns
- Won\'t answer questions
- Interrupts frequently
- Seems judgmental
- Makes you feel uncomfortable

**Green Flags:**
- Asks about your life and priorities
- Explains the "why" behind recommendations
- Encourages questions
- Respects your time
- Treats you as a partner

## Finding Specialists

**Most Specialists Require Referrals:**
- Your primary care provider will refer you when needed
- Insurance may require referral for coverage
- Good PCPs have established relationships with quality specialists

**When to See a Specialist:**
- Your PCP recommends it
- You have a specific condition requiring expert care
- You need a procedure your PCP doesn't perform
- You want a second opinion about a diagnosis or treatment

**Researching Specialists:**
- Look for board certification in the specific specialty
- Check experience with your specific condition
- Ask about their approach to treatment
- Consider their communication style

## Changing Providers

**It's Okay to Switch:**
- Your health is too important to settle
- No need to explain extensively if you don't want to
- Your medical records can be transferred

**When to Consider Switching:**
- Poor communication
- Dismissive attitude
- Feeling unheard or rushed
- Medical errors or concerning patterns
- Values misalignment
- Practical issues (location, hours, availability)`,
      keyTerms: [
        { term: 'board certification', definition: 'Official recognition that a doctor has completed specialized training and passed exams in a specific area of medicine' },
        { term: 'in-network', definition: 'Providers who have contracted with your insurance company to provide services at negotiated rates' },
        { term: 'out-of-network', definition: 'Providers who do not have a contract with your insurance company; usually costs you more' },
        { term: 'referral', definition: 'A formal request from your primary care provider for you to see a specialist' },
        { term: 'credentials', definition: 'A provider\'s qualifications, including education, training, licensure, and certifications' },
        { term: 'hospital affiliation', definition: 'The hospital(s) where a provider admits patients and performs procedures' },
        { term: 'fellowship', definition: 'Additional specialized training beyond residency, usually 1-3 years' },
      ],
      analogies: [
        'Choosing a doctor is like choosing a financial advisor - you want someone knowledgeable, but also someone you trust and feel comfortable talking to about personal matters.',
        'Your relationship with your primary care doctor is like a long-term partnership - both sides contribute and good communication is essential.',
      ],
      patientCounselingPoints: [
        'Prepare a list of questions before your first appointment',
        'Bring a list of your current medications and dosages',
        'Be honest about your lifestyle and concerns - doctors can\'t help if they don\'t know the full picture',
        'It may take 2-3 visits to really know if a doctor is the right fit',
        'If a doctor recommends a procedure or surgery, it\'s reasonable to get a second opinion',
      ],
    },
    3: {
      level: 3,
      summary: 'Selecting healthcare providers requires evaluating credentials, experience, communication style, and practical considerations while understanding the relationship between primary care and specialty services within the healthcare system.',
      explanation: `## Provider Selection Framework

### Credential Verification

**Medical Licensure:**
- Required to practice medicine in each state
- Can be verified through state medical board websites
- Protects public by ensuring minimum standards
- Disciplinary actions are public record

**Board Certification:**
- Administered by American Board of Medical Specialties (ABMS) member boards
- 24 specialty boards certify physicians
- Requirements:
  - Complete residency training
  - Pass comprehensive written and oral examinations
  - Hold unrestricted medical license
- Maintenance required every 6-10 years (MOC)
- Verification available at certificationmatters.org

**Fellowship Training:**
- Subspecialty training beyond residency
- 1-3 additional years
- Examples: cardiology after internal medicine, surgical oncology after general surgery

### Provider Types and Training

**Physicians (MD/DO):**
- Medical school: 4 years post-bachelor
- Residency: 3-7 years depending on specialty
- Fellowship: optional subspecialization
- Unlimited prescriptive authority
- Full scope of practice in specialty

**Nurse Practitioners (NP):**
- Master's or doctoral degree in nursing
- board certified in population focus (family, adult-gerontology, pediatrics, etc.)
- Prescriptive authority varies by state
- Emphasis on holistic care and health promotion

**Physician Assistants (PA):**
- Master's degree (2.5 years average)
- Generalist training with versatility
- Practice with physician collaboration
- Prescriptive authority in all jurisdictions
- Can practice in any specialty with orientation

**Certified Nurse-Midwives (CNM):**
- Master's degree in midwifery
- Board certified
- Full-scope reproductive healthcare
- Prescriptive authority in all states

### Evaluating Quality

**Outcome Data (when available):**
- Surgical outcomes and complication rates
- Patient satisfaction scores
- Readmission rates
- Adherence to quality measures
- Publicly available for some providers and facilities

**Experience Volumes:**
- Number of specific procedures performed
- Research suggests outcomes improve with volume
- Particularly important for high-risk procedures

**Patient Reviews:**
- Consider sample size (few reviews = limited information)
- Look for patterns rather than outliers
- Focus on comments about communication and respect
- Be aware of selection bias (dissatisfied patients more likely to post)

### Assessing Communication Style

**Evidence-Based Communication:**
- Patient-centered communication associated with:
  - Better adherence to treatment
  - Improved outcomes
  - Higher satisfaction
  - Fewer malpractice claims

**Signs of Effective Communication:**
- Uses plain language with appropriate medical terminology
- Checks for understanding (teach-back)
- Elicits your concerns and priorities
- Incorporates shared decision-making
- Allows sufficient time for questions
- Provides written summaries or instructions

### Primary Care vs Specialty Care

**Primary Care Functions:**
- First contact for undiagnosed concerns
- Comprehensive and continuous care
- Prevention and health maintenance
- Coordination of specialty care
- Management of common chronic conditions

**Specialty Care Indications:**
- Conditions beyond PCP expertise
- Procedures requiring specialized training
- Complex or atypical presentations
- Diagnostic uncertainty
- Second opinions

**Co-Management Models:**
- PCP and specialist collaborate on complex conditions
- Clear communication about roles and responsibilities
- Shared documentation in medical record
- Patient informed about care plan

### Insurance and Network Considerations

**Managed Care Networks:**
- PPO: Can see out-of-network but pay more
- HMO: Must stay in-network, usually need referrals
- EPO: In-network only, no referral required
- POS: Hybrid model

**Prior Authorization:**
- Insurance approval required before certain services
- Typically for expensive tests, medications, procedures
- Can delay care
- Provider office usually handles

**Balance Billing:**
- When out-of-network provider bills patient for difference between their charge and insurance payment
- Can result in unexpected charges
- Some protections under No Surprises Act

### Telehealth Considerations

**Benefits:**
- Expanded access to specialists
- Convenience and reduced travel
- Continuity during public health emergencies

**Limitations:**
- Cannot perform physical examination
- May not be appropriate for all concerns
- Technology requirements
- State licensing restrictions

**When to Choose Telehealth:**
- Follow-up visits
- Medication management
- Mental health care
- Consultations
- Minor acute issues`,
      keyTerms: [
        { term: 'MOC', definition: 'Maintenance of Certification - ongoing process to maintain board certification through continuing education and assessment' },
        { term: 'ABMS', definition: 'American Board of Medical Specialties - organization overseeing 24 specialty boards that certify physicians' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinician and patient work together to make decisions based on evidence and patient preferences' },
        { term: 'teach-back', definition: 'Technique where patient explains understanding in their own words to confirm comprehension' },
        { term: 'prior authorization', definition: 'Insurance requirement for approval before certain services or medications will be covered' },
        { term: 'balance billing', definition: 'Practice of billing patient for difference between provider charge and insurance payment; restricted in some situations' },
        { term: 'telehealth', definition: 'Use of digital communication technologies to deliver healthcare services remotely' },
      ],
      clinicalNotes: 'Research consistently shows that physician communication style correlates with patient adherence and outcomes. Take time to find a provider whose communication approach works for you.',
      patientCounselingPoints: [
        'When meeting a new provider, clearly state your priorities for care',
        'Ask about their philosophy on treatments like antibiotics, imaging, and procedures',
        'Inquire about their approach to shared decision-making',
        'Discuss how they handle after-hours concerns',
        'Understand their care team - who else might be involved in your care?',
      ],
    },
    4: {
      level: 4,
      summary: 'Optimal provider selection integrates evidence-based assessment of clinical competence with interpersonal factors, insurance considerations, and alignment with patient values and preferences.',
      explanation: `## Advanced Provider Selection

### Quality Metrics and Measurement

**Structure Measures:**
- Board certification status
- Fellowship training
- Hospital affiliations
- Academic appointments
- Practice accreditation (PCMH, etc.)

**Process Measures:**
- Adherence to clinical guidelines
- Preventive care screening rates
- Appropriate use of testing
- Prescribing practices
- Documentation quality

**Outcome Measures:**
- Clinical outcomes (mortality, complications)
- Patient-reported outcomes
- Functional status
- Quality of life
- Patient experience scores

**Value:**
- Quality / Cost
- High-value providers achieve good outcomes at reasonable cost
- Look for providers avoiding low-value care

### Professional Background Evaluation

**Training Pathways:**
- **MD vs DO**: Equivalent training; DOs receive additional osteopathic manipulative medicine training
- **US vs International Medical Graduates (IMG)**: Both must complete US residency training and pass same licensing exams
- **Residency Program Quality**: Consider program reputation, case volume, research output

**Academic Affiliations:**
- Academic medical centers: Often associated with research, teaching hospitals, subspecialists
- Community-based practices: May offer more personalized care, closer to home
- Each model has advantages; depends on patient needs

**Research and Publications:**
- May indicate depth of knowledge in specific area
- Suggests engagement with current evidence
- Not essential for good clinical care
- May influence approach (evidence-based vs pragmatic)

### Provider-Determined Factors

**Clinical Focus Areas:**
- Many generalists develop areas of expertise
- Examples: sports medicine within family medicine, women\'s health within internal medicine
- May influence referral patterns and care approach

**Care Team Composition:**
- Team-based care increasingly common
- May include NPs, PAs, nurses, pharmacists, social workers, care coordinators
- Clarify who you will see and for what purposes

**Panel Size and Accessibility:**
- Smaller panels may mean more availability
- Larger panels may offer more resources
- Ask about:
  - Same-day appointment availability
  - After-hours contact options
  - Response time to messages

### Patient-Provider Relationship Evidence

**Continuity of Care:**
- Associated with better outcomes
- Reduced hospitalizations
- Lower costs
- Higher satisfaction
- Builds trust and knowledge over time

**Relationship Quality:**
- Trust, respect, communication quality predict outcomes
- Particularly important for chronic conditions
- More important than provider demographics for most patients

**Concordance:**
- Demographic similarity (race, gender, language)
- Can improve communication and trust
- Not required for good relationship
- Many successful cross-concordant relationships

### System-Level Considerations

**Integration:**
- Integrated systems may offer:
  - Shared medical records
  - Coordinated specialty care
  - Standardized processes
  - Cost transparency

**Independent Practices:**
- May offer:
  - More flexibility
  - Direct physician control
  - Potentially less bureaucracy
  - Varying quality

**Employed vs Independent Physicians:**
- Employed: Increasingly common, may have productivity pressures
- Independent: More autonomy, may face more administrative burden

### Insurance and Cost Considerations

**Network Design:**
- Narrow networks: Lower premiums, fewer options
- Broad networks: Higher premiums, more options
- Tiered networks: Different costs for different providers

**Quality Tiering:**
- Some plans designate high-performing providers
- May offer lower out-of-pocket costs
- Quality metrics vary and may not reflect patient experience

**High-Deductible Plans:**
- More patient cost-sharing
- Consider price transparency
- Ask about costs before scheduling tests/procedures
- Negotiate when possible

**Direct Primary Care:**
- Monthly subscription model
- No insurance for primary care services
- Enhanced access, longer visits
- May combine with high-deductible plan for catastrophic coverage

### Special Considerations

**Second Opinions:**
- Reasonable for:
  - Surgical recommendations
  - Serious or life-altering diagnoses
  - Expensive or risky treatments
  - Uncertainty about diagnosis
- Often covered by insurance for certain conditions

**Changing Providers:**
- Your right as a patient
- May need to provide reason for some insurance
- Records transfer between providers
- No need to feel guilty about switching`,
      keyTerms: [
        { term: 'patient-centered medical home (PCMH)', definition: 'Care delivery model emphasizing coordinated, comprehensive, patient-centered primary care' },
        { term: 'continuity of care', definition: 'Degree of coherence and connectedness over time in healthcare delivery' },
        { term: 'concordance', definition: 'Degree of demographic or cultural similarity between patient and provider' },
        { term: 'high-value care', definition: 'Healthcare interventions where benefits outweigh harms and costs' },
        { term: 'low-value care', definition: 'Interventions with little benefit relative to harms and costs' },
      ],
      clinicalNotes: `When helping patients select providers:
1. Ask about priorities (communication style, expertise, location, cost)
2. Verify insurance participation before first visit
3. Consider mental health needs - PCPs vary in comfort treating mental health
4. For patients with complex conditions, look for clinicians with panel time for complex care
5. Consider referral patterns - which specialists do they use?
6. Balance evidence-based metrics with interpersonal factors`,
      patientCounselingPoints: [
        'When considering a specialist, ask about their experience with your specific condition',
        'For planned procedures, ask about surgical volume and outcomes',
        'Consider whether a teaching hospital (academic center) is appropriate for your needs',
        'If you have a complex condition, a specialist who sees many similar patients may be preferable',
        'For routine primary care, convenience and relationship may matter more than prestige',
      ],
    },
    5: {
      level: 5,
      summary: 'Healthcare provider selection requires synthesizing clinical expertise metrics, interpersonal effectiveness, system integration, and patient preferences while navigating insurance constraints and professional practice patterns.',
      explanation: `## Provider Selection: Clinical Perspective

### Evidence-Based Provider Selection

**Quality Assessment Tools:**
- **Public Reporting:**
  - Physician Compare (CMS)
  - Hospital Compare (CMS)
  - State report cards
  - Specialty society public reporting
  - Limitations: Risk adjustment, timeliness, outcome vs process measures

- **Professional Recognition:**
  - Castle Connolly, Best Doctors, etc.
  - Peer-nominated but not validated
  - May reflect referral networks more than quality
  - Use with caution

- **Patient Satisfaction:**
  - CAHPS (Consumer Assessment of Healthcare Providers and Systems)
  - Press Ganey, NRC Health
  - Correlates modestly with clinical quality
  - Important for patient experience

**Outcome Measurement Challenges:**
- Risk adjustment: Accounting for patient complexity
- Sample size: Individual providers may have too few cases for meaningful comparison
- Attribution: Which provider is responsible for outcomes in team-based care?
- Lag time: Outcomes may not be available until years later

### Advanced Credential Evaluation

**Board Certification Details:**
- **Time-Limited vs Lifetime:**
  - All certifications now time-limited (10 years initially)
  - MOC (Maintenance of Certification) required
  - Some controversy about MOC validity

- **Subspecialty Certification:**
  - Requires fellowship training
  - Separate board examination
  - Examples: interventional cardiology, hematology/oncology

- **Focused Practice Designation:**
  - Newer pathway for specialized skills within general practice
  - Examples: hospice and palliative medicine within IM or FM

**Training Program Quality Indicators:**
- ACGME accreditation status
- Board pass rates
- Fellow placement (for residencies)
- Research output
- Case mix and volume

**Clinical Expertise Indicators:**
- Volume-outcome relationship well-established for procedures
- Annual case volume targets exist for many procedures
- Complex case experience
- Use of evidence-based approaches
- Participation in research or trials

### Relationship to Healthcare Systems

**Employment Models:**
- **Hospital-employed:**
  - Increasingly common
  - May have productivity targets (RVU thresholds)
  - May have restrictions on referrals
  - System-level quality initiatives

- **Independent Practice:**
  - Declining due to financial pressures
  - Greater autonomy
  - May have limited resources
  - Patient may bear more financial risk (practice closure)

- **Employed vs Professional Services:**
  - Some hospital services contracted to private groups
  - Affects care coordination and liability
  - Patients may not know the difference

**ACO and Value-Based Arrangements:**
- Providers share financial responsibility for outcomes
- May offer additional coordination services
- Referral may be directed within network
- Patient may benefit from lower costs, better coordination

### Interpersonal Effectiveness

**Communication Skills:**
- Teach-back associated with better outcomes
- Shared decision-making improves satisfaction and adherence
- Empathy measurable and associated with better outcomes
- Can be assessed during consultation

**Implicit Bias:**
- Unconscious preferences affect clinical decisions
- Affects referral patterns, pain management, communication
- Patients should feel comfortable discussing cultural needs
- Diversity in healthcare workforce important

**Cultural Humility:**
- Lifelong commitment to self-evaluation and self-critique
- Reducing power imbalances
- Advocating with rather than for patients
- Important for all patient-provider relationships

### Practical Considerations for Patients

**Accessibility:**
- **Appointment Availability:**
  - Same-day access
  - After-hours availability
  - Weekend hours
  - Telehealth options

- **Wait Times:**
  - For new patient appointment
  - In waiting room
  - For return calls
  - For test results

**Care Coordination:**
- **Electronic Health Record:**
  - Patient portal availability
  - Test result access
  - Secure messaging
  - Appointment scheduling

- **Care Team:**
  - Who will you see for routine visits?
  - Who covers when your doctor is unavailable?
  - How is urgent care handled?

**Cost Considerations:**
- Prior authorization requirements
- Referral requirements
- In-network lab/radiology facilities
- Generic prescribing habits
- Cost-conscious approach to testing

### When to Refer for Specialist Input

**Indications for Specialist Referral:**
1. Diagnostic uncertainty after appropriate workup
2. Condition beyond PCP scope of practice
3. Need for specialized procedures
4. Patient request for second opinion
5. Complex or atypical presentations
6. Inadequate response to initial treatment

**Co-Management Models:**
- PCP manages general health
- Specialist manages specific condition
- Clear communication about roles
- Shared decision-making about treatments

### Red Flags Reconsideration

**Warning Signs:**
- Refusal to consider second opinion
- Dismissive of patient concerns
- Inadequate explanation for treatments
- Defensive when asked questions
- Unusual financial arrangements
- Discouraging outside information gathering

**Clinical Reality:**
- Time pressures in healthcare
- Documentation burdens
- Administrative requirements
- May contribute to perceptions of rushing
- Open discussion of constraints can help

### System Navigation Resources

**Patient Advocates:**
- Hospital-based advocates
- Independent patient advocates
- Can help with:
  - Understanding diagnoses
  - Preparing for appointments
  - Navigating insurance
  - Finding appropriate providers

**Ombudsman Programs:**
- Available through many healthcare organizations
- Help resolve concerns
- Mediate disputes
- Independent of clinical care

**Professional Organizations:**
- Many have patient referral services
- Example: American College of Physicians "Find a Physician"
- Usually requires board certification and good standing`,
      keyTerms: [
        { term: 'RVU', definition: 'Relative Value Unit - measure of work used for Medicare reimbursement; productivity metric in employed settings' },
        { term: 'ACGME', definition: 'Accreditation Council for Graduate Medical Education - organization accrediting residency and fellowship programs' },
        { term: 'CAHPS', definition: 'Consumer Assessment of Healthcare Providers and Systems - standardized patient experience surveys' },
        { term: 'MOC', definition: 'Maintenance of Certification - ongoing requirements to maintain board certification through continuing education and assessment' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinician and patient work together to make decisions based on evidence, risks, benefits, and patient preferences' },
        { term: 'implicit bias', definition: 'Unconscious attitudes or stereotypes that affect understanding, actions, and decisions' },
      ],
      clinicalNotes: `From a clinical perspective, help patients select providers by:
1. Clarifying their priorities: access, expertise, communication, cost
2. Verifying board certification and appropriate training
3. Considering the nature of the health problem: routine vs complex
4. Assessing health system factors: which specialists are available, what are the referral patterns
5. Discussing expectations for care: who will they see, how is communication handled
6. Recognizing when the current relationship isn't working and facilitating transition

Remember: The best provider for an individual depends on clinical needs, personal preferences, and practical considerations.`,
    },
  },

  media: [
    {
      id: 'provider-selection-checklist',
      type: 'diagram',
      filename: 'provider-selection-checklist.svg',
      title: 'Provider Selection Checklist',
      description: 'Interactive checklist for evaluating potential healthcare providers',
    },
  ],

  citations: [
    {
      id: 'abms-certification-matters',
      type: 'website',
      title: 'Is Your Doctor Board Certified?',
      source: 'American Board of Medical Specialties',
      url: 'https://www.certificationmatters.org/',
    },
    {
      id: 'ahrq-talk-to-your-doctor',
      type: 'website',
      title: 'Questions Are the Answer',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/questionsaretheanswer/index.html',
    },
    {
      id: ' Choosing Wisely',
      type: 'website',
      title: 'Choosing Wisely: Avoiding Unnecessary Care',
      source: 'American Board of Internal Medicine Foundation',
      url: 'http://www.choosingwisely.org',
    },
  ],

  crossReferences: [
    { targetId: 'topic-healthcare-system-basics', targetType: 'topic', relationship: 'related', label: 'Healthcare System Basics' },
    { targetId: 'topic-appointments', targetType: 'topic', relationship: 'related', label: 'Appointments and Preparation' },
    { targetId: 'topic-second-opinions', targetType: 'topic', relationship: 'related', label: 'Getting a Second Opinion' },
  ],

  tags: {
    systems: ['healthcare-navigation'],
    topics: ['provider selection', 'primary care', 'specialists', 'credentialing'],
    keywords: ['finding a doctor', 'choosing a specialist', 'board certification', 'in-network'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default findingProvidersContent;
