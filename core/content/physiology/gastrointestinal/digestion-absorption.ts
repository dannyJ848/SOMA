/**
 * Digestion & Absorption - Comprehensive Educational Content
 *
 * Covers mechanical and chemical digestion, nutrient absorption mechanisms,
 * digestive enzymes, and the journey of macronutrients from ingestion to uptake.
 */

import { EducationalContent } from '../../types';

export const digestionAbsorption: EducationalContent = {
  id: 'physiology-gi-digestion-absorption',
  type: 'process',
  name: 'Digestion and Absorption',
  alternateNames: [
    'Nutrient digestion',
    'Digestive process',
    'Digestion y absorcion (Spanish)',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Digestion breaks down food into tiny pieces your body can use, and absorption moves those pieces from your gut into your blood.',
      explanation: `Your body cannot use a whole sandwich. It has to break it down into super tiny pieces first. That is what digestion does.

**Two Ways Your Body Breaks Down Food:**

1. **Mechanical digestion (physical breaking)** - This is like tearing food into small bits. Your teeth chew, your stomach churns and squeezes, and your intestines push food around.

2. **Chemical digestion (using special juices)** - Your body makes special chemicals called enzymes that dissolve food. Think of them like tiny scissors cutting food molecules apart.

**The Journey of Your Food:**

- **Mouth:** Teeth chew and saliva starts dissolving starches
- **Stomach:** Strong acid and enzymes break down proteins; the stomach churns like a washing machine
- **Small intestine:** Most digestion finishes here, and nutrients pass through the intestine wall into your blood
- **Large intestine:** Water is absorbed; leftovers become waste

**Absorption - Getting Nutrients Into Your Blood:**

The small intestine has millions of tiny finger-like bumps called villi. These create a huge surface area (about the size of a tennis court!) to soak up nutrients. Once nutrients pass through the villi, they enter your blood and travel to every cell in your body.

**En espanol:** La digestion rompe los alimentos en pedazos muy pequenos, y la absorcion los mueve desde el intestino hacia la sangre para que tu cuerpo los use.`,
      keyTerms: [
        {
          term: 'digestion',
          definition:
            'Breaking food down into tiny pieces the body can use',
        },
        {
          term: 'absorption',
          definition:
            'Moving nutrients from the intestine into the blood',
        },
        {
          term: 'enzyme',
          definition:
            'A special chemical that breaks down food molecules, like tiny scissors',
        },
        {
          term: 'villi',
          definition:
            'Tiny finger-like bumps in the small intestine that soak up nutrients',
        },
      ],
      analogies: [
        'Digestion is like a food processor - first it chops food into smaller pieces (mechanical), then dissolves them with special juices (chemical).',
        'Villi in your small intestine are like millions of tiny fingers reaching out to grab nutrients as food passes by.',
        'Enzymes are like keys that only fit specific locks - each enzyme breaks down only one type of food.',
      ],
      examples: [
        'When you chew a cracker, you are doing mechanical digestion. If you hold it in your mouth long enough, it starts tasting sweet because saliva enzymes are breaking starch into sugar.',
        'Your stomach acid is so strong it could dissolve a metal nail, but a thick mucus layer protects the stomach wall.',
      ],
      patientCounselingPoints: [
        'Chewing food thoroughly helps digestion start properly.',
        'Drinking water with meals helps move food through the digestive system.',
        'Eating slowly gives your body time to signal when you are full.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Digestion involves mechanical breakdown (chewing, churning) and chemical breakdown (enzymes and acid) of macronutrients, with absorption occurring primarily in the small intestine through specialized transport mechanisms.',
      explanation: `## Mechanical Digestion

**Mouth:** Mastication (chewing) breaks food into smaller pieces, increasing surface area for enzymes. The tongue mixes food with saliva to form a bolus.

**Stomach:** Three muscle layers churn food into a semi-liquid called chyme. Gastric motility mixes food with acid and pepsin over 2-4 hours.

**Small Intestine:** Segmentation contractions mix chyme with bile and pancreatic juice for thorough chemical digestion.

## Chemical Digestion

**Carbohydrates:**
- Salivary amylase (mouth) breaks starch into maltose
- Pancreatic amylase (small intestine) continues starch digestion
- Brush border enzymes (maltase, sucrase, lactase) break disaccharides into monosaccharides (glucose, fructose, galactose)

**Proteins:**
- Pepsin (stomach) starts protein digestion in acidic environment (pH 1.5-3.5)
- Pancreatic enzymes (trypsin, chymotrypsin, carboxypeptidase) continue in the small intestine
- Brush border peptidases break small peptides into amino acids

**Fats (Lipids):**
- Lingual lipase (mouth) begins minimal fat digestion
- Bile salts from the liver emulsify fats (break large fat globules into tiny droplets)
- Pancreatic lipase breaks triglycerides into monoglycerides and fatty acids

## Absorption in the Small Intestine

The small intestine is perfectly designed for absorption:
- **Length:** About 6 meters (20 feet)
- **Circular folds:** Increase surface area 3x
- **Villi:** Increase surface area 10x
- **Microvilli (brush border):** Increase surface area 20x
- **Total surface area:** Approximately 200 square meters

**How Nutrients Get Absorbed:**
- **Monosaccharides:** Active transport and facilitated diffusion
- **Amino acids:** Active transport (sodium-dependent)
- **Fatty acids:** Simple diffusion into intestinal cells, then packaged into chylomicrons
- **Vitamins and minerals:** Various specialized transporters

**En espanol:** La digestion usa procesos mecanicos (masticacion, agitacion) y quimicos (enzimas, acido) para descomponer los macronutrientes. La absorcion ocurre principalmente en el intestino delgado a traves de transportadores especializados.`,
      keyTerms: [
        {
          term: 'chyme',
          definition:
            'Semi-liquid mixture of partially digested food and gastric secretions',
          pronunciation: 'kyme',
        },
        {
          term: 'emulsification',
          definition:
            'Breaking large fat globules into tiny droplets using bile salts to increase enzyme access',
        },
        {
          term: 'brush border',
          definition:
            'The microvilli-covered surface of intestinal cells where final digestion and absorption occur',
        },
        {
          term: 'chylomicron',
          definition:
            'Lipoprotein particle that transports absorbed dietary fats from the intestine to the blood via lymph',
          pronunciation: 'KY-lo-my-kron',
        },
        {
          term: 'bolus',
          definition:
            'A rounded mass of chewed food mixed with saliva, ready to be swallowed',
          pronunciation: 'BOH-lus',
        },
      ],
      analogies: [
        'Bile acts like dish soap on a greasy pan - it breaks big fat blobs into tiny droplets so enzymes can access them.',
        'The folds, villi, and microvilli of the small intestine are like a towel versus a smooth sheet - the texture dramatically increases the surface area for soaking things up.',
      ],
      examples: [
        'People who are lactose intolerant lack the brush border enzyme lactase, so undigested lactose reaches the colon where bacteria ferment it, causing gas and bloating.',
        'After a fatty meal, bile is released from the gallbladder to help emulsify the fat, which is why gallbladder removal can cause difficulty digesting high-fat foods.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Digestion integrates luminal, membrane-bound, and intracellular enzymatic processes acting on carbohydrates, proteins, and lipids, with absorption relying on specific transporter proteins, paracellular and transcellular routes, and specialized packaging of lipids into chylomicrons.',
      explanation: `## Carbohydrate Digestion and Absorption

**Luminal Digestion:**
- Salivary alpha-amylase (ptyalin): Cleaves alpha-1,4 glycosidic bonds in starch; inactivated at gastric pH
- Pancreatic alpha-amylase: Major starch-digesting enzyme; produces maltose, maltotriose, and alpha-limit dextrins

**Brush Border Digestion:**
| Enzyme | Substrate | Products |
|--------|-----------|----------|
| Maltase | Maltose | 2 glucose |
| Sucrase-isomaltase | Sucrose, isomaltose | Glucose + fructose; 2 glucose |
| Lactase (beta-galactosidase) | Lactose | Glucose + galactose |
| Trehalase | Trehalose | 2 glucose |

**Monosaccharide Absorption:**
- SGLT1 (apical): Na+/glucose and Na+/galactose cotransporter (secondary active transport)
- GLUT5 (apical): Fructose facilitated diffusion
- GLUT2 (basolateral): Glucose, galactose, fructose exit to blood

## Protein Digestion and Absorption

**Gastric Phase:**
- Pepsinogen activated to pepsin by HCl (pH < 3)
- Pepsin is an endopeptidase preferring hydrophobic amino acid residues
- Autocatalytic activation (pepsin activates more pepsinogen)

**Pancreatic Phase:**
| Enzyme | Proenzyme | Activator | Specificity |
|--------|-----------|-----------|-------------|
| Trypsin | Trypsinogen | Enterokinase | Arg, Lys (basic) |
| Chymotrypsin | Chymotrypsinogen | Trypsin | Phe, Trp, Tyr (aromatic) |
| Elastase | Proelastase | Trypsin | Ala, Gly, Ser (small) |
| Carboxypeptidase A | Procarboxypeptidase A | Trypsin | C-terminal aromatic |
| Carboxypeptidase B | Procarboxypeptidase B | Trypsin | C-terminal basic |

**Activation Cascade:** Enterokinase (enteropeptidase) on brush border converts trypsinogen to trypsin, which then activates all other pancreatic proenzymes.

**Amino Acid/Peptide Absorption:**
- Multiple Na+-dependent amino acid transporters (neutral, basic, acidic, imino)
- PepT1 (H+/peptide cotransporter): Di- and tripeptides (accounts for majority of protein absorption)
- Intracellular peptidases convert di/tripeptides to amino acids
- Basolateral amino acid transporters export to portal blood

## Lipid Digestion and Absorption

**Emulsification:**
- Bile salts (amphipathic) coat fat droplets
- Lecithin (phosphatidylcholine) assists emulsification
- Reduces droplet size from ~1 mm to ~1 micrometer

**Enzymatic Digestion:**
- Pancreatic lipase + colipase: Triglycerides to 2-monoglyceride + 2 fatty acids
- Cholesterol esterase: Cholesterol esters to free cholesterol + fatty acid
- Phospholipase A2: Phospholipids to lysophospholipid + fatty acid

**Micelle Formation and Absorption:**
- Mixed micelles (4-8 nm): Bile salts + monoglycerides + fatty acids + cholesterol + fat-soluble vitamins
- Micelles deliver lipids to brush border for absorption
- Fatty acids and monoglycerides diffuse across apical membrane
- Short/medium-chain fatty acids (< C12): Enter portal blood directly
- Long-chain fatty acids: Re-esterified in smooth ER to triglycerides

**Chylomicron Assembly:**
- Triglycerides + cholesterol + phospholipids + apolipoprotein B-48
- Assembled in smooth ER and Golgi
- Secreted basolaterally into lacteals (lymph) via exocytosis
- Enter systemic circulation via thoracic duct

## Vitamin and Mineral Absorption

**Fat-Soluble Vitamins (A, D, E, K):** Absorbed with lipids in micelles
**Water-Soluble Vitamins:** Specific transporters (e.g., sodium-dependent for vitamin C)
**Vitamin B12:** Requires intrinsic factor from parietal cells; absorbed in terminal ileum via cubilin receptor
**Iron:** Fe3+ reduced to Fe2+ by ferrireductase; absorbed via DMT1 in duodenum; exported by ferroportin
**Calcium:** Active (vitamin D-dependent, duodenum) and passive (paracellular, throughout intestine)

**En espanol:** La digestion integra procesos enzimaticos luminales, de membrana e intracelulares. La absorcion depende de proteinas transportadoras especificas, rutas paracelulares y transcelulares, y el empaquetamiento de lipidos en quilomicrones.`,
      keyTerms: [
        {
          term: 'SGLT1',
          definition:
            'Sodium-glucose linked transporter 1; secondary active transporter on enterocyte apical membrane using Na+ gradient to absorb glucose and galactose',
        },
        {
          term: 'enterokinase',
          definition:
            'Brush border enzyme (also called enteropeptidase) that activates trypsinogen to trypsin, initiating the pancreatic protease activation cascade',
          pronunciation: 'EN-ter-oh-KY-nase',
        },
        {
          term: 'colipase',
          definition:
            'Cofactor required by pancreatic lipase to anchor it to bile salt-coated lipid droplets for triglyceride hydrolysis',
        },
        {
          term: 'PepT1',
          definition:
            'H+/peptide cotransporter on enterocyte apical membrane; transports di- and tripeptides and is the major route of protein absorption',
        },
        {
          term: 'mixed micelle',
          definition:
            'Disc-shaped aggregate of bile salts, monoglycerides, fatty acids, cholesterol, and fat-soluble vitamins that delivers lipids to the brush border',
        },
        {
          term: 'intrinsic factor',
          definition:
            'Glycoprotein secreted by gastric parietal cells essential for vitamin B12 absorption in the terminal ileum',
        },
      ],
      clinicalNotes:
        'Celiac disease destroys villi and microvilli, dramatically reducing absorptive surface area and causing malabsorption of virtually all nutrients. Chronic pancreatitis reduces enzyme secretion leading to fat malabsorption (steatorrhea) and protein maldigestion. Orlistat (anti-obesity drug) inhibits pancreatic lipase, reducing fat absorption by ~30%.',
    },
    4: {
      level: 4,
      summary:
        'Digestion and absorption require coordinated luminal enzymology, brush border processing, and transcellular transport involving specific solute carriers, ABC transporters, and intracellular trafficking, with regulatory feedback loops linking nutrient sensing to hormonal and neural control of secretion and motility.',
      explanation: `## Molecular Enzymology of Digestion

**Pancreatic Protease Activation Cascade:**
- Enterokinase (TMPRSS15 gene): Type II transmembrane serine protease on duodenal brush border
- Trypsin activates: Chymotrypsinogen, proelastase, procarboxypeptidases A/B, procolipase, prophospholipase A2
- Trypsin inhibitor (SPINK1/PSTI): Pancreatic secretory trypsin inhibitor prevents premature activation
- Pathologic premature activation leads to acute pancreatitis (trypsin autodigestion)
- PRSS1 mutations (hereditary pancreatitis): Gain-of-function trypsinogen, resistant to SPINK1

**Brush Border Enzyme Organization:**
- Sucrase-isomaltase (SI): Single polypeptide cleaved by pancreatic proteases into two subunits
- Anchored by isomaltase subunit (GPI anchor or transmembrane)
- Congenital sucrase-isomaltase deficiency (CSID): Autosomal recessive, osmotic diarrhea with sucrose/starch

**Lipase-Colipase Interaction:**
- Bile salts displace lipase from oil-water interface
- Colipase anchors lipase back to the interface via lid domain opening
- Colipase binding exposes lipase catalytic triad (Ser-His-Asp)
- sn-1 and sn-3 ester bonds cleaved; sn-2 monoglyceride preserved

## Advanced Transport Mechanisms

**Apical Monosaccharide Transport:**
- SGLT1 (SLC5A1): 2 Na+:1 glucose stoichiometry; electrogenic; driven by Na+/K+-ATPase
- GLUT5 (SLC2A5): Fructose-specific; expression upregulated by dietary fructose
- GLUT2 trafficking hypothesis: At high luminal glucose, GLUT2 inserts into apical membrane (debated)

**Peptide and Amino Acid Systems:**
| Transporter | Gene | Substrate | Mechanism |
|-------------|------|-----------|-----------|
| B0AT1 | SLC6A19 | Neutral AA | Na+-dependent |
| EAAT3 | SLC1A1 | Acidic AA (Glu, Asp) | Na+/K+-dependent |
| rBAT/b0,+AT | SLC3A1/SLC7A9 | Cystine, dibasic AA | Exchanger |
| PepT1 | SLC15A1 | Di/tripeptides | H+-coupled |
| TAT1 | SLC16A10 | Aromatic AA | Facilitated |

**Clinical transport defects:**
- Hartnup disease (SLC6A19): Neutral amino acid malabsorption; pellagra-like symptoms
- Cystinuria (SLC3A1/SLC7A9): Cystine malabsorption; renal stones
- Glucose-galactose malabsorption (SLC5A1): SGLT1 mutations; severe osmotic diarrhea

**Lipid Processing in Enterocytes:**
- Fatty acid binding proteins (I-FABP, L-FABP): Intracellular lipid trafficking
- MGAT (monoacylglycerol acyltransferase): Re-esterification step 1
- DGAT (diacylglycerol acyltransferase): Re-esterification step 2
- MTP (microsomal triglyceride transfer protein): Loads TG onto ApoB-48
- MTP deficiency = abetalipoproteinemia (fat-soluble vitamin deficiency, acanthocytosis)

**Cholesterol Absorption:**
- NPC1L1 (Niemann-Pick C1-Like 1): Apical cholesterol transporter; ezetimibe target
- ABCG5/ABCG8: Apical cholesterol efflux (back to lumen); mutations cause sitosterolemia
- ACAT2: Esterifies cholesterol for chylomicron incorporation

## Iron Absorption Regulation

**Apical:**
- Dcytb (duodenal cytochrome b): Reduces Fe3+ to Fe2+
- DMT1 (SLC11A2): H+-coupled Fe2+ importer
- Heme carrier protein 1 (HCP1/SLC46A1): Heme iron (also folate transporter)

**Basolateral:**
- Ferroportin (SLC40A1): Only known iron exporter
- Hephaestin: Ferroxidase; Fe2+ to Fe3+ for transferrin binding

**Systemic Regulation:**
- Hepcidin (liver peptide hormone): Binds ferroportin causing internalization and degradation
- High hepcidin (inflammation, iron excess) = decreased absorption
- Low hepcidin (iron deficiency, hypoxia, erythropoietic drive) = increased absorption
- Hepcidin regulation via BMP-SMAD, HFE-TfR2, and inflammatory (IL-6-STAT3) pathways

## Nutrient Sensing and Feedback

**Enteroendocrine Cell Sensing:**
- L-cells (ileum/colon): Secrete GLP-1 and PYY in response to luminal nutrients
- I-cells (duodenum/jejunum): Secrete CCK in response to fatty acids and amino acids
- K-cells (duodenum): Secrete GIP in response to glucose and fat
- Taste receptors (T1R2/T1R3) on enteroendocrine cells detect sugars
- FFAR (free fatty acid receptors): GPR40, GPR120 detect dietary lipids

**Incretin Effect:**
- GLP-1 and GIP augment insulin secretion in response to oral glucose
- Accounts for 50-70% of postprandial insulin response
- GLP-1: Also slows gastric emptying, suppresses glucagon, promotes satiety
- Basis for GLP-1 receptor agonists (semaglutide, liraglutide) and DPP-4 inhibitors

**En espanol:** La digestion y absorcion requieren enzimologia luminal coordinada, procesamiento del borde en cepillo y transporte transcelular con transportadores especificos, con retroalimentacion reguladora que conecta la deteccion de nutrientes con el control hormonal y neural.`,
      keyTerms: [
        {
          term: 'SPINK1',
          definition:
            'Serine peptidase inhibitor Kazal type 1; pancreatic secretory trypsin inhibitor that prevents premature trypsin activation within the pancreas',
        },
        {
          term: 'MTP',
          definition:
            'Microsomal triglyceride transfer protein; loads triglycerides onto ApoB-48 during chylomicron assembly; deficiency causes abetalipoproteinemia',
        },
        {
          term: 'NPC1L1',
          definition:
            'Niemann-Pick C1-Like 1; apical cholesterol transporter in enterocytes; pharmacologic target of ezetimibe',
        },
        {
          term: 'hepcidin',
          definition:
            'Liver-derived peptide hormone that degrades ferroportin to regulate systemic iron absorption; master regulator of iron homeostasis',
        },
        {
          term: 'incretin effect',
          definition:
            'Enhanced insulin secretion from oral versus intravenous glucose administration, mediated by GLP-1 and GIP from enteroendocrine cells',
        },
      ],
      clinicalNotes:
        'PRSS1 gain-of-function mutations cause hereditary pancreatitis with markedly elevated lifetime pancreatic cancer risk (~40%). Abetalipoproteinemia (MTP deficiency) presents in infancy with fat malabsorption, acanthocytes, and progressive neurologic deterioration from fat-soluble vitamin deficiency. Hepcidin assays are emerging as tools to distinguish iron deficiency anemia from anemia of chronic disease, guiding iron supplementation decisions.',
    },
    5: {
      level: 5,
      summary:
        'Contemporary understanding of digestion and absorption integrates molecular transporter genetics, enteroendocrine nutrient-sensing pathways, chylomicron biogenesis, and the pharmacologic exploitation of absorptive mechanisms for metabolic disease therapeutics.',
      explanation: `## Molecular Genetics of Absorptive Disorders

**Congenital Diarrheal Disorders:**
| Gene | Protein | Disorder | Mechanism |
|------|---------|----------|-----------|
| SLC5A1 | SGLT1 | Glucose-galactose malabsorption | Loss of Na+/glucose cotransport |
| SI | Sucrase-isomaltase | CSID | Enzyme misfolding/trafficking defect |
| SLC10A2 | ASBT | Primary bile acid malabsorption | Loss of ileal bile acid reuptake |
| DGAT1 | DGAT1 | Congenital diarrhea | Impaired TG re-esterification |
| MTTP | MTP | Abetalipoproteinemia | No chylomicron/VLDL assembly |

**Channelopathies Affecting Absorption:**
- CFTR (cystic fibrosis): Impaired chloride/bicarbonate secretion; thick pancreatic secretions; secondary exocrine insufficiency
- SLC26A3 (congenital chloride diarrhea): Cl-/HCO3- exchanger deficiency; metabolic alkalosis

## Chylomicron Biogenesis and Trafficking

**Assembly Pathway:**
1. ApoB-48 translation on rough ER (intestine-specific RNA editing by APOBEC1: ApoB mRNA C6666U)
2. Co-translational lipidation by MTP in ER lumen
3. Primordial particle formation (ApoB-48 + small lipid core)
4. Fusion with triglyceride-rich lipid droplets in smooth ER
5. Transit through Golgi; glycosylation
6. Pre-chylomicron transport vesicle (PCTV) formation; requires Sar1b GTPase
7. Basolateral secretion into lamina propria
8. Entry into lacteals; transit through mesenteric lymph nodes
9. Thoracic duct delivery to left subclavian vein

**Sar1b Mutations (Chylomicron Retention Disease/Anderson Disease):**
- Autosomal recessive
- PCTV budding failure from ER
- Lipid-laden enterocytes on biopsy
- Fat malabsorption, failure to thrive, low cholesterol

**Post-Absorptive Chylomicron Metabolism:**
- Acquires ApoC-II and ApoE from HDL in circulation
- Lipoprotein lipase (LPL) on endothelium hydrolyzes TG (ApoC-II cofactor)
- Chylomicron remnant: Depleted TG, retains cholesterol esters
- Hepatic uptake via LDL-receptor related protein (LRP) recognizing ApoE

## Pharmacology Targeting Absorption

**Current Therapeutics:**
| Drug | Target | Mechanism | Indication |
|------|--------|-----------|------------|
| Ezetimibe | NPC1L1 | Blocks cholesterol absorption | Hypercholesterolemia |
| Orlistat | Pancreatic lipase | Inhibits TG hydrolysis | Obesity |
| Acarbose | Alpha-glucosidase | Delays carbohydrate digestion | Type 2 diabetes |
| Pancrelipase | Replacement | Exogenous pancreatic enzymes | Exocrine insufficiency |
| Cholestyramine | Bile acids | Sequesters bile acids in lumen | Hypercholesterolemia, bile acid diarrhea |
| Colesevelam | Bile acids | Bile acid sequestrant + glucose lowering | Hypercholesterolemia, T2DM |

**Emerging Targets:**
- DGAT1 inhibitors: Reduce TG absorption and storage
- ASBT (SLC10A2) inhibitors (odevixibat, maralixibat): Block ileal bile acid reabsorption; used in progressive familial intrahepatic cholestasis (PFIC) and Alagille syndrome
- Gut-restricted FXR agonists: Modulate bile acid signaling without systemic effects
- Engineered microbiome: Bacteria expressing lipases or nutrient-degrading enzymes

## Enteroendocrine Signaling Networks

**Nutrient-Sensing Receptors on Enteroendocrine Cells:**
| Receptor | Ligand | Cell Type | Hormone Released |
|----------|--------|-----------|------------------|
| T1R2/T1R3 | Sugars | K-cell, L-cell | GIP, GLP-1 |
| FFAR1 (GPR40) | Medium/long-chain FA | I-cell, L-cell | CCK, GLP-1 |
| FFAR4 (GPR120) | Long-chain FA | L-cell | GLP-1 |
| CaSR | Amino acids, Ca2+ | G-cell, I-cell | Gastrin, CCK |
| GPRC6A | Basic amino acids | Multiple | GLP-1, GIP |
| GPR119 | 2-OG, OEA | L-cell, K-cell | GLP-1, GIP |

**GLP-1 Physiology and Therapeutics:**
- Half-life native GLP-1: 1-2 minutes (DPP-4 cleavage)
- GLP-1 receptor agonists: Semaglutide (t1/2 ~168h), liraglutide (t1/2 ~13h), tirzepatide (dual GIP/GLP-1)
- Central effects: Hypothalamic satiety signaling (NTS, arcuate nucleus)
- Cardiovascular benefit: MACE reduction independent of glucose lowering (SUSTAIN-6, SELECT)
- Emerging indications: MASH/NAFLD, CKD, heart failure, Alzheimer disease

## Micronutrient Absorption: Advanced Concepts

**Vitamin B12 Absorption Cascade:**
1. Dietary B12 bound to food protein
2. Pepsin + HCl release B12 in stomach
3. B12 binds R-protein (haptocorrin) from saliva
4. Pancreatic proteases degrade R-protein in duodenum
5. Free B12 binds intrinsic factor (IF)
6. IF-B12 complex binds cubilin-amnionless receptor (CUBAM) in terminal ileum
7. Receptor-mediated endocytosis
8. Lysosomal release; B12 binds transcobalamin II for plasma transport

**Clinical implications of B12 malabsorption:**
- Pernicious anemia: Anti-IF or anti-parietal cell antibodies
- Post-bariatric surgery: Reduced acid and IF
- Metformin use: Impairs calcium-dependent CUBAM endocytosis
- Proton pump inhibitors: Reduced pepsin activation impairs B12 release from food

**En espanol:** La comprension contemporanea de la digestion y absorcion integra la genetica molecular de transportadores, las vias de deteccion de nutrientes enteroendocrinos, la biogenesis de quilomicrones y la explotacion farmacologica de los mecanismos de absorcion para terapias de enfermedades metabolicas.`,
      keyTerms: [
        {
          term: 'APOBEC1',
          definition:
            'Apolipoprotein B mRNA editing enzyme catalytic subunit 1; performs intestine-specific C-to-U RNA editing of ApoB mRNA to produce ApoB-48 for chylomicron assembly',
        },
        {
          term: 'Sar1b',
          definition:
            'Small GTPase required for pre-chylomicron transport vesicle budding from ER; mutations cause chylomicron retention disease (Anderson disease)',
        },
        {
          term: 'CUBAM',
          definition:
            'Cubilin-amnionless receptor complex in terminal ileum responsible for intrinsic factor-B12 endocytosis; mutations cause hereditary megaloblastic anemia',
        },
        {
          term: 'ASBT',
          definition:
            'Apical sodium-dependent bile acid transporter (SLC10A2) in terminal ileum; pharmacologic target for cholestatic liver diseases',
        },
        {
          term: 'tirzepatide',
          definition:
            'Dual GIP/GLP-1 receptor agonist demonstrating superior glycemic control and weight loss; represents novel dual-incretin pharmacology',
        },
      ],
      clinicalNotes: `**Board-Relevant and Practice Pearls:**
- Chylomicron retention disease (Sar1b mutations) is distinguished from abetalipoproteinemia by normal VLDL production (liver does not require Sar1b)
- ASBT inhibitors represent a paradigm shift in treating pediatric cholestatic liver disease, offering the first targeted medical therapy for pruritus in PFIC
- Metformin-associated B12 deficiency occurs in ~30% of long-term users; screen with methylmalonic acid (more sensitive than serum B12)
- The SELECT trial demonstrated semaglutide reduces MACE by 20% in overweight/obese patients without diabetes, expanding GLP-1 RA indications beyond glycemic control
- Oral semaglutide absorption relies on SNAC (sodium N-[8-(2-hydroxybenzoyl)amino]caprylate) enhancer in the stomach, not intestinal transport`,
    },
  },

  media: [
    {
      id: 'digestion-absorption-overview',
      type: 'diagram',
      filename: 'digestion-absorption-overview.svg',
      title: 'Digestion and Absorption Overview',
      description:
        'Visual summary of mechanical and chemical digestion with absorption sites along the GI tract',
    },
    {
      id: 'enterocyte-transport-diagram',
      type: 'diagram',
      filename: 'enterocyte-transport.svg',
      title: 'Enterocyte Transport Mechanisms',
      description:
        'Apical and basolateral transporters for carbohydrates, amino acids, and lipids in the enterocyte',
    },
    {
      id: 'chylomicron-assembly',
      type: 'diagram',
      filename: 'chylomicron-assembly.svg',
      title: 'Chylomicron Assembly Pathway',
      description:
        'Step-by-step intracellular assembly of chylomicrons from absorbed lipids',
    },
  ],

  citations: [
    {
      id: 'guyton-digestion',
      type: 'textbook',
      title: 'Digestion and Absorption in the Gastrointestinal Tract',
      source: 'Guyton and Hall Textbook of Medical Physiology, 14th Edition',
      chapter: '65-66',
    },
    {
      id: 'boron-gi-transport',
      type: 'textbook',
      title: 'Nutrient Digestion and Absorption',
      source: 'Boron and Boulpaep Medical Physiology, 3rd Edition',
      chapter: '45',
    },
    {
      id: 'openstax-digestive',
      type: 'textbook',
      title: 'The Digestive System',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '23',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-introduction',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    {
      targetId: 'physiology-gi-motility',
      targetType: 'process',
      relationship: 'sibling',
      label: 'GI Motility',
    },
    {
      targetId: 'physiology-gi-secretion',
      targetType: 'process',
      relationship: 'sibling',
      label: 'GI Secretion',
    },
    {
      targetId: 'physiology-gi-liver-function',
      targetType: 'process',
      relationship: 'related',
      label: 'Liver Function',
    },
    {
      targetId: 'physiology-gi-pancreas',
      targetType: 'process',
      relationship: 'related',
      label: 'Pancreatic Function',
    },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: [
      'digestion',
      'absorption',
      'enzymology',
      'nutrient transport',
      'physiology',
    ],
    keywords: [
      'amylase',
      'pepsin',
      'lipase',
      'trypsin',
      'SGLT1',
      'chylomicron',
      'villi',
      'brush border',
      'bile salts',
      'hepcidin',
      'GLP-1',
      'incretin',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default digestionAbsorption;
