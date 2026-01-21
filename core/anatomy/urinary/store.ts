/**
 * Urinary System Data Store
 *
 * Kidneys, ureters, bladder, urethra,
 * nephron segments, and renal physiology.
 */

import type {
  UrinaryStructure,
  NephronSegmentDetail,
  RenalFactor,
  GFRConcept,
  UrinaryStatistics,
  UrinaryComponent,
} from './types';

// ============================================================================
// URINARY STRUCTURES
// ============================================================================

const urinaryStructures: Map<string, UrinaryStructure> = new Map();

// --- Kidney ---
urinaryStructures.set('kidney', {
  id: 'kidney',
  name: 'Kidney',
  latinName: 'Ren',
  fmaId: 'FMA:7203',
  component: 'kidney',
  location: 'Retroperitoneal, T12-L3, right slightly lower than left (due to liver)',
  dimensions: '11-14 cm long × 6 cm wide × 4 cm thick; ~150 g each',
  function: 'Filtration, excretion, fluid/electrolyte balance, acid-base balance, hormone production',
  histology: 'Cortex (glomeruli, PCT, DCT), Medulla (loops, collecting ducts), Pelvis (transitional epithelium)',
  bloodSupply: ['Renal artery (from aorta at L1-L2)', 'Segmental arteries', 'Interlobar arteries', 'Arcuate arteries', 'Interlobular arteries', 'Afferent arterioles'],
  venousDrainage: ['Renal vein → IVC (left renal vein longer, receives gonadal and adrenal veins)'],
  innervation: {
    sympathetic: 'T10-L1 via renal plexus (vasoconstriction, renin release)',
    parasympathetic: 'Vagus (minor role)',
    sensory: 'T10-L1 (referred pain to flank)',
  },
  explanations: {
    level1: 'Your kidneys are bean-shaped organs that filter your blood and make urine.',
    level2: 'The kidneys filter about 180 liters of blood daily, removing waste and extra water to make about 1-2 liters of urine. They also help control blood pressure and make hormones.',
    level3: 'Each kidney contains ~1 million nephrons. Blood enters via the renal artery, is filtered in glomeruli, and processed along tubules. The kidney regulates fluid, electrolytes, acid-base balance, and produces erythropoietin and active vitamin D.',
    level4: 'Renal blood flow is ~1200 mL/min (20-25% of cardiac output). Filtration fraction is ~20% of renal plasma flow. Autoregulation maintains GFR across BP 80-180 mmHg via myogenic response and tubuloglomerular feedback. Renin-angiotensin system and sympathetic tone modify renal hemodynamics.',
    level5: 'Tubuloglomerular feedback involves macula densa sensing of tubular NaCl via NKCC2, modulating afferent arteriolar tone via adenosine (constriction) and prostaglandins (dilation). JGA renin release is stimulated by reduced NaCl delivery, β1-adrenergic activation, and reduced afferent arteriolar stretch. Renal autoregulation is impaired by NSAIDs (blocking prostaglandin-mediated afferent dilation) and ACEi/ARBs (blocking AngII-mediated efferent constriction).',
  },
  keyFacts: [
    '~1 million nephrons per kidney',
    'Filters 180 L/day, excretes 1-2 L urine',
    'Receives 20-25% of cardiac output',
    'Produces erythropoietin and 1,25-(OH)₂D',
    'Left renal vein is longer (crosses aorta)',
  ],
  pathologies: [
    {
      name: 'Chronic Kidney Disease (CKD)',
      description: 'Progressive loss of kidney function',
      symptoms: ['Often asymptomatic until advanced', 'Fatigue', 'Edema', 'Uremic symptoms'],
      causes: ['Diabetes', 'Hypertension', 'Glomerulonephritis', 'Polycystic kidney disease'],
      labFindings: ['Elevated creatinine', 'Decreased GFR', 'Proteinuria', 'Anemia'],
      relevantImaging: ['Renal ultrasound'],
    },
    {
      name: 'Acute Kidney Injury (AKI)',
      description: 'Rapid decline in kidney function',
      symptoms: ['Oliguria/anuria', 'Edema', 'Uremic symptoms if severe'],
      causes: ['Prerenal (hypovolemia)', 'Intrinsic (ATN, GN)', 'Postrenal (obstruction)'],
      labFindings: ['Rising creatinine', 'Elevated BUN', 'Electrolyte abnormalities'],
    },
    {
      name: 'Renal Cell Carcinoma',
      description: 'Most common primary renal malignancy',
      symptoms: ['Classic triad: hematuria, flank pain, mass (rare)', 'Often incidental finding'],
      causes: ['Smoking', 'Obesity', 'VHL syndrome', 'Chronic dialysis'],
      relevantImaging: ['CT with contrast (enhancing mass)', 'MRI'],
    },
  ],
  relevantLabs: ['Creatinine', 'BUN', 'GFR (calculated)', 'Urinalysis', 'Urine protein:creatinine ratio'],
  relevantImaging: ['Renal ultrasound', 'CT urogram', 'MRI'],
  relatedStructures: ['renal-artery', 'renal-vein', 'ureter', 'adrenal-gland'],
});

// --- Ureter ---
urinaryStructures.set('ureter', {
  id: 'ureter',
  name: 'Ureter',
  latinName: 'Ureter',
  fmaId: 'FMA:9705',
  component: 'ureter',
  location: 'Retroperitoneal, from renal pelvis to bladder, crosses pelvic brim at bifurcation of common iliac',
  dimensions: '25-30 cm long, 3-4 mm diameter',
  function: 'Transport urine from kidney to bladder via peristalsis',
  histology: 'Transitional epithelium (urothelium), two smooth muscle layers (inner longitudinal, outer circular)',
  bloodSupply: ['Renal artery', 'Gonadal artery', 'Aorta', 'Common iliac artery', 'Internal iliac artery', 'Vesical arteries'],
  venousDrainage: ['Corresponding veins'],
  innervation: {
    sympathetic: 'T10-L2 (vasoconstriction)',
    parasympathetic: 'S2-S4 (peristalsis)',
    sensory: 'T10-L2 (referred pain to groin/testicle)',
  },
  explanations: {
    level1: 'The ureters are tubes that carry urine from your kidneys to your bladder.',
    level2: 'Each ureter is a muscular tube about 25-30 cm long that uses wave-like contractions (peristalsis) to move urine from the kidney to the bladder.',
    level3: 'The ureter has three natural narrowings: ureteropelvic junction, pelvic brim (where it crosses iliac vessels), and ureterovesical junction. These are common sites for stone impaction. The intramural portion creates a valve-like mechanism.',
    level4: 'Ureteral peristalsis is intrinsic (pacemaker cells in renal pelvis), augmented by autonomic input. The ureterovesical junction has an oblique intramural course that creates a passive anti-reflux mechanism. During voiding, detrusor contraction compresses this segment.',
    level5: 'Ureteral smooth muscle generates spontaneous pacemaker potentials; ICC-like cells in the renal pelvis initiate coordinated peristalsis. Ureterscopy exploits the three physiologic narrowings. In females, the ureter passes under the uterine artery ("water under the bridge") - at risk during hysterectomy. Vesicoureteral reflux results from inadequate intramural tunnel length or neurologic bladder dysfunction.',
  },
  keyFacts: [
    'Three natural narrowings: UPJ, pelvic brim, UVJ',
    'Common sites for kidney stone impaction',
    '"Water under the bridge": ureter passes under uterine artery',
    'Referred pain to groin/testicle (T10-L2)',
    'Oblique insertion creates passive anti-reflux mechanism',
  ],
  pathologies: [
    {
      name: 'Ureteral obstruction',
      description: 'Blockage of ureteral lumen',
      symptoms: ['Flank pain (colicky)', 'Nausea/vomiting', 'Hematuria'],
      causes: ['Kidney stones (most common)', 'Tumor', 'Stricture', 'External compression'],
      relevantImaging: ['CT urogram (without contrast for stones)', 'Ultrasound (hydronephrosis)'],
    },
    {
      name: 'Vesicoureteral reflux (VUR)',
      description: 'Retrograde flow of urine from bladder to ureter/kidney',
      symptoms: ['Recurrent UTIs', 'Pyelonephritis', 'Renal scarring'],
      causes: ['Short intramural ureter', 'Neurogenic bladder', 'Bladder outlet obstruction'],
      relevantImaging: ['VCUG (voiding cystourethrogram)'],
    },
  ],
  relevantLabs: ['Urinalysis', 'Urine culture'],
  relevantImaging: ['CT urogram', 'Ultrasound', 'IVP', 'Retrograde pyelogram'],
  relatedStructures: ['kidney', 'bladder', 'iliac-vessels'],
});

// --- Bladder ---
urinaryStructures.set('bladder', {
  id: 'bladder',
  name: 'Urinary Bladder',
  latinName: 'Vesica urinaria',
  fmaId: 'FMA:15900',
  component: 'bladder',
  location: 'Pelvis, posterior to pubic symphysis; when empty, lies within pelvis; when full, rises into abdomen',
  dimensions: 'Capacity: 400-600 mL (sensation at ~200-300 mL)',
  function: 'Storage of urine, controlled voiding',
  histology: 'Transitional epithelium (urothelium), detrusor muscle (three smooth muscle layers)',
  bloodSupply: ['Superior vesical arteries (from internal iliac)', 'Inferior vesical arteries (males)', 'Vaginal arteries (females)'],
  venousDrainage: ['Vesical venous plexus → Internal iliac veins'],
  innervation: {
    sympathetic: 'T10-L2 via hypogastric nerve (storage: detrusor relaxation, sphincter contraction)',
    parasympathetic: 'S2-S4 via pelvic splanchnic nerves (voiding: detrusor contraction)',
    sensory: 'S2-S4 (stretch), T10-L2 (pain)',
  },
  explanations: {
    level1: 'The bladder is like a stretchy balloon that holds your urine until you\'re ready to go to the bathroom.',
    level2: 'The bladder stores urine and can hold 400-600 mL. The detrusor muscle contracts to push urine out when you void, controlled by nerves from your spinal cord and brain.',
    level3: 'The bladder wall has detrusor muscle and transitional epithelium that allows stretching. The trigone (between ureteral orifices and internal urethral orifice) is fixed. Storage and voiding are coordinated by sympathetic (storage) and parasympathetic (voiding) systems.',
    level4: 'During filling, bladder compliance keeps pressure low despite increasing volume. The guarding reflex (sympathetic) maintains continence by relaxing detrusor (β3) and contracting internal sphincter (α1). Voiding involves pontine micturition center coordination: parasympathetic activation (M3→detrusor contraction) with simultaneous sphincter relaxation.',
    level5: 'Bladder smooth muscle expresses M2 and M3 muscarinic receptors; M3 mediates contraction via Gq→PLC→IP3→Ca²⁺. The urothelium releases ATP (purinergic signaling) and NO modulating afferent activity. Interstitial cells of Cajal-like cells may coordinate detrusor contractions. Neurogenic bladder patterns: upper motor neuron (hyperreflexic) vs lower motor neuron (areflexic). Antimuscarinics and β3-agonists (mirabegron) treat overactive bladder.',
  },
  keyFacts: [
    'Capacity: 400-600 mL; first sensation at ~200-300 mL',
    'Detrusor muscle: smooth muscle, parasympathetic control',
    'Trigone: fixed area between ureteral orifices and internal urethral orifice',
    'Sympathetic (storage) vs Parasympathetic (voiding)',
    'Internal sphincter (smooth muscle, involuntary), External sphincter (striated, voluntary)',
  ],
  pathologies: [
    {
      name: 'Urinary Tract Infection (UTI)',
      description: 'Bacterial infection of bladder (cystitis)',
      symptoms: ['Dysuria', 'Frequency', 'Urgency', 'Suprapubic pain', 'Hematuria'],
      causes: ['E. coli (80-85%)', 'Staphylococcus saprophyticus (young women)', 'Other gram-negatives'],
      labFindings: ['Pyuria', 'Bacteriuria', 'Positive urine culture'],
    },
    {
      name: 'Bladder cancer',
      description: 'Most common urinary tract malignancy',
      symptoms: ['Painless hematuria', 'Irritative voiding symptoms'],
      causes: ['Smoking (most important)', 'Occupational (aromatic amines)', 'Schistosomiasis (SCC)'],
      relevantImaging: ['Cystoscopy with biopsy', 'CT urogram'],
    },
    {
      name: 'Overactive bladder (OAB)',
      description: 'Urinary urgency with or without incontinence',
      symptoms: ['Urgency', 'Frequency', 'Nocturia', 'Urge incontinence'],
      causes: ['Idiopathic', 'Neurologic', 'Bladder outlet obstruction'],
    },
    {
      name: 'Neurogenic bladder',
      description: 'Bladder dysfunction from neurologic disease',
      symptoms: ['Varies: retention, incontinence, or both'],
      causes: ['Spinal cord injury', 'Diabetes', 'Multiple sclerosis', 'Stroke'],
    },
  ],
  relevantLabs: ['Urinalysis', 'Urine culture', 'Urine cytology'],
  relevantImaging: ['Ultrasound (post-void residual)', 'Cystoscopy', 'Urodynamics'],
  relatedStructures: ['ureter', 'urethra', 'prostate', 'uterus', 'rectum'],
});

// --- Urethra ---
urinaryStructures.set('urethra', {
  id: 'urethra',
  name: 'Urethra',
  latinName: 'Urethra',
  fmaId: 'FMA:19667',
  component: 'urethra',
  location: 'From bladder neck to external urethral meatus',
  dimensions: 'Female: 3-4 cm; Male: 18-20 cm (prostatic, membranous, spongy segments)',
  function: 'Passage of urine (and semen in males)',
  histology: 'Transitional → pseudostratified → stratified squamous epithelium (proximal to distal)',
  bloodSupply: ['Internal pudendal artery branches'],
  venousDrainage: ['Pudendal veins'],
  innervation: {
    sympathetic: 'Internal sphincter (α1)',
    parasympathetic: 'Bladder contraction facilitates flow',
    sensory: 'Pudendal nerve (external sphincter, voluntary control)',
  },
  explanations: {
    level1: 'The urethra is the tube that carries urine out of your body.',
    level2: 'The urethra connects the bladder to the outside. In females it\'s about 4 cm long; in males it\'s about 20 cm and also carries semen.',
    level3: 'The female urethra is short, increasing UTI risk. The male urethra has three parts: prostatic (through prostate), membranous (through urogenital diaphragm, external sphincter location), and spongy/penile (through corpus spongiosum).',
    level4: 'The internal urethral sphincter (smooth muscle) provides involuntary continence. The external sphincter (striated muscle, pudendal nerve) provides voluntary control. In males, the prostatic urethra receives prostatic and ejaculatory duct secretions.',
    level5: 'The membranous urethra is the least distensible segment and most vulnerable to injury (pelvic fracture). Posterior urethral injury (above urogenital diaphragm) is suggested by high-riding prostate and blood at meatus - do not catheterize. Anterior urethral injury (bulbar) may result from straddle injury. Urethral strictures most commonly involve bulbar urethra.',
  },
  keyFacts: [
    'Female: ~4 cm (short, prone to UTI)',
    'Male: ~20 cm (prostatic, membranous, spongy)',
    'External sphincter: striated muscle, pudendal nerve (S2-S4)',
    'Membranous urethra most vulnerable to pelvic fracture injury',
    'Blood at meatus: do not catheterize until urethrogram',
  ],
  pathologies: [
    {
      name: 'Urethritis',
      description: 'Inflammation/infection of urethra',
      symptoms: ['Dysuria', 'Urethral discharge', 'Pruritus'],
      causes: ['Gonorrhea', 'Chlamydia', 'Non-gonococcal urethritis'],
      labFindings: ['Urethral swab: gram stain, NAAT'],
    },
    {
      name: 'Urethral stricture',
      description: 'Narrowing of urethral lumen',
      symptoms: ['Weak stream', 'Straining', 'Incomplete emptying', 'Recurrent UTI'],
      causes: ['Trauma', 'Infection', 'Instrumentation', 'Idiopathic'],
      relevantImaging: ['Retrograde urethrogram', 'Cystoscopy'],
    },
  ],
  relevantLabs: ['Urinalysis', 'Urethral swab for STI'],
  relevantImaging: ['Retrograde urethrogram', 'Voiding cystourethrogram'],
  relatedStructures: ['bladder', 'prostate', 'external-urethral-sphincter'],
});

// ============================================================================
// NEPHRON SEGMENTS
// ============================================================================

const nephronSegments: Map<string, NephronSegmentDetail> = new Map();

nephronSegments.set('glomerulus', {
  id: 'glomerulus',
  name: 'Glomerulus',
  segment: 'glomerulus',
  location: 'Renal cortex, within Bowman\'s capsule',
  function: 'Ultrafiltration of plasma',
  epitheliumType: 'Fenestrated endothelium → basement membrane → podocytes',
  permeability: {
    water: 'high',
    sodium: 'high',
    urea: 'high',
  },
  transporters: [],
  explanations: {
    level1: 'The glomerulus is like a tiny filter that separates waste from your blood.',
    level2: 'The glomerulus is a ball of tiny blood vessels where blood is filtered. Water and small molecules pass through, but blood cells and large proteins stay in the blood.',
    level3: 'The glomerular filtration barrier has three layers: fenestrated endothelium (size barrier), glomerular basement membrane (charge barrier), and podocyte foot processes (slit diaphragm). GFR is determined by Starling forces.',
    level4: 'GFR = Kf × (PGC - PBC - πGC). Normal GFR ~125 mL/min. The negative charge of the GBM (heparan sulfate) restricts albumin filtration. Podocyte injury leads to proteinuria. Mesangial cells regulate glomerular surface area and clear immune complexes.',
    level5: 'Podocyte slit diaphragm proteins (nephrin, podocin) are critical for filtration barrier integrity; mutations cause congenital nephrotic syndrome. Angiotensin II preferentially constricts efferent arteriole, maintaining GFR when renal perfusion falls but increasing filtration fraction. ACEi/ARBs dilate efferent arteriole, reducing intraglomerular pressure and proteinuria in diabetic nephropathy.',
  },
  keyFacts: [
    'GFR ~125 mL/min (180 L/day)',
    'Three-layer filtration barrier',
    'Size and charge selectivity',
    'Afferent arteriole → glomerular capillaries → efferent arteriole',
    'Podocyte injury → proteinuria',
  ],
  clinicalNote: 'Heavy proteinuria (>3.5 g/day) indicates glomerular disease; nephrotic syndrome if associated with edema, hypoalbuminemia, hyperlipidemia',
});

nephronSegments.set('proximal-tubule', {
  id: 'proximal-tubule',
  name: 'Proximal Convoluted Tubule (PCT)',
  segment: 'proximal-tubule',
  location: 'Cortex, immediately after Bowman\'s capsule',
  function: 'Bulk reabsorption (65-70% of filtered Na⁺, water, solutes)',
  epitheliumType: 'Simple cuboidal with prominent brush border (microvilli)',
  permeability: {
    water: 'high',
    sodium: 'high',
    urea: 'variable',
  },
  transporters: [
    { name: 'Na⁺/K⁺-ATPase', location: 'basolateral', mechanism: 'active', substrates: ['Na⁺', 'K⁺'], energySource: 'ATP' },
    { name: 'SGLT2', gene: 'SLC5A2', location: 'apical', mechanism: 'secondary-active', substrates: ['Glucose', 'Na⁺'], clinicalNote: 'Target of SGLT2 inhibitors (diabetes)' },
    { name: 'NHE3', gene: 'SLC9A3', location: 'apical', mechanism: 'secondary-active', substrates: ['Na⁺', 'H⁺'] },
    { name: 'Aquaporin-1', gene: 'AQP1', location: 'apical', mechanism: 'channel', substrates: ['Water'] },
  ],
  hormoneResponsive: ['Angiotensin II (enhances Na⁺ reabsorption)'],
  explanations: {
    level1: 'The proximal tubule takes back most of the good stuff your body needs from the filtered fluid.',
    level2: 'The proximal tubule reabsorbs about 65-70% of filtered water, sodium, glucose, and amino acids back into the blood. It has many transporters and a brush border to increase absorption.',
    level3: 'The PCT reabsorbs glucose (SGLT2, SGLT1), amino acids, phosphate, and bicarbonate (via NHE3 and carbonic anhydrase). It secretes organic anions and cations. Reabsorption is isosmotic - water follows solutes.',
    level4: 'Early PCT: primarily Na⁺-coupled reabsorption with HCO3⁻ reclamation (CO2 crosses membrane, regenerates HCO3⁻ intracellularly). Late PCT: Cl⁻ reabsorption becomes predominant as lumen becomes Cl⁻-rich. Organic anion transporters (OAT1, OAT3) secrete drugs and toxins.',
    level5: 'SGLT2 reabsorbs 90% of filtered glucose in early PCT; SGLT2 inhibitors cause glycosuria and natriuresis. Carbonic anhydrase IV (apical) and II (cytoplasmic) coordinate HCO3⁻ reabsorption; acetazolamide inhibits this, causing bicarbonaturia and metabolic acidosis. Angiotensin II stimulates NHE3 and Na⁺/K⁺-ATPase. Fanconi syndrome shows global PCT dysfunction with glucosuria, aminoaciduria, phosphaturia, and RTA type 2.',
  },
  keyFacts: [
    'Reabsorbs 65-70% of filtered Na⁺, water, HCO3⁻',
    'All filtered glucose and amino acids',
    'Isosmotic reabsorption (water follows solutes)',
    'SGLT2 inhibitors work here',
    'Carbonic anhydrase inhibitors work here',
  ],
  clinicalNote: 'SGLT2 inhibitors (empagliflozin, dapagliflozin) cause glycosuria and have cardiorenal protective effects beyond glucose lowering',
});

nephronSegments.set('loop-of-henle', {
  id: 'loop-of-henle',
  name: 'Loop of Henle',
  segment: 'ascending-loop',
  location: 'Descending into medulla, ascending back to cortex',
  function: 'Countercurrent multiplication - creates medullary osmotic gradient',
  epitheliumType: 'Thin descending: simple squamous; Thick ascending: cuboidal with few microvilli',
  permeability: {
    water: 'variable',
    sodium: 'variable',
    urea: 'low',
  },
  transporters: [
    { name: 'Aquaporin-1', location: 'apical', mechanism: 'channel', substrates: ['Water'], clinicalNote: 'Descending limb only' },
    { name: 'NKCC2', gene: 'SLC12A1', location: 'apical', mechanism: 'secondary-active', substrates: ['Na⁺', 'K⁺', '2Cl⁻'], clinicalNote: 'Target of loop diuretics (furosemide)' },
    { name: 'ROMK', gene: 'KCNJ1', location: 'apical', mechanism: 'channel', substrates: ['K⁺'], clinicalNote: 'Recycles K⁺ for NKCC2' },
  ],
  explanations: {
    level1: 'The loop of Henle goes deep into the kidney and helps concentrate your urine.',
    level2: 'The loop of Henle has a descending limb (permeable to water) and ascending limb (impermeable to water but pumps out salt). This creates the gradient that allows concentrated urine.',
    level3: 'The thin descending limb is permeable to water, concentrating tubular fluid. The thick ascending limb (TAL) is impermeable to water but actively reabsorbs Na⁺/K⁺/2Cl⁻ via NKCC2, diluting tubular fluid and creating medullary hypertonicity.',
    level4: 'Countercurrent multiplication: descending limb equilibrates with hyperosmotic medullary interstitium (water exits). Ascending limb actively pumps NaCl without water, diluting tubular fluid to ~100 mOsm/kg while adding solute to interstitium. The result is a gradient from 300 (cortex) to 1200 (inner medulla) mOsm/kg.',
    level5: 'The TAL is the "diluting segment" that generates dilute tubular fluid entering DCT. NKCC2 activity generates the transepithelial voltage (lumen-positive) that drives paracellular reabsorption of Ca²⁺ and Mg²⁺. Loop diuretics (furosemide) inhibit NKCC2, causing natriuresis, kaliuresis, and impaired urine concentration. Bartter syndrome (NKCC2 or ROMK mutations) mimics chronic loop diuretic use.',
  },
  keyFacts: [
    'Descending: water permeable, salt impermeable',
    'Ascending: salt permeable (NKCC2), water impermeable',
    'Creates medullary gradient (300→1200 mOsm/kg)',
    'Loop diuretics (furosemide) block NKCC2',
    'TAL drives paracellular Ca²⁺/Mg²⁺ reabsorption',
  ],
  clinicalNote: 'Loop diuretics cause hypokalemia, hyponatremia, hypocalcemia, hypomagnesemia, and metabolic alkalosis',
});

nephronSegments.set('distal-tubule', {
  id: 'distal-tubule',
  name: 'Distal Convoluted Tubule (DCT)',
  segment: 'distal-tubule',
  location: 'Cortex, after thick ascending limb',
  function: 'Fine-tuning of Na⁺, Ca²⁺ reabsorption',
  epitheliumType: 'Simple cuboidal, fewer microvilli than PCT',
  permeability: {
    water: 'impermeable',
    sodium: 'variable',
    urea: 'low',
  },
  transporters: [
    { name: 'NCC', gene: 'SLC12A3', location: 'apical', mechanism: 'secondary-active', substrates: ['Na⁺', 'Cl⁻'], clinicalNote: 'Target of thiazide diuretics' },
    { name: 'TRPV5', location: 'apical', mechanism: 'channel', substrates: ['Ca²⁺'], regulation: 'PTH, vitamin D upregulate' },
  ],
  hormoneResponsive: ['PTH (Ca²⁺ reabsorption)', 'Vitamin D (Ca²⁺ reabsorption)'],
  explanations: {
    level1: 'The distal tubule fine-tunes how much salt and calcium your body keeps.',
    level2: 'The DCT reabsorbs Na⁺ and Cl⁻ using the NCC transporter (target of thiazide diuretics) and is an important site for calcium reabsorption regulated by PTH.',
    level3: 'The DCT continues to dilute tubular fluid via NCC-mediated NaCl reabsorption without water. PTH and vitamin D increase Ca²⁺ reabsorption via TRPV5. The macula densa (early DCT) is part of the juxtaglomerular apparatus.',
    level4: 'Thiazide diuretics inhibit NCC, causing natriuresis with enhanced Ca²⁺ reabsorption (useful in hypercalciuria). This differs from loop diuretics, which waste Ca²⁺. The macula densa senses tubular NaCl delivery and regulates renin release and TGF.',
    level5: 'DCT Ca²⁺ reabsorption: TRPV5 (apical) → calbindin (cytoplasm) → NCX1 and PMCA1b (basolateral). PTH and 1,25-(OH)₂D upregulate this pathway. Thiazides indirectly enhance Ca²⁺ reabsorption by causing mild volume contraction and enhanced proximal Na⁺ reabsorption. Gitelman syndrome (NCC mutation) causes hypokalemia, hypomagnesemia, and hypocalciuria.',
  },
  keyFacts: [
    'NCC: Na⁺-Cl⁻ cotransporter (thiazide target)',
    'Water impermeable - continues dilution',
    'PTH increases Ca²⁺ reabsorption',
    'Thiazides decrease Ca²⁺ excretion (unlike loops)',
    'Macula densa is in early DCT',
  ],
  clinicalNote: 'Thiazide diuretics are first-line for hypertension and reduce kidney stone risk in hypercalciuria',
});

nephronSegments.set('collecting-duct', {
  id: 'collecting-duct',
  name: 'Collecting Duct',
  segment: 'collecting-duct',
  location: 'From cortex through medulla to papilla',
  function: 'Final regulation of water, Na⁺, K⁺, H⁺, urea',
  epitheliumType: 'Principal cells (Na⁺, K⁺, water) and intercalated cells (H⁺, HCO3⁻)',
  permeability: {
    water: 'variable',
    sodium: 'variable',
    urea: 'variable',
  },
  transporters: [
    { name: 'ENaC', gene: 'SCNN1', location: 'apical', mechanism: 'channel', substrates: ['Na⁺'], regulation: 'Aldosterone upregulates', clinicalNote: 'Target of amiloride; Liddle syndrome (gain-of-function)' },
    { name: 'ROMK', location: 'apical', mechanism: 'channel', substrates: ['K⁺'], clinicalNote: 'K⁺ secretion' },
    { name: 'Aquaporin-2', gene: 'AQP2', location: 'apical', mechanism: 'channel', substrates: ['Water'], regulation: 'ADH inserts via V2R', clinicalNote: 'Target of ADH; NDI if mutated' },
    { name: 'H⁺-ATPase', location: 'apical', mechanism: 'active', substrates: ['H⁺'], clinicalNote: 'Type A intercalated cells' },
  ],
  hormoneResponsive: ['ADH (water reabsorption)', 'Aldosterone (Na⁺ reabsorption, K⁺ secretion)'],
  explanations: {
    level1: 'The collecting duct is where hormones decide how concentrated or dilute your urine will be.',
    level2: 'The collecting duct responds to hormones: ADH (vasopressin) makes it permeable to water for concentrated urine, while aldosterone increases Na⁺ reabsorption and K⁺ secretion.',
    level3: 'Principal cells: ENaC (Na⁺ in), ROMK (K⁺ out), AQP2 (water). Aldosterone increases ENaC and Na⁺/K⁺-ATPase expression. ADH (V2R) triggers AQP2 insertion into apical membrane. Intercalated cells regulate acid-base balance.',
    level4: 'ADH binds V2R (Gs-coupled) → cAMP → PKA → AQP2 vesicle fusion with apical membrane. In the absence of ADH, AQP2 is internalized → dilute urine. Aldosterone enters principal cells, binds mineralocorticoid receptor (MR), and upregulates ENaC and Na⁺/K⁺-ATPase. ENaC creates electrochemical gradient favoring K⁺ secretion.',
    level5: 'ADH also increases urea permeability in inner medullary collecting duct (UT-A1, UT-A3), contributing to medullary hypertonicity. Type A intercalated cells secrete H⁺ (via H⁺-ATPase) and reabsorb HCO3⁻ (via Cl⁻/HCO3⁻ exchange, pendrin). Type B intercalated cells secrete HCO3⁻ and can shift to Type A in acidosis. Liddle syndrome (ENaC gain-of-function): hypertension, hypokalemia. NDI (AQP2 or V2R mutations): polyuria, hypernatremia.',
  },
  keyFacts: [
    'ADH increases water permeability (AQP2)',
    'Aldosterone increases Na⁺ reabsorption, K⁺ secretion',
    'Principal cells: Na⁺, K⁺, water handling',
    'Intercalated cells: acid-base regulation',
    'Urea recycling contributes to medullary gradient',
  ],
  clinicalNote: 'Nephrogenic diabetes insipidus: collecting duct unresponsive to ADH (lithium, mutations in V2R or AQP2)',
});

// ============================================================================
// RENAL FACTORS
// ============================================================================

export const RENAL_FACTORS: RenalFactor[] = [
  {
    id: 'renin',
    name: 'Renin',
    source: 'Juxtaglomerular cells (afferent arteriole)',
    stimulus: ['Decreased renal perfusion pressure', 'Decreased NaCl delivery to macula densa', 'β1-adrenergic stimulation'],
    actions: ['Converts angiotensinogen to angiotensin I'],
    target: 'Angiotensinogen (liver)',
    effect: 'Initiates RAAS cascade',
    clinicalNote: 'Plasma renin activity used to classify hypertension',
  },
  {
    id: 'erythropoietin',
    name: 'Erythropoietin (EPO)',
    source: 'Peritubular interstitial cells (cortex)',
    stimulus: ['Hypoxia', 'Anemia'],
    actions: ['Stimulates erythroid progenitor proliferation and differentiation'],
    target: 'Bone marrow erythroid progenitors',
    effect: 'Increases red blood cell production',
    clinicalNote: 'Anemia of CKD due to decreased EPO production; treat with EPO-stimulating agents',
  },
  {
    id: 'calcitriol',
    name: '1,25-(OH)₂ Vitamin D (Calcitriol)',
    source: 'Proximal tubule (1α-hydroxylase)',
    stimulus: ['PTH', 'Hypophosphatemia', 'Hypocalcemia'],
    actions: ['Increases intestinal Ca²⁺ and PO₄³⁻ absorption', 'Enhances bone resorption (with PTH)', 'Feedback inhibition of PTH'],
    target: 'Intestine, bone, parathyroid gland',
    effect: 'Increases serum calcium and phosphate',
    clinicalNote: 'CKD causes decreased 1α-hydroxylase → low calcitriol → secondary hyperparathyroidism',
  },
  {
    id: 'prostaglandins',
    name: 'Prostaglandins (PGE2, PGI2)',
    source: 'Various renal cells',
    stimulus: ['Angiotensin II', 'Bradykinin', 'Sympathetic activation'],
    actions: ['Afferent arteriolar dilation', 'Natriuresis', 'Antagonize ADH'],
    target: 'Renal vasculature, tubules',
    effect: 'Maintain renal blood flow, especially in low perfusion states',
    clinicalNote: 'NSAIDs inhibit → loss of protective vasodilation → AKI risk, especially with ACEi/ARB',
  },
];

// ============================================================================
// GFR CONCEPTS
// ============================================================================

export const GFR_CONCEPTS: GFRConcept[] = [
  {
    name: 'Glomerular Filtration Rate (GFR)',
    normalValue: '~125 mL/min or ~180 L/day',
    determinants: ['Filtration coefficient (Kf)', 'Net ultrafiltration pressure'],
    calculation: 'GFR = Kf × [(PGC - PBC) - (πGC - πBC)]',
    clinicalNote: 'GFR estimated from creatinine using CKD-EPI equation; gold standard is inulin clearance',
  },
  {
    name: 'Renal Plasma Flow (RPF)',
    normalValue: '~600 mL/min',
    determinants: ['Cardiac output', 'Renal vascular resistance'],
    calculation: 'Estimated by PAH clearance (ERPF)',
    clinicalNote: 'True RPF slightly higher than ERPF because PAH extraction is ~90%',
  },
  {
    name: 'Filtration Fraction (FF)',
    normalValue: '~20%',
    determinants: ['GFR', 'RPF'],
    calculation: 'FF = GFR / RPF',
    clinicalNote: 'Increased FF (efferent constriction) increases peritubular oncotic pressure → enhanced proximal reabsorption',
  },
  {
    name: 'Renal Blood Flow (RBF)',
    normalValue: '~1200 mL/min (20-25% of CO)',
    determinants: ['Cardiac output', 'Renal vascular resistance', 'Mean arterial pressure'],
    calculation: 'RBF = RPF / (1 - Hematocrit)',
    clinicalNote: 'Kidneys are 0.5% of body mass but receive 20-25% of cardiac output',
  },
];

// ============================================================================
// INDEXES
// ============================================================================

const structuresByComponent: Map<string, UrinaryStructure[]> = new Map();

for (const structure of urinaryStructures.values()) {
  const existing = structuresByComponent.get(structure.component) || [];
  existing.push(structure);
  structuresByComponent.set(structure.component, existing);
}

// ============================================================================
// API FUNCTIONS
// ============================================================================

/**
 * Get a urinary structure by ID
 */
export function getUrinaryStructure(id: string): UrinaryStructure | undefined {
  return urinaryStructures.get(id);
}

/**
 * Get all urinary structures
 */
export function getAllUrinaryStructures(): UrinaryStructure[] {
  return Array.from(urinaryStructures.values());
}

/**
 * Get urinary structures by component
 */
export function getUrinaryStructuresByComponent(component: UrinaryComponent): UrinaryStructure[] {
  return structuresByComponent.get(component) || [];
}

/**
 * Get a nephron segment by ID
 */
export function getNephronSegment(id: string): NephronSegmentDetail | undefined {
  return nephronSegments.get(id);
}

/**
 * Get all nephron segments
 */
export function getAllNephronSegments(): NephronSegmentDetail[] {
  return Array.from(nephronSegments.values());
}

/**
 * Search urinary structures
 */
export function searchUrinary(query: string): (UrinaryStructure | NephronSegmentDetail)[] {
  const lowerQuery = query.toLowerCase();
  const results: (UrinaryStructure | NephronSegmentDetail)[] = [];

  for (const structure of urinaryStructures.values()) {
    if (
      structure.name.toLowerCase().includes(lowerQuery) ||
      structure.function.toLowerCase().includes(lowerQuery)
    ) {
      results.push(structure);
    }
  }

  for (const segment of nephronSegments.values()) {
    if (
      segment.name.toLowerCase().includes(lowerQuery) ||
      segment.function.toLowerCase().includes(lowerQuery)
    ) {
      results.push(segment);
    }
  }

  return results;
}

/**
 * Get explanation at a specific level
 */
export function getUrinaryExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const structure = urinaryStructures.get(id);
  if (structure) return structure.explanations[`level${level}`];

  const segment = nephronSegments.get(id);
  if (segment) return segment.explanations[`level${level}`];

  return undefined;
}

/**
 * Get urinary system statistics
 */
export function getUrinaryStatistics(): UrinaryStatistics {
  return {
    totalStructures: urinaryStructures.size + nephronSegments.size,
    nephronCount: '~1 million per kidney',
    dailyFilteredVolume: '~180 liters',
    dailyUrineOutput: '1-2 liters',
  };
}
