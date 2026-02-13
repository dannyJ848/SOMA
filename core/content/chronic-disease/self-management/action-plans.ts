/**
 * Action Plans - Self-Management
 *
 * Creating and using personalized action plans
 * for chronic disease management.
 */

import { EducationalContent } from "../../types";

export const ACTION_PLANS: EducationalContent = {
  id: "chronic-disease-action-plans",
  type: "concept",
  name: "Action Plans",
  alternateNames: ["Self-management plans", "Health action plans", "Personal care plans"],

  levels: {
    1: {
      level: 1,
      summary: "An action plan is a simple guide that tells you what to do every day to stay healthy and what to do if you start feeling worse.",
      explanation: `**What Is an Action Plan?**
An action plan is like a set of instructions for managing your health. It tells you what to do on good days and what to do if you start feeling sick.

**Why Do You Need One?**
- Helps you remember what to do each day
- Tells you when to take action if symptoms get worse
- Helps you know when to call your doctor
- Gives you confidence to handle problems
- Keeps you in control of your health

**Parts of an Action Plan:**

*Green Zone - All Clear:*
You feel good! Keep doing what you are doing:
- Take your daily medicines
- Exercise as planned
- Eat healthy foods
- Get enough sleep
- Monitor your symptoms

*Yellow Zone - Caution:*
You are not feeling quite right. Take action:
- Your symptoms are worse than usual
- Follow your "if-then" instructions
- Use your extra medicines if prescribed
- Call your doctor if not improving

*Red Zone - Emergency:*
You need help right away:
- Symptoms are severe
- Usual treatments are not working
- Call your doctor immediately or go to the emergency room

**Example Action Plan for Asthma:**

*Green Zone:*
- Breathing is easy
- No coughing or wheezing
- Can do normal activities
- Take your daily controller medicine

*Yellow Zone:*
- Some coughing or wheezing
- Wake up at night with symptoms
- Using quick-relief inhaler more often
- Take extra puffs of your inhaler, call doctor if no better in 24 hours

*Red Zone:*
- Very hard to breathe
- Cannot talk in full sentences
- Quick-relief medicine is not helping
- Call 911 or go to emergency room

**Tip:** Work with your doctor to create your own action plan. Keep a copy on your refrigerator and in your wallet!`,
      keyTerms: [
        { term: "action plan", definition: "A written guide that tells you what to do to manage your health each day and when problems happen" },
        { term: "green zone", definition: "When your symptoms are under control and you feel well" },
        { term: "yellow zone", definition: "When your symptoms are getting worse and you need to take extra steps" },
        { term: "red zone", definition: "When you have serious symptoms and need immediate help" },
      ],
      analogies: [
        "An action plan is like a traffic light for your health - green means go, yellow means slow down and be careful, red means stop and get help.",
        "Think of your action plan like a recipe - it gives you step-by-step instructions for what to do in different situations.",
      ],
      examples: [
        "Maria has diabetes and her action plan tells her to eat a snack and recheck her blood sugar if it drops below 70.",
        "Tom has heart failure and his action plan says to call his nurse if he gains more than 3 pounds in one day.",
      ],
    },
    2: {
      level: 2,
      summary: "Action plans are personalized, written guides that help patients manage their chronic conditions by defining daily routines, recognizing warning signs, and specifying responses to different symptom levels.",
      explanation: `**Understanding Action Plans:**

Action plans are collaborative tools created by patients and healthcare providers. They provide clear instructions for:
- Daily self-management activities
- Recognizing symptom changes
- Responding to worsening symptoms
- Knowing when to seek medical help

**Components of Effective Action Plans:**

*1. Baseline Management:*
- Daily medications and their timing
- Routine monitoring activities
- Exercise and activity recommendations
- Dietary guidelines
- Lifestyle factors

*2. Symptom Recognition:*
- Normal symptoms for your condition
- Warning signs of worsening
- Emergency symptoms
- Tracking methods

*3. Response Instructions:*
- Step-by-step actions for each scenario
- Medication adjustments (if prescribed)
- When to call the doctor
- When to seek emergency care

**The Zone System:**

| Zone | Status | Actions |
|------|--------|---------|
| Green | Feeling good, symptoms controlled | Continue routine management |
| Yellow | Symptoms worsening, not at usual baseline | Increase monitoring, follow escalation steps |
| Red | Severe symptoms, emergency | Seek immediate medical care |

**Creating Your Action Plan:**

*Work With Your Healthcare Team:*
1. Review your condition and typical symptoms
2. Identify your personal warning signs
3. Discuss medication adjustment options
4. Define when to call for help
5. Write down specific instructions
6. Review and update regularly

*Personalization Elements:*
- Your specific medications and doses
- Your personal baseline readings
- Your individual warning signs
- Your doctor contact information
- Your emergency contacts

**Using Your Action Plan:**

*Daily Use:*
- Review your green zone activities
- Complete monitoring tasks
- Track symptoms or readings
- Take medications as scheduled

*When Symptoms Change:*
- Refer to your plan
- Follow the appropriate zone instructions
- Document what you did and when
- Note if symptoms improve or worsen
- Contact healthcare team as directed

**Common Action Plan Types:**

*Condition-Specific Plans:*
- Asthma action plans
- COPD action plans
- Heart failure action plans
- Diabetes sick day rules
- Migraine management plans

**Keeping Your Plan Updated:**

- Review at each doctor visit
- Update after hospitalizations
- Revise when medications change
- Adjust if your condition changes
- Replace worn or outdated copies`,
      keyTerms: [
        { term: "self-management", definition: "Taking an active role in managing your own health condition" },
        { term: "baseline", definition: "Your normal or typical symptom level when your condition is under control" },
        { term: "escalation", definition: "Increasing the level of treatment or seeking higher level care" },
        { term: "sick day rules", definition: "Special instructions for managing your condition when you are ill with another sickness" },
      ],
      analogies: [
        "Your action plan is like a GPS for your health - it gives you directions based on where you are and helps you get back on track.",
      ],
    },
    3: {
      level: 3,
      summary: "Written action plans are evidence-based self-management tools that improve chronic disease outcomes by enhancing patient self-efficacy, symptom recognition, and appropriate response to exacerbations through structured, individualized protocols.",
      explanation: `**Evidence Base for Action Plans:**

Research demonstrates that written action plans improve outcomes in multiple chronic conditions:
- Reduced emergency department visits
- Decreased hospitalizations
- Better symptom control
- Improved quality of life
- Enhanced self-efficacy

**Theoretical Framework:**

*Self-Efficacy Theory:*
Action plans build confidence through:
- Mastery experiences (successful self-management)
- Clear performance accomplishments
- Reduced uncertainty and anxiety
- Structured problem-solving approach

*Self-Regulation Model:*
Components addressed:
- Symptom perception and interpretation
- Coping procedures selection
- Outcome appraisal
- Plan adjustment

**Action Plan Structure:**

*Essential Elements:*
1. **Assessment criteria** - How to evaluate current status
2. **Zone definitions** - Clear boundaries between status levels
3. **Action steps** - Specific interventions for each zone
4. **Medication guidance** - What to take, when to adjust
5. **Contact criteria** - When to call for help
6. **Emergency instructions** - Red flag symptoms and responses

*Quality Indicators:*
- Written in clear, simple language
- Personalized to individual patient
- Developed collaboratively
- Regularly reviewed and updated
- Accessible when needed

**Condition-Specific Action Plans:**

| Condition | Key Metrics | Zone Indicators |
|-----------|-------------|-----------------|
| Asthma | Peak flow, symptoms | % of personal best |
| COPD | Breathlessness, sputum | Color, volume changes |
| Heart Failure | Weight, edema | Daily weight gain |
| Diabetes | Blood glucose | Target ranges |
| Hypertension | Blood pressure | Reading thresholds |

**Medication Adjustment Protocols:**

*Standing Order Components:*
- Triggers for adjustment
- Specific medication changes
- Dose modifications
- Duration of changes
- Follow-up requirements

*Examples:*
- Inhaled corticosteroid dose increases for asthma
- Diuretic adjustments for heart failure
- Insulin sliding scales for diabetes
- Rescue medication protocols

**Implementation Considerations:**

*Patient Factors:*
- Health literacy level
- Cognitive function
- Physical ability to monitor
- Access to monitoring equipment
- Support system availability

*System Factors:*
- Provider time for development
- EHR integration
- Patient portal accessibility
- Follow-up mechanisms
- Quality monitoring

**Shared Decision-Making in Plan Development:**

*Collaborative Process:*
1. Assess patient preferences and values
2. Review treatment options
3. Discuss benefits and risks
4. Agree on thresholds and actions
5. Document shared decisions
6. Schedule review and revision`,
      keyTerms: [
        { term: "self-efficacy", definition: "Confidence in one ability to perform specific behaviors successfully" },
        { term: "standing order", definition: "Pre-authorized instructions for medication adjustments based on defined criteria" },
        { term: "personal best", definition: "The highest measurement (like peak flow) achieved when well, used as reference point" },
        { term: "exacerbation", definition: "Worsening or flare-up of a chronic condition" },
      ],
      clinicalNotes: "Action plans should be reviewed and updated at every visit and after any exacerbation. Consider health literacy when designing plans. Standing orders require appropriate patient education and monitoring capability. Documentation of action plan discussion is important for medicolegal purposes.",
    },
    4: {
      level: 4,
      summary: "Chronic disease action plans integrate self-management education, behavior change theory, and clinical protocols to create individualized response algorithms that enhance patient autonomy while maintaining safety through defined escalation pathways and provider collaboration.",
      explanation: `**Theoretical Foundations:**

*Self-Management Framework:*
Action plans operationalize self-management through:
- Problem recognition (symptom identification)
- Decision making (zone classification)
- Resource utilization (appropriate intervention)
- Patient-provider partnership (collaborative development)
- Action taking (executing plan steps)
- Self-evaluation (outcome assessment)

*Behavior Change Theory Applications:*
- Self-efficacy enhancement (mastery experiences)
- Outcome expectations (clear benefits)
- Goal setting (zone-based targets)
- Self-monitoring (tracking progress)
- Feedback loops (outcome assessment)

**Advanced Action Plan Design:**

*Tiered Response Framework:*
\`\`\`
Patient Status Assessment
         ↓
    Zone Classification
    ┌────┴────┐────┐
    │    │         │
 Green  Yellow    Red
    │    │         │
    ↓    ↓         ↓
Continue  Escalate  Emergency
 Routine   Self-Tx   Response
\`\`\`

*Decision Support Integration:*
- Algorithm-based zone assignment
- Automated alerts and reminders
- EHR-integrated protocols
- Patient portal action plan access
- Remote monitoring data incorporation

**Medication Titration Protocols:**

*Standing Order Design:*
| Element | Specification |
|---------|---------------|
| Trigger | Objective criterion (e.g., weight gain >3 lbs) |
| Action | Specific medication adjustment |
| Duration | Time period for intervention |
| Monitoring | Follow-up assessment requirements |
| Escalation | Criteria for provider contact |

*Safety Considerations:*
- Clear boundaries for self-adjustment
- Contraindications documentation
- Drug interaction awareness
- Maximum dose limits
- Time limits for self-management

**Quality Metrics:**

*Process Measures:*
- Action plan documentation rate
- Patient comprehension assessment
- Plan update frequency
- Accessibility verification

*Outcome Measures:*
- Exacerbation frequency
- Healthcare utilization
- Time to appropriate intervention
- Patient activation levels
- Quality of life scores

**Implementation Science:**

*Barriers to Implementation:*
- Provider time constraints
- Health literacy variability
- Competing clinical priorities
- EHR template limitations
- Reimbursement challenges

*Implementation Strategies:*
- Standardized templates
- Care coordinator roles
- Patient education resources
- EHR integration
- Quality incentives

**Specialized Action Plans:**

*Complex Patient Considerations:*
- Multiple chronic conditions
- Polypharmacy management
- Cognitive impairment adaptations
- Caregiver involvement
- Palliative care integration

*Pediatric and Adolescent Plans:*
- Age-appropriate language
- Parent/caregiver components
- School integration
- Developmental considerations
- Transition planning

**Technology-Enhanced Action Plans:**

*Digital Platforms:*
- Mobile app-based plans
- Interactive decision support
- Symptom tracking integration
- Medication reminder connections
- Telehealth escalation pathways

*Remote Patient Monitoring:*
- Automated zone classification
- Threshold-based alerts
- Real-time data integration
- Provider dashboards
- Patient feedback loops`,
      keyTerms: [
        { term: "decision support", definition: "Tools and systems that help patients and providers make appropriate clinical decisions" },
        { term: "standing orders", definition: "Pre-authorized medication adjustments patients can make based on defined criteria without provider contact" },
        { term: "remote patient monitoring", definition: "Use of technology to collect and transmit patient health data for clinical review" },
        { term: "titration protocol", definition: "Systematic approach to adjusting medication doses based on patient response" },
        { term: "escalation pathway", definition: "Defined steps for increasing care intensity when patient condition worsens" },
      ],
      clinicalNotes: "Action plans with standing orders require careful patient selection and education. Consider cognitive and health literacy assessment before delegating complex self-adjustment. Remote monitoring can enhance action plan effectiveness but requires response infrastructure. Document patient understanding and adherence capability.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art action plan development integrates precision medicine principles, digital health technologies, and implementation science to create adaptive, personalized self-management protocols that optimize patient outcomes while advancing health equity and autonomous care.",
      explanation: `**Evolution of Action Plans:**

Action plans have evolved from static written documents to dynamic, technology-enabled systems:
- Paper checklists → Digital interactive tools
- One-size-fits-all → Precision-tailored protocols
- Periodic review → Continuous adaptation
- Patient compliance → Patient partnership
- Condition-focused → Person-centered

**Precision Action Plan Framework:**

*Personalization Elements:*
\`\`\`
        Patient Profile
              ↓
    ┌─────────┼─────────┐
    │         │         │
Clinical    Behavioral   Social
Phenotype   Phenotype   Context
    │         │         │
    └─────────┼─────────┘
              ↓
    Tailored Action Plan
              ↓
    Adaptive Algorithm
\`\`\`

*Phenotype-Based Customization:*
- Disease severity stratification
- Exacerbation history patterns
- Treatment response profiles
- Medication tolerance
- Symptom expression patterns

**Advanced Decision Support:**

*Machine Learning Applications:*
- Predictive exacerbation models
- Optimal intervention timing
- Personalized threshold adjustment
- Outcome prediction
- Adaptive protocol refinement

*Clinical Decision Support:*
- Real-time symptom evaluation
- Medication interaction checking
- Risk stratification algorithms
- Guideline-concordance verification
- Alert fatigue management

**Digital Health Integration:**

*Connected Action Plans:*
- Wearable sensor data input
- Continuous vital sign monitoring
- Activity and sleep tracking
- Medication adherence monitoring
- Environmental exposure data

*Intelligent Response Systems:*
- Automated zone classification
- Dynamic threshold adjustment
- Predictive intervention prompts
- Escalation automation
- Provider notification protocols

**Implementation Science Framework:**

*Adoption Determinants:*
- Intervention characteristics (complexity, adaptability)
- Outer setting (policy, guidelines, resources)
- Inner setting (culture, implementation climate)
- Individual characteristics (knowledge, self-efficacy)
- Implementation process (planning, engaging, executing)

*Sustainability Strategies:*
- Embedded workflows
- Quality measurement integration
- Payment model alignment
- Leadership engagement
- Continuous improvement culture

**Health Equity Considerations:**

*Barriers to Equitable Implementation:*
- Digital divide in technology access
- Health literacy disparities
- Language and cultural barriers
- Socioeconomic constraints
- Geographic access limitations

*Equity-Focused Strategies:*
- Multi-modal delivery (paper, digital, verbal)
- Health literacy universal precautions
- Culturally adapted content
- Language-appropriate materials
- Community health worker support

**Advanced Outcome Measurement:**

*Patient-Centered Outcomes:*
- Patient-reported outcome measures
- Quality of life assessment
- Symptom burden evaluation
- Functional status tracking
- Patient activation changes

*System-Level Outcomes:*
- Healthcare utilization patterns
- Cost-effectiveness analysis
- Time to appropriate intervention
- Care fragmentation reduction
- Population health impact

**Research Frontiers:**

*Emerging Areas:*
- N-of-1 action plan optimization
- Genomics-informed protocols
- Microbiome-based triggers
- Digital biomarker integration
- AI-assisted plan generation

*Methodological Advances:*
- Adaptive trial designs for action plan evaluation
- Real-world evidence generation
- Patient-partnered research
- Implementation effectiveness studies
- Mixed methods evaluation

**Future Directions:**

*Evolving Technologies:*
- Voice-activated action plan access
- Ambient sensing for symptom detection
- Augmented reality instruction delivery
- Virtual coaching integration
- Interoperable health data platforms

*Policy Implications:*
- Value-based payment for action plans
- Quality measure standardization
- Regulatory frameworks for digital tools
- Interoperability requirements
- Equity mandates`,
      keyTerms: [
        { term: "precision medicine", definition: "Tailoring treatment approaches based on individual patient characteristics" },
        { term: "digital phenotyping", definition: "Using digital data to characterize individual health patterns and behaviors" },
        { term: "adaptive algorithm", definition: "Computer-based system that modifies recommendations based on ongoing patient data" },
        { term: "implementation science", definition: "Study of methods to promote integration of evidence-based practices into routine care" },
        { term: "N-of-1 trial", definition: "Single-patient trial design to determine optimal treatment for individual" },
      ],
      clinicalNotes: "AI-enhanced action plans require validation and human oversight. Address equity explicitly in digital action plan implementation. Patient partnership in plan development improves outcomes and satisfaction. Consider the full ecosystem of patient support when designing advanced action plans.",
    },
  },

  media: [
    {
      id: "action-plan-template",
      type: "diagram",
      filename: "action-plan-template.pdf",
      title: "Universal Action Plan Template",
      description: "Customizable action plan template with zone system",
    },
    {
      id: "zone-system-diagram",
      type: "diagram",
      filename: "zone-system.svg",
      title: "Action Plan Zone System",
      description: "Visual representation of the green-yellow-red zone approach",
    },
  ],

  citations: [
    {
      id: "asthma-action-plans",
      type: "article",
      title: "Written Action Plans for Asthma",
      source: "Cochrane Database of Systematic Reviews",
    },
    {
      id: "self-management-chronic",
      type: "article",
      title: "Self-Management Education for Chronic Disease",
      source: "Annals of Internal Medicine",
    },
  ],

  crossReferences: [
    { targetId: "chronic-disease-symptom-tracking", targetType: "topic", relationship: "related", label: "Symptom Tracking" },
    { targetId: "chronic-disease-medication-organization", targetType: "topic", relationship: "related", label: "Medication Organization" },
    { targetId: "copd-action-plans", targetType: "topic", relationship: "related", label: "COPD Action Plans" },
  ],

  tags: {
    systems: ["general health"],
    topics: ["self-management", "chronic disease", "patient education"],
    keywords: ["action plans", "self-management", "exacerbation", "zone system"],
    clinicalRelevance: "high",
  },

  createdAt: "2025-01-24T00:00:00.000Z",
  updatedAt: "2025-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
  contributors: ["Biological Self Content Team"],
};
