/**
 * Symptom Monitoring - Self-Management Skills
 *
 * Teaching patients to effectively track and communicate symptoms
 * for better chronic disease management.
 */

import { EducationalContent } from '../../types';

export const SYMPTOM_MONITORING: EducationalContent = {
  id: 'chronic-disease-symptom-monitoring',
  type: 'concept',
  name: 'Symptom Monitoring',
  alternateNames: ['Symptom tracking', 'Self-monitoring', 'Symptom diary'],

  levels: {
    1: {
      level: 1,
      summary: 'Keeping track of how you feel each day helps you and your doctor understand your health better and catch problems early.',
      explanation: `**What Is Symptom Monitoring?**
Symptom monitoring means paying attention to how your body feels and writing it down. It's like keeping a diary about your health!

**Why Does It Matter?**
When you track your symptoms:
- You notice patterns (like feeling worse at certain times)
- You can tell your doctor exactly what's happening
- You catch problems before they get serious
- You can see if your treatments are working

**What Should You Track?**
Write down:
- What symptoms you have (pain, tiredness, shortness of breath)
- How bad they are (mild, medium, or severe)
- When they happen (morning, after meals, during activity)
- What makes them better or worse
- How long they last

**Simple Ways to Track:**
1. **Paper diary** - Write in a notebook each day
2. **Calendar** - Mark symptoms on your calendar
3. **Phone apps** - Use health tracking apps
4. **Rating scale** - Rate symptoms 1-10 each day

**Example Symptom Diary Entry:**
- Date: Monday, January 15
- Energy level: 5/10 (medium)
- Shortness of breath: Yes, when climbing stairs
- Pain: Mild back pain in morning, gone by noon
- Sleep: 6 hours, woke up twice

**Tip:** Pick a regular time each day to write in your diary, like after dinner. This makes it easier to remember!`,
      keyTerms: [
        { term: 'symptom', definition: 'Something you feel that tells you something might be wrong, like pain or tiredness' },
        { term: 'monitoring', definition: 'Watching or checking something regularly over time' },
        { term: 'symptom diary', definition: 'A daily record of how you feel and any symptoms you have' },
      ],
      analogies: [
        'Tracking symptoms is like keeping a weather log - you write down what happens each day so you can see patterns over time.',
        'Your symptom diary is like a health report card that shows how you are doing week by week.',
      ],
      examples: [
        'Sarah tracks her fatigue level each day and notices she feels most tired on days when she skips breakfast.',
        'Tom writes down when he feels short of breath and sees it happens mostly when he climbs more than one flight of stairs.',
      ],
    },
    2: {
      level: 2,
      summary: 'Systematic symptom monitoring enables patients to identify patterns, triggers, and early warning signs, providing valuable information for healthcare providers to optimize treatment plans.',
      explanation: `**The Importance of Symptom Monitoring:**

Chronic diseases often have symptoms that change over time. By tracking your symptoms regularly, you become an active partner in your healthcare.

**Components of Effective Symptom Tracking:**

*1. What to Record:*
- **Symptom type** - Specific description (sharp vs. dull pain, productive vs. dry cough)
- **Intensity** - Use consistent scale (0-10, mild/moderate/severe)
- **Duration** - How long the symptom lasts
- **Frequency** - How often it occurs
- **Location** - Where you feel it (if applicable)
- **Associated factors** - Activities, foods, stress, weather

*2. Context Information:*
- Time of day
- Activity level
- Medications taken
- Diet/fluid intake
- Sleep quality
- Emotional state

**Common Symptom Tracking Tools:**

| Tool Type | Pros | Cons |
|-----------|------|------|
| Paper diary | Simple, no technology needed | Easy to forget, harder to analyze |
| Smartphone apps | Reminders, graphs, easy to share | Need device, learning curve |
| Wearable devices | Automatic tracking, continuous data | Cost, may track limited symptoms |
| Online portals | Connects to medical records | Need internet, privacy concerns |

**Identifying Patterns:**

Look for connections between:
- Symptoms and specific activities
- Time of day and symptom severity
- Diet and how you feel
- Weather changes and symptoms
- Medication timing and symptom control

**Communication with Healthcare Providers:**

When meeting with your doctor:
1. Bring your symptom log
2. Highlight significant changes
3. Note any new symptoms
4. Describe what helps and what makes symptoms worse
5. Ask about symptoms that concern you

**Red Flag Symptoms to Report Immediately:**
- Sudden severe symptoms
- New symptoms you've never had
- Symptoms much worse than usual
- Symptoms that don't respond to usual treatments`,
      keyTerms: [
        { term: 'symptom intensity', definition: 'How strong or severe a symptom feels, usually rated on a scale' },
        { term: 'trigger', definition: 'Something that causes or worsens a symptom' },
        { term: 'pattern recognition', definition: 'Identifying consistent relationships between symptoms and other factors' },
        { term: 'red flag symptom', definition: 'A warning sign that requires immediate medical attention' },
      ],
      analogies: [
        'Symptom tracking is like being a detective for your own health - you gather clues to solve the mystery of what makes you feel better or worse.',
      ],
    },
    3: {
      level: 3,
      summary: 'Patient-reported outcome measures and structured symptom monitoring provide quantitative data for disease progression assessment, treatment response evaluation, and shared decision-making in chronic disease management.',
      explanation: `**Clinical Framework for Symptom Monitoring:**

Symptom monitoring in chronic disease serves multiple purposes:
- Tracking disease activity and progression
- Evaluating treatment effectiveness
- Detecting complications early
- Facilitating patient-provider communication
- Supporting shared decision-making

**Patient-Reported Outcome Measures (PROMs):**

*Generic Instruments:*
- SF-36/SF-12 (overall health status)
- EQ-5D (health-related quality of life)
- PHQ-9 (depression screening)
- GAD-7 (anxiety screening)

*Disease-Specific Instruments:*

| Condition | Assessment Tool | What It Measures |
|-----------|-----------------|------------------|
| Diabetes | PAID (Problem Areas in Diabetes) | Diabetes-related distress |
| Heart Failure | KCCQ (Kansas City Cardiomyopathy) | HF-specific quality of life |
| COPD | CAT (COPD Assessment Test) | Respiratory symptoms and impact |
| Chronic Pain | BPI (Brief Pain Inventory) | Pain intensity and interference |
| CKD | KDQOL (Kidney Disease Quality of Life) | CKD-related symptoms and QOL |

**Structured Monitoring Protocols:**

*Components:*
1. **Baseline assessment** - Document symptom status at diagnosis/treatment initiation
2. **Regular scheduled assessments** - Weekly/monthly depending on disease stability
3. **Event-driven assessments** - After changes in treatment or health status
4. **Trend analysis** - Compare current to previous assessments

*Data Collection Considerations:*
- Standardized timing (same time of day, same conditions)
- Consistent measurement tools
- Contextual documentation
- Electronic vs. paper capture

**Technology in Symptom Monitoring:**

*Remote Patient Monitoring (RPM):*
- Integration with electronic health records
- Automated alerts for concerning values
- Patient engagement features
- Telehealth integration

*Mobile Health (mHealth) Applications:*
- Real-time symptom logging
- Medication reminders
- Trend visualization
- Secure messaging with care team

**Clinical Application of Symptom Data:**

*Treatment Adjustment Triggers:*
- Worsening symptom trends
- Failure to meet treatment targets
- New symptom onset
- Quality of life deterioration

*Documentation for Clinical Care:*
- Supports medication adjustments
- Informs specialist referrals
- Guides preventive interventions
- Enables goal-setting with patients`,
      keyTerms: [
        { term: 'patient-reported outcome measures (PROMs)', definition: 'Standardized questionnaires completed by patients to assess symptoms, function, and quality of life' },
        { term: 'remote patient monitoring', definition: 'Using technology to collect health data from patients outside traditional clinical settings' },
        { term: 'minimal clinically important difference (MCID)', definition: 'The smallest change in a measurement that represents meaningful improvement to patients' },
        { term: 'ecological momentary assessment', definition: 'Real-time symptom capture in patients\' natural environments' },
      ],
      clinicalNotes: 'Validated disease-specific instruments provide more clinically meaningful data than generic symptom diaries. Consider health literacy when selecting monitoring tools. Remote monitoring programs require clear protocols for responding to patient-reported data.',
    },
    4: {
      level: 4,
      summary: 'Evidence-based symptom monitoring integrates validated patient-reported outcome measures with objective clinical data, enabling precision medicine approaches to chronic disease management through predictive analytics and personalized intervention thresholds.',
      explanation: `**Theoretical Framework:**

Symptom monitoring bridges the gap between clinical encounters, providing continuous data on disease status. The biopsychosocial model recognizes symptoms as influenced by:
- Biological factors (disease activity, comorbidities)
- Psychological factors (mood, coping, health beliefs)
- Social factors (support systems, life stressors)

**Psychometric Properties of Symptom Measures:**

*Reliability Considerations:*
- **Test-retest reliability** - Consistency over time in stable conditions
- **Internal consistency** - Items measure same construct (Cronbach's alpha)
- **Inter-rater reliability** - Agreement between observers (for observer-rated)

*Validity Considerations:*
- **Content validity** - Measures what matters to patients
- **Construct validity** - Correlates with related measures
- **Criterion validity** - Predicts clinical outcomes
- **Responsiveness** - Detects meaningful change

**Advanced Monitoring Approaches:**

*Ecological Momentary Assessment (EMA):*
- Multiple daily symptom samples via smartphone
- Captures symptom variability and context
- Reduces recall bias
- Generates high-resolution temporal data
- Enables identification of dynamic symptom patterns

*Passive Data Collection:*
- Smartphone sensors (movement, location, voice)
- Wearable devices (activity, sleep, heart rate)
- Digital phenotyping
- Complements active symptom reports

**Predictive Analytics in Symptom Monitoring:**

*Machine Learning Applications:*
- Prediction of disease exacerbations
- Identification of at-risk patients
- Personalized symptom thresholds
- Treatment response prediction

*Clinical Decision Support:*
- Automated alerts based on symptom trajectories
- Risk stratification algorithms
- Treatment recommendation engines
- Population health surveillance

**Implementation Science Considerations:**

*Barriers to Effective Monitoring:*
- Patient burden and survey fatigue
- Health literacy and digital divide
- Clinician time for data review
- Integration with clinical workflows
- Privacy and data security

*Facilitators:*
- Patient education on monitoring benefits
- Automated data analysis
- EHR integration
- Care team protocols for data response
- Reimbursement for monitoring programs

**Quality Metrics:**

*Process Measures:*
- Monitoring completion rates
- Timeliness of clinical response
- Data quality and completeness

*Outcome Measures:*
- Symptom control trajectories
- Quality of life changes
- Healthcare utilization
- Patient satisfaction with care`,
      keyTerms: [
        { term: 'ecological momentary assessment', definition: 'Real-time, repeated symptom sampling in patients\' natural environments to capture dynamic patterns' },
        { term: 'digital phenotyping', definition: 'Using passive smartphone and wearable data to characterize health status and behavior' },
        { term: 'response shift', definition: 'Change in patient internal standards for symptom evaluation over time, affecting longitudinal comparisons' },
        { term: 'survey fatigue', definition: 'Declining participation and data quality with repeated assessments over time' },
        { term: 'clinically meaningful change', definition: 'Symptom change large enough to matter to patients or warrant treatment modification' },
      ],
      clinicalNotes: 'Consider response shift when interpreting longitudinal symptom data - patients may recalibrate their internal standards over time. EMA designs must balance data richness with patient burden. Digital phenotyping raises important privacy considerations that require clear informed consent.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art symptom monitoring leverages multi-modal data integration, artificial intelligence, and learning health system frameworks to enable personalized, predictive, and participatory chronic disease management.',
      explanation: `**Evolution of Symptom Science:**

Symptom monitoring has evolved from periodic clinical assessments to continuous, multi-modal data streams. Current frontiers include:
- N-of-1 trials using individual symptom trajectories
- Dynamic treatment regimes based on real-time symptom data
- Patient-generated health data integration
- Symptom clusters and network analysis

**Advanced Measurement Science:**

*Item Response Theory (IRT) Applications:*
- Computer adaptive testing (CAT)
- Precise measurement with fewer items
- Item banks allowing customization
- Cross-cultural comparability

*PROMIS (Patient-Reported Outcomes Measurement Information System):*
- NIH-funded, validated item banks
- Domain-specific measures (pain, fatigue, physical function)
- Short forms and CAT options
- Available in multiple languages
- Enables standardized outcome reporting

**Multi-Modal Symptom Phenotyping:**

*Data Integration Framework:*
\`\`\`
Patient-Reported Symptoms
         ↓
    Integration Layer ← Wearable Sensors
         ↓              ← EHR Data
    Feature Extraction  ← Environmental Data
         ↓              ← Genomic/Biomarker Data
    Predictive Models
         ↓
    Clinical Decision Support
\`\`\`

*Digital Biomarkers:*
- Gait patterns from smartphone accelerometers
- Voice analysis for respiratory and mood symptoms
- Keystroke dynamics for motor and cognitive symptoms
- Sleep architecture from wearables
- Activity patterns and circadian rhythms

**Artificial Intelligence in Symptom Analysis:**

*Current Applications:*
- Natural language processing of symptom narratives
- Anomaly detection for symptom exacerbations
- Personalized symptom thresholds
- Treatment response prediction
- Chatbots for symptom assessment

*Emerging Approaches:*
- Reinforcement learning for adaptive interventions
- Federated learning for privacy-preserving analytics
- Explainable AI for clinical interpretability
- Multi-task learning across symptom domains

**Learning Health System Framework:**

*Continuous Improvement Cycle:*
1. Data capture from symptom monitoring
2. Aggregation and analysis
3. Knowledge generation
4. Implementation of insights
5. Outcome evaluation
6. Refinement and iteration

*Population Health Applications:*
- Syndromic surveillance
- Quality improvement benchmarking
- Comparative effectiveness research
- Real-world evidence generation

**Ethical and Equity Considerations:**

*Data Governance:*
- Patient ownership of symptom data
- Transparency in algorithmic decision-making
- Right to explanation of AI recommendations
- Data security and breach protocols

*Digital Divide:*
- Disparities in technology access
- Health literacy considerations
- Language and cultural barriers
- Alternative monitoring options for underserved populations

**Future Directions:**

*Emerging Technologies:*
- Internet of Medical Things (IoMT)
- Ambient sensing in smart homes
- Microbiome-symptom correlations
- Precision symptom management based on "-omics" data

*Research Priorities:*
- Validation of digital biomarkers
- Optimal alert thresholds and algorithms
- Patient preferences for monitoring burden
- Implementation in diverse healthcare settings
- Long-term outcomes of monitoring-guided care

**Clinical Implementation:**

*Building Effective Programs:*
1. Define clinical goals and patient population
2. Select validated, patient-centered measures
3. Design workflow integration
4. Establish response protocols
5. Train care team members
6. Implement with patient education
7. Monitor program outcomes
8. Iterate based on experience`,
      keyTerms: [
        { term: 'PROMIS', definition: 'Patient-Reported Outcomes Measurement Information System; NIH initiative providing validated, standardized symptom measures' },
        { term: 'computer adaptive testing', definition: 'Assessment approach using algorithms to select items based on previous responses, improving precision and reducing burden' },
        { term: 'digital biomarker', definition: 'Objective, quantifiable physiological or behavioral measure collected via digital devices' },
        { term: 'learning health system', definition: 'Healthcare system where routine data generates knowledge that continuously improves care' },
        { term: 'federated learning', definition: 'Machine learning approach analyzing distributed data without centralizing sensitive patient information' },
        { term: 'N-of-1 trial', definition: 'Randomized trial within an individual patient to determine optimal treatment for that specific person' },
      ],
      clinicalNotes: 'PROMIS measures are increasingly used in research and clinical care for standardized symptom assessment. Digital biomarkers remain largely research tools; clinical validation is ongoing. Implement symptom monitoring programs with attention to health equity - technology-dependent approaches may exclude vulnerable populations. AI-assisted symptom analysis requires transparency about limitations and human oversight of clinical decisions.',
    },
  },

  media: [
    {
      id: 'symptom-diary-template',
      type: 'diagram',
      filename: 'symptom-diary-template.pdf',
      title: 'Printable Symptom Diary Template',
      description: 'Easy-to-use daily symptom tracking template for patients',
    },
    {
      id: 'symptom-app-comparison',
      type: 'diagram',
      filename: 'symptom-tracking-apps.svg',
      title: 'Symptom Tracking App Comparison',
      description: 'Overview of popular symptom tracking applications',
    },
  ],

  citations: [
    {
      id: 'promis-network',
      type: 'website',
      title: 'PROMIS Health Organization',
      source: 'HealthMeasures',
      url: 'https://www.healthmeasures.net/explore-measurement-systems/promis',
    },
    {
      id: 'rpm-aha',
      type: 'article',
      title: 'Remote Patient Monitoring in Heart Failure',
      source: 'American Heart Association Scientific Statement',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-warning-signs', targetType: 'topic', relationship: 'related', label: 'Warning Signs' },
    { targetId: 'chronic-disease-provider-communication', targetType: 'topic', relationship: 'related', label: 'Provider Communication' },
    { targetId: 'chronic-disease-medication-adherence', targetType: 'topic', relationship: 'related', label: 'Medication Adherence' },
  ],

  tags: {
    systems: ['general health'],
    topics: ['self-management', 'chronic disease', 'patient education'],
    keywords: ['symptom tracking', 'patient-reported outcomes', 'self-monitoring', 'chronic disease management'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
