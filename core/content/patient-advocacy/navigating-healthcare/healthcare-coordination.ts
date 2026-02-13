/**
 * Healthcare Coordination
 *
 * Understanding how different healthcare providers work together,
* managing multiple specialists, and ensuring continuity of care.
 */

import { EducationalContent } from '../../types';

export const HEALTHCARE_COORDINATION: EducationalContent = {
  id: 'patient-advocacy-healthcare-coordination',
  type: 'topic',
  name: 'Healthcare Coordination',
  alternateNames: ['Care Coordination', 'Care Team Management', 'Continuity of Care'],

  levels: {
    1: {
      level: 1,
      summary: 'Healthcare coordination means making sure all your doctors and nurses talk to each other and work together as a team to take care of you.',
      explanation: `Imagine a sports team - everyone needs to work together and know their role to win. Your healthcare is the same way!

**Who Is On Your Healthcare Team?**

*Main Players:*
- **Primary care doctor**: Like the team captain - knows your whole health picture
- **Specialists**: Doctors who focus on specific problems (heart doctor, skin doctor, etc.)
- **Nurses**: Help with treatments, answer questions, teach you about your health
- **Pharmacists**: Help make sure your medicines are safe together

**Why Coordination Matters:**

When your doctors talk to each other:
- You don't have to repeat your story over and over
- Tests don't get repeated unnecessarily
- Medicines won't cause problems when taken together
- Everyone is working toward the same goals

**Red Flags That Coordination Isn't Working:**
- Doctors prescribe medicines that clash
- You have to tell the same story to each new doctor
- Tests get repeated that you just had done
- You get different advice from different doctors
- No one seems to know what the other doctors are doing

**You Can Help!**
- Bring a list of ALL your medicines to every visit
- Keep a copy of your test results
- Tell each doctor about your other doctors
- Ask "Have you talked to my other doctor about this?"`,
      keyTerms: [
        { term: 'primary care doctor', definition: 'Your main doctor who knows your overall health and helps coordinate your care' },
        { term: 'specialist', definition: 'A doctor who focuses on one specific area of medicine' },
        { term: 'pharmacist', definition: 'An expert in medicines who helps make sure your drugs are safe' },
        { term: 'healthcare team', definition: 'All the doctors, nurses, and other professionals working together to help you' },
      ],
      analogies: [
        'Your healthcare team is like an orchestra - everyone needs to read from the same music sheet to make beautiful music together.',
        'Without good coordination, healthcare can be like a game of "telephone" where messages get mixed up.',
      ],
      examples: [
        'Your heart doctor might give you a new medicine, but you need your kidney doctor to check if it\'s safe for your kidneys.',
        'Your primary care doctor should get a report after you see a specialist so they know what happened and can update your care plan.',
      ],
      patientCounselingPoints: [
        'Keep a wallet card with your medicines, allergies, and doctor names',
        'Always ask "Will my primary care doctor get a copy of these results?"',
        'It\'s okay to remind doctors about what other doctors have told you',
      ],
    },
    2: {
      level: 2,
      summary: 'Care coordination ensures that all your healthcare providers communicate effectively, share information, and work together toward your health goals, preventing errors and improving outcomes.',
      explanation: `Good healthcare coordination means your entire care team works together seamlessly, with you at the center.

**Your Healthcare Team Members:**

*Primary Care Providers:*
- Family medicine doctor or internist
- Nurse practitioner or physician assistant
- Usually your first point of contact
- Helps coordinate your overall care

*Specialists (Examples):*
- Cardiologist (heart)
- Endocrinologist (hormones/diabetes)
- Neurologist (brain/nerves)
- Orthopedist (bones/joints)
- Dermatologist (skin)
- Psychiatrist (mental health)

*Other Important Team Members:*
- Nurses and nurse care coordinators
- Pharmacists
- Physical/occupational therapists
- Social workers
- Dietitians

**Why Coordination Breaks Down:**

*Common Problems:*
- Different electronic health record systems that don't "talk" to each other
- Doctors in different health systems
- Patients not bringing information to appointments
- No clear "lead" doctor managing overall care

*Consequences of Poor Coordination:*
- Drug interactions from prescriptions from different doctors
- Duplicate tests and procedures
- Conflicting medical advice
- Higher costs
- Medical errors

**How to Improve Your Care Coordination:**

*What You Should Do:*
1. **Keep updated medication list**: Include name, dose, and reason for each
2. **Maintain personal health record**: Folder or app with test results, diagnoses, treatments
3. **Choose one primary doctor**: Designate someone as your main point of contact
4. **Share information**: After seeing a specialist, ask for report to be sent to primary doctor
5. **Ask questions**: "Does everyone treating me know about this?"

*Signs of Good Coordination:*
- Your primary care doctor receives reports from specialists
- Medications are reviewed regularly
- You're not repeating tests unnecessarily
- Everyone uses the same information
- You understand who is doing what

**When Coordination Is Most Important:**
- Multiple chronic conditions
- Taking five or more medications
- Recently hospitalized
- New complex diagnosis
- Transitioning between care settings (hospital to home)`,
      keyTerms: [
        { term: 'electronic health record', definition: 'Digital system that stores your medical information; may not be shared between different doctors', pronunciation: 'EHR' },
        { term: 'care coordinator', definition: 'A healthcare professional who helps organize your care across different providers' },
        { term: 'specialist', definition: 'A doctor who has extra training in a specific area of medicine' },
        { term: 'drug interaction', definition: 'When two or more medicines react with each other and cause problems' },
        { term: 'chronic condition', definition: 'A health problem that lasts a long time or keeps coming back' },
      ],
      analogies: [
        'Think of your primary care doctor as the conductor of an orchestra - they don\'t play every instrument, but they ensure everyone plays together harmoniously.',
      ],
      examples: [
        'If your cardiologist prescribes a blood thinner, your primary care doctor needs to know so they don\'t prescribe another medicine that also thins the blood.',
        'After hospitalization for pneumonia, a care coordinator might arrange home health services, follow-up appointments, and medication delivery.',
      ],
      patientCounselingPoints: [
        'Download a personal health record app or use a notebook to track your care',
        'Keep business cards from all your doctors in one place',
        'After each visit, write down what happened and any changes to your treatment',
      ],
    },
    3: {
      level: 3,
      summary: 'Care coordination is a deliberate organization of patient care activities between two or more participants involved in a patient\'s care to facilitate appropriate delivery of healthcare services.',
      explanation: `**Definition and Scope:**

Care coordination involves deliberately organizing patient care activities and sharing information among all participants concerned with a patient's care to achieve safer and more effective care.

*Core Elements of Care Coordination:*
1. **Information sharing**: Timely exchange of clinical information
2. **Role clarity**: Understanding who is responsible for what aspects of care
3. **Communication**: Structured communication among team members
4. **Transition management**: Smooth handoffs between care settings
5. **Patient activation**: Engaging patients as active participants

**Healthcare Team Roles:**

*Primary Care Provider (PCP) Role:*
- First point of contact for new health concerns
- Comprehensive care coordination across specialists
- Preventive care and health maintenance
- Management of chronic conditions
- Gateway to specialty care

*Specialist Role:*
- Expert consultation for specific conditions
- Co-management with primary care
- Communicates findings and recommendations back to PCP
- Typically focuses on organ system or disease-specific care

*Care Coordination Professionals:*
- **Case managers**: Help navigate complex healthcare systems
- **Care coordinators**: Organize appointments and follow-up
- **Navigators**: Often disease-specific (e.g., oncology navigator)
- **Social workers**: Address social determinants of health

**Information Flow in Care Coordination:**

*Consultation Process:*
1. PCP identifies need for specialist input
2. Referral sent with relevant clinical information
3. Specialist evaluates and provides recommendations
4. Consultation report returned to PCP
5. PCP discusses with patient and implements recommendations

*Electronic Communication:*
- **EHR messaging**: Direct provider-to-provider communication
- **Health Information Exchange (HIE)**: Regional sharing of health data
- **Patient portals**: Give patients access to their records
- **eConsults**: Virtual specialist consultations without in-person visit

**Challenges to Effective Coordination:**

*System Barriers:*
- Fragmented healthcare delivery systems
- Incompatible EHR systems
- Lack of universal health information exchange
- Fee-for-service payment not incentivizing coordination

*Provider Barriers:*
- Time constraints
- Lack of clear accountability
- Poor communication skills
- Unclear roles and responsibilities

*Patient Barriers:*
- Health literacy limitations
- Language barriers
- Cognitive impairment
- Lack of social support

**High-Risk Situations Requiring Enhanced Coordination:**
- Transitions of care (hospital to home, SNF, rehab)
- Multiple prescribers (polypharmacy risk)
- Mental health and physical health comorbidity
- End-of-life care transitions
- Complex medication regimens`,
      keyTerms: [
        { term: 'transition of care', definition: 'Movement of patients between healthcare settings, providers, or levels of care' },
        { term: 'polypharmacy', definition: 'Use of multiple medications, typically five or more, increasing risk of adverse effects' },
        { term: 'health information exchange', definition: 'Mobilization of healthcare information electronically across organizations', pronunciation: 'HIE' },
        { term: 'eConsult', definition: 'Electronic consultation between providers without patient seeing the specialist in person' },
        { term: 'social determinants of health', definition: 'Conditions in which people live, learn, work, and play that affect health' },
      ],
      clinicalNotes: 'Fragmented care and poor coordination are associated with higher rates of hospital readmission, medical errors, and patient dissatisfaction. The patient-centered medical home model specifically emphasizes care coordination as a core function.',
    },
    4: {
      level: 4,
      summary: 'Effective care coordination requires systematic approaches to information sharing, role delineation, and communication across providers, with particular importance during care transitions and for patients with complex medical needs.',
      explanation: `**Evidence-Based Care Coordination Models:**

*Patient-Centered Medical Home (PCMH):*
- Designated primary provider as care coordinator
- Team-based care with clearly defined roles
- Enhanced access and communication
- Whole-person orientation
- Payment model incentivizing coordination

*Accountable Care Organizations (ACOs):*
- Groups of providers collectively responsible for patient outcomes
- Shared savings if quality and cost targets met
- Care coordination infrastructure required
- Focus on Medicare and commercial populations

*Transitional Care Models:*
- **Coleman Model**: Four pillars (medication reconciliation, patient education, follow-up appointment, palliative care)
- **Naylor Transitional Care Model**: Nurse-led advanced practice coordination
- **Project RED**: Re-engineered discharge with post-discharge follow-up

**Measuring Care Coordination Quality:**

*Structural Measures:*
- EHR capability for information exchange
- Presence of care coordination team members
- After-hours availability
- Care coordination processes documented

*Process Measures:*
- Medication reconciliation completion rates
- Communication between specialists and PCP
- Completion of specialist-recommended actions
- Readmission rates
- Emergency department visits post-discharge

*Outcome Measures:*
- Patient-reported care coordination
- Reduction in duplicate testing
- Preventable hospitalization rates
- Medication adverse events
- Healthcare costs

**Critical Coordination Points:**

*Transitions of Care:*
**Hospital to Home:**
- Discharge summary sent to PCP within 24-48 hours
- Medication reconciliation completed
- Patient and family education completed
- Follow-up appointment scheduled (ideally within 7 days)
- Direct communication between hospitalist and PCP

**Specialist to Primary Care:**
- Consultation report with clear recommendations
- Division of responsibility specified
- Plan for ongoing monitoring
- Criteria for re-consultation defined

**Emergency Department to Outpatient:**
- ED summary sent to PCP
- Critical test follow-up arranged
- Symptoms requiring return clearly communicated
- Access to primary care ensured

**Medication Management Coordination:**

*Polypharmacy Coordination:*
- Comprehensive medication review across all prescribers
- Deprescribing initiatives for inappropriate medications
- Brown bag medication reviews
- Pharmacist-physician collaboration

*Potential Medication Coordination Issues:*
- Therapeutic duplication
- Contraindicated combinations
- Cumulative side effects
- Drug-disease interactions (especially in elderly)

**Communication Strategies:**

*SBAR Technique for Provider Communication:*
- **S**ituation: What's happening now?
- **B**ackground: What's the context?
- **A**ssessment: What do I think is going on?
- **R**ecommendation: What do I think we should do?

*Warm Handoffs:*
- Direct introduction between providers in presence of patient
- Improves information transfer
- Builds patient confidence
- Increases compliance

**Digital Coordination Tools:**
- CareEverywhere (Epic)
- CommonWell Health Alliance
- Direct secure messaging
- Patient-generated health data integration`,
      keyTerms: [
        { term: 'Patient-Centered Medical Home', definition: 'Primary care model emphasizing coordinated, comprehensive care', pronunciation: 'PCMH' },
        { term: 'Accountable Care Organization', definition: 'Group of providers jointly responsible for patient outcomes and costs', pronunciation: 'ACO' },
        { term: 'medication reconciliation', definition: 'Systematic process of comparing patient\'s medication lists to ensure accuracy' },
        { term: 'warm handoff', definition: 'Direct introduction between healthcare providers with patient present' },
        { term: 'deprescribing', definition: 'Planned process of reducing or stopping medications that are no longer beneficial' },
      ],
      clinicalNotes: 'Care coordination failures account for approximately 25% of malpractice claims, with communication failures being the most common cause. The transition from hospital to home is particularly vulnerable; up to 50% of patients experience medical errors during this period.',
    },
    5: {
      level: 5,
      summary: 'Optimal care coordination requires sophisticated health information systems, clearly defined provider roles, structured communication protocols, and active patient engagement to achieve the Quadruple Aim of healthcare improvement.',
      explanation: `**Advanced Care Coordination Frameworks:**

*The Quadruple Aim:*
1. **Improved patient experience**: Satisfaction, communication, coordination
2. **Improved population health**: Better health outcomes for communities
3. **Reduced costs**: Elimination of waste, prevention of complications
4. **Improved clinician experience**: Reduced burnout, improved workflow

Care coordination sits at the intersection of all four aims.

**Interprofessional Collaborative Practice (IPCP):**

*Core Competencies:*
1. **Values/Ethics**: Mutual respect, shared decision-making
2. **Roles/Responsibilities**: Understanding scope of practice across professions
3. **Communication**: Effective information exchange, teamwork
4. **Teams/Teamwork**: Team dynamics, process improvement

*TeamSTEPPS Framework:*
- **Team leadership**: Creating shared mental models
- **Situation monitoring**: Cross-monitoring among team members
- **Mutual support**: Backup behaviors, feedback
- **Communication**: SBAR, check-backs, call-outs

**Advanced Information Systems:**

*Health Information Exchange:*
- **Directed exchange**: Secure transmission between known providers
- **Query-based exchange**: Finding and retrieving patient information
- **Consumer-mediated exchange**: Patient-controlled information sharing

*Interoperability Challenges:*
- Semantic interoperability (meaning of data)
- Data standardization (FHIR, HL7)
- Privacy concerns (HIPAA 42 CFR Part 2 for substance use)
- Vendor resistance to data sharing

**Care Coordination for Complex Patients:**

*Comorbidity Clusters Requiring Intensive Coordination:*
- **CMS-HCC categories**: Hierarchical Condition Categories for risk adjustment
- **Multimorbidity**: 2+ chronic conditions; 25% of US adults
- **Complex multimorbidity**: 3+ conditions affecting 3+ body systems; 5% but 30% of costs

*Coordination Strategies for Complex Patients:*
- Comprehensive care assessment
- Shared care plans accessible across settings
- Team-based case conferences
- Home-based primary care for highest-risk patients
- Palliative care integration for serious illness

**Measurement and Quality Improvement:**

*Care Coordination Measures (AHRQ):*
- Patient-Centered Medical Home Survey
- Care Coordination Quality Measure for Primary Care
- Care Transitions Measure
- Medication Reconciliation measure

*Advanced Analytics:*
- Social network analysis of provider communication patterns
- Patient trajectory modeling
- Readmission risk prediction
- Network analysis of fragmentation

**Emerging Models:**

*Community Health Teams:*
- Multidisciplinary teams from community organizations
- Link clinical care to community resources
- Address social determinants of health
- Reduce utilization through community-based interventions

*Digital Health Coordination:*
- Remote patient monitoring with team alerts
- AI-driven identification of care gaps
- Virtual care coordination visits
- Chatbots for routine care coordination tasks

*Behavioral Health Integration:*
- Collaborative care models for depression/anxiety
- Warm handoffs to behavioral health
- Integrated medication management (psychopharmacology)
- Co-location of physical and behavioral health

**Payment Reform and Coordination:**

*Value-Based Payment Models:*
- **Bundled payments**: Single payment for episode of care
- **Capitation**: Per-member per-month payment
- **Pay-for-coordination**: Direct payment for care coordination activities
- **Comprehensive primary care**: Payment for care coordination infrastructure

**Future Directions:**

*Precision Care Coordination:*
- Genomic-informed treatment coordination
- Pharmacogenomic communication across prescribers
- Family-based coordination for genetic conditions

*Learning Health Systems:*
- Continuous measurement of coordination quality
- Rapid cycle improvement
- Best practice dissemination
- Patient-generated data integration

*Population Health Management:*
- Risk stratification for targeted coordination intensity
- Panel management for primary care
- Registry-based care coordination
- Community-level health improvement`,
      keyTerms: [
        { term: 'Quadruple Aim', definition: 'Four goals of healthcare: patient experience, population health, cost reduction, clinician experience' },
        { term: 'TeamSTEPPS', definition: 'Team Strategies and Tools to Enhance Performance and Patient Safety' },
        { term: 'FHIR', definition: 'Fast Healthcare Interoperability Resources - standard for exchanging healthcare data' },
        { term: 'CMS-HCC', definition: 'Centers for Medicare & Medicaid Services Hierarchical Condition Categories for risk adjustment' },
        { term: 'social determinants of health', definition: 'Economic and social conditions that influence health outcomes' },
      ],
      clinicalNotes: 'Care coordination represents one of the greatest opportunities to improve healthcare quality and reduce costs. The evidence suggests that fragmented care affects up to 50% of patients with chronic conditions, and improving coordination could prevent up to 20% of hospital readmissions.',
    },
  },

  media: [
    {
      id: 'care-coordination-diagram-1',
      type: 'diagram',
      filename: 'care-coordination-model.svg',
      title: 'Healthcare Coordination Model',
      description: 'Visual representation of coordinated care team structure',
    },
  ],

  citations: [
    {
      id: 'ahrq-care-coordination',
      type: 'website',
      title: 'Care Coordination',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/professionals/prevention-chronic-care/improve/coordination.html',
      license: 'Public Domain',
    },
    {
      id: 'iom-care-coordination',
      type: 'article',
      title: 'Primary Care and Public Health: Exploring Integration to Improve Population Health',
      authors: ['Institute of Medicine'],
      source: 'National Academies Press',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'patient-advocacy-finding-doctor', targetType: 'topic', relationship: 'related', label: 'Finding the Right Doctor' },
    { targetId: 'patient-advocacy-medical-records', targetType: 'topic', relationship: 'related', label: 'Managing Medical Records' },
    { targetId: 'patient-advocacy-second-opinion', targetType: 'topic', relationship: 'related', label: 'Second Opinions' },
  ],

  tags: {
    topics: ['patient-advocacy', 'healthcare-system', 'care-delivery'],
    keywords: ['care coordination', 'healthcare team', 'continuity of care', 'specialists'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
