/**
 * Renal Vasculature - Comprehensive Educational Content
 *
 * Covers the blood supply to the kidney including arteries, veins, and the
 * unique dual capillary system essential for kidney function.
 */

import { EducationalContent } from '../../types';

export const renalVasculature: EducationalContent = {
  id: 'structure-renal-vasculature',
  type: 'structure',
  name: 'Renal Vasculature',
  alternateNames: ['Kidney Blood Vessels', 'Renal Blood Supply', 'Renal Circulation'],
  fmaId: 'FMA:71664',

  levels: {
    1: {
      level: 1,
      summary: 'Your kidneys receive blood through large blood vessels that branch into smaller and smaller tubes to reach every tiny filter.',
      explanation: `Your kidneys are blood-cleaning machines, and to do their job, they need a LOT of blood! Even though your kidneys are only the size of your fists, they receive about 1/4 (25%) of all the blood your heart pumps out - that's more blood per ounce than almost any other organ!

**How Blood Gets to Your Kidneys:**

1. **Big Pipes In**: Blood comes from your heart through your main artery (aorta). Two large branches called renal arteries (one for each kidney) carry blood into your kidneys.

2. **Getting Smaller**: Inside the kidney, these big arteries split into smaller and smaller branches, like a tree splitting into smaller branches.

3. **The Tiny Filters**: The smallest blood vessels form tiny balls called glomeruli (glom-AIR-you-lie) - these are the actual filters where blood gets cleaned.

4. **Round Two**: After filtering, the blood doesn't go straight back to your heart. Instead, it goes through ANOTHER set of tiny blood vessels that wrap around the kidney tubes. This lets your body take back good stuff that was filtered out by accident.

5. **Back to the Heart**: Finally, the blood collects in larger veins and returns to your heart through the renal veins.

This two-step system is what makes your kidneys so good at cleaning your blood while keeping what your body needs!`,
      keyTerms: [
        { term: 'renal artery', definition: 'The large blood vessel that brings blood from the heart to the kidney' },
        { term: 'renal vein', definition: 'The large blood vessel that takes blood from the kidney back to the heart' },
        { term: 'glomerulus', definition: 'A tiny ball of blood vessels where blood is filtered', pronunciation: 'glom-AIR-you-lus' },
        { term: 'capillaries', definition: 'The tiniest blood vessels where exchange happens' },
      ],
      analogies: [
        'Blood vessels in your kidney are like a river system - starting as one big river, splitting into streams, then tiny creeks, before joining back together.',
        'The double capillary system is like going through airport security twice - the first checkpoint filters out dangerous items, the second one gives back anything you actually need.',
      ],
    },
    2: {
      level: 2,
      summary: 'The renal vasculature consists of renal arteries supplying blood for filtration through two capillary networks in series: glomerular capillaries for filtration and peritubular capillaries for reabsorption.',
      explanation: `## Blood Supply Overview

The kidneys receive approximately 20-25% of cardiac output (about 1.2 liters per minute) through the renal arteries. This high blood flow is necessary for filtration function.

### Arterial Supply

**Main Arteries:**
- **Renal arteries** branch directly from the abdominal aorta at L1-L2 level
- Right renal artery is longer (passes behind IVC)
- Left renal artery is shorter
- Each typically divides into 5 segmental arteries

**Branching Pattern (from large to small):**
1. Renal artery
2. Segmental arteries (5 segments)
3. Interlobar arteries (between pyramids)
4. Arcuate arteries (along corticomedullary junction)
5. Interlobular arteries (radiate into cortex)
6. Afferent arterioles (enter glomeruli)

### The Unique Dual Capillary System

**First Capillary Bed - Glomerular Capillaries:**
- High pressure (about 55 mmHg)
- Blood is filtered here
- Afferent arteriole → glomerulus → efferent arteriole

**Second Capillary Bed - Peritubular Capillaries:**
- Low pressure (about 15 mmHg)
- Surrounds tubules for reabsorption
- Efferent arteriole → peritubular capillaries → venous system

**Vasa Recta (for juxtamedullary nephrons):**
- Specialized long capillary loops descending into medulla
- Run parallel to loops of Henle
- Important for urine concentration

### Venous Drainage

Blood drains in reverse order:
- Peritubular capillaries → Interlobular veins → Arcuate veins → Interlobar veins → Renal vein → Inferior vena cava

**Note:** The left renal vein is longer and crosses in front of the aorta.`,
      keyTerms: [
        { term: 'afferent arteriole', definition: 'The small artery bringing blood INTO the glomerulus', pronunciation: 'AF-er-ent' },
        { term: 'efferent arteriole', definition: 'The small artery taking blood OUT of the glomerulus', pronunciation: 'EF-er-ent' },
        { term: 'peritubular capillaries', definition: 'Network of capillaries surrounding the kidney tubules for reabsorption' },
        { term: 'vasa recta', definition: 'Long, straight capillaries that descend into the medulla alongside loops of Henle', pronunciation: 'VAH-sah REK-tah' },
        { term: 'arcuate artery', definition: 'Artery that arches along the border between cortex and medulla', pronunciation: 'AR-kyoo-it' },
        { term: 'segmental artery', definition: 'One of five main branches of the renal artery supplying different kidney regions' },
      ],
      analogies: [
        'The two capillary beds are like a two-pass recycling system - the first pass filters everything out, the second pass recovers the valuable items.',
        'Vasa recta are like heat exchangers running alongside pipes - they help maintain the concentration gradient in the medulla.',
      ],
    },
    3: {
      level: 3,
      summary: 'The renal vasculature features a unique portal system with two capillary beds in series, segmental end-arteries, and specialized vessels (vasa recta) that support countercurrent exchange essential for the corticomedullary osmotic gradient.',
      explanation: `## Detailed Vascular Anatomy

### Arterial Hierarchy

**Renal Artery:**
- Branches from aorta at L1-L2, below SMA
- Right renal artery: longer, passes posterior to IVC
- Left renal artery: shorter, more direct course
- Divides into anterior (upper, middle, lower, apical) and posterior branches

**Segmental Arteries:**
Five segments (Graves classification):
1. Apical (superior)
2. Upper anterior
3. Middle anterior
4. Lower
5. Posterior

These are end arteries - no anastomoses between segments.

**Interlobar Arteries:**
- Travel between renal pyramids
- Within renal columns

**Arcuate Arteries:**
- Arc along corticomedullary junction
- Give rise to interlobular arteries perpendicular to surface

**Interlobular Arteries:**
- Radiate toward cortical surface
- Give rise to afferent arterioles

### Microvascular Architecture

**Afferent Arteriole:**
- Diameter: ~20 μm
- Contains juxtaglomerular (JG) cells (modified smooth muscle secreting renin)
- Primary site of renal vascular resistance regulation

**Glomerular Capillaries:**
- Fenestrated endothelium
- High hydrostatic pressure: 45-55 mmHg
- Capillary tufts supported by mesangium

**Efferent Arteriole:**
- Diameter: ~18 μm (slightly smaller than afferent)
- Size differential maintains glomerular pressure
- Juxtamedullary efferent arterioles are larger

**Cortical Nephrons:**
- Efferent arteriole → peritubular capillary plexus
- Surrounds PCT and DCT
- Drains into stellate veins → interlobular veins

**Juxtamedullary Nephrons:**
- Efferent arteriole → descending vasa recta
- Descending vasa recta have continuous endothelium
- Ascending vasa recta are fenestrated
- Form capillary plexus around loops of Henle and collecting ducts
- Countercurrent exchange preserves medullary gradient

### Venous System

**Pattern:**
- Generally parallels arterial system
- Stellate veins (cortical surface) → Interlobular veins → Arcuate veins → Interlobar veins → Renal vein

**Left Renal Vein:**
- Length: 6-10 cm
- Receives: left gonadal vein, left adrenal vein, lumbar veins
- Passes between aorta and SMA (nutcracker position)
- Can be ligated near IVC (collateral drainage via gonadal and adrenal veins)

**Right Renal Vein:**
- Length: 2-4 cm
- Enters IVC directly
- No significant tributaries
- Cannot be ligated (no collaterals)

### Renal Blood Flow Distribution

- Total RBF: ~1200 mL/min (20-25% of cardiac output)
- Cortex: receives ~90% of RBF (high extraction of PAH)
- Outer medulla: ~10% of RBF
- Inner medulla: <1% of RBF (preserves osmotic gradient)

### Lymphatic Drainage

- Follows venous drainage
- Drains to lateral aortic (lumbar) lymph nodes
- Right kidney: also to interaortocaval and right lateral aortic nodes
- Left kidney: left lateral aortic and pre-aortic nodes`,
      keyTerms: [
        { term: 'end artery', definition: 'Artery that is the sole supply to a tissue region with no anastomoses; occlusion causes infarction' },
        { term: 'juxtaglomerular cells', definition: 'Modified smooth muscle cells in afferent arteriole walls that synthesize and secrete renin' },
        { term: 'mesangium', definition: 'Supporting cells and matrix between glomerular capillaries that regulate filtration surface area' },
        { term: 'stellate veins', definition: 'Star-shaped venous plexus on kidney surface draining into interlobular veins' },
        { term: 'countercurrent exchange', definition: 'Passive solute/water exchange in vasa recta that preserves medullary concentration gradient' },
        { term: 'fenestrated capillary', definition: 'Capillary with pores (fenestrae) allowing rapid fluid exchange' },
      ],
      clinicalNotes: 'Segmental arteries are end-arteries; occlusion causes wedge-shaped infarcts. Left renal vein can be ligated for tumor resection if needed (collateral drainage). Renal artery stenosis preferentially affects the right side due to aortic plaques.',
    },
    4: {
      level: 4,
      summary: 'Renal vascular physiology integrates autoregulatory mechanisms (myogenic response, tubuloglomerular feedback), hormonal modulation (RAAS, natriuretic peptides, prostaglandins), and unique microvascular arrangements that maintain GFR stability across perfusion pressures while supporting concentration gradients.',
      explanation: `## Regulation of Renal Blood Flow

### Autoregulation

Renal blood flow and GFR remain relatively constant over MAP 80-180 mmHg through two mechanisms:

**1. Myogenic Response:**
- Increased pressure → afferent arteriole smooth muscle stretch → vasoconstriction
- Decreased pressure → vasodilation
- Operates within seconds
- Ca2+ entry through stretch-activated channels

**2. Tubuloglomerular Feedback (TGF):**
- Macula densa senses NaCl delivery to DCT
- High NaCl → ATP/adenosine release → afferent arteriole constriction
- Low NaCl → vasodilation
- Operates over minutes
- Involves A1 adenosine receptors

### Hormonal Regulation

**Renin-Angiotensin-Aldosterone System (RAAS):**
- Angiotensin II: Preferentially constricts efferent arteriole > afferent
- Effect: Maintains GFR when renal perfusion decreases
- ACE inhibitors/ARBs: Dilate efferent → decrease GFR (protective long-term)

**Sympathetic Nervous System:**
- α1 receptors on afferent/efferent arterioles
- Activation: Vasoconstriction, reduced RBF/GFR, increased renin release
- β1 receptors on JG cells: Increase renin secretion

**Prostaglandins:**
- PGE2, PGI2: Vasodilators (afferent arteriole)
- Buffer vasoconstrictive effects of Ang II and norepinephrine
- NSAIDs block PG synthesis → acute kidney injury in at-risk patients

**Natriuretic Peptides (ANP, BNP):**
- Dilate afferent arteriole, constrict efferent
- Net effect: Increase GFR (pressure natriuresis)
- Oppose RAAS actions

**Dopamine:**
- D1 receptors: Vasodilation of afferent arteriole
- Increase RBF with modest increase in GFR
- "Renal dose dopamine" concept (now largely abandoned)

**Endothelin:**
- ET-1: Potent vasoconstrictor
- Role in hepatorenal syndrome, contrast nephropathy

**Nitric Oxide:**
- Vasodilator; opposes Ang II
- eNOS in endothelium, nNOS in macula densa

### Vasa Recta Physiology

**Countercurrent Exchange:**
- Descending vasa recta: Lose water, gain solutes
- Ascending vasa recta: Gain water, lose solutes
- Net effect: Preserves medullary hyperosmolarity
- Low blood flow essential (1-2% of RBF to inner medulla)

**If medullary blood flow increases:**
- Solutes washed out
- Concentration gradient dissipates
- Impaired urinary concentration (medullary washout)

### Glomerular Hemodynamics

**Starling Forces in Glomerulus:**
- Favoring filtration: Glomerular capillary pressure (PGC ~55 mmHg)
- Opposing filtration: Bowman's capsule pressure (PBC ~15 mmHg), oncotic pressure (πGC ~25-30 mmHg)
- Net filtration pressure: ~10 mmHg at afferent end

**Ultrafiltration Coefficient (Kf):**
- Kf = Surface area × Hydraulic permeability
- GFR = Kf × Net filtration pressure
- Mesangial contraction reduces Kf

**Filtration Equilibrium:**
- πGC rises along capillary as protein concentrates
- At efferent end: PGC = PBC + πGC (filtration ceases)
- Unique to glomerulus among capillary beds

### Mathematical Relationships

**Renal Blood Flow:**
RBF = RPF / (1 - Hct)
RBF = (Renal artery pressure - Renal vein pressure) / Renal vascular resistance

**GFR and RBF relationship:**
- Filtration fraction (FF) = GFR/RPF ≈ 0.20 (20%)
- Increased FF → Increased peritubular oncotic pressure → Enhanced proximal reabsorption

**Flow and Resistance:**
- Afferent resistance primarily determines RBF
- Efferent resistance primarily determines FF and GFR maintenance at low RBF`,
      keyTerms: [
        { term: 'tubuloglomerular feedback', definition: 'Mechanism by which macula densa senses tubular NaCl and signals afferent arteriole to adjust GFR' },
        { term: 'myogenic response', definition: 'Intrinsic vascular smooth muscle contraction in response to stretch (increased pressure)' },
        { term: 'filtration fraction', definition: 'Proportion of renal plasma flow that is filtered at glomerulus; normally ~20%' },
        { term: 'ultrafiltration coefficient', definition: 'Kf; product of glomerular capillary surface area and hydraulic permeability' },
        { term: 'medullary washout', definition: 'Loss of medullary hypertonicity due to increased blood flow, impairing concentrating ability' },
        { term: 'filtration equilibrium', definition: 'Point where oncotic pressure equals net hydrostatic pressure and filtration stops' },
      ],
      clinicalNotes: 'The dual afferent/efferent regulation explains why ACEi/ARBs decrease GFR acutely (protective effect) but why they\'re dangerous in bilateral RAS (dependent on efferent constriction). NSAIDs remove prostaglandin-mediated afferent dilation, particularly harmful when combined with ACEi/ARB (AKI risk).',
    },
    5: {
      level: 5,
      summary: 'Clinical mastery of renal vasculature requires integration of imaging modalities, interventional approaches, surgical considerations, and pathophysiological understanding of vascular diseases affecting the kidney.',
      explanation: `## Clinical Vascular Assessment

### Imaging Modalities

**Duplex Ultrasonography:**
- First-line for renal artery stenosis screening
- Peak systolic velocity (PSV) > 200 cm/s suggests >60% stenosis
- Renal-to-aortic ratio (RAR) > 3.5 indicates significant stenosis
- Resistive index (RI) > 0.80 suggests poor revascularization outcome

**CT Angiography:**
- Sensitivity/specificity >90% for RAS
- Evaluates accessory vessels (25-30%)
- Assessment of aortic disease
- Contrast: Risk of contrast-induced nephropathy

**MR Angiography:**
- Gadolinium-enhanced MRA excellent for RAS
- Avoid in eGFR <30 (nephrogenic systemic fibrosis risk)
- Non-contrast techniques available (ASL, TOF)

**Conventional Angiography:**
- Gold standard for diagnosis
- Allows intervention (angioplasty, stenting)
- Pressure gradient measurement across stenosis

**Nuclear Medicine:**
- Captopril renogram: Detects hemodynamically significant RAS
- MAG3 preferred over DTPA
- Asymmetric function suggests unilateral disease

### Renal Artery Stenosis

**Etiology:**
- Atherosclerotic (90%): Ostial/proximal, older patients, CVD risk factors
- Fibromuscular dysplasia (10%): Mid-vessel "string of beads," younger women

**Clinical Presentations:**
1. Resistant/refractory hypertension
2. Unexplained azotemia
3. Flash pulmonary edema
4. Azotemia with ACEi/ARB initiation
5. Asymmetric kidney size (>1.5 cm difference)

**When to Suspect FMD:**
- Hypertension onset <30 years
- Female predominance
- No traditional CVD risk factors
- May affect other vascular beds (carotid, vertebral)

**Intervention Decisions (CORAL Trial Implications):**
- Medical therapy preferred for most atherosclerotic RAS
- Consider revascularization for:
  - Resistant hypertension failing medical therapy
  - Progressive CKD with bilateral RAS
  - Recurrent flash pulmonary edema
  - FMD (better outcomes than atherosclerotic)

**Revascularization Techniques:**
- Percutaneous angioplasty: Preferred for FMD
- Stenting: Atherosclerotic ostial lesions
- Embolic protection devices: Variable use

### Renal Vein Thrombosis

**Causes:**
- Nephrotic syndrome (especially membranous)
- Renal cell carcinoma (with IVC extension)
- Trauma
- Hypercoagulable states
- Dehydration in neonates

**Clinical Features:**
- Acute: Flank pain, hematuria, renal dysfunction
- Chronic: Often asymptomatic
- Left > Right (longer vein)

**Diagnosis:**
- Doppler ultrasound: Absent/reversed flow
- CT/MR venography: Direct visualization
- May see enlarged kidney, delayed nephogram

**Treatment:**
- Anticoagulation (warfarin or DOACs)
- Treat underlying cause
- Thrombolysis for acute bilateral thrombosis

### Nutcracker Syndrome

**Anatomy:**
- Left renal vein compressed between aorta and SMA
- Posterior variant: Retroaortic left renal vein compression

**Clinical Features:**
- Left flank pain
- Hematuria (from gonadal/ureteral collaterals)
- Left varicocele (men)
- Pelvic congestion syndrome (women)
- Proteinuria (orthostatic)

**Diagnosis:**
- CT/MR angiography: LRV compression, collaterals
- Doppler: Increased flow velocity at narrowing
- Aortomesenteric angle <35° (normal 38-65°)

**Treatment:**
- Conservative for mild cases
- Stenting (endovascular)
- Surgical: LRV transposition, gonadocaval bypass

### Renal Artery Aneurysms

**Types:**
- True aneurysm: All wall layers
- Pseudoaneurysm: Post-trauma, post-biopsy

**Indications for Repair:**
- Size >2 cm
- Symptomatic
- Dissection or rupture
- Women of childbearing age (any size)
- Growth on surveillance

### Atheroembolic Disease

**Mechanism:**
- Cholesterol crystal embolization from aortic plaques
- Often post-catheterization or post-anticoagulation

**Clinical Features:**
- Livedo reticularis, blue toe syndrome
- AKI (stepwise decline)
- Eosinophilia, hypocomplementemia
- Low renal biopsy yield (segmental involvement)

**Diagnosis:**
- Clinical context + skin/kidney biopsy
- Cholesterol clefts in small vessels

**Treatment:**
- Supportive care
- Avoid further instrumentation
- Statins (plaque stabilization)
- Prognosis: Variable, often progressive CKD

### Surgical Considerations

**Kidney Transplant:**
- Left donor kidney preferred (longer renal vein)
- Anastomosis to external iliac vessels
- Multiple arteries: Bench reconstruction or separate anastomoses

**Nephrectomy:**
- Vascular control before dissection
- Segmental arteries: Wedge resection if isolated segment
- Tumor thrombus: May require IVC thrombectomy, CPB

**Partial Nephrectomy:**
- Hilar clamping: Warm ischemia <25 minutes
- Cold ischemia (ice slush): Extends safe window
- Zero-ischemia techniques: Selective arterial clamping`,
      keyTerms: [
        { term: 'fibromuscular dysplasia', definition: 'Non-inflammatory, non-atherosclerotic arterial disease causing stenosis; "string of beads" appearance on angiography' },
        { term: 'CORAL trial', definition: 'Study showing no benefit of stenting over medical therapy alone for atherosclerotic renal artery stenosis' },
        { term: 'renal resistive index', definition: 'Doppler measure [(PSV-EDV)/PSV]; >0.80 suggests poor renal parenchyma and bad prognosis for intervention' },
        { term: 'atheroembolic disease', definition: 'Cholesterol crystal embolization from atheromatous plaques causing systemic and renal injury' },
        { term: 'captopril renogram', definition: 'Nuclear scan using ACEi to unmask hemodynamically significant RAS; asymmetric function post-captopril' },
        { term: 'flash pulmonary edema', definition: 'Sudden-onset pulmonary edema from bilateral RAS and hypertensive crisis; "Pickering syndrome"' },
      ],
      clinicalNotes: `Clinical pearls for practice:
1. Always check renal function 1-2 weeks after starting ACEi/ARB; >30% creatinine rise suggests RAS
2. Flash pulmonary edema with relatively preserved EF suggests bilateral RAS
3. Doppler RI >0.80 predicts poor response to revascularization regardless of stenosis severity
4. FMD responds well to angioplasty; atherosclerotic RAS should be managed medically first
5. Contrast-induced nephropathy prevention: Hydration, hold metformin, minimize contrast volume
6. Left kidney transplants are preferred from living donors due to longer renal vein for anastomosis`,
    },
  },

  media: [
    {
      id: 'renal-arteries-diagram',
      type: 'diagram',
      filename: 'renal-arterial-tree.svg',
      title: 'Renal Arterial System',
      description: 'Branching pattern from renal artery to glomerular capillaries',
    },
    {
      id: 'glomerular-capillaries',
      type: 'diagram',
      filename: 'glomerular-circulation.svg',
      title: 'Glomerular Capillary Network',
      description: 'Afferent and efferent arterioles with glomerular tuft',
    },
  ],

  citations: [
    {
      id: 'grays-kidney-vasculature',
      type: 'textbook',
      title: 'Vascular Supply of the Kidney',
      source: 'Gray\'s Anatomy',
      chapter: '74',
    },
    {
      id: 'guyton-renal-circulation',
      type: 'textbook',
      title: 'Glomerular Filtration, Renal Blood Flow, and Their Control',
      source: 'Guyton and Hall Textbook of Medical Physiology',
      chapter: '27',
    },
  ],

  crossReferences: [
    { targetId: 'structure-kidney-gross-anatomy', targetType: 'structure', relationship: 'parent', label: 'Kidney Anatomy' },
    { targetId: 'process-glomerular-filtration', targetType: 'pathway', relationship: 'related', label: 'Glomerular Filtration' },
    { targetId: 'pathway-raas', targetType: 'pathway', relationship: 'related', label: 'Renin-Angiotensin System' },
  ],

  tags: {
    systems: ['urinary', 'cardiovascular'],
    topics: ['anatomy', 'physiology', 'vascular'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default renalVasculature;
