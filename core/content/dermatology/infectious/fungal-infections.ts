/**
 * Fungal Skin Infections
 *
 * Dermatophytosis (tinea), candidiasis, and deep fungal infections
 * including diagnosis (KOH, culture), treatment, and antifungal pharmacology.
 */

import { EducationalContent } from '../../types';

export const fungalInfectionsContent: EducationalContent = {
  id: 'derm-infectious-fungal',
  type: 'condition',
  name: 'Fungal Skin Infections',
  nameEs: 'Infecciones Micoticas de la Piel',
  alternateNames: ['Dermatophytosis', 'Tinea', 'Cutaneous Mycosis', 'Ringworm'],

  levels: {
    1: {
      level: 1,
      summary: 'Fungal skin infections are caused by tiny organisms that live on dead skin, hair, and nails. Common types include ringworm, athlete\'s foot, and yeast infections.',
      explanation: `## What Are Fungal Skin Infections?\n\nFungi are tiny organisms that can infect the skin, hair, and nails. Despite the name, "ringworm" is not a worm; it is a fungus.\n\n## Common Types\n- **Ringworm (tinea corporis)**: ring-shaped rash on the body\n- **Athlete's foot (tinea pedis)**: itchy, peeling skin between toes\n- **Jock itch (tinea cruris)**: rash in the groin area\n- **Scalp ringworm (tinea capitis)**: scaly patches and hair loss on the scalp\n- **Yeast infection (candidiasis)**: red, moist rash in skin folds\n\n## How You Get Them\n- Warm, moist environments\n- Sharing towels, shoes, or combs\n- Contact with infected people or animals\n\n## Treatment\n- Antifungal creams for most skin infections\n- Oral antifungal pills for scalp and nail infections`,
      keyTerms: [
        { term: 'Ringworm', definition: 'A fungal skin infection forming a ring-shaped rash (not caused by a worm)' },
        { term: 'Athlete\'s foot', definition: 'A fungal infection between the toes causing itching and peeling' },
        { term: 'Antifungal', definition: 'A medicine that kills or stops the growth of fungi' },
      ],
      analogies: ['Fungi grow on skin like mold grows on bread, especially in warm, moist places.'],
      examples: ['A child with a ring-shaped rash on the arm after playing with a kitten (tinea corporis from animal contact)'],
      patientCounselingPoints: ['Keep skin clean and dry.', 'Do not share towels, combs, or shoes.', 'Wear sandals in public showers.', 'Finish all antifungal medicine even if the rash looks better.'],
    },
    2: {
      level: 2,
      summary: 'Dermatophyte infections (tinea) are classified by body site and caused by Trichophyton, Microsporum, and Epidermophyton species. Diagnosis uses KOH prep; treatment depends on location and severity.',
      explanation: `## Dermatophyte Classification\n- **Trichophyton**: most common genus; infects skin, hair, nails\n- **Microsporum**: infects skin and hair (fluoresces under Wood lamp)\n- **Epidermophyton**: infects skin and nails only\n\n## Tinea by Body Site\n- Tinea capitis: children, T. tonsurans (US), broken hairs, kerion (boggy mass)\n- Tinea corporis: annular plaques with central clearing, active scaly border\n- Tinea cruris: spares scrotum (vs candida which involves folds)\n- Tinea pedis: interdigital maceration, moccasin distribution\n- Tinea unguium (onychomycosis): thickened, discolored, dystrophic nails\n- Tinea versicolor: Malassezia furfur; hypo/hyperpigmented patches, "spaghetti and meatballs" on KOH\n\n## Diagnosis\n- KOH prep: dissolves keratin, reveals branching hyphae\n- Wood lamp: Microsporum fluoresces blue-green; erythrasma fluoresces coral-red\n- Fungal culture: gold standard but takes 2-4 weeks\n\n## Candidiasis\n- Candida albicans: red, moist erosions with satellite papules/pustules\n- Risk factors: diabetes, obesity, antibiotics, immunosuppression\n- Treatment: topical nystatin or azoles\n\n## Treatment Overview\n- Topical azoles (clotrimazole, ketoconazole) or terbinafine for localized tinea\n- Oral terbinafine or griseofulvin for tinea capitis (topicals alone insufficient)\n- Oral terbinafine or itraconazole for onychomycosis (3-6 months)`,
      keyTerms: [
        { term: 'KOH prep', definition: 'Potassium hydroxide preparation dissolving keratin to reveal fungal hyphae under microscopy' },
        { term: 'Dermatophyte', definition: 'Fungus that infects keratinized tissue (skin, hair, nails)' },
        { term: 'Kerion', definition: 'Boggy, inflammatory mass on the scalp from severe tinea capitis' },
        { term: 'Satellite lesions', definition: 'Small papules/pustules surrounding the main rash, characteristic of Candida' },
      ],
      analogies: ['KOH dissolves the skin cells like clearing fog so you can see the fungal "branches" underneath.'],
      examples: ['A child with scaly alopecia and a boggy mass on the scalp (kerion) is treated with oral griseofulvin and a short steroid course'],
      clinicalNotes: 'Tinea capitis always requires oral antifungals; topical therapy does not penetrate the hair follicle. Griseofulvin is first-line in children; terbinafine is an alternative.',
    },
    3: {
      level: 3,
      summary: 'Dermatophyte pathogenesis involves keratinase-mediated tissue invasion. Tinea incognito results from steroid misuse. Antifungal mechanisms include ergosterol synthesis inhibition (azoles) and squalene epoxidase blockade (terbinafine).',
      explanation: `## Pathogenesis\n- Dermatophytes produce keratinases that digest keratin in stratum corneum, hair, and nails\n- Arthroconidia adhere to corneocytes -> germinate -> invade keratinized structures\n- Host immune response: Th1-mediated clearance; Th2 response leads to chronic infection\n- Dermatophytid reaction ("id reaction"): secondary eczematous eruption at distant site due to immune response\n\n## Tinea Incognito\n- Altered dermatophyte infection from topical steroid misuse\n- Loss of classic ring morphology; diagnosis delayed\n- Expanded, less scaly, atypical borders\n- May become deep and widespread (Majocchi granuloma: follicular invasion)\n\n## Antifungal Pharmacology\n- **Azoles** (clotrimazole, ketoconazole, itraconazole, fluconazole):\n  - Inhibit lanosterol 14-alpha demethylase (CYP51)\n  - Block ergosterol synthesis -> membrane destabilization\n  - Drug interactions via CYP3A4 inhibition\n- **Terbinafine**: squalene epoxidase inhibitor\n  - Fungicidal; accumulates in keratin (nail levels persist months after stopping)\n  - Fewer drug interactions than azoles\n  - Hepatotoxicity rare; check LFTs at baseline\n- **Griseofulvin**: disrupts mitotic spindle microtubules; fungistatic\n  - Requires high-fat meal for absorption\n  - First-line for pediatric tinea capitis\n\n## Onychomycosis\n- Confirm with KOH, PAS stain, or culture before treating (only 50% of dystrophic nails are fungal)\n- Terbinafine: 12 weeks for toenails, 6 weeks for fingernails\n- Efinaconazole 10% topical: for patients who cannot take oral therapy`,
      keyTerms: [
        { term: 'Tinea incognito', definition: 'Dermatophyte infection with altered morphology due to topical steroid misuse' },
        { term: 'Majocchi granuloma', definition: 'Deep follicular dermatophyte infection forming granulomatous nodules' },
        { term: 'Lanosterol 14-alpha demethylase', definition: 'Fungal enzyme targeted by azole antifungals to block ergosterol synthesis' },
        { term: 'Id reaction', definition: 'Secondary eczematous eruption at a distant site triggered by immune response to fungal infection' },
      ],
      analogies: ['Terbinafine accumulates in nails like dye in fabric; it persists long after you stop taking the pill.'],
      examples: ['A patient with an atypical expanding rash misdiagnosed as eczema and treated with steroids is found to have tinea incognito on KOH prep'],
      clinicalNotes: 'Always confirm onychomycosis before prescribing oral terbinafine. PAS stain of nail clipping is more sensitive than KOH. Drug interactions are critical with itraconazole (CYP3A4).',
    },
    4: {
      level: 4,
      summary: 'Advanced mycology includes Majocchi granuloma pathology, antifungal resistance mechanisms (ERG11 mutations, efflux pumps), Trichophyton indotineae (widespread resistant dermatophytosis), and systemic mycoses with cutaneous manifestations.',
      explanation: `## Trichophyton indotineae\n- Emerging resistant dermatophyte originating from South Asia\n- Resistant to terbinafine (squalene epoxidase mutations: Leu393Phe, Phe397Leu)\n- Widespread, recalcitrant tinea corporis/cruris\n- Treatment: itraconazole (first-line), combination topicals\n- Global spread: cases in US, Europe, Middle East\n\n## Antifungal Resistance Mechanisms\n- ERG11 mutations: reduced azole binding to lanosterol demethylase\n- Efflux pumps (CDR1, MDR1): expel drug from fungal cell\n- Biofilm formation: Candida species, reduces drug penetration\n- Cross-resistance: fluconazole resistance often extends to other azoles\n\n## Deep Fungal Infections with Cutaneous Manifestations\n- Sporotrichosis: lymphocutaneous nodules ascending the arm (rose gardener)\n  - Treatment: itraconazole or saturated potassium iodide (SSKI)\n- Chromomycosis: verrucous nodules; sclerotic (Medlar) bodies on pathology\n- Mycetoma: draining sinuses with grains; actinomycotic vs eumycotic\n- Disseminated histoplasmosis/coccidioidomycosis: papules, nodules, ulcers in immunocompromised\n\n## Majocchi Granuloma Pathology\n- Follicular and perifollicular granulomatous inflammation\n- Foreign-body giant cells surrounding fungal elements\n- PAS/GMS stains highlight hyphae within follicle\n- Treatment: oral antifungal (topicals insufficient)\n\n## Immunology of Dermatophytosis\n- Th1 response (IFN-gamma, TNF): clearance\n- Th2/regulatory response: chronic/recurrent infection\n- Atopic patients: impaired Th1 response to dermatophytes\n- Mannan (fungal cell wall): activates TLR-4, dectin-2`,
      keyTerms: [
        { term: 'T. indotineae', definition: 'Terbinafine-resistant dermatophyte species causing widespread recalcitrant tinea' },
        { term: 'Sporotrichosis', definition: 'Lymphocutaneous fungal infection from Sporothrix schenckii, classically from rose thorn inoculation' },
        { term: 'Medlar bodies', definition: 'Sclerotic bodies seen on histology in chromomycosis' },
        { term: 'Dectin-2', definition: 'Pattern recognition receptor on macrophages detecting fungal mannan' },
      ],
      analogies: ['Sporotrichosis ascending the arm follows the lymphatics like a train following tracks from the initial thorn-prick station.'],
      examples: ['A patient returning from India with widespread tinea corporis failing terbinafine is found to have T. indotineae on molecular testing'],
      clinicalNotes: 'T. indotineae is a global public health concern. Molecular identification (ITS sequencing) is needed for species-level diagnosis. Treat with itraconazole, not terbinafine.',
    },
    5: {
      level: 5,
      summary: 'Frontier research includes novel antifungal targets (Gwt1 inhibitors, olorofim), molecular diagnostics (MALDI-TOF, PCR panels), antifungal immunotherapy, and the evolving epidemiology of resistant dermatophytosis.',
      explanation: `## Novel Antifungal Agents\n- Fosmanogepix (Gwt1 inhibitor): blocks GPI-anchored protein maturation; broad-spectrum\n- Olorofim (DHODH inhibitor): dihydroorotate dehydrogenase; active against resistant molds\n- Ibrexafungerp: triterpenoid glucan synthase inhibitor; oral, approved for vulvovaginal candidiasis\n- Rezafungin: long-acting echinocandin (once-weekly dosing)\n- Oteseconazole: fungal-selective CYP51 inhibitor; minimal human CYP interaction\n\n## Molecular Diagnostics\n- MALDI-TOF mass spectrometry: rapid species identification from culture\n- PCR/sequencing (ITS region): gold standard for species identification\n- Multiplex PCR panels: detect dermatophytes + resistance mutations simultaneously\n- Point-of-care dermatophyte PCR: results in hours vs weeks for culture\n\n## Antifungal Immunotherapy\n- Checkpoint inhibition (anti-PD-1) enhances antifungal Th1 response in chronic mucocutaneous candidiasis\n- Cytokine therapy: IFN-gamma for refractory deep mycoses\n- Vaccine development: NDV-3A (rAls3p-N vaccine) for Candida; phase 2 completed\n\n## Epidemiologic Shifts\n- T. indotineae: pandemic-like spread via international travel\n- Antifungal stewardship: over-the-counter topical azole overuse driving resistance\n- Climate change: expanding geographic range of endemic mycoses\n- Candida auris: nosocomial multidrug-resistant yeast; skin colonization, environmental persistence\n\n## Fungal Microbiome\n- Malassezia species dominate healthy skin mycobiome\n- Malassezia-specific IgE contributes to head/neck AD in adults\n- Mycobiome dysbiosis in psoriasis and seborrheic dermatitis`,
      keyTerms: [
        { term: 'Fosmanogepix', definition: 'Novel Gwt1 inhibitor antifungal blocking GPI-anchored protein maturation' },
        { term: 'MALDI-TOF', definition: 'Rapid mass spectrometry-based fungal species identification from culture' },
        { term: 'Candida auris', definition: 'Multidrug-resistant nosocomial yeast with environmental persistence and skin colonization' },
        { term: 'Oteseconazole', definition: 'Fungal-selective CYP51 inhibitor with minimal human drug interactions' },
      ],
      analogies: ['Candida auris is the fungal equivalent of MRSA: resistant, persistent on surfaces, and spreading through healthcare settings.'],
      examples: ['A dermatophytosis outbreak in a long-term care facility is rapidly identified as T. indotineae using multiplex PCR, enabling targeted itraconazole therapy'],
      clinicalNotes: 'Point-of-care PCR for dermatophytes may replace culture as first-line diagnostic, enabling same-day species identification and resistance detection. Antifungal stewardship programs are needed to combat rising resistance.',
    },
  },

  media: [],
  citations: [
    { id: 'fungal-ref-1', type: 'textbook', title: 'Dermatology (Bolognia)', authors: ['Bolognia, J.', 'Schaffer, J.', 'Cerroni, L.'], source: 'Elsevier', chapter: 'Superficial and Deep Mycoses' },
    { id: 'fungal-ref-2', type: 'article', title: 'Trichophyton indotineae: an emerging terbinafine-resistant dermatophyte', source: 'JAAD', url: 'https://doi.org/10.1016/j.jaad.2022.09.050' },
  ],
  crossReferences: [
    { targetId: 'derm-infectious-cellulitis', targetType: 'condition', relationship: 'sibling', label: 'Cellulitis' },
    { targetId: 'dermatology-skin-infections', targetType: 'topic', relationship: 'parent', label: 'Skin Infections' },
  ],
  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'infectious-disease', 'mycology', 'antifungals'],
    keywords: ['tinea', 'dermatophyte', 'KOH', 'terbinafine', 'onychomycosis', 'Candida', 'T. indotineae'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['dermatology', 'medicine', 'pediatrics'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
