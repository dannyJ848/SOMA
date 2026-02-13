/**
 * Nutrition Support - Educational Content
 *
 * Guidance for caregivers on supporting proper nutrition,
 * managing dietary needs, and addressing eating difficulties.
 */

import { EducationalContent } from "../../types";

export const nutritionSupport: EducationalContent = {
  id: "caregiver-nutrition-support",
  type: "concept",
  name: "Nutrition Support",
  alternateNames: [
    "Dietary Support",
    "Feeding Assistance",
    "Meal Management",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Nutrition support means helping someone eat well and get the food and drinks they need to stay healthy.",
      explanation: `Good food gives your loved one energy to heal and stay strong. As a caregiver, you can help make sure they eat well.

**Why Good Nutrition Matters**
- Gives energy for daily activities
- Helps wounds heal faster
- Fights off illness
- Keeps muscles strong
- Improves mood and thinking

**Ways to Help with Eating**
- Make meals look and smell appealing
- Serve smaller portions more often
- Sit with them during meals
- Cut food into small pieces if needed
- Make sure they can reach their food easily
- Offer drinks throughout the day

**Foods That Are Usually Good**
- Fruits and vegetables
- Whole grains like bread and oatmeal
- Protein like chicken, fish, eggs, and beans
- Dairy like milk, cheese, and yogurt
- Plenty of water and other fluids

**When Eating Is Hard**
Some people have trouble eating because:
- Food does not taste good anymore
- They are not hungry
- It hurts to swallow
- They forget to eat
- They get tired while eating

**When to Get Help**
Talk to the doctor if your loved one:
- Is losing weight without trying
- Refuses to eat or drink
- Chokes often while eating
- Has pain when swallowing
- Seems confused about eating`,
      keyTerms: [
        {
          term: "nutrition",
          definition: "The food and drinks that give our bodies what they need to work well",
        },
        {
          term: "hydration",
          definition: "Getting enough liquids, especially water, to keep the body working",
        },
        {
          term: "appetite",
          definition: "The feeling of wanting to eat food",
        },
      ],
      analogies: [
        "Food is like fuel for a car - without the right amount, the body cannot run properly.",
        "Helping with meals is like being a caring restaurant server - you make sure everything is just right for your guest.",
      ],
      examples: [
        "When her mom lost her appetite, Maria started making smaller, more colorful meals that looked more appealing.",
        "James keeps a water bottle near his dad all day so he remembers to drink, and he adds a little fruit juice to make it tastier.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Nutrition support involves ensuring adequate intake of nutrients and fluids through meal planning, feeding assistance, and addressing barriers to eating while monitoring for malnutrition.",
      explanation: `**Understanding Nutritional Needs**

People who are ill, recovering, or aging may have different nutritional needs:
- More protein for healing and maintaining muscle
- Adequate calories even with smaller appetites
- Specific restrictions for conditions like diabetes or kidney disease
- Increased hydration needs

**Common Eating Challenges**

| Challenge | Possible Solutions |
|-----------|-------------------|
| Poor appetite | Small frequent meals, favorite foods |
| Taste changes | Try new seasonings, serve cold foods |
| Difficulty chewing | Soft foods, cut into small pieces |
| Swallowing problems | Thickened liquids, pureed foods |
| Fatigue during meals | Rest before meals, serve largest meal when energy is best |
| Forgetting to eat | Regular meal schedule, eat together |

**Strategies for Better Nutrition**

**Meal Planning**
- Plan meals that meet dietary needs
- Include a variety of foods
- Consider texture requirements
- Prepare foods in advance when possible

**Meal Environment**
- Calm, pleasant setting
- Good lighting
- Comfortable seating
- Minimize distractions
- Appropriate utensils and dishes

**Increasing Nutrition**
- Add protein powder to foods
- Use fortified foods
- Offer nutritious snacks
- Include healthy fats

**Hydration Tips**
- Offer fluids throughout the day
- Include fluids at meals
- Try different beverages
- Use foods with high water content
- Track fluid intake

**Special Diets**

Common dietary modifications:
- **Heart-healthy**: Low sodium, low fat
- **Diabetic**: Controlled carbohydrates
- **Renal**: Restricted potassium, phosphorus, protein
- **Soft/mechanical**: Easy to chew
- **Pureed**: Blended smooth
- **Thickened liquids**: For swallowing safety

**Warning Signs of Malnutrition**
- Unintended weight loss
- Loose-fitting clothes
- Fatigue and weakness
- Poor wound healing
- Frequent infections
- Changes in skin, hair, nails`,
      keyTerms: [
        {
          term: "malnutrition",
          definition:
            "Not getting enough nutrients, which can happen even if eating some food",
        },
        {
          term: "dysphagia",
          definition:
            "Difficulty swallowing food or liquids safely",
        },
        {
          term: "fortified foods",
          definition:
            "Foods with extra nutrients added, like protein-fortified milk or breakfast cereals with vitamins",
        },
        {
          term: "modified diet",
          definition:
            "Changes to food texture or content to meet specific health needs",
        },
      ],
      analogies: [
        "A modified diet is like customizing a recipe - you adjust the ingredients to match what the person needs.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Nutrition support encompasses nutritional assessment, individualized diet planning, oral intake optimization, monitoring for malnutrition, and coordination with dietitians and healthcare providers for medically complex patients.",
      explanation: `## Nutritional Assessment

**Screening Tools**
- Mini Nutritional Assessment (MNA)
- Malnutrition Universal Screening Tool (MUST)
- Subjective Global Assessment (SGA)

**Assessment Components**
- Weight history and BMI trends
- Dietary intake patterns
- Functional status and appetite
- Medical conditions affecting nutrition
- Medications affecting appetite or absorption
- Psychosocial factors (depression, isolation)
- Oral health status

## Macronutrient Considerations

**Protein Requirements**
- Healthy adults: 0.8 g/kg/day
- Older adults: 1.0-1.2 g/kg/day
- Wound healing: 1.2-1.5 g/kg/day
- Pressure injuries: up to 2.0 g/kg/day
- Renal restrictions may limit protein

**Caloric Needs**
- Basal metabolic rate calculations
- Activity and stress factors
- Weight goals (gain, maintain, loss)
- Small frequent meals for low appetite

**Fluid Requirements**
- Generally 30 mL/kg/day
- Adjusted for heart or kidney conditions
- Consider losses (fever, diarrhea)
- Monitor for dehydration signs

## Dysphagia Management

**Diet Texture Levels (IDDSI)**
| Level | Description | Examples |
|-------|-------------|----------|
| 0 | Thin liquids | Water, juice |
| 1 | Slightly thick | |
| 2 | Mildly thick | |
| 3 | Moderately thick | Nectar |
| 4 | Pureed/extremely thick | Pudding |
| 5 | Minced and moist | |
| 6 | Soft and bite-sized | |
| 7 | Regular | Normal foods |

**Safe Swallowing Strategies**
- Upright positioning
- Chin tuck technique
- Small bites and sips
- No straws (if recommended)
- Supervision during meals
- Oral care after meals

## Condition-Specific Considerations

**Diabetes**
- Carbohydrate counting or consistent carb intake
- Timing with medications
- Blood glucose monitoring
- Avoid sugar-sweetened beverages

**Heart Failure**
- Sodium restriction (usually <2000 mg/day)
- Fluid restriction in advanced cases
- Label reading for hidden sodium
- Heart-healthy fats

**Kidney Disease**
- Protein modifications
- Potassium and phosphorus restrictions
- Fluid management
- Specialized diet education needed

**Cancer**
- Managing treatment side effects
- Maintaining weight during treatment
- Addressing taste changes
- High-calorie, high-protein strategies

## Feeding Assistance Techniques

**Positioning**
- Upright or high Fowler"s position
- Supported head and neck
- Adequate trunk support
- Caregiver at eye level

**Pacing**
- Allow adequate time
- Small bites
- Wait for complete swallow
- Monitor for fatigue

**Cueing**
- Verbal prompts as needed
- Hand-over-hand guidance for dementia
- Visual cues for attention`,
      keyTerms: [
        {
          term: "Mini Nutritional Assessment",
          definition:
            "Validated screening tool identifying malnutrition risk in older adults",
        },
        {
          term: "IDDSI",
          definition:
            "International Dysphagia Diet Standardisation Initiative, framework for describing food textures and drink thickness",
        },
        {
          term: "aspiration",
          definition:
            "Food or liquid entering the airway, a risk with dysphagia that can cause pneumonia",
        },
        {
          term: "fortification",
          definition:
            "Adding nutrients to foods to increase caloric or protein density",
        },
      ],
      clinicalNotes:
        "Screen all patients for malnutrition risk. Refer to registered dietitian for individualized nutrition plans. Order swallow evaluation for suspected dysphagia. Provide caregivers with specific diet instructions and monitor adherence.",
    },
    4: {
      level: 4,
      summary:
        "Evidence-based nutrition support integrates validated assessment tools, disease-specific nutrition guidelines, dysphagia management protocols, and enteral nutrition considerations while addressing caregiver education and quality outcomes.",
      explanation: `## Nutritional Assessment Evidence

**Malnutrition Criteria (GLIM)**
- Phenotypic criteria: weight loss, low BMI, reduced muscle mass
- Etiologic criteria: reduced intake, disease burden
- Requires 1 phenotypic + 1 etiologic criterion
- Severity grading included

**Assessment Tools Validation**
- MNA: sensitivity 96%, specificity 98% in older adults
- MUST: predictive of mortality, length of stay
- SGA: gold standard for research
- Screening recommended at care transitions

**Body Composition Assessment**
- Bioelectrical impedance analysis
- Handgrip strength for muscle function
- DEXA for research settings
- Serial measurements most valuable

## Disease-Specific Guidelines

**Oncology Nutrition**
- ESPEN cancer nutrition guidelines
- Screening at diagnosis and throughout
- Early intervention prevents cachexia
- Immunonutrition perioperatively

**Chronic Kidney Disease**
- KDOQI nutrition guidelines
- Stage-specific recommendations
- Protein requirements vary by stage and dialysis
- Phosphorus and potassium management

**Heart Failure**
- HFSA dietary recommendations
- Sodium restriction evidence mixed
- Fluid restriction for advanced HF
- Nutritional support in cardiac cachexia

**Neurological Conditions**
- Stroke dysphagia management
- Parkinson"s disease swallowing issues
- ALS nutrition guidelines
- Dementia feeding considerations

## Dysphagia Evidence

**Assessment**
- Bedside swallow evaluation
- Videofluoroscopic swallow study (VFSS)
- Fiberoptic endoscopic evaluation (FEES)
- Caregiver symptom monitoring

**Intervention Effectiveness**
- Diet modification reduces aspiration risk
- Thickened liquids controversial (IDDSI levels)
- Postural strategies evidence-based
- Rehabilitation approaches

**Caregiver Training**
- Safe feeding techniques critical
- Recognition of aspiration signs
- Diet texture preparation
- When to seek evaluation

## Enteral Nutrition

**Indications**
- Inadequate oral intake for >5-7 days
- Functioning GI tract
- Unable to meet needs orally

**Access Options**
- Nasogastric tube: short-term
- Gastrostomy (PEG): long-term
- Jejunostomy: aspiration risk

**Caregiver Education**
- Formula administration
- Tube care and monitoring
- Complication recognition
- Quality of life considerations

## Quality Metrics

**Process Measures**
- Malnutrition screening rates
- Dietitian referral rates
- Dysphagia evaluation completion
- Caregiver education documentation

**Outcome Measures**
- Weight stability
- Nutritional parameters
- Aspiration pneumonia rates
- Hospital readmissions`,
      keyTerms: [
        {
          term: "GLIM criteria",
          definition:
            "Global Leadership Initiative on Malnutrition consensus criteria for diagnosing malnutrition",
        },
        {
          term: "cachexia",
          definition:
            "Wasting syndrome with weight and muscle loss driven by underlying disease, distinct from starvation",
        },
        {
          term: "videofluoroscopic swallow study",
          definition:
            "Gold standard imaging test for dysphagia using real-time X-ray to visualize swallowing",
        },
        {
          term: "PEG tube",
          definition:
            "Percutaneous endoscopic gastrostomy, feeding tube placed through abdominal wall for long-term enteral nutrition",
        },
        {
          term: "KDOQI",
          definition:
            "Kidney Disease Outcomes Quality Initiative, evidence-based guidelines including nutrition recommendations",
        },
      ],
      clinicalNotes:
        "Apply GLIM criteria for malnutrition diagnosis. Utilize disease-specific nutrition guidelines. Order appropriate dysphagia evaluation before diet modification. Consider enteral nutrition for prolonged inadequate intake. Engage caregivers as partners in nutrition care.",
    },
    5: {
      level: 5,
      summary:
        "Nutrition support research examines molecular mechanisms of disease-related malnutrition, advanced assessment technologies, personalized nutrition approaches, and implementation science while addressing disparities in nutritional care quality.",
      explanation: `## Molecular Mechanisms

**Cachexia Pathophysiology**
- Pro-inflammatory cytokine cascade
- Tumor-derived factors in cancer
- Muscle protein catabolism pathways
- Appetite regulation disruption
- Metabolic reprogramming

**Gut-Brain Axis**
- Appetite regulation mechanisms
- Microbiome influences on nutrition
- Enteroendocrine signaling
- Therapeutic targets

**Sarcopenia Research**
- Mechanisms of age-related muscle loss
- Anabolic resistance
- Protein quality and timing
- Exercise synergy with nutrition

## Advanced Assessment

**Body Composition Technologies**
- CT-derived muscle mass
- Ultrasound muscle assessment
- Phase angle from bioimpedance
- Functional measures integration

**Biomarkers**
- Prealbumin/transthyretin
- C-reactive protein
- Cytokine profiles
- Metabolomics approaches

**Predictive Models**
- Machine learning for malnutrition risk
- Outcome prediction tools
- Intervention targeting
- Resource allocation

## Personalized Nutrition

**Nutrigenomics**
- Genetic variations affecting nutrient metabolism
- Personalized dietary recommendations
- Pharmacogenomics of nutrition-drug interactions
- Future clinical applications

**Microbiome-Based Approaches**
- Individual microbiome profiling
- Targeted prebiotic/probiotic interventions
- Diet-microbiome interactions
- Emerging evidence base

**Precision Nutrition**
- Continuous glucose monitoring
- Metabolic phenotyping
- Individualized meal planning
- Technology-enabled monitoring

## Implementation Science

**Evidence-Practice Gap**
- Malnutrition underdiagnosed
- Screening inconsistently applied
- Dietitian access limited
- Intervention quality variable

**Quality Improvement**
- Malnutrition quality improvement programs
- Nutrition-focused physical exam training
- Electronic clinical decision support
- Care bundle approaches

**Care Model Innovation**
- Malnutrition care bundles
- Transitions of care nutrition protocols
- Telemedicine nutrition services
- Community-based programs

## Health Equity

**Disparities in Nutritional Care**
- Food insecurity prevalence
- Access to specialized diets
- Culturally appropriate nutrition education
- Registered dietitian access

**Interventions**
- Food is medicine programs
- Medically tailored meals
- Community health worker integration
- Policy advocacy

**Social Determinants**
- Food access and affordability
- Transportation to grocery stores
- Kitchen access and functionality
- Cultural food preferences

## Caregiver Research

**Training Effectiveness**
- Optimal education approaches
- Skill development for feeding assistance
- Dysphagia management competency
- Ongoing support needs

**Caregiver Burden**
- Nutrition-related caregiving stress
- Time and cost demands
- Emotional aspects of feeding
- Support interventions

**Family-Centered Care**
- Including families in nutrition planning
- Cultural food integration
- Caregiver preferences and capacity
- Shared decision-making

## Future Directions

**Technology Integration**
- AI-powered nutrition analysis
- Smart home monitoring
- Automated nutrition tracking
- Telehealth nutrition services

**Novel Therapeutics**
- Appetite stimulants
- Anabolic agents
- Microbiome modulators
- Targeted nutritional supplements

**Systems Approaches**
- Value-based nutrition care
- Population health nutrition
- Integration with chronic disease management
- Outcome-based reimbursement`,
      keyTerms: [
        {
          term: "cachexia",
          definition:
            "Multifactorial syndrome of weight loss and muscle wasting driven by inflammatory and metabolic alterations in chronic disease",
        },
        {
          term: "sarcopenia",
          definition:
            "Age-related loss of muscle mass and function associated with adverse outcomes",
        },
        {
          term: "nutrigenomics",
          definition:
            "Study of how genetic variations affect response to nutrients and dietary interventions",
        },
        {
          term: "medically tailored meals",
          definition:
            "Food is medicine intervention providing condition-specific prepared meals to address nutrition needs",
        },
        {
          term: "nutrition-focused physical exam",
          definition:
            "Systematic assessment technique identifying physical signs of malnutrition",
        },
      ],
      clinicalNotes: `Systems implementation:
1. Implement universal malnutrition screening with validated tools
2. Develop care pathways integrating nutrition assessment and intervention
3. Train providers in nutrition-focused physical exam
4. Address food insecurity through screening and referral
5. Research caregiver nutrition education effectiveness
6. Advocate for policy supports for nutrition care`,
    },
  },

  media: [
    {
      id: "nutrition-strategies-guide",
      type: "diagram",
      filename: "nutrition-support-strategies.svg",
      title: "Nutrition Support Strategies",
      description: "Visual guide to addressing common eating challenges",
    },
  ],

  citations: [
    {
      id: "aspen-guidelines",
      type: "website",
      title: "Clinical Nutrition Guidelines",
      source: "American Society for Parenteral and Enteral Nutrition",
      url: "https://www.nutritioncare.org/",
    },
    {
      id: "iddsi-framework",
      type: "website",
      title: "IDDSI Framework",
      source: "International Dysphagia Diet Standardisation Initiative",
      url: "https://iddsi.org/",
    },
  ],

  crossReferences: [
    {
      targetId: "caregiver-personal-care-assistance",
      targetType: "concept",
      relationship: "related",
      label: "Personal Care Assistance",
    },
    {
      targetId: "caregiver-talking-to-healthcare-team",
      targetType: "concept",
      relationship: "related",
      label: "Talking to Healthcare Team",
    },
  ],

  tags: {
    systems: ["caregiver-support"],
    topics: ["nutrition", "feeding", "dysphagia", "malnutrition", "hydration"],
    clinicalRelevance: "high",
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default nutritionSupport;
