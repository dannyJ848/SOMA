import { EducationalContent } from '../../types';

export const askMe3: EducationalContent = {
  id: 'ask-me-3',
  type: 'concept',
  name: 'Ask Me 3',
  alternateNames: ['Three Questions', 'Patient Questions', 'Health Questions'],
  
  levels: {
    1: {
      level: 1,
      summary: 'Three simple questions to ask at every doctor visit.',
      explanation: `Ask Me 3 is a simple way to remember three important questions for any medical appointment. These questions help you understand your health problem, what to do about it, and why it matters. This makes you an active partner in your own care and helps prevent mistakes.`,
      keyTerms: [
        { term: 'Ask Me 3', definition: 'A program that teaches patients to ask three specific questions at every medical visit' }
      ],
      analogies: [
        'Just like you need to know what ingredients go into a recipe, what steps to follow, and why each step matters, you need to know these three things about your health care'
      ],
      examples: [
        'A parent asking these questions when their child has an ear infection',
        'An older adult asking before starting a new medication'
      ]
    },
    2: {
      level: 2,
      summary: 'Three questions: What is my main problem? What do I need to do? Why is it important?',
      explanation: `Ask Me 3 promotes three specific questions for every health interaction:

1. What is my main problem?
   - Understand your diagnosis or condition
   - Learn what is causing your symptoms

2. What do I need to do?
   - Know your treatment plan
   - Understand medications and lifestyle changes
   - Know when to follow up

3. Why is it important for me to do this?
   - Understand the benefits of treatment
   - Know the risks of not following the plan
   - Understand how this improves your health

These questions were developed by health literacy experts and are used worldwide to improve patient-provider communication.`,
      keyTerms: [
        { term: 'Ask Me 3', definition: 'A health literacy program promoting three essential questions for patients' },
        { term: 'diagnosis', definition: 'Identification of a disease or condition based on symptoms and tests' },
        { term: 'treatment plan', definition: 'A detailed plan for managing a health condition' }
      ],
      analogies: [
        'When asking for directions, you need to know where you are (problem), what turns to make (what to do), and why that route is best (why it matters)'
      ],
      examples: [
        'Before surgery: What is being fixed? What do I need to do to prepare? Why are these preparations necessary?',
        'For diabetes: What is my current blood sugar control? What diet changes do I need? Why does controlling blood sugar prevent complications?',
        'For a new prescription: What is this treating? How do I take it? Why is taking it exactly as directed important?'
      ]
    },
    3: {
      level: 3,
      summary: 'A structured framework for patient-provider communication that improves understanding, adherence, and outcomes.',
      explanation: `The Ask Me 3 framework was developed by the Partnership for Clear Health Communication, a coalition of professional medical associations and health literacy organizations. It addresses a critical gap in healthcare: studies show that 40-80% of medical information provided during consultations is forgotten immediately, and nearly half of what is remembered is recalled incorrectly.

The three questions are designed to:

1. What is my main problem?
   - Clarifies the diagnosis or working diagnosis
   - Addresses differential diagnoses that have been ruled out
   - Provides context for symptoms and test results
   - Sets realistic expectations for recovery or management

2. What do I need to do?
   - Specifies concrete actions with clear timelines
   - Includes medication names, doses, and administration instructions
   - Covers lifestyle modifications with specific parameters
   - Details follow-up appointments and warning signs requiring immediate attention
   - Identifies necessary monitoring (home blood pressure, blood sugar logs, etc.)

3. Why is it important for me to do this?
   - Explains the natural history of the condition if untreated
   - Describes the mechanism by which treatment works
   - Quantifies benefits when possible (absolute risk reduction, number needed to treat)
   - Addresses barriers to adherence and develops strategies to overcome them
   - Connects short-term actions to long-term health goals

Implementation considerations:
- Patients should write down answers or request written materials
- Bring a family member or friend to help remember and ask questions
- Ask providers to explain again using different words if needed
- Request teach-back confirmation of understanding
- Use the questions for phone consultations, pharmacy visits, and specialist referrals

Research demonstrates that patients who use structured questioning frameworks like Ask Me 3 have better medication adherence, fewer emergency department visits, and improved health outcomes.`,
      keyTerms: [
        { term: 'health literacy', definition: 'The degree to which individuals can obtain, process, and understand basic health information needed to make appropriate health decisions' },
        { term: 'working diagnosis', definition: 'A provisional diagnosis based on available information, subject to revision as more data becomes available' },
        { term: 'differential diagnosis', definition: 'The process of differentiating between two or more conditions sharing similar signs or symptoms' },
        { term: 'adherence', definition: 'The extent to which a patient follows medical advice, takes medications as prescribed, and attends follow-up appointments' },
        { term: 'absolute risk reduction', definition: 'The difference in event rates between treatment and control groups in a clinical trial' }
      ]
    },
    4: {
      level: 4,
      summary: 'Evidence-based communication intervention that activates patients and reduces health literacy-related disparities in healthcare quality and safety.',
      explanation: `The Ask Me 3 initiative represents a fundamental shift from paternalistic healthcare delivery to patient-centered care, grounded in the principles of health literacy universal precautions and shared decision-making. The framework operates on the premise that all patients, regardless of education level or health literacy, benefit from clear communication and structured information exchange.

Theoretical Framework:
Ask Me 3 integrates constructs from multiple behavioral theories:
- Self-efficacy theory: Structured questioning builds confidence in patient-provider interactions
- Health belief model: Understanding "why" addresses perceived benefits and barriers
- Social cognitive theory: Active engagement promotes information retention and behavior change

Clinical Implementation:

Pre-visit preparation:
- Patients complete symptom diaries or health concerns worksheets
- Bring current medication lists and previous test results
- Write down specific concerns beyond the main problem

During the visit:
- First question ("What is my main problem?") establishes diagnostic clarity
- Second question ("What do I need to do?") generates actionable care plans
- Third question ("Why is it important?") creates motivational linkage to behavior change
- Use teach-back method to confirm understanding
- Provide after-visit summaries in plain language

Documentation integration:
- Electronic health records can prompt providers to address Ask Me 3 components
- Patient portals can reinforce messages with targeted education
- Care coordinators can follow up on understanding and adherence

Outcomes Evidence:
- Reduced medication errors through improved comprehension
- Decreased emergency department utilization for ambulatory care-sensitive conditions
- Improved chronic disease management metrics (HbA1c, blood pressure control)
- Enhanced patient satisfaction scores
- Reduced health literacy-related disparities across socioeconomic strata

Barriers and Solutions:
- Time constraints: Integration into workflow through team-based care
- Patient reluctance: Normalize questioning as expected patient behavior
- Provider variability: Training and standardized communication protocols
- Cultural factors: Translation and culturally adapted materials`,
      keyTerms: [
        { term: 'health literacy universal precautions', definition: 'The approach of assuming all patients may have difficulty understanding health information and communicating accordingly' },
        { term: 'self-efficacy', definition: 'An individual\'s belief in their capacity to execute behaviors necessary to produce specific performance attainments' },
        { term: 'patient activation', definition: 'The knowledge, skills, and confidence to manage one\'s health and healthcare' },
        { term: 'ambulatory care-sensitive conditions', definition: 'Health conditions for which appropriate outpatient care can prevent hospitalization or emergency department visits' },
        { term: 'teach-back method', definition: 'A communication technique where patients explain information back to providers to confirm understanding' }
      ],
      clinicalNotes: `Clinical Pearl: When patients ask "What is my main problem?", probe for understanding of chronic conditions. Many patients with diabetes, hypertension, or heart failure do not understand that these are lifelong conditions requiring ongoing management, not acute problems that resolve with short-term treatment.

Documentation Tip: Note patient understanding and participation in shared decision-making. "Patient able to articulate diagnosis, treatment plan, and rationale using Ask Me 3 framework. Demonstrated understanding via teach-back."

Risk Management: Patients who cannot answer Ask Me 3 questions after explanation are at high risk for medication errors, missed appointments, and poor outcomes. Consider enhanced education strategies, simplified regimens, and more frequent follow-up for these patients.`
    },
    5: {
      level: 5,
      summary: 'A health literacy intervention with demonstrated efficacy across diverse populations, integrated into quality improvement frameworks and health policy initiatives addressing communication-related medical errors.',
      explanation: `The Ask Me 3 program exemplifies the translation of health literacy research into scalable, implementable interventions. Its development reflects the Institute of Medicine\'s (now National Academy of Medicine) seminal report "Health Literacy: A Prescription to End Confusion" and subsequent policy initiatives addressing the estimated $236 billion annual cost of low health literacy in the United States healthcare system.

Implementation Science Perspective:

Reach and Adoption:
Ask Me 3 materials have been distributed to over 30,000 healthcare organizations worldwide. The program\'s broad dissemination reflects its:
- Low resource requirements (minimal training, no equipment)
- Adaptability across care settings (primary care, specialty, acute, long-term)
- Cultural and linguistic adaptability
- Compatibility with existing quality improvement initiatives

Effectiveness Studies:
Meta-analyses of health literacy interventions consistently show that structured patient activation strategies produce:
- Small to moderate effect sizes for knowledge acquisition (d = 0.4-0.6)
- Moderate improvements in self-management behaviors (d = 0.5-0.7)
- Significant reductions in healthcare utilization (OR 0.6-0.8 for hospitalization)

Mechanism of Action:
The intervention operates through multiple pathways:
1. Information processing: Structured format enhances encoding and retrieval
2. Motivational enhancement: Understanding "why" activates goal-directed behavior
3. Self-regulation: Clear action plans support monitoring and adjustment
4. Relational improvement: Active participation builds therapeutic alliance

Health Equity Implications:
Low health literacy disproportionately affects:
- Older adults (cognitive changes, polypharmacy complexity)
- Racial and ethnic minorities (language barriers, discrimination-related distrust)
- Individuals with limited education
- Those with chronic conditions (information burden, complexity)

Ask Me 3 functions as a health equity intervention by providing standardized communication tools that do not require patients to possess baseline health knowledge or sophisticated communication skills.

Integration with Broader Initiatives:
- Joint Commission patient communication standards
- CMS Hospital Consumer Assessment of Healthcare Providers and Systems (HCAHPS)
- Accountable care organization quality metrics
- Meaningful Use patient engagement requirements
- Patient safety organization error reduction strategies

Future Directions:
- Digital health adaptations (patient-facing apps, AI chatbots)
- Integration with decision support tools
- Population health applications (automated outreach, risk stratification)
- Cross-cultural validation in low-resource settings

Research Gaps:
- Long-term sustainability of behavior change
- Optimal training modalities for providers
- Cost-effectiveness in resource-limited settings
- Integration with health system financial incentives`,
      keyTerms: [
        { term: 'implementation science', definition: 'The study of methods to promote the adoption and integration of evidence-based practices into routine healthcare' },
        { term: 'patient activation measure', definition: 'A validated survey instrument assessing patient knowledge, skills, and confidence for self-management' },
        { term: 'therapeutic alliance', definition: 'The collaborative relationship between patient and provider characterized by mutual trust and shared goals' },
        { term: 'effect size', definition: 'A standardized measure of the magnitude of a treatment effect or intervention impact' },
        { term: 'health equity', definition: 'The attainment of the highest level of health for all people, requiring focused efforts to address avoidable inequalities' }
      ],
      clinicalNotes: `Research Application: Ask Me 3 serves as a model for translational research in health communication. Clinicians can contribute to evidence development by:
- Documenting implementation fidelity and adaptations
- Collecting patient-reported outcomes related to understanding and confidence
- Participating in quality improvement networks studying communication interventions
- Publishing case series and implementation experiences

Quality Improvement: Integrate Ask Me 3 into comprehensive communication protocols including:
- Pre-visit planning and agenda setting
- Plain language and numeracy considerations
- Teach-back confirmation
- Written after-visit summaries
- Post-visit follow-up calls

System-Level Considerations: Health system leaders should:
- Include communication quality in provider performance metrics
- Invest in interpreter services and translated materials
- Build health literacy into organizational culture
- Address structural barriers (time constraints, documentation burden) that impede effective communication`
    }
  },
  
  media: [],
  
  citations: [
    { id: 'berkman-2011', type: 'article', title: 'Low health literacy and health outcomes', source: 'Annals of Internal Medicine', authors: ['Berkman ND'] },
    { id: 'dewalt-2006', type: 'article', title: 'A heart failure self-management program for patients of all literacy levels', source: 'Journal of General Internal Medicine', authors: ['DeWalt DA'] },
    { id: 'schillinger-2003', type: 'article', title: 'Closing the loop: physician communication with diabetic patients who have low health literacy', source: 'Archives of Internal Medicine', authors: ['Schillinger D'] }
  ],
  
  crossReferences: [
    { targetId: 'teach-back-method', targetType: 'concept', relationship: 'related', label: 'Teach-Back Method' },
    { targetId: 'shared-decision-making', targetType: 'concept', relationship: 'related', label: 'Shared Decision Making' },
    { targetId: 'reading-medication-labels', targetType: 'concept', relationship: 'related', label: 'Reading Medication Labels' },
    { targetId: 'interpreting-test-results', targetType: 'concept', relationship: 'related', label: 'Interpreting Test Results' }
  ],
  
  tags: {
    systems: ['health-system'],
    topics: ['patient-education', 'communication'],
    keywords: ['health literacy', 'patient questions', 'doctor visit', 'communication skills', 'patient activation']
  },
  
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
