/**
 * Lifestyle Modifications - Self-Management
 *
 * Evidence-based lifestyle changes for chronic disease
 * prevention and management.
 */

import { EducationalContent } from "../../types";

export const LIFESTYLE_MODIFICATIONS: EducationalContent = {
  id: "chronic-disease-lifestyle-modifications",
  type: "concept",
  name: "Lifestyle Modifications",
  alternateNames: ["Lifestyle changes", "Healthy habits", "Therapeutic lifestyle changes"],

  levels: {
    1: {
      level: 1,
      summary: "Making healthy changes to your daily habits like eating better, moving more, sleeping well, and managing stress can help control your chronic condition and help you feel better.",
      explanation: `**What Are Lifestyle Modifications?**
Lifestyle modifications are healthy changes you make to your daily habits. These changes can help you manage your chronic condition and feel better overall.

**The Big Four Lifestyle Changes:**

*1. Healthy Eating:*
- Eat more fruits and vegetables
- Choose whole grains over white bread and pasta
- Limit sugar, salt, and unhealthy fats
- Drink plenty of water
- Watch your portion sizes

*2. Physical Activity:*
- Move your body every day
- Start small if you are not active now
- Find activities you enjoy
- Aim for at least 30 minutes most days
- Include stretching and strengthening

*3. Quality Sleep:*
- Try to sleep 7-8 hours each night
- Go to bed and wake up at the same time
- Make your bedroom dark and quiet
- Avoid screens before bed
- Limit caffeine in the afternoon

*4. Stress Management:*
- Take breaks during the day
- Practice deep breathing
- Spend time doing things you enjoy
- Talk to friends and family
- Ask for help when you need it

**Other Important Habits:**

*Avoid Harmful Things:*
- Do not smoke or use tobacco
- Limit alcohol
- Avoid illegal drugs

*Stay Connected:*
- Keep up with social activities
- Stay in touch with family and friends
- Join support groups if helpful

**Starting Small:**

Pick one small change to start with:
- Add one vegetable to dinner
- Take a 10-minute walk
- Go to bed 15 minutes earlier
- Practice deep breathing for 5 minutes

**Making Changes Stick:**

1. Set realistic goals
2. Track your progress
3. Celebrate small wins
4. Get support from others
5. Be patient with yourself

**Tip:** You do not have to change everything at once. Small steps add up to big improvements over time!`,
      keyTerms: [
        { term: "lifestyle modification", definition: "A healthy change to your daily habits like eating, exercise, or sleep" },
        { term: "physical activity", definition: "Any movement that gets your body moving and uses energy" },
        { term: "stress management", definition: "Ways to handle and reduce the pressure and tension in your life" },
      ],
      analogies: [
        "Think of lifestyle changes like saving money - small deposits every day add up to big savings over time.",
        "Changing your lifestyle is like learning to play an instrument - it takes practice, but it gets easier and more rewarding over time.",
      ],
      examples: [
        "After his diabetes diagnosis, Carlos started taking a 15-minute walk after dinner each night and lost 10 pounds in 3 months.",
        "Maria reduced her blood pressure by eating less salt and practicing deep breathing when she feels stressed.",
      ],
    },
    2: {
      level: 2,
      summary: "Lifestyle modifications are evidence-based changes to diet, physical activity, sleep, and stress management that can prevent, treat, and manage chronic diseases as effectively as some medications.",
      explanation: `**The Evidence for Lifestyle Medicine:**

Research shows that lifestyle modifications can:
- Reduce blood pressure as much as medications
- Lower blood sugar and A1C levels
- Decrease heart disease risk by 80%
- Improve chronic pain
- Reduce depression and anxiety
- Help maintain a healthy weight

**Core Lifestyle Domains:**

*1. Nutrition:*
| Recommendation | Chronic Disease Impact |
|----------------|----------------------|
| Increase fruits/vegetables | Reduces heart disease, cancer risk |
| Choose whole grains | Improves diabetes control |
| Limit sodium | Lowers blood pressure |
| Reduce saturated fats | Decreases cholesterol |
| Increase fiber | Improves gut health, blood sugar |

*Dietary Patterns with Evidence:*
- Mediterranean diet
- DASH diet (for hypertension)
- Plant-forward eating
- Heart-healthy diet

*2. Physical Activity:*

| Type | Recommendation | Benefits |
|------|----------------|----------|
| Aerobic | 150 min/week moderate or 75 min vigorous | Heart, lungs, weight |
| Strength | 2 sessions/week | Muscles, bones, metabolism |
| Flexibility | Regular stretching | Mobility, injury prevention |
| Balance | Especially for older adults | Fall prevention |

*3. Sleep Hygiene:*
- 7-9 hours for adults
- Consistent schedule
- Dark, quiet, cool environment
- Limit screen time before bed
- Avoid caffeine after early afternoon

*Sleep and Chronic Disease:*
- Poor sleep worsens diabetes control
- Sleep apnea increases heart disease risk
- Inadequate sleep raises blood pressure
- Sleep affects pain perception and mood

*4. Stress Management:*

| Technique | How It Helps |
|-----------|--------------|
| Deep breathing | Activates relaxation response |
| Meditation/mindfulness | Reduces stress hormones |
| Physical activity | Natural stress reliever |
| Social connection | Provides support and perspective |
| Time in nature | Lowers cortisol |

**Behavior Change Strategies:**

*Setting Effective Goals:*
- Specific (what exactly will you do?)
- Measurable (how will you track it?)
- Achievable (can you realistically do this?)
- Relevant (does it matter to you?)
- Time-bound (when will you do it?)

*Overcoming Barriers:*
- Identify your obstacles
- Make a plan for each barrier
- Start with small, achievable steps
- Build on success
- Get support from others

**Special Considerations by Condition:**

*Diabetes:*
- Carbohydrate management
- Blood sugar monitoring with exercise
- Foot care awareness

*Heart Disease:*
- Sodium restriction
- Cardiac rehabilitation programs
- Activity guidelines from cardiologist

*COPD:*
- Pulmonary rehabilitation
- Breathing exercises
- Trigger avoidance

*Arthritis:*
- Low-impact activities
- Weight management
- Joint protection strategies`,
      keyTerms: [
        { term: "lifestyle medicine", definition: "Using evidence-based lifestyle changes as the primary treatment for chronic diseases" },
        { term: "DASH diet", definition: "Dietary Approaches to Stop Hypertension - an eating plan proven to lower blood pressure" },
        { term: "sleep hygiene", definition: "Habits and practices that promote good quality sleep" },
        { term: "SMART goals", definition: "Goals that are Specific, Measurable, Achievable, Relevant, and Time-bound" },
      ],
      analogies: [
        "Lifestyle modifications are like compound interest for your health - small consistent investments now pay off with big health dividends later.",
      ],
    },
    3: {
      level: 3,
      summary: "Therapeutic lifestyle changes represent first-line treatment for many chronic conditions, with evidence demonstrating effects comparable to pharmacotherapy for conditions including hypertension, diabetes, cardiovascular disease, and mood disorders.",
      explanation: `**Evidence Base for Lifestyle Interventions:**

*Comparative Effectiveness:*
| Condition | Lifestyle Effect | Medication Comparison |
|-----------|-----------------|----------------------|
| Hypertension | 10-15 mmHg SBP reduction | Equivalent to 1-2 drugs |
| Pre-diabetes | 58% diabetes prevention | Better than metformin |
| Depression | Moderate-large effect size | Comparable to antidepressants |
| Cardiovascular disease | 80% risk reduction | Greater than statin alone |

**Nutrition Prescriptions:**

*Mediterranean Diet Evidence:*
- 30% CVD event reduction
- Improved glycemic control
- Reduced inflammation
- Cognitive benefits
- Cancer risk reduction

*DASH Diet Specifications:*
- Fruits: 4-5 servings/day
- Vegetables: 4-5 servings/day
- Whole grains: 6-8 servings/day
- Low-fat dairy: 2-3 servings/day
- Lean protein: <6 oz/day
- Sodium: <2300 mg/day (ideal <1500 mg)

*Condition-Specific Nutrition:*

| Condition | Key Dietary Modifications |
|-----------|--------------------------|
| Diabetes | Carbohydrate distribution, glycemic index |
| Heart failure | Sodium and fluid restriction |
| CKD | Protein, phosphorus, potassium limits |
| Gout | Purine restriction, hydration |
| GERD | Trigger food avoidance, meal timing |

**Physical Activity Prescription:**

*American College of Sports Medicine Guidelines:*
- Moderate aerobic: 150-300 min/week
- Vigorous aerobic: 75-150 min/week
- Resistance training: 2-3 days/week
- Flexibility: 2-3 days/week
- Neuromotor exercise for older adults

*Exercise Prescription Components (FITT):*
- Frequency: How often
- Intensity: How hard
- Time: How long
- Type: What kind

*Condition-Specific Considerations:*
- Cardiac clearance when indicated
- Blood glucose monitoring for diabetes
- Joint protection for arthritis
- Breathing techniques for COPD
- Activity modification for pain

**Sleep Medicine:**

*Sleep Disorder Screening:*
- Obstructive sleep apnea (STOP-BANG)
- Insomnia (Insomnia Severity Index)
- Restless legs syndrome
- Circadian rhythm disorders

*Cognitive Behavioral Therapy for Insomnia (CBT-I):*
- Sleep restriction
- Stimulus control
- Cognitive restructuring
- Relaxation training
- Sleep hygiene education

**Stress and Mind-Body Interventions:**

*Evidence-Based Practices:*
| Intervention | Evidence Level | Applications |
|--------------|----------------|--------------|
| Mindfulness-based stress reduction | High | Chronic pain, anxiety, depression |
| Cognitive behavioral therapy | High | Multiple conditions |
| Yoga | Moderate | Cardiovascular, pain, mental health |
| Tai chi | Moderate | Balance, arthritis, falls prevention |
| Biofeedback | Moderate | Hypertension, headache, pain |

**Behavior Change Science:**

*Transtheoretical Model Stages:*
1. Precontemplation (not thinking about change)
2. Contemplation (considering change)
3. Preparation (getting ready to change)
4. Action (actively changing)
5. Maintenance (sustaining change)

*Motivational Interviewing Techniques:*
- Express empathy
- Develop discrepancy
- Roll with resistance
- Support self-efficacy`,
      keyTerms: [
        { term: "therapeutic lifestyle changes", definition: "Evidence-based lifestyle interventions prescribed as treatment for chronic diseases" },
        { term: "CBT-I", definition: "Cognitive Behavioral Therapy for Insomnia; first-line treatment for chronic insomnia" },
        { term: "FITT principle", definition: "Framework for exercise prescription: Frequency, Intensity, Time, Type" },
        { term: "transtheoretical model", definition: "Behavior change theory describing stages from precontemplation through maintenance" },
      ],
      clinicalNotes: "Lifestyle interventions should be first-line for many chronic conditions. Consider cardiac clearance before vigorous exercise in high-risk patients. CBT-I is preferred over medication for chronic insomnia. Match intervention intensity to patient readiness for change.",
    },
    4: {
      level: 4,
      summary: "Lifestyle medicine applies evidence-based behavioral interventions across nutrition, physical activity, sleep, stress management, and social connection domains as primary and adjunctive treatment for chronic disease, utilizing validated behavior change methodologies and multi-disciplinary care models.",
      explanation: `**Lifestyle Medicine Framework:**

*Six Pillars (American College of Lifestyle Medicine):*
1. Whole-food, plant-predominant nutrition
2. Regular physical activity
3. Restorative sleep
4. Stress management
5. Avoidance of risky substances
6. Positive social connections

*Dose-Response Relationships:*
\`\`\`
Lifestyle Behavior Intensity
         ↓
    Biological Response
         ↓
    Clinical Outcome
         ↓
    Disease Modification
\`\`\`

**Advanced Nutrition Science:**

*Metabolic Effects of Dietary Patterns:*
| Mechanism | Dietary Approach |
|-----------|-----------------|
| Inflammation reduction | Mediterranean, anti-inflammatory |
| Insulin sensitivity | Low glycemic, time-restricted eating |
| Microbiome optimization | High fiber, fermented foods |
| Oxidative stress reduction | Plant-based, antioxidant-rich |
| Lipid modification | Portfolio diet, Mediterranean |

*Medical Nutrition Therapy Referral Criteria:*
- Diabetes (all types)
- Cardiovascular disease
- Chronic kidney disease
- Eating disorders
- Malnutrition
- Bariatric surgery
- Multiple chronic conditions

**Exercise as Medicine:**

*Pathophysiological Benefits:*
- Improved insulin sensitivity
- Anti-inflammatory effects
- Endothelial function enhancement
- Cardiac remodeling
- Neuroplasticity promotion
- Bone density maintenance
- Immune function modulation

*Clinical Exercise Testing Indications:*
- Coronary artery disease
- Heart failure (before exercise program)
- High-risk patients beginning vigorous exercise
- Unexplained exercise intolerance
- Valvular heart disease
- Pulmonary hypertension

*Exercise Prescription Precision:*
| Variable | Assessment Method |
|----------|------------------|
| Baseline fitness | Exercise testing, 6MWT, functional assessment |
| Appropriate intensity | Heart rate reserve, RPE, talk test |
| Progression | 10% rule, symptom-limited |
| Monitoring | HR monitoring, symptom logs |

**Sleep Medicine Integration:**

*Obstructive Sleep Apnea Management:*
- CPAP therapy
- Weight loss (if applicable)
- Positional therapy
- Oral appliances
- Upper airway surgery (selected cases)

*Circadian Medicine:*
- Light exposure optimization
- Melatonin timing
- Shift work strategies
- Chronotype consideration
- Time-restricted eating alignment

**Psychological and Social Interventions:**

*Mental Health Integration:*
- Depression and chronic disease bidirectionality
- Anxiety management in chronic conditions
- Trauma-informed care
- Substance use disorder screening
- Social isolation assessment

*Social Determinants of Health:*
- Food security
- Housing stability
- Transportation access
- Social support networks
- Healthcare access

**Behavior Change Implementation:**

*Multi-level Intervention Design:*
\`\`\`
Individual Level
(Education, Counseling)
        ↓
Interpersonal Level
(Family, Social Support)
        ↓
Organizational Level
(Healthcare System, Workplace)
        ↓
Community Level
(Environment, Policy)
\`\`\`

*Intensive Lifestyle Intervention Programs:*
- Diabetes Prevention Program (DPP)
- Ornish Program (heart disease reversal)
- CHIP (Complete Health Improvement Program)
- Pritikin Longevity Center
- Cardiac rehabilitation

**Quality Metrics:**

*Process Measures:*
- Lifestyle assessment documentation
- Referral rates (nutrition, exercise)
- Goal-setting documentation
- Follow-up completion

*Outcome Measures:*
- Biometric improvements (weight, BP, A1C)
- Physical activity levels
- Dietary quality scores
- Quality of life measures
- Healthcare utilization`,
      keyTerms: [
        { term: "lifestyle medicine", definition: "Medical specialty using lifestyle interventions as primary treatment for chronic diseases" },
        { term: "medical nutrition therapy", definition: "Nutrition-based treatment provided by registered dietitians for disease management" },
        { term: "intensive lifestyle intervention", definition: "Structured, multi-component program targeting comprehensive lifestyle modification" },
        { term: "social determinants of health", definition: "Non-medical factors affecting health outcomes including economic, social, and environmental conditions" },
        { term: "chronobiology", definition: "Study of biological rhythms and their influence on health and disease" },
      ],
      clinicalNotes: "Intensive lifestyle interventions can achieve disease reversal in some patients. Address social determinants as barriers to lifestyle change. Consider referral to lifestyle medicine specialists for complex cases. Document lifestyle interventions and outcomes for value-based care programs.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art lifestyle medicine integrates precision lifestyle prescriptions, digital health technologies, and implementation science frameworks to deliver personalized, evidence-based behavioral interventions that address chronic disease at individual, community, and population levels while advancing health equity.",
      explanation: `**Evolution of Lifestyle Medicine:**

Lifestyle medicine has evolved from general recommendations to precision interventions:
- Generic advice → Personalized prescriptions
- Single behaviors → Comprehensive programs
- Individual focus → Multi-level approaches
- Disease treatment → Health promotion and reversal
- Clinical care → Population health

**Precision Lifestyle Medicine:**

*Personalization Framework:*
\`\`\`
        Individual Assessment
               ↓
    ┌──────────┼──────────┐
    │          │          │
Genomics    Phenotype   Preferences
    │          │          │
    └──────────┼──────────┘
               ↓
    Tailored Lifestyle Prescription
               ↓
    Adaptive Monitoring
               ↓
    Personalized Optimization
\`\`\`

*Genomic Applications:*
- Nutrigenomics (gene-diet interactions)
- Exercise genomics (response to training)
- Chronogenomics (circadian gene variants)
- Pharmacogenomics for lifestyle drugs
- Microbiome-informed nutrition

**Digital Health Integration:**

*Technology-Enabled Interventions:*
| Technology | Application | Evidence |
|------------|-------------|----------|
| Smartphone apps | Tracking, coaching, feedback | Moderate |
| Wearables | Activity, sleep, stress monitoring | Moderate-high |
| Digital therapeutics | Structured behavior programs | Moderate-high |
| Telehealth | Remote coaching and support | Moderate |
| AI coaching | Personalized recommendations | Emerging |

*Connected Health Ecosystem:*
- Continuous glucose monitors
- Smart scales and blood pressure cuffs
- Activity and sleep trackers
- Nutrition tracking apps
- Integration platforms

**Implementation Science:**

*Adoption Determinants:*
- Intervention characteristics
- Outer setting (policy, guidelines)
- Inner setting (organization culture)
- Individual characteristics
- Process (planning, execution)

*Sustainability Strategies:*
- Embedded workflow integration
- Payment model alignment
- Quality measure inclusion
- Leadership engagement
- Continuous improvement culture

**Health Equity Framework:**

*Disparities in Lifestyle Behaviors:*
- Food access and food deserts
- Safe exercise environments
- Occupational constraints
- Healthcare access
- Health literacy
- Cultural factors

*Equity-Focused Approaches:*
- Community-based programs
- Culturally adapted interventions
- Policy and environmental changes
- Social determinants screening
- Structural racism awareness

**Population Health Integration:**

*Multi-Level Intervention Design:*
- Individual (clinical care)
- Interpersonal (family, social)
- Organizational (worksite, school)
- Community (built environment)
- Policy (food, activity, tobacco)

*Lifestyle Medicine and Value-Based Care:*
- Chronic disease cost reduction
- Prevention ROI demonstration
- Quality measure alignment
- Risk contract participation
- Employer wellness programs

**Research Frontiers:**

*Emerging Areas:*
- Microbiome-targeted nutrition
- Circadian medicine optimization
- Blue light and digital health effects
- Social prescribing
- Climate and planetary health integration

*Methodological Advances:*
- N-of-1 lifestyle trials
- Adaptive interventions
- Just-in-time interventions
- Micro-randomized trials
- Implementation effectiveness designs

**Future Directions:**

*Healthcare System Transformation:*
- Lifestyle medicine board certification
- Medical education reform
- Reimbursement model evolution
- Team-based lifestyle care
- Prevention-focused systems

*Policy Implications:*
- Food policy and nutrition
- Built environment standards
- Tobacco and substance regulation
- Healthcare coverage for lifestyle programs
- Workplace wellness requirements

*Technology Evolution:*
- AI-personalized lifestyle plans
- Virtual reality behavior change
- Ambient sensing and intervention
- Social network interventions
- Gamification and engagement science`,
      keyTerms: [
        { term: "precision lifestyle medicine", definition: "Tailoring lifestyle interventions based on individual genetic, phenotypic, and preference profiles" },
        { term: "nutrigenomics", definition: "Study of how genes affect nutrient metabolism and how nutrients affect gene expression" },
        { term: "digital therapeutics", definition: "Evidence-based therapeutic interventions driven by software programs" },
        { term: "social prescribing", definition: "Linking patients to non-medical community resources to address health determinants" },
        { term: "planetary health", definition: "Framework recognizing human health and environmental sustainability are interconnected" },
      ],
      clinicalNotes: "Precision approaches show promise but require validation in diverse populations. Address equity explicitly in digital health implementation. Consider the full continuum from individual to policy-level interventions. Lifestyle medicine board certification (ABLM) demonstrates specialized competency. Integrate climate and sustainability considerations into nutrition and activity guidance.",
    },
  },

  media: [
    {
      id: "lifestyle-assessment-tool",
      type: "diagram",
      filename: "lifestyle-assessment.pdf",
      title: "Lifestyle Assessment Tool",
      description: "Comprehensive assessment covering all lifestyle domains",
    },
    {
      id: "smart-goals-worksheet",
      type: "diagram",
      filename: "smart-goals-worksheet.pdf",
      title: "SMART Goals Worksheet",
      description: "Template for setting effective lifestyle change goals",
    },
  ],

  citations: [
    {
      id: "aclm-guidelines",
      type: "website",
      title: "Lifestyle Medicine Competencies",
      source: "American College of Lifestyle Medicine",
      url: "https://lifestylemedicine.org/",
    },
    {
      id: "lifestyle-evidence",
      type: "article",
      title: "Lifestyle and Chronic Disease Prevention",
      source: "The Lancet",
    },
  ],

  crossReferences: [
    { targetId: "chronic-disease-action-plans", targetType: "topic", relationship: "related", label: "Action Plans" },
    { targetId: "chronic-disease-symptom-tracking", targetType: "topic", relationship: "related", label: "Symptom Tracking" },
    { targetId: "heart-disease-heart-healthy-diet", targetType: "topic", relationship: "related", label: "Heart Healthy Diet" },
  ],

  tags: {
    systems: ["general health"],
    topics: ["self-management", "chronic disease", "prevention"],
    keywords: ["lifestyle medicine", "diet", "exercise", "stress management", "sleep"],
    clinicalRelevance: "high",
  },

  createdAt: "2025-01-24T00:00:00.000Z",
  updatedAt: "2025-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
  contributors: ["Biological Self Content Team"],
};
