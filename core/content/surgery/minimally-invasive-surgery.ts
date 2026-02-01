/**
 * Minimally Invasive Surgery
 *
 * Comprehensive content covering laparoscopic, robotic, and endoscopic
 * surgical approaches, their advantages over open surgery, recovery
 * differences, and contraindications.
 *
 * nameEs: Cirugía Mínimamente Invasiva
 */

import { EducationalContent } from '../types';

export const minimallyInvasiveSurgery: EducationalContent = {
  id: 'surgery-minimally-invasive',
  type: 'concept',
  name: 'Minimally Invasive Surgery',
  alternateNames: [
    'Cirugía Mínimamente Invasiva',
    'MIS',
    'Keyhole Surgery',
    'Laparoscopic and Robotic Surgery',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Minimally invasive surgery uses tiny cuts instead of large ones, allowing surgeons to operate with small tools and a camera. This usually means less pain and faster recovery.',
      explanation: `When you need surgery, there are different ways a surgeon can perform the operation. **Minimally invasive surgery** uses very small cuts (incisions) instead of one large cut.

**How Does It Work?**
Instead of opening up a large area of your body, the surgeon:
1. Makes a few small cuts (usually 1/2 inch to 1 inch)
2. Inserts a tiny camera to see inside your body on a TV screen
3. Uses long, thin instruments through the small cuts
4. Performs the surgery while watching the screen

**Types of Minimally Invasive Surgery:**

**Laparoscopic Surgery (Belly Surgery)**
- Used for gallbladder removal, appendix removal, hernia repair
- A camera and tools go through small cuts in your belly
- The belly is filled with gas so the surgeon can see

**Robotic Surgery**
- The surgeon sits at a computer console and controls robotic arms
- The robot does NOT operate on its own -- the surgeon controls every move
- Allows very precise movements
- Common for prostate surgery, gynecologic surgery, and some heart procedures

**Endoscopic Procedures**
- A flexible tube with a camera goes through a natural opening (mouth, nose, or bottom)
- Used to look at the stomach, intestines, airways, or joints
- Can remove polyps, take tissue samples, or treat problems
- Often no cuts at all!

**Why Is This Better Than Open Surgery?**
| | Small Cuts (MIS) | Large Cut (Open) |
|---|---|---|
| Scars | Tiny, barely visible | Larger scar |
| Pain after | Less pain | More pain |
| Hospital stay | Go home sooner | Stay longer |
| Recovery | Weeks | Months |
| Infection risk | Lower | Higher |
| Blood loss | Less | More |

**When Can't Minimally Invasive Surgery Be Used?**
Not every surgery can be done this way:
- Very large tumors that need a big opening to remove
- Emergency situations where speed is critical
- When there is too much scar tissue from past surgeries
- Some complex operations that require direct touch

**What to Expect:**
- You will still need anesthesia (be put to sleep)
- You may feel bloated from the gas used during surgery
- The small cuts still need to heal, but they heal faster
- You will have follow-up appointments with your surgeon`,
      keyTerms: [
        { term: 'minimally invasive', definition: 'Surgery done through very small cuts instead of one big cut' },
        { term: 'laparoscopic', definition: 'Surgery in the belly using a camera and small instruments through tiny cuts' },
        { term: 'endoscope', definition: 'A flexible tube with a camera and light used to look inside your body' },
        { term: 'robotic surgery', definition: 'Surgery where the doctor controls a robot to make very precise movements through small cuts' },
      ],
      analogies: [
        'Laparoscopic surgery is like fixing a ship in a bottle -- the surgeon works through small openings using long, thin tools.',
        'The surgical camera is like a tiny flashlight and video camera combined, letting the surgeon see everything on a big TV screen.',
        'Robotic surgery is like a very advanced video game controller -- the surgeon moves their hands and the robot copies those moves exactly inside your body.',
      ],
      examples: [
        'Having your gallbladder removed laparoscopically means 4 tiny cuts instead of one 6-inch cut, and most people go home the same day.',
        'A colonoscopy is an endoscopic procedure where a doctor can look inside your colon and remove polyps without any cuts at all.',
      ],
      patientCounselingPoints: [
        'Ask your surgeon if a minimally invasive option is available for your procedure.',
        'Even with small cuts, follow all your surgeon instructions for recovery.',
        'Some shoulder pain after laparoscopic surgery is normal -- it is from the gas used and goes away in a day or two.',
        'Not every surgery can be done minimally invasively, and that is okay -- your surgeon will choose the safest approach.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Minimally invasive surgery encompasses laparoscopic, robotic, and endoscopic techniques that reduce tissue trauma compared to open surgery, resulting in decreased pain, shorter hospital stays, and faster functional recovery.',
      explanation: `## Overview of Minimally Invasive Surgery (MIS)

Minimally invasive surgery has transformed modern surgical practice. Instead of large incisions, surgeons use specialized instruments and cameras through small ports to perform complex operations.

### Laparoscopic Surgery

**Fundamentals:**
- **Pneumoperitoneum**: CO2 gas inflates the abdomen (12-15 mmHg pressure) to create working space
- **Trocars**: Ports placed through the abdominal wall (5-12 mm diameter)
- **Laparoscope**: A rigid camera providing magnified, high-definition view
- **Instruments**: Graspers, scissors, dissectors, staplers designed for small ports

**Common Laparoscopic Procedures:**
| Procedure | Typical Ports | Hospital Stay |
|-----------|--------------|---------------|
| Cholecystectomy | 4 (5-12 mm) | Same day |
| Appendectomy | 3 (5-12 mm) | Same day to 1 day |
| Inguinal hernia repair | 3 (5-12 mm) | Same day |
| Colectomy | 4-5 (5-12 mm) | 3-5 days |
| Fundoplication (GERD) | 5 (5-12 mm) | 1-2 days |
| Bariatric surgery | 5-6 (5-15 mm) | 1-3 days |

**Key Techniques:**
- **Veress needle**: Creates initial pneumoperitoneum (closed technique)
- **Hasson technique**: Open entry for first trocar (open technique)
- **Triangulation**: Positioning instruments to create working angles
- **Critical view of safety**: Standard technique for identifying structures during cholecystectomy

### Robotic Surgery (da Vinci System)

**How It Works:**
1. **Surgeon console**: The surgeon sits at an ergonomic console with 3D visualization
2. **Patient cart**: Robotic arms dock to trocars placed in the patient
3. **Vision system**: Dual-camera 3D, high-definition view with 10x magnification
4. **EndoWrist instruments**: Instruments with 7 degrees of freedom (wrist-like motion)

**Advantages Over Standard Laparoscopy:**
- 3D visualization (vs 2D in standard laparoscopy)
- Wristed instruments allow complex movements in tight spaces
- Tremor filtration (removes natural hand shake)
- Motion scaling (large hand movements become small instrument movements)
- Ergonomic surgeon position (reduces fatigue)

**Common Robotic Procedures:**
- Prostatectomy (most common robotic procedure)
- Hysterectomy
- Partial nephrectomy (kidney surgery)
- Colorectal surgery
- Cardiac valve repair (selected cases)
- Head and neck surgery (TORS -- Transoral Robotic Surgery)

**Limitations:**
- No tactile (touch) feedback
- Higher cost ($1-2.5 million for system, ~$2,000 per case for instruments)
- Larger trocar size (8 mm robotic ports)
- Longer setup and docking time
- Requires specialized training

### Endoscopic Procedures

**Types by Access Route:**
| Type | Access | Views |
|------|--------|-------|
| EGD (upper endoscopy) | Mouth | Esophagus, stomach, duodenum |
| Colonoscopy | Rectum | Colon and terminal ileum |
| Bronchoscopy | Mouth/nose | Airways and lungs |
| Cystoscopy | Urethra | Bladder |
| Arthroscopy | Skin (joint) | Joint interior |
| ERCP | Mouth | Bile and pancreatic ducts |

**Therapeutic Capabilities:**
- Polypectomy (polyp removal)
- Hemostasis (stop bleeding)
- Stent placement
- Dilation of strictures
- Mucosal resection (EMR) for early cancers
- Submucosal dissection (ESD) for larger lesions
- Stone extraction (ERCP)

### Advantages vs Open Surgery

**Evidence-Based Benefits:**
| Outcome | MIS | Open |
|---------|-----|------|
| Incision length | 0.5-1.2 cm each | 10-30 cm |
| Blood loss | 50-100 mL | 200-500 mL |
| Hospital stay | 0-3 days | 5-10 days |
| Return to work | 1-3 weeks | 4-8 weeks |
| Wound infection | 1-3% | 5-10% |
| Hernia at incision | <1% | 5-15% |
| Postoperative pain | Significantly less | More |
| Cosmesis | Superior | Larger scar |

### Recovery Differences

**Typical Recovery Timeline (Laparoscopic Cholecystectomy):**
- Day 0: Surgery and discharge (same day or next morning)
- Days 1-3: Mild soreness, shoulder tip pain from CO2
- Days 3-7: Light activities, short walks
- Week 2: Return to desk work
- Week 3-4: Resume exercise and heavy lifting
- Week 6: Full activity

**Compared to Open Cholecystectomy:**
- Hospital stay: 2-4 days
- Return to work: 4-6 weeks
- Full recovery: 6-8 weeks

### Contraindications

**Absolute Contraindications:**
- Hemodynamic instability (too unstable for pneumoperitoneum)
- Uncorrectable coagulopathy
- Large diaphragmatic hernia (for abdominal laparoscopy)

**Relative Contraindications:**
- Extensive prior abdominal surgery (adhesions)
- Severe cardiopulmonary disease (cannot tolerate CO2 or positioning)
- Morbid obesity (technical difficulty)
- Large tumors requiring en bloc removal
- Pregnancy (relative; second trimester safest if needed)
- Suspicion of diffuse peritonitis

**Conversion to Open:**
- Not a complication -- it is a safety decision
- Rate varies: 2-5% for cholecystectomy, 10-20% for complex cases
- Common reasons: Unclear anatomy, bleeding, adhesions, unexpected findings`,
      keyTerms: [
        { term: 'pneumoperitoneum', definition: 'Inflation of the abdomen with CO2 gas to create space for laparoscopic surgery' },
        { term: 'trocar', definition: 'A hollow tube placed through the abdominal wall through which instruments and camera are passed' },
        { term: 'EndoWrist', definition: 'Robotic instrument technology with 7 degrees of freedom, mimicking human wrist motion' },
        { term: 'ERCP', definition: 'Endoscopic Retrograde Cholangiopancreatography -- endoscopic procedure to treat bile duct and pancreatic problems' },
        { term: 'conversion', definition: 'Changing from a minimally invasive approach to an open incision during surgery, usually for safety' },
      ],
      analogies: [
        'Trocars are like doorways -- the surgeon passes instruments through them to work inside the body.',
        'The da Vinci robot\'s wristed instruments are like having tiny hands inside the patient, able to move in ways straight laparoscopic tools cannot.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Minimally invasive surgical techniques utilize pneumoperitoneum, advanced optics, and instrument technology to reduce tissue trauma and systemic inflammatory response, with established superiority for many procedures and expanding indications through robotic and endoscopic platforms.',
      explanation: `## Physiologic Basis of MIS Benefits

### Reduced Surgical Stress Response

**Open Surgery Stress Response:**
- Large incision triggers significant neuroendocrine response
- Cortisol, catecholamines, cytokines (IL-6, TNF-α) markedly elevated
- Immunosuppression lasting days to weeks
- Hyperglycemia, catabolism, fluid shifts

**MIS Attenuated Response:**
- IL-6 levels 50-70% lower vs open surgery
- Preserved cell-mediated immunity (NK cells, lymphocytes)
- Less postoperative immunosuppression
- Reduced insulin resistance and hyperglycemia
- Lower C-reactive protein peaks

**Clinical Significance:**
- Reduced immunosuppression may benefit oncologic outcomes
- Less systemic inflammation → Fewer organ dysfunction complications
- Preserved immune function → Lower infectious complications

### Pneumoperitoneum Physiology

**Hemodynamic Effects:**
| Pressure | Effect |
|----------|--------|
| <12 mmHg | Minimal hemodynamic impact |
| 12-15 mmHg | Standard; venous return may decrease |
| >15 mmHg | Significant IVC compression, decreased cardiac output |
| >20 mmHg | Abdominal compartment physiology |

**Respiratory Effects:**
- Diaphragm elevation → Reduced FRC and compliance
- V/Q mismatch → Potential hypoxemia
- CO2 absorption → Respiratory acidosis (compensated by increased ventilation)
- Trendelenburg position compounds effects

**Physiologic Adaptations:**
- Reverse Trendelenburg for upper abdominal surgery improves ventilation
- Low-pressure pneumoperitoneum (8-10 mmHg) with deep neuromuscular blockade
- Humidified, warmed CO2 reduces peritoneal irritation

### Laparoscopic Surgery: Technical Principles

**Port Placement Strategy:**
- Camera port: Central or periumbilical
- Working ports: Triangulated around target
- Optimal angle: 60° between instruments
- Distance: 15-20 cm from target
- Baseball diamond concept for multi-quadrant procedures

**Energy Devices:**
| Device | Mechanism | Temperature | Lateral Spread |
|--------|-----------|-------------|----------------|
| Monopolar electrosurgery | Electrical current through tissue | >200°C | 3-5 mm |
| Bipolar electrosurgery | Current between instrument jaws | <100°C | 1-2 mm |
| Ultrasonic (Harmonic) | Mechanical vibration | 50-100°C | 1-3 mm |
| Advanced bipolar (LigaSure) | Bipolar + pressure | <100°C | 1-2 mm |

**Critical View of Safety (CVS) in Cholecystectomy:**
1. Hepatocystic triangle cleared of fat and fibrous tissue
2. Lower 1/3 of gallbladder separated from liver bed
3. Only two structures seen entering the gallbladder
- Reduces bile duct injury from 0.5% to <0.1%
- Considered standard of care

### Robotic Surgery Platform

**da Vinci System Architecture:**
- **Xi Platform**: Most current general model
  - 4 arms, overhead boom design
  - Multi-quadrant access without re-docking
  - Integrated table motion
  - Fluorescence imaging (Firefly with ICG)

- **SP (Single Port)**: Single 2.5 cm incision
  - Three instruments + camera through one cannula
  - Designed for confined spaces (oropharynx, retroperitoneum)

**Instrument Technology:**
- 7 degrees of freedom: Pitch, yaw, roll, grip + 3 axis translation
- Tremor filtration: 6 Hz filter removes physiologic tremor
- Motion scaling: Up to 5:1 (surgeon moves 5 cm, instrument moves 1 cm)
- Clutching: Reposition hand controls without moving instruments

**Training Pathway:**
1. Online didactic modules
2. Simulation (dry lab, virtual reality)
3. Wet lab (cadaver or animal model)
4. Bedside assistant cases (10-20)
5. Proctored console cases (15-25)
6. Independent practice with outcomes tracking

### Advanced Endoscopic Techniques

**Natural Orifice Transluminal Endoscopic Surgery (NOTES):**
- Access through mouth, vagina, or rectum
- Transgastric, transvaginal, or transrectal approach
- True scarless surgery
- Limited clinical adoption: Safety concerns, closure difficulty
- Hybrid approaches more practical

**Endoscopic Submucosal Dissection (ESD):**
- En bloc resection of superficial GI neoplasms
- Higher complete resection rate vs EMR for lesions >20 mm
- Technically demanding: Higher perforation risk (4-5%)
- Standard in Japan/Korea; gaining adoption in West

**Third-Space Endoscopy:**
- Peroral Endoscopic Myotomy (POEM) for achalasia
- Submucosal tunneling techniques
- Zenker's diverticulotomy (Z-POEM)
- Gastric peroral endoscopic pyloromyotomy (G-POEM) for gastroparesis

### Comparative Outcomes Data

**Laparoscopic vs Open Colectomy (COLOR, CLASICC trials):**
- Equivalent oncologic outcomes (lymph node harvest, margins)
- Laparoscopic: Faster recovery, shorter hospital stay
- Equivalent long-term survival and recurrence
- Established standard for colon cancer

**Robotic vs Laparoscopic Prostatectomy:**
- RARP (Robotic-Assisted Radical Prostatectomy): >85% of prostatectomies in US
- Outcomes: Lower blood loss, fewer transfusions
- Functional outcomes (continence, potency): Slightly better or equivalent
- Learning curve: 150-250 cases for proficiency

**VATS vs Open Lobectomy (lung cancer):**
- VIOLET Trial (2019): VATS equivalent oncologic outcomes
- Less postoperative pain
- Shorter chest tube duration and hospital stay
- Higher upfront costs offset by shorter recovery`,
      keyTerms: [
        { term: 'critical view of safety', definition: 'Standard technique in cholecystectomy requiring clear identification of cystic duct and artery with gallbladder separation from liver bed' },
        { term: 'NOTES', definition: 'Natural Orifice Transluminal Endoscopic Surgery -- access through natural body openings for scarless procedures' },
        { term: 'ESD', definition: 'Endoscopic Submucosal Dissection -- technique for en bloc resection of superficial GI tumors' },
        { term: 'POEM', definition: 'Peroral Endoscopic Myotomy -- endoscopic treatment for achalasia through submucosal tunneling' },
        { term: 'ICG fluorescence', definition: 'Indocyanine green fluorescence imaging for real-time visualization of blood flow, bile ducts, and lymphatics during surgery' },
      ],
      clinicalNotes: 'The critical view of safety in laparoscopic cholecystectomy has been shown to significantly reduce bile duct injuries and is now considered the standard of care. If the CVS cannot be achieved, alternative strategies include subtotal cholecystectomy, intraoperative cholangiography, or conversion to open surgery. Never clip or cut a structure until it is clearly identified.',
    },
    4: {
      level: 4,
      summary:
        'Advanced minimally invasive surgery integrates multi-platform technologies, fluorescence-guided surgery, augmented reality navigation, and evidence-based credentialing to expand the scope of MIS while maintaining safety and quality through structured training and outcomes monitoring.',
      explanation: `## Advanced Technological Integration

### Fluorescence-Guided Surgery

**Indocyanine Green (ICG):**
- Near-infrared fluorescence imaging (excitation 780 nm, emission 830 nm)
- Hepatic clearance → Biliary excretion
- Applications:
  - **Cholangiography**: Real-time bile duct visualization (reduces bile duct injury)
  - **Perfusion assessment**: Bowel anastomosis, tissue flaps
  - **Lymphatic mapping**: Sentinel lymph node identification
  - **Tumor identification**: Hepatocellular carcinoma (selective uptake)
  - **Ureteral identification**: Reduces iatrogenic ureteral injury

**5-ALA (5-Aminolevulinic Acid):**
- Oral administration → Metabolized to protoporphyrin IX (PpIX) in tumor cells
- Violet-blue excitation → Red fluorescence in tumor tissue
- Applications: Glioma resection (extent of resection), bladder cancer

**Sentinel Lymph Node Mapping:**
- ICG or technetium-99m injection near tumor
- Fluorescence or gamma probe identifies draining lymph nodes
- Guides lymphadenectomy extent in breast, melanoma, GI cancers

### Augmented Reality and Navigation

**Intraoperative Navigation:**
- Preoperative 3D CT/MRI reconstruction overlaid on surgical field
- Electromagnetic or optical tracking systems
- Applications: Hepatic surgery (tumor localization), orthopedic surgery

**Augmented Reality:**
- Heads-up display integration with robotic console
- Real-time anatomical overlay
- Vascular mapping from preoperative imaging
- Research stage: Limited by registration accuracy and tissue deformation

### Single-Incision and Reduced-Port Surgery

**Single-Incision Laparoscopic Surgery (SILS):**
- All instruments through one umbilical incision
- Technical challenges: Instrument crowding, limited triangulation
- Special articulating instruments required
- Cosmetic advantage: Hidden scar in umbilicus
- Evidence: Equivalent safety but longer operative times

**Reduced-Port Strategies:**
- Mini-laparoscopy (3 mm instruments)
- Combination of standard + mini ports
- Single-site robotic (da Vinci SP)
- Balance: Cosmesis vs ergonomics and safety

### Simulation and Training

**Validated Simulation Platforms:**
| Platform | Type | Assessment |
|----------|------|------------|
| FLS (Fundamentals of Laparoscopic Surgery) | Box trainer tasks | Timed skills, pass/fail |
| FRS (Fundamentals of Robotic Surgery) | Virtual reality | Cognitive + psychomotor |
| GAGES (Global Assessment of GI Endoscopic Skills) | Clinical assessment | Structured observation |
| dV-Trainer | Robotic VR simulation | Instrument handling, camera |

**Learning Curve Analysis:**
- CUSUM (Cumulative Sum) analysis for competency tracking
- Laparoscopic cholecystectomy: 15-30 cases for basic proficiency
- Robotic prostatectomy: 150-250 cases for optimal outcomes
- Laparoscopic colectomy: 40-70 cases for competency

**Credentialing Standards:**
- SAGES (Society of American Gastrointestinal and Endoscopic Surgeons) guidelines
- Institutional privileging: Training documentation, proctoring, outcomes
- Maintenance of competence: Volume thresholds, ongoing quality review

### Advanced Robotic Platforms

**Emerging Systems:**
| System | Manufacturer | Features |
|--------|-------------|----------|
| da Vinci 5 | Intuitive Surgical | Force feedback, advanced imaging |
| Hugo RAS | Medtronic | Open-console, modular arms |
| Versius | CMR Surgical | Portable, independent arms |
| Ion | Intuitive Surgical | Robotic bronchoscopy platform |
| Monarch | J&J/Auris | Robotic endoscopy |

**Robotic Bronchoscopy:**
- Navigate to peripheral lung nodules
- Electromagnetic navigation + CT overlay
- Biopsy yield: ~70-80% for peripheral lesions (vs ~30-50% conventional)
- Applications: Diagnosis, fiducial placement, ablation delivery

**Robotic Flexible Endoscopy:**
- Improved scope stability and maneuverability
- Reduced operator fatigue for prolonged procedures
- Applications: Complex polypectomy, ESD, ERCP

### Outcomes and Quality

**Volume-Outcome Relationship in MIS:**
- High-volume surgeons: Lower complication rates, shorter operative times
- Institutional volume matters for complex MIS procedures
- Centralization debate: Quality vs access

**Real-Time Quality Assessment:**
| Metric | Tool | Application |
|--------|------|-------------|
| Intraoperative events | MISS (MIS Severity Scale) | Classify adverse events |
| Technical skill | GOALS (Global Operative Assessment) | Structured assessment |
| Surgical phases | AI video analysis | Automated workflow recognition |
| Critical view | CVS scoring system | Cholecystectomy safety |

**Machine Learning in MIS:**
- Automated surgical phase recognition from video
- Real-time anatomy identification (deep learning)
- Instrument tracking and motion analysis
- Predictive models for conversion risk
- Early detection of adverse events

### Cost Analysis

**MIS vs Open Cost Comparison:**
| Component | MIS | Open | Net |
|-----------|-----|------|-----|
| OR time | +$500-1,500 | Baseline | MIS higher |
| Instruments | +$1,000-3,000 | Baseline | MIS higher |
| Hospital stay | -$2,000-5,000 | Baseline | MIS lower |
| Complications | -$1,500-3,000 | Baseline | MIS lower |
| Return to work | -$2,000-4,000 | Baseline | MIS lower |
| **Net** | | | **MIS cost-neutral to saving** |

**Robotic vs Laparoscopic:**
- Additional cost: $2,000-5,000 per case
- Capital cost: $1-2.5M per system + $150K/year maintenance
- Justification requires volume >150-200 cases/year
- Cost gap narrowing with competition and new platforms`,
      keyTerms: [
        { term: 'CUSUM analysis', definition: 'Cumulative Sum analysis -- statistical method tracking sequential surgical outcomes to determine learning curve completion' },
        { term: 'FLS', definition: 'Fundamentals of Laparoscopic Surgery -- validated training and assessment program for basic laparoscopic skills', pronunciation: 'F-L-S' },
        { term: '5-ALA', definition: '5-Aminolevulinic acid -- photosensitizer metabolized to fluorescent protoporphyrin IX selectively in tumor cells' },
        { term: 'SILS', definition: 'Single-Incision Laparoscopic Surgery -- technique performing entire procedure through one umbilical incision' },
        { term: 'haptic feedback', definition: 'Tactile sensation transmitted from instrument to surgeon; absent in current robotic systems, emerging in next generation' },
      ],
      clinicalNotes: 'The volume-outcome relationship in MIS is well-established: surgeons and institutions performing higher volumes of complex MIS procedures have better outcomes. When referring patients for complex laparoscopic or robotic procedures (e.g., pancreaticoduodenectomy, esophagectomy), consider referral to high-volume centers. The additional travel burden is offset by reduced complication rates.',
    },
    5: {
      level: 5,
      summary:
        'The frontier of minimally invasive surgery encompasses AI-assisted intraoperative decision-making, autonomous surgical systems, molecular-guided resection, and novel energy platforms, operating within a framework of innovation governance, equity of access, and value-based surgical care.',
      explanation: `## AI and Autonomous Surgical Systems

### Computer Vision in Surgery

**Surgical Scene Understanding:**
- Semantic segmentation: Pixel-level identification of anatomy and instruments
- Depth estimation: 3D reconstruction from endoscopic video
- Phase recognition: Automated identification of surgical steps
- Action recognition: Classify surgeon actions (grasp, cut, clip, retract)

**Clinical Applications:**
| Application | Maturity | Clinical Impact |
|-------------|----------|-----------------|
| Surgical phase recognition | Deployed (limited) | Workflow optimization, OR scheduling |
| Critical view of safety scoring | Late research | Intraoperative safety checkpoint |
| Hemorrhage detection | Early research | Real-time warning system |
| Instrument tracking | Deployed (research) | Skill assessment, training |
| Anatomy identification | Mid research | Reduced iatrogenic injury |

**Regulatory Pathway:**
- FDA De Novo classification for AI-assisted surgical tools
- Locked vs adaptive algorithms (continuous learning raises regulatory challenges)
- Human-in-the-loop requirement for patient safety
- Post-market surveillance: Real-world performance monitoring

### Autonomous and Semi-Autonomous Systems

**Levels of Surgical Autonomy (Yang et al.):**
| Level | Description | Example |
|-------|-------------|---------|
| 0 | No autonomy | Standard instruments |
| 1 | Robot assistance | Tremor filter, motion scaling |
| 2 | Task autonomy | Automated suturing, camera hold |
| 3 | Conditional autonomy | Autonomous subtask execution |
| 4 | High autonomy | Surgery with surgeon oversight |
| 5 | Full autonomy | No human involvement |

**Current State:**
- Level 1-2: Commercially available (da Vinci, STAR system)
- STAR (Smart Tissue Autonomous Robot): Demonstrated autonomous intestinal anastomosis in porcine model (2022)
- Challenges: Tissue variability, unexpected anatomy, real-time adaptation
- Timeline: Level 3 tasks likely within 5-10 years; full autonomy decades away

### Molecular and Image-Guided Precision Surgery

**Intraoperative Molecular Imaging:**
- Tumor-specific fluorescent agents:
  - OTL38 (pafolacianine): Folate receptor-targeted, FDA-approved for ovarian cancer, lung nodules
  - SGM-101: CEA-targeted for colorectal cancer (clinical trials)
  - ABY-029: EGFR-targeted for glioma margin assessment
- Raman spectroscopy: Molecular fingerprint of tissue in real-time
- Confocal laser endomicroscopy: In vivo histology at cellular level

**Intraoperative MRI/CT:**
- Real-time imaging during neurosurgery, hepatobiliary surgery
- Registration challenges: Tissue deformation (brain shift, organ mobilization)
- Hybrid OR design: Combining imaging suites with surgical capability

**Radiomics-Guided Surgery:**
- Preoperative imaging features predict tumor biology
- Guide surgical extent, margin adequacy, lymph node harvest
- Integration with intraoperative navigation systems

### Novel Energy and Tissue Interaction Platforms

**Laser Surgery:**
| Type | Wavelength | Application |
|------|-----------|-------------|
| CO2 | 10,600 nm | Soft tissue vaporization (ENT, gynecology) |
| Holmium:YAG | 2,100 nm | Lithotripsy, tissue ablation |
| Thulium fiber | 1,940 nm | BPH enucleation (ThuLEP) |
| Nd:YAG | 1,064 nm | Deep tissue coagulation |

**Irreversible Electroporation (IRE / NanoKnife):**
- Non-thermal tissue ablation using electrical pulses
- Preserves collagenous structures (vessels, ducts)
- Applications: Pancreatic tumors near vessels, hepatic tumors
- No heat sink effect (advantage near blood vessels)

**MR-Guided Focused Ultrasound (MRgFUS):**
- Non-invasive thermal ablation guided by MRI thermometry
- FDA-approved: Uterine fibroids, bone metastases, essential tremor
- Investigational: Breast tumors, prostate, liver
- Truly non-invasive: No incision, no anesthesia for some indications

### Innovation Governance and Ethics

**Safe Introduction of Surgical Innovation:**
- IDEAL Framework (Idea, Development, Exploration, Assessment, Long-term study):
  - Stage 1: First-in-human case reports
  - Stage 2a: Development (learning curve studies)
  - Stage 2b: Exploration (prospective cohorts)
  - Stage 3: Assessment (RCTs)
  - Stage 4: Long-term surveillance

**Ethical Considerations:**
- Patient informed consent for novel techniques
- Learning curve disclosure: Should patients know surgeon's experience level?
- Industry influence: Financial relationships with device manufacturers
- Innovation vs standard of care: When is a new technique "experimental"?

**Marketing vs Evidence:**
- Robotic surgery marketing often outpaces evidence
- Direct-to-consumer advertising creates patient demand
- Surgeon conflict of interest (consulting, proctoring fees)
- Need for independent, rigorous comparative effectiveness research

### Equity and Access

**Global MIS Access Disparities:**
- High-income countries: >90% of cholecystectomies laparoscopic
- Low/middle-income countries: <20% laparoscopic access
- Barriers: Equipment cost, training infrastructure, maintenance
- Solutions: Refurbished equipment programs, simulation training, telementoring

**Domestic Disparities:**
- Rural hospitals: Less MIS availability, higher conversion rates
- Safety-net hospitals: Lower robotic adoption
- Racial disparities: Black patients less likely to receive MIS approach
- Solutions: Telesurgery, hub-and-spoke models, targeted training programs

**Telesurgery and Telementoring:**
- 5G-enabled remote surgical guidance
- Remote proctoring for surgeons in training
- Latency requirement: <200 ms for safe telesurgery
- Legal/licensing challenges: Cross-jurisdictional practice
- Successful demonstrations: Transcontinental robot-assisted surgery

### Value-Based MIS

**Defining Value in MIS:**
Value = (Quality of outcomes + Patient experience) / (Cost over full episode)

**Episode-Based Cost Analysis:**
- Include: Preoperative workup, surgery, recovery, complications, lost productivity
- MIS often cost-effective or cost-saving on episode basis despite higher OR costs
- Robotic: Value depends on volume, case complexity, and avoiding complications

**Quality Metrics for MIS Programs:**
1. Case volume by procedure complexity
2. Conversion rate (with risk adjustment)
3. Complication rates (standardized definitions)
4. Reoperation rates
5. Patient-reported outcomes
6. Learning curve monitoring for new surgeons/procedures
7. Equity metrics (access, disparities by demographics)`,
      keyTerms: [
        { term: 'IDEAL framework', definition: 'Staged approach to surgical innovation evaluation: Idea, Development, Exploration, Assessment, Long-term study' },
        { term: 'pafolacianine', definition: 'FDA-approved folate receptor-targeted fluorescent agent for intraoperative tumor identification in ovarian and lung cancer' },
        { term: 'surgical autonomy levels', definition: 'Classification system (0-5) describing degree of robot independence in surgical tasks, from no autonomy to full autonomy' },
        { term: 'irreversible electroporation', definition: 'Non-thermal ablation technology using electrical pulses to create nanopores in cell membranes, preserving connective tissue architecture' },
        { term: 'telesurgery', definition: 'Remote performance of surgery via robotic system with telecommunication link; requires low-latency (<200 ms) connection' },
      ],
      clinicalNotes: `Key Practice Points:
1. AI-assisted surgery is transitioning from research to clinical deployment; surgeons must understand capabilities and limitations
2. The IDEAL framework provides structure for evaluating surgical innovations before widespread adoption
3. Tumor-specific fluorescent agents represent a paradigm shift toward molecular-guided surgery
4. Autonomous surgical systems remain Level 1-2; full autonomy is not imminent but subtask automation is advancing
5. Equity in MIS access is a professional responsibility; telementoring and training partnerships can bridge gaps
6. Marketing pressures must be balanced by evidence-based adoption decisions
7. Value-based analysis should consider the full episode of care, not just operative costs`,
    },
  },

  media: [
    {
      id: 'mis-approaches-comparison',
      type: 'diagram',
      filename: 'mis-approaches-comparison.svg',
      title: 'Minimally Invasive Surgical Approaches',
      description: 'Comparison diagram of laparoscopic, robotic, and endoscopic approaches with incision sizes and instrument configurations',
    },
    {
      id: 'robotic-surgery-setup',
      type: 'diagram',
      filename: 'robotic-surgery-setup.svg',
      title: 'Robotic Surgery System Components',
      description: 'Illustration of da Vinci system showing surgeon console, patient cart, and vision system',
    },
    {
      id: 'mis-vs-open-recovery',
      type: 'diagram',
      filename: 'mis-vs-open-recovery.svg',
      title: 'Recovery Timeline: MIS vs Open Surgery',
      description: 'Timeline comparison of recovery milestones for minimally invasive vs open surgical approaches',
    },
  ],

  citations: [
    {
      id: 'color-trial',
      type: 'article',
      title: 'Laparoscopic surgery versus open surgery for colon cancer: short-term outcomes of a randomised trial',
      authors: ['COLOR Study Group'],
      source: 'Lancet Oncology',
      url: 'https://doi.org/10.1016/S1470-2045(05)70014-6',
    },
    {
      id: 'violet-trial-2019',
      type: 'article',
      title: 'Video-assisted thoracoscopic lobectomy versus conventional open lobectomy for lung cancer (VIOLET)',
      authors: ['Lim, E.', 'Batchelor, T.', 'Shackcloth, M.'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(19)31363-5',
    },
    {
      id: 'yang-autonomy-2017',
      type: 'article',
      title: 'Medical robotics--Regulatory, ethical, and legal considerations for increasing levels of autonomy',
      authors: ['Yang, G.Z.', 'Cambias, J.', 'Cleary, K.'],
      source: 'Science Robotics',
    },
    {
      id: 'sages-guidelines',
      type: 'website',
      title: 'SAGES Guidelines and Standards of Practice',
      source: 'Society of American Gastrointestinal and Endoscopic Surgeons',
      url: 'https://www.sages.org/publications/guidelines/',
    },
    {
      id: 'schwartz-mis',
      type: 'textbook',
      title: 'Minimally Invasive Surgery',
      source: "Schwartz's Principles of Surgery",
      chapter: '14',
    },
  ],

  crossReferences: [
    { targetId: 'surgery-common-surgical-procedures', targetType: 'topic', relationship: 'related', label: 'Common Surgical Procedures' },
    { targetId: 'surgery-anesthesia-types', targetType: 'topic', relationship: 'related', label: 'Anesthesia Types' },
    { targetId: 'surgery-vs-conservative', targetType: 'concept', relationship: 'related', label: 'Surgery vs Conservative Treatment' },
    { targetId: 'surgery-surgical-complications', targetType: 'topic', relationship: 'related', label: 'Surgical Complications' },
    { targetId: 'surgery-post-operative-care', targetType: 'topic', relationship: 'related', label: 'Post-Operative Care' },
  ],

  tags: {
    systems: ['surgical', 'gastrointestinal', 'urologic', 'gynecologic', 'cardiovascular'],
    topics: [
      'minimally invasive surgery',
      'laparoscopic surgery',
      'robotic surgery',
      'endoscopic procedures',
      'surgical technology',
      'da Vinci',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default minimallyInvasiveSurgery;
