/**
 * Shared Decision Making - Educational Content
 *
 * Comprehensive content on collaborative decision-making
 * between patients, families, and healthcare teams.
 */

import { EducationalContent } from '../../types';

export const sharedDecisionMaking: EducationalContent = {
  id: 'concept-shared-decision-making',
  type: 'concept',
  name: 'Shared Decision Making',
  alternateNames: ['SDM', 'Collaborative Decision Making', 'Patient-Centered Decision Making'],

  levels: {
    1: {
      level: 1,
      summary: 'Shared decision making means you and your doctor work together to make healthcare choices based on what is most important to you.',
      explanation: `**What Is Shared Decision Making?**

Shared decision making is when:
- Your doctor shares information about your health and treatment options
- You share what is important to you and your life
- Together, you make the best choice for you

**Why Is It Important?**

- You understand your options
- Your values and wishes guide decisions
- You feel more confident about your choices
- Your care fits what matters most to you
- You and your doctor work as a team

**How Does It Work?**

**Step 1: Talk About Your Health**
Your doctor explains:
- What is happening with your illness
- What treatments might help
- What benefits each treatment offers
- What problems or side effects might happen

**Step 2: Talk About What Matters to You**
You share:
- What is important in your life
- What you are hoping for
- What you are worried about
- What you are willing to try or not try

**Step 3: Make a Decision Together**
You and your doctor:
- Look at the options together
- Think about how each option fits your life
- Make a choice that feels right for you

**Remember:**
- You can always ask questions
- You can take time to think
- You can bring family members to help
- You can change your mind if needed

**Example:**

Your doctor says: "There are two ways to treat this problem. Option A might help you live longer but means more time in the hospital. Option B focuses on comfort and lets you stay home."

You think about what matters most to you - being at home with family vs. living as long as possible.

Together, you choose the option that fits your life best.`,
      keyTerms: [
        { term: 'shared decision making', definition: 'When patients and doctors work together to make healthcare choices' },
        { term: 'benefits', definition: 'Good things that a treatment might do for you' },
        { term: 'side effects', definition: 'Unwanted problems that a treatment might cause' },
        { term: 'values', definition: 'What is most important to you in life' },
      ],
      analogies: [
        'Shared decision making is like planning a trip with a travel agent - the agent knows all the destinations and options, but you decide where you want to go based on what you enjoy.',
        'Think of it like ordering a meal - the waiter tells you what each dish is like, and you choose based on what sounds good to you.',
      ],
      examples: [
        'A person with heart failure might decide with their doctor that staying home and feeling comfortable is more important than having more hospital treatments.',
        'Someone with cancer might choose a treatment that has more side effects but offers a chance of living longer because attending their child\'s graduation is most important.',
      ],
    },
    2: {
      level: 2,
      summary: 'Shared decision making is a collaborative process where clinicians provide medical expertise and patients contribute their values and preferences to reach healthcare decisions together.',
      explanation: `## Understanding Shared Decision Making

### What Is SDM?

Shared decision making (SDM) is a process where:
- Clinicians provide medical information and expertise
- Patients share their values, goals, and preferences
- Both parties discuss options openly
- Decisions are made collaboratively

### Why SDM Matters

**For Patients**
- Better understanding of health and options
- Decisions aligned with personal values
- Increased satisfaction with care
- Less decisional regret
- Greater confidence in choices

**For Clinicians**
- More appropriate treatment decisions
- Improved patient outcomes
- Stronger therapeutic relationships
- More efficient use of healthcare resources
- Greater professional satisfaction

**For Healthcare System**
- Reduced unnecessary testing and treatment
- Lower costs
- Better patient experiences
- Higher quality care

### The Three-Talk Model

**Talk 1: Team Talk**
- Build relationship
- Invite patient participation
- Identify who should be involved
- Set agenda for discussion

**Talk 2: Option Talk**
- Provide information about options
- Compare benefits and harms
- Explain probabilities clearly
- Use decision aids when available

**Talk 3: Decision Talk**
- Elicit preferences and values
- Help deliberate on options
- Move toward decision
- Check understanding

### When Is SDM Most Important?

**Preference-Sensitive Decisions**
- Multiple reasonable options exist
- Outcomes affect quality of life
- No clearly "best" medical choice
- Trade-offs between benefits and harms

**Examples:**
- Screening test decisions
- Surgery vs. medical management
- Different treatment options with similar outcomes
- Long-term medication choices
- End-of-life care decisions

### Roles in Shared Decision Making

**Clinician Responsibilities**
- Provide evidence-based information
- Explain options clearly
- Check understanding
- Invite patient input
- Respect patient preferences

**Patient Responsibilities**
- Ask questions
- Share concerns and fears
- Be honest about preferences
- Participate in decision
- Follow through on decisions

**Family Involvement**
- Support patient decision-making
- Help patient remember information
- Provide emotional support
- Respect patient autonomy

### Communication Barriers

**Common Challenges**
- Health literacy limitations
- Language barriers
- Cultural differences
- Time constraints
- Cognitive impairment
- Emotional distress`,
      keyTerms: [
        { term: 'preference-sensitive', definition: 'Decisions where the "right" choice depends on what the patient values' },
        { term: 'decisional regret', definition: 'Feeling sad or sorry later about a healthcare decision' },
        { term: 'health literacy', definition: 'Ability to understand health information and make good decisions' },
        { term: 'decision aids', definition: 'Tools that help patients understand options and make choices' },
      ],
      analogies: [
        'SDM is like buying a house with a realtor - the realtor knows about houses and neighborhoods, but you choose based on what you want and can afford.',
      ],
    },
    3: {
      level: 3,
      summary: 'Shared decision making requires systematic communication approaches, use of decision aids, assessment of patient understanding and preferences, and integration with evidence-based practice.',
      explanation: `## Clinical Practice: Shared Decision Making

### SDM Communication Frameworks

**SHARE Approach**
*S - Seek your patient's participation*
- Invite involvement in decision
- Assess desire for participation
- Adapt to patient preference

*H - Help patient explore options*
- Present balanced information
- Use decision aids
- Compare options clearly

*A - Assess patient values*
- Ask about priorities
- Explore concerns
- Understand life context

*R - Reach a decision*
- Deliberate together
- Address remaining questions
- Confirm decision

*E - Evaluate decision*
- Check understanding
- Make follow-up plan
- Document decision

**Risk Communication**

*Numeracy-Friendly Formats*
- Natural frequencies: "10 out of 100 people"
- Absolute risk: "Your risk goes from 5% to 10%"
- Visual displays: icon arrays, graphs
- Avoid relative risk alone: "Doubles your risk"

*Framing Effects*
- Present both positive and negative frames
- "90% survival" vs "10% mortality"
- Acknowledge uncertainty
- Use consistent time frames

### Decision Aids

**Types of Decision Aids**
- Printed brochures
- Videos
- Online interactive tools
- Risk calculators
- Comparison charts
- Personal stories (videos/written)

**Effective Decision Aid Components**
- Information about options
- Probabilities of outcomes
- Values clarification exercises
- Guidance in deliberation
- Opportunity to ask questions

**When to Use Decision Aids**
- Preference-sensitive decisions
- Multiple reasonable options
- Significant trade-offs
- High-stakes decisions
- Complex information

### Assessing Patient Understanding

**Teach-Back Method**
"Can you tell me in your own words what we discussed?"
- Checks patient comprehension
- Identifies misconceptions
- Reinforces key points
- Must be done respectfully

**Checking Understanding**
- "What questions do you have?"
- "How does this sound to you?"
- "What's your understanding of..."
- "What would you tell your family about this?"

### Values Elicitation

**Questions to Explore Values**
- "What is most important to you right now?"
- "What are you hoping for?"
- "What are you most worried about?"
- "What makes life worth living for you?"
- "What would you be willing to go through for this benefit?"

**Values Clarification**
- Identify what matters most
- Rank competing values
- Consider impact on daily life
- Explore what patient would accept or refuse

### Decision-Making Standards

**Informed Consent vs. SDM**

| Informed Consent | Shared Decision Making |
|-----------------|----------------------|
| Clinician presents plan | Options discussed |
| Patient agrees or refuses | Patient participates in choice |
| Legal requirement | Ethical ideal |
| Protects patient | Empowers patient |

**Documenting SDM**
- Options discussed
- Information provided
- Values/preferences expressed
- Patient understanding assessed
- Decision reached
- Follow-up planned

### Special Situations

**Surrogate Decision-Making**
- Apply substituted judgment
- Explore patient's known values
- Use best interests if values unknown
- Support emotionally difficult role

**Cognitive Impairment**
- Assess capacity for specific decision
- Simplify information
- Repeat as needed
- Involve family if patient desires
- Consider capacity evaluation

**Language Barriers**
- Use professional interpreters
- Avoid family members as interpreters
- Confirm understanding through interpreter
- Provide translated materials when available`,
      keyTerms: [
        { term: 'teach-back method', definition: 'Asking patient to explain in their own words to check understanding' },
        { term: 'natural frequencies', definition: 'Presenting risks as "X out of 100 people" rather than percentages' },
        { term: 'values clarification', definition: 'Process of helping patients identify what matters most to them' },
        { term: 'substituted judgment', definition: 'Making decisions based on what the patient would want' },
      ],
      clinicalNotes: 'Always invite patient participation - some want more, some less. Use teach-back to confirm understanding. Present options neutrally without bias. Check numeracy and adjust risk communication accordingly. Document both process and decision.',
    },
    4: {
      level: 4,
      summary: 'Advanced shared decision making involves managing complex preference-sensitive scenarios, navigating family dynamics, addressing health literacy disparities, implementing system-level SDM programs, and measuring decision quality.',
      explanation: `## Advanced SDM Practice

### Complex Decision Scenarios

**Multiple Stakeholders**
- Identify all relevant parties
- Facilitate family meetings
- Navigate conflicting preferences
- Maintain focus on patient values
- Use mediation techniques when needed

**Uncertain Evidence**
- Acknowledge limitations clearly
- Explain equipoise (genuine uncertainty)
- Discuss clinical trial options
- Make conditional plans
- Commit to reevaluation

**High-Stakes Decisions**
- Allow adequate time
- Multiple discussions if needed
- Provide decision support
- Involve trusted advisors
- Recognize emotional burden

**Patient Wants Clinician to Decide**
- Explore reasons for deferral
- Some patients prefer this approach
- Still incorporate patient values
- Make recommendation transparent
- Explain reasoning process

### Health Literacy Adaptation

**Universal Precautions Approach**
- Assume everyone may have limited literacy
- Use plain language
- Limit information (3-5 key points)
- Repeat important information
- Confirm understanding

**Teach Back Best Practices**
- Not a test - frame as checking clinician's teaching
- Use non-shaming approach: "I didn't explain that clearly"
- Repeat until patient can explain correctly
- Include family in teach-back

**Visual Communication**
- Anatomical models
- Growths/remission illustrations
- Risk icon arrays
- Decision aids with visuals
- Before/after comparisons

### System Implementation

**SDM Programs**
- Leadership commitment
- Standardized processes
- Decision aid library
- Staff training
- Quality metrics
- EMR integration

**Training Clinicians**
- Communication skills workshops
- Role-play with feedback
- Coaching and mentoring
- Observation of experts
- Video review

**EMR Integration**
- Decision support alerts
- Links to decision aids
- SDM documentation templates
- Patient educational materials
- Follow-up reminders

### Measuring Decision Quality

**Process Measures**
- SDM documented
- Patient felt involved
- Decision aid provided
- Risks discussed
- Values elicited

**Outcome Measures**
- Decisional conflict scale
- Decision regret
- Knowledge of options
- Satisfaction with decision
- Adherence to decision

**Quality Metrics**
- CollaboRATE (brief measure of SDM)
- SURE (certainty about decision)
- Decision Quality Instrument
- Patient-reported SDM

### Ethical Considerations

**Paternalism vs. SDM**
- Recognize when directive approach may be appropriate
- Emergent situations
- Patient clearly prefers clinician decides
- But default to SDM

**Overtreatment and Undertreatment**
- SDM reduces both
- Prevents unwanted care
- Prevents omission of wanted care
- Needs to go both directions

**Resource Considerations**
- Time-intensive
- Requires clinician training
- Decision aids cost money
- But may reduce overall costs

### Special Populations

**Serious Illness**
- SDM crucial for treatment decisions
- Goals of care discussions
- Advance care planning
- End-of-life decisions

**Pediatrics**
- Assent when possible
- Family-centered decisions
- Age-appropriate involvement
- Long-term outcome considerations

**Elderly**
- Multiple comorbidities
- Varying decision-making capacity
- Family involvement common
- Life expectancy considerations

**Underserved Populations**
- Address access disparities
- Cultural tailoring
- Language access
- Trust building`,
      keyTerms: [
        { term: 'equipoise', definition: 'Genuine uncertainty about which treatment is better' },
        { term: 'decisional conflict', definition: 'Uncertainty about which option to choose' },
        { term: 'CollaboRATE', definition: 'Brief measure of how well patients felt involved in decisions' },
        { term: 'universal precautions', definition: 'Approach assuming everyone may have limited health literacy' },
      ],
      clinicalNotes: 'Adapt to patient desire for involvement - from fully autonomous to clinician-directed. Always use teach-back, not just "do you understand?" Time constraints are real barrier - system-level support needed. Address both over- and undertreatment through SDM.',
    },
    5: {
      level: 5,
      summary: 'Expert-level shared decision making practice encompasses leadership in decision science, research on SDM effectiveness and implementation, health system design for SDM, policy advocacy, and advancing measurement of decision quality.',
      explanation: `## Expert Practice and Leadership

### Research and Evidence

**SDM Effectiveness**
- RCTs show improved decision quality
- Reduced decisional conflict
- Increased patient knowledge
- More conservative choices (less over-treatment)
- Higher patient satisfaction
- Variable effects on adherence
- Cost-effectiveness evidence growing

**Implementation Science**
- Effective strategies for SDM adoption
- Training program evaluation
- Decision aid development and testing
- System-level interventions
- Dissemination and spread

**Measurement Development**
- CollaboRATE validation
- Decision quality instruments
- SDM process measures
- Patient-reported outcomes
- Clinician assessments

### Decision Science

**Cognitive Psychology**
- How people process risk information
- Heuristics and biases in decision-making
- Framing effects
- Regret theory
- Prospect theory applications

**Behavioral Economics**
- Default options influence choices
- Presenting options affects decisions
- Loss aversion
- Status quo bias
- Nudge theory in healthcare

**Risk Perception**
- Numeracy and understanding
- Emotional vs. rational processing
- Affect heuristic
- Optimism bias
- Catastrophizing

### Health System Design

**Building SDM Infrastructure**
1. Leadership commitment and resources
2. Clinical champions identified
3. Decision aid library developed
4. Staff training implemented
5. EMR integration completed
6. Quality metrics established
7. Continuous improvement processes

**High-Reliability SDM**
- Standardized processes
- Decision support integrated
- Monitoring and feedback
- Continuous training
- Culture that values patient input

**Payment Reform**
- Value-based payment rewards SDM
- Bundled payments encourage appropriate decisions
- Time-based billing needed
- Quality measures including SDM

### Policy and Advocacy

**Standards and Requirements**
- Joint Commission standards
- CMS quality measures
- State regulations
- Professional society guidelines

**Informed Consent Reform**
- Move from legal document to communication process
- Shared decision making embedded in consent
- Documentation of discussion, not just signature
- Standardized across procedures

**Research Funding**
- PCORI (Patient-Centered Outcomes Research Institute)
- AHRQ (Agency for Healthcare Research and Quality)
- Foundation support
- Industry funding (with caveats)

### Training and Education

**Curriculum Development**
- Undergraduate medical education
- Graduate medical education
- Continuing medical education
- Interprofessional education
- Patient education

**Teaching Methods**
- Simulation with standardized patients
- Role-play with feedback
- Video review
- Coaching and mentoring
- Train-the-trainer models

**Assessment of Competence**
- Direct observation
- OSCE stations
- Patient feedback
- Self-assessment
- 360-degree feedback

### Future Directions

**Technology**
- Decision support integrated with EHR
- AI for personalized risk communication
- Virtual reality for outcomes visualization
- Telehealth for remote SDM
- Patient portals for decision aids

**Personalized Medicine**
- Genetic information for decisions
- Risk calculators using big data
- Tailored treatment options
- Pharmacogenomic considerations
- Predictive analytics

**Equity and Access**
- Disparities in SDM delivery
- Language-appropriate materials
- Cultural adaptations
- Underserved populations
- Rural healthcare

**Emerging Challenges**
- AI recommendations vs. SDM
- Direct-to-consumer testing decisions
- Genetic risk information
- Multiple treatment options
- Cost transparency in decisions

### Global Perspectives

**International Models**
- Variations in SDM adoption
- Cultural differences in decision-making
- Patient roles in different systems
- Legal requirements by country

**Cross-Cultural Adaptation**
- Individual vs. collective decision-making
- Truth-telling preferences
- Family roles in decisions
- Spiritual/religious influences

### Ethical Leadership

**Balancing Benefits and Harms**
- Not all decisions equal in importance
- Prioritize high-stakes decisions for SDM
- Time and resource allocation
- Avoid SDM for trivial choices

**Clinician Well-Being**
- SDM can be emotionally demanding
- Moral distress when values conflict
- Time pressure challenges
- Need for support systems

**Patient Autonomy Limits**
- When patient chooses against medical advice
- Capacity concerns
- Resource allocation questions
- Public health considerations`,
      keyTerms: [
        { term: 'PCORI', definition: 'Patient-Centered Outcomes Research Institute - funds comparative effectiveness research' },
        { term: 'heuristics', definition: 'Mental shortcuts that can lead to biases in decision-making' },
        { term: 'loss aversion', definition: 'People\'s tendency to prefer avoiding losses over acquiring gains' },
        { term: 'OSCE', definition: 'Objective Structured Clinical Examination - standardized test of clinical skills' },
      ],
      clinicalNotes: `Expert-level considerations:
1. Lead SDM program development at system level
2. Conduct research on SDM effectiveness and implementation
3. Train clinicians in communication and SDM skills
4. Develop and validate decision aids
5. Advocate for policies supporting SDM
6. Address disparities in SDM delivery
7. Advance measurement of decision quality
8. Contribute to decision science scholarship`,
    },
  },

  media: [
    {
      id: 'sdm-framework',
      type: 'diagram',
      filename: 'shared-decision-making-framework.svg',
      title: 'Shared Decision Making Framework',
      description: 'Visual guide to the shared decision making process',
    },
    {
      id: 'share-approach',
      type: 'diagram',
      filename: 'share-approach.svg',
      title: 'SHARE Approach',
      description: 'The SHARE framework for shared decision making',
    },
  ],

  citations: [
    {
      id: 'elwyn-sdm',
      type: 'article',
      title: 'Shared Decision Making: A Model for Clinical Practice',
      authors: ['Elwyn, G.', 'Frosch, D.', 'Thomson, R.'],
      source: 'Journal of General Internal Medicine',
      url: 'https://doi.org/10.1046/j.1525-1497.2002.10730.x',
    },
    {
      id: 'making-good-decisions',
      type: 'article',
      title: 'Helping Patients Make Decisions: An Approach',
      authors: ['Stacey, D.', 'Legare, F.', 'Bennett, C.'],
      source: 'BMJ',
      url: 'https://www.bmj.com/content/349/bmj.g5297',
    },
  ],

  crossReferences: [
    { targetId: 'concept-goals-of-care', targetType: 'concept', relationship: 'related', label: 'Goals of Care' },
    { targetId: 'concept-advance-directives', targetType: 'concept', relationship: 'related', label: 'Advance Directives' },
    { targetId: 'concept-care-planning-conferences', targetType: 'concept', relationship: 'related', label: 'Care Planning Conferences' },
  ],

  tags: {
    systems: ['palliative-care', 'communication', 'ethics'],
    topics: ['shared decision making', 'patient-centered care', 'communication', 'informed consent'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sharedDecisionMaking;
