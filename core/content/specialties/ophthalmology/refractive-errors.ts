/**
 * Refractive Errors - Comprehensive Educational Content
 *
 * Covers myopia, hyperopia, astigmatism, and presbyopia with
 * pathophysiology, diagnosis, and treatment options.
 */

import { EducationalContent } from '../../types';

export const refractiveErrors: EducationalContent = {
  id: 'condition-refractive-errors',
  type: 'condition',
  name: 'Refractive Errors',
  alternateNames: ['Ametropia', 'Vision Problems', 'Focus Disorders'],
  hpoId: 'HP:0000539',

  levels: {
    1: {
      level: 1,
      summary: 'Refractive errors happen when your eye cannot focus light correctly, making things look blurry unless you wear glasses or contacts.',
      explanation: `Your eye works like a camera - it needs to focus light perfectly on the back of your eye (the retina) to see clearly. When this doesn't happen, you have a refractive error.

**Types of Refractive Errors:**

**1. Nearsightedness (Myopia)**
- You can see things up close clearly
- Far away things look blurry
- Very common - about 1 in 3 people have it
- Usually starts in childhood

**2. Farsightedness (Hyperopia)**
- Far away things may be clearer
- Close-up things can be blurry
- Your eyes have to work harder to see up close
- Can cause eye strain and headaches

**3. Astigmatism**
- Everything looks a bit blurry or distorted
- Your eye is shaped more like a football than a round ball
- Often occurs with nearsightedness or farsightedness
- Very common - most people have at least a little

**4. Presbyopia (Age-Related Reading Problems)**
- Starts around age 40-45
- Hard to see things up close, like reading
- Happens to almost everyone as they get older
- That's why older adults need reading glasses!

**Fixing Refractive Errors:**
- Glasses - the most common solution
- Contact lenses - sit right on your eye
- Laser surgery (LASIK) - permanently changes eye shape`,
      keyTerms: [
        { term: 'nearsighted', definition: 'When you can see close things clearly but far things are blurry' },
        { term: 'farsighted', definition: 'When far things may be clearer but close things are blurry' },
        { term: 'astigmatism', definition: 'When your eye is shaped unevenly, making things look distorted' },
        { term: 'presbyopia', definition: 'Age-related difficulty seeing things up close' },
      ],
      analogies: [
        'Your eye is like a camera. If the camera lens doesn\'t focus properly, the picture comes out blurry.',
        'Nearsighted eyes are like cameras that zoom in too much - close things are clear but far things are fuzzy.',
        'An eye with astigmatism is shaped like a football instead of a basketball, so light doesn\'t focus evenly.',
      ],
      examples: [
        'A child who squints to see the whiteboard at school probably needs glasses for nearsightedness.',
        'Your grandparent holding a menu far away to read it is a sign of presbyopia.',
        'Seeing streetlights with a starburst pattern at night can be a sign of astigmatism.',
      ],
    },
    2: {
      level: 2,
      summary: 'Refractive errors occur when the eye\'s optical system fails to focus light precisely on the retina, resulting in myopia, hyperopia, astigmatism, or presbyopia, all correctable with lenses or refractive surgery.',
      explanation: `Refractive errors are the most common eye disorders worldwide, affecting approximately 2.5 billion people globally.

**Understanding Refraction:**
- Light bends (refracts) when passing through the cornea and lens
- The goal is to focus light exactly on the retina
- Total eye power is approximately 60 diopters (D)
- Cornea provides ~43D, lens provides ~17-20D

**Types of Refractive Errors:**

**1. Myopia (Nearsightedness)**
- Eye is too long or cornea too curved
- Light focuses in front of the retina
- Distant objects are blurry, near objects are clear
- Measured in negative diopters (e.g., -3.00 D)
- Mild: -0.50 to -3.00 D
- Moderate: -3.00 to -6.00 D
- High: greater than -6.00 D

**2. Hyperopia (Farsightedness)**
- Eye is too short or cornea too flat
- Light would focus behind the retina
- Young people can compensate by accommodating
- Measured in positive diopters (e.g., +2.50 D)
- May cause eye strain, headaches, difficulty reading

**3. Astigmatism**
- Cornea (or lens) has uneven curvature
- Light focuses at multiple points
- Both near and far vision affected
- Measured in cylinder and axis (e.g., -1.50 x 180)
- Regular vs. irregular astigmatism

**4. Presbyopia**
- Age-related loss of accommodation
- Lens becomes less flexible with age
- Cannot focus on near objects
- Begins around age 40-45
- Progressive - gets worse until ~65

**Correction Methods:**
- **Glasses**: Most common, safest option
- **Contact lenses**: Soft, rigid gas permeable (RGP), specialty
- **Refractive surgery**: LASIK, PRK, SMILE, lens implants

**Eye Examination Components:**
- Visual acuity testing (Snellen chart)
- Refraction (determining prescription)
- Autorefraction (automated measurement)
- Keratometry (corneal curvature)`,
      keyTerms: [
        { term: 'diopter', definition: 'Unit measuring lens power; equals 1/focal length in meters', pronunciation: 'dy-OP-ter' },
        { term: 'accommodation', definition: 'The eye\'s ability to change focus from far to near by changing lens shape' },
        { term: 'refraction', definition: 'The bending of light as it passes through the eye\'s optical system' },
        { term: 'emmetropia', definition: 'Normal vision where light focuses precisely on the retina', pronunciation: 'em-eh-TROH-pee-ah' },
        { term: 'visual acuity', definition: 'Sharpness of vision, typically measured as 20/20' },
      ],
      analogies: [
        'Myopia is like a camera focused too close - you can\'t capture distant scenes clearly.',
        'The lens losing flexibility in presbyopia is like a rubber band that becomes stiff with age.',
        'Astigmatism is like looking through a warped window pane - images are distorted in one direction.',
      ],
    },
    3: {
      level: 3,
      summary: 'Refractive errors result from a mismatch between the eye\'s axial length and optical power, with myopia being the most prevalent and increasing globally, while presbyopia represents inevitable age-related ciliary muscle and lens changes affecting accommodation.',
      explanation: `## Optical Principles

**Refractive State:**
- Emmetropia: Parallel light rays focus on retina without accommodation
- Ametropia: Refractive error present (myopia, hyperopia, astigmatism)

**Optical Components:**
- Cornea: ~43 D (anterior surface +48.8 D, posterior -5.8 D)
- Lens: ~17-20 D (variable with accommodation)
- Axial length: ~24 mm in emmetropia
- Each 1 mm change in axial length = ~3 D change in refraction

## Myopia

**Epidemiology:**
- Prevalence increasing dramatically (myopia epidemic)
- East Asia: up to 90% in young adults
- Western countries: 30-50%
- Predicted 50% global prevalence by 2050

**Types:**
1. **Axial myopia**: Eye too long (most common)
2. **Refractive myopia**: Excessive corneal/lenticular power
3. **Index myopia**: Nuclear sclerosis (cataract-related)

**Risk Factors:**
- Genetics (parental myopia)
- Near work / limited outdoor time
- Higher education
- Urban environment

**Pathological Myopia (>-6D):**
- Posterior staphyloma
- Lacquer cracks (Bruch membrane breaks)
- Myopic CNV
- Peripheral retinal degeneration (lattice)
- Increased risk of retinal detachment

## Hyperopia

**Classification:**
- Simple: Shortened axial length
- Pathological: Microphthalmos, nanophthalmos
- Functional: Accommodative spasm

**Latent vs Manifest:**
- Young hyperopes can mask hyperopia through accommodation
- Total hyperopia = manifest + latent
- Cycloplegic refraction reveals true hyperopia

**Clinical Implications:**
- Accommodative esotropia in children
- Angle-closure glaucoma risk (short eyes)
- Asthenopia (eye strain)

## Astigmatism

**Types by Orientation:**
- With-the-rule (WTR): Steeper vertically (axis ~90)
- Against-the-rule (ATR): Steeper horizontally (axis ~180)
- Oblique: Axis between 30-60 or 120-150

**Types by Regularity:**
- Regular: Principal meridians perpendicular
- Irregular: Non-perpendicular meridians (keratoconus, scarring)

**Lenticular vs Corneal:**
- Corneal: Most common, measured by keratometry
- Lenticular: Due to lens tilt or irregularity

## Presbyopia

**Mechanism:**
- Loss of lens elasticity (lens hardening)
- Ciliary muscle changes (disputed)
- Decreased accommodative amplitude

**Accommodative Amplitude by Age:**
- Age 10: ~14 D
- Age 25: ~10 D
- Age 40: ~6 D
- Age 50: ~2 D
- Age 60: ~1 D

**Hofstetter's Formula:**
- Minimum amplitude = 15 - (0.25 x age)
- Average amplitude = 18.5 - (0.30 x age)

## Correction Methods

**Spectacle Lenses:**
- Single vision: One focal point
- Bifocal: Distance and near
- Progressive: Gradual power change (no line)
- High-index materials for strong prescriptions

**Contact Lenses:**
- Soft: Daily, extended wear, toric, multifocal
- RGP: Better optics, astigmatism correction
- Specialty: Scleral, orthokeratology

**Refractive Surgery:**
- LASIK: Flap creation, excimer laser ablation
- PRK: Surface ablation, no flap
- SMILE: Small incision lenticule extraction
- ICL: Implantable collamer lens (phakic IOL)`,
      keyTerms: [
        { term: 'axial length', definition: 'Distance from cornea to retina; primary determinant of refractive state' },
        { term: 'pathological myopia', definition: 'High myopia (>-6D) with degenerative changes in posterior segment' },
        { term: 'cycloplegic refraction', definition: 'Measurement of refractive error after paralyzing accommodation with drops' },
        { term: 'accommodative amplitude', definition: 'Maximum focusing power available; decreases with age' },
        { term: 'keratoconus', definition: 'Progressive corneal thinning and steepening causing irregular astigmatism', pronunciation: 'kair-at-oh-KOH-nus' },
      ],
      clinicalNotes: 'High myopia patients require dilated fundus exams for retinal pathology. Children with hyperopia may present with accommodative esotropia. Presbyopia onset around 40 is nearly universal. Irregular astigmatism may indicate keratoconus - refer for topography.',
    },
    4: {
      level: 4,
      summary: 'Refractive errors involve complex interactions between genetics, environment, and ocular growth regulation, with emerging understanding of myopia progression mechanisms informing prevention strategies, while surgical correction modalities continue advancing with wavefront-guided and topography-linked approaches.',
      explanation: `## Myopia Pathophysiology and Control

**Ocular Growth Regulation:**
- Emmetropization: Active process matching axial length to optical power
- Feedback mechanisms: Retinal defocus signals guide growth
- Hyperopic defocus (blur) stimulates axial elongation
- Myopic defocus may be protective

**Myopia Gene-Environment Interaction:**
- >200 genetic loci identified (GWAS)
- Key genes: GJD2, RASGRF1, PRSS56
- Heritability: 60-80%
- Near work + genetics synergistically increase risk
- Outdoor time protective (light intensity, dopamine)

**Myopia Progression Control:**
1. **Optical Treatments:**
   - Orthokeratology: Overnight corneal molding
   - Multifocal soft contact lenses
   - Peripheral defocus spectacles
   - Mechanism: Peripheral myopic defocus

2. **Pharmacological:**
   - Atropine (0.01-0.05% most common)
   - Mechanism: Muscarinic receptor blockade, scleral effects
   - 30-60% reduction in progression
   - Rebound effect with high concentrations

3. **Environmental:**
   - Increase outdoor time (>2 hours/day)
   - Reduce intensive near work
   - Take breaks (20-20-20 rule)

**Pathological Myopia Complications:**
- Posterior staphyloma (focal scleral ectasia)
- Lacquer cracks (Bruch membrane rupture)
- Myopic CNV (mCNV) - treatable with anti-VEGF
- Myopic foveoschisis
- Dome-shaped macula
- Peripapillary atrophy
- Tilted disc

## Advanced Astigmatism Concepts

**Corneal Topography:**
- Placido disc systems: Measure anterior curvature
- Scheimpflug imaging: Anterior and posterior surfaces
- OCT-based: Full corneal thickness mapping

**Indices:**
- Sim-K: Simulated keratometry from topography
- I-S value: Inferior-superior asymmetry
- SAI: Surface asymmetry index
- SRI: Surface regularity index

**Keratoconus Screening:**
- Inferior steepening (>47.2 D)
- I-S value >1.4 D
- Thinnest point displacement
- Belin-Ambrosio enhanced ectasia display

**Vector Analysis (Alpins Method):**
- Target induced astigmatism (TIA)
- Surgically induced astigmatism (SIA)
- Difference vector (DV)
- Correction index = SIA/TIA

## Refractive Surgery in Detail

**LASIK:**
- Flap creation: Femtosecond laser or microkeratome
- Ablation: Excimer laser (193 nm)
- Ablation zone: 6-7 mm
- Optical zone affects night vision
- Residual stromal bed: >250-300 microns

**Wavefront-Guided vs Wavefront-Optimized:**
- Wavefront-guided: Treats HOAs
- Wavefront-optimized: Maintains prolate shape
- Topography-guided: Addresses corneal irregularities

**PRK Advantages:**
- No flap complications
- Better for thin corneas
- Contact sports safe
- Military/pilots may prefer

**SMILE (Small Incision Lenticule Extraction):**
- Femtosecond laser creates lenticule
- Removed through small incision (2-4 mm)
- No flap, minimal dry eye
- Currently myopia/astigmatism only

**Phakic IOLs:**
- Preserve accommodation (unlike lens exchange)
- Higher myopia correction possible
- Visian ICL: Posterior chamber
- Risks: Cataract, glaucoma, endothelial cell loss

## Presbyopia Correction Advanced

**Surgical Options:**
- Monovision LASIK: One eye for distance, one for near
- Multifocal IOLs: Diffractive, refractive designs
- Extended depth of focus (EDOF) IOLs
- Corneal inlays (Kamra, Raindrop - some discontinued)

**Accommodating IOLs:**
- Crystalens: Hinged haptic design
- Limited true accommodation achieved
- Research ongoing: Fluid-filled, electro-active

**Emerging Technologies:**
- Femtosecond laser lens softening
- Scleral expansion procedures (limited success)
- Pharmacologic presbyopia drops (pilocarpine)`,
      keyTerms: [
        { term: 'emmetropization', definition: 'Active developmental process that matches eye growth to achieve focused vision' },
        { term: 'peripheral defocus', definition: 'Optical signals at retinal periphery that may influence eye growth and myopia progression' },
        { term: 'wavefront aberrometry', definition: 'Measurement of all optical imperfections in the eye including higher-order aberrations' },
        { term: 'Zernike polynomials', definition: 'Mathematical functions describing optical aberrations of the eye' },
        { term: 'femtosecond laser', definition: 'Ultra-fast laser (10^-15 seconds) used for precise corneal cutting without heat' },
      ],
      clinicalNotes: 'Low-dose atropine (0.01-0.05%) is becoming standard of care for myopia control in children. Screen keratoconus suspects before any refractive surgery. LASIK contraindicated in keratoconus, thin corneas, and dry eye. Phakic IOLs require adequate anterior chamber depth.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of refractive errors integrates genetic susceptibility, environmental signaling pathways affecting scleral remodeling, and sophisticated surgical planning using wavefront and topographic data, while emerging treatments target molecular mechanisms of myopia progression and restoration of accommodation.',
      explanation: `## Molecular Mechanisms of Myopia

**Retinal Signaling:**
- Form deprivation and defocus trigger retinal signaling
- Amacrine cells detect blur; release dopamine
- Dopamine D2 receptors in sclera inhibit growth
- Glucagon (hyperopia signal) vs ZENK (myopia signal)
- Retina-to-sclera signaling cascade

**Scleral Remodeling:**
- Decreased collagen synthesis
- Increased MMP activity (collagen degradation)
- Reduced proteoglycan content
- Scleral fibroblast to myofibroblast transition
- Biomechanical weakening allows elongation

**Choroidal Involvement:**
- Choroidal thickness changes with defocus
- Thickening with myopic defocus (protective)
- Thinning with hyperopic defocus (permissive for elongation)
- May modulate scleral hypoxia/growth factors

**Genetic Variants:**
- MYOC: Also associated with glaucoma
- PAX6: Developmental transcription factor
- ZNF644: Zinc finger protein, nuclear function
- GWAS meta-analyses identify >400 loci
- Polygenic risk scores emerging

## Advanced Optical Concepts

**Higher-Order Aberrations (HOAs):**
- Spherical aberration (Z40): Peripheral rays focus differently
- Coma (Z31, Z3-1): Asymmetric blur
- Trefoil (Z33, Z3-3): Three-lobed distortion
- Total HOAs typically <0.3 microns RMS

**Wavefront Analysis:**
- Hartmann-Shack aberrometer: Clinical standard
- Ray tracing: Point-by-point measurement
- Zernike decomposition: Mathematical description

**Pupil Size Effects:**
- Larger pupils increase HOA impact
- Night vision complaints correlate with aberrations
- Ablation zone must exceed scotopic pupil

**Corneal Asphericity:**
- Q-value describes prolate/oblate shape
- Normal cornea: Q = -0.2 to -0.3 (prolate)
- Standard LASIK increases Q (more oblate)
- Asphericity-preserving profiles maintain prolateness

## Refractive Surgery: Advanced Planning

**LASIK Candidacy Assessment:**
1. Corneal thickness (>500 microns)
2. Residual stromal bed (>250-300 microns)
3. Stable refraction (no progression x1 year)
4. No ectasia risk factors (topography normal)
5. Adequate tear film
6. Reasonable expectations

**Ectasia Risk Factors:**
- Percent tissue altered (PTA) >40%
- Abnormal topography indices
- Thin corneas
- High myopia
- Young age
- Family history

**Tomographic Analysis:**
- Belin-Ambrosio Display: Elevation-based ectasia detection
- Relative pachymetric progression
- Posterior elevation abnormalities
- Combines multiple indices

**Customized Ablation Profiles:**
- Wavefront-guided: For HOA reduction
- Topography-guided: For irregular astigmatism
- Combined or blended approaches
- Aim for optimal visual quality metrics (OSI, MTF)

## Phakic IOL Considerations

**ICL (Implantable Collamer Lens):**
- Posterior chamber placement
- Central port (EVO) eliminates iridotomy need
- Vault: Ideal 250-750 microns
- Sizing: White-to-white, sulcus-to-sulcus (UBM/OCT)
- Endothelial cell monitoring required

**Complications:**
- Cataract (vault too low)
- Glaucoma/pupillary block (vault too high, older designs)
- Pigment dispersion
- Endothelial cell loss

## Presbyopia: Current Frontiers

**Pharmacologic Approaches:**
- Pilocarpine 1.25% (Vuity): FDA approved
- Mechanism: Miosis (pinhole effect) + accommodation
- Duration: 4-6 hours
- Side effects: Headache, dim vision

**Emerging Technologies:**
- Laser lens softening (LFAR)
- Scleral implants (Visiolens, discontinued)
- Electrically tunable lenses (research)
- Corneal high-order aberration induction

**IOL Designs:**
- Trifocal: Near, intermediate, distance
- EDOF: Extended range without distinct focal points
- Light-adjustable lens (LAL): Post-op customization
- Accommodating: True accommodation remains elusive

**Patient Selection for Multifocal IOLs:**
- Low HOAs and regular astigmatism
- No macular pathology
- Realistic expectations (neuroadaptation required)
- Consider occupation (pilots, night drivers may prefer monofocal)

## Quality of Vision Metrics

**Objective:**
- MTF (Modulation Transfer Function)
- Strehl ratio: Actual/ideal PSF
- OSI (Objective Scatter Index)

**Subjective:**
- Quality of Vision questionnaire
- Dysphotopsia assessment (halos, glare)
- Patient satisfaction surveys

## Special Populations

**Pediatric Considerations:**
- Cycloplegic refraction essential
- Hyperopia: May cause amblyopia, strabismus
- Anisometropia: Different prescriptions between eyes
- Myopia control strategies critical

**Post-Refractive Surgery Cataract:**
- Prior ablation complicates IOL calculations
- History of surgery may be unknown
- Methods: Double-K, Haigis-L, Barrett True-K
- Intraoperative aberrometry helpful`,
      keyTerms: [
        { term: 'percent tissue altered', definition: 'Proportion of cornea affected by flap and ablation; predictor of ectasia risk' },
        { term: 'Belin-Ambrosio display', definition: 'Tomographic analysis combining elevation and pachymetry data to detect ectasia' },
        { term: 'strehl ratio', definition: 'Ratio of actual to ideal point spread function; measure of optical quality' },
        { term: 'vault', definition: 'Distance between phakic IOL and crystalline lens; critical for safety' },
        { term: 'neuroadaptation', definition: 'Brain\'s ability to adjust to new optical input over time' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Myopia control in children: Start early, combine interventions (atropine + ortho-K)
2. LASIK screening: Use multiple topographers; never operate on ectasia suspects
3. Phakic IOL vault monitoring: Annual exams mandatory
4. Post-refractive IOL calculations: Use multiple formulas, err toward myopia
5. Multifocal IOLs: Patient selection is critical; avoid in macular disease
6. Pharmacologic presbyopia: Explain temporary effect, potential for dim vision
7. Quality metrics should guide surgical planning beyond just refraction`,
    },
  },

  media: [
    {
      id: 'refractive-errors-diagram',
      type: 'diagram',
      filename: 'refractive-errors-comparison.svg',
      title: 'Refractive Errors Comparison',
      description: 'Diagram showing light focus in emmetropia, myopia, hyperopia, and astigmatism',
    },
    {
      id: 'myopia-progression-chart',
      type: 'diagram',
      filename: 'myopia-progression.svg',
      title: 'Myopia Progression and Control',
      description: 'Graph showing myopia progression with and without intervention',
    },
  ],

  citations: [
    {
      id: 'holden-2016',
      type: 'article',
      title: 'Global prevalence of myopia and high myopia and temporal trends from 2000 through 2050',
      authors: ['Holden BA', 'Fricke TR', 'Wilson DA', 'et al.'],
      source: 'Ophthalmology',
      url: 'https://doi.org/10.1016/j.ophtha.2016.01.006',
    },
    {
      id: 'bcsc-refractive',
      type: 'textbook',
      title: 'Clinical Optics',
      source: 'AAO Basic and Clinical Science Course',
      chapter: 'Section 3',
    },
    {
      id: 'azar-textbook',
      type: 'textbook',
      title: 'Refractive Surgery',
      authors: ['Azar DT', 'Koch DD'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'structure-eye-anatomy', targetType: 'structure', relationship: 'related', label: 'Eye Anatomy' },
    { targetId: 'condition-cataracts', targetType: 'condition', relationship: 'related', label: 'Cataracts' },
    { targetId: 'process-eye-examination', targetType: 'topic', relationship: 'related', label: 'Eye Examination' },
  ],

  tags: {
    systems: ['visual'],
    topics: ['ophthalmology', 'optics', 'refractive surgery'],
    keywords: ['myopia', 'hyperopia', 'astigmatism', 'presbyopia', 'LASIK', 'glasses', 'contact lenses'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default refractiveErrors;
