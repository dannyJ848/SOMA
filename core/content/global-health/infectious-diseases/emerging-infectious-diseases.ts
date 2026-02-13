/**
 * Emerging Infectious Diseases - Global Health Perspective
 *
 * Comprehensive content on emerging and re-emerging infectious diseases,
 * including pandemic preparedness, zoonotic diseases, and outbreak response.
 */

import { EducationalContent } from '../../types';

export const EMERGING_INFECTIOUS_DISEASES: EducationalContent = {
  id: 'emerging-infectious-diseases',
  type: 'concept',
  name: 'Emerging Infectious Diseases',
  alternateNames: ['EIDs', 'Novel Pathogens', 'Pandemic Threats', 'Re-emerging Diseases'],

  levels: {
    1: {
      level: 1,
      summary: 'Emerging diseases are new illnesses that have recently started affecting people, or old diseases that are spreading to new places. COVID-19 is a recent example.',
      explanation: `Sometimes new germs appear that can make people sick, or old germs spread to new places where they haven't been before.

**What Are Emerging Diseases?**
Emerging diseases are:
- Brand new diseases we've never seen before (like COVID-19)
- Old diseases that come back or spread to new places
- Diseases that become harder to treat

**Where Do New Diseases Come From?**
Most new diseases come from animals! This happens when:
- People come into contact with wild animals
- Forests are cut down and people move into animal areas
- Animals are raised close together on farms
- Germs change (mutate) and learn to infect humans

**Examples of Emerging Diseases:**
- **COVID-19**: Started in 2019 and spread around the world
- **Ebola**: A very serious disease from Africa
- **Zika**: Spread by mosquitoes, caused problems for pregnant women
- **Bird flu**: Flu viruses that spread from birds to people
- **SARS**: A virus similar to COVID-19 that appeared in 2003

**Why Do Emerging Diseases Matter?**
- They can spread quickly around the world
- We might not have medicines or vaccines ready
- They can make many people sick at once
- We need to work together globally to stop them

**What Can We Do?**
- Scientists watch for new diseases (surveillance)
- Doctors share information when they find something new
- Countries work together to prepare
- Everyone can practice good hygiene (hand washing, covering coughs)

**What You Can Do:**
- Wash your hands often
- Stay home when you're sick
- Keep up with your vaccines
- Listen to health officials during outbreaks`,
      keyTerms: [
        { term: 'emerging disease', definition: 'A new disease or one that is spreading to new places' },
        { term: 'outbreak', definition: 'When many people get the same disease in an area at the same time' },
        { term: 'pandemic', definition: 'When a disease spreads to many countries around the world' },
      ],
      analogies: [
        'Emerging diseases are like uninvited guests - they show up unexpectedly and we have to quickly figure out how to deal with them.',
        'Disease surveillance is like having weather watchers around the world who alert everyone when a storm is coming.',
      ],
      examples: [
        'When COVID-19 first appeared, scientists around the world worked together to understand it and make vaccines.',
        'The Ebola outbreak in West Africa showed how important it is for countries to work together during emergencies.',
      ],
    },
    2: {
      level: 2,
      summary: 'Emerging infectious diseases arise from ecological, biological, and social changes. Most are zoonotic in origin. Pandemic preparedness requires surveillance, rapid response capabilities, and international cooperation.',
      explanation: `Emerging infectious diseases (EIDs) represent a persistent threat to global health security. These are infections that have newly appeared in a population or are rapidly increasing in incidence or geographic range.

**Categories of EIDs:**
1. **Truly novel pathogens**: First identified in humans (e.g., SARS-CoV-2)
2. **Re-emerging diseases**: Resurgence after decline (e.g., measles outbreaks)
3. **Drug-resistant organisms**: New resistance patterns (e.g., XDR-TB)
4. **Deliberately released agents**: Bioterrorism concerns

**Key Drivers of Emergence:**

*Ecological Factors:*
- Deforestation and land-use change
- Climate change affecting vector distribution
- Agricultural intensification
- Urbanization

*Human Behavior:*
- International travel and trade
- Live animal markets
- Antimicrobial overuse
- Vaccine hesitancy

*Microbial Factors:*
- High mutation rates (especially RNA viruses)
- Genetic reassortment and recombination
- Cross-species adaptation

**Zoonotic Origins:**
- 75% of EIDs are zoonotic (from animals)
- Wildlife reservoirs: bats, rodents, primates
- Domestic animal amplifiers: poultry, pigs
- Spillover events at human-animal interface

**Notable EIDs:**

| Disease | Emergence | Origin | Global Impact |
|---------|-----------|--------|---------------|
| COVID-19 | 2019 | Likely bat coronavirus | Pandemic, millions of deaths |
| Ebola | 1976/2014 | Bat reservoir | Major outbreaks in Africa |
| SARS | 2002 | Bat to civet to human | Near-pandemic, contained |
| MERS | 2012 | Camel reservoir | Ongoing, limited transmission |
| Zika | 2015 (Americas) | Mosquito-borne | Congenital syndrome |
| Mpox | 2022 (global) | Animal reservoir, human-to-human | Multi-country outbreak |

**Pandemic Preparedness:**

*Surveillance:*
- Early warning systems
- Laboratory networks
- Syndromic surveillance
- Genomic sequencing

*Response Capabilities:*
- Rapid diagnostic development
- Medical countermeasures (vaccines, therapeutics)
- Healthcare surge capacity
- Risk communication

*International Cooperation:*
- International Health Regulations (IHR 2005)
- WHO role in coordination
- Information sharing
- Equitable access to countermeasures`,
      keyTerms: [
        { term: 'zoonotic', definition: 'Diseases that can spread from animals to humans', pronunciation: 'zoh-oh-NOT-ik' },
        { term: 'spillover', definition: 'When a pathogen jumps from its animal host to infect humans' },
        { term: 'surveillance', definition: 'Systematic monitoring for disease occurrence and patterns' },
        { term: 'pandemic preparedness', definition: 'Planning and capabilities to respond to large-scale disease outbreaks' },
      ],
      analogies: [
        'Disease surveillance is like a global smoke detector system - catching problems early before they become fires.',
      ],
    },
    3: {
      level: 3,
      summary: 'Emerging infectious diseases result from complex interactions between ecological, evolutionary, and social systems. Prevention requires understanding spillover dynamics, strengthening surveillance networks, and building resilient health systems within a One Health framework.',
      explanation: `**Ecology and Evolution of Emergence:**

*Spillover Dynamics:*
The pathway from animal pathogen to human epidemic involves multiple barriers:
1. **Reservoir to human contact**: Ecological/behavioral factors
2. **Successful infection**: Cellular susceptibility, innate immunity evasion
3. **Human-to-human transmission**: Adaptation for sustained spread

*Viral Determinants:*
| Virus Family | Reservoir | Emergence Risk Factors |
|--------------|-----------|----------------------|
| Coronaviruses | Bats | ACE2 binding, furin cleavage sites |
| Influenza A | Birds, pigs | Reassortment, receptor adaptation |
| Filoviruses | Bats | Unknown triggers for spillover |
| Flaviviruses | Various hosts | Vector competence, host range |
| Paramyxoviruses | Bats | Geographic distribution changes |

*Hotspot Geography:*
- Tropical forests (high biodiversity)
- Southeast Asia (wet markets, agriculture)
- Sub-Saharan Africa (hunting, extractive industries)
- Livestock-wildlife interfaces globally

**One Health Approach:**

Integration of human, animal, and environmental health:
- Joint surveillance across sectors
- Collaborative outbreak investigation
- Addressing drivers at source
- Wildlife health monitoring
- Antimicrobial stewardship across sectors

**Surveillance Systems:**

*Types of Surveillance:*
| Type | Description | Examples |
|------|-------------|----------|
| Indicator-based | Health facility reporting | Notifiable disease systems |
| Event-based | Non-routine information | GPHIN, ProMED, media monitoring |
| Syndromic | Symptom patterns | Emergency department surveillance |
| Genomic | Pathogen sequencing | GISAID, GenBank submissions |
| Seroprevalence | Population antibodies | Blood bank studies |

*Laboratory Networks:*
- WHO reference laboratories
- CDC networks
- IATA shipping protocols
- Biosafety and biosecurity

**Outbreak Response:**

*Emergency Operations:*
- Incident management systems
- Contact tracing
- Infection prevention and control
- Risk communication and community engagement (RCCE)

*Medical Countermeasures:*
- Regulatory pathways for emergency use
- Platform technologies for rapid development
- Stockpiling and distribution
- Clinical trials during outbreaks

**Case Studies:**

*COVID-19 Lessons:*
- Speed of global spread with travel
- Genomic surveillance importance
- mRNA vaccine platform success
- Supply chain vulnerabilities
- Inequitable access issues

*Ebola Response Evolution:*
- 2014-16 West Africa: Delayed response, health system collapse
- 2018-20 DRC: Ring vaccination, community engagement
- Therapeutic development (mAbs, antivirals)

*Mpox 2022:*
- Novel transmission pattern (sexual networks)
- Vaccine deployment (ring vaccination, PrEP-style)
- Health equity concerns in access`,
      keyTerms: [
        { term: 'One Health', definition: 'Approach recognizing the interconnection of human, animal, and environmental health' },
        { term: 'event-based surveillance', definition: 'Capturing information about potential health threats from non-routine sources like media and community reports' },
        { term: 'ring vaccination', definition: 'Strategy of vaccinating contacts and contacts of contacts to contain an outbreak' },
        { term: 'reservoir host', definition: 'Animal species that naturally harbor a pathogen without being significantly harmed' },
      ],
      clinicalNotes: 'Clinical vigilance for EIDs: (1) Travel history essential for all patients with fever or respiratory illness, (2) Consider novel pathogens in atypical presentations or clusters, (3) Know local reporting requirements, (4) Implement appropriate isolation while awaiting diagnosis, (5) Engage public health early.',
    },
    4: {
      level: 4,
      summary: 'The science of emerging infections integrates disease ecology, microbial evolution, epidemiological dynamics, and health systems research. Global health security requires strengthened IHR capacities, sustainable financing, and addressing the upstream determinants of emergence.',
      explanation: `**Predictive Frameworks for Emergence:**

*Risk Assessment Approaches:*
- Ecological niche modeling
- Machine learning for hotspot identification
- Phylogenetic risk assessment
- Mathematical modeling of spillover probability

*Pathogen Characteristics Associated with Pandemic Potential:*
| Feature | Higher Risk | Lower Risk |
|---------|-------------|------------|
| Genome | RNA (high mutation) | DNA (stable) |
| Transmission | Respiratory | Direct contact |
| Infectious period | Presymptomatic | After symptoms |
| Severity | Moderate (not too severe) | Very high CFR |
| Animal reservoir | Wide host range | Narrow host range |

*Virological Risk Assessment:*
- Receptor binding studies
- Transmissibility in animal models (ferrets for influenza)
- Gain-of-function research oversight
- Dual Use Research of Concern (DURC)

**Evolution and Adaptation:**

*Viral Evolution During Epidemics:*
- Founder effects and genetic drift
- Positive selection at key sites
- Convergent evolution across lineages
- Recombination events

*SARS-CoV-2 Evolution Example:*
| Variant | Key Mutations | Impact |
|---------|--------------|--------|
| Alpha | N501Y | Increased transmissibility |
| Delta | L452R, P681R | Further transmission increase |
| Omicron | Extensive spike mutations | Immune evasion, changed tropism |

**Global Health Security Architecture:**

*International Health Regulations (IHR 2005):*
- Legally binding for 196 countries
- Core capacities requirement
- PHEIC (Public Health Emergency of International Concern) mechanism
- Event notification within 24 hours

*IHR Core Capacities:*
1. National legislation and policy
2. Coordination
3. Surveillance
4. Response
5. Preparedness
6. Risk communication
7. Human resources
8. Laboratory
9. Points of entry
10. Zoonotic events
11. Food safety
12. Chemical events
13. Radiation emergencies

*Joint External Evaluations (JEE):*
- Voluntary country assessments
- 19 technical areas
- Benchmarking and gap identification
- National Action Plans for Health Security (NAPHS)

**Financing for Pandemic Preparedness:**

*Current Landscape:*
- Chronic underinvestment in preparedness
- Pandemic Fund established (World Bank, WHO)
- Global Health Security Agenda
- Domestic financing gaps

*Economic Analysis:*
- Preparedness spending: $2-4 billion/year needed globally
- COVID-19 economic impact: $10+ trillion
- Benefit-cost ratio of preparedness: >10:1

**Research Agenda:**

*Priority Pathogens:*
- WHO priority pathogen list
- Coalition for Epidemic Preparedness Innovations (CEPI) targets
- Disease X preparedness

*Platform Technologies:*
- mRNA vaccines
- Viral vector platforms
- Monoclonal antibodies
- Broad-spectrum antivirals

*Surveillance Innovation:*
- Wastewater surveillance
- Metagenomic sequencing
- Artificial intelligence for signal detection
- Citizen science and participatory surveillance`,
      keyTerms: [
        { term: 'PHEIC', definition: 'Public Health Emergency of International Concern - WHO declaration triggering international response obligations', pronunciation: 'FAKE' },
        { term: 'gain-of-function research', definition: 'Research that enhances pathogen transmissibility or pathogenicity, subject to oversight' },
        { term: 'JEE', definition: 'Joint External Evaluation - voluntary assessment of country health security capacities' },
        { term: 'Disease X', definition: 'Placeholder representing unknown pathogen that could cause future epidemic' },
      ],
      clinicalNotes: 'For clinicians engaged in preparedness: (1) Participate in outbreak response training and exercises, (2) Understand local and national reporting pathways, (3) Familiarize with emergency use protocols, (4) Contribute to surveillance through prompt reporting, (5) Engage in research networks for rapid clinical trials.',
    },
    5: {
      level: 5,
      summary: 'Addressing emerging infectious disease threats requires transformative approaches to global health governance, sustainable financing mechanisms, equity-centered preparedness, and integration of ecological, social, and technological interventions within a planetary health framework.',
      explanation: `**Theoretical Frameworks:**

*Disease Ecology:*
- Dilution effect vs. amplification hypothesis
- Biodiversity-disease relationships
- Landscape epidemiology
- Metapopulation dynamics of pathogens

*Evolutionary Epidemiology:*
- Evolutionary trade-offs (virulence-transmission)
- Multi-strain dynamics
- Antigenic evolution and immune escape
- Phylodynamic analysis

*Complex Adaptive Systems:*
- Emergence as system property
- Feedback loops in emergence
- Tipping points and phase transitions
- Resilience theory applications

**Governance Reform:**

*Pandemic Treaty Negotiations:*
Key issues under negotiation:
- Pathogen access and benefit sharing (PABS)
- Equity provisions for countermeasures
- Financing mechanisms
- Compliance and accountability
- One Health obligations

*Alternative Governance Models:*
- Pandemic framework convention
- WHO authority enhancement
- Regional health security mechanisms
- Non-state actor roles

*Political Economy Analysis:*
- Sovereignty vs. global goods tensions
- Pharmaceutical industry incentives
- National security framing implications
- North-South dynamics

**Equity and Justice:**

*Historical Context:*
- Colonial medicine legacies
- Inequitable vaccine access (COVID-19)
- Research ethics in outbreaks
- Technology transfer barriers

*Equity-Centered Preparedness:*
- Manufacturing capacity in LMICs
- Intellectual property flexibilities
- Community engagement frameworks
- Indigenous and local knowledge

**Upstream Interventions:**

*Preventing Spillover:*
- Land-use planning and protected areas
- Wildlife trade regulation and enforcement
- Biosecurity on farms
- Sustainable agriculture transitions

*Planetary Health Lens:*
- Climate-health linkages
- Deforestation-emergence connections
- Food systems transformation
- Urbanization patterns

**Frontiers in Science:**

*Metagenomic Surveillance:*
- Pathogen discovery in wildlife
- Environmental sampling
- Human interface monitoring
- Bioinformatic pipelines

*Synthetic Biology:*
- Rapid vaccine manufacturing
- Point-of-care diagnostics
- Universal vaccine approaches
- Biosecurity implications

*Artificial Intelligence:*
- Early warning signal detection
- Drug discovery
- Vaccine design
- Epidemic forecasting

**Future Scenarios:**

*High-Consequence Pathogens:*
| Threat Category | Examples | Mitigation Approaches |
|-----------------|----------|----------------------|
| Novel pandemic influenza | H5N1, H7N9 | Surveillance, universal flu vaccine |
| Coronavirus | SARS-like, MERS-like | Pan-coronavirus vaccines |
| High-fatality outbreak | Nipah, novel filovirus | Rapid response, containment |
| Antimicrobial resistance | Pan-resistant bacteria | Stewardship, new antibiotics |
| Deliberate release | Bioterrorism | Biosecurity, detection |

*Transformation Agenda:*
1. Shift from response to prevention
2. Sustainable financing (e.g., pandemic insurance, taxation)
3. Regional manufacturing and R&D capacity
4. Community and civil society leadership
5. Integration with climate action and SDGs`,
      keyTerms: [
        { term: 'pathogen access and benefit sharing', definition: 'Mechanisms to ensure countries sharing pathogen samples receive equitable access to resulting vaccines/drugs' },
        { term: 'phylodynamics', definition: 'Integration of phylogenetics with epidemiology to understand pathogen transmission and evolution' },
        { term: 'planetary health', definition: 'Health of human civilization and the natural systems on which it depends' },
        { term: 'pandemic treaty', definition: 'Proposed international legal instrument for pandemic prevention, preparedness, and response' },
      ],
      clinicalNotes: 'For researchers and policy advisors: (1) Interdisciplinary collaboration essential (virology, ecology, social science), (2) Ethical frameworks for outbreak research require ongoing development, (3) Implementation science needed to translate preparedness investments, (4) Engagement with governance processes is part of scientific responsibility.',
    },
  },

  media: [
    {
      id: 'eid-hotspots-map',
      type: 'diagram',
      filename: 'eid-global-hotspots.svg',
      title: 'Global EID Hotspots',
      description: 'Map showing geographic hotspots for emerging disease emergence',
    },
    {
      id: 'spillover-pathway',
      type: 'diagram',
      filename: 'zoonotic-spillover-pathway.svg',
      title: 'Zoonotic Spillover Pathway',
      description: 'Diagram of stages from animal reservoir to human pandemic',
    },
  ],

  citations: [
    {
      id: 'who-eid',
      type: 'website',
      title: 'Disease Outbreaks',
      source: 'World Health Organization',
      url: 'https://www.who.int/emergencies/diseases',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'cdc-eid-journal',
      type: 'article',
      title: 'Emerging Infectious Diseases Journal',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://wwwnc.cdc.gov/eid/',
      license: 'Public domain',
    },
  ],

  crossReferences: [
    { targetId: 'global-health-challenges', targetType: 'topic', relationship: 'parent', label: 'Global Health Challenges' },
    { targetId: 'travel-health-overview', targetType: 'topic', relationship: 'related', label: 'Travel Health' },
    { targetId: 'who-overview', targetType: 'topic', relationship: 'see-also', label: 'WHO Overview' },
  ],

  tags: {
    systems: ['infectious-disease', 'public-health'],
    topics: ['emerging-diseases', 'pandemic-preparedness', 'global-health', 'zoonoses'],
    keywords: ['emerging infections', 'pandemic', 'outbreak', 'surveillance', 'One Health'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
