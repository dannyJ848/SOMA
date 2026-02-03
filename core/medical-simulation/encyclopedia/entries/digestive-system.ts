/**
 * Digestive System Encyclopedia Entries
 * 
 * Transcribed from OpenStax Anatomy & Physiology (CC BY 4.0)
 */

import type { EncyclopediaEntry } from '../types';

/**
 * Digestive System Entry
 */
export const digestiveSystemEntry: EncyclopediaEntry = {
  entryId: 'digestive-system',
  name: 'Digestive System',
  entryType: 'anatomy',
  category: 'gastrointestinal',
  summary: 'The system responsible for breaking down food, absorbing nutrients, and eliminating waste.',
  overview: {
    patient: 'Your digestive system is a long tube (about 25-30 feet in adults) that breaks down food into nutrients your body can absorb. It starts at your mouth where chewing and saliva begin the process. Food travels down your esophagus to your stomach, where acid and enzymes further break it down. The small intestine (about 20 feet long) is where most nutrient absorption happens with help from the liver, gallbladder, and pancreas. The large intestine (colon) absorbs water and forms waste that exits through the rectum and anus.',
    intermediate: 'The digestive system consists of the gastrointestinal (GI) tract (alimentary canal) plus accessory organs. The GI tract is a continuous muscular tube from mouth to anus (approximately 7.6 meters in vivo): oral cavity, pharynx, esophagus, stomach, small intestine (duodenum, jejunum, ileum), large intestine (cecum, colon, rectum), anus. Accessory organs include teeth, tongue, salivary glands (parotid, submandibular, sublingual), liver, gallbladder, and pancreas. The system performs six essential activities: ingestion (food intake), propulsion (swallowing, peristalsis), mechanical digestion (chewing, churning, segmentation), chemical digestion (enzymatic breakdown), absorption (nutrients into blood/lymph), and defecation (waste elimination). The GI tract wall has four layers: mucosa (epithelium, lamina propria, muscularis mucosae), submucosa (connective tissue, vessels, nerves), muscularis externa (circular and longitudinal smooth muscle), and serosa/adventitia.',
    professional: 'The digestive system comprises the alimentary canal (GI tract) and accessory digestive organs. GI tract: Oral cavity (vestibule, oral cavity proper, palate - hard/soft with uvula), pharynx (oropharynx, laryngopharynx), esophagus (muscular tube, 25 cm, upper esophageal sphincter, lower esophageal sphincter), stomach (J-shaped, fundus, body, antrum, pylorus; four regions with different glands: cardiac, fundic/body, pyloric), small intestine (6-7 m, duodenum-C-shaped with ampulla of Vater, jejunum-plicae circulares/villi, ileum-Peyer\'s patches), large intestine (1.5 m, cecum with appendix, colon-ascending/transverse/descending/sigmoid, rectum, anal canal with internal/external sphincters). Histology: Mucosa (simple columnar epithelium throughout except stratified squamous in mouth/esophagus/anus; lamina propria with MALT; muscularis mucosae thin smooth muscle), submucosa (dense connective tissue, submucosal plexus/Meissner\'s), muscularis externa (inner circular, outer longitudinal; Auerbach\'s/myenteric plexus between), serosa (intraperitoneal) or adventitia (retroperitoneal). Accessory organs: Liver (1.5 kg, right/left/caudate/quadrate lobes, lobules with central vein-sinusoids-bile canaliculi-portal triads), gallbladder (fundus/body/neck, stores/concentrates bile), pancreas (head/uncinate process/neck/body/tail, exocrine acini, endocrine islets of Langerhans), salivary glands (parotid-serous, submandibular-mixed, sublingual-mucous).',
  },
  content: [
    {
      title: 'GI Tract Anatomy and Histology',
      content: {
        patient: `The digestive tract is like a long assembly line. Food enters through the mouth where teeth chew it into smaller pieces. Saliva from three pairs of salivary glands moistens food and starts starch digestion. The esophagus is a muscular tube that pushes food to your stomach using wave-like contractions called peristalsis. The stomach is a J-shaped bag that stores food, mixes it with acid and enzymes, and slowly releases it to the small intestine. The small intestine is where nutrients are absorbed - it has tiny finger-like projections called villi that increase surface area. The large intestine absorbs water and minerals, forming solid waste.`,
        intermediate: `Oral cavity: Lined by stratified squamous epithelium; teeth (32 permanent: incisors, canines, premolars, molars with enamel-dentin-pulp-crown/root) mechanically digest; tongue manipulates food (skeletal muscle with papillae - filiform, fungiform, circumvallate, foliate). Salivary glands: parotid (largest, serous, Stensen\'s duct), submandibular (submaxillary, mixed, Wharton\'s duct), sublingual (mucous, ducts of Rivinus/Bartholin). Saliva (1-1.5 L/day) contains amylase (starch digestion), lysozyme (antimicrobial), mucins (lubrication). Esophagus: 25 cm, muscularis upper 1/3 skeletal, middle 1/3 mixed, lower 1/3 smooth. Stomach: Rugae (longitudinal folds when empty), four regions (cardiac, fundus, body, pyloric). Small intestine: Duodenum (25 cm, receives bile/pancreatic juice), jejunum (2.5 m, circular folds/plicae circulares), ileum (3.5 m, Peyer\'s patches). Large intestine: Taeniae coli (longitudinal muscle bands), haustra (sacculations), epiploic appendages (fat-filled pouches).`,
        professional: `Detailed GI anatomy:

Oral cavity: Vestibule (space between lips/cheeks and teeth/gums), oral cavity proper. Palate: hard palate (palatine process of maxilla, palatine bone), soft palate (muscle, uvula). Tongue: intrinsic muscles (alter shape), extrinsic muscles (genioglossus, hyoglossus, styloglossus, palatoglossus - alter position). Papillae: filiform (keratinized, no taste), fungiform (taste buds on anterior), circumvallate (10-14, taste buds, posterior V), foliate (lateral taste buds). Taste buds: gustatory receptor cells, supporting cells, basal cells. Salivary glands: Parotid (serous acini, Stensen\'s duct opposite maxillary second molar), Submandibular (mixed, mostly serous, Wharton\'s duct at sublingual caruncle), Sublingual (mixed, mostly mucous, multiple ducts). Salivary secretion: parasympathetic (cranial nerves VII/IX via submandibular ganglion) stimulates secretion; sympathetic inhibits.

Esophagus: 25 cm long, 2 cm diameter. Constrictions: at cricoid cartilage (C6), aortic arch/bronchus (T4/T5), diaphragm (T10). Upper esophageal sphincter (cricopharyngeus - skeletal), lower esophageal sphincter (smooth muscle, physiologic not anatomical). Tunica muscularis: upper 1/3 striated, middle 1/3 mixed, lower 1/3 smooth.

Stomach: Capacity 1-1.5 L. Regions: Cardia (surrounds esophageal opening), Fundus (dome above cardia), Body (main central region), Pylorus (antrum + pyloric canal). Curvatures: lesser (right, concave), greater (left, convex). Mesenteries: lesser omentum (hepatogastric and hepatoduodenal ligaments), greater omentum (apron-like from greater curvature). Glands: Cardiac glands (mucous), Fundic/body glands (chief/peptic cells - pepsinogen, parietal cells - HCl and intrinsic factor, mucous neck cells, enteroendocrine cells - G cells/gastrin, D cells/somatostatin), Pyloric glands (mucous, G cells). Gastric pits lead to gastric glands.

Small intestine: Duodenum (superior, descending with ampulla of Vater/major duodenal papilla, horizontal, ascending parts), Jejunum (plicae circulares prominent, tall villi), Ileum (fewer plicae, shorter villi, Peyer\'s patches in lamina propria/submucosa). Brunner\'s glands in duodenal submucosa (alkaline mucus). Layers: mucosa (villi - finger-like projections 0.5-1.6 mm; microvilli - brush border 20-40 per cell, 1000x surface area increase), submucosa, muscularis, serosa.

Large intestine: Cecum (ileocecal valve), Appendix (vermiform, contains lymphoid tissue). Colon: Ascending (right paracolic gutter), Transverse (attached by transverse mesocolon), Descending (left paracolic gutter), Sigmoid (S-shaped, sigmoid mesocolon). Rectum (straight, three transverse folds/valves of Houston), Anal canal (columns of Morgagni, anal valves forming anal sinuses, pectinate/dentate line - endoderm/ectoderm junction, internal sphincter - smooth involuntary, external sphincter - skeletal voluntary).`,
      },
    },
    {
      title: 'Accessory Digestive Organs',
      content: {
        patient: `Your liver, gallbladder, and pancreas are helper organs that produce substances needed for digestion. The liver is your largest internal organ (about 3 pounds) and has hundreds of functions. It produces bile, which helps digest fats. The gallbladder stores and concentrates bile until needed, then releases it into the small intestine. The pancreas makes digestive enzymes that break down carbohydrates, proteins, and fats, plus bicarbonate to neutralize stomach acid. It also produces insulin and glucagon to control blood sugar.`,
        intermediate: `Liver: Largest gland (1.2-1.5 kg), right and left lobes (falciform ligament separates), further divided into quadrate and caudate lobes. Functional units are lobules (hexagonal, central vein at center, radiating hepatocyte plates, portal triads at corners - hepatic artery, portal vein, bile duct). Hepatocytes perform bile production (500-1000 mL/day), nutrient metabolism, detoxification, plasma protein synthesis (albumin, clotting factors), storage (glycogen, vitamins). Bile canaliculi between hepatocytes drain to bile ducts → common hepatic duct → common bile duct → ampulla of Vater → duodenum. Gallbladder (7-10 cm, 30-50 mL capacity) stores and concentrates bile (10-20x concentration via water absorption), releases it when stimulated by CCK. Pancreas: Head (within duodenal C-loop, uncinate process), neck, body, tail (near splenic hilum). Exocrine: acinar cells produce pancreatic juice (amylase, lipase, proteases - trypsinogen, chymotrypsinogen, carboxypeptidase) and bicarbonate. Endocrine: Islets of Langerhans (1-2% pancreatic tissue, 1-2 million) contain alpha cells (glucagon), beta cells (insulin, 65-80%), delta cells (somatostatin), PP cells (pancreatic polypeptide).`,
        professional: `Accessory organ structure and function:

Liver: Gross anatomy: Right lobe (largest, includes caudate superiorly, quadrate inferiorly), left lobe, caudate lobe (posterior, groove for IVC), quadrate lobe (anterior, between gallbladder fossa and ligamentum teres). Falciform ligament (right/left separation), coronary ligaments (bare area), triangular ligaments, ligamentum teres (round ligament - umbilical vein remnant), ligamentum venosum (ductus venosus remnant). Porta hepatis: hepatic artery proper, portal vein, common bile duct, lymphatics, nerves enter/exit. Couinaud segments (8 functional segments based on vascular/biliary distribution). Microscopic: Lobule (central vein, hepatocyte cords/plates radiating, sinusoids lined by fenestrated endothelium and Kupffer cells, bile canaliculi between hepatocytes), Portal triad (interlobular bile duct, hepatic artery branch, portal vein branch). Blood flow: hepatic artery (25% flow, 50-60% oxygen) + portal vein (75% flow, nutrient-rich, 40-50% oxygen) → sinusoids → central vein → hepatic veins → IVC. Bile flow (opposite direction): hepatocytes → bile canaliculi → canals of Hering → interlobular bile ducts → segmental ducts → hepatic ducts → common hepatic duct.

Bile composition: Water (97%), bile salts (conjugated bile acids - cholic, chenodeoxycholic; function: emulsification, micelle formation, lipid absorption), bilirubin (breakdown product, pigment), cholesterol, phospholipids (lecithin), electrolytes. Enterohepatic circulation: 95% bile salts reabsorbed in terminal ileum → portal vein → liver.

Gallbladder: Fundus (projects beyond liver margin), body, neck (Hartmann\'s pouch - stone impaction site). Cystic duct joins common hepatic duct → common bile duct. Spiral valves of Heister in cystic duct. Mucosa with rugae (not villi), muscularis with oblique fibers, adventitia/serosa. Storage: concentrates bile via active Na+ absorption followed by water. Release: CCK (cholecystokinin) from duodenal I cells causes gallbladder contraction and sphincter of Oddi relaxation.

Pancreas: Exocrine: 99% acinar cells in lobules (serous, zymogen granules). Duct system: intercalated ducts → intralobular ducts → interlobular ducts → main pancreatic duct (Wirsung) → ampulla of Vater (with common bile duct) → major duodenal papilla; accessory pancreatic duct (Santorini) → minor duodenal papilla. Secretion: aqueous component (bicarbonate from centroacinar/duct cells, neutralizes acid) and enzymatic component (amylase, lipase/colipase, proenzymes - trypsinogen, etc.). Trypsin inhibitor prevents premature activation. Endocrine islets: 1-2% volume, 1-2 million islets; alpha cells (peripheral, glucagon), beta cells (central, insulin, amylin), delta cells (somatostatin), PP cells (pancreatic polypeptide - head), epsilon cells (ghrelin).`,
      },
    },
    {
      title: 'Digestive Processes and Motility',
      content: {
        patient: `Digestion happens through both mechanical and chemical processes. Mechanical digestion includes chewing in your mouth, churning in your stomach, and segmentation in your intestines - these physically break food into smaller pieces. Chemical digestion uses enzymes to break down food molecules. Carbohydrates start breaking down in your mouth with saliva. Proteins are digested in your stomach by acid and pepsin. Fats are emulsified by bile and digested by lipase in your small intestine. Peristalsis is the wave-like muscle contraction that moves food through your digestive tract.`,
        intermediate: `Digestive processes: Ingestion (food intake), propulsion (swallowing/deglutition - voluntary, pharyngeal, esophageal phases; peristalsis - wave of contraction ahead of bolus, relaxation behind), mechanical digestion (mastication, gastric churning, segmentation - mixing contractions in small intestine), chemical digestion (enzymatic hydrolysis), absorption (nutrients into blood/lymph), defecation. Carbohydrate digestion: Salivary amylase (mouth, pH 6.7-7.0, active briefly in stomach), pancreatic amylase (small intestine), brush border enzymes (maltase, sucrase, lactase, α-dextrinase). Protein digestion: Pepsin (stomach, pH 1.5-2.5, from pepsinogen), pancreatic proteases (trypsin, chymotrypsin, carboxypeptidase - activated in duodenum), brush border peptidases. Fat digestion: Lingual/gastric lipase (minor), bile emulsification, pancreatic lipase (with colipase), forms micelles for absorption. Regulation: Nervous (intrinsic enteric nervous system - myenteric/Auerbach\'s for motility, submucosal/Meissner\'s for secretion; extrinsic - parasympathetic stimulation, sympathetic inhibition), hormonal (gastrin, CCK, secretin, GIP, motilin).`,
        professional: `Digestive physiology:

Motility patterns: Peristalsis (caudad propagation via excitatory reflex - ACh/substance P; inhibition via VIP/nitric oxide). Migrating motor complex (MMC) - interdigestive housekeeping contractions every 90 minutes. Segmentation (mixing contractions, stationary rings, frequency decreases aborally: duodenum 12/min, ileum 9/min). Haustral churning (large intestine). Defecation reflex (rectal distention → intrinsic reflex → parasympathetic pelvic nerves → rectal contraction, internal sphincter relaxation; voluntary control of external sphincter).

Secretion regulation: Cephalic phase (vagal stimulation from sight/smell/thought), Gastric phase (distention, peptides, caffeine, alcohol stimulate; fat, acid, hypertonicity inhibit), Intestinal phase (short reflexes and hormones). Major hormones: Gastrin (G cells, antrum/duodenum; protein, distention, vagal stimulation; stimulates gastric acid and motility; inhibited by acid), CCK (I cells, duodenum/jejunum; fat and protein; stimulates gallbladder contraction, pancreatic enzyme secretion, sphincter of Oddi relaxation, inhibits gastric emptying), Secretin (S cells, duodenum; acid load; stimulates pancreatic bicarbonate, inhibits gastric secretion), GIP (K cells, duodenum/jejunum; glucose, fat; stimulates insulin release - incretin effect, inhibits gastric acid), Motilin (M cells; cyclic release stimulates MMC). Others: Ghrelin (appetite stimulation), GLP-1 (satiety, insulin stimulation), Somatostatin (inhibits most GI functions), VIP (inhibits gastric acid, stimulates secretion).

Carbohydrate digestion: α-amylase (ptyalin) cleaves α-1,4 glycosidic bonds (interior - endo) producing maltose, maltotriose, α-limit dextrins. Pancreatic amylase continues in small intestine. Brush border: maltase, sucrase-isomaltase (sucrase and isomaltase activities), lactase, trehalase. Products: glucose, fructose, galactose.

Protein digestion: Pepsin (pepsinogen activated by HCl, cleaves aromatic amino acids, pH optimum 1.5-2.5), Pancreatic: trypsinogen → trypsin (enteropeptidase/trypsin activation), chymotrypsinogen → chymotrypsin, procarboxypeptidase → carboxypeptidase, elastase, collagenase. Brush border: aminopeptidases, dipeptidases. Products: amino acids, dipeptides, tripeptides.

Lipid digestion: Emulsification (bile salts lecithin break large fat globules into 1 mm droplets increasing surface area). Lipase (colipase anchors lipase to droplet) hydrolyzes triglycerides → 2 monoglycerides + 2 fatty acids. Micelle formation: bile salts arrange with hydrophilic groups outward, solubilizing lipid digestion products. Products diffuse across unstirred water layer to enterocyte membrane.`,
      },
    },
    {
      title: 'Absorption and Defecation',
      content: {
        patient: `Most absorption happens in your small intestine. Villi are finger-like projections covered with even tinier microvilli that create a huge surface area (about the size of a tennis court!) for absorbing nutrients. Simple sugars and amino acids go directly into your bloodstream through capillaries. Fatty acids and fat-soluble vitamins enter lymph vessels first, then blood. Your large intestine absorbs water, electrolytes, and some vitamins produced by gut bacteria. What remains becomes feces - about 75% water and 25% solid waste (bacteria, fiber, dead cells, bile pigments). The urge to defecate happens when stool stretches the rectum.`,
        intermediate: `Absorption: Small intestine primary site (90% nutrient absorption). Carbohydrates: glucose/galactose via SGLT1 (Na+-coupled, secondary active transport), fructose via GLUT5 (facilitated diffusion); all exit via GLUT2. Amino acids: various Na+-coupled transporters (B⁰, L, y⁺ systems), di/tripeptides via PEPT1 (H+-coupled). Lipids: fatty acids/monoglycerides enter enterocytes, re-esterified to triglycerides in ER, packaged with cholesterol/phospholipids/apolipoproteins into chylomicrons, exocytosed into lacteals (lymph). Bile salts absorbed in terminal ileum via apical sodium-dependent bile acid transporter (ASBT). Water absorption (8-9 L/day): osmotic gradient created by solute absorption. Large intestine absorbs remaining water (1-1.5 L → 150 mL feces), Na+, Cl-, short-chain fatty acids from bacterial fermentation, vitamin K, biotin, B12 (intrinsic factor complex absorbed in ileum). Defecation: Mass movements (3-4x daily) propel contents to rectum. Rectal distention triggers reflex relaxation of internal anal sphincter (smooth muscle) and contraction of rectum/sigmoid; external sphincter (skeletal, voluntarily controlled) must relax for defecation.`,
        professional: `Absorption mechanisms:

Carbohydrate absorption: SGLT1 (apical, Na+/glucose cotransport 2:1, secondary active via basolateral Na+/K+-ATPase), GLUT5 (fructose, facilitative), GLUT2 (basolateral, all monosaccharides). Maximum absorption rate ~120 g/hour glucose. Water follows osmotically.

Protein absorption: Multiple transporters (B⁰ for neutral, b⁰,+ for cationic, X⁻ for anionic, y⁺ for cationic amino acids, β for β-amino acids, IMINO for proline/hydroxyproline). PEPT1 (H+/peptide cotransporter, up to tripeptides, 8000 dipeptide capacity vs 20 amino acid transporters). Intracellular peptidases complete digestion. Basolateral export: facilitated diffusion or Na+-independent transporters.

Lipid absorption: Enterocyte uptake: fatty acids (FABP, FATP transporters), monoglycerides (diffusion), cholesterol (NPC1L1 transporter, inhibited by ezetimibe). Re-esterification in smooth ER: triglycerides, phospholipids, cholesteryl esters. Chylomicron assembly in ER/Golgi: core (triglycerides, cholesteryl esters), surface (phospholipids, cholesterol, apoB-48). Exocytosis at basolateral membrane into lacteals. Short-chain fatty acids (<12 carbons) directly enter portal blood.

Electrolyte absorption: Na+ (major driving force): multiple mechanisms - cotransport with nutrients, Cl- (exchange with HCO₃⁻), electrogenic (absorption creates lumen-negative potential driving Cl- diffusion and K+ secretion). Water follows osmotic gradients ~1:1 with Na+.

Calcium absorption: Duodenum (active, regulated): TRPV6 channel, calbindin-D9k, basolateral PMCA and NCX. Stimulated by 1,25-dihydroxyvitamin D. Jejunum/ileum (passive, paracellular).

Iron absorption: Duodenum: reduced Fe²⁺ (by duodenal cytochrome b) transported by DMT1 (divalent metal transporter 1, proton-coupled). Enterocyte stores as ferritin or exports via ferroportin (regulated by hepcidin). Oxidized to Fe³⁺ by hephaestin, binds transferrin in blood.

Vitamin B12 absorption: R-protein (salivary) binds B12 in stomach (protects from acid). Pancreatic proteases release B12 in duodenum. Intrinsic factor (parietal cells) binds B12. IF-B12 complex binds cubilin receptor on ileal enterocytes. Absorbed via endocytosis, B12 released, binds transcobalamin II in blood.

Bile acid absorption: Terminal ileum: ASBT (apical), cytosolic ileal bile acid binding protein (IBABP), OSTα/β heterodimer (basolateral export to portal blood). 95% enterohepatic circulation efficiency.

Colonic absorption: Na+ absorption (aldosterone-stimulated), Cl- following electrochemical gradient, water osmosis (1-1.5 L → 150 mL), short-chain fatty acids (butyrate preferred colonocyte fuel), bacterial vitamin synthesis (K, B12, biotin, folate).`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'liver', structureName: 'Liver', linkText: 'Liver', relevance: 'Bile production and metabolism' },
    { structureId: 'stomach', structureName: 'Stomach', linkText: 'Stomach', relevance: 'Food storage and protein digestion' },
    { structureId: 'small-intestine', structureName: 'Small Intestine', linkText: 'Small Intestine', relevance: 'Nutrient absorption' },
    { structureId: 'pancreas', structureName: 'Pancreas', linkText: 'Pancreas', relevance: 'Digestive enzymes and hormones' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-23',
      type: 'textbook',
      title: 'Anatomy and Physiology - Chapter 23: The Digestive System',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/23-introduction',
      citation: 'Betts JG, et al. Anatomy and Physiology. Chapter 23: The Digestive System. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'liver', entryType: 'anatomy', name: 'Liver', relationship: 'see-also' },
    { entryId: 'pancreas', entryType: 'anatomy', name: 'Pancreas', relationship: 'see-also' },
    { entryId: 'metabolism', entryType: 'physiology', name: 'Metabolism', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['digestive system', 'gastrointestinal', 'stomach', 'intestines', 'liver', 'pancreas', 'digestion', 'absorption'],
    tags: ['gastroenterology', 'anatomy', 'physiology'],
    synonyms: ['GI system', 'gastrointestinal tract', 'digestive tract', 'alimentary canal'],
  },
};

// Export all entries
export const digestiveSystemEntries: EncyclopediaEntry[] = [
  digestiveSystemEntry,
];
