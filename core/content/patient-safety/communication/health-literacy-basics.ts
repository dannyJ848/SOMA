/**
 * Health Literacy Basics
 *
 * Understanding and using health information effectively.
 */

import { EducationalContent } from '../../types';

export const healthLiteracyBasics: EducationalContent = {
  id: 'concept-health-literacy-basics',
  type: 'concept',
  name: 'Health Literacy Basics',
  alternateNames: ['Health Information Skills', 'Medical Information Understanding', 'Healthcare Literacy'],

  levels: {
    1: {
      level: 1,
      summary: 'Health literacy means being able to understand information about your health and make good decisions to stay healthy.',
      explanation: `Health literacy is about understanding health information. When you can understand what doctors and nurses tell you, you can take better care of yourself!

**What Is Health Literacy?**
- Understanding what a doctor tells you
- Being able to read medicine bottles
- Knowing when to call the doctor
- Understanding how to stay healthy

**Why Does It Matter?**
- Helps you follow instructions
- Helps you take medicine correctly
- Helps you know when something is wrong
- Helps you make healthy choices

**Skills You Need:**
- Reading: Medicine labels, appointment letters
- Listening: What the doctor tells you
- Asking questions: When you don't understand
- Numbers: How much medicine, when appointments are

**How to Get Better at Health Literacy:**
- Ask questions when you don't understand
- Bring someone with you to appointments
- Ask for information in simple words
- Write things down or ask for written instructions

**Remember:**
Everyone can improve their health literacy. It's like learning any other skill - it gets easier with practice!`,
      keyTerms: [
        { term: 'health literacy', definition: 'Being able to understand and use health information' },
        { term: 'instructions', definition: 'Steps that tell you what to do' },
        { term: 'prescription', definition: 'Medicine that a doctor says you need' },
      ],
      analogies: [
        'Health literacy is like learning to read a map - it helps you find your way to better health.',
        'Understanding health information is like following a recipe - each step matters.',
      ],
      examples: [
        'Reading a medicine label to know how many pills to take.',
        'Understanding a letter from the doctor about your test results.',
      ],
    },
    2: {
      level: 2,
      summary: 'Health literacy involves understanding health information, navigating the healthcare system, and making informed decisions about your care.',
      explanation: `Health literacy is your ability to find, understand, and use health information to make good decisions. It's a skill everyone can develop.

**Three Parts of Health Literacy:**

**1. Understanding Information**
- Reading prescription labels
- Understanding test results
- Following care instructions
- Knowing when to seek help

**2. Navigating the System**
- Making appointments
- Understanding insurance
- Finding the right doctor
- Using patient portals

**3. Making Decisions**
- Weighing treatment options
- Evaluating health information
- Knowing what questions to ask
- Understanding risks and benefits

**Common Health Literacy Tasks:**
| Task | Why It Matters |
|------|---------------|
| Reading medicine bottles | Taking correct doses |
| Understanding consent forms | Knowing what you're agreeing to |
| Following prep instructions | Getting accurate test results |
| Using thermometers | Monitoring health at home |

**Tips for Improving Health Literacy:**

*At Doctor Visits:*
- Bring a list of current medications
- Write down your questions beforehand
- Take notes or ask to record
- Repeat back what you heard

*With Written Materials:*
- Look up unfamiliar words
- Ask for materials in your language
- Request simpler versions if needed
- Use reliable websites (ending in .gov or .edu)

*With Numbers:*
- Ask what numbers mean for you specifically
- Learn your important health numbers (blood pressure, etc.)
- Understand medication dosing and timing

**Reliable Sources for Health Information:**
- MedlinePlus (medlineplus.gov)
- CDC (cdc.gov)
- Your doctor's patient education materials
- Major medical center websites`,
      keyTerms: [
        { term: 'informed consent', definition: 'Agreement to treatment after understanding the risks and benefits' },
        { term: 'patient portal', definition: 'Secure website where you can see your health information and communicate with your doctor' },
        { term: 'health outcomes', definition: 'The results of healthcare on your health condition' },
        { term: 'adherence', definition: 'Following medical instructions as directed' },
      ],
      analogies: [
        'Health literacy is like having a good map and compass for navigating your healthcare journey.',
      ],
    },
    3: {
      level: 3,
      summary: 'Health literacy encompasses functional skills, interactive abilities, and critical analysis capabilities that enable individuals to access, understand, appraise, and apply health information.',
      explanation: `## Health Literacy Framework

### Levels of Health Literacy

**Functional Health Literacy:**
- Basic reading and writing for health contexts
- Following simple instructions
- Reading appointment slips and labels

**Interactive Health Literacy:**
- Communicating with healthcare providers
- Navigating healthcare systems
- Participating in health discussions

**Critical Health Literacy:**
- Analyzing health information for reliability
- Making complex health decisions
- Advocating for yourself and others

### Core Health Literacy Skills

**Obtaining Information:**
- Identifying reliable sources
- Using patient portals effectively
- Accessing medical records
- Finding appropriate specialists

**Understanding Information:**
- Medical terminology basics
- Interpreting test results
- Understanding risk statistics
- Reading consent forms

**Appraising Information:**
- Evaluating source credibility
- Recognizing bias
- Distinguishing evidence from opinion
- Understanding limitations

**Applying Information:**
- Following treatment plans
- Making lifestyle modifications
- Self-monitoring conditions
- Knowing when to seek care

### Numeracy in Health

**Important Health Numbers:**
| Measure | Why It Matters |
|---------|---------------|
| Blood pressure | Cardiovascular risk |
| Blood sugar | Diabetes management |
| BMI | Weight-related health |
| Cholesterol | Heart disease risk |

**Understanding Risk:**
- Absolute vs. relative risk
- Understanding percentages
- Interpreting "1 in X" statistics
- Comparing treatment benefits

### Evaluating Health Information Online

**Credibility Indicators:**
- Author credentials
- Source reputation (.gov, .edu, medical centers)
- Date of information
- Evidence citations
- Funding transparency

**Red Flags:**
- Miracle cure claims
- No author or source identified
- Selling products
- Emotional manipulation
- No references

### Health Literacy and Health Outcomes

Research shows health literacy affects:
- Medication adherence
- Preventive care utilization
- Emergency department use
- Health knowledge
- Self-management of chronic conditions
- Mortality rates`,
      keyTerms: [
        { term: 'functional health literacy', definition: 'Basic reading and numerical skills for health contexts' },
        { term: 'health numeracy', definition: 'Ability to understand and use numbers in health contexts' },
        { term: 'self-efficacy', definition: 'Confidence in one\'s ability to manage health and healthcare' },
        { term: 'shared decision-making', definition: 'Process where patients and providers make healthcare decisions together' },
      ],
      clinicalNotes: 'Low health literacy is associated with higher hospitalization rates, lower use of preventive services, poorer ability to take medications correctly, and higher mortality. Approximately 36% of US adults have limited health literacy.',
    },
    4: {
      level: 4,
      summary: 'Advanced health literacy integrates critical appraisal of medical evidence, navigation of complex healthcare systems, understanding of social determinants, and effective self-advocacy within institutional healthcare contexts.',
      explanation: `## Advanced Health Literacy Competencies

### Critical Appraisal of Health Information

**Evaluating Research Evidence:**

*Study Design Hierarchy:*
1. Systematic reviews and meta-analyses
2. Randomized controlled trials
3. Cohort studies
4. Case-control studies
5. Case reports
6. Expert opinion

*Questions for Evaluating Studies:*
- Who funded the research?
- How were participants selected?
- Was there a control group?
- How large was the study?
- How long was follow-up?
- What outcomes were measured?

**Understanding Medical Statistics:**
| Concept | What It Means |
|---------|---------------|
| P-value | Probability findings occurred by chance |
| Confidence interval | Range likely containing true value |
| NNT | Number needed to treat for one benefit |
| Absolute risk reduction | Actual percentage point difference |
| Relative risk reduction | Proportional reduction (can be misleading) |

### Healthcare System Navigation

**Understanding Insurance:**
- Coverage types and networks
- Deductibles, copays, coinsurance
- Prior authorization requirements
- Appeals processes
- Out-of-pocket maximums

**Care Coordination:**
- Primary care vs. specialist roles
- Referral processes
- Care transitions
- Medical record sharing
- Second opinions

### Social Determinants and Health Literacy

**Factors Affecting Health Literacy:**
- Education level
- Language and cultural background
- Cognitive abilities
- Access to technology
- Socioeconomic status
- Health system complexity

**Addressing Barriers:**
- Interpreter services
- Plain language materials
- Teach-back confirmation
- Patient navigators
- Community health workers

### Self-Advocacy in Healthcare

**Effective Advocacy Skills:**
- Preparing for appointments
- Asking clarifying questions
- Requesting additional time
- Seeking second opinions
- Escalating concerns appropriately

**Documentation for Self-Advocacy:**
- Personal health record maintenance
- Medication lists with doses/frequencies
- Symptom diaries
- Question preparation
- Communication logs

### Digital Health Literacy

**Patient Portal Skills:**
- Accessing test results
- Secure messaging
- Appointment management
- Prescription refills
- Reviewing visit notes

**Telehealth Competencies:**
- Technical setup and troubleshooting
- Effective virtual communication
- Knowing telehealth limitations
- When to seek in-person care

### Health Literacy and Chronic Disease

**Self-Management Skills:**
- Understanding disease trajectory
- Recognizing warning signs
- Medication management
- Lifestyle modification
- Knowing when to escalate
- Working with care teams`,
      keyTerms: [
        { term: 'meta-analysis', definition: 'Statistical technique combining results from multiple studies to get stronger conclusions' },
        { term: 'social determinants of health', definition: 'Conditions where people live, work, and age that affect health outcomes' },
        { term: 'care transition', definition: 'Movement between healthcare settings or providers, requiring careful information transfer' },
        { term: 'patient navigator', definition: 'Professional who helps patients access care and overcome barriers' },
        { term: 'teach-back method', definition: 'Confirmation technique where patients explain information in their own words' },
      ],
      clinicalNotes: 'The Health Literacy Universal Precautions Toolkit recommends assuming all patients may have difficulty understanding health information and using clear communication with everyone.',
    },
    5: {
      level: 5,
      summary: 'Expert health literacy encompasses sophisticated evaluation of medical evidence, healthcare policy understanding, system-level navigation, and the ability to translate complex health information for self-advocacy and community benefit.',
      explanation: `## Expert Health Literacy Framework

### Sophisticated Evidence Evaluation

**Beyond Basic Critical Appraisal:**

*Assessing Systematic Reviews:*
- PRISMA methodology adherence
- Risk of bias assessment
- Heterogeneity evaluation
- Publication bias consideration
- GRADE certainty ratings

*Interpreting Guidelines:*
- Recommendation strength (strong vs. conditional)
- Evidence quality ratings
- Applicability to individual circumstances
- Conflicts of interest disclosure
- Update frequency and currency

**Understanding Uncertainty:**
| Type | Example |
|------|---------|
| Diagnostic uncertainty | Differential diagnosis probability |
| Prognostic uncertainty | Survival estimates ranges |
| Therapeutic uncertainty | Treatment response variation |
| Evidence uncertainty | Confidence intervals width |

### Healthcare Policy Literacy

**Understanding the Healthcare System:**
- Coverage determination processes
- Quality measurement and reporting
- Regulatory frameworks (FDA, CMS)
- Patient rights and protections
- Health equity initiatives

**Policy Impact on Individual Care:**
- Insurance regulations
- Drug approval processes
- Hospital accreditation
- Provider credentialing
- Privacy protections (HIPAA)

### Advanced System Navigation

**Complex Care Scenarios:**
- Multi-disciplinary care coordination
- Care transitions (hospital to home)
- Clinical trial participation
- Rare disease navigation
- Cross-institutional care

**Addressing System Failures:**
- Patient safety reporting mechanisms
- Ombudsman and advocacy services
- Regulatory complaints
- Legal options
- Media and public advocacy

### Health Information Translation

**For Self-Advocacy:**
- Synthesizing information from multiple sources
- Preparing evidence-based questions
- Presenting case to providers
- Negotiating care decisions
- Appealing adverse decisions

**For Community Benefit:**
- Health education for family/community
- Supporting others in healthcare navigation
- Patient advocacy organizations
- Peer support roles
- Community health promotion

### Emerging Health Literacy Challenges

**Precision Medicine:**
- Genomic information interpretation
- Pharmacogenomic implications
- Variant of uncertain significance
- Family implications of genetic results

**Digital Health:**
- Direct-to-consumer test interpretation
- Wearable data integration
- AI-assisted decision tools
- Telehealth optimization

**Information Environment:**
- Misinformation identification
- Social media health claims
- Influencer health advice
- Conspiracy theory resistance

### Health Literacy and Health Equity

**Addressing Disparities:**
- Recognition of structural barriers
- Cultural humility in information seeking
- Language access rights
- Disability accommodations
- Addressing implicit bias

**Advocacy for System Change:**
- Plain language requirements
- Interpreter access mandates
- Health literacy curriculum
- Community health investment
- Policy reform engagement`,
      keyTerms: [
        { term: 'GRADE', definition: 'Grading of Recommendations Assessment, Development and Evaluation - system for rating evidence quality' },
        { term: 'PRISMA', definition: 'Preferred Reporting Items for Systematic Reviews and Meta-Analyses - reporting standards' },
        { term: 'health equity', definition: 'Attainment of highest level of health for all people, addressing avoidable disparities' },
        { term: 'cultural humility', definition: 'Ongoing self-reflection about cultural assumptions and commitment to learning' },
        { term: 'genomic literacy', definition: 'Understanding of genetic information and its health implications' },
      ],
      clinicalNotes: `Expert health literacy competencies:
1. Critical appraisal of systematic reviews and guidelines
2. Healthcare policy and regulatory understanding
3. Complex multi-system navigation
4. Health information translation for advocacy
5. Emerging technology and precision medicine literacy
6. Health equity awareness and advocacy
7. Misinformation resistance strategies`,
    },
  },

  media: [],

  citations: [
    {
      id: 'nnlm-health-literacy',
      type: 'website',
      title: 'Health Literacy',
      source: 'National Network of Libraries of Medicine',
      url: 'https://nnlm.gov/guides/intro-health-literacy',
    },
    {
      id: 'ahrq-toolkit',
      type: 'website',
      title: 'Health Literacy Universal Precautions Toolkit',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/health-literacy/improve/precautions/index.html',
    },
  ],

  crossReferences: [
    { targetId: 'concept-talking-to-your-doctor', targetType: 'concept', relationship: 'related', label: 'Talking to Your Doctor' },
    { targetId: 'concept-understanding-medical-jargon', targetType: 'concept', relationship: 'related', label: 'Understanding Medical Jargon' },
    { targetId: 'concept-asking-questions-effectively', targetType: 'concept', relationship: 'related', label: 'Asking Questions Effectively' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['health-literacy', 'patient-education', 'healthcare-navigation'],
    clinicalRelevance: 'critical',
    keywords: ['health literacy', 'patient education', 'health information', 'healthcare navigation'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default healthLiteracyBasics;
