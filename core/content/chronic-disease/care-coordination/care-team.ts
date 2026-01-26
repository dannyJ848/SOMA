/**
 * Care Team - Care Coordination
 *
 * Understanding the roles of different healthcare providers
 * in chronic disease management.
 */

import { EducationalContent } from "../../types";

export const CARE_TEAM: EducationalContent = {
  id: "chronic-disease-care-team",
  type: "concept",
  name: "Care Team",
  alternateNames: ["Healthcare team", "Medical team", "Care coordination team"],

  levels: {
    1: {
      level: 1,
      summary: "Your care team is a group of doctors, nurses, and other helpers who work together to keep you healthy and manage your condition.",
      explanation: `**What Is a Care Team?**
A care team is like a group of people on your side, all working together to help you stay as healthy as possible. Each person has a special job!

**Who Might Be on Your Team?**
- **Primary care doctor** - Your main doctor who knows you best
- **Specialist doctors** - Experts in specific health problems (like heart doctors or diabetes doctors)
- **Nurses** - Help with treatments and answer your questions
- **Pharmacist** - Makes sure your medicines are safe and teaches you how to take them
- **Nutritionist/Dietitian** - Helps you eat healthy foods
- **Social worker** - Helps with things like insurance or finding community resources
- **Physical therapist** - Helps you move better and get stronger

**Why Is a Team Important?**
When you have a chronic condition, you need different types of help:
- Someone to check on you regularly
- Experts who understand your specific condition
- People who help with medicines, diet, and exercise
- Support for emotional and practical needs

**How to Work with Your Team:**
1. Know who your team members are
2. Bring a list of questions to appointments
3. Tell each doctor about all your medicines
4. Ask for help when you need it
5. Keep all your appointments

**Tip:** Write down the names and phone numbers of everyone on your care team so you can reach them when you need help!`,
      keyTerms: [
        { term: "care team", definition: "A group of healthcare workers who work together to take care of you" },
        { term: "primary care doctor", definition: "Your main doctor who helps manage your overall health" },
        { term: "specialist", definition: "A doctor who is an expert in one type of health problem" },
      ],
      analogies: [
        "Your care team is like a sports team where everyone has a different position but they all work together to win the game - keeping you healthy.",
        "Think of your care team like the crew of a ship. The captain (your primary doctor) leads, but everyone from the navigator to the cook has an important job.",
      ],
      examples: [
        "Maria has diabetes, so her care team includes her family doctor, an eye doctor to check her vision, a foot specialist, and a diabetes educator.",
        "After his heart attack, James works with a cardiologist, a cardiac nurse, a dietitian, and a physical therapist to get stronger.",
      ],
    },
    2: {
      level: 2,
      summary: "A care team consists of multiple healthcare professionals with complementary expertise who collaborate to provide comprehensive chronic disease management, with clear roles and communication pathways.",
      explanation: `**The Care Team Model:**

Modern healthcare uses a team-based approach for chronic disease management. This means multiple professionals work together to address all aspects of your health.

**Core Care Team Members:**

*Primary Care Provider (PCP):*
- Oversees your overall health
- Coordinates care between specialists
- Manages common chronic conditions
- Provides preventive care
- Can be a physician, nurse practitioner, or physician assistant

*Specialists:*
- Focus on specific organs or conditions
- Provide expert diagnosis and treatment
- Examples: cardiologist, endocrinologist, pulmonologist, nephrologist
- Work with your PCP to create treatment plans

*Nursing Staff:*
- Registered nurses (RNs) provide patient education and care coordination
- Licensed practical nurses assist with treatments
- Care managers help organize your healthcare

*Allied Health Professionals:*
| Professional | Role |
|-------------|------|
| Pharmacist | Medication management and education |
| Dietitian | Nutrition planning and counseling |
| Physical Therapist | Mobility and exercise programs |
| Respiratory Therapist | Breathing treatments and education |
| Social Worker | Emotional support and resource navigation |

**How Teams Communicate:**
- Shared electronic health records
- Team meetings and huddles
- Secure messaging systems
- Referral letters and consultation notes
- Phone calls for urgent issues

**Patient-Centered Care:**
You are the most important member of your care team!
- Share your goals and preferences
- Ask questions and express concerns
- Participate in treatment decisions
- Report symptoms and side effects
- Follow through with your care plan

**Navigating Your Care Team:**
1. Know who to contact for different issues
2. Keep a list of all team members and their roles
3. Bring a complete medication list to every appointment
4. Request copies of test results and visit summaries
5. Ask for a care coordinator if you feel overwhelmed`,
      keyTerms: [
        { term: "care coordination", definition: "The process of organizing healthcare activities and sharing information among all participants" },
        { term: "patient-centered care", definition: "Healthcare approach that respects and responds to individual patient preferences and needs" },
        { term: "interdisciplinary team", definition: "A group of healthcare professionals from different specialties working together" },
        { term: "care manager", definition: "A nurse or other professional who helps organize and coordinate your healthcare" },
      ],
      analogies: [
        "Your care team is like an orchestra - each musician plays a different instrument, but they all follow the same sheet music to create harmony.",
      ],
    },
    3: {
      level: 3,
      summary: "Interprofessional care teams utilize collaborative practice models to deliver integrated, patient-centered chronic disease management, with defined roles, structured communication protocols, and shared accountability for outcomes.",
      explanation: `**Interprofessional Collaborative Practice:**

The Interprofessional Education Collaborative (IPEC) defines core competencies for team-based care:
- Values and ethics for interprofessional practice
- Roles and responsibilities
- Interprofessional communication
- Teams and teamwork

**Team Composition Models:**

*Patient-Centered Medical Home (PCMH):*
- Primary care as the foundation
- Whole-person orientation
- Coordinated and integrated care
- Quality and safety focus
- Enhanced access

*Chronic Care Model Components:*
1. Self-management support
2. Delivery system design
3. Decision support
4. Clinical information systems
5. Health system organization
6. Community resources

**Role Delineation:**

| Team Member | Primary Responsibilities | Chronic Disease Functions |
|-------------|-------------------------|--------------------------|
| Physician | Diagnosis, treatment planning | Medical management, specialist referral |
| Advanced Practice Provider | Collaborative management | Routine monitoring, medication adjustment |
| RN Care Manager | Care coordination | Patient education, transitions of care |
| Clinical Pharmacist | Medication therapy management | Drug optimization, adherence support |
| Registered Dietitian | Medical nutrition therapy | Disease-specific dietary counseling |
| Behavioral Health Specialist | Mental health integration | Depression screening, coping strategies |
| Community Health Worker | Community linkage | Social needs screening, navigation |

**Communication Structures:**

*Synchronous:*
- Daily huddles for acute issues
- Weekly team meetings for complex patients
- Case conferences for care planning

*Asynchronous:*
- EHR-based messaging and task assignment
- Shared care plans and documentation
- Population health dashboards

**Measuring Team Effectiveness:**

*Process Measures:*
- Care gap closure rates
- Care plan completion
- Preventive service delivery
- Referral completion rates

*Outcome Measures:*
- Disease control metrics (A1C, blood pressure)
- Patient experience scores
- Hospital admission rates
- Emergency department utilization

**Transitions of Care:**
- Hospital discharge coordination
- Post-acute follow-up protocols
- Medication reconciliation
- Warm handoffs between care settings`,
      keyTerms: [
        { term: "interprofessional collaborative practice", definition: "Multiple health workers from different professional backgrounds working together with patients and families" },
        { term: "Patient-Centered Medical Home", definition: "A model of primary care that emphasizes care coordination, accessibility, and patient engagement" },
        { term: "chronic care model", definition: "Evidence-based framework for improving chronic illness care through system redesign" },
        { term: "medication therapy management", definition: "Clinical services provided by pharmacists to optimize medication use and improve outcomes" },
      ],
      clinicalNotes: "Effective care teams require protected time for communication and coordination. Role clarity prevents gaps and duplication. Consider cultural and linguistic needs when assembling patient care teams.",
    },
    4: {
      level: 4,
      summary: "High-functioning interprofessional care teams leverage evidence-based team science principles, defined scope of practice, and structured collaboration frameworks to optimize chronic disease outcomes through enhanced care coordination and shared decision-making.",
      explanation: `**Team Science Framework:**

*TeamSTEPPS Components:*
- Team structure
- Leadership
- Situation monitoring
- Mutual support
- Communication

*Team Effectiveness Model (Salas et al.):*
Core components: Leadership, mutual performance monitoring, backup behavior, adaptability, team orientation
Coordinating mechanisms: Shared mental models, mutual trust, closed-loop communication

**Collaborative Practice Agreements:**

*Scope of Practice Considerations:*
- State-specific regulations for advanced practice providers
- Collaborative practice agreements
- Supervision requirements
- Protocol-driven care pathways
- Delegated responsibilities and standing orders

*Pharmacist Collaborative Practice:*
- Collaborative drug therapy management
- Prescriptive authority protocols
- Disease-specific management agreements
- Outcome documentation requirements

**Advanced Care Coordination Models:**

*Comprehensive Primary Care Plus (CPC+):*
- Risk-stratified care management
- Enhanced access for complex patients
- Longitudinal care planning
- Care coordination fees

*Accountable Care Organizations (ACOs):*
- Shared savings programs
- Quality benchmarks
- Population health management
- Preferred provider networks

**Information Technology Infrastructure:**

*EHR Functionality for Teams:*
- Role-based access and documentation
- Care team assignment and messaging
- Task management and worklists
- Care plan templates and sharing
- Decision support integration

*Population Health Management:*
- Risk stratification algorithms
- Care gap identification
- Patient registries
- Outcome dashboards
- Predictive analytics

**Team Dynamics and Culture:**

*High-Reliability Team Principles:*
- Psychological safety
- Preoccupation with failure
- Sensitivity to operations
- Commitment to resilience
- Deference to expertise

*Conflict Resolution:*
- Structured communication tools (SBAR, CUS)
- Escalation pathways
- Debriefing practices
- Continuous improvement culture

**Workforce Considerations:**

*Team Composition Optimization:*
- Panel size and complexity adjustment
- FTE allocation for care management
- Role substitution and task shifting
- Supervision ratios
- Burnout prevention strategies`,
      keyTerms: [
        { term: "TeamSTEPPS", definition: "Team Strategies and Tools to Enhance Performance and Patient Safety; evidence-based teamwork training program" },
        { term: "shared mental model", definition: "Common understanding among team members of goals, tasks, and team member roles" },
        { term: "scope of practice", definition: "Legal and regulatory boundaries defining activities permitted for each healthcare profession" },
        { term: "collaborative drug therapy management", definition: "Pharmacist-physician agreement allowing pharmacists to initiate, modify, or discontinue medications" },
        { term: "risk stratification", definition: "Categorizing patients by likelihood of adverse outcomes to guide care intensity" },
      ],
      clinicalNotes: "Team composition should reflect patient population needs. Collaborative practice agreements must comply with state regulations. EHR configuration significantly impacts team workflow efficiency. Regular team training and debriefing improve performance and safety.",
    },
    5: {
      level: 5,
      summary: "Optimal interprofessional care team design integrates team science evidence, health systems engineering, and implementation science to create sustainable collaborative practice models that improve population health outcomes while addressing workforce sustainability and health equity.",
      explanation: `**Theoretical Foundations:**

*Team Cognition Theory:*
- Transactive memory systems
- Team situational awareness
- Distributed cognition
- Macrocognition in naturalistic decision-making

*Complexity Science Applications:*
- Care teams as complex adaptive systems
- Emergence and self-organization
- Nonlinear dynamics in team performance
- Adaptability to changing contexts

**Evidence Base for Team-Based Care:**

*Systematic Review Findings:*
Research demonstrates interprofessional collaboration in primary care improves:
- Chronic disease control (diabetes, hypertension, heart failure)
- Patient satisfaction and experience
- Appropriate service utilization
- Provider satisfaction and retention
- Cost-effectiveness

*Implementation Determinants:*
- Organizational leadership commitment
- Payment model alignment
- Physical space design
- Team training investment
- Clear governance structures

**Workforce Optimization:**

*Team-Based Care Models:*
\`\`\`
Traditional Model          Team-Based Model
Physician → Patient        Physician
                              ↓
                          Care Team ↔ Patient
                          (APP, RN, MA, etc.)
                              ↓
                          Support Services
\`\`\`

*Task Redistribution Strategies:*
- Top-of-license practice for all team members
- Protocol-driven standing orders
- Panel management delegation
- Between-visit care management
- Asynchronous patient communication

**Quality and Safety Science:**

*High-Reliability Organization Principles:*
- Collective mindfulness
- Learning culture
- Just culture for error reporting
- Continuous quality improvement
- Safety event analysis

*Team Training Approaches:*
- Simulation-based training
- In-situ drills
- Cross-training for role understanding
- Crew resource management adaptations
- Maintenance of competency programs

**Health Equity in Team Design:**

*Addressing Disparities:*
- Community health worker integration
- Language-concordant team members
- Cultural humility training
- Social determinants screening
- Community partnership development

*Access Optimization:*
- Extended hours and weekend availability
- Telehealth integration
- Home-based care teams
- School and workplace partnerships
- Mobile health units

**Payment and Sustainability:**

*Value-Based Payment Models:*
- Capitated care management fees
- Shared savings programs
- Quality bonus structures
- Risk adjustment considerations
- Investment ROI calculations

*Business Case Elements:*
- Reduced ED and hospital utilization
- Improved quality metrics and incentives
- Enhanced market competitiveness
- Provider satisfaction and retention
- Panel size optimization

**Future Directions:**

*Emerging Team Models:*
- Virtual care teams spanning geographies
- AI-augmented care coordination
- Patient-led care teams
- Community-integrated care models
- Precision team composition based on patient needs

*Research Priorities:*
- Optimal team size and composition
- Technology integration strategies
- Training effectiveness studies
- Sustainability and scalability
- Patient and family integration methods`,
      keyTerms: [
        { term: "transactive memory system", definition: "Shared system for encoding, storing, and retrieving knowledge distributed across team members" },
        { term: "complex adaptive system", definition: "Dynamic network of interacting agents that self-organize and adapt to environmental changes" },
        { term: "top-of-license practice", definition: "Each team member working to the full extent of their training and credentials" },
        { term: "high-reliability organization", definition: "Organization that operates under high-risk conditions with fewer than expected adverse events" },
        { term: "social determinants of health", definition: "Economic and social conditions that influence health outcomes and equity" },
      ],
      clinicalNotes: "Team-based care implementation requires multi-level interventions addressing policy, organization, team, and individual factors. Payment reform is essential for sustainability. Regular team assessment using validated instruments (e.g., Team Climate Inventory, Safety Attitudes Questionnaire) supports continuous improvement. Consider equity implications of team design and accessibility.",
    },
  },

  media: [
    {
      id: "care-team-diagram",
      type: "diagram",
      filename: "care-team-structure.svg",
      title: "Care Team Structure",
      description: "Visual representation of interprofessional care team roles and relationships",
    },
    {
      id: "care-team-contact-sheet",
      type: "diagram",
      filename: "care-team-contacts.pdf",
      title: "Care Team Contact Sheet Template",
      description: "Printable template for patients to record care team contact information",
    },
  ],

  citations: [
    {
      id: "ipec-competencies",
      type: "website",
      title: "Core Competencies for Interprofessional Collaborative Practice",
      source: "Interprofessional Education Collaborative",
      url: "https://www.ipecollaborative.org/",
    },
    {
      id: "chronic-care-model",
      type: "article",
      title: "The Chronic Care Model",
      source: "Improving Chronic Illness Care",
    },
  ],

  crossReferences: [
    { targetId: "chronic-disease-specialist-visits", targetType: "topic", relationship: "related", label: "Specialist Visits" },
    { targetId: "chronic-disease-provider-communication", targetType: "topic", relationship: "related", label: "Provider Communication" },
    { targetId: "chronic-disease-self-advocacy", targetType: "topic", relationship: "related", label: "Self-Advocacy" },
  ],

  tags: {
    systems: ["general health"],
    topics: ["care coordination", "chronic disease", "healthcare team"],
    keywords: ["care team", "interprofessional", "care coordination", "patient-centered care"],
    clinicalRelevance: "high",
  },

  createdAt: "2025-01-24T00:00:00.000Z",
  updatedAt: "2025-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
  contributors: ["Biological Self Content Team"],
};
