/**
 * Health Literacy Basics - What is Health Literacy and Why It Matters
 *
 * Covers the definition of health literacy, its importance for patient outcomes,
 * and the impact of limited health literacy on healthcare delivery.
 */

import { EducationalContent } from '../types';

export const healthLiteracyBasics: EducationalContent = {
  id: 'health-literacy-basics',
  type: 'concept',
  name: 'Health Literacy Basics',
  alternateNames: ['What is Health Literacy', 'Health Literacy Overview', 'Understanding Health Literacy'],

  levels: {
    1: {
      level: 1,
      summary: 'Health literacy is the ability to understand and use health information to make good decisions about your medical care.',
      explanation: `Imagine you get a new medicine. The label says "Take one tablet twice daily with food." Health literacy means you can:

1. Read the words
2. Understand what "twice daily" means (morning and evening)
3. Know what "with food" means (eat something when you take it)
4. Actually do it the right way

**Why Health Literacy Matters:**

When people understand their health information, they:
- Make better decisions about their care
- Take medicines correctly
- Feel more confident talking to doctors
- Stay healthier and have fewer problems

**When Health Literacy is Low:**

People might:
- Take medicines the wrong way
- Miss important appointments
- Feel confused or scared at the doctor
- Get sicker because they didn't understand what to do

**Remember:** Having low health literacy doesn't mean someone isn't smart. It just means they have trouble with MEDICAL words and ideas, which can be confusing for anyone!`,
      keyTerms: [
        { term: 'health literacy', definition: 'The ability to read, understand, and use health information to make good decisions' },
        { term: 'medical information', definition: 'Facts and instructions about health, illness, and treatments' },
        { term: 'patient outcomes', definition: 'The results or changes in a person health after treatment' },
      ],
      analogies: [
        'Health literacy is like reading a map - you need to understand the symbols to find your way to good health',
        'Low health literacy is like trying to follow a recipe written in a language you barely know',
      ],
      examples: [
        'Maria reads that her blood pressure is "140/90" but doesn know what those numbers mean or if they good or bad',
        'Juan gets pills labeled "PRN" and takes them all at once because he didn know that PRN means "only when needed"',
      ],
      patientCounselingPoints: [
        'Always ask your doctor to explain things in plain, simple words',
        'It is okay to say "I don understand. Can you explain that again?"',
        'Bring a friend or family member to appointments to help remember information',
        'Write down instructions or ask your doctor to write them down',
      ],
    },
    2: {
      level: 2,
      summary: 'Health literacy is the ability to obtain, process, and understand basic health information needed to make appropriate health decisions.',
      explanation: `## Definition of Health Literacy

Health literacy includes the skills to:
- **Read** - Understand prescriptions, appointment slips, medicine labels
- **Understand** - Comprehend medical instructions and explanations
- **Process** - Think through health information and weigh options
- **Apply** - Use information to take action for your health

## Why Health Literacy Matters

**For Patients:**
- Better ability to follow treatment plans
- Fewer medication errors
- Improved chronic disease management
- Lower hospitalization rates
- Better health outcomes

**For Healthcare Providers:**
- More effective patient communication
- Higher patient satisfaction
- Better treatment adherence
- Reduced liability risks
- Improved quality indicators

**For the Healthcare System:**
- Lower healthcare costs
- Reduced emergency department visits
- Fewer readmissions
- Better population health

## The Scope of Health Literacy

Health literacy is NOT just about reading ability. It includes:
- Print literacy (reading and writing)
- Oral literacy (speaking and listening)
- Numeracy (understanding numbers and statistics)
- Navigation skills (finding and using services)
- Digital literacy (using online health resources)

## Impact of Limited Health Literacy

Patients with limited health literacy:
- Have poorer health status
- Are less likely to get preventive care
- Have higher rates of hospitalization
- Make more medication errors
- Report worse experiences with healthcare

**Important:** A patient level of education does NOT predict their health literacy. Many highly educated people still struggle with medical terminology and complex health concepts.`,
      keyTerms: [
        { term: 'health literacy', definition: 'The degree to which individuals can obtain, process, and understand basic health information to make appropriate health decisions', pronunciation: 'helth LIT-er-uh-see' },
        { term: 'adherence', definition: 'The extent to which a patient follows agreed-upon treatment recommendations' },
        { term: 'medication error', definition: 'Any preventable event that may cause or lead to inappropriate medication use' },
        { term: 'preventive care', definition: 'Medical care that focuses on preventing disease rather than treating it' },
        { term: 'chronic disease', definition: 'A long-lasting condition that can be controlled but not cured' },
      ],
      analogies: [
        'Health literacy is like having the right tools and skills to navigate through a complex healthcare system',
        'Low health literacy is like being in a foreign country without knowing the language or customs',
      ],
      patientCounselingPoints: [
        'Use the teach-back method: "Can you tell me in your own words what we discussed?"',
        'Provide written materials at 5th-8th grade reading level',
        'Focus on 2-3 key points per visit',
        'Use visual aids and diagrams whenever possible',
      ],
    },
    3: {
      level: 3,
      summary: 'Health literacy is a multidimensional construct involving the capacity to obtain, process, and understand health information and services needed to make appropriate health decisions.',
      explanation: `## Comprehensive Definition

The Institute of Medicine defines health literacy as:
"The degree to which individuals have the capacity to obtain, process, and understand basic health information and services needed to make appropriate health decisions."

**Key Components:**
1. **Capacity** - Includes both individual skills and system demands
2. **Obtain** - Retrieve health information and services
3. **Process** - Interpret, evaluate, and integrate information
4. **Understand** - Comprehend meaning and implications
5. **Appropriate decisions** - Apply information to specific situations

## Health Literacy Framework

**Personal Factors:**
- General literacy and numeracy skills
- Health knowledge base
- Cognitive abilities
- Physical and sensory limitations
- Language proficiency and cultural background

**System Demands:**
- Complexity of health information
- Clarity of communication from providers
- Navigation requirements of the healthcare system
- Cultural and linguistic appropriateness of materials

## Bidirectional Nature

Health literacy involves BOTH:
1. **Individual skills** - What patients bring to the encounter
2. **System demands** - How healthcare systems present information

Limited health literacy often results from a mismatch between patient skills and system demands.

## Clinical Impact

**Conditions Most Affected:**
- Diabetes management (glucose monitoring, insulin dosing)
- Asthma (inhaler technique, action plans)
- Heart failure (daily weights, symptom monitoring)
- Anticoagulation therapy (INR monitoring, dose adjustments)

**Health Services Impact:**
- Less use of preventive services
- Delayed diagnosis and treatment
- Poorer understanding of treatment options
- Difficulty navigating the healthcare system
- Higher healthcare utilization and costs

## Prevalence

According to national assessments:
- Only about 12% of adults have proficient health literacy
- Nearly 9 in 10 adults may lack the skills to manage their health effectively
- Disparities exist by age, education, income, and race/ethnicity

**Important correlation:** Health literacy level is a stronger predictor of health status than education or income.`,
      keyTerms: [
        { term: 'functional health literacy', definition: 'Basic skills in reading and writing needed to function effectively in a healthcare context' },
        { term: 'interactive health literacy', definition: 'More advanced cognitive and social skills to actively participate in healthcare situations' },
        { term: 'critical health literacy', definition: 'Highest level involving critical analysis of health information and advocacy' },
        { term: 'patient activation', definition: 'The knowledge, skills, and confidence a patient has in managing their own health and healthcare' },
      ],
      clinicalNotes: 'Screen all patients for health literacy using universal precautions approach. Assume all patients may have difficulty understanding. Clear communication benefits everyone, regardless of literacy level.',
    },
    4: {
      level: 4,
      summary: 'Health literacy represents a complex interplay between individual capabilities and healthcare system demands, with significant implications for clinical outcomes, healthcare quality, and population health disparities.',
      explanation: `## Theoretical Frameworks

**Nutbeam Health Literacy Model:**

1. **Functional Literacy**
   - Basic reading, writing, and numeracy skills
   - Ability to comprehend health information
   - Foundation for higher levels

2. **Interactive Literacy**
   - Social and cognitive skills
   - Active participation in healthcare encounters
   - Extracting meaning and applying information

3. **Critical Literacy**
   - Advanced information appraisal
   - Critical analysis of health information
   - Collective action and advocacy

**Sørensen et al. Integrated Model:**
Health literacy as:
- Access: Ability to seek, find, and obtain health information
- Understand: Ability to comprehend health information
- Appraise: Ability to interpret, filter, judge, and evaluate information
- Apply: Ability to communicate and use information to maintain health

## Health Literacy and Health Disparities

**Sociodemographic Patterns:**
- Lower health literacy associated with older age, minority status, lower income, and limited English proficiency
- However, limited health literacy exists across ALL demographic groups
- Do not make assumptions based on appearance or education

**Mechanisms for Disparities:**
1. Knowledge gaps about health and healthcare
2. Difficulty navigating complex systems
3. Reduced self-efficacy for health management
4. Provider communication barriers
5. Limited access to understandable information

## Measurement Approaches

**Performance-Based Measures:**
- TOFHLA (Test of Functional Health Literacy in Adults)
- REALM (Rapid Estimate of Adult Literacy in Medicine)
- Newest Vital Sign (reading comprehension and numeracy)

**Self-Reported Measures:**
- Health Literacy Questionnaire (HLQ)
- European Health Literacy Survey Questionnaire (HLS-EU)
- Brief Health Literacy Screen (BHLS)

**Limitations of Screening:**
- Risk of shame and stigma
- Time constraints in clinical settings
- Variable predictive validity
- May not capture situational health literacy

## Universal Precautions Approach

Instead of screening, assume ALL patients have limited health literacy and:
- Use plain language universally
- Confirm understanding with teach-back
- Provide visual supports
- Limit to 2-3 key messages
- Create shame-free environment

This approach:
- Reduces stigma
- Benefits all patients
- More feasible in practice
- Addresses system-level contributors

## Policy and System Implications

**Health Literate Healthcare Organizations:**
1. Leadership makes health literacy integral to mission
2. Integrates health literacy into planning, evaluation, and improvement
3. Prepares workforce to be health literate
4. Includes populations served in design and improvement
5. Uses clear, accessible communication
6. Addresses health literacy in high-risk situations
7. Communicates clearly what health plans cover
8. Facilitates navigation and use of services
9. Provides lifelong learning and skill building

**IOM Ten Attributes of a Health Literate Organization:**
- Leadership commitment
- Integration into planning
- Workforce training
- Patient inclusion in design
- Clear communication standards
- Address high-risk situations
- Clear coverage information
- Navigation assistance
- Skill-building opportunities

## Economic Impact

**Costs of Low Health Literacy:**
- Estimated $73-$236 billion annually in excess healthcare costs
- Additional costs from hospitalizations, ED visits, and complications
- Medication non-adherence costs
- Lost productivity

**ROI for Health Literacy Interventions:**
- Cost-benefit ratios from 1:1.3 to 1:3
- Reduced hospital utilization
- Improved medication adherence
- Better preventive care uptake`,
      keyTerms: [
        { term: 'TOFHLA', definition: 'Test of Functional Health Literacy in Adults; performance-based measure using reading passages and numeracy items' },
        { term: 'REALM', definition: 'Rapid Estimate of Adult Literacy in Medicine; word recognition test taking 2-3 minutes' },
        { term: 'universal precautions', definition: 'Approach assuming all patients may have difficulty understanding; clear communication for everyone' },
        { term: ' Newest Vital Sign', definition: 'Health literacy assessment using an ice cream nutrition label; tests reading and numeracy in 3 minutes' },
        { term: 'health literate organization', definition: 'Healthcare organization that systematically addresses health literacy in all operations' },
      ],
      clinicalNotes: `The universal precautions approach is increasingly recommended over individual screening. Key strategies:
1. Assume limited health literacy in all patients
2. Use teach-back method to confirm understanding
3. Provide written materials at 5th-8th grade level
4. Use visual aids and diagrams
5. Limit jargon and use plain language
6. Allow time for questions and clarification`,
    },
    5: {
      level: 5,
      summary: 'Health literacy is a critical social determinant of health that requires systematic intervention at individual, interpersonal, organizational, community, and policy levels to improve healthcare quality, reduce disparities, and optimize outcomes.',
      explanation: `## Conceptual Foundations

**Historical Evolution:**
- 1974: First use of "health literacy" term
- 1990s: Focus on individual skills and reading ability
- 2000s: Recognition of system demands and universal precautions
- 2010s-present: Emphasis on organizational and policy approaches

**Shift from Individual Deficit to System Responsibility:**
- Early view: Patients lacking skills need remediation
- Current view: Healthcare systems must accommodate diverse literacy levels
- Analogy: Curb cuts help wheelchair users AND benefit everyone (strollers, luggage, etc.)

**Healthy People 2030 Definition Update:**
- Personal health literacy: "Degree to which individuals have ability to find, understand, and use information and services to inform health-related decisions and actions"
- Organizational health literacy: "Degree to which organizations equitably enable individuals to find, understand, and use information and services"

## Evidence Base

**Systematic Review Findings:**

Low health literacy is associated with:
- Increased hospitalization (RR 1.3-1.5)
- Greater emergency care use (RR 1.2-1.5)
- Lower use of preventive services (OR 0.5-0.7)
- Poorer ability to interpret labels and health messages
- Overall poorer health status
- Higher mortality among older adults

**Health Literacy Interventions Show:**
- Improved knowledge (moderate effect sizes)
- Better self-efficacy
- Enhanced self-care behaviors
- Reduced hospitalizations in some studies
- Mixed effects on clinical outcomes

## Clinical Practice Recommendations

**AHRQ Health Literacy Universal Precautions Toolkit:**

1. **Improving Spoken Communication**
   - Slow down, limit content
   - Use plain, non-medical language
   - Use teach-back method
   - Use "chunk and check" approach

2. **Improving Written Communication**
   - Follow plain language principles
   - Use formatting for readability
   - Pre-test materials with target audience
   - Ensure translations are culturally appropriate

3. **Improving Self-Management and Empowerment**
   - Action-oriented, specific instructions
   - Clear medication instructions
   - Use of visual aids
   - Encourage question-asking

4. **Improving Support Systems**
   - Link to community resources
   - Engage family members
   - Use health navigators
   - Leverage technology appropriately

**AMA Health Literacy Toolkit:**

Key actions for clinicians:
- Use plain language
- Limit to 2-3 key points per visit
- Use teach-back method
- Create a shame-free environment
- Invite patients to bring someone
- Use interpreters for LEP patients

## Special Populations

**Older Adults:**
- Highest prevalence of limited health literacy
- Age-related cognitive changes
- Sensory impairments (hearing, vision)
- Polypharmacy complexity
- Multiple comorbidities

**Limited English Proficiency:**
- Health literacy assessed in English may overestimate capacity
- Professional interpretation essential
- Culturally and linguistically appropriate materials
- Health literacy varies by language and context

**Chronic Disease Populations:**
- Diabetes: Numeracy demands, dietary instructions, glucose monitoring
- Heart failure: Daily weights, symptom monitoring, complex regimens
- Asthma: Inhaler technique, peak flow, action plan understanding
- Anticoagulation: INR monitoring, diet interactions

**Mental Health:**
- Cognitive symptoms affecting comprehension
- Stigma and reduced help-seeking
- Complex medication regimens
- Insurance navigation challenges

## Research Directions

**Measurement Challenges:**
- Domain-specific vs. general health literacy
- State vs. trait conceptualization
- Self-report vs. performance measures
- Cross-cultural instrument validity
- Technology-based assessment

**Intervention Effectiveness:**
- Standardization of interventions
- Dose-response relationships
- Long-term sustainability
- Implementation in diverse settings
- Cost-effectiveness data

**Emerging Areas:**
- Digital health literacy
- Genetic and genomic literacy
- Insurance literacy
- Environmental health literacy
- COVID-19 pandemic as health literacy stressor

## Implementation Science

**Implementation Frameworks:**
- CFIR (Consolidated Framework for Implementation Research)
- RE-AIM (Reach, Effectiveness, Adoption, Implementation, Maintenance)
- Health literacy as implementation determinant

**Quality Improvement Integration:**
- Health literacy measures in quality dashboards
- Patient-reported experience measures (PREMs)
- Readmission prevention strategies
- Medication safety initiatives

**Health IT Considerations:**
- Patient portal usability
- EHR readability
- Telehealth accessibility
- Mobile app appropriateness
- Algorithmic bias and fairness

## Health Equity Implications

**Structural Competence:**
- Recognizing how social structures affect health literacy
- Addressing root causes of health disparities
- Advocating for policy-level changes

**Trauma-Informed Approaches:**
- Recognition of medical trauma
- Power dynamics in healthcare
- Historical mistrust in medical system
- Cultural humility

**Community Engagement:**
- Participatory design of materials
- Community health worker integration
- Peer navigator programs
- Community-based participatory research`,
      keyTerms: [
        { term: 'AHRQ', definition: 'Agency for Healthcare Research and Quality; federal agency producing health literacy toolkits and guidelines' },
        { term: 'universal precautions approach', definition: 'Creating a shame-free environment and clear communication for ALL patients, regardless of perceived literacy level' },
        { term: 'teach-back method', definition: 'Asking patients to repeat information in their own words to confirm understanding; non-shaming assessment technique' },
        { term: 'chunk and check', definition: 'Presenting information in small segments and checking understanding before proceeding' },
        { term: 'shame-free environment', definition: 'Healthcare setting where patients feel safe asking questions without fear of being judged' },
        { term: 'participatory design', definition: 'Involving end users (patients) in the design of health materials and interventions' },
        { term: 'community health worker', definition: 'Frontline public health worker who serves as a bridge between communities and healthcare systems' },
      ],
      clinicalNotes: `Key resources for implementation:
1. AHRQ Health Literacy Universal Precautions Toolkit (2nd edition, 2020)
2. AMA Health Literacy Toolkit
3. CDC Plain Language Materials
4. Health Literacy Online (ONC guide for website design)

Quality improvement opportunities:
- Add teach-back documentation to note template
- Assess patient education materials readability
- Train staff on plain language principles
- Implement health literacy protocols for high-risk transitions (discharge, ED visits)`,
    },
  },

  media: [
    {
      id: 'health-literacy-prevalence',
      type: 'diagram',
      filename: 'health-literacy-prevalence.svg',
      title: 'Health Literacy Levels in U.S. Adults',
      description: 'Bar chart showing distribution of health literacy levels: Below Basic 14%, Basic 22%, Intermediate 53%, Proficient 12%',
    },
    {
      id: 'health-literacy-framework',
      type: 'diagram',
      filename: 'health-literacy-framework.svg',
      title: 'Integrated Model of Health Literacy',
      description: 'Diagram showing access, understand, appraise, and apply phases of health literacy',
    },
  ],

  citations: [
    {
      id: 'iom-health-literacy',
      type: 'article',
      title: 'Health Literacy: A Prescription to End Confusion',
      authors: ['Nielsen-Bohlman, L.', 'Panzer, A.M.', 'Kindig, D.A.'],
      source: 'National Academies Press',
    },
    {
      id: 'ahrq-universal-precautions',
      type: 'website',
      title: 'Health Literacy Universal Precautions Toolkit',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/health-literacy/improve/precautions-toolkit/index.html',
      accessedDate: '2024-01-01',
    },
    {
      id: 'healthy-people-2030',
      type: 'website',
      title: 'Health Literacy | Healthy People 2030',
      source: 'Office of Disease Prevention and Health Promotion',
      url: 'https://health.gov/healthypeople/objectives-and-data/browse-objectives/health-literacy',
      accessedDate: '2024-01-01',
    },
    {
      id: 'sorensen-model',
      type: 'article',
      title: 'Advancing health literacy: a conceptual framework',
      authors: ['Sorensen, K.', 'Van den Broucke, S.', 'Fullam, J.', 'et al.'],
      source: 'Health Promotion International',
    },
    {
      id: 'ama-health-literacy',
      type: 'website',
      title: 'Health Literacy and Patient Safety: Help Patients Understand',
      source: 'American Medical Association',
    },
  ],

  crossReferences: [
    { targetId: 'health-literacy-assessing-literacy', targetType: 'concept', relationship: 'sibling', label: 'Assessing Health Literacy' },
    { targetId: 'health-literacy-teach-back', targetType: 'concept', relationship: 'sibling', label: 'Teach-Back Method' },
    { targetId: 'health-literacy-plain-language', targetType: 'concept', relationship: 'sibling', label: 'Plain Language' },
    { targetId: 'health-literacy-numeracy', targetType: 'concept', relationship: 'sibling', label: 'Health Numeracy' },
    { targetId: 'health-literacy-visual-aids', targetType: 'concept', relationship: 'sibling', label: 'Visual Aids' },
  ],

  tags: {
    systems: ['communication-skills'],
    topics: ['health literacy', 'patient communication', 'patient education', 'health disparities'],
    keywords: ['health literacy', 'patient understanding', 'clear communication', 'universal precautions', 'AHRQ', 'AMA'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default healthLiteracyBasics;
