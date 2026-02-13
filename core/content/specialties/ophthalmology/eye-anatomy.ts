/**
 * Eye Anatomy and Vision - Comprehensive Educational Content
 *
 * Covers the complete anatomy of the eye including external structures,
 * internal chambers, the visual pathway, and vision physiology.
 */

import { EducationalContent } from '../../types';

export const eyeAnatomy: EducationalContent = {
  id: 'structure-eye-anatomy',
  type: 'structure',
  name: 'Eye Anatomy and Vision',
  alternateNames: ['Ocular Anatomy', 'Visual System Anatomy', 'Bulbus oculi'],
  fmaId: 'FMA:54448',

  levels: {
    1: {
      level: 1,
      summary: 'Your eyes are like cameras that capture light and send pictures to your brain so you can see the world around you.',
      explanation: `Your eyes are amazing organs that let you see everything around you! Let's learn about the main parts:

**Outside the Eye:**
- **Eyelids**: Like curtains that protect your eyes and spread tears when you blink
- **Eyelashes**: Tiny hairs that catch dust before it gets in your eyes
- **Eyebrows**: Help keep sweat out of your eyes

**The Eye Itself:**
- **Cornea**: The clear front window of your eye (like the glass on a watch)
- **Pupil**: The black circle in the middle that lets light in (like a camera's opening)
- **Iris**: The colored part (blue, brown, green, etc.) that controls how much light enters
- **Lens**: A clear part behind the pupil that focuses light (like a magnifying glass)
- **Retina**: The back of the eye where pictures form (like the film in a camera)
- **Optic nerve**: The cable that carries pictures to your brain

**How You See:**
1. Light enters through your pupil
2. Your lens focuses the light
3. The picture lands on your retina
4. Your brain reads the picture!`,
      keyTerms: [
        { term: 'cornea', definition: 'The clear front part of the eye that light passes through first' },
        { term: 'pupil', definition: 'The black hole in the center of your eye that lets light in' },
        { term: 'iris', definition: 'The colored part of your eye that controls the pupil size' },
        { term: 'lens', definition: 'A clear part of the eye that focuses light onto the retina' },
        { term: 'retina', definition: 'The back part of your eye that senses light and sends signals to your brain' },
      ],
      analogies: [
        'Your eye works like a camera - the lens focuses light onto the retina, just like a camera lens focuses light onto film or a sensor.',
        'The pupil is like a doorway that can get bigger or smaller to let in more or less light.',
        'The iris is like window blinds - it opens and closes to control how much light enters.',
      ],
      examples: [
        'In a dark room, your pupils get bigger to let in more light so you can see better.',
        'In bright sunlight, your pupils get smaller to protect your eyes from too much light.',
        'When you look at something close, your lens changes shape to focus it clearly.',
      ],
    },
    2: {
      level: 2,
      summary: 'The eye is a spherical organ with specialized structures for focusing light, detecting photons, and transmitting visual information to the brain through the optic nerve.',
      explanation: `The human eye is approximately 24mm in diameter and consists of three main layers (tunics) and internal structures that work together for vision.

**Three Tunics (Layers):**

**1. Fibrous Tunic (Outer Layer)**
- **Sclera**: The tough, white outer coat (the "white of the eye")
- **Cornea**: Transparent anterior portion; provides 2/3 of eye's refractive power

**2. Vascular Tunic (Middle Layer) - Uvea**
- **Choroid**: Blood vessel layer that nourishes the retina
- **Ciliary body**: Produces aqueous humor; contains muscles for lens accommodation
- **Iris**: Controls pupil size; determines eye color

**3. Neural Tunic (Inner Layer)**
- **Retina**: Light-sensitive layer containing photoreceptors
  - Rods: ~120 million; night vision, peripheral vision
  - Cones: ~6 million; color vision, central (sharp) vision
- **Macula**: Central retina for detailed vision
- **Fovea**: Center of macula; highest concentration of cones

**Internal Structures:**
- **Anterior chamber**: Between cornea and iris; filled with aqueous humor
- **Posterior chamber**: Between iris and lens; filled with aqueous humor
- **Vitreous chamber**: Behind lens; filled with vitreous humor (gel-like)
- **Lens**: Transparent, biconvex structure for focusing

**Visual Pathway:**
Retina → Optic nerve → Optic chiasm → Optic tract → Lateral geniculate nucleus → Visual cortex (occipital lobe)`,
      keyTerms: [
        { term: 'sclera', definition: 'The tough white outer layer of the eyeball', pronunciation: 'SKLEER-uh' },
        { term: 'choroid', definition: 'The vascular layer between the sclera and retina', pronunciation: 'KOR-oyd' },
        { term: 'ciliary body', definition: 'Structure that produces aqueous humor and controls lens shape', pronunciation: 'SIL-ee-air-ee' },
        { term: 'macula', definition: 'The central part of the retina responsible for detailed vision', pronunciation: 'MAK-yoo-luh' },
        { term: 'fovea', definition: 'The center of the macula with the highest visual acuity', pronunciation: 'FOH-vee-uh' },
        { term: 'aqueous humor', definition: 'Clear fluid filling the anterior and posterior chambers' },
        { term: 'vitreous humor', definition: 'Gel-like substance filling the space behind the lens' },
      ],
      analogies: [
        'The three tunics are like the layers of an onion - a tough outer layer, a nutritious middle layer, and a sensitive inner layer.',
        'Rods and cones are like two different types of light detectors - rods for dim light (black and white security cameras) and cones for bright light and color (high-definition color cameras).',
      ],
    },
    3: {
      level: 3,
      summary: 'The eye functions as a complex optical system with a dioptric apparatus (cornea and lens), a photoreceptive layer (retina), and supporting vascular and neural structures that enable phototransduction and visual processing.',
      explanation: `## Optical Apparatus

**Refractive Components:**
- Total eye power: ~60 diopters
- Cornea: ~43 diopters (2/3 of total power)
  - Anterior surface: +48.8 D (air-tear interface)
  - Posterior surface: -5.8 D (cornea-aqueous interface)
- Lens: ~17-20 diopters (variable with accommodation)
  - Power increases with accommodation (near focus)

**Accommodation:**
- Ciliary muscle contraction → Zonules relax → Lens becomes more convex
- Accommodative amplitude decreases with age (presbyopia)
- Near point of accommodation: 7cm (age 10) → 100cm+ (age 60)

## Retinal Structure

**Layer Organization (10 layers, outer to inner):**
1. Retinal pigment epithelium (RPE)
2. Photoreceptor layer (rods and cones)
3. External limiting membrane
4. Outer nuclear layer (photoreceptor nuclei)
5. Outer plexiform layer
6. Inner nuclear layer (bipolar, horizontal, amacrine cells)
7. Inner plexiform layer
8. Ganglion cell layer
9. Nerve fiber layer
10. Internal limiting membrane

**Photoreceptors:**
- **Rods**: Rhodopsin (peak sensitivity 498nm); high sensitivity, low resolution
- **Cones**: Three types (S-440nm, M-530nm, L-560nm); color vision
- Fovea: Cone-only zone (0.35mm diameter); no overlying vessels

**Retinal Circulation:**
- Central retinal artery (branch of ophthalmic artery)
- Dual blood supply: Inner retina (CRA), outer retina (choroid)
- Blood-retinal barrier: RPE and retinal vessel endothelium

## Aqueous Humor Dynamics

**Production**: Ciliary body epithelium (2-3 μL/min)
**Outflow Pathways**:
- Trabecular meshwork → Schlemm's canal → Episcleral veins (90%)
- Uveoscleral outflow (10%)
**Intraocular Pressure**: Normal 10-21 mmHg`,
      keyTerms: [
        { term: 'diopter', definition: 'Unit of optical power equal to the reciprocal of focal length in meters', pronunciation: 'dy-OP-ter' },
        { term: 'accommodation', definition: 'The process by which the lens changes shape to focus on near objects' },
        { term: 'phototransduction', definition: 'Conversion of light energy into electrical signals in photoreceptors' },
        { term: 'rhodopsin', definition: 'The photopigment in rod cells responsible for dim-light vision' },
        { term: 'retinal pigment epithelium', definition: 'Single layer of cells supporting photoreceptors; critical for visual cycle' },
        { term: 'trabecular meshwork', definition: 'Tissue in the drainage angle responsible for aqueous humor outflow' },
      ],
      clinicalNotes: 'The fovea is the area of highest visual acuity and is preferentially affected in age-related macular degeneration. The optic disc (blind spot) has no photoreceptors. IOP elevation impairs optic nerve perfusion and causes glaucomatous damage.',
    },
    4: {
      level: 4,
      summary: 'The eye represents an integrated optical and neural system where corneal and lenticular optics, photoreceptor specialization, and complex neural processing create the foundation for high-acuity color vision, with precise regulation of intraocular pressure and ocular perfusion.',
      explanation: `## Advanced Optical Considerations

**Schematic Eye Models:**
- Gullstrand's simplified eye: Single refracting surface
- Reduced eye: 17mm from cornea to retina, 60D power
- Le Grand's model: More anatomically accurate

**Optical Aberrations:**
- **Spherical aberration**: Peripheral rays focus differently
- **Chromatic aberration**: Different wavelengths focus at different points
- **Astigmatism**: Non-spherical corneal curvature
- **Coma, trefoil**: Higher-order aberrations

**Wavefront Analysis:**
- Zernike polynomials describe aberrations
- Used in custom LASIK planning
- Measure with Hartmann-Shack aberrometry

## Phototransduction Cascade

**Dark State:**
- cGMP levels high → CNG channels open → Photoreceptor depolarized
- Continuous glutamate release onto bipolar cells

**Light Activation:**
1. Photon absorption by rhodopsin/cone opsin
2. Conformational change → Metarhodopsin II (active)
3. Transducin (G-protein) activation
4. PDE (phosphodiesterase) activation
5. cGMP hydrolysis → Channel closure
6. Hyperpolarization (graded response)
7. Decreased glutamate release

**Recovery/Adaptation:**
- Rhodopsin kinase phosphorylates active rhodopsin
- Arrestin binding quenches activity
- Guanylate cyclase restores cGMP
- Visual cycle: 11-cis retinal regeneration in RPE

## Retinal Neural Processing

**Receptive Fields:**
- Center-surround organization
- ON-center and OFF-center ganglion cells
- Lateral inhibition enhances contrast

**Retinal Ganglion Cell Types:**
- **Midget (P) cells**: Small receptive fields, color-opponent, central vision
- **Parasol (M) cells**: Large receptive fields, motion detection
- **Bistratified cells**: Blue-yellow color opponent

**Parallel Pathways:**
- M pathway: Motion, flicker, low contrast
- P pathway: Color, fine detail, high contrast
- K pathway: Blue-yellow color

## Ocular Blood Flow

**Arterial Supply:**
- Ophthalmic artery (first branch of internal carotid)
- Central retinal artery: Inner retina
- Posterior ciliary arteries: Choroid, optic nerve head
- Anterior ciliary arteries: Iris, ciliary body

**Autoregulation:**
- Retinal vessels: Myogenic and metabolic autoregulation
- Choroidal vessels: Autonomic regulation (less autoregulation)
- IOP affects perfusion pressure: OPP = MAP - IOP`,
      keyTerms: [
        { term: 'Zernike polynomials', definition: 'Mathematical functions used to describe optical aberrations of the eye' },
        { term: 'transducin', definition: 'G-protein that couples activated rhodopsin to phosphodiesterase in phototransduction' },
        { term: 'center-surround receptive field', definition: 'Organization where light in the center has opposite effect to light in the surround' },
        { term: 'ocular perfusion pressure', definition: 'Difference between mean arterial pressure and intraocular pressure' },
      ],
      clinicalNotes: 'Higher-order aberrations become significant after refractive surgery. The phototransduction cascade explains the mechanism of stationary night blindness (transducin mutations) and retinitis pigmentosa (rhodopsin mutations). Ocular perfusion pressure is relevant in glaucoma with normal-tension disease.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive understanding of ocular anatomy integrates embryological development, molecular biology of phototransduction, optical engineering principles, and clinical applications including advanced imaging, surgical anatomy, and therapeutic interventions.',
      explanation: `## Embryological Development

**Timeline:**
- Day 22: Optic sulcus appears
- Week 4: Optic vesicle, lens placode
- Week 5: Optic cup forms (double-layered)
- Week 6-7: Lens vesicle, vitreous, fetal vasculature
- Week 7-8: Retinal differentiation begins
- Month 4-5: Eyelid fusion and separation
- Month 7-9: Myelination of optic nerve (stops at lamina cribrosa)

**Tissue Origins:**
- Surface ectoderm: Lens, corneal epithelium, eyelid skin
- Neural ectoderm: Retina, RPE, optic nerve, iris/ciliary epithelium
- Mesoderm/neural crest: Corneal stroma/endothelium, sclera, choroid, uveal stroma

**Congenital Anomalies:**
- Coloboma: Failure of fetal fissure closure
- Persistent fetal vasculature: Failure of regression
- Aniridia: PAX6 mutations
- Microphthalmia: Multiple genetic causes

## Advanced Retinal Physiology

**Photoreceptor Outer Segment Renewal:**
- Continuous disc shedding (~10% daily)
- Phagocytosis by RPE (circadian rhythm)
- Defects cause retinitis pigmentosa, AMD

**Visual Cycle Details:**
- All-trans retinal → All-trans retinol (photoreceptor)
- Transport to RPE via IRBP
- Isomerization to 11-cis retinal in RPE (RPE65, LRAT)
- Return to photoreceptors
- Mutations cause Leber congenital amaurosis

**Electroretinography (ERG):**
- a-wave: Photoreceptor hyperpolarization
- b-wave: Bipolar cell (ON pathway) depolarization
- Oscillatory potentials: Inner retinal processing
- Clinical applications: Retinitis pigmentosa, CSNB, toxicity monitoring

## Surgical and Imaging Anatomy

**Anterior Segment:**
- Limbus: Surgical landmark (2mm wide)
- Schwalbe's line: End of Descemet membrane
- Trabecular meshwork width: 0.5-1mm
- Ciliary sulcus: IOL placement for sulcus-fixation
- Pars plana: 3.5-4mm from limbus (vitrectomy ports)

**Posterior Segment:**
- Optic disc: 1.5mm diameter, cup-to-disc ratio
- Macula: 5.5mm diameter; fovea 1.5mm; foveola 0.35mm
- Ora serrata: 6mm (nasal) to 7mm (temporal) from limbus
- Vitreous base: Strongest vitreoretinal adhesion

**Imaging Modalities:**
- OCT: 5-7 μm axial resolution; retinal layer analysis
- OCTA: Non-invasive angiography; detects flow
- Fluorescein angiography: Vascular filling, leakage, pooling
- ICG angiography: Choroidal visualization (longer wavelength)
- Fundus autofluorescence: RPE lipofuscin (A2E)
- Ultrasound biomicroscopy: Anterior segment at 50 MHz

## Therapeutic Applications

**Gene Therapy:**
- Luxturna (voretigene neparvovec): RPE65 mutation; first FDA-approved ocular gene therapy
- Ongoing trials: Choroideremia, CNGB3 achromatopsia, XLRS

**Retinal Implants:**
- Argus II: 60-electrode epiretinal implant
- Subretinal implants: Alpha-IMS
- Challenges: Resolution, biocompatibility, cortical implants

**Regenerative Medicine:**
- RPE cell transplantation (iPSC-derived)
- Photoreceptor replacement research
- Optogenetics for vision restoration`,
      keyTerms: [
        { term: 'optic cup', definition: 'Double-layered structure from which retina and RPE develop; forms during week 5 of embryogenesis' },
        { term: 'lamina cribrosa', definition: 'Sieve-like scleral structure through which optic nerve fibers pass; relevant to glaucoma pathophysiology' },
        { term: 'RPE65', definition: 'Enzyme essential for visual cycle; mutations cause Leber congenital amaurosis; target of Luxturna gene therapy' },
        { term: 'A2E', definition: 'Lipofuscin fluorophore that accumulates in RPE; implicated in AMD pathogenesis' },
        { term: 'fundus autofluorescence', definition: 'Imaging technique that detects RPE lipofuscin accumulation' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Pars plana is the safest entry point for vitrectomy (avoids lens, retina, and major vessels)
2. OCT has revolutionized diagnosis and monitoring of macular diseases
3. ERG is essential for hereditary retinal dystrophy diagnosis
4. Gene therapy (Luxturna) represents a paradigm shift in treating inherited retinal disease
5. Understanding the visual cycle explains the mechanism of vitamin A deficiency night blindness
6. The blood-retinal barrier breakdown is the hallmark of diabetic macular edema`,
    },
  },

  media: [
    {
      id: 'eye-anatomy-cross-section',
      type: 'diagram',
      filename: 'eye-anatomy-cross-section.svg',
      title: 'Eye Cross-Section',
      description: 'Horizontal cross-section showing all major structures of the eye',
    },
    {
      id: 'retinal-layers-diagram',
      type: 'diagram',
      filename: 'retinal-layers.svg',
      title: 'Retinal Layers',
      description: 'The 10 layers of the retina from RPE to internal limiting membrane',
    },
    {
      id: 'visual-pathway-diagram',
      type: 'diagram',
      filename: 'visual-pathway.svg',
      title: 'Visual Pathway',
      description: 'Complete visual pathway from retina to visual cortex',
    },
  ],

  citations: [
    {
      id: 'grays-anatomy-eye',
      type: 'textbook',
      title: 'Orbit and Accessory Visual Apparatus',
      authors: ['Standring, S.'],
      source: "Gray's Anatomy: The Anatomical Basis of Clinical Practice",
      chapter: '41',
    },
    {
      id: 'clinical-anatomy-snell',
      type: 'textbook',
      title: 'The Head and Neck',
      authors: ['Snell, R.S.'],
      source: 'Clinical Anatomy by Regions',
      chapter: '11',
    },
    {
      id: 'basic-clinical-science-course',
      type: 'textbook',
      title: 'Fundamentals and Principles of Ophthalmology',
      source: 'AAO Basic and Clinical Science Course',
      chapter: 'Section 2',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-occipital-lobe', targetType: 'structure', relationship: 'related', label: 'Visual Cortex' },
    { targetId: 'condition-refractive-errors', targetType: 'condition', relationship: 'related', label: 'Refractive Errors' },
    { targetId: 'condition-glaucoma', targetType: 'condition', relationship: 'related', label: 'Glaucoma' },
    { targetId: 'condition-cataracts', targetType: 'condition', relationship: 'related', label: 'Cataracts' },
  ],

  tags: {
    systems: ['visual', 'nervous'],
    structures: ['FMA:54448', 'FMA:58594', 'FMA:58243'],
    topics: ['anatomy', 'ophthalmology', 'vision'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default eyeAnatomy;
