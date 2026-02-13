/**
 * Restaurant & Food Service Health - Comprehensive Educational Content
 *
 * Covers occupational health hazards in the restaurant and food service
 * industry including burns, cuts, slips/falls, ergonomic risks, chemical
 * exposures, food safety, and heat stress in kitchen environments.
 */

import { EducationalContent } from '../types';

export const restaurantFoodServiceHealthContent: EducationalContent = {
  id: 'topic-restaurant-food-service-health',
  type: 'topic',
  name: 'Restaurant & Food Service Health',
  nameEs: 'Salud en Restaurantes y Servicios de Alimentos',
  alternateNames: ['Food Service Worker Safety', 'Hospitality Industry Health'],

  levels: {
    1: {
      level: 1,
      summary: 'Working in restaurants and kitchens can be dangerous because of hot surfaces, sharp knives, slippery floors, and long hours on your feet.',
      explanation: `Millions of people work in restaurants, cafeterias, and food service. While the job might not seem as dangerous as construction or farming, restaurant workers get hurt more often than you might think.

**Common dangers in restaurants:**

1. **Burns**: Hot stoves, ovens, fryers, and steam are everywhere in a kitchen. Oil from a deep fryer can reach over 350°F and cause severe burns instantly.

2. **Cuts**: Knives, slicers, and broken glass are common causes of cuts. Kitchen knives are razor-sharp, and a moment of distraction can lead to a serious injury.

3. **Slips and falls**: Wet floors from spills, mopping, and grease are the leading cause of injuries in restaurants. It is like walking on ice when a kitchen floor is greasy.

4. **Muscle and joint pain**: Standing for 8-10 hours, lifting heavy pots, and repetitive motions like chopping cause back pain, sore feet, and wrist problems.

5. **Chemical exposure**: Cleaning products, degreasers, and sanitizers can burn skin, irritate eyes, and cause breathing problems if not used properly.

6. **Heat stress**: Kitchens can reach 100°F or higher, especially near grills and ovens, causing dehydration and heat illness.

**How to stay safe:**

- **Use oven mitts and handle hot items carefully** - never rush when carrying hot food or liquids
- **Keep knives sharp** (dull knives slip more easily) and always cut away from your body
- **Clean up spills immediately** and wear non-slip shoes
- **Lift with your legs, not your back** when picking up heavy boxes or pots
- **Read labels on cleaning products** and never mix chemicals together
- **Drink water often** and take breaks when the kitchen is very hot

**Your health matters too:**
- Wash your hands often to avoid spreading germs
- Stay home when you are sick (especially with vomiting or diarrhea) to protect customers
- Report injuries to your manager right away
- You have the right to workers' compensation if you are hurt on the job`,
      keyTerms: [
        { term: 'grease burn', definition: 'A burn caused by hot cooking oil or grease, which sticks to skin and causes deeper damage than hot water' },
        { term: 'non-slip shoes', definition: 'Special shoes with textured soles that grip wet and greasy floors to prevent slipping' },
        { term: 'food safety', definition: 'Practices that keep food safe to eat, like proper cooking temperatures, handwashing, and avoiding cross-contamination' },
        { term: 'repetitive strain', definition: 'Pain or injury caused by doing the same motion over and over, like chopping vegetables for hours' },
        { term: 'sanitizer', definition: 'A chemical used to kill germs on surfaces and equipment in a kitchen' },
      ],
      analogies: [
        'A kitchen is like a factory with hazards at every station - hot surfaces, sharp tools, and chemicals. Just like factory workers need safety training, so do restaurant workers.',
        'Non-slip shoes in a kitchen are like snow tires on a car - they give you grip when conditions are slippery and dangerous.',
      ],
      patientCounselingPoints: [
        'If you get a burn, run cool (not ice cold) water over it for at least 10 minutes. Do not put butter or grease on a burn.',
        'Non-slip shoes are the single most important piece of safety equipment in a restaurant - make sure your shoes have slip-resistant soles.',
        'If you get a deep cut, apply firm pressure with a clean cloth and go to urgent care. Stitches work best within 6-8 hours.',
        'Standing all day causes foot and back problems over time. Supportive shoes and anti-fatigue mats make a big difference.',
        'Never mix bleach with ammonia or other cleaning products - the fumes can damage your lungs.',
      ],
    },
    2: {
      level: 2,
      summary: 'The restaurant and food service industry has one of the highest injury rates among all industries, with burns, lacerations, slips and falls, musculoskeletal disorders, and chemical exposures as the primary occupational health concerns.',
      explanation: `## Food Service Occupational Health

### Industry Overview
- The restaurant industry employs over 12 million workers in the US
- Injury rate is nearly twice the national average for all industries
- Young workers (16-24) make up a large portion of the workforce and are at higher risk
- High turnover means many workers lack adequate safety training

### Primary Hazards

**1. Burns and Scalds**
- Thermal contact burns: Grills, ovens, hot plates, steam tables
- Scald burns: Boiling water, hot oil splashes, steam
- Deep fryer injuries: Most severe burns in food service
  - Oil temperatures 325-375°F
  - Flash splatter during food insertion
  - Catastrophic burns from fryer tip-over
- Prevention: Oven mitts, splash guards, proper fryer procedures, keeping pathways clear

**2. Cuts and Lacerations**
- Knives (most common): Improper cutting technique, dull blades, lack of attention
- Meat slicers: Can cause severe lacerations and amputations
- Mandolines and food processors: Blade contact injuries
- Broken glass and can edges
- Prevention: Cut-resistant gloves, proper training, blade guards, sharp knives

**3. Slips, Trips, and Falls**
- Leading cause of workers' compensation claims in food service
- Causes: Grease/oil spills, water/ice on floors, cluttered walkways
- Areas of highest risk: Kitchen line, dish area, walk-in cooler entrance
- Prevention: Non-slip footwear, immediate spill cleanup, anti-slip floor mats, proper lighting

**4. Musculoskeletal Disorders**
- Prolonged standing: Plantar fasciitis, varicose veins, lower back pain
- Repetitive motions: Carpal tunnel syndrome, trigger finger, epicondylitis
- Heavy lifting: Receiving deliveries, carrying bus tubs, moving equipment
- Awkward postures: Reaching into reach-ins, bending to low shelves

**5. Chemical Exposures**
- Cleaning chemicals: Degreasers, oven cleaners, sanitizers
- Quaternary ammonium compounds (quats): Skin sensitization
- Chlorine-based sanitizers: Eye and respiratory irritation
- Mixing hazards: Bleach + ammonia = chloramine gas (toxic)
- Prevention: SDS availability, proper dilution, ventilation, PPE

### Food Safety and Worker Health

**Foodborne Illness Prevention:**
- Workers must not handle food when ill with vomiting, diarrhea, or jaundice
- "Big Five" pathogens requiring exclusion: Norovirus, Hepatitis A, Salmonella Typhi, Shigella, E. coli O157:H7
- Proper handwashing technique (20 seconds with soap and water)
- Glove use and change frequency
- Temperature danger zone: 41-135°F (bacteria multiply rapidly)

### Workplace Violence
- Food service workers face elevated risk of workplace violence
- Cash handling, late-night hours, and public-facing work increase risk
- De-escalation training and security measures recommended
- Reporting protocols for incidents

### Young Worker Protections
- Federal child labor laws restrict hazardous equipment use for workers under 18
- Prohibited tasks: Operating meat slicers, dough mixers, bakery machines
- Exceptions for 16-17 year olds exist for some equipment with training
- Maximum hour restrictions for workers under 16`,
      keyTerms: [
        { term: 'scald burn', definition: 'A burn caused by hot liquids or steam, common in kitchens from boiling water, soup, and steam from dishwashers' },
        { term: 'cut-resistant gloves', definition: 'Protective gloves made from materials like Kevlar or stainless steel mesh that protect hands from knife cuts and slicer blades' },
        { term: 'temperature danger zone', definition: 'The temperature range between 41°F and 135°F where bacteria that cause foodborne illness multiply most rapidly' },
        { term: 'quaternary ammonium compounds', definition: 'A class of disinfectants (called "quats") commonly used as food-contact surface sanitizers that can cause skin irritation and sensitization', pronunciation: 'KWAH-ter-nary am-OH-nee-um' },
        { term: 'Big Five pathogens', definition: 'Five organisms (Norovirus, Hepatitis A, Salmonella Typhi, Shigella, E. coli O157:H7) that require worker exclusion from food handling due to high transmissibility' },
      ],
      patientCounselingPoints: [
        'If you work with a meat slicer, always use the guard and a cut-resistant glove on your non-cutting hand. Slicer injuries are among the most severe in food service.',
        'Tell your manager if you have vomiting, diarrhea, or jaundice - food safety laws require you to stop handling food when ill.',
        'Invest in good non-slip shoes and replace them regularly as the soles wear down - most food service injuries are from slips and falls.',
        'If you develop a rash on your hands from cleaning products, tell your doctor what chemicals you use at work. You may need different gloves or products.',
      ],
    },
    3: {
      level: 3,
      summary: 'Food service occupational health involves managing thermal injury risk hierarchies, ergonomic analysis of high-repetition tasks, chemical hazard assessment for commercial kitchen chemicals, foodborne illness prevention as an occupational exposure, and unique psychosocial stressors of the hospitality industry.',
      explanation: `## Detailed Analysis of Food Service Hazards

### Burn Injury Classification and Prevention

**Thermal Burn Risk Hierarchy in Food Service:**
1. Deep fryer operations (highest risk for severe burns)
2. Steam from dishwashers and steam tables
3. Contact burns from ovens, grills, and hot surfaces
4. Scald burns from hot liquids (soups, sauces, coffee)

**Deep Fryer Injury Prevention Engineering:**
- Fryer design: Auto-lift baskets, splash guards, thermostat controls
- Boil-over prevention: Oil level monitoring, moisture control on frozen products
- Fryer filtration systems reducing manual oil handling
- Auto-shutoff mechanisms for temperature exceedance
- Positioning: Away from high-traffic areas, non-slip flooring around fryer

**Burn Treatment in Kitchen Setting:**
- First aid: Cool running water 10-20 minutes (not ice)
- Remove clothing/jewelry near burn (if not adhered)
- Cover with clean non-adhesive dressing
- Do NOT apply butter, toothpaste, or home remedies
- Seek medical care for: Burns >3 inches, full thickness, face/hands/genitals/joints

### Ergonomic Analysis of Food Service Tasks

**Biomechanical Risk Assessment:**

| Task | Primary Risk Factors | Affected Structures |
|------|---------------------|-------------------|
| Knife work (chopping) | Repetitive wrist flexion/extension, grip force | Carpal tunnel, De Quervain's |
| Tray carrying | Static shoulder loading, asymmetric load | Rotator cuff, cervical spine |
| Dishwashing | Prolonged standing, wet work, reaching | Plantar fascia, hands, low back |
| Line cooking | Prolonged standing, heat, reaching | Low back, lower extremity venous |
| Receiving/stocking | Heavy lifting, carrying, overhead reaching | Lumbar spine, shoulders |
| Mopping/cleaning | Awkward postures, pushing/pulling | Low back, shoulders |

**Ergonomic Interventions:**
- Anti-fatigue mats at standing stations
- Adjustable prep table heights
- Mechanical assists for heavy deliveries (hand trucks, carts)
- Task rotation to reduce repetitive exposure
- Proper knife selection and maintenance (reducing grip force)
- Footwear with arch support and cushioning

### Chemical Hazard Assessment

**Common Kitchen Chemicals and Health Effects:**

| Chemical Category | Examples | Primary Hazards | Route |
|------------------|----------|-----------------|-------|
| Degreasers | Sodium hydroxide, potassium hydroxide | Caustic burns, eye injury | Dermal, splash |
| Oven cleaners | Sodium hydroxide (aerosol) | Respiratory irritation, skin burns | Inhalation, dermal |
| Sanitizers (chlorine) | Sodium hypochlorite | Eye/skin irritation, respiratory | All routes |
| Sanitizers (quat) | Alkyl dimethyl benzyl ammonium chloride | Skin sensitization, asthma | Dermal, inhalation |
| Pest control | Various insecticides | Variable toxicity | All routes |

**Chemical Mixing Dangers:**
- Bleach + ammonia → Chloramine gas (respiratory distress, pulmonary edema)
- Bleach + acid → Chlorine gas (severe respiratory injury)
- Acid + base → Exothermic reaction with splatter risk
- These mixing events are common in kitchens and can affect multiple workers

### Foodborne Illness as Occupational Exposure

**Worker-to-Food Transmission:**
- Norovirus: Most common cause of foodborne outbreaks from infected workers
- Incubation: 12-48 hours; shedding persists 2+ weeks after symptoms resolve
- Attack rate: 50-70% in close-contact settings
- FDA Food Code requires exclusion until 24-48 hours after symptoms resolve

**Occupational Acquisition:**
- Hepatitis A: Fecal-oral transmission; vaccination recommended for food workers
- Staphylococcal food poisoning: Workers with infected wounds contaminating food
- Campylobacter: Handling raw poultry (occupational risk for kitchen workers)

### Psychosocial Hazards

**Industry-Specific Stressors:**
- High-pressure service environment (rush periods)
- Low wages with income insecurity (tipped wages, variable hours)
- Hostile work environment and workplace violence from customers
- Substance use rates elevated in food service industry
- Sleep disruption from late-night and variable shift schedules
- Sexual harassment prevalence (particularly for tipped workers)
- Limited access to health insurance and paid sick leave`,
      keyTerms: [
        { term: 'chloramine gas', definition: 'A toxic gas produced when bleach (sodium hypochlorite) is mixed with ammonia-containing products, causing respiratory distress and potentially fatal pulmonary edema in enclosed kitchen spaces' },
        { term: 'anti-fatigue mat', definition: 'A cushioned floor mat placed at standing workstations to reduce musculoskeletal fatigue and pain by encouraging micro-movements and reducing ground reaction forces on the feet and joints' },
        { term: 'FDA Food Code', definition: 'A model food safety code published by the FDA and adopted by state and local jurisdictions, establishing requirements for food worker health, hygiene, and exclusion/restriction criteria for foodborne illness' },
        { term: 'De Quervain tenosynovitis', definition: 'Inflammation of the tendons on the thumb side of the wrist, caused by repetitive gripping and twisting motions common in food preparation tasks', pronunciation: 'deh-kwer-VAHNZ' },
        { term: 'wet work', definition: 'Occupational exposure to water or aqueous solutions for >2 hours per shift, which damages the skin barrier and increases risk of irritant and allergic contact dermatitis, common in dishwashing and food prep' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical management of food service occupational injuries requires understanding of scald and contact burn triage, occupational dermatitis from wet work and chemical exposure, surveillance for foodborne pathogen carriage in food handlers, and occupational health program design for a high-turnover, often uninsured workforce.',
      explanation: `## Clinical Considerations in Food Service Health

### Burn Injury Triage and Management

**Severity Assessment:**
- Scald burns from kitchen liquids are typically partial thickness (second degree)
- Deep fryer oil burns may be full thickness due to higher temperature and oil adhesion
- Steam burns can cause airway injury if inhaled in enclosed spaces
- Grease fires with clothing ignition can cause extensive deep burns

**Outpatient vs. Emergency Department Criteria:**
- ED referral: Burns >5% TBSA, full thickness, face/hands/feet/genitals/perineum/joints
- ED referral: Inhalation concerns, circumferential burns, electrical burns
- Outpatient: Superficial partial thickness <5% TBSA, non-critical locations
- All burns: Tetanus status assessment

**Work-Related Burn Follow-Up:**
- Functional assessment for return to work (hand burns particularly limiting)
- Occupational therapy for scar management and range of motion
- Compression garments for hypertrophic scar prevention
- Psychological impact assessment (PTSD, anxiety about return to kitchen)

### Occupational Dermatitis in Food Service

**Irritant Contact Dermatitis (ICD):**
- Most common occupational skin disease in food service
- Pathophysiology: Disruption of epidermal barrier by wet work, detergents, food acids
- Dorsal hands and interdigital spaces most affected
- Chronic ICD leads to lichenification and fissuring
- Management: Emollient-rich barrier cream, cotton liner gloves under nitrile, gentle cleansers

**Allergic Contact Dermatitis (ACD):**
- Common allergens in food service:
  - Rubber accelerators in gloves (thiuram, carbamates)
  - Preservatives in hand cleaners (isothiazolinones)
  - Nickel (kitchen equipment, coins)
  - Food allergens: Garlic, onion, citrus (protein contact dermatitis)
- Diagnosis: Patch testing with standard series + food/rubber additives
- Management: Allergen avoidance, alternative glove materials, barrier creams

**Protein Contact Dermatitis:**
- Unique to food handlers
- IgE-mediated immediate reaction + delayed eczematous component
- Common triggers: Fish, shellfish, meats, flour, spices
- Diagnosis: Skin prick testing to food allergens
- Distinguished from typical ACD by immediate urticarial component

### Foodborne Pathogen Surveillance

**Post-Illness Return-to-Work Criteria (FDA Food Code):**

| Pathogen | Exclusion Criteria | Return Criteria |
|----------|-------------------|-----------------|
| Norovirus | Vomiting/diarrhea | 24-48 hrs after symptom resolution |
| Hepatitis A | Jaundice, diagnosis | 7 days after onset of jaundice + clearance |
| Salmonella Typhi | Diagnosis confirmed | 2 consecutive negative stool cultures |
| Shigella | Diagnosis confirmed | 1 negative stool culture (or 7 days symptom-free) |
| E. coli O157:H7 | Diagnosis confirmed | 2 consecutive negative stool cultures |

**Asymptomatic Carriage:**
- Norovirus shedding persists 2-4 weeks after clinical recovery
- Salmonella Typhi chronic carriage (1-5% of cases) requires prolonged surveillance
- Hepatitis A: Highest viral shedding during 2 weeks before symptom onset

### Kitchen Ventilation and Indoor Air Quality

**Cooking Emissions:**
- Particulate matter (PM2.5): Grilling, frying, broiling generate significant PM
- Polycyclic aromatic hydrocarbons (PAHs): Charbroiling, smoking
- Aldehydes: Formaldehyde and acrolein from heated cooking oils
- Carbon monoxide: Gas stove combustion in poorly ventilated kitchens
- Nitrogen dioxide: Gas combustion byproduct

**Ventilation Requirements:**
- Commercial kitchen hoods: Capture and exhaust cooking effluents
- Makeup air systems: Replace exhausted air to maintain pressure balance
- ASHRAE Standard 154: Ventilation for commercial cooking operations
- Minimum exhaust rates based on hood type and appliance category

### Occupational Health Program Design for Food Service

**Challenges:**
- High employee turnover (annual rates 60-80%)
- Large proportion of young, part-time workers
- Limited health insurance coverage
- Multiple languages spoken in workforce
- Small business operators with limited resources

**Essential Program Elements:**
1. New-hire safety orientation (hazard recognition, PPE, emergency procedures)
2. Food handler health screening and exclusion policies
3. Injury reporting and first aid protocols
4. Chemical hazard communication (SDS access, dilution training)
5. Slip/fall prevention program (footwear requirements, cleaning schedules)
6. Workers' compensation claim management
7. Return-to-work protocols adapted to food service tasks`,
      keyTerms: [
        { term: 'protein contact dermatitis', definition: 'A unique form of occupational dermatitis in food handlers combining IgE-mediated immediate urticarial reactions with delayed eczematous responses to food proteins such as fish, shellfish, and flour' },
        { term: 'cooking emissions', definition: 'Airborne contaminants generated during commercial cooking including particulate matter (PM2.5), polycyclic aromatic hydrocarbons, aldehydes, and combustion products from gas appliances' },
        { term: 'asymptomatic carriage', definition: 'The persistent shedding of a pathogen in stool or other secretions after clinical symptoms have resolved, representing a continued transmission risk in food handling occupations' },
        { term: 'ASHRAE Standard 154', definition: 'Ventilation for Commercial Cooking Operations; establishes minimum exhaust and makeup air requirements for commercial kitchen hood systems based on appliance type and cooking method' },
        { term: 'hypertrophic scar', definition: 'Excessive scar tissue formation common after deep partial and full thickness burns, causing functional impairment of affected joints and benefiting from early compression therapy and occupational therapy' },
        { term: 'isothiazolinone', definition: 'A class of preservatives commonly used in industrial hand cleaners and cleaning products that is a frequent cause of allergic contact dermatitis in food service workers' },
      ],
      clinicalNotes: `Important clinical management points:

1. **Hand dermatitis differential**: In food service workers presenting with hand dermatitis, systematically evaluate for irritant contact dermatitis (wet work, detergents), allergic contact dermatitis (glove chemicals, preservatives), protein contact dermatitis (food allergens), and pre-existing atopic dermatitis. The distinction guides management and determines work-relatedness for compensation purposes.

2. **Food handler exclusion decisions**: Clinicians clearing food workers for return after gastrointestinal illness should be familiar with their jurisdiction's adoption of the FDA Food Code. Requirements vary by pathogen and are more stringent for food workers at "highly susceptible populations" establishments (hospitals, nursing homes, daycares).

3. **Kitchen burn management**: Grease burns in food service are often more severe than they initially appear due to the high temperature and adhesive properties of cooking oil. Assess all deep fryer burns as potentially full thickness and refer early for burns to hands and forearms (most common location), which can cause significant functional impairment.

4. **Respiratory symptoms in kitchen workers**: Consider cooking oil fumes, cleaning chemical exposure, and gas combustion products in the differential for kitchen workers with respiratory complaints. Spirometry baseline and cross-shift testing can help identify work-related airway changes. Chinese restaurant workers exposed to high-heat wok cooking have documented elevated lung cancer risk.

5. **Young worker considerations**: Workers under 18 are prohibited from operating meat slicers, dough mixers, and bakery machinery under federal child labor laws. Clinicians treating injured minors should document the task being performed at the time of injury, as violations carry significant employer penalties.`,
    },
    5: {
      level: 5,
      summary: 'Emerging research in food service occupational health addresses cooking fume carcinogenicity, bioaerosol exposure during commercial cooking, the intersection of food safety regulation with occupational health, and innovative intervention strategies for a fragmented industry characterized by high turnover and limited safety infrastructure.',
      explanation: `## Advanced Topics in Food Service Occupational Health

### Cooking Fume Exposure and Cancer Risk

**Epidemiological Evidence:**
- IARC classifies "emissions from high-temperature frying" as Group 2A (probably carcinogenic)
- Chinese cooking fumes: Meta-analysis OR 1.6 for lung cancer in exposed cooks (non-smokers)
- Western cooking methods: Less studied; emerging data on charbroiling and deep frying
- PAH and aldehyde exposure levels in commercial kitchens can exceed occupational exposure limits

**Key Carcinogenic Components:**
- Polycyclic aromatic hydrocarbons (PAHs): Benzo[a]pyrene, dibenz[a,h]anthracene
- Heterocyclic amines (HCAs): Formed at high-temperature meat cooking
- Aldehydes: Acrolein (ciliotoxic), formaldehyde (IARC Group 1 carcinogen)
- Trans,trans-2,4-decadienal: Specific marker of heated cooking oil decomposition
- Fine particulate matter (PM2.5): Penetrates deep into alveoli

**Exposure Assessment:**
- Personal air sampling for PAHs, aldehydes, and PM2.5 during cooking shifts
- Urinary 1-hydroxypyrene as biomarker of PAH exposure
- Cross-shift FEV1 changes as indicator of acute airway response
- Lung cancer mortality studies in commercial cooks (SMR data)

### Bioaerosol and Microbiological Exposures

**Aerosolization During Food Processing:**
- High-pressure water spraying during cleaning generates bioaerosols
- Commercial dishwashers release bacterial aerosols at cycle completion
- Meat cutting/grinding generates airborne bacterial particles
- Walk-in coolers: Condensation promotes fungal growth (Penicillium, Aspergillus)

**Occupational Allergy to Food Proteins:**
- Baker's asthma: Wheat flour, alpha-amylase enzyme (baking industry)
- Seafood processing asthma: Aerosolized crab/shrimp proteins
- Occupational rhinitis from spice dust exposure
- IgE-mediated sensitization confirmed by specific IgE and skin prick testing

### Regulatory Framework Intersection

**Dual Regulatory Environment:**
- OSHA: Worker safety and health (chemical hazards, PPE, injury prevention)
- FDA/State Health Departments: Food safety (food handler exclusion, hygiene)
- These systems often operate independently despite overlapping concerns
- No OSHA-specific standard for restaurant industry hazards

**Gaps in Regulatory Coverage:**
- No federal OSHA standard specifically addressing cooking fume exposure limits
- Kitchen ventilation standards (ASHRAE 154) are voluntary, not OSHA-enforced
- Wet work exposure limits not established (EU has >2 hours classification)
- Indoor heat stress in kitchens not covered by pending OSHA heat rule (focused on outdoor workers)

### Technology and Innovation

**Smart Kitchen Safety:**
- Automated deep fryer systems reducing worker-oil contact
- IoT-enabled temperature monitoring for food safety compliance
- Smart ventilation systems adjusting exhaust based on real-time cooking activity
- Wearable slip detection devices for real-time fall prevention
- Robotic food preparation reducing repetitive motion injury

**Evidence-Based Intervention Programs:**
- Safe Kitchens initiative: Comprehensive burn and cut prevention program
- OSHA's Restaurant Safety Materials: Industry-specific hazard guides
- National Restaurant Association ServSafe: Food safety certification program
- Integration of safety training with food safety training (dual competency)

### Food Service Worker Health Equity

**Socioeconomic Determinants:**
- Median food service worker wages below national average
- Limited access to employer-provided health insurance
- Lack of paid sick leave forcing symptomatic workers to handle food
- Immigration status barriers to reporting injuries or filing claims
- Tip-dependent income creating power dynamics with customers

**Policy Innovations:**
- Paid sick leave mandates (state and local levels) reducing presenteeism
- One Fair Wage movement to eliminate subminimum tipped wages
- Expanded Medicaid coverage improving healthcare access
- OSHA cooperative programs targeting restaurant industry
- Community health center partnerships for food service worker populations

### Research Priorities

**Understudied Areas:**
- Long-term respiratory effects of chronic cooking fume exposure in Western kitchens
- Cancer risk in commercial cooks (prospective cohort studies needed)
- Effectiveness of safety interventions in high-turnover settings
- Mental health outcomes and substance use in food service workers
- Optimal ventilation design for commercial kitchens based on health outcomes
- Microbiome effects of chronic chemical sanitizer exposure`,
      keyTerms: [
        { term: 'cooking fume carcinogenicity', definition: 'IARC Group 2A classification of high-temperature frying emissions based on evidence linking PAH and aldehyde exposure to lung cancer in commercial cooks, particularly those using high-heat methods' },
        { term: '1-hydroxypyrene', definition: 'A urinary biomarker of polycyclic aromatic hydrocarbon (PAH) exposure used to assess biological dose from cooking fume inhalation and other combustion-related exposures' },
        { term: 'baker\'s asthma', definition: 'IgE-mediated occupational asthma caused by sensitization to inhaled wheat flour proteins or alpha-amylase enzyme, the most common form of occupational asthma in the food industry' },
        { term: 'presenteeism', definition: 'The practice of attending work while ill, which in food service creates a dual occupational and public health hazard by enabling foodborne pathogen transmission from symptomatic food handlers' },
        { term: 'trans,trans-2,4-decadienal', definition: 'A specific aldehyde marker of heated cooking oil decomposition, used as an indicator compound for cooking fume exposure assessment in occupational studies' },
        { term: 'dual regulatory environment', definition: 'The intersection of OSHA worker safety regulations and FDA/state food safety regulations in the food service industry, which often creates gaps in coverage and inconsistent enforcement' },
      ],
      clinicalNotes: `Expert practice considerations:

1. **Cooking fume exposure assessment**: For commercial cooks with respiratory symptoms or lung cancer, obtain detailed cooking method history (wok cooking, deep frying, charbroiling), kitchen ventilation assessment, and duration of exposure. Consider personal air monitoring for PAHs and aldehydes. The IARC 2A classification of high-temperature frying emissions supports work-relatedness arguments for respiratory disease in commercial cooks.

2. **Occupational asthma in food workers**: Baker's asthma (wheat flour, alpha-amylase), seafood processing asthma, and spice dust rhinitis/asthma are well-established entities. Diagnosis requires specific IgE testing, serial peak flow monitoring, and potentially specific inhalation challenge. Early identification and removal from exposure improves prognosis.

3. **Paid sick leave and public health**: Clinicians should be aware that food workers without paid sick leave face economic pressure to work while symptomatic. This has documented public health consequences: CDC estimates that ill food workers cause 40% of restaurant-associated norovirus outbreaks. Advocate for paid sick leave policies as both an occupational and public health intervention.

4. **Chemical mixing incidents**: Chloramine gas exposure from bleach-ammonia mixing is one of the most common chemical exposure events in restaurants. Present with acute onset cough, dyspnea, and eye irritation. Chest X-ray and pulmonary function testing recommended. Most cases are self-limited, but high-concentration exposure can cause delayed pulmonary edema (12-24 hours).

5. **Workers' compensation in food service**: Many food service workers are unaware of their workers' compensation rights or fear retaliation for filing claims. Document work-relatedness of injuries clearly and provide information about rights in the patient's primary language. Early treatment of musculoskeletal injuries prevents chronicity.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'osha-restaurant-safety',
      type: 'website',
      title: 'Restaurants - Safety and Health Topics',
      authors: ['Occupational Safety and Health Administration'],
      source: 'OSHA',
      url: 'https://www.osha.gov/restaurants',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cdc-food-worker-health',
      type: 'website',
      title: 'Food Safety - Food Workers',
      authors: ['Centers for Disease Control and Prevention'],
      source: 'CDC',
      url: 'https://www.cdc.gov/foodsafety/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'who-food-safety',
      type: 'guideline',
      title: 'Food Safety - Key Facts',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/news-room/fact-sheets/detail/food-safety',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    { targetId: 'topic-cleaning-product-safety', targetType: 'topic', relationship: 'related', label: 'Cleaning Product Safety' },
    { targetId: 'topic-heat-illness-prevention', targetType: 'topic', relationship: 'related', label: 'Heat Illness Prevention' },
  ],

  tags: {
    systems: ['dermatologic', 'respiratory', 'musculoskeletal', 'gastrointestinal'],
    topics: ['occupational-medicine', 'food-safety', 'injury-prevention', 'chemical-safety'],
    keywords: ['restaurant', 'food service', 'burns', 'slips and falls', 'food safety', 'kitchen safety', 'cooking fumes'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
