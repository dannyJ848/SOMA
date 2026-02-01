import { EducationalContent } from '../../types';

export const surgicalSafetyChecklistContent: EducationalContent = {
  id: 'surgical-safety-checklist',
  type: 'concept',
  name: 'Surgical Safety Checklist',
  nameEs: 'Lista de Verificación de Seguridad Quirúrgica',
  alternateNames: ['WHO Surgical Checklist', 'Surgical Time Out', 'Pre-Surgery Checklist'],
  levels: {
    1: {
      level: 1,
      summary: 'A surgical safety checklist is a list of important steps the surgical team completes before, during, and after surgery to keep patients safe.',
      explanation: `## What is a Surgical Safety Checklist?

A surgical safety checklist is a list of important steps the surgical team completes before, during, and after surgery to keep patients safe.

### Before Surgery (Sign In)

The team checks:
- Your identity and the surgery planned
- Consent form is signed
- Allergy information
- Anesthesia safety checks

### Before Incision (Time Out)

The whole team pauses to confirm:
- Correct patient
- Correct surgery
- Correct body part or side
- Everyone is ready

### After Surgery (Sign Out)

Before finishing, the team checks:
- Procedure done as planned
- All equipment counted
- Specimens labeled
- Patient ready for recovery

### Why Checklists Help

- Prevent wrong surgery
- Catch missed steps
- Improve teamwork
- Save lives

### Your Role

You can help by:
- Confirming your identity
- Marking the surgical site
- Asking questions
- Reporting any concerns`,
      keyTerms: [
        { term: 'Surgical checklist', definition: 'List of safety steps for surgery' },
        { term: 'Time out', definition: 'Pause before surgery to confirm details' },
        { term: 'Sign in', definition: 'Checks before anesthesia' },
        { term: 'Sign out', definition: 'Checks before leaving operating room' }
      ],
      analogies: [
        'A surgical checklist is like a pilot checklist before flying a plane'
      ],
      examples: [
        'The surgical team marks the correct knee before knee replacement surgery',
        'Everyone stops to confirm patient identity before starting the operation'
      ]
    },
    2: {
      level: 2,
      summary: 'The WHO Surgical Safety Checklist, introduced in 2008, reduced surgical complications and deaths by over 30% in pilot studies. It ensures communication, verifies critical steps, and promotes teamwork in the operating room.',
      explanation: `## The WHO Surgical Safety Checklist

The WHO Surgical Safety Checklist, introduced in 2008, reduced surgical complications and deaths by over 30% in pilot studies. It ensures communication, verifies critical steps, and promotes teamwork in the operating room.

### History and Impact

**Development:**
- WHO World Alliance for Patient Safety
- Launched in 2008
- Tested in 8 countries
- Now used worldwide

**Results:**
- 36% reduction in deaths
- 47% reduction in complications
- Improved team communication
- Better safety culture

### The Three Phases

**Sign In (Before Anesthesia):**
- Patient identity confirmed
- Site marked and verified
- Consent completed
- Anesthesia machine check
- Pulse oximeter on
- Known allergies
- Difficult airway assessment
- Aspiration risk
- Blood loss estimation

**Time Out (Before Incision):**
- All team members introduce themselves
- Patient identity confirmed
- Site and procedure confirmed
- Antibiotics given (if needed)
- Essential imaging displayed
- Special equipment available

**Sign Out (Before Leaving OR):**
- Procedure confirmed
- Sponge and instrument counts correct
- Specimens labeled
- Equipment issues addressed
- Recovery plan clear

### Key Safety Checks

**Site Marking:**
- Marked by surgeon
- Visible after prep
- Confirmed by patient when possible
- For procedures with laterality

**Antibiotic Prophylaxis:**
- Given within 60 minutes before incision
- Reduces surgical site infections
- Discontinued within 24 hours

**Deep Vein Thrombosis Prevention:**
- Mechanical prophylaxis
- Medication when indicated
- VTE risk assessment`,
      keyTerms: [
        { term: 'Surgical site infection', definition: 'Infection at the surgical wound' },
        { term: 'Pulse oximeter', definition: 'Device measuring blood oxygen' },
        { term: 'Prophylaxis', definition: 'Prevention of disease' },
        { term: 'VTE', definition: 'Venous thromboembolism (blood clots)' }
      ],
      analogies: [
        'The surgical checklist is like a team huddle before a big play in sports'
      ],
      examples: [
        'A time out catches that imaging is missing before starting spinal surgery',
        'The checklist confirms all team members know the patient has a latex allergy'
      ]
    },
    3: {
      level: 3,
      summary: 'Surgical checklists function as communication tools and standardization mechanisms. Implementation requires addressing barriers like culture change, time concerns, and appropriate modification for different surgical settings while maintaining core safety elements.',
      explanation: `## Implementing Surgical Checklists

Surgical checklists function as communication tools and standardization mechanisms. Implementation requires addressing barriers like culture change, time concerns, and appropriate modification for different surgical settings while maintaining core safety elements.

### Checklist as Communication Tool

**Team Briefings:**
- Case discussion before surgery
- Anticipate problems
- Assign roles
- Share concerns

**Structured Communication:**
- Everyone speaks
- Hierarchical barriers reduced
- Shared mental model
- Closed-loop communication

### Implementation Science

**Success Factors:**
- Leadership commitment
- Local modification
- Team training
- Ongoing feedback
- Data collection

**Common Barriers:**
- "We already do this"
- Time pressure
- Hierarchy issues
- Lack of engagement
- Poor design

**Overcoming Resistance:**
- Show data on complications
- Involve frontline staff in design
- Start with champions
- Regular feedback
- Celebrate successes

### Customization

**Specialty Adaptation:**
- Cardiac surgery additions
- Orthopedic protocols
- Ophthalmology modifications
- Ambulatory surgery adjustments

**Setting Variations:**
- Operating rooms
- Procedure rooms
- Emergency surgery
- Cesarean sections

**Required Elements:**
- Identity verification
- Procedure confirmation
- Site marking
- Antibiotic timing
- Count verification

### Measuring Effectiveness

**Process Measures:**
- Checklist completion rates
- Time out participation
- Antibiotic timing
- Site marking compliance

**Outcome Measures:**
- Wrong-site surgery rate
- Retained foreign objects
- Surgical site infections
- Mortality rates

**Balancing Measures:****
- Time to incision
- Case delays
- Staff satisfaction
- Efficiency metrics`,
      keyTerms: [
        { term: 'Implementation science', definition: 'Study of methods to promote adoption' },
        { term: 'Closed-loop communication', definition: 'Confirming message received and understood' },
        { term: 'Shared mental model', definition: 'Common understanding among team' },
        { term: 'Retained foreign object', definition: 'Surgical item left inside patient' }
      ]
    },
    4: {
      level: 4,
      summary: 'Surgical never events including wrong-site, wrong-procedure, and wrong-patient surgery require systems approaches beyond checklists. Universal Protocol mandates preoperative verification, site marking, and time out as Joint Commission requirements for all accredited organizations.',
      explanation: `## Preventing Surgical Never Events

Surgical never events including wrong-site, wrong-procedure, and wrong-patient surgery require systems approaches beyond checklists. Universal Protocol mandates preoperative verification, site marking, and time out as Joint Commission requirements for all accredited organizations.

### Universal Protocol

**Joint Commission Requirement:**
- Applies to all invasive procedures
- Three components required
- Monitored during surveys
- Sentinel events if violated

**Component 1: Preoperative Verification:**
- Reconciliation of documents
- Consistent information
- Missing information addressed
- Completed before anesthesia

**Component 2: Site Marking:**
- Marked by person performing procedure
- Unambiguous marking
- Visible after prep
- Patient involvement when possible
- For laterality or multiple structures

**Component 3: Time Out:**
- Immediate before incision
- Entire team participates
- Active communication
- Confirms: patient, site, procedure

### Wrong-Site Surgery Prevention

**Risk Factors:**
- Multiple surgeons/procedures
- Time pressure
- Unusual patient positioning
- Obesity affecting anatomy
- Multiple procedures on same patient

**High-Risk Procedures:**
- Orthopedic (laterality)
- Ophthalmology (eye)
- Neurosurgery (level)
- Urology (kidney/ureter)
- Dental (quadrant/tooth)

**Additional Safeguards:**
- Radiology confirmation
- "Stop before you block" (regional)
- Distinct site marking
- Photographs when helpful

### Retained Foreign Objects

**Prevention Strategies:**
- Sponge counting systems
- Radiopaque thread in sponges
- Wound exploration before closure
- X-ray when count incorrect
- Technology-assisted counting

**High-Risk Situations:**
- Emergency surgery
- High BMI
- Multiple procedures
- Team changes
- Unanticipated change

**Technology Solutions:**
- Barcode scanning
- Radiofrequency detection
- X-ray detectable items
- Computerized tracking

### Anesthesia Safety

**Pre-Anesthesia Check:**
- Machine check
- Suction working
- Emergency drugs available
- Backup ventilation
- Difficult airway equipment

**Surgical Fire Prevention:****
- Fire risk assessment
- O2 concentration minimized
- Alcohol-based prep dry
- Electrocautery safety
- Fire extinguisher available

**Medication Safety:**
- Labeling in sterile field
- Read-back for verbal orders
- High-alert medication protocols
- Syringe identification`,
      keyTerms: [
        { term: 'Never event', definition: 'Serious preventable medical error' },
        { term: 'Universal Protocol', definition: 'Joint Commission wrong-site prevention' },
        { term: 'Radiopaque', definition: 'Visible on x-ray' },
        { term: 'High-alert medication', definition: 'Drugs with high risk of harm' }
      ],
      clinicalNotes: 'Time out must occur before incision for every procedure - no exceptions. Site marking must be unambiguous - "X" not acceptable alone as it could mean "not this side." Retained sponge count discrepancies require x-ray before leaving OR. Surgical fires require fire triad: oxidizer, fuel, ignition source - remove any one to prevent.'
    },
    5: {
      level: 5,
      summary: 'Advanced surgical safety involves high-reliability organization principles, team training using crew resource management concepts, and continuous quality improvement. Emerging technologies including artificial intelligence, robotics integration, and augmented reality present new safety considerations for the operating room of the future.',
      explanation: `## High-Reliability Surgical Care

Advanced surgical safety involves high-reliability organization principles, team training using crew resource management concepts, and continuous quality improvement. Emerging technologies including artificial intelligence, robotics integration, and augmented reality present new safety considerations for the operating room of the future.

### Crew Resource Management (CRM)

**Aviation Origins:**
- Applied to healthcare
- Team communication
- Flattened hierarchy
- Speaking up encouraged

**Key Elements:**
- Briefings and debriefings
- Call-outs for critical steps
- Check-back communication
- Handoff protocols

**Training Programs:**
- TeamSTEPPS
- Simulation training
- Crisis resource management
- Communication skills

### High-Reliability Organizations

**Characteristics:**
- Preoccupation with failure
- Reluctance to simplify
- Sensitivity to operations
- Commitment to resilience
- Deference to expertise

**Surgical Applications:**
- Safety huddles
- Near-miss reporting
- Just culture
- Continuous learning
- Adaptive capacity

### Debriefings and Learning

**Post-Operative Debriefings:**
- What went well?
- What could improve?
- Equipment issues?
- Communication problems?
- Documentation of concerns

**Morbidity and Mortality Conference:**
- Case review
- System focus
- Learning culture
- No-blame analysis
- Improvement identification

### Technology and Safety

**Surgical Navigation:**
- Image guidance
- 3D visualization
- Real-time tracking
- Reduced complications

**Robotic Surgery:**
- New safety considerations
- System check protocols
- Backup plans
- Training requirements

**AI in Surgery:**
- Predicting complications
- Imaging analysis
- Workflow optimization
- Decision support

**Augmented Reality:****
- Overlay on surgical field
- Anatomical guidance
- Training applications
- Ergonomic considerations

### Quality Measurement

**NSQIP (National Surgical Quality Improvement Program):**
- Risk-adjusted outcomes
- Benchmarking
- Best practices
- Participation growing

**Surgeon-Specific Outcomes:**
- Public reporting debate
- Risk adjustment challenges
- Small numbers problem
- Gaming concerns

**Patient-Reported Outcomes:**
- Functional status
- Quality of life
- Satisfaction
- Long-term follow-up

### Future Directions

**Precision Surgery:**
- Personalized approaches
- Genomic risk stratification
- Targeted therapies
- Outcome prediction

**Global Surgery:****
- Checklist implementation worldwide
- Resource-limited adaptations
- Training programs
- Outcome disparities

**Human Factors Engineering:****
- OR design optimization
- Equipment standardization
- Fatigue management
- Ergonomic improvements`,
      keyTerms: [
        { term: 'Crew resource management', definition: 'Team training from aviation' },
        { term: 'High-reliability organization', definition: 'Organization avoiding failures in complex settings' },
        { term: 'Just culture', definition: 'Balancing accountability with learning' },
        { term: 'NSQIP', definition: 'ACS surgical quality program' }
      ],
      clinicalNotes: 'Debriefings improve team performance but often skipped due to time pressure. High-reliability principles require leadership commitment and cultural change. Robotic surgery adds complexity - specific system failures must be anticipated. NSQIP participation associated with improved outcomes through feedback and benchmarking.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'hospital-safety'],
    keywords: ['surgical safety', 'checklist', 'time out', 'universal protocol', 'never events']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
