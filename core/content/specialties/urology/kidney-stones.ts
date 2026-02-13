/**
 * Kidney Stones (Nephrolithiasis) - Comprehensive Educational Content
 *
 * Covers stone composition, pathophysiology, clinical presentation,
 * diagnosis, management, and prevention of urinary calculi.
 */

import { EducationalContent } from '../../types';

export const kidneyStones: EducationalContent = {
  id: 'condition-kidney-stones',
  type: 'condition',
  name: 'Kidney Stones',
  alternateNames: ['Nephrolithiasis', 'Renal Calculi', 'Urolithiasis', 'Urinary Stones', 'Renal Colic'],

  levels: {
    1: {
      level: 1,
      summary: 'Kidney stones are hard mineral deposits that form in your kidneys and can cause severe pain when they move through your urinary system.',
      explanation: `Kidney stones are small, hard "rocks" that form inside your kidneys from minerals in your urine. They can be as small as a grain of sand or as large as a golf ball!

**How Do Kidney Stones Form?**
Your kidneys filter your blood and make urine. Sometimes, minerals and salts in your urine stick together and form crystals. Over time, these crystals can grow into stones.

**Types of Kidney Stones:**
- **Calcium stones** (most common - 80%): Made from calcium and oxalate
- **Uric acid stones**: From eating too much meat or having gout
- **Struvite stones**: Caused by urinary infections
- **Cystine stones**: Rare, caused by an inherited condition

**Symptoms:**
Most stones don't cause symptoms while sitting in the kidney. But when a stone moves into the ureter (the tube to your bladder), it causes:
- Severe pain in your side and back (called "renal colic")
- Pain that comes in waves and shifts locations
- Pain when urinating
- Pink, red, or brown urine (blood)
- Nausea and vomiting
- Frequent urination

**Risk Factors:**
- Not drinking enough water
- Eating too much salt or protein
- Being overweight
- Family history of kidney stones
- Certain medications

**Treatment:**
- **Small stones**: Drink lots of water and wait for them to pass (can take days to weeks)
- **Pain medicine**: Stones can be very painful!
- **Large stones**: May need procedures to break them up or remove them

**Prevention:**
- Drink 2-3 liters of water daily
- Reduce salt intake
- Eat moderate amounts of protein`,
      keyTerms: [
        { term: 'kidney stone', definition: 'A hard deposit made of minerals that forms in the kidney' },
        { term: 'renal colic', definition: 'Severe, crampy pain caused by a kidney stone blocking urine flow' },
        { term: 'ureter', definition: 'The tube that carries urine from the kidney to the bladder' },
        { term: 'calcium oxalate', definition: 'The most common material that kidney stones are made of' },
      ],
      analogies: [
        'A kidney stone is like a pebble that forms in your plumbing pipes from mineral buildup.',
        'When a stone gets stuck in the ureter, it is like a rock blocking a garden hose - pressure builds up and causes pain.',
        'Drinking water is like flushing your pipes to prevent mineral deposits from forming.',
      ],
      examples: [
        'A 35-year-old man wakes up at 3 AM with sudden severe pain in his right side - he cannot find a comfortable position. This is typical renal colic from a kidney stone.',
        'A woman notices her urine looks pink after exercising - a small kidney stone may have scratched her urinary tract as it passed.',
      ],
    },
    2: {
      level: 2,
      summary: 'Nephrolithiasis involves the crystallization of urinary solutes into calculi, with calcium oxalate being most common, presenting with acute flank pain and managed based on stone size, location, and composition.',
      explanation: `## Epidemiology
- Lifetime prevalence: 10-15% in developed countries
- Male:Female ratio: 2:1 (gap narrowing)
- Peak age: 40-60 years
- Recurrence rate: 50% at 5 years without prevention

## Stone Composition

| Type | Frequency | Characteristics |
|------|-----------|-----------------|
| Calcium oxalate | 70-80% | Most common; radiopaque on X-ray |
| Calcium phosphate | 10-20% | Often mixed with oxalate; associated with renal tubular acidosis |
| Uric acid | 5-10% | Radiolucent; associated with gout, acidic urine |
| Struvite | 5-15% | "Infection stones"; urease-producing bacteria |
| Cystine | 1-2% | Genetic disorder; hexagonal crystals |

## Pathophysiology

**Stone Formation Requires:**
1. **Supersaturation**: Urine contains more solute than it can dissolve
2. **Nucleation**: Initial crystal formation
3. **Aggregation**: Crystals stick together
4. **Retention**: Stone attaches to kidney epithelium

**Protective Factors (Inhibitors):**
- Citrate (binds calcium)
- Magnesium
- Pyrophosphate
- Tamm-Horsfall protein

## Clinical Presentation

**Renal Colic:**
- Sudden onset severe flank pain
- Radiates to groin/testicle/labia as stone descends
- Colicky (waves of pain)
- Patient cannot find comfortable position (unlike peritonitis)
- Associated nausea/vomiting

**Pain Location by Stone Position:**
- Upper ureter: Flank pain
- Mid ureter: Lower abdominal pain
- Distal ureter/UVJ: Dysuria, frequency, urgency

**Physical Exam:**
- Costovertebral angle tenderness
- No peritoneal signs
- Testicular exam normal (referred pain only)

## Diagnostic Workup

**Laboratory:**
- Urinalysis: Hematuria (85-90%), crystals, pH
- BMP: Creatinine, calcium
- CBC: Elevated WBC if infected

**Imaging:**
- **Non-contrast CT abdomen/pelvis**: Gold standard (97% sensitivity)
- **KUB X-ray**: Can see radiopaque stones (not uric acid)
- **Ultrasound**: First-line in pregnancy; good for hydronephrosis

## Management

**Based on Stone Size:**
| Size | Management |
|------|------------|
| <5mm | Medical expulsive therapy (85-90% pass spontaneously) |
| 5-10mm | May pass, but intervention often needed |
| >10mm | Usually requires intervention |

**Medical Expulsive Therapy:**
- Alpha-blockers (tamsulosin): Relax ureteral smooth muscle
- NSAIDs for pain (ketorolac)
- Hydration

**Surgical Options:**
- **Shock wave lithotripsy (SWL)**: Non-invasive, fragments stones
- **Ureteroscopy (URS)**: Scope with laser lithotripsy
- **Percutaneous nephrolithotomy (PCNL)**: For large stones (>2cm)

## Prevention

**General Measures:**
- Fluid intake: 2.5-3L/day (goal: 2L urine output)
- Moderate sodium (<2300mg/day)
- Normal calcium intake (restriction increases oxalate absorption)
- Moderate animal protein

**Specific Prevention:**
- Calcium oxalate: Citrate supplements, low oxalate diet
- Uric acid: Potassium citrate (alkalinize urine), allopurinol
- Cystine: High fluid intake, alkalinize urine, D-penicillamine`,
      keyTerms: [
        { term: 'nephrolithiasis', definition: 'The formation of stones within the kidneys', pronunciation: 'nef-roh-lith-EYE-ah-sis' },
        { term: 'supersaturation', definition: 'When urine contains more dissolved minerals than it can hold in solution' },
        { term: 'medical expulsive therapy', definition: 'Using medications to help pass a kidney stone naturally' },
        { term: 'lithotripsy', definition: 'Using shock waves or laser to break up kidney stones', pronunciation: 'LITH-oh-trip-see' },
        { term: 'hydronephrosis', definition: 'Swelling of the kidney due to backup of urine from obstruction' },
      ],
      analogies: [
        'Supersaturation is like adding too much sugar to iced tea - eventually it cannot dissolve anymore and crystals form.',
        'Alpha-blockers relax the ureter like opening a valve to let the stone pass more easily.',
      ],
    },
    3: {
      level: 3,
      summary: 'Urolithiasis results from an imbalance between promoters and inhibitors of crystallization, with specific metabolic abnormalities underlying different stone types, guiding targeted medical and surgical management.',
      explanation: `## Detailed Pathophysiology

**Crystallization Cascade:**
1. **Supersaturation** → Activity product exceeds formation product
2. **Nucleation** → Homogeneous (pure solution) or heterogeneous (on matrix)
3. **Crystal growth** → Addition of ions to crystal lattice
4. **Aggregation** → Crystals cluster together
5. **Retention** → Attachment to renal papillae (Randall's plaques)

**Randall's Plaques:**
- Interstitial calcium phosphate deposits at papillary tips
- Serve as nidus for calcium oxalate stone formation
- Present in most calcium stone formers
- Erode through urothelium, exposed to urine

**Metabolic Evaluation (24-hour urine):**
| Abnormality | Finding | Association |
|-------------|---------|-------------|
| Hypercalciuria | >250mg/d (women), >300mg/d (men) | Most common; Ca oxalate stones |
| Hyperoxaluria | >45mg/day | Primary (genetic) or secondary (diet, malabsorption) |
| Hypocitraturia | <320mg/day | Promotes crystallization; treat with K citrate |
| Hyperuricosuria | >800mg/d (men), >750mg/d (women) | Uric acid and Ca oxalate stones |
| Low urine volume | <2L/day | Universal risk factor |

## Stone-Specific Considerations

**Calcium Oxalate Stones:**
- Hypercalciuria types:
  1. Absorptive: Increased GI calcium absorption
  2. Renal leak: Impaired tubular calcium reabsorption
  3. Resorptive: Hyperparathyroidism
- Hyperoxaluria causes:
  - Primary hyperoxaluria (rare genetic disorders)
  - Enteric hyperoxaluria (Crohn's, gastric bypass - fat malabsorption)
  - Dietary (spinach, nuts, chocolate, tea)

**Uric Acid Stones:**
- Form in acidic urine (pH <5.5)
- Risk factors: Gout, metabolic syndrome, diabetes, chronic diarrhea
- Radiolucent on plain film (visible on CT)
- Can dissolve with urine alkalinization (target pH 6.5-7.0)

**Struvite Stones:**
- Magnesium ammonium phosphate (MgNH4PO4)
- Caused by urease-producing bacteria (Proteus, Klebsiella, Pseudomonas)
- Urease converts urea → ammonia → alkaline urine → struvite precipitation
- Can form large "staghorn" calculi filling renal pelvis
- Treatment: Complete stone removal + antibiotics

**Cystine Stones:**
- Autosomal recessive defect in amino acid transporter
- Impaired renal reabsorption of cystine (and other dibasic amino acids)
- Cystine poorly soluble, especially at low pH
- Hexagonal crystals on urinalysis
- Management: High fluid intake (>3L/day), alkalinize to pH >7.5, D-penicillamine

## Advanced Imaging

**CT Stone Protocol:**
- Non-contrast, thin-cut (2-3mm)
- Stone density (HU): Predicts composition and SWL success
  - <500 HU: Uric acid (consider dissolution)
  - 500-1000 HU: Calcium oxalate, mixed
  - >1000 HU: Calcium oxite monohydrate, brushite (hard, SWL-resistant)
- Dual-energy CT: Can differentiate uric acid from calcium stones

**Stone Burden Assessment:**
- Stone volume calculation
- Total stone burden guides treatment approach
- Staghorn stones require complete removal (residual fragments → recurrence)

## Surgical Treatment Details

**Shock Wave Lithotripsy (SWL):**
- Indications: Stones <2cm, renal pelvis or upper ureter
- Contraindications: Pregnancy, aortic aneurysm, uncorrected coagulopathy
- Success factors: Stone <1cm, low density (<1000 HU), short skin-to-stone distance
- Complications: Steinstrasse (stone street), hematoma, hypertension

**Ureteroscopy (URS):**
- Flexible or semi-rigid scope
- Holmium:YAG laser fragmentation
- Higher stone-free rates than SWL for distal ureteral stones
- Can treat stones in any location
- Requires ureteral stent placement typically

**Percutaneous Nephrolithotomy (PCNL):**
- For stones >2cm or staghorn calculi
- Percutaneous access through flank
- Ultrasonic or pneumatic lithotripsy
- Highest stone-free rates for large stones
- Higher morbidity (bleeding, sepsis, adjacent organ injury)`,
      keyTerms: [
        { term: 'Randall\'s plaque', definition: 'Subepithelial calcium phosphate deposits on renal papillae serving as nidus for stone formation' },
        { term: 'hypercalciuria', definition: 'Excessive calcium excretion in urine (>250-300mg/day)', pronunciation: 'hy-per-kal-see-YOO-ree-ah' },
        { term: 'staghorn calculus', definition: 'Large branching stone filling the renal pelvis and calyces' },
        { term: 'Hounsfield units (HU)', definition: 'CT density measure; predicts stone composition and treatment response' },
        { term: 'steinstrasse', definition: 'Column of stone fragments in ureter after SWL (German: "stone street")' },
      ],
      clinicalNotes: 'Always strain urine for stone analysis - guides prevention. Uric acid stones may dissolve with alkalinization alone. Staghorn calculi require complete removal due to high recurrence rate. Consider hyperparathyroidism in recurrent calcium stone formers.',
    },
    4: {
      level: 4,
      summary: 'Nephrolithiasis pathogenesis involves renal papillary plaque formation, crystal-cell interactions, and genetic factors influencing stone risk, with treatment decisions based on stone composition, burden, anatomy, and metabolic phenotype.',
      explanation: `## Molecular Mechanisms of Stone Formation

**Randall's Plaque Hypothesis:**
1. Vasa recta injury in inner medulla (possibly from hypertension, CKD)
2. Calcium phosphate precipitates in basement membrane of thin loops of Henle
3. Plaque extends through interstitium to papillary surface
4. Urothelial erosion exposes plaque to urine
5. Calcium oxalate overgrowth on exposed plaque surface

**Crystal-Cell Interactions:**
- Crystals bind to injured/dedifferentiated tubular cells
- Surface molecules involved: Hyaluronic acid, osteopontin, CD44
- Internalization via macropinocytosis
- Intracellular crystals induce inflammation (NLRP3 inflammasome)
- Autophagy protects against crystal-induced injury

**Genetic Factors:**
| Gene | Protein | Stone Type |
|------|---------|-----------|
| AGXT, GRHPR, HOGA1 | Glyoxylate metabolism enzymes | Primary hyperoxaluria |
| SLC3A1, SLC7A9 | Cystine transporter | Cystinuria |
| CLCN5, OCRL | Chloride channel, phosphatase | Dent disease |
| SLC34A1 | Sodium-phosphate cotransporter | Hypophosphatemic nephrolithiasis |
| CYP24A1 | Vitamin D 24-hydroxylase | Hypercalcemia, nephrocalcinosis |
| CASR | Calcium-sensing receptor | Hypercalciuria |

**Genome-Wide Association Studies:**
- Multiple loci identified affecting calcium, phosphate, urate handling
- Polygenic risk scores being developed
- Explains familial clustering beyond monogenic disorders

## Metabolic Stone Workup

**Indications for Full Evaluation:**
- Recurrent stones
- First stone in children
- Single kidney or CKD
- Stones requiring intervention
- Non-calcium stones
- Family history of stones

**24-Hour Urine Collection Protocol:**
- Two collections on usual diet
- Measure: Volume, calcium, oxalate, citrate, uric acid, sodium, pH, creatinine
- Creatinine validates completeness (15-20 mg/kg/day men, 10-15 women)

**Serum Studies:**
- Calcium, phosphorus, PTH (hyperparathyroidism screen)
- Uric acid
- Creatinine, electrolytes
- 1,25-dihydroxyvitamin D if hypercalciuria unexplained

## Medical Management by Stone Type

**Calcium Stones:**
1. **Thiazide diuretics** (hydrochlorothiazide, chlorthalidone, indapamide)
   - Reduce urinary calcium by 50%
   - Mechanism: Volume contraction → increased proximal Na/Ca reabsorption
   - Require low-sodium diet for efficacy
2. **Potassium citrate**
   - Citrate binds calcium, inhibits crystallization
   - Corrects hypocitraturia
   - Alkalinizes urine (helps if uric acid component)
3. **Dietary modification**
   - Normal calcium (1000-1200mg/day) - restriction paradoxically increases stone risk
   - Low sodium (<2300mg/day)
   - Moderate animal protein

**Uric Acid Stones:**
1. **Potassium citrate** (first-line)
   - Target urine pH 6.5-7.0
   - Can dissolve existing uric acid stones
2. **Allopurinol**
   - If hyperuricosuria persists despite alkalinization
   - Also reduces calcium oxalate stones if hyperuricosuria present

**Cystine Stones:**
1. **Aggressive fluid intake** (>3L/day, goal >3L urine output)
2. **Potassium citrate** (target pH >7.5)
3. **Thiol drugs** if above fail:
   - D-penicillamine (many side effects)
   - Alpha-mercaptopropionylglycine (tiopronin) - better tolerated
   - Form soluble cysteine-drug disulfides

## Surgical Decision-Making

**Stone-Free Definition:**
- No residual fragments, or fragments <2mm (clinically insignificant residual fragments)
- Larger residual fragments associated with stone recurrence

**Treatment Selection Algorithm:**
| Stone Size | Location | First-Line Treatment |
|------------|----------|---------------------|
| <10mm | Renal | SWL or observation |
| 10-20mm | Renal | SWL (if favorable) or URS |
| >20mm | Renal | PCNL |
| <10mm | Proximal ureter | SWL or URS |
| Any size | Distal ureter | URS preferred |
| Staghorn | Renal | PCNL +/- SWL |

**Factors Favoring SWL:**
- Stone <15mm
- Hounsfield <1000 HU (softer stone)
- Skin-to-stone distance <10cm
- Non-lower pole location
- No distal obstruction

**Factors Favoring URS:**
- Distal ureteral stone
- Need for definitive treatment
- Coagulopathy (relative SWL contraindication)
- Obesity (poor SWL outcomes)
- Cystine stones (SWL-resistant)

## Pregnancy and Stones

**Epidemiology:**
- Incidence ~1/1500 pregnancies
- Usually in 2nd/3rd trimester

**Diagnostic Challenges:**
- Avoid CT if possible (radiation)
- Ultrasound first-line (hydronephrosis physiologic in pregnancy)
- MRI without contrast if needed (no gadolinium)
- Low-dose CT if US/MRI inconclusive and clinical suspicion high

**Management:**
- Conservative management preferred (most pass spontaneously)
- Ureteral stent or nephrostomy if obstruction with infection
- Ureteroscopy safe in pregnancy if intervention required
- Avoid SWL (fetal harm)`,
      keyTerms: [
        { term: 'primary hyperoxaluria', definition: 'Inherited disorder of glyoxylate metabolism causing severe oxalate overproduction' },
        { term: 'Dent disease', definition: 'X-linked tubulopathy causing hypercalciuria, low-molecular-weight proteinuria, and nephrolithiasis' },
        { term: 'tiopronin', definition: 'Thiol drug forming soluble complexes with cystine; better tolerated than D-penicillamine' },
        { term: 'clinically insignificant residual fragments', definition: 'Stone fragments <2mm remaining after treatment; may or may not require intervention' },
        { term: 'NLRP3 inflammasome', definition: 'Intracellular protein complex activated by crystal exposure, triggering inflammatory response' },
      ],
      clinicalNotes: 'Normal dietary calcium (1000-1200mg/day) reduces stone risk by binding oxalate in the gut. Thiazides require low-sodium diet for efficacy. Staghorn calculi should be removed completely to prevent recurrence. Uric acid stones can be dissolved with alkalinization - consider before intervention.',
    },
    5: {
      level: 5,
      summary: 'Contemporary nephrolithiasis management integrates genetic testing for monogenic disorders, advanced imaging-guided intervention selection, precision metabolic phenotyping, and novel therapeutic targets including crystal-binding proteins and microbiome modulation.',
      explanation: `## Precision Medicine in Nephrolithiasis

**Genetic Testing Indications:**
- Pediatric onset (<18 years)
- Recurrent stones despite medical therapy
- Nephrocalcinosis
- Family history suggestive of monogenic disorder
- Cystine, struvite, or unusual stone composition
- Associated syndromic features

**Genetic Disorders Causing Stones:**
| Disorder | Gene | Inheritance | Features |
|----------|------|-------------|----------|
| Primary hyperoxaluria type 1 | AGXT | AR | Severe, early onset; ESRD risk |
| Primary hyperoxaluria type 2 | GRHPR | AR | Milder than PH1 |
| Primary hyperoxaluria type 3 | HOGA1 | AR | Mildest form |
| Cystinuria type A | SLC3A1 | AR | Cystine stones |
| Cystinuria type B | SLC7A9 | AR (or dominant negative) | Cystine stones |
| Dent disease 1 | CLCN5 | X-linked | Hypercalciuria, LMW proteinuria |
| Dent disease 2 | OCRL | X-linked | Overlaps with Lowe syndrome |
| ADPKD | PKD1/PKD2 | AD | Cysts + stones (uric acid) |
| APRT deficiency | APRT | AR | 2,8-dihydroxyadenine stones |
| Xanthinuria | XDH | AR | Xanthine stones |

**Emerging Genetic Targets:**
- SLC26A1 (sulfate transporter): Oxalate handling
- VDR polymorphisms: Calcium metabolism
- NPT2c variants: Phosphate-related hypercalciuria

## Advanced Imaging Applications

**Dual-Energy CT (DECT):**
- Differentiates uric acid (low atomic number) from calcium stones
- Identifies pure uric acid stones amenable to dissolution
- Material decomposition algorithms
- Sensitivity >90% for uric acid stone identification

**Stone Volume and Surface Area:**
- Automated segmentation algorithms
- Predicts SWL fragment number
- Surface area correlates with stone-free rate

**Artificial Intelligence Applications:**
- Automated stone detection and measurement
- Composition prediction from CT density patterns
- Surgical planning assistance
- Outcome prediction models

## Surgical Advances

**Miniaturized PCNL Techniques:**
- Standard PCNL: 26-30 Fr tract
- Mini-PCNL: 14-20 Fr tract
- Ultra-mini PCNL: 11-13 Fr tract
- Micro-PCNL: <10 Fr tract
- Tradeoffs: Smaller tract = less bleeding; longer procedure, limited stone burden

**Single-Use Flexible Ureteroscopes:**
- Eliminate reprocessing costs and cross-contamination risk
- Consistent deflection (no scope fatigue)
- Increasingly cost-competitive

**Laser Technology:**
- Holmium:YAG: Current standard; ablative
- Thulium fiber laser: Smaller fibers, faster ablation, less retropulsion
- Super-pulse thulium: "Dusting" and "fragmentation" modes
- Moses technology: Reduced retropulsion with Ho:YAG

**Robotic-Assisted PCNL:**
- Precise needle placement
- Reduced radiation exposure
- Under investigation

## Novel Therapeutics

**Targeting Oxalate:**
- Oxalobacter formigenes colonization (probiotic)
- Recombinant oxalate-degrading enzymes (reloxaliase/ALLN-177)
- RNA interference for AGXT (for PH1): Lumasiran - approved by FDA
- CRISPR gene correction in development

**Lumasiran (Oxlumo):**
- siRNA targeting glycolate oxidase (HAO1)
- Reduces hepatic oxalate production
- Approved for primary hyperoxaluria type 1
- 65% reduction in urinary oxalate
- Monthly subcutaneous injection

**Nedosiran:**
- siRNA targeting lactate dehydrogenase A (LDHA)
- Alternative mechanism for PH1 and PH2
- Phase 3 trials ongoing

**Anti-Crystallization Strategies:**
- Phytate analogs (inositol hexaphosphate)
- Enhanced crystal inhibitors
- Calcium oxalate crystal dissolution agents (experimental)

## Microbiome and Stone Disease

**Oxalobacter formigenes:**
- Obligate oxalate-degrading gut bacterium
- Colonization associated with lower urinary oxalate
- Lost with antibiotic exposure
- Probiotic formulations under study

**Gut-Kidney Axis:**
- Enteric oxalate handling depends on microbiome
- Dysbiosis may increase oxalate absorption
- Bariatric surgery alters microbiome → enteric hyperoxaluria

**Future Directions:**
- Microbiome-based stone risk assessment
- Targeted probiotic therapies
- Fecal microbiota transplantation (exploratory)

## Pediatric Considerations

**Metabolic Abnormalities More Common:**
- Hypercalciuria (40-50%)
- Hypocitraturia (20-30%)
- Hyperoxaluria (15-20%)
- Cystinuria (5-10%)

**Anatomic Factors:**
- Higher rate of underlying anatomic abnormality
- Evaluate with ultrasound initially
- Consider VCUG if UTI history

**Treatment Modifications:**
- SWL: Lower energy settings; anesthesia usually required
- URS: Smaller scopes, careful ureteral dilation
- PCNL: Miniaturized techniques preferred

## Special Situations

**Bariatric Surgery and Stones:**
- Roux-en-Y gastric bypass: 2-3x increased stone risk
- Mechanism: Fat malabsorption → saponification of calcium → free oxalate absorption
- Hypocitraturia from chronic diarrhea
- Management: Aggressive hydration, calcium with meals, citrate supplementation

**Inflammatory Bowel Disease:**
- Crohn's (especially with ileal disease) → enteric hyperoxaluria
- Mechanism: Same as bariatric - fat malabsorption
- Also prone to uric acid stones (dehydration, acidic urine)

**Medullary Sponge Kidney:**
- Cystic dilation of collecting ducts
- Nephrocalcinosis and recurrent stones
- Associated with hypercalciuria, hypocitraturia
- Diagnosis: CT or IVP showing "paintbrush" appearance`,
      keyTerms: [
        { term: 'lumasiran', definition: 'siRNA therapeutic targeting HAO1 for primary hyperoxaluria type 1; first approved RNA interference therapy for stone disease' },
        { term: 'Oxalobacter formigenes', definition: 'Gut bacterium that degrades dietary oxalate; colonization associated with lower urinary oxalate and reduced stone risk' },
        { term: 'Moses technology', definition: 'Holmium laser pulse modulation reducing stone retropulsion during ureteroscopy' },
        { term: 'thulium fiber laser', definition: 'Newer laser technology with superior tissue effects and smaller fiber compatibility compared to Ho:YAG' },
        { term: 'enteric hyperoxaluria', definition: 'Increased oxalate absorption from fat malabsorption (IBD, bariatric surgery) binding calcium' },
      ],
      clinicalNotes: `**Board-Relevant Clinical Pearls:**
- Lumasiran (Oxlumo): First siRNA therapy for kidney stones; approved for primary hyperoxaluria type 1
- Genetic testing indicated for pediatric onset, recurrent stones despite therapy, or nephrocalcinosis
- DECT can identify pure uric acid stones amenable to medical dissolution
- Roux-en-Y gastric bypass patients: 2-3x increased stone risk; give calcium with meals to bind oxalate
- Struvite stones form only in infected urine (urease-producing organisms) - incomplete removal leads to recurrence
- Normal dietary calcium (not restriction) reduces stone risk by binding gut oxalate
- Thiazide efficacy requires low-sodium diet (volume contraction mechanism)`,
    },
  },

  media: [
    {
      id: 'stone-composition-xray',
      type: 'image',
      filename: 'stone-composition-xray.jpg',
      title: 'Stone Radiopacity Comparison',
      description: 'X-ray appearance of different stone types: calcium (radiopaque) vs uric acid (radiolucent)',
    },
    {
      id: 'randall-plaque-diagram',
      type: 'diagram',
      filename: 'randall-plaque-diagram.svg',
      title: 'Randall Plaque Formation',
      description: 'Pathogenesis of calcium oxalate stones from papillary plaque',
    },
    {
      id: 'stone-treatment-algorithm',
      type: 'diagram',
      filename: 'stone-treatment-algorithm.svg',
      title: 'Stone Treatment Decision Algorithm',
      description: 'Selection of SWL, URS, or PCNL based on stone characteristics',
    },
  ],

  citations: [
    {
      id: 'aua-stone-guidelines',
      type: 'article',
      title: 'Surgical Management of Stones: AUA/Endourological Society Guideline',
      authors: ['Assimos D', 'Krambeck A', 'Miller NL', 'et al.'],
      source: 'Journal of Urology',
      chapter: '196(4):1153-1160',
      url: 'https://doi.org/10.1016/j.juro.2016.05.090',
    },
    {
      id: 'campbell-walsh-stones',
      type: 'textbook',
      title: 'Upper Urinary Tract Calculi',
      source: 'Campbell-Walsh-Wein Urology',
      chapter: '52-54',
      license: 'Elsevier',
    },
    {
      id: 'nejm-lumasiran',
      type: 'article',
      title: 'Lumasiran, an RNAi Therapeutic for Primary Hyperoxaluria Type 1',
      authors: ['Garrelfs SF', 'Frishberg Y', 'Hulton SA', 'et al.'],
      source: 'New England Journal of Medicine',
      chapter: '384(13):1216-1226',
    },
  ],

  crossReferences: [
    { targetId: 'structure-urinary-tract-anatomy', targetType: 'structure', relationship: 'related', label: 'Urinary Tract Anatomy' },
    { targetId: 'condition-urinary-tract-infections', targetType: 'condition', relationship: 'related', label: 'UTI' },
    { targetId: 'process-urological-procedures', targetType: 'topic', relationship: 'related', label: 'Urological Procedures' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'Acute Kidney Injury' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    topics: ['urology', 'nephrology', 'metabolism'],
    keywords: ['nephrolithiasis', 'renal colic', 'calcium oxalate', 'uric acid stones', 'lithotripsy', 'PCNL'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default kidneyStones;
