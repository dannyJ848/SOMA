import { LegacyEducationalContent } from '../../../types'

export const foodAllergy: LegacyEducationalContent = {
  id: 'food-allergy',
  title: 'Food Allergy',
  specialty: 'allergy-immunology',
  category: 'allergic-conditions',

  levels: {
    1: {
      title: 'Introduction to Food Allergy',
      description: 'Basic understanding of food allergies and reactions',
      content: `
# What is Food Allergy?

A food allergy occurs when your immune system mistakenly identifies a food protein as harmful and triggers an allergic reaction.

## Common Food Allergens

The "Big 9" allergens cause most serious allergic reactions:
- Milk
- Eggs
- Fish
- Shellfish
- Tree nuts
- Peanuts
- Wheat
- Soybeans
- Sesame

## Common Symptoms

### Mild to Moderate Symptoms
- Hives (red, itchy bumps on skin)
- Itching (mouth, tongue, throat)
- Swelling (lips, face, tongue)
- Nausea, stomach pain
- Runny nose, sneezing

### Severe Symptoms (Anaphylaxis)
- Difficulty breathing or swallowing
- Swelling of throat
- Chest tightness
- Dizziness or fainting
- Pale or blue color

## Food Allergy vs. Food Intolerance

- **Food Allergy**: Immune system reaction, can be severe
- **Food Intolerance**: Digestive system issue, uncomfortable but not life-threatening

## What to Do in an Emergency

If someone shows signs of anaphylaxis:
1. Use epinephrine auto-injector (EpiPen, Auvi-Q) immediately
2. Call 911
3. Wait for emergency help
4. Use a second dose if symptoms don't improve

## Prevention

- Read food labels carefully
- Ask about ingredients at restaurants
- Carry epinephrine if prescribed
- Wear medical alert jewelry
- Inform schools, caregivers, and friends
      `
    },

    beginner: {
      title: 'Understanding Food Allergy',
      description: 'Learn about diagnosis, management, and living with food allergies',
      content: `
# Understanding Food Allergy

## How Food Allergies Develop

### Mechanism
1. **Sensitization**: First exposure, immune system creates IgE antibodies against the food
2. **Re-exposure**: Food protein binds to IgE on mast cells
3. **Reaction**: Mast cells release histamine and other chemicals

### Risk Factors
- Family history of allergies or asthma
- Other allergic conditions (atopic dermatitis, allergic rhinitis)
- Age (more common in children)
- Gut microbiome composition

## Types of Food Allergic Reactions

### IgE-Mediated Reactions
- Rapid onset (minutes to 2 hours)
- Hives, swelling, anaphylaxis
- Classic allergy

### Non-IgE-Mediated Reactions
- Delayed onset (hours to days)
- FPIES (Food Protein-Induced Enterocolitis Syndrome)
- Eosinophilic esophagitis
- Usually involves gastrointestinal symptoms

### Mixed Reactions
- Atopic dermatitis flares
- Some features of both types

## Diagnosis

### Medical History
- Timing of reactions after eating
- Specific foods and amounts
- Symptoms experienced
- Reproducibility of reactions

### Testing

**Skin Prick Testing**
- Small amounts of allergen placed on skin
- Positive if wheal forms
- Quick results (15-20 minutes)
- False positives possible

**Specific IgE Blood Tests**
- Measures allergen-specific antibodies
- Numerical result (kU/L)
- Useful if skin testing not possible

**Oral Food Challenges**
- Gold standard for diagnosis
- Gradual consumption of suspected food
- Under medical supervision
- Only if history unclear or determining resolution

## Common Food Allergens

### Peanut and Tree Nuts
- Most common cause of severe reactions
- Only ~20% outgrow peanut allergy
- Tree nut allergy often lifelong

### Milk and Egg
- Most common in children
- ~80% outgrow by age 16
- Bake milk/egg often tolerated

### Shellfish and Fish
- Usually develop in adulthood
- Often lifelong
- Shellfish allergy doesn't mean fish allergy

### Wheat
- More common in children
- Different from celiac disease
- May outgrow

### Soy
- Common in infants with soy formula
- Many outgrow by school age

## Management Strategies

### Avoidance
- Read ingredient labels every time
- Learn alternative names for allergens
- Be aware of cross-contamination
- Restaurant safety

### Emergency Preparedness
- Always carry epinephrine
- Know when and how to use it
- Have an emergency action plan
- Inform those around you

### Monitoring for Resolution
- Regular follow-up with allergist
- Repeat testing as recommended
- Food challenges to test tolerance

## Food Labels

**Major Allergen Labeling (FALCPA)**
- Clear labeling of top allergens
- "Contains:" statement
- "May contain" warnings (advisory, not required)

**Ingredient Reading Tips**
- Read every time (ingredients change)
- Learn hidden allergen sources
- Be cautious with imported products
      `
    },

    intermediate: {
      title: 'Clinical Management of Food Allergy',
      description: 'Comprehensive approach to diagnosis and treatment',
      content: `
# Clinical Management of Food Allergy

## Diagnostic Approach

### Comprehensive History

**Reaction Details**
- Exact timing from ingestion to symptoms
- All foods consumed
- Amount consumed
- Preparation method (raw vs. cooked)
- Exercise involved (FDEIA)
- Similar reactions to other foods

**Contextual Factors**
- Recent illness or medications (NSAIDs, alcohol)
- Menstrual cycle
- Previous reactions to same food
- Atopic comorbidities

### Diagnostic Testing Algorithms

**IgE-Mediated Food Allergy**

*Initial Testing*
- SPT to relevant foods based on history
- Consider component-resolved diagnostics (CRD)
- sIgE levels if SPT equivocal

*Interpretation Challenges*
- Sensitization ≠ clinical allergy
- Positive test without clinical reactivity is common
- Clinical correlation essential

**Component-Resolved Diagnostics (CRD)**

*Peanut Components*
- Ara h 1, 2, 3 (storage proteins): High risk, persistent
- Ara h 8 (PR-10 protein): Birch pollen cross-reactivity, milder
- Ara h 9 (nsLTP): Stability, severe reactions

*Milk Components*
- Casein (Bos d 8): Heat-stable, persistent
- Beta-lactoglobulin (Bos d 5): Heat-labile
- Alpha-lactalbumin (Bos d 4): Varies

*Egg Components*
- Ovomucoid (Gal d 1): Heat-stable, persistent
- Ovalbumin (Gal d 2): Heat-labile

**Testing Interpretation**

| Probability | sIgE (kU/L) | SPT (mm) |
|-------------|-------------|----------|
| High (>95%) | Varies by age/food | >8-10 |
| Moderate | Mid-range | 3-7 |
| Low | Low | <3 |

**Population-Specific Values**

*Peanut Predictive Values (Children)*
- <2 years: sIgE ≥2 predicts allergy
- >2 years: sIgE ≥5 predicts allergy
- Age-adjusted thresholds essential

## Oral Food Challenges (OFC)

### Indications
- Unclear diagnosis (history + testing discordant)
- Assessing for tolerance development
- Prior to introducing baked milk/egg
- After period of dietary elimination

### Contraindications

**Absolute**
- Uncontrolled asthma
- Recent anaphylaxis (<6-12 months)
- Active urticaria or atopic dermatitis flare
- Pregnancy
- Lack of informed consent

**Relative**
- Poorly controlled comorbid conditions
- Recent illness
- Beta-blocker use

### Challenge Protocols

**Graded Doses**
- Doses: 1%, 5%, 10%, 25%, 50%, 100% of serving
- Spaced 15-30 minutes apart
- Vital signs monitored before each dose
- Epinephrine immediately available

**Open vs. Blind**
- Open: Standard for clinical care
- Single-blind: Research or unclear history
- Double-blind: Gold standard for research

**Failed Challenge Criteria**
- Objective: Urticaria, angioedema, wheezing, vomiting >1 episode
- Subjective: Persistent symptoms despite antihistamine
- Stop and treat per protocol

## Management

### Dietary Avoidance

**Comprehensive Avoidance Education**
- Identify hidden sources
- Cross-contamination risks
- Manufacturing processes
- Restaurant strategies

**Hidden Allergen Sources**
*Peanut*: Asian cuisine, baked goods, sauces, ethnic foods
*Milk*: Casein, whey, lactalbumin, non-dairy creamer
*Egg*: Albumin, ovomucoid, mayonnaise, baked goods
*Wheat*: Gluten (different from wheat allergy), modified food starch

**Cross-Contamination**
- Shared equipment, fryers, utensils
- Buffets, bakeries, ice cream shops
- Manufacturing facilities
- "May contain" advisory labels

### Epinephrine Auto-Injectors

**Indications for Prescription**
- Confirmed IgE-mediated food allergy
- History of anaphylaxis
- Peanut/tree nut allergy
- Asthma + food allergy
- Fish/shellfish allergy

**Types and Dosing**
- EpiPen, Auvi-Q: 0.3 mg (≥30 kg), 0.15 mg (15-30 kg)
- Generic epinephrine: More affordable
- Two injectors prescribed (second dose may be needed)

**Administration Technique**
1. Remove blue safety cap
2. Place orange tip against outer mid-thigh
3. Swing and push firmly until click
4. Hold in place for 3-10 seconds
5. Massage injection site for 10 seconds
6. Call 911 and go to ED

**Proper Use**
- Into outer mid-thigh muscle (not buttock or arm)
- Can administer through clothing (avoid seams)
- No harm from accidental injection
- Replace after use or expiration

### Emergency Action Plans

**Written Plan Components**
- Specific allergens
- Early symptoms recognition
- Epinephrine administration instructions
- When to call 911
- Antihistamine as adjunct (not replacement)

**School and Community Management**
- 504 plans or similar accommodations
- Stock epinephrine availability
- Staff training
- Bullying prevention

## Special Considerations

### Baked Milk and Egg

**Tolerance Development**
- Heated protein denatures conformational epitopes
- ~70% of milk/egg allergic tolerate baked forms
- May accelerate tolerance development
- OFC to assess tolerance

**Assessment**
- OFC to muffin or cake containing milk/egg
- If tolerated, regular consumption (2-3x/week)
- May outgrow faster

### Food Protein-Induced Enterocolitis Syndrome (FPIES)

**Characteristics**
- Non-IgE mediated
- Delayed vomiting (1-4 hours)
- Diarrhea, lethargy, dehydration
- Most common: Milk, soy, rice, oat

**Diagnosis**
- Clinical history
- Negative sIgE/SPT
- Atypical OFC (higher dose, longer observation)
- Acute phase reactants (thrombocytosis, neutrophilia)

**Management**
- Strict avoidance
- Acute reaction: IV fluids, ondansetron, steroids
- Most outgrow by 3-5 years

### Eosinophilic Esophagitis (EoE)

**Food-Related Component**
- Elimination diets effective
- Common triggers: Milk, wheat, soy, egg, nuts, fish/shellfish
- Elimination strategies:
  - Step-up: 1 food then more
  - Step-down: 6-food then reintroduce
- Requires endoscopic monitoring
      `
    },

    advanced: {
      title: 'Advanced Food Allergy Management',
      description: 'Complex presentations and emerging therapies',
      content: `
# Advanced Food Allergy Management

## Special Populations

### High-Risk Patients

**Patients with Asthma**
- Increased anaphylaxis risk
- Poorly controlled asthma = severe reactions
- Ensure asthma control before OFC
- Always have asthma controller available

**Adolescents and Young Adults**
- Highest risk of fatal reactions
- Risk-taking behaviors
- Social pressures
- Transition counseling essential

**Lower Socioeconomic Status**
- Food access challenges
- Cost of allergen-free foods
- Insurance coverage for epinephrine
- Education and language barriers

### Oral Allergy Syndrome (Poll-Food Syndrome)

**Mechanism**
- IgE to pollen cross-reacts with plant proteins
- PR-10 (Bet v 1 homologs): Apple, carrot, celery, hazelnut
- Profilins: Melon, banana, tomato
- Lipid transfer proteins (nsLTP): Peach, apple, plum

**Management**
- Usually mild: OAS symptoms only
- Avoid raw forms, often tolerate cooked
- Consider immunotherapy to pollen

### Alpha-Gal Syndrome

**Delayed Anaphylaxis to Mammalian Meat**
- IgE to galactose-alpha-1,3-galactose
- Reaction 3-6 hours after ingestion
- Triggered by tick bite (Lone Star tick)
- Avoid mammalian meat, dairy, gelatin

**Diagnosis**
- Alpha-gal sIgE testing
- History of tick exposure
- Pork, beef, lamb, rabbit triggers

### Food-Dependent Exercise-Induced Anaphylaxis (FDEIA)

**Characteristics**
- Symptoms only when exercise follows food ingestion
- Wheat/omega-5 gliadin most common
- Also: Celery, shellfish, fruit
- No reaction to food at rest

**Management**
- Avoid food for 4-6 hours before exercise
- If occurs, identify and avoid trigger food
- Always carry epinephrine

## Food Immunotherapy

### Oral Immunotherapy (OIT)

**Goals**
- Increase reaction threshold
- Protect against accidental exposure
- NOT cure: ongoing avoidance recommended
- May improve quality of life

**Protocols**

*Build-Up Phase*
- Daily home dosing
- Escalation doses in clinic every 2 weeks
- Duration: 6-12 months to maintenance

*Maintenance Phase*
- Daily maintenance dose
- Typically 300mg-2g of protein
- Ongoing therapy recommended

**Success Rates**
- Peanut: 60-80% reach maintenance
- Milk: 40-60% reach maintenance
- Higher for egg
- Most reactions are mild (oral, skin)

**Risks and Considerations**
- 10-20% discontinue due to reactions
- Eosinophilic esophagitis risk (monitor)
- Requires ongoing commitment
- Not for everyone (shared decision-making)

### Sublingual Immunotherapy (SLIT)

**Differences from OIT**
- Under tongue, then swallow
- Lower doses (microgram vs. gram)
- Better safety profile
- Lower efficacy than OIT
- FDA-approved: Peanut SLIT (Palforzia)

**Ideal Candidates**
- High sIgE levels (OIT less successful)
- Safety concerns
- Younger patients

### Epicutaneous Immunotherapy (EPIT)

**Mechanism**
- Allergen delivered via skin patch
- Viaskin patch technology
- Peanut EPIT (Viaskin Peanut) phase 3 data
- Lower systemic absorption

**Advantages**
- Excellent safety profile
- Non-oral route
- Minimal local reactions

**Limitations**
- Lower efficacy than OIT
- Not yet FDA-approved

## Biomarker Development

### Predicting Persistence vs. Resolution

**Component Testing**
- Persistent allergens: Ara h 2, Cor a 9, Ana o 3 (storage proteins)
- Transient allergens: Ara h 8, Cor a 1 (PR-10 proteins)
- Heat-stable proteins = more persistent

**sIgE Levels Over Time**
- Decreasing sIgE predicts resolution
- SPT wheal size also predictive
- Combined testing most accurate

**Baseline Thresholds Predicting Persistence**
- Peanut: sIgE >25, SPT >10mm
- Milk: sIgE >15, casein >10
- Egg: sIgE >10, ovomucoid >10
- Age-adjusted thresholds essential

### Novel Biomarkers

**Basophil Activation Test (BAT)**
- More specific than sIgE
- Predicts OFC outcome
- Measures CD63 upregulation
- Not widely available

**Epitope Recognition**
- IgE binding to sequential vs. conformational epitopes
- Sequential epitope binding = persistent allergy
- May become standard testing

**T-cell Reactivity**
- Allergen-specific T-reg induction
- Biomarkers of tolerance

## Management Challenges

### Anxiety and Quality of Life

**Parental Anxiety**
- Over-vigilance common
- Impact on family dynamics
- Interference with child development
- Mental health support important

**Patient Anxiety**
- Food fear and avoidance
- Social isolation
- Bullying
- Counseling and support groups

### School and Community Management

**Accommodations**
- Allergen-free tables
- No food sharing policies
- Field trip planning
- Substitute teacher training

**Disability Laws**
- 504 Plans (US)
- ADA accommodations
- Individualized plans

### International Variations

**Different Common Allergens**
- Buckwheat (Japan/Asia)
- Sesame (Middle East)
- Peach (Mediterranean)
- Mustard (France)

**Testing Availability**
- Varies by country
- Standardization differences
- Access to therapies

## Emerging Concepts

### Prevention Strategies

**Early Introduction**
- LEAP study: Early peanut introduction reduces allergy by 81%
- EAT study: Mixed results for multiple foods
- Enquiring About Tolerance (EAT): Early egg introduction

**Guidelines (2020-2025)**
- Introduce peanut around 6 months (high risk: 4-6 months)
- Egg introduction around 6 months
- No need to delay allergenic foods
- Assess high-risk infants before introduction

**High-Risk Infant Identification**
- Severe eczema
- Egg allergy
- Consider sIgE testing before introduction

### Microbiome Interventions

**Gut-Food Allergy Connection**
- Dysbiosis in food-allergic children
- Reduced diversity
- Clostridia species protective?

**Probiotic Studies**
- Mixed results
- Specific strains may matter
- Combined with prebiotics (synbiotics)

**Fecal Microbiota Transplantation**
- Experimental
- Mouse models: promising
- Human studies: ongoing

### Novel Therapeutics

**Biologics**
- Omalizumab: Adjunct for OIT, improves desensitization
- Anti-IL-5: Eosinophilic esophagitis
- Dupilumab: EoE, may help OIT

**DNA Vaccines**
- Promising in mouse models
- Induce tolerance
- Human trials: future

**Nanoparticle Delivery**
- Encapsulated allergen
- Targeted delivery
- Clinical trials: ongoing

### Food Processing

**Hypoallergenic Foods**
- Modified proteins
- Fermentation
- High-pressure processing
- Enzymatic treatment
      `
    },

    expert: {
      title: 'Expert-Level Food Allergy Knowledge',
      description: 'Research frontiers and future directions',
      content: `
# Expert-Level Perspectives on Food Allergy

## Immunologic Mechanisms in Depth

### Epithelial Barrier Hypothesis

**Dual Allergen Exposure Hypothesis**
- Skin exposure → sensitization (via eczema)
- Oral exposure → tolerance (via gut)
- Explains eczema-food allergy link
- Implications for prevention timing

**Barrier Dysfunction**
- Filaggrin mutations (FLG)
- Tight junction proteins (claudins, occludin)
- Alarmin release (TSLP, IL-33, IL-25)
- Protease activity from allergens

**Environmental Exposures**
- Detergents and surfactants
- Hard water
- Pollutants
- Microbial dysbiosis

### Gut Immune Tolerance Mechanisms

**Oral Tolerance Induction**
- Dendritic cell sampling in Peyer's patches
- Retinoic acid conversion (CD103+ DCs)
- Treg induction (FoxP3+)
- IgA production (T-dependent and independent)

**Tolerogenic Dendritic Cells**
- CD103+ CD11b+ in small intestine
- Produce TGF-β, IL-10, retinoic acid
- Induce gut-homing Tregs (α4β7, CCR9)

**Regulatory T-cell Subsets**
- FoxP3+ natural Tregs
- Tr1 cells (IL-10 producing)
- Th3 cells (TGF-β producing)
- Their role in sustained tolerance

### Microbiome-Immune Interactions

**Early-Life Colonization**
- Birth mode effects
- Breastfeeding influence
- Antibiotic exposure
- Critical window hypothesis

**Protective Taxa**
- Clostridia clusters (IV, XIVa)
- Bacteroides fragilis
- Bifidobacterium species
- Short-chain fatty acid producers

**Mechanisms of Protection**
- SCFA production (butyrate, acetate, propionate)
- Treg induction
- Barrier enhancement
- IgA promotion

## Precision Medicine Approaches

### Multi-Omics Integration

**Genomics**
- GWAS loci: FLG, IL13, IL4R, STAT6, HLA region
- Polygenic risk scores
- Gene-environment interactions
- Pharmacogenomics

**Epigenomics**
- DNA methylation signatures
- Histone modification patterns
- Non-coding RNAs
- Environmental epigenetic modulation

**Transcriptomics**
- Single-cell RNA-seq of immune cells
- Pathway activation signatures
- Predictors of OIT response
- Tolerance vs. sensitization signatures

**Proteomics and Metabolomics**
- Serum protein biomarkers
- Metabolic signatures of tolerance
- Lipid mediator profiles
- Exhaled breath VOCs

### Component-Resolved Diagnostics 2.0

**Beyond Individual Components**
- Component panels
- Geographic variation in component relevance
- Molecular allergen networks
- Machine learning interpretation

**Cross-Reactivity Patterns**
- nsLTP syndrome (Pru p 3)
- Profilin syndromes (Bet v 2 homologs)
- CCD (cross-reactive carbohydrate determinants)

### Predictive Modeling

**OIT Success Prediction**
- Baseline sIgE levels
- BAT results
- Epitope recognition patterns
- Clinical factors (asthma, age)
- Combined algorithmic approaches

**Tolerance Development**
- sIgE trajectory patterns
- SPT wheal size changes
- IgG4/IgE ratio dynamics
- Biomarker integration

## Therapeutic Innovation

### Next-Generation Immunotherapy

**Multi-Allergen OIT**
- Simultaneous vs. sequential
- Safety considerations
- Modified protocols
- Recent trial results

**Adjunctive Biologics with OIT**

*Omalizumab*
- Facilitates faster up-dosing
- Reduces reaction frequency
- Higher success rates
- Optimal timing and duration

*Anti-IL-4Rα (Dupilumab)*
- Enhances OIT success
- Reduces reactions
- May allow higher maintenance

*Anti-TSLP/IL-33*
- Under investigation
- May target upstream pathways

**Novel Routes**
- Intralymphatic (ILIT)
- Epicutaneous (EPIT) patch technology
- Sublingual tablets (standardized dosing)

### Allergen Modification

**Hypoallergenic Variants**
- Recombinant modified proteins
- Peptide-based immunotherapy
- Reduced IgE binding, retained T-cell epitopes
- Clinical trials ongoing

**Nanoparticle Encapsulation**
- Targeted delivery
- Controlled release
- Reduced systemic exposure
- Enhanced efficacy

**DNA/RNA-Based Approaches**
- Encoding allergen proteins
- Promoting tolerance
- Plasmid DNA vaccines
- mRNA vaccines (early research)

### Microbiome Therapeutics

**Targeted Probiotics**
- Rationally selected strains
- Engineered probiotics (synthetic biology)
- Consortia formulations
- Clinical evidence building

**Postbiotics**
- Bacterial metabolites
- SCFA supplementation
- Bacterial membrane vesicles
- Defined mechanisms

**Fecal Microbiota Transplantation**
- Mechanistic studies
- Patient selection
- Delivery optimization
- Long-term effects

## Prevention 2.0

### Early Introduction Implementation

**Real-World Challenges**
- Adherence to guidelines
- Parental anxiety
- Healthcare access disparities
- Global variation in adoption

**High-Risk Strategies**
- Eczema treatment as prevention
- Skin barrier enhancement
- Targeted early introduction
- Combination approaches

### Maternal and Infant Factors

**Prenatal Influences**
- Maternal diet during pregnancy
- Maternal allergen avoidance (not recommended)
- Vitamin D supplementation
- Metabolic factors (obesity, diabetes)

**Perinatal Factors**
- Birth mode (C-section vs. vaginal)
- Early antibiotic exposure
- Hospital environment
- Feeding practices

**Breastfeeding**
- Protective but not absolute
- Milk composition variation (HMO, sIgA)
- Maternal diet while breastfeeding
- Weaning strategies

### Environmental Modification

**Household Exposures**
- Pet acquisition (dog > cat protective)
- Sibling exposure
- Daycare attendance
- Farm exposure (endotoxin)

**Pollution and Climate**
- Air pollution effects
- Climate change and pollen
- Urban vs. rural differences
- Biodiversity hypothesis

### Combined Prevention Strategies

**Integrated Approaches**
- Barrier repair + early introduction
- Probiotics + introduction
- Multi-allergen strategies
- Personalized risk assessment

## Research Frontiers

### Long-Term Outcomes

**Natural History Studies**
- Lifetime persistence patterns
- Factors predicting resolution
- Longitudinal biomarker studies
- Registry data insights

**OIT Long-Term Effects**
- Sustained unresponsiveness after discontinuation
- Quality of life years later
- Psychosocial outcomes
- Health economic analyses

### Novel Diagnostic Modalities

**Basophil Activation Testing Standardization**
- Clinical implementation
- Predictive value optimization
- Availability expansion
- Cost-effectiveness

**Artificial Intelligence**
- Image recognition for reactions
- Symptom pattern recognition
- Personalized risk prediction
- EHR integration

**Wearable Technology**
- Physiologic monitoring
- Early reaction detection
- Epinephrine auto-injector tracking
- Real-world data collection

### Equity and Access

**Socioeconomic Disparities**
- Food allergy prevalence differences
- Access to care and epinephrine
- Food cost and availability
- Insurance coverage variations

**Global Perspectives**
- Geographically varying allergens
- Resource-limited settings
- Cultural food practices
- International guideline harmonization

### Ethical Considerations

**OIT in Research vs. Clinical Practice**
- Standard of care evolution
- Shared decision-making
- Managing expectations
- Long-term commitment

**School and Community Policies**
- Balancing safety and inclusion
- Allergen bans vs. accommodation
- Liability considerations
- Disability rights

**Gene Editing Potential**
- CRISPR applications
- Germline vs. somatic
- Ethical boundaries
- Future possibilities

## Unanswered Questions

- Can we truly "cure" food allergy?
- What is the optimal duration of OIT?
- How to predict who will develop tolerance naturally?
- Can we prevent all food allergies?
- What is the role of the virome in allergy?
- How does climate change affect food allergy epidemiology?
- What are the long-term effects of early biologic exposure?
- How to personalize prevention strategies?
      `
    }
  }
}
