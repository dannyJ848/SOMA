/**
 * Glomerular Filtration - Comprehensive Educational Content
 *
 * Covers glomerular filtration barrier, Starling forces, GFR regulation,
 * autoregulation via myogenic/TGF mechanisms, and clinical GFR assessment.
 */

import { EducationalContent } from '../../types';

export const glomerularFiltration: EducationalContent = {
  id: 'physiology-glomerular-filtration',
  type: 'process',
  name: 'Glomerular Filtration',
  nameEs: 'Filtracion Glomerular',
  alternateNames: ['GFR Physiology', 'Kidney Filtration', 'Glomerular Function'],

  levels: {
    1: {
      level: 1,
      summary: 'Your kidneys filter your blood through tiny sieves called glomeruli, removing waste while keeping important things like blood cells and proteins.',
      explanation: `## How Your Kidneys Filter Blood

### Tiny Filters in Your Kidneys

Each kidney has about **1 million tiny filters** called **glomeruli**. They work like coffee filters:
- Water and small waste products pass through
- Big important things like blood cells and proteins stay in your blood

### How Much Blood Gets Filtered?

Your kidneys filter about **180 liters** of blood every day -- that is enough to fill a bathtub! But you only make 1-2 liters of urine because most of the filtered water gets recycled back.

### What Pushes Blood Through the Filter?

Blood pressure pushes fluid through the filter. This is why:
- Very high blood pressure can damage the filters over time
- Very low blood pressure means not enough blood gets filtered

### Why Does This Matter?

When your filters stop working well:
- Waste builds up in your blood (feeling sick, tired)
- Protein leaks into your urine (foamy urine)
- Doctors check your **GFR** number to see how well your kidneys filter`,
      keyTerms: [
        { term: 'glomerulus', definition: 'A tiny ball of blood vessels in the kidney that filters blood', pronunciation: 'gloh-MARE-yoo-lus' },
        { term: 'GFR', definition: 'Glomerular filtration rate -- how well your kidneys filter blood' },
        { term: 'filtration', definition: 'The process of separating waste from blood by pushing it through a filter' },
        { term: 'protein', definition: 'Large important molecules in your blood that should not leak through the filter' },
      ],
      analogies: [
        'Glomeruli are like coffee filters -- water and small stuff go through, big stuff stays behind.',
        'Blood pressure is like water pressure in a hose pushing water through a sprinkler filter.',
        'GFR is like a speed rating for your kidney filters -- higher means they work better.',
      ],
      examples: [
        'A blood test for creatinine helps doctors estimate your GFR.',
        'Foamy urine can be a sign that protein is leaking through damaged filters.',
        'Diabetes and high blood pressure are the top two causes of kidney filter damage.',
      ],
      patientCounselingPoints: [
        'A normal GFR is above 90. Below 60 for three months means chronic kidney disease.',
        'Controlling blood pressure protects your kidney filters.',
        'Regular blood and urine tests can catch kidney problems early.',
      ],
    },
    2: {
      level: 2,
      summary: 'Glomerular filtration is driven by Starling forces across a three-layer filtration barrier, producing 180 L/day of ultrafiltrate, with GFR regulated by afferent/efferent arteriolar tone.',
      explanation: `## Glomerular Filtration

### The Filtration Barrier

Three layers filter the blood:
1. **Fenestrated endothelium**: Blood vessel lining with tiny holes (fenestrae)
2. **Glomerular basement membrane (GBM)**: Dense layer that blocks large molecules
3. **Podocytes**: Specialized cells with foot processes and slit diaphragms

Together they allow water and small solutes through but block proteins and blood cells.

### What Drives Filtration? (Starling Forces)

| Force | Value | Effect |
|-------|-------|--------|
| Glomerular capillary pressure | ~60 mmHg | Pushes fluid OUT (favors filtration) |
| Bowman capsule pressure | ~18 mmHg | Pushes fluid BACK (opposes filtration) |
| Capillary oncotic pressure | ~32 mmHg | Pulls fluid BACK (opposes filtration) |
| **Net filtration pressure** | **~10 mmHg** | **Net outward force** |

### GFR Numbers

- **Normal GFR**: ~125 mL/min or ~180 L/day
- **Filtration fraction**: GFR/renal plasma flow = ~20%
- Only 1-2 L/day becomes urine (99% of filtrate is reabsorbed)

### How GFR Is Regulated

**Afferent arteriole** (blood IN) and **efferent arteriole** (blood OUT) control pressure:

| Change | Effect on GFR |
|--------|--------------|
| Afferent constriction | Decreased GFR |
| Afferent dilation | Increased GFR |
| Efferent constriction | Increased GFR (up to a point) |
| Efferent dilation | Decreased GFR |

**Autoregulation** keeps GFR stable over a wide range of blood pressures (80-180 mmHg).

### Clinical Assessment

- **Serum creatinine**: Rises when GFR falls (inverse relationship)
- **eGFR**: Estimated from creatinine, age, sex, and race
- **Cystatin C**: Alternative GFR marker less affected by muscle mass
- **Inulin clearance**: Gold standard research method`,
      keyTerms: [
        { term: 'Starling forces', definition: 'The balance of pressures that determine how much fluid is filtered across the glomerulus' },
        { term: 'podocyte', definition: 'Specialized cell wrapping around glomerular capillaries with foot processes forming the final filter', pronunciation: 'POD-oh-site' },
        { term: 'filtration fraction', definition: 'Percentage of plasma filtered at the glomerulus; normally about 20%' },
        { term: 'afferent arteriole', definition: 'Blood vessel bringing blood INTO the glomerulus' },
        { term: 'efferent arteriole', definition: 'Blood vessel taking blood OUT of the glomerulus' },
        { term: 'eGFR', definition: 'Estimated GFR calculated from blood tests; used to stage kidney disease' },
      ],
      analogies: [
        'The afferent and efferent arterioles are like faucets controlling water pressure in a garden hose filter.',
        'Starling forces are like a tug-of-war between pressure pushing fluid out and protein pulling it back.',
        'Podocytes are like fingers wrapped around a pipe with tiny gaps between them.',
      ],
      examples: [
        'ACE inhibitors dilate the efferent arteriole, lowering pressure inside the glomerulus to protect it.',
        'In dehydration, efferent constriction maintains GFR despite lower blood flow.',
        'A GFR below 15 means kidneys have failed and dialysis may be needed.',
      ],
    },
    3: {
      level: 3,
      summary: 'GFR is determined by the filtration coefficient (Kf) and net filtration pressure across a three-layer barrier, autoregulated by myogenic response and tubuloglomerular feedback, with RAAS providing neurohormonal modulation.',
      explanation: `## Glomerular Filtration Physiology

### Filtration Barrier Ultrastructure

**Fenestrated endothelium:** 70-100 nm fenestrae; glycocalyx provides charge barrier.
**GBM:** Type IV collagen (alpha-3,4,5 chains), laminin, heparan sulfate proteoglycans; charge and size selectivity.
**Podocytes:** Foot processes with nephrin/podocin slit diaphragms (~40 nm pore). Charge selectivity: anionic glycocalyx repels albumin.

### Starling Equation

**GFR = Kf x (PGC - PBS - piGC + piBS)**

- Kf = filtration coefficient (permeability x surface area)
- PGC = glomerular capillary hydrostatic pressure (~60 mmHg)
- PBS = Bowman space hydrostatic pressure (~18 mmHg)
- piGC = capillary oncotic pressure (~32 mmHg, rises along capillary)
- piBS = Bowman space oncotic (~0, negligible)
- Net filtration pressure ~10 mmHg

**Filtration equilibrium:** piGC rises along capillary as protein-free filtrate exits; near equilibrium by efferent end; GFR is RPF-dependent.

### Autoregulation

**Myogenic response (Bayliss):**
- Increased pressure -> afferent stretch -> stretch-activated channels -> depolarization -> Ca2+ entry -> constriction
- Response time: 5-10 seconds
- Effective range: MAP 80-180 mmHg

**Tubuloglomerular feedback (TGF):**
- Macula densa senses NaCl via NKCC2
- High NaCl -> ATP/adenosine release -> A1 receptor -> afferent constriction + decreased renin
- Low NaCl -> PG/NO release -> afferent dilation + increased renin
- Response time: 20-30 seconds
- Gain: ~50% compensation

### RAAS and GFR

- Angiotensin II preferentially constricts efferent > afferent arteriole
- Effect: Maintains GFR despite reduced renal perfusion (increased filtration fraction)
- ACE inhibitors/ARBs: Dilate efferent -> decrease intraglomerular pressure -> reduce proteinuria
- SGLT2 inhibitors: Increase NaCl delivery to macula densa -> TGF activation -> reduced GFR (protective)

### Clinical GFR Assessment

**Clearance:** Cx = (Ux x V) / Px
- Inulin clearance = true GFR (freely filtered, not reabsorbed/secreted)
- Creatinine clearance overestimates GFR (some tubular secretion)

**eGFR equations:**
- CKD-EPI 2021: Race-free equation using creatinine and/or cystatin C
- Better accuracy with combined creatinine-cystatin C equation
- Limitations: Muscle mass extremes, acute kidney injury, pregnancy`,
      keyTerms: [
        { term: 'filtration coefficient', definition: 'Kf = permeability x surface area; determines GFR for a given net filtration pressure' },
        { term: 'tubuloglomerular feedback', definition: 'Macula densa senses NaCl delivery and adjusts afferent tone to stabilize GFR' },
        { term: 'myogenic response', definition: 'Afferent arteriole constricts in response to stretch from increased pressure' },
        { term: 'nephrin', definition: 'Key slit diaphragm protein; mutations cause congenital nephrotic syndrome' },
        { term: 'filtration equilibrium', definition: 'Point where rising oncotic pressure equals net hydrostatic pressure, stopping filtration' },
        { term: 'CKD-EPI', definition: 'Current standard equation for estimating GFR from serum creatinine and/or cystatin C' },
      ],
      clinicalNotes: 'ACE inhibitors reduce intraglomerular pressure by dilating the efferent arteriole, reducing proteinuria and slowing CKD progression. The initial GFR dip (up to 30%) is expected and hemodynamic, not structural injury. SGLT2 inhibitors similarly reduce intraglomerular pressure via TGF restoration. Both drug classes show additive renoprotection.',
    },
    4: {
      level: 4,
      summary: 'Advanced glomerular filtration integrates molecular barrier biology (nephrin/podocin/TRPC6), Kf modulation by mesangial cells, filtration equilibrium dynamics, integrated myogenic/TGF/RAAS autoregulation, and the pathophysiology of hyperfiltration injury and proteinuria.',
      explanation: `## Advanced Glomerular Filtration

### Filtration Barrier Molecular Biology

**Slit diaphragm complex:** Nephrin (NPHS1), podocin (NPHS2), CD2AP, TRPC6. Nephrin tyrosine phosphorylation activates PI3K/Akt survival signaling. Mutations: Nephrin (Finnish-type CNS), podocin (steroid-resistant FSGS), TRPC6 GOF (adult FSGS).

**GBM composition:** Type IV collagen alpha-3/4/5 heterotrimer (Goodpasture antigen); laminin beta-2 (Pierson syndrome); heparan sulfate proteoglycans (charge barrier, controversial role).

**Mesangial cell regulation of Kf:**
- Contraction (Ang II, endothelin): Reduces capillary surface area -> decreased Kf
- Relaxation (ANP, NO, PGE2): Increases surface area -> increased Kf
- Early diabetes: Mesangial relaxation -> hyperfiltration; late: GBM thickening -> decreased Kf

### Filtration Dynamics

**Oncotic pressure profile:** piGC rises from ~25 mmHg (afferent) to ~35 mmHg (efferent) as protein-free filtrate exits. Humans operate near filtration equilibrium -> GFR is RPF-dependent.

**Clinical implications:**
- Hyperproteinemia: Higher piGC -> decreased GFR
- Hypoalbuminemia: Lower piGC -> increased filtration (but also decreased effective circulating volume)
- Afferent dilation + efferent constriction = maximal increase in PGC and GFR

### Integrated Autoregulation

**Myogenic + TGF interaction:** Myogenic is faster (5-10s); TGF slower (20-30s) but provides setpoint adjustment. Together achieve ~95% autoregulation.

**TGF molecular mechanism:**
- NKCC2 on macula densa apical membrane senses NaCl
- ATP released via connexin 30 hemichannels
- Ecto-5'-nucleotidase converts ATP -> adenosine
- Adenosine A1 receptor -> afferent constriction
- COX-2 and nNOS in macula densa modulate TGF sensitivity

**RAAS integration:**
- Low NaCl at macula densa -> renin release from JG cells (also beta-1, baroreceptor stimuli)
- Ang II: Efferent >> afferent constriction; increased PCT Na reabsorption; aldosterone
- ACE2/Ang(1-7)/Mas: Counter-regulatory vasodilation and natriuresis

### Hyperfiltration Injury

**Brenner hypothesis:** Reduced nephron mass -> compensatory SNGFR increase -> glomerular hypertension -> podocyte injury -> proteinuria -> progressive sclerosis.

**Conditions causing hyperfiltration:**
- Obesity, diabetes (early), unilateral nephrectomy, low birth weight
- High protein diet (amino acid-mediated afferent dilation)

**Therapeutic targets:**
- RAS blockade: Reduces efferent tone -> lower PGC
- SGLT2 inhibitors: Restore TGF -> reduce SNGFR
- Endothelin antagonists: Reduce mesangial contraction and podocyte injury`,
      keyTerms: [
        { term: 'TRPC6', definition: 'Cation channel on podocytes; gain-of-function mutations cause FSGS via excess Ca2+ and cytoskeletal disruption' },
        { term: 'Brenner hypothesis', definition: 'Reduced nephron number leads to compensatory hyperfiltration, glomerular hypertension, and progressive CKD' },
        { term: 'connexin 30', definition: 'Hemichannel on macula densa releasing ATP as first signal in TGF cascade' },
        { term: 'Goodpasture antigen', definition: 'Alpha-3 chain of type IV collagen in GBM; target of anti-GBM antibodies causing rapidly progressive GN' },
        { term: 'filtration equilibrium', definition: 'State where oncotic pressure rise equals hydrostatic driving force; makes GFR RPF-dependent' },
        { term: 'SNGFR', definition: 'Single-nephron GFR; increases in compensatory hyperfiltration and early diabetic nephropathy' },
      ],
      clinicalNotes: 'The initial GFR dip with ACEi/ARB (up to 30%) reflects hemodynamic reduction in intraglomerular pressure, not injury -- this is the therapeutic mechanism. SGLT2i also cause initial GFR dip via TGF restoration. Both are additive and now standard of care for proteinuric CKD (KDIGO 2024). Hyperfiltration detection requires assessment beyond eGFR: consider filtration fraction, kidney volume, and proteinuria trends.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art glomerular filtration assessment integrates SNGFR estimation, podocyte mechanobiology and therapeutic targeting, precision pharmacology combining RASi/SGLT2i/MRA/ERA for intraglomerular pressure reduction, and emerging biomarkers for early hyperfiltration detection.',
      explanation: `## Precision Glomerular Filtration

### SNGFR Assessment

**Estimation:** Total eGFR / estimated nephron number. Nephron number from MRI cortical volume or birth weight correlation (200,000-2.5M range). Multiphoton microscopy enables real-time rodent SNGFR.

**Hyperfiltration detection:** Kidney volume/GFR ratio; filtration fraction from PAH/inulin clearance; post-protein-load GFR reserve.

### Podocyte Biology Frontiers

**Podocyte detachment:** Urinary podocyte count (podocalyxin+) correlates with disease activity. Podocytes are terminally differentiated -- lost cells not replaced. Podocyte density <100/10^6 um2 predicts FSGS.

**Mechanotransduction:** Podocyte foot processes sense capillary wall stress. TRPC6 activation by mechanical stretch -> Ca2+ influx -> cytoskeletal disruption -> effacement.

**Therapeutic targeting:** Rituximab (SMPDL3b stabilization); voclosporin (calcineurin-TRPC6 pathway); abatacept (B7-1 on podocytes, controversial).

### Combination Renoprotection

**Quad-pillar therapy for DKD:**
1. RASi (ACEi/ARB): Efferent dilation -> reduced PGC
2. SGLT2i: TGF restoration -> reduced SNGFR (CREDENCE, DAPA-CKD, EMPA-KIDNEY)
3. Non-steroidal MRA (finerenone): Anti-inflammatory/antifibrotic (FIDELIO/FIGARO)
4. Endothelin antagonist (atrasentan): Reduces mesangial contraction and podocyte injury (SONAR)

**Evidence for combination:** FIDELITY pooled analysis (RASi + finerenone); SGLT2i trials all on background RASi; zibotentan+dapagliflozin (ZENITH-CKD) addresses ERA fluid retention.

### eGFR Advances

**CKD-EPI 2021:** Race-free creatinine equation. Combined creatinine-cystatin C equation is most accurate.
**Measured GFR:** Iohexol plasma clearance increasingly used in clinical trials; standardizable.
**GFR slope:** Rate of eGFR decline (mL/min/1.73m2/year) as surrogate endpoint; >0.75 slope decline meaningful.
**Biomarkers:** KIM-1 for proximal injury; NGAL for distal; TIMP-2xIGFBP7 (NephroCheck) for AKI prediction.`,
      keyTerms: [
        { term: 'podocyte density', definition: 'Number of podocytes per glomerular area; <100/10^6 um2 predicts FSGS progression' },
        { term: 'voclosporin', definition: 'Calcineurin inhibitor with TRPC6 pathway effects; approved for lupus nephritis (AURORA trial)' },
        { term: 'GFR slope', definition: 'Rate of eGFR decline over time; emerging surrogate endpoint for CKD trials' },
        { term: 'iohexol clearance', definition: 'Measured GFR using iohexol contrast plasma disappearance; reference method for clinical trials' },
        { term: 'quad-pillar therapy', definition: 'Combination RASi + SGLT2i + MRA + ERA for maximal renoprotection in DKD' },
        { term: 'ZENITH-CKD', definition: 'Trial combining zibotentan (ERA) with dapagliflozin (SGLT2i) to mitigate ERA fluid retention while maximizing renoprotection' },
      ],
      clinicalNotes: `1) SGLT2i renoprotection is now standard regardless of diabetes (KDIGO 2024). 2) Finerenone adds kidney/CV benefit on top of RASi+SGLT2i. 3) Endothelin antagonists are the emerging fourth pillar. 4) GFR slope is gaining acceptance as a trial endpoint. 5) Podocyte-directed therapies represent the frontier of precision nephrology.`,
    },
  },

  media: [
    { id: 'glomerular-barrier', type: 'diagram', filename: 'glomerular-filtration-barrier.svg',
      title: 'Glomerular Filtration Barrier', description: 'Three-layer barrier: endothelium, GBM, podocytes' },
    { id: 'starling-forces', type: 'diagram', filename: 'starling-forces-glomerulus.svg',
      title: 'Starling Forces', description: 'Hydrostatic and oncotic pressures driving filtration' },
  ],

  citations: [
    { id: 'boron-renal', type: 'textbook', title: 'Medical Physiology', authors: ['Boron WF', 'Boulpaep EL'], source: 'Elsevier', chapter: '34' },
    { id: 'brenner-rector', type: 'textbook', title: 'Brenner and Rector\'s The Kidney', authors: ['Yu ASL', 'Chertow GM'], source: 'Elsevier', chapter: '3-4' },
  ],

  crossReferences: [
    { targetId: 'physiology-nephron', targetType: 'topic', relationship: 'parent', label: 'Nephron Physiology' },
    { targetId: 'physiology-acid-base-balance', targetType: 'topic', relationship: 'sibling', label: 'Acid-Base Balance' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'see-also', label: 'CKD' },
    { targetId: 'condition-nephrotic-syndrome', targetType: 'condition', relationship: 'see-also', label: 'Nephrotic Syndrome' },
  ],

  tags: {
    systems: ['renal'],
    topics: ['physiology', 'nephrology'],
    keywords: ['GFR', 'glomerulus', 'filtration', 'Starling forces', 'autoregulation', 'podocyte', 'proteinuria'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default glomerularFiltration;
