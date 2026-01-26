/**
 * Ultrasound (Sonography) - Comprehensive Educational Content
 *
 * Covers the principles, applications, safety, and clinical uses of
 * diagnostic ultrasound imaging.
 */

import { RadiologyModalityContent, ImagingContraindication } from './types';

export const ultrasound: RadiologyModalityContent = {
  id: 'radiology-ultrasound',
  type: 'concept',
  name: 'Ultrasound (Sonography)',
  alternateNames: ['Sonography', 'Ultrasonography', 'US', 'Echo', 'Doppler'],

  imagingMetadata: {
    modality: 'ultrasound',
    alternativeNames: ['Sonogram', 'Echo', 'Doppler ultrasound', 'Duplex scan'],
    yearIntroduced: 1958,
    principleType: 'acoustic',
  },

  levels: {
    1: {
      level: 1,
      summary: 'Ultrasound uses sound waves (like dolphin sonar!) to make pictures of inside your body - it is very safe and does not use any radiation.',
      explanation: `Have you heard of how dolphins and bats use sound to "see" in the dark? Ultrasound works the same way! The machine sends out sound waves that are too high for us to hear, and when they bounce back from inside your body, a computer turns them into pictures.

**How does ultrasound work?**
1. A smooth device called a "transducer" (or probe) is placed on your skin
2. Some clear gel is put on your skin first to help the sound waves travel better
3. The probe sends out sound waves into your body
4. The sound bounces off your organs, bones, and tissues
5. The echoes come back to the probe
6. A computer turns the echoes into pictures on a screen

**What happens during an ultrasound?**
1. You lie down on a bed
2. The technologist puts warm gel on your skin (it might feel a little gooey!)
3. They move the probe around on your belly, neck, or wherever they need to see
4. You can watch the screen and see inside your body in real-time!
5. It doesn't hurt at all
6. The whole thing usually takes 20-30 minutes

**What can ultrasound show?**
- A baby growing inside a pregnant mom (the most famous use!)
- Your heart beating
- Your gallbladder, liver, and kidneys
- Blood flowing through your veins and arteries
- Whether a lump is solid or filled with fluid

**Why is ultrasound special?**
- Completely safe - no radiation at all!
- You can see things moving in real-time
- Doctors can look at a baby without any risk
- Portable - can come to your bedside
- Doesn't hurt!`,
      keyTerms: [
        { term: 'ultrasound', definition: 'Sound waves too high for humans to hear that can be used to see inside your body' },
        { term: 'transducer', definition: 'The handheld device that sends and receives sound waves during an ultrasound', pronunciation: 'trans-DOO-sir' },
        { term: 'gel', definition: 'The clear, slippery substance put on your skin to help sound waves travel better' },
      ],
      analogies: [
        'Ultrasound is like dolphins using sonar - they send out sounds and listen to what bounces back!',
        'The gel is like water in a swimming pool - sound travels through it much better than through air.',
        'The probe is like a flashlight, but instead of light, it uses sound to "see" inside you.',
      ],
      examples: [
        'When a mom is pregnant, ultrasound lets her see her baby moving and even learn if it is a boy or girl!',
        'If your tummy hurts, an ultrasound can check if something is wrong with your gallbladder or appendix.',
        'Ultrasound can watch blood flowing through your heart and blood vessels.',
      ],
    },
    2: {
      level: 2,
      summary: 'Ultrasound uses high-frequency sound waves that reflect off tissues to create real-time images, with no radiation and excellent visualization of soft tissues and blood flow.',
      explanation: `## What is Ultrasound?

Ultrasound (also called sonography) creates images using sound waves with frequencies above human hearing (typically 2-18 MHz). When these waves encounter tissue interfaces, they partially reflect back, and these echoes are processed into images.

## How Ultrasound Works

**The Process:**
1. **Transmission**: Transducer sends pulses of sound waves into body
2. **Reflection**: Waves bounce back from tissue interfaces (echoes)
3. **Reception**: Same transducer detects returning echoes
4. **Processing**: Computer calculates depth and intensity
5. **Display**: Creates real-time grayscale image

**What Creates Echoes?**
- Differences in tissue density and stiffness
- Fluid-solid interfaces (strong echoes)
- Different organs and structures
- The more different two tissues are, the stronger the echo

**Appearance on Ultrasound:**
| Term | Appearance | Examples |
|------|------------|----------|
| Hyperechoic | Bright/white | Fat, gallstones, bone surface |
| Isoechoic | Similar to surrounding tissue | Some tumors |
| Hypoechoic | Dark gray | Many solid organs, some masses |
| Anechoic | Black (no echoes) | Fluid (blood, urine, cysts) |

## Doppler Ultrasound

Doppler uses the principle that sound waves change frequency when bouncing off moving objects (like blood cells):

**Types of Doppler:**
- **Color Doppler**: Shows blood flow direction in color (red = toward probe, blue = away)
- **Spectral Doppler**: Shows velocity of blood flow as a waveform
- **Power Doppler**: More sensitive for detecting slow flow

## Common Clinical Uses

**Abdominal:**
- Gallbladder stones and inflammation
- Liver disease and masses
- Kidney stones and obstruction
- Appendicitis
- Abdominal aortic aneurysm

**Obstetric:**
- Pregnancy dating
- Fetal anatomy and growth
- Placenta location
- Amniotic fluid assessment

**Vascular:**
- Carotid artery disease
- Deep vein thrombosis (DVT)
- Peripheral artery disease
- Dialysis access evaluation

**Cardiac (Echocardiography):**
- Heart valve function
- Heart muscle function
- Heart chamber sizes
- Fluid around the heart

**Musculoskeletal:**
- Tendon and ligament injuries
- Joint fluid
- Soft tissue masses
- Real-time guided injections

## Advantages and Limitations

**Advantages:**
- No ionizing radiation (completely safe)
- Real-time imaging
- Portable (can come to bedside)
- Relatively inexpensive
- No contrast agent needed for most studies
- Can visualize blood flow

**Limitations:**
- Cannot see through bone or air (bowel gas blocks image)
- Operator-dependent (skill matters)
- Obesity limits image quality
- Limited field of view
- Cannot see inside lungs well`,
      keyTerms: [
        { term: 'sonography', definition: 'Another name for ultrasound imaging', pronunciation: 'son-OG-ruh-fee' },
        { term: 'Doppler', definition: 'An ultrasound technique that shows blood flow by detecting moving blood cells', pronunciation: 'DOP-ler' },
        { term: 'hyperechoic', definition: 'Appearing brighter/whiter than surrounding tissue on ultrasound', pronunciation: 'hy-per-eh-KOH-ik' },
        { term: 'anechoic', definition: 'Appearing completely black on ultrasound; indicates fluid', pronunciation: 'an-eh-KOH-ik' },
        { term: 'echocardiography', definition: 'Ultrasound examination of the heart', pronunciation: 'ek-oh-kar-dee-OG-ruh-fee' },
        { term: 'MHz', definition: 'Megahertz - the unit measuring ultrasound frequency (millions of cycles per second)' },
      ],
      analogies: [
        'Doppler ultrasound is like radar for police speed guns - it detects motion and measures how fast things are moving.',
        'Ultrasound gel works like water on a slip-n-slide - it helps the sound waves glide from the probe into your body.',
        'Ultrasound cannot see through bone or air, just like you cannot see through a wall or fog.',
      ],
    },
    3: {
      level: 3,
      summary: 'Ultrasound imaging relies on piezoelectric transducers generating MHz-frequency acoustic pulses, with image formation based on tissue acoustic impedance differences, attenuation characteristics, and Doppler shift principles for flow assessment.',
      explanation: `## Ultrasound Physics

### Sound Wave Fundamentals
- **Frequency**: 2-18 MHz (diagnostic range)
- **Wavelength**: λ = c/f (where c ≈ 1540 m/s in soft tissue)
- **Period**: Time for one cycle (T = 1/f)
- **Higher frequency → Better resolution, less penetration
- **Lower frequency → Greater penetration, lower resolution

### Piezoelectric Effect
- Crystals (PZT - lead zirconate titanate) convert electrical → mechanical (and vice versa)
- Transmit mode: Electrical pulse → mechanical vibration → sound wave
- Receive mode: Returning echo → crystal vibration → electrical signal
- Same transducer element does both (pulsed operation)

### Acoustic Impedance
- Z = ρ × c (density × velocity)
- Reflection occurs at interfaces with different Z values
- Reflection coefficient: R = (Z₂ - Z₁)² / (Z₂ + Z₁)²
- Soft tissue-air interface: ~99% reflection (why bowel gas blocks)
- Soft tissue interfaces: ~1% reflection (allows deep imaging)

### Attenuation
- Signal loss as sound travels through tissue
- Attenuation coefficient: ~0.5 dB/cm/MHz in soft tissue
- Higher frequencies attenuate faster
- Causes: Absorption, scattering, reflection

## Transducer Technology

### Types by Configuration
| Transducer | Footprint | Beam Shape | Applications |
|------------|-----------|------------|--------------|
| Linear | Rectangular | Rectangle | Vascular, superficial, MSK |
| Curvilinear | Curved | Sector | Abdomen, OB |
| Phased array | Small | Sector | Cardiac, intercostal |
| Endocavitary | Small curved | Sector | Transvaginal, transrectal |

### Beam Characteristics
- **Near field (Fresnel zone)**: Converging, best resolution
- **Focal zone**: Narrowest beam, optimal imaging
- **Far field (Fraunhofer zone)**: Diverging, poorer resolution
- Focusing: Electronic (delay) and mechanical (lens)

## Image Formation

### Pulse-Echo Principle
1. Short pulse transmitted (2-3 cycles)
2. Transducer switches to receive mode
3. Echo arrival time → depth calculation (d = ct/2)
4. Echo amplitude → brightness (B-mode)
5. Process repeated along scan lines

### Display Modes
- **A-mode (Amplitude)**: Amplitude vs. depth graph; historical
- **B-mode (Brightness)**: 2D grayscale image; standard
- **M-mode (Motion)**: Single line over time; cardiac
- **3D/4D**: Volume acquisition; OB, cardiac

### Image Quality Parameters
- **Axial resolution**: Along beam direction; = λ/2 ≈ 0.3-0.5 mm
- **Lateral resolution**: Perpendicular to beam; = beam width; worse than axial
- **Temporal resolution**: Frame rate; depends on depth, line density
- **Contrast resolution**: Ability to distinguish similar echogenicities

## Doppler Ultrasound

### Physical Principles
**Doppler Equation:**
Δf = 2f₀v cos θ / c

Where:
- Δf = Doppler frequency shift
- f₀ = Transmitted frequency
- v = Blood velocity
- θ = Angle between beam and flow
- c = Speed of sound

### Doppler Modes
**Spectral (Pulsed Wave):**
- Range-gated sampling at specific depth
- Velocity/time waveform display
- Aliasing occurs above Nyquist limit (PRF/2)

**Continuous Wave:**
- Continuous transmission and reception
- No depth information
- No aliasing; measures high velocities

**Color Flow:**
- Velocity encoded as color overlay on B-mode
- Red toward probe, blue away (by convention)
- Variance displayed as color change/mosaic
- Aliasing appears as color reversal

**Power Doppler:**
- Displays signal amplitude, not velocity/direction
- More sensitive for slow flow
- No aliasing
- Angle-independent

## Artifacts

### Common Artifacts
| Artifact | Cause | Appearance |
|----------|-------|------------|
| Reverberation | Multiple reflections | Equally spaced parallel lines |
| Ring-down | Bubble resonance | Continuous echoes deep to gas |
| Acoustic shadowing | High attenuation | Dark area behind dense structure |
| Acoustic enhancement | Low attenuation | Bright area behind fluid |
| Mirror image | Strong reflector | Duplicated structure |
| Side lobe | Off-axis beams | Artifacts in anechoic structures |
| Aliasing | PRF too low | Color reversal in Doppler |

## Contrast-Enhanced Ultrasound (CEUS)

### Microbubble Agents
- Gas-filled microspheres (2-5 μm diameter)
- Purely intravascular (blood pool agent)
- High echogenicity due to compressibility
- Resonance at diagnostic frequencies

### Clinical Applications
- Liver lesion characterization
- Cardiac perfusion
- Kidney and other organ perfusion
- Tumor vascularity
- Vesicoureteral reflux (pediatric)`,
      keyTerms: [
        { term: 'piezoelectric', definition: 'Property of certain crystals to convert between electrical and mechanical energy; basis of ultrasound transducers' },
        { term: 'acoustic impedance', definition: 'Product of tissue density and sound velocity; determines reflection at interfaces' },
        { term: 'attenuation', definition: 'Loss of sound wave intensity as it travels through tissue; increases with frequency' },
        { term: 'Nyquist limit', definition: 'Maximum detectable Doppler shift equal to half the PRF; exceeding causes aliasing' },
        { term: 'acoustic shadowing', definition: 'Dark area behind highly attenuating structure (bone, stone); indicates high impedance mismatch' },
        { term: 'CEUS', definition: 'Contrast-Enhanced Ultrasound using microbubble agents for perfusion and lesion characterization' },
      ],
      clinicalNotes: 'Ultrasound is operator-dependent - image quality varies significantly with technique. Always document findings in multiple planes and use Doppler when vascular pathology is suspected. CEUS is increasingly valuable for liver lesion characterization in patients who cannot receive CT or MRI contrast.',
    },
    4: {
      level: 4,
      summary: 'Advanced ultrasound encompasses elastography, 3D/4D imaging, specialized Doppler techniques, and emerging applications including point-of-care ultrasound (POCUS), requiring understanding of physics optimization and artifact mitigation.',
      explanation: `## Advanced Ultrasound Technology

### Harmonic Imaging
**Tissue Harmonic:**
- Nonlinear propagation generates harmonics (2f₀)
- Transmit at fundamental, receive at harmonic
- Reduced artifacts (near-field clutter)
- Improved contrast resolution
- Slightly reduced penetration

**Pulse Inversion:**
- Two pulses transmitted 180° out of phase
- Fundamental signals cancel
- Harmonics sum (improve signal)
- Better harmonic detection

### Spatial Compound Imaging
- Multiple viewing angles combined
- Reduced speckle
- Improved margin definition
- Better tissue differentiation
- Trade-off: Reduced frame rate

### Elastography

**Strain Elastography:**
- Manual compression of tissue
- Measures relative displacement
- Qualitative (ratio to reference tissue)
- Applications: Breast, thyroid, liver

**Shear Wave Elastography (SWE):**
- Acoustic radiation force generates shear waves
- Measures shear wave velocity
- Quantitative: kPa or m/s
- Higher velocity = stiffer tissue
- ARFI (Acoustic Radiation Force Impulse): Point measurement
- 2D SWE: Color map of stiffness

**Clinical Applications:**
| Application | Normal Values | Abnormal |
|-------------|---------------|----------|
| Liver (fibrosis) | <7 kPa | F4 cirrhosis >12.5 kPa |
| Breast (lesions) | Strain ratio <3 | Suspicious if >4.5 |
| Thyroid (nodules) | Soft | Stiff nodules concerning |

## Advanced Doppler Applications

### Transcranial Doppler (TCD)
- Access: Temporal, transorbit, suboccipital windows
- Assess: MCA, ACA, PCA, basilar velocities
- Applications:
  - Vasospasm monitoring (SAH)
  - Sickle cell stroke risk
  - Brain death confirmation
  - Microembolic detection
  - Right-to-left shunt detection

### Carotid Intima-Media Thickness (CIMT)
- High-resolution measurement
- Cardiovascular risk assessment
- Normal: <0.9 mm
- Abnormal: >1.0 mm indicates increased risk

### Spectral Waveform Analysis
**Arterial Patterns:**
| Pattern | Characteristics | Location |
|---------|----------------|----------|
| High resistance | Sharp systolic peak, reversed diastole | External carotid, extremity at rest |
| Low resistance | Continuous diastolic flow | Internal carotid, renal, hepatic |

**Venous Patterns:**
- Phasic: Normal respiratory variation
- Continuous: Suggests proximal obstruction
- Pulsatile: Right heart disease/TR

## Point-of-Care Ultrasound (POCUS)

### Core Applications (ACS Guidelines)
1. **Cardiac**: EF, pericardial effusion, RV strain
2. **Lung**: Pneumothorax, pleural effusion, B-lines
3. **Abdominal**: AAA, free fluid (FAST)
4. **DVT**: Lower extremity 2-point compression
5. **Volume status**: IVC collapsibility

### FAST Exam (Focused Assessment with Sonography for Trauma)
**Views:**
1. Subxiphoid (pericardium)
2. RUQ (Morrison's pouch, right pleural space)
3. LUQ (Splenorenal recess, left pleural space)
4. Suprapubic (pelvic free fluid)
- Extended FAST (eFAST): Adds bilateral lung views for pneumothorax

### Lung Ultrasound
**Key Findings:**
| Finding | Appearance | Interpretation |
|---------|------------|----------------|
| A-lines | Horizontal reverberation | Normal aeration |
| B-lines | Vertical "comet-tails" | Interstitial syndrome (edema, fibrosis) |
| Lung sliding | Shimmering at pleura | Rules out pneumothorax |
| Lung point | Transition point | Pneumothorax margin |
| Consolidation | Tissue-like pattern | Pneumonia, atelectasis |

### IVC Assessment
- Measured in subxiphoid or subcostal long-axis view
- <2.1 cm with >50% collapse = low CVP
- >2.1 cm with <50% collapse = elevated CVP
- Useful for volume status assessment

## Musculoskeletal Ultrasound

### Tendon Evaluation
**Normal Tendon:**
- Fibrillar echotexture
- Hyperechoic
- Smooth contour
- No power Doppler signal

**Abnormal Findings:**
- Tendinopathy: Thickened, hypoechoic, loss of fibrillar pattern
- Partial tear: Focal defect, preserved fibers
- Complete tear: Gap, retraction, hemorrhage
- Enthesopathy: Abnormality at bone insertion

### Joint Assessment
- Effusion: Anechoic fluid in joint space
- Synovitis: Thickened synovium, power Doppler
- Erosions: Cortical irregularities
- Gout: Double contour sign, tophi

### Interventional Applications
- Real-time needle visualization
- Joint aspiration/injection
- Tendon sheath injection
- Nerve blocks
- Biopsy guidance

## Pediatric Ultrasound Considerations

### Advantages in Children
- No sedation usually required
- No radiation
- Can be performed at bedside
- Fontanelle allows brain imaging

### Special Applications
- Cranial: Through anterior fontanelle
- Hip dysplasia screening
- Pyloric stenosis
- Intussusception
- Appendicitis
- Testicular pathology`,
      keyTerms: [
        { term: 'shear wave elastography', definition: 'Quantitative ultrasound technique measuring tissue stiffness through shear wave velocity; used for liver fibrosis staging' },
        { term: 'harmonic imaging', definition: 'Technique receiving signals at twice the transmitted frequency to reduce artifacts and improve contrast' },
        { term: 'POCUS', definition: 'Point-of-Care Ultrasound; bedside imaging for immediate clinical decision-making' },
        { term: 'FAST exam', definition: 'Focused Assessment with Sonography for Trauma; 4-view protocol detecting free fluid in trauma' },
        { term: 'B-lines', definition: 'Vertical comet-tail artifacts extending from pleura to screen edge indicating interstitial lung syndrome' },
        { term: 'IVC collapsibility', definition: 'Respiratory variation in inferior vena cava diameter used to estimate central venous pressure' },
      ],
      clinicalNotes: 'POCUS has transformed emergency and critical care medicine. However, focused exams are not comprehensive - negative FAST does not rule out solid organ injury. Elastography is now standard for liver fibrosis staging, potentially replacing liver biopsy in many cases.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ultrasound encompasses advanced transducer technologies, AI-enhanced image acquisition and interpretation, super-resolution imaging, photoacoustic techniques, and integration into multimodality workflows with expanding therapeutic applications.',
      explanation: `## Advanced Transducer Technologies

### Matrix Array Transducers
- 2D array of elements (vs. 1D row)
- Electronic steering in elevation plane
- Real-time 3D/4D imaging
- Improved slice thickness control
- Reduced partial volume artifacts

### Single Crystal Technology
- Single-crystal piezoelectric materials (PMN-PT)
- Higher electromechanical coupling
- Improved sensitivity and bandwidth
- Better penetration and resolution
- Increasingly common in premium systems

### CMUT (Capacitive Micromachined Ultrasonic Transducers)
- MEMS fabrication technology
- Potential for integration with electronics
- Wide bandwidth capability
- Potentially lower cost at scale
- Research/early commercial stage

### Ultra-High-Frequency Ultrasound
- Up to 70+ MHz frequencies
- Resolution approaching 30 μm
- Penetration limited to ~1 cm
- Applications: Skin, eye, small vessels
- Intravascular ultrasound (IVUS): 20-60 MHz

## Quantitative Ultrasound

### Backscatter Analysis
- Quantitative analysis of echo texture
- Tissue characterization beyond visual assessment
- Applications: Fatty liver quantification, cardiac tissue
- Machine learning approaches for feature extraction

### Contrast Quantification (CEUS)
**Time-Intensity Curve Analysis:**
- Peak enhancement
- Time to peak
- Mean transit time
- Area under curve
- Wash-in/wash-out rates

**Clinical Protocols:**
- Liver: Arterial, portal venous, late phases for LI-RADS characterization
- Focal liver lesions: Enhancement patterns diagnostic
- Cardiac: Myocardial perfusion assessment
- Renal: Perfusion in transplants and tumors

### Acoustic Structure Quantification (ASQ)
- Statistical analysis of echo distribution
- Liver fibrosis assessment
- Differentiates homogeneous from heterogeneous tissue
- Complements elastography

## Artificial Intelligence in Ultrasound

### Acquisition Assistance
- Real-time quality feedback
- Automated plane recognition
- Optimal frame selection
- Guidance for inexperienced operators
- Automated measurements

### Image Enhancement
- Speckle reduction
- Resolution improvement
- Artifact mitigation
- Tissue differentiation

### Automated Analysis
**FDA-Cleared Applications:**
- Cardiac: EF, strain, valve assessment
- Obstetric: Biometry, growth charts
- Breast: BI-RADS category assistance
- Thyroid: ACR TI-RADS calculation
- Liver: Steatosis quantification

### Deep Learning Architectures
- Convolutional neural networks for image analysis
- Recurrent networks for temporal patterns
- U-Net for segmentation tasks
- Transfer learning from large datasets

## Super-Resolution Ultrasound

### Microbubble Localization Microscopy
- Track individual microbubble positions
- Accumulate over time for super-resolution map
- Resolution beyond diffraction limit (~10 μm)
- Visualize microvasculature in vivo
- Applications: Tumor angiogenesis, inflammation

### Requirements
- High frame rate acquisition
- Stable imaging plane
- Motion correction algorithms
- Long acquisition times (seconds to minutes)
- Computational processing

## Photoacoustic Imaging

### Principles
- Pulsed laser light absorbed by tissue
- Thermoelastic expansion generates ultrasound
- Detected by conventional ultrasound transducer
- Optical absorption contrast + acoustic resolution

### Clinical Applications (Emerging)
- Breast cancer imaging
- Sentinel lymph node detection
- Melanoma depth assessment
- Vascular imaging (hemoglobin)
- Molecular imaging with targeted agents

### Multispectral Photoacoustics
- Different wavelengths for different chromophores
- Oxygen saturation mapping
- Distinguish blood, melanin, lipid
- Potential for molecular targeting

## Fusion and Navigation

### Image Fusion
- Real-time US registered to prior CT/MRI
- Electromagnetic or optical tracking
- Applications:
  - Liver lesion targeting (seen on CT, invisible on US)
  - Biopsy planning
  - Ablation guidance
  - Prostate fusion biopsy (MRI + TRUS)

### Navigation Systems
- Tracking probe position in space
- 3D roadmapping
- Procedure planning and guidance
- Documentation of biopsy locations

## Therapeutic Ultrasound

### High-Intensity Focused Ultrasound (HIFU)
**Mechanisms:**
- Thermal ablation: Coagulative necrosis at focus
- Mechanical: Cavitation, tissue disruption

**Clinical Applications:**
- Uterine fibroids (FDA-cleared)
- Prostate cancer
- Essential tremor (transcranial)
- Bone metastases (palliative)
- Liver tumors (outside US)

### Histotripsy
- Non-thermal mechanical tissue destruction
- Very short, high-amplitude pulses
- Cavitation cloud formation
- Tissue liquefaction
- Liver and prostate applications in trials

### Drug Delivery Enhancement
- Microbubble-mediated transport
- Blood-brain barrier opening (research)
- Targeted drug release
- Immunotherapy enhancement potential

## Future Directions

### Wearable Ultrasound
- Flexible transducer arrays
- Continuous monitoring potential
- Cardiac, vascular, bladder applications
- Power and data challenges

### AI-Native Systems
- Automated complete examinations
- Real-time pathology detection
- Integrated clinical decision support
- Quality assurance automation

### Multimodality Integration
- PET/US fusion
- US-guided radiation therapy
- Interventional suite integration
- Intraoperative navigation`,
      keyTerms: [
        { term: 'CMUT', definition: 'Capacitive Micromachined Ultrasonic Transducer; MEMS-based transducer technology with wide bandwidth potential' },
        { term: 'super-resolution ultrasound', definition: 'Technique tracking individual microbubbles to achieve spatial resolution beyond the diffraction limit' },
        { term: 'photoacoustic imaging', definition: 'Hybrid technique combining optical absorption contrast with ultrasound detection for molecular and vascular imaging' },
        { term: 'HIFU', definition: 'High-Intensity Focused Ultrasound; therapeutic ultrasound for non-invasive thermal ablation' },
        { term: 'histotripsy', definition: 'Non-thermal ultrasound tissue destruction using short, high-amplitude pulses inducing cavitation' },
        { term: 'microbubble localization microscopy', definition: 'Super-resolution technique tracking individual contrast microbubbles to map microvasculature' },
      ],
      clinicalNotes: `Key developments transforming ultrasound practice:
1. AI-assisted acquisition democratizes quality imaging for non-expert operators
2. Super-resolution imaging approaches CT/MR resolution for vascular applications
3. CEUS with LI-RADS characterization increasingly used for hepatocellular carcinoma
4. Elastography becoming standard of care for liver fibrosis staging
5. Fusion imaging essential for targeting lesions visible on other modalities
6. HIFU approved for fibroids and essential tremor; expanding indications expected
7. Point-of-care ultrasound competency now expected for multiple specialties`,
    },
  },

  physicsExplanation: [
    {
      level: 1,
      content: 'Ultrasound sends out sound waves and listens to what bounces back, just like a dolphin finding fish in the ocean!',
    },
    {
      level: 3,
      content: 'Piezoelectric transducers generate MHz-frequency acoustic pulses. Image formation relies on reflection at tissue interfaces with differing acoustic impedance (Z = ρ × c). Echo arrival time determines depth, while amplitude determines brightness. Doppler shift from moving blood cells enables flow assessment.',
    },
    {
      level: 5,
      content: 'Contemporary ultrasound employs matrix array transducers, harmonic imaging, compound spatial imaging, and advanced beamforming. Elastography measures tissue stiffness via shear wave propagation. Contrast-enhanced ultrasound uses microbubble harmonic response for perfusion imaging. AI enhances acquisition, image quality, and automated analysis.',
    },
  ],

  radiation: {
    hasRadiation: false,
    riskCategory: 'minimal',
    ageConsiderations: 'Safe for all ages including fetuses; no cumulative dose concerns',
    pregnancyRisk: 'Safe for pregnancy; primary imaging modality for obstetrics',
  },

  contrastAgents: [
    {
      name: 'Sulfur hexafluoride microbubbles (Lumason)',
      type: 'microbubble',
      route: 'intravenous',
      indications: ['Liver lesion characterization', 'Cardiac perfusion', 'Vesicoureteral reflux (pediatric)', 'Echocardiography enhancement'],
      contraindications: ['Known hypersensitivity', 'Severe pulmonary hypertension', 'Acute cardiac conditions (use with caution)'],
      adverseReactions: {
        mild: ['Headache', 'Injection site reactions', 'Nausea'],
        moderate: ['Chest discomfort', 'Back pain'],
        severe: ['Anaphylaxis (very rare)', 'Cardiopulmonary reactions (rare)'],
      },
    },
  ],

  contraindications: [
    {
      condition: 'None absolute',
      type: 'relative',
      rationale: 'Ultrasound is the safest imaging modality with no absolute contraindications',
      alternative: 'Consider CT or MRI for better visualization in obese patients or air-containing structures',
      safetyConcern: 'Diagnostic limitations, not safety concerns',
    },
  ],

  preparation: {
    fastingRequired: true,
    fastingDuration: '4-6 hours for gallbladder/abdominal studies; none for most other studies',
    hydration: 'Full bladder required for pelvic ultrasound',
    medications: {
      hold: ['None typically required'],
      continue: ['All routine medications'],
    },
    clothing: 'Loose clothing; expose area to be scanned',
    jewelry: 'Remove from scan area if applicable',
    implants: ['No restrictions'],
    duration: '15-45 minutes depending on study',
    specialInstructions: [
      'Nothing to eat or drink for abdominal ultrasound (visualize gallbladder)',
      'Drink 32 oz water 1 hour before pelvic ultrasound (do not urinate)',
      'No special preparation for most other ultrasounds',
      'Gel will be applied to skin - it is water-based and washes off easily',
    ],
  },

  strengths: [
    'No ionizing radiation',
    'Real-time imaging',
    'Portable and bedside capable',
    'Relatively inexpensive',
    'Excellent for soft tissue and fluid',
    'Can assess blood flow (Doppler)',
    'Safe in pregnancy',
    'No contrast needed for most studies',
    'Repeatable without dose concerns',
  ],

  limitations: [
    'Cannot see through bone or air (bowel gas, lung)',
    'Operator-dependent',
    'Limited by body habitus (obesity)',
    'Smaller field of view than CT/MRI',
    'Subjective interpretation',
    'Limited for deep structures',
    'Image quality varies with equipment',
  ],

  commonIndications: [
    { indication: 'Pregnancy evaluation', urgency: 'routine', bodyRegion: 'pelvis' },
    { indication: 'Gallbladder disease', urgency: 'urgent', bodyRegion: 'abdomen' },
    { indication: 'Deep vein thrombosis', urgency: 'urgent', bodyRegion: 'lower-extremity' },
    { indication: 'Thyroid nodule evaluation', urgency: 'routine', bodyRegion: 'neck' },
    { indication: 'Testicular pain', urgency: 'urgent', bodyRegion: 'pelvis' },
    { indication: 'Cardiac function (echo)', urgency: 'routine', bodyRegion: 'chest' },
    { indication: 'Kidney stones/hydronephrosis', urgency: 'urgent', bodyRegion: 'abdomen' },
    { indication: 'Carotid stenosis', urgency: 'routine', bodyRegion: 'neck' },
  ],

  comparisonWithOtherModalities: [
    {
      modality: 'ct',
      comparison: 'CT offers wider field of view and less operator dependency but uses radiation',
      preferWhen: 'Ultrasound cannot visualize the area of interest or in emergent trauma',
    },
    {
      modality: 'mri',
      comparison: 'MRI offers superior soft tissue contrast without radiation but is more expensive and slower',
      preferWhen: 'Detailed tissue characterization needed and ultrasound is insufficient',
    },
    {
      modality: 'x-ray',
      comparison: 'X-ray is better for bone and lung evaluation but cannot visualize soft tissue detail',
      preferWhen: 'Bone pathology or pneumonia is primary concern',
    },
  ],

  costCategory: 'low',
  availability: 'widespread',

  media: [
    {
      id: 'us-physics-diagram',
      type: 'diagram',
      filename: 'ultrasound-physics.svg',
      title: 'Ultrasound Wave Physics',
      description: 'Diagram showing pulse-echo principle and transducer operation',
    },
    {
      id: 'doppler-modes',
      type: 'diagram',
      filename: 'doppler-ultrasound-modes.svg',
      title: 'Doppler Ultrasound Modes',
      description: 'Comparison of color, spectral, and power Doppler displays',
    },
  ],

  citations: [
    {
      id: 'kremkau-physics',
      type: 'textbook',
      title: 'Sonography Principles and Instruments',
      authors: ['Kremkau, F.W.'],
      source: 'Elsevier',
    },
    {
      id: 'aium-guidelines',
      type: 'website',
      title: 'AIUM Practice Parameters',
      source: 'American Institute of Ultrasound in Medicine',
      url: 'https://www.aium.org/resources/official-statements',
    },
  ],

  crossReferences: [
    { targetId: 'radiology-ct-scan', targetType: 'topic', relationship: 'related', label: 'CT Scan' },
    { targetId: 'radiology-common-findings', targetType: 'topic', relationship: 'see-also', label: 'Common Findings' },
    { targetId: 'radiology-imaging-preparation', targetType: 'topic', relationship: 'see-also', label: 'Imaging Preparation' },
  ],

  tags: {
    systems: ['cardiovascular', 'gastrointestinal', 'reproductive', 'musculoskeletal', 'vascular'],
    topics: ['radiology', 'imaging', 'diagnostics', 'obstetrics'],
    keywords: ['ultrasound', 'sonography', 'Doppler', 'echocardiography', 'POCUS'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics', 'medicine', 'radiology', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ultrasound;
