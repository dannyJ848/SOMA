/**
 * Neglected Tropical Diseases (NTDs) Overview
 *
 * Educational content about neglected tropical diseases - a diverse group of
 * communicable diseases that prevail in tropical and subtropical conditions
 * affecting over 1 billion people worldwide.
 */

import { EducationalContent } from '../../types';

export const NTD_OVERVIEW: EducationalContent = {
  id: 'ntd-overview',
  type: 'concept',
  name: 'Neglected Tropical Diseases Overview',
  alternateNames: ['NTDs', 'Tropical Neglected Diseases', 'Diseases of Poverty'],

  levels: {
    1: {
      level: 1,
      summary: 'Neglected tropical diseases are illnesses that affect very poor communities in hot, tropical parts of the world. They are called "neglected" because not enough attention and money is spent on treating and preventing them.',
      explanation: `Neglected tropical diseases (NTDs) are a group of sicknesses that mainly affect people living in poverty in warm, tropical areas of the world.

**Why Are They Called "Neglected"?**
- These diseases don't get as much attention or research money as other diseases
- They mostly affect very poor people who can't afford treatments
- Drug companies often don't make medicines for these diseases because the people who need them can't pay much

**What Causes These Diseases?**
- Tiny worms that can live inside your body
- Parasites spread by bugs like flies and mosquitoes
- Bacteria and viruses

**Where Do People Get NTDs?**
- Areas with unsafe drinking water
- Places without proper toilets or sewage systems
- Hot, humid regions where disease-carrying bugs live
- Communities without good healthcare

**Common Effects:**
- Blindness or vision problems
- Skin problems and disfigurement
- Weakness and tiredness
- Difficulty thinking clearly
- Missing school and work

**The Good News:**
- Many NTDs can be prevented with clean water and sanitation
- Some treatments are very cheap or even free
- Vaccines and medicines exist for many of these diseases
- Organizations around the world are working to eliminate NTDs`,
      keyTerms: [
        { term: 'neglected tropical diseases', definition: 'A group of diseases that mainly affect poor people in tropical areas and don\'t get enough attention' },
        { term: 'tropical', definition: 'Related to the warm areas of Earth near the equator' },
        { term: 'parasite', definition: 'A tiny creature that lives on or inside another living thing and causes harm' },
      ],
      analogies: [
        'NTDs are like diseases that have been forgotten about - while everyone focuses on famous diseases like cancer, these diseases quietly make millions of people sick.',
        'Think of NTDs like problems in a house that get ignored because no one wants to fix them - they keep getting worse until someone pays attention.',
      ],
      examples: [
        'Worms that people get from walking barefoot in contaminated soil',
        'River blindness, spread by black flies near rivers in Africa',
        'Elephantiasis, which causes legs to swell very large from mosquito bites',
      ],
    },
    2: {
      level: 2,
      summary: 'Neglected tropical diseases are a diverse group of 20+ communicable diseases that affect over 1 billion people, primarily in impoverished tropical communities. They cause significant disability and perpetuate cycles of poverty.',
      explanation: `Neglected tropical diseases (NTDs) represent a group of infections that disproportionately affect the world's poorest populations. The World Health Organization recognizes over 20 NTDs that share common characteristics.

**Why "Neglected"?**
- Historically received less research funding than other diseases
- Affect populations with limited political voice
- Low commercial incentive for pharmaceutical development
- Often overshadowed by HIV, TB, and malaria in global health funding

**Categories of NTDs:**

**1. Helminth (Worm) Infections**
- Soil-transmitted helminths (roundworm, hookworm, whipworm)
- Schistosomiasis (blood flukes)
- Lymphatic filariasis (elephantiasis)
- Onchocerciasis (river blindness)

**2. Protozoan Infections**
- Leishmaniasis
- Chagas disease
- Human African trypanosomiasis (sleeping sickness)

**3. Bacterial Infections**
- Leprosy
- Trachoma
- Yaws

**4. Viral Infections**
- Dengue and chikungunya
- Rabies

**Impact on Communities:**
- Over 1 billion people infected globally
- 500,000+ deaths annually
- Massive disability burden
- Lost productivity and school attendance
- Perpetuation of poverty cycles
- Social stigma and discrimination

**Key Risk Factors:**
- Lack of clean water and sanitation
- Poor housing conditions
- Limited access to healthcare
- Climate favorable to vectors and parasites
- Conflict and displacement

**Progress and Challenges:**
- Several NTDs targeted for elimination by 2030
- Mass drug administration programs expanding
- New diagnostic tools being developed
- Climate change may expand disease ranges`,
      keyTerms: [
        { term: 'helminth', definition: 'A parasitic worm that can live inside humans, including roundworms, flatworms, and flukes', pronunciation: 'HEL-minth' },
        { term: 'vector-borne', definition: 'Diseases transmitted by organisms like mosquitoes, flies, or ticks' },
        { term: 'mass drug administration', definition: 'Programs that treat entire at-risk populations with preventive medications' },
        { term: 'morbidity', definition: 'The state of being diseased or the rate of disease in a population' },
      ],
      analogies: [
        'NTDs are like a trap that keeps communities poor - people get sick and can\'t work, so they stay poor and can\'t afford prevention or treatment.',
      ],
    },
    3: {
      level: 3,
      summary: 'NTDs comprise a taxonomically diverse group of pathogens causing chronic infections that collectively affect over 1.7 billion people. They share epidemiological features including poverty-driven transmission, potential for control through mass interventions, and significant impact on disability-adjusted life years.',
      explanation: `Neglected tropical diseases represent a strategic grouping of conditions united by their association with poverty, tropical geography, and historical neglect in research and funding. The WHO currently recognizes 20 NTDs, though the list continues to evolve.

**WHO-Recognized NTDs (2023):**

**Helminthiases:**
- Soil-transmitted helminthiases (STH)
- Schistosomiasis
- Lymphatic filariasis
- Onchocerciasis
- Dracunculiasis (Guinea worm)
- Cysticercosis/Taeniasis
- Echinococcosis
- Foodborne trematodiases

**Protozoan Diseases:**
- Leishmaniasis (cutaneous, mucocutaneous, visceral)
- Chagas disease
- Human African trypanosomiasis

**Bacterial Diseases:**
- Leprosy
- Trachoma
- Buruli ulcer
- Yaws

**Viral Diseases:**
- Dengue and chikungunya
- Rabies

**Fungal/Ectoparasites:**
- Mycetoma, chromoblastomycosis
- Scabies

**Epidemiological Characteristics:**

| Feature | NTD Pattern |
|---------|-------------|
| Geography | Tropical/subtropical, focal distribution |
| SES | Strong poverty association |
| Transmission | Water, soil, vectors, animal reservoirs |
| Chronicity | Often chronic with cumulative disability |
| Co-infection | Common polyparasitism |

**Disease Burden:**

- 1.7 billion people requiring NTD interventions
- Responsible for approximately 200,000 deaths/year
- 25 million DALYs lost annually
- Significant hidden burden (stigma, mental health)

**Control Strategies:**

**1. Preventive Chemotherapy (PC)**
Five NTDs amenable to mass drug administration:
- Lymphatic filariasis
- Onchocerciasis
- Schistosomiasis
- Soil-transmitted helminthiases
- Trachoma

PC drugs: albendazole, ivermectin, praziquantel, azithromycin, diethylcarbamazine

**2. Intensified Disease Management**
- Case detection and treatment
- Vector control
- Veterinary public health
- WASH (Water, Sanitation, Hygiene)

**3. Cross-Cutting Interventions**
- Integrated vector management
- One Health approaches
- Health system strengthening

**WHO Roadmap 2021-2030 Targets:**
- Eradication: Dracunculiasis, yaws
- Elimination: Leprosy, sleeping sickness, lymphatic filariasis (among others)
- Control: Schistosomiasis, STH, dengue`,
      keyTerms: [
        { term: 'preventive chemotherapy', definition: 'Large-scale treatment of at-risk populations with safe, single-dose medicines to prevent and control NTDs' },
        { term: 'polyparasitism', definition: 'Infection with multiple parasite species simultaneously, common in NTD-endemic areas' },
        { term: 'WASH', definition: 'Water, Sanitation, and Hygiene - infrastructure essential for NTD prevention' },
        { term: 'DALY', definition: 'Disability-Adjusted Life Year - measure combining years of life lost and years lived with disability', pronunciation: 'DAL-ee' },
        { term: 'endemicity', definition: 'The constant presence of a disease in a geographic area or population' },
      ],
      clinicalNotes: 'Consider NTDs in patients with relevant travel or immigration history. Many present with chronic, nonspecific symptoms. Eosinophilia is common with helminth infections. Serological tests and specialized microscopy may be needed for diagnosis.',
    },
    4: {
      level: 4,
      summary: 'NTDs represent a programmatic category of primarily chronic infectious diseases characterized by poverty-driven transmission cycles, amenability to integrated control strategies, and disproportionate contribution to global disability burden despite low mortality relative to the "big three" infectious diseases.',
      explanation: `**Conceptual Framework for NTDs:**

The NTD category emerged from recognition that certain tropical diseases were being overlooked despite their massive cumulative burden. The grouping facilitates:
- Advocacy and resource mobilization
- Integrated control programs
- Research priority-setting
- Progress monitoring

**Pathogen Diversity and Commonalities:**

NTDs span the taxonomic spectrum:
- Viruses (dengue, rabies, chikungunya)
- Bacteria (Mycobacterium leprae, Chlamydia trachomatis)
- Protozoa (Leishmania, Trypanosoma)
- Helminths (nematodes, trematodes, cestodes)
- Ectoparasites (Sarcoptes scabiei)
- Fungi (Mycetoma agents)

**Shared Epidemiological Features:**
- Strongly correlated with poverty indices
- Focal/clustered geographic distribution
- Often chronic with insidious onset
- High disability-to-mortality ratio
- Frequently stigmatizing conditions
- Multiple infections common in same individual

**Transmission Ecology:**

| Transmission Mode | Examples | Key Interventions |
|------------------|----------|-------------------|
| Soil-transmitted | STH, hookworm | WASH, MDA |
| Water-related | Schistosomiasis, dracunculiasis | Water treatment, snail control |
| Vector-borne | LF, onchocerciasis, Chagas | Vector control, MDA |
| Zoonotic | Rabies, echinococcosis | Veterinary interventions |
| Direct contact | Leprosy, yaws, scabies | Case detection, treatment |

**Burden Quantification Challenges:**

Traditional mortality metrics underestimate NTD burden:
- Chronic morbidity predominates over mortality
- Subtle impacts: anemia, cognitive impairment, growth stunting
- Mental health and stigma poorly captured
- Economic productivity losses
- Quality of life impacts

**Programmatic Approaches:**

**Preventive Chemotherapy (PC) NTDs:**
Amenable to mass drug administration due to:
- Safe, effective single-dose treatments
- Broad population coverage feasible
- Acceptable cost-effectiveness

**PC Implementation:**
- School-based deworming
- Community-wide treatment campaigns
- Integration with immunization programs
- Lymphatic filariasis: IDA triple therapy (ivermectin, DEC, albendazole)

**Intensified Disease Management (IDM) NTDs:**
Require individual diagnosis and treatment:
- Buruli ulcer
- Chagas disease
- Leishmaniasis
- Leprosy
- Human African trypanosomiasis

**Research Priorities:**

**Diagnostics:**
- Point-of-care tests for case detection
- Mapping and surveillance tools
- Treatment response monitoring

**Therapeutics:**
- Safer, shorter treatment regimens
- Pediatric formulations
- Macrofilaricides (drugs killing adult worms)

**Vaccines:**
- Limited current options (rabies only widely used)
- Candidates in development for leishmaniasis, schistosomiasis, hookworm

**Implementation Science:**
- Optimal MDA strategies
- Integration platforms
- Community engagement

**Political Economy of NTDs:**

- Pharmaceutical donation programs essential (Merck, GSK, Pfizer, others)
- Public-private partnerships (e.g., Mectizan Donation Program)
- END Fund and other financing mechanisms
- Kigali Declaration (2022) renewed political commitment`,
      keyTerms: [
        { term: 'macrofilaricide', definition: 'Drug that kills adult filarial worms, as opposed to microfilaricides targeting larval stages', pronunciation: 'MAK-roh-fil-AR-ih-side' },
        { term: 'IDA', definition: 'Triple drug therapy (ivermectin, diethylcarbamazine, albendazole) for lymphatic filariasis elimination' },
        { term: 'MDA', definition: 'Mass Drug Administration - treating entire populations at risk without individual diagnosis' },
        { term: 'elimination as public health problem', definition: 'Reducing disease to a level where it no longer constitutes a public health burden, distinct from eradication' },
      ],
      clinicalNotes: 'NTD co-infections require consideration of drug interactions and treatment sequencing. Ivermectin is contraindicated in Loa loa co-endemic areas without pre-treatment screening. Post-treatment reactions (Mazzotti, Jarisch-Herxheimer-like) may occur.',
    },
    5: {
      level: 5,
      summary: 'NTDs exemplify the intersection of poverty, ecology, and infectious disease, requiring multisectoral approaches that integrate biomedical interventions with development programs. Current elimination efforts test the limits of vertical disease programs while generating evidence for health systems strengthening.',
      explanation: `**Critical Analysis of the NTD Paradigm:**

**Historical Construction of "NTDs":**
The NTD category emerged in the early 2000s as an advocacy tool:
- 2005: Hotez et al. PLoS Medicine paper crystallized the concept
- 2007: WHO Department of NTDs established
- 2012: London Declaration united stakeholders
- 2020: WHO Roadmap for NTD Control 2021-2030

**Tensions and Critiques:**

*Category Coherence:*
- Pathogen diversity (viruses to worms) complicates unified approach
- "Neglect" is relative and contested
- Some conditions have received substantial attention (leprosy)
- Risk of overlooking non-listed tropical infections

*Vertical vs. Horizontal Programs:*
- MDA programs may bypass health system strengthening
- Sustainability questions when external support ends
- Integration with primary healthcare theoretically ideal but operationally complex

*Equity Considerations:*
- "Last mile" populations most difficult to reach
- Gender dimensions: women's caregiving burden, differential stigma
- Disability and rehabilitation often neglected
- Mental health impacts underaddressed

**Advanced Epidemiological Concepts:**

**Transmission Dynamics:**
- Basic reproduction number (R0) varies by NTD
- Many helminths have aggregated distributions (negative binomial)
- Treatment thresholds derived from transmission models
- Breaking transmission vs. morbidity control debates

**Mapping and Surveillance:**
- Geostatistical modeling for prevalence estimation
- Sentinel site surveillance
- Challenges: low sensitivity diagnostics, asymptomatic infections
- Xeno-monitoring: testing vectors for infection

**Pharmacological Considerations:**

**MDA Drug Mechanisms:**
| Drug | Mechanism | Target NTDs |
|------|-----------|-------------|
| Ivermectin | Glutamate-gated Cl- channels | Onchocerciasis, LF, STH, scabies |
| Albendazole | Tubulin binding | STH, LF (adjunct) |
| Praziquantel | Ca2+ channel disruption | Schistosomiasis |
| DEC | Microfilarial killing, immunomodulation | LF |
| Azithromycin | Protein synthesis inhibition | Trachoma, yaws |

**Resistance Concerns:**
- Benzimidazole resistance emerging in STH
- Monitoring strategies needed
- Limited alternative drug pipeline

**Implementation Science Frontiers:**

**Triple Drug Therapy (IDA):**
- Accelerates LF elimination in non-Loa endemic areas
- Pharmacovigilance requirements
- Community preparedness essential

**Integrated Platforms:**
- NTD-Malaria co-implementation
- School health platforms
- Community-directed treatment
- Integration with SDG monitoring

**Research Agenda:**

**Diagnostic Innovations:**
- Antigen-detection tests (e.g., POC-CCA for schistosomiasis)
- Molecular surveillance (PCR, LAMP)
- Serological markers of elimination

**New Therapeutics:**
- Moxidectin (approved for onchocerciasis)
- Emodepside (veterinary drug, human trials)
- Oxfendazole (broad-spectrum anthelmintic)
- Fexinidazole (oral treatment for sleeping sickness)

**Vaccine Development:**
- Controlled human infection models (CHIM) for challenge studies
- Transmission-blocking vaccines
- Therapeutic vaccines (leishmaniasis)

**Political Economy and Governance:**

**Financing Mechanisms:**
- Drug donation sustainability
- Country ownership and domestic financing
- Global Fund and Gavi roles expanding
- Impact investment and social finance

**Accountability Frameworks:**
- WHO verification processes
- Independent monitoring
- Data quality and reporting standards

**Future Trajectories:**
- Climate change affecting vector distribution
- Urbanization changing transmission patterns
- Conflict and displacement disrupting programs
- Pandemic preparedness lessons applicable to NTD response`,
      keyTerms: [
        { term: 'xeno-monitoring', definition: 'Surveillance method using vectors (e.g., mosquitoes, flies) to detect pathogen transmission' },
        { term: 'community-directed treatment', definition: 'Distribution approach where communities select distributors and timing, increasing ownership' },
        { term: 'controlled human infection model', definition: 'Clinical trials where volunteers are deliberately infected to study disease and treatments' },
        { term: 'transmission-blocking', definition: 'Intervention preventing pathogen spread to next host, including some vaccine approaches' },
      ],
      clinicalNotes: 'Specialist consultation recommended for complex NTD cases. Consider reactivation risk in immunocompromised patients from endemic areas (e.g., Strongyloides hyperinfection, Chagas reactivation). Travel medicine clinics increasingly relevant as migration patterns shift NTD epidemiology.',
    },
  },

  media: [
    {
      id: 'ntd-global-distribution-map',
      type: 'diagram',
      filename: 'ntd-global-distribution.svg',
      title: 'Global Distribution of NTDs',
      description: 'World map showing endemic regions for major NTDs',
    },
    {
      id: 'ntd-transmission-cycles',
      type: 'diagram',
      filename: 'ntd-transmission-cycles.svg',
      title: 'NTD Transmission Cycles',
      description: 'Diagram showing various transmission routes for different NTD categories',
    },
  ],

  citations: [
    {
      id: 'who-ntd-roadmap-2030',
      type: 'website',
      title: 'Ending the neglect to attain the Sustainable Development Goals: A road map for neglected tropical diseases 2021-2030',
      source: 'World Health Organization',
      url: 'https://www.who.int/publications/i/item/9789240010352',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'hotez-ntd-review',
      type: 'article',
      title: 'The Global Burden of Disease Study and the Neglected Tropical Diseases',
      authors: ['Hotez PJ', 'Alvarado M', 'Basanez MG'],
      source: 'PLoS Neglected Tropical Diseases',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'parasitic-ntds', targetType: 'topic', relationship: 'child', label: 'Parasitic NTDs' },
    { targetId: 'vector-borne-ntds', targetType: 'topic', relationship: 'child', label: 'Vector-Borne NTDs' },
    { targetId: 'global-health-challenges', targetType: 'topic', relationship: 'parent', label: 'Global Health Challenges' },
    { targetId: 'poverty-and-health', targetType: 'topic', relationship: 'related', label: 'Poverty and Health' },
  ],

  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'infectious-diseases', 'neglected-tropical-diseases'],
    keywords: ['NTD', 'tropical diseases', 'mass drug administration', 'disease elimination', 'poverty'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
