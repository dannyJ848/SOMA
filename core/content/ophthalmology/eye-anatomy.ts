/**
 * Eye Anatomy - Ophthalmology
 *
 * Comprehensive content on eye structure, refractive system, retina,
 * optic nerve, and visual pathway anatomy.
 */

import { EducationalContent } from '../types';

export const eyeAnatomy: EducationalContent = {
  id: 'ophthalmology-eye-anatomy',
  type: 'structure',
  name: 'Eye Anatomy',
  alternateNames: ['Ocular Anatomy', 'Anatomy of the Eye', 'Bulbus Oculi'],
  fmaId: 'FMA54448',

  levels: {
    1: {
      level: 1,
      summary: 'Your eyes are like tiny cameras that capture light and send pictures to your brain so you can see the world around you.',
      explanation: `Your eye is an amazing organ about the size of a ping-pong ball. It works like a camera to help you see everything around you.

**Main Parts of the Eye:**

- **Cornea:** The clear, dome-shaped front window of your eye. It helps focus light.
- **Iris:** The colored part of your eye (brown, blue, green). It controls how much light gets in.
- **Pupil:** The black circle in the center of your iris. It gets bigger in the dark and smaller in bright light.
- **Lens:** A clear, flexible disc behind your pupil that focuses light onto the back of your eye.
- **Retina:** The "movie screen" at the back of your eye where images form.
- **Optic Nerve:** A cable of nerve fibers that carries the picture from your eye to your brain.

**How You See:**
1. Light enters through the cornea
2. The pupil controls how much light comes in
3. The lens focuses the light
4. The image lands on the retina (upside down!)
5. The optic nerve sends the signal to your brain
6. Your brain flips the image right-side up

**Protecting Your Eyes:**
- Eyelids and eyelashes keep dirt out
- Tears keep your eyes wet and clean
- The bony socket (skull) protects the eyeball
- Always wear sunglasses in bright sunlight`,
      keyTerms: [
        { term: 'cornea', definition: 'The clear front window of your eye that helps focus light' },
        { term: 'pupil', definition: 'The black circle in the middle of your eye that lets light in' },
        { term: 'retina', definition: 'The back wall of your eye where pictures form, like a movie screen' },
        { term: 'optic nerve', definition: 'The cable that carries pictures from your eye to your brain' },
      ],
      analogies: [
        'Your eye works like a camera: the cornea and lens are the camera lens, the pupil is the aperture, and the retina is the film.',
        'The iris is like a curtain that opens and closes to control how much light enters a room.',
        'The optic nerve is like a USB cable connecting your eye-camera to your brain-computer.',
      ],
      examples: [
        'When you walk into a dark room, your pupils get bigger to let in more light so you can see better.',
        'When someone shines a flashlight at your eyes, your pupils shrink to protect your retina from too much light.',
        'Tears are not just for crying - every time you blink, tears wash across your eye to keep it clean and moist.',
      ],
      patientCounselingPoints: [
        'Wear sunglasses with UV protection outdoors to protect your eyes.',
        'Take breaks from screens every 20 minutes by looking at something 20 feet away for 20 seconds (the 20-20-20 rule).',
        'Never rub your eyes hard - it can scratch the cornea.',
      ],
    },
    2: {
      level: 2,
      summary: 'The eye is a complex optical organ with a refractive system (cornea and lens), a photosensitive layer (retina), and neural connections (optic nerve) that converts light into electrical signals for vision.',
      explanation: `## Eye Structure Overview

The human eye is a roughly spherical organ about 24 mm in diameter, housed in the bony orbit of the skull. It has three main layers and distinct internal compartments.

## Three Layers of the Eye

**1. Fibrous Tunic (Outer Layer):**
- **Cornea:** Transparent front 1/6 of the eye; provides ~2/3 of the eye's focusing power
- **Sclera:** The tough white outer coat; provides shape and protection

**2. Vascular Tunic / Uvea (Middle Layer):**
- **Iris:** Controls pupil size and light entry
- **Ciliary body:** Produces aqueous humor; controls lens shape for focusing
- **Choroid:** Blood vessel layer that nourishes the retina

**3. Neural Tunic (Inner Layer):**
- **Retina:** Contains photoreceptor cells (rods and cones) that detect light

## The Refractive System

Light must be precisely focused on the retina for clear vision.

| Structure | Refractive Power | Role |
|-----------|-----------------|------|
| Cornea | ~43 diopters | Primary focusing element |
| Aqueous humor | Minor | Maintains corneal shape |
| Lens | ~15-20 diopters | Fine focusing (accommodation) |
| Vitreous humor | Minor | Maintains eye shape |

**Accommodation:** The lens changes shape to focus on near objects. The ciliary muscle contracts, relaxing the zonular fibers, allowing the lens to become rounder and more powerful.

## Internal Compartments

- **Anterior chamber:** Between cornea and iris; filled with aqueous humor
- **Posterior chamber:** Between iris and lens; also aqueous humor
- **Vitreous chamber:** Behind the lens; filled with vitreous humor (gel-like substance)

## The Retina

**Photoreceptors:**
- **Rods (~120 million):** Detect dim light; responsible for night and peripheral vision
- **Cones (~6 million):** Detect color and detail; concentrated in the macula
  - S-cones (blue), M-cones (green), L-cones (red)

**Key Retinal Landmarks:**
- **Macula:** Central area for sharp, detailed vision
- **Fovea:** Center of the macula; highest concentration of cones; sharpest vision
- **Optic disc:** Where the optic nerve exits; no photoreceptors (blind spot)

## The Optic Nerve

- ~1.2 million nerve fibers carry visual information to the brain
- Exits through the optic disc
- Travels to the optic chiasm where fibers partially cross
- Continues to the lateral geniculate nucleus, then visual cortex

## Protective Structures

- **Orbit:** Bony socket formed by 7 skull bones
- **Extraocular muscles (6):** Move the eye in all directions
- **Eyelids:** Protect and distribute tears
- **Lacrimal system:** Produces, distributes, and drains tears
- **Conjunctiva:** Clear membrane covering the sclera and lining the eyelids`,
      keyTerms: [
        { term: 'accommodation', definition: 'The ability of the lens to change shape to focus on objects at different distances', pronunciation: 'ah-KOM-oh-DAY-shun' },
        { term: 'fovea', definition: 'The central pit of the macula providing the sharpest vision, packed with cone photoreceptors', pronunciation: 'FOH-vee-ah' },
        { term: 'aqueous humor', definition: 'Clear fluid in the front part of the eye that maintains pressure and nourishes the cornea and lens' },
        { term: 'choroid', definition: 'The vascular middle layer of the eye that supplies blood to the outer retina', pronunciation: 'KOR-oyd' },
        { term: 'sclera', definition: 'The tough white outer coat of the eye that provides structural support', pronunciation: 'SKLAIR-ah' },
      ],
      analogies: [
        'The three eye layers are like a building: the sclera is the outer wall (structure), the choroid is the plumbing (blood supply), and the retina is the wallpaper inside (where the action happens).',
        'Accommodation is like autofocus on a camera - the lens adjusts automatically when you shift from looking far away to reading a book.',
      ],
    },
    3: {
      level: 3,
      summary: 'Ocular anatomy encompasses the tri-layered globe with its refractive apparatus (cornea, lens), photoreceptive retina with distinct neuronal layers, and the visual pathway from optic nerve through lateral geniculate nucleus to primary visual cortex.',
      explanation: `## Corneal Anatomy

The cornea is an avascular, transparent structure with five layers:

| Layer | Composition | Function |
|-------|-------------|----------|
| Epithelium (50 μm) | Stratified squamous, non-keratinized | Barrier, rapid regeneration |
| Bowman's layer (12 μm) | Acellular collagen | Structural support |
| Stroma (500 μm) | Organized collagen lamellae, keratocytes | Transparency, refraction |
| Descemet's membrane (10 μm) | Basement membrane of endothelium | Structural support |
| Endothelium (5 μm) | Single layer of hexagonal cells | Maintains corneal dehydration |

**Corneal transparency** depends on: regular collagen spacing (Maurice lattice theory), relative dehydration maintained by endothelial pump, avascularity, and unmyelinated nerves.

## Lens Anatomy and Physiology

- Biconvex, avascular, transparent structure
- Composed of lens fibers (modified epithelial cells), capsule, and anterior epithelium
- Growth continues throughout life (adds ~20 μm/year)
- Suspended by zonular fibers from the ciliary body

**Accommodation Mechanism (Helmholtz theory):**
1. Near focus: Ciliary muscle contracts → zonules relax → lens becomes rounder → increased refractive power
2. Distance focus: Ciliary muscle relaxes → zonules taut → lens flattens → decreased refractive power
3. Presbyopia: Age-related loss of lens elasticity reduces accommodative amplitude

## Retinal Histology

The retina contains 10 distinct layers (outer to inner):
1. Retinal pigment epithelium (RPE)
2. Photoreceptor layer (rods and cones)
3. External limiting membrane
4. Outer nuclear layer
5. Outer plexiform layer
6. Inner nuclear layer (bipolar, horizontal, amacrine cells)
7. Inner plexiform layer
8. Ganglion cell layer
9. Nerve fiber layer
10. Internal limiting membrane

**Phototransduction cascade:**
1. Light photon absorbed by rhodopsin (rods) or photopsins (cones)
2. Conformational change: 11-cis retinal → all-trans retinal
3. Activation of transducin (G-protein)
4. Activation of phosphodiesterase (PDE)
5. Hydrolysis of cGMP → closure of Na+ channels
6. Hyperpolarization of photoreceptor → decreased glutamate release

## Visual Pathway

1. **Optic nerve (CN II):** 1.2 million axons from retinal ganglion cells
2. **Optic chiasm:** Nasal fibers decussate; temporal fibers remain ipsilateral
3. **Optic tract:** Post-chiasmal fibers to LGN
4. **Lateral geniculate nucleus (LGN):** Six-layered thalamic relay
   - Layers 1-2: Magnocellular (motion, contrast)
   - Layers 3-6: Parvocellular (color, fine detail)
5. **Optic radiations:** LGN to primary visual cortex (V1)
   - Meyer's loop: Inferior fibers through temporal lobe
   - Dorsal fibers: Through parietal lobe
6. **Primary visual cortex (V1):** Brodmann area 17, calcarine sulcus

## Ocular Blood Supply

**Arterial:**
- Ophthalmic artery (branch of internal carotid)
  - Central retinal artery → inner retina
  - Short posterior ciliary arteries → choroid → outer retina
  - Long posterior ciliary arteries → anterior uvea

**Venous:**
- Central retinal vein → ophthalmic vein → cavernous sinus
- Vortex veins → ophthalmic vein (choroidal drainage)

## Aqueous Humor Dynamics

- **Production:** Ciliary epithelium, ~2.5 μL/min
- **Flow:** Posterior chamber → pupil → anterior chamber
- **Drainage:**
  - Trabecular meshwork → Schlemm's canal → episcleral veins (90%)
  - Uveoscleral outflow (10%)
- **Intraocular pressure:** Balance of production and drainage; normal 10-21 mmHg`,
      keyTerms: [
        { term: 'phototransduction', definition: 'The biochemical cascade converting light photons into electrical neural signals in photoreceptor cells' },
        { term: 'optic chiasm', definition: 'The X-shaped structure where nasal retinal fibers decussate, creating contralateral visual field representation', pronunciation: 'OP-tik KY-azm' },
        { term: 'lateral geniculate nucleus', definition: 'Six-layered thalamic relay station receiving visual input and projecting to primary visual cortex', pronunciation: 'LAT-er-al jeh-NIK-yoo-late' },
        { term: 'retinal pigment epithelium', definition: 'Pigmented cell layer beneath photoreceptors; essential for photoreceptor maintenance, phagocytosis, and visual cycle' },
        { term: 'trabecular meshwork', definition: 'Sieve-like drainage tissue in the iridocorneal angle responsible for majority of aqueous humor outflow' },
        { term: 'zonular fibers', definition: 'Suspensory ligaments connecting the ciliary body to the lens equator; transmit forces for accommodation' },
      ],
      clinicalNotes: 'Understanding aqueous humor dynamics is essential for glaucoma management. The trabecular meshwork handles ~90% of outflow, and increased resistance here is the primary mechanism in open-angle glaucoma.',
    },
    4: {
      level: 4,
      summary: 'Advanced ocular anatomy integrates molecular mechanisms of corneal transparency, lens crystallin biochemistry, retinal circuitry and signal processing, and the retinotopic organization of the visual pathway with clinical-surgical correlations.',
      explanation: `## Corneal Physiology: Molecular Basis of Transparency

**Endothelial Pump-Leak Mechanism:**
- Na+/K+-ATPase and bicarbonate-dependent pumps maintain stromal dehydration (78% water)
- Endothelial cell density: ~3000 cells/mm² at birth → ~2500 at age 40
- Critical threshold: <500-800 cells/mm² → corneal edema (Fuchs' dystrophy, post-surgical)
- Endothelial cells are non-mitotic in vivo; loss is compensated by cell spreading

**Corneal Innervation:**
- Most densely innervated tissue in the body
- Long ciliary nerves (CN V1, nasociliary branch)
- Sub-basal nerve plexus: ~7000 nociceptors/mm²
- Clinical significance: Neurotrophic keratopathy after damage (herpes zoster, LASIK)

## Lens Biochemistry

**Crystallin Proteins (90% of lens protein):**
| Type | Molecular Weight | Function |
|------|-----------------|----------|
| α-crystallin | 800 kDa (oligomer) | Chaperone protein, prevents aggregation |
| β-crystallin | 50-200 kDa | Structural, refraction |
| γ-crystallin | 20 kDa (monomer) | Highest refractive index, central lens |

**Cataractogenesis:**
- Post-translational modification: Oxidation, deamidation, truncation
- α-crystallin chaperone function overwhelmed → protein aggregation
- Aggregate size exceeds wavelength of light → light scattering
- UV exposure, diabetes (sorbitol pathway), corticosteroids accelerate this process

## Retinal Neural Circuitry

**Vertical Pathway (throughput):**
Photoreceptors → Bipolar cells → Ganglion cells → Optic nerve

**Lateral Processing:**
- **Horizontal cells:** Lateral inhibition at outer plexiform layer; enhance contrast
- **Amacrine cells:** ~30 subtypes; modulate inner plexiform layer signals
  - AII amacrine: Rod-cone pathway coupling (scotopic vision)
  - Starburst amacrine: Direction selectivity

**Ganglion Cell Types:**
| Type | Size | Pathway | Function |
|------|------|---------|----------|
| Midget (P-cells) | Small | Parvocellular | Color, acuity, 70% of GCs |
| Parasol (M-cells) | Large | Magnocellular | Motion, contrast, 10% |
| Bistratified | Medium | Koniocellular | Blue-yellow color |
| ipRGCs | Variable | SCN, pretectum | Circadian rhythm, pupil reflex |

**Intrinsically Photosensitive Retinal Ganglion Cells (ipRGCs):**
- Express melanopsin (peak sensitivity ~480 nm, blue light)
- Project to suprachiasmatic nucleus (circadian entrainment)
- Project to olivary pretectal nucleus (pupillary light reflex)
- Function independently of rods and cones

## Surgical Anatomy Correlations

**Cataract Surgery (Phacoemulsification):**
- Clear corneal incision (temporal, 2.2-2.8 mm)
- Continuous curvilinear capsulorhexis in anterior capsule
- Phacoemulsification of nucleus within capsular bag
- IOL placement: Posterior capsular support critical
- Posterior capsule integrity determines IOL stability

**Retinal Detachment Anatomy:**
- Subretinal fluid accumulates between neurosensory retina and RPE
- Rhegmatogenous: Retinal break allows vitreous fluid access
- Common break locations: Superior temporal, lattice degeneration areas
- Vitreoretinal traction: Posterior vitreous detachment pulling on retina

**Glaucoma Drainage Anatomy:**
- Schlemm's canal: 36 mm circumference, variable lumen
- Collector channels: 25-35, connecting to episcleral veins
- Juxtacanalicular tissue: Site of greatest outflow resistance
- Trabeculectomy creates fistula bypassing this resistance

## Orbit and Extraocular Muscles

**Annulus of Zinn:** Fibrous ring at orbital apex; origin of four rectus muscles

| Muscle | Innervation | Primary Action |
|--------|-------------|----------------|
| Superior rectus | CN III (superior division) | Elevation |
| Inferior rectus | CN III (inferior division) | Depression |
| Medial rectus | CN III (inferior division) | Adduction |
| Lateral rectus | CN VI | Abduction |
| Superior oblique | CN IV | Intorsion, depression in adduction |
| Inferior oblique | CN III (inferior division) | Extorsion, elevation in adduction |

**Mnemonic:** LR6(SO4)3 - Lateral Rectus = CN VI, Superior Oblique = CN IV, all others = CN III`,
      keyTerms: [
        { term: 'crystallins', definition: 'Structural proteins of the lens responsible for transparency and refractive index; alpha-crystallin also functions as a molecular chaperone' },
        { term: 'intrinsically photosensitive retinal ganglion cells', definition: 'Melanopsin-expressing ganglion cells mediating circadian photoentrainment and pupillary light reflex independent of rods and cones' },
        { term: 'juxtacanalicular tissue', definition: 'Region of trabecular meshwork adjacent to Schlemm\'s canal; site of greatest aqueous outflow resistance and primary target in glaucoma' },
        { term: 'capsulorhexis', definition: 'Circular tear in the anterior lens capsule created during cataract surgery to access the lens nucleus', pronunciation: 'KAP-soo-loh-REX-iss' },
        { term: 'annulus of Zinn', definition: 'Common tendinous ring at the orbital apex serving as the origin of the four rectus muscles' },
        { term: 'melanopsin', definition: 'Photopigment in ipRGCs with peak sensitivity at ~480 nm; mediates non-image-forming visual functions' },
      ],
      clinicalNotes: 'Corneal endothelial cell density must be evaluated pre-operatively before intraocular surgery. Counts below 1500 cells/mm² increase risk of post-operative corneal decompensation. Specular microscopy is the standard assessment tool.',
    },
    5: {
      level: 5,
      summary: 'Expert-level ocular anatomy integrates developmental biology, advanced molecular pathology, cutting-edge surgical techniques, and translational research in retinal prosthetics, gene therapy, and regenerative ophthalmology.',
      explanation: `## Ocular Embryology and Developmental Anomalies

**Key Developmental Events:**
| Gestational Week | Event | Anomaly if Disrupted |
|-----------------|-------|---------------------|
| 3-4 | Optic vesicle evagination | Anophthalmia (SOX2 mutations) |
| 5 | Lens placode induction | Aphakia |
| 5-6 | Optic cup formation | Coloboma (PAX2 mutations) |
| 6-7 | Hyaloid artery development | Persistent fetal vasculature |
| 7-8 | Anterior chamber formation | Peters anomaly, Axenfeld-Rieger |
| 12-20 | Retinal differentiation | Retinal dysplasia |

**Transcription Factor Cascades:**
- PAX6: Master regulator of eye development; haploinsufficiency → aniridia
- SOX2, OTX2: Optic vesicle specification
- VSX2 (CHX10): Retinal progenitor proliferation
- CRX, NRL, NR2E3: Photoreceptor differentiation

## Advanced Corneal and Anterior Segment

**Corneal Wound Healing:**
- Epithelial: Limbal stem cells (Pax6+, ABCG2+) → transit amplifying cells → differentiated epithelium
- Limbal stem cell deficiency: Causes conjunctivalization, vascularization, opacification
- Treatment: Limbal stem cell transplant, cultivated limbal epithelial transplantation (CLET)

**Descemet Membrane Endothelial Keratoplasty (DMEK):**
- Selective endothelial replacement without stromal manipulation
- Visual outcomes superior to DSAEK and penetrating keratoplasty
- Graft detachment rate: 5-15% (learning curve dependent)
- Endothelial cell loss: ~35% at 1 year, stabilizing thereafter

**Trabecular Meshwork Molecular Biology:**
- TGF-β2 upregulated in POAG aqueous → increased ECM deposition
- Myocilin (MYOC) mutations: Most common genetic cause of POAG
- LOXL1 variants: Strong association with pseudoexfoliation syndrome
- Rho kinase inhibitors (netarsudil): Target cytoskeletal contractility of TM cells

## Retinal Molecular Genetics

**Inherited Retinal Dystrophies (IRD) - Key Genes:**
| Disease | Gene | Protein | Mechanism |
|---------|------|---------|-----------|
| Retinitis pigmentosa (AD) | RHO | Rhodopsin | Misfolded protein, rod death |
| Retinitis pigmentosa (XL) | RPGR | RPGR protein | Ciliary transport defect |
| Leber congenital amaurosis | RPE65 | Retinoid isomerohydrolase | Visual cycle block |
| Stargardt disease | ABCA4 | ABCA4 transporter | Lipofuscin accumulation |
| Best disease | BEST1 | Bestrophin-1 | Chloride channel, RPE dysfunction |
| Choroideremia | CHM | Rab escort protein 1 | Prenylation defect, RPE/choroid atrophy |

**Gene Therapy Milestones:**
- Voretigene neparvovec (Luxturna): AAV2-RPE65 for biallelic RPE65 mutations
  - Phase III (SPARKS trial): Significant improvement in multi-luminance mobility test
  - First FDA-approved gene therapy for genetic disease (2017)
- AGTC-501 (XLRP, RPGR): Phase I/II, retinal sensitivity improvements
- Emerging: CRISPR-based editing for dominant mutations (e.g., RHO P23H)

## Retinal Prosthetics and Regeneration

**Retinal Implant Approaches:**
| System | Location | Resolution | Status |
|--------|----------|------------|--------|
| Argus II | Epiretinal | 60 electrodes | FDA approved (discontinued) |
| PRIMA | Subretinal | 378 pixels/implant | Phase III |
| Cortivis | Cortical (V1) | 1024 electrodes | Clinical trials |
| Orion | Cortical | 60 electrodes | Phase I/II |

**Stem Cell Therapies:**
- RPE replacement: hESC-derived RPE patches (London Project, Riken)
- Photoreceptor replacement: iPSC-derived photoreceptor precursors
- Challenges: Integration, synaptogenesis, immune rejection, tumorigenicity
- Retinal organoids: 3D cultures recapitulating layered retinal structure

## Advanced Vitreoretinal Surgery

**Subretinal Gene Therapy Delivery:**
- Pars plana vitrectomy → retinotomy → subretinal injection
- Air-fluid exchange to flatten bleb
- Target: RPE and photoreceptors directly
- Risk: Macular hole, retinal detachment at retinotomy site

**Intraoperative OCT (iOCT):**
- Real-time cross-sectional imaging during surgery
- Applications: Membrane peeling verification, subretinal fluid assessment, IOL positioning
- DISCOVER study: Changed surgical decision-making in 29% of cases

## Optic Nerve Regeneration Research

**Barriers to Regeneration:**
- CNS myelin inhibitors: Nogo-A, MAG, OMgp
- Glial scar formation (reactive astrocytes, CSPGs)
- Intrinsic growth state: Adult RGCs lack regenerative transcription programs

**Experimental Approaches:**
- PTEN/SOCS3 deletion: Reactivates mTOR signaling, promotes axon growth
- Combination therapies: PTEN deletion + CNTF + cAMP → enhanced regeneration
- Visual stimulation: Activity-dependent regeneration enhancement
- Cell-type specific regeneration: Alpha-RGCs show greatest regenerative capacity

## Clinical Pearls for the Ophthalmologist

1. Endothelial cell counts <1000/mm² are a relative contraindication to phacoemulsification; consider combined cataract/endothelial keratoplasty
2. In coloboma patients, assess for PAX2 mutations - associated with renal anomalies (renal-coloboma syndrome)
3. Blue light filtering IOLs remain controversial - theoretical melanopsin/circadian concerns vs. retinal protection
4. MYOC screening in juvenile open-angle glaucoma may guide prognosis and family screening
5. Subretinal gene therapy timing: Treat before outer retinal atrophy for best functional outcomes
6. iOCT is becoming standard of care for complex vitreoretinal cases; improves membrane peel completeness`,
      keyTerms: [
        { term: 'voretigene neparvovec', definition: 'AAV2-based gene therapy (Luxturna) delivering functional RPE65 gene for biallelic RPE65 mutation-associated retinal dystrophy', pronunciation: 'vor-ET-ih-jeen neh-PAR-vo-vek' },
        { term: 'limbal stem cells', definition: 'Corneal epithelial progenitor cells residing in the limbal palisades of Vogt; maintain corneal epithelial homeostasis' },
        { term: 'PAX6', definition: 'Master transcription factor for eye development; haploinsufficiency causes aniridia and other anterior segment dysgeneses' },
        { term: 'myocilin', definition: 'Trabecular meshwork protein encoded by MYOC; mutations cause juvenile and adult-onset open-angle glaucoma via toxic gain-of-function' },
        { term: 'retinal organoids', definition: 'Three-dimensional stem cell-derived structures recapitulating retinal laminar organization; used for disease modeling and therapeutic development' },
        { term: 'DMEK', definition: 'Descemet Membrane Endothelial Keratoplasty; selective transplantation of donor endothelium and Descemet membrane for endothelial dysfunction' },
      ],
      clinicalNotes: `Clinical Pearls:
1. RPE65 gene therapy (Luxturna) requires viable photoreceptors - OCT assessment of outer retinal layers is critical for patient selection
2. MYOC mutations account for ~4% of POAG and 10-30% of juvenile OAG; genetic testing guides prognosis
3. Limbal stem cell deficiency staging (Holland classification) guides surgical approach: partial vs. total, unilateral vs. bilateral
4. Rho kinase inhibitors (netarsudil) represent a novel IOP-lowering mechanism targeting trabecular outflow directly
5. Intraoperative OCT changes surgical decisions in ~30% of vitreoretinal cases (DISCOVER study)
6. CRISPR-based approaches for dominant RHO mutations are in preclinical development - allele-specific silencing is key`,
    },
  },

  media: [
    {
      id: 'eye-cross-section',
      type: 'diagram',
      filename: 'eye-cross-section.svg',
      title: 'Cross-Section of the Human Eye',
      description: 'Sagittal cross-section showing all major ocular structures',
    },
    {
      id: 'retinal-layers',
      type: 'histology',
      filename: 'retinal-layers.svg',
      title: 'Retinal Histological Layers',
      description: 'Ten layers of the retina from RPE to internal limiting membrane',
    },
    {
      id: 'visual-pathway',
      type: 'diagram',
      filename: 'visual-pathway.svg',
      title: 'Visual Pathway from Retina to Cortex',
      description: 'Optic nerve, chiasm, tract, LGN, optic radiations, and visual cortex',
    },
  ],

  citations: [
    {
      id: 'aao-bcsc-fundamentals',
      type: 'textbook',
      title: 'Basic and Clinical Science Course: Fundamentals and Principles of Ophthalmology',
      authors: ['American Academy of Ophthalmology'],
      source: 'AAO BCSC Section 2',
      license: 'Proprietary',
    },
    {
      id: 'luxturna-sparks',
      type: 'article',
      title: 'Efficacy and Safety of Voretigene Neparvovec (AAV2-hRPE65v2) in Patients With RPE65-Mediated Inherited Retinal Dystrophy',
      source: 'Ophthalmology',
      url: 'https://doi.org/10.1016/j.ophtha.2017.09.017',
    },
  ],

  crossReferences: [
    { targetId: 'ophthalmology-common-conditions', targetType: 'topic', relationship: 'related', label: 'Common Eye Conditions' },
    { targetId: 'nervous-cranial-nerves', targetType: 'structure', relationship: 'related', label: 'Cranial Nerves' },
    { targetId: 'neurology-visual-cortex', targetType: 'structure', relationship: 'related', label: 'Visual Cortex' },
  ],

  tags: {
    systems: ['visual', 'nervous'],
    structures: ['FMA54448', 'FMA58301', 'FMA58299'],
    topics: ['anatomy', 'physiology', 'histology', 'embryology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology', 'neurology', 'surgery'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default eyeAnatomy;
