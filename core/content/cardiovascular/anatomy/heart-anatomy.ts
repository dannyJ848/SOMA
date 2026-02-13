/**
 * Heart Anatomy - Comprehensive Educational Content
 *
 * Covers chambers, valves, coronary arteries, great vessels, pericardium,
 * and conduction system landmarks with complete 5-level progression and
 * Spanish translations for key terms.
 */

import { EducationalContent } from '../../types';

export const heartAnatomyContent: EducationalContent = {
  id: 'structure-heart-anatomy',
  type: 'structure',
  name: 'Heart Anatomy',
  nameEs: 'Anatomía del Corazón',
  alternateNames: ['Cardiac Anatomy', 'Heart Structure', 'Cor'],
  fmaId: 'FMA:7088',

  levels: {
    1: {
      level: 1,
      summary: 'The heart is a muscular pump about the size of your fist, with four chambers and valves that work together to push blood throughout your body.',
      explanation: `## Your Amazing Heart Pump

Imagine your heart as a house with four rooms and special doors between them. Your heart sits in the middle of your chest, slightly to the left, and it's about the size of your fist.

**The Four Rooms (Chambers):**

1. **Right Atrium (Top Right Room)**
   - Receives tired, used blood from your body
   - Like a waiting room for blood that needs oxygen

2. **Right Ventricle (Bottom Right Room)**
   - Pumps blood to your lungs to pick up oxygen
   - Smaller pump for a shorter trip

3. **Left Atrium (Top Left Room)**
   - Receives fresh, oxygen-rich blood from your lungs
   - Another waiting room, but for refreshed blood

4. **Left Ventricle (Bottom Left Room)**
   - The strongest room - pumps blood to your whole body
   - Has the thickest, most muscular walls

**The Doors (Valves):**

Just like doors between rooms, your heart has four special one-way doors called valves:
- They open to let blood through
- They close to stop blood from going backwards
- You can hear them closing - that's your heartbeat sound!

**The Heart's Food Tubes (Coronary Arteries):**

Your heart is a muscle that needs its own food and oxygen. Special blood vessels called coronary arteries run along the outside of your heart, feeding it so it can keep pumping.

**The Protective Bag (Pericardium):**

Your heart sits inside a special protective bag called the pericardium. It's like a cushioned case that keeps your heart safe and lets it move smoothly when it beats.

**Why Location Matters:**

Your heart is tilted slightly to the left, which is why you feel your heartbeat more on the left side of your chest. It's nestled safely between your lungs and behind your breastbone.

**Spanish Translations (Traducciones al español):**
- Heart = Corazón
- Chambers = Cámaras
- Valves = Válvulas
- Atrium = Aurícula
- Ventricle = Ventrículo
- Artery = Arteria
- Pericardium = Pericardio`,
      keyTerms: [
        {
          term: 'chambers',
          definition: 'The four rooms inside your heart where blood collects and gets pumped'
        },
        {
          term: 'valves',
          definition: 'Special doors in your heart that only open one way to keep blood flowing correctly'
        },
        {
          term: 'coronary arteries',
          definition: 'Blood vessels that bring food and oxygen to your heart muscle',
          relatedTerms: ['arteries', 'blood vessels']
        },
        {
          term: 'pericardium',
          definition: 'The protective bag that surrounds and cushions your heart',
          pronunciation: 'pair-ih-CAR-dee-um'
        },
      ],
      analogies: [
        'Your heart is like a two-story house with two rooms on each floor - the atria are upstairs receiving rooms, and the ventricles are downstairs pumping rooms.',
        'Heart valves are like one-way doors at a subway station - they only let people (blood) go in one direction.',
        'The pericardium is like a sleeping bag for your heart - it keeps it protected and gives it room to move.',
        'Coronary arteries are like power cables feeding electricity to a machine - they keep your heart muscle energized.',
      ],
      examples: [
        'When you put your hand on the left side of your chest, you can feel your heart beating inside the pericardium.',
        'When doctors listen to your heart with a stethoscope, they hear the valves closing - "lub-dub, lub-dub".',
      ],
      patientCounselingPoints: [
        'Your heart is about the size of your fist - make a fist and that\'s roughly how big it is!',
        'The "lub-dub" sound is your heart valves closing to keep blood flowing the right way.',
        'Your heart beats about 100,000 times every single day to keep you alive.',
      ],
    },
    2: {
      level: 2,
      summary: 'The heart is a four-chambered muscular organ with coordinated valve function, dual circulation systems, specialized coronary perfusion, and protective pericardial layers.',
      explanation: `## Heart Anatomy Overview

### Basic Structure and Location

**Position:** The heart sits in the mediastinum (middle chest area) between the lungs, with:
- 2/3 of the mass to the left of midline
- Apex (tip) pointing left and downward
- Base (top) at the level of the 2nd rib
- Protected anteriorly by the sternum and ribs

**Size:** Adult heart measures approximately:
- 12 cm long, 9 cm wide, 6 cm thick
- Weight: 250-350 grams (about 10-12 ounces)

### The Four Chambers

**Right Side (Pulmonary Circuit):**

| Chamber | Function | Wall Thickness |
|---------|----------|----------------|
| Right Atrium | Receives deoxygenated blood from body via vena cavae | Thin (~2mm) |
| Right Ventricle | Pumps blood to lungs via pulmonary artery | Medium (~4mm) |

**Left Side (Systemic Circuit):**

| Chamber | Function | Wall Thickness |
|---------|----------|----------------|
| Left Atrium | Receives oxygenated blood from lungs via pulmonary veins | Thin (~3mm) |
| Left Ventricle | Pumps blood to body via aorta | Thick (~11-15mm) |

**Key Point:** The interventricular septum is the muscular wall separating right and left ventricles.

### The Four Valves

**Atrioventricular (AV) Valves:** Between atria and ventricles

1. **Tricuspid Valve** (Right side)
   - Three leaflets/cusps
   - Between right atrium and right ventricle
   - Attached to papillary muscles by chordae tendineae

2. **Mitral Valve** (Left side - also called Bicuspid)
   - Two leaflets/cusps (anterior and posterior)
   - Between left atrium and left ventricle
   - Anchored by chordae tendineae to papillary muscles

**Semilunar Valves:** Between ventricles and great arteries

3. **Pulmonary Valve**
   - Three cusps
   - Between right ventricle and pulmonary artery
   - No chordae attachments

4. **Aortic Valve**
   - Three cusps (left, right, posterior)
   - Between left ventricle and aorta
   - Coronary arteries branch from behind cusps

### Coronary Arteries

The heart muscle receives blood from the coronary arteries:

**Left Coronary Artery (LCA):**
- Left Main → branches into:
  - **LAD** (Left Anterior Descending): Supplies front and apex
  - **LCx** (Left Circumflex): Supplies left side and back

**Right Coronary Artery (RCA):**
- Supplies right atrium, right ventricle, and often the inferior left ventricle

**Important:** Coronary arteries fill during diastole (when heart relaxes), not during systole.

### Great Vessels

**Veins (Bring blood TO heart):**
- Superior Vena Cava: From upper body → Right atrium
- Inferior Vena Cava: From lower body → Right atrium
- Pulmonary Veins (4): From lungs → Left atrium

**Arteries (Take blood FROM heart):**
- Pulmonary Artery: Right ventricle → Lungs
- Aorta: Left ventricle → Body

### Pericardium (Heart Sac)

**Three Layers:**
1. **Fibrous Pericardium:** Tough outer layer, anchors heart
2. **Parietal Pericardium:** Lines fibrous layer
3. **Visceral Pericardium (Epicardium):** Directly covers heart surface

**Pericardial Space:** Thin space between parietal and visceral layers containing ~15-50 mL of lubricating fluid

### Cardiac Wall Layers

From outside to inside:
1. **Epicardium:** Outer layer, same as visceral pericardium
2. **Myocardium:** Thick muscle layer, does the pumping
3. **Endocardium:** Smooth inner lining, continuous with blood vessels`,
      keyTerms: [
        {
          term: 'mediastinum',
          definition: 'The central compartment of the thoracic cavity containing the heart and great vessels',
          pronunciation: 'mee-dee-ah-STY-num'
        },
        {
          term: 'interventricular septum',
          definition: 'The muscular wall dividing the right and left ventricles',
          pronunciation: 'in-ter-ven-TRIK-yoo-lar SEP-tum',
          relatedTerms: ['septum', 'ventricular wall']
        },
        {
          term: 'chordae tendineae',
          definition: 'Tendon-like cords connecting valve leaflets to papillary muscles',
          pronunciation: 'KOR-dee ten-DIN-ee-eye',
          relatedTerms: ['papillary muscles', 'heart strings']
        },
        {
          term: 'papillary muscles',
          definition: 'Muscle projections in ventricles that anchor the AV valve leaflets',
          pronunciation: 'PAP-ih-lehr-ee'
        },
        {
          term: 'myocardium',
          definition: 'The thick muscular layer of the heart wall responsible for contraction',
          pronunciation: 'my-oh-CAR-dee-um',
          etymology: 'Greek: myo (muscle) + kardia (heart)'
        },
        {
          term: 'apex',
          definition: 'The pointed tip of the heart directed inferiorly, anteriorly, and to the left',
          relatedTerms: ['apex beat', 'point of maximal impulse']
        },
      ],
      analogies: [
        'The pericardium is like a water balloon surrounding the heart - the balloon is the pericardial sac and the small amount of fluid inside lets the heart slide smoothly.',
        'Chordae tendineae are like the strings on a parachute - they prevent the valve from flipping inside out.',
        'The coronary arteries are like a crown (corona means crown) sitting on top of the heart.',
      ],
      examples: [
        'During open heart surgery, surgeons must cut through the fibrous pericardium to access the heart.',
        'In a heart attack, blockage of the LAD is called the "widow maker" because it supplies such a large area.',
        'When you feel your pulse, you\'re feeling the pressure wave from the left ventricle pumping blood into the aorta.',
      ],
      clinicalNotes: `**Spanish Medical Terminology (Terminología médica en español):**
- Mitral valve = Válvula mitral
- Tricuspid valve = Válvula tricúspide
- Aortic valve = Válvula aórtica
- Pulmonary valve = Válvula pulmonar
- Coronary arteries = Arterias coronarias
- Interventricular septum = Tabique interventricular
- Myocardium = Miocardio
- Pericardial space = Espacio pericárdico`,
    },
    3: {
      level: 3,
      summary: 'Cardiac anatomy features precise structural relationships between chambers, valves, coronary vasculature, and conduction system elements, with distinct tissue characteristics enabling coordinated mechanical and electrical function.',
      explanation: `## Detailed Cardiac Anatomy

### Cardiac Chambers - Structural Details

**Right Atrium:**
- **Smooth portion (sinus venarum):** Posterior wall receiving vena cavae
- **Rough portion:** Anterior wall with pectinate muscles
- **Crista terminalis:** Muscular ridge separating smooth and rough portions
- **Fossa ovalis:** Depression in interatrial septum (remnant of foramen ovale)
- **SA node location:** Junction of SVC and right atrium
- **Pressure:** 0-8 mmHg (low pressure reservoir)

**Right Ventricle:**
- **Trabeculae carneae:** Muscular ridges on internal surface
- **Moderator band:** Muscular band carrying right bundle branch
- **Infundibulum (conus arteriosus):** Smooth outflow tract to pulmonary artery
- **Three papillary muscles:** Anterior, posterior, septal
- **Crescent shape:** Wraps around left ventricle

**Left Atrium:**
- **Four pulmonary veins:** Two from each lung (typically)
- **Smooth-walled chamber:** Minimal trabeculation
- **Left atrial appendage:** Small muscular pouch (site of thrombus formation in AFib)
- **Pressure:** 4-12 mmHg at rest

**Left Ventricle:**
- **Circular cross-section:** Concentric muscle arrangement
- **Two papillary muscles:** Anterolateral and posteromedial
- **Thick myocardium:** 11-15 mm (3x thicker than RV)
- **Apex formation:** Forms the cardiac apex
- **Systolic pressure:** 120 mmHg (high pressure pump)

### Valvular Anatomy

**Atrioventricular Valve Complex:**

Each AV valve has:
- Annulus (fibrous ring)
- Leaflets/cusps
- Chordae tendineae (primary, secondary, tertiary)
- Papillary muscles

**Tricuspid Valve:**
- Three cusps: Anterior, posterior, septal
- Largest valve annulus (11-12 cm circumference)
- More apically positioned than mitral valve

**Mitral Valve:**
- Anterior leaflet: Larger surface area, single scallop
- Posterior leaflet: Smaller area, three scallops (P1, P2, P3)
- Annulus area: 4-6 cm²
- Saddle-shaped annulus

**Semilunar Valve Structure:**

Both aortic and pulmonary valves share:
- Three cusps/leaflets
- Sinuses of Valsalva (dilated pockets behind cusps)
- Commissures (where cusps meet)
- No papillary muscle attachments

**Aortic Valve:**
- Three cusps: Left coronary, right coronary, non-coronary
- Annulus diameter: ~20-25 mm
- Coronary ostia: Behind left and right cusps
- **Key relationship:** Anterior leaflet of mitral valve forms part of aortic outflow

**Pulmonary Valve:**
- Three cusps: Anterior, right, left
- Slightly larger orifice than aortic valve
- Lower pressure system

### Coronary Artery Anatomy

**Left Main Coronary Artery:**
- Origin: Left sinus of Valsalva
- Length: 10-15 mm (short)
- Bifurcates into LAD and LCx

**Left Anterior Descending (LAD):**
- Course: Anterior interventricular groove
- **Branches:**
  - Septal perforators: Supply anterior 2/3 of septum
  - Diagonal branches: Supply anterior LV free wall
- Territory: ~45-55% of LV myocardium
- Clinical: Most common site of MI

**Left Circumflex (LCx):**
- Course: Left AV groove (encircles posteriorly)
- **Branches:**
  - Obtuse marginal (OM) arteries: Supply lateral LV wall
  - Sometimes gives off PDA (10-15% - "left dominant")
- Territory: Lateral and posterior LV

**Right Coronary Artery (RCA):**
- Origin: Right sinus of Valsalva
- Course: Right AV groove
- **Branches:**
  - SA nodal artery (60% of population)
  - RV marginal branches
  - Posterior descending artery (PDA) in 85% ("right dominant")
  - AV nodal artery (90% of population)
- Territory: RV, RA, inferior LV, posterior septum

**Coronary Dominance:**
- Right dominant: RCA gives PDA (85%)
- Left dominant: LCx gives PDA (10-15%)
- Co-dominant: Both contribute (5%)

**Cardiac Veins:**
- **Great cardiac vein:** Accompanies LAD
- **Middle cardiac vein:** Accompanies PDA
- **Small cardiac vein:** Along RCA
- **Coronary sinus:** Collects venous blood, drains into RA

### Conduction System Anatomy

**Sinoatrial (SA) Node:**
- Location: Lateral aspect of SVC-RA junction
- Size: 15 mm long, 5 mm wide
- Blood supply: RCA (60%) or LCx (40%)

**Atrioventricular (AV) Node:**
- Location: Koch's triangle (formed by tricuspid annulus, coronary sinus os, tendon of Todaro)
- Size: 5 x 3 x 1 mm
- Blood supply: RCA (90%) via AV nodal artery

**Bundle of His:**
- Penetrates central fibrous body
- Length: ~10 mm
- Gives rise to bundle branches at membranous septum

**Bundle Branches:**
- **Right bundle:** Thin, discrete, travels in moderator band
- **Left bundle:** Broad fan, divides into anterior and posterior fascicles

**Purkinje Fibers:**
- Subendocardial network
- Largest diameter conduction cells
- Fastest conduction velocity (4 m/sec)

### Pericardium - Detailed Structure

**Fibrous Pericardium:**
- Dense irregular connective tissue
- Fused to diaphragm inferiorly
- Fused to great vessels superiorly
- Limits acute cardiac dilation

**Parietal Pericardium:**
- Serous membrane lining fibrous pericardium
- Reflects onto heart at great vessels

**Visceral Pericardium (Epicardium):**
- Serous membrane on heart surface
- Contains coronary vessels and fat
- Continuous with parietal layer

**Pericardial Sinuses:**
- **Transverse sinus:** Behind aorta and pulmonary trunk
- **Oblique sinus:** Behind left atrium
- Clinical relevance: Surgical access during cardiac procedures

### Cardiac Skeleton (Fibrous Framework)

**Components:**
- Four valve annuli (fibrous rings)
- Membranous septum
- Central fibrous body
- Right and left fibrous trigones

**Functions:**
- Provides valve attachment
- Electrical insulation between atria and ventricles
- Maintains structural integrity`,
      keyTerms: [
        {
          term: 'trabeculae carneae',
          definition: 'Muscular ridges and columns on the internal ventricular walls',
          pronunciation: 'trah-BEK-yoo-lee KAR-nee-eye',
          etymology: 'Latin: trabecula (small beam) + carneus (fleshy)'
        },
        {
          term: 'moderator band',
          definition: 'Muscular band in RV carrying the right bundle branch from septum to anterior wall',
          relatedTerms: ['septomarginal trabecula']
        },
        {
          term: 'sinuses of Valsalva',
          definition: 'Dilated pockets in aortic root behind the three aortic valve cusps',
          pronunciation: 'val-SAL-vah'
        },
        {
          term: 'Koch triangle',
          definition: 'Anatomical region containing the AV node, bounded by tricuspid annulus, coronary sinus, and tendon of Todaro',
          relatedTerms: ['triangle of Koch']
        },
        {
          term: 'coronary dominance',
          definition: 'Designation based on which coronary artery gives rise to the posterior descending artery',
          relatedTerms: ['right dominant', 'left dominant']
        },
        {
          term: 'central fibrous body',
          definition: 'Dense connective tissue structure at the cardiac base where all four valve rings meet',
          relatedTerms: ['cardiac skeleton', 'fibrous trigones']
        },
        {
          term: 'fossa ovalis',
          definition: 'Oval depression in interatrial septum marking site of fetal foramen ovale',
          pronunciation: 'FOS-ah oh-VAL-is',
          relatedTerms: ['patent foramen ovale', 'atrial septal defect']
        },
      ],
      analogies: [
        'The cardiac skeleton is like the frame of a house - it provides structure and keeps different electrical circuits separate.',
        'The coronary sinus is like a storm drain collecting water from different gutters before emptying into the sewer.',
      ],
      examples: [
        'During transseptal puncture for AFib ablation, the fossa ovalis is the target site for crossing from RA to LA.',
        'The moderator band can be seen on echocardiography as a distinct structure in the RV.',
      ],
      clinicalNotes: 'LAD occlusion causes anterior wall MI with possible septal involvement (septal perforators). RCA occlusion causes inferior MI and may affect the AV node (90% AV nodal blood supply), causing bradycardia or heart block. Understanding coronary dominance helps predict involvement patterns in posterior/inferior MIs.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiac anatomy integrates embryological development, microstructural organization, anatomical variants, and precise spatial relationships critical for imaging interpretation, interventional procedures, and surgical planning.',
      explanation: `## Advanced Cardiac Anatomy

### Embryological Correlates

**Cardiac Looping and Chamber Formation:**
- Heart tube loops rightward (D-loop) at day 23
- Primitive ventricle → LV
- Bulbus cordis → RV and outflow tracts
- Sinus venosus → RA smooth portion, coronary sinus
- Primitive atrium → LA and RA trabeculated portions

**Septation:**
- Atrial septation: Septum primum and secundum form with foramen ovale
- Ventricular septation: Muscular septum (inferior) + membranous septum (superior)
- Aorticopulmonary septation: Neural crest cells form spiral septum
- AV canal septation: Endocardial cushions form mitral and tricuspid valves

**Clinical Correlation:** Understanding development explains congenital defects:
- ASD (ostium secundum at fossa ovalis, ostium primum, sinus venosus)
- VSD (most commonly membranous septum)
- Transposition of great arteries (failure of spiral septation)
- AV canal defects (endocardial cushion defect)

### Myocardial Architecture

**Ventricular Myocardial Bands:**
- **Superficial sinospiral band:** RV free wall → LV
- **Deep sinospiral band:** RV → interventricular septum → LV apex → posterior LV
- Helical arrangement optimizes twisting/wringing action

**Fiber Orientation:**
- Subendocardial: Longitudinal fibers
- Mid-wall: Circumferential fibers
- Subepicardial: Oblique fibers
- Result: Complex torsion pattern during contraction

**Sheet Architecture:**
- Myocytes organized in branching sheets
- Extracellular matrix scaffolding
- Perimysial collagen network
- Clinical: Fibrosis disrupts sheet structure in heart failure

### Valve Apparatus - Advanced

**Mitral Valve Complex:**
- **Anterior leaflet (aortic leaflet):**
  - Continuous with aortic valve (fibrous continuity)
  - Single scallop, larger surface area
  - Receives chordae from both papillary muscles

- **Posterior leaflet (mural leaflet):**
  - Three scallops: P1 (anterolateral), P2 (middle), P3 (posteromedial)
  - Attached to posterior annulus
  - Corresponding anterior scallops: A1, A2, A3

- **Chordae Classification:**
  - Primary (marginal): Attach to leaflet free edge
  - Secondary (intermediate): Attach to ventricular surface
  - Tertiary (basal): Attach to leaflet base (posterior leaflet only)

- **Papillary Muscle Position:**
  - Anterolateral PM: Blood supply from LAD and LCx (dual supply - less vulnerable)
  - Posteromedial PM: Blood supply from RCA or LCx only (vulnerable to MI)

**Aortic Valve-Mitral Valve Relationship:**
- Fibrous continuity between anterior mitral leaflet and non-coronary/left coronary cusps
- Aortic-mitral curtain
- LVOT: Bounded by mitral anterior leaflet, septum, aortic valve
- Clinical: Important for TAVR planning, subaortic stenosis evaluation

### Coronary Anatomy - Variants and Details

**LAD Variants:**
- Type I: LAD doesn't reach apex (25%)
- Type II: LAD reaches apex only (30%)
- Type III: LAD wraps around apex to posterior wall (40%)
- Type IV: LAD reaches apex and supplies inferior wall (5%)

**LCx Variants:**
- Terminal obtuse marginals: OM1, OM2, OM3
- Left posterolateral (LPL) branches
- Ramus intermedius: Additional branch from left main (15-20%)

**RCA Variants:**
- Acute marginal branches: Supply RV free wall
- PDA: May be single or multiple branches
- Posterior left ventricular branches (PLV)
- Conus branch: First branch, supplies RVOT

**Coronary Anomalies (Important):**
- Anomalous origin from opposite sinus:
  - ALCAPA: LCA from pulmonary artery (critical)
  - Interarterial course: Between aorta and PA (sudden death risk)
- Single coronary artery (<0.1%)
- Coronary fistulas: Abnormal connections to cardiac chambers

**Myocardial Bridging:**
- Segment of coronary artery tunnels through myocardium
- Most common in mid-LAD (25% of population)
- Usually benign but can cause ischemia during systole

### Conduction System - Microanatomy

**SA Node:**
- Dominant pacemaker cells
- Automaticity from If (funny current) and ICa,T
- Intranodal conduction pathways (Bachmann's bundle, Wenckebach pathways, Thorel pathway)
- Heart rate variability from autonomic modulation

**Internodal Pathways:**
- Anterior (Bachmann), middle (Wenckebach), posterior (Thorel)
- Preferential conduction routes (debated functional significance)

**AV Node Zones:**
- AN (atrionodal): Slow conduction, transition zone
- N (compact node): Slowest conduction, allows atrial contraction completion
- NH (nodal-His): Transition to His bundle

**Dual AV Nodal Physiology:**
- Fast pathway: Anterior, rapid conduction, long refractory period
- Slow pathway: Posterior-inferior, slow conduction, short refractory period
- Clinical: Substrate for AVNRT (AV nodal reentrant tachycardia)

**Purkinje System Distribution:**
- Dense subendocardial network
- Extends ~1-2 mm into myocardium
- RV: Moderator band, parietal band, septal band
- LV: Anterior and posterior fascicles → Purkinje network

### Pericardial Anatomy - Clinical Considerations

**Pericardial Reflections:**
- Reflects at great vessels, creating potential spaces
- Arterial mesocardium: Around aorta and pulmonary trunk
- Venous mesocardium: Around vena cavae and pulmonary veins

**Pericardial Sinuses:**
- **Transverse sinus:** Passage between arterial and venous mesocardia
  - Clinical: Surgeons place finger through to isolate great vessels
- **Oblique sinus:** Cul-de-sac behind LA, bounded by pulmonary veins

**Pericardial Recesses:**
- Superior aortic recess
- Inferior aortic recess
- Pulmonary venous recesses
- Clinical: Can mimic pathology on CT/MRI

**Pericardial Attachments:**
- Sternopericardial ligaments: To posterior sternum
- Phrenicopericardial ligaments: To diaphragm
- Vertebropericardial ligaments: To vertebral column

### Regional Myocardial Segments

**AHA 17-Segment Model:**
- **Basal segments (1-6):** Anterior, anteroseptal, inferoseptal, inferior, inferolateral, anterolateral
- **Mid segments (7-12):** Same six regions
- **Apical segments (13-16):** Four regions (no anteroseptal)
- **Apex (17):** Single apical cap

**Coronary Territory Mapping:**
- LAD: Segments 1, 7, 13 (anterior); 2, 8, 14 (anteroseptal); apex (17)
- LCx: Segments 5, 6, 11, 12, 16 (lateral)
- RCA: Segments 3, 4, 9, 10, 15 (inferior/inferoseptal)

**Wall Motion Assessment:**
- Normal, hypokinetic, akinetic, dyskinetic, aneurysmal
- Correlates with coronary perfusion and viability

### Anatomical Relationships

**Mediastinal Relations:**
- **Anterior:** Sternum, thymus (remnant), mediastinal pleura
- **Posterior:** Esophagus, descending aorta, thoracic vertebrae
- **Lateral:** Phrenic nerves, mediastinal pleura, lungs
- **Inferior:** Diaphragm (central tendon)
- **Superior:** Great vessels, tracheal bifurcation

**Valve Auscultation Sites:**
- Anatomic position ≠ auscultation location (sound travels with blood flow)
- Aortic: 2nd right intercostal space
- Pulmonary: 2nd left intercostal space
- Tricuspid: 4th-5th left intercostal space, lower sternal border
- Mitral: 5th left intercostal space, midclavicular line (apex)`,
      keyTerms: [
        {
          term: 'cardiac looping',
          definition: 'Rightward bending of primitive heart tube during embryonic development (D-loop)',
          relatedTerms: ['D-loop', 'cardiac morphogenesis']
        },
        {
          term: 'endocardial cushions',
          definition: 'Embryonic mesenchymal tissue masses that give rise to AV valves and contribute to septal formation',
          relatedTerms: ['AV canal defect', 'cushion defect']
        },
        {
          term: 'myocardial bridging',
          definition: 'Congenital variant where a coronary artery segment passes through the myocardium rather than epicardially',
          relatedTerms: ['intramural coronary', 'tunneled artery']
        },
        {
          term: 'ramus intermedius',
          definition: 'Variant extra branch arising from left main between LAD and LCx',
          pronunciation: 'RAY-mus in-ter-MEE-dee-us'
        },
        {
          term: 'AVNRT',
          definition: 'Atrioventricular nodal reentrant tachycardia; arrhythmia utilizing dual AV nodal pathways',
          relatedTerms: ['slow pathway', 'fast pathway']
        },
        {
          term: 'transverse sinus',
          definition: 'Pericardial space posterior to aorta and pulmonary trunk, anterior to left atrium',
          relatedTerms: ['pericardial reflection', 'arterial mesocardium']
        },
        {
          term: 'AHA 17-segment model',
          definition: 'Standardized nomenclature dividing LV myocardium into 17 segments for imaging and coronary correlation',
          relatedTerms: ['wall motion analysis', 'bull\'s eye plot']
        },
      ],
      clinicalNotes: `Clinical pearls:
- Posteromedial papillary muscle has single blood supply (PDA) - more vulnerable to ischemia/rupture in inferior MI
- Anomalous coronary from opposite sinus with interarterial course: high sudden death risk, requires surgery
- AVNRT can be cured by slow pathway ablation in posterior triangle of Koch
- Pericardial recesses on CT can mimic lymphadenopathy or masses - knowledge of normal anatomy prevents misdiagnosis
- Segment 17 (apex) typically receives dual blood supply from LAD wrap-around`,
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiac anatomy integrates molecular architecture, biomechanical properties, advanced imaging correlations, and precise anatomical knowledge essential for complex interventions, cardiac surgery, and electrophysiology procedures.',
      explanation: `## Clinical and Surgical Cardiac Anatomy

### Advanced Structural Imaging

**Cardiac CT Anatomy:**
- Retrospective ECG-gating for coronary CTA
- Coronary artery segments (modified AHA classification):
  - RCA: Proximal, mid, distal, PDA, PLV
  - Left main: 0-15 mm
  - LAD: Proximal, mid, distal + diagonals (D1, D2)
  - LCx: Proximal, mid, distal + OMs
- Plaque characterization: Calcified, non-calcified, mixed
- CAC scoring (Agatston): 0, 1-99, 100-399, ≥400
- Valve calcium scoring for TAVR planning

**Cardiac MRI Tissue Characterization:**
- T1 mapping: Native T1, post-contrast T1, ECV (extracellular volume)
  - Elevated native T1: Edema, infiltration, fibrosis
  - Elevated ECV: Diffuse fibrosis, amyloidosis
- T2 mapping: Myocardial edema (myocarditis, acute MI)
- Late gadolinium enhancement (LGE):
  - Subendocardial/transmural: Ischemic scar (CAD distribution)
  - Mid-wall: Non-ischemic cardiomyopathy
  - Subepicardial: Myocarditis, sarcoidosis
- Feature tracking: Circumferential, longitudinal, radial strain

**3D Echocardiography:**
- En face views of valves (surgeon's view)
- Volumetric assessment (more accurate than 2D)
- Fusion imaging with fluoroscopy for structural interventions

### Interventional Cardiac Anatomy

**Transcatheter Aortic Valve Replacement (TAVR):**

**Critical Anatomical Measurements:**
- Annulus dimensions (perimeter, area, diameters)
  - Measured at hinge points of cusps on CT
  - Important for valve sizing
- Sinus of Valsalva dimensions
  - Risk of coronary obstruction if shallow sinuses
- Coronary ostial heights
  - Low coronary ostia (<12 mm) increases obstruction risk
- Aortic root angulation
- LVOT calcification assessment
- Membranous septum length (predict heart block)

**Anatomical Contraindications:**
- Annulus <18 mm or >29 mm (device-dependent)
- Severe LVOT calcification
- Short distance to coronary ostia (<10 mm)
- Bicuspid aortic valve (relative, newer devices approved)

**Mitral Valve Interventions:**

**MitraClip/TEER Anatomy:**
- Pathology classification: Barlow's vs. fibroelastic deficiency
- Prolapse/flail location (P2 most common target)
- Coaptation depth and length
- Mitral valve area post-clip (risk of mitral stenosis)
- Interatrial septum evaluation for transseptal access

**TMVR (Transcatheter Mitral Valve Replacement):**
- Annular dimensions (saddle-shaped, D-shaped)
- LVOT risk assessment (neo-LVOT area)
- Distance from annulus to LCx

**Left Atrial Appendage Occlusion:**
- LAA morphology: Chicken wing (45%), windsock (19%), cactus (30%), cauliflower (6%)
- Chicken wing associated with lower stroke risk
- Ostium dimensions and depth for Watchman sizing
- Proximity to left upper pulmonary vein

### Electrophysiology Anatomy

**Atrial Fibrillation Ablation:**
- **Pulmonary vein anatomy:**
  - Common trunk variants (left common, right common)
  - Accessory/middle veins
  - Ostial dimensions
  - Antral isolation strategy

- **Left atrial anatomy:**
  - LA appendage ridge (common site of reconnection)
  - Ligament of Marshall (epicardial connection)
  - Esophageal course (risk of AE fistula)
  - Left atrium volume (predictor of AFib recurrence)

**VT Ablation:**
- Scar mapping in ischemic cardiomyopathy
- Papillary muscle VT
- RVOT vs. LVOT tachycardia origin
- Epicardial access via pericardial space
- Coronary vasculature proximity

**Accessory Pathway Locations:**
- Kent bundle distribution around AV groove
- Posteroseptal (near coronary sinus): Most common
- Left free wall, right free wall, anteroseptal

### Cardiac Surgical Anatomy

**Sternotomy and Pericardial Entry:**
- Median sternotomy: Standard approach
- Pericardium opened anterior to phrenic nerve
- Thymus remnant often present (removed for exposure)

**CABG Graft Targets:**
- **Arterial grafts:**
  - LIMA to LAD (gold standard)
  - RIMA to LCx/diagonal
  - Radial artery to RCA/obtuse marginal

- **Venous grafts:**
  - Saphenous vein for other targets
  - Sequential grafts (diamond/side-to-side anastomoses)

**Target Identification:**
- Epicardial fat obscures vessels
- Target typically 1.5-2.5 mm diameter
- Avoid intramyocardial segments
- Diagonal branches vs. septal perforators

**Valve Surgery Access:**
- Aortic valve: Via aortotomy above STJ
- Mitral valve: Via left atriotomy (or transseptal)
- Tricuspid valve: Via right atriotomy
- Pulmonary valve: Via pulmonary arteriotomy

**Minimally Invasive Approaches:**
- Right minithoracotomy for mitral valve
- Upper hemisternotomy for aortic valve
- Port access, robot-assisted

### Congenital Heart Disease Anatomy

**ASD Anatomy:**
- Ostium secundum (70%): Fossa ovalis defect
- Ostium primum (20%): Endocardial cushion defect, associated with cleft mitral valve
- Sinus venosus (10%): Near SVC or IVC, associated with partial anomalous pulmonary venous return
- Coronary sinus defect (rare): Unroofed coronary sinus

**VSD Anatomy:**
- Membranous (80%): Most common, near AV node
- Muscular (15%): Can be multiple ("Swiss cheese" septum)
- Inlet (AV canal type): Beneath AV valves
- Outlet (supracristal): Below pulmonary valve

**Complex Lesions:**
- Tetralogy of Fallot: VSD, RVOTO, overriding aorta, RVH
- Transposition of great arteries: Aorta from RV, PA from LV
- Single ventricle physiology: Tricuspid/mitral atresia, hypoplastic left heart

### Anatomical Variants and Pitfalls

**Persistent Left SVC:**
- Prevalence: 0.3% of general population, 10% with CHD
- Usually drains to coronary sinus
- Important for pacemaker/ICD lead placement
- Can complicate cardiac surgery (retrograde cardioplegia)

**Anomalous Pulmonary Venous Return:**
- Partial (PAPVR): Some PVs drain to RA/SVC
- Total (TAPVR): All PVs drain abnormally
- Associated with sinus venosus ASD

**Cor Triatriatum:**
- Membrane dividing left atrium
- Mimics mitral stenosis
- Differentiated by location relative to LAA

**Coronary Imaging Pitfalls:**
- Myocardial bridging: Systolic compression
- Anomalous origin: Malignant vs. benign courses
- Coronary fistulas: Evaluate drainage site
- Coronary spasm: Vasoreactivity testing

### Biomechanical Considerations

**Ventricular Mechanics:**
- Torsion: Counterclockwise rotation (base view) during systole
- Untwisting: Rapid early diastolic event, suction effect
- Strain: Deformation from original dimension
  - Longitudinal strain: Normal -18% to -22%
  - Circumferential strain: Normal -20% to -25%
  - Radial strain: Normal +35% to +55%

**Valve Biomechanics:**
- Aortic valve: High shear stress, rapid opening/closing
- Mitral valve: Complex geometry, annular dynamics
- Leaflet stress distribution
- Impact on valve durability

**Wall Stress (Laplace Law):**
- Wall stress (σ) = (P × r) / (2 × h)
- Increased in dilated ventricles
- Reduced by wall thickening (compensatory)
- Major determinant of oxygen consumption

### Current Research and Advances

**4D Flow MRI:**
- Visualizes blood flow patterns
- Quantifies flow volumes through valves
- Identifies turbulence, vortices
- Applications: Valve disease, shunt quantification, aortic disease

**Computational Modeling:**
- Patient-specific models from imaging
- Virtual TAVR, TMVR planning
- Predict neo-LVOT area, paravalvular leak risk
- Hemodynamic simulation

**Molecular Anatomy:**
- Connectome mapping of Purkinje network
- Single-cell transcriptomics of cardiac cell types
- Extracellular matrix remodeling in heart failure
- Ion channel distribution (regional heterogeneity)

**Precision Medicine Applications:**
- AI-based anatomical measurements
- Automated coronary segmentation
- Predictive modeling for arrhythmia substrate
- Virtual ablation planning`,
      keyTerms: [
        {
          term: 'TAVR',
          definition: 'Transcatheter aortic valve replacement; minimally invasive valve replacement via catheter',
          relatedTerms: ['TAVI', 'CoreValve', 'SAPIEN']
        },
        {
          term: 'MitraClip',
          definition: 'Transcatheter edge-to-edge mitral valve repair device mimicking surgical Alfieri stitch',
          relatedTerms: ['TEER', 'edge-to-edge repair']
        },
        {
          term: 'neo-LVOT',
          definition: 'New left ventricular outflow tract created after TMVR; risk of obstruction',
          relatedTerms: ['LVOT area', 'TMVR']
        },
        {
          term: 'LIMA',
          definition: 'Left internal mammary artery; preferred arterial conduit for CABG to LAD',
          relatedTerms: ['LITA', 'arterial graft']
        },
        {
          term: 'Agatston score',
          definition: 'Quantitative measure of coronary artery calcification from CT',
          relatedTerms: ['CAC score', 'calcium scoring']
        },
        {
          term: 'ECV',
          definition: 'Extracellular volume fraction from cardiac MRI; marker of diffuse myocardial fibrosis',
          relatedTerms: ['T1 mapping', 'diffuse fibrosis']
        },
        {
          term: 'strain',
          definition: 'Fractional change in myocardial dimension; sensitive marker of systolic function',
          relatedTerms: ['global longitudinal strain', 'speckle tracking']
        },
      ],
      clinicalNotes: `Advanced clinical integration:

**TAVR Planning:**
- Annulus sizing on CT: Measure area-derived diameter at diastole
- Coronary height <12 mm or shallow sinuses: Risk of coronary obstruction
- Long membranous septum >7-8 mm: Lower heart block risk
- Cover index (oversizing): Self-expanding 10-20%, balloon-expanding 5-10%

**AFib Ablation:**
- Esophageal temperature monitoring essential (prevent AE fistula)
- LAA anatomy: Chicken wing lowest thrombus risk
- Common pulmonary vein trunk: Ablate at antrum to avoid stenosis
- Posterior wall isolation: Consider esophageal proximity

**Surgical Planning:**
- LIMA-LAD gold standard: 95% 10-year patency
- Avoid radial artery with severe atherosclerosis
- Sequential grafts increase completeness of revascularization
- Intraoperative epicardial echo for valve repair assessment

**Imaging Integration:**
- LGE pattern differentiates ischemic (subendocardial/transmural) from non-ischemic (mid-wall) cardiomyopathy
- Global longitudinal strain <-18% abnormal even with normal EF
- 4D flow identifies functional mitral regurgitation mechanism

**Anatomical Variants:**
- Persistent left SVC: Consider when unable to advance wire from left subclavian
- Myocardial bridging: Typically benign but consider in athletes with chest pain
- Anomalous coronary with interarterial course: Surgical repair indicated`,
    },
  },

  media: [
    {
      id: 'heart-chambers-3d',
      type: '3d-model',
      filename: 'heart-chambers-complete.glb',
      title: 'Complete Heart Anatomy 3D Model',
      description: 'Interactive 3D model showing all four chambers, valves, and great vessels',
    },
    {
      id: 'coronary-arteries-diagram',
      type: 'diagram',
      filename: 'coronary-arteries-anatomy.svg',
      title: 'Coronary Artery Distribution',
      description: 'Detailed diagram of left and right coronary artery branches and territories',
    },
    {
      id: 'conduction-system-diagram',
      type: 'diagram',
      filename: 'cardiac-conduction-detailed.svg',
      title: 'Cardiac Conduction System',
      description: 'SA node, AV node, bundle of His, bundle branches, and Purkinje fibers',
    },
    {
      id: 'valve-anatomy-diagram',
      type: 'diagram',
      filename: 'heart-valves-detailed.svg',
      title: 'Heart Valve Anatomy',
      description: 'Detailed anatomy of all four cardiac valves with cusps and attachments',
    },
    {
      id: 'pericardium-layers',
      type: 'diagram',
      filename: 'pericardium-layers.svg',
      title: 'Pericardial Layers and Spaces',
      description: 'Fibrous and serous pericardium with pericardial space',
    },
    {
      id: 'heart-cross-section',
      type: 'histology',
      filename: 'myocardium-histology.jpg',
      title: 'Myocardial Tissue Histology',
      description: 'Microscopic view of cardiac muscle showing intercalated discs',
    },
  ],

  citations: [
    {
      id: 'grays-anatomy-41',
      type: 'textbook',
      title: 'Gray\'s Anatomy: The Anatomical Basis of Clinical Practice',
      authors: ['Susan Standring'],
      source: 'Elsevier',
      chapter: '56 - Heart and great vessels',
      page: '960-1025',
      license: 'Publisher',
    },
    {
      id: 'netter-atlas-7',
      type: 'textbook',
      title: 'Atlas of Human Anatomy',
      authors: ['Frank H. Netter'],
      source: 'Elsevier',
      chapter: 'Section III - Thorax',
      page: '201-230',
    },
    {
      id: 'clinical-cardiac-anatomy',
      type: 'textbook',
      title: 'Clinical Cardiac Anatomy',
      authors: ['Damian Sanchez-Quintana', 'Robert H. Anderson', 'Siew Yen Ho'],
      source: 'Informa Healthcare',
    },
    {
      id: 'cardiac-ct-2020',
      type: 'article',
      title: 'SCCT guidelines for the performance and acquisition of coronary computed tomographic angiography',
      authors: ['Abbara S', 'et al.'],
      source: 'J Cardiovasc Comput Tomogr',
      url: 'https://doi.org/10.1016/j.jcct.2020.11.001',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'structure-right-atrium', targetType: 'structure', relationship: 'child', label: 'Right Atrium' },
    { targetId: 'structure-right-ventricle', targetType: 'structure', relationship: 'child', label: 'Right Ventricle' },
    { targetId: 'structure-left-atrium', targetType: 'structure', relationship: 'child', label: 'Left Atrium' },
    { targetId: 'structure-left-ventricle', targetType: 'structure', relationship: 'child', label: 'Left Ventricle' },
    { targetId: 'structure-coronary-arteries', targetType: 'structure', relationship: 'child', label: 'Coronary Arteries' },
    { targetId: 'condition-myocardial-infarction', targetType: 'condition', relationship: 'related', label: 'Myocardial Infarction' },
    { targetId: 'condition-valvular-disease', targetType: 'condition', relationship: 'related', label: 'Valvular Disease' },
  ],

  tags: {
    systems: ['cardiovascular'],
    structures: ['heart', 'atria', 'ventricles', 'valves', 'coronary arteries', 'pericardium', 'conduction system'],
    topics: ['anatomy', 'gross anatomy', 'cardiac anatomy'],
    keywords: [
      'heart chambers',
      'cardiac valves',
      'coronary circulation',
      'pericardium',
      'conduction system',
      'mitral valve',
      'aortic valve',
      'tricuspid valve',
      'pulmonary valve',
      'LAD',
      'RCA',
      'circumflex',
      'SA node',
      'AV node',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heartAnatomyContent;
