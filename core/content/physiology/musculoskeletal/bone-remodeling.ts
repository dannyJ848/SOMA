/**
 * Bone Remodeling - Comprehensive Educational Content
 *
 * Covers osteoblast/osteoclast biology, RANK/RANKL/OPG signaling,
 * calcium-PTH-vitamin D axis, bone turnover markers, and osteoporosis.
 */

import { EducationalContent } from '../../types';

export const boneRemodeling: EducationalContent = {
  id: 'physiology-bone-remodeling',
  type: 'process',
  name: 'Bone Remodeling',
  nameEs: 'Remodelacion Osea',
  alternateNames: ['Bone Turnover', 'Bone Metabolism', 'Skeletal Remodeling'],

  levels: {
    1: {
      level: 1,
      summary: 'Your bones are constantly being broken down and rebuilt by special cells, keeping them strong and allowing them to repair damage.',
      explanation: `## Living Bones

### Bones Are Alive!

Many people think bones are dead and dry, but they are actually living tissue that is constantly changing. Two types of cells work as a team:

1. **Osteoclasts** (bone breakers): Dissolve and remove old or damaged bone
2. **Osteoblasts** (bone builders): Make new bone to replace what was removed

This process is called **bone remodeling** and it happens throughout your entire life.

### Why Does Bone Remodel?

- **Repair damage**: Tiny cracks from daily activity are fixed
- **Stay strong**: Old bone is replaced with fresh, strong bone
- **Calcium storage**: Bones store 99% of your body's calcium and release it when needed
- **Adapt to stress**: Bones get stronger where you put more force on them

### What Keeps Bones Healthy?

- **Calcium**: The main mineral in bones (from dairy, leafy greens)
- **Vitamin D**: Helps absorb calcium from food (from sunlight and fish)
- **Exercise**: Weight-bearing activity stimulates bone building
- **Hormones**: Estrogen and testosterone help maintain bone strength`,
      keyTerms: [
        { term: 'osteoclast', definition: 'A cell that breaks down and removes old bone', pronunciation: 'OS-tee-oh-klast' },
        { term: 'osteoblast', definition: 'A cell that builds new bone', pronunciation: 'OS-tee-oh-blast' },
        { term: 'bone remodeling', definition: 'The continuous process of breaking down old bone and building new bone' },
        { term: 'calcium', definition: 'A mineral that makes bones hard and strong' },
      ],
      analogies: [
        'Bone remodeling is like road construction -- old pavement is torn up and replaced with fresh material.',
        'Osteoclasts are the demolition crew; osteoblasts are the construction crew.',
        'Bones are like a calcium bank -- they store calcium and release it when your blood needs more.',
      ],
      examples: [
        'Astronauts lose bone in space because without gravity there is no stress on bones to stimulate building.',
        'Broken bones heal because osteoblasts build new bone at the fracture site.',
        'Older adults, especially women after menopause, can develop osteoporosis when bone breakdown exceeds building.',
      ],
      patientCounselingPoints: [
        'Weight-bearing exercise (walking, running, dancing) helps keep bones strong.',
        'Getting enough calcium and vitamin D is important at every age.',
        'Women lose bone faster after menopause due to estrogen decline.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bone remodeling involves coordinated osteoclast-mediated resorption and osteoblast-mediated formation regulated by RANK/RANKL/OPG signaling, with calcium homeostasis controlled by PTH, vitamin D, and calcitonin.',
      explanation: `## Bone Remodeling

### The Remodeling Cycle (4-6 months)

1. **Activation**: Osteocytes detect damage/strain -> recruit osteoclast precursors
2. **Resorption** (2-4 weeks): Osteoclasts dissolve bone using acid and enzymes
3. **Reversal**: Osteoclasts die; osteoblast precursors are recruited
4. **Formation** (4-6 months): Osteoblasts lay down new bone matrix (osteoid)
5. **Mineralization**: Calcium and phosphate crystals (hydroxyapatite) harden the osteoid

### Key Cells

| Cell | Origin | Function |
|------|--------|----------|
| Osteoclast | Monocyte/macrophage lineage | Resorbs bone (acid + cathepsin K) |
| Osteoblast | Mesenchymal stem cell | Forms bone (secretes collagen I, osteocalcin) |
| Osteocyte | Trapped osteoblast | Mechanosensor; orchestrates remodeling |
| Lining cell | Quiescent osteoblast | Covers bone surface; regulates ion exchange |

### RANK/RANKL/OPG System

- **RANKL** (on osteoblasts): Activates osteoclast precursors
- **RANK** (on osteoclasts): Receptor for RANKL -> osteoclast differentiation
- **OPG** (decoy receptor): Blocks RANKL -> prevents osteoclast activation

**Balance:** More RANKL = more resorption; more OPG = more formation. This ratio determines net bone gain or loss.

### Calcium Homeostasis

**PTH (parathyroid hormone):** Released when blood Ca2+ is low
- Increases bone resorption (releases Ca2+)
- Increases kidney Ca2+ reabsorption
- Activates vitamin D -> increases intestinal Ca2+ absorption

**Vitamin D (calcitriol, 1,25-dihydroxyvitamin D):**
- Increases intestinal Ca2+ and phosphate absorption
- Necessary for proper bone mineralization

**Calcitonin:** Released when blood Ca2+ is high
- Inhibits osteoclasts (minor role in adults)

### Peak Bone Mass

Bone mass peaks at age **25-30** and gradually declines. Higher peak bone mass = lower osteoporosis risk later. Achieved through genetics, nutrition, exercise, and hormones.`,
      keyTerms: [
        { term: 'RANKL', definition: 'Receptor activator of NF-kB ligand; osteoblast signal that activates osteoclast formation and activity' },
        { term: 'OPG', definition: 'Osteoprotegerin; decoy receptor that blocks RANKL, reducing bone resorption' },
        { term: 'PTH', definition: 'Parathyroid hormone; released when Ca2+ is low; increases bone resorption and Ca2+ reabsorption' },
        { term: 'hydroxyapatite', definition: 'Calcium phosphate crystal that mineralizes bone matrix, providing hardness' },
        { term: 'osteocyte', definition: 'Mature osteoblast trapped in bone; acts as mechanosensor and master regulator' },
        { term: 'calcitriol', definition: 'Active vitamin D (1,25-dihydroxyvitamin D); increases Ca2+ absorption from intestine' },
      ],
      analogies: [
        'RANKL is like a green light for osteoclasts; OPG is like a red light that stops them.',
        'PTH is like a bank manager withdrawing calcium from the bone bank when blood levels are low.',
        'Osteocytes are like security cameras embedded in bone, sensing damage and directing repair crews.',
      ],
      examples: [
        'Denosumab (Prolia) is a drug that blocks RANKL, mimicking OPG to reduce bone loss.',
        'Hyperparathyroidism causes too much PTH, leading to excessive bone resorption and high blood calcium.',
        'Vitamin D deficiency causes rickets in children and osteomalacia in adults (soft, poorly mineralized bones).',
      ],
    },
    3: {
      level: 3,
      summary: 'Bone remodeling is orchestrated by osteocyte-derived sclerostin/RANKL/OPG signaling, osteoclast resorption via RANK/NFATc1/cathepsin K, and osteoblast formation via Wnt/beta-catenin, with calcium homeostasis through PTH-vitamin D-FGF23 axis.',
      explanation: `## Bone Remodeling Physiology

### Osteocyte as Master Regulator

**Mechanosensing:** Osteocytes detect mechanical strain via fluid flow in lacunar-canalicular network -> integrin/connexin signaling -> modulate sclerostin and RANKL expression.

**Sclerostin (SOST):** Osteocyte-secreted Wnt inhibitor. Mechanical loading decreases sclerostin -> enables Wnt/beta-catenin -> osteoblast activation. Unloading increases sclerostin -> inhibits bone formation.

**Osteocyte RANKL:** Major source of RANKL for osteoclastogenesis (more than osteoblasts). Targeted by PTH signaling.

### Osteoclast Biology

**Differentiation:** M-CSF + RANKL -> RANK activation -> TRAF6 -> NF-kB and NFATc1 (master osteoclast transcription factor) -> fusion of mononuclear precursors -> multinucleated osteoclast.

**Resorption mechanism:** Sealed compartment (ruffled border + sealing zone with integrin alphav-beta3). H+-ATPase acidifies (pH ~4.5) dissolving hydroxyapatite. Cathepsin K degrades collagen I. Degradation products (CTX, NTX) enter blood as bone turnover markers.

### Osteoblast Biology

**Differentiation:** MSC -> pre-osteoblast -> osteoblast. Key pathways: Wnt/beta-catenin (canonical); BMP/Smad; Runx2/Osterix transcription factors.
**Products:** Type I collagen (90% of organic matrix), osteocalcin, alkaline phosphatase (ALP), RANKL, OPG.
**Fate:** ~65% apoptosis; ~30% become osteocytes (embedded in matrix); ~5% become lining cells.

### Calcium-Phosphate Homeostasis

**PTH actions (detailed):**
- Bone: Increases osteoblast RANKL -> osteoclast activation -> Ca2+ and PO4 release
- Kidney: Increases Ca2+ reabsorption (DCT, TRPV5); decreases PO4 reabsorption (PCT, NaPi-IIa downregulation via NHERF1); activates 1-alpha-hydroxylase -> calcitriol production
- Net effect: Increases Ca2+, decreases PO4

**FGF23 (from osteocytes/osteoblasts):**
- Increases renal PO4 excretion (NaPi-IIa/IIc downregulation)
- Inhibits 1-alpha-hydroxylase -> reduces calcitriol
- Requires co-receptor alpha-Klotho
- Elevated in CKD -> CKD-mineral bone disorder

**Vitamin D metabolism:** Skin (UV-B) -> cholecalciferol -> liver 25-hydroxylase -> 25(OH)D -> kidney 1-alpha-hydroxylase -> 1,25(OH)2D (calcitriol). PTH stimulates and FGF23 inhibits the final step.

### Bone Turnover Markers

| Marker | Type | Source |
|--------|------|--------|
| CTX (C-telopeptide) | Resorption | Collagen I degradation |
| P1NP (procollagen I N-propeptide) | Formation | Collagen I synthesis |
| ALP (bone-specific) | Formation | Osteoblast activity |
| Osteocalcin | Formation | Osteoblast secretion |
| TRAP-5b | Resorption | Osteoclast enzyme |`,
      keyTerms: [
        { term: 'sclerostin', definition: 'Osteocyte-secreted Wnt inhibitor; reduced by mechanical loading; target of romosozumab' },
        { term: 'NFATc1', definition: 'Master transcription factor for osteoclast differentiation activated by RANK/TRAF6 signaling' },
        { term: 'cathepsin K', definition: 'Cysteine protease in osteoclast ruffled border degrading type I collagen; target of odanacatib' },
        { term: 'FGF23', definition: 'Osteocyte/osteoblast hormone promoting renal phosphate excretion; elevated in CKD-MBD' },
        { term: 'Runx2', definition: 'Essential transcription factor for osteoblast differentiation; mutations cause cleidocranial dysplasia' },
        { term: 'CTX', definition: 'C-terminal telopeptide of collagen I; serum marker of bone resorption' },
      ],
      clinicalNotes: 'Bone turnover markers (P1NP for formation, CTX for resorption) guide osteoporosis treatment monitoring. Anabolic agents (teriparatide, romosozumab) increase P1NP first. Anti-resorptives (bisphosphonates, denosumab) decrease CTX. FGF23 elevation in CKD drives the CKD-MBD triad: hyperphosphatemia, calcitriol deficiency, secondary hyperparathyroidism.',
    },
    4: {
      level: 4,
      summary: 'Advanced bone biology integrates osteocyte mechanotransduction via sclerostin/Wnt, RANK/NFATc1 osteoclast signaling, BMP/Runx2 osteoblast differentiation, FGF23-Klotho phosphate regulation, CKD-MBD pathophysiology, and targeted osteoporosis pharmacology.',
      explanation: `## Advanced Bone Remodeling

### Wnt/Beta-Catenin Pathway in Bone

**Canonical Wnt:** Wnt ligands bind Frizzled + LRP5/6 co-receptor -> inhibits GSK3-beta -> beta-catenin accumulates -> nuclear translocation -> TCF/LEF target gene activation (Runx2, osterix, OPG).
**Inhibitors:** Sclerostin (SOST) binds LRP5/6; DKK1 binds LRP5/6 + Kremen. Both are therapeutic targets.
**LRP5 GOF mutations:** High bone mass phenotype (sclerosteosis-like). LOF mutations: Osteoporosis-pseudoglioma syndrome.

### RANKL/RANK Signaling Detail

RANKL (TNFSF11) -> RANK (TNFRSF11A) -> TRAF6 recruitment -> NF-kB activation + MAPK (JNK, p38, ERK) -> NFATc1 amplification loop (autoamplification). NFATc1 targets: DC-STAMP (fusion), cathepsin K, TRAP, carbonic anhydrase II.

**Costimulatory signals:** ITAM-bearing adapters (DAP12, FcRgamma) -> PLCgamma -> Ca2+ oscillations -> calcineurin -> NFATc1 nuclear entry. Without ITAM signals, RANKL alone is insufficient.

### Osteoclast Resorption: Molecular Detail

**Sealing zone:** Integrin alphav-beta3 forms actin ring via c-Src/Pyk2. Podosomes organize into sealing zone.
**Ruffled border:** V-ATPase (H+ pump); ClC-7 (Cl- channel, with Ostm1). Creates pH ~4.5.
**Enzyme release:** Cathepsin K (collagen I), MMP-9, TRAP. Transcytosis of degradation products.

### CKD-Mineral Bone Disorder

**Pathogenesis cascade:**
1. Reduced nephron mass -> phosphate retention
2. Increased FGF23 (compensatory) -> reduced calcitriol
3. Hypocalcemia + low calcitriol -> secondary hyperparathyroidism
4. PTH increases bone turnover -> renal osteodystrophy
5. Vascular calcification (from Ca x PO4 product elevation + loss of inhibitors)

**Treatment targets:** Phosphate binders, calcitriol/analogs, calcimimetics (cinacalcet), anti-FGF23 (burosumab for XLH).

### Osteoporosis Pharmacology

| Drug | Mechanism | Key Feature |
|------|-----------|-------------|
| Alendronate | Bisphosphonate; FPP synthase inhibition -> osteoclast apoptosis | First-line; 5-year treatment holiday |
| Denosumab | Anti-RANKL mAb | Rapid rebound on discontinuation |
| Teriparatide | PTH(1-34); intermittent pulse -> anabolic | 2-year limit; followed by anti-resorptive |
| Romosozumab | Anti-sclerostin mAb; dual anabolic + anti-resorptive | 1-year course; CV safety signal |
| Abaloparatide | PTHrP analog; anabolic | Less hypercalcemia than teriparatide |`,
      keyTerms: [
        { term: 'LRP5/6', definition: 'Wnt co-receptors on osteoblasts; sclerostin and DKK1 binding sites; GOF mutations cause high bone mass' },
        { term: 'ITAM costimulation', definition: 'DAP12/FcRgamma-mediated Ca2+ oscillations required alongside RANKL for complete osteoclast differentiation' },
        { term: 'ClC-7', definition: 'Chloride channel on osteoclast ruffled border; mutations cause osteopetrosis (no resorption)' },
        { term: 'cinacalcet', definition: 'Calcimimetic activating CaSR on parathyroid cells; reduces PTH in secondary hyperparathyroidism' },
        { term: 'burosumab', definition: 'Anti-FGF23 antibody for X-linked hypophosphatemia (XLH); restores phosphate and calcitriol' },
        { term: 'romosozumab', definition: 'Anti-sclerostin mAb with dual anabolic/anti-resorptive effect; CV safety monitoring required' },
      ],
      clinicalNotes: 'Denosumab discontinuation causes rapid rebound resorption with vertebral fracture risk; must transition to bisphosphonate. Romosozumab has CV safety signal (ARCH trial); avoid in recent MI/stroke. Sequential therapy (anabolic first, then anti-resorptive) is superior to anti-resorptive alone for severe osteoporosis. Bisphosphonate holidays (after 5 years oral, 3 years IV) reduce atypical femoral fracture and ONJ risk.',
    },
    5: {
      level: 5,
      summary: 'Contemporary bone biology integrates single-cell osteocyte transcriptomics, sclerostin-Wnt precision targeting, RANK/NFATc1 signaling refinements, CKD-MBD management algorithms, sequential osteoporosis therapy optimization, and emerging targets including cathepsin K inhibitors and DKK1 antibodies.',
      explanation: `## Precision Bone Biology

### Osteocyte Network Biology

**Lacunar-canalicular system:** ~23,000 km of canaliculi per cm3 of cortical bone. Osteocyte processes form gap junctions (connexin 43) enabling rapid signal propagation.
**Single-cell transcriptomics:** Osteocyte subtypes identified with distinct sclerostin, RANKL, and FGF23 expression profiles. Deeper (older) osteocytes express more sclerostin.

### Therapeutic Targeting of Wnt

**Romosozumab:** Anti-sclerostin; FRAME: 73% vertebral fracture risk reduction at 12 months. Dual mechanism: Stimulates formation markers (P1NP) AND reduces resorption markers (CTX). Bone-forming window closes by 6-9 months; transition to anti-resorptive essential.

**DKK1 antibodies:** Preclinical; may synergize with anti-sclerostin. Concern: DKK1 also regulates immune function and cancer biology.

### Osteoporosis: Sequential Therapy

**Optimal sequence (2024 guidelines):** Anabolic first (romosozumab 12 months OR teriparatide/abaloparatide 24 months) -> transition to bisphosphonate or denosumab. Anabolic-first is superior to anti-resorptive-first at all skeletal sites.

**Denosumab management:** If discontinuing, mandatory bisphosphonate transition (zoledronic acid 6 months after last denosumab). Monitor CTX; rising CTX indicates rebound.

### CKD-MBD: Current Algorithm

**KDIGO 2024:** Target phosphate toward normal range; treat PTH if progressively rising (avoid oversuppression). Calcimimetics + low-dose calcitriol is standard for secondary HPT. Etelcalcetide (IV calcimimetic) for dialysis patients. Parathyroidectomy for refractory tertiary HPT.

### Bone Quality Beyond BMD

**FRAX integration:** 10-year fracture probability from BMD + clinical risk factors. Trabecular bone score (TBS) adds spine microarchitecture assessment.
**Bone material strength index (BMSi):** In vivo microindentation of tibia cortex; research tool moving toward clinical use.
**Finite element analysis:** CT-based computational modeling of bone strength; superior fracture prediction vs BMD alone.`,
      keyTerms: [
        { term: 'bone-forming window', definition: 'Initial 6-9 month period of romosozumab therapy where anabolic effect is maximal before anti-resorptive dominates' },
        { term: 'TBS', definition: 'Trabecular bone score; DXA-derived measure of spine microarchitecture supplementing BMD' },
        { term: 'etelcalcetide', definition: 'IV calcimimetic for secondary HPT in dialysis patients; more potent PTH reduction than cinacalcet' },
        { term: 'sequential therapy', definition: 'Anabolic-first then anti-resorptive strategy; superior to reverse sequence for osteoporosis' },
        { term: 'BMSi', definition: 'Bone material strength index from in vivo microindentation; direct bone quality measurement' },
        { term: 'FRAX', definition: 'WHO fracture risk assessment tool integrating BMD with clinical risk factors for treatment decisions' },
      ],
      clinicalNotes: `1) Sequential therapy (anabolic first) is now preferred for severe osteoporosis per 2024 guidelines. 2) Denosumab requires mandatory transition to bisphosphonate on discontinuation. 3) Romosozumab CV signal requires shared decision-making; avoid in high CV risk. 4) CKD-MBD management targets phosphate and PTH trends rather than absolute values. 5) Bone quality assessment beyond BMD (TBS, FRAX, finite element) is improving fracture prediction.`,
    },
  },

  media: [
    { id: 'remodeling-cycle', type: 'diagram', filename: 'bone-remodeling-cycle.svg',
      title: 'Bone Remodeling Cycle', description: 'Activation, resorption, reversal, formation, mineralization phases' },
    { id: 'rank-rankl-opg', type: 'diagram', filename: 'rank-rankl-opg-signaling.svg',
      title: 'RANK/RANKL/OPG Signaling', description: 'Osteoblast-osteoclast coupling via RANKL and OPG' },
  ],

  citations: [
    { id: 'boron-bone', type: 'textbook', title: 'Medical Physiology', authors: ['Boron WF', 'Boulpaep EL'], source: 'Elsevier', chapter: '52' },
    { id: 'favus-metabolic', type: 'textbook', title: 'Primer on the Metabolic Bone Diseases and Disorders of Mineral Metabolism', authors: ['Bilezikian JP'], source: 'Wiley-Blackwell' },
  ],

  crossReferences: [
    { targetId: 'physiology-muscle-contraction', targetType: 'topic', relationship: 'sibling', label: 'Muscle Contraction' },
    { targetId: 'physiology-calcium-homeostasis', targetType: 'topic', relationship: 'related', label: 'Calcium Homeostasis' },
    { targetId: 'condition-osteoporosis', targetType: 'condition', relationship: 'see-also', label: 'Osteoporosis' },
    { targetId: 'condition-ckd-mbd', targetType: 'condition', relationship: 'see-also', label: 'CKD-MBD' },
  ],

  tags: {
    systems: ['musculoskeletal', 'endocrine'],
    topics: ['physiology', 'endocrinology', 'rheumatology', 'orthopedics'],
    keywords: ['bone', 'remodeling', 'osteoclast', 'osteoblast', 'RANKL', 'PTH', 'vitamin D', 'osteoporosis', 'calcium'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default boneRemodeling;
