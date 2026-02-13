/**
 * Finding Care - How to Find the Right Healthcare Provider
 */

import { EducationalContent } from '../../types';

export const findingCare: EducationalContent = {
  id: 'health-literacy-finding-care',
  type: 'concept',
  name: 'Finding Healthcare Providers',
  alternateNames: ['How to Find a Doctor', 'Choosing Healthcare Providers'],

  levels: {
    1: {
      level: 1,
      summary: 'Knowing how to find the right doctor or clinic helps you get good care when you need it.',
      explanation: `**Types of Doctors You Might Need:**

- **Primary Care Doctor:** Your main doctor for checkups and common problems
- **Specialist:** A doctor who focuses on one area (like heart or skin)
- **Urgent Care:** For problems that need quick care but are not emergencies
- **Emergency Room:** For serious, life-threatening emergencies

**How to Find a Doctor:**

1. Ask your insurance for a list of in-network doctors
2. Ask friends and family for recommendations
3. Check if the doctor is taking new patients
4. Make sure the location and hours work for you

**Questions to Ask:**

- Do you accept my insurance?
- Are you taking new patients?
- How long is the wait for an appointment?`,
      keyTerms: [
        { term: 'primary care', definition: 'Your regular doctor for checkups and general health needs' },
        { term: 'specialist', definition: 'A doctor who focuses on one part of the body or type of problem' },
        { term: 'referral', definition: 'When one doctor recommends you see another doctor' },
      ],
      analogies: ['Finding a doctor is like finding a good mechanic - you want someone you trust and can get to easily'],
      examples: ['Sara calls her insurance to get a list of primary care doctors near her home'],
      patientCounselingPoints: ['Start by finding a primary care doctor', 'Check if doctor is in your insurance network'],
    },
    2: {
      level: 2,
      summary: 'Understanding the healthcare system helps you choose appropriate providers and access timely care.',
      explanation: `## Levels of Care

**Primary Care:** First point of contact, preventive care, chronic disease management
**Specialty Care:** Referral-based, specific conditions or organ systems
**Urgent Care:** Same-day, non-emergency acute issues
**Emergency Care:** Life-threatening conditions, 24/7 access

## Finding Providers

**Insurance Resources:**
- Provider directory (online or call member services)
- In-network vs out-of-network cost differences
- Prior authorization requirements for specialists

**Quality Information:**
- Hospital Compare, Physician Compare (Medicare)
- Health grades and patient reviews
- Board certification verification

## Access Considerations

- Geographic proximity and transportation
- Office hours and appointment availability
- Language services and accessibility
- Telehealth options`,
      keyTerms: [
        { term: 'provider directory', definition: 'List of doctors and facilities that accept your insurance' },
        { term: 'board certification', definition: 'Credential showing doctor completed training and passed exams' },
        { term: 'patient-centered medical home', definition: 'Care model with team-based primary care coordination' },
      ],
      patientCounselingPoints: ['Use your insurance provider directory', 'Ask about telehealth options'],
    },
    3: {
      level: 3,
      summary: 'Healthcare navigation skills are essential for optimal utilization and health outcomes.',
      explanation: `## Care Navigation Framework

**Access:** Finding available, affordable, appropriate care
**Utilization:** Using the right level of care at the right time
**Continuity:** Maintaining ongoing relationships with providers
**Coordination:** Ensuring information flows between providers

## Provider Selection Criteria

**Quality Indicators:**
- Clinical outcomes data
- Patient experience scores
- Accreditation status
- Quality certifications

**Practical Factors:**
- Insurance network status
- Geographic accessibility
- Appointment availability
- Communication style match

## System Navigation Tools

- Patient navigators and care coordinators
- Nurse advice lines
- Digital health platforms
- Community health resources`,
      keyTerms: [
        { term: 'care coordination', definition: 'Organizing patient care activities between providers' },
        { term: 'patient navigator', definition: 'Professional who helps patients access and navigate healthcare' },
        { term: 'continuity of care', definition: 'Ongoing relationship with consistent providers over time' },
      ],
      clinicalNotes: 'Assess navigation barriers. Connect patients with navigator resources.',
    },
    4: {
      level: 4,
      summary: 'Healthcare access is multidimensional, requiring system-level interventions to address barriers.',
      explanation: `## Access Dimensions (Penchansky)

**Availability:** Supply of providers relative to need
**Accessibility:** Geographic proximity and transportation
**Accommodation:** Hours, appointment systems, wait times
**Affordability:** Costs relative to ability to pay
**Acceptability:** Patient-provider match on preferences

## Disparities in Access

- Rural provider shortages
- Specialty care deserts
- Language and cultural barriers
- Insurance-based discrimination
- Implicit bias in care delivery

## Intervention Levels

**Individual:** Navigation assistance, transportation support
**Organizational:** Extended hours, community locations, telehealth
**Policy:** Workforce development, network adequacy standards`,
      keyTerms: [
        { term: 'health professional shortage area', definition: 'Geographic area with provider-to-population ratio below threshold' },
        { term: 'network adequacy', definition: 'Standards for sufficient provider access in insurance networks' },
        { term: 'implicit bias', definition: 'Unconscious attitudes affecting clinical decisions and interactions' },
      ],
      clinicalNotes: 'Document access barriers. Advocate for system improvements and community resources.',
    },
    5: {
      level: 5,
      summary: 'Healthcare access is a fundamental determinant of health equity requiring policy and system transformation.',
      explanation: `## Policy Framework

**Coverage:** Insurance as gateway to access
**Workforce:** Training, distribution, diversity
**Delivery System:** Models promoting access and coordination
**Technology:** Telehealth, digital health tools

## Quality and Access Integration

- HEDIS access measures
- Patient experience surveys (CAHPS)
- Timeliness of care metrics
- Health equity reporting

## Emerging Models

**Community Health Centers:** Federally qualified, sliding scale, comprehensive
**Retail Health:** Convenient access for minor acute issues
**Virtual-First Care:** Digital-native primary care models
**Hospital at Home:** Acute care in community settings

## Health Equity Imperative

- Address structural barriers
- Community-based solutions
- Workforce diversity initiatives
- Payment reform for underserved populations`,
      keyTerms: [
        { term: 'federally qualified health center', definition: 'Community health center receiving federal funding for underserved' },
        { term: 'virtual-first care', definition: 'Care model using telehealth as primary access point' },
        { term: 'social determinants of health', definition: 'Conditions where people live that affect health outcomes' },
      ],
      clinicalNotes: 'Integrate SDOH screening. Partner with community organizations for access solutions.',
    },
  },

  media: [],
  citations: [{ id: 'hrsa-find', type: 'website', title: 'Find a Health Center', source: 'HRSA' }],
  crossReferences: [{ targetId: 'health-literacy-insurance-basics', targetType: 'concept', relationship: 'sibling', label: 'Insurance Basics' }],
  tags: { systems: ['navigating-systems'], topics: ['healthcare access', 'finding providers'], keywords: ['finding doctors', 'healthcare access'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default findingCare;
