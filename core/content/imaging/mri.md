# MRI (Magnetic Resonance Imaging)

## Overview
MRI uses powerful magnets and radio waves to create detailed images of the body's internal structures. Unlike X-rays and CT scans, MRI does not use ionizing radiation. MRI excels at showing soft tissues, including the brain, spinal cord, muscles, tendons, and organs, with exceptional contrast and detail.

---

## How MRI Works

### Level 1: Foundation
MRI uses a very strong magnet and radio waves to take pictures of the inside of your body. There is no radiation involved, making it safe for repeated use.

**Simple analogy**: Think of your body's water molecules as tiny compass needles. The MRI magnet lines them up, then radio waves nudge them. When they snap back to position, they give off signals that create the image.

**Key points**:
- No radiation exposure
- Creates very detailed pictures
- Excellent for soft tissues (muscles, brain, spine)
- The machine is noisy (clicking and banging sounds)
- You lie inside a tube during the scan
- Takes longer than CT (30-60 minutes typically)

### Level 2: Core Understanding
**Basic Physics Simplified**:
1. **Strong magnet** aligns hydrogen atoms in your body
2. **Radio waves** temporarily disturb the alignment
3. **Atoms release energy** as they return to alignment
4. **Signals are detected** and converted to images
5. **Different tissues** return to alignment at different speeds

**Why Hydrogen?**:
- Most abundant atom in the body
- Present in water and fat
- Different tissues contain different amounts
- This creates contrast between structures

**Key Components of MRI**:
- **Main magnet**: Very strong (1.5T or 3T typically)
- **Gradient coils**: Localize the signal (cause noise)
- **RF coils**: Send/receive radio waves
- **Computer**: Processes signals into images

**Field Strength**:
- Measured in Tesla (T)
- Earth's magnetic field: 0.00005 T
- Typical MRI: 1.5T or 3T
- Higher field = better detail (usually)

### Level 3: Clinical Application
**MRI Sequences Explained**:

**T1-weighted Images**:
- Fat appears bright (white)
- Fluid appears dark
- Good for anatomy
- Best for seeing gadolinium contrast

**T2-weighted Images**:
- Fluid appears bright (white)
- Fat appears gray
- Good for pathology (edema, inflammation)
- "Water is bright"

**FLAIR (Fluid Attenuated Inversion Recovery)**:
- Fluid (CSF) is suppressed (dark)
- Pathology remains bright
- Excellent for brain lesions

**Fat Saturation**:
- Suppresses fat signal
- Makes water/edema more visible
- Helps distinguish fat from other bright signals

| Sequence | Fluid | Fat | Uses |
|----------|-------|-----|------|
| T1 | Dark | Bright | Anatomy, post-contrast |
| T2 | Bright | Gray | Pathology, edema |
| FLAIR | Dark | Gray | Brain lesions |
| STIR | Bright | Dark | Bone marrow, edema |

### Level 4: Advanced Mechanisms
**Physics in Depth**:

**Nuclear Magnetic Resonance (NMR)**:
- Hydrogen nuclei (protons) have spin
- In magnetic field, align parallel or anti-parallel
- Slight excess aligns with field (net magnetization)
- RF pulse tips magnetization into transverse plane
- Precession at Larmor frequency generates signal

**Relaxation Times**:
- **T1 (spin-lattice)**: Time to realign with main field
- **T2 (spin-spin)**: Time for signal to decay
- **T2* (T2 star)**: Includes field inhomogeneities

**Image Contrast Determinants**:
- TR (repetition time)
- TE (echo time)
- Flip angle
- Sequence design

**Pulse Sequences**:

| Sequence Type | Description | Clinical Use |
|---------------|-------------|--------------|
| Spin Echo | Basic sequence | General imaging |
| Gradient Echo | Faster, susceptibility effects | Hemorrhage, angiography |
| Fast Spin Echo | Multiple echoes per TR | Routine imaging |
| Echo Planar | Ultra-fast | Diffusion, perfusion |
| Inversion Recovery | Suppresses specific tissues | FLAIR, STIR |

### Level 5: Expert Integration
**Advanced Sequences and Applications**:

**Diffusion-Weighted Imaging (DWI)**:
- Measures water molecule movement
- Restricted diffusion = bright on DWI
- ADC map for quantification
- Essential for acute stroke, tumor cellularity

**Diffusion Tensor Imaging (DTI)**:
- White matter tract visualization
- Fractional anisotropy maps
- Pre-surgical planning

**Perfusion Imaging**:
- Blood flow to tissues
- Dynamic Susceptibility Contrast (DSC)
- Arterial Spin Labeling (ASL) - no contrast needed

**Spectroscopy (MRS)**:
- Chemical composition of tissue
- Tumor grading, metabolic disorders
- NAA, choline, creatine, lactate peaks

**Functional MRI (fMRI)**:
- Brain activity mapping
- BOLD signal (blood oxygen level dependent)
- Pre-surgical planning

---

## Contraindications and Safety

### Level 1: Foundation
Because MRI uses very powerful magnets, certain metal objects and medical devices can be dangerous.

**You CANNOT have an MRI if you have**:
- Certain pacemakers or defibrillators
- Cochlear implants (most)
- Metallic foreign bodies in eyes
- Some older brain aneurysm clips

**You MIGHT be able to have an MRI with**:
- Joint replacements (usually safe)
- Dental work (usually safe)
- Most modern implants (need verification)

**Always tell staff about**:
- Any implants or metal in your body
- Previous surgeries
- Metal work or grinding (eye injury risk)
- Tattoos (may heat up)
- Pregnancy

### Level 2: Core Understanding
**Absolute Contraindications**:

| Device/Object | Risk |
|---------------|------|
| Non-MRI-safe pacemaker | Malfunction, heating, movement |
| Non-MRI-safe ICD | Malfunction, inappropriate shocks |
| Ferromagnetic aneurysm clips | Movement, hemorrhage |
| Metallic intraocular foreign body | Movement, eye injury |
| Cochlear implant (most) | Damage, heating |

**Conditional Safety** (May be safe with precautions):
- MRI-conditional pacemakers/ICDs
- Certain neurostimulators
- Insulin pumps (remove before scan)
- Medication patches with metal backing
- Some stents and filters

**Generally Safe**:
- Joint replacements (titanium)
- Orthopedic hardware (plates, screws)
- Dental work (fillings, crowns)
- Surgical staples/clips (most)
- Intrauterine devices (IUDs)

### Level 3: Clinical Application
**Pacemaker and ICD Considerations**:

**MRI-Conditional Devices**:
- Specifically designed for MRI safety
- Require specific conditions (field strength, SAR limits)
- Need device interrogation before and after
- Continuous monitoring during scan
- Must be programmed to MRI mode

**Legacy (Non-conditional) Devices**:
- Generally contraindicated
- Some centers scan under strict protocols
- Requires specialized cardiologist involvement
- Emergency equipment must be available

**Pregnancy**:
- No proven harmful effects
- Generally avoided in first trimester if possible
- When benefits outweigh risks, can proceed
- Gadolinium crosses placenta - avoid if possible

**Implant Verification**:
- MRIsafety.com database
- Manufacturer documentation
- Implant card from patient
- Prior imaging may show device

### Level 4: Advanced Mechanisms
**Physical Hazards**:

**Projectile Risk**:
- Ferromagnetic objects accelerate toward magnet
- 5 Gauss line defines controlled area
- Screening for metal essential
- MRI-compatible equipment only in scanner room

**Heating (RF)**:
- Specific Absorption Rate (SAR) limits
- Loops of wire/tissue can concentrate energy
- Tattoos with metallic ink may heat
- Burns possible from skin-to-skin contact

**Gradient-Related**:
- Peripheral nerve stimulation
- Acoustic noise (requires hearing protection)
- Possible vertigo/nausea in high-field

**Quench**:
- Sudden loss of superconductivity
- Rapid helium boil-off
- Oxygen displacement
- Emergency ventilation systems required

### Level 5: Expert Integration
**MRI in Special Situations**:

**Critically Ill Patients**:
- MRI-compatible monitoring equipment
- Specialized ventilators
- Longer transport time
- Limited access to patient

**Pediatrics**:
- May require sedation or anesthesia
- "Feed and swaddle" for infants
- Mock scanner programs
- Shorter protocols when possible

**Claustrophobic Patients**:
- Explanation and reassurance
- Feet-first positioning when possible
- Mirrors to see out
- Anxiolytics (short-acting)
- Open MRI (lower field strength)
- Consider CT as alternative

**Contrast Allergy History**:
- Gadolinium reactions are rare
- Cross-reactivity with iodine contrast unlikely
- Premedication for prior gadolinium reactors
- MRI contrast reactions typically milder

---

## Claustrophobia Management

### Level 1: Foundation
The MRI machine is a tube that you lie inside. Some people feel anxious or uncomfortable in enclosed spaces.

**Tips for coping**:
- Ask about the scanner beforehand
- Bring a family member for support
- Keep your eyes closed during the scan
- Listen to music (headphones provided)
- Focus on breathing slowly
- Remember you can speak to the technologist anytime
- Ask about medication to help you relax

### Level 2: Core Understanding
**Before the Scan**:
- Tour the scanner facility if possible
- Ask how wide the bore (opening) is
- Discuss positioning options (feet first vs. head first)
- Request a blanket or eye mask
- Consider anti-anxiety medication (discuss with doctor)

**During the Scan**:
- You have a call button at all times
- Technologist monitors you continuously
- You can communicate through intercom
- Scan can be stopped at any time
- Focus on slow, steady breathing
- Some scans have brief pauses

**Alternative Options**:
| Option | Pros | Cons |
|--------|------|------|
| Open MRI | Less enclosed | Lower image quality |
| Wide-bore MRI | More room, good quality | Limited availability |
| Sedation | Very effective | Requires driver, monitoring |
| Anxiolytic medication | Can help mild anxiety | May not be enough for severe |

### Level 3: Clinical Application
**Pharmacological Options**:

**Anxiolytics**:
- Lorazepam 0.5-1mg PO 30-60 min before
- Diazepam 5-10mg PO
- Alprazolam 0.25-0.5mg
- Patient needs escort, cannot drive

**Moderate Sedation**:
- For severe claustrophobia
- Requires monitoring
- Recovery time needed
- Anesthesiology consultation may be needed

**Non-Pharmacological Strategies**:
- Cognitive behavioral techniques
- Progressive muscle relaxation
- Guided imagery
- Prism glasses (see out of scanner)
- Video goggles

---

## What MRI Shows That CT Doesn't

### Level 1: Foundation
MRI is better than CT for seeing many parts of the body, especially soft tissues.

**MRI is preferred for**:
- Brain and spinal cord
- Muscles and tendons
- Ligaments and cartilage
- Joint problems
- Tumors (especially brain)
- Multiple sclerosis
- Sports injuries

**CT is preferred for**:
- Bones and fractures
- Lung problems
- Emergency situations
- Kidney stones
- When MRI is contraindicated

### Level 2: Core Understanding
**Tissue Contrast Comparison**:

| Structure | MRI | CT |
|-----------|-----|-----|
| Brain gray/white matter | Excellent | Fair |
| Spinal cord | Excellent | Poor |
| Ligaments | Excellent | Poor |
| Cartilage | Excellent | Poor |
| Bone marrow | Excellent | Fair |
| Acute stroke | Superior (DWI) | Good |
| Bone detail | Good | Excellent |
| Lung parenchyma | Poor | Excellent |
| Calcifications | Poor | Excellent |

**Clinical Scenarios - When to Choose MRI**:

**Brain**:
- Stroke (acute - DWI)
- Brain tumors
- Multiple sclerosis
- Epilepsy evaluation
- Dementia workup

**Spine**:
- Disc herniation
- Spinal cord compression
- Infection (discitis/osteomyelitis)
- Tumors

**Musculoskeletal**:
- Knee ligaments/meniscus
- Shoulder rotator cuff
- Hip labrum
- Stress fractures

### Level 3: Clinical Application
**Specific MRI Advantages**:

**Acute Stroke**:
- DWI shows stroke within minutes
- CT may be normal for hours
- MRI shows extent of damage
- Perfusion helps determine treatment

**Multiple Sclerosis**:
- FLAIR shows white matter lesions
- Gadolinium shows active inflammation
- CT misses most lesions
- Monitors disease activity

**Brain Tumor**:
- Better tumor margins
- Enhancement patterns
- Spectroscopy for grading
- Diffusion for cellularity

**Spine**:
- Spinal cord directly visualized
- Disc material vs. bone spur
- Root compression
- Infection vs. tumor

**Joint Imaging**:
- Meniscal tears
- ACL/PCL injuries
- Rotator cuff tears
- Labral pathology
- Cartilage defects

### Level 4: Advanced Mechanisms
**Physics Behind Superior Soft Tissue Contrast**:

**Why MRI Sees Soft Tissue Better**:
- CT contrast based on X-ray attenuation (density)
- MRI contrast from multiple parameters:
  - Proton density
  - T1 relaxation
  - T2 relaxation
  - Flow
  - Diffusion
  - Chemical composition

**Multiparametric Imaging**:
- Multiple contrasts in one exam
- Different sequences highlight different pathology
- Tissue characterization possible
- Examples: Prostate cancer, liver lesions

### Level 5: Expert Integration
**When Imaging Choice Matters Most**:

**Emergencies**:
| Emergency | First Choice | Reason |
|-----------|--------------|--------|
| Stroke | CT, then MRI | Speed, hemorrhage |
| Trauma | CT | Speed, bones, bleeding |
| Cord compression | MRI | Shows cord directly |
| Cauda equina | MRI | Shows nerve roots |

**Cancer**:
| Cancer Type | MRI Role |
|-------------|----------|
| Brain | Primary modality |
| Prostate | Staging, surveillance |
| Liver | Characterization |
| Rectum | Local staging |
| Bone metastases | Detection |

**Pediatric Considerations**:
- Avoid radiation when possible
- MRI preferred for brain, spine, joints
- May need sedation
- Consider ultrafast MRI protocols

---

## MRI Contrast (Gadolinium)

### Level 1: Foundation
MRI contrast is a special dye containing gadolinium that helps certain structures and abnormalities show up better.

**Key points**:
- Given through an IV (needle in arm vein)
- Different from CT contrast
- Generally very safe
- Should not be used in people with severe kidney problems
- Stays in body briefly before being eliminated

**Common uses**:
- Brain and spine tumors
- Infection
- Blood vessel abnormalities
- Inflammatory conditions

### Level 2: Core Understanding
**When Contrast is Used**:

| Indication | Purpose |
|------------|---------|
| Brain tumor | Detect, characterize, measure |
| Infection/abscess | Ring enhancement |
| Multiple sclerosis | Active vs. inactive lesions |
| Spine pathology | Tumor vs. disc |
| Vascular abnormalities | Aneurysm, malformation |
| Breast MRI | Tumor detection |

**Types of Gadolinium Agents**:
- **Linear** agents (higher NSF risk)
- **Macrocyclic** agents (more stable, preferred)
- Different excretion (renal vs. hepatobiliary)

**Normal Enhancement**:
- Blood vessels
- Pituitary gland
- Choroid plexus
- Dura mater
- Areas without blood-brain barrier

### Level 3: Clinical Application
**Nephrogenic Systemic Fibrosis (NSF)**:

**Risk Factors**:
- eGFR <30 mL/min/1.73m2
- Acute kidney injury
- Use of linear gadolinium agents

**Prevention**:
- Screen kidney function (eGFR)
- Use macrocyclic agents (safer)
- Avoid in severe kidney disease
- Use lowest dose needed

**Current Practice**:
- NSF extremely rare with macrocyclic agents
- Still check kidney function
- Alternatives if severe renal impairment

### Level 4: Advanced Mechanisms
**Gadolinium Brain Deposition**:

**Observations**:
- Signal changes in brain (globus pallidus, dentate)
- Seen with repeated linear agent use
- Clinical significance unclear
- No proven neurological effects

**Response**:
- Prefer macrocyclic agents
- Use only when clinically indicated
- Ongoing research on significance
- Document cumulative doses

**Gadolinium Allergic Reactions**:
- Much rarer than iodinated contrast
- Similar treatment approach
- Premedication for prior reactors
- Most reactions mild

### Level 5: Expert Integration
**Advanced Contrast Applications**:

**Hepatobiliary Agents**:
- Taken up by hepatocytes
- Biliary excretion
- Helps characterize liver lesions
- Distinguishes hepatocellular origin

**Blood Pool Agents**:
- Remain in blood vessels longer
- Better for MR angiography
- Steady-state imaging

**Contrast-Free Alternatives**:
- Arterial Spin Labeling (perfusion)
- Time-of-flight MRA
- Phase contrast MRA
- Native T1/T2 mapping

---

## Common MRI Studies

### Level 1: Foundation

**Brain MRI**:
- **Used for**: Headaches, seizures, memory problems, suspected tumors
- **Preparation**: Usually none
- **Duration**: 30-45 minutes
- **What it shows**: Brain tissue, blood vessels, abnormalities

**Spine MRI**:
- **Used for**: Back pain, leg pain/weakness, disc problems
- **Preparation**: None
- **Duration**: 30-45 minutes per region
- **What it shows**: Discs, nerves, spinal cord

**Knee MRI**:
- **Used for**: Knee pain, injury, suspected ligament tear
- **Preparation**: None
- **Duration**: 30-45 minutes
- **What it shows**: Ligaments, cartilage, meniscus

### Level 2: Core Understanding
**Brain MRI Indications**:
- Stroke
- Tumor
- Multiple sclerosis
- Infection
- Headache (with red flags)
- Seizure
- Cognitive decline

**Spine MRI Indications**:
- Radiculopathy
- Myelopathy
- Trauma (cord evaluation)
- Infection
- Tumor
- Failed back surgery

**Joint MRI Indications**:
- Ligament tears
- Tendon pathology
- Cartilage injury
- Stress fractures
- Bone marrow pathology

### Level 3: Clinical Application
**MRI Protocols by Region**:

**Brain Standard**:
- T1 sagittal or 3D
- T2 axial
- FLAIR axial
- DWI/ADC
- +/- T1 post-gadolinium

**Spine Standard**:
- T1 sagittal
- T2 sagittal
- T2 axial through discs
- +/- STIR if infection/tumor suspected
- +/- post-contrast if indicated

**Knee Standard**:
- Coronal: T1 or PD, T2 FS or STIR
- Sagittal: PD FS, T2
- Axial: T2 FS or PD FS

### Level 4: Advanced Mechanisms
**Specialized Protocols**:

**Cardiac MRI**:
- Gated to ECG
- Cine imaging (function)
- Delayed enhancement (scar/fibrosis)
- Perfusion (ischemia)
- T1/T2 mapping (edema, infiltration)

**Breast MRI**:
- Screening high-risk patients
- Tumor extent evaluation
- Post-treatment surveillance
- Dynamic contrast enhancement

**Prostate MRI (mpMRI)**:
- T2 for anatomy
- DWI for cellular tumors
- DCE for vascularity
- PI-RADS scoring

**MR Enterography**:
- Small bowel evaluation
- Crohn's disease
- Oral contrast for distension
- Wall enhancement patterns

### Level 5: Expert Integration
**Advanced Applications**:

**Functional MRI (fMRI)**:
- Brain mapping for surgery
- Motor, language, visual cortex
- Research applications
- Resting state connectivity

**Cardiac MRI for Cardiomyopathy**:
- Hypertrophic: Wall thickness, obstruction
- Dilated: Function, enhancement
- Arrhythmogenic: Fatty infiltration
- Infiltrative: Amyloid, sarcoid patterns

**Whole-Body MRI**:
- Cancer staging/surveillance
- Multiple myeloma
- Pediatric tumor screening
- Fever of unknown origin

---

## Preparing for Your MRI

### Level 1: Foundation

**Before Your Appointment**:
- Complete safety screening form honestly
- List all surgeries and implants
- Know your kidney function if contrast is planned
- Arrange for someone to drive if taking anxiety medication

**What to Wear**:
- Loose, comfortable clothing without metal
- You'll likely change into a gown
- Remove all jewelry, watches, hair pins
- Leave valuables at home

**On the Day**:
- Eat and drink normally (unless told otherwise)
- Take regular medications
- Arrive early for paperwork
- Use the bathroom before the scan

### Level 2: Core Understanding
**Metal Screening**:

**Always Report**:
- Pacemaker or defibrillator
- Previous surgeries (any implants?)
- Cochlear implant or hearing aid
- Insulin pump or other infusion device
- Aneurysm clips
- Metallic foreign bodies (especially eyes)
- Shrapnel or bullet fragments
- Metal work history

**Documents to Bring**:
- Implant cards or documentation
- Prior surgery records
- Previous imaging CD if requested
- Insurance information

### Level 3: Clinical Application
**Special Preparations**:

| Study | Preparation |
|-------|-------------|
| Brain | None usually |
| Abdomen | Fasting 4 hours (varies) |
| MRCP | Fasting 4-6 hours |
| Pelvis | Comfortable bladder |
| Cardiac | No caffeine day of |
| Contrast studies | Recent kidney function |

---

## What to Expect During the Scan

### Level 1: Foundation

1. **Check-in**: Answer safety questions, change into gown
2. **Positioning**: Lie on padded table, given headphones or earplugs
3. **Equipment**: Coil placed over body part being scanned
4. **Entering scanner**: Table slides into the tube
5. **Scanning**: Loud knocking/banging sounds (normal)
6. **Communication**: Call button available, technologist talks to you
7. **Contrast**: If needed, IV injection during scan
8. **After**: Can resume normal activities immediately

**The sounds**:
- Loud clicking, banging, buzzing
- Hearing protection provided
- Music or audio available
- Different sequences make different sounds

### Level 2: Core Understanding
**During the Scan**:
- Stay as still as possible
- Breathe normally unless instructed
- Scan is multiple sequences with brief pauses
- Each sequence: 2-8 minutes typically
- Total time: 30-60 minutes usually

**Communication**:
- Intercom system
- Call button/squeeze ball
- Technologist monitors throughout
- Can stop scan at any time

**Comfort Measures**:
- Blanket available
- Earplugs and headphones
- Pillow under knees
- Eye mask if desired
- Wedges for positioning

---

## Understanding Your MRI Report

### Level 1: Foundation

**Common Terms**:
| Term | Meaning |
|------|---------|
| Hyperintense | Brighter than normal |
| Hypointense | Darker than normal |
| Signal abnormality | Something looks different |
| Enhancement | Brightens with contrast |
| Disc bulge | Disc pushing out |
| Herniation | Disc material out of place |
| Effusion | Fluid collection |
| Edema | Swelling |

### Level 2: Core Understanding
**Report Structure**:
1. Clinical indication
2. Technique (sequences used, contrast)
3. Comparison (prior studies)
4. Findings (systematic by structure)
5. Impression (summary, diagnoses)

**Understanding Findings**:
- Location described precisely
- Size measured in millimeters
- Signal characteristics described
- Enhancement pattern noted
- Clinical significance interpreted

### Level 3: Clinical Application
**Spine MRI Reporting**:

**Disc Terminology**:
| Term | Definition |
|------|------------|
| Normal | No abnormality |
| Bulge | Circumferential extension |
| Protrusion | Focal extension, base wider than apex |
| Extrusion | Apex wider than base |
| Sequestration | Fragment separated from disc |

**Modifiers**:
- Location: Central, paracentral, foraminal, far lateral
- Effect: Effacing thecal sac, contacting nerve root
- Severity: Mild, moderate, severe stenosis

---

## Key Clinical Pearls

1. **No radiation**: MRI is safe for repeated use and preferred in children when possible
2. **Safety first**: Screen carefully for contraindications, when in doubt, verify
3. **Claustrophobia is common**: Multiple strategies available
4. **Multiple sequences needed**: Different sequences show different pathology
5. **Motion degrades images**: Patience and stillness improve results
6. **Contrast is different**: Gadolinium, not iodine - different risks
7. **Kidney function matters**: Check eGFR before gadolinium in at-risk patients
8. **Clinical correlation essential**: MRI findings must match clinical picture
9. **Prior imaging**: Always compare with previous studies
10. **MRI takes time**: 30-60 minutes, plan accordingly

---

## Summary

MRI provides exceptional soft tissue contrast without ionizing radiation, making it invaluable for evaluating the brain, spine, joints, and many organs. Understanding MRI safety considerations, particularly regarding metal and implants, is essential for patient safety. While longer and more expensive than CT, MRI's superior tissue characterization makes it the preferred modality for many clinical conditions, particularly neurological and musculoskeletal disorders.
