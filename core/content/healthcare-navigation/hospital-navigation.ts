/**
 * Hospital Navigation - Comprehensive Educational Content
 *
 * Guides patients through inpatient hospital care, understanding hospital
* staff roles, what to expect during a hospital stay, and discharge planning.
 */

import { EducationalContent } from '../types';

export const hospitalNavigationContent: EducationalContent = {
  id: 'topic-hospital-navigation',
  type: 'topic',
  name: 'Hospital Navigation and Inpatient Care',
  alternateNames: ['Navigating the Hospital', 'Hospital Stay Guide', 'Inpatient Care'],

  levels: {
    1: {
      level: 1,
      summary: 'Going to the hospital can feel scary. Knowing who the people are and what to expect can make your hospital stay easier and less frightening.',
      explanation: `A hospital stay can feel overwhelming, but understanding what happens and who helps you can make it less scary. Let's learn about hospitals together.

**What Is a Hospital Stay?**

**Inpatient Care:**
- When you stay overnight in the hospital
- Doctors and nurses watch over you day and night
- You sleep in a hospital bed
- You get meals and medicine there

**Why People Stay in the Hospital:**
- After having surgery
- Very serious illness
- Need special tests or treatments
- Need close watching by doctors and nurses

**Who Takes Care of You?**

**Doctors:**
- **Attending doctor**: The main doctor in charge of your care
- **Hospitalist**: A doctor who only works in the hospital
- **Residents**: Doctors learning to be specialists (like students)
- **Specialists**: Doctors who are experts in one area

**Nurses:**
- Take your vital signs (blood pressure, temperature)
- Give you your medicine
- Help you feel comfortable
- Teach you about taking care of yourself

**Other Helpers:**
- **CNAs/Nurse aides**: Help with things like bathing and dressing
- **Phlebotomists**: Draw your blood for tests
- **Respiratory therapists**: Help with breathing treatments
- **Physical therapists**: Help you move and get stronger
- **Social workers**: Help with things like going home and getting help
- **Chaplains**: Provide spiritual support

**What Happens During Your Stay?**

**When You Arrive:**
- You check in at the front desk
- You get a bracelet with your name on it
- You go to your room
- A nurse asks you questions about your health

**During Your Stay:**
- Doctors visit in the morning and sometimes more
- Nurses check on you often
- You may have tests (X-rays, blood tests)
- You get medicine at set times
- You eat meals in your room
- Family and friends can visit

**Going Home (Discharge):**
- Your doctor says you are well enough to leave
- You get instructions for taking care of yourself at home
- You get prescriptions for medicines
- Someone explains what to do and who to call if you need help

**Tips for Your Hospital Stay:**

1. **Wear your hospital bracelet** - It tells staff who you are
2. **Ask questions** - "What is that for?" or "What will happen next?"
3. **Tell someone if you are in pain** - They want to help you feel better
4. **Know your medicines** - Ask what each pill is for
5. **Have someone with you** - A family member or friend can help

**Remember:**
Everyone at the hospital is there to help you get better. Don't be afraid to speak up if you need something!`,
      keyTerms: [
        { term: 'inpatient', definition: 'When you stay overnight in the hospital for care' },
        { term: 'admission', definition: 'When you are checked into the hospital to stay' },
        { term: 'discharge', definition: 'When you leave the hospital to go home' },
        { term: 'attending doctor', definition: 'The main doctor in charge of your care' },
        { term: 'vital signs', definition: 'Measurements like blood pressure, heart rate, and temperature' },
      ],
      analogies: [
        'A hospital stay is like staying at a hotel where the staff are all healthcare helpers instead of hotel workers.',
        'Think of your hospital care team like a sports team - everyone has a different position but they all work together to help you win.',
      ],
      examples: [
        'You have surgery on your appendix. You stay in the hospital for 2 days so nurses can watch you and help you recover.',
        'You have very bad pneumonia. You stay in the hospital to get antibiotics through an IV.',
        'You have a baby. You stay in the hospital for a day or two so doctors and nurses can make sure you and the baby are healthy.',
      ],
      patientCounselingPoints: [
        'Write down questions as you think of them so you don\'t forget to ask',
        'Have a family member or friend with you during the day if possible',
        'Keep your phone charger with you',
        'Bring things from home that make you comfortable (photos, pillow)',
        'Ask everyone who comes in your room to wash their hands',
      ],
    },
    2: {
      level: 2,
      summary: 'Hospital stays involve a multidisciplinary team of providers working together to deliver acute care. Understanding hospital structure, staff roles, and the discharge process helps patients navigate inpatient care effectively.',
      explanation: `## Navigating a Hospital Stay

Being admitted to the hospital can be an overwhelming experience. Understanding how hospitals work and who takes care of you can help you feel more in control during your stay.

## Hospital Admission

**Admission Process:**

**Emergency Admission:**
- Through the emergency department
- For urgent or life-threatening conditions
- Admission decision made by emergency physician
- Transfer to inpatient bed when available

**Elective Admission:**
- Planned in advance
- For scheduled procedures or treatments
- Pre-admission testing and preparation
- Scheduled admission date

**What to Expect:**
- Admitting paperwork and consent forms
- Hospital identification bracelet (wear at all times)
- Room assignment (private or semi-private)
- Initial nursing assessment
- Medication reconciliation (list of current medications)
- Admission orders from physician

## Your Care Team

**Physicians:**

**Attending Physician:**
- Main doctor responsible for your care
- Coordinates all specialists
- Makes final treatment decisions
- Typically sees you daily

**Hospitalist:**
- Doctor who specializes in hospital medicine
- Manages care for hospitalized patients
- Does not have a clinic practice
- Coordinates with your regular doctor

**Specialists:**
- Consulted for specific problems (heart, kidney, infectious disease)
- Provide recommendations for their area of expertise
- May see you daily or less frequently

**Residents and Fellows:**
- Doctors completing specialty training
- Work under attending supervision
- May participate in your care (teaching hospitals)
- Can explain things and answer questions

**Nurses:**

**Registered Nurse (RN):**
- Primary nurse at your bedside
- Administers medications and treatments
- Monitors your condition
- Educates you and your family
- Coordinates with your care team

**Nurse Manager/Charge Nurse:**
- Supervises the nursing unit
- Addresses concerns about nursing care
- Manages staffing and assignments

**Nursing Assistants (CNA/Tech):**
- Help with daily activities (bathing, dressing)
- Take vital signs
- Assist with walking and mobility
- Answer call lights

**Other Team Members:**

**Pharmacist:**
- Reviews your medications
- Prepares IV and oral medications
- Monitors for drug interactions
- Educates about new medications

**Physical Therapist (PT):**
- Helps with mobility, strength, walking
- Assesses safety for going home
- Recommends equipment if needed

**Occupational Therapist (OT):**
- Helps with daily activities (bathing, dressing)
- Assess home safety
- Recommends adaptive equipment

**Respiratory Therapist:**
- Manages breathing treatments
- Operates ventilators if needed
- Performs pulmonary function tests
- Educates about lung health

**Social Worker/Case Manager:**
- Helps with discharge planning
- Arranges services and equipment for home
- Assists with insurance issues
- Provides emotional support and resources

**Dietitian:**
- Assesses nutritional needs
- Recommends appropriate diet
- Educates about special diets

**Chaplain:**
- Provides spiritual support
- Coordinates religious services
- Supports families during difficult times

**Phlebotomist/Lab Tech:**
- Draws blood samples
- Collects other specimens

## Typical Hospital Day

**Morning:**
- Vital signs checked frequently
- Blood draws (usually early morning)
- Breakfast
- Physician team visits (often 7-11 AM)
- Rounds - discussion of your progress

**Afternoon:**
- Lunch
- Treatments and therapies
- Tests or procedures
- Visiting hours often more flexible

**Evening:**
- Dinner
- Medications
- Shift change (nurses change at 7 PM or 11 PM)
- Quiet time for rest

**Night:**
- Vital signs checked while you sleep
- Medications scheduled
- Fewer activities to promote rest

## Understanding Your Care

**Orders:**
- Everything that happens in hospital starts with an order
- Doctors write orders for medications, tests, treatments, diet
- Nurses carry out the orders

**Tests and Procedures:**
- May be performed in your room or you may be transported
- Ask why test is needed and what it will show
- Ask when results will be available
- You have right to refuse tests (discuss with doctor first)

**Medications:**
- Administered on schedule
- Ask what each medication is for
- Report any side effects
- Let nurse know if you think you missed a dose

**Pain Management:**
- Pain is assessed regularly
- Pain scale 0-10 (0 = no pain, 10 = worst pain)
- Tell your nurse if you are in pain
- Medications can be adjusted
- Non-drug options also available

## Patient Rights and Responsibilities

**Your Rights:**
- Respectful care
- Privacy and confidentiality
- Information about your diagnosis and treatment
- Participate in decisions about your care
- Refuse treatment (after understanding consequences)
- Advance directives respected
- Visitors (with some restrictions)
- Voice complaints without fear of retaliation

**Your Responsibilities:**
- Provide accurate health information
- Ask questions when you don't understand
- Follow treatment plan (or discuss concerns)
- Respect hospital staff and other patients
- Follow hospital rules (smoking, visiting hours, etc.)
- Pay bills or arrange payment

## Discharge Planning

**Discharge Process:**
- Starts at admission (especially for anticipated long stay)
- Case manager/social worker coordinates
- Addresses:
  - Where you will go (home, facility)
  - What help you will need
  - Equipment needs (walker, oxygen)
  - Medication changes
  - Follow-up appointments

**Leaving the Hospital:**
- Discharge instructions reviewed with you
- Prescriptions provided
- Follow-up appointments scheduled
- Equipment arranged
- Transportation planned

**Understanding Discharge Instructions:**
- Activity restrictions
- Wound care if applicable
- New medications or medication changes
- Symptoms to watch for
- Who to call with problems
- Follow-up appointments

**Against Medical Advice (AMA):**
- You have right to leave even if doctor recommends staying
- Risks explained
- May affect insurance coverage
- Should be avoided unless absolutely necessary

## Tips for a Successful Hospital Stay

**Safety:**
- Make sure staff check your ID bracelet before giving medications
- Ask everyone to wash their hands
- Keep call light within reach
- Wear nonslip socks when walking
- Have someone help you the first time you get up

**Communication:**
- Choose one spokesperson for family updates
- Write down questions as they occur
- Ask for explanations you can understand
- Repeat back what you heard to confirm understanding

**Comfort:**
- Bring personal items (photos, pillow, robe)
- Bring entertainment (books, tablet, magazines)
- Bring phone charger (long cord)
- Bring toiletries
- Eye mask and earplugs for sleeping

**Advocacy:**
- Have a family member or friend with you during day
- They can ask questions, remember information
- They can advocate for you if you're unable to

## Common Hospital Situations

**Shared Room:**
- Respect roommate's privacy and need for rest
- Use headphones for audio
- Keep conversations quiet
- Limit visitors

**Tests Away from Room:**
- You may be transported to radiology, procedures
- Staff will explain where you're going
- You may wait for your turn
- Ask when you'll return to your room`,
      keyTerms: [
        { term: 'admission', definition: 'Process of entering the hospital for inpatient care' },
        { term: 'discharge', definition: 'Formal release from hospital to return home or transfer to another facility' },
        { term: 'hospitalist', definition: 'Physician who specializes in caring for hospitalized patients' },
        { term: 'rounds', definition: 'Daily visits by the medical team to assess and discuss patient care' },
        { term: 'vital signs', definition: 'Measurements of basic body functions: blood pressure, heart rate, respiratory rate, temperature, oxygen' },
        { term: 'discharge planning', definition: 'Process of preparing for leaving hospital and arranging continued care' },
        { term: 'against medical advice', definition: 'Leaving the hospital before the treating physician recommends discharge' },
      ],
      analogies: [
        'Hospital rounds are like morning meetings where your team discusses your progress and plans for the day.',
        'Think of your care team like an orchestra - many different players working together under one conductor.',
      ],
      patientCounselingPoints: [
        'Designate one family member as the main contact for medical updates',
        'Keep a notepad to write down questions and answers',
        'Ask your nurse when the doctor typically rounds so you can be ready with questions',
        'Don\'t be afraid to ask staff to explain things in plain language',
        'Have someone with you during discharge instructions - it\'s a lot of information',
      ],
    },
    3: {
      level: 3,
      summary: 'Inpatient hospital care involves complex systems of multidisciplinary providers, coordinated through structured processes including admission, daily rounds, testing, treatment, and discharge planning.',
      explanation: `## Hospital Systems and Care Delivery

### Hospital Organization

**Inpatient Units:**
- **Medical/Surgical**: General care for most patients
- **ICU (Intensive Care Unit)**: For critically ill patients, higher nurse-to-patient ratio, advanced monitoring
- **Step-down/Intermediate Care**: For patients improving but still need close monitoring
- **Specialty Units**: Cardiac, neurology, orthopedics, oncology, etc.
- **Obstetrics**: Labor and delivery, postpartum, nursery
- **Pediatrics**: Specialized care for children

**Geographic Units:**
- **East, West, North, South, etc.**: Common unit names
- **Numbered units**: 3 East, 4 South
- **Specialty names**: Cardiac Care Unit, Dialysis Unit
- Important for visitors to know unit location

### Admission Process

**Types of Admission:**

1. **Emergency Admission:**
   - From emergency department
   - Requires admission order from physician
   - Bed management assigns bed based on acuity and bed availability

2. **Elective Admission:**
   - Scheduled in advance
   - Pre-admission testing may be required
   - Direct admission or through same-day surgery

3. **Observation Status:**
   - Short stay (usually <48 hours)
   - Often for determination if admission needed
   - Different insurance coverage than inpatient
   - May be surprised by out-of-pocket costs

**Admission Assessment:**
- Nursing admission assessment
- Medication reconciliation
- Allergy verification
- Fall risk assessment
- Skin assessment (pressure ulcer risk)
- Advance directive status

**Orders:**
- Admission orders specify:
  - Diet (NPO, regular, low sodium, etc.)
  - Activity (bed rest, ad lib, up with assistance)
  - Medications
  - Monitoring (telemetry, pulse oximetry)
  - Nursing care
  - Consultations
  - Diagnostics

### Daily Hospital Workflow

**Medication Administration:**
- Scheduled times (q6h, q8h, q12h, etc.)
- PRN (as needed) medications
- Scheduled versus PRN distinction
- Timing around meals and procedures
- IV medications vs oral

**Vital Signs Monitoring:**
- Frequency based on condition (q4h, q8h, etc.)
- More frequent in ICU or unstable patients
- Includes: BP, HR, RR, Temp, SpO2, pain score
- Nursing staff documents

**Rounds:**

**Morning Rounds:**
- Multidisciplinary team: physicians, nurses, pharmacist, case manager, sometimes PT/OT
- Teaching hospitals: attending, residents, fellows, medical students
- Discussion of:
  - Overnight events
  - Current status
  - Assessment and plan
  - Discharge planning
- Family presence during rounds varies by institution

**Intensivist Rounds (ICU):**
- Daily review of all ICU patients
- Multidisciplinary
- Discuss: ventilator settings, sedation, hemodynamics, etc.
- Family conference for significant updates

**Nursing Shift Change:**
- Report at bedside (bedside shift report)
- Important information exchange
- Opportunity for patient/family input
- Typically 7 AM, 3 PM, 11 PM or 7 AM/7 PM

### Hospital Providers in Detail

**Physicians:**

**Hospital Medicine:**
- Hospitalist: MD/DO trained in internal medicine or family medicine
- Focus on inpatient care
- No outpatient practice
- Responsible for:
  - Admission management
  - Daily care
  - Discharge planning
  - Consultation coordination

**Specialty Consultation:**
- Consulted for expertise in organ system or disease
- Provide recommendations
- May "co-manage" with primary team
- Common consultants: cardiology, nephrology, infectious disease, GI, neurology

**Proceduralists:**
- Surgeons, interventional cardiologists, gastroenterologists
- Perform procedures (surgery, catheterization, endoscopy)
- Follow patients post-procedure
- Often write daily orders

**Housestaff (Teaching Hospitals):**
- **Intern** (PGY-1): First year resident
- **Resident** (PGY-2+): Completing specialty training
- **Fellow**: Subspecialty training
- **Attending**: Supervising physician, ultimately responsible
- Hierarchy with graduated responsibility

**Nursing:**
- **Primary nurse**: Assigned to you for the shift
- **Team nursing**: RN delegates to LPN/CNA
- **Patient ratios**: Vary by unit and state regulations
- **Shift lengths**: Typically 8 or 12 hours

### Diagnostics and Treatments

**Common Hospital Tests:**
- **Laboratory**: CBC, BMP, cardiac enzymes, blood cultures, etc.
- **Imaging**: X-ray, CT, MRI, ultrasound
- **Cardiac**: ECG, echocardiogram, stress test
- **Pulmonary**: Chest X-ray, ABG, pulmonary function tests
- **Procedures**: Biopsy, lumbar puncture, paracentesis, thoracentesis

**Treatment Modalities:**
- **IV therapy**: Fluids, medications, blood products
- **Oxygen**: Nasal cannula, face mask, non-rebreather, mechanical ventilation
- **Medications**: Antibiotics, pain medications, etc.
- **Therapies**: Respiratory treatments, physical therapy, occupational therapy

### Discharge Planning

**Components:**
- **Medical stability**: Ready for discharge level of care
- **Discharge location**: Home, SNF, rehab, LTC
- **Medication reconciliation**: Hospital medications vs home
- **Equipment needs**: Walker, wheelchair, oxygen, hospital bed
- **Services**: Home health, visiting nurse, PT/OT at home
- **Follow-up**: Appointments with primary care and specialists
- **Education**: Diagnosis, treatments, warning signs, self-care

**Post-Acute Care Settings:**
- **Home**: With or without home health services
- **Skilled Nursing Facility (SNF)**: For subacute rehab, IV antibiotics, wound care
- **Inpatient Rehabilitation Facility (IRF)**: Intensive therapy (3 hours/day)
- **Long-term Acute Care Hospital (LTACH)**: Prolonged ventilation, complex medical needs
- **Long-term Care (LTC)**: Nursing home for custodial care

**Discharge Summary:**
- Prepared by discharging physician
- Sent to primary care provider and specialists
- Includes:
  - Reason for admission
  - Hospital course
  - Discharge medications
  - Discharge diagnoses
  - Follow-up arrangements
  - Instructions

### Hospital Quality and Safety

**Core Measures:**
- Evidence-based practices
- Publicly reported
- Examples:
  - Pneumonia vaccination
  - Flu vaccination
  - Antibiotic timing before surgery
  - DVT prophylaxis
  - Catheter-associated infections

**Safety Initiatives:**
- **Fall prevention**: Risk assessment, bed alarms, non-skid socks
- **Pressure ulcer prevention**: Regular skin checks, turning schedule
- **Infection prevention**: Hand hygiene, isolation precautions
- **Medication safety**: Barcode scanning, allergy verification
- **Identification**: Two patient identifiers before any intervention

**Hospital Acquired Conditions (HACs):**
- Infections: CAUTI, CLABSI, surgical site infection
- Falls with injury
- Pressure ulcers
- DVT/PE
- Adverse drug events
- Hospitals penalized financially for HACs

### Patient Experience

**HCAHPS (Hospital Consumer Assessment of Healthcare Providers and Systems):**
- Survey of patient experience
- Publicly reported
- Affects hospital reimbursement
- Domains:
  - Communication with nurses
  - Communication with doctors
  - Responsiveness of staff
  - Pain management
  - Communication about medicines
  - Discharge information
  - Transition of care
  - Overall rating`,
      keyTerms: [
        { term: 'observation status', definition: 'Outpatient status requiring additional time to determine if admission is needed' },
        { term: 'telemetry', definition: 'Continuous cardiac monitoring' },
        { term: 'SNF', definition: 'Skilled Nursing Facility - provides subacute rehabilitation and medical care' },
        { term: 'IRF', definition: 'Inpatient Rehabilitation Facility - provides intensive rehabilitation therapy' },
        { term: 'LTACH', definition: 'Long-Term Acute Care Hospital - for patients requiring prolonged hospital-level care' },
        { term: 'HCAHPS', definition: 'Hospital survey measuring patient experience' },
        { term: 'core measures', definition: 'Evidence-based practices that hospitals are measured on publicly' },
      ],
      clinicalNotes: 'Communication and coordination are critical for safe hospital care. Patients and families who actively participate have better outcomes.',
      patientCounselingPoints: [
        'Understand your admission status (inpatient vs observation) - it affects your costs',
        'Identify your nurse and charge nurse for each shift',
        'Designate one family member to communicate with the medical team',
        'Participate in rounds if allowed - it\'s your opportunity to ask questions',
        'Start discharge planning early - especially if you\'ll need equipment or services',
        'Keep a list of your medications at home to share with hospital staff',
      ],
    },
    4: {
      level: 4,
      summary: 'Hospital care delivery involves complex systems including multidisciplinary teams, clinical pathways, quality metrics, and care transitions. Understanding these systems empowers patients to navigate effectively.',
      explanation: `## Advanced Hospital Navigation

### Hospital Systems and Operations

**Organizational Structure:**
- **Governance**: Board of directors, executive leadership
- **Medical staff**: Organized by departments and specialties
- **Nursing leadership**: CNO, nurse managers, charge nurses
- **Quality and safety infrastructure**: Quality committees, safety programs

**Clinical Pathways and Protocols:**
- Standardized approaches to common conditions
- Evidence-based order sets
- Reduce variation in care
- Improve efficiency and outcomes
- Examples: sepsis pathway, stroke pathway, COPD pathway

**Electronic Health Record in Hospital:**
- Computerized physician order entry (CPOE)
- Medication barcoding
- Clinical decision support
- Documentation requirements
- Interoperability challenges

### Provider Roles and Expertise

**Hospital Medicine:**
- Rapidly growing specialty
- Hospitalists manage most general medicine patients
- Benefits: availability, coordination, efficiency
- Co-management with surgeons and specialists
- Hospitalist training includes: QI, safety, transitions of care

**Critical Care Medicine:**
- Intensivists: Critical care board-certified physicians
- ICU management, ventilator management
- Procedural expertise: lines, intubation
- Multidisciplinary rounds
- Family communication and goals of care discussions

**Specialty Consultation:**
- Triggered by specific needs or questions
- Co-management models
- Clear communication of consult question
- Recommendations vs primary team responsibility

### Discharge Planning and Transitions

**Transitional Care Risks:**
- Medication errors
- Test results pending at discharge
- Follow-up not scheduled
- Patient/caregiver not educated
- Discharge summaries not sent to outpatient providers

**Best Practices:**
- START planning at admission
- Medication reconciliation at each transition
- Patient and caregiver education
- Follow-up scheduled before discharge
- Pending test results communicated
- Discharge summary sent promptly

**Readmission Risk:**
- 30-day readmission rate publicly reported
- Penalties for excessive readmissions
- Risk factors: age, comorbidities, prior admissions, social determinants
- Prevention:
  - Early follow-up (within 7 days)
  - Medication reconciliation
  - Patient education
  - Home health services
  - Post-discharge calls

**Post-Acute Care Decision Making:**
- **SNF**: Skilled nursing needs (wound care, IV antibiotics, rehab)
- **IRF**: Intensive therapy needed (3 hours/day able to participate)
- **LTACH**: Prolonged mechanical ventilation, complex wound care
- **Home**: With or without home health, appropriate for stable patients

### Hospital Quality and Safety

**Quality Metrics:**
- **Process measures**: Did we do the right thing?
- **Outcome measures**: Did the patient get better?
- **Patient experience measures**: Was the patient satisfied?
- **Efficiency measures**: Cost and resource use

**Public Reporting:**
- Hospital Compare (CMS)
- State report cards
- Leapfrog Group
- Healthgrades
- Magazine rankings (US News, etc.)

**Hospital Safety Grade:**
- Letter grade (A-F) from Leapfrog
- Based on:
  - Infections
  - Errors
  - Accidents
  - Injuries
- Available publicly

**Serious Reportable Events:**
- Never events (wrong site surgery, etc.)
- Hospital-acquired conditions
- Sentinel events (Joint Commission)
- Root cause analysis required

### Hospital Acquired Conditions

**Prevention Strategies:**
- **CLABSI**: Bundled line insertion, maintenance
- **CAUTI**: Catheter avoidance, proper care, early removal
- **SSI**: Prophylactic antibiotics, appropriate hair removal, glucose control, normothermia
- **CDI**: Antibiotic stewardship, isolation precautions
- **VAP**: Elevation, sedation vacation, oral care

**Antibiotic Stewardship:**
- Right antibiotic, right dose, right duration
- De-escalation when possible
- Avoid treating colonization
- Culture-driven therapy
- Prevent resistance

**Anticoagulation Safety:**
- Indication, duration, monitoring
- VTE prophylaxis protocols
- Bleeding risk assessment
- Reversal agents available
- Patient education

### Patient and Family Engagement

**Bedside Shift Report:**
- Nurse-to-nurse report at bedside
- Patient and family included
- Opportunity for questions
- Improves communication and safety

**Patient and Family Advisory Councils:**
- Patients and families advise hospital leadership
- Quality improvement initiatives
- Policy development
- Patient education materials

**Open Notes:**
- Patients have access to visit notes
- Increases transparency
- May improve understanding
- Requires clinician adjustment

### Crisis Standards of Care

**Pandemic/Surge Response:**
- Triage protocols
- Resource allocation
- Crisis staffing
- Ethical frameworks
- Communication with families

**Code Status:**
- Full code: CPR, mechanical ventilation, etc.
- DNR: No CPR
- DNI: No intubation
- CMO: Comfort measures only
- Discussions should occur early for appropriate patients

### Costs and Insurance

**Hospital Billing:**
- Charges vs payments
- Uninsured patients pay highest rates
- Negotiated rates for insured
- Financial assistance policies

**Prior Authorization:**
- Required for some services
- Can delay discharge
- Case managers coordinate
- Denials can be appealed

**Observation vs Inpatient:**
- Medicare Part A vs Part B
- Different cost-sharing
- "Two midnight" rule
- Status affects post-acute coverage

### Evidence-Based Hospital Practices

**Enhanced Recovery After Surgery (ERAS):**
- Multimodal pain control
- Early ambulation
- Early feeding
- Reduced length of stay
- Improved outcomes

**Sepsis Bundles:**
- Early recognition (SIRS, qSOFA, SOFA)
- Lactate measurement
- Blood cultures before antibiotics
- Broad spectrum antibiotics
- Fluid resuscitation
- Vasopressors if needed

**Stroke Systems of Care:**
- Stroke team activation
- Rapid imaging
- tPA eligibility assessment
- Endovascular therapy for LVO
- Stroke unit admission
- Early rehabilitation

**Time-Sensitive Conditions:**
- STEMI: Door-to-balloon <90 min
- Stroke: Door-to-needle <60 min
- Sepsis: Antibiotics within 3 hours
- Trauma: Team activation, assessment`,
      keyTerms: [
        { term: 'clinical pathway', definition: 'Standardized plan of care for specific diagnoses or procedures' },
        { term: 'CPOE', definition: 'Computerized Physician Order Entry - electronic ordering system' },
        { term: 'CLABSI', definition: 'Central line-associated bloodstream infection' },
        { term: 'CAUTI', definition: 'Catheter-associated urinary tract infection' },
        { term: 'VAP', definition: 'Ventilator-associated pneumonia' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery - multimodal perioperative care protocol' },
        { term: 'SIRS', definition: 'Systemic Inflammatory Response Syndrome - criteria for sepsis screening' },
        { term: 'qSOFA', definition: 'quick SOFA - bedside criteria for sepsis screening' },
        { term: 'SOFA', definition: 'Sequential Organ Failure Assessment - sepsis severity scoring' },
      ],
      clinicalNotes: `Transitions of care are high-risk periods. Key safety strategies:
1. Medication reconciliation at every transition
2. Clear communication of pending tests
3. Follow-up scheduled before discharge
4. Discharge summary sent to outpatient providers
5. Patient and caregiver education
6. Post-discharge contact (phone, visit)`,
      patientCounselingPoints: [
        'Ask about your status (inpatient vs observation) - it affects your costs',
        'Request your discharge summary before leaving',
        'Confirm all follow-up appointments are scheduled before discharge',
        'Understand medication changes before discharge',
        'Know warning signs that should prompt return to hospital',
        'If your care team isn\'t communicating with each other, speak up',
      ],
    },
    5: {
      level: 5,
      summary: 'Hospital systems integrate complex multidisciplinary care through structured processes, quality frameworks, and transition protocols. Understanding these systems at the provider level enables effective care coordination.',
      explanation: `## Hospital Medicine: Systems-Based Practice

### Hospital Operations and Delivery Systems

**Value-Based Care in Hospitals:**
- Bundled payments (CJR, BPCI)
- Hospital Readmissions Reduction Program (HRRP)
- Hospital Value-Based Purchasing (VBP)
- Hospital-Acquired Condition (HAC) Reduction Program
- Shift from fee-for-service to value-based reimbursement

**Care Coordination Infrastructure:**
- Multidisciplinary rounds
- Case management and social work
- Discharge planning protocols
- Medication reconciliation at transitions
- Palliative care integration
- Ethics committee consultation

**Electronic Health Record Integration:**
- CPOE (Computerized Physician Order Entry)
- Clinical decision support systems
- Barcode medication administration
- Smart pumps (IV medication safety)
- Documentation burden and clinician wellness
- Interoperability challenges

### Hospitalist Practice

**Scope of Practice:**
- General medicine, co-management, consultative medicine
- Procedural skills vary (central lines, intubation, lumbar puncture)
- No longitudinal relationship (different model than outpatient)
- Handoffs critical (end of shift, on-call to day team)

**Co-Management Models:**
- Surgical co-management (orthopedics, neurosurgery, cardiac surgery)
- Subspecialty co-management (oncology, cardiology)
- Shared responsibility
- Improved outcomes shown in many settings

**Clinical Reasoning in Hospital:**
- Data-rich environment with frequent testing
- Diagnostic uncertainty common
- Time pressure
- Multiple comorbidities complicate presentation
- Importance of diagnostic time-outs

### Quality and Safety Science

**High-Reliability Organizations:**
- Preoccupation with failure
- Reluctance to simplify
- Sensitivity to operations
- Commitment to resilience
- Deference to expertise

**Just Culture:**
- Balance accountability and learning
- System design vs individual responsibility
- Support for second victims
- Reporting of near misses and errors

**Root Cause Analysis:**
- For sentinel events
- Fishbone diagrams
- Five whys
- Action planning and follow-up

**Lean/Six Sigma in Healthcare:**
- Reduce waste
- Improve flow
- Standardize work
- Reduce errors
- Improve patient and staff satisfaction

### Transitions of Care

**Risk Points:**
- Admission to hospital
- Between units (ICU to floor)
- Between providers (change of service)
- Discharge to home or facility
- Post-discharge period

**Medication Reconciliation:**
- At admission: Compare home meds to admission orders
- During stay: As medications change
- At discharge: Hospital meds vs discharge prescriptions
- Involve pharmacist when possible
- Communicate with outpatient providers

**Discharge Summary:**
- Should be completed before discharge
- Include: reason for admission, hospital course, discharge meds, follow-up
- Sent to PCP, specialists, post-acute facilities
- Critical for preventing readmission

**Post-Discharge Follow-Up:**
- Early follow-up (within 7 days) reduces readmission
- Phone calls within 48-72 hours
- Patient-centered medical home coordination
- Red flags requiring return to ED

### Critical Care Medicine

**ICU Organization:**
- Closed vs open models
- Intensivist coverage (24/7 vs daytime)
- Multidisciplinary rounds
- Protocols for common conditions (ARDS, sepsis, sedation)
- Family presence and communication

**Mechanical Ventilation:**
- Indications for intubation
- Ventilator modes: assist-control, SIMV, pressure support, APRV
- Lung-protective ventilation
- Daily sedation interruption and spontaneous breathing trials
- Weaning protocols
- Tracheostomy timing

**ICU Diagnostics:**
- Bedside ultrasound (POCUS)
- Echocardiography
- Bronchoscopy
- Continuous monitoring
- Lab monitoring frequency

**Goals of Care in ICU:**
- Early discussions about prognosis
- Code status conversations
- Time-limited trials
- Family meetings
- Palliative care integration
- Withdrawal of life support

### Procedural Safety

**Universal Protocol:**
- Pre-procedure verification
- Site marking
- Time out immediately before starting
- Prevents wrong-site, wrong-procedure, wrong-patient errors

**Procedural Sedation:**
- ASA classification
- Capnography monitoring
- Sedation scales
- Reversal agents available
- Airway management

**Surgical Safety Checklist:**
- Sign in (before anesthesia)
- Time out (before incision)
- Sign out (before OR departure)
- WHO Surgical Safety Checklist
- Improves communication and outcomes

### Hospital Ethics

**Common Dilemmas:**
- Capacity and decision-making
- End-of-life care
- Futility
- Resource allocation (especially in crisis)
- Conflicts between team and family

**Ethics Consultation:**
- Clarifies ethical issues
- Facilitates communication
- Recommends ethically appropriate course
- Supports clinicians and families

**Advance Care Planning:**
- Advance directives
- Proxy designation
- Goals of care discussions
- POLST/MOLST forms
- Documentation and communication

### Health System Science

**Social Determinants of Health:**
- Housing instability
- Food insecurity
- Transportation barriers
- Health literacy
- Social isolation
- Financial toxicity of illness

**Screening and Intervention:**
- Screen all patients
- Connect to resources
- Case management involvement
- Community partnerships
- Population health approaches

**Population Health:**
- Risk stratification
- Care management for high-risk patients
- Readmission prevention programs
- Palliative care integration
- Community paramedicine

### Hospital Finance and Operations

**Revenue Cycle:**
- Charges (master charge list)
- Payments (negotiated rates)
- Bad debt and charity care
- Denial management
- Prior authorization

**Cost Containment:**
- Length of stay management
- Resource utilization
- Avoidable days
- Supply chain management
- Staffing models

**Value Analysis:**
- Cost-benefit analysis of new technologies
- Standardization reduces costs
- Evidence-based purchasing
- Wasted care reduction

### Professional Development

**Clinical Excellence:**
- Evidence-based practice
- Lifelong learning
- MOC (Maintenance of Certification)
- Teaching and mentorship

**Leadership:**
- Quality improvement
- Change management
- Team building
- Conflict resolution

**Scholarship:**
- Research participation
- Quality improvement projects
- Publication and presentation
- Grant writing

### Future Directions

**Artificial Intelligence:**
- Clinical decision support
- Predictive analytics (deterioration, readmission, length of stay)
- Sepsis prediction
- Workflow optimization
- Documentation assistance

**Telehealth:**
- Specialist consultation to smaller hospitals
- Post-discharge follow-up
- ICU coverage (tele-ICU)
- Remote monitoring

**Hospital at Home:**
- Acute care provided at home
- For selected conditions (pneumonia, cellulitis, heart failure)
- Staffing, equipment, monitoring at home
- High patient satisfaction
- May reduce costs

**Hospital Design:**
- Single rooms (reduce infection, improve privacy)
- Family zones
- Healing environments
- Technology integration
- Standardization for safety`,
      keyTerms: [
        { term: 'HRRP', definition: 'Hospital Readmissions Reduction Program - Medicare program penalizing excessive readmissions' },
        { term: 'VBP', definition: 'Value-Based Purchasing - CMS program linking payment to quality performance' },
        { term: 'HAC', definition: 'Hospital-Acquired Condition - infections and complications acquired during hospitalization' },
        { term: 'root cause analysis', definition: 'Systematic method to identify underlying causes of problems' },
        { term: 'fishbone diagram', definition: 'Visual tool for root cause analysis (also called Ishikawa diagram)' },
        { term: 'CJR', definition: 'Comprehensive Care for Joint Replacement - bundled payment model' },
        { term: 'BPCI', definition: 'Bundled Payments for Care Improvement - CMS bundled payment initiative' },
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment - medical orders for end-of-life care' },
        { term: 'MOLST', definition: 'Medical Orders for Life-Sustaining Treatment - similar to POLST' },
        { term: 'POCUS', definition: 'Point of Care Ultrasound - bedside ultrasound performed by clinician' },
      ],
      clinicalNotes: `As hospital-based clinicians, we must:
1. Systematically approach transitions of care - high-risk for errors
2. Engage patients and families as partners in care
3. Practice effective handoffs (situation, background, assessment, recommendation)
4. Recognize limitations and request consultation appropriately
5. Address social determinants affecting admission and discharge
6. Integrate palliative care for appropriate patients early
7. Participate in quality improvement and safety initiatives
8. Practice cost-conscious, high-value care`,
    },
  },

  media: [
    {
      id: 'hospital-care-team',
      type: 'diagram',
      filename: 'hospital-care-team.svg',
      title: 'Hospital Care Team Roles',
      description: 'Visual guide to hospital staff roles and responsibilities',
    },
    {
      id: 'discharge-checklist',
      type: 'diagram',
      filename: 'discharge-checklist.svg',
      title: 'Hospital Discharge Checklist',
      description: 'Checklist for patients preparing to leave the hospital',
    },
  ],

  citations: [
    {
      id: 'aha-guide',
      type: 'website',
      title: 'Understanding Your Hospital Stay',
      source: 'American Hospital Association',
      url: 'https://www.aha.org',
    },
    {
      id: 'hospital-compare',
      type: 'website',
      title: 'Hospital Compare',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.medicare.gov/hospitalcompare',
    },
  ],

  crossReferences: [
    { targetId: 'topic-emergency-vs-urgent', targetType: 'topic', relationship: 'related', label: 'Emergency vs Urgent Care' },
    { targetId: 'topic-appointments', targetType: 'topic', relationship: 'related', label: 'Medical Appointments' },
  ],

  tags: {
    systems: ['healthcare-navigation'],
    topics: ['hospital care', 'inpatient', 'hospital staff', 'discharge planning'],
    keywords: ['hospital stay', 'hospitalist', 'discharge', 'observation status'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default hospitalNavigationContent;
