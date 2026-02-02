/**
 * Immune System Encyclopedia Entries
 * 
 * Transcribed from OpenStax Anatomy & Physiology (CC BY 4.0)
 */

import type { EncyclopediaEntry } from '../types';

/**
 * Immune System Entry
 */
export const immuneSystemEntry: EncyclopediaEntry = {
  entryId: 'immune-system',
  name: 'Immune System',
  entryType: 'physiology',
  category: 'immunologic',
  summary: 'The body\'s defense system against pathogens, including physical barriers, innate immunity, and adaptive immunity.',
  overview: {
    patient: 'Your immune system is your body\'s defense force that protects you from germs, viruses, and other harmful invaders. It works like a security system with multiple layers. First, physical barriers like skin and mucous membranes block invaders. If they get past, your innate immune system sends cells to attack immediately. Finally, your adaptive immune system learns to recognize specific invaders and creates targeted defenses with antibodies. Your immune system includes organs like the thymus, spleen, lymph nodes, and bone marrow, plus specialized cells like white blood cells.',
    intermediate: 'The immune system provides defense against pathogens through three interconnected levels: barrier defenses (skin, mucous membranes), innate immunity (rapid, non-specific response with phagocytes, NK cells, inflammation, complement), and adaptive immunity (delayed but specific, involving lymphocytes - B cells producing antibodies, T cells coordinating cell-mediated immunity). The lymphatic system works closely with immunity, transporting immune cells via lymphatic vessels and housing them in lymph nodes, spleen, thymus, and mucosa-associated lymphoid tissue (MALT). Primary lymphoid organs (bone marrow, thymus) produce and mature lymphocytes; secondary organs (lymph nodes, spleen, MALT) mount immune responses.',
    professional: 'The immune system comprises a complex network of cells, tissues, and soluble factors organized into barrier defenses, innate immunity, and adaptive immunity. Barrier defenses: physical (skin, mucous membranes), chemical (sebum, sweat, stomach acid, lysozyme), and microbiological barriers (normal flora). Innate immunity: immediate response (0-96 hours) including neutrophils, macrophages, dendritic cells, NK cells, eosinophils, basophils/mast cells; pattern recognition receptors (PRRs) detecting PAMPs; complement system (alternative, lectin, classical pathways); inflammatory response; cytokines (interleukins, interferons, chemokines, TNF). Adaptive immunity: antigen-specific, memory-forming; humoral (B cells → plasma cells → antibodies: IgG, IgA, IgM, IgE, IgD) and cell-mediated (T cells: helper CD4+ Th1/Th2/Th17/Tfh/Treg, cytotoxic CD8+, memory). Primary lymphoid organs: bone marrow (B cell development, hematopoiesis), thymus (T cell maturation via positive/negative selection, cortex/medulla structure). Secondary lymphoid organs: lymph nodes (cortex-B cells, paracortex-T cells, medulla-plasma cells, high endothelial venules), spleen (white pulp-lymphoid tissue, red pulp-filtration/clearance), MALT (tonsils, Peyer\'s patches, appendix).',
  },
  content: [
    {
      title: 'Lymphatic System Anatomy',
      content: {
        patient: `The lymphatic system is like a drainage network that collects fluid from your tissues and returns it to your bloodstream. It includes lymphatic vessels (similar to veins but carrying lymph fluid), lymph nodes (small bean-shaped filters), the thymus (behind your breastbone), spleen (upper left abdomen), tonsils (back of throat), and bone marrow. Unlike blood, lymph doesn't have a pump - it moves when you move your muscles and breathe. One-way valves keep lymph flowing toward the heart.`,
        intermediate: `The lymphatic system consists of lymphatic vessels, lymph fluid, lymphoid organs, and lymphoid tissues. Lymphatic capillaries (terminal lymphatics) are blind-ended vessels in tissues (except CNS, bone marrow, bone, teeth, cornea) where interstitial fluid enters to become lymph. These capillaries have overlapping endothelial cells that open when interstitial pressure increases. Lymphatic vessels have three-tunic structure with valves, giving beaded appearance. Superficial lymphatics follow veins; deep follow arteries. Lymphatic trunks drain into: right lymphatic duct (right head, thorax, upper limb → right subclavian vein) and thoracic duct (rest of body → left subclavian vein). Thoracic duct begins at cisterna chyli (receives lumbar trunks, intestinal trunk).`,
        professional: `Lymphatic vessel structure and drainage:

Lymphatic capillaries: Endothelial cells with overlapping flaps (primary valves) attached by collagen filaments to surrounding ECM. Anchoring filaments pull flaps open with increased interstitial pressure. Lacteals in small intestine absorb chylomicrons (dietary lipids) → chyle (milky fluid).

Collecting vessels: Three-tunic structure (intima, media, externa) with bicuspid semilunar valves. Contractile with smooth muscle (intrinsic peristalsis, extrinsic compression by skeletal muscle/respiration).

Lymphatic trunks: Paired (jugular, subclavian, bronchomediastinal, lumbar, intestinal) draining specific regions.

Ducts: Right lymphatic duct (2-4 cm, drains right upper quadrant) → right venous angle (subclavian-jugular junction). Thoracic duct (38-45 cm, largest lymph vessel) originates cisterna chyli (5-7 cm sac at L1-L2) → ascends through diaphragmatic aortic hiatus → right of midline in posterior mediastinum → crosses to left at T5 → descends to left venous angle.

Lymph composition: Similar to plasma but lower protein; contains lymphocytes; 2-4 L/day returned to circulation; fat transport (chyle 2-15% fat after meals).`,
      },
    },
    {
      title: 'Cells of the Immune System',
      content: {
        patient: `Your immune system uses many different cell types to fight invaders. Neutrophils are the most common white blood cells - they swarm to infections and eat bacteria. Macrophages are bigger cells that engulf and destroy invaders. Dendritic cells capture invaders and show them to other immune cells. Lymphocytes (B cells and T cells) are the special forces - B cells make antibodies that tag invaders, while T cells directly kill infected cells. Natural killer (NK) cells attack viruses and cancer cells. All these cells come from bone marrow stem cells.`,
        intermediate: `Immune cells derive from hematopoietic stem cells in bone marrow. Phagocytic cells: neutrophils (polymorphonuclear leukocytes, first responders, 50-70% WBCs), macrophages (tissue-resident from monocytes), dendritic cells (antigen-presenting cells bridging innate/adaptive immunity). Granulocytes: eosinophils (combat parasites, modulate allergies), basophils/mast cells (release histamine, heparin, mediators). Lymphocytes: B cells (bone marrow matured, produce antibodies), T cells (thymus matured, helper and cytotoxic functions), NK cells (innate lymphoid cells, kill virally infected/cancer cells). Plasma cells are antibody-secreting B cells. Memory cells (B and T) provide rapid response upon re-exposure. Professional APCs: dendritic cells, macrophages, B cells - present antigen via MHC molecules to T cells.`,
        professional: `Hematopoietic lineages and immune cell differentiation:

Myeloid lineage: CMP → granulocyte-monocyte progenitor → neutrophils (segmented nucleus, primary/secondary granules, 2-5 day lifespan, 2-7×10⁶/μL), eosinophils (bilobed, crystalloid granules, 1-4%), basophils (S-shaped nucleus, 0.5-1%), mast cells (tissue-resident, FcεRI for IgE), monocytes → macrophages/dendritic cells.

Macrophage subsets: M1 (classically activated by IFN-γ/LPS, pro-inflammatory, microbicidal), M2 (alternatively activated by IL-4/IL-13, anti-inflammatory, tissue repair). Tissue-specific: Kupffer cells (liver), alveolar macrophages (lung), microglia (CNS), osteoclasts (bone).

Dendritic cells: cDC1 (cross-presentation to CD8+), cDC2 (CD4+ activation), pDC (type I interferon production).

Lymphoid lineage: CLP → B cells (heavy/light chain rearrangement, surface IgM/IgD, CD19+, CD20+) → plasma cells (ER-rich, high antibody secretion, lose surface Ig, CD138+). T cells: CD4+ helper (Th1-IFNγ/cellular, Th2-IL-4/5/13/humoral, Th17-IL-17/neutrophil, Tfh-germinal center, Treg-suppression), CD8+ cytotoxic (perforin, granzyme-mediated killing). NK cells (CD16+, CD56+, no antigen receptor, recognize missing self/MHC-I downregulation).

Innate lymphoid cells (ILCs): ILC1 (T-bet+, IFNγ), ILC2 (GATA3+, IL-5/13), ILC3 (RORγt+, IL-17/22).`,
      },
    },
    {
      title: 'Innate Immunity',
      content: {
        patient: `Innate immunity is your body's first line of defense that activates immediately when you encounter a threat. Physical barriers like skin stop invaders at the door. If they get in, chemical signals trigger inflammation - blood vessels widen, bringing more immune cells to the area (causing redness, heat, swelling). Fever raises body temperature to slow invader growth. Special proteins called complement can punch holes in bacterial membranes. Cells like neutrophils and macrophages engulf and destroy invaders through phagocytosis (cell eating).`,
        intermediate: `Innate immunity provides immediate, non-specific defense through: barriers (skin epidermis with tight junctions, mucous membranes with mucus trapping, antimicrobial peptides like defensins), phagocytosis (recognition via PRRs including TLRs, engulfment, phagolysosome formation, oxidative burst with ROS/RNS killing), inflammation (vascular changes: vasodilation, increased permeability; cellular events: margination, diaphoresis, chemotaxis; mediators: histamine, prostaglandins, leukotrienes, cytokines; cardinal signs: rubor, calor, tumor, dolor, functio laesa), fever (pyrogens like IL-1, IL-6, TNF-α raise hypothalamic set point; beneficial for immune enhancement, pathogen inhibition), complement system (30+ plasma proteins, three activation pathways: alternative - spontaneous C3 hydrolysis, lectin - MBL binds sugars, classical - C1q binds antibody-antigen complexes; all converge C3 convertase → opsonization, inflammation, cytolysis via MAC C5b-9). NK cells provide innate cytotoxicity against virus-infected and tumor cells via missing-self recognition.`,
        professional: `Innate immune mechanisms:

Pattern recognition: PRRs on/in immune cells detect PAMPs (pathogen-associated molecular patterns). TLRs (Toll-like receptors): TLR4-LPS (with MD-2/CD14), TLR3-dsRNA, TLR7/8-ssRNA, TLR9-CpG DNA, TLR2-lipopeptides. NLRs (NOD-like receptors): intracellular, NOD1/2 detect peptidoglycan, inflammasome (NLRP3) activates caspase-1 → IL-1β/IL-18. RLRs (RIG-I-like receptors): cytosolic viral RNA. CLR (C-type lectin receptors): fungal glycans.

Phagocytosis: Receptors (FcR for antibody, CR for complement, scavenger receptors, mannose receptor). Mechanism: zipper/pseudopod engulfment → phagosome maturation (Rab GTPases, PI3P) → fusion with lysosomes (phagolysosome) → killing: oxidative burst (NADPH oxidase 2e⁻ + 2O₂ → 2O₂⁻; MPO + H₂O₂ + Cl⁻ → HOCl), nitrosative burst (iNOS → NO), antimicrobial peptides (cathelicidins, defensins), lysozyme, lactoferrin, acidification (pH 4.5-5.0). Chronic granulomatous disease: defective NADPH oxidase.

Inflammatory cascade: Recognition → NF-κB activation → cytokine production (TNF-α, IL-1β, IL-6, IL-8/CXCL8). Vascular phase: vasodilation (histamine, PGD₂, PGE₂, NO), increased permeability (VEGF, bradykinin). Cellular phase: selectin-mediated rolling (E-selectin, P-selectin), integrin activation (LFA-1, Mac-1 binding ICAM-1), diapedesis (PECAM-1), chemotaxis (chemokine gradients, fMLP, C5a). Resolution: neutrophil apoptosis, macrophage efferocytosis, tissue repair.

Complement pathways: Alternative (C3(H₂O)B, properdin stabilizes C3bBb), Lectin (MBL/MASP-1/2 cleaves C4/C2), Classical (C1q complex with C1r/s cleaves C4/C2). Central: C3 convertase (C4b2a or C3bBb) cleaves C3 → C3b (opsonin, CR1/CR3 binding) + C3a (anaphylatoxin). C5 convertase (C3b-C4b2a or C3bBb3b) cleaves C5 → C5b initiates MAC (C5b-6-7-8-9) pore formation. Regulation: factor H/I (alternative), C1 inhibitor (classical), CD59 (protects host cells from MAC).`,
      },
    },
    {
      title: 'Adaptive Immunity',
      content: {
        patient: `Adaptive immunity is your body's special forces that learn to recognize specific invaders. It takes longer to activate than innate immunity but creates lasting protection. B cells produce antibodies - proteins that tag invaders for destruction. T cells include helpers (CD4) that coordinate the response and killers (CD8) that destroy infected cells. After an infection, memory cells remain that provide faster, stronger protection if you encounter the same invader again. This is how vaccines work - they train your adaptive immunity without causing disease.`,
        intermediate: `Adaptive immunity features antigen specificity, diversity (10⁹-10¹¹ different receptors), memory, and self-tolerance. Antigens are molecules recognized by immune receptors; epitopes are the specific binding sites. Humoral immunity: B cells with surface immunoglobulin recognize antigen → activation (often requiring T cell help via CD40L and cytokines) → proliferation → differentiate to plasma cells (secrete 2000-20,000 antibodies/second) and memory B cells. Antibodies (Ig) have variable regions for antigen binding and constant regions determining effector function. Classes: IgM (first response, pentamer), IgG (main blood antibody, crosses placenta, opsonization), IgA (mucosal, dimer), IgE (allergies, parasites, mast cell binding), IgD (B cell surface). Cell-mediated immunity: T cells use TCR-CD3 complex to recognize peptide-MHC complexes. CD4+ T helpers (MHC II restricted) activate macrophages (Th1), help B cells (Th2/follicular), recruit neutrophils (Th17). CD8+ cytotoxic T cells (MHC I restricted) kill infected/cancer cells via perforin/granzyme or Fas-FasL.`,
        professional: `Adaptive immunity mechanisms:

Antigen recognition: BCR (membrane IgM/IgD) binds native antigen conformational epitopes. TCR (αβ heterodimer, 10⁹ diversity from V(D)J recombination, CD3 complex for signaling) recognizes linear peptide-MHC: CD4+ MHC II (DR, DQ, DP, professional APCs), CD8+ MHC I (all nucleated cells). Cross-presentation allows exogenous antigen on MHC I for CD8+ activation.

B cell activation: T-dependent (protein antigens): BCR internalizes antigen → processes → presents on MHC II → interacts with Tfh (CD40L-CD40, cytokines IL-4/IL-21) → germinal center reaction (proliferation, somatic hypermutation, affinity maturation, class switch recombination). T-independent (polysaccharides, lipids): TI-1 (mitogenic) and TI-2 (cross-linking) responses, IgM only, no memory.

T cell activation: Signal 1 (TCR-pMHC), Signal 2 (co-stimulation: CD28-B7.1/B7.2), Signal 3 (cytokines). Clonal expansion and differentiation: Th1 (T-bet, IL-12/IFN-γ, cellular immunity), Th2 (GATA3, IL-4, humoral/EOS), Th17 (RORγt, IL-6/TGF-β/IL-23, neutrophil/mucosal), Tfh (Bcl-6, germinal center help), Treg (FoxP3, suppression). CTLA-4 and PD-1 provide negative regulation (checkpoints).

Antibody structure: Two heavy chains (V(H)-D-J-C), two light chains (V(L)-J-C). Variable regions (CDRs) form antigen-binding site. Constant region domains (CH1-3 or CH1-4) mediate effector functions. Fc region binds Fc receptors and complement. Effector functions: neutralization, opsonization (FcγR on phagocytes), complement activation (classical pathway), ADCC (NK cells via FcγRIII), mast cell activation (FcεRI).

Immunological memory: Primary response (lag 4-7 days, IgM then IgG, low affinity). Secondary response (lag 1-3 days, IgG, high affinity, memory B/T cells). Vaccination exploits memory formation.`,
      },
    },
    {
      title: 'Lymphoid Organs',
      content: {
        patient: `Your immune system is organized in special organs. Bone marrow is the factory where all blood cells are made. The thymus behind your breastbone is where T cells mature - it's largest in children and shrinks after puberty. Lymph nodes are small bean-shaped filters found throughout your body (neck, armpits, groin) that trap invaders and activate immune responses. The spleen in your upper left abdomen filters blood and removes old red blood cells. Tonsils and adenoids in your throat catch germs you breathe or eat. Peyer\'s patches in your intestines guard against gut infections.`,
        intermediate: `Primary lymphoid organs produce and mature lymphocytes: Red bone marrow produces all blood cells from hematopoietic stem cells; B cells complete development here. Thymus (butterfly-shaped in anterior mediastinum) is where T cell precursors mature via positive selection (MHC restriction) and negative selection (self-tolerance elimination); cortex has immature thymocytes, medulla has mature T cells; shrinks with age (thymic involution). Secondary lymphoid organs mount immune responses: Lymph nodes (500-600 throughout body) filter lymph via afferent vessels; cortex has B cell follicles (primary unstimulated, secondary with germinal centers), paracortex (T cells), medulla (plasma cells); efferent vessels exit. Spleen (largest lymphoid organ, 12 cm, left upper quadrant) filters blood; white pulp (periarteriolar lymphatic sheaths - T cells, follicles - B cells), red pulp (splenic cords and sinusoids, macrophages clear old RBCs). MALT: tonsils (pharyngeal, palatine, lingual), Peyer\'s patches (ileum), appendix.`,
        professional: `Lymphoid organ structure and function:

Bone marrow: Red marrow (hematopoietic), yellow marrow (fatty). Stroma: adventitial reticular cells, macrophages, sinusoids. Hematopoietic stem cells (HSCs) self-renew and differentiate through common myeloid/lymphoid progenitors. B cell development: pro-B → pre-B (heavy chain rearrangement, pre-BCR) → immature B (light chain rearrangement, surface IgM) → mature naive B (IgM/IgD). Negative selection removes autoreactive B cells.

Thymus: Bilobed, encapsulated, trabeculated. Cortex: dense with immature CD4+CD8+ (double positive) thymocytes, cortical epithelial cells (cTECs with proteasome subunit β5t for positive selection). Medulla: fewer cells, mature single positive (CD4+ or CD8+) thymocytes, medullary epithelial cells (mTECs expressing AIRE - autoimmune regulator for tissue-restricted antigens), dendritic cells (negative selection). Blood-thymus barrier in cortex. Thymic involution: post-puberty replacement with adipose, decreased naïve T cell output (2-3%/year loss until 35-45, then 1%/year).

Lymph node architecture: Capsule → subcapsular sinus (afferent lymph entry, macrophages/dendritic cells) → cortex (lymphoid follicles: mantle zone - IgD+ naive B cells; germinal center - dark zone proliferation, light zone selection/memory) → paracortex (T cell zone, high endothelial venules with addressins for lymphocyte homing) → medulla (medullary cords with plasma cells, medullary sinuses) → efferent lymphatic (hilum). Cortical follicular dendritic cells (FDCs) present antigen to B cells.

Spleen: White pulp (lymphoid tissue around central arteries): periarteriolar lymphatic sheaths (PALS, T cells), marginal zone (B cells, metallophilic macrophages), follicles (B cells, FDCs). Red pulp: splenic cords (cords of Billroth with reticular fibers, macrophages, plasma cells, blood cells) and venous sinuses (endothelial cells with stress fibers allowing RBC passage); marginal sinus separates white/red pulp. Functions: filtration of blood-borne pathogens, removal of senescent RBCs (pitting of inclusions), iron recycling, reservoir function.

MALT characteristics: Unencapsulated, organized lymphoid follicles in mucosal surfaces. Effector sites: lamina propria, epithelium (intraepithelial lymphocytes). Inductive sites: Peyer\'s patches, isolated lymphoid follicles. M cells (microfold) in follicle-associated epithelium sample antigens and transport to underlying immune cells.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'lymph-nodes', structureName: 'Lymph Nodes', linkText: 'Lymph Nodes', relevance: 'Secondary lymphoid organ' },
    { structureId: 'spleen', structureName: 'Spleen', linkText: 'Spleen', relevance: 'Blood filtration and immunity' },
    { structureId: 'thymus', structureName: 'Thymus', linkText: 'Thymus', relevance: 'T cell maturation' },
    { structureId: 'bone-marrow', structureName: 'Bone Marrow', linkText: 'Bone Marrow', relevance: 'Hematopoiesis and B cell development' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-21',
      type: 'textbook',
      title: 'Anatomy and Physiology - Chapter 21: The Lymphatic and Immune System',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/21-introduction',
      citation: 'Betts JG, et al. Anatomy and Physiology. Chapter 21: The Lymphatic and Immune System. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'lymphatic-system', entryType: 'anatomy', name: 'Lymphatic System', relationship: 'see-also' },
    { entryId: 'white-blood-cells', entryType: 'anatomy', name: 'White Blood Cells', relationship: 'see-also' },
    { entryId: 'inflammation', entryType: 'physiology', name: 'Inflammation', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['immune system', 'immunity', 'lymphatic system', 'antibodies', 'lymphocytes', 'inflammation', 'vaccine'],
    tags: ['immunology', 'physiology', 'defense'],
    synonyms: ['immunity', 'lymphatic immunity', 'immune response', 'host defense'],
  },
};

// Export all entries
export const immuneSystemEntries: EncyclopediaEntry[] = [
  immuneSystemEntry,
];
