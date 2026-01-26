/**
 * X-Ray (Radiography) - Comprehensive Educational Content
 *
 * Covers the principles, applications, safety, and clinical uses of
 * conventional radiography (X-ray imaging).
 */

import { EducationalContent } from '../types';
import { RadiologyModalityContent, ContrastAgent, ImagingContraindication } from './types';

export const xrayBasics: RadiologyModalityContent = {
  id: 'radiology-xray-basics',
  type: 'concept',
  name: 'X-Ray (Radiography)',
  alternateNames: ['Plain Film', 'Radiograph', 'Plain Radiography', 'Conventional Radiography'],

  imagingMetadata: {
    modality: 'x-ray',
    alternativeNames: ['Plain film', 'Radiograph', 'KUB', 'CXR'],
    yearIntroduced: 1895,
    principleType: 'ionizing-radiation',
  },

  levels: {
    1: {
      level: 1,
      summary: 'X-rays are a type of invisible light that can pass through your body to take pictures of your bones and some organs.',
      explanation: `Have you ever seen a picture of someone's skeleton? That's an X-ray! X-rays use a special kind of invisible light that can go through your skin and muscles but gets stopped by harder things like bones and teeth.

**How does it work?**
Think of X-rays like a flashlight shining through your hand. If you hold a flashlight behind your hand in a dark room, you can see some light coming through the thin parts (like between your fingers), but your bones block more light and look darker. X-rays work the same way, but instead of regular light, they use X-ray light that can go through more stuff.

**What happens during an X-ray?**
1. You might need to take off jewelry or wear a hospital gown
2. You stand, sit, or lie down near the X-ray machine
3. A technologist (a specially trained helper) positions you
4. They put a special shield on parts of your body that don't need to be X-rayed
5. You hold very still for just a second or two while the picture is taken
6. It doesn't hurt at all - you can't feel X-rays!

**What can X-rays show?**
- Broken bones
- Cavities in your teeth
- Lungs and heart
- Things you might have swallowed by accident

X-rays are super quick - most take less than a minute!`,
      keyTerms: [
        { term: 'X-ray', definition: 'A type of invisible light that can take pictures of the inside of your body' },
        { term: 'radiograph', definition: 'Another name for an X-ray picture' },
        { term: 'technologist', definition: 'A trained helper who takes X-ray pictures' },
      ],
      analogies: [
        'X-rays are like a flashlight that can shine through your skin to see your bones inside.',
        'Getting an X-ray is like getting your picture taken, but the camera can see through you!',
        'Dense things like bones are like walls that block the X-ray light, so they show up white.',
      ],
      examples: [
        'When you break your arm, doctors use X-rays to see exactly where the bone is broken.',
        'Dentists use small X-rays to find cavities hiding between your teeth.',
        'If you accidentally swallow something, an X-ray can help find it.',
      ],
    },
    2: {
      level: 2,
      summary: 'X-rays use ionizing radiation to create images based on tissue density differences, with dense structures like bone appearing white and air-filled structures appearing black.',
      explanation: `## What Are X-Rays?

X-rays are a form of electromagnetic radiation with wavelengths shorter than visible light. They were discovered by Wilhelm Roentgen in 1895 and have become one of the most common medical imaging tools.

## How X-Rays Work

**Basic Principle:**
1. An X-ray tube produces a beam of X-ray photons
2. The beam passes through the patient's body
3. Different tissues absorb different amounts of radiation based on their density
4. The X-rays that pass through hit a detector, creating an image

**What Different Shades Mean:**
- **White (radiopaque)**: Dense materials that absorb X-rays - bones, metal
- **Gray**: Soft tissues like muscles, organs, and fluids
- **Black (radiolucent)**: Air or gas, which X-rays pass through easily

**The Five Basic Densities:**
From most to least dense:
1. Metal (brightest white)
2. Bone (white)
3. Soft tissue/fluid (gray)
4. Fat (darker gray)
5. Air (black)

## Common Types of X-Rays

| Type | What It Shows |
|------|--------------|
| Chest X-ray (CXR) | Heart, lungs, ribs, airways |
| Abdominal X-ray (KUB) | Intestines, kidneys, bladder area |
| Bone X-rays | Fractures, joint problems, bone diseases |
| Spine X-rays | Vertebrae, alignment, disc spaces |
| Dental X-rays | Teeth, jaw, sinuses |

## Radiation Exposure

X-rays do use radiation, but the amount is very small:
- A chest X-ray gives about the same radiation as 10 days of natural background radiation
- Medical X-rays are carefully controlled to use the minimum dose needed
- The benefits of finding medical problems usually far outweigh the small risks

## When X-Rays Are Used

**Great for:**
- Fractures (broken bones)
- Pneumonia
- Lung problems
- Arthritis
- Foreign objects
- Dental problems

**Not as good for:**
- Soft tissue injuries (sprains, muscle tears)
- Early cancer detection
- Brain problems
- Detailed organ imaging`,
      keyTerms: [
        { term: 'ionizing radiation', definition: 'Energy that can remove electrons from atoms; X-rays are a type of ionizing radiation', pronunciation: 'EYE-on-eye-zing' },
        { term: 'radiopaque', definition: 'Materials that block X-rays and appear white on images', pronunciation: 'ray-dee-oh-PAYK' },
        { term: 'radiolucent', definition: 'Materials that allow X-rays to pass through and appear dark on images', pronunciation: 'ray-dee-oh-LOO-sent' },
        { term: 'electromagnetic radiation', definition: 'Energy that travels in waves; includes X-rays, visible light, and radio waves' },
        { term: 'density', definition: 'How tightly packed the atoms in a material are' },
      ],
      analogies: [
        'X-rays passing through tissue are like sunlight through curtains - thicker/denser curtains block more light.',
        'The X-ray image is like a shadow puppet show, where bones cast "shadows" on the detector.',
      ],
    },
    3: {
      level: 3,
      summary: 'Radiography produces 2D projection images through differential attenuation of X-ray photons by tissues of varying atomic number and density, governed by the photoelectric effect and Compton scattering.',
      explanation: `## Physics of X-Ray Production

### X-Ray Tube Components
- **Cathode**: Heated tungsten filament emitting electrons via thermionic emission
- **Anode**: Rotating tungsten target (tungsten chosen for high atomic number and melting point)
- **Focusing cup**: Directs electron beam
- **Glass envelope**: Maintains vacuum

### X-Ray Generation
1. Electrons accelerated across tube (40-150 kVp)
2. Electrons strike anode target
3. Two mechanisms produce X-rays:
   - **Bremsstrahlung (braking radiation)**: Electrons decelerated by nuclear attraction (continuous spectrum)
   - **Characteristic radiation**: Electrons eject inner shell electrons, producing specific energy photons

### Beam Characteristics
- **kVp (kilovoltage peak)**: Controls penetrating power and image contrast
- **mA (milliamperage)**: Controls number of X-rays produced
- **Exposure time**: Combined with mA as mAs
- **Filtration**: Removes low-energy photons that would only contribute to patient dose

## X-Ray Interactions with Matter

### Primary Interactions
1. **Photoelectric Effect**
   - Photon completely absorbed by inner shell electron
   - Dominant at lower energies and high atomic number tissues
   - Primary source of image contrast
   - Probability proportional to Z³/E³

2. **Compton Scattering**
   - Photon partially absorbed, ejecting outer electron
   - Scattered photon continues at reduced energy
   - Predominant at diagnostic energies in soft tissue
   - Primary source of image noise (scatter)
   - Independent of atomic number

### Attenuation
- Governed by Beer-Lambert law: I = I₀e^(-μx)
- Linear attenuation coefficient (μ) depends on tissue density and atomic number
- Half-value layer (HVL): Thickness to reduce beam intensity by 50%

## Image Formation

### Detectors
- **Computed Radiography (CR)**: Photostimulable phosphor plates
- **Digital Radiography (DR)**: Direct or indirect flat-panel detectors
- Direct: Amorphous selenium converts X-rays directly to electrical signal
- Indirect: Scintillator + amorphous silicon photodiode array

### Image Quality Factors
- **Spatial resolution**: ~2-5 line pairs/mm (limited by focal spot size, detector)
- **Contrast resolution**: Excellent for high-contrast structures
- **Noise**: Quantum mottle from statistical photon distribution
- **Artifacts**: Motion blur, scattered radiation, grid lines

## Technical Considerations

### Exposure Factors
| Parameter | Effect on Image |
|-----------|-----------------|
| ↑ kVp | ↓ Contrast, ↑ Penetration |
| ↑ mAs | ↑ Density, ↓ Noise |
| ↑ Distance | ↓ Magnification, ↓ Dose (inverse square law) |
| Grid use | ↓ Scatter, ↑ Contrast, ↑ Dose required |

### Anti-scatter Grid
- Lead strips alternating with radiolucent interspaces
- Grid ratio = height of strips / width of interspace
- Removes scattered radiation but increases patient dose

## Radiation Dose

### Typical Effective Doses
| Examination | Effective Dose (mSv) |
|------------|---------------------|
| Chest PA | 0.02 |
| Chest lateral | 0.04 |
| Abdomen | 0.7 |
| Lumbar spine | 1.5 |
| Pelvis | 0.6 |

### Dose Reduction Strategies
- Appropriate technique selection
- Collimation to area of interest
- Gonadal shielding when appropriate
- Avoiding repeat exposures`,
      keyTerms: [
        { term: 'Bremsstrahlung', definition: 'X-rays produced when electrons are decelerated by atomic nuclei; creates continuous spectrum', pronunciation: 'BREM-strah-lung' },
        { term: 'photoelectric effect', definition: 'Complete absorption of X-ray photon by inner shell electron; dominant source of image contrast' },
        { term: 'Compton scattering', definition: 'Partial absorption of X-ray with ejection of outer electron; primary source of scatter radiation' },
        { term: 'linear attenuation coefficient', definition: 'Measure of how much X-ray beam intensity is reduced per unit thickness of material' },
        { term: 'kVp', definition: 'Peak kilovoltage applied across X-ray tube; determines beam penetrating power and contrast' },
        { term: 'mAs', definition: 'Milliampere-seconds; determines quantity of X-rays produced and image density' },
      ],
      clinicalNotes: 'Digital radiography has largely replaced film-screen systems, offering improved workflow, post-processing capabilities, and dose efficiency. However, the ease of retaking images has led to "dose creep" - maintaining quality assurance is essential.',
    },
    4: {
      level: 4,
      summary: 'Radiographic imaging optimization requires understanding the complex interplay between X-ray physics, detector characteristics, and image processing algorithms, balanced against radiation dose considerations following ALARA principles.',
      explanation: `## Advanced X-Ray Physics

### X-Ray Spectrum Characteristics
- **Continuous spectrum**: Bremsstrahlung with maximum energy = kVp
- **Characteristic peaks**: K-shell radiation at 59 keV and 67 keV for tungsten
- **Filtration effects**: Inherent (glass, oil) + added (aluminum, copper)
- Minimum total filtration: 2.5 mm Al equivalent (diagnostic range)

### Beam Hardening
- Preferential absorption of lower-energy photons
- Increases mean beam energy with depth
- Clinical implication: Entrance dose >> exit dose

### Heel Effect
- Anode self-absorption causes intensity variation along tube axis
- Cathode side has higher intensity
- Position thicker body parts toward cathode

## Detector Physics

### Computed Radiography (CR)
- Photostimulable phosphor: Europium-doped barium fluorohalide
- Photostimulated luminescence (PSL) proportional to absorbed X-ray energy
- Detective quantum efficiency (DQE): 25-35%

### Digital Radiography (DR)

**Indirect Detection:**
- Scintillator: CsI:Tl (cesium iodide) columnar crystals
- Light detection: Amorphous silicon TFT array
- DQE: 45-65%
- Advantages: Higher DQE, faster readout

**Direct Detection:**
- Amorphous selenium photoconductor
- Direct conversion of X-rays to charge
- DQE: 35-50%
- Advantages: Superior spatial resolution

### Detective Quantum Efficiency (DQE)
- Measure of detector efficiency in converting X-ray signal to image information
- DQE = (SNR_out/SNR_in)²
- Frequency-dependent: DQE(f)
- Higher DQE = better image quality at same dose

## Image Quality Metrics

### Modulation Transfer Function (MTF)
- Describes spatial frequency response
- MTF(f) = (modulation at frequency f)/(input modulation)
- Limiting spatial resolution: MTF = 0.1 or 0.05

### Noise Power Spectrum (NPS)
- Describes noise texture and frequency distribution
- Quantum noise proportional to 1/dose
- Electronic noise independent of dose

### Signal-to-Noise Ratio (SNR)
- SNR = Signal / √(Noise variance)
- For quantum-limited systems: SNR ∝ √(dose)
- Doubling SNR requires 4x dose

## Advanced Image Processing

### Automatic Exposure Control (AEC)
- Ion chamber sensors in detector
- Terminates exposure at preset detector signal
- Maintains consistent image density regardless of patient size

### Digital Image Processing
- **Grayscale mapping (window/level)**: Adjusts display contrast
- **Unsharp masking**: Edge enhancement
- **Multiscale processing**: Frequency-based enhancement
- **Noise reduction**: Adaptive filtering

### Dual-Energy Radiography
- Two exposures at different kVp (or spectral filtration)
- Material decomposition based on energy-dependent attenuation
- Applications: Bone removal from chest X-ray, characterizing calcifications
- Limitations: Increased dose, motion artifacts

## Quality Assurance

### Performance Testing
| Parameter | Test | Tolerance |
|-----------|------|-----------|
| Spatial resolution | Line pair phantom | >2.0 lp/mm |
| Low contrast | Contrast-detail phantom | Acceptable |
| Exposure reproducibility | Multiple exposures | CV <5% |
| Beam alignment | Collimator test | Within 2% SID |
| AEC reproducibility | Variable thickness phantom | CV <10% |

### Reject Analysis
- Monitoring repeat/reject rates
- Identifying systematic issues (positioning, technique)
- Target: <5% repeat rate

## Clinical Protocol Optimization

### Pediatric Considerations
- Increased radiosensitivity
- "Image Gently" campaign protocols
- Technique: Lower kVp, tighter collimation
- Consider alternative modalities (US, MRI)

### Geriatric Considerations
- Osteoporosis affects technique
- May require higher mAs for adequate penetration
- Consider body habitus carefully`,
      keyTerms: [
        { term: 'DQE', definition: 'Detective Quantum Efficiency; measure of how efficiently a detector converts X-ray signal to useful image information', pronunciation: 'DEE-kyoo-EE' },
        { term: 'MTF', definition: 'Modulation Transfer Function; describes detector\'s ability to preserve spatial frequencies (sharpness)' },
        { term: 'NPS', definition: 'Noise Power Spectrum; characterizes the frequency distribution of image noise' },
        { term: 'heel effect', definition: 'Variation in X-ray intensity along the anode-cathode axis due to anode self-absorption' },
        { term: 'ALARA', definition: 'As Low As Reasonably Achievable; radiation protection principle minimizing dose while maintaining diagnostic quality' },
        { term: 'photostimulated luminescence', definition: 'Process by which CR plates release stored energy as visible light when scanned with laser' },
      ],
      clinicalNotes: 'Modern DR systems can achieve diagnostic quality at 50-70% of the dose required for film-screen. However, the wide dynamic range means overexposure may not be obvious on the image - exposure indicator monitoring is essential for dose optimization.',
    },
    5: {
      level: 5,
      summary: 'Contemporary radiographic practice integrates advanced detector technology, sophisticated image processing, and evidence-based protocols to maximize diagnostic yield while adhering to radiation protection principles, with emerging AI applications for quality control and interpretation.',
      explanation: `## State-of-the-Art Detector Technology

### Current DR Systems
- **Gadolinium oxysulfide (GOS) scintillators**: Lower cost, slightly lower DQE
- **CsI needle phosphors**: Superior light channeling, higher DQE
- **Direct selenium panels**: Best spatial resolution, motion-sensitive
- **Photon-counting detectors**: Emerging technology with energy discrimination

### Photon-Counting Radiography
- Direct conversion with pulse-height analysis
- Energy thresholding eliminates electronic noise
- Potential for spectral radiography from single exposure
- Current limitations: Cost, count rate limitations, pixel size

### Large-Area Detectors
- Full-field digital mammography technology adaptations
- Tomosynthesis-capable panels
- Cone-beam CT capability on same platform

## Advanced Clinical Applications

### Tomosynthesis
- Multiple low-dose projections at different angles
- Reconstruction into quasi-3D dataset
- Reduces overlapping structure obscuration
- Applications: Chest, orthopedic, dental
- Dose: 1.5-3x single radiograph

### Dual-Energy Subtraction
**Technical Approaches:**
1. Rapid kVp switching (single exposure)
2. Dual-layer detector (single exposure)
3. Dual-exposure with different kVp

**Clinical Applications:**
- Chest: Bone suppression, calcification detection
- Extremities: Bone marrow edema (surrogate)
- Gout: Uric acid crystal detection

**Limitations:**
- Motion artifacts (dual-exposure)
- Increased dose
- Post-processing requirements

### Computer-Aided Detection (CAD)
**Current FDA-cleared Applications:**
- Chest X-ray: Nodule detection, cardiomegaly
- Bone: Fracture detection
- Dental: Caries detection

**Performance Metrics:**
- Sensitivity for nodules: 85-95%
- False positive rate: 1-3 per image
- Role: Second reader, prioritization

## Dose Optimization Strategies

### Size-Specific Dose Estimates (SSDE)
- Adjusting technique based on patient size
- Lateral thickness or water-equivalent diameter
- Automatic collimation systems

### Exposure Index Standardization
- AAPM TG-116 / IEC standard
- Target Exposure Index (EI_T)
- Deviation Index (DI) = 10 × log₁₀(EI/EI_T)
- DI should be within ±1.0

### Diagnostic Reference Levels (DRLs)
| Examination | DRL (mGy) - Entrance | DRL (mGy·cm²) - DAP |
|------------|---------------------|---------------------|
| Chest PA | 0.3 | 12 |
| Abdomen AP | 10 | 400 |
| Lumbar spine AP | 10 | 175 |
| Pelvis AP | 10 | 350 |

### Radiation Risk Models
- Linear no-threshold (LNT) model: Conservative standard
- Risk per mSv: ~5 × 10⁻⁵ fatal cancer
- Pediatric risk multiplier: 2-3x adult
- Quality-adjusted life years (QALY) considerations

## Emerging Technologies

### Artificial Intelligence Integration
**Current Applications:**
- Quality control: Positioning assessment, repeat prediction
- Workflow: Prioritization, routing
- Interpretation assistance: Pathology detection

**Deep Learning Architectures:**
- Convolutional neural networks (CNN) for image analysis
- U-Net variants for segmentation
- Transformer models for multi-finding detection

**Regulatory Considerations:**
- FDA 510(k) pathway for CAD as "concurrent read"
- De novo pathway for AI as "autonomous reader"
- Post-market surveillance requirements

### Phase-Contrast Imaging
- Exploits refractive index differences (not just absorption)
- Enhanced soft tissue contrast
- Research applications: Mammography, lung imaging
- Technical requirement: Coherent X-ray sources (synchrotron, grating-based)

### Dark-Field Imaging
- Measures small-angle scattering from microstructures
- Potential lung imaging application (alveolar structure)
- Early emphysema detection
- Currently research only

## Quality Management

### ACR Accreditation Requirements
- Physicist survey annually
- Technologist QC weekly/monthly
- Radiologist peer review ongoing
- Dose monitoring program

### Dose Monitoring Systems
- Automated dose tracking from DICOM headers
- Comparison to DRLs
- Alert systems for outliers
- Population dose analysis

### Image Quality Metrics
**Automated Assessment:**
- Collimation adequacy
- Positioning verification
- Exposure adequacy (EI)
- Motion detection

**Manual Review:**
- Diagnostic adequacy scoring
- Reject analysis trending
- Clinical outcome correlation

## Special Considerations

### Pregnancy Protocols
- Fetal dose estimation: Monte Carlo-based calculators
- Risk communication: Threshold for deterministic effects ~100 mGy
- Shielding: Limited utility (scatter from within patient)
- Decision: Document informed discussion

### Forensic Radiology
- Chain of custody considerations
- Post-mortem imaging protocols
- Age estimation from skeletal radiographs
- Foreign body documentation

### Disaster/Mass Casualty
- Portable unit deployment
- Triage protocols
- Dose considerations relaxed for life-threatening situations
- Image archival and identification systems`,
      keyTerms: [
        { term: 'photon-counting detector', definition: 'Detector technology that counts individual X-ray photons and measures their energy, enabling spectral imaging' },
        { term: 'tomosynthesis', definition: 'Limited-angle tomographic technique producing multiple slices from low-dose sweeps, reducing structural superimposition' },
        { term: 'Deviation Index', definition: 'Standardized metric indicating exposure relative to target; DI = 10 × log(EI/EI_target)' },
        { term: 'Diagnostic Reference Level', definition: 'Benchmark dose values for typical patients; investigation trigger when consistently exceeded' },
        { term: 'phase-contrast imaging', definition: 'Technique exploiting X-ray wave refraction for enhanced soft tissue contrast' },
        { term: 'dark-field imaging', definition: 'Method detecting X-ray scattering from microstructures, providing complementary tissue information' },
      ],
      clinicalNotes: `Key clinical implementation points:
1. AI-based CAD should complement, not replace, radiologist interpretation - liability remains with interpreting physician
2. Tomosynthesis shows promise for chest imaging with only modest dose increase
3. Exposure index monitoring is essential - establish baseline and track trends
4. Pediatric protocols should be explicitly differentiated from adult protocols
5. Consider dual-energy when overlapping structures limit diagnostic confidence
6. Document radiation dose discussions for pregnant patients regardless of estimated fetal dose`,
    },
  },

  physicsExplanation: [
    {
      level: 1,
      content: 'X-rays are like invisible light that can go through soft things but gets stopped by hard things like bones.',
    },
    {
      level: 3,
      content: 'X-rays are electromagnetic radiation produced by accelerating electrons into a tungsten target. Image formation relies on differential attenuation through photoelectric absorption and Compton scattering.',
    },
    {
      level: 5,
      content: 'X-ray production involves thermionic emission, electron acceleration (40-150 kVp), and both Bremsstrahlung and characteristic radiation generation at the tungsten anode. Attenuation follows Beer-Lambert kinetics with tissue-specific linear attenuation coefficients.',
    },
  ],

  radiation: {
    hasRadiation: true,
    typicalDose: {
      value: 0.1,
      unit: 'mSv',
      range: { min: 0.001, max: 1.5 },
    },
    equivalentTo: 'Chest X-ray: about 10 days of natural background radiation',
    riskCategory: 'minimal',
    ageConsiderations: 'Children are more sensitive to radiation; pediatric protocols use lower doses',
    pregnancyRisk: 'Generally safe with abdominal shielding when possible; avoid direct fetal exposure unless necessary',
  },

  contrastAgents: [
    {
      name: 'Barium sulfate',
      type: 'barium',
      route: 'oral',
      indications: ['GI tract imaging', 'Swallowing studies', 'Small bowel follow-through'],
      contraindications: ['Suspected perforation', 'Aspiration risk', 'Bowel obstruction'],
      adverseReactions: {
        mild: ['Constipation', 'Nausea'],
        moderate: ['Impaction', 'Allergic reaction (rare)'],
        severe: ['Peritonitis if perforation present', 'Aspiration pneumonitis'],
      },
    },
  ],

  contraindications: [
    {
      condition: 'Pregnancy',
      type: 'relative',
      rationale: 'Radiation exposure to fetus; benefits must outweigh risks',
      alternative: 'Ultrasound or MRI when feasible',
      safetyConcern: 'Fetal radiation exposure',
    },
  ],

  preparation: {
    fastingRequired: false,
    clothing: 'May need to change into gown; remove items over area being imaged',
    jewelry: 'Remove jewelry, watches, and metal objects from imaging area',
    implants: ['Usually not a concern for X-rays'],
    duration: '5-15 minutes',
    specialInstructions: [
      'Hold still during the exposure',
      'Follow breathing instructions for chest X-rays',
      'Inform technologist if you might be pregnant',
    ],
  },

  strengths: [
    'Fast and readily available',
    'Excellent for bone evaluation',
    'Low cost compared to other modalities',
    'Portable units available for bedside imaging',
    'Good for chest evaluation',
    'Minimal patient preparation',
  ],

  limitations: [
    'Limited soft tissue contrast',
    'Cannot see behind dense structures (overlapping)',
    '2D projection of 3D structures',
    'Uses ionizing radiation',
    'Cannot visualize cartilage, ligaments well',
    'Limited sensitivity for early bone pathology',
  ],

  commonIndications: [
    { indication: 'Fracture evaluation', urgency: 'urgent', bodyRegion: 'upper-extremity' },
    { indication: 'Chest pain evaluation', urgency: 'urgent', bodyRegion: 'chest' },
    { indication: 'Pneumonia', urgency: 'routine', bodyRegion: 'chest' },
    { indication: 'Abdominal pain', urgency: 'routine', bodyRegion: 'abdomen' },
    { indication: 'Arthritis assessment', urgency: 'routine', bodyRegion: 'upper-extremity' },
    { indication: 'Foreign body', urgency: 'urgent', bodyRegion: 'abdomen' },
  ],

  comparisonWithOtherModalities: [
    {
      modality: 'ct',
      comparison: 'CT provides cross-sectional images with much better soft tissue detail but uses more radiation',
      preferWhen: 'When detailed cross-sectional anatomy is needed or X-ray is inconclusive',
    },
    {
      modality: 'mri',
      comparison: 'MRI provides superior soft tissue contrast with no radiation but is more expensive and time-consuming',
      preferWhen: 'Soft tissue, ligament, or cartilage evaluation needed',
    },
    {
      modality: 'ultrasound',
      comparison: 'Ultrasound has no radiation and is good for soft tissues/fluids but cannot see through bone or air',
      preferWhen: 'Real-time imaging needed or in pregnancy/pediatric patients',
    },
  ],

  costCategory: 'low',
  availability: 'widespread',

  media: [
    {
      id: 'xray-physics-diagram',
      type: 'diagram',
      filename: 'xray-tube-physics.svg',
      title: 'X-Ray Tube Components',
      description: 'Diagram showing cathode, anode, and X-ray beam production',
    },
    {
      id: 'xray-density-scale',
      type: 'diagram',
      filename: 'xray-density-scale.svg',
      title: 'Radiographic Densities',
      description: 'Five basic densities from air (black) to metal (white)',
    },
  ],

  citations: [
    {
      id: 'bushberg-physics',
      type: 'textbook',
      title: 'The Essential Physics of Medical Imaging',
      authors: ['Bushberg, J.T.', 'Seibert, J.A.', 'Leidholdt, E.M.', 'Boone, J.M.'],
      source: 'Lippincott Williams & Wilkins',
      chapter: '5-7',
    },
    {
      id: 'acr-appropriateness',
      type: 'website',
      title: 'ACR Appropriateness Criteria',
      source: 'American College of Radiology',
      url: 'https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria',
    },
  ],

  crossReferences: [
    { targetId: 'radiology-ct-scan', targetType: 'topic', relationship: 'related', label: 'CT Scan' },
    { targetId: 'radiology-radiation-safety', targetType: 'topic', relationship: 'see-also', label: 'Radiation Safety' },
    { targetId: 'radiology-fluoroscopy', targetType: 'topic', relationship: 'related', label: 'Fluoroscopy' },
  ],

  tags: {
    systems: ['musculoskeletal', 'respiratory', 'cardiovascular'],
    topics: ['radiology', 'imaging', 'diagnostics'],
    keywords: ['x-ray', 'radiograph', 'plain film', 'ionizing radiation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'radiology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default xrayBasics;
