/**
 * Digestive System Data Store
 *
 * Complete GI tract from oral cavity to anus,
 * accessory organs, enzymes, and absorption sites.
 */

import type {
  DigestiveStructure,
  AccessoryOrgan,
  DigestiveEnzyme,
  AbsorptionSite,
  DigestiveStatistics,
  GITractRegion,
} from './types';

// ============================================================================
// GI TRACT STRUCTURES
// ============================================================================

const digestiveStructures: Map<string, DigestiveStructure> = new Map();

// --- Oral Cavity ---
digestiveStructures.set('oral-cavity', {
  id: 'oral-cavity',
  name: 'Oral Cavity',
  latinName: 'Cavitas oris',
  fmaId: 'FMA:49184',
  region: 'oral-cavity',
  location: 'Head, bounded by lips anteriorly, oropharynx posteriorly, palate superiorly, floor of mouth inferiorly',
  function: 'Mechanical digestion (mastication), chemical digestion initiation (salivary amylase), bolus formation, taste sensation',
  epitheliumType: 'Stratified squamous (keratinized on hard palate, non-keratinized elsewhere)',
  secretions: [
    {
      name: 'Saliva',
      source: 'Salivary glands (parotid, submandibular, sublingual)',
      function: 'Lubrication, enzymatic digestion of starch, antimicrobial defense',
      composition: ['Water (99.5%)', 'Salivary amylase', 'Mucin', 'Lysozyme', 'IgA', 'Electrolytes'],
      regulation: 'Parasympathetic (CN VII, IX) stimulation increases watery secretion; sympathetic increases mucous secretion',
    },
  ],
  explanations: {
    level1: 'Your mouth is where food goes in and chewing breaks it down into smaller pieces.',
    level2: 'The oral cavity contains teeth for chewing, the tongue for moving food, and saliva that starts breaking down starches.',
    level3: 'The mouth initiates digestion through mechanical breakdown (mastication) and chemical digestion via salivary amylase, which begins starch hydrolysis. The tongue forms food into a bolus for swallowing.',
    level4: 'The oral cavity performs trituration through coordinated jaw and tongue movements. Salivary secretion (1-1.5 L/day) provides α-amylase for starch digestion, mucins for lubrication, and IgA/lysozyme for immune defense. The stratified squamous epithelium resists mechanical abrasion.',
    level5: 'The oral cavity coordinates mastication via trigeminal motor neurons controlling masseter, temporalis, and pterygoid muscles. Salivary secretion involves acinar cells producing the primary secretion (isotonic) followed by ductal modification (hypotonic, HCO3⁻-rich). Amylase cleaves α-1,4 glycosidic bonds in starch, producing maltose and maltotriose. Taste transduction involves Type II cells (sweet/bitter/umami via GPCR) and Type III cells (sour via PKD2L1, salt via ENaC).',
  },
  keyFacts: [
    'Daily saliva production: 1-1.5 liters',
    'Salivary amylase optimal pH: 6.7-7.0',
    '32 permanent teeth (20 deciduous)',
    'Tongue has ~10,000 taste buds',
    'Mastication reduces particle size to <2mm for swallowing',
  ],
  bloodSupply: ['Facial artery', 'Lingual artery', 'Maxillary artery'],
  venousDrainage: ['Facial vein', 'Lingual vein', 'Retromandibular vein'],
  innervation: {
    parasympathetic: 'CN VII (submandibular, sublingual), CN IX (parotid)',
    sympathetic: 'Superior cervical ganglion',
  },
  pathologies: [
    {
      name: 'Dental caries',
      description: 'Tooth decay from bacterial acid production',
      symptoms: ['Tooth pain', 'Sensitivity to hot/cold/sweet', 'Visible cavities'],
      causes: ['Streptococcus mutans', 'Poor oral hygiene', 'High sugar diet'],
    },
    {
      name: 'Xerostomia',
      description: 'Dry mouth from reduced saliva production',
      symptoms: ['Dry mouth', 'Difficulty swallowing', 'Increased caries risk'],
      causes: ['Medications', 'Sjögren syndrome', 'Radiation therapy', 'Dehydration'],
    },
  ],
  relatedStructures: ['teeth', 'tongue', 'hard-palate', 'soft-palate', 'salivary-glands'],
});

// --- Pharynx ---
digestiveStructures.set('pharynx', {
  id: 'pharynx',
  name: 'Pharynx',
  latinName: 'Pharynx',
  fmaId: 'FMA:46688',
  region: 'pharynx',
  location: 'Posterior to nasal and oral cavities, extends from skull base to C6 vertebra',
  function: 'Common pathway for air and food, coordinates swallowing reflex',
  length: '12-14 cm',
  epitheliumType: 'Stratified squamous in oropharynx/laryngopharynx, pseudostratified ciliated in nasopharynx',
  wallLayers: ['mucosa', 'submucosa', 'muscularis'],
  sphincters: ['Upper esophageal sphincter (cricopharyngeus)'],
  explanations: {
    level1: 'The pharynx is the back of your throat where food and air both pass through.',
    level2: 'The pharynx connects your mouth to your esophagus. When you swallow, special muscles push food down while keeping it out of your airway.',
    level3: 'The pharynx has three parts: nasopharynx (behind nose), oropharynx (behind mouth), and laryngopharynx (above larynx). The swallowing reflex coordinates closure of the nasopharynx and larynx while propelling the bolus into the esophagus.',
    level4: 'Deglutition involves voluntary (oral) and involuntary (pharyngeal, esophageal) phases. The pharyngeal phase is triggered by mechanoreceptors in the oropharynx, activating the swallowing center in the medulla. Sequential contraction of pharyngeal constrictors creates a peristaltic wave while the soft palate, epiglottis, and vocal cords protect the airway.',
    level5: 'The swallowing center (nucleus tractus solitarius and nucleus ambiguus) coordinates a complex motor sequence lasting ~1 second. Afferent input via CN IX triggers: 1) soft palate elevation (levator veli palatini via CN X), 2) hyolaryngeal elevation (suprahyoid muscles), 3) epiglottic retroversion, 4) true vocal cord adduction, 5) sequential pharyngeal constrictor contraction, 6) UES relaxation via inhibition of cricopharyngeus tonic activity. Belching involves transient LES relaxation with simultaneous UES relaxation.',
  },
  keyFacts: [
    'Pharyngeal phase of swallowing lasts ~1 second',
    'Three pharyngeal constrictors (superior, middle, inferior)',
    'Killian dehiscence: weak point for Zenker diverticulum',
    'Waldeyer ring: lymphoid tissue protecting pharyngeal entrance',
    'Gag reflex: CN IX afferent, CN X efferent',
  ],
  bloodSupply: ['Ascending pharyngeal artery', 'Branches of facial and maxillary arteries'],
  venousDrainage: ['Pharyngeal venous plexus → Internal jugular vein'],
  innervation: {
    parasympathetic: 'CN X (vagus)',
    sympathetic: 'Superior cervical ganglion',
  },
  pathologies: [
    {
      name: 'Zenker diverticulum',
      description: 'Posterior pharyngeal outpouching through Killian dehiscence',
      symptoms: ['Dysphagia', 'Regurgitation of undigested food', 'Halitosis', 'Aspiration'],
      causes: ['Increased pharyngeal pressure', 'UES dysfunction', 'Age-related muscle weakness'],
    },
    {
      name: 'Dysphagia',
      description: 'Difficulty swallowing',
      symptoms: ['Choking', 'Coughing during meals', 'Weight loss', 'Aspiration pneumonia'],
      causes: ['Stroke', 'Parkinson disease', 'Myasthenia gravis', 'Esophageal stricture'],
    },
  ],
  relatedStructures: ['nasopharynx', 'oropharynx', 'laryngopharynx', 'esophagus'],
});

// --- Esophagus ---
digestiveStructures.set('esophagus', {
  id: 'esophagus',
  name: 'Esophagus',
  latinName: 'Oesophagus',
  fmaId: 'FMA:7131',
  region: 'esophagus',
  location: 'Posterior mediastinum, from pharynx (C6) to stomach (T11), passes through esophageal hiatus of diaphragm',
  function: 'Transport of food bolus to stomach via peristalsis',
  length: '25 cm (10 inches)',
  epitheliumType: 'Stratified squamous non-keratinized',
  wallLayers: ['mucosa', 'submucosa', 'muscularis', 'adventitia'],
  sphincters: ['Upper esophageal sphincter (UES)', 'Lower esophageal sphincter (LES)'],
  secretions: [
    {
      name: 'Mucus',
      source: 'Esophageal glands proper (submucosa)',
      function: 'Lubrication and protection',
      regulation: 'Local mechanical stimulation',
    },
  ],
  explanations: {
    level1: 'The esophagus is the food tube that connects your throat to your stomach.',
    level2: 'The esophagus uses wave-like muscle contractions called peristalsis to push food down to your stomach, even if you\'re upside down!',
    level3: 'The esophagus has three anatomic narrowings: cricopharyngeal, aortic arch/left main bronchus level, and diaphragmatic hiatus. The muscularis transitions from skeletal (upper third) to smooth muscle (lower two-thirds). The LES prevents gastric reflux.',
    level4: 'Primary peristalsis is initiated by swallowing; secondary peristalsis clears residual material. The LES maintains tonic contraction (15-30 mmHg) via intrinsic myogenic mechanisms and is relaxed by VIP and NO from inhibitory motor neurons. The transition zone contains both ICC (interstitial cells of Cajal) and skeletal muscle motor end plates.',
    level5: 'Esophageal peristalsis involves sequential activation of circular muscle (contraction) preceded by longitudinal muscle shortening. The LES receives dual vagal innervation: excitatory cholinergic fibers and inhibitory non-adrenergic non-cholinergic (NANC) fibers releasing VIP/NO. Transient LES relaxations (TLESRs) are the primary mechanism of physiologic reflux and are triggered by gastric distension via vagal mechanoreceptors. Barrett metaplasia represents intestinal metaplasia of squamous epithelium in response to chronic acid exposure.',
  },
  keyFacts: [
    'Length: 25 cm, diameter: 2 cm',
    'Three anatomic narrowings (sites of foreign body impaction)',
    'No serosa - adventitia instead (contributes to early mediastinal spread of cancer)',
    'LES pressure: 15-30 mmHg at rest',
    'Peristaltic wave velocity: 2-4 cm/sec',
  ],
  bloodSupply: ['Inferior thyroid artery (cervical)', 'Bronchial arteries (thoracic)', 'Left gastric artery (abdominal)'],
  venousDrainage: ['Inferior thyroid vein', 'Azygos vein', 'Left gastric vein (portal system)'],
  innervation: {
    parasympathetic: 'CN X (vagus) - recurrent laryngeal and esophageal plexus',
    sympathetic: 'Sympathetic trunk and greater splanchnic nerves',
    enteric: 'Auerbach (myenteric) plexus throughout',
  },
  pathologies: [
    {
      name: 'GERD (Gastroesophageal reflux disease)',
      description: 'Chronic acid reflux causing esophageal symptoms',
      symptoms: ['Heartburn', 'Regurgitation', 'Dysphagia', 'Chronic cough'],
      causes: ['LES dysfunction', 'Hiatal hernia', 'Obesity', 'Delayed gastric emptying'],
      relevantImaging: ['Upper endoscopy', 'Barium swallow', 'pH monitoring'],
    },
    {
      name: 'Barrett esophagus',
      description: 'Intestinal metaplasia of esophageal epithelium (premalignant)',
      symptoms: ['Often asymptomatic', 'GERD symptoms'],
      causes: ['Chronic GERD', 'Bile reflux'],
      relevantImaging: ['Upper endoscopy with biopsy'],
    },
    {
      name: 'Achalasia',
      description: 'Loss of esophageal peristalsis and failure of LES relaxation',
      symptoms: ['Dysphagia to solids and liquids', 'Regurgitation', 'Weight loss', 'Chest pain'],
      causes: ['Loss of inhibitory neurons in myenteric plexus', 'Chagas disease (secondary)'],
      relevantImaging: ['Barium swallow (bird\'s beak)', 'Esophageal manometry', 'Upper endoscopy'],
    },
  ],
  relatedStructures: ['pharynx', 'stomach', 'diaphragm', 'thoracic-aorta'],
});

// --- Stomach ---
digestiveStructures.set('stomach', {
  id: 'stomach',
  name: 'Stomach',
  latinName: 'Gaster/Ventriculus',
  fmaId: 'FMA:7148',
  region: 'stomach',
  location: 'Left upper quadrant, between esophagus and duodenum, beneath left hemidiaphragm',
  function: 'Storage reservoir, mechanical churning, chemical digestion (protein), controlled release to duodenum',
  length: 'Variable, capacity 1-1.5 L',
  epitheliumType: 'Simple columnar with mucus-secreting cells',
  wallLayers: ['mucosa', 'submucosa', 'muscularis', 'serosa'],
  sphincters: ['Lower esophageal sphincter (functional)', 'Pyloric sphincter'],
  secretions: [
    {
      name: 'Gastric acid (HCl)',
      source: 'Parietal cells (body/fundus)',
      function: 'Protein denaturation, pepsinogen activation, bactericidal',
      composition: ['HCl (pH 1-2)', 'Intrinsic factor'],
      regulation: 'Stimulated by gastrin, histamine, ACh; inhibited by somatostatin, secretin, GIP',
    },
    {
      name: 'Pepsinogen',
      source: 'Chief cells (body/fundus)',
      function: 'Protein digestion (activated to pepsin by HCl)',
      regulation: 'Stimulated by ACh, gastrin, secretin',
    },
    {
      name: 'Mucus and bicarbonate',
      source: 'Surface mucous cells, neck mucous cells',
      function: 'Gastric mucosal barrier - protection from acid',
      regulation: 'Stimulated by prostaglandins, inhibited by NSAIDs',
    },
    {
      name: 'Gastrin',
      source: 'G cells (antrum)',
      function: 'Stimulates acid secretion, promotes gastric motility',
      regulation: 'Stimulated by protein, vagal input; inhibited by low pH, somatostatin',
    },
  ],
  explanations: {
    level1: 'Your stomach is like a mixing bowl that churns food and adds special juices to break it down.',
    level2: 'The stomach stores food, mixes it with acid and enzymes to make a soupy mixture called chyme, then slowly releases it into the small intestine.',
    level3: 'The stomach has four regions (cardia, fundus, body, pylorus) with specialized cells: parietal cells secrete HCl and intrinsic factor, chief cells secrete pepsinogen, and G cells secrete gastrin. The three-layered muscularis enables powerful churning.',
    level4: 'Gastric acid secretion occurs in three phases: cephalic (vagal), gastric (distension, protein), and intestinal (amino acids). The proton pump (H⁺/K⁺-ATPase) is the final common pathway for acid secretion. The mucosal barrier depends on mucus-bicarbonate layer, tight junctions, and prostaglandin-mediated blood flow.',
    level5: 'Parietal cell activation involves convergent signaling: histamine (H2R→cAMP), ACh (M3R→Ca²⁺), and gastrin (CCKB-R→Ca²⁺) all stimulate H⁺/K⁺-ATPase trafficking to the apical canaliculus. Somatostatin from D cells provides paracrine inhibition. Pepsinogen undergoes autocatalytic cleavage at pH <5 to form pepsin, an aspartic protease with optimal activity at pH 1.5-2. Gastric emptying is regulated by duodenal feedback (CCK, secretin, GIP) and the migrating motor complex during fasting.',
  },
  keyFacts: [
    'pH of gastric juice: 1-2',
    'Gastric emptying time: 2-6 hours (liquids faster than solids)',
    'Parietal cells also produce intrinsic factor (B12 absorption)',
    'Three muscle layers: inner oblique, middle circular, outer longitudinal',
    'Daily gastric secretion: 2-3 liters',
  ],
  bloodSupply: ['Left gastric artery', 'Right gastric artery', 'Short gastric arteries', 'Left/right gastroepiploic arteries'],
  venousDrainage: ['Portal vein via gastric and gastroepiploic veins'],
  innervation: {
    parasympathetic: 'Vagus nerve (CN X) - anterior and posterior gastric branches',
    sympathetic: 'Greater splanchnic nerve → celiac ganglion',
    enteric: 'Auerbach and Meissner plexuses',
  },
  pathologies: [
    {
      name: 'Peptic ulcer disease',
      description: 'Mucosal defect extending through muscularis mucosae',
      symptoms: ['Epigastric pain', 'Nausea', 'Bloating', 'GI bleeding'],
      causes: ['H. pylori infection', 'NSAID use', 'Zollinger-Ellison syndrome'],
      relevantImaging: ['Upper endoscopy', 'H. pylori testing'],
      relevantLabs: ['CBC', 'H. pylori serology/breath test/stool antigen'],
    },
    {
      name: 'Gastritis',
      description: 'Inflammation of gastric mucosa',
      symptoms: ['Epigastric pain', 'Nausea', 'Vomiting', 'Early satiety'],
      causes: ['H. pylori', 'NSAIDs', 'Alcohol', 'Autoimmune (pernicious anemia)'],
    },
    {
      name: 'Gastric cancer',
      description: 'Malignancy of stomach, usually adenocarcinoma',
      symptoms: ['Weight loss', 'Early satiety', 'Dysphagia', 'GI bleeding'],
      causes: ['H. pylori', 'Dietary factors (smoked/salted foods)', 'Genetic predisposition'],
      relevantImaging: ['Upper endoscopy with biopsy', 'CT abdomen', 'PET-CT'],
    },
  ],
  relevantLabs: ['H. pylori testing', 'Gastrin level', 'Vitamin B12', 'CBC'],
  relatedStructures: ['esophagus', 'duodenum', 'spleen', 'pancreas', 'liver'],
});

// --- Small Intestine: Duodenum ---
digestiveStructures.set('duodenum', {
  id: 'duodenum',
  name: 'Duodenum',
  latinName: 'Duodenum',
  fmaId: 'FMA:7206',
  region: 'small-intestine',
  location: 'C-shaped loop around head of pancreas, from pylorus to duodenojejunal junction (ligament of Treitz)',
  function: 'Receives chyme, bile, and pancreatic secretions; neutralizes acid; continues digestion',
  length: '25-30 cm (12 finger-widths)',
  epitheliumType: 'Simple columnar with microvilli (brush border)',
  wallLayers: ['mucosa', 'submucosa', 'muscularis', 'serosa'],
  secretions: [
    {
      name: 'Brunner gland secretion',
      source: 'Brunner glands (duodenal submucosa)',
      function: 'Alkaline mucus to neutralize gastric acid',
      regulation: 'Stimulated by vagus, secretin; inhibited by sympathetic activity',
    },
    {
      name: 'Secretin',
      source: 'S cells',
      function: 'Stimulates pancreatic bicarbonate secretion',
      regulation: 'Released in response to duodenal acidification',
    },
    {
      name: 'CCK (Cholecystokinin)',
      source: 'I cells',
      function: 'Stimulates gallbladder contraction, pancreatic enzyme secretion',
      regulation: 'Released in response to fats and amino acids',
    },
  ],
  explanations: {
    level1: 'The duodenum is the first part of your small intestine, right after the stomach.',
    level2: 'The duodenum mixes food with digestive juices from the liver (bile) and pancreas (enzymes) to continue breaking down fats, proteins, and carbohydrates.',
    level3: 'The duodenum has four parts and receives the common bile duct and main pancreatic duct at the major duodenal papilla (ampulla of Vater). Brunner glands in the submucosa secrete alkaline mucus to neutralize gastric acid.',
    level4: 'The duodenum is the site of iron and folate absorption. Enteroendocrine cells release secretin (S cells) in response to acid and CCK (I cells) in response to fats/proteins. These hormones coordinate biliary and pancreatic secretion while inhibiting gastric emptying.',
    level5: 'The duodenum integrates multiple regulatory signals: secretin acts via cAMP to stimulate ductal HCO3⁻ secretion, while CCK acts via Ca²⁺ to stimulate acinar enzyme secretion and gallbladder contraction. Motilin from M cells initiates phase III of the migrating motor complex. Iron absorption requires reduction by duodenal cytochrome b (Dcytb) and transport via DMT1, with hepcidin regulating ferroportin on the basolateral membrane.',
  },
  keyFacts: [
    'Only part of small intestine with Brunner glands',
    'Major papilla: entry point for bile and pancreatic juice',
    'Primary site of iron absorption',
    'Folate absorbed primarily here',
    'Four parts: superior, descending, horizontal, ascending',
  ],
  bloodSupply: ['Superior pancreaticoduodenal artery (celiac trunk)', 'Inferior pancreaticoduodenal artery (SMA)'],
  venousDrainage: ['Portal vein via pancreaticoduodenal veins'],
  innervation: {
    parasympathetic: 'Vagus nerve',
    sympathetic: 'Greater splanchnic nerve → celiac ganglion',
    enteric: 'Meissner and Auerbach plexuses',
  },
  pathologies: [
    {
      name: 'Duodenal ulcer',
      description: 'Peptic ulcer in duodenal mucosa, usually anterior wall of bulb',
      symptoms: ['Epigastric pain relieved by food', 'Night pain', 'Periodicity'],
      causes: ['H. pylori (>90%)', 'NSAID use', 'Zollinger-Ellison syndrome'],
      relevantImaging: ['Upper endoscopy'],
    },
    {
      name: 'Duodenal atresia',
      description: 'Congenital obstruction of duodenum',
      symptoms: ['Bilious vomiting in neonate', 'Polyhydramnios prenatally'],
      causes: ['Failure of recanalization', 'Associated with Down syndrome'],
      relevantImaging: ['Abdominal X-ray (double bubble sign)'],
    },
  ],
  relatedStructures: ['stomach', 'jejunum', 'pancreas', 'common-bile-duct', 'ampulla-of-vater'],
});

// --- Small Intestine: Jejunum ---
digestiveStructures.set('jejunum', {
  id: 'jejunum',
  name: 'Jejunum',
  latinName: 'Jejunum',
  fmaId: 'FMA:7207',
  region: 'small-intestine',
  location: 'Upper left abdomen, from ligament of Treitz to ileum (no sharp demarcation)',
  function: 'Primary site of nutrient absorption',
  length: '~2.5 meters (proximal 2/5 of jejunoileum)',
  epitheliumType: 'Simple columnar with prominent microvilli',
  wallLayers: ['mucosa', 'submucosa', 'muscularis', 'serosa'],
  explanations: {
    level1: 'The jejunum is the middle part of your small intestine where most food nutrients are absorbed.',
    level2: 'The jejunum has a very folded inner surface with tiny finger-like projections called villi that absorb nutrients from digested food into your blood.',
    level3: 'The jejunum has the most prominent plicae circulares (circular folds) and villi, maximizing surface area for absorption. It\'s the primary site for absorbing sugars, amino acids, and water-soluble vitamins.',
    level4: 'The jejunum absorbs most monosaccharides (SGLT1 for glucose/galactose, GLUT5 for fructose), amino acids (multiple Na⁺-coupled transporters), and water-soluble vitamins. It has longer villi, fewer goblet cells, and less lymphoid tissue than the ileum.',
    level5: 'Jejunal enterocytes exhibit high expression of brush border enzymes (disaccharidases, peptidases) and transporters. Glucose absorption involves apical SGLT1 (2Na⁺:1glucose), basolateral GLUT2, and Na⁺/K⁺-ATPase. Amino acid absorption uses ~7 different Na⁺-coupled transporters with overlapping specificity. The jejunum also absorbs most dietary Ca²⁺ via TRPV6 (regulated by 1,25-dihydroxyvitamin D) and passive paracellular transport.',
  },
  keyFacts: [
    'Thicker wall, larger diameter than ileum',
    'More prominent plicae circulares',
    'Primary site for carbohydrate and protein absorption',
    'Fewer Peyer patches than ileum',
    'Arterial arcades: fewer, longer vasa recta',
  ],
  bloodSupply: ['Jejunal branches of superior mesenteric artery'],
  venousDrainage: ['Superior mesenteric vein → Portal vein'],
  innervation: {
    parasympathetic: 'Vagus nerve',
    sympathetic: 'Superior mesenteric ganglion',
    enteric: 'Meissner and Auerbach plexuses',
  },
  pathologies: [
    {
      name: 'Celiac disease',
      description: 'Immune-mediated enteropathy triggered by gluten',
      symptoms: ['Diarrhea', 'Steatorrhea', 'Weight loss', 'Anemia', 'Dermatitis herpetiformis'],
      causes: ['Gluten ingestion in genetically susceptible individuals (HLA-DQ2/DQ8)'],
      relevantImaging: ['Upper endoscopy with duodenal biopsy'],
      relevantLabs: ['Anti-tissue transglutaminase IgA', 'Anti-endomysial antibodies', 'Total IgA'],
    },
    {
      name: 'Small bowel obstruction',
      description: 'Mechanical blockage of intestinal lumen',
      symptoms: ['Crampy abdominal pain', 'Vomiting', 'Distension', 'Obstipation'],
      causes: ['Adhesions', 'Hernias', 'Tumors', 'Crohn disease'],
      relevantImaging: ['Abdominal X-ray', 'CT abdomen'],
    },
  ],
  relatedStructures: ['duodenum', 'ileum', 'mesentery'],
});

// --- Small Intestine: Ileum ---
digestiveStructures.set('ileum', {
  id: 'ileum',
  name: 'Ileum',
  latinName: 'Ileum',
  fmaId: 'FMA:7208',
  region: 'small-intestine',
  location: 'Lower right abdomen, from jejunum to ileocecal valve',
  function: 'Absorption of vitamin B12, bile salts, and remaining nutrients',
  length: '~3.5 meters (distal 3/5 of jejunoileum)',
  epitheliumType: 'Simple columnar with microvilli',
  wallLayers: ['mucosa', 'submucosa', 'muscularis', 'serosa'],
  explanations: {
    level1: 'The ileum is the last part of your small intestine, right before the large intestine.',
    level2: 'The ileum absorbs vitamin B12 and bile salts. It has special immune tissue called Peyer patches that help protect against germs.',
    level3: 'The ileum is distinguished by Peyer patches (aggregated lymphoid follicles), less prominent plicae circulares, and its role in vitamin B12-intrinsic factor complex absorption. The ileocecal valve prevents reflux of colonic contents.',
    level4: 'The terminal ileum exclusively expresses cubilin, the receptor for intrinsic factor-B12 complex. It also reabsorbs ~95% of bile salts via the apical sodium-dependent bile acid transporter (ASBT), completing the enterohepatic circulation. Peyer patches sample luminal antigens via M cells.',
    level5: 'B12 absorption requires: 1) gastric R-protein binding, 2) pancreatic protease digestion releasing B12, 3) intrinsic factor (IF) binding, 4) IF-B12 binding to cubilin-amnionless complex in terminal ileum, 5) receptor-mediated endocytosis. Ileal ASBT (SLC10A2) is the rate-limiting step in bile acid reabsorption; disruption causes bile acid diarrhea. Peyer patch M cells transcytose antigens to underlying dendritic cells for mucosal immune surveillance.',
  },
  keyFacts: [
    'Exclusive site for B12-intrinsic factor absorption',
    'Contains Peyer patches (mucosal immune surveillance)',
    '95% of bile salts reabsorbed here',
    'Thinner wall, smaller diameter than jejunum',
    'More fat in mesentery, shorter vasa recta',
  ],
  bloodSupply: ['Ileal branches of superior mesenteric artery'],
  venousDrainage: ['Superior mesenteric vein → Portal vein'],
  innervation: {
    parasympathetic: 'Vagus nerve',
    sympathetic: 'Superior mesenteric ganglion',
    enteric: 'Meissner and Auerbach plexuses',
  },
  pathologies: [
    {
      name: 'Crohn disease',
      description: 'Chronic inflammatory bowel disease, often affecting terminal ileum',
      symptoms: ['Abdominal pain', 'Diarrhea', 'Weight loss', 'Fistulas', 'Strictures'],
      causes: ['Multifactorial: genetic, environmental, microbiome'],
      relevantImaging: ['CT/MR enterography', 'Colonoscopy with ileal intubation'],
      relevantLabs: ['CRP', 'ESR', 'Fecal calprotectin', 'CBC'],
    },
    {
      name: 'Meckel diverticulum',
      description: 'Remnant of omphalomesenteric duct (true diverticulum)',
      symptoms: ['Often asymptomatic', 'GI bleeding (ectopic gastric mucosa)', 'Obstruction'],
      causes: ['Failure of omphalomesenteric duct regression'],
      relevantImaging: ['Meckel scan (Tc-99m pertechnetate)'],
    },
  ],
  relatedStructures: ['jejunum', 'cecum', 'ileocecal-valve', 'appendix'],
});

// --- Large Intestine: Cecum ---
digestiveStructures.set('cecum', {
  id: 'cecum',
  name: 'Cecum',
  latinName: 'Caecum',
  fmaId: 'FMA:7132',
  region: 'large-intestine',
  location: 'Right iliac fossa, below ileocecal valve',
  function: 'Receives ileal contents, begins water absorption, houses appendix',
  length: '6-9 cm',
  epitheliumType: 'Simple columnar with abundant goblet cells',
  wallLayers: ['mucosa', 'submucosa', 'muscularis', 'serosa'],
  explanations: {
    level1: 'The cecum is a pouch at the beginning of your large intestine.',
    level2: 'The cecum is where your small intestine empties into your large intestine. The appendix is attached to it.',
    level3: 'The cecum is a blind pouch in the right iliac fossa, receiving the ileum at the ileocecal valve. It contains the appendiceal orifice and begins the process of water reabsorption that continues throughout the colon.',
    level4: 'The cecum is intraperitoneal but typically has no mesentery. The ileocecal valve is a functional sphincter that slows ileal emptying and prevents reflux. The cecum has the largest diameter of any colonic segment, making it most susceptible to distension-related complications.',
    level5: 'The cecal wall follows colonic architecture: crypts of Lieberkühn without villi, abundant goblet cells for mucus production, and longitudinal muscle condensed into three taeniae coli. The law of Laplace (wall tension = pressure × radius / wall thickness) explains why the cecum is the most common site of colonic perforation in large bowel obstruction.',
  },
  keyFacts: [
    'Largest diameter segment of colon',
    'Most common site of colonic perforation in obstruction',
    'Contains appendiceal orifice',
    'Usually intraperitoneal without mesentery',
    'Three taeniae coli converge at appendix base',
  ],
  bloodSupply: ['Ileocolic artery (branch of SMA)'],
  venousDrainage: ['Ileocolic vein → Superior mesenteric vein → Portal vein'],
  innervation: {
    parasympathetic: 'Vagus nerve',
    sympathetic: 'Superior mesenteric ganglion',
    enteric: 'Meissner and Auerbach plexuses',
  },
  pathologies: [
    {
      name: 'Cecal volvulus',
      description: 'Twisting of cecum on its mesentery',
      symptoms: ['Sudden abdominal pain', 'Distension', 'Obstipation', 'Vomiting'],
      causes: ['Mobile cecum (incomplete fixation)', 'Prior surgery'],
      relevantImaging: ['Abdominal X-ray (coffee bean sign)', 'CT abdomen'],
    },
  ],
  relatedStructures: ['ileum', 'appendix', 'ascending-colon', 'ileocecal-valve'],
});

// --- Large Intestine: Ascending Colon ---
digestiveStructures.set('ascending-colon', {
  id: 'ascending-colon',
  name: 'Ascending Colon',
  latinName: 'Colon ascendens',
  fmaId: 'FMA:7177',
  region: 'large-intestine',
  location: 'Right side of abdomen, from cecum to hepatic flexure',
  function: 'Water and electrolyte absorption',
  length: '15-20 cm',
  epitheliumType: 'Simple columnar with goblet cells',
  wallLayers: ['mucosa', 'submucosa', 'muscularis', 'adventitia'],
  explanations: {
    level1: 'The ascending colon goes up the right side of your belly.',
    level2: 'The ascending colon absorbs water from the food waste as it travels upward to the hepatic flexure (bend near the liver).',
    level3: 'The ascending colon is retroperitoneal (fixed to posterior abdominal wall) and continues water absorption. The epithelium has no villi but deep crypts with abundant goblet cells.',
    level4: 'The ascending colon absorbs most of the remaining water (~1.5 L/day) and electrolytes (Na⁺ via ENaC, Cl⁻ via exchange for HCO3⁻). Short-chain fatty acids produced by bacterial fermentation are absorbed here and provide energy for colonocytes.',
    level5: 'Colonic Na⁺ absorption occurs via ENaC (epithelial sodium channel), stimulated by aldosterone. Cl⁻/HCO3⁻ exchange (via DRA/SLC26A3) provides the HCO3⁻ for bacterial metabolism. Short-chain fatty acids (acetate, propionate, butyrate) are absorbed via MCT1 and nonionic diffusion; butyrate is the primary energy source for colonocytes and has anti-inflammatory effects.',
  },
  keyFacts: [
    'Retroperitoneal (secondarily)',
    'Absorbs ~1.5 L water daily',
    'Right colic (hepatic) flexure at upper end',
    'No mesentery - fixed position',
    'Supplied by SMA territory',
  ],
  bloodSupply: ['Ileocolic artery', 'Right colic artery (variable)'],
  venousDrainage: ['Superior mesenteric vein → Portal vein'],
  innervation: {
    parasympathetic: 'Vagus nerve',
    sympathetic: 'Superior mesenteric ganglion',
    enteric: 'Meissner and Auerbach plexuses',
  },
  pathologies: [
    {
      name: 'Colon cancer',
      description: 'Malignancy arising from colonic epithelium',
      symptoms: ['Often asymptomatic early', 'Right-sided: anemia, weight loss', 'Left-sided: obstruction, hematochezia'],
      causes: ['Sporadic (adenoma-carcinoma sequence)', 'Lynch syndrome', 'FAP'],
      relevantImaging: ['Colonoscopy', 'CT colonography', 'CT chest/abdomen/pelvis for staging'],
      relevantLabs: ['CEA', 'CBC', 'LFTs', 'Molecular profiling (MSI, KRAS, BRAF)'],
    },
  ],
  relatedStructures: ['cecum', 'hepatic-flexure', 'transverse-colon', 'right-kidney', 'duodenum'],
});

// --- Large Intestine: Transverse Colon ---
digestiveStructures.set('transverse-colon', {
  id: 'transverse-colon',
  name: 'Transverse Colon',
  latinName: 'Colon transversum',
  fmaId: 'FMA:7178',
  region: 'large-intestine',
  location: 'Crosses abdomen from hepatic flexure to splenic flexure',
  function: 'Water absorption, fecal storage and transport',
  length: '45-50 cm',
  epitheliumType: 'Simple columnar with goblet cells',
  wallLayers: ['mucosa', 'submucosa', 'muscularis', 'serosa'],
  explanations: {
    level1: 'The transverse colon goes across your belly like a bridge.',
    level2: 'The transverse colon connects the right and left sides of your large intestine, crossing from the liver area to the spleen area.',
    level3: 'The transverse colon is the most mobile portion, suspended by the transverse mesocolon. It attaches to the greater curvature of stomach via the gastrocolic ligament. The splenic flexure is at a higher level and more acute angle than the hepatic flexure.',
    level4: 'The transverse colon marks the transition between SMA (proximal) and IMA (distal) blood supply, meeting at the splenic flexure - a watershed area vulnerable to ischemia. The gastrocolic reflex triggers colonic contractions after eating.',
    level5: 'The splenic flexure is a watershed zone (Griffiths point) where marginal artery connections may be tenuous, making it susceptible to ischemic colitis in hypoperfusion. Mass movements (high-amplitude propagating contractions) occur 1-3 times daily, often after meals via the gastrocolic reflex (cholecystokinin and parasympathetic activation). These propel fecal material toward the rectum.',
  },
  keyFacts: [
    'Longest and most mobile segment',
    'Suspended by transverse mesocolon',
    'Splenic flexure is watershed zone (Griffiths point)',
    'Attached to stomach by gastrocolic ligament',
    'Greater omentum attaches here',
  ],
  bloodSupply: ['Middle colic artery (SMA)', 'Branches of left colic artery (IMA)'],
  venousDrainage: ['Superior and inferior mesenteric veins → Portal vein'],
  innervation: {
    parasympathetic: 'Vagus (proximal) and pelvic splanchnic (distal)',
    sympathetic: 'Superior and inferior mesenteric ganglia',
    enteric: 'Meissner and Auerbach plexuses',
  },
  pathologies: [
    {
      name: 'Ischemic colitis',
      description: 'Colonic ischemia, often affecting watershed areas',
      symptoms: ['Crampy abdominal pain', 'Bloody diarrhea', 'Urgency'],
      causes: ['Hypoperfusion', 'Embolism', 'Thrombosis', 'Vasculitis'],
      relevantImaging: ['CT with contrast', 'Colonoscopy (thumbprinting)'],
    },
  ],
  relatedStructures: ['hepatic-flexure', 'splenic-flexure', 'stomach', 'greater-omentum'],
});

// --- Large Intestine: Descending Colon ---
digestiveStructures.set('descending-colon', {
  id: 'descending-colon',
  name: 'Descending Colon',
  latinName: 'Colon descendens',
  fmaId: 'FMA:7179',
  region: 'large-intestine',
  location: 'Left side of abdomen, from splenic flexure to sigmoid colon',
  function: 'Storage of feces, continued water absorption',
  length: '25-30 cm',
  epitheliumType: 'Simple columnar with goblet cells',
  wallLayers: ['mucosa', 'submucosa', 'muscularis', 'adventitia'],
  explanations: {
    level1: 'The descending colon goes down the left side of your belly.',
    level2: 'The descending colon carries waste material down the left side of your abdomen toward the sigmoid colon and rectum.',
    level3: 'The descending colon is retroperitoneal and receives blood from the IMA (left colic artery). It stores formed stool and completes water absorption.',
    level4: 'The descending colon represents the transition to increasingly formed stool. It\'s narrower than the ascending colon, making left-sided tumors more likely to cause obstruction. Diverticulosis is uncommon here compared to the sigmoid.',
    level5: 'The descending colon has the highest intraluminal pressure during segmental contractions, contributing to diverticula formation in susceptible individuals. The narrower caliber means left-sided colorectal cancers typically present with obstruction, while right-sided tumors present with occult bleeding and anemia.',
  },
  keyFacts: [
    'Retroperitoneal (secondarily)',
    'Narrower than ascending colon',
    'Supplied by IMA territory',
    'Left-sided tumors often cause obstruction',
    'Less prone to diverticulosis than sigmoid',
  ],
  bloodSupply: ['Left colic artery (IMA)'],
  venousDrainage: ['Inferior mesenteric vein → Splenic vein → Portal vein'],
  innervation: {
    parasympathetic: 'Pelvic splanchnic nerves (S2-S4)',
    sympathetic: 'Inferior mesenteric ganglion',
    enteric: 'Meissner and Auerbach plexuses',
  },
  pathologies: [
    {
      name: 'Diverticulitis',
      description: 'Inflammation of colonic diverticula',
      symptoms: ['Left lower quadrant pain', 'Fever', 'Leukocytosis', 'Change in bowel habits'],
      causes: ['Diverticulosis with microperforation', 'Low fiber diet'],
      relevantImaging: ['CT abdomen/pelvis with contrast'],
      relevantLabs: ['CBC', 'CRP', 'BMP'],
    },
  ],
  relatedStructures: ['splenic-flexure', 'sigmoid-colon', 'left-kidney', 'spleen'],
});

// --- Large Intestine: Sigmoid Colon ---
digestiveStructures.set('sigmoid-colon', {
  id: 'sigmoid-colon',
  name: 'Sigmoid Colon',
  latinName: 'Colon sigmoideum',
  fmaId: 'FMA:7180',
  region: 'large-intestine',
  location: 'Left iliac fossa, S-shaped loop connecting descending colon to rectum',
  function: 'Storage of feces before defecation',
  length: '40 cm (variable)',
  epitheliumType: 'Simple columnar with goblet cells',
  wallLayers: ['mucosa', 'submucosa', 'muscularis', 'serosa'],
  explanations: {
    level1: 'The sigmoid colon is an S-shaped part of your intestine near the bottom.',
    level2: 'The sigmoid colon stores poop before you go to the bathroom. Its S-shape helps control when waste moves to the rectum.',
    level3: 'The sigmoid colon is suspended by the sigmoid mesocolon, making it mobile. It has the highest intraluminal pressure in the colon and is the most common site for diverticulosis.',
    level4: 'The sigmoid colon\'s narrow caliber and high-pressure segmentation make it prone to diverticulosis. Sigmoid volvulus can occur when the redundant sigmoid twists on its mesentery. It\'s a common site for colorectal cancer.',
    level5: 'The sigmoid colon\'s segmental contractions create high intraluminal pressures (up to 90 mmHg) that promote diverticula formation at points of vascular penetration (vasa recta). The sigmoid mesocolon\'s variable length predisposes to volvulus, especially in elderly or institutionalized patients with chronic constipation and a redundant sigmoid.',
  },
  keyFacts: [
    'Most common site for diverticulosis',
    'Highest intraluminal pressure in colon',
    'Mobile - suspended by sigmoid mesocolon',
    'Common site for volvulus',
    'Narrowest lumen in colon',
  ],
  bloodSupply: ['Sigmoid arteries (2-4 branches of IMA)'],
  venousDrainage: ['Inferior mesenteric vein → Splenic vein → Portal vein'],
  innervation: {
    parasympathetic: 'Pelvic splanchnic nerves (S2-S4)',
    sympathetic: 'Inferior mesenteric ganglion',
    enteric: 'Meissner and Auerbach plexuses',
  },
  pathologies: [
    {
      name: 'Sigmoid volvulus',
      description: 'Twisting of sigmoid colon on its mesentery',
      symptoms: ['Abdominal distension', 'Obstipation', 'Crampy pain'],
      causes: ['Redundant sigmoid', 'Chronic constipation', 'High-fiber diet (endemic areas)'],
      relevantImaging: ['Abdominal X-ray (coffee bean/bent inner tube sign)', 'CT abdomen'],
    },
    {
      name: 'Sigmoid diverticulosis',
      description: 'Outpouchings of colonic mucosa through muscle wall',
      symptoms: ['Often asymptomatic', 'Left lower quadrant discomfort', 'Altered bowel habits'],
      causes: ['High intraluminal pressure', 'Low fiber diet', 'Connective tissue changes'],
      relevantImaging: ['CT abdomen', 'Colonoscopy'],
    },
  ],
  relatedStructures: ['descending-colon', 'rectum', 'bladder', 'uterus'],
});

// --- Rectum ---
digestiveStructures.set('rectum', {
  id: 'rectum',
  name: 'Rectum',
  latinName: 'Rectum',
  fmaId: 'FMA:7181',
  region: 'rectum-anal',
  location: 'Pelvic cavity, from S3 to anorectal junction, follows sacral curvature',
  function: 'Storage of feces, sensation of rectal filling, initiation of defecation',
  length: '12-15 cm',
  epitheliumType: 'Simple columnar (transitions to stratified squamous at dentate line)',
  wallLayers: ['mucosa', 'submucosa', 'muscularis', 'adventitia'],
  sphincters: ['Internal anal sphincter (involuntary)', 'External anal sphincter (voluntary)'],
  explanations: {
    level1: 'The rectum is where poop is stored right before you go to the bathroom.',
    level2: 'The rectum can stretch to hold stool and send signals to your brain when it\'s time to go to the bathroom.',
    level3: 'The rectum has three transverse folds (valves of Houston) and lacks taeniae coli. The ampulla distends to accommodate feces. The rectum is extraperitoneal except for its upper third.',
    level4: 'The rectoanal inhibitory reflex (RAIR) relaxes the internal anal sphincter when the rectum distends, allowing sampling of contents. Voluntary control via the external sphincter (pudendal nerve) allows deferral of defecation. The submucosal venous plexus can become hemorrhoids.',
    level5: 'Rectal distension activates stretch receptors that trigger: 1) conscious sensation of urgency, 2) RAIR (rectoanal inhibitory reflex) via intrinsic neurons, and 3) defecation reflex via sacral parasympathetic outflow (S2-S4). The internal sphincter provides 85% of resting tone via tonic sympathetic contraction (L1-L2). The external sphincter and puborectalis (both striated, pudendal nerve) allow voluntary deferral. Proper anal sampling distinguishes solid from gas via specialized sensory innervation of the anal transition zone.',
  },
  keyFacts: [
    'No taeniae coli - complete muscular coat',
    'Upper third covered by peritoneum anteriorly',
    'Three transverse folds (valves of Houston)',
    'Internal sphincter: smooth muscle, involuntary',
    'External sphincter: striated muscle, voluntary (pudendal nerve)',
  ],
  bloodSupply: ['Superior rectal artery (IMA)', 'Middle rectal artery (internal iliac)', 'Inferior rectal artery (internal pudendal)'],
  venousDrainage: ['Superior rectal vein (portal)', 'Middle and inferior rectal veins (systemic) - portosystemic anastomosis'],
  innervation: {
    parasympathetic: 'Pelvic splanchnic nerves (S2-S4)',
    sympathetic: 'Hypogastric nerves',
  },
  pathologies: [
    {
      name: 'Rectal cancer',
      description: 'Malignancy of rectal mucosa',
      symptoms: ['Rectal bleeding', 'Tenesmus', 'Change in bowel habits', 'Narrow stools'],
      causes: ['Adenomatous polyps', 'Lynch syndrome', 'FAP', 'Inflammatory bowel disease'],
      relevantImaging: ['Colonoscopy', 'MRI pelvis', 'Endorectal ultrasound', 'CT CAP'],
    },
    {
      name: 'Hemorrhoids',
      description: 'Dilated submucosal venous plexus',
      symptoms: ['Bright red rectal bleeding', 'Prolapse', 'Pruritus', 'Pain (if thrombosed)'],
      causes: ['Straining', 'Constipation', 'Pregnancy', 'Portal hypertension'],
      relevantImaging: ['Anoscopy', 'Colonoscopy (to exclude other pathology)'],
    },
  ],
  relatedStructures: ['sigmoid-colon', 'anal-canal', 'bladder', 'prostate', 'uterus', 'vagina'],
});

// --- Anal Canal ---
digestiveStructures.set('anal-canal', {
  id: 'anal-canal',
  name: 'Anal Canal',
  latinName: 'Canalis analis',
  fmaId: 'FMA:15711',
  region: 'rectum-anal',
  location: 'Terminal portion of GI tract, from anorectal junction to anal verge',
  function: 'Control of defecation, maintains continence',
  length: '3-4 cm',
  epitheliumType: 'Columnar above dentate line, stratified squamous below',
  wallLayers: ['mucosa', 'submucosa', 'muscularis'],
  sphincters: ['Internal anal sphincter', 'External anal sphincter'],
  explanations: {
    level1: 'The anal canal is the very end of your digestive system where poop comes out.',
    level2: 'The anal canal has muscles called sphincters that open and close to control when you poop.',
    level3: 'The anal canal has the dentate (pectinate) line, an important anatomical landmark. Above it: columnar epithelium, visceral innervation, portal drainage. Below it: squamous epithelium, somatic innervation, systemic drainage.',
    level4: 'The dentate line marks embryologic fusion of hindgut (endoderm) and proctodeum (ectoderm). Internal hemorrhoids arise above it (painless), external below (painful). Anal cancers above are typically adenocarcinoma; below are squamous cell carcinoma.',
    level5: 'The anal canal demonstrates dual embryologic origin: hindgut-derived mucosa above the dentate line (columnar, insensate, portal drainage via superior rectal vein, lymphatics to internal iliac nodes) and proctodeum-derived below (squamous, somatic sensation via inferior rectal nerve, systemic drainage via inferior rectal vein, lymphatics to inguinal nodes). The anal transition zone contains specialized sensory cells for discriminating stool from flatus.',
  },
  keyFacts: [
    'Dentate line: crucial embryologic and clinical landmark',
    'Above dentate: painless, portal drainage',
    'Below dentate: painful, systemic drainage',
    'Columns of Morgagni contain terminal branches of superior rectal artery',
    'Anal crypts open into the lumen, can become infected (abscess)',
  ],
  bloodSupply: ['Superior rectal artery (above dentate)', 'Inferior rectal artery (below dentate)'],
  venousDrainage: ['Superior rectal vein → Portal', 'Inferior rectal vein → Systemic (portosystemic anastomosis)'],
  innervation: {
    parasympathetic: 'Pelvic splanchnic (above dentate)',
    sympathetic: 'Hypogastric plexus',
  },
  pathologies: [
    {
      name: 'Anal fissure',
      description: 'Linear tear in anal mucosa, usually posterior midline',
      symptoms: ['Severe pain with defecation', 'Bright red blood on paper', 'Spasm'],
      causes: ['Hard stool', 'Constipation', 'Crohn disease'],
    },
    {
      name: 'Anal abscess/fistula',
      description: 'Infection of anal crypts progressing to abscess and potential fistula',
      symptoms: ['Perianal pain', 'Swelling', 'Fever', 'Drainage'],
      causes: ['Cryptoglandular infection', 'Crohn disease', 'Trauma'],
      relevantImaging: ['MRI pelvis', 'Endoanal ultrasound'],
    },
    {
      name: 'Anal squamous cell carcinoma',
      description: 'Malignancy of anal canal, often HPV-related',
      symptoms: ['Anal mass', 'Bleeding', 'Pain', 'Pruritus'],
      causes: ['HPV infection (16, 18)', 'HIV', 'Immunosuppression', 'Smoking'],
      relevantImaging: ['Anoscopy with biopsy', 'PET-CT', 'MRI pelvis'],
    },
  ],
  relatedStructures: ['rectum', 'internal-anal-sphincter', 'external-anal-sphincter', 'levator-ani'],
});

// ============================================================================
// ACCESSORY DIGESTIVE ORGANS
// ============================================================================

const accessoryOrgans: Map<string, AccessoryOrgan> = new Map();

// --- Liver ---
accessoryOrgans.set('liver', {
  id: 'liver',
  name: 'Liver',
  latinName: 'Hepar',
  fmaId: 'FMA:7197',
  location: 'Right upper quadrant, beneath diaphragm, mostly covered by rib cage',
  function: 'Bile production, metabolism, detoxification, protein synthesis, glycogen storage',
  dimensions: '1.5 kg, largest internal organ',
  secretions: [
    {
      name: 'Bile',
      source: 'Hepatocytes',
      function: 'Fat emulsification, cholesterol excretion, bilirubin excretion',
      composition: ['Water', 'Bile salts', 'Cholesterol', 'Phospholipids', 'Bilirubin', 'Electrolytes'],
      regulation: 'Secretin stimulates HCO3⁻-rich bile from cholangiocytes; CCK stimulates gallbladder contraction',
    },
  ],
  ducts: ['Right hepatic duct', 'Left hepatic duct', 'Common hepatic duct'],
  explanations: {
    level1: 'The liver is like a chemical factory that cleans your blood and makes bile to help digest fats.',
    level2: 'The liver performs over 500 functions including making bile for fat digestion, removing toxins from blood, storing vitamins and energy, and making proteins for blood clotting.',
    level3: 'The liver has dual blood supply (hepatic artery, portal vein) and is organized into lobules. Hepatocytes perform synthesis, metabolism, and detoxification. Kupffer cells (resident macrophages) filter blood. Bile is produced continuously and stored in the gallbladder.',
    level4: 'The liver lobule centers on the central vein; the portal triad (portal vein, hepatic artery, bile duct) is at the periphery. Zone 1 (periportal) is first to receive oxygenated blood and nutrients; Zone 3 (pericentral) is susceptible to ischemic and toxic injury. The liver produces all clotting factors except vWF and VIII.',
    level5: 'Hepatic zonation reflects gradients in oxygen, nutrients, and signaling molecules. Zone 1 hepatocytes excel at oxidative metabolism, gluconeogenesis, and urea synthesis. Zone 3 hepatocytes perform glycolysis, lipogenesis, and CYP450-mediated drug metabolism. Bile acid synthesis involves CYP7A1 (rate-limiting, regulated by FXR) and CYP27A1. The liver regenerates via hepatocyte proliferation, regulated by HGF, EGF, and TNF-α.',
  },
  keyFacts: [
    'Largest internal organ (1.5 kg)',
    'Dual blood supply: 75% portal vein, 25% hepatic artery',
    'Produces 500-1000 mL bile daily',
    'Only organ that can regenerate (up to 70% loss)',
    'First-pass metabolism of oral medications',
  ],
  bloodSupply: ['Hepatic artery (from celiac trunk)', 'Portal vein (75% of blood flow)'],
  venousDrainage: ['Hepatic veins → Inferior vena cava'],
  innervation: ['Hepatic plexus (sympathetic and vagal fibers)'],
  pathologies: [
    {
      name: 'Cirrhosis',
      description: 'End-stage liver fibrosis with regenerative nodules',
      symptoms: ['Jaundice', 'Ascites', 'Encephalopathy', 'Variceal bleeding', 'Coagulopathy'],
      causes: ['Alcohol', 'Viral hepatitis (B, C)', 'NAFLD/NASH', 'Autoimmune', 'Wilson disease'],
      relevantImaging: ['Ultrasound', 'FibroScan', 'CT/MRI', 'Liver biopsy'],
      relevantLabs: ['LFTs', 'INR', 'Albumin', 'Platelets', 'Ammonia'],
    },
    {
      name: 'Hepatocellular carcinoma',
      description: 'Primary liver cancer, usually arising in cirrhotic liver',
      symptoms: ['Often asymptomatic early', 'RUQ pain', 'Weight loss', 'Decompensation of cirrhosis'],
      causes: ['Cirrhosis', 'Chronic HBV/HCV', 'Aflatoxin exposure', 'NAFLD'],
      relevantImaging: ['Ultrasound', 'CT/MRI (arterial enhancement, venous washout)', 'AFP'],
    },
  ],
  relevantLabs: ['AST', 'ALT', 'ALP', 'GGT', 'Bilirubin', 'Albumin', 'INR', 'Ammonia'],
});

// --- Gallbladder ---
accessoryOrgans.set('gallbladder', {
  id: 'gallbladder',
  name: 'Gallbladder',
  latinName: 'Vesica biliaris',
  fmaId: 'FMA:7202',
  location: 'Inferior surface of liver, in gallbladder fossa',
  function: 'Bile concentration and storage, release with meals',
  dimensions: '7-10 cm long, 30-50 mL capacity',
  secretions: [
    {
      name: 'Concentrated bile',
      source: 'Storage and concentration of hepatic bile',
      function: 'Emulsification of dietary fats',
      regulation: 'CCK stimulates contraction; parasympathetic tone maintains relaxation',
    },
  ],
  ducts: ['Cystic duct → Common bile duct'],
  explanations: {
    level1: 'The gallbladder is like a storage bag for bile that squeezes out when you eat fatty foods.',
    level2: 'The gallbladder stores and concentrates bile from the liver. When you eat fats, it squeezes bile into the small intestine through a duct.',
    level3: 'The gallbladder concentrates bile 5-10x by absorbing water and electrolytes. CCK released from duodenal I cells causes contraction. The cystic duct joins the common hepatic duct to form the common bile duct.',
    level4: 'The gallbladder wall has a mucosa with prominent rugae, a thin muscularis, and serosa (except where attached to liver). Rokitansky-Aschoff sinuses are mucosal invaginations. Cholesterol supersaturation, decreased gallbladder motility, and crystal nucleation promote gallstone formation.',
    level5: 'Bile concentration involves Na⁺-coupled solute absorption creating an osmotic gradient for water reabsorption. CCK-1 receptors activate Gq-mediated smooth muscle contraction. Gallstone pathogenesis involves: 1) cholesterol supersaturation (excess secretion or decreased bile salts), 2) accelerated nucleation (mucin, calcium), 3) gallbladder hypomotility (fasting, TPN, pregnancy). Choledocholithiasis can cause biliary colic, cholangitis, or pancreatitis.',
  },
  keyFacts: [
    'Concentrates bile 5-10x',
    'Capacity: 30-50 mL',
    'CCK triggers contraction',
    'Cystic artery usually from right hepatic artery',
    'Triangle of Calot: cystic duct, common hepatic duct, liver edge',
  ],
  bloodSupply: ['Cystic artery (usually from right hepatic artery)'],
  venousDrainage: ['Cystic veins → Portal vein or directly to liver'],
  innervation: ['Celiac plexus (sympathetic)', 'Vagus nerve (parasympathetic)'],
  pathologies: [
    {
      name: 'Cholelithiasis (Gallstones)',
      description: 'Stones in gallbladder, usually cholesterol or pigment',
      symptoms: ['Often asymptomatic', 'Biliary colic (RUQ pain after fatty meals)', 'N/V'],
      causes: ['4 Fs: Fat, Female, Forty, Fertile', 'Obesity', 'Rapid weight loss', 'Hemolysis (pigment)'],
      relevantImaging: ['Ultrasound (95% sensitive)'],
    },
    {
      name: 'Acute cholecystitis',
      description: 'Inflammation of gallbladder, usually from stone impaction',
      symptoms: ['RUQ pain (>6 hours)', 'Fever', 'Murphy sign', 'Leukocytosis'],
      causes: ['Gallstone impaction in cystic duct (90%)', 'Acalculous (ICU patients)'],
      relevantImaging: ['Ultrasound', 'HIDA scan if equivocal'],
      relevantLabs: ['CBC', 'LFTs', 'Lipase'],
    },
  ],
  relevantLabs: ['LFTs', 'Bilirubin (direct/indirect)', 'Lipase'],
});

// --- Pancreas ---
accessoryOrgans.set('pancreas', {
  id: 'pancreas',
  name: 'Pancreas',
  latinName: 'Pancreas',
  fmaId: 'FMA:7198',
  location: 'Retroperitoneal, head in C-loop of duodenum, tail extends to splenic hilum',
  function: 'Exocrine: digestive enzymes; Endocrine: glucose homeostasis (insulin, glucagon)',
  dimensions: '15-20 cm long, 80-100 g',
  secretions: [
    {
      name: 'Pancreatic juice',
      source: 'Acinar cells (enzymes), Ductal cells (bicarbonate)',
      function: 'Protein, fat, carbohydrate digestion; neutralization of gastric acid',
      composition: ['Trypsinogen', 'Chymotrypsinogen', 'Procarboxypeptidase', 'Lipase', 'Amylase', 'HCO3⁻'],
      regulation: 'CCK stimulates enzyme secretion; Secretin stimulates HCO3⁻ secretion',
    },
  ],
  ducts: ['Main pancreatic duct (of Wirsung)', 'Accessory pancreatic duct (of Santorini)'],
  explanations: {
    level1: 'The pancreas makes juices that help digest food and hormones that control blood sugar.',
    level2: 'The pancreas has two jobs: making digestive enzymes that break down food in the small intestine, and making insulin and glucagon that control blood sugar levels.',
    level3: 'The exocrine pancreas (acini) produces inactive zymogens activated in the duodenum by enterokinase. The endocrine pancreas (islets of Langerhans) contains α cells (glucagon), β cells (insulin), δ cells (somatostatin), and PP cells.',
    level4: 'Pancreatic enzymes are secreted as inactive zymogens to prevent autodigestion. Enterokinase activates trypsinogen to trypsin, which then activates other zymogens. Lipase requires colipase for activity. Secretin acts on ductal cells via cAMP to secrete HCO3⁻-rich fluid.',
    level5: 'Trypsin activation cascade: enterokinase cleaves trypsinogen, trypsin then activates chymotrypsinogen, procarboxypeptidase, proelastase, and prophospholipase A2. Pancreatic secretory trypsin inhibitor (SPINK1) prevents premature trypsin activation. Lipase is protected from acid by colipase binding. Islet paracrine regulation: insulin inhibits glucagon, glucagon stimulates insulin, somatostatin inhibits both. CFTR-mediated Cl⁻ secretion drives HCO3⁻ secretion via Cl⁻/HCO3⁻ exchange (defective in cystic fibrosis).',
  },
  keyFacts: [
    '1-2 L pancreatic juice daily',
    'Enzymes secreted as inactive zymogens',
    'Islets: 1-2% of mass but critical for glucose homeostasis',
    'Retroperitoneal except tail (in splenorenal ligament)',
    'Main duct joins CBD at ampulla of Vater in 70%',
  ],
  bloodSupply: ['Superior/inferior pancreaticoduodenal arteries (head)', 'Splenic artery branches (body/tail)'],
  venousDrainage: ['Splenic vein and superior mesenteric vein → Portal vein'],
  innervation: ['Vagus nerve (parasympathetic)', 'Splanchnic nerves (sympathetic)'],
  pathologies: [
    {
      name: 'Acute pancreatitis',
      description: 'Acute inflammation with autodigestion of pancreas',
      symptoms: ['Severe epigastric pain radiating to back', 'N/V', 'Elevated lipase/amylase'],
      causes: ['Gallstones', 'Alcohol', 'Hypertriglyceridemia', 'ERCP', 'Medications'],
      relevantImaging: ['CT with contrast (if severe/no improvement)', 'Ultrasound for gallstones'],
      relevantLabs: ['Lipase (>3x ULN)', 'Amylase', 'BMP', 'CBC', 'LFTs', 'Triglycerides'],
    },
    {
      name: 'Chronic pancreatitis',
      description: 'Progressive inflammatory fibrosis of pancreas',
      symptoms: ['Chronic abdominal pain', 'Steatorrhea', 'Diabetes mellitus', 'Weight loss'],
      causes: ['Alcohol (most common)', 'Genetic (PRSS1, SPINK1, CFTR)', 'Autoimmune'],
      relevantImaging: ['CT (calcifications)', 'MRCP', 'EUS'],
    },
    {
      name: 'Pancreatic adenocarcinoma',
      description: 'Ductal adenocarcinoma, highly lethal malignancy',
      symptoms: ['Painless jaundice (head)', 'Weight loss', 'New-onset diabetes', 'Back pain'],
      causes: ['Smoking', 'Chronic pancreatitis', 'Family history', 'Genetic syndromes'],
      relevantImaging: ['CT pancreas protocol', 'EUS with FNA', 'MRI/MRCP'],
      relevantLabs: ['CA 19-9', 'Bilirubin', 'LFTs'],
    },
  ],
  relevantLabs: ['Lipase', 'Amylase', 'Glucose', 'HbA1c', 'Fecal elastase'],
});

// --- Salivary Glands ---
accessoryOrgans.set('parotid-gland', {
  id: 'parotid-gland',
  name: 'Parotid Gland',
  latinName: 'Glandula parotidea',
  fmaId: 'FMA:59790',
  location: 'Preauricular region, superficial to masseter, wraps around mandibular ramus',
  function: 'Serous saliva production (watery, amylase-rich)',
  dimensions: 'Largest salivary gland, 15-30 g',
  secretions: [
    {
      name: 'Serous saliva',
      source: 'Serous acini',
      function: 'Lubrication, starch digestion (amylase)',
      composition: ['Water', 'Amylase', 'Proline-rich proteins', 'Electrolytes'],
      regulation: 'Parasympathetic (CN IX via otic ganglion) - watery; Sympathetic - protein-rich',
    },
  ],
  ducts: ['Stensen duct (parotid duct) → opens opposite upper 2nd molar'],
  explanations: {
    level1: 'The parotid gland makes watery saliva that helps you chew and digest starches.',
    level2: 'The parotid is the largest salivary gland, located in front of your ear. It makes watery saliva containing amylase enzyme that starts breaking down starches.',
    level3: 'The parotid is purely serous, producing watery, amylase-rich saliva. The facial nerve (CN VII) runs through the gland, dividing it into superficial and deep lobes. Stensen duct exits anteriorly.',
    level4: 'Parasympathetic secretomotor fibers from CN IX synapse in the otic ganglion and reach the parotid via the auriculotemporal nerve. Mumps paramyxovirus preferentially infects the parotid. Warthin tumor is a benign neoplasm unique to the parotid.',
    level5: 'Serous acinar cells contain abundant zymogen granules with α-amylase. Myoepithelial cells contract to expel saliva. The parotid has extensive lymphatic tissue, explaining its involvement in systemic diseases (Sjögren syndrome, sarcoidosis). Pleomorphic adenoma is the most common tumor; facial nerve-sparing parotidectomy is the standard surgical approach.',
  },
  keyFacts: [
    'Purely serous gland',
    'CN VII passes through (not innervates)',
    'CN IX provides parasympathetic secretomotor',
    'Stensen duct opens at upper 2nd molar papilla',
    'Most common site for salivary stones: submandibular',
  ],
  bloodSupply: ['External carotid artery branches'],
  venousDrainage: ['Retromandibular vein'],
  innervation: ['CN IX via otic ganglion (parasympathetic)', 'Superior cervical ganglion (sympathetic)'],
  pathologies: [
    {
      name: 'Mumps parotitis',
      description: 'Viral infection causing parotid swelling',
      symptoms: ['Bilateral parotid swelling', 'Fever', 'Pain with chewing'],
      causes: ['Mumps paramyxovirus'],
    },
    {
      name: 'Pleomorphic adenoma',
      description: 'Most common salivary gland tumor (benign)',
      symptoms: ['Painless, slow-growing mass', 'Usually in superficial lobe'],
      causes: ['Unknown'],
      relevantImaging: ['MRI', 'Fine needle aspiration'],
    },
  ],
  relevantLabs: ['Amylase (elevated in parotitis)'],
});

accessoryOrgans.set('submandibular-gland', {
  id: 'submandibular-gland',
  name: 'Submandibular Gland',
  latinName: 'Glandula submandibularis',
  fmaId: 'FMA:59795',
  location: 'Submandibular triangle, below mylohyoid muscle',
  function: 'Mixed (predominantly serous) saliva production',
  dimensions: 'Second largest, 10-15 g',
  secretions: [
    {
      name: 'Mixed saliva',
      source: 'Serous and mucous acini',
      function: 'Lubrication, digestion, antimicrobial',
      regulation: 'Parasympathetic (CN VII via submandibular ganglion)',
    },
  ],
  ducts: ['Wharton duct → opens at sublingual caruncle'],
  explanations: {
    level1: 'The submandibular gland under your jaw makes most of your saliva.',
    level2: 'This gland produces about 70% of your unstimulated saliva. It\'s under your jawbone and drains into your mouth near your tongue.',
    level3: 'The submandibular gland is mixed (mostly serous) and produces 70% of resting saliva. Wharton duct runs anteriorly between mylohyoid and hyoglossus. It\'s the most common site for salivary stones.',
    level4: 'The submandibular gland\'s long, upward-draining duct and more viscous, calcium-rich secretions predispose to sialolithiasis. The lingual nerve loops under Wharton duct ("the lingual nerve took a loop around the Wharton duct hypoglossal").',
    level5: 'Saliva from the submandibular gland is supersaturated with calcium phosphate, and the ascending duct drainage promotes stasis and stone formation. Stones are 80% calcium phosphate or calcium carbonate. Surgical approaches must avoid the lingual nerve and facial vessels.',
  },
  keyFacts: [
    'Produces 70% of unstimulated saliva',
    'Most common site for salivary stones',
    'Mixed gland (serous > mucous)',
    'Wharton duct exits floor of mouth',
    'Lingual nerve crosses duct',
  ],
  bloodSupply: ['Facial and lingual arteries'],
  venousDrainage: ['Facial vein'],
  innervation: ['CN VII via submandibular ganglion (parasympathetic)'],
  pathologies: [
    {
      name: 'Sialolithiasis',
      description: 'Salivary duct stone, most common in submandibular',
      symptoms: ['Swelling with meals', 'Pain', 'Recurrent infections'],
      causes: ['Calcium salt precipitation', 'Dehydration', 'Duct anatomy'],
      relevantImaging: ['CT', 'Ultrasound', 'Sialography'],
    },
  ],
});

accessoryOrgans.set('sublingual-gland', {
  id: 'sublingual-gland',
  name: 'Sublingual Gland',
  latinName: 'Glandula sublingualis',
  fmaId: 'FMA:59798',
  location: 'Floor of mouth, above mylohyoid, beneath tongue mucosa',
  function: 'Mucous saliva production',
  dimensions: 'Smallest major gland, 2-4 g',
  secretions: [
    {
      name: 'Mucous saliva',
      source: 'Predominantly mucous acini',
      function: 'Lubrication',
      regulation: 'Parasympathetic (CN VII via submandibular ganglion)',
    },
  ],
  ducts: ['Multiple small ducts (of Rivinus)', 'May have Bartholin duct joining Wharton duct'],
  explanations: {
    level1: 'The sublingual gland under your tongue makes thick, slippery saliva.',
    level2: 'This small gland beneath your tongue produces mucus-rich saliva that helps lubricate food for swallowing.',
    level3: 'The sublingual gland is primarily mucous-secreting and drains via multiple small ducts (of Rivinus) directly into the floor of mouth. It lacks a distinct capsule.',
    level4: 'The sublingual gland may contribute to formation of a ranula - a mucous retention cyst in the floor of the mouth. A plunging ranula extends through mylohyoid into the neck.',
    level5: 'The sublingual gland\'s multiple small ducts and lack of complete capsule make it more prone to mucous extravasation phenomena. Ranulas result from duct obstruction or rupture with mucous accumulation. Treatment may require marsupialization or gland excision.',
  },
  keyFacts: [
    'Primarily mucous gland',
    'Multiple small ducts',
    'Lacks true capsule',
    'Associated with ranula formation',
    'Smallest of the major salivary glands',
  ],
  bloodSupply: ['Sublingual and submental arteries'],
  venousDrainage: ['Sublingual vein'],
  innervation: ['CN VII via submandibular ganglion'],
  pathologies: [
    {
      name: 'Ranula',
      description: 'Mucous retention cyst in floor of mouth',
      symptoms: ['Blue, translucent swelling under tongue', 'May interfere with speech/swallowing'],
      causes: ['Duct obstruction or rupture'],
      relevantImaging: ['CT', 'MRI'],
    },
  ],
});

// ============================================================================
// DIGESTIVE ENZYMES
// ============================================================================

export const DIGESTIVE_ENZYMES: DigestiveEnzyme[] = [
  // Salivary enzymes
  {
    name: 'Salivary α-amylase (ptyalin)',
    source: 'Salivary glands (parotid, submandibular)',
    substrate: 'Starch (α-1,4 glycosidic bonds)',
    products: 'Maltose, maltotriose, α-limit dextrins',
    optimalPH: '6.7-7.0',
    activatedBy: 'Cl⁻ ions',
  },
  {
    name: 'Lingual lipase',
    source: 'Lingual serous glands (von Ebner)',
    substrate: 'Triglycerides',
    products: 'Fatty acids, diglycerides',
    optimalPH: '3.5-6.0 (acid stable)',
  },
  // Gastric enzymes
  {
    name: 'Pepsin',
    source: 'Chief cells (as pepsinogen)',
    substrate: 'Proteins (aromatic amino acids)',
    products: 'Peptides',
    optimalPH: '1.5-2.0',
    activatedBy: 'HCl (autocatalytic at pH <5)',
  },
  {
    name: 'Gastric lipase',
    source: 'Chief cells',
    substrate: 'Triglycerides (short/medium chain)',
    products: 'Fatty acids, diglycerides',
    optimalPH: '3.0-6.0',
  },
  // Pancreatic enzymes
  {
    name: 'Pancreatic α-amylase',
    source: 'Pancreatic acinar cells',
    substrate: 'Starch, glycogen',
    products: 'Maltose, maltotriose, α-limit dextrins',
    optimalPH: '6.7-7.0',
    activatedBy: 'Cl⁻ ions',
  },
  {
    name: 'Trypsin',
    source: 'Pancreas (as trypsinogen)',
    substrate: 'Proteins (basic amino acids: Arg, Lys)',
    products: 'Peptides',
    optimalPH: '7.5-8.5',
    activatedBy: 'Enterokinase, then autocatalytic',
  },
  {
    name: 'Chymotrypsin',
    source: 'Pancreas (as chymotrypsinogen)',
    substrate: 'Proteins (aromatic amino acids: Phe, Tyr, Trp)',
    products: 'Peptides',
    optimalPH: '7.5-8.5',
    activatedBy: 'Trypsin',
  },
  {
    name: 'Carboxypeptidase A',
    source: 'Pancreas (as procarboxypeptidase A)',
    substrate: 'Peptides (C-terminal aromatic/aliphatic amino acids)',
    products: 'Amino acids, shorter peptides',
    optimalPH: '7.5',
    activatedBy: 'Trypsin',
  },
  {
    name: 'Carboxypeptidase B',
    source: 'Pancreas (as procarboxypeptidase B)',
    substrate: 'Peptides (C-terminal basic amino acids)',
    products: 'Amino acids, shorter peptides',
    optimalPH: '7.5',
    activatedBy: 'Trypsin',
  },
  {
    name: 'Pancreatic lipase',
    source: 'Pancreatic acinar cells',
    substrate: 'Triglycerides',
    products: '2-monoglycerides, free fatty acids',
    optimalPH: '8.0',
    activatedBy: 'Colipase (anchors to micelle)',
  },
  {
    name: 'Phospholipase A2',
    source: 'Pancreas (as prophospholipase)',
    substrate: 'Phospholipids',
    products: 'Lysophospholipids, free fatty acids',
    optimalPH: '8.0',
    activatedBy: 'Trypsin',
  },
  {
    name: 'Cholesterol esterase',
    source: 'Pancreas',
    substrate: 'Cholesterol esters',
    products: 'Free cholesterol, fatty acids',
    optimalPH: '8.0',
    activatedBy: 'Bile salts',
  },
  // Brush border enzymes
  {
    name: 'Enterokinase (enteropeptidase)',
    source: 'Duodenal brush border',
    substrate: 'Trypsinogen',
    products: 'Trypsin',
    optimalPH: '6.0-8.0',
  },
  {
    name: 'Maltase',
    source: 'Small intestine brush border',
    substrate: 'Maltose',
    products: 'Glucose',
    optimalPH: '6.0',
  },
  {
    name: 'Sucrase',
    source: 'Small intestine brush border',
    substrate: 'Sucrose',
    products: 'Glucose, fructose',
    optimalPH: '6.0',
  },
  {
    name: 'Lactase',
    source: 'Small intestine brush border',
    substrate: 'Lactose',
    products: 'Glucose, galactose',
    optimalPH: '6.0',
  },
  {
    name: 'Isomaltase',
    source: 'Small intestine brush border',
    substrate: 'Isomaltose, α-limit dextrins',
    products: 'Glucose',
    optimalPH: '6.0',
  },
  {
    name: 'Aminopeptidases',
    source: 'Small intestine brush border',
    substrate: 'Peptides (N-terminal amino acids)',
    products: 'Amino acids',
    optimalPH: '7.0-8.0',
  },
  {
    name: 'Dipeptidases',
    source: 'Small intestine brush border (cytoplasm)',
    substrate: 'Dipeptides',
    products: 'Amino acids',
    optimalPH: '7.0',
  },
];

// ============================================================================
// ABSORPTION SITES
// ============================================================================

export const ABSORPTION_SITES: AbsorptionSite[] = [
  // Carbohydrates
  {
    nutrient: 'Glucose',
    location: 'Jejunum (primarily)',
    mechanism: 'Secondary active transport (apical), facilitated diffusion (basolateral)',
    transporter: 'SGLT1 (apical, Na⁺-coupled), GLUT2 (basolateral)',
    clinicalNote: 'Oral rehydration therapy uses SGLT1 co-transport to enhance water absorption',
  },
  {
    nutrient: 'Galactose',
    location: 'Jejunum',
    mechanism: 'Secondary active transport',
    transporter: 'SGLT1 (apical), GLUT2 (basolateral)',
    clinicalNote: 'Competes with glucose for SGLT1',
  },
  {
    nutrient: 'Fructose',
    location: 'Jejunum',
    mechanism: 'Facilitated diffusion',
    transporter: 'GLUT5 (apical), GLUT2 (basolateral)',
    clinicalNote: 'Independent of Na⁺; excess fructose can cause osmotic diarrhea',
  },
  // Proteins
  {
    nutrient: 'Amino acids',
    location: 'Jejunum (primarily), ileum',
    mechanism: 'Secondary active transport (Na⁺-coupled) for most',
    transporter: 'Multiple transporters with overlapping specificity',
    clinicalNote: 'Hartnup disease: defective neutral amino acid transporter',
  },
  {
    nutrient: 'Di/tripeptides',
    location: 'Jejunum, ileum',
    mechanism: 'Secondary active transport (H⁺-coupled)',
    transporter: 'PepT1',
    clinicalNote: 'Many oral drugs (beta-lactams) use PepT1 for absorption',
  },
  // Lipids
  {
    nutrient: 'Long-chain fatty acids',
    location: 'Jejunum',
    mechanism: 'Passive diffusion (micelle-mediated), active transport',
    transporter: 'CD36, FATP4',
    clinicalNote: 'Require bile salts for micelle formation; deficiency causes steatorrhea',
  },
  {
    nutrient: 'Cholesterol',
    location: 'Jejunum',
    mechanism: 'Active transport',
    transporter: 'NPC1L1 (target of ezetimibe)',
    clinicalNote: 'Ezetimibe inhibits NPC1L1 to reduce cholesterol absorption',
  },
  // Vitamins - Water soluble
  {
    nutrient: 'Vitamin B1 (Thiamine)',
    location: 'Jejunum',
    mechanism: 'Active transport',
    transporter: 'THTR1, THTR2',
    clinicalNote: 'Deficiency: beriberi, Wernicke-Korsakoff (alcoholism)',
  },
  {
    nutrient: 'Vitamin B2 (Riboflavin)',
    location: 'Proximal small intestine',
    mechanism: 'Active transport',
    transporter: 'RFT1, RFT2',
  },
  {
    nutrient: 'Vitamin B3 (Niacin)',
    location: 'Jejunum',
    mechanism: 'Passive diffusion, active transport',
    clinicalNote: 'Deficiency: pellagra (3 Ds: dermatitis, diarrhea, dementia)',
  },
  {
    nutrient: 'Vitamin B6 (Pyridoxine)',
    location: 'Jejunum',
    mechanism: 'Passive diffusion',
  },
  {
    nutrient: 'Vitamin B9 (Folate)',
    location: 'Duodenum, jejunum',
    mechanism: 'Active transport',
    transporter: 'PCFT (proton-coupled folate transporter)',
    clinicalNote: 'Deficiency: megaloblastic anemia, neural tube defects',
  },
  {
    nutrient: 'Vitamin B12 (Cobalamin)',
    location: 'Terminal ileum (exclusive)',
    mechanism: 'Receptor-mediated endocytosis of IF-B12 complex',
    transporter: 'Cubilin-amnionless complex',
    clinicalNote: 'Requires intrinsic factor from parietal cells; deficiency: megaloblastic anemia, neurologic damage',
  },
  {
    nutrient: 'Vitamin C (Ascorbic acid)',
    location: 'Ileum',
    mechanism: 'Active transport',
    transporter: 'SVCT1',
    clinicalNote: 'Deficiency: scurvy',
  },
  // Vitamins - Fat soluble
  {
    nutrient: 'Vitamin A (Retinol)',
    location: 'Jejunum',
    mechanism: 'Passive diffusion (micelle-mediated)',
    clinicalNote: 'Fat malabsorption causes deficiency; night blindness, xerophthalmia',
  },
  {
    nutrient: 'Vitamin D',
    location: 'Jejunum, ileum',
    mechanism: 'Passive diffusion (micelle-mediated)',
    clinicalNote: 'Deficiency: rickets (children), osteomalacia (adults)',
  },
  {
    nutrient: 'Vitamin E (Tocopherol)',
    location: 'Jejunum',
    mechanism: 'Passive diffusion (micelle-mediated)',
    clinicalNote: 'Deficiency: neurologic symptoms (spinocerebellar ataxia)',
  },
  {
    nutrient: 'Vitamin K',
    location: 'Jejunum, ileum',
    mechanism: 'Passive diffusion (micelle-mediated)',
    clinicalNote: 'Deficiency: bleeding (coagulation factor deficiency)',
  },
  // Minerals
  {
    nutrient: 'Iron (Fe²⁺)',
    location: 'Duodenum (primarily)',
    mechanism: 'Active transport',
    transporter: 'DMT1 (apical), Ferroportin (basolateral)',
    clinicalNote: 'Regulated by hepcidin; deficiency: microcytic anemia',
  },
  {
    nutrient: 'Calcium',
    location: 'Duodenum (active), throughout small intestine (passive)',
    mechanism: 'Active transport (regulated), passive paracellular',
    transporter: 'TRPV6 (apical), calbindin, Ca²⁺-ATPase/NCX (basolateral)',
    clinicalNote: 'Vitamin D (1,25-OH₂D) upregulates TRPV6 and calbindin',
  },
  {
    nutrient: 'Zinc',
    location: 'Jejunum',
    mechanism: 'Active transport',
    transporter: 'ZIP4',
    clinicalNote: 'Acrodermatitis enteropathica: ZIP4 mutation',
  },
  {
    nutrient: 'Copper',
    location: 'Stomach, duodenum',
    mechanism: 'Active transport',
    transporter: 'CTR1',
    clinicalNote: 'Wilson disease: defective ATP7B causes copper accumulation',
  },
  // Water and electrolytes
  {
    nutrient: 'Water',
    location: 'Throughout GI tract, primarily jejunum and colon',
    mechanism: 'Osmosis (follows solute absorption)',
    clinicalNote: '~9 L enters GI tract daily; ~100 mL excreted in stool',
  },
  {
    nutrient: 'Sodium',
    location: 'Jejunum (nutrient-coupled), colon (ENaC)',
    mechanism: 'Na⁺-coupled co-transport, ENaC',
    transporter: 'SGLT1, various (jejunum); ENaC (colon)',
    clinicalNote: 'Aldosterone upregulates ENaC in colon',
  },
  {
    nutrient: 'Chloride',
    location: 'Throughout small intestine and colon',
    mechanism: 'Paracellular (following Na⁺), Cl⁻/HCO3⁻ exchange',
    transporter: 'DRA (SLC26A3)',
    clinicalNote: 'Congenital chloride diarrhea: DRA mutation',
  },
  {
    nutrient: 'Bile salts',
    location: 'Terminal ileum (exclusive)',
    mechanism: 'Active transport (enterohepatic circulation)',
    transporter: 'ASBT (SLC10A2)',
    clinicalNote: 'Ileal resection/disease causes bile acid diarrhea',
  },
];

// ============================================================================
// INDEXES
// ============================================================================

// Index structures by region
const structuresByRegion: Map<string, DigestiveStructure[]> = new Map();

for (const structure of digestiveStructures.values()) {
  const existing = structuresByRegion.get(structure.region) || [];
  existing.push(structure);
  structuresByRegion.set(structure.region, existing);
}

// ============================================================================
// API FUNCTIONS
// ============================================================================

/**
 * Get a digestive structure by ID
 */
export function getDigestiveStructure(id: string): DigestiveStructure | undefined {
  return digestiveStructures.get(id);
}

/**
 * Get all digestive structures
 */
export function getAllDigestiveStructures(): DigestiveStructure[] {
  return Array.from(digestiveStructures.values());
}

/**
 * Get digestive structures by region
 */
export function getDigestiveStructuresByRegion(region: GITractRegion): DigestiveStructure[] {
  return structuresByRegion.get(region) || [];
}

/**
 * Get an accessory organ by ID
 */
export function getAccessoryOrgan(id: string): AccessoryOrgan | undefined {
  return accessoryOrgans.get(id);
}

/**
 * Get all accessory organs
 */
export function getAllAccessoryOrgans(): AccessoryOrgan[] {
  return Array.from(accessoryOrgans.values());
}

/**
 * Search digestive structures by name
 */
export function searchDigestiveStructures(query: string): DigestiveStructure[] {
  const lowerQuery = query.toLowerCase();
  return Array.from(digestiveStructures.values()).filter(
    (structure) =>
      structure.name.toLowerCase().includes(lowerQuery) ||
      structure.latinName?.toLowerCase().includes(lowerQuery) ||
      structure.function.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Search accessory organs by name
 */
export function searchAccessoryOrgans(query: string): AccessoryOrgan[] {
  const lowerQuery = query.toLowerCase();
  return Array.from(accessoryOrgans.values()).filter(
    (organ) =>
      organ.name.toLowerCase().includes(lowerQuery) ||
      organ.latinName?.toLowerCase().includes(lowerQuery) ||
      organ.function.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get digestive enzymes by source
 */
export function getEnzymesBySource(source: string): DigestiveEnzyme[] {
  const lowerSource = source.toLowerCase();
  return DIGESTIVE_ENZYMES.filter((enzyme) =>
    enzyme.source.toLowerCase().includes(lowerSource)
  );
}

/**
 * Get absorption sites by location
 */
export function getAbsorptionSitesByLocation(location: string): AbsorptionSite[] {
  const lowerLocation = location.toLowerCase();
  return ABSORPTION_SITES.filter((site) =>
    site.location.toLowerCase().includes(lowerLocation)
  );
}

/**
 * Get absorption sites by nutrient
 */
export function getAbsorptionSiteByNutrient(nutrient: string): AbsorptionSite | undefined {
  const lowerNutrient = nutrient.toLowerCase();
  return ABSORPTION_SITES.find((site) =>
    site.nutrient.toLowerCase().includes(lowerNutrient)
  );
}

/**
 * Get explanation at a specific level
 */
export function getExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const structure = digestiveStructures.get(id);
  if (structure) {
    return structure.explanations[`level${level}`];
  }
  const organ = accessoryOrgans.get(id);
  if (organ) {
    return organ.explanations[`level${level}`];
  }
  return undefined;
}

/**
 * Get digestive system statistics
 */
export function getDigestiveStatistics(): DigestiveStatistics {
  return {
    totalStructures: digestiveStructures.size + accessoryOrgans.size,
    giTractLength: '~9 meters (30 feet)',
    accessoryOrgans: accessoryOrgans.size,
  };
}
