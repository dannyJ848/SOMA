import type { EducationalContent } from '../../types';

export const sbarCommunication: EducationalContent = {
  id: 'sbar-communication',
  type: 'concept',
  name: 'SBAR Communication',
  alternateNames: ['Situation-Background-Assessment-Recommendation', 'SBAR Tool'],

  levels: {
    1: {
      level: 1,
      summary: 'SBAR is a simple way for healthcare workers to share important patient information clearly and quickly.',
      explanation: `**What is SBAR?**

SBAR is a communication tool that helps healthcare workers share information in a clear, organized way. It stands for:

- **S**ituation: What is happening right now?
- **B**ackground: What is the patient\'s history?
- **A**ssessment: What do you think is wrong?
- **R**ecommendation: What should we do next?

**Why Use SBAR?**

Healthcare workers need to share information quickly and clearly. SBAR helps everyone:
- Stay organized
- Share the most important facts
- Make better decisions together
- Keep patients safe

**When to Use SBAR:**

- Calling a doctor about a patient
- Reporting changes in a patient\'s condition
- Handing off care to another worker
- Asking for help in an emergency

**Example SBAR:**

**Situation:** "Mr. Smith in room 205 has chest pain."
**Background:** "He had heart surgery last week and has diabetes."
**Assessment:** "His blood pressure is high and he looks sweaty."
**Recommendation:** "I think we need an ECG now and the doctor to see him."`,
      keyTerms: [
        { term: 'SBAR', definition: 'A communication tool for healthcare: Situation, Background, Assessment, Recommendation' },
        { term: 'situation', definition: 'The current problem or what is happening now' },
        { term: 'assessment', definition: 'What the healthcare worker thinks is wrong based on their evaluation' },
        { term: 'recommendation', definition: 'What action the worker suggests should happen next' },
      ],
      analogies: ['SBAR is like telling a story with a beginning, middle, and end - it keeps everything organized'],
      examples: ['A nurse calls a doctor using SBAR to report a patient\'s fever and request medication'],
      patientCounselingPoints: ['Healthcare workers use special tools to make sure they share your information clearly', 'You can ask your care team to explain things using simple language'],
    },
    2: {
      level: 2,
      summary: 'SBAR is a standardized communication framework that improves information transfer between healthcare providers.',
      explanation: `## The SBAR Framework

**Purpose:**
SBAR creates a shared mental model for communication. It ensures critical information is organized consistently, reducing errors and improving response times.

## Breakdown of Components

**Situation:**
- Patient identifier (name, room number, medical record number)
- Current problem or concern
- When it started
- Severity level

**Background:**
- Relevant medical history
- Current diagnoses
- Current medications
- Recent procedures or events
- Baseline status vs. current status

**Assessment:**
- Clinical observations (vitals, physical findings)
- Interpretation of data
- Severity assessment
- Potential causes

**Recommendation:**
- Specific actions requested
- Urgency level
- Resources needed
- Contingency plans

## Benefits of SBAR

**For Senders:**
- Organizes thoughts before communicating
- Ensures completeness
- Builds confidence
- Reduces anxiety

**For Receivers:**
- Anticipates information structure
- Facilitates faster processing
- Enables better questions
- Improves decision-making

**For Patients:**
- Safer care through better communication
- Faster response to problems
- Clearer care coordination

## Implementation Tips

- Practice using the format before critical situations
- Adapt to your setting while keeping core structure
- Use written SBAR for complex cases
- Include only relevant background information`,
      keyTerms: [
        { term: 'shared mental model', definition: 'A common understanding of the situation among team members' },
        { term: 'standardized communication', definition: 'Using a consistent format to ensure all critical information is included' },
        { term: 'handoff', definition: 'Transferring patient care responsibility from one provider to another' },
      ],
      analogies: ['SBAR is like a template for writing an email - it ensures you include all the important parts in the right order'],
      examples: ['Nurse-to-physician communication about deteriorating patient status', 'Paramedic-to-ED handoff for trauma patients'],
      patientCounselingPoints: ['Ask your healthcare team to use clear communication when discussing your care', 'If you do not understand something, ask them to explain it again'],
    },
    3: {
      level: 3,
      summary: 'SBAR originated in naval aviation and was adapted for healthcare to reduce communication errors and improve patient safety outcomes.',
      explanation: `## Origins and Evidence Base

**Naval Aviation Roots:**
SBAR was developed in the nuclear submarine and aviation industries where communication errors could be catastrophic. The Joint Commission adapted it for healthcare in the early 2000s.

**Research Evidence:**
- Reduces adverse events in hospitals
- Improves nurse-physician communication satisfaction
- Decreases time to appropriate interventions
- Reduces communication-related errors
- Supports culture of safety

## Advanced SBAR Application

**SBAR-R (Read-back):**
Adding read-back verification to ensure message received accurately.

**ISBAR (Identity):**
Adding patient identification as first step for situations involving multiple patients.

**SBAR with CUS Words:**
Combining with CUS (Concerned, Uncomfortable, Safety issue) for graded assertiveness.

## Structured Implementation

**Training Components:**
1. Didactic learning of framework
2. Role-playing scenarios
3. Simulation practice
4. Real-world application with feedback
5. Competency validation

**Organizational Support:**
- Policy requiring SBAR for specific communications
- Pocket cards or posters for reference
- EHR integration where possible
- Leadership modeling behavior
- Regular audit and feedback

## Variations and Adaptations

**ISBAR:**
- Identity
- Situation
- Background
- Assessment
- Recommendation

**SBARD:**
- SBAR plus Documentation

**SSBAR:**
- Stop (introduce yourself)
- SBAR

**Customization for Settings:**
- Emergency departments: Rapid SBAR
- ICUs: Detailed assessment focus
- Primary care: Brief SBAR for phone calls
- Long-term care: Focus on baseline changes`,
      keyTerms: [
        { term: 'Joint Commission', definition: 'Independent organization that accredits healthcare organizations in the United States' },
        { term: 'CUS words', definition: 'Concerned, Uncomfortable, Safety issue - escalation phrases for assertive communication' },
        { term: 'graded assertiveness', definition: 'Escalating communication intensity based on response received' },
      ],
      clinicalNotes: 'SBAR is now a standard component of patient safety programs. Train all staff and monitor compliance through observation.',
    },
    4: {
      level: 4,
      summary: 'SBAR implementation requires addressing human factors, organizational culture, and system integration to achieve sustained improvement in communication quality.',
      explanation: `## Human Factors in SBAR

**Cognitive Load Management:**
SBAR reduces cognitive load by providing a structured template. This is especially important during:
- High-stress situations
- Fatigue conditions
- Multitasking scenarios
- Night shifts

**Communication Dynamics:**

**Power Gradients:**
SBAR helps flatten hierarchy by giving all team members a structured way to communicate upward. Critical for:
- Nurses to physicians
- Junior to senior staff
- Non-physician to physician communication

**Situational Awareness:**
SBAR creates shared situational awareness by:
- Establishing common understanding
- Highlighting critical information
- Reducing assumptions
- Facquiring questions

## System Integration

**Electronic Health Records:**
- SBAR templates for secure messaging
- Automated SBAR generation from flowsheet data
- Integration with communication systems
- Documentation of SBAR exchanges

**Team Training:**
SBAR is a core component of:
- TeamSTEPPS curriculum
- CRM (Crew Resource Management) training
- Interprofessional education
- Communication competency programs

## Measurement and Quality Improvement

**Process Measures:**
- Frequency of SBAR use
- Completeness of SBAR elements
- Time to complete communication
- Documentation of SBAR

**Outcome Measures:**
- Response times to clinical concerns
- Safety event rates
- Communication satisfaction scores
- Staff confidence in communication

**Balancing Measures:**
- Time burden
- Staff satisfaction
- Workflow disruption

## Challenges and Solutions

**Challenge:** "Takes too long"
**Solution:** Practice reduces time; emphasize efficiency

**Challenge:** "Feels awkward or scripted"
**Solution:** Frame as safety tool; normalize through practice

**Challenge:** "Not everyone uses it"
**Solution:** Leadership mandate; include in performance review

**Challenge:** "Does not fit every situation"
**Solution:** Allow flexibility while maintaining core elements`,
      keyTerms: [
        { term: 'situational awareness', definition: 'Understanding of current environment, including perception of elements and projection of future status' },
        { term: 'TeamSTEPPS', definition: 'Team Strategies and Tools to Enhance Performance and Patient Safety - evidence-based teamwork system' },
        { term: 'power gradient', definition: 'Hierarchy difference that can inhibit communication between team members' },
      ],
      clinicalNotes: 'SBAR should be integrated into daily workflows. Address resistance through education and leadership support. Monitor both process and outcome measures.',
    },
    5: {
      level: 5,
      summary: 'SBAR represents a high-reliability organizing principle that supports healthcare\'s journey toward becoming a high-reliability industry with robust communication practices.',
      explanation: `## Theoretical Framework

**High-Reliability Organization (HRO) Principles:**
SBAR operationalizes HRO principles:
- Preoccupation with failure
- Reluctance to simplify
- Sensitivity to operations
- Commitment to resilience
- Deference to expertise

**Communication Theory:**
SBAR applies closed-loop communication principles and standardizes information transfer to reduce entropy in clinical messaging.

## Advanced Implementation Science

**Diffusion of Innovation:**
SBAR adoption follows Rogers\' diffusion curve:
- Innovators (champions)
- Early adopters (physician leaders)
- Early majority (staff who see value)
- Late majority (those requiring mandates)
- Laggards (resistant individuals)

**Implementation Strategies:**

**1. Educational Outreach:**
- Academic detailing
- Opinion leader engagement
- Multifaceted education

**2. System Redesign:**
- Workflow integration
- EHR functionality
- Policy alignment

**3. Quality Improvement:**
- Plan-Do-Study-Act cycles
- Statistical process control
- Benchmarking

## Research Frontiers

**Current Investigation Areas:**
- Optimal training modalities
- Sustainability strategies
- Impact on specific outcomes
- Cost-effectiveness analysis
- Technology integration

**Emerging Applications:**
- AI-assisted SBAR generation
- Voice recognition integration
- Predictive analytics
- Patient-facing SBAR tools
- Inter-organizational SBAR

## Global and Cross-Cultural Considerations

**International Adoption:**
- WHO Patient Safety Solutions recommends standardized communication
- Variations exist across healthcare systems
- Language and cultural adaptations needed

**Cultural Adaptation:**
- High-power distance cultures may need additional assertiveness training
- Language barriers require translation support
- Context-dependent communication styles may conflict with direct SBAR structure

## Regulatory and Accreditation

**The Joint Commission:**
- Requires standardized handoff communication
- SBAR meets this requirement
- Monitored during accreditation surveys

**Specialty Applications:**
- Anesthesia: Modified SBAR for OR communication
- Emergency Medicine: Rapid SBAR protocols
- Surgery: Surgical safety checklist integration
- Pediatrics: Family-inclusive SBAR`,
      keyTerms: [
        { term: 'high-reliability organization', definition: 'Organization that operates in complex, high-hazard domains without serious accidents or failures' },
        { term: 'closed-loop communication', definition: 'Communication verified by receiver repeating back the message to confirm understanding' },
        { term: 'academic detailing', definition: 'Educational outreach using one-on-one contact to influence practice behavior' },
      ],
      clinicalNotes: 'SBAR should be viewed as part of a broader communication and safety culture. Invest in training, measure outcomes, and continuously improve implementation.',
    },
  },

  media: [],
  citations: [
    { id: 'sbar-origins', type: 'article', title: 'SBAR Technique for Communication', source: 'Institute for Healthcare Improvement', url: 'http://www.ihi.org' },
    { id: 'teamstepps', type: 'textbook', title: 'TeamSTEPPS Curriculum', source: 'AHRQ' }
  ],
  crossReferences: [
    { targetId: 'interprofessional-handoffs', targetType: 'concept', relationship: 'related', label: 'Clinical Handoffs' },
    { targetId: 'conflict-resolution', targetType: 'concept', relationship: 'related', label: 'Conflict Resolution' }
  ],
  tags: {
    systems: [],
    topics: ['interprofessional', 'communication', 'patient safety'],
    keywords: ['SBAR', 'communication', 'handoff', 'safety'],
    clinicalRelevance: 'critical'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};

export default sbarCommunication;
