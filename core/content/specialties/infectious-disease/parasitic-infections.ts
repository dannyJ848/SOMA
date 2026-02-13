import { EducationalContent } from '../../types';

export const parasiticInfections: EducationalContent = {
  id: 'infectious-disease-parasitic',
  type: 'concept',
  name: 'Parasitic Infections',
  alternateNames: ['Parasitology', 'Parasitic Diseases', 'Helminth and Protozoan Infections'],

  levels: {
    1: {
      level: 1,
      summary: 'Parasites are organisms that live on or inside humans and get their food from us, causing diseases ranging from mild stomach upset to serious life-threatening conditions.',
      explanation: `Parasites are living creatures that need a host (like a human) to survive. They take nutrients from us and can make us sick. There are two main types:

**Types of Parasites:**

*Protozoa (Single-celled, microscopic):*
- Malaria - spread by mosquitoes, very serious, common in tropical areas
- Giardia - causes diarrhea, spread through contaminated water
- Amoeba - can cause severe diarrhea (dysentery)
- Toxoplasma - from cat feces, undercooked meat; dangerous in pregnancy
- Cryptosporidium - causes diarrhea, especially in immunocompromised

*Helminths (Worms):*
- Roundworms (nematodes) - include pinworms, hookworms, Ascaris
- Tapeworms (cestodes) - from undercooked meat
- Flukes (trematodes) - from raw fish or snails

*Ectoparasites (Live on the body):*
- Lice - live in hair
- Scabies - tiny mites that burrow into skin
- Ticks - can transmit other diseases

**How Parasites Spread:**
- Contaminated food or water
- Mosquito, tick, or fly bites
- Walking barefoot on contaminated soil
- Person-to-person contact
- From pets (especially cats - Toxoplasma)
- Raw or undercooked meat/fish

**Common Symptoms:**
- Diarrhea (often watery or bloody)
- Stomach pain and cramping
- Weight loss
- Fatigue
- Itching (especially with skin parasites)
- Some worms visible in stool

**Prevention:**
- Wash hands, especially before eating
- Cook meat thoroughly
- Drink clean water (or bottled water when traveling)
- Use insect repellent in malaria areas
- Sleep under mosquito nets in tropical regions
- Deworm pets regularly`,
      keyTerms: [
        { term: 'parasite', definition: 'An organism that lives on or in a host and gets food at the host\'s expense' },
        { term: 'protozoa', definition: 'Single-celled parasites, like those causing malaria and giardia' },
        { term: 'helminth', definition: 'Parasitic worms, including roundworms, tapeworms, and flukes' },
        { term: 'malaria', definition: 'Serious disease spread by mosquitoes, caused by Plasmodium parasite' },
      ],
      analogies: [
        'Parasites are like freeloaders - they move into your body and live off your resources without contributing anything back.',
        'The life cycle of some parasites is like a relay race - they pass from one host to another, with each host serving as a different "runner" in their journey.',
      ],
      examples: [
        'Children sometimes get pinworms, which cause itching around the bottom at night when female worms come out to lay eggs.',
        'Travelers to tropical areas may get "Montezuma\'s revenge" - often from parasites like Giardia in contaminated water.',
      ],
    },
    2: {
      level: 2,
      summary: 'Parasitic infections are caused by protozoa and helminths with complex life cycles, causing disease through tissue invasion, nutrient competition, and immune responses.',
      explanation: `Parasitology encompasses diverse organisms with complex life cycles, often involving multiple hosts and environmental stages.

**Protozoan Infections:**

*Intestinal Protozoa:*
- **Giardia lamblia**: Fecal-oral, travelers/campers, watery diarrhea, cyst/trophozoite stages
- **Entamoeba histolytica**: Dysentery, liver abscess, trophozoites with ingested RBCs
- **Cryptosporidium**: Watery diarrhea, AIDS-defining illness, acid-fast oocysts

*Blood/Tissue Protozoa:*
- **Plasmodium** (malaria): P. falciparum (most severe), P. vivax/ovale (dormant liver stages)
- **Toxoplasma gondii**: Cat feces, congenital infection, brain cysts in AIDS
- **Trypanosoma**: African sleeping sickness, Chagas disease (American)
- **Leishmania**: Sand fly transmission, cutaneous/visceral forms

**Helminth Infections:**

*Nematodes (Roundworms):*
- **Ascaris lumbricoides**: Most common worldwide, lung migration, biliary obstruction
- **Hookworm** (Ancylostoma, Necator): Penetrate skin, iron deficiency anemia
- **Strongyloides**: Autoinfection, hyperinfection in immunosuppressed
- **Enterobius** (Pinworm): Perianal itching, common in children
- **Trichuris** (Whipworm): Rectal prolapse in severe cases
- **Trichinella**: From undercooked pork, muscle encystation
- **Filarial worms**: Lymphatic filariasis (elephantiasis), onchocerciasis (river blindness)

*Cestodes (Tapeworms):*
- **Taenia solium**: Pork tapeworm, cysticercosis (tissue cysts including brain)
- **Taenia saginata**: Beef tapeworm
- **Diphyllobothrium**: Fish tapeworm, B12 deficiency
- **Echinococcus**: Hydatid cysts in liver, lungs

*Trematodes (Flukes):*
- **Schistosoma**: Freshwater snails, chronic bladder/liver disease
- **Clonorchis/Fasciola**: Liver flukes from raw fish/plants

**Life Cycle Concepts:**
- Definitive host: Where sexual reproduction occurs
- Intermediate host: Where larval development occurs
- Vector: Organism that transmits parasite
- Reservoir: Animal source of infection

**Diagnosis:**
- Stool ova and parasites (O&P) examination
- Blood smear: Malaria, filaria, trypanosomes
- Serology: Toxoplasma, Echinococcus, Strongyloides
- Tissue biopsy: Trichinella, Leishmania`,
      keyTerms: [
        { term: 'trophozoite', definition: 'Active, feeding, motile stage of protozoa' },
        { term: 'cyst', definition: 'Dormant, resistant stage of protozoa for environmental survival and transmission' },
        { term: 'definitive host', definition: 'Host where parasite sexual reproduction occurs' },
        { term: 'intermediate host', definition: 'Host where parasite larval development occurs' },
        { term: 'hyperinfection', definition: 'Massive autoinfection with Strongyloides in immunocompromised, can be fatal' },
      ],
      analogies: [
        'Parasites with two-host life cycles treat hosts like pit stops - they need different hosts for different stages of their development.',
        'A cyst is like a space capsule for the parasite - protected packaging for traveling between hosts through harsh environments.',
      ],
    },
    3: {
      level: 3,
      summary: 'Parasitic pathogenesis involves specific invasion mechanisms, immune evasion strategies, and host responses that determine clinical presentation and complications.',
      explanation: `Clinical parasitology requires understanding of parasite biology, epidemiology, and therapeutic approaches.

**Malaria (Plasmodium species):**

*Species Characteristics:*
| Species | Features | Complications |
|---------|----------|---------------|
| P. falciparum | Most severe, no hypnozoites | Cerebral malaria, ARDS, severe anemia |
| P. vivax | Hypnozoites, tertian fever | Splenomegaly, relapses |
| P. ovale | Similar to vivax | Relapses |
| P. malariae | Quartan fever | Nephrotic syndrome |
| P. knowlesi | Zoonotic (monkey) | Can be severe |

*Pathophysiology:*
- Liver stage → blood stage → RBC invasion
- P. falciparum: Cytoadherence to endothelium (rosetting, sequestration)
- Hemolysis → anemia
- Cytokine release → fever

*Diagnosis:*
- Thick smear: Detection
- Thin smear: Species identification, parasitemia
- Rapid diagnostic test: HRP2 antigen (P. falciparum)
- PCR: Low-level parasitemia

*Treatment:*
- Uncomplicated P. falciparum: Artemisinin combination therapy (ACT)
- Severe malaria: IV artesunate
- P. vivax/ovale: Chloroquine + primaquine (hypnozoites)
- Check G6PD before primaquine

**Intestinal Parasites:**

*Giardia:*
- Transmission: Contaminated water, fecal-oral
- Presentation: Watery diarrhea, bloating, malabsorption
- Diagnosis: Stool antigen, O&P (cysts/trophozoites)
- Treatment: Metronidazole or tinidazole

*Amebiasis (E. histolytica):*
- Invasive vs. noninvasive infection
- Dysentery: Bloody diarrhea, flask-shaped ulcers
- Liver abscess: "Anchovy paste" aspirate
- Diagnosis: Antigen testing, serology for invasive disease
- Treatment: Metronidazole + luminal agent (paromomycin)

*Cryptosporidium:*
- Watery diarrhea, self-limited in immunocompetent
- Prolonged/severe in AIDS (CD4 <200)
- Diagnosis: Modified acid-fast stain, antigen, PCR
- Treatment: Nitazoxanide; immune reconstitution in HIV

**Tissue Parasites:**

*Toxoplasmosis:*
- Acquisition: Cat feces, undercooked meat, congenital
- Immunocompetent: Usually asymptomatic or mono-like
- AIDS: Ring-enhancing brain lesions
- Congenital: Triad of chorioretinitis, hydrocephalus, intracranial calcifications
- Diagnosis: Serology (IgG/IgM), PCR of tissue
- Treatment: Pyrimethamine + sulfadiazine + leucovorin

*Strongyloidiasis:*
- Unique autoinfection cycle
- Immunocompetent: Often asymptomatic, eosinophilia
- Immunosuppressed (steroids, HTLV-1): Hyperinfection syndrome
- Diagnosis: Stool O&P, serology, eosinophilia
- Treatment: Ivermectin

*Cysticercosis:*
- T. solium: Ingesting eggs (not cysticerci)
- Neurocysticercosis: Seizures, hydrocephalus
- Diagnosis: CT/MRI (cysts), serology
- Treatment: Albendazole + steroids + antiepileptics`,
      keyTerms: [
        { term: 'hypnozoite', definition: 'Dormant liver stage of P. vivax/ovale causing relapses; killed by primaquine' },
        { term: 'artemisinin', definition: 'Fast-acting antimalarial drug class derived from sweet wormwood; backbone of ACT' },
        { term: 'neurocysticercosis', definition: 'CNS infection with T. solium larvae; common cause of seizures in endemic areas' },
        { term: 'autoinfection', definition: 'Reinfection from larvae within same host; unique to Strongyloides, allows persistence' },
        { term: 'eosinophilia', definition: 'Elevated eosinophils; common in tissue-invasive helminths, not usually in protozoa' },
      ],
      clinicalNotes: 'Screen for Strongyloides with serology before immunosuppression (steroids, transplant) - hyperinfection is fatal. For malaria, always determine species and calculate parasitemia. G6PD testing is required before primaquine (causes hemolysis in deficiency).',
    },
    4: {
      level: 4,
      summary: 'Management of parasitic infections requires integration of epidemiologic risk assessment, appropriate diagnostic testing, targeted antiparasitic therapy, and prevention strategies including chemoprophylaxis for travelers.',
      explanation: `Advanced management of parasitic diseases integrates epidemiology, diagnostics, pharmacology, and prevention.

**Malaria: Advanced Management:**

*Severe Malaria Criteria:*
- Impaired consciousness/coma
- Severe anemia (Hb <7)
- Acute kidney injury
- ARDS/pulmonary edema
- Hypoglycemia
- Acidosis
- Parasitemia >10%

*Treatment of Severe Malaria:*
- IV artesunate (drug of choice): 2.4 mg/kg at 0, 12, 24 hours, then daily
- Exchange transfusion: Consider if parasitemia >10% with severe manifestations
- Supportive care: Fluids, glucose, seizure management
- Follow with oral ACT once able to take PO

*Malaria Prophylaxis:*
| Drug | Dosing | Notes |
|------|--------|-------|
| Atovaquone-proguanil | Daily, 1-2 days before to 7 days after | Well-tolerated, expensive |
| Doxycycline | Daily, 1-2 days before to 4 weeks after | Photosensitivity, cheap |
| Mefloquine | Weekly, 2 weeks before to 4 weeks after | Neuropsychiatric effects |
| Chloroquine | Weekly | Only for chloroquine-sensitive areas |
| Primaquine | Daily | For terminal prophylaxis (P. vivax areas) |

**Helminth Treatment:**

*Soil-Transmitted Helminths:*
- Albendazole 400mg single dose or mebendazole 100mg BID x 3 days
- Hookworm: Iron supplementation for anemia
- Ascaris: Avoid steroids (can cause migration)

*Strongyloides:*
- Ivermectin 200 mcg/kg x 2 days (first-line)
- Hyperinfection: Ivermectin daily until larvae cleared + broad-spectrum antibiotics (translocation)

*Tapeworms:*
- Praziquantel (intestinal tapeworms)
- Cysticercosis: Albendazole + corticosteroids
- Echinococcus: Surgery + albendazole (PAIR for hepatic cysts)

*Schistosomiasis:*
- Praziquantel: 40-60 mg/kg in divided doses
- Treatment after travel (>6 weeks for egg production)

**Drug Resistance:**

*Malaria Resistance:*
- Chloroquine resistance: P. falciparum widespread; P. vivax in some areas
- Artemisinin partial resistance: Southeast Asia (delayed clearance)
- Approach: ACT with different partner drugs

*Metronidazole Resistance:*
- Giardia: Can occur; use tinidazole or nitazoxanide
- Trichomonas: Higher-dose metronidazole or tinidazole

**Special Populations:**

*Pregnancy:*
- Malaria: Increased severity; quinine + clindamycin or artemether-lumefantrine
- Toxoplasmosis: Spiramycin (1st trimester) or pyrimethamine/sulfadiazine (2nd/3rd)
- Avoid: Primaquine, doxycycline, high-dose metronidazole

*HIV/AIDS:*
- Cryptosporidiosis: ART for immune reconstitution
- Toxoplasmosis prophylaxis: TMP-SMX if CD4 <100
- Strongyloides: Screen and treat before immune suppression
- Leishmaniasis: More severe, may relapse

*Transplant:*
- Strongyloides hyperinfection with immunosuppression
- Chagas reactivation: Endemic-area donors
- Toxoplasmosis: Prophylaxis for seronegative recipient/seropositive donor (heart)

**Diagnostic Approach:**

*Returned Traveler with Fever:*
1. Malaria smear immediately + RDT
2. Blood cultures
3. CBC with differential (eosinophilia suggests helminth)
4. Consider: Dengue, typhoid, rickettsia

*Chronic Diarrhea:*
1. Stool O&P x 3 (sensitivity increases with multiple samples)
2. Giardia antigen
3. Cryptosporidium acid-fast stain or antigen
4. Consider: Strongyloides, E. histolytica antigen

*Eosinophilia Workup:*
1. Travel history essential
2. Strongyloides serology (can be negative early)
3. Stool O&P
4. Consider: Filariasis, schistosomiasis, toxocariasis based on exposure`,
      keyTerms: [
        { term: 'artemisinin combination therapy (ACT)', definition: 'First-line malaria treatment combining fast-acting artemisinin with longer-acting partner drug' },
        { term: 'PAIR procedure', definition: 'Puncture, Aspiration, Injection, Re-aspiration; minimally invasive treatment for hepatic hydatid cysts' },
        { term: 'ivermectin', definition: 'Antiparasitic drug effective against Strongyloides, onchocerciasis, and other nematodes; also used for scabies' },
        { term: 'praziquantel', definition: 'Antiparasitic drug for trematodes (schistosomiasis) and cestodes (tapeworms)' },
        { term: 'terminal prophylaxis', definition: 'Primaquine given after leaving malaria-endemic area to eliminate P. vivax/ovale hypnozoites' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Malaria can present >1 year after travel - always ask travel history
- Strongyloides serologies can take 6-8 weeks to become positive
- Cysticercosis: Steroids before antiparasitic to reduce inflammation
- Do not give steroids for Strongyloides (precipitates hyperinfection)
- Schistosomiasis: Treat >6 weeks after freshwater exposure (for eggs to develop)
- Loiasis (eye worm): Can have severe reaction to ivermectin; check for coinfection before DEC treatment`,
    },
    5: {
      level: 5,
      summary: 'Contemporary parasitology integrates molecular epidemiology, drug resistance surveillance, vaccine development, and global health strategies for control and elimination of parasitic diseases in endemic regions and travelers.',
      explanation: `Expert-level parasitology requires integration of molecular parasitology, global epidemiology, and evolving therapeutic and control strategies.

**Molecular Diagnostics and Surveillance:**

*Advanced Diagnostic Platforms:*
- Multiplex PCR panels for intestinal parasites
- Loop-mediated isothermal amplification (LAMP)
- Real-time PCR for speciation and quantification
- Next-generation sequencing for drug resistance markers

*Malaria Surveillance:*
- Molecular markers for drug resistance:
  - Kelch13 mutations: Artemisinin resistance
  - pfcrt K76T: Chloroquine resistance
  - pfmdr1 amplification: Mefloquine resistance
- hrp2/3 deletions: RDT false negatives

*Species Identification:*
- E. histolytica vs. E. dispar (only histolytica is pathogenic)
- Plasmodium speciation when morphology unclear
- Cryptosporidium species and genotypes

**Emerging Resistance and Threats:**

*Artemisinin Resistance:*
- Partial resistance: Delayed parasite clearance
- Greater Mekong Subregion: Epicenter
- Spread concerns to Africa
- Management: Triple ACT, longer treatment courses

*Other Drug Resistance:*
- Metronidazole-resistant Giardia
- Albendazole resistance in soil-transmitted helminths
- Drug-resistant Leishmania

*Emerging Parasites:*
- Angiostrongylus (rat lungworm): Eosinophilic meningitis
- Baylisascaris (raccoon roundworm): Eosinophilic meningoencephalitis
- Balamuthia, Acanthamoeba: Free-living amebic encephalitis

**Vaccine Development:**

*Malaria Vaccines:*
- RTS,S/AS01 (Mosquirix): First licensed, ~30% efficacy
- R21/Matrix-M: Higher efficacy in trials, WHO recommended
- Transmission-blocking vaccines in development
- Whole sporozoite approaches

*Other Parasitic Vaccines:*
- Leishmania: Various candidates
- Schistosomiasis: In development
- Hookworm: Na-ASP-2, Na-GST-1 antigens

**Global Control and Elimination:**

*Mass Drug Administration (MDA):*
- Lymphatic filariasis: DEC + albendazole + ivermectin (IDA)
- Onchocerciasis: Ivermectin (Mectizan donation program)
- Soil-transmitted helminths: School-based deworming
- Schistosomiasis: Praziquantel

*Elimination Programs:*
- Malaria elimination feasible in some regions
- Lymphatic filariasis elimination validation
- Dracunculiasis (Guinea worm): Near eradication
- Onchocerciasis: Elimination in some foci

*Challenges:*
- Vector control and insecticide resistance
- Reservoir hosts (zoonoses)
- Drug access and distribution
- Conflict and displacement

**Special Clinical Scenarios:**

*Transplant Parasitology:*
- Donor-derived infections: Chagas, Strongyloides, Toxoplasma
- Screening protocols for endemic-area donors/recipients
- Management of reactivation

*Eosinophilic Syndromes:*
- Löffler syndrome: Transient pulmonary infiltrates during larval migration
- Tropical pulmonary eosinophilia: Filariasis, nocturnal cough
- Visceral larva migrans: Toxocara
- Eosinophilic meningitis: Angiostrongylus, Baylisascaris

*Immunocompromised Host:*
- Strongyloides hyperinfection: Up to 90% mortality
- Reactivation toxoplasmosis: Multiple ring-enhancing lesions
- Cryptosporidium: Chronic, cholangiopathy
- Leishmaniasis: Visceral disease, relapse common

**Therapeutic Advances:**

*Novel Antiparasitics:*
- Tafenoquine: Long-acting primaquine alternative (8-aminoquinoline)
- Moxidectin: Long-acting macrocyclic lactone for onchocerciasis
- Fosravuconazole: Chagas disease (investigational)
- Triclabendazole: Fascioliasis

*Combination Approaches:*
- Triple drug therapy for LF (IDA)
- Artemisinin combinations with different partners
- Sequential vs. simultaneous administration

**One Health Approach:**

*Zoonotic Parasites:*
- Echinococcosis: Dog-sheep cycle, human incidental
- Toxocariasis: Dog/cat roundworms in humans
- Trichinellosis: Wild game reservoirs
- Cryptosporidiosis: Cattle and other animal sources

*Environmental Factors:*
- Climate change and vector distribution
- Water and sanitation for intestinal parasites
- Agricultural practices and transmission`,
      keyTerms: [
        { term: 'Kelch13 mutation', definition: 'Marker of artemisinin partial resistance in P. falciparum; Delays parasite clearance' },
        { term: 'mass drug administration (MDA)', definition: 'Treating entire at-risk populations regardless of infection status for disease control' },
        { term: 'tafenoquine', definition: 'Long-acting 8-aminoquinoline for P. vivax radical cure; single-dose alternative to primaquine' },
        { term: 'donor-derived infection', definition: 'Transmission of parasite from organ/stem cell donor to recipient; risk with Chagas, Strongyloides, Toxoplasma' },
        { term: 'RTS,S', definition: 'First approved malaria vaccine targeting circumsporozoite protein; ~30% efficacy over 4 years' },
      ],
      clinicalNotes: `**Expert Pearls:**
- Tafenoquine: Also requires G6PD testing; single-dose convenience but cannot stop if hemolysis
- Chagas: Consider for Latin American-born donors; xenodiagnosis or PCR if serology indeterminate
- Artemisinin resistance surveillance: Check clearance curves, not just treatment outcome
- Strongyloides pre-transplant: Ivermectin x 2 days, confirm clearance with repeat serology
- Angiostrongylus meningitis: CSF eosinophilia; supportive care, steroids; albendazole controversial
- Malaria in pregnancy: Parasitized RBCs sequester in placenta; increased risk of severe disease`,
    },
  },

  media: [
    {
      id: 'parasite-classification',
      type: 'diagram',
      filename: 'parasite-classification.svg',
      title: 'Classification of Human Parasites',
      description: 'Overview of protozoa and helminths affecting humans',
    },
    {
      id: 'malaria-life-cycle',
      type: 'diagram',
      filename: 'malaria-life-cycle.svg',
      title: 'Plasmodium Life Cycle',
      description: 'Diagram showing mosquito and human stages of malaria parasite',
    },
  ],
  citations: [
    {
      id: 'cdc-parasites',
      type: 'website',
      title: 'CDC - Parasites',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/parasites/',
    },
    {
      id: 'who-malaria-treatment',
      type: 'article',
      title: 'WHO Guidelines for Malaria Treatment',
      source: 'World Health Organization',
      url: 'https://www.who.int/publications/i/item/guidelines-for-malaria',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-tropical', targetType: 'topic', relationship: 'related', label: 'Tropical Medicine' },
    { targetId: 'infectious-disease-hiv', targetType: 'topic', relationship: 'related', label: 'HIV/AIDS' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],
  tags: {
    systems: ['immune', 'gastrointestinal'],
    topics: ['infectious-disease', 'parasitology', 'tropical-medicine'],
    keywords: ['parasite', 'malaria', 'helminth', 'protozoa', 'Strongyloides', 'Toxoplasma', 'tropical disease'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default parasiticInfections;
