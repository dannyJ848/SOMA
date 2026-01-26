/**
 * Asking for Help - Educational Content
 *
 * Guidance for caregivers on overcoming barriers to asking for help
 * and effectively communicating needs to others.
 */

import { EducationalContent } from "../../types";

export const askingForHelp: EducationalContent = {
  id: "caregiver-asking-for-help",
  type: "concept",
  name: "Asking for Help",
  alternateNames: ["Getting Help", "Accepting Help", "Building Support"],

  levels: {
    1: {
      level: 1,
      summary: "Asking for help means letting others know what you need so you do not have to do everything alone.",
      explanation: `Many caregivers try to do everything themselves. But asking for help is not a sign of weakness - it is smart.

**Why Asking for Help Is Hard**
- You think you should handle it alone
- You do not want to burden others
- You are not sure what to ask for
- You think no one else can do it right
- You feel embarrassed

**Why You Should Ask**
- You cannot do everything alone
- Asking keeps you healthier
- Others often want to help
- It is better for your loved one too
- It prevents burnout

**How to Ask for Help**
- Be specific about what you need
- Choose the right person for the task
- Ask directly, not hinting
- Accept offers when people say yes
- Say thank you

**What to Ask For**
- Sitting with your loved one
- Driving to appointments
- Picking up groceries
- Making a meal
- Doing household chores
- Just keeping you company

**When People Offer**
- Say yes! Even if not perfect timing
- Keep a list of things others could do
- Be specific: "Could you bring dinner Tuesday?"
- Do not apologize for needing help

**If It Is Hard to Ask**
- Start small
- Practice saying the words
- Remember: most people want to help
- Think of it as giving them a chance to help`,
      keyTerms: [
        { term: "support", definition: "Help from others that makes caregiving easier" },
        { term: "delegation", definition: "Giving tasks to others who can help" },
        { term: "asking", definition: "Telling others what you need from them" },
      ],
      analogies: [
        "Asking for help is like being part of a team - everyone does better when people share the work.",
        "Think of asking for help as making a deposit in a bank - you give others the chance to help you like you have helped them.",
      ],
      examples: [
        "Maria asked her neighbor to pick up groceries once a week. The neighbor was happy to help and even added it to her own shopping trip.",
        "Tom made a list of small tasks when people asked \"How can I help?\" so he always had a specific answer ready.",
      ],
    },
    2: {
      level: 2,
      summary: "Asking for help requires recognizing barriers, developing communication skills, building support networks, and accepting assistance effectively.",
      explanation: `**Barriers to Asking for Help**

| Barrier | Why It Happens | How to Overcome |
|---------|----------------|-----------------|
| Pride | Want to be self-sufficient | Remember help makes you stronger |
| Guilt | Feel like a burden | Others often want to help |
| Control | Want things done your way | Accept \"good enough\" |
| Distrust | Doubt others\" ability | Start with small tasks |
| Not knowing how | Never learned to ask | Practice specific requests |

**Building a Support Network**

**Who Can Help**
- Family members
- Friends
- Neighbors
- Faith community
- Coworkers
- Professional services

**Types of Support**
- Practical: tasks, errands, care coverage
- Emotional: listening, encouragement
- Informational: advice, resources
- Financial: help with costs

**How to Ask Effectively**

**Be Specific**
- NOT: \"Let me know if you can help\"
- YES: \"Could you drive Mom to her appointment Tuesday at 2?\"

**Choose the Right Person**
- Match task to person\"s skills
- Consider their schedule
- Think about relationship with care recipient

**Make It Easy to Say Yes**
- Give specific time and task
- Offer alternatives
- Be flexible
- Do not over-explain or apologize

**Accepting Help**

**When Offered**
- Say yes immediately when possible
- Have a list of needs ready
- Be gracious, not apologetic
- Give clear instructions

**After Receiving Help**
- Express genuine thanks
- Do not criticize how it was done
- Update them on outcomes
- Maintain the relationship

**When Help Is Declined**
- Do not take it personally
- Ask someone else
- Consider timing
- Try again later`,
      keyTerms: [
        { term: "support network", definition: "The group of people who can provide various types of help" },
        { term: "practical support", definition: "Tangible help with tasks, errands, and care coverage" },
        { term: "emotional support", definition: "Listening, encouragement, and understanding from others" },
        { term: "assertiveness", definition: "Clearly stating your needs in a direct, respectful way" },
      ],
      analogies: ["Building a support network is like creating a safety net - the more connections, the stronger the support when you need it."],
    },
    3: {
      level: 3,
      summary: "Help-seeking behavior involves understanding psychological barriers, applying social support theory, developing communication competencies, and systematically building and maintaining support networks.",
      explanation: `## Psychological Barriers

**Cognitive Barriers**
- Self-reliance beliefs
- Fear of judgment
- Perceived burden
- Perfectionism
- Catastrophic thinking

**Emotional Barriers**
- Guilt and shame
- Pride
- Fear of vulnerability
- Loss of control anxiety
- Grief about role change

**Intervention Approaches**
- Cognitive restructuring
- Normalization
- Skills training
- Gradual exposure

## Social Support Theory

**Types of Support (House)**
| Type | Description | Examples |
|------|-------------|----------|
| Instrumental | Tangible assistance | Tasks, money, respite |
| Emotional | Caring, empathy | Listening, validation |
| Informational | Advice, guidance | Resources, education |
| Appraisal | Feedback, affirmation | Encouragement, perspective |

**Social Support and Health**
- Buffering hypothesis: support protects against stress
- Main effect: support benefits regardless of stress
- Caregiver research: support associated with better outcomes

**Support Network Analysis**
- Network size
- Network density
- Relationship quality
- Support adequacy vs. availability

## Communication Skills

**Assertive Communication**
- Clear, direct requests
- \"I\" statements
- Specific asks
- Appropriate timing

**Request Framework**
1. State the need clearly
2. Explain why (briefly)
3. Make specific request
4. Express appreciation

**Managing Responses**
- If yes: confirm details, express thanks
- If no: accept gracefully, ask another
- If maybe: follow up, offer alternatives

## Network Development

**Mapping Support**
- List potential helpers
- Identify their strengths
- Note availability constraints
- Assess relationship quality

**Expanding Network**
- Support groups
- Faith communities
- Caregiver organizations
- Online communities
- Professional services

**Maintaining Support**
- Reciprocity when possible
- Communication and updates
- Gratitude expression
- Relationship nurturing

## Systematic Approach

**Help-Seeking Plan**
1. Assess needs comprehensively
2. Identify potential helpers
3. Match tasks to helpers
4. Develop communication approach
5. Track and evaluate
6. Adjust as needed`,
      keyTerms: [
        { term: "buffering hypothesis", definition: "Theory that social support protects against negative effects of stress" },
        { term: "instrumental support", definition: "Tangible help including tasks, transportation, respite, and financial assistance" },
        { term: "network density", definition: "How connected members of a support network are to each other" },
        { term: "assertive communication", definition: "Expressing needs clearly and directly while respecting others" },
      ],
      clinicalNotes: "Assess caregiver support network and help-seeking barriers. Normalize asking for help. Provide communication skills coaching. Connect with support resources. Follow up on support utilization.",
    },
    4: {
      level: 4,
      summary: "Evidence-based help-seeking interventions integrate social support research, communication training, technology platforms, and network development strategies while addressing cultural and individual barriers.",
      explanation: `## Social Support Research

**Evidence Base**
- Support associated with lower burden
- Emotional support particularly important
- Perceived vs. received support distinction
- Quality matters more than quantity

**Mechanisms**
- Stress buffering
- Coping enhancement
- Self-efficacy improvement
- Isolation reduction

**Moderating Factors**
- Caregiver characteristics
- Cultural context
- Relationship quality
- Type of support needed

## Intervention Evidence

**Skills Training**
- Communication skills improvement
- Assertiveness training
- Problem-solving for support
- Role-playing practice

**Support Network Interventions**
- Network mapping exercises
- Relationship strengthening
- Network expansion strategies
- Maintenance skills

**Technology-Enabled**
- Online support networks
- Care coordination apps
- Volunteer matching platforms
- Communication tools

## Cultural Considerations

**Cultural Variations**
- Individualism vs. collectivism
- Family obligation norms
- Help-seeking attitudes
- Gender role expectations

**Cultural Adaptation**
- Assess cultural context
- Respect cultural values
- Adapt communication approach
- Involve cultural mediators

**Barriers by Culture**
- Stigma in some cultures
- Family-only expectations
- Language barriers
- Trust issues

## Implementation

**Healthcare Integration**
- Screening for support needs
- Referral to resources
- Skills coaching
- Follow-up assessment

**Community Programs**
- Support group participation
- Volunteer programs
- Faith community involvement
- Peer support

**Quality Metrics**
- Support network size/quality
- Help-seeking behavior
- Burden reduction
- Quality of life

## Special Populations

**Male Caregivers**
- Different help-seeking patterns
- Instrumental focus
- Peer support preferences
- Tailored approaches

**Long-Distance Caregivers**
- Technology reliance
- Local support coordination
- Professional care management
- Communication strategies

**Working Caregivers**
- Workplace support
- Time constraints
- Employer resources
- Balancing demands`,
      keyTerms: [
        { term: "perceived support", definition: "Belief that support is available if needed, distinct from actually received support" },
        { term: "network intervention", definition: "Interventions aimed at building, strengthening, or activating social support networks" },
        { term: "care coordination platform", definition: "Technology for organizing helpers, scheduling, and communication" },
        { term: "cultural adaptation", definition: "Modifying interventions to fit cultural values and communication styles" },
        { term: "volunteer matching", definition: "Programs connecting caregivers with community volunteers for specific help" },
      ],
      clinicalNotes: "Use validated instruments to assess support. Implement skills training for help-seeking. Consider cultural factors. Leverage technology for support coordination. Track support-related outcomes.",
    },
    5: {
      level: 5,
      summary: "Help-seeking research examines social network theory, intervention science, technology innovation, and policy frameworks while addressing structural barriers and equity in access to support.",
      explanation: `## Social Network Theory

**Network Analysis**
- Structural characteristics
- Tie strength and type
- Network effects on health
- Intervention targets

**Mobilization Research**
- Support activation processes
- Barriers to mobilization
- Effective triggers
- Sustainability factors

**Digital Networks**
- Online support communities
- Social media effects
- Virtual network building
- Hybrid approaches

## Intervention Science

**Comparative Effectiveness**
- Skills training approaches
- Network interventions
- Technology platforms
- Combined approaches

**Implementation Research**
- Adoption factors
- Sustainability challenges
- Scale-up considerations
- Integration strategies

**Outcome Research**
- Support-related outcomes
- Health effects
- Caregiving sustainability
- Cost-effectiveness

## Technology Evolution

**Platform Development**
- Care coordination tools
- Volunteer networks
- Communication apps
- AI-assisted matching

**Effectiveness Research**
- Technology adoption
- User engagement
- Outcome effects
- Digital divide concerns

**Innovation**
- AI personalization
- Predictive support matching
- Integrated platforms
- Smart home integration

## Policy Framework

**Volunteer Support Policy**
- Volunteer recruitment programs
- Liability considerations
- Training standards
- Recognition systems

**Community Infrastructure**
- Faith-based support
- Civic engagement
- Neighborhood networks
- Intergenerational programs

**Advocacy**
- Support infrastructure funding
- Volunteer program support
- Technology access
- Caregiver recognition

## Health Equity

**Disparities**
- Network size by SES
- Access to technology
- Cultural barriers
- Geographic factors

**Structural Barriers**
- Transportation
- Work schedules
- Family structure changes
- Community resources

**Equity Interventions**
- Community health workers
- Culturally matched support
- Technology access programs
- Structural interventions

## Future Directions

**Research Priorities**
- Network intervention optimization
- Technology effectiveness
- Cultural adaptation
- Equity research

**Innovation**
- AI support matching
- Integrated platforms
- Predictive support
- Community building

**Systems Change**
- Infrastructure development
- Policy advocacy
- Healthcare integration
- Community investment`,
      keyTerms: [
        { term: "network mobilization", definition: "Process of activating support network members to provide assistance" },
        { term: "digital divide", definition: "Gap in technology access and literacy affecting support network options" },
        { term: "structural barriers", definition: "Systemic factors (transportation, work, geography) limiting help-seeking" },
        { term: "AI support matching", definition: "Using artificial intelligence to connect caregivers with appropriate helpers" },
        { term: "support infrastructure", definition: "Community resources, programs, and systems enabling help provision" },
      ],
      clinicalNotes: `Systems implementation:
1. Assess support needs systematically
2. Develop community support infrastructure
3. Address technology access equity
4. Implement evidence-based interventions
5. Track support outcomes
6. Advocate for policy supports`,
    },
  },

  media: [
    { id: "asking-help-guide", type: "diagram", filename: "asking-for-help-strategies.svg", title: "Asking for Help Strategies", description: "Visual guide to effective help-seeking" },
  ],

  citations: [
    { id: "fca-help", type: "website", title: "Asking for Help", source: "Family Caregiver Alliance", url: "https://www.caregiver.org/" },
    { id: "social-support-research", type: "article", title: "Social Support and Caregiving", source: "Gerontologist" },
  ],

  crossReferences: [
    { targetId: "caregiver-setting-boundaries", targetType: "concept", relationship: "related", label: "Setting Boundaries" },
    { targetId: "caregiver-support-groups", targetType: "concept", relationship: "related", label: "Support Groups" },
  ],

  tags: { systems: ["caregiver-support"], topics: ["asking for help", "support network", "communication", "social support"], clinicalRelevance: "high" },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default askingForHelp;
