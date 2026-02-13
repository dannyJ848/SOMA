/**
 * Patient-Centered Care - Putting Patients at the Center of Healthcare
 */

import { EducationalContent } from '../../types';

export const patientCenteredCare: EducationalContent = {
  id: 'interprofessional-patient-centered-care',
  type: 'concept',
  name: 'Patient-Centered Care',
  alternateNames: ['Person-Centered Care', 'Patient-Centered Medicine'],

  levels: {
    1: {
      level: 1,
      summary: 'Patient-centered care means that your healthcare is designed around what matters to YOU, not just your disease.',
      explanation: `**What is Patient-Centered Care?**

Patient-centered care means:
- Your values and preferences guide decisions
- You are treated as a whole person, not just a diagnosis
- Your family can be involved if you want
- Information is shared openly
- Your comfort and emotional needs matter

**What It Looks Like:**

- Doctors ask what is important to you
- You help make decisions about your treatment
- Staff respect your cultural background
- Your time and convenience are valued
- You get information you can understand

**How to Participate:**

- Share what matters most to you
- Ask questions when you don't understand
- Tell providers about your life and concerns
- Bring family or friends if it helps
- Give feedback about your care`,
      keyTerms: [
        { term: 'patient-centered care', definition: 'Healthcare that respects and responds to individual patient preferences and needs' },
        { term: 'values', definition: 'What is most important to you in life and in your healthcare' },
        { term: 'preferences', definition: 'Your choices about how you want to receive care' },
      ],
      analogies: ['Patient-centered care is like a restaurant where the chef asks what you like before cooking your meal'],
      examples: ['Before surgery, the team asks Maria about her goals, fears, and what recovery success would look like to her'],
      patientCounselingPoints: ['Share what matters most to you', 'You are the expert on your own life'],
    },
    2: {
      level: 2,
      summary: 'Patient-centered care integrates patient values, preferences, and needs into all healthcare decisions and processes.',
      explanation: `## IOM/Picker Dimensions

**Eight Dimensions:**
1. Respect for patient values, preferences
2. Coordination and integration of care
3. Information, communication, education
4. Physical comfort
5. Emotional support
6. Involvement of family and friends
7. Continuity and transition
8. Access to care

## Key Practices

**Communication:**
- Ask about patient priorities
- Explain in understandable terms
- Share decision-making
- Confirm understanding (teach-back)

**Care Planning:**
- Goals of care discussions
- Patient preferences documented
- Care plans reflect patient values
- Regular reassessment

**Access and Convenience:**
- Flexible scheduling
- Multiple communication channels
- Reduced wait times
- Telehealth options

## Patient Engagement Levels

**Inform:** Provide information
**Consult:** Seek patient input
**Partner:** Share decisions
**Empower:** Support patient leadership`,
      keyTerms: [
        { term: 'Picker dimensions', definition: 'Eight domains defining patient-centered care quality' },
        { term: 'shared decision-making', definition: 'Collaborative process where patients and providers make decisions together' },
        { term: 'patient engagement', definition: 'Active participation of patients in their healthcare' },
      ],
      patientCounselingPoints: ['Ask about what matters most', 'Share your preferences and goals'],
    },
    3: {
      level: 3,
      summary: 'Patient-centered care is a core quality domain with measurement approaches and implementation strategies.',
      explanation: `## Measurement

**CAHPS Surveys:**
- Consumer Assessment of Healthcare Providers and Systems
- Standardized patient experience measures
- Hospital, clinic, health plan versions
- Public reporting and payment ties

**Patient Experience Domains:**
- Communication with providers
- Access to care
- Care coordination
- Respect and dignity
- Information provision

## Implementation Approaches

**Staff Training:**
- Communication skills
- Cultural competency
- Implicit bias awareness
- Service excellence

**Environment:**
- Welcoming physical spaces
- Privacy considerations
- Accessibility
- Comfort amenities

**Processes:**
- Appointment flexibility
- Wait time reduction
- Care coordination
- Follow-up communication

## Evidence

**Outcomes Associated with PCC:**
- Better clinical outcomes
- Higher satisfaction
- Improved adherence
- Reduced utilization in some settings
- Better safety (patient as safety partner)`,
      keyTerms: [
        { term: 'CAHPS', definition: 'Consumer Assessment of Healthcare Providers and Systems - standardized patient experience survey' },
        { term: 'patient experience', definition: 'Patient perceptions of their healthcare encounters' },
        { term: 'cultural competency', definition: 'Ability to effectively deliver care considering cultural factors' },
      ],
      clinicalNotes: 'Measure patient experience. Train staff in communication. Design processes around patient needs.',
    },
    4: {
      level: 4,
      summary: 'Patient-centered care requires organizational culture change and system redesign to genuinely embed patient perspectives.',
      explanation: `## Organizational Culture

**Leadership Commitment:**
- Vision and values
- Resource allocation
- Accountability
- Role modeling

**Staff Engagement:**
- Training and development
- Performance expectations
- Recognition systems
- Continuous improvement

## Patient and Family Engagement

**Levels of Engagement:**
- Individual care level
- Organizational design level
- Policy and governance level

**Patient Advisory Councils:**
- Patient/family representation
- Input on policies and design
- Quality improvement participation
- Governance roles

## Quality Improvement

**Experience as Quality Dimension:**
- Equal to clinical quality and safety
- Measurement and reporting
- Improvement targets
- Accountability mechanisms

**Design Thinking:**
- Co-design with patients
- Journey mapping
- Prototype and iterate
- Continuous feedback

## Challenges

**Barriers:**
- Time constraints
- Volume pressure
- Professional culture
- System complexity

**Tensions:**
- Patient preferences vs evidence
- Individual vs population
- Efficiency vs experience`,
      keyTerms: [
        { term: 'patient advisory council', definition: 'Group of patients advising healthcare organizations on patient experience' },
        { term: 'co-design', definition: 'Designing healthcare processes together with patients' },
        { term: 'journey mapping', definition: 'Visualizing the complete patient experience across touchpoints' },
      ],
      clinicalNotes: 'Engage patients in design. Build patient experience into quality infrastructure. Address culture barriers.',
    },
    5: {
      level: 5,
      summary: 'Patient-centered care is foundational to healthcare quality, requiring policy support, measurement innovation, and equity focus.',
      explanation: `## Policy Framework

**Quality Domains (IOM):**
- Safe
- Effective
- Patient-centered
- Timely
- Efficient
- Equitable

**Payment Ties:**
- HCAHPS in value-based purchasing
- Star ratings for MA plans
- Public reporting
- Quality incentives

## Measurement Evolution

**Beyond Satisfaction:**
- Patient-reported outcomes (PROMs)
- Patient-reported experience (PREMs)
- Patient activation
- Shared decision-making quality

**Health Equity:**
- Disparities in patient experience
- Culturally adapted measurement
- Language access assessment
- Targeted improvement

## Future Directions

**Technology:**
- Digital patient engagement
- Real-time feedback
- AI-assisted personalization
- Consumer-facing tools

**Person-Centered Care:**
- Whole person orientation
- Social determinants integration
- Community connections
- Life goals orientation

**Co-Production:**
- Patients as partners in care delivery
- Peer support integration
- Self-management support
- Activated patients`,
      keyTerms: [
        { term: 'PROMs', definition: 'Patient-Reported Outcome Measures - patient assessment of their health status' },
        { term: 'value-based purchasing', definition: 'Payment tied to quality including patient experience' },
        { term: 'co-production', definition: 'Healthcare created jointly by providers and patients' },
      ],
      clinicalNotes: 'Advance to PROMs. Address equity in experience. Embrace co-production models.',
    },
  },

  media: [],
  citations: [{ id: 'iom-crossing-quality', type: 'article', title: 'Crossing the Quality Chasm', source: 'Institute of Medicine' }],
  crossReferences: [{ targetId: 'interprofessional-collaborative-practice', targetType: 'concept', relationship: 'sibling', label: 'Collaborative Practice' }],
  tags: { systems: ['team-based-care'], topics: ['patient-centered care', 'quality'], keywords: ['patient-centered', 'experience', 'CAHPS'], clinicalRelevance: 'critical' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default patientCenteredCare;
