import { EducationalContent } from '../../types';

export const speakingUpContent: EducationalContent = {
  id: 'speaking-up',
  type: 'concept',
  name: 'Speaking Up for Patient Safety',
  alternateNames: ['Patient Voice', 'Advocating for Yourself', 'Questioning Care'],
  levels: {
    1: {
      level: 1,
      summary: 'Speaking up means asking questions and raising concerns about your healthcare. It helps prevent mistakes and ensures you get safe care.',
      explanation: `## Using Your Voice for Safety

Speaking up means asking questions and raising concerns about your healthcare. It helps prevent mistakes and ensures you get safe care.

### Why Speaking Up Matters

- Catches potential mistakes
- Helps staff remember details
- Makes sure you understand
- Builds better teamwork
- Keeps you safer

### When to Speak Up

- Before a procedure
- When something feels wrong
- Before taking medicine
- When staff wash hands
- When you have questions

### What to Say

**Ask Questions:**
- "What is this medicine for?"
- "Who are you and what is your role?"
- "Can you explain what will happen?"
- "Is there a risk?"

**Raise Concerns:**
- "This does not seem right."
- "I am worried about..."
- "Can we double-check?"
- "I need more information."

### How to Speak Up

- Be polite but firm
- State your concern clearly
- Ask for explanations
- Repeat if needed
- Escalate if unresolved

### Staff Should Listen

Good healthcare teams:
- Welcome questions
- Do not get defensive
- Take concerns seriously
- Thank you for speaking up`,
      keyTerms: [
        { term: 'Speak up', definition: 'Raising questions or concerns' },
        { term: 'Escalate', definition: 'Taking concern to higher level' },
        { term: 'Advocate', definition: 'Speaking for yourself or others' },
        { term: 'Two-challenge rule', definition: 'Persistent questioning if concerned' }
      ],
      analogies: [
        'Speaking up in healthcare is like a co-pilot warning the pilot about danger'
      ],
      examples: [
        'A patient asks staff to wash hands before examining them',
        'A family member questions why a medicine looks different than usual'
      ]
    },
    2: {
      level: 2,
      summary: 'Speaking up is a critical safety behavior encouraged in healthcare settings. Patients, families, and staff all play roles in questioning potentially unsafe situations. Effective communication techniques help overcome hierarchy and authority gradients.',
      explanation: `## Communication for Safety

Speaking up is a critical safety behavior encouraged in healthcare settings. Patients, families, and staff all play roles in questioning potentially unsafe situations. Effective communication techniques help overcome hierarchy and authority gradients.

### Why People Stay Silent

**Barriers for Patients:**
- Fear of offending staff
- Feeling unqualified to question
- Trust in authority
- Vulnerability during illness
- Cultural factors

**Barriers for Staff:**
- Hierarchy and power
- Fear of retaliation
- Concern about being wrong
- Time pressure
- Normalization of deviance

### Speaking Up Frameworks

**CUS Words:**
- **C**oncerned - "I am concerned..."
- **U**ncomfortable - "I am uncomfortable with..."
- **S**afety - "This is a safety issue..."

**DESC Script:**
- **D**escribe - State what you see
- **E**xpress - Share your concern
- **S**uggest - Propose alternatives
- **C**onsequences - Explain potential outcomes

**Two-Challenge Rule:**
- First challenge: Raise concern
- Second challenge: If ignored, escalate
- Take stronger action if needed

### Patients and Families Speaking Up

**Encouraged Behaviors:**
- Ask about hand hygiene
- Question medications
- Confirm identity checks
- Request explanations
- Share relevant history

**Rapid Response:**
- Call for help when concerned
- Available in many hospitals
- Triggers immediate evaluation
- Not just for staff to use

**Patient Advocacy:**
- Designated support person
- Helps ask questions
- Takes notes
- Monitors care

### Staff Speaking Up

**Team Training:**
- Crew resource management
- Simulation scenarios
- Psychological safety
- Just culture

**Hierarchy Flattening:**
- First-name basis
- Briefings and debriefings
- Shared mental models
- Closed-loop communication

**Escalation Policies:**
- Chain of command
- Non-punitive response
- Anonymous reporting options
- Rapid response activation`,
      keyTerms: [
        { term: 'Authority gradient', definition: 'Power difference between team members' },
        { term: 'Psychological safety', definition: 'Feeling safe to speak up' },
        { term: 'Just culture', definition: 'Balancing accountability with learning' },
        { term: 'Rapid response', definition: 'Emergency team for deteriorating patients' }
      ],
      analogies: [
        'Healthcare teamwork is like an orchestra - everyone needs to speak up if something is off-key'
      ],
      examples: [
        'A nurse uses the CUS framework to question a high medication dose',
        'A patient asks for a second opinion before surgery'
      ]
    },
    3: {
      level: 3,
      summary: 'Speaking up is a learnable skill with proven impact on safety outcomes. Structured communication tools, simulation training, and organizational culture that supports psychological safety are essential components of speaking up programs.',
      explanation: `## Developing Speaking Up Skills

Speaking up is a learnable skill with proven impact on safety outcomes. Structured communication tools, simulation training, and organizational culture that supports psychological safety are essential components of speaking up programs.

### Evidence for Speaking Up

**Research Findings:**
- Communication failures cause 70% of sentinel events
- Speaking up reduces errors
- Hierarchy inhibits communication
- Training improves speaking up rates

**Aviation Safety Model:**
- Crew resource management origins
- Standardized communication
- Checklist use
- Debriefing culture

### Training Programs

**TeamSTEPPS:**
- Communication strategies
- Team structure
- Leadership tools
- Situation monitoring
- Mutual support

**CRM (Crew Resource Management):**
- Communication skills
- Decision-making
- Teamwork
- Situation awareness
- Stress management

**Simulation Training:**
- Safe practice environment
- Speaking up scenarios
- Debriefing and feedback
- Skill reinforcement

### Organizational Culture

**Psychological Safety:**
- Edmondson research
- Learning from mistakes
- No-blame reporting
- Leadership modeling

**Just Culture:**
- Human error
- At-risk behavior
- Reckless behavior
- Appropriate responses

**Measurement:**
- Safety culture surveys
- Speaking up rates
- Event reporting trends
- Staff feedback

### Communication Techniques

**SBAR:**
- **S**ituation
- **B**ackground
- **A**ssessment
- **R**ecommendation

**Closed-Loop Communication:**
- Sender states message
- Receiver confirms
- Sender verifies understanding

**Call-Out:**
- Important information
- To entire team
- Immediate attention

**Check-Back:**
- Order or request
- Receiver repeats back
- Sender confirms

### Patient and Family Engagement

**Patient Activation:**
- Knowledge and skills
- Confidence to act
- Self-management
- Question-asking

**Family Presence:**
- Advocacy role
- Information source
- Emotional support
- Safety net

**Patient Advisory Councils:**
- Input on policies
- Safety initiative design
- Culture influence
- System improvement`,
      keyTerms: [
        { term: 'Sentinel event', definition: 'Unexpected occurrence involving death or serious harm' },
        { term: 'SBAR', definition: 'Structured communication technique' },
        { term: 'Closed-loop communication', definition: 'Confirming message received and understood' },
        { term: 'Patient activation', definition: 'Patient knowledge and confidence to manage health' }
      ]
    },
    4: {
      level: 4,
      summary: 'Speaking up requires institutional support through policies, training, and leadership modeling. High-reliability organizations create environments where speaking up is expected and valued, with mechanisms to ensure concerns are addressed without fear of retaliation.',
      explanation: `## Institutionalizing Speaking Up

Speaking up requires institutional support through policies, training, and leadership modeling. High-reliability organizations create environments where speaking up is expected and valued, with mechanisms to ensure concerns are addressed without fear of retaliation.

### Leadership Role

**Modeling Behavior:**
- Leaders speak up
- Admit mistakes
- Welcome challenges
- Respond constructively

**Visible Commitment:**
- Safety rounds
- Open door policies
- Town halls
- Recognition programs

**Resource Allocation:**
- Training budgets
- Time for communication
- Staffing levels
- Technology support

### Policy Framework

**Non-Retaliation:**
- Protected reporting
- Anonymous options
- Anti-retaliation enforcement
- Whistleblower protections

**Chain of Command:**
- Clear escalation paths
- Rapid response activation
- Administrator on call
- Board access

**Expectations:**
- Speaking up as job requirement
- Performance evaluation inclusion
- Competency validation
- Accountability

### High-Reliability Organizations

**Characteristics:**
- Preoccupation with failure
- Reluctance to simplify
- Sensitivity to operations
- Commitment to resilience
- Deference to expertise

**Safety Culture:**
- Reporting culture
- Just culture
- Learning culture
- Flexible culture
- Informed culture

### Measuring Speaking Up

**Quantitative Measures:**
- Near-miss reporting rates
- Safety report trends
- Rapid response activation
- Morbidity and mortality attendance

**Qualitative Assessment:**
- Focus groups
- Interviews
- Observation
- Case studies

**Safety Culture Surveys:**
- AHRQ Survey
- Safety Attitudes Questionnaire
- Custom instruments
- Benchmarking

### Case Studies

**Successful Interventions:**
- Structured communication training
- Executive walkrounds
- Patient advocacy programs
- Anonymous reporting systems

**Lessons Learned:**
- Time to build trust
- Consistency matters
- Leadership critical
- Cannot be forced

### Challenges

**Sustaining Behavior:**
- Initial enthusiasm fades
- Ongoing reinforcement needed
- New staff training
- Culture maintenance

**Hierarchy in Medicine:**
- Physician-centered culture
- Gender dynamics
- Specialty silos
- Power differentials

**Time Pressures:**
- Production pressure
- Communication shortcuts
- Rushed encounters
- Burnout impact`,
      keyTerms: [
        { term: 'High-reliability organization', definition: 'Organization avoiding failures in complex settings' },
        { term: 'Walkrounds', definition: 'Leadership rounds to engage staff' },
        { term: 'Near-miss', definition: 'Error caught before harm' },
        { term: 'Whistleblower', definition: 'Person who reports wrongdoing' }
      ],
      clinicalNotes: 'Speaking up training improves safety outcomes but requires reinforcement. Executive walkrounds increase reporting when leaders respond constructively. Anonymous reporting fills gap when psychological safety insufficient. Medical hierarchy remains barrier - intentional flattening needed. Patient rapid response activation gaining acceptance.'
    },
    5: {
      level: 5,
      summary: 'Speaking up in healthcare intersects with professionalism, ethics, and organizational behavior. Future directions include patient-facing reporting apps, AI-assisted safety monitoring, and global approaches to safety culture that account for diverse healthcare contexts and cultural norms.',
      explanation: `## Advanced Topics in Speaking Up

Speaking up in healthcare intersects with professionalism, ethics, and organizational behavior. Future directions include patient-facing reporting apps, AI-assisted safety monitoring, and global approaches to safety culture that account for diverse healthcare contexts and cultural norms.

### Professional Ethics

**Duty to Report:**
- Professional obligations
- License requirements
- Moral imperative
- Patient protection

**Ethical Tensions:**
- Loyalty vs safety
- Collegiality vs accountability
- Self-interest vs patient interest
- Cultural sensitivity

**Professionalism Education:**
- Speaking up curriculum
- Role modeling
- Mentorship
- Assessment

### Behavioral Science

**Bystander Effect:**
- Diffusion of responsibility
- Pluralistic ignorance
- Inhibition in groups
- Overcoming barriers

**Nudge Theory:**
- Choice architecture
- Default options
- Social norms
- Feedback

**Cognitive Biases:**
- Authority bias
- Normalization of deviance
- Sunk cost fallacy
- Debiasing strategies

### Technology Solutions

**Safety Reporting Apps:**
- Patient-facing tools
- Anonymous options
- Real-time alerts
- Trending data

**AI Monitoring:**
- Pattern recognition
- Predictive analytics
- Automated alerts
- False positive challenges

**Wearables:**
- Patient monitoring
- Deterioration detection
- Patient activation
- Family notification

### Global Perspectives

**Cultural Differences:**
- Hierarchy varies by culture
- Saving face considerations
- Communication styles
- Gender roles

**Low-Resource Settings:**
- Resource constraints
- Different error types
- Training needs
- Adapted approaches

**WHO Patient Safety:**
- Global priorities
- Curriculum development
- Resource sharing
- Capacity building

### Research Frontiers

**Communication Science:**
- Discourse analysis
- Interaction studies
- Conversation analysis
- Linguistic patterns

**Organizational Behavior:**
- Team dynamics
- Leadership studies
- Culture assessment
- Change management

**Implementation Science:**
- Scaling up
- Sustainability
- Context adaptation
- Economic evaluation

### Policy and Advocacy

**Regulatory Requirements:**
- Patient safety standards
- Culture of safety
- Reporting requirements
- Transparency

**Accreditation:**
- Joint Commission standards
- DNV requirements
- CMS conditions
- Professional standards

**Patient Advocacy:**
- Patient rights
- Informed consent
- Shared decision-making
- Access to information`,
      keyTerms: [
        { term: 'Normalization of deviance', definition: 'Accepting risky behavior as normal' },
        { term: 'Bystander effect', definition: 'Reduced likelihood to act when others present' },
        { term: 'Nudge theory', definition: 'Behavioral economics applied to choice design' },
        { term: 'Debiasing', definition: 'Strategies to reduce cognitive bias' }
      ],
      clinicalNotes: 'Speaking up behavior correlates with safety outcomes but causation complex. Technology solutions supplement but do not replace human communication. Cultural adaptation essential for global implementation. Authority gradient reduction requires sustained leadership commitment. Patient-reported safety concerns identify issues missed by staff reporting.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'communication'],
    keywords: ['speaking up', 'patient safety', 'communication', 'advocacy', 'patient voice']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
