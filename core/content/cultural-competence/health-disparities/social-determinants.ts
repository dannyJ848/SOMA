// Using custom content structure for cultural competence modules


export const socialDeterminantsContent = {
  id: 'social-determinants',
  title: 'Social Determinants of Health',
  category: 'health-disparities',
  description: 'Understanding how social and economic conditions affect health outcomes.',
  levels: [
    {
      level: 1,
      title: 'Introduction to Social Determinants',
      description: 'Learn what social determinants of health are and why they matter.',
      keyPoints: [
        'Definition of social determinants',
        'Five key domains',
        'Impact on health outcomes',
        'Clinical relevance'
      ],
      content: `
Social determinants of health (SDOH) are the conditions in which people are born, grow, live, work, and age.

**Definition:**

Social determinants of health are the non-medical factors that influence health outcomes. They include the circumstances in which people live and the systems that shape those circumstances.

**Key Insight:**

Health is shaped by:
- Medical care (~20% of health outcomes)
- Social and economic factors (~40%)
- Physical environment (~10%)
- Health behaviors (~30%)

This means clinical care alone cannot address what truly drives health.

**Five Key Domains:**

1. **Economic Stability**
   - Income, employment, debt, expenses
   - Economic security and mobility

2. **Education**
   - High school graduation, enrollment
   - Language, literacy, early childhood education

3. **Health and Healthcare**
   - Access to care, insurance coverage
   - Quality of care, health literacy

4. **Neighborhood and Built Environment**
   - Housing, transportation, safety
   - Parks, playgrounds, environmental conditions

5. **Social and Community Context**
   - Social support, community engagement
   - Discrimination, incarceration, cohesion

**Impact on Health:**

SDOH affect:
- Life expectancy (up to 15-20 year difference)
- Chronic disease rates
- Mental health
- Health behaviors
- Access to and utilization of healthcare

**Why This Matters for Healthcare:**

- Explains why clinical advice may not be followed
- Identifies root causes of health problems
- Guides more effective treatment plans
- Addresses health's true drivers
- Reduces health disparities

**Example:**

A patient with uncontrolled diabetes may need more than medication adjustment:
- Can they afford healthy food and medication?
- Is their housing stable?
- Do they have safe places to exercise?
- Do they understand the treatment plan?

Addressing SDOH is essential for effective, patient-centered care.
      `,
      reflectionQuestions: [
        'What social determinants most affect your patients?',
        'How might SDOH be contributing to a patient\'s health challenges you\'ve seen?',
        'Why is it important to ask about social factors in clinical encounters?'
      ]
    },
    {
      level: 2,
      title: 'Economic Stability and Education',
      description: 'Deepen understanding of how economic and educational factors shape health.',
      keyPoints: [
        'Income and wealth effects',
        'Employment and working conditions',
        'Education and health literacy',
        'Financial stress and health'
      ],
      content: `
Economic stability and education are fundamental drivers of health outcomes.

**Economic Stability:**

**Income and Health:**
- Each increase in income level is associated with better health
- Life expectancy varies by up to 15 years between highest and lowest income
- Wealth matters more than income—intergenerational assets affect health

**Poverty Effects:**
- Chronic stress from financial insecurity
- Difficulty affording basics (food, housing, healthcare)
- Limited choices for healthy living
- Trade-offs between healthcare and other needs

**Employment:**
- Job security affects health through stress
- Workplace conditions (safety, schedules, autonomy)
- Unemployment is associated with worse physical and mental health
- "Precarious" employment (gig work, part-time without benefits) affects health

**Medical Expenses:**
- Even insured patients face high out-of-pocket costs
- Medical debt is a leading cause of personal bankruptcy
- Patients may skip or delay care due to cost
- Transportation and time costs are significant barriers

**Education:**

**Educational Attainment:**
- Each level of education completed is associated with better health
- Higher education = better jobs, more income, better neighborhoods
- Educational quality matters, not just years

**Health Literacy:**
- Ability to understand health information
- Capacity to navigate healthcare systems
- Skills to make health decisions
- Directly affects ability to follow treatment plans

**Early Childhood Education:**
- Critical period for development
- Early education affects lifelong trajectories
- High-quality early childhood education improves health outcomes

**Language and Literacy:**
- Limited English proficiency affects health access
- Low literacy is common and often hidden
- Shame prevents patients from admitting difficulty
- Affects ability to understand instructions, consent forms, labels

**Clinical Implications:**

**Assessment Questions:**
- "Is affording your medication/food/housing a challenge?"
- "What does a typical work day look like for you?"
- "How comfortable are you reading medical information?"

**Action Strategies:**
- Prescribe lower-cost alternatives when possible
- Connect patients to financial assistance programs
- Use plain language, avoid medical jargon
- Confirm understanding with teach-back method
- Consider SDOH when making treatment plans

**Case Example:**

A patient can't afford insulin. Clinical response should include:
- Exploring lower-cost options (generics, assistance programs)
- Addressing food insecurity affecting diabetes management
- Understanding work schedule barriers to taking medications
- Not assuming non-adherence is "patient choice"

Healthcare that ignores economic reality will fail.
      `,
      reflectionQuestions: [
        'How have you seen economic factors affect patient health?',
        'What barriers exist for patients with low health literacy?',
        'How can clinical practice adapt to economic constraints?'
      ],
      exercises: [
        'Screen all patients for one week for financial barriers',
        'Practice explaining a complex condition without medical jargon',
        'Research financial assistance programs available to your patients',
        'Review your patient education materials for literacy level'
      ]
    },
    {
      level: 3,
      title: 'Neighborhood and Environment',
      description: 'Explore how where people live affects their health.',
      keyPoints: [
        'Housing quality and stability',
        'Transportation access',
        'Food environment',
        'Safety and community resources'
      ],
      content: `
The places where people live profoundly shape their health opportunities and risks.

**Housing:**

**Quality Issues:**
- Mold, pests, lead paint
- Inadequate heating/cooling
- Overcrowding
- Poor ventilation

**Health Impacts:**
- Asthma and respiratory conditions
- Lead poisoning (especially children)
- Injuries from hazards
- Mental health stress
- Inability to rest and recover from illness

**Housing Stability:**
- Homelessness is devastating to health
- Housing instability (moves, risk of eviction) affects health
- Rent burden (paying >30% of income on housing) limits resources for other needs
- Evictions have long-term health consequences

**Transportation:**

**Access Barriers:**
- No personal vehicle
- Limited public transportation
- Long travel times to healthcare
- Transportation costs

**Health Impacts:**
- Missed appointments
- Delayed care
- Difficulty getting prescriptions
- Limited access to healthy food
- Social isolation

**Clinical Considerations:**
- Offer telehealth options
- Schedule longer appointment intervals
- Choose medications available at local pharmacies
- Consider home-based care when appropriate

**Food Environment:**

**Food Deserts:**
- Areas without access to affordable healthy food
- Fast food and convenience stores may be only options
- No supermarkets within reasonable distance

**Food Insecurity:**
- Not knowing where next meal comes from
- Affects 1 in 8 Americans
- Associated with:
  - Poor diabetes control
  - Developmental delays in children
  - Mental health issues
  - Poor chronic disease management

**Clinical Response:**
- Screen for food insecurity
- Connect to food assistance (SNAP, food banks)
- Adjust dietary recommendations to reality
- Prescribe produce programs where available

**Safety and Community:**

**Violence and Crime:**
- Chronic stress from living in unsafe areas
- Limited ability to exercise outside
- Social isolation (staying inside for safety)
- Trauma from witnessing or experiencing violence

**Green Space:**
- Access to parks and recreation
- Air quality differences
- Walkability and physical activity
- Mental health benefits of nature

**Community Resources:**
- Libraries, community centers
- Schools and after-school programs
- Social services
- Faith communities

**ZIP Code Matters:**

Life expectancy can vary by up to 20 years between ZIP codes just miles apart. Where you live shouldn't determine how long you live, but it often does.

**Clinical Practice Implications:**

**Screening Questions:**
- "Do you have stable housing?"
- "Do you have reliable transportation?"
- "In the past month, were you worried about running out of food?"
- "Do you feel safe in your home and neighborhood?"

**Interventions:**
- Document social needs in the medical record
- Connect to social workers or case managers
- Partner with community organizations
- Advocate for housing and transportation policies

**Case Example:**

A child with frequent asthma attacks may need:
- Home assessment for triggers (mold, pests)
- Relocation assistance if housing is unsafe
- Transportation to specialty appointments
- Advocacy with landlord for repairs

Treating the medical condition alone won't work if environmental causes persist.
      `,
      reflectionQuestions: [
        'How might your neighborhood affect your health?',
        'What barriers might patients face depending on where they live?',
        'How can healthcare providers address environmental health challenges?'
      ],
      exercises: [
        'Map community resources available to your patients',
        'Screen all patients for housing and food insecurity for one week',
        'Research food insecurity rates in your community',
        'Identify transportation barriers for your patient population'
      ]
    },
    {
      level: 4,
      title: 'Social and Community Context',
      description: 'Understand how social relationships and community factors influence health.',
      keyPoints: [
        'Social support and networks',
        'Stress and discrimination',
        'Incarceration and reentry',
        'Community cohesion and trust'
      ],
      content: `
Social relationships and community context are powerful determinants of health outcomes.

**Social Support:**

**Types of Support:**
- **Emotional**: Love, empathy, caring
- **Instrumental**: Tangible help (rides, money, childcare)
- **Informational**: Advice, guidance, information
- **Appraisal**: Feedback for self-evaluation

**Health Benefits:**
- Better recovery from illness
- Lower mortality rates
- Better mental health
- Better immune function
- Improved health behaviors

**Social Isolation:**
- "Epidemic of loneliness" affects health significantly
- Social isolation associated with:
  - 29% increased risk of heart disease
  - 32% increased risk of stroke
  - Higher rates of depression and anxiety
  - Cognitive decline in older adults

**Clinical Implications:**
- Ask about social support systems
- Involve family/support people in care when appropriate
- Connect isolated patients to community resources
- Consider social factors when planning care

**Stress and Discrimination:**

**Weathering Hypothesis:**
- Chronic stress from discrimination accelerates aging
- Explains earlier onset of chronic disease in marginalized groups
- Cumulative biological "wear and tear"

**Allostatic Load:**
- Chronic activation of stress response
- Affects multiple body systems
- Contributes to hypertension, diabetes, immune dysfunction

**Experiences of Discrimination:**
- Everyday discrimination (microaggressions, slights)
- Major discriminatory events
- Internalized racism/sexism/homophobia
- Anticipation of discrimination

**Health Impacts:**
- Cardiovascular disease
- Mental health disorders
- Birth outcomes
- Substance use
- Healthcare avoidance

**Trauma:**
- High rates of trauma in marginalized communities
- Historical trauma (generational effects)
- Complex trauma (multiple, prolonged events)
- Toxic stress in childhood

**Incarceration and Reentry:**

**Health Impacts:**
- Incarceration worsens health
- Limited healthcare during incarceration
- Communicable disease risk
- Mental health challenges
- Disruption of social connections

**Reentry Challenges:**
- Difficulty accessing healthcare after release
- Employment barriers
- Housing instability
- Stigma affecting care

**Clinical Considerations:**
- Trauma-informed care approaches
- Understanding prior trauma's effects on health
- Avoiding re-traumatization
- Building trust despite past negative experiences

**Community Cohesion:**

**Social Capital:**
- Networks of relationships
- Shared values and norms
- Trust among community members
- Civic engagement

**Health Benefits:**
- Lower mortality rates
- Better self-rated health
- Reduced health risk behaviors
- Better mental health

**Social Cohesion vs. Fragmentation:**
- Cohesive communities protect health
- Fragmented communities increase risk
- Gentrification can disrupt established networks

**Family Structure:**
- Family support affects health
- Non-traditional families also provide support
- Chosen family for LGBTQ+ communities
- Family separation (immigration, incarceration) harms health

**Clinical Practice Implications:**

**Screening Questions:**
- "Who do you turn to for help when you need it?"
- "Do you feel connected to your community?"
- "Have you experienced discrimination in healthcare?"
- "Do you feel safe in your relationships?"

**Trauma-Informed Approaches:**
- Assume trauma history is common
- Create physically and emotionally safe environments
- Ensure patient choice and control
- Build trust through consistency and transparency
- Recognize trauma responses

**Interventions:**
- Partner with community-based organizations
- Refer to support groups
- Address mental health needs
- Provide trauma-informed care
- Create welcoming environments for all patients

**Case Example:**

A patient with poorly controlled hypertension who also reports discrimination and isolation may need:
- Acknowledgment of discrimination's health effects
- Connection to community support
- Stress management approaches
- Trauma-informed care
- Attention to social needs alongside medical treatment

Addressing social context is essential for effective, humane care.
      `,
      reflectionQuestions: [
        'How do social connections affect health?',
        'What role does discrimination play in health disparities?',
        'How can clinical practice be more trauma-informed?'
      ],
      exercises: [
        'Assess social support in all patient encounters for one week',
        'Create a list of community support resources for your patients',
        'Practice trauma-informed communication techniques',
        'Reflect on your own social support and its health effects'
      ]
    },
    {
      level: 5,
      title: 'Screening and Addressing SDOH',
      description: 'Learn practical approaches for identifying and responding to social needs.',
      keyPoints: [
        'Screening tools and approaches',
        'Documentation and coding',
        'Referral and intervention',
        'Team-based care models'
      ],
      content:`
Effectively addressing social determinants requires systematic approaches and resources.

**Screening Approaches:**

**Universal vs. Targeted:**
- **Universal**: Screen all patients (recommended)
- **Targeted**: Screen high-risk groups only (may miss problems)

**Best Practice:**
- Universal screening reduces stigma
- Normalizes asking about social needs
- Identifies needs in unexpected patients
- Demonstrates commitment to whole-person care

**Validated Screening Tools:**

**PRAPARE (Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences):**
- 20+ domains of SDOH
- Widely used in primary care
- Available in multiple languages
- Includes assets, not just risks

**Accountable Health Communities Screening Tool:**
- Focuses on housing, food, transportation, utilities, interpersonal safety
- Developed by CMS for Innovation Center
- Shorter, focused on immediate needs

**Other Options:**
- SERP (Social Effort for Social Risks)
- Your Current Life Situation (YCLS)
- Customized clinic screening tools

**Implementation Considerations:**
- Who asks (clinical staff, providers, screeners)?
- How (paper, tablet, kiosk, patient portal)?
- When (annually, periodically, when indicated)?
- Follow-up process for positive screens?

**Documentation and Coding:**

**ICD-10 Z Codes:**
Document social circumstances that affect health:
- Z55: Problems related to education and literacy
- Z56: Problems related to employment and unemployment
- Z57: Occupational exposure to risk factors
- Z58: Problems related to physical environment
- Z59: Problems related to housing and economic circumstances
- Z60: Problems related to social environment
- Z62: Problems related to upbringing
- Z63: Other problems related to primary support group
- Z64: Problems related to certain psychosocial circumstances
- Z65: Problems related to other psychosocial circumstances

**Why Code SDOH:**
- Documents complexity of care
- Justifies additional time/resources
- May affect payment models
- Tracks population needs
- Advocates for resource allocation

**Intervention and Referral:**

**Tiered Response:**

**Tier 1: Clinical Team Response**
- Empathetic acknowledgment
- Basic resource information
- Brief counseling on social needs
- Adjust treatment plans to reality

**Tier 2: Internal Referral**
- Social worker consultation
- Case manager involvement
- Pharmacy assistance programs
- Financial counseling

**Tier 3: External Referral**
- Community-based organizations
- Government programs
- Specialty services
- Legal aid

**Referral Platforms:**
- NowPow, Aunt Bertha, Unite Us
- Electronic connection to community resources
- Track referral completion
- Close-loop referral systems

**Addressing Common Needs:**

**Food Insecurity:**
- Screen for hunger/food access
- Refer to food banks, SNAP, WIC, Meals on Wheels
- Connect to produce prescription programs
- Provide nutrition education appropriate to resources

**Housing Instability:**
- Document housing needs and health implications
- Refer to housing assistance agencies
- Legal aid for housing issues
- Homeless services and shelters
- Supportive housing programs

**Transportation Barriers:**
- Arrange transportation vouchers
- Coordinate ride services
- Provide telehealth options
- Coordinate home-based services

**Utilities and Basic Needs:**
- Connect to energy assistance
- Emergency financial assistance
- Utility company programs

**Interpersonal Safety:**
- Domestic violence screening and response
- Human trafficking awareness
- Elder abuse recognition
- Child protective services when indicated

**Team-Based Care Models:**

**Interprofessional Team Members:**
- Social workers
- Case managers
- Community health workers
- Patient navigators
- Behavioral health providers
- Pharmacists
- Legal aid partners

**Community Health Workers:**
- Trusted members of communities
- Bridge between clinical and community
- Provide culturally appropriate education
- Help navigate systems
- Address social needs
- Build trust

**Patient Navigation:**
- Guide patients through complex systems
- Address barriers to care
- Improve appointment adherence
- Connect to resources
- Advocate for patient needs

**Integration Models:**

1. **Co-located**: Social services in clinical setting
2. **Integrated**: Social needs addressed as core part of care
3. **Networked**: Referrals to community partners
4. **Hybrid**: Combination of approaches

**Measuring Impact:**

**Process Metrics:**
- Screening completion rates
- Positive screen prevalence
- Referral completion rates
- Time to connection

**Outcome Metrics:**
- Health outcomes (blood pressure, HbA1c, etc.)
- Healthcare utilization
- Patient-reported outcomes
- Patient satisfaction
- Healthcare costs

**Challenges and Solutions:**

**Challenge: Limited Time**
- Solution: Team-based screening, efficient tools, prioritize needs

**Challenge: Limited Resources**
- Solution: Community partnerships, creative resource utilization, advocacy

**Challenge: Patient Privacy/Stigma**
- Solution: Normalizing screening, respectful communication

**Challenge: Fragmented Systems**
- Solution: Care coordination, integrated records

**Key Principles:**

- Ask about social needs respectfully
- Listen without judgment
- Address only what patient wants to address
- Connect to resources with warmth
- Follow up on referrals
- Acknowledge that you can't fix everything
- Focus on building trust

**Case Example:**

Patient screens positive for food insecurity and housing instability.

Response:
1. Acknowledge difficulty: "Many people face challenges with food and housing. Thank you for telling me."
2. Ask priority: "Which feels most urgent right now?"
3. Offer immediate connection: "Our social worker can help with both."
4. Adjust care plan: "Let's choose medications that don't require refrigeration."
5. Follow up: "We'll check in at your next visit about how things are going."

Addressing SDOH isn't optional for good care—it's essential.
      `,
      reflectionQuestions: [
        'What social needs screening would work in your practice?',
        'How can you respond to identified social needs?',
        'What community resources exist for your patients?'
      ],
      exercises: [
        'Implement SDOH screening with all patients for one week',
        'Create a resource directory for common social needs',
        'Practice using ICD-10 Z codes for SDOH documentation',
        'Develop protocols for responding to common social needs'
      ]
    }
  ]
};
