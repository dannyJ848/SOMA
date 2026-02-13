/**
 * Warning Signs Recognition - Self-Management Skills
 *
 * Teaching patients to identify warning signs that require
 * medical attention in chronic disease management.
 */

import { EducationalContent } from '../../types';

export const WARNING_SIGNS: EducationalContent = {
  id: 'chronic-disease-warning-signs',
  type: 'concept',
  name: 'Warning Signs Recognition',
  alternateNames: ['Red flag symptoms', 'Alert symptoms', 'When to seek care'],

  levels: {
    1: {
      level: 1,
      summary: 'Learning to spot warning signs helps you know when to call your doctor or get emergency help right away.',
      explanation: `**What Are Warning Signs?**
Warning signs are changes in how you feel that mean something might be wrong. They tell you it's time to get help.

**Why Is This Important?**
When you have a chronic illness:
- Your body sometimes gives you signals that things are getting worse
- Catching problems early often means easier treatment
- Knowing when to get help can save your life

**Types of Warning Signs:**

*Mild Warning Signs (Call your doctor soon):*
- Symptoms that are a little worse than usual
- New symptoms that don't go away
- Feeling "off" but can still do daily activities

*Serious Warning Signs (Call your doctor today):*
- Symptoms much worse than normal
- Symptoms that don't get better with your usual treatments
- Trouble doing normal activities

*Emergency Warning Signs (Call 911 or go to ER):*
- Chest pain or pressure
- Trouble breathing
- Sudden confusion
- Fainting or passing out
- Severe pain
- Signs of stroke (face drooping, arm weakness, speech problems)

**What To Do:**
1. **Know your baseline** - What is normal for you?
2. **Watch for changes** - Notice when things are different
3. **Have a plan** - Know who to call and when
4. **Don't wait** - When in doubt, get checked out

**Tip:** Keep a list of emergency numbers on your refrigerator and in your phone!`,
      keyTerms: [
        { term: 'warning sign', definition: 'A symptom or change that tells you something might be wrong' },
        { term: 'emergency', definition: 'A serious situation that needs immediate medical help' },
        { term: 'baseline', definition: 'How you normally feel on a regular day' },
      ],
      analogies: [
        'Warning signs are like the warning lights on your car dashboard - they tell you to pay attention before something breaks.',
        'Your body has an alarm system that alerts you when something needs fixing.',
      ],
      examples: [
        'Maria has heart failure. Her warning signs include sudden weight gain and swollen ankles, which mean she should call her doctor.',
        'John has diabetes. Very high or very low blood sugar readings are warning signs for him.',
      ],
    },
    2: {
      level: 2,
      summary: 'Recognizing warning signs involves understanding the difference between expected symptoms, signs of worsening disease, and emergencies requiring immediate medical attention.',
      explanation: `**Understanding Warning Signs:**

Warning signs indicate a change in your health status that may require medical intervention. Learning to recognize and respond appropriately to these signs is a critical self-management skill.

**Categories of Warning Signs:**

*1. Disease-Specific Warning Signs:*
Each chronic condition has its own set of warning signs:

| Condition | Warning Signs |
|-----------|---------------|
| Diabetes | Very high/low blood sugar, confusion, extreme thirst |
| Heart Failure | Sudden weight gain, increased swelling, shortness of breath at rest |
| COPD | Increased mucus, change in mucus color, worsening breathlessness |
| Kidney Disease | Swelling, decreased urination, blood in urine |

*2. General Warning Signs:*
- Fever or chills
- Unexplained weight changes
- Severe fatigue
- Persistent pain
- Changes in consciousness

**The "Traffic Light" System:**

*Green Zone (All Clear):*
- Symptoms at your usual baseline
- Medications working as expected
- Continue normal routine

*Yellow Zone (Caution):*
- Symptoms worse than baseline
- Some difficulty with usual activities
- Contact your healthcare provider

*Red Zone (Emergency):*
- Severe symptoms
- Symptoms not responding to treatment
- Seek immediate medical care

**Creating Your Personal Action Plan:**

1. List your normal symptoms and their usual severity
2. Identify what makes symptoms better or worse
3. Know your specific warning signs
4. Have clear steps for each warning level
5. Keep emergency contacts accessible

**When to Call 911:**
- Chest pain or pressure lasting more than a few minutes
- Difficulty breathing or shortness of breath at rest
- Sudden severe headache
- Sudden numbness or weakness (especially on one side)
- Loss of consciousness
- Severe allergic reactions
- Uncontrolled bleeding`,
      keyTerms: [
        { term: 'exacerbation', definition: 'A flare-up or worsening of chronic disease symptoms' },
        { term: 'decompensation', definition: 'When the body can no longer compensate for disease, causing symptoms to worsen' },
        { term: 'action plan', definition: 'A written plan describing what to do when symptoms change' },
        { term: 'triage', definition: 'Deciding the urgency of symptoms and appropriate level of care' },
      ],
      analogies: [
        'Warning signs work like a fire alarm system - some are smoke detectors (early warnings) and some are fire alarms (emergencies).',
      ],
    },
    3: {
      level: 3,
      summary: 'Warning sign recognition requires understanding disease pathophysiology, distinguishing between symptom progression and acute decompensation, and implementing systematic triage protocols for chronic disease management.',
      explanation: `**Clinical Framework for Warning Signs:**

Warning signs in chronic disease represent either gradual disease progression or acute decompensation requiring different clinical responses.

**Pathophysiological Basis of Warning Signs:**

*Hemodynamic Warning Signs:*
- Orthostatic symptoms (hypovolemia, autonomic dysfunction)
- Edema (fluid overload, venous insufficiency)
- Dyspnea (pulmonary congestion, airway obstruction)

*Metabolic Warning Signs:*
- Altered mental status (hypoglycemia, hyperglycemia, uremia)
- Fatigue (anemia, electrolyte imbalance)
- Nausea/vomiting (gastroparesis, toxin accumulation)

*Infectious Warning Signs:*
- Fever patterns
- Localized inflammation
- Sepsis indicators

**Disease-Specific Warning Sign Protocols:**

*Diabetes Warning Signs:*
| Sign | Possible Cause | Action |
|------|----------------|--------|
| BG < 70 mg/dL | Hypoglycemia | Follow 15-15 rule, contact provider if recurrent |
| BG > 250 mg/dL with ketones | DKA risk | Contact provider immediately |
| New foot wound | Neuropathic ulcer | Same-day evaluation |
| Vision changes | Retinopathy progression | Urgent ophthalmology referral |

*Heart Failure Warning Signs:*
| Sign | Possible Cause | Action |
|------|----------------|--------|
| Weight gain > 3 lbs/day or 5 lbs/week | Fluid retention | Contact provider, adjust diuretics |
| New or worsening edema | Decompensation | Contact provider same day |
| Dyspnea at rest or orthopnea | Pulmonary congestion | Urgent evaluation |
| Chest pain | Ischemia | Emergency evaluation |

**Systematic Assessment Approach:**

*ABCDE Assessment:*
- **A**irway: Patent, maintained?
- **B**reathing: Rate, effort, oxygen saturation
- **C**irculation: Pulse, blood pressure, perfusion
- **D**isability: Mental status, neurological function
- **E**xposure: Complete assessment, vital signs

**Patient Education Components:**

*Self-Monitoring Skills:*
- Vital sign measurement
- Symptom quantification
- Pattern recognition
- Documentation requirements

*Decision-Making Framework:*
1. Recognize symptom change
2. Assess severity using personal baselines
3. Implement initial self-management
4. Determine need for professional evaluation
5. Execute appropriate action plan

**Communication with Healthcare Team:**

*Effective Reporting:*
- Specific symptom description
- Timeline of changes
- Self-management actions taken
- Current vital signs if available
- Medication changes or adherence issues`,
      keyTerms: [
        { term: 'acute decompensation', definition: 'Sudden worsening of chronic disease when compensatory mechanisms fail' },
        { term: 'prodrome', definition: 'Early symptoms that precede the full development of a disease exacerbation' },
        { term: 'sentinel event', definition: 'A significant change in symptoms that signals disease progression or complications' },
        { term: 'clinical deterioration', definition: 'Progressive worsening of physiological status that may require escalation of care' },
      ],
      clinicalNotes: 'Patient education should include written action plans with specific numeric thresholds when possible. Consider health literacy when developing patient materials. Involve family members or caregivers in warning sign education.',
    },
    4: {
      level: 4,
      summary: 'Warning sign recognition integrates symptom science, clinical deterioration prediction models, and patient self-management frameworks to enable early intervention and prevent adverse outcomes in chronic disease.',
      explanation: `**Theoretical Framework:**

Warning signs represent the clinical manifestation of pathophysiological decompensation. Understanding the underlying mechanisms enables more precise identification and earlier intervention.

**Pathophysiology of Clinical Deterioration:**

*Compensatory Mechanisms:*
The body maintains homeostasis through multiple compensatory mechanisms:
- Neurohormonal activation (RAAS, sympathetic nervous system)
- Cardiac remodeling
- Renal sodium/water handling
- Respiratory compensation

*Decompensation Cascade:*
\`\`\`
Initial Insult
     ↓
Compensatory Response
     ↓
Subclinical Changes (biomarkers, subtle symptoms)
     ↓
Clinical Warning Signs
     ↓
Acute Decompensation
     ↓
Organ Dysfunction
\`\`\`

**Early Warning Score Systems:**

*Modified Early Warning Score (MEWS):*
Parameters assessed:
- Respiratory rate
- Heart rate
- Systolic blood pressure
- Temperature
- Level of consciousness

*National Early Warning Score (NEWS2):*
Additional parameters:
- Oxygen saturation
- Supplemental oxygen use
- Confusion assessment

**Predictive Modeling for Deterioration:**

*Clinical Prediction Rules:*
- CURB-65 for pneumonia severity
- HEART score for chest pain
- TIMI risk score for acute coronary syndrome
- APACHE for critical illness

*Machine Learning Approaches:*
- Pattern recognition in vital signs
- Anomaly detection algorithms
- Prediction of hospital readmission
- Risk stratification models

**Self-Management Support Frameworks:**

*Chronic Care Model Integration:*
- Productive patient-provider interactions
- Decision support integration
- Self-management support systems
- Clinical information systems

*Health Belief Model Application:*
- Perceived susceptibility to complications
- Perceived severity of warning signs
- Perceived benefits of early action
- Perceived barriers to seeking care
- Self-efficacy in symptom recognition

**Biomarker Integration:**

*Point-of-Care Testing:*
- Glucose monitoring (continuous and intermittent)
- BNP/NT-proBNP for heart failure
- INR for anticoagulation
- Pulse oximetry

*Remote Monitoring Integration:*
- Implantable device alerts
- Weight telemonitoring
- Blood pressure transmission
- Symptom questionnaire responses

**Implementation Considerations:**

*Alert Fatigue Mitigation:*
- Appropriate threshold setting
- Personalized baselines
- Hierarchical alert systems
- Actionable alert design

*Care Coordination:*
- Clear escalation pathways
- Communication protocols
- Documentation standards
- Follow-up mechanisms`,
      keyTerms: [
        { term: 'early warning score', definition: 'Standardized scoring system using vital signs to identify patients at risk of deterioration' },
        { term: 'compensatory reserve', definition: 'The body\'s remaining capacity to maintain homeostasis before decompensation occurs' },
        { term: 'biomarker', definition: 'Measurable indicator of biological state that may signal disease activity or progression' },
        { term: 'alert fatigue', definition: 'Desensitization to warnings from excessive or non-actionable alerts' },
        { term: 'prodromal phase', definition: 'Period of early symptoms before full manifestation of acute illness or exacerbation' },
      ],
      clinicalNotes: 'Early warning scores validated in hospital settings may need adaptation for home monitoring. Consider the trade-off between sensitivity and specificity when setting alert thresholds. Patient-specific baselines improve the positive predictive value of warning signs.',
    },
    5: {
      level: 5,
      summary: 'Advanced warning sign recognition leverages multi-modal data integration, artificial intelligence, and precision medicine approaches to enable predictive, personalized, and proactive chronic disease management.',
      explanation: `**Evolution of Warning Sign Detection:**

Contemporary approaches move beyond reactive symptom recognition toward predictive systems that identify deterioration before clinical manifestation.

**Multi-Modal Data Integration:**

*Data Streams for Warning Sign Detection:*
\`\`\`
Clinical Data                  Patient-Generated Data
  ↓                                     ↓
EHR Data ────────────────── Symptom Reports
Lab Values ────────────────── Vital Signs
Imaging ────────────────── Activity Data
Medications ────────────────── Sleep Data
     ↓                                     ↓
         Integration Platform
              ↓
         Feature Engineering
              ↓
         Predictive Models
              ↓
         Clinical Decision Support
\`\`\`

*Digital Phenotyping:*
- Passive smartphone sensing
- Voice biomarkers
- Gait analysis
- Behavioral patterns
- Circadian rhythm disruption

**Artificial Intelligence in Warning Sign Detection:**

*Current Applications:*
- Supervised learning for outcome prediction
- Unsupervised learning for anomaly detection
- Deep learning for complex pattern recognition
- Natural language processing for symptom extraction

*Advanced Algorithms:*
\`\`\`
Recurrent Neural Networks (RNN/LSTM):
- Temporal pattern recognition
- Sequence prediction
- Variable-length input handling

Attention Mechanisms:
- Focus on relevant features
- Interpretability enhancement
- Multi-scale temporal analysis

Transformer Architectures:
- Long-range dependencies
- Parallel processing
- Transfer learning capabilities
\`\`\`

**Precision Medicine Approaches:**

*Individualized Warning Thresholds:*
- Genetic risk stratification
- Biomarker-based phenotyping
- Machine learning personalization
- Dynamic threshold adjustment

*N-of-1 Clinical Decision Support:*
- Individual patient modeling
- Adaptive learning algorithms
- Personalized alert systems
- Context-aware recommendations

**Implementation Science:**

*Rapid Cycle Evaluation:*
- Continuous performance monitoring
- A/B testing of interventions
- Pragmatic trial designs
- Quality improvement integration

*Health System Integration:*
- Epic/Cerner integration strategies
- CDS Hook implementation
- FHIR-based data exchange
- Interoperability standards

**Equity Considerations:**

*Algorithmic Fairness:*
- Bias detection in predictive models
- Validation across populations
- Equitable access to monitoring technology
- Social determinants integration

*Digital Divide Mitigation:*
- Low-tech alternatives
- Community health worker integration
- Phone-based monitoring options
- Culturally appropriate materials

**Emerging Technologies:**

*Internet of Medical Things (IoMT):*
- Implantable sensors
- Smart home integration
- Ambient monitoring
- Continuous biomarker measurement

*Federated Learning:*
- Privacy-preserving model training
- Multi-institution collaboration
- Rare event detection
- Generalizability improvement

**Regulatory and Ethical Frameworks:**

*FDA Guidance:*
- Clinical Decision Support Software
- Artificial Intelligence/Machine Learning
- Software as Medical Device (SaMD)
- Real-World Evidence standards

*Ethical Considerations:*
- Transparency in AI decision-making
- Patient autonomy and informed consent
- Liability for algorithmic recommendations
- Data ownership and privacy

**Future Directions:**

*Research Priorities:*
- Prospective validation of AI models
- Optimal human-AI collaboration
- Implementation across care settings
- Long-term outcome evaluation

*Clinical Applications:*
- Predictive hospital admission prevention
- Just-in-time adaptive interventions
- Virtual health coaching
- Automated care escalation`,
      keyTerms: [
        { term: 'digital phenotyping', definition: 'Using digital device data to characterize individual health patterns and predict clinical outcomes' },
        { term: 'federated learning', definition: 'Machine learning approach enabling model training across institutions without sharing patient data' },
        { term: 'just-in-time adaptive intervention', definition: 'Personalized, context-sensitive support delivered at optimal moments via mobile technology' },
        { term: 'algorithmic fairness', definition: 'Ensuring predictive models perform equitably across different demographic groups' },
        { term: 'clinical decision support', definition: 'Computer-based systems providing clinicians with patient-specific recommendations' },
        { term: 'software as medical device', definition: 'Software intended for medical purposes subject to regulatory oversight' },
      ],
      clinicalNotes: 'AI-based warning systems require validation across diverse populations before clinical deployment. Consider "explainability" when selecting algorithms for clinical use. Regulatory pathways for adaptive algorithms are evolving; maintain awareness of current FDA guidance. Human oversight remains essential for AI-generated clinical alerts.',
    },
  },

  media: [
    {
      id: 'warning-signs-traffic-light',
      type: 'diagram',
      filename: 'warning-signs-traffic-light.svg',
      title: 'Traffic Light System for Warning Signs',
      description: 'Visual guide showing green, yellow, and red zone symptoms',
    },
    {
      id: 'emergency-card-template',
      type: 'diagram',
      filename: 'emergency-card-template.pdf',
      title: 'Emergency Information Card Template',
      description: 'Wallet card for emergency contact information and key health data',
    },
  ],

  citations: [
    {
      id: 'ews-review',
      type: 'article',
      title: 'Early Warning Scores in Adult Hospital Patients',
      source: 'Critical Care Medicine',
    },
    {
      id: 'chronic-care-model',
      type: 'article',
      title: 'The Chronic Care Model',
      source: 'Health Affairs',
      authors: ['Wagner EH'],
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-symptom-monitoring', targetType: 'topic', relationship: 'related', label: 'Symptom Monitoring' },
    { targetId: 'chronic-disease-provider-communication', targetType: 'topic', relationship: 'related', label: 'Provider Communication' },
    { targetId: 'chronic-disease-action-plans', targetType: 'topic', relationship: 'related', label: 'Action Plans' },
  ],

  tags: {
    systems: ['general health'],
    topics: ['self-management', 'chronic disease', 'patient education', 'emergency care'],
    keywords: ['warning signs', 'red flags', 'when to seek care', 'emergency symptoms', 'clinical deterioration'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
