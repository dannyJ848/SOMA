/**
 * Dermatologic Biopsy Techniques
 *
 * Shave, punch, excisional, and incisional biopsy indications, technique,
 * tissue handling, and pathology processing for skin lesion diagnosis.
 */

import { EducationalContent } from '../../types';

export const biopsyTechniquesContent: EducationalContent = {
  id: 'derm-procedures-biopsy',
  type: 'topic',
  name: 'Dermatologic Biopsy Techniques',
  nameEs: 'Tecnicas de Biopsia Dermatologica',
  alternateNames: ['Skin Biopsy', 'Punch Biopsy', 'Shave Biopsy'],

  levels: {
    1: {
      level: 1,
      summary: 'A skin biopsy is a simple procedure where a small piece of skin is removed and examined under a microscope to diagnose skin conditions.',
      explanation: `## What Is a Skin Biopsy?\n\nA biopsy is when a doctor removes a small sample of skin to look at under a microscope. It helps diagnose rashes, moles, infections, and cancers.\n\n## Types\n- **Shave biopsy**: a thin slice is shaved off the surface\n- **Punch biopsy**: a small circular tool punches out a deeper sample\n- **Excisional biopsy**: the entire lesion is cut out\n\n## What to Expect\n- The area is numbed with a local anesthetic\n- The procedure takes a few minutes\n- You may have stitches or a small wound\n- Results usually take 1-2 weeks\n\n## Aftercare\n- Keep the wound clean and covered\n- Apply petroleum jelly daily\n- Avoid heavy exercise for 24-48 hours`,
      keyTerms: [
        { term: 'Biopsy', definition: 'Removing a small piece of tissue to examine under a microscope' },
        { term: 'Anesthetic', definition: 'Medicine that numbs the area so you do not feel pain' },
      ],
      analogies: ['A biopsy is like taking a core sample from the ground to test what is underneath the surface.'],
      examples: ['A doctor uses a punch biopsy to diagnose a persistent rash that has not responded to treatment'],
      patientCounselingPoints: ['The area will be numb during the procedure.', 'Keep the site clean and moist for faster healing.', 'Call if you notice signs of infection (increasing redness, warmth, pus).'],
    },
    2: {
      level: 2,
      summary: 'Biopsy type selection depends on the clinical question: shave for superficial lesions, punch for inflammatory dermatoses, and excisional for suspected melanoma. Proper technique preserves diagnostic architecture.',
      explanation: `## Shave Biopsy\n- Tangential blade excision at the level of the mid-dermis\n- Best for: raised lesions, suspected BCC/SCC, seborrheic keratoses\n- Advantages: quick, no sutures needed, good cosmesis\n- Contraindicated: suspected melanoma (cannot assess Breslow depth)\n\n## Punch Biopsy\n- Circular blade (2-8 mm, usually 4 mm) through full skin thickness\n- Best for: inflammatory dermatoses, deep processes, vasculitis\n- Provides epidermis + dermis + subcutaneous fat\n- Closed with 1-2 sutures (or second-intention for <=3 mm)\n\n## Excisional Biopsy\n- Elliptical excision of entire lesion with 1-3 mm margins\n- Best for: suspected melanoma (preserves Breslow depth)\n- 3:1 length-to-width ratio for primary closure\n- Oriented along relaxed skin tension lines (RSTL)\n\n## Incisional Biopsy\n- Partial removal of large lesion\n- Used when excisional biopsy impractical\n- Must sample the most concerning area\n\n## Tissue Handling\n- Place in 10% formalin for routine histology\n- Saline-moistened gauze for immunofluorescence (DIF)\n- Michel medium for transport to IF lab\n- Sterile container for culture (bacterial, fungal, mycobacterial)`,
      keyTerms: [
        { term: 'Shave biopsy', definition: 'Tangential removal of superficial skin for raised lesions; not for melanoma' },
        { term: 'Punch biopsy', definition: 'Full-thickness circular biopsy for inflammatory or deep processes' },
        { term: 'Excisional biopsy', definition: 'Complete removal of lesion with margins; gold standard for suspected melanoma' },
        { term: 'RSTL', definition: 'Relaxed skin tension lines along which excisions are oriented for optimal scarring' },
      ],
      analogies: ['A shave biopsy takes a thin slice off the top like skimming cream; a punch goes straight down like an apple corer.'],
      examples: ['A 6 mm pigmented lesion suspicious for melanoma undergoes excisional biopsy with 1-3 mm margins, oriented along RSTL'],
      clinicalNotes: 'Never shave a suspected melanoma. For inflammatory dermatoses, punch biopsy of an active, non-treated lesion yields the best diagnostic information.',
    },
    3: {
      level: 3,
      summary: 'Advanced biopsy technique includes saucerization for pigmented lesions, proper punch depth for panniculitis, immunofluorescence processing for autoimmune blistering diseases, and specimen orientation for margin assessment.',
      explanation: `## Saucerization (Deep Shave) Biopsy\n- Deeper tangential excision creating a saucer-shaped specimen\n- Useful for flat pigmented lesions when melanoma is low suspicion\n- Provides more depth than standard shave but less than excisional\n- If melanoma found, re-excision still needed\n\n## Biopsy Site Selection\n- Inflammatory: active edge of lesion, non-treated skin, avoid secondary changes\n- Vesiculobullous: intact small blister for H&E + perilesional skin for DIF\n- Vasculitis: early lesion (<48 hours) for leukocytoclastic changes\n- Panniculitis: deep incisional biopsy or excisional including subcutaneous fat\n\n## Direct Immunofluorescence (DIF)\n- Fresh tissue (NOT formalin), perilesional skin\n- Detects IgG, IgA, IgM, C3, fibrinogen deposition patterns\n- Bullous pemphigoid: linear IgG and C3 at basement membrane zone\n- Pemphigus vulgaris: intercellular IgG in epidermis ("chicken-wire")\n- Dermatitis herpetiformis: granular IgA at dermal papillae\n- Lupus band test: granular immunoglobulin at BMZ\n\n## Special Stains in Dermatopathology\n- PAS: fungi, basement membrane\n- GMS: fungi (more sensitive)\n- Fite: acid-fast bacilli (leprosy)\n- Congo red: amyloid (apple-green birefringence)\n- Fontana-Masson: melanin\n- Iron stain (Perls): hemosiderin\n\n## Specimen Processing\n- Formalin fixation -> paraffin embedding -> microtome sectioning -> H&E staining\n- Bread-loaf technique: serial cross-sections (standard pathology)\n- En face/Mohs: horizontal sections for 100% margin assessment`,
      keyTerms: [
        { term: 'Saucerization', definition: 'Deep shave biopsy creating a saucer-shaped specimen; intermediate between shave and excision' },
        { term: 'Direct immunofluorescence', definition: 'Fresh-tissue technique detecting antibody/complement deposition to diagnose autoimmune blistering diseases' },
        { term: 'PAS stain', definition: 'Periodic acid-Schiff stain highlighting fungi and basement membranes in tissue' },
        { term: 'Bread-loaf technique', definition: 'Standard cross-sectional processing examining ~1% of surgical margins' },
      ],
      analogies: ['DIF is like using a blacklight to reveal invisible ink: it shows hidden immune deposits in the skin that routine staining misses.'],
      examples: ['A perilesional punch biopsy in Michel medium for DIF shows linear IgG at the BMZ, confirming bullous pemphigoid'],
      clinicalNotes: 'For suspected autoimmune blistering disease, always submit TWO specimens: lesional skin in formalin for H&E and perilesional skin in Michel medium for DIF. DIF of lesional skin may be falsely negative due to consumed antibody.',
    },
    4: {
      level: 4,
      summary: 'Advanced biopsy considerations include intraoperative frozen sections, sentinel lymph node biopsy technique, molecular pathology (FISH, CGH, GEP) for ambiguous melanocytic neoplasms, and complications management.',
      explanation: `## Frozen Section Analysis\n- Rapid intraoperative diagnosis (15-20 minutes)\n- Used during Mohs surgery for margin assessment\n- Limitations: ice crystal artifact, less detail than permanent sections\n- Optimal cutting temperature (OCT) compound embedding\n- Touch preparations for cytology (adjunct)\n\n## Sentinel Lymph Node Biopsy (Melanoma)\n- Technetium-99m sulfur colloid injected around primary site\n- Lymphoscintigraphy maps drainage pattern\n- Intraoperative: gamma probe + isosulfan blue dye localization\n- Histology: H&E + immunohistochemistry (S-100, HMB-45, Melan-A/MART-1)\n- Ultra-staging: serial sections at multiple levels\n\n## Molecular Diagnostics for Ambiguous Melanocytic Lesions\n- FISH (fluorescence in situ hybridization): probes for 6p25, 6q23, 11q13, Cep6\n  - Gains at 6p25 (RREB1) and 11q13 (CCND1) favor melanoma\n- CGH (comparative genomic hybridization): genome-wide copy number analysis\n- GEP (gene expression profile): 31-gene test (DecisionDx-Melanoma) for prognosis\n- PRAME immunostain: positive in melanoma, negative in most nevi\n\n## Complications\n- Bleeding: direct pressure, electrocautery, suture ligation\n- Infection (<5%): signs, topical vs systemic antibiotics\n- Scarring: hypertrophic scar, keloid (higher risk: chest, shoulders, earlobes)\n- Nerve injury: temporal branch of facial nerve (temple biopsies)\n- Incomplete sampling: important to communicate clinical suspicion to pathologist\n\n## Dermatopathology Correlation\n- Clinical-pathologic correlation is critical\n- Provide: clinical description, differential diagnosis, biopsy type, body site\n- "ABCDE" of pathology request: Appearance, Background, Clinical concern, Diagnosis prior, Exposed to treatment`,
      keyTerms: [
        { term: 'FISH', definition: 'Fluorescence in situ hybridization detecting chromosomal gains/losses in ambiguous melanocytic lesions' },
        { term: 'PRAME', definition: 'Immunostain preferentially positive in melanoma vs benign nevi; aids diagnosis' },
        { term: 'Gamma probe', definition: 'Handheld radioactivity detector used intraoperatively to locate sentinel lymph nodes' },
        { term: 'GEP', definition: 'Gene expression profile test (DecisionDx) for melanoma prognosis based on 31-gene signature' },
      ],
      analogies: ['FISH probes are like colored spotlights highlighting specific chromosomal regions; abnormal patterns point toward melanoma.'],
      examples: ['A spitzoid melanocytic neoplasm with ambiguous features undergoes FISH testing showing 6p25 gain and 6q23 loss, supporting melanoma diagnosis'],
      clinicalNotes: 'For any ambiguous melanocytic lesion, FISH and PRAME can help resolve the diagnostic dilemma. Always provide full clinical context to the dermatopathologist; pathology without clinical correlation leads to errors.',
    },
    5: {
      level: 5,
      summary: 'Frontier biopsy technology includes optical coherence tomography (OCT), reflectance confocal microscopy (RCM) enabling in vivo diagnosis without tissue removal, AI-assisted digital pathology, and spatial transcriptomics of skin biopsies.',
      explanation: `## Non-Invasive "Optical Biopsy"\n- Reflectance confocal microscopy (RCM): in vivo cellular resolution (~1 um)\n  - Sensitivity ~93%, specificity ~76% for melanoma\n  - Reduces unnecessary biopsies by ~50% for equivocal lesions\n  - Identifies BCC features (tumor islands, clefting, polarized elongated nuclei)\n- Optical coherence tomography (OCT): cross-sectional imaging to ~2mm depth\n  - Resolution ~5-10 um (tissue-level, not cellular)\n  - BCC visualization: nodular structures, dark clefting\n  - Line-field OCT (LC-OCT): combines OCT depth with RCM resolution\n\n## AI-Assisted Dermatopathology\n- Whole-slide imaging (WSI) + deep learning for automated diagnosis\n- CNN models for melanoma vs nevus classification: AUC >0.95\n- Automated Breslow depth measurement\n- Automated mitotic figure detection (Ki-67 correlation)\n- Challenges: rare diagnoses, scanner variability, regulatory approval\n\n## Spatial Transcriptomics\n- Visium (10x Genomics): gene expression mapped to tissue location\n- Reveals tumor-immune interaction at spatial resolution\n- Identifies immune-hot vs immune-cold regions within single biopsy\n- Applications: predicting ICI response, understanding metastatic potential\n\n## Liquid Biopsy and Non-Tissue Biomarkers\n- ctDNA from blood: real-time tumor monitoring without tissue biopsy\n- Tape stripping genomics (DermTech): adhesive tape collects RNA from epidermis\n  - PRAME + LINC RNA signature for melanoma rule-out\n  - Sensitivity ~91%, NPV ~99%; may reduce unnecessary excisional biopsies\n\n## 3D Bioprinting of Skin Constructs\n- Organotypic skin models for drug testing\n- Tumor-on-chip: patient-derived cells in microfluidic devices\n- Personalized drug sensitivity testing from biopsy material\n- Reducing animal model dependence`,
      keyTerms: [
        { term: 'RCM', definition: 'Reflectance confocal microscopy enabling in vivo cellular-level skin imaging without biopsy' },
        { term: 'LC-OCT', definition: 'Line-field confocal OCT combining depth penetration of OCT with cellular resolution' },
        { term: 'DermTech tape strip', definition: 'Non-invasive adhesive tape collection of epidermal RNA for melanoma genomic analysis' },
        { term: 'Spatial transcriptomics', definition: 'Technology mapping gene expression to precise tissue locations within a biopsy specimen' },
      ],
      analogies: ['Spatial transcriptomics is like reading every book on every shelf in a library while knowing exactly where each shelf is located.'],
      examples: ['A patient with an equivocal pigmented lesion has DermTech tape strip analysis; negative PRAME/LINC signature rules out melanoma, avoiding excisional biopsy'],
      clinicalNotes: 'RCM and tape-strip genomics are moving toward integration into standard diagnostic algorithms. AI-assisted pathology will augment but not replace dermatopathologists in the near term. Spatial transcriptomics is research-grade today but will inform precision dermatology in the coming years.',
    },
  },

  media: [],
  citations: [
    { id: 'biopsy-ref-1', type: 'textbook', title: 'Dermatologic Surgery (Roenigk)', source: 'CRC Press', chapter: 'Biopsy Techniques' },
    { id: 'biopsy-ref-2', type: 'article', title: 'DermTech tape strip biopsy for melanoma detection', source: 'JAAD', url: 'https://doi.org/10.1016/j.jaad.2020.09.012' },
  ],
  crossReferences: [
    { targetId: 'derm-procedures-cryotherapy', targetType: 'topic', relationship: 'sibling', label: 'Cryotherapy' },
    { targetId: 'derm-neoplastic-melanoma', targetType: 'condition', relationship: 'related', label: 'Melanoma' },
    { targetId: 'derm-neoplastic-bcc', targetType: 'condition', relationship: 'related', label: 'Basal Cell Carcinoma' },
  ],
  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'procedures', 'biopsy', 'dermatopathology', 'diagnostics'],
    keywords: ['punch biopsy', 'shave biopsy', 'excisional biopsy', 'immunofluorescence', 'FISH', 'RCM', 'DermTech'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['dermatology', 'surgery'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
