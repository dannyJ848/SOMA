/**
 * Allied Health Roles - Other Essential Healthcare Team Members
 */

import { EducationalContent } from '../../types';

export const alliedHealthRoles: EducationalContent = {
  id: 'interprofessional-allied-health-roles',
  type: 'concept',
  name: 'Allied Health Professionals',
  alternateNames: ['Healthcare Team Members', 'Allied Health Roles'],

  levels: {
    1: {
      level: 1,
      summary: 'Many different professionals work together to take care of you, each with special skills to help with different parts of your health.',
      explanation: `**Allied Health Team Members:**

**Pharmacist:** Expert on medications - makes sure your drugs are safe and effective

**Physical Therapist (PT):** Helps you move better, get stronger, and recover from injuries

**Occupational Therapist (OT):** Helps you do daily activities like dressing and cooking

**Speech Therapist (SLP):** Helps with speaking, swallowing, and communication

**Social Worker:** Helps with emotional support, resources, and discharge planning

**Dietitian:** Expert on nutrition and diet

**Respiratory Therapist:** Helps with breathing problems and ventilators

**Each Person Brings Special Skills:**

All these professionals went to school to learn their specialty. Together with doctors and nurses, they make up your healthcare team.`,
      keyTerms: [
        { term: 'pharmacist', definition: 'A medication expert who prepares and checks that drugs are safe' },
        { term: 'physical therapist', definition: 'A specialist who helps people move and function better' },
        { term: 'social worker', definition: 'A professional who helps with emotional and practical needs' },
      ],
      analogies: ['Your healthcare team is like a sports team - each player has a different position but works toward the same goal'],
      examples: ['After hip surgery, John sees a PT to learn to walk again and an OT to practice getting dressed safely'],
      patientCounselingPoints: ['Ask each team member how they can help you', 'Everyone on the team is working together for you'],
    },
    2: {
      level: 2,
      summary: 'Allied health professionals provide specialized services essential to comprehensive patient care and recovery.',
      explanation: `## Pharmacy

**Pharmacist Roles:**
- Medication dispensing and verification
- Drug interaction checking
- Patient counseling
- Medication therapy management
- Immunizations

**Pharmacy Technicians:**
- Assist pharmacist
- Preparation and distribution

## Rehabilitation Therapies

**Physical Therapy (PT):**
- Mobility and strength
- Pain management
- Post-surgical rehabilitation
- Balance and fall prevention

**Occupational Therapy (OT):**
- Activities of daily living
- Cognitive rehabilitation
- Adaptive equipment
- Home modifications

**Speech-Language Pathology (SLP):**
- Communication disorders
- Swallowing/dysphagia
- Cognitive-communication
- Voice disorders

## Other Key Professionals

**Social Work:**
- Psychosocial assessment
- Discharge planning
- Resource connection
- Crisis intervention

**Registered Dietitian (RD):**
- Medical nutrition therapy
- Diet education
- Tube feeding management
- Disease-specific diets

**Respiratory Therapy (RT):**
- Ventilator management
- Oxygen therapy
- Airway management
- Pulmonary rehabilitation`,
      keyTerms: [
        { term: 'activities of daily living (ADLs)', definition: 'Basic self-care tasks like bathing, dressing, eating' },
        { term: 'medication therapy management', definition: 'Pharmacist service to optimize medication use' },
        { term: 'dysphagia', definition: 'Difficulty swallowing' },
      ],
      patientCounselingPoints: ['Ask about therapy goals and home exercises', 'Tell the team about your home situation and needs'],
    },
    3: {
      level: 3,
      summary: 'Allied health disciplines have distinct scopes of practice while contributing to interprofessional team-based care.',
      explanation: `## Professional Standards

**Education Requirements:**
- Most require at least bachelor's degree
- Many require master's or doctoral degree
- Clinical rotations/internships
- National certification
- State licensure

**Scope of Practice:**
- Defined by state law
- Professional standards
- Facility policies
- Evidence-based practice

## Interprofessional Collaboration

**Team Contributions:**
- Discipline-specific assessments
- Treatment planning input
- Goal setting
- Progress monitoring
- Discharge recommendations

**Communication:**
- Documentation in EHR
- Team meetings/rounds
- Direct consultation
- Care conferences

## Quality and Outcomes

**Profession-Specific Measures:**
- Functional outcomes
- Patient satisfaction
- Complications/adverse events
- Cost-effectiveness

**Value Demonstration:**
- Length of stay impact
- Readmission reduction
- Functional improvement
- Quality of life`,
      keyTerms: [
        { term: 'scope of practice', definition: 'Legally defined activities a profession can perform' },
        { term: 'national certification', definition: 'Credential from professional organization demonstrating competency' },
        { term: 'interprofessional education', definition: 'Learning about, from, and with other health professions' },
      ],
      clinicalNotes: 'Engage allied health early. Value their assessments and recommendations. Include in care planning.',
    },
    4: {
      level: 4,
      summary: 'Allied health workforce is essential to healthcare delivery, requiring attention to supply, scope optimization, and team integration.',
      explanation: `## Workforce Dynamics

**Supply Challenges:**
- Shortages in many disciplines
- Geographic maldistribution
- Education capacity limits
- Reimbursement constraints

**Practice Settings:**
- Acute care hospitals
- Rehabilitation facilities
- Outpatient clinics
- Home health
- Long-term care
- Schools and community

## Scope of Practice Considerations

**Optimization:**
- Practice to top of license
- Appropriate delegation
- Collaboration models
- Telehealth expansion

**Interprofessional Practice:**
- Shared competencies
- Complementary roles
- Collaborative agreements
- Team-based models

## Reimbursement and Value

**Payment Models:**
- Fee-for-service (declining)
- Episode-based bundled payments
- Value-based arrangements
- Population health

**Demonstrating Value:**
- Outcomes research
- Cost-effectiveness data
- Quality metrics
- Patient experience`,
      keyTerms: [
        { term: 'practice to top of license', definition: 'Using full scope of professional training and competency' },
        { term: 'bundled payment', definition: 'Single payment for all services in a care episode' },
        { term: 'value-based care', definition: 'Reimbursement tied to quality outcomes rather than volume' },
      ],
      clinicalNotes: 'Support scope optimization. Integrate into care teams. Document outcomes for value demonstration.',
    },
    5: {
      level: 5,
      summary: 'Allied health professions are evolving with healthcare transformation, requiring workforce development, integration, and innovation.',
      explanation: `## Workforce Development

**Education:**
- Interprofessional education integration
- Competency-based training
- Simulation and technology
- Residency/fellowship programs

**Recruitment and Retention:**
- Pipeline programs
- Loan forgiveness
- Work environment
- Career advancement

## Healthcare Transformation

**Care Model Evolution:**
- Team-based care
- Care coordination roles
- Chronic disease management
- Population health

**Technology Impact:**
- Telehealth services
- Remote monitoring
- AI applications
- Digital therapeutics

## Policy and Advocacy

**Scope of Practice:**
- Modernization efforts
- Interstate compacts
- Medicare/Medicaid coverage

**Workforce Policy:**
- Title VII funding
- Workforce projections
- Distribution incentives

## Future Directions

**Emerging Roles:**
- Care coordinators
- Community health workers integration
- Digital health specialists
- Population health managers

**Research Priorities:**
- Effectiveness studies
- Team composition optimization
- Technology integration
- Health equity impact`,
      keyTerms: [
        { term: 'interprofessional education (IPE)', definition: 'When students from different professions learn together' },
        { term: 'community health worker', definition: 'Frontline worker serving as bridge between community and health system' },
        { term: 'Title VII', definition: 'Federal health professions training funding' },
      ],
      clinicalNotes: 'Advocate for workforce investment. Embrace new care models. Foster interprofessional education.',
    },
  },

  media: [],
  citations: [{ id: 'apta-vision', type: 'website', title: 'APTA Vision Statement', source: 'APTA' }],
  crossReferences: [{ targetId: 'interprofessional-nursing-role', targetType: 'concept', relationship: 'sibling', label: 'Nursing Role' }],
  tags: { systems: ['roles-responsibilities'], topics: ['allied health', 'healthcare team'], keywords: ['pharmacy', 'therapy', 'social work'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default alliedHealthRoles;
