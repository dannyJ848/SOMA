/**
 * GI Secretion - Comprehensive Educational Content
 *
 * Covers gastric acid secretion, bile production, pancreatic enzymes,
 * GI hormones (gastrin, secretin, CCK), and mucosal defense mechanisms.
 */

import { EducationalContent } from '../../types';

export const giSecretion: EducationalContent = {
  id: 'physiology-gi-secretion',
  type: 'process',
  name: 'Gastrointestinal Secretion',
  alternateNames: [
    'GI secretion',
    'Digestive secretions',
    'Secrecion gastrointestinal (Spanish)',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Your digestive system makes special juices that break down food - your stomach makes acid, your liver makes bile to dissolve fats, and your pancreas makes enzymes to finish the job.',
      explanation: `Your body makes about 7 liters (almost 2 gallons!) of digestive juices every day. Each type of juice has a special job.

**The Main Digestive Juices:**

1. **Saliva (mouth)** - Keeps your mouth wet and starts breaking down starchy foods like bread and potatoes. You make about 1 liter per day.

2. **Stomach acid** - Your stomach makes a very strong acid (hydrochloric acid) that kills germs in food and helps break down proteins. It also makes a thick mucus layer to protect itself from the acid.

3. **Bile (from the liver)** - This greenish-yellow liquid acts like dish soap. It breaks up big blobs of fat into tiny droplets so enzymes can work on them. Bile is stored in the gallbladder until you eat a fatty meal.

4. **Pancreatic juice** - The pancreas sends a mixture of enzymes and bicarbonate (like baking soda) into the small intestine. The enzymes break down proteins, fats, and carbohydrates. The bicarbonate neutralizes stomach acid.

5. **Intestinal juice** - The small intestine itself makes fluid that helps finish digestion.

**Hormones - The Messengers:**

Your gut makes hormones (chemical messengers) that tell each organ when to release its juice:
- **Gastrin** tells the stomach to make more acid
- **Secretin** tells the pancreas to release bicarbonate
- **CCK** tells the gallbladder to squeeze out bile and the pancreas to release enzymes

**En espanol:** Tu sistema digestivo produce jugos especiales para descomponer la comida: el estomago produce acido, el higado produce bilis para disolver las grasas, y el pancreas produce enzimas para terminar el trabajo.`,
      keyTerms: [
        {
          term: 'stomach acid',
          definition:
            'A strong acid (hydrochloric acid) made by your stomach to kill germs and help digest proteins',
        },
        {
          term: 'bile',
          definition:
            'A greenish-yellow liquid from the liver that breaks up fat, like dish soap',
        },
        {
          term: 'pancreas',
          definition:
            'An organ behind the stomach that makes enzymes to digest food and bicarbonate to neutralize acid',
        },
        {
          term: 'hormone',
          definition:
            'A chemical messenger that travels through the blood to tell organs what to do',
        },
      ],
      analogies: [
        'Bile is like dish soap in your sink - it breaks big greasy blobs into tiny droplets that are easier to clean up.',
        'The pancreas is like a chemistry lab that mixes the perfect combination of chemicals to dissolve food.',
        'Gastrin, secretin, and CCK are like text messages sent between your gut organs to coordinate the work of digestion.',
      ],
      examples: [
        'When you smell food cooking, your mouth waters and your stomach starts making acid even before you take a bite - your body is getting ready!',
        'People who have their gallbladder removed can still digest fat because the liver still makes bile, it just drips continuously instead of being stored and released.',
      ],
      patientCounselingPoints: [
        'Antacids work by neutralizing stomach acid, just like the bicarbonate your pancreas makes naturally.',
        'Eating smaller meals puts less demand on your digestive juices.',
        'Some medications work by reducing stomach acid production to treat heartburn and ulcers.',
      ],
    },
    2: {
      level: 2,
      summary:
        'The GI tract secretes about 7 liters daily of fluid containing acid, enzymes, bile, bicarbonate, and mucus. Secretion is regulated by three key hormones: gastrin (stimulates acid), secretin (stimulates bicarbonate), and CCK (stimulates bile and pancreatic enzymes).',
      explanation: `## Overview of GI Secretions

| Source | Daily Volume | Key Components | pH |
|--------|-------------|----------------|-----|
| Saliva | 1,000 mL | Amylase, lipase, mucin, IgA, bicarbonate | 6.0-7.0 |
| Gastric juice | 2,000 mL | HCl, pepsinogen, intrinsic factor, mucus | 1.0-3.5 |
| Bile | 500-1,000 mL | Bile salts, cholesterol, bilirubin, phospholipids | 7.6-8.6 |
| Pancreatic juice | 1,000-1,500 mL | Enzymes (trypsin, lipase, amylase), bicarbonate | 8.0-8.3 |
| Small intestine | 1,000 mL | Mucus, electrolytes, water | 7.5-8.0 |
| Large intestine | 200 mL | Mucus, bicarbonate | 7.5-8.0 |

## Gastric Acid Secretion

**Parietal cells** in the stomach lining produce hydrochloric acid (HCl):
- H+/K+-ATPase (proton pump) on the cell surface pumps H+ into the stomach
- This is the most powerful acid-secreting mechanism in the body
- Creates a pH of 1-2 in the stomach lumen (a million-fold H+ concentration gradient)

**Three Phases of Gastric Secretion:**

1. **Cephalic phase (30%):** Sight, smell, taste, or thought of food stimulates the vagus nerve, which activates acid secretion before food arrives.

2. **Gastric phase (60%):** Food in the stomach causes distension and amino acids trigger gastrin release from G-cells, which stimulates more acid.

3. **Intestinal phase (10%):** Small amounts of gastrin from the duodenum contribute; but intestinal feedback mostly inhibits further acid secretion.

**Three Stimulators of the Parietal Cell:**
- Acetylcholine (from vagus nerve) - via M3 receptor
- Gastrin (from G-cells) - via CCK-B receptor
- Histamine (from ECL cells) - via H2 receptor (most important amplifier)

**Inhibition:**
- Somatostatin (from D-cells) inhibits both G-cells and parietal cells
- Low pH (< 2) triggers somatostatin release (negative feedback)
- Secretin and CCK from the duodenum inhibit gastric acid

## Bile

- Produced by hepatocytes in the liver
- Stored and concentrated in the gallbladder (5-10x)
- Released when CCK causes gallbladder contraction
- **Primary bile acids:** Cholic acid and chenodeoxycholic acid (made from cholesterol)
- **Secondary bile acids:** Deoxycholic acid and lithocholic acid (modified by gut bacteria)
- Bile salts are recycled: 95% reabsorbed in the terminal ileum and returned to liver (enterohepatic circulation)

## Pancreatic Secretion

**Two types of cells, two products:**
- **Acinar cells:** Produce digestive enzymes (stimulated by CCK and ACh)
- **Ductal cells:** Produce bicarbonate-rich fluid (stimulated by secretin)

**Key Pancreatic Enzymes:**
| Enzyme | Substrate | Notes |
|--------|-----------|-------|
| Trypsin | Proteins | Activated by enterokinase |
| Chymotrypsin | Proteins | Activated by trypsin |
| Pancreatic lipase | Triglycerides | Needs colipase |
| Pancreatic amylase | Starch | Active form (no proenzyme) |
| Phospholipase A2 | Phospholipids | Activated by trypsin |

## The Big Three Hormones

| Hormone | Source | Stimulus | Actions |
|---------|--------|----------|---------|
| Gastrin | G-cells (antrum) | Amino acids, distension, vagal input | Stimulates acid secretion, growth of gastric mucosa |
| Secretin | S-cells (duodenum) | Acid in duodenum | Stimulates pancreatic bicarbonate, inhibits gastric acid |
| CCK | I-cells (duodenum/jejunum) | Fatty acids, amino acids | Stimulates gallbladder contraction, pancreatic enzymes, delays gastric emptying |

**En espanol:** El tracto GI secreta unos 7 litros diarios de liquido con acido, enzimas, bilis, bicarbonato y moco. La secrecion esta regulada por tres hormonas clave: gastrina, secretina y CCK.`,
      keyTerms: [
        {
          term: 'parietal cell',
          definition:
            'Stomach cell that produces hydrochloric acid using the H+/K+-ATPase proton pump',
          pronunciation: 'pah-RY-eh-tal',
        },
        {
          term: 'gastrin',
          definition:
            'Hormone from G-cells in the stomach antrum that stimulates acid secretion and mucosal growth',
        },
        {
          term: 'secretin',
          definition:
            'Hormone from S-cells in the duodenum released by acid; stimulates pancreatic bicarbonate secretion',
          pronunciation: 'seh-KREE-tin',
        },
        {
          term: 'cholecystokinin (CCK)',
          definition:
            'Hormone from I-cells in the duodenum/jejunum released by fat and amino acids; stimulates gallbladder contraction and pancreatic enzyme secretion',
          pronunciation: 'KOH-leh-sis-toh-KY-nin',
        },
        {
          term: 'enterohepatic circulation',
          definition:
            'The recycling pathway where bile salts are reabsorbed in the terminal ileum and returned to the liver for reuse',
        },
        {
          term: 'proton pump',
          definition:
            'H+/K+-ATPase enzyme on parietal cells that actively pumps H+ ions into the stomach lumen, creating acid',
        },
      ],
      analogies: [
        'The three phases of gastric secretion are like a three-stage rocket: the cephalic phase fires up first (seeing food), the gastric phase provides the main thrust (food in stomach), and the intestinal phase provides fine-tuning.',
        'Enterohepatic circulation is like a bus route - bile salts travel from the liver to the intestine and back to the liver, making the circuit 6-8 times per day.',
        'Somatostatin is like the brake pedal for digestion - it slows down acid production when there is too much.',
      ],
      examples: [
        'Proton pump inhibitors (PPIs) like omeprazole block the H+/K+-ATPase, reducing acid production by up to 90% - this is why they are so effective for heartburn and ulcers.',
        'H. pylori bacteria survive in the stomach by producing urease, which converts urea to ammonia, neutralizing the acid around the bacteria.',
      ],
    },
    3: {
      level: 3,
      summary:
        'GI secretion involves coordinated output from salivary glands, gastric mucosa, hepatobiliary system, pancreas, and intestinal epithelium, regulated by the enteric nervous system, vagal pathways, and a hormonal axis centered on gastrin, secretin, and CCK, with somatostatin providing negative feedback.',
      explanation: `## Salivary Secretion

**Gland Types:**
- Parotid: Serous (amylase-rich); CN IX (glossopharyngeal)
- Submandibular: Mixed (serous + mucous); CN VII (facial)
- Sublingual: Mucous-predominant; CN VII (facial)

**Secretory Mechanism:**
- Acinar cells produce primary secretion (isotonic, plasma-like)
- Ductal cells modify: Absorb Na+ and Cl-, secrete K+ and HCO3-
- Final saliva is hypotonic (ductal cells impermeable to water)
- At high flow rates: Less time for ductal modification = more isotonic

**Regulation:**
- Both sympathetic and parasympathetic stimulate secretion
- Parasympathetic (ACh): High volume, watery, enzyme-rich
- Sympathetic (NE): Low volume, viscous, mucin-rich
- Pavlovian reflex: Conditioned salivary response to food-associated stimuli

## Gastric Acid: Parietal Cell Mechanism

**H+/K+-ATPase (Proton Pump):**
1. CO2 + H2O -> H2CO3 (carbonic anhydrase)
2. H2CO3 -> H+ + HCO3-
3. H+ pumped into lumen by H+/K+-ATPase (exchanges K+)
4. HCO3- exits basolaterally via Cl-/HCO3- exchanger ("alkaline tide")
5. Cl- enters lumen through apical Cl- channels (CFTR-like)
6. K+ recycled back to lumen through apical K+ channels
7. Net secretion: HCl into lumen; HCO3- into blood

**Parietal Cell Receptors and Signaling:**
| Receptor | Ligand | Second Messenger | Effect |
|----------|--------|-----------------|--------|
| M3 (muscarinic) | ACh | IP3/Ca2+ | Stimulate acid |
| CCK-B | Gastrin | IP3/Ca2+ | Stimulate acid |
| H2 (histamine) | Histamine | cAMP | Stimulate acid (amplifier) |
| Somatostatin | SST | Decrease cAMP | Inhibit acid |
| Prostaglandin | PGE2 | Decrease cAMP | Inhibit acid |

**ECL Cell-Histamine Axis:**
- ECL (enterochromaffin-like) cells are the primary mediator of acid secretion
- Both gastrin and ACh stimulate ECL cells to release histamine
- Histamine acts on H2 receptors in a paracrine fashion
- This is why H2 blockers (ranitidine, famotidine) are effective despite not blocking gastrin/ACh directly

**Gastric Mucosal Defense:**
- Mucus-bicarbonate barrier: Gel layer traps HCO3-, creating pH gradient (pH 1-2 at surface, pH 7 at epithelium)
- Epithelial tight junctions and rapid turnover (3-5 days)
- Mucosal blood flow: Removes back-diffused acid
- Prostaglandins (PGE2, PGI2): Stimulate mucus and bicarbonate, maintain blood flow
- NSAIDs inhibit COX-1/2, reducing prostaglandin synthesis = ulcer risk

## Pancreatic Secretion: Detailed Mechanisms

**Acinar Cell Secretion:**
- CCK and ACh activate IP3/Ca2+ pathway
- Zymogen granule exocytosis (proenzymes stored safely)
- Trypsin inhibitor (SPINK1) provides intrapancreatic protection
- Enterokinase in duodenum activates trypsinogen to trypsin
- Trypsin then activates all other proenzymes (activation cascade)

**Ductal Cell Secretion:**
- Secretin activates cAMP pathway
- CFTR: Cl- channel on apical membrane
- Cl-/HCO3- exchanger (SLC26A6) on apical membrane
- Cl- recycled through CFTR, HCO3- secreted into duct
- Final concentration: Up to 140 mEq/L HCO3- (highest in the body)
- Cystic fibrosis: CFTR dysfunction leads to thick, enzyme-rich secretions that block ducts

**Regulation Summary:**
- Cephalic phase: Vagal stimulation; ACh acts on acinar cells (enzyme-rich secretion)
- Gastric phase: Vagovagal reflexes; moderate enzyme secretion
- Intestinal phase: Major phase; CCK (enzymes) + secretin (bicarbonate)

## Bile Physiology

**Bile Acid Synthesis:**
- Primary bile acids synthesized from cholesterol in hepatocytes
- Rate-limiting enzyme: Cholesterol 7-alpha-hydroxylase (CYP7A1)
- Conjugated with glycine or taurine before secretion
- Conjugation increases solubility at intestinal pH

**Bile Acid Pool and Enterohepatic Circulation:**
- Total pool: ~3-5 grams
- Cycles 6-8 times per day
- 95% reabsorbed in terminal ileum by ASBT (SLC10A2)
- Portal blood return to liver; hepatocyte uptake by NTCP (SLC10A1)
- 5% lost in feces = new synthesis (0.2-0.6 g/day)
- Bile acid sequestrants (cholestyramine) interrupt this cycle, upregulating synthesis and lowering LDL cholesterol

**Gallstone Formation:**
- Cholesterol stones (80%): Supersaturation of cholesterol in bile
- Pigment stones (20%): Excess unconjugated bilirubin (hemolysis, cirrhosis)
- Lithogenic bile: High cholesterol, low bile salts, low phospholipids, gallbladder stasis

## GI Hormones: Extended Family

| Hormone | Source | Stimulus | Key Actions |
|---------|--------|----------|-------------|
| Gastrin | G-cells (antrum) | AA, distension, vagus | Acid secretion, ECL histamine release, mucosal growth |
| Secretin | S-cells (duodenum) | pH < 4.5 | Pancreatic HCO3-, bile duct HCO3-, inhibits gastric acid |
| CCK | I-cells (duodenum) | FA, AA | Gallbladder contraction, pancreatic enzymes, delays gastric emptying, satiety |
| GIP | K-cells (duodenum) | Glucose, fat | Insulin secretion (incretin), inhibits acid |
| GLP-1 | L-cells (ileum/colon) | Nutrients | Insulin secretion (incretin), inhibits glucagon, slows emptying, satiety |
| Motilin | M-cells (duodenum) | Fasting | Migrating motor complex |
| Somatostatin | D-cells (antrum, pancreas) | Low pH, fat | Inhibits gastrin, acid, secretin, insulin, glucagon |
| VIP | Enteric neurons | Neural | Relaxes smooth muscle, stimulates pancreatic/intestinal secretion |

**En espanol:** La secrecion GI involucra la produccion coordinada de glandulas salivales, mucosa gastrica, sistema hepatobiliar, pancreas y epitelio intestinal, regulada por el sistema nervioso enterico, vias vagales y un eje hormonal centrado en gastrina, secretina y CCK.`,
      keyTerms: [
        {
          term: 'H+/K+-ATPase',
          definition:
            'Proton pump on parietal cell apical membrane that exchanges H+ for K+, secreting HCl; target of proton pump inhibitors (PPIs)',
        },
        {
          term: 'ECL cell',
          definition:
            'Enterochromaffin-like cell in gastric fundus that releases histamine in response to gastrin and ACh; the primary paracrine amplifier of acid secretion',
        },
        {
          term: 'alkaline tide',
          definition:
            'Transient increase in blood pH after a meal due to HCO3- exported basolaterally from parietal cells during acid secretion',
        },
        {
          term: 'CYP7A1',
          definition:
            'Cholesterol 7-alpha-hydroxylase; rate-limiting enzyme in bile acid synthesis from cholesterol; regulated by FXR feedback',
        },
        {
          term: 'CFTR',
          definition:
            'Cystic fibrosis transmembrane conductance regulator; Cl- channel on pancreatic ductal cells essential for bicarbonate secretion; mutations cause cystic fibrosis',
        },
        {
          term: 'somatostatin',
          definition:
            'Inhibitory hormone from D-cells that suppresses gastrin, acid, secretin, insulin, and glucagon; the master brake of GI secretion',
        },
      ],
      clinicalNotes:
        'NSAIDs cause peptic ulcers by inhibiting COX-1-derived prostaglandins that maintain mucosal blood flow and mucus/bicarbonate secretion. Zollinger-Ellison syndrome (gastrinoma) produces massive gastrin hypersecretion causing severe peptic ulceration and diarrhea; diagnose with fasting serum gastrin > 1000 pg/mL or secretin stimulation test. Cystic fibrosis impairs pancreatic ductal HCO3- secretion due to CFTR mutation, leading to inspissated secretions, duct obstruction, and eventual exocrine insufficiency.',
    },
    4: {
      level: 4,
      summary:
        'GI secretion involves integrated cellular signaling cascades in parietal cells, acinar cells, ductal cells, and cholangiocytes, regulated by receptor-mediated pathways (G-protein coupled, tyrosine kinase), with clinical relevance spanning acid-related diseases, pancreatic insufficiency, cholestatic disorders, and neuroendocrine tumors.',
      explanation: `## Parietal Cell: Molecular Physiology

**Tubulovesicle Trafficking:**
- Resting state: H+/K+-ATPase sequestered in intracellular tubulovesicles
- Stimulation: Tubulovesicles fuse with apical canalicular membrane
- Massive membrane expansion (5-10x surface area increase)
- Regulated by Rab11, Rab27, and VAMP-associated proteins
- Cessation: H+/K+-ATPase endocytosed back into tubulovesicles

**Proton Pump Inhibitor (PPI) Pharmacology:**
- Prodrugs: Inactive at neutral pH, activated in acidic canaliculus
- Activated PPI forms covalent disulfide bond with cysteine residues on H+/K+-ATPase
- Irreversible inhibition; new pump synthesis required (half-life ~54 hours)
- Clinical onset: 2-3 days for maximal effect (turnover of existing pumps)
- Omeprazole, esomeprazole (S-isomer), lansoprazole, pantoprazole, rabeprazole
- Vonoprazan (potassium-competitive acid blocker, P-CAB): Competitive, reversible, non-prodrug; pH-independent activation; faster onset

**Gastrin Physiology - Detail:**
- Gastrin gene (GAS) on chromosome 17
- Post-translational processing: Preprogastrin -> progastrin -> G34, G17, G14
- G17 (little gastrin): Major form from antral G-cells
- G34 (big gastrin): Major form from duodenal G-cells
- CCK-B/gastrin receptor: Shared with CCK; Gq-coupled (IP3/DAG/Ca2+)
- Trophic effects: Stimulates ECL cell, parietal cell, and colonic mucosal proliferation
- Hypergastrinemia concerns: Chronic PPI use -> elevated gastrin -> ECL hyperplasia -> rare carcinoid (type 1 gastric NET)

**Zollinger-Ellison Syndrome (Gastrinoma):**
- Fasting gastrin > 10x ULN (or > 1000 pg/mL) diagnostic
- Secretin stimulation test: Paradoxical gastrin rise > 120 pg/mL (normal G-cells suppressed by secretin)
- 60-80% malignant; most common in duodenum > pancreas
- 25% associated with MEN1 (menin gene, chromosome 11q13)

## Pancreatic Secretion: Signal Transduction

**CCK Signaling in Acinar Cells:**
- CCK-A receptor (CCK1R): Gq-coupled
- Low CCK: Physiologic; stimulates IP3/Ca2+ oscillations -> regulated exocytosis
- High CCK: Pathologic; sustained Ca2+ elevation -> premature zymogen activation -> pancreatitis
- Alcohol + smoking: Sensitize acinar cells to CCK-induced injury

**Secretin Signaling in Ductal Cells:**
- Secretin receptor: Gs-coupled -> cAMP -> PKA
- PKA phosphorylates and opens CFTR
- CFTR provides luminal Cl- for SLC26A6 (Cl-/HCO3- exchange)
- SLC26A6 and CFTR form a functional complex
- IRBIT (IP3R binding protein released with IP3): Activates both CFTR and NBCe1-B (basolateral Na+/HCO3- cotransporter)

**Cystic Fibrosis Pancreatic Disease:**
- CFTR mutations classified (I-VI) by functional defect
- Class II (F508del, most common): Misfolding, ER retention
- Pancreatic insufficiency correlates with CFTR genotype
- PI (pancreatic insufficient): Severe mutations on both alleles (~85% of CF patients)
- PS (pancreatic sufficient): At least one mild mutation (~15%)
- CFTR modulators (elexacaftor/tezacaftor/ivacaftor): Restore CFTR function, may preserve pancreatic function if started early

## Bile Acid Signaling

**Nuclear Receptor FXR (Farnesoid X Receptor):**
- Bile acids are FXR ligands (CDCA most potent)
- Hepatic FXR activation:
  - Induces SHP -> suppresses CYP7A1 (negative feedback on bile acid synthesis)
  - Induces BSEP (bile salt export pump) for canalicular bile acid secretion
  - Suppresses NTCP (reduces hepatocyte bile acid uptake under cholestatic conditions)
- Intestinal FXR activation:
  - Induces FGF19 (portal signal to liver)
  - FGF19 activates hepatic FGFR4/beta-Klotho -> suppresses CYP7A1
- FXR agonists (obeticholic acid): Approved for primary biliary cholangitis (PBC)

**TGR5 (GPBAR1) - Membrane Bile Acid Receptor:**
- G-protein coupled receptor activated by bile acids
- L-cells: Stimulates GLP-1 secretion (metabolic effects)
- Brown adipose tissue: Increases energy expenditure
- Immune cells: Anti-inflammatory
- Therapeutic target for metabolic disease

**Cholestatic Liver Disease Genetics:**
| Gene | Protein | Disease |
|------|---------|---------|
| ATP8B1 | FIC1 (aminophospholipid flippase) | PFIC1 (Byler disease) |
| ABCB11 | BSEP | PFIC2 |
| ABCB4 | MDR3 (phospholipid flippase) | PFIC3 |
| TJP2 | Tight junction protein 2 | PFIC4 |
| NR1H4 | FXR | PFIC5 |
| MYO5B | Myosin Vb | PFIC6/Microvillus inclusion disease |

## Neuroendocrine Tumor Biology

**Gastroenteropancreatic NETs:**
- Arise from enteroendocrine/islet cells
- Grading: Ki-67 index and mitotic rate (G1 < 3%, G2 3-20%, G3 > 20%)
- Functional tumors produce hormone excess syndromes
- Non-functional: Mass effect, often diagnosed late

| Tumor | Hormone | Syndrome | Key Features |
|-------|---------|----------|--------------|
| Gastrinoma | Gastrin | Zollinger-Ellison | Ulcers, diarrhea, secretin test |
| VIPoma | VIP | Verner-Morrison | Watery diarrhea, hypokalemia, achlorhydria (WDHA) |
| Glucagonoma | Glucagon | Glucagonoma syndrome | Necrolytic migratory erythema, diabetes, DVT |
| Somatostatinoma | Somatostatin | Somatostatinoma triad | Diabetes, gallstones, steatorrhea |
| Insulinoma | Insulin | Whipple triad | Hypoglycemia, most common functioning PNET |

**En espanol:** La secrecion GI involucra cascadas de senalizacion celular integradas en celulas parietales, acinares, ductales y colangiocitos, reguladas por vias mediadas por receptores, con relevancia clinica en enfermedades acido-pepticas, insuficiencia pancreatica, trastornos colostaticos y tumores neuroendocrinos.`,
      keyTerms: [
        {
          term: 'vonoprazan',
          definition:
            'Potassium-competitive acid blocker (P-CAB); reversible, competitive H+/K+-ATPase inhibitor that is pH-independent and does not require acid activation, unlike PPIs',
        },
        {
          term: 'FXR',
          definition:
            'Farnesoid X receptor; nuclear receptor activated by bile acids that controls bile acid synthesis (CYP7A1 suppression), transport, and enterohepatic signaling via FGF19',
        },
        {
          term: 'FGF19',
          definition:
            'Fibroblast growth factor 19; intestinal hormone induced by FXR activation that signals to liver via FGFR4/beta-Klotho to suppress bile acid synthesis',
        },
        {
          term: 'BSEP',
          definition:
            'Bile salt export pump (ABCB11); ATP-dependent transporter on hepatocyte canalicular membrane responsible for bile acid secretion; mutations cause PFIC2',
        },
        {
          term: 'secretin stimulation test',
          definition:
            'Diagnostic test for gastrinoma; IV secretin causes paradoxical gastrin rise (> 120 pg/mL) in gastrinoma but suppresses gastrin in normal physiology',
        },
      ],
      clinicalNotes:
        'Vonoprazan (P-CAB) provides faster and more potent acid suppression than PPIs, with particular advantage in CYP2C19 rapid metabolizers where PPI efficacy is reduced. Trikafta (elexacaftor/tezacaftor/ivacaftor) has transformed CF care; pancreatic function preservation is an active research area with early initiation. Type 1 gastric carcinoid NETs (associated with chronic atrophic gastritis/pernicious anemia and hypergastrinemia) are generally indolent and managed endoscopically, unlike type 3 sporadic gastric carcinoids which are aggressive. ASBT inhibitors (odevixibat) reduce pruritus in PFIC by interrupting enterohepatic bile acid cycling.',
    },
    5: {
      level: 5,
      summary:
        'Contemporary GI secretion science integrates ion channel biophysics, receptor pharmacology, bile acid signaling through FXR/TGR5 axes, CFTR modulator therapeutics, precision approaches to neuroendocrine tumors, and novel acid suppression strategies including P-CABs.',
      explanation: `## Acid Secretion: Translational Science

**H+/K+-ATPase Structure and Pharmacology:**
- P2-type ATPase; alpha subunit (catalytic, ~114 kDa) + beta subunit (glycosylated, ~35 kDa)
- E1-E2 catalytic cycle: E1 binds H+ (cytoplasmic) -> phosphorylation -> E2 conformational change -> H+ released luminally -> K+ bound -> dephosphorylation -> return to E1
- PPI binding: Cys813 (all PPIs), Cys822 (omeprazole, esomeprazole, lansoprazole), Cys892 (rabeprazole, pantoprazole)
- Pantoprazole: Only binds Cys813, deep in membrane domain -> slower reactivation; preferred when drug interactions concern (no CYP2C19 significant interaction)

**P-CAB Pharmacology (Vonoprazan):**
- pKa 9.4 (PPIs pKa ~4): Concentrates in acidic compartments at higher ratio
- K+-competitive binding site distinct from PPI cysteine targets
- Reversible binding; no requirement for acid-activated conversion
- Steady-state acid suppression from first dose (vs 3-5 days for PPIs)
- Japanese PHOCUS trial: Vonoprazan non-inferior to esomeprazole for erosive esophagitis healing
- H. pylori eradication: Vonoprazan-based triple therapy superior to PPI-based in meta-analyses
- FDA-approved (US) as Voquezna for erosive esophagitis and H. pylori

**Rebound Acid Hypersecretion:**
- Occurs after PPI discontinuation (ECL hyperplasia, hypergastrinemia)
- Duration: 2-4 weeks after long-term PPI use
- Can cause refractory GERD symptoms and unnecessary PPI reinitiation
- Management: Gradual taper, H2 blocker bridge, alginate supplementation

## Bile Acid Therapeutics: Expanding Landscape

**FXR Agonists:**
| Agent | Type | Indication | Status |
|-------|------|------------|--------|
| Obeticholic acid (OCA) | Steroidal FXR agonist | PBC (approved), MASH (withdrawn) | Pruritus dose-limiting |
| Tropifexor | Non-steroidal FXR agonist | MASH | Phase III |
| Cilofexor | Non-steroidal FXR agonist | PSC, MASH | Phase II |
| EDP-305 | Non-steroidal FXR agonist | MASH | Phase II |

**FXR-Independent Bile Acid Therapies:**
- Norursodeoxycholic acid (norUDCA): Side-chain shortened UDCA; undergoes cholehepatic shunting; generates HCO3--rich choleresis; Phase III for PSC
- ASBT inhibitors: Odevixibat (Bylvay, approved PFIC), maralixibat (Livmarli, approved Alagille)
- FGF19 analogues: Aldafermin; suppresses CYP7A1 and reduces bile acid pool; studied in MASH

**Bile Acid-Microbiome Axis:**
- Gut bacteria perform: Deconjugation (BSH enzymes), 7-alpha-dehydroxylation, oxidation/epimerization
- Altered microbiome = altered bile acid pool = altered FXR/TGR5 signaling
- Clostridioides difficile: Exploits bile acid metabolism; primary bile acids promote germination, secondary bile acids inhibit
- FMT efficacy in C. difficile partly mediated by restoration of secondary bile acid production

## Pancreatic Secretion: Precision Medicine

**CFTR Modulator Evolution:**
| Generation | Drugs | Target Mutations | Efficacy |
|------------|-------|-----------------|----------|
| 1st | Ivacaftor (Kalydeco) | G551D (gating) | ppFEV1 +10% |
| 2nd | Lumacaftor/ivacaftor (Orkambi) | F508del homozygous | ppFEV1 +3% |
| 3rd | Tezacaftor/ivacaftor (Symdeko) | F508del homozygous | ppFEV1 +4% |
| 4th | Elexacaftor/tezacaftor/ivacaftor (Trikafta) | At least 1 F508del | ppFEV1 +14% |

**Pancreatic Implications of CFTR Modulators:**
- Trikafta improves fecal elastase levels in some PI patients
- Earlier initiation (age 2+) may preserve pancreatic function
- PROMISE study: Ongoing evaluation of multi-organ CFTR modulator benefits
- Pancreatic sufficient patients on modulators: Monitor for pancreatitis (improved CFTR function may alter ductal physiology)

**Hereditary Pancreatitis Genetics:**
| Gene | Protein | Mechanism | Cancer Risk |
|------|---------|-----------|------------|
| PRSS1 | Cationic trypsinogen | Gain-of-function; resistant to autolysis | ~40% lifetime |
| SPINK1 | Trypsin inhibitor | Loss of intrapancreatic trypsin protection | Moderate increase |
| CTRC | Chymotrypsin C | Cannot degrade aberrant trypsin | Moderate increase |
| CPA1 | Carboxypeptidase A1 | Misfolding -> ER stress | Under study |
| CFTR | CFTR | Impaired ductal flushing | Mild increase |
| CLDN2 | Claudin-2 | Tight junction; alcohol-risk modifier | Under study |

## Neuroendocrine Tumor: Molecular Classification

**Genomic Landscape of PanNETs:**
- MEN1 mutations: 40% of sporadic PanNETs
- DAXX/ATRX mutations: ~40%; associated with ALT (alternative lengthening of telomeres)
- mTOR pathway: 15% (PTEN, TSC1/TSC2); basis for everolimus therapy
- MUTYH-associated polyposis: Increased duodenal gastrinoma risk

**Precision Therapy Approaches:**
| Agent | Mechanism | Indication | Key Trial |
|-------|-----------|------------|-----------|
| Somatostatin analogues (octreotide, lanreotide) | SST receptor agonists | Functional and G1/G2 NETs | CLARINET |
| Everolimus | mTOR inhibitor | Advanced PanNETs | RADIANT-3 |
| Sunitinib | Multi-TKI (VEGFR, PDGFR, KIT) | Advanced PanNETs | Phase III |
| 177Lu-DOTATATE (Lutathera) | PRRT (radionuclide) | SST receptor+ midgut NETs | NETTER-1 |
| Surufatinib | VEGFR/FGFR/CSF1R TKI | Extra-pancreatic NETs | SANET-ep |
| Belzutifan | HIF-2alpha inhibitor | VHL-associated PanNETs | Phase II |

**Liquid Biopsy in NETs:**
- NETest (51-gene PCR blood test): Outperforms CgA for diagnosis and monitoring
- ctDNA: Emerging for high-grade NEC
- Circulating tumor cells: Research stage

## Gastric Acid and the Microbiome

**PPI-Microbiome Effects:**
- PPIs increase gastric pH, allowing oral bacteria to colonize lower GI tract
- Associated microbiome shifts: Increased Streptococcus, Enterococcus; decreased diversity
- Epidemiologic associations: Increased C. difficile infection risk (OR 1.5-2.0)
- Increased Enterobacteriaceae: May contribute to spontaneous bacterial peritonitis risk in cirrhosis
- Magnitude of effect debated; confounding by indication is significant

**En espanol:** La ciencia contemporanea de la secrecion GI integra la biofisica de canales ionicos, la farmacologia de receptores, la senalizacion de acidos biliares a traves de los ejes FXR/TGR5, las terapeuticas moduladoras de CFTR, los enfoques de precision para tumores neuroendocrinos y las nuevas estrategias de supresion acida.`,
      keyTerms: [
        {
          term: 'P-CAB',
          definition:
            'Potassium-competitive acid blocker; class of reversible, non-prodrug H+/K+-ATPase inhibitors (vonoprazan) that provide faster, pH-independent acid suppression compared to PPIs',
        },
        {
          term: 'norUDCA',
          definition:
            'Norursodeoxycholic acid; side-chain-shortened bile acid that undergoes cholehepatic shunting and generates bicarbonate-rich choleresis; investigational for PSC',
        },
        {
          term: 'NETest',
          definition:
            '51-gene blood-based PCR panel for neuroendocrine tumor diagnosis and monitoring; superior to chromogranin A for sensitivity and specificity',
        },
        {
          term: '177Lu-DOTATATE',
          definition:
            'Lutetium-177-labeled somatostatin analogue for peptide receptor radionuclide therapy (PRRT) of somatostatin receptor-positive neuroendocrine tumors; marketed as Lutathera',
        },
        {
          term: 'cholehepatic shunting',
          definition:
            'Mechanism whereby unconjugated bile acids (e.g., norUDCA) are absorbed by cholangiocytes, returned to hepatocytes, and re-secreted, generating bicarbonate-rich bile flow',
        },
      ],
      clinicalNotes: `**Board-Relevant and Practice Pearls:**
- Vonoprazan (Voquezna) achieves near-complete acid suppression from dose 1, offering significant advantage for H. pylori eradication and acute erosive esophagitis healing
- Rebound acid hypersecretion after PPI withdrawal is a real phenomenon; taper PPIs gradually over 2-4 weeks in long-term users
- ASBT inhibitors (odevixibat, maralixibat) are the first targeted therapies for pruritus in pediatric cholestatic liver disease, addressing a previously unmet need
- Trikafta is changing the natural history of CF pancreatic disease; patients started early may maintain pancreatic sufficiency, but those already PI are unlikely to regain function
- DAXX/ATRX loss in PanNETs activates alternative lengthening of telomeres (ALT) and is associated with later but more aggressive metastatic behavior; emerging as a prognostic biomarker
- PPI-microbiome interactions are clinically relevant: in cirrhotic patients, PPI use is independently associated with increased SBP and hepatic encephalopathy risk`,
    },
  },

  media: [
    {
      id: 'parietal-cell-mechanism',
      type: 'diagram',
      filename: 'parietal-cell-mechanism.svg',
      title: 'Parietal Cell Acid Secretion Mechanism',
      description:
        'Detailed diagram of H+/K+-ATPase function, receptor signaling pathways, and ion transport in the parietal cell',
    },
    {
      id: 'gi-hormone-overview',
      type: 'diagram',
      filename: 'gi-hormones-overview.svg',
      title: 'GI Hormones Overview',
      description:
        'Summary diagram of gastrin, secretin, CCK, GIP, GLP-1, somatostatin, and motilin with sources, targets, and actions',
    },
    {
      id: 'enterohepatic-circulation',
      type: 'diagram',
      filename: 'enterohepatic-circulation.svg',
      title: 'Enterohepatic Circulation of Bile Acids',
      description:
        'Pathway diagram showing bile acid synthesis, secretion, reabsorption, and FXR/FGF19 signaling',
    },
    {
      id: 'pancreatic-secretion',
      type: 'diagram',
      filename: 'pancreatic-secretion.svg',
      title: 'Pancreatic Secretion Mechanism',
      description:
        'Acinar and ductal cell secretion with hormonal regulation by CCK and secretin',
    },
  ],

  citations: [
    {
      id: 'guyton-gi-secretion',
      type: 'textbook',
      title: 'Secretory Functions of the Alimentary Tract',
      source: 'Guyton and Hall Textbook of Medical Physiology, 14th Edition',
      chapter: '64',
    },
    {
      id: 'boron-gi-secretion',
      type: 'textbook',
      title: 'Gastric Function / Pancreatic and Salivary Glands / Hepatobiliary Function',
      source: 'Boron and Boulpaep Medical Physiology, 3rd Edition',
      chapter: '42-46',
    },
    {
      id: 'sleisenger-acid',
      type: 'textbook',
      title: 'Gastric Secretion / Zollinger-Ellison Syndrome',
      source:
        'Sleisenger and Fordtran Gastrointestinal and Liver Disease, 11th Edition',
      chapter: '49-51',
    },
    {
      id: 'openstax-digestive-secretion',
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
      targetId: 'physiology-gi-digestion-absorption',
      targetType: 'process',
      relationship: 'sibling',
      label: 'Digestion and Absorption',
    },
    {
      targetId: 'physiology-gi-motility',
      targetType: 'process',
      relationship: 'sibling',
      label: 'GI Motility',
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
    {
      targetId: 'physiology-gi-gut-brain-axis',
      targetType: 'concept',
      relationship: 'related',
      label: 'Gut-Brain Axis',
    },
  ],

  tags: {
    systems: ['gastrointestinal', 'hepatobiliary', 'endocrine'],
    topics: [
      'secretion',
      'gastric acid',
      'bile',
      'pancreatic enzymes',
      'GI hormones',
      'physiology',
    ],
    keywords: [
      'parietal cell',
      'proton pump',
      'PPI',
      'gastrin',
      'secretin',
      'CCK',
      'somatostatin',
      'bile acids',
      'FXR',
      'CFTR',
      'enterohepatic circulation',
      'Zollinger-Ellison',
      'neuroendocrine tumor',
      'vonoprazan',
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

export default giSecretion;
