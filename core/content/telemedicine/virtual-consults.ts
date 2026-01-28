/**
 * Virtual Consultations - Telemedicine
 *
 * Real-time remote clinical consultations via video
 * and audio technology.
 */

import { EducationalContent } from '../types';

export const virtualConsults: EducationalContent = {
  id: 'telemedicine-virtual-consults',
  type: 'concept',
  name: 'Virtual Consultations',
  alternateNames: ['Video Consultations', 'Teleconsultations', 'Remote Clinical Visits'],

  levels: {
    1: {
      level: 1,
      summary: 'Virtual consultations are video or phone appointments where you talk to a doctor or specialist without going to their office.',
      explanation: `## What Are Virtual Consultations?

Virtual consultations are doctor appointments you have through video on your phone, tablet, or computer. Instead of sitting in a doctor\'s office, you can talk to the doctor from your own home!

**How Virtual Consultations Work:**

1. **Schedule the Appointment:**
   - Call or use an app to book a time
   - Get a link to join the video call
   - May receive reminder messages

2. **Before the Call:**
   - Find a quiet, private place
   - Test your camera and sound
   - Write down questions
   - Gather your medications

3. **During the Call:**
   - Click the link to join
   - Wait in a virtual waiting room
   - The doctor joins and you talk
   - Show any problems on camera

4. **After the Call:**
   - Get instructions sent to you
   - Pick up prescriptions at pharmacy
   - Schedule follow-up if needed

**Types of Virtual Consultations:**

- **With Your Regular Doctor:** Follow-up visits, prescription refills
- **With Specialists:** Heart doctors, skin doctors, mental health experts
- **Urgent Care:** Quick help for minor problems
- **Second Opinions:** Another doctor\'s view on your condition

**What You Need:**
- A phone, tablet, or computer with camera
- Internet connection
- Quiet, private space
- Good lighting so doctor can see you

**What Can Be Done Virtually:**
- Talking about symptoms
- Looking at rashes or skin problems
- Reviewing test results
- Managing ongoing conditions
- Mental health counseling

**When You Might Need In-Person:**
- Physical exam needed
- Tests like blood work or X-rays
- Serious injuries
- Procedures or treatments

Virtual consultations make it easier to get medical help when and where you need it!`,
      keyTerms: [
        { term: 'virtual consultation', definition: 'A doctor visit done through video or phone call' },
        { term: 'specialist', definition: 'A doctor with extra training in one area of medicine' },
        { term: 'follow-up', definition: 'A visit to check how you are doing after treatment' },
        { term: 'second opinion', definition: 'Getting another doctor\'s thoughts on your health problem' },
      ],
      analogies: [
        'A virtual consultation is like a face-to-face conversation through a magic window that connects you to the doctor.',
        'It is like having the doctor visit your home without them actually traveling there.',
        'Think of it as a video chat with a medical expert who can help you feel better.',
      ],
      examples: [
        'A mom has a video call with a pediatrician about her child\'s fever and rash',
        'An elderly man talks to his heart doctor about his blood pressure medicine',
        'A teenager has a virtual therapy session with a counselor',
        'A person shows a skin problem to a dermatologist through video',
      ],
      patientCounselingPoints: [
        'Be on time for your virtual appointment just like an in-person visit',
        'Have a pen and paper ready to write down instructions',
        'If the video does not work, the doctor may call you on the phone',
        'Tell the doctor if you cannot hear or see them clearly',
      ],
    },
    2: {
      level: 2,
      summary: 'Virtual consultations are synchronous audiovisual clinical encounters conducted via HIPAA-compliant platforms, enabling remote diagnosis, treatment planning, and follow-up care across primary care, specialty, and mental health services while requiring appropriate technology infrastructure and clinical adaptation.',
      explanation: `## Virtual Consultations

Virtual consultations represent synchronous clinical encounters conducted through audiovisual telecommunications technology. These encounters require adaptation of traditional clinical skills to the remote environment while maintaining standards of care equivalent to in-person visits.

**Types of Virtual Consultations:**

| Type | Description | Clinical Applications |
|------|-------------|----------------------|
| Primary Care | General medical visits | Chronic disease follow-up, minor acute issues |
| Specialty Consults | Expert consultation | Cardiology, dermatology, psychiatry, neurology |
| Urgent Care | Acute problem assessment | After-hours access, travel health, minor injuries |
| Second Opinions | Alternative expert review | Complex diagnoses, surgical planning |
| Multidisciplinary | Team-based consultation | Cancer care, complex chronic disease |

**Clinical Adaptations for Virtual Care:**

**Patient-Assisted Examination:**
- Guided self-palpation of lymph nodes
- Demonstration of joint range of motion
- Abdominal self-examination under direction
- Respiratory examination via patient-reported breath sounds

**Technology-Enhanced Assessment:**
- High-definition video for dermatologic inspection
- Camera flashlight for oropharyngeal examination
- Patient demonstration of functional abilities
- Home monitoring device integration (BP, glucose, SpO2)

**Platform Requirements:**

**Technical Specifications:**
- Minimum 1.5 Mbps bandwidth for SD video
- End-to-end encryption (AES-256)
- HIPAA-compliant infrastructure
- Browser-based or native application access
- Mobile device optimization

**Clinical Features:**
- Screen sharing for education
- Digital whiteboard for diagrams
- Multi-party capability (interpreters, caregivers)
- Recording capability (with consent)
- EHR integration

**Quality and Safety Considerations:**

**Appropriate Use Criteria:**
- Stable chronic disease management
- Medication management and reconciliation
- Mental health and behavioral health
- Post-operative follow-up
- Low-acuity acute complaints

**Contraindications:**
- High-acuity emergencies
- Conditions requiring physical manipulation
- Complex procedures
- Unreliable technology access
- Patient inability to participate

**Documentation Standards:**
- Chief complaint and history of present illness
- Virtual examination findings
- Assessment and plan
- Technical limitations noted
- Follow-up plan including in-person if needed`,
      keyTerms: [
        { term: 'synchronous', definition: 'Real-time communication with simultaneous participation' },
        { term: 'multidisciplinary', definition: 'Involving multiple specialties in coordinated care' },
        { term: 'self-palpation', definition: 'Patient examination of their own body under direction' },
        { term: 'AES-256', definition: 'Advanced Encryption Standard with 256-bit key' },
        { term: 'oropharyngeal', definition: 'Relating to mouth and throat area' },
        { term: 'acuity', definition: 'Severity or complexity of medical condition' },
      ],
      analogies: [
        'Virtual consultations are like a clinical consultation through a portal, preserving face-to-face interaction across distance.',
        'They function as distributed exam rooms, extending the clinical environment to wherever patients are located.',
        'Think of them as telepresence in healthcare - being present without physical proximity.',
      ],
      examples: [
        'Amwell platform connecting patients with board-certified physicians for urgent care consultations',
        'Teladoc specialty consultations providing cardiology and dermatology expertise remotely',
        'InSight telepsychiatry delivering mental health services to underserved areas',
        'eConsult platforms enabling primary care providers to consult with specialists asynchronously',
      ],
    },
    3: {
      level: 3,
      summary: 'Virtual consultations are real-time audiovisual clinical encounters requiring HIPAA-compliant platforms with encryption, adapted examination techniques utilizing patient assistance and peripheral devices, appropriate patient selection criteria, documentation equivalent to in-person visits, and explicit recognition of limitations with conversion protocols for inadequate assessments.',
      explanation: `## Virtual Consultations: Clinical Framework

Virtual consultations require systematic adaptation of clinical skills and workflows to deliver high-quality care through telecommunications technology while recognizing inherent limitations and establishing clear protocols for in-person escalation.

**Pre-Consultation Preparation:**

**Patient Preparation:**
- Technology readiness confirmation
- Platform access testing
- Required materials checklist (medication list, vital signs if available)
- Environment optimization (lighting, privacy, reduced background noise)
- Identity verification procedures

**Provider Preparation:**
- Chart review and clinical preparation
- Technology backup plans (phone dial-in)
- Emergency contact information for patient location
- Documentation templates for virtual encounters
- Peripheral device availability (digital stethoscope, dermoscope if applicable)

**Clinical Assessment Techniques:**

**Observation-Based Examination:**
- General appearance (distress, hydration, breathing)
- Skin inspection (rashes, wounds, jaundice)
- Functional assessment (gait, movement, coordination)
- Behavioral assessment (mood, cognition, speech)

**Patient-Assisted Examination:**
- Lymph node palpation (neck, axillary, inguinal)
- Abdominal examination (point tenderness, masses)
- Joint examination (range of motion, swelling)
- Basic neurologic (strength testing, sensation)

**Digital Health Integration:**
- Connected device data review (home BP, glucose)
- Patient-generated health data (symptom diaries)
- Photograph review (skin lesions, wounds)
- Video documentation (tremor, gait)

**Safety Protocols:**

**Emergency Recognition:**
- Red flag symptoms requiring immediate escalation
- Emergency service activation procedures
- Patient location verification for emergency dispatch
- Post-emergency follow-up protocols

**In-Person Conversion Criteria:**
- Diagnostic uncertainty after virtual assessment
- Need for procedures (biopsy, injection)
- Abnormal vital signs requiring immediate evaluation
- Patient or provider preference

**Documentation Requirements:**

**Required Elements:**
- Modality (video, telephone)
- Participant locations
- Technical quality issues if present
- Examination limitations
- Clinical reasoning for treatment decisions
- Follow-up and contingency planning

**Coding and Billing:**
- Place of service 02 (telehealth)
- Modifier 95 (synchronous telemedicine)
- Time-based documentation when applicable
- Medical necessity justification`,
      keyTerms: [
        { term: 'peripheral device', definition: 'External equipment connected to enhance examination capability' },
        { term: 'patient-generated health data', definition: 'Health data created, recorded, or gathered by patients' },
        { term: 'place of service 02', definition: 'CMS code indicating telehealth as location of service' },
        { term: 'contingency planning', definition: 'Alternative plans for care if primary approach insufficient' },
        { term: 'escalation', definition: 'Process of increasing intensity or changing venue of care' },
        { term: 'dermoscope', definition: 'Magnification device for detailed skin examination' },
      ],
    },
    4: {
      level: 4,
      summary: 'Virtual consultations require structured clinical protocols including patient and provider preparation, adapted examination techniques leveraging observation and patient assistance, integrated digital health data, explicit safety and escalation procedures, comprehensive documentation meeting in-person standards, and appropriate coding with recognition of modality-specific limitations and contraindications.',
      explanation: `## Virtual Consultations: Implementation and Quality

Effective virtual consultation programs require systematic implementation encompassing technology infrastructure, clinical protocol development, quality assurance, and ongoing provider training to ensure safe, effective, and sustainable delivery.

**Technology Infrastructure:**

**Platform Selection Criteria:**
- **Security:** HIPAA compliance, end-to-end encryption, HITRUST certification
- **Integration:** EHR connectivity via HL7 FHIR, single sign-on capability
- **Functionality:** Multi-party video, screen sharing, waiting room, recording
- **Reliability:** 99.9%+ uptime, disaster recovery, technical support
- **Accessibility:** ADA compliance, multiple language support

**Network Requirements:**

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Bandwidth | 1.5 Mbps | 3+ Mbps |
| Latency | <300ms | <150ms |
| Jitter | <30ms | <15ms |
| Packet Loss | <2% | <0.5% |

**Clinical Protocol Development:**

**Condition-Specific Protocols:**

**Dermatology Virtual Visit:**
- Lighting requirements (natural light preferred)
- Image quality standards (minimum resolution)
- Multiple angle photography
- Size reference placement
- Dermoscopy correlation when available

**Mental Health Virtual Visit:**
- Crisis screening protocols
- Safety planning for suicidal ideation
- Privacy assurance (patient location)
- Therapeutic alliance building in virtual context
- Group therapy adaptations

**Cardiology Virtual Visit:**
- Home blood pressure integration
- Heart rate and rhythm assessment
- Functional capacity assessment (walk test)
- Medication reconciliation emphasis
- Red flag identification (acute coronary syndrome)

**Quality Assurance Framework:**

**Structure Measures:**
- Platform uptime and performance
- Provider credentialing for telehealth
- Technology training completion
- Policy and procedure availability

**Process Measures:**
- Visit completion rates
- Technical issue rates
- Documentation quality
- Appropriate antibiotic prescribing

**Outcome Measures:**
- Patient satisfaction
- Clinical outcomes (disease-specific)
- Follow-up and referral completion
- Safety event rates

**Provider Training and Competency:**

**Required Competencies:**
- Platform operation proficiency
- Virtual examination techniques
- Technology troubleshooting
- Emergency escalation procedures
- Documentation requirements

**Training Components:**
- Didactic education on telehealth principles
- Simulation-based practice encounters
- Precepted virtual visits with feedback
- Ongoing quality review and coaching

**Licensure and Regulatory:**

**Interstate Practice:**
- State licensure requirements
- Interstate Medical Licensure Compact
- Telehealth-specific licensure provisions
- Credentialing across multiple sites

**Prescribing Regulations:**
- DEA controlled substance requirements
- State-specific prescribing rules
- E-prescribing mandates
- Prior authorization for telehealth prescriptions`,
      keyTerms: [
        { term: 'HITRUST', definition: 'Health Information Trust Alliance security framework certification' },
        { term: 'jitter', definition: 'Variation in packet arrival time affecting video quality' },
        { term: 'therapeutic alliance', definition: 'Collaborative relationship between patient and provider' },
        { term: 'functional capacity', definition: 'Ability to perform activities and exercise' },
        { term: 'structure measures', definition: 'Assessment of care delivery resources and organization' },
        { term: 'process measures', definition: 'Assessment of care delivery activities' },
      ],
      clinicalNotes: `When establishing virtual consultation services, invest in robust technology infrastructure with excellent technical support - platform failures directly impact patient care and provider confidence. Develop specialty-specific examination protocols leveraging available technology; for example, dermatology virtual visits require specific lighting and photography guidance. Train providers in patient-assisted examination techniques - patients can reliably assess lymphadenopathy and joint range of motion when properly instructed. Maintain explicit documentation of examination limitations and have low threshold for in-person conversion when clinical uncertainty exists. For mental health virtual visits, always verify patient location at outset for emergency response purposes. Monitor quality metrics regularly with feedback to providers. Stay current with evolving licensure and prescribing regulations, particularly for interstate practice and controlled substances.`,
    },
    5: {
      level: 5,
      summary: 'Virtual consultations represent a sophisticated care delivery modality requiring enterprise-grade technology infrastructure, specialty-specific clinical protocols, comprehensive provider training and competency assessment, robust quality assurance with structure-process-outcome measurement, and navigation of complex interstate licensure and prescribing regulations, with ongoing evolution toward hybrid models, AI augmentation, and value-based integration.',
      explanation: `## Virtual Consultations: Advanced Topics

Virtual consultation programs have matured into essential healthcare infrastructure requiring sophisticated implementation science, continuous quality improvement, and strategic integration with broader care delivery transformation initiatives.

**Artificial Intelligence in Virtual Consultations:**

**Clinical Applications:**
- **Triage and Scheduling:** AI-based routing to appropriate provider and modality
- **Pre-Visit Preparation:** Automated chart review and differential generation
- **Documentation Support:** Ambient clinical documentation and note generation
- **Diagnostic Assistance:** Computer vision for dermatology, radiology integration
- **Post-Visit Follow-up:** Automated care gap identification and outreach

**Implementation Considerations:**
- Algorithm validation and bias monitoring
- Provider oversight and accountability
- Patient disclosure of AI involvement
- Liability and malpractice implications
- Regulatory compliance (FDA SaMD)

**Hybrid Care Model Optimization:**

**Modality Selection Framework:**
- Risk stratification-based assignment
- Patient preference incorporation
- Resource optimization
- Clinical appropriateness

**Integrated Workflows:**
- Digital intake and triage
- Virtual pre-visit for in-person procedures
- Remote monitoring between visits
- Asynchronous messaging for routine questions
- Care team coordination across modalities

**Value-Based Care Integration:**

**Population Health Applications:**
- Risk-stratified visit modalities
- Chronic disease management at scale
- Preventive care outreach
- Care gap closure

**Performance Measurement:**
- Total cost of care by modality
- Quality metric achievement
- Patient-reported outcomes
- Health equity monitoring

**Cost-Effectiveness:**
- Productivity and throughput analysis
- Overhead reduction quantification
- Patient travel time savings
- Environmental impact (carbon reduction)

**Global Health and Underserved Populations:**

**Rural and Frontier Areas:**
- Specialist access enhancement
- Hub-and-spoke models
- Community health worker integration
- Asynchronous store-and-forward

**Low-Resource Settings:**
- Frugal innovation approaches
- Appropriate technology selection
- Task shifting and training
- Sustainability planning

**Health Equity Considerations:**
- Digital divide mitigation
- Language and cultural adaptation
- Disability accessibility
- Broadband infrastructure advocacy

**Emerging Technologies:**

**Extended Reality (XR):**
- Virtual reality for exposure therapy
- Augmented reality for wound care guidance
- Mixed reality for rehabilitation
- Haptic feedback for remote examination

**5G and Advanced Connectivity:**
- Low-latency remote procedures
- High-definition imaging transmission
- Real-time AI processing
- Internet of Medical Things integration

**Blockchain and Decentralization:**
- Patient-controlled health records
- Credential verification
- Smart contracts for payment
- Supply chain integrity

**Regulatory Evolution:**

**Post-Pandemic Framework:**
- Permanent adoption of emergency flexibilities
- Interstate licensure reform
- Prescribing regulation updates
- Telehealth parity legislation

**International Harmonization:**
- Cross-border telemedicine frameworks
- WHO digital health guidelines
- International credentialing reciprocity
- Global health data governance

**Future Directions:**

- **Ambient Intelligence:** Always-available virtual consultation capability
- **Digital Twins:** Personalized simulation for treatment planning
- **Quantum Technologies:** Ultra-secure communications, advanced diagnostics
- **Synthetic Media Detection:** Ensuring consultation authenticity
- **Neurotechnology Integration:** Brain-computer interface applications`,
      keyTerms: [
        { term: 'ambient clinical documentation', definition: 'AI-generated documentation from recorded encounters' },
        { term: 'care gap', definition: 'Missing recommended care based on clinical guidelines' },
        { term: 'haptic feedback', definition: 'Tactile feedback technology simulating touch' },
        { term: 'hub-and-spoke', definition: 'Model with central specialty hub and distributed primary care spokes' },
        { term: 'frugal innovation', definition: 'Cost-effective solutions for resource-limited settings' },
        { term: 'synthetic media', definition: 'AI-generated or manipulated audio/video content' },
      ],
      clinicalNotes: `The maturation of virtual consultation programs requires attention to sustainability and integration rather than emergency response. AI augmentation will transform virtual consultations through ambient documentation and diagnostic assistance, but requires careful attention to validation, bias, and liability. Develop expertise in hybrid care optimization - the goal is not virtual-only or in-person-only but intelligent modality matching based on clinical need, patient preference, and resource efficiency. Advocate for policy changes supporting sustainable virtual care including licensure portability, appropriate reimbursement, and broadband infrastructure. Monitor for unintended consequences of virtualization including fragmentation of care and digital divide exacerbation. The most successful programs will seamlessly integrate virtual and in-person care with fluid transitions based on evolving patient needs.`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: [],
    topics: ['digital-health'],
    keywords: ['virtual-consultation', 'telehealth', 'video-visit', 'remote-clinical-care', 'synchronous'],
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
