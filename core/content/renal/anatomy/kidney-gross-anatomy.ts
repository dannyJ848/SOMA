/**
 * Kidney Gross Anatomy - Comprehensive Educational Content
 *
 * Covers the macroscopic structure of the kidney including external features,
 * internal organization, and spatial relationships.
 */

import { EducationalContent } from '../../types';

export const kidneyGrossAnatomy: EducationalContent = {
  id: 'structure-kidney-gross-anatomy',
  type: 'structure',
  name: 'Kidney Gross Anatomy',
  alternateNames: ['Renal Anatomy', 'Kidney Structure', 'Ren'],
  fmaId: 'FMA:7203',

  levels: {
    1: {
      level: 1,
      summary: 'The kidneys are two bean-shaped organs in your lower back that filter your blood and make urine.',
      explanation: `Your kidneys are like two amazing filters that clean your blood all day and night. They sit on either side of your spine, just below your ribs in your back. Each kidney is about the size of your fist and shaped like a kidney bean (that's where the bean got its name!).

The kidneys have a very important job - they filter your blood to remove waste and extra water, turning it into urine (pee). Every day, your kidneys filter about 200 liters of blood - that's enough to fill a bathtub! But don't worry, most of the water goes back into your body, and you only make about 1-2 liters of urine per day.

If you were to cut a kidney in half, you would see two main parts: a darker outer part called the cortex (like the bark of a tree) and a lighter inner part called the medulla (like the inside of the tree). Blood enters and leaves the kidney through a notch on the inner edge called the hilum, which is like the doorway to the kidney.`,
      keyTerms: [
        { term: 'kidney', definition: 'A bean-shaped organ that filters blood and makes urine' },
        { term: 'filter', definition: 'To separate waste from things your body needs' },
        { term: 'urine', definition: 'Liquid waste (pee) made by your kidneys' },
        { term: 'cortex', definition: 'The outer part of the kidney' },
        { term: 'medulla', definition: 'The inner part of the kidney' },
      ],
      analogies: [
        'Your kidney is like a coffee filter - blood goes in, and the kidney keeps the good stuff while letting waste pass through.',
        'The kidney is like a recycling center - it sorts through everything in your blood, keeping what you need and getting rid of what you don\'t.',
      ],
      examples: [
        'When you drink a lot of water, your kidneys make more urine to get rid of the extra.',
        'The kidneys are protected by your lower ribs, like wearing a helmet protects your head.',
      ],
    },
    2: {
      level: 2,
      summary: 'The kidneys are paired retroperitoneal organs located in the posterior abdominal cavity that filter blood, regulate fluid balance, and produce urine.',
      explanation: `The kidneys are two bean-shaped organs located in the retroperitoneal space (behind the peritoneum) on either side of the vertebral column, between T12 and L3 vertebrae. The right kidney sits slightly lower than the left due to the liver above it. Each kidney is approximately 11cm long, 6cm wide, and 3cm thick, weighing about 150 grams.

**External Structure:**
- The kidney has a smooth, reddish-brown surface covered by a tough fibrous capsule
- The lateral border is convex while the medial border is concave
- The hilum is an indentation on the medial border where blood vessels, nerves, and the ureter enter and exit
- The kidney is surrounded by perirenal fat (fatty capsule) and enclosed in renal fascia

**Internal Structure:**
When sectioned coronally, the kidney shows distinct regions:
- **Cortex**: The outer reddish-brown layer containing glomeruli and convoluted tubules
- **Medulla**: The inner lighter region organized into 8-18 cone-shaped renal pyramids
- **Renal pyramids**: Triangular structures with bases facing the cortex and apices (papillae) pointing toward the renal pelvis
- **Renal columns**: Extensions of cortical tissue between pyramids
- **Renal pelvis**: A funnel-shaped collecting chamber that receives urine

**Blood Supply:**
- Renal arteries branch directly from the abdominal aorta
- Each kidney receives about 20-25% of cardiac output
- Renal veins drain into the inferior vena cava`,
      keyTerms: [
        { term: 'retroperitoneal', definition: 'Located behind the peritoneum (the membrane lining the abdominal cavity)', pronunciation: 'ret-roh-pair-ih-toh-NEE-al' },
        { term: 'hilum', definition: 'The indentation where blood vessels, nerves, and ureter enter the kidney', pronunciation: 'HY-lum' },
        { term: 'renal pelvis', definition: 'The funnel-shaped structure that collects urine before it enters the ureter', pronunciation: 'REE-nal PEL-vis' },
        { term: 'renal pyramid', definition: 'Cone-shaped structures in the medulla that contain collecting ducts' },
        { term: 'renal column', definition: 'Extension of cortical tissue between renal pyramids' },
      ],
      analogies: [
        'The renal pyramids are like orange segments pointing inward toward the center of the kidney.',
        'The hilum is like the stem of a bean - it\'s where everything enters and exits.',
      ],
    },
    3: {
      level: 3,
      summary: 'The kidney is a complex retroperitoneal organ with distinct cortical and medullary zones, organized into lobes and lobules, receiving approximately 1.2L of blood per minute through a specialized vasculature.',
      explanation: `## Anatomical Position and Relations

The kidneys occupy the paravertebral gutters from T12-L3. The right kidney is 1-2cm lower due to hepatic displacement. Key anatomical relations include:

**Right Kidney:**
- Anterior: Liver (hepatorenal recess), duodenum (second part), hepatic flexure of colon
- Posterior: Diaphragm, 12th rib, psoas major, quadratus lumborum, transversus abdominis

**Left Kidney:**
- Anterior: Stomach, spleen, pancreas (tail), jejunum, splenic flexure of colon
- Posterior: Diaphragm, 11th and 12th ribs, psoas major, quadratus lumborum

## Coverings and Support

From deep to superficial:
1. **Fibrous capsule**: Dense connective tissue directly surrounding the parenchyma
2. **Perirenal (adipose) capsule**: Fatty tissue providing cushioning and insulation
3. **Renal (Gerota's) fascia**: Connective tissue envelope containing kidney and adrenal gland
4. **Pararenal fat**: External to Gerota's fascia, in the retroperitoneal space

## Internal Architecture

**Cortex:**
- Contains all glomeruli, proximal and distal convoluted tubules
- Cortical labyrinth (convoluted tubules and glomeruli)
- Medullary rays (collecting ducts extending into cortex)

**Medulla:**
- 8-18 renal pyramids (cone-shaped, striations from parallel tubules)
- Pyramid apex = papilla (projects into minor calyx)
- Contains loops of Henle and collecting ducts

**Collecting System:**
- Minor calyces (8-18): Cup-shaped structures receiving urine from papillae
- Major calyces (2-3): Formed by union of minor calyces
- Renal pelvis: Formed by union of major calyces
- Ureteropelvic junction (UPJ): Transition to ureter

## Lobar Organization

- **Renal lobe**: One pyramid with associated cortical tissue
- **Renal lobule**: One medullary ray with surrounding cortical tissue
- Each kidney has 8-18 lobes

## Renal Vasculature

**Arterial Supply (in order):**
Aorta → Renal artery → Segmental arteries (5) → Interlobar arteries → Arcuate arteries → Interlobular arteries → Afferent arterioles → Glomerular capillaries

**Venous Drainage:**
Follows arterial pattern in reverse; stellate veins drain cortex → interlobular → arcuate → interlobar → renal vein → IVC

**Note:** The left renal vein is longer, crossing anterior to the aorta (nutcracker syndrome location).`,
      keyTerms: [
        { term: 'Gerota\'s fascia', definition: 'The renal fascia enclosing the kidney and perirenal fat; important surgical landmark', pronunciation: 'geh-ROH-tahz' },
        { term: 'medullary ray', definition: 'Striations in cortex representing collecting duct systems projecting from medulla' },
        { term: 'renal lobe', definition: 'Functional unit consisting of a pyramid and its associated cortical tissue' },
        { term: 'arcuate artery', definition: 'Artery running along the corticomedullary junction', pronunciation: 'AR-kyoo-it' },
        { term: 'minor calyx', definition: 'Cup-like structure receiving urine from one renal papilla', pronunciation: 'KAY-liks' },
        { term: 'cortical labyrinth', definition: 'Region of cortex containing convoluted tubules and glomeruli between medullary rays' },
      ],
      clinicalNotes: 'The segmental arteries are end arteries - occlusion causes segmental infarction. The posterior segment artery (Brodel\'s bloodless line) is important for surgical nephrotomy approach.',
    },
    4: {
      level: 4,
      summary: 'The kidney\'s gross architecture reflects its functional organization into cortical and juxtamedullary nephron populations, with a unique portal-like vasculature supporting high filtration rates and precise tubular function.',
      explanation: `## Developmental Anatomy and Variants

The definitive kidney (metanephros) develops from the ureteric bud (collecting system) and metanephric mesenchyme (nephrons). Developmental variations include:
- **Horseshoe kidney**: Fusion of lower poles; ascent arrested by IMA
- **Pelvic kidney**: Failed ascent; blood supply from iliac vessels
- **Crossed fused ectopia**: Both kidneys on same side
- **Duplex collecting system**: Complete or incomplete ureteric duplication
- **Multicystic dysplastic kidney**: Non-functional cystic remnant

## Functional Zonation

**Cortex Organization:**
- Outer cortex: Contains predominantly cortical nephrons with short loops
- Juxtamedullary region: Contains nephrons with long loops extending deep into medulla
- Ratio approximately 7:1 (cortical:juxtamedullary)

**Medullary Organization:**
- **Outer medulla:**
  - Outer stripe: Contains S3 segments of proximal tubules and thick ascending limbs
  - Inner stripe: Contains thin descending limbs and thick ascending limbs
- **Inner medulla:**
  - Contains thin ascending and descending limbs
  - Contains collecting ducts converging toward papillary tips
  - Hyperosmolar gradient: 300 → 1200+ mOsm/kg from cortex to papilla

## Vascular Architecture Details

**Unique Features:**
1. Two capillary beds in series (glomerular → peritubular)
2. Afferent arteriole diameter > efferent arteriole diameter (maintains GFR)
3. Vasa recta: Specialized hairpin capillaries following loops of Henle

**Cortical Nephron Blood Supply:**
Efferent arterioles → peritubular capillary network → interlobular veins

**Juxtamedullary Nephron Blood Supply:**
Efferent arterioles → descending vasa recta → ascending vasa recta
- Countercurrent exchange preserves medullary osmotic gradient

**Renal Blood Flow (RBF):**
- Total: ~1200 mL/min (20-25% of cardiac output)
- Cortex receives ~90% of RBF
- Medulla receives ~10% of RBF
- Medullary blood flow is necessarily low to maintain concentration gradient

## Lymphatic Drainage

- Intrarenal lymphatics in cortex drain to hilar lymph nodes
- Subsequently to lateral aortic (lumbar) nodes
- Right kidney also drains to interaortocaval nodes
- Left kidney drains to left lateral aortic nodes

## Innervation

**Sympathetic:**
- T10-L1 via lesser splanchnic, lowest splanchnic, and first lumbar splanchnic nerves
- Aorticorenal ganglia → renal plexus
- Functions: Vasoconstriction, renin release, sodium reabsorption

**Parasympathetic:**
- Vagal fibers via celiac plexus (limited role)

**Afferent (Sensory):**
- Pain fibers travel with sympathetic nerves to T10-L1
- Referred pain patterns: Flank, groin, ipsilateral testicle/labium`,
      keyTerms: [
        { term: 'vasa recta', definition: 'Hairpin-shaped capillaries that descend into medulla alongside loops of Henle; crucial for countercurrent exchange', pronunciation: 'VAH-sah REK-tah' },
        { term: 'juxtamedullary nephron', definition: 'Nephrons with glomeruli near the corticomedullary junction and long loops of Henle extending into inner medulla' },
        { term: 'cortical nephron', definition: 'Nephrons with glomeruli in outer cortex and short loops confined to outer medulla' },
        { term: 'Brodel\'s bloodless line', definition: 'Avascular plane between anterior and posterior renal arterial segments; used for nephrotomy' },
        { term: 'metanephros', definition: 'The definitive kidney, developing from ureteric bud and metanephric mesenchyme' },
        { term: 'countercurrent exchange', definition: 'Passive exchange in vasa recta that maintains medullary concentration gradient' },
      ],
      clinicalNotes: 'The avascular plane (Brodel\'s line) is typically 1cm posterior to the lateral convex border. Horseshoe kidneys increase risk of UPJ obstruction, stones, and infection. The left renal vein location makes it vulnerable to nutcracker syndrome and suitable for left nephrectomy in living donors.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive understanding of renal gross anatomy integrates embryological, functional, and clinical considerations essential for surgical planning, interventional procedures, and interpretation of imaging studies.',
      explanation: `## Clinical Anatomical Considerations

### Surgical Anatomy

**Approaches to the Kidney:**
1. **Flank (subcostal) approach**:
   - 12th rib tip landmark
   - Incision through external oblique, internal oblique, transversus abdominis
   - Entry to retroperitoneum; Gerota's fascia identification

2. **Posterior lumbotomy**:
   - Less common; limited exposure
   - Useful for small upper pole lesions

3. **Transperitoneal approach**:
   - Laparoscopic or open
   - Mobilize colon (right: Kocher maneuver + right colon; left: splenic flexure + descending colon)

4. **Retroperitoneoscopic approach**:
   - Direct access without bowel mobilization
   - Preferred for some institutions

**Vascular Control:**
- Renal artery is posterior to renal vein
- Left renal vein can be ligated (gonadal + adrenal collaterals)
- Right renal vein is short; IVC injury risk
- Accessory renal arteries in 25-30% (polar arteries)

### Segmental Anatomy (Surgical)

Five arterial segments (Graves classification):
1. Apical (superior)
2. Upper (anterior superior)
3. Middle (anterior inferior)
4. Lower
5. Posterior

Segments are independent vascular territories; segmental artery ligation → segmental infarction.

### Imaging Anatomy

**CT/MRI Considerations:**
- Cortex enhances earlier than medulla (corticomedullary phase)
- Medulla enhances in nephrographic phase
- Delayed phase shows collecting system opacification
- Normal cortical thickness: 7-10mm

**Ultrasound:**
- Cortex: hypoechoic relative to liver/spleen
- Renal sinus (fat, vessels, pelvis): hyperechoic
- Medullary pyramids: hypoechoic (may mimic cysts)
- Normal kidney length: 9-12cm

**Nuclear Medicine:**
- DMSA: Cortical uptake (function and scarring)
- MAG3/DTPA: Dynamic renal function and drainage

### Anatomical Variations and Clinical Implications

| Variant | Prevalence | Clinical Significance |
|---------|------------|----------------------|
| Accessory renal artery | 25-30% | Donor nephrectomy planning; transplant anastomosis |
| Horseshoe kidney | 1:400-500 | Increased stones, UPJ obstruction, infection |
| Pelvic kidney | 1:1000 | Aberrant blood supply; confused with pelvic mass |
| Duplex system | 0.5-1% | Ureterocele, reflux, ectopic ureter |
| Retrocaval ureter | Rare | Right-sided obstruction |
| Renal agenesis | 1:1000-1500 | Contralateral hypertrophy; associated GU anomalies |

### Transplant Anatomy

**Recipient Site:**
- Iliac fossa (retroperitoneal)
- Renal artery → external iliac artery (or internal iliac end-to-end)
- Renal vein → external iliac vein
- Ureter → bladder (ureteroneocystostomy)

**Donor Considerations:**
- Left kidney preferred (longer renal vein)
- Vascular anomalies affect suitability
- CT angiography for preoperative planning

### Interventional Anatomy

**Percutaneous Nephrostomy:**
- Approach through Brodel's line (posterolateral)
- Target: posterior calyx (usually lower pole)
- Avoid pleura above 12th rib

**Renal Biopsy:**
- Lower pole, lateral approach
- Avoid hilum, major vessels
- Real-time ultrasound guidance

**Renal Artery Interventions:**
- Ostial stenosis: Aortic plaque extension
- Truncal stenosis: Often fibromuscular dysplasia
- Stent placement considerations: Renal hilum anatomy`,
      keyTerms: [
        { term: 'Graves classification', definition: 'Division of kidney into five arterial segments (apical, upper, middle, lower, posterior) for surgical planning' },
        { term: 'ureteroneocystostomy', definition: 'Surgical reimplantation of ureter into bladder; common in transplantation', pronunciation: 'yoo-REE-ter-oh-nee-oh-sis-TOS-toh-mee' },
        { term: 'nutcracker syndrome', definition: 'Compression of left renal vein between aorta and SMA causing renal venous hypertension' },
        { term: 'corticomedullary phase', definition: 'CT enhancement phase (25-70 seconds) when cortex enhances maximally before medulla' },
        { term: 'nephrographic phase', definition: 'CT phase (80-120 seconds) when entire renal parenchyma enhances homogeneously' },
        { term: 'accessory renal artery', definition: 'Additional renal arterial supply, usually to poles; not "aberrant" as developmentally normal' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Always check for accessory vessels before nephrectomy (CT angiography)
2. Left kidney preferred for living donation due to longer renal vein
3. Percutaneous procedures: Approach posterolaterally through Brodel's avascular plane, targeting posterior calyces
4. Pediatric kidneys: Fetal lobulation may persist; pyramids more prominent on ultrasound
5. In horseshoe kidney, the isthmus is anterior to great vessels and inferior mesenteric artery
6. Renal length <9cm suggests chronic kidney disease; asymmetry >2cm suggests unilateral pathology`,
    },
  },

  media: [
    {
      id: 'kidney-gross-anatomy-diagram',
      type: 'diagram',
      filename: 'kidney-gross-anatomy.svg',
      title: 'Kidney Gross Anatomy',
      description: 'Coronal section showing cortex, medulla, pyramids, calyces, and pelvis',
    },
    {
      id: 'kidney-blood-supply',
      type: 'diagram',
      filename: 'kidney-blood-supply.svg',
      title: 'Renal Vasculature',
      description: 'Arterial and venous blood supply to the kidney',
    },
  ],

  citations: [
    {
      id: 'grays-anatomy-kidney',
      type: 'textbook',
      title: 'Kidney and Ureter',
      authors: ['Standring, S.'],
      source: 'Gray\'s Anatomy: The Anatomical Basis of Clinical Practice',
      chapter: '74',
      license: 'Elsevier',
    },
    {
      id: 'netter-urinary',
      type: 'textbook',
      title: 'Urinary System',
      authors: ['Netter, F.H.'],
      source: 'Atlas of Human Anatomy',
      chapter: '5',
    },
    {
      id: 'campbell-walsh',
      type: 'textbook',
      title: 'Surgical Anatomy of the Kidney',
      source: 'Campbell-Walsh-Wein Urology',
      chapter: '2',
    },
  ],

  crossReferences: [
    { targetId: 'system-urinary', targetType: 'system', relationship: 'parent', label: 'Urinary System' },
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'child', label: 'Nephron' },
    { targetId: 'structure-renal-vasculature', targetType: 'structure', relationship: 'related', label: 'Renal Blood Vessels' },
    { targetId: 'structure-ureter', targetType: 'structure', relationship: 'related', label: 'Ureter' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    structures: ['FMA:7203'],
    topics: ['anatomy', 'gross anatomy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default kidneyGrossAnatomy;
