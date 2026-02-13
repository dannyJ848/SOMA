/**
 * Health Advocacy - Speaking Up for Your Health and Others
 *
 * Covers self-advocacy skills, navigating healthcare barriers, understanding patient rights,
 * and advocating for better health outcomes at individual and community levels.
 */

import { EducationalContent } from '../../types';

export const healthAdvocacy: EducationalContent = {
  id: 'health-literacy-health-advocacy',
  type: 'concept',
  name: 'Health Advocacy',
  alternateNames: ['Self-Advocacy in Healthcare', 'Patient Advocacy', 'Healthcare Self-Advocacy'],

  levels: {
    1: {
      level: 1,
      summary: 'Being your own health advocate means speaking up for yourself to get the care you need and deserve.',
      explanation: `Being a health advocate means standing up for yourself (or someone else) to make sure you get good healthcare.

**Why Be Your Own Advocate?**

- No one knows your body better than you
- Doctors are busy and might miss something
- You deserve to understand your care
- Speaking up can prevent mistakes

**How to Speak Up:**

1. **Say what you need**
   - "I need more time to think about this"
   - "I do not understand. Can you explain?"
   - "This does not feel right to me"

2. **Ask questions**
   - "Why do I need this test?"
   - "Are there other options?"
   - "What happens if I do not do this?"

3. **Share concerns**
   - "I am worried about the cost"
   - "I had a bad reaction to this before"
   - "This does not match what I read"

**Your Rights as a Patient:**

- The right to understand your care
- The right to say no to treatment
- The right to a second opinion
- The right to see your medical records
- The right to privacy

**When to Speak Up:**

- You are in pain and no one is helping
- You think something is wrong
- You do not agree with a plan
- You feel rushed or ignored
- You think a mistake was made

**Bringing a Support Person:**

Sometimes it helps to bring someone who can:
- Help you remember information
- Ask questions you might forget
- Speak up if you feel too shy or sick

**Remember:** Being polite but firm is okay. You are not being difficult - you are being smart about your health!`,
      keyTerms: [
        { term: 'advocate', definition: 'Someone who speaks up for themselves or others to get what they need' },
        { term: 'patient rights', definition: 'Things you are entitled to as a patient, like privacy and respectful care' },
        { term: 'second opinion', definition: 'Asking another doctor what they think about your diagnosis or treatment' },
      ],
      analogies: [
        'Being a health advocate is like being your own lawyer - you are there to protect your interests',
        'Speaking up at the doctor is like asking questions in class - it helps you learn and get what you need',
      ],
      examples: [
        'Rosa told her doctor that her pain was not getting better even after taking the medicine - the doctor changed her treatment',
        'Michael asked for a second opinion about surgery and learned there was a less invasive option',
      ],
      patientCounselingPoints: [
        'It is okay to say "I do not understand" - ask for simpler explanations',
        'You can always ask for more time before making a decision',
        'Bring a family member or friend to help you speak up',
        'Write down your concerns before your appointment so you do not forget',
      ],
    },
    2: {
      level: 2,
      summary: 'Health advocacy involves understanding patient rights, developing assertive communication skills, navigating healthcare barriers, and partnering with providers to achieve optimal health outcomes.',
      explanation: `## What is Health Advocacy?

Health advocacy is the active promotion of health interests at three levels:
- **Individual**: Speaking up for your own health needs
- **Interpersonal**: Helping family and friends navigate healthcare
- **Community**: Working to improve health for groups and populations

## Patient Rights

**Fundamental Rights:**
- Informed consent before treatment
- Privacy and confidentiality (HIPAA)
- Access to medical records
- Respectful, non-discriminatory care
- Participation in care decisions
- Right to refuse treatment
- Right to second opinions

**When Rights Are Violated:**
- Document what happened
- Speak with patient relations
- File a formal complaint
- Contact state health department
- Consult patient advocacy organizations

## Self-Advocacy Skills

**Assertive Communication:**
- State needs clearly and directly
- Use "I" statements: "I need..." "I feel..."
- Maintain respectful but firm tone
- Prepare key points in advance

**Information Gathering:**
- Research your condition
- Prepare questions before visits
- Request copies of test results
- Understand your insurance coverage

**Navigating Disagreements:**
- Express concerns respectfully
- Ask for rationale behind recommendations
- Request alternatives
- Seek second opinions when appropriate

## Overcoming Barriers

**Common Barriers:**
- Fear of being seen as "difficult"
- Power imbalance with providers
- Complex medical terminology
- Time constraints in appointments
- Insurance and financial issues

**Strategies:**
- Bring a support person
- Write down key points
- Request longer appointments
- Use patient portals for communication
- Ask for patient advocates at hospitals

## When to Escalate

**Warning Signs:**
- Concerns being dismissed repeatedly
- Feeling unsafe in care environment
- Significant disagreement about treatment
- Suspected medical errors
- Discrimination or disrespect

**Steps to Escalate:**
1. Discuss with provider directly first
2. Ask to speak with supervisor or charge nurse
3. Contact patient relations/advocate
4. File formal grievance
5. Contact regulatory bodies if needed

## Advocating for Others

**Supporting Family Members:**
- Attend appointments with them
- Help prepare questions
- Take notes during visits
- Help coordinate care
- Communicate with providers on their behalf (with permission)

**Healthcare Proxy:**
- Legal document designating decision-maker
- Used when person cannot decide for self
- Should discuss wishes in advance
- Different from power of attorney`,
      keyTerms: [
        { term: 'informed consent', definition: 'Agreement to treatment after understanding risks, benefits, and alternatives' },
        { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act; law protecting patient privacy' },
        { term: 'healthcare proxy', definition: 'Document naming someone to make healthcare decisions if you cannot' },
        { term: 'patient advocate', definition: 'Professional who helps patients navigate healthcare and resolve issues' },
        { term: 'grievance', definition: 'Formal complaint about healthcare services' },
      ],
      patientCounselingPoints: [
        'Know your basic patient rights including privacy, informed consent, and access to records',
        'Practice assertive communication using "I" statements',
        'Do not be afraid to ask for clarification or to disagree respectfully',
        'Hospital patient advocates are available to help resolve concerns',
      ],
    },
    3: {
      level: 3,
      summary: 'Health advocacy encompasses individual self-efficacy, health system navigation, understanding of patient rights frameworks, and engagement in collective action for health equity and policy change.',
      explanation: `## Theoretical Foundations

**Self-Efficacy and Advocacy:**
- Bandura's social cognitive theory
- Self-efficacy as predictor of advocacy behavior
- Mastery experiences build confidence
- Vicarious learning from role models

**Patient Activation:**
- Patient Activation Measure (PAM)
- Knowledge, skills, and confidence
- Activation levels predict outcomes
- Interventions can increase activation

**Empowerment Framework:**
- Individual, organizational, community levels
- Critical consciousness development
- Skills and resources access
- Participation in collective action

## Patient Rights Framework

**International Standards:**
- WHO Patient Rights principles
- UN Convention on Rights of Persons with Disabilities
- Declaration of Lisbon (WMA)

**U.S. Legal Framework:**
- HIPAA Privacy Rule
- EMTALA (emergency care)
- ACA patient protections
- State-specific patient rights laws
- CMS Conditions of Participation

**Enforcement Mechanisms:**
- OCR (HIPAA complaints)
- State health departments
- Joint Commission
- CMS surveys
- Legal action

## Advanced Advocacy Strategies

**Navigating Complex Systems:**
- Understanding healthcare hierarchy
- Identifying key decision-makers
- Documenting interactions
- Building relationships with providers
- Leveraging patient experience data

**Addressing Implicit Bias:**
- Recognizing bias in care
- Strategies for self-advocacy in biased systems
- Documentation for accountability
- Escalation pathways

**Managing Disagreements:**
- Shared decision-making frameworks
- Ethics consultation resources
- Mediation processes
- Legal options when necessary

## Advocacy Across Settings

**Inpatient Advocacy:**
- Nursing advocacy role
- Patient safety concerns
- Rapid response systems
- Family presence policies

**Outpatient Advocacy:**
- Care coordination needs
- Access to specialists
- Insurance navigation
- Prior authorization challenges

**End-of-Life Advocacy:**
- Advance care planning
- POLST/MOLST forms
- Hospice and palliative care access
- Honoring patient wishes

## Collective Health Advocacy

**Community-Level Action:**
- Health disparities awareness
- Community organizing
- Coalition building
- Policy advocacy

**Patient Advocacy Organizations:**
- Disease-specific organizations
- Patient-centered outcomes research
- Healthcare consumer groups
- Health equity coalitions

**Policy Engagement:**
- Understanding legislative process
- Effective advocacy communication
- Testimony and public comment
- Voting and civic engagement

## Health Literacy and Advocacy

**Information as Power:**
- Access to medical records
- Understanding test results
- Research literacy
- Digital health tools

**Overcoming Literacy Barriers:**
- Requesting plain language
- Using interpreters
- Visual aids and summaries
- Support persons

## Measuring Advocacy Effectiveness

**Individual Level:**
- Patient Activation Measure
- Self-efficacy scales
- Satisfaction measures
- Health outcomes

**System Level:**
- Patient experience scores
- Complaint trends
- Policy changes
- Access improvements`,
      keyTerms: [
        { term: 'patient activation', definition: 'Knowledge, skills, and confidence for managing health and healthcare' },
        { term: 'EMTALA', definition: 'Emergency Medical Treatment and Labor Act; requires emergency screening and stabilization regardless of ability to pay' },
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment; actionable medical orders for end-of-life care' },
        { term: 'OCR', definition: 'Office for Civil Rights; enforces HIPAA and anti-discrimination laws in healthcare' },
        { term: 'ethics consultation', definition: 'Process for addressing ethical concerns in clinical care' },
      ],
      clinicalNotes: 'Support patient advocacy through clear communication, documentation of patient preferences, and connection to resources. Recognize that advocacy may be challenging for patients facing bias or communication barriers. Hospital-based patient advocates can assist with complex situations.',
    },
    4: {
      level: 4,
      summary: 'Advanced health advocacy integrates behavioral science, health systems knowledge, policy analysis, and leadership skills to address structural barriers, promote health equity, and transform healthcare delivery.',
      explanation: `## Advocacy Theory and Evidence

**Theoretical Integration:**
- Social ecological model: Individual, interpersonal, organizational, community, policy
- Critical health literacy: Analysis of social determinants
- Empowerment education: Freire's conscientization
- Community-based participatory approaches

**Evidence Base:**
- Patient activation improves outcomes
- Health literacy interventions increase self-advocacy
- Patient engagement reduces disparities
- Community advocacy improves population health

**Behavioral Determinants:**
- Self-efficacy for advocacy
- Perceived barriers and facilitators
- Social norms around speaking up
- Provider responsiveness

## Structural Determinants of Advocacy

**Power Dynamics:**
- Provider-patient hierarchy
- Institutional culture
- Economic pressures
- Knowledge asymmetry

**Systemic Barriers:**
- Implicit bias in care delivery
- Structural racism and discrimination
- Insurance and financial constraints
- Geographic and access barriers

**Enabling Factors:**
- Patient-centered culture
- Feedback mechanisms
- Accountability structures
- Resource availability

## Advanced Individual Advocacy

**Complex Medical Situations:**
- Diagnostic uncertainty
- Multiple providers/specialists
- Care transitions
- Experimental treatments
- Medical errors

**Negotiating Healthcare:**
- Prior authorization appeals
- Insurance denials
- Medical billing disputes
- Access to care issues

**Legal and Ethical Rights:**
- Informed consent complexities
- Capacity determinations
- Surrogate decision-making
- Medical records access and amendment

## Advocacy Leadership

**Organizational Advocacy:**
- Patient advisory councils
- Quality improvement participation
- Policy and procedure input
- Hiring and training involvement

**System-Level Change:**
- Patient experience measurement
- Transparency initiatives
- Accountability mechanisms
- Culture transformation

**Professional Advocacy:**
- Clinician advocacy role
- Nursing advocacy tradition
- Social work advocacy
- Chaplaincy and support services

## Policy Advocacy

**Healthcare Policy Analysis:**
- Policy process understanding
- Stakeholder analysis
- Evidence in policymaking
- Implementation considerations

**Advocacy Strategies:**
- Coalition building
- Media engagement
- Legislative testimony
- Regulatory comment
- Litigation

**Health Equity Focus:**
- Addressing disparities through policy
- Social determinants integration
- Community voice centering
- Structural change approaches

## Research and Evaluation

**Measuring Advocacy:**
- Process measures (participation, voice)
- Outcome measures (health, satisfaction)
- System measures (policy, culture change)
- Equity measures (disparity reduction)

**Research Methodologies:**
- Mixed methods approaches
- Community-based participatory research
- Implementation science
- Policy analysis

**Knowledge Translation:**
- Disseminating advocacy research
- Tools and resources development
- Training program development
- Best practice identification

## Teaching Advocacy

**Patient Education:**
- Self-advocacy skill building
- Rights education
- Navigation training
- Support group facilitation

**Professional Education:**
- Advocacy in curriculum
- Role modeling
- Simulation and practice
- Reflective learning

**Community Education:**
- Popular education methods
- Peer educator models
- Community health worker training
- Coalition capacity building`,
      keyTerms: [
        { term: 'critical health literacy', definition: 'Ability to critically analyze health information and social determinants; enables collective action' },
        { term: 'patient advisory council', definition: 'Group of patients/families advising healthcare organizations on policies, programs, and patient experience' },
        { term: 'community-based participatory research', definition: 'Research approach involving community members as equal partners in all phases' },
        { term: 'conscientization', definition: "Freire's concept of developing critical awareness of social and political contradictions" },
        { term: 'structural competency', definition: 'Clinical skill recognizing how social and economic structures produce health outcomes' },
      ],
      clinicalNotes: `Provider advocacy responsibilities:
1. Support patient voice in care decisions
2. Address barriers to care within sphere of influence
3. Document and report safety concerns
4. Participate in institutional improvement
5. Advocate for policy changes benefiting patients
6. Recognize and address implicit bias in systems`,
    },
    5: {
      level: 5,
      summary: 'Expert-level health advocacy encompasses transformational leadership, health systems change agency, policy influence, research advancement, and building institutional capacity for patient-centered, equitable healthcare.',
      explanation: `## Transformational Advocacy

**Paradigm Shifts:**
- From paternalism to partnership
- From compliance to collaboration
- From individual to structural focus
- From disease to well-being orientation

**Disruptive Advocacy:**
- Challenging institutional practices
- Whistleblowing and accountability
- Direct action strategies
- Media and public campaigns

**Systemic Change Theory:**
- Complex adaptive systems
- Leverage points for transformation
- Tipping points and diffusion
- Sustainability and institutionalization

## Health Systems Leadership

**Patient Experience Leadership:**
- Culture of respect and dignity
- Systematic voice mechanisms
- Continuous improvement integration
- Accountability to patients

**Governance and Policy:**
- Board-level patient engagement
- Patient representation in governance
- Policy development participation
- Strategic planning involvement

**Quality and Safety Integration:**
- Patient safety partners
- Error disclosure programs
- Root cause analysis involvement
- Quality metrics co-design

## Health Equity Advocacy

**Structural Competency in Action:**
- Recognizing structural determinants
- Advocacy for structural interventions
- Policy analysis through equity lens
- Coalition building for justice

**Anti-Racism in Healthcare:**
- Recognizing and addressing racism
- Workforce diversity advocacy
- Community accountability
- Reparative approaches

**Global Health Advocacy:**
- Health as human right
- Global health governance
- Pharmaceutical access
- Climate and health

## Research Leadership

**Patient-Centered Outcomes Research:**
- PCORI engagement principles
- Research prioritization
- Study design involvement
- Results dissemination

**Implementation Research:**
- Advocacy intervention effectiveness
- Adaptation strategies
- Sustainability research
- Scaling successful programs

**Research Translation:**
- Evidence synthesis
- Guideline development
- Quality measure development
- Decision aid creation

## Policy Expertise

**Legislative Advocacy:**
- Bill analysis and tracking
- Testimony and communication
- Coalition leadership
- Campaign strategy

**Regulatory Engagement:**
- Comment and feedback processes
- Standards development
- Accreditation influence
- Enforcement monitoring

**Legal Advocacy:**
- Impact litigation
- Regulatory enforcement
- Patient rights law
- Disability rights

## Education and Training

**Curriculum Development:**
- Patient engagement in education
- Advocacy competencies
- Assessment methods
- Continuing education

**Faculty Development:**
- Teaching advocacy skills
- Role modeling
- Scholarship of engagement
- Community partnerships

**Organizational Learning:**
- Learning health system integration
- Feedback loop optimization
- Knowledge management
- Culture assessment

## Future Directions

**Technology and Advocacy:**
- Digital health equity
- AI and decision support
- Telehealth access
- Data ownership and governance

**Emerging Challenges:**
- Pandemic preparedness
- Climate health
- Aging population
- Mental health integration

**Sustainable Advocacy:**
- Burnout prevention
- Coalition sustainability
- Funding models
- Succession planning

## Professional Development

**Advocacy Career Paths:**
- Patient advocate roles
- Policy analyst positions
- Community organizer careers
- Healthcare leadership
- Academic scholarship

**Skill Development:**
- Negotiation and mediation
- Coalition building
- Media and communication
- Policy analysis
- Research methods

**Support Systems:**
- Professional networks
- Mentorship
- Peer support
- Self-care practices`,
      keyTerms: [
        { term: 'learning health system', definition: 'Healthcare system in which knowledge generation is embedded in practice and used for continuous improvement' },
        { term: 'PCORI', definition: 'Patient-Centered Outcomes Research Institute; funds comparative effectiveness research with patient engagement' },
        { term: 'impact litigation', definition: 'Legal strategy using lawsuits to achieve broad policy or social change' },
        { term: 'reparative approaches', definition: 'Healthcare interventions addressing historical injustice and its ongoing health effects' },
        { term: 'complex adaptive system', definition: 'System characterized by diverse interacting components, emergence, and nonlinear dynamics' },
      ],
      clinicalNotes: `Leadership advocacy opportunities:
1. Chair or participate in patient advisory councils
2. Lead patient experience improvement initiatives
3. Develop and teach advocacy curricula
4. Engage in health policy advocacy
5. Conduct patient engagement research
6. Build coalitions for health equity

Key organizations:
- Institute for Patient- and Family-Centered Care
- National Academy for State Health Policy
- Community Catalyst
- Families USA
- National Health Council`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ipfcc',
      type: 'website',
      title: 'Institute for Patient- and Family-Centered Care',
      source: 'IPFCC',
      url: 'https://www.ipfcc.org/',
    },
    {
      id: 'ama-patient-rights',
      type: 'website',
      title: 'Patient Rights',
      source: 'American Medical Association',
      url: 'https://www.ama-assn.org/delivering-care/ethics/patient-rights',
    },
    {
      id: 'pcori-engagement',
      type: 'website',
      title: 'Engagement in Health Research',
      source: 'Patient-Centered Outcomes Research Institute',
      url: 'https://www.pcori.org/engagement',
    },
    {
      id: 'hibbard-pam',
      type: 'article',
      title: 'Development of the Patient Activation Measure (PAM)',
      authors: ['Hibbard, J.H.', 'Stockard, J.', 'Mahoney, E.R.', 'Tusler, M.'],
      source: 'Health Services Research',
    },
  ],

  crossReferences: [
    { targetId: 'health-literacy-patient-provider-communication', targetType: 'concept', relationship: 'sibling', label: 'Patient-Provider Communication' },
    { targetId: 'health-literacy-healthcare-system-navigation', targetType: 'concept', relationship: 'related', label: 'Healthcare System Navigation' },
    { targetId: 'patient-advocacy-overview', targetType: 'concept', relationship: 'related', label: 'Patient Advocacy Overview' },
  ],

  tags: {
    systems: ['health-literacy'],
    topics: ['advocacy', 'patient rights', 'empowerment', 'health equity'],
    keywords: ['advocacy', 'patient rights', 'self-advocacy', 'health equity', 'patient activation', 'empowerment'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default healthAdvocacy;
