/**
 * Dental Diet - Comprehensive Educational Content
 *
 * Covers nutrition for oral health, foods that prevent or promote
 * dental disease, dietary recommendations for caries prevention,
 * and the relationship between diet and oral health.
 */

import { EducationalContent } from '../types';

export const dentalDiet: EducationalContent = {
  id: 'topic-dental-diet',
  type: 'topic',
  name: 'Dental Diet',
  nameEs: 'Dieta y Salud Dental',
  alternateNames: [
    'Nutrition for Oral Health',
    'Diet and Dental Health',
    'Cariogenic Diet',
    'Oral Health Nutrition',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'What you eat and drink affects your dental health. Foods with sugar feed bacteria that cause cavities. Crunchy fruits and vegetables help clean teeth. Drinking water, especially with fluoride, helps protect your teeth.',
      explanation: `**How Food Affects Your Teeth**

Your diet plays a big role in keeping your teeth healthy. Every time you eat, bacteria in your mouth mix with sugars to create acid that attacks your teeth.

**Foods That Can Harm Your Teeth:**

*Sugary Foods and Drinks:*
- Candy, cookies, cake
- Soda, sports drinks, fruit juice
- Energy drinks
- Sticky foods like raisins, dried fruit

*Acidic Foods and Drinks:*
- Citrus fruits (oranges, lemons, grapefruits)
- Soda (acid + sugar double trouble)
- Fruit juices
- Pickles, vinegar

**Why These Are Harmful:**
- Sugar feeds bacteria that make acid
- Acid wears away tooth enamel
- Sticky foods stay on teeth longer
- Sipping sugary drinks bathes teeth in sugar

**Foods That Help Your Teeth:**

*Crunchy Fruits and Vegetables:*
- Apples, carrots, celery
- Help clean teeth while chewing
- Make you salivate (saliva protects teeth)

*Cheese and Dairy:*
- Cheese helps neutralize acid
- Milk and yogurt contain calcium for strong teeth

*Water:*
- Especially fluoridated tap water
- Washes away food particles
- Strengthens teeth with fluoride

*Nuts and Seeds:*
- Low sugar, high protein
- Chewing stimulates saliva

**Tips for Healthier Teeth:**

1. **Limit how often you eat sugar** - It's not just how much, but how often!
2. **Finish with cheese** - Helps neutralize acid from a meal
3. **Drink water after eating** - Washes away food and acid
4. **Save sweets for mealtime** - Less harmful than snacking all day
5. **Avoid sipping sugary drinks** - Sip water instead

**Remember:**
Your teeth are affected by what you eat AND how often you eat!`,
      keyTerms: [
        { term: 'sugar', definition: 'Sweet foods that feed bacteria causing tooth decay' },
        { term: 'acid', definition: 'Substance that wears away tooth enamel' },
        { term: 'caries', definition: 'The medical term for cavities or tooth decay' },
        { term: 'enamel', definition: 'Hard outer layer of teeth that can be worn away by acid' },
        { term: 'saliva', definition: 'Natural fluid in mouth that helps protect teeth' },
      ],
      analogies: [
        'Sipping soda all day is like giving your teeth a sugar bath - constant acid attacks.',
        'Eating an apple is like nature\'s toothbrush - it helps clean while you chew.',
      ],
      examples: [
        'Drinking a soda with a meal is less harmful than sipping it all afternoon.',
        'Cheese at the end of a meal helps protect your teeth from acid.',
      ],
      patientCounselingPoints: [
        'How often you eat sugar matters more than how much - grazing all day is the worst for teeth',
        'If you crave something sweet, eat it with a meal rather than as a snack',
        'Chew sugar-free gum after meals when you can\'t brush',
      ],
    },
    2: {
      level: 2,
      summary: 'Dietary cariogenicity depends on food composition, frequency of consumption, and retentiveness. Fermentable carbohydrates lower plaque pH, promoting demineralization. Protective factors include cheese, saliva stimulation, and optimal fluoride exposure.',
      explanation: `## Cariogenic Foods

**Sugar and Fermentable Carbohydrates:**

*Primary Cariogenic Carbohydrates:*
- Sucrose (table sugar): Most cariogenic
- Glucose: High cariogenicity
- Fructose: High cariogenicity
- Maltose: High cariogenicity
- Cooked starches: Moderately cariogenic

*Sucrose: The "Gold Standard" for Cariogenicity*
- Unique: Produces extracellular glucans
- Glucans: Enable bacterial adhesion to teeth
- GTF (glucosyltransferase) from S. mutans
- Forms insoluble plaque matrix

**Food Retentiveness:**

| Highly Retentive | Moderately Retentive | Non-Retentive |
|------------------|----------------------|---------------|
| Caramels, toffee | Cookies, cake | Sugar solutions |
| Dried fruits | Bread, crackers | Most beverages |
| Granola bars | Cooked starches | Fresh fruits |
| Raisins, dates | Potato chips | Raw vegetables |
| Honey, syrup | Pasta | Milk |

**Acidic Foods and Erosion:**

*Erosive Foods/Beverages:*
- Citrus juices: pH 3-4
- Soft drinks: pH 2.5-3.5 (regular AND diet)
- Sports drinks: pH 3-4
- Wine: pH 3-4
- Pickles, vinegar: pH <4

*Erosion Mechanism:*
- Chemical dissolution of enamel
- Not bacteria-mediated
- Exacerbates caries (rougher surface)
- Sensitivity when enamel thins

**Frequency vs. Amount:**

*Critical Concept:*
- Frequency matters MORE than total amount
- Each eating/drinking event: Acid challenge
- pH drops below 5.5 for 20-30 minutes (Stephan curve)
- Frequent intake = pH remains critical

*Example:*
- Sipping soda all day: Continuous acid production
- Drinking soda with meal: Limited exposure time
- Same total amount, very different caries risk

## Protective Foods

**Cheese:**

*Mechanisms of Action:*
- Casein phosphopeptides (CPP)
- Calcium and phosphate release
- pH elevation (buffering)
- Stimulates salivary flow
- Increases calcium concentration in plaque

*Evidence:*
- Eating cheese at end of meal raises pH
- Reduces demineralization
- Recommended caries preventive

**Dairy:**

*Milk:*
- Calcium, phosphate, casein
- Low cariogenicity despite lactose
- Milk contains CPP
- Protective beverage

*Yogurt:*
- Similar to milk
- Probiotic species may benefit
- Choose unsweetened varieties

**Chewing Gum:**

*Sugar-Free Gum:*
- Stimulates salivary flow
- Xylitol gum: Additional benefits
- Sweeteners not fermented by oral bacteria
- Use after meals/snacks when unable to brush

**Fibrous Foods:**
- Apples, carrots, celery
- Mechanical cleansing
- Stimulate salivary flow
- Low retentiveness
- "Nature's toothbrush"

**Nuts and Seeds:**
- Low carbohydrate
- Require chewing
- Stimulate salivary flow
- Mineral content (some types)

**Water:**
- Fluoridated: Preventive effect
- Non-fluoridated: Cleansing effect
- Optimal beverage for oral health
- Neutral pH

## Practical Recommendations

**Reduce Cariogenic Risk:**

1. **Limit between-meal sugars**
   - Worst for teeth
   - Reserve sweets for mealtime

2. **Avoid prolonged sipping**
   - Especially sugary/acidic drinks
   - Finish quickly, don't nurse

3. **Choose non-cariogenic alternatives**
   - Sugar-free gum
   - Raw vegetables
   - Cheese snacks
   - Nuts

4. **Neutralize after sugary/acidic foods**
   - Cheese at end of meal
   - Water rinse
   - Sugar-free gum
   - Wait 30 min before brushing (if acidic)

5. **Dietary modifications for specific risks**
   - High caries risk: Reduce all fermentable carbs
   - Erosion risk: Limit acidic foods/drinks
   - Dry mouth: Avoid sugary foods, increase hydration

**Reading Labels:**

*Sugar aliases:*
- Sugar, sucrose, glucose, fructose
- Corn syrup, high-fructose corn syrup
- Honey, maple syrup, agave
- Dextrose, maltose
- Fruit juice concentrates

*Position matters:*
- Sugars listed first = higher quantity
- Multiple sugars = hidden sources`,
      keyTerms: [
        { term: 'cariogenic', definition: 'Causing dental caries' },
        { term: 'fermentable carbohydrates', definition: 'Carbohydrates that can be broken down by oral bacteria to produce acid' },
        { term: 'retentive', definition: 'Tending to adhere to teeth; food that remains in contact with tooth surfaces' },
        { term: 'Stephan curve', definition: 'Graph of plaque pH changes following sugar intake' },
        { term: 'CPP', definition: 'Casein phosphopeptides; proteins in cheese that stabilize calcium phosphate' },
      ],
      analogies: [
        'Each sip of soda is like a little acid attack on your teeth - sipping all day is like continuous attacks.',
        'Cheese at the end of a meal is like a fire extinguisher for acid - it puts out the acid fire.',
      ],
      clinicalNotes: 'Frequency of carbohydrate intake is more important than total amount. Sucrose is the most cariogenic sugar due to glucan production. Cheese has multiple protective mechanisms (CPP, calcium, buffering). Erosion from acidic drinks is increasing, especially in adolescents.',
      patientCounselingPoints: [
        'The worst thing for your teeth is sipping sugary drinks throughout the day',
        'If you\'re going to eat sweets, have them with a meal instead of as snacks',
        'Cheese at the end of a meal helps protect your teeth',
        'Drink water after eating to rinse away food and neutralize acid',
      ],
    },
    3: {
      level: 3,
      summary: 'Dietary cariogenicity involves complex interactions between food composition, oral biofilm ecology, salivary parameters, and host factors. The modern diet, high in refined carbohydrates and frequent eating patterns, has profoundly impacted caries prevalence.',
      explanation: `## Advanced Concepts in Diet and Caries

**Dietary Patterns and Caries:**

*Modern vs. Traditional Diets:*
- Hunter-gatherers: Minimal caries
- Agricultural revolution: Increased caries
- Industrial revolution: Sugar availability increased
- Modern: High sugar, frequent eating, high caries

*WHO Guidelines:*
- Free sugars: <10% of energy intake (strong recommendation)
- Further reduction to <5% for additional benefits
- Free sugars: Added by manufacturer/cook/consumer
- Does not include: Intrinsic sugars (fruit), milk

**Epidemiology:**

*International Patterns:*
- High sugar consumption = high caries prevalence
- Exceptions exist: Fluoride exposure can override diet effects
- Low income + high sugar = severe caries
- Access to care modifies relationship

**Biofilm-ecology Model:**

*Ecological Plaque Hypothesis:*
- Frequent carbohydrate exposure selects aciduric species
- S. mutans, lactobacilli thrive at low pH
- Beneficial species (S. sanguinis) decline
- Dysbiosis results from diet pressure

*Molecular Mechanisms:*
- Aciduricity: Acid tolerance allows survival
- Acidogenicity: Acid production kills competitors
- Glycan synthesis: Adhesion and biofilm formation
- Intracellular polysaccharide: Sustained acid production

## Detailed Food Analysis

**Sugars and Sweeteners:**

| Sweetener | Caries Risk | Notes |
|-----------|-------------|-------|
| Sucrose | High | Glucan production |
| Glucose | High | High acidogenicity |
| Fructose | High | High acidogenicity |
| High-fructose corn syrup | High | Similar to sucrose |
| Honey | High | High caries risk |
| Xylitol | Low | Not fermented, reduces S. mutans |
| Sorbitol | Low | Slowly fermented |
| Stevia, aspartame, sucralose | None | Non-cariogenic |

**Starches:**

*Raw Starch:*
- Minimal acid production
- Poor digestibility by oral bacteria
- Low cariogenicity

*Cooked Starches:*
- Gelatinized: More fermentable
- Salivary amylase breaks down
- Moderate cariogenicity
- Retention increases risk (crackers, chips)

**Fruit:**

*Fresh Fruit:*
- Whole fruit: Low cariogenicity
- Fruit juice: Moderate-high (drinking, not eating)
- Dried fruit: High (retentive + fermentable)

*Dried Fruit Concerns:*
- Raisins, dates, figs, apricots
- Retentive: Sticks to teeth
- High sugar concentration
- Chewy: Prolongs exposure

**Acidic Beverages:**

*Erosion Potential:*
- Soda (regular/diet): pH 2.5-3.5
- Sports drinks: pH 3-4
- Energy drinks: pH 3-4
- Fruit juices: pH 3-4
- Citrus juices: pH 3-4

*Erosion + Caries:*
- Erosion creates rough surface
- Rough surface retains plaque
- Plaque accumulation in erosive areas
- Synergistic damage

**Protective Components:**

*Calcium and Phosphate:*
- Dairy: Bioavailable calcium, phosphate
- Cheese: Highest cariostatic effect
- Fortified foods: Variable bioavailability

*Polyphenols:*
- Tea: Fluoride + polyphenols
- Cocoa: Antibacterial properties
- Coffee: Some protective effect
- Grape seed extract: Anti-S. mutans

*Probiotic Foods:*
- Yogurt with live cultures
- Kefir
- Fermented foods
- Evidence: Limited but promising

## Special Dietary Considerations

**Vegetarian/Vegan Diets:**
- May be high in fruit/carbohydrates
- Potential nutritional deficiencies:
  - Vitamin B12: Glossitis, ulcerations
  - Vitamin D: Impaired mineralization
  - Calcium: Enamel/dentin formation
- Counseling: Emphasize whole foods, limit frequency

**Ketogenic Diet:**
- Very low carbohydrate
- Low cariogenicity
- Potential halitosis (ketosis)
- Ensure adequate micronutrients

**Intermittent Fasting:**
- Reduced eating frequency
- Fewer acid challenges
- May reduce caries risk
- Maintain hydration

**Athletic Diets:**
- Sports drinks: High sugar + acid
- Energy gels/chews: High sugar
- Frequent carbohydrate intake
- Risk: Elevated caries risk
- Recommendations: Water, minimize frequency

**Eating Disorders:**
- Bulimia: Erosion from vomiting
- Binge eating: High sugar intake
- Perimylolysis: Palatal erosion
- Comprehensive approach needed

**Dietary Restrictions:**
- Pureed diets: Food retention
- Liquid diets: Carbohydrate frequency
- Supplements: Medication forms often sugary
- Tube feedings: Caries risk if oral bacteria present

## Salivary Considerations

**Xerostomia-Promoting Foods/Drinks:**
- Caffeine: Decreases salivary flow
- Alcohol: Dehydrating
- Salty foods: Dry mouth sensation
- Anticholinergic medications (not food but important)

**Hydration:**
- Water: Optimal for salivary flow
- Caffeinated beverages: Mild diuretic
- Alcohol: Significant diuretic
- Adequate hydration essential for saliva

## Clinical Applications

**Dietary Assessment:**
- 24-hour recall
- Food frequency questionnaire
- Focus on: Sugars, acids, frequency
- Identify hidden sugars

**Dietary Counseling:**
- Motivational interviewing
- Realistic modifications
- Patient-centered goals
- Follow-up reinforcement

**Risk-Based Recommendations:**

*Low Risk:*
- General healthy eating
- Moderate sugar intake OK
- Education on frequency

*High Risk:*
- Strict sugar reduction
- Limit eating frequency
- Xylitol gum after meals
- Cheese as snack

*Very High Risk:*
- Minimal free sugars
- Between-meal fasting
- Rigorous protocol
- Frequent monitoring`,
      keyTerms: [
        { term: 'free sugars', definition: 'Sugars added to foods/beverages plus sugars naturally present in honey, syrups, fruit juices' },
        { term: 'aciduric', definition: 'Able to tolerate acidic environments' },
        { term: 'intrinsic sugars', definition: 'Naturally occurring sugars in intact fruits and vegetables' },
        { term: 'perimylolysis', definition: 'Erosion of teeth due to chronic vomiting' },
      ],
      clinicalNotes: 'Frequency of intake is the most important dietary factor. Xylitol (5-10g/day) reduces S. mutans. Cheese is the most protective food. Erosion is increasing, especially from acidic beverages. Diet assessment should be part of every caries risk evaluation.',
      patientCounselingPoints: [
        'Keep a food diary to identify hidden sugars and frequent snacking',
        'If you eat something sweet, rinse with water afterward',
        'Choose xylitol gum to reduce cavity-causing bacteria',
        'Athletes should choose water over sports drinks when possible',
      ],
    },
    4: {
      level: 4,
      summary: 'Contemporary research explores diet-microbiome interactions, individualized nutrition based on genetic and microbial profiling, and the role of functional foods in oral health. The connection between diet, oral biofilm ecology, and systemic health is increasingly recognized.',
      explanation: `## Diet-Microbiome Interactions

**Oral Microbiome Modulation:**

*Prebiotic Approaches:*
- Arginine: Substrate for arginolytic bacteria
- Nitrate: Converts to nitrite, raises pH
- Polyphenols: Modulate microbial composition
- Fiber: Promotes beneficial species

*Probiotic Foods:*
- Fermented dairy: Lactobacillus species
- Kefir: Diverse microbial populations
- Miso, tempeh, kimchi: Fermented foods
- Evidence: Limited but growing

*Symbiotic Foods:*
- Kombucha: Tea + SCOBY
- Traditional foods
- Research in early stages

**Nutritional Genomics:**

*Gene-Diet Interactions:**
- TAS1R variants: Sweet preference
- GLUT2 polymorphisms: Sugar metabolism
- AMY1 copy number: Starch digestion
- CA6 variants: Salivary composition

*Personalized Nutrition:*
- Genetic testing for dietary response
- Microbiome analysis
- Metabolite profiling
- Individualized recommendations

## Functional Foods and Oral Health

**Polyphenol-Rich Foods:**

*Tea:*
- Catechins: Antibacterial
- Tannins: Protein precipitation
- Fluoride content (varies by type)
- Evidence: Moderate caries reduction

*Cocoa:*
- Flavonoids: Antibacterial
- Cocoa extract: Reduces S. mutans
- Dark chocolate > milk chocolate
- Limit sugar content

*Cranberry:*
- Proanthocyanidins: Anti-adhesion
- Prevents bacterial attachment
- Unsweetened juice/concentrate
- Evidence: Early research

**Spices and Herbs:**
- Cinnamon: Antibacterial
- Clove: Eugenol (antibacterial)
- Neem: Traditional use, antibacterial
- Licorice: Antibacterial compounds

**Novel Functional Ingredients:**

*Arginine:*
- Alkaline amino acid
- Substrate for arginolytic bacteria
- Ammonia production raises pH
- In toothpaste: Proven effect

*Baking Soda:*
- Sodium bicarbonate
- Raises plaque pH
- Neutralizing effect
- In toothpaste: Beneficial

*Calcium Phosphate Technologies:*
- CPP-ACP (Recaldent)
- Tricalcium phosphate
- Amorphous calcium phosphate
- Enhance remineralization

## Systemic Connections

**Diet-Oral-Systemic Axis:**

*Sugar and Systemic Disease:*
- Obesity: High sugar intake
- Diabetes: Sugar-insulin relationship
- Cardiovascular: Sugar-inflammatory pathways
- Oral health reflects dietary patterns

*Periodontal Disease and Nutrition:*
- Antioxidants: Reduce oxidative stress
- Omega-3: Anti-inflammatory
- Vitamin C: Collagen synthesis
- Vitamin D: Immune modulation

**Mediterranean Diet:**
- High in: Fruits, vegetables, whole grains, olive oil, fish
- Low in: Refined sugars, processed foods
- Oral health benefits: Reduced inflammation, better periodontal health
- Evidence: Observational studies show benefit

## Emerging Research Areas

**Xylitol and Polyols:**

*Xylitol:*
- 5-10g/day: Significant S. mutans reduction
- Mechanism: Non-fermentable, bacteriostatic
- Delivery: Gum, mints, toothpaste
- Evidence: Strong for caries prevention

*Other Polyols:*
- Erythritol: Similar to xylitol, better GI tolerance
- Sorbitol: Less effective, slowly fermented
- Maltitol: Partially fermented
- Isomalt: Non-cariogenic

**Nitrate-Nitrite Pathway:**
- Dietary nitrate (leafy greens)
- Converted to nitrite by oral bacteria
- Nitrite to nitric oxide (systemic)
- Raises oral pH (antibacterial effect)
- Cardiovascular benefits also

**Keto Diet and Oral Health:**
- Very low carbohydrate
- Ketone bodies: Antibacterial effect?
- Reduced acid production
- Halitosis common (acetone)
- Long-term effects unknown

**Plant-Based Diets:**
- Environmental benefits
- Oral health benefits and risks
- Nutrient monitoring essential
- Whole foods vs. processed

## Clinical Applications

**Motivational Interviewing for Diet Change:**
- Patient-centered approach
- Elicits change talk
- Resists righting reflex
- Supports self-efficacy

**Digital Tools:**
- Food tracking apps
- Sugar calculation
- pH monitoring apps
- Wearable technology integration

**Community Interventions:**
- Sugar-sweetened beverage taxes
- School food policies
- Water access programs
- Nutrition education
- Food desert interventions

**Policy Considerations:**
- Food labeling (sugar content)
- Marketing to children
- Sugar reduction targets
- Healthcare provider education

## Future Directions

**Personalized Nutrition:**
- Genetic profiling
- Microbiome analysis
- Metabolite assessment
- AI-driven recommendations

**Functional Food Development:**
- Anti-cariogenic formulations
- Prebiotic/probiotic foods
- Bioactive compounds
- Delivery optimization

**Implementation Science:**
- Translating evidence to practice
- Behavioral economics
- Social determinants
- Access and equity`,
      keyTerms: [
        { term: 'nutrigenomics', definition: 'Study of how genes and diet interact' },
        { term: 'arginolytic', definition: 'Bacteria producing ammonia from arginine, raising pH' },
        { term: 'SCOBY', definition: 'Symbiotic culture of bacteria and yeast used in fermented beverages' },
        { term: 'behavioral economics', definition: 'Study of how psychological factors affect economic decisions' },
      ],
      clinicalNotes: 'Xylitol (5-10g/day) effectively reduces S. mutans. Arginine-containing toothpaste shows promise. Mediterranean diet patterns benefit both oral and systemic health. Sugar taxes show positive public health outcomes.',
    },
    5: {
      level: 5,
      summary: 'The frontier of diet and oral health explores precision nutrition based on multi-omics profiling, the microbiome-gut-oral axis, and AI-driven personalized dietary recommendations. Integration of nutritional genomics, metabolomics, and behavioral science will transform preventive dietary counseling.',
      explanation: `## Precision Nutrition for Oral Health

**Multi-Omics Profiling:**

*Genomics:*
- Taste receptor variants (TAS1R/TAS2R)
- Sugar metabolism genes (GLUT2)
- Amelogenin, enamelin variants
- Immune response genes (IL-1, DEFB1)

*Microbiomics:*
- 16S rRNA: Taxonomic profiling
- Metagenomics: Functional potential
- Metatranscriptomics: Active genes
- Culture-based: Targeted probiotics

*Metabolomics:*
- Salivary metabolites
- Bacterial metabolic output
- Host-response markers
- Dietary intake biomarkers

*Proteomics:*
- Salivary proteins
- Enzyme profiles
- Immune markers
- Diet-protein interactions

**Personalized Dietary Protocols:**

*AI-Driven Recommendations:*
- Integration of multi-omics data
- Machine learning algorithms
- Real-time adaptation
- Outcome-based optimization

*Continuous Monitoring:*
- Wearable sensors
- Smartphone apps
- Salivary biomarkers
- pH monitoring

**Microbiome Engineering:**
- Precision probiotics
- Prebiotic targeting
- Synbiotic combinations
- Phage therapy (experimental)

## Future Research Directions

**Diet-Oral Microbiome-Systemic Axis:**
- Translocation pathways
- Inflammatory mediators
- Shared metabolic pathways
- Intervention points

**Novel Functional Compounds:**
- Anti-biofilm agents
- Quorum sensing inhibitors
- Enzyme inhibitors
- Metabolic modifiers

**Delivery Technologies:**
- Controlled-release foods
- Nanoparticle carriers
- Mucoadhesive formulations
- Time-release mechanisms

**Behavioral Science Integration:**
- Habit formation psychology
- Environmental design
- Social network influence
- Economic incentives

**Implementation Science:**
- Dissemination strategies
- Provider adoption
- Policy development
- Population health impact

## Clinical Translation

**Point-of-Care Nutrition Assessment:**
- Dietary pattern analysis
- Biomarker quantification
- Real-time feedback
- Personalized goals

**Digital Health Platforms:**
- Tele-nutrition counseling
- Remote monitoring
- AI coaching
- Community support

**Collaborative Care Models:**
- Dental-medical integration
- Registered dietitian collaboration
- Shared health records
- Team-based approach

## Global Perspectives

**Food System Approaches:**
- Sugar reduction targets
- Reformulation initiatives
- Labeling standards
- Marketing restrictions

**Environmental Sustainability:**
- Plant-forward diets
- Local food systems
- Reduced food waste
- Oral health co-benefits

**Health Equity:**
- Food access interventions
- Nutrition assistance programs
- Community-based approaches
- Policy advocacy

**Implementation Barriers:**
- Economic factors
- Cultural preferences
- Industry influence
- Knowledge translation

## Future Vision

Personalized, preventive, and participatory nutrition for oral health that integrates:
- Genetic and microbial profiling
- Real-time monitoring and feedback
- AI-driven optimization
- Community and policy support
- Equity and sustainability considerations`,
      keyTerms: [
        { term: 'precision nutrition', definition: 'Personalized nutrition based on individual characteristics' },
        { term: 'multi-omics', definition: 'Integration of multiple omics technologies (genomics, proteomics, metabolomics)' },
        { term: 'knowledge translation', definition: 'Process of moving research into practice' },
      ],
      clinicalNotes: `Future clinical practice:
1. Salivary testing will guide personalized diet recommendations
2. AI apps will provide real-time dietary coaching
3. Microbiome testing will inform probiotic choices
4. Genetic testing may identify high-risk dietary patterns
5. Collaborative dental-medical-nutrition care will be standard`,
    },
  },

  media: [
    {
      id: 'stephan-curve',
      type: 'diagram',
      filename: 'stephan-curve-diet.svg',
      title: 'Stephan Curve - pH Response to Sugar',
      description: 'Plaque pH changes following sugar intake',
    },
  ],

  citations: [
    {
      id: 'who-sugar-guidelines',
      type: 'article',
      title: 'Guidelines on Free Sugar Intake',
      authors: ['World Health Organization'],
      source: 'WHO Guidelines',
      chapter: '2015',
    },
    {
      id: 'diet-caries-systematic',
      type: 'article',
      title: 'Diet and Dental Caries',
      authors: ['Moynihan, P.', 'Petersen, P.E.'],
      source: 'Community Dentistry and Oral Epidemiology',
      chapter: '2004',
    },
  ],

  crossReferences: [
    { targetId: 'condition-tooth-decay', targetType: 'condition', relationship: 'related', label: 'Tooth Decay' },
    { targetId: 'topic-oral-hygiene', targetType: 'topic', relationship: 'related', label: 'Oral Hygiene' },
    { targetId: 'topic-fluoride', targetType: 'topic', relationship: 'related', label: 'Fluoride' },
  ],

  tags: {
    systems: ['dental', 'digestive'],
    structures: [],
    topics: ['nutrition', 'prevention', 'health-behavior'],
    keywords: ['diet', 'nutrition', 'caries', 'sugar', 'cariogenic', 'xylitol', 'cheese'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dentalDiet;
