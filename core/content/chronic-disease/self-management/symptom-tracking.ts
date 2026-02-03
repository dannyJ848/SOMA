/**
 * Symptom Tracking - Self-Management
 *
 * Methods and tools for systematic tracking of chronic
 * disease symptoms to improve management outcomes.
 */

import { EducationalContent } from "../../types";

export const SYMPTOM_TRACKING: EducationalContent = {
  id: "chronic-disease-symptom-tracking",
  type: "concept",
  name: "Symptom Tracking",
  alternateNames: ["Symptom diary", "Health tracking", "Symptom logging"],

  levels: {
    1: {
      level: 1,
      summary: "Symptom tracking means writing down how you feel each day. This helps you and your doctor understand your health better and catch problems early.",
      explanation: `**What Is Symptom Tracking?**
Symptom tracking is keeping a record of how you feel. You write down things like pain, tiredness, breathing problems, or anything else your body tells you.

**Why Track Your Symptoms?**
- See patterns in how you feel
- Remember what to tell your doctor
- Know if treatments are working
- Catch problems before they get worse
- Feel more in control of your health

**What Should You Track?**

*Basic Things to Record:*
- Date and time
- What symptom you had
- How bad it was (mild, medium, or severe)
- How long it lasted
- What you were doing when it happened
- What made it better or worse

*Examples of Symptoms to Track:*
- Pain (where and how bad)
- Tiredness or fatigue
- Shortness of breath
- Dizziness
- Headaches
- Nausea or stomach problems
- Mood changes
- Sleep quality

**Ways to Track:**

*Paper Methods:*
- Notebook or diary
- Printed tracking sheets
- Calendar with notes
- Index cards

*Digital Methods:*
- Phone apps
- Computer programs
- Voice recordings
- Patient portal logs

**Simple Tracking System:**

Rate your symptoms 1-10 each day:
- 1-3 = Mild (barely there)
- 4-6 = Moderate (noticeable but manageable)
- 7-10 = Severe (really bothering you)

**Tips for Success:**
1. Track at the same time each day
2. Keep it simple - do not try to track too much
3. Be honest about how you feel
4. Bring your records to doctor visits
5. Look for patterns each week

**Tip:** Start with just one or two symptoms. You can always add more later!`,
      keyTerms: [
        { term: "symptom", definition: "Something you feel that might mean something is wrong, like pain or tiredness" },
        { term: "tracking", definition: "Writing down or recording information regularly over time" },
        { term: "pattern", definition: "Something that happens the same way again and again" },
      ],
      analogies: [
        "Symptom tracking is like keeping a weather diary - you write down what happens each day so you can see patterns, like how you always feel worse when it rains.",
        "Think of symptom tracking like being a detective. You collect clues to solve the mystery of what makes you feel better or worse.",
      ],
      examples: [
        "Every morning, Sarah rates her knee pain from 1 to 10 and notices it is worse after she walks a lot the day before.",
        "Tom writes down when he feels tired and discovers he always feels exhausted on days he skips breakfast.",
      ],
    },
    2: {
      level: 2,
      summary: "Systematic symptom tracking allows patients to identify patterns, triggers, and trends in their condition, providing valuable data for healthcare providers to optimize treatment plans.",
      explanation: `**The Value of Symptom Tracking:**

Regular symptom tracking provides benefits for both patients and providers:
- Identifies symptom triggers and patterns
- Measures treatment effectiveness
- Detects early warning signs
- Improves doctor-patient communication
- Supports informed decision-making
- Increases patient engagement

**What to Track:**

*Core Symptom Information:*
| Element | Details to Record |
|---------|-------------------|
| Symptom type | Specific description (sharp pain vs. dull ache) |
| Intensity | Consistent scale (0-10, mild/moderate/severe) |
| Timing | When it started, how long it lasted |
| Location | Where you feel it (if applicable) |
| Triggers | What might have caused it |
| Relievers | What made it better |

*Contextual Factors:*
- Activities and exercise
- Diet and fluid intake
- Medications taken
- Sleep quality and duration
- Stress levels
- Weather conditions
- Menstrual cycle (if applicable)

**Tracking Methods:**

*Paper-Based Tools:*
- Pre-printed symptom diaries
- Custom tracking sheets
- Pain maps (body diagrams)
- Calendar notations

*Digital Tools:*
- Smartphone health apps
- Wearable devices
- Patient portal symptom logs
- Spreadsheets

**Choosing a Tracking System:**

| Factor | Consider |
|--------|----------|
| Ease of use | Will you actually use it daily? |
| Accessibility | Can you access it when needed? |
| Comprehensiveness | Does it capture what you need? |
| Shareability | Can you show your doctor easily? |
| Cost | Is it affordable or free? |

**Using Standardized Scales:**

*Pain Scale (0-10):*
- 0 = No pain
- 1-3 = Mild (can be ignored)
- 4-6 = Moderate (interferes with tasks)
- 7-9 = Severe (dominates your attention)
- 10 = Worst pain imaginable

*Other Common Scales:*
- Fatigue scales
- Breathlessness scales (like Borg scale)
- Mood scales
- Sleep quality ratings

**Identifying Patterns:**

*Look for Connections Between:*
- Time of day and symptoms
- Activities and symptom changes
- Foods and symptoms
- Medications and symptom relief
- Weather and how you feel

**Sharing with Your Healthcare Team:**

*Before Appointments:*
- Review your tracking data
- Summarize key patterns
- Note questions about your findings
- Bring records or share digitally

*During Appointments:*
- Share your summary first
- Point out significant changes
- Ask about patterns you have noticed
- Discuss any concerns`,
      keyTerms: [
        { term: "trigger", definition: "Something that causes or worsens a symptom" },
        { term: "baseline", definition: "Your normal or typical level of symptoms when condition is stable" },
        { term: "pain scale", definition: "A standardized way to rate pain severity, usually from 0 to 10" },
        { term: "symptom diary", definition: "A regular record of symptoms and related factors over time" },
      ],
      analogies: [
        "Tracking symptoms is like tracking your spending - you need to see where your resources go to make better decisions.",
      ],
    },
    3: {
      level: 3,
      summary: "Symptom tracking employs validated assessment instruments and systematic data collection methods to generate actionable clinical information, supporting evidence-based chronic disease management and facilitating patient-provider collaboration.",
      explanation: `**Clinical Utility of Symptom Tracking:**

Systematic symptom tracking serves multiple clinical purposes:
- Disease activity monitoring
- Treatment response assessment
- Early exacerbation detection
- Medication optimization
- Quality of life measurement
- Shared decision-making support

**Validated Assessment Instruments:**

*Condition-Specific Measures:*
| Condition | Instrument | What It Measures |
|-----------|------------|------------------|
| Chronic Pain | Brief Pain Inventory (BPI) | Pain intensity and interference |
| COPD | CAT (COPD Assessment Test) | Respiratory symptoms and impact |
| Heart Failure | KCCQ (Kansas City Cardiomyopathy) | HF-specific QOL |
| Depression | PHQ-9 | Depression severity |
| Anxiety | GAD-7 | Anxiety symptoms |
| Fatigue | FACIT-Fatigue | Fatigue severity and impact |

*Generic Measures:*
- SF-36/SF-12 (overall health status)
- EQ-5D (health-related quality of life)
- PROMIS measures (multiple domains)

**Tracking Methodology:**

*Ecological Momentary Assessment (EMA):*
- Real-time symptom capture
- Multiple daily assessments
- Reduces recall bias
- Captures variability

*End-of-Day Diaries:*
- Once-daily summary
- Lower patient burden
- Subject to recall effects
- Good for stable conditions

*Periodic Assessments:*
- Weekly or monthly questionnaires
- Tracks longer-term trends
- Lower respondent burden
- May miss daily variations

**Data Quality Considerations:**

*Reliability Factors:*
- Consistent timing of assessments
- Standardized scales and definitions
- Clear instructions for patients
- Regular data review

*Validity Considerations:*
- Appropriate instruments for condition
- Cultural and language adaptation
- Health literacy level match
- Clinically meaningful thresholds

**Technology-Enabled Tracking:**

*Mobile Health (mHealth):*
- Smartphone symptom apps
- Push notification reminders
- Data visualization
- Cloud storage and sharing

*Remote Patient Monitoring:*
- Connected devices (scales, BP monitors)
- Wearable sensors
- Automated data transmission
- Clinical dashboard integration

**Clinical Integration:**

*Data to Action Pathways:*
1. Patient enters symptom data
2. Data aggregated and analyzed
3. Trends and alerts identified
4. Information reviewed by care team
5. Clinical response when indicated
6. Feedback to patient

*Alert Thresholds:*
- Define meaningful symptom changes
- Set automated triggers
- Establish response protocols
- Balance sensitivity and specificity

**Patient Education for Tracking:**

*Key Messages:*
- Importance of consistent tracking
- How data will be used
- What to do with concerning symptoms
- How to share data with care team`,
      keyTerms: [
        { term: "patient-reported outcome measure (PROM)", definition: "Standardized questionnaire completed by patients about their symptoms, function, or quality of life" },
        { term: "ecological momentary assessment", definition: "Research method collecting real-time data in natural settings" },
        { term: "minimal clinically important difference", definition: "Smallest change in a measure that represents meaningful improvement to patients" },
        { term: "disease activity", definition: "Level of active symptoms or inflammation in a chronic condition" },
      ],
      clinicalNotes: "Select validated instruments appropriate for the condition and patient population. Consider respondent burden when designing tracking protocols. Establish clear pathways for clinical response to tracked data. Address health literacy in patient instructions.",
    },
    4: {
      level: 4,
      summary: "Evidence-based symptom tracking integrates validated patient-reported outcome measures, digital health technologies, and clinical decision support to generate continuous, actionable data streams that optimize chronic disease management through personalized, responsive care protocols.",
      explanation: `**Theoretical Framework:**

*Self-Regulation Model:*
Symptom tracking supports self-regulation through:
- Symptom representation (identification)
- Coping procedures (response selection)
- Appraisal (outcome evaluation)
- Feedback loops (plan modification)

*Information-Motivation-Behavioral Skills Model:*
- Information: Understanding what and why to track
- Motivation: Belief in tracking value
- Behavioral skills: Ability to track consistently

**Measurement Science:**

*Psychometric Properties:*
- Test-retest reliability
- Internal consistency (Cronbach alpha)
- Content validity
- Construct validity
- Responsiveness to change

*Item Response Theory (IRT):*
- Computer adaptive testing (CAT)
- Precise measurement with fewer items
- PROMIS item banks
- Cross-condition comparability

**Advanced Tracking Approaches:**

*Multi-Modal Data Collection:*
\`\`\`
Active Patient Input
(Symptom Reports)
        ↓
Data Integration Layer ← Passive Sensors
        ↓              ← Wearables
Analysis Platform      ← EHR Data
        ↓
Clinical Decision Support
        ↓
Personalized Recommendations
\`\`\`

*Digital Phenotyping:*
- Smartphone sensor data
- Movement patterns
- Sleep detection
- Voice analysis
- Social activity inference

**Clinical Decision Support Integration:**

*Alert Algorithm Design:*
| Alert Level | Trigger | Response |
|-------------|---------|----------|
| Informational | Trend change | Patient education |
| Low Priority | Threshold approach | Self-management prompt |
| Moderate | Threshold exceeded | Care team notification |
| High Priority | Critical value | Immediate clinical contact |

*Avoiding Alert Fatigue:*
- Appropriate threshold setting
- Alert prioritization
- Actionable recommendations
- Regular algorithm refinement

**Implementation Considerations:**

*Technology Infrastructure:*
- Data security and privacy (HIPAA)
- EHR integration
- Patient portal connectivity
- Provider workflow integration
- Interoperability standards

*Change Management:*
- Stakeholder engagement
- Training programs
- Workflow redesign
- Quality monitoring
- Continuous improvement

**Quality Metrics:**

*Process Measures:*
- Tracking completion rates
- Data quality indicators
- Clinical response times
- Patient engagement levels

*Outcome Measures:*
- Symptom control improvement
- Healthcare utilization patterns
- Patient satisfaction
- Quality of life changes

**Special Populations:**

*Cognitive Impairment:*
- Simplified tracking tools
- Caregiver involvement
- Visual scales
- Voice recording options

*Low Health Literacy:*
- Plain language instruments
- Pictorial scales
- Technology support
- In-person assistance

*Multiple Chronic Conditions:*
- Integrated tracking platforms
- Cross-condition symptom monitoring
- Treatment interaction awareness
- Care coordination emphasis`,
      keyTerms: [
        { term: "computer adaptive testing", definition: "Assessment approach using algorithms to select optimal questions based on prior responses" },
        { term: "digital phenotyping", definition: "Using smartphone and wearable data to characterize health status and behavior patterns" },
        { term: "clinical decision support", definition: "Systems providing patient-specific recommendations to clinicians at point of care" },
        { term: "alert fatigue", definition: "Desensitization to warnings from excessive or low-priority alerts" },
      ],
      clinicalNotes: "PROMIS CAT measures enable precise assessment with reduced patient burden. Digital phenotyping complements but does not replace patient-reported symptoms. Alert thresholds require calibration to avoid fatigue while maintaining sensitivity. Consider equity in technology-dependent tracking approaches.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art symptom tracking leverages multi-modal data integration, artificial intelligence, and learning health system frameworks to enable personalized, predictive, and equitable chronic disease management through continuous patient-generated health data analysis.",
      explanation: `**Evolution of Symptom Science:**

Symptom tracking has evolved from periodic assessment to continuous monitoring:
- Point-in-time measures → Continuous data streams
- Patient recall → Real-time capture
- Single-source data → Multi-modal integration
- Population averages → Individual trajectories
- Reactive care → Predictive intervention

**Advanced Measurement Paradigms:**

*Experience Sampling Methods:*
- Time-based sampling
- Event-contingent recording
- Signal-contingent assessment
- Intensive longitudinal designs

*PROMIS Framework:*
- Domain coverage (physical, mental, social)
- Calibrated item banks
- Computer adaptive testing
- Linking to legacy measures
- Multilingual availability

**Multi-Modal Symptom Phenotyping:**

*Data Integration Architecture:*
\`\`\`
Patient-Reported Outcomes
          ↓
    ┌─────┴─────┐
    │           │
Active Data   Passive Data
(PROs)        (Sensors)
    │           │
    └─────┬─────┘
          ↓
  Data Harmonization
          ↓
  Feature Extraction
          ↓
  Predictive Modeling
          ↓
  Clinical Application
\`\`\`

*Sensor-Derived Biomarkers:*
- Accelerometry for activity and sleep
- Heart rate variability for stress
- Gait analysis for mobility
- Voice features for mood
- Keystroke dynamics for cognition

**Artificial Intelligence Applications:**

*Machine Learning Approaches:*
- Pattern recognition in symptom data
- Anomaly detection for exacerbations
- Predictive modeling for deterioration
- Natural language processing of narratives
- Personalized threshold optimization

*AI-Enhanced Clinical Decision Support:*
- Predictive alerts
- Risk stratification
- Treatment response prediction
- Personalized recommendations
- Outcome forecasting

**Learning Health System Integration:**

*Continuous Improvement Cycle:*
1. Data generation through symptom tracking
2. Aggregation and analysis
3. Evidence generation
4. Knowledge translation
5. Practice improvement
6. Outcome measurement
7. Iteration

*Population Health Applications:*
- Syndromic surveillance
- Comparative effectiveness
- Quality benchmarking
- Real-world evidence
- Health services research

**Health Equity Framework:**

*Digital Divide Considerations:*
- Technology access disparities
- Broadband availability
- Device ownership
- Digital literacy
- Language barriers

*Equity-Centered Design:*
- Multi-modal data collection options
- Plain language and visual scales
- Community-partnered development
- Cultural adaptation
- Affordable technology solutions

**Ethical and Regulatory Considerations:**

*Data Governance:*
- Patient data ownership
- Consent for data use
- Privacy protections
- Secondary use policies
- Right to deletion

*Algorithmic Fairness:*
- Bias assessment
- Diverse training data
- Performance equity monitoring
- Transparency requirements
- Explainability standards

**Future Directions:**

*Emerging Technologies:*
- Continuous glucose-like symptom monitors
- Ingestible sensors
- Smart environment sensing
- Brain-computer interfaces
- Molecular symptom markers

*Research Priorities:*
- Validation of digital biomarkers
- Optimal sampling strategies
- AI model explainability
- Implementation effectiveness
- Equity impact assessment`,
      keyTerms: [
        { term: "learning health system", definition: "Healthcare system that systematically uses data to generate knowledge and continuously improve care" },
        { term: "digital biomarker", definition: "Objective, quantifiable physiological or behavioral measure collected via digital devices" },
        { term: "experience sampling method", definition: "Research approach collecting data repeatedly in real-time as people go about their lives" },
        { term: "algorithmic fairness", definition: "Ensuring AI systems perform equitably across different patient populations" },
        { term: "federated learning", definition: "Machine learning approach analyzing distributed data without centralizing sensitive information" },
      ],
      clinicalNotes: "AI-enhanced symptom tracking requires ongoing validation and human oversight. Address equity explicitly in digital health implementation. Consider the full data lifecycle including storage, analysis, and disposal. Patient partnership in design improves acceptability and outcomes. Balance innovation with evidence requirements.",
    },
  },

  media: [
    {
      id: "symptom-diary-template",
      type: "diagram",
      filename: "symptom-diary-printable.pdf",
      title: "Printable Symptom Diary",
      description: "Easy-to-use daily symptom tracking template",
    },
    {
      id: "pain-scale-visual",
      type: "diagram",
      filename: "pain-scale.svg",
      title: "Visual Pain Scale",
      description: "Illustrated 0-10 pain scale for consistent rating",
    },
  ],

  citations: [
    {
      id: "promis-resource",
      type: "website",
      title: "PROMIS Health Measures",
      source: "HealthMeasures",
      url: "https://www.healthmeasures.net/explore-measurement-systems/promis",
    },
    {
      id: "symptom-tracking-review",
      type: "article",
      title: "Patient-Reported Outcomes in Chronic Disease Management",
      source: "Journal of General Internal Medicine",
    },
  ],

  crossReferences: [
    { targetId: "chronic-disease-symptom-monitoring", targetType: "topic", relationship: "related", label: "Symptom Monitoring" },
    { targetId: "chronic-disease-action-plans", targetType: "topic", relationship: "related", label: "Action Plans" },
    { targetId: "chronic-disease-provider-communication", targetType: "topic", relationship: "related", label: "Provider Communication" },
  ],

  tags: {
    systems: ["general health"],
    topics: ["self-management", "chronic disease", "patient education"],
    keywords: ["symptom tracking", "symptom diary", "patient-reported outcomes", "health monitoring"],
    clinicalRelevance: "high",
  },

  createdAt: "2025-01-24T00:00:00.000Z",
  updatedAt: "2025-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
  contributors: ["Biological Self Content Team"],
};
