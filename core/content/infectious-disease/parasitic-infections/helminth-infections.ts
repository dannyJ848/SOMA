import { EducationalContent } from '../../types';

export const HELMINTH_INFECTIONS: EducationalContent = {
  id: 'infectious-disease-helminth-infections',
  type: 'topic',
  name: 'Helminth Infections',
  nameEs: 'Infecciones por Helmintos',
  alternateNames: ['Worm Infections', 'Parasitic Worms', 'Soil-Transmitted Helminths', 'Neglected Tropical Diseases'],
  levels: {
    1: {
      level: 1,
      summary: 'Helminths are parasitic worms that can live inside the human body, causing a range of illnesses; they affect over a billion people worldwide, mostly in tropical areas with poor sanitation, and are treated with deworming medicines.',
      explanation: `Helminths are parasitic worms that can infect humans in different ways - through contaminated soil, undercooked meat or fish, insect bites, or contact with contaminated water.

**Types of Parasitic Worms:**
- **Roundworms** (Nematodes): Long, round worms
  - Intestinal roundworm (Ascaris): Most common worm infection; can grow up to 12 inches
  - Hookworm: Enter through bare feet; cause anemia
  - Pinworm: Very common in children; cause itching around the bottom at night
  - Whipworm: Live in the large intestine

- **Tapeworms** (Cestodes): Flat, ribbon-like worms
  - From undercooked pork or beef
  - Can grow very long inside your intestines

- **Flukes** (Trematodes): Flat, leaf-shaped worms
  - Schistosomiasis: Spread by freshwater snails; affects liver and bladder
  - Liver flukes: From eating raw freshwater fish

**How They Spread:**
- Walking barefoot on contaminated soil (hookworm)
- Eating undercooked or raw meat/fish
- Drinking contaminated water
- Insect bites (some roundworms)

**Symptoms:**
- Stomach pain, diarrhea, bloating
- Itching (pinworm, hookworm)
- Anemia and fatigue (hookworm)
- Weight loss despite eating
- Some worms cause no symptoms at all

**Treatment and Prevention:**
- Deworming medicines (albendazole, mebendazole, praziquantel)
- Wash hands before eating
- Wear shoes in areas where worms are common
- Cook meat and fish thoroughly
- Clean water and proper sanitation`,
      keyTerms: [
        { term: 'Helminth', definition: 'A parasitic worm that can live inside the human body' },
        { term: 'Deworming', definition: 'Taking medicine to kill and remove parasitic worms from the body' },
        { term: 'Anemia', definition: 'Not having enough red blood cells, which makes you tired and weak; hookworms can cause this' },
        { term: 'Sanitation', definition: 'Systems for keeping areas clean, including proper toilets and clean water' },
      ],
      patientCounselingPoints: [
        'Deworming medicines are safe and effective - take them as prescribed.',
        'Wear shoes outdoors, especially in tropical areas.',
        'Wash fruits and vegetables thoroughly and cook meat and fish completely.',
        'Good handwashing prevents many worm infections.',
      ],
    },
    2: {
      level: 2,
      summary: 'Helminths are classified into nematodes (roundworms), cestodes (tapeworms), and trematodes (flukes); soil-transmitted helminths (Ascaris, hookworm, Trichuris) affect 1.5 billion people globally; diagnosis relies on stool ova and parasite examination; treatment uses benzimidazoles or praziquantel.',
      explanation: `Helminth infections are among the most prevalent infections globally, classified as neglected tropical diseases (NTDs) by the WHO. Over 1.5 billion people are infected with soil-transmitted helminths alone.

**Classification and Key Organisms:**

*Nematodes (Roundworms):*

| Organism | Common Name | Transmission | Key Feature |
|----------|-------------|-------------|-------------|
| Ascaris lumbricoides | Giant roundworm | Fecal-oral (eggs) | Loeffler syndrome (pulmonary migration); intestinal obstruction |
| Necator americanus / Ancylostoma duodenale | Hookworm | Skin penetration (larvae in soil) | Iron-deficiency anemia; ground itch |
| Trichuris trichiura | Whipworm | Fecal-oral (eggs) | Rectal prolapse in heavy infection |
| Enterobius vermicularis | Pinworm | Fecal-oral (eggs) | Perianal itching; Scotch tape test for diagnosis |
| Strongyloides stercoralis | Threadworm | Skin penetration | Hyperinfection in immunosuppressed; autoinfection cycle |
| Wuchereria bancrofti | Filarial worm | Mosquito bite | Lymphatic filariasis (elephantiasis) |
| Onchocerca volvulus | River blindness worm | Blackfly bite | Onchocerciasis (river blindness); ivermectin treatment |

*Cestodes (Tapeworms):*

| Organism | Source | Key Feature |
|----------|--------|-------------|
| Taenia solium | Undercooked pork | Intestinal tapeworm; cysticercosis (larvae in tissues) -> neurocysticercosis (brain) |
| Taenia saginata | Undercooked beef | Intestinal tapeworm; no cysticercosis |
| Diphyllobothrium latum | Raw freshwater fish | Fish tapeworm; vitamin B12 deficiency (megaloblastic anemia) |
| Echinococcus granulosus | Dog feces (sheep cycle) | Hydatid cysts in liver/lung |

*Trematodes (Flukes):*

| Organism | Transmission | Key Feature |
|----------|-------------|-------------|
| Schistosoma mansoni | Freshwater snails (cercariae penetrate skin) | Hepatosplenic disease; portal hypertension |
| Schistosoma haematobium | Freshwater snails | Bladder disease; hematuria; bladder cancer (squamous cell) |
| Schistosoma japonicum | Freshwater snails | Most eggs; hepatosplenic disease (East Asia) |
| Clonorchis/Opisthorchis | Raw freshwater fish | Liver flukes; cholangiocarcinoma |
| Fasciola hepatica | Watercress/aquatic plants | Liver fluke; hepatic phase then biliary phase |

**Diagnosis:**
- Stool O&P (ova and parasites): Direct smear and concentration techniques
- Scotch tape test: Pinworm (Enterobius) eggs collected from perianal area (early morning)
- Serology: Strongyloides, Schistosoma, Echinococcus, Cysticercosis
- Eosinophilia: Common clue (tissue-invasive helminths); not present with purely intraluminal worms
- Imaging: CT/MRI for neurocysticercosis (cystic lesions with scolex); ultrasound for hydatid cysts

**Treatment:**

| Drug | Target Organisms |
|------|-----------------|
| Albendazole / Mebendazole | Soil-transmitted helminths (Ascaris, hookworm, whipworm, pinworm) |
| Ivermectin | Strongyloides, Onchocerca, lymphatic filariasis |
| Praziquantel | All flukes (Schistosoma, Clonorchis) and tapeworms (Taenia, Diphyllobothrium) |
| Albendazole + praziquantel | Neurocysticercosis (with corticosteroids) |
| Albendazole or surgical | Echinococcus hydatid cysts |
| DEC (diethylcarbamazine) | Lymphatic filariasis (Wuchereria) |

**Global Health Impact:**
- WHO Mass Drug Administration (MDA): School-based deworming programs with albendazole/mebendazole
- London Declaration on NTDs (2012): Commitment to control/eliminate 10 NTDs including helminth infections
- Sustainable Development Goals: WASH (water, sanitation, hygiene) infrastructure is key to long-term control`,
      keyTerms: [
        { term: 'Soil-transmitted helminth', definition: 'Parasitic worms (Ascaris, hookworm, Trichuris) transmitted through contact with contaminated soil; affect 1.5 billion people' },
        { term: 'Eosinophilia', definition: 'Elevated eosinophils in blood; a key laboratory clue for tissue-invasive helminth infections' },
        { term: 'Neurocysticercosis', definition: 'Brain infection caused by T. solium larvae (cysticerci); the most common cause of acquired epilepsy in endemic areas' },
        { term: 'Schistosomiasis', definition: 'A fluke infection acquired from freshwater snails causing hepatosplenic or genitourinary disease; affects 240 million people' },
        { term: 'Mass drug administration', definition: 'The strategy of treating entire at-risk populations (often school children) with deworming medications to reduce helminth burden' },
        { term: 'Praziquantel', definition: 'An anthelmintic drug effective against all flukes and tapeworms; mechanism involves calcium influx and muscle paralysis in worms' },
      ],
      examples: [
        'A child from rural Honduras with abdominal pain and eosinophilia passes a large roundworm (Ascaris) in stool.',
        'A patient from Egypt with chronic hematuria and bladder wall calcifications on imaging is diagnosed with S. haematobium.',
      ],
      patientCounselingPoints: [
        'Deworming medicines are very safe and effective; mass drug administration programs are proven public health interventions.',
        'Neurocysticercosis is treated with both anti-parasitic drugs and corticosteroids to control inflammation.',
        'Avoid swimming in freshwater lakes and rivers in Schistosoma-endemic areas.',
      ],
    },
    3: {
      level: 3,
      summary: 'Helminth immunobiology involves Th2-skewed responses (IL-4, IL-5, IL-13, IgE, eosinophilia), regulatory T cells, and immune modulation that protects both parasite and host; diagnosis integrates microscopy, serology, molecular methods, and eosinophil counts; treatment requires understanding of drug-parasite interactions and inflammatory complications.',
      explanation: `Understanding helminth immunology, life cycle biology, and treatment nuances is essential for managing these complex infections.

**Helminth Immunology:**

*Type 2 Immune Response:*
- Helminths induce a characteristic Th2 response: IL-4, IL-5, IL-13
- IL-5: Eosinophil activation and recruitment (hallmark of tissue-invasive helminths)
- IL-4/IL-13: IgE class switching; goblet cell hyperplasia; smooth muscle contraction (worm expulsion)
- IgE: Binds mast cells and eosinophils; mediates ADCC (antibody-dependent cellular cytotoxicity) against helminths
- Eosinophils: Degranulate releasing major basic protein (MBP) and eosinophil cationic protein (ECP); damage worm tegument

*Regulatory/Modulatory Responses:*
- Helminths induce Tregs and IL-10/TGF-beta to suppress inflammation
- Benefits parasite: Allows chronic infection and survival for years
- Benefits host: Prevents excessive tissue damage from sustained Th2 activation
- "Modified Th2" in chronic infection: Reduced Th2 effector function with regulatory component
- Hygiene hypothesis connection: Reduced helminth exposure associated with increased autoimmunity and allergy in developed countries

*Immune Evasion Mechanisms:*
- Tegument shedding (Schistosoma): Surface renewal to escape antibody binding
- Host molecule mimicry: Schistosoma incorporates host MHC antigens on tegument
- Protease secretion: Degradation of antibodies and complement
- Cystatins and serpins: Parasite-derived protease inhibitors that modulate host immune responses
- Regulatory cell induction: Helminth excretory-secretory products directly expand Tregs

**Key Life Cycles for Clinical Relevance:**

*Strongyloides Hyperinfection:*
- Unique autoinfection cycle: Rhabditiform larvae mature to filariform larvae within intestine; penetrate intestinal wall or perianal skin
- Allows indefinite persistence without reexposure
- Hyperinfection in immunosuppression (especially corticosteroids, HTLV-1 co-infection):
  - Massive larval burden; dissemination to lungs, liver, brain, skin
  - Gram-negative sepsis and meningitis (larvae carry enteric bacteria through intestinal wall)
  - Mortality >70% if not recognized
- Screening: Strongyloides serology BEFORE immunosuppressive therapy in anyone from endemic area

*Schistosoma Egg Deposition:*
- Adult worms in mesenteric (S. mansoni, S. japonicum) or vesical (S. haematobium) venous plexus
- Eggs: 50% reach intestinal/bladder lumen (excreted); 50% trapped in tissues
- Trapped eggs -> granulomatous inflammation -> fibrosis
- S. mansoni: Periportal (Symmers pipestem) fibrosis -> portal hypertension, esophageal varices, splenomegaly
- S. haematobium: Bladder granulomas -> fibrosis, calcification -> squamous cell carcinoma
- Katayama fever: Acute schistosomiasis (serum sickness-like) in non-immune travelers; eosinophilia, fever, urticaria

*Neurocysticercosis:*
- T. solium cysticerci lodge in brain parenchyma, ventricles, subarachnoid space
- Viable cysts: Usually asymptomatic; evade immune recognition
- Degenerating cysts: Inflammatory response causes seizures, edema, hydrocephalus
- Treatment: Albendazole + praziquantel + corticosteroids (dexamethasone) + anti-epileptics
- Contraindication: Do NOT treat if numerous cysts or ventricular involvement without neurosurgical support (risk of catastrophic inflammation)

**Drug Mechanisms:**
- Albendazole/Mebendazole: Bind beta-tubulin; inhibit microtubule polymerization; impair glucose uptake
- Praziquantel: Increases calcium permeability of worm tegument; causes muscle contraction and paralysis; exposes surface antigens to immune attack
- Ivermectin: Binds glutamate-gated chloride channels; paralyzes nematodes; also modulates host immune response
- DEC: Multiple mechanisms; enhances eosinophil-mediated killing; immobilizes microfilariae`,
      keyTerms: [
        { term: 'Strongyloides hyperinfection', definition: 'Massive amplification of Strongyloides larvae due to autoinfection in immunosuppressed patients, causing disseminated disease with high mortality' },
        { term: 'Granulomatous inflammation', definition: 'The host immune response to trapped Schistosoma eggs involving organized clusters of macrophages and T cells that cause progressive fibrosis' },
        { term: 'Modified Th2 response', definition: 'A chronic helminth-induced immune state with dampened Th2 effector function and enhanced regulatory responses, allowing parasite persistence with minimal host damage' },
        { term: 'Autoinfection cycle', definition: 'The unique ability of Strongyloides larvae to mature and re-infect the host without leaving the body, enabling indefinite persistence' },
        { term: 'Katayama fever', definition: 'Acute schistosomiasis syndrome occurring 4-8 weeks after exposure in non-immune individuals; a hypersensitivity reaction to migrating schistosomula' },
      ],
      clinicalNotes: 'Strongyloides screening is mandatory before immunosuppression in patients from endemic areas - hyperinfection carries >70% mortality. Neurocysticercosis treatment must be individualized: corticosteroids before/with antiparasitic therapy to prevent inflammatory complications. Schistosomiasis praziquantel is most effective against adult worms; may need repeat dosing. The hygiene hypothesis connecting helminth loss to increased autoimmune disease is actively being investigated for therapeutic applications.',
    },
    4: {
      level: 4,
      summary: 'Advanced helminthology encompasses the molecular basis of benzimidazole resistance (beta-tubulin mutations), helminth-derived immunomodulatory therapy for autoimmune diseases, the neglected tropical disease elimination roadmap, and the integration of genomics and diagnostics for helminth control programs.',
      explanation: `Graduate-level knowledge integrates molecular resistance, translational immunology, and global elimination strategy.

**Anthelmintic Resistance:**
- Benzimidazole resistance: Well-established in veterinary helminths; emerging concern in human STH
  - Beta-tubulin codon 200 (F200Y), 167, 198 mutations: Reduce drug binding
  - STH: Single nucleotide polymorphisms at codon 200 detected in human hookworm and Trichuris isolates from MDA programs
  - Monitoring: Egg reduction rate (ERR) <95% indicates reduced efficacy
- Ivermectin resistance: Documented in Onchocerca (suboptimal microfilarial clearance); polymorphisms in P-glycoprotein and beta-tubulin genes
- No new anthelmintic classes for human use in >30 years; veterinary drugs (emodepside, monepantel) being investigated
- Implications: MDA programs may face declining efficacy; need surveillance infrastructure

**Helminth Therapy for Autoimmune Disease:**
- Rationale: Helminths suppress Th1/Th17 inflammatory responses and promote Treg/IL-10; may benefit autoimmune conditions
- Clinical trials conducted:
  - Trichuris suis ova (TSO): Pig whipworm (self-limited human infection); tested in Crohn's disease, ulcerative colitis, multiple sclerosis, allergic rhinitis
  - Results: Phase 2 trials showed mixed results; some positive trends in IBD but confirmatory trials negative
  - Necator americanus: Controlled hookworm infection in celiac disease, Crohn's disease, MS; small trials showed immunomodulatory effects
- Helminth-derived molecules:
  - ES-62 (Acanthocheilonema): Anti-inflammatory; therapeutic in arthritis models
  - Heligmosomoides-derived HES: Suppresses allergic airway inflammation
  - Recombinant helminth proteins as biologics: Avoid live infection; targeted immunomodulation
- Challenges: Dosing, standardization, safety of live helminth therapy; regulatory classification

**Neglected Tropical Disease Roadmap:**
- WHO NTD Roadmap 2021-2030: Targets for elimination as public health problem
  - Lymphatic filariasis: Elimination by MDA (ivermectin + DEC + albendazole triple therapy; IDA)
  - Schistosomiasis: Control through MDA (praziquantel) + WASH + snail control; pediatric praziquantel development
  - Onchocerciasis: Elimination through MDA (ivermectin) + potential moxidectin (longer-acting)
  - STH: Control through deworming MDA in school children; 75% coverage target
- Integration: NTD programs integrated with other health interventions (malaria, nutrition, education)
- Pediatric formulations: Praziquantel for preschool children (dispersible tablet in development)

**Genomics and Advanced Diagnostics:**
- Whole-genome sequencing: Reference genomes available for major STH, Schistosoma, filarial worms
- Genetic markers of drug resistance: Surveillance tools for MDA programs
- Molecular diagnostics: qPCR for STH detection (more sensitive than microscopy; can quantify intensity)
- LAMP assays: Point-of-care molecular detection of Schistosoma, STH
- Worm-free DNA (cfDNA): Circulating parasite DNA in plasma/urine; emerging for non-invasive diagnosis
- Environmental DNA (eDNA): Detection of helminth DNA in water/soil for transmission monitoring

**Vaccine Development:**
- Schistosoma vaccines: Multiple candidates in clinical trials
  - Sm-TSP-2: Tetraspanin surface protein; recombinant + Alhydrogel adjuvant; Phase 1
  - Sm-p80 (SchistoShield): Calpain enzyme; Phase 1/2
  - Sm14 (FAPESP): Fatty acid-binding protein; Phase 2 (Brazil)
- Hookworm vaccines: Na-GST-1 (glutathione-S-transferase); Na-APR-1 (aspartic protease); Phase 1
- Challenges: Complex parasite biology, immune evasion, need for strong Th2 and antibody responses
- Veterinary precedent: Barbervax (Haemonchus contortus) licensed for sheep; proof-of-concept for helminth vaccination`,
      keyTerms: [
        { term: 'Beta-tubulin codon 200 mutation', definition: 'A single nucleotide polymorphism in the helminth beta-tubulin gene (F200Y) that confers benzimidazole resistance by reducing drug binding affinity' },
        { term: 'IDA (triple therapy)', definition: 'Ivermectin + DEC + albendazole triple drug administration for accelerated lymphatic filariasis elimination' },
        { term: 'Helminth therapy', definition: 'The intentional administration of helminth infections or helminth-derived molecules to modulate the immune system for treating autoimmune diseases' },
        { term: 'NTD Roadmap 2021-2030', definition: 'The WHO strategic plan setting targets for control, elimination, and eradication of 20 neglected tropical diseases including helminth infections' },
        { term: 'Environmental DNA', definition: 'Detection of helminth genetic material in water or soil samples to monitor environmental contamination and transmission risk without human sampling' },
      ],
      clinicalNotes: 'Anthelmintic resistance is an emerging concern requiring surveillance in MDA programs. Helminth-derived immunomodulatory molecules represent a promising therapeutic frontier for autoimmune diseases. The NTD elimination agenda requires sustained political commitment and funding. Novel diagnostics (qPCR, LAMP) will improve program monitoring. Schistosomiasis vaccine candidates are the most advanced in the helminth vaccine pipeline.',
    },
    5: {
      level: 5,
      summary: 'Expert helminthology integrates systems-level understanding of helminth-microbiome-immune interactions, advanced drug discovery pipelines, the economics of NTD elimination, gene editing approaches for vector/intermediate host control, and leadership in the global elimination agenda.',
      explanation: `Expert-level knowledge encompasses translational science, implementation research, and global health strategy.

**Helminth-Microbiome-Immune Axis:**
- Helminths profoundly alter gut microbiome composition
- Increased microbial diversity during helminth infection; enrichment of Clostridiales (SCFA-producing)
- Short-chain fatty acids (SCFAs): Helminth-induced microbiome changes promote Treg differentiation via SCFA-HDAC inhibition
- Deworming paradox: MDA may transiently increase inflammatory bowel symptoms by removing helminth-mediated immune regulation and altering microbiome
- Therapeutic implications: Combining probiotics with helminth-derived molecules for targeted immunomodulation

**Advanced Drug Discovery:**
- Target-based approaches: Helminth-specific metabolic enzymes, ion channels, kinases
- Phenotypic screening: Whole-worm assays using C. elegans as model organism and target helminths
- Repurposing: Veterinary anthelmintics for human use (emodepside: SL0-1 potassium channel opener; Phase 1 for onchocerciasis)
- Moxidectin: Long-acting milbemycin; FDA-approved for onchocerciasis (2018); single dose with prolonged microfilaricidal activity; potential game-changer for elimination
- Macrofilaricides: Drugs targeting adult filarial worms (not just microfilariae):
  - Anti-Wolbachia therapy (doxycycline 4-6 weeks): Kills endosymbiotic bacteria essential for worm fertility and survival
  - AWOL (Anti-Wolbachia) Consortium: Screening for faster-acting anti-Wolbachia agents (TylAMac, ABBV-4083)
  - Direct macrofilaricides: Flubendazole (nanoformulations), oxfendazole (repurposed veterinary drug)

**Gene Editing for Vector/Intermediate Host Control:**
- Biomphalaria snails (Schistosoma intermediate host): CRISPR-Cas9 editing to create schistosome-resistant snails
- Gene drive approaches: Self-propagating resistance traits through snail populations
- Sterile snail release: Analogous to sterile insect technique
- Ethical and ecological considerations: Disrupting freshwater ecosystems; containment challenges

**Economics of NTD Elimination:**
- STH deworming: One of most cost-effective health interventions ($0.03-0.05 per treatment)
- Return on investment: Every $1 invested in NTD control returns $25-30 in economic benefits
- Disability burden: STH responsible for 1.9 million DALYs; schistosomiasis for 1.4 million DALYs
- Drug donations: Pharmaceutical companies donate billions of deworming tablets annually (Johnson & Johnson, Merck, others)
- Sustainability challenge: Transition from donation-dependent to country-owned programs
- Integration with UHC: NTD programs as entry point for primary healthcare strengthening

**Implementation Science:**
- MDA optimization: Age-targeted vs. community-wide; frequency; drug combinations
- Breaking transmission: Combination of MDA + WASH + snail control + behavior change required for elimination (vs. control alone)
- Monitoring and evaluation: Transmission assessment surveys (TAS) for lymphatic filariasis; sentinel site monitoring for STH/schistosomiasis
- Equity: Reaching last-mile populations; conflict-affected areas; mobile/nomadic populations
- Co-implementation: Integrating helminth MDA with immunization campaigns, malaria bednets, nutrition programs

**Expert Clinical Pearls:**
- Loeffler syndrome: Peripheral eosinophilia + transient pulmonary infiltrates during lung migration of Ascaris, Strongyloides, hookworm larvae
- Eosinophilia differential: Distinguish helminth from drug reaction, autoimmune, malignancy; absolute count >1500 suggests tissue-invasive helminth
- Strongyloides HTLV-1 co-infection: HTLV-1 impairs Th2 response -> increased worm burden -> hyperinfection even without immunosuppression
- Schistosomiasis + HBV/HCV co-infection: Accelerated liver fibrosis; treat both
- Post-treatment reactions: Mazzotti reaction (DEC in onchocerciasis) - do not use DEC in onchocerciasis-endemic areas; ivermectin preferred
- Cysticercosis racemose form: Subarachnoid cysts without visible scolex; worse prognosis; may require prolonged or repeated treatment courses`,
      keyTerms: [
        { term: 'Helminth-microbiome axis', definition: 'The bidirectional interaction between helminth infections and gut microbiome composition, influencing immune regulation through SCFA production and Treg induction' },
        { term: 'Macrofilaricide', definition: 'A drug that kills adult filarial worms, as opposed to microfilaricides that only target the larval (microfilarial) stage' },
        { term: 'Anti-Wolbachia therapy', definition: 'Treatment targeting Wolbachia endosymbiotic bacteria essential for filarial worm fertility and survival, using antibiotics like doxycycline as macrofilaricidal agents' },
        { term: 'Moxidectin', definition: 'A long-acting anthelmintic FDA-approved for onchocerciasis with sustained microfilaricidal activity superior to ivermectin, potentially accelerating elimination' },
        { term: 'Mazzotti reaction', definition: 'A potentially life-threatening inflammatory reaction caused by massive microfilarial death after DEC treatment in onchocerciasis, precluding DEC use in endemic areas' },
      ],
      clinicalNotes: 'The ID/tropical medicine specialist must integrate clinical management with global health leadership. Key priorities: (1) Screen all patients from endemic areas for Strongyloides before immunosuppression. (2) Recognize eosinophilia as a critical clue for helminth infections in immigrants and travelers. (3) Support NTD elimination programs through MDA program design and evaluation. (4) Monitor anthelmintic resistance emergence. (5) Understand the helminth-microbiome-immune axis for emerging therapeutic applications. (6) Advocate for sustained NTD funding and drug donation programs. (7) Contribute to the development of next-generation diagnostics and therapeutics.',
    },
  },
  media: [],
  citations: [
    { id: 'hotez-nejm-helminth-2004', type: 'article', title: 'Helminth Infections: Soil-Transmitted Helminth Infections and Schistosomiasis', authors: ['Hotez PJ', 'Molyneux DH', 'Fenwick A'], source: 'The Lancet', license: 'Copyrighted' },
    { id: 'who-ntd-roadmap-2030', type: 'website', title: 'Ending the Neglect to Attain the Sustainable Development Goals: A Road Map for NTDs 2021-2030', source: 'World Health Organization', license: 'CC BY-NC-SA 3.0 IGO' },
    { id: 'garcia-neurocysticercosis-2014', type: 'article', title: 'Cysticercosis and Its Treatment', authors: ['Garcia HH', 'Nash TE', 'Del Brutto OH'], source: 'Clinical Infectious Diseases', license: 'Copyrighted' },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-malaria', targetType: 'condition', relationship: 'sibling', label: 'Malaria' },
    { targetId: 'infectious-disease-toxoplasmosis', targetType: 'condition', relationship: 'sibling', label: 'Toxoplasmosis' },
    { targetId: 'infectious-disease-antimicrobial-resistance-comprehensive', targetType: 'topic', relationship: 'related', label: 'Antimicrobial Resistance' },
  ],
  tags: {
    systems: ['infectious-disease', 'parasitology', 'global-health', 'gastroenterology'],
    topics: ['helminth-infections', 'neglected-tropical-diseases', 'parasitology', 'global-health'],
    keywords: ['helminth', 'nematode', 'cestode', 'trematode', 'Schistosoma', 'Ascaris', 'hookworm', 'Strongyloides', 'neurocysticercosis', 'praziquantel', 'albendazole', 'MDA', 'NTD'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};
