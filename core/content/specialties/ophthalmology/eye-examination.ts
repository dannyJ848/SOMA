/**
 * Eye Examination - Comprehensive Educational Content
 *
 * Covers the comprehensive eye examination including visual acuity testing,
 * pupillary assessment, anterior segment examination, fundoscopy, and
 * specialized ophthalmic techniques.
 */

import { EducationalContent } from '../../types';

export const eyeExamination: EducationalContent = {
  id: 'process-eye-examination',
  type: 'process',
  name: 'Eye Examination',
  alternateNames: ['Ophthalmic Examination', 'Eye Exam', 'Ocular Assessment'],

  levels: {
    1: {
      level: 1,
      summary: 'An eye examination is a series of tests that check how well you can see and the health of your eyes.',
      explanation: `An eye exam is like a check-up for your eyes. Eye doctors use special tools and tests to make sure your eyes are healthy and working properly.

**What Happens During an Eye Exam?**

**1. Checking Your Vision (Visual Acuity)**
You read letters on a chart from across the room. The letters get smaller and smaller. This test shows how clearly you can see.

**The Famous Eye Chart**
The chart with the big E at the top is called a Snellen chart. You might cover one eye at a time to test each eye separately.

**2. Looking at Your Eye Structure**
The doctor uses a bright light and special magnifying tools to look at:
- The clear front part of your eye (cornea)
- The colored part of your eye (iris)
- The black opening in the center (pupil)
- The lens inside your eye
- The back of your eye (retina)

**3. Testing Your Eye Movements**
The doctor asks you to follow a moving object with your eyes. This checks if all your eye muscles are working together.

**4. Checking Your Side Vision**
You may be asked to cover one eye and look straight ahead while the doctor tests if you can see things on the sides.

**5. Eye Pressure Test**
This checks for a serious eye condition called glaucoma. The doctor might use:
- A puff of air test
- A special probe that gently touches your eye
- Both tests are quick and don't hurt

**6. Dilated Eye Exam**
The doctor puts special drops in your eyes that make your pupils (the black center) bigger. This lets them see all the way to the back of your eye.
- Your eyes might be sensitive to light for a few hours
- Reading might be blurry temporarily
- You should have someone drive you home

**Why Are Eye Exams Important?**

- Eye diseases often have no early symptoms
- Some problems can be treated if caught early
- Your eyes can show signs of other health problems
- Vision problems can affect learning and daily activities

**How Often Should You Have an Eye Exam?**
- Children: Before starting school, then every 1-2 years
- Adults: Every 1-2 years
- People with eye problems or health conditions: More often`,
      keyTerms: [
        { term: 'visual acuity', definition: 'How clearly you can see' },
        { term: 'pupil', definition: 'The black center of your eye that lets light in' },
        { term: 'retina', definition: 'The back of your eye that senses light' },
        { term: 'dilated', definition: 'When the pupil gets larger' },
        { term: 'glaucoma', definition: 'A serious eye disease that damages the optic nerve' },
      ],
      analogies: [
        'An eye exam is like taking your car for a check-up - the mechanic checks all the parts to make sure everything works properly.',
        'The pupil is like the aperture of a camera - it changes size to let in the right amount of light.',
      ],
      examples: [
        'A child getting an eye exam before starting kindergarten to make sure they can see the board at school.',
        'An adult getting checked for new glasses because they have trouble reading menus.',
        'Someone with diabetes getting regular eye exams to watch for eye problems.',
      ],
    },
    2: {
      level: 2,
      summary: 'The comprehensive eye examination is a systematic evaluation of visual function and ocular health, incorporating tests of visual acuity, pupillary responses, ocular motility, visual fields, and anterior and posterior segment examination.',
      explanation: `## Overview of Eye Examination

A complete eye examination assesses both vision (how well you see) and ocular health (the condition of eye structures). It typically takes 30-60 minutes and is performed by an ophthalmologist or optometrist.

## Components of Eye Examination

**1. History Taking**
- Chief complaint (reason for visit)
- Ocular history (previous problems, glasses/contacts)
- Medical history (diabetes, hypertension, etc.)
- Medications (some affect eyes)
- Family history of eye disease

**2. Visual Acuity Testing**
- Distance vision: Snellen chart at 20 feet
- Near vision: Reading card at 14 inches
- Recorded as fractions (20/20, 20/40, etc.)
- Tested with and without correction (glasses/contacts)
- Each eye tested separately

**3. Pupillary Examination**
- Size and shape of pupils
- Pupillary light reflex (direct and consensual)
- Accommodation (focusing on near objects)
- Checks for afferent pupillary defect (Marcus Gunn pupil)

**4. Extraocular Movements**
- Follow finger in H pattern
- Tests all six extraocular muscles
- Checks for misalignment (strabismus)
- Assesses binocular vision and depth perception

**5. Visual Field Testing**
- Confrontation field testing in office
- Checks peripheral vision
- Can detect glaucoma, neurological problems

**6. External Examination**
- Eyelids and eyelashes
- Surrounding tissues
- Lacrimal system (tear drainage)
- Orbit and surrounding bones

**7. Anterior Segment Examination**
- Slit lamp biomicroscopy
- Examines cornea, anterior chamber, iris, lens
- Can detect cataracts, corneal problems, inflammation

**8. Intraocular Pressure Measurement**
- Goldmann applanation tonometry (gold standard)
- Non-contact tonometry ("air puff" test)
- Important for glaucoma screening

**9. Posterior Segment (Fundus) Examination**
- Dilated pupil examination
- Views retina, optic nerve, retinal vessels
- Can detect retinal detachment, macular degeneration, diabetic changes

**10. Refraction**
- Determines glasses prescription
- Phoropter with multiple lenses
- "Which is better, 1 or 2?" questions

## Common Specialized Tests

**Gonioscopy:** Examines drainage angle of eye (glaucoma evaluation)
**Pachymetry:** Measures corneal thickness
**Optical Coherence Tomography (OCT):** Cross-sectional retinal images
**Visual Field Analyzer:** Detailed mapping of peripheral vision
**Corneal Topography:** Maps corneal curvature

## Understanding Visual Acuity Notation

| Measurement | Meaning |
|-------------|---------|
| 20/20 | Normal vision |
| 20/40 | Can see at 20 feet what normal sees at 40 feet |
| 20/200 | Legal blindness threshold |
| 20/15 | Better than average vision |

## Indications for Urgent Referral

- Sudden vision loss
- Sudden increase in floaters or flashes
- Eye pain with redness
- Trauma to eye
- Sudden double vision
- Halos around lights`,
      keyTerms: [
        { term: 'slit lamp', definition: 'Microscope used to examine the front of the eye', pronunciation: 'slit lamp' },
        { term: 'intraocular pressure', definition: 'Fluid pressure inside the eye', pronunciation: 'in-tra-OK-yoo-lar' },
        { term: 'applanation', definition: 'Flattening of cornea to measure eye pressure', pronunciation: 'ap-luh-KAY-shun' },
        { term: 'refraction', definition: 'Test to determine glasses prescription' },
        { term: 'fundus', definition: 'The back of the eye including retina and optic nerve', pronunciation: 'FUN-dus' },
        { term: 'strabismus', definition: 'Misalignment of the eyes', pronunciation: 'struh-BIZ-mus' },
      ],
      analogies: [
        'The slit lamp is like a microscope for your eye - it magnifies the structures so the doctor can see tiny details.',
        'Dilating drops are like opening curtains on a window - they let the doctor see all the way to the back of the eye.',
      ],
    },
    3: {
      level: 3,
      summary: 'The comprehensive ophthalmic examination systematically assesses visual function, ocular anatomy, and pathology through validated techniques including Snellen acuity, pupillary reflex testing, slit lamp biomicroscopy, applanation tonometry, and dilated fundoscopy.',
      explanation: `## Systematic Approach to Eye Examination

**Order of Examination:**
1. External inspection
2. Visual acuity (most important single test)
3. Pupils (including RAPD)
4. Extraocular movements
5. Visual fields
6. Anterior segment (slit lamp)
7. IOP measurement
8. Posterior segment (dilated fundus exam)
9. Specialized tests as indicated

## Detailed Examination Techniques

**Visual Acuity Testing:**
- **Snellen chart**: Most common, distance standardized to 20 feet (6 meters)
- **Near vision card**: Rosenbaum or Jaeger at 14 inches
- **Pinhole testing**: Improves acuity if refractive error
- **Recording**: Best corrected visual acuity (BCVA)

**Pupillary Examination:**
- **Size**: Normal 3-4mm, equal to within 1mm
- **Shape**: Round; irregularity suggests pathology
- **Light reflex**:
  - Direct: Pupil constricts when light directed at it
  - Consensual: Pupil constricts when light directed at other eye
- **Swinging flashlight test**: Detects RAPD (relative afferent pupillary defect)
- **Accommodation**: Pupils constrict when focusing on near object

**Extraocular Movement Testing:**
- **H pattern**: Tests all 6 muscles and 3 cranial nerves
- **Cover-uncover test**: Detects tropia (manifest deviation)
- **Alternate cover test**: Detects phoria (latent deviation)
- **Versions**: Both eyes move together
- **Ductions**: One eye moves while other covered

**Visual Field Assessment:**
- **Confrontation testing**: Quick bedside test
- **Automated perimetry**: Gold standard for detailed mapping
  - Humphrey Field Analyzer: Most common
  - 24-2 or 30-2 test patterns for glaucoma
  - 10-2 for central/chloroquine screening

## Slit Lamp Biomicroscopy

**Technique:**
- Magnification: 6-40x with adjustable illumination
- Beam types: Diffuse, direct, indirect, retroillumination
- Scan from anterior to posterior:
  1. Eyelashes and lids
  2. Conjunctiva and sclera
  3. Cornea (epithelium to endothelium)
  4. Anterior chamber
  5. Iris
  6. Lens

**Abnormal Findings:**
- Corneal abrasions (fluorescein staining)
- Corneal edema (striate keratopathy)
- Anterior chamber cells/flare (inflammation)
- Hypopyon (pus in anterior chamber)
- Hyphema (blood in anterior chamber)
- Lens opacity (cataract)

**Special Slit Lamp Techniques:**
- **Gonioscopy**: Goldmann or Zeiss lens to examine angle
- **Applanation tonometry**: Goldmann tonometer mounted on slit lamp
- **Fundus examination**: +78D or +90D lens for posterior segment

## Intraocular Pressure Measurement

**Goldmann Applanation Tonometry:**
- Gold standard for IOP measurement
- Measures force needed to flatten 3.06mm of cornea
- Normal: 10-21 mmHg
- Factors affecting reading:
  - Central corneal thickness (CCT)
  - Corneal edema
  - Excessive pressure on globe

**Alternative Methods:**
- **Tono-Pen**: Handheld, useful with edema
- **Non-contact tonometry**: Air puff, less accurate
- **Schiotz**: Indentation tonometry, rarely used

## Posterior Segment Examination

**Direct Ophthalmoscopy:**
- Monocular view, 15x magnification
- Limited view of fundus
- Useful for quick disc assessment

**Indirect Ophthalmoscopy:**
- Binocular view, wider field
- Requires 20D lens (and 28D for peripheral)
- Stereoscopic view
- Examination through undilated pupil possible (with difficulty)

**Slit Lamp Biomicroscopy with Lenses:**
- **78D lens**: Wide field, good for disc and macula
- **90D lens**: Higher magnification, smaller field
- **Superfield 60/66D**: Excellent peripheral view

**Dilated Fundus Examination:**
- Agents: Tropicamide 1%, Phenylephrine 2.5%
- Wait 15-20 minutes for full effect
- Examine: Optic nerve, macula, retinal vessels, periphery
- Document: Cup-to-disc ratio, vessels, lesions

## Normal Findings vs Pathology

**Optic Nerve:**
- Normal: Pink, CD ratio <0.5, sharp margins
- Glaucoma: Increased CD ratio, rim thinning, notching
- Papilledema: Disc swelling, elevated, blurred margins

**Macula:**
- Normal: Foveal reflex present, no pigment changes
- AMD: Drusen, pigment changes, fluid/hemorrhage
- Macular edema: Loss of foveal reflex, cystoid changes

**Retinal Vessels:**
- Normal: AV ratio 2:3, arteries brighter red
- Hypertensive: Arteriolar narrowing, AV nicking
- Diabetic: Microaneurysms, hemorrhages, exudates`,
      keyTerms: [
        { term: 'RAPD', definition: 'Relative afferent pupillary defect; abnormal pupillary response indicating optic nerve or retinal disease' },
        { term: 'Goldmann applanation tonometry', definition: 'Gold standard measurement of intraocular pressure using contact probe' },
        { term: 'gonioscopy', definition: 'Examination of the anterior chamber angle using special goniolens' },
        { term: 'cup-to-disc ratio', definition: 'Ratio of optic cup diameter to optic disc diameter; increased in glaucoma' },
        { term: 'foveal reflex', definition: 'Light reflection from center of macula; indicates healthy macula' },
        { term: 'AV nicking', definition: 'Narrowing of retinal vein where crossed by artery; sign of hypertension' },
      ],
      clinicalNotes: 'Always check visual acuity first - it\'s the most important functional assessment. Dilate after IOP measurement if possible (drops can affect pressure). Document findings systematically for each eye.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive ophthalmic examination integrates anatomical assessment, functional testing, and specialized diagnostic procedures to detect ocular disease and monitor treatment response.',
      explanation: `## Advanced Examination Techniques

**Automated Perimetry (Humphrey Field Analyzer):**

**Test Patterns:**
- **24-2**: 54 test points, 24° radius, standard for glaucoma
- **30-2**: 76 test points, 30° radius, more peripheral
- **10-2**: 68 test points, central 10°, macula/Plaquenil monitoring
- **Goldmann kinetic**: Manual perimetry, maps isopters

**Interpreting Visual Fields:**
- **Reliability indices**: Fixation losses, false positives, false negatives
- **Glaucoma**: Arcuate defects, paracentral scotomas, nasal step
- **Neurological**: Altitudinal defects, bitemporal hemianopsia
- **Vascular**: Altitudinal defects (branch retinal artery occlusion)

**Optical Coherence Tomography (OCT):**
- Cross-sectional retinal imaging using interferometry
- Axial resolution: 5-7 microns
- Applications:
  - **Macular OCT**: Macular edema, AMD, vitreomacular traction
  - **RNFL analysis**: Glaucoma detection and monitoring
  - **Anterior segment OCT**: Angle assessment, corneal imaging

**OCT Interpretation:**
- Normal macular fovea: Depression with intact layers
- Macular edema: Cystoid spaces, increased thickness
- Epiretinal membrane: Hyperreflective surface, traction
- Glaucoma: RNFL thinning, ganglion cell layer loss

**Fundus Photography:**
- Documents retinal appearance
- Comparison over time
- Widefield imaging (200°): Optos captures periphery

**Fluorescein Angiography (FA):**
- Intravenous fluorescein dye
- Sequential imaging of retinal/choroidal circulation
- Phases: Choroidal fill, arterial, venous, late
- Abnormalities: Leakage, nonperfusion, staining, window defect

**Indocyanine Green Angiography (ICGA):**
- Longer wavelength than fluorescein
- Visualizes choroidal circulation
- Indications: Polypoidal choroidal vasculopathy, CNV, inflammatory conditions

**Ultrasound Biomicroscopy (UBM):**
- High-frequency (50 MHz) ultrasound
- Anterior segment imaging
- Indications: Angle assessment, ciliary body, tumors

**B-Scan Ultrasound:**
- 10 MHz transducer
- Posterior segment when media opaque
- Detects: Retinal detachment, vitreous hemorrhage, intraocular foreign body, tumors

## Diagnostic Imaging Applications

| Modality | Indications | Key Information |
|----------|-------------|-----------------|
| OCT | Macular pathology, glaucoma | Layer-by-layer retinal anatomy |
| FA | Vascular disease, CNV | Blood flow, leakage |
| ICGA | Choroidal disease | Choroidal circulation |
| Fundus photo | Documentation | Overall appearance |
| B-scan | Media opacity | Posterior segment pathology |
| UBM | Anterior segment | Angle, ciliary body |
| CT orbit | Trauma, foreign body | Bone, foreign bodies |
| MRI orbit | Optic nerve, tumors | Soft tissue, optic nerve |

## Specialized Examination Situations

**Trauma Examination:**
- Visual acuity (with best correction)
- Slit lamp: Look for Seidel sign (leaking wound)
- Everting upper eyelid to check for foreign body
- Rule out globe rupture (distorted anterior chamber, IOP very low)
- B-scan if view obscured

**Diabetic Eye Examination:**
- Dilated fundus exam annually
- Look for: Microaneurysms, hemorrhages, exudates, neovascularization
- OCT for macular edema
- FA if edema or neovascularization suspected
- Grading: Mild, moderate, severe NPDR vs PDR

**Glaucoma Examination:**
- IOP measurement (pachymetry for CCT)
- Gonioscopy: Angle grading (Shaffer, Spaeth)
- Optic nerve head evaluation (CD ratio, rim notching)
- RNFL analysis (OCT)
- Visual fields (Humphrey 24-2)

**Neuro-Ophthalmic Examination:**
- **RAPD**: Swinging flashlight test
- **Color vision**: Ishihara plates (optic nerve disease)
- **Visual fields**: Automated perimetry
- **Fundus**: Optic disc appearance
- **Pupils**: Anisocoria evaluation (pharmacologic, physiologic)

## Ophthalmoscopy Techniques

**Direct Ophthalmoscopy:**
- Monocular, 15x magnification, 10° field
- Useful for: Disc assessment, heme, papilledema
- Limited view, no stereopsis

**Indirect Ophthalmoscopy:**
- Binocular, stereoscopic, wide field
- Requires: 20D lens (or 28D for peripheral)
- Best for: Retinal detachment, peripheral pathology
- Indirect image: Reversed and inverted

## Pupillary Pathology

**Anisocoria Evaluation:**
1. Measure in light and dark
2. Compare change between conditions
3. Greater in light = parasympathetic problem (small pupil)
4. Greater in dark = sympathetic problem (large pupil)

**Common Causes:**
- **Physiologic**: 20% population, <1mm difference
- **Horner syndrome**: Ptosis, miosis, anhidrosis
- **Third nerve palsy**: "Down and out" eye, dilated pupil
- **Pharmacologic**: Drops, medications

## Anterior Segment Assessment

**Corneal Examination:**
- **Epithelium**: Abrasions (fluorescein uptake), dystrophies
- **Stroma**: Scars, infiltrates, edema
- **Endothelium**: Guttae (Fuchs'), cell count (specular microscopy)

**Lens Examination:**
- Grading cataracts: Nuclear, cortical, posterior subcapsular
- Nuclear sclerosis: Yellowing, increased density
- Cortical: Spoke-like opacities
- PSC: Posterior, near visual axis, most symptomatic`,
      keyTerms: [
        { term: 'Seidel sign', definition: 'Leak of aqueous through corneal wound, visible as streaming of fluorescein dye' },
        { term: 'pachymetry', definition: 'Measurement of corneal thickness' },
        { term: 'Shaffer angle grading', definition: 'Classification of anterior chamber angle width (0-4)' },
        { term: 'RNFL', definition: 'Retinal nerve fiber layer; thins in glaucoma' },
        { term: 'guttae', definition: 'Endothelial cell excrescences in Fuchs corneal dystrophy' },
      ],
      clinicalNotes: 'For trauma, always evert upper lids to rule out foreign body. OCT has revolutionized macular and glaucoma management - provides objective quantification for monitoring.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive ophthalmic examination integrates advanced imaging technologies, standardized testing protocols, and clinical judgment to diagnose and monitor ocular disease.',
      explanation: `## Contemporary Diagnostic Approaches

**OCT Angiography (OCTA):**
- Non-invasive visualization of retinal and choroidal vasculature
- No dye required
- Applications:
  - CNV detection and monitoring
  - Diabetic retinopathy (nonperfusion, neovascularization)
  - Glaucoma (vessel density analysis)
  - Retinal vein occlusion
- Limitations: Motion artifact, limited field size, projection artifact

**Widefield Imaging:**
- **Optos**: 200° field in single image
- **Montage imaging**: Multiple images combined
- Ultrawidefield FA: Captures peripheral nonperfusion
- Impact: Detects peripheral pathology missed on standard exam

**Adaptive Optics:**
- Corrects higher-order aberrations
- Cellular-level resolution
- Applications: Photoreceptor imaging, cone density mapping

**Artificial Intelligence in Ophthalmology:**
- **Deep learning algorithms** for:
  - Diabetic retinopathy screening (FDA-approved)
  - ROP screening
  - Glaucoma detection
  - Cataract severity grading
- **OCT interpretation**: Automated segmentation, disease detection
- **Challenges**: Black box nature, integration into workflow

## Examination Protocols by Condition

**Diabetic Eye Examination (AAO Guidelines):**
- Type 1 diabetes: Within 5 years of diagnosis, then annually
- Type 2 diabetes: At diagnosis, then annually
- Pregnancy: Every trimester
- Components:
  - Dilated fundus exam
  - OCT if edema suspected
  - FA if neovascularization or edema
- Documentation: ETDRS grading system

**Glaucoma Examination:**
- Baseline: IOP, gonioscopy, disc photos, OCT RNFL, visual fields
- Follow-up frequency based on severity:
  - Glaucoma suspect: 6-12 months
  - Mild: 4-6 months
  - Moderate: 3-4 months
  - Severe: 1-3 months
- Progression assessment:
  - Guided Progression Analysis (GPA)
  - Trend analysis
  - Event-based vs trend-based criteria

**Plaquenil (Hydroxychloroquine) Monitoring:**
- Baseline: Exam, 10-2 visual fields, SD-OCT, multifocal ERG
- Annual after 5 years of use (sooner if high risk)
- Risk factors: Daily dose >5 mg/kg, duration >5 years, renal/liver disease, macular disease
- Early toxicity: Parafoveal ring on OCT, field loss on 10-2

## Neuro-Ophthalmic Examination

**Afferent Pathway Assessment:**
- Visual acuity: Most sensitive for anterior visual pathway
- Color vision (Ishihara): Early optic neuropathy
- Contrast sensitivity: May be abnormal before acuity
- Visual fields: Localize lesion
- Pupils: RAPD (post-chiasmal lesion)
- Fundus: Disc edema, atrophy
- OCT: RNFL, ganglion cell analysis
- Neuroimaging: MRI brain/orbits with contrast

**Efferent Pathway Assessment:**
- Ocular motility: Ductions, versions, vergences
- Cover testing: Detect tropia/phoria
- Maddox rod: Measure deviation
- Forced duction test: Restrictive vs paretic
- Saccades and pursuit: Localize brainstem lesions

## Pediatric Eye Examination

**Age-Specific Examination:**
- **Newborn**: Red reflex, ocular alignment
- **Infants (6-12 months)**: Fixation and following, preferential looking
- **Toddlers (1-3 years)**: Pictographic acuity (Allen cards), cover test
- **Preschool (3-5 years)**: LEA symbols, HOTV
- **School age**: Snellen or ETDRS

**Amblyopia Detection:**
- Decreased acuity without organic cause
- Risk factors: Strabismus, anisometropia, deprivation
- Treatment: Glasses, patching, atropine
- Critical period: Before age 8

## Examination Pearls

**Optic Disc Assessment:**
- ISNT rule: Inferior > Superior > Nasal > Temporal rim thickness
- Focal notching: Glaucoma more than diffuse thinning
- Peripapillary atrophy: Alpha zone (normal), beta zone (pathologic)

**Macular Examination:**
- Normal fovea: Depression, central reflex
- Vitreomacular traction: Octopus appearance on OCT
- Lamellar hole: Inner foveal defect, intact outer retina
- Full-thickness macular hole: Full-thickness defect, operculum

**Anterior Chamber:**
- Grading cells/flare: Standardized (SUN) 0-4+ scale
- Hypopyon: Measure in mm
- Hyphema: Grade I (<1/3), II (1/3-1/2), III (1/2-3/4), IV (>3/4)

**Angle Assessment (Gonioscopy):**
- Shaffer grading: 0 (closed) to 4 (wide open)
- Spaeth grading: Angle width, iris insertion, configuration
- Dynamic gonioscopy: Compress indentation to detect peripheral anterior synechiae

## Documentation Standards

**Examination Note Elements:**
- Visual acuity: Distance, near, with/without correction, pinhole
- IOP: Time, method, correction for CCT
- Anterior segment: Cornea clear, AC deep, cells/flare, lens
- Posterior segment: Disc C/D ratio, macula, vessels, periphery
- Impression and plan

**Telemedicine Considerations:**
- Store-and-forward: Imaging for remote interpretation
- Live video: Limited anterior segment view
- Home monitoring: Visual fields, OCT (emerging)
- Regulatory: Varies by jurisdiction`,
      keyTerms: [
        { term: 'OCTA', definition: 'OCT angiography; non-invasive vascular imaging' },
        { term: 'GPA', definition: 'Guided Progression Analysis; statistical analysis of visual field change' },
        { term: 'ETDRS', definition: 'Early Treatment Diabetic Retinopathy Study; standardized grading system' },
        { term: 'ISNT rule', definition: 'Normal optic nerve rim thickness pattern' },
        { term: 'amblyopia', definition: 'Decreased vision from abnormal visual development; "lazy eye"' },
      ],
      clinicalNotes: `Evidence-based recommendations:

1. **OCT has become essential** for macular and glaucoma care. Provides objective, quantifiable data for diagnosis and monitoring.

2. **Widefield imaging** detects peripheral pathology in diabetic retinopathy, uveitis, and retinal vascular disease that standard exams miss.

3. **Teleophthalmology** increases access to screening for diabetic retinopathy and ROP, with validated algorithms comparable to in-person grading.

4. **Documentation quality** affects care continuity. Standardized templates improve completeness and facilitate communication.

5. **Screening intervals** should be individualized based on risk factors, not strictly time-based.

6. **Artificial intelligence** tools are adjunctive, not replacements for clinical judgment. Use to enhance, not replace, clinical skills.`,
    },
  },

  media: [
    {
      id: 'eye-examination-flowchart',
      type: 'diagram',
      filename: 'eye-examination-flowchart.svg',
      title: 'Eye Examination Flowchart',
      description: 'Systematic approach to comprehensive eye examination',
    },
    {
      id: 'slit-lamp-examination',
      type: 'diagram',
      filename: 'slit-lamp-examination.svg',
      title: 'Slit Lamp Examination',
      description: 'Components of slit lamp biomicroscopy',
    },
    {
      id: 'fundus-examination',
      type: 'diagram',
      filename: 'fundus-examination.svg',
      title: 'Dilated Fundus Examination',
      description: 'Normal findings and common abnormalities',
    },
  ],

  citations: [
    {
      id: 'aao-bcsc-exam',
      type: 'textbook',
      title: 'Comprehensive Ophthalmic Examination',
      source: 'AAO Basic and Clinical Science Course',
      chapter: 'Section 1: Introduction and Overview',
    },
    {
      id: 'vaughan-asbury',
      type: 'textbook',
      title: 'General Ophthalmology',
      authors: ['Vaughan D', 'Asbury T', 'Riordan-Eva P'],
      source: 'McGraw-Hill Medical',
      chapter: 'The Ophthalmic Examination',
    },
  ],

  crossReferences: [
    { targetId: 'structure-eye-anatomy', targetType: 'structure', relationship: 'related', label: 'Eye Anatomy' },
    { targetId: 'condition-glaucoma', targetType: 'condition', relationship: 'related', label: 'Glaucoma' },
  ],

  tags: {
    systems: ['visual', 'nervous'],
    topics: ['ophthalmology', 'diagnosis', 'physical examination', 'visual testing'],
    keywords: ['eye exam', 'slit lamp', 'visual acuity', 'fundoscopy', 'tonometry', 'OCT'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology', 'family medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default eyeExamination;
