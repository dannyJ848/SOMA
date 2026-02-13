/**
 * Crisis Resources - Patient Education Content
 */

import { EducationalContent } from '../../types';

export const crisisResourcesContent: EducationalContent = {
  id: 'mental-health-crisis-resources',
  type: 'topic',
  name: 'Crisis Resources',
  alternateNames: ['Crisis Hotlines', 'Emergency Mental Health', 'Crisis Lines'],

  levels: {
    1: {
      level: 1,
      summary: 'If you or someone you know is in crisis, help is available 24/7. Call 988, text HOME to 741741, or go to your nearest emergency room.',
      explanation: `**Crisis Help Is Available 24/7**

**988 Suicide & Crisis Lifeline**
- Call or text: 988
- Available 24/7
- Free and confidential
- For anyone in emotional distress

**Crisis Text Line**
- Text HOME to 741741
- Available 24/7
- Free and confidential
- Text-based support

**Veterans Crisis Line**
- Call 988, then press 1
- Or text 838255
- For veterans and their families

**SAMHSA National Helpline**
- 1-800-662-4357
- Treatment referrals
- Information about mental health and substance use

**The Trevor Project** (LGBTQ+ Youth)
- 1-866-488-7386
- Or text START to 678-678

**When to Call 911:**
- Immediate danger to self or others
- Someone is hurt
- Medical emergency

**When to Go to the Emergency Room:**
- Thinking about suicide with a plan
- Unable to stay safe at home
- Severe symptoms needing immediate care

**What to Expect When You Call:**
- A trained counselor will answer
- They will listen without judgment
- They will help you feel safer
- They can connect you with local resources

**Remember:**
- It is okay to ask for help
- Crisis counselors are there for you
- These feelings can get better
- You are not alone`,
      keyTerms: [
        { term: '988', definition: 'The national Suicide and Crisis Lifeline number' },
        { term: 'crisis', definition: 'A time of intense difficulty when someone needs immediate support' },
        { term: 'crisis counselor', definition: 'A trained person who helps people during emotional emergencies' },
      ],
      analogies: [],
      examples: [],
    },
    2: {
      level: 2,
      summary: 'Crisis resources include hotlines, text lines, mobile crisis teams, crisis stabilization units, and emergency departments. The 988 system connects to local crisis centers. Knowing when to use each resource helps get the right level of care.',
      explanation: `**Crisis Resource Overview:**

**988 Suicide & Crisis Lifeline:**
- National network of local crisis centers
- Call, text, or chat
- Specialized lines: Veterans (press 1), Spanish (press 2)
- Can dispatch local mobile crisis if needed

**Crisis Text Line:**
- Text HOME to 741741
- Trained crisis counselors
- Good for those who prefer texting
- Can share location for local resources

**Mobile Crisis Teams:**
- Many communities have mobile response
- Can come to your location
- Less restrictive than ED
- Assessment and brief intervention
- Access varies by location

**Crisis Stabilization Units:**
- Short-term (hours to days)
- Alternative to hospitalization
- Observation and stabilization
- Available in some areas

**Emergency Departments:**
- Available everywhere
- Medical and psychiatric evaluation
- Can hold for safety if needed
- May have long waits

**Peer Support Lines:**
- Staffed by people with lived experience
- Warm Line: For support before crisis escalates
- Many local options

**When to Use Each:**

*Call/Text Crisis Line When:*
- Feeling overwhelmed
- Having thoughts of suicide
- Need someone to talk to
- Not in immediate danger

*Mobile Crisis When:*
- Need in-person assessment
- Prefer staying out of ED
- Available in your area

*Emergency Department When:*
- Immediate safety concern
- Medical needs
- Needs that require observation

**Helping Someone Else:**
- Stay with them
- Listen without judgment
- Help them connect to resources
- Call 988 together if needed
- Call 911 if immediate danger`,
      keyTerms: [
        { term: 'mobile crisis', definition: 'Mental health professionals who respond to crises in the community' },
        { term: 'crisis stabilization', definition: 'Short-term facility for psychiatric stabilization' },
        { term: 'warm line', definition: 'Support line for before crisis point, staffed by peers' },
        { term: 'peer support', definition: 'Support from someone with lived experience of mental health challenges' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'The crisis continuum includes prevention, early intervention, crisis response, stabilization, and follow-up. 988 implementation created national crisis infrastructure. Mobile crisis and crisis stabilization offer alternatives to ED. Coordination with ongoing treatment is essential.',
      explanation: `**Crisis System Overview:**

**988 Implementation:**
- Launched July 2022
- National three-digit number
- Local call centers
- Linked to crisis continuum
- Subnetworks: Veterans, Spanish, LGBTQ+

**Crisis Continuum:**

1. Prevention and early intervention
2. Crisis line support
3. Mobile crisis response
4. Crisis stabilization
5. Emergency department
6. Inpatient if needed
7. Transition and follow-up

**Mobile Crisis Teams:**

*Composition:*
- Mental health professional
- Often include peer specialist
- Some include medical personnel

*Functions:*
- Community-based assessment
- De-escalation
- Brief intervention
- Connection to services
- Diversion from ED when appropriate

*Benefits:*
- Less restrictive
- Community-based
- Faster response in some cases
- Better engagement for some populations

**Crisis Stabilization:**

*23-Hour Observation:*
- Brief observation
- Assessment and stabilization
- Discharge with plan

*Crisis Stabilization Units (CSU):*
- Up to 72 hours typically
- More intensive than observation
- Less restrictive than inpatient
- Voluntary generally

*Crisis Residential:*
- Days to weeks
- Live-in crisis support
- Alternative to hospitalization
- Not available everywhere

**Emergency Department Role:**

*Appropriate When:*
- Medical concerns
- Safety cannot be ensured
- Involuntary hold needed
- No other option available

*Challenges:*
- Long waits
- Not designed for psychiatric crisis
- Boarding when inpatient beds unavailable
- Can be traumatic for some patients

**Special Populations:**

*Youth:*
- Different resources may be needed
- Family involvement
- School coordination
- Trevor Project (LGBTQ+ youth)

*Veterans:*
- Veterans Crisis Line (988 press 1)
- VA crisis services
- Veteran-specific understanding

*Older Adults:*
- May be less likely to call
- Medical issues intertwined
- Isolation concerns

**Documentation and Follow-Up:**
- Safety planning during crisis contact
- Warm handoff to ongoing care
- Follow-up contact post-crisis
- Caring contacts reduce suicide`,
      keyTerms: [
        { term: 'crisis continuum', definition: 'Range of services from prevention through follow-up' },
        { term: '23-hour observation', definition: 'Brief crisis stabilization, less than 24 hours' },
        { term: 'warm handoff', definition: 'Direct connection between crisis service and ongoing care' },
        { term: 'boarding', definition: 'When patients wait in ED for inpatient bed availability' },
      ],
      clinicalNotes: 'Mobile crisis can divert from ED when appropriate. Caring contacts post-ED reduce suicide. Safety planning should happen at every crisis contact. Know your local crisis resources. Warm handoff to ongoing care is essential.',
    },
    4: {
      level: 4,
      summary: 'Crisis services function within a broader crisis care continuum including 988, mobile crisis, stabilization, and ED. Evidence supports alternatives to ED, caring contacts, and follow-up. Implementation requires workforce development, funding, and coordination. Equity issues affect access.',
      explanation: `**Crisis System Components:**

**988 System:**

*Infrastructure:*
- Network of local crisis centers
- National backup center
- Geolocation for routing
- Integration with local services

*Services:*
- Call, text, chat
- Risk assessment
- De-escalation
- Safety planning
- Dispatch to local services
- Follow-up

*Specialized Services:*
- Veterans line
- Spanish language
- Deaf/hard of hearing
- Tribal communities (developing)

**Mobile Crisis Evidence:**

*Research Findings:*
- Can safely divert from ED
- Cost-effective
- Better patient satisfaction
- Comparable outcomes
- Reduces involuntary commitment

*Best Practices:*
- 24/7 availability
- Response in under 1 hour
- Team includes peer support
- Coordination with 988
- Follow-up services

**Crisis Stabilization Evidence:**

*Short-Term Stabilization:*
- Effective alternative to hospitalization for many
- Lower cost
- Less restrictive
- Better patient experience

*Key Elements:*
- Homelike environment
- Peer support
- Rapid access
- Connection to ongoing care

**Post-Crisis Interventions:**

*Caring Contacts:*
- Brief, non-demanding follow-up
- Reduces suicide deaths (RCT evidence)
- Cost-effective
- Can be automated

*Follow-Up:*
- Within 24-72 hours post-ED/inpatient
- Critical high-risk period
- Connection to treatment
- Safety planning review

**System Coordination:**

*Crisis Now Model:*
- Hub and spoke design
- Regional call center
- Mobile crisis teams
- Crisis stabilization
- Essential community services

*Data and Coordination:*
- Real-time bed availability
- Shared information (consent)
- Outcome tracking
- Quality improvement

**Implementation Challenges:**

*Workforce:*
- Crisis counselor training
- Peer specialist integration
- Burnout prevention
- Competitive wages

*Funding:*
- Medicaid coverage varies
- 988 funding streams
- Sustainability
- Infrastructure costs

*Equity:*
- Rural access
- Language access
- Cultural responsiveness
- Trust issues with marginalized communities`,
      keyTerms: [
        { term: 'Crisis Now model', definition: 'SAMHSA-endorsed crisis system design' },
        { term: 'crisis receiving center', definition: 'Facility for immediate crisis stabilization' },
        { term: 'diversion', definition: 'Safely directing someone away from ED to alternative' },
        { term: 'geolocation', definition: 'Using location data to route to local services' },
      ],
      clinicalNotes: 'Mobile crisis can safely divert many from ED. Caring contacts are simple and effective. Post-discharge follow-up critical. Crisis system requires coordination across components. Equity issues require intentional attention.',
    },
    5: {
      level: 5,
      summary: 'Contemporary crisis services integrate technology, peer support, and evidence-based interventions within funded infrastructure. Research focuses on optimizing 988 response, mobile crisis effectiveness, and reducing disparities. Implementation science addresses scaling evidence-based crisis care.',
      explanation: `**988 System Development:**

*Implementation Progress:*
- Launched July 2022
- Millions of calls/texts annually
- Variable local capacity
- Federal funding increasing
- State funding variable

*Quality Improvement:*
- Call metrics (answer rate, abandonment)
- Outcome tracking
- Caller satisfaction
- Follow-up rates

*Technology Integration:*
- AI-assisted triage (research)
- Data analytics
- Interoperability
- Privacy protection

**Mobile Crisis Research:**

*Effectiveness:*
- Randomized trials ongoing
- Diversion rates
- Outcomes vs ED
- Cost-effectiveness

*Implementation:*
- 24/7 staffing challenges
- Training standards
- Peer integration
- Law enforcement collaboration (CIT)

**Crisis Stabilization Innovation:**

*Living Room Model:*
- Peer-run crisis respite
- Non-clinical environment
- Voluntary
- Evidence emerging

*Medical Clearance:*
- Streamlined protocols
- Avoiding unnecessary ED
- Telemedicine options

**Technology:**

*Digital Crisis Support:*
- AI chatbots (research stage)
- App-based safety planning
- Virtual crisis care
- Privacy and safety considerations

*Predictive Analytics:*
- EHR-based risk identification
- Proactive outreach
- Ethical concerns
- Implementation challenges

**Workforce:**

*Crisis Counselor Pipeline:*
- Training programs
- Certification standards
- Career pathways
- Retention

*Peer Specialists:*
- Expanding roles in crisis
- Training and supervision
- Lived experience value
- Workforce development

**Equity:**

*Access Disparities:*
- Rural areas underserved
- Language barriers
- Distrust in marginalized communities
- LGBTQ+ specific needs

*Culturally Responsive:*
- Training requirements
- Community partnerships
- Representation in workforce
- Tribal-specific services

**Research Priorities:**

*Outcomes:*
- Suicide prevention effectiveness
- Optimal service mix
- Cost-effectiveness
- Quality metrics

*Implementation:*
- Scaling evidence-based practices
- Sustainable funding models
- Workforce development
- Technology integration

**Policy:**

*Funding:*
- Federal 988 appropriations
- Medicaid coverage
- State funding formulas
- Parity requirements

*Standards:*
- Accreditation
- Training requirements
- Performance metrics
- Accountability`,
      keyTerms: [
        { term: 'CIT', definition: 'Crisis Intervention Team - law enforcement mental health training' },
        { term: 'Living Room model', definition: 'Peer-run homelike crisis respite' },
        { term: 'call abandonment', definition: 'When callers hang up before being connected' },
        { term: 'medical clearance', definition: 'Process of ruling out medical causes of psychiatric symptoms' },
      ],
      clinicalNotes: `Current best practices:
- 988 as entry point to crisis continuum
- Mobile crisis reduces ED utilization
- Caring contacts are evidence-based
- Peer support valuable in crisis services

Emerging developments:
- 988 infrastructure building
- Mobile crisis expansion
- Technology integration
- Outcome tracking

Key challenges:
- Workforce capacity
- Sustainable funding
- Rural and underserved access
- Coordination across systems`,
    },
  },

  media: [],

  citations: [
    {
      id: 'samhsa-crisis-guidelines',
      type: 'article',
      title: 'National Guidelines for Behavioral Health Crisis Care',
      authors: ['SAMHSA'],
      source: 'SAMHSA',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-suicidal-ideation', targetType: 'topic', relationship: 'related', label: 'Suicidal Ideation' },
    { targetId: 'mental-health-safety-planning', targetType: 'topic', relationship: 'related', label: 'Safety Planning' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'crisis'],
    keywords: ['crisis', '988', 'suicide prevention', 'hotline', 'emergency'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default crisisResourcesContent;
