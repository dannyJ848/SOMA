/**
 * Urinary System Anatomy - Comprehensive Educational Content
 *
 * Covers the complete urinary system including kidneys, ureters, bladder, and urethra.
 */

import { EducationalContent } from '../../types';

export const urinarySystemAnatomy: EducationalContent = {
  id: 'structure-urinary-system-anatomy',
  type: 'structure',
  name: 'Urinary System Anatomy',
  alternateNames: ['Renal System', 'Urinary Tract', 'Genitourinary System'],
  fmaId: 'FMA:7159',

  levels: {
    1: {
      level: 1,
      summary: 'The urinary system is made up of your kidneys, tubes called ureters, your bladder, and a tube called the urethra that work together to filter your blood and remove waste as urine.',
      explanation: `Your urinary system is like your body's waste removal system. Here's how it works:

**The Kidneys** (you have two)
Your kidneys are bean-shaped organs located on either side of your spine, just below your ribcage in your back. They filter your blood to remove waste and extra water. Think of them as coffee filters - they keep the good stuff in your blood while letting waste pass through.

**The Ureters** (you have two)
These are thin tubes about 10 inches long that connect each kidney to your bladder. They carry urine from your kidneys down to your bladder. Muscles in the ureter walls squeeze to push urine along - you can't feel this happening!

**The Bladder**
Your bladder is a balloon-like organ that sits in your lower belly. It stores urine until you're ready to go to the bathroom. An adult bladder can hold about 2 cups of urine, though you usually feel the urge to go when it's about half full.

**The Urethra**
This is the tube that carries urine from your bladder out of your body when you urinate. In men, it's longer (about 8 inches) because it runs through the penis. In women, it's much shorter (about 1.5 inches).

Every day, your kidneys filter about 200 liters of blood but you only make about 1-2 liters of urine. The rest of the water goes back into your body!`,
      keyTerms: [
        { term: 'kidney', definition: 'Bean-shaped organ that filters waste from your blood' },
        { term: 'ureter', definition: 'Tube that carries urine from kidney to bladder' },
        { term: 'bladder', definition: 'Balloon-like organ that stores urine' },
        { term: 'urethra', definition: 'Tube that carries urine out of your body' },
        { term: 'urine', definition: 'Liquid waste made by your kidneys' },
      ],
      analogies: [
        'Your urinary system is like a water treatment plant - it cleans your blood and sends waste to be removed.',
        'The kidneys are like coffee filters, keeping the good stuff while letting waste pass through.',
        'Your bladder is like a water balloon that fills up and empties when you go to the bathroom.',
      ],
      examples: [
        'When you drink a lot of water, you urinate more often because your kidneys are removing the extra water.',
        'Holding your urine for too long can stretch your bladder and make it harder to empty completely.',
      ],
    },
    2: {
      level: 2,
      summary: 'The urinary system consists of paired kidneys and ureters, a single bladder, and urethra, working together to filter blood, produce urine, and eliminate metabolic waste.',
      explanation: `## Components of the Urinary System

**Kidneys**
- Location: Retroperitoneal space, T12-L3 vertebral levels
- Size: Approximately 11cm long, 6cm wide, 3cm thick
- Function: Filter blood, regulate fluid/electrolyte balance, produce urine
- Blood supply: Renal arteries directly from abdominal aorta
- Each kidney contains approximately 1 million nephrons (filtering units)
- Process about 180 liters of blood daily, producing 1-2 liters of urine

**Ureters**
- Length: 25-30 cm
- Diameter: 3-4 mm
- Structure: Muscular tubes with three layers
- Three natural narrowing points (where stones commonly get stuck):
  1. Ureteropelvic junction (UPJ) - where ureter meets kidney
  2. Crossing of iliac vessels
  3. Ureterovesical junction (UVJ) - where ureter enters bladder
- Peristalsis moves urine toward bladder (1-5 contractions per minute)

**Bladder**
- Location: Pelvic cavity, behind pubic bone
- Capacity: 400-600 mL (comfortable); up to 800+ mL (maximum)
- Wall composition: Detrusor muscle (smooth muscle)
- Trigone: Triangular area formed by two ureteral openings and internal urethral opening
- Urge to void typically felt at 200-300 mL

**Urethra**
- Male: ~20 cm, passes through prostate and penis
  - Prostatic, membranous, and spongy (penile) segments
- Female: ~4 cm, opens anterior to vagina
- Internal sphincter: Involuntary (smooth muscle)
- External sphincter: Voluntary (skeletal muscle)

## Urination Process (Micturition)
1. Bladder fills → stretch receptors signal brain
2. Voluntary decision to void
3. Detrusor muscle contracts
4. Internal sphincter relaxes
5. External sphincter relaxes voluntarily
6. Urine expelled through urethra`,
      keyTerms: [
        { term: 'nephron', definition: 'The functional filtering unit of the kidney; each kidney has about 1 million', pronunciation: 'NEF-ron' },
        { term: 'retroperitoneal', definition: 'Located behind the peritoneum (abdominal lining)', pronunciation: 'ret-roh-pair-ih-toh-NEE-al' },
        { term: 'detrusor muscle', definition: 'The smooth muscle layer of the bladder wall that contracts during urination', pronunciation: 'deh-TROO-sor' },
        { term: 'trigone', definition: 'Triangular area at the base of the bladder formed by the ureteral and urethral openings', pronunciation: 'TRY-gohn' },
        { term: 'micturition', definition: 'The process of urinating', pronunciation: 'mik-chuh-RISH-un' },
        { term: 'peristalsis', definition: 'Wave-like muscle contractions that move urine through the ureters' },
      ],
      analogies: [
        'The urinary system works like a plumbing system - kidneys are the water treatment plant, ureters are pipes, bladder is a holding tank, and urethra is the drain.',
        'The three narrowings in the ureter are like checkpoints where kidney stones commonly get stuck.',
      ],
    },
    3: {
      level: 3,
      summary: 'The urinary system comprises the kidneys (with cortex, medulla, and collecting system), ureters, bladder (with detrusor and sphincter mechanism), and gender-specific urethra, coordinating filtration, concentration, storage, and elimination of urine.',
      explanation: `## Kidney Architecture

**Gross Anatomy:**
- Fibrous capsule → perirenal fat → Gerota's fascia → pararenal fat
- Hilum: Entry point for renal artery, vein, pelvis, lymphatics, nerves
- Cortex: Outer zone containing glomeruli and convoluted tubules
- Medulla: Inner zone with 8-18 renal pyramids

**Collecting System:**
- Minor calyces (8-18) → Major calyces (2-3) → Renal pelvis → Ureter
- Transitional epithelium (urothelium) lines the entire collecting system

**Nephron Components:**
- Glomerulus: Filtration unit with afferent/efferent arterioles
- Bowman's capsule: Receives filtrate from glomerulus
- Proximal convoluted tubule: Reabsorbs 65% of filtrate
- Loop of Henle: Concentration mechanism
- Distal convoluted tubule: Fine-tuning of electrolytes
- Collecting duct: Final concentration, responds to ADH

## Ureter Structure

**Histology:**
- Mucosa: Transitional epithelium
- Muscularis: Inner longitudinal, outer circular (reversed in lower ureter)
- Adventitia: Connective tissue

**Clinical Anatomy:**
- Crosses iliac vessels at bifurcation of common iliac
- In pelvis: Runs in paravesical space
- Enters bladder at oblique angle (natural reflux prevention)
- Intramural segment: 1-2 cm within bladder wall

## Bladder Anatomy

**Position and Relations:**
- Male: Rectum posterior, prostate inferior
- Female: Uterus/vagina posterior, pelvic floor inferior

**Wall Layers:**
- Mucosa: Transitional epithelium (rugae when empty)
- Submucosa: Connective tissue
- Detrusor muscle: Three smooth muscle layers
- Serosa/Adventitia: Outer covering

**Trigone Features:**
- Smooth appearance (no rugae)
- Interureteric ridge (bar connecting ureteral orifices)
- Uvula vesicae: Protrusion at internal urethral orifice (more prominent in males)

## Urethra

**Male Urethra (20 cm):**
1. Prostatic (3-4 cm): Receives prostatic secretions and ejaculatory ducts
2. Membranous (1-2 cm): Passes through external sphincter
3. Spongy/Penile (15 cm): Through corpus spongiosum, ends at meatus

**Female Urethra (4 cm):**
- Embedded in anterior vaginal wall
- Opens between clitoris and vaginal introitus
- Supported by pubourethral ligaments

## Innervation

**Autonomic Control:**
- Sympathetic (T10-L2): Relaxes detrusor, contracts internal sphincter (storage)
- Parasympathetic (S2-S4): Contracts detrusor, relaxes internal sphincter (voiding)

**Somatic Control:**
- Pudendal nerve (S2-S4): External sphincter (voluntary control)

## Micturition Reflex

Storage phase:
- Sympathetic dominance
- Detrusor relaxed, sphincters contracted
- Pontine storage center active

Voiding phase:
- Parasympathetic activation
- Detrusor contracts
- Internal sphincter relaxes reflexively
- External sphincter relaxes voluntarily
- Pontine micturition center coordinates`,
      keyTerms: [
        { term: 'glomerulus', definition: 'Cluster of capillaries in the nephron where blood filtration occurs', pronunciation: 'gloh-MER-yoo-lus' },
        { term: 'transitional epithelium', definition: 'Specialized stratified epithelium (urothelium) lining the urinary tract that can stretch' },
        { term: 'Gerota\'s fascia', definition: 'Connective tissue envelope surrounding the kidney and perirenal fat', pronunciation: 'geh-ROH-tahz' },
        { term: 'interureteric ridge', definition: 'Muscular bar connecting the two ureteral orifices at the bladder trigone' },
        { term: 'pontine micturition center', definition: 'Brainstem region coordinating the voiding reflex' },
        { term: 'pudendal nerve', definition: 'Somatic nerve (S2-S4) controlling the external urethral sphincter' },
      ],
      clinicalNotes: 'The oblique entry of the ureter into the bladder creates a valve mechanism preventing reflux. Short female urethra and proximity to vagina/anus increases UTI risk. The trigone is a common site for bladder tumors.',
    },
    4: {
      level: 4,
      summary: 'The urinary system integrates complex glomerular filtration, tubular processing, and neurologically coordinated storage/voiding mechanisms, with significant anatomical variations affecting clinical management.',
      explanation: `## Renal Physiology Integration

**Glomerular Filtration:**
- GFR: ~125 mL/min (~180 L/day)
- Filtration barrier: Endothelium (fenestrated) → Basement membrane → Podocytes
- Filtration pressure: (Capillary pressure - Bowman's pressure) - Oncotic pressure
- Autoregulation maintains GFR over MAP 80-180 mmHg

**Tubular Function:**
| Segment | Function | Regulation |
|---------|----------|------------|
| PCT | 65% reabsorption (Na, glucose, amino acids, HCO3) | Volume status |
| Thin descending limb | Water reabsorption | Passive |
| Thick ascending limb | NaCl reabsorption (impermeable to water) | Loop diuretics target |
| DCT | Na/Cl reabsorption, Ca regulation | Thiazides, PTH |
| Collecting duct | Water reabsorption, K+ secretion, H+ secretion | ADH, Aldosterone |

**Concentration Mechanism:**
- Countercurrent multiplication (loop of Henle)
- Countercurrent exchange (vasa recta)
- Medullary gradient: 300 → 1200 mOsm/kg cortex to papilla

## Bladder Physiology

**Storage Phase:**
- Compliance: Δ Volume / Δ Pressure (normal: high compliance)
- Sympathetic: β3 receptors relax detrusor, α1 contract sphincter
- Guarding reflex: Increased activity to external sphincter with filling

**Voiding Phase:**
- Periaqueductal gray → Pontine micturition center activation
- Parasympathetic M3 receptors: Detrusor contraction
- Coordinated sphincter relaxation (no detrusor-sphincter dyssynergia)

**Voiding Parameters:**
- Flow rate: 20-25 mL/sec (male), 25-30 mL/sec (female)
- Post-void residual: <50 mL normal
- Voiding time: 20-30 seconds for ~300 mL void

## Anatomical Variations

**Kidney:**
- Horseshoe kidney: 1:400-500, isthmus at L4-L5
- Ectopic kidney: Pelvic, crossed fused ectopia
- Duplex system: Complete or incomplete ureteral duplication
- Malrotation: Failure of normal 90° medial rotation

**Ureter:**
- Retrocaval ureter: Right ureter passes behind IVC
- Ureteral duplication: Upper moiety ureter inserts inferior and medial (Weigert-Meyer rule)
- Ureterocele: Cystic dilation of intramural ureter

**Bladder:**
- Bladder diverticula: Outpouchings through muscular wall
- Exstrophy: Failure of anterior abdominal wall closure
- Urachal remnants: Patent urachus, urachal cyst, urachal sinus

## Clinical Correlations

**Obstruction:**
- UPJ obstruction: Most common site of congenital obstruction
- Ureteral stricture: Ischemia, instrumentation, radiation
- BPH: Median lobe enlargement → bladder outlet obstruction
- Urethral stricture: Trauma, infection, instrumentation

**Neurogenic Bladder:**
- Suprapontine lesion: Detrusor overactivity, coordinated voiding
- Spinal cord injury above S2: Detrusor overactivity with DSD
- Lower motor neuron: Acontractile bladder, no reflex voiding
- Diabetes: Initially overactive, then underactive

**Infection Pathways:**
- Ascending (most common): Urethra → Bladder → Ureter → Kidney
- Hematogenous: S. aureus to kidney
- Lymphatic: Rare, from adjacent infection`,
      keyTerms: [
        { term: 'GFR', definition: 'Glomerular Filtration Rate - volume of fluid filtered by glomeruli per unit time (~125 mL/min)', pronunciation: 'G-F-R' },
        { term: 'detrusor-sphincter dyssynergia', definition: 'Lack of coordination between bladder contraction and sphincter relaxation, causing incomplete emptying', pronunciation: 'DSD' },
        { term: 'Weigert-Meyer rule', definition: 'In duplex systems, the upper pole ureter inserts inferior and medial to the lower pole ureter' },
        { term: 'compliance', definition: 'The ability of the bladder to accommodate increasing volume without significant pressure increase' },
        { term: 'countercurrent multiplication', definition: 'Process in loop of Henle creating the medullary concentration gradient' },
        { term: 'podocyte', definition: 'Specialized epithelial cells with foot processes forming the final filtration barrier' },
      ],
      clinicalNotes: 'Horseshoe kidney increases risk of UPJ obstruction, stones, and infection due to malrotation and aberrant vessels. Retrocaval ureter is always on the right and requires surgical repair if obstructive. Neurogenic bladder management depends on the lesion level - upper motor neuron lesions often benefit from anticholinergics while lower motor neuron lesions may need CIC.',
    },
    5: {
      level: 5,
      summary: 'Mastery of urinary system anatomy requires integration of embryology, variant anatomy, physiological mechanisms, surgical approaches, and interventional techniques for comprehensive urological practice.',
      explanation: `## Embryological Basis of Urinary Tract

**Kidney Development:**
- Pronephros (week 4): Vestigial, regresses
- Mesonephros (weeks 4-8): Forms mesonephric (Wolffian) duct
- Metanephros (week 5+): Definitive kidney from ureteric bud + metanephric mesenchyme

**Ureteric Bud:**
- Origin: Mesonephric duct outgrowth
- Forms: Collecting system (collecting ducts → calyces → pelvis → ureter)
- Induces: Nephron formation in metanephric mesenchyme
- Abnormal budding → Duplex systems, ectopic ureter

**Bladder/Urethra Development:**
- Urogenital sinus: Divides into bladder/urethra and urogenital structures
- Trigone: Incorporates distal mesonephric duct derivatives
- Urachal remnant: Allantois connection to umbilicus

## Surgical Anatomy

**Kidney:**
- Approach: Flank (11th/12th rib), transperitoneal, retroperitoneoscopic
- Segmental anatomy: 5 arterial segments (apical, upper, middle, lower, posterior)
- Brodel's line: Avascular plane for nephrotomy
- Left renal vein: Longer, receives gonadal + adrenal + lumbar veins (can be ligated)
- Right renal vein: Short, direct to IVC (higher risk injury)

**Ureter:**
- Blood supply: Multiple sources (renal, gonadal, iliac, vesical) → Aortic side above pelvis, lateral side in pelvis
- Safe distance from uterine artery: "Water under the bridge" (ureter passes under uterine artery)
- Laparoscopic identification: Peristalsis, "snap sign," tracing from kidney

**Bladder:**
- Surgical planes: Space of Retzius (retropubic), Denonvillier's fascia (posterior)
- Radical cystectomy: En bloc with prostate (men) or anterior exenteration (women)
- Urinary diversion: Ileal conduit, neobladder, continent cutaneous

**Urethra:**
- Bulbar urethra: Optimal site for urethroplasty (good blood supply)
- Pendulous urethra: Poorest blood supply
- Membranous urethra: External sphincter location (preserve in prostatectomy)

## Interventional Anatomy

**Percutaneous Nephrolithotomy:**
- Access: Posterior calyx, 30° off vertical
- Entry: Through Brodel's line, below 12th rib (avoid pleura)
- Target: Posterior lower pole calyx most common
- Tract size: 24-30 Fr for standard, mini-perc 12-20 Fr

**Ureteral Access:**
- Retrograde: Via cystoscopy through ureteral orifice
- Antegrade: Via nephrostomy
- Three narrowings: UPJ, iliac crossing, UVJ
- Guidewire: Safety wire always in place

**Bladder Access:**
- Suprapubic: 2cm above pubis, perpendicular
- Transurethral: Standard, flexible, or rigid cystoscopy

## Imaging Interpretation

**CT Urography Protocol:**
1. Non-contrast: Stone detection (HU values), masses
2. Corticomedullary phase (25-70s): Vascular anatomy, RCC enhancement
3. Nephrographic phase (80-120s): Parenchymal lesion detection
4. Excretory phase (5-10 min): Collecting system, urothelial lesions

**MR Urography:**
- T2-weighted: "MR urography" - fluid bright in collecting system
- Gadolinium-enhanced: Similar phases to CT
- Indications: Pediatric, contrast allergy, pregnancy (avoid gadolinium 1st trimester)

**Nuclear Medicine:**
- MAG3: GFR, differential function, drainage (T1/2)
- DMSA: Cortical function, scarring (best for reflux follow-up)
- Split function: <40% = significantly impaired

## Special Populations

**Pediatric Considerations:**
- Vesicoureteral reflux: Grades I-V, spontaneous resolution grade I-III
- Posterior urethral valves: Male, type I most common
- UPJ obstruction: Most common congenital obstruction
- Multicystic dysplastic kidney: Non-functional, usually involutes

**Transplant:**
- Donor: Left kidney preferred (longer vein)
- Recipient: Right iliac fossa (easier vascular access)
- Anastomoses: Artery to external iliac, vein to external iliac, ureter to bladder
- Complications: Vascular thrombosis (early), urine leak, rejection, ureteral stricture

**Oncologic Considerations:**
- Bladder cancer: Staging determines muscle invasion (T2+) requiring cystectomy
- Kidney cancer: Venous invasion (renal vein → IVC → right atrium) staging
- Prostate cancer: Nerve-sparing anatomy for preserving potency`,
      keyTerms: [
        { term: 'metanephric mesenchyme', definition: 'Embryonic tissue that differentiates into nephrons upon induction by the ureteric bud' },
        { term: 'Space of Retzius', definition: 'Retropubic space between bladder and pubic symphysis - surgical plane for radical prostatectomy' },
        { term: 'Denonvillier\'s fascia', definition: 'Rectovesical fascia between rectum and prostate/bladder - posterior surgical plane', pronunciation: 'den-on-vee-YAY' },
        { term: 'split renal function', definition: 'Differential kidney function on nuclear scan - guides decisions about nephrectomy' },
        { term: 'MAG3 scan', definition: 'Tc-99m mercaptoacetyltriglycine nuclear study assessing renal function and drainage' },
        { term: 'corticomedullary phase', definition: 'CT phase (25-70s post-contrast) when cortex enhances before medulla - optimal for vascular anatomy' },
      ],
      clinicalNotes: `Key clinical pearls for urologic surgery:
1. Always identify the ureter before ligating any pelvic vessel
2. Left renal vein can be ligated due to collaterals; right cannot
3. Preserve ureteral blood supply by staying on aortic side above pelvis, lateral side below
4. For PCNL, enter below 12th rib to avoid pleural injury
5. Suprapubic catheter placement requires confirming bladder distension
6. In unclear pelvic anatomy, always trace ureter from kidney downward
7. Post-void residual >200 mL is clinically significant; >300 mL warrants catheterization`,
    },
  },

  media: [
    {
      id: 'urinary-system-overview',
      type: 'diagram',
      filename: 'urinary-system-overview.svg',
      title: 'Urinary System Overview',
      description: 'Complete urinary system showing kidneys, ureters, bladder, and urethra',
    },
    {
      id: 'bladder-anatomy',
      type: 'diagram',
      filename: 'bladder-anatomy.svg',
      title: 'Bladder Anatomy',
      description: 'Cross-section of bladder showing trigone, detrusor, and sphincters',
    },
  ],

  citations: [
    {
      id: 'campbell-walsh-anatomy',
      type: 'textbook',
      title: 'Surgical, Radiographic, and Endoscopic Anatomy of the Kidney and Ureter',
      source: 'Campbell-Walsh-Wein Urology',
      chapter: '2',
    },
    {
      id: 'grays-urinary',
      type: 'textbook',
      title: 'Urinary System',
      authors: ['Standring, S.'],
      source: 'Gray\'s Anatomy: The Anatomical Basis of Clinical Practice',
      chapter: '74',
    },
  ],

  crossReferences: [
    { targetId: 'structure-kidney-gross-anatomy', targetType: 'structure', relationship: 'child', label: 'Kidney Anatomy' },
    { targetId: 'structure-male-reproductive', targetType: 'structure', relationship: 'related', label: 'Male Reproductive System' },
    { targetId: 'structure-female-pelvic', targetType: 'structure', relationship: 'related', label: 'Female Pelvic Anatomy' },
  ],

  tags: {
    systems: ['urinary', 'renal', 'genitourinary'],
    topics: ['anatomy', 'physiology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default urinarySystemAnatomy;
