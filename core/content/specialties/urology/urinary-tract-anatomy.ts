/**
 * Urinary Tract Anatomy - Comprehensive Educational Content
 *
 * Covers the complete urinary system including kidneys, ureters, bladder,
 * and urethra with emphasis on clinically relevant anatomy.
 */

import { EducationalContent } from '../../types';

export const urinaryTractAnatomy: EducationalContent = {
  id: 'structure-urinary-tract-anatomy',
  type: 'structure',
  name: 'Urinary Tract Anatomy',
  alternateNames: ['Urinary System Anatomy', 'Genitourinary Anatomy', 'Renal System Anatomy'],
  fmaId: 'FMA:7159',

  levels: {
    1: {
      level: 1,
      summary: 'Your urinary system is like a plumbing system that filters your blood and removes waste as urine.',
      explanation: `Your urinary system is made up of several parts that work together like a water filtration plant:

**The Kidneys (2):**
You have two kidneys shaped like kidney beans, located in your back just below your ribs. They're about the size of your fist. The kidneys are the main filters - they clean your blood and remove waste and extra water to make urine (pee).

**The Ureters (2):**
These are two thin tubes, about 10-12 inches long, that carry urine from each kidney down to your bladder. Think of them like straws connecting the kidneys to the bladder.

**The Bladder:**
This is a stretchy, balloon-like bag that stores urine until you're ready to go to the bathroom. When empty, it's about the size of a pear, but it can stretch to hold about 2 cups of urine.

**The Urethra:**
This is the tube that carries urine from your bladder out of your body when you pee. In girls, it's short (about 1.5 inches). In boys, it's longer (about 8 inches) because it goes through the penis.

Every day, your kidneys filter about 200 liters of blood and make about 1-2 liters of urine!`,
      keyTerms: [
        { term: 'kidney', definition: 'Bean-shaped organs that filter blood and make urine' },
        { term: 'ureter', definition: 'Tubes that carry urine from kidneys to bladder' },
        { term: 'bladder', definition: 'A stretchy bag that stores urine' },
        { term: 'urethra', definition: 'The tube that carries urine out of your body' },
        { term: 'urine', definition: 'Liquid waste (pee) made by your kidneys' },
      ],
      analogies: [
        'Your urinary system is like a water treatment plant - it cleans dirty water (blood) and sends the waste (urine) out.',
        'The bladder is like a water balloon that fills up slowly and can stretch to hold more.',
        'The ureters are like one-way straws that only let urine go down, never back up.',
      ],
      examples: [
        'When you drink a lot of water, your kidneys make more urine and you need to pee more often.',
        'The feeling of needing to pee happens when your bladder stretches because it\'s getting full.',
      ],
    },
    2: {
      level: 2,
      summary: 'The urinary tract consists of the kidneys, ureters, bladder, and urethra, working together to filter blood, regulate fluid balance, and eliminate waste.',
      explanation: `## The Four Main Structures

**1. Kidneys:**
- Location: Retroperitoneal (behind the abdominal cavity), at T12-L3 vertebral levels
- Size: 11cm x 6cm x 3cm, weighing 150g each
- Function: Filter blood, produce urine, regulate electrolytes, blood pressure, and red blood cell production
- Blood supply: Renal arteries (direct branches from aorta) provide 20-25% of cardiac output
- Internal structure: Cortex (outer), medulla (inner pyramids), collecting system (calyces, pelvis)

**2. Ureters:**
- Length: 25-30cm (10-12 inches)
- Course: From renal pelvis, descend retroperitoneally, cross iliac vessels, enter bladder obliquely
- Three natural narrowings: Ureteropelvic junction (UPJ), crossing iliac vessels, ureterovesical junction (UVJ)
- Function: Propel urine via peristalsis (muscular contractions)

**3. Bladder:**
- Location: Pelvic cavity, behind pubic symphysis
- Capacity: 400-600mL (comfortable), up to 1000mL (maximum)
- Structure: Detrusor muscle (smooth muscle wall), trigone (triangular base where ureters enter)
- Function: Store urine, contract during urination (micturition)

**4. Urethra:**
- Female: 3-4cm, exits anterior to vaginal opening
- Male: 18-20cm, passes through prostate and penis
- Male urethra sections: Prostatic, membranous, spongy (penile)
- Function: Conduct urine out; in males, also conducts semen`,
      keyTerms: [
        { term: 'retroperitoneal', definition: 'Located behind the peritoneum (membrane lining the abdominal cavity)', pronunciation: 'ret-roh-pair-ih-toh-NEE-al' },
        { term: 'ureteropelvic junction', definition: 'Where the renal pelvis meets the ureter; common site for stones and obstruction', pronunciation: 'yoo-REE-ter-oh-PEL-vik' },
        { term: 'detrusor muscle', definition: 'The smooth muscle layer of the bladder wall that contracts during urination', pronunciation: 'deh-TROO-sor' },
        { term: 'trigone', definition: 'Triangular area at base of bladder between ureteral openings and urethral opening', pronunciation: 'TRY-gohn' },
        { term: 'micturition', definition: 'The process of urination', pronunciation: 'mik-tyoo-RISH-un' },
        { term: 'peristalsis', definition: 'Wave-like muscle contractions that move contents through tubes' },
      ],
      analogies: [
        'The three narrowings of the ureter are like tight spots in a garden hose where things can get stuck.',
        'The trigone is like the floor of a funnel, directing urine toward the exit.',
      ],
    },
    3: {
      level: 3,
      summary: 'The urinary tract demonstrates specialized anatomical adaptations for filtration, transport, storage, and controlled elimination of urine, with distinct histological features at each level.',
      explanation: `## Detailed Anatomical Organization

### Kidneys
**Macroscopic Structure:**
- Renal capsule (fibrous) → perirenal fat → Gerota's fascia
- Cortex: Contains all glomeruli, PCT, DCT
- Medulla: 8-18 renal pyramids containing loops of Henle, collecting ducts
- Collecting system: Minor calyces (8-18) → major calyces (2-3) → renal pelvis

**Vascular Architecture:**
Renal artery → segmental → interlobar → arcuate → interlobular → afferent arteriole → glomerulus → efferent arteriole → peritubular capillaries/vasa recta → venous system

**Histology:**
- Nephron: Functional unit (1 million per kidney)
- Components: Glomerulus, Bowman's capsule, PCT, loop of Henle, DCT, collecting duct

### Ureters
**Anatomical Course:**
1. Abdominal portion: Descends on psoas major, crossed by gonadal vessels
2. Pelvic portion: Crosses bifurcation of common iliac artery
3. Intramural portion: Passes obliquely through bladder wall (1-2cm)

**Histology (3 layers):**
- Mucosa: Transitional epithelium (urothelium)
- Muscularis: Inner longitudinal, outer circular (spiral arrangement)
- Adventitia: Connective tissue with blood vessels, nerves

**Blood Supply:**
- Upper: Renal artery branches
- Middle: Gonadal, common iliac, direct aortic branches
- Lower: Superior and inferior vesical arteries

### Bladder
**Anatomical Features:**
- Apex: Attached to median umbilical ligament (obliterated urachus)
- Body: Superior surface (peritoneum-covered), inferolateral surfaces
- Base (fundus): Trigone region, fixed position
- Neck: Continuous with urethra

**Histology:**
- Urothelium: 5-7 cell layers when contracted, 2-3 when distended
- Lamina propria: Loose connective tissue
- Muscularis (detrusor): Three interlacing layers
- Serosa/adventitia: Peritoneum superior; adventitia elsewhere

**Innervation:**
- Parasympathetic (S2-S4): Pelvic splanchnic nerves → detrusor contraction
- Sympathetic (T11-L2): Hypogastric nerve → bladder relaxation, internal sphincter contraction
- Somatic (S2-S4): Pudendal nerve → external sphincter (voluntary control)

### Urethra
**Male Urethra Segments:**
1. Prostatic (3-4cm): Through prostate; verumontanum, prostatic utricle, ejaculatory duct openings
2. Membranous (1-2cm): Through urogenital diaphragm; external sphincter; most vulnerable to injury
3. Spongy/penile (15cm): Through corpus spongiosum; bulbourethral gland openings, fossa navicularis

**Female Urethra:**
- 3-4cm length, posterior to pubic symphysis
- Embedded in anterior vaginal wall
- External opening: Between clitoris and vaginal opening

**Histology:**
- Transitions from transitional → pseudostratified columnar → stratified squamous near meatus`,
      keyTerms: [
        { term: 'urothelium', definition: 'Specialized transitional epithelium lining the urinary tract that can stretch and provides barrier function', pronunciation: 'yoo-roh-THEE-lee-um' },
        { term: 'verumontanum', definition: 'Elevation in prostatic urethra where ejaculatory ducts and prostatic utricle open', pronunciation: 'vair-oo-mon-TAN-um' },
        { term: 'arcuate artery', definition: 'Artery running along corticomedullary junction, giving rise to interlobular arteries' },
        { term: 'vasa recta', definition: 'Hairpin-shaped vessels following loops of Henle; crucial for urine concentration' },
        { term: 'urogenital diaphragm', definition: 'Muscular pelvic floor through which membranous urethra passes' },
        { term: 'Gerota\'s fascia', definition: 'Renal fascia enclosing kidney and perirenal fat; surgical landmark' },
      ],
      clinicalNotes: 'The oblique intramural course of the ureter creates a functional valve preventing reflux. The three ureteral narrowings (UPJ, iliac crossing, UVJ) are common sites for stone impaction. The membranous urethra is most vulnerable to pelvic fracture injury.',
    },
    4: {
      level: 4,
      summary: 'Urinary tract anatomy integrates embryological development, functional microanatomy, and neurovascular relationships essential for understanding pathophysiology and surgical approaches.',
      explanation: `## Embryological Development

**Kidney Development (Metanephros):**
- Develops from two sources: ureteric bud (collecting system) and metanephric mesenchyme (nephrons)
- Ureteric bud: From mesonephric (Wolffian) duct → branches to form collecting ducts, calyces, pelvis, ureter
- Metanephric mesenchyme: Induced by ureteric bud → forms nephrons up to Bowman's capsule
- Ascent: From sacral region to lumbar position (T12-L3) by 9th week
- Vascularization: Sequential blood supply from iliac → aortic branches; vestigial vessels may persist

**Common Developmental Anomalies:**
- Horseshoe kidney (1:400): Fusion of lower poles; ascent arrested by IMA
- Pelvic/ectopic kidney: Failed ascent
- Duplex collecting system: Premature/ectopic ureteric bud division
- Posterior urethral valves: Abnormal urethral fold development in males
- Hypospadias/epispadias: Abnormal urethral meatus position

**Bladder and Urethra Development:**
- Cloaca divides: Urorectal septum separates urogenital sinus (anterior) from rectum (posterior)
- Urogenital sinus differentiates: Bladder (cranial), urethra (caudal)
- Trigone: Incorporated mesonephric duct tissue (absorbs ureteric buds)

## Advanced Vascular Anatomy

**Renal Segmental Anatomy (Surgical):**
Five arterial segments (Graves classification):
1. Apical (superior)
2. Upper anterior
3. Middle anterior (largest)
4. Lower
5. Posterior

- Segments are end-arterial territories
- Avascular plane (Brodel's line) between anterior and posterior segments

**Variant Anatomy:**
- Accessory renal arteries: 25-30% (usually to poles)
- Early branching: Within 1cm of origin
- Retro-aortic left renal vein: 3%
- Circumaortic left renal vein: 8%
- Multiple renal veins (right): 15-20%

**Ureteral Blood Supply Principles:**
- Upper ureter: Medial blood supply (from renal artery)
- Lower ureter: Lateral blood supply (from iliac/vesical arteries)
- Surgical principle: Stay lateral to upper ureter, medial to lower ureter

## Neuroanatomy of Micturition

**Lower Urinary Tract Innervation:**

| Component | Nerve | Spinal Level | Neurotransmitter | Function |
|-----------|-------|--------------|------------------|----------|
| Detrusor (contract) | Pelvic | S2-S4 | Acetylcholine (M3) | Bladder contraction |
| Detrusor (relax) | Hypogastric | T11-L2 | Norepinephrine (β3) | Storage |
| Internal sphincter | Hypogastric | T11-L2 | Norepinephrine (α1) | Continence |
| External sphincter | Pudendal | S2-S4 | Acetylcholine (nicotinic) | Voluntary control |

**Micturition Reflex:**
1. Bladder filling → stretch receptors activate
2. Afferent signals → sacral spinal cord → pontine micturition center (PMC)
3. PMC coordinates: Detrusor contraction + sphincter relaxation
4. Higher cortical input: Voluntary control to inhibit or permit voiding

**Pathways:**
- Pontine micturition center (Barrington's nucleus): Coordinates voiding
- Pontine storage center (L region): Activates sphincter during storage
- Periaqueductal gray: Integrates autonomic and emotional inputs`,
      keyTerms: [
        { term: 'metanephros', definition: 'The definitive kidney developing from ureteric bud and metanephric mesenchyme', pronunciation: 'met-ah-NEF-ros' },
        { term: 'Brodel\'s line', definition: 'Avascular plane between anterior and posterior renal arterial segments; optimal nephrotomy site' },
        { term: 'pontine micturition center', definition: 'Brainstem nucleus coordinating bladder contraction with sphincter relaxation' },
        { term: 'urogenital sinus', definition: 'Embryonic structure giving rise to bladder and urethra' },
        { term: 'mesonephric duct', definition: 'Embryonic duct (Wolffian) giving rise to male reproductive structures and contributing to trigone' },
        { term: 'M3 receptor', definition: 'Muscarinic receptor subtype on detrusor muscle mediating contraction; target of anticholinergic drugs' },
      ],
      clinicalNotes: 'Understanding segmental arterial anatomy is essential for partial nephrectomy planning. Ureteral blood supply dictates surgical approach: lateral dissection superiorly, medial dissection inferiorly. Knowledge of micturition neuroanatomy guides evaluation and treatment of neurogenic bladder disorders.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive urinary tract anatomy integrates developmental biology, functional microanatomy, surgical planes, and interventional anatomy essential for contemporary urological practice.',
      explanation: `## Surgical and Interventional Anatomy

### Renal Surgery Approaches

**Retroperitoneal Approaches:**
1. Flank incision:
   - Position: Lateral decubitus, kidney rest
   - Landmarks: 12th rib, iliac crest, erector spinae
   - Layers: Skin → subcutaneous → latissimus dorsi → serratus posterior → external oblique → internal oblique → transversus abdominis → transversalis fascia → Gerota's fascia

2. Posterior lumbotomy:
   - Limited exposure; useful for upper pole lesions
   - Avoid 12th rib (pleural reflection)

**Transperitoneal Approaches:**
- Laparoscopic/robotic: Standard ports; mobilize colon along white line of Toldt
- Open: Midline or subcostal incision; medial visceral rotation

**Renal Hilum Anatomy (Anterior to Posterior):**
- Anterior: Renal vein
- Middle: Renal artery
- Posterior: Renal pelvis
- Mnemonic: VAP (Vein-Artery-Pelvis)

**Left vs Right Differences:**
| Feature | Left Kidney | Right Kidney |
|---------|-------------|--------------|
| Position | Higher (T12-L2) | Lower (L1-L3) |
| Renal vein | Longer (6-10cm); receives gonadal, adrenal | Shorter (2-4cm); direct to IVC |
| Relations | Spleen, pancreas tail, stomach | Liver, duodenum |
| Preferred for donation | Yes (longer vein) | No |

### Ureteral Surgical Anatomy

**Key Landmarks:**
1. Gonadal vessels cross anterior at L4-L5
2. Iliac vessel crossing: Ureter anterior to common/external iliac at bifurcation
3. "Water under the bridge": Ureter passes under uterine artery (female)
4. Oblique intramural segment: 1.5-2cm through bladder wall

**Iatrogenic Injury Prevention:**
- Identify ureter before dividing pelvic structures
- Ureteral stent placement for complex cases
- Intraoperative visualization (illuminated stent, indocyanine green)

### Bladder Surgical Anatomy

**Spaces:**
- Retropubic space (Retzius): Between pubic symphysis and bladder; cystectomy access
- Rectovesical pouch (male) / Vesicouterine pouch (female): Peritoneal reflection

**Radical Cystectomy Anatomy:**
- Lateral pedicles: Superior and inferior vesical vessels
- Posterior pedicles: In males, seminal vesicles, vas deferens, prostate
- Urethral division: At apex of prostate (male) or bladder neck (female)
- Lymph node templates: Pelvic (obturator, internal iliac, external iliac) +/- extended

**Neuroanatomical Preservation:**
- Neurovascular bundles: Posterolateral to prostate (cavernous nerves)
- Pelvic plexus: On lateral bladder wall, danger zone during dissection

### Urethral Anatomy - Surgical Considerations

**Male Urethra:**
- Prostatic: TURP landmark - verumontanum (avoid cutting distal to preserve external sphincter)
- Membranous: External sphincter location; vulnerable in pelvic fracture
- Bulbar: Most common site of stricture from instrumentation
- Pendulous: Susceptible to straddle injury

**Stricture Anatomy Principles:**
- Length and location determine repair options
- Blood supply: Bulbar (bulbar artery), pendulous (dorsal penile artery)
- Buccal mucosa graft: Onlay urethroplasty for longer strictures

### Interventional Anatomy

**Percutaneous Renal Access:**
- Target: Posterior calyx (usually lower pole)
- Approach: Posterolateral, through Brodel's avascular plane
- Entry point: Inferior to 12th rib (above risks pleural injury)
- Angle: 30 degrees from vertical, toward upper pole infundibulum

**Ureteral Stent Placement:**
- Cystoscopic approach: Identify ureteral orifice, advance guidewire, place stent
- Antegrade: Through nephrostomy tract for complex anatomy

**Suprapubic Catheter:**
- Entry: 2 fingerbreadths above pubic symphysis, midline
- Safety: Full bladder confirmed by ultrasound
- Avoid: Bowel (previous surgery), inferior epigastric vessels (lateral placement)

### Cross-Sectional Imaging Anatomy

**CT Urogram Phases:**
1. Non-contrast: Stones (hyperdense), acute hemorrhage
2. Corticomedullary (25-70s): Optimal for arterial anatomy, cortical masses
3. Nephrographic (80-120s): Parenchymal lesion detection
4. Excretory (5-15 min): Collecting system, urothelial lesions

**MRI Urography:**
- T2-weighted: Native contrast in collecting system (hydrogram)
- Post-gadolinium: Parenchymal enhancement, vascular anatomy
- Diffusion-weighted: Tumor detection, restriction in malignancy`,
      keyTerms: [
        { term: 'white line of Toldt', definition: 'Fusion plane between mesocolon and parietal peritoneum; incised for colon mobilization' },
        { term: 'neurovascular bundle', definition: 'Cavernous nerves and vessels posterolateral to prostate; preserve for potency in prostatectomy' },
        { term: 'space of Retzius', definition: 'Retropubic space between bladder and pubic symphysis; surgical access for cystectomy/prostatectomy' },
        { term: 'pelvic plexus', definition: 'Autonomic nerve network on lateral bladder wall supplying bladder, prostate, and erectile tissue' },
        { term: 'verumontanum', definition: 'Prostatic urethral landmark; distal limit of TURP resection to preserve sphincter' },
        { term: 'Brodel\'s avascular plane', definition: 'Relatively bloodless line 1cm posterior to lateral convex border; optimal for renal access' },
      ],
      clinicalNotes: `Key clinical applications:
1. Left kidney preferred for living donation due to longer renal vein facilitating anastomosis
2. During pelvic surgery, ureter crosses under uterine artery ("water under the bridge") - ligate uterine artery carefully
3. Percutaneous nephrostomy: Approach below 12th rib to avoid pleura, target posterior calyx
4. TURP: Never resect beyond verumontanum to preserve external sphincter and continence
5. Radical prostatectomy: Neurovascular bundle preservation posterolaterally maintains erectile function
6. Suprapubic catheter: Confirm full bladder by ultrasound; midline approach avoids epigastric vessels`,
    },
  },

  media: [
    {
      id: 'urinary-tract-overview',
      type: 'diagram',
      filename: 'urinary-tract-overview.svg',
      title: 'Urinary Tract Overview',
      description: 'Complete urinary system showing kidneys, ureters, bladder, and urethra',
    },
    {
      id: 'kidney-internal-structure',
      type: 'diagram',
      filename: 'kidney-internal-structure.svg',
      title: 'Kidney Internal Anatomy',
      description: 'Coronal section showing cortex, medulla, calyces, and renal pelvis',
    },
    {
      id: 'male-urethra-segments',
      type: 'diagram',
      filename: 'male-urethra-segments.svg',
      title: 'Male Urethra Anatomy',
      description: 'Prostatic, membranous, and spongy urethral segments',
    },
    {
      id: 'bladder-innervation',
      type: 'diagram',
      filename: 'bladder-innervation.svg',
      title: 'Bladder Innervation',
      description: 'Parasympathetic, sympathetic, and somatic innervation of lower urinary tract',
    },
  ],

  citations: [
    {
      id: 'campbell-walsh-anatomy',
      type: 'textbook',
      title: 'Anatomy of the Lower Urinary Tract and Male Genitalia',
      source: 'Campbell-Walsh-Wein Urology',
      chapter: '68',
      license: 'Elsevier',
    },
    {
      id: 'grays-urinary',
      type: 'textbook',
      title: 'Urinary System',
      authors: ['Standring, S.'],
      source: 'Gray\'s Anatomy: The Anatomical Basis of Clinical Practice',
      chapter: '74-75',
    },
    {
      id: 'netter-urinary',
      type: 'textbook',
      title: 'Urinary System',
      authors: ['Netter, F.H.'],
      source: 'Atlas of Human Anatomy',
      chapter: '5',
    },
  ],

  crossReferences: [
    { targetId: 'structure-kidney-gross-anatomy', targetType: 'structure', relationship: 'related', label: 'Kidney Gross Anatomy' },
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'child', label: 'Nephron Structure' },
    { targetId: 'condition-urinary-tract-infections', targetType: 'condition', relationship: 'see-also', label: 'Urinary Tract Infections' },
    { targetId: 'process-urological-procedures', targetType: 'topic', relationship: 'related', label: 'Urological Procedures' },
  ],

  tags: {
    systems: ['urinary', 'renal', 'genitourinary'],
    structures: ['FMA:7159', 'FMA:7203', 'FMA:7105'],
    topics: ['anatomy', 'gross anatomy', 'surgical anatomy'],
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

export default urinaryTractAnatomy;
