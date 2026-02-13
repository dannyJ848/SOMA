/**
 * CT Scan (Computed Tomography) - Comprehensive Educational Content
 *
 * Covers the principles, applications, safety, and clinical uses of
 * computed tomography imaging.
 */

import { RadiologyModalityContent, ContrastAgent, ImagingContraindication } from './types';

export const ctScan: RadiologyModalityContent = {
  id: 'radiology-ct-scan',
  type: 'concept',
  name: 'CT Scan (Computed Tomography)',
  alternateNames: ['CAT Scan', 'Computed Axial Tomography', 'CT', 'Helical CT', 'Spiral CT'],

  imagingMetadata: {
    modality: 'ct',
    alternativeNames: ['CAT scan', 'CT scanner', 'Helical CT', 'MDCT'],
    yearIntroduced: 1971,
    principleType: 'ionizing-radiation',
  },

  levels: {
    1: {
      level: 1,
      summary: 'A CT scan takes lots of X-ray pictures from different angles and puts them together like slices of bread to see inside your body.',
      explanation: `Have you ever sliced a loaf of bread and looked at each slice? A CT scan works kind of like that! It takes many X-ray pictures as a machine spins around you, then a computer puts them all together to make pictures that show what's inside your body - almost like looking at slices.

**How does it work?**
1. You lie down on a special table that slides into a big donut-shaped machine
2. The machine has an X-ray tube that spins around you in a circle
3. It takes hundreds of X-ray pictures from every angle
4. A super-fast computer puts all the pictures together
5. The doctor can see "slices" of your body, like looking at a stack of pancakes!

**What happens during a CT scan?**
1. You might need to wear a hospital gown
2. You lie very still on the table
3. The table slides you into the donut hole (don't worry - it's open on both ends!)
4. You might hear whirring sounds as the machine works
5. Sometimes you need to hold your breath for a few seconds
6. The whole thing usually takes just 10-15 minutes

**What can CT scans show?**
- Your brain and if there's bleeding inside your head
- Broken bones, especially complicated ones
- Problems with your organs like your heart, lungs, or tummy
- Tumors or growths
- If something is wrong with your blood vessels

CT scans give doctors way more detail than regular X-rays!`,
      keyTerms: [
        { term: 'CT scan', definition: 'A special X-ray machine that takes pictures in slices to see inside your body' },
        { term: 'donut machine', definition: 'The nickname for the CT scanner because of its round shape with a hole in the middle' },
        { term: 'slice', definition: 'One picture showing a thin layer of your body, like a slice of bread' },
      ],
      analogies: [
        'CT scans are like slicing a loaf of bread - you can see the inside of each slice!',
        'The CT machine spins around you like a merry-go-round, taking pictures the whole time.',
        'Looking at CT images is like looking at the floors of a building from above, one floor at a time.',
      ],
      examples: [
        'When someone hits their head really hard, doctors use a CT scan to check for bleeding in the brain.',
        'If you have bad tummy pain, a CT scan can help find out what\'s causing it.',
        'CT scans help doctors plan surgeries by showing them exactly where things are inside.',
      ],
    },
    2: {
      level: 2,
      summary: 'CT uses a rotating X-ray tube and detectors to create cross-sectional images of the body, offering much greater detail than plain X-rays.',
      explanation: `## What is CT Scanning?

CT (Computed Tomography) scanning combines X-ray technology with computer processing to create detailed cross-sectional images of the body. Unlike regular X-rays, which produce flat 2D images, CT creates "slices" that can be viewed individually or combined to create 3D reconstructions.

## How CT Works

**The Scanner Components:**
- A large, ring-shaped gantry containing the X-ray tube and detectors
- An X-ray tube that rotates around the patient
- Multiple rows of detectors opposite the tube
- A moving table that slides through the gantry
- Powerful computers for image reconstruction

**The Scanning Process:**
1. Patient lies on the table and is positioned in the center of the gantry
2. The X-ray tube rotates 360° around the patient
3. Detectors on the opposite side measure how much X-ray passes through
4. The table moves (in spiral/helical CT) while the tube rotates
5. Computer algorithms process the data into images
6. Software can reconstruct images in any plane

## What CT Images Show

**Different Window Settings:**
| Window | Best For |
|--------|----------|
| Brain window | Brain tissue, bleeding, tumors |
| Bone window | Fractures, bone detail |
| Lung window | Lung tissue, airways |
| Soft tissue window | Organs, muscles |

**What CT is Great For:**
- Head trauma - seeing bleeding in the brain
- Chest problems - pneumonia, lung clots (PE), aortic problems
- Abdominal pain - appendicitis, bowel problems, kidney stones
- Cancer - finding tumors and checking if they've spread
- Bone injuries - complex fractures, spine problems

## CT with Contrast

Sometimes a special dye called contrast is injected into a vein:
- Makes blood vessels and organs easier to see
- Helps identify tumors
- Shows where blood is flowing
- May highlight infection or inflammation

**Before contrast, you may need a kidney function blood test.**

## Radiation and Safety

CT uses more radiation than regular X-rays:
- A chest CT gives about 100 times more radiation than a chest X-ray
- The benefits of accurate diagnosis usually outweigh the small risks
- Doctors order CT only when the information is truly needed
- Modern scanners use dose-reduction techniques`,
      keyTerms: [
        { term: 'computed tomography', definition: 'A technique using X-rays and computers to create cross-sectional images', pronunciation: 'toh-MOG-ruh-fee' },
        { term: 'gantry', definition: 'The ring-shaped part of the CT scanner containing the X-ray tube and detectors', pronunciation: 'GAN-tree' },
        { term: 'helical CT', definition: 'CT scanning where the table moves continuously while the tube rotates, creating a spiral pattern' },
        { term: 'contrast', definition: 'A liquid injected into a vein that makes certain structures easier to see on the scan' },
        { term: 'cross-sectional', definition: 'Images that show a slice through the body, as if you cut through it' },
        { term: 'reconstruction', definition: 'Using computer processing to create different views from the raw CT data' },
      ],
      analogies: [
        'CT is like taking a 3D photograph instead of a flat picture - you can look at it from any angle.',
        'The rotating X-ray tube is like a camera going around you in a circle, taking pictures continuously.',
        'Contrast dye is like highlighter ink - it makes important things stand out.',
      ],
    },
    3: {
      level: 3,
      summary: 'Computed tomography acquires volumetric data through helical X-ray acquisition and filtered back-projection or iterative reconstruction, enabling multiplanar reformatting and 3D visualization.',
      explanation: `## CT Physics and Image Acquisition

### Generations of CT Technology
- **1st Generation**: Translate-rotate, single pencil beam, single detector
- **2nd Generation**: Translate-rotate, small fan beam, detector array
- **3rd Generation**: Rotate-rotate, wide fan beam, detector arc
- **4th Generation**: Stationary detector ring, rotating tube
- **Current (MDCT)**: Multi-detector row, helical acquisition

### Multi-Detector CT (MDCT)
- Multiple rows of detectors (16, 64, 128, 256, 320 rows)
- Submillimeter slice thickness possible
- Rapid volume coverage
- Isotropic voxel acquisition (equal dimensions in all planes)

### Key Acquisition Parameters

| Parameter | Effect on Image |
|-----------|-----------------|
| kVp | Beam penetration, contrast, dose |
| mAs | Quantum noise, dose |
| Pitch | Coverage speed, z-axis resolution |
| Collimation | Slice thickness, z-axis resolution |
| Rotation time | Temporal resolution, motion artifacts |

### Pitch
- Pitch = Table movement per rotation / Total collimation width
- Pitch >1: Faster scanning, possible gaps
- Pitch <1: Overlapping data, higher dose
- Typical values: 0.5-1.5

## Image Reconstruction

### Filtered Back-Projection (FBP)
1. Raw data acquired as sinogram (detector signals vs. angle)
2. Apply ramp filter to remove blurring
3. Apply smoothing filter (kernel) for noise/resolution trade-off
4. Back-project filtered data to create image
5. Sum contributions from all angles

### Iterative Reconstruction (IR)
- Forward models the acquisition process
- Compares modeled and actual data
- Iteratively refines image estimate
- Reduces noise at lower doses
- Types: Hybrid IR (ASIR, iDose) and Model-based IR (MBIR, IMR)

### Reconstruction Kernels
- **Soft tissue (smooth)**: Low noise, lower spatial resolution
- **Standard**: Balance of noise and resolution
- **Sharp/Bone**: High spatial resolution, more noise
- **Lung**: Edge enhancement for parenchyma

## CT Numbers and Windowing

### Hounsfield Units (HU)
- Linear attenuation coefficients scaled to water = 0 HU
- HU = 1000 × (μ_tissue - μ_water) / μ_water
- Air = -1000 HU, Fat ≈ -100 HU, Water = 0 HU, Soft tissue ≈ 40 HU, Bone ≈ 1000 HU

### Window/Level Settings
- **Window Width (WW)**: Range of HU values displayed
- **Window Level (WL)**: Center HU value of the window
- Common settings:
  - Brain: WL 40, WW 80
  - Lung: WL -600, WW 1500
  - Bone: WL 400, WW 2000
  - Soft tissue: WL 50, WW 400

## Contrast Administration

### Iodinated Contrast Agents
- **Ionic high-osmolar**: Older, higher reaction rates
- **Non-ionic low-osmolar (LOCM)**: Standard of care
- **Non-ionic iso-osmolar (IOCM)**: For high-risk patients

### Phases of Enhancement
| Phase | Timing | Best For |
|-------|--------|----------|
| Non-contrast | Before injection | Hemorrhage, calcifications, stones |
| Arterial | 20-30 seconds | Arteries, hypervascular tumors |
| Portal venous | 60-70 seconds | Most abdominal imaging |
| Delayed | 3-5+ minutes | Kidneys/ureters, some tumors |

### Contrast Reactions
- **Mild**: Hives, itching, nausea (1-3%)
- **Moderate**: Bronchospasm, significant hypotension (<0.5%)
- **Severe**: Laryngeal edema, cardiovascular collapse (0.01-0.02%)

## Radiation Dose Concepts

### Dose Metrics
- **CTDIvol**: Dose to a standardized phantom (mGy)
- **DLP (Dose-Length Product)**: CTDIvol × scan length (mGy·cm)
- **Effective Dose**: DLP × conversion factor (mSv)

### Typical Effective Doses
| Examination | Effective Dose (mSv) |
|-------------|---------------------|
| Head CT | 2 |
| Chest CT | 7 |
| Abdomen/Pelvis CT | 10 |
| CT Coronary Angiography | 5-15 |`,
      keyTerms: [
        { term: 'Hounsfield unit', definition: 'CT attenuation scale where water = 0 HU and air = -1000 HU; reflects tissue density' },
        { term: 'pitch', definition: 'Ratio of table movement per rotation to total detector collimation; affects speed and dose' },
        { term: 'filtered back-projection', definition: 'Traditional CT reconstruction algorithm projecting filtered detector data back to image matrix' },
        { term: 'iterative reconstruction', definition: 'Advanced reconstruction method using forward modeling to reduce noise and enable dose reduction' },
        { term: 'CTDIvol', definition: 'Volume CT Dose Index; standardized measure of scanner radiation output in mGy' },
        { term: 'window level', definition: 'The center Hounsfield unit value of the display range; determines brightness' },
        { term: 'window width', definition: 'The range of Hounsfield units displayed; determines contrast' },
      ],
      clinicalNotes: 'Modern MDCT scanners with iterative reconstruction can achieve diagnostic quality at 30-50% lower dose than traditional FBP techniques. Always specify clinical indication to enable appropriate protocol selection.',
    },
    4: {
      level: 4,
      summary: 'Advanced CT techniques including dual-energy CT, cardiac CT, CT perfusion, and AI-assisted applications require understanding of complex acquisition physics, artifact mitigation, and protocol optimization for specific clinical scenarios.',
      explanation: `## Advanced CT Acquisition Techniques

### Dual-Energy CT (DECT)
**Principles:**
- Exploits differential attenuation at different photon energies
- Materials have characteristic energy-dependent attenuation curves
- Can differentiate materials with similar HU on single-energy CT

**Technical Approaches:**
1. **Dual-source**: Two tubes at different kVp (80/140 kVp)
2. **Rapid kVp switching**: Single tube alternating kVp
3. **Dual-layer detector**: Simultaneous acquisition at different detector layers
4. **Split-filter**: Different filtration to halves of beam

**Clinical Applications:**
- Virtual non-contrast images (iodine subtraction)
- Iodine maps and quantification
- Uric acid detection (gout)
- Bone marrow edema
- Material characterization (kidney stones, lung nodules)
- Reduced metal artifact

### Cardiac CT

**Technical Requirements:**
- Temporal resolution <200ms for single-segment reconstruction
- ECG gating or triggering
- Heart rate control (beta-blockade target <60 bpm)
- Nitroglycerin for coronary vasodilation

**Acquisition Modes:**
- **Retrospective gating**: Continuous helical, reconstruct at any cardiac phase, higher dose
- **Prospective triggering**: Sequential axial, predetermined cardiac phase, lower dose
- **High-pitch spiral**: Very fast single heartbeat acquisition (dual-source systems)

**Calcium Scoring:**
- Agatston score: Area × density factor (130-199 HU = 1, 200-299 = 2, 300-399 = 3, ≥400 = 4)
- Percentiles compared to age/sex-matched populations
- CAC = 0: Very low risk; CAC ≥400: High risk

### CT Perfusion

**Technique:**
- Repeated scanning of tissue during contrast bolus
- Time-attenuation curves generated for each pixel
- Deconvolution algorithms calculate perfusion parameters

**Derived Parameters:**
| Parameter | Meaning | Clinical Use |
|-----------|---------|--------------|
| CBF | Cerebral blood flow | Ischemic core definition |
| CBV | Cerebral blood volume | Core vs. penumbra |
| MTT | Mean transit time | Prolonged in ischemia |
| TTP | Time to peak | Delayed in ischemia |
| Tmax | Time to maximum of residue function | >6s defines penumbra |

**Mismatch Concept:**
- Core (irreversibly damaged) vs. penumbra (salvageable)
- CBF/CBV mismatch identifies treatment candidates
- Extended window for thrombectomy (up to 24 hours with favorable imaging)

## Artifact Recognition and Mitigation

### Beam Hardening
- Cause: Preferential absorption of lower-energy photons
- Appearance: Cupping, dark bands between dense structures
- Mitigation: Beam hardening correction, dual-energy techniques

### Photon Starvation
- Cause: Insufficient photons through thick/dense regions
- Appearance: Streak artifacts from highly attenuating structures
- Mitigation: Tube current modulation, iterative reconstruction

### Metal Artifact
- Cause: Beam hardening + photon starvation from metal
- Appearance: Severe streaks, blooming
- Mitigation: Metal artifact reduction (MAR) algorithms, DECT, increased kVp

### Motion Artifact
- Cause: Patient or organ motion during acquisition
- Appearance: Blurring, double contours, streaks
- Mitigation: Faster rotation, gating, patient instruction

### Partial Volume Averaging
- Cause: Voxel contains multiple tissue types
- Appearance: Intermediate density, blurred boundaries
- Mitigation: Thinner slices, targeted reconstructions

## Protocol Optimization

### Automatic Exposure Control (AEC)
- Tube current modulated based on patient attenuation
- Angular modulation: Adjusts for asymmetric anatomy (AP vs. lateral)
- z-axis modulation: Adjusts for varying thickness (shoulders vs. chest)
- Reference image quality parameters determine target noise level

### Size-Based Protocols
- Automated patient sizing from localizer
- Lookup tables for technique based on lateral width or cross-sectional area
- Pediatric-specific protocols with significant dose reduction

### Organ-Based Tube Current Modulation
- Reduce dose to radiosensitive organs (breast, thyroid, lens)
- Tube current decreased during anterior arc
- Maintains image quality for diagnostic structures

## Advanced Applications

### CT Colonography (Virtual Colonoscopy)
- Bowel preparation + distension with CO2
- Prone and supine acquisitions
- 3D endoluminal visualization
- Computer-aided detection (CAD) for polyps
- Sensitivity comparable to optical colonoscopy for large polyps

### CT Angiography (CTA)
- Bolus tracking or test bolus for optimal timing
- Narrow collimation for resolution
- High pitch or ECG-gating for thoracic aorta
- Post-processing: MIP, VRT, centerline analysis

### CT-Guided Interventions
- Real-time fluoroscopic mode
- Needle tracking and trajectory planning
- Biopsies, drainages, ablations
- Radiation protection considerations for operators`,
      keyTerms: [
        { term: 'dual-energy CT', definition: 'CT technique acquiring data at two energy levels to enable material characterization and virtual monoenergetic imaging' },
        { term: 'retrospective gating', definition: 'Cardiac CT technique acquiring continuous data with ECG recording for reconstruction at any cardiac phase' },
        { term: 'Agatston score', definition: 'Coronary artery calcium quantification method multiplying plaque area by density-weighted factor' },
        { term: 'CT perfusion', definition: 'Dynamic CT technique measuring tissue blood flow, volume, and transit time during contrast passage' },
        { term: 'beam hardening', definition: 'Artifact from preferential absorption of low-energy photons causing cupping or dark bands' },
        { term: 'tube current modulation', definition: 'Automatic adjustment of mA based on patient attenuation to optimize dose while maintaining image quality' },
        { term: 'metal artifact reduction', definition: 'Algorithms correcting for streak artifacts from metallic implants using interpolation or iterative techniques' },
      ],
      clinicalNotes: 'When ordering cardiac CT, ensure appropriate heart rate control and renal function assessment. For CT perfusion in stroke, communicate timing requirements - door-to-imaging and imaging-to-interpretation times directly impact patient outcomes.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art CT encompasses photon-counting detector technology, spectral imaging, AI-driven reconstruction and interpretation, ultra-high-resolution applications, and sophisticated dose optimization frameworks integrated into precision medicine workflows.',
      explanation: `## Photon-Counting CT

### Technology Principles
- Direct conversion detectors (CdTe, CdZnTe)
- Individual photon detection with energy discrimination
- Multiple energy thresholds (4-8 bins typical)
- Energy-integrating vs. photon-counting detector comparison:
  - No electronic noise contribution
  - Improved spatial resolution (smaller effective pixel size)
  - Native spectral capability
  - Reduced beam hardening

### Current Clinical Implementations
- FDA-cleared systems available (e.g., Siemens NAEOTOM Alpha)
- Improved spatial resolution: <0.2 mm (vs. 0.5 mm conventional)
- Intrinsic spectral capability without dose penalty
- K-edge imaging potential (gadolinium, gold nanoparticles)

### Clinical Advantages
- Ultra-high-resolution imaging (temporal bone, coronary stents, lung parenchyma)
- Improved low-contrast detectability at reduced dose
- Single-acquisition multi-energy imaging
- Virtual monoenergetic images at any keV
- Material decomposition without acquisition trade-offs

### Current Limitations
- Count rate limitations at high flux (pile-up)
- Increased cost
- Limited availability
- Workflow integration challenges

## Advanced Spectral Applications

### Virtual Monoenergetic Imaging
- Synthesize images at any keV (40-200 keV typical range)
- Low keV (40-70): Increased iodine contrast, more noise
- High keV (100-140): Reduced beam hardening, metal artifact
- Optimal keV varies by application (liver lesions: 40-50 keV; metal artifact: 130+ keV)

### Quantitative Material Decomposition
- Iodine quantification (mg/mL) for perfusion assessment
- Fat quantification in adrenal adenomas
- Calcium content in coronary plaques
- Effective atomic number (Z_eff) for material characterization

### K-Edge Imaging
- Utilizes rapid attenuation change at K-edge energy
- Current agents: Iodine (33 keV), gadolinium (50 keV)
- Research: Gold nanoparticles, bismuth, other high-Z materials
- Molecular imaging potential

## Artificial Intelligence in CT

### Image Reconstruction
- Deep learning image reconstruction (DLIR)
- Vendor implementations: TrueFidelity (GE), AiCE (Canon), Precise Image (Philips)
- Superior noise reduction vs. iterative reconstruction
- Maintains or improves spatial resolution
- Enables significant dose reduction (up to 50-70%)

### Automated Image Analysis
**FDA-Cleared Applications:**
- Coronary artery calcium scoring
- Pulmonary embolism detection
- Intracranial hemorrhage detection
- COVID-19 pneumonia quantification
- Automated coronary stenosis quantification
- Liver lesion detection and characterization

**Emerging Applications:**
- Automated organ segmentation for radiation therapy
- Body composition analysis (muscle, fat, bone)
- Coronary artery disease risk prediction
- Incidental finding detection (osteoporosis, aortic aneurysm)

### Workflow Integration
- AI-based triage and prioritization
- Automated protocoling
- Quality assurance monitoring
- Report generation assistance
- Integration with structured reporting

## Advanced Dose Optimization

### Diagnostic Reference Levels (DRLs)
| Examination | DRL (CTDIvol mGy) | DRL (DLP mGy·cm) |
|-------------|-------------------|------------------|
| Head | 60 | 1000 |
| Chest | 12 | 400 |
| Abdomen/Pelvis | 15 | 700 |
| Lumbar Spine | 35 | 800 |

### Size-Specific Dose Estimates (SSDE)
- CTDIvol adjusted for patient size
- Conversion factors based on effective diameter or water-equivalent diameter
- AAPM Report 204 methodology
- More accurate patient dose estimates

### Organ Dose Estimation
- Monte Carlo-based calculations
- Patient-specific modeling from scout images
- Tracking cumulative organ doses
- Risk estimation models (BEIR VII, NCI calculators)

### Low-Dose CT Lung Screening
- National Lung Screening Trial (NLST) protocol: ≤3 mGy CTDIvol
- Current achievable: <1 mGy with modern technology
- Lung-RADS reporting standardization
- Annual screening for high-risk individuals

## Special Populations and Considerations

### Pediatric CT Optimization
- Image Gently campaign protocols
- Size-based technique charts (weight or cross-sectional area)
- Lower kVp for smaller patients (80-100 kVp)
- Justification - consider alternatives (US, MRI)
- Organ-based dose modulation for breast, gonads, thyroid

### Pregnancy
- Fetal dose estimation: Monte Carlo-based calculators
- Conceptus dose by scan region and gestational age
- Threshold for deterministic effects: ~100 mGy (never exceeded in diagnostic CT)
- Stochastic risk: ~0.1% excess cancer risk per 10 mGy
- Clinical decision: Document risk-benefit discussion
- Consider lead apron for emotional comfort (minimal actual protection from scatter)

### Renal Impairment and Contrast
**CIN Prevention Strategies:**
- eGFR-based risk stratification (ACR/NKF guidelines)
- Volume expansion with isotonic saline
- Low/iso-osmolar contrast agents
- Minimize contrast volume
- Consider alternatives (non-contrast CT, MRI with group II agents, US)

**Guidelines (ACR-NKF Consensus):**
- eGFR ≥30: Standard IV contrast (outpatient)
- eGFR 30-44: Individual risk assessment, prophylactic hydration
- eGFR <30: Alternative imaging or risk-benefit discussion, emergent use acceptable

## Quality Management

### ACR CT Accreditation
- Annual physicist QC
- Technical assessment
- Clinical image quality review
- Radiation dose index registry participation

### Dose Monitoring Programs
- DICOM dose structured reports
- Automated extraction and tracking
- Comparison to DRLs
- Alert systems for outliers
- Population and trend analysis

### Appropriateness Criteria
- ACR Appropriateness Criteria integration
- Clinical decision support (CDS)
- CMS mandate for advanced imaging
- Documentation requirements

## Emerging Technologies

### Ultra-High-Resolution CT
- 0.25 mm detector elements (vs. 0.5-0.625 conventional)
- Photon-counting systems approaching 0.15 mm
- Applications: Temporal bone, coronary stents, lung nodules
- Trade-off: Noise increase requires dose management

### Wide-Detector CT
- 256-320 detector rows
- Single-rotation whole-organ coverage (16 cm z-axis)
- Reduced motion artifacts
- Applications: Cardiac, perfusion, dynamic studies
- Cone-beam artifact management at edges

### Grating-Based Interferometry
- Phase-contrast imaging capability
- Dark-field imaging for microstructural information
- Lung imaging application (alveolar disease)
- Research phase: Clinical trials ongoing`,
      keyTerms: [
        { term: 'photon-counting detector', definition: 'CT detector technology counting individual photons with energy discrimination, enabling spectral imaging without dose penalty' },
        { term: 'deep learning image reconstruction', definition: 'AI-based reconstruction using neural networks trained on large datasets to achieve superior noise reduction and image quality' },
        { term: 'virtual monoenergetic imaging', definition: 'Spectral CT post-processing generating images simulating acquisition at specific X-ray energies' },
        { term: 'K-edge imaging', definition: 'Spectral technique exploiting rapid attenuation change at element-specific K-edge energy for material detection' },
        { term: 'SSDE', definition: 'Size-Specific Dose Estimate; CTDIvol adjusted for patient size to estimate actual patient dose' },
        { term: 'Lung-RADS', definition: 'Lung CT Screening Reporting and Data System; standardized reporting framework for lung cancer screening CT' },
        { term: 'contrast-induced nephropathy', definition: 'Acute kidney injury following iodinated contrast administration; risk stratified by baseline renal function' },
      ],
      clinicalNotes: `Key implementation considerations for advanced CT:
1. Photon-counting CT offers transformative potential but requires workflow adaptation and operator training
2. AI applications require validation on local population and integration with PACS/RIS
3. Dual-energy CT should be considered routine for abdominal imaging given virtual non-contrast capability
4. Dose tracking infrastructure is essential for quality management and regulatory compliance
5. Low-dose lung cancer screening requires systematic program with quality assurance and results management
6. For CT perfusion in stroke, ensure rapid acquisition-to-interpretation pathway - every minute counts`,
    },
  },

  physicsExplanation: [
    {
      level: 1,
      content: 'A CT scanner takes lots of X-ray pictures while spinning around you, then a computer puts them together like puzzle pieces.',
    },
    {
      level: 3,
      content: 'CT acquires volumetric data through helical rotation of an X-ray tube around the patient. Detectors measure transmitted radiation, and filtered back-projection or iterative algorithms reconstruct cross-sectional images with Hounsfield unit values representing tissue attenuation.',
    },
    {
      level: 5,
      content: 'Modern MDCT employs sub-second rotation times, multi-row detector arrays (up to 320 rows), and advanced reconstruction algorithms (model-based iterative, deep learning) to achieve submillimeter isotropic resolution. Spectral CT via dual-energy or photon-counting detectors enables material decomposition and virtual monoenergetic imaging.',
    },
  ],

  radiation: {
    hasRadiation: true,
    typicalDose: {
      value: 7,
      unit: 'mSv',
      range: { min: 1, max: 20 },
    },
    equivalentTo: 'Chest CT: about 2-3 years of natural background radiation',
    organDose: [
      { organ: 'Breast (chest CT)', dose: 20, unit: 'mGy' },
      { organ: 'Lens (head CT)', dose: 50, unit: 'mGy' },
      { organ: 'Thyroid (neck CT)', dose: 30, unit: 'mGy' },
    ],
    riskCategory: 'moderate',
    ageConsiderations: 'Pediatric patients have 2-3x higher radiation risk; always use size-adjusted protocols',
    pregnancyRisk: 'Avoid unless clinically essential; fetal dose depends on scan region (minimal for head CT, higher for abdomen/pelvis)',
  },

  contrastAgents: [
    {
      name: 'Iohexol (Omnipaque)',
      type: 'iodinated',
      route: 'intravenous',
      indications: ['Vascular imaging', 'Tumor detection', 'Organ enhancement', 'CT angiography'],
      contraindications: ['Severe prior contrast reaction', 'Untreated hyperthyroidism', 'Severe renal impairment (relative)'],
      adverseReactions: {
        mild: ['Warmth sensation', 'Nausea', 'Metallic taste', 'Hives'],
        moderate: ['Bronchospasm', 'Facial edema', 'Symptomatic hypotension'],
        severe: ['Anaphylaxis', 'Cardiac arrest', 'Pulmonary edema', 'Seizures'],
      },
      renalConsiderations: 'Check eGFR before administration; consider hydration protocol if eGFR 30-60',
      premedication: 'For prior mild-moderate reactions: prednisone 50mg at 13, 7, and 1 hour prior + diphenhydramine 50mg 1 hour prior',
    },
    {
      name: 'Oral contrast',
      type: 'iodinated',
      route: 'oral',
      indications: ['Bowel opacification', 'GI tract visualization'],
      contraindications: ['Suspected bowel perforation (use water-soluble)', 'Aspiration risk'],
      adverseReactions: {
        mild: ['Diarrhea', 'Nausea', 'Cramping'],
        moderate: ['Vomiting'],
        severe: ['Aspiration'],
      },
    },
  ],

  contraindications: [
    {
      condition: 'Previous severe contrast reaction',
      type: 'absolute',
      rationale: 'High risk of repeat anaphylaxis',
      alternative: 'Non-contrast CT, MRI, or US',
      safetyConcern: 'Life-threatening allergic reaction',
    },
    {
      condition: 'Pregnancy',
      type: 'relative',
      rationale: 'Radiation exposure to fetus; contrast crosses placenta',
      alternative: 'US or MRI when feasible',
      safetyConcern: 'Fetal radiation exposure and potential contrast effects',
    },
    {
      condition: 'Severe renal impairment (eGFR <30)',
      type: 'relative',
      rationale: 'Increased risk of contrast-induced nephropathy',
      alternative: 'Non-contrast CT, US, or MRI with group II gadolinium agents',
      safetyConcern: 'Acute kidney injury',
    },
    {
      condition: 'Untreated hyperthyroidism',
      type: 'relative',
      rationale: 'Iodinated contrast may trigger thyroid storm',
      alternative: 'Non-contrast imaging or alternative modality',
      safetyConcern: 'Thyrotoxic crisis',
    },
  ],

  preparation: {
    fastingRequired: true,
    fastingDuration: '4 hours for contrast-enhanced studies',
    hydration: 'Well-hydrated, especially for contrast studies',
    medications: {
      hold: ['Metformin (hold 48h after contrast if eGFR <45)'],
      continue: ['Most routine medications'],
      premedication: ['Steroid/antihistamine protocol for prior contrast reactions'],
    },
    clothing: 'Change into gown; remove all items over scan area',
    jewelry: 'Remove all jewelry, metal objects, and body piercings in scan area',
    implants: ['Most implants OK', 'Notify staff of pacemakers/defibrillators'],
    contrast: {
      labsRequired: ['Creatinine or eGFR for IV contrast'],
      eGFRCutoff: 30,
      diabeticInstructions: 'Hold metformin for 48 hours after contrast if renal impairment present',
    },
    duration: '10-30 minutes depending on study type',
    specialInstructions: [
      'Arrive 30 minutes early for contrast studies',
      'Drink oral contrast as instructed if provided',
      'Inform staff of allergies, kidney problems, or diabetes',
      'May need to hold breath briefly during scanning',
    ],
  },

  strengths: [
    'Excellent spatial resolution',
    'Fast acquisition (seconds to minutes)',
    'Superior bone and lung detail',
    'Wide availability',
    'Cross-sectional and 3D imaging',
    'Good for emergency evaluation',
    'Can be performed on most patients',
    'Excellent for vascular imaging with contrast',
  ],

  limitations: [
    'Ionizing radiation exposure',
    'Limited soft tissue contrast without contrast',
    'Iodinated contrast risks (allergy, nephrotoxicity)',
    'Metal artifact from implants',
    'Higher cost than X-ray',
    'Not portable',
    'Motion artifacts in uncooperative patients',
  ],

  commonIndications: [
    { indication: 'Acute stroke evaluation', urgency: 'emergent', bodyRegion: 'head' },
    { indication: 'Pulmonary embolism', urgency: 'emergent', bodyRegion: 'chest' },
    { indication: 'Trauma evaluation', urgency: 'emergent', bodyRegion: 'whole-body' },
    { indication: 'Acute abdominal pain', urgency: 'urgent', bodyRegion: 'abdomen' },
    { indication: 'Cancer staging', urgency: 'routine', bodyRegion: 'chest' },
    { indication: 'Kidney stones', urgency: 'urgent', bodyRegion: 'abdomen' },
    { indication: 'Aortic dissection', urgency: 'emergent', bodyRegion: 'chest' },
    { indication: 'Coronary artery evaluation', urgency: 'routine', bodyRegion: 'chest' },
  ],

  comparisonWithOtherModalities: [
    {
      modality: 'x-ray',
      comparison: 'CT provides cross-sectional images with far superior detail but uses 10-100x more radiation',
      preferWhen: 'X-ray is inconclusive or cross-sectional anatomy is required',
    },
    {
      modality: 'mri',
      comparison: 'MRI provides superior soft tissue contrast without radiation but takes longer and is more expensive',
      preferWhen: 'Detailed soft tissue, brain, or musculoskeletal evaluation without urgency',
    },
    {
      modality: 'ultrasound',
      comparison: 'US has no radiation and is portable but cannot see through bone or gas and is operator-dependent',
      preferWhen: 'Pregnant patients, pediatrics, real-time guidance, or initial abdominal evaluation',
    },
    {
      modality: 'pet',
      comparison: 'PET-CT combines metabolic and anatomic information for cancer staging but involves more radiation and is more expensive',
      preferWhen: 'Cancer staging, treatment response assessment, or metabolic characterization needed',
    },
  ],

  costCategory: 'moderate',
  availability: 'widespread',

  media: [
    {
      id: 'ct-scanner-diagram',
      type: 'diagram',
      filename: 'ct-scanner-components.svg',
      title: 'CT Scanner Components',
      description: 'Diagram showing gantry, detector array, table, and control systems',
    },
    {
      id: 'ct-window-levels',
      type: 'diagram',
      filename: 'ct-window-settings.svg',
      title: 'CT Window/Level Settings',
      description: 'Comparison of brain, bone, lung, and soft tissue windows',
    },
  ],

  citations: [
    {
      id: 'bushberg-ct',
      type: 'textbook',
      title: 'The Essential Physics of Medical Imaging',
      authors: ['Bushberg, J.T.', 'Seibert, J.A.', 'Leidholdt, E.M.', 'Boone, J.M.'],
      source: 'Lippincott Williams & Wilkins',
      chapter: '10-13',
    },
    {
      id: 'acr-ct-protocols',
      type: 'website',
      title: 'ACR-AAPM Technical Standard for CT',
      source: 'American College of Radiology',
      url: 'https://www.acr.org/Clinical-Resources/Practice-Parameters-and-Technical-Standards',
    },
  ],

  crossReferences: [
    { targetId: 'radiology-xray-basics', targetType: 'topic', relationship: 'related', label: 'X-Ray Basics' },
    { targetId: 'radiology-radiation-safety', targetType: 'topic', relationship: 'see-also', label: 'Radiation Safety' },
    { targetId: 'radiology-common-findings', targetType: 'topic', relationship: 'related', label: 'Common Findings' },
    { targetId: 'radiology-imaging-preparation', targetType: 'topic', relationship: 'see-also', label: 'Imaging Preparation' },
  ],

  tags: {
    systems: ['neurological', 'cardiovascular', 'respiratory', 'gastrointestinal', 'musculoskeletal'],
    topics: ['radiology', 'imaging', 'diagnostics', 'emergency medicine'],
    keywords: ['CT scan', 'computed tomography', 'CAT scan', 'cross-sectional imaging', 'contrast'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'radiology', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ctScan;
