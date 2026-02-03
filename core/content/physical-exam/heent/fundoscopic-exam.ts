/**
 * Fundoscopic Examination - Physical Examination
 */

import { EducationalContent } from '../../types';

export const fundoscopicExam: EducationalContent = {
  id: 'heent-fundoscopic-exam',
  type: 'process',
  name: 'Fundoscopic Examination',
  alternateNames: ['Ophthalmoscopy', 'Retinal Examination', 'Eye Fundus Exam'],

  levels: {
    1: {
      level: 1,
      summary: 'A fundoscopic exam lets doctors look at the back of your eye to check the retina, blood vessels, and optic nerve for signs of disease.',
      explanation: `## Looking at the Back of the Eye

A fundoscopic exam (also called ophthalmoscopy) is when a doctor looks at the back of your eye using a special light and magnifying device.

### What Doctors Can See

**The Retina:**
- The light-sensitive layer at the back of your eye
- Works like film in a camera
- Converts light into signals for your brain

**The Optic Nerve:**
- Carries visual information to your brain
- Looks like a yellowish-pink circle
- Should have clear edges

**Blood Vessels:**
- Arteries and veins in the retina
- Should have normal color and size

**The Macula:**
- Center of the retina
- Provides sharp, detailed vision
- Important for reading and seeing faces

### Why This Exam Is Done

Doctors check the back of the eye to find:
- **Diabetes damage** - Diabetes can harm retinal blood vessels
- **High blood pressure effects** - Hypertension affects eye vessels
- **Glaucoma** - Damage to the optic nerve
- **Retinal detachment** - When the retina pulls away
- **Brain problems** - Swelling from increased brain pressure

### How the Exam Is Done

1. **Darken the room** - Makes pupil larger
2. **Dilating drops** - May be used to open pupil wider
3. **Look through device** - Doctor shines light into your eye
4. **Different views** - Doctor looks from various angles
5. **Both eyes checked** - Compare left and right

### Is It Uncomfortable?

The exam is usually painless:
- The light is bright but not harmful
- Drops may sting briefly
- Vision may be blurry for a few hours if dilated
- You may be sensitive to light afterward`,

      keyTerms: [
        { term: 'retina', definition: 'Light-sensitive layer at the back of the eye' },
        { term: 'optic disc', definition: 'Where the optic nerve enters the eye; also called optic nerve head' },
        { term: 'macula', definition: 'Central part of retina responsible for detailed vision' },
        { term: 'pupil', definition: 'The black opening in the center of the eye' },
        { term: 'ophthalmoscope', definition: 'Medical instrument used to examine the back of the eye' },
      ],

      analogies: [
        'The retina is like the film in a camera - it captures the images we see.',
        'Looking at the optic nerve is like looking at the cable that connects a camera to a TV.',
        'The eye exam is like looking through a window to see what is happening inside the body.',
      ],

      examples: [
        'Seeing bleeding in the retina might mean diabetes is affecting the eyes.',
        'Swollen optic nerve might mean high pressure in the brain.',
        'Pale optic disc might indicate glaucoma damage.',
      ],

      patientCounselingPoints: [
        'Bring sunglasses if your eyes will be dilated - you will be sensitive to light.',
        'Do not drive right after dilation - your vision will be blurry.',
        'This exam helps detect problems before they affect your vision.',
        'People with diabetes should have this exam yearly.',
      ],
    },

    2: {
      level: 2,
      summary: 'Fundoscopic examination systematically visualizes the retina, optic disc, macula, and vasculature using direct or indirect ophthalmoscopy to detect ocular and systemic pathology.',
      explanation: `## Ophthalmoscope Types

**Direct Ophthalmoscope:**
- Handheld device
- 15x magnification
- Upright image
- Limited field of view
- Most common in primary care

**Indirect Ophthalmoscope:**
- Head-mounted with condensing lens
- 2-5x magnification
- Inverted image
- Wider field of view
- Used by ophthalmologists

## Technique

### Patient Preparation
- Darken room for 5-10 minutes
- Consider dilating drops (tropicamide)
- Patient looks at distant object
- Examine right eye first

### Approach
1. Set ophthalmoscope to 0 diopters
2. Hold 15 degrees temporal to patient
3. Look for red reflex from 1 foot away
4. Move closer while adjusting focus
5. Follow vessels to optic disc

### Systematic Examination

**Optic Disc Assessment:**
| Feature | Normal | Abnormal |
|---------|--------|----------|
| Color | Orange-pink | Pale, swollen, cupped |
| Margins | Sharp | Blurred (papilledema) |
| Cup-to-disc ratio | <0.5 | >0.5 (glaucoma) |
| Vessels | Clear crossing | Nicking, hemorrhages |

**Retinal Vasculature:**
- Arteries: brighter, narrower
- Veins: darker, wider
- A:V ratio normally 2:3

**Macula:**
- Temporal to disc (2 disc diameters)
- No large vessels
- Foveal reflex in center

**Peripheral Retina:**
- Ask patient to look in different directions
- Check for tears, detachments, hemorrhages

### Common Findings

| Finding | Description | Significance |
|---------|-------------|--------------|
| AV nicking | Vein compression at crossings | Hypertension |
| Cotton wool spots | White fluffy lesions | Ischemia, diabetes |
| Hemorrhages | Dot-blot or flame-shaped | Various causes |
| Exudates | Hard yellow deposits | Lipid leakage |
| Papilledema | Swollen disc | Increased ICP |
| Glaucomatous cupping | Enlarged cup | Glaucoma |
| Diabetic changes | Microaneurysms, neovascularization | Diabetic retinopathy |`,

      keyTerms: [
        { term: 'red reflex', definition: 'Orange glow from retina when light shines through pupil' },
        { term: 'cup-to-disc ratio', definition: 'Ratio of optic cup diameter to disc diameter' },
        { term: 'papilledema', definition: 'Swelling of optic disc from increased intracranial pressure' },
        { term: 'microaneurysm', definition: 'Small outpouching of retinal capillary' },
        { term: 'neovascularization', definition: 'Abnormal new blood vessel growth' },
      ],

      analogies: [
        'The red reflex is like the red eye in photos - the flash reflects off the back of the eye.',
        'Following vessels to the disc is like following roads to a city center.',
      ],

      examples: [
        'Silver wiring of arterioles indicates chronic hypertension.',
        'Microaneurysms are the first sign of diabetic retinopathy.',
        'Blurred disc margins with hemorrhages suggest papilledema.',
      ],

      clinicalNotes: 'Always examine both eyes. Asymmetry between eyes is often significant. Document cup-to-disc ratio in all patients.',
    },

    3: {
      level: 3,
      summary: 'Advanced fundoscopic examination identifies diabetic retinopathy, hypertensive retinopathy, and optic nerve pathology with detailed classification systems.',
      explanation: `## Diabetic Retinopathy

**Non-Proliferative (NPDR):**
- Microaneurysms (earliest sign)
- Dot-blot hemorrhages
- Hard exudates
- Cotton wool spots (ischemia)
- Intraretinal microvascular abnormalities (IRMA)
- Venous beading

**Proliferative (PDR):**
- Neovascularization (NV)
- NV of disc (NVD)
- NV elsewhere (NVE)
- Preretinal hemorrhage
- Vitreous hemorrhage
- Tractional retinal detachment

**Diabetic Macular Edema:**
- Hard exudates in macula
- Macular thickening
- Vision-threatening

**Classification:**
| Severity | Findings |
|----------|----------|
| Mild NPDR | Microaneurysms only |
| Moderate NPDR | More than mild, less than severe |
| Severe NPDR | Any of: >20 intraretinal hemorrhages, venous beading, IRMA |
| PDR | Neovascularization or vitreous hemorrhage |

## Hypertensive Retinopathy

**Grade 1:** Arteriolar narrowing, tortuosity
**Grade 2:** AV nicking, arteriolar sclerosis
**Grade 3:** Hemorrhages, exudates, cotton wool spots
**Grade 4:** Plus papilledema (malignant hypertension)

## Optic Disc Abnormalities

**Glaucoma:**
- Increased cup-to-disc ratio (>0.5)
- Vertical elongation of cup
- Notching of rim
- Asymmetry between eyes (>0.2)
- Nerve fiber layer defects

**Optic Neuritis:**
- Swollen disc (if retrobulbar, may look normal)
- Pain with eye movement
- Afferent pupillary defect
- Color vision loss

**Papilledema:**
- Bilateral disc swelling
- Preserved central vision initially
- Enlarged blind spot
- Transient visual obscurations
- Signs of increased ICP (headache, nausea)

**Optic Atrophy:**
- Pale disc
- Reduced vision
- Causes: glaucoma, optic neuritis, ischemia, compression, toxicity

## Other Important Findings

**Retinal Artery Occlusion:**
- Cherry-red spot at macula
- White cloudy retina
- Boxcarring of blood column
- Emergency

**Retinal Vein Occlusion:**
- Tortuous veins
- Diffuse hemorrhages
- Cotton wool spots
- "Blood and thunder" appearance (CRVO)

**Age-Related Macular Degeneration:**
- Drusen
- RPE changes
- Neovascularization (wet AMD)
- Geographic atrophy (dry AMD)`,

      keyTerms: [
        { term: 'IRMA', definition: 'Intraretinal microvascular abnormalities' },
        { term: 'NVD', definition: 'Neovascularization of the disc' },
        { term: 'afferent pupillary defect', definition: 'Marcus Gunn pupil - impaired light response' },
        { term: 'cherry-red spot', definition: 'Red macula against white retina in artery occlusion' },
        { term: 'drusen', definition: 'Yellow deposits under retina in AMD' },
      ],

      analogies: [
        'Diabetic microaneurysms are like tiny balloons forming on weak vessel walls.',
        'Cotton wool spots are like little strokes in the retina - areas of ischemia.',
      ],

      examples: [
        'Severe NPDR has 50% risk of progression to PDR within 1 year without treatment.',
        'Papilledema requires urgent neuroimaging to find cause of increased ICP.',
        'CRVO is associated with hypertension, diabetes, and hyperlipidemia.',
      ],

      clinicalNotes: 'All diabetic patients need annual dilated eye exams. PDR and severe NPDR require urgent ophthalmology referral.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of fundoscopic findings with systemic disease diagnosis and management decisions.',
      explanation: `## Systemic Disease Manifestations

**Infectious:**
- CMV retinitis (AIDS): hemorrhagic necrosis
- Toxoplasmosis: focal necrotizing retinochoroiditis
- Tuberculosis: choroidal granulomas
- Syphilis: chorioretinitis, optic neuritis

**Autoimmune:**
- Lupus: vasculitis, retinal vasculopathy
- Behcet disease: occlusive vasculitis
- Sarcoidosis: periphlebitis, candle-wax drippings

**Hematologic:**
- Leukemia: Roth spots, hemorrhages
- Anemia: pale fundus
- Hyperviscosity: dilated, tortuous veins
- Thrombocytopenia: hemorrhages

**Vascular:**
- Hypertension: AV changes, hemorrhages
- Atherosclerosis: Hollenhorst plaques (emboli)
- Temporal arteritis: AION, cotton wool spots

**Neurologic:**
- Multiple sclerosis: optic neuritis
- Brain tumors: papilledema
- Pseudotumor cerebri: papilledema

### Emergency Findings

**Require Urgent Referral:**
- Acute angle-closure glaucoma
- Retinal detachment
- Central retinal artery occlusion
- Endophthalmitis
- Giant cell arteritis with vision loss
- Severe papilledema

### Documentation

**Essential Elements:**
- Cup-to-disc ratio
- Disc margins
- Vessel appearance
- Presence of hemorrhages, exudates
- Macula appearance
- Red reflex

**Standardized Terminology:**
- Use consistent descriptors
- Draw findings when needed
- Compare to previous exams
- Include quality of view`,

      keyTerms: [
        { term: 'Roth spot', definition: 'Retinal hemorrhage with white center' },
        { term: 'Hollenhorst plaque', definition: 'Cholesterol embolus in retinal artery' },
        { term: 'AION', definition: 'Anterior ischemic optic neuropathy' },
        { term: 'periphlebitis', definition: 'Inflammation of retinal veins' },
      ],

      clinicalNotes: 'Sudden painless vision loss is an emergency. CRAO must be treated within hours for any chance of vision recovery.',
    },

    5: {
      level: 5,
      summary: 'Expert fundoscopic examination techniques and interpretation for complex ophthalmic and neuro-ophthalmic conditions.',
      explanation: `## Advanced Techniques

**Scleral Depression:**
- Indirect ophthalmoscopy
- Indent sclera externally
- Visualize peripheral retina
- Detect tears and detachments

**Slit Lamp Biomicroscopy:**
- High magnification
- Stereoscopic view
- Contact lens examination
- Detailed macula and optic nerve assessment

**Fundus Photography:**
- Document findings
- Serial comparison
- Telemedicine screening
- Research applications

**Fluorescein Angiography:**
- IV fluorescein injection
- Sequential photography
- Evaluate vascular integrity
- Guide laser treatment

**Optical Coherence Tomography (OCT):**
- Cross-sectional imaging
- Macular thickness measurement
- Nerve fiber layer analysis
- Early glaucoma detection

## Specialized Findings

**Hereditary Retinal Dystrophies:**
- Retinitis pigmentosa: bone spicule pigmentation
- Stargardt disease: macular flecks
- Choroideremia: choroidal atrophy

**Ocular Tumors:**
- Choroidal melanoma: elevated pigmented lesion
- Retinoblastoma: white mass in children
- Metastatic lesions: creamy yellow, bilateral

**Trauma:**
- Commotio retinae: retinal whitening
- Purtscher retinopathy: cotton wool spots
- Terson syndrome: vitreous hemorrhage with SAH

## Telemedicine and AI

**Remote Screening:**
- Non-mydriatic cameras
- Store-and-forward systems
- AI algorithms for DR detection
- Expanding access to care

**AI Applications:**
- Automated DR grading
- Glaucoma screening
- AMD monitoring
- Cardiovascular risk prediction from retinal images`,

      keyTerms: [
        { term: 'mydriatic', definition: 'Dilating the pupil' },
        { term: 'commotio retinae', definition: 'Retinal whitening from blunt trauma' },
        { term: 'Terson syndrome', definition: 'Vitreous hemorrhage with subarachnoid hemorrhage' },
        { term: 'bone spicule', definition: 'Bone-shaped pigment pattern in RP' },
      ],

      clinicalNotes: 'Non-mydriatic fundus photography with AI interpretation is transforming diabetic retinopathy screening in primary care settings.',
    },
  },

  media: [],

  citations: [
    {
      id: 'kanski-ophthalmology',
      type: 'textbook',
      title: 'Clinical Ophthalmology',
      authors: ['Kanski'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'heent-ear-exam', targetType: 'process', relationship: 'sibling', label: 'Ear Examination' },
    { targetId: 'ophthalmology-retina', targetType: 'topic', relationship: 'related', label: 'Retinal Disease' },
  ],

  tags: {
    systems: ['ophthalmologic', 'nervous'],
    topics: ['physical-examination', 'ophthalmology'],
    keywords: ['fundoscopy', 'retina', 'optic nerve', 'ophthalmoscopy'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fundoscopicExam;
