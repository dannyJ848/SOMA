/**
 * Cryotherapy
 *
 * Liquid nitrogen-based cryotherapy for actinic keratoses, warts,
 * and benign/premalignant skin lesions: technique, wound care, and alternatives.
 */

import { EducationalContent } from '../../types';

export const cryotherapyContent: EducationalContent = {
  id: 'derm-procedures-cryotherapy',
  type: 'topic',
  name: 'Cryotherapy',
  nameEs: 'Crioterapia',
  alternateNames: ['Cryosurgery', 'Liquid Nitrogen Treatment', 'LN2 Treatment'],

  levels: {
    1: {
      level: 1,
      summary: 'Cryotherapy uses extreme cold (liquid nitrogen) to freeze and destroy abnormal skin growths like warts, precancers, and skin tags.',
      explanation: `## What Is Cryotherapy?\n\nCryotherapy uses liquid nitrogen (a very cold liquid at -196C) sprayed on the skin to freeze and destroy unwanted growths.\n\n## What Is It Used For?\n- Warts\n- Precancer patches (actinic keratoses)\n- Skin tags\n- Some small skin cancers\n\n## What to Expect\n- A brief stinging or burning sensation\n- The area turns white during freezing\n- A blister may form within hours\n- The treated area scabs and falls off in 1-3 weeks\n\n## Aftercare\n- Keep the area clean\n- Do not pick at the blister or scab\n- Apply petroleum jelly if needed\n- The spot may be lighter in color after healing`,
      keyTerms: [
        { term: 'Cryotherapy', definition: 'A treatment that uses extreme cold to freeze and destroy abnormal skin cells' },
        { term: 'Liquid nitrogen', definition: 'A very cold liquid (-196C) used to freeze skin growths' },
        { term: 'Actinic keratosis', definition: 'A rough, scaly precancer spot from sun damage' },
      ],
      analogies: ['Cryotherapy is like using frost to kill weeds in a garden; the extreme cold destroys the unwanted growth.'],
      examples: ['A patient has several rough spots on their forehead treated with a quick spray of liquid nitrogen at the dermatologist office'],
      patientCounselingPoints: ['A blister is normal and will heal on its own.', 'The treated area may be lighter in color afterward.', 'You may need more than one treatment for stubborn warts.'],
    },
    2: {
      level: 2,
      summary: 'Cryotherapy with liquid nitrogen (-196C) causes controlled tissue destruction through ice crystal formation and vascular damage. It is first-line for actinic keratoses and common warts.',
      explanation: `## Mechanism\n- Rapid freezing creates intracellular ice crystals -> cell membrane disruption\n- Slow thaw maximizes damage (recrystallization)\n- Vascular stasis: endothelial damage -> thrombosis -> ischemic necrosis\n- Immune response: release of antigens may stimulate immune clearance (warts)\n\n## Technique\n- Spray: open spray or confined spray (cone/otoscope tip)\n- Contact: cryoprobe applied to lesion\n- Freeze time: 5-10 seconds for AK, 10-30 seconds for warts, longer for thicker lesions\n- Double freeze-thaw cycle for warts and premalignancies\n\n## Indications\n- Actinic keratoses (first-line for isolated lesions)\n- Common and plantar warts\n- Seborrheic keratoses\n- Skin tags\n- Molluscum contagiosum\n- Superficial BCC/SCC in situ (when surgery is not appropriate)\n\n## Contraindications\n- Suspected melanoma (destroys tissue, preventing biopsy)\n- Cryoglobulinemia, cold urticaria\n- Poorly healing areas (lower legs in PVD patients)\n- Lesions requiring histologic diagnosis\n\n## Complications\n- Pain and swelling\n- Blistering (hemorrhagic blister possible)\n- Hypopigmentation (melanocyte sensitivity to cold)\n- Hyperpigmentation\n- Nerve damage (rare, prolonged freeze over digital nerves)\n- Alopecia (if treating scalp)`,
      keyTerms: [
        { term: 'Freeze-thaw cycle', definition: 'Cryotherapy technique of freezing, allowing thaw, and refreezing for greater destruction' },
        { term: 'Cryoprobe', definition: 'Metal tip cooled by liquid nitrogen applied directly to lesion for controlled freezing' },
        { term: 'Vascular stasis', definition: 'Blood vessel damage from freezing leading to thrombosis and tissue death' },
        { term: 'Hypopigmentation', definition: 'Lightening of skin after cryotherapy due to melanocyte sensitivity to cold' },
      ],
      analogies: ['The double freeze-thaw cycle is like hitting a target twice: the first freeze weakens the cells, the second finishes them off.'],
      examples: ['An actinic keratosis on the hand is treated with a 5-second open spray of liquid nitrogen; a small blister forms the next day and resolves in 10 days'],
      clinicalNotes: 'Always warn patients about hypopigmentation, especially in darker skin tones. Never freeze a pigmented lesion that has not been evaluated for melanoma.',
    },
    3: {
      level: 3,
      summary: 'Cryobiology involves intracellular ice formation at -40C or below, cell membrane phospholipid damage, and osmotic lysis during thawing. Lateral spread of freeze (cryonecrosis zone) determines treatment margin.',
      explanation: `## Cryobiology\n- Cell death occurs when tissue reaches -40 to -50C\n- Rapid freeze (>50C/min) -> intracellular ice crystals -> membrane perforation\n- Slow freeze -> extracellular ice -> osmotic dehydration -> cell shrinkage\n- Slow thaw (critical): ice recrystallization maximizes damage\n- Repeated freeze-thaw cycles are more destructive than single cycle\n\n## Temperature Monitoring\n- Thermocouple needle placed at deep margin of lesion\n- Target: -50C at tissue base for malignant lesions\n- For benign lesions: -25 to -30C sufficient\n- Lateral spread: freeze extends ~1-1.5 mm beyond visible ice ball\n\n## Cryonecrosis Zone\n- Zone 1 (center): -50C, immediate necrosis\n- Zone 2 (intermediate): -25 to -40C, variable cell death\n- Zone 3 (periphery): -10 to -25C, sublethal damage, inflammation\n- Practical margin: treat 1-2 mm beyond clinical lesion border\n\n## Field Treatment of AKs\n- Multiple AKs in sun-damaged field:\n  - Cryotherapy: individual lesion treatment\n  - Topical 5-FU 5% cream: 2-4 weeks, treats subclinical AKs\n  - Imiquimod 5%: 2-3x/week for 16 weeks\n  - Photodynamic therapy (PDT): ALA or MAL + light\n  - Diclofenac 3% gel: mild, 60-90 days\n  - Tirbanibulin 1% ointment: 5 days, newest option\n\n## Comparison: Cryotherapy vs Field Therapies\n- Cryotherapy: fast, office-based, treats visible lesions only\n- Field therapies: treat subclinical AKs, reduce future SCC risk\n- Combination: cryo for thick AKs + field therapy for background damage\n- RCTs show field therapies reduce AK counts by 70-90%`,
      keyTerms: [
        { term: 'Recrystallization', definition: 'Ice crystal growth during slow thaw that maximizes cell membrane damage' },
        { term: 'Cryonecrosis zone', definition: 'Concentric temperature zones around the freeze point determining tissue damage extent' },
        { term: 'PDT', definition: 'Photodynamic therapy using topical photosensitizer + light to treat AKs and superficial skin cancers' },
        { term: 'Tirbanibulin', definition: 'Newest topical agent for actinic keratoses; 5-day course with Src kinase/tubulin inhibition' },
      ],
      analogies: ['The cryonecrosis zone is like the blast radius of an explosion: maximum damage at the center, decreasing outward.'],
      examples: ['A patient with >15 AKs on the scalp receives cryotherapy for thick lesions and topical 5-FU for 4 weeks to treat the entire sun-damaged field'],
      clinicalNotes: 'For patients with field cancerization, cryotherapy alone is insufficient; combine with field therapy to address subclinical AKs. PDT offers excellent cosmetic outcomes but requires office visit for light application.',
    },
    4: {
      level: 4,
      summary: 'Advanced cryotherapy applications include cryoimmunology (combining cryo with immunotherapy), intralesional cryotherapy (CryoShape/Cryoprobe), and evidence-based AK management algorithms comparing efficacy and recurrence across treatment modalities.',
      explanation: `## Cryoimmunology\n- Cryotherapy induces immunogenic cell death (ICD)\n- Releases damage-associated molecular patterns (DAMPs): HMGB1, calreticulin, ATP\n- DAMPs activate dendritic cells -> T-cell priming against tumor antigens\n- Cryo + imiquimod (TLR-7 agonist): enhanced immune response to warts\n- Cryo + intralesional Candida antigen: combination for recalcitrant warts\n- Research: cryo + checkpoint inhibitors for skin cancers (abscopal-like effect)\n\n## Intralesional Cryotherapy\n- CryoShape/CryoProbe: needle-based cryotherapy inserted into lesion\n- Applications: keloids, hypertrophic scars, vascular malformations\n- Keloids: intralesional cryotherapy achieves >50% volume reduction\n- Mechanism: targeted deep freezing without surface damage\n- Advantage: less hypopigmentation than surface cryotherapy\n\n## Evidence-Based AK Management\n**Clearance rates at 3 months (meta-analyses):**\n- PDT (MAL/ALA): 75-90% per-lesion\n- 5-FU 5%: 70-85%\n- Imiquimod 5%: 55-75%\n- Cryotherapy: 65-80% per-lesion (but does not treat subclinical)\n- Diclofenac 3%: 40-60%\n- Tirbanibulin: ~49% (complete clearance of all lesions in treatment area)\n\n**12-month sustained clearance:**\n- 5-FU > imiquimod > PDT > cryotherapy (AK study of Dutch trial)\n\n## Wart Treatment Algorithm\n1. First-line: cryotherapy + salicylic acid\n2. Second-line: imiquimod, intralesional Candida antigen, 5-FU\n3. Refractory: intralesional bleomycin, pulsed-dye laser, cidofovir\n4. Immune-mediated: contact immunotherapy (SADBE, DPCP)\n5. HPV vaccine (off-label): anecdotal benefit in recalcitrant warts`,
      keyTerms: [
        { term: 'Immunogenic cell death', definition: 'Cell death releasing DAMPs that activate an immune response against tumor/viral antigens' },
        { term: 'DAMPs', definition: 'Damage-associated molecular patterns released by dying cells that activate innate immunity' },
        { term: 'Intralesional cryotherapy', definition: 'Needle-based cryotherapy inserted into keloids/scars for targeted deep freezing' },
        { term: 'DPCP', definition: 'Diphencyprone, contact sensitizer used as immunotherapy for recalcitrant warts' },
      ],
      analogies: ['Cryoimmunology works like a vaccine: the frozen, dying cells release antigens that teach the immune system to recognize and attack remaining tumor/wart cells.'],
      examples: ['A patient with a keloid on the earlobe undergoes intralesional cryotherapy with 60% volume reduction at 3 months'],
      clinicalNotes: 'The Dutch AK trial showed 5-FU had the best sustained clearance at 12 months, challenging cryotherapy as first-line for field treatment. Intralesional cryotherapy for keloids is an emerging option with promising results.',
    },
    5: {
      level: 5,
      summary: 'Frontier cryotherapy research includes cryoablation combined with immune checkpoint inhibitors (cryo-immunotherapy), nanoparticle-enhanced cryosurgery, AI-optimized freeze protocols, and cryopreservation of skin for grafting.',
      explanation: `## Cryo-Immunotherapy Combinations\n- Cryoablation + anti-PD-1: preclinical data showing enhanced antitumor immunity\n- Mechanism: cryo-induced ICD exposes neoantigens; ICI prevents immune escape\n- Clinical trials: intralesional cryo + systemic pembrolizumab for advanced NMSC\n- "In situ vaccination" concept: local cryo primes systemic anti-tumor response\n- Abscopal effect: untreated distant lesions regress after cryo + ICI\n\n## Nanoparticle-Enhanced Cryosurgery\n- Metal nanoparticles (gold, iron oxide) injected into lesion before cryotherapy\n- Enhance thermal conductivity -> more uniform ice ball formation\n- More precise freeze zone with less collateral damage\n- MRI-compatible nanoparticles allow real-time freeze monitoring\n- Preclinical: improved BCC destruction in animal models\n\n## AI-Optimized Cryotherapy\n- Computational models predicting ice ball dimensions from spray parameters\n- Real-time thermal imaging (infrared) during cryotherapy\n- AI algorithms optimizing freeze duration for lesion size and type\n- Standardizing a currently operator-dependent procedure\n\n## Cryopreservation Applications\n- Skin banking: cryopreserved allografts for burn coverage\n- Vitrification (ice-free cryopreservation) of skin tissue\n- Future: cryopreserved autologous skin for delayed reconstruction\n\n## Novel Cryogens\n- Nitrous oxide (N2O): -89C, safer handling, portable cryoguns\n  - Less effective than LN2 for thick lesions; suitable for superficial AK\n- Dimethyl ether + propane (DMEP): OTC freeze products\n  - Temperature only -57C; significantly less effective than LN2\n  - Not recommended for medical use\n\n## Cost-Effectiveness\n- Cryotherapy: lowest per-lesion cost for AK treatment\n- 5-FU: best cost-effectiveness for field treatment (Dutch trial)\n- PDT: highest per-session cost but excellent cosmesis\n- Decision modeling favoring field therapy for >5 AKs in a region`,
      keyTerms: [
        { term: 'Cryo-immunotherapy', definition: 'Combining cryoablation with checkpoint inhibitors to enhance antitumor immune response' },
        { term: 'Nanoparticle-enhanced cryosurgery', definition: 'Using metal nanoparticles to improve thermal conductivity and precision of cryotherapy' },
        { term: 'Vitrification', definition: 'Ice-free cryopreservation technique converting tissue to glass-like state without crystal damage' },
        { term: 'Abscopal effect', definition: 'Regression of distant untreated lesions after local cryo + immunotherapy' },
      ],
      analogies: ['Nanoparticle-enhanced cryosurgery is like adding metal shavings to ice: it conducts cold more evenly, creating a more precise and effective freeze zone.'],
      examples: ['A clinical trial patient with multiple in-transit melanoma metastases receives cryoablation of one lesion + pembrolizumab; regression observed in untreated distant lesions (abscopal effect)'],
      clinicalNotes: 'Cryo-immunotherapy is an exciting frontier that leverages the immunogenic cell death properties of cryotherapy. Nanoparticle-enhanced approaches may address the current limitation of imprecise freeze margins. AI standardization could reduce the operator-dependence that currently limits cryotherapy reproducibility.',
    },
  },

  media: [],
  citations: [
    { id: 'cryo-ref-1', type: 'article', title: 'Cryotherapy for actinic keratoses (Dutch AK trial)', source: 'NEJM', url: 'https://doi.org/10.1056/NEJMoa1811850' },
    { id: 'cryo-ref-2', type: 'textbook', title: 'Cutaneous Cryosurgery (Kuflik & Gage)', source: 'CRC Press', chapter: 'Principles and Techniques' },
  ],
  crossReferences: [
    { targetId: 'derm-procedures-biopsy', targetType: 'topic', relationship: 'sibling', label: 'Biopsy Techniques' },
    { targetId: 'derm-neoplastic-scc', targetType: 'condition', relationship: 'related', label: 'Squamous Cell Carcinoma' },
  ],
  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'procedures', 'cryotherapy', 'actinic-keratosis', 'warts'],
    keywords: ['cryotherapy', 'liquid nitrogen', 'actinic keratosis', 'warts', 'cryosurgery', 'field therapy'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['dermatology'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
