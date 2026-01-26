import { EducationalContent } from '../../types';

export const careTeamContent: EducationalContent = {
  id: 'topic-care-team',
  type: 'topic',
  name: 'Gender-Affirming Care Team',
  alternateNames: ['Multidisciplinary Care', 'Transgender Healthcare Team'],

  levels: {
    1: {
      level: 1,
      summary: 'Many different types of healthcare providers can help transgender people, and they often work together as a team.',
      explanation: `When you're getting healthcare as a transgender person, different helpers might be part of your care.

**Who Might Be On Your Team:**
- **Your regular doctor**: Helps with checkups and can prescribe hormones
- **Mental health counselor**: Someone to talk to about feelings and life changes
- **Specialists**: Doctors who focus on specific areas like hormones or surgery
- **Other helpers**: Voice coaches, social workers, nurses

**Important Things:**
- You don't need all of these - it depends on what you need
- A good team listens to you and respects you
- You can ask questions and share concerns
- Your team should work together to help you`,
      keyTerms: [
        { term: 'care team', definition: 'The group of healthcare providers who help you' },
        { term: 'specialist', definition: 'A doctor who focuses on one specific area of medicine' },
        { term: 'counselor', definition: 'Someone trained to help with emotional and mental health' },
      ],
      analogies: [
        'A care team is like a group of coaches for different parts of your health journey.',
      ],
      examples: [
        'A teenager might have a regular doctor, a therapist, and a family counselor all helping them.',
      ],
    },
    2: {
      level: 2,
      summary: 'A multidisciplinary care team for transgender individuals may include primary care providers, mental health professionals, endocrinologists, surgeons, and allied health professionals.',
      explanation: `Comprehensive gender-affirming care often involves multiple specialists working together.

**Core Team Members:**

*Medical Providers:*
- **Primary care physician**: Routine care, often hormone management
- **Endocrinologist**: Hormone specialist (not always needed)
- **Surgeon**: For gender-affirming procedures

*Mental Health:*
- **Therapist/Counselor**: Individual support
- **Psychiatrist**: If medications are needed
- **Family therapist**: Especially for youth

*Allied Health:*
- **Voice/speech therapist**: Voice training
- **Social worker**: Navigating systems, resources
- **Patient navigator**: Coordinating care

**Team Approach Benefits:**
- Coordinated care
- Different expertise available
- Comprehensive support
- Better outcomes

**Finding Your Team:**
- LGBTQ+ health centers
- Informed consent clinics
- Academic medical centers
- Provider directories (WPATH, GLMA)

Not everyone needs all these providers. Care should be individualized.`,
      keyTerms: [
        { term: 'multidisciplinary', definition: 'Involving specialists from different fields working together' },
        { term: 'endocrinologist', definition: 'Doctor specializing in hormones', pronunciation: 'en-doh-krin-OL-oh-jist' },
        { term: 'patient navigator', definition: 'Staff who help patients coordinate their care' },
        { term: 'allied health', definition: 'Healthcare professionals other than doctors and nurses' },
      ],
    },
    3: {
      level: 3,
      summary: 'Optimal gender-affirming care utilizes a multidisciplinary team approach integrating medical, surgical, mental health, and allied health services under a collaborative care model.',
      explanation: `Multidisciplinary care for transgender patients represents best practice, though implementation varies by setting and patient needs.

**Team Composition:**

*Primary Care/Hormone Prescribers:*
- Family medicine, internal medicine, pediatrics
- Nurse practitioners, physician assistants
- Training: WPATH, Fenway Health courses
- Role: Initial evaluation, hormone therapy, monitoring, preventive care

*Endocrinology:*
- Not required for most patients
- Indicated for: Complex cases, adolescents, hormone resistance, concurrent endocrine conditions
- May be limited in availability

*Mental Health Professionals:*
- Psychologists, social workers, counselors
- Role: Support, not gatekeeping
- Letters for surgery when required
- Crisis intervention when needed

*Surgical Specialists:*
- Plastic surgery: Top surgery, facial procedures
- Urology/Gynecology: Genital surgery
- Limited specialized surgeons nationally
- Requires specific training/experience

*Allied Health:*
- Speech-language pathology: Voice training
- Physical therapy: Post-surgical rehab
- Dermatology: Acne, hair removal referral
- Fertility specialists: Preservation options

**Care Coordination:**
- Shared treatment plans
- Regular communication
- Electronic health record coordination
- Care conferences for complex cases

**Models of Care:**
- Integrated specialty clinics (optimal)
- Primary care with referral networks
- Telehealth expanding access
- Peer support integration`,
      keyTerms: [
        { term: 'collaborative care model', definition: 'Healthcare approach emphasizing communication and coordination among providers' },
        { term: 'integrated care', definition: 'Services provided together in coordinated fashion' },
        { term: 'care conference', definition: 'Meeting of providers to coordinate complex patient care' },
        { term: 'GLMA', definition: 'LGBTQ+ medical professional organization with provider directory' },
      ],
      clinicalNotes: 'Multidisciplinary care is ideal but not always available. Primary care providers can manage most transgender healthcare with appropriate training.',
    },
    4: {
      level: 4,
      summary: 'Multidisciplinary gender-affirming care integrates medical, mental health, surgical, and allied health services, requiring structured care coordination, provider competency development, and attention to access barriers.',
      explanation: `Effective multidisciplinary transgender care requires systematic approaches to team composition, coordination, and competency.

**Team Structure and Roles:**

*Medical Providers:*
- Primary care: Most hormone management, preventive care
- Endocrinology: Complex cases, pediatric/adolescent care
- Infectious disease: HIV/PrEP integration common
- Training requirements: Hormone protocols, monitoring, culturally competent care

*Mental Health Integration:*
- Embedded behavioral health ideal
- Assessment and support functions
- Not gatekeeping function
- Surgical letter provision when needed
- Crisis response capacity

*Surgical Services:*
- Limited availability of trained surgeons
- Geographic concentration in major centers
- Long wait times common
- Pre-operative and post-operative coordination

*Allied Health Services:*
- Voice therapy: Often underutilized
- Physical therapy: Post-surgical, binding-related issues
- Lactation support: Chest feeding considerations
- Pain management: Post-surgical, binding-related

**Care Coordination Mechanisms:**

*Structural Elements:*
- Regular team meetings
- Shared EHR documentation
- Treatment planning templates
- Care pathways and protocols

*Communication:*
- Defined referral processes
- Warm handoffs
- Timely consultation responses
- Patient-centered communication

**Provider Competency:**

*Core Competencies:*
- Cultural humility training
- Clinical knowledge (hormones, surgery, mental health)
- Communication skills
- Systems navigation

*Training Resources:*
- WPATH Global Education Initiative
- Fenway Institute trainings
- UCSF Center of Excellence
- AAP guidelines for pediatrics

**Access Considerations:**
- Geographic disparities significant
- Insurance barriers
- Workforce limitations
- Telehealth as expansion strategy`,
      keyTerms: [
        { term: 'cultural humility', definition: 'Ongoing process of self-reflection and learning about other cultures and identities' },
        { term: 'warm handoff', definition: 'In-person transfer of care between providers with patient present' },
        { term: 'embedded behavioral health', definition: 'Mental health services integrated into medical care setting' },
        { term: 'care pathway', definition: 'Standardized approach to managing specific clinical situations' },
      ],
      clinicalNotes: 'Develop local referral networks. Identify backup providers. Use telehealth to expand access. Regular team communication improves outcomes.',
    },
    5: {
      level: 5,
      summary: 'Excellence in multidisciplinary gender-affirming care requires integrated clinical services, robust care coordination infrastructure, provider competency development, quality metrics monitoring, and attention to systemic barriers affecting care access.',
      explanation: `Comprehensive multidisciplinary gender-affirming care demands attention to clinical, operational, and systemic factors.

**Team Composition Best Practices:**

*Core Services:*
- Primary care with hormone management capacity
- Behavioral health integration (embedded preferred)
- Care coordination/navigation
- Peer support programming

*Specialty Access:*
- Endocrinology for complex cases
- Surgical consultation and care
- Fertility preservation services
- Voice/speech therapy
- Dermatology, urology, gynecology as needed

**Provider Competency Framework:**

*Knowledge Domains:*
- Gender identity development
- Hormone therapy protocols and monitoring
- Surgical procedures overview
- Mental health assessment and support
- Adolescent-specific considerations
- Cultural factors and intersectionality

*Skills:*
- Affirming clinical communication
- Shared decision-making facilitation
- Informed consent processes
- Crisis assessment and intervention
- Documentation best practices

*Attitudes:*
- Cultural humility
- Anti-bias awareness
- Commitment to ongoing learning
- Patient-centered orientation

**Care Coordination Infrastructure:**

*Information Systems:*
- EHR optimization (SOGI fields, correct name/pronouns)
- Shared care plans
- Alert systems for overdue monitoring
- Telehealth integration

*Process Elements:*
- Standardized referral pathways
- Case conferences for complex patients
- Transition planning (adolescent to adult)
- Post-surgical coordination protocols

**Quality and Outcomes:**

*Process Measures:*
- Time to hormone initiation
- Follow-up visit adherence
- Lab monitoring completion
- Referral completion rates

*Outcome Measures:*
- Patient satisfaction
- Mental health outcomes (PHQ-9, GAD-7)
- Quality of life measures
- Adverse event monitoring

**Systemic Barriers:**

*Workforce:*
- Provider shortage in many areas
- Training pipeline limitations
- Burnout in gender care providers
- Need for ongoing competency development

*Access:*
- Insurance coverage gaps
- Geographic maldistribution
- Cost barriers
- Discrimination in healthcare settings

*Solutions:*
- Telehealth expansion
- Training integration in medical education
- Policy advocacy
- Community health center investment`,
      keyTerms: [
        { term: 'SOGI fields', definition: 'Sexual Orientation and Gender Identity data elements in electronic health records' },
        { term: 'intersectionality', definition: 'Framework for understanding how multiple identities interact to shape experience' },
        { term: 'care transitions', definition: 'Movements between care settings or life stages requiring coordination' },
        { term: 'PHQ-9/GAD-7', definition: 'Standardized screening tools for depression and anxiety' },
      ],
      clinicalNotes: `**Implementation Priorities:**
- Start with core competencies in existing staff
- Build referral networks before full integration
- Use standardized protocols and documentation
- Monitor quality metrics from the start
- Engage patient advisory input
- Address workforce sustainability
- Advocate for systemic changes

**Resources:**
- WPATH Global Education Initiative
- Fenway Institute training programs
- UCSF Center of Excellence for Transgender Health
- GLMA provider directory
- TransLine consultation service`,
    },
  },

  media: [],
  citations: [
    {
      id: 'ucsf-guidelines',
      type: 'website',
      title: 'Guidelines for the Primary and Gender-Affirming Care of Transgender and Gender Nonbinary People',
      source: 'UCSF Transgender Care',
      url: 'https://transcare.ucsf.edu/guidelines',
      license: 'Open Access',
    },
  ],
  crossReferences: [
    { targetId: 'topic-care-overview', targetType: 'topic', relationship: 'parent', label: 'Gender-Affirming Care Overview' },
    { targetId: 'topic-affirming-providers', targetType: 'topic', relationship: 'related', label: 'Finding Affirming Providers' },
  ],
  tags: {
    topics: ['multidisciplinary care', 'care coordination', 'transgender health'],
    keywords: ['care team', 'providers', 'coordination', 'access'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default careTeamContent;
