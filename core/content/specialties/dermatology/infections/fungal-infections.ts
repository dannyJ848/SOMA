/**
 * Fungal Skin Infections - Comprehensive Educational Content
 *
 * Covers dermatophytosis (tinea), candidiasis, pityriasis versicolor,
 * and deep fungal infections of the skin.
 */

import { EducationalContent } from '../../../types';

export const fungalSkinInfectionsContent: EducationalContent = {
  id: 'dermatology-fungal-infections',
  type: 'condition',
  name: 'Fungal Skin Infections',
  alternateNames: ['Mycoses', 'Dermatophytosis', 'Tinea'],

  levels: {
    1: {
      level: 1,
      summary: 'Fungal skin infections are caused by fungi that grow on the skin, hair, or nails - common types include ringworm, athlete\'s foot, jock itch, and yeast infections.',
      explanation: `Fungi are living things (like mushrooms) that can sometimes grow on your body and cause infections. These infections are very common and usually not serious.

**Ringworm (Not Actually a Worm!)**
- Red, circular, scaly patches with clear centers
- Looks like a ring (that's where the name comes from)
- Can appear anywhere on the body
- Spread by touching infected people, animals, or objects

**Athlete's Foot**
- Itchy, scaly, cracked skin between the toes
- Can spread to the bottom of the foot
- Common in people who sweat a lot or wear tight shoes
- Often caught in locker rooms or swimming pools

**Jock Itch**
- Red, itchy rash in the groin area
- May spread to inner thighs
- More common in athletes and warm weather
- Often comes with athlete's foot

**Yeast Infections**
- Caused by Candida yeast
- Red, itchy patches in warm, moist areas
- Common in skin folds, diaper area, under breasts
- Thrush is a yeast infection in the mouth

**Nail Fungus**
- Thick, yellow, or crumbly nails
- Usually starts at the tip of the nail
- Hard to treat (takes months)

**What Makes You More Likely to Get Fungal Infections?**
- Warm, sweaty skin
- Tight clothing or shoes
- Sharing towels or sports equipment
- Walking barefoot in public places
- Having a weakened immune system

**How to Prevent Fungal Infections:**
- Keep skin clean and dry
- Wear loose, breathable clothing
- Don't share personal items
- Wear flip-flops in public showers
- Change socks if feet get sweaty`,
      keyTerms: [
        { term: 'fungus', definition: 'A type of living thing that can cause skin infections' },
        { term: 'ringworm', definition: 'A fungal infection that makes a ring-shaped rash (not caused by a worm)' },
        { term: 'athlete\'s foot', definition: 'A fungal infection of the feet, especially between the toes' },
        { term: 'jock itch', definition: 'A fungal infection in the groin area' },
        { term: 'yeast', definition: 'A type of fungus that can cause infections in moist areas' },
      ],
      analogies: [
        'Fungi love warm, moist places - like mushrooms growing in a damp forest.',
        'Ringworm spreads outward like a ripple when you throw a stone in water.',
        'Fungal infections thrive in sweaty shoes like plants grow in a greenhouse.',
      ],
      examples: [
        'A child who plays with a cat that has patches of missing fur might get ringworm on their arm.',
        'An athlete who doesn\'t dry between their toes after showering might get athlete\'s foot.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fungal skin infections are classified as superficial (dermatophytosis, candidiasis, tinea versicolor) or deep, with treatment depending on location, extent, and causative organism.',
      explanation: `## Classification of Fungal Infections

**Superficial Mycoses**:
- Confined to stratum corneum, hair, nails
- Dermatophytes (tinea)
- Candida (yeast)
- Malassezia (pityriasis versicolor)

**Deep/Invasive Mycoses**:
- Extend beyond epidermis
- May involve dermis, subcutaneous tissue, systemic
- Often opportunistic in immunocompromised

## Dermatophytosis (Tinea)

### Common Dermatophytes
| Genus | Source | Common Infections |
|-------|--------|-------------------|
| Trichophyton | Human, animal, soil | Tinea corporis, pedis, unguium |
| Microsporum | Human, animal | Tinea capitis, corporis |
| Epidermophyton | Human | Tinea pedis, cruris |

### Clinical Types

**Tinea Corporis** (Body):
- Annular (ring-shaped) plaques
- Raised, scaly border with central clearing
- Pruritic

**Tinea Pedis** (Foot):
- Interdigital: Maceration, fissures between toes
- Moccasin: Dry, scaly soles and sides
- Vesicular: Inflammatory vesicles

**Tinea Cruris** (Groin):
- Erythematous patches in groin folds
- Sharp, raised border
- Spares scrotum (unlike candida)

**Tinea Capitis** (Scalp):
- Patches of alopecia with scale
- May have "black dots" (broken hairs)
- Kerion: Boggy, inflamed mass (severe form)
- Requires oral treatment

**Tinea Unguium** (Nail/Onychomycosis):
- Distal subungual: Most common, starts at tip
- White superficial: White patches on nail plate
- Proximal subungual: Starts at cuticle (think HIV)

### Diagnosis
- KOH preparation: Dissolves keratin, reveals hyphae
- Fungal culture: Definitive identification
- Wood's lamp: Some Microsporum fluoresce green

## Candidiasis

**Cutaneous Candidiasis**:
- Red, macerated patches in skin folds
- Satellite lesions (pustules beyond main rash)
- Common in: Intertriginous areas, diaper area

**Oral Candidiasis (Thrush)**:
- White plaques on oral mucosa
- Scrapes off leaving red base
- Risk factors: Dentures, inhaled steroids, immunosuppression

**Vulvovaginal Candidiasis**:
- Pruritus, burning, discharge
- White "cottage cheese" discharge
- Very common (75% of women at some point)

**Candidal Intertrigo**:
- Skin fold infection
- Satellite pustules characteristic
- Risk factors: Obesity, diabetes, occlusion

## Pityriasis Versicolor (Tinea Versicolor)

**Causative Organism**: Malassezia (yeast)

**Clinical Features**:
- Hypo- or hyperpigmented macules
- Fine scale
- Upper trunk, shoulders, upper arms
- May itch
- More visible after sun exposure (affected skin doesn't tan)

**Treatment**:
- Selenium sulfide shampoo
- Ketoconazole shampoo or cream
- Oral fluconazole (single dose or short course)

## Treatment Approach

### Topical Antifungals
| Agent | Class | Common Use |
|-------|-------|------------|
| Clotrimazole | Azole | Tinea, candida |
| Miconazole | Azole | Tinea, candida |
| Terbinafine | Allylamine | Dermatophytes |
| Nystatin | Polyene | Candida only |
| Ciclopirox | Hydroxypyridone | Broad spectrum |

### When to Use Oral Antifungals
- Tinea capitis (always oral)
- Extensive tinea corporis
- Onychomycosis
- Failed topical therapy
- Immunocompromised patients

### Oral Antifungals
| Agent | Duration (typical) | Key Point |
|-------|-------------------|-----------|
| Terbinafine | 2-6 weeks (skin), 6-12 weeks (nails) | Fungicidal, best for dermatophytes |
| Fluconazole | Weekly dosing option | Good for candida |
| Itraconazole | Pulse dosing for nails | Requires acidic environment |
| Griseofulvin | 6-8 weeks (tinea capitis) | Only for dermatophytes |`,
      keyTerms: [
        { term: 'dermatophyte', definition: 'Fungi that infect skin, hair, and nails (tinea)', pronunciation: 'der-MAT-oh-fite' },
        { term: 'KOH preparation', definition: 'Microscopic test using potassium hydroxide to see fungal elements' },
        { term: 'satellite lesions', definition: 'Smaller lesions around a main lesion, characteristic of candida' },
        { term: 'Malassezia', definition: 'Yeast causing pityriasis versicolor', pronunciation: 'mal-ah-SEE-zee-ah' },
        { term: 'onychomycosis', definition: 'Fungal nail infection', pronunciation: 'on-ee-koh-my-KOH-sis' },
        { term: 'kerion', definition: 'Severe inflammatory tinea capitis forming a boggy mass' },
      ],
      examples: [
        'A wrestler with circular scaly patches on arms and face likely has tinea corporis from mat contact.',
        'A diabetic patient with red, macerated skin under the breasts with satellite pustules has candidal intertrigo.',
      ],
    },
    3: {
      level: 3,
      summary: 'Fungal skin infections require understanding of organism biology, host factors, appropriate diagnostic testing, and tailored antifungal therapy considering resistance and drug interactions.',
      explanation: `## Dermatophyte Biology

### Ecology
- **Anthropophilic**: Human-adapted (T. rubrum, T. tonsurans)
  - Often chronic, less inflammatory
  - Person-to-person spread
- **Zoophilic**: Animal-adapted (M. canis, T. mentagrophytes)
  - More inflammatory
  - Animal contact history
- **Geophilic**: Soil-adapted (M. gypseum)
  - Gardening, soil exposure
  - Inflammatory

### Pathogenesis
**Infection Process**:
1. Arthroconidia (fungal spores) contact stratum corneum
2. Adherence and germination
3. Hyphal penetration of keratin
4. Keratinase production digests keratin
5. Radial spread → Ring formation

**Host Response**:
- Cell-mediated immunity critical
- Th1 response controls infection
- Inflammation causes symptoms but also clearance
- Chronic infection may indicate anergy to dermatophyte antigens

### "Id" Reactions (Dermatophytid)
- Sterile, inflammatory reaction distant from infection
- Represents hypersensitivity to fungal antigens
- Usually vesicular
- Treat the primary infection; id reaction resolves

## Advanced Diagnostics

### KOH Preparation Technique
1. Scrape active, scaly border (not central clearing)
2. Place on slide with KOH (10-20%)
3. Gentle heat to speed clearing
4. Examine for branching, septate hyphae
5. Add DMSO/fungal stain for better visualization

### Culture
- Sabouraud dextrose agar
- Dermatophyte test medium (DTM): Turns red with dermatophytes
- Takes 2-4 weeks
- Allows species identification

### Molecular Methods
- PCR becoming more available
- Faster than culture
- Can detect resistance genes

### Histopathology
- PAS or GMS stains highlight fungi
- Useful for deep infections
- May show organisms when culture negative

## Candida: Beyond Superficial

### Chronic Mucocutaneous Candidiasis (CMC)
**Clinical**:
- Recurrent/persistent candidiasis of skin, nails, mucosa
- Begins in childhood
- May have endocrinopathy

**Genetics**:
- STAT1 gain-of-function mutations
- CARD9 deficiency
- IL-17 pathway defects (AIRE, IL-17RA, IL-17F)

**Management**:
- Chronic antifungal suppression
- Treat endocrinopathies
- Monitor for SCC of mucosa

### Candida in Special Populations

**Diabetic Patients**:
- Increased risk due to glucose in secretions
- Optimize glycemic control
- May need longer treatment courses

**HIV/AIDS**:
- Oral thrush common marker
- Esophageal candidiasis = AIDS-defining
- May indicate low CD4 count

**Critically Ill**:
- Invasive candidiasis risk
- Candidemia from skin/catheter
- Echinocandins often first-line

## Malassezia Disorders

### Beyond Pityriasis Versicolor

**Malassezia Folliculitis**:
- Monomorphic papules/pustules
- Upper trunk, shoulders
- Pruritic
- Does NOT respond to antibiotics
- Improves with antifungals

**Seborrheic Dermatitis**:
- Malassezia contributes (not primary cause)
- Scalp (dandruff), face (nasolabial folds)
- Antifungals helpful as part of treatment

**Neonatal Pustulosis (Malassezia)**:
- Pustules in first few weeks of life
- Benign, self-limited

### Species Distribution
- M. globosa: Most associated with pityriasis versicolor
- M. sympodialis: Seborrheic dermatitis
- M. furfur: Catheter-related fungemia (lipid infusions)

## Onychomycosis Deep Dive

### Clinical Patterns
| Pattern | Description | Common Cause |
|---------|-------------|--------------|
| Distal lateral subungual (DLSO) | Most common; starts at tip | T. rubrum |
| White superficial (WSO) | White patches on surface | T. mentagrophytes |
| Proximal subungual (PSO) | Starts at cuticle | T. rubrum (think HIV) |
| Total dystrophic | Complete nail destruction | Any; chronic |
| Candidal | Usually fingernails, paronychia | Candida |

### Confirming Diagnosis
- KOH/fungal stain
- Culture
- PAS stain of nail clipping
- PCR

**Why Confirm?**
- 50% of dystrophic nails are NOT fungal
- Psoriasis, trauma, lichen planus mimic
- Treatment is long and expensive

### Treatment Selection

**Topical (Limited Nail Involvement)**:
- Efinaconazole 10% solution
- Tavaborole 5% solution
- Ciclopirox lacquer
- Apply to nail plate and hyponychium

**Oral (Preferred for Most)**:
| Agent | Regimen | Cure Rate |
|-------|---------|-----------|
| Terbinafine | 250mg daily x 6 weeks (fingernails), 12 weeks (toenails) | 70-80% |
| Itraconazole | Pulse: 200mg BID x 1 week/month x 3-4 months | 60-70% |
| Fluconazole | 150-300mg weekly x 6-12 months | 50-60% |

**Terbinafine Monitoring**:
- Baseline CBC, LFTs
- Recheck LFTs if >6 weeks
- Watch for taste disturbance, rash

## Deep Fungal Infections (Overview)

### Sporotrichosis
- Sporothrix schenckii (rose gardener's disease)
- Nodular lymphangitis: Primary chancre + nodules along lymphatics
- Treatment: Itraconazole

### Chromoblastomycosis
- Dematiaceous (dark) fungi
- Verrucous nodules/plaques
- "Copper pennies" on histopath (muriform cells)
- Difficult to treat; itraconazole, surgery

### Mycetoma
- Tumor-like infection with sinus tracts
- Actinomycotic (bacterial) or eumycotic (fungal)
- Endemic in tropical areas
- "Grains" in discharge`,
      keyTerms: [
        { term: 'anthropophilic', definition: 'Dermatophyte species adapted to humans as primary host' },
        { term: 'kerion', definition: 'Inflammatory, boggy mass from severe tinea capitis with possible scarring alopecia' },
        { term: 'dermatophytid', definition: 'Id reaction - sterile inflammatory response distant from fungal infection' },
        { term: 'Malassezia folliculitis', definition: 'Yeast folliculitis often mistaken for bacterial acne' },
        { term: 'chronic mucocutaneous candidiasis', definition: 'Genetic disorder with defective anti-Candida immunity' },
        { term: 'sporotrichosis', definition: 'Deep fungal infection causing nodular lymphangitis, from Sporothrix' },
      ],
      clinicalNotes: 'Always confirm onychomycosis before treating - 50% of dystrophic nails are not fungal. Proximal subungual onychomycosis should prompt HIV testing. Malassezia folliculitis is commonly misdiagnosed as acne and will not respond to antibiotics. Kerion should NOT be incised - it is an inflammatory mass, not an abscess; treat with oral antifungals and consider short-course steroids.',
    },
    4: {
      level: 4,
      summary: 'Advanced fungal dermatology encompasses antifungal pharmacology, drug resistance, management in immunocompromised hosts, and recognition of deep fungal infections presenting with cutaneous manifestations.',
      explanation: `## Antifungal Pharmacology

### Mechanisms of Action

**Azoles** (Fluconazole, Itraconazole, Ketoconazole):
- Inhibit lanosterol 14-alpha-demethylase (CYP51)
- Block ergosterol synthesis
- Fungistatic

**Allylamines** (Terbinafine):
- Inhibit squalene epoxidase
- Block ergosterol synthesis (earlier step)
- Fungicidal for dermatophytes

**Polyenes** (Nystatin, Amphotericin):
- Bind ergosterol directly
- Form membrane pores
- Fungicidal

**Echinocandins** (Caspofungin, Micafungin, Anidulafungin):
- Inhibit beta-1,3-glucan synthase
- Cell wall synthesis disruption
- Fungicidal for Candida

### Drug Interactions

**Itraconazole**:
- CYP3A4 inhibitor (major interactions)
- Do not use with simvastatin, lovastatin
- Caution with many drugs
- Requires acidic pH for absorption (avoid PPI)

**Terbinafine**:
- CYP2D6 inhibitor
- Fewer interactions than azoles
- Can affect tricyclics, beta-blockers

**Fluconazole**:
- CYP2C9 inhibitor
- Warfarin interaction (increase INR)
- Generally well-tolerated

### Resistance Mechanisms

**Azole Resistance**:
- ERG11 mutations (target alteration)
- Efflux pumps (CDR1, CDR2, MDR1)
- ERG3 mutations (bypass pathway)

**Emerging Resistance Concerns**:
- T. rubrum with terbinafine resistance (rare but reported)
- Candida auris: Multi-drug resistant
- Azole-resistant Aspergillus (environmental exposure)

## Immunocompromised Host Considerations

### HIV/AIDS

**CD4 Count Correlates**:
| CD4 Count | Fungal Infections |
|-----------|-------------------|
| <200 | Oral/esophageal candidiasis |
| <100 | Cryptococcosis, histoplasmosis |
| <50 | Invasive aspergillosis, disseminated candidiasis |

**Dermatologic Presentations**:
- Oral thrush: Often first sign
- Extensive seborrheic dermatitis
- Severe tinea (extensive, unusual sites)
- Proximal subungual onychomycosis
- Deep fungal dissemination to skin

### Solid Organ Transplant

**Timeline**:
- Early (<1 month): Candida (surgical site, catheter)
- Intermediate (1-6 months): Endemic mycoses, Aspergillus
- Late (>6 months): Community-acquired fungi

**Skin Manifestations of Deep Fungi**:
- Nodules, pustules, ulcers
- May be primary site or dissemination marker
- Biopsy for diagnosis

### Neutropenia

**High-Risk Fungi**:
- Aspergillus (pulmonary → disseminated)
- Mucorales (rhino-orbital-cerebral, disseminated)
- Fusarium (cutaneous and disseminated)

**Skin Findings**:
- Ecthyma gangrenosum-like lesions
- Papules/nodules with central necrosis
- May be only accessible site for diagnosis

## Deep Fungal Infections

### Endemic Mycoses

**Histoplasmosis**:
- Histoplasma capsulatum
- Ohio/Mississippi River valleys
- Skin lesions in disseminated disease: Papules, nodules, ulcers
- Often immunocompromised
- Treatment: Itraconazole (mild), amphotericin (severe)

**Blastomycosis**:
- Blastomyces dermatitidis
- Southeast/Midwest US
- Skin: Verrucous nodules, pustules
- Can have isolated skin disease
- Treatment: Itraconazole, amphotericin

**Coccidioidomycosis**:
- Coccidioides immitis/posadasii
- Southwest US (Valley Fever)
- Skin: Erythema nodosum (reactive), disseminated papules/nodules
- Erythema nodosum = good prognosis
- Treatment: Fluconazole, itraconazole, amphotericin

### Opportunistic Molds

**Aspergillosis**:
- Usually pulmonary primary
- Skin: Papules/nodules with necrotic center
- May spread along catheters
- Treatment: Voriconazole

**Mucormycosis**:
- Rhizopus, Mucor, Lichtheimia
- Rhino-orbital-cerebral (diabetes)
- Cutaneous (trauma, burns)
- Rapidly progressive, high mortality
- Treatment: Surgical debridement + amphotericin

**Fusariosis**:
- Fusarium species
- Papules with central necrosis, mycotic keratitis
- Often blood cultures positive (unique among molds)
- Treatment: Voriconazole, amphotericin

### Dimorphic Fungi

**Concept**:
- Mold in environment (25C)
- Yeast in tissue (37C)
- Temperature-dependent morphology

**Examples**:
- Histoplasma, Blastomyces, Coccidioides
- Sporothrix, Paracoccidioides, Talaromyces marneffei

## Complex Clinical Scenarios

### Majocchi's Granuloma

**Pathogenesis**:
- Dermatophyte invasion into dermis (usually superficial)
- Often from shaving legs
- Topical steroids may precipitate

**Clinical**:
- Perifollicular papules/nodules
- Lower legs common
- May be misdiagnosed as folliculitis

**Treatment**:
- Oral antifungals required (topicals don't penetrate)
- Terbinafine or itraconazole

### Tinea Incognito

**Definition**:
- Tinea modified by topical steroids
- Atypical appearance

**Features**:
- Reduced scale and inflammation
- Expanded, poorly defined borders
- May mimic other conditions

**Management**:
- Stop steroids
- Confirm with KOH/culture
- Oral antifungals often needed (extensive)

### Recurrent Dermatophytosis

**Evaluation**:
- Confirm diagnosis (non-dermatophyte molds?)
- Evaluate for tinea pedis reservoir
- Check for household/animal sources
- Consider immunodeficiency if severe/recurrent

**Management**:
- Treat tinea pedis (common reservoir)
- Environmental measures (shoes, socks)
- Consider longer treatment course
- Pulse or maintenance therapy`,
      keyTerms: [
        { term: 'squalene epoxidase', definition: 'Enzyme in ergosterol synthesis targeted by terbinafine' },
        { term: 'Candida auris', definition: 'Multi-drug resistant yeast emerging as healthcare-associated pathogen' },
        { term: 'Majocchi granuloma', definition: 'Deep dermatophyte infection penetrating into dermis' },
        { term: 'tinea incognito', definition: 'Atypical tinea modified by topical steroid use' },
        { term: 'dimorphic fungi', definition: 'Fungi existing as mold in environment and yeast in tissue' },
        { term: 'mucormycosis', definition: 'Aggressive mold infection by Mucorales, often in diabetes/immunocompromised' },
      ],
      clinicalNotes: 'Itraconazole requires acidic pH for absorption - avoid PPIs or take with acidic drink. Mucormycosis progresses rapidly and requires emergent surgical debridement alongside antifungals. Majocchi granuloma needs oral antifungals - topicals cannot penetrate. Tinea incognito results from inappropriate steroid use - always scrape for KOH before prescribing topical steroids for suspected "eczema."',
    },
    5: {
      level: 5,
      summary: 'Expert fungal dermatology integrates molecular diagnostics, novel antifungals, management of drug-resistant infections, and recognition of emerging fungal pathogens.',
      explanation: `## Molecular Diagnostics

### PCR-Based Methods

**Advantages**:
- Rapid (hours vs weeks for culture)
- High sensitivity
- Can detect from formalin-fixed tissue
- Species-level identification

**Limitations**:
- Cannot determine viability (dead vs living)
- Cannot provide susceptibility testing
- Cost

### Matrix-Assisted Laser Desorption/Ionization (MALDI-TOF)

- Rapid identification from culture
- Species level in minutes
- Increasingly available in clinical labs
- Revolutionized fungal identification

### Antifungal Susceptibility Testing

**Methods**:
- CLSI broth microdilution (reference)
- Etest
- Automated systems (Vitek)

**Interpretation**:
- MIC values correlate with outcome for Candida
- Less established for dermatophytes
- Epidemiological cut-off values (ECVs) identify resistance

## Emerging Resistance

### Terbinafine-Resistant Dermatophytes

**Emergence**:
- First reports from India (2017)
- Now seen globally
- Primarily Trichophyton indotineae (formerly T. mentagrophytes genotype VIII)

**Mechanism**:
- Point mutations in squalene epoxidase gene (SQLE)
- F397L, L393F, L393S most common

**Clinical Significance**:
- Chronic, recurrent dermatophytosis
- Treatment failure with terbinafine
- May require itraconazole or combination therapy

### Candida auris

**Characteristics**:
- Multi-drug resistance (azoles, echinocandins, amphotericin)
- Healthcare-associated
- Environmental persistence
- Skin colonization → Spread

**Skin Involvement**:
- May colonize skin
- Wound infections
- Can cause invasive disease from skin

**Infection Control**:
- Contact precautions
- Terminal cleaning
- Screening protocols

### Azole-Resistant Aspergillus

**Mechanism**:
- TR34/L98H, TR46/Y121F/T289A mutations
- Linked to agricultural azole fungicide use
- Environmental acquisition before infection

**Clinical Impact**:
- Higher mortality
- Requires alternative therapy (echinocandin + amphotericin)
- Emerging public health concern

## Novel Therapeutics

### New Antifungal Agents

| Agent | Class | Spectrum | Status |
|-------|-------|----------|--------|
| Ibrexafungerp | Triterpenoid (glucan synthase) | Candida, Aspergillus | FDA approved (2021) |
| Olorofim | Orotomide (DHODH inhibitor) | Aspergillus, endemic | Phase 3 |
| Fosmanogepix | Gwt1 inhibitor | Broad | Phase 2 |
| Rezafungin | Echinocandin (long-acting) | Candida, Aspergillus | FDA approved (2023) |

### Ibrexafungerp

**Mechanism**:
- Inhibits beta-1,3-glucan synthase (like echinocandins)
- Different binding site → Active against some echinocandin-resistant strains
- Oral bioavailability (unlike echinocandins)

**Approved Use**:
- Vulvovaginal candidiasis (including recurrent)
- Invasive candidiasis (pending)

### Rezafungin

**Properties**:
- Long half-life (130 hours)
- Once-weekly dosing
- IV formulation
- Approved for candidemia

### Photodynamic Therapy

**Concept**:
- Photosensitizer + specific wavelength light
- Generates reactive oxygen species
- Fungicidal effect

**Applications**:
- Onychomycosis (adjunctive)
- Superficial mycoses
- Limited penetration depth

### Laser Treatment for Onychomycosis

**Devices**:
- Nd:YAG laser (1064nm)
- Fractional CO2 laser
- Diode lasers

**Evidence**:
- Variable results in trials
- May enhance topical penetration
- Not stand-alone therapy
- Expensive, multiple sessions

## Complex Patient Populations

### Dermatophytosis in India

**Epidemic Features**:
- Chronic, recurrent dermatophytosis
- Large BSA involvement
- Treatment-resistant
- Primarily T. indotineae

**Contributing Factors**:
- Inappropriate steroid use
- Antifungal misuse
- Terbinafine resistance
- Climate (warm, humid)

**Management Approach**:
- Confirm with culture + susceptibility
- Avoid topical steroids
- Itraconazole if terbinafine-resistant
- Extended courses
- Treat contacts and environment

### Fungal Infections in Biologics

**Risk Assessment**:
| Biologic Class | Fungal Risk |
|----------------|-------------|
| TNF inhibitors | Increased endemic mycoses |
| IL-17 inhibitors | Increased candidiasis (mucosal) |
| JAK inhibitors | Increased various mycoses |

**Pre-Screening**:
- Histoplasma/Coccidioides serology in endemic areas
- TB screening (also granulomatous)

**Management**:
- Treat tinea before starting
- Educate on symptoms
- Low threshold for investigation

## Quality and Stewardship

### Antifungal Stewardship

**Principles**:
- Confirm diagnosis before treating (especially onychomycosis)
- Use narrow spectrum when possible
- Appropriate duration
- Monitor for toxicity and interactions

**Quality Metrics**:
- Diagnostic confirmation rates for onychomycosis
- Appropriate topical vs oral selection
- Drug interaction screening

### Diagnostic Optimization

**Pre-Test Probability**:
- Not all nail dystrophy is fungal
- Clinical scoring systems exist (KOH-OCI)
- Cost-effectiveness of testing

**Algorithm**:
1. Clinical suspicion → KOH/fungal stain
2. If negative but high suspicion → Culture or histopath
3. Confirm before oral therapy
4. Consider PCR if available

### Patient Education

- Treatment duration expectations (months for nails)
- Recurrence risk
- Environmental measures
- When to seek care for recurrence`,
      keyTerms: [
        { term: 'T. indotineae', definition: 'Terbinafine-resistant dermatophyte causing epidemic in India' },
        { term: 'SQLE mutation', definition: 'Squalene epoxidase gene mutation conferring terbinafine resistance' },
        { term: 'ibrexafungerp', definition: 'First oral glucan synthase inhibitor, active against resistant Candida', pronunciation: 'eye-brex-ah-FUN-jerp' },
        { term: 'rezafungin', definition: 'Long-acting echinocandin allowing once-weekly dosing' },
        { term: 'MALDI-TOF', definition: 'Rapid mass spectrometry method for fungal identification' },
        { term: 'antifungal stewardship', definition: 'Systematic approach to optimize antifungal use and reduce resistance' },
      ],
      clinicalNotes: `Expert clinical pearls:
1. Terbinafine resistance in dermatophytes is increasing globally - consider culture and susceptibility for treatment failures
2. T. indotineae (formerly T. mentagrophytes genotype VIII) is the primary resistant strain - responds to itraconazole
3. Ibrexafungerp is new oral option for recurrent vulvovaginal candidiasis
4. Pre-screen for endemic mycoses before starting immunosuppressive biologics in appropriate regions
5. Photodynamic therapy and lasers are adjunctive for onychomycosis, not stand-alone
6. Candida auris requires strict infection control - can colonize skin
7. Confirm onychomycosis diagnosis before starting oral therapy (50% of dystrophic nails are not fungal)
8. MALDI-TOF has revolutionized fungal identification speed in clinical labs`,
    },
  },

  media: [
    {
      id: 'tinea-types',
      type: 'diagram',
      filename: 'tinea-clinical.svg',
      title: 'Clinical Types of Tinea',
      description: 'Visual guide to tinea corporis, capitis, pedis, cruris, and unguium',
    },
    {
      id: 'koh-preparation',
      type: 'diagram',
      filename: 'koh-prep.svg',
      title: 'KOH Preparation Technique',
      description: 'Step-by-step guide to performing and interpreting KOH prep',
    },
  ],

  citations: [
    {
      id: 'aad-onychomycosis-guidelines',
      type: 'article',
      title: 'Guidelines for the management of onychomycosis',
      authors: ['Lipner SR', 'Scher RK'],
      source: 'Journal of the American Academy of Dermatology',
    },
    {
      id: 'bolognia-fungal',
      type: 'textbook',
      title: 'Fungal Infections',
      source: 'Dermatology (Bolognia)',
      chapter: '77',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-nail-disorders', targetType: 'condition', relationship: 'related', label: 'Nail Disorders' },
    { targetId: 'dermatology-bacterial-infections', targetType: 'condition', relationship: 'related', label: 'Bacterial Infections (Differential)' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'infectious disease', 'mycology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default fungalSkinInfectionsContent;
