/**
 * Malaria - Global Health Perspective
 *
 * Comprehensive content on malaria as a global health challenge,
 * including epidemiology, prevention, treatment, and elimination efforts.
 */

import { EducationalContent } from '../../types';

export const MALARIA_GLOBAL: EducationalContent = {
  id: 'malaria-global',
  type: 'concept',
  name: 'Malaria: A Global Health Challenge',
  alternateNames: ['Global Malaria', 'Malaria Worldwide', 'Malaria Endemic Regions'],

  levels: {
    1: {
      level: 1,
      summary: 'Malaria is a serious disease spread by mosquito bites. It causes fever and can be deadly, especially for young children in Africa. It can be prevented and treated.',
      explanation: `Malaria is a disease that makes millions of people sick every year, especially in warm parts of the world.

**How Do You Get Malaria?**
- A special kind of mosquito (called Anopheles) bites you
- The mosquito puts tiny parasites into your blood
- The parasites make you very sick
- You CANNOT get malaria from another person directly

**Where is Malaria Found?**
- Most malaria is in Africa, south of the Sahara desert
- Also found in parts of Asia, Central and South America, and the Pacific
- Malaria is NOT found in the United States, Canada, or Europe (except rare travel cases)

**Who Gets Sickest?**
- Young children (especially under 5 years old)
- Pregnant women
- People who have never had malaria before
- Travelers visiting malaria areas

**Symptoms:**
- High fever and chills
- Headache and body aches
- Feeling very tired
- Sometimes vomiting and diarrhea

**Prevention:**
- Sleep under special mosquito nets treated with insecticide
- Use bug spray on your skin
- Take prevention medicine if traveling to malaria areas
- Vaccines are now available for children in some areas

**Good News:**
- Malaria can be treated with medicine
- Deaths from malaria have dropped a lot in recent years
- More children than ever are protected by bed nets and vaccines`,
      keyTerms: [
        { term: 'malaria', definition: 'A disease caused by parasites that are spread by mosquito bites', pronunciation: 'muh-LAIR-ee-uh' },
        { term: 'parasite', definition: 'A tiny living thing that lives inside another creature and can make it sick' },
        { term: 'mosquito net', definition: 'A special net you sleep under to keep mosquitoes from biting you' },
      ],
      analogies: [
        'A mosquito is like a tiny flying needle that can put malaria germs into your blood when it bites.',
        'Sleeping under a mosquito net is like having an invisible shield protecting you from mosquitoes all night.',
      ],
      examples: [
        'In many African countries, families receive free mosquito nets to help protect children from malaria.',
        'Travelers to Africa often take malaria prevention pills before, during, and after their trip.',
      ],
    },
    2: {
      level: 2,
      summary: 'Malaria is a parasitic disease transmitted by Anopheles mosquitoes, causing approximately 250 million cases and 600,000 deaths annually, predominantly among children in sub-Saharan Africa. Prevention relies on vector control, chemoprevention, and newly available vaccines.',
      explanation: `Malaria is caused by Plasmodium parasites transmitted through the bite of infected female Anopheles mosquitoes. It remains one of the world\'s deadliest infectious diseases.

**Global Burden:**
- ~250 million cases annually
- ~620,000 deaths per year
- 95% of cases and 96% of deaths occur in Africa
- Children under 5 account for ~80% of all malaria deaths in Africa

**The Parasites:**
There are five species of Plasmodium that infect humans:
- **P. falciparum**: Most deadly, predominant in Africa
- **P. vivax**: Most widespread, can relapse
- **P. ovale**: Can also relapse
- **P. malariae**: Causes chronic infection
- **P. knowlesi**: Zoonotic, found in Southeast Asia

**Transmission:**
- Requires female Anopheles mosquito (needs blood for eggs)
- Parasite develops in mosquito over 10-21 days
- Transmission depends on climate, mosquito species, human immunity
- Peak biting usually between dusk and dawn

**Clinical Presentation:**
- **Uncomplicated malaria**: Fever, chills, headache, muscle aches, fatigue
- **Severe malaria**: Cerebral malaria, severe anemia, respiratory distress, multi-organ failure

**High-Risk Groups:**
- Children under 5 years (lack immunity)
- Pregnant women (immunosuppression, risks to fetus)
- Non-immune travelers and migrants
- People with HIV

**Prevention Strategies:**

*Vector Control:*
- Insecticide-treated nets (ITNs) - reduce cases by ~50%
- Indoor residual spraying (IRS)
- Larval source management

*Chemoprevention:*
- Seasonal malaria chemoprevention (SMC) for children
- Intermittent preventive treatment in pregnancy (IPTp)
- Chemoprophylaxis for travelers

*Vaccines:*
- RTS,S (Mosquirix): First approved malaria vaccine, ~30% efficacy
- R21/Matrix-M: Newer vaccine with higher efficacy (~75%)
- WHO recommends for children in moderate-high transmission areas

**Treatment:**
- Artemisinin-based combination therapies (ACTs) are first-line
- Rapid diagnostic tests enable confirmation before treatment
- Severe malaria requires parenteral artesunate`,
      keyTerms: [
        { term: 'Plasmodium', definition: 'The genus of parasites that cause malaria', pronunciation: 'plaz-MOH-dee-um' },
        { term: 'Anopheles', definition: 'The genus of mosquitoes that transmit malaria', pronunciation: 'ah-NOF-eh-leez' },
        { term: 'ACT', definition: 'Artemisinin-based Combination Therapy - the recommended treatment for uncomplicated malaria' },
        { term: 'ITN', definition: 'Insecticide-Treated Net - bed nets that kill or repel mosquitoes' },
      ],
      analogies: [
        'The malaria parasite uses the mosquito like an airplane to travel between human hosts.',
      ],
    },
    3: {
      level: 3,
      summary: 'Malaria epidemiology varies by transmission intensity and Plasmodium species, with disease control relying on integrated strategies including vector control, case management, chemoprevention, and vaccination. Drug and insecticide resistance threaten progress.',
      explanation: `**Epidemiologic Patterns:**

*Transmission Intensity Classification:*
- **Holoendemic**: Perennial, high transmission; acquired immunity by age 5
- **Hyperendemic**: Seasonal variation, less consistent immunity
- **Mesoendemic**: Moderate transmission, epidemics possible
- **Hypoendemic**: Low transmission, population largely susceptible

*Geographic Distribution:*
| Region | Cases (millions) | Primary Species | Key Challenges |
|--------|-----------------|-----------------|----------------|
| Sub-Saharan Africa | ~230 | P. falciparum | High burden, resistance |
| South/Southeast Asia | ~5 | P. falciparum, P. vivax | Drug resistance, forests |
| Americas | ~0.5 | P. vivax, P. falciparum | Elimination progress |
| Eastern Mediterranean | ~5 | P. falciparum, P. vivax | Conflict zones |

**Parasite Biology and Life Cycle:**

*In the Mosquito (Sporogonic Cycle):*
1. Gametocytes ingested during blood meal
2. Fertilization in mosquito midgut
3. Oocyst development on gut wall
4. Sporozoites migrate to salivary glands (10-21 days)

*In the Human (Exoerythrocytic and Erythrocytic):*
1. Sporozoites injected, travel to liver
2. Liver stage development (5-16 days)
3. Merozoites released, infect red blood cells
4. Asexual replication in RBCs (48-72 hour cycles)
5. Some develop into gametocytes (transmissible stage)

*P. vivax/ovale Hypnozoites:*
- Dormant liver stages can reactivate months-years later
- Require primaquine or tafenoquine for radical cure
- G6PD testing needed before hypnozoiticides

**Acquired Immunity:**
- Develops after repeated exposure
- Reduces severe disease and death
- Does not prevent infection
- Wanes without continued exposure

**Diagnosis:**

*Microscopy:*
- Gold standard, can identify species, quantify parasitemia
- Requires skilled microscopist
- Sensitivity: 50-500 parasites/uL

*Rapid Diagnostic Tests (RDTs):*
- Detect parasite antigens (HRP2, pLDH, aldolase)
- Enable diagnosis at community level
- hrp2/3 gene deletions cause false negatives

*Molecular Methods:*
- PCR for research, low-density infections, speciation
- LAMP for point-of-care molecular diagnosis

**Treatment Guidelines:**

*Uncomplicated P. falciparum:*
- Artemether-lumefantrine (3-day course)
- Artesunate-amodiaquine
- Dihydroartemisinin-piperaquine

*Severe Malaria:*
- IV artesunate (preferred over quinine)
- Followed by oral ACT when patient can tolerate

*P. vivax/ovale:*
- ACT or chloroquine (where susceptible)
- Plus primaquine (14-day) or tafenoquine (single dose) for radical cure

**Resistance:**
- Artemisinin partial resistance: Delayed parasite clearance, mutations in kelch13 gene
- Partner drug resistance: Piperaquine resistance in Southeast Asia
- Insecticide resistance: Pyrethroids, organophosphates, carbamates in multiple regions`,
      keyTerms: [
        { term: 'sporozoite', definition: 'The parasite stage injected by mosquitoes that infects liver cells', pronunciation: 'spor-oh-ZOH-ite' },
        { term: 'hypnozoite', definition: 'Dormant liver stage of P. vivax and P. ovale that can cause relapse', pronunciation: 'hip-NOH-zoh-ite' },
        { term: 'parasitemia', definition: 'The presence and density of parasites in the blood' },
        { term: 'kelch13', definition: 'Gene in which mutations are associated with artemisinin partial resistance' },
      ],
      clinicalNotes: 'Clinical considerations: (1) All febrile illness in travelers returning from endemic areas should include malaria in differential, (2) Thick and thin smears should be examined (thick for detection, thin for species and quantification), (3) Severe malaria requires ICU-level care, (4) G6PD status must be known before primaquine/tafenoquine for P. vivax radical cure.',
    },
    4: {
      level: 4,
      summary: 'The global malaria response integrates vector control innovations, expanded chemoprevention, and new vaccines within the context of evolving resistance patterns, health system constraints, and the goal of elimination in many settings.',
      explanation: `**Vector Biology and Control Innovation:**

*Anopheles Mosquito Ecology:*
- ~40 of 450+ Anopheles species are significant vectors
- Species-specific behaviors affect control strategies
- Indoor vs. outdoor biting and resting
- Zoophilic vs. anthropophilic preferences

*Next-Generation Vector Control:*
| Innovation | Mechanism | Status |
|------------|-----------|--------|
| Dual-AI ITNs | Pyrethroid + synergist or second AI | Deployed |
| IRS new classes | Clothianidin, SumiShield | Deployed |
| Attractive toxic sugar baits | Lure and kill outdoor mosquitoes | Phase 3 trials |
| Spatial repellents | Area protection | Under evaluation |
| Gene drive | Population suppression/modification | Research |
| Sterile insect technique | Male release for suppression | Pilots ongoing |

*Insecticide Resistance Management:*
- Pyrethroid resistance widespread (metabolic and target-site)
- Rotation and combination strategies
- Resistance monitoring networks
- PBO nets for metabolic resistance

**Chemoprevention Expansion:**

*Seasonal Malaria Chemoprevention (SMC):*
- Monthly SP + amodiaquine during transmission season
- For children 3-59 months in Sahel region
- ~100 million children covered (2022)
- Reduces cases by 75%

*Perennial Malaria Chemoprevention (PMC):*
- For areas with year-round transmission
- Replacing IPTi

*Intermittent Preventive Treatment in Pregnancy (IPTp):*
- SP at each ANC visit from second trimester
- Prevents maternal anemia, low birth weight
- Coverage remains suboptimal (~35% receive 3+ doses)

**Vaccine Implementation:**

*RTS,S/AS01 (Mosquirix):*
- Targets circumsporozoite protein
- 4-dose schedule (0, 1, 2, and 20 months)
- Efficacy: ~30% against clinical malaria, ~40% against severe malaria
- Wanes over time, particularly without dose 4
- WHO recommended (2021) for children in moderate-high transmission

*R21/Matrix-M:*
- Similar target, Matrix-M adjuvant
- Phase 3: 68-75% efficacy
- WHO recommended (2023)
- More thermostable, lower dose (manufacturing advantages)

**Drug Resistance Landscape:**

*Artemisinin Partial Resistance:*
- First identified in Cambodia (2008)
- Kelch13 mutations (C580Y most common)
- Spreading through Southeast Asia, emerging in Africa (Rwanda, Uganda)
- Delayed parasite clearance but clinical failure requires partner drug resistance

*Partner Drug Resistance:*
- Piperaquine resistance (plasmepsin amplification) in Greater Mekong
- Lumefantrine tolerance emerging
- SP resistance widespread (dhfr/dhps mutations)

**Malaria in Pregnancy:**
- Placental sequestration → maternal anemia, low birth weight, stillbirth
- P. falciparum associated with placental inflammation
- IPTp-SP, ITNs, and prompt case management reduce adverse outcomes

**Elimination Science:**

*Elimination-Capable Countries:*
- Very low transmission, strong health systems
- Focus on surveillance-response, foci clearance
- Reactive case detection
- Cross-border collaboration

*High-Burden High-Impact Initiative:*
- 11 countries + India carry 70% of global burden
- Tailored approaches based on subnational data
- Strengthening ownership and domestic financing

*Global Technical Strategy Targets (2030):*
- Reduce case incidence by 90% (from 2015 baseline)
- Reduce mortality by 90%
- Eliminate malaria in 35 countries`,
      keyTerms: [
        { term: 'gene drive', definition: 'Genetic engineering technology that can spread modified genes through a mosquito population faster than normal inheritance' },
        { term: 'circumsporozoite protein', definition: 'Dominant surface protein on malaria sporozoites and target of RTS,S and R21 vaccines' },
        { term: 'plasmepsin', definition: 'Enzymes involved in hemoglobin digestion; amplification associated with piperaquine resistance' },
        { term: 'reactive case detection', definition: 'Screening and testing contacts or neighbors of confirmed malaria cases' },
      ],
      clinicalNotes: 'For clinicians managing malaria: (1) Artemisinin partial resistance may not cause treatment failure if partner drug remains effective, (2) Pregnancy-specific considerations include choice of antimalarials and G6PD testing for primaquine, (3) Species identification matters for relapse prevention, (4) Travelers should receive species-appropriate prophylaxis based on destination.',
    },
    5: {
      level: 5,
      summary: 'Malaria elimination requires coordinated deployment of existing and novel tools, navigating resistance evolution, optimizing resource allocation, and addressing the complex interplay of ecological, social, and health system factors within global health governance frameworks.',
      explanation: `**Evolutionary Ecology and Resistance Dynamics:**

*Parasite Population Genetics:*
- High recombination rate during sexual reproduction in mosquito
- Genetic diversity varies by transmission intensity
- Clonal expansion in low-transmission settings
- Implications for vaccine escape and drug resistance spread

*Resistance Evolution Modeling:*
- Fitness costs of resistance mutations
- Selection pressure from drug exposure
- Spread via gene flow vs. de novo emergence
- Triple Artemisinin-based Combination Therapy (TACT) to slow resistance

*Vector Resistance Mechanisms:*
| Mechanism | Target | Detection | Management |
|-----------|--------|-----------|------------|
| Target-site (kdr) | Sodium channels | PCR | Non-pyrethroid IRS |
| Metabolic (CYP450s) | Detoxification | Bioassay + synergist | PBO nets |
| Cuticular | Reduced penetration | Bioassay | New formulations |
| Behavioral | Avoidance | Field observation | Complementary tools |

**Transmission Dynamics and Modeling:**

*Key Parameters:*
- Basic reproduction number (R0): Varies 1-100+ by setting
- Entomological inoculation rate (EIR): Infectious bites/person/year
- Vectorial capacity: Function of vector density, feeding behavior, survival

*Mathematical Modeling Applications:*
- Estimating intervention impact
- Optimizing intervention packages
- Predicting elimination feasibility
- Resource allocation

*Heterogeneity and Hotspots:*
- 20% of people typically contribute 80% of transmission
- Spatial targeting of interventions
- Human mobility patterns affect transmission
- Asymptomatic carriers as reservoirs

**Health Systems and Implementation Research:**

*Delivery Platforms:*
- Routine immunization integration for vaccine
- ANC for IPTp
- Community health workers for iCCM
- Private sector and pharmacies

*Quality of Care:*
- Diagnostic accuracy and adherence to test results
- Treatment adherence and completion
- Stockout prevention
- Pharmacovigilance for adverse events

*Implementation Science Frameworks:*
- Reach, Effectiveness, Adoption, Implementation, Maintenance (RE-AIM)
- Context adaptation for high-impact interventions
- Scale-up and sustainability

**Political Economy and Financing:**

*Financing Landscape:*
- $4.3 billion invested globally (2022)
- ~$7.7 billion needed by 2030
- Global Fund (~50% of international financing)
- PMI/USAID (~25% of international financing)
- Domestic financing increasing but insufficient

*Economic Analysis:*
- Malaria costs African economies $12 billion/year
- ROI of malaria control estimated at 36:1
- Catastrophic health expenditure from malaria episodes
- Productivity losses from morbidity and mortality

**Research Frontiers:**

*Vaccine Pipeline:*
- PfSPZ: Whole sporozoite vaccine, sterile protection in challenge
- Transmission-blocking vaccines: Target gametocyte/mosquito stages
- Blood-stage vaccines: Reduce severe disease
- Multi-stage vaccines: Combine multiple targets

*Monoclonal Antibodies:*
- L9LS: Anti-CSP, 6-month protection in challenge studies
- CIS43LS: Alternative anti-CSP
- Potential for seasonal prophylaxis in travelers and high-risk groups

*Novel Drug Development:*
- Single-dose radical cure (including hypnozoites)
- New mechanisms of action
- Transmission-blocking activity
- Pediatric-friendly formulations

**Elimination and Eradication Debates:**

*Technical Feasibility:*
- Elimination achieved in 42 countries (WHO certified)
- 34 countries in elimination phase
- Challenges: resistance, residual transmission, imported cases

*Strategic Questions:*
1. Is eradication feasible with current tools?
2. What is the optimal investment across control vs. elimination?
3. How to maintain gains as disease becomes rare?
4. Role of gene drive and other novel technologies?

*Surveillance-Response Systems:*
- 1-3-7 strategy (China): Reporting, investigation, response
- Case-based surveillance and investigation
- Entomological surveillance integration
- Elimination end-game strategies`,
      keyTerms: [
        { term: 'entomological inoculation rate', definition: 'Number of infectious mosquito bites per person per unit time, a key measure of transmission intensity' },
        { term: 'vectorial capacity', definition: 'Intrinsic ability of a mosquito population to transmit malaria, integrating density, feeding behavior, and survival' },
        { term: 'transmission-blocking vaccine', definition: 'Vaccine targeting parasite stages in mosquitoes to prevent onward transmission' },
        { term: '1-3-7 strategy', definition: 'Surveillance-response protocol: report within 1 day, investigate within 3 days, respond within 7 days' },
      ],
      clinicalNotes: 'For researchers and policy advisors: (1) Transmission models require local calibration and validation, (2) Resistance surveillance data should inform drug and insecticide policy, (3) Health system strengthening is prerequisite for elimination, (4) Climate change projections affect future malaria geography.',
    },
  },

  media: [
    {
      id: 'malaria-global-map',
      type: 'diagram',
      filename: 'malaria-endemic-regions.svg',
      title: 'Malaria Endemic Regions',
      description: 'World map showing malaria transmission intensity',
    },
    {
      id: 'plasmodium-lifecycle',
      type: 'diagram',
      filename: 'plasmodium-lifecycle.svg',
      title: 'Plasmodium Life Cycle',
      description: 'Diagram of malaria parasite life cycle in mosquito and human',
    },
  ],

  citations: [
    {
      id: 'who-world-malaria-report',
      type: 'website',
      title: 'World Malaria Report',
      source: 'World Health Organization',
      url: 'https://www.who.int/teams/global-malaria-programme/reports/world-malaria-report',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'cdc-malaria',
      type: 'website',
      title: 'Malaria',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/malaria/',
      license: 'Public domain',
    },
  ],

  crossReferences: [
    { targetId: 'vector-borne-ntds', targetType: 'topic', relationship: 'related', label: 'Vector-Borne NTDs' },
    { targetId: 'global-health-challenges', targetType: 'topic', relationship: 'parent', label: 'Global Health Challenges' },
    { targetId: 'travel-health-overview', targetType: 'topic', relationship: 'see-also', label: 'Travel Health' },
  ],

  tags: {
    systems: ['infectious-disease', 'hematology'],
    topics: ['malaria', 'global-health', 'vector-borne-diseases', 'tropical-medicine'],
    keywords: ['Plasmodium', 'Anopheles', 'artemisinin', 'bed nets', 'malaria vaccine'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
