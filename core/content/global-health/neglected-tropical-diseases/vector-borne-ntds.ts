/**
 * Vector-Borne Neglected Tropical Diseases
 *
 * Educational content about NTDs transmitted by arthropod vectors,
 * including diseases spread by mosquitoes, flies, and bugs.
 */

import { EducationalContent } from '../../types';

export const VECTOR_BORNE_NTDS: EducationalContent = {
  id: 'vector-borne-ntds',
  type: 'concept',
  name: 'Vector-Borne Neglected Tropical Diseases',
  alternateNames: ['Insect-Transmitted NTDs', 'Arthropod-Borne NTDs'],

  levels: {
    1: {
      level: 1,
      summary: 'Vector-borne NTDs are diseases spread by insects and other small creatures like mosquitoes, flies, and bugs. When these creatures bite an infected person and then bite you, they can pass along the disease.',
      explanation: `Some tropical diseases are spread by insects that carry germs from one person to another. These insects are called "vectors" because they carry and deliver disease.

**What Insects Spread NTDs?**

**Mosquitoes** spread:
- Lymphatic filariasis (elephantiasis) - causes legs and arms to swell huge
- Dengue fever - causes high fever and severe pain

**Flies** spread:
- River blindness - black flies near rivers can make people go blind
- Sleeping sickness - tsetse flies in Africa spread this brain disease
- Leishmaniasis - tiny sandflies spread this skin and organ disease

**Bugs** spread:
- Chagas disease - "kissing bugs" in Latin America bite faces at night

**How Does This Happen?**
1. An insect bites a person who has the disease
2. The germ gets inside the insect
3. The insect bites another person
4. The germ enters the new person's blood
5. The new person gets sick

**Why Are These Hard to Stop?**
- Insects are everywhere in tropical areas
- They're hard to kill completely
- They breed in water, forests, and houses
- Climate affects where they live

**How to Protect Yourself:**
- Sleep under bed nets (especially ones treated with insect-killer)
- Use insect repellent
- Wear long sleeves and pants
- Stay inside when insects are most active
- Keep homes clean and screen windows`,
      keyTerms: [
        { term: 'vector', definition: 'An insect or other creature that carries and spreads disease from one person to another' },
        { term: 'mosquito', definition: 'A flying insect that bites and drinks blood, and can spread diseases' },
        { term: 'bed net', definition: 'A net hung over a bed to keep mosquitoes and other insects away while sleeping' },
      ],
      analogies: [
        'Vectors are like tiny delivery trucks - they pick up disease from one person and deliver it to the next.',
        'A bed net works like a protective bubble around you while you sleep.',
      ],
      examples: [
        'Tsetse flies only live in Africa and spread sleeping sickness',
        'Black flies breed near fast-flowing rivers, which is why the disease is called river blindness',
      ],
    },
    2: {
      level: 2,
      summary: 'Vector-borne NTDs are transmitted by arthropods (insects and related creatures) that acquire pathogens from infected hosts and transmit them to new hosts. Major diseases include lymphatic filariasis, onchocerciasis, leishmaniasis, Chagas disease, and dengue.',
      explanation: `Vector-borne diseases account for more than 17% of all infectious diseases globally. Several important NTDs depend on arthropod vectors for transmission.

**Major Vector-Borne NTDs:**

**1. Lymphatic Filariasis (Elephantiasis)**
- Vector: Mosquitoes (Culex, Anopheles, Aedes)
- Pathogen: Wuchereria bancrofti, Brugia species
- Distribution: Tropical Asia, Africa, Pacific, Americas
- Effects: Lymphedema, hydrocele, elephantiasis
- At risk: 893 million people in 49 countries

**2. Onchocerciasis (River Blindness)**
- Vector: Black flies (Simulium species)
- Pathogen: Onchocerca volvulus
- Distribution: Africa (99%), Latin America, Yemen
- Effects: Blindness, severe skin disease, itching
- At risk: 220 million people

**3. Leishmaniasis**
- Vector: Sandflies (Phlebotomus, Lutzomyia)
- Pathogen: Leishmania species
- Forms:
  - Cutaneous: Skin sores (most common)
  - Visceral (kala-azar): Affects organs, can be fatal
  - Mucocutaneous: Destroys nose/mouth tissues
- At risk: 1 billion people in 98 countries

**4. Chagas Disease (American Trypanosomiasis)**
- Vector: Triatomine bugs ("kissing bugs")
- Pathogen: Trypanosoma cruzi
- Distribution: Latin America (now spreading via migration)
- Effects: Heart disease, digestive problems
- Infected: 6-7 million people

**5. Human African Trypanosomiasis (Sleeping Sickness)**
- Vector: Tsetse flies (Glossina species)
- Pathogen: Trypanosoma brucei
- Distribution: Sub-Saharan Africa
- Effects: Neurological disease, fatal if untreated
- Near elimination: <1,000 cases/year now

**Vector Biology Basics:**
- Vectors need blood meals for reproduction
- Disease develops inside the vector before transmission
- Vector populations depend on climate and environment
- Each vector has specific habitats and behaviors

**Control Strategies:**
| Method | Examples |
|--------|----------|
| Personal protection | Bed nets, repellents, clothing |
| Environmental | Eliminate breeding sites |
| Chemical | Indoor spraying, larvicides |
| Biological | Sterile insect technique |
| Medical | Mass drug administration |`,
      keyTerms: [
        { term: 'arthropod vector', definition: 'Insects, ticks, or other joint-legged animals that transmit pathogens', pronunciation: 'AR-throh-pod' },
        { term: 'onchocerciasis', definition: 'River blindness - disease caused by parasitic worm transmitted by black flies', pronunciation: 'on-koh-ser-KY-ah-sis' },
        { term: 'tsetse fly', definition: 'Blood-feeding fly found in Africa that transmits sleeping sickness', pronunciation: 'TSET-see' },
        { term: 'triatomine bug', definition: 'Blood-sucking bug that transmits Chagas disease', pronunciation: 'try-AT-oh-meen' },
      ],
      analogies: [
        'Vector control is like cutting a delivery route - if you stop the insects, you stop the disease from being delivered.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vector-borne NTDs involve complex transmission cycles dependent on vector biology, environmental conditions, and pathogen development within arthropod hosts. Control requires integrated approaches targeting vectors, pathogens, and environmental determinants.',
      explanation: `Vector-borne NTDs are characterized by obligate involvement of arthropod vectors in the pathogen life cycle. Understanding vector ecology and transmission dynamics is essential for control.

**Transmission Biology:**

**Biological vs. Mechanical Transmission:**
- *Biological*: Pathogen develops/multiplies in vector (most NTDs)
- *Mechanical*: Vector physically carries pathogen without development

**Key Transmission Parameters:**
| Parameter | Definition | Control Implication |
|-----------|------------|-------------------|
| Vectorial capacity | Overall transmission potential | Target for intervention |
| Extrinsic incubation period | Time for pathogen development in vector | Temperature-dependent |
| Biting rate | Frequency of host contact | Affected by behavior |
| Vector competence | Ability to transmit pathogen | Varies by species/strain |

**Disease-Specific Transmission:**

**Lymphatic Filariasis:**
- Microfilariae ingested with blood meal
- Development to L3 larvae in mosquito (10-14 days)
- L3 deposited on skin during subsequent bite
- Periodicity: Nocturnal (W. bancrofti) or subperiodic (Brugia)

**Onchocerciasis:**
- Microfilariae from skin ingested by black fly
- Development to L3 in fly (6-12 days)
- Transmission during day-biting
- Adult worms live 10-15 years in nodules

**Leishmaniasis:**
- Amastigotes ingested from infected skin/blood
- Transform to promastigotes in sandfly gut
- Transmission via regurgitation during bite
- Reservoir hosts important (dogs, rodents)

**Chagas Disease:**
- Trypomastigotes ingested from blood
- Multiply in bug gut
- Transmission via bug feces (not bite)
- Contamination of bite wound or mucous membranes

**Vector Control Strategies:**

**1. Chemical Control:**
- Indoor residual spraying (IRS)
- Long-lasting insecticidal nets (LLINs)
- Larviciding
- Space spraying

**2. Environmental Management:**
- Source reduction (eliminate breeding sites)
- House improvement (screens, plaster walls)
- Vegetation management

**3. Biological Control:**
- Bacterial larvicides (Bti, Bs)
- Predatory fish for larvae
- Sterile insect technique (SIT)
- Incompatible insect technique (Wolbachia)

**4. Integrated Vector Management (IVM):**
WHO-recommended approach combining:
- Evidence-based decision-making
- Multiple complementary methods
- Intersectoral collaboration
- Community engagement
- Capacity building

**Challenges:**

**Insecticide Resistance:**
- Widespread in Anopheles, Aedes
- Resistance mechanisms: target site, metabolic, behavioral
- Resistance management strategies essential

**Climate Change:**
- Expanding vector ranges
- Altered seasonality
- Changing transmission intensity
- Need for adaptive strategies`,
      keyTerms: [
        { term: 'vectorial capacity', definition: 'Mathematical estimate of ability of vector population to transmit disease' },
        { term: 'extrinsic incubation period', definition: 'Time required for pathogen development within the vector', pronunciation: 'ex-TRIN-sik' },
        { term: 'integrated vector management', definition: 'Rational decision-making process for optimal use of vector control resources' },
        { term: 'periodicity', definition: 'Temporal pattern of microfilariae appearance in blood' },
      ],
      clinicalNotes: 'Diagnosis requires awareness of geographic exposure and vector activity patterns. Blood sampling for filariasis should consider periodicity. Vector control recommendations should account for local species and resistance profiles.',
    },
    4: {
      level: 4,
      summary: 'Vector-borne NTD transmission dynamics involve complex ecological interactions modulated by climate, land use, and human behavior. Contemporary control integrates genomic surveillance, novel insecticides, and potentially transformative technologies including gene drive, requiring sophisticated risk assessment.',
      explanation: `**Advanced Transmission Dynamics:**

**Mathematical Modeling:**

**Ross-Macdonald Model (Modified for NTDs):**
R0 = ma²bce^(-μn)/μr

Where:
- m = vector/host ratio
- a = biting rate
- b = vector competence
- c = host infectiousness
- μ = vector mortality rate
- n = extrinsic incubation period
- r = host recovery rate

**Implications:**
- Vector mortality (μ) has quadratic effect
- Small changes in vector density can dramatically affect transmission
- Temperature effects on EIP significant

**Heterogeneity Considerations:**
- Spatial clustering of transmission
- Human mobility patterns
- Vector behavioral plasticity
- Superinfection dynamics

**Vector Genomics:**

**Applications:**
- Species identification (cryptic species complexes)
- Population structure analysis
- Resistance gene monitoring
- Vector competence genetics
- Pathogen detection (xenomonitoring)

**Technologies:**
- Whole genome sequencing
- SNP genotyping arrays
- Target amplicon sequencing
- Metagenomic approaches

**Novel Vector Control:**

**Next-Generation Insecticides:**
| Class | Target | Example | Status |
|-------|--------|---------|--------|
| Neonicotinoids | nAChR | Clothianidin | In use |
| Pyrroles | Mitochondria | Chlorfenapyr | Approved |
| Butenolides | nAChR | Flupyradifurone | Development |
| Meta-diamides | GABACl | Broflanilide | Late development |

**Spatial Repellents:**
- Reduce human-vector contact
- Complement LLINs and IRS
- Active ingredients: transfluthrin, metofluthrin

**Gene Drive:**
- Self-spreading genetic modifications
- Population suppression (female sterility, male bias)
- Population modification (refractory genes)
- Regulatory and ethical frameworks developing
- Target Malaria project advancing

**Wolbachia-Based Approaches:**
- Cytoplasmic incompatibility for population suppression
- Pathogen interference for disease blocking
- World Mosquito Program deploying for dengue

**Disease-Specific Updates:**

**Lymphatic Filariasis Elimination:**
- Triple drug therapy (IDA) accelerating elimination
- Post-MDA surveillance challenges
- Morbidity management and disability prevention
- Doxycycline for Wolbachia depletion

**Onchocerciasis:**
- Near elimination in Americas
- Test-and-treat strategies
- Moxidectin as alternative to ivermectin
- Loa loa co-endemicity management

**Leishmaniasis:**
- VL elimination on Indian subcontinent progressing
- Sandfly control tools limited
- AmBisome single-dose treatment
- Post-kala-azar dermal leishmaniasis challenge

**Chagas Disease:**
- Focus on congenital/blood-borne transmission
- Housing improvement central to vector control
- Limited drug options; benznidazole, nifurtimox
- Cardiac complications management

**Human African Trypanosomiasis:**
- T.b. gambiense near elimination (<1000 cases/year)
- Fexinidazole oral treatment approved
- Tsetse control contributing
- Veterinary trypanosomiasis impacts food security

**Climate and Environmental Change:**

**Projected Impacts:**
- Aedes expansion into temperate zones
- Highland malaria/filariasis emergence
- Altered seasonality and phenology
- Extreme weather effects on vector populations

**Adaptation Strategies:**
- Enhanced surveillance systems
- Predictive modeling
- Flexible response capacity
- Climate-resilient interventions`,
      keyTerms: [
        { term: 'gene drive', definition: 'Genetic system that spreads through populations faster than normal inheritance', pronunciation: 'jeen driv' },
        { term: 'cytoplasmic incompatibility', definition: 'Wolbachia-induced reproductive incompatibility between infected males and uninfected females' },
        { term: 'xenomonitoring', definition: 'Detecting pathogens by testing vector populations' },
        { term: 'cryptic species', definition: 'Morphologically similar but genetically distinct species' },
      ],
      clinicalNotes: 'Treatment options for vector-borne NTDs are expanding. Test-and-treat strategies becoming important for elimination. Consider travel history and vector exposure for returning travelers. Resistance to standard treatments emerging for some parasites.',
    },
    5: {
      level: 5,
      summary: 'Vector-borne NTD control operates at the interface of ecology, evolution, and intervention, with emerging technologies offering transformative potential alongside governance challenges. Research frontiers include gene drive deployment, climate adaptation, and integration with broader health systems.',
      explanation: `**Theoretical Frameworks:**

**Eco-Epidemiological Perspectives:**

Vector-borne disease systems as complex adaptive systems:
- Non-linear dynamics and tipping points
- Scale-dependent processes
- Feedback loops between human behavior and transmission
- Landscape epidemiology approaches

**Niche Modeling:**
- Species distribution models for vectors
- Climate envelope projections
- Land use change impacts
- Urban-rural gradients

**Evolutionary Dynamics:**

**Resistance Evolution:**
- Selection pressure from insecticides
- Polygenic adaptation
- Gene flow and resistance spread
- Fitness costs and reversibility

**Pathogen Evolution:**
- Drug resistance emergence
- Antigenic variation
- Virulence evolution
- Host switching potential

**Management Implications:**
- Evolutionary-informed resistance management
- Combination strategies
- Refugia maintenance
- Surveillance for early detection

**Gene Drive Technology:**

**Mechanisms:**
1. *Suppression drives*: Reduce vector population
   - Female sterility (doublesex targeting)
   - Sex ratio distortion (X-shredder)

2. *Modification drives*: Alter vector competence
   - Refractory genes
   - Anti-pathogen effectors

**Technical Considerations:**
- Drive efficiency and resistance
- Genetic containment strategies
- Reversal mechanisms
- Modeling population dynamics

**Governance Challenges:**
- Transboundary implications
- Community engagement and consent
- Regulatory frameworks
- Risk assessment methodologies
- Phase 3 stakeholder engagement (Target Malaria)

**One Health Integration:**

**Zoonotic Reservoirs:**
- Leishmaniasis: canine reservoir control
- Chagas: sylvatic cycle maintenance
- Sleeping sickness: animal reservoirs

**Environmental Determinants:**
- Deforestation and vector habitat
- Dam construction and schistosomiasis
- Agricultural practices
- Urbanization patterns

**Research Frontiers:**

**Novel Intervention Approaches:**
| Approach | Mechanism | Status |
|----------|-----------|--------|
| Attractive targeted sugar baits | Oral insecticide delivery | Phase III |
| Endectocides | Systemic insecticide via treated livestock | Research |
| Paratransgenesis | Modified symbiotic bacteria | Development |
| RNAi pesticides | Gene silencing | Early development |

**Surveillance Innovations:**
- Environmental DNA (eDNA)
- Citizen science platforms
- Remote sensing integration
- Mobile phone-based reporting

**Systems Integration:**

**Health System Strengthening:**
- NTD programs as platform for UHC
- Integration with PHC
- Community health worker roles
- Surveillance system building

**Cross-Program Integration:**
- Malaria-NTD synergies
- Integrated community case management
- Combined vector control
- Shared logistics and supply chains

**Political Economy:**

**Financing:**
- Domestic resource mobilization
- Global Fund expansion to NTDs
- Private sector engagement
- Impact investment

**Governance:**
- WHO normative role
- Regional networks
- Country ownership
- Civil society engagement

**Decolonizing Vector Control:**
- Local research leadership
- Indigenous knowledge integration
- Community-driven priorities
- Equitable partnerships

**Future Scenarios:**

**Optimistic:**
- LF, onchocerciasis elimination achieved
- Gene drive successfully deployed
- Climate adaptation effective
- NTDs integrated into resilient health systems

**Challenging:**
- Resistance undermines tools
- Climate change expands burden
- Financing insufficient
- Conflict disrupts programs

**Transformative:**
- mRNA vaccines for NTDs
- Universal vector control
- Addressing structural determinants
- Health equity achieved`,
      keyTerms: [
        { term: 'landscape epidemiology', definition: 'Study of how spatial patterns in environment affect disease distribution' },
        { term: 'paratransgenesis', definition: 'Genetic modification of vector symbiotic organisms to block pathogen transmission' },
        { term: 'endectocide', definition: 'Drug toxic to both internal parasites and blood-feeding vectors' },
        { term: 'attractive targeted sugar bait', definition: 'Vector control method using toxic sugar solutions attractive to mosquitoes' },
      ],
      clinicalNotes: 'Stay current on elimination status and changing epidemiology. Consider novel transmission routes (e.g., congenital Chagas, transfusion). Engage with surveillance reporting. Advocate for sustained funding and research for neglected populations.',
    },
  },

  media: [
    {
      id: 'vector-transmission-cycles',
      type: 'diagram',
      filename: 'vector-transmission-cycles.svg',
      title: 'Transmission Cycles of Vector-Borne NTDs',
      description: 'Diagrams showing pathogen development in vectors and transmission to humans',
    },
    {
      id: 'vector-control-methods',
      type: 'diagram',
      filename: 'vector-control-methods.svg',
      title: 'Integrated Vector Control Methods',
      description: 'Overview of chemical, biological, and environmental vector control approaches',
    },
  ],

  citations: [
    {
      id: 'who-vector-control',
      type: 'website',
      title: 'Global Vector Control Response 2017-2030',
      source: 'World Health Organization',
      url: 'https://www.who.int/publications/i/item/9789241512978',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'wilson-vector-biology',
      type: 'article',
      title: 'Vector-borne diseases and climate change',
      source: 'Nature Reviews Microbiology',
      license: 'Subscription',
    },
  ],

  crossReferences: [
    { targetId: 'ntd-overview', targetType: 'topic', relationship: 'parent', label: 'NTD Overview' },
    { targetId: 'parasitic-ntds', targetType: 'topic', relationship: 'sibling', label: 'Parasitic NTDs' },
    { targetId: 'malaria-global', targetType: 'topic', relationship: 'related', label: 'Malaria' },
    { targetId: 'environment-and-health', targetType: 'topic', relationship: 'related', label: 'Environment and Health' },
  ],

  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'infectious-diseases', 'vector-control'],
    keywords: ['vectors', 'mosquitoes', 'flies', 'transmission', 'vector control'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
