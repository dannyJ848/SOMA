/**
 * Skin Infections
 *
 * Comprehensive coverage of bacterial (cellulitis, impetigo, MRSA),
 * fungal (tinea, candidiasis), and viral (warts, herpes simplex/zoster)
 * skin infections including diagnostic techniques and management.
 */

import { EducationalContent } from '../types';

export const skinInfectionsContent: EducationalContent = {
  id: 'dermatology-skin-infections',
  type: 'topic',
  name: 'Skin Infections',
  nameEs: 'Infecciones de la Piel',
  alternateNames: ['Cutaneous Infections', 'Dermatologic Infections', 'Infectious Dermatoses'],

  levels: {
    1: {
      level: 1,
      summary: 'Skin infections are caused by germs (bacteria, fungi, or viruses) that get into or onto the skin. Common types include cellulitis, ringworm, warts, and cold sores.',
      explanation: `## What Are Skin Infections?

Skin infections happen when germs get into your skin. There are three main types of germs that cause skin infections:

## Bacterial Skin Infections

**Cellulitis:**
- Red, swollen, warm, painful area of skin
- Usually on the legs
- Caused by bacteria getting in through a cut or crack
- Needs antibiotics from a doctor
- Go to the ER if the redness spreads quickly

**Impetigo:**
- Crusty, honey-colored sores, usually on the face
- Very contagious (spreads easily to other people)
- Common in children
- Treated with antibiotic cream or pills

**Boils/Abscesses:**
- Painful, pus-filled lumps under the skin
- Sometimes need to be drained by a doctor

## Fungal Skin Infections

**Ringworm (Tinea):**
- NOT caused by a worm! Caused by a fungus
- Ring-shaped, red, scaly patches
- Can affect the body, feet (athlete's foot), groin (jock itch), or scalp
- Treated with antifungal creams

**Yeast Infections (Candida):**
- Caused by a yeast that naturally lives on skin
- Red, itchy rash in moist areas (skin folds, diaper area)
- Treated with antifungal cream

## Viral Skin Infections

**Warts:**
- Small, rough bumps caused by HPV virus
- Common on hands and feet
- Usually harmless but can be annoying
- Can be frozen off or treated with medication

**Cold Sores (Herpes):**
- Painful blisters around the mouth or genitals
- Come back again and again
- Spread by direct contact
- Antiviral medicine can help`,

      keyTerms: [
        { term: 'Bacteria', definition: 'Tiny germs that can cause infections like cellulitis and impetigo' },
        { term: 'Fungus', definition: 'A type of germ that causes ringworm and yeast infections' },
        { term: 'Virus', definition: 'A very tiny germ that causes warts and cold sores' },
        { term: 'Contagious', definition: 'Can spread from one person to another' },
        { term: 'Antibiotics', definition: 'Medicines that kill bacteria' },
      ],
      analogies: [
        'Bacteria getting into a cut is like unwanted visitors sneaking through an open door in your skin.',
        'Ringworm is named for its ring shape, not because any worm is involved.',
        'A boil is like a balloon of pus trapped under the skin.',
      ],
      examples: [
        'A child with honey-colored crusts around their nose (impetigo)',
        'A man with a red, warm, swollen lower leg after a small cut (cellulitis)',
        'A teenager with itchy ring-shaped patches after wrestling (tinea corporis)',
      ],
      patientCounselingPoints: [
        'Keep cuts and scrapes clean and covered.',
        'Do not share towels, razors, or clothing with others.',
        'Wash hands often to prevent spreading infections.',
        'See a doctor for any skin infection that is getting worse or not improving.',
      ],
    },

    2: {
      level: 2,
      summary: 'Skin infections are classified by causative organism: bacterial (cellulitis, impetigo, folliculitis), fungal (dermatophytosis, candidiasis), and viral (HPV warts, herpes simplex, herpes zoster). Clinical pattern recognition and targeted diagnostics guide treatment.',
      explanation: `## Bacterial Skin Infections

**Cellulitis:**
- Acute infection of dermis and subcutaneous tissue
- Causative organisms: Group A Streptococcus, Staphylococcus aureus
- Clinical: unilateral erythema, edema, warmth, tenderness
- No sharp borders (vs erysipelas which has raised, well-demarcated edges)
- Treatment: oral antibiotics (cephalexin, dicloxacillin); IV for severe cases
- Red flags: rapid spread, fever, lymphangitis, crepitus

**Impetigo:**
- Non-bullous: honey-colored crusts (Group A Strep or S. aureus)
- Bullous: flaccid bullae with clear fluid (S. aureus, exfoliative toxin)
- Treatment: topical mupirocin (limited disease) or oral antibiotics

**Folliculitis:**
- Inflammation of hair follicles
- Superficial: small pustules at follicular openings
- Deep: furuncles (boils), carbuncles (cluster of furuncles)
- Hot tub folliculitis: Pseudomonas aeruginosa

**MRSA:**
- Methicillin-resistant Staphylococcus aureus
- Community-acquired (CA-MRSA): often abscesses, "spider bite" misdiagnosis
- Treatment: I&D (incision and drainage) for abscesses
- Antibiotics: TMP-SMX, doxycycline, clindamycin

## Fungal Skin Infections

**Dermatophytosis (Tinea):**
- Caused by dermatophytes: Trichophyton, Microsporum, Epidermophyton
- Named by location:
  - Tinea corporis (body): annular scaly plaques
  - Tinea pedis (feet): "athlete's foot," interdigital maceration
  - Tinea cruris (groin): "jock itch," spares scrotum
  - Tinea capitis (scalp): scaling, alopecia, common in children
  - Tinea unguium (nails): onychomycosis
  - Tinea versicolor: Malassezia yeast, hypo/hyperpigmented patches

**Diagnosis:**
- KOH preparation: dissolves keratin, reveals hyphae
- Wood's lamp: fluorescence (Microsporum, some Pseudomonas, tinea versicolor)
- Fungal culture: gold standard but takes 2-4 weeks

**Treatment:**
- Topical antifungals: clotrimazole, terbinafine, ketoconazole
- Oral antifungals required for: tinea capitis, extensive disease, onychomycosis
  - Terbinafine, griseofulvin, itraconazole, fluconazole

**Candidiasis:**
- Candida albicans (most common)
- Intertrigo: red, macerated plaques in skin folds with satellite pustules
- Oral thrush: white plaques on oral mucosa
- Diaper dermatitis: bright red with satellite lesions
- Risk factors: diabetes, immunosuppression, antibiotics, moisture

## Viral Skin Infections

**Warts (HPV):**
- Common warts (verruca vulgaris): rough papules, hands
- Plantar warts: painful on soles of feet
- Flat warts: small, smooth, face and extremities
- Genital warts (condylomata acuminata): HPV 6, 11
- Treatment: cryotherapy, salicylic acid, imiquimod, cantharidin

**Herpes Simplex Virus (HSV):**
- HSV-1: primarily oral (cold sores); increasing genital cases
- HSV-2: primarily genital herpes
- Grouped vesicles on erythematous base
- Primary infection more severe than recurrences
- Tzanck smear: multinucleated giant cells (not specific)
- Treatment: acyclovir, valacyclovir, famciclovir

**Herpes Zoster (Shingles):**
- Reactivation of varicella-zoster virus (VZV)
- Painful vesicles in dermatomal distribution (unilateral)
- Postherpetic neuralgia: persistent pain after rash resolves
- Treatment: antivirals within 72 hours of rash onset
- Prevention: Shingrix vaccine (recombinant, adjuvanted)`,

      keyTerms: [
        { term: 'Cellulitis', definition: 'Acute bacterial infection of dermis and subcutaneous tissue causing redness, swelling, and warmth' },
        { term: 'Dermatophyte', definition: 'Fungus that infects keratinized tissue (skin, hair, nails) causing tinea infections' },
        { term: 'KOH preparation', definition: 'Diagnostic test using potassium hydroxide to dissolve keratin and reveal fungal elements under microscopy' },
        { term: 'Wood lamp', definition: 'UV light examination that causes certain organisms and conditions to fluoresce' },
        { term: 'Tzanck smear', definition: 'Cytology from vesicle base showing multinucleated giant cells in herpes infections' },
        { term: 'MRSA', definition: 'Methicillin-resistant Staphylococcus aureus, a drug-resistant bacterial infection' },
        { term: 'Dermatomal', definition: 'Following the distribution of a single nerve root, characteristic of herpes zoster' },
      ],
      analogies: [
        'Dermatophytes are named by where they attack: corporis (body), pedis (feet), capitis (head), like addresses for the fungus.',
        'KOH prep is like using a chemical to dissolve everything except the fungus, making it visible.',
        'Herpes zoster follows a dermatome like a road map, staying on one side only.',
      ],
      examples: [
        'An elderly diabetic with unilateral leg cellulitis and fever requiring IV antibiotics',
        'A wrestler with annular scaly plaques on the trunk (tinea corporis)',
        'A child with scaling, alopecia on the scalp requiring oral griseofulvin (tinea capitis)',
        'An immunosuppressed patient with disseminated herpes zoster crossing multiple dermatomes',
      ],
      clinicalNotes: 'Always consider MRSA in recurrent abscesses or failed first-line antibiotic therapy. Tinea capitis ALWAYS requires oral antifungal therapy (topical agents do not penetrate the hair follicle). Herpes zoster antivirals are most effective when started within 72 hours but can still be considered after 72 hours if new vesicles are forming. Always check for immunocompromise in unusual or severe skin infections.',
    },

    3: {
      level: 3,
      summary: 'Skin infections require pattern recognition of morphology, distribution, and host factors. Diagnostic workup includes KOH prep, Wood lamp examination, Gram stain, cultures, and viral PCR. Specific clinical patterns such as satellite pustules in candida, dermatomal zoster, and honey-colored crusts in impetigo are high-yield diagnostic clues.',
      explanation: `## Bacterial Infections: Clinical Diagnosis Patterns

**Cellulitis vs. Mimics:**
- Bilateral "cellulitis" is almost always stasis dermatitis (venous insufficiency)
- Contact dermatitis: pruritic, eczematous, often bilateral
- DVT: consider if significant edema with minimal erythema
- Necrotizing fasciitis: pain out of proportion, crepitus, violaceous color, rapid progression

**Erysipelas vs. Cellulitis:**
- Erysipelas: superficial (dermis), well-demarcated raised borders, GAS
- Cellulitis: deeper (dermis + subcutis), poorly demarcated, GAS or S. aureus

**Staphylococcal Scalded Skin Syndrome (SSSS):**
- Exfoliative toxins (ETA, ETB) target desmoglein 1
- Superficial blistering, positive Nikolsky sign
- Children < 5 years primarily affected
- Distinguished from TEN: SSSS splits within epidermis (subcorneal), no mucosal involvement

**Necrotizing Fasciitis:**
- Type I: polymicrobial (anaerobes + aerobes), often post-surgical
- Type II: Group A Streptococcus (flesh-eating bacteria)
- LRINEC score: WBC, Hgb, Na, glucose, creatinine, CRP
- Surgical emergency: operative debridement required

## Fungal Infections: Diagnostic Approach

**KOH Preparation Technique:**
- Scrape active border of lesion (not center)
- Place on slide with 10-20% KOH
- Gently heat (or wait 15-20 minutes)
- Look for septate hyphae (dermatophytes) or pseudohyphae with budding yeast (Candida)
- Sensitivity: ~60-80%

**Wood Lamp Findings:**
- Coral-red fluorescence: erythrasma (Corynebacterium minutissimum)
- Green/yellow-green: Microsporum (not Trichophyton)
- Pale yellow: tinea versicolor (Malassezia)
- No fluorescence: Trichophyton (most common dermatophyte today)

**Dermatophyte Identification:**
- Trichophyton rubrum: most common worldwide, tinea pedis/cruris/corporis
- Trichophyton tonsurans: most common tinea capitis in US (no fluorescence)
- Microsporum canis: zoophilic, from cats/dogs, fluoresces
- Epidermophyton floccosum: tinea cruris, tinea pedis

**Tinea Capitis Patterns:**
- Black dot: broken hairs at scalp surface (endothrix, T. tonsurans)
- Gray patch: dull gray scaling (ectothrix, Microsporum)
- Kerion: inflammatory boggy mass, can cause scarring alopecia
- Favus: yellow cup-shaped crusts (T. schoenleinii, rare in US)
- Treatment: griseofulvin (gold standard) or terbinafine; add selenium sulfide shampoo

**Onychomycosis:**
- Distal subungual: most common; starts at distal nail
- White superficial: white crumbly surface
- Proximal subungual: starts at cuticle (consider immunosuppression)
- Total dystrophic: entire nail involved
- Confirm with KOH, PAS stain of nail clippings, or culture before treating
- Treatment: terbinafine oral (first-line), itraconazole; topical efinaconazole, tavaborole for mild

## Viral Infections: Advanced Concepts

**HPV Subtypes and Disease:**
- HPV 1: deep plantar warts (myrmecia)
- HPV 2, 4: common warts
- HPV 3, 10: flat warts
- HPV 6, 11: genital warts (low-risk)
- HPV 16, 18: high-risk for dysplasia/carcinoma (cervical, anal, penile, oropharyngeal)

**HSV Pathophysiology:**
- Primary infection: virus enters mucosal epithelium
- Travels retrograde via sensory nerves to dorsal root ganglia
- Establishes latency in neuronal cell bodies
- Reactivation: virus travels anterograde back to skin
- Triggers: stress, UV exposure, immunosuppression, trauma

**Herpes Zoster Complications:**
- Postherpetic neuralgia (PHN): most common, risk increases with age
- Herpes zoster ophthalmicus: V1 dermatome, Hutchinson sign (nose tip vesicles = nasociliary nerve)
- Ramsay Hunt syndrome: facial nerve (CN VII), ear vesicles, facial paralysis, hearing loss
- Disseminated zoster: > 20 lesions outside primary dermatome, immunocompromised
- Motor neuropathy: rare, limb weakness in affected myotome

**Molluscum Contagiosum:**
- Poxvirus (molluscum contagiosum virus, MCV)
- Flesh-colored, dome-shaped papules with central umbilication
- Self-limited in immunocompetent (months to years)
- Widespread in HIV: consider CD4 count
- Treatment: cantharidin, curettage, cryotherapy`,

      keyTerms: [
        { term: 'Nikolsky sign', definition: 'Lateral pressure on skin causes epidermis to separate; positive in SSSS, TEN, pemphigus' },
        { term: 'LRINEC score', definition: 'Laboratory Risk Indicator for Necrotizing Fasciitis; uses 6 lab values to assess probability' },
        { term: 'Hutchinson sign', definition: 'Vesicles on the tip of the nose indicating nasociliary nerve involvement in zoster ophthalmicus' },
        { term: 'Ramsay Hunt syndrome', definition: 'Herpes zoster reactivation in geniculate ganglion causing ear vesicles, facial paralysis, and hearing loss' },
        { term: 'Kerion', definition: 'Inflammatory boggy mass on the scalp from severe tinea capitis; can cause scarring alopecia' },
        { term: 'Endothrix', definition: 'Fungal spores within the hair shaft (T. tonsurans); causes black dot pattern in tinea capitis' },
        { term: 'Ectothrix', definition: 'Fungal spores on the outside of the hair shaft (Microsporum); causes gray patch pattern' },
        { term: 'Desmoglein 1', definition: 'Desmosomal adhesion molecule targeted by staphylococcal exfoliative toxins in SSSS' },
      ],
      analogies: [
        'HSV establishes latency in ganglia like a spy setting up a hidden base, emerging periodically to cause trouble.',
        'The LRINEC score is like a fire alarm system for necrotizing fasciitis, combining multiple warning signals.',
        'Nikolsky sign is like peeling wallpaper: if the skin slides off with gentle pressure, the bonds holding it are broken.',
      ],
      examples: [
        'A patient with "bilateral cellulitis" is correctly diagnosed with stasis dermatitis and treated with compression instead of antibiotics',
        'A child with black dot alopecia on the scalp; KOH shows endothrix invasion; started on griseofulvin',
        'An elderly patient with painful vesicles on the forehead and nose tip (Hutchinson sign) is urgently referred to ophthalmology',
        'A wrestler with multiple umbilicated papules on the trunk diagnosed with molluscum contagiosum',
      ],
      clinicalNotes: 'Bilateral cellulitis is extremely rare; consider stasis dermatitis, contact dermatitis, or lymphedema. Blood cultures are positive in only 2-4% of cellulitis cases and are not routinely recommended. Tinea capitis is under-diagnosed in adults; always consider it in scaling alopecia. Hutchinson sign in herpes zoster ophthalmicus warrants urgent ophthalmology referral as it indicates high risk of ocular involvement.',
    },

    4: {
      level: 4,
      summary: 'Advanced understanding of skin infections encompasses virulence factors, immune evasion mechanisms, antifungal pharmacology, host-pathogen interactions, and emerging resistance patterns. Deep knowledge of histopathology, molecular diagnostics, and complex clinical scenarios is essential.',
      explanation: `## Bacterial Infections: Molecular Pathogenesis

**S. aureus Virulence Factors:**
- Protein A: binds IgG Fc region, prevents opsonization
- Coagulase: converts fibrinogen to fibrin, creates protective clot
- Panton-Valentine Leukocidin (PVL): pore-forming toxin, associated with CA-MRSA
- Exfoliative toxins A/B: serine proteases targeting desmoglein 1 (SSSS)
- Toxic shock syndrome toxin-1 (TSST-1): superantigen
- Biofilm formation: particularly relevant in device infections

**MRSA Mechanisms:**
- mecA gene on SCCmec cassette
- Encodes PBP2a (penicillin-binding protein 2a)
- PBP2a has low affinity for beta-lactams -> resistance
- CA-MRSA: typically SCCmec type IV (smaller, more mobile)
- HA-MRSA: typically SCCmec type II (larger, more resistance genes)

**Group A Streptococcus (GAS) Complications:**
- Post-streptococcal glomerulonephritis (PSGN): can follow skin or throat infection
- Rheumatic fever: follows pharyngitis only (NOT skin infection)
- Streptococcal toxic shock syndrome: M protein superantigen
- Molecular mimicry: M protein epitopes cross-react with host tissues

## Fungal Infections: Advanced Pharmacology

**Antifungal Mechanisms:**
- Azoles (ketoconazole, fluconazole, itraconazole): inhibit 14-alpha-demethylase (CYP51)
  - Block ergosterol synthesis -> compromised cell membrane
  - Drug interactions: CYP3A4 inhibition (azoles are potent inhibitors)
- Terbinafine: inhibits squalene epoxidase
  - Fungicidal (vs. azoles which are fungistatic)
  - Accumulates in keratin -> long tissue half-life
  - Preferred for onychomycosis and dermatophytosis
- Griseofulvin: binds tubulin, disrupts mitotic spindle
  - Only active against dermatophytes
  - Requires months of therapy
  - Gold standard for tinea capitis (microsize formulation with fatty meal)
- Echinocandins (caspofungin): inhibit beta-1,3-glucan synthase
  - IV only, for systemic candidiasis/aspergillosis
  - Not used for skin dermatophytes
- Amphotericin B: binds ergosterol directly, creates pores
  - Reserved for severe systemic fungal infections

**Antifungal Resistance:**
- Candida auris: emerging multi-drug resistant species
  - Resistant to fluconazole, sometimes all azoles
  - Environmental persistence on hospital surfaces
  - Healthcare-associated outbreaks
- Terbinafine-resistant Trichophyton: emerging in India
  - Point mutations in squalene epoxidase gene
  - T. indotineae (formerly T. mentagrophytes genotype VIII)

## Viral Infections: Immunology and Therapeutics

**HSV Immune Evasion:**
- ICP47 blocks TAP transporter -> prevents MHC I antigen presentation
- Reduces NK cell recognition
- Establishes latency with minimal viral gene expression (LAT transcripts)
- US3 kinase blocks apoptosis in infected cells
- Interferon pathway inhibition (ICP0, ICP34.5)

**Antiviral Pharmacology:**
- Acyclovir: nucleoside analog, activated by viral thymidine kinase (TK)
  - Incorporated into viral DNA -> chain termination
  - Selective: viral TK phosphorylates it 3000x more efficiently than host kinases
  - Resistance: TK mutations (immunosuppressed patients)
- Valacyclovir: L-valyl ester prodrug of acyclovir
  - 3-5x higher bioavailability than acyclovir
  - First-line for HSV and VZV
- Foscarnet: pyrophosphate analog, directly inhibits viral DNA polymerase
  - Does not require TK activation -> active against acyclovir-resistant HSV
  - Nephrotoxic, electrolyte abnormalities
- Cidofovir: nucleotide analog, does not require viral TK
  - For acyclovir-resistant HSV/CMV

**HPV Immunology:**
- Immune evasion: downregulates MHC I, blocks interferon signaling
- Cell-mediated immunity critical for clearance
- E6 oncoprotein: degrades p53 (tumor suppressor)
- E7 oncoprotein: inactivates Rb (retinoblastoma protein)
- High-risk HPV (16, 18): integration into host genome -> persistent E6/E7 expression

**Deep Fungal Infections (Brief):**
- Sporotrichosis: Sporothrix schenckii, lymphocutaneous pattern (gardener's rose)
- Chromoblastomycosis: "copper penny" bodies on histology
- Mycetoma: draining sinuses, "grains"
- Dimorphic fungi (histo, blasto, coccidio): may present with skin lesions`,

      keyTerms: [
        { term: 'PVL', definition: 'Panton-Valentine Leukocidin: pore-forming toxin associated with community-acquired MRSA virulence' },
        { term: 'mecA', definition: 'Gene encoding PBP2a that confers methicillin resistance in MRSA' },
        { term: 'Squalene epoxidase', definition: 'Enzyme in ergosterol synthesis pathway inhibited by terbinafine' },
        { term: '14-alpha-demethylase', definition: 'CYP51 enzyme in fungal ergosterol synthesis inhibited by azole antifungals' },
        { term: 'Thymidine kinase', definition: 'Viral enzyme that phosphorylates acyclovir; mutations cause acyclovir resistance' },
        { term: 'E6/E7 oncoproteins', definition: 'HPV proteins that degrade p53 and inactivate Rb, driving carcinogenesis in high-risk subtypes' },
        { term: 'Candida auris', definition: 'Emerging multi-drug resistant Candida species with high mortality and environmental persistence' },
        { term: 'T. indotineae', definition: 'Terbinafine-resistant dermatophyte emerging from India with epidemic potential' },
      ],
      analogies: [
        'Protein A on S. aureus is like a disguise that makes antibodies grab the bacteria backwards, rendering them useless.',
        'Acyclovir selectivity is like a Trojan horse: only the virus can open the package (via viral TK), making it toxic only inside infected cells.',
        'E6 and E7 of HPV are like removing the brakes (p53, Rb) from a car, leading to uncontrolled cell division.',
      ],
      examples: [
        'A patient with recurrent CA-MRSA abscesses has PVL-positive strain; household decolonization protocol initiated',
        'An immunosuppressed patient develops acyclovir-resistant HSV; switched to foscarnet',
        'A nail clipping sent for PAS stain and culture grows T. rubrum; patient started on terbinafine 250mg daily for 12 weeks',
        'A returning traveler from India has widespread tinea unresponsive to terbinafine; T. indotineae suspected',
      ],
      clinicalNotes: 'PVL-positive CA-MRSA strains cause more severe soft tissue infections and are associated with necrotizing pneumonia. Terbinafine-resistant dermatophytes (T. indotineae) are an emerging global concern; consider in treatment failures, especially in patients with ties to South Asia. Acyclovir resistance is rare in immunocompetent patients (<1%) but occurs in up to 5-10% of immunosuppressed patients. Always confirm onychomycosis with KOH/PAS/culture before committing to months of oral antifungals, as dystrophic nails have many non-fungal causes.',
    },

    5: {
      level: 5,
      summary: 'Cutting-edge management of skin infections includes novel MRSA decolonization protocols, emerging antifungal agents (fosmanogepix, olorofim, ibrexafungerp), antiviral resistance management, phage therapy, and molecular diagnostics. Understanding immune checkpoint inhibitor-related infections and transplant dermatology adds complexity.',
      explanation: `## Advanced Bacterial Infection Management

**MRSA Decolonization Strategies:**
- Intranasal mupirocin BID x 5 days + chlorhexidine body washes
- Household decolonization for recurrent infections
- REDUCE MRSA trial: universal decolonization in ICU reduces MRSA clinical cultures by 37%
- Bleach bath protocols: 1/4-1/2 cup per full bathtub, 2-3x/week

**Novel Antibacterials:**
- Delafloxacin: fluoroquinolone active in acidic environment (abscesses), MRSA coverage
- Omadacycline: aminomethylcycline, IV/oral, covers MRSA
- Lefamulin: first pleuromutilin for systemic use
- Ceftaroline: anti-MRSA cephalosporin (5th generation)
- Dalbavancin/oritavancin: long-acting lipoglycopeptides (single IV dose for ABSSSI)
  - Dalbavancin: one dose covers 1 week, avoids prolonged IV access

**Biofilm-Associated Infections:**
- S. aureus and S. epidermidis biofilms on devices, chronic wounds
- Biofilm matrix (polysaccharides, eDNA, proteins) protects from antibiotics/immune cells
- Requires 100-1000x higher antibiotic concentrations
- Strategies: surgical debridement, antibiotic-impregnated materials, quorum sensing inhibitors

## Advanced Fungal Infection Management

**Novel Antifungals:**
- Ibrexafungerp (Brexafemme): first oral glucan synthase inhibitor (triterpenoid)
  - Approved for vulvovaginal candidiasis
  - Active against Candida auris
  - Investigational for invasive candidiasis
- Fosmanogepix: first-in-class Gwt1 inhibitor (GPI-anchored protein maturation)
  - Investigational for invasive fungal infections including resistant Candida/Aspergillus
- Olorofim: dihydroorotate dehydrogenase (DHODH) inhibitor
  - Novel mechanism targeting pyrimidine synthesis
  - Investigational for resistant mold infections
- Rezafungin: long-acting echinocandin (once-weekly IV dosing)
  - Approved for candidemia

**Dermatophyte Resistance:**
- Global emergence of terbinafine-resistant T. indotineae
- Mutations: F397L, L393F, L393S in SQLE gene
- Epidemiology: initially South Asia, now reported worldwide
- Management: higher-dose terbinafine, itraconazole, voriconazole
- ITS sequencing for species identification when resistance suspected

## Advanced Viral Infection Management

**HSV Vaccine Development:**
- Multiple candidates in clinical trials
- Therapeutic vaccines: aim to reduce recurrence frequency
- Prophylactic vaccines: preventing primary infection
- Challenges: viral immune evasion, latent reservoir in ganglia
- mRNA-based approaches under investigation

**Immune Checkpoint Inhibitor (ICI)-Related Infections:**
- ICIs (pembrolizumab, nivolumab) can reactivate latent infections
- VZV reactivation: consider prophylaxis in high-risk patients
- HSV: may present atypically or more severely
- Paradoxical worsening of infections due to excessive inflammation

**Transplant Dermatology Infections:**
- Solid organ transplant recipients: 40-80% develop skin infections
- Increased risk: HPV (aggressive warts, squamous cell carcinoma), HSV, VZV
- Opportunistic: invasive fungal (Aspergillus, Mucorales skin involvement)
- HPV-related SCC: 65-250x increased risk, aggressive behavior
- Screening: full skin examination every 6-12 months

## Molecular Diagnostics

**PCR-Based Testing:**
- Multiplex PCR panels for wound infections
- HSV PCR: sensitivity >95% (replacing viral culture and Tzanck smear)
- VZV PCR from vesicle fluid: rapid, highly sensitive
- Dermatophyte PCR: emerging, faster than culture
- ITS (internal transcribed spacer) sequencing: gold standard for fungal species identification

**MALDI-TOF Mass Spectrometry:**
- Rapid identification of bacterial and fungal isolates from culture
- Minutes vs. days for conventional identification
- Revolutionized clinical microbiology workflow

**Metagenomic Next-Generation Sequencing (mNGS):**
- Unbiased detection of pathogens from skin biopsy or wound specimens
- Identifies unexpected organisms
- Useful for chronic non-healing wounds with negative cultures

## Emerging Approaches

**Phage Therapy:**
- Bacteriophages targeting specific bacterial species
- Active against biofilm infections
- Personalized phage cocktails for MRSA
- Compassionate use protocols available
- FDA has granted investigational new drug (IND) for individual cases

**Antimicrobial Stewardship in Dermatology:**
- 7.6 million outpatient antibiotic prescriptions for skin infections annually (US)
- Cellulitis: shorter courses (5-6 days) non-inferior to 10 days (DANCE trial)
- Uncomplicated abscesses: I&D alone often sufficient (no antibiotics needed)
- Doxycycline for prophylaxis of recurrent cellulitis (PATCH trial)

**Immunotherapy for Viral Infections:**
- Imiquimod (TLR7 agonist): genital warts, actinic keratoses
- Interferon-alpha: refractory warts (intralesional)
- Cidofovir topical: recalcitrant warts in immunocompromised
- DPCP (diphenylcyclopropenone): contact sensitization for warts
- Intralesional Candida antigen injection: stimulates immune response to clear warts`,

      keyTerms: [
        { term: 'Ibrexafungerp', definition: 'First oral glucan synthase inhibitor; active against Candida auris and approved for vulvovaginal candidiasis' },
        { term: 'Fosmanogepix', definition: 'First-in-class Gwt1 inhibitor targeting GPI-anchored protein maturation; investigational for resistant fungal infections' },
        { term: 'Dalbavancin', definition: 'Long-acting lipoglycopeptide enabling single-dose IV therapy for acute bacterial skin infections' },
        { term: 'mNGS', definition: 'Metagenomic next-generation sequencing for unbiased pathogen detection from clinical specimens' },
        { term: 'MALDI-TOF', definition: 'Matrix-assisted laser desorption/ionization time-of-flight mass spectrometry for rapid microbial identification' },
        { term: 'Phage therapy', definition: 'Use of bacteriophages (viruses targeting bacteria) as treatment, especially for drug-resistant infections' },
        { term: 'T. indotineae', definition: 'Terbinafine-resistant dermatophyte with F397L SQLE mutation, emerging globally from South Asia' },
        { term: 'DANCE trial', definition: 'Landmark trial showing shorter course antibiotics (5-6 days) non-inferior for uncomplicated cellulitis' },
      ],
      analogies: [
        'Phage therapy is like deploying a precision missile against bacteria while leaving everything else untouched.',
        'MALDI-TOF is like a fingerprint scanner for microorganisms, identifying them in minutes by their unique protein signature.',
        'Biofilm is like a fortress that bacteria build around themselves, requiring much higher antibiotic concentrations to penetrate.',
      ],
      examples: [
        'A patient with recurrent MRSA abscesses receives dalbavancin single-dose IV, avoiding 10 days of oral antibiotics and improving adherence',
        'A kidney transplant patient with widespread refractory warts treated with intralesional Candida antigen injection',
        'An ICU patient with chronic wound infection has negative cultures but mNGS detects an unexpected Nocardia species',
        'A patient from India with extensive terbinafine-resistant tinea; ITS sequencing confirms T. indotineae with F397L mutation; treated with itraconazole',
      ],
      clinicalNotes: 'The DANCE trial and other evidence support shorter antibiotic courses (5-6 days) for uncomplicated cellulitis, reducing unnecessary antibiotic exposure. Long-acting agents like dalbavancin are transforming ABSSSI management in the outpatient setting. Terbinafine-resistant dermatophytes (T. indotineae) are a global emerging threat; clinicians should suspect resistance when tinea fails first-line therapy, especially in patients with travel to or from South Asia. Phage therapy is increasingly available through compassionate use for truly refractory infections. Transplant patients require aggressive HPV surveillance given markedly increased SCC risk.',
    },
  },

  media: [],
  citations: [
    {
      id: 'skin-infections-ref-1',
      type: 'textbook',
      title: "Dermatology (Bolognia)",
      authors: ['Bolognia, J.', 'Schaffer, J.', 'Cerroni, L.'],
      source: 'Elsevier',
      chapter: 'Bacterial, Fungal, and Viral Infections',
    },
    {
      id: 'skin-infections-ref-2',
      type: 'article',
      title: 'Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections',
      source: 'Clinical Infectious Diseases (IDSA)',
      url: 'https://doi.org/10.1093/cid/ciu296',
    },
    {
      id: 'skin-infections-ref-3',
      type: 'article',
      title: 'Emergence of Terbinafine-Resistant Dermatophytosis',
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMc2116440',
    },
  ],
  crossReferences: [
    {
      targetId: 'dermatology-inflammatory-skin',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Inflammatory Skin Conditions',
    },
    {
      targetId: 'dermatology-skin-cancer',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Skin Cancer',
    },
  ],
  tags: {
    topics: ['dermatology', 'infectious-disease', 'skin-infections', 'antibiotics', 'antifungals', 'antivirals'],
    systems: ['integumentary', 'immune'],
    keywords: ['cellulitis', 'impetigo', 'MRSA', 'tinea', 'candida', 'herpes', 'HPV', 'warts', 'KOH prep', 'Wood lamp'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['dermatology', 'medicine', 'surgery'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
