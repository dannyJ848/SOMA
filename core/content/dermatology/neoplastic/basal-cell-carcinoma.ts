/**
 * Basal Cell Carcinoma (In-Depth)
 *
 * Most common human cancer: subtypes, Hedgehog pathway pathogenesis,
 * Mohs surgery, vismodegib, and immunotherapy for advanced BCC.
 */

import { EducationalContent } from '../../types';

export const basalCellCarcinomaContent: EducationalContent = {
  id: 'derm-neoplastic-bcc',
  type: 'condition',
  name: 'Basal Cell Carcinoma',
  nameEs: 'Carcinoma Basocelular',
  alternateNames: ['BCC', 'Basal Cell Epithelioma', 'Rodent Ulcer'],

  levels: {
    1: {
      level: 1,
      summary: 'Basal cell carcinoma (BCC) is the most common type of skin cancer. It grows slowly and rarely spreads but can damage nearby tissue if not treated.',
      explanation: `## What Is BCC?\n\nBCC is a slow-growing skin cancer. It almost never spreads to other parts of the body, but it can grow into bone or nearby tissue if left untreated.\n\n## What Does It Look Like?\n- A pearly or waxy bump\n- A flat, flesh-colored or brown scar-like area\n- A sore that bleeds, heals, then returns\n- Tiny blood vessels visible on the surface\n\n## Risk Factors\n- Too much sun or tanning-bed exposure\n- Fair skin, light eyes\n- Older age\n- History of sunburns\n\n## Treatment\n- Minor surgery to remove it\n- Special surgery (Mohs) for areas like the face\n- Creams for very early BCC`,
      keyTerms: [
        { term: 'Basal cell carcinoma', definition: 'The most common and least dangerous skin cancer, growing slowly' },
        { term: 'Mohs surgery', definition: 'A precise surgery that removes cancer layer by layer, checking each under a microscope' },
      ],
      analogies: ['BCC is like a weed that stays in one spot; it does not spread to other gardens but keeps growing if you do not pull it out.'],
      examples: ['An elderly man has a shiny bump on his nose that occasionally bleeds'],
      patientCounselingPoints: ['BCC almost never spreads, but it must be removed.', 'Wear sunscreen daily to prevent new ones.', 'Check your skin regularly after a BCC diagnosis.'],
    },
    2: {
      level: 2,
      summary: 'BCC is the most common cancer globally (~80% of skin cancers). Clinical subtypes include nodular, superficial, and morpheaform. Treatment depends on subtype, location, and risk.',
      explanation: `## Epidemiology\n- Most common human malignancy\n- Incidence: ~3-4 million/year in the US\n- Risk: UV exposure, fair skin (Fitzpatrick I-II), immunosuppression\n- Metastasis extremely rare (<0.1%)\n\n## Clinical Subtypes\n- **Nodular** (most common): pearly papule with telangiectasia, rolled borders\n- **Superficial**: thin erythematous scaly patch, trunk; can mimic eczema\n- **Morpheaform/sclerosing**: scar-like, white-yellow, poorly defined; aggressive\n- **Pigmented**: contains melanin, may mimic melanoma\n\n## Treatment\n- Excision with 3-5 mm margins (standard)\n- Mohs surgery: face, ears, nose, periocular, recurrent tumors\n- ED&C (electrodessication & curettage): superficial, low-risk BCC\n- Topical: imiquimod 5%, 5-fluorouracil (superficial BCC only)\n- Hedgehog pathway inhibitors: vismodegib, sonidegib (advanced/metastatic)\n\n## Dermoscopy\n- Arborizing (tree-like) telangiectasia\n- Blue-gray ovoid nests\n- Leaf-like areas\n- Absence of pigment network`,
      keyTerms: [
        { term: 'Nodular BCC', definition: 'Most common subtype appearing as a pearly papule with telangiectasia' },
        { term: 'Morpheaform BCC', definition: 'Aggressive scar-like subtype with poorly defined margins' },
        { term: 'ED&C', definition: 'Electrodessication and curettage, office procedure for superficial low-risk BCC' },
        { term: 'Vismodegib', definition: 'Hedgehog pathway inhibitor pill for advanced BCC' },
      ],
      analogies: ['Mohs surgery peels cancer like layers of an onion, checking each slice until no cancer remains.'],
      examples: ['A superficial BCC on the trunk is treated with imiquimod cream 5x/week for 6 weeks'],
      clinicalNotes: 'Morpheaform BCC has the highest recurrence rate due to ill-defined subclinical extension. Mohs surgery is the treatment of choice for high-risk BCC.',
    },
    3: {
      level: 3,
      summary: 'BCC is driven by aberrant Hedgehog pathway activation through PTCH1 loss-of-function or SMO gain-of-function mutations. Gorlin syndrome represents germline PTCH1 mutation. Mohs surgery achieves 99% cure rates.',
      explanation: `## Hedgehog Pathway\n- Normal: PTCH1 (Patched) receptor inhibits SMO (Smoothened)\n- Hedgehog ligand binds PTCH1 -> releases SMO -> activates GLI transcription factors -> proliferation\n- BCC: PTCH1 loss-of-function (~70%) or SMO gain-of-function (~10%)\n- Constitutive pathway activation without ligand\n- GLI targets: cyclin D1, Myc, BCL-2\n\n## Gorlin Syndrome (Basal Cell Nevus Syndrome)\n- Germline PTCH1 mutation (autosomal dominant)\n- Multiple BCCs at young age (<20)\n- Odontogenic keratocysts (jaw cysts)\n- Skeletal anomalies: bifid ribs, calcified falx cerebri\n- Medulloblastoma risk\n- Avoid radiation (induces new BCCs)\n\n## Mohs Surgery Details\n- Sequential thin layer excision with mapping\n- Each layer frozen-sectioned and examined for 100% margin assessment\n- Standard excision checks only ~1% of margin (bread-loaf technique)\n- Cure rates: 99% primary BCC, 94-95% recurrent BCC\n- Indications: H-zone of face, recurrent, morpheaform, large, perineural invasion\n\n## Histopathology\n- Basaloid cell islands with peripheral palisading\n- Retraction artifact (clefting) between tumor and stroma\n- Mucinous stroma\n- Nodular: large nests; superficial: buds from epidermis; morpheaform: thin strands in fibrotic stroma`,
      keyTerms: [
        { term: 'PTCH1', definition: 'Patched tumor suppressor; loss-of-function mutations drive ~70% of BCC' },
        { term: 'SMO', definition: 'Smoothened transmembrane protein; target of vismodegib and sonidegib' },
        { term: 'Gorlin syndrome', definition: 'Germline PTCH1 mutation causing multiple BCCs, jaw cysts, and skeletal anomalies' },
        { term: 'Peripheral palisading', definition: 'Characteristic histologic finding: orderly alignment of cells at tumor nest edges' },
      ],
      analogies: ['PTCH1 is the brake pedal on cell growth; when it breaks, the car (cell proliferation) accelerates without control.'],
      examples: ['A 22-year-old with multiple BCCs and jaw cysts is diagnosed with Gorlin syndrome; genetic testing confirms PTCH1 mutation'],
      clinicalNotes: 'Gorlin patients must avoid radiation therapy as it induces numerous new BCCs in the field. Annual dermatologic surveillance and jaw imaging are essential.',
    },
    4: {
      level: 4,
      summary: 'Advanced BCC management includes SMO inhibitor pharmacology and resistance mechanisms, Mohs tissue processing techniques, and immunotherapy (cemiplimab) for patients who progress on or cannot tolerate hedgehog inhibitors.',
      explanation: `## SMO Inhibitor Pharmacology\n- Vismodegib 150 mg daily: ORR ~30-48% locally advanced, ~33% metastatic\n- Sonidegib 200 mg daily: similar efficacy, possibly better tolerability\n- Side effects: muscle spasms (71%), dysgeusia (55%), alopecia (64%), weight loss\n- Teratogenic: mandatory pregnancy prevention\n- Discontinuation rate: 30-60% due to tolerability\n\n## Resistance Mechanisms\n- SMO mutations (D473H): prevent drug binding\n- Downstream GLI2 amplification: bypasses SMO\n- PI3K pathway co-activation\n- Strategies: intermittent dosing, combination approaches\n\n## Immunotherapy for Advanced BCC\n- Cemiplimab (anti-PD-1): approved for advanced BCC after or intolerant to HHI\n- ORR ~31% locally advanced, ~21% metastatic\n- Durable responses observed\n- Rationale: BCC has high mutational burden from UV\n\n## Mohs Processing\n- Fresh-frozen tissue (not formalin-fixed) for rapid processing\n- Tissue flattened, inked for orientation, frozen at -20 to -30C\n- Horizontal sections allow 100% peripheral and deep margin visualization\n- En face sectioning vs bread-loaf: 100% vs ~1% margin analysis\n- Immunostaining (BerEP4, CK14) for difficult cases\n\n## Reconstruction after Mohs\n- Secondary intention: concave surfaces (medial canthus, temple)\n- Primary closure, local flaps (advancement, rotation, transposition)\n- Full-thickness skin grafts: nose, ear, eyelid\n- Interpolated flaps: paramedian forehead flap for nasal reconstruction`,
      keyTerms: [
        { term: 'Cemiplimab', definition: 'Anti-PD-1 antibody approved for advanced BCC after hedgehog inhibitor failure' },
        { term: 'D473H mutation', definition: 'SMO point mutation causing resistance to vismodegib' },
        { term: 'En face sectioning', definition: 'Mohs technique providing 100% margin visualization through horizontal tissue cuts' },
        { term: 'BerEP4', definition: 'Immunohistochemical stain highlighting BCC tumor cells during Mohs processing' },
      ],
      analogies: ['En face sectioning is like looking at the bottom of a stamp (seeing the entire border) versus cutting it in slices and only seeing edges.'],
      examples: ['A patient on vismodegib for 18 months develops resistance; switched to cemiplimab with partial response'],
      clinicalNotes: 'Intermittent vismodegib dosing (e.g., alternate months) may improve tolerability while maintaining efficacy. Cemiplimab provides a new option for the ~30-60% who discontinue HHI due to side effects.',
    },
    5: {
      level: 5,
      summary: 'Frontier BCC research includes next-gen Hedgehog inhibitors, combination HHI + immunotherapy, topical SMO inhibitors (patidegib), GLI inhibitors bypassing SMO resistance, and AI-assisted Mohs margin analysis.',
      explanation: `## Next-Generation Hedgehog Targeting\n- Patidegib: topical SMO inhibitor gel for Gorlin syndrome BCCs (phase 3)\n- GLI inhibitors (GANT-61, arsenic trioxide): bypass SMO resistance by targeting downstream\n- SHH-antibody approaches: block ligand in rare ligand-dependent BCC\n\n## Combination Strategies\n- HHI + anti-PD-1: rationale is HHI increases MHC-I expression on BCC, enhancing ICI efficacy\n- Phase 2 trials: cemiplimab + vismodegib showing enhanced response rates\n- Sequential: HHI for initial response, ICI for consolidation\n\n## Intralesional Therapies\n- Intralesional 5-FU/epinephrine injectable gel\n- Intralesional interferon-alpha\n- Photodynamic therapy (PDT): ALA/MAL + light; superficial BCC, cosmetic areas\n- PDT + immunotherapy combinations in trials\n\n## AI in BCC Diagnosis and Treatment\n- CNN models for dermoscopic BCC detection: sensitivity >95%\n- AI-assisted Mohs margin assessment: digital pathology + machine learning\n- Reduces frozen-section interpretation time\n- Reflectance confocal microscopy (RCM): in vivo, near-histologic imaging reducing biopsies\n\n## Tumor Microenvironment\n- BCC immune microenvironment: rich in regulatory T cells (Tregs)\n- Hedgehog signaling promotes immune evasion via WNT pathway cross-talk\n- SMO inhibitors remodel the immune microenvironment, potentially synergizing with ICI\n- Single-cell RNA sequencing revealing distinct BCC immune subtypes\n\n## Epidemiologic Trends\n- Incidence rising 5-10% annually worldwide\n- Young women: increasing rates attributed to indoor tanning\n- Organ transplant recipients: 10-16x increased risk; require 6-12 month screening`,
      keyTerms: [
        { term: 'Patidegib', definition: 'Topical SMO inhibitor gel in phase 3 trials for Gorlin syndrome BCC prevention' },
        { term: 'GANT-61', definition: 'GLI inhibitor under investigation to bypass SMO-level resistance in BCC' },
        { term: 'Photodynamic therapy', definition: 'Light-activated topical therapy for superficial BCC using aminolevulinic acid' },
        { term: 'RCM', definition: 'Reflectance confocal microscopy providing in vivo cellular-level imaging without biopsy' },
      ],
      analogies: ['GLI inhibitors target the last link in the Hedgehog chain: even if the lock (SMO) changes, you can still block the key (GLI) that opens the door to proliferation.'],
      examples: ['A Gorlin syndrome patient applies topical patidegib to prevent new BCCs, reducing surgical burden'],
      clinicalNotes: 'Combination HHI + ICI is a promising approach leveraging HHI-induced immune microenvironment changes. Topical patidegib may transform Gorlin syndrome management by reducing the need for repeated surgeries.',
    },
  },

  media: [],
  citations: [
    { id: 'bcc-ref-1', type: 'textbook', title: 'Dermatology (Bolognia)', authors: ['Bolognia, J.', 'Schaffer, J.', 'Cerroni, L.'], source: 'Elsevier', chapter: 'Basal Cell Carcinoma' },
    { id: 'bcc-ref-2', type: 'article', title: 'Cemiplimab for advanced BCC after hedgehog inhibitor', source: 'Lancet Oncology' },
  ],
  crossReferences: [
    { targetId: 'derm-neoplastic-melanoma', targetType: 'condition', relationship: 'sibling', label: 'Melanoma' },
    { targetId: 'derm-neoplastic-scc', targetType: 'condition', relationship: 'sibling', label: 'Squamous Cell Carcinoma' },
    { targetId: 'derm-procedures-biopsy', targetType: 'topic', relationship: 'related', label: 'Biopsy Techniques' },
  ],
  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'oncology', 'BCC', 'Mohs-surgery', 'Hedgehog-pathway'],
    keywords: ['basal cell carcinoma', 'PTCH1', 'SMO', 'Mohs', 'vismodegib', 'cemiplimab', 'Gorlin syndrome'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['dermatology', 'surgery'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
