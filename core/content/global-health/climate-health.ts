/**
 * Climate and Health Educational Content
 *
 * Comprehensive overview of how climate change affects human health,
 * including direct impacts, disease patterns, and adaptation strategies.
 */

import { EducationalContent } from '../types';

export const CLIMATE_HEALTH: EducationalContent = {
  id: 'climate-health',
  type: 'topic',
  name: 'Climate and Health',
  alternateNames: ['Climate Change and Health', 'Planetary Health', 'Environmental Health Impacts'],

  levels: {
    1: {
      level: 1,
      summary: "Climate change affects our health in many ways, from hotter temperatures making people sick to changing where disease-carrying mosquitoes can live.",
      explanation: `The Earth is getting warmer because of gases from cars, factories, and power plants. This change in our planet's climate affects our health in many ways.

**How Climate Change Affects Health:**

**1. Extreme Heat**
- Very hot days can make people sick, especially older people and babies
- Your body has to work harder to stay cool
- Heat can cause headaches, dizziness, and even death in severe cases

**2. Bad Air**
- Hotter weather makes air pollution worse
- Wildfires create smoky air that is hard to breathe
- More pollen makes allergies worse

**3. Dangerous Weather**
- More powerful hurricanes and storms
- Floods that can hurt people and spread germs
- Droughts that make it hard to grow food

**4. New Places for Bugs**
- Mosquitoes can now live in places that used to be too cold
- This means diseases like malaria can spread to new areas
- Ticks that carry Lyme disease are spreading too

**5. Food and Water Problems**
- Droughts make it harder to grow crops
- Floods can contaminate drinking water
- Warmer oceans affect fish that people eat

**What We Can Do:**
- Plant trees and use less energy to slow down climate change
- Prepare for extreme weather
- Protect ourselves from heat and air pollution
- Help communities get ready for these changes`,
      keyTerms: [
        { term: 'climate change', definition: 'The long-term warming of the Earth caused by gases from burning fuel' },
        { term: 'heat wave', definition: 'A period of unusually hot weather that can be dangerous to health' },
        { term: 'air quality', definition: 'How clean or polluted the air is that we breathe' },
      ],
      analogies: [
        "The Earth is like a greenhouse with the windows stuck closed - heat gets in but cannot get out, making everything warmer.",
        "Climate change affecting mosquitoes is like giving them a bigger backyard to play in - they can now go places they could not before.",
      ],
      examples: [
        "In 2022, heat waves in Europe made over 60,000 people very sick or killed them.",
        "Wildfires in California and Australia create smoke that makes it hard to breathe for people hundreds of miles away.",
      ],
    },
    2: {
      level: 2,
      summary: "Climate change impacts human health through multiple pathways including heat-related illness, air quality degradation, infectious disease spread, food and water security, and extreme weather events, requiring both mitigation and adaptation responses.",
      explanation: `Climate change is increasingly recognized as the greatest threat to global health in the 21st century. The health impacts are already being observed worldwide and will worsen without action.

**Direct Health Impacts:**

**Heat-Related Illness:**
- Heat exhaustion and heat stroke
- Increased emergency department visits during heat waves
- Cardiovascular and respiratory strain
- Vulnerable populations: elderly, outdoor workers, athletes, those with chronic diseases
- Urban heat islands amplify effects in cities

**Air Quality:**
- Ground-level ozone increases with temperature
- Wildfire smoke contains PM2.5 and toxic compounds
- Longer and more severe allergy seasons
- Respiratory conditions worsen (asthma, COPD)
- Cardiovascular effects of air pollution

**Extreme Weather Events:**
- Hurricanes, floods, droughts, wildfires
- Direct injuries and deaths
- Mental health impacts (PTSD, anxiety, depression)
- Displacement and disruption of healthcare
- Long-term community health effects

**Infectious Disease Changes:**

*Vector-Borne Diseases:*
- Malaria expanding to highland areas
- Dengue spreading to new regions
- Tick-borne diseases (Lyme) moving northward
- Temperature affects mosquito breeding and virus replication

*Water-Related Diseases:*
- Cholera outbreaks after floods
- Harmful algal blooms in warming waters
- Vibrio infections in warmer coastal waters

**Food and Water Security:**

*Agriculture Impacts:*
- Crop failures from drought and extreme weather
- Reduced nutritional content of crops (higher CO2 = lower nutrients)
- Livestock heat stress
- Pest and disease impacts on food production

*Water Resources:*
- Drought affecting water availability
- Flood contamination of water supplies
- Saltwater intrusion in coastal areas
- Glacier melt affecting downstream water supply

**Mental Health:**

- Climate anxiety, especially among young people
- Trauma from extreme weather events
- "Solastalgia" - distress from environmental change
- Community disruption and displacement

**Who Is Most Vulnerable?**

- Children
- Elderly
- Outdoor workers
- Low-income communities
- People with chronic diseases
- Island nations and coastal communities
- Indigenous communities`,
      keyTerms: [
        { term: 'heat-related illness', definition: 'Health problems caused by the body overheating, ranging from heat cramps to life-threatening heat stroke' },
        { term: 'PM2.5', definition: 'Tiny air pollution particles small enough to enter the lungs and bloodstream, especially dangerous to health', pronunciation: 'P-M-two-point-five' },
        { term: 'vector-borne disease', definition: 'Illnesses spread by insects or other organisms, like mosquitoes spreading malaria' },
        { term: 'food security', definition: 'Having reliable access to enough affordable, nutritious food' },
        { term: 'climate adaptation', definition: 'Changes made to prepare for and cope with climate change effects' },
      ],
      analogies: [
        "Climate change is like turning up the heat on a pressure cooker - everything inside becomes more intense and volatile.",
      ],
    },
    3: {
      level: 3,
      summary: "Climate change affects health through direct exposures (heat, extreme weather), ecosystem-mediated pathways (vector-borne diseases, food systems), and socially-mediated effects (displacement, conflict), with health systems requiring transformation for climate resilience while healthcare itself must decarbonize.",
      explanation: `Climate change represents both a health emergency and an opportunity for health co-benefits from mitigation actions. The field of planetary health has emerged to address the interconnections between human health and environmental systems.

**Framework for Climate-Health Pathways:**

**Direct Exposures:**
| Exposure | Health Outcomes | Mechanisms |
|----------|-----------------|------------|
| Extreme heat | Heat stroke, cardiovascular events, renal disease | Thermoregulatory failure, dehydration |
| Air pollution | Respiratory, cardiovascular, neurological disease | Inflammation, oxidative stress |
| Extreme weather | Injuries, drowning, mental health | Direct trauma, stress |
| UV radiation | Skin cancer, cataracts | DNA damage |

**Ecosystem-Mediated Pathways:**
| Pathway | Health Outcomes | Mechanisms |
|---------|-----------------|------------|
| Vector ecology | Malaria, dengue, Lyme disease | Range expansion, transmission season |
| Food systems | Malnutrition, foodborne illness | Crop failure, spoilage, toxins |
| Water systems | Diarrheal disease, algal toxin exposure | Contamination, scarcity |
| Allergens | Allergic disease, asthma | Longer seasons, higher pollen |

**Socially-Mediated Effects:**
- Forced migration and displacement
- Resource competition and conflict
- Health system disruption
- Economic impacts affecting health determinants

**Epidemiology of Climate-Sensitive Health Outcomes:**

*Heat-Related Mortality:*
- 2022 European heat waves: >60,000 excess deaths
- Elderly mortality increases 1-3% per 1°C above threshold
- Labor productivity losses in outdoor workers
- Non-linear relationship: mortality accelerates at extreme temperatures

*Air Quality and Health:*
- Ozone: 6% increase in respiratory mortality per 10 μg/m³
- PM2.5: 8% increase in cardiovascular mortality per 10 μg/m³
- Wildfire smoke associated with respiratory and cardiovascular hospitalizations
- Interaction between heat and air pollution

*Infectious Disease Projections:*
- Dengue: 2-4 billion additional people at risk by 2050
- Malaria: Highland areas in Africa, South America becoming suitable
- Lyme disease: Range expanding northward in North America and Europe
- Vibrio: Infections increasing in warming coastal waters

**Vulnerable Populations and Health Equity:**

*Determinants of Vulnerability:*
- Sensitivity (health status, age)
- Exposure (occupation, housing, geography)
- Adaptive capacity (resources, access to care)

*Equity Considerations:*
- Least responsible populations most affected
- Low-income communities more exposed
- Indigenous peoples affected by ecosystem changes
- Climate justice framework

**Health System Adaptation:**

*Climate-Resilient Health Systems:*
1. **Workforce**: Training in climate-health, surge capacity
2. **Infrastructure**: Climate-proofed facilities, backup power
3. **Surveillance**: Climate-sensitive disease monitoring, early warning
4. **Supply chains**: Resilient procurement, stockpiling
5. **Service delivery**: Heat action plans, disaster preparedness

*Early Warning Systems:*
- Heat-health warning systems
- Air quality alerts
- Disease outbreak prediction
- Extreme weather preparedness

**Healthcare Decarbonization:**

Healthcare contributes ~4-5% of global emissions:
- Building energy efficiency
- Anesthetic gas management
- Supply chain emissions
- Transportation
- Renewable energy adoption`,
      keyTerms: [
        { term: 'planetary health', definition: 'The health of human civilization and the natural systems on which it depends' },
        { term: 'climate-sensitive disease', definition: 'Health conditions whose incidence or distribution is affected by climate variables' },
        { term: 'heat action plan', definition: 'Coordinated public health response to extreme heat events' },
        { term: 'climate resilience', definition: 'Capacity of health systems to anticipate, respond to, and recover from climate-related stresses' },
      ],
      clinicalNotes: 'Clinical considerations: (1) Ask about heat exposure, especially for elderly and outdoor workers during heat waves, (2) Consider climate-sensitive diseases in differential (expanded Lyme, dengue range), (3) Air quality affects respiratory and cardiovascular patients, (4) Mental health impacts of climate anxiety and weather events are real and treatable.',
    },
    4: {
      level: 4,
      summary: "Climate-health science integrates epidemiology, exposure assessment, climate modeling, and health systems research to quantify attributable burdens, project future impacts under different scenarios, and design evidence-based adaptation and mitigation strategies with health co-benefits.",
      explanation: `**Climate Epidemiology Methods:**

**Attribution Science:**
*Attributable Fraction Estimation:*
- Exposure-response relationships from time-series studies
- Baseline climate vs. counterfactual scenario
- Attributable deaths = Σ(observed deaths × attributable fraction)

*Challenges:*
- Non-linear exposure-response curves
- Threshold effects and adaptation
- Effect modification by vulnerability
- Lag structures (immediate vs. delayed effects)

*Recent Attribution Studies:*
| Outcome | Attribution Finding |
|---------|---------------------|
| Heat mortality | 37% of warm-season deaths attributable to anthropogenic climate change |
| Hurricane intensification | 14-15% increase in rain attributable to warming (Hurricane Harvey) |
| Wildfire area | >50% of western US forest fire area attributable to climate change |

**Climate Modeling and Health Projections:**

*Modeling Framework:*
1. Climate projections (CMIP6 models)
2. Exposure modeling (downscaling)
3. Population projections
4. Exposure-response functions
5. Adaptation assumptions
6. Health impact estimation

*Scenario Approaches:*
- SSP-RCP scenarios combining socioeconomic and emissions pathways
- SSP1-2.6: Sustainable development, low emissions
- SSP5-8.5: Fossil-fueled development, high emissions
- Range of projections communicates uncertainty

*Heat Mortality Projections:*
- Without adaptation: 3-4x increase in heat deaths by 2080s (high emissions)
- With physiological adaptation: Substantial but uncertain reduction
- Behavioral and infrastructural adaptation also important

**Vector-Borne Disease Modeling:**

*Temperature-Dependent Parameters:*
- Mosquito development rate
- Biting rate
- Pathogen extrinsic incubation period
- Adult survival

*Models:*
- Mechanistic (biology-based)
- Statistical (empirical correlations)
- Hybrid approaches

*Key Findings:*
- Suitable area for Aedes mosquitoes expanding
- Malaria transmission stability periods changing
- Highland malaria emerging in East Africa
- Seasonal windows shifting

**Air Quality and Climate:**

*Ozone-Temperature Relationship:*
- Ground-level ozone formation increases with temperature
- "Climate penalty" on air quality
- Regional variation based on precursor emissions

*Wildfire Smoke:*
- Fire season lengthening
- Burned area increasing
- Smoke transport can affect distant populations
- PM2.5 composition includes toxic organic compounds

*Health Burden:*
- Ozone: Estimated millions of premature deaths annually
- PM2.5 from wildfires: Growing contribution to total burden

**Mental Health and Climate:**

*Research Areas:*
- Acute impacts of extreme events (PTSD, anxiety, depression)
- Chronic impacts of slow-onset changes
- Climate anxiety/eco-anxiety
- Solastalgia (distress from environmental change to home environment)

*Vulnerable Groups:*
- Direct victims of disasters
- First responders
- Youth and future generations
- Communities with place-based identity

**Health Co-Benefits of Mitigation:**

*Co-Benefit Pathways:*
| Mitigation Action | Health Co-Benefit |
|-------------------|-------------------|
| Clean energy | Reduced air pollution |
| Active transport | Physical activity, air quality |
| Plant-based diets | Reduced chronic disease, food emissions |
| Urban greening | Heat reduction, mental health |
| Energy efficiency | Indoor air quality, fuel poverty reduction |

*Economic Analysis:*
- Health co-benefits often exceed mitigation costs
- Immediate and local benefits vs. long-term global climate benefits
- Strong argument for ambitious action

**Adaptation Evidence:**

*Heat Adaptation:*
- Heat-health warning systems reduce mortality
- Cool centers and outreach to vulnerable populations
- Building codes and urban design
- Evidence for physiological adaptation over time

*Vector Control:*
- Integrated vector management
- Surveillance and rapid response
- Infrastructure (screens, air conditioning)

**Research Gaps:**

1. Long-term health impacts of repeated exposures
2. Interaction effects (heat + air pollution)
3. Mental health burden quantification
4. Effectiveness of adaptation interventions
5. Indirect effects through social/economic pathways
6. Compound events and cascading failures`,
      keyTerms: [
        { term: 'attributable fraction', definition: 'Proportion of disease burden that can be attributed to a specific exposure', pronunciation: 'at-TRIB-yoo-tah-bl' },
        { term: 'SSP-RCP scenarios', definition: 'Shared Socioeconomic Pathways and Representative Concentration Pathways - frameworks for climate projections' },
        { term: 'climate penalty', definition: 'Worsening of air quality due to climate change, independent of emission changes' },
        { term: 'co-benefits', definition: 'Additional health benefits that occur alongside the primary goal of climate mitigation' },
        { term: 'compound events', definition: 'Multiple climate hazards occurring simultaneously or in sequence, amplifying impacts' },
      ],
      clinicalNotes: 'Evidence-based clinical actions: (1) Heat-health warnings should prompt patient outreach, especially elderly on diuretics/cardiovascular medications, (2) Air quality alerts: counsel patients with respiratory disease to limit outdoor activity, (3) Document climate-related health events for surveillance, (4) Consider climate projections in long-term disease management planning.',
    },
    5: {
      level: 5,
      summary: "Climate-health scholarship operates at the intersection of earth system science, epidemiology, health systems research, and policy analysis, with emerging frameworks addressing cascading risks, transformative adaptation, and the health sector's role in achieving just transitions to sustainable systems.",
      explanation: `**Conceptual Frameworks:**

**Planetary Health:**
Defined as "the health of human civilization and the state of the natural systems on which it depends."

*Core Principles:*
- Human health fundamentally depends on Earth's natural systems
- We are transgressing planetary boundaries (climate, biodiversity, nitrogen cycle)
- Health gains of last century may be reversed
- Solutions require systems transformation

*Planetary Boundaries Relevant to Health:*
| Boundary | Status | Health Relevance |
|----------|--------|------------------|
| Climate change | Transgressed | Heat, disease, food security |
| Biosphere integrity | Transgressed | Ecosystem services, zoonotic risk |
| Biogeochemical flows | Transgressed | Water quality, food production |
| Land system change | Transgressed | Food systems, zoonotic disease |

**Complex Systems Approaches:**

*Cascading Risks:*
- Climate impacts propagate through interconnected systems
- Example: Drought → crop failure → food insecurity → conflict → displacement → health system strain
- Non-linear dynamics and tipping points

*Systems Dynamics Modeling:*
- Feedback loops in climate-health systems
- Unintended consequences of interventions
- Policy resistance and leverage points

**Health in Climate Policy:**

*Health in NDCs (Nationally Determined Contributions):*
- Most countries mention health in climate commitments
- Variable depth of health integration
- Health framing can build political support for climate action

*Health as Argument for Ambition:*
- Immediate, local health benefits of mitigation
- Health costs of inaction vs. costs of action
- Health professional advocacy effectiveness

**Transformative Adaptation:**

*Beyond Incremental Adaptation:*
- Current approaches may be insufficient for projected changes
- Transformative adaptation involves fundamental system changes
- Example: Managed retreat from flood-prone areas vs. repeated rebuilding

*Limits to Adaptation:*
- "Adaptation gap" between current actions and needs
- Hard limits (physiological, ecological)
- Soft limits (economic, institutional, social)
- Maladaptation risks

**Health Sector Decarbonization:**

*Healthcare Carbon Footprint:*
- ~4.4% of global net emissions
- Supply chain (71%), building energy (17%), direct emissions (12%)
- Country variation: US healthcare higher per capita

*Decarbonization Pathway:*
1. Energy efficiency and renewables
2. Sustainable procurement
3. Anesthetic gas management (desflurane → sevoflurane → IV)
4. Reduced unnecessary care
5. Sustainable care models (telemedicine, prevention)

*Net Zero Commitments:*
- NHS England: Net zero by 2040 (direct) / 2045 (supply chain)
- Growing number of health systems committing

**Research Frontiers:**

*Exposure Assessment Innovation:*
- Satellite remote sensing for exposure estimation
- Personal monitoring devices
- Exposure reconstruction from electronic health records

*Health Integrated Assessment Models:*
- Incorporating health into climate-economic models
- Valuing health co-benefits
- Health in damage functions

*Causal Inference Challenges:*
- Long-term, diffuse exposures
- Effect modification and vulnerability
- Adaptation obscuring relationships
- Target trial emulation for policy evaluation

**Ethical Frameworks:**

*Climate Justice and Health Equity:*
- Least responsible populations most affected
- Intergenerational equity
- Rights-based approaches
- Loss and damage for health impacts

*Allocating Adaptation Resources:*
- Vulnerability-based prioritization
- Procedural justice in decision-making
- Compensation for climate-related health harms

**Health Professional Roles:**

*Clinical Practice:*
- Climate-informed care delivery
- Sustainable healthcare practices
- Patient counseling on climate and health

*Advocacy:*
- Policy engagement
- Divestment from fossil fuels
- Health voice in climate negotiations

*Research:*
- Transdisciplinary collaboration
- Community-engaged research
- Science communication

*Education:*
- Planetary health in curricula
- Continuing professional development
- Training for climate-related health challenges

**Future Directions:**

1. **Health in climate negotiations**: Health arguments for ambition
2. **Climate services for health**: Operational climate information for health decisions
3. **Resilient health systems**: Climate-proofing healthcare infrastructure and workforce
4. **One Health integration**: Climate, biodiversity, and zoonotic disease linkages
5. **Mental health**: Climate anxiety and eco-grief recognition and treatment
6. **Sustainable healthcare**: Decarbonization without compromising care quality
7. **Research infrastructure**: Long-term cohorts, surveillance systems, modeling capacity`,
      keyTerms: [
        { term: 'planetary boundaries', definition: 'Earth system thresholds beyond which there is risk of destabilizing changes' },
        { term: 'transformative adaptation', definition: 'Fundamental changes to systems rather than incremental adjustments to cope with climate change' },
        { term: 'maladaptation', definition: 'Adaptation actions that increase vulnerability or undermine adaptive capacity' },
        { term: 'loss and damage', definition: 'Impacts of climate change that cannot be avoided through mitigation or adaptation, raising compensation questions' },
        { term: 'climate services', definition: 'Climate information tailored for decision-making in specific sectors like health' },
      ],
      clinicalNotes: 'Leadership roles for clinicians: (1) Incorporate climate into clinical practice and patient counseling where relevant, (2) Advocate for sustainable healthcare practices in your institution, (3) Support institutional decarbonization and resilience efforts, (4) Engage in policy advocacy using clinical voice, (5) Pursue research and education in climate-health. Health professionals are trusted messengers on climate - use that platform.',
    },
  },

  media: [
    {
      id: 'climate-health-pathways',
      type: 'diagram',
      filename: 'climate-health-pathways.svg',
      title: 'Climate Change Health Impact Pathways',
      description: 'Diagram showing direct, ecosystem-mediated, and socially-mediated climate health impacts',
    },
    {
      id: 'health-cobenefits',
      type: 'diagram',
      filename: 'mitigation-health-cobenefits.svg',
      title: 'Health Co-Benefits of Climate Mitigation',
      description: 'Illustration of health benefits from climate mitigation actions',
    },
  ],

  citations: [
    {
      id: 'lancet-countdown',
      type: 'article',
      title: 'The Lancet Countdown on Health and Climate Change',
      source: 'The Lancet',
      url: 'https://www.lancetcountdown.org/',
      license: 'Open Access',
    },
    {
      id: 'ipcc-health',
      type: 'article',
      title: 'IPCC AR6 Working Group II - Human Health',
      source: 'Intergovernmental Panel on Climate Change',
      url: 'https://www.ipcc.ch/report/ar6/wg2/',
      license: 'Open Access',
    },
    {
      id: 'who-climate-health',
      type: 'website',
      title: 'Climate Change and Health',
      source: 'World Health Organization',
      url: 'https://www.who.int/health-topics/climate-change',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
  ],

  crossReferences: [
    { targetId: 'global-health-challenges', targetType: 'topic', relationship: 'parent', label: 'Global Health Challenges' },
    { targetId: 'environment-and-health', targetType: 'topic', relationship: 'related', label: 'Environment and Health' },
    { targetId: 'tropical-diseases', targetType: 'topic', relationship: 'related', label: 'Tropical Diseases' },
    { targetId: 'emerging-infectious-diseases', targetType: 'topic', relationship: 'related', label: 'Emerging Infectious Diseases' },
  ],

  tags: {
    systems: ['public-health', 'environmental-health'],
    topics: ['climate-change', 'planetary-health', 'environmental-health', 'global-health'],
    keywords: ['climate change', 'planetary health', 'heat-related illness', 'air quality', 'climate adaptation'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
