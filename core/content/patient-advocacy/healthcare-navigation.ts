/**
 * Healthcare Navigation - Comprehensive Educational Content
 *
 * Covers how to navigate the complex healthcare system, find providers,
 * understand referrals, and access appropriate care.
 */

import { EducationalContent } from '../types';

export const healthcareNavigation: EducationalContent = {
  id: 'concept-healthcare-navigation',
  type: 'concept',
  name: 'Healthcare Navigation',
  alternateNames: ['Navigating Healthcare', 'Healthcare System Navigation', 'Patient Navigation'],

  levels: {
    1: {
      level: 1,
      summary: 'Learning how to find the right doctor and get the care you need in the healthcare system.',
      explanation: `The healthcare system can seem confusing, but learning how it works helps you get the care you need!

**Types of Doctors:**

- **Primary Care Doctor**: Your main doctor who you see for checkups and when you're sick. Think of them as your health "home base."
- **Specialist**: A doctor who knows a lot about one part of the body (like a heart doctor or eye doctor).
- **Emergency Room Doctor**: A doctor who helps people who are very sick or hurt right away.

**How Healthcare Works:**

1. When you need care, you usually start by seeing your primary care doctor
2. If you need special help, your doctor can send you to a specialist
3. For emergencies, you go straight to the emergency room

**Getting Help:**

- Your parent or guardian helps you find doctors
- A nurse or staff member can answer questions
- Bring your insurance card when you visit the doctor

Think of the healthcare system like a team - different people work together to help you stay healthy!`,
      keyTerms: [
        { term: 'primary care doctor', definition: 'Your main doctor who takes care of your overall health' },
        { term: 'specialist', definition: 'A doctor who focuses on one part of the body or type of illness' },
        { term: 'referral', definition: 'When your doctor sends you to see another doctor for special care' },
        { term: 'appointment', definition: 'A scheduled time to see your doctor' },
      ],
      analogies: [
        'Your primary care doctor is like a team captain who knows all the players and can get you to the right specialist.',
        'The healthcare system is like a school - there are different teachers for different subjects, and a counselor to help you find what you need.',
      ],
      examples: [
        'If you have a bad cough that won\'t go away, you see your primary care doctor first. They might send you to a lung specialist if needed.',
        'If you break your arm playing sports, you go to the emergency room right away.',
      ],
    },
    2: {
      level: 2,
      summary: 'Healthcare navigation involves understanding different care settings, provider types, referral processes, and how to effectively access services within the healthcare system.',
      explanation: `## Understanding the Healthcare System

### Types of Care Settings

**Primary Care:**
- Regular checkups and preventive care
- Treatment for common illnesses
- Management of chronic conditions
- Coordination of specialist care
- Vaccinations and screenings

**Specialty Care:**
- Focused expertise in specific conditions
- Usually requires a referral
- Examples: cardiology, dermatology, orthopedics

**Urgent Care:**
- For non-emergency issues needing quick attention
- Walk-in availability
- Examples: minor injuries, infections, sprains

**Emergency Care:**
- Life-threatening conditions
- Severe injuries
- Available 24/7
- Most expensive option

### The Referral Process

1. Your primary care doctor evaluates your condition
2. They determine if specialist care is needed
3. They provide a referral (may be required by insurance)
4. You schedule an appointment with the specialist
5. The specialist reports back to your primary care doctor

### Finding Providers

**Resources:**
- Insurance company provider directory
- Hospital or health system websites
- Doctor rating sites (with caution)
- Personal recommendations
- Your primary care doctor's suggestions

### Preparing for Appointments

- Bring insurance cards and ID
- List your medications
- Write down your questions
- Know your medical history
- Arrive early to complete paperwork

### Understanding Your Coverage

- Know your insurance plan type (HMO, PPO, etc.)
- Understand in-network vs. out-of-network
- Know your copays and deductibles
- Check if pre-authorization is needed`,
      keyTerms: [
        { term: 'HMO', definition: 'Health Maintenance Organization - a type of insurance that requires you to use specific doctors and get referrals for specialists' },
        { term: 'PPO', definition: 'Preferred Provider Organization - insurance that offers more flexibility in choosing doctors' },
        { term: 'in-network', definition: 'Doctors and hospitals that have agreements with your insurance company' },
        { term: 'copay', definition: 'A fixed amount you pay for a healthcare service' },
        { term: 'deductible', definition: 'The amount you pay before insurance starts covering costs' },
      ],
      analogies: [
        'Navigating healthcare is like using a GPS - you need to know where you\'re starting, where you want to go, and what route to take.',
        'An HMO is like a guided tour where you follow a specific path, while a PPO is more like having a travel pass that lets you explore on your own.',
      ],
    },
    3: {
      level: 3,
      summary: 'Healthcare navigation encompasses understanding care delivery systems, insurance structures, referral networks, care coordination mechanisms, and patient advocacy strategies for optimizing access and outcomes.',
      explanation: `## Healthcare Delivery Systems

### Care Delivery Models

**Fee-for-Service:**
- Payment for each service rendered
- May incentivize volume over value
- Traditional reimbursement model

**Value-Based Care:**
- Payment tied to quality outcomes
- Emphasis on prevention and coordination
- Accountable Care Organizations (ACOs)
- Patient-Centered Medical Homes (PCMH)

### Insurance Structures

| Plan Type | Network Restrictions | Referrals Required | Out-of-Network Coverage |
|-----------|---------------------|--------------------|-----------------------|
| HMO | Strict | Yes | Emergency only |
| PPO | Moderate | No | Partial coverage |
| EPO | Strict | No | Emergency only |
| POS | Moderate | For specialists | Partial coverage |

### Care Coordination

**Primary Care Provider Role:**
- Care team leadership
- Comprehensive health management
- Referral coordination
- Test result follow-up
- Medication reconciliation

**Patient-Centered Medical Home:**
- Team-based care
- Enhanced access (same-day appointments, after-hours)
- Care coordination across settings
- Quality measurement and improvement
- Technology-enabled (patient portals)

### Specialist Access

**Referral Management:**
- Prior authorization requirements
- Network adequacy considerations
- Wait times and access issues
- Care coordination challenges

**Centers of Excellence:**
- High-volume, high-quality programs
- Complex procedures
- Insurance incentives for use
- Travel considerations

### Navigation Resources

**Patient Navigators:**
- Assist with appointment scheduling
- Help with insurance issues
- Connect to community resources
- Support care coordination

**Case Managers:**
- Complex care coordination
- Discharge planning
- Resource utilization management
- Care transition support

**Community Health Workers:**
- Cultural and linguistic bridges
- Social determinant navigation
- Health education
- Trust building`,
      keyTerms: [
        { term: 'Accountable Care Organization (ACO)', definition: 'A group of healthcare providers who coordinate care and share responsibility for quality and cost' },
        { term: 'Patient-Centered Medical Home', definition: 'A care model emphasizing comprehensive, coordinated, patient-focused primary care' },
        { term: 'prior authorization', definition: 'Insurance approval required before certain services are covered' },
        { term: 'network adequacy', definition: 'Sufficiency of healthcare providers available within an insurance network to meet member needs' },
      ],
      clinicalNotes: 'Healthcare systems should invest in navigation services to reduce barriers. Care coordination is particularly important for complex, multi-morbid patients. Patient portals and digital tools can enhance navigation capabilities.',
    },
    4: {
      level: 4,
      summary: 'Healthcare navigation requires sophisticated understanding of care delivery fragmentation, insurance complexities, social determinants of access, and evidence-based navigation interventions that improve outcomes while reducing disparities.',
      explanation: `## System Complexity and Fragmentation

### Structural Barriers

**Administrative Complexity:**
- Multiple payers with varying requirements
- Prior authorization burden
- Coverage determination processes
- Appeals and denials management

**Care Fragmentation:**
- Siloed specialty care
- Information discontinuities
- Transition gaps (hospital to home)
- Behavioral-physical health divide

**Geographic Factors:**
- Provider deserts (rural, urban)
- Specialty access disparities
- Transportation barriers
- Telehealth opportunities and limitations

### Social Determinants of Navigation

**Health Literacy:**
- 36% of US adults have basic or below health literacy
- Impact on appointment keeping
- Medication adherence implications
- Self-advocacy capacity

**Structural Determinants:**
- Employment constraints (time off)
- Childcare needs
- Transportation access
- Digital divide

### Evidence-Based Navigation Interventions

**Patient Navigation Programs:**
| Intervention | Evidence Base | Target Population |
|--------------|--------------|-------------------|
| Cancer navigation | Strong RCT evidence | Cancer screening/treatment |
| CHW programs | Moderate evidence | Chronic disease management |
| Care transitions | Strong evidence | Post-hospitalization |
| Insurance assistance | Emerging evidence | Marketplace enrollment |

**Key Outcomes:**
- Improved screening completion
- Reduced time to diagnosis
- Better treatment adherence
- Lower readmission rates
- Reduced emergency utilization

### Implementation Strategies

**System-Level:**
- Embedded navigators in primary care
- Warm handoffs to specialists
- Closed-loop referral systems
- Social needs screening and referral

**Technology-Enabled:**
- Patient portal adoption support
- Digital navigation tools
- Telehealth integration
- Automated appointment reminders

**Payment Considerations:**
- Care coordination billing codes
- Care management fees
- Value-based payment alignment
- Community health worker reimbursement

### Quality Measurement

**Access Metrics:**
- Third next available appointment
- Referral completion rates
- Time to specialty care
- No-show rates

**Navigation Outcomes:**
- Patient activation measures
- Care experience scores
- Utilization patterns
- Disparity reduction`,
      keyTerms: [
        { term: 'health literacy', definition: 'Capacity to obtain, process, and understand basic health information and services for appropriate health decisions' },
        { term: 'warm handoff', definition: 'Direct transfer of care between providers that involves personal introduction and information sharing' },
        { term: 'closed-loop referral', definition: 'Referral process with tracking to ensure patient completes recommended care and information returns to referring provider' },
        { term: 'patient activation', definition: 'Knowledge, skills, and confidence a person has for managing their own health and healthcare' },
      ],
      clinicalNotes: 'Screen patients for navigation barriers including health literacy, transportation, and social needs. Implement closed-loop referral tracking. Consider patient activation assessment to tailor navigation support intensity.',
    },
    5: {
      level: 5,
      summary: 'Healthcare navigation requires integration of health services research, implementation science, health equity frameworks, and health system design principles to create sustainable navigation solutions that address structural barriers and improve population health outcomes.',
      explanation: `## Health System Design Principles

### Navigation as System Function

**Organizational Integration:**
- Navigation embedded in care delivery workflows
- EHR-integrated tracking systems
- Performance accountability structures
- Cross-departmental coordination

**Workforce Models:**
| Role | Functions | Training | Sustainability |
|------|-----------|----------|----------------|
| Patient Navigator | Case-specific guidance | Variable, often peer | Grant-dependent often |
| Care Coordinator | Clinical coordination | Clinical background | Billing-supported |
| CHW | Community linkage | Competency-based | Emerging reimbursement |
| Social Worker | Complex needs | MSW degree | Established billing |

### Population Health Navigation

**Risk Stratification:**
- Identify high-need populations
- Predictive modeling applications
- Resource allocation optimization
- Proactive outreach strategies

**Panel Management:**
- Registries for chronic disease populations
- Gap-in-care identification
- Preventive service outreach
- Care coordination intensity matching

### Policy and Payment Evolution

**CMS Initiatives:**
- Chronic Care Management (CCM) billing
- Principal Care Management (PCM)
- Community Health Worker services
- Health equity adjustments

**State Innovations:**
- CHW certification programs
- Medicaid coverage for navigation services
- Accountable health communities model
- Social determinant integration

### Technology Integration

**Digital Navigation Tools:**
- Symptom checkers with triage logic
- Provider search with quality data
- Cost transparency tools
- Appointment scheduling platforms

**Interoperability Advances:**
- FHIR-based data exchange
- Patient access APIs
- Consent management
- Cross-organizational care coordination

### Health Equity Framework

**Navigation Disparities:**
- Racial/ethnic differences in navigation success
- Insurance status impacts
- Language access requirements
- Disability accommodations

**Equity-Focused Design:**
- Community engagement in program design
- Culturally tailored navigation approaches
- Workforce diversity and representation
- Structural barrier remediation

### Implementation Science Application

**Adoption Strategies:**
- Stakeholder engagement frameworks
- Implementation determinants assessment
- Adaptation versus fidelity balance
- Sustainability planning

**Evaluation Approaches:**
- Mixed methods evaluation
- Implementation outcomes
- Service outcomes
- Patient outcomes
- Cost-effectiveness analysis

### Future Directions

**System Transformation:**
- Care delivery redesign for navigation
- Payment reform alignment
- Technology ecosystem development
- Workforce pipeline expansion

**Research Priorities:**
- Navigation intervention optimization
- Technology-enabled navigation efficacy
- Equity impact assessment
- Cost-effectiveness evidence generation`,
      keyTerms: [
        { term: 'risk stratification', definition: 'Process of categorizing patients by likelihood of adverse outcomes to target interventions appropriately' },
        { term: 'panel management', definition: 'Population-based approach to managing care for all patients attributed to a provider or care team' },
        { term: 'accountable health communities', definition: 'CMS model testing systematic identification and addressing of health-related social needs' },
        { term: 'implementation determinants', definition: 'Factors (barriers and facilitators) that influence successful implementation of an intervention' },
      ],
      clinicalNotes: `Implementation priorities:
1. Develop navigation workforce with appropriate training and supervision
2. Implement EHR-integrated care coordination tracking
3. Screen systematically for navigation barriers and social needs
4. Partner with community organizations for referral resources
5. Measure navigation outcomes including disparities
6. Align payment models to support navigation services
7. Leverage technology while addressing digital divide
8. Engage patients and communities in navigation program design`,
    },
  },

  media: [
    {
      id: 'healthcare-system-map',
      type: 'diagram',
      filename: 'healthcare-system-navigation.svg',
      title: 'Healthcare System Navigation Map',
      description: 'Visual guide to different healthcare settings and how to access them',
    },
  ],

  citations: [
    {
      id: 'ahrq-navigation',
      type: 'website',
      title: 'Patient Navigation',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/ncepcr/tools/navigation/index.html',
      accessedDate: '2026-01-24',
    },
    {
      id: 'cms-care-coordination',
      type: 'website',
      title: 'Care Coordination',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/Medicare/Quality-Initiatives-Patient-Assessment-Instruments/QualityInitiativesGenInfo/Care-Coordination',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-insurance-basics', targetType: 'concept', relationship: 'related', label: 'Insurance Basics' },
    { targetId: 'concept-patient-bill-of-rights', targetType: 'concept', relationship: 'related', label: 'Patient Bill of Rights' },
  ],

  tags: {
    systems: ['healthcare-system'],
    topics: ['patient-advocacy', 'healthcare-access', 'care-coordination', 'health-services'],
    keywords: ['healthcare navigation', 'patient navigation', 'care coordination', 'health system', 'referrals'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default healthcareNavigation;
