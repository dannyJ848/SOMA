/**
 * Healthcare System Navigation - Finding Your Way Through the Healthcare System
 *
 * Covers understanding healthcare settings, accessing care, coordinating between providers,
 * and effectively using healthcare resources.
 */

import { EducationalContent } from '../../types';

export const healthcareSystemNavigation: EducationalContent = {
  id: 'health-literacy-healthcare-system-navigation',
  type: 'concept',
  name: 'Healthcare System Navigation',
  alternateNames: ['Navigating Healthcare', 'Healthcare Access', 'Finding Healthcare Services'],

  levels: {
    1: {
      level: 1,
      summary: 'Learning how to find and use healthcare services helps you get the care you need when you need it.',
      explanation: `The healthcare system can be confusing. Here is how to find your way!

**Types of Healthcare Places:**

1. **Doctor's Office** - For checkups and everyday health problems
   - Also called: Primary care, family doctor, clinic

2. **Urgent Care** - For problems that need quick attention but are not emergencies
   - Open evenings and weekends
   - No appointment needed
   - Example: Bad cut, minor infection, flu

3. **Emergency Room (ER)** - For serious, life-threatening problems
   - Open 24 hours
   - Example: Chest pain, broken bones, trouble breathing

4. **Pharmacy** - Where you get medicines
   - Pharmacists can answer questions about your medicines

5. **Specialist** - A doctor who focuses on one part of the body or type of problem
   - Example: Heart doctor (cardiologist), skin doctor (dermatologist)

**When to Go Where:**

| Problem | Where to Go |
|---------|-------------|
| Checkup, cold, minor illness | Doctor's Office |
| Cut needing stitches, bad sprain | Urgent Care |
| Chest pain, severe bleeding | Emergency Room |
| Need medicine filled | Pharmacy |

**How to Get an Appointment:**

1. Call the office phone number
2. Tell them what you need
3. Ask for the soonest appointment
4. Write down the date, time, and address

**Questions to Ask When Making Appointments:**

- "Do you take my insurance?"
- "What should I bring?"
- "How long will it take?"
- "What is the cost?"

**Remember:** If you are not sure where to go, call your doctor's office and ask!`,
      keyTerms: [
        { term: 'primary care', definition: 'Your main doctor who you see for checkups and everyday health problems' },
        { term: 'urgent care', definition: 'A clinic for problems that need quick attention but are not emergencies' },
        { term: 'emergency room', definition: 'Part of the hospital open 24/7 for serious, life-threatening problems' },
        { term: 'specialist', definition: 'A doctor who focuses on one specific area of health' },
        { term: 'referral', definition: 'When your doctor sends you to see another doctor' },
      ],
      analogies: [
        'Think of your primary care doctor as your health coach - they help you with most things and send you to specialists when needed',
        'Urgent care is like quick service - you do not need an appointment for minor problems',
      ],
      examples: [
        'Maria has a bad cough - she calls her primary care doctor for an appointment',
        'John cuts his hand and needs stitches on Saturday - he goes to urgent care',
        'Susan has severe chest pain - she calls 911 or goes to the ER immediately',
      ],
      patientCounselingPoints: [
        'Save your doctor phone number in your phone',
        'Keep a list of your medicines with you',
        'Write down questions before your appointments',
        'Call your doctor first if you are not sure where to go for care',
      ],
    },
    2: {
      level: 2,
      summary: 'Healthcare system navigation involves understanding different care settings, knowing how to access services, coordinating care across providers, and using resources efficiently.',
      explanation: `## Healthcare Settings Overview

**Primary Care:**
- First point of contact
- Preventive care and screenings
- Chronic disease management
- Referrals to specialists
- Types: Family medicine, internal medicine, pediatrics

**Specialty Care:**
- Focused expertise
- Often requires referral
- Examples: Cardiology, orthopedics, dermatology
- May have longer wait times

**Urgent Care:**
- Walk-in for non-emergencies
- Extended hours
- Lower cost than ER
- Best for: Sprains, minor infections, cuts needing stitches

**Emergency Department:**
- Life-threatening emergencies
- Open 24/7
- Highest cost setting
- Conditions: Chest pain, stroke symptoms, severe injuries

**Hospital Services:**
- Inpatient care (overnight stays)
- Outpatient procedures (same-day)
- Imaging and laboratory services
- Rehabilitation services

**Community Health Resources:**
- Federally Qualified Health Centers (FQHCs)
- Free clinics
- Public health departments
- School-based health centers

## Accessing Care

**Getting Appointments:**
- Online scheduling
- Patient portals
- Phone scheduling
- Walk-in options

**When You Need a Referral:**
- Insurance may require referral for specialists
- Primary care coordinates referrals
- Obtain referral number before specialist visit

**Finding Providers:**
- Insurance provider directory
- Hospital websites
- Online reviews (with caution)
- Personal recommendations

## Care Coordination

**Your Role:**
- Keep updated medication list
- Bring records to new providers
- Communicate between providers
- Follow up on referrals and tests

**Medical Records:**
- Request copies from providers
- Patient portals often have records
- Bring records to new providers
- Keep personal health record

**Transitions of Care:**
- Hospital to home
- Provider to provider
- Important information often lost
- Ask questions and get written instructions

## Using Healthcare Efficiently

**Prepare for Visits:**
- List symptoms and questions
- Bring medication list
- Bring insurance information
- Arrive early for paperwork

**Understand Costs:**
- Call ahead about costs
- Ask about generic medications
- Know your insurance coverage
- Inquire about financial assistance

**After Visits:**
- Review instructions
- Fill prescriptions promptly
- Schedule follow-up appointments
- Contact office with questions

## Telehealth Options

**When Telehealth Works:**
- Follow-up visits
- Medication management
- Mental health visits
- Minor symptoms

**How to Use Telehealth:**
- Download required apps
- Test technology before visit
- Find quiet, private space
- Have medication list ready`,
      keyTerms: [
        { term: 'FQHC', definition: 'Federally Qualified Health Center; community-based clinics providing care regardless of ability to pay' },
        { term: 'patient portal', definition: 'Secure website to access medical records, schedule appointments, and message providers' },
        { term: 'care coordination', definition: 'Organizing patient care activities and sharing information among all participants' },
        { term: 'transition of care', definition: 'Movement of patient between healthcare settings or providers' },
        { term: 'telehealth', definition: 'Healthcare services provided remotely through video, phone, or messaging' },
      ],
      patientCounselingPoints: [
        'Use your patient portal to access records, schedule appointments, and message providers',
        'Keep an updated list of all medications, including over-the-counter and supplements',
        'Ask about telehealth options for appropriate visits',
        'Contact your primary care office before going to urgent care or ER when possible',
      ],
    },
    3: {
      level: 3,
      summary: 'Healthcare system navigation requires understanding health system structures, care delivery models, access barriers, and strategies for effective engagement across complex healthcare environments.',
      explanation: `## Healthcare System Structure

**Levels of Care:**
- **Primary care**: Prevention, common conditions, care coordination
- **Secondary care**: Specialists and hospital services
- **Tertiary care**: Complex specialized care
- **Quaternary care**: Highly specialized, experimental

**Healthcare Organizations:**
- **Integrated health systems**: Multiple services under one organization
- **Accountable Care Organizations (ACOs)**: Provider groups responsible for quality and costs
- **Patient-Centered Medical Homes (PCMH)**: Team-based primary care model
- **Independent practices**: Single or small group practices

**Payment Systems:**
- Fee-for-service: Payment per service
- Value-based care: Payment tied to outcomes
- Capitation: Fixed payment per patient
- Bundled payments: Single payment for episode

## Access and Barriers

**Common Barriers:**
- Insurance coverage gaps
- Provider availability
- Transportation
- Language and communication
- Health literacy
- Trust and cultural factors

**Safety Net Providers:**
- FQHCs serve all regardless of payment
- Free and charitable clinics
- Public hospitals
- Community health workers

**Navigating Access:**
- Understanding insurance network
- Prior authorization requirements
- Financial assistance programs
- Patient navigation services

## Care Coordination Challenges

**Fragmentation:**
- Multiple providers without communication
- Duplicative testing
- Conflicting recommendations
- Medication management complexity

**Coordination Strategies:**
- Designate care coordinator role
- Maintain personal health record
- Communicate actively between providers
- Use shared decision-making tools

**Technology for Coordination:**
- Health Information Exchange (HIE)
- Patient portals
- Personal health apps
- Medication management tools

## Transitions of Care

**High-Risk Transitions:**
- Hospital to home
- Hospital to skilled nursing
- Pediatric to adult care
- Provider to provider

**Best Practices:**
- Medication reconciliation
- Written discharge instructions
- Follow-up appointment before discharge
- Patient education and teach-back
- Warm handoffs between providers

**Patient Role:**
- Understand diagnoses and treatment plan
- Know warning signs requiring attention
- Have contact information for questions
- Schedule and attend follow-up

## Special Populations

**Elderly Patients:**
- Geriatric assessments
- Polypharmacy management
- Caregiver coordination
- Advance care planning

**Children and Adolescents:**
- Medical home model
- School-based services
- Transition to adult care
- Parent/guardian coordination

**Chronic Conditions:**
- Disease management programs
- Care management
- Self-management support
- Community resources

## Quality and Safety

**Understanding Quality:**
- Quality measures and reporting
- Hospital Compare, Physician Compare
- Accreditation (Joint Commission)
- Patient experience data

**Patient Safety:**
- Medication safety
- Fall prevention
- Infection prevention
- Speaking up about concerns

**Engaging in Safety:**
- Verify identity and procedures
- Question unfamiliar medications
- Report concerns
- Participate in error prevention`,
      keyTerms: [
        { term: 'Accountable Care Organization', definition: 'Group of providers sharing responsibility for quality and cost of care for defined population' },
        { term: 'Patient-Centered Medical Home', definition: 'Care delivery model emphasizing comprehensive, coordinated, patient-centered primary care' },
        { term: 'Health Information Exchange', definition: 'Electronic sharing of patient information among organizations' },
        { term: 'care transition', definition: 'Movement of patient between settings; high-risk period for errors' },
        { term: 'medication reconciliation', definition: 'Process of comparing patient medications across settings to avoid errors' },
      ],
      clinicalNotes: 'Proactively identify patients at risk for navigation difficulties. Provide navigation resources including patient navigators, social workers, and community health workers. Use standardized care transition protocols and ensure closed-loop communication.',
    },
    4: {
      level: 4,
      summary: 'Advanced healthcare navigation encompasses health system organization theory, policy implications for access, quality and safety frameworks, and leadership in improving navigation for vulnerable populations.',
      explanation: `## Health System Organization

**Theoretical Frameworks:**
- Donabedian: Structure, Process, Outcomes
- IOM Quality Aims: Safe, Effective, Patient-Centered, Timely, Efficient, Equitable
- Triple/Quadruple Aim: Better health, better care, lower cost, provider well-being

**System Complexity:**
- Multiple stakeholders with competing interests
- Regulatory environment
- Payment incentives and unintended consequences
- Information asymmetry

**Organizational Models:**
- Integrated delivery systems
- Clinically integrated networks
- Virtual care organizations
- Population health models

## Access and Equity

**Access Frameworks:**
- Andersen Behavioral Model: Predisposing, enabling, need factors
- Penchansky and Thomas: Availability, accessibility, accommodation, affordability, acceptability
- Levesque Framework: Approachability, acceptability, availability, affordability, appropriateness

**Disparities in Access:**
- Insurance coverage disparities
- Geographic distribution of providers
- Implicit bias affecting care
- Structural determinants

**Policy Levers:**
- Coverage expansion (ACA, Medicaid)
- Workforce distribution incentives
- Safety net funding
- Quality reporting and transparency

## Quality Improvement

**Quality Measurement:**
- Structure measures
- Process measures
- Outcome measures
- Balancing measures

**Improvement Science:**
- PDSA cycles
- Lean methodology
- Six Sigma
- Implementation science

**High-Reliability Organizations:**
- Preoccupation with failure
- Reluctance to simplify
- Sensitivity to operations
- Commitment to resilience
- Deference to expertise

## Patient Safety Science

**Safety Culture:**
- Just culture
- Psychological safety
- Reporting systems
- Learning from failure

**Human Factors:**
- Cognitive load
- Fatigue and burnout
- Communication failures
- Workarounds

**System Approaches:**
- Swiss cheese model
- Root cause analysis
- Failure mode effects analysis
- Proactive risk assessment

## Care Coordination Models

**Transitional Care Model:**
- Hospital-based APRNs
- Protocol-driven interventions
- Reduced readmissions
- Cost-effective

**Care Management:**
- Complex care management
- Disease-specific programs
- Population health management
- Risk stratification

**Community Health Workers:**
- Trust and cultural bridge
- Navigation support
- Social determinants
- Cost-effective

## Navigation for Vulnerable Populations

**Health Literacy Considerations:**
- Universal precautions approach
- Organizational health literacy
- Materials accessibility
- Communication accommodations

**Cultural Responsiveness:**
- Language access
- Cultural adaptation
- Community engagement
- Trust building

**Social Determinants:**
- Screening for social needs
- Referral to community resources
- Community partnerships
- Policy advocacy

## Technology and Navigation

**Digital Health Equity:**
- Broadband access
- Device access
- Digital literacy
- Culturally appropriate design

**Health IT:**
- EHR interoperability
- Patient-facing tools
- Population health analytics
- Artificial intelligence applications

**Telehealth:**
- Access expansion
- Appropriate use guidelines
- Quality assurance
- Reimbursement policies`,
      keyTerms: [
        { term: 'Triple Aim', definition: 'IHI framework: Improving patient experience, improving population health, reducing per capita cost' },
        { term: 'Donabedian model', definition: 'Quality framework examining structure (resources), process (care delivery), and outcomes' },
        { term: 'just culture', definition: 'Culture balancing accountability with system improvement; distinguishes human error from reckless behavior' },
        { term: 'root cause analysis', definition: 'Structured method for identifying underlying causes of adverse events' },
        { term: 'transitional care model', definition: 'Evidence-based model using APRNs to improve hospital-to-home transitions' },
      ],
      clinicalNotes: `System-level navigation improvement:
1. Implement standardized care transition protocols
2. Develop patient navigation programs
3. Address social determinants through screening and referral
4. Ensure language access services
5. Design patient-facing materials at appropriate literacy levels
6. Engage patients in quality improvement`,
    },
    5: {
      level: 5,
      summary: 'Expert-level healthcare navigation encompasses health systems engineering, policy analysis and advocacy, quality and safety leadership, and transformative approaches to creating navigable, equitable healthcare systems.',
      explanation: `## Health Systems Engineering

**Complex Adaptive Systems:**
- Emergence and self-organization
- Nonlinear dynamics
- Feedback loops
- Agent-based modeling

**Human-Centered Design:**
- User experience research
- Journey mapping
- Rapid prototyping
- Iterative improvement

**Systems Engineering:**
- Process mapping
- Failure mode analysis
- Simulation modeling
- Optimization

## Policy Analysis and Advocacy

**Policy Process:**
- Agenda setting
- Policy formulation
- Implementation
- Evaluation

**Stakeholder Analysis:**
- Interest mapping
- Power dynamics
- Coalition building
- Negotiation

**Advocacy Strategies:**
- Evidence synthesis
- Strategic communication
- Coalition leadership
- Legislative engagement

## Quality and Safety Leadership

**High-Reliability Leadership:**
- Safety culture assessment
- Board engagement
- Transparency and accountability
- Learning systems

**Improvement Science Leadership:**
- Large-scale change
- Spread and sustainability
- Measurement systems
- Organizational learning

**Regulatory Navigation:**
- CMS requirements
- State regulations
- Accreditation standards
- Compliance programs

## Transformative Models

**Population Health:**
- Defined populations
- Risk stratification
- Care management
- Community health

**Value-Based Care:**
- Alternative payment models
- Quality metrics
- Cost reduction
- Patient experience

**Integrated Care:**
- Physical-mental health integration
- Social services integration
- Community partnerships
- Whole-person care

## Health Equity Integration

**Structural Competency:**
- Recognizing structural determinants
- System-level interventions
- Policy advocacy
- Accountability

**Community Engagement:**
- Community advisory boards
- Community health needs assessment
- Community benefit
- Anchor institution strategies

**Data and Equity:**
- Disaggregated data
- Equity metrics
- Algorithmic bias
- Transparency

## Research and Innovation

**Delivery Science:**
- Implementation research
- Effectiveness research
- Quality improvement research
- Health services research

**Innovation:**
- Disruptive innovation
- Digital transformation
- New models of care
- Scaling and spread

**Knowledge Translation:**
- Evidence synthesis
- Guideline development
- Decision support
- Dissemination

## Future Directions

**Digital Transformation:**
- AI in navigation
- Predictive analytics
- Virtual care models
- Interoperability

**Payment Reform:**
- Moving toward value
- Social determinants payment
- Global budgets
- Innovation incentives

**Workforce:**
- Team-based care
- Community health workers
- Navigators and care coordinators
- Scope of practice

## Leadership Development

**Competencies:**
- Systems thinking
- Change management
- Stakeholder engagement
- Data-driven leadership

**Career Paths:**
- Clinical leadership
- Administrative leadership
- Policy leadership
- Academic leadership

**Sustainability:**
- Work-life integration
- Resilience
- Mentorship
- Succession planning`,
      keyTerms: [
        { term: 'complex adaptive system', definition: 'System with diverse interacting components exhibiting emergent behavior and self-organization' },
        { term: 'human-centered design', definition: 'Design approach prioritizing human needs and experiences throughout development process' },
        { term: 'anchor institution', definition: 'Large, place-based organization (hospital, university) with potential to improve community health and economy' },
        { term: 'implementation science', definition: 'Study of methods promoting adoption of evidence-based practices into routine care' },
        { term: 'structural competency', definition: 'Clinical skill recognizing structural factors producing health outcomes and intervening appropriately' },
      ],
      clinicalNotes: `Leadership priorities for navigation improvement:
1. Champion organizational health literacy
2. Develop comprehensive navigation programs
3. Integrate social determinants screening and response
4. Lead equity-focused quality improvement
5. Advocate for policy supporting access
6. Build learning health system infrastructure

Key resources:
- IHI (Institute for Healthcare Improvement)
- AHRQ (Agency for Healthcare Research and Quality)
- NQF (National Quality Forum)
- Commonwealth Fund
- Robert Wood Johnson Foundation`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ihi-triple-aim',
      type: 'website',
      title: 'The IHI Triple Aim',
      source: 'Institute for Healthcare Improvement',
      url: 'http://www.ihi.org/topics/TripleAim/Pages/default.aspx',
    },
    {
      id: 'ahrq-care-coordination',
      type: 'website',
      title: 'Care Coordination',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/ncepcr/care/coordination.html',
    },
    {
      id: 'cms-transitions-care',
      type: 'website',
      title: 'Transitions of Care',
      source: 'Centers for Medicare and Medicaid Services',
    },
    {
      id: 'donabedian-quality',
      type: 'article',
      title: 'The quality of care: How can it be assessed?',
      authors: ['Donabedian, A.'],
      source: 'JAMA',
    },
  ],

  crossReferences: [
    { targetId: 'health-literacy-insurance-basics', targetType: 'concept', relationship: 'sibling', label: 'Insurance Basics' },
    { targetId: 'health-literacy-patient-provider-communication', targetType: 'concept', relationship: 'related', label: 'Patient-Provider Communication' },
    { targetId: 'healthcare-navigation-overview', targetType: 'concept', relationship: 'related', label: 'Healthcare Navigation Overview' },
  ],

  tags: {
    systems: ['health-literacy'],
    topics: ['healthcare navigation', 'access to care', 'care coordination', 'health systems'],
    keywords: ['navigation', 'healthcare access', 'care coordination', 'transitions', 'health system', 'patient portal'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default healthcareSystemNavigation;
