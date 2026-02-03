/**
 * MRI (Magnetic Resonance Imaging) - Comprehensive Educational Content
 *
 * Covers the principles, applications, safety, and clinical uses of
 * magnetic resonance imaging.
 */

import { RadiologyModalityContent, ContrastAgent, ImagingContraindication } from './types';

export const mri: RadiologyModalityContent = {
  id: 'radiology-mri',
  type: 'concept',
  name: 'MRI (Magnetic Resonance Imaging)',
  alternateNames: ['Magnetic Resonance Imaging', 'MR', 'NMR Imaging', 'Magnetic Resonance'],

  imagingMetadata: {
    modality: 'mri',
    alternativeNames: ['MR scan', 'Magnetic resonance', 'NMR imaging'],
    yearIntroduced: 1977,
    principleType: 'magnetic-resonance',
  },

  levels: {
    1: {
      level: 1,
      summary: 'MRI uses powerful magnets and radio waves (not X-rays) to take detailed pictures inside your body, especially good for seeing soft parts like your brain and muscles.',
      explanation: `MRI is like a very special camera that uses magnets instead of light to take pictures inside your body. The best part? It doesn't use any X-rays or radiation!

**How does MRI work?**
Think of your body as being made of tiny magnets (they're actually hydrogen atoms in the water inside you). The MRI machine has a super-strong magnet that lines up all these tiny magnets in your body. Then it sends radio waves - like the ones that play music on the radio - to make these tiny magnets wobble. When they wobble back, they send signals that a computer turns into pictures.

**What happens during an MRI?**
1. You change into a hospital gown and remove anything metal (watches, jewelry, glasses)
2. You lie down on a padded table
3. The table slides you into a big tube (like going into a tunnel)
4. You'll hear loud knocking and buzzing sounds - that's normal! You'll get headphones or earplugs
5. You need to lie very still, sometimes for 30-60 minutes
6. You can talk to the technologist through a microphone

**What can MRI see really well?**
- Your brain and spinal cord
- Muscles, tendons, and ligaments (like when you sprain your knee)
- Organs like your heart and liver
- Joints and cartilage
- Problems with discs in your back

**Is it safe?**
MRI is very safe because it doesn't use radiation like X-rays. But the magnet is super strong, so you can't have any metal on you or inside you (like some medical implants).`,
      keyTerms: [
        { term: 'MRI', definition: 'A machine that uses magnets and radio waves to take pictures inside your body' },
        { term: 'magnet', definition: 'Something that can attract or push away certain metals; MRI uses a very powerful magnet' },
        { term: 'radio waves', definition: 'Invisible waves of energy - the same type used by radios, but MRI uses them to make pictures' },
      ],
      analogies: [
        'The MRI machine is like a giant magnet that can "see" the water inside your body.',
        'Getting an MRI is like lying inside a really loud, giant tube - but it\'s taking amazing pictures the whole time!',
        'The banging sounds are like knocking on a door - the machine is "asking" your body to send back signals.',
      ],
      examples: [
        'When someone hurts their knee playing sports, an MRI can show if they tore a ligament.',
        'Doctors use brain MRIs to check for problems like tumors or to see how the brain is developing.',
        'An MRI of your spine can show if a disc is pressing on your nerves and causing back pain.',
      ],
    },
    2: {
      level: 2,
      summary: 'MRI uses strong magnetic fields and radiofrequency pulses to image hydrogen atoms in body water and fat, producing excellent soft tissue contrast without ionizing radiation.',
      explanation: `## What Makes MRI Special?

MRI (Magnetic Resonance Imaging) creates detailed images of soft tissues like muscles, brain, and organs much better than X-rays or CT scans. And it does this without any radiation!

## How MRI Works - The Basics

**The Key Components:**
- A powerful superconducting magnet (typically 1.5 or 3 Tesla)
- Radiofrequency (RF) coils that send and receive signals
- Gradient coils that make magnetic field variations
- A computer to process signals into images

**The Process:**
1. **Alignment**: The strong magnet aligns hydrogen atoms (protons) in your body
2. **Excitation**: RF pulses tip these protons out of alignment
3. **Relaxation**: Protons return to alignment, releasing energy
4. **Detection**: Coils detect the released energy as signals
5. **Image creation**: Computer converts signals to images

## Understanding MRI Images

**Different Image Types:**
| Sequence | Fluid Appears | Fat Appears | Best For |
|----------|--------------|-------------|----------|
| T1-weighted | Dark | Bright | Anatomy, fat |
| T2-weighted | Bright | Less bright | Fluid, edema, pathology |
| FLAIR | Dark | Variable | Brain lesions (CSF suppressed) |
| STIR | Bright | Dark | Bone marrow edema |

**What Different Signals Mean:**
- Tissues with more water/fluid appear bright on T2 images
- Fat appears bright on T1 images
- Inflammation and tumors often show increased T2 signal

## When is MRI Used?

**Excellent For:**
- Brain and spinal cord problems
- Joint injuries (meniscus tears, ligament damage)
- Soft tissue tumors
- Heart muscle and valves
- Liver, kidney, and other abdominal organs
- Blood vessel imaging (MRA)

**Not Ideal For:**
- Lungs (air doesn't give signal)
- Bone fractures (CT or X-ray better for cortical bone)
- Patients who can't lie still
- Claustrophobic patients (without support)

## MRI vs CT

| Feature | MRI | CT |
|---------|-----|-----|
| Radiation | None | Yes |
| Soft tissue contrast | Excellent | Good |
| Bone detail | Limited | Excellent |
| Scan time | Long (30-60 min) | Fast (5-10 min) |
| Metal implants | Often contraindicated | Usually OK |
| Cost | Higher | Lower |
| Availability | Less available | Widely available |

## MRI Contrast

**Gadolinium-based contrast agents:**
- Injected into a vein
- Makes blood vessels and abnormal tissue brighter
- Useful for tumors, infections, and inflammation
- Generally very safe
- Caution needed in severe kidney disease`,
      keyTerms: [
        { term: 'Tesla', definition: 'The unit measuring magnetic field strength; MRI machines are usually 1.5 or 3 Tesla' },
        { term: 'T1-weighted', definition: 'An MRI image type where fat appears bright and fluid appears dark', pronunciation: 'tee-one' },
        { term: 'T2-weighted', definition: 'An MRI image type where fluid and inflammation appear bright', pronunciation: 'tee-two' },
        { term: 'radiofrequency', definition: 'A type of electromagnetic wave used to excite hydrogen atoms during MRI' },
        { term: 'gadolinium', definition: 'A metal used as contrast agent in MRI to highlight certain tissues', pronunciation: 'gad-oh-LIN-ee-um' },
        { term: 'claustrophobia', definition: 'Fear of enclosed spaces, which can make MRI difficult for some patients', pronunciation: 'claws-tro-FOH-bee-ah' },
      ],
      analogies: [
        'The MRI magnet is so strong it would pull a car across a room - that\'s why no metal is allowed!',
        'T1 and T2 images are like different filters on a camera - same picture, different information highlighted.',
        'MRI contrast is like a highlighter pen for tissues - makes certain things stand out.',
      ],
    },
    3: {
      level: 3,
      summary: 'MRI exploits nuclear magnetic resonance of hydrogen protons, using RF pulse sequences and spatial encoding gradients to produce images weighted by T1, T2, and proton density relaxation parameters.',
      explanation: `## MRI Physics Fundamentals

### Nuclear Magnetic Resonance Principles
- Hydrogen nuclei (protons) possess intrinsic spin and magnetic moment
- In external magnetic field (B0), protons align parallel or antiparallel
- Net magnetization vector (M0) develops along B0 direction
- Protons precess at Larmor frequency: ω = γB0 (γ = 42.58 MHz/T for ¹H)

### Excitation and Relaxation
**RF Excitation:**
- 90° pulse tips magnetization into transverse plane
- 180° pulse inverts magnetization (used in spin-echo sequences)
- Protons precess in phase immediately after excitation

**Relaxation Processes:**
1. **T1 (Longitudinal/Spin-Lattice)**
   - Recovery of longitudinal magnetization
   - Energy transfer to surrounding lattice
   - T1 times: CSF ~4000ms, Gray matter ~900ms, White matter ~600ms, Fat ~250ms

2. **T2 (Transverse/Spin-Spin)**
   - Decay of transverse magnetization
   - Dephasing from spin-spin interactions
   - Always T2 < T1
   - T2 times: CSF ~2000ms, Gray matter ~100ms, White matter ~80ms

3. **T2* (Effective T2)**
   - Includes B0 inhomogeneity effects
   - T2* < T2
   - Basis for gradient echo imaging

### Spatial Encoding

**Gradient Coils:**
- Slice selection gradient (Gz): Selects imaging plane
- Frequency-encoding gradient (Gx): Creates position-dependent frequency
- Phase-encoding gradient (Gy): Creates position-dependent phase
- K-space: Spatial frequency domain where data is collected

## Common Pulse Sequences

### Spin Echo (SE)
- 90° - TE/2 - 180° - TE/2 - signal
- 180° pulse refocuses T2* dephasing
- True T2 weighting
- Reduced susceptibility artifacts

### Fast Spin Echo (FSE/TSE)
- Multiple 180° refocusing pulses (echo train)
- Echo train length (ETL) determines speed
- Blurring with long ETL
- Standard workhorse sequence

### Gradient Echo (GRE)
- Uses gradient reversal instead of 180° pulse
- T2* weighting (sensitive to susceptibility)
- Faster than spin echo
- Applications: MRA, susceptibility-weighted imaging

### Inversion Recovery
- 180° - TI - 90° - TE - signal
- **STIR** (TI ~150ms): Fat suppression
- **FLAIR** (TI ~2500ms): CSF suppression
- **MPRAGE/IR-GRE**: High-resolution T1 anatomy

## Image Contrast

### Weighting Factors
| Parameter | T1W | T2W | PD |
|-----------|-----|-----|-----|
| TR | Short (<600ms) | Long (>2000ms) | Long |
| TE | Short (<20ms) | Long (>80ms) | Short |

### Tissue Signal Intensity
| Tissue | T1W | T2W |
|--------|-----|-----|
| Fat | Bright | Intermediate |
| Fluid/CSF | Dark | Bright |
| Muscle | Intermediate | Dark |
| White matter | Bright | Dark |
| Gray matter | Intermediate | Intermediate |
| Edema/Tumor | Dark | Bright |

## Advanced Techniques

### Diffusion-Weighted Imaging (DWI)
- Sensitized to water molecule motion
- b-value determines diffusion weighting
- ADC map quantifies diffusion coefficient
- Critical for acute stroke (cytotoxic edema restricts diffusion)

### Perfusion Imaging
- **DSC-MRI**: Dynamic susceptibility contrast (first pass)
- **DCE-MRI**: Dynamic contrast enhanced (permeability)
- **ASL**: Arterial spin labeling (no contrast needed)

### MR Angiography (MRA)
- **TOF (Time of Flight)**: Flow-related enhancement
- **PC (Phase Contrast)**: Velocity-encoded
- **CE-MRA**: Contrast-enhanced (arterial phase timing)

### Spectroscopy (MRS)
- Chemical shift-based metabolite detection
- NAA, Choline, Creatine, Lactate
- Applications: Brain tumors, metabolic disorders

## MRI Safety

### Magnetic Field Hazards
- **Projectile risk**: Ferromagnetic objects become missiles
- **Implant heating**: RF absorption in metallic implants
- **Device malfunction**: Pacemakers, cochlear implants

### Safety Classification
- **MR Safe**: No hazards in any MR environment
- **MR Conditional**: Safe under specific conditions
- **MR Unsafe**: Cannot enter MR environment

### Contrast (Gadolinium) Safety
- **NSF (Nephrogenic Systemic Fibrosis)**: Rare, severe fibrosis with renal failure
- Group I (linear) agents: Higher NSF risk - avoid in eGFR <30
- Group II (macrocyclic) agents: Lower risk, preferred
- Gadolinium deposition: Brain and bone, significance uncertain`,
      keyTerms: [
        { term: 'Larmor frequency', definition: 'Precession frequency of protons in magnetic field; proportional to field strength (42.58 MHz/T)' },
        { term: 'T1 relaxation', definition: 'Time constant for recovery of longitudinal magnetization after RF excitation; spin-lattice relaxation' },
        { term: 'T2 relaxation', definition: 'Time constant for decay of transverse magnetization due to spin-spin dephasing' },
        { term: 'k-space', definition: 'Spatial frequency domain where raw MRI data is collected; Fourier transform produces image' },
        { term: 'diffusion-weighted imaging', definition: 'MRI technique sensitized to random water molecule motion; critical for acute stroke detection' },
        { term: 'ADC', definition: 'Apparent Diffusion Coefficient; quantitative map of water diffusivity derived from DWI' },
        { term: 'MR conditional', definition: 'Device safety classification indicating safe use under specified MR conditions' },
      ],
      clinicalNotes: 'DWI is the most sensitive sequence for acute stroke detection (within minutes). Restricted diffusion appears bright on DWI with corresponding dark signal on ADC map. False positives ("T2 shine-through") show bright ADC.',
    },
    4: {
      level: 4,
      summary: 'Advanced MRI encompasses functional imaging, cardiac MRI, musculoskeletal applications, and emerging quantitative techniques, requiring understanding of complex pulse sequence physics and artifact mitigation.',
      explanation: `## Advanced Pulse Sequence Physics

### Echo Planar Imaging (EPI)
- Ultra-fast single-shot acquisition
- Entire k-space in one RF excitation
- Applications: DWI, fMRI, perfusion
- Limitations: Geometric distortion, susceptibility artifacts, limited resolution
- Mitigations: Parallel imaging, multi-shot EPI

### Parallel Imaging
**SENSE (Sensitivity Encoding):**
- Uses coil sensitivity profiles
- Image domain reconstruction
- Reduction factor (R): Speed increase
- g-factor penalty (noise amplification)

**GRAPPA (Generalized Autocalibrating Partial Parallel Acquisition):**
- k-space interpolation
- Auto-calibration signal (ACS) lines
- Less geometry-dependent noise

### Compressed Sensing
- Exploits image sparsity
- Random k-space undersampling
- Iterative reconstruction with sparsity constraints
- Requires incoherent artifacts and sparse representation
- Combined with parallel imaging for greater acceleration

## Functional and Physiological MRI

### Functional MRI (fMRI)
**BOLD (Blood Oxygen Level Dependent) Contrast:**
- Deoxyhemoglobin is paramagnetic, oxyhemoglobin is diamagnetic
- Neural activity → increased blood flow → decreased deoxyhemoglobin → increased T2* signal
- Hemodynamic response function peaks at 5-6 seconds
- EPI acquisition for temporal resolution

**Clinical Applications:**
- Pre-surgical mapping (motor, language)
- Resting state connectivity analysis
- Psychiatric and neurological research

### Diffusion Tensor Imaging (DTI)
- Extension of DWI with multiple gradient directions
- Measures diffusion anisotropy in white matter
- Fractional anisotropy (FA): Degree of directionality
- Tractography: 3D visualization of fiber bundles
- Applications: Brain tumors, trauma, white matter diseases

### MR Spectroscopy (MRS)
**Key Metabolites:**
| Metabolite | Peak (ppm) | Significance |
|------------|------------|--------------|
| NAA | 2.0 | Neuronal marker, decreased in pathology |
| Choline | 3.2 | Membrane turnover, elevated in tumors |
| Creatine | 3.0 | Energy metabolism (often reference) |
| Lactate | 1.3 | Anaerobic metabolism, ischemia |
| Lipid | 0.9-1.3 | Necrosis, high-grade tumors |
| myo-Inositol | 3.6 | Glial marker, dementia |

**Technical Considerations:**
- Single voxel (SVS) vs. chemical shift imaging (CSI)
- Water suppression essential
- Long TE (135-288ms): Cleaner spectra, fewer metabolites
- Short TE (30-35ms): More metabolites, baseline distortion

## Cardiac MRI

### Cardiac Imaging Challenges
- Cardiac motion: ECG gating
- Respiratory motion: Breath-hold or navigator gating
- Fast heart rates: High temporal resolution required
- Blood-myocardium contrast optimization

### Key Sequences
**Cine Imaging (SSFP):**
- Bright blood, excellent contrast
- Assessment of wall motion and function
- Ejection fraction, volumes, mass quantification

**Late Gadolinium Enhancement (LGE):**
- Images acquired 10-15 min post-contrast
- Normal myocardium nulled with TI optimization
- Scar/fibrosis retains gadolinium → bright signal
- Patterns: Ischemic (subendocardial/transmural) vs. non-ischemic

**T1/T2 Mapping:**
- Quantitative tissue characterization
- Native T1: Fibrosis, amyloid, iron
- Post-contrast T1 and ECV: Diffuse fibrosis
- T2: Edema, inflammation

**Perfusion Imaging:**
- First-pass gadolinium
- Stress and rest comparison
- Detection of ischemia

### Flow Quantification
- Phase contrast velocity encoding
- Valvular regurgitation quantification
- Shunt calculations (Qp:Qs)
- 4D flow: Comprehensive flow assessment

## Musculoskeletal MRI

### Cartilage Imaging
- High-resolution 3D sequences
- Fat-suppressed PD or T2 FSE
- Cartilage-specific sequences: dGEMRIC, T2 mapping, T1rho

### Ligament and Tendon Evaluation
- Magic angle artifact at 55° to B0
- High-resolution with small FOV
- Direct and indirect signs of injury

### Bone Marrow
- Normal adult: Yellow (fatty) marrow - T1 bright
- Red marrow: Intermediate signal
- Pathology: T1 dark, T2/STIR bright (edema, tumor, infection)

## Artifact Recognition

### Motion Artifacts
- Ghosting along phase-encode direction
- Mitigation: Faster sequences, gating, saturation bands

### Susceptibility Artifacts
- Signal void and distortion at interfaces
- Worst on GRE sequences
- Metal implants, hemorrhage, air

### Chemical Shift Artifacts
- Fat-water frequency difference (3.5 ppm = 220 Hz at 1.5T)
- Type 1: Spatial misregistration along frequency encode
- Type 2 (India ink): Signal void at fat-water interfaces

### Flow Artifacts
- Signal loss from dephasing
- Pulsation ghosting
- Mitigation: Flow compensation, saturation bands

### Wraparound (Aliasing)
- Anatomy outside FOV appears on opposite side
- Increase FOV, phase oversampling, saturation bands`,
      keyTerms: [
        { term: 'BOLD contrast', definition: 'Blood Oxygen Level Dependent signal change reflecting neural activity through deoxyhemoglobin concentration changes' },
        { term: 'diffusion tensor imaging', definition: 'Extension of DWI measuring direction-dependent diffusion to map white matter tracts' },
        { term: 'SSFP', definition: 'Steady-State Free Precession; balanced GRE sequence producing high signal from fluid, workhorse for cardiac cine imaging' },
        { term: 'late gadolinium enhancement', definition: 'Cardiac MRI technique identifying myocardial scar/fibrosis based on delayed contrast washout' },
        { term: 'parallel imaging', definition: 'Acceleration technique using multiple receiver coils to undersample k-space and reduce scan time' },
        { term: 'ECV', definition: 'Extracellular Volume fraction; quantitative measure of myocardial fibrosis from T1 mapping' },
        { term: 'magic angle artifact', definition: 'Artifactual T2 signal increase in collagen-rich structures oriented 55° to B0' },
      ],
      clinicalNotes: 'When ordering cardiac MRI, specify the clinical question (viability, infiltrative disease, cardiomyopathy characterization) as protocols differ significantly. LGE patterns distinguish ischemic from non-ischemic cardiomyopathy.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art MRI encompasses ultra-high-field imaging, advanced quantitative techniques, AI-enhanced reconstruction and interpretation, and emerging molecular and interventional applications pushing the boundaries of non-invasive diagnosis.',
      explanation: `## Ultra-High-Field MRI (7T and Beyond)

### Clinical 7T MRI
- FDA-cleared for clinical brain and knee imaging
- Increased SNR (proportional to B0)
- Enhanced spatial resolution
- Improved spectroscopy sensitivity
- Better susceptibility contrast (SWI, QSM)

### Technical Challenges at 7T
- **B0 inhomogeneity**: Severe near air-tissue interfaces
- **B1 inhomogeneity**: Standing wave effects, transmit field non-uniformity
- **SAR limitations**: Quadratic increase with field strength
- **Susceptibility artifacts**: Enhanced metal and hemorrhage artifacts

### Mitigation Strategies
- Parallel transmit (pTx): Multi-channel RF transmission
- Dielectric pads: Local field modification
- B0/B1 shimming: Active and passive
- Specialized sequences: Adiabatic pulses

### Current 7T Clinical Applications
- Epilepsy: Small cortical lesions, hippocampal detail
- Multiple sclerosis: Cortical and central vein lesions
- Brain tumors: Enhanced margins, spectroscopy
- Neurodegenerative disease: Iron, microbleeds
- Knee cartilage: Ultra-high-resolution imaging

## Quantitative MRI

### Relaxometry
**T1 Mapping:**
- MOLLI, shMOLLI, saturation recovery
- Native T1: Iron, edema, fibrosis, protein
- Applications: Cardiac, liver (iron quantification)

**T2 Mapping:**
- Multi-echo spin echo approaches
- Myocardial edema detection
- Cartilage assessment

**T2* Mapping:**
- Gradient echo with multiple TEs
- Iron quantification (liver R2*, cardiac T2*)
- R2* = 1/T2* (Hz)

### Quantitative Susceptibility Mapping (QSM)
- Reconstructs underlying susceptibility from phase data
- Iron, calcium, hemorrhage quantification
- Deep brain nuclei visualization
- Applications: Parkinson's, MS, microbleeds

### MR Fingerprinting
- Simultaneous multi-parameter mapping
- Pseudo-randomized acquisition
- Dictionary matching reconstruction
- T1, T2, and other parameters in single acquisition
- Potential for tissue characterization

### Elastography (MRE)
- Measures tissue stiffness
- External mechanical driver creates shear waves
- Phase-contrast imaging of wave propagation
- Inversion algorithms calculate stiffness
- Applications: Liver fibrosis staging (replacing biopsy)

## Artificial Intelligence in MRI

### Reconstruction
**Deep Learning Reconstruction:**
- Noise reduction superior to conventional methods
- Acceleration beyond parallel imaging alone
- Vendor implementations emerging
- Training on high-quality reference images

**Physics-Informed Networks:**
- Combining deep learning with MR physics constraints
- Improved generalization
- Reduced training data requirements

### Image Enhancement
- Super-resolution: Improve effective resolution
- Denoising: Reduce scan time while maintaining quality
- Motion correction: Retrospective artifact reduction
- Synthetic contrast: Generate additional contrasts

### Automated Analysis
**Quantification:**
- Volumetric analysis (brain, cardiac)
- Lesion segmentation (MS, tumors)
- Tractography automation
- Spectroscopy fitting

**Detection:**
- Tumor detection and classification
- White matter hyperintensity quantification
- Cardiac function analysis
- Prostate cancer detection (PI-RADS assistance)

## Emerging Molecular and Metabolic Imaging

### Hyperpolarized MRI
**Dynamic Nuclear Polarization (DNP):**
- 10,000+ fold signal enhancement
- ¹³C-pyruvate: Metabolic imaging
- Real-time metabolism visualization
- Applications: Cancer (Warburg effect), cardiac metabolism

**SEOP (Spin Exchange Optical Pumping):**
- Noble gas hyperpolarization (¹²⁹Xe, ³He)
- Lung ventilation imaging
- Dissolved-phase xenon: Gas exchange

### Chemical Exchange Saturation Transfer (CEST)
- Indirect detection of exchangeable protons
- Endogenous contrast: APT (amide proton transfer)
- Exogenous CEST agents in development
- Applications: pH imaging, glycogen, glucose

### Sodium (²³Na) MRI
- Low sensitivity, short T2
- Specialized hardware required
- Sodium concentration reflects cell viability
- Applications: Cartilage, brain, kidney

## Advanced Clinical Applications

### Prostate MRI (PI-RADS)
**Multiparametric Protocol:**
- T2-weighted: Anatomy, zonal differentiation
- DWI: Core diagnostic sequence
- DCE: Supportive role
- PI-RADS v2.1: Standardized reporting

**Technical Optimization:**
- Endorectal coil: Higher resolution (rarely used now)
- Surface coil: Standard at 3T
- b-values: 1500-2000 s/mm² for improved detection

### Liver MRI (LI-RADS)
**Key Sequences:**
- T1W in/out phase: Fat and iron
- T2W: Lesion characterization
- DWI: Detection sensitivity
- Dynamic post-contrast: Enhancement patterns

**LI-RADS Categories:**
- LR-1 to LR-5: Benign to definite HCC
- LR-M: Malignant, not HCC-specific
- LR-TIV: Tumor in vein

### MR-Guided Interventions
**Advantages:**
- No radiation
- Superior soft tissue visualization
- Real-time feedback
- Multiplanar capability

**Applications:**
- Breast biopsy and localization
- Prostate biopsy (fusion with US)
- Focused ultrasound: Tumor ablation, essential tremor
- Cardiovascular interventions: Emerging

### fMRI in Clinical Practice
**Pre-surgical Mapping:**
- Motor cortex localization
- Language lateralization (Wada replacement)
- Eloquent cortex identification for tumor resection

**Emerging Clinical:**
- Lie detection (research, controversial)
- Pain assessment
- Psychiatric biomarkers

## Future Directions

### Ultra-Low-Field MRI
- 0.05T and below
- Point-of-care imaging
- Reduced cost and infrastructure
- Deep learning enhancement compensates for lower SNR

### Synthetic MRI
- Generate multiple contrasts from single acquisition
- Quantitative maps as byproduct
- Reduced scan time
- Standardization across vendors

### Radiomics and Radiogenomics
- Extraction of quantitative imaging features
- Correlation with genomic profiles
- Prediction of treatment response
- Non-invasive tumor characterization`,
      keyTerms: [
        { term: 'hyperpolarized MRI', definition: 'Technique using externally polarized nuclei (¹³C, ¹²⁹Xe) to achieve dramatic signal enhancement for metabolic imaging' },
        { term: 'parallel transmit', definition: 'Multi-channel RF transmission enabling B1 field optimization at ultra-high field strengths' },
        { term: 'MR fingerprinting', definition: 'Acquisition technique enabling simultaneous quantification of multiple tissue parameters through dictionary matching' },
        { term: 'elastography', definition: 'MRI technique measuring tissue stiffness through shear wave imaging; used for liver fibrosis staging' },
        { term: 'CEST', definition: 'Chemical Exchange Saturation Transfer; technique detecting exchangeable protons for pH and metabolite imaging' },
        { term: 'PI-RADS', definition: 'Prostate Imaging-Reporting and Data System; standardized framework for prostate MRI interpretation' },
        { term: 'LI-RADS', definition: 'Liver Imaging-Reporting and Data System; standardized classification for hepatocellular carcinoma diagnosis' },
      ],
      clinicalNotes: `Key considerations for advanced MRI applications:
1. 7T MRI adds value for specific neurological indications but requires specialized expertise
2. Quantitative techniques (T1/T2 mapping, elastography) increasingly replacing qualitative assessment
3. AI reconstruction enables 50% time reduction while maintaining quality
4. Hyperpolarized ¹³C-pyruvate represents first true metabolic imaging in oncology
5. Standardized reporting systems (PI-RADS, LI-RADS) essential for communication
6. Consider MR-conditional device registries before scanning patients with implants`,
    },
  },

  physicsExplanation: [
    {
      level: 1,
      content: 'MRI uses a powerful magnet to line up the tiny magnets in your body, then radio waves make them send signals that become pictures.',
    },
    {
      level: 3,
      content: 'MRI exploits nuclear magnetic resonance of hydrogen protons. The main magnetic field aligns proton spins; RF pulses tip magnetization into the transverse plane; relaxation processes (T1, T2) generate tissue-specific contrast; spatial encoding gradients localize signals for image reconstruction.',
    },
    {
      level: 5,
      content: 'Modern MRI employs high-field superconducting magnets (1.5-7T), multi-channel receiver arrays, advanced pulse sequences (EPI, SSFP, FSE with variable flip angles), and parallel imaging/compressed sensing for acceleration. Quantitative techniques including relaxometry, diffusion tensor imaging, and MR fingerprinting enable non-invasive tissue characterization.',
    },
  ],

  radiation: {
    hasRadiation: false,
    riskCategory: 'minimal',
    ageConsiderations: 'Safe for all ages; no radiation concerns. Sedation may be needed for young children.',
    pregnancyRisk: 'Generally considered safe, especially after first trimester. Gadolinium avoided in pregnancy.',
  },

  contrastAgents: [
    {
      name: 'Gadolinium-DTPA (Magnevist)',
      type: 'gadolinium',
      route: 'intravenous',
      indications: ['Tumor enhancement', 'Vascular imaging', 'Inflammatory conditions', 'Blood-brain barrier assessment'],
      contraindications: ['Severe renal impairment (Group I agents)', 'Previous gadolinium reaction', 'Pregnancy (relative)'],
      adverseReactions: {
        mild: ['Headache', 'Nausea', 'Injection site coldness', 'Dizziness'],
        moderate: ['Hives', 'Bronchospasm'],
        severe: ['Anaphylaxis (very rare)', 'NSF (with severe renal impairment)'],
      },
      renalConsiderations: 'Group I (linear) agents contraindicated if eGFR <30; Group II (macrocyclic) agents preferred for all patients with renal impairment',
    },
    {
      name: 'Gadoterate (Dotarem) - Group II',
      type: 'gadolinium',
      route: 'intravenous',
      indications: ['CNS imaging', 'Body MRI', 'Preferred for renal impairment'],
      contraindications: ['Previous gadolinium reaction', 'Pregnancy (relative)'],
      adverseReactions: {
        mild: ['Headache', 'Nausea', 'Warmth'],
        moderate: ['Urticaria'],
        severe: ['Anaphylaxis (extremely rare)'],
      },
      renalConsiderations: 'Lowest NSF risk; may be used with caution even in severe renal impairment when benefit outweighs risk',
    },
  ],

  contraindications: [
    {
      condition: 'Non-MR-safe cardiac pacemaker/ICD',
      type: 'absolute',
      rationale: 'Risk of device malfunction, heating, and lead displacement',
      alternative: 'CT, ultrasound, or nuclear medicine imaging',
      safetyConcern: 'Life-threatening device malfunction',
    },
    {
      condition: 'Cochlear implant (most older models)',
      type: 'absolute',
      rationale: 'Contains ferromagnetic components',
      alternative: 'CT for inner ear imaging',
      safetyConcern: 'Device damage and injury',
    },
    {
      condition: 'Ferromagnetic intracranial aneurysm clips',
      type: 'absolute',
      rationale: 'Risk of clip movement and hemorrhage',
      alternative: 'CT angiography',
      safetyConcern: 'Intracranial hemorrhage',
    },
    {
      condition: 'Metallic foreign body in eye',
      type: 'absolute',
      rationale: 'Risk of movement and ocular injury',
      alternative: 'Orbital X-ray to screen, then CT if positive',
      safetyConcern: 'Ocular injury and vision loss',
    },
    {
      condition: 'Severe claustrophobia',
      type: 'relative',
      rationale: 'Patient unable to tolerate enclosed space',
      alternative: 'Sedation, open MRI, or alternative imaging modality',
      safetyConcern: 'Patient distress, incomplete study',
    },
    {
      condition: 'First trimester pregnancy',
      type: 'relative',
      rationale: 'Limited safety data in first trimester',
      alternative: 'Delay until second trimester or use ultrasound',
      safetyConcern: 'Theoretical fetal risks',
    },
  ],

  preparation: {
    fastingRequired: false,
    fastingDuration: 'Varies by study; abdominal MRI may require 4-6 hours fasting',
    hydration: 'Normal hydration unless MRCP (then NPO)',
    medications: {
      hold: ['Usually none required'],
      continue: ['Most medications OK'],
      premedication: ['Anxiolytics for claustrophobia if needed'],
    },
    clothing: 'Change into gown; all metal must be removed',
    jewelry: 'Remove ALL jewelry, watches, piercings, hair clips - even surgical grade metal can be affected',
    implants: ['Must be screened for MR safety', 'Bring implant card if available', 'Many modern implants are MR conditional'],
    duration: '30-90 minutes depending on study',
    specialInstructions: [
      'Complete MRI safety screening questionnaire',
      'Inform staff of all implants, surgeries, and metalwork',
      'Leave wallet, credit cards, and phones outside scan room',
      'You will have a call button to communicate with staff',
      'Remain very still during imaging',
      'Earplugs or headphones provided for noise',
    ],
  },

  strengths: [
    'Excellent soft tissue contrast',
    'No ionizing radiation',
    'Multiplanar imaging capability',
    'Functional and metabolic imaging possible',
    'Superior for brain, spine, and musculoskeletal imaging',
    'Vascular imaging without iodinated contrast',
    'Tissue characterization (quantitative techniques)',
  ],

  limitations: [
    'Long scan times (30-90 minutes)',
    'Loud (up to 110 dB)',
    'Enclosed space (claustrophobia)',
    'Many implant contraindications',
    'Motion sensitive',
    'Higher cost than CT or X-ray',
    'Less available than CT',
    'Poor for lung parenchyma',
    'Less sensitive for acute hemorrhage than CT',
  ],

  commonIndications: [
    { indication: 'Brain tumor evaluation', urgency: 'routine', bodyRegion: 'head' },
    { indication: 'Acute stroke (DWI)', urgency: 'emergent', bodyRegion: 'head' },
    { indication: 'Multiple sclerosis', urgency: 'routine', bodyRegion: 'head' },
    { indication: 'Knee ligament injury', urgency: 'routine', bodyRegion: 'lower-extremity' },
    { indication: 'Spine disc herniation', urgency: 'routine', bodyRegion: 'spine' },
    { indication: 'Liver lesion characterization', urgency: 'routine', bodyRegion: 'abdomen' },
    { indication: 'Cardiac viability assessment', urgency: 'routine', bodyRegion: 'chest' },
    { indication: 'Prostate cancer evaluation', urgency: 'routine', bodyRegion: 'pelvis' },
  ],

  comparisonWithOtherModalities: [
    {
      modality: 'ct',
      comparison: 'CT is faster and better for bone/lungs but uses radiation and has inferior soft tissue contrast',
      preferWhen: 'Emergency situations, lung or bone pathology, or when MRI is contraindicated',
    },
    {
      modality: 'ultrasound',
      comparison: 'US is cheaper, portable, and real-time but is operator-dependent and limited by body habitus',
      preferWhen: 'Initial musculoskeletal screening, pregnancy, or when MRI is unavailable',
    },
    {
      modality: 'pet',
      comparison: 'PET provides metabolic information and is often combined with MRI (PET-MR) for oncology',
      preferWhen: 'Cancer staging requiring both metabolic and anatomic information',
    },
  ],

  costCategory: 'high',
  availability: 'common',

  media: [
    {
      id: 'mri-physics-diagram',
      type: 'diagram',
      filename: 'mri-physics-basics.svg',
      title: 'MRI Signal Generation',
      description: 'Diagram showing proton alignment, RF excitation, and relaxation',
    },
    {
      id: 'mri-sequences',
      type: 'diagram',
      filename: 'mri-sequence-comparison.svg',
      title: 'MRI Sequence Comparison',
      description: 'T1-weighted, T2-weighted, FLAIR, and DWI appearance comparison',
    },
  ],

  citations: [
    {
      id: 'mcrobbie-mri',
      type: 'textbook',
      title: 'MRI from Picture to Proton',
      authors: ['McRobbie, D.W.', 'Moore, E.A.', 'Graves, M.J.', 'Prince, M.R.'],
      source: 'Cambridge University Press',
    },
    {
      id: 'acr-mri-safety',
      type: 'website',
      title: 'ACR Manual on MR Safety',
      source: 'American College of Radiology',
      url: 'https://www.acr.org/Clinical-Resources/Radiology-Safety/MR-Safety',
    },
  ],

  crossReferences: [
    { targetId: 'radiology-ct-scan', targetType: 'topic', relationship: 'related', label: 'CT Scan' },
    { targetId: 'radiology-radiation-safety', targetType: 'topic', relationship: 'see-also', label: 'Radiation Safety' },
    { targetId: 'radiology-imaging-preparation', targetType: 'topic', relationship: 'see-also', label: 'Imaging Preparation' },
  ],

  tags: {
    systems: ['neurological', 'musculoskeletal', 'cardiovascular', 'gastrointestinal'],
    topics: ['radiology', 'imaging', 'diagnostics'],
    keywords: ['MRI', 'magnetic resonance', 'T1', 'T2', 'gadolinium', 'diffusion'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'orthopedics', 'radiology', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default mri;
