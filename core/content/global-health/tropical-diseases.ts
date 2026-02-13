/**
 * Tropical Diseases Educational Content
 *
 * Comprehensive overview of tropical diseases affecting populations
 * in tropical and subtropical regions worldwide.
 */

import { EducationalContent } from '../types';

export const TROPICAL_DISEASES: EducationalContent = {
  id: 'tropical-diseases',
  type: 'topic',
  name: 'Tropical Diseases',
  alternateNames: ['Diseases of the Tropics', 'Tropical Medicine Conditions', 'Climate-Dependent Diseases'],

  levels: {
    1: {
      level: 1,
      summary: "Tropical diseases are illnesses that happen mostly in hot, humid parts of the world where certain bugs and germs can survive year-round.",
      explanation: `Some diseases only happen in certain parts of the world. Tropical diseases are found mainly in warm, wet places near the equator.

**Why Do These Diseases Happen in Tropical Areas?**

1. **Warm weather all year** - Mosquitoes, flies, and other bugs that spread diseases can live and breed all year long.

2. **Lots of rain and standing water** - This creates perfect homes for mosquitoes to lay their eggs.

3. **Many animals and plants** - More places for germs and parasites to live and grow.

**Common Tropical Diseases:**

- **Malaria** - Spread by mosquito bites, causes fever and chills
- **Dengue fever** - Also from mosquitoes, causes bad headaches and joint pain
- **Yellow fever** - Another mosquito disease that can make your skin look yellow
- **Sleeping sickness** - Spread by tsetse flies in Africa
- **Chagas disease** - Spread by "kissing bugs" in Central and South America

**Why This Matters to Everyone:**

- People who travel to tropical places can catch these diseases
- Climate change might let some of these diseases spread to new areas
- Many of these diseases can be prevented with simple steps like bed nets and vaccines`,
      keyTerms: [
        { term: 'tropical', definition: 'The warm areas of the world near the equator where it stays hot all year' },
        { term: 'mosquito', definition: 'A small flying insect that bites and can spread diseases through its bite' },
        { term: 'parasite', definition: 'A tiny living thing that lives inside another creature and can make it sick' },
      ],
      analogies: [
        "Tropical diseases are like plants that only grow in certain climates - they need specific conditions to survive and spread.",
        "Mosquitoes spreading diseases are like delivery trucks - they pick up germs from one person and drop them off at another.",
      ],
      examples: [
        "A family going on vacation to a tropical island might take malaria prevention pills to stay safe.",
        "Sleeping under a mosquito net is like having a force field that keeps disease-carrying bugs away.",
      ],
    },
    2: {
      level: 2,
      summary: "Tropical diseases are infections prevalent in tropical and subtropical regions, often transmitted by vectors like mosquitoes, flies, and snails, and significantly impact public health in endemic areas.",
      explanation: `Tropical diseases represent a major global health challenge, affecting hundreds of millions of people primarily in low and middle-income countries. These conditions are closely linked to climate, environment, and poverty.

**Major Categories of Tropical Diseases:**

**1. Vector-Borne Diseases (spread by insects/arthropods)**
- **Malaria**: ~250 million cases/year, caused by Plasmodium parasites transmitted by Anopheles mosquitoes
- **Dengue**: ~400 million infections/year, caused by virus transmitted by Aedes mosquitoes
- **Yellow fever**: Viral disease preventable by vaccine, still causes outbreaks in Africa and South America
- **Chikungunya**: Causes severe joint pain, spread by the same mosquitoes as dengue
- **Leishmaniasis**: Caused by parasites spread by sandfly bites

**2. Parasitic Worm Infections**
- **Schistosomiasis**: Parasitic worms transmitted through contaminated freshwater
- **Lymphatic filariasis**: Causes elephantiasis, spread by mosquitoes
- **Onchocerciasis**: River blindness, spread by black flies

**3. Bacterial Tropical Diseases**
- **Cholera**: Severe diarrheal disease from contaminated water
- **Leprosy**: Chronic bacterial infection affecting skin and nerves
- **Trachoma**: Leading infectious cause of blindness

**Risk Factors for Tropical Diseases:**
- Living in or traveling to endemic areas
- Lack of clean water and sanitation
- Inadequate housing (no screens, standing water nearby)
- Limited access to healthcare and prevention tools
- Poverty and malnutrition

**Prevention Strategies:**
- Insecticide-treated bed nets
- Vaccines (yellow fever, cholera, Japanese encephalitis)
- Prophylactic medications for travelers
- Water and sanitation improvements
- Vector control programs`,
      keyTerms: [
        { term: 'vector', definition: 'An organism (usually an insect) that transmits diseases between hosts', pronunciation: 'VEK-tor' },
        { term: 'endemic', definition: 'Regularly found in a particular region or population', pronunciation: 'en-DEM-ik' },
        { term: 'prophylaxis', definition: 'Treatment given to prevent disease before exposure', pronunciation: 'pro-fil-AK-sis' },
        { term: 'arbovirus', definition: 'A virus transmitted by arthropods like mosquitoes and ticks' },
      ],
      analogies: [
        "Vectors are like disease taxis - they pick up pathogens from infected individuals and transport them to new hosts.",
      ],
    },
    3: {
      level: 3,
      summary: "Tropical diseases encompass a diverse group of infectious conditions driven by environmental, biological, and socioeconomic factors, requiring integrated approaches combining vector control, chemotherapy, vaccines, and health system strengthening.",
      explanation: `Tropical diseases constitute a substantial portion of the global infectious disease burden, with complex transmission dynamics influenced by climate, ecology, and human behavior. The field of tropical medicine has evolved from colonial-era concerns to a modern discipline focused on equity and sustainable control strategies.

**Epidemiological Classification:**

**Protozoan Infections:**
| Disease | Agent | Vector/Transmission | Global Burden |
|---------|-------|---------------------|---------------|
| Malaria | Plasmodium spp. | Anopheles mosquito | 250M cases, 620K deaths |
| Leishmaniasis | Leishmania spp. | Sandflies | 1M new cases/year |
| Trypanosomiasis (African) | T. brucei | Tsetse fly | <1000 new cases/year |
| Trypanosomiasis (American/Chagas) | T. cruzi | Triatomine bugs | 6-7M infected |

**Helminth Infections:**
| Disease | Agent | Transmission | Global Burden |
|---------|-------|--------------|---------------|
| Schistosomiasis | Schistosoma spp. | Freshwater snails | 240M infected |
| Lymphatic filariasis | Wuchereria, Brugia | Mosquitoes | 120M infected |
| Onchocerciasis | Onchocerca volvulus | Black flies | 21M infected |
| Soil-transmitted helminths | Ascaris, hookworm, Trichuris | Fecal-oral/skin | 1.5B infected |

**Viral Tropical Diseases:**
- **Dengue**: Four serotypes, antibody-dependent enhancement complicates repeat infections
- **Yellow fever**: Sylvatic and urban cycles, vaccine provides lifelong immunity
- **Japanese encephalitis**: Leading cause of viral encephalitis in Asia
- **Chikungunya/Zika**: Emerging arboviruses with expanding geographic range

**Pathophysiology Highlights:**

*Malaria:*
- Hepatic stage (asymptomatic) → erythrocytic stage (symptomatic)
- Hemolysis, cytokine release, rosetting → anemia, fever, cerebral malaria
- P. falciparum: most severe, causes cerebral malaria, severe anemia
- P. vivax/ovale: hypnozoites cause relapse

*Dengue:*
- Severe dengue: vascular permeability → plasma leakage
- Warning signs: abdominal pain, persistent vomiting, mucosal bleeding
- Critical phase occurs at defervescence

*Leishmaniasis:*
- Visceral (kala-azar): hepatosplenomegaly, pancytopenia, hypergammaglobulinemia
- Cutaneous: ulcerating skin lesions
- Mucocutaneous: destructive lesions of nose, mouth, throat

**Control Strategies:**

1. **Vector Control**: ITNs, IRS, environmental management, larvicides
2. **Mass Drug Administration (MDA)**: Preventive chemotherapy for NTDs
3. **Vaccination**: Yellow fever, Japanese encephalitis, (dengue with caveats)
4. **Water, Sanitation, Hygiene (WASH)**: Interrupts transmission of many diseases
5. **Case Management**: Early diagnosis and treatment

**Climate Change Implications:**
- Expanding geographic range of vectors
- Altered transmission seasons
- Highland areas becoming suitable for malaria
- Changing disease patterns in temperate zones`,
      keyTerms: [
        { term: 'mass drug administration', definition: 'Strategy of treating entire at-risk populations regardless of infection status', pronunciation: 'MDA' },
        { term: 'neglected tropical disease', definition: 'A diverse group of tropical infections affecting the poorest populations with limited investment in control' },
        { term: 'hypnozoite', definition: 'Dormant liver stage of certain Plasmodium species that can cause malaria relapse', pronunciation: 'HIP-no-zoit' },
        { term: 'antibody-dependent enhancement', definition: 'Phenomenon where antibodies from prior infection worsen subsequent infection' },
      ],
      clinicalNotes: 'In returning travelers with fever, consider malaria (thick/thin smear, RDT), dengue (NS1, IgM/IgG), and other tropical infections based on itinerary and incubation periods. Malaria can be rapidly fatal - empiric treatment may be indicated while awaiting results.',
    },
    4: {
      level: 4,
      summary: "Tropical diseases operate within complex ecological and social systems, with transmission dynamics governed by vector biology, parasite life cycles, host immunity, and environmental determinants, necessitating integrated surveillance-response systems and context-adapted interventions.",
      explanation: `**Systems Approach to Tropical Disease Epidemiology:**

Tropical diseases must be understood as products of interacting biological, ecological, and social systems. Control and elimination efforts require systems thinking that accounts for feedback loops, non-linear dynamics, and emergent properties.

**Vector Biology and Competence:**

*Mosquito Vector Competence Determinants:*
- Midgut barriers to pathogen infection
- Salivary gland barriers to transmission
- Extrinsic incubation period (temperature-dependent)
- Vectorial capacity = ma²pⁿ/(-ln p)
  - m = vector density relative to host
  - a = biting rate
  - p = daily survival probability
  - n = extrinsic incubation period

*Key Vector Species:*
| Vector | Diseases | Behavior |
|--------|----------|----------|
| Anopheles gambiae | Malaria | Anthropophilic, endophilic |
| Aedes aegypti | Dengue, Zika, Chikungunya, Yellow fever | Urban, day-biting, container-breeding |
| Aedes albopictus | Dengue, Chikungunya | Peridomestic, invasive species |
| Culex quinquefasciatus | Lymphatic filariasis | Night-biting, urban |

**Immunological Aspects:**

*Malaria Immunity:*
- Strain-specific immunity develops over repeated exposures
- Premunition: non-sterilizing immunity in endemic areas
- Severe malaria paradoxically more common in areas of lower transmission
- Immune-mediated pathology contributes to cerebral malaria

*Dengue Immunopathology:*
- Primary infection: usually self-limited or asymptomatic
- Secondary heterotypic infection: increased risk of severe dengue
- Cross-reactive antibodies enhance viral entry via Fc receptors
- Implications for vaccine development (Dengvaxia seropositive-only indication)

*Leishmania Immune Response:*
- Th1 response → healing (IFN-γ, TNF-α)
- Th2 response → progressive disease
- Basis for immunotherapy approaches

**Drug Resistance Dynamics:**

*Antimalarial Resistance:*
| Drug | Mechanism | Geographic Distribution |
|------|-----------|------------------------|
| Chloroquine | pfcrt mutations | Near-universal |
| Sulfadoxine-pyrimethamine | dhfr/dhps mutations | Widespread |
| Artemisinin | kelch13 mutations | Southeast Asia, emerging Africa |

*Implications:*
- ACT partner drug resistance threatens malaria control
- Triple ACTs under evaluation
- Need for therapeutic diversity

**Elimination Strategies and Challenges:**

*Disease-Specific Approaches:*
- **Malaria elimination**: Test-and-treat, MDA, vector control intensification
- **Lymphatic filariasis**: MDA (DEC/albendazole or ivermectin/albendazole)
- **Onchocerciasis**: Community-directed treatment with ivermectin
- **Schistosomiasis**: Praziquantel MDA, snail control, WASH
- **Visceral leishmaniasis**: Elimination initiative in Indian subcontinent

*Surveillance Considerations:*
- As prevalence decreases, surveillance sensitivity must increase
- Active case detection in elimination phase
- Post-elimination surveillance for resurgence

**Research Frontiers:**

1. **Gene drive technologies**: Self-propagating genetic modifications to reduce vector populations
2. **Wolbachia-based approaches**: Bacteria-infected mosquitoes with reduced transmission capacity
3. **Monoclonal antibodies**: Long-acting prevention for malaria
4. **RTS,S/AS01 vaccine**: First malaria vaccine with partial efficacy (~30% reduction)
5. **R21/Matrix-M vaccine**: Higher efficacy candidate advancing through trials`,
      keyTerms: [
        { term: 'vectorial capacity', definition: 'Quantitative measure of a vector population ability to transmit a pathogen', pronunciation: 'vek-TOR-ee-al' },
        { term: 'premunition', definition: 'Non-sterilizing immunity maintained by chronic low-level infection' },
        { term: 'kelch13', definition: 'Gene in P. falciparum where mutations confer artemisinin resistance' },
        { term: 'gene drive', definition: 'Genetic engineering approach that ensures preferential inheritance of modified genes' },
      ],
      clinicalNotes: 'When managing severe malaria: IV artesunate is first-line (superior to quinine), monitor for post-artesunate delayed hemolysis (PADH), and consider exchange transfusion for parasitemia >10% with organ dysfunction. For returning travelers, check G6PD before primaquine for P. vivax/ovale radical cure.',
    },
    5: {
      level: 5,
      summary: "Contemporary tropical disease epidemiology integrates molecular epidemiology, mathematical modeling, implementation science, and health systems research within frameworks addressing structural determinants, decolonization of global health practice, and climate-resilient health system development.",
      explanation: `**Evolving Conceptual Framework:**

The field has transitioned from "tropical medicine" (geographic/colonial framing) through "international health" to "global health," with ongoing debates about knowledge production, power, and the structural determinants of health in endemic regions.

**Molecular Epidemiology and Genomic Surveillance:**

*Applications:*
- Pathogen genomic surveillance for resistance monitoring
- Transmission chain reconstruction
- Origin and spread of outbreaks
- Drug target identification
- Vaccine escape monitoring

*Examples:*
- Plasmodium genomic epidemiology: k13 surveillance, antimalarial resistance tracking
- Dengue phylodynamics: serotype circulation, vaccine strain selection
- Arbovirus emergence: tracking Zika spread, identifying introduction events

**Mathematical Modeling Frameworks:**

*Compartmental Models:*
- SIR/SEIR extensions for vector-borne diseases
- Ross-Macdonald model for malaria (R₀ = ma²bce^(-gn)/gr)
- Agent-based models for heterogeneous transmission

*Applications in Policy:*
- Elimination feasibility assessments
- MDA coverage targets
- Vector control optimization
- Resource allocation under uncertainty
- Climate change scenario planning

*Key Parameters:*
| Parameter | Definition | Estimation Challenges |
|-----------|------------|----------------------|
| Basic reproduction number (R₀) | Secondary infections from index case in susceptible population | Heterogeneity, superinfection |
| Effective reproduction number (Rₑ) | R₀ adjusted for immunity and interventions | Real-time estimation |
| Serial interval | Time between symptom onset in infector and infectee | Pre-symptomatic transmission |
| Force of infection (λ) | Per-capita rate of acquiring infection | Serological estimation |

**Implementation Science for Tropical Disease Control:**

*Frameworks Applied:*
- RE-AIM (Reach, Effectiveness, Adoption, Implementation, Maintenance)
- CFIR (Consolidated Framework for Implementation Research)
- Context adaptation for MDA programs
- Hybrid effectiveness-implementation trials

*Key Implementation Challenges:*
- Coverage and equity in MDA
- Health system integration vs. vertical programs
- Community engagement and trust
- Supply chain for diagnostics and medicines
- Last-mile delivery in remote areas

**Health Systems and Tropical Diseases:**

*Integration Debates:*
- Vertical disease programs vs. horizontal system strengthening
- Diagonal approach: disease-specific investments strengthening systems
- Primary health care and tropical disease case management
- Community health worker roles

*Financing Mechanisms:*
- Global Fund to Fight AIDS, Tuberculosis and Malaria
- GAVI (vaccine programs)
- END Fund and other NTD financing
- Domestic resource mobilization
- Sustainability concerns as external funding plateaus

**Critical Perspectives:**

*Decolonizing Tropical Medicine:*
- Historical legacy of colonial extraction
- Power imbalances in research partnerships
- Local priority-setting vs. donor priorities
- Capacity strengthening vs. capacity substitution
- Equity in authorship and knowledge production

*Political Economy of Neglect:*
- "Neglected" diseases reflect power disparities
- Pharmaceutical market failures
- Climate justice and disease burden
- Global health security vs. global health equity

**One Health Integration:**

*Zoonotic Tropical Diseases:*
- Nipah, Ebola, Lassa fever
- Rodent-borne diseases (leptospirosis, hantavirus)
- Animal reservoirs for leishmaniasis, trypanosomiasis

*Approach:*
- Human-animal-environment interface surveillance
- Land use change and spillover risk
- Wildlife trade regulation
- Veterinary-public health collaboration

**Climate Change and Future Trajectories:**

*Projections:*
- Shifting suitable zones for Aedes mosquitoes
- Highland malaria in East Africa
- Longer transmission seasons
- Extreme weather events disrupting control programs
- Migration and displacement affecting disease patterns

*Adaptation Strategies:*
- Climate-informed early warning systems
- Flexible intervention packages
- Health system resilience building
- Regional collaboration mechanisms`,
      keyTerms: [
        { term: 'force of infection', definition: 'Rate at which susceptible individuals acquire infection, reflecting transmission intensity', pronunciation: 'lambda (λ)' },
        { term: 'phylodynamics', definition: 'Integration of phylogenetics and epidemiology to understand pathogen evolution and spread' },
        { term: 'diagonal approach', definition: 'Strategy combining disease-specific interventions with broader health system strengthening' },
        { term: 'spillover', definition: 'Transmission of pathogen from animal reservoir to human population' },
        { term: 'capacity substitution', definition: 'External actors performing functions rather than building local capacity to perform them' },
      ],
      clinicalNotes: 'Clinicians should engage with tropical disease research through ethical partnerships respecting local priorities and building local capacity. Consider career pathways combining clinical tropical medicine with implementation science, health systems research, or policy work. Stay current with WHO recommendations, which may change rapidly as evidence emerges.',
    },
  },

  media: [
    {
      id: 'tropical-disease-distribution-map',
      type: 'diagram',
      filename: 'tropical-disease-global-distribution.svg',
      title: 'Global Distribution of Major Tropical Diseases',
      description: 'World map showing endemic regions for major tropical diseases',
    },
    {
      id: 'vector-life-cycles',
      type: 'diagram',
      filename: 'disease-vector-life-cycles.svg',
      title: 'Disease Vector Life Cycles',
      description: 'Diagrams of mosquito and other vector life cycles with intervention points',
    },
  ],

  citations: [
    {
      id: 'who-ntd-roadmap',
      type: 'website',
      title: 'Ending the neglect to attain the Sustainable Development Goals: A road map for neglected tropical diseases 2021-2030',
      source: 'World Health Organization',
      url: 'https://www.who.int/publications/i/item/9789240010352',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'hunter-tropical-medicine',
      type: 'textbook',
      title: "Hunter's Tropical Medicine and Emerging Infectious Diseases",
      authors: ['Ryan ET', 'Hill DR', 'Solomon T', 'Aronson NE', 'Endy TP'],
      source: 'Elsevier',
      chapter: 'Multiple',
    },
    {
      id: 'gbd-ntd',
      type: 'article',
      title: 'Global burden of neglected tropical diseases',
      source: 'The Lancet',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'malaria-global', targetType: 'topic', relationship: 'child', label: 'Malaria' },
    { targetId: 'ntd-overview', targetType: 'topic', relationship: 'related', label: 'Neglected Tropical Diseases' },
    { targetId: 'vector-borne-ntds', targetType: 'topic', relationship: 'related', label: 'Vector-Borne NTDs' },
    { targetId: 'climate-health', targetType: 'topic', relationship: 'related', label: 'Climate and Health' },
    { targetId: 'travel-health-overview', targetType: 'topic', relationship: 'see-also', label: 'Travel Health' },
  ],

  tags: {
    systems: ['infectious-disease', 'public-health'],
    topics: ['tropical-medicine', 'vector-borne-diseases', 'parasitology', 'global-health'],
    keywords: ['tropical diseases', 'malaria', 'dengue', 'neglected tropical diseases', 'vector control'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
