import { EducationalContent } from '../../types';

export const fungalInfectionsOverview: EducationalContent = {
  id: 'infectious-disease-fungal-overview',
  type: 'concept',
  name: 'Fungal Infections Overview',
  alternateNames: ['Mycoses', 'Fungal Diseases', 'Medical Mycology'],

  levels: {
    1: {
      level: 1,
      summary: 'Fungal infections are caused by fungi, which are organisms like molds and yeasts that can infect the skin, nails, lungs, or even spread throughout the body.',
      explanation: `Fungi are living things that are different from bacteria and viruses. Some fungi are familiar, like mushrooms and the mold that grows on old bread. While most fungi are harmless, some can cause infections in humans.

**Types of Fungal Infections:**

*Surface Infections (Most Common):*
- Athlete's foot (between the toes)
- Ringworm (circular rash on skin - not actually a worm!)
- Jock itch (groin area)
- Nail fungus (thick, discolored nails)
- Yeast infections (Candida - in mouth, vagina, or skin folds)

*Lung Infections:*
- Can occur from breathing in fungal spores from the environment
- More common in certain areas of the country
- Examples: Valley fever (Southwest), Histoplasmosis (Ohio/Mississippi valleys)

*Serious Infections (Usually in Sick Patients):*
- People with weak immune systems are at higher risk
- Can affect blood, brain, or internal organs
- Includes Candida in the blood and Aspergillus in the lungs

**Who Gets Fungal Infections?**
- Anyone can get skin and nail fungus
- Serious infections are more common in:
  - Cancer patients
  - Transplant recipients
  - People with HIV/AIDS
  - Patients in intensive care units
  - Diabetics

**Treatment:**
- Skin infections: Antifungal creams and powders
- Nail infections: Oral medications for several months
- Serious infections: Strong antifungal medications, often given through an IV

**Prevention:**
- Keep skin clean and dry
- Do not share towels or personal items
- Wear flip-flops in public showers
- Change socks if feet get sweaty`,
      keyTerms: [
        { term: 'fungus', definition: 'A type of organism including molds and yeasts that can cause infections' },
        { term: 'yeast', definition: 'A type of single-celled fungus; Candida is a common example' },
        { term: 'mold', definition: 'A type of fungus with thread-like structures that can grow on surfaces' },
        { term: 'antifungal', definition: 'Medicine that kills fungi or stops them from growing' },
      ],
      analogies: [
        'Fungi growing on your skin is similar to mold growing on a damp surface - they both love warm, moist environments.',
        'Ringworm is called that because of its ring-shaped appearance, but it is actually a fungus, not a worm at all.',
      ],
      examples: [
        'Athletes often get foot fungus because their feet stay sweaty inside sneakers, creating a perfect environment for fungi to grow.',
        'Thrush (white patches in the mouth) is caused by Candida yeast and is common in babies and people taking antibiotics.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fungal infections (mycoses) are classified by body site and organism type, ranging from superficial dermatophyte infections to life-threatening systemic mycoses in immunocompromised patients.',
      explanation: `Fungi are eukaryotic organisms with cell walls containing chitin. Unlike bacteria, they have nuclei and organelles. Medical mycology focuses on pathogenic fungi that infect humans.

**Classification of Mycoses:**

**1. Superficial Mycoses:**
- Involve outermost skin layers and hair
- Example: Tinea versicolor (Malassezia)

**2. Cutaneous Mycoses (Dermatophytoses):**
- Infect skin, hair, nails (keratinized tissue)
- Organisms: Trichophyton, Microsporum, Epidermophyton
- Named by location:
  - Tinea capitis (scalp)
  - Tinea corporis (body - "ringworm")
  - Tinea cruris (groin - "jock itch")
  - Tinea pedis (feet - "athlete's foot")
  - Tinea unguium/onychomycosis (nails)

**3. Subcutaneous Mycoses:**
- Enter through skin trauma
- Spread locally in subcutaneous tissue
- Examples: Sporotrichosis ("rose gardener's disease"), mycetoma

**4. Endemic Mycoses:**
- Geographically restricted
- Cause primary lung infection in healthy people
- **Histoplasmosis:** Ohio/Mississippi River valleys; bird/bat droppings
- **Blastomycosis:** Great Lakes, Mississippi River
- **Coccidioidomycosis:** Southwestern US, "Valley fever"
- **Paracoccidioidomycosis:** Latin America

**5. Opportunistic Mycoses:**
- Primarily affect immunocompromised hosts
- **Candida:** Most common; mucosal and systemic
- **Aspergillus:** Lung disease, sinusitis, disseminated
- **Cryptococcus:** Meningitis in AIDS
- **Pneumocystis:** PCP (Pneumocystis pneumonia) in AIDS
- **Mucormycosis:** Diabetic ketoacidosis, transplant patients

**Fungal Biology:**

*Morphology:*
- Yeasts: Single cells that reproduce by budding
- Molds: Multicellular, form hyphae (thread-like structures)
- Dimorphic: Both forms depending on temperature (37C = yeast, 25C = mold)

*Cell Wall:*
- Chitin and beta-glucan (targets for antifungals)
- Ergosterol in membrane (target for azoles, amphotericin)

**Risk Factors for Invasive Fungal Infections:**
- Neutropenia (low white blood cells)
- Organ transplant / immunosuppression
- HIV/AIDS (especially low CD4)
- Hematologic malignancies
- ICU admission, central lines
- Broad-spectrum antibiotics
- Diabetes (especially DKA for mucormycosis)`,
      keyTerms: [
        { term: 'dermatophyte', definition: 'Fungi that infect keratinized tissues (skin, hair, nails); includes Trichophyton, Microsporum' },
        { term: 'dimorphic fungus', definition: 'Fungus existing as mold in environment and yeast in body; includes Histoplasma, Blastomyces' },
        { term: 'hyphae', definition: 'Thread-like filaments forming the body of mold fungi' },
        { term: 'opportunistic infection', definition: 'Infection that primarily affects people with weakened immune systems' },
        { term: 'ergosterol', definition: 'Sterol in fungal cell membrane (like cholesterol in humans); target for antifungals' },
      ],
      analogies: [
        'Dimorphic fungi are like transformers - they change shape depending on their environment (mold in nature, yeast in your warm body).',
        'Endemic mycoses are like regional foods - you find them in specific geographic areas, not everywhere.',
      ],
    },
    3: {
      level: 3,
      summary: 'Fungal pathogenesis involves specific virulence factors, immune evasion, and host-pathogen interactions, with diagnosis requiring appropriate specimen collection, direct examination, culture, and molecular methods.',
      explanation: `Clinical mycology requires understanding of fungal virulence, diagnostic approaches, and antifungal pharmacology.

**Fungal Virulence Mechanisms:**

*Candida Species:*
- Adhesins for mucosal attachment
- Biofilm formation on catheters
- Yeast-to-hyphal transition (invasive form)
- Secreted aspartyl proteases (SAPs)
- Phenotypic switching

*Aspergillus:*
- Small conidia (spores) inhaled deep into lungs
- Germination and hyphal invasion of tissue
- Angioinvasion (blood vessel invasion)
- Gliotoxin (immunosuppressive toxin)

*Cryptococcus:*
- Polysaccharide capsule (antiphagocytic)
- Melanin production (antioxidant)
- Tropism for CNS

*Histoplasma:*
- Survives within macrophages
- Intracellular replication
- Cell-mediated immunity required for control

**Diagnostic Approaches:**

*Direct Examination:*
- KOH prep: Dissolves keratin, visualizes hyphae
- India ink: Negative staining of Cryptococcus capsule
- Calcofluor white: Fluorescent staining of chitin

*Culture:*
- Sabouraud dextrose agar (standard)
- Blood cultures: Candida often positive; Aspergillus rarely
- Tissue culture for invasive molds
- Biosafety considerations for endemic fungi

*Antigen/Antibody Testing:*
- Cryptococcal antigen: CSF and serum (highly sensitive)
- Histoplasma antigen: Urine, serum
- Aspergillus galactomannan: Serum, BAL
- Beta-D-glucan: Pan-fungal (except Mucorales, Crypto)
- Coccidioides serology: IgM, IgG

*Molecular:*
- PCR: Increasingly available
- MALDI-TOF: Rapid species identification
- Fungal identification from tissue

**Major Clinical Syndromes:**

*Invasive Candidiasis:*
- Candidemia: Blood cultures positive
- Deep-seated: Hepatosplenic, endocarditis, osteomyelitis
- Risk factors: Central lines, TPN, broad-spectrum antibiotics, neutropenia
- Species matter: C. albicans, C. glabrata (azole resistance), C. auris (MDR)

*Invasive Aspergillosis:*
- Pulmonary: Nodules, halo sign (early), air crescent (late)
- Sinusitis: Extension to orbit, brain
- Risk: Prolonged neutropenia, GVHD, high-dose steroids
- Diagnosis: Galactomannan, CT findings, BAL, tissue

*Cryptococcal Meningitis:*
- HIV with CD4 <100 most common
- Subacute onset, headache, fever
- Elevated opening pressure (requires serial LPs)
- Diagnosis: CSF cryptococcal antigen, India ink

*Pneumocystis Pneumonia (PCP):*
- HIV with CD4 <200 (prophylaxis indicated)
- Bilateral interstitial infiltrates
- LDH elevated, hypoxemia with exercise
- Diagnosis: Induced sputum or BAL, PCR or stain

*Mucormycosis:*
- Rhino-orbital-cerebral: DKA, deferoxamine
- Pulmonary: Neutropenia, transplant
- Aggressive tissue necrosis
- Treatment: Surgery + amphotericin`,
      keyTerms: [
        { term: 'galactomannan', definition: 'Aspergillus cell wall component detectable in blood/BAL; used for diagnosis and monitoring' },
        { term: 'beta-D-glucan', definition: 'Fungal cell wall component; panfungal marker (negative in Mucorales, Cryptococcus)' },
        { term: 'halo sign', definition: 'CT finding in invasive pulmonary aspergillosis showing ground-glass halo around nodule' },
        { term: 'angioinvasion', definition: 'Fungal invasion of blood vessels causing thrombosis and infarction; characteristic of Aspergillus, Mucor' },
        { term: 'C. auris', definition: 'Emerging multidrug-resistant Candida species with high mortality and healthcare transmission' },
      ],
      clinicalNotes: 'For suspected cryptococcal meningitis, always measure opening pressure - elevated pressure requires therapeutic drainage. Serum cryptococcal antigen can be positive before symptoms in HIV patients (screen if CD4 <100). Beta-D-glucan is not useful for Mucormycosis or Cryptococcus - use clinical suspicion and tissue diagnosis.',
    },
    4: {
      level: 4,
      summary: 'Management of invasive fungal infections requires risk stratification, appropriate empiric therapy, de-escalation based on diagnostics, and antifungal stewardship to optimize outcomes and minimize resistance.',
      explanation: `Advanced management of fungal infections integrates risk assessment, diagnostic-driven therapy, and antifungal pharmacology.

**Antifungal Classes:**

*Polyenes (Amphotericin B):*
- Mechanism: Binds ergosterol, creates membrane pores
- Spectrum: Broadest (most fungi including Mucorales)
- Formulations:
  - Deoxycholate (conventional): Nephrotoxic, infusion reactions
  - Lipid formulations: Reduced nephrotoxicity, higher doses possible
- Uses: Severe infections, Mucormycosis, Crypto meningitis induction

*Azoles:*
- Mechanism: Inhibit 14-alpha-demethylase (ergosterol synthesis)
- **Fluconazole:** Candida, Crypto (not molds)
- **Itraconazole:** Histoplasma, Blastomycosis, Sporotrichosis
- **Voriconazole:** Aspergillus (first-line), molds
- **Posaconazole:** Broad, including Mucorales prophylaxis
- **Isavuconazole:** Aspergillus, Mucorales; fewer interactions
- Drug interactions: CYP450 (especially 3A4)

*Echinocandins:*
- Mechanism: Inhibit beta-glucan synthesis
- **Caspofungin, micafungin, anidulafungin**
- Spectrum: Candida (including most azole-resistant), Aspergillus (not first-line monotherapy)
- Not active: Cryptococcus, Mucormycosis, endemic fungi
- Well-tolerated, few drug interactions

*Flucytosine (5-FC):*
- Mechanism: Inhibits DNA/RNA synthesis
- Uses: Combination for Crypto meningitis, Candida endocarditis
- Toxicity: Myelosuppression (monitor levels)

**Treatment by Syndrome:**

*Candidemia:*
- Echinocandin first-line (micafungin 100mg, caspofungin 70/50mg, anidulafungin 200/100mg)
- Fluconazole step-down if susceptible, stable
- Remove central lines if possible
- Ophthalmology consult for endophthalmitis
- Duration: 14 days from first negative culture
- ID consult improves outcomes

*Invasive Aspergillosis:*
- Voriconazole first-line (6mg/kg BID x2, then 4mg/kg BID)
- Alternatives: Isavuconazole, liposomal amphotericin
- Combination therapy: No proven benefit for routine use
- Duration: Minimum 6-12 weeks, until immune recovery
- Monitor voriconazole levels (target 1-5 mcg/mL)

*Cryptococcal Meningitis (HIV):*
- Induction: Amphotericin B + flucytosine x 2 weeks
- Consolidation: Fluconazole 400mg x 8 weeks
- Maintenance: Fluconazole 200mg until immune recovery
- Manage elevated ICP: Serial LPs or drain

*Mucormycosis:*
- Surgical debridement essential
- Liposomal amphotericin B 5-10 mg/kg
- Isavuconazole alternative
- Control underlying condition (DKA, reduce immunosuppression)

*Endemic Mycoses:*
- Mild-moderate: Itraconazole
- Severe/disseminated: Amphotericin B induction, then itraconazole
- Duration: 6-12 months typical

**Prophylaxis Strategies:**

*Neutropenia/HSCT:*
- Fluconazole: Anti-Candida only
- Posaconazole or voriconazole: Adds mold coverage
- Duration: Until neutrophil recovery

*HIV (CD4 <200):*
- TMP-SMX: Primary PCP prophylaxis
- Fluconazole: Consider in endemic Coccidioides areas

**Antifungal Stewardship:**
- Diagnostics to guide therapy
- De-escalation when possible
- TDM for voriconazole, posaconazole
- Duration optimization`,
      keyTerms: [
        { term: 'echinocandin', definition: 'Antifungal class inhibiting beta-glucan synthesis; first-line for candidemia' },
        { term: 'azole', definition: 'Antifungal class inhibiting ergosterol synthesis; various spectra depending on agent' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug levels to optimize efficacy and minimize toxicity; essential for voriconazole' },
        { term: 'liposomal amphotericin', definition: 'Lipid formulation of amphotericin B with reduced nephrotoxicity; enables higher dosing' },
        { term: 'induction-consolidation-maintenance', definition: 'Phased antifungal therapy approach for cryptococcal meningitis' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Voriconazole TDM: Trough 1-5 mcg/mL; toxicity common at higher levels
- Fluconazole does NOT cover molds (Aspergillus, Mucorales)
- Echinocandins do NOT cover Crypto, Mucor, or endemic fungi
- Candida glabrata: Higher azole resistance, echinocandin preferred
- Mucormycosis: Amphotericin + surgery; voriconazole NOT effective
- PCP prophylaxis: TMP-SMX also covers Toxoplasma; dapsone or pentamidine alternatives`,
    },
    5: {
      level: 5,
      summary: 'Contemporary medical mycology integrates molecular diagnostics, antifungal pharmacokinetic/pharmacodynamic optimization, emerging resistance surveillance, and novel therapeutic approaches for invasive fungal diseases in complex patient populations.',
      explanation: `Expert-level mycology requires integration of molecular epidemiology, precision antifungal therapy, and management of resistant organisms.

**Molecular Diagnostics and Surveillance:**

*Next-Generation Approaches:*
- Multiplex PCR panels for blood and tissue
- T2MR (T2Candida): Direct detection from blood
- Metagenomic sequencing for culture-negative infections
- MALDI-TOF for rapid species identification

*Resistance Detection:*
- Echinocandin resistance: FKS1/FKS2 gene mutations
- Azole resistance: ERG11 mutations, efflux pumps
- Antifungal susceptibility testing: CLSI and EUCAST methods
- Epidemiological cutoff values (ECVs) vs. clinical breakpoints

*Candida auris:*
- Multidrug resistant: Often azole, ampho, and sometimes echinocandin resistant
- Healthcare transmission: Environmental persistence
- Infection control: Contact precautions, environmental cleaning
- Treatment: Often echinocandin; may need combination

**Pharmacokinetic Optimization:**

*Voriconazole:*
- Highly variable metabolism (CYP2C19 polymorphisms)
- TDM essential: Target trough 1-5.5 mcg/mL
- Drug interactions: Reduce sirolimus, cyclosporine dosing
- Phototoxicity: Long-term use, SCC risk

*Posaconazole:*
- Delayed-release tablets preferred (better absorption)
- TDM recommended for prophylaxis: Target trough >0.7-1 mcg/mL
- Drug interactions similar to voriconazole

*Isavuconazole:*
- Prodrug (isavuconazonium sulfate)
- Less variable PK than voriconazole
- Active against Mucorales (unlike voriconazole)
- QTc shortening (unique among azoles)

*Echinocandins:*
- Dose-escalation for Candida glabrata and CNS penetration
- Extended dosing intervals in renal impairment
- Rezafungin: Novel long-acting echinocandin (weekly dosing)

**Complex Clinical Scenarios:**

*Breakthrough Invasive Fungal Infection:*
- Occurs on prophylaxis or treatment
- Consider: Resistant organism, inadequate drug levels, new pathogen
- Management: Broaden/change class, TDM, source control

*Aspergillus in COPD/Non-Neutropenic:*
- Chronic pulmonary aspergillosis
- Aspergilloma: Fungus ball in cavity
- Allergic bronchopulmonary aspergillosis (ABPA)
- Treatment differs from invasive disease

*Combination Antifungal Therapy:*
- Crypto meningitis: Ampho + 5-FC (proven benefit)
- Aspergillosis: Vori + echinocandin (no clear benefit in RCTs)
- Salvage: Consider adding different mechanism
- Synergy vs. antagonism varies by organism and drugs

*Candida Endocarditis/Osteomyelitis:*
- Prolonged therapy (6+ weeks post-surgery)
- Surgery often needed
- Step-down to fluconazole if susceptible and stable

**Emerging Fungal Threats:**

*Azole-Resistant Aspergillus fumigatus:*
- Environmental resistance: Agricultural azole use
- TR34/L98H and TR46/Y121F/T289A mutations
- Implications: Treatment failure, need for susceptibility testing

*Antifungal Pipeline:*
- Ibrexafungerp: Oral glucan synthase inhibitor
- Fosmanogepix: GPI-anchored protein inhibitor
- Olorofim: DHODH inhibitor (novel target)
- Encochleated amphotericin: Oral formulation

**Special Populations:**

*Hematopoietic Stem Cell Transplant:*
- Pre-engraftment: Candida risk
- Post-engraftment: Aspergillus, Mucor if GVHD
- Prophylaxis duration and agent based on risk

*Solid Organ Transplant:*
- Endemic fungi in travelers/endemic areas
- Candida early post-transplant
- Aspergillus in lung transplant
- Adjust immunosuppression for drug interactions

*ICU Patients:*
- Candida colonization vs. invasive disease
- Beta-D-glucan and Candida score for decision-making
- Antifungal stewardship to reduce overuse

**Stewardship and Resistance Prevention:**
- Diagnostics-driven therapy
- Narrow spectrum when possible
- Duration optimization
- TDM for azoles
- Surveillance cultures in high-risk patients`,
      keyTerms: [
        { term: 'FKS mutation', definition: 'Mutation in beta-glucan synthase gene conferring echinocandin resistance; most common in C. glabrata' },
        { term: 'TR34/L98H', definition: 'Azole resistance mutation in A. fumigatus cyp51A gene, often environmental origin' },
        { term: 'epidemiological cutoff value (ECV)', definition: 'MIC separating wild-type from strains with acquired resistance mechanisms' },
        { term: 'ibrexafungerp', definition: 'First-in-class oral glucan synthase inhibitor; approved for vulvovaginal candidiasis' },
        { term: 'breakthrough fungal infection', definition: 'Invasive fungal infection occurring while on antifungal prophylaxis or therapy' },
      ],
      clinicalNotes: `**Expert Pearls:**
- Candida auris: Check local epidemiology; may need combination therapy if pan-resistant
- Voriconazole: CYP2C19 poor metabolizers have higher levels; ultra-rapid have subtherapeutic
- Aspergillus resistance: Consider azole-resistant strains if agricultural azole exposure or treatment failure
- Endemic fungi: May not grow on standard media; specify request to lab
- Mucor vs. Aspergillus: Mucor has wide aseptate hyphae; Aspergillus has septate hyphae with acute branching
- Isavuconazole: Consider for Mucor or when voriconazole interactions problematic`,
    },
  },

  media: [
    {
      id: 'fungal-classification',
      type: 'diagram',
      filename: 'fungal-classification.svg',
      title: 'Classification of Fungal Infections',
      description: 'Overview of superficial, cutaneous, subcutaneous, endemic, and opportunistic mycoses',
    },
    {
      id: 'antifungal-targets',
      type: 'diagram',
      filename: 'antifungal-targets.svg',
      title: 'Antifungal Drug Targets',
      description: 'Diagram showing targets of different antifungal classes in fungal cell',
    },
  ],
  citations: [
    {
      id: 'idsa-candidiasis-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline for the Management of Candidiasis: 2016 Update by IDSA',
      authors: ['Pappas PG', 'Kauffman CA', 'Andes DR', 'et al.'],
      source: 'Clinical Infectious Diseases',
      url: 'https://doi.org/10.1093/cid/civ933',
    },
    {
      id: 'idsa-aspergillosis-guidelines',
      type: 'article',
      title: 'Practice Guidelines for the Diagnosis and Management of Aspergillosis: 2016 Update by IDSA',
      authors: ['Patterson TF', 'Thompson GR', 'Denning DW', 'et al.'],
      source: 'Clinical Infectious Diseases',
      url: 'https://doi.org/10.1093/cid/ciw326',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-antibiotic-stewardship', targetType: 'topic', relationship: 'related', label: 'Antimicrobial Stewardship' },
    { targetId: 'infectious-disease-hiv', targetType: 'topic', relationship: 'related', label: 'HIV/AIDS' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],
  tags: {
    systems: ['immune', 'respiratory', 'integumentary'],
    topics: ['infectious-disease', 'mycology', 'pharmacology'],
    keywords: ['fungal infection', 'Candida', 'Aspergillus', 'Cryptococcus', 'antifungal', 'azole', 'echinocandin'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fungalInfectionsOverview;
