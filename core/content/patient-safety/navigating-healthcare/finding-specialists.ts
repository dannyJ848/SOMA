/**
 * Finding Specialists
 *
 * Guidance for finding and choosing specialty healthcare providers.
 */

import { EducationalContent } from '../../types';

export const findingSpecialists: EducationalContent = {
  id: 'concept-finding-specialists',
  type: 'concept',
  name: 'Finding Specialists',
  alternateNames: ['Choosing a Specialist', 'Specialty Care', 'Referral Navigation'],

  levels: {
    1: {
      level: 1,
      summary: 'Sometimes you need a doctor who is an expert in one type of health problem. Learning how to find the right specialist helps you get the best care.',
      explanation: `**What Is a Specialist?**
A specialist is a doctor who knows a lot about one part of the body or one type of health problem. For example:
- Heart doctors (cardiologists)
- Bone doctors (orthopedists)
- Skin doctors (dermatologists)
- Cancer doctors (oncologists)

**When Do You Need a Specialist?**
- Your regular doctor recommends one
- You have a health problem that needs expert care
- You need special tests or treatments
- You want another opinion

**How to Find a Specialist:**

*Ask Your Regular Doctor:*
- They can recommend someone
- They can send a referral
- They know who is good

*Check Your Insurance:*
- Some specialists might not be covered
- You may need a referral first
- Look at the list of in-network doctors

*Ask People You Trust:*
- Family and friends might know someone
- Other patients can share experiences

**Questions to Ask:**

| Question | Why It Matters |
|----------|----------------|
| Do you treat my condition? | Make sure they are the right type |
| Are you in my insurance? | Avoid surprise bills |
| How long is the wait? | Plan ahead |
| Where is your office? | Make sure you can get there |

**Before Your Visit:**
- Bring your medical records
- Write down your questions
- Bring your medicine list
- Know your insurance information

**Remember:**
It is okay to take your time finding the right specialist. A good fit matters!`,
      keyTerms: [
        { term: 'specialist', definition: 'A doctor who is an expert in one area of medicine' },
        { term: 'referral', definition: 'When your regular doctor sends you to see another doctor' },
        { term: 'in-network', definition: 'Doctors who work with your insurance plan' },
      ],
      analogies: [
        'A specialist is like a expert mechanic - while a regular mechanic fixes many things, a specialist focuses on one part like brakes or engines.',
        'Getting a referral is like getting a recommendation for a restaurant - someone you trust points you in the right direction.',
      ],
      examples: [
        'A patient with a heart problem asks their regular doctor to recommend a cardiologist.',
        'Someone checks their insurance website to find a dermatologist in their network.',
      ],
    },
    2: {
      level: 2,
      summary: 'Finding the right specialist involves understanding referral requirements, evaluating provider qualifications, and ensuring insurance compatibility.',
      explanation: `**Types of Specialists:**

| Specialty | Focus Area |
|-----------|------------|
| Cardiologist | Heart |
| Dermatologist | Skin |
| Endocrinologist | Hormones, diabetes |
| Gastroenterologist | Digestive system |
| Neurologist | Brain and nerves |
| Oncologist | Cancer |
| Orthopedist | Bones and joints |
| Pulmonologist | Lungs |
| Rheumatologist | Autoimmune diseases |

**Referral Requirements:**

*HMO Plans:*
- Referral usually required
- Must see PCP first
- Authorization needed

*PPO Plans:*
- Self-referral often allowed
- In-network preferred
- May cost more without referral

**How to Research Specialists:**

*Credentials to Check:*
- Board certification
- Hospital affiliations
- Years of experience
- Special training (fellowships)

*Resources:*
| Source | Information |
|--------|-------------|
| Insurance directory | In-network status |
| Hospital websites | Affiliated physicians |
| State medical board | License status |
| Healthgrades/Vitals | Patient reviews |
| ABMS | Board certification |

**Questions to Ask When Calling:**

*About the Practice:*
- Are you accepting new patients?
- What insurance do you take?
- How long is the wait for an appointment?
- Where are you located?

*About the Doctor:*
- What is their experience with my condition?
- Are they board certified?
- What hospital do they use?

**Preparing for the Visit:**

*Bring:*
- Referral paperwork
- Medical records/test results
- Medication list
- Insurance card
- Questions written down

*Share:*
- Complete health history
- Current symptoms
- Previous treatments
- Your goals and concerns

**Evaluating the Specialist:**

*Good Signs:*
- Listens to you
- Explains things clearly
- Answers your questions
- Coordinates with your PCP
- Makes you feel comfortable

*Red Flags:*
- Rushed visits
- Does not answer questions
- Dismisses concerns
- Poor communication`,
      keyTerms: [
        { term: 'board certification', definition: 'Verification that a doctor passed specialized exams in their field' },
        { term: 'fellowship', definition: 'Additional specialty training after residency' },
        { term: 'hospital affiliation', definition: 'Hospitals where the doctor can admit and treat patients' },
        { term: 'PCP', definition: 'Primary Care Physician - your regular doctor' },
      ],
      analogies: [
        'Board certification is like a professional license - it proves the doctor has met high standards in their specialty.',
      ],
    },
    3: {
      level: 3,
      summary: 'Specialist selection requires evaluation of credentials, quality metrics, access considerations, and care coordination within the context of your insurance plan and healthcare needs.',
      explanation: `## Finding Specialists: Comprehensive Approach

**Credential Verification:**

*Board Certification:*
- ABMS member boards
- Time-limited certification
- Maintenance of certification
- Subspecialty certifications

*Verification Resources:*
| Resource | Information |
|----------|-------------|
| ABMS | Board certification |
| State medical board | License, disciplinary actions |
| NPI registry | Provider identification |
| DEA | Prescribing authority |

**Quality Assessment:**

*Available Metrics:*
| Source | Measures |
|--------|----------|
| CMS Physician Compare | Quality measures |
| Hospital Compare | Facility quality |
| ProPublica | Complication rates |
| Healthgrades | Patient experience |

*Interpretation Considerations:*
- Small sample sizes
- Case mix differences
- Reporting variations
- Timeliness of data

**Access Considerations:**

*Availability Factors:*
- Appointment wait times
- Geographic location
- Office hours
- Telehealth options
- Emergency accessibility

*Practice Characteristics:*
- Solo vs. group practice
- Academic vs. community
- Hospital-based vs. office
- Support staff availability

**Care Coordination:**

*Information Flow:*
\`\`\`
PCP → Referral → Specialist
           ↓
      Patient Info
           ↓
   Specialist Visit
           ↓
Recommendations ← → Ongoing Care
           ↓
      Back to PCP
\`\`\`

*Communication:*
- Record sharing mechanisms
- Referral information completeness
- Report back to PCP
- Shared EHR systems

**Special Circumstances:**

*Complex Conditions:*
- Multidisciplinary centers
- Academic medical centers
- Centers of excellence
- Clinical trial access

*Rare Diseases:*
- Specialized expertise crucial
- May require travel
- Patient advocacy organizations
- Expert networks

**Insurance Navigation:**

*Network Considerations:*
| Factor | Impact |
|--------|--------|
| In-network status | Cost |
| Prior authorization | Access |
| Referral requirements | Process |
| Out-of-network benefits | Options |

*Exceptions:*
- Network adequacy issues
- Specialized expertise
- Continuity of care
- Emergency access`,
      keyTerms: [
        { term: 'ABMS', definition: 'American Board of Medical Specialties - oversees board certification' },
        { term: 'center of excellence', definition: 'Facility recognized for high quality in specific areas' },
        { term: 'multidisciplinary care', definition: 'Coordinated treatment from multiple specialists' },
        { term: 'network adequacy', definition: 'Sufficient access to needed specialists within insurance network' },
      ],
      clinicalNotes: 'Primary care physicians play a crucial role in guiding specialist selection. Quality metrics have limitations and should be interpreted cautiously.',
    },
    4: {
      level: 4,
      summary: 'Optimal specialist selection integrates quality data, access factors, care coordination requirements, and patient preferences within complex healthcare delivery systems.',
      explanation: `## Advanced Specialist Selection

**Quality Measurement Framework:**

*Measure Types:*
| Type | Examples |
|------|----------|
| Structure | Certification, volume |
| Process | Adherence to guidelines |
| Outcome | Complication rates, mortality |
| Experience | Patient satisfaction |

*Data Sources:*
- CMS quality programs
- Commercial quality initiatives
- Hospital registries
- Specialty society databases

**Volume-Outcome Relationships:**

*Evidence:*
- Higher volume associated with better outcomes
- Varies by procedure complexity
- Threshold effects
- System factors matter too

*Application:*
| Procedure | Volume Consideration |
|-----------|---------------------|
| Complex surgery | Strong relationship |
| Common procedures | Less pronounced |
| Rare conditions | Concentration benefits |

**Academic vs. Community:**

*Academic Medical Centers:*
| Advantages | Disadvantages |
|------------|---------------|
| Complex case expertise | May be further away |
| Research access | Trainee involvement |
| Multidisciplinary care | Higher costs sometimes |
| Latest treatments | Longer waits |

*Community Practice:*
| Advantages | Disadvantages |
|------------|---------------|
| Convenience | Less complex case experience |
| Personal relationship | Limited research access |
| Shorter waits | Fewer subspecialists |
| Local care | Less multidisciplinary |

**Shared Decision-Making:**

*Patient Factors:*
- Treatment preferences
- Risk tolerance
- Convenience needs
- Financial considerations
- Communication style preferences

*Integration:*
\`\`\`
Clinical Needs + Quality Data + Patient Preferences
                     ↓
            Specialist Selection
                     ↓
            Care Partnership
\`\`\`

**System Navigation:**

*Maximizing Access:*
- Same-day appointments
- After-hours availability
- Telehealth integration
- Patient portal use
- Care coordinator support

*Complex Situations:*
| Situation | Strategy |
|-----------|----------|
| Long waits | Waitlist, cancellations |
| No in-network | Exception request |
| Rare condition | Travel, virtual |
| Multiple specialists | Care coordination |

**Care Transition Excellence:**

*Referral Optimization:*
- Complete information transfer
- Specific consultation questions
- Urgency communication
- Follow-up expectations

*Post-Visit Coordination:*
- Report receipt confirmation
- Recommendation implementation
- Ongoing management clarification
- Patient communication loop`,
      keyTerms: [
        { term: 'volume-outcome relationship', definition: 'Association between number of procedures and quality of results' },
        { term: 'care transition', definition: 'Movement of patients between providers or settings' },
        { term: 'consultation question', definition: 'Specific question referring provider wants answered' },
        { term: 'maintenance of certification', definition: 'Ongoing requirements to maintain board certification' },
      ],
      clinicalNotes: 'Specialist selection is a shared decision incorporating clinical factors and patient preferences. Quality data should inform but not dictate choices. Care coordination is essential for optimal outcomes.',
    },
    5: {
      level: 5,
      summary: 'Expert-level specialist navigation integrates quality science, access optimization, care coordination systems, and health equity considerations within evolving healthcare delivery models.',
      explanation: `## Specialist Selection: Systems Perspective

**Quality Science Evolution:**

*Current State:*
\`\`\`
Administrative Data
        ↓
Risk Adjustment
        ↓
Public Reporting → Consumer Use (limited)
        ↓
Quality Improvement
\`\`\`

*Limitations:*
- Small sample sizes
- Case mix concerns
- Reporting burden
- Gaming potential
- Consumer confusion

**Healthcare Delivery Models:**

*Impact on Specialist Access:*
| Model | Specialist Role |
|-------|-----------------|
| Fee-for-service | Independent decisions |
| ACO | Coordinated, shared accountability |
| HMO | Gatekeeping, network restrictions |
| PCMH | Team-based coordination |

*Value-Based Implications:*
- Quality incentives
- Utilization management
- Care coordination requirements
- Cost accountability

**Health Equity:**

*Access Disparities:*
- Geographic distribution
- Insurance coverage
- Transportation barriers
- Language access
- Implicit bias

*Equity Interventions:*
| Intervention | Impact |
|--------------|--------|
| Telehealth | Geographic access |
| Community health workers | Navigation support |
| Language services | Communication |
| Bias training | Provider behavior |

**Technology Impact:**

*Current Tools:*
- Online directories
- Review platforms
- Telehealth expansion
- Patient matching algorithms
- Virtual second opinions

*Future Directions:*
- AI-assisted matching
- Outcome prediction
- Real-time availability
- Quality integration

**Research and Evidence:**

*Current Knowledge:*
- Quality varies significantly
- Information helps selection
- Coordination improves outcomes
- Access affects health

*Knowledge Gaps:*
- Optimal quality measures
- Patient decision-making
- Coordination effectiveness
- Equity interventions

**Policy Considerations:**

*Current Issues:*
| Issue | Status |
|-------|--------|
| Network adequacy | Regulatory focus |
| Price transparency | Emerging requirements |
| Quality reporting | Expanding |
| Telehealth | Post-pandemic evolution |

*Future Directions:*
- Interoperability requirements
- Quality standardization
- Access guarantees
- Equity mandates

**Care Coordination Excellence:**

*Optimal Model:*
\`\`\`
Patient Needs Assessment
          ↓
Specialist Matching (quality, access, preference)
          ↓
Information Transfer (complete, timely)
          ↓
Coordinated Care (PCP-Specialist-Patient)
          ↓
Outcome Tracking
          ↓
Continuous Improvement
\`\`\`

*System Requirements:*
- Shared health records
- Communication protocols
- Role clarity
- Accountability measures`,
      keyTerms: [
        { term: 'ACO', definition: 'Accountable Care Organization - integrated care with shared accountability' },
        { term: 'PCMH', definition: 'Patient-Centered Medical Home - team-based primary care model' },
        { term: 'implicit bias', definition: 'Unconscious attitudes affecting behavior and decisions' },
        { term: 'patient matching', definition: 'Algorithms connecting patients with appropriate providers' },
      ],
      clinicalNotes: 'Specialist selection represents a complex system challenge requiring integration of quality, access, coordination, and equity. Technology offers promise but cannot replace the human elements of healthcare delivery.',
    },
  },

  media: [],

  citations: [
    {
      id: 'abms-certification',
      type: 'website',
      title: 'Board Certification Verification',
      source: 'American Board of Medical Specialties',
      url: 'https://www.certificationmatters.org/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-talking-to-your-doctor', targetType: 'concept', relationship: 'related', label: 'Talking to Your Doctor' },
    { targetId: 'concept-understanding-health-insurance', targetType: 'concept', relationship: 'related', label: 'Understanding Health Insurance' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['healthcare-navigation', 'specialty-care', 'patient-advocacy'],
    clinicalRelevance: 'high',
    keywords: ['specialist', 'referral', 'board certification', 'healthcare quality'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default findingSpecialists;
