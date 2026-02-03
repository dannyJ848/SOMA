/**
 * Kidney Stones (Nephrolithiasis) - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const kidneyStones: EducationalContent = {
  id: 'condition-kidney-stones',
  type: 'condition',
  name: 'Kidney Stones',
  alternateNames: ['Nephrolithiasis', 'Renal Calculi', 'Urolithiasis', 'Renal Colic'],
  hpoId: 'HP:0000787',

  levels: {
    1: {
      level: 1,
      summary: 'Kidney stones are hard deposits of minerals and salts that form inside your kidneys and can cause severe pain when passing through your urinary tract.',
      explanation: `Kidney stones develop when your urine contains more crystal-forming substances than the fluid in your urine can dilute.

**What Causes Kidney Stones:**
- Not drinking enough water
- Too much salt in your diet
- Certain medical conditions
- Family history

**Symptoms:**
- Severe pain in your back, side, or lower belly
- Pain that comes in waves
- Pink, red, or brown urine
- Nausea and vomiting
- Needing to urinate more often

**Treatment:**
- Drinking lots of water to help flush the stone out
- Pain medicine
- Medical procedures for larger stones

**Prevention:**
- Drink 8-10 glasses of water daily
- Limit salt and salty foods
- Eat more fruits and vegetables`,
      keyTerms: [
        { term: 'kidney stone', definition: 'A hard, crystalline mineral material that forms within the kidney or urinary tract' },
        { term: 'urinary tract', definition: 'The system that makes urine and carries it out of your body including kidneys, ureters, bladder, and urethra' },
        { term: 'flank', definition: 'The area on the side of your body between your ribs and hip bone where kidney pain is felt' },
      ],
      analogies: [
        'A kidney stone is like a pebble getting stuck in a narrow garden hose—it blocks the flow and creates pressure behind it.',
        'Think of urine like a cup of tea—if you put too much sugar in it and don\'t stir enough, the sugar settles at the bottom and forms crystals.'
      ],
      examples: [
        'A 35-year-old man presents with sudden severe pain on his right side that radiates to his groin, along with blood in his urine. This is typical of a kidney stone.',
        'After not drinking enough water during a summer hiking trip, a woman develops severe back pain and nausea—she may have developed a kidney stone.'
      ],
      patientCounselingPoints: [
        'Drink at least 2-3 liters of water every day to keep your urine light yellow or clear',
        'If you have a stone, strain your urine to catch it for analysis',
        'Seek immediate care for fever or inability to urinate with stone pain',
        'Reduce sodium intake to less than 2,300 mg per day'
      ],
    },
    2: {
      level: 2,
      summary: 'Kidney stones are classified by composition (calcium, uric acid, struvite, cystine), with management depending on stone size, location, and composition.',
      explanation: `## Types of Kidney Stones

| Stone Type | Percentage | Appearance on X-ray | Common Causes |
|------------|------------|---------------------|---------------|
| Calcium oxalate | 70-80% | Visible (radiopaque) | High calcium, oxalate, low citrate |
| Calcium phosphate | 10-15% | Visible (radiopaque) | Hyperparathyroidism, renal tubular acidosis |
| Uric acid | 5-10% | Invisible (radiolucent) | Low urine pH, gout, high purine diet |
| Struvite | 5-10% | Visible (radiopaque) | Chronic UTI with urease-producing bacteria |
| Cystine | 1-2% | Faintly visible | Genetic disorder (cystinuria) |

## Risk Factors
- **Dehydration:** Low urine volume increases stone risk
- **Diet:** High sodium, high animal protein, high oxalate foods
- **Medical:** Obesity, diabetes, inflammatory bowel disease
- **Family:** First-degree relatives with stones doubles your risk

## Symptoms
- **Renal colic:** Sudden, severe, waxing-waning flank pain
- **Radiation:** Pain often radiates to groin as stone moves down ureter
- **Urinary:** Frequency, urgency, dysuria when stone near bladder
- **GI:** Nausea, vomiting due to pain intensity

## Diagnostic Tests
- **Urinalysis:** Blood (hematuria), crystals, pH
- **CT scan:** Non-contrast CT is the gold standard
- **Ultrasound:** Good for children and pregnant women`,
      keyTerms: [
        { term: 'nephrolithiasis', definition: 'The medical term for kidney stones' },
        { term: 'renal colic', definition: 'Severe pain caused by a kidney stone, typically in the flank area' },
        { term: 'hematuria', definition: 'Blood in the urine' },
        { term: 'radiopaque', definition: 'Visible on X-ray; most kidney stones show up on X-ray except uric acid stones' },
        { term: 'radiolucent', definition: 'Not visible on X-ray; uric acid stones are an example' },
      ],
      analogies: [
        'The ureter is like a narrow tube that a stone must travel through—like trying to swallow a marble.'
      ],
      examples: [
        'A CT scan shows a 4mm stone in the distal ureter. This size stone has an 80% chance of passing on its own.',
        'A patient with gout and acidic urine pH of 5.0 is at risk for uric acid stones that won\'t show on plain X-rays.'
      ],
      patientCounselingPoints: [
        'Most stones smaller than 5mm will pass on their own',
        'Drink enough water to make 2-2.5 liters of urine daily',
        'Limit animal protein to 6-8 ounces per day',
        'Reduce salt intake to help prevent calcium stones'
      ],
    },
    3: {
      level: 3,
      summary: 'Nephrolithiasis results from supersaturation, nucleation, and crystal aggregation in the urine, with 24-hour urine analysis guiding stone-specific prevention strategies.',
      explanation: `## Pathophysiology of Stone Formation

**Four Key Steps:**

1. **Supersaturation:** Urine concentration exceeds solubility product of stone-forming salts
2. **Nucleation:** Crystal formation begins on a surface (like Randall's plaques)
3. **Crystal Growth and Aggregation:** Crystals enlarge and clump together
4. **Retention:** Stones anchor to renal papilla rather than washing away

## Calcium Stone Mechanisms
- **Absorptive hypercalciuria:** Increased gut calcium absorption (60% of calcium stone formers)
- **Renal hypercalciuria:** Impaired renal calcium reabsorption
- **Resorptive hypercalciuria:** Hyperparathyroidism causing bone resorption
- **Hyperoxaluria:** Increased oxalate from diet or enteric hyperabsorption
- **Hypocitraturia:** Citrate normally inhibits stone formation

## Diagnostic Evaluation

**Initial Workup:**
- Non-contrast CT abdomen/pelvis (stone protocol)
- Urinalysis with microscopy
- Basic metabolic panel (calcium, creatinine, bicarbonate)
- Parathyroid hormone if hypercalcemic

**24-Hour Urine Analysis (after stone episode):**
- Volume, pH, calcium, oxalate, citrate, uric acid, sodium, creatinine, magnesium

**Chemistry Goals:**
- Urine volume > 2.0 L/day
- Urine citrate > 450 mg/day (women) or > 320 mg/day (men)
- Urine calcium < 200 mg/day
- Urine oxalate < 40 mg/day
- Urine sodium < 150 mEq/day

## Stone-Specific Management

**Calcium Stones:**
- Thiazide diuretic (reduces urinary calcium)
- Potassium citrate (increases citrate, alkalinizes urine)
- Low sodium diet (< 2,300 mg/day)
- Normal calcium intake (1,000-1,200 mg/day) WITH meals

**Uric Acid Stones:**
- Potassium citrate to raise urine pH to 6.5-7.0
- Allopurinol or febuxostat if hyperuricosuric
- Low purine diet (limit organ meats, shellfish)
- Weight loss if obese

**Struvite Stones:**
- Complete surgical removal (stones harbor bacteria)
- Antibiotics based on culture
- Acetohydroxamic acid (inhibits urease) for refractory cases

**Cystine Stones:**
- High fluid intake (> 3-4 L/day)
- Urine alkalinization to pH > 7.5
- Tiopronin or D-penicillamine (bind cystine)

## Medical Expulsive Therapy
- Tamsulosin 0.4 mg daily
- Increases chance of passing distal ureteral stones
- Reduces time to passage and analgesic requirements`,
      keyTerms: [
        { term: 'supersaturation', definition: 'When urine contains more dissolved substances than it can hold, leading to crystal formation' },
        { term: 'Randall\'s plaque', definition: 'Calcified plaques on renal papillary tips that serve as nucleation sites for calcium stones' },
        { term: 'hypercalciuria', definition: 'Excessive calcium in the urine (>250 mg/day for women, >300 mg/day for men)' },
        { term: 'hypocitraturia', definition: 'Low levels of citrate in urine, removing a natural inhibitor of stone formation' },
        { term: 'hyperoxaluria', definition: 'Excessive oxalate in the urine, promoting calcium oxalate stone formation' },
        { term: 'urease', definition: 'Enzyme produced by some bacteria that splits urea, raising urine pH and promoting struvite stones' },
      ],
      clinicalNotes: 'Hypocitraturia is the most common metabolic abnormality in calcium stone formers. Thiazide diuretics are first-line for recurrent calcium stones with hypercalciuria. Low dietary calcium INCREASES stone risk because calcium binds oxalate in the gut.',
    },
    4: {
      level: 4,
      summary: 'Complex stone management addresses staghorn calculi, genetic stone disorders, surgical techniques, and stone prevention in special populations including bariatric surgery patients.',
      explanation: `## Staghorn Calculi

**Definition:** Large branching stones filling the renal pelvis and calyces

**Characteristics:**
- Usually struvite (magnesium ammonium phosphate)
- Associated with chronic UTI from urease-producing organisms
- Proteus, Klebsiella, Pseudomonas, Providencia species
- Can destroy kidney function if untreated

**Management:**
- **PCNL (Percutaneous Nephrolithotomy):** First-line treatment
- Multiple procedures often required
- Complete stone removal essential
- Culture-directed antibiotics post-op

**Contraindication to ESWL:**
- Struvite stones are relatively hard and brittle
- ESWL rarely achieves complete clearance
- Residual fragments serve as nidus for recurrence

## Genetic Stone Disorders

**Cystinuria (Autosomal Recessive):**
- Defect in renal tubular reabsorption of cystine, ornithine, lysine, arginine
- SLC3A1 or SLC7A9 gene mutations
- Hexagonal crystals on urine microscopy
- Recurrent stones starting in childhood
- **Treatment:** Aggressive hydration, urine alkalinization to pH > 7.5, tiopronin or D-penicillamine

**Primary Hyperoxaluria (Autosomal Recessive):**
- PH1 (AGXT gene): Liver peroxisomal alanine-glyoxylate aminotransferase deficiency
- PH2 (GRHPR gene): Glyoxylate/hydroxypyruvate reductase deficiency
- PH3 (HOGA1 gene): Mitochondrial 4-hydroxy-2-oxoglutarate aldolase deficiency
- **Presentation:** Recurrent calcium oxalate stones, nephrocalcinosis, ESRD
- **Treatment:** Pyridoxine (PH1), lumasiran (PH1), combined liver-kidney transplant

**Dent Disease (X-Linked Recessive):**
- CLCN5 or OCRL1 mutations
- Low molecular weight proteinuria, hypercalciuria, nephrolithiasis
- Progressive renal failure

**Renal Tubular Acidosis (Type 1 Distal):**
- Inability to acidify urine
- Nephrocalcinosis, calcium phosphate stones
- **Treatment:** Potassium citrate, thiazides

## Special Populations

**Pregnancy:**
- Physiologic hydronephrosis may complicate diagnosis
- Ultrasound first-line (MRI without contrast if needed)
- Avoid radiation (CT) especially in first trimester
- Ureteroscopy safe if intervention needed
- Most stones pass with conservative management

**Bariatric Surgery Patients:**
- Increased oxalate absorption (especially after Roux-en-Y gastric bypass)
- Fat malabsorption increases calcium binding to fat → more free oxalate
- **Management:** High fluid intake, low oxalate diet, calcium with meals, potassium citrate

**Pediatric Stones:**
- Ultrasound first-line imaging
- Anatomic abnormalities common (UPJ obstruction, VUR)
- Metabolic evaluation mandatory
- Inherited disorders more likely

## Advanced Surgical Techniques

**Shock Wave Lithotripsy (ESWL):**
- Best for renal/proximal ureteral stones < 1 cm
- Contraindications: Pregnancy, bleeding diathesis, untreated UTI, severe obesity
- Complications: Steinstrasse, hematoma, residual fragments

**Ureteroscopy (URS):**
- Semirigid or flexible scopes
- Laser lithotripsy (Holmium:YAG)
- Stone basket extraction
- Can reach any ureteral or renal stone

**Percutaneous Nephrolithotomy (PCNL):**
- Standard for stones > 2 cm
- Tract through back into kidney
- Ultrasonic or laser lithotripsy
- Higher complication rate but most effective for large stones

**Mini-PCNL and Micro-PCNL:**
- Smaller tracts (12-20 Fr vs standard 24-30 Fr)
- Lower bleeding risk
- For medium-sized stones (1.5-2 cm)

**Robot-Assisted Stone Surgery:**
- Complex pyeloplasty with stone removal
- Anomalous kidney stone management`,
      keyTerms: [
        { term: 'staghorn calculus', definition: 'A large branching kidney stone that fills the renal pelvis and extends into multiple calyces' },
        { term: 'ESWL', definition: 'Extracorporeal shock wave lithotripsy; non-invasive breaking of stones using sound waves from outside the body' },
        { term: 'PCNL', definition: 'Percutaneous nephrolithotomy; minimally invasive surgery to remove large kidney stones through a small incision' },
        { term: 'nephrocalcinosis', definition: 'Diffuse calcium deposition in the renal parenchyma, visible on imaging' },
        { term: 'UPJ obstruction', definition: 'Blockage where the renal pelvis connects to the ureter, causing hydronephrosis and stones' },
        { term: 'Steinstrasse', definition: 'Stone street; pile of stone fragments blocking the ureter after ESWL' },
        { term: 'lumasiran', definition: 'siRNA therapy for primary hyperoxaluria type 1 that reduces hepatic oxalate production' },
      ],
      clinicalNotes: 'Staghorn calculi are surgical emergencies when associated with infection—they can cause sepsis and renal destruction. All pregnant women with stones should have postpartum metabolic evaluation due to high recurrence risk.',
    },
    5: {
      level: 5,
      summary: 'Precision stone prevention integrates genetic testing, microbiome analysis, and novel therapeutics targeting oxalate absorption and crystallization, while endourologic innovation improves stone removal.',
      explanation: `## Precision Medicine in Stone Disease

**Genetic Testing Indications:**
- Early-onset stone disease (< 25 years)
- Family history of stones
- Consanguinity
- Bilateral stones or nephrocalcinosis
- Failure of standard preventive measures

**Available Genetic Panels:**
- Primary hyperoxaluria genes (AGXT, GRHPR, HOGA1)
- Cystinuria genes (SLC3A1, SLC7A9)
- Dent disease genes (CLCN5, OCRL1)
- Renal tubular acidosis genes (SLC4A1, ATP6V0A4, ATP6V1B1)
- Calcium-sensing receptor (CASR) for familial hypocalciuric hypercalcemia

**Polygenic Risk Scores:**
- Genome-wide association studies (GWAS) have identified multiple loci
- CASR, CLDN14, SLC34A1, SLC34A3, UMOD, ALPL, TRPV5, TRPV6
- May allow risk stratification and personalized prevention

## Microbiome and Stone Disease

**Oxalobacter formigenes:**
- Anaerobic bacteria that degrades dietary oxalate in colon
- Colonization rates lower in stone formers
- Probiotic approaches under investigation
- Challenges: Strain selection, delivery method, colonization persistence

**Urinary Microbiome (Urobiome):**
- Expanded culture techniques reveal diverse microbiota
- Dysbiosis may contribute to stone formation
- Lactobacillus dominance may be protective
- Research ongoing for probiotic prevention

**Gut-Kidney Axis:**
- Short-chain fatty acids influence stone risk
- Diet-induced microbiome changes affect oxalate handling
- Potential for microbiome-targeted therapies

## Novel Therapeutics

**Oxalate Reduction:**
- **Lumasiran:** siRNA targeting HAO1 (glycolate oxidase); reduces hepatic oxalate production in PH1
- **Nedosiran:** siRNA targeting LDHA; alternative for PH1
- **Oxalate-degrading enzymes:** Oral oxalate decarboxylase in development
- **Oxalobacter formulations:** Live biotherapeutic approach

**Crystallization Inhibitors:**
- Novel citrate formulations (slow-release)
- Engineered macromolecules mimicking nephrocystin
- Phytate (inositol hexaphosphate) as dietary inhibitor
- Magnesium supplementation mechanisms

**Targeted Therapies by Stone Type:**
- **Calcium stones:** Monoclonal antibodies against stone nidus formation
- **Uric acid:** Recombinant uricase analogs
- **Cystine:** Cystine-binding thiol drugs (tiopronin) with improved formulations

## Surgical Innovation

**Laser Technology:**
- **Thulium fiber laser (TFL):** Superior dusting capability
- **Moses technology:** Pulse modulation for better lithotripsy
- **Superpulsed lasers:** Faster stone ablation

**Device Innovation:**
- **Single-use digital ureteroscopes:** Eliminate sterilization, always optimal optics
- **Ultra-mini PCNL:** 4-8 Fr tracts, reduced morbidity
- **Needle scopes:** Visualization during percutaneous access
- **3D printed models:** Preoperative planning

**Robotic-Assisted Procedures:**
- Robotic flexible ureteroscopy
- Robotic PCNL in development
- Improved ergonomics and precision

## Artificial Intelligence in Stone Management

**Predictive Analytics:**
- Stone composition prediction from CT Hounsfield units
- Spontaneous passage probability calculators
- Treatment outcome prediction models

**Intraoperative Guidance:**
- Real-time stone identification during ureteroscopy
- Automated stone fragmentation assessment
- Laser-tissue interaction optimization

**Diagnostic AI:**
- Automated stone detection and measurement
- Differentiation stone vs. phlebolith on CT
- Ultrasound stone detection with AI enhancement

## Monitoring and Prevention Technology

**Wearable Technology:**
- Hydration monitoring
- Urine pH tracking
- Metabolic parameter trending

**Mobile Applications:**
- Dietary tracking and analysis
- Medication adherence
- Fluid intake monitoring

**Home Monitoring:**
- Urine dipstick interpretation
- 24-hour urine collection guidance
- Telemedicine integration

## Guidelines and Quality

**AUA/EAU Guidelines Alignment:**
- Evidence-based stone prevention
- Surgical technique standardization
- Metabolic evaluation consensus
- Quality metrics for stone centers

**Value-Based Care:**
- Cost-effectiveness of prevention vs. treatment
- Hospital readmission reduction
- Patient-reported outcome measures

**Future Directions:**
- Gene therapy for monogenic stone disorders
- Personalized nutrition based on microbiome
- Nanoparticle-delivered crystal inhibitors
- Bioengineered kidney tissue`,
      keyTerms: [
        { term: 'HAO1', definition: 'Gene encoding glycolate oxidase; target of lumasiran for primary hyperoxaluria' },
        { term: 'GWAS', definition: 'Genome-wide association studies; method to identify genetic variants associated with disease' },
        { term: 'thulium fiber laser', definition: 'Newer laser technology for stone fragmentation with superior dusting capability compared to holmium laser' },
        { term: 'urobiome', definition: 'The community of microorganisms inhabiting the urinary tract' },
        { term: 'dysbiosis', definition: 'Imbalance in microbial communities; associated with various diseases including stone formation' },
        { term: 'phytate', definition: 'Plant compound that inhibits calcium crystal formation; potential dietary preventive agent' },
        { term: 'Moses technology', definition: 'Pulse modulation technology for holmium lasers that improves lithotripsy efficiency' },
      ],
      clinicalNotes: 'Lumasiran is FDA-approved for primary hyperoxaluria type 1, reducing urinary oxalate by up to 65%. Genetic testing should be considered for all stone formers under 25 with recurrent disease or family history. Thulium fiber laser represents a significant advance in laser lithotripsy but is not yet widely available.',
    },
  },

  media: [],
  citations: [
    { id: 'aua-stones-2023', type: 'article', title: 'AUA/Endourological Society Guideline on Surgical Management of Stones', source: 'Journal of Urology', authors: ['Matlaga BR', 'Best SL', 'Eisner BH'] },
    { id: 'eua-stones-2023', type: 'article', title: 'EAU Guidelines on Urolithiasis', source: 'European Association of Urology' },
    { id: 'pearle-stones-2022', type: 'article', title: 'Medical Management of Kidney Stones', source: 'AUA Update Series' },
  ],
  crossReferences: [
    { targetId: 'condition-gout', targetType: 'condition', relationship: 'related', label: 'Gout' },
    { targetId: 'condition-hyperparathyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperparathyroidism' },
    { targetId: 'condition-uti', targetType: 'condition', relationship: 'related', label: 'Urinary Tract Infection' },
  ],
  tags: { systems: ['renal', 'urinary'], topics: ['urology', 'nephrology'], keywords: ['kidney stones', 'nephrolithiasis', 'renal calculi', 'renal colic', 'lithotripsy', 'hematuria'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default kidneyStones;
