/**
 * ICU Nutrition - Educational Content
 *
 * Comprehensive guide to understanding nutrition support in critically ill patients,
 * including enteral and parenteral nutrition, metabolic considerations, and monitoring.
 */

import { EducationalContent } from "../types";

export const icuNutrition: EducationalContent = {
  id: "critical-care-icu-nutrition",
  type: "concept",
  name: "ICU Nutrition",
  alternateNames: [
    "Critical Care Nutrition",
    "Nutritional Support in ICU",
    "Feeding Critically Ill Patients",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "When patients are very sick in the ICU, they often cannot eat normally, so the medical team provides nutrition through special tubes or IV lines to help their body heal.",
      explanation: `## Why Is Nutrition Important in the ICU?

When someone is very sick, their body works extra hard to fight illness and heal. Just like a car needs fuel to run, the body needs food (nutrition) to:
- Give energy to fight infection
- Heal wounds and tissues
- Keep muscles strong
- Support the immune system

**The problem is**: Many ICU patients cannot eat normally because they may be:
- Asleep from medicine (sedated)
- On a breathing machine with a tube in their throat
- Too weak to swallow safely
- Having surgery on their stomach or intestines

## How Do Doctors Feed ICU Patients?

**Tube Feeding (Enteral Nutrition)**
This is the most common and preferred way to feed ICU patients.

- A thin, soft tube goes through the nose down to the stomach or small intestine
- Special liquid food flows through the tube
- The stomach and intestines still work and absorb nutrients normally
- This is called "tube feeds" or "enteral nutrition"

**IV Feeding (Parenteral Nutrition)**
Sometimes the stomach or intestines cannot be used, so nutrition goes directly into the blood through an IV.

- A special IV line delivers nutrients directly to the bloodstream
- Called "TPN" (Total Parenteral Nutrition)
- Used when the digestive system needs to rest
- More complicated and has more risks than tube feeding

## What Is in the Special Food?

The liquid nutrition contains everything the body needs:
- **Protein**: Helps heal wounds and maintain muscles
- **Carbohydrates**: Provides energy (like sugar and starches)
- **Fats**: Another source of energy and important for cells
- **Vitamins and minerals**: Keep the body working properly
- **Water**: Keeps the body hydrated

## What Families Should Know

**Common questions:**

"Why does the tube go through the nose?"
- It is the quickest and safest way to reach the stomach
- The tube is soft and does not hurt once it is in place

"When will my loved one eat normally again?"
- As soon as it is safe and they are awake enough to swallow
- Speech therapists help test if swallowing is safe

"Is tube feeding uncomfortable?"
- The tube may feel strange at first
- Most patients get used to it quickly
- It is much better than not getting any nutrition

**Things to watch for:**
- The care team checks that the tube is in the right place
- They watch for signs the stomach is tolerating the food
- If there is vomiting or belly swelling, they may slow down or pause feeding`,
      keyTerms: [
        {
          term: "enteral nutrition",
          definition:
            "Nutrition given through a tube that goes to the stomach or intestines",
          pronunciation: "EN-ter-al",
        },
        {
          term: "parenteral nutrition",
          definition:
            "Nutrition given directly into the blood through an IV line, bypassing the digestive system",
          pronunciation: "par-EN-ter-al",
        },
        {
          term: "TPN",
          definition:
            "Total Parenteral Nutrition - complete nutrition delivered through an IV",
        },
        {
          term: "feeding tube",
          definition:
            "A soft, thin tube that carries liquid nutrition to the stomach",
        },
        {
          term: "calories",
          definition: "Units of energy from food that the body uses to function",
        },
      ],
      analogies: [
        "Tube feeding is like watering a plant at its roots - the nutrition goes right where it needs to be absorbed.",
        "TPN is like filling a car directly with energy without going through the gas tank - it works, but the normal route (eating) is usually better.",
        "The body during critical illness is like a house being rebuilt - it needs extra supplies (nutrition) to do the construction work.",
      ],
      examples: [
        "A patient on a ventilator cannot eat, so a feeding tube is placed through their nose to deliver liquid nutrition to their stomach.",
        "After major abdominal surgery, a patient might receive IV nutrition until their intestines start working again.",
      ],
    },

    2: {
      level: 2,
      summary:
        "Nutrition support in critical illness involves early enteral nutrition when possible, appropriate caloric and protein targets, and monitoring for complications like refeeding syndrome and aspiration.",
      explanation: `## Metabolic Response to Critical Illness

When the body experiences severe stress (surgery, sepsis, trauma), it enters a hypermetabolic state:

**Ebb Phase (First 24-48 hours)**
- Decreased metabolism initially
- Fluid shifts, low cardiac output
- Not the time for aggressive feeding

**Flow Phase (Days to weeks)**
- Increased metabolic rate (hypermetabolism)
- Protein breakdown (catabolism)
- Insulin resistance
- Increased energy needs

**Recovery Phase**
- Anabolism resumes
- Rebuilding muscle and tissue
- Increased protein and calorie needs

## Routes of Nutrition

### Enteral Nutrition (EN) - Preferred Route

**Advantages:**
- Maintains gut integrity
- Supports immune function
- Lower infection risk than TPN
- Less expensive
- More physiologic

**Access Options:**
| Route | Tube Placement | Indications |
|-------|---------------|-------------|
| Nasogastric (NG) | Nose to stomach | Most common; short-term |
| Nasoduodenal/NJ | Nose to small intestine | Gastroparesis, high aspiration risk |
| PEG | Through abdominal wall to stomach | Long-term (>4 weeks) |
| PEJ | Through abdominal wall to jejunum | Long-term, gastroparesis |

### Parenteral Nutrition (PN)

**Indications:**
- Non-functioning GI tract
- Bowel obstruction
- Severe ileus (>7 days)
- Short bowel syndrome
- High-output fistulas

**Types:**
- TPN: Full nutrition via central line
- PPN: Partial nutrition via peripheral IV (limited by osmolarity)

## Nutritional Assessment

**Estimating Needs:**

| Component | Target | Notes |
|-----------|--------|-------|
| Calories | 25-30 kcal/kg/day | May start lower (trophic feeds) |
| Protein | 1.2-2.0 g/kg/day | Higher in burns, trauma |
| Fluids | Based on losses | Monitor ins/outs |

**Indirect Calorimetry:**
- Measures actual energy expenditure
- More accurate than equations
- Gold standard but not always available

**Predictive Equations:**
- Harris-Benedict: Estimates basal metabolic rate
- Penn State: Adjusted for ventilator patients
- Mifflin-St. Jeor: Alternative calculation

## Initiating Enteral Nutrition

**Timeline:**
- Start within 24-48 hours of ICU admission
- Begin at low rate (trophic feeding: 10-20 mL/hr)
- Advance to goal over 48-72 hours

**Monitoring Tolerance:**
- Gastric residual volumes (controversial; <500 mL generally acceptable)
- Abdominal distension
- Vomiting, regurgitation
- Diarrhea
- Bowel sounds (not required to start feeds)

## Common Complications

### Aspiration
- Elevate head of bed 30-45 degrees
- Consider post-pyloric feeding for high-risk patients
- Check tube placement

### Diarrhea
- Very common in ICU (up to 60%)
- Causes: Antibiotics, medications, C. diff, formula intolerance
- Rule out infection before changing formula

### Refeeding Syndrome
- Occurs when malnourished patients are fed too quickly
- Electrolyte shifts: Low phosphorus, potassium, magnesium
- Can cause cardiac arrhythmias, respiratory failure
- Prevention: Start low, advance slowly, supplement electrolytes

### Hyperglycemia
- Common with enteral and parenteral nutrition
- Target glucose: 140-180 mg/dL
- May need insulin infusion

## Special Formulas

| Formula Type | Characteristics | Indications |
|--------------|-----------------|-------------|
| Standard | 1-1.2 kcal/mL | Most patients |
| High protein | Higher protein:calorie ratio | Wounds, trauma |
| Concentrated | 1.5-2 kcal/mL | Fluid restriction |
| Renal | Low potassium, phosphorus | Kidney failure (not on dialysis) |
| Hepatic | Modified amino acids | Liver failure with encephalopathy |
| Diabetic | Lower carbohydrate | Difficult glucose control |
| Immune-modulating | Arginine, omega-3s, nucleotides | Surgical/trauma (controversial) |`,
      keyTerms: [
        {
          term: "trophic feeding",
          definition:
            "Low-volume tube feeding (10-20 mL/hr) to maintain gut function without providing full nutrition",
        },
        {
          term: "refeeding syndrome",
          definition:
            "Dangerous electrolyte shifts (especially low phosphorus) when malnourished patients are fed too quickly",
        },
        {
          term: "gastric residual volume",
          definition:
            "Amount of feeding remaining in the stomach; used to assess tolerance (though high volumes alone should not stop feeds)",
        },
        {
          term: "indirect calorimetry",
          definition:
            "Method of measuring actual calorie needs by analyzing inhaled oxygen and exhaled carbon dioxide",
        },
        {
          term: "PEG tube",
          definition:
            "Percutaneous Endoscopic Gastrostomy - feeding tube placed through the abdominal wall directly into the stomach",
        },
      ],
      analogies: [
        "Trophic feeding is like keeping a pilot light on - it maintains the gut function even when full feeding is not needed yet.",
        "Refeeding syndrome is like jump-starting a battery too quickly - the sudden energy surge can cause dangerous problems.",
      ],
      clinicalNotes:
        "The ASPEN/SCCM guidelines recommend early enteral nutrition (within 24-48 hours) in critically ill patients who cannot eat. Holding feeds for gastric residual volumes <500 mL is not recommended.",
    },

    3: {
      level: 3,
      summary:
        "Evidence-based ICU nutrition emphasizes early enteral feeding, protein adequacy, avoidance of overfeeding, and recognition that outcomes are influenced more by protein delivery than total calories in the acute phase.",
      explanation: `## Pathophysiology of Critical Illness Metabolism

### Neuroendocrine Response
- HPA axis activation → cortisol release
- Sympathetic activation → catecholamine surge
- Growth hormone resistance
- Insulin resistance

### Inflammatory Mediators
- Cytokines (IL-1, IL-6, TNF-α)
- Acute phase protein synthesis
- Skeletal muscle catabolism
- Altered substrate utilization

### Metabolic Alterations
**Carbohydrate Metabolism:**
- Hepatic gluconeogenesis increased
- Peripheral glucose uptake impaired
- Hyperglycemia common (stress hyperglycemia)

**Protein Metabolism:**
- Accelerated proteolysis
- Muscle wasting (up to 1 kg lean mass/day)
- Increased amino acid oxidation
- Cannot be fully prevented by nutrition alone

**Fat Metabolism:**
- Lipolysis increased
- Triglyceride clearance impaired
- Ketogenesis suppressed

## Evidence-Based Nutrition Practices

### Timing of Nutrition

**Early vs Delayed Enteral Nutrition:**
- Multiple studies support early EN (24-48h)
- Maintains gut barrier integrity
- Modulates immune response
- May reduce infectious complications

**EPaNIC Trial (2011):**
- Late PN (day 8) vs early PN (day 3-4)
- Late PN group: Fewer infections, shorter ICU stay
- Challenged aggressive early supplemental PN

**CALORIES Trial (2014):**
- Early EN vs early PN
- No mortality difference at 30 days
- EN preferred due to lower cost, complications

### Caloric Targets

**Full Feeding vs Trophic Feeding:**

**EDEN Trial (2012):**
- Trophic (400 kcal/day x 6 days) vs full EN in ARDS
- No difference in outcomes
- Full feeding: More GI intolerance

**PermiT Trial (2015):**
- Permissive underfeeding (40-60% of goal) vs standard
- No difference in 90-day mortality

**TARGET Trial (2018):**
- Energy-dense (1.5 kcal/mL) vs standard formula
- Higher calories did not improve outcomes
- Potential harm signal in some subgroups

**Current Consensus:**
- Start with trophic/hypocaloric feeding
- Advance to 70-80% of estimated needs
- Avoid overfeeding
- Prioritize protein over calories in acute phase

### Protein Delivery

**Observational Data:**
- Protein intake associated with improved outcomes
- Independent of total calorie delivery
- Target: 1.2-2.0 g/kg/day (may need higher in obesity, burns)

**Practical Challenges:**
- Standard formulas: ~16% protein
- Difficult to reach protein goals with standard feeds
- Options: High-protein formulas, protein supplements

## Advanced Nutrition Topics

### Immunonutrition

**Components:**
- Arginine: Immune function, wound healing
- Glutamine: Gut barrier, antioxidant
- Omega-3 fatty acids: Anti-inflammatory
- Nucleotides: Immune cell proliferation

**Evidence:**
- Benefit in elective surgical patients (some data)
- No clear benefit in medical ICU patients
- Arginine may be harmful in severe sepsis (REDOX trial)
- Routine use not recommended in critically ill

### Specific Nutrients

**Glutamine:**
- REDOXS Trial: IV glutamine increased mortality in shock
- Not recommended in critical illness
- May benefit burns, trauma (enterally)

**Selenium:**
- Antioxidant
- Some trials showed benefit, others neutral
- Not routinely recommended

**Vitamin D:**
- Deficiency common in ICU
- High-dose supplementation trials (VITdAL-ICU, VIOLET): No benefit
- Correct severe deficiency

### Nutrition in Specific Conditions

**ARDS:**
- No benefit from high-fat, low-carb formulas
- Standard protein-enhanced feeds recommended
- Avoid overfeeding (increased CO2 production)

**Acute Kidney Injury:**
- Do not restrict protein (1.2-2.0 g/kg/day)
- Adjust electrolytes if needed
- Standard formulas for patients on dialysis

**Liver Failure:**
- Do not restrict protein unless severe encephalopathy
- Branched-chain amino acid formulas: Limited benefit
- Small, frequent feeds for encephalopathy

**Pancreatitis:**
- EN is safe and preferred over PN
- Nasogastric feeds are acceptable (not just NJ)
- Start early in mild-moderate disease

## Monitoring and Assessment

### Nutritional Markers

| Marker | Utility | Limitations |
|--------|---------|-------------|
| Albumin | Mortality predictor | Not nutritional status (acute phase reactant) |
| Prealbumin | Faster turnover | Still reflects inflammation, not nutrition |
| CRP | Inflammatory status | Does not assess nutrition |
| Weight | Fluid changes confound | Cannot interpret in ICU |
| Nitrogen balance | Assesses protein adequacy | Labor-intensive, requires 24h urine |

**Key Point:** No good marker of nutritional status in acute illness. Albumin/prealbumin reflect inflammation, not nutrition.

### Indirect Calorimetry

**When to Use:**
- Difficult-to-predict energy needs
- Failure to wean from ventilator
- Severe obesity
- Burns, trauma

**Interpretation:**
- Respiratory quotient (RQ) = VCO2/VO2
- RQ >1.0 suggests overfeeding (lipogenesis)
- RQ <0.7 suggests predominant fat oxidation`,
      keyTerms: [
        {
          term: "stress hyperglycemia",
          definition:
            "Elevated blood glucose during critical illness due to insulin resistance and increased gluconeogenesis",
        },
        {
          term: "immunonutrition",
          definition:
            "Nutritional formulas containing immune-modulating ingredients (arginine, glutamine, omega-3s)",
        },
        {
          term: "respiratory quotient",
          definition:
            "Ratio of CO2 produced to O2 consumed; indicates primary fuel source (>1.0 suggests overfeeding)",
        },
        {
          term: "permissive underfeeding",
          definition:
            "Intentional hypocaloric feeding (40-60% of estimated needs) with adequate protein",
        },
        {
          term: "proteolysis",
          definition:
            "Breakdown of proteins into amino acids; accelerated in critical illness causing muscle wasting",
        },
      ],
      clinicalNotes:
        "The EPaNIC, EDEN, PermiT, and TARGET trials collectively suggest that aggressive caloric targets in the acute phase do not improve outcomes and may cause harm. Focus on adequate protein (1.2-2.0 g/kg/day) rather than reaching full caloric targets early.",
    },

    4: {
      level: 4,
      summary:
        "Advanced ICU nutrition practice requires integration of metabolic phase-specific strategies, disease-specific modifications, and understanding the limitations of current evidence for guiding individualized nutrition prescriptions.",
      explanation: `## Metabolic Phases and Nutrition Strategy

### Acute Phase (Days 1-7)
**Metabolic State:**
- Catabolism predominates regardless of nutrition
- Endogenous glucose production cannot be suppressed
- Insulin resistance limits glucose utilization
- Exogenous nutrition cannot prevent muscle loss

**Nutrition Strategy:**
- Trophic/hypocaloric EN (10-20 kcal/kg/day)
- Prioritize protein (>1.2 g/kg/day)
- Avoid overfeeding (check glucose, triglycerides)
- Supplement PN only if EN fails >7 days (EPaNIC)

### Post-Acute Phase (Days 7+)
**Metabolic State:**
- Shift toward anabolism
- Improved insulin sensitivity
- Muscle protein synthesis can be stimulated
- Recovery of GI function

**Nutrition Strategy:**
- Advance to full estimated needs
- Higher protein (1.5-2.0 g/kg/day)
- Consider indirect calorimetry
- Add rehabilitation/mobility

### Chronic Critical Illness
**Features:**
- Prolonged ICU stay (>14 days)
- Persistent inflammation
- Recurrent infections
- Profound muscle wasting

**Nutrition Challenges:**
- Ongoing catabolism
- May need very high protein
- Consider anabolic adjuncts (limited evidence)
- Optimize rehabilitation

## Disease-Specific Nutrition

### Obesity in Critical Illness

**Weight-Based Dosing Dilemma:**
- Actual body weight (ABW) overestimates needs
- Ideal body weight (IBW) may underestimate
- Use adjusted body weight for severe obesity

**Recommendations (BMI >30):**
- Calories: 11-14 kcal/kg ABW (or 22-25 kcal/kg IBW)
- Protein: 2.0-2.5 g/kg IBW
- High-protein, hypocaloric approach
- Monitor lean mass preservation if possible

### Burns

**Hypermetabolic Response:**
- Highest metabolic demands of any condition
- Up to 150-200% of predicted energy needs
- Massive protein losses

**Recommendations:**
- Calories: 25-30 kcal/kg (up to 35 kcal/kg)
- Protein: 1.5-2.0 g/kg/day
- Early EN (within 6-12 hours if possible)
- Consider glutamine supplementation (enteral)
- High-dose vitamins C, E, zinc

### Traumatic Brain Injury

**Metabolic Considerations:**
- Hypermetabolism (120-140% of predicted)
- Nitrogen wasting
- Glucose control important for outcomes

**Recommendations:**
- Early EN (within 24-72 hours)
- Protein: 1.5-2.5 g/kg/day
- Target full energy needs by day 5-7
- Tight glucose control (avoid hypoglycemia)

### ECMO

**Challenges:**
- Altered drug pharmacokinetics
- Uncertain energy expenditure
- Fluid management complexities

**Recommendations:**
- EN preferred when possible
- May need post-pyloric access
- Indirect calorimetry valuable
- Monitor for GI ischemia (especially VA-ECMO)

### Post-Operative Patients

**Enhanced Recovery After Surgery (ERAS):**
- Early oral/enteral feeding
- Avoid prolonged fasting
- Carbohydrate loading pre-op
- Immunonutrition in upper GI cancer surgery (some data)

## Parenteral Nutrition: Advanced Concepts

### Lipid Emulsions

**Soybean Oil (Traditional):**
- Omega-6 predominant
- Pro-inflammatory
- May impair immune function

**Alternative Lipids:**
| Type | Source | Properties |
|------|--------|------------|
| MCT/LCT | Coconut/soy | Better oxidation, less immunosuppressive |
| Olive oil | Mediterranean | More neutral immunologically |
| Fish oil | Marine | Omega-3, anti-inflammatory |
| SMOF | Mixed | Combines benefits |

**Clinical Evidence:**
- Fish oil lipids may reduce infection, ICU stay (meta-analyses)
- Not definitively proven
- Consider in sepsis, ARDS

### Complications of PN

**Infectious:**
- Central line-associated bloodstream infection (CLABSI)
- Risk: 2-5 per 1000 catheter days
- Prevention: Aseptic technique, dedicated PN lumen

**Metabolic:**
| Complication | Prevention/Treatment |
|--------------|---------------------|
| Hyperglycemia | Insulin infusion, reduce dextrose |
| Hypertriglyceridemia | Reduce lipid dose if TG >400 |
| Refeeding syndrome | Start low, supplement K, Phos, Mg |
| Hepatic steatosis | Cycle PN, reduce dextrose, avoid overfeeding |
| Cholestasis | EN if possible, cycle PN, reduce lipids |

**PN-Associated Liver Disease:**
- Risk factors: Duration, overfeeding, sepsis, lack of EN
- Prevention: EN as early as possible, cycle PN, limit lipids
- Treatment: Fish oil lipids may help

### Micronutrient Considerations

**Thiamine (B1):**
- Depletion common (alcoholism, malnutrition, diuretics)
- Deficiency causes lactic acidosis, Wernicke encephalopathy
- Replace before dextrose in high-risk patients
- Dose: 100-300 mg IV daily for 3-5 days

**Vitamin C:**
- Depleted in sepsis
- High-dose trials (CITRIS-ALI, VITAMINS): Mixed results
- Routine high-dose not recommended

**Trace Elements:**
- Zinc: Wound healing, immune function
- Selenium: Antioxidant (routine supplementation not recommended)
- Copper: Deficiency rare but causes anemia, neutropenia

## Quality Metrics in Nutrition

### Process Measures
- Time to EN initiation (target <48h)
- Percentage of goal calories delivered
- Percentage of goal protein delivered
- Use of EN vs PN

### Outcome Measures
- Difficult to attribute outcomes to nutrition alone
- Muscle mass preservation (CT imaging)
- Functional status at discharge
- Long-term functional recovery`,
      keyTerms: [
        {
          term: "adjusted body weight",
          definition:
            "Weight estimate for obese patients: IBW + 0.25-0.5 × (ABW - IBW); used for nutrition calculations",
        },
        {
          term: "SMOF lipid",
          definition:
            "Mixed lipid emulsion containing Soybean, MCT, Olive, and Fish oils for more balanced fatty acid profile",
        },
        {
          term: "PN-associated liver disease",
          definition:
            "Hepatic dysfunction from prolonged parenteral nutrition; includes steatosis and cholestasis",
        },
        {
          term: "ERAS",
          definition:
            "Enhanced Recovery After Surgery - multimodal protocol including early nutrition to improve surgical outcomes",
        },
        {
          term: "chronic critical illness",
          definition:
            "Persistent critical illness beyond 14 days characterized by ongoing inflammation, weakness, and prolonged ventilation",
        },
      ],
      clinicalNotes:
        "In obesity, use hypocaloric high-protein feeding (11-14 kcal/kg actual weight, 2.0-2.5 g/kg ideal body weight protein). Thiamine should be repleted before carbohydrate loading in at-risk patients to prevent Wernicke encephalopathy.",
    },

    5: {
      level: 5,
      summary:
        "Expert nutrition practice in critical care integrates evolving evidence on protein targets, metabolic phenotyping, novel biomarkers, and rehabilitation-focused nutrition while acknowledging significant knowledge gaps and ongoing research.",
      explanation: `## Landmark Nutrition Trials in Critical Care

### Caloric Target Trials

**EPaNIC (2011)** - Casaer et al.
- N=4640, early vs late supplemental PN
- Late PN (day 8): Shorter ICU stay, fewer infections
- Paradigm shift: Aggressive early nutrition may harm

**EDEN (2012)** - Rice et al.
- Trophic vs full feeds in ARDS
- No outcome difference
- Supports initial hypocaloric feeding

**PermiT (2015)** - Arabi et al.
- Permissive underfeeding (40-60%) vs standard
- No mortality difference
- Supports hypocaloric approach

**TARGET (2018)** - Chapman et al.
- Energy-dense (1.5 kcal/mL) vs standard
- More calories, no benefit
- Signal of harm in older patients

### Protein Trials

**EFFORT Trial (2023)** - Heyland et al.
- High protein (≥2.2 g/kg/day) vs standard (≤1.2 g/kg/day)
- No difference in 60-day mortality
- Possible harm in AKI/high organ failure
- Challenged aggressive protein goals

**Implications:**
- Optimal protein dose remains uncertain
- May vary by phase of illness, organ function
- Current recommendation: 1.2-2.0 g/kg/day (individualize)

### Supplementation Trials

**REDOXS (2013)** - Heyland et al.
- Glutamine +/- antioxidants in shock
- Glutamine increased mortality
- Ended routine glutamine supplementation

**VITAMINS (2020)** - Fujii et al.
- Vitamin C, thiamine, hydrocortisone vs hydrocortisone alone
- No difference in death, organ support
- High-dose vitamin C not beneficial

**LOVIT (2022)** - Lamontagne et al.
- High-dose vitamin C in sepsis
- No benefit; possible harm

## Metabolic Phenotyping

### Concept
- Critical illness is heterogeneous
- Metabolic response varies by phenotype
- One-size-fits-all nutrition may be suboptimal

### Emerging Approaches

**Indirect Calorimetry Phenotypes:**
- Hypermetabolic vs hypometabolic
- Variable metabolizers
- Tailored caloric prescription

**Inflammatory Phenotypes:**
- Hyperinflammatory vs hypoinflammatory
- Different responses to macronutrients?
- Research ongoing

**Muscle Phenotypes:**
- Baseline muscle mass affects outcomes
- Sarcopenia at baseline - different needs?
- CT-based muscle assessment

### Precision Nutrition Concept
- Biomarker-guided feeding
- Phase-specific nutrition
- Individualized macronutrient ratios
- Currently more theoretical than practical

## Novel Biomarkers and Monitoring

### Muscle Assessment

**CT-Based Muscle Measurement:**
- Cross-sectional area at L3 level
- Sarcopenia associated with mortality
- Research tool, becoming more available

**Ultrasound:**
- Bedside muscle thickness measurement
- Can track changes over ICU stay
- Operator-dependent, standardization needed

**BIA (Bioelectrical Impedance):**
- Non-invasive body composition
- Fluid shifts limit accuracy in ICU
- Phase angle may predict outcomes

### Metabolic Monitoring

**Continuous Glucose Monitoring:**
- Real-time glycemic data
- Reduces hypoglycemia
- Guides insulin and nutrition adjustments

**Indirect Calorimetry Advances:**
- Integration with ventilator
- Continuous vs intermittent measurement
- Better accuracy with new devices

## Nutrition and Rehabilitation

### Muscle Protein Synthesis

**Requirements for Anabolism:**
- Adequate protein (leucine threshold)
- Energy availability
- Anabolic stimulus (exercise/mobility)
- Hormonal milieu

**Leucine and mTOR Activation:**
- Leucine is key anabolic signal
- Threshold dose: ~2.5-3g per meal
- May need higher doses in elderly/critically ill

### Nutrition-Rehabilitation Integration

**EFFORT to Mobilize Study:**
- Combining nutrition with early mobilization
- Synergistic effects hypothesized
- Ongoing research

**Practical Approach:**
- Early mobility when safe
- Protein timing around physical therapy
- Resistance exercise when possible

## Quality Improvement and Implementation

### Key Metrics

| Metric | Target | Evidence Level |
|--------|--------|----------------|
| EN initiation <48h | >80% | High |
| EN interruptions | Minimize | Moderate |
| Protein delivery | >80% of goal | Moderate |
| Indirect calorimetry use | When indicated | Low |
| Refeeding syndrome screening | All at-risk patients | High |

### Barriers to Optimal Nutrition

**System-Level:**
- Fasting for procedures
- GI intolerance protocols (too conservative)
- Formula availability
- Dietitian staffing

**Patient-Level:**
- Hemodynamic instability
- GI dysfunction
- High residuals (over-emphasized)

### Implementation Strategies
- Nutrition-focused QI projects
- Daily nutrition review on rounds
- Nurse-driven feeding protocols
- Reduced fasting for procedures
- Audit and feedback

## Controversies and Future Directions

### Unresolved Questions
1. Optimal protein dose (especially in organ failure)
2. Role of supplemental PN if EN inadequate
3. Timing of full feeding (acute vs post-acute)
4. Benefit of specific formulas
5. Role of immunonutrition

### Future Research
- Adaptive trial designs
- Metabolic phenotyping
- Nutrition + rehabilitation trials
- Long-term functional outcomes
- Precision nutrition approaches

### Artificial Intelligence Applications
- Predictive models for nutrition needs
- Automated feeding adjustment
- Integration with clinical data

## Ethical Considerations

### Artificial Nutrition at End of Life
- Nutrition is medical intervention
- Can be withheld or withdrawn
- Family understanding crucial
- Does not necessarily prolong life meaningfully

### Resource Allocation
- Cost of specialized formulas
- Cost-effectiveness data limited
- PN significantly more expensive than EN

### Research Ethics
- Placebo-controlled trials in vulnerable population
- Consent in incapacitated patients
- Equipoise for nutrition interventions`,
      keyTerms: [
        {
          term: "metabolic phenotyping",
          definition:
            "Characterizing critically ill patients by their metabolic response to guide individualized nutrition therapy",
        },
        {
          term: "sarcopenia",
          definition:
            "Loss of muscle mass and function; baseline sarcopenia predicts worse ICU outcomes",
        },
        {
          term: "leucine threshold",
          definition:
            "Minimum leucine dose (~2.5-3g) needed to maximally stimulate muscle protein synthesis",
        },
        {
          term: "precision nutrition",
          definition:
            "Individualized nutrition therapy based on biomarkers, phenotype, and disease phase",
        },
        {
          term: "mTOR",
          definition:
            "Mammalian target of rapamycin - key regulator of muscle protein synthesis activated by leucine",
        },
      ],
      clinicalNotes: `Expert practice points:
1. The EFFORT trial suggests aggressive protein targets (>2.2 g/kg/day) may not benefit and could harm patients with organ failure
2. No strong evidence for specific caloric targets - avoid overfeeding in acute phase
3. Metabolic phenotyping is an emerging concept but not yet practical for bedside use
4. Integration of nutrition with early rehabilitation may be synergistic
5. Long-term functional outcomes should guide nutrition research priorities`,
    },
  },

  media: [
    {
      id: "enteral-access-routes",
      type: "diagram",
      filename: "enteral-access-routes.svg",
      title: "Enteral Nutrition Access Routes",
      description:
        "Diagram showing different feeding tube placements (NG, NJ, PEG, PEJ)",
    },
    {
      id: "nutrition-algorithm",
      type: "diagram",
      filename: "icu-nutrition-algorithm.svg",
      title: "ICU Nutrition Decision Algorithm",
      description:
        "Flowchart for selecting enteral vs parenteral nutrition in critically ill patients",
    },
  ],

  citations: [
    {
      id: "aspen-sccm-guidelines-2016",
      type: "article",
      title:
        "Guidelines for the Provision and Assessment of Nutrition Support Therapy in the Adult Critically Ill Patient",
      authors: ["McClave, S.A.", "Taylor, B.E.", "Martindale, R.G."],
      source: "JPEN",
      page: "159-211",
    },
    {
      id: "target-trial-2018",
      type: "article",
      title:
        "Energy-Dense versus Routine Enteral Nutrition in the Critically Ill",
      authors: ["Chapman, M.", "Peake, S.L.", "Bellomo, R."],
      source: "NEJM",
      page: "823-834",
    },
  ],

  crossReferences: [
    {
      targetId: "critical-care-icu-basics-equipment",
      targetType: "topic",
      relationship: "related",
      label: "ICU Basics",
    },
    {
      targetId: "critical-care-sepsis-recognition-treatment",
      targetType: "topic",
      relationship: "related",
      label: "Sepsis Management",
    },
    {
      targetId: "critical-care-multi-organ-failure",
      targetType: "topic",
      relationship: "related",
      label: "Multi-Organ Failure",
    },
  ],

  tags: {
    systems: ["critical-care", "gastrointestinal", "metabolism"],
    topics: [
      "nutrition",
      "enteral feeding",
      "parenteral nutrition",
      "critical illness metabolism",
    ],
    keywords: [
      "TPN",
      "tube feeding",
      "refeeding syndrome",
      "protein",
      "calories",
      "metabolic response",
    ],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "surgery"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default icuNutrition;
