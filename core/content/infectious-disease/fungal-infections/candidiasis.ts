import { EducationalContent } from '../../types';

export const CANDIDIASIS: EducationalContent = {
  id: 'infectious-disease-candidiasis',
  type: 'condition',
  name: 'Candidiasis',
  nameEs: 'Candidiasis',
  alternateNames: ['Yeast Infection', 'Thrush', 'Candida Infection', 'Moniliasis'],
  levels: {
    1: {
      level: 1,
      summary: 'Candidiasis is an infection caused by a yeast called Candida that normally lives on your skin and inside your body but can overgrow and cause problems like white patches in the mouth (thrush) or itchy rashes.',
      explanation: `Your body has tiny living things called yeast that normally live on your skin and inside your body without causing harm. Candida is the most common type of yeast. Most of the time, your immune system and good bacteria keep Candida under control.

**When Candida Causes Problems:**
Sometimes Candida grows too much and causes an infection. This can happen when:
- You take antibiotics that kill the good bacteria keeping yeast in check
- Your immune system is weakened
- You have diabetes with high blood sugar
- The area stays warm and moist for too long

**Common Types of Candida Infections:**
- **Oral thrush**: White patches in the mouth that look like cottage cheese
- **Skin yeast infections**: Red, itchy rashes in skin folds (under arms, groin)
- **Vaginal yeast infections**: Itching and white discharge
- **Diaper rash**: Bright red rash with small red spots around the edges
- **Nail infections**: Thick, discolored nails

**Treatment:**
Most yeast infections are treated with antifungal medicines - creams for skin infections, lozenges for mouth infections, or pills for more serious infections.

**Prevention:**
- Keep skin clean and dry
- Wear breathable clothing
- Only take antibiotics when prescribed
- Control blood sugar if you have diabetes`,
      keyTerms: [
        { term: 'Candida', definition: 'A type of yeast that normally lives in your body but can overgrow and cause infection' },
        { term: 'Thrush', definition: 'A Candida infection in the mouth that creates white patches' },
        { term: 'Antifungal', definition: 'A medicine that kills or stops the growth of fungi like yeast' },
        { term: 'Yeast', definition: 'A tiny single-celled fungus that can live in and on the human body' },
      ],
      analogies: [
        'Candida is like weeds in a garden - normally kept in check by other plants, but they can take over if the balance is disrupted.',
        'Antibiotics killing good bacteria is like removing the guard dogs from a house, letting the mice (yeast) run free.',
      ],
      examples: [
        'A baby develops white patches on the tongue and inside cheeks after antibiotic use - this is oral thrush.',
        'A woman on antibiotics for a UTI develops vaginal itching and discharge from a yeast infection.',
      ],
      patientCounselingPoints: [
        'Most yeast infections are easily treated with antifungal medicines.',
        'Eating yogurt with live cultures may help prevent yeast infections during antibiotic use.',
        'See a doctor if symptoms do not improve with over-the-counter treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Candida species are dimorphic fungi that cause infections ranging from superficial mucocutaneous disease to life-threatening invasive candidiasis, with C. albicans being the most common species and risk factors including immunosuppression, broad-spectrum antibiotics, and central venous catheters.',
      explanation: `Candida is a genus of yeast-like fungi with over 200 species, of which approximately 20 cause human disease. Candida species are part of the normal human flora of the GI tract, skin, and genitourinary system.

**Candida Species of Clinical Importance:**

| Species | Key Features |
|---------|-------------|
| C. albicans | Most common; forms germ tubes and true hyphae; susceptible to fluconazole |
| C. glabrata | Second most common; intrinsically less susceptible to fluconazole; forms only yeast |
| C. parapsilosis | Associated with catheter and TPN infections; biofilm formation |
| C. tropicalis | Common in neutropenic patients; generally fluconazole-susceptible |
| C. auris | Emerging multidrug-resistant species; often resistant to fluconazole, sometimes to echinocandins and amphotericin B; environmental persistence; healthcare-associated outbreaks |
| C. krusei | Intrinsically resistant to fluconazole |

**Clinical Presentations:**

*Mucocutaneous Candidiasis:*
- Oropharyngeal (thrush): Common in HIV/AIDS, denture wearers, inhaled corticosteroid users
- Esophageal: AIDS-defining illness; odynophagia, dysphagia
- Vulvovaginal: 75% of women experience at least once; recurrent in diabetes, pregnancy
- Cutaneous: Intertrigo, diaper dermatitis, paronychia
- Chronic mucocutaneous candidiasis: T-cell deficiency (AIRE mutations, STAT1 gain-of-function)

*Invasive Candidiasis:*
- Candidemia: Candida in the bloodstream; mortality 25-40%
- Deep-seated: Hepatosplenic (chronic disseminated), endocarditis, endophthalmitis, osteomyelitis
- Risk factors: Central venous catheters, TPN, broad-spectrum antibiotics, abdominal surgery, ICU stay, neutropenia

**Treatment:**
- Mucocutaneous: Topical or oral azoles (fluconazole, clotrimazole)
- Invasive: Echinocandins (micafungin, caspofungin, anidulafungin) as first-line; fluconazole for step-down
- C. auris: Echinocandins preferred; susceptibility testing essential
- Line removal for candidemia with central venous catheters
- Ophthalmologic exam for all candidemia patients`,
      keyTerms: [
        { term: 'Candidemia', definition: 'The presence of Candida species in the bloodstream, a serious infection with significant mortality' },
        { term: 'Echinocandin', definition: 'A class of antifungal drugs (micafungin, caspofungin) that inhibit cell wall synthesis; first-line for invasive candidiasis' },
        { term: 'C. auris', definition: 'An emerging multidrug-resistant Candida species causing healthcare-associated outbreaks with high mortality' },
        { term: 'Mucocutaneous', definition: 'Affecting the mucous membranes and skin, as opposed to deep/invasive infection' },
        { term: 'Germ tube', definition: 'A diagnostic feature of C. albicans: a tubular outgrowth from a yeast cell when incubated in serum' },
      ],
      examples: [
        'An ICU patient with a central line and broad-spectrum antibiotics develops candidemia treated with micafungin.',
        'An HIV patient with CD4 count below 200 develops esophageal candidiasis presenting as painful swallowing.',
      ],
      patientCounselingPoints: [
        'Invasive Candida infections are serious but treatable with IV antifungal medications.',
        'If you have a central line and develop fever, notify your care team immediately.',
        'Complete the full course of antifungal treatment even if symptoms improve.',
      ],
    },
    3: {
      level: 3,
      summary: 'Candida pathogenesis involves morphologic switching, adhesin expression, biofilm formation, and secreted aspartyl proteinases; treatment selection is guided by species identification, susceptibility patterns, and clinical syndrome with echinocandins as first-line therapy for invasive disease.',
      explanation: `Understanding Candida virulence mechanisms, host immune responses, and antifungal pharmacology is essential for managing candidal infections.

**Virulence Factors:**

*Morphologic Switching:*
- C. albicans transitions between yeast (commensalism) and hyphal forms (tissue invasion)
- Regulated by temperature, pH, CO2, serum, and quorum sensing (farnesol)
- Hyphal form: Enhanced tissue penetration, immune evasion, escape from macrophages
- White-opaque switching: Affects mating, virulence, and immune recognition

*Adhesins and Biofilm:*
- ALS (agglutinin-like sequence) family: Key adhesins for mucosal and abiotic surface attachment
- Hwp1 (hyphal wall protein 1): Covalently binds to host epithelial cells
- Biofilm formation on catheters: Structured community with extracellular matrix; 1000x increased antifungal resistance; echinocandins retain activity against biofilm

*Secreted Enzymes:*
- Secreted aspartyl proteinases (SAPs 1-10): Tissue degradation, immune evasion
- Phospholipases: Membrane damage
- Lipases: Nutrient acquisition

**Host Immune Response:**
- Innate: Neutrophils (critical - neutropenia = major risk factor), macrophages, dendritic cells
- Pattern recognition: Dectin-1 (beta-glucan), Dectin-2 (mannans), TLR2/4, mannose receptor
- Th17 response: IL-17 critical for mucocutaneous defense (STAT1 GOF, AIRE deficiency impair Th17)
- Th1 response: IFN-gamma important for disseminated disease clearance

**Antifungal Pharmacology:**

| Drug Class | Target | Spectrum | Key Considerations |
|-----------|--------|----------|-------------------|
| Azoles (fluconazole, voriconazole) | Ergosterol synthesis (14-alpha-demethylase) | Variable by species | Drug interactions (CYP450); C. krusei intrinsically resistant to fluconazole |
| Echinocandins (micafungin, caspofungin) | Beta-1,3-glucan synthase (cell wall) | Broad Candida activity | First-line for invasive; poor CNS penetration; FKS mutations = resistance |
| Amphotericin B | Ergosterol binding (membrane disruption) | Broadest spectrum | Nephrotoxicity; lipid formulations reduce toxicity; reserve for refractory cases |
| Flucytosine | Thymidylate synthase (DNA/RNA) | Narrow; synergistic with amphoB | Bone marrow toxicity; resistance if used alone; combination for CNS/endocarditis |

**Diagnosis:**
- Blood cultures: Gold standard for candidemia; sensitivity only ~50%
- Beta-D-glucan: Pan-fungal biomarker (not specific to Candida); elevated in invasive candidiasis
- T2Candida panel: Rapid PCR-based detection from blood (detects 5 common species in ~5 hours)
- MALDI-TOF: Rapid species identification from positive blood cultures
- Susceptibility testing: CLSI or EUCAST breakpoints; essential for non-albicans species`,
      keyTerms: [
        { term: 'Morphologic switching', definition: 'The ability of C. albicans to transition between yeast and hyphal forms, with hyphae associated with tissue invasion and virulence' },
        { term: 'Beta-D-glucan', definition: 'A cell wall polysaccharide component of most fungi; serum testing serves as a pan-fungal biomarker for invasive fungal infections' },
        { term: 'FKS mutation', definition: 'Mutations in the FKS1/FKS2 genes encoding beta-1,3-glucan synthase that confer echinocandin resistance in Candida species' },
        { term: 'Dectin-1', definition: 'A pattern recognition receptor on innate immune cells that detects fungal beta-glucan and activates antifungal immune responses' },
        { term: 'T2Candida', definition: 'A rapid molecular diagnostic that detects Candida species directly from blood using T2 magnetic resonance technology' },
      ],
      clinicalNotes: 'Echinocandins are first-line for invasive candidiasis/candidemia. Step-down to fluconazole is appropriate once species identification and susceptibility confirm azole susceptibility and the patient is clinically stable. Source control (catheter removal) is critical. All candidemia patients require ophthalmologic evaluation for endophthalmitis. Duration of treatment is typically 14 days after first negative blood culture. Beta-D-glucan can assist early diagnosis but has many causes of false-positive results.',
    },
    4: {
      level: 4,
      summary: 'Advanced candidiasis management integrates understanding of echinocandin resistance mechanisms (FKS hot-spot mutations), Candida auris infection control challenges, biomarker-guided diagnostics, and the immunopathogenesis of chronic mucocutaneous candidiasis involving STAT1/STAT3/CARD9/IL-17 pathway defects.',
      explanation: `Graduate-level understanding of candidiasis encompasses molecular resistance, emerging species threats, and host genetic susceptibility.

**Echinocandin Resistance:**
- FKS1/FKS2 hot-spot mutations: Amino acid substitutions in beta-1,3-glucan synthase
- C. glabrata: Highest risk of echinocandin resistance (3-15% in some centers); FKS1 S629P, FKS2 S663P
- Multidrug-resistant C. glabrata: Azole + echinocandin resistance; treatment with amphotericin B
- Mechanism: Increased MIC to all three echinocandins (class effect)
- Risk factors for resistance: Prior echinocandin exposure, abdominal infections, prolonged treatment

**Candida auris - Critical Emerging Threat:**
- First identified in 2009 (Japan); now global
- Unique features: Environmental persistence (survives on surfaces for weeks), transmission between patients, healthcare outbreaks
- Resistance profile: 90% fluconazole-resistant, 30% amphotericin B-resistant, 5% echinocandin-resistant; pan-resistant isolates reported
- Identification challenge: Misidentified as C. haemulonii by conventional methods; MALDI-TOF or molecular methods required
- Infection control: Contact precautions, dedicated equipment, terminal cleaning with EPA List P disinfectants, patient screening
- Treatment: Echinocandins first-line; high-dose amphotericin B if echinocandin-resistant; combination therapy for pan-resistant

**Inborn Errors of Immunity Predisposing to Candidiasis:**

| Genetic Defect | Mechanism | Clinical Phenotype |
|---------------|-----------|-------------------|
| STAT1 gain-of-function | Enhanced STAT1 signaling impairs Th17 development | Chronic mucocutaneous candidiasis, autoimmunity |
| STAT3 loss-of-function (Job syndrome) | Impaired Th17 differentiation | CMC, recurrent staph infections, elevated IgE |
| AIRE deficiency (APS-1) | Autoantibodies against IL-17A/IL-17F | CMC, hypoparathyroidism, adrenal insufficiency |
| CARD9 deficiency | Impaired Dectin-1/2 signaling | Deep dermatophytosis, CNS candidiasis |
| IL-17RA/IL-17F deficiency | Disrupted IL-17 signaling | CMC |
| Dectin-1 polymorphisms | Reduced beta-glucan recognition | Increased mucocutaneous candidiasis susceptibility |

**Biomarker-Guided Strategies:**
- Beta-D-glucan: Sensitivity 65-80% for invasive candidiasis; false positives with dialysis, IVIG, albumin, gauze packing
- Mannan/anti-mannan antibodies: Complementary markers (combined sensitivity ~80%)
- T2Candida: Sensitivity ~90% including culture-negative cases; species-level ID within hours
- Procalcitonin: May help distinguish bacterial from fungal sepsis (lower in candidemia)
- Candidalysin: C. albicans peptide toxin; emerging biomarker research

**Antifungal Stewardship in Candidemia:**
- Empiric vs. targeted therapy: Avoid unnecessary antifungal prophylaxis/empiric therapy in non-high-risk patients
- De-escalation to fluconazole when appropriate reduces costs and selection pressure
- Antifungal stewardship programs reduce inappropriate azole and echinocandin use by 20-40%`,
      keyTerms: [
        { term: 'FKS hot-spot mutation', definition: 'Specific amino acid substitutions in the FKS1 or FKS2 genes that confer reduced susceptibility to all echinocandins' },
        { term: 'Candida auris', definition: 'An emerging multidrug-resistant yeast with unique environmental persistence and healthcare transmission potential, representing a critical public health threat' },
        { term: 'STAT1 gain-of-function', definition: 'A genetic defect causing enhanced STAT1 signaling that impairs Th17 immune responses, predisposing to chronic mucocutaneous candidiasis' },
        { term: 'Candidalysin', definition: 'A peptide toxin secreted by C. albicans hyphae that damages epithelial cell membranes and triggers the innate immune response' },
        { term: 'Chronic mucocutaneous candidiasis', definition: 'A primary immunodeficiency characterized by persistent or recurrent Candida infections of the skin, nails, and mucous membranes due to defective Th17 immunity' },
      ],
      clinicalNotes: 'Echinocandin resistance should be suspected in C. glabrata with prior echinocandin exposure or breakthrough infection. C. auris requires molecular identification and strict infection control measures. Genetic evaluation should be considered in patients with chronic mucocutaneous candidiasis, especially children with persistent oral/nail disease. Antifungal stewardship programs are increasingly important as resistance emerges across Candida species.',
    },
    5: {
      level: 5,
      summary: 'Expert-level candidiasis management encompasses novel antifungal development (ibrexafungerp, rezafungin, fosmanogepix), the molecular epidemiology of C. auris clades, host-directed immunotherapies, and the design of clinical trials for invasive candidiasis including composite endpoints and adaptive platforms.',
      explanation: `Expert knowledge of candidiasis integrates emerging therapeutics, molecular epidemiology, and translational research.

**Novel Antifungal Agents:**

*Ibrexafungerp (Brexafemme/Orifungal):*
- First-in-class triterpenoid antifungal targeting beta-1,3-glucan synthase at a different site than echinocandins
- Oral bioavailability (unlike echinocandins which are IV only)
- Active against echinocandin-resistant Candida (different FKS binding site)
- FDA-approved for vulvovaginal candidiasis; under investigation for invasive candidiasis
- Active against C. auris including some echinocandin-resistant isolates

*Rezafungin:*
- Next-generation echinocandin with extended half-life (once-weekly dosing)
- Stable to FKS1 S645P mutation (improved activity vs. some echinocandin-resistant strains)
- FDA-approved for candidemia/invasive candidiasis (2023)
- Prophylaxis indication in allogeneic HSCT recipients

*Fosmanogepix (APX001):*
- Prodrug of manogepix; first-in-class Gwt1 inhibitor (blocks GPI-anchored protein maturation)
- Novel mechanism: Disrupts cell wall integrity and biofilm formation
- Broad spectrum: Active against Candida (including C. auris), Aspergillus, rare molds
- Phase 2 trials completed for invasive candidiasis; breakthrough therapy designation

*Oteseconazole:*
- Tetrazole antifungal (structurally distinct from azoles) with selective CYP51 inhibition
- Reduced human CYP450 inhibition (fewer drug interactions)
- FDA-approved for recurrent vulvovaginal candidiasis

**Molecular Epidemiology of C. auris:**

*Clades (geographic lineages):*
- Clade I (South Asian): Most common globally; variable drug resistance
- Clade II (East Asian): Often susceptible to antifungals; less virulent
- Clade III (African): High rates of fluconazole resistance
- Clade IV (South American): Limited data; variable resistance
- Clade V (Iranian): Recently described
- WGS-based clade identification informs epidemiology and outbreak investigation
- Clonal transmission within healthcare facilities demonstrated by SNP analysis

**Immunotherapeutic Approaches:**
- Recombinant cytokines: IFN-gamma, GM-CSF as adjunctive therapy in refractory invasive candidiasis
- Anti-Candida vaccines in development: NDV-3A (targeting Als3 adhesin) showed efficacy in reducing S. aureus nasal colonization and vulvovaginal candidiasis in phase 2 trials
- Trained immunity: Beta-glucan exposure induces epigenetic reprogramming of monocytes (H3K4me3 at TNF/IL-6 promoters) enhancing subsequent antifungal responses
- Checkpoint modulation: PD-1/PD-L1 pathway involvement in fungal sepsis immunoparalysis

**Clinical Trial Design Considerations:**
- FDA guidance: 30-day all-cause mortality as primary endpoint for candidemia trials
- Composite endpoints: Clinical success (resolution of signs/symptoms + mycological eradication)
- Adaptive platform trials: Multiple agents tested simultaneously with response-adaptive randomization
- Biomarker-enriched trials: Beta-D-glucan or T2Candida for enrollment and response monitoring`,
      keyTerms: [
        { term: 'Ibrexafungerp', definition: 'A first-in-class oral triterpenoid antifungal that targets glucan synthase at a site distinct from echinocandins, active against echinocandin-resistant Candida' },
        { term: 'Rezafungin', definition: 'A next-generation echinocandin with extended half-life enabling once-weekly dosing, approved for invasive candidiasis' },
        { term: 'Fosmanogepix', definition: 'A novel Gwt1 inhibitor disrupting GPI-anchored protein maturation, with broad-spectrum antifungal activity including against C. auris' },
        { term: 'Trained immunity', definition: 'Epigenetic reprogramming of innate immune cells by beta-glucan exposure that enhances subsequent antifungal responses through histone modifications' },
        { term: 'C. auris clades', definition: 'Geographically defined genetic lineages of C. auris identified by whole-genome sequencing, with variable antifungal resistance and virulence profiles' },
      ],
      clinicalNotes: 'The antifungal pipeline is the most robust in decades. Ibrexafungerp provides the first oral option for echinocandin-class activity, critical for step-down therapy in invasive candidiasis and treatment of echinocandin-resistant organisms. Rezafungin enables outpatient-friendly once-weekly dosing. Fosmanogepix represents a truly novel mechanism with broad-spectrum potential. C. auris management requires coordinated clinical, microbiological, and infection prevention expertise. Molecular epidemiology through WGS is essential for outbreak investigation and containment.',
    },
  },
  media: [],
  citations: [
    { id: 'pappas-id-guidelines-candidiasis-2016', type: 'article', title: 'Clinical Practice Guideline for the Management of Candidiasis: 2016 Update by IDSA', authors: ['Pappas PG', 'Kauffman CA', 'Andes DR'], source: 'Clinical Infectious Diseases', license: 'Copyrighted' },
    { id: 'mandell-id-9e-candida', type: 'textbook', title: 'Mandell, Douglas, and Bennett\'s Principles and Practice of Infectious Diseases', source: 'Elsevier', chapter: 'Candida Species', license: 'Copyrighted' },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-aspergillosis', targetType: 'condition', relationship: 'sibling', label: 'Aspergillosis' },
    { targetId: 'infectious-disease-antimicrobial-resistance-comprehensive', targetType: 'topic', relationship: 'related', label: 'Antimicrobial Resistance' },
    { targetId: 'infectious-disease-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
  ],
  tags: {
    systems: ['infectious-disease', 'mycology'],
    topics: ['fungal-infections', 'antifungals', 'candidiasis', 'immunodeficiency'],
    keywords: ['Candida', 'candidemia', 'thrush', 'echinocandin', 'fluconazole', 'C. auris', 'biofilm', 'beta-D-glucan'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};
