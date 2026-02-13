/**
 * Parasitic Neglected Tropical Diseases
 *
 * Educational content about parasitic infections classified as NTDs,
 * including soil-transmitted helminths, schistosomiasis, and protozoan diseases.
 */

import { EducationalContent } from '../../types';

export const PARASITIC_NTDS: EducationalContent = {
  id: 'parasitic-ntds',
  type: 'concept',
  name: 'Parasitic Neglected Tropical Diseases',
  alternateNames: ['Parasitic NTDs', 'Helminth Infections', 'Tropical Parasites'],

  levels: {
    1: {
      level: 1,
      summary: 'Parasitic NTDs are diseases caused by tiny worms and other parasites that can live inside your body. They spread through contaminated soil, water, or food and affect over a billion people worldwide.',
      explanation: `Parasites are tiny living things that live inside or on other creatures. Some parasites can make people very sick, especially in tropical areas with unsafe water and poor sanitation.

**Types of Parasites That Cause NTDs:**

**1. Worms (Helminths)**
- **Roundworms**: Can grow very long in your intestines
- **Hookworms**: Enter through your feet and live in your gut
- **Whipworms**: Live in the large intestine
- **Blood flukes**: Live in blood vessels and damage organs

**2. Tiny Single-Celled Parasites (Protozoa)**
- Cause diseases like leishmaniasis and Chagas disease
- Too small to see without a microscope
- Spread by insect bites

**How Do People Get These Parasites?**
- Walking barefoot on contaminated soil
- Drinking dirty water
- Swimming in infected water
- Eating undercooked meat or fish
- Being bitten by infected insects

**What Do These Parasites Do to the Body?**
- Steal nutrients from food, causing weakness
- Damage organs like the liver and intestines
- Cause anemia (not enough healthy blood)
- Slow down children's growth and learning
- Create painful skin sores

**Prevention:**
- Wearing shoes
- Washing hands
- Drinking clean water
- Cooking food thoroughly
- Using bed nets against insects`,
      keyTerms: [
        { term: 'parasite', definition: 'A living thing that lives in or on another creature and causes harm' },
        { term: 'worm infection', definition: 'When parasitic worms live inside the body and cause sickness' },
        { term: 'contaminated', definition: 'Made dirty or unsafe by germs or parasites' },
      ],
      analogies: [
        'Parasites are like unwanted guests that move into your body and eat your food without paying rent.',
        'Getting worms from dirty soil is like accidentally picking up hitchhikers on a muddy road.',
      ],
      examples: [
        'A child walking barefoot might pick up hookworm larvae that burrow through the skin',
        'Swimming in a river with infected snails can lead to schistosomiasis',
      ],
    },
    2: {
      level: 2,
      summary: 'Parasitic NTDs include helminth infections (worms) and protozoan diseases affecting billions globally. Major parasites include soil-transmitted helminths, schistosomes, and Leishmania species, causing chronic illness, disability, and impaired development.',
      explanation: `Parasitic NTDs represent the largest burden among neglected tropical diseases, with over 1.5 billion people infected with soil-transmitted helminths alone.

**Major Parasitic NTD Categories:**

**1. Soil-Transmitted Helminths (STH)**
The most common human parasites:
- **Ascaris lumbricoides** (roundworm): 800+ million infected
- **Trichuris trichiura** (whipworm): 500+ million infected
- **Hookworms** (Ancylostoma/Necator): 500+ million infected

*Transmission*: Eggs passed in feces contaminate soil; infection through ingestion or skin penetration (hookworm)

*Effects*: Malnutrition, anemia, impaired cognitive development, intestinal obstruction (Ascaris)

**2. Schistosomiasis (Bilharzia)**
- Affects 200+ million people
- Caused by blood flukes (Schistosoma species)
- Transmitted through freshwater snails
- Damages liver, intestines, bladder
- Second most impactful parasitic disease after malaria

**3. Lymphatic Filariasis (Elephantiasis)**
- 120 million infected
- Caused by thread-like worms
- Transmitted by mosquitoes
- Causes severe swelling of limbs and genitals
- Major cause of disability

**4. Protozoan NTDs**

*Leishmaniasis:*
- Transmitted by sandfly bites
- Cutaneous form: skin ulcers
- Visceral form (kala-azar): affects organs, can be fatal

*Chagas Disease:*
- Transmitted by "kissing bugs"
- Endemic in Latin America
- Causes heart and digestive problems

**Disease Burden:**
| Disease | People Infected | Annual Deaths |
|---------|----------------|---------------|
| STH | 1.5 billion | 12,000 |
| Schistosomiasis | 240 million | 200,000 |
| Leishmaniasis | 12 million | 30,000 |

**Treatment and Prevention:**
- Mass deworming programs in schools
- Improved sanitation eliminates transmission
- Treatment with albendazole, praziquantel
- Vector control for insect-borne parasites`,
      keyTerms: [
        { term: 'helminth', definition: 'Parasitic worm including roundworms, flatworms, and flukes', pronunciation: 'HEL-minth' },
        { term: 'schistosomiasis', definition: 'Disease caused by blood flukes acquired from contaminated freshwater', pronunciation: 'shis-toh-soh-MY-ah-sis' },
        { term: 'protozoan', definition: 'Single-celled parasitic organism', pronunciation: 'proh-toh-ZOH-an' },
        { term: 'deworming', definition: 'Treatment with medication to eliminate parasitic worms' },
      ],
      analogies: [
        'Soil-transmitted helminths work like a cycle - parasites leave through waste, contaminate soil, and enter new hosts through feet or mouths.',
      ],
    },
    3: {
      level: 3,
      summary: 'Parasitic NTDs encompass helminthiases and protozoan infections transmitted through environmental contamination, vectors, or intermediate hosts. They cause chronic morbidity through nutrient depletion, tissue damage, and immune modulation, with control strategies combining chemotherapy, WASH interventions, and vector management.',
      explanation: `Parasitic NTDs represent a diverse group unified by their association with poverty and environmental transmission routes. Understanding parasite life cycles is essential for control strategies.

**Soil-Transmitted Helminthiases (STH):**

**Life Cycles:**
- *Ascaris*: Fecal-oral; larvae undergo hepatopulmonary migration
- *Trichuris*: Fecal-oral; no tissue migration
- *Hookworm*: Percutaneous larval entry; pulmonary migration; intestinal attachment

**Pathophysiology:**
| Parasite | Mechanism | Clinical Effects |
|----------|-----------|------------------|
| Ascaris | Nutrient competition, obstruction | Malnutrition, bowel obstruction |
| Trichuris | Mucosal inflammation | Dysentery, rectal prolapse |
| Hookworm | Blood feeding | Iron-deficiency anemia |

**Intensity Classifications:**
Light, moderate, and heavy infections based on eggs per gram (EPG) of feces
Treatment thresholds: >20% prevalence or >1% heavy intensity

**Schistosomiasis:**

**Species Distribution:**
- *S. haematobium*: Africa, Middle East (urogenital)
- *S. mansoni*: Africa, Americas (intestinal/hepatic)
- *S. japonicum*: Asia (intestinal/hepatic)

**Pathophysiology:**
1. Cercariae penetrate skin during water contact
2. Mature to adult worms in mesenteric/vesical venules
3. Eggs deposited in tissues cause granulomatous inflammation
4. Chronic: fibrosis, portal hypertension, bladder cancer risk

**Lymphatic Filariasis:**

**Causative Agents:**
- *Wuchereria bancrofti* (90% of cases)
- *Brugia malayi* and *B. timori*

**Transmission:**
Mosquito vectors (Culex, Anopheles, Aedes) transmit L3 larvae

**Pathophysiology:**
1. Adult worms in lymphatics
2. Lymphatic damage and dysfunction
3. Progressive lymphedema
4. Secondary bacterial infections accelerate elephantiasis

**Protozoan NTDs:**

**Leishmaniasis:**
- Vector: Phlebotomine sandflies
- Reservoir: Dogs, rodents, humans
- Forms: Cutaneous (localized skin), mucocutaneous, visceral (systemic)
- *L. donovani/infantum*: visceral disease
- *L. tropica/major*: cutaneous disease

**Chagas Disease:**
- Vector: Triatomine bugs (Triatoma, Rhodnius)
- *Trypanosoma cruzi*: Acute phase often asymptomatic
- Chronic: Cardiomyopathy (30%), megaesophagus, megacolon

**Control Strategies:**

**Preventive Chemotherapy:**
- Albendazole/mebendazole for STH
- Praziquantel for schistosomiasis
- Ivermectin + albendazole/DEC for LF

**WASH (Water, Sanitation, Hygiene):**
Essential for sustainable STH/schistosomiasis control

**Vector Control:**
- Indoor residual spraying
- Bed nets
- Environmental management`,
      keyTerms: [
        { term: 'cercariae', definition: 'Free-swimming larval stage of schistosomes that penetrates human skin', pronunciation: 'ser-CARE-ee-ee' },
        { term: 'microfilariae', definition: 'Larval stage of filarial worms circulating in blood', pronunciation: 'my-kroh-fil-AIR-ee-ee' },
        { term: 'granulomatous inflammation', definition: 'Immune reaction forming nodular aggregates of immune cells around foreign material' },
        { term: 'eggs per gram (EPG)', definition: 'Standard measure of helminth infection intensity in fecal samples' },
      ],
      clinicalNotes: 'Stool microscopy remains standard for STH diagnosis; concentration techniques improve sensitivity. Eosinophilia suggests tissue-invasive helminths. Consider schistosomiasis in travelers with freshwater exposure and urinary symptoms or eosinophilia.',
    },
    4: {
      level: 4,
      summary: 'Parasitic NTDs demonstrate complex host-parasite interactions involving immunomodulation, co-evolutionary adaptations, and polyparasitism. Control programs must address transmission dynamics, drug resistance potential, and integration with health systems while targeting elimination thresholds.',
      explanation: `**Immunobiology of Parasitic NTDs:**

**Helminth Immunomodulation:**
Chronic helminth infections induce regulatory immune responses:
- Th2 polarization (IL-4, IL-5, IL-13)
- Regulatory T cells and IL-10 production
- Modified Th2 responses in chronic infection
- Eosinophilia as hallmark response

**Clinical Implications:**
- Reduced allergic and autoimmune disease (hygiene hypothesis)
- Impaired vaccine responses
- Modified susceptibility to other infections
- Potential therapeutic applications

**Polyparasitism:**

Common in endemic areas:
- STH species co-infection typical
- Malaria-helminth interactions
- Impacts on HIV/TB disease progression
- Implications for treatment sequencing

**Transmission Dynamics:**

**Mathematical Modeling:**
- Aggregated distribution (negative binomial)
- Basic reproduction number (R0) estimation
- Breakpoints for transmission interruption
- Optimal MDA frequency/coverage modeling

**Elimination Thresholds:**
| NTD | Elimination Target |
|-----|-------------------|
| LF | <1% microfilaremia or antigenemia |
| Onchocerciasis | <1% microfilaridermia |
| Schistosomiasis | <1% heavy intensity infections |
| STH | <2% moderate/heavy prevalence |

**Advanced Diagnostics:**

**Molecular Methods:**
- PCR for species identification
- qPCR for intensity estimation
- LAMP for field-deployable testing

**Immunodiagnostics:**
- Filarial antigen tests (ICT, FTS)
- Schistosome CAA/CCA detection
- Serological markers of exposure/cure

**Imaging:**
- Ultrasound for hepatosplenic schistosomiasis
- Lymphoscintigraphy for filariasis

**Pharmacology:**

**Anthelmintics:**
| Drug | Mechanism | Spectrum |
|------|-----------|----------|
| Albendazole | Beta-tubulin binding | Broad-spectrum |
| Mebendazole | Beta-tubulin binding | Broad-spectrum |
| Ivermectin | GluCl agonist | Nematodes, ectoparasites |
| Praziquantel | Ca2+ homeostasis disruption | Trematodes, cestodes |
| DEC | Multiple (microfilaricidal) | Filariae |

**Resistance Concerns:**
- Benzimidazole resistance documented in veterinary medicine
- Single nucleotide polymorphisms in beta-tubulin
- Monitoring programs needed in human populations
- Limited alternative drug pipeline

**Disease-Specific Complexities:**

**Schistosomiasis:**
- Praziquantel ineffective against juvenile worms
- Reinfection common without environmental change
- Female genital schistosomiasis underrecognized
- Schistosoma-salmonella associations

**Lymphatic Filariasis:**
- Loa loa co-endemicity complicates treatment (severe adverse events)
- Importance of morbidity management and disability prevention
- Wolbachia endosymbiont as drug target (doxycycline)

**Leishmaniasis:**
- Drug toxicity (amphotericin, antimonials)
- Emerging resistance to first-line agents
- Host genetics influence disease presentation
- Co-infection with HIV dramatically alters prognosis

**Chagas Disease:**
- Limited efficacy of available drugs (benznidazole, nifurtimox)
- Cardiac complications require long-term management
- Blood supply screening essential
- Congenital transmission important`,
      keyTerms: [
        { term: 'immunomodulation', definition: 'Modification of immune responses by pathogens to facilitate survival', pronunciation: 'im-yoo-noh-mod-yoo-LAY-shun' },
        { term: 'Wolbachia', definition: 'Bacterial endosymbiont of filarial worms, potential drug target', pronunciation: 'wol-BOCK-ee-ah' },
        { term: 'breakpoint', definition: 'Transmission threshold below which parasite population cannot sustain itself' },
        { term: 'CAA/CCA', definition: 'Circulating anodic/cathodic antigen - schistosome biomarkers' },
      ],
      clinicalNotes: 'In filariasis-endemic areas, pre-treatment Loa loa assessment essential before ivermectin. Serological tests may remain positive post-treatment; correlate with clinical response. Consider empiric treatment for strongyloidiasis before immunosuppression in patients from endemic areas.',
    },
    5: {
      level: 5,
      summary: 'Parasitic NTDs exemplify co-evolutionary host-parasite relationships shaped by millions of years of selection, with implications for immunology, evolutionary medicine, and elimination program design. Contemporary challenges include resistance emergence, diagnostic limitations in low-transmission settings, and integration of control with health systems strengthening.',
      explanation: `**Evolutionary Perspectives:**

**Co-evolution and Adaptation:**
- Helminths have evolved sophisticated immune evasion mechanisms
- Surface glycan mimicry
- Protease secretion for tissue penetration
- Excretory-secretory products modulating host immunity
- Red Queen dynamics in host-parasite evolution

**Implications for Control:**
- Parasite life history traits affect intervention efficacy
- Trade-offs between virulence and transmission
- Potential for evolutionary rescue under drug pressure
- Genetic diversity and population structure

**Systems Epidemiology:**

**Integrated Transmission Models:**
- Agent-based models incorporating heterogeneity
- Network models for focal transmission
- Climate and environmental covariates
- Human mobility and migration patterns

**Surveillance in Elimination Phase:**
- Challenges detecting residual infection
- Molecular xenomonitoring
- Serological markers of recent transmission
- Post-MDA surveillance strategies

**Drug Development Pipeline:**

**Current Candidates:**
| Compound | Target NTD | Development Stage |
|----------|-----------|-------------------|
| Moxidectin | Onchocerciasis | Approved |
| Emodepside | Onchocerciasis, LF | Phase II/III |
| Oxfendazole | STH | Phase I |
| SCYX-7158 | HAT | Approved (fexinidazole) |
| Miltefosine | Leishmaniasis | Approved |

**Approaches:**
- Repurposing veterinary anthelmintics
- Combination therapies
- Macrofilaricides development
- Anti-Wolbachia strategies

**Vaccine Development:**

**Challenges:**
- Complex parasite life cycles
- Immune evasion mechanisms
- Limited natural protective immunity
- Animal model limitations

**Promising Candidates:**
- Sm-p80 (schistosomiasis) - Phase I trials
- Na-GST-1, Na-APR-1 (hookworm)
- Leish-F3 + GLA-SE (leishmaniasis)
- Controlled human infection models advancing field

**Implementation Science:**

**Research Questions:**
- Optimal MDA stopping rules
- Post-elimination surveillance duration
- Integration with primary health care
- Community engagement and sustainability

**Decolonizing NTD Research:**
- North-South research partnerships
- Local capacity building
- Community-led interventions
- Addressing structural determinants

**One Health and Zoonotic NTDs:**

**Reservoir Hosts:**
- Echinococcosis: Dogs and livestock
- Taeniasis/cysticercosis: Pigs
- Fascioliasis: Sheep, cattle

**Integrated Control:**
- Veterinary-public health collaboration
- Food safety interventions
- Environmental modification
- Economic incentives for livestock treatment

**Climate Change Impacts:**

**Projected Effects:**
- Altered vector distributions
- Extended transmission seasons
- Changing intermediate host ecology
- Water scarcity affecting WASH interventions

**Adaptation Needs:**
- Dynamic risk mapping
- Flexible program planning
- Early warning systems
- Resilient health systems

**Research Frontiers:**

**-Omics Approaches:**
- Parasite genomics for drug targets
- Host transcriptomics for biomarker discovery
- Metabolomics of infection states
- Microbiome interactions

**Novel Interventions:**
- Gene drive for vector control
- RNAi-based therapeutics
- Targeted drug delivery
- Immunotherapy approaches

**Global Health Governance:**
- WHO roadmap implementation
- Country ownership and domestic financing
- Pharmaceutical donation sustainability
- Integration with UHC agenda`,
      keyTerms: [
        { term: 'excretory-secretory products', definition: 'Molecules released by parasites that modulate host immunity and facilitate infection' },
        { term: 'gene drive', definition: 'Genetic engineering approach to spread traits through wild populations' },
        { term: 'evolutionary rescue', definition: 'Survival of population through adaptive evolution in response to environmental threat' },
        { term: 'xenomonitoring', definition: 'Surveillance using vectors or intermediate hosts to detect pathogen circulation' },
      ],
      clinicalNotes: 'Emerging resistance requires vigilance; report treatment failures. Consider therapeutic drug monitoring in complex cases. Multidisciplinary care important for chronic sequelae (e.g., hydrocele surgery, leishmaniasis reconstructive surgery). Engage with research opportunities including clinical trials.',
    },
  },

  media: [
    {
      id: 'helminth-life-cycles',
      type: 'diagram',
      filename: 'helminth-life-cycles.svg',
      title: 'Life Cycles of Major Helminth NTDs',
      description: 'Comparative diagram showing transmission routes and life stages',
    },
    {
      id: 'sth-global-distribution',
      type: 'diagram',
      filename: 'sth-prevalence-map.svg',
      title: 'Global Distribution of Soil-Transmitted Helminths',
      description: 'World map showing STH endemic regions and prevalence',
    },
  ],

  citations: [
    {
      id: 'who-sth-guidelines',
      type: 'website',
      title: 'Guideline: Preventive chemotherapy to control soil-transmitted helminth infections',
      source: 'World Health Organization',
      url: 'https://www.who.int/publications/i/item/9789241550116',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'hotez-parasitic-ntds',
      type: 'article',
      title: 'Helminth Infections: The Great Neglected Tropical Diseases',
      authors: ['Hotez PJ', 'Brindley PJ', 'Bethony JM'],
      source: 'Journal of Clinical Investigation',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'ntd-overview', targetType: 'topic', relationship: 'parent', label: 'NTD Overview' },
    { targetId: 'vector-borne-ntds', targetType: 'topic', relationship: 'sibling', label: 'Vector-Borne NTDs' },
    { targetId: 'malaria-global', targetType: 'topic', relationship: 'related', label: 'Malaria' },
  ],

  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'infectious-diseases', 'parasitology'],
    keywords: ['helminths', 'parasites', 'soil-transmitted', 'schistosomiasis', 'filariasis'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
