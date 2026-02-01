/**
 * Nutrient Absorption - Comprehensive Educational Content
 *
 * Covers carbohydrate, protein, and lipid absorption mechanisms,
 * small intestinal transport, vitamins/minerals, and malabsorption.
 */

import { EducationalContent } from '../../types';

export const nutrientAbsorption: EducationalContent = {
  id: 'physiology-nutrient-absorption',
  type: 'process',
  name: 'Nutrient Absorption',
  nameEs: 'Absorcion de Nutrientes',
  alternateNames: ['Intestinal Absorption', 'Macronutrient Absorption', 'Digestive Absorption'],

  levels: {
    1: {
      level: 1,
      summary: 'Your small intestine absorbs nutrients from digested food into your blood so your body can use them for energy, growth, and repair.',
      explanation: `## How Your Body Absorbs Food

### Where Does Absorption Happen?

Most nutrient absorption happens in your **small intestine**, a 20-foot long tube with a huge inner surface area covered in tiny finger-like bumps called **villi**.

### Three Main Nutrients

1. **Carbohydrates** (sugars and starches): Broken into simple sugars and absorbed for energy
2. **Proteins** (meat, beans): Broken into amino acids and absorbed for building muscles
3. **Fats** (oils, butter): Broken into smaller pieces with help from bile and absorbed for energy storage

### How Nutrients Get Into Your Blood

- Nutrients pass through the wall of the small intestine into tiny blood vessels
- Blood carries them to your liver first, then to the rest of your body
- Fats take a special route through the **lymph system** before reaching the blood

### What Helps Absorption?

- **Villi**: Increase surface area (like wrinkles on a towel absorb more water)
- **Enzymes**: Break food into small enough pieces to absorb
- **Bile**: Acts like soap to break up fats into tiny droplets`,
      keyTerms: [
        { term: 'absorption', definition: 'Moving nutrients from your intestine into your blood' },
        { term: 'villi', definition: 'Tiny finger-like bumps lining the small intestine that increase surface area', pronunciation: 'VIL-eye' },
        { term: 'bile', definition: 'A green liquid made by your liver that helps break up fats' },
        { term: 'enzyme', definition: 'A protein that breaks food into smaller pieces for absorption' },
      ],
      analogies: [
        'Villi are like the loops on a towel -- more surface area means more absorption.',
        'Bile works like dish soap, breaking fat into tiny droplets that can mix with water.',
        'The small intestine is like a long conveyor belt where different stations absorb different nutrients.',
      ],
      examples: [
        'Lactose intolerant people lack the enzyme to break down milk sugar, so it is not absorbed properly.',
        'People with celiac disease have damaged villi, so they cannot absorb nutrients well.',
        'Vitamins A, D, E, and K need fat to be absorbed -- that is why they are called fat-soluble.',
      ],
      patientCounselingPoints: [
        'A balanced diet gives your body all the nutrients it needs.',
        'Celiac disease and Crohn disease can reduce nutrient absorption.',
        'Fat-soluble vitamins (A, D, E, K) need dietary fat to be absorbed.',
      ],
    },
    2: {
      level: 2,
      summary: 'The small intestine absorbs carbohydrates as monosaccharides via SGLT1/GLUT transporters, proteins as amino acids/di-tripeptides via PepT1, and lipids as fatty acids/monoglycerides via micelle-mediated diffusion and chylomicron formation.',
      explanation: `## Nutrient Absorption

### Small Intestinal Surface Area

The small intestine maximizes absorption with three levels of folding:
1. **Circular folds** (plicae circulares): Visible folds
2. **Villi**: Finger-like projections (0.5-1 mm)
3. **Microvilli** (brush border): Microscopic projections on each cell

Total surface area: ~200 m2 (size of a tennis court)

### Carbohydrate Absorption

**Digestion:** Starch -> maltose (amylase) -> glucose (maltase, brush border)
**Absorption:**
- **SGLT1**: Active co-transport of glucose/galactose with Na+ (apical)
- **GLUT5**: Facilitated diffusion of fructose (apical)
- **GLUT2**: Exit of all monosaccharides (basolateral)
- Location: Primarily duodenum and jejunum

### Protein Absorption

**Digestion:** Proteins -> peptides (pepsin, trypsin, chymotrypsin) -> amino acids + di/tripeptides
**Absorption:**
- **Amino acid transporters**: Multiple Na+-dependent carriers (apical)
- **PepT1**: H+-coupled di/tripeptide transporter (apical) -- very efficient
- **Basolateral**: Amino acid exit into blood
- Location: Primarily jejunum

### Fat Absorption

**Digestion:** Triglycerides -> 2 fatty acids + monoglyceride (pancreatic lipase + colipase)
**Bile salt role:** Emulsify fats into micelles (tiny droplets)
**Absorption:**
1. Micelles deliver fatty acids and monoglycerides to brush border
2. Diffusion across enterocyte membrane
3. Re-esterification to triglycerides inside the cell
4. Packaged into **chylomicrons** with apolipoprotein B-48
5. Chylomicrons enter **lacteals** (lymphatic vessels) -- not portal blood
- Location: Primarily jejunum

### Other Key Absorptions

| Nutrient | Site | Mechanism |
|----------|------|-----------|
| Iron (Fe2+) | Duodenum | DMT1 transporter; ferroportin exit |
| Calcium | Duodenum | TRPV6 (vitamin D dependent) |
| Vitamin B12 | Terminal ileum | IF-B12 complex via cubilin receptor |
| Bile salts | Terminal ileum | ASBT transporter (enterohepatic circulation) |
| Folate | Jejunum | PCFT transporter |
| Water | Throughout | Osmosis following solute absorption |`,
      keyTerms: [
        { term: 'SGLT1', definition: 'Sodium-glucose co-transporter on intestinal brush border that actively absorbs glucose and galactose' },
        { term: 'PepT1', definition: 'H+-coupled transporter absorbing di- and tripeptides; handles ~70% of protein absorption' },
        { term: 'micelle', definition: 'Tiny sphere of bile salts surrounding fat digestion products for delivery to brush border' },
        { term: 'chylomicron', definition: 'Lipoprotein particle carrying absorbed fats from intestine into lymphatic system' },
        { term: 'enterohepatic circulation', definition: 'Recycling of bile salts: secreted in bile, reabsorbed in terminal ileum, returned to liver' },
        { term: 'brush border', definition: 'The microvilli surface of intestinal cells containing digestive enzymes and transporters' },
      ],
      analogies: [
        'Micelles are like delivery trucks carrying fat to the intestinal wall for unloading.',
        'SGLT1 is like a revolving door that requires a sodium "ticket" to let glucose through.',
        'Chylomicrons are like packages wrapped in protein for shipping through the lymph system.',
      ],
      examples: [
        'Glucose-galactose malabsorption is caused by SGLT1 mutations -- severe watery diarrhea in infants.',
        'After gallbladder removal, some people have trouble with fatty meals because bile release is less regulated.',
        'Terminal ileum resection (Crohn disease) causes B12 deficiency and bile salt malabsorption.',
      ],
    },
    3: {
      level: 3,
      summary: 'Intestinal absorption involves specific molecular transporters for each macronutrient class: SGLT1/GLUT2/GLUT5 for sugars, PepT1 and amino acid carriers for proteins, and micelle-mediated uptake with chylomicron assembly for lipids, with site-specific absorption of vitamins and minerals.',
      explanation: `## Nutrient Absorption Physiology

### Carbohydrate Transport

**Brush border enzymes:** Maltase, sucrase, isomaltase, lactase (all disaccharidases on enterocyte membrane).
**SGLT1:** 2Na+:1 glucose/galactose electrogenic co-transport; powered by basolateral Na/K-ATPase. Rate-limiting at low luminal concentrations.
**GLUT5:** Facilitated fructose transport (Na+-independent).
**GLUT2:** Basolateral exit for all monosaccharides; may also be recruited to apical membrane at high glucose loads.

**Lactase deficiency:** Primary (genetic decline after weaning, 70% of world population) vs secondary (mucosal injury). Unabsorbed lactose -> colonic fermentation -> gas, bloating, osmotic diarrhea.

### Protein Transport

**Luminal digestion:** Pepsin (stomach, pH 2) -> pancreatic proteases (trypsin, chymotrypsin, elastase, carboxypeptidases) -> brush border peptidases.
**PepT1 (SLC15A1):** H+-coupled; absorbs di/tripeptides more efficiently than free amino acids; handles ~70% of absorbed nitrogen. Pharmaceutical target: oral prodrugs designed as dipeptide analogs (valacyclovir, valganciclovir).
**Amino acid transporters:** Multiple systems (B0AT1 for neutral AAs; rBAT/b0,+AT for cationic AAs). Hartnup disease: B0AT1 mutation (tryptophan/niacin deficiency); cystinuria: rBAT/b0,+AT mutation.

### Lipid Absorption (Detailed)

**Emulsification:** Bile salts (conjugated, amphipathic) emulsify dietary fat.
**Pancreatic lipase + colipase:** Lipase anchored to fat droplet by colipase (displaced bile salts); cleaves sn-1 and sn-3 positions of triglyceride -> 2 FFAs + 2-monoglyceride.

**Mixed micelles:** Bile salt micelles incorporate FFAs, monoglycerides, cholesterol, and fat-soluble vitamins.
**Enterocyte uptake:** CD36 and FATP4 facilitate FA uptake; passive diffusion also contributes. Cholesterol: NPC1L1 transporter (ezetimibe target).
**Intracellular processing:** Smooth ER re-esterification; MTP (microsomal triglyceride transfer protein) loads lipid onto ApoB-48 -> chylomicron assembly -> Golgi -> exocytosis into lacteals.

**Abetalipoproteinemia:** MTP mutation -> no chylomicron/VLDL assembly -> fat malabsorption, acanthocytosis, fat-soluble vitamin deficiency.

### Iron Absorption

**Duodenal enterocyte:** Dcytb reduces Fe3+ -> Fe2+; DMT1 apical uptake; ferritin storage vs ferroportin (basolateral export).
**Hepcidin regulation:** Liver-produced; binds ferroportin -> internalization/degradation -> decreased iron export. High hepcidin -> iron deficiency anemia (inflammation). Low hepcidin -> iron overload (hemochromatosis).

### Vitamin B12 Absorption

Dietary B12 -> released from food protein (acid/pepsin) -> binds R-protein (saliva) -> pancreatic proteases degrade R-protein in duodenum -> B12 binds intrinsic factor (parietal cells) -> IF-B12 complex absorbed in terminal ileum via cubilin/amnionless receptor -> transcobalamin II transport in blood.`,
      keyTerms: [
        { term: 'NPC1L1', definition: 'Cholesterol transporter on enterocyte brush border; target of ezetimibe' },
        { term: 'MTP', definition: 'Microsomal triglyceride transfer protein loading lipid onto ApoB-48 for chylomicron assembly' },
        { term: 'hepcidin', definition: 'Liver peptide regulating iron absorption via ferroportin degradation; elevated in inflammation' },
        { term: 'PepT1', definition: 'H+-coupled dipeptide/tripeptide transporter; handles most protein absorption; drug delivery target' },
        { term: 'colipase', definition: 'Cofactor anchoring pancreatic lipase to fat droplets by displacing bile salts' },
        { term: 'Hartnup disease', definition: 'B0AT1 mutation causing neutral amino acid malabsorption; presents with pellagra-like symptoms' },
      ],
      clinicalNotes: 'Terminal ileum resection (Crohn) causes B12 deficiency (IF-B12 absorption) and bile salt malabsorption (ASBT) leading to steatorrhea and fat-soluble vitamin deficiency. Ezetimibe blocks NPC1L1 to reduce cholesterol absorption. Hepcidin is the master regulator of iron: elevated in inflammatory states (anemia of chronic disease), deficient in hereditary hemochromatosis.',
    },
    4: {
      level: 4,
      summary: 'Advanced nutrient absorption integrates molecular transporter genetics, intracellular lipid processing via MTP/ApoB-48 pathway, hepcidin-ferroportin iron regulation, site-specific absorption mapping, and pathophysiology of malabsorption syndromes.',
      explanation: `## Advanced Nutrient Absorption

### Carbohydrate Transport Kinetics

**SGLT1 saturation kinetics:** Km ~0.5 mM glucose; 2Na+:1glucose stoichiometry. SGLT1 mutations cause glucose-galactose malabsorption (severe neonatal diarrhea).
**GLUT2 trafficking model:** At high luminal glucose (>25 mM), GLUT2 is transiently inserted into apical membrane via PKC-beta-II signaling -> rapid facilitated uptake. Controversial; may explain accelerated glucose absorption in type 2 diabetes (upregulated apical GLUT2).

**Starch digestion:** Salivary + pancreatic alpha-amylase cleave alpha-1,4 bonds. Brush border: maltase-glucoamylase (alpha-1,4) and sucrase-isomaltase (alpha-1,6 at branching points). Congenital sucrase-isomaltase deficiency: osmotic diarrhea with sucrose/starch ingestion.

### Lipid Processing: Molecular Detail

**Chylomicron assembly:** Smooth ER: MGAT and DGAT re-esterify monoglyceride + FFAs -> TG. MTP transfers lipid to ApoB-48 (truncated ApoB from intestinal RNA editing by APOBEC1). Pre-chylomicron -> Golgi glycosylation -> COPII-mediated transport -> exocytosis -> lacteals.

**Fat-soluble vitamin absorption:** Requires micelle incorporation. Vitamin A (retinol esters via STRA6); D (passive diffusion); E (alpha-tocopherol via SR-BI); K (NPC1L1 pathway).

**Medium-chain triglycerides (MCTs):** C6-C12 fatty acids; do not require bile/micelles; absorbed directly into portal blood (not chylomicrons). Clinical: MCT oil supplementation in pancreatic insufficiency and bile salt deficiency.

### Iron Regulation: Hepcidin Axis

**Hepcidin regulation:**
- Iron loading -> BMP6 + HJV -> SMAD pathway -> hepcidin transcription increased
- Inflammation -> IL-6 -> JAK/STAT3 -> hepcidin increased (anemia of chronic disease)
- Hypoxia/erythropoiesis -> erythroferrone (from erythroblasts) inhibits hepcidin
- HFE mutations (C282Y): Impaired hepcidin response -> iron overload

**DMT1 regulation:** IRE/IRP system: Low iron -> IRP binds DMT1 mRNA 3'-IRE -> stabilization -> increased DMT1. Ferroportin 5'-IRE -> IRP binding blocks translation when iron is low (preserves intracellular iron).

### Malabsorption Syndromes

| Condition | Mechanism | Key Deficiencies |
|-----------|-----------|-----------------|
| Celiac disease | Villous atrophy (anti-tTG) | Iron, folate, Ca2+, fat-soluble vitamins |
| Chronic pancreatitis | Lipase/protease deficiency | Fats, fat-soluble vitamins, B12 |
| Short bowel syndrome | Reduced absorptive surface | All nutrients; depends on segment lost |
| Bile salt deficiency | No micelle formation | Fats, fat-soluble vitamins |
| Tropical sprue | Unknown (infection?) | B12, folate; responds to antibiotics |
| Whipple disease | Tropheryma whipplei infection | Fats; PAS-positive macrophages |`,
      keyTerms: [
        { term: 'APOBEC1', definition: 'RNA editing enzyme creating ApoB-48 from ApoB-100 mRNA in intestinal cells; essential for chylomicron assembly' },
        { term: 'erythroferrone', definition: 'Hormone from erythroblasts that suppresses hepcidin during erythropoietic demand' },
        { term: 'IRE/IRP system', definition: 'Iron-responsive element/iron regulatory protein post-transcriptional control of DMT1, ferroportin, ferritin, and TfR expression' },
        { term: 'MCT', definition: 'Medium-chain triglycerides; absorbed directly into portal blood without bile/micelles; useful in malabsorption' },
        { term: 'sucrase-isomaltase', definition: 'Brush border enzyme complex cleaving sucrose and alpha-1,6 starch branch points' },
        { term: 'tissue transglutaminase', definition: 'Autoantigen in celiac disease; deamidates gliadin peptides enhancing HLA-DQ2/DQ8 binding' },
      ],
      clinicalNotes: 'In suspected malabsorption: 1) Fecal elastase for pancreatic insufficiency (<200 ug/g). 2) Anti-tTG IgA for celiac (with total IgA to exclude deficiency). 3) SeHCAT or C4 for bile acid malabsorption. 4) Hydrogen breath test for lactose/SIBO. 5) D-xylose absorption test distinguishes mucosal from luminal malabsorption. MCT oil bypasses bile/lymph pathway and is useful in short bowel and pancreatic insufficiency.',
    },
    5: {
      level: 5,
      summary: 'Contemporary absorption physiology integrates transporter pharmacogenomics, SGLT1 as a drug target, precision iron therapeutics targeting hepcidin, chylomicron pathway disorders, and emerging gut-liver axis understanding in nutrient sensing and metabolic disease.',
      explanation: `## Precision Nutrient Absorption

### Transporter Pharmacology

**SGLT1 inhibition:** Sotagliflozin (dual SGLT1/2 inhibitor) reduces intestinal glucose absorption -> reduced postprandial glycemia. SCORED/SOLOIST trials: Benefit in diabetic CKD and HF.
**NPC1L1 pharmacogenomics:** NPC1L1 loss-of-function variants associated with lower LDL and reduced CAD risk (parallel to ezetimibe effect). IMPROVE-IT: Ezetimibe + statin reduces CV events.

### Iron Therapeutics Targeting Hepcidin

**Anti-hepcidin approaches:** For anemia of chronic disease/inflammation.
- Hepcidin antibodies (LY2787106) and anticalins: Preclinical/early clinical
- HIF-PHD inhibitors (roxadustat, daprodustat): Suppress hepcidin via erythropoiesis stimulation; approved for CKD anemia in some markets
- Ferroportin stabilizers: Prevent hepcidin-induced ferroportin degradation

**Hepcidin agonists:** For iron overload (HFE hemochromatosis, thalassemia).
- TMPRSS6 (matriptase-2) siRNA: Increases hepcidin; Phase II for beta-thalassemia
- Minihepcidins: Synthetic hepcidin analogs

### Chylomicron Disorders

**Chylomicron retention disease (Anderson):** SAR1B mutation -> impaired COPII-mediated ER-to-Golgi transport -> fat accumulation in enterocytes -> steatorrhea and fat-soluble vitamin deficiency.
**Familial chylomicronemia (FCS):** LPL deficiency; severely elevated TG; pancreatitis risk. Volanesorsen (APOC3 ASO) and olezarsen under investigation.

### Gut Nutrient Sensing

**Enteroendocrine signaling:** L-cells (GLP-1, PYY), K-cells (GIP), I-cells (CCK). Nutrient-sensing GPCRs: FFAR1/4 (fatty acids), T1R2/T1R3 (sugars), CaSR (amino acids).
**GLP-1 axis:** Incretin effect accounts for ~50% of postprandial insulin. GLP-1 RAs (semaglutide) revolutionizing diabetes and obesity treatment. Tirzepatide (GIP/GLP-1 dual agonist): SURMOUNT trials for obesity.

### Microbiome and Absorption

**Short-chain fatty acids (SCFAs):** Colonic bacterial fermentation of fiber -> butyrate, propionate, acetate. Butyrate is primary colonocyte fuel; promotes barrier integrity.
**Bile acid-microbiome axis:** Gut bacteria deconjugate and transform bile acids; secondary bile acids (DCA, LCA) activate FXR and TGR5 signaling -> metabolic regulation.`,
      keyTerms: [
        { term: 'sotagliflozin', definition: 'Dual SGLT1/2 inhibitor reducing intestinal glucose absorption and renal glucose reabsorption' },
        { term: 'roxadustat', definition: 'HIF-PHD inhibitor stimulating erythropoiesis and suppressing hepcidin; approved for CKD anemia' },
        { term: 'SAR1B', definition: 'GTPase essential for COPII vesicle-mediated chylomicron transport; mutations cause chylomicron retention disease' },
        { term: 'GLP-1', definition: 'Incretin hormone from L-cells; enhances insulin secretion; GLP-1 RAs treat diabetes and obesity' },
        { term: 'butyrate', definition: 'SCFA from colonic fiber fermentation; primary colonocyte fuel; maintains barrier integrity' },
        { term: 'FXR', definition: 'Farnesoid X receptor; bile acid nuclear receptor regulating bile acid synthesis and glucose/lipid metabolism' },
      ],
      clinicalNotes: `1) Sotagliflozin adds intestinal SGLT1 blockade to renal SGLT2 effects; benefits in HF regardless of diabetes. 2) HIF-PHD inhibitors represent a paradigm shift in CKD anemia by suppressing hepcidin. 3) Understanding chylomicron assembly disorders guides fat-soluble vitamin supplementation strategies. 4) GLP-1 based therapies exploit intestinal nutrient sensing for metabolic disease. 5) Microbiome-derived SCFAs and bile acid signaling are emerging therapeutic targets.`,
    },
  },

  media: [
    { id: 'intestinal-absorption', type: 'diagram', filename: 'intestinal-absorption-mechanisms.svg',
      title: 'Intestinal Absorption Mechanisms', description: 'Carbohydrate, protein, and lipid absorption pathways' },
    { id: 'chylomicron-assembly', type: 'diagram', filename: 'chylomicron-assembly.svg',
      title: 'Chylomicron Assembly', description: 'Intracellular lipid processing and chylomicron formation' },
  ],

  citations: [
    { id: 'boron-absorption', type: 'textbook', title: 'Medical Physiology', authors: ['Boron WF', 'Boulpaep EL'], source: 'Elsevier', chapter: '45-46' },
    { id: 'guyton-absorption', type: 'textbook', title: 'Guyton and Hall Textbook of Medical Physiology', authors: ['Hall JE', 'Hall ME'], source: 'Elsevier', chapter: '65-66' },
  ],

  crossReferences: [
    { targetId: 'physiology-gastric-acid-secretion', targetType: 'topic', relationship: 'sibling', label: 'Gastric Acid Secretion' },
    { targetId: 'physiology-gi-motility', targetType: 'topic', relationship: 'related', label: 'GI Motility' },
    { targetId: 'condition-celiac-disease', targetType: 'condition', relationship: 'see-also', label: 'Celiac Disease' },
    { targetId: 'condition-malabsorption', targetType: 'condition', relationship: 'see-also', label: 'Malabsorption Syndromes' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['physiology', 'gastroenterology', 'nutrition'],
    keywords: ['absorption', 'nutrients', 'carbohydrate', 'protein', 'lipid', 'iron', 'B12', 'malabsorption'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nutrientAbsorption;
