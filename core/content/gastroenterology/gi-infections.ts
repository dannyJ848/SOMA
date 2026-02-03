/**
 * GI Infections - H. pylori, C. diff, Parasitic
 *
 * Covers Helicobacter pylori, Clostridioides difficile infection,
 * and parasitic infections of the GI tract.
 */

import { EducationalContent } from '../types';

export const giInfectionsContent: EducationalContent = {
  id: 'gi-infections',
  type: 'condition',
  name: 'GI Infections',
  alternateNames: [
    'H. pylori',
    'Helicobacter pylori',
    'C. diff',
    'Clostridioides difficile',
    'CDI',
    'Giardia',
    'Parasitic Infections',
    'Foodborne Illness',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'GI infections are caused by bacteria, viruses, or parasites that invade the digestive tract. Common infections include H. pylori, C. difficile, and various parasites.',
      explanation: `**What are GI Infections?**

Gastrointestinal infections occur when harmful germs enter the digestive tract and cause illness. These germs can be bacteria, viruses, or parasites. They can cause diarrhea, vomiting, belly pain, and fever.

**Common GI Infections:**

1. **H. pylori (Helicobacter pylori)**
   - A type of bacteria that lives in the stomach
   - Very common - about half the world has it
   - Can cause stomach ulcers and stomach cancer
   - Spread through contaminated food, water, and saliva
   - Treated with antibiotics and acid-reducing medicine

2. **C. difficile (Clostridioides difficile)**
   - Bacteria that causes severe diarrhea
   - Often happens after taking antibiotics
   - Can cause life-threatening colitis
   - Spread through spores in healthcare settings
   - More common in elderly and hospitalized patients

3. **Giardia**
   - A parasite found in contaminated water
   - Causes diarrhea, gas, and belly cramping
   - Common in camping/backcountry areas ("beaver fever")
   - Spread through contaminated water and food

4. **Other Parasites:**
   - **Pinworms:** Intense itching around the anus
   - **Roundworms:** From contaminated soil
   - **Tapeworms:** From undercooked meat
   - **Amoebas:** From contaminated water

**Common Symptoms:**
- Diarrhea (may be watery or bloody)
- Nausea and vomiting
- Stomach cramps and pain
- Fever
- Loss of appetite
- Weight loss
- Fatigue

**How You Get Infected:**
- Contaminated food or water
- Poor handwashing
- Close contact with infected people
- Undercooked meat
- Swimming in contaminated water
- Travel to developing countries

**Diagnosis:**
- Stool samples to check for bacteria or parasites
- Breath tests for H. pylori
- Blood tests
- Sometimes colonoscopy for severe cases

**Prevention:**
- Wash hands thoroughly with soap and water
- Cook meat completely
- Drink clean, treated water
- Wash fruits and vegetables
- Avoid risky foods when traveling
- Take antibiotics only when necessary

**Treatment:**
- Antibiotics for bacterial infections
- Anti-parasitic medications
- Fluids to prevent dehydration
- Probiotics to restore healthy bacteria
- Avoid anti-diarrhea medicines for some infections`,
      keyTerms: [
        { term: 'H. pylori', definition: 'Bacteria that causes stomach ulcers and cancer', pronunciation: 'py-LOR-ee' },
        { term: 'C. diff', definition: 'Bacteria that causes severe diarrhea after antibiotics' },
        { term: 'parasite', definition: 'Organism that lives on or in another organism and causes harm' },
        { term: 'giardia', definition: 'Parasite causing diarrhea from contaminated water', pronunciation: 'jee-AR-dee-uh' },
        { term: 'contaminated', definition: 'Something made dirty or harmful by germs or chemicals' },
      ],
      analogies: [
        'H. pylori is like a burglar breaking into your stomach and causing damage.',
        'C. diff spores are like seeds that can grow in your gut after antibiotics kill the good bacteria.',
        'Your gut is like a garden - antibiotics can pull the "weeds" but also kill the "flowers".',
      ],
      examples: [
        'Someone who took antibiotics for a week and now has severe diarrhea might have C. diff.',
        'A person with a burning stomach pain and ulcers might have H. pylori infection.',
        'A camper who drank stream water and now has diarrhea and gas might have giardia.',
      ],
      patientCounselingPoints: [
        'Always wash your hands after using the bathroom and before eating',
        'Only take antibiotics when prescribed by a doctor',
        'Cook meat thoroughly to safe temperatures',
        'Drink bottled or treated water when traveling',
        'Complete the full course of prescribed antibiotics',
      ],
    },

    2: {
      level: 2,
      summary: 'GI infections include H. pylori (associated with PUD and gastric cancer), C. difficile (antibiotic-associated colitis), and parasitic infections (Giardia, Cryptosporidium, Entamoeba). Each has distinct transmission, presentation, and treatment approaches.',
      explanation: `## Helicobacter pylori

**Bacterium Characteristics:**
- Gram-negative, spiral-shaped, microaerophilic
- Colonizes gastric mucosa
- Produces urease to neutralize stomach acid
- Transmitted via oral-oral or fecal-oral route

**Disease Associations:**
- Peptic ulcer disease (duodenal > gastric)
- Chronic gastritis
- Gastric adenocarcinoma
- MALT lymphoma
- Iron deficiency anemia
- Idiopathic thrombocytopenic purpura (ITP)

**Testing Indications:**
- Active PUD (past or present)
- Gastric MALT lymphoma
- Uninvestigated dyspepsia (test and treat strategy)
- Low-grade gastric MALT lymphoma
- Long-term NSAID therapy (consider testing)

**Diagnostic Tests:**

*Non-invasive:*
- Urea breath test (gold standard)
- Stool antigen test
- Serology (only for initial diagnosis, not test of cure)

*Invasive (during endoscopy):*
- Rapid urease test (CLO test)
- Histology
- Culture

**Treatment:**
- Multiple antibiotic regimens available
- PPI plus antibiotics (2-4 drugs for 14 days)
- Test of cure 4+ weeks after completion

## Clostridioides difficile Infection (CDI)

**Pathogen:**
- Gram-positive, spore-forming, anaerobic bacterium
- Produces toxins (TcdA, TcdB)
- Spores resistant to heat, alcohol, disinfectants

**Risk Factors:**
- Antibiotic exposure (clindamycin, fluoroquinolones, cephalosporins)
- Age >65
- Hospitalization or nursing home residence
- PPI use
- Immunocompromised
- Inflammatory bowel disease

**Clinical Spectrum:**
- Asymptomatic colonization
- Mild diarrhea (leukocytosis minimal)
- Severe colitis (pseudomembranous colitis)
- Toxic megacolon
- Death

**Diagnosis:**
- **Toxin testing:**
  - Toxin EIA (enzyme immunoassay)
  - Toxin PCR (more sensitive)
  - Multi-step algorithms (GDH + toxin)
- **Clinical criteria:**
  - ≥3 unformed stools in 24 hours
  - Positive stool test for C. difficile toxin

**Severity Assessment:**
- **Mild-moderate:** WBC <15,000, Cr <1.5× baseline
- **Severe:** WBC ≥15,000 OR Cr ≥1.5× baseline
- **Fulminant:** Hypotension, shock, ileus, toxic megacolon

**Treatment:**
- **First episode:**
  - Mild-moderate: Oral vancomycin or fidaxomicin
  - Severe: Oral vancomycin
  - Fulminant: Vancomycin + metronidazole
- **Recurrence:**
  - Second episode: Repeat vancomycin/fidaxomicin
  - Multiple recurrences: Fecal microbiota transplant

## Parasitic Infections

**Giardia lamblia:**
- Transmission: Fecal-oral, contaminated water
- Symptoms: Watery diarrhea, bloating, foul gas, weight loss
- Diagnosis: Stool ova and parasites (3 samples), antigen test
- Treatment: Metronidazole, tinidazole, nitazoxanide

**Cryptosporidium:**
- Transmission: Fecal-oral, waterborne outbreaks
- Symptoms: Profuse watery diarrhea
- High risk: Immunocompromised (HIV)
- Treatment: Nitazoxanide; supportive care in AIDS

**Entamoeba histolytica:**
- Transmission: Fecal-oral, endemic in tropics
- Invasive: Liver abscess, colitis (bloody diarrhea)
- Non-invasive: E. dispar (asymptomatic)
- Diagnosis: Serology, stool antigen
- Treatment: Metronidazole + paromomycin

**Cyclospora:**
- Transmission: Fresh produce (berries, basil)
- Symptoms: Prolonged watery diarrhea, fatigue
- Treatment: Trimethoprim-sulfamethoxazole

**Strongyloides:**
- Transmission: Filariform larvae in soil
- Chronic: Asymptomatic or GI symptoms
- Hyperinfection: In immunocompromised (fatal)
- Treatment: Ivermectin

**Tapeworms:**
- **Taenia saginata:** Beef (raw or undercooked)
- **Taenia solium:** Pork (cysticercosis risk)
- **Diphyllobothrium:** Fish (vitamin B12 deficiency)
- Treatment: Praziquantel

## Traveler's Diarrhea

**Definition:**
≥3 unformed stools in 24 hours with abdominal symptoms, acquired during travel.

**Etiology:**
- Bacterial (80-90%): ETEC, Campylobacter, Salmonella, Shigella
- Viral: Norovirus, rotavirus
- Parasitic: Giardia, Cryptosporidium (more prolonged)

**Prevention:**
- Careful food and water selection
- Bismuth subsalicylate prophylaxis
- Rifaximin prophylaxis (limited use)
- Vaccine: Cholera (some ETEC cross-protection)

**Treatment:**
- Fluoroquinolone or azithromycin
- Loperamide for symptom control (avoid if bloody diarrhea or fever)`,
      keyTerms: [
        { term: 'urease', definition: 'Enzyme that produces ammonia to neutralize acid' },
        { term: 'MALT lymphoma', definition: 'Lymphoma of mucosa-associated lymphoid tissue; associated with H. pylori' },
        { term: 'urea breath test', definition: 'Diagnostic test for H. pylori using radiolabeled urea' },
        { term: 'pseudomembranous colitis', definition: 'Severe C. difficile infection with yellow plaques on colonoscopy' },
        { term: 'fecal-oral', definition: 'Transmission through contaminated food or water' },
        { term: 'spore', definition: 'Dormant, resistant form of bacteria like C. diff' },
        { term: 'hyperinfection', definition: 'Massive parasite replication in immunocompromised host' },
        { term: 'cysticercosis', definition: 'Tissue infection with Taenia solium larvae' },
      ],
      analogies: [
        'C. diff spores are like plant seeds - they can survive harsh conditions and grow when conditions improve.',
        'The urea breath test is like blowing up a balloon - if H. pylori is present, the breath contains labeled CO2.',
      ],
      examples: [
        'A hospitalized patient on clindamycin who develops diarrhea and fever may have C. difficile.',
        'A backpacker who drinks stream water and has foul-smelling diarrhea and gas may have giardia.',
        'A person with chronic ulcers that keep coming back should be tested for H. pylori.',
      ],
    },

    3: {
      level: 3,
      summary: 'H. pylori pathogenesis involves virulence factors that enable gastric colonization and inflammation. C. difficile causes disease through toxin-mediated epithelial injury. Parasitic infections exhibit diverse life cycles and tissue tropism.',
      explanation: `## H. pylori Pathogenesis

**Colonization Mechanisms:**
- **Urease production:**
  - Converts urea to ammonia
  - Neutralizes gastric acid locally
  - Creates microenvironment for survival

- **Motility:**
  - Flagella enable penetration of mucus layer
  - Chemotaxis toward nutrients

- **Adherence:**
  - BabA binds to Lewis b antigen
  - SabA binds sialyl-Lewis x
  - HopQ interacts with CEACAMs

**Virulence Factors:**

*CagA (Cytotoxin-associated gene A):*
- Injected via Type IV secretion system
- Phosphorylated by host kinases
- Alters cell signaling (SHp2/MAPK pathways)
- Causes cytoskeletal rearrangement ("hummingbird phenotype")
- Associated with cancer risk

*VacA (Vacuolating cytotoxin):*
- Forms pores in mitochondrial membranes
- Induces apoptosis and autophagy
- Causes immune cell dysfunction
- Contributes to ulcer formation

*OipA (Outer inflammatory protein A):*
- Pro-inflammatory signaling
- IL-8 induction

**Host Response:**
- Neutrophil infiltration (acute gastritis)
- Lymphoplasmacytic infiltration (chronic gastritis)
- Cytokine production (IL-1β, IL-6, IL-8, TNF-α)
- Gastric atrophy with long-standing infection

**Clinical Consequences:**
- Antral-predominant: Increased acid → duodenal ulcer
- Corpus-predominant: Atrophic gastritis → gastric cancer

## C. difficile Pathogenesis

**Life Cycle:**
- Vegetative cells: Replicate, produce toxins
- Spores: Dormant, resistant, transmission

**Virulence Factors:**
- **Toxin A (TcdA):** Enterotoxin
- **Toxin B (TcdB):** Cytotoxin (more potent)
- **Binary toxin (CDT):** Additional virulence in some strains

**Toxin Mechanism:**
- Glucosylate Rho GTPases
- Disrupt actin cytoskeleton
- Cell rounding, apoptosis, tight junction disruption
- Loss of epithelial barrier → inflammation

**Epidemiology:**
- NAP1/BI/027 strain: Hypervirulent, more severe disease
- Increasing community-associated cases
- Recurrence: 20-30% after first episode

**Pathophysiology of Colitis:**
- Toxin-mediated epithelial injury
- Neutrophil recruitment and pseudomembrane formation
- Elevated leukocyte count, bandemia
- Possible ileus, toxic megacolon

**Fecal Microbiota Transplantation:**
- Restores microbial diversity
- >90% cure rate for recurrent CDI
- Mechanism: Bile acid metabolism, niche occupation, immune modulation

## Parasitic Pathogenesis

**Giardia:**
- Trophozoites attach to duodenal/jejunal epithelium
- Disk-like attachment organelle
- Causes villous blunting, malabsorption
- Anergy in chronic infection (IgA deficiency)
- Resistant to chlorination

**Cryptosporidium:**
- Intracellular but extracytoplasmic location
- Extrudes from apical surface
- Causes villous atrophy, crypt hyperplasia
- Life cycle completed in single host
- Chlorination resistant, ozone sensitive

**Entamoeba histolytica:**
- Trophozoite lysis of host cells via contact-dependent
- Gal/GalNAc lectin mediates adherence
- Cysteine proteases degrade tissue
- Liver abscess from hematogenous spread
- Distinguishing from E. dispar important (non-pathogenic)

**Strongyloides:**
- Unique autoinfection cycle
- Filiform larvae penetrate skin
- Migrate to lungs, ascend airway, swallowed
- Embed in small bowel mucosa
- Hyperinfection in immunosuppression (massive larval burden)

**Cyclospora:**
- Sporulation required for infectivity
- Invades jejunal epithelium
- Causes villous blunting and inflammation
- Requires specific treatment (Bactrim)

## Traveler's Diarrhea Pathogenesis

**Enterotoxigenic E. coli (ETEC):**
- Colonization factors (CFA) attach to intestine
- Heat-labile toxin (LT): Activates adenylate cyclase
- Heat-stable toxin (ST): Activates guanylate cyclase
- Net fluid secretion → watery diarrhea

**Enteroaggregative E. coli (EAEC):**
- Adherent, stacked-brick pattern
- Mucosal damage, inflammation
- Prolonged symptoms

**Campylobacter:**
- C. jejuni most common
- Invades epithelium
- Guillain-Barré association (C. jejuni)
- Thermophilic (prefers 42°C)

**Viral Causes:**
- Norovirus: Most common viral gastroenteritis
- Highly contagious, outbreaks common
- Fecal-oral transmission`,
      keyTerms: [
        { term: 'Type IV secretion system', definition: 'Bacterial apparatus for injecting virulence factors into host cells' },
        { term: 'CagA', definition: 'H. pylori virulence factor injected via Type IV system' },
        { term: 'VacA', definition: 'H. pylori vacuolating cytotoxin' },
        { term: 'pseudomembrane', definition: 'Yellow-inflammatory plaque on colonic mucosa in C. diff' },
        { term: 'NAP1', definition: 'North American pulsed-field type 1; hypervirulent C. diff strain' },
        { term: 'trophozoite', definition: 'Active, feeding form of protozoa' },
        { term: 'sporulation', definition: 'Formation of spores; part of C. difficile life cycle' },
        { term: 'Guillain-Barre', definition: 'Ascending paralysis following Campylobacter infection' },
      ],
      clinicalNotes: 'H. pylori test of cure needed for complicated ulcers, MALT lymphoma, or persistent symptoms. C. diff: Stop inciting antibiotics if possible. FMT reserved for ≥2 recurrences.',
    },

    4: {
      level: 4,
      summary: 'H. pylori, C. difficile, and parasitic infections represent diverse pathogenic mechanisms including toxin production, immune evasion, and complex life cycles. Treatment challenges include antibiotic resistance and recurrence.',
      explanation: `## Advanced H. pylori Topics

**Antibiotic Resistance Mechanisms:**

*Clarithromycin Resistance:*
- A2143G and A2142G mutations in 23S rRNA
- Prevents macrolide binding
- High-level resistance (geographic variation)
- Resistance >15%: Avoid triple therapy

*Metronidazole Resistance:*
- rdxA and fdxB gene mutations
- RecA-mediated mutations
- Partially overcome by higher doses
- 40-50% resistance in many regions

*Fluoroquinolone Resistance:*
- gyrA mutations
- Rising prevalence
- Limit use in salvage therapy

*Tetracycline Resistance:*
- Rare
- 16S rRNA mutations
- Maintains high efficacy

**Treatment Regimens:**

*Bismuth Quadruple Therapy (Preferred):*
- PPI BID + Bismuth subsalicylate QID + Tetracycline QID + Metronidazole TID/QID × 14 days
- Efficacy 85-90% with good compliance
- Low resistance development

*Concomitant Therapy:*
- PPI BID + Clarithromycin BID + Amoxicillin BID + Metronidazole BID × 14 days
- Overcomes clarithromycin resistance

*Hybrid Therapy:*
- 7 days PPI + Amoxicillin
- Then 7 days PPI + Amoxicillin + Clarithromycin + Metronidazole
- Similar efficacy to concomitant

*Levofloxacin-Based (Salvage):*
- PPI BID + Amoxicillin BID + Levofloxacin QD × 14 days
- Rising resistance limits utility

*Rifabutin-Based (Last resort):*
- PPI BID + Amoxicillin BID + Rifabutin QD × 14 days
- Myelotoxicity risk

**Test of Cure:**
- Urea breath test or stool antigen
- ≥4 weeks after treatment completion
- ≥2 weeks off PPI
- Mandatory for complicated ulcers, MALT lymphoma

## Advanced C. difficile Topics

**Strain Typing:**
- Ribotyping (RT027 hypervirulent)
- Whole genome sequencing
- NAP1/BI/027: Binary toxin +, fluoroquinolone resistance

**Epidemiology Shifts:**
- Community-associated disease increasing (30-40%)
- Younger patients affected
- Fewer antibiotic exposures in community cases

**Recurrence Risk Factors:**
- Age >65
- Previous CDI
- Continued antibiotics
- PPI use
- Immunocompromised
- Severe initial episode

**Treatment Advances:**

*Bezlotoxumab (Zinplava):*
- Monoclonal antibody against Toxin B
- IV infusion, single dose
- Reduces recurrence by ~40%
- Indicated for high-risk patients

*Fecal Microbiota Transplantation:*
- 90% cure rate for recurrent CDI
- Multiple delivery methods: Colonoscopy, NG tube, oral capsules
- FDA regulation for investigational use
- Screening donor stool essential

*Ridinilazole (New antibiotic):*
- Narrow-spectrum activity against C. difficile
- Phase 3 trials non-inferior to vancomycin
- Lower recurrence than fidaxomicin
- Preserves microbiota

**Infection Control:**
- Contact precautions
- Private room or cohorting
- Sporicidal disinfectant (bleach)
- Antibiotic stewardship
- Probiotics not proven for prevention

## Advanced Parasitology

**Molecular Diagnosis:**
- PCR-based assays increasingly available
- Multiplex panels (GI pathogen panels)
- Detect multiple pathogens simultaneously
- Higher sensitivity than microscopy

**Geographic Distribution:**
- Giardia: Worldwide, waterborne
- Entamoeba: Tropical, endemic areas
- Cryptosporidium: Worldwide, outbreaks
- Cyclospora: Developing countries, imported produce
- Strongyloides: Tropical, subtropical
- Hookworm: Tropical/subtropical, soil-transmitted

**Special Populations:**

*HIV/AIDS:*
- Cryptosporidium: Severe, prolonged diarrhea
- Microsporidia: Enterocytozoon bieneusi
- Isospora: Cyclospora-like infection
- CMV: Colitis in advanced AIDS
- MAC: Disseminated with GI involvement

*Migrants/Refugees:*
- Strongyloides: Screen with serology
- Schistosoma: Serology, urine/stool
- Hookworm: Stool O&P
- E. histolytica: Serology and stool antigen

**Treatment Considerations:**
- Nitazoxanide: Broad anti-parasitic (Cryptosporidium, Giardia, Blastocystis)
- Albendazole: Broad-spectrum nematodes
- Ivermectin: Strongyloides, some nematodes
- Praziquantel: Cestodes, trematodes
- Paromomycin: Luminal amebicide

**Environmental Resistance:**
- Giardia cysts: Chlorination resistant, UV sensitive
- Cryptosporidium oocysts: Chlorination resistant, UV sensitive
- Entamoeba cysts: Chlorination effective
- Bacterial spores: Chlorination, heat, desiccation resistant`,
      keyTerms: [
        { term: 'A2143G mutation', definition: 'Point mutation in 23S rRNA causing clarithromycin resistance' },
        { term: 'bezlotoxumab', definition: 'Monoclonal antibody against C. difficile toxin B' },
        { term: 'ridinilazole', definition: 'Narrow-spectrum antibiotic for C. difficile; preserves microbiota' },
        { term: 'ribotyping', definition: 'Method for typing C. difficile strains' },
        { term: 'luminal amebicide', definition: 'Drug acting on intestinal lumen (paromomycin)' },
      ],
      clinicalNotes: 'Clarithromycin resistance >15%: Avoid triple therapy. FMT: FDA enforcement policy - requires IND or use of standardized stool product. Check Strongyloides serology before immunosuppression.',
    },

    5: {
      level: 5,
      summary: 'Management of GI infections requires understanding of local resistance patterns, appropriate diagnostic testing, and evidence-based treatment regimens. Guidelines from ACG and IDSA provide frameworks for care.',
      explanation: `## H. pylori Management (ACG 2017, Maastricht VI 2022)

**Testing Indications:**
- Active or past PUD
- Gastric MALT lymphoma
- Uninvestigated dyspepsia (test and treat)
- Low-grade gastric MALT lymphoma
- After endoscopic resection of early gastric cancer
- Long-term NSAID/aspirin therapy (consider)
- ITP (consider)
- Unexplained iron deficiency anemia (consider)

**Diagnostic Testing Strategy:**

*Initial Diagnosis:*
- Urea breath test (preferred) or stool antigen
- Serology ONLY if tests unavailable
- PPI withdrawal: 2 weeks before testing
- Antibiotic withdrawal: 4 weeks before testing

*Test of Cure Indications:*
- Complicated PUD (bleeding, perforation)
- Gastric MALT lymphoma
- Persistent symptoms after treatment
- Consider for: Family history of gastric cancer

**First-Line Regimen Selection (based on local resistance):**

*If clarithromycin resistance <15%:*
- Triple therapy: PPI BID + Clarithromycin BID + Amoxicillin BID × 14 days

*If clarithromycin resistance >15% (most regions):*
- Bismuth quadruple therapy: PPI BID + Bismuth QID + Tetracycline QID + Metronidazole TID-QID × 14 days
- OR Concomitant therapy: PPI BID + Clarithromycin BID + Amoxicillin BID + Metronidazole BID × 14 days

**Salvage Therapy (after 1-2 failures):**
- Levofloxacin-based: PPI BID + Amoxicillin BID + Levofloxacin QD × 14 days
- Bismuth quadruple (if not used first-line)
- High-dose dual therapy: PPI QID + Amoxicillin QID × 14 days
- Rifabutin-based: PPI BID + Amoxicillin BID + Rifabutin QD × 14 days (last resort)

**Special Considerations:**
- Penicillin allergy: Substitute amoxicillin with metronidazole
- Pregnancy: Defer treatment until after delivery (generally)
- Children: Treat if symptomatic; avoid unnecessary endoscopy

## C. difficile Management (IDSA/SHEA 2017, ACG 2021 Update)

**Diagnostic Algorithm:**
1. **Clinical suspicion:** ≥3 unformed stools in 24 hours
2. **Test:** stool toxin PCR or toxin EIA
3. **Positive in appropriate clinical context → treat**
4. **Negative but high suspicion → repeat testing (once)**

**Treatment by Episode:**

*Initial Episode:*
- **Mild-moderate:** Oral vancomycin 125 mg QID × 10 days OR fidaxomicin 200 mg BID × 10 days
- **Severe (WBC ≥15K OR Cr ≥1.5× baseline):** Vancomycin 125 mg QID × 10 days
- **Fulminant (ileus, toxic megacolon):** Vancomycin 500 mg QID/NG + IV metronidazole 500 mg TID
- Consider vancomycin enema for ileus

**First Recurrence:**
- Repeat original agent (vancomycin or fidaxomicin)
- OR tapered/pulsed vancomycin regimen

**Second or Multiple Recurrences:**
- Vancomycin tapered/pulsed regimen
- OR fidaxomicin extended
- OR fecal microbiota transplant (FMT)

*Vancomycin Taper:*
- 125 mg QID × 7-14 days
- BID × 7 days
- QD × 7 days
- Every 2-3 days × 2-8 weeks

**Adjunctive Therapies:**
- Bezlotoxumab: Monoclonal antibody, single IV dose
- Indicated: High-risk patients (age >65, recurrent CDI, immunocompromised)
- Reduces recurrence by ~40%

**Infection Prevention:**
- Contact precautions (gown, gloves)
- Private room or cohort
- Soap and water (alcohol ineffective against spores)
- Sporicidal disinfectant (bleach 1:10)
- Antibiotic stewardship
- Fluoroquinolone restriction
- Probiotics NOT recommended for prevention

## Parasitic Infection Treatment

**Giardia (CDC 2023):**
- **Preferred:** Tinidazole 2 g single dose OR secnidazole 2 g single dose
- **Alternative:** Metronidazole 500 mg TID × 5-7 days
- **Alternative:** Nitazoxanide 500 mg BID × 3 days
- Treat asymptomatic carriers in high-risk settings (food handlers, daycare)

**Entamoeba histolytica:**
- **Invasive disease:** Metronidazole 500-750 mg TID × 5-10 days
- **Luminal agent:** Paromomycin 25-35 mg/kg TID × 7 days
- **Liver abscess:** Metronidazole 500 mg TID × 7-10 days + paromomycin
- Drain large abscesses (>5 cm) if no response in 4-7 days

**Strongyloides:**
- **Uncomplicated:** Ivermectin 200 mcg/kg daily × 2 days
- **Hyperinfection:** Ivermectin until stool negative × 2 weeks
- **Alternative:** Albendazole (less effective)

**Cryptosporidium:**
- **Immunocompetent:** Nitazoxanide 500 mg BID × 3 days
- **HIV/AIDS:** ART, supportive care, nitazoxanide (limited efficacy)

**Cyclospora:**
- **Preferred:** Trimethoprim-sulfamethoxazole DS BID × 7 days
- **Alternative:** Ciprofloxacin 500 mg BID × 7 days

**Refugee Screening (CDC Guidelines):**
- Strongyloides serology (tropical/refugee)
- Schistosoma serology (Africa)
- Stool O&P × 3 for other parasites
- empiric albendazole for high prevalence

## Traveler's Diarrhea

**Prevention (CDC Yellow Book 2024):**
- **Food precautions:** Hot, cooked, peel it yourself, avoid street vendors
- **Water precautions:** Bottled, boiled, treated, or filtered
- **Prophylaxis:** Not routinely recommended
  - Consider bismuth subsalicylate (2 tablets QID)
  - Rifaximin 200 mg daily (short-term)
  - CDC not recommend routine antibiotics

**Empiric Treatment:**
- **Fluoroquinolone:** Levofloxacin 500 mg daily × 1-3 days
  - Rising resistance in SE Asia
- **Azithromycin:** 1000 mg single dose OR 500 mg daily × 3 days
  - Preferred for SE Asia, children, pregnancy
- **Rifaximin:** 200 mg TID × 3 days (non-invasive pathogens)

**Loperamide:**
- 4 mg initial, then 2 mg after loose stool (max 16 mg/day)
- Can use with antibiotics for most cases
- AVOID in dysentery (bloody diarrhea, fever)`,
      keyTerms: [
        { term: 'Maastricht VI', definition: '2022 consensus guidelines on H. pylori management' },
        { term: 'concomitant therapy', definition: 'H. pylori regimen: PPI + 3 antibiotics simultaneously' },
        { term: 'tapered vancomycin', definition: 'Gradually decreasing dose regimen for recurrent C. diff' },
        { term: 'FMT', definition: 'Fecal microbiota transplantation' },
        { term: 'bezlotoxumab', definition: 'Monoclonal antibody against C. diff toxin B; reduces recurrence' },
        { term: 'contact precautions', definition: 'Gown and gloves for C. diff patients' },
        { term: 'dysentery', definition: 'Bloody diarrhea with fever, often bacterial' },
      ],
      clinicalNotes: `Clinical Pearls:
1. H. pylori: Always check local clarithromycin resistance before choosing regimen
2. H. pylori: If clarithromycin resistance >15%, avoid triple therapy
3. H. pylori test of cure: UBT or stool antigen 4+ weeks post-treatment, 2+ weeks off PPI
4. C. diff: Stop inciting antibiotics if possible; consider IV metronidazole only for fulminant disease
5. C. diff recurrence: Treat with taper/pulsed vancomycin or fidaxomicin
6. C. diff FMT: Consider after ≥2 recurrences; screen donor stool carefully
7. CDI: Soap and water for hand hygiene; alcohol gel does not kill spores
8. Giardia: Tinidazole single dose preferred over metronidazole
9. Strongyloides: Screen before immunosuppression; hyperinfection is life-threatening
10. Traveler's diarrhea: Azithromycin preferred in SE Asia due to quinolone resistance`,
    },
  },

  media: [
    {
      id: 'hpylori-pathogenesis',
      type: 'diagram',
      filename: 'hpylori-pathogenesis.svg',
      title: 'H. pylori Pathogenesis',
      description: 'Diagram of H. pylori colonization and virulence factors',
    },
    {
      id: 'cdiff-lifecycle',
      type: 'diagram',
      filename: 'cdiff-lifecycle.svg',
      title: 'C. difficile Life Cycle',
      description: 'Vegetative cells and spores in C. difficile',
    },
  ],

  citations: [
    {
      id: 'acg-hpylori-2017',
      type: 'article',
      title: 'ACG Clinical Guideline: Treatment of Helicobacter pylori Infection',
      authors: ['Chey WD', 'Leontiadis GI', 'Howden CW'],
      source: 'American Journal of Gastroenterology 2017',
    },
    {
      id: 'idsa-cdiff-2017',
      type: 'article',
      title: 'IDSA/SHEA Guidelines for C. difficile Infection',
      authors: ['McDonald LC', 'Gerding DN', 'Johnson S'],
      source: 'Clinical Infectious Diseases 2017',
    },
    {
      id: 'cdc-parasites-2023',
      type: 'article',
      title: 'CDC Yellow Book: Parasitic Intestinal Infections',
      authors: ['CDC'],
      source: 'CDC Health Information for International Travel 2023',
    },
  ],

  crossReferences: [
    { targetId: 'condition-upper-gi', targetType: 'condition', relationship: 'related', label: 'PUD' },
    { targetId: 'condition-lower-gi', targetType: 'condition', relationship: 'related', label: 'Colitis' },
    { targetId: 'condition-liver', targetType: 'condition', relationship: 'related', label: 'Liver Abscess' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['gastroenterology', 'infectious disease', 'microbiology'],
    keywords: ['H. pylori', 'C. diff', 'giardia', 'parasites', 'diarrhea'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};
