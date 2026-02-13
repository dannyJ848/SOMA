/**
 * Specialist Visits - Care Coordination
 *
 * Preparing for and maximizing the value of specialist
 * consultations in chronic disease management.
 */

import { EducationalContent } from "../../types";

export const SPECIALIST_VISITS: EducationalContent = {
  id: "chronic-disease-specialist-visits",
  type: "concept",
  name: "Specialist Visits",
  alternateNames: ["Specialist appointments", "Specialty care", "Consultant visits"],

  levels: {
    1: {
      level: 1,
      summary: "Specialists are doctors who are experts in one area of health. Learning how to prepare for and make the most of your specialist visits helps you get better care.",
      explanation: `**What Is a Specialist?**
A specialist is a doctor who has extra training in one area of medicine. They know a lot about specific health problems.

**Types of Specialists:**
- **Cardiologist** - Heart expert
- **Endocrinologist** - Hormone and diabetes expert
- **Pulmonologist** - Lung expert
- **Nephrologist** - Kidney expert
- **Rheumatologist** - Joint and arthritis expert
- **Gastroenterologist** - Stomach and digestion expert
- **Neurologist** - Brain and nerve expert

**Why See a Specialist?**
You might need a specialist when:
- Your condition needs expert care
- You need special tests
- Your regular doctor wants another opinion
- Your treatment is not working well enough

**Getting Ready for Your Visit:**

*Bring With You:*
- Your insurance card
- List of all your medicines
- Your symptoms diary
- Questions you want to ask
- Test results and records from other doctors

*Know Before You Go:*
- Why are you seeing this specialist?
- What question does your regular doctor want answered?
- What do you hope to learn?

**During Your Visit:**
1. Tell the specialist about your main concerns
2. Answer their questions honestly
3. Ask your own questions
4. Make sure you understand the plan
5. Ask what to tell your regular doctor

**After Your Visit:**
- Pick up any new prescriptions
- Schedule follow-up tests if needed
- Make your next appointment if required
- Tell your regular doctor what happened
- Follow the specialist recommendations

**Tip:** The specialist will send a report to your regular doctor, but you can also share what you learned at your next primary care visit.`,
      keyTerms: [
        { term: "specialist", definition: "A doctor with extra training who is an expert in one area of medicine" },
        { term: "referral", definition: "When your regular doctor sends you to see a specialist" },
        { term: "consultation", definition: "A visit with a specialist to get their expert opinion" },
      ],
      analogies: [
        "Seeing a specialist is like taking your car to a mechanic who only works on brakes when you have a brake problem - they know exactly what to look for.",
        "Your regular doctor is like a general contractor, and specialists are like electricians or plumbers - each has special skills for specific jobs.",
      ],
      examples: [
        "After David was diagnosed with diabetes, his family doctor sent him to an endocrinologist to help set up his insulin treatment.",
        "When Lisa kept having stomach pain, her doctor referred her to a gastroenterologist for special tests.",
      ],
    },
    2: {
      level: 2,
      summary: "Specialist consultations provide expert evaluation and treatment for specific conditions. Effective specialist visits require preparation, active participation, and coordination between your primary care provider and specialists.",
      explanation: `**Understanding Specialist Care:**

Specialists receive additional training beyond medical school in a specific area. They provide:
- Expert diagnosis for complex conditions
- Advanced treatment options
- Specialized procedures and tests
- Second opinions
- Co-management of chronic diseases

**The Referral Process:**

*How Referrals Work:*
1. Primary care provider identifies need
2. Referral is submitted (may need insurance approval)
3. Specialist office contacts you for appointment
4. Medical records are transferred
5. Consultation occurs
6. Report sent back to referring provider

*Insurance Considerations:*
- Check if referral is required by your plan
- Verify specialist is in your network
- Understand prior authorization requirements
- Know your copay or coinsurance amount
- Check if you need re-authorization for follow-ups

**Preparing for Your Appointment:**

| Item | Why It Matters |
|------|----------------|
| Medication list | Prevents drug interactions, shows current treatment |
| Symptom log | Helps specialist understand your condition |
| Previous test results | Avoids duplicate testing, shows history |
| Question list | Ensures your concerns are addressed |
| Referral paperwork | Documents why you are there |
| Insurance information | Ensures proper billing |

*Key Questions to Bring:*
- What is causing my symptoms?
- What tests do I need?
- What are my treatment options?
- What are the risks and benefits of each option?
- How will this treatment affect my other conditions?
- When should I follow up?

**During the Appointment:**

*Be Prepared to:*
- Describe your main symptoms in detail
- Explain what treatments you have tried
- Share your goals and preferences
- Ask questions and take notes
- Request clarification if needed

*After the Examination:*
- Ensure you understand the diagnosis
- Know the recommended treatment plan
- Get instructions for any new medications
- Understand warning signs to watch for
- Know how to reach the office with questions

**Care Coordination:**

*Your Role:*
- Share specialist recommendations with your primary doctor
- Keep both providers informed of changes
- Ask about how care will be coordinated
- Report any conflicting advice

*Information Flow:*
- Specialist sends consultation note to primary care
- You can request copies of all notes
- Use patient portal to access information
- Keep your own health records organized

**Follow-Up Care:**

*When to Return:*
- Scheduled follow-up for ongoing management
- If symptoms worsen
- After recommended tests are completed
- When treatments need adjustment
- For periodic disease monitoring`,
      keyTerms: [
        { term: "referral", definition: "A recommendation from one doctor to see another doctor, often required by insurance" },
        { term: "prior authorization", definition: "Insurance company approval required before certain services are covered" },
        { term: "consultation note", definition: "The written report a specialist sends to your referring doctor after your visit" },
        { term: "in-network", definition: "Providers who have agreed to accept your insurance plan rates" },
      ],
      analogies: [
        "A specialist visit is like getting a second opinion from an expert - they bring specialized knowledge to your specific problem.",
      ],
    },
    3: {
      level: 3,
      summary: "Specialty consultation involves structured communication between primary care and specialists, with patients playing an active role in information transfer, shared decision-making, and care coordination to optimize outcomes for chronic disease management.",
      explanation: `**Consultation Types:**

*Cognitive Consultation:*
- Diagnostic evaluation and recommendations
- One-time or periodic assessment
- Primary care retains management responsibility
- Example: Cardiology consultation for chest pain evaluation

*Procedural Consultation:*
- Specific procedure or intervention
- May include pre/post-procedure management
- Returns to primary care after procedure
- Example: GI consultation for colonoscopy

*Co-Management:*
- Shared ongoing management
- Regular specialist visits for condition-specific care
- Coordination with primary care
- Example: Rheumatology managing rheumatoid arthritis

*Principal Care:*
- Specialist assumes primary responsibility for condition
- Appropriate for complex specialty conditions
- Ongoing relationship established
- Example: Oncology managing cancer treatment

**The Consultation Process:**

*Referral Quality Elements:*
- Clear clinical question
- Relevant history and examination findings
- Prior workup results
- Current medications
- Urgency level
- Patient preferences

*Specialist Responsibilities:*
- Timely access to care
- Thorough evaluation
- Clear recommendations
- Defined role and follow-up plans
- Communication with referring provider

**Clinical Information Exchange:**

| From PCP to Specialist | From Specialist to PCP |
|----------------------|----------------------|
| Reason for referral | Diagnosis/assessment |
| Relevant history | Recommended tests |
| Current medications | Treatment plan |
| Previous workup | Medication changes |
| Clinical question | Follow-up recommendations |
| Patient preferences | Contingency plans |

**Patient Preparation:**

*Pre-Visit Preparation:*
- Review reason for referral
- Compile symptom history
- List medications and allergies
- Gather relevant test results
- Prepare prioritized question list
- Consider goals and preferences

*Visit Optimization:*
- Arrive early for paperwork
- Bring support person if desired
- Take notes during visit
- Use teach-back to confirm understanding
- Request copies of consultation notes

**Shared Decision-Making in Specialty Care:**

*Decision Support Tools:*
- Option grids
- Decision aids
- Risk calculators
- Visual aids
- Question prompt lists

*Values Clarification:*
- Treatment preferences
- Risk tolerance
- Quality of life priorities
- Family involvement preferences
- Cultural considerations

**Care Coordination Mechanisms:**

*Electronic Communication:*
- EHR-based referral systems
- Secure messaging
- Shared care plans
- Patient portal access

*Care Transitions:*
- Clear responsibility delineation
- Follow-up planning
- Medication reconciliation
- Patient education
- Emergency contact information`,
      keyTerms: [
        { term: "cognitive consultation", definition: "Specialist evaluation focused on diagnosis and recommendations without procedures" },
        { term: "co-management", definition: "Shared responsibility between primary care and specialist for ongoing condition management" },
        { term: "consultation note", definition: "Formal communication documenting specialist findings, assessment, and recommendations" },
        { term: "e-consult", definition: "Electronic specialty consultation allowing provider-to-provider communication without patient visit" },
      ],
      clinicalNotes: "Clear referral questions improve consultation value. Document the intended role (consultation vs. co-management) explicitly. Consider e-consult for questions that may not require in-person evaluation. Ensure patients understand which provider to contact for different issues.",
    },
    4: {
      level: 4,
      summary: "Optimizing specialty care utilization requires structured referral processes, evidence-based care coordination frameworks, and patient-centered communication to ensure high-value consultations that improve clinical outcomes while minimizing fragmentation and redundancy.",
      explanation: `**Consultation Value Framework:**

*High-Value Consultation Elements:*
- Appropriate referral indication
- Clear clinical question
- Adequate pre-referral workup
- Timely access
- Comprehensive evaluation
- Actionable recommendations
- Effective communication
- Appropriate follow-up

**Referral Optimization:**

*Primary Care Referral Quality:*
- Defined referral guidelines by condition
- Pre-referral workup protocols
- Standardized referral templates
- Urgency classification systems
- Right specialist selection

*Specialist Access Models:*
| Model | Description | Advantages |
|-------|-------------|------------|
| Open access | Any provider can refer | Flexibility |
| Closed access | Requires PCP referral | Gatekeeping |
| E-consult | Electronic consultation | Efficiency |
| Embedded specialist | Specialist in primary care | Integration |
| Shared medical appointments | Group visits | Efficiency |

**E-Consultation Programs:**

*Types:*
- Store-and-forward (asynchronous review)
- Specialist advice request
- Curbside consult formalization
- Pre-referral guidance

*Benefits:*
- Reduced unnecessary referrals
- Faster time to diagnosis
- Primary care education
- Lower patient burden
- Cost reduction

*Implementation Considerations:*
- Appropriate use criteria
- Response time expectations
- Documentation requirements
- Billing and reimbursement
- Technology infrastructure

**Coordination Models:**

*Care Compact Framework:*
Explicit agreements defining:
- What referring provider does before referral
- What specialist provides during consultation
- How information is communicated
- How follow-up is managed
- How emergencies are handled

*Integrated Practice Units:*
- Condition-focused organization
- Multidisciplinary teams
- Single point of contact
- Bundled care delivery
- Outcome measurement

**Quality Measurement:**

*Consultation Quality Indicators:*
- Referral completion rates
- Time to appointment
- Information transfer completeness
- Recommendation implementation
- Patient experience
- Clinical outcomes

*System-Level Metrics:*
- Specialist utilization rates
- Referral patterns
- Care fragmentation indices
- Duplication of services
- Costs per episode

**Patient-Centered Approaches:**

*Shared Appointments:*
- Multiple patients with similar conditions
- Efficient specialty access
- Peer support benefits
- Group education
- Provider efficiency

*Patient Navigation:*
- Appointment scheduling support
- Transportation assistance
- Insurance navigation
- Test coordination
- Care plan tracking

**Communication Best Practices:**

*Closed-Loop Communication:*
1. Referral sent with clear question
2. Receipt acknowledged
3. Appointment scheduled
4. Consultation completed
5. Report sent to PCP
6. PCP reviews and incorporates recommendations
7. Patient informed of plan

*Consultation Note Elements:*
- Reason for consultation
- History and examination findings
- Assessment and diagnosis
- Recommendations with rationale
- Role definition (consult vs. co-management)
- Follow-up plan
- Contingency guidance`,
      keyTerms: [
        { term: "e-consult", definition: "Electronic specialist consultation providing guidance without requiring patient visit" },
        { term: "care compact", definition: "Explicit agreement defining roles and responsibilities between referring and consulting providers" },
        { term: "integrated practice unit", definition: "Multidisciplinary team organized around patient conditions rather than specialties" },
        { term: "closed-loop communication", definition: "Communication process ensuring messages are sent, received, acknowledged, and acted upon" },
        { term: "care fragmentation", definition: "Disjointed care across multiple providers lacking coordination and integration" },
      ],
      clinicalNotes: "E-consult programs can reduce unnecessary face-to-face specialist visits by 30-40%. Care compacts reduce misunderstandings about roles and responsibilities. Measure and monitor care fragmentation as a quality indicator. Ensure patient understanding of care coordination plan.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art specialty care integration leverages evidence-based referral optimization, multi-modal consultation approaches, and health system redesign to deliver high-value, coordinated specialty services that maximize outcomes while addressing access disparities and healthcare resource utilization.",
      explanation: `**Evolution of Specialty Care:**

The specialty consultation model is evolving from episodic referrals to integrated care:
- Sequential care → Concurrent co-management
- Referral as hand-off → Referral as collaboration
- Specialist as sole expert → Distributed expertise
- Episode-focused → Relationship-focused
- Volume-driven → Value-driven

**Consultation Optimization Science:**

*Referral Appropriateness Criteria:*
- Evidence-based indications
- Pre-referral workup standards
- Risk stratification for specialty need
- Patient preference integration
- Resource stewardship considerations

*Decision Support:*
\`\`\`
Clinical Question
       ↓
Referral Appropriateness Check
       ↓
    ┌──┴──┐
    │     │
E-Consult  In-Person Referral
    │           │
    ↓           ↓
PCP-Managed  Specialty Visit
              │
              ↓
    ┌─────────┼─────────┐
    │         │         │
Consultation  Co-Mgmt  Transfer
\`\`\`

**Advanced Care Models:**

*Project ECHO (Extension for Community Healthcare Outcomes):*
- Knowledge-sharing network
- Primary care capacity building
- Case-based learning
- Specialist expertise dissemination
- Rural and underserved access

*Embedded/Co-Located Specialists:*
- Specialists in primary care settings
- Warm handoffs
- Shared patients and records
- Team-based decision-making
- Reduced access barriers

*Virtual Specialty Care:*
- Synchronous telehealth consultations
- Asynchronous e-consult platforms
- Remote patient monitoring integration
- Multi-site specialty coverage
- Hub-and-spoke models

**Value-Based Specialty Care:**

*Payment Model Innovations:*
- Episode-based bundles
- Specialty capitation
- Shared savings programs
- Quality-based incentives
- Consultation fees for e-consults

*Measuring Value:*
- Outcomes per dollar spent
- Avoidable utilization reduction
- Time to diagnosis/treatment
- Patient experience and satisfaction
- Health-related quality of life

**Health Equity in Specialty Access:**

*Disparities in Specialty Care:*
- Geographic access barriers
- Insurance-related disparities
- Language and cultural barriers
- Socioeconomic determinants
- Implicit bias effects

*Equity-Focused Interventions:*
- Telehealth expansion
- Patient navigation programs
- Community health worker integration
- Language-concordant services
- Outreach and mobile clinics

**Implementation Science:**

*Barriers to Coordination:*
- EHR interoperability
- Communication time constraints
- Competing incentives
- Professional culture differences
- Patient engagement challenges

*Facilitators:*
- Shared electronic systems
- Standardized protocols
- Relationship building
- Aligned incentives
- Patient activation

**Future Directions:**

*Emerging Innovations:*
- AI-assisted referral triage
- Predictive specialty need models
- Digital biomarkers for monitoring
- Virtual multidisciplinary conferences
- Precision medicine integration

*Research Priorities:*
- Optimal referral criteria validation
- E-consult effectiveness studies
- Care model comparative effectiveness
- Implementation strategy evaluation
- Equity impact assessment

**Quality Improvement:**

*Learning Health System Approach:*
1. Define consultation quality metrics
2. Collect data on referral patterns
3. Analyze variation and outcomes
4. Implement targeted improvements
5. Monitor and iterate

*Benchmark Measures:*
- Referral completion rates
- Consultation turnaround time
- Recommendation concordance
- Patient-reported outcomes
- Cost per episode of care`,
      keyTerms: [
        { term: "Project ECHO", definition: "Telementoring model using video conferencing to build primary care capacity for specialty conditions" },
        { term: "hub-and-spoke model", definition: "Care delivery design with central specialty hub providing services to distributed primary care sites" },
        { term: "specialty capitation", definition: "Payment model providing fixed per-member-per-month amounts for specialty care" },
        { term: "learning health system", definition: "Healthcare system that continuously learns from data to improve quality and outcomes" },
        { term: "care compacts", definition: "Formal agreements defining roles, responsibilities, and communication expectations between providers" },
      ],
      clinicalNotes: "E-consult and Project ECHO models can extend specialty expertise without requiring patient travel. Consider equity implications of all specialty access initiatives. Payment reform is essential for sustainable high-value specialty care. Measure specialty care value with patient-centered outcomes, not just utilization.",
    },
  },

  media: [
    {
      id: "specialist-prep-checklist",
      type: "diagram",
      filename: "specialist-visit-checklist.pdf",
      title: "Specialist Visit Preparation Checklist",
      description: "Printable checklist to help patients prepare for specialist appointments",
    },
    {
      id: "referral-process-diagram",
      type: "diagram",
      filename: "referral-process-flow.svg",
      title: "Referral Process Flowchart",
      description: "Visual guide showing the referral process from primary care to specialist",
    },
  ],

  citations: [
    {
      id: "specialty-referral-guidelines",
      type: "article",
      title: "Improving the Value of Specialty Referrals",
      source: "American College of Physicians",
    },
    {
      id: "project-echo",
      type: "website",
      title: "Project ECHO",
      source: "University of New Mexico",
      url: "https://hsc.unm.edu/echo/",
    },
  ],

  crossReferences: [
    { targetId: "chronic-disease-care-team", targetType: "topic", relationship: "related", label: "Care Team" },
    { targetId: "chronic-disease-provider-communication", targetType: "topic", relationship: "related", label: "Provider Communication" },
    { targetId: "chronic-disease-self-advocacy", targetType: "topic", relationship: "related", label: "Self-Advocacy" },
  ],

  tags: {
    systems: ["general health"],
    topics: ["care coordination", "chronic disease", "specialty care"],
    keywords: ["specialist visits", "referrals", "consultation", "care coordination"],
    clinicalRelevance: "high",
  },

  createdAt: "2025-01-24T00:00:00.000Z",
  updatedAt: "2025-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
  contributors: ["Biological Self Content Team"],
};
